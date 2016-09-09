---
title: "Colonne verticale sur toute la hauteur de page"
date: "2015-07-21 21:55:38"
tags:
- html/css
categories:
- Tutoriels
---

Mon site te plait, internaute ? Tu es jaloux-se de ma colonne latérale qui prend toute la hauteur de la page et tu cherches désespérément comment faire ? Tu as de la chance, tu es pile au bon endroit !


Toute l’astuce repose sur un trompe-l’œil. Vous pouvez donc commencer par faire votre colonne tout à fait normalement.

```markup
<div class="colonne">
	<div class="colonne-content">
		Du contenu !
	</div>
</div>
```

```css
.colonne {
	width: 320px;
	background: #d5d5d5;
	float: left;
}
```

Oui, je sais : c'est assez impressionnant.

Vous pouvez bien sûr ajouter vos fioritures et votre contenu, mais globalement, tout ce dont vous avez besoin est là : une largeur, et un positionnement (Ici à gauche, mais vous pouvez le mettre à droite si vous voulez).

Pour l’instant, votre colonne ne va pas jusqu'en bas de votre écran, à moins que vous n’ayez beaucoup de contenu à l’intérieur. Alors pour ça, nous allons créer un petit trompe-l’œil au moyen d’un **pseudo-élément** (Si vous ne savez pas de quoi je parle, direction '[Principes du CSS - Les sélecteurs](http://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie1-css2/)').

```css
.colonne:after {
	content: ""
	position: fixed;
	width: inherit;
	background: inherit;
	top: 0;
	left: 0;
	bottom: 0;
}
```

On crée donc un pseudo-élément après notre colonne, avec un contenu vide. On lui attribue une position fixe, ce qui veut dire que l’élément sera lié à la fenêtre du navigateur, et non au contenu de votre page. Puis, on l’accroche à `0px` du haut de la fenêtre, du bas, et à gauche. Ainsi, cet élément ne bougera jamais, même si vous descendez dans la page : il fera toujours la largeur de la fenêtre. Enfin, on lui attribue la même largeur et la même couleur que notre colonne, via la valeur`inherit`.

Mais… Je ne vois plus ma colonne ! Qu'est-ce qu'il se passe ? { .c-note .c-note--question }

En effet, si vous avez testé ce code, vous devez avoir remarqué que votre pseudo-élément couvre votre colonne et que celle-ci n’est plus visible. Pas de panique ! On va simplement positionner l’élément enfant `.colonne-content` pour ajouter une propriété `z-index`, qui va permettre de gérer la superposition des éléments. Plus la valeur est haute, plus l’élément est à l’avant-plan.

Comme la propriété `z-index` ne fonctionne que sur des éléments positionné, on ajoute une position relative :

```css
.colonne-content {
	position: relative;
	z-index: 10;
}
```

Et c'est tout ! Votre colonne fonctionne maintenant. En effet, votre "vraie" colonne va se comporter comme un élément normal, et se déplacer avec le reste de la page. Mais le pseudo-élément va continuer à rester ancrer à gauche de la fenêtre, et donner l’illusion que votre colonne prend toute la hauteur de votre site.

Comme quoi, le CSS, c'est aussi de la magie !

Vous pouvez voir l’exemple en action sur [ce Codepen](http://codepen.io/EmmanuelB/pen/zGMxEN){ target="_blank" }.

Merci à [Lamecarlate](http://lamecarlate.net/){ target="_blank" } et [Clément](http://clement-galidie.fr/){ target="_blank" } pour leurs ajouts.
