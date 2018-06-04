ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
function init() {
  // функция - собиралка карты и фигни
  myMap = new ymaps.Map("map__api", {
    // создаем и присваиваем глобальной переменной карту и суем её в див с id="map"
    center: [59.939252, 30.322829], // ну тут центр
    behaviors: ["default", "scrollZoom"], // скроллинг колесом
    zoom: 17 // тут масштаб
  });
  myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
    // .add("zoomControl", { left: 5, top: 5 }) //Масштаб
    // .add("typeSelector") //Список типов карты
    // .add("mapTools", { left: 35, top: 5 }) // Стандартный набор кнопок
    // .add("searchControl"); // Строка с поиском
  /* Создаем кастомные метки */
  myPlacemark0 = new ymaps.Placemark(
    [59.938612, 30.322647

],
    {
      // Создаем метку с такими координатами и суем в переменную
      balloonContent:
        '<div class="ballon"><img src="../img/map-marker.png" class="ll"/></div>' // сдесь содержимое балуна в формате html, все стили в css
    },
    {
      iconImageHref:
        "../img/map-marker.png", // картинка иконки
      iconImageSize: [231, 190], // размер иконки
      iconImageOffset: [-10, -220], // позиция иконки
      balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
      balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
      // balloonImageHref: 'img/ballon1.png', // Картинка заднего фона балуна

      balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
      balloonShadow: false,
      balloonAutoPan: false // для фикса кривого выравнивания
    }
  );
  /* тоже самое для других меток */
  /* Добавляем */
  myMap.geoObjects.add(myPlacemark0);

  /* Фикс кривого выравнивания кастомных балунов */
  myMap.geoObjects.events.add(["balloonopen"], function(e) {
    var geoObject = e.get("target");
    myMap.panTo(geoObject.geometry.getCoordinates(), {
      delay: 0
    });
  });
}
