let apiQuotes = [];
// Get quotes from API

async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
  } catch (error) {
    // Catch error here
  }
}

// On load
getQuotes();