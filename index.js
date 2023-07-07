



let names =document.querySelector(".namelog")
let emails =document.querySelector(".email ")
let phones =document.querySelector(".phone")
let ages =document.querySelector(".age")
let passwords =document.querySelector(".password")
let repasswords =document.querySelector(".repassword")
let submits =document.querySelector(".submit")
let warn =document.querySelector(".warn")
let Accept =document.querySelector(".Accept")
let rongname =document.querySelector(".rongname")
let rongemail =document.querySelector(".rongemail")
let rongpassword =document.querySelector(".rongpassword")
let rongphone =document.querySelector(".rongphone")
let checkrepas =document.querySelector(".checkrepas")
let arrinfo=[]


if (localStorage.getItem("information") != null) {
    arrinfo=JSON.parse(localStorage.getItem("information"))
    console.log(arrinfo)
  }


console.log(phones)
submits.addEventListener('click' , function(){
    loginsystem()
    
})





function loginsystem (){
    if(names.value =="" || emails.value=="" || phones.value =="" ||  ages.value==""|| passwords.value=="" || repasswords.value =="" ){
        warn.classList.replace("d-none" , "d-block")

    }
    else{
        warn.classList.replace("d-block" , "d-none")

    }
   
     if(checkname() == false){
        rongname.classList.replace("d-none" , "d-block")
    }
    else{
        rongname.classList.replace("d-block" , "d-none")

    }
    if(checkemail() == false){
        rongemail.classList.replace("d-none" , "d-block")
    }
    else{
        rongemail.classList.replace("d-block" , "d-none")

    }
    if(checkpasword() == false){
        rongpassword.classList.replace("d-none" , "d-block")
    }
    else{
        rongpassword.classList.replace("d-block" , "d-none")

    }
    if(checkphone() == false){
        rongphone.classList.replace("d-none" , "d-block")
    }
    else{
        rongphone.classList.replace("d-block" , "d-none")

    }
    if(passwords.value != repasswords.value){
        checkrepas.classList.replace("d-none" , "d-block")
        
    }
    else{
        checkrepas.classList.replace("d-block" , "d-none")
        
    }
    if(checkname() ==  true && checkemail() && checkpasword() ==true &&checkphone() == true && passwords.value == repasswords.value){
        checkrepas.classList.replace("d-block" , "d-none")
        Accept.classList.replace("d-none" , "d-block")
        warn.classList.replace("d-block" , "d-none")
    
    let person ={
        name:names.value,
        Email:emails.value,
        phone:phones.value,
        age:ages.value,
        password:passwords.value,
        repassword:repasswords.value
    }
    arrinfo.push(person)
    localStorage.setItem("information", JSON.stringify(arrinfo) )
    console.log(arrinfo)
    clear()
    }
   


}

function clear(){
    names.value=""
    emails.value=""
    phones.value=""
    ages.value=""
    passwords.value=""
    repasswords.value=""
}



function checkname (){
    let nameregex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
    return nameregex.test( names.value)
  
  }
  function checkemail (){
    let emailregex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    return emailregex.test( emails.value)
  
  }
  function checkpasword (){
    let paswordregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
    return paswordregex.test( passwords.value)
  
  }
  function checkphone (){
    let phoneregex=/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/i;
    return phoneregex.test( phones.value)
  
  }