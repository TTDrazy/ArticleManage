//请求数据地址
const requestUrl = "http://5bd30967c8f9e400130cb86b.mockapi.io";

//判断是否为空
var checkEmpty = function (value) {
    return value != undefined && value != "" && value != null;
}

//注销账号
function removeUser() {
    Cookies.remove("userid");
    alert("您已注销！");
    window.location = "../user/login.html";
}