<script>
  export let title = "";
  export let desc = "";
  export let tech = [];
  export let link = "";
</script>

<article class="card">
  <h3>{title}</h3>
  <p>{desc}</p>

  {#if tech?.length}
    <ul class="tech">
      {#each tech as t}
        <li>{t}</li>
      {/each}
    </ul>
  {/if}

  {#if link}
    <a class="link" href={link} target="_blank" rel="noreferrer">View</a>
  {/if}
</article>

<style>
  .card {
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 14px 16px;
  }
  h3 { margin: 0 0 8px; }
  p { margin: 0 0 10px; }
  .tech {
    list-style: none;
    padding: 0;
    margin: 0 0 10px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .tech li {
    border: 1px solid #ddd;
    border-radius: 999px;
    padding: 2px 10px;
    font-size: 0.9rem;
  }
  .link { font-weight: 600; }
</style>
