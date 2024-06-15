


let dice1=document.getElementById("dice1");
let dice2=document.getElementById("dice2");



document.body.addEventListener("click",output);


function output(){
    let player1=Math.ceil(Math.random()*6);
    let player2=Math.ceil(Math.random()*6);

    show_dice(player1,1);
    show_dice(player2,2);

    let header=document.getElementById('header');
    if(player1>player2){
        header.innerHTML="<p> PLAYER 1 WINS </p>"
    }
    else if(player1<player2){
        header.innerHTML="<p> PLAYER 2 WINS </p>"
    }
    else{
        header.innerHTML="<p> DRAW </p>"
    }
}

function show_dice(random_num,dice){
    
    if(dice==1){
        let circles=dice1.getElementsByClassName("num");
        // console.log(typeof(circles));
        arr=Array.from(circles);
        arr.forEach(e => {
            e.style.visibility="visible";
        });
        switch (random_num) {
            case 1:
                circles[0].style.visibility="hidden";
                circles[1].style.visibility="hidden";
                circles[2].style.visibility="hidden";
                circles[3].style.visibility="hidden";
                circles[0].style.visibility="hidden";
                circles[5].style.visibility="hidden";
                circles[6].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                circles[8].style.visibility="hidden";
                break;
            case 2:
                circles[1].style.visibility="hidden";
                circles[2].style.visibility="hidden";
                circles[3].style.visibility="hidden";
                circles[4].style.visibility="hidden";
                circles[5].style.visibility="hidden";
                circles[6].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                break;
            case 3:
                circles[1].style.visibility="hidden";
                circles[2].style.visibility="hidden";
                circles[3].style.visibility="hidden";
                circles[5].style.visibility="hidden";
                circles[6].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                break;
            case 4:
                circles[1].style.visibility="hidden";
                circles[3].style.visibility="hidden";
                circles[4].style.visibility="hidden";
                circles[5].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                break;
            case 5:
                circles[1].style.visibility="hidden";
                circles[3].style.visibility="hidden";
                circles[5].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                break;
            default:
                circles[1].style.visibility="hidden";
                circles[4].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                break;
        }
    }

    else{
        let circles=dice2.getElementsByClassName("num");

        arr=Array.from(circles);
        arr.forEach(e => {
            e.style.visibility="visible";
        });
        switch (random_num) {
            case 1:
                circles[0].style.visibility="hidden";
                circles[1].style.visibility="hidden";
                circles[2].style.visibility="hidden";
                circles[3].style.visibility="hidden";
                circles[0].style.visibility="hidden";
                circles[5].style.visibility="hidden";
                circles[6].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                circles[8].style.visibility="hidden";
                break;
            case 2:
                circles[1].style.visibility="hidden";
                circles[2].style.visibility="hidden";
                circles[3].style.visibility="hidden";
                circles[4].style.visibility="hidden";
                circles[5].style.visibility="hidden";
                circles[6].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                break;
            case 3:
                circles[1].style.visibility="hidden";
                circles[2].style.visibility="hidden";
                circles[3].style.visibility="hidden";
                circles[5].style.visibility="hidden";
                circles[6].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                break;
            case 4:
                circles[1].style.visibility="hidden";
                circles[3].style.visibility="hidden";
                circles[4].style.visibility="hidden";
                circles[5].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                break;
            case 5:
                circles[1].style.visibility="hidden";
                circles[3].style.visibility="hidden";
                circles[5].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                break;
            default:
                circles[1].style.visibility="hidden";
                circles[4].style.visibility="hidden";
                circles[7].style.visibility="hidden";
                break;
        }
    }
    
}






