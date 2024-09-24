(function() {
  "use strict";
  const editPage = "";
  const $ = window.jQuery;
  const wp = window.wp;
  class EditPage {
    constructor(args) {
      this.isEditorEnabled = args.is_editor_enabled;
      this.postId = args.post_id;
      this.l10n = args.l10n;
      this.isProcessingAction = false;
      this.cacheDom();
      this.attachEvents();
      this.$document.on("heartbeat-error", this.onHearBeatError.bind(this));
      this.$document.on("heartbeat-tick.autosave", this.onHearBeatReceived.bind(this));
    }
    cacheDom() {
      this.$document = $(document);
      this.$window = $(window);
      this.$body = $("body");
      this.$postTitle = $("#title");
      this.$editorActivateButton = $(".znpb-admin-post__edit-button--activate");
      this.$editorDeactivateButton = $(".znpb-admin-post__edit-button--deactivate");
      this.$buttonsWrapper = $(".znpb-admin-post__edit-buttons-wrapper");
    }
    attachEvents() {
      this.$editorActivateButton.on("click", this.onEditButtonPress.bind(this));
      this.$editorDeactivateButton.on("click", this.onDisableButtonPress.bind(this));
    }
    /**
     *
     * @param {string} stringId The string id for which we need to return the translated string
     */
    getTranslatedString(stringId) {
      if (typeof this.l10n[stringId] !== "undefined") {
        return this.l10n[stringId];
      }
    }
    /**
     * Triggers on heartbeat error and returns the button functionality to initial state
     */
    onHearBeatError() {
      this.isProcessingAction = false;
      this.$editorActivateButton.removeClass("znpb-admin-post__edit-button--loading");
      this.$editorDeactivateButton.removeClass("znpb-admin-post__edit-button--loading");
    }
    /**
     * On heartbeat received
     */
    onHearBeatReceived(event, data) {
      if (typeof data.zion_builder_status !== "undefined") {
        this.setEditorStatus(data.zion_builder_status);
        if (this.isEditorEnabled) {
          this.$window.off("beforeunload.edit-post");
          window.history.replaceState({ id: this.postId }, "Post " + this.postId, this.getPostEditURL());
          location.href = this.$editorActivateButton.attr("href");
        }
      }
      this.isProcessingAction = false;
      this.$editorActivateButton.removeClass("znpb-admin-post__edit-button--loading");
      this.$editorDeactivateButton.removeClass("znpb-admin-post__edit-button--loading");
    }
    getPostEditURL() {
      return `post.php?post=${this.postId}&action=edit`;
    }
    /**
     * Toogle editor status ( active/inactive )
     */
    setEditorStatus(status) {
      this.isEditorEnabled = status;
      this.updateUi(status);
    }
    updateUi(status) {
      if (status) {
        this.$body.addClass("znpb-admin-post-editor--active");
      } else {
        this.$body.removeClass("znpb-admin-post-editor--active");
      }
    }
    /**
     * Triggers WP autosave if it is available
     * If WP autosave is not available, it will display an error message
     *
     * @param {*} event
     */
    onEditButtonPress(event) {
      if (!this.isEditorEnabled) {
        event.preventDefault();
        if (!this.$postTitle.val()) {
          this.$postTitle.val(`ZionBuilder #${this.postId}`).trigger("input");
        }
        if (wp.autosave) {
          this.$window.off("beforeunload.edit-post");
          this.$editorActivateButton.addClass("znpb-admin-post__edit-button--loading");
          this.saveEditorStatus(true);
        } else {
          alert(this.getTranslatedString("wp_heartbeat_disabled"));
        }
      }
    }
    saveEditorStatus(status) {
      if (this.isProcessingAction) {
        return;
      }
      const postId = this.postId;
      this.isProcessingAction = true;
      $(document).on("heartbeat-send.autosave", function(event, data) {
        data.zion_builder_status = status;
        data.zion_builder_post_id = postId;
      });
      wp.autosave.server.triggerSave();
    }
    /**
     * Triggers WP autosave if it is available
     * If WP autosave is not available, it will display an error message
     *
     * @param {*} event
     */
    onDisableButtonPress(event) {
      event.preventDefault();
      if (this.isEditorEnabled) {
        this.$editorDeactivateButton.addClass("znpb-admin-post__edit-button--loading");
        this.saveEditorStatus(false);
      }
    }
  }
  new EditPage(window.ZnPbEditPostData.data);
})();
