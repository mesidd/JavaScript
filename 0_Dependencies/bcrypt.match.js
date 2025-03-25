const bcrypt = require("bcrypt");

function create(password, random) {

  bcrypt.hash(password, 10).then((e)=> {

    console.log(e);

    bcrypt.compare( password, random ).then((e)=> {

      console.log(e);

    });

  })
}

create("Hello", "#glrn$glns"); // passing random value to check vs generated value
