jQuery(function ($){
    window.get_json_data = function(){
            let json_data = {}
            let data_found = false
            input_fields = $(".required-fields")
            for(var i=0; i<input_fields.length; i++){
                console.log($(input_fields[i]).attr('type'))
                    if($(input_fields[i]).attr('type')=='radio'){
                        console.log($(input_fields[i]).prop("checked"));
                        if($(input_fields[i]).prop('checked')){
                            data_found = true 
                            json_data[input_fields[i].name] = input_fields[i].value
                        }
                    }else{
                        json_data[input_fields[i].name] = input_fields[i].value
                        if(input_fields[i].value){
                            data_found = true
                        }
                    }
            }
            return {data: json_data, data_found: data_found}
        }

    $(".form-submit").on("click", function(e){
        e.preventDefault()
        if(window.confirm("Note: If you submitted form once then you cant refilled again ")){
        const {data, data_found} = window.get_json_data()
        if(data_found){
            $.ajax({
                url: "eoi_questionaires.json",
                method: "post",
                data: {'data': JSON.stringify(data),completed: true}, 
                success: function(response){ 
                    alert("Data submitted successfully")
                    window.location.href= "/thankyou"
                }
    
            })
        }else{
            alert("Blank form can't be submited")
        }
    }
    })

    $(".form-save").on("click", function(e) {
        let {data, data_found} = window.get_json_data()
        if(data_found){
        $.ajax({
            url: "eoi_questionaires.json",
            method: "post",
            data: { 'data': JSON.stringify(data),completed: false },
            success: function (response) {
                alert("Data saved successfully")
                window.location.href = "/thankyou"
                
            }

        })
        }else{
            alert("Blank form can't be saved")
        }
    })

    $("body").on('click','.addNewTag',function (e) {
        new_fields = $(e.currentTarget).parent().parent().clone()
        input_fields = new_fields.find('input')
        for (var i = 0; i < input_fields.length; i++) {
            element = $(input_fields[i])
            if (element.attr('type') != "file") {
                name = element.data('name')
                total_fields = $("[data-name='" + name + "']").length + 1
                element.attr('name', element.data('name') + "[" + total_fields + "]")
            }
            console.log(new_fields.find(".file_name"));
            if(new_fields.find('.file_name').length >= 1){      
                new_fields.find(".file_name").html("")
            }
            element.val("")
        }
        remove_button = $(e.currentTarget).parent()
        $(new_fields[0]).insertBefore($(e.currentTarget).parent().parent())
        remove_button.html("<div><label></label></div><a href='#' class='removeNewTag'>Remove</a>")
    });


    $("body").on("click", ".removeNewTag", function(e){
        $(e.currentTarget).parent().parent().remove()
    })

})