$(function () {
    if (document.getElementById('chart1')) {
        option1 = {
            tooltip: {
                trigger: 'item',
                formatter: 'KD {c}'
            },
            color: ['#5ab8bf', '#eea223'],
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '70%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        show: true,
                        position: 'center',
                        formatter: [
                            '{a|Nov}',
                            '{b|2020}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: 'black',
                                lineHeight: 40,
                                fontSize: 30,
                                fontWeight: 'bold',
                            },
                            b: {
                                color: 'black',
                                height: 30,
                                fontSize: 15,
                            },
                        },
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 30, name: 'Monthly Charges' },
                        { value: 8, name: 'Extras' },
                    ]
                }
            ]
        };
        echarts.init(document.getElementById('chart1')).setOption(option1);
    }

    if (document.getElementById('chart2')) {
        option2 = {
            tooltip: {
                trigger: 'item',
                formatter: 'KD {c}'
            },
            color: ['#5ab8bf', '#eea223'],
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '70%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        show: true,
                        position: 'center',
                        formatter: [
                            '{a|Oct}',
                            '{b|2020}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: 'black',
                                lineHeight: 40,
                                fontSize: 30,
                                fontWeight: 'bold',
                            },
                            b: {
                                color: 'black',
                                height: 30,
                                fontSize: 15,
                            },
                        },
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 30, name: 'Monthly Charges' },
                        { value: 20, name: 'Extras' },
                    ]
                }
            ]
        };
        echarts.init(document.getElementById('chart2')).setOption(option2);
    }

    if (document.getElementById('chart3')) {
        option3 = {
            tooltip: {
                trigger: 'item',
                formatter: 'KD {c}'
            },
            color: ['#d02b8a', '#5ab8bf', '#eea223'],
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '70%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        show: true,
                        position: 'center',
                        formatter: [
                            '{a|Sep}',
                            '{b|2020}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: 'black',
                                lineHeight: 40,
                                fontSize: 30,
                                fontWeight: 'bold',
                            },
                            b: {
                                color: 'black',
                                height: 30,
                                fontSize: 15,
                            },
                        },
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 52, name: 'Pending Charges' },
                        { value: 32, name: 'Monthly Charges' },
                        { value: 9, name: 'Extras' },
                    ]
                }
            ]
        };
        echarts.init(document.getElementById('chart3')).setOption(option3);
    }

    if (document.getElementById('chart4')) {
        option4 = {
            tooltip: {
                trigger: 'item',
                formatter: 'KD {c}'
            },
            color: ['#5ab8bf', '#eea223'],
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '70%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        show: true,
                        position: 'center',
                        formatter: [
                            '{a|Aug}',
                            '{b|2020}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: 'black',
                                lineHeight: 40,
                                fontSize: 30,
                                fontWeight: 'bold',
                            },
                            b: {
                                color: 'black',
                                height: 30,
                                fontSize: 15,
                            },
                        },
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 32, name: 'Monthly Charges' },
                        { value: 30, name: 'Extras' },
                    ]
                }
            ]
        };
        echarts.init(document.getElementById('chart4')).setOption(option4);
    }

    if (document.getElementById('chart5')) {
        option5 = {
            tooltip: {
                trigger: 'item',
                formatter: 'KD {c}'
            },
            color: ['#5ab8bf', '#eea223'],
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '70%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        show: true,
                        position: 'center',
                        formatter: [
                            '{a|Jul}',
                            '{b|2020}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: 'black',
                                lineHeight: 40,
                                fontSize: 30,
                                fontWeight: 'bold',
                            },
                            b: {
                                color: 'black',
                                height: 30,
                                fontSize: 15,
                            },
                        },
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 32, name: 'Monthly Charges' },
                        { value: 9, name: 'Extras' },
                    ]
                }
            ]
        };
        echarts.init(document.getElementById('chart5')).setOption(option5);
    }

    if (document.getElementById('chart6')) {
        option6 = {
            tooltip: {
                trigger: 'item',
                formatter: 'KD {c}'
            },
            color: ['#5ab8bf', '#eea223'],
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '70%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        show: true,
                        position: 'center',
                        formatter: [
                            '{a|Jun}',
                            '{b|2020}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: 'black',
                                lineHeight: 40,
                                fontSize: 30,
                                fontWeight: 'bold',
                            },
                            b: {
                                color: 'black',
                                height: 30,
                                fontSize: 15,
                            },
                        },
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 32, name: 'Monthly Charges' },
                        { value: 30, name: 'Extras' },
                    ]
                }
            ]
        };
        echarts.init(document.getElementById('chart6')).setOption(option6);
    }

    if (document.getElementById('chart7')) {
        option7 = {
            legend: {
                show: true,
                bottom: 0,
                left: 'center',
                data: [{
                    name: 'Subscription (GB)',
                    icon: 'circle'
                }, {
                    name: 'Extra (GB)',
                    icon: 'circle'
                }]
            },
            color: ['#5ab8bf', '#eea223'],
            xAxis: {
                show: true,
                type: 'category',
                data: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
                boundaryGap: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 15,
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '20',
                    fontFamily: 'sans-serif'
                }
            },
            yAxis: {
                show: false
            },
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'none',
                },
                formatter: function (params) {
                    return `<div>${params[0].name}</div> ${params[0].value + params[1].value}<br />
                          ${params[0].seriesName} ${params[0].value}<br />
                          ${params[1].seriesName} ${params[1].value}`;
                }
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110],
                type: 'bar',
                name: 'Subscription (GB)',
                showBackground: true,
                barWidth: '10%',
                stack: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }, {
                data: [20, 0, 190, 180, 0, 0],
                type: 'bar',
                name: 'Extra (GB)',
                stack: true,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }],
        };
        echarts.init(document.getElementById('chart7')).setOption(option7);
    }
});