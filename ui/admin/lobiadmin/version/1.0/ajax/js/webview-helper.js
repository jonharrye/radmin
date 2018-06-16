var electron = require("electron");
var ipc = electron.ipcRenderer;
var webFrame = electron.webFrame;

var _browser_zoomLevel = 0;
var _browser_maxZoom = 9;
var _browser_minZoom = -8;

ipc.on("zoomIn", function () {
    if (_browser_maxZoom > _browser_zoomLevel) {
        _browser_zoomLevel += 1;
    }
    webFrame.setZoomLevel(_browser_zoomLevel);
    console.log("Zoom In");
});

ipc.on("zoomOut", function () {
    if (_browser_minZoom < _browser_zoomLevel) {
        _browser_zoomLevel -= 1;
    }
    webFrame.setZoomLevel(_browser_zoomLevel);
    console.log("Zoom Out");

});

ipc.on("zoomReset", function () {
    console.log("Reset Zoom");
    _browser_zoomLevel = 0;
    webFrame.setZoomLevel(_browser_zoomLevel);
});

ipc.on("zoomOutFull-7.5", function () {
    console.log("Full Zoom Out");
    _browser_zoomLevel = -7.5;
    webFrame.setZoomLevel(_browser_zoomLevel);
});

ipc.on("zoomOutFull-5.5", function () {
    console.log("Full Zoom Out");
    _browser_zoomLevel = -3.5;
    webFrame.setZoomLevel(_browser_zoomLevel);
});
console.log("loaded");