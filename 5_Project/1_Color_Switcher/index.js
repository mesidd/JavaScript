const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// buttons.forEach((item)=> console.log(item))
buttons.forEach(function(button) {
  // console.log(button)
  button.addEventListener('click',function(e) {
    // console.log("clicked")
    // console.log(e)
    // console.log(e.target.id)
    const color = e.target.id
    switch (color){
      case "pink":
        // const background = document.querySelector('body')
        // background.style.backgroundColor='grey'
        body.style.backgroundColor='pink'
        break;
      case "white":
        body.style.backgroundColor='white'
        break;
      case "yellow":
        body.style.backgroundColor='yellow'
        break;
      case "blue":
        body.style.backgroundColor='blue'
        break;
    }
  })

});