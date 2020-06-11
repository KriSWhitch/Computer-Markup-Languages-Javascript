
function task2(){
    let table, row, cell, i, j;
            table = document.createElement('table');
            table.style.textAlign = 'right';
            table.style.fontFamily = 'monospace';
            for (i=1; i<10; i++) {
                row = document.createElement('tr');
                for (j=1; j<10; j++) {
                    cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');
                    cell.appendChild(document.createTextNode(i*j));
                    cell.style.padding = '4px';
                    cell.style.width = 100 / 9 + '%';
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            document.body.appendChild(table); 
}

function task3 () {
    
    function doIt() {
        let a; // радиус окружности
        let b; // стоп-сигнал
        let leng_of_circle; // длина окружности
        let area_of_circle; // площадь соответственно
        a = +prompt("Введите a: "); // Ввод с преобразованием в число
        if (isNaN(a)) {
            alert("Строка преобразовалась в NaN. Не число");
            return;
        }

        b = +prompt("Введите b: "); // Ввод с преобразованием в число
        if (isNaN(b)) {
            alert("Строка преобразовалась в NaN. Не число");
            return;
        }

        let s = '<table border="3px" width="600px" align="center" cellspacing="4px" cellpadding="2px" bgcolor="white"> <tr><td bgcolor="#87CEFA">Радиус</td> <td bgcolor="#87CEFA">Длина окружности</td> <td bgcolor="#1E90FF">Площадь окружности</td> </tr>';
        do {
            // создаём новую строку в таблице, и в неё добавляем ячейки
            leng_of_circle = Math.round(2 * 3.14 * a);
            area_of_circle = Math.round(3.14 * a * a);
            s += "<tr><td>" + a.toFixed(1) + "</td><td>" + leng_of_circle + "</td><td>" + area_of_circle + "</td></tr>";
            a = a + 0.3; // счётчик
        }
        while (a <= b);
        document.write(s + "</table>");
    }
    doIt();

}

function task4() {
    // first table
		let a = Number(17);

		let firstTable = document.getElementById('firstNumber');

		task(a, firstTable);
		// second table
		let b = Number(123.672354);

		let secondTable = document.getElementById('secondNumber');

		task(b, secondTable);
		
		function task(num, elem) {
	for(let i = 0; i < 5; i++) { 
			let row = document.createElement('tr');
				if (i === 0){
					for(let j = 0; j < 4; j++){
						let td = document.createElement('td');
						if (j === 0) { td.innerHTML = 'Число'; }
						if (j === 1) {	td.innerHTML = 'Метод'; }
						if (j === 2) { td.innerHTML = 'Результат'; }
						if (j === 3) { td.innerHTML = 'Описание метода'; }
						row.appendChild(td);
					}
				}
				if (i === 1){
					for(let j = 0; j < 4; j++){
						let td = document.createElement('td');
						if (j === 0) { td.innerHTML = num; }
						if (j === 1) {	td.innerHTML = 'toExponential(2)'; }
						if (j === 2) { td.innerHTML = num.toExponential(2); }
						if (j === 3) { td.innerHTML = 'Метод toExponential() возвращает строку, представляющую объект a в экспоненциальной записи.'; }
						row.appendChild(td);
					}
				}
				if (i === 2){
					for(let j = 0; j < 4; j++){
						let td = document.createElement('td');
						if (j === 0) { td.innerHTML = num; }
						if (j === 1) {td.innerHTML = 'toFixed(1)'; }
						if (j === 2) { td.innerHTML = num.toFixed(1); }
						if (j === 3) { td.innerHTML = 'Метод toFixed() форматирует число, используя запись с фиксированной запятой.'; }
						row.appendChild(td);
					}
				}
				if (i === 3){
					for(let j = 0; j < 4; j++){
						let td = document.createElement('td');
						if (j === 0) { td.innerHTML = num; }
						if (j === 1) { td.innerHTML = 'toPrecision(2)'; }
						if (j === 2) { td.innerHTML = num.toPrecision(2); }
						if (j === 3) { td.innerHTML = 'Метод toPrecision() возвращает строку, представляющую объект a с указанной точностью.'; }
						row.appendChild(td);
					}
				}
				if (i === 4){
					for(let j = 0; j < 4; j++){
						let td = document.createElement('td');
						if (j === 0) { td.innerHTML = num; }
						if (j === 1) {td.innerHTML = 'toString(2)'; }
						if (j === 2) { td.innerHTML = num.toString(2); }
						if (j === 3) { td.innerHTML = 'Метод toString() возвращает строковое представление указанного объекта a.'; }
						row.appendChild(td);
					}
				}
			elem.appendChild(row);
		}
}
}