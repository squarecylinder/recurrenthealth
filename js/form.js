$(document).ready(()=>{

    $("#submit-btn").click(function(event) {
        event.preventDefault();
        let dataString = $('#contactForm').serializeArray();
        console.log(dataString);
        const formData = {
        name: $("#Name").val(),
        email: $("#Email").val(),
        company: $("#Company").val(),
        phone: $("#PhoneNumber").val(),
        message: $("#Message").val()
        }
        console.log(formData)
        $("#submitted").removeClass("hidden");
        $.ajax({
            type: "POST",
            url: "./php/mailer.php",
            data: 'name='+$('#Name').val()+'&email='+$('#Email').val()+'&company='+$('#Company').val()+'&phone='+$('#PhoneNumber').val()+'&message='+$('#message').val()
        }).done(function (data) {
            console.log(data);
            alert("It's OK!");
        }).fail(function (data) {
            console.log(data);
        });
    })
})