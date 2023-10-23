import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Organiser from './interfaces/Organiser';
import { Button, Modal, Table } from "react-bootstrap";

const App: React.FC = () => {
  const testy = "AAAA";
  const [orgs, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/organisers');
        console.log('Response data:', response.data.organisers);
        setData(response.data.organisers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
        <h2>Organisation list</h2>
        
        {Array.isArray(orgs) && orgs.length > 0 ? (
          <Table striped bordered hover>
          <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {orgs.map((channel) => (
              <tr key={channel.id}>
              <td>{channel.id}</td>
              <td>{channel.name}</td>
              <td>{channel.phoneNumber}</td>
              <td>{channel.email}</td>
              <td>
                  <Button>
                      View
                  </Button>
              </td>
              </tr>
          ))}
          </tbody>
          </Table>  
        ) : (
          <p>No data available</p>
        )}

        </div>
  );
};

export default App;
