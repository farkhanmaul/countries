# 🌍 Country Explorer

**A modern, fast, and beautiful web application for exploring countries around the world.**

Discover detailed information about 195+ countries including population, geography, culture, languages, currencies, and much more. Built with Astro for optimal performance and user experience.

![Country Explorer Preview](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=Country+Explorer)

## ✨ Features

### 🔍 **Smart Search & Filtering**
- **Real-time search** by country name or capital
- **Regional filtering** (Africa, Americas, Asia, Europe, Oceania)
- **Advanced sorting** by name, population, or area
- **Intelligent suggestions** as you type

### 🎨 **Beautiful Design**
- **Modern, minimalist UI** inspired by Apple/Uniqlo aesthetics
- **Dark mode support** with automatic system preference detection
- **Fully responsive** design for desktop and mobile
- **Smooth animations** and transitions
- **Grid and list view** options

### 📊 **Rich Country Information**
- **Basic info**: Flag, name, capital, population, region
- **Detailed data**: Languages, currencies, timezones, calling codes
- **Geographic info**: Area, borders, subregion, coordinates
- **Cultural info**: Demonyms, UN membership, independence status

### ⚡ **Performance Optimized**
- **Server-side rendering** with Astro for fast initial loads
- **Progressive enhancement** with client-side interactivity
- **Optimized images** with lazy loading
- **Minimal JavaScript** for excellent performance
- **SEO friendly** with proper meta tags

### 💾 **Additional Features**
- **Favorites system** with localStorage persistence
- **Interactive modal** with detailed country information
- **External maps integration** (Google Maps)
- **Keyboard navigation** support
- **Accessibility** compliant (WCAG 2.1)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/farkhanmaul/countries.git
   cd countries
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:4321
   ```

## 📁 Project Structure

```text
/
├── public/                 # Static assets
│   ├── favicon.svg        # Site favicon
│   └── og-image.png       # Social media preview
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.astro          # Navigation with dark mode toggle
│   │   ├── SearchBar.astro       # Smart search with suggestions
│   │   ├── RegionFilter.astro    # Regional filtering dropdown
│   │   ├── SortingControls.astro # Sorting and view options
│   │   ├── CountryCard.astro     # Individual country card
│   │   ├── CountryGrid.astro     # Grid layout container
│   │   └── CountryModal.astro    # Detailed country popup
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro          # Main layout with SEO
│   ├── pages/             # Routes (file-based routing)
│   │   └── index.astro           # Homepage
│   ├── types/             # TypeScript definitions
│   │   └── country.ts            # Country and filter types
│   └── utils/             # Utility functions
│       ├── api.ts                # REST Countries API client
│       ├── theme.ts              # Dark mode utilities
│       └── favorites.ts          # Favorites management
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml               # Automated deployment
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
└── package.json
```

## 🧞 Available Commands

All commands are run from the root of the project:

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deploying       |
| `npm run astro`   | Run Astro CLI commands                        |

## 🌐 API Integration

This project uses the **REST Countries API** (v3.1) to fetch country data:

- **Base URL**: `https://restcountries.com/v3.1/`
- **No authentication required**
- **Rate limiting**: Reasonable use policy
- **Data freshness**: Updated regularly

### Supported Endpoints
- `GET /all` - Fetch all countries
- `GET /name/{name}` - Search by country name
- `GET /alpha/{code}` - Get country by code
- `GET /region/{region}` - Filter by region

## 🎨 Design System

### Color Palette
- **Primary**: Blue shades (`#0ea5e9`, `#0284c7`)
- **Neutral**: Gray scale for text and backgrounds
- **Semantic**: Green (success), Red (error), Yellow (warning)

### Typography
- **Font Family**: Inter (clean, modern, readable)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive sizes**: Fluid typography scales

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Consistent padding, hover states
- **Forms**: Clean inputs with focus indicators
- **Animations**: Smooth, purposeful transitions

## 🔧 Configuration

### Environment Variables
No environment variables required - the app uses public APIs only.

### Customization
- **Colors**: Edit `tailwind.config.mjs`
- **Fonts**: Modify font imports in `Layout.astro`
- **API endpoints**: Update `src/utils/api.ts`
- **Deployment**: Configure `astro.config.mjs`

## 📱 Browser Support

- **Modern browsers**: Chrome 90+, Firefox 90+, Safari 14+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Fetch API, LocalStorage
- **Progressive enhancement**: Works without JavaScript

## 🚀 Deployment

### GitHub Pages (Recommended)
This project is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - deployment starts automatically
2. **GitHub Actions** builds and deploys the site
3. **Live at**: `https://farkhanmaul.github.io/countries`

### Manual Deployment
```bash
npm run build
# Upload ./dist/ folder to your hosting provider
```

### Other Platforms
- **Vercel**: Connect GitHub repo for automatic deploys
- **Netlify**: Drag and drop `dist` folder or connect repo
- **Static hosting**: Upload `dist` folder contents

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Guidelines
- **Code style**: Prettier + ESLint configuration
- **Naming**: Use descriptive, consistent names
- **Comments**: Document complex logic
- **Testing**: Test across different browsers and devices

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[REST Countries](https://restcountries.com/)** - Comprehensive country data API
- **[Astro](https://astro.build/)** - Amazing web framework for performance
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Country flag images** - Provided by REST Countries API

## 💡 FAQ

### **Q: Is this free to use?**
A: Yes! Both the app and the API are completely free.

### **Q: How often is the data updated?**
A: The REST Countries API is updated regularly by its maintainers.

### **Q: Can I use this commercially?**
A: Yes, under the MIT license terms.

### **Q: Does it work offline?**
A: Basic functionality works offline after first visit, but fresh data requires internet.

---

**Made with ❤️ for learning and exploration**

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen)](https://farkhanmaul.github.io/countries)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01)](https://astro.build)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind-38b2ac)](https://tailwindcss.com)
