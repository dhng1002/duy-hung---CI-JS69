import { NEW, ADD, EVENT } from "../../../Js/Tool";
import { setStyle } from "../../../Js/Style";
import Input from "../../../Js/Input";
import Label from "../../../Js/Label";
import handleAnimation from "./handleAnimation";

class SignUp {
    constructor(){
        this.box = NEW('div')
        this.title = NEW('h1')
        this.popUpUser = NEW('p')
        this.popUpUser.innerHTML = ''
        this.popUpMail = NEW('p')
        this.popUpMail.innerHTML = ''
        this.popUpPassWord = NEW('p')
        this.popUpPassWord.innerHTML = ''
        this.popUpPassWordConfirm = NEW('p')
        this.popUpPassWordConfirm.innerHTML = ''
        this.title.textContent = 'Sign up to MEET'
        this.userName = new Input('text', 'user', 'user' )
        this.email = new Input('email', 'mail', 'mail')
        this.passWord = new Input('password', 'pwd', 'pwd')
        this.passWordConfirm = new Input('password', 'pwdcf', 'pwdcf')

        this.userNameLabel = new Label('user', 'User Name')
        this.emailLabel = new Label('mail', 'Email')
        this.passWordLabel = new Label('pwd', 'Password')
        this.passWordConfirmLabel = new Label('pwdcf', 'Confirm password')

        this.style = ['w-full', 'flex', 'flex-col', 'text-white']
        this.titleStyle = ['mt-4', 'mb-16']
        this.labelStyle = ['text-left', 'text-gray-300', 'relative', 'h-6']
        this.inputStyle = ['bg-transparent', 'border-b' , 'h-6', 'outline-none']
        this.popUpStyle = ['h-8','mt-2', 'text-red-400', 'text-ms']

        this.userNameLabel.addStyle(this.labelStyle)
        this.emailLabel.addStyle(this.labelStyle)
        this.passWordLabel.addStyle(this.labelStyle)
        this.passWordConfirmLabel.addStyle(this.labelStyle)
        this.userName.addStyle(this.inputStyle)
        this.email.addStyle(this.inputStyle)
        this.passWord.addStyle(this.inputStyle)
        this.passWordConfirm.addStyle(this.inputStyle)
        
        ;[this.userNameLabel, this.emailLabel, this.passWordLabel, this.passWordConfirmLabel]
        .forEach(this.addMethod.bind(this))
        
        ;[this.userName, this.email, this.passWord, this.passWordConfirm]
        .forEach(e => {
            EVENT(e.input , 'focus' , this.handleFocus.bind(this))
        })
        setStyle(this.titleStyle, this.title)
        setStyle(this.style, this.box)
        setStyle(this.popUpStyle,this.popUpUser)
        setStyle(this.popUpStyle,this.popUpMail)
        setStyle(this.popUpStyle,this.popUpPassWord)
        setStyle(this.popUpStyle,this.popUpPassWordConfirm)
    }
    handleFocus(){
        this.popUpUser.innerHTML = ''
        this.popUpMail.innerHTML = ''
        this.popUpPassWord.innerHTML = ''
        this.popUpPassWordConfirm.innerHTML = ''
    }
    changeTitle(title){
        this.title.textContent = title
    }
    addMethod(e){
        EVENT(e.render(), 'click', handleAnimation)
        e.label.style.top = `1.5rem`
    }

    render(version){
        if(version === 'PREV'){
            let box = this.box
            ADD(box, this.title)
            ADD(box,this.userNameLabel.render())
            ADD(box,this.userName.render())
            ADD(box,this.popUpUser)
            ADD(box,this.emailLabel.render())
            ADD(box,this.email.render())
            ADD(box,this.popUpMail)
            return box
        }else if (version === 'NEXT'){
            let box = this.box
            ADD(box, this.title)
            ADD(box,this.passWordLabel.render())
            ADD(box,this.passWord.render())
            ADD(box,this.popUpPassWord)
            ADD(box,this.passWordConfirmLabel.render())
            ADD(box,this.passWordConfirm.render())
            ADD(box,this.popUpPassWordConfirm)
            return box
        }
    }
}
export default SignUp