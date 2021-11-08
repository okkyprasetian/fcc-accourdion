import { useState } from 'react'
import Title from './components/Title'
import Cards from './components/Cards'

function App() {

  // State
  const [qA, setQA] = useState(
    [
      {
        id: 1,
        q: 'Who is Yu?',
        a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quas id sequi odio eum possimus dignissimos alias ad, repellendus distinctio, quaerat unde ratione. Esse nam nostrum inventore consectetur!',
        buttonC: false
      },
      {
        id: 2,
        q: 'Where is Yu?',
        a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quas id sequi odio eum possimus dignissimos alias ad, repellendus distinctio, quaerat unde ratione. Esse nam nostrum inventore consectetur!',
        buttonC: false
      },
      {
        id: 3,
        q: 'When is Yu?',
        a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quas id sequi odio eum possimus dignissimos alias ad, repellendus distinctio, quaerat unde ratione. Esse nam nostrum inventore consectetur!',
        buttonC: false
      },
      {
        id: 4,
        q: 'How is Yu?',
        a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quas id sequi odio eum possimus dignissimos alias ad, repellendus distinctio, quaerat unde ratione. Esse nam nostrum inventore consectetur!',
        buttonC: false
      },
      {
        id: 5,
        q: 'How Many is Yu?',
        a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quas id sequi odio eum possimus dignissimos alias ad, repellendus distinctio, quaerat unde ratione. Esse nam nostrum inventore consectetur!',
        buttonC: false
      }
    ]
  )

  // Set State
  const toggleAnswer = id => {
    const newQA = [...qA].map(obj => {
      if (obj.id !== id) return obj
      else {
        obj.buttonC = !obj.buttonC
        return obj
      }
    })

    setQA(newQA)
  }

  return (
    <div className="App">
      <div className="main">
        <Title />
        <Cards qA={qA} toggleAnswer={toggleAnswer} />
      </div>
    </div>
  );
}

export default App;
