import { Header } from "../components/Header";
import { Request } from "../components/Request";
import { Content } from "../components/Content";
import { useState } from "react";

export interface OfTask {
  text: string,
  isChecked:boolean,
}
export function App() {

  const [contents, setContents] = useState<OfTask[]>([]);


  function handleCreateNewTask({ text, isChecked}: OfTask){
    setContents([...contents, {text, isChecked}])
}

  return (
    <div>
      <Header/>

      <main>
          <Request handleCreateNewTask = {handleCreateNewTask}/>
          
          <Content contents = {contents} setContents= {setContents}/>
      </main>
    
    </div>
  )
}

