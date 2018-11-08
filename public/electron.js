const {app, BrowserWindow} = require('electron');
const {join} = require('path');
const {format} = require('url');
let isDev = process.env.NODE_ENV === 'development';
let mainWindow;
function createWindow() {
    mainWindow = isDev ? new BrowserWindow({
        width: 900,
        height: 680,
    }) : new BrowserWindow({ width: 900, height: 680 });
    const startUrl = isDev
        ? 'http://localhost:3000/?electron=true'
        : format({
            pathname: join(__dirname, '/../build/index.html'),
            protocol: 'file:',
            slashes: true
        });
    mainWindow.loadURL(startUrl);
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});