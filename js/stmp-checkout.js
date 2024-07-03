function sendMailcheckout() {
    var params = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("text").value,
      address: document.getElementById("address").value,
    };
  
    const serviceID = "service_ov7i3u1";
    const templateID = "template_m0zgpj5";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("text").value = "";
          document.getElementById("address").value = "";
          console.log(res);  
      })
      .catch(err=>console.log(err));
  
  }
  