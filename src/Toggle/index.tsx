import React, { useContext, useState, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
import Theme from "../theme";
import { ToggleProps } from "../types";

const Toggle: React.FunctionComponent<ToggleProps> = ({
  callback,
  checked
}) => {
  const [selected, setToggleStatus] = useState(checked ? checked : false);
  const theme: Theme = useContext(ThemeContext);

  if (callback) {
    useEffect(() => {
      callback(selected);
    }, [selected]);
  }

  useEffect(() => {
    return () => {
      setToggleStatus(false);
    };
  }, []);

  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        color={theme.colors.background}
        checked={selected}
      />
      <CheckBoxLabel
        htmlFor="checkbox"
        onClick={() => setToggleStatus(!selected)}
      />
    </CheckBoxWrapper>
  );
};

export default Toggle;

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ color }) => color};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
