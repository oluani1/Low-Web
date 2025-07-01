// script.js
const eventGrid = document.getElementById("event-grid");
const loadMoreBtn = document.getElementById("load-more");
const filtersContainer = document.getElementById("category-filters");
const searchInput = document.getElementById("searchBar");
const citySelect = document.getElementById("citySelect");

let allEvents = [];
let displayedCount = 0;
const itemsPerPage = 4;
let currentCategory = "all";

// Charger les événements depuis le JSON
async function loadEvents() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Erreur chargement JSON");
    allEvents = await response.json();
    renderFilters();
    renderEvents();
  } catch (err) {
    console.error("Erreur de chargement des événements :", err);
    eventGrid.innerHTML = "<p>Impossible de charger les événements.</p>";
  }
}

// Générer les filtres de catégories
function renderFilters() {
  const categories = [...new Set(allEvents.map(ev => ev.category))];
  filtersContainer.innerHTML = "";

  const allBtn = createFilterButton("Toutes", "all");
  filtersContainer.appendChild(allBtn);

  categories.forEach(cat => {
    const button = createFilterButton(cat, cat);
    filtersContainer.appendChild(button);
  });
}

function createFilterButton(label, category) {
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add("filter-btn");
  if (category === currentCategory) button.classList.add("active");

  button.onclick = () => {
    currentCategory = category;
    displayedCount = 0;
    eventGrid.innerHTML = "";
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderEvents();
  };

  return button;
}

// Appliquer les filtres combinés
function filterEvents() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCity = citySelect.value.toLowerCase();

  return allEvents.filter(ev => {
    const matchCategory = currentCategory === "all" || ev.category.toLowerCase() === currentCategory.toLowerCase();
    const matchText = ev.title.toLowerCase().includes(searchText);
    const matchCity = !selectedCity || ev.location.toLowerCase().includes(selectedCity);
    return matchCategory && matchText && matchCity;
  });
}

// Affichage avec pagination
function renderEvents() {
  const filtered = filterEvents();
  const slice = filtered.slice(displayedCount, displayedCount + itemsPerPage);

  slice.forEach(ev => {
    const card = createEventCard(ev);
    eventGrid.appendChild(card);
  });

  displayedCount += slice.length;
  loadMoreBtn.style.display = displayedCount < filtered.length ? "inline-block" : "none";
}

// Générer carte événement
function createEventCard(event) {
  const card = document.createElement("div");
  card.className = "event-card";
  card.innerHTML = `
    <img src="${event.image}" alt="${event.title}">
    <h3>${event.title}</h3>
    <p>${event.date} – ${event.location}</p>
    <p>${event.emoji} ${event.category}</p>
    <a href="${event.link}" class="event-link">En savoir plus</a>
  `;
  return card;
}

// Réagir à la recherche texte
searchInput.addEventListener("input", () => {
  displayedCount = 0;
  eventGrid.innerHTML = "";
  renderEvents();
});

// Réagir au choix de ville
citySelect.addEventListener("change", () => {
  displayedCount = 0;
  eventGrid.innerHTML = "";
  renderEvents();
});

// Voir plus
loadMoreBtn.addEventListener("click", renderEvents);

// Démarrage
document.addEventListener("DOMContentLoaded", loadEvents);
