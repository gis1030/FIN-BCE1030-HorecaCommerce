// ++++++++ Choix de cartes et Elements ++++++++
var CarteGroup = {
    "<b>OSM.fr Carte</b>": carte01,
    "<b>Google Satellite</b>": carte04,
    "<b>Google Terrain</b>": carte02,
    /* "<b>Google Streets</b>": carte03,
     "<b>Google Satellite</b>": carte04,
     "<b>Google Satellite-Streets</b>": carte05,
     "<b>Google Terrain-Cycle</b>": carte06,
     "<b>Google Streets-Cycle</b>": carte07,
     "<b>Google Traffic</b>": carte08,*/
};
var LControl00 = L.control.layers(CarteGroup).addTo(carte);

var GroupDataALL = {
    "<b>agriculture, sylviculture et pêche</b></br>": GroupMarkersMap1030_Q01,
    "<b>industries extractives</b></br>": GroupMarkersMap1030_Q02,
    "<b>industrie manufacturière</b></br>": GroupMarkersMap1030_Q03,
    "<b>production et distribution d’électricité, de gaz, de vapeur et d’air conditionné</b></br>": GroupMarkersMap1030_Q04,
    "<b>production et distribution d’eau; assainissement, gestion des déchets et dépollution</b></br>": GroupMarkersMap1030_Q05,
    "<b>construction</b></br>": GroupMarkersMap1030_Q06,
    "<b>commerce</b></br>": GroupMarkersMap1030_Q07,
    "<b>transports et entreposage</b></br>": GroupMarkersMap1030_Q08,
    "<b>hébergement et restauration</b></br>": GroupMarkersMap1030_Q09,
    "<b>édition, diffusion et activités de production et de distribution de contenu</b></br>": GroupMarkersMap1030_Q10,
    "<b>télécommunications, programmation informatique, conseil, infrastructure informatique et autres activités de service d'information</b></br>": GroupMarkersMap1030_Q11,
    "<b>activités financières et d’assurance</b></br>": GroupMarkersMap1030_Q12,
    "<b>activités immobilières</b></br>": GroupMarkersMap1030_Q13,
    "<b>activités spécialisées, scientifiques et techniques</b></br>": GroupMarkersMap1030_Q14,
    "<b>activités de service administratif et de soutien</b></br>": GroupMarkersMap1030_Q15,
    "<b>enseignement</b></br>": GroupMarkersMap1030_Q16,
    "<b>santé humaine et activités d’action sociale</b></br>": GroupMarkersMap1030_Q17,
    "<b>arts, sports et activités récréatives</b></br>": GroupMarkersMap1030_Q18,
    "<b>autres activités de services</b></br>": GroupMarkersMap1030_Q19,
    "<b>administration publique et défense; sécurité sociale obligatoire</b></br>": GroupMarkersMap1030_Q20,
    "<b>activités des ménages en tant qu’employeurs; activités indifférenciées des ménages en tant que producteurs de biens et services pour usage propre</b></br>": GroupMarkersMap1030_Q21,
    "<b>activités des organisations et organismes extraterritoriaux</b></br>": GroupMarkersMap1030_Q22,
    "<b>non renseigné</b></br>": GroupMarkersMap1030_Q22,
    "<b>toutes les entites</b></br>": GroupMarkersMap1030_00,
};

var GroupDataALL_Data = {
    "<b>toutes les entites</b></br>": GroupMarkersMap1030_00
};

var GroupDataALL_ONYX = {
    "<b>non enregistré sur onyx</b></br>": GroupMarkersMap1030_C00,
    "<b>enregistré sur onyx</b></br>": GroupMarkersMap1030_C01,
    "<b>toutes les entites</b></br>": GroupMarkersMap1030_00
};
var LControl_ONYX_Con = L.control.layers(null, GroupDataALL_ONYX).addTo(carte);
var container = LControl_ONYX_Con.getContainer().querySelector('.leaflet-control-layers-overlays');
container.insertAdjacentHTML('afterbegin', '<div style="font-weight:bold; font-size:14px; padding: 5px 0;">ONYX</div>');

var GroupDataALL_NACE_Division = {
    "<b>N46 commerce de gros</b></br>": GroupMarkersMap1030_D46,
    "<b>N47 commerce de détail</b></br>": GroupMarkersMap1030_D47,
    "<b>N55 hébergement</b></br>": GroupMarkersMap1030_D55,
    "<b>N56 activités de service de restauration</b></br>": GroupMarkersMap1030_D56,
    "<b>autres division NACE2025</b></br>": GroupMarkersMap1030_D99,
    "<b>non renseigné</b></br>": GroupMarkersMap1030_D00,
    "<b>toutes les entites</b></br>": GroupMarkersMap1030_00
};
var LControl_NACE_Div = L.control.layers(null, GroupDataALL_NACE_Division).addTo(carte);
var container = LControl_NACE_Div.getContainer().querySelector('.leaflet-control-layers-overlays');
container.insertAdjacentHTML('afterbegin', '<div style="font-weight:bold; font-size:14px; padding: 5px 0;">NACE Division</div>');


var GroupDataALL_NACE_A56 = {
    // Division NACE 55 : Restauration
    "<b>N561 activités de restaurant et de service de restauration mobile</b></br>": GroupMarkersMap1030_D561,
    "<b>N562 activités de traiteur événementiel, de service contractuel de restauration et autres activités de service de restauration</b></br>": GroupMarkersMap1030_D562,
    "<b>N563 activités de débit de boissons</b></br>": GroupMarkersMap1030_D563,
    //"<b>N564 activités de service d’intermédiation pour des activités de service de restauration</b></br>": GroupMarkersMap1030_D564,
    "<b>toutes les entites</b></br>": GroupMarkersMap1030_00
};
var LControl_N56 = L.control.layers(null, GroupDataALL_NACE_A56).addTo(carte);
//var LControl_N56 = L.control.layers(GroupDataALL_NACE_A56).addTo(carte);
var container = LControl_N56.getContainer().querySelector('.leaflet-control-layers-overlays');
container.insertAdjacentHTML('afterbegin', '<div style="font-weight:bold; font-size:14px; padding: 5px 0;">Restauration</div>');

var GroupDataALL_NACE_A55 = {
    // Division NACE 55 : Hébergement
    "<b>N551 hôtels et hébergement similaire</b></br>": GroupMarkersMap1030_D551,
    "<b>N552 hébergement touristique et autre hébergement de courte durée</b></br>": GroupMarkersMap1030_D552,
    "<b>N553 terrains de camping et parcs pour caravanes ou véhicules de loisirs</b></br>": GroupMarkersMap1030_D553,
    //"<b>N554 activités de service d’intermédiation pour l’hébergement</b></br>": GroupMarkersMap1030_D554,
    "<b>N559 autres hébergements</b></br>": GroupMarkersMap1030_D559,
    "<b>toutes les entites</b></br>": GroupMarkersMap1030_00
};
var LControl_N55 = L.control.layers(null, GroupDataALL_NACE_A55).addTo(carte);
//var LControl_N55 = L.control.layers(GroupDataALL_NACE_A55).addTo(carte);
var container = LControl_N55.getContainer().querySelector('.leaflet-control-layers-overlays');
container.insertAdjacentHTML('afterbegin', '<div style="font-weight:bold; font-size:14px; padding: 5px 0;">Hébergement</div>');

var GroupDataALL_NACE_A46 = {
    // Division NACE 46 : Commerce de gros
    "<b>N462 intermédiaires du commerce de gros</b></br>": GroupMarkersMap1030_D461,
    "<b>N463 commerce de gros de produits agricoles bruts et d’animaux vivants</b></br>": GroupMarkersMap1030_D462,
    "<b>N463 commerce de gros de produits alimentaires, de boissons et de produits à base de tabac</b></br>": GroupMarkersMap1030_D463,
    "<b>N464 commerce de gros de biens domestiques</b></br>": GroupMarkersMap1030_D464,
    "<b>N465 commerce de gros d’équipements de l’information et de la communication</b></br>": GroupMarkersMap1030_D465,
    "<b>N466 commerce de gros d’autres machines, équipements et fournitures</b></br>": GroupMarkersMap1030_D466,
    "<b>N467 commerce de gros de véhicules automobiles, de motocycles et de leurs pièces et accessoires</b></br>": GroupMarkersMap1030_D467,
    "<b>N468 autre commerce de gros spécialisé</b></br>": GroupMarkersMap1030_D468,
    "<b>N469 commerce de gros non spécialisé</b></br>": GroupMarkersMap1030_D469,
    "<b>toutes les entites</b></br>": GroupMarkersMap1030_00
};
var LControl_N46 = L.control.layers(null, GroupDataALL_NACE_A46).addTo(carte);
//var LControl_N46 = L.control.layers(GroupDataALL_NACE_A46).addTo(carte);
var container = LControl_N46.getContainer().querySelector('.leaflet-control-layers-overlays');
container.insertAdjacentHTML('afterbegin', '<div style="font-weight:bold; font-size:14px; padding: 5px 0;">Commerce de gros</div>');

var GroupDataALL_NACE_A47 = {
    // Division NACE 47 : Commerce de détail
    "<b>N471 commerce de détail non spécialisé</b></br>": GroupMarkersMap1030_D471,
    "<b>N472 commerce de détail de produits alimentaires, de boissons et de tabac</b></br>": GroupMarkersMap1030_D472,
    "<b>N473 commerce de détail de carburants</b></br>": GroupMarkersMap1030_D473,
    "<b>N474 commerce de détail d’équipements de l’information et de la communication</b></br>": GroupMarkersMap1030_D474,
    "<b>N475 commerce de détail d’autres équipements du foyer</b></br>": GroupMarkersMap1030_D475,
    "<b>N476 commerce de détail de biens culturels et de loisirs</b></br>": GroupMarkersMap1030_D476,
    "<b>N477 commerce de détail d’autres biens, à l’exception des automobiles et des motocycles</b></br>": GroupMarkersMap1030_D477,
    "<b>N478 commerce de détail d’automobiles, de motocycles et de leurs pièces et accessoires</b></br>": GroupMarkersMap1030_D478,
    "<b>N479 activités de service d’intermédiation pour le commerce de détail</b></br>": GroupMarkersMap1030_D479,
    "<b>toutes les entites</b></br>": GroupMarkersMap1030_00
};
var LControl_N47 = L.control.layers(null, GroupDataALL_NACE_A47).addTo(carte);
//var LControl_N47 = L.control.layers(GroupDataALL_NACE_A47).addTo(carte);
var container = LControl_N47.getContainer().querySelector('.leaflet-control-layers-overlays');
container.insertAdjacentHTML('afterbegin', '<div style="font-weight:bold; font-size:14px; padding: 5px 0;">Commerce de détail</div>');

// +++++++ Revient a la position initial ++++++++
L.easyButton('<img src="images/home.png" width="26" height="26" >', function () {
    carte.setView([50.86070401717095, 4.3830651582691456], 13);
    layerGroup.clearLayers();
}).addTo(carte);

// +++++++ Géolocalisation ++++++++
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    var location = e.latlng
    L.marker(location).addTo(carte)
    L.circle(location, radius).addTo(carte);
}

function onLocationError(e) {
    alert(e.message);
}

function getLocationLeafvar() {
    carte.on('locationfound', onLocationFound);
    carte.on('locationerror', onLocationError);
    carte.locate({ setView: true, maxZoom: 15 });
}

L.easyButton('<img src="images/gps-position.png" width="26" height="26" >', function () {
    getLocationLeafvar()
}).addTo(carte);

// +++++++  MousePosition Maps ++++++++
var mousePoistion = L.geoportalControl.MousePosition({
    position: 'bottomright',
    collapsed: true,
    units: [],
}).addTo(carte);

// +++++++ Esri Leafvar Geocoder ++++++++
var searchControl = L.esri.Geocoding.geosearch({
    position: 'topleft',
    zoomToResult: true,
    useMapBounds: true,
    providers: [L.esri.Geocoding.arcgisOnlineProvider()],
    collapseAfterResult: true,
    expanded: false,
    title: 'Recherche d`emplacement',
    placeholder: 'SVP, Entrez une adresse...'
}).addTo(carte);

var geocodeService = L.esri.Geocoding.geocodeService({});
var layerGroup = L.layerGroup().addTo(carte);
carte.on('click', function (e) {

    geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
        if (error) {
            return;
        }
        //var emplacement = convertToAddress(e.latlng);
        var lngLatString = `${Math.round(result.latlng.lat * 100000) / 100000}, ${Math.round(result.latlng.lng * 100000) / 100000}`;
        layerGroup.clearLayers();
        marker = L.marker(result.latlng)
            .addTo(layerGroup) //.addTo(carte) l'utilisation de vette option permet au marqueur de rester sur la carte
            .bindPopup(`<dt>${lngLatString}</dt>` + `<dt>${result.address.LongLabel}</dt>`) // adresse avec les coordonnées gps 
            //.bindPopup(result.address.Match_addr) // adresse sans les coordonnées gps 
            //.bindPopup(result.address.LongLabel) // version plus longue de l'adresse Match_addr contenant plus d'informations administratives
            //.bindPopup(result.address.ShortLabel) // version abrégée de l'adresse Match_addr
            .openPopup();
    });
});

// +++++++ menu principal +++++++++++++++++
let MyControlClass = L.Control.extend({
    options: {
        position: 'topleft',
    },

    onAdd: function (carte) {
        var div = L.DomUtil.create('div', 'leaflet-bar my-control');

        var myButton = L.DomUtil.create('button', 'my-button-class', div);
        myButton.innerHTML = 'menu principal';
        myButton.style.width = '85px';
        L.DomEvent.on(myButton, 'click', function () {
            window.open("../index.html");
            window.close();
        }, this);
        return div;
    },

    onRemove: function (carte) {
    }
});
let myControl = new MyControlClass().addTo(carte);

// +++++++ Menu principal  +++++++++++
/*
let ChartPopClass = L.Control.extend({
    options: { position: 'topleft' },

    onAdd: function (carte) {
        var div = L.DomUtil.create('div', 'leaflet-bar my-control');

        var myButton = L.DomUtil.create('button', 'my-button-class', div);
        myButton.innerHTML = 'Affichage des statistiques globales';
        myButton.style.width = '150px';
        myButton.style.height = '30px';
        L.DomEvent.on(myButton, 'click', function () {
            window.open("BCE1030Charts.html");
            window.close();
        }, this);
        return div;
    },

    onRemove: function (carte) {
    }
});
let ChartPopControl = new ChartPopClass().addTo(carte);
*/

// +++++++ Title  +++++++++++
var title = new L.Control({ 'position': 'bottomleft' });
//var title = new L.Control({ 'position': 'topleft' });
title.onAdd = function (carte) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
title.update = function () {
    this._div.innerHTML = '<a style="font-size: 20px; font-weight: bold; background-color: white; border: 4px solid white">BCE1030 (Horeca et Commerces)</a>';
};
title.addTo(carte);

// +++++++ .Watermark  ++++++++++
L.Control.Watermark = L.Control.extend({
    onAdd: function (carte) {
        var img = L.DomUtil.create('img');
        img.src = 'images/schaerbeek1030_logo_white.png';
        img.style.width = '75px';

        return img;
    },
    onRemove: function (carte) {
        // Nothing to do here
    }
});
L.control.watermark = function (opts) { return new L.Control.Watermark(opts); }
L.control.watermark({ position: 'bottomleft' }).addTo(carte);