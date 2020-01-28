import React from "react";
import renderer from "react-test-renderer";
import ActionButton from "./ActionButton.component";

describe("<ActionButton /> rendering", () => {
  const mockOnTouchEnd = () => {};
  it("Matches snapshot", () => {
    const tree = renderer
      .create(<ActionButton onTouchEnd={mockOnTouchEnd} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Matches snapshot with children", () => {
    const tree = renderer
      .create(<ActionButton onTouchEnd={mockOnTouchEnd}>Hello</ActionButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
