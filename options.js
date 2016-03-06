/**
 * Chrome extension - Magento Autoform
 *
 * @author Yireo (info@yireo.com)
 * @copyright Copyright 2014
 * @license GNU Public License
 * @link http://www.yireo.com
 */

window.addEventListener("load", createFields);

// Saves all options
function saveOptions() {

    var status = document.getElementById("status");
    var buttonSave = document.getElementById('save');
    status.innerHTML = '';
    buttonSave.disabled = 'disabled';
    
    // Call the save_option() function for every ID
    var magentoAutoformFields = {};
    for (var field in fields) {
        element = document.getElementById(field);
        if(element) {
            localStorage[field] = element.value;
            magentoAutoformFields[field] = element.value;
        }
    }

    var obj = {};
    obj.magentoAutoform = magentoAutoformFields;
    console.log(obj);
    chrome.storage.local.set(obj, function(obj) {});

    // Update status to let user know options were saved.
    status.innerHTML = '<div class="alert alert-success">Notice: Your field values have been saved</div>';
    setTimeout(function() {
        buttonSave.disabled = false;
    }, 400);
    setTimeout(function() {
        status.innerHTML = '';
    }, 3000);
}

// Create the HTML-fields
function createFields() {

    var container = document.getElementById('fields');
    var magentoAutoform = null;
    var html = '';

    var magentoAutoform = chrome.storage.local.get('magentoAutoForm', function(data) {
    });
    console.log(magentoAutoform);

    for (var field in fields) {
    
        var fieldObject = fields[field];
        var label = fieldObject.label;
        if(localStorage[field]) {
            var value = localStorage[field];
        } else {
            var value = '';
        }

        html = html + '<div class="form-group">';
        html = html + '<label class="col-sm-3 control-label">' + label + '</label>';
        html = html + '<div class="col-sm-9">';
        html = html + '<input type="text" class="form-control" name="' + field + '" id="' + field + '" value="' + value + '" />';
        html = html + '</div>';
        html = html + '</div>';

    }

    container.innerHTML = html;
    document.getElementById('save').addEventListener('click', saveOptions);
}
