({
    doInit: function(component, event, helper) {
        console.log("Initializing Complete.");
        //get game mode
        const gameMode = component.get("v.mode");
        let column = 0;
        //get number of colums based on gamemode
        //double equals == match the value
        ///tripple equals === also match the datatype
        if(gameMode && gameMode==='hard'){
            column = 6;
        }else if(gameMode==='medium'){
            column=4;
        }else {
            column=3;
        }
        //get block widtha and size
        let blockSize = 12/column;
        component.set("v.blockSize", blockSize);
        const words = helper.getWords(column * column);

        component.set("v.words", words);
        console.log("Words: " + words);
        //get win world
        const winWord = helper.getWinWord(words);
        component.set("v.winWord", winWord);
        console.log("Win word:" + winWord);
        //reset the board
        helper.resetBoard(component);
        console.log("Win word:" + winWord);
    },

    doRender: function(component, event, helper) {
        console.log("Rendering Complete.")
    },
    //method for aura event

    blockClickHandler: function(component, event, helper){
        //store the click count
        let clickCount = component.get("v.clickCount")+ 1;

        //get event value
        const value = event.getParam("value");

        //check if the value is equals to the winword.

        if(value === component.get("v.winWord")){
            //user won
            component.set("v.results", "YOU WON!");
            console.log("You Win!");
            helper.disableBoard(component);
            helper.fireResultEvent("win");
        } else if(clickCount===3){
            //user lose
            component.set("v.results", "YOU LOSE");
            console.log("You Lose!");
            helper.disableBoard(component);
            helper.fireResultEvent("lose");
        }
        //set click counts
        component.set("v.clickCount", clickCount);
    },

    reshuffleBoard  : function(component, event, helper) {
        const words = component.get("v.words");
        const randomizeWords = helper.randomizeArray(words);
        component.set("v.words", randomizeWords);
        helper.resetBoard(component);
    },
   
})
 