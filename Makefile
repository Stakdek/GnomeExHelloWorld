.PHONY: default
default: install

install: uninstall
	mkdir ~/.local/share/gnome-shell/extensions/HelloWorld@stakdek.com
	cp -r *.js ~/.local/share/gnome-shell/extensions/HelloWorld@stakdek.com
	cp -r *.json ~/.local/share/gnome-shell/extensions/HelloWorld@stakdek.com

uninstall:
	rm -rf ~/.local/share/gnome-shell/extensions/HelloWorld@stakdek.com
