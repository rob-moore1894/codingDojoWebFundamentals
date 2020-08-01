$(document).ready(function(){});

displayOrange();

function displayOrange(){
    $(`.display-orange`).html(`<div class="row" id="topRow">
    <img src="orange.jpg" alt="orange">
    <img src="orange.jpg" alt="orange">
    <img src="orange.jpg" alt="orange">
    <img src="orange.jpg" alt="orange">  
</div>
<div class="row" id="bottomRow">
    <img src="orange.jpg" alt="orange">
    <img src="orange.jpg" alt="orange">
    <img src="orange.jpg" alt="orange">
    <img src="orange.jpg" alt="orange">  
</div>`)
}

$('img').click(function(){
    $(this).hide();
})

$(`#restoreBtn`).click(function(){
    displayOrange();
})