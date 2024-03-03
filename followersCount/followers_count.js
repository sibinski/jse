let count = 0; //Initialize count to zero
function increaseCount()
{
    count++;
}
function displayCount()
{
    document.getElementById("countDisplay").innerHTML=count; // Display the count in the HTML
}
function increaseCount()
{
    count++; // Increase the count by one
    displayCount(); // Display the count
}
function checkCountValue()
{
    if (count===10)
    {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }
    else if (count===20)
    {
        alert("Your Instagram post gained 20 followers! Congratulations!");
    }
}

function increaseCount()
{
    count++; // Increase the count by one
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}