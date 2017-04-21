$('button').click(function(){
    var tempArray = [];
    var divs = $('div');
    var divArray =$.makeArray(divs);

    for(var i=0; i< divArray.length; i++){
        var nameStyle = {name:divArray[i].innerText,style:divArray[i].style.backgroundColor};
        tempArray.push(nameStyle);
    }
 
    tempArray.sort(function(a, b){
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1
    if (nameA > nameB)
        return 1
    return 0
});

   for(var i=0; i<divArray.length; i++){
       divArray[i].style.backgroundColor = tempArray[i].style;
       divArray[i].innerText = tempArray[i].name;

   }

    $('div').remove();
    $('button').remove();
   $('body').append(divArray);
});

