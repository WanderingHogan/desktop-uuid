const execSync = require("child_process").execSync;

let UUID = () => {
    switch (process.platform) {
        case 'win32':
            console.log('Windows Found')
            break;
        case 'linux':
            console.log('Linux Found')
            break;
        case 'darwin':
            let UUID = execSync(`ioreg -d2 -c IOPlatformExpertDevice | awk -F\\" '/IOPlatformUUID/{print $(NF-1)}'`);
            return UUID.toString().replace('\n', '');
            break;
        default:
            console.log('Cannot retrieve device UUID')
            break;
    }
}

exports.getUUID = () => UUID()