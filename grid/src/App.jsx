import { useState } from 'react';
import './App.css';
import Header from './header/header';
import Writing from './writing/writing';

function App() {
  const [data, setData] = useState([{
    id: 1,
    title: "강남역 맛집",
    like : 4,
    description: "lorem203z is  used  as the title of the article.",  
  },
  {
    id: 2,
    title: "신발 추천",
    like : 3,
    description: "lorem203z is  used  as the title of the article.",  
  },
  {
    id: 3,
    title: "게임 잘하는 법",
    like : 2,
    description: "lorem203z is  used  as the title of the article.",  
  }
]);
  return (
    <div>
      <Header/>
      <Writing data={data}/>
    </div>
  );
}

export default App;
