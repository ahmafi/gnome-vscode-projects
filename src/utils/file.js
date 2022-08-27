const { GLib, Gio } = imports.gi;

Gio._promisify(Gio.File.prototype, 'query_info_async');
Gio._promisify(Gio.File.prototype, 'read_async');
Gio._promisify(Gio.InputStream.prototype, 'read_bytes_async');
Gio._promisify(Gio.InputStream.prototype, 'close_async');

async function readFileAsync(file) {
  const size = (
    await file.query_info_async(
      'standard::size',
      Gio.FileQueryInfoFlags.NONE,
      GLib.PRIORITY_DEFAULT,
      null
    )
  ).get_size();

  const stream = await file.read_async(GLib.PRIORITY_DEFAULT, null);
  const dataByteArray = (
    await stream.read_bytes_async(size, GLib.PRIORITY_DEFAULT, null)
  ).get_data();
  await stream.close_async(GLib.PRIORITY_DEFAULT, null);

  const dataString = new TextDecoder().decode(dataByteArray);

  return dataString;
}

function getVSCodeProjectsFilePath(filename) {
  const configDir = GLib.get_user_config_dir();
  const projectsDir = `${configDir}/Code/User/globalStorage/alefragnani.project-manager`;

  return `${projectsDir}/${filename}`;
}
