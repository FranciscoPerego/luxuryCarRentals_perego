import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PEREGO LUXURY CAR RENTALS</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      < section>
      <h2>Bienvenido al mejor alquiler de autos exóticos y de lujo</h2>
        <ul>
           <li>Mercedes-Benz AMG G63 2021</li>
           <li>Lamborghini Aventador Orange</li>
           <li>Ferrari Portofino Spyder 2021 Red</li>
        </ul>
      </section>
    </div>
  );
}

export default App;

