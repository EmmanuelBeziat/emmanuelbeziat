---
title: "Utiliser les propriétés de police avec une font-web"
date: "2013-07-13 23:28:05"
tags:
- html/css
categories:
- Tutoriels
---

Il vous est peut-être déjà arrivé d’utiliser `@font-face` ? Cette propriété permet l’ajout de polices (_typos_, _fonts_…) sur vos sites web sans que le visiteur n’ait besoin de les installer sur son ordinateur. De nombreux sites, tels que [FontSquirrel](http://www.fontsquirrel.com/) permettent de générer le CSS nécessaire tout en convertissant les fichiers aux formats appropriés.<p>
<p>Mais les CSS proposés par défaut séparent les différents styles d’une même police, en la traitant comme des polices différentes (et donc séparées). Il faut donc, en fonction de vos besoins, non pas utiliser les propriétés `font-weight` ou `font-style` pour modifier l’épaisseur ou la mise en italique d’un texte, mais carrément demander à utiliser une autre police avec `font-family`, tout en gérant quand même ces propriétés pour les polices "_fallback_".

Mais il existe une façon d’utiliser proprement ces polices, et la voici…


### Une simple question d’organisation

La méthode en question est très simple. Alors que le générateur vous fournira un nom de police différent pour chaque police que vous lui avez envoyé, tout en mettant les valeurs de `font-weight` et `font-style` sur `normal` :

~~~.language-css
@font-face {
	font-family: "MaPoliceRegular"
	src: url("MaPolice-Regular-webfont.eot");
		 url("MaPolice-Regular-webfont.woff") format("woff");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "MaPoliceGras"
	src: url("MaPolice-Gras-webfont.eot");
	src: url("MaPolice-Gras-webfont.eot?#iefix") format("embedded-opentype"),
		 url("MaPolice-Gras-webfont.woff") format("woff");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "MaPoliceItalique"
	src: url("MaPolice-Italique-webfont.eot");
	src: url("MaPolice-Italique-webfont.eot?#iefix") format("embedded-opentype"),
		 url("MaPolice-Italique-webfont.woff") format("woff"),
		 url("MaPolice-Italique-webfont.ttf") format("truetype"),
		 url("MaPolice-Italique-webfont.svg#MaPoliceItalique") format("svg");
	font-weight: normal;
	font-style: normal;
}
~~~

La solution, c'est simplement de modifier ce code par défaut afin de mettre un nom (`font-family`) identique pour tous, et des propriétés (`font-weight` et `font-style`) qui correspondent à la police en question :

~~~.language-css
@font-face {
	font-family: "MaPolice"
	src: local("Ma Police Regular"),
		 url("MaPolice-Regular-webfont.woff2") format("woff2"),
		 url("MaPolice-Regular-webfont.woff") format("woff");
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: "MaPolice"
	src: local("Ma Police Gras"),
		 url("MaPolice-Gras-webfont.woff2") format("woff2"),
		 url("MaPolice-Gras-webfont.woff") format("woff");
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: "MaPolice"
	src: local("Ma Police Italic"),
		 url("MaPolice-Italique-webfont.woff2") format("woff2"),
		 url("MaPolice-Italique-webfont.woff") format("woff");
	font-weight: 400;
	font-style: italic;
}~~~

De cette façon, vous pouvez appliquer les propriétés à votre police "MaPolice", sans avoir besoin d’en changer : le CSS saura qu'il faut charger une police différente en fonction des valeurs de ces propriétés.

### Un exemple ?

Voici [une page d’exemple](http://lab.infographizm.com/css/fonts/webfonts-tests-weight/) si vous souhaitez voir le code d’un peu plus près.
