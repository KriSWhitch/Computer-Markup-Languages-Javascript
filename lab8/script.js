//Задание №1

$("#changeTextColor").mouseover(function () {		
	$(this).css("color", "red");
});

$("#changeTextColor").mouseout(function () {
	$(this).css("color", "black");
});

//Задание №2 changeTextFontSize

$("#changeTextFontSize").mouseover(function () {
	$(this).css("font-size", "32px");
});

$("#changeTextFontSize").mouseout(function () {
	$(this).css("font-size", "16px");
});
//Задание №3

$("#replaceImage").mouseover(function () {
	$(this).attr("src", "img/paint.gif");
});

$("#replaceImage").mouseout(function () {
	$(this).attr("src", "img/e82kJMLdJ_Q.jpg");
});

//Задание №4 textToImage

$("#textToImage").mouseover(function () {
	$(this).html("<img style=\"width:150px; height:150px;\" src=\"img/paint.gif\">");
});

$("#textToImage").mouseout(function () {
	$(this).html("<p >Наведись на этот текст чтобы появилась картинка</p>");
});

//Задание №5 imageSizeScale

$("#imageSizeScale").mouseover(function () {
	$(this).attr("style", "width:500px;");
});

$("#imageSizeScale").mouseout(function () {
	$(this).attr("style", "width:200px;");
});

//Задание №6

$("#textBorder").dblclick(function () {
	$(this).css("border", "1px solid black");
});
