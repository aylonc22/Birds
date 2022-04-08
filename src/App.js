import React,{ useState} from 'react';
import useBirds from './services/useBirds';
import Birds from './components/birds/birds';
import SelectedBird from './components/selectedBird/selectedBird';
import './App.css';

function App() {
  const [page,setPage] = useState(1);
  const {loading,error,birds} = useBirds(page);
  const [selectedBird,setSelectedBird] = useState("");
  return (
    <div className="App">      
      <div className='page'>
        <Birds setSelectedBird={(bird=>setSelectedBird(bird))} setPage={()=>setPage(page=>page + 1)} loading={loading} error={error} birds={birds}/>
        <SelectedBird bird={selectedBird}/>
      </div>
    </div>
  );
}

export default App;
