// on personnalise les marqueurs
var DataIcon05 = L.icon({
    iconUrl: 'images/icon-Entreprises.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [-5, 5]
});

// ++++++ Limites de Schaerbeek ++++++++
L.geoJSON([Boundary], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

var DBPolygonsBoundary = L.geoJSON([BoundaryDistrict], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

// ++++++ Liste des Marqueurs ++++++++
var SectorLabel = "A"
var Marker1030_01 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q01.addLayer(Marker1030_01)

SectorLabel = "B"
var Marker1030_02 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q02.addLayer(Marker1030_02)

SectorLabel = "C"
var Marker1030_03 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q03.addLayer(Marker1030_03)

SectorLabel = "D"
var Marker1030_04 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q04.addLayer(Marker1030_04)

SectorLabel = "E"
var Marker1030_05 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q05.addLayer(Marker1030_05)

SectorLabel = "F"
var Marker1030_06 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q06.addLayer(Marker1030_06)

SectorLabel = "G"
var Marker1030_07 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q07.addLayer(Marker1030_07)

SectorLabel = "H"
var Marker1030_08 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q08.addLayer(Marker1030_08)

SectorLabel = "I"
var Marker1030_09 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q09.addLayer(Marker1030_09)

SectorLabel = "J"
var Marker1030_10 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q10.addLayer(Marker1030_10)

SectorLabel = "K"
var Marker1030_11 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q11.addLayer(Marker1030_11)

SectorLabel = "L"
var Marker1030_12 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q12.addLayer(Marker1030_12)

SectorLabel = "M"
var Marker1030_13 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q13.addLayer(Marker1030_13)

SectorLabel = "N"
var Marker1030_14 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q14.addLayer(Marker1030_14)

SectorLabel = "O"
var Marker1030_15 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q15.addLayer(Marker1030_15)

SectorLabel = "P"
var Marker1030_16 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q16.addLayer(Marker1030_16)

SectorLabel = "Q"
var Marker1030_17 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q17.addLayer(Marker1030_17)

SectorLabel = "R"
var Marker1030_18 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q18.addLayer(Marker1030_18)

SectorLabel = "S"
var Marker1030_19 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q19.addLayer(Marker1030_19)

SectorLabel = "T"
var Marker1030_20 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q20.addLayer(Marker1030_20)

SectorLabel = "U"
var Marker1030_21 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q21.addLayer(Marker1030_21)

SectorLabel = "V"
var Marker1030_22 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q22.addLayer(Marker1030_22)

SectorLabel = "non renseigné"
var Marker1030_23 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q23.addLayer(Marker1030_23)
//+++++++++++++++++++++++++++++++

// BEGIN Division ++++++++++++++++++++
// Clasificacion en funcion de Division NACE2025
// Se buscan las entididades destinadas a la Taxes O8
// Code Division 55,56,46,47

SectorLabel46 = "Commerce de gros" //SectorLabel = "46" 
var Marker1030_D46 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Division.includes(SectorLabel46)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#9f3ec2',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.4,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_D46.addLayer(Marker1030_D46)

SectorLabel47 = "Commerce de détail" //SectorLabel = "47" 
var Marker1030_D47 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Division.includes(SectorLabel47)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d4a94c',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.4,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_D47.addLayer(Marker1030_D47)

SectorLabel55 = "Hébergement" //SectorLabel = "55"
var Marker1030_D55 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Division.includes(SectorLabel55)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#4c8dbc',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.4,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_D55.addLayer(Marker1030_D55)

SectorLabel56 = "Activités de service de restauration" //SectorLabel = "56"
var Marker1030_D56 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Division.includes(SectorLabel56)) return true
        //console.log(feature.properties.EntityNumber)
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#69c931',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.4,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_D56.addLayer(Marker1030_D56)

SectorLabel = "non renseigné"
var Marker1030_D00 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Division.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ba2c44',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.4,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_D00.addLayer(Marker1030_D00)

// Others division NACE
var Marker1030_D99 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        //if (feature.geometry.type !== SectorLabel) return true
        if (feature.geometry.type !== SectorLabel &&
            feature.geometry.type !== SectorLabel46 &&
            feature.geometry.type !== SectorLabel47 &&
            feature.geometry.type !== SectorLabel55 &&
            feature.geometry.type !== SectorLabel56) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_D99.addLayer(Marker1030_D99)
// BEGIN Division ++++++++++++++++++++

// BEGIN ONYX +++++++++++++++++++++++++++++
SectorLabel = "not registered"
var Marker1030_C00 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Condition.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#e77844',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.4,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_C00.addLayer(Marker1030_C00)

SectorLabel = "onyx"
var Marker1030_C01 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Condition.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#26b249',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 5,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_C01.addLayer(Marker1030_C01)
// END ONYX +++++++++++++++++++++++++++++++

// BEGIN ALL Data ++++++++++++++++++++++++++++++
var Marker1030_00 = L.geoJSON([ListBCEMarkers1030], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#04034b',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 0.25,
            weight: 0,
            opacity: 0
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_00.addLayer(Marker1030_00)
// END ALL Data ++++++++++++++++++++++++++++++++

// On va regropue les marqueurs dans une group leafvar
var GroupMarkersMap1030 = new L.featureGroup([
    GroupMarkersMap1030_Q01,
    GroupMarkersMap1030_Q02,
    GroupMarkersMap1030_Q03,
    GroupMarkersMap1030_Q04,
    GroupMarkersMap1030_Q05,
    GroupMarkersMap1030_Q06,
    GroupMarkersMap1030_Q07,
    GroupMarkersMap1030_Q08,
    GroupMarkersMap1030_Q09,
    GroupMarkersMap1030_Q10,
    GroupMarkersMap1030_Q11,
    GroupMarkersMap1030_Q12,
    GroupMarkersMap1030_Q13,
    GroupMarkersMap1030_Q14,
    GroupMarkersMap1030_Q15,
    GroupMarkersMap1030_Q16,
    GroupMarkersMap1030_Q17,
    GroupMarkersMap1030_Q18,
    GroupMarkersMap1030_Q19,
    GroupMarkersMap1030_Q20,
    GroupMarkersMap1030_Q21,
    GroupMarkersMap1030_Q22,
    GroupMarkersMap1030_Q23,
]);

// END ==== Donnnes GeoJson comme marqueurs ========

// BEGIN ==== Data Viewer ========
/*
Marker1030_01.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_02.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_03.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_04.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_05.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_06.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_07.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_08.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_09.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_10.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_11.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_12.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_13.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_14.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_15.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_16.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_17.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_18.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_19.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_20.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_21.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_22.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_23.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});
//++++++++++++++++++++++++++++++++
*/

Marker1030_00.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_D46.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_D47.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_D55.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_D56.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_D00.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_D99.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});


Marker1030_C00.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_C01.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});


// BEGIN NEW OPTION ++++++++++++++++++++++++++++++
const StylesCommerces = {
    // --- DIVISION 56: RESTAURATION (Chauds/Épicés) ---
    "561": { fillColor: "#E63946", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Rouge Restaurant
    "562": { fillColor: "#a77955", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Orange Traiteur
    "563": { fillColor: "#FFB703", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Jaune Ambre (Bar)
    "564": { fillColor: "#FF8C61", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Saumon (Intermédiation)

    // --- DIVISION 55: HÉBERGEMENT (Froids/Nature) ---
    "551": { fillColor: "#2199e3", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Bleu Hôtel
    "552": { fillColor: "#5393d0", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Turquoise Tourisme
    "553": { fillColor: "#4dae82", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Vert Camping
    "554": { fillColor: "#8ea3c7", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Gris-Bleu (Interm.)
    "559": { fillColor: "#b289cf", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Lavande (Autres)

    // --- DIVISION 47: COMMERCE DE DÉTAIL (Vifs/Urbains) ---
    "471": { fillColor: "#5A189A", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Violet
    "472": { fillColor: "#9D0208", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Bordeaux (Alim.)
    "473": { fillColor: "#333533", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Noir (Carburants)
    "474": { fillColor: "#00D2FF", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Cyan (Info)
    "475": { fillColor: "#BC6C25", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Terre de Sienne (Foyer)
    "476": { fillColor: "#FFD60A", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Jaune Culture
    "477": { fillColor: "#F72585", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Rose (Autres biens)
    "478": { fillColor: "#718093", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Acier (Autos)
    "479": { fillColor: "#BE95C4", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Lilas (Interm.)

    // --- DIVISION 46: COMMERCE DE GROS (Industriels/Terre) ---
    "461": { fillColor: "#607D8B", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Gris-Lois
    "462": { fillColor: "#795548", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Marron (Agricole)
    "463": { fillColor: "#4b7f3b", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Vert Bouteille (Alim.)
    "464": { fillColor: "#aad624", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Kaki (Domestique)
    "465": { fillColor: "#023E8A", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Bleu Nuit (Machines)
    "466": { fillColor: "#A52A2A", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Cuivre (Véhicules)
    "467": { fillColor: "#B7B7A4", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Sable (Spécialisé)
    "468": { fillColor: "#0077B6", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }, // Bleu Mer (Équipement)
    "469": { fillColor: "#414ab2", fillOpacity: 0.4, color: "#000", weight: 1, radius: 5 }  // Ardoise (Non Spéc.)
};

// BEGIN ACTIVITES ++++++++++++++++++++++++
// Code NACE 55
SectorLabel_551 = "Hôtels et hébergement similaire"
SectorLabel_552 = "Hébergement touristique et autre hébergement de courte durée"
SectorLabel_553 = "Terrains de camping et parcs pour caravanes ou véhicules de loisirs"
SectorLabel_554 = "Activités de service d’intermédiation pour l’hébergement"
SectorLabel_559 = "Autres hébergements"

// Code NACE 56
SectorLabel_561 = "Activités de restaurant et de service de restauration mobile"
SectorLabel_562 = "Activités de traiteur événementiel, de service contractuel de restauration et autres activités de service de restauration"
SectorLabel_563 = "Activités de débit de boissons"
SectorLabel_564 = "Activités de service d’intermédiation pour des activités de service de restauration"

// Code NACE 46
SectorLabel_461 = "Intermédiaires du commerce de gros"
SectorLabel_462 = "Commerce de gros de produits agricoles bruts et d’animaux vivants"
SectorLabel_463 = "Commerce de gros de produits alimentaires, de boissons et de produits à base de tabac"
SectorLabel_464 = "Commerce de gros de biens domestiques"
SectorLabel_465 = "Commerce de gros d’équipements de l’information et de la communication"
SectorLabel_466 = "Commerce de gros d’autres machines, équipements et fournitures"
SectorLabel_467 = "Commerce de gros de véhicules automobiles, de motocycles et de leurs pièces et accessoires"
SectorLabel_468 = "Autre commerce de gros spécialisé"
SectorLabel_469 = "Commerce de gros non spécialisé"

// Code NACE 47
SectorLabel_471 = "Commerce de détail non spécialisé"
SectorLabel_472 = "Commerce de détail de produits alimentaires, de boissons et de tabac"
SectorLabel_473 = "Commerce de détail de carburants"
SectorLabel_474 = "Commerce de détail d’équipements de l’information et de la communication"
SectorLabel_475 = "Commerce de détail d’autres équipements du foyer"
SectorLabel_476 = "Commerce de détail de biens culturels et de loisirs"
SectorLabel_477 = "Commerce de détail d’autres biens, à l’exception des automobiles et des motocycles"
SectorLabel_478 = "Commerce de détail d’automobiles, de motocycles et de leurs pièces et accessoires"
SectorLabel_479 = "Activités de service d’intermédiation pour le commerce de détail"
// END ACTIVITES ++++++++++++++++++++++++++

var Marker_N561 = crearCapaNACE_Circular(SectorLabel_561, "561", [ListBCEMarkers1030]);
var Marker_N562 = crearCapaNACE_Circular(SectorLabel_562, "562", [ListBCEMarkers1030]);
var Marker_N563 = crearCapaNACE_Circular(SectorLabel_563, "563", [ListBCEMarkers1030]);
var Marker_N564 = crearCapaNACE_Circular(SectorLabel_564, "564", [ListBCEMarkers1030]);
GroupMarkersMap1030_D561.addLayer(Marker_N561)
GroupMarkersMap1030_D562.addLayer(Marker_N562)
GroupMarkersMap1030_D563.addLayer(Marker_N563)
GroupMarkersMap1030_D564.addLayer(Marker_N564)
GroupMarkersMap1030_D56.addLayer(Marker_N564, Marker_N563, Marker_N562, Marker_N561)

var Marker_N551 = crearCapaNACE_Circular(SectorLabel_551, "551", [ListBCEMarkers1030]);
var Marker_N552 = crearCapaNACE_Circular(SectorLabel_552, "552", [ListBCEMarkers1030]);
var Marker_N553 = crearCapaNACE_Circular(SectorLabel_553, "553", [ListBCEMarkers1030]);
var Marker_N554 = crearCapaNACE_Circular(SectorLabel_554, "554", [ListBCEMarkers1030]);
var Marker_N559 = crearCapaNACE_Circular(SectorLabel_559, "559", [ListBCEMarkers1030]);
GroupMarkersMap1030_D551.addLayer(Marker_N551)
GroupMarkersMap1030_D552.addLayer(Marker_N552)
GroupMarkersMap1030_D553.addLayer(Marker_N553)
GroupMarkersMap1030_D554.addLayer(Marker_N554)
GroupMarkersMap1030_D559.addLayer(Marker_N559)
GroupMarkersMap1030_D55.addLayer(Marker_N559, Marker_N554, Marker_N553, Marker_N552, Marker_N551)

var Marker_N471 = crearCapaNACE_Circular(SectorLabel_471, "471", [ListBCEMarkers1030]);
var Marker_N472 = crearCapaNACE_Circular(SectorLabel_472, "472", [ListBCEMarkers1030]);
var Marker_N473 = crearCapaNACE_Circular(SectorLabel_473, "473", [ListBCEMarkers1030]);
var Marker_N474 = crearCapaNACE_Circular(SectorLabel_474, "474", [ListBCEMarkers1030]);
var Marker_N475 = crearCapaNACE_Circular(SectorLabel_475, "475", [ListBCEMarkers1030]);
var Marker_N476 = crearCapaNACE_Circular(SectorLabel_476, "476", [ListBCEMarkers1030]);
var Marker_N477 = crearCapaNACE_Circular(SectorLabel_477, "477", [ListBCEMarkers1030]);
var Marker_N478 = crearCapaNACE_Circular(SectorLabel_478, "478", [ListBCEMarkers1030]);
var Marker_N479 = crearCapaNACE_Circular(SectorLabel_479, "479", [ListBCEMarkers1030]);
GroupMarkersMap1030_D471.addLayer(Marker_N471)
GroupMarkersMap1030_D472.addLayer(Marker_N472)
GroupMarkersMap1030_D473.addLayer(Marker_N473)
GroupMarkersMap1030_D474.addLayer(Marker_N474)
GroupMarkersMap1030_D475.addLayer(Marker_N475)
GroupMarkersMap1030_D476.addLayer(Marker_N476)
GroupMarkersMap1030_D477.addLayer(Marker_N477)
GroupMarkersMap1030_D478.addLayer(Marker_N478)
GroupMarkersMap1030_D479.addLayer(Marker_N479)
GroupMarkersMap1030_D47.addLayer(Marker_N479, Marker_N478, Marker_N477, Marker_N476,
    Marker_N475, Marker_N474, Marker_N473, Marker_N472, Marker_N471)

var Marker_N461 = crearCapaNACE_Circular(SectorLabel_461, "461", [ListBCEMarkers1030]);
var Marker_N462 = crearCapaNACE_Circular(SectorLabel_462, "462", [ListBCEMarkers1030]);
var Marker_N463 = crearCapaNACE_Circular(SectorLabel_463, "463", [ListBCEMarkers1030]);
var Marker_N464 = crearCapaNACE_Circular(SectorLabel_464, "464", [ListBCEMarkers1030]);
var Marker_N465 = crearCapaNACE_Circular(SectorLabel_465, "465", [ListBCEMarkers1030]);
var Marker_N466 = crearCapaNACE_Circular(SectorLabel_466, "466", [ListBCEMarkers1030]);
var Marker_N467 = crearCapaNACE_Circular(SectorLabel_467, "467", [ListBCEMarkers1030]);
var Marker_N468 = crearCapaNACE_Circular(SectorLabel_468, "468", [ListBCEMarkers1030]);
var Marker_N469 = crearCapaNACE_Circular(SectorLabel_469, "469", [ListBCEMarkers1030]);
GroupMarkersMap1030_D461.addLayer(Marker_N461)
GroupMarkersMap1030_D462.addLayer(Marker_N462)
GroupMarkersMap1030_D463.addLayer(Marker_N463)
GroupMarkersMap1030_D464.addLayer(Marker_N464)
GroupMarkersMap1030_D465.addLayer(Marker_N465)
GroupMarkersMap1030_D466.addLayer(Marker_N466)
GroupMarkersMap1030_D467.addLayer(Marker_N467)
GroupMarkersMap1030_D468.addLayer(Marker_N468)
GroupMarkersMap1030_D469.addLayer(Marker_N469)
GroupMarkersMap1030_D46.addLayer(Marker_N469, Marker_N468, Marker_N467, Marker_N466,
    Marker_N465, Marker_N464, Marker_N463, Marker_N462, Marker_N461)


// BEGIN ==== Data Viewer ========
Marker_N461.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N462.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N463.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N464.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N465.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N466.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N467.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N468.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N469.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });

Marker_N471.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N472.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N473.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N474.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N475.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N476.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N477.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N478.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N479.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });

Marker_N561.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N562.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N563.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N564.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });

Marker_N551.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N552.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N553.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N554.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
Marker_N559.on("click", function (event) { var clickedMarker = event.layer; MarkerDataView(clickedMarker) });
// END ==== Data Viewer ========

//++++++++++++++++++++++++++++++++
//carte.addLayer(GroupMarkersMap1030_Horeca)
carte.addLayer(GroupMarkersMap1030_00)
//markerClusterGroup.clearLayers();
//markerClusterGroup.enableClustering();
//markerClusterGroup.disableClustering();

//++++++++++++++++++++++++++++++++

// BEGIN ==== Donnnes GeoJson comme marqueurs =======
// fonction qui est appelée sur chaque entité avant de l'ajouter à une couche GeoJSON. 
function onEachFeature(feature, layer) {
    var popupContent = "<dt> ID: " + feature.id + "</dt>";
    if (feature.properties.source__term_name) {
        var custompoup = "<dt> Source: " + feature.properties.source__term_name +
            "<dt> Rue: " + feature.properties.sit_rue + "</dt>" +
            "<dt> Info: " + feature.properties.sit_info;
        popupContent += custompoup;
    }
    if (feature.properties.SectorName) {
        var custompoup = "<dt>" + feature.properties.SectorType + ": " +
            feature.properties.SectorName + "</dt>";
        popupContent += custompoup;
    }
    if (feature.properties.ArretSTIB) {
        var custompoup = "<dt>" + feature.properties.ArretSTIB + "</dt>";
        popupContent += custompoup;
    }
    if (feature.properties.Numident) {
        var custompoup = "<dt> Source: " + feature.properties.Source_Pot +
            "<dt> Type Pot: " + feature.properties.Type_Pot + "</dt>" +
            "<dt> Type Pan: " + feature.properties.Type_Pan + "</dt>" +
            "<dt> Entrave Pan: " + feature.properties.Entrave_Pan;
        popupContent += custompoup;
    }
    if (feature.properties.EntityNumber) {
        var custompoup =
            "<dt> EnterpriseNumber : " + feature.properties.EnterpriseNumber + "</dt>" +
            "<dt> Denomination : " + feature.properties.Denomination + "</dt>" +
            "<dt> Condition : " + feature.properties.Condition + "</dt>";
        // "<dt> NaceCode: " + feature.properties.NaceCode + "</dt>" +;
        // "<dt> SectorGroup: " + feature.properties.SectorGroup + "</dt>" +
        // "<dt> Adresses: " + feature.properties.StreetFR + " " + feature.properties.HouseNumber + "</dt>";
        var popupContent0 = "<dt> EntityNumber : " + feature.properties.EntityNumber + "</dt>";

        popupContent = popupContent0 + custompoup;
    }
    layer.bindPopup(popupContent);
}


function MarkerDataView(clickedMarker) {
    //var AdresseRef = clickedMarker.feature.properties.StreetFR + " " + clickedMarker.feature.properties.HouseNumber + ", 1030 Schaerbeek";
    //var CommentairesDossier = clickedMarker.feature.properties.Commentaires + " Dossier: " + clickedMarker.feature.properties.Dossier;

    document.getElementById("EntityNumBCE").value = clickedMarker.feature.properties.EntityNumber
    document.getElementById("EnterpNumBCE").value = clickedMarker.feature.properties.EnterpriseNumber
    document.getElementById("EntityTypeBCE").value = clickedMarker.feature.properties.EntityType
    document.getElementById("NomBCE").value = clickedMarker.feature.properties.Denomination
    document.getElementById("NaceBCE").value = clickedMarker.feature.properties.NaceCode
    document.getElementById("SecCodeBCE").value = clickedMarker.feature.properties.SectorCode
    document.getElementById("SecGroupBCE").value = clickedMarker.feature.properties.SectorGroup
    document.getElementById("QuartierBCE").value = clickedMarker.feature.properties.Quartier
    document.getElementById("LatitudeBCE").value = clickedMarker.feature.geometry.coordinates[1]
    document.getElementById("LongitudeBCE").value = clickedMarker.feature.geometry.coordinates[0]
    document.getElementById("AdressesEntityBCE").value = clickedMarker.feature.properties.AdressesEntity
    document.getElementById("AddressEnterpriseBCE").value = clickedMarker.feature.properties.AddressEnterprise
    document.getElementById("StreetBCE").value = clickedMarker.feature.properties.StreetFR
    document.getElementById("Classification").value = clickedMarker.feature.properties.Classification
    document.getElementById("TypeOfEnterprise").value = clickedMarker.feature.properties.TypeOfEnterprise
    document.getElementById("JuridicalForm").value = clickedMarker.feature.properties.JuridicalForm
    document.getElementById("Division").value = clickedMarker.feature.properties.Division
    document.getElementById("Activites").value = clickedMarker.feature.properties.Activites
    document.getElementById("Condition").value = clickedMarker.feature.properties.Condition

    //document.getElementById("HouseNumBCE").value = clickedMarker.feature.properties.HouseNumber
    //document.getElementById("CommentairesBCE").value = CommentairesDossier
};


function crearCapaImpetrantSimple(label, StyleNACE, geoData) {
    // Création de la couche avec filtrage et conversion des points en cercles
    const capa = L.geoJSON(geoData, {
        filter: function (feature) {
            // Utilisation de .includes() pour correspondre à votre section de référence
            return feature.properties.Activites.includes(label);
        },
        pointToLayer: function (feature, latlng) {
            // Applique le style StyleNACE directement au cercle
            return L.circleMarker(latlng, StyleNACE);
        },
        onEachFeature: onEachFeature
    });

    // Logique du panneau informatif
    const numeroElementos = capa.getLayers().length;
    console.log(`Cargados ${numeroElementos} elementos para: ${label}`);
    return capa;
}

function crearCapaImpetrantIcono_00(label, urlImagen, geoData) {
    // Definimos el icono personalizado
    const iconoPersonalizado = L.icon({
        iconUrl: urlImagen,
        iconSize: [32, 32],      // Tamaño fijo: 32px de ancho y alto
        iconAnchor: [16, 32],    // El punto [16, 32] es la base inferior central
        popupAnchor: [0, -32],   // El popup aparecerá justo encima del icono
        shadowUrl: null          // Opcional: puedes añadir una sombra si lo deseas
    });

    return L.geoJSON(geoData, {
        filter: (feature) => feature.properties.Activites.includes(label),
        pointToLayer: (feature, latlng) => {
            return L.marker(latlng, { icon: iconoPersonalizado });
        },
        onEachFeature: onEachFeature
    });
}

function crearCapaNACE_Circular(label, naceCode, geoData) {
    // On récupère le style spécifique dans l'objet StylesCommerces
    const estiloElegido = StylesCommerces[naceCode];

    return L.geoJSON(geoData, {
        filter: function (feature) {
            // Filtrage par le label textuel
            return feature.properties.Activites.includes(label);
        },
        pointToLayer: function (feature, latlng) {
            // Application du style (couleur, rayon, etc.)
            return L.circleMarker(latlng, estiloElegido);
        },
        onEachFeature: onEachFeature
    });
}