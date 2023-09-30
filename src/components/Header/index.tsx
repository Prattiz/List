import styles from "./header.module.css";
import icon from "../../assets/iconTodo.svg";
import todo from "../../assets/todo.svg";

export function Header(){
    return(
        <header className={styles.header}>
            <img src={icon}/>
            <img src={todo} alt="todo" />
        </header>
    )
}