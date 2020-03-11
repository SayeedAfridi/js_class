//Budget Controller
var budgetController = (function() {
    //Some code
})()

//UI controller
var UIController = (function() {
    var DOMStrings = {
        inputBn: '.add__btn',
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
    }
    return {
        getDomStrings: function() {
            return DOMStrings
        },
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //either inc or exp
                description: document
                    .querySelector(DOMStrings.inputDescription)
                    .value.trim(),
                value: parseFloat(
                    document.querySelector(DOMStrings.inputValue).value
                )
            }
        }
    }
})()

//Global App controller
var controller = (function(bgtCtrl, UICtrl) {
    var setupEventListener = function() {
        var DOM = UICtrl.getDomStrings()
        document
            .querySelector(DOM.inputBn)
            .addEventListener('click', ctrlAddItem)
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        })
    }
    var ctrlAddItem = function() {
        //01. Get input from UI
        var input = UICtrl.getInput()
        console.log(input)
        //02. Add the item to budget controller
        //03. add new item to interface
        //04. calculate the budget
        //05. show the budget
    }
    setupEventListener()
})(budgetController, UIController)
