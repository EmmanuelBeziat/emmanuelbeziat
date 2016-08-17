---
title: "Aligner trois colonnes proprement"
date: "2013-07-11 02:00:08"
tags:
- html/css
categories:
- Tutoriels
---

C'est un problème auquel se confrontent régulièrement les intégrateurs : créer un **design en trois colonnes** - habituellement, deux menus latéraux (appelés "sidebar") et une colonne centrale pour le contenu du site.

Mais c'est en réalité très simple à faire, et nous allons voir comment.

## Le html

La première chose, c'est d’abord de placer les trois colonnes dans un conteneur, que nous appellerons ici "_container_". Ensuite, il faut mettre les éléments flottants (les sidebar donc) avant le corps central.

~~~.language-markup
<div class="container">
	<div class="sidebar--left"></div>
	<div class="sidebar--right"></div>
	<div class="content"></div>
</div>~~~

Comme toujours, essayez d’ajouter un peu de contenu pour pouvoir voir les effets ; utilisez par exemple le [générateur de lipsum](http://fr.lipsum.com/ "Générateur de lipsum").

## Le CSS

Maintenant, il suffit de mettre en place les éléments :

~~~.language-css
.container {
	overflow: auto;
}

.sidebar--left {
	width: 200px;
	float: left;
}

.sidebar--right {
	width: 200px;
	float: right;
}

.content {
	overflow: hidden;
}~~~

Voyons ces lignes en détail :

~~~.language-css
.container {
	overflow: auto;
}~~~

Les éléments flottants (utilisés avec la propriété `float` donc) sortent du _flux d’éléments_, ce qui conduit les autres éléments à passer en-dessous comme s'ils étaient ignorés. Utiliser une propriété neutre comme `overflow` permet au contenant de tenir compte de ces flottants et de les englober pour que tout rentre dans l’ordre.

~~~.language-css
.sidebar--left {
	width: 200px;
	float: left;
}

.sidebar--right {
	width: 200px;
	float: right;
}~~~

On place simplement les éléments flottants (les menus latéraux) à gauche et à droite avec la propriété `float`, et on leur attribue une largeur fixe.

~~~.language-css
.content {
	overflow: hidden;
}~~~

Enfin, on ne précise aucune largeur à cet élément afin qu'il s'adapte automatiquement à l’espace disponible. Là encore, on use de la propriété `overflow` pour que cette colonne tienne compte des deux éléments flottants.

## Conclusion

Avec cette méthode, si votre design est évolutif ou que la mise en page change (une colonne ou une autre ou bien les deux ou aucune en fonction des pages visitées, par exemple), la colonne centrale sera toujours adaptée correctement, ainsi que son contenu. Vous pouvez voir le gabarit en action et le tester sur [cette page du laboratoire](http://lab.infographizm.com/css/gabarits/adaptatif-colonnes/) et sur [ce pen](http://codepen.io/EmmanuelB/pen/qniHp "CodePen").

<p>Si vous voulez plus d’explication sur le fonctionnement des flottants et des _overflow_, je vous conseille un bon article : '[Le contexte de formatage block en CSS](http://www.alsacreations.com/astuce/lire/1543-le-contexte-de-formatage-block-en-css.html "Alsacréations")'.
