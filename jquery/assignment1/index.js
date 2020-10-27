$('document').ready(()=>{
   
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/photos",
            method:"GET",
            success:(x)=>{
               // console.log(x);
              
                for(var i in x){
                    var table="<div class='a'>"  ;  
                    
                   // console.log(x[i]);
                table+="<img src='"+x[i].thumbnailUrl+"'></br>"
                + "<label>"+x[i].title+"</label></br><label>"
                +x[i].id+"</label></br>";
                    
               
            table+="<button> add to cart </button>  </div>";
          
            $('#dtable').append(table);

            
            }   

            
            },
            error:(e)=>{
                alert("Error: "+e)
            }
        })


        
    
    
})