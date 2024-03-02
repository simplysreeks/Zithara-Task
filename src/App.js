import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file for styling

function App() {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  useEffect(() => {
    axios.get('/api/customers')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filtered and sorted customers based on search term and sort by options
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.location.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'date') {
      const dateA = new Date(a.created_at.split(' ')[0]);
      const dateB = new Date(b.created_at.split(' ')[0]);
      // Reverse the comparison to sort in descending order
      return dateB - dateA;
    } else if (sortBy === 'time') {
      const timeA = new Date(a.created_at.split(' ')[1]);
      const timeB = new Date(b.created_at.split(' ')[1]);
      // Reverse the comparison to sort in descending order
      return timeB - timeA;
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredCustomers.slice(indexOfFirstRecord, indexOfLastRecord);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="title">Customer List</h1>
      <input
        type="text"
        placeholder="Search by name or location"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <select onChange={e => setSortBy(e.target.value)} className="sort-dropdown">
        <option value="">Sort by</option>
        <option value="date">Date</option>
        <option value="time">Time</option>
      </select>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Created Date</th>
            <th>Created Time</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((customer, index) => (
            <tr key={customer.id}>
              <td>{indexOfFirstRecord + index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.age}</td>
              <td>{customer.phone}</td>
              <td>{customer.location}</td>
              <td>{new Date(customer.created_at).toLocaleDateString()}</td>
              <td>{new Date(customer.created_at).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredCustomers.length / recordsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
}

export default App;