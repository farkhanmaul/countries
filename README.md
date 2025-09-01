# 🌍 Country Explorer

> **Interactive World Countries Database with Educational Geography Quiz**

A comprehensive, modern web application built with **Astro**, **TypeScript**, and **Tailwind CSS** that allows users to explore detailed information about 250+ countries worldwide and test their geography knowledge through interactive quizzes.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://your-deployed-url.com)
[![GitHub Stars](https://img.shields.io/github/stars/farkhanmaul/countries?style=for-the-badge)](https://github.com/farkhanmaul/countries)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## ✨ Features

### 🏠 **Country Explorer**
- **🔍 Advanced Search**: Multi-type search by country name, capital, currency, language, or demonym
- **🌏 Regional Filtering**: Filter countries by continent/region
- **📊 Smart Sorting**: Sort by name, population, or area with ascending/descending options  
- **🖼️ Rich Information**: Detailed country cards with flags, population, capitals, currencies, and languages
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🌙 Dark Mode**: Complete theme switching with system preference detection

### 🎮 **Interactive Geography Quiz**
- **🏳️ Flag Quiz**: Identify countries by their flags
- **🏛️ Capital Quiz**: Match capitals to their countries
- **🎯 10-Question Format**: Perfect length for quick learning sessions
- **📊 Achievement System**: Earn badges based on performance (A+, A, B+, B, C+, C)
- **🎉 Celebrations**: Confetti animations for high scores (80%+ and 90%+)
- **💡 Smart Feedback**: Detailed explanations for correct and incorrect answers
- **▶️ User-Friendly Flow**: Clear next button with progress indication

### 🛠️ **Technical Excellence**
- **⚡ Real-time Search**: Instant results as you type
- **🔄 Fallback System**: Reliable data loading with backup strategies
- **🎨 Professional UI**: Lucide icons and consistent design system
- **🔒 Type Safety**: Full TypeScript implementation
- **📈 SEO Optimized**: Meta tags, structured data, and search engine friendly

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/farkhanmaul/countries.git
cd countries

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see the application running!

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── CountryCard.astro    # Individual country display card
│   ├── CountryGrid.astro    # Grid layout for countries
│   ├── CountryModal.astro   # Detailed country information modal
│   ├── Navbar.astro         # Navigation with theme toggle & quiz access
│   ├── RegionFilter.astro   # Region/continent filtering dropdown
│   ├── SearchBar.astro      # Multi-type search with live suggestions
│   └── SortingControls.astro # Sort by name/population/area controls
├── layouts/
│   └── Layout.astro         # Base HTML layout with SEO optimization
├── pages/
│   └── index.astro          # Main application page with quiz integration
├── types/
│   └── country.ts           # TypeScript interfaces for country data
├── utils/
│   ├── api.ts              # REST Countries API integration functions
│   ├── fallback-data.ts    # Offline fallback country data
│   └── theme.ts            # Dark/light mode theme utilities
public/
├── favicon.svg             # Professional gradient globe favicon
├── robots.txt             # Search engine crawling instructions
└── sitemap.xml            # SEO sitemap for better indexing
```

## 🌐 API Integration

### REST Countries API v3.1
This project integrates with the **free, open-source REST Countries API** that provides comprehensive country data without requiring API keys or registration.

#### **Implemented Endpoints:**
- `GET /v3.1/all` - Fetch all countries
- `GET /v3.1/name/{name}` - Search by country name
- `GET /v3.1/region/{region}` - Filter by region
- `GET /v3.1/capital/{capital}` - Search by capital city
- `GET /v3.1/currency/{currency}` - Search by currency
- `GET /v3.1/lang/{language}` - Search by language
- `GET /v3.1/demonym/{demonym}` - Search by demonym (nationality)

#### **Available But Not Yet Implemented:**
- Alpha-2/Alpha-3 country code search
- Timezone-based filtering
- Calling code search
- Sub-region filtering
- Advanced field filtering
- Translation support

#### **Why No API Key Required?**
- **Open Source**: Mozilla Public License 2.0
- **Community Driven**: Maintained by contributors worldwide
- **Cost Effective**: Hosted on Cloudflare Workers infrastructure
- **Public Data**: Based on publicly available country information

## 🎨 Design System

### **Color Palette**
```scss
// Primary Colors (Slate)
primary-50:  #f8fafc    primary-500: #64748b    primary-900: #0f172a
primary-100: #f1f5f9    primary-600: #475569    
primary-200: #e2e8f0    primary-700: #334155
primary-300: #cbd5e1    primary-800: #1e293b

// Accent Colors (Purple/Magenta)
accent-400:  #c084fc    accent-600: #c026d3
accent-500:  #d946ef    accent-700: #a21caf
```

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Optimized for all screen sizes

### **Icons**
- **Library**: [Lucide Icons](https://lucide.dev/)
- **Style**: Consistent line-based professional icons
- **Usage**: 400+ icons covering all UI needs

## 🧩 Architecture & Code Quality

### **Design Patterns**
- **Component-Based**: Modular Astro components for reusability
- **Event-Driven**: Custom events for component communication
- **Single Responsibility**: Each component has one clear purpose
- **Separation of Concerns**: Clear boundaries between UI, logic, and data

### **TypeScript Implementation**
```typescript
// Type-safe country data structures
interface Country {
  name: CountryName;
  capital?: string[];
  region: string;
  population: number;
  area?: number;
  flags: CountryFlags;
  currencies?: Record<string, Currency>;
  languages?: Record<string, string>;
}

// Quiz system with generic types
interface QuizState<T> {
  currentQuestion: number;
  score: number;
  questions: T[];
  type: 'flags' | 'capitals';
}
```

### **Performance Optimizations**
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Efficient flag image loading
- **Caching**: Strategic API response caching
- **Debouncing**: Optimized search input handling
- **Minimal Bundle**: Tree-shaken dependencies

## 🎯 Quiz System Deep Dive

### **Game Mechanics**
1. **Question Generation**: Random selection from 50 most data-complete countries
2. **Answer Options**: 1 correct + 3 random incorrect options, shuffled
3. **Feedback System**: Immediate visual feedback with educational explanations
4. **Progress Tracking**: Real-time score and question counter
5. **Achievement Badges**: Performance-based grading system

### **Scoring & Achievements**
| Grade | Score Range | Badge Color | Features |
|-------|-------------|-------------|----------|
| A+ | 90-100% | 🏆 Gold | Confetti animation |
| A  | 80-89%  | 💜 Purple | Confetti animation |
| B+ | 70-79%  | 💚 Green | Achievement badge |
| B  | 60-69%  | 💙 Blue | Achievement badge |
| C+ | 50-59%  | 💜 Indigo | Achievement badge |
| C  | 0-49%   | 💪 Gray | Encouragement |

### **User Experience Features**
- **No Layout Shifts**: Fixed-height feedback containers
- **Clear Navigation**: Prominent next button with progress indication
- **Educational Value**: Explanatory feedback for learning
- **Mobile Optimized**: Touch-friendly interface

## 🔧 Development

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### **Code Quality Tools**
- **TypeScript**: Strict type checking
- **ESLint**: Code linting and best practices
- **Prettier**: Code formatting
- **Astro Check**: Astro-specific validation

## 📊 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 80+     | ✅ Fully Supported |
| Firefox | 75+     | ✅ Fully Supported |
| Safari  | 13+     | ✅ Fully Supported |
| Edge    | 80+     | ✅ Fully Supported |
| Mobile  | iOS 13+ / Android 8+ | ✅ Optimized |

## 🛡️ Security & Privacy

- **No Data Collection**: Zero user tracking or analytics
- **No API Keys**: Public API usage without authentication
- **HTTPS Only**: Secure connections enforced
- **CSP Headers**: Content Security Policy implementation
- **No External Scripts**: Minimal third-party dependencies

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgments

- **[REST Countries](https://restcountries.com/)** - For providing free, comprehensive country data
- **[Lucide Icons](https://lucide.dev/)** - For beautiful, consistent iconography
- **[Tailwind CSS](https://tailwindcss.com/)** - For rapid, utility-first styling
- **[Astro](https://astro.build/)** - For the powerful, modern web framework
- **Open Source Community** - For continuous inspiration and contributions

---

<div align="center">

**Made with ❤️ and ☕ by the Country Explorer Team**

[![GitHub](https://img.shields.io/badge/GitHub-farkhanmaul-black?style=flat&logo=github)](https://github.com/farkhanmaul)

</div>

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
