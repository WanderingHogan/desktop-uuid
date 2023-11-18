## Cross platform device identifier library

Various tools to get different identifiers from a system.

### get_platform
Gets the platform as a string.
Options: win32, linux, darwin, unknown
example
```
let device_identifiers = require('desktop-uuid')

console.log(device_identifiers.get_platform())
//darwin
```

### get_uuid
Get the UUID of a system from the operating system and return as string

example
```
let device_identifiers = require('desktop-uuid')

console.log(device_identifiers.getUUID()) 
//1234A123-1234-1A12-A123-AB1234ABC1AB
```

## Network
### get_all_mac_addresses
### get_ethernet_mac
### get_all_interface_names
### get_mac_by_interface_name
### get_device_ids

## OS Drive Identifier
### get_primary_drive_uuid