import React, { useState } from 'react';

type InputTodoProps = {
  addUppgift: (text: string) => void; 
};

const InputTodo: React.FC<InputTodoProps> = ({ addUppgift }) => {
  const [newUppgift, setNewUppgift] = useState(''); 


  const handleAddUppgift = () => {
    if (newUppgift === '') return; 
    addUppgift(newUppgift);                  
    setNewUppgift('');                    
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Skriv din todo här..."
        value={newUppgift}
        onChange={(e) => setNewUppgift(e.target.value)} 
      />
      <button onClick={handleAddUppgift}>Lägg till</button> 
    </div>
  );
};

export default InputTodo;
