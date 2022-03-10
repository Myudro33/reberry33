let leftArrow = document.querySelector('.fa-circle-arrow-left')
let rightArrow = document.querySelector('.fa-circle-arrow-right')
let firstName = document.querySelector('.name')
let lastName = document.querySelector('.lastName')
let email = document.querySelector('.email')
let phone = document.querySelector('.phone')





leftArrow.addEventListener('click',function(){
    window.location = '/landing/landing.html'
})

rightArrow.addEventListener('click',function(e){
    e.preventDefault()
    let validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 if(firstName.value.length>2){
    if(lastName.value.length>2){
       if(email.value.match(validEmail)){
          if(phone.value[0]=='+'&&phone.value[1]==9&&phone.value[2]==9&&phone.value[3]==5&&phone.value[4]==5&&phone.value.length==13&&phone.value!=''){
          let arr = {
              token: "7106d5dd-5d88-425b-af1f-f96a915c5501",
              "first_name": firstName.value,
              "last_name": lastName.value,
              "email": email.value,
              "phone": phone.value 
          }
           localStorage.setItem('info',JSON.stringify(arr))
           console.log(localStorage.getItem('info'));
           window.location = '/technical/technical.html'      
          }
          else if(phone.value==''){
            let arr = {
                token: "13a506d0-ebe4-42a2-a91b-b4b14eac80e2",
                "first_name": firstName.value,
                "last_name": lastName.value,
                "email": email.value 
            }
             localStorage.setItem('info',JSON.stringify(arr))
             console.log(localStorage.getItem('info'));
             console.log(arr);
             window.location = '/technical/technical.html'
          }
          else{
              alert('invalid phone number')
          }
       }else{
           alert('invalid email format')
       }
    }else{
        alert('fill Last Name field')
    }
 }else{
     alert('fill First Name field')
 }
})
// localStorage.clear()