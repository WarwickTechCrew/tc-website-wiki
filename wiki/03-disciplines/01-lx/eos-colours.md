---
title: Colour Calibration (for Eos)
description: Tech Crew and WAC fixture colour calibration for Eos
sidebar_custom_props:
  emoji: 🎨
shortlinks:
  - colour-calibration
---

Most LED lighting fixtures use "additive" colour mixing, where different colour LEDs are added together to make another
one. Usually this consists of at least red, green and blue, with many fixtures adding colours including white, amber,
lime, mint, or more to try to get more accurate colours. Unfortunately, not all LED emitters are the same, which leads
to having different colours come out of each fixture type when you select the same RGB value.

For many lighting fixtures, the ETC Eos can correct for this, as the database contains information on the spectral
output of the LED emitters in the specific fixture. Unfortunately, as this requires the manufacturers to send their
fixture or data to Carallon (the company who make the database), most fixtures we use don't have this data.

Fortunately, since Eos 3.2 you can add in your own measurements, which we've got for a bunch of the fixtures we use. The
[Eos v3.2 Color Configuration Field Measurement Guide](https://www.etcconnect.com/Eos-Software/) has detailed
instructions on how to get your own (though this does require having a spectrophotometer...)

The alternative to this is making your own matching colour palettes for each colour you plan to use, but that takes
longer and obviously is less flexible.

To use this data, edit the fixture in your showfile
[according to the Eos manual](https://www.etcconnect.com/WebDocs/Controls/EosFamilyOnlineHelp/en-us/Default.htm#05_Patch/06_Fixture_Editor/Creating_a_New_Fixture/Color_Configuration.htm?TocPath=Patch%257CFixture%2520Editor%257CCreating%2520a%2520New%2520Fixture%257C_____6).

## Corrections

### Prolights StudioCOB FC

| Channel | Standard Emitter   | Relative Brightness |
| ------- | ------------------ | ------------------- |
| Blue    | Indigo (451nm)     | FL                  |
| Green   | Green (526nm)      | 31%                 |
| Red     | Red Orange (631nm) | 54%                 |

### Spectra Cyc 100 RGBW

| Channel | Standard Emitter   | Relative Brightness |
| ------- | ------------------ | ------------------- |
| Blue    | Indigo (451nm)     | FL                  |
| Green   | Green (526nm)      | 20%                 |
| White   | Warm White (601nm) | 8%                  |
| Red     | Red Orange (631nm) | 30%                 |

### Spectra Cyc 200 RGBA

From memory this wasn't a very good reading (so could be redone at some point), but is still better than nothing.

| Channel | Standard Emitter | Relative Brightness |
| ------- | ---------------- | ------------------- |
| Blue    | Indigo (451nm)   | FL                  |
| Green   | Green (526nm)    | 16%                 |
| Amber   | Amber (596nm)    | 16%                 |
| Red     | Red (640nm)      | 21%                 |

### Robin 800 LEDWash

| Channel | Standard Emitter   | Relative Brightness |
| ------- | ------------------ | ------------------- |
| White   | Cool White (448nm) | 13%                 |
| Blue    | Indigo (451nm)     | FL                  |
| Green   | Green (526nm)      | 18%                 |
| Red     | Red (640nm)        | 47%                 |

### Generic RGB LED pars (WAC stock)

These are some random LED PARs (the old kind with hundreds of single colour LEDs) that were to be used for Company (MTW
Theatre 2024). While the colours were still bad, being different on the outer edges of the beam, the below calibration
made them much more usable. We used the LED RGB 8B fixture type.

| Channel | Standard Emitter | Relative Brightness |
| ------- | ---------------- | ------------------- |
| Blue    | Indigo (451nm)   | FL                  |
| Green   | Green (526nm)    | 22%                 |
| Red     | Red (640nm)      | 25%                 |
