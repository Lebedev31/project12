import '../FormToodoList/FormToodoList.scss'
import {useState, useRef, useEffect} from 'react';

function FormToodoList({setAreaText, setInputText, setColorBorder, addTask}){
    const [inputValue, setInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    const [disable, setDisable] = useState(true);
    
    useEffect(()=>{
        setInputText(inputValue);
        setAreaText(textAreaValue);
    }, [inputValue, textAreaValue])
    
  
    if(inputValue === 50){
        alert('Нельзя вводить название больше 50 символов');
    }

    if(textAreaValue === 150){
        alert('Нельзя вводить название больше 150 символов');
    }


    const inputBorder = useRef();
    const areaBorder = useRef();

    function colorChange(e, color){
       e.preventDefault();
       inputBorder.current.style =`border: 3px solid ${color}`;
       areaBorder.current.style = `border: 3px solid ${color}`;
       setColorBorder(color);
       setDisable(false);
    }

    function dis(){
        if(disable == true){
           alert('Выберите тип задачи');
        }
    }
    return(
            <form className='formToodoList'>
                <h2 className='formToodoList__header'>Что вы планируете на сегодня?</h2>
                <h2 className='formToodoList__type'>Выберите тип задачи</h2>
                <div className='formToodoList__btn-grup' >
                    <button 
                        onClick={(e)=> colorChange(e, 'red')}
                        className="formToodoList__btn-item">Важная задача</button>
                    <button 
                        onClick={(e)=> colorChange(e, 'rgb(35, 193, 17)')}
                        className="formToodoList__btn-item">Повседневность</button>
                    <button 
                        onClick={(e)=> colorChange(e,'rgb(145, 147, 170)')}
                        className="formToodoList__btn-item">Неважные задачи</button>
                </div>
                <div className="formToodoList__info">
                    <input 
                        onClick={dis}
                        value={inputValue}
                        ref={inputBorder}
                        maxLength='50'
                        onChange={(e)=>{setInputValue(e.target.value) }}
                        className='formToodoList__title' 
                        type="text" 
                        placeholder='Введите заголовок задачи' />
                    <textarea 
                        onClick={dis}
                        ref={areaBorder}
                        onChange={(e)=>{setTextAreaValue(e.target.value)}}
                        value={textAreaValue}
                        className='formToodoList__description' 
                        placeholder='Введите описание задачи'>
                    </textarea>
                </div>
                
                <button className="formToodoList__main-btn"
                        disabled={disable}
                        onClick={addTask}>Добавить в список задач</button>
            </form>
        
    )
}

export default FormToodoList;