function init() {
    var markupBuilder = new MarkupBuilder(document);
    document.body.appendChild(markupBuilder.createButtons(101));

    var buttonsFactory = new ButtonsFactory();
    var buttonsList = buttonsFactory.buildFromMarkup(document);
    
    buttonsList[100].setColor("#FF0000");
}

document.addEventListener("DOMContentLoaded", init);