import App from './App.js'
import "tailwindcss/tailwind.css"
import styles from './index.module.scss' 
import {$, $$} from './js/tool'
import {notification} from "./component/createAccount"
let current = new App()
;(function(){
    const tailwind = ['h-screen', 'w-screen', 'fixed', 'p-9']
    $('#root').classList.add(...tailwind)
    $('#root').appendChild(current.render())
    $('#root').setAttribute('id', styles.root)
})()

export default current