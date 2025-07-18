# SvelteKit Image Optimization Showcase

A comprehensive demonstration of modern image optimization techniques using SvelteKit's recommended best practices. This project showcases four different approaches to image optimization, each with their specific benefits and use cases.

## 🚀 Features

- **@sveltejs/enhanced-img**: SvelteKit's official image optimization solution
- **Vite-imagetools**: Build-time optimization with Sharp and responsive picture elements
- **CDN-based optimization**: Dynamic optimization using Cloudinary and Imgix
- **Svelte-Image**: Advanced lazy loading with blur-up placeholders
- **Performance comparison**: Side-by-side demonstration of Core Web Vitals impact
- **Responsive design**: Mobile-first approach with proper breakpoints
- **Modern formats**: AVIF, WebP, and JPG fallbacks

## 🛠️ Tech Stack

- **Framework**: SvelteKit 2.x
- **Styling**: Tailwind CSS
- **Image Processing**: Sharp, Vite-imagetools
- **Build Tool**: Vite
- **Language**: TypeScript
- **Deployment**: Static site generation

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/dharmveer97/svelte-image-speed-test.git
cd ashima-static-site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Sample Images

Create the following directory structure and add your sample images:

```
static/
└── images/
    ├── first.jpg
    ├── two.jpg
    ├── three.jpg
    ├── four.jpg
    └── five.jpg
```

**Image Requirements:**

- Format: JPG, PNG, or WebP
- Recommended size: 1200x800px or larger
- File size: Under 2MB each for optimal performance

### 4. Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── lib/
│   │   └── components/
│   │       └── Gallery.svelte      # Main showcase component
│   ├── routes/
│   │   └── +page.svelte           # Home page
│   └── app.html                   # HTML template
├── static/
│   └── images/                    # Static image assets
├── package.json
├── vite.config.ts                 # Vite configuration
├── svelte.config.js              # SvelteKit configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── postcss.config.js             # PostCSS configuration
```

## 🖼️ Image Optimization Methods

### 1. @sveltejs/enhanced-img (Recommended)

**Best for**: Most static images in SvelteKit projects

**Features**:

- Automatic AVIF/WebP/JPG format selection
- Responsive image generation with srcset
- Built-in lazy loading and priority hints
- Automatic width/height to prevent layout shift

**Installation**:

```bash
npm install @sveltejs/enhanced-img
```

### 2. Vite-imagetools

**Best for**: Fine control over optimization parameters

**Features**:

- Build-time optimization with Sharp
- Manual control over responsive breakpoints
- Multiple format generation (AVIF, WebP, JPG)
- Cached optimization results

**Already included** in this project's dependencies.

### 3. CDN-based Optimization

**Best for**: User-generated content and dynamic transformations

**Features**:

- On-the-fly image transformations
- Global CDN distribution
- Smart cropping and effects
- Automatic format and quality optimization

**Providers demonstrated**:

- Cloudinary
- Imgix

### 4. Svelte-Image

**Best for**: Blur-up placeholders and smooth loading transitions

**Features**:

- Blur-up placeholder effect
- Intersection Observer lazy loading
- Smooth loading transitions
- Responsive image sizing

## ⚡ Performance Optimization

### Core Web Vitals Impact

- **LCP (Largest Contentful Paint)**: Use `fetchpriority="high"` for hero images
- **CLS (Cumulative Layout Shift)**: Always include width/height attributes
- **FID (First Input Delay)**: Lazy load below-the-fold images
- **INP (Interaction to Next Paint)**: Optimize image loading with proper sizes

### Best Practices Implemented

✅ **Format Optimization**

- AVIF for modern browsers
- WebP for broad support
- JPG/PNG fallbacks
- Automatic format selection

✅ **Responsive Design**

- Multiple image sizes
- Proper sizes attributes
- Viewport-based loading
- HiDPI/Retina support

✅ **Performance**

- Lazy loading implementation
- Priority hints for critical images
- Layout shift prevention
- CDN distribution ready

## 🔧 Configuration

### Vite Configuration

The project uses Vite with imagetools plugin:

```typescript
// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), imagetools()],
});
```

### SvelteKit Configuration

Static site generation is configured in `svelte.config.js`:

```javascript
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
  },
};
```

## 🎨 Customization

### Adding New Images

1. Add your images to `static/images/`
2. Update the import statements in `Gallery.svelte`
3. Add corresponding entries to the image arrays

### Modifying Optimization Parameters

For Vite-imagetools, modify the query parameters:

```typescript
// Example: Different sizes and formats
import myImg from '/images/photo.jpg?w=300;600;900&format=webp;avif;jpg&as=picture';
```

### Styling Changes

The project uses Tailwind CSS. Modify classes in `Gallery.svelte` or extend the Tailwind configuration in `tailwind.config.js`.

## 📊 Performance Testing

### Lighthouse Audit

Run Lighthouse audits to measure performance:

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit on local build
npm run build
npm run preview
lighthouse http://localhost:4173 --output html --output-path ./lighthouse-report.html
```

### WebPageTest

Use [WebPageTest](https://www.webpagetest.org/) for detailed performance analysis of your deployed site.

## 🚀 Deployment

### Static Site Deployment

This project is configured for static site generation. Deploy to:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions
- **Cloudflare Pages**: Connect your repository

### Environment Variables

For CDN integrations, you may need:

```bash
# .env.local
CLOUDINARY_CLOUD_NAME=your_cloud_name
IMGIX_DOMAIN=your_domain.imgix.net
```

## 🐛 Troubleshooting

### Common Issues

**Module not found errors**:

```bash
npm install
```

**Images not loading**:

- Check that images exist in `static/images/`
- Verify file names match import statements
- Ensure proper file permissions

**Build failures**:

- Check Node.js version (18+ required)
- Clear `.svelte-kit` directory: `rm -rf .svelte-kit`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**TypeScript errors**:

- Ensure all dependencies are installed
- Check import paths are correct
- Verify image files exist

## 📚 Learning Resources

- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Vite-imagetools Documentation](https://github.com/JonasKruckenberg/imagetools)
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Core Web Vitals](https://web.dev/vitals/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- SvelteKit team for the excellent framework
- Sharp team for the powerful image processing library
- Tailwind CSS for the utility-first CSS framework
- The open-source community for the amazing tools and libraries

---

**Happy coding! 🎉**

For questions or support, please open an issue in the GitHub repository.
