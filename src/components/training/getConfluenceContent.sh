AUTH=

# Page SQLite Installation
curl -bD \
   -u $AUTH \
   -X GET \
   -H "Content-Type: application/json" \
   "https://computhand.atlassian.net/wiki/rest/api/content?spacekey=FD&title=Installation+SQLite&expand=body.view" > info/installSQLiteContent.json

# Page VueJS
curl -bD \
   -u $AUTH \
   -X GET \
   -H "Content-Type: application/json" \
   "https://computhand.atlassian.net/wiki/rest/api/content?spacekey=FD&title=Vue.JS&expand=body.view" > vuejs/VueContent.json

# Page Java Initial
curl -bD \
   -u $AUTH \
   -X GET \
   -H "Content-Type: application/json" \
   "https://computhand.atlassian.net/wiki/rest/api/content?spacekey=FD&title=Java+Initial&expand=body.view" > java/JavaContent.json

# Page Java pour le Web JEE J2EE Programmation Web en Java Hibernate
curl -bD \
   -u $AUTH \
   -X GET \
   -H "Content-Type: application/json" \
   "https://computhand.atlassian.net/wiki/rest/api/content?spacekey=FD&title=Java+pour+le+Web+JEE+J2EE+Programmation+Web+en+Java+Hibernate&expand=body.view" > j2ee/J2EEContent.json