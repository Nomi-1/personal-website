---
title: "sass"
date: "11.01.2021"
---

## Topics Coverd

1. SASS & CSS
2. Advantages & creation of variables
3. Nesting
4. Mixins
5. Operators & Flow Control
5. Result 


### SASS & CSS
Cascading Style Sheets (CSS) is one of the most important languages in web development. It defines the style of a website. However, the writing of CSS is laborious and for more complex work, the sheets become quite large. SASS is a CSS extension that makes writing and maintenance much easier. But it also has important features like variables, nesting, mixins and inheritance. After learning how to use it, writing CSS becomes noticeably quick and tidy.

### Advantages & creation of variables
Variables have super many advantages. Of course, creating the variables is quite a lot of work at first, but later you only have advantages. If you create variables for the colours or website sizes, revising them later becomes much easier and faster. Assuming the colours of the website are to be changed, the HEX code only needs to be changed in one place. I collect my general variables in my boilerplate.

<br />

Code example:

<div class="column-blog">
<div class="inner">

#### SASS


```
$color-primary: #7c92a6;
$fz-h2: 2rem;

h2{
    color: $color-primary;
    font-size: $fz-h2;
}


```
</div>
<div class="inner"> 

#### CSS
<br />
<br />

```
h2{
    color: #7c92a6;
    font-size: 2rem;
}

```

</div>
</div>

### Nesting
As you know, CSS has no nesting options. Visually, the code has no hierarchies. This makes the code very confusing and large. SASS offers the possibility to create hierarchies. This is a good way to write and maintain a clear code.

<br />

Code example:

<div class="column-blog">
<div class="inner">

#### SASS


```
ol {
    padding-left: 1rem;
    margin: 1rem 0;
    &,
    * {
      font-family: $font-default;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 1px;
      line-height: 1.5rem;
    }
}

```
</div>
<div class="inner"> 

#### CSS

```
ol {
    padding-left: 1rem;
    margin: 1rem 0;
    font-family: $font-default;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.5rem;
}

ol li{
    font-family: $font-default;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.5rem;
}

```

</div>
</div>

### Mixins
In a mixin you can bundle different CSS commands and bring them in whenever you need them. This way you can avoid repeating the same code.

<br />

As an example, I use mixins in my project for the "columns". I can import the mixin with the command @include columns and don't have to use the whole CSS again and again.

<br />

In the preset development mixins are indispensable. Because every preset has its own mixin, which is imported when using. My example will be relatively simple, but the bigger the preset, the more complex the mixin will be. Depending on the preset settings of course.

<br />
Code example:

<div class="column-blog">
<div class="inner">

#### SASS


```
@mixin darkstyle {
  background: black;
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
  }
}

.column{
    @include darkstyle;
}


```
</div>
<div class="inner"> 

#### CSS
```
.column {
  background: black;
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
  }
}

```

</div>
</div>

### Flow Control
SASS supports Flow Control (if/else ...). As soon as you build a variable based SASS, which is a bit more complex, you need these possibilities. Especially for projects that offer many parameter settings.

<br />
Code example:

<div class="column-blog">
<div class="inner">

#### SASS


```
@if type-of($background) == color {
    background: $background;
}
@else{
    background: none;
}


```
</div>
</div>

### Results
Although SASS sometimes has its limitations, I wouldn't want to miss this way of writing CSS. This extended CSS language offers a lot of possibilities to bring your CSS to the next level. Especially for large, complex projects or CMS system SASS makes sense. SASS offers us web developers a lot of great possibilities, which I like to use every day. I also like to fall back on.

<br />

The SASS website offers a really great overview of the possibilities and implementations.

<br />

If you want to build more complex mixins or functions, I can recommend the Sass Meister. This is the SASS-Playground, which is also used by me the one or other time.