---
title: Pourquoi j’indente avec « tab »
date: 2016-10-10 00:00:00
description: Au sein de la communauté des dev’ web, une guerre fait rage pour savoir s’il convient d’indenter son code avec deux espaces ou une tabulation.
image: https://images.emmanuelbeziat.com/social-default-fb.jpg
tags: ["workflow","bonnes pratiques"]
categories: ["Diatribes"]
disqus: true
publish: true
---

Au sein de notre petite communauté de dév’ web, une guerre (parmi tant d’autres) fait rage. Il s’agit de savoir s’il convient d’indenter son code (Pour ceux du fond, indenter = aligner proprement son code) en usant de deux espaces, ou d’une tabulation. Bon, après il y a bien deux ou trois <i lang="en">outsiders</i> qui indentent avec quatre espaces, mais ça…

## Pourquoi cette question ?

Allez savoir. Toujours est-il que les deux espaces semblent largement remporter la victoire, tant ils ont la main mise sur tous les services : Codepent, JSfiddle, Dabblet (…) utilisent tous deux espaces par défaut. Github également. La plupart des conventions de _guidelines_ se mettent d’accord sur ces deux espaces.

Les arguments avancés sont ceux-ci :
- Deux espaces suffisent pour que l’indentation soit visible et marquée…
- …mais en mettre plus prend beaucoup d’espace sur l’écran, surtout quand il y a beaucoup de code imbriqué (en html par exemple).
- L’avantage principal étant qu’au moins, le code a la même gueule pour tout le monde !

Ouais ? Hé ben _fuck it_.

## Pratiques, mon cul !

Indenter avec des espaces, c’est lourd. Sérieusement, regardez ce bout de code :

```html
<div class="class-much-item item-class">
  <div class="class-class very-item">

    <div class="so-indent much-spaces">
      <span class="very-indent"></span>

	  <div class="such-spaces much-wow">
	    <span class="i-has-spaces"></span>
	  </div>

	</div>
  </div>

  <div class="very-wow">
    <div class="much-much">
	  <span class="wow"></span>
	 </div>
  </div>

  <div class="class-much-item class-class">
    <span>
	 <span class="very-span much-class"></span>
	</span>
  </div>

 </div>
```

Hop ! Avez-vous noté l’erreur d’indentation ?
- <q>Oui !</q> → Vous mentez.
- <q>Non…</q> → C’est normal.

Le risque d’avoir un ou trois espaces au lieu de deux est conséquent, surtout dans un code bien long. Et avec des langages très stricts sur l’indentation (Stylus, Coffee-Script…) et les linters qui flinguent votre validation, vous allez perdre du temps à chercher d’où viennent les bugs (et souvent ne pas penser tout de suite à un problème d’indentation). **Mais soit :** avec un peu d’organisation et de constance, on peut éviter les erreurs.

En sus, revenir en arrière dans des lignes indentées avec des espaces requiert évidemment plus de mouvements. C’est anodin dit comme ça, mais plus une ligne est imbriquée, plus il faut de mouvements. Si on doit réindenter un bloc entier de code, c’est autant de mouvements nécessaires.

Mais ce n’est pas encore ça le problème principal à mes yeux. Les adeptes des indentations à deux espaces reprochent souvent que les tabulations sont "inconstantes", dans le sens où elles peuvent avoir des largeurs de 1, 2, 3, 4 (enfin, je ne vais pas tous les faires, vous avez compris) espaces. Oui, mais… Et alors ?

## Did you just assume my indent ?

D’accord, John Random préfère une indentation visuellement "légère" et peu marquée pour avoir plus de code affiché sur son écran, alors il utilise deux espaces. Mais moi, j’me la pète avec mon 34" incurvé, j’ai de la place, je veux en profiter : je veux des indentations plus marquées ! En quoi les préférences visuelles d’autres devraient prévaloir sur les miennes ?

Hé bien si on utilise les tabulations, le problème disparait. En effet, tous les IDE et éditeurs permettent de configurer la taille de rendu des indentations par tabulation. Ce qui veut dire que si John Random utilisait les tabulations, il pourrait avoir des tabulations qui font exactement deux espaces de large. Pour tous ses projets. Et moi, en copiant-collant ses bouts de code, ma configuration me permettrait d’avoir directement un code indenté selon mes préférences (2, 3, 4, 8 espaces si ça me chante). Et vice-versa. En fait, chacun aurait SON propre rendu adoré d’amour, sur du code "universel" (c’est beau), plutôt que d’avoir un code unique qui se moque des préférences de chacun.

Honnêtement, qu’en a-t-on à fiche que le rendu d’un bout de code soit identique sur le PC du voisin / collègue / tonton, tant que les conventions d’écriture sont les mêmes ? Est-ce qu’on va aussi avoir des guidelines qui indiquent que pour pouvoir _forker_ un projet, il faut utiliser le thème de coloration syntaxique **Agila**, **Boxy Monokai** ou **Afterglow**, histoire d’être vraiment très très sûrs qu’il voit bien la même chose que nous ?

## Conclusion

Encore une fois, il ne s’agit pas ici de dire que les autres ont tort.

Seulement, il m’est déjà arrivé de me faire insulter parce que je code ainsi. Insulter, oui oui. Parce que pour certains, aller à l’encontre des conventions, c’est passible d’un <q>fils de pute</q> (Y a pas une _guideline_ qui dit <q>pas les mamans</q> ?).

Alors que moi, j’ai juste fait le choix qui me semble le plus approprié pour que chacun puisse avoir le rendu qu’il veut. De fait, il me semblait important de donner mon point de vue. Parce qu’imposer sa vision aux autres, c’est pas très Charlie.

### Post-scriptum

Pour les petit(e)s malin(e)s qui voudraient répondre <q>Ouiii, moi j’l’ai vue ton erreur d’indentatiooon, alors ton argumentaire y pue du cuuuul</q> : il y avait plusieurs erreurs. Et ce que tu as pris pour une erreur n’en était peut-être pas une, finalement…
