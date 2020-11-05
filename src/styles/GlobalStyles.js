import { createGlobalStyle } from 'styled-components'
import Light from '../assets/fonts/JosefinSans-Light.ttf'
import Medium from '../assets/fonts/JosefinSans-Medium.ttf'
import SemiBold from '../assets/fonts/JosefinSans-SemiBold.ttf'

const GlobalStyle = createGlobalStyle`
  *::selection {
    background: var(--green);
    color: var(--white);
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, main, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    @font-face {
      font-family: 'JosefinSans';
      src: url('${Light}') format('truetype');
      font-weight: 300;
    }
    @font-face {
      font-family: 'JosefinSans';
      src: url('${Medium}') format('truetype');
      font-weight: 400;
    }
    @font-face {
      font-family: 'JosefinSans';
      src: url('${SemiBold}') format('truetype');
      font-weight: 600;
    }
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    min-height: 100vh;
    line-height: 1;
    background: linear-gradient(164deg, rgba(45,47,106,1) 25%, rgba(50,154,151,1) 75%);
    display: grid;
    grid-template: 600px / 850px;
    justify-content: center;
    align-content: center;
    overflow: hidden;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

`
export default GlobalStyle
