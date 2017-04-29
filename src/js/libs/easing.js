var Easing = {};

// Easing.easeIn = function (t, b, c, d) {
//  t /= d;
//  return c*t*t + b;
// }
// Easing.easeOut = function (t, b, c, d) {
//  t /= d/2.0;
//  if (t < 1) return c/2.0*t*t + b;
//  t = t - 1;
//  return -c/2.0*(t*(t-2) - 1) + b;
// }
// Easing.easeInOut = function (t, b, c, d) {
//  t /= d/2.0;
//  if (t < 1) return c/2.0*t*t*t + b;
//  t = t - 1;
//  return -c/2.0*(t*(t-2) - 1) + b;
// }
Easing.easeInQuad = function (t, b, c, d) {
    return c*(t/=d)*t + b;
}
Easing.easeOutQuad = function (t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
}
Easing.easeInOutQuad = function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
}
Easing.easeInCubic = function (t, b, c, d) {
    return c*(t/=d)*t*t + b;
}
Easing.easeOutCubic = function (t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
}
Easing.easeInOutCubic = function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
}
Easing.easeInQuart = function (t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
}
Easing.easeOutQuart = function (t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
}
Easing.easeInOutQuart = function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
}
Easing.easeInQuint = function (t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
}
Easing.easeOutQuint = function (t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
}
Easing.easeInOutQuint = function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
}
Easing.easeInSine = function (t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
}
Easing.easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
}
Easing.easeInOutSine = function (t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
}
Easing.easeInExpo = function (t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
}
Easing.easeOutExpo = function (t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
}
Easing.easeInOutExpo = function (t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
Easing.easeInCirc = function (t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
}
Easing.easeOutCirc = function (t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
}
Easing.easeInOutCirc = function (t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
}
Easing.easeInElastic = function (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
}
Easing.easeOutElastic = function (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
}
Easing.easeInOutElastic = function (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
}
Easing.easeInBack = function (t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
}
Easing.easeOutBack = function (t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}
Easing.easeInOutBack = function (t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
}
Easing.easeInBounce = function (t, b, c, d) {
    return c - this.easeOutBounce (d-t, 0, c, d) + b;
}
Easing.easeOutBounce = function (t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
        return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
}
Easing.easeInOutBounce = function (t, b, c, d) {
    if (t < d/2) return this.easeInBounce (t*2, 0, c, d) * .5 + b;
    return this.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
}

module.exports = Easing;