/**
 * GUIDE FOR ARRAYS & INDEXING:
 * - These arrays represents each product of the order page.
 * - May "Correspondence" yan per index. Meaning, yung index 0 ng lahat ng arrays refers 
 *   to the same "thing". i.e., ang nasa index 0 ng each ay "glossy1Checkbox", "quantity1G", 25,
 *   "Glossy - B&W", "text1G". Same goes for the rest of the indices.
 * - So kung gusto mo iaccess index ni "Softshell Crab Sandwich with Collard Slaw", since 38 ang index 
 *   niya sa "products" array, edi 38 din ang index ng mga katapat niya sa other arrays :>.
 * - Basically, etong mga arrays na to embodies yung 39 functions na ginawa mo (Kung mapapansin mo,
 *   39 elements din yung laman ng each array).
 */

// IDs for all checkboxes in the order page.
var checkboxes = ["glossy1Checkbox", "glossy2Checkbox", "matte1Checkbox", "matte2Checkbox", "textured1Checkbox", "textured2Checkbox", "ink1Checkbox", "ink2Checkbox", "ink3Checkbox", "B1Checkbox", "B2Checkbox", "B3Checkbox", "IDCheckbox", "3RCheckbox", "4RCheckbox", "A4Checkbox", "LetterCheckbox", "latteCheckbox", "blackCheckbox", "hotchocoCheckbox", "MacchiatoCheckbox", "teaCheckbox", "icedteaCheckbox", "icedCheckbox", "smoothieCheckbox", "sodaCheckbox", "dragonCheckbox", "OGCheckbox", "pinkCheckbox", "S1Checkbox", "S2Checkbox", "S3Checkbox", "S4Checkbox", "S5Checkbox", "S6Checkbox", "S7Checkbox", "S8Checkbox", "S9Checkbox", "S10Checkbox"];

// IDs for all quantity input in the order page.
var quantities = ["quantity1G", "quantity2G", "quantity1M", "quantity2M", "quantity1T", "quantity2T", "quantity1I", "quantity2I", "quantity3I", "quantity1B", "quantity2B", "quantity3B", "quantity1D", "quantity3R", "quantity4R", "quantityA4", "quantityLetter", "quantity1", "quantity2", "quantity3", "quantity4", "quantity5", "quantity6", "quantity7", "quantity8", "quantity9", "quantity10", "quantity11", "quantity12", "quantity13", "quantity14", "quantity15", "quantity16", "quantity17", "quantity18", "quantity19", "quantity20", "quantity21", "quantity22"];

// Prices for all products/services in the order page.
var prices = [25, 30, 30, 35, 45, 50, 50, 50, 50, 35, 35, 35, 15, 25, 30, 60, 60, 150, 200, 80, 150, 100, 100, 185, 165, 50, 180, 70, 100, 250, 350, 150, 300, 150, 380, 280, 150, 180, 300];

// Names for all producs/services in the order page.
var products = ["Glossy - B&W", "Glossy - Colored", "Matte B&W", "Matte - Colored", "Textured - B&W", "Textured - Colored", "Ink - Hewlett Packard", "Ink - Epson", "Ink - Canon", "Binding - Saddle Stitch", "Binding - Heated Spine", "Binding - Wire", "Laminating - ID", "Laminating - 3R", "Laminating - 4R", "Laminating - A4", "Laminating - Letter", "Cafe Latte", "Long Black", "Classic Hot Choco", "Macchiato", "Double 'T' Tea", "Classic Bottomless Iced Tea", "Iced Coffee", "The GrandBerry Smoothie", "Classic Soda Choice", "Dragon Drink", "The OG OJ", "Drink In Pink", "Döner Kebab Sandwich", "The Steak", "The Sando Katsu", "Triple Seafood Combi Roll", "Classic BLT", "The Ham Triple Decker", " Waffle Sandwich w/ Cecina, Avocadp, & Arugula", "Toasted Bread of Eggs, Shrimp, and Tomatoes", "Picchiapò", "Softshell Crab Sandwich with Collard Slaw"];

// IDs of quantity inputs in the order page.
var numberInputs = ["text1G", "text2G", "text1M", "text2M", "text1T", "text2T", "text4", "text5", "text6", "text7", "text8", "text9", "text10", "text11", "text12", "text13", "text14", "text15", "text16", "text17", "text18", "text19", "text20", "text21", "text22", "text23", "text24", "text25", "text26", "text27", "text28", "text29", "text30", "text31", "text32", "text33", "text34", "text35", "text36"];

//OR#
var orNum = 1000;

/**
 * Function to process form upon submission.
 */
function processOrder() {
    var x = document.getElementById("name").value;
    var val = true;
    if (x == "" || x == null) {
        alert("Name must be filled out");
        val = false;
    }

    if (val == true) {
        // clear MODAL for next customer
        document.getElementById("ordersDiv").innerHTML = "";

        // Get customer name using .value attribute
        var customerName = document.getElementById("name").value;

        // Assign customer name to receipt paragraph using .innerHTML
        document.getElementById("receiptName").innerHTML = customerName;

        // Get contact num using .value attribute
        var customerNum = document.getElementById("contactNum").value;
        // Assign instruction to receipt paragraph using .innerHTML
        if (document.getElementById("contactNum").value == "") {
            document.getElementById("receiptContact").innerHTML = "n/a";
        } else {
            document.getElementById("receiptContact").innerHTML = customerNum;
        }


        // Get special instruction using .value attribute
        var instruction = document.getElementById("instruction").value;

        // Assign instruction to receipt paragraph using .innerHTML
        if (document.getElementById("instruction").value == "") {
            document.getElementById("receiptinstruction").innerHTML = "None";
        } else {
            document.getElementById("receiptinstruction").innerHTML = instruction;
        }

        document.getElementById('OR').innerHTML = orNum;

        // Grand total for receipt
        var grandtotal = 0;

        // Loop through each checkbox (refer to arrays for indexing)
        for (var i = 0; i < checkboxes.length; i++) {
            // If the checkbox is checked
            if (document.getElementById(checkboxes[i]).checked) {
                // Get quantity from quantities array
                var qty = document.getElementById(quantities[i]).value;
                // Compute for total price
                var total = prices[i] * qty;
                // Add to grand total
                grandtotal += total;

                // Append to receipt
                // Note: An order is only appended if and only if its checkbox is CHECKED.
                createOrderEntry(products[i], qty, total);
            }
        }

        /*COMPUTING THE TOTAL*/
        document.getElementById("receiptTotal").innerHTML = "P" + grandtotal;

        // Reset input fields ng form
        // Reset name
        document.getElementById("name").value = "";
        // Reset contact number
        document.getElementById("contactNum").value = "";
        // Reset instructions
        document.getElementById("instruction").value = "";

        // Loop through each check box
        for (var i = 0; i < checkboxes.length; i++) {
            // If checkbox is checked
            if (document.getElementById(checkboxes[i]).checked)
            // Reset value to 0
                document.getElementById(quantities[i]).value = 0;

            // Uncheck the checkbox
            document.getElementById(checkboxes[i]).checked = false;
            document.getElementById(numberInputs[i]).style.display = "none";
        }



        /*To get the chosen mode of payment*/
        if (document.getElementById('Cash').checked) {
            rate_value = document.getElementById('Cash').value;
            document.getElementById('Cash').checked = false;
        } else {
            rate_value = document.getElementById('CreditCard').value;
            document.getElementById('CreditCard').checked = false;
        }
        document.getElementById('MOP').innerHTML = rate_value;

        /*OR NUMBER*/
        orNum += 1;
        $('#myForm').modal('show');

    }
}

/**
 * Function to display the quantity input corresponding to a given checkbox.
 * 
 * @param checkbox an object representing the checkbox triggered.
 */
function displayQtyInput(checkbox) {
    // Get index of checkbox from array (given its id via '.id' attribute)
    var index = checkboxes.indexOf(checkbox.id);
    // Get the quantity input container object
    var numberInput = document.getElementById(numberInputs[index]);

    // If checkbox is checked
    if (checkbox.checked)
    // Display quantity input
        numberInput.style.display = "block";
    // Else
    else
    // Hide quantity input
        numberInput.style.display = "none";
}



/**
 * Function to create and append a product to the receipt.
 * 
 * @param pName the name of the product.
 * @param pQty  the quantity of the product.
 * @param pTP   the total price of a product given its quantity.
 */
function createOrderEntry(pName, pQty, pTP) {
    // Assign information to local variables
    var productName = pName;
    var productQty = pQty;
    var productTotalPrice = pTP;

    // Create the main div
    var mainDiv = document.createElement("div");
    // Set its class
    mainDiv.setAttribute('class', 'row');

    // Create the name div
    var pNameDiv = document.createElement("div");
    // Set its class
    pNameDiv.setAttribute('class', 'col-6 pe-0');

    // Create the name div paragraph and text
    var pNameDivText = document.createElement("p");
    // Set its class
    pNameDivText.setAttribute('class', 'receiptPName');
    // Append text to paragraph
    pNameDivText.append(document.createTextNode(productName));

    // Append paragraph to div
    pNameDiv.append(pNameDivText);


    // Create the quantity div
    var pQtyDiv = document.createElement("div");
    // Set its class
    pQtyDiv.setAttribute('class', 'col-4 p-0');

    var pQtyDivText = document.createElement("p");
    // Set its class
    pQtyDivText.setAttribute('class', 'receiptPQty');
    // Append text to paragraph
    pQtyDivText.append(document.createTextNode(productQty));

    // Append paragraph to div
    pQtyDiv.append(pQtyDivText);


    // Create the total div
    var pTotalDiv = document.createElement("div");
    // Set its class
    pTotalDiv.setAttribute('class', 'col-2 p-0');

    var pTotalDivText = document.createElement("p");
    // Set its class
    pTotalDivText.setAttribute('class', 'receiptPTotal');
    // Append text to paragraph
    pTotalDivText.append(document.createTextNode(productTotalPrice));

    // Append paragraph to div
    pTotalDiv.append(pTotalDivText);

    // Append "sub-divs" to main div
    mainDiv.append(pNameDiv);
    mainDiv.append(pQtyDiv);
    mainDiv.append(pTotalDiv);

    // Finally, append the main div to the orders container in order.html
    document.getElementById('ordersDiv').append(mainDiv);
}

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
/*Scroll to top when arrow up clicked END*/