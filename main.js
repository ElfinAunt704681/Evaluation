
window.onresize = responsive;
window.onload = responsive;

function responsive() {
    let width = screen.width;
    let height = screen.height;
    if (width < 480) {
        document.getElementsByClassName("screen_body")[0].style.width = "100%";
    }
    else{
        document.getElementsByClassName("screen_body")[0].style.width = "";

    } 
}


function toggle_automatic_setting() {
    let dropdownMenu = document.getElementsByClassName("automatic_setting_dropdown_menu")[0]
    if (dropdownMenu.style.display == "none") {
        dropdownMenu.style.display = "";
    }
    else{
        dropdownMenu.style.display = "none";
    }
}

document.getElementsByClassName("auto_water_checkbox")[0].onchange = ()=>{
    // console.log("change")
    // Send Request Etc to server
    button_state_handler()
} 

document.getElementsByClassName("interval_selector")[0].onchange = ()=>{
    // Send Request Etc to server
    button_state_handler()
} 



function button_state_handler() {
    let checkButton = document.getElementsByClassName("auto_water_checkbox")[0];
    let intervalSelector = document.getElementsByClassName("interval_selector")[0];
    if (intervalSelector.selectedIndex != 0) {
        checkButton.disabled = true;
    }
    else{
        checkButton.disabled = false;

    }

    if (checkButton.checked) {
        // console.log("dropdown menu disabled");
        intervalSelector.disabled = true;
        intervalSelector.style.opacity = "0.6";
    }
    else{
        // console.log("dropdown menu enabled");
        intervalSelector.disabled = false;
        intervalSelector.style.opacity = "";
    }
    // else if()
}
