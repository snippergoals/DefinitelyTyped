/// <reference path="d3.d.ts" />

//Example from http://bl.ocks.org/3887235
function testPieChart() {
    var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

    var color = d3.scale.ordinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function (d) { return d.population; });

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    d3.csv("data.csv", function (error, data) {

        data.forEach(function (d) {
            d.population = +d.population;
        });

        var g = svg.selectAll(".arc")
            .data(pie(data))
          .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) { return color(d.data.age); });

        g.append("text")
            .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .text(function (d) { return d.data.age; });

    });
}

//Example from http://bl.ocks.org/3887051
function groupedBarChart() => {
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var x0 = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var x1 = d3.scale.ordinal();

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.ordinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var xAxis = d3.svg.axis()
        .scale(x0)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format(".2s"));

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("data.csv", function (error, data) {
        var ageNames = d3.keys(data[0]).filter(function (key) { return key !== "State"; });

        data.forEach(function (d) {
            d.ages = ageNames.map(function (name) { return { name: name, value: +d[name] }; });
        });

        x0.domain(data.map(function (d) { return d.State; }));
        x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
        y.domain([0, d3.max(data, function (d) { return d3.max(d.ages, function (d) { return d.value; }); })]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
          .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Population");

        var state = svg.selectAll(".state")
            .data(data)
          .enter().append("g")
            .attr("class", "g")
            .attr("transform", function (d) { return "translate(" + x0(d.State) + ",0)"; });

        state.selectAll("rect")
            .data(function (d) { return d.ages; })
          .enter().append("rect")
            .attr("width", x1.rangeBand())
            .attr("x", function (d) { return x1(d.name); })
            .attr("y", function (d) { return y(d.value); })
            .attr("height", function (d) { return height - y(d.value); })
            .style("fill", function (d) { return color(d.name); });

        var legend = svg.selectAll(".legend")
            .data(ageNames.reverse())
          .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) { return d; });

    });
}

//Example from http://bl.ocks.org/3886208
function stackedBarChart() {
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .rangeRound([height, 0]);

    var color = d3.scale.ordinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format(".2s"));

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("data.csv", function (error, data) {
        color.domain(d3.keys(data[0]).filter(function (key) { return key !== "State"; }));

        data.forEach(function (d) {
            var y0 = 0;
            d.ages = color.domain().map(function (name) { return { name: name, y0: y0, y1: y0 += +d[name] }; });
            d.total = d.ages[d.ages.length - 1].y1;
        });

        data.sort(function (a, b) { return b.total - a.total; });

        x.domain(data.map(function (d) { return d.State; }));
        y.domain([0, d3.max(data, function (d) { return d.total; })]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
          .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Population");

        var state = svg.selectAll(".state")
            .data(data)
          .enter().append("g")
            .attr("class", "g")
            .attr("transform", function (d) { return "translate(" + x(d.State) + ",0)"; });

        state.selectAll("rect")
            .data(function (d) { return d.ages; })
          .enter().append("rect")
            .attr("width", x.rangeBand())
            .attr("y", function (d) { return y(d.y1); })
            .attr("height", function (d) { return y(d.y0) - y(d.y1); })
            .style("fill", function (d) { return color(d.name); });

        var legend = svg.selectAll(".legend")
            .data(color.domain().reverse())
          .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) { return d; });

    });
}

// example from http://bl.ocks.org/3886394
function normalizedBarChart() {
    var margin = { top: 20, right: 100, bottom: 30, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .rangeRound([height, 0]);

    var color = d3.scale.ordinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format(".0%"));

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("data.csv", function (error, data) {
        color.domain(d3.keys(data[0]).filter(function (key) { return key !== "State"; }));

        data.forEach(function (d) {
            var y0 = 0;
            d.ages = color.domain().map(function (name) { return { name: name, y0: y0, y1: y0 += +d[name] }; });
            d.ages.forEach(function (d) { d.y0 /= y0; d.y1 /= y0; });
        });

        data.sort(function (a, b) { return b.ages[0].y1 - a.ages[0].y1; });

        x.domain(data.map(function (d) { return d.State; }));

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        var state = svg.selectAll(".state")
            .data(data)
          .enter().append("g")
            .attr("class", "state")
            .attr("transform", function (d) { return "translate(" + x(d.State) + ",0)"; });

        state.selectAll("rect")
            .data(function (d) { return d.ages; })
          .enter().append("rect")
            .attr("width", x.rangeBand())
            .attr("y", function (d) { return y(d.y1); })
            .attr("height", function (d) { return y(d.y0) - y(d.y1); })
            .style("fill", function (d) { return color(d.name); });

        var legend = svg.select(".state:last-child").selectAll(".legend")
            .data(function (d) { return d.ages; })
          .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function (d) { return "translate(" + x.rangeBand() / 2 + "," + y((d.y0 + d.y1) / 2) + ")"; });

        legend.append("line")
            .attr("x2", 10);

        legend.append("text")
            .attr("x", 13)
            .attr("dy", ".35em")
            .text(function (d) { return d.name; });

    });
}

// example from http://bl.ocks.org/3885705
function sortablebarChart() {
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var formatPercent = d3.format(".0%");

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1, 1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(formatPercent);

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data.tsv", function (error, data) {

        data.forEach(function (d) {
            d.frequency = +d.frequency;
        });

        x.domain(data.map(function (d) { return d.letter; }));
        y.domain([0, d3.max(data, function (d) { return d.frequency; })]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
          .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Frequency");

        svg.selectAll(".bar")
            .data(data)
          .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.letter); })
            .attr("width", x.rangeBand())
            .attr("y", function (d) { return y(d.frequency); })
            .attr("height", function (d) { return height - y(d.frequency); });

        d3.select("input").on("change", change);

        var sortTimeout = setTimeout(function () {
            d3.select("input").property("checked", true).each(change);
        }, 2000);

        function change() {
            clearTimeout(sortTimeout);

            var x0 = x.domain(data.sort(this.checked
                ? function (a, b) { return b.frequency - a.frequency; }
                : function (a, b) { return d3.ascending(a.letter, b.letter); })
                .map(function (d) { return d.letter; }))
                .copy();

            var transition = svg.transition().duration(750),
                delay = function (d, i) { return i * 50; };

            transition.selectAll(".bar")
                .delay(delay)
                .attr("x", function (d) { return x0(d.letter); });

            transition.select(".x.axis")
                .call(xAxis)
              .selectAll("g")
                .delay(delay);
        }
    });
}

//example from http://bl.ocks.org/4063318
function callenderView() {
    var width = 960,
    height = 136,
    cellSize = 17; // cell size

    var day = d3.time.format("%w"),
        week = d3.time.format("%U"),
        percent = d3.format(".1%"),
        format = d3.time.format("%Y-%m-%d");

    var color = d3.scale.quantize()
        .domain([-.05, .05])
        .range(d3.range(11).map(function (d) { return "q" + d + "-11"; }));

    var svg = d3.select("body").selectAll("svg")
        .data(d3.range(1990, 2011))
      .enter().append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "RdYlGn")
      .append("g")
        .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

    svg.append("text")
        .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
        .style("text-anchor", "middle")
        .text(function (d) { return d; });

    var rect = svg.selectAll(".day")
        .data(function (d) { return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
      .enter().append("rect")
        .attr("class", "day")
        .attr("width", cellSize)
        .attr("height", cellSize)
        .attr("x", function (d) { return parseInt(week(d)) * cellSize; })
        .attr("y", function (d) { return parseInt(day(d)) * cellSize; })
        .datum(format);

    rect.append("title")
        .text(function (d) { return d; });

    svg.selectAll(".month")
        .data(function (d) { return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
      .enter().append("path")
        .attr("class", "month")
        .attr("d", monthPath);

    d3.csv("dji.csv", function (error, csv) {
        var data = d3.nest()
          .key(function (d) { return d.Date; })
          .rollup(function (d) { return (d[0].Close - d[0].Open) / d[0].Open; })
          .map(csv);

        rect.filter(function (d) { return d in data; })
            .attr("class", function (d) { return "day " + color(data[d]); })
          .select("title")
            .text(function (d) { return d + ": " + percent(data[d]); });
    });

    function monthPath(t0) {
        var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
            d0 = +day(t0), w0 = +week(t0),
            d1 = +day(t1), w1 = +week(t1);
        return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
            + "H" + w0 * cellSize + "V" + 7 * cellSize
            + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
            + "H" + (w1 + 1) * cellSize + "V" + 0
            + "H" + (w0 + 1) * cellSize + "Z";
    }

    d3.select(self.frameElement).style("height", "2910px");
}
