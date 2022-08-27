const { GObject, St, Clutter } = imports.gi;
const { popupMenu: PopupMenu } = imports.ui;

var ErrorMenuItem = GObject.registerClass(
  class ErrorMenuItem extends PopupMenu.PopupBaseMenuItem {
    _init(message) {
      super._init({
        style_class: 'error',
        reactive: false,
        activate: false,
        hover: false,
        can_focus: true,
      });

      this.label = new St.Label({
        text: message,
        x_expand: true,
        y_expand: true,
        x_align: Clutter.ActorAlign.CENTER,
        y_align: Clutter.ActorAlign.CENTER,
      });
      this.add_child(this.label);
      this.label_actor = this.label;

      this.set_child_above_sibling(this._ornamentLabel, this.label);
    }
  }
);
