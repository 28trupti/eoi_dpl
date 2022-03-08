jQuery(function ($){
    window.get_json_data = function(){
            let json_data = {}
            input_fields = $(".required-fields")
            for(var i=0; i<input_fields.length; i++){
                    json_data[input_fields[i].name] = input_fields[i].value
            }
            return json_data
        }

    $(".form-submit").on("click", function(e){
        e.preventDefault()
        const data = window.get_json_data()
        $.ajax({
            url: "eoi_questionaires.json",
            method: "post",
            data: {'data': JSON.stringify(data)}, 
            success: function(response){ 
                alert("Data submitted successfully")
                window.location.href= "/thankyou"



            }

        })
    })
})