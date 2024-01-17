import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskCard } from '../../../../presentation/components/cards/TaskCard';

describe('Task Card tests', () => {

    it('renders correctly', () => {
        render(
            <TaskCard id={0} task={''} deleteTask={() => {} }  />,
        );
        expect(true).toBeTruthy();
    });

    it('shoud find the text Task', () => {
        render(
            <TaskCard id={0} task={'test'} deleteTask={() => {} }  />,
        );
        expect(screen.getByText('test')).toBeInTheDocument();
    })

    it('Should test the function deleteTask', () => {
        const deleteTask = jest.fn();
        render(
            <TaskCard id={0} task={'test'} deleteTask={deleteTask}  />,
        );
        expect(deleteTask).toHaveBeenCalledTimes(0);
    });
});