# web-vitals-theory

Web Vitals - это инициатива Google, цель которой - предоставить единое руководство по сигналам качества, необходимым для обеспечения хорошего взаимодействия с пользователем в Интернете.

Core Web Vitals - это часть метрик Web Vitals, используемых для оценки веб-страниц и включенных во все инструменты Google. Владельцы сайтов должны учитывать эти метрики. Каждый показатель Core Web Vitals представляет собой отдельный аспект опыта взаимодействия пользователя с сайтом, измеряемый в полевых условиях и отражающий реальные действия по достижению критически важного результата, ориентированного на пользователя.

Метрики Core Web Vitals будут развиваться с течением времени. Текущий набор за 2020 год фокусируется на трех аспектах взаимодействия с пользователем: скорости загрузки страниц сайта, интерактивности и визуальной стабильности, и включает следующие показатели (и их соответствующие пороговые значения):

![dmk4cvohu1-ntiis0hlyxa1tf9e](https://user-images.githubusercontent.com/66056854/233201552-83b3a368-2c8b-4070-b748-c3af80ea0555.jpg)

Largest Contentful Paint (LCP | скорость) : Скорость загрузки основного контента: измеряет производительность загрузки. Чтобы обеспечить удобство работы пользователей, показатель LCP должен быть в пределах 2,5 секунды от начала загрузки страницы.
Улучшения: всё что нужно для отбражения в preload / отказ от фоновых изображений / упрощение визуальной состовляющей

First Input Delay (FID | интерактивность) : Время ожидания до первого взаимодействия с контентом: измеряет интерактивность. Чтобы обеспечить удобство работы пользователей, показатель FID у страниц не должен превышать 100 миллисекунд.
Улучшения: Оптимизация longtask / использование чанков и lazyload (всё что связано с интерактивом вынести в начало)

Cumulative Layout Shift (CLS | стабильность) : Совокупное смещение макета: измеряет визуальную стабильность. Чтобы обеспечить удобство работы пользователей, показатель CLS не должен превышать 0,1.
Улучшения: Резервируйте место под элементы, которые появляются после загрузки основного контента (реклама, сторонниевиджеты, отложенные изображения, iframe)

![glsq6nes2fuv8bxp0rkoe1r4ous](https://user-images.githubusercontent.com/66056854/233201398-bd69b69e-563e-4ab8-888d-b96e0c538b35.jpg)

# ссылки


https://web.dev/i18n/ru/vitals/
https://www.youtube.com/watch?v=OqbCNprhrlA
https://www.youtube.com/watch?v=s97e2oYpFMw
