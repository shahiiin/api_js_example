// Use ajax for send request to api
$.ajax({
    type: "GET",
    url: "https://api.evand.com/events",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    // If the request was successful and received a valid response
    success: function(result){
        // We define a variable for storing photos links in it
        let stre = ""
        // We create a for loop to access the photos link
        result.data.forEach(function(item){
            // some item have null cover.orginal so we cheack two place to access the photos link
            try{
                // We paste photos link in html image tage and save it to stre variable
                stre+="<br>"+"<img src='"+item.cover.original+"' >"
            }catch(error){
                stre+="<br>"+"<img src='"+item.organization.logo.original+"' >"
            }
          })
        // And finally we past stre variable to div tag because show image in page
        $("#demo").html(stre)
        
    },
    // If the request wasn't successful and return any error or received a unvalid response
    Error: function(result){
        alert("Error!");
    }
});

