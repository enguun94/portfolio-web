<script>
  export let title = "";
</script>

<section>
  <h2>{title}</h2>
  <div class="content">
    <slot />
  </div>
</section>

<style>
  section { margin: 36px 0; }
  h2 { margin: 0 0 10px; }
</style>
