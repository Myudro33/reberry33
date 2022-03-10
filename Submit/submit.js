let button = document.querySelector('button')

button.addEventListener('click',function(e){
    e.preventDefault()
    let data = localStorage.getItem('info')
 let info = {...JSON.parse(data)}
 console.log(info);
    fetch('https://bootcamp-2022.devtest.ge/api/application',{
        method: 'post',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body:JSON.stringify(info)
    })
    .then(response=> {
        return response
    })
    .then(data=>{
        console.log(info);
    })
    .catch(error=>{
        console.log(error);
    })
    window.location='/Thanks/thanks.html'
})
// localStorage.clear() 