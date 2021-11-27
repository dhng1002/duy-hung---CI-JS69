import App from './App.js'
import "tailwindcss/tailwind.css"
import styles from './index.module.scss' 
import {$, $$} from './js/tool'

(function(){
    const tailwind = ['h-screen', 'w-screen', 'fixed', 'p-9']
    $('#root').classList.add(...tailwind)
    $('#root').appendChild(new App().render())
    $('#root').setAttribute('id', styles.root)

})()
