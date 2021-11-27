class Input{
    constructor(style = ['bg-gray-800', 'flex-grow']){
        this.element = document.createElement('input')
        this.prototypes = ['type','id','name']
        this.style = style
    }
    type(...params){
        let arr = 0;
        this.prototypes.forEach(prototype => {
            this.element.setAttribute(`${prototype}`, `${params[arr++]}` )
        })
        this.element.classList.add(...this.style)
        return this.element
    }
}

export default Input