console.info("Will update with pixel data later on...");

let imagelinks = true;

function togglelinks() {
	imagelinks = !imagelinks;
	let button = document.getElementById("linktoggler");
	button.innerHTML = imagelinks ? "Disable Links" : "Enable Links";
	document.getElementById("this-desc").style.opacity = imagelinks ? "100%" : "20%";
	let images = document.getElementsByClassName("imglink");
	for (let img of images) {
		img.style.pointerEvents = imagelinks ? "initial" : "none";
	};
};

let imgContainer = document.getElementById("full-img-container");
function dupeImage(url, name) {
	console.log(url);
	let newImageContainer = imgContainer.cloneNode(true);
	document.getElementById("images-container").appendChild(newImageContainer);
	let image = newImageContainer.childNodes[1];
	image.src = url;
	image.hidden = false;
	image.title = name;
	newImageContainer.href = url;
};

let search = window.location.search;
if (search == "") {
	console.error(`Image set is not specified!`);
} else {
	let params = search.split("=");
	if (params[0] != "?set") {
		console.error(`Incorrect query!`);
	} else {
		let ImageSetName = params[1];
		let ImageSetData = FullImgs[ImageSetName];
		if (ImageSetData) {
			document.getElementById("image-name-heading").innerHTML = ImageSetName;
			let directory = `./images/${ImageSetName}`
			for (imgname of ImageSetData) {
				let finalImage = `${directory}/${imgname}`;
				dupeImage(finalImage, imgname);
			};
		} else {
			console.error(`Cannot find image set ${ImageSetName}!`);
		};
	};
};
