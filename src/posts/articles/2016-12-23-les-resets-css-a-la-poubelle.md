---
title: "Les resets CSS : à la poubelle"
date: 2016-12-23 12:31:07
image: https://images.emmanuelbeziat.com/social-default-fb.jpg
tags: ["html/css"]
categories: ["Diatribes"]
disqus: true
---

Je ne sais pas ce que le web a encore produit de tutoriel médiocre, mais en ce moment il y a une résurgence de ces immondices que sont les reset CSS.

Je veux parler de ceci :

```css
* { margin: 0; padding: 0; }
```

Et toutes les variables existantes…

## C’est quoi le problème ?

Un peu d’histoire : les techniques de reset CSS viennent du fin fond des âges (2000, par là…), un temps où les normes web n’existaient pratiquement pas. Netscape venait de sortir le navigateur le plus mauvais de son histoire (à tel point qu’on ne le revit plus), laissant Internet Explorer comme seule monture des chevaliers du web (et ne râlez pas, IE6 était excellent et ce sont les développeurs qui en ont fait ce qu’il a été par la suite. Pas Microsoft).

Bref, cette technique a été créée, soit-disant, pour gommer les différences entre les navigateurs. Et c’est faux. Cette technique a été créée par des devs qui ne comprenaient pas à quoi ils s’attaquaient. Des devs qui étaient perplexes devant des questions de fusion de marges, ou qui ignoraient que les éléments ont des marges par défaut.

Voilà le but d’un reset CSS : tout péter comme un gros babouin. Il n’y a AUCUNE uniformisation là-dedans, juste de la destruction systématique.

## Y a pire !

En plus de ne servir à rien, c’est aussi gourmand en ressources et stupidement chronophage.

D’abord, le sélecteur universel (`*`, ne pas confondre avec le sélecteur de descendance indirect qui est aussi un `*`; si tu n’as aucune idée de quoi je cause, un tour par ici s’impose : [Principes du CSS : les sélecteurs](https://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie1-css2)) va s'appliquer à tous les éléments de la page.

Les éléments qui ont une marge par défaut sont les suivants : `body`, `h1-h6`, `p`, `ul`, `ol`, `blockquote`, `figure`, `hr`, `pre`, `dl`, `fieldset`. Dans la majorité des cas, ces marges par défauts sont parfaitement utiles : il serait stupide de vouloir que deux paragraphes de textes soient collés sans espacement, par exemple. C’est le cas avec la plupart de ces balises, sauf body (car on définit généralement des marges ailleurs dans notre design).

Donc, utiliser cette directive implique déjà qu’on va **créer un problème de lecture, qu’il faudra ensuite combler manuellement** en ajoutant des marges aux éléments auxquels on vient d'enlever une marge (?!), avec tous les risques d’oublis de cas que comporte une telle situation. Tout ça pour, généralement, _juste_ le problème de marge par défaut de body.

Mais en plus de ça, ça veut dire que le moteur de rendu va parser la page à la recherche de **TOUS** les éléments, même ceux qui n’ont pas de marge par défaut, pour leur ajouter la directive de ne pas avoir de marge. C'est à dire que toute occurrence des balises `a`, `abbr`, `address`, `applet`, `area`, `article`, `aside`, `audio`, `b`, `base`, `bdi`, `bdo`, `big`, `br`, `button`, `canvas`, `caption`, `cite`, `code`, `col`, `colgroup`, `datalist`, `dd`, `del`, `détails`, `dfn`, `dialog`, `dir`, `div`, `dd`, `dt`, `em`, `embed`, `figcaption`, `footer`, `form`, `head`, `header`, `html`, `i`, `iframe`, `img`, `input`, `ins`, `kbd`, `keygen`, `label`, `legend`, `li`, `link`, `main`, `map`, `mark`, `menu`, `menuitem`, `meta`, `meter`, `nav`, `noframes`, `noscript`, `object`, `optgroup`, `option`, `output`, `param`, `progress`, `q`, `rp`, `rt`, `ruby`, `s`, `samp`, `script`, `section`, `select`, `small`, `source`, `span`, `strong`, `style`, `sub`, `summary`, `sup`, `table`, `tbody`, `td`, `textarea`, `tfoot`, `th`, `thead`, `time`, `title`, `tr`, `track`, `tt`, `u`, `var`, `video`, `wbr` aura une directive `margin: 0; padding: 0;` parfaitement inutile. Intéressant ¡

En un mot comme en cent, c'est inutile. Un `margin: 0;` sur body **suffit largement** et évite tout problème.

## On a même été plus loin…

Pire que cette ignominie qui tient en deux lignes, on a également eu droit à la fantaisie du Reset Meyer, qui entendait faire un reset plus intelligent : péter tous les styles par défaut, en plus des marges, manuellement sur tous les éléments, plutôt que tous d’un coup. Je cherche encore pourquoi on a hurlé au génie.

## Se convaincre que ça ne sert à rien

Illustrons le problème de façon simple :

* [Version basique, avec les marges par défaut](https://jsfiddle.net/062zuyx5/) → Pas joli, mais lisible.
* [Version avec le reset crade](https://jsfiddle.net/062zuyx5/1/) → Là, on a clairement perdu en lisibilité, on est déjà dans le n’importe quoi…
* [Version avec l’immonde "reset meyer"](https://jsfiddle.net/062zuyx5/2/) → Le pompon. On n’a plus rien du tout. Tout est pété, inutilisable.

## Que faire aujourd’hui ?

Rien. Vraiment, rien. Foutez la paix à vos styles par défaut, ils sont là pour une bonne raison. Si vous avez un problème avec un élément, corrigez cet élément en question, pas plus.

Uu pire, si vraiment on a un problème de constance d’un navigateur à un autre, alors il vaut largement mieux utiliser [Normalize.css](https://necolas.github.io/normalize.css/), qui n’est pas un reset mais une feuille de style de base. Plutôt que de péter tout et n'importe quoi avec un reset, il est bien plus safe et cohérent de définir des styles de base directement, pour les éléments qui en auraient besoin, afin de les uniformiser.

Et encore une fois, ça n’a rien d’obligatoire : les navigateurs gèrent majoritairement leurs éléments de façon tout à fait correcte.
