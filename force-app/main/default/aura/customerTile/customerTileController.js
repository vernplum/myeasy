({
    handleClick : function(component, event, helper)
    {
        // HELLO, WE'RE INTERESTED IN THIS BIT FIRST
        var recId = component.get("v.item.Id");
        var sobject = component.get("v.sobject");
        helper.sendSobjectEvent(recId, sobject);
        helper.sendMuteEvent(recId);
    },

    // LET's IGNORE THIS checkMute() FOR NOW.
    checkMute : function(component, event, helper)
    {
        var channel = event.getParam("channel");
        
        if(channel === "reservationManager")
        {
            var recordId = component.get("v.item.Id");
            console.log(recordId);
            var muteArray = event.getParam("muteArray");
            var isMuted = component.get("v.muted");
            var tile = component.find("tile");
            
            //muteArray has Id of active record
            if( !muteArray.has(recordId) && !isMuted)
            {
                console.log('mute detected');
                $A.util.addClass(tile, "mute");
                component.set("v.muted", !isMuted);
            }
            else if(muteArray.has(recordId) && isMuted)
            {
                console.log('unmute detected');
                $A.util.removeClass(tile, "mute");
                component.set("v.muted", !isMuted);
            }
        }
    }
})