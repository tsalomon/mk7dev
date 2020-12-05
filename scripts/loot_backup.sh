#!/bin/bash

# Backup for loot (handshakes & campaigns on the Wifi Pineapple Mark VII
# Author: Tim Salomonsson

#mount fat32 filesystem:
mount /dev/sda1 /usb -t vfat

#make handshakes dir on usb:
mkdir /usb/loot

#replace colons in filenames before rsync backup (colons not supported by vfat)
for f in $(find /root/loot -print); do mv "$f" $(echo "$f" | tr ':' '-'); done

#backup content
rsync -vaur "/root/loot/" "/usb/loot"
