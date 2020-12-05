#!/bin/bash

# Persistent storage for the recon-db on the Wifi Pineapple Mark VII
# Author: Tim Salomonsson

#mount fat32 filesystem: 
mount /dev/sda1 /usb -t vfat
		
#make recon dir on usb:
mkdir /usb/recon/
		
#move existing recon db:
mv /tmp/recon.db /usb/recon
		
#softlink /tmp/handshakes to /usb/handshakes:	
ln -s /usb/recon/recon.db /tmp/recon.db