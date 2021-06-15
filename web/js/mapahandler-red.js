$(function () {
    var previousSelectedElementId = null;
    var previousSelectedBackground = null;
    $(".mapcontainer").mapael({
        map: {
            // Set the name of the map to display
            name: "municipios",
            
            zoom: {
                enabled: true,
                maxLevel: 10
            }
            , defaultPlot: {
                attrs: {
                    fill: "#ffffff",
                    opacity: 0.8,
                    blur: 2
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
                },
                
            }
        },areas: {                    
            "path495": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                                              
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path497": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path499": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path501": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path503": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path505": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path507": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path509": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path511": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },

            "path513": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path515": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path517": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },

            "path519": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },

            "path521": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },

            "path523": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },

            //Region
            "path475": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path477": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },

            "path479": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "Sardinata": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "SARDINATA"}
            },
            "path483": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path485": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "Teorama": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "TEORAMA"}
            },
            "Tibu": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "TIBÚ"}
            },
            "El Tarra": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "EL TARRA"}
            },

            //region

            "path399": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "path401": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
            },
            "Riosucio": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "RIOSUCIO"}
            },
            "path409": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "Bojaya": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "BOJAYÁ"}
            },
            "path413": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "Quibdo": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "QUIBDÓ"}
            },
            "path417": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path375": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path377": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path379": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path381": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path383": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path385": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path387": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path389": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path391": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path393": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },
            "path395": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Riosucio"}
            },

            //Region
            "Turbo": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Turbo"}
            },
            "path759": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path761": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path763": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path765": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path767": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path769": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "Apartado": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Apartadó"}
            },
            "Valencia": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Valencia"}
            },

            //Region

            "path465": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Valencia"}
            },

            "Montelibano": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Montelibano"}
            },

            "Puerto Libertador": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Puerto Libertador"}
            },

            "Tierralta": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Tierralta"}
            },
            
            //Region
            "path421": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path423": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "Anori": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Anorí"}
            },
            "path427": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path429": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path431": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path433": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path435": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path437": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path439": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path441": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path443": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path445": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },

            //Region
            "path449": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path451": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },

            "path455": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path457": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path459": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path461": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "San Pablo": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "San Pablo"}
            },

            //region
            "path355": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path357": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path359": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path361": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },

            //Region
            "path211": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path215": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },

            "path217": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },

            "path219": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },

            "path221": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path223": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path225": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path227": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path229": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path231": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },

            "path233": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },

            "path235": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path237": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "Barbacoas": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Barbacoas"}
            },

            //region
            "path249": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path251": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path253": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path255": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path257": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path259": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path261": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path263": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path265": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path267": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path269": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path271": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path273": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path275": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path277": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path279": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path281": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path283": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path285": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path287": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path289": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path291": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path293": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path295": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path297": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path299": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path301": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path303": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path305": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path307": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path309": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path311": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },

            "path313": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path315": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path317": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path319": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path327": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            //region
            "path335": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path337": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path339": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path341": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path343": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path345": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },   
            "path347": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            }, 
            "path349": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },    
            "path351": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            }, 
            
            //region
            "path527": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path529": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },

            "path531": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path533": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path535": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path537": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path539": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path541": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path543": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path545": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path547": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path549": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path551": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path553": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path555": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "path557": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Turbo"}
            },
            "Cartagena del Chaira": {
                attrs: {
                    fill: "#a09999"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#a09999"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Cartagena del Chaira"}
            },

            //region
            "path365": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path367": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path369": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path371": {
                attrs: {
                    fill: "#3f3f3f"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#3f3f3f"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },

            //Region
            "path677": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path683": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path697": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path709": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "path713": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                //tooltip: {content: "Tierralta"}
            },
            "El Retorno": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "El Retorno"}
            },
            "Mesetas": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Mesetas"}
            },
            "Uribe": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Uribe"}
            },
            "La Macarena": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "La Macarena"}
            },
            "Vista Hermosa": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Vista Hermosa"}
            },
            "Puerto Rico": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "Puerto Rico"}
            },
            "San Jose del Guaviare": {
                attrs: {
                    fill: "#767676"
                }
                , attrsHover: {
                    fill: "#C2113B"
                },                
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (previousSelectedElementId !== null) {
                            newData.areas[previousSelectedElementId] = {
                                attrs: {
                                    fill: previousSelectedBackground
                                }
                            };                                
                        }
                        if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#C2113B"
                                }
                            };
                            previousSelectedElementId = id;
                            previousSelectedBackground  = mapElem.originalAttrs.fill;
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#767676"
                                }
                            };
                            previousSelectedElementId  = null;
                            previousSelectedBackground = null;
                        }
                        $(".mapcontainer").trigger('update', [{mapOptions: newData}]);  
                        $(".mapcontainer").trigger('zoom', {
                            area: id,
                            areaMargin: 30
                        });                       
                    }
                },
                tooltip: {content: "San Jose del Guaviare"}
            },
        },        
    });
});