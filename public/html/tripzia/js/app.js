const validationBtn = document.getElementById('validationBtn');


function validInputs(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === null || inputs[i].value.trim() === '') {
            alert("Fill all Inputs");
            return false;
        }
    }
    return true;
}

function sendMail() {
    let inputElements = [
        'name',
        'email',
        'subject',
        'phone',
        'message'
    ];

    let areInputsFilled = validInputs(inputElements.map(id => document.getElementById(id)));

    if (areInputsFilled) {
        const params = inputElements.reduce((acc, id) => {
            acc[id] = document.getElementById(id).value;
            return acc;
        }, {});

        const serviceID = "service_nn40bzy";
        const templateID = "template_8figwwq";

        emailjs.send(serviceID, templateID, params)
            .then((res) => {
                inputElements.forEach(id => document.getElementById(id).value = "");
                console.log(res);
                alert("Your message has been sent successfully");

                validationBtn.disabled = false;
                validationBtn.innerText = 'Submit Request!';
            })
            .catch((err) => {
                console.log(err)

                validationBtn.disabled = false;
                validationBtn.innerText = 'Submit Request!';
            });
    } else {
        // Handle case where inputs are not filled before sending mail
        // For example: You might display an error message or take specific actions
    }

    validationBtn.disabled = true;
    validationBtn.innerText = 'Loading...';
}

document.getElementById('validationBtn').addEventListener('click', (event) => {
    event.preventDefault();

    let inputElements = [
        'name',
        'email',
        'subject',
        'phone',
        'message'
    ];

    let areInputsFilled = validInputs(inputElements.map(id => document.getElementById(id)));

    if (areInputsFilled) {
        sendMail();
    } else {
        // Handle case where inputs are not filled
        // For example: You might display an error message or take specific actions
    }
});
