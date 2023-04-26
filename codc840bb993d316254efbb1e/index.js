
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScoreVal = 0
let guestScoreVal = 0

function plus1() { 
    homeScoreVal += 1
    homeScoreEl.textContent = homeScoreVal
   
}

function plus2() { 
    homeScoreVal += 2
    homeScoreEl.textContent = homeScoreVal
   
}

function plus3() { 
    homeScoreVal += 3
    homeScoreEl.textContent = homeScoreVal
   
}



function guestPlus1() { 
    guestScoreVal += 1
    guestScoreEl.textContent = guestScoreVal
   
}

function guestPlus2() { 
    guestScoreVal += 2
    guestScoreEl.textContent = guestScoreVal
   
}

function guestPlus3() { 
    guestScoreVal += 3
    guestScoreEl.textContent = guestScoreVal
   
}
