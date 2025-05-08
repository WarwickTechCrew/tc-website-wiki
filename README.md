# Warwick Tech Crew Website

> This is the public website for Warwick Tech Crew, written using [Docusaurus](https://docusaurus.io).

Future contributors may want to keep the shows and hires archives up to date, and change the exec names and images
yearly. This README documents how to do so. For information about writing or editing wiki pages, see
[CONTRIBUTING.md](https://github.com/WarwickTechCrew/tc-website-wiki/blob/main/CONTRIBUTING.md).

## Updating Shows and Hires archive

We keep an archive of all members who work on shows (in the WAC) and hires (outside WAC). This is stored in annual YAML
files in `shows/` and `hires/`.

You can add `notes` to a term to be displayed above the shows (see Term 3 2019/2020), as well as `links` below the roles
in a show (see photo galleries in earlier years).

The standard format is below:

```yaml
year: 2012 / 2013

terms:
  - name: Term 1
    notes: This was a strange term, we don't talk about it.
    shows:
      - name: 'Tech Crew: The Musical'
        society: Tech Crew X MTW
        venue: Warwick Arts Centre Theatre
        people:
          - role: Tech Manager
            name: Stan Dinovation
          - role: Followspot Operator
            name: S. Potlite
        links:
          - name: Images
            label: Happy
            url: https://unsplash.com/photos/m6BphieLlwA
```

Using commas for multiple people sharing a role:

```yaml
- role: Assistant Stage Manager
  name: Shrek, Donkey, and Fiona
```

## Updating the Exec

The exec information is stored in `src/components/home/the-exec.tsx`, at the array at the top of the file. Images should
be stored in `static/images/home/exec` and should ideally be compressed to 85% quality 300x300px jpegs.

## Deployment

This website is deployed on Cloudflare Pages on the Warwick Tech Crew Google Cloudflare account.

Note that the build command must be `npm run shallow-build` to avoid issues with the changelog and Git history.
