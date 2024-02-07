import ApplicationForm from '../components/applicationForm'; // Adjust the import path as necessary

import { expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { formatDate } from '@/utils/formatDate';

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

test('company_name input changes value when user types in it', async () => {
  const { container } = renderApplicationForm()
  const input: HTMLTextAreaElement | null = container.querySelector('#company_name')
  expect(input).toBeTruthy();
  if(input){
    // await user.click(textArea)
    await user.type(input, 'really good company')
    expect(input.value).toBe('really good company')
    expect(input.value).not.toBe('really bad company')

  } else {
    throw new Error('company_name input not found');
  }
});

test('company_website input changes value when user types in it', async () => {
  const { container } = renderApplicationForm()
  const input: HTMLTextAreaElement | null = container.querySelector('#company_website')
  expect(input).toBeTruthy();
  if(input){
    // await user.click(textArea)
    await user.type(input, 'www.reallygoodcompany.com')
    expect(input.value).toBe('www.reallygoodcompany.com')
    expect(input.value).not.toBe('www.reallybadcompany.com')

  } else {
    throw new Error('company_website input not found');
  }
});

test('favorite field changes boolean value when user checks checkbox', async () => {
  const { container } = renderApplicationForm()
  const checkbox: HTMLInputElement | null = container.querySelector('#favorite')
  expect(checkbox).toBeTruthy();
    // await user.click(textArea)
  if(checkbox){
    await user.click(checkbox)
    expect(checkbox.ariaChecked).toBe('true')
    await user.click(checkbox)
    expect(checkbox.ariaChecked).toBe('false')

  } else {
    throw new Error('favorite checkbox input not found');

  };
  
});

test('renders apply_date component and selects a date', async () => {
  const { container } = renderApplicationForm()

  const testToBeDay = 15
  const testNotToBeDay = 16
  
  const toBeDate = new Date()
  toBeDate.setDate(testToBeDay)

  const notToBeDate = new Date()
  notToBeDate.setDate(testNotToBeDay)

  // Step 1: Check if the button to trigger the calendar is rendered
  const dateButton = container.querySelector('#apply_date'); // Adjust the name based on your button's content
  expect(dateButton).toBeTruthy();

  // Step 2: Open the calendar popover by clicking the button

  if(dateButton){
    user.click(dateButton);
    const allDateToSelect = Array.from(container.querySelectorAll('button[name="day"]'));
    const dateToSelect = allDateToSelect.find(el => el.textContent === `${testToBeDay}`) // This example selects the 15th of the month shown
     // This example selects the 15th of the month shown

    if(dateToSelect) {
      user.click(dateToSelect);
      
      // expect(dateButton).to(formatDate(toBeDate, "PPP"));
      expect(dateButton.textContent).toBe(formatDate(toBeDate, "PPP"));
      expect(dateButton.textContent).not.toBe(formatDate(notToBeDate, "PPP"));
    }

  } else {
    throw new Error('apply_date input not found');

  }

  // Assuming your calendar component renders days as buttons
  // You might need to adjust the query to find the specific date you want to select

  // Step 3: Click on the date to select it

  // Step 4: Verify the button now displays the selected date in the correct format
  // You'll need to know the expected date format to make this assertion

  // Additional checks can include verifying the call to `handleInputChange` with the right arguments
  // This might involve mocking the function and checking it was called as expected
});
