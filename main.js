
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
    fuck.style.background = "#fff7e2"
  }
  else{
    fuck.style.background = "#202020"
  }
}

const fontmode = (color) => {
  primary.style.color = `${color}`
  if(color == "#202020"){
    fuck.style.color = "#fff7e2"
  }
  else{
    fuck.style.color = "#202020"
  }
}

modebtn.addEventListener("click",() => {
  if(primary.style.background == "#fff7e2"){
    mode("#202020")
    fontmode("#fff7e2")
    modebtnspan.innerText = "dark"
  }
  else{
    mode("#fff7e2")
    fontmode("#202020")
    modebtnspan.innerText = "light"

  }

})

