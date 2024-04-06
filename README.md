# Portfolio avec Next.js et API Redis

Ce portfolio est construit avec Next.js et utilise une API Redis pour gérer certaines fonctionnalités.

## Installation

1. Clonez ce dépôt sur votre machine locale :

```sh-session
git clone https://github.com/votre-utilisateur/votre-portfolio.git\
```

2. Accédez au répertoire du projet :

```sh-session
cd votre-portfolio
```

3. Installez les dépendances à l'aide de pnpm ou yarn :

```sh-session
pnpm install
```
### **OU**
```sh-session
yarn install
```


4. Créez un fichier .env à la racine du projet pour configurer les variables d'environnement :

```sh-session
UPSTASH_REDIS_REST_URL=URL_DE_VOTRE_API_REDIS
UPSTASH_REDIS_REST_TOKEN=VOTRE_JETON_D_AUTHENTIFICATION
```


## Configuration de l'API Redis

Assurez-vous d'avoir configuré et déployé votre API Redis. Vous pouvez obtenir les informations d'URL et de jeton d'authentification auprès de votre fournisseur de services Redis.

## Utilisation

Pour démarrer le serveur de développement, exécutez la commande suivante :

```sh-session
pnpm dev
```
### **OU**
```sh-session
yarn dev
```

Le site sera disponible à l'adresse http://localhost:3000.

## Fonctionnalités

Ce portfolio utilise une API Redis pour gérer certaines fonctionnalités telles que la mise en cache de données, le suivi des vues de projet, etc. Assurez-vous de consulter le code pour comprendre comment ces fonctionnalités sont implémentées.

## Licence

Ce projet est sous licence [MIT](LICENSE).

