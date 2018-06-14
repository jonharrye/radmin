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
//todo: make a method to set the zoom level to -.8 (zoom out size) when pinning or dragging the browser panel to a dock (that will be created)