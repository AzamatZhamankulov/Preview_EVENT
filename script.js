// const btn = document.querySelector('button'),
//       overlayBtn = document.querySelector('.overlay'),
//       link = document.querySelector('a'),
//       btns = document.querySelectorAll('button');

//! not correct
// btn.onclick = function() { // first one
//     alert('clicked');
// };

// btn.onclick = function() { // second time it will handle only this
//     alert('licked');
// };

//!correct way we can handle in one event several events !!!!!!
// btn.addEventListener('click', (e) => { // we can write e or event as well
//     alert('Clicked correctly');
// });

// btn.addEventListener('mouseenter', (event) => {
//     // console.log('It is HOVER!');
//     // console.log(event);
//     console.log(event.target); // we can get tag targeted tag og the event and do anything romove or change
//     event.target.remove(); 
// });

//! removeeventlistner
// const showTheTargetElement = (e) => {
//     console.log(e.target);
// }

// btn.addEventListener('click', showTheTargetElement); // it will show target
// btn.removeEventListener('click', showTheTargetElement); // here the event will be removed

// let i = 0;
// const showTheTargetElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 2) {
//         btn.removeEventListener('click', showTheTargetElement);
//     } //! it will remove the event when i == 2
// };

// btn.addEventListener('click', showTheTargetElement);

//todo first creat div with class name overlay

// const showMeTheTarget = (e) => {
//     // console.log(e.target); // showing only the target element
//     console.log(e.currentTarget); // showing the current target element
//     console.log(e.type);
// };

// btn.addEventListener('click', showMeTheTarget);
// overlayBtn.addEventListener('click', showMeTheTarget);


//! cancel or reject of the default events on the browser

// link.addEventListener('click', function(eventCancel) {
//     eventCancel.preventDefault(); //preventing the event

//     console.log(eventCancel.target);
// });


//! how to handle one event to several elements

// const showMeTheTarget = (e) => {
//     console.log(e.target); // showing only the target element
//     console.log(e.type);
// };
// btns.forEach(itemBtn => {
//     itemBtn.addEventListener('click', showMeTheTarget, {once: true});
// }); // now the event click will work for all buttons //! {once: true} will work only one time


//! here we changed HTML and did some practice with selectors

//todo 1) Выбрать input типа checkbox.
//todo 2) Выбрать input типа checkbox, НЕ отмеченный.
//todo 3) Найти все элементы с id=message или message-*.
//todo 4) Найти все элементы с id=message-*.
//todo 5) Найти все ссылки с расширением href="...zip".
//todo 6) Найти все элементы с атрибутом data-action, содержащим delete в списке (через пробел).
//todo 7) Найти все элементы, у которых ЕСТЬ атрибут data-action, но он НЕ содержит delete в списке (через пробел).
//todo 8) Выбрать все чётные элементы списка #messages.
//todo 9) Выбрать один элемент сразу за заголовком h3#widget-title на том же уровне вложенности.
//todo 10) Выбрать все ссылки, следующие за заголовком h3#widget-title на том же уровне вложенности.
//todo 11) Выбрать ссылку внутри последнего элемента списка #messages.

// const input1 = document.querySelector('input'),
//       inputChecked = document.querySelector('input:checked'),
//       messageId = document.querySelectorAll('[id|="message"]'),
//       messageIdAll = document.querySelectorAll('[id^="message-"]'),
//       linksZip = document.querySelectorAll('a[href$=".zip"]'),
//       dataActionDelete = document.querySelectorAll('[data-action~="delete"]'),
//       dataActionNotDel = document.querySelectorAll('[data-action]:not([data-action~="delete"]'),
//       messageEven = document.querySelectorAll('#messages li:nth-child(2n)'),
//       titleWidgetAllNextElements = document.querySelectorAll('h3#widget-title + *'),
//       TWAllNextAnchors = document.querySelectorAll('h3#widget-title ~ a'),
//       lastChildMessages = document.querySelectorAll('#messages li:last-child a');

// console.log(input1);
// console.log(inputChecked);
// console.log(messageId);
// console.log(messageId);
// console.log(messageIdAll);
// console.log(linksZip);
// console.log(messageEven);
// console.log(titleWidgetAllNextElements);
// console.log(TWAllNextAnchors);
// console.log(lastChildMessages);
