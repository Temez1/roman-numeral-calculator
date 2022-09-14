import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
  it("renders waiting for number between 1 and 1000", () => {
    render(<Home />);

    const text = screen.getByText(/Waiting for number between 1 and 1000/i);

    expect(text).toBeInTheDocument();
  });
  it("the default text stays unchanged after typing text", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "asdf");

    const text = screen.getByText(/Waiting for number between 1 and 1000/i);
    expect(text).toBeInTheDocument();
  });
  it("the default text stays unchanged after typing number below 1", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "0");

    const text = screen.getByText(/Waiting for number between 1 and 1000/i);
    expect(text).toBeInTheDocument();
  });
  it("the default text stays unchanged after typing number above 1000", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "1001");

    const text = screen.getByText(/Waiting for number between 1 and 1000/i);
    expect(text).toBeInTheDocument();
  });
  it("Renders Roman numeral 'CXXIII' after typing number 123", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "123");

    const text = screen.getByText(/CXXIII/i);
    expect(text).toBeInTheDocument();
  });
  it("Renders Roman numeral 'XCIX' after typing decimal number 99.4", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "99.4");

    const text = screen.getByText(/XCIX/i);
    expect(text).toBeInTheDocument();
  });
});
