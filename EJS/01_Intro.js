<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
  <h1>Hey From Server</h1>
  <p>Lets do something in EJS.</p>

// Rendering from server this value :
// const details = {
//   name: "Roy",
//   city: "Miami",
//   salary: "$250,000",
//   hobby: ["travel","reading","party"]
// }
  
  <div id="element">
    <% for(let key in det) { %>
      <h2>What's your <%=key%>?</h2>
      <p>Is it <%=det[key]%>.</p>
    <%}%>
  </div>
</body>
</html>
