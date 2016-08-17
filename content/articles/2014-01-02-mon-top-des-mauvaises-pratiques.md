---
title: "Mon top des mauvaises pratiques web"
date: "2014-01-02 09:46:17"
tags:
- html/css
categories:
- Tutoriels
---

Dans le domaine du web comme dans tous les autres, il y a de bonnes et de mauvaises pratiques. Rassurez-vous (ou soyez déçu(e)s !) je ne tiendrais pas ici compte de tous les points récurrents sur la validité et la sémantique du html, sur l’optimisation du CSS, js, php ou tout autre langage ou sur les tailles d’images. Non, je vais plutôt parler de pratiques obscures qui peuvent sembler très cool de prime abord et qui sont en fait de vraies mauvaises idées pour diverses raisons.

À noter que ce top sera étoffé au fur et à mesure que les idées me viendront ou que je rencontrerais des cas d’école.


## #1 : modifier les curseurs

J’entends par là **modifier le comportement normal des curseurs**, par exemple utiliser (comme je le vois beaucoup trop) `cursor: nw-resize;` (![cursor resize](https://www.emmanuelbeziat.com/wp-content/uploads/2014/01/cursor-resize.png)) en lieu et place de `cursor: pointer;` (![cursor hand](https://www.emmanuelbeziat.com/wp-content/uploads/2014/01/cursor-hand.png)</a>) au survol des liens et éléments cliquables. Non, non et NON ! Ce n’est pas cool ni original (on faisait ça sur les pages persos de MultiMania avant même l’ADSL !) et ça ne donne en aucun cas l’impression que vous maîtrisez super bien le CSS.

Les curseurs sont des icones **sensées**, ayant chacun une **signification visuelle codifiée** ancrée chez la grande majorité des utilisateurs des systèmes d’exploitations principaux (Windows, OSX, distributions Linux). Les mélanger (outre le fait de n’avoir aucun intérêt) risque de perdre le visiteur qui passe sur votre site et lui donner envie de fermer la page sans plus de manières. Alors certes on peut rétorquer qu'il suffirait de faire un effort d’adaptation, mais certains individus qui souffrent de troubles difficultés cognitives (mêmes légères !) peuvent s'en retrouver totalement désorientés.

Et même, rien que sur le principe, ça ne se fait pas ! Imaginez que j’inverse les touches de votre clavier quand vous voulez poster sur un forum ! De la même façon, attention lorsque vous définissez vos propres curseurs : vous pouvez tout à fait avoir des visiteurs ayant des difficultés visuelles qui utilisent des curseurs très gros et très contrasté, et vous risquez de compliquer passablement leur navigation…

Mon conseil : **Foutez la paix aux curseurs** !

## #2 : les liens qui bougent

Tout aussi insupportable que les curseurs indélicats, les **liens qui foutent le camp au survol**, qui **changent de taille**, **de typo**, **d’espacement** et autres variantes. L’apparition de la propriété `transition` a popularisé ces derniers temps ce genre de pratiques ; cependant, il n’y a rien de plus pénible qu'un lien qui se barre quand vous voulez le survoler. Pire encore, parfois cela conduit le lien à perdre l’état "survolé" (_hover_), et donc à retourner à sa place initiale où il se retrouvera à nouveau sous le curseur, reprendra l’état survolé et s'animera ainsi en boucle bêtement, rendant le clic plus compliqué qu'un jeu de famille **MB**.

La seule variante utilisable, c'est quand le lien est un bloc entier qui **ne change pas de taille au survol**, et dont seul le contenu change.

Mon conseil : tenez-vous en au changement de couleur et aux [`text-decoration`](http://www.w3.org/TR/CSS21/text.html#decoration).

## #3 : les balises qui n’existent pas

Très récemment, je suis tombé sur ça :

~~~.language-markup
<aa>Quelque chose</aa>~~~

Ou bien encore ça :

~~~.language-markup
<r class="valeur">Quelque chose</r>~~~

Inutile de vous dire que ça n’est en aucun cas du html, que ça n’est pas valide, et je trouve absolument scandaleux que les navigateurs affichent un truc pareil sans broncher…

Alors d’accord, le fait qu'on puisse utiliser des balises inconnues, ça a bien servi au passage du html5 (et encore maintenant pour de vieux IE), mais là, quand même, merde !

Bref, mon conseil : **Tenez-vous en aux balises existantes en html, et validez votre code !**
