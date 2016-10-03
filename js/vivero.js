$(window).load(function() {
    $('#committee div.wrap p').each(function(i) {
        $(this).slideUp();
    });
    $(document).ready(function() {
        $('a[href^="#"]').click(function(event) {
            event.preventDefault();
            var target = $(this).attr("href");
            if (target.length > 1) {
                $('html, body').animate({
                    scrollTop: $(target).offset().top - ($('#headerLinks').height() - 2)
                }, Math.abs($(target).offset().top - ($('#headerLinks').height()) - 2 - $(window).scrollTop()) / 2.5);
                console.log("scrolling to " + target.slice(1));
            } else if (target = "#") {
                $('html, body').animate({
                    scrollTop: 0
                }, $(window).scrollTop() / 2.5);
            }
        });
        $('a[href^="#"]').attr("onclick", "");

        $(".holder").click(function() {
            var target = "#intro";
            $('html, body').animate({
                scrollTop: $(target).offset().top - ($('#headerLinks').height() - 7)
            }, Math.abs($(target).offset().top - ($('#headerLinks').height()) - 7 - $(window).scrollTop()) / 2.5);
        });
        $('img').each(function(i) {
            $(this).attr("draggable", "false");
            $(this).attr("ondragstart", "return false;")
        });

        $('#committee div.wrap img').each(function(i) {
            $("<a>+</a>").insertAfter(this);
            $(this).click(function() {
                toggle_link($(this).parent().children("a"));
                toggle_shadow(this);

                $(this).parent().children("p").slideToggle();
            });
        });

        $('#committee div.wrap a').each(function(i) {
            $(this).click(function() {
                toggle_link(this);
                toggle_shadow($(this).parent().children("img"));
                $(this).parent().children("p").slideToggle();
            });
        });

        function toggle_link(element) {
            if ($(element).html() == "+") {
                $(element).html("–");
            } else {
                $(element).html("+");
            }
        }

        function toggle_shadow(element) {
            $(element).toggleClass("active");
        }
        $("#videocontroller").click(function(i) {
            var video = document.getElementById("video");
            if (video.paused) {
                video.play();
                $(this).css("background-image", "url(images/icons/pause.svg)");
            } else {
                video.pause();
                $(this).css("background-image", "url(images/icons/play.svg)");
            }
        });
        var iPad = navigator.userAgent.match(/iPad/i) != null;
        var iPhone = navigator.userAgent.match(/iPhone/i);
        if (iPad){
            $("#videocontroller").css("background-image", "url(images/icons/play.svg)");
            $("#videocontroller").css("width", "12px");
            $("#videocontroller").css("height", "22.5px");
            $("#videocontroller").css("top", "-62.5px");
        }
        if (iPhone){
            $("#videocontroller").css("display", "none");
            $("#video").attr("controls","");
        }
        //setTimeout(function() {
            document.getElementById("video").play();
        //}, 2000);
        console.log("Design by El Vivero \nwww.elvivero.es");
        console.log("Development by Adrián Lattes\nwww.haztecaso.com");
        function loop(){
            var w =$("#video").width();
            $("#video").height(w/2);
        }
        loop();
        setInterval(function() {
            loop();
        }, 400);
    });
});

function toggle() {
    $('#committee div.wrap p').each(function(i) {
        $(this).slideToggle();
        //$(this).slideUp()
    });
}
