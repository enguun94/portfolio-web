

  let projects = [];
  let loading = true;

  onMount(async () => {
    projects = await getProjects();
    loading = false;
  });
  ////////////////////////////////////////////////////////////

  
</script>
{#if loading}
  <p>Loading projects...</p>

{:else if projects.length === 0}
  <p>No projects yet.</p>

{:else}
  <div class="grid">
    {#each projects as p (p.id)}
      <ProjectCard {...p} />
    {/each}
  </div>
{/if}
<style>
  .grid {
    display: grid;
    gap: 12px;
  }
</style>

