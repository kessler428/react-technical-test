import { ChangeEvent, useState } from "react";
import { Input } from "../../components/input";
import { ButtonSaveTask } from "../../components/button";
import { TaskCard } from "../../components/cards/TaskCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodo, deleteTodo } from "../../redux/slices/task/taskSlice";
import { TaskInterface } from "../../../domain/interfaces/TaskInterface";

export const TaskScreen = () => {

    // Create the state for to handle the input value
    const [writedTask, setWritedTask] = useState('');

    // Create the state for to handle the list of tasks in the store
    const listTask = useAppSelector((state) => state.tasks);

    // Create the dispatch for to handle the actions in the store
    const dispatch = useAppDispatch();

    return (
        <div className="p-8 w-full">
            <div className="flex h-10 gap-4">
                <Input
                    type="text"
                    value={writedTask}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setWritedTask(e.target.value)}
                />
                <ButtonSaveTask
                    onClick={() => {

                        // If the input is empty, return
                        if (writedTask.trim().length === 0) return;

                        // Dispatch the action for to add a new task
                        dispatch(addTodo({id: Math.random(), task: writedTask}))

                        // Reset the input value
                        setWritedTask('');

                    }}
                />
            </div>
            {
                listTask.map((item: TaskInterface) => TaskCard({ ...item, deleteTask: () => dispatch(deleteTodo(item.id)) }))
            }
        </div>
    );
};