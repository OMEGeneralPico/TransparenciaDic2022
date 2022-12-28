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

                    labels: ['C.Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente', 'Desarrollo Social', 'Economia', 'Org. Descentralizados', 'No programaticos'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [2.37, 2.59, 7.15, 4.85, 13.23, 7.17, 3.67, 3.63, 1.65],
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
                    labels: ['Recursos propios', 'Coparticipación', 'Rec. de capital', 'Aportes no reint.'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [1001.13, 952.63, 10.45, 58.26],
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

                    labels: ['Linea Municipal', '2870'],
                    datasets: [
                        {
                            data: [2988770, 1600000],
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
                            text: 'Monto total créditos por fecha ($)',
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

                    labels: ['Mujeres','Hombres','2870', 'Linea Municipal','Comercio', 'Produccion', 'Servicios'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [24, 19, 40, 3, 24, 7, 12],
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
                            text: 'Monto total créditos por Sector',
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