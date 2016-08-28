---
title: "Non, vous ne faites pas du responsive !"
date: "2014-03-04 06:38:28"
tags:
- html/css
categories:
- Diatribes
---

S'il vous est un jour arrivé de dire (ou de penser très fort) : 'Moi, mon site est tout en % pour être responsive !', sachez qu'il se peut que je vous souhaite du mal. Bon allez, peut-être pas jusque-là ; mais quand même, vous vous fourrez profondément les deux pouces dans chaque mirette.

Alors le responsive, c'est quoi ?


## Schéma simple

Je sais qu'un joli dessin est souvent plus éloquent qu'un long discours, cependant j’ai vachement la flemme de dégainer Photoshop pour vous faire une belle vignette explicative. La tartine n’étant pas mon fort (Comme dirait Maxime), je vous le résume avec ce sens de la concision, ce don du raccourci et ce parti-pris de condensé qui sont les plus beaux fleurons de mon style et qui font écrire aux critiques des choses tellement élogieuses sur mon compte que je ne puis manger désormais que dans de la vaisselle d’argent. Adonc (remarquez en sus mon amour pour les tournures de phrase désuètes), voici un schéma bien clair — quoiqu'un peu simpliste — par écrit :

*   **Responsive** = Adapté à différents supports
*   **Fluide** = Adapté à différentes tailles d’écran d’un même support
*   **Pourcentage** = N’a basiquement rien à voir avec la choucroute

## Le problème du pourcentage

Je commence par la parenthèse de cet article, à savoir la question du pourcentage dans l’intégration d’un site. Honnêtement, c'est bancal, hasardeux. On ne s'en sert que dans des cas spécifiques, par exemple pour obtenir des colonnes ou grilles fluides comme dans [Bootstrap](http://getbootstrap.com/ "Bootstrap"){ target="_blank" }, et quelques autres points.

Si vous êtes un(e) adepte du `width: 100%;`, je vous renvoie à l’excellent article de **Raphaël Goetter**, '[Width 100%, tu es le mal](http://blog.goetter.fr/post/13556565063/width-100-tu-es-le-mal "La tête dans le flux !"){ target="_blank" }', qui vous expliquera non-seulement le problème inhérent à cette déclaration pourrie, mais également **comment vous en passer au mieux**.

## Fluide, dis-tu ?

Lorsqu'on fait un site fluide (aussi appelé "liquide" dans certains cas), on fait en sorte que l’interface s'étire, s'adapte en fonction de l’écran du visiteur, afin que l’affichage soit correct aussi bien sur un Netbook riquiqui de 1024 pixels de large que sur mon **grand et beau** 27 pouces. Et quand je dis "correct", j’entends par là que ce soit bien pensé ! Un site de 2560 pixels d’envergure est purement et totalement illisible et contraindra le malheureux visiteur à effectuer de grands mouvement rotatoires de sa partie têtale et de vous maudire deux-cent fois à chaque fois qu'il perd sa ligne de lecture.

### Foutez la paix aux pourcentages

Comme je le disais, pour faire un site qui s'adapte en largeur, on se passe très bien des valeurs en pourcentages (jusqu'à un certain besoin, certes). Les valeur en pixels s'en sortent très bien (L’ami [Clément Galidie](http://clement-galidie.fr/ "Clément Galidie"){ target="_blank" } renchérira — à raison — que les valeurs en _em_ aussi). Penchez-vous sur des propriétés comme `min-width` et `max-width` et sur mon autre article '[Aligner trois colonnes proprement](http://www.emmanuelbeziat.com/blog/aligner-trois-colonnes-proprement/)' pour vous en convaincre.

## Le responsive, c'est quoi ?

D’après la définition donnée plus tôt, le **responsive design** très à la mode ne consiste pas seulement à faire en sorte que votre site s'étire docilement. Quand je parle d’adapter un site à différent supports, il s'agit de le faire _vraiment_. De s'assurer que la navigation soit possible avec un doigt si on est sur du tactile, sans risquer de cliquer sur trois boutons en même temps ; ou que les boutons de la télécommande permettent de parcourir le site sans difficulté. Faire en sorte que le contenu non-pertinent pour un smartphone soit caché ou supprimé, que les chargements soient optimisés pour des connexions lentes ou limitées de type 3G. Faire en sorte que le tout soit parfaitement utilisable sur le lecteur d’écran d’un visiteur malvoyant.

Certes, parmi les techniques les plus simples et basiques pour des sites responsive, on trouve les media-queries qui sont très pratiques. Et souvent, on couple ça avec une interface fluide. Mais ce n’est qu'un début.

## Conclusion

Maintenant que vous savez de quoi il retourne, vous n’avez plus d’excuse pour sortir des énormités liées au pourcentages et au responsive, et pas davantage pour coder à la truelle. Non mais !
