
function documentPrint(){	

	let faculty = document.getElementById('faculty').value;
	let printForm = document.createElement('div');

	let facultyName = document.createElement('h1');
		facultyName.innerHTML = faculty;
		facultyName.style.margin = "0 1em";
		facultyName.style.textIndent ="1.5em";
		printForm.appendChild(facultyName);


	let surname = document.getElementById('fullName').getElementsByTagName('input')[0].value;
	let speciality = document.getElementById('speciality').value;
	let course;
	if (document.getElementById('one').checked == true){
		course = '1';
	}
	if (document.getElementById('two').checked == true){
		course = '2';
	}

	if (document.getElementById('three').checked == true){
		course = '3';
	}
	if(document.getElementById('four').checked == true){
		course = '4';
	}

	let studentInformation = document.createElement('p');
		studentInformation.innerHTML = ("Студент " + surname + " специальность " + speciality + " курс " + course + " должен сдавать следующие предметы:");
		studentInformation.style.textIndent ="1.5em";
		printForm.appendChild(studentInformation);
 

	let subjectList = document.createElement('ul');

		if (document.getElementById('oit').checked == true){
			let subject = document.createElement('li');
			subject.innerHTML = document.getElementById('oit').value
			subjectList.appendChild(subject);
		}

		if (document.getElementById('oap').checked == true){
			let subject = document.createElement('li');
			subject.innerHTML = document.getElementById('oap').value
			subjectList.appendChild(subject);
		}

		if (document.getElementById('alocvm').checked == true){
			let subject = document.createElement('li');
			subject.innerHTML = document.getElementById('alocvm').value
			subjectList.appendChild(subject);
		}

		if (document.getElementById('physics').checked == true){
			let subject = document.createElement('li');
			subject.innerHTML = document.getElementById('physics').value
			subjectList.appendChild(subject);
		}

		if (document.getElementById('math').checked == true){
			let subject = document.createElement('li');
			subject.innerHTML = document.getElementById('math').value
			subjectList.appendChild(subject);
		}
	
	printForm.appendChild(subjectList);
	document.body.appendChild(printForm);


}

function newForm(){
	let subjectList = document.createElement('ul');

	if (document.getElementById('oit').checked == true){
		let subject = document.createElement('li');
		subject.innerHTML = document.getElementById('oit').value
		subjectList.appendChild(subject);
	}

	if (document.getElementById('oap').checked == true){
		let subject = document.createElement('li');
		subject.innerHTML = document.getElementById('oap').value
		subjectList.appendChild(subject);
	}

	if (document.getElementById('alocvm').checked == true){
		let subject = document.createElement('li');
		subject.innerHTML = document.getElementById('alocvm').value
		subjectList.appendChild(subject);
	}

	if (document.getElementById('physics').checked == true){
		let subject = document.createElement('li');
		subject.innerHTML = document.getElementById('physics').value
		subjectList.appendChild(subject);
	}

	if (document.getElementById('math').checked == true){
		let subject = document.createElement('li');
		subject.innerHTML = document.getElementById('math').value
		subjectList.appendChild(subject);
	}

	document.body.appendChild(subjectList);


}
	