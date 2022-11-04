let response = document.getElementById('response');
function insert(num) {
    response.value = response.value + num
}

function insertSimbol(simbol){
    let valueInString = `${response.value}`
    if (valueInString[valueInString.length -1] !== '*' && valueInString[valueInString.length -1] !== '/' && valueInString[valueInString.length -1] !== '+' && valueInString[valueInString.length -1] !== '-' ){
        response.value = response.value + simbol
    }
}

function reset(){
    response.value = null
}

function del(){
    let valueInString = `${response.value}`
    response.value = valueInString.substring(0, valueInString.length -1)
}

function result(){
    let valueInString = `${response.value}`
    if(response){
        response.value = eval(valueInString)
    }

}