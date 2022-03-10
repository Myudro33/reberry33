flatpickr("#date",{});
flatpickr("#date2",{});

const yes = document.querySelector('#yes')
const hidden = document.querySelector('.hidden')
const hidden2 = document.querySelector('.hidden2')
const ki = document.querySelector('#ki')
const if1 = document.querySelector('.if')
const if2 = document.querySelector('.if2')



if1.addEventListener('click',function(){
if(yes.checked){
    hidden.style.display = 'block'
}else{
    hidden.style.display = 'none'
}
})

if2.addEventListener('click',function(){
    if(ki.checked){
        hidden2.style.display = 'block'
     }else{
         hidden2.style.display = 'none'
     }
})


const next = document.querySelector('.fa-circle-arrow-right')
const sairme = document.querySelector('#sairme')
const home = document.querySelector('#home')
const hybrid = document.querySelector('#hybrid')
const no = document.querySelector('#no')
const ara = document.querySelector('#ara')
const date = document.querySelector('#date')
const date2 = document.querySelector('#date2')



next.addEventListener('click',function(){
    if(sairme.checked||home.checked||hybrid.checked){
       if(yes.checked){
           if(date.value!=''){
             if(ki.checked){
                if(date2.value!=''){
                    let work = ''
                    if(sairme.checked){
                      work = "from_office"
                    }
                    else if(home.checked){
                        work = "from_home"
                    }
                    else{
                        work = 'hybrid'
                    }
                    let arr = {
                        "work_preference": work,
                        "had_covid":  yes.checked ? true : false,
                        "had_covid_at": date.value,
                        "vaccinated": ki.checked? true : false,
                        "vaccinated_at": date2.value 
                    }
                    console.log(arr);
                    let info = localStorage.getItem('info')
                    let data = {...JSON.parse(info),hi}
                   
                   localStorage.setItem('info',JSON.stringify(data))
                   console.log(localStorage.getItem('info'));
                    window.location = '/Redberrian/redberian.html'
                }else{
               alert('choose date in second date input') 
                }
            }
            else if(ara.checked){
                let work = ''
                if(sairme.checked){
                  work = "from_office"
                }
                else if(home.checked){
                    work = "from_home"
                }
                else{
                    work = 'hybrid'
                }
                let arr = {
                    "work_preference": work,
                    "had_covid":  yes.checked ? true : false,
                    "had_covid_at": date.value,
                    "vaccinated": false 
                }
                let info = localStorage.getItem('info')
                let data = {...JSON.parse(info),arr}
               
               localStorage.setItem('info',JSON.stringify(data))
               console.log(localStorage.getItem('info'));
                window.location = '/Redberrian/redberian.html'
             }else{
                 alert('choose answer have you been vaccinated')
             }
           }else{
               alert('choose date in first date input')
           }
       }
        else if(no.checked){
        if(ki.checked){
            if(date2.value!=''){
                let work = ''
                    if(sairme.checked){
                      work = "from_office"
                    }
                    else if(home.checked){
                        work = "from_home"
                    }
                    else{
                        work = 'hybrid'
                    }
                    let arr = {
                        "work_preference": work,
                        "had_covid":  false,
                        "vaccinated": ki.checked? true : false,
                        "vaccinated_at": date2.value 
                    }
                    let info = localStorage.getItem('info')
                    let data = {...JSON.parse(info),arr}
                   
                   localStorage.setItem('info',JSON.stringify(data))
                   console.log(localStorage.getItem('info'));
            window.location = '/Redberrian/redberian.html'
            }else{
               alert('choose date in second date input') 
            }
        }
         else if(ara.checked){
            let work = ''
            if(sairme.checked){
              work = "from_office"
            }
            else if(home.checked){
                work = "from_home"
            }
            else{
                work = 'hybrid'
            }
            let arr = {
                "work_preference": work,
                "had_covid": false,
                "vaccinated": false 
            }
           let info = localStorage.getItem('info')
            let data = {...JSON.parse(info),arr}
           
           localStorage.setItem('info',JSON.stringify(data))
           console.log(localStorage.getItem('info'));
            window.location = '/Redberrian/redberian.html'
         }else{
             alert('choose answer have you been vaccinated')
         }
       }else{
           alert('choose answer did you contact covid 19?')
       }
    }else{
        alert('please tell us how would you prefer to work')
    }
})


const prevous = document.querySelector('.fa-circle-arrow-left')

prevous.addEventListener('click',function(){
        window.location = '/Technical/technical.html'
})