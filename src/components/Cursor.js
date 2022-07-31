import React, { useRef, useEffect } from 'react'
import '../styles/global.scss'

export default function Cursor() {
  
  // const mainCursor = React.useRef(null);
  // const followerCursor = React.useRef(null);

  // const positionRef = React.useRef({
  //   mouseX: 0,
  //   mouseY: 0,
  //   destinationX: 0,
  //   destinationY: 0,
  //   distanceX: 0,
  //   distanceY: 0,
  //   key: -1,
  // })

  // React.useEffect(() => {
  //   document.addEventListener('mousemove', (event) => {
  //     const { clientX, clientY } = event;

  //     const mouseX = clientX - mainCursor.current.clientWidth / 2;
  //     const mouseY = clientY - mainCursor.current.clientHeight / 2;

  //     positionRef.current.mouseX = mouseX - followerCursor.current.clientWidth / 2;
  //     positionRef.current.mouseY = mouseY - followerCursor.current.clientHeight / 2;
      
  //     // mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
  //     mainCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  //   });

  //   return () => {};
  // }, []);

  // React.useEffect(() => {
  //   const followMouse = () => {
  //     positionRef.current.key = requestAnimationFrame(followMouse);

  //     const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current;
    
  //     if(!destinationX | !destinationY) {
  //       positionRef.current.destinationX = mouseX;
  //       positionRef.current.destinationY = mouseY;
  //     } else {
  //       positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
  //       positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

  //       if(Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
  //         positionRef.current.destinationX = mouseX;
  //         positionRef.current.destinationY = mouseY;
  //       } else {
  //         positionRef.current.destinationX += distanceX;
  //         positionRef.current.destinationY += distanceY;
  //       }
  //     }

  //     followerCursor.current.style.transform=`translate3d(${destinationX}px, ${destinationY}px, 0)`;
  //   };

  //   followMouse();
  // }, []);


  // Cursor - try 2
  const delay = 18;

  const dot = useRef(null);
  const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if(cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if(cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = e => {
    cursorVisible.current = true;
    toggleCursorVisibility();
    
    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + 'px';
    dotOutline.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    // <div className="cursor">
    //     <div className="cursor__main" ref={mainCursor}>
    //       <div className="cursor__main__background"></div>
    //     </div>
    //     <div className="cursor__follower" ref={followerCursor}>
    //       <div className="cursor__follower__background"></div>
    //     </div>
    // </div>

    <div className="cursor">
      <div className="cursor__dot-outline" ref={dotOutline}></div>
      <div className="cursor__dot" ref={dot}></div>
    </div>
  )
}
