# NEWS_API_KOA
This is a news REST API using KOA and MongoDb for receiving requests and communicating with the database. Work in progress.

In order to start the application you have to add a .env file with:
 DATABASE_URL='{your database url}'
 API_PORT='{your API port}'

 #Available requests

 *Get All - GET at /articles
 *Get by Id - GET /article/:id
 *Get by Parameters - GET /article?<parameter>
    -fromDate
    -toDate

*Post a new artice - POST /article
    | Required parameters in JSON
        - reporterName
        - title
        - body
    | Optional parameters
        - tldr