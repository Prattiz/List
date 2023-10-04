import styles from "./content.module.css";
import { BsClipboard } from "react-icons/bs";
import { PiTrashBold } from "react-icons/pi";
import { OfTask } from "../../page/App";

interface OfContents{
    contents: OfTask[],
    setContents: (value: React.SetStateAction<OfTask[]>) => void,
}

export function Content({contents, setContents}: OfContents) {
 

  const handleCheckboxChange = (index: any) => {
    const updatedContents = [...contents];
    updatedContents[index].isChecked = !updatedContents[index].isChecked;
    setContents(updatedContents);
  };

  const handleDeleteTask = (index: number) => {
    setContents(prev => prev.filter((_ , inx) => index !== inx))
  }

  return (
    
    <main className={styles.main}>
      <div className={styles.infos}>
        <div className={styles.info}>
          <strong>Tarefas Criadas</strong>
          <span>{contents.length}</span>
        </div>

        <div className={styles.info}>
          <strong className={styles.blue}>Concluídas</strong>

          {
            contents.length? 
            <span>
              {contents.filter((content) => content.isChecked).length} de{" "}
              {contents.length}
            </span>
            :
            <span>0</span>
          }

        </div>
      </div>

      {
        contents.length? 

        contents.map((content, index) => (
            <div className={styles.content} key={index}>
            <input
                className={styles.check}
                type="checkbox"
                id={`checkbox${index}`}
                checked={content.isChecked}
                onChange={() => handleCheckboxChange(index)}
            />
            <label htmlFor={`checkbox${index}`}></label>

            <p className={`${styles.task} ${content.isChecked ? styles.checkedInput : ''}`}>
                {content.text}
            </p>

            <button onClick={() => handleDeleteTask(index)} className={styles.trash}><PiTrashBold size={20}/></button>
            </div>

      ))

      : 
        <div className={styles.noContent}>
            <BsClipboard size={50} />
            <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    }
    </main>
  );
}
