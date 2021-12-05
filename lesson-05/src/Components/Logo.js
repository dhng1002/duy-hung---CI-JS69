import {NEW,ADD} from '../Js/Tool'
import { setStyle, removeStyle } from '../Js/Style'
import Meet from '../Asset/image/MEET.png'
class Logo {
    constructor(){
        this.box = NEW('div')
        this.logo = NEW('img')
        
        this.logo.setAttribute('src', Meet)
        this.logo.setAttribute('alt', 'MeetLogo')

        this.boxStyle = ['w-36', 'inline-block', 'mt-36']
        this.LogoStyle = ['w-full']
    }
    render(){
        setStyle(this.boxStyle, this.box)
        setStyle(this.LogoStyle, this.logo)
        ADD(this.box,this.logo)
        return this.box
    }
}

export default Logo