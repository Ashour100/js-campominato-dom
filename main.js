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

    
    let randomNum= function(){
        let blackList=[];
        let temp;
        let ver=0;
        let rep=0;
        while(rep==0){
            temp=Math.floor(Math.random() * squares.length + 1);
            for(let i=0;i<blackList.length;i++){
                if(blackList[i]==temp){
                    ver=1;
                }
            }
            if(ver==1)
                rep=1;
            else{
                blackList.push(temp);
                return temp;
            }
        }
    }

    let bombs=[];
    for(let i=0;i<16;i++)
        bombs[i]=randomNum();
    console.log(bombs);


    let points=0;
    let bombReveal= function(){
        for(let i=0;i<squares.length;i++){
            if(bombs.includes(i)){
                squares[i].classList.add("bomb");
            }
        }
    }
    let gameOver= function(){
        alert("hai perso\nil punteggio: "+points);
        location.reload();
    }


    for(let i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function(){            
            if(bombs.includes(i)){
                this.classList.add("bomb");
                setTimeout(bombReveal,400);
                setTimeout(gameOver,500);
            }
            else{
                this.classList.add("clicked");
                points++;
            }
        })
    }
}
);
