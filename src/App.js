import { useState } from 'react'
import data from './data.js'
import Title from './components/Title'
import Cards from './components/Cards'

function App() {

  // State
  const qA = useState(data)

  return (
    <div className="App">
      <div className="main">
        <Title />
        <Cards />
      </div>
    </div>
  );
}

export default App;
