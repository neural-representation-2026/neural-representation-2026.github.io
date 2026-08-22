# Neural Scene Representation and Neural Rendering — Fall 2026

This folder is a complete, build-free GitHub Pages site for **CIS 7000-005**. It is the 2026 successor to <https://neural-representation-2025.github.io/>.

## Do I need a new GitHub account?

No. The 2025 address is owned by a GitHub **Organization**, not by a separate human login.

Recommended setup for the clean address `https://neural-representation-2026.github.io/`:

1. Sign in with your existing GitHub account.
2. Create a free organization named `neural-representation-2026`.
3. Inside that organization, create a **public** repository named exactly `neural-representation-2026.github.io`.
4. Unzip this package on your computer.
5. Upload the **contents** of the unzipped folder to the repository root. Do not upload the ZIP itself; GitHub will not unpack it.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select `main` and `/(root)`, then click **Save**.

If the organization name is unavailable, you can instead create a normal repository such as `neural-representation-2026` under your existing account. The site address will then be `https://YOUR-USERNAME.github.io/neural-representation-2026/`. All links in this package are relative, so both approaches work.

## Edit these items before publishing

Open `data/site-config.js` in any text editor and update:

- TA names, webpages, and email addresses
- meeting days, time, and room
- the live Google Sheet sign-up URL
- the paper-question form URL
- the presentation-slides folder URL
- Canvas URL, if used

Unconfigured course links appear disabled rather than sending students to an old 2025 form.

## Site structure

- `index.html` — organization and course overview
- `topics.html` — filterable 14-week / 42-slot schedule
- `backup.html` — searchable 124-paper candidate pool
- `format.html` — bundle-first presentation and discussion format
- `resource.html` — worksheet and reading/presentation resources
- `data/site-config.js` — the small set of semester-specific settings
- `data/course-slots.js` — 42 reading slots, including lead/skim roles
- `data/paper-pool.js` — 124 individual candidate papers
- `files/CIS7000_2026_Paper_Signup.xlsx` — editable source worksheet
- `tools/export_course_data.py` — optional workbook-to-website data exporter
- `.nojekyll` — tells GitHub Pages to publish the static files unchanged

No npm, Jekyll, Python, database, or build command is needed. You can double-click `index.html` to inspect the site locally before uploading.

## Updating papers later

For small changes, edit `data/course-slots.js` or `data/paper-pool.js` directly and keep the existing field names. For a larger revision, update the included workbook and run:

```bash
python -m pip install openpyxl
python tools/export_course_data.py files/CIS7000_2026_Paper_Signup.xlsx data
```

The exporter validates all headline counts before replacing the website data, keeping the schedule and spreadsheet aligned.

## Status policy

Paper and venue status was checked through **August 21, 2026**. Re-check Frontier papers, URLs, code/data availability, and any newly announced venue decisions two to three weeks before the first class.
