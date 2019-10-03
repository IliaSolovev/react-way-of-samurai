import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="it-kamasutra" />);
    const instance = component.getInstance();
    expect(instance.state.inputValue).toBe("it-kamasutra");
  });
  test("after created span should be displayed", () => {
    const component = create(<ProfileStatus status="it-kamasutra" />);
    const root = component.root;
    let span = root.findAllByType('span');
    expect(span.length).toBe(1);
  });
  test("after created span, status should is defined", () => {
    const component = create(<ProfileStatus status="it-kamasutra" />);

    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).not.toBeNull();
  });
  test("after created input shouldn`t is defined", () => {
    const component = create(<ProfileStatus status="it-kamasutra" />);

    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).not.toBeNull();
  });
});