import React from 'react'

import ReactDOM from 'react-dom/client'

const amazon = (
  <a href="https://www.amazon.com" target='_blank'>Visit Amazon</a>
)

const flipkart = (
  <a href="https://www.flipkart.com" target='_blank'>Visit Flipkart</a>
)

const reactElement = React.createElement(
  'a',
  { href: "https://www.philfans.com", target: "_blank"},
  'Visit Philans'
)

ReactDOM.createRoot(document.getElementById('root')).render(
<>
{amazon}
<br></br>
{flipkart}
{<br></br>}
{reactElement}
</>
)
