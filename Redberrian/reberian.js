const yes = document.querySelector('#yes')
const no = document.querySelector('#no')
const hidden = document.querySelector('.hidden')
const radios = document.querySelector('.radios')
// localStorage.clear()
radios.addEventListener('click',function(){
    if(yes.checked){
        hidden.style.display = 'block'
    }else{
        hidden.style.display = 'none'
    }
})


const next = document.querySelector('.fa-circle-arrow-right')
const textarea1 = document.querySelector('#textarea1')
const textarea2 = document.querySelector('#textarea2')

next.addEventListener('click',function(){
    if(yes.checked){
       if(textarea1.value!=''){
           if(textarea2.value!=''){
               let arr = {
                   "will_organize_devtalk":true,
                   "devtalk_topic": textarea1.value,
                   "something_special": textarea2.value
               }
               let info = localStorage.getItem('info')
               let data = {...JSON.parse(info),arr}
               localStorage.setItem('info',JSON.stringify(data))
               console.log(localStorage.getItem('info'));
               window.location = '/Submit/submit.html'
           }else{
               alert('please tell us something special')
           }
       }else{
           alert('please fill first textarea')
       }
    }else if(no.checked){
        if(textarea2.value!=''){
            let arr = {
                "will_organize_devtalk":false,
                "something_special": textarea2.value
            }
            let info = localStorage.getItem('info')
            let data = {...JSON.parse(info),arr}
            localStorage.setItem('info',JSON.stringify(data))
            console.log(localStorage.getItem('info'));
            window.location = '/Submit/submit.html'
        }else{
            alert('please tell us something special')
        }
    }else{
        alert('please choose answer ')
    }
})

const prevous = document.querySelector('.fa-circle-arrow-left')

prevous.addEventListener('click',function(){
    window.location = '/covid/covid.html'
})
// localStorage.clear()