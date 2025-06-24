<script>
  const projects = [
    {
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      image: "/project-images/project1.jpg",
      tags: ["SvelteKit", "TypeScript", "Tailwind"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: true
    },
    {
      title: "Another Project",
      description: "Another project description highlighting the key features and impact.",
      image: "/project-images/project2.jpg",
      tags: ["React", "Node.js", "PostgreSQL"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/username/project2",
      featured: false
    }
  ];
</script>

<svelte:head>
  <title>Portfolio - Kenneth Bui</title>
  <meta name="description" content="A collection of my recent work and projects" />
</svelte:head>

<div class="page-container">
  <h1 class="section-title">Portfolio</h1>
  
  <div class="max-w-4xl mx-auto">
    <p class="text-center text-sage/70 mb-12">
      A selection of recent projects and work
    </p>
    
    <div class="grid gap-12">
      {#each projects as project}
        <article class="group">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-2xl font-normal mb-4">{project.title}</h2>
              
              <p class="text-sage/80 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                {#each project.tags as tag}
                  <span class="px-3 py-1 text-sm border border-sage/30 rounded-full">
                    {tag}
                  </span>
                {/each}
              </div>
              
              <div class="flex gap-4">
                {#if project.demoUrl}
                  <a href={project.demoUrl} target="_blank" rel="noopener" class="btn-primary">
                    Live Demo
                  </a>
                {/if}
                {#if project.githubUrl}
                  <a href={project.githubUrl} target="_blank" rel="noopener" class="btn-secondary">
                    View Code
                  </a>
                {/if}
              </div>
            </div>
            
            <div class="order-1 md:order-2">
              <div class="aspect-video bg-sage/10 rounded-sm overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</div> 