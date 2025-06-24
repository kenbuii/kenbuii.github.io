<script>
  export let book;
  export let type = 'finished'; // 'current' or 'finished'
</script>

<div class="bg-white/50 p-6 rounded-sm border border-sage/10 hover:shadow-lg transition-shadow">
  <div class="flex gap-4">
    <div class="flex-shrink-0">
      <div class="w-16 h-24 bg-sage/20 rounded-sm overflow-hidden">
        {#if book.cover}
          <img src={book.cover} alt="{book.title} cover" class="w-full h-full object-cover" />
        {:else}
          <div class="w-full h-full flex items-center justify-center text-sage/40 text-xs text-center p-2">
            {book.title}
          </div>
        {/if}
      </div>
    </div>
    
    <div class="flex-1 min-w-0">
      <h3 class="font-normal text-lg mb-1 leading-tight">{book.title}</h3>
      <p class="text-sage/70 text-sm mb-3">{book.author}</p>
      
      {#if type === 'current' && book.progress}
        <div class="mb-3">
          <div class="flex justify-between text-xs text-sage/60 mb-1">
            <span>Progress</span>
            <span>{book.progress}%</span>
          </div>
          <div class="w-full bg-sage/20 rounded-full h-1">
            <div class="bg-sage h-1 rounded-full" style="width: {book.progress}%"></div>
          </div>
        </div>
      {/if}
      
      {#if type === 'finished' && book.rating}
        <div class="flex gap-1 mb-3">
          {#each Array(5) as _, i}
            <span class="text-sage {i < book.rating ? 'opacity-100' : 'opacity-30'}">★</span>
          {/each}
        </div>
      {/if}
      
      {#if book.thoughts || book.review}
        <p class="text-xs text-sage/60 leading-relaxed">
          {book.thoughts || book.review}
        </p>
      {/if}
    </div>
  </div>
</div> 