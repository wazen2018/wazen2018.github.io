// JavaScript source code

function getAllData() {

   // RunScatterChart('class6', 's1_score', 's0_score', '发展潜力', '成长积点',20)
    showScatter();
    showStackChart()
}


//1. ECharts最基本的代码结构
//2. x轴和y轴数据 二维数组 [ [身高,体重],...   ]
//3. 将type的值设置为scatter, x轴和y轴的type都是value

//分组：属性 部门 年龄段，入职年份，学历，职称，职能级别 ，技能等级：分组
//分数（总分，s1, s2,s3,s4, 12个细目数量 
//员工之间（以上属性），一个员工
// X  Y 
//科室之间：员工数量，分数（平均分）对比 ，平均分排名，年份对比 ，职能数量，技能数量，学历数量，入职年份，年龄分布
//12个细目数量 ，年份 数量 


var id = "scatter";
var indexName = "发展潜力指数 与";


function showScatter() {

   var xtitle = '发展潜力';
   var ytitle = '成长积点';
    var namelist = [
        "入职期",
        "成长期",
        "成才期"
    ];

    var datalist = [
        [
            [
                6.66,
                107,
                '90005190',
                '史星海',
                '运检中心'
            ],
            [
                7.52,
                101,
                '90005196',
                '刘华美',
                '供电分公司'
            ]
        ],
        [
            null,
            null,
            [
                5.295,
                98.5,
                '90003043',
                '孙泽',
                '经技研究所'
            ],
            [
                14.2015,
                191.7,
                '90001034',
                '宋慕',
                '数据中心'
            ],
            [
                4.806,
                91.4,
                '90001021',
                '周宁',
                '运检中心'
            ]
        ],
        [
            null,
            null,
            null,
            null,
            null,
            [
                21.468,
                313.9,
                '37000727',
                '曾明达',
                '安全质量部'
            ],
            [
                6.708,
                120.3,
                '37000777',
                '乔敏智',
                '运检中心'
            ],
            [
                8.8325,
                143.25,
                '37000784',
                '康高澹',
                '供电分公司'
            ],
            [
                4.545,
                90.5,
                '37000718',
                '石和雅',
                '运检中心'
            ],
            [
                9.1615,
                178.65,
                '37000710',
                '段志泽',
                '安全督查中心'
            ],
            [
                17.619,
                228.9,
                '37000723',
                '黎和昶',
                '调度控制中心'
            ],
            [
                6.546,
                109.8,
                '37000816',
                '张候',
                '其他机构'
            ],
            [
                6.8715,
                120.5,
                '37000759',
                '曹嘉平',
                '运检中心'
            ],
            [
                7.759,
                153.9,
                '37000757',
                '李飞光',
                '安全督查中心'
            ],
            [
                13.6035,
                179.05,
                '37000804',
                '万彭湃',
                '互联网办公室'
            ],
            [
                6.307,
                106.2,
                '37000799',
                '卢芝',
                '经技研究所'
            ],
            [
                21.5465,
                297.15,
                '37000779',
                '杨筠',
                '运检中心'
            ],
            [
                5.58,
                110.9,
                '37000792',
                '蔡成益',
                '其他机构'
            ],
            [
                6.912,
                121.8,
                '37000797',
                '郭光华',
                '运检中心'
            ],
            [
                10.92,
                174.6,
                '37000789',
                '杜修远',
                '运检中心'
            ]
        ]
    ];


    var chartDom = document.getElementById('scatter');


    var myChart = echarts.init(chartDom);
    var option;

    var stad = [];
    var linedata = [];
    var linedataX=[]
    stad.push('入职期');
    stad.push('成长期');
    stad.push('成才期');
    linedata.push({ name: '入职期-达标积点', yAxis: 20 });
    linedataX.push({name: '入职期-达标指数', xAxis: 2 });

    linedata.push({ name: '成长期-达标积点', yAxis: 180 });
    linedataX.push({ name: '成长期-达标指数', xAxis: 4 });

    linedata.push({ name: '成才期-达标积点', yAxis: 300 });
    linedataX.push({ name: '成才期-达标指数', xAxis: 10 });
   

  
   
    const itemStyles = {

        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.3)'
    };

    var seriesArray = [];
    for (var i = 0; i < namelist.length; i++) {

        for (var j = 0; j < stad.length; j++) {
            if (namelist[i] == stad[j]) {
                seriesArray.push(
                    {
                        label: {
                            show: true,
                            position: "insideBottomLeft",
                            formatter: function (params) {
                                //显示人名 
                                return params.data[3];//+ ":" + data[4];
                                //console.log(params);
                                //console.log(datalist);
                                ////return;
                                //for (var i = 0; i < datalist.length; i++) {
                                //    if (params.data[2] == datalist[i].code) {

                                        
                                //    }
                                //}
                            }
                            
                        },
                        name: namelist[i],
                        type: 'scatter',
                        itemStyle: itemStyles,
                        symbolSize: 20,
                        markLine: {
                            lineStyle: { type: 'solid' },
                            data: [linedata[j], linedataX[j]]
                        },                         
                        data: datalist[i]
                    });

            }            
                
        }
   
    }

    //console.log(seriesArray);
  

    const schema = [
        { name: 'date', index: 0, text: '-' },
        { name: xtitle, index: 1, text: xtitle },
        { name: ytitle, index: 2, text: ytitle }
       
    ];
  
    option = {
        
        toolbox: {
            show: true,
            orient: "horizontal",   
            feature: {
                dataZoom: {
                    show: true, 
                    //title: "缩放", 
                    xAxisIndex: 0,  
                    yAxisIndex: 0
                },
            },
        },
        color: ['#dd4444', '#37A2DA', '#37a354', '#b5bd48', '#8378EA', '#96BFFF', '#fec42c', '#80F1BE',],
        legend: {
            top: 10,
            data: namelist,
            textStyle: {
                fontSize: 16
            }
        },
        grid: {
            left: '10%',
           // right: 150,
            top: '10%',
            bottom: '10%'
        },
        tooltip: {
            backgroundColor: 'rgba(255,0,0,0.7)',
            formatter: function (param) {
               // console.log(param)
                var value = param.value;
                if (param.componentType == "series")
                    // prettier-ignore
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + value[2] + ' ' + value[3] + '  ' + param.seriesName
                        + '</div>'
                        + value[4] + '  ' + '<br>'
                        + schema[1].text + ':' + value[0] + '<br>'
                        + schema[2].text + ':' + value[1] + '<br>';
                else
                    return '<div style=" font-size: 18px;">'
                        + param.data.name + ':' + param.data.value + '</div>';
                        
            }
        },
        xAxis: {
            type: 'value',
            name: xtitle,
            nameGap: 16,
            nameTextStyle: {
                fontSize: 16
            },
            splitLine: {
                show: true
            }
        },
        yAxis: {
            type: 'value',
            name: ytitle,
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                fontSize: 16
            },
            splitLine: {
                show: true
            }
        },
      
        series: seriesArray
    };

    option && myChart.setOption(option,true);


}


function showStackChart() {
    //import * as echarts from 'echarts';
    //console.log(chartid);


    var chartid = 'stack1';
    var chartDom = document.getElementById(chartid);
    var myChart = echarts.init(chartDom);

    var emplist = [
        '石和雅',
        '周宁',
        '孙泽',
        '刘华美',
        '卢芝',
        '史星海',
        '张候',
        '蔡成益',
        '乔敏智',
        '曹嘉平',
        '郭光华',
        '康高澹',
        '李飞光',
        '杜修远',
        '段志泽',
        '万彭湃',
        '宋慕',
        '黎和昶',
        '杨筠',
        '曾明达'
    ];
    var Datalist = [
        [
            1.44,
            3.015,
            3.195,
            2.52,
            2.7,
            0.18,
            0.765,
            0.603,
            2.129,
            1.661,
            2.007,
            1.323,
            1.008,
            2.426,
            0.626,
            0.756,
            5.495,
            3.105,
            0.122,
            2.763
        ],
        [
            0,
            0,
            0,
            0,
            0.162,
            0,
            0,
            0.162,
            0.138,
            0.027,
            0,
            0,
            0,
            0.72,
            0.108,
            0.378,
            0,
            0,
            0,
            0.906
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            1.2,
            0,
            0,
            0,
            0,
            0,
            0.24,
            0,
            0.246,
            0,
            0.147,
            0,
            0.054,
            4.872
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3.24,
            0,
            1.215,
            0,
            1.845,
            0,
            0,
            1.296,
            0.81
        ],
        [
            0,
            0,
            0,
            0,
            0.72,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0.162,
            0,
            0,
            2.43,
            0,
            0,
            0
        ],
        [
            0,
            0,
            2.1,
            1.4,
            0.07,
            0,
            0.126,
            0,
            0,
            1.89,
            0,
            0.035,
            0.427,
            0.399,
            5.32,
            0.252,
            0.973,
            0.987,
            3.92,
            1.659
        ],
        [
            0.225,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0.27,
            0,
            0,
            0,
            0,
            0.09,
            0,
            0.315,
            1.917,
            0,
            0.648
        ],
        [
            2.88,
            1.791,
            0,
            3.6,
            0,
            6.3,
            4.455,
            4.455,
            3.375,
            3.024,
            4.905,
            3.285,
            5.688,
            5.175,
            2.43,
            9.711,
            4.14,
            11.61,
            15.57,
            4.545
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0.585,
            0,
            0,
            0.36,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0.135,
            0,
            0,
            0.135,
            0.081,
            0,
            0,
            0,
            0.162,
            0,
            0.585,
            0
        ],
        [
            0,
            0,
            0,
            0,
            2.07,
            0.18,
            0,
            0,
            0.932,
            0,
            0,
            0.815,
            0.315,
            0.824,
            0.342,
            0.662,
            0.54,
            0,
            0,
            5.265
        ]
    ];
    var chartid = 'stack1';
    var option;
    var seriesList = [
        {
            'name': '成果获奖',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                1.44,
                3.015,
                3.195,
                2.52,
                2.7,
                0.18,
                0.765,
                0.603,
                2.129,
                1.661,
                2.007,
                1.323,
                1.008,
                2.426,
                0.626,
                0.756,
                5.495,
                3.105,
                0.122,
                2.763
            ]
        },
        {
            'name': '标准规程',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                0,
                0,
                0,
                0,
                0.162,
                0,
                0,
                0.162,
                0.138,
                0.027,
                0,
                0,
                0,
                0.72,
                0.108,
                0.378,
                0,
                0,
                0,
                0.906
            ]
        },
        {
            'name': '制度方案',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                0,
                0,
                0,
                0,
                0,
                0,
                1.2,
                0,
                0,
                0,
                0,
                0,
                0.24,
                0,
                0.246,
                0,
                0.147,
                0,
                0.054,
                4.872
            ]
        },
        {
            'name': '竞赛',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                3.24,
                0,
                1.215,
                0,
                1.845,
                0,
                0,
                1.296,
                0.81
            ]
        },
        {
            'name': '调考',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                0,
                0,
                0,
                0,
                0.72,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.162,
                0,
                0,
                2.43,
                0,
                0,
                0
            ]
        },
        {
            'name': '论文著作',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                0,
                0,
                2.1,
                1.4,
                0.07,
                0,
                0.126,
                0,
                0,
                1.89,
                0,
                0.035,
                0.427,
                0.399,
                5.32,
                0.252,
                0.973,
                0.987,
                3.92,
                1.659
            ]
        },
        {
            'name': '授权专利',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                0.225,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.27,
                0,
                0,
                0,
                0,
                0.09,
                0,
                0.315,
                1.917,
                0,
                0.648
            ]
        },
        {
            'name': '个人荣誉',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                2.88,
                1.791,
                0,
                3.6,
                0,
                6.3,
                4.455,
                4.455,
                3.375,
                3.024,
                4.905,
                3.285,
                5.688,
                5.175,
                2.43,
                9.711,
                4.14,
                11.61,
                15.57,
                4.545
            ]
        },
        {
            'name': '重大科技项目',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        {
            'name': '重大项目',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                0,
                0,
                0,
                0,
                0.585,
                0,
                0,
                0.36,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        {
            'name': '项目工程',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.135,
                0,
                0,
                0.135,
                0.081,
                0,
                0,
                0,
                0.162,
                0,
                0.585,
                0
            ]
        },
        {
            'name': '项目任务',
            'type': 'bar',
            'stack': 'total',
            'label': {
                'show': true
            },
            'emphasis': {
                'focus': 'series'
            },
            'data': [
                0,
                0,
                0,
                0,
                2.07,
                0.18,
                0,
                0,
                0.932,
                0,
                0,
                0.815,
                0.315,
                0.824,
                0.342,
                0.662,
                0.54,
                0,
                0,
                5.265
            ]
        }
    ];
    var chartDom = document.getElementById(chartid);
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: indexName + '细目分布关系图',
            left: 'center',
            top: '3%',

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        color: ['#5470c6',
            '#91cc75',
            '#fac858',
            '#ee6666',
            '#73c0de',
            '#3ba272',
            '#fc8452',
            '#9a60b4',
            '#ea7ccc',
            '#80FFA5',
            '#00DDFF',
            '#37A2FF',
            '#FF0087',
            '#FFBF00',
        ],
        legend: {
            top: '5%',
            bottom: '1%',
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            // 员工名字
            data: emplist

        },
        // 12个细目，每个细目20个   Y20*X12  
        series: seriesList

    };

    option && myChart.setOption(option, true);



    var option;

    var seriesList = [];

    for (var i = 0; i < legendlist.length; i++) {
        seriesList.push(
            {
                name: legendlist[legendlist.length - i - 1],
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: Datalist[i].reverse()
            });
    }
    console.log(seriesList);
    //seriesList=seriesList();

    option = {
        title: {
            text: indexName + "细目分布关系图",
            left: 'center',
            top: '3%',

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        color: ['#5470c6',
            '#91cc75',
            '#fac858',
            '#ee6666',
            '#73c0de',
            '#3ba272',
            '#fc8452',
            '#9a60b4',
            '#ea7ccc',
            '#80FFA5',
            '#00DDFF',
            '#37A2FF',
            '#FF0087',
            '#FFBF00',
        ],
        legend: {
            top: '5%',
            bottom: '1%',
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            // 员工名字
            data: emplist

        },
        // 12个细目，每个细目20个   Y20*X12  
        series: seriesList

    };

    option && myChart.setOption(option, true);


}

