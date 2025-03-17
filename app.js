//getElementByld() - это метод объекта document
//который позволяет найти элекмент на веб-странице по его идентификатору
const resultElement= document.getElementById('result');//выбираем элемент с идентификатором result
const input1= document.getElementById('input1');//выбираем элемент с идентификатором input1
const input2= document.getElementById('input2');//выбираем элемент с идентификатором input2
const plus8tn= document.getElementById('plus8tn');//выбираем элемент с идентификатором plus8tn
const submit8tn= document.getElementById('submit8tn');//выбираем элемент с идентификатором submit8tn
//Обработчик событий - Событие onclick - это событие JavaScript, которое активируется,
//когда пользователь кликает на определенный элемент страницы.
plus8tn.onclick = function(){
    action='+';
}
function printResult(result){
        //if(result<0){
        //      resultElement.style.color='red';
        //}
        //else{
        //      resultElement.style.color='red';
        //}
         resultElement.textContent=result;//Установка нового текста с помощью textContent
         //полностью удалит все старое содержимое и запишет новое текстовое значение
}
function computeNumberWithAction(input1,input2,actionSymbol){
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
        if(actionSymbol=='+'){
                return num1+num2;
        }
}
submit8tn.onclick = function(){
    const result = computeNumberWithAction(input1,input2,action);
    printResult(result);
}