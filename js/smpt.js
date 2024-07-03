function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ov7i3u1";
  const templateID = "template_7lrecda";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Zpráva byla uspěšně odeslána!!")

    })
    .catch(err=>console.log(err));

}
