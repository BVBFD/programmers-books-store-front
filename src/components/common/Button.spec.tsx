import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ThemeContextProvider } from "../../context/themeContext";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../style/theme";

describe("Button 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <ThemeContextProvider>
        <ThemeProvider theme={getTheme("light")}>
          <Button size="large" schema="primary">
            버튼테스트
          </Button>
        </ThemeProvider>
      </ThemeContextProvider>
    );

    expect(screen.getByText("버튼테스트")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    render(
      <ThemeContextProvider>
        <ThemeProvider theme={getTheme("light")}>
          <Button size="large" schema="primary">
            버튼테스트
          </Button>
        </ThemeProvider>
      </ThemeContextProvider>
    );

    expect(screen.getByRole("button")).toHaveStyle({ fontSize: "1.5rem" });
  });
});
