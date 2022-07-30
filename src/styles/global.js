import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 

:root {
    --color-background: #FFFFFF;
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757 ;
    --color-gray-100: #333333;
    --color-gray-50: #828282;
    --color-gray-20: #E0E0E0;
    --color-gray-0: #F5F5F5;
    --color-Negative: #E60000; 
    --color-Warning: #FFCD07;
    --color-success: #168821;
    --color-Information: #155BCB;

  }

   
  * {
    margin:0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
 
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    overflow-x: hidden;
  }
  
  button {
    cursor: pointer;
  }

`;
