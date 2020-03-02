//Add submit event to form
document.getElementById('cart-hplus').addEventListener('submit', estimateTotal)

var state = document.getElementById('s-state')
var btnEstimate = document.getElementById('btn-estimate')
btnEstimate.disabled = true
state.addEventListener('change', function() {
    if (state.value === '') {
        btnEstimate.disabled = true
    } else {
        btnEstimate.disabled = false
    }
})

//Callback function for submit event
function estimateTotal(event) {
    //prevent default form submit behaviour
    event.preventDefault()

    //check if state is selected
    if (state.value === '') {
        alert('Please chose your shipping state')
        state.focus()
        return
    }

    //gt all quantity from input and parse it into integer
    var itemBBall =
            parseInt(document.getElementById('txt-q-bball').value, 10) || 0,
        itemJersy =
            parseInt(document.getElementById('txt-q-jersey').value, 10) || 0,
        itemPower =
            parseInt(document.getElementById('txt-q-power').value, 10) || 0
    //calculate total quantity and total price

    var totalQty = itemBBall + itemJersy + itemPower,
        totalPrice = itemBBall * 90 + itemJersy * 25 + itemPower * 30
    var shippingCost = 0,
        shippingCostPer = 0,
        taxFactor = 1,
        estimate,
        shippingState = state.value

    //select shipping method and set tax factor
    if (shippingState === 'CA') {
        taxFactor = 1.075
    }

    //get shipping method and calculate shipping cost
    var shippingMethod = document.querySelector('[name=r_method]:checked').value
    switch (shippingMethod) {
        case 'usps':
            shippingCostPer = 2
            break
        case 'ups':
            shippingCostPer = 3
            break
        default:
            shippingCostPer = 0
            break
    }
    shippingCost = totalQty * shippingCostPer
    //final estimate cost
    estimate = totalPrice * taxFactor + shippingCost

    //show the cost
    document.getElementById('txt-estimate').value = '$' + estimate.toFixed(2)
}
