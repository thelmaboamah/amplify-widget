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
	          <div class="row" data-toggle="collapse" data-parent="#accordion" href="#collapse${id}" aria-controls="collapse${id}">
							<div class="col-md-1">
								<i class="fa fa-phone" aria-hidden="true"></i>
							</div>
							<div class="col-md-10">
								<p class="pre-title">
									${currentAction.verbPreTitle}
								</p>
								<p class="title">
									${currentAction.verbTitle}
								</p>
							</div>
							<div class="col-md-1">
								<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
							</div>

	            
	          </div>
		      </div>

		      <div id="collapse${id}" class="collapse" role="tabpanel" aria-labelledby="heading${id}">
		        <div class="card-block">
		         <h4>Call Script</h4>
		         <p>
							${currentAction.script}
		         </p>
		         <div class="action-buttons">
							<button>Spoke</button>
							<button>Left Voicemail</button>
							<button>Emailed</button>
		         </div>
		         <p>${currentAction.advice}</p>
		        </div>
		      </div>
		    </div>

		    `





		    $("#accordion").append(actionDiv);
		    




		  }
		}

		
	});
	
});