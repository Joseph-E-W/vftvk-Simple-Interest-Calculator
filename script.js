function compute() {
    var principal = document.getElementById("principal").value;

    /* Condition that displays an to the user to enter a positive number*/

    if (principal == "" || principal <= 0) {

        alert("Please Enter a positive number");

        document.getElementById("principal").focus();

        return;
    }

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;

    var dateright = new Date();

    var yearright = parseInt(dateright.getFullYear()) + parseInt(years);

    var Finalresult = document.getElementById("result");

    Finalresult.innerHTML = "If you deposit " + "<mark class='highlight'>"
        + principal + "</mark>." + ", <br> at an interest rate of " + "<mark class='highlight'>"
        + rate + "</mark>%." + "<br> You will receive an amount of " + "<mark class='highlight'>"
        + interest + "</mark>" + ", <br> in the year " + "<mark class='highlight'>"
        + yearright + "</mark>";
}

// In this function, I will Display the slider's value

function SliderRate() {

    var sliderratevalue = document.getElementById("rate");

    var outputnumber = document.getElementById("rate_display");

    outputnumber.innerHTML = sliderratevalue.value;

    // In this function, I will  Update the slider's value when I drag the slider

    sliderratevalue.oninput = function () {
        outputnumber.innerHTML = this.value;

    }
}