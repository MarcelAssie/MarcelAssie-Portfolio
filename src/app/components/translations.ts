export type Lang = "fr" | "en";

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  tasks: string[];
  tags: string[];
  logo: string;
  url: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  spec: string;
  location: string;
  period: string;
  logo: string;
  url: string;
}

export interface ProjectItem {
  name: string;
  type: string;
  description: string;
  tags: string[];
}

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      education: "Formation",
      experience: "Expériences",
      projects: "Projets",
      skills: "Compétences",
      cv: "CV",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Marcel ASSIE",
      title: "Ingénieur en Géomatique",
      subtitle:
        "Spécialisé en Geo Data Science | Développement Géospatial | Automatisation de Pipelines de Données",
      cta: "Découvrir mon parcours",
      download: "Télécharger mon CV",
    },
    about: {
      title: "À propos de moi",
      p1: "Ingénieur géomaticien spécialisé en Geo Data Science, passionné par l'écosystème Geo-Data et les technologies géospatiales. Fort d'un parcours riche alliant amenagement du terrain et ingénierie des données spatiales, je mets à profit mes compétences en développement géospatial, automatisation de pipelines de données et analyse spatiale.",
      p2: "Mon objectif : transformer des données géolocalisées complexes en véritables outils décisionnels, au service de projets à fort impact. Ayant le sens du professionnalisme, je sais travailler en équipe et avec rigueur. Grâce à mon esprit critique, je suis une force de proposition et un véritable atout dans la conduite de projet.",
      location: "Champs-sur-Marne (77), France",
      email: "marcelassie2k@gmail.com",
      phone: "+33 7 68 06 25 78",
      languages: "Français (Natif), Anglais (TOEIC B2)",
      interests: "IA, Veille technologique, Football, Gymnastique acrobatique",
    },
    education: {
      title: "Formation",
      items: [
        {
          school: "École Nationale des Sciences Géographiques (Actuel Geodata Paris)",
          degree: "Ingénieur en Géomatique",
          spec: "Spécialité Geo Data Science",
          location: "Champs-sur-Marne, France",
          period: "Sept. 2023 – Sept. 2026",
          logo: "logo/ensg.jpg",
          url: "https://geodata-paris.fr/fr",
        },
        {
          school: "Institut National Polytechnique Félix Houphouët-Boigny",
          degree: "Licence Géomètre",
          spec: "Technicien Supérieur Géomètre-Topographe",
          location: "Yamoussoukro, Côte d'Ivoire",
          period: "Oct. 2019 – Juil. 2022",
          logo: "/logo/inphb.png",
          url: "https://inphb.edu.ci/",
        },
        {
          school: "Lycée Scientifique de Yamoussoukro",
          degree: "Baccalauréat, Série Scientifique",
          spec: "Physiques & Mathématiques",
          location: "Yamoussoukro, Côte d'Ivoire",
          period: "Sept. 2016 – Juil. 2019",
          logo: "logo/lsy.png",
          url: "https://lsy.ci/",
        },
      ] as EducationItem[],
    },
    experience: {
      title: "Expériences Professionnelles",
      items: [
        {
          company: "ISOGEO",
          role: "Ingénieur Développeur SIG — Alternance",
          location: "Paris, France",
          period: "Sept. 2025 – Sept. 2026",
          logo: "/logo/isogeo.png",
          url: "https://www.isogeo.com/",
          description:
            "Dans le cadre de mon alternance chez Isogeo, éditeur spécialisé dans le catalogage et la gestion de métadonnées géographiques, j'interviens sur la refonte technologique du « Scan Isogeo ». Cet outil central permet de recenser automatiquement les données géographiques d'un client (fichiers SIG, bases de données spatiales, services web) et d'en extraire les métadonnées descriptives. L'objectif est de remplacer l'ETL propriétaire FME par de nouvelles chaînes de traitements automatisées, plus performantes et maintenables.",
          tasks: [
            "Conception et développement de nouvelles chaînes ETL en Python pour le remplacement complet de FME, avec orchestration automatisée des traitements",
            "Manipulation et traitement de formats de données géographiques variés (Shapefile, GeoPackage, GeoJSON, GeoTIFF, bases PostGIS, services WMS/WFS) avec GDAL/OGR et SQL",
            "Exploration et implémentation de modèles d'IA (NLP) pour l'extraction et l'enrichissement automatique des métadonnées sémantiques à partir des noms de couches et attributs",
            "Rédaction de spécifications fonctionnelles et techniques ; gestion de projet en méthode Agile (Scrum) avec sprints bi-hebdomadaires",
            "Mise en place de tests unitaires et d'intégration, documentation technique et revue de code collaborative",
          ],
          tags: ["Python", "GDAL/OGR", "SQL", "Node.js", "IA/NLP", "Agile/Scrum", "Docker"],
        },
        {
          company: "ORYJIN",
          role: "Ingénieur Geo Data Scientist — Stage",
          location: "Lille, France",
          period: "Avr. – Août 2025",
          logo: "/logo/oryjin.jpg",
          url: "https://www.oryjin.ai/",
          description:
            "Stage de 5 mois au sein d'Oryjin, startup spécialisée en intelligence géospatiale et ciblage territorial. J'ai contribué au développement d'une plateforme digitale de ciblage reposant sur l'index géospatial open source H3 (Uber). Cette plateforme permet aux clients (retailers, collectivités) d'exploiter des données socio-démographiques et géographiques pour optimiser leur implantation et leurs campagnes marketing locales.",
          tasks: [
            "Recherche, audit qualité et intégration de sources de données géospatiales et socio-démographiques (Insee, IGN BD TOPO, fichiers fonciers) dans le référentiel hexagonal H3 à différentes résolutions",
            "Développement de pipelines ETL robustes et d'algorithmes statistiques pour la création d'agrégats géographiques multi-échelles (Python, Snowflake, SQL avancé)",
            "Extraction d'informations spatiales (occupation du sol, végétation, bâti) à partir d'images satellites Sentinel-2 via des modèles de Computer Vision (segmentation sémantique)",
            "Automatisation de la datavisualisation via IA générative : conception de flux de prompts pour la génération automatique de rapports cartographiques descriptifs",
            "Contribution à l'architecture data de la plateforme et mise en place de processus de validation et contrôle qualité des données",
          ],
          tags: ["Python", "Snowflake", "SQL", "H3 (Uber)", "Computer Vision", "IA Générative", "Sentinel-2"],
        },
        {
          company: "IGN (Institut national de l'information géographique et forestière)",
          role: "Ingénieur Géomaticien — Stage",
          location: "Forcalquier, France",
          period: "Mai – Juil. 2024",
          logo: "/logo/ign.png",
          url: "https://www.ign.fr/",
          description:
            "Stage de terrain au sein de l'IGN dans le cadre de la formation ENSG. Réalisation de mini-projets appliqués mobilisant l'ensemble des compétences géomatiques fondamentales. Ce stage intensif m'a permis de consolider mes acquis terrain et de développer un workflow de cartographie automatisé pour les services de la préfecture.",
          tasks: [
            "Conduite de levés topométriques de précision (nivellement, polygonation) et traitement des observations sous compensation par moindres carrés",
            "Réalisation d'un projet de photogrammétrie aérienne : acquisition, aérotriangulation, production de MNS/MNT et orthophotographie",
            "Métrologie appliquée : auscultation d'un pont par méthodes géodésiques de haute précision (suivi de déformations)",
            "Télédétection : classification supervisée d'images satellite pour la cartographie d'occupation du sol",
            "Conception d'un workflow automatisé de cartographie des restrictions de circulation dans les Alpes-de-Haute-Provence (QGIS Model Builder, scripts PyQGIS)",
          ],
          tags: ["QGIS", "PyQGIS", "Photogrammétrie", "Télédétection", "Géodésie", "Model Builder"],
        },
        {
          company: "QORNUS SARL",
          role: "Géomètre-Topographe — CDD",
          location: "Tabou, Côte d'Ivoire",
          period: "Jan. – Avr. 2023",
          logo: "",
          url: "",
          description:
            "Mission de suivi topographique dans le cadre du projet de construction de la Maternité de l'Hôpital Général de Tabou, financé par GCC Services. Intervention sur un chantier d'envergure avec gestion des équipes terrain et interface avec le bureau d'études.",
          tasks: [
            "Implantation des ouvrages et suivi d'exécution topographique (terrassement, fondations, élévations) pour la construction de la Maternité",
            "Levés topographiques réguliers, contrôle altimétrique et planimétrique des ouvrages en cours de réalisation",
            "Production de plans d'exécution et de récolement sous AutoCAD/Covadis",
          ],
          tags: ["Topographie", "AutoCAD", "Covadis", "Suivi de chantier"],
        },
        {
          company: "SITAC SARL",
          role: "Géomètre-Topographe — CDD",
          location: "Côte d'Ivoire",
          period: "Mai – Août 2023",
          logo: "",
          url: "",
          description:
            "Participation aux opérations de lotissement et d'aménagement foncier. Traitement des données de terrain et production de livrables CAO/DAO pour les projets de VRD (Voirie et Réseaux Divers) et d'implantation de lots et îlots.",
          tasks: [
            "Opérations de lotissement : bornage, délimitation parcellaire et morcellement de terrains",
            "Traitement des données de terrain et production de plans CAO/DAO sous AutoCAD/Covadis pour les projets de VRD",
            "Implantation de lots et îlots, calculs de cubatures pour les terrassements",
          ],
          tags: ["AutoCAD", "Covadis", "Lotissement", "VRD", "Bornage"],
        },
        {
          company: "SOGEA-SATOM (Groupe VINCI)",
          role: "Stage de Projet de Fin d'Études",
          location: "Abidjan, Côte d'Ivoire",
          period: "Mars – Juin 2022",
          logo: "/logo/sogea-satom.png",
          url: "https://sogea-satom.com/fr/",
          description:
            "Stage de fin d'études au sein de SOGEA-SATOM, filiale du groupe VINCI, sur le chantier majeur de réhabilitation de la décharge d'Akouédo (plus grande décharge d'Afrique de l'Ouest). Réalisation des travaux topographiques nécessaires à la construction du réseau d'assainissement et de drainage des eaux.",
          tasks: [
            "Réalisation des levés topographiques pour la conception et l'implantation du réseau d'assainissement et de drainage",
            "Calculs de cubatures, profils en long et profils en travers pour le dimensionnement des ouvrages hydrauliques",
            "Rédaction du mémoire de PFE et soutenance devant un jury académique et professionnel",
          ],
          tags: ["Topographie", "Assainissement", "Cubatures", "AutoCAD"],
        },
      ] as ExperienceItem[],
    },
    projects: {
      title: "Projets",
      academic: "Projets Académiques",
      personal: "Projets Personnels",
      items: [
        {
          name: "Extraction de données contextuelles (ODD)",
          type: "academic",
          description:
            "Développement d'une méthode avancée d'extraction d'informations basée sur les Grands Modèles de Langage (LLM). Structuration des résultats sous forme de graphes de connaissances (Neo4j) pour analyser les relations sémantiques entre les 17 Objectifs de Développement Durable de l'ONU et leurs cibles.",
          tags: ["Pytorch", "Transformers", "NLP", "LLMs", "Neo4j"],
        },
        {
          name: "App mobile de navigation (Gendarmerie Nationale)",
          type: "academic",
          description:
            "Développement d'une application mobile de navigation inspirée de Waze, spécifiquement conçue pour les missions de sécurité publique de la Gendarmerie Nationale. Fonctionnalités de signalement en temps réel, optimisation d'itinéraires tactiques et alertes géolocalisées.",
          tags: ["React Native", "Flask", "API REST", "Géolocalisation"],
        },
        {
          name: "Étude Spatio-Statistique (Île-de-France)",
          type: "academic",
          description:
            "Modélisation de l'impact des modifications du réseau de transport francilien (nouvelles lignes, prolongements) sur le report modal domicile-travail via une approche panel spatio-temporelle. Simulation de scénarios prospectifs et visualisation cartographique des résultats.",
          tags: ["Scikit-Learn", "Seaborn", "SciPy", "Proj", "GeoPandas"],
        },
        {
          name: "Plateforme SaaS KlassIvoire",
          type: "personal",
          description:
            "Contribution au développement d'une plateforme de suivi scolaire numérique à destination des établissements ivoiriens. Intégration d'outils d'IA (Gemini API) pour l'analyse automatique des performances, la génération de bulletins et les recommandations pédagogiques personnalisées.",
          tags: ["Django", "PostgreSQL", "Docker", "Cloudflare R2", "Redis", "Gemini API"],
        },
        {
          name: "Plateforme d'analyse d'établissements scolaires",
          type: "personal",
          description:
            "Conception d'une plateforme intelligente de suivi géographique des établissements scolaires, permettant l'exploitation de données spatiales (localisation, accessibilité, zonage) pour la prise de décision en matière de politique éducative.",
          tags: ["Django", "PostgreSQL/PostGIS", "Leaflet.js", "API REST"],
        },
      ] as ProjectItem[],
    },
    skills: {
      title: "Compétences",
      categories: [
        {
          name: "Langages",
          items: ["Python", "SQL", "JavaScript", "HTML/CSS", "R", "Cypher"],
        },
        {
          name: "Technologies",
          items: ["Docker", "GitHub", "PostgreSQL/PostGIS", "Django", "Flask", "Vue.js", "React Native", "Neo4j"],
        },
        {
          name: "Librairies Géospatiales",
          items: ["GDAL/OGR", "Proj", "GeoPandas", "ArcPy", "PyQGIS", "Shapely", "Leaflet.js", "Rasterio"],
        },
        {
          name: "Outils SIG",
          items: ["QGIS", "ArcGIS Pro", "FME", "GeoServer", "AutoCAD", "Covadis"],
        },
        {
          name: "Aptitudes",
          items: ["Adaptabilité", "Rigueur", "Esprit critique", "Prise d'initiative", "Travail en équipe", "Méthode Agile"],
        },
      ],
    },
    cv: {
      title: "Mon CV",
      downloadMain: "Télécharger CV Ingénieur Géomatique",
      downloadGeo: "Télécharger CV Géomètre-Topographe",
      previewNote: "Cliquez sur un bouton ci-dessous pour télécharger le CV correspondant.",
    },
    contact: {
      title: "Contact",
      subtitle: "N'hésitez pas à me contacter pour toute opportunité ou collaboration.",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      send: "Envoyer",
      sent: "Message envoyé !",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      cv: "CV",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Marcel ASSIE",
      title: "Geomatics Engineer",
      subtitle:
        "Specialized in Geo Data Science | Geospatial Development | Data Pipeline Automation",
      cta: "Discover my journey",
      download: "Download my CV",
    },
    about: {
      title: "About Me",
      p1: "Geomatics engineer specialized in Geo Data Science, passionate about the Geo-Data ecosystem and geospatial technologies. With a rich background combining field surveying and spatial data engineering, I leverage my skills in geospatial development, data pipeline automation, and spatial analysis.",
      p2: "My goal: transform complex territorial data into true decision-making tools, serving high-impact projects. With a strong sense of professionalism, I work well in teams and under pressure. Thanks to my critical thinking, I am a proactive contributor and a real asset in project management.",
      location: "Champs-sur-Marne (77), France",
      email: "marcelassie2k@gmail.com",
      phone: "+33 7 68 06 25 78",
      languages: "French (Native), English (TOEIC B2)",
      interests: "AI, Tech watch, Football, Acrobatic gymnastics",
    },
    education: {
      title: "Education",
      items: [
        {
          school: "National School of Geographic Sciences (Geodata Paris)",
          degree: "Geomatics Engineering Degree",
          spec: "Specialization in Geo Data Science",
          location: "Champs-sur-Marne, France",
          period: "Sept. 2023 – Sept. 2026",
          logo: "logo/ensg.jpg",
          url: "https://geodata-paris.fr/fr",
        },
        {
          school: "National Polytechnic Institute Félix Houphouët-Boigny",
          degree: "Surveying Degree",
          spec: "Senior Surveyor-Topographer Technician — Honors",
          location: "Yamoussoukro, Ivory Coast",
          period: "Oct. 2019 – Jul. 2022",
          logo: "/logo/inphb.png",
          url: "https://inphb.edu.ci/",
        },
        {
          school: "Scientific High School of Yamoussoukro",
          degree: "Scientific Baccalaureate",
          spec: "Physics & Maths",
          location: "Yamoussoukro, Ivory Coast",
          period: "Sept. 2016 – Jul. 2019",
          logo: "logo/lsy.png",
          url: "https://lsy.ci/",
        },
      ] as EducationItem[],
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          company: "ISOGEO",
          role: "GIS Development Engineer — Apprenticeship",
          location: "Paris, France",
          period: "Sept. 2025 – Sept. 2026",
          logo: "/logo/isogeo.png",
          url: "https://www.isogeo.com/",
          description:
            "As part of my apprenticeship at Isogeo, a company specialized in cataloguing and managing geographic metadata, I work on the technological overhaul of the \"Scan Isogeo\". This core tool automatically inventories a client's geographic data (GIS files, spatial databases, web services) and extracts descriptive metadata. The goal is to replace the proprietary FME ETL with new, more performant and maintainable automated processing chains.",
          tasks: [
            "Designing and developing new ETL chains in Python to fully replace FME, with automated processing orchestration",
            "Handling and processing various geographic data formats (Shapefile, GeoPackage, GeoJSON, GeoTIFF, PostGIS databases, WMS/WFS services) with GDAL/OGR and SQL",
            "Exploring and implementing AI (NLP) models for automatic metadata extraction and semantic enrichment from layer names and attributes",
            "Writing functional and technical specifications; Agile (Scrum) project management with bi-weekly sprints",
            "Setting up unit and integration tests, technical documentation and collaborative code review",
          ],
          tags: ["Python", "GDAL/OGR", "SQL", "Node.js", "AI/NLP", "Agile/Scrum", "Docker"],
        },
        {
          company: "ORYJIN",
          role: "Geo Data Scientist Engineer — Internship",
          location: "Lille, France",
          period: "Apr. – Aug. 2025",
          logo: "/logo/oryjin.jpg",
          url: "https://www.oryjin.ai/",
          description:
            "5-month internship at Oryjin, a startup specialized in geospatial intelligence and territorial targeting. I contributed to developing a digital targeting platform based on the open-source geospatial index H3 (Uber). This platform enables clients (retailers, municipalities) to leverage socio-demographic and geographic data to optimize their location strategy and local marketing campaigns.",
          tasks: [
            "Research, quality audit and integration of geospatial and socio-demographic data sources (Insee, IGN BD TOPO, land registry) into the H3 hexagonal reference at various resolutions",
            "Development of robust ETL pipelines and statistical algorithms for multi-scale geographic aggregates (Python, Snowflake, advanced SQL)",
            "Spatial information extraction (land use, vegetation, buildings) from Sentinel-2 satellite imagery using Computer Vision models (semantic segmentation)",
            "Automation of data visualization via generative AI: designing prompt flows for automatic generation of descriptive cartographic reports",
            "Contributing to the platform's data architecture and implementing data validation and quality control processes",
          ],
          tags: ["Python", "Snowflake", "SQL", "H3 (Uber)", "Computer Vision", "Generative AI", "Sentinel-2"],
        },
        {
          company: "IGN (National Institute of Geographic and Forest Information)",
          role: "Geomatics Engineer — Internship",
          location: "Forcalquier, France",
          period: "May – Jul. 2024",
          logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/05/Logo_IGN_2012.svg/1200px-Logo_IGN_2012.svg.png",
          url: "https://www.ign.fr/",
          description:
            "Field internship at IGN as part of the ENSG curriculum. Completion of applied mini-projects mobilizing all fundamental geomatics skills. This intensive internship allowed me to consolidate field expertise and develop an automated mapping workflow for the prefecture services.",
          tasks: [
            "Conducting precision topometric surveys (leveling, traversing) and processing observations with least squares adjustment",
            "Aerial photogrammetry project: acquisition, aerotriangulation, DSM/DTM production and orthophotography",
            "Applied metrology: bridge monitoring using high-precision geodetic methods (deformation tracking)",
            "Remote sensing: supervised image classification for land use/land cover mapping",
            "Design of an automated mapping workflow for traffic restrictions in Alpes-de-Haute-Provence (QGIS Model Builder, PyQGIS scripts)",
          ],
          tags: ["QGIS", "PyQGIS", "Photogrammetry", "Remote Sensing", "Geodesy", "Model Builder"],
        },
        {
          company: "QORNUS SARL",
          role: "Surveyor-Topographer — Fixed-term",
          location: "Tabou, Ivory Coast",
          period: "Jan. – Apr. 2023",
          logo: "",
          url: "",
          description:
            "Topographic monitoring mission for the construction of the Maternity Ward at Tabou General Hospital, funded by GCC Services. Working on a large-scale construction site with field team management and interface with the design office.",
          tasks: [
            "Structure implantation and topographic execution monitoring (earthworks, foundations, elevations) for the Maternity Ward construction",
            "Regular topographic surveys, altimetric and planimetric control of ongoing structures",
            "Production of execution and as-built drawings using AutoCAD/Covadis",
          ],
          tags: ["Topography", "AutoCAD", "Covadis", "Site Monitoring"],
        },
        {
          company: "SITAC SARL",
          role: "Surveyor-Topographer — Fixed-term",
          location: "Ivory Coast",
          period: "May – Aug. 2023",
          logo: "",
          url: "",
          description:
            "Participation in land subdivision and development operations. Field data processing and CAD deliverable production for road network (VRD) projects and plot/block implantation.",
          tasks: [
            "Land subdivision operations: boundary marking, plot delimitation and land parceling",
            "Field data processing and CAD/CAM plan production using AutoCAD/Covadis for VRD projects",
            "Plot and block implantation, earthwork volume calculations",
          ],
          tags: ["AutoCAD", "Covadis", "Subdivision", "VRD", "Boundary Marking"],
        },
        {
          company: "SOGEA-SATOM (VINCI Group)",
          role: "Final Year Project Internship",
          location: "Abidjan, Ivory Coast",
          period: "Mar. – Jun. 2022",
          logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/Logo_Vinci.svg/1200px-Logo_Vinci.svg.png",
          url: "https://www.sogea-satom.com/",
          description:
            "Final year internship at SOGEA-SATOM, a VINCI Group subsidiary, on the major Akouédo landfill rehabilitation project (largest landfill in West Africa). Conducting topographic work required for the construction of the sewerage and drainage network.",
          tasks: [
            "Conducting topographic surveys for the design and implantation of the sewerage and drainage network",
            "Volume calculations, longitudinal and cross-sectional profiles for hydraulic structure sizing",
            "Writing the final year dissertation and defense before an academic and professional jury",
          ],
          tags: ["Topography", "Sanitation", "Volume Calculations", "AutoCAD"],
        },
      ] as ExperienceItem[],
    },
    projects: {
      title: "Projects",
      academic: "Academic Projects",
      personal: "Personal Projects",
      items: [
        {
          name: "Contextual Data Extraction (SDGs)",
          type: "academic",
          description:
            "Development of an advanced information extraction method based on Large Language Models (LLM). Structuring results as knowledge graphs (Neo4j) to analyze semantic relationships between the 17 UN Sustainable Development Goals and their targets.",
          tags: ["Pytorch", "Transformers", "NLP", "LLMs", "Neo4j"],
        },
        {
          name: "Navigation Mobile App (French Gendarmerie)",
          type: "academic",
          description:
            "Development of a Waze-inspired mobile navigation application specifically designed for public security missions of the French Gendarmerie. Real-time reporting features, tactical route optimization and geolocated alerts.",
          tags: ["React Native", "Flask", "REST API", "Geolocation"],
        },
        {
          name: "Spatio-Statistical Study (Île-de-France)",
          type: "academic",
          description:
            "Modeling the impact of Paris region transport network changes (new lines, extensions) on home-work modal shift using a spatio-temporal panel approach. Prospective scenario simulation and cartographic visualization of results.",
          tags: ["Scikit-Learn", "Seaborn", "SciPy", "Proj", "GeoPandas"],
        },
        {
          name: "SaaS Platform KlassIvoire",
          type: "personal",
          description:
            "Contributing to the development of a digital school monitoring platform for Ivorian institutions. Integration of AI tools (Gemini API) for automatic performance analysis, report card generation and personalized pedagogical recommendations.",
          tags: ["Django", "PostgreSQL", "Docker", "Cloudflare R2", "Redis", "Gemini API"],
        },
        {
          name: "School Analysis Platform",
          type: "personal",
          description:
            "Design of an intelligent geographic monitoring platform for schools, enabling the exploitation of spatial data (location, accessibility, zoning) for educational policy decision-making.",
          tags: ["Django", "PostgreSQL/PostGIS", "Leaflet.js", "REST API"],
        },
      ] as ProjectItem[],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Languages",
          items: ["Python", "SQL", "JavaScript", "HTML/CSS", "R", "Cypher"],
        },
        {
          name: "Technologies",
          items: ["Docker", "GitHub", "PostgreSQL/PostGIS", "Django", "Flask", "Vue.js", "React Native", "Neo4j"],
        },
        {
          name: "Geospatial Libraries",
          items: ["GDAL/OGR", "Proj", "GeoPandas", "ArcPy", "PyQGIS", "Shapely", "Leaflet.js", "Rasterio"],
        },
        {
          name: "GIS Tools",
          items: ["QGIS", "ArcGIS Pro", "FME", "GeoServer", "AutoCAD", "Covadis"],
        },
        {
          name: "Soft Skills",
          items: ["Adaptability", "Rigor", "Critical thinking", "Initiative", "Teamwork", "Agile"],
        },
      ],
    },
    cv: {
      title: "My Resume",
      downloadMain: "Download Geomatics Engineer CV",
      downloadGeo: "Download Surveyor-Topographer CV",
      previewNote: "Click a button below to download the corresponding resume.",
    },
    contact: {
      title: "Contact",
      subtitle: "Feel free to reach out for any opportunity or collaboration.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      send: "Send",
      sent: "Message sent!",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};