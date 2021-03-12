import React from 'react'
import { render, cleanup, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..';


afterEach(cleanup)

describe('Contact is rendering', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('renders', () => {
        const { asFragment } =render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Contact is visible', () => {
    it('Gets text from ids', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('form')).toHaveTextContent('Contact me');
        expect(getByTestId('button')).toHaveTextContent('Submit');
        
        })
})
