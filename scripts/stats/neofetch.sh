# Install and run neofetch on the wifi pineapple

#download master version of neofetch (opkg package doesnt exist)
wget -O /bin/neofetch "https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofet
ch" &> /dev/null

#enable executable
chmod +x /bin/neofetch

neofetch


