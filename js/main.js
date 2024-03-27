var __containers__ = {};
var __links__ = [];
var __initflags__ = { "welcome": 1, "research": 0, "news": 0 };

function __write__() {

    d3.text("dat/vast2015trajectory.html", function (e, __vast2015trajectory__) {
        if (e) console.log(e);

        d3.text("dat/biography.html", function (e, __biography__) {
            if (e) console.log(e);

            function get_tr() {
                if ($(window).width() <= 500) {
                    return "95%";
                }
                else if (.62 * $(window).width() > 800) {
                    return "800px";
                }
                else {
                    return "62%";
                }
            }

            var bounded_body = d3.select("#main")
                .append("table")
                .attr("cellspacing", "0")
                .attr("cellpadding", "0")
                .attr("width", get_tr())
                .attr("align", "center");

            $(window).resize(function () {
                bounded_body.attr("width", get_tr());
            });

            var last_x = 0;
            bounded_body.append("svg")
                .attr('preserveAspectRatio', 'xMinYMin meet').attr('viewBox', '0 0 800 35')
                .html(__vast2015trajectory__)
                .selectAll('rect')
                .attr('x', function (d) {
                    var tmp = last_x;
                    last_x += 2.43;
                    return tmp;
                });

            var text_container = bounded_body
                .append("table")
                .attr("cellspacing", "0")
                .attr("cellpadding", "0")
                .attr("width", "100%")
                .attr("align", "center")
                .style("margin-top", "10px");

            text_container.append('g').html('<ul class="hidden" style="margin-left: 10px;"> <li><a id="welcomelink" class="active" onclick="__welcome__()" style="cursor: pointer;">About</a></li> <li><a id="researchlink" onclick="__research__()" style="cursor: pointer;">Publications</a></li> <li><a id="newslink" onclick="__news__()" style="cursor: pointer;">Talks</a></li> <li><a id="cvlink" href="https://github.com/ucbrise/flor" target="_blank">Flor 🌻</a></li></ul> ');

            __links__.push(d3.select("#welcomelink"));
            __links__.push(d3.select("#researchlink"));
            __links__.push(d3.select("#newslink"));

            text_container.append('hr');
            var text_outer = text_container;
            text_container = text_container.append("div")
                .attr("id", "welcomediv");

            __containers__.welcome = text_container;
            __containers__.research = text_outer.append("div").attr("id", "researchcontainer").classed("hidden", true);
            __containers__.news = text_outer.append("div").attr("id", "newscontainer").classed("hidden", true);

            text_container.append('g').html('<a href="https://scholar.google.com/citations?user=YiNKGP0AAAAJ" target="_blank"> <img style="max-width: 14%; margin-right: 2.5%; margin-left: 5px; margin-top: 0px; margin-bottom: 0px;" src="img/profile.png" align="left"></a>');

            text_container.append('g').append("p")
                .html(__biography__)
                .style('font-size', '16px')
                .style('margin-top', '40px')
                .attr("align", "justify")
                .attr('id', 'paragraphs');

            text_outer.append('hr');

            if (~__initflags__.research) {
                __initflags__.research = 1;

                d3.text("dat/research.html", function (e, researchhtml) {
                    if (e) console.log(e);
                    var text_container = __containers__.research;
                    text_container.html(researchhtml);

                    if (~__initflags__.news) {
                        __initflags__.news = 1;

                        d3.text("dat/news.html", function (e, newshtml) {
                            if (e) console.log(e);
                            text_container = __containers__.news;
                            text_container.html(newshtml);
                            d3.select('ul').classed('hidden', false);
                        });

                    }
                });

            }

        });
    });
}

function __welcome__() {
    __links__.forEach(function (e) {
        e.attr("class", "inactive");
    });
    d3.select("#welcomelink").attr("class", "active");
    __containers__.research.classed("hidden", true);
    __containers__.news.classed("hidden", true);
    __containers__.welcome.classed("hidden", false);

}

function __research__() {
    __links__.forEach(function (e) {
        e.attr("class", "inactive");
    });
    d3.select("#researchlink").attr("class", "active");
    __containers__.welcome.classed("hidden", true);
    __containers__.news.classed("hidden", true);
    __containers__.research.classed("hidden", false);

}

function __news__() {
    __links__.forEach(function (e) {
        e.attr("class", "inactive");
    });
    d3.select("#newslink").attr("class", "active");
    __containers__.welcome.classed("hidden", true);
    __containers__.research.classed("hidden", true);
    __containers__.news.classed("hidden", false);
}



