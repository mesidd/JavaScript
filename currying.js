function sendAutoEmail(to){
  return function(subject){
    return function(body){
      console.log(`Sending email to ${to}\nwith subject ${subject}\n${body}`);
    }
  }
}

let step1 = sendAutoEmail("Alpha@gmail.com")
let step2 = step1("Order Confirmation")

step2("Hey Alpha, your product order is confirmed!")
