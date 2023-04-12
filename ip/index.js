//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

function geoLocation(obje) {
  const cardOlustur = document.createElement("div");
  const imgOlustur = document.createElement("img");
  const cardInfo = document.createElement("div");
  const ipOlustur = document.createElement("h3");
  const ulkeOlustur = document.createElement("p");
  const enlemBoylam = document.createElement("p");
  const sehirOlustur = document.createElement("p");
  const saatDilimi = document.createElement("p");
  const paraBirimi = document.createElement("p");
  const isp = document.createElement("p");

  cardOlustur.classList.add("card");
  cardInfo.classList.add("card-info");
  ipOlustur.classList.add("ip");
  ulkeOlustur.classList.add("ulke");

  imgOlustur.src = obje.ülkebayrağı;
  ipOlustur.textContent = obje.sorgu;
  ulkeOlustur.textContent = `${obje.ülke} (${obje.ülkeKodu})`;
  enlemBoylam.textContent = `Enlem: ${obje.enlem}  Boylam:${obje.boylam} `;
  sehirOlustur.textContent = "Şehir: " + obje.şehir;
  saatDilimi.textContent = "Saat Dilimi: " + obje.saatdilimi;
  paraBirimi.textContent = "Para Birimi: " + obje.parabirimi;
  isp.textContent = "ISP: " + obje.isp;

  cardInfo.appendChild(ipOlustur);
  cardInfo.appendChild(ulkeOlustur);
  cardInfo.appendChild(enlemBoylam);
  cardInfo.appendChild(sehirOlustur);
  cardInfo.appendChild(saatDilimi);
  cardInfo.appendChild(paraBirimi);
  cardInfo.appendChild(isp);
  cardOlustur.appendChild(imgOlustur);
  cardOlustur.appendChild(cardInfo);

  return cardOlustur;
}

const cardsAl = document.querySelector(".cards");

axios
  .get("https://apis.ergineer.com/ipgeoapi/88.251.21.205")
  .then((response) => {
    cardsAl.appendChild(geoLocation(response.data));
  })
  .catch((error) => {
    console.log("Error");
  });