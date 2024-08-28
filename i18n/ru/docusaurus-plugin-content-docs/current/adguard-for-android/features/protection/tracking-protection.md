---
title: Tracking protection
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

The Tracking protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _Tracking protection_.

_Tracking protection_ (formerly known as _Stealth Mode_) prevents websites from collecting information about you, such as your IP addresses, information about your browser and operating system, screen resolution, and the page you came or were redirected from. It can also block cookies that websites use to mark your browser, save your personal settings and user preferences, or recognize you on your next visit.

![Tracking protection \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_Tracking protection_ has three pre-configured levels of privacy protection (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Here are the active features of the pre-configured levels:

1. **Standard**

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   c. _Remove X-Client-Data header_. This feature prevents Google Chrome from sending information about its version and modifications to Google domains (including DoubleClick and Google Analytics)

2. **High**

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Remove tracking parameters from URLs_. This feature uses _AdGuard URL Tracking filter_ to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

   c. _Hide your search queries_. This feature hides queries for websites visited from a search engine

   d. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   е. _Self-destruction of third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes

   :::caution

   This feature deletes all third-party cookies after their forced expiration. This includes your logins through social networks or other third-party services. You may need to re-log in to some websites periodically or experience other cookie-related issues. To block only tracking cookies, use the _Standard_ protection level.

   :::

   f. _Remove X-Client-Data header_. This feature prevents Google Chrome from sending its version and modifications information to Google domains (including DoubleClick and Google Analytics)

3. **Extreme** (formerly known as _Ultimate_)

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Remove tracking parameters from URLs_. This feature uses _AdGuard URL Tracking filter_ to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

   c. _Hide your search queries_. This feature hides queries for websites visited from a search engine

   d. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   е. _Self-destruction of third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes

   :::caution

   This feature deletes all third-party cookies after their forced expiration. Сюда входят ваши логины в социальных сетях или других сторонних сервисах. Возможно, вам придётся периодически повторно входить на некоторые сайты или испытывать другие проблемы, связанные с файлами куки. Чтобы блокировать только отслеживающие куки, используйте _Стандартный уровень защиты_.

   :::

   f. _Блокировать WebRTC_. Эта функция блокирует WebRTC — уязвимость, которая может привести к утечке вашего IP-адреса, даже если вы используете прокси или VPN

   g. _Блокировать Push API_. Эта функция не позволяет вашим браузерам получать push-сообщения от серверов

   h. _Блокировать Location API_. Эта функция не позволяет браузерам получать доступ к вашим данным GPS и определять ваше местоположение

   i. _Скрывать Referer от третьих лиц_. Эта функция не позволяет третьим лицам узнать, какие сайты вы посещаете. Она скрывает HTTP-заголовок, содержащий URL-адрес начальной страницы, и заменяет его на стандартный или пользовательский, который вы можете задать

   j. _Скрыть User-Agent_. Эта функция удаляет из заголовка User-Agent идентифицирующую информацию, которая обычно включает название и версию браузера, операционную систему и языковые настройки

   k. _Удалять заголовок X-Client-Data_. Эта функция не даёт отправлять информацию о версии и модификации Google Chrome на домены Google (включая DoubleClick и Google Analytics)

Вы можете изменить отдельные параметры в разделе _Антитрекинг_ и создать индивидуальную конфигурацию. У каждой настройки есть описание, которое поможет вам понять её роль. [Read more about what the various _Tracking protection_ settings do](/general/stealth-mode) and utilize them cautiously, as some may interfere with the functionality of websites and browser extensions.
