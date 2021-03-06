import styled from 'styled-components'
const colors = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
  white: '#fff',
  gray: '#6c757d',
  grayDark: '#343a40',
  primary: '#0d6efd',
  secondary: '#6c757d',
  success: '#198754',
  info: '#0dcaf0',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#212529',
}
const BlanckInput = styled.input`
   outline: none;
   background-color: #fff;
   padding: 5px;
   margin-top: 5px;
   margin-bottom: 5px;
   margin-left: auto;
   margin-right: auto;
   border-radius: 5px;
   border: none;
`;
const LightBorder = styled.div`
   border: 1px solid lightgray;
   padding: 10px;
   margin: 10px;
   border-radius: 5px;
`;
const DarkBtn = styled.button`
   background-color: #111;
   padding: 10px;
   margin: 15px;
   color: #fff;
   border-radius: 5px;
`;
const WarnBtn = styled.div`
   background-color: #FFE03B;
   padding: 10px;
   margin: 5px;
   width: 200px;
   display: flex;
   justify-content: center;
   border-radius: 50px;
   font-weight: 800;
   cursor: pointer;
`;
const CustomBTN1 = styled.div`
   cursor: pointer;
   width: 200px;
   border-radius: 50px;
   background-color: #0d6efd;
   color: #fff;
   display: flex;
   justify-content: center;
   padding: 5px;
   margin: 15px;
`;

const Flex = styled.div`
   display: flex;
   flex-wrap: wrap;
`;
export{
    BlanckInput,
    Flex,
    LightBorder,
    DarkBtn,
    WarnBtn,
    colors,
    CustomBTN1
}