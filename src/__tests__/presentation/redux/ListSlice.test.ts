import { addListOfUsers, listSlice, updateFailedState, updateLoadingState } from "../../../presentation/redux/slices/list/listSlice";


describe('listSlice', () => {
    let initialState: any;

    beforeEach(() => {
        initialState = {
            listSlice: [],
            isLoading: false,
            hasFailedToLoad: false,
        };
    });

    it('should handle addListOfUsers', () => {
        const users = [
            { id: '1', name: 'John Doe', avatar: 'https://i.pravatar.cc/300?u=1', createdAt: '2021-01-01'},
            { id: '2', name: 'Jane Smith' , avatar: 'https://i.pravatar.cc/300?u=2', createdAt: '2021-01-01'},
        ];
        const action = addListOfUsers(users);
        const state = listSlice.reducer(initialState, action);
        expect(state.listSlice).toEqual(users);
    });

    it('should handle updateLoadingState', () => {
        const action = updateLoadingState(true);
        const state = listSlice.reducer(initialState, action);
        expect(state.isLoading).toEqual(true);
    });

    it('should handle updateFailedState', () => {
        const action = updateFailedState(true);
        const state = listSlice.reducer(initialState, action);
        expect(state.hasFailedToLoad).toEqual(true);
    });
});