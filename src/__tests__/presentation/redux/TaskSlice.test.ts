import { taskSlice } from "../../../presentation/redux/slices/task/taskSlice";

describe('taskSlice', () => {
    let initialState: any;

    beforeEach(() => {
        initialState = [];
    });

    it('should handle addTodo', () => {
        const todo = { id: 1, task: 'Buy groceries' };
        const action = taskSlice.actions.addTodo(todo);
        const state = taskSlice.reducer(initialState, action);
        expect(state).toEqual([todo]);
    });

    it('should handle deleteTodo', () => {
        const todos = [
            { id: 1, task: 'Buy groceries' },
            { id: 2, task: 'Clean the house' },
        ];
        const action = taskSlice.actions.deleteTodo(1);
        const state = taskSlice.reducer(todos, action);
        expect(state).toEqual([{ id: 2, task: 'Clean the house' }]);
    });
});