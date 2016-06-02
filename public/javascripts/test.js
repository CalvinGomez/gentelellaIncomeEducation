/**
 * Created by arnoldchen on 5/28/16.
 */
/*var margin ={top:20, right:30, bottom:30, left:40},
    width=960-margin.left - margin.right,
    height=500-margin.top-margin.bottom;

// scale to ordinal because x axis is not numerical
var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

//scale to numerical value by height
var y = d3.scale.linear().range([height, 0]);

var chart = d3.select("#chart")
    .append("svg")  //append svg element inside #chart
    .attr("width", width+(2*margin.left)+margin.right)    //set width
    .attr("height", height+margin.top+margin.bottom);  //set height
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");  //orient bottom because x-axis will appear below the bars

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");*/
i=0;
function markerOnClickBarChart(e) {





    $("svg").remove();
    i++;
    var w = 400;
    var h = 300-70-20;
    var barPadding = 1;
    var svg = null;
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, w], .05);
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");











//Create SVG element



        //= requires("data/income.json")[0];
        var dataArray = new Array();
        var incomeArray = new Array();
        $.getJSON("data/income.json", function (json) {

            var updateObject=$.grep(json, function (item) {
                return item.Area == e;
            });
            console.log( updateObject);
            if (updateObject.length==0){

                svg = d3.select("#sidebar")

                    .append("svg")
                    .attr("width", w)
                    .attr("height", h+70+20)
                    .append("text")
                    .text(function () {
                        return "No Data Available";
                    })
                    .attr("x", function (d, i) {
                        return 200;  //Bar width of 20 plus 1 for padding
                    })
                    .attr("y", function (d) {
                        return 200;
                    })
                    .attr("font-family", "sans-serif")
                    .attr("font-size", "50px")
                    .attr("fill", "black");
                return;




            }

            svg = d3.select("#sidebar")
                .append("svg")
                .attr("width", w)
                .attr("height", h+70+20)
                .append("g")
                .attr("transform",
                    "translate( 0, 20)");


            var testArray = [{"v":"<$15K"}, {"v":"$15k-$35k"}, {"v":"$35k-$50k"}, {"v":"$50k-$75k"},
                {"v":"$75k-$100k"}, {"v":"$100k-$150k"}, {"v":"$150k-$200k"}, {"v":">$200k"}];
            x.domain(testArray.map(function(d) { return d.v; }));
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + h + ")")
                .call(xAxis)
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", "-.55em")
                //.attr("font-size", "11px")
                //.attr("fill", "red")
                .attr("transform", "rotate(-90)" );






            var employmentData = updateObject[0];
            var less15 = employmentData["Households with income <$15K"];
            var from15to35 = employmentData["Households with income $15k-$35k"];
            var from35to50 = employmentData["Households with income$35k-$50k"];
            var from50to75 = employmentData["Households with income $50k-$75k"];
            var from75to100 = employmentData["Households with income $75k-$100k"];
            var from100to150 = employmentData["Households with income $100k-$150k"];
            var from150to200 = employmentData["Households with income $150k-$200k"];
            var more200 = employmentData["Households with income >$200k"];
            var originalArray = [less15, from15to35, from35to50, from50to75, from75to100, from100to150, from150to200, more200];
            dataArray = [less15, from15to35, from35to50, from50to75, from75to100, from100to150, from150to200, more200];
            // console.log(dataArray);
            incomeArray = ["<$15K", "$15k-$35k", "$35k-$50k", "$50k-$75k", "$75k-$100k", "$100k-$150k", "$150k-$200k", ">$200k"];

            var maxVal=Math.max(less15, from15to35, from35to50, from50to75, from100to150, from75to100, from150to200, more200);
            console.log(maxVal);

            console.log(dataArray);



            var m= (h)/maxVal;



            for (i = 0; i < dataArray.length; i++) {
                dataArray[i]=Math.floor(m*dataArray[i]);
            }



            var c = dataArray.map(function (e, i) {
                return [dataArray[i], originalArray[i]];
            });

            var n=1;
            console.log(dataArray);

            svg.selectAll("rect")
                .data(dataArray)
                .enter()
                .append("rect")
               // .attr("x", 0)
                .attr("y", function (d) {
                    return h-Math.floor(d / n);  //Height minus data value
                })
                .attr("width", 50)
                .attr("height", function (d, i) {
                    return Math.floor(d /n);
                })
                .attr("fill", "black")
                .attr("x", function (d, i) {
                    return i * 51;  //Bar width of 20 plus 1 for padding
                });
            svg.selectAll("newtext")
                .data(c)
                .enter()
                .append("text")
                .text(function (d) {
                    return d[1];
                })
                .attr("x", function (d, i) {
                    return i * 51 + 10;  //Bar width of 20 plus 1 for padding
                })
                .attr("y", function (d) {
                    return h-Math.floor(d[0] / n) + 10;
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "white");


            /*var margin = {top: 20, right: 30, bottom: 30, left: 40}
             var width = 960 - margin.left - margin.right;
             var height = 500 - margin.top - margin.bottom;

             var x = d3.scale.ordinal()
             .rangeRoundBands([0, width], .1);


             var xAxis = d3.svg.axis()
             .scale(x)
             .orient("bottom");

             svg.selectAll("rect")
             .data(incomeArray)
             .append("g")
             .attr("class", "x axis")
             .attr("transform", "translate(0," + height + ")")
             .call(xAxis);*/


        });

// console.log(dataArray);


        /*d3.json(employmentData, function(error, data){
         x.domain(data.map(function(d){ return d.letter}));
         y.domain([0, d3.max(data, function(d){return d.frequency})]);

         var bar = chart.selectAll("g")
         .data(data)
         .enter()
         .append("g")
         .attr("transform", function(d, i){
         return "translate("+x(d.letter)+", 0)";
         });

         bar.append("rect")
         .attr("y", function(d) {
         return y(d.frequency);
         })
         .attr("x", function(d,i){
         return x.rangeBand()+(margin.left/2);
         })
         .attr("height", function(d) {
         return height - y(d.frequency);
         })
         .attr("width", x.rangeBand());  //set width base on range on ordinal data

         bar.append("text")
         .attr("x", x.rangeBand()+margin.left )
         .attr("y", function(d) { return y(d.frequency) -10; })
         .attr("dy", ".75em")
         .text(function(d) { return d.frequency; });

         chart.append("g")
         .attr("class", "x axis")
         .attr("transform", "translate("+margin.left+","+ height+")")
         .call(xAxis);

         chart.append("g")
         .attr("class", "y axis")
         .attr("transform", "translate("+margin.left+",0)")
         .call(yAxis)
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 6)
         .attr("dy", ".71em")
         .style("text-anchor", "end")
         .text("Frequency");
         });

        function type(d) {
            d.letter = +d.letter; // coerce to number
            return d;
        }*/


      /*  $.getJSON("data/income.json", function (json) {
            var updateObject=$.grep(json, function (item) {
                return item.Area == e;
            });
            //var w = 400;
            //var h = 300;
            console.log(e);
            console.log(updateObject);
            var less15 = updateObject[0]["Households with income <$15K"];
            var from15to35 = updateObject[0]["Households with income $15k-$35k"];
            var from35to50 = updateObject[0]["Households with income$35k-$50k"];
            var from50to75 = updateObject[0]["Households with income $50k-$75k"];
            var from75to100 = updateObject[0]["Households with income $75k-$100k"];
            var from100to150 = updateObject[0]["Households with income $100k-$150k"];
            var from150to200 = updateObject[0]["Households with income $150k-$200k"];
            var more200 = updateObject[0]["Households with income >$200k"];
            var dataArray = [less15, from15to35, from35to50, from50to75, from75to100, from100to150, from150to200, more200];
            console.log(dataArray);
            var incomeArray = ["<$15K", "$15k-$35k", "$35k-$50k", "$50k-$75k", "$75k-$100k", "$100k-$150k", "$150k-$200k", ">$200k"];
            console.log(dataArray);
            var svg1=d3.select("#sidebar")
                .selectAll("rect")
                .data(dataArray)
                .attr("width", w)
                .attr("height", h);

            svg1.enter().append("rect");

            svg1.attr("x", 0)
                .attr("y", function (d) {
                    console.log(Math.floor(d/15));
                    return h - Math.floor(d / 15);  //Height minus data value
                })
                .attr("width", 50)
                .attr("height", function (d, i) {
                    return Math.floor(d / 15);
                })
                .attr("fill", "black")
                .attr("x", function (d, i) {
                    return i * 51;  //Bar width of 20 plus 1 for padding
                });
            svg1.exit().remove();
            svg1.enter().append("rect");
            svg1.text(function (d) {
                    return d;
                })
                .attr("x", function (d, i) {
                    return i * 51 + 10;
                })
                .attr("y", function (d) {
                    return h - (Math.floor(d / 15) ) + 10;
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "white");
            svg1.exit().remove();


        });*/

        // Make the changes






}
