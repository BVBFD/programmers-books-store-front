import React from "react";
import { render, screen } from "@testing-library/react";
import InputText from "./InputText";
import { ThemeContextProvider } from "../../context/themeContext";

describe("Button 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <ThemeContextProvider>
        <InputText placeholder="여기에 입력하세요" />
      </ThemeContextProvider>
    );

    expect(
      screen.getByPlaceholderText("여기에 입력하세요")
    ).toBeInTheDocument();
  });

  it("forwardRef 테스트", () => {
    const ref = React.createRef<HTMLInputElement>();

    render(
      <ThemeContextProvider>
        <InputText placeholder="여기에 입력하세요" ref={ref} />
      </ThemeContextProvider>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
