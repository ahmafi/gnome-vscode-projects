<div align="center">
  <h1>GNOME Extension - Project Manager for Visual Studio Code</h1>
  <p><b>Easily open your Visual Studio Code projects from GNOME shell</b></p>
  <a href="https://extensions.gnome.org/extension/5289/project-manager-for-vscode/">
    <img src="https://img.shields.io/badge/Install%20from-extensions.gnome.org-4A86CF?style=for-the-badge&logo=Gnome&logoColor=white"/>
  </a>
</div>

This extension simply allows you to open the projects from [VSCode](https://code.visualstudio.com) [Project Manager extension](https://github.com/alefragnani/vscode-project-manager) in menu on the GNOME shell toolbar. The Project Manager extension should be installed for this extension to work.

![GNOME Extension - Project Manager for Visual Studio Code Screenshot](https://github.com/ahmafi/gnome-vscode-projects/raw/main/images/gnome-vscode-projects.png)

# Installation

## Recommended

Install from [GNOME Shell Extensions](https://extensions.gnome.org/extension/5289/project-manager-for-vscode/) website to get the latest version.

## Manual

1. Clone the repo

   ```
   git clone https://github.com/ahmafi/gnome-vscode-projects
   ```

2. Install the extension (it will use `gnome-extensions` CLI tool to install into `~/.local/share/gnome-shell/extensions`)

   ```
   cd gnome-vscode-projects
   make install
   ```

   **Or** do it manually

   ```
   cd gnome-vscode-projects
   mkdir ~/.local/share/gnome-shell/extension/projectmanagerforvscode@ahmafi.ir
   cp -r src/* ~/.local/share/gnome-shell/extension/projectmanagerforvscode@ahmafi.ir
   ```

3. Restart the GNOME shell

   - **Wayland**: Logout and login.

   - **X11**: Press `Alt+F2` and run `r` to restart. Or logout and login.

4. Enable the extension:
   ```
   gnome-extensions enable projectmanagerforvscode@ahmafi.ir
   ```
   You can also enable it in GUI from the [Extension Manager](https://github.com/mjakeman/extension-manager) app.

# TODO

- [ ] Different button for opening the project in a new window
- [ ] Show project tags
- [ ] View as tags
- [ ] Filter by tags
- [ ] Sort by Path, Recent, Saved
- [ ] Support VSCodium
- [ ] Allow configuring the executable

# Development

Copy the source files into extensions directory

```
make install
```

Enable the extension (Only for the first time)

```
gnome-extensions enable projectmanagerforvscode@ahmafi.ir
```

Run a wayland nested session

```
make run
```

If you are using X11, or for more details see [here](https://gjs.guide/extensions/development/creating.html#enabling-the-extension).

# Credits

## Icons

Thanks to [svgrepo](https://www.svgrepo.com) for a huge repository of great icons.

<details>
<summary><b>Icons List ...</b></summary>
<p>

- favorite-symbolic.svg <img align="center" src="https://github.com/ahmafi/gnome-vscode-projects/raw/main/src/icons/favorite-symbolic.svg" width="20"/> - [CC0 License](https://creativecommons.org/share-your-work/public-domain/cc0)
- project-manager-for-vscode-symbolic.svg <img align="center" src="https://github.com/ahmafi/gnome-vscode-projects/raw/main/src/icons/project-manager-for-vscode-symbolic.svg" width="20"/> - [CC0 License](https://creativecommons.org/share-your-work/public-domain/cc0)
- git-symbolic.svg <img align="center" src="https://github.com/ahmafi/gnome-vscode-projects/raw/main/src/icons/git-symbolic.svg" width="20"/> - [MIT](https://github.com/featherplain/feathericon/blob/master/LICENSE) (C) 2018 Megumi Hano - (feathericon)

</p>
</details>

# Disclaimer

This extension is an independent project and is not affiliated with, authorized by, sponsored by, or in any way associated with Microsoft corporation, Visual Studio Code software and GNOME Foundation.

Legal disclaimer for brand icons and trademarks:

_All brand icons are trademarks of their respective owners. The use of these trademarks does not indicate endorsement of the trademark holder by "Project Manager for VSCode" project, nor vice versa. Please do not use brand logos for any purpose except to represent the company, product, or service to which they refer._

<details>
<summary><b>Read More...</b></summary>
<p>

- **Git** <img align="center" src="https://github.com/ahmafi/gnome-vscode-projects/raw/main/src/icons/git-symbolic.svg" width="20"/> - Git and the Git logo are either registered trademarks or trademarks of Software Freedom Conservancy, Inc., corporate home of the Git Project, in the United States and/or other countries.
- **Visual Studio Code** - Visual Studio Code, VS Code, and the Visual Studio Code icon are trademarks of Microsoft Corporation. All rights reserved.
- **GNOME** - The GNOME logo and GNOME name are registered trademarks or trademarks of GNOME Foundation in the United States or other countries.
</p>
</details>

# License

[GPL-3.0](https://github.com/ahmafi/gnome-vscode-projects/blob/main/LICENSE) &copy; Amir Hossein Mafi
