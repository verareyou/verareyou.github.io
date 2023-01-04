
const primary = document.getElementById('header');
const body = document.body;
const modebtn = document.getElementById('modebtn');
const modebtnspan = document.getElementById('modebtnspan');
const fuck = document.getElementById('fuck');
const fluidbox = document.getElementById('fluidbox');


const mode = (color) => {
  primary.style.background = `${color}`
  fluidbox.style.background = `${color}`
  if(color == "#111111"){
    fuck.style.background = "white"
  }
  else{
    fuck.style.background = "#111111"
  }
}

const fontmode = (color) => {
  primary.style.color = `${color}`
  if(color == "#111111"){
    fuck.style.color = "white"
  }
  else{
    fuck.style.color = "#111111"
  }
}

modebtn.addEventListener("click",() => {
  if(primary.style.background == "white"){
    mode("#111111")
    fontmode("white")
    modebtnspan.innerText = "dark"
  }
  else{
    mode("white")
    fontmode("#111111")
    modebtnspan.innerText = "light"

  }

})

