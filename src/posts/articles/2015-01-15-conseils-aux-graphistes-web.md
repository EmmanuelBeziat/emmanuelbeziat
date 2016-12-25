---
title: "Conseils aux graphistes web"
date: "2015-01-15 05:03:48"
tags:
- design
- bonnes pratiques
categories:
- Web
---

En tant que développeur front-end, il m’arrive très souvent de recevoir des maquettes de graphistes, validées par le client, qu’il ne me reste qu’à intégrer. Cependant, de nombreux problèmes se présentent régulièrement, dus généralement au fait que le ou la graphiste qui s’est occupée de ce travail n’est pas lui/elle-même intégrateur-trice et n’est donc pas au courant des possibilités et des difficultés de l’intégration. Parfois, c’est également simplement un problème de mise en contexte.

Voici donc un ensemble de points à éviter ou approfondir lorsque vous préparez vos maquettes.


## Le bord du PSD n’est pas le bord de l’écran

Une première erreur très (trop) fréquente : tenir l’espace de travail comme "complet". Une image valant mieux que beaucoup de mots, voilà une illustration du problème :

![photoshop-problem-1](https://images.emmanuelbeziat.com/photoshop-problem-1.jpg) { .text-align-center }

Le design est ici bien rendu, somme toute classique, et l’image sort de façon élégante du cadre du site pour aller rejoindre les bords. Oui, mais **les bords en question ne représentent pas l’écran d’un visiteur** potentiel du site. Ainsi, si on agrandi l’espace de travail pour se représenter la taille d’écran d’un visiteur du site, on se retrouve avec un problème graphique assez évident :

![photoshop-problem-02](https://images.emmanuelbeziat.com/photoshop-problem-02.jpg) { .text-align-center }

L’image ne va plus jusqu’au bord. Outre le fait que ce soit très moche, le site perd toute sa consistance. Il n’y a aucun moyen de gérer ça proprement côté intégration : étirer l’image serait de toutes façons totalement affreux.

Pensez donc toujours à choisir un espace de travail large et à tester votre rendu sur plusieurs types d’écran, et prévoyez différents cas de figure.

## Le texte n’est pas contrôlable

Un autre point essentiel : photoshop permet une gestion avancée des textes. On peut, à loisir, modifier le rendu d’une police, gérer son lissage, son inclinaison, lui donner divers effets, le positionner de façon fine et précise, etc.. **Ce n’est pas le cas sur le web** ! L’affichage d’une police dépend du navigateur, du système d’exploitation, du type d’écran… De même, les contrôles sur le texte sont relativement pauvres en CSS, et il est pour l’instant encore presqu’impossible de faire — par exemple — des colonnes fluides de texte, des couleurs dégradées dans des lettres, ou bien simplement d’aligner au centre la dernière ligne d’un texte justifié.

De même, je vois souvent des blocs de texte prévus dans les maquettes pour avoir un certain nombre de lignes, comme dans cet exemple :

![photoshop-problem-3](https://images.emmanuelbeziat.com/photoshop-problem-3.png) { .text-align-center }

Le soucis, c’est qu’il est impossible d’être sûr à 100% que le texte sera affiché tel quel sur le site. Il se peut très bien qu’il dépasse, et donc que tout le principe de ce bout de design se retrouve par terre.

De la même façon, laissez "couler" le texte. N’essayez pas de forcer des retours à la ligne (hors quelques titres), ce sera calamiteux pour l’intégrateur, et ingérable en cas de redimensionnement du conteneur.

## Limitez les couleurs

Pour des raisons de pratique, il est déconseillé d’utiliser une tripotée de couleurs différentes. Certaines différences sont parfois trop subtiles pour être remarquées par l’intégrateur, qui n’a pas les mêmes réglages d’écran que vous, et se verra donc attribuer un retour client parce que 'la couleur n’est pas la bonne'. De plus, les préprocesseurs CSS d’aujourd’hui (_SCSS_, _SASS_, _LESS_, _Stylus_…) permettent aux intégrateurs de définir des variables (entre autres pour les couleurs), et en avoir une cinquantaine pour toutes les couleurs de la maquette n’a aucun intérêt…

**Limitez-vous à 5 couleurs maximum** (c’est une moyenne), avec au plus deux variations par couleur. Enfin, n’hésitez pas à créer un calque avec les couleurs en question, d’abord pour les réutiliser facilement vous-même (même si vous pouvez utiliser le nuancier de Photoshop prévu à cet effet), ensuite pour permettre à l’intégrateur de les pipeter facilement.

## Utilisez des typos standards…

Attention à ne pas faire dans l’excentricité. Certes, aujourd’hui la propriété `@font-face` permet de faire bien des choses pratiques, mais il y a mille et unes raisons (ou presque) pour qu’une typo ne se charge pas. Réservez donc les polices "excentriques" à des textes particuliers, tels que les titres, le menu de navigation ou des encarts occasionnels. Pour ce qui est du contenu textuel, restez-en aux polices dites "web safe" dont [voici une liste](http://www.anthony-brard.com/les-fonts-web-safe){ target="_blank" rel="noopener" } (pas forcément exhaustive).

Vous pouvez bien sûr adapter en fonction de votre cible : pour un site à destination des utilisateurs de Windows Phone (par exemple), ou pour une majorité d’utilisateurs Windows, vous pouvez opter pour _Segoe UI_, qui sera très raccord avec le reste de l’environnement de travail. À l’inverse, pour le site de votre application OSX ou iOS, l’emploi de _Helvetica Neue_ sera tout à fait approprié et safe puisque présente sur tous les systèmes Apple (du moins, ceux relativement récents).

Dans tous les cas, **pensez à fournir les fichiers des typos** que vous utilisez à l’intégrateur.

## … et ne les modifiez pas !

Il va sans dire que toute modification _corporelle_ d’une typo est prohibée. J’entends par là modifier l’échelle horizontale ou verticale de celle-ci, ou bien utiliser les options _Faux-gras_ ou _Faux-italique_, par exemple.

## Oubliez les ronds

Avec le CSS3 est arrivé un super outil : la propriété `border-radius`. Bien que celle-ci se fasse un peu plus discrète ces derniers temps, avec l’avènement du flat-design et le contrecoup d’une utilisation beaucoup trop massive (et avec souvent beaucoup de mauvais goût), elle permet de s’adonner aux joies des arrondis en CSS.

Cependant, une exception à cette règle concerne les ronds parfaits contenant du texte. En effet, si un bouton rond contenant un picto (Comme l’icone de twitter) ne pose à priori aucun problème à l’intégrateur, la question d’un disque contenant du texte est beaucoup plus délicate.

![photoshop-problem-4](https://images.emmanuelbeziat.com/photoshop-problem-4.png) { .text-align-center }

Pour les raisons précédemment citées, la gestion du texte dans une page web est délicate. Or, la rondeur de cet élément repose sur la taille fixe de celui-ci (sinon, ça devient un ovale), car les dimensions d’un conteneur dépendent de son contenu. Il devient de facto très pénible d’obtenir le rendu souhaité en CSS pur, il faut donc ruser et adapter le texte à son conteneur — ce qui pose là encore certains soucis en CSS.

Du reste, si l’intégrateur doit tenir compte de navigateurs antédiluviens (IE8 ou inférieur (ouille !)), il devra en sus utiliser une image pour le disque, ce qui l’obligera à encore plus d’ajustements de texte.

Alors, utilisez les ronds avec parcimonie !

## Attention avec les hauteurs de blocs

![photoshop-problem-5](https://images.emmanuelbeziat.com/photoshop-problem-5.jpg) { .text-align-center }

De la même façon que le texte n’est pas contrôlable, la gestion des hauteurs est pour l’instant assez calamiteuse. La hauteur d’un élément se base par défaut sur son contenu. Afin d’obtenir un effet comme l’image ci-dessus, il faudrait donc forcer la hauteur des blocs, et espérer que le texte ne dépasse sur aucun support, ou que celui-ci ne vienne pas à être changé (le client peut vouloir ajouter une phrase). Gardez donc toujours en tête que la hauteur des éléments en CSS est très complexe à gérer (ce sera amélioré dans quelques temps, mais avant de pouvoir l’utiliser en production, il faudra bien quelques années).

## Attention aux rotations

Là encore, si la troisième _release_ de CSS nous a apporté de sympathiques propriétés permettant — entre autres — d’appliquer une rotation à un élément, ces propriétés ne sont pas envisageables avant IE9, il convient donc de **bien se renseigner sur la portée du projet** avant toute chose.

## Utilisez des font-icons

Plutôt que de piocher des images sur [iconfinder](https://www.iconfinder.com/){ target="_blank" rel="noopener" } (au demeurant très bon), **pourquoi ne pas utiliser une font-icon** ? En fonction des besoins, [FontAwesome](http://fortawesome.github.io/Font-Awesome/){ target="_blank" rel="noopener" } ou [Genericons](http://genericons.com/){ target="_blank" rel="noopener" } sont de très bons choix.

D’abord, ça évitera à l’intégrateur-trice de devoir enregistrer chaque icône manuellement, devoir faire des sprites, et parfois utiliser des ruses de sioux pour des états différents (survol). Ensuite, ça évitera beaucoup de complications pour la gestion des différents supports, et des écrans (Par exemple, les fameux écrans Retina et leurs pendants chez la concurrence).

Bref, à moins d’avoir des besoins très spécifiques en matière d’icones (plusieurs couleurs, par exemple), il n’y a aucune raison de ne point utiliser ces petits bijoux.

## Prévoyez plusieurs cas de figure

Si vous faites un menu déroulant, faites le design de ce menu une fois déroulé. Prévoyez les différents états des onglets (standard, survolé, page en cours), des boutons, des liens, des champs de formulaire (focus), et des différentes interactions — s’il doit y en avoir — de la page.

De même, vérifiez avec votre chef de projet si le design doit être fluide, adaptatif, fixe, responsive… Et prévoyez les différentes modifications de la maquette en fonction des besoins — le plus courant étant de prévoir au moins une version mobile.

**Pensez à tous les cas de figure **!

## Gardez des tailles de police cohérentes

Le rendu du texte par défaut (le contenu textuel) doit être le même partout, pour chaque page. Par défaut, la taille de texte d’un document web est définie à 16px, pour fournir un compromis entre confort de lecture et quantité de texte affichée. Vous pouvez bien sûr en changer, mais assurez-vous que cette taille soit la même pour toutes les pages. De même ne faites pas de variations entre les éléments occasionnels : la taille d’un titre devrait elle aussi rester la même d’une page à une autre, même si la mise en forme est différente (ça arrive, par exemple une page "article" et une page "liste des articles" ne sont pas forcément identiques).

Enfin, **assurez-vous d’utiliser des tailles de police réelles**. Photoshop laisse la liberté de mettre des tailles totalement délirantes (23.58px) qu’il n’est pas possible d’avoir en web. De même, gardez une cohérence au niveau des valeur : restez plutôt sur des nombres pairs et privilégiez des écarts logiques et linéaires (Par exemple de 8 pixels : 16px, 24px, 32px).

## Utilisez des grilles

Un point essentiel du design de ces dernières années : l’arrivée des grilles. Elles permettent de structurer facilement ses pages, autant pour le designer que le codeur. Cela permet une cohérence visuelle impeccable et évite d’avoir à gérer plusieurs tailles différentes.

Vous pouvez par exemple utiliser les scripts de [960.gs](http://960.gs/){ target="_blank" rel="noopener" } (ou les modèles fournis), ou bien des [templates prédéfinis](http://www.ravelrumba.com/photoshop-grids/ "Photoshop Grids"){ target="_blank" rel="noopener" }. Plus d’explications dans cet article de Smashing Magazine : ['Establishing your grid in photoshop (en)'](http://www.smashingmagazine.com/2011/11/09/establishing-your-grid-in-photoshop/){ target="_blank" rel="noopener" }.

Demandez à votre intégrateur-trice ce qu’il-elle utilise généralement, vous trouverez sûrement un outil commun.

## Attention à la casse

Il se peut que l’intégrateur-trice doive copier-coller les textes que vous aurez mis en maquette. Le contenu de certains projets est parfois validés directement en maquette, parfois dans des langues étrangères. J’ai eu le cas récemment avec du mongol, auquel je ne pige pas un broque : il m’était impossible de réécrire le contenu moi-même. Pour ces raisons, faites attention à votre façon d’écrire du texte : **Ne mettez jamais tout en majuscules**. Si vous devez mettre un texte en capitales, utilisez le bouton "Tout en capitales" du panneau d’options _Caractère_. De la même façon, il m’arrive de copier coller des textes et de me retrouver avec 'un ACCOMPAGNEMENT personnalisÉ'. Faites donc attention à ce genre de détails, et écrivez de façon normale même si le rendu diffère.

## Les modes de fusion

Photoshop propose différents modes de fonctionnement des calques entre eux :

![Modes de fusion Photoshop](https://www.emmanuelbeziat.com/wp-content/uploads/2015/09/modes-de-fusion.jpg) { .text-align-center }

Vous voyez de quoi je parle ? c’est un outil très cool, pour faire plein d’effets sympatoches. Hé bien **vous n’y touchez pas !** Il est strictement impossible de reproduire ces effets en web. Alors n’en faites rien, sauf si vous pouvez aplatir le résultat final (et dans le doute, demandez, encore une fois).

## Conclusion : discutez avec tout le monde

La meilleure façon de ne pas compliquer le travail des autres reste encore d’en discuter avec eux au long du processus de création. Si l’intégrateur-trice chargé-e de mettre votre maquette en boîte n’est pas un gros manche et connaît un peu son métier, il-elle saura vous aiguiller sur certains points, vous conseiller sur ce qui fonctionne et ce qui est raisonnable, faisable ou inenvisageable en fonction des contraintes qui sont imposées sur le projet. De même, ces gens sont souvent de bon conseil en ce qui concerne la facilité de navigation ou la pertinence de certains éléments.

La plupart des webdesigners avec qui j’ai travaillé n’ont en fait aucune formation en webdesign. Ce sont généralement des maquettistes print et/ou infographistes PAO reconvertis ou qui ont ajouté une compétence à leur panel d’activités. Si vous êtes dans ce cas, n’hésitez pas à chercher quelques journées de formation en webdesign, et lisez des bouquins qui pourront vous aider à vous imprégner plus efficacement du travail de webdesigner.

La maquette est une étape importante et ne doit pas être expédiée ni négligée. Les maquettes présentées au client devraient toujours d’abord être validées par des développeurs et des ergonomes. { .c-note .c-note--important }

Vous pouvez retrouver l’ensemble de ces conseils (et d’autres) sur [ces Guidelines](https://github.com/EmmanuelBeziat/guidelines/tree/master/photoshop) { .c-note .c--info }
