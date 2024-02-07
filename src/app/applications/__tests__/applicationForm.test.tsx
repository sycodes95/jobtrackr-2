import ApplicationForm from '../components/applicationForm'; // Adjust the import path as necessary

import { expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
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
  renderAppForm()
  expect(screen.getByText(/Add \/ Edit Application Details/i));
});

test('text area changes value when user types in it', async () => {
  const { container } = renderAppForm()

  const textArea: HTMLTextAreaElement | null = container.querySelector('[data-testid="text-area"]')
  
  if(textArea){
    await user.click(textArea)
    await user.type(textArea, 'hello noob')
    expect(textArea.value).toBe('hello noob')

  } else {
    throw new Error('Textarea not found');
  }
});
