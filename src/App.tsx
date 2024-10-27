import React, { useState } from 'react';
import InputTodo from './Komponenter/InputTodo'; 
import ListTodo from './Komponenter/ListTodo';   
import './App.css'
import StorageTodo from './Komponenter/StorageTodo'

// Typ för en enskild uppgift
type Uppgift = {
  id: number;
  text: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [uppgifter, setUppgifter] = useState<Uppgift[]>([]); // State som håller alla uppgifter

  // Funktion för att lägga till en ny uppgift
  const addUppgift = (text: string) => {
    const newUppgift: Uppgift = {
      id: Date.now(),  // Skapar ett id
      text: text,      // där du skriver in som sparas senare
      completed: false // det börjar false sen ändras beroende på checkbox
    };
    setUppgifter([...uppgifter, newUppgift]); // Uppdaterar listan ifall ngt ändras
  };

  // det är toggle funk för att se ifall det ändras ekker inte
  const checkboxFinish = (id: number) => {
    setUppgifter(uppgifter.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h1>BEPPE'S TODO</h1>
      <InputTodo addUppgift={addUppgift} />
      <StorageTodo uppgifter={uppgifter} setUppgifter={setUppgifter} />
      <ListTodo uppgifter={uppgifter} checkboxFinish={checkboxFinish} />
    </div>
  );
};

export default App;
