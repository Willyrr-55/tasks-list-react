import logo from './logo.svg';
import './App.css';
import TaskList from './components/TasksList';

function App() {
  return (
    <div className="aplication-tasks">
      <div className='list-tasks-principal'>
        <h1>My Tasks</h1>
          <TaskList/>
      </div>
    </div>
  );
}

export default App;
