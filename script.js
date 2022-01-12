"use strict";

$(function(){
    $(".closeBurger").hide();
    $(".burger").click(function(){
        $(".closeBurger").show(0);
        $(".burger").hide();
        $(".burger_menu").animate({"bottom":"0"}, 500);
    });
    $(".closeBurger").click(function(){
        $(".closeBurger").hide();
        $(".burger").show(0);
        $(".burger_menu").animate({"bottom":"500%"}, 500);
    });
});