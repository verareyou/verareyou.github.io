
const primary = document.getElementById('header');
const body = document.body;
const modebtn = document.getElementById('modebtn');
const modebtnspan = document.getElementById('modebtnspan');
const fuck = document.getElementById('fuck');
const fluidbox = document.getElementById('fluidbox');


const mode = (color) => {
  primary.style.background = `${color}`
  fluidbox.style.background = `${color}`
  if(color == "#202020"){
    fuck.style.background = "white"
  }
  else{
    fuck.style.background = "#202020"
  }
}

const fontmode = (color) => {
  primary.style.color = `${color}`
  if(color == "#202020"){
    fuck.style.color = "white"
  }
  else{
    fuck.style.color = "#202020"
  }
}

modebtn.addEventListener("click",() => {
  if(primary.style.background == "white"){
    mode("#202020")
    fontmode("white")
    modebtnspan.innerText = "dark"
  }
  else{
    mode("white")
    fontmode("#202020")
    modebtnspan.innerText = "light"

  }

})

