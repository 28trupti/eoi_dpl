jQuery(function ($){
    window.get_json_data = function(){
            let json_data = {}
            let data_found = false
            let all_data_filled = []
            let all_data_filled_status = true
            let empty_fields = []
            input_fields = $(".required-fields")
            for(var i=0; i<input_fields.length; i++){
                    if($(input_fields[i]).attr('type')=='radio'){
                        if($(input_fields[i]).prop('checked')){
                            data_found = true 
                            json_data[input_fields[i].name] = input_fields[i].value
                        }
                    }
                    else { 
                        json_data[input_fields[i].name] = input_fields[i].value
                        if(input_fields[i].value){
                            data_found = true
                        }else{
                            if ($(input_fields[i]).hasClass("required")){
                                all_data_filled_status = false
                                empty_fields.push(input_fields[i])
                            }
                            }
                        }
                    }
                    console.log(empty_fields)
                    console.log(all_data_filled_status)
            
            

        return { data: json_data, data_found: data_found, all_data_filled_status: all_data_filled_status}
        }

    $(".form-submit").on("click", function(e){
        e.preventDefault()
        const { data, data_found, all_data_filled_status} = window.get_json_data()
        if(window.confirm("Note: If you submitted form once then you cant refilled again ")){
            if (all_data_filled_status){
            $.ajax({
                url: "eoi_questionaires.json",
                method: "post",
                data: {'data': JSON.stringify(data),completed: true}, 
                success: function(response){ 
                    alert("Data submitted successfully")
                    window.location.href= "/submit_thankyou"
                }
    
            })
        }else{
            alert("Blank form can't be submited")
        }
    }
    })

    $(".form-save").on("click", function(e) {
        let { data, data_found, all_data_filled} = window.get_json_data()
        console.log(data)
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

    $(".instruction-submit").on("click", function(){
        if($(".instruction-checkbox").prop("checked")){
            window.location.href="/index"
        }else{
            alert("Please click on confirmation to procced")
        }
    })

})