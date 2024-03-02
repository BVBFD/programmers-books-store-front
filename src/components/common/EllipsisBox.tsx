import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/common/Button";
import { FaAngleDown } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
  linelimit: number;
}

const EllipsisBox = ({ children, linelimit }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <EllipsisBoxStyle linelimit={linelimit} $expanded={expanded}>
      <p>{children}</p>
      <div className="toggle">
        <Button
          size="small"
          schema="normal"
          onClick={() => setExpanded(!expanded)}
        >
          {!expanded ? "펼치기" : "접기"} <FaAngleDown />
        </Button>
      </div>
    </EllipsisBoxStyle>
  );
};

interface EllipsisBoxStyleProps {
  linelimit: number;
  $expanded: boolean;
}

const EllipsisBoxStyle = styled.div<EllipsisBoxStyleProps>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ linelimit, $expanded }) =>
      $expanded ? "none" : linelimit};
    -webkit-box-orient: vertical;
    padding: 20px 0 0 0;
    margin: 0;
  }

  .toggle {
    display: flex;
    justify-content: end;
    margin-top: 10px;

    svg {
      transform: ${({ $expanded }) =>
        $expanded ? "rotate(180deg)" : "rotate(0)"};
    }
  }
`;

export default EllipsisBox;
