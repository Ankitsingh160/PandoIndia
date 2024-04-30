import { useState } from 'react'
import './App.css'
import Fill from './components/FillDetails'
import Show from './components/ShowDetails'


function App() {
  const [receivedData, setReceivedData] = useState(false);

  // Callback function to receive data from child
  const receiveDataFromChild = (data) => {
    setReceivedData(data);
  };
  return (
    <>
      <div className="main">
        <Fill data={{"dt": receivedData,
    "fnc": setReceivedData}} />
        <Show val={receivedData}/>
      </div>
    </>
  )
}

export default App