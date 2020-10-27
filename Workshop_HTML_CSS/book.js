
books=new Array();

function addBook(){
    console.log("Book added");
    
    
    var show=document.getElementById("showBook");
   var book=document.getElementById("bookName").value;
   //var auther=document.getElementById("autherName").value;
   books.push(book);
   alert("book "+book+ " is added");

   var book=document.getElementById("bookName").value=" ";
   //var auther=document.getElementById("autherName").value=" ";
  
    };

    function removeBook(){
        var del=document.getElementById("del");
        del.style.visibility="visible";
        var book=document.getElementById("bookName").value;
       // alert("selected book for deletion "+book);

        var ind=books.indexOf(book);
      
        if(ind== -1)
        {
            var removeBook=books.shift();
        }
        else
        {
            var removedBook=books.splice(ind,1);
        }
        
        alert("book removed")

        //var delBook=document.getElementById("delete").value;

        var book=document.getElementById("bookName").value=" ";
     //   var auther=document.getElementById("autherName").value=" ";
       

    };
    function showAllBook(){
      document.getElementById("showBook").innerHTML= " Currently available books are  "+books.toString();
       
    }
