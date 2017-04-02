$(document).ready(function(){
	// Initialize Firebase
	var config = {
	 apiKey: "AIzaSyBrqBQm5A-fpj5iF7IGt51tK206Ud4aEGg",
	 authDomain: "civictools-hackathon.firebaseapp.com",
	 databaseURL: "https://civictools-hackathon.firebaseio.com",
	 projectId: "civictools-hackathon",
	 storageBucket: "civictools-hackathon.appspot.com",
	 messagingSenderId: "362076091004"
	};
	firebase.initializeApp(config);

	var dbRef = firebase.database().ref().child('actions');

	dbRef.on('value', snap => {

		var snapshot = snap.val();

		for (var action in snapshot) {
		  var currentAction;
		  
		  if (snapshot.hasOwnProperty(action)) {
		     currentAction = snapshot[action]

		    $("#actions").append(`<p>${currentAction.bodyMarkdown}</p>`)
		    




		  }
		}
		
	});
	
});