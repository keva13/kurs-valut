/// <reference path="bootstrap.d.ts" />
/// <reference path="canvasjs.d.ts" />
/// <reference path="changeValute.ts" />
/// <reference path="convert.ts" />
var _kursValutBanksName = ['НБУ', 'Приват Банк', 'Кредобанк', 'Креди Агриколь Банк', 'УкрСиббанк', 'Укргазбанк', 'Мегабанк', 'Альфа-Банк', 'Райффайзен Банк Аваль', 'Укрсоцбанк', 'ПроКредит Банк', 'Ощадбанк', 'Укрэксимбанк', 'Банк Пивденный', 'Банк Восток', 'Правэкс-банк', 'ОТП Банк', 'ВТБ Банк', 'Проминвестбанк', 'ПУМБ', 'Идея Банк'];
var _kursValutBanksUSD = [];
var _kursValutBanksEUR = [];
function random(float) {
    float = parseFloat(float);
    return parseFloat(((Math.random() * (2 - 0) - 1) + float).toFixed(2));
}
//█──█─████─███─███─████─█──█─████─█     ████──████─█──█─█──█    ████─███  █─█─█──█─████─████─███─█──█─███
//██─█─█──█──█───█──█──█─██─█─█──█─█     █──██─█──█─██─█─█─█     █──█─█    █─█─█─█──█──█─█──█──█──██─█─█
//█─██─████──█───█──█──█─█─██─████─█──  ─████──████─█─██─██      █──█─███  █─█─██───████─████──█──█─██─███
//█──█─█──█──█───█──█──█─█──█─█──█─█     █──██─█──█─█──█─█─█     █──█─█    █─█─█─█──█─█──█──█──█──█──█─█
//█──█─█──█──█──███─████─█──█─█──█─███   ████──█──█─█──█─█──█    ████─█    ███─█──█─█─█──█──█─███─█──█─███
function nbuChart(inBlock, name) {
    return new CanvasJS.Chart(inBlock, {
        title: {
            text: name
        },
        axisY: {
            interval: 5,
            includeZero: false
        },
        data: [
            {
                name: "Ціна",
                type: "spline",
                showInLegend: true,
                dataPoints: [
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 }
                ]
            }
        ],
        legend: {
            cursor: "pointer",
            itemclick: function (e) {
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                }
                else {
                    e.dataSeries.visible = true;
                }
            }
        }
    });
}
_kursValutBanksEUR[0] = nbuChart("chartContainerEUR0", "Ціна на EUR за тиждень НБУ");
_kursValutBanksUSD[0] = nbuChart("chartContainerUSD0", "Ціна на USD за тиждень НБУ");
var jqxhr = $.getJSON("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3", function () {
})
    .done(function (data) {
    _kursValutBanksEUR[0].options.data[0].dataPoints[0].x = new Date();
    _kursValutBanksEUR[0].options.data[0].dataPoints[0].y = parseFloat(data[0].buy);
    _kursValutBanksUSD[0].options.data[0].dataPoints[0].x = new Date();
    _kursValutBanksUSD[0].options.data[0].dataPoints[0].y = parseFloat(data[2].buy);
    for (var i = 1; i <= 7; ++i) {
        var date = new Date();
        date.setDate(date.getDate() - i);
        _kursValutBanksEUR[0].options.data[0].dataPoints[i].x = date;
        _kursValutBanksEUR[0].options.data[0].dataPoints[i].y = random(_kursValutBanksEUR[0].options.data[0].dataPoints[i - 1].y);
        _kursValutBanksUSD[0].options.data[0].dataPoints[i].x = date;
        _kursValutBanksUSD[0].options.data[0].dataPoints[i].y = random(_kursValutBanksUSD[0].options.data[0].dataPoints[i - 1].y);
    }
});
//████─████─███─█─█─████─███───████──████─█──█─█──█────//
//█──█─█──█──█──█─█─█──█──█────█──██─█──█─██─█─█─█────//
//████─████──█──█─█─████──█────████──████─█─██─██────//
//█────█─█───█──███─█──█──█────█──██─█──█─█──█─█─█──//
//█────█─█──███──█──█──█──█────████──█──█─█──█─█──█//
function bankChart(inBlock, name) {
    return new CanvasJS.Chart(inBlock, {
        width: window.innerWidth - 20,
        title: {
            text: name
        },
        axisY: {
            interval: 5,
            includeZero: false
        },
        data: [
            {
                name: "Продати",
                type: "spline",
                showInLegend: true,
                dataPoints: [
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 }
                ]
            },
            {
                name: "Купити",
                type: "spline",
                showInLegend: true,
                dataPoints: [
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 0 }
                ]
            }
        ],
        legend: {
            cursor: "pointer",
            itemclick: function (e) {
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                }
                else {
                    e.dataSeries.visible = true;
                }
            }
        }
    });
}
_kursValutBanksEUR[1] = bankChart("chartContainerEUR1", "Ціна на EUR за тиждень Приват Банк");
_kursValutBanksUSD[1] = bankChart("chartContainerUSD1", "Ціна на USD за тиждень Приват Банк");
var jqxhr = $.getJSON("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", function () {
})
    .done(function (data) {
    _kursValutBanksEUR[1].options.data[0].dataPoints[0].x = new Date();
    _kursValutBanksEUR[1].options.data[0].dataPoints[0].y = parseFloat(data[0].buy);
    _kursValutBanksEUR[1].options.data[1].dataPoints[0].x = new Date();
    _kursValutBanksEUR[1].options.data[1].dataPoints[0].y = parseFloat(data[0].sale);
    _kursValutBanksUSD[1].options.data[0].dataPoints[0].x = new Date();
    _kursValutBanksUSD[1].options.data[0].dataPoints[0].y = parseFloat(data[2].buy);
    _kursValutBanksUSD[1].options.data[1].dataPoints[0].x = new Date();
    _kursValutBanksUSD[1].options.data[1].dataPoints[0].y = parseFloat(data[2].sale);
    for (var i = 1; i <= 7; ++i) {
        var date = new Date();
        date.setDate(date.getDate() - i);
        _kursValutBanksEUR[1].options.data[0].dataPoints[i].x = date;
        _kursValutBanksEUR[1].options.data[0].dataPoints[i].y = _kursValutBanksEUR[0].options.data[0].dataPoints[i].y - (Math.random() * (0.05) - 0.35);
        _kursValutBanksEUR[1].options.data[1].dataPoints[i].x = date;
        _kursValutBanksEUR[1].options.data[1].dataPoints[i].y = _kursValutBanksEUR[1].options.data[0].dataPoints[i].y - (Math.random() * (0.05) - 0.35);
        _kursValutBanksUSD[1].options.data[0].dataPoints[i].x = date;
        _kursValutBanksUSD[1].options.data[0].dataPoints[i].y = _kursValutBanksUSD[0].options.data[0].dataPoints[i].y - (Math.random() * (0.05) - 0.35);
        _kursValutBanksUSD[1].options.data[1].dataPoints[i].x = date;
        _kursValutBanksUSD[1].options.data[1].dataPoints[i].y = _kursValutBanksUSD[1].options.data[0].dataPoints[i].y - (Math.random() * (0.05) - 0.35);
    }
    _kursValutBanksEUR[1].render();
    _kursValutBanksUSD[1].render();
    _kursValutBanksEUR[0].render();
    _kursValutBanksUSD[0].render();
    for (var k = 2; k < _kursValutBanksName.length; k++) {
        $('#chart').append('<div hidden class="EUR" id="chartContainerEUR' + (k) + '" style="height: 400px; width: 100%;margin:auto;"></div>');
        $('#chart').append('<div hidden class="USD" id="chartContainerUSD' + (k) + '" style="height: 400px; width: 100%;margin:auto;"></div>');
        $('#dropdown-option').append("<li><a onclick='selectBank(" + k + ")'>" + _kursValutBanksName[k] + "</a></li>");
        _kursValutBanksEUR[k] = bankChart("chartContainerEUR" + (k), "Ціна на EUR за тиждень " + _kursValutBanksName[k]);
        _kursValutBanksUSD[k] = bankChart("chartContainerUSD" + (k), "Ціна на USD за тиждень " + _kursValutBanksName[k]);
        for (var i = 0; i <= 7; ++i) {
            var date = new Date();
            date.setDate(date.getDate() - i);
            _kursValutBanksEUR[k].options.data[0].dataPoints[i].x = date;
            _kursValutBanksEUR[k].options.data[0].dataPoints[i].y = _kursValutBanksEUR[1].options.data[0].dataPoints[i].y - (Math.random() * (0.05) - 0.1);
            _kursValutBanksEUR[k].options.data[1].dataPoints[i].x = date;
            _kursValutBanksEUR[k].options.data[1].dataPoints[i].y = _kursValutBanksEUR[k].options.data[0].dataPoints[i].y - (Math.random() * (0.05) - 0.35);
            _kursValutBanksUSD[k].options.data[0].dataPoints[i].x = date;
            _kursValutBanksUSD[k].options.data[0].dataPoints[i].y = _kursValutBanksUSD[1].options.data[0].dataPoints[i].y - (Math.random() * (0.05) - 0.1);
            _kursValutBanksUSD[k].options.data[1].dataPoints[i].x = date;
            _kursValutBanksUSD[k].options.data[1].dataPoints[i].y = _kursValutBanksUSD[k].options.data[0].dataPoints[i].y - (Math.random() * (0.05) - 0.35);
        }
        _kursValutBanksEUR[k].render();
        _kursValutBanksUSD[k].render();
    }
    start();
    modal_getSum();
});
function selectBank(id) {
    if (_kursValutGlobalValute == 'usd') {
        $('.USD').hide();
        $('#chartContainerUSD' + id).show();
        return;
    }
    $('.EUR').hide();
    $('#chartContainerEUR' + id).show();
}
