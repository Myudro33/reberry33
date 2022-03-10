var ids = []
fetch('https://bootcamp-2022.devtest.ge/api/skills')
.then(response=>response.json())
.then(data=>{
    let select = document.querySelector('select')
    for(let i of data){
        let option = document.createElement('option')
        option.textContent = i.title
        option.value = i.title
        option.id = i.id
        select.appendChild(option)
        ids.push(i.id)
    }
    
    
})
.catch(error=>alert('Error Api is not working'))
let leftArrow = document.querySelector('.fa-circle-arrow-left')
leftArrow.addEventListener('click',function(){
    window.location = '/personal/personal.html'
})
window.addEventListener('load', function(){
  const select = document.querySelector('select')
  const years = document.querySelector('.years')
  const button = document.querySelector('.add')
  const experience = document.querySelector('.experience')
  let valid = 0
  var arrSkills = []
   let skills = [

   ]
button.addEventListener('click',function(){
  if(select.value!='Skills'){
    if(years.value!=''){
      if(arrSkills.indexOf(select.value)==-1){
      valid++
       const main = document.createElement('div')
       main.classList.add('expDiv')
       experience.appendChild(main)
       const h5 = document.createElement('h5')
       const p = document.createElement('p')
       var i = document.createElement('i')
       i.classList.add('fa-solid')
       i.classList.add('fa-circle-minus')
       h5.innerText = select.value
       p.innerText = 'Years of Experience: '+years.value
       main.appendChild(h5)
       main.appendChild(p)
       main.appendChild(i)
       arrSkills.push(h5.innerText)
       i.addEventListener('click',function(){
        experience.removeChild(main)
        valid--
        arrSkills.pop()
      })
      skills.push({
        "id": 1,
        "experience": years.value
})
      select.value='Skills'
      years.value=''
    }else{
      alert('skill already taken')
    }
    }else{
      alert('please fill experience duration input')
    }
  }else{
    alert('choose programming language')
  }
})
let rightArrow = document.querySelector('.fa-circle-arrow-right')
rightArrow.addEventListener('click',function(){
  if(valid>0){
    let info = localStorage.getItem('info')
    let data = {...JSON.parse(info),skills}
  
    localStorage.setItem('info',JSON.stringify(data))
    console.log(localStorage.getItem('info'));
    window.location='/covid/covid.html'
  }
  else{
    alert('choose at least one skill')
  }
})
})
// localStorage.clear()