// 2)이메일, 비밀번호 양식이 맞지 않았을때 알려주기 

$(".register").click(function() {
    // 1)회원가입 버튼을 눌렀을때 입력했는지 안했는지 확인하기

    const email = $("#inputEmail3").val();
    const password = $("#inputPassword3").val();
    const gender = $("#gender").val();
    let like = "";

    //라디오버튼의 value를 가져오는 방법 --> 여러개를 한꺼번에 가져오기 때문에 each를 사용 
    $('input[name=gridRadios]').each(function(){
        var value = $(this).val();      //$(this)는 선택자가 현재 가르키는 요소(element)
        
        //사용자가 체크한 값만 가져오기
        var checked = $(this).prop("checked")

        console.log(checked)

        if(checked) {
            like = value
            return; //함수는 return문을 만나면 끝난다.(목적을 이루면 함수를 끝낸다.)
        }
    })


    //null. unfefindde, ''(빈문자열), 0 -> false


    console.log(email) //빈문자열
    console.log(password) //빈문자열
    console.log(gender) //null
    console.log(like)


    if (!email) { //이메일에 입력된게 없을때
        alert("이메일을 입력해 주세여!")
        return;
    }     else  {//이메일이 입력이 됐을때
        if(!emailCheck(email)){
            alert("이메일 형식에 맞지 않습니다.")
            return;
        }
    }
    
    if (!password) { //패스워드에 입력된게 없을때 
        alert("비밀번호를 입력해 주세요!")
        return;
    } else {
        if(!pwdCheck(password)) {
            alert("비밀번호 형식에 맞지 않습니다.")
            return
        }

    }

    if(!gender) {
        alert("성별을 선택해주세요 ")
        return;
    }


    alert('회원가입이 완료 되었습니다!');
    location.href = "index.html"


           // 정규식
function pwdCheck(pwd) {
    //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd);
}
  
function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
}

});