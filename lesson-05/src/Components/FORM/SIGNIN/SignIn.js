import { NEW, ADD, EVENT } from "../../../Js/Tool";
import { setStyle } from "../../../Js/Style";
import Input from "../../../Js/Input"
import Label from "../../../Js/Label";
import handleAnimation from "./handleAnimation";
class SignIn {
    constructor(){
        this.box = NEW('div')
        this.title = NEW('h1')
        this.popUpMail = NEW('p')
        this.popUpMail.innerHTML = ''
        this.popUpPassWord = NEW('p')
        this.popUpPassWord.innerHTML = ''
        this.title.textContent = 'Sign in'
        this.email = new Input('email', 'mail', 'mail')
        this.passWord = new Input('password', 'pwd', 'pwd')
        this.emailLabel = new Label('mail', 'Email')
        this.passWordLabel = new Label('pwd', 'Password')

        this.style = ['w-full', 'flex', 'flex-col', 'text-white']
        this.titleStyle = ['mt-4', 'mb-16']
        this.labelStyle = ['text-left', 'text-gray-300', 'relative', 'h-6']
        this.inputStyle = ['bg-transparent', 'border-b' , 'h-6', 'outline-none']
        this.popUpStyle = ['h-8','mt-2', 'text-red-400', 'text-ms']

        this.emailLabel.addStyle(this.labelStyle)
        this.passWordLabel.addStyle(this.labelStyle)
        this.email.addStyle(this.inputStyle)
        this.passWord.addStyle(this.inputStyle)
        
        ;[this.emailLabel, this.passWordLabel]
        .forEach(this.addMethod.bind(this))
        
        ;[ this.email, this.passWord]
        .forEach(e => {
            EVENT(e.input , 'focus' , this.handleFocus.bind(this))
        })
        setStyle(this.titleStyle, this.title)
        setStyle(this.style, this.box)
        setStyle(this.popUpStyle,this.popUpMail)
        setStyle(this.popUpStyle,this.popUpPassWord)
    }
    handleFocus(){
        this.popUpMail.innerHTML = ''
        this.popUpPassWord.innerHTML = ''
    }
    addMethod(e){
        EVENT(e.render(), 'click', handleAnimation)
        e.label.style.top = `1.5rem`
    }
    render(emailPopUp = '', passPopUp = ''){
            this.popUpMail.innerHTML = emailPopUp
            this.popUpPassWord.innerHTML = passPopUp
            let box = this.box
            ADD(box, this.title)
            ADD(box,this.emailLabel.render())
            ADD(box,this.email.render())
            ADD(box,this.popUpMail)
            ADD(box,this.passWordLabel.render())
            ADD(box,this.passWord.render())
            ADD(box,this.popUpPassWord)
            return box
    }
}
export default SignIn