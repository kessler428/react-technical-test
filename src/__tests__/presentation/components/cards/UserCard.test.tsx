import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserCard } from '../../../../presentation/components/cards/UserCard';

describe('Task Card tests', () => {

    it('renders correctly', () => {
        render(
            <UserCard id={''} name={''} avatar={''} createdAt={''}  />,
        );
        expect(true).toBeTruthy();
    });

    it('shoud find the text Task', () => {
        render(
            <UserCard id={'1'} name={'test-name'} avatar={'test'} createdAt={''}  />,
        );
        expect(true).toBeTruthy();
        expect(screen.getByText('test-name')).toBeInTheDocument();
    })
});