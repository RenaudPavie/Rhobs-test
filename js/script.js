window.addEventListener('load', () => {
    fetch('../data.json-1.txt')
    .then(response => response.json())
    .then(data => {
        const allData = [];
        const menData = [];
        const womenData = [];
    
        data.forEach(salarie => {
            allData.push(salarie);
    
            if(salarie.sex === "m") {
                // récupération de toutes les données concernant les hommes dans le tableau menData
                menData.push(salarie);
                
            } else if (salarie.sex === "f") {
                // récupération de toutes les données concernant les femmes dans le tableau womenData
                womenData.push(salarie)
            }
        });
    
    
        // Filtre par age : 
        // On déclare quel tableau on veut trier, on indique la valeur min et max,
        // puis la fonction nous ressort le nombre d'objet compris dans l'interval choisit
        const filtreAge = (arr,min,max) => {
                return arr.filter(e => {
                    return e.age >= min && e.age <= max;
                });
        }
    
        // Filtre par status :
        // On indique quel tableau on veut trier, ainsi que le status à trier
        // Puis la fonction retourne un tableau contenant toutes itérations correspondant au status
        const filtreStatusByAge = (arr,status,min,max) => {
            return arr.filter(e => {
                if(e.status === status) {
                    return e.age >= min && e.age <= max;
                }
            })
        }
    
        var ctx = document.getElementById('myChart').getContext('2d');
        const labels = ['65 et +','60-64','55-60','50-55','45-50','40-45','35-40','30-35','25-30','18-25'];
        var datasets = [
            {
                label: 'Hommes',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
    
                hoverBackgroundColor:'rgba(54, 162, 235, 1)',
                hoverBorderWidth:2,
                data: [
                    "-" + filtreAge(menData,65, 150).length,
                    "-" +filtreAge(menData,61,64).length,
                    "-" +filtreAge(menData,56,60).length,
                    "-" +filtreAge(menData,51,55).length,
                    "-" +filtreAge(menData,46,50).length,
                    "-" +filtreAge(menData,41,45).length,
                    "-" +filtreAge(menData,36,40).length,
                    "-" +filtreAge(menData,31,35).length,
                    "-" +filtreAge(menData,26,30).length,
                    "-" +filtreAge(menData,18,25).length,
                ]
            }, 
            {
                label: 'Hommes célibataires',
                backgroundColor: 'rgba(54, 162, 175, 0.2)',
                borderColor: 'rgba(54, 162, 175, 1)',
                borderWidth: 1,
                hoverBackgroundColor:'rgba(54, 162, 175, 1)',
                hoverBorderWidth:2,
                data: [
                    "-" + filtreStatusByAge(menData,'single',65,150).length,
                    "-" + filtreStatusByAge(menData,'single',61,64).length,
                    "-" + filtreStatusByAge(menData,'single',56,60).length,
                    "-" + filtreStatusByAge(menData,'single',51,55).length,
                    "-" + filtreStatusByAge(menData,'single',46,50).length,
                    "-" + filtreStatusByAge(menData,'single',41,45).length,
                    "-" + filtreStatusByAge(menData,'single',36,40).length,
                    "-" + filtreStatusByAge(menData,'single',31,35).length,
                    "-" + filtreStatusByAge(menData,'single',26,30).length,
                    "-" + filtreStatusByAge(menData,'single',18,25).length,
                ]
            }, 
            {
                label: 'Hommes mariés',
                status:'married',
                backgroundColor: 'rgba(54, 110, 235, 0.2)',
                borderColor: 'rgba(54, 142, 195, 1)',
                borderWidth: 1,
                hoverBackgroundColor:'rgba(54, 142, 195, 1)',
                hoverBorderWidth:2,
                data: [
                    "-" + filtreStatusByAge(menData,'married',65,150).length,
                    "-" + filtreStatusByAge(menData,'married',61,64).length,
                    "-" + filtreStatusByAge(menData,'married',56,60).length,
                    "-" + filtreStatusByAge(menData,'married',51,55).length,
                    "-" + filtreStatusByAge(menData,'married',46,50).length,
                    "-" + filtreStatusByAge(menData,'married',41,45).length,
                    "-" + filtreStatusByAge(menData,'married',36,40).length,
                    "-" + filtreStatusByAge(menData,'married',31,35).length,
                    "-" + filtreStatusByAge(menData,'married',26,30).length,
                    "-" + filtreStatusByAge(menData,'married',18,25).length,
                ]
            },
            {
                label: 'Hommes situation inconnu',
                status:'uknown',
                backgroundColor: 'rgba(20, 28, 44,0.2)',
                borderColor: 'rgba(20, 28, 44,1)',
                borderWidth:1,
                hoverBackgroundColor:'rgba(20, 28, 44,1)',
                hoverBorderWidth:2,
                data: [
                    "-" + filtreStatusByAge(menData,'uknown',65,150).length,
                    "-" + filtreStatusByAge(menData,'uknown',61,64).length,
                    "-" + filtreStatusByAge(menData,'uknown',56,60).length,
                    "-" + filtreStatusByAge(menData,'uknown',51,55).length,
                    "-" + filtreStatusByAge(menData,'uknown',46,50).length,
                    "-" + filtreStatusByAge(menData,'uknown',41,45).length,
                    "-" + filtreStatusByAge(menData,'uknown',36,40).length,
                    "-" + filtreStatusByAge(menData,'uknown',31,35).length,
                    "-" + filtreStatusByAge(menData,'uknown',26,30).length,
                    "-" + filtreStatusByAge(menData,'uknown',18,25).length,
                ]
            },
            {
                label: 'Femmes',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                hoverBackgroundColor:'rgba(255, 99, 132, 1)',
                hoverBorderWidth:2,
                data: [
                    filtreAge(womenData,65,150).length,
                    filtreAge(womenData,61,64).length,
                    filtreAge(womenData,56,60).length,
                    filtreAge(womenData,51,55).length,
                    filtreAge(womenData,46,50).length,
                    filtreAge(womenData,41,45).length,
                    filtreAge(womenData,36,40).length,
                    filtreAge(womenData,31,35).length,
                    filtreAge(womenData,26,30).length,
                    filtreAge(womenData,18,25).length,
                ]
            },
            {
                label: 'Femmes célibataires',
                status:'single',
                backgroundColor: 'rgba(232, 49, 119,0.2)',
                borderColor: 'rgba(232, 49, 119,1)',
                borderWidth: 1,
                hoverBackgroundColor:'rgba(232, 49, 119,1)',
                hoverBorderWidth:2,
                data: [
                    filtreStatusByAge(womenData,'single',65,150).length,
                    filtreStatusByAge(womenData,'single',61,64).length,
                    filtreStatusByAge(womenData,'single',56,60).length,
                    filtreStatusByAge(womenData,'single',51,55).length,
                    filtreStatusByAge(womenData,'single',46,50).length,
                    filtreStatusByAge(womenData,'single',41,45).length,
                    filtreStatusByAge(womenData,'single',36,40).length,
                    filtreStatusByAge(womenData,'single',31,35).length,
                    filtreStatusByAge(womenData,'single',26,30).length,
                    filtreStatusByAge(womenData,'single',18,25).length,
                ]
            },
            {
                label: 'Femmes mariées',
                status:'married',
                backgroundColor: 'rgba(211, 19, 5,0.2)',
                borderColor: 'rgba(211, 19, 5,1)',
                borderWidth: 1,
                hoverBackgroundColor:'rgba(211, 19, 5,1)',
                hoverBorderWidth:2,
                data: [
                    filtreStatusByAge(womenData,'married',65,150).length,
                    filtreStatusByAge(womenData,'married',61,64).length,
                    filtreStatusByAge(womenData,'married',56,60).length,
                    filtreStatusByAge(womenData,'married',51,55).length,
                    filtreStatusByAge(womenData,'married',46,50).length,
                    filtreStatusByAge(womenData,'married',41,45).length,
                    filtreStatusByAge(womenData,'married',36,40).length,
                    filtreStatusByAge(womenData,'married',31,35).length,
                    filtreStatusByAge(womenData,'married',26,30).length,
                    filtreStatusByAge(womenData,'married',18,25).length,
                ]
            },
            {
                label: 'Femmes situation inconnu',
                status:'uknown',
                backgroundColor: 'rgba(124, 35, 28, 0.2)',
                borderColor: 'rgba(124, 35, 28, 1)',
                borderWidth:1,
                hoverBackgroundColor:'rgba(124, 35, 28, 1)',
                hoverBorderWidth:2,
                data: [
                    filtreStatusByAge(womenData,'uknown',65,150).length,
                    filtreStatusByAge(womenData,'uknown',61,64).length,
                    filtreStatusByAge(womenData,'uknown',56,60).length,
                    filtreStatusByAge(womenData,'uknown',51,55).length,
                    filtreStatusByAge(womenData,'uknown',46,50).length,
                    filtreStatusByAge(womenData,'uknown',41,45).length,
                    filtreStatusByAge(womenData,'uknown',36,40).length,
                    filtreStatusByAge(womenData,'uknown',31,35).length,
                    filtreStatusByAge(womenData,'uknown',26,30).length,
                    filtreStatusByAge(womenData,'uknown',18,25).length,
                ]
            }
        ]
        const options = {
            responsive:true,
            title: {
                display:true,
                text:"Pyramide des âges de l'entreprise Factice SAS",
            },
            tooltips: {
                mode: 'index',
                titleAlign:'left',
                intersect: true,
            },
            legend: {
                display:true,
                position:'bottom'
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Nombre de salarié'
                    },
                    stacked:true,
                    ticks: {
                        beginAtZero: true,
                        min:-250,
                        max:250,
                        
                    }, 
                    gridLines: {
                        offset: false
                    },
                    
                }],
                yAxes: [{
                   
                    scaleLabel: {
                        display: true,
                        labelString: 'Ages des salariés'
                    },
                    // stacked:true,
                    ticks: {
                        beginAtZero: true,
                    }
                }],
            },
            
            legendCallback: function (chart) {
                console.log(chart.data);
                var text = [];
                text.push('<ul class="chartSections legend-wrapper"><h2>Légende</h2>  ');
                for (var i=0; i<chart.data.datasets.length; i++) {
                    var bg = chart.data.datasets[i].backgroundColor;
                    var border = chart.data.datasets[i].borderColor
                    text.push('<li class="legend-item" ><span class="legend" id="legend-' + i + '-item" style="background-color:'+ bg +';border:2px solid '+ border +'" "   onclick="updateDataset(event, ' +  i  + ')"></span><span class="legend-text">');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            }, 
            
            animation: {
                animateScale: true,
            },
        }
        
        var horizontalBarChartData = {
            labels: labels,
            datasets: datasets
        };
    
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: horizontalBarChartData,
            options: options
        });
        document.getElementById('chart-legends').innerHTML = myChart.generateLegend();

        updateDataset = (currentEl, index) => {
            console.log(index)

            // Update le graphique 
            // myChart.update();
          };
    });
});
    