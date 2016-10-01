webpackJsonp([37,4],{176:function(e,n){e.exports={rawContent:'\r\nJe suis récemment tombé sur un joli traité des bonnes manières et autres politesses lorsqu’on est développeur, écrit par [Pierre-Antoine "Lisarael" Delnatte](http://leny.me "Pierre-Antoine Delnatte"){ target="_blank" } et que je vais repomper joyeusement ici (avec son aimable autorisation), parce que les conventions, c’est important.\r\n\r\n\r\n## Principes généraux\r\n\r\n*   Tous les fichiers sont encodés en UTF-8, sans BOM.\r\n*   Indentation en tabulation. 1 niveau d’indentation = 1 tabulation.\r\n*   Les commentaires sont importants, mais il faut commenter intelligemment : un commentaire inutile prend de la place pour rien.\r\n*   On se décide pour une langue : on nomme toutes les variables / classes en **anglais** ou en **français** (et, si possible, mais facultativement, les commentaires aussi), et on s’y tient : on ne jongle pas d’une langue à l’autre.\r\n*   Les _TODO_ sont conseillés, mais il faut les détailler : rien ne dit que c’est vous qui repasserez dessus.\r\n*   Tout projet de code devrait être stocké sur un gestionnaire de version comme _Git_, via la plateforme [GitHub](http://github.com/){ target="_blank" }.\r\n*   Corriger un fichier qui ne respecte pas les conventions n’est **jamais** une perte de temps.\r\n\r\n### KISS: Keep it simple, stupid!\r\n\r\n_La simplicité est la sophistication suprême_ : un code simple est plus lisible et plus facile à maintenir.\r\n\r\n### DRY: Don’t repeat yourself\r\n\r\nSi la même portion de code se retrouve deux fois ou plus dans un script, on en fait une fonction. Si la même portion de code se retrouve deux fois ou plus dans une classe, on en fait une méthode.\r\n\r\n### YAGNI: You aren’t gonna need it\r\n\r\nRien ne sert de coder une méthode qui n’a pas d’implémentation ou d’utilité immédiate.\r\n\r\n### Don’t be shy, ask!\r\n\r\nIl n’y a pas de honte à demander de l’aide, surtout avant d’attaquer une nouvelle fonctionnalité.\r\n\r\nIl ne devrait jamais y avoir une portion de code qui ne soit pas couverte par au moins deux personnes.\r\n\r\n## HTML\r\n\r\n*   Indentation stricte.\r\n*   Respect de la syntaxe XML :\r\n\r\n*   pas de balises d’ouverture sans balise de fermeture (par exemple `<br />` au lieu de `<br>`,\r\n*   balises et attributs en minuscules,\r\n*   les attributs booléens doivent avoir une valeur (par exemple `checked="checked"`).\r\n\r\n*   Le contenu d’un élément block doit être à la ligne, celui d’un élément inline peut être au choix à la ligne ou non. (exception acceptable pour la balise `\r\n`).\r\n*   À l’exception notable d’_html5shiv_ pour IE, les balises `<script>` sont déclarées en fin de `<body>`.\r\n*   Validez toujours votre code avec le [validateur w3c](http://validator.w3.org/ "Validator W3C"){ target="_blank" }.\r\n\r\n## CSS et dérivés\r\n\r\n*   Indentation stricte.\r\n*   Préférer les propriétés raccourcies (`font`, `background`, `margin`…).\r\n*   Quand on utilise des propriétés `-vendor-prefix`, on n’oublie pas de mettre la propriété finale de la spec à la fin. Et surtout, on vérifie si c’est nécessaire (voir l’article [Préfixes CSS : jusqu’à quand](http://www.emmanuelbeziat.com/blog/prefixes-css-jusqua-quand/ "Préfixes CSS, jusqu’à quand ?"){ target="_blank" }) !\r\n*   Pas de hack, sauf si _vraiment_ pas le choix. Préférer les _commentaires conditionnels_ de HTML pour rajouter des feuilles de styles spécifiques ou des classes sur l’élément `<html>`.\r\n*   En _Less_, _Sass_ ou _Stylus_ :\r\n\r\n*   On utilise des variables explicites, et si elles sont globales, on les définit en tête de module ou dans un fichier séparé pour les _superglobales_.\r\n*   Nommage des variables en **camelCase**.\r\n\r\n## JavaScript et dérivés\r\n\r\n*   JavaScript est un langage peu rigoureux, il faut l’être à sa place.\r\n*   `"use strict"` est obligatoire.\r\n*   Encapsulation de tout le code, aucune empreinte globale, et, si nécéssaire, créer un **namespace**.\r\n*   Indentation stricte.\r\n*   Chaînes de caractère en double quotes (`"string"`).\r\n*   Ouverture de bloc sur la même ligne, fermeture sur une nouvelle ligne.\r\n**Exemple :**\r\n\r\nvar test = function( param ) {\r\n// some code\r\n};\r\n\r\n*   Toutes les variables d’un bloc sont déclarées au début de celui-ci.\r\n*   Puisque JavaScript est un langage à _typage faible_, on ne _transtype_ pas une variable, et il est conseillé d’utiliser la **notation hongroise** pour les variables, en préfixant le nom d’une variable par son type :\r\n\r\n*   sVariable (`string`)\r\n*   iVariable (`number`)\r\n*   bVariable (`boolean`)\r\n*   aVariable (`array`)\r\n*   oVariable (`object`)\r\n*   fVariable (`function`)\r\n*   gVariable (`Google API Object`)\r\n*   $Variable (`jQuery Object`)\r\n*   mVariable (`mixed`)\r\n\r\n*   Les variables sont nommées en **camelCase**, les classes en **PascalCase**.\r\n*   Si on veut stocker des données dans le code HTML (avec parcimonie et sagesse), on utilise les attributs `data-`.\r\n*   Attention à ne pas laisser des appels à la `console` dans les fichiers en production.\r\n*   Les scripts doivent être validés par [JSHint](http://www.jshint.com/ "JSHint"){ target="_blank" } avant mise en production.\r\n',metaData:{title:"Conventions et normes de codage",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2014-08-01 22:47:55",tags:["html/css","javascript"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});
//# sourceMappingURL=37.ff03956ab612707d7cb5.js.map