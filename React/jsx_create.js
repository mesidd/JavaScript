function customRender(reactElement, mainContainer){
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href',reactElement.props.href)
  domElement.setAttribute('target',reactElement.props.target)
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
