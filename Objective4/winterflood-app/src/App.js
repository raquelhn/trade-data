import React, {useState, useEffect} from 'react';
import './App.css';
import data from './component/data/trades.json';
import VWAPPerStock from './component/data/VWAP_perStock.json';
import VWAPPerUniqStock from './component/data/VWAP_perUniqueStock.json';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import DynamicChart from './component/graphs/bar'
import Datatable from './component/datatable';


ChartJS.register(ArcElement, Tooltip, Legend);


function App() {

  console.log(data)
  const [allData,setAllData] = useState([]);
  const [q,setQ]=useState([]);
  const [chart, setChart] = useState({});

  
    
  
  
  useEffect(() => {
    setAllData(data);
  }, []);



  const search = (rows) => {
    return rows.filter(row=>row.epic.toLowerCase().indexOf(q)>-1)
  }

  
  
   //return result; //JavaScript object
  
  return (
    <div className="App">
      
      <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" value={q} onChange={(e) =>setQ(e.target.value)} />
      </div>
      <Datatable 
      data={search(allData)}
      />
     
    </div>
  );
}

export default App;
