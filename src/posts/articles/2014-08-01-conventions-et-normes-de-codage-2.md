---
title: "Conventions et normes de codage"
date: "2014-08-01 22:47:55"
tags:
- html/css
- javascript
categories:
- Tutoriels
---

Je suis récemment tombé sur un joli traité des bonnes manières et autres politesses lorsqu'on est développeur, écrit par [Pierre-Antoine "Lisarael" Delnatte](http://leny.me "Pierre-Antoine Delnatte"){ target="_blank" } et que je vais repomper joyeusement ici (avec son aimable autorisation), parce que les conventions, c'est important.


## Principes généraux

*   Tous les fichiers sont encodés en UTF-8, sans BOM.
*   Indentation en tabulation. 1 niveau d’indentation = 1 tabulation.
*   Les commentaires sont importants, mais il faut commenter intelligemment : un commentaire inutile prend de la place pour rien.
*   On se décide pour une langue : on nomme toutes les variables / classes en **anglais** ou en **français** (et, si possible, mais facultativement, les commentaires aussi), et on s'y tient : on ne jongle pas d’une langue à l’autre.
*   Les _TODO_ sont conseillés, mais il faut les détailler : rien ne dit que c’est vous qui repasserez dessus.
*   Tout projet de code devrait être stocké sur un gestionnaire de version comme _Git_, via la plateforme [GitHub](http://github.com/){ target="_blank" }.
*   Corriger un fichier qui ne respecte pas les conventions n’est **jamais** une perte de temps.

### KISS: Keep it simple, stupid!

_La simplicité est la sophistication suprême_ : un code simple est plus lisible et plus facile à maintenir.

### DRY: Don’t repeat yourself

Si la même portion de code se retrouve deux fois ou plus dans un script, on en fait une fonction. Si la même portion de code se retrouve deux fois ou plus dans une classe, on en fait une méthode.

### YAGNI: You aren’t gonna need it

Rien ne sert de coder une méthode qui n’a pas d’implémentation ou d’utilité immédiate.

### Don’t be shy, ask!

Il n’y a pas de honte à demander de l’aide, surtout avant d’attaquer une nouvelle fonctionnalité.

Il ne devrait jamais y avoir une portion de code qui ne soit pas couverte par au moins deux personnes.

## HTML

*   Indentation stricte.
*   Respect de la syntaxe XML :

*   pas de balises d’ouverture sans balise de fermeture (par exemple `<br />` au lieu de `<br>`,
*   balises et attributs en minuscules,
*   les attributs booléens doivent avoir une valeur (par exemple `checked="checked"`).

*   Le contenu d’un élément block doit être à la ligne, celui d’un élément inline peut être au choix à la ligne ou non. (exception acceptable pour la balise `
`).
*   À l’exception notable d’_html5shiv_ pour IE, les balises `<script>` sont déclarées en fin de `<body>`.
*   Validez toujours votre code avec le [validateur w3c](http://validator.w3.org/ "Validator W3C"){ target="_blank" }.

## CSS et dérivés

*   Indentation stricte.
*   Préférer les propriétés raccourcies (`font`, `background`, `margin`…).
*   Quand on utilise des propriétés `-vendor-prefix`, on n’oublie pas de mettre la propriété finale de la spec à la fin. Et surtout, on vérifie si c'est nécessaire (voir l’article [Préfixes CSS : jusqu'à quand](http://www.emmanuelbeziat.com/blog/prefixes-css-jusqua-quand/ "Préfixes CSS, jusqu’à quand ?"){ target="_blank" }) !
*   Pas de hack, sauf si _vraiment_ pas le choix. Préférer les _commentaires conditionnels_ de HTML pour rajouter des feuilles de styles spécifiques ou des classes sur l’élément `<html>`.
*   En _Less_, _Sass_ ou _Stylus_ :

*   On utilise des variables explicites, et si elles sont globales, on les définit en tête de module ou dans un fichier séparé pour les _superglobales_.
*   Nommage des variables en **camelCase**.

## JavaScript et dérivés

*   JavaScript est un langage peu rigoureux, il faut l’être à sa place.
*   `"use strict"` est obligatoire.
*   Encapsulation de tout le code, aucune empreinte globale, et, si nécéssaire, créer un **namespace**.
*   Indentation stricte.
*   Chaînes de caractère en double quotes (`"string"`).
*   Ouverture de bloc sur la même ligne, fermeture sur une nouvelle ligne.
**Exemple :**

var test = function( param ) {
// some code
};

*   Toutes les variables d’un bloc sont déclarées au début de celui-ci.
*   Puisque JavaScript est un langage à _typage faible_, on ne _transtype_ pas une variable, et il est conseillé d’utiliser la **notation hongroise** pour les variables, en préfixant le nom d’une variable par son type :

*   sVariable (`string`)
*   iVariable (`number`)
*   bVariable (`boolean`)
*   aVariable (`array`)
*   oVariable (`object`)
*   fVariable (`function`)
*   gVariable (`Google API Object`)
*   $Variable (`jQuery Object`)
*   mVariable (`mixed`)

*   Les variables sont nommées en **camelCase**, les classes en **PascalCase**.
*   Si on veut stocker des données dans le code HTML (avec parcimonie et sagesse), on utilise les attributs `data-`.
*   Attention à ne pas laisser des appels à la `console` dans les fichiers en production.
*   Les scripts doivent être validés par [JSHint](http://www.jshint.com/ "JSHint"){ target="_blank" } avant mise en production.
