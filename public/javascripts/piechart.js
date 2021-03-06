/**
 * Created by arnoldchen on 5/30/16.
 */
function markerOnClickPieChart(e) {

    $.getJSON("data/education.json", function (json) {
        var updateObject=$.grep(json, function (item) {
            return item.Area == e;
        });
        if (updateObject.length==0){
            var w = 480;
            var h = 300-70-20+150;
            svg = d3.select("#pieChart")

                .append("svg")
                .attr("width", w)
                .attr("height", h+70+20)
                .append("text")
                .text(function () {
                    return "No Data Available";
                })
                .attr("x", function (d, i) {
                    return 80;  //Bar width of 20 plus 1 for padding
                })
                .attr("y", function (d) {
                    return 200;
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "50px")
                .attr("fill", "red")
                .attr("text-align", "center");



            return
        }
        var first = updateObject[0];
        var pie = new d3pie("pieChart", {
            // "header": {
            //     "title": {
            //         "text": "Education Level ",
            //         "fontSize": 32,
            //         "font": "Helvetica Neue",
            //         "color":  "#73879C"
            //     },
            //     "subtitle": {
            //         "text": "This chart shows the education level in this area as % of overall population",
            //         "color": "#73879C",
            //         "fontSize": 10,
            //         "font-family": "Helvetica Neue"
            //     },
            //     "titleSubtitlePadding": 2
            // },
            "size": {
                "canvasWidth": 590,
                "pieInnerRadius": "30%",
                "pieOuterRadius": "45%"
            },
            "data": {
                "sortOrder": "label-desc",
                "content": [
                    {
                        "label": "Grade 5 to grade 8",
                        "value": first["Grade 5 to grade 8 -total enrollment (age>=3)"],
                        "color": "#3F98CC"
                    },
                    {
                        "label": "Less than 9th grade",
                        "value": first["Less than 9th grade (age>=25)"],
                        "color": "#1587CB"
                    },
                    {
                        "label": "9th through 12th grade, no diploma",
                        "value": first["9th through 12th grade, no diploma (age>=25)"],
                        "color": "#8FE6CA"
                    },
                    {
                        "label": "Grade 9 to grade 12",
                        "value": first["Grade 9 to grade 12 -total enrollment (age>=3)"],
                        "color": "#1E7491"
                    },
                    {
                        "label": "High school graduate",
                        "value": first["High school graduate (include equivalency (age>=25))"],
                        "color": "#89E6E2"
                    },
                    {
                        "label": "Some college, no diploma",
                        "value": first["Some college, no diploma (age>=25)"],
                        "color": "#62D3AE"
                    },
                    {
                        "label": "Associate's degree",
                        "value": first["Associate's degree (age>=25)"],
                        "color": "#0673B4"
                    },
                    {
                        "label": "Bachelor's degree",
                        "value": first["Bachelor's degree (age>=25)"],
                        "color": "#5ED4CB"
                    },
                    {
                        "label": "Master's degree",
                        "value": first["Master's degree (age>=25)"],
                        "color": "#5DD2CE"
                    },
                    {
                        "label": "College undergraduate ",
                        "value": first["College undergraduate -total enrollment (age>=3)"],
                        "color": "#00ADA0"
                    },
                    {
                        "label": "Graduate or professional school",
                        "value": first["Graduate or professional school -total enrollment (age>=3)"],
                        "color": "#386CAF"
                    }
                ]
            },
            "labels": {
                "outer": {
                    "format": "label-percentage1",
                    "pieDistance": 20
                },
                "inner": {
                    "format": "none"
                },
                "mainLabel": {
                    "fontSize": 11
                },
                "percentage": {
                    "color": "#999999",
                    "fontSize": 11,
                    "decimalPlaces": 0
                },
                "value": {
                    "color": "#cccc43",
                    "fontSize": 11
                },
                "lines": {
                    "enabled": true,
                    "color": "#777777"
                },
                "truncation": {
                    "enabled": true
                }
            },
            "tooltips": {
                "enabled": true,
                "type": "placeholder",
                "string": "{label}: {value}, {percentage}%",
                "styles": {
                    "fadeInSpeed": 255
                }
            },
            "effects": {
                "pullOutSegmentOnClick": {
                    "effect": "linear",
                    "speed": 400,
                    "size": 8
                }
            },
            "misc": {
                "colors": {
                    "segmentStroke": "#878787"
                }
            }
        });
        // var pie = new d3pie("pieChart", {
        //   header: {
        //     title: {
        //       text: "A Simple Donut Pie"
        //     },
        //     location: "pie-center"
        //   },
        //   size: {
        //     pieInnerRadius: "80%"
        //   },
        //   data: {
        //     sortOrder: "label-asc",
        //     content: [
        //       { label: "JavaScript", value: 1 },
        //       { label: "Ruby", value: 2 },
        //       { label: "Java", value: 3 },
        //       { label: "C++", value: 2 },
        //       { label: "Objective-C", value: 6 }
        //     ]
        //   }
        // });
        // console.log(pie);

    });
    // console.log(firstObject);
}