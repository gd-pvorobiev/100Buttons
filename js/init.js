document.addEventListener(
    "DOMContentLoaded",
    function(event) {
        var config = [{
                    "tagName": "BUTTON",
                    "class": Button
                }];
                          
        var app = new DOMProcessor(document, config);
        app.init();
                          
        app.getItem("BUTTON", 1).removeHandlers();
        app.getItem("BUTTON", 2).setColor("#FF00FF");
        app.getItem("BUTTON", 3).setStyle({"prop": "color", "value": "#FFFFFF"});
        app.getItem("BUTTON", 3).setStyle({"prop": "backgroundColor", "value": "#000000"});
});