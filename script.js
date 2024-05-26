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


