import ApplicationForm from '../components/applicationForm'; // Adjust the import path as necessary

import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UserProvider } from '@auth0/nextjs-auth0/client';

global.ResizeObserver = class ResizeObserver {
  constructor(callback: any) {}
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
};

const renderAppForm = () => {

  //mock resize observer
  global.ResizeObserver = class ResizeObserver {
    constructor(callback: any) {}
    observe() {
      // do nothing
    }
    unobserve() {
      // do nothing
    }
    disconnect() {
      // do nothing
    }
  };

  const renderComponent = render(
    <UserProvider>
      <ApplicationForm />
    </UserProvider>
  );

  const {
    container
  } = renderComponent

  return {
    container
  }
  

}

test('renders without crashing', () => {
  const render = renderAppForm()
  expect(screen.getByText(/Add \/ Edit Application Details/i));

  // it('updates input field on change', () => {
  //   render(<ApplicationForm />);
  //   const inputElement = screen.getByPlaceholderText('...'); // Use a more specific placeholder or role if necessary
  //   fireEvent.change(inputElement, { target: { value: 'New Value' } });
  //   expect(inputElement.value).toBe('New Value');
  // });

  // Add more tests here
});
