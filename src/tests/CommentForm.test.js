import { screen, render, fireEvent } from "@testing-library/react";
import CommentForm from "../components/commentform/CommentForm";
import userEvent from "@testing-library/user-event";

test("Initian Condition", () => {
 render(<CommentForm />)
 const commentInput = screen.getByRole('textbox');
 expect(commentInput).toBeInTheDocument();

 const checkbox = screen.getByLabelText(/I agree to terms an condition/i);
 expect(checkbox).toBeInTheDocument();

 const submitButton = screen.getByRole("button", { name: "comment", exact: false })
 expect(submitButton).toBeDisabled();
})


test("Enable submit button on type and checkbox click", async () => {
 render(<CommentForm />)

 const checkbox = screen.getByLabelText(/I agree to terms an condition/i);
 const submitButton = screen.getByRole("button", { name: "comment", exact: false });
 const commentInput = screen.getByPlaceholderText(/write your comment here/i)


 //fireEvent.change(commentInput, { target: { value: "something" } });
 await userEvent.type(commentInput, "something")
 await userEvent.click(checkbox);

 expect(submitButton).toBeEnabled();

 await userEvent.click(checkbox)
 expect(submitButton).toBeDisabled()

})