let game=document.getElementById("game")
let play=document.getElementById("play")

let x=100
let y=100
let jump=20;


function movePlay()
{
    let width=game.offsetWidth();
    let height=game.offsetHeight();
    let playsize=play.offsetWidth();

    if(direction==="up" && y+jump+playsize <= game)
    {
        y+=jump
    }
    else if(direction==="down" && y-jump >= 0)
    {
        y-=jump
    }
    else if (direction==="left" && x-jump >= 0)
    {
        x-=jump
    }
    else if(direction==="right" && x+jump+playsize <= game)
    {
        x+=jump
    }
}


function updatePosition()
{
    play.style.left=`${x}px`
    play.style.bottom=`${y}px`
}