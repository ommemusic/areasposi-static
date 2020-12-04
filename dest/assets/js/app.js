"use strict";

var app = new Vue({
  el: "#app",
  data: {
    showModal: false,
    appOwner: "OMME Music",
    appName: "Area <span>Sposi</span>",
    logo: "../img/logo.svg",
    coupleName: "Martina e Luca",
    coupleAvatar: "../img/couple-avatar.jpg",
    isLogged: false,
    currentPosition: 10,
    weddingDate: "12 giugno 2021",
    weddingHour: "11:00",
    partnerOneFirstName: "Martina",
    partnerOneLastName: "Rossi",
    partnerTwoFirstName: "Luca",
    partnerTwoLastName: "Bianchi",
    couplePhone: "333 12 34 567",
    coupleEmail: "martina.rossi@gmail.com",
    couplePassword: "1234",
    coupleAddress: "via delle Rose 4, Bergamo",
    contractDate: "25 settembre 2020",
    navbar: [
      {
        link: "#1",
        icon: "home",
        active: true,
      },
      {
        link: "#2",
        icon: "list",
        active: false,
      },
      {
        link: "#3",
        icon: "tag",
        active: false,
      },
      {
        link: "#4",
        icon: "gift",
        active: false,
      },
      {
        link: "#5",
        icon: "award",
        active: false,
      },
      {
        link: "#6",
        icon: "user",
        active: false,
      },
    ],
    options: [
      {
        title: "Classifica Generale",
        link: "#",
        icon: "../img/icons/icon-trophy.svg",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus odit magni.",
      },
      {
        title: "Servizi acquistati",
        link: "services.html",
        icon: "../img/icons/icon-shopping-bag.svg",
        desc: "Il pacchetto di servizi OMME Music che avete acquistato",
      },
      {
        title: "Gift Card",
        link: "gift-cards.html",
        icon: "../img/icons/icon-gift.svg",
        desc:
          "Regalala a chi, come te, si sta per sposare. Tanti sconti in regalo!",
      },
      {
        title: "Missioni e carte",
        link: "missions.html",
        icon: "../img/icons/icon-coin.svg",
        desc:
          "Completa le missioni: ad ogni obiettivo raggiunto uno sconto per te!",
      },
      {
        title: "Sconti accumulati",
        link: "discounts.html",
        icon: "../img/icons/icon-receipt.svg",
        desc:
          "Tutti gli sconti che hai accumulato grazie alle missioni completate",
      },
      {
        title: "Repertorio",
        link: "repertoire.html",
        icon: "../img/icons/icon-playlist.svg",
        desc:
          "Scegli le canzoni che vorresti ascoltare il giorno del tuo matrimonio",
      },
      {
        title: "Photogallery",
        link: "photogallery.html",
        icon: "../img/icons/icon-album.svg",
        desc:
          "Gli istanti migliori del tuo matrimonio condivisi da te e dai tuoi amici",
      },
    ],
    services: [
      {
        name: "Aperitivo di benvenuto",
        icon: "home",
        label: "Acquistato",
      },
      {
        name: "Sottofondo ricevimento",
        icon: "home",
        label: "Acquistato",
      },
      {
        name: "Karaoke",
        icon: "home",
        label: "Acquistato",
      },
      {
        name: "Photoboot",
        icon: "home",
        label: "Acquistato",
      },
      {
        name: "3 fontane a freddo",
        icon: "home",
        label: "Vinto",
      },
    ],
    missions: [
      {
        id: "1",
        slug: "",
        name: "1 strumento per cerimonia",
        icon: "../img/gaming-pad.svg",
        status: "",
        category: "Cerimonia",
        cards: [
          {
            name: "Carta 1",
            type: "social",
            ommepoints: "100",
            status: "won",
          },
          {
            name: "Carta 2",
            type: "standard",
            ommepoints: "200",
            status: "won",
          },
          {
            name: "Carta 3",
            type: "shopping",
            ommepoints: "300",
            status: "available",
          },
        ],
        numLevels: 5,
        numLevelsCompleted: 2,
        reward: "+50€ sconto",
      },
    ],
    socialGoals: [
      {
        name: "Mi piace su Facebook",
        action: "action-fb",
      },
      {
        name: "Tagga OMME Music su Facebook",
        action: "action-fb",
      },
      {
        name: "Condividi pagina Facebook",
        action: "action-fb",
      },
      {
        name: "Storia Instagram con tag",
        action: "action-fb",
      },
      {
        name: "Condividi video artista su Youtube",
        action: "action-fb",
      },
      {
        name: "Like a video artista",
        action: "action-fb",
      },
      {
        name: "Mi piace su Instagram",
        action: "action-fb",
      },
      {
        name: "Tagga OMME Music su Instagram",
        action: "action-fb",
      },
      {
        name: "Invita amici su Facebook",
        action: "action-fb",
      },
      {
        name: "Condividi post su Facebook",
        action: "action-fb",
      },
      {
        name: "Iscriviti al canale YouTube",
        action: "action-fb",
      },
      {
        name: "Condividi scheda matrimonio.com",
        action: "action-fb",
      },
    ],
    opStart: 1200,
    opTotal: 2200,
    activeItem: "tabPane1",
    today: Date.now(),
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    userValidation(name, password) {
      if (
        name === this.coupleEmail ||
        (name === this.coupleName && password === this.password)
      ) {
        this.isLogged = true;
      }
    },
  },
  computed: {
    todayString: function () {
      let currentDate = new Date();
      let currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      currentDateWithFormat = currentDateWithFormat.toString();
      let splitString = currentDateWithFormat.split("/");
      currentDateWithFormat =
        splitString[2] + "/" + splitString[1] + "/" + splitString[0];
      return currentDateWithFormat;
    },
  },
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal__overlay");
const btnCloseModal = document.querySelector(".modal__close");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.add("show");
  overlay.classList.add("show");
};

const closeModal = function () {
  modal.classList.remove("show");
  overlay.classList.remove("show");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//COUNTDOWN

let weddingDate = app.$data.weddingDate;
let weddingHour = app.$data.weddingHour;
let dateTokens = weddingDate.split(" ");
let day = dateTokens[0];
let month = dateTokens[1];
let year = dateTokens[2];

switch (month) {
  case "gennaio":
    month = "01";
    break;
  case "febbraio":
    month = "02";
    break;
  case "marzo":
    month = "03";
    break;
  case "aprile":
    month = "04";
    break;
  case "maggio":
    month = "05";
    break;
  case "giugno":
    month = "06";
    break;
  case "luglio":
    month = "07";
    break;
  case "agosto":
    month = "08";
    break;
  case "settembre":
    month = "09";
    break;
  case "ottobre":
    month = "10";
    break;
  case "novembre":
    month = "11";
    break;
  case "dicembre":
    month = "12";
    break;
}

weddingDate = `${year}-${month}-${day} ${weddingHour}:00`;

const monthsElement = document.getElementById("months");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");

const getTimeDifference = (targetDate) => {
  let diff = targetDate.getTime() - Date.now();

  if (diff < 0) {
    return {
      months: 0,
      days: 0,
      hours: 0,
    };
  }

  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 7 * 4));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  return { months, days, hours };
};

const updateTime = (targetDate) => {
  const { months, days, hours } = getTimeDifference(targetDate);
  monthsElement.innerText = months.toString().padStart(2, "0");
  daysElement.innerText = days;
  hoursElement.innerText = hours.toString().padStart(2, "0");
};
const targetDate = new Date(weddingDate);
updateTime(targetDate);
setInterval(updateTime, 1000, targetDate);
