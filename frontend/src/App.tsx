import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001');
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default App;
