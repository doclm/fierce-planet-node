(function(a,b,c,d,e,f){typeof one=="undefined"&&(one={include:function(){}});var g=[],h=/\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,i=/\s*(\.\d+|\d+(?:\.\d+)?)\s*/,j=new RegExp("^(rgb|hsl|hsv)a?\\("+h.source+","+h.source+","+h.source+"(?:,"+i.source+")?"+"\\)$","i"),k=one.color=function(a){if(Object.prototype.toString.apply(a)==="[object Array]")return a[0].length===4?new k.RGB(a[0]/255,a[1]/255,a[2]/255,a[3]/255):new k[a[0]](a.slice(1,a.length));if(a.charCodeAt){if(k.namedColors){var d=a.toLowerCase();k.namedColors[d]&&(a=k.namedColors[d])}var e=a.match(j);if(e){var f=e[1].toUpperCase(),g=typeof e[8]=="undefined"?e[8]:b(e[8]),h=f[0]==="H",i=e[3]?100:h?360:255,l=e[5]||h?100:255,m=e[7]||h?100:255;if(typeof k[f]=="undefined")throw new Error("one.color."+f+" is not installed.");return new k[f](b(e[2])/i,b(e[4])/l,b(e[6])/m,g)}a.length<6&&(a=a.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,"$1$1$2$2$3$3"));var n=a.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);if(n)return new k.RGB(c(n[1],16)/255,c(n[2],16)/255,c(n[3],16)/255)}else{if(typeof a=="object"&&a.isColor)return a;if(!isNaN(a))return new k.RGB((a&255)/255,((a&65280)>>8)/255,((a&16711680)>>16)/255)}return!1};k.installColorSpace=function(b,c,e){function j(b,c){var d={};d[c.toLowerCase()]=new a("return this.rgb()."+c.toLowerCase()+"();"),k[c].propertyNames.forEach(function(b,e){d[b]=new a("value","isDelta","return this."+c.toLowerCase()+"()."+b+"(value, isDelta);")});for(var e in d)d.hasOwnProperty(e)&&k[b].prototype[e]===undefined&&(k[b].prototype[e]=d[e])}k[b]=new a(c.join(","),"if (Object.prototype.toString.apply("+c[0]+") === '[object Array]') {"+c.map(function(a,b){return a+"="+c[0]+"["+b+"];"}).reverse().join("")+"}"+"if ("+c.filter(function(a){return a!=="alpha"}).map(function(a){return"isNaN("+a+")"}).join("||")+"){"+'throw new Error("[one.color.'+b+']: Invalid color: ("+'+c.join('+","+')+'+")");}'+c.map(function(a){return a==="hue"?"this._hue=hue<0?hue-Math.floor(hue):hue%1":a==="alpha"?"this._alpha=(isNaN(alpha)||alpha>1)?1:(alpha<0?0:alpha);":"this._"+a+"="+a+"<0?0:("+a+">1?1:"+a+")"}).join(";")+";"),k[b].propertyNames=c;var f=k[b].prototype;["valueOf","hex","css","cssa"].forEach(function(c){f[c]=f[c]||(b==="RGB"?f.hex:new a("return this.rgb()."+c+"();"))}),f.isColor=!0,f.equals=function(a,e){typeof e=="undefined"&&(e=1e-10),a=a[b.toLowerCase()]();for(var f=0;f<c.length;f+=1)if(d.abs(this["_"+c[f]]-a["_"+c[f]])>e)return!1;return!0},f.toJSON=new a("return ['"+b+"', "+c.map(function(a){return"this._"+a},this).join(", ")+"];");for(var h in e)if(e.hasOwnProperty(h)){var i=h.match(/^from(.*)$/);i?k[i[1].toUpperCase()].prototype[b.toLowerCase()]=e[h]:f[h]=e[h]}f[b.toLowerCase()]=function(){return this},f.toString=new a('return "[one.color.'+b+':"+'+c.map(function(a,b){return'" '+c[b]+'="+this._'+a}).join("+")+'+"]";'),c.forEach(function(b,d){f[b]=new a("value","isDelta","if (typeof value === 'undefined') {return this._"+b+";"+"}"+"if (isDelta) {"+"return new this.constructor("+c.map(function(a,c){return"this._"+a+(b===a?"+value":"")}).join(", ")+");"+"}"+"return new this.constructor("+c.map(function(a,c){return b===a?"value":"this._"+a}).join(", ")+");")}),g.forEach(function(a){j(b,a),j(a,b)}),g.push(b)},k.installMethod=function(a,b){g.forEach(function(c){k[c].prototype[a]=b})},k.installColorSpace("RGB",["red","green","blue","alpha"],{hex:function(){var a=(e(255*this._red)*65536+e(255*this._green)*256+e(255*this._blue)).toString(16);return"#"+"00000".substr(0,6-a.length)+a},css:function(){return"rgb("+e(255*this._red)+","+e(255*this._green)+","+e(255*this._blue)+")"},cssa:function(){return"rgba("+e(255*this._red)+","+e(255*this._green)+","+e(255*this._blue)+","+this._alpha+")"}}),k.installColorSpace("HSV",["hue","saturation","value","alpha"],{rgb:function(){var a=this._hue,b=this._saturation,c=this._value,e=f(5,d.floor(a*6)),g=a*6-e,h=c*(1-b),i=c*(1-g*b),j=c*(1-(1-g)*b),l,m,n;switch(e){case 0:l=c,m=j,n=h;break;case 1:l=i,m=c,n=h;break;case 2:l=h,m=c,n=j;break;case 3:l=h,m=i,n=c;break;case 4:l=j,m=h,n=c;break;case 5:l=c,m=h,n=i}return new k.RGB(l,m,n,this._alpha)},hsl:function(){var a=(2-this._saturation)*this._value,b=this._saturation*this._value,c=a<=1?a:2-a,d;return c<1e-9?d=0:d=b/c,new k.HSL(this._hue,d,a/2,this._alpha)},fromRgb:function(){var a=this._red,b=this._green,c=this._blue,e=d.max(a,b,c),g=f(a,b,c),h=e-g,i,j=e===0?0:h/e,l=e;if(h===0)i=0;else switch(e){case a:i=(b-c)/h/6+(b<c?1:0);break;case b:i=(c-a)/h/6+1/3;break;case c:i=(a-b)/h/6+2/3}return new k.HSV(i,j,l,this._alpha)}}),k.installColorSpace("HSL",["hue","saturation","lightness","alpha"],{hsv:function(){var a=this._lightness*2,b=this._saturation*(a<=1?a:2-a),c;return a+b<1e-9?c=0:c=2*b/(a+b),new k.HSV(this._hue,c,(a+b)/2,this._alpha)},rgb:function(){return this.hsv().rgb()},fromRgb:function(){return this.hsv().hsl()}}),typeof module!="undefined"&&(module.exports=k)})(Function,parseFloat,parseInt,Math,Math.round,Math.min)
