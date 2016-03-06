/**
 * Chrome extension - Magento Autoform
 *
 * @author Yireo (info@yireo.com)
 * @copyright Copyright 2014
 * @license GNU Public License
 * @link http://www.yireo.com
 */

function autocomplete(element_id, id) {

    if(id == "") id = element_id;

    chrome.extension.sendRequest({"id": id}, function(response) {

        var element = document.getElementById(element_id);
        var value = response.value;

        if(element && value) {
            element.value = value;
            console.log("Completed element " + element_id + " with value " + value);

        } else {
            console.error("No element with ID " + element_id);
        }
    });
}

autocomplete('email_address', 'email');
autocomplete('firstname', 'firstname');
autocomplete('lastname', 'lastname');
autocomplete('password', 'password');
autocomplete('confirmation', 'password');

