import AppBG from './component/appBg.js'
import AppForm from './component/appForm'

class App {
    constructor(){
        this.tailwind = [
            'relative', 
            'top-1/2', 
            'inset-x-2/4', 
            'transform', 
            '-translate-y-2/4', 
            '-translate-x-2/4',
            'flex',
            'w-min',
            'h-130',
            'max-w-full',
            'rounded-lg',
            'overflow-hidden',
        ]
        this.element = document.createElement('div')
        this.element.classList.add(...this.tailwind)
        this.element.appendChild(AppBG)
        this.element.appendChild(AppForm)
    }
    reRender(a){
        return a
    }
    render(){
        return this.element
    }  
}

export default App