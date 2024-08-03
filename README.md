# Warwick Tech Crew Website
> This is the public website for Warwick Tech Crew, written using [Docusaurus](https://docusaurus.io).

## Contributing to the Wiki
The [wiki](https://dev.warwicktechcrew.co.uk/wiki) is a collection of information that may be useful to Tech Crew
members and is open for everyone to see and contribute to. Docs are written using Markdown (a simple text format
similar to that used in Discord and Whatsapp), and are stored in the `/wiki` directory.

To contribute, you will need to a GitHub account. You can then edit the files directly on GitHub or clone the repository
using the instructions below. Alternatively, contact someone familiar with the website (such
as Josh Heng to make the changes for you).

You can find more information about formatting [here](https://docusaurus.io/docs/markdown-features).

### Wiki Authors
By default, the site will show the name of all the contributors for each page. This is determined from the name you use
on GitHub/the name you have configured in Git. These names can be overridden in the file `src/lib/author-names.ts`.

It is also possible to add additional contributors or override all the contributors for a wiki page by adding the
following front matter to the top of each doc file:
```
---
additional_authors: <comma separated list>
override_authors: <comma separated list>
---
```

## Updating Shows
Shows are stored in annual YAML files in `shows/`.

You can add `notes` to a term to be displayed above the shows (see Term 3 2019/2020), as well as `links` below the roles in a show (see photo galleries in earlier years).

The standard format is below:

```yaml
year: 2012 / 2013

terms:
- name: Term 1
  notes: This was a strange term, we don't talk about it.
  shows:
  - name: "Tech Crew: The Musical"
    society: Tech Crew X MTW
    venue: Warwick Arts Centre Theatre
    people:
    - role: Tech Manager
      name: Amanda Fleming
    - role: Prime Minister
      name: Who the f*ck knows anymore
    links:
    - name: Images
      label: Happy
      url: https://unsplash.com/photos/m6BphieLlwA
```

## Updating the Exec
The exec information is stored in `src/components/home/the-exec.tsx`, at the array at the top of the file. Images 
should be stored in `static/images/home/exec` and should ideally be compressed to 85% quality 300x300px jpegs.

## Running the Website Locally
You will need to have installed Node.js v20 and NPM for this to work. If you haven't already done this, you can install the LTS version [here](https://nodejs.org/en/download).

Then, clone the website through SSH. You'll need to install [Git](https://git-scm.com/downloads) to do this, and setup a SSH key.
```bash
git clone git@github.com:WarwickTechCrew/website.git
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

## Assets
Images and assets can be stored in `static/images`. Please follow the naming convention for images to ensure that credit
is given to the author, and please resize the images to 85% quality jpegs of a reasonable size.

Common sizes are:
* 16:9 aspect ratio with 800px width: general photos
* 3:1 aspect ratio with 3000px width: carousel images

## Code and Commit Style
### Git Usage
Please complete any work in your own branch related to the issue you are completing. You can click 'Create Merge Request' on the issue to do this, and then create a branch when asked.

When committing changes, precede your message with a [Gitmoji](https://gitmoji.dev/) so it's easy to see what you have done. The most common ones you may use are:
* 💬 `:speech_balloon:` - Add or update text and literals
* ✨ `:sparkles:` - Introduce new features
* 🐛 `:bug:` - Fix bugs
* 💄 `:lipstick:` - Add or update the UI and style files.
* 🚨 `:rotating_light:` - Fix compiler/linter warnings

After you have completed your work, remove the draft status from your merge and assign Josh to review it!

### ESLint
We use eslint to ensure that our code is generally high quality and is formatted consistently. This will automatically be run whenever a merge request is created. This can be run with:
```bash
npm run lint
```

```bash
npm run lint:fix
```

If you are using an editor such as IntelliJ or VSCode, I'd recommend setting your editor to automatically run this whenever you save, and fix any issues.