import './style.css'

import { createRoot } from 'react-dom/client';

import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';


const App = () => {
  const taskData = [
    {description: 'Completed task', createdTime: 'created 17 seconds ago', id: 1},
    {description: 'Editing task', createdTime: 'created 5 minutes ago', id: 2},
    {description: 'Active task', createdTime: 'created 5 minutes ago', id: 3}
  ];
  return ( 
    <section className='todoapp'>
      <header className='header'>
      <h1>todos</h1>
      <NewTaskForm />
      </header>
      <section className='main'>
        <TaskList taskData = {taskData}/>
        <Footer/>
      </section>
    </section>
  );
};



const root = document.getElementById('root');
createRoot(root).render(<App />);