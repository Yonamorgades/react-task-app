import React from 'react';
import { useState, useEffect } from 'react';
import TaskRow from './components/TaskRow';
import TaskBanner from './components/TaskBanner';
import TaskCreator from './components/TaskCreator';
import VisibilityControl from './components/VisibilityControl';



function App() {

  const [userName,
    setUserName] = useState('Jhon Doe');
  
  const [showCompleted,
    setShowCompleted] = useState(true);

    const [taskItems,
    setTaskItems] = useState([
      {
        name: 'Send mail',
        done: true
      }, {
        name: 'Scroll tw',
        done: false
      }, {
        name: 'Buy Milk',
        done: true
      }
    ]);
  
    useEffect(() =>{
      let data = localStorage.getItem('tasks');
      if(data != null){
        setTaskItems(JSON.parse(data))
      }
      else{
        setUserName('Name example')
        setTaskItems([ {
          name: 'Send example',
          done: true
        }, {
          name: 'Scroll Example',
          done: false
        }, {
          name: 'Buy Milk Example',
          done: true
        }])
      }
    },[]);

    useEffect(() =>{
      localStorage.setItem('tasks', JSON.stringify(taskItems))
    },[taskItems]);
  
    const  createNewTask = taskName => {
    if(!taskItems.find(t => t.name === taskName)){
      setTaskItems([...taskItems,{name: taskName, done: false}])
    }
  }
  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t,done:!t.done}:t)))

  const taskTableRows = (doneValue) => 
  
  taskItems.filter(task => task.done === doneValue)
  .map((task) =>
    <TaskRow task={task}  key = {task.name} toggleTask={toggleTask}></TaskRow>    
  );

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems}></TaskBanner>
      <TaskCreator callback={createNewTask}></TaskCreator>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl description = "Completed Tasks" isChecked={showCompleted} callback={checked => setShowCompleted(checked)}></VisibilityControl>
      </div>
      {showCompleted && (
        <table className="table table-striped table-bordered"> 
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(true)}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;