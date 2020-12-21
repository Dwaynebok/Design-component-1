$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    $( ".card" ).hover(
        function() {
            $(this).addClass('shadow-lg').css('cursor', 'pointer');
        }, function() {
            $(this).removeClass('shadow-lg');
        }
    );

});

<!--array of country's-->

let  countryList = [ 'Germany', 'Switzerland','Netherlands','France','Belgium','London','USA','India','Finland','Denmark','Canada','Australia','Argentina','Italy','Pakistan','Ghana','Nigeria','Spain','Mexico','Albania','Afghanistan', 'Turkey','Morocco','Ireland','Iceland'];

for (let i=0;i<countryList.length;i++){
    console.log(countryList[i]);
}



/*
countryList.forEach(function(item, index, array) {
    console.log(item, index)
})
 */