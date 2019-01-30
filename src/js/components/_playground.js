// .add
// var div = $('.bg');

// div.css( 'border', '2px solid red' )
//   .add( 'p' )
//   .css( 'background', 'yellow' );

// // .addBack
// $( '.second' ).nextAll() // получаем все элементы, которые являются следующими сестринскими элементами по отношению к текущему элементу
//   .css( 'color', 'green' ) // устанавливаем цвет текста зеленый
//   .addBack() // добавляем предыдущий набор элементов в стеке к текущему набору
//   .css( 'border-left', '10px solid red' ); // устанавливаем сплошную границу размером 10 пикселей красного цвета с левой стороны 
		
// $( '.first' ).nextUntil( '.active' ) // получаем все элементы, которые являются следующими сестринскими элементами по отношению к текущему элементу в наборе соответствующих элементов, но до и не включая элемента соответствующего классу active
//   .css( 'color', 'green' ) // устанавливаем цвет текста зеленый
//   .addBack( '.active' ) // добавляем предыдущий набор элементов в стеке к текущему набору в том случае, если элемент имеет класс active
//   .css( 'border-left', '10px solid red' ); // устанавливаем сплошную границу размером 10 пикселей красного цвета с левой стороны 

// //   .addClass
// $('.p').addClass('new-class');

// // .after
// var h3 ='<h3>Заголовок третьего уровня</h3>', // создаем две переменные
//   hr = document.createElement( 'hr' ); // создаем элемент <hr> и помещаем в переменную
// $( 'p:first' ).after( '<b>Hello world!</b>', ['<h2>Заголовок второго уровня</h2>', h3, hr] ); // добавляем содержимое после первого элемента <p> в документе
// .before
// var h3 ="<h3>Заголовок третьего уровня</h3>", // создаем две переменные
// hr = document.createElement( "hr" ); // создаем элемент <hr> и помещаем в переменную
// $( "p:first" ).before( "<b>Hello world!</b>", ["<h2>Заголовок второго уровня</h2>", h3, hr] ); // добавляем содержимое перед первым элементом <p> в документе



// .attr
// $( 'button' ).click(function() { // задаем функцию при нажатиии на элемент <button>
//   $( 'p' ).attr( 'title' ); // получаем значение атрибута для первого элемента в наборе совпавших элементов 
//   $( 'p:first' ).attr( 'title', 'Подсказка 1' ); // устанавливаем значение атрибута title для первого элемента 
//   console.log( $( 'p:first' ).attr( 'title' ) ); // выводим в консоль значение атрибута title 
//   $( 'p:last' ).attr({ 'title': 'Подсказка 3', // устанавливаем значение атрибутов title и class для последнего элемента 
//     'class': 'last'});
//   console.log( $( 'p:last' ).attr( 'title' ) ); // выводим в консоль значение атрибута title 
//   console.log( $( 'p:last' ).attr( 'class' ) ); // выводим в консоль значение атрибута class 
// });


//  .clone
// $( 'button' ).click(function() { // задаем функцию при нажатиии на элемент <button>
//   $( 'form:first' ).clone() // создаем копию первого элемента формы
//     .appendTo( 'body' ); // вставляем клонированный элемент
// });

// .css
// $( 'button' ).click(function() { // задаем функцию при нажатиии на элемент <button>
//   $( '.div' ).css( 'width', function( index, value ) {
//     return parseFloat( value ) * 1.1;} ); // с помощью функции parseFloat преобразуем строку в число (старое значение) * 1.1});
// });


// .detach
// $( 'button' ).click(function() { // задаем функцию при нажатиии на элемент <button>
//   $( 'p' ).detach(); // удаляем все элементы <p> из DOM
// });

// .empty
// $( 'button' ).click(function() { // задаем функцию при нажатиии на элемент <button>
//   $( 'p' ).empty(); // удаляем все дочерние узлы и содержимое у элементов <p>
// });


// .hasClass
// var div = $('.div');
// console.log($(div).hasClass('test')); // проверяем наличие класса у элемента
// console.log($(div).hasClass('test test2')); // проверяем наличие двух классов у элемента
// console.log($(div).hasClass('test test2 test3')); // проверяем наличие трех классов у элемента
// console.log($(div).hasClass('test3')); // проверяем наличие класса у элемента


// .html
// $('button').click(function() { // задаем функцию при нажатиии на элемент <button>
//   $('p').html('А вот и  <b>обычный абзац</b>'); // устанавливаем новое содержимое элементов <p>
// });

// $('button').click(function() { // задаем функцию при нажатиии на элемент <button> 
//   $('p').html(function( index, currentHtmlString ) { // передаем функцию в качестве параметра метода 	
//     return 'Старое содержимое элемента под индексом ' + index + ': <b>' + currentHtmlString + '</b>'; // устанавливаем новое содержимое элементов, которое содержит индекс элемента и старое содержимое элемента (до изменения)
//   });
// });


// .offset
// $( 'button' ).click(function() { // задаем функцию при нажатиии на элемент <button>
//   var pos = $( 'p' );
//   console.log( pos.offset() ); // выводим в консоль браузера текущие координаты элемента
//   pos.offset({left:100, top:200}); // устанавливаем значения координат для элемента <p>   
//   console.log( pos.offset() ); // выводим в консоль браузера координаты элемента после изменения
// });

// $( 'button' ).click(function() { // задаем функцию при нажатиии на элемент <button>
//   $('p').offset(function( index, currentOffset ) { 
//     var newOffset = {}; // создаем пустой объект
//     newOffset.left = currentOffset.left + 10; // добавляем свойство left (значение left свойства старого объекта + 10) 
//     newOffset.top = currentOffset.top + 10; // добавляем свойство top (значение left свойства старого объекта + 10) 
//     return newOffset; // возвращаем новый объект со свойствами left и top
//   });
// });