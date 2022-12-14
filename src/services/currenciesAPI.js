const currenciesURL = 'https://economia.awesomeapi.com.br/json/all';

const fetchAPI = async () => {
  const response = await fetch(currenciesURL);
  const data = await response.json();
  return data;
};

export default fetchAPI;
