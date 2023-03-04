import { useEffect, useState } from 'react';
import './App.css';
import Suppliers from './Suppliers'
import PostSupplier from './PostSupplier';

function App() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadData() }, [])

  const loadData = () => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((res) => res.json())
      .then((resData) => {
        setSuppliers(resData)
      });
    setLoading(false);
  }
  return (
    <div className="App">
      <PostSupplier
        loadData={loadData}
        setLoading={setLoading}
      />
      <Suppliers
        loadData={loadData}
        setLoading={setLoading}
        loading={loading}
        suppliers={suppliers}
      />
    </div>
  );
}

export default App;
