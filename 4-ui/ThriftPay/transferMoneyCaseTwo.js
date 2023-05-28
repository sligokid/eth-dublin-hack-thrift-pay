async function callSmartContractSkipAd() {

    // const walletAddress = '0xDC5354b38E8EeEA6328cB66747C19b807041C269';
    // const eoaTransactions = await getPolygonTransactions(walletAddress);
    // console.log('Transactions for eoaTransactions = ' + eoaTransactions.length);
    //getPolygonTransactions(walletAddress);

    //alert('calling smart contract: ' + eoaTransactions.length);
   
    const url = 'http://130b-89-101-154-45.ngrok-free.app/advertisement/skip-ad';
    const data = {
        name: 'John Doe',
        email: 'johndoe@example.com'
    };
  
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    // const data = {
    //     title: 'Sample Title',
    //     body: 'Sample Body',
    //     userId: 1
    //     };

    // const url = 'https://reqres.in/api/users';
    // const data = {
    //   name: 'John Doe',
    //   job: 'Software Engineer'
    // };


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
        console.log('Response:', result);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  }



  async function getPolygonTransactions(walletAddress) {
    const apiKey = 'FN4Y5MBU56JVT1THM4A45I3ARCBXVC81EP';
    const apiUrl = `https://api-testnet.polygonscan.com/api?module=account&action=txlist&address=${walletAddress}&sort=asc&apikey=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const transactions = data.result;
      return transactions;
    } catch (error) {
      console.error('Error fetching Polygon transactions:', error);
      return [];
    }
  }