const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history")

let histryList = [];



function rollDice(){
    let rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult)
    diceEl.innerHTML = diceFace;
    histryList.push(rollResult);
    updateRollHistory();
    console.log(rollResult)
}

function updateRollHistory(){
rollHistoryEl.innerHTML = "";
for(let i=0; i<histryList.length; i++){
    const listItem = document.createElement("li")
    listItem.innerHTML = `Roll ${i + 1} : <span>${getDiceFace(histryList[i])} </span>`;
    rollHistoryEl.appendChild(listItem)
}
}

function getDiceFace(rollResult){
    switch(rollResult){
        case 1: 
        return "&#9856;";
        case 2:
        return "&#9857;";
        case 3: 
        return "&#9858;";
        case 4:
        return "&#9859;"
        case 5:
        return "&#9860"
        case 6:
        return "&#9861"
        default:
        return "";
}
}


buttonEl.addEventListener("click", ()=>{
    console.log("clicked")
    diceEl.classList.add("roll-animation");
    setTimeout(()=>{
        diceEl.classList.remove ("roll-animation");
        rollDice();
    }, 1000)
})

