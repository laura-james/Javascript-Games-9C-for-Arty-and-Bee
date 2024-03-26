function login(){
    var uname = document.getElementById("username").value;
    var pword = document.getElementById("password").value;
    if(uname == "Bob" && pword == "cake"){
        alert("Welcome!");
        document.getElementById("testerPanel").style.display="block";
        document.getElementById("loginPanel").style.display="none";
    }else{
        alert("ACCESS DENIED");
        document.getElementById("testerPanel").style.display="none";
        document.getElementById("loginPanel").style.display="block";
    }//end if    
}//end function

function testLove(){
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var rand = Math.floor(Math.random() * 100); //makes random num    
    document.getElementById("msg").innerHTML = name1 + " loves " + name2 + " " + rand  + "%";   
}