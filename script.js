



function submitForm(){

    var nome1 = document.getElementById("name-1").value;
    var nome2 = document.getElementById("name-2").value;
    var nome3 = document.getElementById("name-3").value;
    var nome4 = document.getElementById("name-4").value;
    var nome5 = document.getElementById("name-5").value;
    var message = document.getElementById("group-history").value;


    let formData = {
        "names": [
            nome1,
            nome2,
            nome3,
            nome4,
            nome5
        ],    
        "message": message
    };


    const urlForm  = "https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact";

    fetch(urlForm, {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(formData)
      }).then(res => {
        alert("Formulário submetido!");
      });
}
