function ButtonsFactory() {
    this.buttonClass = Button;
    this.buttonTag = "BUTTON";
}

ButtonsFactory.prototype.build = function(elem, label) {
    return new this.buttonClass(elem, label);
};

ButtonsFactory.prototype.buildFromMarkup = function(doc) {
    var items = doc.getElementsByTagName(this.buttonTag);
    var buttonsList = []
    var i = 0;
    
    for (i; i < items.length; i++) {
        var item = this.build(items[i], i);
        buttonsList.push(item);
    }
    
    return buttonsList;
};