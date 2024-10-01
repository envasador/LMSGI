import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function App() {
  const initialTodos = [
    { id: 1, text: "Aprender React" },
    { id: 2, text: "Aprender Js" },
    { id: 3, text: "Aprender Vue" },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const handleonDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    const startIndex = source.index;
    const endIndex = destination.index;

    reorder(startIndex, endIndex);
  };

  const reorder = (startIndex, endIndex) => {
    const result = [...todos];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setTodos(result);
  };

  return (
    <DragDropContext onDragEnd={handleonDragEnd}>
      <h1>Drag & Drop</h1>
      <Droppable droppableId="droppable-1">
        {(droppableProvided) => (
          <ul
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
                {(dragableProvided) => (
                  <li
                    ref={dragableProvided.innerRef}
                    {...dragableProvided.draggableProps}
                    {...dragableProvided.dragHandleProps}
                  >
                    {todo.text}
                  </li>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
