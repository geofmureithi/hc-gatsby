---
title: Creating a simple beautiful Tab design that requires no Javascript
date: "2015-08-12"
path: "/2015/08/12/html-css-creating-a-simple-beautiful-tab-design-that-requires-no-javascript/"
image: "./img/tabs-in-pure-css-no-js.jpg"
description: "We want to create Css3 based Tabs. These tabs will include an Icon and is responsive.  
First we need to lay the basis of a tab:"
---

Html & Css : Creating a simple beautiful Tab design that requires no Javascript
===============================================================================

We want to create Css3 based Tabs. These tabs will include an Icon and is responsive.  
First we need to lay the basis of a tab:

Create Option Buttons


```html
<input class="tabular" id="tab1" type="radio" name="tabs" checked>
 <label for="tab1">Paypal</label>
 <input id="tab2" class="tabular" name="tabs" type="radio" />
 <label for="tab2">American Express</label>
 <input id="tab3" class="tabular" name="tabs" type="radio" />
 <label for="tab3">Visa</label>
 <input id="tab4" class="tabular" name="tabs" type="radio" />
 <label for="tab4">MasterCard</label>
```

Next, We lay the foundation of Tab Content:

```html
<section id="content1">
 <p>
 <!-- Content Goes Here-->
 </p>
</section>
<section id="content2">
 <p>
 <!-- Content Goes Here-->
 </p>
</section>
<section id="content3">
 <p>
 <!-- Content Goes Here-->
 </p>
</section>
<section id="content4">
 <p>
 <!-- Content Goes Here-->
 </p>
</section>
```
Having defined that, Now lets gets some css running:

First we import Google fonts and Font Awesome

Import Requirements


```css
@import url('http://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css');

```

Next we define our main components:

```css
section {
 display: none;
 padding: 20px 0 0;
 border-top: 1px solid #ddd;
}
input.tabular {
 display: none;
}
```

Lets style our labels

```css
label {
 display: inline-block;
 margin: 0 0 -1px;
 padding: 15px 25px;
 font-weight: 700;
 text-align: center;
 color: #fff;
 border: 1px solid transparent;
}
label:before {
 font-family: fontawesome;
 font-weight: normal;
 margin-right: 10px;
}
label[for*='1']:before { content: '\f1f4'; }
label[for*='2']:before { content: '\f1f3'; }
label[for*='3']:before { content: '\f1f0'; }
label[for*='4']:before { content: '\f1f1'; }
```

Next lets style our hovered states

Hover and Checked states

```css
label:hover {
 color: #888;
 cursor: pointer;
}
input.tabular:checked + label {
 color: #555;
 border: 1px solid #ddd;
 border-top: 2px solid orange;
 border-bottom: 1px solid #fff;
}
#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4 {
 display: block;
}

```

Finally Lets play around with media queries:

```css
@media screen and (max-width: 650px) {
 label {
 font-size: 0;
 }
 label:before {
 margin: 0;
 font-size: 18px;
 }
}
@media screen and (max-width: 400px) {
 label {
 padding: 15px;
 }
}
```
You can play around with the tabs here: [https://jsfiddle.net/d8v2qLLa/](https://jsfiddle.net/d8v2qLLa/)
