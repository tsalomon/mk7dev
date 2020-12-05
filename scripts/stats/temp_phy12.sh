# Get temperature of pineapple mk 7 radios (1,2, not 0)with two decimals of precision

#raspberry pi cpu temp
#echo "scale=2; $(cat /sys/class/thermal/thermal_zone0/temp)/1000" | bc -l"

#pineapple mk7 wlan2 temp
#echo "scale=2; $(cat /sys/kernel/debug/ieee80211/phy2/mt7601u/temperature)/10" | bc -l

echo "scale=2; $(cat /sys/kernel/debug/ieee80211/phy2/mt7601u/temperature)/10" | bc -l
echo "scale=2; $(cat /sys/kernel/debug/ieee80211/phy2/mt7601u/temperature)/10" | bc -l
