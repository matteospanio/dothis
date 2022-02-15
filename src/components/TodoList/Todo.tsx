import { useParams } from "react-router-dom";
import { tasks } from "../../constants/faker";

export default function Todo() {
  const { id } = useParams();
  const uid = id as string;
  const tasksTodo = tasks.filter((task) => task.todoId === parseInt(uid));

  return (
    <div>
      <ul>
        {tasksTodo.map((task) => {
          return <li key={task.id}>{task.description}</li>;
        })}
      </ul>
    </div>
  );
}
