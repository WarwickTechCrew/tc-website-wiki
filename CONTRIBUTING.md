# Contributing to the Wiki

The [wiki](https://warwicktechcrew.co.uk/wiki) is a collection of information that may be useful to Tech Crew members
and is open for everyone to see and contribute to. Docs are written using Markdown (a simple text format similar to that
used in Discord and Whatsapp), and are stored in the `/wiki` directory.

To contribute, you will need to a GitHub account. You can then edit the files directly on GitHub or clone the repository
using the instructions below. Alternatively, contact someone familiar with the website (such as Josh Heng to make the
changes for you).

You can find more information about formatting with markdown [here](https://docusaurus.io/docs/markdown-features).

You can also find more information about contributing on the
[Contributing Guide](https://warwicktechcrew.co.uk/wiki/resources/contributing).

## Running the Website Locally

You will need to have installed Node.js v20 and NPM for this to work. If you haven't already done this, you can install
the LTS version [here](https://nodejs.org/en/download).

Then, clone the website through SSH. You'll need to install [Git](https://git-scm.com/downloads) to do this, and setup a
SSH key.

```bash
git clone git@github.com:WarwickTechCrew/tc-website-wiki.git
```

Change into cloned directory

```bash
cd website
```

Install npm modules

```bash
npm install
```

Run the development server:

```bash
npm start
```

This will start a live-reloading web server at [http://localhost:3000](http://localhost:3000).

The following environment variables can also be added on deployment:

- `SHORTLINK_URL`: The base URL for shortlinks (e.g. `https://wwtc.uk`). If not defined, the site URL will be used

## Front Matter

Each doc file should have front matter at the top of the page that defines its description and emoji (e.g. for embeds):

```yaml
description: [Description of the page]
sidebar_custom_props:
  emoji: 🎭
```

### Wiki Authors

By default, the site will show the name of all the contributors for each page. This is determined from the name you use
on GitHub/the name you have configured in Git. These names can be overridden in the file `src/lib/author-names.ts`.

It is also possible to add additional contributors or override all the contributors for a wiki page by adding the
following front matter to the top of each doc file:

```yaml
---
additional_authors: <comma separated list>
override_authors: <comma separated list>
---
```

### Resources

You can add resources with the following frontmatter:

```yaml
---
resources:
  - name: [Resource name]
    url: [Resource URL]
    author: [Optional - resource author]
---
```

### Shortlinks

Shortlinks can be added to provide a shorter link to the wiki page. The first shortlink will be shown in the sidebar:

```yaml
shortlinks:
  - mainShortlink
  - secondaryShortlink
```

Section shortlinks can also be used to direct the user to a specific heading (e.g. `#section-heading`):

```yaml
sectionShortlinks:
  - shortlink: heading
    hash: section-heading
```

## Videos

You can add videos to TC wiki pages!
For reop-filesize reasons, we upload videos to the TC gmail Youtube account (ask an exec to do this for you!).
You can then insert the video to a page by following [this guide by google](https://support.google.com/youtube/answer/171780?hl=en) to get the embed link for the video to add to the site.
Then wrap that iframe in a `<div class="video-full"></div>` to make the video span the full width of the page.
You can see examples of embedded videos on [this makka pakka page](https://wwtc.uk/makka-pakka).


## Images

Images can be added in the following Markdown format:

```md
![Alt Text](file-name.txt)
```

These can be made into a gallery format (i.e. showing them side by side) by wrapping them in a `img-gallery` class div:

```md
<div class="img-gallery">
    ![Alt Text](file-name.txt)
    ![Alt Text](file-name.txt)
</div>
```

These can be made full width by wrapping them in a `img-full` class div:

```md
<div class="img-full">
    ![Alt Text](file-name.txt)
</div>
```

## Assets

Images and assets can be stored in `static/images`. Please follow the naming convention for images to ensure that credit
is given to the author, and please resize the images to 85% quality jpegs of a reasonable size.

Common sizes are:

- 16:9 aspect ratio with 800px width: general photos
- 3:1 aspect ratio with 3000px width: carousel images

### Hero Images

Hero images can be added to the top of a page by adding the following front matter:

```yaml
image: ./banner.jpg
image_alt: Image alt text
```

These will be shown in link previous and at the top of the doc page. Note that this image will be resized to cover the
full page width and will always be in a banner-like aspect ratio, so make sure the image is suitable for this (i.e. the
most interesting part of the image should be in the vertical middle, and top/bottom cropping shouldn't cause an issue).

A hero/embed image can be disabled from being shown as a banner with the following front matter:

```yaml
disable_banner: true
```

## Admonitions

[Docusaurus has extra syntax to create "admonitions"](https://docusaurus.io/docs/markdown-features/admonitions), similar
to the one below:

> [!WARNING] The Docusaurus admonition syntax is different to that used by GitHub and Obsidian

You can use the types `note`, `tip`, `info`, `warning`, `danger`. We also have our own custom `lore` admonition. To add
lore to a page use:

```markdown
:::lore

This wiki was started in 2024. Contributing is a great way to procrastinate coursework!

:::
```

## Cloudflare Configuration and Rules

Discord does a silly thing where if a link is followed with `!`, it will include the `!` in the link (which then causes
the link to 404). To fix this, we have a Cloudflare redirect rule that removes the `!` from the end of any URL. This can
be managed on the [Cloudflare dashboard](https://dash.cloudflare.com/).

## ESLint

We use eslint to ensure that our code is generally high quality and is formatted consistently. This will automatically
be run whenever a merge request is created. This can be run with:

```bash
npm run lint
```

```bash
npm run lint:fix
```

If you are using an editor such as IntelliJ or VSCode, I'd recommend setting your editor to automatically run this
whenever you save, and fix any issues.
