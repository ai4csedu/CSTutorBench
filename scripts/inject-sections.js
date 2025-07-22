// scripts/inject-sections.js
const base1 = location.hostname.includes("github.io") ? "/CSTutorBench/" : "";

async function loadSection(id, url) {
  const res = await fetch(base1 + url);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// load each section
loadSection("hero-container", "sections/hero/hero.html");
loadSection("about-container", "sections/about/about.html");
loadSection("dataset-container", "sections/dataset/dataset.html");
loadSection("evaluation-container", "sections/evaluation/evaluation.html");
loadSection("leaderboard-container", "sections/leaderboard/leaderboard.html");
loadSection("footer-container", "sections/footer/footer.html");
loadSection("authors-container", "sections/authors/authors.html");
loadSection("contact-container", "sections/contact/contact.html");
loadSection("download-container", "sections/download/download.html");
