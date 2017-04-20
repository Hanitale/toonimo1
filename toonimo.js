$('button').click(function(){
    var otherArray = [];
    var divs = $('div');
    var divArray =$.makeArray(divs);

     for(var i=0; i< divArray.length; i++){
        otherArray.push( divArray[i].innerText);
    }
   otherArray.sort();

   for(var i=0; i<otherArray.length; i++){
       divArray[i].innerText = otherArray[i];
   }

   var newHtml = "<h1>one moment please</h1>";

    $('div').remove();
    $('button').remove();
   $('body').append(divArray);


});

