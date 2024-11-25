@echo off
for %%f in (*.jpg *.png *.jpeg *.avif) do ffmpeg -i "%%f" "%%~nf.webp"
pause