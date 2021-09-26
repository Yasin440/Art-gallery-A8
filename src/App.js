import './App.css';
import Gallery from './components/Gallrey/Gallery';
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <div className="body">

        {/* header component */}
        <Header></Header>

        {/* gallery(body) component */}
        <Gallery></Gallery>
      </div>
    </div>
  );
}

export default App;
