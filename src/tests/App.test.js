import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from '../App';


test("comments gets displayed after submitting", async () => {
 render(<App />)
 const checkbox = screen.getByLabelText(/I agree to terms an condition/i);
 const submitButton = screen.getByRole("button", { name: "comment", exact: false });
 const commentInput = screen.getByPlaceholderText(/write your comment here/i);

 await userEvent.type(commentInput, "nice pic dear");
 await userEvent.click(checkbox);
 await userEvent.click(submitButton);

 await userEvent.clear(commentInput)

 //const commentLi = screen.getByText(/nice pic dear/i);
 const commentLi = await screen.findByText(/nice pic dear/i);
 expect(commentLi).toBeInTheDocument()

})

test("2 comments gets displayed after submitting", async () => {
 render(<App />)
 const checkbox = screen.getByLabelText(/I agree to terms an condition/i);
 const submitButton = screen.getByRole("button", { name: "comment", exact: false });
 const commentInput = screen.getByPlaceholderText(/write your comment here/i);

 await userEvent.type(commentInput, "nice pic dear");
 await userEvent.click(checkbox);
 await userEvent.click(submitButton);

 await userEvent.type(commentInput, 'awesome');
 await userEvent.click(submitButton)

 const commentLi = await screen.findAllByRole('listitem');
 expect(commentLi.length).toBe(2)

})