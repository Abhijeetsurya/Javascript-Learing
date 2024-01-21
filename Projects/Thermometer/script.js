const loadtemp = () =>{
    let temp = document.querySelector('#temp');
    temp.innerHTML = '&#xf2cb';
    temp.style.color = "#ffffff"

    setTimeout(()=>{
        temp.innerHTML="&#xf2ca;"
        temp.style.color="#f8b627"
    }, 1000)

    setTimeout(()=>{
        temp.innerHTML="&#xf2c8;"
    }, 2000)

    setTimeout(()=>{
        temp.innerHTML="&#xf2c7;"
        temp.style.color="#d63031"
    }, 3000)
}

loadtemp()

setInterval(loadtemp, 5000)
