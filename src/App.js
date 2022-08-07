import logo from './logo.svg';
import './App.css';
import Task from './components/Tasks'

function App() {
  return (
    <div className="aplication-tasks">
      <div className='list-tasks-principal'>
        <h1>My Tasks</h1>
          <Task text='Learn React'/>
      </div>
    </div>
  );
}

export default App;
