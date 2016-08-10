# liveJam

## Setup

### Installations

```sh
npm install
```

### DB

Be sure to have `mariadb` installed on your local workstation and to have the
system service running in the background.

Consult your OS's documentation for how to do this.
Use [homebrew](https://mariadb.com/kb/en/mariadb/building-mariadb-on-mac-os-x-using-homebrew/) if you're on a Mac.

```sh
# Set up the DB & your DB user
npm run init_db

# Run all pending DB migrations
npm run sequelize db:migrate

# Seed the DB with dummy data
npm run sequelize db:seed:all
```
