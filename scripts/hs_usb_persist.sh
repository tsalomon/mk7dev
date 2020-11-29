#!/bin/bash

# Persistent storage for captured handshakes on the Wifi Pineapple Mark VII	
# Author: Tim Salomonsson

#mount fat32 filesystem: 
mount /dev/sda1 /usb -t vfat
		
#make handshakes dir on usb:
mkdir /usb/handshakes/
		
#remove existing temp handshakes dir:
rm -rf /tmp/handshakes/
		
#softlink /tmp/handshakes to /usb/handshakes:	
ln -s /usb/handshakes /tmp/handshakes