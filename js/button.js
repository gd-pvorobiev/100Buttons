function Button(elem, label) {
    this.label = label;
    this.elem = elem;
    this.boundHandlers = [];
    
    this.init();
};

Button.prototype.init = function() {
    this.boundHandlers.push({
        "event": "click",
        "handler": this.onClick.bind(this)
    });
    
    this.setLabel();
    this.setHandlers();
    //this.setStyles();
};

Button.prototype.setLabel = function(label) {
    var labelText = label || this.label;
    this.label = labelText;
    
    this.elem.innerHTML = labelText;
};

Button.prototype.setHandlers = function() {
    var i = 0;
    for (i; i < this.boundHandlers.length; i++) {
        this.elem.addEventListener(
            this.boundHandlers[i]["event"],
            this.boundHandlers[i]["handler"]
        )
    }
};


Button.prototype.removeHandlers = function() {
    var i = 0;
    for (i; i < this.boundHandlers.length; i++) {
        this.elem.removeEventListener(
            this.boundHandlers[i]["event"],
            this.boundHandlers[i]["handler"]
        )
    }
};

Button.prototype.setColor = function(colorString) {
    this.setStyle({"prop": "color", "value": colorString});
};

Button.prototype.setStyle = function(styleObject) {
    this.elem.style[styleObject["prop"]] = styleObject["value"];
};

Button.prototype.onClick = function(e) {
    alert(this.label);
};