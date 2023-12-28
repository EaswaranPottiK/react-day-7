import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Filter from './Filter';
import OneCard from './OneCard';
import Data from './Data'

function App() {

  function handleSetStar(rating){
      if(rating==='4'){
          return('⭐⭐⭐⭐')
      }
      else{
        return('⭐⭐⭐⭐⭐')
      }
      
  }
  return (
    <div>
      <Header />
      <Filter/>
      
      <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',paddingLeft:'1%',paddingRight:'1%'}}>
      {
        Data.map((item,count) => (
           
            <OneCard name={item.name} rating={handleSetStar(item.rating)} postcode={item.postcode} type={item.type} address={item.address}/>
          ))
      }
      </div>
      
    </div>
  );
}

export default App;
