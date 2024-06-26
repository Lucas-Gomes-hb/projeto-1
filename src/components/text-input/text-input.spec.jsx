import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

const { render, screen } = require("@testing-library/react");

describe("<TextInput />", () => {
  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    const value = "o valor";

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it("should have a value of searchValue", () => {
    render(<TextInput searchValue={"testando"} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input).toBeInTheDocument();

    expect(input.value).toBe("testando");
  });

  it("should match snapshot", () => {
    const { container } = render(<TextInput />);

    // expect(container.firstChild).toMatchSnapshot();
  });
});
