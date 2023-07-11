/**
 * IMPORTS
 */
import { useState } from "react";
import { Button } from "../button";
import axios from "axios";

interface ITaskDataProps {
  id: string;
  title: string;
}
const Tasks = () => {
  const [tasks, setTasks] = useState<ITaskDataProps[]>([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleGetAllTasks = async () => {
    try {
      setTaskLoading(true);
      const responseTasks = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      setTasks(responseTasks.data);
      setTaskLoading(false);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Task De API</h1>
      <Button
        disabled={false}
        title="Buscar atividades"
        onClick={() => handleGetAllTasks()}
      />

      <>
        {taskLoading ? (
          <p>carregando...</p>
        ) : (
          <>
            {tasks.length > 0 &&
              tasks.map((task: ITaskDataProps, index) => (
                <p key={task.id}>{task.title}</p>
              ))}
          </>
        )}
      </>

      {errorMessage ?? <p>{errorMessage}</p>}
    </div>
  );
};

/**
 * EXPORTS
 */
export { Tasks };
