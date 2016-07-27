
//var w = 500;
//var h = 200;
//var padding = 5;
//var h = 100;
//var w = 200;

var h = 350;
var w = 400;

monthlySales = [
    {"month":10, "sales":100},
    {"month":20, "sales":130},
    {"month":30, "sales":250},
    {"month":40, "sales":300},
    {"month":50, "sales":265},
    {"month":60, "sales":225},
    {"month":70, "sales":180},
    {"month":80, "sales":120},
    {"month":90, "sales":145},
    {"month":100, "sales":130}
];

//Function to generate line "path"
var lineFun = d3.svg.line()
    .x(function (d) { return d.month*3; })
    .y(function (d) { return h-d.sales; })
    .interpolate("linear");

//create our SVG
var svg = d3.select("body").append("svg").attr({ width:w, height: h});

//build the viz
var viz = svg.append("path")
    .attr({
        d: lineFun(monthlySales),
        "stroke": "purple",
        "stroke-width": 2,
        "fill": "none"
    });


//add labels
var labels = svg.selectAll("text")
    .data(monthlySales)
    .enter()
    .append("text")
    //.text(function(d){ return d.sales; } )
    .text(function(d){ return d.sales; })
    .attr({
        x: function(d){ return (d.month*3)-25; },
        y: function(d){ return h-d.sales; },
        "font-size": "12px",
        "font-family": "sans-serif",
        "fill": "#666666",
        "text-anchor": "start",
        "dy": ".35em",
        "font-weight": function(d,i){
            if (i===0 ||  i==(monthlySales.length-1)) {
                return "bold"; }
            else {
                return "normal"; }
        }
    });




//create our SVG
var svg = d3.select("body").append("svg").attr({ width:w, height: h});


//add dots
var dots = svg.selectAll("circle")
    .data(monthlySales)
    .enter()
    .append("circle")
    .attr({
        cx: function(d){ return d.month*3; },
        cy: function(d){ return h-d.sales; },
        r:  5,
        "fill": "#666666"
    });



//var svg = d3.select("body")
//    .append("svg")
//    .attr("width", w)
//    .attr("height",h);

//var maxH = Math.max.apply(Math,dataSet);
////console.log(maxH)
//
////d3 can use d as the data set value as d and i as the index of that one
//svg.selectAll("rect")
//    .data(dataSet)
//    .enter()
//    .append("rect")
//    .attr('x',function(d,i){
//            return i*(w/dataSet.length);
//        })
//    .attr('y',function(d){
//        var x = h/maxH
//        return h-d*x;
//    })
//    .attr("width",w/dataSet.length-padding)
//    .attr("height",function(d){
//        var x= h/maxH;
//        return d*x;
//    })
//    .attr("fill", function(d){
//        return "rgb(0, "+ (d*10) + ", 0)";
//    });
//
//svg.selectAll('text')
//    .data(dataSet)
//    .enter()
//    .append("text")
//    .text(function(d){return d;})
//    .attr("text-anchor", "middle")
//    .attr('x',function(d,i){return i * (w/ dataSet.length)+(w/dataSet.length-padding)/2;})
//    .attr('y', function(d) {return h-(d*4)+10})
//    .attr('fill','white');

