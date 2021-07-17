
import styled from "styled-components";

export const TH = styled.th`
    padding: 0.75em;
    height: 100%;
    background-color: ${(props)=>{
        return props.theme === 'dark' ? '#212529' : '#e8e5e5fa';
    }};
    border-collaps: collaps;
    border-bottom:2px solid;
    border-bottom-color: ${(props)=>{
        return props.theme === 'dark' ? '#dee2e6' : 'black';
    }};
    color: ${(props)=>{
        return props.theme === 'dark' ? 'white' : 'black';
    }}
`;

export const TR= styled.tr`
    background-color: ${(props)=>{
        if(props.isEditing)
            return "grey";
    }}
`;

export const TD = styled.td`
    border-top: 1px soldi #dee2e6;
    text-align: center;
    padding: 8px;
    background-color: ${(props) => {
        switch (props.theme) {
        case "dark":
            return "#212529";
        default:
            return "white";
        }
    }};
`;

export const Table = styled.table`
  table-layout: fixed;
  font-weight: 400;
  border-collapse: collapse;
  width: 100%;
  display: table;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "white";
      default:
        return "black";
    }
  }};
  border-bottom: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "white";
      default:
        return "black";
    }
  }};
  height: ${(props) => {
    switch (props.density) {
      case "low":
        return "90vh";
      case "avg":
        return "45vh";
      case "high":
        return "5px";
      default:
        return "50vh";
    }
  }};
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
`;
