import IconSucsess from "../asset/image/mobile-phone.png"
import IconFalse from "../asset/image/Ellipse 1.png"
class PopUp{
    constructor(){
        this.element = document.createElement('div')
        this.img = document.createElement('img')
        this.noti = document.createElement('p')
        this.img.classList.add('h-28', 'w-auto', 'inline','mb-4')
        this.element.classList.add('absolute', 'top-1/2', 'left-1/2','w-80','p-2', 'h-52', 'text-white', 'bg-gray-400', 'rounded', 'text-center','transform','-translate-x-1/2','-translate-y-1/2','hidden')
    }
    sendSuccess(){
        this.img.setAttribute('src', IconSucsess)
        this.noti.textContent = 'Please check your mail to verify your account'
        this.element.appendChild(this.img)
        this.element.appendChild(this.noti)
        return this.element
    }
    sendError(err){
        this.img.setAttribute('src', IconFalse)
        this.noti.textContent = err
        this.element.appendChild(this.img)
        this.element.appendChild(this.noti)
        return this.element
    }
    render(){
        return this.element
    }
}
export default PopUp