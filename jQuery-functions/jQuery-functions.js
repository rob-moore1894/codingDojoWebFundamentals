$(document).ready(function(){
    console.log(`Document loaded! `)
});

$(`#clickBtn`).click(function(){
    alert("You clicked the button... yay!"); 
});

$(`#hideBtn`).click(function(){
    $(this).siblings().hide();
});

$(`#showBtn`).click(function(){
    $(this).siblings().show(); 
})

$(`#toggleBtn`).click(function(){
    $(this).siblings().toggle();
})

$(`#slideDownBtn`).click(function(){
    $(this).siblings().slideDown();
})

$(`#slideUpBtn`).click(function(){
    $(this).siblings().slideUp();
})

$(`#slideToggleBtn`).click(function(){
    $(this).siblings().slideToggle();
}); 

$(`#fadeInBtn`).click(function(){
    $(this).siblings().fadeIn();
})

$(`#fadeOutBtn`).click(function(){
    $(this).siblings().fadeOut();
})

$(`#addClassBtn`).click(function(){
    $(this).addClass('red')
})

$(`#beforeBtn`).click(function(){
    $(this, "p").before( document.createTextNode("CUTSIES! "))
})

$(`#afterBtn`).click(function(){
    $(this).siblings().after( document.createTextNode("Now I am too! "))
})

$(`#appendBtn`).click(function(){
    $(this).siblings().append("<p>Add another</p>")
})

$(`#htmlBtn`).click(function(){
    $(this).siblings().html(`<ul>
        <li>Now</li>
        <li>I'm</li>
        <li>a</li>
        <li>List</li>
    </ul>`);
})

$(`#attrBtn`).click(function(){
    alert($(this).attr("class"));
})

$(`#valBtn`).click(function(){
    var value = $(`input`).val();
    if (value != ''){
        alert(`Your value is ${value}`);
    } else {
        alert("The placeholder doesn't count");
    }
    
})

$(`#textBtn`).click(function(){
    $(this).siblings().text("text");
})

