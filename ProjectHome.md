This is a utility for transforming XML query execution plans into HTML via XSLT.

The stylesheet is completely XSLT 1.0 compatible, and with the exception of the lines (which are drawn using HTML 5 canvas) the output is all HTML + CSS.

I've tested the output in the following browsers:
  * Chrome (9.0.597.84)
  * Firefox (3.6.3)
  * Opera (11.01)
  * IE (8.0.7600.16385)

Note that it won't work in IE 7 or earlier due to lack CSS "display: table" support, also in IE 8 you won't see any lines due to the lack of canvas support.

Assistance is welcome, in particular:

  * Providing test query execution plans that cover all of the [operator types](http://msdn.microsoft.com/en-us/library/ms175913.aspx)
  * Feedback! :-)

**Screenshot:**

![http://html-query-plan.googlecode.com/hg/screenshot.png](http://html-query-plan.googlecode.com/hg/screenshot.png)

The icons used are adapted from the Fat Cow "Farm Fresh" web icons pack, which can be found at (http://www.fatcow.com/free-icons).  (Unfortunately some of the adapting was done by myself and I'm no artist - I apologise unreservedly for mangling someone elses masterpiece)