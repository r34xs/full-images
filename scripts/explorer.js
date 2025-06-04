console.info("Will update with pixel data later on...");

let imgset = document.getElementById("image-set-container");
function dupeImageSet(name, url) {
	let newimgset = imgset.cloneNode(true);
	document.getElementById("image-sets").appendChild(newimgset);
	let hyperl = newimgset.childNodes[1];
	let image = hyperl.childNodes[1];
	let title = hyperl.childNodes[4];
	title.innerHTML = name;
	image.src = url;
	hyperl.href = `./viewer.html?set=${name}`;
	newimgset.hidden = false;
};

for (let setName in FullImgs) {
	let setData = FullImgs[setName];
	let max = setData.length;
	let min = 1;
	let rand = Math.floor(Math.random() * (max - min + 1)) + min;
	let randomImg = `./images/${setName}/${setData[rand - 1]}`;
	dupeImageSet(setName, randomImg);
};
