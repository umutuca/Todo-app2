import { useEffect } from 'react';


type TodoStorageProps = {
  uppgifter: { id: number, text: string, completed: boolean }[]; 
  setUppgifter: (uppgifter: { id: number, text: string, completed: boolean }[]) => void; 
};

// Komponent för att hantera localStorage för todo-uppgifter
const TodoStorage: React.FC<TodoStorageProps> = ({ uppgifter, setUppgifter }) => {
  // Ladda uppgifter från localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setUppgifter(JSON.parse(storedTasks)); // Om det finns sparade uppgifter, uppdatera state
    }
  }, [setUppgifter]);

  // Spara uppgifter till localStorage när listan med uppgifter uppdateras
  useEffect(() => {
    if (uppgifter.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(uppgifter)); // Sparar uppgiftslistan i localStorage
    }
  }, [uppgifter]);

  return null; // den returnerar inget hanterar endast storage
};

export default TodoStorage;
