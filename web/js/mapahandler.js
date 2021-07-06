function initMapHandler(clickCallbak){
    var previousSelectedElementId = null;
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
                            fill: "#FFFFFF"
                        }
                        , attrsHover: {
                            fill: "#000"
                        }
                    }
                }
            },areas: {                    
                "ALTO PATÍA Y NORTE DEL CAUCA": {
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("ALTO PATÍA Y NORTE DEL CAUCA");
                            // alert("Hola, hizo clic a ALTO PATIA Y NORTE DEL CAUCA");
                        }
                    },
                    tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "PACÍFICO MEDIO": {
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("PACÍFICO MEDIO");
                        }
                    },
                    tooltip: {content: "PACÍFICO MEDIO"}
                },
                "SIERRA NEVADA-PERIJÁ-ZONA BANANERA": {
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("SIERRA NEVADA-PERIJÁ-ZONA BANANERA");
                        }
                    },
                    tooltip: {content: "SIERRA NEVADA <br /> PERIJÁ-ZONA BANANERA "}
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("CATATUMBO");
                        }
                    },
                    tooltip: {content: "CATATUMBO"}
                },
                "SUR DE BOLÍVAR": {
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("SUR DE BOLÍVAR");
                        }
                    },
                    tooltip: {content: "SUR DE BOLÍVAR"}
                },
                "SUR DE CÓRDOBA": {
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("SUR DE CÓRDOBA");
                        }
                    },
                    tooltip: {content: "SUR DE CÓRDOBA"}
                },
                "BAJO CAUCA Y NORDESTE ANTIOQUEÑO": {
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("BAJO CAUCA Y NORDESTE ANTIOQUEÑO");
                        }
                    },
                    tooltip: {content: "BAJO CAUCA Y NORDESTE ANTIOQUEÑO"}
                },
                "URABÁ ANTIOQUEÑO": {
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("URABÁ ANTIOQUEÑO");
                        }
                    },
                    tooltip: {content: "URABÁ ANTIOQUEÑO"}
                },
                "CHOCÓ": {
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
                            
                            if (previousSelectedElementId !== null ) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                                               
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };                                                                                               
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                }; 
                                                               
                                previousSelectedElementId = null;
                            }
                            
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("CHOCÓ");
                        }
                    },
                    tooltip: {content: "CHOCÓ"}
                },                
                "PACÍFICO Y FRONTERA NARIÑENSE": {
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("PACÍFICO Y FRONTERA NARIÑENSE");
                        }
                    },
                    tooltip: {content: "PACÍFICO Y FRONTERA NARIÑENSE"}
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("SUR DE TOLIMA");
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("MACARENA GUAVIARE");
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("PUTUMAYO");
                        }
                    },
                    tooltip: {content: "PUTUMAYO"}
                },
                "CUENCA DEL CAGUÁN Y PIEDEMONTE CAQUETEÑO": {
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("CUENCA DEL CAGUÁN Y PIEDEMONTE CAQUETEÑO");
                        }
                    },
                    tooltip: {content: "CUENCA DEL CAGUÁN Y PIEDEMONTE CAQUETEÑO"}
                },
                "CIUDADES CALI-QUIBDÓ": {
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
                            if (previousSelectedElementId !== null) {
                                newData.areas[previousSelectedElementId] = {
                                    attrs: {
                                        fill: "#767676" //original
                                    }
                                };                                
                            }
                            if (mapElem.originalAttrs.fill == "#767676") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#022869"
                                    }
                                };
                                previousSelectedElementId = id;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                            }
                            $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            clickCallbak("CIUDADES CALI-QUIBDÓ");
                        }
                    },
                    tooltip: {content: "CIUDADES CALI-QUIBDÓ"}
                }
            },
        });
    });
}