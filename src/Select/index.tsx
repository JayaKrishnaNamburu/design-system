import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { default as ReactSelect } from "react-select";
import Theme from "../theme";
import { SelectProps } from "../types";

const Select: React.FunctionComponent<SelectProps> = ({
  options,
  change,
  selected,
  placeholder,
  isSearchable,
  customProps
}) => {
  const globalTheme: Theme = useContext(ThemeContext);
  const colourStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: "white",
      border: `1px solid ${globalTheme.colors.background}`,
      cursor: "pointer",
      "&:hover": {
        border: `1px solid ${globalTheme.colors.background}`
      }
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor:
          (isSelected || isFocused) && globalTheme.colors.background,
        borderColor: globalTheme.colors.background,
        color: (isFocused || isSelected) && globalTheme.colors.text,
        cursor: isDisabled ? "not-allowed" : "pointer",
        input: styles => {
          return {
            ...styles,
            cursor: "pointer"
          };
        }
      };
    }
  };
  return (
    <ReactSelect
      isSearchable={isSearchable}
      value={selected}
      options={options}
      onChange={change}
      placeholder={placeholder && placeholder}
      styles={colourStyles}
      aria-label={placeholder ? placeholder : "Select"}
      {...customProps}
    />
  );
};

export default Select;
