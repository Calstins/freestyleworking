import {useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const ScrollTriggerProxy = () => {
    const {scroll} = useLocomotiveScroll()
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (scroll) {
           const element = scroll?.el;
           scroll.on('scroll',ScrollTrigger.update);

            //scroller proxy
            ScrollTrigger.scrollerProxy(element,{
                scrollTop(value){
                    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
                },//we don't have to define a scrollLeft because we're only scrolling vertically
                getBoundingClientRect(){
                    return {
                        top:0, 
                        left: 0, 
                        width: window.innerWidth, 
                        height: window.innerHeight
                    }
                },
                pinType: element.style.transform ? 'transform' : 'fixed',
            });
        }
      return () => {
        ScrollTrigger.addEventListener('refresh', () => scroll?.update())
        ScrollTrigger.refresh();
        
      }
    }, [scroll])
    
  
    return null
}

export default ScrollTriggerProxy