//Переменная содержащая все что в теге <form>
var forma = document.forms.forma;
var button = document.forms.forma.button;
var picture = 'url(images/123.jpg)';

//Делаем чтобы при клике на галочку открывался div с позицией и повторением картинки
var div = document.getElementById('div1');
forma.checkbox.addEventListener('change', function(){
	if (this.checked==true)
		div.style.display = 'block';
	else
		div.style.display = 'none';
});

//Записываем в переменную тот цвет который ввел пользователь:
forma.addEventListener('submit', function(e){
	var color = forma.color.value;
	var colorOk = /[a-f0-9]{6}/;
	var posX = forma.posX.value;
	var posY = forma.posY.value;
	var x1 = document.getElementsByName('x1');
	var y2 = document.getElementsByName('y2');
	// console.log(posX);
	if(colorOk.test(color)){ //проверяем правильность ввода цвета
		e.preventDefault(); //чтобы оставался номер цвета, и не отправлялся
		if(checkbox.checked){
			document.body.style.backgroundImage = picture;//ставим картинку когда нажата галочка
			document.forma.style.backgroundColor = 'white';
			// document.forma.style.opacity = 0.5;

			if(x1[0].checked){ //определяем какой радио-переключатель выбран
				document.body.style.backgroundPositionX = posX+'px';
			};
			if(x1[1].checked){
				document.body.style.backgroundPositionX = posX+'%';
			};
			if(y2[0].checked){
				document.body.style.backgroundPositionY = posY+'px';
			};
			if(y2[1].checked){
				document.body.style.backgroundPositionY = '-'+posY+'%';
			};

			var repeat=document.getElementsByName('repeat');
  			if(repeat[0].checked){
    			document.body.style.backgroundRepeat = 'repeat';
  			};
  			if(repeat[1].checked){
    			document.body.style.backgroundRepeat = 'no-repeat';
  			};
  			if(repeat[2].checked){
    			document.body.style.backgroundRepeat = 'repeat-x';
  			};
  			if(repeat[3].checked){
    			document.body.style.backgroundRepeat = 'repeat-y';
  			};
 		}
		else	
			document.body.style.background = '#'+color;
		
	}
	else{
		alert('Введите цвет в шестнадцатитиричном формате ("c0c0c0" - строго 6-ть символов), обратите внимание что # вводить не нужно');
	}
});
