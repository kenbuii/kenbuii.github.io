<script>
  import { page } from '$app/stores';
  
  $: currentPath = $page.url.pathname;
</script>

<header class="border-b border-sage/20 bg-tan/80 backdrop-blur-sm sticky top-0 z-10">
  <nav class="max-w-4xl mx-auto px-6 py-6">
    <div class="flex justify-between items-center">
      <a href="/" class="text-2xl font-normal hover:text-sage-dark transition-colors">
        Kenneth Bui
      </a>
      
      <div class="flex gap-8">
        <a 
          href="/about" 
          class="hover:text-sage-dark transition-colors {currentPath === '/about' ? 'underline underline-offset-4' : ''}"
        >
          About
        </a>
        <a 
          href="/blog" 
          class="hover:text-sage-dark transition-colors {currentPath.startsWith('/blog') ? 'underline underline-offset-4' : ''}"
        >
          Blog
        </a>
        <a 
          href="/books" 
          class="hover:text-sage-dark transition-colors {currentPath === '/books' ? 'underline underline-offset-4' : ''}"
        >
          Books
        </a>
        <a 
          href="/portfolio" 
          class="hover:text-sage-dark transition-colors {currentPath === '/portfolio' ? 'underline underline-offset-4' : ''}"
        >
          Portfolio
        </a>
      </div>
    </div>
  </nav>
</header> 