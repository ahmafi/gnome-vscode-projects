const { Gio } = imports.gi;

// TODO: check for codium

function launchVSCode(path) {
  try {
    Gio.Subprocess.new(['gtk-launch', 'code', path], Gio.SubprocessFlags.NONE);
  } catch (e) {
    logError('Executable gtk-launch or code not found.');
  }
}
