---
title: "Règles HTML/CSS pour les débutants"
date: "2014-05-06 02:23:53"
tags:
- html/css
- bonnes pratiques
categories:
- Tutoriels
---

Écumant les forums de codage et autres coins de geeks, je me rends compte que les mêmes erreurs reviennent très souvent dans le code des débutants (et même de moins débutants). Alors, faute de pouvoir traquer et éradiquer les sources qui propagent du html écrit à la truelle et du javascript de 12 ans d’âge, je tente — vaille que vaille — d’éduquer les jeunes délinquants du markup dont je croise la prose.

Et comme je suis une feignasse, plutôt que de répéter trouzmille fois les mêmes choses, j’en fais ici un condensé.


## Lexique

Le premier problème récurrent, c'est de ne pas connaître les noms des différents éléments qui composent le code. C'est bien plus compliqué d’exposer un problème quand on ne sait pas comment s'appelle quelque chose. Aussi, voici un schéma explicatif très simple de la terminologie HTML/CSS.

```markup
<balise attribut="valeur">
```

```css
déclaration {
	propriété: valeur;
}
```

Une déclaration CSS est composée de sélecteurs. Si vous ne voyez pas de quoi il s'agit, voir l’article sur les [sélecteurs CSS](http://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie1-css2/ "Principes du CSS – Les sélecteurs (Partie1 : cSS2)"). { .note .note--important }

Voilà ; dorénavant, interdiction de parler de "propriétés html" ou de "balises css".

## HTML

### La balise <br />

Une erreur courante (Mais où avez-vous trouvé ça ?!) consiste à écrire la balise `<br />` en inversant le sens d’auto-fermeture : `</br>`. Ça n’existe pas. C'est soit `<br />` (xhtml ou html) soit `<br>` (html seulement) ; pas `</br>` ni `<br/>` (l’espace n’est pas facultatif).

Et cette balise ne sert qu'à revenir à la ligne au sein d’un bloc de texte. Elle ne sert pas à sauter des lignes, ni à faire des marges.

### Attribut alt sur les images

L’attribut `alt=""` est obligatoire sur les balises `<img />`.

### Ouverture et fermeture des balises

Les balises doivent être imbriquées proprement. C'est à dire que lorsque vous ouvrez une balise puis une seconde, il faut refermer la seconde avant la première.

Bon :

```markup
<div>
	<span>
	</span>
</div>
```

Mauvais :

```markup
<div>
	<span>
	</div>
</span>
```

### Balises dépréciées

On est en 2014 au moment de la rédaction de cet article, et je vois encore régulièrement du code obsolète depuis l’arrivée du xhtml (2001). Il est important de noter que désormais (et depuis longtemps maintenant), on sépare la structure et le contenu (html) de la mise en forme (css).

Il est primordial de comprendre ce principe de sémantique du HTML. Lorsque qu'on utilise une balise `<em>`, ce n’est pas pour mettre du texte en italique, c'est pour créer une [emphase](https://fr.wiktionary.org/wiki/emphase "emphase — Wiktionnaire") ; or, il se trouve que dans les règles d’écriture occidentale, l’emphase est exprimée en italique. Exemple : "Tu es _vraiment_ sûr de ton coup ?".

On retient : on n’utilise pas des balises pour leur rendu, mais pour leur **sens sémantique**. { .note .note--important }

De fait, toutes les balises et attributs à but esthétique doivent être définitivement supprimées de vos pages : `<center>`, `<font>`, `<basefont>`, `<strike>`.

À noter que plusieurs balises dépréciées en xhtml ont fait leur retour en html5 **avec un nouveau sens sémantique** (tout relatif, personnellement j’ai surtout l’impression qu'ils savaient pas quoi en foutre). Leurs spécifications sont assez peu claires, voire franchement brouillons. Je vous les liste quand même : `<b>`, `<i>`, `<s>`, `<u>`.

De la même façon, les attributs liés au style doivent dégager : `alink`, `background`, `bgcolor`, `link`, `vlink`, `align`, `valing`, `hspace`, `vspace`, `border`, `height`, `width`, `nowrap`, `star`, `clear`, `noshade`…

### marquee

La balise `<marquee>` n’est pas une balise standard, n’a jamais fait partie des spécifications et n’en fera jamais partie. Ne l’utilisez pas.

### Les tableaux

Les tableaux sont utilisés pour mettre des données tabulaires, comme des résultats sportifs ou des notes.

En aucun cas il n’est permis de s'en servir pour mettre en page son site.

### Attributs d’événements

Les attributs d’événements, utilisés auparavant pour faire des appels aux fonctions javascript, sont à proscrire. Utilisez les gestionnaires d’événements directement dans un code javascript.

Parmi ces attributs, on trouve notamment `onclick`, `onblur`, `onmouseover`, `onmouseout`.

### Les mots à rallonge

Très souvent, on tombe sur des sujets rapportant des comportements étranges de texte qui dépasse de leur contenu. Et le texte en question, est une ligne infinie de caractères, soit du "aaaaaaaaaaaaaaaaaaaaaaaaa" (beaucoup plus long, entendons-nous), soit du "oihoihgopizeagjae". Le fait est qu'aucun mot n’est aussi long, et que le texte se met en forme aux espaces qui le composent. Donc sans espace, il n’ira jamais à la ligne sans une propriété pour l’y forcer. Donc avant de songer à l’y forcer, utilisez du vrai texte factice avec un [générateur de lipsum](http://fr.lipsum.com/ "Lipsum"), qui sert justement à ça.

### Les balises structurantes

Les nouvelles balises de structure introduites en html5 (à savoir `header`, `aside`, `footer`, `nav`, `figure`, `section`, etc.) ne remplacent pas les `div`. On utilise toujours des `div` si on doit faire un bloc qui n’a pas de vocation sémantique particulière.

De la même façon, ces balises ne sont pas uniques (sauf `main`) et ne dispensent donc pas d’utiliser classes et ID pour les cibler en CSS plutôt que de simplement utiliser leur nom d’élément. En clair, faites comme avant, mais en remplaçant les `div` lorsqu'un élément sémantique est possible. Exemple : `<header id="header">`.

En ce moment, la tendance est à l’utilisation quasi-exclusive de classes et à l’abandon des ID. Mais c'est bien une tendance, et non une spécification du langage. Faites comme vous le sentez, mais n’abusez pas des ID ! { .note .note--info }

### La balise `<p>

La balise `<p>` est utilisée pour mettre en forme des paragraphes. Si vous n’avez pas besoin de faire des paragraphes (C'est à dire plusieurs blocs de textes espacés entre eux), rien ne vous force à utiliser cette balise. Et contrairement à ce que j’ai pu lire, rien n’oblige les images à être contenues dans un paragraphe.

### L’attribut style

Évitez d’utiliser l’attribut `style=""` pour mettre du CSS directement dans votre html. Outre le fait que ça rende le code difficile à maintenir (principalement à cause du problème de poids, cf. l’article sur le [poids des déclarations](http://www.emmanuelbeziat.com/blog/principes-du-css-poids-des-declarations/ "Principes du CSS – Poids des déclarations")), ça brise la séparation contenu / mise en forme.

## CSS

### Position

L’erreur la plus répandue est de croire qu'utiliser la propriété `position` est une bonne idée pour mettre en forme son site. C'est **FAUX**. C'est une très mauvaise idée, ce n’est pas fait pour ça, et ça ne vous apportera que des problèmes. Le positionnement est un système particulier qui demande d’être absolument maîtrisé avant de l’utiliser, sous peine de voir son site faire n’importe quoi.

### Les pourcentages

Une autre croyance qui a la vie dure : mettre toutes les valeurs en % serait mieux. Ce n’est pas le cas. Il n’y a que de rares cas où l’utilisation des % se justifie (notamment les grilles CSS, comme [960.gz](http://960.gs/) ou celles utilisé par [Bootstrap](http://getbootstrap.com/) ou [Foundation](http://foundation.zurb.com/)).

Vous pouvez très bien faire un site extensible en n’utilisant qu'un minimum de valeurs en % (un exemple : [Aligner trois colonnes proprement](http://www.emmanuelbeziat.com/blog/aligner-trois-colonnes-proprement/ "Aligner trois colonnes proprement"). Et même dans ces cas-là, n’utilisez pas les % pour des marges, elles n’ont pas à être extensibles !

Les pourcentages apportent beaucoup plus de problèmes et de problématiques que de solutions, alors il faut être parfaitement certain de maîtriser son environnement avant de s'en servir. [Voici un exemple concret](https://jsfiddle.net/ee944u5t/), rencontré par un internaute d’OpenClassrooms : lorsqu'on agrandi la fenêtre de rendu, on remarque un dépassement vertical (en bas). Les marges ayant été définies de façon relative (avec des pourcentages), celles-ci sont calculées par rapport à la largeur du parent, même pour les marges verticales. Donc en étirant la largeur du conteneur, on étire la marge verticale du bloc enfant… Bref, n’importe quoi.

Et pensez aux propriétés `min-width` et `max-width`.

Et `width: 100%;`, [n’y pensez même pas](http://blog.goetter.fr/articles/width-100-tu-es-le-mal/ "Width 100%, tu es le mal !").

### Les hauteurs

Une erreur courante : vouloir à tout prix contrôler la hauteur des éléments de son site. C'est une **mauvaise** idée. Une page s'adapte en hauteur en fonction de son contenu. La hauteur que vous définissez par rapport à ce que vous voyez sur votre écran ne correspond pas à ce que verront les autres. Si quelqu'un zoome le texte pour des questions de visibilités, si un écran est trop petit et réduis l’espace, alors le contenu va dépasser le contenant, et ce sera à la fois moche et illisible. Sauf cas très spécifiques, ne touchez pas à la hauteur des éléments, laissez-les prendre la hauteur qu'ils veulent. Pour décoller le contenu des bords d’un conteneur, pensez au padding !

### Float et display

Il est parfaitement inutile d’essayer de donner à un élément flottant une propriété `display`. Un flottant est **TOUJOURS** de type _block_, et il est **IMPOSSIBLE** de changer ça.

### Le reset CSS

Une autre mauvaise idée. Plus d’explications dans l’article [Doucement sur le box-sizing !](http://www.emmanuelbeziat.com/blog/doucement-sur-le-box-sizing/ "Doucement sur le box-sizing !").

Et surtout, évidemment, surtout pas ça :

```css
* { margin: 0; padding: 0; }
```

## Conclusion

Difficile d’être exhaustif, aussi cette petite liste sera complétée au fur et à mesure. Bref, maintenant que vous avez lu ça, vous avez de bonnes cartes en main. Alors faites du bon code !
