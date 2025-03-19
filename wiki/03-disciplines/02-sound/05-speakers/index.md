---
description: Cube shaped noisy thing
sidebar_custom_props:
  emoji: 🔊
shortlinks:
    - speakers
    - speaker
---

# Speakers

To produce noise, speakers are split into an amplifier (amp) and a driver.
The amplifier boosts the audio signal high enough to move the driver, which in turn moves the air to create sound waves.

## Active (powered) speakers

These speakers have both the amplifier and the driver contained in the same housing.
This makes them portable and quick to set up, however the speaker needs 13A power from a wall socket in order to run the amplifier.
They usually have XLR inputs.
Active speakers are often referred to as 'powered' speakers due to them needing direct power to operate.
This is due to _active_ and _passive_ being used to describe unpowered speakers that have internal crossovers (active) or are bi-amped (passive).

### Tech Crew's current active speakers:

#### [Mackie SRM350](https://mackie.com/en/products/loudspeakers/srm-portable/SRM350.html)
The Mackie SRM350 is a compact, active (powered) loudspeaker designed for versatility and durability.
Warwick Tech Crew owns two of these units, and they are commonly used as main front-of-house (FOH) speakers on stands or as floor wedges for monitoring on stage.

#### [LVX-8](https://www.dbtechnologies.com/en/products/lvx/lvx-8/)
The DB Technologies LVX-8 is a compact, active (powered) loudspeaker known for its high-quality audio performance and versatile design.
Warwick Tech Crew owns two of these speakers, which are frequently chosen over the SRM350s due to their superior sound quality.
Like the Mackie SRM350, the LVX-8 can be used on stands for front-of-house (FOH) applications or positioned on its side as a stage monitor.

### Warwick Arts Centre's current active speakers:

#### [dB technologies minibox L160](https://www.dbtechnologies.com/en/products/mini-box/minibox-l-160d/)
The dB Technologies minibox L160 is a small, active (powered) loudspeaker that offers clear and reliable sound in an ultra-compact form factor.
Its small size makes it perfect for practicals on stage, where discreet placement and minimal footprint are essential.

---

## Passive (unpowered) speakers

These speakers do not contain an amplifier in their housing, so require an amp to be set up (and connected to power) somewhere else.
They normally take a 4 pole speakon connectors as input, as these cables can carry the amplified audio signal from the amp to the driver in the speaker.
These cables can carry 2 seperate speaker signals.

### Tech Crew's current passive speakers:

#### [Nexo Geo S1210](https://www.nexo-sa.com/products/geo-s1210/)
Warwick Tech Crew owns 10 of these line-array elements. The **S1210** features a 10° vertical dispersion and is designed to be used in arrays for medium to large venue coverage.  
They can be **bi-amped**, giving separate amplifier channels for low-frequency and high-frequency drivers, which enhances performance, clarity, and headroom.
This can be done by removing the screws on the speakon plate and swapping the cable to bypass the crossover.
Always make note if this has been changed on the speakon plate to display what operating mode has been set up to others.

#### [Nexo Geo S1230](https://www.nexo-sa.com/products/geo-s1230/)
Warwick Tech Crew owns 2 of these line-array elements. The **S1230** shares many of the same components as the S1210, but offers a 30° vertical dispersion for different coverage requirements, especially useful for near-field or downfill positions in a larger array.  
Like the S1210, the S1230 can also be **bi-amped** for more precise tuning and improved overall sound quality.
This can be done by removing the screws on the speakon plate and swapping the cable to bypass the crossover.
Always make note if this has been changed on the speakon plate to display what operating mode has been set up to others.

:::warning

These speakers (when in passive mode) receives the speaker signal from the second signal (2+ & 2-) in a 4 pole speakon.
Therefore, these will not work when connected with a 2 pole speakon cable.
This is to allow a subwoofer to take the signal from the first signal (1+ & 1-) without a crossover cable.

:::

#### [Nexo PS10-R2](https://www.nexo-sa.com/products/ps10-r2/)
Warwick Tech Crew owns 3 of these compact, point-source loudspeakers. The **PS10-R2** can be used for front-of-house or stage monitoring, much like the LVX-8; however, it delivers a higher maximum SPL (up to around 132 dB peak) and handles more power (up to 1,250 W program) than many smaller active boxes.  
This means it can achieve greater headroom and clarity for medium-sized events or performances where louder output is required.

### Warwick Arts Centre's current passive speakers:

#### Theatre line array
*(Details forthcoming.)*

## Bi-amping

**Bi-amping** is the practice of powering different sections of a speaker (typically the low-frequency (LF) driver and the high-frequency (HF) driver) with separate amplifier channels.
This approach requires an external (or internal) crossover that splits the audio signal before the amplifiers, rather than using a single, full-range amplifier signal into a passive crossover within the speaker cabinet.
The 2 different signals in a 4 pole speacon are often used for the LF and HF signals to allow a speaker to use a single cable.

### Why Use Bi-amping?

1. **Improved Performance**: By dedicating amplifier channels to specific frequency ranges, each driver receives precisely the power it needs. This can reduce distortion and increase clarity, especially at higher volumes.

2. **Greater Headroom**: Low frequencies often demand more power than high frequencies. Having separate amps prevents the LF driver’s power demands from compromising the HF driver’s performance (and vice versa).

3. **Enhanced Control**: System tuning can be more precise, as you can independently adjust levels, EQ, and crossover points for each driver without affecting the other.

4. **Flexibility**: If the speaker supports a bi-amp mode (like many **passive** speakers with dedicated LF and HF inputs), it can be used in a traditional single-amp “passive crossover” setup or a bi-amped “active crossover” setup.

### When and Why Should You Use Bi-amping?

- **High SPL or Critical Listening**: In applications where you need high sound levels without compromising clarity—such as concerts or large events—bi-amping can provide that extra headroom and definition.
- **Fine-grained Tonal Control**: Audio engineers who want more control over each driver’s output may prefer bi-amping to dial in specific frequency responses and dynamics.
- **Speaker Compatibility**: Not all speakers can be bi-amped. However, the **Nexo Geo S1210** and **Nexo Geo S1230** are designed to support bi-amping for enhanced performance.

### Passive vs. Active Terminology

Bi-amping is sometimes confusingly referred to as an “active” method of powering speakers (because of the use of an “active” electronic crossover), whereas using a built-in crossover with a single amplifier is called “passive.” However:

- **Passive Setup** (traditional, single-amp approach): A single amplifier channel sends a full-range signal to the speaker’s internal (passive) crossover, which splits frequencies to each driver.
- **Active Setup** (bi-amp approach): The crossover network is typically external or built into a digital processor (“active” crossover), splitting LF and HF before amplification. Each driver then gets its own amplifier channel.

In practice, “active” vs. “passive” can refer to how the crossover is powered, but is usually whether the speaker has an internal amplifier.
Make sure the terminology is clear when discussing speaker or system configurations.

---

## Amplifiers

Amplifiers are needed for driving passive (unpowered) speakers.  
They take a low-level audio signal from a mixer or processor and boost it to a higher-level signal capable of moving a speaker’s driver. Modern amplifiers may use different internal designs—such as **Class A**, **Class AB**, **Class D**, etc.—that affect efficiency, size, and heat output:

- **Class A** amplifiers run continuously at full power, offering excellent fidelity but generating a lot of heat and using power less efficiently.  
- **Class AB** amplifiers are more efficient than Class A and still provide good audio quality, though they are heavier and run hotter than Class D.  
- **Class D** amplifiers (digital switching amplifiers) are extremely efficient, producing less heat and delivering high power in a compact form factor.

### Tech Crew's current amplifiers:

#### [Nexo NX Amp 4X1](https://www.nexo-sa.com/products/nxamp4x1/)
This **Class D**, professional-grade powered controller amplifier is designed primarily for Nexo loudspeakers, featuring built-in DSP and presets for easy optimisation.
However, it can also be configured for third-party speakers if required.
The 4X1 delivers up to **900 W per channel at 4Ω** (and up to 600 W at 8Ω), making it well-suited for running smaller or mid-range boxes like the **PS10-R2**.
Because it’s smaller and lighter than the 4X4, it’s more convenient to transport and install in locations where space and ease of handling are crucial.
Warwick Tech Crew owns 1 NX Amp 4X1.

#### [Nexo NX Amp 4X4](https://www.nexo-sa.com/products/nxamp4x4/)
These are also **Class D** amplifiers, able to deliver significantly more power (up to **3,300 W per channel at 4Ω**), making them ideal for driving higher-demand loudspeakers such as the **Nexo Geo S1210** and **S1230**.
With the same integrated DSP and Nexo presets, the 4X4 ensures optimal performance and protection for arrays requiring substantial headroom and coverage.
Warwick Tech Crew owns 2 NX Amp 4X4 units.
