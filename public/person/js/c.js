/**
 * Created by jundong on 16/11/9.
 */

$(document).ready(function () {
    var listUl = $('[data-id = abilityList]');
    var canvasFa = $('[data-id = chart-fa]');
    var clearFa = $('[data-id = clear]');
    var canvasSon = $('[data-id = chartSon]');
    canvasSonChnage();
    $(window).resize(canvasSonChnage);
    function canvasSonChnage() {
        var h = $(window).height();
        var w = $(window).height();
        if (h > w) {
            canvasSon.width(w);
        } else {
            canvasSon.width(h);
        }

        console.log("h",h,"h2", canvasSon.height());
        canvasSon.css({
            marginTop: (h - canvasSon.height()) / 2 + 'px'
    })
    }

    // console.log(listUl);
    listUl.hover(function () {
        console.log('ee');
        // canvasFa.show(100);
        canvasFa.removeClass('slideOutLeft');
        canvasFa.addClass('fadeIn');
        drew();
        canvasSonChnage();
    }, function () {
    });
    clearFa.on('click', function () {
        /*关闭 表图*/
        canvasFa.removeClass('fadeIn');
        canvasFa.addClass('slideOutLeft');

    });
    var list = getAbilityList();
    var nameList = [];
    var percentage = [];
    list.forEach(function (e, i) {
        nameList.push(e.name);
        var p = parseInt(e.percentage);
        // console.log(p);
        percentage.push(p);
    });
    // console.log(nameList);
    // console.log(percentage);
    var config = {
        type: 'radar',
        data: {
            labels: nameList,
            datasets: [{
                label: "前端",
                backgroundColor: "rgba(255, 63, 54, 0.35)",
                pointBackgroundColor: "rgba(151,187,205,0.5)",
                pointStrokeColor: "#fff",
                data: percentage
            }]
        },
        options: {
            legend: {
                position: 'top',
            },
            title: {
                // display: true,
                // text: '技能表'
            },
            scale: {
                reverse: false,
                gridLines: {
                    color: ["#001f3f"]
                },
                ticks: {
                    beginAtZero: true
                }
            },
        }
    };
    var _chart;

    function drew() {
        if (!_chart) {
            _chart = new Chart(document.getElementById("canvas"), config);
        }

    }
});


