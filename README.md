# MÉTHOVIA — Site vitrine

Site statique en français, sans framework ni dépendance externe, pour la présentation de MÉTHOVIA : conseil en organisation, accompagnement des indépendants et TPE, formations professionnelles immobilières.

## Pages
- `/` : accueil, cibles, bénéfices, mot du fondateur
- `/accompagnement/` : 6 prestations P01–P06 et 3 packs, sans prix
- `/formations-immobilieres/` : catalogue IM01–IM12, formations synchrones en visio, volet investisseurs
- `/contact/` : formulaire de contact compatible Netlify Forms
- `/mentions-legales/` et `/confidentialite/` : pages à compléter avant publication officielle

## Mise en ligne gratuite
1. Créer un dépôt GitHub **indépendant** `methovia-site` et y importer le contenu de ce dossier (ne pas placer dans MotoStatix).
2. Dans Netlify : Add new project > Import from Git > GitHub > `methovia-site`. Build command vide, publish directory `.`. Ou utiliser Netlify Drop pour un premier déploiement manuel.
3. L'URL gratuite sera de type `nom-du-projet.netlify.app` ; aucun domaine payant requis.
4. Mettre à jour l'identité de l'éditeur, SIREN, adresse, contact et informations de l'hébergeur dans `/mentions-legales/` et l'adresse du responsable des données dans `/confidentialite/`.
5. Vérifier les obligations RGPD, déclarations de formation, et mentions commerciales avant diffusion large.
6. Après validation juridique et de marque, remplacer `robots.txt` et retirer la directive `X-Robots-Tag` dans `netlify.toml`, puis ajouter un sitemap et les canoniques définitives.

## Notes
- Contact : le formulaire Netlify Forms conserve les soumissions dans le tableau de bord Netlify ; une notification e-mail doit être configurée dans Netlify pour recevoir des alertes.
- Site sans traqueurs, pixels marketing ou cookies de mesure.
- Les logos proviennent du kit MÉTHOVIA précédemment validé.
- Le nom MÉTHOVIA reste à vérifier juridiquement avant diffusion commerciale.
- Ne jamais placer de secrets ou d'identifiants dans ce dépôt.
