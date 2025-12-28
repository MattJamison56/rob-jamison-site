# Deployment Guide - Robert Jamison CPA Website

## Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - Robert Jamison CPA site"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your `rob-jamison-site` repository
   - Vercel will auto-detect it's a Vite project

3. **Configure (if needed)**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~30 seconds!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
cd /Users/mattjamison/Downloads/rob-jamison-site
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? rob-jamison-site
# - In which directory is your code located? ./

# For production deployment
vercel --prod
```

### Environment Variables (if needed later)

To add environment variables (e.g., for form submissions):

1. Go to your project in Vercel Dashboard
2. Settings → Environment Variables
3. Add your variables (e.g., `VITE_API_URL`)
4. Redeploy

### Automatic Deployments

Once connected, every push to `main` branch will automatically deploy to production.
Pushes to other branches create preview deployments.

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Testing Before Deployment

```bash
# Run development server
npm run dev

# Build for production locally
npm run build

# Preview production build
npm run preview
```

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Test search functionality
- [ ] Test contact form submission
- [ ] Test on mobile devices (responsive design)
- [ ] Verify all "What We Do" pages load
- [ ] Verify Resources pages show placeholder content
- [ ] Check About Us page
- [ ] Test hamburger menu on mobile

## Troubleshooting

**Build fails?**
- Check `package.json` dependencies are installed
- Run `npm install` locally
- Try building locally with `npm run build`

**Routing issues (404 on refresh)?**
- `vercel.json` handles this with rewrites configuration
- All routes redirect to `/index.html` for client-side routing

**CSS not working?**
- Verify Tailwind CSS is properly configured
- Check `postcss.config.js` and `tailwind.config.js`

## Support

For Vercel-specific issues, see: https://vercel.com/docs
