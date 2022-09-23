let pieOptions = {
    chart: {
        height: 150,
        type: "radialBar",
    },
    series: [67, 84],
    plotOptions: {
        radialBar: {
            track: {
                background: 'transparent',
                dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    blur: 4,
                    opacity: 0.15
                }
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    color: "#ffffff",
                    fontSize: "1rem",
                    show: false
                },
                total: {
                    show: true,
                    label: 'TOTAL',
                    color: "#ffffff",
                }
            }
        }
    },
    fill: {
        colors: ["#56D7BF", "#ffffff"],
    },
    stroke: {
        lineCap: "round",
        width: -10,
    },
    labels: ['TEAM A', 'TEAM B']
};

let pieChart = new ApexCharts(document.querySelector("#pieChart"), pieOptions);
pieChart.render();

let areaOptions = {
    series: [{
        name: 'Income',
        data: [31, 40, 28, 51, 42]
    }, {
        name: 'Expenses',
        data: [11, 32, 45, 32, 34]
    }],
    grid: {
        show: false
    },
    chart: {
        toolbar: {
            show: false
        },
        height: 350, //470
        type: 'area',
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        labels: {
            useSeriesColors: true
        },
        markers: {
            width: 14,
            height: 0,
            radius: 12,
            customHTML: function() {
                return '<svg width="14" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.197 1.082a1 1 0 0 1 1.606 0l5.807 7.822a1 1 0 0 1-.803 1.596H1.192a1 1 0 0 1-.802-1.596l5.806-7.822Z" fill="#ffffff"/></svg>'
            },
            offsetY: -5
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    title: {
        text: 'Total Profit',
        align: 'left',
        offsetX: 10,
        style: {
            fontSize: '38px',
            fontWeight: '400',
            color: '#ffffff'
        },
    },
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    colors: ['#56D7BF', '#ffffff'],
    tooltip: {
        enabled: true,
        theme: "dark",
        followCursor: true,
        style: {
            fontSize: '12px',
            fontFamily: undefined
        },
        x: {
            show: true,
            format: 'dd MMM',
        },
        y: {
            title: {
                formatter: (seriesName) => seriesName,
            },
        },
        z: {
            formatter: undefined,
            title: 'Size: '
        },
    },
};

let areaChart = new ApexCharts(document.querySelector("#areaChart"), areaOptions);
areaChart.render();

