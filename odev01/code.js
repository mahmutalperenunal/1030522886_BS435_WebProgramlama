let numbers = [];
let isClicked = 0;

//random sayı oluşturma
const createRandomNumbers = () => {
    numbers[0] = Math.floor(Math.random() * 2) + 1;
    numbers[1] = Math.floor(Math.random() * 2) + 1;
    numbers[2] = Math.floor(Math.random() * 2) + 1;
    console.log(numbers);
}

//resimleri kontrol edip kediyi bulduysa ekrana uyarı gösterme
const onClickImage = () => {
    if(numbers[0] === 1 || numbers [1] === 1 || numbers[2] === 1){
        alert("Tebrikler, kazandın :)")
    }
}

//random sayılara göre resim atama
const newImg = () => {
    if(numbers[0] === 1){
        document.getElementById("img0").src = "images\kedi.jpg"
    } else{
        document.getElementById("img0").src = "images\köpek.jpg"
    }
    
    if(numbers[1] === 1){
        document.getElementById("img1").src = "images\kedi.jpg"
    } else{
        document.getElementById("img1").src = "images\köpek.jpg"
    }
    
    if(numbers[2] === 1){
        document.getElementById("img2").src = "images\kedi.jpg"
    } else{
        document.getElementById("img2").src = "images\köpek.jpg"
    }
}

//tıklanma sayısını hesaplama ve kontrol etme
const isClickedCounter = () => {
    ++isClicked;
    if(isClicked === 3){
        alert("Oyun bitti kaybettin :(");
    }
}