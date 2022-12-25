import './Task.css'

const Task = ({description, createdTime, id}) => { 
    return (
        
            <div className = 'completed'>
                <div className = 'view'>
                    <input className = 'toggle' type='checkbox'/>
                    <label>
                    <span className = 'description'>{description}</span>
                    <span className = 'created' >{createdTime}</span>
                    </label>
                    <button className = 'icon icon-edit'></button>
                    <button className = "icon icon-destroy"></button>
                </div>
            </div>
    )
    };

export default Task;