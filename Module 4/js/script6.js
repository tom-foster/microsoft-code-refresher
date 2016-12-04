function handleClick1() {
    document.getElementById('dateTarget1').innerHTML = Date();
}

document.getElementById('dateButton2').onclick = handleClick2;

function handleClick2() {
    document.getElementById('dateTarget2').innerHTML = Date();
}

// named identifier
document.getElementById('dateButton3').addEventListener('click', handleClick3);
function handleClick3() {
    document.getElementById('dateTarget3').innerHTML = Date();
}

// anonymous function
document.getElementById('dateButton4').addEventListener('click', function handleClick() {
    document.getElementById('dateTarget4').innerHTML = Date();
});