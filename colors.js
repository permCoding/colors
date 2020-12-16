arr_td = [0, 0, 0];
arr_tx = [0, 0, 0];

sdvig = 100; // текущее значение
d_sdv = 5; // шаг сдвига

var pos;
var pos_x;
var pos_y;
var color_td;
var color_tx;
var param;
var paramValue;


function fill_table(){
	gen_color();
	for (var i=0; i<size*size; i++){ // меняем цвет фона ячеек
		id_num = 'td_' + i.toString();
		document.getElementById(id_num).style.backgroundColor = (i==pos)? color_tx: color_td;
	}
}

function printColor(posX, posY){
	ugadal = (posX==pos_x && posY==pos_y);
	d_sdv = 1 + (sdvig-6)/10|0;	if (d_sdv<1) d_sdv = 1;
	sdvig += ugadal ? -d_sdv: 2*d_sdv;
	if (sdvig<1) sdvig = 1;	if (sdvig>120) sdvig=120;	
	
	document.getElementById('pole').style.backgroundColor = ugadal ? '#afa': '#f33';
	if (sdvig < sdvig_min)
		next_page();
	else
		fill_table();
}

function check(s){
	if (s.length<2) s = '0' + s;
	return s;
}

function gen_arr(){
	napr = 2*Math.random()<1? -1: 1;
	tmp = 256 - sdvig;
	for (var i=0; i<3; i++) {
		dec = sdvig/2|0 + Math.floor(tmp*Math.random());
		arr_td[i] = +dec;
		arr_tx[i] = +dec + napr*(sdvig/2|0);
	}
}

function gen_color(){
	gen_arr();
	color_td = '#'; color_tx = '#';
	for (var i=0; i<3; i++){
		color_td += check(arr_td[i].toString(16));
		color_tx += check(arr_tx[i].toString(16));
	}
	pos = Math.floor(size*size*Math.random());
	pos_y = pos/size|0; pos_x = pos%size;
}

var print_table = function (size){
	dw = document.body.clientWidth // Ширина браузера
	w_cell = (dw*0.55/size)|0;
    document.write("<table id=pole class=pole align=center>");
    for (i = 0; i < size; i++) {       
		document.write("<tr>");
		for (j = 0; j < size; j++) {
			td_num = (j+i*size).toString();
			ts = '<td id=td_' + td_num + ' align=center height=' + w_cell + ' width=' + w_cell;
			ts += ' onclick=printColor(' + j + ',' + i + ')>' + td_num + '</td>';
			document.write(ts);
		}
		document.write("</tr>");
	}
	document.write("</table>");
}

function next_page(){
	sdvig_min -= 2;	if (sdvig_min < 3) sdvig_min = 3;
	nextNum = (size + 1).toString(10);
	nextSdvig = sdvig_min.toString(10);
	document.location = "index.html?params=" + nextNum + "=" + nextSdvig;
}