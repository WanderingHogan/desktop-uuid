## Cross platform device identifier library

Various tools to get different identifiers from a system.

You can't get a true unique identifier if each OS/Vendor creates unique id's independent of one another, but here are a collection of tools you can use, baked into each OS, that will hardware identifiers that will only change with major system changes or hardware changes.

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
Get the UUID of a system from the operating system or bios, and return as string. 

Mac uses [ioreg](https://www.unix.com/man-page/osx/8/ioreg/), getting the `IOPlatformUUID` from the `IOPlatformExpertDevice` key.
Windows uses UUID from [Win32_ComputerSystemProduct](https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/win32-computersystemproduct), which is the UUID from the SMBIOS.

example
```
let device_identifiers = require('desktop-uuid')

console.log(device_identifiers.getUUID()) 
//1234A123-1234-1A12-A123-AB1234ABC1AB
```

## Network
### get_ethernet_mac TODO
// Should this be an object?
{
    interface_name: '<interface_name>',
    interface_mac: '<interface_mac>'
}
There are many tools out there that will offer you the mac address of your device, most are limited to online/active, or rely on deprecated tools (like WMIC in windows). The tools here use the built in `getmac` command or the WMI object in powershell on windows.

Mac - Returns the mac address of the `en0` device.
Windows - Returns Local Area Address (or the first insance if there are multiple ethernet adaptors)

example
```
let device_identifiers = require('desktop-uuid')

console.log(device_identifiers.get_ethernet_mac()) 
//1a:a1:1a:1a:11:1a
```

### get_all_mac_addresses
### get_all_interface_names
// TODO: Make this hardware only?
This returns an array of all interface names that you can pass in to get a specific mac address later

Mac - Relies on [networksetup]() and returns all interfaces, software or hardware, connected or disconnected. Even internal only interfaces like ap1
Windows - TODO

example
```
let device_identifiers = require('desktop-uuid')

console.log(device_identifiers.get_all_interface_names()) 
//lo0,gif0,stf0,anpi0,anpi2,anpi1,en4,en5,en6,en1,en2,en3,bridge0,ap1,en0,awdl0,llw0,utun0,utun1,utun2,utun3
```

### get_mac_by_interface_name
### get_device_ids

## OS Drive Identifier
### get_primary_drive_uuid
This returns the UUID from the hard drive manufacturer that the operating system is running on.

Mac - returns UUID from diskutil
Windows - TODO:

example
```
let device_identifiers = require('desktop-uuid')

console.log(device_identifiers.get_ethernet_mac()) 
//01A01234-01A0-0A1A-0AB0-0123A01A012A
```