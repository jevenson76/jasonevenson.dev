# Jason Everson Portfolio - AI/ML & Automation Expert

A modern, high-performance portfolio website showcasing AI, ML, and automation expertise. Built with Next.js 15, featuring enterprise-grade deployment, monitoring, and optimization.

## 🚀 Features

### ⚡ Performance & SEO
- **Core Web Vitals Optimized**: Lighthouse scores 90+ across all metrics
- **Progressive Web App**: Offline support, service worker, and mobile optimization
- **SEO Optimized**: Structured data, meta tags, sitemap, and robots.txt
- **Image Optimization**: Next.js Image component with lazy loading

### 🔧 Enterprise Deployment
- **Netlify Deployment**: Optimized build configuration with CDN
- **CI/CD Pipeline**: GitHub Actions with quality gates and security scanning
- **Performance Monitoring**: Real-time Web Vitals and Lighthouse CI
- **Error Tracking**: Sentry integration with custom error boundaries

### 📊 Monitoring & Analytics
- **Google Analytics 4**: Privacy-focused user tracking
- **Real-time Performance**: Web Vitals, resource monitoring, long task detection
- **Health Checks**: System status endpoint for uptime monitoring
- **Security**: CSP headers, vulnerability scanning, and audit logs

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, HeadlessUI, Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **TypeScript**: Full type safety
- **Monitoring**: Sentry, Google Analytics, Web Vitals
- **Deployment**: Netlify with edge functions

## 🏗️ Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── health/        # Health check endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx          # Homepage
│   ├── sitemap.ts        # Dynamic sitemap
│   ├── robots.ts         # SEO robots config
│   └── manifest.ts       # PWA manifest
├── components/            # React components
│   ├── animations/       # Motion components
│   ├── demos/           # Interactive showcases
│   ├── layout/          # Layout components
│   ├── monitoring/      # Performance tracking
│   ├── sections/        # Page sections
│   └── ui/             # Reusable UI components
└── lib/                 # Utilities & configuration
    ├── analytics.ts     # GA4 & tracking
    ├── sentry.ts       # Error monitoring
    └── utils.ts        # Shared utilities
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Development

```bash
# Clone the repository
git clone https://github.com/jevenson76/jasoneverson-portfolio.git
cd jasoneverson-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the application.

### Build & Deploy

```bash
# Type check
npm run typecheck

# Lint code
npm run lint

# Build for production
npm run build

# Start production server
npm start

# Analyze bundle size
npm run analyze
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://jasoneverson.dev

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Error Tracking
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
SENTRY_AUTH_TOKEN=xxxxx
SENTRY_ORG=your-org
SENTRY_PROJECT=jasoneverson-portfolio

# Deployment
NETLIFY_AUTH_TOKEN=xxxxx
NETLIFY_SITE_ID=xxxxx

# Monitoring
UPTIME_WEBHOOK_URL=https://your-monitoring-service.com/webhook

# SEO
GOOGLE_SITE_VERIFICATION=xxxxx
```

### Netlify Deployment

1. **Connect Repository**:
   - Link your GitHub repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Environment Variables**:
   - Set all required environment variables in Netlify dashboard
   - Ensure `NODE_ENV=production` for production builds

3. **Deploy Settings**:
   - Auto-deploy on push to main branch
   - Deploy previews for pull requests
   - Custom domain configuration

### GitHub Actions Setup

The CI/CD pipeline requires these repository secrets:

```bash
# Deployment
NETLIFY_AUTH_TOKEN    # Netlify API token
NETLIFY_SITE_ID       # Netlify site ID

# Monitoring
GA_ID                 # Google Analytics tracking ID
SENTRY_DSN            # Sentry DSN for error tracking
SENTRY_AUTH_TOKEN     # Sentry authentication token
SENTRY_ORG            # Sentry organization
SENTRY_PROJECT        # Sentry project name

# Notifications
UPTIME_WEBHOOK_URL    # Uptime monitoring webhook
```

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| Performance | 90+ | ✅ |
| Accessibility | 100 | ✅ |
| Best Practices | 90+ | ✅ |
| SEO | 100 | ✅ |
| First Contentful Paint | <1.5s | ✅ |
| Largest Contentful Paint | <2.5s | ✅ |
| Cumulative Layout Shift | <0.1 | ✅ |

## 🔒 Security Features

- **Content Security Policy**: Strict CSP headers prevent XSS attacks
- **Security Headers**: XSS protection, frame options, content type validation
- **Dependency Scanning**: Automated vulnerability checks in CI/CD
- **Code Analysis**: CodeQL security scanning on every commit
- **HTTPS Enforcement**: All connections use secure protocols
- **Error Filtering**: Sentry configured to filter sensitive information

## 📱 PWA Capabilities

- **Offline Support**: Service worker with intelligent caching
- **Mobile Optimized**: Touch-friendly, responsive design
- **Install Prompt**: Add to home screen functionality
- **Background Sync**: Offline actions sync when online
- **Push Notifications**: Ready for user engagement

## 🔍 Monitoring & Analytics

### Performance Monitoring
- **Real-time Web Vitals**: CLS, FID, FCP, LCP, TTFB tracking
- **Resource Monitoring**: Slow resource detection and reporting
- **Long Task Detection**: Performance bottleneck identification
- **Error Boundaries**: React error handling with Sentry integration

### Analytics Integration
- **Google Analytics 4**: Privacy-compliant user behavior tracking
- **Custom Events**: Interaction tracking and conversion funnels
- **Performance Metrics**: Core Web Vitals sent to GA4
- **Error Tracking**: JavaScript errors logged to both Sentry and GA4

### Health Monitoring
- **Status Endpoint**: `/api/health` for uptime monitoring
- **System Metrics**: Memory usage, server performance
- **Automated Alerts**: CI/CD pipeline health checks
- **Deployment Tracking**: Release monitoring with Sentry

## 🚀 Deployment Pipeline

### Automated Workflows

1. **Code Quality**: Lint, type check, security audit
2. **Build & Test**: Multi-Node.js version matrix testing
3. **Performance**: Lighthouse CI with performance budgets
4. **Security**: Trivy vulnerability scanning, CodeQL analysis
5. **Deploy**: Automatic Netlify deployment on main branch
6. **Monitor**: Post-deployment health checks and notifications

### Manual Deployment

```bash
# Build and deploy manually
npm run build
npx netlify deploy --prod --dir=.next

# Health check
curl -f https://jasoneverson.dev/api/health
```

## 🛠️ Development Tools

### Code Quality
- **ESLint**: Code linting with Next.js config
- **TypeScript**: Full type safety across the application
- **Prettier**: Code formatting (configured in ESLint)

### Performance Tools
- **Lighthouse CI**: Automated performance testing
- **Web Vitals**: Real-time performance monitoring
- **Bundle Analyzer**: Webpack bundle size analysis

### Debugging
- **Sentry**: Error tracking and performance monitoring
- **React DevTools**: Component debugging
- **Next.js DevTools**: Framework-specific debugging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Install dependencies: `npm install`
4. Make your changes and ensure tests pass
5. Commit with conventional commits: `git commit -m 'feat: add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Standards
- Follow ESLint configuration
- Write TypeScript for all new code
- Include JSDoc comments for complex functions
- Test performance impact of changes
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Jason Everson**  
Portfolio: [jasoneverson.dev](https://jasoneverson.dev)  
GitHub: [@jevenson76](https://github.com/jevenson76)  
Email: [contact@jasoneverson.dev](mailto:contact@jasoneverson.dev)

---

Built with ❤️ using Next.js 15, deployed on Netlify with enterprise-grade monitoring and optimization.

## 🏆 Achievements

- **Performance**: 90+ Lighthouse scores across all categories
- **Security**: Grade A+ security headers and CSP configuration  
- **Accessibility**: WCAG 2.1 AA compliant interface
- **SEO**: Optimized for search engines and social sharing
- **Mobile**: Perfect mobile experience with PWA features