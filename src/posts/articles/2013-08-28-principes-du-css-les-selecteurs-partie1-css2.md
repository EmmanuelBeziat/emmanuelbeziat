---
title: "Principes du CSS - Les sélecteurs (Partie1 : CSS2)"
date: "2013-08-28 01:54:32"
tags:
- html/css
categories:
- Tutoriels
---

Lorsqu’on utilise du CSS, on peut se contenter des trois sélecteurs de base : les éléments, les identifiants et les classes. Souvent, sans le savoir, vous utilisez un sélecteur simple de descendance, par un espace entre deux de ces sélecteurs - hé oui ! Mais il existe d’autres sélecteurs plus avancés, nous allons les passer en revue.


Je ne traite ici que du CSS 2.1\. Le CSS3 apporte de nouveaux sélecteurs très intéressants et utiles, [qui sont listés dans cet article](http://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie-2-css3/).

## Préambule

Pour petit rappel :

```markup
<balise attribut="valeur">
```

Donc si vous êtes là, c’est que vous savez construire une feuille de style. Et vous travaillez comme ceci, grosso modo :
```css
#page {
	width: 800px;
	overflow: auto;
}

#page .bloc {
	width: 100px;
	display: inline-block;
}
```

c’est une bonne base de travail ; mais il existe une utilisation plus avancée des sélecteurs. Figurez-vous que ceci veut dire quelque chose en CSS :

```css
#page > div * div + div li:first-child a[href~="index.html"]  {
	color: #ccc;
}
```

Certes, c’est un tantinet plus long et complexe qu’écrire simplement la classe d’un élément.

Il est important de noter que la séparation du contenu et de la mise en forme est au coeur même de l’utilisation du CSS et des principes sémantiques que le W3C met en place depuis des anneés. Par là même, l’idéal pour cette sémantique serait d’avoir un code html vide d’éléments de mise en forme - d’ailleurs, le W3C recommande l’absence de tout attribut `style` dans les balises html et préconise l’utilisation de classes et d’identifiants à la place.

Mais on peut minimiser au maximum l’utilisation de ces classes et de ces ID grâce à l’utilisation des sélecteurs. Dans l’exemple ci-dessus, j’ai volontairement exagéré la complexité, mais on peut faire beaucoup de choses avec simplicité - parfois même plus qu’avec des classes.

De plus, ça peut se révéler très utile dans certains cas. Songez à ceci :

*   Vous n’aurez peut-être pas toujours accès au html et donc pas la possibilité de le modifier.
*   Vous pouvez, grâce à ça, proposer un changement de design très facile, qui ne nécessite que peu de remaniement html sur votre site.
*   Cela sert également à appliquer un style à des éléments très nombreux sans avoir besoin de toucher au html.

## Les sélecteurs de descendance

### Sélecteur de descendance

```css
.rouge span { color: red }
```

Vous utilisez déjà très probablement ce sélecteur, sans même le savoir. En effet, mettre un élément à la suite d’un autre crée automatiquement un principe de descendance. Dans le cas présent, la `div` portant la classe `rouge` devient parente de l’élément `span` qui lui, devient enfant.

Dans cet exemple, toutes les balises `span` contenues dans la `div` seront affectés, et ce peu importe s’il y a d’autres balises entre eux ; sauf si un parent plus "proche" lui donne une information contradictoire, comme une autre couleur : c’est le principe d’héritage.

```markup
<div class="rouge">
	<div class="bleu">
		<span id="monID">Ce texte sera affecté</span>
	</div>
	<span>Ce texte sera affecté</span>
</div>

<span>Ce texte ne sera pas affecté</span>
```

Dans le cas présent, le `span` portant l’id "monID" est enfant de la `div` "bleu", puis de la `div` "rouge". Voyons un petit schéma simple histoire de bien comprendre ce principe :

<div class="showcode">

*   Mes enfants seront rouges

*   Mon parent m’a dit d’être rouge
*   Mon parent m’a dit d’être rouge

*   Le parent de mon parent m’a dit d’être rouge
*   Le parent de mon parent m’a dit d’être rouge
*   Mon parent m’a dit d’être rouge, mais mes enfants seront verts !

*   Mon parent m’a dit d’être vert
*   Mon parent m’a dit d’être vert
*   Mon parent m’a dit d’être rouge
*   Mes enfants seront bleus

*   Mon parent m’a dit d’être bleu
</div>

### Selecteur d’enfant direct : ">"

```css
.rouge > span { color: red }
```

Sur le même principe de lien enfant/parent, ce sélecteur (qui ne porte pas de nom particulier au demeurant, mais que j’appelle "sélecteur d’enfant direct" pour être plus clair) sert à agir uniquement sur les enfants directs d’un élément, à l’inverse du sélecteur simple qui agit de manière récursive (c’est-à-dire sur toute sa descendance, y compris les descendants de ses descendants).

```markup
<div class="rouge">
	<div class="bleu">
		<span>Ce texte ne sera pas affecté</span>
	</div>

	<span>Ce texte sera affecté</span>
</div>

<span>Ce texte ne sera pas affecté</span>
```
<div class="showcode">
*   Mes enfants directs seront rouges

*   <span style="color:red">Mon parent m’a dit d’être rouge</span>
*   <span style="color:red">Mon parent m’a dit d’être rouge</span>

*   On ne m’a rien dit
*   On ne m’a rien dit
*   Mon parent m’a dit d’être rouge
</div>

### Selecteur d’enfant indirect : "*"

```css
.rouge * span { color: red }
```

À l’inverse du sélecteur d’enfant direct, ce sélecteur agit de manière inverse et affecte tous ses descendants sauf ses enfants directs.

```markup
<div class="rouge">
	<div class="bleu">
		<span>Ce texte sera affecté</span>
	</div>
	<span>Ce texte ne sera pas affecté</span>
</div>
<span>Ce texte ne sera pas affecté</span>
```
<div class="showcode">

*   Mes enfants descendants seront rouges

*   On ne m’a rien dit
*   On ne m’a rien dit

*   Mon grand-parent m’a dit d’être rouge
*   Mon grand-parent m’a dit d’être rouge
*   Mon grand-parent m’a dit d’être rouge

*   Mon grand-parent m’a dit d’être rouge
*   Mon grand-parent m’a dit d’être rouge
*   On ne m’a rien dit
</div>

### Selecteur d’adjacence directe : "+"

```css
.rouge span + span { color: red }
```

Un sélecteur un peu plus complexe cette fois-ci, mais très utile. Celui-ci sert à définir un lien d’adjacence entre deux balises ayant un parent direct commun. Les éléments adjacents au dernier cité ne seront pas affectés.

```markup
<div class="rouge">
	<div class="bleu">
		<span>Ce texte ne sera pas affecté</span>
		<span>Ce texte sera affecté</span>
	</div>
	<span>Ce texte ne sera pas affecté</span>
	<span>Ce texte sera affecté</span>
</div>
<span>Ce texte ne sera pas affecté</span>
```
<div class="showcode">

*   Je n’ai rien dit à personne

*   Mes frères seront rouges !
*   Mon frère m’a dit d’être rouge
*   Mon frère m’a dit d’être rouge</div>

On peut bien sûr utiliser ce sélecteur plusieurs fois. Par exemple, si on voulait affecter les éléments d’une liste seulement à partir du quatrième élément :

```css
li+li+li+li { color: red }
```
<div class="showcode">
1.  Élément de liste
2.  Élément de liste
3.  Élément de liste
4.  Élément de liste
5.  Élément de liste
6.  Élément de liste
7.  Élément de liste
8.  Élément de liste
9.  Élément de liste
</div>

c’est un sélecteur dont je me sers régulièrement pour, entre autres, définir des marges automatiques entre deux éléments de même nature, comme des blocs d’un élément de menu.

```css
#sidebar div+div { margin-top: 15px }
```

## Les sélecteurs d’attributs

On peut également attribuer des propriétés à un (ou plusieurs) élément(s) html précis en fonction des attributs qu’ils portent. Ainsi on peut, encore une fois, se passer facilement d’ajouts de classes dans le html en se reposant sur ce qui existe déjà. Il suffit d’accoler le nom de l’attribut en question entre crochets [] à l’élément en question. On ne se soucie pas de la valeur de cet attribut.

```css
a[title] { color: red }
```

```markup
<a href="#">Ce lien ne sera pas affecté</a>
<a href="#" title="">Ce lien sera affecté</a>
<a href="#" title="Venez sur mon site !">Ce lien sera affecté</a>
```

```css
a[target] { color: red }
```

```markup
<a href="#">Ce lien ne sera pas affecté</a>
<a href="#" title="">Ce lien ne sera pas affecté</a>
<a href="#" title="" target="">Ce lien sera affecté</a>
```

Mais on peut également aller plus loin et cibler un élément dont l’attribut prend une valeur précise. c’est très utile pour les éléments d’un formulaire, qui sont définis, avec la même balise, par la valeur de leur type :

```css
input[type="password"] { color: red }
```

```markup
<input type="text" />
<input type="password" /> <!-- Cet élément sera affecté -->
<input type="submit" />
```

Vous pouvez également définir le fait qu’un attribut doit contenir au moins une des valeurs énoncées.

```css
a[rel~="copyright"] { color: red }
```

```markup
<a href="#" rel="">Ce lien ne sera pas affecté</a>
<a href="#" rel="copyright">Ce lien sera affecté</a>
<a href="#" rel="copyright copyleft">Ce lien sera affecté</a>
```

Sachez enfin qu’on peut combiner ces sélecteurs à volonté :

```css
a[rel][target=_blank][title] { color: red }
```

## Les pseudo-classes

Les pseudo-classes désignent des éléments que l’on n’aurait pas pu cibler sans ajouter une classe particulière.

### :first-child

Très pratique dans certains cas, cette pseudo-classe cible un élément s’il est le premier enfant de son parent. Il faut donc bien faire attention, car il s’agit bien du premier enfant, et non du premier enfant d’un tel type. Par exemple :

```css
div p:first-child { color: red }
```

```markup
<div>
	<p>Cet élément sera affecté</p>
	<p>Cet élément ne sera pas affecté</p>
	<p>Cet élément ne sera pas affecté</p>
</div>
```

Si on voit maintenant, pour le même code CSS, ce code HTML :

```markup
<div>
	<h2>Ce titre ne sera pas affecté</h2>
	<p>Cet élément ne sera pas affecté</p>
	<p>Cet élément ne sera pas affecté</p>
	<p>Cet élément ne sera pas affecté</p>
</div>
```

Rien ne va se passer. En effet, le code CSS signifie "cibler tous les éléments `p` s’il s’agit du premier enfant de leur parent" et non "cibler tous les éléments `p` qui sont les premiers de ces éléments de type `p` enfants". Or dans ce cas, c’est `h2` qui est le premier enfant.

### :active

Cette pseudo-classe est de moins en moins utilisée. Elle est héritée de la première version du CSS et servait à cibler un lien "actif" (donc un lien au moment où il était cliqué). On peut maintenant l’utiliser sur n’importe quel élément, mais c’est assez peu usité.

```css
a:active { color: white }
```

### :link

Cette pseudo-classe est de moins en moins utilisée. Elle sert à cibler un lien qui n’a pas encore été visité par le visiteur actuel.

```css
a:link { color: white }
```

### :visited

Cette pseudo-classe est de moins en moins utilisée. À l’inverse du précédent, elle sert à cibler un lien qui a déjà été visité par le visiteur actuel.

```css
a:visited { color: violet }
```

### :focus

Cette pseudo-classe permet de cibler un élément qui a actuellement le "focus". Par exemple, lorsque vous cliquez dans un champ de texte, celui-ci prend automatiquement cette valeur dynamique de focus. c’est aussi le cas des liens, lorsqu’on navigue avec la touche "tab".

```css
input:focus { background: green }
```

### :hover

Cette pseudo-classe est très utilisée. Elle déclenche un ensemble de propriétés au survol d’un élément par la souris. c’est par exemple très utilisé pour les menus, qui vont se dérouler ou changer de couleur au survol. On peut l’appliquer à tout élément html.

```css
div:hover { background: white }
```

Il est aussi possible de cibler des éléments au survol de leur parent. Dans le cas suivant, ce sont tous les liens contenus dans un élément de liste, au survol de la div qui les contient (et non au survol du lien) :

```css
div:hover li a { background: white }
```

## Les pseudo-éléments

Les pseudo-éléments s’utilisent de la même manière que les pseudo-classes ; cette appellation désigne simplement des éléments que l’on n’aurait pas pu identifier sans ajouter un autre élément (comme span ou div, par exemple).

### :first-letter

On peut se servir de `:first-letter` pour créer des lettrines. c’est d’ailleurs sa principale utilité. Dans l’exemple suivant, tous les éléments `p` verront leur première lettre affichée en rouge.

```p:first-letter { color: red }
```

### :first-line

Peu utilisé, ce pseudo-élément va agir sur la première ligne de texte d’un élément.

```p:first-line { color: red }
```

### :after et :before

Voici deux pseudo-éléments complémentaires très utiles. Ils s’utilisent avec la propriété `content` et servent à rajouter un élément avant (pour `:before`) ou après (pour `:after`) un autre élément.

```span:before{ content: "→ " }
```

Ainsi pour ce code :

```markup
<span>Test</span>
```

On obtiendra ce résultat :

<div class="showcode">→ Test</div>
```css
a:after{ content: " >>" }
```

```markup
<a href="#">Lien</a>
<a href="#">Lien >></a>
```

## Le sélecteur universel : " * "

Ce sélecteur, à ne pas confondre avec le sélecteur d’enfant indirect que nous avons vu plus haut, cible tous les éléments.

```css
* { color: red }
```

Ce sélecteur est donc très "lourd" (tout est relatif) à utiliser et vous ne devriez l’employer qu’avec une extrême parcimonie, voire jamais ! {.c-note .c-note--important}

N’hésitez pas si vous avez des questions, le formulaire de commentaires est là !
