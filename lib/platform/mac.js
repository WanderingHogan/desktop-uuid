const execSync = require("child_process").execSync;

function get_device_ids() {
    // get all interfaces, sed command to just strip out names, awk to make a comma delimited file, final sed command to remove trailing comma
    let device_ids = execSync(`ifconfig -a | sed -E 's/[[:space:]:].*//;/^$/d' | awk 'BEGIN { ORS="," }; {print $NF}' | sed 's/.$//'`);
    return device_ids.toString();
}

function get_uuid() {
    let UUID = execSync(`ioreg -d2 -c IOPlatformExpertDevice | awk -F\\" '/IOPlatformUUID/{print $(NF-1)}'`);
    return UUID.toString().trim();
}

exports.get_all_interface_names = () => get_device_ids();
exports.get_uuid = () => get_uuid()

exports.get_all_mac_addresses = function () {
    let device_ids = get_device_ids().split(',')
    console.log(device_ids)
    return "TODO"
}

exports.get_mac_by_interface_name = (interface_name) => {
    let mac_id = execSync(`networksetup -getmacaddress ${interface_name} | awk '{print $3}'`);
    return mac_id.toString().trim();
}

exports.get_ethernet_mac = () => {
   return this.get_mac_by_interface_name('en0')
}

exports.get_primary_drive_uuid = () => {
    let primary_drive_uuid = execSync(`diskutil info / | sed -n 's/^ *Volume UUID: *//p'`);
    return primary_drive_uuid.toString().trim();
}