function initMapHandler(clickCallbak) {
    var previousSelectedElementId = null;
    $(function () {
        var previousSelectedElementId = null;
        var previousSelectedBackground = null;
        $(".mapcontainer").mapael({
            map: {
                // Set the name of the map to display
                name: "municipios",

                zoom: {
                    enabled: true,
                    maxLevel: 20
                },
                defaultPlot: {
                    attrs: {
                        fill: "#ffffff",
                        opacity: 0.8,
                        blur: 2
                    },
                    attrsHover: {
                        opacity: 1
                    },
                    text: {
                        attrs: {
                            fill: "#505444"
                        },
                        attrsHover: {
                            fill: "#000"
                        }
                    }
                },
                defaultArea: {
                    attrs: {
                        fill: "#cccccc",
                        stroke: "#efefef"
                    },
                    attrsHover: {
                        fill: "#cccccc"
                    },
                    text: {
                        attrs: {
                            fill: "#505444"
                        },
                        attrsHover: {
                            fill: "#000"
                        }
                    },

                }
            },
            areas: {
                "path495": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path497": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path499": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                // "Cartagena": {
                //     attrs: {
                //         fill: "#767676"
                //     },
                //     attrsHover: {
                //         fill: "#C2113B"
                //     },
                //     eventHandlers: {
                //         click: function (e, id, mapElem, textElem) {
                //             var newData = {
                //                 'areas': {}
                //             };
                //             if (previousSelectedElementId !== null) {
                //                 newData.areas[previousSelectedElementId] = {
                //                     attrs: {
                //                         fill: previousSelectedBackground
                //                     }
                //                 };
                //             }
                //             if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                //                 newData.areas[id] = {
                //                     attrs: {
                //                         fill: "#C2113B"
                //                     }
                //                 };
                //                 previousSelectedElementId = id;
                //                 previousSelectedBackground = mapElem.originalAttrs.fill;
                //             } else {
                //                 newData.areas[id] = {
                //                     attrs: {
                //                         fill: "#767676"
                //                     }
                //                 };
                //                 previousSelectedElementId = null;
                //                 previousSelectedBackground = null;
                //             }
                //             $(".mapcontainer").trigger('update', [{
                //                 mapOptions: newData
                //             }]);
                //             $(".mapcontainer").trigger('zoom', {
                //                 area: id,
                //                 areaMargin: 30
                //             });
                //             clickCallbak("Cartagena");
                //         }
                //     },
                //     tooltip: {content: "Cartagena"}
                // },
                "path501": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path503": {
                    attrs: {
                        fill: "#767676"
                    },  
                    attrsHover: {
                        fill: "#767676"
                    },                  
                },
                "path505": {
                    attrs: {
                        fill: "#767676"
                    },  
                    attrsHover: {
                        fill: "#767676"
                    },                  
                },
                "path507": {
                    attrs: {
                        fill: "#767676"
                    },   
                    attrsHover: {
                        fill: "#767676"
                    },                 
                },
                "path509": {
                    attrs: {
                        fill: "#767676"
                    },  
                    attrsHover: {
                        fill: "#767676"
                    },                  
                },
                "path511": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },                    
                },

                "path513": {
                    attrs: {
                        fill: "#767676"
                    },   
                    attrsHover: {
                        fill: "#767676"
                    },                 
                },
                "path515": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },                    
                },
                "path517": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },                    
                },

                "path519": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },

                "path521": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },

                "Santa Marta": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Santa Marta");
                        }
                    },
                    tooltip: {
                        content: "Santa Marta"
                    }
                },

                //Region
                "path475": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "San Miguel (NS)": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("San Miguel (NS)");
                        }
                    },
                    tooltip: {content: "San Miguel"}
                },

                "path479": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Sardinata": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Sardinata");
                        }
                    },
                    tooltip: {
                        content: "Sardinata"
                    }
                },
                "path483": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path485": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Teorama": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Teorama");
                        }
                    },
                    tooltip: {
                        content: "Teorama"
                    }
                },
                "Tibú": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Tibú");
                        }
                    },
                    tooltip: {
                        content: "Tibú"
                    }
                },
                "Tarra": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Tarra");
                        }
                    },
                    tooltip: {
                        content: "Tarra"
                    }
                },

                //region

                "path399": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path401": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Riosucio": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Riosucio");
                        }
                    },
                    tooltip: {
                        content: "Riosucio"
                    }
                },
                "path409": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Bojayá": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Bojayá");
                        }
                    },
                    tooltip: {
                        content: "Bojayá"
                    }
                },
                "path413": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Quibdó": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Quibdó");
                        }
                    },
                    tooltip: {
                        content: "Quibdó"
                    }
                },
                "path417": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path375": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path377": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path379": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path381": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path383": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path385": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path387": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path389": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path391": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path393": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path395": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },

                //Region
                "Turbo": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Turbo");
                        }
                    },
                    tooltip: {
                        content: "Turbo"
                    }
                },
                "path759": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path761": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path763": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path765": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path767": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path769": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "Apartadó": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Apartadó");
                        }
                    },
                    tooltip: {
                        content: "Apartadó"
                    }
                },
                "Valencia": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Valencia");
                        }
                    },
                    tooltip: {
                        content: "Valencia"
                    }
                },

                //Region

                "path465": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },

                "Montelíbano": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Montelíbano");
                        }
                    },
                    tooltip: {
                        content: "Montelíbano"
                    }
                },

                "Puerto Libertador": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Puerto Libertador");
                        }
                    },
                    tooltip: {
                        content: "Puerto Libertador"
                    }
                },

                "Tierralta": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Tierralta");
                        }
                    },
                    tooltip: {
                        content: "Tierralta"
                    }
                },

                //Region
                "Briceño": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Briceño");
                        }
                    },
                    tooltip: {
                        content: "Briceño"
                    }
                },
                "Cáceres": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Cáceres");
                        }
                    },
                    tooltip: {
                        content: "Cáceres"
                    }
                },
                "Anorí": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Anorí");
                        }
                    },
                    tooltip: {
                        content: "Anorí"
                    }
                },
                "path427": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
                        fill: "#6C6463"
                    },
                },
                "Zaragoza": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Zaragoza");
                        }
                    },
                    tooltip: {
                        content: "Zaragoza"
                    }
                },
                "Valdivia": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Valdivia");
                        }
                    },
                    tooltip: {
                        content: "Valdivia"
                    }
                },
                "Tarazá": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Tarazá");
                        }
                    },
                    tooltip: {
                        content: "Tarazá"
                    }
                },
                "path435": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
                        fill: "#6C6463"
                    },
                },
                "Bagre": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Bagre");
                        }
                    },
                    tooltip: {
                        content: "Bagre"
                    }
                },
                "Caucasia": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Caucasia");
                        }
                    },
                    tooltip: {
                        content: "Caucasia"
                    }
                },
                "path441": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
                        fill: "#6C6463"
                    },
                },
                "Nechí": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Nechí");
                        }
                    },
                    tooltip: {
                        content: "Nechí"
                    }
                },
                "Ituango": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Ituango");
                        }
                    },
                    tooltip: {
                        content: "Ituango"
                    }
                },

                //Region
                "path449": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path451": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },

                "path246": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },

                "path455": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "San Pablo": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("San Pablo");
                        }
                    },
                    tooltip: {
                        content: "San Pablo"
                    }
                },
                "Santa Rosa del Sur": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Santa Rosa del Sur");
                        }
                    },
                    tooltip: {
                        content: "Santa Rosa del Sur"
                    }
                },
                "path461": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "San Pablo": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("San Pablo");
                        }
                    },
                    tooltip: {
                        content: "San Pablo"
                    }
                },

                //region
                "Buenaventura": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Buenaventura");
                        }
                    },
                    tooltip: {
                        content: "Buenaventura"
                    }
                },
                "Timbiquí": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Timbiquí");
                        }
                    },
                    tooltip: {
                        content: "Timbiquí"
                    }
                },
                "López de Micay": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("López de Micay");
                        }
                    },
                    tooltip: {
                        content: "López de Micay"
                    }
                },
                "El Charco": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("El Charco");
                        }
                    },
                    tooltip: {
                        content: "El Charco"
                    }
                },

                //Region
                "path211": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Barbacoas": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Barbacoas");
                        }
                    },
                    tooltip: {
                        content: "Barbacoas"
                    }
                },
                "Maguí Payán": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Maguí Payán");
                        }
                    },
                    tooltip: {
                        content: "Maguí Payán"
                    }
                },

                "path217": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },

                "Magui": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("MAGUI");
                        }
                    },
                    tooltip: {
                        content: "MAGUI"
                    }
                },

                "path221": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Olaya Herrera": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Olaya Herrera");
                        }
                    },
                    tooltip: {
                        content: "Olaya Herrera"
                    }
                },
                "Roberto Payán": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Roberto Payán");
                        }
                    },
                    tooltip: {
                        content: "Roberto Payán"
                    }
                },

                "path229": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path231": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },

                "Tumaco": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Tumaco");
                        }
                    },
                    tooltip: {
                        content: "Tumaco"
                    }
                },

                "path248": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path237": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Barbacoas": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("BARBACOAS");
                        }
                    },
                    tooltip: {
                        content: "BARBACOAS"
                    }
                },

                //region
                "path249": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path251": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path253": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path255": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path257": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path259": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path261": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path263": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path265": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path267": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path269": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path271": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path273": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path275": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path277": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path279": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path281": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "Caloto": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Caloto");
                        }
                    },
                    tooltip: {
                        content: "Caloto"
                    }
                },
                "Corinto": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Corinto");
                        }
                    },
                    tooltip: {
                        content: "Corinto"
                    }
                },
                "path287": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path289": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "Miranda": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Miranda");
                        }
                    },
                    tooltip: {
                        content: "Miranda"
                    }
                },                
                "path293": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path295": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path297": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "Santander de Quilichao": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Santander de Quilichao");
                        }
                    },
                    tooltip: {
                        content: "Santander de Quilichao"
                    }
                },
                "path301": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "Toribío": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Toribío");
                        }
                    },
                    tooltip: {
                        content: "Toribío"
                    }
                },
                "path305": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path307": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path309": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path311": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },

                "path313": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path315": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "Tambo": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Tambo");
                        }
                    },
                    tooltip: {
                        content: "Tambo"
                    }
                },
                "path319": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path327": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                //region
                "path335": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "Orito": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Orito");
                        }
                    },
                    tooltip: {
                        content: "Orito"
                    }
                },
                "San Miguel": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("San Miguel");
                        }
                    },
                    tooltip: {
                        content: "San Miguel"
                    }
                },
                "Valle del Guamuez": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("VALLE DEL GAMUEZ");
                        }
                    },
                    tooltip: {
                        content: "VALLE DEL GAMUEZ"
                    }
                },
                "path343": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
                        fill: "#6C6463"
                    },
                },
                "Puerto Caicedo": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Puerto Caicedo");
                        }
                    },
                    tooltip: {
                        content: "Puerto Caicedo"
                    }
                },
                "Puerto Asís": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Puerto Asís");
                        }
                    },
                    tooltip: {
                        content: "Puerto Asís"
                    }
                },
                "Puerto Guzmán": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Puerto Guzmán");
                        }
                    },
                    tooltip: {
                        content: "Puerto Guzmán"
                    }
                },
                "Puerto Leguízamo": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#6C6463"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Puerto Leguízamo");
                        }
                    },
                    tooltip: {
                        content: "Puerto Leguízamo"
                    }
                },

                //region
                "San Vicente del Caguán": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("San Vicente del Caguán");
                        }
                    },
                    tooltip: {content: "San Vicente del Caguán"}
                },
                "Pto Rico": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("PUERTO RICO");
                        }
                    },
                    tooltip: {
                        content: "PUERTO RICO"
                    }
                },

                "path531": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path533": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Florencia": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Florencia");
                        }
                    },
                    tooltip: {content: "Florencia"}
                },
                "path537": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Montañita": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Montañita");
                        }
                    },
                    tooltip: {
                        content: "Montañita"
                    }
                },
                "path541": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "San José del Fragua": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("San José del Fragua");
                        }
                    },
                    tooltip: {
                        content: "San José del Fragua"
                    }
                },
                "path545": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path547": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path549": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path551": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "path553": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Solano": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Solano");
                        }
                    },
                    tooltip: {
                        content: "Solano"
                    }
                },
                "path557": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
                        fill: "#a09999"
                    },
                },
                "Cartagena del Chairá": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Cartagena del Chairá");
                        }
                    },
                    tooltip: {
                        content: "Cartagena del Chairá"
                    }
                },

                //region
                "path365": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
                        fill: "#6C6463"
                    },
                },
                "path367": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
                        fill: "#6C6463"
                    },
                },
                "path369": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
                        fill: "#6C6463"
                    },
                },
                "path371": {
                    attrs: {
                        fill: "#6C6463"
                    },
                    attrsHover: {
                        fill: "#6C6463"
                    },
                },

                //Region
                "path677": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path683": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path697": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path709": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "path713": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
                        fill: "#767676"
                    },
                },
                "El Retorno": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("El Retorno");
                        }
                    },
                    tooltip: {
                        content: "El Retorno"
                    }
                },
                "Mesetas": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Mesetas");
                        }
                    },
                    tooltip: {
                        content: "Mesetas"
                    }
                },
                "Uribe": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Uribe");
                        }
                    },
                    tooltip: {
                        content: "Uribe"
                    }
                },
                "La Macarena": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("La Macarena");
                        }
                    },
                    tooltip: {
                        content: "La Macarena"
                    }
                },
                "Vista Hermosa": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Vista Hermosa");
                        }
                    },
                    tooltip: {
                        content: "Vista Hermosa"
                    }
                },
                "Puerto Rico": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Puerto Rico");
                        }
                    },
                    tooltip: {
                        content: "Puerto Rico"
                    }
                },
                "San José del Guaviare": {
                    attrs: {
                        fill: "#767676"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#767676"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("San José del Guaviare");
                        }
                    },
                    tooltip: {
                        content: "San José del Guaviare"
                    }
                },
                //Region
                "Ataco": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Ataco");
                        }
                    },
                    tooltip: {
                        content: "Ataco"
                    }
                },
                "Chaparral": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Chaparral");
                        }
                    },
                    tooltip: {
                        content: "Chaparral"
                    }
                },
                "Planadas": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Planadas");
                        }
                    },
                    tooltip: {
                        content: "Planadas"
                    }
                },
                "Rioblanco": {
                    attrs: {
                        fill: "#a09999"
                    },
                    attrsHover: {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#6C6463") {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#C2113B"
                                    }
                                };
                                previousSelectedElementId = id;
                                previousSelectedBackground = mapElem.originalAttrs.fill;
                            } else {
                                newData.areas[id] = {
                                    attrs: {
                                        fill: "#a09999"
                                    }
                                };
                                previousSelectedElementId = null;
                                previousSelectedBackground = null;
                            }
                            $(".mapcontainer").trigger('update', [{
                                mapOptions: newData
                            }]);
                            $(".mapcontainer").trigger('zoom', {
                                area: id,
                                areaMargin: 30
                            });
                            clickCallbak("Rioblanco");
                        }
                    },
                    tooltip: {
                        content: "Rioblanco"
                    }
                },
            },
        });
    });

}