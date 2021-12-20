
let arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];


//Méthode utilisant jQuery
$.each(arrObj, function(index, value) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   const createImg = document.createElement('img');
   createImg.setAttribute('href', value.avatar);
   createImg.style.width = "200px";

   $('body').append(createImg);
});

