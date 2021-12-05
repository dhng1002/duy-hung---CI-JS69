import "tailwindcss/tailwind.css"
import {NEW,ADD, EVENT} from "./Js/Tool"
import {setStyle, removeStyle} from "./Js/Style"
import Logo from "./Components/Logo"
import Form from "./Components/Form/Form"
import Button from "./Components/BUTTON/Button"
import SignIn from "./Components/FORM/SIGNIN/SignIn"
import SignInBtn from "./Components/BUTTON/SignIn"
import SignUp from "./Components/Form/SignUp/SignUp"
import Conversation from "./Components/Conversation/conversationApp"
class App {
    constructor(){
        this.box = NEW('div')
        this.logo = new Logo()
        this.form = new Form()
        this.button = new Button()
        this.conversation = new Conversation()
        this.linkToSignIn = NEW('a')
        this.linkToSignUp = NEW('a')
        this.linkToSignIn.textContent = 'GO SIGN IN'
        this.linkToSignUp.textContent = 'GO SIGN UP'
        this.linkToSignIn.setAttribute('href', '#')
        this.linkToSignUp.setAttribute('href', '#')
        EVENT(this.linkToSignUp, 'click', this.handleClick.bind(this))
        EVENT(this.linkToSignIn, 'click', this.handleClick.bind(this))
        this.style= [
            'w-screen',
            'h-screen',
            'bg-gray-900',
            'fixed',
            'text-center'
        ]
        this.conversationStyle = [
            'w-screen',
            'h-screen',
            'bg-gray-900',
            'text-white',
        ]
        setStyle(['text-right', 'block', 'mt-8', 'mr-10', 'text-pink-500', 'font-bold', 'italic'], this.linkToSignIn)
        setStyle(['text-right', 'block', 'mt-8', 'mr-10', 'text-pink-500', 'font-bold', 'italic'], this.linkToSignUp)

    }
    handleClick(e){
        if(e.target.textContent === 'GO SIGN IN'){
            this.form.box.children[0].remove()
            this.form.box.appendChild(new SignIn().render())
            let length = this.button.box.children.length
            for(let index = 0 ; index < length ; index++){
                this.button.box.children[0].remove()
            }
            ADD(this.button.box, new SignInBtn('SIGN IN').render())
            this.box.children[3].remove()
            ADD(this.box, this.linkToSignUp)
        }else if(e.target.textContent === 'GO SIGN UP'){
            this.form.box.children[0].remove()
            this.form.box.appendChild(this.form.signUp.render('PREV'))
            let length = this.button.box.children.length
            for(let index = 0 ; index < length ; index++){
                this.button.box.children[0].remove()
            }
            ADD(this.button.box, new Button().render())
           
            this.box.children[3].remove()
            ADD(this.box, this.linkToSignIn)
        }
        
    }    
    render(selectRender = 'FORM', link = this.linkToSignIn){
        if(selectRender === 'FORM'){
        setStyle(this.style, this.box)
        ADD(this.box,this.logo.render())
        ADD(this.box,this.form.render())
        ADD(this.box,this.button.render())
        ADD(this.box,link)
        return this.box
        }else if(selectRender === 'HOME'){
            setStyle(this.conversationStyle, this.box)
            ADD(this.box, this.conversation.render())
            return this.box
        }
    }
}

export default App