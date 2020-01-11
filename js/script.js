function init() {

let bar = 0

$("#one-plus-button").click(function() {
	bar = bar + 1
	$("#progressBar").attr("style", "width: " + bar + "%")
})

$("#three-plus-button").click(function() {
	bar = bar + 3
	$("#progressBar").attr("style", "width: " + bar + "%")
})
$("#seven-plus-button").click(function() {
	bar = bar + 7
	$("#progressBar").attr("style", "width: " + bar + "%")
})	

}

$(document).ready(init);