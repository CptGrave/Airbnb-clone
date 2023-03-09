import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card'
import data from './components/data'

function App() {

const cardElements = data.map(el=>{
  return <Card 
               key={el.id}
               img={el.coverImg}
               rating={el.stats.rating} 
               reviewCount={el.stats.reviewCount}
               location={el.location} 
               title={el.title}
               price={el.price}
               openSpots={el.openSpots}
               />
})

  return (
    <div className="App">
      <Navbar />
      <Main />
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  );
}

export default App;
