var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.showCards)
		.fail(app.onError);
	},
	showCards(dataJson) {
		console.log(dataJson);
		dataJson.cardList.forEach(element => {
			let html= `<div class="col-lg-3 col-md-6 mb-4 net-all">
			<div class="card h-100">
			  <img class="card-img-top" src="${element.imgUrl}">
			  <div class="card-body">
				<h4 class="card-title">${element.titolo}</h4>
				<p class="card-text">${element.desc}</p>
			  </div>
			  <div class="card-footer">
				<a href="${element.buttonURL}" class="btn btn-primary">Accedi</a>
			  </div>
			</div>
		  </div>`;
		  $("#card-container").append(html);
		});
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
