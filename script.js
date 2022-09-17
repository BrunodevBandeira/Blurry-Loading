const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

 

    let load = 0;
    
    let int = setInterval(blurring, 30);
    
    function blurring() {
        load++;
        if(load > 99) {
            clearInterval(int);
        }
    
        loadText.innerText = `${load}%`;
        //load é a quantidade de tempo que queremos que o efeito dure
        //0 a 100 é a quantidade de tempo contabilizado para o efeito
        //1 a 0 é a opacidade
        loadText.style.opacity = scale(load, 0, 100, 1, 0);
        bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    }
    
    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }
 

    function reload() {

        let load = 0;
        
        let int = setInterval(blurring, 30);
        
        function blurring() {
            load++;
            if(load > 99) {
                clearInterval(int);
            }
        
            loadText.innerText = `${load}%`;
            //load é a quantidade de tempo que queremos que o efeito dure
            //0 a 100 é a quantidade de tempo contabilizado para o efeito
            //1 a 0 é a opacidade
            loadText.style.opacity = scale(load, 0, 100, 1, 0);
            bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
        }
        
        // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
        const scale = (num, in_min, in_max, out_min, out_max) => {
            return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        }
    }


document.addEventListener("click", reload);

