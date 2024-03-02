
//1. Adding new values to the list
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === ' ') {
    alert("You must write something!");
} else {
    $('#list').append(li);
}
//2.Crossing out an Item
function crossOut() {
    li.toggleClass("strike");
}

li.on("dbclick", function crossout() {
    li.toggleClass("strike");
});
//3. adding a delete button
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem() {
    li.addClass("delete")
}
//4. reordering the items
$('#list').sortable();