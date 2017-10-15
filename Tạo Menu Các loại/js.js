function display_submenu{
	$(document).ready(function(){
    $("ul.mega_main_menu_ul").mouseover(function(event) {
        $("ul.mega_main_menu_ul li>ul").css("display", "block");
    });
});
}