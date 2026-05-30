# 🚀 BRANDLE Setup Guide

Complete step-by-step installation and deployment guide.

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js** v14 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **Text Editor** (VS Code recommended)
- **Terminal/Command Prompt**

## ✅ Check Your Setup

Run these commands to verify:

```bash
# Check Node.js version
node --version
# Should output: v14.0.0 or higher

# Check npm version
npm --version
# Should output: 6.0.0 or higher

# Check Git version
git --version
# Should output: git version 2.x.x
```

## 🔧 Installation Steps

### Step 1: Clone or Download Repository

**Option A: Clone with Git**
```bash
git clone https://github.com/yourusername/brandle-agency.git
cd brandle-agency
```

**Option B: Download ZIP**
1. Click "Code" → "Download ZIP" on GitHub
2. Extract the ZIP file
3. Open terminal in extracted folder

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- `express` - Web framework
- `ejs` - Template engine
- `nodemon` - Development auto-reload

**Expected output:**
```
added 50 packages in 8s
```

### Step 3: Create Environment File

Copy `.env.example` to `.env`:

```bash
# On Mac/Linux
cp .env.example .env

# On Windows
copy .env.example .env
```

Edit `.env` and update values:

```env
PORT=3000
NODE_ENV=development
COMPANY_NAME=BRANDLE
COMPANY_EMAIL=your-email@example.com
```

### Step 4: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
🚀 BRANDLE Server running on http://localhost:3000
```

### Step 5: Open in Browser

Visit: `http://localhost:3000`

You should see the homepage with animations!

## 🧪 Testing

### Test Endpoints

Open new terminal and test API endpoints:

```bash
# Get all services
curl http://localhost:3000/api/services

# Get all stats
curl http://localhost:3000/api/stats

# Get all creators
curl http://localhost:3000/api/creators
```

### Test Pages

Visit these URLs:
- Homepage: `http://localhost:3000/`
- Services: `http://localhost:3000/services`
- Contact: `http://localhost:3000/contact`

## 📦 Project Scripts

Available npm commands:

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start

# Install dependencies
npm install

# Update dependencies
npm update
```

## 🎨 Customization

### Change Colors

Edit `public/css/style.css`:

Find and replace:
- `#FFC700` → Your primary color
- `#FFD700` → Your secondary color
- `#000` → Your background color

### Add New Service

Edit `server.js`:

```javascript
app.get('/api/services', (req, res) => {
  const services = [
    // ... existing services
    {
      id: 7,
      title: 'New Service',
      icon: 'icon-name',
      image: 'image-url',
      color: '#FFC700'
    }
  ];
  res.json(services);
});
```

### Update Content

Edit files in `views/` folder to change text:
- `index.ejs` - Homepage
- `contact.ejs` - Contact page
- `services.ejs` - Services page

## 🐛 Troubleshooting

### Problem: "Port 3000 already in use"

**Solution:**

```bash
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000

# Kill process and restart
# Or use different port:
PORT=5000 npm start
```

### Problem: "Module not found"

**Solution:**

```bash
# Remove node_modules
rm -rf node_modules

# Reinstall
npm install
```

### Problem: "Cannot find command npm"

**Solution:**

1. Ensure Node.js is installed
2. Restart terminal
3. Check Node version: `node --version`

### Problem: "Files not updating in browser"

**Solution:**

1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Restart dev server

## 📱 Testing on Mobile

### Test Locally

1. Find your computer's IP:
   ```bash
   # Mac/Linux
   ipconfig getifaddr en0
   
   # Windows
   ipconfig
   ```

2. On mobile, visit: `http://YOUR_IP:3000`

### Test with ngrok

```bash
# Install ngrok (one-time)
npm install -g ngrok

# Start ngrok tunnel
ngrok http 3000

# Share the generated URL with others
```

## 🚀 Deployment

### Deploy to Vercel (Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow prompts and your app is live!

### Deploy to Heroku

```bash
# Install Heroku CLI
# Then login
heroku login

# Create app
heroku create your-app-name

# Deploy
git push heroku main
```

### Deploy to DigitalOcean

1. Create Ubuntu droplet
2. SSH into server
3. Install Node.js:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
4. Clone repository
5. `npm install`
6. Use PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js
   pm2 save
   pm2 startup
   ```

### Deploy to AWS (EC2)

1. Launch EC2 instance (Ubuntu)
2. Configure security groups
3. SSH into instance
4. Install Node.js
5. Clone repo
6. `npm install`
7. Use PM2 and nginx for reverse proxy

## 📚 Learning Resources

### Express.js
- [Official Guide](https://expressjs.com/)
- [Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

### EJS Templating
- [EJS Documentation](https://ejs.co/)
- [EJS Examples](https://github.com/tj/ejs/wiki/What-is-the-difference-between-ejs-and-erb?)

### CSS Animations
- [MDN Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Tricks Guide](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)

### Canvas API
- [Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Canvas Examples](https://www.html5canvastutorials.com/)

## 🔐 Security

### Do's
- ✅ Use `.env` for secrets
- ✅ Keep `.env` in `.gitignore`
- ✅ Update dependencies regularly: `npm update`
- ✅ Use HTTPS in production
- ✅ Validate user input

### Don'ts
- ❌ Don't commit `.env` file
- ❌ Don't put passwords in code
- ❌ Don't expose API keys
- ❌ Don't use old dependencies

## 📈 Performance Tips

1. **Compress images** - Use Unsplash (already done)
2. **Minify CSS/JS** - Use build tools in production
3. **Enable caching** - Set cache headers
4. **Lazy load images** - Use `loading="lazy"`
5. **Use CDN** - For static assets

## ✨ Next Steps

After setup:

1. **Customize colors** - Update CSS
2. **Add your content** - Edit views
3. **Add more services** - Update API
4. **Deploy online** - Use Vercel
5. **Custom domain** - Point DNS to your host

## 📞 Getting Help

- **Issues**: Create GitHub issue
- **Questions**: Check documentation
- **Forum**: Stack Overflow tag `express.js`
- **Community**: Node.js Discord

## 🎉 You're All Set!

Your BRANDLE website is now ready to run and deploy. Start developing! 🚀

---

**Last Updated**: 2024
**Version**: 1.0.0
**License**: MIT
