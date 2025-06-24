<script>
  // In a real app, you'd fetch this from your CMS or markdown files
  const posts = [
    {
      title: "Getting Started with SvelteKit",
      excerpt: "My thoughts on building modern web applications with SvelteKit and why it's become my go-to framework.",
      date: "2024-06-15",
      slug: "getting-started-sveltekit",
      readTime: "5 min read"
    },
    {
      title: "The Art of Minimalist Design",
      excerpt: "Exploring how constraints can lead to more creative and effective design solutions.",
      date: "2024-06-10",
      slug: "minimalist-design",
      readTime: "3 min read"
    },
    {
      title: "Building Better Reading Habits",
      excerpt: "How I transformed my relationship with books and built a consistent reading practice.",
      date: "2024-06-05",
      slug: "reading-habits",
      readTime: "4 min read"
    }
  ];
</script>

<svelte:head>
  <title>Blog - Kenneth Bui</title>
  <meta name="description" content="Thoughts on design, development, and life" />
</svelte:head>

<div class="page-container">
  <h1 class="section-title">Blog</h1>
  
  <div class="max-w-3xl mx-auto">
    <p class="text-center text-sage/70 mb-12">
      Thoughts on design, development, and life
    </p>
    
    <div class="space-y-12">
      {#each posts as post}
        <article class="border-b border-sage/10 pb-8">
          <div class="mb-4">
            <time class="text-sm text-sage/60">{post.date}</time>
            <span class="text-sage/40 mx-2">•</span>
            <span class="text-sm text-sage/60">{post.readTime}</span>
          </div>
          
          <h2 class="text-2xl font-normal mb-4">
            <a href="/blog/{post.slug}" class="hover:text-sage-dark transition-colors">
              {post.title}
            </a>
          </h2>
          
          <p class="text-sage/80 mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          
          <a href="/blog/{post.slug}" class="btn-secondary">
            Read More
          </a>
        </article>
      {/each}
    </div>
  </div>
</div> 