---
description: Playing audio or sound effects during shows.
sidebar_custom_props:
  emoji: ▶️
shortlinks:
  - playback
  - qlab
  - sfx
  - music
  - DAC
---

# Sound Playback

Sound playback refers to the process of routing audio (such as music, sound effects, or cues) from a playback device
(typically a laptop or CD player) to the sound system during a show or rehearsal.

## Audio routing & DAC's

Playback can be sent to a sound desk through a few ways:

- **USB audio interface:** Connect your laptop to the desk via a USB cable and set your laptop's audio output to use the
  USB interface. On the desk, select the appropriate USB input channel. This method provides a fully digital connection
  which should give you higher quality playback with the smallest amount of hassle. The sound desk will then use its
  digital-to-analoge converter (DAC) to turn this digital signal into voltages that can be sent over cables. Note that
  higher-end desks have USB audio interfaces, but our analogue desks often do not.
- **Dante over Ethernet:** If the sound desk has a Dante card (e.g. the WAC S21's) audio can be transmitted digitally
  over ethernet using Dante. In the studio, this has the advantage of allowing playback from anywhere in the venue, as
  all the patch panels have ethernet ports, so you can fix levels while sitting in the audience during a soundcheck.
  This is done by starting dante virtual soundcard and setting the patching on dante controller. The desks DAC then
  converts this to voltage in the same way as before.
- **3.5mm Jack:** If your desk has neither a USB interface nor a Dante card, a reliable fallback is routing audio
  through your laptops 3.5mm Jack. We have 3.5mm to 2-XLR cables which will provide a stereo input to the desk. However,
  this method uses the laptop’s built in DAC to convert the signal to voltage straight away (in order to travel along
  the 3.5mm cable), this DAC will be lower quality than the one used in sound desks.

## QLab

Playback is often done using [QLab](https://qlab.app/) running on the Tech Crew Macbook. Tech Crew own a QLab 4 audio
license. As of writing, WAC have the same license and let us use the Mac Mini's installed in the control rooms for
playback too. Using the WAC equipment may be a more reliable option in show week due to the deteriating nature of the
Tech Crew Mac's ports (they keep disconnecting it is very annoying).

:::warning

WAC do not own a QLab 5 license, so if using QLab 5 on their Mac Mini's you'll be limited to two channels of output etc.

:::

## Sound Effects (SFX) & Music

Sound effects are often used in shows to make the show more realistic or create an atmosphere. They may also be linked
or interacted with by the cast, such as phone or doorbell sound effects.

Generally, any music should be downloaded locally in advance and played from the Tech Crew Macbook using QLab, along
with any other SFX. For example, using spotify or youtube to play sound may be slightly less reliable (if the network
drops out or you get ads etc). Whilst it is possible to use Spotify for music playback, this is technically against the
[Spotify Terms of Use](https://www.spotify.com/uk/legal/end-user-agreement/) which only allows personal, non-commercial
use. Spotify offer a service called [Soundtrack Your Brand](https://www.soundtrackyourbrand.com/) which can be used
commercially - the university has a few old iPhones with licenses for this service, which can be requested when working
with them on larger projects (such as the [Christmas Lights Switch-on](/wiki/case-studies/christmas-lights)).

### WAC Music Licensing

When working in the Warwick Arts Centre, we can use their license which allows music playback during the start/end of
shows and intervals for free. Songs which are played during the show (or which are interacted with by cast) may require
separate royalties.

## Free SFX and Music Libraries

Some free libraries of sound effects and music include:

- **[Sonniss Game Audio Bundle](https://gdc.sonniss.com/)**
  ([Tracklist](https://docs.google.com/spreadsheets/d/1Gnk0_PXG-HdRmttxridsb8lkfu64v2vlvB1iocL2Qjk/edit?usp=sharing))
  ([Previous Years](https://sonniss.com/gameaudiogdc))
  ([Individual 2020 Directory](https://ftpmirror.your.org/pub/misc/sonniss2020/individual/)) - Soniss provide a
  collection of sound libraries, several of which are released for free each year for the Game Developers Conference.
  Can be used for any purpose (including commercial use) without attribution.
- **[BBC Sound Effects Library](https://sound-effects.bbcrewind.co.uk/)** - although this cannot technically be used
  commercially and may require attribution.
- **[YouTube Audio Library](https://www.youtube.com/audiolibrary)** - requires free YouTube account. May require
  attribution. Includes both SFX and music.
- **[Cymatics.fm](https://cymatics.fm/pages/free-download-vault)** - free music samples and presets.
- **[Bigsoundbank.com](https://bigsoundbank.com/categories.html)** - free and in the public domain.
