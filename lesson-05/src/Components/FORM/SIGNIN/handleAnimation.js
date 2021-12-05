let start, element
function handleAnimation(e){
    element = e 
    run()
}
function run(){
    element.target.removeEventListener('click', handleAnimation)
    if(start === undefined){
        start = 24
    }
    start = start - 8
    element.target.style.top = `${start}px`
    let animate = requestAnimationFrame(run)
    if(start < -5 ){
        element.target.style.top = '-5px'
        start = 24
        cancelAnimationFrame(animate)
    }
}
export default handleAnimation