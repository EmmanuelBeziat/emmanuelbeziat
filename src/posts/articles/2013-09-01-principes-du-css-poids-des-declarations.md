---
title: "Principes du CSS - Poids des déclarations"
date: "2013-09-01 23:10:27"
tags:
- html/css
categories:
- Tutoriels
---

Parfois, votre CSS ne semble pas avoir d’effet. Vous ajoutez une classe à un élément pour le rendre rouge, et celui-ci reste désespérément bleu. Mais pourquoi ? Hé bien, ami lecteur fort curieux (et tu as raison) en train de faire ta veille internet, je vais t’expliquer le **poids des déclarations** (ouaiiis !).

Pour rappel, la déclaration, c’est ce qui cible un ou plusieurs éléments html :

```css
#monElement div.element { }
```

## Le poids de chaque élément

Vous devez donc savoir qu’il y a trois façons "basiques" de cibler un élément, c’est à dire trois sélecteurs de base : l’identifiant (ID, #), la classe (class, .), ou le nom de l’élément :

```css
element { color: red } /* nom */
.element { color: red } /* classe */
#element { color: red } /* identifiant */
```

Hé bien ces trois sélecteurs ont chacun un poids :

*   L’élément a un poids de 1
*   La classe a un poids de 10
*   L’identifiant a un poids de 100

Le poids d’une déclaration est calculé par simple addition de ces poids. Ainsi, prenons pour exemple cette déclaration :

```css
#monID .maClasse {}
```

Le premier élément est un identifiant, il vaut donc 100\. Le second est une classe, il vaut donc 10\. Le poids de cette déclaration est donc 100 + 10 = 110\. Simple non ?
Voici d’autres exemples :

```css
#monID span {}
```
Identifiant (100) + élement (1) = 101

```css
#monID #autreID div.maClasse {}
```

identifiant (100) + identifiant (100) + element (1) + classe (10) = 211

```css
.maClasse .autreClasse #monID {}
```
classe (10) + classe (10) + identifiant (100) = 120
c’est compris ?

_"Mais à quoi ça nous sert ?"_, vous demandez-vous sûrement. Hé bien c’est simple : **Plus une déclaration a un poids élevé, plus elle est prioritaire sur une autre**, peu importe l’ordre de déclaration.

Jusqu’ici, vous saviez que l’ordre des déclarations influait sur leur emploi :

```css
span { color: red }
span { color: blue }
span { color: green }
```

c’est toujours vrai, l’élément ciblé ici serait de couleur verte, mais uniquement parce que le poids des déclarations est identique. Mais maintenant voyons ceci :

```css
#monID { color: red }
span { color: blue }
```

Si l’élément ciblé est un span qui porte l’id "monID", alors son texte sera de couleur rouge, car le poids de la première déclaration est de 100 (identifiant), la seconde n’étant que de 1 (élément).

Prenons un exemple en html :

```markup
<ul id="menu">
	<li class="color"><a href="#">Lien 1</a></li>
	<li><a href="#">Lien 2</a></li>
	<li><a href="#">Lien 3</a></li>
	<li><a href="#">Lien 4</a></li>
	<li><a href="#">Lien 2</a></li>
</ul>
```

Maintenant, imaginons un CSS déjà existant pour ce html, qui vise à colorer les liens en rouge :

```css
#menu a { color: red }
```

Cette déclaration a donc un poids de 101 (un identifiant et un élément);

Sur ce, vous voulez que le lien dont la liste porte la classe "color" s’affiche en vert.

```css
.color a { color: green }
```

Surprise ! Ça ne fonctionne pas. En effet, cette déclaration n’a un poids que de 11, donc il ne surclasse pas la précédente de 102 même en étant placé après. Il faut donc écrire une déclaration dont le poids surpassera la première :

```css
#menu .color a { }
```

Cette déclaration fait donc 111 (identifiant + classe + element), son poids est supérieur à la première, et notre lien s’affiche en vert.

Les pseudo-classes (`:hover`, `:first-child`, etc.) ont le même poids qu’une classe (donc 10) et les pseudo-éléments ont le même poids qu’un élément (1). {.c-note .c-note--info}


Attention toutefois : Il ne s’agit pas d’une simple notation mathématique, mais de "niveaux de poids". 10 classes n’auraient le même poids qu’un ID. Il est impossible de surcharger un type "supérieur" — en clair, des éléments ne pourront pas surcharger une classe, une classe ne pourra pas surcharger un ID, etc.
\nPour être plus précis, il faudrait noter "1.0.1" et non simplement "101". Ce qui signifie que si on rajoutait 15 classes à cette déclaration, on obtiendrait un poids de "1.15.1", et non 251. {.c-note .c-note--important}

### Notez bien !

D’une manière générale, dans le métier, on essaie de faire des déclarations "minimales", c’est à dire au poids le plus petit possible. En effet, pour l’exemple précédent, on aurait pu faire une déclaration de ce genre :

```css
ul#menu li a { color: red }
```

Ces déclarations peuvent vite devenir très longues, et les raccourci un maximum est un bon moyen de s’assurer à la fois que le code continuera à changer même si le markup (Template) de la page change dans l’avenir, et de permettre d’optimiser un peu le poids de la feuille de CSS. Mais surtout, cela permet de pouvoir surclasser ces déclarations très facilement. En effet, il y a bien plus de façons simples de surclasser une déclaration d’un poids de 102 que de 625 lorsqu’on veut effectuer une petite modification.

Pensez-y !

## Cas particuliers

```markup
<div style="color:red">mon texte</div>
```

Déclarer du CSS inline (c’est à dire dans le html) lui donne automatiquement un poids de 1 000\. Autant dire que vous ne pourrez presque rien faire dans votre feuille de style pour le surclasser ! c’est aussi pour ça qu’il faut éviter de mettre du CSS de cette façon. Comment faire alors ?

Hé bien le marqueur `!important` donne un poids de 10 000\. De quoi surclasser tout ce qui se trouve dans la page, y compris le CSS _inline_.
```css
element { color: red !important }
```

Retenez donc que ces deux cas particuliers ne devraient pas être utilisés. La gestion du poids comme de l’héritage suffit largement pour
mettre votre site en forme !

Voilà, maintenant vous savez tout sur le poids des déclarations en CSS.

#### Edit du 7 Avril

Si vous n’avez rien compris, si vous pensez que des métaphores avec des animaux mignons et des gifs animés vous aideront à mieux appréhender le concept, ou tout simplement si vous trouvez que j’explique mal, **Lamecarlate** a fait un bon article qu’elle a sobrement (Et honteusement, c’était mon idée !) nommé  [Sélecteurs CSS : poids des déclarations](http://informatique.lamecarlate.net/blog/articles/selecteurs-css-poids "Lamecarlate"){ target="_blank" }
