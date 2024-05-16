Email.send({
    Host : "",
    Username : "",
    Password : "",
    To : '',
    From : "",
    Subject : "",
    Body : ""
}).then(
  message => alert(message)
);
