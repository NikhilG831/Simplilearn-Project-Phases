let dataArr = [
  {
    img: "./assets/Blog-post/atp3onnpbdlvxgvztglg.jpg",
    title:
      "PV Sindhu overcomes a fighting Yamaguchi to enter Tokyo Olympics semi-finals",
    des: "The Indian No. 6 seed beat the Japanese No. 4 seed 21-13, 22-20 in the badminton women’s singles quarter-finals. The two were also involved in a 54-shot rally.",
  },
  {
    img: "./assets/Blog-post/241-2412688_rahul-dravid-wallpapers.jpg",
    title:
      "Rahul Dravid Says Youngsters Would Have Learnt that 'Not All Wickets are Flat'",
    des: 'Dravid believes that the new crop of batsmen will learn with experience that "not all wickets will be flat" & they need to develop the art of scrapping it out.',
  },
  {
    img: "./assets/Blog-post/skysports-paul-pogba-transfer-centre_5330290.jpg",
    title:
      "Pogba: PSG expected to make transfer interest in Man Utd in near future",
    des: " Paris Saint-Germain are interested in Pogba, who has entered the final 12 months of his Man Utd contract; PSG are yet to make an offer for the midfielder.",
  },
];

let cardCollectionList = document.getElementsByClassName("card");
let indexCounter = 0;
for (cardNode of cardCollectionList) {
  const bindingObject = dataArr[indexCounter++ % 3];
  cardNode.childNodes[1].childNodes[1].src = bindingObject.img;
  cardNode.childNodes[3].childNodes[1].textContent = bindingObject.title;
  cardNode.childNodes[5].childNodes[1].textContent = bindingObject.des;
}

let menuEl = document.getElementById("mobile-menu");

menuEl.addEventListener("click", () => {
  let mobileList = document.getElementById("mobileList");
  if (mobileList.classList.contains("d-flex")) {
    mobileList.classList.remove("d-flex");
  } else {
    mobileList.classList.add("d-flex");
  }
});
