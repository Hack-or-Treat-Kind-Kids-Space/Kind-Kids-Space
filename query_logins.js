fetch("https://a4ac4fa4-adfa-46fe-a28b-d9522c5e475c-us-east1.apps.astra.datastax.com/api/rest/v1/keyspaces/kids_space/tables/logins/rows/query", {
  "method": "POST",
  "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  "body": "{\"columnNames\":[\"user_id\",\"user_name\",\"password\"],\"filters\":[{\"value\":[\"checkUsername\"],\"columnName\":\"user_name\",\"operator\":\"eq\"},{\"value\":[\"checkPassword4\"],\"columnName\":\"password\",\"operator\":\"eq\"}],\"orderBy\":{\"column\":\"user_id\",\"order\":\"ASC\"}}"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
