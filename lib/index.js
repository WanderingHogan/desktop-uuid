let active_platform;
let device_platform = "unknown"
switch (process.platform) {
    case 'win32':
        device_platform = 'win32'
        active_platform = require('./platform/windows')
        break;
    case 'linux':
        device_platform = 'linux'
        break;
    case 'darwin':
        device_platform = 'darwin'
        active_platform = require('./platform/mac')
        break;
    default:
        console.log('Cannot retrieve device UUID')
        break;
}

exports.get_platform = () => {
    return process.platform
}
exports.get_uuid = () => active_platform.get_uuid()

exports.get_ethernet_mac = () => active_platform.get_ethernet_mac()

exports.get_primary_drive_uuid = () => active_platform.get_primary_drive_uuid()