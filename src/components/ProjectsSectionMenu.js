const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { ScrollableMenu } = Me.imports.components.ScrollableMenu;
const { ProjectsSectionMenuItem } =
  Me.imports.components.ProjectsSectionMenuItem;

var ProjectsSectionMenu = class ProjectsSectionMenu extends ScrollableMenu {
  constructor(projects) {
    super();

    projects.forEach((project) => {
      let item = new ProjectsSectionMenuItem(
        project.name,
        project.fullPath || project.rootPath
      );
      this.addMenuItem(item);
    });
  }
};
