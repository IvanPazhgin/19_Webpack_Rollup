import './index.css'
import js_logo from './assets/js_logo.jpg'

console.log('Hello World 2!')

// Для проверки работы плагина @rollup/plugin-babel используем стрелочную функцию в методе map()
const array = [1, 2, 3].map(n => n + 1);
console.log(array);

// Плагин для работы с картинками
const mainTitle = document.createElement("h1");
mainTitle.textContent = "I love JavaScript";

const img = document.createElement("img");
img.src = js_logo;
document.body.append(mainTitle, img);