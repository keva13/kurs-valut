
/// <reference path="chartRender.ts" />

var _kursValutGlobalValute='usd';
function start() {
	var TodayDate = new Date();

	if (TodayDate.getMonth()<10)
		var datehelper = '0';
	$('.dateToday-date').html(TodayDate.getDate() + '.' + datehelper + TodayDate.getMonth());
	GetUSD();

}



function GetUSD(){
    _kursValutGlobalValute='usd';
	$('.EUR').hide();
	$('.USD').hide();
	$('#chartContainerUSD0').show();
	$('#btn-usd').removeClass("btn-default");
	$('#btn-usd').addClass("btn-primary");
	$('#btn-eur').removeClass("btn-primary");
	$('#btn-eur').addClass("btn-default");

	$('.bank-buy').text(parseFloat(Number(_kursValutBanksUSD[1].options.data[1].dataPoints[0].y).toFixed(2)));
	$('.bank-sale').text(parseFloat(Number(_kursValutBanksUSD[1].options.data[0].dataPoints[0].y).toFixed(2)));

	$('.nbu-buy').text(parseFloat(Number(_kursValutBanksUSD[0].options.data[0].dataPoints[0].y).toFixed(2)));
	$('.nbu-sale').text(parseFloat(Number(_kursValutBanksUSD[0].options.data[0].dataPoints[0].y).toFixed(2)));


	$('.bank-sale').append("<span class='glyphicon glyphicon-arrow-up'></span>");
	if (_kursValutBanksUSD[1].options.data[0].dataPoints[0].y < _kursValutBanksUSD[1].options.data[0].dataPoints[1].y)
		$('.bank-sale > .glyphicon').removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");

	$('.bank-buy').append("<span class='glyphicon glyphicon-arrow-up'></span>");
	if (_kursValutBanksUSD[1].options.data[1].dataPoints[0].y < _kursValutBanksUSD[1].options.data[1].dataPoints[1].y)
		$('.bank-buy > .glyphicon').removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");




	$('.nbu-buy').append("<span class='glyphicon glyphicon-arrow-up'></span>");
	$('.nbu-sale').append("<span class='glyphicon glyphicon-arrow-up'></span>");
	if (_kursValutBanksUSD[0].options.data[0].dataPoints[0].y < _kursValutBanksUSD[0].options.data[0].dataPoints[1].y){
		$('.nbu-buy > .glyphicon').removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
		$('.nbu-sale > .glyphicon').removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
    }



}



function GetEUR() {
    _kursValutGlobalValute='eur';
	$('.EUR').hide();
	$('.USD').hide();
	$('#chartContainerEUR0').show();
	$('#btn-usd').removeClass("btn-primary");
	$('#btn-usd').addClass("btn-default");
	$('#btn-eur').removeClass("btn-default");
	$('#btn-eur').addClass("btn-primary");

    $('.bank-buy').text(parseFloat(Number(_kursValutBanksEUR[1].options.data[1].dataPoints[0].y).toFixed(2)));
	$('.bank-sale').text(parseFloat(Number(_kursValutBanksEUR[1].options.data[0].dataPoints[0].y).toFixed(2)));

    $('.nbu-buy').text(parseFloat(Number(_kursValutBanksEUR[0].options.data[0].dataPoints[0].y).toFixed(2)));
	$('.nbu-sale').text(parseFloat(Number(_kursValutBanksEUR[0].options.data[0].dataPoints[0].y).toFixed(2)));

	$('.bank-sale').append("<span class='glyphicon glyphicon-arrow-up'></span>");
	if (_kursValutBanksEUR[1].options.data[0].dataPoints[0].y < _kursValutBanksEUR[1].options.data[0].dataPoints[1].y)
		$('.bank-sale > .glyphicon').removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");


	$('.bank-buy').append("<span class='glyphicon glyphicon-arrow-up'></span>");
	if (_kursValutBanksEUR[1].options.data[1].dataPoints[0].y < _kursValutBanksEUR[1].options.data[1].dataPoints[1].y)
		$('.bank-buy > .glyphicon').removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");




	$('.nbu-buy').append("<span class='glyphicon glyphicon-arrow-up'></span>");
	$('.nbu-sale').append("<span class='glyphicon glyphicon-arrow-up'></span>");
	if (_kursValutBanksEUR[0].options.data[0].dataPoints[0].y < _kursValutBanksEUR[0].options.data[0].dataPoints[1].y){
		$('.nbu-buy > .glyphicon').removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
		$('.nbu-sale > .glyphicon').removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
	}




}