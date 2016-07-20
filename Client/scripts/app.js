d3.select("body")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100)
    .append("text")
    .text("D3 bitches")
    .attr("x", 0)
    .attr("y", 25)
    .style("fille", "orange")


d3.select("body")
    .append("svg")
    .append("rect")
    .attr("width",100)
    .attr("height",400)
    .style("fill", "blue");

d3.select("body")
    .append("svg")
    .attr("width", 50)
    .attr("height", 50)
    .append("circle")
    .attr("cx",25)
    .attr("cy",25)
    .attr("r",25)
    .attr("fill", "red");