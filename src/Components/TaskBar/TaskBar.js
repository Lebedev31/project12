import '../TaskBar/TaskBar.scss'
import TaskBarItem from '../TaskBarItem/TaskBarItem';
function TaskBar({mainData, stateFilter, onDeleteElement}){

  const element = mainData.map((item) =>{
        return <TaskBarItem
                        key={item.id}
                        color={item.colorBorder}
                        inputText={item.inputText}
                        areaText={item.areaText}
                        onDeleteElement={onDeleteElement}
                        id={item.id}/>
    })
  
    return(
        <div className="taskBar">
            <div className='taskBar__filter'>
                <button onClick={() =>stateFilter('red')}>важная задача</button>
                <button onClick={() =>stateFilter('rgb(35, 193, 17)')}>повседневность</button>
                <button onClick={() =>stateFilter('rgb(145, 147, 170)')}>неважная</button>
                <button onClick={() =>stateFilter('all')}>удалить </button> 
                <button onClick={() =>stateFilter('let')}>вернуть</button> 
            </div>
            <div className="taskBar__panel">
                {element}
            </div>
        </div>

    )
      

}

export default TaskBar;