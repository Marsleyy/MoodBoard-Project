var spicyImages =[
    "https://dovemed-prod-k8s.s3.amazonaws.com/media/original_images/chili_red_sharp_spice_chili_peppers_pepperoni_pods_nachtschattengewachs_fo.jpg",
    "https://hdfreewallpaper.net/wp-content/uploads/2015/07/with_love_romantic_rose_red_heart_day_ultra_3840x2160_hd-wallpaper-1903585.jpg","https://www.goodfreephotos.com/albums/other-photos/group-of-red-hearts-on-a-table.jpg"    
];
var sadImages =[
    "http://static1.squarespace.com/static/54a645d4e4b04f5956f31a84/57fbd6f22994cae2cbe106fe/59ebcc91b0786953dece54ad/1508625978929/Sad+Songs.jpg?format=1500w","https://i.pinimg.com/originals/f9/21/89/f92189bdd3cac245ec2f15168d56e19d.jpg","https://i.imgur.com/K4Yb5h0.jpg"
];
var angryImages =[
    "https://66.media.tumblr.com/8c051769f3c9cc57339e1568172b092c/tumblr_pebm08M3V31wm5ng7o1_1280.jpg","http://www.stylesfocus.com/wp-content/uploads/2018/10/Thi-Is-Angry-Cat-In-The-World.jpg","https://mensline.org.au/wp-content/uploads/2018/06/anger-header.jpg"
];
var partyImages =[
    "http://www.bellaluzgifts.com/wp-content/uploads/2017/09/TheMaximParty2016Pavilion.jpg","http://www.4usky.com/data/out/69/164615101-party-wallpapers.jpg","https://www.thedataschool.co.uk/wp-content/uploads/2017/04/party-51.jpg" 
];
var gamingImages =[
    "https://static.techspot.com/images2/news/bigimage/2018/12/2018-12-05-image-6.jpg","https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,q_auto/v1528822799/Gaming_Laptop_vgk6de.jpg","https://studybreaks.com/wp-content/uploads/2018/08/Is-Your-Child-in-a-Toxic-Gaming-Community.jpeg"
];

    $('button').click(function(){
    var mood = $('input').val();
    $(".images").html("");
   if(mood === "spicy"){
    spicymood();
   }else if(mood ==="sad"){
    sadmood();
   }else if(mood ==="angry"){
    angrymood();
   }else if(mood ==="party"){
    partymood();
   }else if(mood ==="gaming"){
    gamingmood();
   }
});
function spicymood(){
    changeTheme("#641E16", "#E74C3C");
    displayImages(spicyImages);
}

function sadmood(){
    changeTheme("#424949", "#99A3A4");
    displayImages(sadImages);
}

function angrymood(){
    changeTheme("#6E2C00", "#D35400");
    displayImages(angryImages);
}

function partymood(){
    changeTheme("#4A235A", "#D9008D");
    displayImages(partyImages);
}

function gamingmood(){
    changeTheme("black", "#2ECC71");
    displayImages(gamingImages);
}

function changeTheme(textColor, backgroundColor){
    $("body").css("color", textColor);
    $("body").css("background-color", backgroundColor);
}

function displayImages(images){
   images.forEach(function(pics){
    $(".images").append("<img src=" + pics + ">");    
});
}

