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
        a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quas id sequi odio eum possimus dignissimos alias ad, repellendus distinctio, quaerat unde ratione. Esse nam nostrum inventore consectetur! Eos unde minus debitis numquam mollitia eveniet et, pariatur quasi reiciendis magnam nam voluptatum! Explicabo quasi, temporibus mollitia assumenda esse magnam ea.',
        buttonC: false
      },
      {
        id: 2,
        q: 'Where is Yu?',
        a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quas id sequi odio eum possimus dignissimos alias ad, repellendus distinctio, quaerat unde ratione. Esse nam nostrum inventore consectetur! Eos unde minus debitis numquam mollitia eveniet et, pariatur quasi reiciendis magnam nam voluptatum! Explicabo quasi, temporibus mollitia assumenda esse magnam ea.',
        buttonC: false
      },
      {
        id: 3,
        q: 'When is Yu?',
        a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quas id sequi odio eum possimus dignissimos alias ad, repellendus distinctio, quaerat unde ratione. Esse nam nostrum inventore consectetur! Eos unde minus debitis numquam mollitia eveniet et, pariatur quasi reiciendis magnam nam voluptatum! Explicabo quasi, temporibus mollitia assumenda esse magnam ea.',
        buttonC: false
      },
      {
        id: 4,
        q: 'How is Yu?',
        a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quas id sequi odio eum possimus dignissimos alias ad, repellendus distinctio, quaerat unde ratione. Esse nam nostrum inventore consectetur! Eos unde minus debitis numquam mollitia eveniet et, pariatur quasi reiciendis magnam nam voluptatum! Explicabo quasi, temporibus mollitia assumenda esse magnam ea.',
        buttonC: false
      },
      {
        id: 5,
        q: 'How Many is Yu?',
        a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quas id sequi odio eum possimus dignissimos alias ad, repellendus distinctio, quaerat unde ratione. Esse nam nostrum inventore consectetur! Eos unde minus debitis numquam mollitia eveniet et, pariatur quasi reiciendis magnam nam voluptatum! Explicabo quasi, temporibus mollitia assumenda esse magnam ea.',
        buttonC: false
      }
    ]
  )

  return (
    <div className="App">
      <div className="main">
        {console.log(qA)}
        <Title />
        <Cards qA={qA} />
      </div>
    </div>
  );
}

export default App;
