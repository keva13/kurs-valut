/// <reference path="chartRender.ts" />
$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('body').animate({ scrollTop: destination }, 500); //1100 - скорость
        return false;
    });
});
$('#go').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400, function () {
        $('#modal_form')
            .css('display', 'block')
            .animate({ opacity: 1, top: '50%' }, 200);
    });
});
$('#modal_close, #overlay').click(function () {
    $('#modal_form')
        .animate({ opacity: 0, top: '45%' }, 200, function () {
        $(this).css('display', 'none');
        $('#overlay').fadeOut(400);
    });
});
var _convertValute = 'usd';
var _convertEvent = 'buy';
function modal_Buy() {
    $('#modal-sale').removeClass('btn-primary');
    $('#modal-sale').addClass('btn-default');
    $('#modal-buy').removeClass('btn-default');
    $('#modal-buy').addClass('btn-primary');
    _convertEvent = 'buy';
    modal_getSum();
}
function modal_Sale() {
    $('#modal-buy').removeClass('btn-primary');
    $('#modal-buy').addClass('btn-default');
    $('#modal-sale').removeClass('btn-default');
    $('#modal-sale').addClass('btn-primary');
    _convertEvent = 'sale';
    modal_getSum();
}
function modal_select_null() {
    $('.modal-selectValute > .btn-group > .btn').removeClass('btn-primary');
    $('.modal-selectValute > .btn-group > .btn').addClass('btn-default');
}
function modal_select_USD() {
    modal_select_null();
    $('#modal_select_USD').removeClass('btn-default');
    $('#modal_select_USD').addClass('btn-primary');
    _convertValute = 'usd';
    modal_getSum();
    $('.valute1').text('EUR');
    $('.valute2').text('UAH');
}
function modal_select_EUR() {
    modal_select_null();
    $('#modal_select_EUR').removeClass('btn-default');
    $('#modal_select_EUR').addClass('btn-primary');
    _convertValute = 'eur';
    modal_getSum();
    $('.valute1').text('USD');
    $('.valute2').text('UAH');
}
function modal_select_UAH() {
    modal_select_null();
    $('#modal_select_UAH').removeClass('btn-default');
    $('#modal_select_UAH').addClass('btn-primary');
    _convertValute = 'uah';
    modal_getSum();
    $('.valute1').text('EUR');
    $('.valute2').text('USD');
}
function modal_getSum() {
    //$('.table > table').html('<tr><th></th><th class="valute1">EUR</th><th class="valute2">UAH</th></tr><tr><th>НБУ</th><td class="valNbu1"></td><td class="valNbu2"></td></tr>');
    $('.delete').remove();
    var money = Number($('.money').val());
    var nbuusd = _kursValutBanksUSD[0].options.data[0];
    var nbueur = _kursValutBanksEUR[0].options.data[0];
    switch (_convertValute) {
        case "usd":
            for (var i = 1; i < _kursValutBanksUSD.length; ++i) {
                var PBusd = _kursValutBanksUSD[i].options;
                var PBeur = _kursValutBanksEUR[i].options;
                if (_convertEvent == 'buy') {
                    var val1 = (money / PBeur.data[1].dataPoints[0].y * PBusd.data[1].dataPoints[0].y).toFixed(2);
                    var val2 = (money * PBusd.data[1].dataPoints[0].y).toFixed(2);
                    $('.table > table').append('<tr class="delete"><th>' + _kursValutBanksName[i] + '</th><td>' + val1 + '</td><td>' + val2 + '</td></tr>');
                }
                if (_convertEvent == 'sale') {
                    var val1 = (money / PBeur.data[0].dataPoints[0].y * PBusd.data[0].dataPoints[0].y).toFixed(2);
                    var val2 = (money * PBusd.data[0].dataPoints[0].y).toFixed(2);
                    $('.table > table').append('<tr class="delete"><th>' + _kursValutBanksName[i] + '</th><td>' + val1 + '</td><td>' + val2 + '</td></tr>');
                }
            }
            $('.valNbu1').text((money / nbueur.dataPoints[0].y * nbuusd.dataPoints[0].y).toFixed(2));
            $('.valNbu2').text((money * nbuusd.dataPoints[0].y).toFixed(2));
            break;
        case "eur":
            for (var i = 1; i < _kursValutBanksUSD.length; ++i) {
                var PBusd = _kursValutBanksUSD[i].options;
                var PBeur = _kursValutBanksEUR[i].options;
                if (_convertEvent == 'buy') {
                    var val1 = (money / PBusd.data[1].dataPoints[0].y * PBeur.data[1].dataPoints[0].y).toFixed(2);
                    var val2 = (money * PBeur.data[1].dataPoints[0].y).toFixed(2);
                    $('.table > table').append('<tr class="delete"><th>' + _kursValutBanksName[i] + '</th><td>' + val1 + '</td><td>' + val2 + '</td></tr>');
                }
                if (_convertEvent == 'sale') {
                    var val1 = (money / PBusd.data[0].dataPoints[0].y * PBeur.data[0].dataPoints[0].y).toFixed(2);
                    var val2 = (money * PBeur.data[0].dataPoints[0].y).toFixed(2);
                    $('.table > table').append('<tr class="delete"><th>' + _kursValutBanksName[i] + '</th><td>' + val1 + '</td><td>' + val2 + '</td></tr>');
                }
            }
            $('.valNbu1').text((money / nbuusd.dataPoints[0].y * nbueur.dataPoints[0].y).toFixed(2));
            $('.valNbu2').text((money * nbueur.dataPoints[0].y).toFixed(2));
            break;
        case "uah":
            for (var i = 1; i < _kursValutBanksUSD.length; ++i) {
                var PBusd = _kursValutBanksUSD[i].options;
                var PBeur = _kursValutBanksEUR[i].options;
                if (_convertEvent == 'buy') {
                    var val1 = (money / PBusd.data[1].dataPoints[0].y).toFixed(2);
                    var val2 = (money / PBeur.data[1].dataPoints[0].y).toFixed(2);
                    $('.table > table').append('<tr class="delete"><th>' + _kursValutBanksName[i] + '</th><td>' + val1 + '</td><td>' + val2 + '</td></tr>');
                }
                if (_convertEvent == 'sale') {
                    var val1 = (money / PBusd.data[0].dataPoints[0].y).toFixed(2);
                    var val2 = (money / PBeur.data[0].dataPoints[0].y).toFixed(2);
                    $('.table > table').append('<tr class="delete"><th>' + _kursValutBanksName[i] + '</th><td>' + val1 + '</td><td>' + val2 + '</td></tr>');
                }
            }
            $('.valNbu1').text((money / nbuusd.dataPoints[0].y).toFixed(2));
            $('.valNbu2').text((money / nbueur.dataPoints[0].y).toFixed(2));
            break;
    }
}
