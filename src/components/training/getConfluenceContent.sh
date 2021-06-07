AUTH=vincent.baylly@computhand.com:ldUbIVUMWpptbGUIe5bW4B55

> src/components/training/content/installSQLiteContent.json
> src/components/training/content/VueContent.json
> src/components/training/content/JavaContent.json
> src/components/training/content/J2EEContent.json

# Page SQLite Installation
curl -bD \
   -u $AUTH \
   -X GET \
   -H "Content-Type: application/json" \
   "https://computhand.atlassian.net/wiki/rest/api/content?spacekey=FD&title=Installation+SQLite&expand=body.view" >> src/components/training/content/installSQLiteContent.json

# Page VueJS
curl -bD \
   -u $AUTH \
   -X GET \
   -H "Content-Type: application/json" \
   "https://computhand.atlassian.net/wiki/rest/api/content?spacekey=FD&title=Vue.JS&expand=body.view" >> src/components/training/content/VueContent.json

# Page Java Initial
curl -bD \
   -u $AUTH \
   -X GET \
   -H "Content-Type: application/json" \
   "https://computhand.atlassian.net/wiki/rest/api/content?spacekey=FD&title=Java+Initial&expand=body.view" >> src/components/training/content/JavaContent.json

# Page Java pour le Web JEE J2EE Programmation Web en Java Hibernate
curl -bD \
   -u $AUTH \
   -X GET \
   -H "Content-Type: application/json" \
   "https://computhand.atlassian.net/wiki/rest/api/content/229378?expand=body.view" >> src/components/training/content/J2EEContent.json
