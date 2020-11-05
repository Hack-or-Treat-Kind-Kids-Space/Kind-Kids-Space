fetch("https://a4ac4fa4-adfa-46fe-a28b-d9522c5e475c-us-east1.apps.astra.datastax.com/api/rest/v1/auth", {
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
