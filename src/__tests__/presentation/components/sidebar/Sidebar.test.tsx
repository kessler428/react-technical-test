import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sidebar } from '../../../../presentation/components/sidebar';

describe('Sidebar', () => {
  it('renders correctly', () => {
    render(
        <Sidebar idActive={0} setIdActive={function (): void {} }  />,
    );
    expect(true).toBeTruthy();
  });

  it('shoud find the text Tasks', () => {
    render(
        <Sidebar idActive={0} setIdActive={function (): void {} }  />,
    );
    expect(screen.getByText('Tasks')).toBeInTheDocument();
  });

  it('shoud find the text List', () => {
    render(
        <Sidebar idActive={0} setIdActive={function (): void {} }  />,
    );
    expect(screen.getByText('List')).toBeInTheDocument();
  });

  it('Should test the function setIdActive', () => {
    const setIdActive = jest.fn();
    render(
        <Sidebar idActive={0} setIdActive={setIdActive}  />,
    );
    expect(setIdActive).toHaveBeenCalledTimes(0);
  });

  it('Should update the idActive', () => {
    const setIdActive = jest.fn();
    render(
        <Sidebar idActive={0} setIdActive={setIdActive}  />,
    );
    expect(setIdActive).toHaveBeenCalledTimes(0);
    setIdActive(1);
    expect(setIdActive).toHaveBeenCalledTimes(1);
  });

});