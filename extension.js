// We can have access to the GNOME shell elements such as panel by importing Main.
const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {St, Clutter} = imports.gi;
const Mainloop = imports.mainloop;
const GLib = imports.gi.GLib;

let now = GLib.DateTime.new_now_local();
let nowString = now.format("%Y-%m-%d %H:%M:%S");

let panelButton;

let timeout = Mainloop.timeout_add_seconds(2.5, update);

function init () {
    // Create a Button with "Hello World" text
    panelButton = new St.Bin({
        style_class : "panel-button",
    });
    let panelButtonText = new St.Label({
        text : "It is the " + nowString,
        y_align: Clutter.ActorAlign.CENTER,
    });
    panelButton.set_child(panelButtonText);
    Main.notify(
      'This is a Message',
      'Your Extension ' + Me.metadata.name + ' started.');
}

function enable () {
    // On enable, we are adding the Bin container to the top panel (right side).
    // Add the button to the panel
    Main.panel._rightBox.insert_child_at_index(panelButton, 0);
    if (!timeout){
        // reset timeout
        timeout = Mainloop.timeout_add_seconds(2, update);
    }
}

function update () {
    nowString = GLib.DateTime.new_now_local().format("%Y-%m-%d %H:%M:%S");
    let panelButtonText = new St.Label({
        text : nowString,
        y_align: Clutter.ActorAlign.CENTER,
    });
    panelButton.set_child(panelButtonText);
    // run the update function in 2 seconds again
    if (!timeout){
        timeout = Mainloop.timeout_add_seconds(2, update);
    }
    else {
        Mainloop.source_remove(timeout);
        timeout = null;
        timeout = Mainloop.timeout_add_seconds(2, update);
    }
}

function disable () {
    // On disable, we are removing the Bin container from top panel.
    // Remove the added button from panel
    Main.panel._rightBox.remove_child(panelButton);
    // remove mainloop
    Mainloop.source_remove(timeout);
    timeout = null;
}
