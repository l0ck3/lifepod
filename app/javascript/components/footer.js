const boutton = document.getElementById("versCategories")
const croix = document.getElementById("fermer")

function showFooter() {
  const footer = document.getElementById("myFooter")
  footer.classList.toggle('invisible')
}

export function click() {
  boutton.addEventListener('click', showFooter)
  croix.addEventListener('click', showFooter)
}
