const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const NEW = document.createElement.bind(document)
function EVENT(point, type , callback){
    point.addEventListener(type, callback)
}
function ADD(parent, child){
    parent.appendChild(child)
}

export {$,$$,NEW,ADD,EVENT}