import {$,$$,NEW,ADD, EVENT} from './Tool'
import {setStyle , removeStyle} from './Style'
class Input{
    constructor(type, name, id){
        this.input = NEW('input')
        this.input.setAttribute('type', type)
        this.input.setAttribute('name', name)
        this.input.setAttribute('id', id)
    }
    addStyle(arr){
        setStyle(arr,this.input)
    }
    delStyle(arr){
        removeStyle(arr,this.input)
    }
    render(){
        return this.input
    }
}

export default Input