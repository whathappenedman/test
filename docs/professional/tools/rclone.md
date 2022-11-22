# To DO
1. add chron

use crypt for yt-dlp
dl google

rclone config file issue and also keys issue

adopt this https://rclone.org/filtering/#exclude-directory-based-on-a-file
bascially add a file in every dir u want to exlcue,
lets say an .rc-ignore file
then replace rclone allias with --exclude-if-present .ignore
and make an rclonef for without it f for full
instead i did an alias to a file at the root of p
# Commands
rclone sync -P "/mnt/c/Users/Mustafa/p" secret-b2:windows/p --exclude .git/ --exclude node_modules/

rclone ls/lsd
rclone config
rclone sync
rclone ncdu

# Notes
https://www.reddit.com/r/DataHoarder/comments/f4jacr/rclone_s3_deep_archive_workflow/

eventually can use 
mega and hetzner storage box or 1ficher
need to be storing over 1tb, but more like 2tb to make hetzner worth it($4/1tb or $13 for 5)
and 4 for mega (8tb offer @ $20)



# History

b2-windows.exe upload-file Desktop-HDD-Backup
-----------------
b2-windows.exe upload-file Desktop-HDD-Backup "D:\Backups\Phone\s4-s6-misc-fromDesktop2020.7z" "Phone/s4-s6-misc-fromDesktop2020.7z"

b2-windows.exe upload-file Desktop-HDD-Backup "D:\Backups\Laptop\ibuyp.7z" "Laptop/ibuyp.7z"
b2-windows.exe upload-file Desktop-HDD-Backup "D:\Backups\Laptop\Laptop 2021.7z" "Laptop/Laptop 2021.7z"
b2-windows.exe upload-file Desktop-HDD-Backup "D:\Backups\Laptop\laptop clone.7z" "Laptop/laptop clone.7z"

b2-windows.exe upload-file Desktop-HDD-Backup "D:\Backups\Laptop\laptop clone 2.7z" "Laptop/laptop clone 2.7z"


b2-windows.exe upload-file Desktop-HDD-Backup "D:\Backups\Desktop\Dektop 2020.7z.001" "Desktop/Dektop 2020/Dektop 2020.7z.001"
b2-windows.exe upload-file Desktop-HDD-Backup "D:\Backups\Desktop\Dektop 2020.7z.002" "Desktop/Dektop 2020/Dektop 2020.7z.002"
----------------------
b2-windows.exe upload-file Desktop-HDD-Backup "D:\Backups-LargeFiles\NOTE 4 PHONE DATA.7z.001" "Backups-LargeFiles/NOTE 4 PHONE DATA/NOTE 4 PHONE DATA.7z.001"
b2-windows.exe upload-file Desktop-HDD-Backup "D:\Backups-LargeFiles\NOTE 4 PHONE DATA.7z.002" "Backups-LargeFiles/NOTE 4 PHONE DATA/NOTE 4 PHONE DATA.7z.002"
b2-windows.exe upload-file Desktop-HDD-Backup "D:\Backups-LargeFiles\NOTE 4 PHONE DATA.7z.003" "Backups-LargeFiles/NOTE 4 PHONE DATA/NOTE 4 PHONE DATA.7z.003"


MARGASA)123MARGASA)!@#