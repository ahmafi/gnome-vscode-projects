SRC=src
UUID=$(shell grep uuid $(SRC)/metadata.json | cut -d\" -f 4)
PACKAGE=$(UUID).shell-extension.zip
SRC_FILES=$(shell find $(SRC))

.PHONY: pack install run

pack: $(PACKAGE)

$(PACKAGE): $(SRC_FILES) README.md LICENSE
	@rm -f $(PACKAGE)
	@cd $(SRC); zip -r ../$(PACKAGE) .
	@zip $(PACKAGE) README.md LICENSE

install: pack
	@gnome-extensions install --force ./$(PACKAGE)

run: install
	@if [[ "$(XDG_SESSION_TYPE)" == "wayland" ]]; then\
		dbus-run-session -- gnome-shell --nested --wayland;\
	else\
		echo -e "Couldn't start a nested instance of GNOME Shell\n\n\
If you are using X11, please restart your session with Alt+F2 \
then type restart\n\n\
For more information visit:\n\
https://gjs.guide/extensions/development/creating.html#enabling-the-extension";\
	fi
