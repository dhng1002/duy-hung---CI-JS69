function setStyle(arr, point){
    return Array.isArray(arr) ? point.classList.add(...arr) : console.error('The param is not a Array')
}
function removeStyle(arr, point){
    return Array.isArray(arr) ? point.classList.remove(...arr) : console.error('The param is not a Array')
}

export {setStyle , removeStyle}