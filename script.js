function getCoupon() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://analytics.internationalservicecheck.com/QRCodeGenerator/Baltics_Code.aspx?ctry=ee", false); // false for synchronous request
    xmlHttp.send(null);
    var code = xmlHttp.responseText;
    document.getElementById("generated-code").innerHTML = code;
}