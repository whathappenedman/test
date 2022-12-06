# cut
ffmpeg.exe -i input.mp4 -ss hh:mm:ss -to hh:mm:ss -c copy output.mp4

# Concat

Use this method when you want to avoid a re-encode and your format does not support file-level concatenation (most files used by general users do not support file-level concatenation).

```
$ cat mylist.txt
file '/path/to/file1'
file '/path/to/file2'
file '/path/to/file3'
```

```    
$ ffmpeg -f concat -safe 0 -i mylist.txt -c copy output.mp4
```

For Windows:
```
(echo file 'first file.mp4' & echo file 'second file.mp4' )>list.txt
ffmpeg -safe 0 -f concat -i list.txt -c copy output.mp4
```

https://stackoverflow.com/a/11175851

# Generate black
 ffmpeg.exe -f lavfi -i color=c=black:s=1280x720:r=5:d=3 -crf 0 -c:a copy -shortest output.mp4
 
# Goal
Make a bash function that accepts a txt file with time stamps
then joins at the end
optional add image majic to embed time stamp

follow the earlier stack list through to ffmpeg docs for idea on how to do that txt file