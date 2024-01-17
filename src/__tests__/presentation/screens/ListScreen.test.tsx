import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../../presentation/redux/store';
import { ListScreen } from '../../../presentation/screens/list/ListScreen';

describe('ListScreen tests', () => {
    it('renders correctly', () => {

        jest.spyOn(store, 'getState').mockReturnValue({
            users: { isLoading: false, hasFailedToLoad: false, listSlice: [] },
            tasks: []
        });

        render(
            <Provider store={store}>
                <ListScreen />,
            </Provider>
        );
        expect(true).toBeTruthy();
    });

    it('should render loader when loading', () => {

        jest.spyOn(store, 'getState').mockReturnValue({
            users: { isLoading: true, hasFailedToLoad: false, listSlice: [] },
            tasks: []
        });

        render(
            <Provider store={store}>
                <ListScreen />,
            </Provider>
        );
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    it('should render error component when failed to load', () => {
        jest.spyOn(store, 'getState').mockReturnValue({
            users: { isLoading: false, hasFailedToLoad: true, listSlice: [] },
            tasks: []
        });
    
        render(
            <Provider store={store}>
                <ListScreen />,
            </Provider>
        );
        expect(screen.getByTestId('endpoint-error')).toBeInTheDocument();
    });

    it('should render user cards when loaded successfully', async () => {

        const mockUsers = [
            { id: '1', name: 'John Doe', avatar: 'https://i.pravatar.cc/300?u=1', createdAt: '2021-01-01'},
            { id: '2', name: 'Jane Smith' , avatar: 'https://i.pravatar.cc/300?u=2', createdAt: '2021-01-01'},
        ];
    
        jest.spyOn(store, 'getState').mockReturnValue({
            users: { isLoading: false, hasFailedToLoad: false, listSlice: mockUsers },
            tasks: []
        });
    
        await act(async () => {
            render(
                <Provider store={store}>
                    <ListScreen />,
                </Provider>
            );
        });
    
        mockUsers.forEach((user) => {
            expect(screen.getByText(user.name)).toBeInTheDocument();
        });
    });
});