let userAge, list, color, Female, userName, date, val, expiryDate;

function saveData() {
    userAge = document.getElementById("number").value;
    list = document.getElementById("colors");
    color = document.getElementById("colors").selectedIndex;
    Female = document.getElementById("female");
    userName = document.getElementById("name").value;
    date = new Date();
    val = list.options[color].value;
    expiryDate = date.getMonth() + 2;
}

function setCookie(cookieValue, AgeValue, expiryDate) {

    // cookieValue = userName;
    CookieName = "UserName";
    // cookieNumVal = userAge;
    CookieNumName = "Age";
    document.cookie = CookieName + "=" + cookieValue + ";expires=" + expiryDate;
    document.cookie = CookieNumName + "=" + AgeValue + ";expires=" + expiryDate;
    document.cookie = "Color" + "=" + "" + ";expires=Thu, 18 Dec 2013 12:00:00 UTC;"
    document.cookie = "Color" + "=" + val + ";expires=" + expiryDate;
    if (Female.checked) {
        document.cookie = "gender" + "=" + "" + ";expires=Thu, 18 Dec 2013 12:00:00 UTC;"
        document.cookie = "gender" + "=" + "Female" + ";expires=" + expiryDate;
    } else {
        document.cookie = "gender" + "=" + "" + ";expires=Thu, 18 Dec 2013 12:00:00 UTC;"
        document.cookie = "gender" + "=" + "male" + ";expires=" + expiryDate;
    }
}

function newDoc() {
    setCookie()
    if (userAge == "undefined" || uName == "undefined" || uColor == "undefined" || expiryDate == "undefined") {
        throw "Error Msg";
    }
}

function getAllcookie() {
    var arr = [];
    var sCookie = document.cookie.split(";")
    for (var i = 0; i < sCookie.length; i++) {
        arr[sCookie[i].split("=")[0].trim()] = sCookie[i].split("=")[1]
    }
    return arr;
}
let resualt, container, uName, uColor;

function checkCookie() {
    resualt = getAllcookie();
    container = document.getElementById("message");
    uName = resualt["UserName"];
    uColor = resualt["Color"];
}
checkCookie()