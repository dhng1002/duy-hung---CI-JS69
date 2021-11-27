class Label{
    constructor(style = ['w-6', 'inline', 'mr-4']){
        this.element = document.createElement('label')
        this.image = document.createElement('img')
        this.style = style
    }
    render(name, obj){
        if(obj.title){
            this.element.setAttribute('for', name)
            this.element.textContent = obj.title
            return this.element
        }
        if(obj.link){
            this.element.setAttribute('for', name )
            this.element.classList.add(...this.style)
            this.element.innerHTML = `<img src="${obj.link}" width="100%">`
            return this.element
        }
    }
}
export default Label