async function loadSection(id, url) {
  const res = await fetch(url);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// load each section
loadSection("hero-container", "/CSTutorBench/sections/hero/hero.html");
loadSection("about-container", "/CSTutorBench/sections/about/about.html");
loadSection("dataset-container", "/CSTutorBench/sections/dataset/dataset.html");
loadSection("evaluation-container", "/CSTutorBench/sections/evaluation/evaluation.html");
loadSection("leaderboard-container", "/CSTutorBench/sections/leaderboard/leaderboard.html");
loadSection("footer-container", "/CSTutorBench/sections/footer/footer.html");
loadSection("authors-container", "/CSTutorBench/sections/authors/authors.html");
loadSection("contact-container", "/CSTutorBench/sections/contact/contact.html");
loadSection("download-container", "/CSTutorBench/sections/download/download.html");
