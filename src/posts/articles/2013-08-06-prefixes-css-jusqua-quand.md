---
title: "Préfixes CSS, jusqu’à quand ?"
date: "2013-08-06 16:10:16"
tags:
- html/css
- bonnes pratiques
- workflow
categories:
- Tutoriels
---

Ou plus exactement, comment savoir s’il est pertinent d’utiliser une tartine de propriétés préfixées ou s’en tenir à la seule propriété finale.


### Mais qu’est-ce que tu racontes ?

Pour ceux d’entre toi, lecteur, qui ne comprendrais pas de quoi je parle, voici un chouette petit résumé explicatif !

Les "**préfixes propriétaires**" (aussi connus sous le sobriquet de "préfixes vendeurs"), sont apparus afin d’intégrer dans le CSS des propriétés non-standardisées (la standardisation étant le travail du [W3C](http://www.w3.org/){ target="_blank" rel="noopener" }, l’organisme chargé de chapeauter les technologies html/css). On ajoute donc un préfixe devant la propriété CSS, comme ça : `-prefixe-propriété`. En sachant qu’il y a plusieurs préfixes existants, on se retrouve souvent avec ceci :

```css
élément {
	-webkit-propriété: valeur;
	-moz-propriété: valeur;
	-ms-propriété: valeur;
	-o-propriété: valeur;
	propriété: valeur;
}
```

Et là, tu vas me dire "Mais qu’est-ce que c’est ce foutoir ?" (et tu auras raison !). Hé bien chaque préfixe correspond à un moteur de rendu qui équipe différents navigateurs. En voici la liste non-exhaustive (car il y a PLEIN de navigateurs) avec seulement les principaux :

*   `-webkit-` : préfixe pour le moteur **WebKit**, qui équipe Safari (et sa version mobile), Chromium, Chrome, Opera, Epiphany, Konqueror, Iron, Maxthon…
*   `-moz-` : préfixe pour le moteur **Gecko** développé par Mozilla et qui est donc utilisé par Firefox, SeaMonkey…
*   `-ms-` : préfixe pour le moteur **Trident** développé par Microsoft, utilisé par Internet Explorer et les anciennes version de Maxthon
*   `-o-` : préfixe pour le moteur Presto, jusqu’à très récemment utilisé par Opera, qui a maintenant migré sur Blink, la version personnalisée de WebKit par Google (qui équipe aussi Chrome, donc).

On voit parfois passer le préfixe `-kthml-`, mais il est bien moindre car correspond à un moteur très peu utilisé. Et si vous voyez `-htm-`, c’est facile : il n’existe pas, c’est une erreur.

## Comment savoir quand utiliser un préfixe ?

c’est là le but de cet article. En effet, les préfixes ont l’avantage de proposer des versions "beta" (non complètes) des propriétés en cours d’élaboration par le W3C (en contrepartie, leur prise en charge est parfois partielle et bancale) pour que les développeurs puissent commencer à travailler avec, mais ils posent aussi un problème de compatibilité, car un préfixe `-moz-` ne sera pas lu par un navigateur qui ne tourne pas sur Gecko, de même qu’un préfixe `-webkit-` ne sera pas pris en compte par un navigateur non-webkit. Mais ajouter des préfixes pour tous les navigateurs possible représente un travail conséquent et alourdit le code. De plus, les propriétés étant toujours en cours d’élaboration, leur syntaxe est susceptible de changer (c’est ce qui s’est passé avec `linear-gradient`). De plus dans certains cas, la propriété est finalisée depuis suffisamment longtemps pour que la plupart des navigateurs aient pu l’implémenter correctement, et les préfixes ne sont donc plus utiles. Dans certains cas, ils ne sont plus pris en charge par les versions récentes d’un navigateur (c’est le cas de `-moz-border-radius`).

Mettez toujours la propriété finale (donc sans préfixes) après les propriétés préfixées. Ce n’est pas une lubie, mais un principe de logique : le navigateur doit lire en dernier la propriété finale et l’appliquer à la place de la propriété préfixée. {.c-note .c-note--important}

### Une solution : se renseigner

Un site référence quelles propriétés sont disponibles avec ou sans préfixes, et pour quels navigateurs. Il s’agit de [Can I Use](http://caniuse.com/){ target="_blank" rel="noopener" }. Il permet de voir, pour chaque propriété, la prise en charge pour chaque navigateur principal. Maintenant, voyons comment tirer parti de ces informations. Nous allons prendre pour ça l’exemple de la propriété `transition`, dont [la page est ici](http://caniuse.com/#feat=css-transitions){ target="_blank" rel="noopener" }. On constate que :

*   Il n’y a eu aucun préfixe pour aucune version d’IE, on peut donc se passer du préfixe `-ms-`
*   Firefox supporte la propriété finale depuis plus de 5 version, on peut donc raisonnablement se passer de `-moz-`
*   Chrome supporte la propriété finale depuis six versions, mais Safari que depuis la version 7\. Pour iOS et Androïd Mobile, trop récent aussi ; il est donc judicieux d’utiliser `-webkit-`
*   Opera supportait la version finale en sa version dernière version sous Presto (12.1). Le pourcentage d’utilisateurs au-dessous de la version 12.1 étant très faible, on peut se passer de `-o-`. Bien qu’ils utilisent depuis Webkit comme moteur de rendu, il est inutile de s’en préoccuper ici, n’ayant jamais implémenté de version préfixée avec `-webkit-` de cette propriété.

Notre code sera donc tout simplement :

```css
élément {
	-webkit-transition: all 1s ease;
	transition: all 1s ease;
}
```

À refaire pour chaque propriété sur laquelle vous pourriez avoir un doute, bien entendu.

Notez bien que les informations de cet articles sont valables à sa date de rédaction. Je ne le mettrai pas à jour chaque fois qu’une propriété change un poil, donc comprenez-en le sens mais notez que les propriétés présentées peuvent avoir été validées depuis longtemps au moment où vous lirez ceci. {.c-note .c-note--info}

## Pour se faciliter la vie

### Un peu de javascript

**Léa Verou** propose un petit fichier Javascript de sa création [à télécharger ici](http://leaverou.github.io/prefixfree/){ target="_blank" rel="noopener" }, qui va s’occuper de gérer les préfixes à votre place ; la contrepartie, c’est que vous n’aurez pas la même finesse qu’en faisant le choix manuellement.

### Les _Task Runners_

Les _task runners_ ont envahi le petit monde du front-end il y a maintenant quelques années. Les plus connus sont [Grunt](http://gruntjs.com/){ target="_blank" rel="noopener" }, [Gulp](http://gulpjs.com/){ target="_blank" rel="noopener" } et [Brunch](http://brunch.io/){ target="_blank" rel="noopener" }. Leur rôle est de réaliser des tâches rébarbatives pour nous faciliter la vie : compiler des préprocesseurs (Sass, Less, Stylus, Jade, CoffeeScript), minifier et concaténer des fichiers, optimiser des images, etc. Mais ils peuvent également préfixer automatiquement les propriétés d’un CSS, en se basant sur CanIUse, avec une petite configuration pour régler le niveau de support qu’on souhaite avoir.

Je ne rentrerais pas ici dans les détails, pour en savoir plus : [AutoPrefixer](https://github.com/postcss/autoprefixer "AutoPrefixer sur GitHub"){ target="_blank" rel="noopener" }

## Aide-mémoire

Parce qu’un peu de généralités ne fait pas de mal !

### Propriétés CSS3 qui ne nécessitent plus de préfixes

*   [border-radius](http://caniuse.com/#feat=border-radius){ target="_blank" rel="noopener" }
*   [box-shadow](http://caniuse.com/#feat=css-boxshadow){ target="_blank" rel="noopener" }
*   [text-shadow](http://caniuse.com/#feat=css-textshadow){ target="_blank" rel="noopener" }
*   [opacity](http://caniuse.com/#feat=css-opacity){ target="_blank" rel="noopener" }
*   [background-size](http://caniuse.com/#feat=background-img-opts){ target="_blank" rel="noopener" }
*   [box-sizing](http://caniuse.com/#feat=css3-boxsizing){ target="_blank" rel="noopener" }
*   [transition](http://caniuse.com/#feat=css-transitions){ target="_blank" rel="noopener" }
*   [gradient](http://caniuse.com/#feat=css-gradients){ target="_blank" rel="noopener" } (à utiliser toutefois avec un fallback)

Je ne mets ici que les propriétés qui ont longtemps été préfixées, pas la liste complète des propriétés CSS3 qui n’ont pas besoin de préfixes. {.c-note .c-note--info}
