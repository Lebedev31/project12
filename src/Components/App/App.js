import '../../style/container.scss';
import { useState} from 'react';
import '../App/App.scss';
import nextId from "react-id-generator";
import FormToodoList from '../FormToodoList/FormToodoList';
import TaskBar from '../TaskBar/TaskBar';

function App(){
    const [inputText, setInputText] = useState('');
    const [areaText, setAreaText] = useState('');
    const [colorBorder, setColorBorder] = useState('');
    const [task, setTask] = useState([]);
    const [filter, setFilter] = useState('let');
    
    function addTask(e){
        e.preventDefault();
        const stateProps = {
            inputText,
            areaText, 
            colorBorder,
            id: nextId()
        }
     return setTask(task.concat(stateProps));
    }
    const copyTask = [...task];
    
    const filterMenedger = (filter)=>{

      if(filter === 'red'){
        return copyTask.filter(item => item.colorBorder === filter)
      }
      if(filter === 'rgb(35, 193, 17)'){
        return copyTask.filter(item => item.colorBorder === filter)
      }
       if(filter === 'rgb(145, 147, 170)'){
        return copyTask.filter(item => item.colorBorder === filter)
      }
        if(filter === 'all'){
        return copyTask.filter(item => item.colorBorder === filter)
      }
       if(filter === 'let'){
        return copyTask;
         }
    }
       
   
   function stateFilter(filter){
       setFilter(filter);
   }
    
const mainData = filterMenedger(filter);

function onDeleteElement(id){
   setTask(task.filter(item => item.id !== id))
}
ffjf
    return (
        <div className='container'>
             <h1>Приложение списка дел</h1>
             <div className='app__flex'>
                <FormToodoList  setInputText={setInputText}
                                setAreaText={setAreaText}
                                setColorBorder={setColorBorder}
                                addTask={addTask}/>
                <TaskBar mainData={mainData} 
                         stateFilter={stateFilter}
                         onDeleteElement={onDeleteElement}/>
             </div>
             
        </div>
    )
}

export default App;