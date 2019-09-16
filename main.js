$.ajax({
    type: "GET",
    url: "https://api.evand.com/events",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    //age request movafag bood ye function tarif mikonim
    success: function(result){
        //motagayer stre doros mikonim ke beriza dakhele in
        let stre = ""
        //dakhele loop mindazim ke aksa tekrar she
        for(let i = 0; i < result.data.length; i++){
            //concat mikonim ke aksa dar biyad
            //neveshte germez adrese aksas
            stre+="<br>"+"<img src='"+result.data[i].cover.original+"' >"
         }
         //dive ma id demo dare .ineer html ro barabar ba stre garar midim
         $("#demo").html(stre)
        
    },
    //age request movafag nabod in error
    Error: function(result){
        alert("Error!");
    }
});

