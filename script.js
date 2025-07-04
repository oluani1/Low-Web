let displayedCount = 0;
const limit = 10;

const searchBar = document.getElementById("searchBar");
const categoryFilters = document.getElementById("category-filters");
const eventGrid = document.getElementById("event-grid");
const loadMoreBtn = document.getElementById("load-more");

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  // --------- Carrousel ----------
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    current = index;
  }

  // Dots click
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.index));
    });
  });

  // Auto-slide
  setInterval(() => {
    let next = (current + 1) % slides.length;
    showSlide(next);
  }, 5000);

  // --------- Chargement des événements ----------
  loadEvents();
});

async function loadEvents() {
  try {
    const response = await fetch("data.json");
    allEvents = await response.json();

    generateCategoryFilters();
    renderEvents();
  } catch (error) {
    console.error("Erreur de chargement :", error);
  }
=======
// ✅ Utiliser directement les données définies dans allEvents
function loadEvents() {
  generateCategoryFilters();
  renderEvents();
>>>>>>> 9c7bf9d (evenements finaux)
}

function generateCategoryFilters() {
  const categories = ["Toutes", ...new Set(allEvents.map(e => e.category).filter(Boolean))];
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "filter-btn";
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderEvents(cat);
    });
    categoryFilters.appendChild(btn);
  });
  categoryFilters.querySelector("button").classList.add("active");
}

function renderEvents(filter = "Toutes") {
  eventGrid.innerHTML = "";
  displayedCount = 0;

  const filtered = allEvents.filter(event => {
    const matchSearch = searchBar.value.toLowerCase() === "" ||
      event.title.toLowerCase().includes(searchBar.value.toLowerCase());
    const matchCategory = filter === "Toutes" || event.category === filter;
    return matchSearch && matchCategory;
  });

  showMore(filtered);
  loadMoreBtn.onclick = () => showMore(filtered);
}

function showMore(filteredEvents) {
  const next = filteredEvents.slice(displayedCount, displayedCount + limit);
  next.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
<<<<<<< HEAD
=======
    const encodedTitle = encodeURIComponent(event.title);
>>>>>>> 9c7bf9d (evenements finaux)
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}" loading="lazy">
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <span class="category-tag">${event.category}</span>
    `;
    eventGrid.appendChild(card);
  });

  displayedCount += next.length;
  loadMoreBtn.style.display = displayedCount >= filteredEvents.length ? "none" : "block";
}

<<<<<<< HEAD
// Recherche dynamique
searchBar.addEventListener("input", () => {
  const currentCategory = document.querySelector(".filter-btn.active")?.textContent || "Toutes";
  renderEvents(currentCategory);
});
=======
searchBar.addEventListener("input", () =>
  renderEvents(document.querySelector(".filter-btn.active")?.textContent || "Toutes")
);

// ✅ Appeler le chargement dès que le DOM est prêt
window.addEventListener("DOMContentLoaded", loadEvents);
>>>>>>> 9c7bf9d (evenements finaux)
