# YTDL Scripts

These scripts aid in removing/preventing duplicates with youtube-dl. See [YTDL Issue #23502](https://github.com/ytdl-org/youtube-dl/issues/23502) for more information.

There are two scripts here:

1. One to auto-generate archive file
2. Another to remove duplicates

## Prereq

You must have Node.js downloaded & installed to run these scripts:
https://nodejs.org/en/

## Download

Download/clone these scripts to your home directory (or wherever you like)

```bash
cd ~/
git clone https://github.com/DrewImm/ytdl-scripts
```

## Run

Change directory to the directory of your video files

### To Auto-Generate Archive File

`node ~/ytdl-scripts/archive-writer.js`

### To Remove Duplicates

`node ~/ytdl-scripts/dupe-remover.js`
