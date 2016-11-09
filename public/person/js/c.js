/**
 * Created by jundong on 16/11/9.
 */



$(document).ready(function () {
    var listUl = $('[data-id = abilityList]');
    var canvasFa = $('[data-id = chart-fa]');
    var clearFa = $('[data-id = clear]');
    console.log(listUl);
    listUl.hover(function () {
        console.log('ee');
        // canvasFa.show(100);
        canvasFa.removeClass('slideOutLeft');
        canvasFa.addClass('fadeIn');
        drew();
    }, function () {
    });
    clearFa.on('click', function () {
        /*关闭 表图*/
        // canvasFa.fadeOut(100);
        canvasFa.removeClass('fadeIn');
        canvasFa.addClass('slideOutLeft');

    });
    var list = getAbilityList();
    var nameList = [];
    var percentage = [];
    list.forEach(function (e, i) {
        nameList.push(e.name);
        var p = parseInt(e.percentage);
        console.log(p);
        percentage.push(p);
    });
    console.log(nameList);
    console.log(percentage);
    var config = {
        type: 'radar',
        data: {
            labels: nameList,
            datasets: [{
                label: "前端",
                backgroundColor: "rgba(192, 101, 134, 0.35)",
                pointBackgroundColor: "#cd8fba",
                data: percentage
            }]
        },
        options: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '技能表'
            },
            scale: {
                reverse: false,
                gridLines: {
                    color: ["yellow", "yellow", "yellow", "yellow"]
                },
                ticks: {
                    beginAtZero: true
                }
            }
        }
    };
    var _chart;
    function drew() {
        if(!_chart){
            _chart = new Chart(document.getElementById("canvas"), config);
        }
    }
});


