const { GObject, St } = imports.gi;
const { panelMenu: PanelMenu } = imports.ui;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const FileUtils = Me.imports.utils.file;
const IconUtils = Me.imports.utils.icons;
const { ProjectsMenu } = Me.imports.components.ProjectsMenu;
const { ErrorMenuItem } = Me.imports.components.ErrorMenuItem;

var ProjectsPanelMenuButton = GObject.registerClass(
  class ProjectsPanelMenuButton extends PanelMenu.Button {
    _init(sections) {
      super._init(0.5, 'VSCode Projects');

      this.menu.actor.add_style_class_name('vscode-projects-extension');

      this._icon = new St.Icon({
        gicon: IconUtils.getCustomIconPath(
          'project-manager-for-vscode-symbolic'
        ),
        style_class: 'system-status-icon',
      });
      this.add_child(this._icon);

      this._projectsMenu = new ProjectsMenu(sections);
      this._projectsMenu
        .init()
        .then(() => {
          this.menu.addMenuItem(this._projectsMenu);

          // TODO: add an option to monitor project files changes instead of
          // updating them every time the extension button is clicked
          this._clickedId = this.connect(
            'button-press-event',
            this._projectsMenu.updateProjects.bind(this._projectsMenu)
          );
        })
        .catch((e) => {
          // TODO: show more relevant error messages
          logError(e);
          this._errorMenuItem = new ErrorMenuItem('Error Loading Projects');
          this.menu.addMenuItem(this._errorMenuItem);
        });
    }

    destroy() {
      if (this._clickedId) {
        disconnect(this._clickedId);
        this._clickedId = null;
      }
      super.destroy();
    }
  }
);
