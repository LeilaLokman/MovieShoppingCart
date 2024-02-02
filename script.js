// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE BELOW THIS LINE

function displayMovieInformation(movie_id)
{
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		document.getElementById("modalWindowContent").innerHTML = this.responseText;
		showModalWindow();
		};
	request.open("GET", "./movieinfo.php?movie_id=" + movie_id, true);
	request.send();
}

function forgotPassword()
{
	window.location.replace("./logon.php?action=forgot");
}

function showModalWindow()
{
    var modal = document.getElementById('modalWindow');
    var span = document.getElementsByClassName("_close")[0];

    span.onclick = function() 
    { 
        modal.style.display = "none";
    }

    window.onclick = function(event) 
    {
        if (event.target == modal) 
        {
            modal.style.display = "none";
        }
    }
 
    modal.style.display = "block";
}

// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE


// DO NOT REMOVE OR MODIFY THE SIGNATURE OF THE FUNCTIONS BELOW THIS LINE

function addMovie(imdbID)
{
	window.location.replace("./index.php?action=add&imdb_id=" + imdbID);
}

function confirmCancel()
{
	 var confirmResult = confirm("Are you sure you want to return to your shopping cart?");

    // If the user clicks Cancel, return false
    if (!confirmResult) {
        return false;
    }

    // If the user clicks OK, redirect to index.php
    window.location.replace("./index.php");
}

function confirmCheckout()
{
	   var confirmResult = confirm("Are you sure you want to checkout from your shopping cart?");

    // If the user clicks Cancel, return false
    if (!confirmResult) {
        return false;
    }

    // If the user clicks OK, redirect to index.php with the checkout action
    window.location.replace("./index.php?action=checkout");
}

function confirmLogout()
{
	var confirmResult = confirm("Are you sure you want to logout from your shopping cart?");

    // If the user clicks Cancel, return false
    if (!confirmResult) {
        return false;
    }

    // If the user clicks OK, redirect to logon.php with the logoff action
    window.location.replace("./logon.php?action=logoff");
}

function confirmRemove(title, movieID)
{
	    var confirmResult = confirm("Are you sure you want to remove the movie '" + title + "' from your shopping cart?");

    // If the user clicks Cancel, return false
    if (!confirmResult) {
        return false;
    }

    // If the user clicks OK, redirect to index.php with the remove action and movie_id parameter
    window.location.replace("./index.php?action=remove&movie_id=" + movieID);
}