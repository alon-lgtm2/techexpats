# Photographs on techexpats.nl

## What the site actually has, as of 2026-09-04

| File | What it is | Where it appears |
|---|---|---|
| `alon.jpg` | Studio headshot, 1200x1200. Upgraded from the 820px copy the site had been shipping; the 1572px master is in `pipeline/Therapists Community/alon-profile.jpg` | Homepage hero, `/for-companies` |
| `alon-portrait.jpg` | A 4:5 crop of the same headshot, 900x1125 | `/he/pricing` hero |
| `alon-speaking.jpg` | On stage at a tech community evening, 1600x554 | `/about`, and the homepage photo band |

**That is the whole set, and two of the three are the same photograph.** The site
runs on one studio headshot and one stage shot. Everything else on every page is
type. That is why it reads thin however good the copy is.

## What is deliberately not here

`pipeline/Practi - Shlomit Navot/Deliverables/assets/alon-lab.jpg` is the only
other photograph of Alon working that exists in the brain. It shows a workshop
in progress and it **must not be published**: about fifteen identifiable people
who did not consent to appearing in marketing, AFI Europe branding on a notepad
and on a laptop screen, and the site describes that client generically as "a
European real estate developer and investor" on purpose. Publishing it would
name the client through the back door.

## What to shoot, in priority order

Anyone can take these on a phone. They do not need a photographer.

1. **Working, close in.** At the desk, mid call, a session in progress. Shot
   over the shoulder or from the side, no client screen readable. This is the
   single biggest gap: nothing on the site shows the work happening.
2. **A second portrait, different from the studio one.** Standing, in context,
   outdoors or in an office, three quarter length. Landscape. The current
   headshot is formal and it is doing every job on the site.
3. **Speaking, more than once.** Different room, different year. One stage photo
   from one evening reads as one evening.
4. **Amsterdam.** The city, no people. Useful as a background band and it dates
   nothing.

## How to add one

Drop the file in this folder and tell Claude where it should go. Format: JPEG,
longest edge 1600px, quality 85, under about 250 KB. Portraits 4:5, bands 16:9.

**Check `git status` before assuming a new image shipped.** On 2026-08-03 an
article cover sat untracked in this folder for weeks: the site built and
previewed perfectly, and the live pages rendered no image at all.
