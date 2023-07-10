import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'

function App() {
  return (
    <div className="App-todos">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo'/>
      </div>
      <div className='main-task-list'>
        <h1>My tasks</h1>
      </div>
    </div>
  );
}

export default App;
