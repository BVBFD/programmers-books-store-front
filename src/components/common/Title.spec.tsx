import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { ThemeContextProvider } from "../../context/themeContext";

describe("Title 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <ThemeContextProvider>
        <Title size="large" color="background">
          제목테스트
        </Title>
      </ThemeContextProvider>
    );

    expect(screen.getByText("제목테스트")).toBeInTheDocument();
  });

  it("fontSize props 적용", () => {
    const { container } = render(
      <ThemeContextProvider>
        <Title size="large" color="background">
          제목테스트
        </Title>
      </ThemeContextProvider>
    );

    expect(container?.firstChild).toHaveStyle({ fontSize: "2rem" });
  });

  it("color props 적용", () => {
    const { container } = render(
      <ThemeContextProvider>
        <Title size="large" color="primary">
          제목테스트
        </Title>
      </ThemeContextProvider>
    );

    expect(container.firstChild).toHaveStyle({ color: "#ff5800" });
  });
});
