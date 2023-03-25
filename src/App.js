import NavBar from './components/NavBar/NavBar'
import SimpleSlider from './components/HomeView/SimpleSlider/SimpleSlider';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer'


import './css/main.scss';

function App() {
  const saludo = "¡Welcome to Raíces Locales! The best place to buy your favourites handmades products.";
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={saludo}/>
      <SimpleSlider />
    </>
  );
}

export default App;
