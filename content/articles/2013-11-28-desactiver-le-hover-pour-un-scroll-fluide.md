---
title: "Désactiver le :hover pour un scroll fluide"
date: "2013-11-28 17:07:44"
tags:
- html/css
- javascript
- bonnes pratiques
categories:
- Tutoriels
---

L’astuce CSS du jour, c'est à **Christian Schaefer** et **TheCSSNinja** qu'on la doit.

> [@paul_irish](https://twitter.com/paul_irish) Easy. Apply "pointer-events: none" to the <body> on scrollstart and remove it on scrollend. [@tabatkins](https://twitter.com/tabatkins)
> &mdash; Christian Schaefer (@derSchepp) [12 Novembre 2013](https://twitter.com/derSchepp/statuses/400394164350644224)


## C'est quoi donc le problème, dis ?

Il est question ici d’un problème que certains d’entre vous ont pu rencontrer, si vous avez bossé sur un portfolio ou n’importe quel site avec beaucoup de contenu réagissant à l’action du visiteur et plus précisément au survol du curseur (ce qu'on appelle, dans le jargon des _développeux_, le "hover") : lorsque l’on _scrolle_ dans la page, si le curseur survole lesdits éléments, une latence se fait sentir. Et effectivement, si on utilise les outils de _monitoring_ des différents navigateurs, on remarque que ça prend pas mal de ressources d’un seul coup (en plus d’être moche à l’utilisation).

## Mais que faire ?

Suivant le _tweet_ mis en lumière plus haut, et l’article de TheCSSNinja, voici un simple petit bout de code à appliquer dans vos pages web pour résoudre le problème. En substance, il s'agit d’appliquer une classe sur body, qui désactive la réactivité des éléments aux actions du curseur, et de la retirer lorsque le défilement est terminé.

Voici le code CSS en question :

```css
.disable-hover {
	pointer-events: none;
}
```

Notez que la propriété pointer-events cause une erreur dans la validateur CSS du W3C. {.note .note--important}

Maintenant, un peu de Javascript :

```javascript
var body = document.body,
	timer;

window.addEventListener('scroll’, function() {

	clearTimeout(timer);

	if(!body.classList.contains('disable-hover'))
		body.classList.add('disable-hover')

	timer = setTimeout(function(){
		body.classList.remove('disable-hover')
	}, 200);

}, false);
```

Et voilà !

## Conclusature

Je n’avais jamais été confronté moi-même à ce "bug", attendu que mon navigateur principal (IE) désactive de lui-même les _pointer events_ lorsqu'on fait défiler une page. Piqué de curiosité en lisant l’article, j’ai donc fait le test sur Chrome et Firefox, pour constater qu'effectivement… Ouch. Je reprend donc ici la moelle de l’article en question, d’une part afin de ne pas oublier cette astuce, d’autre part afin que les anglophobes puissent en bénéficier aussi.

Source : [TheCSSNinja.com](http://www.thecssninja.com/javascript/pointer-events-60fps){ target="_blank" } - Thanks !
