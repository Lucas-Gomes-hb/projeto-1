import { PostCard } from ".";
import { postCardPropsMock } from "./mock";
const { render, screen } = require("@testing-library/react");

const props = postCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      props.cover
    );
    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();
    expect(
      screen.getByText(props.body, { name: props.title })
    ).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);

    // expect(container.firstChild).toMatchSnapshot();
  });
});
