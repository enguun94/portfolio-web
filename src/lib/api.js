export async function getProjects() {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}
