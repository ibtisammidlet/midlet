// liblet
function waitForElement(id, callback){
    var poops = setInterval(function(){
        if($(id).length){
            clearInterval(poops);
            callback();
        }
    }, 100);
}



/* function:
waitForElement("jquery selection eg [value:hhh]", function(){
    // element is loaded.. do stuff
});
*/