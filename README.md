# Exposition Solacroup
Intégration de la version digitale de l'exposition sur Marie-Thérèse Solacroup, pour la Fondation Solacroup Hébert.

## Installer le projet
### Prérequis :
- Avoir un éditeur de code à jour installé (VS Code ou équivalent)

### Pour Windows
1. Sans dossier
    - Ouvrir VS Code. 
    - Dans le menu Explorer (première icone en haut à gauche), puis cliquer Clone Repository.
    - Coller l'URL du projet dans la zone de texte ( https://github.com/VKdrg/ExpoSolacroup.git )

2. Avec dossier
    - Dans l'Explorateur de Fichiers Windows, créer un nouveau dossier
    - Ouvrir VS Code.
    - Dans VS Code, ouvrir un terminal (Terminal > New Terminal ou Ctrl+Shift+ù)
    - Dans ce terminal, coller la commande suivante :
```sh
git clone https://github.com/VKdrg/ExpoSolacroup.git
```

### Pour Mac
1. Sans dossier
    - Ouvrir VS Code. 
    - Dans le menu Explorer (première icone en haut à gauche), puis cliquer Clone Repository.
    - Coller l'URL du projet dans la zone de texte ( https://github.com/VKdrg/ExpoSolacroup.git )

2. Avec dossier
    - Dans l'appli Fichers, créer un nouveau dossier
    - Ouvrir VS Code.
    - Dans VS Code, ouvrir un terminal (Terminal > New Terminal ou )
    - Dans ce terminal, coller la commande suivante :
```sh
git clone https://github.com/VKdrg/ExpoSolacroup.git
```


## Lancer le projet
### Pour Windows et Mac
- Dans le terminal VS Code, taper la commande suivante :
```sh
npm run dev
```
- Ctrl+Cliquer le lien LocalHost pour l'ouvrir dans un navigateur, ou copier-coller l'url dans la barre de recherche d'un navigateur au choix ( idéalement Chrome ou Firefox )

### Erreurs possibles et comment y remédier
#### Erreurs liées au git
1. 

#### Erreurs liées à npm
1. Si le terminal retourne "Error : npm command not found", taper la commande suivante :
```sh
npm i 
```
Une fois npm installé, relancer la commande qui a provoqué l'erreur.

2. si le terminal retourne "Error : missing script "dev"", taper la commande suivante :
```sh
cd .\ExpositionSolacroup\
```
Une fois déplacé dans le dossier parent au fichier des scripts, relancer la commande qui à provoqué l'erreur.


## Modifier le contenu du site
### Remarques
- la syntaxe du fichier ("clé": "valeur") ne peut pas être changée, seule la valeur peut changer
- les clés entre "" ne doivent pas être changées
- toujours mettre les clés et valeurs entre double guillemets ("")

### Chapitres
1. les chapitres sont délimités par des accolades, et séparés par une virgule. 



1. Modifier un chapitre existant
    - Dans le fichier SiteContent.json, sélectionner puis modifier la valeur à changer. 
    - Ouvrir la preview web avec la commande "npm run dev", les modifications apparaissent.

2. 