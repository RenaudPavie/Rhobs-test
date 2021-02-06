window.addEventListener('load', () => {
    fetch('../data.json-1.txt')
    .then(response => response.json())
    .then(data => {
        const menData = [];
        const womenData = [];

        data.forEach(salarie => {
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
                    return e.age > min && e.age < max;
                });
        }

        console.log(filtreAge(menData,18,25).length)
        console.log(filtreAge(womenData,18,25).length)



        var ctx = document.getElementById('myChart').getContext('2d');
        var horizontalBarChartData = {
            
            labels: ['65+','60-65','55-60','50-55','45-50','40-45','35-40','30-35','25-30','18-25'],
            datasets: [
            {
                label: 'Hommes',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [
                    filtreAge(menData,65).length,
                    filtreAge(menData,60,65).length,
                    filtreAge(menData,55,60).length,
                    filtreAge(menData,50,55).length,
                    filtreAge(menData,45,50).length,
                    filtreAge(menData,40,45).length,
                    filtreAge(menData,35,40).length,
                    filtreAge(menData,30,35).length,
                    filtreAge(menData,25,30).length,
                    filtreAge(menData,18,25).length,
                ]
            }, 
            {
                label: 'Femmes',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [
                    filtreAge(womenData,65).length,
                    filtreAge(womenData,60,65).length,
                    filtreAge(womenData,55,60).length,
                    filtreAge(womenData,50,55).length,
                    filtreAge(womenData,45,50).length,
                    filtreAge(womenData,40,45).length,
                    filtreAge(womenData,35,40).length,
                    filtreAge(womenData,30,35).length,
                    filtreAge(womenData,25,30).length,
                    filtreAge(womenData,18,25).length,
                ]
            },
        ]
        
        };

        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: horizontalBarChartData,
            options: {
                responsive:true,
                title: {
                    display:true,
                    text:"Pyramide des âges de l'entreprise Factice SAS",
                },
                legend: {
                    position:'right'
                },
                scales: {
                    yAxes: [{
                        ticks :{
                            beginAtZero:true
                        }
                    }],
                    xAxes:[{
                        beginAtZero:true,
                        min:0,
                        max:200
                    }]
                }
            }
            });
    }); 
})