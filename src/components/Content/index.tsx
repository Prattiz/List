import styles from "./content.module.css";
import { BsClipboard } from "react-icons/bs"


export function Content(){
    return(
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

            <div className={styles.content}>
                <BsClipboard size={50}/>
                <div>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
                
            </div>

        </main>
    )
}