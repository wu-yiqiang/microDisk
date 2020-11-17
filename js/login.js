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
    //^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$
    var reg = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$", "g")
    var final = reg.test(emial_info)
    if (final != true) {
        // 匹配失败时，生成提示信息

        //先将其他提示信息向下移动80px,再添加提示信息
        //遍历所有类名为woring的html，然后将woring的定位修改为原来的top值+80px
        var woringclass = document.getElementsByClassName("woring")
        woringclass.style.top=`(parseInt(woringclass.style.top)+80+"px")`

        //在页面的右上角生成报警窗口
        var woring_info=`<div class="woring">
                            <span class="iconfont icon-anquan1"></span>
                            <div>
                                <h3>登录失败</h3>
                                <h4>用户名或密码错误</h4>
                            </div>
                        </div >`
        document.getElementById("tops").insertBefore(woring_info,null)
        alert("匹配失败")
    } else {
        // 匹配成功时，将数据发送至服务器，再接受由服务器发送到客户端的文件
        
    }


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





    /*三秒之后从下往上依次清除报警框*/



}
