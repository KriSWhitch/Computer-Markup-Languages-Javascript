function task1() {
    let name
    alert ("Вас приветствует Валентин")
    name = prompt ("Как вас зовут?")
    alert ("Добро пожаловать, " + name)
    let choose = confirm ("Хотите стать Web-дизайнером?")
    
    if ( choose == true) {
        alert("Начинайте изучение с CSS и JavaScript!")
    }
    else {
        alert("Возвращайтесь если передумаете!")
    }
}

function task2(){
    function fun1(){
        let x = 10
        let y = 5
        let z = x + y
        document.write("Сумма двух чисел = ", z)
    }
    function fun3(){
        let x = 22
        let y = "5"
        let z = x + y
        document.write("<br>")
        document.write("Сумма числа и строки = ", z)
    }
    function fun2(){
        let x = "10"
        let y = "5"
        let z = x + y
        document.write("<br>")
        document.write("Сумма двух строк равна = ", z)
     }
     function fun4(){
         let x = "22"
         let y = 5
         let z = x + y
         document.write("<br>")
         document.write("Сумма строки и числа = ", z)
      }
      function fun5(){
          document.write("<br>")
          document.write("Результатом сложения строки и числа всегда будет... ")
          alert("строка!")

      }
    fun1()
    fun2()
    fun3()
    fun4()
    fun5()
}

function task3 () {
        let x = 1
        let y = 1000
        let q = (35*y - 25*x)/5 + 232
        let p = (8*y/x+5*x/y-43)*6
        let z = q%p
        alert("Результат от деления с остатком = "+ z)
        document.write("Результат от деления с остатком = " + z)
}

function task4() {
    function fun1() {
    let x = prompt("Введите X: ");
    if (x < 20 || x > 40 && x != 15 && x % 5 == 0) {
        document.write ("Правильное значение!")
    }
    else document.write ("Не правильное значение")
}
    function fun2(){
    let y = prompt("Введите Y: ");
    if (y < 30 || y > 100 && y != 10 && y % 2 == 0) {
        document.write ("Правильное значение!")
    }
    else document.write ("Не правильное значение")
    }

fun1()
fun2()
}

function task5(){
    function fun1() {
    let x = prompt ("Введите X: ")
    let y = prompt ("Введите Y: ")
    if (x % y == 0) {
        document.write ("Числа делятся без остатка")
    }
    else document.write ("Числа делятся с остатком")
    document.write("<br>")
    }

    function fun2() {
    let x = prompt ("Введите X: ")
    let y = prompt ("Введите Y: ")
    let result = (x % y == 0) ? document.write ("Числа делятся без остатка") : document.write ("Числа делятся с остатком")
    }

    fun1()
    fun2()
}

function task6(){
    function getWeekDay(date) {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
        return days[date.getDay()]
      }
      
      let date = new Date()
      alert( getWeekDay(date) )
      let day = getWeekDay(date)
      switch (day){
        case 'ПН': {
            document.write ("Понедельник")
            break
        }
        case 'ВТ': {
            document.write ("Вторник")
            break
        }
        case 'СР': {
            document.write ("Среда")
            break
        }
        case 'ЧТ': {
            document.write ("Четверг")
            break
      }
        case 'ПТ': {
            document.write ("Пятница")
            break
        }
        case 'СБ': {
            document.write ("Суббота")
            break
        }
        case 'ВС': {
            document.write ("Воскресенье")
            break
        }
      }
      

}

function task7(){
    try {
        try {
          throw new Error('oops');
        }
        catch (ex) {
          console.error('inner', ex.message);
          throw ex;
        }
        finally {
          console.log('finally');
          return;
        }
      }
      catch (ex) {
        console.error('outer', ex.message);
      }

}