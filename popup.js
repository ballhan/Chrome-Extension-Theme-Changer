document.getElementById("dark").addEventListener("click", function(){changeTheme('dark')});
document.getElementById("green").addEventListener("click", function(){changeTheme('green')});

function changeTheme(theme) {
    var theme = theme;

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        if (theme=='dark') {
            var bgColor = '#000';
            var fontColor = '#fff';
        }
        if (theme=='green') {
            var bgColor = '#6ca580';
            var fontColor = '#000';
        }

        let message = {
            bgColor: bgColor,
            fontColor: fontColor
        }
        chrome.tabs.sendMessage(activeTab.id, message);
        console.log(activeTab, message, "success");
    });
 
}