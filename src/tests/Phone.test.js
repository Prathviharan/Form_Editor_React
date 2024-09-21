import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Phone from '../components/Phone';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('Phone Component', () => {
    test('renders Phone component with input and buttons', () => {
        render(
            <MemoryRouter>
                <Phone />
            </MemoryRouter>
        );

        // Check for the phone number input field and buttons
        expect(screen.getByLabelText(/Enter Your Phone Number/i)).toBeInTheDocument();
        expect(screen.getByText('Next')).toBeInTheDocument();
        expect(screen.getByText('Previous')).toBeInTheDocument();
    });

    test('displays error message for invalid phone number', () => {
        render(
            <MemoryRouter>
                <Phone />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText('Eg. 0712345678');
        const nextButton = screen.getByText('Next');

        // Enter an invalid phone number and try to submit
        fireEvent.change(input, { target: { value: '123' } });
        fireEvent.click(nextButton);

        // Error message should appear
        expect(screen.getByText('Please enter a valid 10 digit phone number')).toBeInTheDocument();
    });

    test('navigates to Address on valid phone number', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <Phone />
            </Router>
        );

        const input = screen.getByPlaceholderText('Eg. 0712345678');
        const nextButton = screen.getByText('Next');

        // Enter a valid phone number
        fireEvent.change(input, { target: { value: '0712345678' } });
        fireEvent.click(nextButton);

        // No error message should be present
        expect(screen.queryByText('Please enter a valid 10 digit phone number')).not.toBeInTheDocument();

        // Check if the route changed to "/Address"
        expect(history.location.pathname).toBe('/Address');
    });

    test('navigates back when Previous button is clicked', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <Phone />
            </Router>
        );

        const previousButton = screen.getByText('Previous');

        // Simulate clicking the "Previous" button
        fireEvent.click(previousButton);

        // Check if navigate back was triggered (which should call history.goBack())
        expect(history.entries[history.index - 1]).toBeTruthy();
    });
});
