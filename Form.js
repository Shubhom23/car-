class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);
        
        var input = createInput();
        input.position(130,160);
        var button = createButton("Play");
        button.position(200,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            var greeting = createElement('h3');
            greeting.html("hello"+name);
            greeting.position(200,200);
        })
    }
}