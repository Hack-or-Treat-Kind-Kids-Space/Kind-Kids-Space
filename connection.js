fetch("https://databaseid-region.apps.astra.datastax.com/api/rest/v1/auth", {
  "method": "POST",
  "headers": {
    "Accept": "*/*",
    "Content-Type": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
