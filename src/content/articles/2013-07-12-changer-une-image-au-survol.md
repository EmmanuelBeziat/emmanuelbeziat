---
title: "Changer une image au survol"
date: "2013-07-12 02:02:08"
tags: 
- html/css
categories:
- Tutoriels
---

Lorsque l’on fait un site, on est parfois confronté à un besoin : celui de gérer le **changement d’une image au survol de la souris**. C'est souvent le cas avec des menus. Si la technique des _sprites CSS_ (à propos desquels j’ai écrit [ce tutoriel](http://www.emmanuelbeziat.com/blog/bien-utiliser-les-sprites-css/ "Bien utiliser les sprites CSS") et qui ne sera donc pas détaillée ici) est utile dans certains cas, elle est fortement déconseillée dans le cas d’une image cliquable. Nous allons donc voir une solution alternative intéressante.

<!--more-->

## Le problème posé

### Pourquoi ne pas utiliser les sprites ?

Les _sprites_ sont très utiles pour gérer les images de fond ; mais dès lors qu'une image véhicule une information (image cliquable, portrait d’un auteur, schéma explicatif, etc.) et n’est plus seulement décorative, il est **nécessaire** que cette image soit présente dans le HTML (balise `<img />`).

Dans le cas d’une image cliquable, à plus forte raison un menu qui ne contiendrait aucun texte, il est très fortement déconseillé de recourir aux images CSS, car cela impose que le lien dans le HTML soit vide :

<a href="mapage.html"></a>```

Si on peut styliser cette balise en CSS pour lui donner une hauteur, une largeur et un fond, retenez bien que tout le monde ne visionne pas un site comme vous. Les internautes mal-voyants qui utilisent un lecteur d’écran ne peuvent lire que le contenu strict de la page ; ils se retrouveront donc face à un lien vide de 0px×0px qui ne sera pas cliquable, car il ne sera tout simplement pas affiché par le navigateur.<p>
<p>**En conséquence, la navigation sur votre site sera impossible !**

### Une solution possible en javascript

On peut également charger une image au survol grâce aux événements `onmouseover` et `onmouseout` du javascript. Si cette méthode permet de palier au problème précédemment exposé, elle en présente deux autres :<p>

1.  Tout d’abord, vos visiteurs peuvent très bien avoir désactivé l’exécution du javascript sur leur navigateur (pour des raisons qui les concernent).
2.  L’image ne sera chargée qu'au survol, ce qui créera un effet de _clipping_ (clignotement) le temps que l’image soit affichée. Pour une petite connexion (comme la 3G) cela se révèle très vite particulièrement désagréable.

## La solution : un compromis

<p>La meilleure solution consiste à mettre l’image "normale" dans le html, puis de la masquer au survol pour révéler une image de fond en CSS. Nous allons donc voir comment procéder.

### Le HTML

Ici, rien de bien compliqué. Nous allons nous contenter de mettre notre image et notre lien tout à fait normalement (à noter qu'on peut tout à fait utiliser le même effet sans un lien avec une image seule).

Pour les besions de l’exemple, nous plaçons le lien dans une balise portant l’ID "menu".

```<div id="menu">
	<a href="mapage.html"><img src="monimage.jpg" alt="Accueil" /></a>
</div>```

### Le CSS

C'est ici que l’astuce se déroule. Tout d’abord, nous allons affecter à notre lien un comportement de type `inline-block`, afin de pouvoir lui donner des valeurs de hauteur et de largeur sans pour autant briser sa mise en place au sein d’un texte ou d’un menu (à adapter selon vos besoins).

```css
#menu a {
	display: inline-block;
}```

Ceci fait, nous allons lui appliquer l’image de fond qui doit apparaître au survol :

```css
#menu a {
	display: inline-block;
	background: url("monimage_survol.jpg") no-repeat;
}```

Maintenant, nous pouvons masquer l’image au survol grâce à la pseudo-propriété CSS `:hover`.

```css
#menu a:hover img {
	visibility: hidden;
}```

#### Une petite précision

Pour éviter toute mauvaise surprise, je vous recommande aussi de :

*   Penser à désactiver l’affichage de bordure automatique autour des images cliquables, au moyen de ce code :```a img { border: none; }```
*   De spécifier également la hauteur et la largeur de l’image

*   En CSS si les images sont toutes de même dimension (cas d’un menu) :
```css
#menu a, #menu img {
	width: 200px;
	height: 50px;
}```
*   En HTML si les images sont différentes :
```html
<div id="menu">
	<a href="mapage.html">
		<img src="monimage.jpg" alt="Accueil" width="200px" height="50px" />
	</a>
</div>```

Dans ce cas, le lien fera normalement automatiquement son travail pour garder la taille de l’image de base, même si cette dernière venait à ne pas être affichée (mauvais chargement, lien mort, etc.)

Et voilà ! Une image qui change au survol, sans effets secondaires indésirables du côté visuel, ni du côté de l’accessibilité.
