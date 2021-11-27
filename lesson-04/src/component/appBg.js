import style from './appBg.scss'
import Logo from '../asset/image/NEW WORLD.svg'
let AppBG = (() =>{
    class AppBG {
        constructor(){
            this.tailwind=[
                'w-110',
                'h-full',
                'max-w-full',
                'bg-cover',
                'bg-center',
            ]
            this.element = document.createElement('div')
            this.image = document.createElement('img')
            this.image.setAttribute('src', Logo)
            this.image.setAttribute('class', 'm-8')
            this.element.classList.add(...this.tailwind, style.appBg)
            this.element.appendChild(this.image)
        }
        render(){
            return this.element
        }
    }
    return new AppBG().render()
})()
export default AppBG