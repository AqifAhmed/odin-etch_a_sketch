
const btn = document.createElement("button");
btn.textContent = "Enter";

var num;

const cont = document.querySelector(".container");

cont.appendChild(btn);
cont.appendChild(document.createElement('br'));

btn.addEventListener("click", () => {
    
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    cont.appendChild(btn);
    cont.appendChild(document.createElement('br'));


    num = prompt("Enter the Number of Blocks Needed(Keep it no more than 20): ");
    for (let i = 0; i < parseInt(num); i++) {
        for(let j = 0; j < parseInt(num); j++){
            
            const divs = document.createElement("div");
            
            divs.style.display = 'inline-block';
            divs.style.opacity = '0.1';
            
            cont.appendChild(divs);
            
            divs.addEventListener("mouseover", () => {
                let currentOpacity = parseFloat(divs.style.opacity);
                if (currentOpacity < 1) {
                    divs.style.opacity = (currentOpacity + 0.2).toString();
                }
            });
        }
        var br = document.createElement("BR");
        cont.appendChild(br);
    }
});


