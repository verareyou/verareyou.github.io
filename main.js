
const primary = document.getElementById('header');
const body = document.body;
const modebtn = document.getElementById('modebtn');

const mode = (color) => {
  primary.style.background = `${color}`
}

const fontmode = (color) => {
  primary.style.color = `${color}`
}

modebtn.addEventListener("click",() => {
  if(primary.style.background == "#111111"){
    mode("white")
    fontmode("#111111")
  }
  else{
    mode("#111111")
    fontmode("white");

  }
})
