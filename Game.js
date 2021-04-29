class Game{
    constructor(){

    }
    
    getState(){
        var dbref = database.ref('gameState');
        dbref.on("value",function(data){
            gameState = data.val();
        })
    }
    update(State){
        database.ref('/').update({
            gameState:State
        })
    }
    start(){
        if(gameState===0){
            form = new Form();
            form.display();
        }

    }
}