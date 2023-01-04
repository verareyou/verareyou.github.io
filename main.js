
const primary = document.getElementById('header');
const body = document.body;
const modebtn = document.getElementById('modebtn');
const fuck = document.getElementById('fuck');


const mode = (color) => {
  primary.style.background = `${color}`
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
  }
  else{
    mode("white")
    fontmode("#111111")

  }
})