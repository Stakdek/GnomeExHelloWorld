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
`
GnomeExHelloWorld
├── metadata.json
├── extension.js
├── prefs.js [optional]
└── stylesheet.css [optional]
`
You can open these files with any text editor you like.
