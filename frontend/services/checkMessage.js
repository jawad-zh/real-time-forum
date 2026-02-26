import {setAlert} from "/frontend/components/alert.js"
export function  checkMessage(){
    const messageValue = document.getElementById('MessageContentValue').value
    if (messageValue.length === 0){
        setAlert('error', '✖', "you can't send empty message");
        return false
    }else if (messageValue.length > 200){
        setAlert('error', '✖', "you can't send  message long than 200 character");
        return false
    }
    return true
}