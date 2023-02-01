//Municipalidad chart porcentaje por sexo
const ctx = document.getElementById('municipalidad_sexo').getContext('2d');
const myChart = new Chart(ctx, {
  plugins: [ChartDataLabels],
    type: 'doughnut',
    data: {
        labels: ['Femenino', 'Masculino',],
        datasets: [{
            label: '# of Votes',
            data: [47, 53],
            backgroundColor: [
              'rgba(35, 145, 200, 0.2)',
          'rgba(153, 070, 135, 0.2)',
          'rgba(240, 150, 145, 0.2)',
          'rgba(71, 123, 168, 0.2)',
          'rgba(105, 190, 190, 0.2)',
          
          'rgba(190, 135, 180, 0.2)',
          'rgba(215, 90, 218, 0.2)',
          'rgba(55, 55, 55,0.2)',
          'rgba(235, 235, 225,0.2)'
        ],
        borderColor: [
          'rgba(35, 145, 200, 1)',
          'rgba(153, 070, 135, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)',
          'rgba(55, 55, 55,1)',
          'rgba(235, 235, 225,1)'
        ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: 'auto',
            formatter: function (value) {
              return Math.round(value) + '%';
            },
            color: 'black',
            font: {
               
             
              family: 'Raleway'
            }
          },
          title: {
            align: 'start',
            display: true,
            text: 'Empleados por género',
            font: {
              family: 'Titillium Web',
              size: 20,
            },
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          legend: {
            display: true,
            position: 'right',
            align: 'middle',
            labels: { font: { family: 'Raleway' } }
          }
        }
      }
    });

/* presupuesto por rubro */
var chartpresupuestorubro = {}
var inViewpresupuestorubro = false;

function animarpresupuestorubro() {
    for (var i = 0; i < 1; i++) {
        var idElement = "presupuesto_rubro";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpresupuestorubro[idElement]) { continue }
            chartpresupuestorubro[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewpresupuestorubro) { return; }
            inViewpresupuestorubro = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: ['Bienes de capital', 'Bienes de Consumo', 'Deuda Pública', 'Gastos en Personal', 'Préstamos', 'Programas especiales', 'Servicios no Personales', 'Trabajos Públicos', 'Transferencias Sociales'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [114801595, 431870579, 89432462, 2781244723, 64413609, 118764784, 1459983333, 448326525, 240970138],
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
                            text: 'Presupuesto por Rubro',
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
            inViewpresupuestorubro = false;
        }
    }
}
$(window).scroll(function () {

    animarpresupuestorubro();

});

$(window).load(function () {


    animarpresupuestorubro();

});

/*  */

const ctx3 = document.getElementById('municipalidad_rango_etario').getContext('2d');
const myChart3 = new Chart(ctx3, {
  plugins: [ChartDataLabels],
    type: 'doughnut',
    data: {
        labels: ['menos de 36 años','36 a 55 años', 'más de 56 años',],
        datasets: [{
            label: '# of Votes',
            data: [16,64,19],
            backgroundColor: [
              'rgba(71, 123, 168, 0.2)',
          'rgba(105, 190, 190, 0.2)',
          'rgba(35, 145, 200, 0.2)',
          'rgba(240, 150, 145, 0.2)',
          'rgba(55, 55, 55,0.2)',
          'rgba(235, 235, 225,0.2)',
          
          'rgba(153, 070, 135, 0.2)',
          'rgba(190, 135, 180, 0.2)',
          'rgba(215, 90, 218, 0.2)'
        ],
        borderColor: [
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          'rgba(35, 145, 200, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(55, 55, 55,1)',
          'rgba(235, 235, 225,1)',
          
          'rgba(153, 070, 135, 1)',
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)'
        ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: 'auto',
            formatter: function (value) {
              return Math.round(value) + '%';
            },
            color: 'black',
            font: {
               
             
              family: 'Raleway'
            }
          },
          title: {
            align: 'start',
            display: true,
            text: 'Empleados por rango etario',
            font: {
              family: 'Titillium Web',
              size: 20,
            },
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          legend: {
            display: true,
            position: 'right',
            align: 'middle',
            labels: { font: { family: 'Raleway' } }
          }
        }
      }
    });