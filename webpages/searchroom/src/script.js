
class RoomCard {
    constructor(img, num, luxcolor, lux, cost, star1, star2, reviews, margleft, parentSelector, relativeTop) {
        this.img = img;
        this.num = num;
        this.luxcolor = luxcolor;
        this.lux = lux;
        this.cost = cost;
        this.star1 = star1;
        this.star2 = star2;
        this.reviews = reviews;
        this.ml = margleft;
        this.parent = document.querySelector(parentSelector);
        this.top = relativeTop
    }


    createCard() {
        const card = document.createElement('div');
        card.className = "card__item";
        card.style.top = this.top;
        card.innerHTML = `
        <div class="card__item-img" style="background-image: url(${this.img})">
        <div class="card__item-circls">
            <div class="circls__active-circ"></div>
            <div class="circl2 card-circ"></div>
            <div class="circl3 card-circ"></div>
            <div class="circl4 card-circ"></div>
        </div>
    </div>
    <div class="card__item-info">
        <div class="card__item-lux">
            <div class="card__item-luxno">№</div>
            <div class="card__item-luxnum">${this.num}</div>
            <div class="card__item-luxtext" style="color: ${this.luxcolor}">${this.lux}</div>
        </div>
        <div class="card__item-cost">
            <div class="card__item-costnum">${this.cost}₽</div>
            <div class="card__item-costperday">в сутки</div>
        </div>
        <div class="card__item-line"></div>
        <div class="card__item-stars">
            <div class="material-icons 1star">grade</div>
            <div class="material-icons 2star">grade</div>
            <div class="material-icons 3star">grade</div>
            <div class="material-icons 4star">${this.star1}</div>
            <div class="material-icons 5star">${this.star2}</div>
        </div>
        <div class="card__item-review">
            <div class="card__item-reviewnum" style="margin-left:${this.ml}">${this.reviews}</div>
            <div class="card__item-reviewnote">Отзывов</div>
        </div>
    </div>
            `;
        this.parent.append(card);
    }
}



new RoomCard(
    "/imgs/room1.png",
    "888",
    "#BC9CFF",
    "ЛЮКС",
    "9 990",
    "grade",
    "grade",
    "145",
    "0",
    ".cards",
).createCard()

new RoomCard(
    "/imgs/room2.png",
    "840",
    "white",
    "ЛЮКС",
    "9 900",
    "grade",
    "star_border",
    "65",
    "6px",
    ".cards",
).createCard()

new RoomCard(
    "/imgs/room3.png",
    "980",
    "#BC9CFF",
    "ЛЮКС",
    "8 500",
    "star_border",
    "star_border",
    "35",
    "6px",
    ".cards",
).createCard()

new RoomCard(
    "/imgs/room4.png",
    "856",
    "white",
    "ЛЮКС",
    "7 300",
    "grade",
    "grade",
    "19",
    "9px",
    ".cards",
).createCard()

new RoomCard(
    "/imgs/room5.png",
    "740",
    "white",
    "ЛЮКС",
    "6 000",
    "grade",
    "star_border",
    "44",
    "3px",
    ".cards",
).createCard()

new RoomCard(
    "/imgs/room6.png",
    "982",
    "white",
    "ЛЮКС",
    "5 800",
    "star_border",
    "star_border",
    "56",
    "6px",
    ".cards",
).createCard()

new RoomCard(
    "/imgs/room7.png",
    "678",
    "white",
    "ЛЮКС",
    "5 500",
    "grade",
    "grade",
    "45",
    "5px",
    ".cards",
    "1px"
).createCard()

new RoomCard(
    "/imgs/room8.png",
    "450",
    "white",
    "ЛЮКС",
    "5 300",
    "grade",
    "star_border",
    "39",
    "6px",
    ".cards",
    "1px"
).createCard()

new RoomCard(
    "/imgs/room9.png",
    "350",
    "white",
    "ЛЮКС",
    "5 000",
    "star_border",
    "star_border",
    "77",
    "6px",
    ".cards",
    "1px"
).createCard()

new RoomCard(
    "/imgs/room10.png",
    "666",
    "white",
    "ЛЮКС",
    "5 000",
    "grade",
    "grade",
    "25",
    "6px",
    ".cards",
    "2px"
).createCard()

new RoomCard(
    "/imgs/room11.png",
    "444",
    "white",
    "ЛЮКС",
    "5 000",
    "star_border",
    "star_border",
    "15",
    "9px",
    ".cards",
    "2px"
).createCard()

new RoomCard(
    "/imgs/room12.png",
    "352",
    "white",
    "ЛЮКС",
    "5 000",
    "star_border",
    "star_border",
    "55",
    "6px",
    ".cards",
    "2px"
).createCard()





// dropdowns




const extraConv = document.querySelector('.big-checkbox'),
    undroppedConv = document.querySelector('.undropped'),
    bedConv = document.querySelector('.bed-dropdown'),
    bedUndrop = document.querySelector('.room-conv'),
    bedOpen = document.querySelector('.room-ardwn'),
    bedClose = document.querySelector('.room-close-ardwn'),
    convOpen = document.querySelector('.undrop-ardwn'),
    convClose = document.querySelector('.check-ardwn'),
    cards = document.querySelector('.cards'),
    cardsTitle = document.querySelector('.cards-title'),
    pagination = document.querySelector('.pagination'),
    info = document.querySelector('.nav-info'),
    copyright = document.querySelector('.copyright')


    function closeConv() {
        undroppedConv.style.display = 'block';
        extraConv.style.display = 'none'
    }

convOpen.addEventListener('click', () => {
    undroppedConv.style.display = 'none';
    extraConv.style.display = 'block'
})


convClose.addEventListener('click', (closeConv))


bedOpen.addEventListener('click', () => {
    if(bedConv.style.display='none'){
        bedConv.style.display = 'block'
        undroppedConv.style.display = 'none'
        bedUndrop.style.display = 'none'
        extraConv.style.display = 'none'
        cards.style.top = '-391px'
        cardsTitle.style.top = '-1582px'
        pagination.style.top = '-428px'
        info.style.top = '-225px'
        copyright.style.top = '26px'
        copyright.style.left = '-530px'
    }
})

bedClose.addEventListener('click', () => {
    bedConv.style.display='none'
    bedUndrop.style.display = 'block'
    undroppedConv.style.display = 'block'
    cards.style.top = '-461px'
    cardsTitle.style.top = '-1652px'
    pagination.style.top = '-498px'
    info.style.top = '-295px'
    copyright.style.top = '26px'
    copyright.style.left = '140px'
})