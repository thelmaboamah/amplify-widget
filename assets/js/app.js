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
		$("#accordion").empty();
		var snapshot = snap.val();
		var currentAction;
		var id = 0;
		console.log(currentAction)

		for (var action in snapshot) {
		  
		  
		  if (snapshot.hasOwnProperty(action)) {
		     currentAction = snapshot[action]
		     console.log(currentAction)
		    
		    var actionDiv = `
		    <div class="card">
		      <div class="card-header" role="tab" id="heading${++id}">
	          <div data-toggle="collapse" data-parent="#accordion" href="#collapse${id}" aria-expanded="false" aria-controls="collapse${id}">
	            ${currentAction.verbPreTitle}
	          </div>
		      </div>

		      <div id="collapse${id}" class="collapse" role="tabpanel" aria-labelledby="heading${id}">
		        <div class="card-block">
		          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
		        </div>
		      </div>
		    </div>

		    `





		    $("#accordion").append(actionDiv);
		    




		  }
		}

		
	});
	
});