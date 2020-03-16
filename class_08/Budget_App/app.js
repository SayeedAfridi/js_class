//Budget Controller
var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description
        this.value = value
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description
        this.value = value
    }
    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        },
        budget: 0
    }

    return {
        addItem: function (type, des, val) {
            var ID, newItem
            //create new id
            //[1, 2, 3 ,4 ,5] next id 5
            //id = last id + 1

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                ID = 0
            }
            //create object based on types
            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
            } else {
                newItem = new Income(ID, des, val)
            }
            //push the item to array
            data.allItems[type].push(newItem)

            return newItem
        }
    }
})()

//UI controller
var UIController = (function () {
    var DOMStrings = {
        inputBn: '.add__btn',
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        expensesList: '.expenses__list',
        incomeList: '.income__list'
    }
    return {
        getDomStrings: function () {
            return DOMStrings
        },
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //either inc or exp
                description: document
                    .querySelector(DOMStrings.inputDescription)
                    .value.trim(),
                value: parseFloat(
                    document.querySelector(DOMStrings.inputValue).value
                )
            }
        },
        addListItem: function (obj, type) {
            var html, newHtml, element
            //create html with placeholder
            if (type === 'inc') {
                element = DOMStrings.incomeList
                html =
                    '<div class="item clearfix" id="inc-%id%"><div \
                    class="item__description">%description%</div><div class="right clearfix"><div \
                    class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn">\
                    <i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMStrings.expensesList
                html =
                    '<div class="item clearfix" id="exp-%id%"><div \
                    class="item__description">%description%</div><div class="right clearfix"><div \
                    class="item__value">%value%</div><div class="item__percentage">21%</div><div \
                    class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\
                    </div></div></div>'
            }
            //replace the placeholder with actual data
            newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', obj.value)
            //insert the html into the dom
            document
                .querySelector(element)
                .insertAdjacentHTML('beforeend', newHtml)
        },
        clearInput: function () {
            var fields, fieldArray
            fields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue)
            fieldArray = Array.prototype.slice.call(fields)
            fieldArray.forEach(function (el) {
                el.value = ''
            })
        }
    }
})()

//Global App controller
var controller = (function (bgtCtrl, UICtrl) {
    var setupEventListener = function () {
        var DOM = UICtrl.getDomStrings()
        document
            .querySelector(DOM.inputBn)
            .addEventListener('click', ctrlAddItem)
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        })
    }
    var ctrlAddItem = function () {
        //01. Get input from UI
        var input = UICtrl.getInput()
        //02. Add the item to budget controller
        if (input.description !== '' && input.value !== NaN) {
            var newItem = bgtCtrl.addItem(input.type, input.description, input.value)
            //03. add new item to interface
            UICtrl.addListItem(newItem, input.type)
            UICtrl.clearInput()
            //04. calculate the budget
            //05. show the budget}
        }
    }
    setupEventListener()
})(budgetController, UIController)