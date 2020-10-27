$('document').ready(()=>{
    $('#btnRed').click(()=>{
        $('#btnRed').css({"background-color":"green"})
        // $('#btnBlue').css({"background-color":"none"})
        // $('#btnGreen').css({"background-color":"none"})
        $('.redC').css({"display":"block"});
        $('.blueC').css({"display":"none"});
         $('.greenC').css({"display":"none"});
    })

    $('#btnBlue').click(()=>{
        $('#btnBlue').css({"background-color":"green"})
        // $('#btnGreen').css({"background-color":"none"})
        // $('#btnRed').css({"background-color":"none"})
        
        $('.blueC').css({"display":"block"});
         $('.redC').css({"display":"none"});
         $('.greenC').css({"display":"none"});
    })

    $('#btnGreen').click(()=>{
        $('#btnGreen').css({"background-color":"green"})
        // $('#btnRed').css({"background-color":"none"})
        // $('#btnBlue').css({"background-color":"none"})

        $('.greenC').css({"display":"block"});
         $('.blueC').css({"display":"none"});
         $('.redC').css({"display":"none"});
    })

    $('#btnAll').click(()=>{
        $('#btnAll').css({"background-color":"green"})
        $('.blueC').css({"display":"block"});
        $('.greenC').css({"display":"block"});
        $('.redC').css({"display":"block"});
    })
})