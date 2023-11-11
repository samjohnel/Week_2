


const form = document.getElementById("gform");

form.addEventListener('submit', (e) => {
    if (form.checkValidity()) {
        e.preventDefault();
        submitForm();
    }
});


function submitForm() {
    //Get the form data
    var data = new FormData(form);

    //Create XMLHttpRequest
    var xhr = new XMLHttpRequest();

    //Open the connection and send the data to the server
    xhr.open("POST", postUrl);
    xhr.send(data);

    xhr.onload = () => {
        alert('The message been sent successfully!');
    }
}