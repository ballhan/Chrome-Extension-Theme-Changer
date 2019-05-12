chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
    var bgColor = request.bgColor;
    var fontColor = request.fontColor;
    //console.log(bgColor, fontColor);
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    document.body.style.outline = fontColor;
    return true;
});