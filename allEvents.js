const allEvents = [
  {
    "title": "Soirée de louange",
    "image": "images/louange.webp",
    "date": "Samedi 12 juillet 2025 – 19h00 à 20h00",
    "description": "Venez assister à une heure d'adoration profonde. Votre voix n’a pas d’importance, seul votre cœur compte.",
    "city": "Potters House Paris — 23 Rue des Messageries, 75010 Paris",
    "details": "C’est l’heure de célébrer ! Rejoignez-nous pour une Soirée de louange inoubliable à Potters House Paris. Venez chanter, danser et louer dans un environnement chaleureux et accueillant. Que vous soyez habitué ou curieux, cette soirée est pour vous !"
  },
 
  {
    "title": "Concert Rock",
    "category": "Musique",
    "description": "Un concert de rock incroyable en plein air.",
    "image": "images/concert.webp",
    "city": "Paris",
    "date": "Vendredi 18 juillet 2025 – 20h00",
    "details": "Préparez-vous à vibrer au son de la guitare électrique, des riffs endiablés et de l'énergie brute ! Ce concert rock à ciel ouvert rassemble des groupes émergents et confirmés pour une soirée explosive sous les étoiles. Profitez de food trucks, d'un coin chill et d'un espace sécurisé pour faire la fête sans souci. Un moment idéal pour les amateurs de sensations fortes et de communion musicale."
  },
  {
    "title": "Salon du Livre",
    "category": "Salon",
    "description": "Rencontrez vos auteurs préférés au parc des expos.",
    "image": "images/salon.webp",
    "city": "Créteil",
    "date": "Samedi 19 juillet 2025 – 10h00 à 18h00",
    "details": "Le Salon du Livre de Créteil vous ouvre ses portes pour une immersion totale dans l’univers de la littérature francophone et internationale. Venez rencontrer des écrivains de renom, assister à des conférences littéraires, découvrir de jeunes auteurs prometteurs et participer à des ateliers d’écriture. Un espace jeunesse est également prévu avec lectures contées, animations et jeux pédagogiques. Une célébration de la lecture pour petits et grands."
  },
  {
    "title": "Spectacle de Danse Contemporaine",
    "category": "Théâtre",
    "description": "Une performance artistique qui mêle grâce et énergie.",
    "image": "images/spectacle.webp",
    "city": "Nanterre",
    "date": "Dimanche 20 juillet 2025 – 19h30",
    "details": "Ce spectacle de danse contemporaine vous invite à une exploration poétique du mouvement, du corps et de l’émotion. Portés par des chorégraphies audacieuses et une mise en scène visuellement saisissante, les danseurs livrent une performance vibrante et engagée. L'événement sera suivi d’un échange avec les artistes pour mieux comprendre le processus créatif et les messages portés par l’œuvre."
  },
  {
    "title": "Projection : Cinéma indépendant",
    "category": "Cinéma",
    "description": "Un film primé au festival de Cannes, suivi d'un débat.",
    "image": "images/cinema.webp",
    "city": "Paris",
    "date": "Lundi 21 juillet 2025 – 20h00",
    "details": "Venez découvrir une œuvre cinématographique d’exception issue du circuit indépendant, saluée par la critique et les festivals. La projection sera suivie d’un débat animé par un journaliste culturel et le réalisateur du film, autour des thématiques sociales, politiques ou existentielles abordées. Un moment propice à la réflexion et au partage autour du 7ᵉ art."
  },
  {
    "title": "Salon de l’Écologie Urbaine",
    "category": "Écologie",
    "description": "Découvrez les initiatives vertes de votre région.",
    "image": "images/salon.webp",
    "city": "Créteil",
    "date": "Mardi 22 juillet 2025 – 09h00 à 17h00",
    "details": "À l’heure des défis climatiques, ce salon met à l’honneur les solutions locales pour une ville plus verte. Venez rencontrer des acteurs engagés — associations, startups, chercheurs — autour de stands, d’ateliers participatifs et de démonstrations. Des conférences vous permettront d’en apprendre davantage sur l’agriculture urbaine, les mobilités douces ou encore l’économie circulaire. Événement gratuit et accessible à tous les publics."
  },
  {
    "title": "Marché Bio de Quartier",
    "category": "Marché",
    "description": "Produits frais, locaux, bio et de saison.",
    "image": "images/marche.webp",
    "city": "Paris",
    "date": "Mercredi 23 juillet 2025 – 08h00 à 14h00",
    "details": "Flânez dans une ambiance conviviale et éthique au cœur de votre quartier. Ce marché met à l’honneur les producteurs locaux et les circuits courts. Fruits, légumes, fromages, pains, miels, cosmétiques naturels... tout est certifié bio ou en démarche équitable. Profitez aussi d’ateliers de sensibilisation à l’alimentation durable et d’animations musicales tout au long de la journée."
  },
  {
    "title": "Concert Jazz & Vin chaud",
    "category": "Musique",
    "description": "Ambiance feutrée et douce au bord de la Seine.",
    "image": "images/concert.webp",
    "city": "Saint-Denis",
    "date": "Jeudi 24 juillet 2025 – 19h30",
    "details": "Installez-vous confortablement au bord de la Seine et laissez-vous envoûter par les sonorités chaudes et élégantes du jazz. Accompagné d’un verre de vin chaud ou d’une tisane bio, profitez de la prestation d’un quintet d’exception mêlant reprises et compositions originales. Une soirée cosy, romantique ou amicale, pour célébrer l’hiver autrement."
  },
  {
    "title": "Festival du Court Métrage",
    "category": "Cinéma",
    "description": "Des pépites cinématographiques à découvrir.",
    "image": "images/cinema.webp",
    "city": "Saint-Denis",
    "date": "Vendredi 25 juillet 2025 – 18h00 à 23h00",
    "details": "Explorez le monde fascinant du court-métrage à travers une sélection de films variés — drames, comédies, documentaires, expérimentations visuelles. Le festival met en lumière les nouveaux talents du cinéma, avec la présence de réalisateurs pour des échanges passionnants. Un jury remettra plusieurs prix, et le public pourra aussi voter pour son coup de cœur. Cinéphiles, curieux, étudiants en cinéma, cet événement est pour vous."
  },
  {
    "title": "Atelier d'Écriture Poétique",
    "category": "Littérature",
    "description": "Exprimez votre créativité littéraire !",
    "image": "images/litterature.webp",
    "city": "Montreuil",
    "date": "Samedi 26 juillet 2025 – 15h00 à 17h30",
    "details": "Partagez votre amour des mots lors de cet atelier guidé par un écrivain reconnu. À travers des jeux d’écriture, des lectures croisées et des conseils personnalisés, vous serez amené à libérer votre plume dans un cadre bienveillant. Aucun prérequis nécessaire, juste l’envie de s’exprimer et de créer. Un recueil collectif sera proposé à l’issue de la séance."
  },
  {
    "title": "Conférence : Villes intelligentes",
    "category": "Conférence",
    "description": "Les experts parlent de l’avenir des métropoles.",
    "image": "images/conference.webp",
    "city": "Paris",
    "date": "Dimanche 27 juillet 2025 – 14h00 à 18h00",
    "details": "Cette conférence interdisciplinaire réunit urbanistes, chercheurs, ingénieurs et élus pour réfléchir ensemble aux enjeux des smart cities. Quelles technologies pour améliorer la vie des citoyens ? Comment garantir l'inclusivité et la sobriété numérique ? Tables rondes, cas concrets, démonstrations technologiques et networking sont au programme."
  },
  {
    "title": "Séance Yoga Bien-être",
    "category": "Bien-être",
    "description": "Relaxation profonde dans un cadre paisible.",
    "image": "images/yoga.webp",
    "city": "Nanterre",
    "date": "Lundi 28 juillet 2025 – 10h00",
    "details": "Offrez-vous une parenthèse zen avec cette séance de yoga en plein air, au bord de l’eau ou dans un parc arboré. Adaptée à tous les niveaux, la session combine respiration, étirements doux et méditation guidée. Les tapis sont fournis et des tisanes seront servies à la fin. Venez seul(e), en couple ou en famille pour un moment de reconnexion à soi."
  },
  {
    "title": "Exposition Arts Numériques",
    "category": "Exposition",
    "description": "Plongez dans le monde de l’art interactif.",
    "image": "images/exposition.webp",
    "city": "Paris",
    "date": "Mardi 29 juillet 2025 – 11h00 à 18h00",
    "details": "Cette exposition d’arts numériques repousse les frontières entre réel et virtuel. Découvrez des œuvres interactives, des installations immersives, des projections sensorielles et des expériences en réalité augmentée. Le parcours est scénographié pour stimuler vos cinq sens et favoriser la contemplation active. Un espace pédagogique permet aussi d’en savoir plus sur les coulisses techniques de chaque œuvre."
  }

];