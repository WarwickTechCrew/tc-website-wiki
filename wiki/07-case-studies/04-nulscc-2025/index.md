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
The overlays were run using [H2R Graphics](https://h2r.graphics/) on a dedicated laptop. This laptop sent two inputs to the ATEM (Fill and Key) which were overlaid onto the stream using a Downstream Key.
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

## Lighting
Lighting needed to be exciting enough to add value to the competition, whilst making sure nothing was in athletes way or distracting them. Health and safety was a large concern when rigging/planning lights.

*Pictures to come*

The plan was to use:
1. The Cobs as uplighters, 3 on each side of the path athletes take as they come into the competition area.
2. Battens attached to the edges of the speedwalls to indicate the winner in each race.
3. Profiles on the bouldering wall as spotlights for the base of the speed walls, the top of the lead wall and the podium (which was built in the main competition area).
4. A profile as a followspot as the athletes made their way onto the competition area.
5. The Lumi's as backlighting for the commentator room/area

The nature of live events and working in such unique spaces mean that often things do not go to plan, and in the end adapted to:

| Quantity | Item                                                | Usage / Notes                                      |
|----------|-----------------------------------------------------|----------------------------------------------------|
| 6x       | Prolights StudioCobFC                               | Uplighters with a rainbow chaser, when operating I couldn't see but from the stream it turns out I was only controlling 5!|
| 4x       | Equinox RGB Power Batten                            | Attached to speedwalls indicating the winners      |
| 1x       | SL Profile                                          | Lighting the medal podium after the finals         |
| 1x       | Rack 6 Dimmer                                       |                                                    |
| 1x       | Zero88 FLX                                          |                                                    |

I should've made better notes about the cables I brought, but lots of long DMX/powercon is needed as the wall is a big room and often cables need to take the very very long way round. As an example a Cob approx 3m away from the mixing position was seperated by over 30 meters of DMX as the cable went completely round the building! Bring powercon couplers if possible as well.

We attempted to add university climbing club colours to the FLX for the battens, however club colours sometimes had no relation to university colours and some universities are more cautious to share their HEX codes. Additionally, our battens are not very good for precice colours. University colours would work on the COB's and LumiPar's however.

### FOH Postitions
As with all departments, there was uncertainty regarding placement for FOH mixing positions. In the end, the plan was flor lighting to mix on the balcony above the climbing center, right next to the enterance to the Sports and Wellness Hub. Lighting would have been on the cans network and had a stream feed so the main area was visible.

This ended up being to much to do in such a short space of time, so lighting set up on Flo in the same area in the climbing center as Video and Sound. It was cramped, but it worked!
