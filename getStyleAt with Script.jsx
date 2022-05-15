var targetTextLayer = app.project.item(1).layer(1); //Main text layer object.
var characterIndex = 0; //Get First Character's Style 
var timeToGetStyle = "time"; //Get Style Data from targetTextLayer at current timeline indicator this can be a number in seconds.


var styleObject = getStyleAtAM(targetTextLayer, characterIndex, timeToGetStyle);

alert(styleObject.fontSize); //Alert fontSize of targetTextLayer's first character at current time of the comp.

function getStyleAtAM(targetTextLayer, characterIndex, timeToGetStyle) {
    var sourceTextComp = targetTextLayer.containingComp;
    var targetSourceText = targetTextLayer.sourceText.value;
    
    var referenceTextComp = app.project.items.addComp("Remove_"+sourceTextComp.name, sourceTextComp.width, sourceTextComp.height, sourceTextComp.pixelAspect, sourceTextComp.duration, sourceTextComp.frameRate);
    
    referenceTextComp.time = sourceTextComp.time;
    
    var referenceText = referenceTextComp.layers.addText(targetTextLayer.name);
    
    referenceText.sourceText.expression = 'comp("'+sourceTextComp.name+'").layer("'+targetTextLayer.name+'").text.sourceText.getStyleAt('+characterIndex+','+timeToGetStyle+');'
    
    var referenceStyle = referenceText.sourceText.value;
    
    referenceTextComp.remove();
    return referenceStyle;
}


