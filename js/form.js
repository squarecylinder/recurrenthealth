$(document).ready(()=>{

    $("#submit-btn").click(function(event) {
        event.preventDefault();
        const formData = {
        name: $("#Name").val(),
        email: $("#Email").val(),
        company: $("#Company").val(),
        phone: $("#PhoneNumber").val(),
        message: $("#Message").val()
        }
        console.log("submit was hit")
        console.log(formData)
        $("#submitted").removeClass("hidden");
        $.ajax({
            type: "POST",
            url: "./js/mailer.php",
            dataType: "json",
            data: JSON.stringify(formData)
        }).done(function (data) {
            console.log(data);
            alert("It's OK!");
        }).fail(function (data) {
            console.log(data);
        });
    })
})