import Button from "../../Js/Button";
import app from "../../index"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setStyle } from "../../Js/Style";
import App from "../../App";
import { $, ADD } from "../../Js/Tool";
import SignIn from "../FORM/SIGNIN/SignIn";

const auth = getAuth();

class SignInBtn extends Button {
    constructor(name){
        super(name)
        this.btnOpacity = 0.165
        this.btn.textContent = name
        this.btn.style.backgroundColor = `rgba(234, 76, 137, ${this.btnOpacity})`
        this.btn.addEventListener('mouseover', this.handleAnimationIn.bind(this))
        this.btn.addEventListener('mouseout', this.handleAnimationOut.bind(this))
        this.btn.addEventListener('click', this.handleClick.bind(this))
        setStyle(['w-full', 'h-6', 'text-white', 'h-full', 'rounded'], this.btn)
    }
    handleClick(){
        signInWithEmailAndPassword(auth, app.form.box.firstChild.childNodes[2].value, app.form.box.firstChild.childNodes[5].value)
        .then((userCredential) => {
            const user = userCredential.user;
            $('#root').innerHTML = ''
            ADD( $('#root'),new App().render('HOME'))
            
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message;
            console.log(errorCode)
            if(errorCode === 'auth/invalid-email'){
                app.form.box.innerHTML = ''
                ADD(app.form.box, new SignIn().render('Can not be empty', 'Can not be empty'))
            }
            if(errorCode === 'auth/user-not-found'){
                app.form.box.innerHTML = ''
                ADD(app.form.box, new SignIn().render('Account does not exist', ''))
            }
            if(errorCode === 'auth/wrong-password'){
                app.form.box.innerHTML = ''
                ADD(app.form.box, new SignIn().render('', 'Wrong password'))
            }
            if(errorCode === 'auth/internal-error'){
                app.form.box.innerHTML = ''
                ADD(app.form.box, new SignIn().render('account has been locked', ''))
            }
            });
        
        
    }
    handleAnimationIn(e){
        cancelAnimationFrame(this.animate)
        if(this.btnOpacity <= 1){
        this.btnOpacity += 0.03
        e.target.style.backgroundColor = `rgba(234, 76, 137, ${this.btnOpacity})`
        this.animate = requestAnimationFrame(this.handleAnimationIn.bind(this,e))
        }
        if(this.btnOpacity > 1){
            cancelAnimationFrame(this.animate)
        }
    }
    handleAnimationOut(e){
        cancelAnimationFrame(this.animate)
        if(this.btnOpacity > 0.165){
        this.btnOpacity -= 0.03
        e.target.style.backgroundColor = `rgba(234, 76, 137, ${this.btnOpacity})`
        this.animate = requestAnimationFrame(this.handleAnimationOut.bind(this,e))
        }
        if(this.btnOpacity < 0.165){
            cancelAnimationFrame(this.animate)
        }
    }
}
export default SignInBtn