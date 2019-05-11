# Image Search
![](https://github.com/bilalkocak/hipo-frontend-exercise/blob/master/ScreenShot/Scenerio.gif?raw=true)

Bu proje  [Create React App](https://github.com/facebook/create-react-app) ile yapıldı.

## Web üzerinde çalışır hali

[Netlify](https://imagesearchbilalkocak.netlify.com/).

## Localde çalıştırmak

###### Gereksinimler

- NodeJs


------------

Dosyaların bulunduğu dizine girip  `npm start` komutunu çalıştırın.

Tarayıcıda [localhost:3000](http://localhost:3000) adresini açınca uygulama çalışıyor olacak.



## Uygulamaya Genel Bakış

#### Home Page

![](https://raw.githubusercontent.com/bilalkocak/hipo-frontend-exercise/master/ScreenShot/Home.png?token=AFQJ37HUESGEFNWE4G5LMTC44AACG)

Önceden belirlenen belli `collectionlar` içinde aratılacak anahtar kelime `query` bölümüne yazılarak arama yapılır.

- Eğer `query` girilmiş ise search butonu sizi '/search/:query/:collection' routeuna yönlendirir ve değerle doğrultusunda sonuçlar getirir.

- Eğer girilmeden butona basılmışsa '/search/random' adresinde yönlendirerek random 15 görsel getirir.

------------
#### Result Page

Önceden belirlenen belli `collectionlar` içinde aratılacak anahtar kelime `query` bölümüne yazılarak arama yapılır.

1. HomePage'den veya yukarıdaki bardan arama yapılır ve gerekli link oluşturulur.

2. Oluşturulan linkten parametreler alınarak sorguya dönüştürülür.

3. Görseller çekilirken loading animasyonu ekrana gelir.

	![](https://raw.githubusercontent.com/bilalkocak/hipo-frontend-exercise/master/ScreenShot/Loading.gif?token=AFQJ37AFN3NPT5EZFM3AF4C44ABYK)

4. İki ihtimal var:
	- Eğer uygun görseller var ise, görseller listelenir:
	
	![](https://raw.githubusercontent.com/bilalkocak/hipo-frontend-exercise/master/ScreenShot/ResultPage.jpg?token=AFQJ37BTW5YOI42PGR5T6J244ABIS)
	- Eğer görsel bulunamamış ise noResult componenti çalışır.
	
	![](https://raw.githubusercontent.com/bilalkocak/hipo-frontend-exercise/master/ScreenShot/NoResult.png?token=AFQJ37GTYJYCSRQUDDFZ5PC44ACNW)

5. Her sayfada 15 görsel getirilir ve aşağıdan sayfa değiştirilebilir.

6. Görsellere tıklandığında url sonuna resmin id'sini ekleyerek resmi büyük gösteren ve kullanıcı bilgilerini içeren bir modal açılır. Buradaki bilgiler id yardımıyla yeniden sorguyla elde edilir.

	![](https://raw.githubusercontent.com/bilalkocak/hipo-frontend-exercise/master/ScreenShot/PopUp.png?token=AFQJ37AZLGKV43Z6WKNSBOC44AC6A)

7. Açılan modalda `More Info` butonuna basılırsa, varsa fotoğraf konumunu içeren harita ve kamera EXIF bilgilerini içeren yeni bir modal daha açılır.

	![](https://raw.githubusercontent.com/bilalkocak/hipo-frontend-exercise/master/ScreenShot/PopUpMoreInfo.png?token=AFQJ37ECR3ZBYWEKWAQ6TZK44AC6K)

------------


#### 404 Page

![](https://raw.githubusercontent.com/bilalkocak/hipo-frontend-exercise/master/ScreenShot/404.png?token=AFQJ37H7IIMZDFLXEB5QEOS44ADNS)

App.js dosyasında tanımlanmış Route patternleri dışında bir  url girilirse bu sayfa açılır.


------------

## Kullanılan API ler ve React Modülleri

#### API
- Google Maps: Ücretsiz key alındı sadece develop ortamı için kullanım hakkı sunuyor.
- Unsplash API: Ücretsiz key alındı, saat başı 50 istek hakkı sunuyor. Görsel araması yaparken ve görsel bilgilerini isterken birer istek yapıyor.

#### React Modüller
- [Axios](https://github.com/axios/axios)
- [React-Spinners](https://github.com/davidhu2000/react-spinners):
- [Google-Maps-React](https://github.com/fullstackreact/google-maps-react):
- [React-Responsive-Modal](https://github.com/pradel/react-responsive-modal):
- [React-Router-Dom](https://github.com/ReactTraining/react-router):


