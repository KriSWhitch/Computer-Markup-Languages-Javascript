function task1(){
function Gruppa(n, spec, kolich){
	this.n = n;
	this.spec = spec;
	this.kolich = kolich;
	this.add_stud = function add_stud(k){
		this.kolich += k;
		document.write('В группу ' + this.n + " добавили " + k + ' студентов. <br/>');
	}
	this.sub_stud = function(k){
		this.kolich -= k;
		document.write('Из группы ' + this.n + ' убрали ' + k + ' cтудентов. <br/>');
	}
	this.get_students = function(){
		document.write('Кол-во студентов в группе: ' + this.kolich + '<br/>');
	}
}
	group5 = new Gruppa(5, 'ПОИТ', 30);
	group2 = new Gruppa(2, 'ИСиТ', 28);
	group9 = new Gruppa(9, 'ПОИБМС', 29);
	group2.sub_stud(2);
	group2.add_stud(3);
	group9.add_stud(1);
	group9.sub_stud(5);
	group5.sub_stud(12);
	group5.add_stud(5);
	group2.get_students();
	group5.get_students();
	group9.get_students();
	document.write('kolich' in Gruppa);
	document.write('<br/>')
	document.write(typeof group5.spec);
}
function task2(){
     function Student(name, surname, physics_grade, math_grade, informatics_grade){
     	this.name = name;
     	this.surname = surname;
     	this.physics_grade = physics_grade;
     	this.math_grade = math_grade;
     	this.informatics_grade = informatics_grade;
     	this.name_and_surname = function name_and_surname(){
     		alert('Имя: '+ this.name + ' ' + 'Фамилия: ' + this.surname + ' ');
     	}
     	this.avg_grade = function avg_grade(){
     		this.avgs_grade = (this.physics_grade + this.math_grade + this.informatics_grade)/ 3  ;
     		document.write('Средний балл студента ' + this.name + " " + this.surname + ': '+ this.avgs_grade.toFixed(2) + '<br/>');
     	}
     	this.student_information = function student_information(){
     		document.write('Имя: ' + this.name + '<br/>' + " Фамилия: "+ this.surname + '<br/>' + ' Физика: ' + this.physics_grade + '<br/>'+ ' Математика: ' + this.math_grade + '<br/>'+ ' Информатика: ' + this.informatics_grade + '<br/>')
     	}
     	this.show_second_name = function show_second_name(){
     	document.write('Отчество: ' + this.second_name + '<br/>');
     	}
     }
     student1 = new Student('Алексей', "Муковозчик", 7, 6 ,10);
     student2 = new Student("Валентин", "Пушков", 4, 5, 4);
     student3 = new Student("Инокентий","Сухинов",2,2,2);
     Student.prototype.second_name = this.second_name;
     student1.second_name = 'Витальевич'
     student2.second_name = 'Сергеевич'
     student3.second_name = 'Викторович'
     student3.show_second_name();
     student3.student_information();
     student2.show_second_name();
     student2.student_information();
     student1.name_and_surname();
     student1.avg_grade();
     student1.show_second_name();
	 student1.student_information();
	 document.write('name' in Student);
	}
function task3(){
		let arr = ['I', 'You', 'We'];
		function show_arr(){
			for(i = 0; i < arr.length; i++){
			document.write(i +': ' + arr[i] + ' ');
		}
		document.write('<br/>');
	}
	    show_arr();
		delete arr[2];
		show_arr();
		document.write(1 in arr);
	    //document.write('spec' in group5);
	    document.write('<br/>');
	    document.write(arr instanceof Array);
	    document.write('<br/>');
	    document.write(arr instanceof String);
	    document.write('<br/>');
	    document.write(arr instanceof Object);
	    function return_5(){
	    	return 5;
	    }
	    document.write('<br/>' + return_5());
	    document.write('<br/>');
	    document.write(typeof arr);
	    document.write('<br/>');
	    document.write(typeof return_5());
	    document.write('<br/>');
	}
