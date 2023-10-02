import styles from "./request.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai"




export function Request(){
    return(
        <div className={styles.request}>
            <form>
                <input 
                className={styles.input}
                type="text"
                placeholder="Adicione uma Nova Tarefa" 
                
                />

                <button type="submit" className={styles.button}>Criar <AiOutlinePlusCircle/></button>
            </form>
            
        </div>
    )
}