let select=document.getElementById("Select");
let button=document.querySelector("button");
let squareWrapper=document.querySelector(".square_wrapper");

button.addEventListener("click", function(){
    squareWrapper.innerHTML="";
    switch (select.value){
        case '1':
            for(let i=1;i<101;i++){
                let tempSquare= document.createElement("div");
                tempSquare.classList.add("square");
                squareWrapper.appendChild(tempSquare);
                let tempspan= document.createElement("span");
                tempspan.innerHTML=i;
                tempSquare.appendChild(tempspan);
            }
        break;
        case '2':
            for(let i=1;i<82;i++){
                let tempSquare= document.createElement("div");
                tempSquare.classList.add("square","square_9");
                squareWrapper.appendChild(tempSquare);
                let tempspan= document.createElement("span");
                tempspan.innerHTML=i;
                tempSquare.appendChild(tempspan);
            }
        break;
        case '3':
            for(let i=1;i<50;i++){
                let tempSquare= document.createElement("div");
                tempSquare.classList.add("square","square_7");
                squareWrapper.appendChild(tempSquare);
                let tempspan= document.createElement("span");
                tempspan.innerHTML=i;
                tempSquare.appendChild(tempspan);
            }
        break;
    }
    let squares= document.getElementsByClassName("square");
    // console.log(squares);
    let bombs=[];
    for(let i=0;i<16;i++)
        bombs[i]=Math.floor(Math.random() * squares.length + 1);
    console.log(bombs);
    let points=0;
    for(let i=0;i<squares.length;i++){
        let isbomb=false;
        for(let a=0;a<16;a++){
            if(i==bombs[a])
                isbomb=true;
        }
        squares[i].addEventListener("click",function(){            
            if(isbomb){
                this.classList.add("bomb");
                alert("hai perso\nil punteggio: "+points);
                location.reload();
            }
            else{
                this.classList.add("clicked");
                points++;
            }
        })
    }
})
