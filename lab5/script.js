function task1(){
	var arrAll = [];
	function getEls(el) {
	  var chNodes,
		  i;
	  arrAll.push(el);
	  if (el.hasChildNodes()) {
		chNodes = el.childNodes;
		for (i = 0; i < chNodes.length; i++) {
		  getEls(chNodes[i]); // вызываем рекурсивно
		}
	  }
	}
	getEls(document);
	alert(arrAll.join('\n'));
}

function task2(){
	for(let i=0; i<document.body.childNodes.length; i++) {
		let child = document.body.childNodes[i];
		alert(child.tagName);
	   }
}

function task3(){
	let firstSpan = document.getElementsByTagName('span')[0].textContent;
	alert(firstSpan);
	alert(document.getElementsByTagName('span')[0].textContent);
}

function task4(){
	let firstMark = Number(document.getElementsByTagName('table')[1].getElementsByTagName('tr')[1].getElementsByTagName('td')[2].innerHTML);
	let secondMark = Number(document.getElementsByTagName('table')[1].getElementsByTagName('tr')[2].getElementsByTagName('td')[2].innerHTML);
	let thirdMark = Number(document.getElementsByTagName('table')[1].getElementsByTagName('tr')[3].getElementsByTagName('td')[2].innerHTML);
	let fourthMark = Number(document.getElementsByTagName('table')[1].getElementsByTagName('tr')[4].getElementsByTagName('td')[2].innerHTML);
	let fifthMark = Number(document.getElementsByTagName('table')[1].getElementsByTagName('tr')[5].getElementsByTagName('td')[2].innerHTML);
	let avgMark = ((firstMark+secondMark+thirdMark+fourthMark+fifthMark)/5).toFixed(2);
	document.getElementsByTagName('span')[1].innerHTML += " " + avgMark;
}
	