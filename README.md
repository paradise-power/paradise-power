# Paradise Power — React Site (Vite)

## Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:5173

## Deploy to Vercel (drag & drop ZIP)
1. Go to https://vercel.com → Add New Project → **Import** → **Upload**.
2. Upload this ZIP. Vercel will auto-build.
3. In Project → **Settings → Domains**, add `paradise-power.com` and follow the DNS instructions.

## Edit content
Open `src/App.jsx` and change the `CONFIG` object:
- Phone, email, service area, license
- **SERVICES** array (titles/bullets)
- **PROJECTS** array (category + image path)
- **ABOUT** paragraph

Images are in `public/images/`:
- `hero.jpg` (solar panels hero)
- `project-commercial.jpg` (IMG_0280.JPG)
- `project-residential.jpg` (IMG_7517.jpg)
- `project-solar.jpg` (IMG_4789.jpg)
- `logo.jpg` (logo)

> Tip: Images are compressed for fast loads. Replace with larger ones if you need, but try to keep under ~2000px wide.

## Contact form
Currently a demo (does not send). We can wire Formspree, Netlify Forms, or your CRM/email if you like.