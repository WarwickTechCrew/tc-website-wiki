---
description: For all the cool technical things you can do on a sound desk!
sidebar_custom_props:
  emoji: 🛠️
---

# Sound Engineering

:::warning

This page is incomplete!

:::

## DCA's

DCA's allow you to control multiple faders with a single fader. Imagine you've balanced six cast mics so they sound
perfect in the room, each with its fader set to a slightly different position. Now, during the chorus, you need a boost
in cast volume. Instead of adjusting each mic individually, you just raise the cast DCA fader. This increases the volume
of all the cast mics equally, without altering the balance you initially set.

For small music events i'll usually put all my cast mics into a DCA and all my band into another. This allows me to
balance the overall mix between the cast and the band, without having to move the many individual cast and band faders
that actually make up those two DCA's.

Note that, unlike groups, DCA's do not change the signal flow of a channel, i.e. the channel will still be routed to the
same place regardless of whether its in a DCA or not. In this way, DCA's act like a "remote control" for a channel, not
affecting the actual routing (unlike groups).

:::info

DCA stands for Digitally Controlled Amplifier. They are sometimes called VCA's (Voltage Controlled Amplifiers), and
DiGiCo call them Control groups. They all mean the same thing though! A remote control for multiple faders.

:::

## Group

A group acts as an intermediary step in the signal chain, where several individual channels are routed to it for
collective processing (i.e. compression or EQ). After processing, the group’s mixed signal is then sent to the next
stage in the signal chain, such as a master output or to additional effects.

## Dynamics Processing

Dynamics processing is a general term representing ways to control the amplitude of channels signal. Dynamic range is a
term for the gap between the quietist and loudest part of a signal.

### Compressors

A compressor reduces the dynamic range of a signal by reducing (compressing) the louder sounds that come through a
channel.

- **Threshold** – The level at which compression begins. Signals above this level are reduced in volume.
- **Ratio** – Determines how much the signal is reduced once it exceeds the threshold (e.g., a 4:1 ratio means that for
  every 4dB above the threshold, only 1dB is output).
- **Attack** – How quickly compression is applied once the signal exceeds the threshold.
- **Release** – How quickly compression stops after the signal drops below the threshold.
- **Makeup Gain** – Boosts the overall level after compression to compensate for any reduction in volume.

Example Use Case: Compression is commonly used on vocals to prevent sudden loud peaks from hurting peoples ears.

### Gates

A gate mutes the channel when its signal drops below a certain threshold. This reduces unwanted noise or bleed between
microphones. Gates can be used for boundary or hanging mics, so they only pick up the loud vocals and cut out footsteps
or shuffling noises. They are also used when full micing a kit, to reduce bleed for example from the hi-hat when the
channel is only trying to mic the snare.

- **Threshold** – The level below which the gate closes, cutting off sound.
- **Attack** – How quickly the gate opens (un-mutes) when a signal exceeds the threshold.
- **Hold** – The time the gate remains open before closing.
- **Release** – How quickly the gate closes after the signal falls below the threshold.

## Pre & Post Fader

- **Pre-fader sends** are routed before the channel fader, meaning their level remains constant regardless of fader
  movements. These are often used for monitor mixes, ensuring performers hear a consistent mix even if the
  front-of-house levels change.
- **Post-fader sends** are affected by fader adjustments, meaning changes to the main mix also impact the send level. I
  use these for cast mics going to band monitors, because (unlike the pre-fade instruments to the monitors) I don't want
  the band to be constantly hearing every cast mic. I want the band to receive the post-fader mix of the cast, similar
  to what im putting out front of house.

## Phantom Power

Phantom power (+48V) is used to power condenser microphones and active DI boxes via XLR cables.

## Gain & Trim

- **Gain (or preamp gain)** controls the input level of a signal before it reaches any processing or mixing stages. This
  is processing done while the signal is analogue (i.e. voltage in an XLR).
- **Trim** like gain but in the digital world, it changes the signal amplitude after the signal has been made digital.

## Stereo, Mono, and Flexi Channels

- **Mono Channels** handle a single audio signal, typically used for vocals, guitars, and individual drum microphones.
- **Stereo Channels** handle two linked audio signals (left and right), commonly used for keyboards, audio from a
  computer, or CD players etc.
- **Flexi Channels** can be configured as either mono or stereo in the same channel. This is DiGiCo slightly cursed
  terminology.

Note that on the SQ5, a stereo channel will take up two channels, whereas a DiGiCO "Flexi" stereo channel would only use
up one channel on your desk.

## FX Sends vs Returns

- **FX Sends** control how much audio is being sent to the effects processing unit.
- **FX Returns** control how much of the processed audio is brought back into the mix.

We typically mix effects using the send faders rather than the return fader. This approach ensures a more natural sound
since it doesn’t interfere with the output of the effects unit.

For example, if you want to add delay to only the last word of a sentence (such as at 0:47 in the Spotify version of
Hamilton’s "Wait for It") you would keep the send fader down for most of the sentence, raise it when the actor says
"wait for it," and then lower it again. Even though the send fader is back down, the processed signal continues to flow
through the FX unit and plays out smoothly through the PA because the return fader remains unchanged. Note that this
means that only the desired phrase gets the effects processing. If you tried to do this turning up and down the return
fader, the processing wouldn't be as clean because you'd allow different parts of the sentence that you didn't want
processing on to slip through the FX unit and out the PA. You can use the return fader as an emergency exit if the
reverb needs to be killed instantly e.g. if its causing feedback. In that scenario the sends fader wouldn't stop the
feedback as quickly, as even when the send is muted all the unprocessed sound in the FX unit will still flow out the
unit and through the open FX return to the PA.

## Matrices

Allows mixes to be routed to multiple outputs. E.g. sending your LR mix to the main PA and the front fills. Normally
mixes are only allowed to output to one location.
