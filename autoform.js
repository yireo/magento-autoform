/**
 * Chrome extension - Magento Autoform
 *
 * @author Yireo (info@yireo.com)
 * @copyright Copyright 2014
 * @license GNU Public License
 * @link http://www.yireo.com
 */

/*
function autocomplete(element_id, id) {

    if(id == "") id = element_id;

    chrome.extension.sendRequest({"id": id}, function(response) {

        var element = document.getElementById(element_id);
        var value = response.value;

        if(element && value) {
            element.value = value;
            element.autocomplete = 'off';
            console.log("Completed element " + element_id + " with value " + value);

        } else {
            console.error("No element with ID " + element_id);
        }
    });
}

form = document.getElementById('login-form');
if(form) {
    form.autocomplete = 'off';
}

form = document.getElementById('co-billing-form');
if(form) {
    form.autocomplete = 'off';
}

autocomplete('login-email', 'email');
autocomplete('login-password', 'password');
autocomplete('billing:firstname', 'firstname');
autocomplete('billing:lastname', 'lastname');
autocomplete('billing:company', 'company');
autocomplete('billing:email', 'email');
autocomplete('billing:street1', 'street1');
autocomplete('billing:street2', 'street2');
autocomplete('billing:city', 'city');
autocomplete('billing:postcode', 'postcode');
autocomplete('billing:country_id', 'country');
autocomplete('billing:telephone', 'telephone');
autocomplete('billing:fax', 'fax');
autocomplete('billing:customer_password', 'password');
autocomplete('billing:confirm_password', 'password');
*/

(function(doc){

    "use strict";

    var fieldsUrl = chrome.extension.getURL('fields.js');
    var client = new XMLHttpRequest();
    client.open('GET', fieldsUrl);
    client.onreadystatechange = function() {

        if(client.responseText) {
            var fields = JSON.parse(client.responseText);
            chrome.storage.local.get('magentoAutoform', function(data, fields) {

                console.log(fields);
                var magentoAutoform = data.magentoAutoform;
                for (var field in magentoAutoform) {

                    var value = magentoAutoform[field];
                    console.log(field + ' == ' + value);
                    //doc.getElementById('email_address').value = value;

                }
            });
        }
    }
    client.send();

})(document);

