/*
 * gnome-vscode-projects helps you open your VSCode projects from gnome-shell.
 *
 * Copyright (C) 2022 Amir Hossein Mafi <amir77mafi@gmail.com>
 *
 * This file is part of gnome-vscode-projects.
 *
 * gnome-vscode-projects is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by the
 * Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * gnome-vscode-projects is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with gnome-vscode-projects. If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

const { main: Main } = imports.ui;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const FileUtils = Me.imports.utils.file;
const IconUtils = Me.imports.utils.icons;
const { ProjectsPanelMenuButton } =
  Me.imports.components.ProjectsPanelMenuButton;

const SECTIONS = [
  {
    name: 'Favorite',
    icon: IconUtils.getCustomIconPath('favorite-symbolic'),
    filePath: FileUtils.getVSCodeProjectsFilePath('projects.json'),
  },
  {
    name: 'Git',
    icon: IconUtils.getCustomIconPath('git-symbolic'),
    filePath: FileUtils.getVSCodeProjectsFilePath('projects_cache_git.json'),
  },
];

let projectsPanelMenuButton, uuid;

function init(extensionMeta) {
  uuid = extensionMeta.uuid;
}

function enable() {
  projectsPanelMenuButton = new ProjectsPanelMenuButton(SECTIONS);
  Main.panel.addToStatusArea(uuid, projectsPanelMenuButton);
}

function disable() {
  if (projectsPanelMenuButton) {
    projectsPanelMenuButton.destroy();
    projectsPanelMenuButton = null;
  }
}
