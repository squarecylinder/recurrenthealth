$(document).ready(()=>{

    $("#submit-btn").on("click", function(event) {
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
            TYPE: "POST",
            URL: "../php/mailer.php",
            DATA: JSON.stringify(formData),
            success: function(){
                alert("form sent")
            }
        })
    })
})