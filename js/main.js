//Material HTML5 Template (https://naveenshaji.github.io/material)
//The MIT License (MIT)
//
//Copyright (c) 2015 Naveen Shaji
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.

function calcScrollr() {

    var _diff = 8;
    var _leftdiff = 0.45;
    var _startscrollat = $('#about').height()+200;
    var _margin = 100;
    var _visibleatstart = false;
    var _hideatend = false;
    var $_e = $(".scroll-1");
    console.log(' total $_e'+$_e.length);
    console.log('_startscrollat='+_startscrollat);
    
    if ($_e.hasClass("blog")) {
        _diff = 10;
        _startscrollat = 0;
        _visibleatstart = true;
        _hideatend = false;
    }

    var cardht = 0;
    var totalht = _margin;
    var count = 0;
    var totalcount = 0;
    var dataval;


    console.log('_visibleatstart='+_visibleatstart);
    console.log('_hideatend='+_hideatend);


    $_e.each(function () {

        if (!_visibleatstart) {
            $_e.eq(totalcount).attr("data-" + (_startscrollat - 40), "opacity: 1");
            $_e.eq(totalcount).attr("data-" + (_startscrollat - 140), "opacity: 0");
            $_e.eq(totalcount).attr("data-" + (_startscrollat - 150), "display: block");
            $_e.eq(totalcount).attr("data-1", "opacity: 0");
            $_e.eq(totalcount).attr("data-0", "display: none");
            //console.log('Setting Data property for the skorllr data-' + (_startscrollat - 40));
        }


        totalcount++;

    });
    console.log(' totalcount of elements = ' +totalcount);
    $_e.each(function () {
        if ((count + 1) % 2 == 0) {
            $_e.eq(count).find(".card").addClass("darken-1");
        }
        dataval = _startscrollat;
        console.log('dataval= _startscrollat'+ dataval);
        var i = _margin;
        cardht = $(this).height();
        var temp = totalht;
        $_e.eq(count).attr("style", "top:" + ((temp + count * _diff)) + "px");
        $_e.eq(count).attr("style", "left:" + (20 - (totalcount * _leftdiff / 2) + (count * _leftdiff)) + "%");
        for (var j = 0; temp - _margin + count * _diff >= 0; j++) {
            $_e.eq(count).attr("data-" + dataval, "top:" + (temp + count * _diff) + "px");
            dataval = dataval + cardht;
            temp = temp - cardht;
        }
        
        totalht += cardht;
        i += cardht;
        
        if (_hideatend) {
            var endpos = _startscrollat + (totalcount * $_e.eq(0).height());
            $_e.eq(count).attr("data-" + (endpos - 129), "display: block");
            $_e.eq(count).attr("data-" + (endpos - 128), "opacity: 1");
            $_e.eq(count).attr("data-" + (endpos - 11), "display: none");
            $_e.eq(count).attr("data-" + (endpos - 22), "opacity: 0");
        }
        
        count++;
        
    });

}

var s;

//preloader hide on load
$(window).load(function () {
  calcScrollr();
    s = skrollr.init();

});
