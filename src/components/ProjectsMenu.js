const { Gio } = imports.gi;
const { popupMenu: PopupMenu } = imports.ui;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const FileUtils = Me.imports.utils.file;
const { ProjectsSection } = Me.imports.components.ProjectsSection;

var ProjectsMenu = class ProjectsMenu extends PopupMenu.PopupMenuSection {
  constructor(sections) {
    super();

    this._sections = sections;
  }

  async init() {
    await this._getProjects();
    this._drawLayout();
  }

  _drawLayout() {
    this.removeAll(); //TODO: Render only the sections that change

    this._projects.forEach((sectionProjects, i) => {
      if (sectionProjects) {
        const section = new ProjectsSection(
          this._sections[i].name,
          this._sections[i].icon,
          sectionProjects
        );
        this.addMenuItem(section);

        if (this._projects.length > i + 1 && this._projects[i + 1]) {
          this.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());
        }
      }
    });
  }

  async _getProjects() {
    const projectFiles = this._sections.map((section) =>
      Gio.file_new_for_path(section.filePath)
    );
    const readFilesPromises = projectFiles.map((file) =>
      FileUtils.readFileAsync(file)
    );
    const filesDataStatus = await Promise.allSettled(readFilesPromises);

    const filesData = filesDataStatus.map((fileData) => {
      if (fileData.status === 'fulfilled') {
        const fileJSON = JSON.parse(fileData.value);
        return fileJSON;
      }
      return null;
    });

    this._projects = filesData;
  }

  updateProjects() {
    const oldProjects = this._projects;
    this._getProjects().then(() => {
      if (JSON.stringify(oldProjects) !== JSON.stringify(this._projects)) {
        this._drawLayout();
      }
    });
  }
};
