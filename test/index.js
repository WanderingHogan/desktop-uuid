let device_identifiers = require('../lib/index')

console.log('get_platform: ', device_identifiers.get_platform())
console.log('get_uuid: ', device_identifiers.get_uuid())
console.log('get_ethernet_mac: ', device_identifiers.get_ethernet_mac())
console.log('get_primary_drive_uuid: ', device_identifiers.get_primary_drive_uuid())
console.log('get_all_interface_names: ', device_identifiers.get_all_interface_names())
console.log('get_ethernet_by_deviceid(en0): ', device_identifiers.get_ethernet_by_deviceid('en0'))