"use client";

import styled from 'styled-components';

export const HeaderWrap = styled.header`
display: flex;
    justify-content: space-between;
    padding: 15px 12px;
h1{
display: none;
}
img{
width:87px;
height: 25px;
}
nav{
width: 100vw;
height: 100vh;
position:absolute;
background-color: rgba(0,0,0,0.8);
display: flex;
flex-direction: column;
gap: 40px;
align-items: center;
img{
width: 32px;
height: 32px;
position: absolute;
top: 12px;
right: 15px;
}
.line{
  width: 80%;
 height: 1px;
 background-color: #CACACA;
 padding: 0 25px;
 box-sizing: border-box;
}
ul{
padding: 70px 25px 0px 25px;
list-style-type: none;
 box-sizing: border-box;
display: flex;
gap: 20px;
width: 100%;
flex-direction: column;
li{
color: #AEAEAE;
font-size: 16px;
a{
color: #AEAEAE;
 text-decoration: none;
 font-size: 16px;
}
a:hover{
color: #ffffff;
font-weight: bold;
}
}
li:hover{
color: #ffffff;
font-weight: bold;
}
}
}
.utilNav{
padding-top:0;
}
button{
border: none;
background-color: transparent;
img{
width:32px;
 height: 32px;  
}

}
 ul{
 display: none;
 }
`;
