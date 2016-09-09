---
title: "Des barres de progression toutes simples en CSS"
date: "2014-02-06 04:37:43"
tags:
- html/css
categories:
- Tutoriels
---

J’ai reçu récemment une demande d’explication sur ma méthode pour créer les barres de progression sur mon site (sous les compétences, en page d’accueil).

Bien que tout simple, je me suis dit que ça pourrait intéresser du monde. En avant guinguette !


## Le html

Alors on va la faire simple. Pour moi j’ai utilisé une liste non-ordonnée html, simplement parce qu'il s'agissait d’une liste de compétences (Ouais, c'est pas compliqué le html, voyez ?). Inutile de préciser que ça marcherait avec n’importe quoi. Aussi, pour l’exemple, je vais utiliser de bonnes vieilles `div`.

```markup
<div class="barre" data-length="30"></div>
<div class="barre" data-length="20"></div>
<div class="barre" data-length="50"></div>
<div class="barre" data-length="80"></div>
<div class="barre" data-length="40"></div>
```

### Data-length ?

Alors certains se posent peut-être une question intéressante, par exemple "mais kaisseucé ?".

L’attribut `data-` permet de stocker des données sur des éléments, tout simplement. [D’autres en parlent bien mieux que moi](http://www.alsacreations.com/article/lire/1397-html5-attribut-data-dataset.html){ target="_blank" } !

C'est arbitraire, j’aurais aussi bien pu utiliser une classe, mais je trouvais ça tellement plus _pimp_ d’utiliser de beaux `data-` que j’y ai été à cœur joie. Dans les faits, ça se prête très bien au CSS avec les [sélecteurs d’attributs](http://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie1-css2/#selecteur-attribut) (va lire mon tutoriel sur les sélecteurs, va !).

## Le CSS

Ma foi, ce n’est pas plus compliqué que ça. On va utiliser le positionnement relatif et absolu, et le pseudo-élément :after (se référer au tutoriel sur les sélecteurs, encore une fois).

On commence par donner le style de fond à la `div`, ainsi qu'un positionnement relatif pour pouvoir ensuite positionner le pseudo-élément.

```css
.barre {
	width: 300px;
	background: grey;
	border: 2px solid grey;
	position: relative;
	height: 10px;
}
```

Maintenant, on donne un style au pseudo-élément, qui devient notre barre "intérieure" :

```css
.barre:after {
	content: ""
	position: absolute;
	background: orange;
	left: 0;
	top: 0;
	bottom: 0;
}
```

Reste ensuite à leur attribuer une largeur, en fonction de la valeur de notre `data-length`. Je ne vous mets que les dizaines (parce que ça n’a pas beaucoup d’intérêt de faire plus, à mon sens ; et aussi parce que j’ai la flemme de me cogner les 90 autres valeurs.).

```css
.barre[data-length="10"]:after { width: 10% }
.barre[data-length="20"]:after { width: 20% }
.barre[data-length="30"]:after { width: 30% }
.barre[data-length="40"]:after { width: 40% }
.barre[data-length="50"]:after { width: 50% }
.barre[data-length="60"]:after { width: 60% }
.barre[data-length="70"]:after { width: 70% }
.barre[data-length="80"]:after { width: 80% }
.barre[data-length="90"]:after { width: 90% }
.barre[data-length="100"]:after { width: 100% }
```

## Conclusion

Et voilà ! On peut imaginer des animations pour remplir les barres petit à petit, récupérer la valeur de data-length en js dynamiquement et tout ça, mais c'était juste pour expliquer le principe.

Pour voir le tout en action, vous pouvez aller sur [mon CodePen](http://codepen.io/EmmanuelB/pen/nwivz "CodePen"){ target="_blank" }.
