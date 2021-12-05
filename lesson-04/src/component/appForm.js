import IconUser from "../asset/image/user.svg"
import IconMail from "../asset/image/mail.svg"
import IconPass from "../asset/image/lock 1.svg"
import data from "./createAccount"
import Input from "./Input"
import Label from "./label"
import Login  from "./LogInn"
import current from "../index"
    class AppForm{
        constructor(){
            this.element = document.createElement('div')
            this.title = document.createElement('h1')
            this.button = document.createElement('button')
            this.link = document.createElement('p')
            this.url = document.createElement('a')
            
            this.taliwind=[
                'w-80',
                'h-full',
                'bg-gray-800',
                'text-center',
            ]
            this.title.classList.add(
                'text-xl',
                'm-8',
                'font-ubuntu',
                'text-white',
                'font-bold'
            )
            this.boxStyle = ['flex','items-center', 'm-5','p-2','rounded', 'border', 'border-gray-600', 'text-white']
            this.userName = [
                new Label().render('fname', {link: IconUser}),
                new Input().type('text', 'fname', 'fname')
            ]
            this.mail= [
                new Label().render('mail', {link: IconMail}),
                new Input().type('email', 'mail', 'mail')
            ]
            this.passWord= [
                new Label().render('pwd', {link: IconPass}),
                new Input().type('password', 'pwd', 'pwd')
            ]

            this.element.classList.add(...this.taliwind)

            this.title.textContent = 'Welcome to New World, the social networking platform for gamer'
            this.button.classList.add('ring-4','rounded', 'text-white', 'px-10', 'py-2','mt-3', 'bg-blue-600')
            this.button.textContent = 'Create Account'
            this.button.addEventListener('click', this.createAccHandle.bind(this))

            this.url.setAttribute('href', '#')
            this.url.setAttribute('class', 'text-red-400')
            this.url.innerText= 'Log In'
            this.url.addEventListener('click', this.goTo.bind(this))

            this.link.innerHTML = `Do you have Account?`
            this.link.appendChild(this.url)
            this.link.classList.add('mt-4','text-white')
            this.change = this.box(this.userName)
        }
        box(arrs){
            let box = document.createElement('div')
            box.classList.add(...this.boxStyle)
            arrs.forEach(arr=>{
                box.appendChild(arr)
            })
            return box
        }
        goTo(){
            console.log(this.change.classList)
            this.change.classList.add('hidden')
        }
        createAccHandle(){
            data(this.mail[1].value,this.passWord[1].value,this.userName[1].value)
            
        }
        render(){
            this.element.appendChild(this.title)
            this.element.appendChild(this.box(this.mail))
            this.element.appendChild(this.change)
            this.element.appendChild(this.box(this.passWord))
            this.element.appendChild(this.button)
            this.element.appendChild(this.link)
            return this.element
        }
        
    }


export default AppForm