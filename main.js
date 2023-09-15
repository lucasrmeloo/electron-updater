const { app, BrowserWindow } = require('electron')
const { autoUpdater, AppUpdater } = require("electron-updater")

autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    autoUpdater.checkForUpdates();
    curWindow.showMessage(`Checking for updates. Current version ${app.getVersion()}`);
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

/*New Update Available*/
autoUpdater.on("update-available", (info) => {
    curWindow.showMessage(`Update available. Current version ${app.getVersion()}`);
    let pth = autoUpdater.downloadUpdate();
    curWindow.showMessage(pth);
});

autoUpdater.on("update-not-available", (info) => {
    curWindow.showMessage(`No update available. Current version ${app.getVersion()}`);
});

/*Download Completion Message*/
autoUpdater.on("update-downloaded", (info) => {
    curWindow.showMessage(`Update downloaded. Current version ${app.getVersion()}`);
});

autoUpdater.on("error", (info) => {
    curWindow.showMessage(info);
});