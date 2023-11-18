import { Droppable } from "react-beautiful-dnd";
import { Todos } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

const TodoList: React.FC<Todos> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver?"dragActive":""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="todos_heading"> Active Tasks</h3>
            {todos.map((todo,index) => (
              <SingleTodo
              index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided ,snapshot) => (
          <div
            className={`todos remove ${snapshot.isDraggingOver?"dragComplete":""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="todos_heading"> Completed Tasks</h3>
            {completedTodos.map((todo,index) => (
              <SingleTodo
              index={index}
                todo={todo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
