async function getData(point){
    return await fetch(`https://61a5c1624c822c001704230a.mockapi.io/account/${point}`)
    .then(respone => respone.json())
}
export default getData

async function sendData(point, data){
    return await fetch(`https://61a5c1624c822c001704230a.mockapi.io/account/${point}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export {sendData}