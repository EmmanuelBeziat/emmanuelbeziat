webpackJsonp([52,4],{161:function(e,n){e.exports={rawContent:'\r\nParfois, votre CSS ne semble pas avoir d’effet. Vous ajoutez une classe à un élément pour le rendre rouge, et celui-ci reste désespérément bleu. Mais pourquoi ? Hé bien, ami lecteur fort curieux (et tu as raison) en train de faire ta veille internet, je vais t’expliquer le **poids des déclarations** (ouaiiis !).\r\n\r\nPour rappel, la déclaration, c’est ce qui cible un ou plusieurs éléments html :\r\n\r\n```css\r\n#monElement div.element { }\r\n```\r\n\r\n## Le poids de chaque élément\r\n\r\nVous devez donc savoir qu’il y a trois façons "basiques" de cibler un élément, c’est à dire trois sélecteurs de base : l’identifiant (ID, #), la classe (class, .), ou le nom de l’élément :\r\n\r\n```css\r\nelement { color: red } /* nom */\r\n.element { color: red } /* classe */\r\n#element { color: red } /* identifiant */```\r\n\r\nHé bien ces trois sélecteurs ont chacun un poids :\r\n\r\n*   L’élément a un poids de 1\r\n*   La classe a un poids de 10\r\n*   L’identifiant a un poids de 100\r\n\r\nLe poids d’une déclaration est calculé par simple addition de ces poids. Ainsi, prenons pour exemple cette déclaration :\r\n\r\n```css\r\n#monID .maClasse {}\r\n```\r\n\r\nLe premier élément est un identifiant, il vaut donc 100\\. Le second est une classe, il vaut donc 10\\. Le poids de cette déclaration est donc 100 + 10 = 110\\. Simple non ?\r\nVoici d’autres exemples :\r\n\r\n```css\r\n#monID span {}\r\n```\r\nIdentifiant (100) + élement (1) = 101\r\n\r\n```css\r\n#monID #autreID div.maClasse {}\r\n```\r\n\r\nidentifiant (100) + identifiant (100) + element (1) + classe (10) = 211\r\n\r\n```css\r\n.maClasse .autreClasse #monID {}\r\n```\r\nclasse (10) + classe (10) + identifiant (100) = 120\r\nc’est compris ?\r\n\r\n_"Mais à quoi ça nous sert ?"_, vous demandez-vous sûrement. Hé bien c’est simple : **Plus une déclaration a un poids élevé, plus elle est prioritaire sur une autre**, peu importe l’ordre de déclaration.\r\n\r\nJusqu’ici, vous saviez que l’ordre des déclarations influait sur leur emploi :\r\n\r\n```span { color: red }\r\nspan { color: blue }\r\nspan { color: green }\r\n```\r\n\r\nc’est toujours vrai, l’élément ciblé ici serait de couleur verte, mais uniquement parce que le poids des déclarations est identique. Mais maintenant voyons ceci :\r\n\r\n```css\r\n#monID { color: red }\r\nspan { color: blue }\r\n```\r\n\r\nSi l’élément ciblé est un span qui porte l’id "monID", alors son texte sera de couleur rouge, car le poids de la première déclaration est de 100 (identifiant), la seconde n’étant que de 1 (élément).\r\n\r\nPrenons un exemple en html :\r\n\r\n```markup\r\n<ul id="menu">\r\n\t<li class="color"><a href="#">Lien 1</a></li>\r\n\t<li><a href="#">Lien 2</a></li>\r\n\t<li><a href="#">Lien 3</a></li>\r\n\t<li><a href="#">Lien 4</a></li>\r\n\t<li><a href="#">Lien 2</a></li>\r\n</ul>\r\n```\r\n\r\nMaintenant, imaginons un CSS déjà existant pour ce html, qui vise à colorer les liens en rouge :\r\n\r\n```css\r\n#menu a { color: red }\r\n```\r\n\r\nCette déclaration a donc un poids de 101 (un identifiant et un élément);\r\n\r\nSur ce, vous voulez que le lien dont la liste porte la classe "color" s’affiche en vert.\r\n\r\n```css\r\n.color a { color: green }\r\n```\r\n\r\nSurprise ! Ça ne fonctionne pas. En effet, cette déclaration n’a un poids que de 11, donc il ne surclasse pas la précédente de 102 même en étant placé après. Il faut donc écrire une déclaration dont le poids surpassera la première :\r\n\r\n```css\r\n#menu .color a```\r\n\r\nCette déclaration fait donc 111 (identifiant + classe + element), son poids est supérieur à la première, et notre lien s’affiche en vert.\r\n\r\nLes pseudo-classes (`:hover`, `:first-child`, etc.) ont le même poids qu’une classe (donc 10) et les pseudo-éléments ont le même poids qu’un élément (1). {.c-note .c-note--info}\r\n\r\n\r\nAttention toutefois : Il ne s’agit pas d’une simple notation mathématique, mais de "niveaux de poids". 10 classes n’auraient le même poids qu’un ID. Il est impossible de surcharger un type "supérieur" — en clair, des éléments ne pourront pas surcharger une classe, une classe ne pourra pas surcharger un ID, etc.\r\n\\nPour être plus précis, il faudrait noter "1.0.1" et non simplement "101". Ce qui signifie que si on rajoutait 15 classes à cette déclaration, on obtiendrait un poids de "1.15.1", et non 251. {.c-note .c-note--important}\r\n\r\n### Notez bien !\r\n\r\nD’une manière générale, dans le métier, on essaie de faire des déclarations "minimales", c’est à dire au poids le plus petit possible. En effet, pour l’exemple précédent, on aurait pu faire une déclaration de ce genre :\r\n\r\n```css\r\nul#menu li a { color: red }\r\n```\r\n\r\nCes déclarations peuvent vite devenir très longues, et les raccourci un maximum est un bon moyen de s’assurer à la fois que le code continuera à changer même si le markup (Template) de la page change dans l’avenir, et de permettre d’optimiser un peu le poids de la feuille de CSS. Mais surtout, cela permet de pouvoir surclasser ces déclarations très facilement. En effet, il y a bien plus de façons simples de surclasser une déclaration d’un poids de 102 que de 625 lorsqu’on veut effectuer une petite modification.\r\n\r\nPensez-y !\r\n\r\n## Cas particuliers\r\n\r\n```markup\r\n<div style="color:red">mon texte</div>\r\n```\r\n\r\nDéclarer du CSS inline (c’est à dire dans le html) lui donne automatiquement un poids de 1 000\\. Autant dire que vous ne pourrez presque rien faire dans votre feuille de style pour le surclasser ! c’est aussi pour ça qu’il faut éviter de mettre du CSS de cette façon. Comment faire alors ?\r\n\r\nHé bien le marqueur `!important` donne un poids de 10 000\\. De quoi surclasser tout ce qui se trouve dans la page, y compris le CSS _inline_.\r\n```css\r\nelement { color: red !important }\r\n```\r\n\r\nRetenez donc que ces deux cas particuliers ne devraient pas être utilisés. La gestion du poids comme de l’héritage suffit largement pour\r\nmettre votre site en forme !\r\n\r\nVoilà, maintenant vous savez tout sur le poids des déclarations en CSS.\r\n\r\n#### Edit du 7 Avril\r\n\r\nSi vous n’avez rien compris, si vous pensez que des métaphores avec des animaux mignons et des gifs animés vous aideront à mieux appréhender le concept, ou tout simplement si vous trouvez que j’explique mal, **Lamecarlate** a fait un bon article qu’elle a sobrement (Et honteusement, c’était mon idée !) nommé  [Sélecteurs CSS : poids des déclarations](http://informatique.lamecarlate.net/blog/articles/selecteurs-css-poids "Lamecarlate"){ target="_blank" }\r\n',metaData:{title:"Principes du CSS - Poids des déclarations",image:"https://images.emmanuelbeziat.com/social-thumbnail.jpg",date:"2013-09-01 23:10:27",tags:["html/css"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});
//# sourceMappingURL=52.fb94236711b519be1b9d.js.map