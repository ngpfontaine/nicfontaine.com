(function() {

	window.addEventListener("load", function() {

		var preloader = {
			design: [
				"./img/design/burrito-project-logo-2048-black-05-c.png",
				"./img/design/experience-download-page-c.png",
				"./img/design/m-styleguide-01-c.png",
				"./img/design/m-styleguide-02-c.png",
				"./img/design/m-styleguide-03-c.png",
				"./img/design/m-styleguide-04-c.png",
				"./img/design/m-styleguide-05-c.png",
				"./img/design/doughnut-slice-c.png",
				"./img/design/bunker-blast-slide-01.jpg",
				"./img/design/bunker-blast-slide-02.jpg",
				"./img/design/bunker-blast-slide-03.jpg",
				"./img/design/bunker-blast-slide-04.jpg",
				"./img/design/bunker-blast-slide-05.jpg",
				"./img/design/tlg-turtle-links-2d-01-c.png",
				"./img/design/tlg-turtle-links-3d-01-c.png",
				"./img/design/drawing-concepts-01-c.jpg",
				"./img/design/drawing-concepts-02-c.jpg",
				"./img/design/painting-ddom-01-c.jpg",
				"./img/design/logo-live-360-sheet-main-c.jpg",
				"./img/design/logo-exercises-01-c.png",
				"./img/design/drawing-minion-med-c.jpg"
			],
			interactive: [
				"./img/interactive/bonkr-logo-c.png",
				"./img/interactive/bonkr-screen-01-c.png",
				"./img/interactive/bonkr-screen-02-c.png",
				"./img/interactive/bonkr-screen-03-c.png",
				"./img/interactive/web-session-scheduling-02.png",
				"./img/interactive/web-session-scheduling-03.png",
				"./img/interactive/site-ian-haney-lopez-c.jpg",
				"./img/interactive/site-start-page-01-c.png",
				"./img/interactive/frankrohter-screen-01-c.png",
				"./img/interactive/frankrohter-screen-02-c.png",
				"./img/interactive/logo-clpsm-01.png",
				"./img/interactive/clpsm-rec.gif",
				"./img/interactive/gfv-gif-02.gif",
				"./img/interactive/gfv-gif-01.gif",
				"./img/interactive/site-thalia-01-c.png",
				"./img/interactive/site-silvermuse-c.jpg",
				"./img/interactive/site-3mi-c.jpg",
				"./img/interactive/email-the-grove-01-c.png"
			],
			delay: 9000,
			load: function() {
				for (var i=0; i < this.design.length; i++) {
					var imgD = new Image()
					imgD.src = this.design[i]
				}
				for (var j=0; j < this.interactive.length; j++) {
					var imgI = new Image()
					imgI.src = this.interactive[j]
				}
			}
		}
		
		var param = location.href.split("?")[1]
		if (param !== "nopl") {
			setTimeout(function() {
				preloader.load()
				console.log("pre-loading sub-page images complete")
			},preloader.delay)
		} else {
			console.log("param 'nopl' detected. subpage images will no preload")
		}
	})

})()