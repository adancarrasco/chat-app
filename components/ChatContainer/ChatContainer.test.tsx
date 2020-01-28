import React from "react";
import renderer from "react-test-renderer";
import ChatContainer from "./ChatContainer.component";

describe("<ChatContainer /> rendering", () => {
  it("Matches snapshot", () => {
    const tree = renderer.create(<ChatContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
