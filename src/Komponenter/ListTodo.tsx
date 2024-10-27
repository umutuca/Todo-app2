import React from 'react';
import ItemTodo from './ItemTodo'; 

type ListTodoProps = {
 uppgifter: { id: number, text: string, completed: boolean }[]; 
  checkboxFinish: (id: number) => void;                     // Funktion för att växla status
};

const ListTodo: React.FC<ListTodoProps> = ({ uppgifter, checkboxFinish }) => {
  return (
<div className="todo-listan">
  {uppgifter.map(uppgift => (
    <ItemTodo key={uppgift.id} uppgift={uppgift} checkboxFinish={checkboxFinish} />
  ))}
</div>
  );
};

export default ListTodo;
