var inp = document.getElementById("inp");
var count = document.getElementById("count");
var userNumber = document.getElementById("userNumber");
function clk() {
    var random = Math.floor(Math.random()*50)
    if(inp.value == random)
        {
            Swal.fire({
                title: "Congratulation You win the game",
                text: `Guess number is ${random}`, 
                icon: "success"
              }).then(function (result) {
                if(result.isConfirmed)
                    {
                        location.href = 'index.html';
                    }
              })
        }
        else if(inp.value != random)
            {
                userNumber.innerText = userNumber.innerText + inp.value + "," 
                count.innerText--;
            }
        if(count.innerText == 0)
            {
                Swal.fire({
                    title: "You loss the game",
                    text: `Guess number is ${random}`, 
                    icon: "error"
                  }).then(function (result) {
                    if(result.isConfirmed)
                        {
                            location.href = 'index.html';
                        }
                  })
            }
            inp.value = '';
}