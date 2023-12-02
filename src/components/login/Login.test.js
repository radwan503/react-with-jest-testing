import { render, screen } from '@testing-library/react';
import Login from './Login';


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


test("button input should not be visible", () => {
 render(<Login />)
 const errorEl = screen.getByTestId("error")
 expect(errorEl).not.toBeVisible()
})

