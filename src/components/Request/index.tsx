import styles from "./request.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";



export function Request({ handleCreateNewTask }: any){

    const [newTask, setNewTask] = useState('');
    
    function handleCreate(){
        setNewTask(newTask)
        handleCreateNewTask({ text:newTask, isChecked:false })
    }
    
    return(
        <div className={styles.request}>
            <form onSubmit={handleCreateNewTask}>
                <input 
                className={styles.input}
                type="text"
                placeholder="Adicione uma Nova Tarefa" 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                />

                <button type="button" onClick={handleCreate} className={styles.button}>Criar <AiOutlinePlusCircle/></button>
            </form>
        </div>
    )  
}