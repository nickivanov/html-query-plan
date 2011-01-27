﻿// TODO: Proper use of namespaces

/* Draws the lines linking nodes in query plan diagram
canjas - The canvas jQuery object on which to draw lines
root - The document jQuery object in which the diagram is contained */
function qp_drawLines(canvas, root) {
    // TODO: A better workaround than this
    window.setTimeout(function () {
        var canvasElm = canvas[0];
        canvasElm.width = root.outerWidth(true);
        canvasElm.height = root.outerHeight(true);

        var context = canvasElm.getContext("2d");

        $(".qp-node", root).each(function () {
            var from = $(this);
            // TODO: This is horrible and needs fixing pronto!
            $("> ul > li > div > div", $(this).parent().parent()).each(function () {
                qp_line(context, from, $(this));
            });
        });

        context.stroke();
    }, 10);
}

/* Draws a line between two nodes 
context - The canvas context with which to draw
from - The document jQuery object from which to draw the line 
to - The document jQuery object to which to draw the line */
function qp_line(context, from, to) {
    fromOffset = from.offset();
    fromOffset.top += from.height() / 2;
    fromOffset.left += from.width();

    toOffset = to.offset();
    toOffset.top += to.height() / 2;

    var midOffsetLeft = fromOffset.left / 2 + toOffset.left / 2;

    context.moveTo(fromOffset.left, fromOffset.top);
    context.lineTo(midOffsetLeft , fromOffset.top);
    context.lineTo(midOffsetLeft, toOffset.top);
    context.lineTo(toOffset.left, toOffset.top);
}
