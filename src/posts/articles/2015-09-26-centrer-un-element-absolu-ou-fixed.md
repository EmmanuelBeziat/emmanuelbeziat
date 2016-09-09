---
title: "Centrer un élément absolu (ou fixed)"
date: "2015-09-26 13:12:02"
tags:
- html/css
categories:
- Tutoriels
---

Pas plus tard qu'il y a pas longtemps, on utilisait des méthodes de barbare pour centrer nos éléments en CSS. Aujourd’hui, c'est encore un peu la galère, même si `flexbox` arrive petit à petit à notre rescousse.

Reste que pour centrer un élément positionné de façon absolue ou fixe, on ne peut pas encore faire de miracles. À moins que…


## Avant…

Avant, on partait du principe qu'il fallait connaître la largeur de l’élément qu'on voulait centrer. Alors on appliquait un top / left, puis un margin-top / left négatif, comme suit :

```css
element {
	position: absolute;
	width: 400px;
	left: 50%;
	margin-left: -200px;
}
```

Le problème, c'est qu'il faut que la taille soit fixe, et connue. Mais que se passe-t-il si la taille peut-être variable ? Hé, ouais.

## Maintenant !

Maintenant, on a une possibilité supplémentaire, en utilisant `transform` :

```css
element {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}
```

Il est possible de faire de même verticalement avec `top` et `translateY`. Ainsi, l’élément est centré sans avoir besoin de préciser une largeur ou une hauteur.
