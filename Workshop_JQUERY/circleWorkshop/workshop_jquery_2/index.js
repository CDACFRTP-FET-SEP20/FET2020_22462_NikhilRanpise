$(document).ready(function(){
    var header= $("header");
    var footer= $("footer");
    var section= $("section");
    var aside= $("aside");
    var nav= $("nav");

    header.height('100px');
    header.css('background-color','yellow');

    section.height('500px');
    section.css('background-color','darkslateblue');


    aside.height('500px');
    aside.css({'width': '30%', 'float': 'right', 'background-color':'darkred'});

    nav.height('500px');
    nav.css({ 'width': '30%', 'float': 'left', 'background-color':'lightblue'});

    footer.height('100px');
    footer.css('background-color','green');


})