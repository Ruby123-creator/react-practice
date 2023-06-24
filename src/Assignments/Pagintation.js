// Develop a paginated list view that shows items fetched from an API or a mock dataset. Implement a pagination system through which users can navigate between pages. Also, display the number of items per page. Use React state, components and hooks to manage the data and user interactions.

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pagintation = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setData(response.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Calculate the indexes of the current page's items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Paginated List</h1>

      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <div>
        {/* Pagination buttons */}
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => index + 1).map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
          </button>
        ))}
      </div>

      <div>
        {/* Items per page selector */}
        <label>
          Items per page:
          <select value={itemsPerPage} onChange={(e) => setItemsPerPage(parseInt(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Pagintation;
