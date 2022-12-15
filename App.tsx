import * as React from 'react';
import './style.css';
import { selector, useRecoilState, useRecoilValue } from 'recoil';
import { textState } from './store';

export default function App() {

  const [text, setText] = useRecoilState(textState);
  const canvas = React.useRef();
  let ctx = null;
  React.useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = 1200;
    canvasEle.height = 1200;
 
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  React.useEffect(() => {
    writeText({ text: text, x: 180, y: 70 });
 
    writeText({ text: 'Welcome to ', x: 180, y: 70 }, { textAlign: 'right' });
 
    writeText({ text: 'www.cluemediator.com', x: 180, y: 130 }, { fontSize: 30, color: 'green', textAlign: 'center' });
 
    writeText({ text: 'Like, Share and Subscribe...', x: 180, y: 200 }, { fontSize: 14, fontFamily: 'cursive', color: 'blue', textAlign: 'center' });
  }, []);

  const writeText = (info, style = {}) => {
    const { text, x, y } = info;
    const { fontSize = 20, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;
 
    ctx.beginPath();
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <canvas ref={canvas}></canvas>
    </div>
  );
}
