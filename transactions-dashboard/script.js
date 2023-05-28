const walletAddresses = new Map();
walletAddresses.set('irish-independent','0x21aac01c01d2ae1b721963a6896e236bff0d1e46');
//walletAddresses.set('irish-independent','0xc5542b6D93106c21765292C1fD8779c27ae98079');
walletAddresses.set('web-studio','0x5ca306c53a8e1b1cbf1981c79fd5522d3515139a');
walletAddresses.set('garage','0x376901e10d4f1b45559491850495807fc5822ba1');

const addressesToName = new Map(Array.from(walletAddresses, a => a.reverse()))




async function displayThriftPayTransactions() {

    const irishIndependentTransactions = await getPolygonTransactions(walletAddresses.get('irish-independent'));
    console.log('Transactions for irish-independent = ' + irishIndependentTransactions.length);
    const webStudioTransactions = await getPolygonTransactions(walletAddresses.get('web-studio'));
    const garageTransactions = await getPolygonTransactions(walletAddresses.get('garage'));


    displayTransactions('irishIndependentTransactions', irishIndependentTransactions, 'irish-independent');
    displayTransactions('webStudioTransactions', webStudioTransactions, 'web-studio');
    displayTransactions('garageTransactions', garageTransactions, 'garage');

  }

  async function displayAdhocTransactions() {

    const walletAddress = document.getElementById('eoaWalletAddress').value;
    const eoaTransactions = await getPolygonTransactions(walletAddress);
    console.log('Transactions for eoaTransactions = ' + eoaTransactions.length);

    displayTransactions('eoaTransactions', eoaTransactions, 'eoa-transactions');

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
  
  async function displayTransactions(tableId, transactions, walletIdentifier) {
    console.log('Transactions for ' + walletIdentifier + ' is = ' + transactions.length );
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
  
    if (transactions.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5">No transactions found for ' + walletIdentifier + '.</td></tr>';
      return;
    }
   
    transactions.forEach(tx => {

        if (Number(tx.value) === 0) {
            return; // Skip transactions with zero value
          }

      const row = document.createElement('tr');
      const transactionDate = new Date(tx.timeStamp * 1000);
      const formattedDate = `${padZero(transactionDate.getDate())}/${padZero(
        transactionDate.getMonth() + 1
      )}/${transactionDate.getFullYear()} ${padZero(transactionDate.getHours())}:${padZero(
        transactionDate.getMinutes()
      )}:${padZero(transactionDate.getSeconds())}`;
  
      const formattedValue = Number(tx.value) / 10 ** 18; // Assuming 18 decimal places for the value
      const localeFormattedValue = formattedValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 18 });
  
      const transactionType = analyzeTransaction(tx); // Determine the transaction type
      const txInput = tx.input.toLowerCase();
      const fromName = findName(tx.from);
      const toName = findName(tx.to);

  
      row.innerHTML = `
      <td>${formattedDate}</td>
      <td>${fromName}</td>
      <td>${toName}</td>
      <td>${localeFormattedValue}</td>
      <td>${tx.gasUsed*tx.gasPrice}</td>
      `;
      tbody.appendChild(row);
    });
  }

  function findName(walletAddress) {
    const name = addressesToName.get(walletAddress.toLowerCase());
    if (name == null)
    {
      return walletAddress;
    }
    else
    {
      return name + '  [' + walletAddress.slice(0,8) + ']';
    }
  }

  function padZero(number) {
    return number.toString().padStart(2, '0');
  }
  
  
  function analyzeTransaction(tx) {
    const input = tx.input.toLowerCase();
  
    // Check if the transaction input data contains known function signatures
    if (input.includes('swap') || input.includes('trade') || input.includes('exchange')) {
      return 'Token Exchange';
    }
  
    // Otherwise, consider it as a deposit or regular token transfer
    return 'Deposit or Transfer';
  }
  