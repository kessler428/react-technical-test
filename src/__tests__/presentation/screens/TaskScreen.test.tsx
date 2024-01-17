import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskScreen } from '../../../presentation/screens/tasks/TaskScreen';
import { Provider } from 'react-redux';
import { store } from '../../../presentation/redux/store';


describe('TaskScreen tests', () => {

    it('renders correctly', () => {
        render(
            <Provider store={store}>
                <TaskScreen />,
            </Provider>
        );
        expect(true).toBeTruthy();
    }); 

    it('Should find input', () => {
        render(
            <Provider store={store}>
                <TaskScreen />,
            </Provider>
        );

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    }); 

    it('Should find button', () => {
        render(
            <Provider store={store}>
                <TaskScreen />,
            </Provider>
        );

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

});