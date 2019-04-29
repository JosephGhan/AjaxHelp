$(document).ready(function(){

    $.getJSON("https://launchlibrary.net/1.4/launch", function (data) {
    for (let i = 0; i < 5; i++) {
        document.getElementById('name').innerHTML += (i + 1) + ": " + data.launches[i].name + "    ID: " + data.launches[i].id + "   Launch Time: " +  data.launches[i].net + "<br>";
    }
    });

    $("#butt1").click(function() {
        $.getJSON("https://launchlibrary.net/1.4/launch", function (data) {
            document.getElementById('name').innerHTML = "";
            for (let x = 5; x < 10 ; x++) {
                document.getElementById('name').innerHTML += (x + 1) + ": " + data.launches[x].name + "    ID: " + data.launches[x].id + "   Launch Time: " +  data.launches[x].net + "<br>";
            }
        });
    });

    $("#butt2").click(function(){
        $.getJSON("https://launchlibrary.net/1.4/launch/Falcon", function (data) {
            document.getElementById('name').innerHTML = "";
            for (let i = 0; i < 5; i++) {
                document.getElementById('name').innerHTML += (i + 1) + ": " + data.launches[i].name + "    ID: " + data.launches[i].id + "   Launch Time: " +  data.launches[i].net + "<br>";
            }
        });
    });

    $("#butt3").click(function() {
        $.getJSON("https://launchlibrary.net/1.4/launch/launcherone", function (data2) {
            document.getElementById('name').innerHTML = "";
            for (let i = 0; i < 5; i++) {
                document.getElementById('name').innerHTML += (i + 1) + ": " + data2.launches[i].name + "    ID: " + data2.launches[i].id + "   Launch Time: " +  data2.launches[i].net + "<br>";
            }
        });
    });

    $("#butt4").click(function() {
        $.getJSON("https://launchlibrary.net/1.4/launch/ariane", function (data) {
            document.getElementById('name').innerHTML = "";
            for (let i = 0; i < 5; i++) {
                document.getElementById('name').innerHTML += (i + 1) + ": " + data.launches[i].name + "    ID: " + data.launches[i].id + "   Launch Time: " +  data.launches[i].net + "<br>";
            }
        });
    })
});