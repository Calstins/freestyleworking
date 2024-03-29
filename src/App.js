import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home from './sections/Home';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import {useRef} from 'react'
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
import Footer from "./sections/Footer";

function App() {
  const containerRef = useRef(null)
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              smartphone:{
                smooth:true,
              }
            }
          }
          watch={
            [

            ]
          }
          containerRef = {containerRef}
        >
          <ScrollTriggerProxy/>
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop/>
              <Banner/>
              <NewArrival/>
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
        
    </>
  );
}

export default App;
