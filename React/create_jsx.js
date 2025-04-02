function customRender(reactElement, mainContainer){
  
  const domElement = document.createElement(reactElement.type)
  
  domElement.innerHTML = reactElement.children

  
  // Manually Adding Each Attribute - Not Efficient
  domElement.setAttribute('href',reactElement.props.href)
  domElement.setAttribute('target',reactElement.props.target)

  // Alternate and Efficient Way
  // for (const key in reactElement.props) {
  //   domElement.setAttribute(key, reactElement.props[key])
  // }
  
  console.log(reactElement.props.href)
  mainContainer.appendChild(domElement)

}

const reactElement = {
  type: 'a',
  props: {
    href: "https://www.google.com",
    target: "_blank"
  },
  children: "Click me to visit"
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
