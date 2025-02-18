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
                plugins: [ChartDataLabels],
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
                        /* porcentaje */
                        datalabels: {
                            display: 'auto',
                            formatter: function (value) {
                              return  Math.round((value*10))/10 + '%';
                            },
                            color: 'black',
                            font: {
                              family: 'Raleway'
                            }
                          },
                          /* fin porcentaje */

                        title: {
                            display: true,
                            text: 'Clasificación de intimaciones enviadas',
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
/* fin mantenimiento mensual */

/* teoricos */
var chartsteoricos = {}
var inViewteoricos = false;

function animarteoricos() {
    for (var i = 0; i < 1; i++) {
        var idElement = "teoricos";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsteoricos[idElement]) { continue }
            chartsteoricos[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewteoricos) { return; }
            inViewteoricos = true;
            return new Chart(ctx, {
                type: 'line',
                data: {

                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre','Noviembre','Diciembre'],
                    datasets: [
                        {
                            label: 'evaluaciones',
                            tension: 0.1,
                            fill: false,
                            data: [243, 201, 286, 198, 206, 235, 281, 262, 301, 251, 231, 121],
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
                            text: 'Departamento de educación para la prevención',
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
            inViewteoricos = false;
        }
    }
}
$(window).scroll(function () {

    animarteoricos();

});

$(window).load(function () {


    animarteoricos();

});
/* fin teoricos */

/* licencias y turnos */
var chartslicenciasyturnos = {}
var inViewlicenciasyturnos = false;

function animarlicenciasyturnos() {
    for (var i = 0; i < 1; i++) {
        var idElement = "licenciasyturnos";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartslicenciasyturnos[idElement]) { continue }
            chartslicenciasyturnos[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewlicenciasyturnos) { return; }
            inViewlicenciasyturnos = true;
            return new Chart(ctx, {
                type: 'line',
                data: {

                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre','Noviembre','Diciembre'],
                    datasets: [
                        {
                            label: 'Licencias y Turnos',
                            tension: 0.1,
                            fill: false,
                            data: [1003, 955, 981, 731, 671, 758, 871, 898, 916, 959, 999, 618],
                            fill: true,
                            backgroundColor: ['rgba(215, 90, 218, 0.2)'],

                            
                            borderWidth: 1,
                            borderColor: ['rgba(215, 90, 218, 1)',
                                
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
                            text: 'Licencias y turnos otorgados en el año 2022',
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
            inViewlicenciasyturnos = false;
        }
    }
}
$(window).scroll(function () {

    animarlicenciasyturnos();

});

$(window).load(function () {


    animarlicenciasyturnos();

});
/* fin licencias y turnos */

/* localidades vecinas*/
var chartsvecinas = {}
var InViewvecinas = false;

function animarvecinas() {
    for (var i = 0; i < 1; i++) {
        var idElement = "vecinas";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsvecinas[idElement]) { continue }
            chartsvecinas[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewvecinas) { return; }
            InViewvecinas = true;


            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'doughnut',
                data: {
                    labels: ['Agustoni', 'Metileo', 'Speluzzi','Vértiz', 'Dorila'],
                    datasets: [

                        {
                            data: [12.26, 17.6, 23.2, 22.4, 24.53],
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(124, 212, 188, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(71, 123, 168, 1)',
                                    'rgba(105, 190, 190, 1)',
                                    'rgba(215, 90, 218, 1)',
                                    'rgba(124, 212, 188, 1)',
                                    ],
                            borderWidth: 1
                        },


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {    
                        /* porcentaje */
                        datalabels: {
                            display: 'auto',
                            formatter: function (value) {
                              return  Math.round((value*10))/10 + '%';
                            },
                            color: 'black',
                            font: {
                              family: 'Raleway'
                            }
                          },
                          /* fin porcentaje */        
                        title: {
                            display: true,
                            text: 'Licencias emitidas a localidades vecinas ',
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
            InViewvecinas = false;
        }
    }
}

$(window).scroll(function () {

    animarvecinas();

});

$(window).load(function () {


    animarvecinas();

});
/* fin localidades vecinas  */


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

/* fin ingreso juridico */

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
                        y: { ticks: { font: { family: 'Raleway' }, callback: function(value) {
                            return `$ ${value}`; } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Ingresos en 2022',
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

/* interese expresados*/
var chartsinteresexpresado = {}
var InViewinteresexpresado = false;

function animarinteresexpresado() {
    for (var i = 0; i < 1; i++) {
        var idElement = "interesexpresado";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsinteresexpresado[idElement]) { continue }
            chartsinteresexpresado[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewinteresexpresado) { return; }
            InViewinteresexpresado = true;


            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'pie',
                data: {
                    labels: ['Otros', 'Cuidado infancias', 'Textiles y similares','Cuidado de pers. Mayores'],
                    datasets: [

                        {
                            data: [12.1, 35, 27.9, 25],
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.3)',
                                'rgba(105, 190, 190, 0.3)',
                                'rgba(215, 90, 218, 0.3)',
                                'rgba(227, 221, 138, 0.3)',
                                ],
                                borderColor: [
                                    'rgba(71, 123, 168, 1)',
                                    'rgba(105, 190, 190, 1)',
                                    'rgba(215, 90, 218, 1)',
                                    'rgba(227, 221, 138, 1)',
                                    ],
                            borderWidth: 1
                        },


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {    
                        /* porcentaje */
                        datalabels: {
                            display: 'auto',
                            formatter: function (value) {
                              return  Math.round((value*10))/10 + '%';
                            },
                            color: 'black',
                            font: {
                              family: 'Raleway'
                            }
                          },
                          /* fin porcentaje */        
                        title: {
                            display: true,
                            text: 'Centro Municipal de Formación Laboral (intereses de capacitación)',
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
            InViewinteresexpresado = false;
        }
    }
}

$(window).scroll(function () {

    animarinteresexpresado();

});

$(window).load(function () {


    animarinteresexpresado();

});
/* fin interese expresados */



/* oficina de empleo*/
var chartsoficinadeempleo = {}
var InViewoficinadeempleo = false;

function animaroficinadeempleo() {
    for (var i = 0; i < 1; i++) {
        var idElement = "oficinadeempleo";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsoficinadeempleo[idElement]) { continue }
            chartsoficinadeempleo[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewoficinadeempleo) { return; }
            InViewoficinadeempleo = true;


            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'pie',
                data: {
                    labels: [ 'Hombres', 'Mujeres'],
                    datasets: [

                        {
                            data: [42, 58],
                            backgroundColor: [
                                'rgba(0, 69, 97, 0.3)',
                                'rgba(88, 145, 173, 0.3)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(124, 212, 188, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(0, 69, 97, 1)',
                                    'rgba(88, 145, 173, 1)',
                                    'rgba(215, 90, 218, 1)',
                                    'rgba(124, 212, 188, 1)',
                                    ],
                            borderWidth: 1
                        },


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {    
                        /* porcentaje */
                        datalabels: {
                            display: 'auto',
                            formatter: function (value) {
                              return  Math.round((value*10))/10 + '%';
                            },
                            color: 'black',
                            font: {
                              family: 'Raleway'
                            }
                          },
                          /* fin porcentaje */        
                        title: {
                            display: true,
                            text: 'Personas que solicitaron los servicios de la Oficina de Empleo',
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
            InViewoficinadeempleo = false;
        }
    }
}

$(window).scroll(function () {

    animaroficinadeempleo();

});

$(window).load(function () {


    animaroficinadeempleo();

});
/* fin oficina de empleo */



/* pedidos */
var chartspedidos = {}
var InViewpedidos = false;

function animarpedidos() {
    for (var i = 0; i < 1; i++) {
        var idElement = "pedidos";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartspedidos[idElement]) { continue }
            chartspedidos[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewpedidos) { return; }
            InViewpedidos = true;


            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'doughnut',
                data: {
                    labels: [ 'Búsqueda', 'Pedidos', 'Postulados', 'Incersiones'],
                    datasets: [

                        {
                            data: [56.6, 14.8,25.6,3.1],
                            backgroundColor: [
                                'rgba(88, 145, 173, 0.3)',
                                'rgba(0, 69, 97, 0.3)',                                
                                'rgba(255, 111, 49, 0.3)',
                                'rgba(78, 167, 56, 0.3)',
                                ],
                                borderColor: [
                                    'rgba(88, 145, 173, 1)',
                                    'rgba(0, 69, 97, 1)',                                    
                                    'rgba(255, 111, 49, 1)',
                                    'rgba(78, 167, 56, 1)',
                                    ],
                            borderWidth: 1
                        },


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {    
                        /* porcentaje */
                        datalabels: {
                            display: 'auto',
                            formatter: function (value) {
                              return  Math.round((value*10))/10 + '%';
                            },
                            color: 'black',
                            font: {
                              family: 'Raleway'
                            }
                          },
                          /* fin porcentaje */        
                        title: {
                            display: true,
                            text: 'Pedidos presentados a la oficina de empleo (públicos y privados)',
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
            InViewpedidos = false;
        }
    }
}

$(window).scroll(function () {

    animarpedidos();

});

$(window).load(function () {


    animarpedidos();

});
/* fin pedidos */









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
                type: 'line',
                data: {
                    /* labels: ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], */
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
                    datasets: [
                        {
                            label: 'Alquiler',
                            tension: 0.2,
                            fill: false,

                            data: [208000, 758500, 916500, 859000, 841500, 1037000, 1135000, 888500, 1175500, 989000, 905500],
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

                            data: [57000, 106000, 238500, 149000, 192000, 222000, 227000, 204000, 269000, 270500, 291000],
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
                            data: [1017000, 789500, 1328500, 1052600, 1054000, 1419000, 1458000, 875200, 1190000, 921000, 961500],
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
                            stacked: false
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' }, callback: function(value) {
                                    return `$ ${value}`; },
                                maxTicksLimit: 5,
                            },
                            stacked: false,
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
                            text: 'Subsidios a personas por concepto',
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
                                 callback: function(value) {
                                    return ` ${value} kg.`;
                            } } ,
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
                type: 'line',
                data: {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
                    datasets: [

                        {
                            label: 'Radar',
                            data: [124, 62, 52, 124, 65, 110,124, 63, 1, 9, 0, 10],
                            backgroundColor: 'rgba(71, 123, 168, 0.2)',
                            borderColor:'rgba(71, 123, 168, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Domo',
                            data: [5, 0, 31, 0, 0, 0, 3, 20, 13, 22, 25, 3],
                            backgroundColor: 'rgba(105, 190, 190, 0.2)',
                            borderColor:'rgba(105, 190, 190, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Fotomultas',
                            data: [349, 385, 312, 393, 231, 315, 95, 99, 17, 51, 129, 51],
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
                            stacked: false,
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
                plugins: [ChartDataLabels],/* porcentaje */
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
                        /* porcentaje */
                        datalabels: {
                            display: 'auto',
                            formatter: function (value) {
                              return  Math.round((value*10))/10 + '%';
                            },
                            color: 'black',
                            font: {
                              family: 'Raleway'
                            }
                          },
                          /* fin porcentaje */
                        title: {
                            display: true,
                            text: 'Clasificación por sectores ',
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
/* fin clasificacion economia  */

/* infraestructura tecnologica*/
var chartsinfraestructura = {}
var InViewinfraestructura = false;

function animarinfraestructura() {
    for (var i = 0; i < 1; i++) {
        var idElement = "infraestructura";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsinfraestructura[idElement]) { continue }
            chartsinfraestructura[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewinfraestructura) { return; }
            InViewinfraestructura= true;


            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'doughnut',
                data: {
                    labels: ['Impresoras ', 'Terminales NTComputing', 'Servidores','PC`s '],
                    datasets: [

                        {
                            data: [26, 7, 2, 65],
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(32, 65, 231, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(71, 123, 168, 1)',
                                    'rgba(105, 190, 190, 1)',
                                    'rgba(215, 90, 218, 1)',
                                    'rgba(32, 65, 231, 1)',
                                    ],
                            borderWidth: 1
                        },


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {          
                        /* porcentaje */
                        datalabels: {
                            display: 'auto',
                            formatter: function (value) {
                              return  Math.round((value*10))/10 + '%';
                            },
                            color: 'black',
                            font: {
                              family: 'Raleway'
                            }
                          },
                          /* fin porcentaje */  
                        title: {
                            display: true,
                            text: 'Infraestructura tecnológica',
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
            InViewinfraestructura = false;
        }
    }
}

$(window).scroll(function () {

    animarinfraestructura();

});

$(window).load(function () {


    animarinfraestructura();

});
/* fin infraestructrura tecnologica  */


/* desarrollo e implementacion 1*/
var chartsdesarrollo1 = {}
var InViewdesarrollo1 = false;

function animardesarrollo1() {
    for (var i = 0; i < 1; i++) {
        var idElement = "desarrollo1";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsdesarrollo1[idElement]) { continue }
            chartsdesarrollo1[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewdesarrollo1) { return; }
            InViewdesarrollo1= true;


            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'doughnut',
                data: {
                    labels: ['Mant. adaptativo, perfectivo y/o correctivo', 'Iniciados/continuados'],
                    datasets: [

                        {
                            data: [33, 67],
                            backgroundColor: [
                                'rgba(220, 60, 117, 0.3)',
                                'rgba(55, 96, 146, 0.3)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                
                                ],
                                borderColor: [
                                    'rgba(220, 60, 117, 1)',
                                    'rgba(55, 96, 146, 1)',
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
                        /* porcentaje */
                        datalabels: {
                            display: 'auto',
                            formatter: function (value) {
                              return  Math.round((value*10))/10 + '%';
                            },
                            color: 'black',
                            font: {
                              family: 'Raleway'
                            }
                          },
                          /* fin porcentaje */       
                        title: {
                            display: true,
                            text: 'Tipos de proyectos',
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
            InViewdesarrollo1 = false;
        }
    }
}

$(window).scroll(function () {

    animardesarrollo1();

});

$(window).load(function () {


    animardesarrollo1();

});
/* fin desarrollo e implementacion 1  */

/* desarrollo e implementacion 2*/
var chartsdesarrollo2 = {}
var InViewdesarrollo2 = false;

function animardesarrollo2() {
    for (var i = 0; i < 1; i++) {
        var idElement = "desarrollo2";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsdesarrollo1[idElement]) { continue }
            chartsdesarrollo1[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewdesarrollo2) { return; }
            InViewdesarrollo2 = true;


            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'doughnut',
                data: {
                    labels: ['Proyectos en proceso','Proyectos finalizados'],
                    datasets: [

                        {
                            data: [40, 27],
                            backgroundColor: [
                                'rgba(77, 249, 156, 0.3)',
                                'rgba(19, 84, 97, 0.3)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                
                                ],
                                borderColor: [
                                    'rgba(77, 249, 156, 1)',
                                    'rgba(19, 84, 97, 1)',
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
                        /* porcentaje */
                        datalabels: {
                            display: 'auto',
                            formatter: function (value) {
                              return  Math.round((value*10))/10 + '%';
                            },
                            color: 'black',
                            font: {
                              family: 'Raleway'
                            }
                          },
                          /* fin porcentaje */      
                        title: {
                            display: true,
                            text: 'Estado del proyecto',
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
            InViewdesarrollo2 = false;
        }
    }
}

$(window).scroll(function () {

    animardesarrollo2();

});

$(window).load(function () {


    animardesarrollo2();

});
/* fin desarrollo e implementacion 2  */

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

/* asesoria legal */
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
                plugins: [ChartDataLabels],
                type: 'doughnut',
                data: {
                    labels: ['Resoluciones', 'Disposiciones', 'Proyectos de ordenanzas', 'Ordenanzas Promulgadas'],
                    datasets: [

                        {
                            data: [6623, 248, 112, 152],
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
/* fin asesoria legal */
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
                plugins: [ChartDataLabels],
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
                plugins: [ChartDataLabels],
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
/* fin eventos */

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

/* Ceremonial */
var chartsceremonial = {}
var inViewceremonial = false;

function animarceremonial() {
    for (var i = 0; i < 1; i++) {
        var idElement = "ceremonial";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsceremonial[idElement]) { continue }
            chartsceremonial[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewceremonial) { return; }
            inViewceremonial = true;
            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'bar',
                data: {

                    labels: ['Actos y Actividades','Préstamos', 'Donaciones'],
                    datasets: [
                        {
                            data: [171, 18,37],
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
                            return ` ${value}`;
                        } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Ceremonial',
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
            inViewceremonial = false;
        }
    }
}
$(window).scroll(function () {

    animarceremonial();

});

$(window).load(function () {


    animarceremonial();

});
/* fin ceremonial */

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
                plugins: [ChartDataLabels],
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
                plugins: [ChartDataLabels],
                type: 'bar',
                data: {

                    labels: ['Circuito cerrado de TV','Marketing digital', 'Excel','Robótica inicial','Robótica avanzada','Diagnostico del emprendimiento','Programación web '],
                    datasets: [
                        {
                            data: [28, 186, 114, 47, 7, 44,89],
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
                plugins: [ChartDataLabels],
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
                plugins: [ChartDataLabels],
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