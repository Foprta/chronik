import React, {useState} from "react";
import {invoke} from "@tauri-apps/api/tauri";
import styles from './index.module.scss'

const App: React.FC = () => {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", {name}));
  }

  return (
    <div className={styles.test}></div>
  );
}

export default App;