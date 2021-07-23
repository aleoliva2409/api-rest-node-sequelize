# Api REST

Api REST server configured to test your routes, models, database etc.
This server is made with Express, Sequelize configured to PostgreSQL.

This command will install dependencies to run this application.
```
npm install
```

Don´t forget create `.env` file!

This is an example:
```
// CONFIG
PORT=3001

// POSTGRESQL SEQUELIZE
DB_USER= postgres
DB_PASSWORD= password
DB_HOST= localhost:5432
DB_NAME= database

```