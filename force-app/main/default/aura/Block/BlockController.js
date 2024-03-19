({
    blockClickHandler : function(component, event, helper) {
        const open = component.get("v.open");
        //this can also be written as if(open === flase)
        if(!open){
            component.set("v.open", true);
            // Fire the event we created in block component
            //first store the event
            let compEvent = component.getEvent("onclick");
            //get label value
            const label = component.get("v.label");
            //set the params
            compEvent.setParams({value : label });
            
            //fire the event
            compEvent.fire();
        }
    },

    //it will fit the text
    afterScriptsLoaded: function(component){
        //save the div element which is in the block.cmp file
        const divElement = component.getElement(".board-block"); //.board-block is the class name

        fitText(divElement);

    }

    

});
