<script>
  import Header from "./lib/Header.svelte";
  import Section from "./lib/Section.svelte";
  import ProjectCard from "./lib/ProjectCard.svelte";

  const name = "Enguun";

  const projects = [
    {
      title: "Perovskite Solar Cell Research",
      desc: "Thin-film fabrication and optimization (spin-coating, annealing).",
      tech: ["PV", "Thin Film", "Lab"],
      link: ""
    },
    {
      title: "HDR Processor (C++)",
      desc: "Built an HDR processing library and evaluated IMX900 QHDR.",
      tech: ["C++", "OpenCV", "HDR"],
      link: ""
    },
  ];
</script>

<main>
  <Header {name} />

  <Section title="About">
    <p>
      Electrical Engineering student at TUS. I’m learning Svelte and building this site step by step.
    </p>
  </Section>

  <Section title="Projects">
    <div class="grid">
      {#each projects as p}
        <ProjectCard {...p} />
      {/each}
    </div>
  </Section>

  <Section title="Contact">
    <p>Email: <a href="mailto:YOUR_EMAIL_HERE">YOUR_EMAIL_HERE</a></p>
  </Section>
</main>

<style>
  main {
    max-width: 900px;
    margin: 60px auto;
    padding: 0 16px;
    font-family: system-ui;
    line-height: 1.6;
  }
  .grid {
    display: grid;
    gap: 12px;
  }
</style>
