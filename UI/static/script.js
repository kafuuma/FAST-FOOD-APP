
window.addEventListener("load",start_up);
function start_up(){
    var signup = document.getElementById("signup");
    var signin = document.getElementById("signup");
    var cart  =  document.getElementById("cart")
    var log  = document.getElementById("log");
    var block = document.getElementById("log1");
    console.log(log);
    console.log(block)
    if (signup){
        signup.addEventListener("click",sign_up,false);
    }

    else if(signin){
        signin.addEventListener("click",sign_up,false);
    }
    
    else if(cart){
        cart.addEventListener("click",display_catbox,false);
    }

    else if(log){
        log.addEventListener("click",display_login,false)
    }

    else{
        
    }

}





function display_catbox(){
    document.getElementById("cat-box").style.display = "block";
}

function display_login(){
    document.getElementsById("log1").style.display = "block";
}


function sign_in(){
    document.getElementsById("log2").style.display = "block";
}

function sign_up(){
    document.getElementsById("log1").style.display = "block";
}

function showSignUp()
{
    if(document.getElementById('log1').style.display = "none"){
        if(document.getElementById('log2').style.display = "block"){
            document.getElementById('log1').style.display = "block";
            document.getElementById('log2').style.display = "none";
        }else{
            document.getElementById('log1').style.display = "block";
        }
    }
}

function showLogin()
{
    if(document.getElementById('log2').style.display = "none"){
        if(document.getElementById('log1').style.display = "block"){
            document.getElementById('log2').style.display = "block";
            document.getElementById('log1').style.display = "none";
        }else{
            document.getElementById('log2').style.display = "block";
        }
    }
}
