const { app, BrowserWindow } = require('electron');
const path = require('path');
const { ipcMain } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({ // tải trang web vào một phiên bản BrowserWindow mới
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })
    ipcMain.handle('ping', () => 'pong');
    win.loadFile('index.html');
}


app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) { // Mở một cửa sổ nếu không có cửa sổ nào đang mở
            createWindow();
        }
    });
});

app.on('window-all-closed', () => { // Thoát khỏi ứng dụng khi tất cả các cửa sổ đã đóng
    if (process.platform !== 'darwin') app.quit()
})