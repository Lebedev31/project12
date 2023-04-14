import '../TaskBarItem/TaskBarItem.scss'

function TaskBarItem({inputText, areaText, color, onDeleteElement, id}){
    return(
        <div className='taskBarItem' style={{background: color}}>
            <h2>{inputText}</h2>
            <div className='taskBarItem__descr'>{areaText}</div>
            <div className='taskBarItem__close'
                 onClick={()=> onDeleteElement(id)}></div>
        </div>
    )
}

export default TaskBarItem;