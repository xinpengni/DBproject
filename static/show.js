

$("#buttonRegauler").hover(
    function(){
        $("#collapseRegauler").toggle()
    },
    function(){
        $("#collapseRegauler").toggle()
    }
);
$("#buttonWonderland").hover(
    function(){
        $("#collapseWonderland").toggle()
        $("body").css("background-image","url(static/img/wonderland.png)")
    },
    function(){
        $("#collapseWonderland").toggle()
        $("body").css("background-image","url(static/img/show.png)")
    }
);

$("#buttonParty").hover(
    function(){
        $("#collapseParty").toggle()
        $("body").css("background-image","url(static/img/party.png)")
    },
    function(){
        $("#collapseParty").toggle()
        $("body").css("background-image","url(static/img/show.png)")
    }
);

$("#buttonKitchen").hover(
    function(){
        $("#collapseKitchen").toggle()
        $("body").css("background-image","url(static/img/kitchen.png)")
    },
    function(){
        $("#collapseKitchen").toggle()
        $("body").css("background-image","url(static/img/show.png)")
    }
);

$("#buttonBattle").hover(
    function(){
        $("#collapseBattle").toggle()
        $("body").css("background-image","url(static/img/battle.png)")
    },
    function(){
        $("#collapseBattle").toggle()
        $("body").css("background-image","url(static/img/show.png)")
    }
);

$("#buttonHole").hover(
    function(){
        $("#collapseHole").toggle()
        $("body").css("background-image","url(static/img/hole.png)")
    },
    function(){
        $("#collapseHole").toggle()
        $("body").css("background-image","url(static/img/show.png)")
    }
);