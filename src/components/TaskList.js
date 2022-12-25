import './TaskList.css'
import Task from "./Task";

const TaskList = ({taskData}) => {
    const taskItem = taskData.map((item) => {
        const {id, ...itemValue } = item;
        return (
            <li key={id}>
            <Task {...itemValue}/>
            </li>
        )
    })
    return (
        <ul className='todo-list'>
            { taskItem }
        </ul>
    )
}

export default TaskList;