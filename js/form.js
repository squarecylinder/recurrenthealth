$(document).ready(()=>{
    $("#submit-btn").on("click", function(event) {
        event.preventDefault();
        console.log("submit was hit")
        $("#submitted").removeClass("hidden");
        // $.ajax({
        //     URL: somephp.url,
        //     TYPE: "POST",
        //     DATA: JSON.stringify(formData),
        //     success: function(){
        //         alert("form sent")
        //     }
        // })
    })
})