import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './Login';

jest.mock("axios", () => ({
 __esModule: true,
 default: {
  get: () => ({
   data: { id: 1, name: "john" }
  })
 }
}))

test("user input should be render", () => {
 render(<Login />)
 const userInputEl = screen.getByPlaceholderText(/username/i)
 expect(userInputEl).toBeInTheDocument()
})

test("password input should be rnder", () => {
 render(<Login />)
 const passInputEl = screen.getByPlaceholderText(/password/i)
 expect(passInputEl).toBeInTheDocument()
})

test("button input should be rnder", () => {
 render(<Login />)
 const buttonInputEl = screen.getByRole(/button/i)
 expect(buttonInputEl).toBeInTheDocument()
})

test("username input should be empty", () => {
 render(<Login />)
 const userInputEl = screen.getByPlaceholderText(/username/i)
 expect(userInputEl.value).toBe("")
})

test("password input should be empty", () => {
 render(<Login />)
 const passInputEl = screen.getByPlaceholderText(/password/i)
 expect(passInputEl.value).toBe("")
})

test("button input should be disable", () => {
 render(<Login />)
 const buttonInputEl = screen.getByRole(/button/i)
 expect(buttonInputEl).toBeDisabled()
})

test("loading input should not be render", () => {
 render(<Login />)
 const buttonInputEl = screen.getByRole(/button/i)

 expect(buttonInputEl).not.toHaveTextContent(/please wait/i)
})



test("error input should not be visible", () => {
 render(<Login />)
 const errorEl = screen.getByTestId("error")
 expect(errorEl).not.toBeVisible()
})



test("username input should be chaged", () => {
 render(<Login />)
 const userInputEl = screen.getByPlaceholderText(/username/i)
 const testVal = "test";
 fireEvent.change(userInputEl, { target: { value: testVal } })
 expect(userInputEl.value).toBe(testVal)
})

test("password input should be changed", () => {
 render(<Login />)
 const passInputEl = screen.getByPlaceholderText(/password/i)
 const testVal = "test";
 fireEvent.change(passInputEl, { target: { value: testVal } })
 expect(passInputEl.value).toBe(testVal)
})

test("button input should not be disable when input", () => {
 render(<Login />)
 const buttonInputEl = screen.getByRole(/button/i);
 const userInputEl = screen.getByPlaceholderText(/username/i);
 const passInputEl = screen.getByPlaceholderText(/password/i);

 const testVal = 'test';

 fireEvent.change(userInputEl, { target: { value: testVal } });
 fireEvent.change(passInputEl, { target: { value: testVal } })

 expect(buttonInputEl).not.toBeDisabled()
})

test("loading should be render", () => {
 render(<Login />)
 const buttonInputEl = screen.getByRole(/button/i)

 const userInputEl = screen.getByPlaceholderText(/username/i);
 const passInputEl = screen.getByPlaceholderText(/password/i);

 const testVal = 'test';

 fireEvent.change(userInputEl, { target: { value: testVal } });
 fireEvent.change(passInputEl, { target: { value: testVal } })
 fireEvent.click(buttonInputEl);

 expect(buttonInputEl).toHaveTextContent(/please wait/i)
})


test("loading should not be render after fetching", async () => {
 render(<Login />)
 const buttonInputEl = screen.getByRole(/button/i)

 const userInputEl = screen.getByPlaceholderText(/username/i);
 const passInputEl = screen.getByPlaceholderText(/password/i);

 const testVal = 'test';

 fireEvent.change(userInputEl, { target: { value: testVal } });
 fireEvent.change(passInputEl, { target: { value: testVal } })
 fireEvent.click(buttonInputEl);

 await waitFor(() => {
  expect(buttonInputEl).not.toHaveTextContent(/please wait/i)
 })

})


test("useer should not be render after fetching", async () => {
 render(<Login />)
 const buttonInputEl = screen.getByRole(/button/i)

 const userInputEl = screen.getByPlaceholderText(/username/i);
 const passInputEl = screen.getByPlaceholderText(/password/i);

 const testVal = 'test';

 fireEvent.change(userInputEl, { target: { value: testVal } });
 fireEvent.change(passInputEl, { target: { value: testVal } })
 fireEvent.click(buttonInputEl);


 const userItem = await screen.findByText(/john/i)


 expect(userItem).toBeInTheDocument()



})