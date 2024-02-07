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

const renderApplicationForm = () => {

  //mock resize observer
  global.ResizeObserver = class ResizeObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  const renderComponent = render(
    <UserProvider>
      <ApplicationForm />
    </UserProvider>
  );
  
  return {
    container: renderComponent.container
  }
  

}

test('renders without crashing', () => {
  renderApplicationForm()
  expect(screen.getByText(/Add \/ Edit Application Details/i));
});

test('text area changes value when user types in it', async () => {
  const { container } = renderApplicationForm()
  const textArea: HTMLTextAreaElement | null = container.querySelector('[data-testid="text-area"]')
  expect(textArea).toBeTruthy();
  if(textArea){
    // await user.click(textArea)
    await user.type(textArea, 'hello noob')
    expect(textArea.value).toBe('hello noob')
    expect(textArea.value).not.toBe('hello boob')

  } else {
    throw new Error('Textarea not found');
  }
});
