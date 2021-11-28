import React, {useState, useEffect} from 'react';
import './App.css';
import data from './component/data/trades.json';
import BarChart from './component/graphs/graphbar'
import LineChart from './component/graphs/graphline'
import Datatable from './component/datatable';


function App() {

  console.log(data)
  const [allData,setAllData] = useState([]);
  const [q,setQ]=useState([]);

  useEffect(() => {
    setAllData(data);
  }, []);

  const search = (rows) => {
    return rows.filter(row=>row.epic.toLowerCase().indexOf(q)>-1)
  }

  
  return (
    <div className="App">
      <h1>VWAP Application</h1>
      <div className="container-chart">
        <div className="chart">
          <LineChart/>
        </div> 
        <div className="chart">
          <BarChart/>
        </div> 
      </div>
      <div style={{ margin: '3% auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" value={q} onChange={(e) =>setQ(e.target.value)} />
      </div>
      <div className="container-table">
        <Datatable 
        data={search(allData)}
        />
      </div>
    </div>
  );
}

export default App;
