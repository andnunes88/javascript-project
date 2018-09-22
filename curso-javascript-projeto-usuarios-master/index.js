let fields = document.querySelectorAll("#form-user-create [name]");
var user = {}


fields.forEach(function(field, index){

    if(fields.name == "gender"){
        
        if(fields.checked){
            user[field.name] = field.value;
        }
        
    }else{
        user[field.name] = field.value;
    }

    

});

console.log(user);
