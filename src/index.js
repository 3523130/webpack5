// import _ from 'lodash';
import './style.css';
import Img from './img.jpg';
import printMe from './print';


async function getComponent() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  const { default: _ } = await import('lodash');
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们已经存在的 div 中。
  const myImg = new Image();
  myImg.src = Img;

  element.appendChild(myImg);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

// function getComponent() {
//   return import('lodash')
//   .then(({ default: _ }) => {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');

//     // lodash（目前通过一个 script 引入）对于执行这一行是必需的
//     // lodash 在当前 script 中使用 import 引入
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');

//     // 将图像添加到我们已经存在的 div 中。
//     const myImg = new Image();
//     myImg.src = Img;

//     element.appendChild(myImg);

//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;

//     element.appendChild(btn);

//     return element;
//   })
//   .catch((error) => 'An error occurred while loading the component');
// }

getComponent().then((component) => {
  document.body.appendChild(component);
})