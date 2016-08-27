---
title: "Internet Explorer, mon amour"
date: "2013-08-24 17:26:22"
tags:
- navigateurs
categories:
- Diatribes
---

> Il n’y a pas de mauvais navigateur, il n’y a que du mauvais code.

C'est par cette accroche que je réponds très souvent sur internet (sur les forums HTML/CSS d’OpenClassrooms (ex-Site du Zéro) par exemple) à ceux qui justifient une page mal rendue sur Internet Explorer par un "IE ne respecte pas les standards" et autres "IE, c'est de la merde". Et derrière le titre fort racoleur de cet article, je m'en vais prendre la défense d’un navigateur injustement critiqué.

Qu'il soit entendu que je ne fais pas ici l’apologie d’un navigateur plutôt qu'un autre ! Je compte simplement donner un bon coup de tatanes aux défauts fallacieux et bourrés de mauvaise foi qu'on attribue à tort à l’un d’entre eux.


## Le commencement

IE6, vous connaissez ? Vous l’avez beaucoup critiqué, n’est-ce pas ? Vous lui avez préféré Firefox, vous avez pesté mille et une fois contre lui parce qu'il fallait rajouter des lignes de code pour lui faire entendre des choses simples. Et pourtant, Microsoft ne l’a pas amené à 99% de parts de marché à coup de baguette magique ! Les développeurs web (du moins, ceux qui étaient là en 2000) y ont fortement contribué. Parce qu'IE6 c'était génial. Parce que pour la première fois, un navigateur respectait les standards du CSS (On parle du CSS1, et des premières ébauches de ce qu'allait être le CSS2). Parce qu'il possédait des outils de déploiement pour l’entreprise géniaux. Parce que l’ActiveX, c'était de nouvelles possibilités. Alors Netscape est mort, faute d’avoir su se mettre au niveau, et des millions d’applications métiers ont été développées pour IE6\. **La monoculture du web était née**.

Pour ceux qui veulent entendre un autre que moi en parler, il y a cette vidéo (en anglais) de Bruce Lawson (Opera) qui tenait une excellente conférence sur le sujet à Sud Web 2012 :

<div class="video"><iframe src="http://player.vimeo.com/video/52171395?color=ff9933" allowFullScreen></iframe></div>

## IE et les standards

_"Internet Explorer ne respecte pas les standards !"_ peut-on entendre çà et là sur la toile (surtout de la bouche - enfin du clavier - de ceux qui ne connaissent pas lesdits standards).

Je crois que la réponse la plus pertinente dans ce genre de cas reste _"Euh, si"_. Mais je te vois déjà, lecteur, rire derrière ton écran en allant vérifier le score d’IE sur [html5test](http://html5test.com){ target="_blank" }. Alors je sens qu'il va me falloir t'apporter des preuves de ce que j’avance. Et ça tombe bien, parce que j’ai tout ce qu'il faut pour ça.

Je vais commencer par une preuve qui fait très mal, et du coup je vais l’écrire en gras-qui-te-pète-bien-la-rétine : **Chrome et Firefox galèrent à gérer un border tout simple**. Bon, j’exagère un poil, mais ce n’est pas si loin de la vérité. Plus exactement, **WebKit** (le moteur de rendu qui équipe Chrome, Safari, Opera et Maxthon - entre autres), **Gecko** (Firefox) et **Trident** (Internet Explorer) ont tous une façon différente de gérer les éléments, et sur border on remarque aisément des difficultés sur certains. Pour vérifier ça, vous pouvez vous rendre sur [ce jsfiddle](https://jsfiddle.net/3hs1ftmo/2/){ target="_blank" }, et constater par vous-même.

Les résultats sont les suivants. À noter que le code est tout à fait identique pour chaque navigateur.

![Test bordures navigateur](https://www.emmanuelbeziat.com/wp-content/uploads/2013/08/tests-border-nav1.png)

Vous pourrez aussi constater que Firefox ne prend pas en compte le line-height dans un champ de texte, ni le positionnement dans une cellule de tableau.

**Mise à jour 8 Février 2014 :** Toujours aucune amélioration sur ces points sur Firefox 27 et Chrome 32.

**Mise à jour 23 Avril 2015 :** Depuis quelques versions, le problème de position dans les cellules de tableau est réglé sur Firefox.

La question du test ACID3 a un moment été un centre d’intérêt, avant que tous les navigateurs n’arrivent à 100% de réussite. Cependant, on peut s'interroger autant sur la fiabilité du test que sur l’implémentation des éléments testés, en voyant ce résultat obtenu par Chrome 10 (seule version à avoir eu ce "problème") :

![acid3-chrome10](https://www.emmanuelbeziat.com/wp-content/uploads/2013/08/acid3-chrome10.jpg)

Résultat affiché de 100%, alors que le rendu est très loin de celui qui est censé être le [gage d’un résultat correct](http://acid3.acidtests.org/ "Test Acid3"){ target="_blank" }.

C'est exactement le même genre de soucis avec html5test : ce genre de sites ne fait que vérifier si une fonctionnalité est présente, elle ne teste pas son implémentation. De fait, Chrome prétend gérer les nouveaux paramètres de la propriété `background-position` introduits en CSS3, alors que ce n’est absolument pas le cas dans les faits.

### Pourquoi des différences d’un navigateur à l’autre ?

C'est une question de philosophie de développement : google intègre à Chrome beaucoup de choses et s'empresse d’implémenter les dernières nouveautés en pré-alpha, alors que Microsoft préfère généralement attendre la stabilité et les retours sur une technologie avant de l’ajouter à son navigateur. C'est pour ça qu'on trouve beaucoup moins de propriétés préfixées dans IE comparativement aux navigateurs WebKit qui en intègrent des pelletées.

L’un dans l’autre, les deux façons de faire ont des avantages et des inconvénients. Pour qu'une technologie soit finalisée, il faut que les développeurs puissent jouer avec, apprendre à l’utiliser, la comprendre. De fait, les propriétés préfixées sont un bon moyen de proposer un compromis. Cependant, c'est également un risque : si au cours de son développement, la techno change, il faut redévelopper ce qui a été fait avec pour le rendre compatible (c'est arrivé avec `linear-gradient`). De plus, les versions futures du navigateur devront, en plus d’intégrer la version "finale" modifier, permettre la rétrocompatibilité vers l’ancienne implémentation.

## Technologie

De ce côté, on peut signaler qu'Internet Explorer était le premier à introduire la gestion des onglets dans des processus séparés (multithread), dès IE7 (2006) ; à ce jour, Firefox ne l’implémente toujours pas, alors que Chrome l’a employé dès la conception du navigateur en 2008\. Le _sandboxing_ des onglets, également, a été introduit dès Internet Explorer 8 (2008), et amélioré avec les versions suivantes. De plus, le principe de sécurité d’IE a été repris par Google pour Chrome ; inversement, IE intègre aujourd’hui nativement Adobe Flash comme le fait Chrome, ce qui est un gage de sécurité.

Du reste, Internet Explorer a longtemps été le seul, sur Windows, à bénéficier d’une version native en 64 bits. Chrome a rejoint les rangs fin 2014.

On vante souvent les fonctionnalités des autres navigateurs mais IE offre généralement les mêmes possibilités.

*   Comme les autres, il peut rétablir des onglets fermés par inadvertance, ou récupérer une session entière après une coupure du PC
*   IE intègre un antipub natif auquel on peut donner les listes noires utilisées par AdBlock
*   Il embarque aussi un correcteur d’orthographe
*   Il possède des outils de développement intégrés

### Intégration d’IE avec Windows

Microsoft propose en sus des outils d’intégration à Windows assez intéressant, il est dommage que les autres navigateurs ne suivent pas le mouvement. On peut en effet épingler un site de façon plus ou moins avancée dans la barre des tâches avec divers raccourcis, et sur les tuiles de l’interface Modern UI de Windows 8.

J’ai écrit un [tutoriel sur le sujet](http://www.emmanuelbeziat.com/blog/site-epingle-avec-internet-explorer/ "Site épinglé avec Internet Explorer"){ target="_blank" } qui vous permettra d’en savoir plus si ça vous intéresse.

## Alors pourquoi tant de haine ?

Internet Explorer souffre du souvenir d’IE6, qui est resté trop longtemps sans successeur. En effet, lorsqu'on est en position de monopole absolu et que des milliers d’applications métier ont été développées pour votre outil (et donc qu'une nouvelle version est très délicate à envisager car nécessite une rétrocompatibilité parfaite - ce qui donnera naissance à la balise meta `X-UA Compatible`, on préfère se dire qu'on a réussi de ce côté et faire des économies pour se concentrer sur autre chose. C'est le problème de la monoculture (voir la vidéo plus haut). Le développement d’Internet Explorer 7 a donc été longuement repoussé et retardé. Mais IE8 a rattrapé tout le retard de son prédécesseur, et les successeurs successifs (quelle belle allitération !) ont largement comblé le retard.

Pourtant, si on se balade sur les forums HTML/CSS du **Site du Zéro**, on tombe souvent sur des sujets _"Mon site s'affiche mal sur IE"_. Pourquoi donc ? Hé bien neuf fois sur dix, parce que le code n’est pas bon. Firefox et Chrome corrigent souvent différentes erreurs à la volée, par exemple une balise mal fermée, et le développeur inattentif est alors persuadé d’avoir un bon code qui fonctionne. Internet Explorer ne possède pas de gestionnaire d’erreurs de ce type, et affiche donc une erreur là où il trouve une erreur. C'est pour ça qu'on dit que le navigateur est strict. Il suffit donc presque toujours de corriger son code, que ce soit en HTML ou en CSS.

La soi-disant mauvaise gestion des standards d’IE sert trop souvent d’excuse aux développeurs, qui vont préférer trouver des responsables extérieurs plutôt que de remettre en cause leurs propres compétences (ça m'arrive aussi, hein !).

Mauvaise foi, je vous dis !

Évidemment, le comble serait de comparer un navigateur récent à un autre ancien. Pourtant certains n’hésitent pas à le faire, se servant d’Internet Explorer 7 (On en est au 11, quand même !), sorti bien avant les specs du CSS3, pour décrier le navigateur tout entier, en le comparant à la dernière version de Chrome ou de Firefox. Et bien entendu, cela n’a aucun sens. Pour être un minimum objectif, il faut comparer ce qui est comparable. Je suis bien certain que beaucoup de sites doivent avoir une drôle de gueule sous Firefox 2.5 aujourd’hui…

## Conclusion ?

Eh bien, tous les navigateurs modernes se valent. Tous ont des avantages et des inconvénients, cracher sur l’un ou l’autre tient juste de la foi personnelle. Choisissez donc votre navigateur selon vos préférences et vos goûts personnels, et ne vous laissez pas avoir par ceux qui veulent absolument vanter les mérites de l’élu de leur cœur avec plus de conviction qu'un témoin de Jéhovah qui tente d’entrer dans votre salon pour vous bassiner avec ses 'Cthulhu fhtagn !'.

Et bien sûr, par pitié, oubliez immédiatement vos petites banderoles _"site optimisé pour Chrome/Firefox"_ qui vous feront passer au mieux pour un flemmard qui n’a pas envie de rendre son site compatible, au pire pour un incompétent qui ne sait pas faire mieux !

Vous êtes prévenus !

## Edit du 27 juillet 2015

Demain sort Microsoft Edge, remplaçant d’Internet Explorer. Ce qui signifie que ce dernier n’aura plus de version supplémentaire. Niels Leenheer lui a rendu un petit hommage vidéo dans une conférence :

<div class="video"><iframe src="https://www.youtube.com/embed/w4WAPTJM8E0" allowfullscreen></iframe></div>
