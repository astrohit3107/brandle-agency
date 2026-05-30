# 🚀 BRANDLE Vercel Deployment Guide

Complete step-by-step guide to deploy the BRANDLE website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free)
- Node.js 18+ locally
- Git installed

## Step 1: Prepare Your Project

### Local Setup
```bash
cd brandle-next

# Install dependencies
npm install

# Build locally to verify
npm run build

# Run production build locally
npm start
```

Visit http://localhost:3000 to verify everything works.

## Step 2: Push to GitHub

### Initialize Git
```bash
git init
git add .
git commit -m "Initial commit: BRANDLE premium website"
```

### Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Create repository: `brandle-next`
3. Copy repository URL

### Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/brandle-next.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: GitHub Integration (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub account

2. **Import Project**
   - Click "New Project"
   - Click "Import Git Repository"
   - Select `brandle-next` from your GitHub repos
   - Click "Import"

3. **Configure Project**
   - Framework Preset: Select "Next.js"
   - Root Directory: Keep default
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Environment Variables (Optional)**
   - Skip for now (can add later)
   - Click "Deploy"

5. **Wait for Deployment**
   - Vercel builds and deploys automatically
   - Takes ~2-3 minutes
   - Green checkmark when complete

### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Authenticate with Vercel
vercel login

# Deploy
vercel --prod

# Follow prompts:
# - Use current directory? Yes
# - Want to override existing project? Yes/No
# - Project name: brandle-next
```

### Option C: Direct Upload

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Continue with GitHub" (requires GitHub connection)
3. Select repository
4. Click Deploy

## Step 4: Verify Deployment

### Check Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on `brandle-next` project
3. Check "Deployments" tab
4. Status should be "Ready" (green)

### Test Live Site
- Click "Visit" button
- URL format: `https://brandle-next.vercel.app`
- Verify all sections load
- Check animations work
- Test responsiveness

### Check Logs
1. In project dashboard
2. Click latest deployment
3. Check "Logs" for build errors
4. Check "Runtime Logs" for runtime errors

## Step 5: Custom Domain (Optional)

### Add Custom Domain
1. Project Settings → Domains
2. Enter domain: `brandle.com`
3. Follow DNS configuration
4. Wait for verification (15 min - 24 hrs)

### Configure DNS
- For GoDaddy: Point to Vercel nameservers
- For Cloudflare: Add CNAME record
- For other providers: Follow Vercel instructions

## Step 6: Environment Variables (Optional)

### Add Variables
1. Project Settings → Environment Variables
2. Add variable:
   ```
   Name: NEXT_PUBLIC_SITE_URL
   Value: https://your-domain.com
   ```
3. Redeploy: Click "Deployments" → Select latest → Click "Redeploy"

## Step 7: Analytics (Optional)

### Enable Vercel Analytics
1. Project Settings → Analytics
2. Click "Enable Web Analytics"
3. View real-time data in dashboard

## Step 8: Auto-Deployment

### GitHub Push Auto-Deploy
Every time you push to main branch, Vercel automatically:
1. Builds the project
2. Runs tests
3. Deploys if successful
4. Sends notification

### Workflow
```bash
# Make changes locally
# Edit components, add features, etc.

# Commit and push
git add .
git commit -m "Update: New feature"
git push

# Vercel auto-deploys (takes 1-3 minutes)
# Check deployment in dashboard
```

## Troubleshooting

### Build Fails
**Check Logs:**
1. Dashboard → Deployments → Click latest
2. Click "View Build Logs"
3. Look for error messages
4. Common issues:
   - Missing dependencies: Run `npm install`
   - TypeScript errors: Run `npm run type-check`
   - Invalid imports: Verify file paths

### Site Shows 404
**Solution:**
1. Check domain configuration
2. Verify `next.config.js` settings
3. Clear browser cache (Ctrl+Shift+Del)
4. Try incognito window

### Animations Don't Work
**Check:**
1. Browser console (F12) for errors
2. Framer Motion installed correctly
3. JavaScript enabled in browser
4. Recent deployment status

### Slow Performance
**Optimize:**
1. Enable Image Optimization in Settings
2. Use Vercel Analytics to identify bottlenecks
3. Check "Build Output" size
4. Consider caching strategy

## Rollback Deployment

### If Something Goes Wrong
1. Dashboard → Deployments
2. Find previous working version
3. Click three dots → "Promote to Production"
4. Site reverts to previous version instantly

## Post-Deployment

### Monitor Performance
- Vercel Analytics: Real-time metrics
- Lighthouse: Run checks monthly
- Error tracking: Monitor 500 errors

### Maintenance
- Monitor build logs
- Update dependencies monthly: `npm update`
- Test new features in preview
- Keep git history clean

### CI/CD Best Practices
- Create feature branches
- Use pull requests
- Enable "Preview Deployments"
- Test before merging to main

## Advanced: Custom Build Script

Edit `package.json`:
```json
{
  "scripts": {
    "build": "npm run lint && next build",
    "lint": "next lint"
  }
}
```

Vercel runs `npm run build` automatically.

## Performance Optimization

### Lighthouse Targets
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

### Improvements
1. Image optimization (done by Next.js)
2. Code splitting (automatic)
3. CSS optimization (Tailwind)
4. Font optimization (system fonts)

## Cost

### Free Tier (Perfect for This Project)
- ✅ Unlimited projects
- ✅ Unlimited bandwidth
- ✅ Automatic HTTPS
- ✅ Free analytics
- ✅ Serverless functions
- ✅ Custom domains

### When You Need Pro
- More serverless function limits
- Priority support
- Advanced analytics

## Security

### Enable
1. Project Settings → Security
2. Enable branch protection
3. Require status checks
4. Require pull request reviews

### Secrets
Never commit `.env` files. Use:
1. Project Settings → Environment Variables
2. Add secrets there
3. Reference in code: `process.env.SECRET_NAME`

## Useful Commands

```bash
# Build
npm run build

# Check for errors
npm run lint
npm run type-check

# Preview production build
npm run build
npm start

# Install dependencies
npm install

# Update dependencies
npm update

# Check for vulnerabilities
npm audit
npm audit fix
```

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Status**: https://www.vercelstatus.com
- **Community**: https://github.com/vercel/next.js/discussions

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Deployment successful (green status)
- [ ] Live site accessible
- [ ] All sections visible
- [ ] Animations working
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Analytics enabled
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Performance score 90+

## 🎉 You're Live!

Your BRANDLE website is now live on the internet!

Share your deployment:
- Twitter: Include link + screenshot
- LinkedIn: Post about launch
- GitHub: Add link to portfolio

---

**Deployment Time: 5-10 minutes**
**Maintenance: Automated with Vercel**
**Scaling: Automatic and unlimited**

🚀 Welcome to Vercel!
