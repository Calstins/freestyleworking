import { createGlobalStyle } from 'styled-components';
import '@fontsource/kaushan-script';
import '@fontsource/sirin-stencil';

const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    margin: 0;
    padding: 0;
  } 
  body{
    font-family: 'Sirin Stencil';
    overflow-x: hidden;
  } 
  h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
  }
  a{
    color:inherit;
    text-decoration: none;
  }
  .wrapper {
  width: 700px;
  //max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 100px;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
}

  .certificate-wrapper {
  width: 900px;
  //max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 100px;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
}

@keyframes scrollLeft {
  to {
    left: -200px;
  }
}

.item {
  width: 200px;
  height: 100px;
  border-radius: 6px;
  position: absolute;
  left: max(calc(200px * 8), 100%);
  animation-name: scrollLeft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.item1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
}
`;
export default GlobalStyles;
