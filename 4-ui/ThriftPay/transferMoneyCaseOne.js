function callSmartContract() {
    alert('calling smart contract');
    const url = 'https://api.example.com/endpoint'; // Replace with your API endpoint URL
  
    const data = {
      key1: 'value1',
      key2: 'value2'
    };
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        // Handle the API response
        console.log(result);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  }
  