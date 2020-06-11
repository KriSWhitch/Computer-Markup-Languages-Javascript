
function messageAlert(){	
	pageName = prompt('Введите имя для создания страницы', "New")
	let myWindow = window.open("", pageName, "width=300,height=200");
	myWindow.document.write("<p>This window's name is: " + myWindow.name + "</p>");
	myWindow.document.write("<button onclick=window.close()>Закрыть окно</button>");
}

function task2(){

	let table, row, cell, i, j;
	table = document.createElement('table');
	table.style.textAlign = 'right';
	table.style.fontFamily = 'monospace';
	table.style.width = '50%';
	table.style.borderSpacing = '0';
	for (i=0; i<13; i++) {
		row = document.createElement('tr');
		for (j=0; j<2; j++) {
			cell = document.createElement('td');
			cell.style.padding = '1.5em';
			cell.style.width = '10%';
			cell.style.border = '1px solid black'
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	document.body.appendChild(table); 
	document.getElementsByTagName('td')[0].innerHTML = 'Информация о браузере: ';
	document.getElementsByTagName('td')[1].innerHTML = navigator.userAgent;
	document.getElementsByTagName('td')[2].innerHTML = 'Версия браузера: ';
	document.getElementsByTagName('td')[3].innerHTML = navigator.appVersion;
	document.getElementsByTagName('td')[4].innerHTML = 'Имя браузера: ';
	document.getElementsByTagName('td')[5].innerHTML = navigator.appName;
	document.getElementsByTagName('td')[6].innerHTML = 'Кодовое имя браузера: ';
	document.getElementsByTagName('td')[7].innerHTML = navigator.appCodeName;
	document.getElementsByTagName('td')[8].innerHTML = 'ОС:  ';
	document.getElementsByTagName('td')[9].innerHTML = navigator.platform ;
	document.getElementsByTagName('td')[10].innerHTML = 'Включена ли поддержка браузера? - ';
	document.getElementsByTagName('td')[11].innerHTML = navigator.javaEnabled();
	document.getElementsByTagName('td')[12].innerHTML = 'Ширина экрана: ';
	document.getElementsByTagName('td')[13].innerHTML = screen.width;
	document.getElementsByTagName('td')[14].innerHTML = 'Высота экрана: ' ;
	document.getElementsByTagName('td')[15].innerHTML = screen.height;
	document.getElementsByTagName('td')[16].innerHTML = 'Глубина цвета: ';
	document.getElementsByTagName('td')[17].innerHTML = screen.colorDepth;
	document.getElementsByTagName('td')[18].innerHTML = 'URL, которые были посещены в данном окне браузера: ' ;
	document.getElementsByTagName('td')[19].innerHTML = history.state;
	document.getElementsByTagName('td')[20].innerHTML = 'URL текущего документа: ';
	document.getElementsByTagName('td')[21].innerHTML = window.location;
	document.getElementsByTagName('td')[22].innerHTML = 'Путь к загруженному документу: ';
	document.getElementsByTagName('td')[23].innerHTML = location.href;
	document.getElementsByTagName('td')[24].innerHTML = 'Имя домена загруженного документа: ';
	document.getElementsByTagName('td')[25].innerHTML = location.hostname;

}
	