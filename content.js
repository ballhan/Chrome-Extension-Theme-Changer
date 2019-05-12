chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        alert("hi");
    console.log(request);
    var bgColor = request.bgColor;
    var fontColor = request.fontColor;
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    document.body.style.outline = fontColor;
});