const eventGrid = document.getElementById("event-grid");
const loadMoreBtn = document.getElementById("load-more");
const filtersContainer = document.getElementById("category-filters");

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

// Créer les boutons de filtre dynamiquement
function renderFilters() {
  const categories = [...new Set(allEvents.map(ev => ev.category))];
  filtersContainer.innerHTML = ""; // Nettoyer d'abord
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
  if (category === "all") button.classList.add("active");

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

// Afficher les événements (avec pagination)
function renderEvents() {
  const filtered = currentCategory === "all"
    ? allEvents
    : allEvents.filter(ev => ev.category === currentCategory);

  const slice = filtered.slice(displayedCount, displayedCount + itemsPerPage);
  slice.forEach(ev => {
    const card = createEventCard(ev);
    eventGrid.appendChild(card);
  });

  displayedCount += slice.length;
  loadMoreBtn.style.display = displayedCount < filtered.length ? "inline-block" : "none";
}

// Créer une carte événement + bouton favoris
function createEventCard(event) {
  const card = document.createElement('div');
  card.className = 'event-card';
  const isFav = isFavorite(event);

  card.innerHTML = `
    <img src="${event.image}" alt="${event.title}">
    <h3>${event.title}</h3>
    <p>${event.date} – ${event.location}</p>
    <p>${event.emoji} ${event.category}</p>
    <a href="${event.link}" class="event-link">En savoir plus</a><br>
    <button class="favorite-btn">${isFav ? "★ Retirer des favoris" : "☆ Ajouter aux favoris"}</button>
  `;

  // Gestion du bouton de favoris
  const favBtn = card.querySelector(".favorite-btn");
  favBtn.addEventListener("click", () => {
    toggleFavorite(event);
    favBtn.textContent = isFavorite(event)
      ? "★ Retirer des favoris"
      : "☆ Ajouter aux favoris";
  });

  return card;
}

// Favoris : toggle + stockage
function toggleFavorite(event) {
  let favorites = JSON.parse(localStorage.getItem("favoriteEvents") || "[]");
  const already = favorites.some(e => e.title === event.title && e.date === event.date);

  if (already) {
    favorites = favorites.filter(e => !(e.title === event.title && e.date === event.date));
  } else {
    favorites.push(event);
  }

  localStorage.setItem("favoriteEvents", JSON.stringify(favorites));
}

// Vérifie si un événement est déjà dans les favoris
function isFavorite(event) {
  const favorites = JSON.parse(localStorage.getItem("favoriteEvents") || "[]");
  return favorites.some(e => e.title === event.title && e.date === event.date);
}

// Voir plus
loadMoreBtn.addEventListener("click", renderEvents);

// Lancer au chargement
document.addEventListener("DOMContentLoaded", loadEvents);
