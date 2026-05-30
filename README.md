# BRANDLE - AI Creator Management Agency

Complete, production-ready Node.js + Express website with stunning animations and dynamic content loading.

## 🎨 Features

- ✨ **Dynamic Content API** - Services, Stats, and Creators loaded via Express API
- 🎭 **Canvas Animations** - Interactive particle system in hero section
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🌓 **Dark Yellow & Black Theme** - Modern, premium design
- ⚡ **Fast & Optimized** - Minimal text, maximum visual impact
- 🔄 **Easy to Customize** - Well-organized, documented code
- 🚀 **Production Ready** - Deploy to Vercel, Heroku, or any Node.js server

## 📸 Design Inspiration

- Minimal text, heavy visuals (like uPOD, Stripe, Apple)
- Smooth scroll animations
- Interactive hero section with canvas particles
- Dynamic content loading

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Templating**: EJS
- **Styling**: CSS Grid, Flexbox, Animations
- **Animations**: CSS Keyframes, Canvas API, Intersection Observer

## 📦 Project Structure

```
brandle-agency/
├── server.js                    # Express server & API routes
├── package.json                 # Dependencies
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── README.md                    # This file
├── LICENSE                      # MIT License
├── public/
│   ├── css/
│   │   ├── style.css           # Main styles
│   │   └── animations.css      # Animation keyframes
│   ├── js/
│   │   ├── app.js              # Main app logic
│   │   └── canvas-animation.js # Hero canvas particles
│   └── images/                 # Favicon, logos (optional)
└── views/
    ├── index.ejs               # Homepage
    ├── contact.ejs             # Contact page
    ├── services.ejs            # Services page
    ├── about.ejs              # About page
    └── 404.ejs                # 404 page
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/brandle-agency.git
cd brandle-agency
```

2. **Install dependencies**
```bash
npm install
```

3. **Create .env file**
```bash
cp .env.example .env
```

4. **Start the server**

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

5. **Open in browser**
```
http://localhost:3000
```

## 📡 API Endpoints

### Get All Services
```
GET /api/services
```
Returns array of services with titles, images, colors

### Get All Statistics
```
GET /api/stats
```
Returns array of key metrics and statistics

### Get All Creator Stories
```
GET /api/creators
```
Returns array of success stories with avatars and quotes

## 🎨 Customization

### Change Color Scheme

Edit `public/css/style.css` and replace:
- `#FFC700` - Primary Yellow
- `#FFD700` - Secondary Yellow
- `#000` - Black Background

With your brand colors.

### Add More Services

Edit `server.js` `/api/services` endpoint:

```javascript
{
  id: 7,
  title: 'Your New Service',
  icon: 'icon-name',
  image: 'https://images.unsplash.com/...',
  color: '#FFC700'
}
```

### Customize Content

Edit files in `views/` folder to modify:
- Headlines and descriptions
- Navigation links
- CTA button text
- Footer content

### Add More Pages

1. Create new file: `views/yourpage.ejs`
2. Add route in `server.js`:
```javascript
app.get('/yourpage', (req, res) => {
  res.render('yourpage');
});
```
3. Add link to navigation

## 🌐 Environment Variables

Create `.env` file:

```env
# Server
PORT=3000
NODE_ENV=development

# Add your own variables here
COMPANY_EMAIL=contact@brandle.com
COMPANY_PHONE=+1234567890
```

## 📦 Dependencies

### Production
- **express** (^4.18.2) - Web framework
- **ejs** (^3.1.10) - Template engine

### Development
- **nodemon** (^3.0.1) - Auto-reload on file changes

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Follow the prompts - it's that easy!

### Deploy to Heroku

1. Create Heroku account and install CLI
2. Create app: `heroku create your-app-name`
3. Deploy: `git push heroku main`

### Deploy to DigitalOcean

1. Create a droplet with Node.js
2. Clone repository
3. `npm install`
4. Use PM2: `npm install -g pm2` & `pm2 start server.js`

### Deploy to AWS

1. Launch EC2 instance (Ubuntu)
2. Install Node.js
3. Clone and `npm install`
4. Use PM2 for process management
5. Set up nginx as reverse proxy

## 📝 File Guide

### server.js
- Express app configuration
- API route handlers
- Dynamic endpoint responses
- Error handling

### public/css/style.css
- All component styles
- Responsive grid layouts
- Hover effects
- Color scheme

### public/css/animations.css
- Keyframe animations
- Animation utilities
- Staggered delays
- Transform effects

### public/js/app.js
- API data fetching
- DOM manipulation
- Event listeners
- Intersection Observer

### public/js/canvas-animation.js
- Canvas setup
- Particle system
- Animation loop
- Connection drawing

### views/index.ejs
- Homepage template
- Hero section
- Services grid
- Statistics section
- Testimonials

## 🎯 Performance Optimization

- Images from Unsplash (optimized)
- CSS animations use GPU acceleration
- Canvas uses requestAnimationFrame
- Lazy loading ready for images
- Minimal JavaScript (Vanilla JS, no jQuery)

## ♿ Accessibility

- Semantic HTML
- ARIA labels ready
- Color contrast compliant
- Keyboard navigation support

## 🔒 Security

- No hardcoded secrets
- Environment variables for config
- XSS protection ready
- CSRF token ready (for forms)

## 🧪 Testing

To test locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Test API endpoints
curl http://localhost:3000/api/services
curl http://localhost:3000/api/stats
curl http://localhost:3000/api/creators
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Issues & Support

- Found a bug? Open an issue!
- Have a question? Check discussions
- Want to contribute? Submit a PR!

## 👨‍💻 Author

**BRANDLE Team**
- Website: [brandle.agency](https://brandle.agency)
- Email: contact@brandle.com

## 🙏 Acknowledgments

- Unsplash for free images
- Font Awesome for icons (optional)
- Express.js community
- JavaScript community

## 📈 Roadmap

- [ ] Admin dashboard
- [ ] Creator authentication
- [ ] Payment integration
- [ ] Email notifications
- [ ] Blog section
- [ ] Analytics dashboard
- [ ] Mobile app
- [ ] Multi-language support

---

**Built with ❤️ using Node.js, Express, and Modern Web Technologies**

Last Updated: 2024
