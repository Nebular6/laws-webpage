function loaded() {
    console.log("The page has now loaded");
}
function display(x){
    console.log("hello")
    var text =" "
    var id = " "
    switch(x){
        case 1:
            console.log("hello 2")
            text="po would not be prosocuted";
            id = "a";
            break;
        case 2:
            text ="tinky winky would be a terrorist";
            id = "b";
            break;
        case 3:
            text ="laa-laa would be a terrorist";
            id = "c";
            break;
        case 4:
            text ="dispy would be a terrorist";
            id = "d";
            break;
    }
    document.getElementById(id).innerHTML= text ;
}