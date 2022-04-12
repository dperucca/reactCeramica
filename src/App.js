import './App.css';
import NavBar from './components/NavBar/NavBar' ;
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailcontainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'items'}/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
