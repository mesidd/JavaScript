  <script>
    const para = document.getElementById('items');
    const data = fetch('https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1');
    data
    .then((response)=> {
      response.json()
      .then((obj)=> {
        const value = obj.data.data;
        value.forEach((data)=> {
          const li = document.createElement('li');
          li.innerText= data.content;
          items.appendChild(li);
        });
      })
    }).catch(()=> console.log("Error converting Json"))
    .finally(()=> console.log("Executed"))
  </script>

 /* 
 A part of Data for reference :
 "data": [
      {
        "categories": [
          "science"
        ],
        "id": 140,
        "content": "Science Fact: Roundhouse kicks are comprised primarily of an element called Chucktanium."
      },
  */
