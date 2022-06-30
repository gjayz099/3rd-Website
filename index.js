$(document).ready(function(){
    $(".menu-bar").on("click", function(){
        $(this).toggleClass("onclick")
        $("ul").toggleClass("Show")
    })

    $(".button").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active")

        var filter = $(this).attr("data-filter")

        if(filter == "all"){
            $(".item-menu ").show().addClass("show");
        }else{
            $(".item-menu ").not("."+filter).hide();
            $(".item-menu ").filter("."+filter).show().addClass("show")
        }
    })

    $('.Count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now))
            }
        })
    })
    AOS.init({disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      }})
})