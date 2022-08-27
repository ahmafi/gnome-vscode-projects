const { Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

function getCustomIconPath(iconName) {
  return Gio.icon_new_for_string(`${Me.path}/icons/${iconName}.svg`);
}
