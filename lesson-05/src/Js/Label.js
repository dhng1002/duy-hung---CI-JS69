import {$,$$,NEW,ADD} from './Tool'
import {setStyle , removeStyle} from './Style'
class Label {
    constructor(name, title){
        this.label = NEW('label')
        this.label.setAttribute('for', name)
        this.label.textContent = title
    }
    addStyle(arr){
        setStyle(arr,this.label)
    }
    delStyle(arr){
        removeStyle(arr,this.label)
    }
    render(){
        return this.label
    }
}
export default Label