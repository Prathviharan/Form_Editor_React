import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import FullName from '../components/FullName';
import '@testing-library/jest-dom';

describe('FullName Component', () => {
    test('renders FullName form correctly', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <FullName />
            </MemoryRouter>
        );

        expect(screen.getByLabelText(/enter your full name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/eg. john smith/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument();
    });

    test('validates input and navigates on valid submission', () => {
        const navigate = jest.fn();
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<FullName />} />
                    <Route path="/Email" element={<div>Email Page</div>} />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText(/eg. john smith/i), {
            target: { value: 'John Smith' },
        });

        fireEvent.click(screen.getByRole('button', { name: /next/i }));
        expect(navigate).toHaveBeenCalledWith('/Email');
    });

    test('shows alert when input is empty on submission', () => {
        global.alert = jest.fn();

        render(
            <MemoryRouter initialEntries={['/']}>
                <FullName />
            </MemoryRouter>
        );
        
        fireEvent.click(screen.getByRole('button', { name: /next/i }));
        expect(global.alert).toHaveBeenCalledWith("You must enter your full name before proceeding.");
    });

    test('navigates back when Previous button is clicked', () => {
        const navigate = jest.fn();
        render(
            <MemoryRouter initialEntries={['/']}>
                <FullName />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByRole('button', { name: /previous/i }));
        expect(navigate).toHaveBeenCalledWith(-1);
    });
});
