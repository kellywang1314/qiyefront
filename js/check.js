function checkUser(User){
    console.log(User);
    if(User.trim().length==0){
        document.getElementById("sp1").innerHTML="请输入用户名";
        document.getElementById("sp1").style.color="red";
    }
}

function checkEmail(Email){
    if(Email.trim().length==0) {
        document.getElementById("sp2").innerHTML = "请输入邮箱";
        document.getElementById("sp2").style.color = "red";
    }else{
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if(!reg.test(Email)){
            document.getElementById("sp2").innerHTML = "请输入正确的邮箱";
            document.getElementById("sp2").style.color = "red";
        }
    }
}

function checkPhone(Phone){
    if(Phone.trim().length==0) {
        document.getElementById("sp3").innerHTML = "请输入手机号码";
        document.getElementById("sp3").style.color = "red";
    }else{
        var reg = re = /^1\d{10}$/;
        if(!reg.test(Phone)){
            document.getElementById("sp3").innerHTML = "请输入11位手机号码";
            document.getElementById("sp3").style.color = "red";
        }
    }
}
