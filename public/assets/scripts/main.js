
// Wait for DOM to Load
jQuery(function($) {
    
    // Create New Socket Connection using Socket.io
    var socket = io();
    
    $("button.send").on("click", function(){
        socket.emit("message", $("input.text").val())
    });
    socket.on("postMessage", function(message){
     $(".messagebox").append($("<p>").text(message))   
    })
    
});