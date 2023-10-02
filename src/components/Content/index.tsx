import styles from "./content.module.css";
import { BsClipboard } from "react-icons/bs";
import { PiTrashBold } from "react-icons/pi";
import { useState } from "react";


export function Content() {
    
        const [isChecked, setIsChecked] = useState(false);
        const handleCheckboxChange = () => {
          setIsChecked(!isChecked);
        };
        
    return (
        <main className={styles.main}>
            <div className={styles.infos}>
                <div className={styles.info}>
                    <strong>Tarefas Criadas</strong>
                    <span>1</span>
                </div>

                <div className={styles.info}>
                    <strong className={styles.blue}>Concluidas</strong>
                    <span>1 de 1</span>
                </div>
            </div>

            <div className={styles.noContent}>
                <BsClipboard size={50} />
                <div>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>

            </div>

            <div className={styles.content}>
                <input
                     className={styles.check}
                     type="checkbox"
                     id="checkbox"
                     checked={isChecked}
                     onChange={handleCheckboxChange} 
                    />
                <label htmlFor="checkbox"></label>

                <p 
                   className={`${styles.task} ${isChecked ? styles.checkedInput : ''}`}
                >
                    content content content content content
                </p>

                <button className={styles.trash}><PiTrashBold size={20} /></button>
            </div>

        </main>
    )
}