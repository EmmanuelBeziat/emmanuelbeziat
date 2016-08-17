---
title: "Un site qui prend toute la hauteur disponible"
date: "2015-10-25 22:35:01"
tags:
- html/css
categories:
- Tutoriels
---

Lorsqu'on crée un design dont la particularité est que le pied de page soit toujours au bas de l’écran, on se heurte à un petit soucis de conception : comment définir une hauteur minimale à la fenêtre ?

Nous allons voir plusieurs solutions possibles, à choisir en fonction de vos besoins.


<div class="note note--info">Ce tutoriel date un peu (2013), mais je suis en train de lui faire une petite remise à jour, incluant de nouvelles méthodes plus modernes et plus efficaces. Je n’ai pas encore détaillé toutes ces nouvelles méthodes, mais le code est disponible.</div>

Tout d’abord, comprenons bien de quoi l’on parle dans ce tutoriel, et pour cela, nous allons d’abord illustrer le problème.

Lorsqu'un site possède une hauteur totale plus grande que l’écran sur lequel il est vu, on peut alors descendre la page vers le bas, jusqu'au bas de la page en question ; là, le défilement est arrêté, le pied-de-page, ou "footer" en anglais, est alors fixé naturellement au bas de la page et de l’écran.

![Illustration du tutoriel](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/tuto1-01.png) ![Illustration du tutoriel](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/tuto1-02.png)

Mais dans le cas où la hauteur totale de la page est inférieure à la hauteur de l’écran, alors le pied-de-page, toujours placé au bas de la page, n’atteint pas le bas de l’écran.

![Illustration du tutoriel](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/tuto1-03.png)

Si certains design ne sont pas gênés par cette éventualité, ce n’est pas le cas de tous. Pour palier à ce problème, nous allons devoir faire en sorte que le design adopte la taille du contenu si la taille de la page est supérieure à la taille de l’écran, mais que la taille minimale de la page ne puisse pas être inférieure cette dernière.

![Illustration du tutoriel](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/tuto1-04.png)

Nous allons maintenant voir comment faire ceci.

## La vieille méthode (IE 7+)

### Le html

Nous partons sur cette base html :

~~~.language-markup
<div class="page">
	<div class="bloc-principal">
		<header class="site-header"></header>
		<main class="site-content">
			<div class="sidebar"></div>
			<div class="texte"></div>
		</main><!-- contenu -->
	</div><!-- fin bloc-principal -->
	<footer class="main-footer"></footer>
</div><!-- fin page -->~~~

Ce n’est qu'un exemple de site de base ; vous pouvez bien sûr utiliser votre propre site.

![Illustration du tutoriel](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/tuto1-05.png)

<div class="note note--question">Pourquoi mettre le pied de page (footer) en dehors du bloc principal ?</div>

Toute l’astuce est là, c'est le fait de placer le pied-de-page en dehors du bloc du contenu qui va permettre de le fixer au bas de la page, mais aussi de l’empêcher de passer par-dessus le texte du contenu.

### Le CSS en action

La première étape est donc de donner à `<html>` une hauteur de 100% (correspondant à toute la hauteur de la fenêtre), qui servira de hauteur de référence pour les balises enfants et les valeurs en pourcentage que nous allons leur donner par la suite. En effet, la valeur relative "100%" doit correspondre à quelque chose : c'est donc "100% de la fenêtre" pour `<html>`. La première balise enfant étant `<body>`, nous lui attribuons également cette valeur pour qu'elle adote une hauteur de "100% de `<html>`". Ainsi, nous pourrons positionner le footer facilement au bas de l’écran dans sa position "minimale".

~~~.language-css
html, body { height: 100% }
~~~

N’oubliez pas d’ajouter ultérieurement un `margin: 0` sur `body` afin de ne pas avoir de barre de défilement.

Il nous faut ensuite donner à notre conteneur principal, "page", une hauteur de 100%. Mais nous n’allons pas utiliser la propriété height, car celle-ci défini une hauteur définitive ; à la place, nous ferons usage de `min-height`, qui défini une hauteur minimale pour le conteneur : ainsi, Si la fenêtre est plus grande que la page, alors le conteneur prendra toute la hauteur disponible, mais ne sera jamais plus petite que 100% -soit la taille du contenu de la page- et ne chevauchera donc jamais ledit contenu.

Il faut également préparer le positionnement du pied-de-page au bas du conteneur, aussi nous appliquons un paramètre de position relative à page.

~~~.language-css
.page {
	min-height: 100%;
	position: relative;
}~~~

Nous passons maintenant au conteneur `bloc-principal`. L’astuce consiste à lui attribuer une marge interne de la hauteur du pied-de-page (ici, 100px). Cela a pour but de bien définir la fin du conteneur à la fin de son contenu. Sans ce paramètre, vous vous rendrez compte que le pied-de-page se superposerait au bas du contenu sur 120px, soit sa propre hauteur.

~~~.language-css
.bloc-principal {
	padding-bottom: 100px;
}~~~

Maintenant, nous nous attaquons au pied-de-page. Il faut que celui-ci ait tout d’abord une hauteur définie (même s'il s'agit d’un pourcentage), puis il faut lui affecter un positionnement absolu. Comme son parent direct, le conteneur `page`, est en positionnement relatif, `footer` se sert de cette référence pour savoir où se positionner. Enfin, grâce au positionnement absolu, il suffira d’accrocher le conteneur au bas du bloc parent. On ajoute également `left` et `right` afin que le bloc prenne toute la largeur.

~~~.language-css
.site-footer {
	height: 100px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
}~~~

Et nous y voici ! Il est à noter que le pied de page doit avoir du contenu pour être affiché, à cause de son positionnement absolu.

Vous pouvez voir le code en action sur [Codepen](http://codepen.io/EmmanuelB/pen/rfCey).

## La méthode intermédiaire (IE 8+)

Voici une méthode utilisant les propriétés `display: table-*` :

~~~.language-markup
<body>
	<div class="page">
		<header class="site-header"></header>

		<main class="site-content"></main>

		<footer class="site-footer"></footer>
	</div>
</body>~~~

~~~.language-css
html,
body {
	height: 100%
}

body {
	margin: 0
}

.page {
	display: table;
	width: 100%;
	height: 100%;
}

.site-header,
.site-content,
.site-footer {
	display: table-row
}~~~

Ainsi, on obtient le même résultat, avec moins d’efforts. Il sera toutefois nécessaire de spécifier une hauteur (ou une hauteur maximale) au header et au footer.

## La méthode moderne (IE 9+)

Cette méthode nécessite qu'on connaisse la hauteur du pied de page.

Nous avons besoin de cette base html :

~~~.language-markup
<div class="bloc-principal">
	<div class="site-header"></div>
	<main class="contenu">
	</main>
</div>
<div class="site-footer"></div>
~~~

Puis nous allons utiliser une simple astuce à base de `vh` et de `calc()`. Pour expliquer très sommairement, `vh` permet de définir une hauteur relative au _viewport_ (la fenêtre de navigation), et `calc()` permet de faire une opération simple en CSS. Pour toute information complémentaire, consultez votre moteur de recherche préféré !

Partons du principe que notre pied de page fait ici 40px de haut.

~~~.language-css
body {
	margin: 0
}

.bloc-principal {
	min-height: calc(100vh - 40px)
}~~~

Hé oui, c'est tout. On dit au bloc principal de faire au minimum la totalité de la hauteur de la fenêtre, moins la hauteur du pied de page. Malin, non ?

## La méthode moderne améliorée (IE 10+)

Pour celle-ci, on va utiliser `flexbox`, une propriété toute récente, dont je vous invite à [vérifier la compatibilité](http://caniuse.com/#feat=flexbox "CanIUse Flexbox ?").

<div class="note note--important">Flexbox n’est pas sensé être utilisé pour un gabarit de page, c'est normalement le module CSS `grid` à qui revient cette charge. Cependant, l’écriture des spécifications de `flexbox` est presque terminé et la propriété est implémentée dans tous les navigateurs modernes, alors que `grid` est encore en _working draft_, et n’est implémenté que dans Internet Explorer 10+ et Edge.</div>

~~~.language-markup
<body>
	<div class="page">
		<header class="site-header"></header>

		<main class="site-content"></main>

		<footer class="site-footer"></footer>
	</div>
</body>~~~

Nous allons donc simplement appliquer `display: flex;` à `body`, et spécifier le comportement de ses descendants direct en tant que colonnes. Puis nous diront simplement à `.site-content` d’utiliser toute la hauteur disponible.

~~~.language-css
body {
	margin: 0;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.site-content {
	flex: 1;
}~~~

C'est tout !

## La méthode de demain

À priori, il viendra un temps où nous utiliseront le module grid afin de faire le squelette de notre site (Et flexbox sera utilisé pour la gestion fine du contenu). Pour en savoir plus, je vous suggère de lire [cet article sur Alsacréations](http://www.alsacreations.com/article/lire/1388-css3-grid-layout.html).
