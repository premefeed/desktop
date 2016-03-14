var electron = require('electron');
var Menu = require("menu");
var path = require("path");
var app = electron.app;
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({
    icon: __dirname + '/assets/icon.png',
    width: 800,
    height:450,
    minWidth: 850,
    minHeight: 500,
    show: false,
    titleBarStyle: "hidden",
    resizable: true,
    center: true,
    title: 'PremeFeed'
  });

  mainWindow.loadURL('file://' + __dirname + '/public/index.html');

  mainWindow.webContents.on('did-finish-load', function () {
    mainWindow.show()
  });

  mainWindow.on('closed', function() {
    mainWindow = null
  });
})
