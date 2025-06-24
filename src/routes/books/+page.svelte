<script>
  import BookCard from '$lib/components/BookCard.svelte';
  import { currentlyReading, recentlyRead } from '$lib/data/books.js';
</script>

<svelte:head>
  <title>Books - Kenneth Bui</title>
  <meta name="description" content="What I'm reading and have recently finished" />
</svelte:head>

<div class="page-container">
  <h1 class="section-title">Books</h1>
  
  <!-- Currently Reading -->
  <section class="mb-16">
    <h2 class="text-2xl font-normal mb-8 text-center">Currently Reading</h2>
    <div class="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
      {#each currentlyReading as book}
        <BookCard {book} type="current" />
      {/each}
    </div>
  </section>
  
  <!-- Recently Read -->
  <section>
    <h2 class="text-2xl font-normal mb-8 text-center">Recently Finished</h2>
    <div class="grid md:grid-cols-3 gap-6">
      {#each recentlyRead as book}
        <BookCard {book} type="finished" />
      {/each}
    </div>
  </section>
  
  <!-- Reading Stats -->
  <section class="mt-16 text-center">
    <div class="max-w-md mx-auto p-6 border border-sage/20 rounded-sm">
      <h3 class="text-xl mb-4">2024 Reading Goal</h3>
      <div class="mb-4">
        <div class="text-3xl font-normal text-sage">24 / 30</div>
        <div class="text-sm text-sage/60">books completed</div>
      </div>
      <div class="w-full bg-sage/20 rounded-full h-2">
        <div class="bg-sage h-2 rounded-full" style="width: 80%"></div>
      </div>
    </div>
  </section>
</div> 