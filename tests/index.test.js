import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });
  it("adds numbers", () => {
    render(<Home />);
    // check if add works properly
    const firstInput = screen.getByTestId("num1");
    const secondInput = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(firstInput, { target: { value: 5 } });
    fireEvent.change(secondInput, { target: { value: 8 } });
    fireEvent.click(addButton);
    expect(resultArea).toHaveTextContent(13);
  });
  it("subtracts numbers", () => {
    render(<Home />);
    // check if subtract works properly
    const firstInput = screen.getByTestId("num1");
    const secondInput = screen.getByTestId("num2");
    const subtractButton = screen.getByTestId("subtract");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(firstInput, { target: { value: 5 } });
    fireEvent.change(secondInput, { target: { value: 8 } });
    fireEvent.click(subtractButton);
    expect(resultArea).toHaveTextContent(-3);
  });
  it("mulitiplies numbers", () => {
    render(<Home />);
    // check if multiply works properly
    const firstInput = screen.getByTestId("num1");
    const secondInput = screen.getByTestId("num2");
    const multiplyButton = screen.getByTestId("multiply");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(firstInput, { target: { value: 2 } });
    fireEvent.change(secondInput, { target: { value: 7 } });
    fireEvent.click(multiplyButton);
    expect(resultArea).toHaveTextContent(14);
  });
  it("divides numbers", () => {
    render(<Home />);
    // checks if divide works properly
    const firstInput = screen.getByTestId("num1");
    const secondInput = screen.getByTestId("num2");
    const divideButton = screen.getByTestId("divide");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(firstInput, { target: { value: 2 } });
    fireEvent.change(secondInput, { target: { value: 2 } });
    fireEvent.click(divideButton);
    expect(resultArea).toHaveTextContent(1);
  });
});
