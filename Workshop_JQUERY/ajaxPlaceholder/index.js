$('document').ready(()=>{
    $('#btn1').click(()=>{
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/users",
            method:"GET",
            success:(x)=>{
                console.log(x);
                var table="<table id='newT'><thead> <tr><th>id</th><th>name</th><th>usernmae</th><th>email</th><th>website</th></thead> </tr>"  ;
                for(var i in x){
                    
                    console.log(x[i].name);

                   
                table+="<tr><td>"+x[i].id+"</td><td>"+x[i].name+"</td><td>"+x[i].username+"</td><td>"+x[i].email+"</td><td>"+x[i].website+"</td></tr>";
                }   
                table+="</tbody> </table>";
                $('#dtable').addClass('table');
                $('#dtable').addClass('td');
                $('#dtable').addClass('th');
                $('#dtable').append(table);

            
            },
            error:(e)=>{
                alert("Error: "+e)
            }
        })


        
    })
    $('#btn2').click(()=>{
        $('#newT').DataTable();
       
    })
})