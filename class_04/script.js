(function(){
    "use strict"

    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById('cart-hplus').addEventListener('submit', estimateTotal)
        var btnEstimate = document.getElementById('btn-estimate')
        btnEstimate.disabled = true
        var state = document.getElementById('s-state')
        state.addEventListener('change', function(){
            if(state.value === ""){
                btnEstimate.disabled = true
            }else{
                btnEstimate.disabled = false
            }
        })
    })
    function estimateTotal(event){
        event.preventDefault()
        console.log('You submitted the form')
        var state = document.getElementById('s-state')
        if(state.value === ""){
            alert('Please choose your shipping state')
            state.focus()
        }
    }
    
})()