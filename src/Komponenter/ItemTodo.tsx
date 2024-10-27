import React from 'react';

type ItemTodoProps = {
  uppgift: { id: number, text: string, completed: boolean }; // Typ för en uppgift
  checkboxFinish: (id: number) => void;                  // Funktion för att markera uppgiften som klar
};

const ItemTodo: React.FC<ItemTodoProps> = ({ uppgift, checkboxFinish }) => {
  return (
    <div className="checkbox-todo">
      <input
        type="checkbox"
        checked={uppgift.completed} // Visar om uppgiften är avklarad
        onChange={() => checkboxFinish(uppgift.id)} // Växlar status för uppgiften
      />
      <span>
        {uppgift.text}
      </span>
    </div>
  );
};

export default ItemTodo;
