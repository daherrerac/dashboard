$(function () {
    $(".mapcontainer").mapael({
        map: {
            // Set the name of the map to display
            name: "pdet",
            
            zoom: {
                enabled: true,
                maxLevel: 10
            }
            , defaultPlot: {
                attrs: {
                    fill: "#004a9b"
                    , opacity: 1
                }
                , attrsHover: {
                    opacity: 1
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
            , defaultArea: {
                attrs: {
                    fill: "#cccccc"
                    , stroke: "#efefef"
                }
                , attrsHover: {
                    fill: "#cccccc"
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
        },areas: {                    
            "ALTO PATIA Y NORTE DEL CAUCA": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        // alert("Hola, hizo clic a ALTO PATIA Y NORTE DEL CAUCA");
                    }
                },
                tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "PACIFICO MEDIO": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("Hola, hizo clic a PACIFICO MEDIO");
                    }
                },
                tooltip: {content: "PACIFICO MEDIO"}
            },
            "SIERRA NEVADA-PERIJA-ZONA BANANERA": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("SIERRA NEVADA-PERIJA-ZONA BANANERA");
                    }
                },
                tooltip: {content: "SIERRA NEVADA <br /> PERIJA-ZONA BANANERA "}
            },
            "CATATUMBO": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("CATATUMBO");
                    }
                },
                tooltip: {content: "CATATUMBO"}
            },
            "SUR DE BOLIVAR": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("SUR DE BOLIVAR");
                    }
                },
                tooltip: {content: "SUR DE BOLIVAR"}
            },
            "SUR DE CORDOBA": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("SUR DE CORDOBA");
                    }
                },
                tooltip: {content: "SUR DE CÓRDOVA"}
            },
            "BAJO CAUCA Y NORDESTE ANTIOQUENO": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("BAJO CAUCA Y NORDESTE ANTIOQUENO");
                    }
                },
                tooltip: {content: "BAJO CAUCA Y NORDESTE ANTIOQUEÑO"}
            },
            "URABA ANTIOQUENO": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("URABA ANTIOQUENO");
                    }
                },
                tooltip: {content: "URABA ANTIOQUEÑO"}
            },
            "CHOCO": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("CHOCO");
                    }
                },
                tooltip: {content: "CHOCO"}
            },
            "PACIFICO Y FRONTERA NARINENSE": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("PACIFICO Y FRONTERA NARINENSE");
                    }
                },
                tooltip: {content: "PACIFICO Y FRONTERA NARINENSE"}
            },
            "SUR DE TOLIMA": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("SUR DE TOLIMA");
                    }
                },
                tooltip: {content: "SUR DE TOLIMA"}
            },
            "MACARENA GUAVIARE": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("MACARENA GUAVIARE");
                    }
                },
                tooltip: {content: "MACARENA GUAVIARE"}
            },
            "PUTUMAYO": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("PUTUMAYO");
                    }
                },
                tooltip: {content: "PUTUMAYO"}
            },
            "CUENCA DEL CAGUAN Y PIEDEMONTE CAQUETENO": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#022869"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#767676") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#0088db"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                        //alert("CUENCA DEL CAGUAN Y PIEDEMONTE CAQUETENO");
                    }
                },
                tooltip: {content: "CUENCA DEL CAGUAN Y PIEDEMONTE CAQUETEÑO"}
            },
        },
    });
});