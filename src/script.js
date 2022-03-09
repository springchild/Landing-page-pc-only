function subscribe() {
  let name = prompt(`Hello there! What's your name?`);
  let email = prompt(`Nice to meet you ${name}! What's you email address?`);
  if (name.length > 0 && email.length > 0) {
    let footer = document.querySelector(".footer");
    footer.innerHTML = `<div style='font-size:40px; font-weight:bold'>You're all set, ${name}! </div><br />We'll be sure to send some good stuff to <strong>${email}</strong> every week.`;
  }
}

let signUpButton = document.querySelector("button");
signUpButton.addEventListener("click", subscribe);
