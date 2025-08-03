---
description: Technical details for the Warwick Drama Photo Archive
sidebar_custom_props:
  emoji: 🔧
---

# Photo Archive Technical Details

The [Warwick Drama Photo Archive](https://gallery.warwickdrama.org.uk/) runs on [Piwigo](https://piwigo.org/) platform,
hosted by the
[University of Warwick Computing Society](https://uwcs.co.uk/), and is maintained by Tech Crew.

This is deployed using [UWCS Container Hosting](https://techteam.uwcs.co.uk/en/services/containers) on the
[UWCS Public Portainer](https://portainer.uwcs.co.uk) environment. This consists of the following parts:

* `piwigo` container - the web application
* `drama_piwigo-mariadb-1` Container - the database to store metadata
* `drama_piwigo_drama_piwigo` volume - where photos are stored
* `drama_piwigo_default` network - network for containers to communicate with each other

If this service goes down, you may need to check the following (note - you may need to ask a UWCS sysadmin for help):

* `gallery.warwickdrama.org.uk` DNS record - this is owned by Adam Skrzymowski
* Any of the containers listed above on the UWCS Public Portainer
* UWCS's [OPNSense/HAProxy](https://techteam.uwcs.co.uk/en/apps/opnsense) server - contact UWCS to do this

:::info
It is currently unclear as to whether this is currently being backed up. This should probably be investigated relatively
soon.
:::