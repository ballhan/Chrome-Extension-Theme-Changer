document.getElementById("dark").addEventListener("click", function(){changeTheme(0)});
document.getElementById("green").addEventListener("click", function(){changeTheme(1)});

function changeTheme(x){
    if (x == 0) {
        var bgcolor = '#000';
        var color = '#fff';
    } else {
        var bgcolor = '#6ca580';
        var color = '#000';
    }
    document.body.style.backgroundColor = bgcolor;
    document.body.style.color = color;
    document.body.style.outline = color;
    //console.log(bgcolor);
    return;
}