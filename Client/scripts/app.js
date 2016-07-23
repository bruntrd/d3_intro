
var w = 500;
var h = 200;
var padding = 5;
var dataSet = [5,10,15,20,25];
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height",h);

var maxH = Math.max.apply(Math,dataSet);
//console.log(maxH)

//d3 can use d as the data set value as d and i as the index of that one
svg.selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr('x',function(d,i){
            return i*(w/dataSet.length);
        })
    .attr('y',function(d){
        var x = h/maxH
        return h-d*x;
    })
    .attr("width",w/dataSet.length-padding)
    .attr("height",function(d){
        var x= h/maxH;
        return d*x;
    })
    .attr("fill", function(d){
        return "rgb(0, "+ (d*10) + ", 0)";
    });

//svg.selectAll("rect")
//    .data(dataSet)
//    .enter()
//    .append("rect").attr({
//        x: function(d,i){return i*(w/dataSet.length);},
//        y: function(d){var x = h/maxH;return h-d*x;},
//        height: function(d){var x = h/maxH; return d*x},
//        width: w/dataSet.length,
//        fill: function(d){return "rgb(100, "+ (d*20)+ ",0)";}
//
//    });
