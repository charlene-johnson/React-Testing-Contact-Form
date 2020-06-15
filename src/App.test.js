import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";


test("renders App without crashing", () => {
  render(<App />);
});

test('make sure that it finds placeholder text', () => {
  const{getByPlaceholderText, getByTestId} = render(<App/>);

  const firstName = getByPlaceholderText(/edd/i);
  const lastName = getByPlaceholderText(/burke/i);
  const email = getByTestId(/email/i)

  getByPlaceholderText(/eDd/i)

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();

})
test('input length error', () => {
  const{getByTestId} = render(<App/>)
  const firstName = getByTestId(/firstName/i)
  const lastName = getByTestId(/lastName/i)
  const email = getByTestId(/email/i)
  

 

  fireEvent.change(firstName, {
    target: {name: "firstName", value: "Charlene"}
  });
  fireEvent.change(lastName, {
    target: {name: "lastName", value: "Johnson"}
  });
  fireEvent.change(email, {
    target:{name: "email", value: "charlene@charlene.com"}
  })
  const submit = getByTestId(/submit/i);
  fireEvent.click(submit);
})