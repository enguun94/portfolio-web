<script>
  import { onMount } from "svelte";
  import { getProjects } from "./lib/api";
  import ProjectCard from "./lib/ProjectCard.svelte";

  let projects = [];
  let loading = true;
  let error = "";

  onMount(async () => {
    try {
      projects = await getProjects();
    } catch (e) {
      error = e?.message ?? String(e);
      console.error(e);
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <p>Loading projects...</p>
{:else if error}
  <p style="color: red;">{error}</p>
{:else if projects.length === 0}
  <p>No projects yet.</p>
{:else}
  <div class="grid">
    {#each projects as p (p.id)}
      <ProjectCard {...p} />
    {/each}
  </div>
{/if}
