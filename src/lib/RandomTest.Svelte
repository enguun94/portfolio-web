<script>
  const MAX_SIZE = 200;
  let width = 100;
  let height = 100;
  $: area = width * height;
  function embiggen(amount = 10) {
    width += amount;
    height += amount;
  }
</script>

<label>
  <input type="range" bind:value={width} min={0} max={MAX_SIZE} />
  {width}
</label>

<label>
  <input type="range" bind:value={height} min={0} max={MAX_SIZE} />
  {height}
</label>

<button on:click={() => embiggen(10)}>embiggen</button>

<hr />

<div class="box" style="width: {width}px; height: {height}px;">
  {area}
</div>

<style>
  label {
    display: flex;
    align-items: center;
  }

  hr {
    margin: 1em 0;
    border: none;
    border-bottom: 1px solid #888;
  }

  .box {
    background: radial-gradient(at 25% 25%, hsl(15 100 60), hsl(15 100 50)) ;
    border-radius: 2px;
    filter: drop-shadow(0 0 10px hsl(15 100 50 / 0.3));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
</style>
