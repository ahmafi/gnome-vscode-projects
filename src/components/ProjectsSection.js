const { popupMenu: PopupMenu } = imports.ui;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { ProjectsSectionTitle } = Me.imports.components.ProjectsSectionTitle;
const { ProjectsSectionMenu } = Me.imports.components.ProjectsSectionMenu;

var ProjectsSection = class ProjectsSection extends PopupMenu.PopupMenuSection {
  constructor(title, icon, projects) {
    super();

    const label = new ProjectsSectionTitle(
      `${title} Projects (${projects.length})`,
      icon
    );

    const menu = new ProjectsSectionMenu(projects);

    this.addMenuItem(label);
    this.addMenuItem(menu);
  }
};
