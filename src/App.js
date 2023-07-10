import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import {Todo} from './components/todo'

function App() {
  return (
    <div className="App-todos">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo'/>
      </div>
      <div className='main-task-list'>
        <h1>My tasks</h1>
        <Todo text='Aprender React.js'/>
      </div>
    </div>
  );
}

export default App;
