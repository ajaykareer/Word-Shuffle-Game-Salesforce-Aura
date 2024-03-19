({
    startGame: function (component, event, helper) {
        //access the combobox
       
        let gameModeComboBox = component.find("gameMode"); 


        //access the value of a comboBox
        let selectedValue = gameModeComboBox.get("v.value");

        const selectedMode = component.get("v.selectedMode");

        //update selected mode attribute
        component.set("v.selectedMode", selectedValue);

        if(selectedMode){
            const boardComp = component.find("boardComp");

            //call aura method
            boardComp.startGame();
        }
        
        //to get the value of the attribute in JS
        let attributeValue = component.get("v.selectedMode");
        console.log("The start new game button is clicked. The Game Mode is: "+ selectedValue);

        console.log("Selected mode attribute value: "+attributeValue);
        

        
    },

    reshuffleBoard: function (component, event, helper) {
        console.log("Reshuffle board is called");
        const boardComp = component.find("boardComp");

        boardComp.reshuffleBoard();
        component.set("v.reshuffleDisabled", true);

        // Add your reshuffle logic here}
    },
    onResultHandler : function(component, event, helper) {
        const result = event.getParam("result");
        if(result === "win"){
            component.set("v.reshuffleDisabled", true);
            helper.showToast("You Win", "Congratulations...", "success");
        }else {
            component.set("v.reshuffleDisabled", false);
            helper.showToast("You Lose", "Reshuffle the board to keep playing..", "error");
        }

        helper.addResultRecord(component,result);
    }
});
