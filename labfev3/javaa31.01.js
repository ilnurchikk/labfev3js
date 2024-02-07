
  // объявляем функцию stringFrom
  //function stristringFrom() {
   // console.log('Вы вызвали функцию stringFrom!');
    
  //}
  //stristringFrom();
  // function – ключевое слово, которое означает, что мы создаём функцию
  // stringFrom – имя функции
  // () – круглые скобки, внутри которых при необходимости описываются параметры
  // { ... } – тело функции

  let age = 29;
  if(age > 30) {
    console.log("ВАм больше 30 лет");
  }
  else if(age==30){
    console.log("вам ровно 30лет");
  }
  else {
    console.log("вам меньше 30 лет");
  }

  let agee = 18;
  UserAct = agee > 18 ? "доступ разрешен" :
  agee == 18 ? "Доступ разрешен вам 18 лет":
  "доступ запрещен. нет 18"
  console.log(UserAct)
///////////////////////////////////////////////////////////////////////
  let dayOfWeek = "Tuesday";
  switch(dayOfWeek)
  {
    case "Sunday":
        console.log("Сегодня воскресенье");
        break;
    case "Monday":
        console.log("Сегодня понедельник");
        break;
  case "Tuesday":
          console.log("Сегодня вторник");
          break;
  case "Wednesday":
            console.log("Сегодня среда");
            break;
  }
/////////////////////////////////////////////////////////

for (let i = 2; i <= 5; i++){
    console.log(i)

}

///////////////////////////////////////////////////// массив, length метод
const my_arr = ["a", "b", "c", "d"]
  for(let i = 1; i < my_arr.length; i++){    
    console.log(my_arr[i]);
  }

////////////////////////////////// массив in индексы of
const may_ar = ["a", "b", "c", "d"]
for (i in may_ar){
  console.log(i);
}
for (i of may_ar){
  console.log(i);
}
/////////////////////////////////// цикл while -проверка,  do действие, проверка условия
let x = 0;

while (x < 5) {
  console.log(x);
  x++; ///повышение
}
let y = 0;
do{
  console.log(y);
  y++;
}while (y < 5)

////////////////////// 

