module.exports = {
    packagerConfig: { // chữ kí ứng dụng để xuất bản và đóng gói (for macOS)
        osxSign: {},
        //...
        osxNotarize: {
            tool: 'notarytool',
            appleId: process.env.APPLE_ID,
            appleIdPassword: process.env.APPLE_PASSWORD,
            teamId: process.env.APPLE_TEAM_ID,
        }
    },
    makers: [{ // chữ kí ứng dụng để xuất bản và đóng gói (for Window)
        name: '@electron-forge/maker-squirrel',
        config: {
            certificateFile: './cert.pfx',
            certificatePassword: process.env.CERTIFICATE_PASSWORD,
        },
    }, ],
    rebuildConfig: {},
    makers: [{
            name: '@electron-forge/maker-squirrel',
            config: {},
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        {
            name: '@electron-forge/maker-deb',
            config: {},
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {},
        },
    ],
};