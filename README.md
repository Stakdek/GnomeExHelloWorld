# What is a GNOME Extension?

GNOME extensions can be installed on GNOME desktop and extend the GNOME shell functionality.

# What Do You Need to Know Before Starting?

You need to know some JavaScript and CSS before starting.

# Can I Write My Extension in Other Languages?

GJS (Javascript Bindings for GNOME) is using JavaScript. Technically, you can write your back-end in any language you want but to show the end result in GNOME Shell, you need to use JavaScript.


# Extension Folder and Files

This is the main GNOME Shell extension folder:

`~/.local/share/gnome-shell/extensions/`

Inside this folder, you need to create a folder. Folder name should be the same as UUID (This has to be Unique).

Here, we named our folder GnomeExHelloWorld.

Inside GnomeExHelloWorld folder, create these files:
```
GnomeExHelloWorld
├── metadata.json
├── extension.js
├── prefs.js [optional]
└── stylesheet.css [optional]
```
You can open these files with any text editor you like.


# metadata.json

This file contains the extension information. You can create it like this:

```json
{
    "name" : "HelloWorld",
    "description" : "Your first Hello World extension",
    "shell-version" : [
        "3.36"
    ],
    "url" : "https://stakdek.com",
    "uuid" : "HelloWorld@stakdek.com",
    "version" : 0.1
}
```

* name string Extension Name
* description string Extension
* shell-version array Shell versions that Extension supports
* url string GitLab or GitHub URL
* uuid string Universally Unique Identifier.
* version float Extension Version

# extension.js

This is the main extension file and contains three main functions:

* `function init () {}` init will be called first to initiate your extension.
* `function enable () {}` enable will be called when you enable the extension.
* `function disable() {}` disable will be called when you disable the extension.


# prefs.js

This is the main preferences file that loads a GTK window as your extension settings. Without this file, your extension won't have any settings dialogue.

# stylesheet.css

This file contains CSS classes to style your elements.


# Enable Your Extension

To see your newly extension in the extension list or if you modified the code and want to see the result:

* **X11** Press **alt-f2**, type **r**, press **Enter** to restart the GNOME shell.

* Wayland Logout and re-login.

Now you can enable your extension and see the result.

# Debug Your Extension

To Debug the Extension (extension.js), use this in terminal:

`journalctl -f -o cat /usr/bin/gnome-shell`

To Debug the Extension Preferences (prefs), use this in terminal:

`journalctl -f -o cat /usr/bin/gnome-shell-extension-prefs`

To log a message, use log:
```javascript
log('Message');
```
To log a message with stack trace, use logError:
```javascript
try {
      throw new Error('Message');
} catch (e) {
      logError(e, 'ExtensionErrorType');
}
```
To print your message in Stdout, use Print:
```javascript
print('message');
```

To print your message in Stderr, use Printerr:
```javascript
printerr('message');
```

To test, run gjs-console in terminal:
```bash
gjs-console
```
Please note, this is a separate process from GNOME shell and you cannot access the live code here.

# Documentation

* GNOME JavaScript Documentation.
