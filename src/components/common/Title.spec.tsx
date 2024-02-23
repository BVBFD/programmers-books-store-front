import { render, screen } from "@testing-library/react";
import Title from "./Tittle";
import { ThemeContextProvider } from "../../context/themeContext";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../style/theme";

describe("Title 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <ThemeContextProvider>
        <ThemeProvider theme={getTheme("light")}>
          <Title size="large" color="background">
            제목테스트
          </Title>
        </ThemeProvider>
      </ThemeContextProvider>
    );

    expect(screen.getByText("제목테스트")).toBeInTheDocument();
  });

  it("fontSize props 적용", () => {
    const { container } = render(
      <ThemeContextProvider>
        <ThemeProvider theme={getTheme("light")}>
          <Title size="large" color="background">
            제목테스트
          </Title>
        </ThemeProvider>
      </ThemeContextProvider>
    );

    expect(container?.firstChild).toHaveStyle({ fontSize: "2rem" });
  });

  it("color props 적용", () => {
    const { container } = render(
      <ThemeContextProvider>
        <ThemeProvider theme={getTheme("light")}>
          <Title size="large" color="primary">
            제목테스트
          </Title>
        </ThemeProvider>
      </ThemeContextProvider>
    );

    expect(container?.firstChild).toHaveStyle({ color: "brown" });
  });
});
