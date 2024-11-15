function calculate() {
    var c = document.getElementById('c_value').value ;
    var result1 = c * 2 ;
    alert(result1) ;
    }
function reset() {
    var confirm_reset = confirm("Do you want to reset ?") ;
    if (confirm_reset == true) {
        document.getElementById("c_value").value = " " ; 
    }
}