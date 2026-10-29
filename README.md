# Amr & Esraa — Wedding Invitation (GitHub Pages ready)

## Files
```
index.html      page structure
style.css       design (colours are the variables at the top)
script.js       behaviour — edit the CONFIG block at the top for date, number, map link
assets/photos/  couple-01-together.jpg, couple-02-bride-groom.jpg, couple-03-accepted.jpg, couple-04-lanterns.jpg
assets/video/   our-story.mp4 (your video, unchanged) + our-story-poster.jpg (a frame from it)
assets/audio/   wedding-music.mp3 (your music, unchanged)
```
File names are case-sensitive on GitHub — keep them exactly as written.
(couple-02 is your second photo with the black bars at its top and bottom trimmed off; nothing else was altered.)

## Publish on GitHub Pages
1. Open your repository on github.com (the one that already hosts your invitation).
2. Click **Add file → Upload files**, then drag in **everything inside this folder** (index.html, style.css, script.js, the assets folder, README.md). Unzip first, then drag the contents, not the ZIP.
   - This replaces old files with the same names. Delete any old files you no longer need.
3. Scroll down and click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and **Save**.
5. Wait 1–2 minutes, then open the address shown at the top of that page. Hard-refresh (Ctrl/Cmd+Shift+R) if you still see the old version.

Tip: the video is about 24 MB, which GitHub accepts (limit is 100 MB per file). If the web upload struggles, use GitHub Desktop.

## Change things later
- **Date / time:** `script.js` → `CONFIG` → year, month, day, hour, minute (Cairo time, 24-hour). Also edit the visible text in the `TEXT` block (`dateLine`, `timeLine`, `venueDetail`, `waMessage`, `cdSub`) in both languages, plus `20 · 11 · 2026` in `index.html` (envelope card) and `20 November 2026` (footer).
- **Names:** search for "Amr" / "Esraa" / "عمرو" / "إسراء" in `script.js` and `index.html`.
- **Venue:** `TEXT` → `venueName`, `country` (both languages).
- **Map link:** `CONFIG.mapUrl`. It is currently a Google Maps *search* for "Hilton Pyramids Golf Egypt", not a pinned location. For an exact pin, open the venue in Google Maps → Share → Copy link, and paste it there.
- **WhatsApp number:** `CONFIG.whatsappNumber` (currently `201070278696`, digits only, no +). The messages are `waMessage` in the `TEXT` block.
- **Photos:** replace the files in `assets/photos/` keeping the same names (portrait photos work best). To add a fifth photo, copy one `<li>…</li>` block in `index.html` and add its alt-text key in `TEXT`.
- **Video:** replace `assets/video/our-story.mp4` (H.264 MP4) and `our-story-poster.jpg` (a still image from it).
- **Music:** replace `assets/audio/wedding-music.mp3`. Volume: `CONFIG.musicVolume`.
