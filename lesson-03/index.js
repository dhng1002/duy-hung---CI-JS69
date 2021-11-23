class Form {
    constructor(){
        this.types = [
            'button',
            'checkbox',
            'color',
            'date',
            'datetime-local',
            'email',
            'file',
            'hidden',
            'image',
            'month',
            'number',
            'password',
            'radio',
            'range',
            'reset',
            'search',
            'submit',
            'tel',
            'text',
            'time',
            'url',
            'week'
        ]
    }
    input(type, obj ,name='', labelFor=''){
        let result=''
        let condition = this.types.some(checkType => checkType === type)
        if(typeof obj === 'object' && condition){
            for(let value in obj){
                result += `${value}="${obj[value]}" `
            }
            if(name !=='' || labelFor !== ''){
                return(`
                    <div>
                    <label for="${labelFor}">${name}</label>
                    <input type="${type}" ${result}>
                    </div>
                  `)
            }else{
                return `<div><input type="${type}" ${result}></div>`
            }
        }else{
            console.error('The value of first argument is wrong or 2nd argument is not an object')
        }
    }
    signUp(){
        return(`${
            this.input('text', {name: 'fname', placeholder:'Type your first name' }, 'First Name', 'fname') +
            this.input('text', {name: 'lname', placeholder:'Type your last name'}, 'Last Name', 'lname') +
            this.input('email', {name:'mail', placeholder:'abc@mail.com'}, 'Email', 'mail') + 
            this.input('text', {name: 'Account'}, 'User Account', 'Account') +
            this.input('password',{name:'Pwd'}, 'Password', 'Pwd') +
            this.input('button',{value: "Create Account"})
        }`)
    }
    signIn(){
        return(`${
            this.input('text', {name: 'Account'}, 'User Account', 'Account') +
            this.input('password',{name:'Pwd'}, 'Password', 'Pwd') +
            this.input('button',{value: "SignIn"})
        }`)
    }
    custom(...arrs){
        arrs.forEach(arr =>{
            console.log(this.input(...arr))
        })
    }
}
alert('Em chưa làm xong mấy hôm nữa e rảnh e cố hoàn thiện nốt ạ =))))))))')
document.querySelector('.main-form').innerHTML = new Form().signUp()
document.querySelector('.signUp').addEventListener('click',()=>{
    document.querySelector('.main-form').innerHTML = new Form().signUp()
})
document.querySelector('.signIn').addEventListener('click',()=>{
    document.querySelector('.main-form').innerHTML = new Form().signIn()
})