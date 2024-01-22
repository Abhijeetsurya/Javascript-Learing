const counter = document.querySelectorAll('.counter');
counter.forEach((counter)=>{
    counter.innerHTML = 0;

    const updateCounter = () =>{
        const targetCount  = +counter.getAttribute('data-target');
        
        const startingCount = Number(counter.innerHTML);

        const incre = targetCount/50;

        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incre)}`
            setTimeout(updateCounter, 50)
        }else{
            counter.innerHTML = targetCount
        }

    }



    updateCounter();
})