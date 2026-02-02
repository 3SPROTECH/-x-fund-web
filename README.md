# Architecture du Projet
Afin de maintenir le code propre et maintenable à grande échelle, ce projet suit une architecture "Domain-Driven" (groupée par page) pour les composants.

* Règle d'or : Si un composant est spécifique à une page (ex: la section "Héros" de l'accueil), il doit être rangé dans le dossier correspondant à cette page, et non dans un dossier générique.

# Structure des Dossiers
Veuillez respecter strictement l'arborescence suivante lors de la création de nouveaux fichiers :

src/
├── components/
│   ├── layout/                 # Composants globaux de mise en page
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   │
│   ├── ui/                     # Composants UI réutilisables (Design System)
│   │   ├── Button.tsx          # Boutons génériques, inputs, etc.
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   │
│   ├── home/                   # Composants spécifiques à la Page d'Accueil
│   │   ├── Hero.tsx
│   │   └── Testimonials.tsx
│   │
│   ├── about/                  # Composants spécifiques à la Page "À propos"
│   │   ├── AboutSection.tsx    # (Nommé explicitement pour éviter les conflits)
│   │   └── TeamGrid.tsx
│   │
│   ├── services/               # Composants spécifiques à la Page Services
│   │   └── ServiceList.tsx
│   │
│   └── ...
│
├── pages/                      # Les Vues (Pages) principales
│   ├── HomePage.tsx            # Assemble les composants de components/home
│   ├── AboutPage.tsx           # Assemble les composants de components/about
│   ├── ServicesPage.tsx
│   └── ...
│
├── assets/                     # Ressources statiques
│   ├── images/
│   └── icons/
│
├── styles/
│   └── globals.css             # Importation de Tailwind et styles globaux
│
└── data/                       # Contenu statique et mocks
    ├── services.ts
    ├── team.ts
    └── testimonials.ts