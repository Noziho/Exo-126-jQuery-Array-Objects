let arrObj = [
    {
        "person": "Mark",
        "age": 25,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"
    },
    {
        "person": "Bill",
        "age": 65,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"
    },
    {
        "person": "Spencer",
        "age": 34,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"
    }
];

let i = 0;
const createImg = document.createElement('img');
createImg.setAttribute('src', arrObj[0].avatar);
createImg.style.width = "200px";
createImg.style.height = "200px";
createImg.style.position = "center";
$('.containerImg').append(createImg);
$('#personne').append(arrObj[0].person + " " + arrObj[0].age + " ans");
$('p').css({
    'width': '100%',
    'display': 'flex',
    'justify-content': 'center'
});
$('button').css('margin-top', "1%");

$('#back').click(function () {
    if (i !== 0) {
        i--;
        createImg.setAttribute('src', arrObj[i].avatar);
        $('#personne').text(arrObj[i].person + " " + arrObj[i].age + " ans")
    }
})

$('#next').click(function () {
    if (i <= arrObj.length - 2) {
        i++;
        createImg.setAttribute('src', arrObj[i].avatar);
        $('#personne').text(arrObj[i].person + " " + arrObj[i].age + " ans")
    }
})

