$(document).ready(function(){//I need jquery to run!

	console.log("testing...");



});
var searchTerms = ['fox',, 'cow', 'chicken'];

var createButton = function(name){
	var button = $('<button>');
	button.text(name);
	button.click(function(){
		gifQuery($(this).text());
	});
	$('.button-container').append(button);
}
var createButtonFromArr = function(arr){
	for(var i = 0; i < arr.length; i++){
		createButton(arr[i]);
	}
}
createButtonFromArr(searchTerms);