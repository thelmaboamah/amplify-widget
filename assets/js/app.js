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
		var message = ["Way to go!", "Nice work!", "Good job!"];
		var randMessage;

		

		for (var action in snapshot) {
		  
		  
		  if (snapshot.hasOwnProperty(action)) {
		     currentAction = snapshot[action]
		    
		    var actionDiv = `
		    <div class="card">
		      <div class="card-header" role="tab" id="heading${++id}">
	          <div class="row" data-toggle="collapse" data-parent="#accordion" href="#collapse${id}" aria-controls="collapse${id}">
							<div class="col-md-1 phone">
								<i class="fa fa-phone" aria-hidden="true"></i>
							</div>
							<div class="col-md-10 lead">
								<p class="pre-title">
									${currentAction.verbPreTitle}
								</p>
								<p class="title">
									${currentAction.verbTitle}
								</p>
							</div>
							<div class="col-md-1 chevron">
								<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
							</div>

	            
	          </div>
		      </div>

		      <div id="collapse${id}" class="collapse" role="tabpanel" aria-labelledby="heading${id}">
		        <div class="card-block">
		         <h4>Call Script</h4>
		         <p class="script">
							${currentAction.script}
		         </p>
		         <div class="flash-message">${randMessage}</div>
		         <div class="action-buttons">
							<button class="btn">Spoke</button>
							<button class="btn">Left Voicemail</button>
							<button class="btn">Emailed</button>
		         </div>
		         <p class="advice">${currentAction.advice}</p>
		        </div>
		      </div>
		    </div>
		    `
		    $("#accordion").append(actionDiv);

		  }
		}	
	
		$("#accordion").on("click", ".action-buttons .btn", function(e) {
			randMessage= message[Math.floor(Math.random() * message.length)];
			var fmessage = $(this).parent().prev(".flash-message")
			fmessage.text(randMessage).show();
			setTimeout(function(){
				fmessage.hide();
			},1200);
			
		})


	});


	
});
