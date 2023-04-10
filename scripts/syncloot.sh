#!/bin/bash

mount /dev/sda1 /usb -t vfat
mkdir -p /usb/pineapple

for f in $(find /root/ -print); do mv "$f" $(echo "$f" | tr ':' '-'); done

rsync -vaur "/root/" "/usb/pineapple"

mount /mnt/wifi
mkdir -p /mnt/wifi/pineapple

rsync -vaur "/root/" "/mnt/wifi/pineapple"
