import {$,$$,$newElement} from './Js/Tool'
import App from "./App"
const app = new App()
;(()=>{
    $('#root').appendChild(app.render())
})()
export default app

