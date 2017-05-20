/// <reference path="global.js" />
/// <reference path="contactForm.js" />

(function () {
    "use strict";
    $(function () {

        $(".overlay").hover(function () {

            var rootElement = $(this);

            var countryObj = window.entites.urlObjs[$(this).attr("id")];
            console.log(countryObj);
            $.ajax({

                method: "GET",

                url: countryObj,

                cache: false,

                dataType: "json",

                error: function (err) {
                    console.error("Error: " + err.status + ", " + err.statusText);
                }
                /*     function to read live feed of weather ftom API provided by the weather website . Each location have it own APi file , that been taken from global.js    */ 
            }).then(function (response) {
                console.log(rootElement);
                $(rootElement).css("color", "white");
                var spanInfo = "<h3>" + response.location.country_name + "</h3><p><span class='weatherSpan'>Current temperature: </span>" + response.current_observation.temp_c + "&#8451;</p><p><span class='weatherSpan'>Wind observation: </span>" + response.current_observation.wind_string + "</p><p><span class='weatherSpan'>Humidity: </span>" + response.current_observation.relative_humidity + "</p>" + "</p><p><span class='weatherSpan'>Weather: </span>" + response.current_observation.weather + "</p>"; //weather
                $(rootElement).html(spanInfo);


            });

        });



    });

})();