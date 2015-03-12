## Using html-query-plan in a web page ##

In order to embed a html query plan into a web page you must:

  1. Link to qp.css
  1. Include jQuery.js and qp.js
  1. Place the output of the qp.xslt stylesheet inside some div on your page
  1. Call QP.drawLines

Steps 2. and 4. are kind of optional in that if you skip them you won't see any lines (but you won't see lines anyway in browsers that are not compatible with that html 5 canvas element).

When calling QP.drawLines you can optionally pass the containing div as an argument in order to draw lines for only that query plan.  You should also make sure that this function is called after the page has fully rendered and the containing div is visible, for example:

```
    $(document).ready( function() {
        QP.drawLines(&("#qpDiv"));
    });
```

Normally the document ready event is suitable, however if the containing div is not visible by default then you will need to make sure that you call this function when the div is made visible.  (No harm is done by calling when the div is not visible, it simply won't draw the lines correctly).

For a complete basic example take a look at qp\_page.xslt.