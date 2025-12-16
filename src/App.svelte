<script>
  const name = "Enguun";

  const projects = [
    { title: "Perovskite Solar Cell Research", desc: "Thin-film fabrication and optimization (spin-coating, annealing)." },
    { title: "HDR Processor (C++)", desc: "Built an HDR processing library and evaluated IMX900 QHDR." },
    { title: "Speaker Verification (MATLAB)", desc: "LPC features + NN classifier, evaluated FAR/FRR." },
  ];
</script>

<main>
  <header>
    <h1>Hi, I’m {name}</h1>
    <p class="lead">
      Electrical Engineering student at TUS. This is my portfolio.
    </p>
  </header>

  <section>
    <h2>About</h2>
    <p>
      I’m learning Svelte and building this site step by step. My interests include
      image/signal processing and photovoltaic devices.
    </p>
  </section>

  <section>
    <h2>Projects</h2>
    <ul class="cards">
      {#each projects as p}
        <li class="card">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <h2>Contact</h2>
    <p>
      Email: <a href="mailto:s.enguun94@gmail.com">s.enguun94@gmail.com</a>
    </p>
  </section>
</main>

<style>
  main {
    max-width: 900px;
    margin: 60px auto;
    padding: 0 16px;
    font-family: system-ui;
    line-height: 1.6;
  }

  header {
    margin-bottom: 32px;
  }

  .lead {
    font-size: 1.1rem;
    opacity: 0.9;
  }

  section {
    margin: 36px 0;
  }

  .cards {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 12px;
  }

  .card {
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 14px 16px;
  }

  h1, h2, h3 { margin: 0 0 10px; }
</style>
