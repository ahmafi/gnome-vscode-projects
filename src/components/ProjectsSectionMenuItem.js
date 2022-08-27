const { GObject, Gio, St, Clutter } = imports.gi;
const { popupMenu: PopupMenu } = imports.ui;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { launchVSCode } = Me.imports.utils.code;

var ProjectsSectionMenuItem = GObject.registerClass(
  class CustomPopupMenuItem extends PopupMenu.PopupBaseMenuItem {
    _init(projectName, projectPath) {
      super._init({
        style_class: 'project-item',
      });

      this.label = new St.Label({
        text: projectName,
        y_expand: true,
        y_align: Clutter.ActorAlign.CENTER,
      });
      this.add_child(this.label);
      this.label_actor = this.label;

      this.set_child_above_sibling(this._ornamentLabel, this.label);

      this._projectPath = projectPath;
    }

    activate(event) {
      launchVSCode(this._projectPath);
      // TODO: close the menu

      super.activate(event);
    }
  }
);
