---
description: We ran the sound, lights and two livestreams for the National Universities Lead and Speed Climbing Championships
sidebar_custom_props:
  emoji: 🧗
shortlinks:
  - nulscc
  - climbing
image: ./banner-joshheng.jpg
---

# NULSCC 2025
National Universities Lead and Speed Climbing Championships\
(On February 22th, 2025)

## Video
We produced two livestreams for the event:
1. **Qualifiers**   (9:30am-4pm ish) <br/>
  This was a more informal stream which was a great opportunity for us to build up our setup over the course of the stream. Whilst we started the stream with only 2 working cameras, by the time the Qualifiers had finished we had grown our streaming setup to include 4 operated cameras, a PTZ camera and graphical overlays for the competitors. 
2. **Finals**  (4:50-7pm ish) <br/>
  This was the main event using our full setup. We had 5 camera operators and 2 dedicated video mixers, one for mixing the cameras and one for controlling the graphics and audio.

Both were streamed to the [NULSCC Youtube Channel](https://www.youtube.com/@National-Uni-Lead-Speed), with the Finals being shown on the Big Screen

### Cameras
@Joel this is your part

### Overlays
The overlays were run using [H2R Graphics](https://h2r.graphics/) on a dedicated laptop. This laptop sent two inputs to the ATEM (Fill and Key) which were overlayed onto the stream using a Downstream Key.
:::info
We had some lag issues at the start which was caused by a delay between different USB-C > HDMI adapters. This was fixed by switching them out for different adapters with closer delays
:::

We developed the following overlays for the events:
|**Overlay**|**Description**
|:----|:---|
||**Animated NULSCC Logo** <br/>Used throughout the stream.<br/>***Files:***  *nulscc-logo.zip* \> Components *(js html css)*, Final build *(html)*  
||**Competitor Lower-Third** <br/> Displayed the name, number and university of every competitor.<br/>Data was filled using a Python script which fetched data from a database hosted by [RestDB](https://restdb.io/) and used the H2R Graphics [HTTP API](https://h2r.graphics/docs/api/http/) to send it to the overlay<br/>***Files:***  *nulscc-l3.zip* \> Components *(js html css)*, Final build *(html)*, Python helper *(py)*, Uni-colour database *(csv)*|
||**Sponsor Ticker** <br/> Cycled through all sponsors and supporters. <br/>*Didn't work - Tried to have all images embedded into the HTML file but H2R graphics couldn't handle it. We had to update logos manually instead. Updated version uses online images*<br/>***Updated Files:*** *nulscc-ticker.zip* \> Components *(js html css)*, Final build *(html)*|

Created by Oliver Smith

### Other
- **Music** - We used copyright-free music for both livestreams from [NoCopyrightMusic](https://www.no-copyright-music.com/) (in particular the \"Modern\" music) and [NCS](https://ncs.io/)

### Live streams
**Qualifiers**
<div class="video-full">
  <iframe
    src="https://www.youtube.com/embed/caoUjqTUca0?si=TraXpFSRgblMBEOc" title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
    </iframe>
</div>

**Finals**
<div class="video-full">
  <iframe
    src="https://www.youtube.com/embed/XecAN5XRQr8?si=2GJWk1BjC6waCBge"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>