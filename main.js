
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
    fuck.style.background = "beige"
  }
  else{
    fuck.style.background = "#202020"
  }
}

const fontmode = (color) => {
  primary.style.color = `${color}`
  if(color == "#202020"){
    fuck.style.color = "beige"
  }
  else{
    fuck.style.color = "#202020"
  }
}

const bool = () => {
  if(primary.style.background == "beige"){
    return true
  }
  else if(primary.style.background == "#202020"){
    return false
  }
}

modebtn.addEventListener("click",() => {
  if(bool()){
    mode("#202020")
    fontmode("beige")
    modebtnspan.innerText = "dark"
  }
  else{
    mode("beige")
    fontmode("#202020")
    modebtnspan.innerText = "light"

  }

})

