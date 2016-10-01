webpackJsonp([48,4],{165:function(e,s){e.exports={rawContent:'\r\nDans le domaine du web comme dans tous les autres, il y a de bonnes et de mauvaises pratiques. Rassurez-vous (ou soyez déçu(e)s !) je ne tiendrais pas ici compte de tous les points récurrents sur la validité et la sémantique du html, sur l’optimisation du CSS, js, php ou tout autre langage ou sur les tailles d’images. Non, je vais plutôt parler de pratiques obscures qui peuvent sembler très cool de prime abord et qui sont en fait de vraies mauvaises idées pour diverses raisons.\r\n\r\nÀ noter que ce top sera étoffé au fur et à mesure que les idées me viendront ou que je rencontrerais des cas d’école.\r\n\r\n\r\n## #1 : modifier les curseurs\r\n\r\nJ’entends par là **modifier le comportement normal des curseurs**, par exemple utiliser (comme je le vois beaucoup trop) `cursor: nw-resize;` (![cursor resize](https://images.emmanuelbeziat.com/cursor-resize.png)) en lieu et place de `cursor: pointer;` (![cursor hand](https://images.emmanuelbeziat.com/cursor-hand.png)</a>) au survol des liens et éléments cliquables. Non, non et NON ! Ce n’est pas cool ni original (on faisait ça sur les pages persos de MultiMania avant même l’ADSL !) et ça ne donne en aucun cas l’impression que vous maîtrisez super bien le CSS.\r\n\r\nLes curseurs sont des icones **sensées**, ayant chacun une **signification visuelle codifiée** ancrée chez la grande majorité des utilisateurs des systèmes d’exploitations principaux (Windows, OSX, distributions Linux). Les mélanger (outre le fait de n’avoir aucun intérêt) risque de perdre le visiteur qui passe sur votre site et lui donner envie de fermer la page sans plus de manières. Alors certes on peut rétorquer qu’il suffirait de faire un effort d’adaptation, mais certains individus qui souffrent de troubles difficultés cognitives (mêmes légères !) peuvent s’en retrouver totalement désorientés.\r\n\r\nEt même, rien que sur le principe, ça ne se fait pas ! Imaginez que j’inverse les touches de votre clavier quand vous voulez poster sur un forum ! De la même façon, attention lorsque vous définissez vos propres curseurs : vous pouvez tout à fait avoir des visiteurs ayant des difficultés visuelles qui utilisent des curseurs très gros et très contrasté, et vous risquez de compliquer passablement leur navigation…\r\n\r\nMon conseil : **Foutez la paix aux curseurs** !\r\n\r\n## #2 : les liens qui bougent\r\n\r\nTout aussi insupportable que les curseurs indélicats, les **liens qui foutent le camp au survol**, qui **changent de taille**, **de typo**, **d’espacement** et autres variantes. L’apparition de la propriété `transition` a popularisé ces derniers temps ce genre de pratiques ; cependant, il n’y a rien de plus pénible qu’un lien qui se barre quand vous voulez le survoler. Pire encore, parfois cela conduit le lien à perdre l’état "survolé" (_hover_), et donc à retourner à sa place initiale où il se retrouvera à nouveau sous le curseur, reprendra l’état survolé et s’animera ainsi en boucle bêtement, rendant le clic plus compliqué qu’un jeu de famille **MB**.\r\n\r\nLa seule variante utilisable, c’est quand le lien est un bloc entier qui **ne change pas de taille au survol**, et dont seul le contenu change.\r\n\r\nMon conseil : tenez-vous en au changement de couleur et aux [`text-decoration`](http://www.w3.org/TR/CSS21/text.html#decoration){ target="_blank" }.\r\n\r\n## #3 : les balises qui n’existent pas\r\n\r\nTrès récemment, je suis tombé sur ça :\r\n\r\n```markup\r\n<aa>Quelque chose</aa>\r\n```\r\n\r\nOu bien encore ça :\r\n\r\n```markup\r\n<r class="valeur">Quelque chose</r>\r\n```\r\n\r\nInutile de vous dire que ça n’est en aucun cas du html, que ça n’est pas valide, et je trouve absolument scandaleux que les navigateurs affichent un truc pareil sans broncher…\r\n\r\nAlors d’accord, le fait qu’on puisse utiliser des balises inconnues, ça a bien servi au passage du html5 (et encore maintenant pour de vieux IE), mais là, quand même, merde !\r\n\r\nBref, mon conseil : **Tenez-vous en aux balises existantes en html, et validez votre code !**\r\n',metaData:{title:"Mon top des mauvaises pratiques web",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2014-01-02 09:46:17",tags:["html/css","mauvaises pratiques"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});
//# sourceMappingURL=48.49b386e8ce1845537f82.js.map