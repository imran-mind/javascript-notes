import React, { useContext } from "react";
import * as Styled from "./styled";

//for knowing whether we are doing inLineEditing or not
const stateContext = React.createContext();

//for passing the theme to all of the components
const themeContext = React.createContext();

Table.TD = function TD({ children, ...props }) {
  const theme = React.useContext(themeContext);
  return (
    <Styled.TD {...props} theme={theme}>
      {children}
    </Styled.TD>
  );
};

Table.TR = function TR(props) {
  return <Styled.TR {...props} />;
};

Table.TH = function TH({ children, ...props }) {
  const theme = useContext(themeContext);
  return (
    <Styled.TH {...props} theme={theme}>
      {children}
    </Styled.TH>
  );
};

export default function Table({ children, ...props }) {
  const rows = props.data.map((el, idx) => (
    <Table.TR key={idx}>
      {Object.values(el).map((el, idx) => (
        <Table.TD key={idx}>{el}</Table.TD>
      ))}
    </Table.TR>
  ));
  return (
    <themeContext.Provider value={props.theme}>
      <stateContext.Provider>
        <Styled.Table {...props}>
          <thead>
            <Table.TR>
              {Object.keys(props.data[0]).map((el, idx) => (
                <Table.TH key={idx}>
                  <label>{el}</label>
                </Table.TH>
              ))}
            </Table.TR>
          </thead>
          <tbody>
            {rows}
            {children}
          </tbody>
        </Styled.Table>
      </stateContext.Provider>
    </themeContext.Provider>
  );
}
Table.defaultProps = {
  theme: "dark",
  isEditing: false
};

Table.THEME = {
  DARK: "dark",
  LIGHT: "light"
};

Table.DENSITY = {
  LOW: "low",
  AVERAGE: "avg",
  HIGH: "high"
};
