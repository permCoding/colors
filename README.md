## colors

https://permcoding.github.io/colors/

---  

## Современные инструменты программиста  

Программист:  
- работает в команде  
- использует разные технологии  
- оставляет на доработку  
- сам дорабатывает чужой код  
- разделяет работу над интерфейсом и над логикой  

---  

Сегодня мы исследуем, сделаем:  
_0)_ знакомство с инструментом онлайн трансляции (рисуем, шэрим экран)  
_1)_ разметка интернет страниц  
_2)_ хакнем VK, YouTube  
_3)_ создание лонгрида  
_4)_ сервис GitHub  
_5)_ создание своего лонгрида  
_6)_ интерактивность  
_7)_ размещение игрушки  

---  

### 1 - исследуем разметку  

**ШАГ 0 - Структура html-документа**  
```
<html>

<head>
    <title>Заголовок</title>
</head>

<body>
    Содержание
</body>

</html>
```

**ШАГ 1 - Элементы разметки**  
```
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Заголовок</title>
</head>

<body>

    <p>Mandalorian-2</p>
    <img src="" alt="Тут будет картинка">   
    <p>тут текст абзаца</p>
    <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB%D0%BE%D1%80%D0%B5%D1%86">можно взять из wiki</a>
    <p>тут текст абзаца</p>
    <p>тут текст абзаца</p>
    
</body>

</html>
```

**ШАГ 2 - Наполняем содержимым**  
```
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Заголовок</title>
</head>

<body>

    <p>Mandalorian-2</p>
    <img src="./mandalorian.jpg" alt="Тут будет картинка">   
    <p>«Мандало́рец» (англ. The Mandalorian), также известен, как «Звёздные во́йны: Мандало́рец» (англ. Star Wars: The
    Mandalorian), — американский телесериал в жанре космический вестерн, созданный Джоном Фавро и ...</p>
    <p>Фавро выступает ...</p>
    <p>Премьера второго сезона ...</p>
    <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB%D0%BE%D1%80%D0%B5%D1%86">Источник данных</a>

</body>

</html>
```

**ШАГ 3 - Оформление**  
```
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Заголовок</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div>
        <p class="title">Mandalorian-2</p>
        <img src="./mandalorian.jpg" alt="Тут будет картинка">
        <p>«Мандало́рец» (англ. The Mandalorian), также известен, как «Звёздные во́йны: Мандало́рец» (англ. Star Wars: The Mandalorian), — американский телесериал в жанре космический вестерн, созданный Джоном Фавро и выходящий ... Главную роль исполняет Педро Паскаль.</p>
        <p>Фавро выступает главным сценаристом и шоураннером сериала...</p>
        <p>Премьера второго сезона, также состоящего из восьми серий, состоялась 30 октября 2020 года...</p>
        <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB%D0%BE%D1%80%D0%B5%D1%86">Источник данных</a>
        <p class="label">Автор работы</p>
    </div>

</body>

</html>
```
```
body {
    background-color: darkseagreen;
}

div {
    text-align: center;
}

p {
    font-family: Helvetica, Arial, sans-serif;
    color: #45343A;
    font-size: 24px;

    line-height: 1.2;
    padding-left: 80px;
    padding-right: 80px;
    text-align: justify;
}
p.title {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    color: #45343A;
}
p.label {
    padding-left: 80px;
    padding-right: 80px;
    text-indent: 50px;
    text-align: right;
    color: navy;
}
```

---  

Примеры лонгридов:  
[Что такое DOCTYPE](https://hero-css.com/page/doctype)  
[Падение Храма Джедаев](https://zen.yandex.ru/media/gamefans/padenie-hrama-djedaev-jestokaia-bitva-kotoruiu-ne-pokazali-v-zvezdnyh-voinah-5fc1ef0cb545e63488ac95c2)  

---  



