function setCookie(CookieName, cookieValue, expiryDate) {
    let userName = document.getElementById("name").value;
    let userAge = document.getElementById("number").value;
    let list = document.getElementById("colors");
    let color = document.getElementById("colors").selectedIndex;
    let Female = document.getElementById("female");
    let date = new Date();
    cookieValue = userName;
    CookieName = "UserName";
    cookieNumVal = userAge;
    CookieNumName = "Age";
    expiryDate = date.getMonth() + 2;
    document.cookie = CookieName + "=" + cookieValue + ";expires=" + expiryDate;
    document.cookie = CookieNumName + "=" + cookieNumVal + ";expires=" + expiryDate;
    document.cookie = "Color" + "=" + "" + ";expires=Thu, 18 Dec 2013 12:00:00 UTC;"
    let val = list.options[color].value;
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
    setCookie();
    window.location.assign("WelcomePage.html")
}