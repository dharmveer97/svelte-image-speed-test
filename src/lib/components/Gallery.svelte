<script lang="ts">
  // --- 1. Vite-imagetools imports for responsive picture elements ---
  // @ts-ignore - vite-imagetools query parameters
  import firstImg from '../../../static/images/first.jpg?w=400;800;1200&format=webp;avif;jpg&as=picture';
  // @ts-ignore - vite-imagetools query parameters
  import twoImg from '../../../static/images/two.jpg?w=400;800;1200&format=webp;avif;jpg&as=picture';
  // @ts-ignore - vite-imagetools query parameters
  import threeImg from '../../../static/images/three.jpg?w=400;800;1200&format=webp;avif;jpg&as=picture';
  // @ts-ignore - vite-imagetools query parameters
  import fourImg from '../../../static/images/four.jpg?w=400;800;1200&format=webp;avif;jpg&as=picture';
  // @ts-ignore - vite-imagetools query parameters
  import fiveImg from '../../../static/images/five.jpg?w=400;800;1200&format=webp;avif;jpg&as=picture';

  // --- 2. Vite asset handling imports ---
  import firstStatic from '../../../static/images/first.jpg';
  import twoStatic from '../../../static/images/two.jpg';
  import threeStatic from '../../../static/images/three.jpg';
  import fourStatic from '../../../static/images/four.jpg';
  import fiveStatic from '../../../static/images/five.jpg';

  // --- 3. Import svelte-image for blur-up and lazy loading ---
  import Image from 'svelte-image';

  // --- 4. CDN configurations for different providers ---
  const cdnImages = [
    {
      cloudinary:
        'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_600,q_auto,f_auto/sample.jpg',
      imgix:
        'https://assets.imgix.net/~text?txt64=SW1naXggRGVtbw&w=800&h=600&fit=crop&auto=format,compress',
      alt: 'CDN Optimized - Cloudinary with auto format and quality',
      title: 'Cloudinary Auto-Optimization',
    },
    {
      cloudinary:
        'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_600,q_80,f_webp/woman.jpg',
      imgix:
        'https://assets.imgix.net/unsplash/woman-hat.jpg?w=800&h=600&fit=crop&auto=format,compress&q=80',
      alt: 'CDN Optimized - WebP format with quality control',
      title: 'CDN WebP Optimization',
    },
    {
      cloudinary:
        'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_600,e_blur:300,q_auto/sample.jpg',
      imgix:
        'https://assets.imgix.net/~text?txt64=Qmx1cnJlZCBJbWFnZQ&w=800&h=600&fit=crop&blur=20&auto=format',
      alt: 'CDN Optimized - Blur effect demonstration',
      title: 'CDN with Effects',
    },
    {
      cloudinary:
        'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_600,g_face,q_auto,f_auto/face_top.jpg',
      imgix:
        'https://assets.imgix.net/unsplash/alligator.jpg?w=800&h=600&fit=facearea&auto=format,compress',
      alt: 'CDN Optimized - Smart cropping with face detection',
      title: 'Smart Cropping',
    },
  ];

  // --- 5. Gallery data organization ---
  const viteImages = [firstImg, twoImg, threeImg, fourImg, fiveImg];
  const staticImages = [
    {
      src: firstStatic,
      alt: 'Mountain landscape with dramatic lighting',
      title: 'Landscape Photography',
    },
    {
      src: twoStatic,
      alt: 'Urban architecture with modern design',
      title: 'Architecture',
    },
    {
      src: threeStatic,
      alt: 'Natural wildlife in their habitat',
      title: 'Wildlife Photography',
    },
    {
      src: fourStatic,
      alt: 'Abstract art with vibrant colors',
      title: 'Abstract Art',
    },
    {
      src: fiveStatic,
      alt: 'Portrait photography with natural lighting',
      title: 'Portrait',
    },
  ];

  // Enhanced image configurations (simulated - would need @sveltejs/enhanced-img)
  const enhancedImages = [
    {
      src: '/images/first.jpg',
      alt: 'Enhanced: Mountain landscape with automatic optimization',
      sizes: 'min(800px, 100vw)',
    },
    {
      src: '/images/two.jpg',
      alt: 'Enhanced: Urban architecture with responsive sizing',
      sizes: '(min-width: 768px) 50vw, 100vw',
    },
    {
      src: '/images/three.jpg',
      alt: 'Enhanced: Wildlife with priority loading',
      sizes: 'min(600px, 100vw)',
      fetchpriority: 'high',
    },
    {
      src: '/images/four.jpg',
      alt: 'Enhanced: Abstract art with lazy loading',
      sizes: '(min-width: 1024px) 33vw, 50vw',
    },
    {
      src: '/images/five.jpg',
      alt: 'Enhanced: Portrait with responsive optimization',
      sizes: '(min-width: 1024px) 25vw, 50vw',
    },
  ];
</script>

<section class="py-20 px-4 max-w-7xl mx-auto">
  <h1 class="text-4xl font-bold mb-12 text-center">
    SvelteKit Image Optimization Showcase
  </h1>
  <p class="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
    Comprehensive demonstration of modern image optimization techniques using
    SvelteKit's recommended best practices. Each section showcases different
    optimization methods with their specific benefits and use cases.
  </p>

  <!-- Method 1: Enhanced Images (SvelteKit Recommended) -->
  <div class="mb-20">
    <div class="mb-8">
      <h2 class="text-3xl font-bold mb-4 text-blue-600">
        1. @sveltejs/enhanced-img (Recommended)
      </h2>
      <p class="text-gray-600 mb-4">
        SvelteKit's official image optimization solution with automatic format
        conversion, responsive sizing, and performance optimizations.
        <strong>Note:</strong> This demo simulates enhanced-img behavior - install
        @sveltejs/enhanced-img for full functionality.
      </p>
      <div class="bg-blue-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Features:</h4>
        <ul class="text-sm text-gray-700 list-disc list-inside space-y-1">
          <li>Automatic AVIF/WebP/JPG format selection</li>
          <li>Responsive image generation with srcset</li>
          <li>Built-in lazy loading and priority hints</li>
          <li>Automatic width/height to prevent layout shift</li>
        </ul>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each enhancedImages as img, i}
        <div class="group overflow-hidden rounded-xl shadow-lg bg-white">
          <!-- Simulated enhanced:img behavior -->
          <div class="relative overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              loading={img.fetchpriority === 'high' ? 'eager' : 'lazy'}
              fetchpriority={img.fetchpriority || 'auto'}
              width="800"
              height="600"
              style="background: linear-gradient(45deg, #f0f0f0, #e0e0e0);"
            />
            {#if img.fetchpriority === 'high'}
              <div
                class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                High Priority
              </div>
            {/if}
          </div>
          <div class="p-4">
            <h4 class="font-semibold text-sm mb-1">Enhanced Image {i + 1}</h4>
            <p class="text-xs text-gray-500">Sizes: {img.sizes}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Method 2: Vite-imagetools with Picture Elements -->
  <div class="mb-20">
    <div class="mb-8">
      <h2 class="text-3xl font-bold mb-4 text-green-600">
        2. Vite-imagetools + Picture Elements
      </h2>
      <p class="text-gray-600 mb-4">
        Build-time image optimization using Sharp with manual responsive picture
        elements. Generates multiple formats and sizes for optimal performance
        across devices.
      </p>
      <div class="bg-green-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Features:</h4>
        <ul class="text-sm text-gray-700 list-disc list-inside space-y-1">
          <li>Build-time optimization with Sharp</li>
          <li>Manual control over responsive breakpoints</li>
          <li>Multiple format generation (AVIF, WebP, JPG)</li>
          <li>Cached optimization results</li>
        </ul>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each viteImages as img, i}
        <div class="group overflow-hidden rounded-xl shadow-lg bg-white">
          <picture>
            {#each img.sources as source}
              <source
                srcset={source.srcset}
                type={source.type}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            {/each}
            <img
              src={img.img.src}
              alt={`Vite-optimized image ${i + 1} - Professional photography with responsive sizing`}
              class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width={img.img.width}
              height={img.img.height}
              style="background: linear-gradient(45deg, #e8f5e8, #d4f1d4);"
            />
          </picture>
          <div class="p-4">
            <h4 class="font-semibold text-sm mb-1">Vite-imagetools #{i + 1}</h4>
            <p class="text-xs text-gray-500">
              {img.sources.length} formats • {img.img.width}×{img.img.height}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Method 3: CDN Optimization -->
  <div class="mb-20">
    <div class="mb-8">
      <h2 class="text-3xl font-bold mb-4 text-purple-600">
        3. CDN-Based Optimization
      </h2>
      <p class="text-gray-600 mb-4">
        Dynamic image optimization using CDN services like Cloudinary and Imgix.
        Perfect for user-generated content and images not available at build
        time.
      </p>
      <div class="bg-purple-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Features:</h4>
        <ul class="text-sm text-gray-700 list-disc list-inside space-y-1">
          <li>On-the-fly image transformations</li>
          <li>Global CDN distribution</li>
          <li>Smart cropping and effects</li>
          <li>Automatic format and quality optimization</li>
        </ul>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each cdnImages as img, i}
        <div class="group overflow-hidden rounded-xl shadow-lg bg-white">
          <div class="relative overflow-hidden">
            <img
              src={img.cloudinary}
              alt={img.alt}
              class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width="800"
              height="600"
              style="background: linear-gradient(45deg, #f3e8ff, #e9d5ff);"
            />
            <div
              class="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded"
            >
              CDN
            </div>
          </div>
          <div class="p-4">
            <h4 class="font-semibold text-sm mb-1">{img.title}</h4>
            <p class="text-xs text-gray-500">Cloudinary + Imgix fallback</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Method 4: Svelte-Image with Blur-up -->
  <div class="mb-20">
    <div class="mb-8">
      <h2 class="text-3xl font-bold mb-4 text-orange-600">
        4. Svelte-Image with Blur-up
      </h2>
      <p class="text-gray-600 mb-4">
        Advanced lazy loading with blur-up placeholders using the svelte-image
        library. Provides smooth loading transitions and improved perceived
        performance.
      </p>
      <div class="bg-orange-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Features:</h4>
        <ul class="text-sm text-gray-700 list-disc list-inside space-y-1">
          <li>Blur-up placeholder effect</li>
          <li>Intersection Observer lazy loading</li>
          <li>Smooth loading transitions</li>
          <li>Responsive image sizing</li>
        </ul>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each staticImages as img, i}
        <div class="group overflow-hidden rounded-xl shadow-lg bg-white">
          <div class="relative">
            <Image
              src={img.src}
              width={800}
              height={600}
              alt={img.alt}
              placeholder
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded"
            >
              Blur-up
            </div>
          </div>
          <div class="p-4">
            <h4 class="font-semibold text-sm mb-1">{img.title}</h4>
            <p class="text-xs text-gray-500">Svelte-image with placeholder</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Performance Comparison & Best Practices -->
  <div class="bg-gray-50 rounded-2xl p-8">
    <h2 class="text-2xl font-bold mb-6 text-center">
      Performance & Best Practices Summary
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 class="text-lg font-semibold mb-4 text-blue-600">
          When to Use Each Method
        </h3>
        <div class="space-y-3 text-sm">
          <div class="bg-white p-3 rounded-lg">
            <strong>@sveltejs/enhanced-img:</strong> Default choice for most static
            images in SvelteKit projects
          </div>
          <div class="bg-white p-3 rounded-lg">
            <strong>Vite-imagetools:</strong> When you need fine control over optimization
            parameters
          </div>
          <div class="bg-white p-3 rounded-lg">
            <strong>CDN Services:</strong> For user-generated content and dynamic
            image transformations
          </div>
          <div class="bg-white p-3 rounded-lg">
            <strong>Svelte-Image:</strong> When blur-up placeholders are essential
            for UX
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4 text-green-600">
          Core Web Vitals Impact
        </h3>
        <div class="space-y-3 text-sm">
          <div class="bg-white p-3 rounded-lg">
            <strong>LCP (Largest Contentful Paint):</strong> Use fetchpriority="high"
            for hero images
          </div>
          <div class="bg-white p-3 rounded-lg">
            <strong>CLS (Cumulative Layout Shift):</strong> Always include width/height
            attributes
          </div>
          <div class="bg-white p-3 rounded-lg">
            <strong>FID (First Input Delay):</strong> Lazy load below-the-fold images
          </div>
          <div class="bg-white p-3 rounded-lg">
            <strong>INP (Interaction to Next Paint):</strong> Optimize image loading
            with proper sizes
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg p-6">
      <h3 class="text-lg font-semibold mb-4 text-center">
        Implementation Checklist
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 class="font-semibold mb-2 text-purple-600">
            Format Optimization
          </h4>
          <ul class="space-y-1 text-gray-600">
            <li>✅ AVIF for modern browsers</li>
            <li>✅ WebP for broad support</li>
            <li>✅ JPG/PNG fallbacks</li>
            <li>✅ Automatic format selection</li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-2 text-purple-600">Responsive Design</h4>
          <ul class="space-y-1 text-gray-600">
            <li>✅ Multiple image sizes</li>
            <li>✅ Proper sizes attributes</li>
            <li>✅ Viewport-based loading</li>
            <li>✅ HiDPI/Retina support</li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-2 text-purple-600">Performance</h4>
          <ul class="space-y-1 text-gray-600">
            <li>✅ Lazy loading implementation</li>
            <li>✅ Priority hints for critical images</li>
            <li>✅ Layout shift prevention</li>
            <li>✅ CDN distribution ready</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
