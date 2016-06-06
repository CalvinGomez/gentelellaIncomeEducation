        var mymap = L.map('mapid', { zoomControl: false }).setView([32.9000, -116.8000], 10);
        		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'aprathna.078og2ep',
            accessToken: 'pk.eyJ1IjoiYXByYXRobmEiLCJhIjoiY2lva3R0dTBkMDAzYXU2bTA3bXVjdXpvZSJ9.vnChROM_wM-N55VCqPJRTg'
        }).addTo(mymap);
        mymap.scrollWheelZoom.disable();
        mymap.on('click', function() {
            if (mymap.scrollWheelZoom.enabled()) {
                mymap.scrollWheelZoom.disable();
            }
            else {
                mymap.scrollWheelZoom.enable();
            }
        });

	    var carlsbadMarker = L.marker([33.1581, -117.3506]).on('click', altOnClick).bindLabel('Carlsbad').addTo(mymap);
        carlsbadMarker.id = "Carlsbad";

	    var laJollaMarker = L.marker([32.8328, -117.2713]).on('click', altOnClick).bindLabel('La Jolla').addTo(mymap);
        laJollaMarker.id = "La Jolla";

        var ramonaMarker = L.marker([33.0414, -116.8793]).on('click', altOnClick).bindLabel('Ramona').addTo(mymap);
        ramonaMarker.id = "Ramona";

        var sanDieguitoMarker = L.marker([32.9990, -117.2338]).on('click', altOnClick).bindLabel('San Dieguito').addTo(mymap);
        sanDieguitoMarker.id = "San Dieguito";

        var sanMarcosMarker = L.marker([33.1434, -117.1661]).on('click', altOnClick).bindLabel('San Marcos').addTo(mymap);
        sanMarcosMarker.id = "San Marcos";

        var santeeMarker = L.marker([32.8384, -116.9739]).on('click', altOnClick).bindLabel('Santee').addTo(mymap);
        santeeMarker.id = "Santee";

        var southBayMarker = L.marker([32.5549, -117.044306]).on('click', altOnClick).bindLabel('South Bay').addTo(mymap);
        southBayMarker.id = "South Bay";

        var southEasternSanDiegoMarker = L.marker([32.7004, -117.1432]).on('click', altOnClick).bindLabel('South Eastern San Diego').addTo(mymap);
        southEasternSanDiegoMarker.id = "South Eastern San Diego";

        var springValleyMarker = L.marker([32.7448, -116.9989]).on('click', altOnClick).bindLabel('Spring Valley').addTo(mymap);
        springValleyMarker.id = "Spring Valley";

        var sweetwaterMarker = L.marker([32.6944, -116.9955]).on('click', altOnClick).bindLabel('Sweetwater').addTo(mymap);
        sweetwaterMarker.id = "Sweetwater";

        var universityCityMarker = L.marker([32.8577, -117.2054]).on('click', altOnClick).bindLabel('University City').addTo(mymap);
        universityCityMarker.id = "University City";

        var valleyCenterMarker = L.marker([33.1426, -117.051]).on('click', altOnClick).bindLabel('Valley Center').addTo(mymap);
        valleyCenterMarker.id = "Valley Center";

        var vistaMarker = L.marker([33.1137, -117.1428]).on('click', altOnClick).bindLabel('Vista').addTo(mymap);
        vistaMarker.id = "Vista";

        var jamulMarker = L.marker([32.7170, -116.8761]).on('click', altOnClick).bindLabel('Jamul').addTo(mymap);        
        jamulMarker.id = "Jamul";

        var kearnyMesaMarker = L.marker([32.8284, -117.1441]).on('click', altOnClick).bindLabel('Kearny Mesa').addTo(mymap);        
        kearnyMesaMarker.id = "Kearny Mesa";

        var laMesalMarker = L.marker([32.7678, -117.0231]).on('click', altOnClick).bindLabel('La Mesa').addTo(mymap);        
        laMesalMarker.id = "La Mesa";

        var lagunaPineValleyMarker = L.marker([32.8949, -116.5609]).on('click', altOnClick).bindLabel('Laguna-Pine Valley').addTo(mymap);        
        lagunaPineValleyMarker.id = "Laguna-Pine Valley";

        var lakesideMarker = L.marker([32.8573, -116.9222]).on('click', altOnClick).bindLabel('Lakeside').addTo(mymap);        
        lakesideMarker.id = "Lakeside";

        var lemonGroveMarker = L.marker([32.7426, -117.0314]).on('click', altOnClick).bindLabel('Lemon Grove').addTo(mymap);        
        lemonGroveMarker.id = "Lemon Grove";

        var miramarMarker = L.marker([32.8746, -117.1399]).on('click', altOnClick).bindLabel('Miramar').addTo(mymap);        
        miramarMarker.id = "Miramar";

        var mountainEmpireMarker = L.marker([32.6983, -116.4330]).on('click', altOnClick).bindLabel('Mountain Empire').addTo(mymap);        
        mountainEmpireMarker.id = "Mountain Empire";

        var nationalCityMarker = L.marker([32.6781, -117.0992]).on('click', altOnClick).bindLabel('National City').addTo(mymap);
        nationalCityMarker.id = "National City";

        var oceansideMarker = L.marker([33.1959, -117.3795]).on('click', altOnClick).bindLabel('Oceanside').addTo(mymap);
        oceansideMarker.id = "Oceanside";

        var palomarJulianMarker = L.marker([33.14, -116.72]).on('click', altOnClick).bindLabel('Palomar-Julian').addTo(mymap);
        palomarJulianMarker.id = "Palomar-Julian";

        var paumaMarker = L.marker([33.3034, -116.9814]).on('click', altOnClick).bindLabel('Pauma').addTo(mymap);
        paumaMarker.id = "Pauma";

        var pendletonMarker = L.marker([33.3178, -117.3205]).on('click', altOnClick).bindLabel('Pendleton').addTo(mymap);
        pendletonMarker.id = "Pendleton";

        var northCountyMarker = L.marker([33.248, -117.179]).on('click', altOnClick).bindLabel('North San Diego').addTo(mymap);
        northCountyMarker.id = "North San Diego";

        var peninsulaMarker = L.marker([32.7000, -117.2467]).on('click', altOnClick).bindLabel('Peninsula').addTo(mymap);
        peninsulaMarker.id = "Peninsula";

        var powayMarker = L.marker([32.9628, -117.0359]).on('click', altOnClick).bindLabel('Poway').addTo(mymap);
        powayMarker.id = "Poway";

        var alpineMarker = L.marker([32.8351, -116.7664]).on('click', altOnClick).bindLabel('Alpine').addTo(mymap);
        alpineMarker.id = "Alpine";

        var anzaBorregoMarker = L.marker([33.1005, -116.3013]).on('click', altOnClick).bindLabel('Anza-Borrego').addTo(mymap);        
        anzaBorregoMarker.id = "Anza-Borrego";

        var centralSDMarker = L.marker([32.7206, -117.1544]).on('click', altOnClick).bindLabel('Central San Diego').addTo(mymap);
        centralSDMarker.id = "Central San Diego";

        var chulaVistaMarker = L.marker([32.6401, -117.0842]).on('click', altOnClick).bindLabel('Chula Vista').addTo(mymap);
        chulaVistaMarker.id = "Chula Vista";

        var coronadoMarker = L.marker([32.6859, -117.1831]).on('click', altOnClick).bindLabel('Coronado').addTo(mymap);
        coronadoMarker.id = "Coronado";

        var delMarMarker = L.marker([32.9595, -117.2653]).on('click', altOnClick).bindLabel('Del Mar-Mira Mesa').addTo(mymap);        
        delMarMarker.id = "Del Mar-Mira Mesa";

		    var elCajonMarker = L.marker([32.7948, -116.9625]).on('click', altOnClick).bindLabel('El Cajon').addTo(mymap);
        elCajonMarker.id = "El Cajon";

        var elliottNavajoMarker = L.marker([32.7915, -117.0758]).on('click', altOnClick).bindLabel('Elliott-Navajo').addTo(mymap);
        elliottNavajoMarker.id = "Elliott-Navajo";

        var escondidoMarker = L.marker([33.1192, -117.0864]).on('click', altOnClick).bindLabel('Escondido').addTo(mymap);
        escondidoMarker.id = "Escondido";

        var fallbrookMarker = L.marker([33.3768, -117.2511]).on('click', altOnClick).bindLabel('Fallbrook').addTo(mymap);        
        fallbrookMarker.id = "Fallbrook";

        var harbisonCrestMarker = L.marker([32.8203, -116.8300]).on('click', altOnClick).bindLabel('Harbison-Crest').addTo(mymap);
        harbisonCrestMarker.id = "Harbison-Crest";
        
        new L.Control.Zoom({ position: 'bottomleft' }).addTo(mymap);

        function markerOnClick(e)
        {
          alert("hi. you clicked the marker at " + e.latlng);
        }
        function altOnClick(e)

        {
                $("#pieChart").empty();
                $("#city").empty();
                $("#city").html(e.target.id);
                document.getElementById('chartContainer').scrollIntoView({
                    behavior: "smooth"
                });

                console.log(e.target.id);
                // markerOnClickBarChart(e.target.id);
                markerOnClickPieChart(e.target.id);
                markerOnClickBarChart(e.target.id);
        }