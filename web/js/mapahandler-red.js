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
                            clickCallbak("ALTO PATIA Y NORTE DEL CAUCA");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path497": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path499": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path501": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path503": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path505": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path507": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path509": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path511": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },

                "path513": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path515": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path517": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },

                "path519": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },

                "path521": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("SANTA MARTA");
                        }
                    },
                    tooltip: {
                        content: "SANTA MARTA"
                    }
                },

                //Region
                "path475": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path477": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },

                "path479": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("SARDINATA");
                        }
                    },
                    tooltip: {
                        content: "SARDINATA"
                    }
                },
                "path483": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path485": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("TEORAMA");
                        }
                    },
                    tooltip: {
                        content: "TEORAMA"
                    }
                },
                "Tibu": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("TIBÚ");
                        }
                    },
                    tooltip: {
                        content: "TIBÚ"
                    }
                },
                "El Tarra": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("EL TARRA");
                        }
                    },
                    tooltip: {
                        content: "EL TARRA"
                    }
                },

                //region

                "path399": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
                },
                "path401": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "ALTO PATÍA Y <br /> NORTE DEL CAUCA"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("RIOSUCIO");
                        }
                    },
                    tooltip: {
                        content: "RIOSUCIO"
                    }
                },
                "path409": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "Bojaya": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("BOJAYÁ");
                        }
                    },
                    tooltip: {
                        content: "BOJAYÁ"
                    }
                },
                "path413": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "Quibdo": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("QUIBDÓ");
                        }
                    },
                    tooltip: {
                        content: "QUIBDÓ"
                    }
                },
                "path417": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path375": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path377": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path379": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path381": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path383": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path385": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path387": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path389": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path391": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path393": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
                },
                "path395": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Riosucio"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("TURBO");
                        }
                    },
                    tooltip: {
                        content: "TURBO"
                    }
                },
                "path759": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path761": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path763": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path765": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path767": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path769": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "Apartado": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("APARTADÓ");
                        }
                    },
                    tooltip: {
                        content: "APARTADÓ"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("VALENCIA");
                        }
                    },
                    tooltip: {
                        content: "VALENCIA"
                    }
                },

                //Region

                "path465": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Valencia"}
                },

                "Montelibano": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("MONTELÍBANO");
                        }
                    },
                    tooltip: {
                        content: "MONTELÍBANO"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("PUERTO LIBERTADOR");
                        }
                    },
                    tooltip: {
                        content: "PUERTO LIBERTADOR"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("TIERRALTA");
                        }
                    },
                    tooltip: {
                        content: "TIERRALTA"
                    }
                },

                //Region
                "Briceno": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("BRICEÑO");
                        }
                    },
                    tooltip: {
                        content: "BRICEÑO"
                    }
                },
                "Caceres": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("CÁCERES");
                        }
                    },
                    tooltip: {
                        content: "CÁCERES"
                    }
                },
                "Anori": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("ANORÍ");
                        }
                    },
                    tooltip: {
                        content: "ANORÍ"
                    }
                },
                "path427": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "Zaragoza": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("ZARAGOZA");
                        }
                    },
                    tooltip: {
                        content: "ZARAGOZA"
                    }
                },
                "Valdivia": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("VALDIVIA");
                        }
                    },
                    tooltip: {
                        content: "VALDIVIA"
                    }
                },
                "Taraza": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("TARAZÁ");
                        }
                    },
                    tooltip: {
                        content: "TARAZÁ"
                    }
                },
                "path435": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "El Bagre": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("EL BAGRE");
                        }
                    },
                    tooltip: {
                        content: "EL BAGRE"
                    }
                },
                "Caucasia": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("CAUCASIA");
                        }
                    },
                    tooltip: {
                        content: "CAUCASIA"
                    }
                },
                "path441": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "Nechi": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("NECHÍ");
                        }
                    },
                    tooltip: {
                        content: "NECHÍ"
                    }
                },
                "Iuango": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("ITUANGO");
                        }
                    },
                    tooltip: {
                        content: "ITUANGO"
                    }
                },

                //Region
                "path449": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "path451": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },

                "path246": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },

                "path455": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("SAN PABLO");
                        }
                    },
                    tooltip: {
                        content: "SAN PABLO"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("SANTA ROSA DEL SUR");
                        }
                    },
                    tooltip: {
                        content: "SANTA ROSA DEL SUR"
                    }
                },
                "path461": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("SAN PABLO");
                        }
                    },
                    tooltip: {
                        content: "SAN PABLO"
                    }
                },

                //region
                "Buenaventura": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("BUENAVENTURA");
                        }
                    },
                    tooltip: {
                        content: "BUENAVENTURA"
                    }
                },
                "Timbiqui": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("TIMBIQUÍ");
                        }
                    },
                    tooltip: {
                        content: "TIMBIQUÍ"
                    }
                },
                "Lopez de Micay": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("LÓPEZ DE MICAY");
                        }
                    },
                    tooltip: {
                        content: "LÓPEZ DE MICAY"
                    }
                },
                "El Charco": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("EL CHARCO");
                        }
                    },
                    tooltip: {
                        content: "EL CHARCO"
                    }
                },

                //Region
                "path211": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                "Payan": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("PAYÁN");
                        }
                    },
                    tooltip: {
                        content: "PAYÁN"
                    }
                },

                "path217": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("OLAYA HERRERA");
                        }
                    },
                    tooltip: {
                        content: "OLAYA HERRERA"
                    }
                },
                "Roberto": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("ROBERTO");
                        }
                    },
                    tooltip: {
                        content: "ROBERTO"
                    }
                },

                "path229": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "path231": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("TUMACO");
                        }
                    },
                    tooltip: {
                        content: "TUMACO"
                    }
                },

                "path248": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "path237": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path251": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path253": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path255": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path257": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path259": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path261": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path263": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path265": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path267": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path269": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path271": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path273": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path275": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path277": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path279": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path281": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("CALOTO");
                        }
                    },
                    tooltip: {
                        content: "CALOTO"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("CORINTO");
                        }
                    },
                    tooltip: {
                        content: "CORINTO"
                    }
                },
                "path287": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path289": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("MIRANDA");
                        }
                    },
                    tooltip: {
                        content: "MIRANDA"
                    }
                },
                "path293": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path295": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path297": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("SANTANDER DE QULICHAO");
                        }
                    },
                    tooltip: {
                        content: "SANTANDER DE QUILICHAO"
                    }
                },
                "path301": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "Toribio": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("TORIBÍO");
                        }
                    },
                    tooltip: {
                        content: "TORIBÍO"
                    }
                },
                "path305": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path307": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path309": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path311": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },

                "path313": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path315": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "El Tambo": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("EL TAMBO");
                        }
                    },
                    tooltip: {
                        content: "EL TAMBO"
                    }
                },
                "path319": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path327": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                //region
                "path335": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "Orito": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("ORITO");
                        }
                    },
                    tooltip: {
                        content: "ORITO"
                    }
                },
                "San Miguel": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("SAN MIGUEL");
                        }
                    },
                    tooltip: {
                        content: "SAN MIGUEL"
                    }
                },
                "Valle del Guamuez": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "Caicedo": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("CAICEDO");
                        }
                    },
                    tooltip: {
                        content: "CAICEDO"
                    }
                },
                "Puerto Asis": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("PUERTO ASIS");
                        }
                    },
                    tooltip: {
                        content: "PUERTO ASIS"
                    }
                },
                "Puerto Guzman": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("PUERTO GUZMÁN");
                        }
                    },
                    tooltip: {
                        content: "PUERTO GUZMÁN"
                    }
                },
                "Puerto Leguizamo": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("PUERTO LEGUIZAMO");
                        }
                    },
                    tooltip: {
                        content: "PUERTO LEGUIZAMO"
                    }
                },

                //region
                "path527": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path533": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path535": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path537": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "La montanita": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("LA MONTAÑITA");
                        }
                    },
                    tooltip: {
                        content: "LA MONTAÑITA"
                    }
                },
                "path541": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "San Jose del Fragua": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("SAN JOSÉ DE FRAGUA");
                        }
                    },
                    tooltip: {
                        content: "SAN JOSÉ DE FRAGUA"
                    }
                },
                "path545": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path547": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path549": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path551": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "path553": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("SOLANO");
                        }
                    },
                    tooltip: {
                        content: "SOLANO"
                    }
                },
                "path557": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Turbo"}
                },
                "Cartagena del Chaira": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("CARTAGENA DEL CHAIRÁ");
                        }
                    },
                    tooltip: {
                        content: "CARTAGENA DEL CHAIRÁ"
                    }
                },

                //region
                "path365": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "path367": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "path369": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "path371": {
                    attrs: {
                        fill: "#3f3f3f"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                                        fill: "#3f3f3f"
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },

                //Region
                "path677": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "path683": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "path697": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "path709": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
                },
                "path713": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("");
                        }
                    },
                    //tooltip: {content: "Tierralta"}
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("EL RETORNO");
                        }
                    },
                    tooltip: {
                        content: "EL RETORNO"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("MESETAS");
                        }
                    },
                    tooltip: {
                        content: "MESETAS"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("URIBE");
                        }
                    },
                    tooltip: {
                        content: "URIBE"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("LA MACARENA");
                        }
                    },
                    tooltip: {
                        content: "LA MACARENA"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("VISTA HERMOSA");
                        }
                    },
                    tooltip: {
                        content: "VISTA HERMOSA"
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("PUERTO RICO");
                        }
                    },
                    tooltip: {
                        content: "PUERTO RICO"
                    }
                },
                "San Jose del Guaviare": {
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
                            if (mapElem.originalAttrs.fill == "#767676" || mapElem.originalAttrs.fill == "#a09999" || mapElem.originalAttrs.fill == "#3f3f3f") {
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
                            clickCallbak("SAN JOSÉ DEL GUAVIARE");
                        }
                    },
                    tooltip: {
                        content: "SAN JOSÉ DEL GUAVIARE"
                    }
                },
            },
        });
    });

}