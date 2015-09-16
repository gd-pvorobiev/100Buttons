function MarkupBuilder(doc) {
    this.doc = doc;
}

MarkupBuilder.prototype.createButton = function() {
    return this.doc.createElement("BUTTON");
}

MarkupBuilder.prototype.createButtons = function(quantity) {
    var method = this.createButton.bind(this /* other args needed */);
    return this.createElementsList(method, quantity);
}

MarkupBuilder.prototype.createElementsList = function(createElementMethod, quantity) {
    var list = this.doc.createDocumentFragment();
    var i = 0;
    
    for (i; i < quantity; i++) {
        var button = createElementMethod();
        list.appendChild(button);
    }
    
    return list;
};


