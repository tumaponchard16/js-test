/*var elements = $("[data-attr='bar']"); //jquery object
			elements.css("color", "blue");*/

			// var el = $('#hello-world');
			// var textBox = $('#text-box');
			
			// var span = document.createElement("span");
			// span.innerHTML = "This is a span element";
			// el.append(span);

			// el.append('<h1>some kind of text to append</h1>, span');/*Append some html code form the original html*/
			// el.prepend('<p>This is some content form the beginning</p>'); /*Add some content at the beginning from the original html*/

			// el.before('<div>Some content before the div tag</div>');
			// el.after('<div>Some content after the div tag</div>');

			// el.empty(); /*clear out element*/
			// el.remove(); /*completely remove the element form the element*/

			// var htmlContent = el.html(); /*get all the content including the tags*/
			// var txtContent = el.text(); /*get only the text*/
			// var textBoxValue = textBox.val(); /*get tha value from the textbox*/

			// textBox.val('This is a new value'); /*setting up new value to the textbox*/

			//el.html("some text"); /*replace the html text form that id*/ 

			// console.log(htmlContent);
			// console.log(txtContent);
			// console.log(textBoxValue);

			// $('p').click(function(e){
			// 	alert('hello alert');
			// });

			// $(document).on('click', 'p',  function(e){
			// 	alert('hello alert');
			// });

			// $('p').on({
			// 	click: function(e){
			// 		$(e.target).append('You clicked the element');
			// 	},
			// 	mouseenter: function(e){
			// 		$(e.target).append('You clicked the element');
			// 	}
			// }); 

			// $(document).on({
			// 	click: function(e){
			// 		$(e.target).append('You clicked the element');
			// 	},
			// 	mouseenter: function(e){
			// 		$(e.target).append('You clicked the element');
			// 	}
			// }, 'p');

/*manipulating sytle*/
// var first = $('#first');
// var paragraph = $('p');

// first.css('color', 'blue'); /*bad practice*/
// first.css('background-color', 'yellow'); /*bad practice*/
// first.css({
// 	color: 'red',
// 	backgroundColor: 'yellow'
// })

// first.addClass('one two');
// first.removeClass('one');
// first.toggleClass('one two');

// alert(first.hasClass('one'));

/*Working with attributes*/
// var content = $('#content');
// var elements = $('ul#people li[data-nickname]');

// // var title = content.attr('title');
// // content.attr('hidden', true);
// // content.removeAttr('hidden');
// // console.log(title);

// // var name = elements.attr('data-nickname'); /*this will get only the first element*/
// elements.each(function(index, el){
// 	var $el = $(el);
// 	var name = $el.attr('data-nickname');
// 	console.log(name);
// });

/*Working with animation*/
// var foo = $('#foo');
// // foo.fadeTo(1000, 0.3);
// foo.slideUp();
// foo.slideDown();
// foo.slideToggle();

/*working with ajax*/
// var content = $('#content');
// content.load('external.html h1');

// var http = $.ajax({
// 	method: 'GET',
// 	url: 'data.json',
// 	dataType: 'text'
// });
// http.done(function(obj){
// 	var person = JSON.parse(obj);
// 	console.log(person.firstName);
// }).fail(function(obj){
// 	alert('Something went wrong');
// });

// var http = $.ajax({
// 	method: 'GET',
// 	url: 'data.json',
// 	dataType: 'json'
// });
// http.done(function(obj){
// 	console.log(obj.firstName);
// }).fail(function(obj){
// 	alert('Something went wrong');
// });

// var http = $.getJSON({
// 	url: 'data.json'
// });

// // var http = $.get({
// // 	url: 'data.json',
// // 	dataType: 'json'
// // });
// http.done(function(obj){
// 	console.log(obj.firstName);
// }).fail(function(obj){
// 	alert('Something went wrong');
// });

/*building some kind of accordion*/
$('dl.accordion dd').hide(); 

$(document).on('click', '[data-acc-id]', function(e){
	e.preventDefault();
	var selector = $(e.target).attr('data-acc-id');
	var $target = $(selector);

	var active = $target.attr('data-active');

	$('dl.accordion dd[data-active]')
		.removeAttr('data-active')
		.slideUp();

	if(active){
		return;
	}

	$target
		.attr('data-active', true)
		.slideDown();
});
