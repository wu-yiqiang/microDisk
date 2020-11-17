/*
    本地表单验证
    1.表单不完整
    2.用户名或密码错误
*/


function check_login() {
    /*从上往下依次输出报警信息*/
    var email_list=["@gmail.com","@yahoo.com","@yahoo.com.cn","@msn.com","@hostmail.com","@aol.com","@ask.com","@live.com","@qq.com","@vip.qq.com","@sina.com","@vip.sina.com","@sina.com.cn","@vip.sina.com.cn","@sohu.com","@outlook.com","@icould.com","@opera.com","@163.com","@163.net","@126.com","@128.com","@189.com","@aliyun.com","@inbox.com","@ymail.com"]

    let form=document.forms[0].elements["email"]
    var emial_info=form.value
    //本地验证邮箱
    // alert(email_list.indexOf("@"))
    
    // if (){
    

    // }


   /*匹配从@开始到结束的字符*/
 /*  var patten_list=user_email.splice(email_info.indexOf("@"),user_email.length-1)
   for(let i=0;i<email_list.length;i++){
       if (patten_list==email_list[i]){
           /!*匹配成功*!/
           alert("successful")
           return 0
       }
    }
*/


    /*匹配失败,生成报警框*/
   alert("匹配失败")




    /*三秒之后从下往上依次清除报警框*/



}
