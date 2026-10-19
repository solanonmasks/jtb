# JTB Enterprises website

Plain HTML, CSS and a little JavaScript. No build step and nothing to install.

## See it
Double-click any `.html` file to open it in your browser. Start with `index.html`.

## Files
| File | What it is |
|---|---|
| `index.html` | Home page |
| `drainage.html` | Drainage page |
| `projects.html` | Projects grid with filter and pop-up details |
| `about.html` | About Joe |
| `contact.html` | Request an Estimate form |
| `thanks.html` | Page shown after the form is sent |
| `css/style.css` | All the styling. Colours are at the top. |
| `js/main.js` | Accordion, services switcher, reviews, project filter, form pre-select |
| `favicon.svg` | Browser tab icon |

The header and footer are copied into every page. If you change one (say, the phone number), change it in all six `.html` files. Search for the old text to find every copy.

## Putting it online
The easiest option is **Netlify**: drag this folder onto app.netlify.com/drop, or connect this GitHub repo.
The estimate form is already set up for **Netlify Forms**, so submissions show up in the Netlify dashboard and can be emailed to Joe.
On a different host, the form needs a form service (Formspree, Basin and so on) or it won't send anything.

## Before launch (to do)
Search the code for `TODO` and `PLACEHOLDER` to find each one.
- **Photos** still load from JTB's current Wix site. Download the originals, save them in an `images/` folder, and change the `src` links. If the Wix site is shut down first, the photos will break.
- **Reviews** are placeholders. Replace them with real Google and HomeStars reviews. Two on the Drainage page are labelled "Placeholder".
- **Projects page**: the 12 project details (cities, scope, machines, durations) are placeholders. Some reuse the same photos.
- **About page**: needs a photo of Joe on a machine.
- **Confirm with Joe**: machine list, $350 camera fee, $9k–$28k price range, hero caption, project cities and durations.
- **Links**: add the real Google reviews, HomeStars and social media URLs. They are `#` for now.
- Award, review and WCB logos can go on the About page and under the proof line on Home.
