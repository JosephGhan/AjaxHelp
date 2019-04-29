// var obj = {
//     latitude : 37.7577,
//     longitude : -122.4376,
//     currently : {
//         summary: "clear",
//         humidity: 0.93
//     }
// }

// // console.log(obj.latitude);
// // console.log(obj.currently.humidity);

// var jsonString = JSON.stringify(obj);
// console.log(jsonString);

// var backToObject = JSON.parse(jsonString);
// console.log(backToObject);


$(document).ready(function(){
    $("#heading").html("Mahalo!");

    // $("p").click(function(){
    //     alert("How DARE YOU CLICK ME!");
    // });

    // $("p").mouseenter(function(){
    //     $(this).css("background-color", "lightblue");
    // });

    // $("p").mouseleave(function(){
    //     $(this).css("background-color", "initial");
    //     //alert("come back ;)");
    // });

    $("p").on ({
        click: function(){
            alert("Don't click me");
        },
        mouseenter: function(){
            $(this).css("background-color", "lightblue");
        },
        mouseleave: function(){
            $(this).css("background-color", "initial");
            //alert("come back ;)");
        }
    })

    $("button.hide").click(function(){
        //alert("button clicked");
        $("p").slideUp(1000);
    })

    $("button.show").click(function(){
        $("p").slideDown(1000);
    })

    $("button.toggle").click(function(){
        $("p").slideToggle(1000, function(){
            $("#heading").html("I Slid!");
        });
        
    })

});

