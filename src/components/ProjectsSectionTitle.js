const { GObject, Gio, St, Clutter } = imports.gi;
const { popupMenu: PopupMenu } = imports.ui;

var ProjectsSectionTitle = GObject.registerClass(
  class ProjectsSectionTitle extends PopupMenu.PopupBaseMenuItem {
    _init(text, icon) {
      super._init({
        style_class: 'section-title',
        reactive: false,
        activate: false,
        hover: false,
        can_focus: true,
      });

      this._icon = new St.Icon({
        style_class: 'popup-menu-icon',
        x_align: Clutter.ActorAlign.CENTER,
      });
      this.add_child(this._icon);
      this.label = new St.Label({
        text,
        y_expand: true,
        y_align: Clutter.ActorAlign.CENTER,
      });
      this.add_child(this.label);
      this.label_actor = this.label;

      // Report to Upstream (same issue on CustomPopupMenuItem):
      // Why do we even need this ornamentLabel, this is so hacky!
      // (This is the default implementation of popupMenu.PopupImageMenuItem)
      // https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/popupMenu.js#L453
      this.set_child_above_sibling(this._ornamentLabel, this.label);

      this._setIcon(icon);
    }

    _setIcon(icon) {
      // The 'icon' parameter can be either a Gio.Icon or a string.
      if (icon instanceof GObject.Object && GObject.type_is_a(icon, Gio.Icon))
        this._icon.gicon = icon;
      else this._icon.icon_name = icon;
    }
  }
);
