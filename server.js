const express = require('express');
const path = require('path');
const app = express();

// Trust proxy
app.set('trust proxy', 1);

// Middleware - Static files with proper configuration
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath, {
  etag: false,
  lastModified: true,
  setHeaders: (res, path, stat) => {
    res.set('Cache-Control', 'public, max-age=3600');
    
    // Set proper MIME types
    if (path.endsWith('.css')) {
      res.set('Content-Type', 'text/css; charset=utf-8');
    } else if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript; charset=utf-8');
    }
  }
}));

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// API Routes - Dynamic Data
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      title: 'Brand Strategy',
      icon: 'target',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      color: '#FFC700'
    },
    {
      id: 2,
      title: 'Growth Hacking',
      icon: 'trending',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565dc18?w=500&h=500&fit=crop',
      color: '#FFD700'
    },
    {
      id: 3,
      title: 'Community Building',
      icon: 'users',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      color: '#FFC700'
    },
    {
      id: 4,
      title: 'Monetization',
      icon: 'zap',
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=500&fit=crop',
      color: '#FFD700'
    },
    {
      id: 5,
      title: 'Brand Partnerships',
      icon: 'award',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      color: '#FFC700'
    },
    {
      id: 6,
      title: 'Content Excellence',
      icon: 'smartphone',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=500&fit=crop',
      color: '#FFD700'
    }
  ];
  res.json(services);
});

app.get('/api/creators', (req, res) => {
  const creators = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Fashion & Lifestyle',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      quote: 'Brandle took my passion to a 6-figure business in less than a year.',
      revenue: '₹25L+'
    },
    {
      id: 2,
      name: 'Aditya Kumar',
      role: 'Tech & Education',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'Strategic guidance that changed everything for my brand.',
      revenue: '₹18L+'
    },
    {
      id: 3,
      name: 'Ananya Patel',
      role: 'Wellness & Fitness',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      quote: 'The partner every creator needs to scale their business.',
      revenue: '₹32L+'
    }
  ];
  res.json(creators);
});

app.get('/api/stats', (req, res) => {
  const stats = [
    { number: '500+', label: 'Creators Managed', sublabel: 'Across all platforms' },
    { number: '3.5x', label: 'Avg. Growth Rate', sublabel: 'In 6 months' },
    { number: '₹2B+', label: 'Revenue Generated', sublabel: 'For creators' },
    { number: '98%', label: 'Satisfaction Rate', sublabel: 'Highest in industry' }
  ];
  res.json(stats);
});

// Main Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// 404 Handler
app.use((req, res) => {
  res.status(404).render('404');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 BRANDLE Server running on http://localhost:${PORT}`);
});
