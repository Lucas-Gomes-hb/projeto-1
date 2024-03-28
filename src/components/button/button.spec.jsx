import userEvent from '@testing-library/user-event';
import {Button} from ".";
const { render ,screen, fireEvent} = require('@testing-library/react');

describe("<Button />",()=>{
  it("should render the button with the text 'Load more'",()=>{
    render(<Button text="Load more"/>);
    expect.assertions(1);

    const button = screen.getByRole('button',{name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click",()=>{
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn}/>);
    expect.assertions(1);

    const button = screen.getByRole('button',{name: /load more/i });
    
    //Quantos mais clicks colocar maior o numero de chamadas
    userEvent.click(button);

    expect(fn).toHaveBeenCalled();
  })

  it("should be disabled when disabled is true",()=>{
    render(<Button text="Load more" disabled={true}/>);
    expect.assertions(1);

    const button = screen.getByRole('button',{name: /load more/i });
    
    expect(button).toBeDisabled();
  })

  it("should be enabled when disabled is false",()=>{
    render(<Button text="Load more" disabled={false}/>);
    expect.assertions(1);

    const button = screen.getByRole('button',{name: /load more/i });
    
    expect(button).toBeEnabled();
  })
})