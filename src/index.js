import '../styles/index.css'
import logo from '../assets/JavaScript_Logo.png'

console.log('Hello World!')

const titleHTML = document.createElement('h1')
titleHTML.textContent = 'I love JavaScript'
const imgHTML = document.createElement('img')
imgHTML.src = logo
document.body.append(titleHTML, imgHTML)
