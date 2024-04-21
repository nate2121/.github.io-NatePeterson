const apiKey = 'pk_live_fa1fee8ba842b438d754e68eab3a36cf';
const apiUrl = `https://www.every.org/api/?key=${apiKey}`;

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Donations"
  })
})
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('ERROR:', error);
  });
