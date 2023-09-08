import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books';

//-------------------Fetch Top Books Or Category List-------------------------------------------------

async function fetchBooks(end_point) {
  return await axios.get(`${BASE_URL}/${end_point}`);
}

export { fetchBooks };
