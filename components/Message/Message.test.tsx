import React from "react";
import renderer from "react-test-renderer";
import Message from "./";

describe("<Message /> rendering", () => {
  const mockMessage = {
    isLocalUser: true,
    userName: "Summer",
    message: "Sorry I cannot call you now.",
    shouldAnimate: false
  };

  it("Matches snapshot as localUser", () => {
    const tree = renderer.create(<Message {...mockMessage} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Matches snapshot as remoteUser", () => {
    const tree = renderer
      .create(<Message {...mockMessage} isLocalUser={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
