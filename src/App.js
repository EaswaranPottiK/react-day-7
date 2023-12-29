import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Filter from './Filter';
import OneCard from './OneCard';
import Data from './Data'
import { useState } from 'react';

function App() {

  const [usefulData,setUsefulData] =useState(Data)

  function handleSetStar(rating){
      if(rating===1){
          return('⭐')
      }
      else if(rating===2){
        return('⭐⭐')
      }
      else if(rating===3){
        return('⭐⭐⭐')
      }
      else if(rating===4){
        return('⭐⭐⭐⭐')
      }
      else{
        return('⭐⭐⭐⭐⭐')
      }
      
  }

  const [searchKey, setSearchKey] = useState('')
  const [minRating,setMinRating] = useState(0);

  function search(e){
    if (e.target.type==='number'){
      setMinRating(e.target.value)
    }
    if (e.target.type==='text'){
      setSearchKey(e.target.value)
    }

    const filteredList = Data.filter((data)=>(
      data.name.toLowerCase().includes(searchKey.toLowerCase()) &&
      data.rating >= minRating
    ))
    setUsefulData(filteredList)
  }

  return (
    <div>
      <Header />
      <Filter search={search}/>
      
      <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',paddingLeft:'1%',paddingRight:'1%'}}>
      {
        usefulData.map((item,count) => (
           
            <OneCard name={item.name} rating={handleSetStar(item.rating)} postcode={item.postcode} type={item.type_of_food} address={item.address}/>
          ))
      }
      </div>
      
    </div>
  );
}

export default App;
