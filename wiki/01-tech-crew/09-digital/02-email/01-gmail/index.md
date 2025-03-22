---
description: How the Tech Crew Gmail account is configured
sidebar_custom_props:
    emoji: 📨
---
# Gmail

Tech Crew primarily uses a shared Gmail account to manage its emails. To assist with keeping this organised amongst the
whole exec, we make extensive use of labels and filters to ensure that it's clear who is responsible for which email,
and which emails are still outstanding.

## Unread Emails

Historically, we have had issues with the native email read/unread system as marking emails as read can sometimes be
buggy in the Gmail mobile app. This has resulted in emails being missed or not actioned.

As a result, we have implemented our own unread email system. When an email is received, it is automatically marked with
a bright orange **_UNREAD** label. All emails within this label are shown at the top of the inbox and as a separate
section in the mobile app.

Once an email has been read and actioned, this label can be manually removed. Alternatively, the **_UNREAD/NEEDS ACTION**
label can be applied instead, which will, again, show the email at the top of the inbox.

## Email Labels

Apart from the unread labels mentioned above, we also use other labels to categorise emails. These include:
* **People labels** - there exist labels for each person within the exec, which makes it clear who's responsible for
  the email thread and who can be chased up if required.
* **Good entertaining content** - this is a label for any entertaining or interesting email. This is more for fun - if
    you're bored, you can always read through these emails for a laugh!

There are also labels for other specific categories but these should be fairly obvious from their names.

## Gmail Configuration

These settings can be accessed using the gear icon in the top right of the Gmail interface, then selecting *See all
settings*.

### Mail Filters

We have a number of filters set up to automatically apply labels to emails based on their content. These can be
configured in the *Filters and Blocked Addresses* tab.

### Unread Email System

This system is achieved using a Gmail filter and custom Inbox section configuration:

* Within the *Filters and Blocked Addresses* tab, there is a filter that applies the `_UNREAD` label to all emails
  that are not from a Tech Crew email address.
  * **Filter:** Matches: `from:(-*@warwicktechcrew.co.uk -warwicktechcrew@gmail.com -warwicktechcrew@warwick.ac.uk)`
  * **Action:** Apply label `_UNREAD`
* Within the *Inbox* tab, the *Inbox type* setting is set to *Priority Inbox* with the following sections:
  1. Show all emails with the `_UNREAD` label
  2. Show all emails with the `_UNREAD/NEEDS ACTION` label, and hide section is empty
  3. Show all unread emails, and hide section is empty
  4. Show everything else


## Alternative Mail Approaches
There are various advantages and disadvantages to our current shared-Google-account approach. If considering switching
to a different email system, consider the following:

* **Advantage:** Multiple people can see all emails and can respond or chase them up if required - this is
  especially useful for time-sensitive emails, or if the person the email is intended for is unavailable.
* **Advantage:** As every email is on the same account (and has been for a number of years), it is easy to search for
  previous emails to find information. It also improves general transparency and accountability throughout the exec.
* **Advantage:** Using Gmail and Google's mail servers inherently gives us better email reputation than our own servers
  would. In simpler terms, this means our emails are less likely to go to spam.
* **Disadvantage:** There are security and accountability implications with everyone using the same account. It can be
  difficult to see who did something, and 2FA is not as much of a thing as most requests will be automatically approved
  by someone.
* **Disadvantage:** Emails can be missed if they are intended for a certain person and someone else marks that email as
  read. We have, however, tried to mitigate this by adding our own unread email label system.