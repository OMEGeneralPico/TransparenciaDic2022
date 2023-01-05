function isScrolledIntoView(elem) {


    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    if ($(elem).offset()) {

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    } else {
        return false
    }

}


var chartpresupuestosecre = {}
var inViewpresupuestosecre = false;

function animarpresupuestosecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "presupuestosecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpresupuestosecre[idElement]) { continue }
            chartpresupuestosecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewpresupuestosecre) { return; }
            inViewpresupuestosecre = true;
            return new Chart(ctx, {
                type: 'doughnut',
                data: {

                    labels: ['C.Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente', 'Desarrollo Social', 'Economia', 'Org. Descentralizados', 'Part. No programaticas','Proy. Nac. y Prov.'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [4.36, 4.52, 14.65, 9.97, 23.58, 13.89, 7.64, 6.29, 13.45, 1.65],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                                'rgba(221, 227, 146, 0.2)',
                                'rgba(254, 228, 64, 0.2)',
                                'rgba(53, 20, 49, 0.2)',
                                'rgba(101, 76, 79, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [

                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                                'rgba(221, 227, 146, 1)',
                                'rgba(254, 228, 64, 1)',
                                'rgba(53, 20, 49, 1)',
                                'rgba(101, 76, 79, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            anchor: 'end', // remove this line to get label in middle of the bar

                            formatter: (val) => (`${val}%`),
                            labels: {
                                value: {
                                    color: 'blue'
                                }
                            }

                        },

                        title: {
                            display: true,
                            text: 'Presupuesto ejecutado 2022 (%)',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewpresupuestosecre = false;
        }
    }
}
$(window).scroll(function () {

    animarpresupuestosecre();

});

$(window).load(function () {


    animarpresupuestosecre();

});
/* intimaciones */
function animarintimaciones() {
    for (var i = 0; i < 1; i++) {
        var idElement = "intimaciones";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpresupuestosecre[idElement]) { continue }
            chartpresupuestosecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewpresupuestosecre) { return; }
            inViewpresupuestosecre = true;
            return new Chart(ctx, {
                type: 'pie',
                data: {

                    labels: ['Bajo puerta', 'Recibido', 'Falta procesar', 'Domicilio incorrecto', 'Casa deshabitada', 'Rechazada'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [63.70, 19.03, 15.78, 0.65, 0.50, 0.34],
                            fill: true,
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                                'rgba(221, 227, 146, 0.2)'                                
                            ],


                            borderWidth: 1,
                            borderColor: [

                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                                'rgba(221, 227, 146, 1)'
                            ],

                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            anchor: 'end', // remove this line to get label in middle of the bar

                            formatter: (val) => (`${val}%`),
                            labels: {
                                value: {
                                    color: 'blue'
                                }
                            }
                        },

                        title: {
                            display: true,
                            text: 'Clasificación de intimaciones enviadas (porcentaje)',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewpresupuestosecre = false;
        }
    }
}
$(window).scroll(function () {

    animarintimaciones();

});

$(window).load(function () {


    animarintimaciones();

});
/* mantenimiento mensual */
function animarmantenimientomensual() {
    for (var i = 0; i < 1; i++) {
        var idElement = "mantenimientomensual";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpresupuestosecre[idElement]) { continue }
            chartpresupuestosecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewpresupuestosecre) { return; }
            inViewpresupuestosecre = true;
            return new Chart(ctx, {
                type: 'line',
                data: {

                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre','Noviembre','Diciembre'],
                    datasets: [
                        {
                            label: 'Cuadras',
                            tension: 0.1,
                            fill: false,
                            data: [383, 407, 560, 454, 352, 350, 450, 416, 458, 590, 450, 384],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)'],


                            borderWidth: 1,
                            borderColor: ['rgba(71, 123, 168, 1)',
                                
                            ],

                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            anchor: 'end', // remove this line to get label in middle of the bar

                            formatter: (val) => (`${val}%`),
                            labels: {
                                value: {
                                    color: 'blue'
                                }
                            }

                        },

                        title: {
                            display: true,
                            text: 'Servicio de mantenimiento de calles (cantidad de Cuadras)',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewpresupuestosecre = false;
        }
    }
}
$(window).scroll(function () {

    animarmantenimientomensual();

});

$(window).load(function () {


    animarmantenimientomensual();

});
/* ingreso juridico */
function animaringresojuridico() {
    for (var i = 0; i < 1; i++) {
        var idElement = "ingresosjuridicos";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpresupuestosecre[idElement]) { continue }
            chartpresupuestosecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewpresupuestosecre) { return; }
            inViewpresupuestosecre = true;
            return new Chart(ctx, {
                type: 'line',
                data: {

                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre','Noviembre','Diciembre'],
                    datasets: [
                        {
                            label: 'Ingresos',
                            tension: 0.1,
                            fill: false,
                            data: [1569072, 1527867, 2265739, 2883493, 2196578, 3737724, 2515143, 2367624, 3382104, 5081416, 3149286, 4454402],
                            fill: true,
                            backgroundColor: ['rgba(0, 162, 127, 0.2)'],


                            borderWidth: 1,
                            borderColor: ['rgba(0, 162, 127, 1)',
                                
                            ],

                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' }, callback: function(value) {
                            return `$ ${value}`;
                        } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    plugins: {
                        datalabels: {
                            anchor: 'end', // remove this line to get label in middle of the bar

                            formatter: (val) => (`${val}%`),
                            labels: {
                                value: {
                                    color: 'blue'
                                }
                            }

                        },
                        /* acad */
                        title: {
                            display: true,
                            text: 'Ingresos de estudios juridicos  por mes',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewpresupuestosecre = false;
        }
    }
}
$(window).scroll(function () {

    animaringresojuridico();

});

$(window).load(function () {


    animaringresojuridico();

});


var chartrecursossecre = {}
var inViewrecursossecre = false;

function animarrecursossecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "recursossecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartrecursossecre[idElement]) { continue }
            chartrecursossecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewrecursossecre) { return; }
            inViewrecursossecre = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['C.Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente', 'Desarrollo Social', 'Economia', 'Org. Descentralizados', 'Part. No programaticas','Proy. Nac. y Prov.'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [246764767, 260267405, 842529961, 573830658, 1361674988, 798683788, 439680049, 770783926, 361765624, 93826588],
                            fill: true,
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],
                            borderWidth: 1,
                            borderColor: [
                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Ingresos en 2022 (en millones $ )',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewrecursossecre = false;
        }
    }
}
$(window).scroll(function () {

    animarrecursossecre();

});

$(window).load(function () {


    animarrecursossecre();

});


var chartpersonalsecre = {}
var inViewppersonalsecre = false;

function animarpersonalsecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "personalsecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpersonalsecre[idElement]) { continue }
            chartpersonalsecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewppersonalsecre) { return; }
            inViewppersonalsecre = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['C.Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente', 'Desarrollo Social', 'Economia', 'Org. Descentralizados'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [38, 33, 172, 46, 275, 168, 93, 20],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [

                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Empleados por secretaría',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarpersonalsecre();

});

$(window).load(function () {


    animarpersonalsecre();

});
















var chartsayudas = {}
var inViewayudas = false;






function animarAyuda() {
    for (var i = 0; i < 1; i++) {
        var idElement = "ayudaseconomicas";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsayudas[idElement]) { continue }
            chartsayudas[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewayudas) { return; }
            inViewayudas = true;
            return myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    /* labels: ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], */
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                    datasets: [
                        {
                            label: 'Alquiler',
                            tension: 0.2,
                            fill: false,

                            data: [475000, 374500, 454000, 710500, 702000, 816000],
                            borderColor: [

                                'rgba(105, 190, 190, 1)'
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Enfermedad',
                            tension: 0.2,
                            fill: false,

                            data: [76000, 64500, 85000, 112000, 201500, 164500],
                            borderColor: [

                                'rgba(71, 123, 168, 1)'
                            ],
                            backgroundColor: [

                                'rgba(71, 123, 168, 0.2)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Hogar',
                            tension: 0.2,
                            fill: false,
                            borderWidth: 1,
                            data: [655600, 562200, 557300, 1881890, 1897600, 2017000],
                            borderColor: [

                                'rgba(215, 90, 218, 1)'
                            ],
                            backgroundColor: [

                                'rgba(35, 145, 200, 0.2)'
                            ],
                        },
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        align: 'middle',
                        labels: { font: { family: 'Raleway' } },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'Raleway'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Subsidios a personas por concepto ($)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });

        } else {
            inViewayudas = false;
        }
    }
}

$(window).scroll(function () {

    animarAyuda();

});

$(window).load(function () {


    animarAyuda();

});







var chartsAmbiente = {}
var InViewAmbiente = false;




function animarAmbiente() {
    for (var i = 0; i < 1; i++) {
        var idElement = "materialesAmbiente";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsAmbiente[idElement]) { continue }
            chartsAmbiente[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewAmbiente) { return; }
            InViewAmbiente = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Carton y Papeles', 'Plastico', 'Vidrio', 'Metales', 'Chatarra'],
                    datasets: [
                        {
                            data: [86577, 33506, 106486, 1612, 54253],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        legend: false,
                        title: {
                            display: true,
                            text: 'Material recuperado (kgs.)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });

        } else {
            InViewAmbiente = false;
        }
    }
}

$(window).scroll(function () {

    animarAmbiente();

});

$(window).load(function () {


    animarAmbiente();

});


var chartsGobierno = {}
var InViewGobierno = false;

function animarGobierno() {
    for (var i = 0; i < 1; i++) {
        var idElement = "inspeccionesGobierno";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsGobierno[idElement]) { continue }
            chartsGobierno[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewGobierno) { return; }
            InViewGobierno = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                    datasets: [

                        {
                            label: 'Radar',
                            data: [124, 62, 52, 124, 65, 110],
                            backgroundColor: 'rgba(71, 123, 168, 0.2)',
                            borderColor:'rgba(71, 123, 168, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Domo',
                            data: [5, 0, 31, 0, 0, 0],
                            backgroundColor: 'rgba(105, 190, 190, 0.2)',
                            borderColor:'rgba(105, 190, 190, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Fotomultas',
                            data: [349, 385, 312, 393, 231, 315],
                            backgroundColor: 'rgba(215, 90, 218, 0.2)',
                            borderColor: 'rgba(215, 90, 218, 1)',
                            borderWidth: 1
                        },
                        

                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                        title: {
                            display: true,
                            text: 'Infracciones labradas por medio',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    }
                }
            });
        } else {
            InViewGobierno = false;
        }
    }
}

$(window).scroll(function () {

    animarGobierno();

});

$(window).load(function () {


    animarGobierno();

});
/* clasificacion economia */
var chartsclasificacion = {}
var InViewclasificacion = false;

function animarclasificacion() {
    for (var i = 0; i < 1; i++) {
        var idElement = "clasificacion";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsclasificacion[idElement]) { continue }
            chartsclasificacion[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewclasificacion) { return; }
            InViewclasificacion= true;


            return new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Productivos', 'Servicios generales', 'Comercio'],
                    datasets: [

                        {
                            data: [53, 18, 29],
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(71, 123, 168, 1)',
                                    'rgba(105, 190, 190, 1)',
                                    'rgba(215, 90, 218, 1)',
                                    ],
                            borderWidth: 1
                        },


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {            
                        title: {
                            display: true,
                            text: 'Clasificación por sectores (Porcentaje)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                            legend: {
                                display: true,
                                position: 'right',
                                align: 'middle',
                                labels: { font: { family: 'Raleway' } }
                            }
                        },

                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } },
                        },

                        scales: {
                            xAxes: [{
                                grid: {
                                    display: false,
                                },
                            }]
                        }
                    }
                }
            });

        } else {
            InViewclasificacion = false;
        }
    }
}

$(window).scroll(function () {

    animarclasificacion();

});

$(window).load(function () {


    animarclasificacion();

});

/*  */
/* obras nuevas */
var chartsobrasnuevas = {}
var InViewobrasnuevas = false;

function animarobrasnuevas() {
    for (var i = 0; i < 1; i++) {
        var idElement = "obrasnuevas";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsobrasnuevas[idElement]) { continue }
            chartsobrasnuevas[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewobrasnuevas) { return; }
            InViewobrasnuevas = true;

            return new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Comercios', 'Edificios de Educación y Sanidad', 'Edificios Particularizados', 'Edificios de Educación y Sanidad', 'Industria', 'Oficinas','Taller Depósito Tinglados','Viviendas Multifamiliares','Viviendas Unifamiliares'],
                    datasets: [

                        {
                            label: 'M2 Cubiertos',
                            data: [1864, 166, 6269, 166, 150, 1771, 1201, 2295, 28484],
                            backgroundColor: 'rgba(71, 123, 168, 0.2)',
                            borderColor:'rgba(71, 123, 168, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'M2 Semicubiertos',
                            data: [90, 4, 2136, 4, 0, 172, 48, 721, 6832],
                            backgroundColor: 'rgba(105, 190, 190, 0.2)',
                            borderColor:'rgba(105, 190, 190, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                        title: {
                            display: true,
                            text: 'Obras nuevas aprobadas',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: false
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: false,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    }
                }
            });
        } else {
            InViewobrasnuevas = false;
        }
    }
}

$(window).scroll(function () {

    animarobrasnuevas();

});

$(window).load(function () {


    animarobrasnuevas();

});
/* fin obras nuevas */

/* obras ampliacion */
var chartsobrasampliacion = {}
var InViewobrasampliacion = false;

function animarobrasampliacion() {
    for (var i = 0; i < 1; i++) {
        var idElement = "obrasampliacion";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsobrasampliacion[idElement]) { continue }
            chartsobrasampliacion[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewobrasampliacion) { return; }
            InViewobrasampliacion = true;

            return new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Comercios', 'consultorios,ctro de salud', 'Edificios de Culto y Cultura', 'Edificios de Educacion y Sanidad', 'Edificios de Esparcimiento y Recreación', 'Industria','Taller Depósito Tinglados','Viviendas Multifamiliares','Viviendas Unifamiliares'],
                    datasets: [

                        {
                            label: 'M2 Cubiertos',
                            data: [4394,915,145,50,1257,207,2733,417,12608],
                            backgroundColor: 'rgba(71, 123, 168, 0.2)',
                            borderColor:'rgba(71, 123, 168, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'M2 Semicubiertos',
                            data: [166, 3, 9, 0, 0, 0, 1421, 215, 3556],
                            backgroundColor: 'rgba(105, 190, 190, 0.2)',
                            borderColor:'rgba(105, 190, 190, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                        title: {
                            display: true,
                            text: 'Ampliación de obras aprobadas',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: false
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: false,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    }
                }
            });
        } else {
            InViewobrasampliacion = false;
        }
    }
}

$(window).scroll(function () {

    animarobrasampliacion();

});

$(window).load(function () {


    animarobrasampliacion();

});
/* fin obras ampliacion */

var chartsIntendencia = {}
var InViewIntendencia = false;

function animarIntendencia() {
    for (var i = 0; i < 1; i++) {
        var idElement = "legalesIntendencia";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsIntendencia[idElement]) { continue }
            chartsIntendencia[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewIntendencia) { return; }
            InViewIntendencia = true;


            return new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Resoluciones', 'Disposiciones', 'Proyectos de ordenanzas', 'Ordenanzas Promulgadas'],
                    datasets: [

                        {
                            data: [3035, 122, 52, 57],
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(153, 070, 135,0.2)',
                                'rgba(240, 150, 145,0.2)',
                                'rgba(35, 145, 200,0.2)',],
                                borderColor: [
                                    'rgba(71, 123, 168, 1)',
                                    'rgba(105, 190, 190, 1)',
                                    'rgba(215, 90, 218, 1)',
                                    'rgba(153, 070, 135,1)',
                                    'rgba(240, 150, 145,1)',
                                    'rgba(35, 145, 200,1)',],
                            borderWidth: 1
                        },


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Actividades de Asesoría Legal',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                            legend: {
                                display: true,
                                position: 'right',
                                align: 'middle',
                                labels: { font: { family: 'Raleway' } }
                            }
                        },

                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } },
                        },

                        scales: {
                            xAxes: [{
                                grid: {
                                    display: false,
                                },
                            }]
                        }
                    }
                }
            });

        } else {
            InViewIntendencia = false;
        }
    }
}

$(window).scroll(function () {

    animarIntendencia();

});

$(window).load(function () {


    animarIntendencia();

});

var chartscordones = {}
var inViewcordones = false;

function animarcordones() {
    for (var i = 0; i < 1; i++) {
        var idElement = "cordones";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartscordones[idElement]) { continue }
            chartscordones[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewcordones) { return; }
            inViewcordones = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Corpico', 'Velonet', 'Telecom', 'Telefonica'],
                    datasets: [
                        {
                            data: [259, 120, 128, 134],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Inspecciones de obra (cant. notificaciones)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewayudas = false;
        }
    }
}
$(window).scroll(function () {

    animarcordones();

});

$(window).load(function () {


    animarcordones();

});

/* suelos */
var chartssuelos = {}
var inViewsuelos = false;
function animarsuelos() {
    for (var i = 0; i < 1; i++) {
        var idElement = "suelos";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartssuelos[idElement]) { continue }
            chartssuelos[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewsuelos) { return; }
            inViewsuelos = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    datasets: [
                        {
                            data: [44, 68, 50, 30],
                            borderColor: [
                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(35, 145, 200, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                
                            ],
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.2',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Expedientes formulario: Uso de Suelo (cant. ingresada)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewayudas = false;
        }
    }
}
$(window).scroll(function () {

    animarsuelos();

});

$(window).load(function () {


    animarsuelos();

});
/* fin suelos */
/* eventos */
var chartseventos = {}
var inVieweventos = false;
function animareventos() {
    for (var i = 0; i < 1; i++) {
        var idElement = "eventos";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartseventos[idElement]) { continue }
            chartseventos[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inVieweventos) { return; }
            inVieweventos = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    datasets: [
                        {
                            data: [1, 12, 13, 10, 15, 13, 11, 8],
                            borderColor: [
                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(35, 145, 200, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                
                            ],
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.2',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Eventos durante el año',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewayudas = false;
        }
    }
}
$(window).scroll(function () {

    animareventos();

});

$(window).load(function () {


    animareventos();

});
/* fin suelos */
/* monto total creditos */
var chartseconomiacreditos = {}
var inVieweconomiacreditos = false;

function animareconomiacreditos() {
    for (var i = 0; i < 1; i++) {
        var idElement = "economiacreditos";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartseconomiacreditos[idElement]) { continue }
            chartseconomiacreditos[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inVieweconomiacreditos) { return; }
            inVieweconomiacreditos = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Ley 2461','Línea Municipal', 'Línea 2870','Galpón PYM'],
                    datasets: [
                        {
                            data: [18000000, 22200000,5600000,3200000],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' }, callback: function(value) {
                            return `$ ${value}`;
                        } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Monto total créditos',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inVieweconomiacreditos = false;
        }
    }
}
$(window).scroll(function () {

    animareconomiacreditos();

});

$(window).load(function () {


    animareconomiacreditos();

});
/* fin monto total creditos */

/* direccion de comercio */
var chartsdircomercio = {}
var inViewdircomercio = false;

function animardircomercio() {
    for (var i = 0; i < 1; i++) {
        var idElement = "dircomercio";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsdircomercio[idElement]) { continue }
            chartsdircomercio[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewdircomercio) { return; }
            inViewdircomercio = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Inspecciones','Altas comerciales','Bajas comerciales', 'Bajas de oficio'],
                    datasets: [
                        {
                            data: [2100, 198, 180, 69],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Dirección de comercio',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewdircomercio = false;
        }
    }
}
$(window).scroll(function () {

    animardircomercio();

});

$(window).load(function () {


    animardircomercio();

});
/* fin direccion de comercio */

/* cursos */
var chartcursos  = {}
var inViewcursos = false;

function animarcursos() {
    for (var i = 0; i < 1; i++) {
        var idElement = "cursos";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartcursos[idElement]) { continue }
            chartcursos[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewcursos) { return; }
            inViewcursos = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Circuito cerrado de TV','Marketing digital', 'Excel','Robótica inicial','Robótica avanzada','Diagnostico del emprendimiento'],
                    datasets: [
                        {
                            data: [28, 186, 114, 47, 7, 44],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                                'rgba(35, 135, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                                'rgba(35, 135, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Cursos: Oficios tecnologicos',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewcursos = false;
        }
    }
}
$(window).scroll(function () {

    animarcursos();

});

$(window).load(function () {


    animarcursos();

});
/* fin cursos */

var chartsCreditosSector = {}
var inViewCreditosSector = false;

function animarCreditosSector() {
    for (var i = 0; i < 1; i++) {
        var idElement = "CreditosSector";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsCreditosSector[idElement]) { continue }
            chartsCreditosSector[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewCreditosSector) { return; }
            inViewCreditosSector = true;
            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'bar',
                data: {

                    labels: ['Ley 2461','Linea Municipal','Línea 2870', 'Galpón PYM'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [60, 76, 7, 2],
                            fill: true,
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Total créditos por Sector',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewCreditosSector = false;
        }
    }
}
$(window).scroll(function () {

    animarCreditosSector();

});

$(window).load(function () {


    animarCreditosSector();

});


var chartambientezoo = {}
var inViewambientezoo = false;

function animarambientezoo() {
    for (var i = 0; i < 1; i++) {
        var idElement = "ambientezoo";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartambientezoo[idElement]) { continue }
            chartambientezoo[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewambientezoo) { return; }
            inViewambientezoo = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Castraciones ', 'Vacunaciones '],
                    datasets: [
                        {
                            data: [ 3772, 7510],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Actividades de zoonosis',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inVieweconomiacreditos = false;
        }
    }
}
$(window).scroll(function () {

    animarambientezoo();

});

$(window).load(function () {


    animarambientezoo();

});



var chartplanifobras = {}
var inViewplanifobras = false;

function animarplanifobras() {
    for (var i = 0; i < 1; i++) {
        var idElement = "planifobras";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartplanifobras[idElement]) { continue }
            chartplanifobras[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewplanifobras) { return; }
            inViewplanifobras = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Conexión de gas natural', 'Conexión de cloacas', 'Conexión de agua potable','Conexión  de fibra óptica Banco Macro'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [135, 61, 41,1,],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)', 'rgba(105, 190, 190, 0.2)', 'rgba(215, 90, 218, 0.2)', 'rgba(210, 80, 218, 0.2)',



                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [

                                'rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 1)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Permisos de trabajo en via pública',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarplanifobras();

});

$(window).load(function () {


    animarplanifobras();

});



var chartmicro = {}
var inviewmicro = false;

function animarmicro() {
    for (var i = 0; i < 1; i++) {
        var idElement = "desarrollomicro";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartmicro[idElement]) { continue }
            chartmicro[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inviewmicro) { return; }
            inviewmicro = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Entrevistas', 'Evaluaciones', 'Seguimiento'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [360, 60, 171],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)', 'rgba(105, 190, 190, 0.2)', 'rgba(215, 90, 218, 0.2)',



                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [
                                'rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 1)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Actividades de microcréditos',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarmicro();

});

$(window).load(function () {


    animarmicro();

});

var chartatraques = {}
var InViewatraques = false;

function animaratraques() {
    for (var i = 0; i < 1; i++) {
        var idElement = "atraques";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartatraques[idElement]) { continue }
            chartatraques[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewatraques) { return; }
            InViewatraques = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    /*labels: ['Jurisd. Comunal', 'Otras Jurisd.', 'Ant. Coparticipación', 'Rec. de capital', 'Aportes no reint.'],*/
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio'],
                    datasets: [
                        {
                            label: 'Larga distancia',
                            tension: 0.2,
                            fill: false,

                            data: [371, 379, 360, 313, 271, 70],

                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)'
                            ],

                        },
                        {
                            label: 'Corta y media distancia',
                            tension: 0.2,
                            fill: false,

                            data: [354, 351, 429, 365, 330, 166],

                            backgroundColor: [

                                'rgba(71, 123, 168, 0.2)'
                            ],
                            borderWidth: 1

                        }



                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        align: 'middle',
                        labels: { font: { family: 'Raleway' } },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'Raleway'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Atraques en Terminal de Ómnibus ',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });
        } else {
            InViewatraques = false;
        }
    }
}
$(window).scroll(function () {

    animaratraques();

});

$(window).load(function () {


    animaratraques();

});



var chartactcomercio = {}
var inViewactcomercio = false;

function animaractcomercio() {
    for (var i = 0; i < 1; i++) {
        var idElement = "actcomercio";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartactcomercio[idElement]) { continue }
            chartactcomercio[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewactcomercio) { return; }
            inViewactcomercio = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Bajas comerciales', 'Altas comerciales', 'Lib. Sanitarias nuevas', 'Renovaciones'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [46, 29, 354, 1018],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)', 'rgba(105, 190, 190, 0.2)', 'rgba(105, 170, 180, 0.2)', 'rgba(215, 90, 218, 0.2)',



                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [

                                'rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(105, 170, 180, 1)', 'rgba(215, 90, 218, 1',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Actividades Dirección de Comercio',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewactcomercio = false;
        }
    }
}
$(window).scroll(function () {

    animaractcomercio();

});

$(window).load(function () {


    animaractcomercio();

});