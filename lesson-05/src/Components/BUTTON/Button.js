import { NEW, ADD } from "../../Js/Tool"
import Prev from "./Prev";
import Next from "./Next";
import SignUp from "../Form/SignUp/SignUp";
import app from '../../index'
import { setStyle } from "../../Js/Style";
import getData from "../../Js/fetchApi";
import Success from "../FORM/SIGNUP/Success";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, deleteUser } from "firebase/auth";
import { sendData } from "../../Js/fetchApi";
import '../../Js/Firebase'
import Fail from "../FORM/SIGNUP/Fail";
import Login from "./Login";
import SignIn from "../FORM/SIGNIN/SignIn";
import SignInBtn from "./SignIn";
import { $ } from '../../Js/Tool';
import App from "../../App";
class Button {
    constructor(){
        this.box = NEW('div')
        this.style=['w-72', 'mx-auto', 'h-10', 'relative', 'text-sm']
        this.btnPrev = new Prev('PREV')
        this.btnNext = new Next('LOADING')
        this.btnGoLogin = new Login('Sign In')
        this.btnLogin = new SignInBtn('SIGN IN')
        this.btnWidth = 100
        this.auth = getAuth()
        this.btnNext.btn.style.width = `${this.btnWidth}%`
        this.nextClick = 0 
        this.prevClick = 0
        this.save = new SignUp()
        this.signIN = new SignIn()
        this.next = this.save.render('NEXT')
        this.parent
        this.prev =
        this.btnPrevStyle = ['w-3/12', 'text-white', 'h-full','absolute', 'left-0', 'rounded','hidden', 'text-center']
        this.btnNextStyle = [ 'text-white', 'h-full','absolute', 'right-0', 'rounded']
        this.btnGoLoginStyle = ['text-white', 'h-full','absolute', 'rounded', 'hidden', 'w-full', 'left-0']
        this.btnLoginStyle = ['text-white', 'w-full', 'rounded', 'h-full']
        this.btnGoLogin.setStyle(this.btnGoLoginStyle)
        this.btnPrev.setStyle(this.btnPrevStyle)
        this.btnNext.setStyle(this.btnNextStyle)
        this.btnLogin.setStyle(this.btnLoginStyle)
        setStyle(this.style, this.box)
        this.btnOpacity = 0.165
        this.start = 0
        this.startOpacity = 0
        this.animate
        this.mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.nameRegex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
        this.passWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        this.data 
        this.sucsess = new Success
        this.fail = new Fail
        this.saveTheElementBeforeSignIn
        this.isCreateAccOk = true
    }
    async handleData(){
        getData('email')
        .then(data => {
            this.data = data
            this.btnNext.btn.textContent = 'NEXT'
            this.setClickForBtn()
        } )
        .catch(err =>{
            this.btnNext.btn.textContent = 'NETWORK ERROR'
        })
    }
    workWithData(data){
        return data
    }
    setClickForBtn(){
        this.btnNext.click(this.handleClick.bind(this))
    }
    handleClick(e){
        if(e.target === this.btnNext.render() && this.nextClick === 0){
            let current  = app.form.signUp
            if(current.email.input.value.match(this.mailRegex) !== null && current.userName.input.value.match(this.nameRegex) !== null ){
                if( this.data.every(e => e.email !== current.email.input.value)){
                    localStorage.setItem('User', current.userName.input.value)
                    localStorage.setItem('Email', current.email.input.value)
                    this.animationShow()
                    this.btnPrev.removeStyle(['hidden'])
                    this.showPrev()
                    this.parent = app.form.render('PREV')
                    this.prev= current.render('PREV')
                    this.parent.replaceChild( this.next, this.prev)
                    this.btnPrev.click(this.handleClick.bind(this))
                    this.nextClick = 1
                    this.prevClick = 0
                }else{
                    current.popUpMail.innerHTML = 'The mail already exists '
                }
            }else{
                if(current.email.input.value.match(this.mailRegex) == null){
                    current.popUpMail.innerHTML = 'The mail is not valid'
                } 
                if(current.userName.input.value.match(this.nameRegex) == null ){
                    current.popUpUser.innerHTML = 'The username is not valid'
                }
            }
        }else if(e.target === this.btnPrev.render() && this.prevClick === 0){
            this.animationHidden()
            this.hiddenPrev()
            this.parent.replaceChild( this.prev, this.next)
            this.prevClick = 1
            this.nextClick = 0
        }else if(e.target === this.btnNext.render() && this.nextClick === 1){
            if(this.save.passWord.input.value.match(this.passWordRegex) !== null && this.save.passWordConfirm.input.value === this.save.passWord.input.value ){
                createUserWithEmailAndPassword(this.auth, localStorage.getItem('Email'), this.save.passWord.input.value)
                .then((userCredential) => {
                        sendEmailVerification(userCredential.user)
                        .then(()=>{
                            sendData('email', {email: localStorage.getItem('Email')})
                            .then(()=>{
                                this.btnPrev.setStyle(['hidden'])
                                this.btnNext.setStyle(['hidden'])
                                this.btnGoLogin.removeStyle(['hidden'])
                                this.btnGoLogin.click(this.goSignIn.bind(this))
                                this.saveTheElementBeforeSignIn = this.sucsess
                                this.parent.replaceChild(this.sucsess.render(), this.next)
                            })
                            .catch(() => {
                                console.log('ko gui duoc du lieu len api')
                                this.btnPrev.setStyle(['hidden'])
                                this.btnNext.setStyle(['hidden'])
                                this.btnGoLogin.removeStyle(['hidden'])
                                this.btnGoLogin.click(this.goSignIn.bind(this))
                                this.saveTheElementBeforeSignIn = this.fail
                                this.parent.replaceChild(this.fail.render('Please, check your connection'), this.next)
                            });
                            
                        })
                        .catch(()=>{
                            this.btnPrev.setStyle(['hidden'])
                            this.btnNext.setStyle(['hidden'])
                            this.btnGoLogin.removeStyle(['hidden'])
                            this.btnGoLogin.click(this.goSignIn.bind(this))
                            this.saveTheElementBeforeSignIn = this.fail
                            this.parent.replaceChild(this.fail.render('Your mail not real'), this.next)
                            deleteUser(userCredential.user)
                        })
                            
                    
                    .catch(()=>{
                        this.btnPrev.setStyle(['hidden'])
                        this.btnNext.setStyle(['hidden'])
                        this.btnGoLogin.removeStyle(['hidden'])
                        this.btnGoLogin.click(this.goSignIn.bind(this))
                        this.saveTheElementBeforeSignIn = this.fail
                        this.parent.replaceChild(this.fail.render('Please, check your connection'), this.next)
                        })
                   
                    })
            }else{
                if(this.save.passWord.input.value.match(this.passWordRegex) === null){
                    this.save.popUpPassWord.innerHTML = 'The password is not valid'
                }
                if(this.save.passWordConfirm.input.value !== this.save.passWord.input.value){
                    this.save.popUpPassWordConfirm.innerHTML = 'The password you entered does not match'
                }
            }
        }
    }
    goSignIn(){
        console.log(this.parent.children[0].remove())
        this.parent.appendChild(new SignIn().render())
        app.box.children[3].remove()
        app.box.appendChild(app.linkToSignUp)
        const length = app.button.box.children.length
        for(let index = 0 ; index < length ; index ++){
            app.button.box.children[0].remove()
        }
        ADD(app.button.box, new SignInBtn('SIGN IN').render())
    }
    animationShow(){
        this.start = this.start + 0.1
        this.btnWidth -= this.start
        this.btnNext.btn.style.width = `${this.btnWidth}%`
        let  animate = requestAnimationFrame(this.animationShow.bind(this))
        if(this.btnWidth < 66 ){
            cancelAnimationFrame(animate)
        }
    }
    animationHidden(){
        this.btnWidth += this.start
        this.btnNext.btn.style.width = `${this.btnWidth}%`
        let  animate = requestAnimationFrame(this.animationHidden.bind(this))
        if(this.btnWidth >= 100 ){
            this.btnNext.btn.style.width = `100%`
            cancelAnimationFrame(animate)
        }
    }
    showPrev(){
        this.startOpacity += 0.02
        this.btnPrev.btn.style.opacity = this.startOpacity
        let animate = requestAnimationFrame(this.showPrev.bind(this))
        if(this.startOpacity >= 1){
            cancelAnimationFrame(animate)
        }
    }
    hiddenPrev(){
        this.btnPrev.setStyle(['hidden'])
    }
    render(){
        this.handleData()
        ADD(this.box, this.btnPrev.render())
        ADD(this.box, this.btnNext.render())
        ADD(this.box, this.btnGoLogin.render())
        return this.box
    }
}
export default Button