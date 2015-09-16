function DOMProcessor(doc, config) {
    this.config = config;
    this.doc = doc;
    this.elemStore = {};
}

DOMProcessor.prototype.init = function() {
    var i = 0;
    for (i; i < this.config.length; i++) {
        this.processTagName(this.config[i]);
    }
}

DOMProcessor.prototype.processTagName = function(tagConfig) {
    var items = this.doc.getElementsByTagName(tagConfig["tagName"]);
    this.elemStore[tagConfig["tagName"]] = [];
    
    var i = 0;
    
    for (i; i < items.length; i++) {
        var item = new tagConfig["class"](items[i], i);
        this.elemStore[tagConfig["tagName"]].push(item);
    }
};

DOMProcessor.prototype.getItem = function(tagName, n) {
    if (!(tagName in this.elemStore))
        return null;
    
    return this.elemStore[tagName][n] || null;
}