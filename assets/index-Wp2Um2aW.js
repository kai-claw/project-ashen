(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const oc="182",Uu=0,Yc=1,Fu=2,Hr=1,yh=2,Us=3,Jn=0,qe=1,de=2,Dn=0,es=1,wn=2,Kc=3,$c=4,Ou=5,Mi=100,Bu=101,ku=102,zu=103,Gu=104,Vu=200,Hu=201,Wu=202,Xu=203,ro=204,ao=205,qu=206,Yu=207,Ku=208,$u=209,ju=210,Ju=211,Zu=212,Qu=213,td=214,oo=0,co=1,lo=2,rs=3,ho=4,uo=5,fo=6,po=7,Mh=0,ed=1,nd=2,Ln=0,Sh=1,bh=2,Th=3,cc=4,Eh=5,Ah=6,wh=7,jc="attached",id="detached",Ch=300,Ei=301,as=302,mo=303,go=304,la=306,ln=1e3,Pn=1001,Jr=1002,Ie=1003,Rh=1004,Fs=1005,De=1006,Wr=1007,Yn=1008,en=1009,Ph=1010,Ih=1011,Xs=1012,lc=1013,Nn=1014,hn=1015,nn=1016,hc=1017,uc=1018,qs=1020,Dh=35902,Lh=35899,Nh=1021,Uh=1022,un=1023,Zn=1026,bi=1027,dc=1028,fc=1029,os=1030,pc=1031,mc=1033,Xr=33776,qr=33777,Yr=33778,Kr=33779,_o=35840,xo=35841,vo=35842,yo=35843,Mo=36196,So=37492,bo=37496,To=37488,Eo=37489,Ao=37490,wo=37491,Co=37808,Ro=37809,Po=37810,Io=37811,Do=37812,Lo=37813,No=37814,Uo=37815,Fo=37816,Oo=37817,Bo=37818,ko=37819,zo=37820,Go=37821,Vo=36492,Ho=36494,Wo=36495,Xo=36283,qo=36284,Yo=36285,Ko=36286,Fh=2200,Oh=2201,sd=2202,Ys=2300,Ks=2301,_a=2302,Zi=2400,Qi=2401,Zr=2402,gc=2500,rd=2501,ad=0,Bh=1,$o=2,od=3200,kh=0,cd=1,ai="",Ee="srgb",Ge="srgb-linear",Qr="linear",ae="srgb",Ii=7680,Jc=519,ld=512,hd=513,ud=514,_c=515,dd=516,fd=517,xc=518,pd=519,jo=35044,Zc="300 es",In=2e3,ta=2001;function zh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function md(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function $s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gd(){const r=$s("canvas");return r.style.display="block",r}const Qc={};function ea(...r){const t="THREE."+r.shift();console.log(t,...r)}function wt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Dt(...r){const t="THREE."+r.shift();console.error(t,...r)}function js(...r){const t=r.join(" ");t in Qc||(Qc[t]=!0,wt(...r))}function _d(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tl=1234567;const ks=Math.PI/180,cs=180/Math.PI;function fn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[r&255]+ke[r>>8&255]+ke[r>>16&255]+ke[r>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function qt(r,t,e){return Math.max(t,Math.min(e,r))}function vc(r,t){return(r%t+t)%t}function xd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function vd(r,t,e){return r!==t?(e-r)/(t-r):0}function zs(r,t,e){return(1-e)*r+e*t}function yd(r,t,e,n){return zs(r,t,1-Math.exp(-e*n))}function Md(r,t=1){return t-Math.abs(vc(r,t*2)-t)}function Sd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function bd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Td(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ed(r,t){return r+Math.random()*(t-r)}function Ad(r){return r*(.5-Math.random())}function wd(r){r!==void 0&&(tl=r);let t=tl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cd(r){return r*ks}function Rd(r){return r*cs}function Pd(r){return(r&r-1)===0&&r!==0}function Id(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Dd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ld(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ci={DEG2RAD:ks,RAD2DEG:cs,generateUUID:fn,clamp:qt,euclideanModulo:vc,mapLinear:xd,inverseLerp:vd,lerp:zs,damp:yd,pingpong:Md,smoothstep:Sd,smootherstep:bd,randInt:Td,randFloat:Ed,randFloatSpread:Ad,seededRandom:wd,degToRad:Cd,radToDeg:Rd,isPowerOfTwo:Pd,ceilPowerOfTwo:Id,floorPowerOfTwo:Dd,setQuaternionFromProperEuler:Ld,normalize:oe,denormalize:vn};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);p=Math.sin(p*x)/y,o=Math.sin(o*x)/y,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+_*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+_*o;const x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(el.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(el.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new E,el=new yn;class Vt{constructor(t,e,n,i,s,a,o,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],y=i[4],S=i[7],A=i[2],w=i[5],R=i[8];return s[0]=a*_+o*x+c*A,s[3]=a*m+o*y+c*w,s[6]=a*p+o*S+c*R,s[1]=l*_+h*x+u*A,s[4]=l*m+h*y+u*w,s[7]=l*p+h*S+u*R,s[2]=d*_+f*x+g*A,s[5]=d*m+f*y+g*w,s[8]=d*p+f*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Vt,nl=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nd(){const r={enabled:!0,workingColorSpace:Ge,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ae&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?Qr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ge]:{primaries:t,whitePoint:n,transfer:Qr,toXYZ:nl,fromXYZ:il,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:nl,fromXYZ:il,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),r}const Jt=Nd();function jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Di;class Ud{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Di===void 0&&(Di=$s("canvas")),Di.width=t.width,Di.height=t.height;const i=Di.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=jn(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fd=0;class yc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=fn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ya(i[a].image)):s.push(ya(i[a]))}else s=ya(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ya(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ud.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let Od=0;const Ma=new E;class Le extends Ci{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Pn,i=Pn,s=De,a=Yn,o=un,c=en,l=Le.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=fn(),this.name="",this.source=new yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){wt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ln:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ln:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Ch;Le.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,S=(f+1)/2,A=(p+1)/2,w=(h+d)/4,R=(u+_)/4,D=(g+m)/4;return y>S&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=R/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=D/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=R/s,i=D/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bd extends Ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new Le(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new yc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $e extends Bd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gh extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kd extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),dr.subVectors(this.max,Ss),Li.subVectors(t.a,Ss),Ni.subVectors(t.b,Ss),Ui.subVectors(t.c,Ss),Qn.subVectors(Ni,Li),ti.subVectors(Ui,Ni),di.subVectors(Li,Ui);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-di.z,di.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,di.z,0,-di.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-di.y,di.x,0];return!Sa(e,Li,Ni,Ui,dr)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,Li,Ni,Ui,dr))?!1:(fr.crossVectors(Qn,ti),e=[fr.x,fr.y,fr.z],Sa(e,Li,Ni,Ui,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gn=[new E,new E,new E,new E,new E,new E,new E,new E],mn=new E,ur=new pn,Li=new E,Ni=new E,Ui=new E,Qn=new E,ti=new E,di=new E,Ss=new E,dr=new E,fr=new E,fi=new E;function Sa(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){fi.fromArray(r,s);const o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),c=t.dot(fi),l=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const zd=new pn,bs=new E,ba=new E;class Fn{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(ba)),this.expandByPoint(bs.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Vn=new E,Ta=new E,pr=new E,ei=new E,Ea=new E,mr=new E,Aa=new E;class ha{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ta.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Ta);const s=t.distanceTo(e)*.5,a=-this.direction.dot(pr),o=ei.dot(this.direction),c=-ei.dot(pr),l=ei.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ta).addScaledVector(pr,d),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,s){Ea.subVectors(e,t),mr.subVectors(n,t),Aa.crossVectors(Ea,mr);let a=this.direction.dot(Aa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,t);const c=o*this.direction.dot(mr.crossVectors(ei,mr));if(c<0)return null;const l=o*this.direction.dot(Ea.cross(ei));if(l<0||c+l>a)return null;const h=-o*ei.dot(Aa);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(t,e,n,i,s,a,o,c,l,h,u,d,f,g,_,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,u,d,f,g,_,m)}set(t,e,n,i,s,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Fi.setFromMatrixColumn(t,0).length(),s=1/Fi.setFromMatrixColumn(t,1).length(),a=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gd,t,Vd)}lookAt(t,e,n){const i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ni.crossVectors(n,Ze),ni.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ni.crossVectors(n,Ze)),ni.normalize(),gr.crossVectors(Ze,ni),i[0]=ni.x,i[4]=gr.x,i[8]=Ze.x,i[1]=ni.y,i[5]=gr.y,i[9]=Ze.y,i[2]=ni.z,i[6]=gr.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],S=n[11],A=n[15],w=i[0],R=i[4],D=i[8],M=i[12],b=i[1],P=i[5],F=i[9],B=i[13],W=i[2],X=i[6],V=i[10],k=i[14],j=i[3],dt=i[7],at=i[11],pt=i[15];return s[0]=a*w+o*b+c*W+l*j,s[4]=a*R+o*P+c*X+l*dt,s[8]=a*D+o*F+c*V+l*at,s[12]=a*M+o*B+c*k+l*pt,s[1]=h*w+u*b+d*W+f*j,s[5]=h*R+u*P+d*X+f*dt,s[9]=h*D+u*F+d*V+f*at,s[13]=h*M+u*B+d*k+f*pt,s[2]=g*w+_*b+m*W+p*j,s[6]=g*R+_*P+m*X+p*dt,s[10]=g*D+_*F+m*V+p*at,s[14]=g*M+_*B+m*k+p*pt,s[3]=x*w+y*b+S*W+A*j,s[7]=x*R+y*P+S*X+A*dt,s[11]=x*D+y*F+S*V+A*at,s[15]=x*M+y*B+S*k+A*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],x=c*f-l*d,y=o*f-l*u,S=o*d-c*u,A=a*f-l*h,w=a*d-c*h,R=a*u-o*h;return e*(_*x-m*y+p*S)-n*(g*x-m*A+p*w)+i*(g*y-_*A+p*R)-s*(g*S-_*w+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,S=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,A=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,w=e*x+n*y+i*S+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=x*R,t[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*R,t[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*p+n*c*p)*R,t[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*f-n*c*f)*R,t[4]=y*R,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*p+e*d*p)*R,t[6]=(g*c*s-a*m*s-g*i*l+e*m*l+a*i*p-e*c*p)*R,t[7]=(a*d*s-h*c*s+h*i*l-e*d*l-a*i*f+e*c*f)*R,t[8]=S*R,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(a*_*s-g*o*s+g*n*l-e*_*l-a*n*p+e*o*p)*R,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*f-e*o*f)*R,t[12]=A*R,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*R,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,x=c*l,y=c*h,S=c*u,A=n.x,w=n.y,R=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+S)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(d+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+y)*R,i[9]=(m-x)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Fi.set(i[0],i[1],i[2]).length();const a=Fi.set(i[4],i[5],i[6]).length(),o=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),gn.copy(this);const l=1/s,h=1/a,u=1/o;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=In,c=!1){const l=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===In)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ta)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=In,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===In)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ta)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new E,gn=new zt,Gd=new E(0,0,0),Vd=new E(1,1,1),ni=new E,gr=new E,Ze=new E,sl=new zt,rl=new yn;class Un{constructor(t=0,e=0,n=0,i=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Vh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hd=0;const al=new E,Oi=new yn,Hn=new zt,_r=new E,Ts=new E,Wd=new E,Xd=new yn,ol=new E(1,0,0),cl=new E(0,1,0),ll=new E(0,0,1),hl={type:"added"},qd={type:"removed"},Bi={type:"childadded",child:null},wa={type:"childremoved",child:null};class xe extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new E,e=new Un,n=new yn,i=new E(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new Vt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(ol,t)}rotateY(t){return this.rotateOnAxis(cl,t)}rotateZ(t){return this.rotateOnAxis(ll,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ol,t)}translateY(t){return this.translateOnAxis(cl,t)}translateZ(t){return this.translateOnAxis(ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ts,_r,this.up):Hn.lookAt(_r,Ts,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new E(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new E,Wn=new E,Ca=new E,Xn=new E,ki=new E,zi=new E,ul=new E,Ra=new E,Pa=new E,Ia=new E,Da=new _e,La=new _e,Na=new _e;class cn{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){_n.subVectors(i,e),Wn.subVectors(n,e),Ca.subVectors(t,e);const a=_n.dot(_n),o=_n.dot(Wn),c=_n.dot(Ca),l=Wn.dot(Wn),h=Wn.dot(Ca),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xn.x),c.addScaledVector(a,Xn.y),c.addScaledVector(o,Xn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return Da.setScalar(0),La.setScalar(0),Na.setScalar(0),Da.fromBufferAttribute(t,e),La.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Da,s.x),a.addScaledVector(La,s.y),a.addScaledVector(Na,s.z),a}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),Wn.subVectors(t,e),_n.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),_n.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ki.subVectors(i,n),zi.subVectors(s,n),Ra.subVectors(t,n);const c=ki.dot(Ra),l=zi.dot(Ra);if(c<=0&&l<=0)return e.copy(n);Pa.subVectors(t,i);const h=ki.dot(Pa),u=zi.dot(Pa);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ki,a);Ia.subVectors(t,s);const f=ki.dot(Ia),g=zi.dot(Ia);if(g>=0&&f<=g)return e.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(zi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ul.subVectors(s,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(ul,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ki,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ua(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=vc(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ua(a,s,t+1/3),this.g=Ua(a,s,t),this.b=Ua(a,s,t-1/3)}return Jt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ee){function n(s){s!==void 0&&parseFloat(s)<1&&wt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:wt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=Hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Jt.workingToColorSpace(ze.copy(this),t),Math.round(qt(ze.r*255,0,255))*65536+Math.round(qt(ze.g*255,0,255))*256+Math.round(qt(ze.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(ze.copy(this),e);const n=ze.r,i=ze.g,s=ze.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ee){Jt.workingToColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,i=ze.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(xr);const n=zs(ii.h,xr.h,e),i=zs(ii.s,xr.s,e),s=zs(ii.l,xr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Rt;Rt.NAMES=Hh;let Yd=0;class Mn extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=es,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=ao,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){wt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==ao&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ee extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new E,vr=new nt;let Kd=0;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jo&&(t.usage=this.usage),t}}class Wh extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xh extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $d=0;const rn=new zt,Fa=new xe,Gi=new E,Qe=new pn,Es=new pn,Fe=new E;class ve extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zh(t)?Xh:Wh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(Qe.min,Es.min),Qe.expandByPoint(Fe),Fe.addVectors(Qe.max,Es.max),Qe.expandByPoint(Fe)):(Qe.expandByPoint(Es.min),Qe.expandByPoint(Es.max))}Qe.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Fe.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(t,l),Fe.add(Gi)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new E,c[D]=new E;const l=new E,h=new E,u=new E,d=new nt,f=new nt,g=new nt,_=new E,m=new E;function p(D,M,b){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,D),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[D].add(_),o[M].add(_),o[b].add(_),c[D].add(m),c[M].add(m),c[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let D=0,M=x.length;D<M;++D){const b=x[D],P=b.start,F=b.count;for(let B=P,W=P+F;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new E,S=new E,A=new E,w=new E;function R(D){A.fromBufferAttribute(i,D),w.copy(A);const M=o[D];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),S.crossVectors(w,M);const P=S.dot(c[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,M=x.length;D<M;++D){const b=x[D],P=b.start,F=b.count;for(let B=P,W=P+F;B<W;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,s=new E,a=new E,o=new E,c=new E,l=new E,h=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Pe(d,h,u)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new zt,pi=new ha,yr=new Fn,fl=new E,Mr=new E,Sr=new E,br=new E,Oa=new E,Tr=new E,pl=new E,Er=new E;class J extends xe{constructor(t=new ve,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Tr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(Oa.fromBufferAttribute(u,t),a?Tr.addScaledVector(Oa,h):Tr.addScaledVector(Oa.sub(e),h))}e.add(Tr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),pi.copy(t.ray).recast(t.near),!(yr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(yr,fl)===null||pi.origin.distanceToSquared(fl)>(t.far-t.near)**2))&&(dl.copy(s).invert(),pi.copy(t.ray).applyMatrix4(dl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,A=y;S<A;S+=3){const w=o.getX(S),R=o.getX(S+1),D=o.getX(S+2);i=Ar(this,p,t,n,l,h,u,w,R,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);i=Ar(this,a,t,n,l,h,u,x,y,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,A=y;S<A;S+=3){const w=S,R=S+1,D=S+2;i=Ar(this,p,t,n,l,h,u,w,R,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,S=m+2;i=Ar(this,a,t,n,l,h,u,x,y,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function jd(r,t,e,n,i,s,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===Jn,o),c===null)return null;Er.copy(o),Er.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Er);return l<e.near||l>e.far?null:{distance:l,point:Er.clone(),object:r}}function Ar(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,Mr),r.getVertexPosition(c,Sr),r.getVertexPosition(l,br);const h=jd(r,t,e,n,Mr,Sr,br,pl);if(h){const u=new E;cn.getBarycoord(pl,Mr,Sr,br,u),i&&(h.uv=cn.getInterpolatedAttribute(i,o,c,l,u,new nt)),s&&(h.uv1=cn.getInterpolatedAttribute(s,o,c,l,u,new nt)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new E,materialIndex:0};cn.getNormal(Mr,Sr,br,d.normal),h.face=d,h.barycoord=u}return h}class ye extends ve{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(_,m,p,x,y,S,A,w,R,D,M){const b=S/R,P=A/D,F=S/2,B=A/2,W=w/2,X=R+1,V=D+1;let k=0,j=0;const dt=new E;for(let at=0;at<V;at++){const pt=at*P-B;for(let Gt=0;Gt<X;Gt++){const Bt=Gt*b-F;dt[_]=Bt*x,dt[m]=pt*y,dt[p]=W,l.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[p]=w>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Gt/R),u.push(1-at/D),k+=1}}for(let at=0;at<D;at++)for(let pt=0;pt<R;pt++){const Gt=d+pt+X*at,Bt=d+pt+X*(at+1),ge=d+(pt+1)+X*(at+1),le=d+(pt+1)+X*at;c.push(Gt,Bt,le),c.push(Bt,ge,le),j+=6}o.addGroup(f,j,M),f+=j,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function We(r){const t={};for(let e=0;e<r.length;e++){const n=ls(r[e]);for(const i in n)t[i]=n[i]}return t}function Jd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function qh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const na={clone:ls,merge:We};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Be extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yh extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new E,ml=new nt,gl=new nt;class Xe extends Yh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,ml,gl),e.subVectors(gl,ml)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Hi=1;class tf extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(Vi,Hi,t,e);i.layers=this.layers,this.add(i);const s=new Xe(Vi,Hi,t,e);s.layers=this.layers,this.add(s);const a=new Xe(Vi,Hi,t,e);a.layers=this.layers,this.add(a);const o=new Xe(Vi,Hi,t,e);o.layers=this.layers,this.add(o);const c=new Xe(Vi,Hi,t,e);c.layers=this.layers,this.add(c);const l=new Xe(Vi,Hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kh extends Le{constructor(t=[],e=Ei,n,i,s,a,o,c,l,h){super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $h extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Kh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ye(5,5,5),s=new Be({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Dn});s.uniforms.tEquirect.value=e;const a=new J(i,s),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=De),new tf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class Re extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ef={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ef)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Mc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new Mc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nf extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jo,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new E;class hs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jh extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const As=new E,Xi=new E,qi=new E,Yi=new nt,ws=new nt,Jh=new zt,wr=new E,Cs=new E,Cr=new E,_l=new nt,ka=new nt,xl=new nt;class sf extends xe{constructor(t=new jh){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sc(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new hs(n,3,0,!1)),Wi.setAttribute("uv",new hs(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Jh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Rr(wr.set(-.5,-.5,0),qi,a,Xi,i,s),Rr(Cs.set(.5,-.5,0),qi,a,Xi,i,s),Rr(Cr.set(.5,.5,0),qi,a,Xi,i,s),_l.set(0,0),ka.set(1,0),xl.set(1,1);let o=t.ray.intersectTriangle(wr,Cs,Cr,!1,As);if(o===null&&(Rr(Cs.set(-.5,.5,0),qi,a,Xi,i,s),ka.set(0,1),o=t.ray.intersectTriangle(wr,Cr,Cs,!1,As),o===null))return;const c=t.ray.origin.distanceTo(As);c<t.near||c>t.far||e.push({distance:c,point:As.clone(),uv:cn.getInterpolation(As,wr,Cs,Cr,_l,ka,xl,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Rr(r,t,e,n,i,s){Yi.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(ws.x=s*Yi.x-i*Yi.y,ws.y=i*Yi.x+s*Yi.y):ws.copy(Yi),r.copy(t),r.x+=ws.x,r.y+=ws.y,r.applyMatrix4(Jh)}const vl=new E,yl=new _e,Ml=new _e,rf=new E,Sl=new zt,Pr=new E,za=new Fn,bl=new zt,Ga=new ha;class af extends J{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jc,this.bindMatrix=new zt,this.bindMatrixInverse=new zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Pr),this.boundingBox.expandByPoint(Pr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Pr),this.boundingSphere.expandByPoint(Pr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(i),t.ray.intersectsSphere(za)!==!1&&(bl.copy(i).invert(),Ga.copy(t.ray).applyMatrix4(bl),!(this.boundingBox!==null&&Ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ga)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new _e,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===jc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===id?this.bindMatrixInverse.copy(this.bindMatrix).invert():wt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;yl.fromBufferAttribute(i.attributes.skinIndex,t),Ml.fromBufferAttribute(i.attributes.skinWeight,t),vl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Ml.getComponent(s);if(a!==0){const o=yl.getComponent(s);Sl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(rf.copy(vl).applyMatrix4(Sl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Zh extends xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bc extends Le{constructor(t=null,e=1,n=1,i,s,a,o,c,l=Ie,h=Ie,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tl=new zt,of=new zt;class Tc{constructor(t=[],e=[]){this.uuid=fn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){wt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:of;Tl.multiplyMatrices(o,e[s]),Tl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Tc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new bc(e,t,t,un,hn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let a=e[s];a===void 0&&(wt("Skeleton: No bone found with UUID:",s),a=new Zh),this.bones.push(a),this.boneInverses.push(new zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Jo extends Pe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ki=new zt,El=new zt,Ir=[],Al=new pn,cf=new zt,Rs=new J,Ps=new Fn;class lf extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Al.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Al)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Ps.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ki),El.multiplyMatrices(n,Ki),Rs.matrixWorld=El,Rs.raycast(t,Ir);for(let a=0,o=Ir.length;a<o;a++){const c=Ir[a];c.instanceId=s,c.object=this,e.push(c)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bc(new Float32Array(i*this.count),i,this.count,dc,hn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Va=new E,hf=new E,uf=new Vt;class yi{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Va.subVectors(n,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Va),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uf.getNormalMatrix(t),i=this.coplanarPoint(Va).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Fn,df=new nt(.5,.5),Dr=new E;class Ec{constructor(t=new yi,e=new yi,n=new yi,i=new yi,s=new yi,a=new yi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],x=s[12],y=s[13],S=s[14],A=s[15];if(i[0].setComponents(l-a,f-h,p-g,A-x).normalize(),i[1].setComponents(l+a,f+h,p+g,A+x).normalize(),i[2].setComponents(l+o,f+u,p+_,A+y).normalize(),i[3].setComponents(l-o,f-u,p-_,A-y).normalize(),n)i[4].setComponents(c,d,m,S).normalize(),i[5].setComponents(l-c,f-d,p-m,A-S).normalize();else if(i[4].setComponents(l-c,f-d,p-m,A-S).normalize(),e===In)i[5].setComponents(l+c,f+d,p+m,A+S).normalize();else if(e===ta)i[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=df.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Dr.x=i.normal.x>0?t.max.x:t.min.x,Dr.y=i.normal.y>0?t.max.y:t.min.y,Dr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qh extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ia=new E,sa=new E,wl=new zt,Is=new ha,Lr=new Fn,Ha=new E,Cl=new E;class Ac extends xe{constructor(t=new ve,e=new Qh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ia.fromBufferAttribute(e,i-1),sa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ia.distanceTo(sa);t.setAttribute("lineDistance",new $t(n,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(i),Lr.radius+=s,t.ray.intersectsSphere(Lr)===!1)return;wl.copy(i).invert(),Is.copy(t.ray).applyMatrix4(wl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),x=h.getX(_+1),y=Nr(this,t,Is,c,p,x,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Nr(this,t,Is,c,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Nr(this,t,Is,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Nr(this,t,Is,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Nr(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(ia.fromBufferAttribute(o,i),sa.fromBufferAttribute(o,s),e.distanceSqToSegment(ia,sa,Ha,Cl)>n)return;Ha.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ha);if(!(l<t.near||l>t.far))return{distance:l,point:Cl.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Rl=new E,Pl=new E;class ff extends Ac{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Rl.fromBufferAttribute(e,i),Pl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rl.distanceTo(Pl);t.setAttribute("lineDistance",new $t(n,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pf extends Ac{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class wc extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Il=new zt,Zo=new ha,Ur=new Fn,Fr=new E;class tu extends xe{constructor(t=new ve,e=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=s,t.ray.intersectsSphere(Ur)===!1)return;Il.copy(i).invert(),Zo.copy(t.ray).applyMatrix4(Il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Fr.fromBufferAttribute(u,m),Dl(Fr,m,c,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Fr.fromBufferAttribute(u,g),Dl(Fr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Dl(r,t,e,n,i,s,a){const o=Zo.distanceSqToPoint(r);if(o<e){const c=new E;Zo.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Qo extends Le{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Le{constructor(t,e,n=Nn,i,s,a,o=Ie,c=Ie,l,h=Zn,u=1){if(h!==Zn&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class mf extends Js{constructor(t,e=Nn,n=Ei,i,s,a=Ie,o=Ie,c,l=Zn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class eu extends Le{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Rn extends ve{constructor(t=1,e=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=n*2+s,_=i+1,m=new E,p=new E;for(let x=0;x<=g;x++){let y=0,S=0,A=0,w=0;if(x<=n){const M=x/n,b=M*Math.PI/2;S=-h-t*Math.cos(b),A=t*Math.sin(b),w=-t*Math.cos(b),y=M*u}else if(x<=n+s){const M=(x-n)/s;S=-h+M*e,A=t,w=0,y=u+M*d}else{const M=(x-n-s)/n,b=M*Math.PI/2;S=h+t*Math.sin(b),A=t*Math.cos(b),w=t*Math.sin(b),y=u+d+M*u}const R=Math.max(0,Math.min(1,y/f));let D=0;x===0?D=.5/i:x===g&&(D=-.5/i);for(let M=0;M<=i;M++){const b=M/i,P=b*Math.PI*2,F=Math.sin(P),B=Math.cos(P);p.x=-A*B,p.y=S,p.z=A*F,o.push(p.x,p.y,p.z),m.set(-A*B,w,A*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(b+D,R)}if(x>0){const M=(x-1)*_;for(let b=0;b<i;b++){const P=M+b,F=M+b+1,B=x*_+b,W=x*_+b+1;a.push(P,F,B),a.push(F,W,B)}}}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class is extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new E,h=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class on extends ve{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(f,2));function x(){const S=new E,A=new E;let w=0;const R=(e-t)/n;for(let D=0;D<=s;D++){const M=[],b=D/s,P=b*(e-t)+t;for(let F=0;F<=i;F++){const B=F/i,W=B*c+o,X=Math.sin(W),V=Math.cos(W);A.x=P*X,A.y=-b*n+m,A.z=P*V,u.push(A.x,A.y,A.z),S.set(X,R,V).normalize(),d.push(S.x,S.y,S.z),f.push(B,1-b),M.push(g++)}_.push(M)}for(let D=0;D<i;D++)for(let M=0;M<s;M++){const b=_[M][D],P=_[M+1][D],F=_[M+1][D+1],B=_[M][D+1];(t>0||M!==0)&&(h.push(b,P,B),w+=3),(e>0||M!==s-1)&&(h.push(P,F,B),w+=3)}l.addGroup(p,w,0),p+=w}function y(S){const A=g,w=new nt,R=new E;let D=0;const M=S===!0?t:e,b=S===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const W=F/i*c+o,X=Math.cos(W),V=Math.sin(W);R.x=M*V,R.y=m*b,R.z=M*X,u.push(R.x,R.y,R.z),d.push(0,b,0),w.x=X*.5+.5,w.y=V*.5*b+.5,f.push(w.x,w.y),g++}for(let F=0;F<i;F++){const B=A+F,W=P+F;S===!0?h.push(W,W+1,B):h.push(W+1,W,B),D+=3}l.addGroup(p,D,S===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ti extends on{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ti(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new E,S=new E,A=new E;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],S),f(e[w+2],A),c(y,S,A,x)}function c(x,y,S,A){const w=A+1,R=[];for(let D=0;D<=w;D++){R[D]=[];const M=x.clone().lerp(S,D/w),b=y.clone().lerp(S,D/w),P=w-D;for(let F=0;F<=P;F++)F===0&&D===w?R[D][F]=M:R[D][F]=M.clone().lerp(b,F/P)}for(let D=0;D<w;D++)for(let M=0;M<2*(w-D)-1;M++){const b=Math.floor(M/2);M%2===0?(d(R[D][b+1]),d(R[D+1][b]),d(R[D][b])):(d(R[D][b+1]),d(R[D+1][b+1]),d(R[D+1][b]))}}function l(x){const y=new E;for(let S=0;S<s.length;S+=3)y.x=s[S+0],y.y=s[S+1],y.z=s[S+2],y.normalize().multiplyScalar(x),s[S+0]=y.x,s[S+1]=y.y,s[S+2]=y.z}function h(){const x=new E;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const S=m(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;a.push(S,1-A)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const y=a[x+0],S=a[x+2],A=a[x+4],w=Math.max(y,S,A),R=Math.min(y,S,A);w>.9&&R<.1&&(y<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,y){const S=x*3;y.x=t[S+0],y.y=t[S+1],y.z=t[S+2]}function g(){const x=new E,y=new E,S=new E,A=new E,w=new nt,R=new nt,D=new nt;for(let M=0,b=0;M<s.length;M+=9,b+=6){x.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),w.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),D.set(a[b+4],a[b+5]),A.copy(x).add(y).add(S).divideScalar(3);const P=m(A);_(w,b+0,x,P),_(R,b+2,y,P),_(D,b+4,S,P)}}function _(x,y,S,A){A<0&&x.x===1&&(a[y]=x.x-1),S.x===0&&S.z===0&&(a[y]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.vertices,t.indices,t.radius,t.detail)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=e||(a.isVector2?new nt:new E);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new E,i=[],s=[],a=[],o=new E,c=new zt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new E)}s[0]=new E,a[0]=new E;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(qt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(qt(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cc extends On{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new nt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gf extends Cc{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Rc(){let r=0,t=0,e=0,n=0;function i(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Or=new E,Wa=new Rc,Xa=new Rc,qa=new Rc;class _f extends On{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Or.subVectors(i[0],i[1]).add(i[0]),l=Or);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Or.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Wa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Xa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),qa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Xa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),qa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Wa.calc(c),Xa.calc(c),qa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ll(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,c=r*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*r+e}function xf(r,t){const e=1-r;return e*e*t}function vf(r,t){return 2*(1-r)*r*t}function yf(r,t){return r*r*t}function Gs(r,t,e,n){return xf(r,t)+vf(r,e)+yf(r,n)}function Mf(r,t){const e=1-r;return e*e*e*t}function Sf(r,t){const e=1-r;return 3*e*e*r*t}function bf(r,t){return 3*(1-r)*r*r*t}function Tf(r,t){return r*r*r*t}function Vs(r,t,e,n,i){return Mf(r,t)+Sf(r,e)+bf(r,n)+Tf(r,i)}class nu extends On{constructor(t=new nt,e=new nt,n=new nt,i=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Vs(t,i.x,s.x,a.x,o.x),Vs(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ef extends On{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Vs(t,i.x,s.x,a.x,o.x),Vs(t,i.y,s.y,a.y,o.y),Vs(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class iu extends On{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends On{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class su extends On{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Gs(t,i.x,s.x,a.x),Gs(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends On{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Gs(t,i.x,s.x,a.x),Gs(t,i.y,s.y,a.y),Gs(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ru extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Ll(o,c.x,l.x,h.x,u.x),Ll(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new nt().fromArray(i))}return this}}var Nl=Object.freeze({__proto__:null,ArcCurve:gf,CatmullRomCurve3:_f,CubicBezierCurve:nu,CubicBezierCurve3:Ef,EllipseCurve:Cc,LineCurve:iu,LineCurve3:Af,QuadraticBezierCurve:su,QuadraticBezierCurve3:wf,SplineCurve:ru});class Cf extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Nl[i.type]().fromJSON(i))}return this}}class Ul extends Cf{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new iu(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new su(this.currentPoint.clone(),new nt(t,e),new nt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new nu(this.currentPoint.clone(),new nt(t,e),new nt(n,i),new nt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ru(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,a,o,c),this}absellipse(t,e,n,i,s,a,o,c){const l=new Cc(t,e,n,i,s,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class au extends Ul{constructor(t){super(t),this.uuid=fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ul().fromJSON(i))}return this}}function Rf(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=ou(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=Nf(r,t,s,e)),r.length>80*e){o=r[0],c=r[1];let h=o,u=c;for(let d=e;d<i;d+=e){const f=r[d],g=r[d+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Zs(s,a,e,o,c,l,0),a}function ou(r,t,e,n,i){let s;if(i===Xf(r,t,e,n)>0)for(let a=t;a<e;a+=n)s=Fl(a/n|0,r[a],r[a+1],s);else for(let a=e-n;a>=t;a-=n)s=Fl(a/n|0,r[a],r[a+1],s);return s&&us(s,s.next)&&(tr(s),s=s.next),s}function Ai(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(us(e,e.next)||Me(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zs(r,t,e,n,i,s,a){if(!r)return;!a&&s&&kf(r,n,i,s);let o=r;for(;r.prev!==r.next;){const c=r.prev,l=r.next;if(s?If(r,n,i,s):Pf(r)){t.push(c.i,r.i,l.i),tr(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=Df(Ai(r),t),Zs(r,t,e,n,i,s,2)):a===2&&Lf(r,t,e,n,i,s):Zs(Ai(r),t,e,n,i,s,1);break}}}function Pf(r){const t=r.prev,e=r,n=r.next;if(Me(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(i,s,a),u=Math.min(o,c,l),d=Math.max(i,s,a),f=Math.max(o,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Os(i,o,s,c,a,l,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function If(r,t,e,n){const i=r.prev,s=r,a=r.next;if(Me(i,s,a)>=0)return!1;const o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,d=a.y,f=Math.min(o,c,l),g=Math.min(h,u,d),_=Math.max(o,c,l),m=Math.max(h,u,d),p=tc(f,g,t,e,n),x=tc(_,m,t,e,n);let y=r.prevZ,S=r.nextZ;for(;y&&y.z>=p&&S&&S.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&Os(o,h,c,u,l,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==a&&Os(o,h,c,u,l,d,S.x,S.y)&&Me(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&Os(o,h,c,u,l,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=x;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==a&&Os(o,h,c,u,l,d,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Df(r,t){let e=r;do{const n=e.prev,i=e.next.next;!us(n,i)&&lu(n,e,e.next,i)&&Qs(n,i)&&Qs(i,n)&&(t.push(n.i,e.i,i.i),tr(e),tr(e.next),e=r=i),e=e.next}while(e!==r);return Ai(e)}function Lf(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vf(a,o)){let c=hu(a,o);a=Ai(a,a.next),c=Ai(c,c.next),Zs(a,t,e,n,i,s,0),Zs(c,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Nf(r,t,e,n){const i=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,c=s<a-1?t[s+1]*n:r.length,l=ou(r,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Gf(l))}i.sort(Uf);for(let s=0;s<i.length;s++)e=Ff(i[s],e);return e}function Uf(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Ff(r,t){const e=Of(r,t);if(!e)return t;const n=hu(e,r);return Ai(n,n.next),Ai(e,e.next)}function Of(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,a;if(us(r,e))return e;do{if(us(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&cu(i<l?n:s,i,c,l,i<l?s:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Qs(e,r)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Bf(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Bf(r,t){return Me(r.prev,r,t.prev)<0&&Me(t.next,r,r.next)<0}function kf(r,t,e,n){let i=r;do i.z===0&&(i.z=tc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,zf(i)}function zf(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,e*=2}while(t>1);return r}function tc(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Gf(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function cu(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function Os(r,t,e,n,i,s,a,o){return!(r===a&&t===o)&&cu(r,t,e,n,i,s,a,o)}function Vf(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Hf(r,t)&&(Qs(r,t)&&Qs(t,r)&&Wf(r,t)&&(Me(r.prev,r,t.prev)||Me(r,t.prev,t))||us(r,t)&&Me(r.prev,r,r.next)>0&&Me(t.prev,t,t.next)>0)}function Me(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function us(r,t){return r.x===t.x&&r.y===t.y}function lu(r,t,e,n){const i=kr(Me(r,t,e)),s=kr(Me(r,t,n)),a=kr(Me(e,n,r)),o=kr(Me(e,n,t));return!!(i!==s&&a!==o||i===0&&Br(r,e,t)||s===0&&Br(r,n,t)||a===0&&Br(e,r,n)||o===0&&Br(e,t,n))}function Br(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function kr(r){return r>0?1:r<0?-1:0}function Hf(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&lu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Qs(r,t){return Me(r.prev,r,r.next)<0?Me(r,t,r.next)>=0&&Me(r,r.prev,t)>=0:Me(r,t,r.prev)<0||Me(r,r.next,t)<0}function Wf(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function hu(r,t){const e=ec(r.i,r.x,r.y),n=ec(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Fl(r,t,e,n){const i=ec(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function tr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ec(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xf(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class qf{static triangulate(t,e,n=2){return Rf(t,e,n)}}class Hs{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Hs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Ol(t),Bl(n,t);let a=t.length;e.forEach(Ol);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Bl(n,e[c]);const o=qf.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Ol(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Bl(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Pc extends ua{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pc(t.radius,t.detail)}}class dn extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let y=0;y<l;y++){const S=y*u-s;g.push(S,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const y=x+l*p,S=x+l*(p+1),A=x+1+l*(p+1),w=x+1+l*p;f.push(y,S,w),f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}class wi extends ve{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new E,g=new nt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,S=x+n+1,A=x+n+2,w=x+1;o.push(y,S,w),o.push(S,A,w)}}this.setIndex(o),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ic extends ve{constructor(t=new au([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new $t(i,3)),this.setAttribute("normal",new $t(s,3)),this.setAttribute("uv",new $t(a,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Hs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];Hs.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=Hs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],y=x[0]+u,S=x[1]+u,A=x[2]+u;n.push(y,S,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Yf(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const a=e[t.shapes[i]];n.push(a)}return new Ic(n,t.curveSegments)}}function Yf(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Te extends ve{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){const w=A/e;u.x=-t*Math.cos(i+w*s)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+w*s)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+S,1-y),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],S=h[p][x],A=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(y,S,w),(p!==n-1||c<Math.PI)&&f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dc extends ua{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dc(t.radius,t.detail)}}class ds extends ve{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;a.push(_,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Kf extends Be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ft extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bn extends Ft{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $f extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jf extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function zr(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Jf(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function kl(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let c=0;c!==t;++c)i[a++]=r[o+c]}return i}function uu(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}class sr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zf extends sr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zi,endingEnd:Zi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,a=t+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qi:s=t,o=2*e-n;break;case Zr:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qi:a=t,c=2*n-e;break;case Zr:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let A=0;A!==o;++A)s[A]=p*a[h+A]+x*a[l+A]+y*a[c+A]+S*a[u+A];return s}}class du extends sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}}class Qf extends sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Sn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ys:e=this.InterpolantFactoryMethodDiscrete;break;case Ks:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Dt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Dt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&md(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Dt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_a,s=t.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Ks;class xs extends Sn{constructor(t,e,n){super(t,e,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Ys;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class fu extends Sn{constructor(t,e,n,i){super(t,e,n,i)}}fu.prototype.ValueTypeName="color";class fs extends Sn{constructor(t,e,n,i){super(t,e,n,i)}}fs.prototype.ValueTypeName="number";class tp extends sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let h=l+o;l!==h;l+=4)yn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class ps extends Sn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new tp(this.times,this.values,this.getValueSize(),t)}}ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends Sn{constructor(t,e,n){super(t,e,n)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Ys;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends Sn{constructor(t,e,n,i){super(t,e,n,i)}}ms.prototype.ValueTypeName="vector";class nc{constructor(t="",e=-1,n=[],i=gc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(np(n[a]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,a=n.length;s!==a;++s)e.push(Sn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=Jf(c);c=kl(c,1,h),l=kl(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new fs(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(wt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Dt("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];uu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new fs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+e[u].name+"]";n(ms,f+".position",d,"pos",i),n(ps,f+".quaternion",d,"rot",i),n(ms,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function ep(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return fu;case"quaternion":return ps;case"bool":case"boolean":return xs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function np(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ep(r.type);if(r.times===void 0){const e=[],n=[];uu(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Kn={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ip{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sp=new ip;class Ri{constructor(t){this.manager=t!==void 0?t:sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class rp extends Error{constructor(t,e){super(t),this.response=e}}class ra extends Ri{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Kn.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:i});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&wt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=qn[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:S})=>{if(y)p.close();else{_+=S.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,R=h.length;w<R;w++){const D=h[w];D.onProgress&&D.onProgress(A)}p.enqueue(S),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new rp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Kn.add(`file:${t}`,l);const h=qn[t];delete qn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=qn[t];if(h===void 0)throw this.manager.itemError(t),l;delete qn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const $i=new WeakMap;class ap extends Ri{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Kn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=$i.get(a);u===void 0&&(u=[],$i.set(a,u)),u.push({onLoad:e,onError:i})}return a}const o=$s("img");function c(){h(),e&&e(this);const u=$i.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}$i.delete(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),Kn.remove(`image:${t}`);const d=$i.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}$i.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kn.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class pu extends Ri{constructor(t){super(t)}load(t,e,n,i){const s=new Le,a=new ap(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class rr extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class op extends rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ya=new zt,zl=new E,Gl=new E;class Lc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(zl),Gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gl),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cp extends Lc{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=cs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class lp extends rr{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new cp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class hp extends Lc{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0}}class An extends rr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ar extends Yh{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class up extends Lc{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ji extends rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new up}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class dp extends rr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ws{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Ka=new WeakMap;class fp extends Ri{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&wt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&wt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Kn.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(l=>{if(Ka.has(a)===!0)i&&i(Ka.get(a)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(l),s.manager.itemEnd(t),l});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Kn.add(`image-bitmap:${t}`,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Ka.set(c,l),Kn.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});Kn.add(`image-bitmap:${t}`,c),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class pp extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class mu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class mp{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,a;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,a=i;s!==a;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){yn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const a=this._workIndex*s;yn.multiplyQuaternionsFlat(t,a,t,e,t,n),yn.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=e+o;t[c]=t[c]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Nc="\\[\\]\\.:\\/",gp=new RegExp("["+Nc+"]","g"),Uc="[^"+Nc+"]",_p="[^"+Nc.replace("\\.","")+"]",xp=/((?:WC+[\/:])*)/.source.replace("WC",Uc),vp=/(WCOD+)?/.source.replace("WCOD",_p),yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),Mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),Sp=new RegExp("^"+xp+vp+yp+Mp+"$"),bp=["material","materials","bones","map"];class Tp{constructor(t,e,n){const i=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ie{constructor(t,e,n){this.path=e,this.parsedPath=n||ie.parseTrackName(e),this.node=ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ie.Composite(t,e,n):new ie(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gp,"")}static parseTrackName(t){const e=Sp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);bp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ie.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ie.Composite=Tp;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ep{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,a=s.length,o=new Array(a),c={endingStart:Zi,endingEnd:Zi};for(let l=0;l!==a;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Oh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,s=t._clip.duration,a=s/i,o=i/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case rd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case gc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const a=n===sd;if(t===0)return s===-1?i:a&&(s&1)===1?e-i:i;if(n===Fh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Qi,i.endingEnd=Qi):(t?i.endingStart=this.zeroSlopeAtStart?Qi:Zi:i.endingStart=Zr,e?i.endingEnd=this.zeroSlopeAtEnd?Qi:Zi:i.endingEnd=Zr)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=e,o[1]=s+t,c[1]=n,this}}const Ap=new Float32Array(1);class wp extends Ci{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;g=new mp(ie.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new du(new Float32Array(2),new Float32Array(2),1,Ap),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let a=typeof t=="string"?nc.findByName(i,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=gc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Ep(this,a,e,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?nc.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function Vl(r,t,e,n){const i=Cp(n);switch(e){case Nh:return r*t;case dc:return r*t/i.components*i.byteLength;case fc:return r*t/i.components*i.byteLength;case os:return r*t*2/i.components*i.byteLength;case pc:return r*t*2/i.components*i.byteLength;case Uh:return r*t*3/i.components*i.byteLength;case un:return r*t*4/i.components*i.byteLength;case mc:return r*t*4/i.components*i.byteLength;case Xr:case qr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yr:case Kr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xo:case yo:return Math.max(r,16)*Math.max(t,8)/4;case _o:case vo:return Math.max(r,8)*Math.max(t,8)/2;case Mo:case So:case To:case Eo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bo:case Ao:case wo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Io:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Do:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ko:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Go:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vo:case Ho:case Wo:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xo:case qo:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yo:case Ko:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cp(r){switch(r){case en:case Ph:return{byteLength:1,components:1};case Xs:case Ih:case nn:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Nn:case lc:case hn:return{byteLength:4,components:1};case Dh:case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);function gu(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Rp(r){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Pp,alphahash_pars_fragment:Ip,alphamap_fragment:Dp,alphamap_pars_fragment:Lp,alphatest_fragment:Np,alphatest_pars_fragment:Up,aomap_fragment:Fp,aomap_pars_fragment:Op,batching_pars_vertex:Bp,batching_vertex:kp,begin_vertex:zp,beginnormal_vertex:Gp,bsdfs:Vp,iridescence_fragment:Hp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:Kp,color_fragment:$p,color_pars_fragment:jp,color_pars_vertex:Jp,color_vertex:Zp,common:Qp,cube_uv_reflection_fragment:tm,defaultnormal_vertex:em,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:cm,envmap_common_pars_fragment:lm,envmap_pars_fragment:hm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Sm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_pars_fragment:xm,lights_lambert_fragment:vm,lights_lambert_pars_fragment:ym,lights_pars_begin:Mm,lights_toon_fragment:bm,lights_toon_pars_fragment:Tm,lights_phong_fragment:Em,lights_phong_pars_fragment:Am,lights_physical_fragment:wm,lights_physical_pars_fragment:Cm,lights_fragment_begin:Rm,lights_fragment_maps:Pm,lights_fragment_end:Im,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Um,map_fragment:Fm,map_pars_fragment:Om,map_particle_fragment:Bm,map_particle_pars_fragment:km,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:Vm,morphcolor_vertex:Hm,morphnormal_vertex:Wm,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:Km,normal_pars_fragment:$m,normal_pars_vertex:jm,normal_vertex:Jm,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:eg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:sg,premultiplied_alpha_fragment:rg,project_vertex:ag,dithering_fragment:og,dithering_pars_fragment:cg,roughnessmap_fragment:lg,roughnessmap_pars_fragment:hg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:dg,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:_g,skinnormal_vertex:xg,specularmap_fragment:vg,specularmap_pars_fragment:yg,tonemapping_fragment:Mg,tonemapping_pars_fragment:Sg,transmission_fragment:bg,transmission_pars_fragment:Tg,uv_pars_fragment:Eg,uv_pars_vertex:Ag,uv_vertex:wg,worldpos_vertex:Cg,background_vert:Rg,background_frag:Pg,backgroundCube_vert:Ig,backgroundCube_frag:Dg,cube_vert:Lg,cube_frag:Ng,depth_vert:Ug,depth_frag:Fg,distance_vert:Og,distance_frag:Bg,equirect_vert:kg,equirect_frag:zg,linedashed_vert:Gg,linedashed_frag:Vg,meshbasic_vert:Hg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:Kg,meshnormal_vert:$g,meshnormal_frag:jg,meshphong_vert:Jg,meshphong_frag:Zg,meshphysical_vert:Qg,meshphysical_frag:t0,meshtoon_vert:e0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:a0,sprite_vert:o0,sprite_frag:c0},ht={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Cn={basic:{uniforms:We([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:We([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:We([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:We([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:We([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:We([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:We([ht.points,ht.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:We([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:We([ht.common,ht.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:We([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:We([ht.sprite,ht.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:We([ht.common,ht.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:We([ht.lights,ht.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Cn.physical={uniforms:We([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Gr={r:0,b:0,g:0},gi=new Un,l0=new zt;function h0(r,t,e,n,i,s,a){const o=new Rt(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function _(y){let S=!1;const A=g(y);A===null?p(o,c):A&&A.isColor&&(p(A,1),S=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,S){const A=g(S);A&&(A.isCubeTexture||A.mapping===la)?(h===void 0&&(h=new J(new ye(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:ls(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),gi.copy(S.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(gi)),h.material.toneMapped=Jt.getTransfer(A.colorSpace)!==ae,(u!==A||d!==A.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new J(new dn(2,2),new Be({name:"BackgroundMaterial",uniforms:ls(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(A.colorSpace)!==ae,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(Gr,qh(r)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,S,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:_,addToRenderList:m,dispose:x}}function u0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(b,P,F,B,W){let X=!1;const V=u(B,F,P);s!==V&&(s=V,l(s.object)),X=f(b,B,F,W),X&&g(b,B,F,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(b,P,F,B),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return r.createVertexArray()}function l(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,P,F){const B=F.wireframe===!0;let W=n[b.id];W===void 0&&(W={},n[b.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let V=X[B];return V===void 0&&(V=d(c()),X[B]=V),V}function d(b){const P=[],F=[],B=[];for(let W=0;W<e;W++)P[W]=0,F[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:b,attributes:{},index:null}}function f(b,P,F,B){const W=s.attributes,X=P.attributes;let V=0;const k=F.getAttributes();for(const j in k)if(k[j].location>=0){const at=W[j];let pt=X[j];if(pt===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor)),at===void 0||at.attribute!==pt||pt&&at.data!==pt.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function g(b,P,F,B){const W={},X=P.attributes;let V=0;const k=F.getAttributes();for(const j in k)if(k[j].location>=0){let at=X[j];at===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(at=b.instanceColor));const pt={};pt.attribute=at,at&&at.data&&(pt.data=at.data),W[j]=pt,V++}s.attributes=W,s.attributesNum=V,s.index=B}function _(){const b=s.newAttributes;for(let P=0,F=b.length;P<F;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const F=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;F[b]=1,B[b]===0&&(r.enableVertexAttribArray(b),B[b]=1),W[b]!==P&&(r.vertexAttribDivisor(b,P),W[b]=P)}function x(){const b=s.newAttributes,P=s.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==b[F]&&(r.disableVertexAttribArray(F),P[F]=0)}function y(b,P,F,B,W,X,V){V===!0?r.vertexAttribIPointer(b,P,F,W,X):r.vertexAttribPointer(b,P,F,B,W,X)}function S(b,P,F,B){_();const W=B.attributes,X=F.getAttributes(),V=P.defaultAttributeValues;for(const k in X){const j=X[k];if(j.location>=0){let dt=W[k];if(dt===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),dt!==void 0){const at=dt.normalized,pt=dt.itemSize,Gt=t.get(dt);if(Gt===void 0)continue;const Bt=Gt.buffer,ge=Gt.type,le=Gt.bytesPerElement,Y=ge===r.INT||ge===r.UNSIGNED_INT||dt.gpuType===lc;if(dt.isInterleavedBufferAttribute){const Z=dt.data,xt=Z.stride,mt=dt.offset;if(Z.isInstancedInterleavedBuffer){for(let ct=0;ct<j.locationSize;ct++)p(j.location+ct,Z.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ct=0;ct<j.locationSize;ct++)m(j.location+ct);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let ct=0;ct<j.locationSize;ct++)y(j.location+ct,pt/j.locationSize,ge,at,xt*le,(mt+pt/j.locationSize*ct)*le,Y)}else{if(dt.isInstancedBufferAttribute){for(let Z=0;Z<j.locationSize;Z++)p(j.location+Z,dt.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Z=0;Z<j.locationSize;Z++)m(j.location+Z);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let Z=0;Z<j.locationSize;Z++)y(j.location+Z,pt/j.locationSize,ge,at,pt*le,pt/j.locationSize*Z*le,Y)}}else if(V!==void 0){const at=V[k];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(j.location,at);break;case 3:r.vertexAttrib3fv(j.location,at);break;case 4:r.vertexAttrib4fv(j.location,at);break;default:r.vertexAttrib1fv(j.location,at)}}}}x()}function A(){D();for(const b in n){const P=n[b];for(const F in P){const B=P[F];for(const W in B)h(B[W].object),delete B[W];delete P[F]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const F in P){const B=P[F];for(const W in B)h(B[W].object),delete B[W];delete P[F]}delete n[b.id]}function R(b){for(const P in n){const F=n[P];if(F[b.id]===void 0)continue;const B=F[b.id];for(const W in B)h(B[W].object),delete B[W];delete F[b.id]}}function D(){M(),a=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function d0(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function f0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==un&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==en&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hn&&!D)}function c(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(wt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,maxSamples:A,samples:w}}function p0(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new yi,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const x=s?0:n,y=x*4;let S=p.clippingState||null;c.value=S,S=h(g,d,y,f);for(let A=0;A!==y;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=f;y!==_;++y,S+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function m0(r){let t=new WeakMap;function e(a,o){return o===mo?a.mapping=Ei:o===go&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===mo||o===go)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new $h(c.height);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const oi=4,Hl=[.125,.215,.35,.446,.526,.582],Si=20,g0=256,Ds=new ar,Wl=new Rt;let $a=null,ja=0,Ja=0,Za=!1;const _0=new E;class Xl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=_0}=s;$a=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($a,ja,Ja),this._renderer.xr.enabled=Za,t.scissorTest=!1,ji(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:nn,format:un,colorSpace:Ge,depthBuffer:!1},i=ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=x0(s)),this._blurMaterial=y0(s,t,e),this._ggxMaterial=v0(s,t,e)}return i}_compileMaterial(t){const e=new J(new ve,t);this._renderer.compile(e,Ds)}_sceneToCubeUV(t,e,n,i,s){const c=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Wl),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new ye,new ee({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,p=!0):(m.color.copy(Wl),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):S===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const A=this._cubeSize;ji(i,S*A,y>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(_,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ei||t.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ji(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ds)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-oi?n-g+oi:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,ji(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,Ds),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,ji(t,m,p,3*_,2*_),i.setRenderTarget(t),i.render(o,Ds)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Si-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Si;m>Si&&wt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let x=0;for(let R=0;R<Si;++R){const D=R/_,M=Math.exp(-D*D/2);p.push(M),R===0?x+=M:R<m&&(x+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const S=this._sizeLods[i],A=3*S*(i>y-oi?i-y+oi:0),w=4*(this._cubeSize-S);ji(e,A,w,3*S,2*S),c.setRenderTarget(e),c.render(u,Ds)}}function x0(r){const t=[],e=[],n=[];let i=r;const s=r-oi+1+Hl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-oi?c=Hl[a-r+oi-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,D=w>2?0:-1,M=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];x.set(M,_*g*w),y.set(d,m*g*w);const b=[w,w,w,w,w,w];S.set(b,p*g*w)}const A=new ve;A.setAttribute("position",new Pe(x,_)),A.setAttribute("uv",new Pe(y,m)),A.setAttribute("faceIndex",new Pe(S,p)),n.push(new J(A,null)),i>oi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function ql(r,t,e){const n=new $e(r,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function v0(r,t,e){return new Be({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:g0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:da(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function y0(r,t,e){const n=new Float32Array(Si),i=new E(0,1,0);return new Be({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Yl(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Kl(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===mo||c===go,h=c===Ei||c===as;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Xl(r)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Xl(r)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function S0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&js("WebGLRenderer: "+n+" extension not supported."),i}}}function b0(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,S=x.length;y<S;y+=3){const A=x[y+0],w=x[y+1],R=x[y+2];d.push(A,w,w,R,R,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const A=y+0,w=y+1,R=y+2;d.push(A,w,w,R,R,A)}}else return;const m=new(zh(d)?Xh:Wh)(d,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function T0(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function E0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function A0(r,t,e){const n=new WeakMap,i=new _e;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*w*4*u),D=new Gh(R,A,w,u);D.type=hn,D.needsUpdate=!0;const M=S*4;for(let P=0;P<u;P++){const F=p[P],B=x[P],W=y[P],X=A*w*4*P;for(let V=0;V<F.count;V++){const k=V*M;g===!0&&(i.fromBufferAttribute(F,V),R[X+k+0]=i.x,R[X+k+1]=i.y,R[X+k+2]=i.z,R[X+k+3]=0),_===!0&&(i.fromBufferAttribute(B,V),R[X+k+4]=i.x,R[X+k+5]=i.y,R[X+k+6]=i.z,R[X+k+7]=0),m===!0&&(i.fromBufferAttribute(W,V),R[X+k+8]=i.x,R[X+k+9]=i.y,R[X+k+10]=i.z,R[X+k+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new nt(A,w)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function w0(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const C0={[Sh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[Th]:"CINEON_TONE_MAPPING",[cc]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[wh]:"NEUTRAL_TONE_MAPPING",[Eh]:"CUSTOM_TONE_MAPPING"};function R0(r,t,e,n,i){const s=new $e(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new $e(t,e,{type:nn,depthBuffer:!1,stencilBuffer:!1}),o=new ve;o.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new $t([0,2,0,0,2,0],2));const c=new Kf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new J(o,c),h=new ar(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(x,y){s.setSize(x,y),a.setSize(x,y);for(let S=0;S<m.length;S++){const A=m[S];A.setSize&&A.setSize(x,y)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const y=s.width,S=s.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(y,S)}},this.begin=function(x,y){if(f||x.toneMapping===Ln&&m.length===0)return!1;if(_=y,y!==null){const S=y.width,A=y.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return p===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=Ln,!0},this.hasRenderPass=function(){return p},this.end=function(x,y){x.toneMapping=g,f=!0;let S=s,A=a;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(x,A,S,y),R.needsSwap!==!1)){const D=S;S=A,A=D}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,c.defines={},Jt.getTransfer(u)===ae&&(c.defines.SRGB_TRANSFER="");const w=C0[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(_),x.render(l,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const _u=new Le,ic=new Js(1,1),xu=new Gh,vu=new kd,yu=new Kh,$l=[],jl=[],Jl=new Float32Array(16),Zl=new Float32Array(9),Ql=new Float32Array(4);function ys(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=$l[i];if(s===void 0&&(s=new Float32Array(i),$l[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ne(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ue(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function fa(r,t){let e=jl[t];e===void 0&&(e=new Int32Array(t),jl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function P0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function I0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2fv(this.addr,t),Ue(e,t)}}function D0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;r.uniform3fv(this.addr,t),Ue(e,t)}}function L0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4fv(this.addr,t),Ue(e,t)}}function N0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Ql.set(n),r.uniformMatrix2fv(this.addr,!1,Ql),Ue(e,n)}}function U0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Zl.set(n),r.uniformMatrix3fv(this.addr,!1,Zl),Ue(e,n)}}function F0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Jl.set(n),r.uniformMatrix4fv(this.addr,!1,Jl),Ue(e,n)}}function O0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function B0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2iv(this.addr,t),Ue(e,t)}}function k0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3iv(this.addr,t),Ue(e,t)}}function z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4iv(this.addr,t),Ue(e,t)}}function G0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function V0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2uiv(this.addr,t),Ue(e,t)}}function H0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3uiv(this.addr,t),Ue(e,t)}}function W0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4uiv(this.addr,t),Ue(e,t)}}function X0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ic.compareFunction=e.isReversedDepthBuffer()?xc:_c,s=ic):s=_u,e.setTexture2D(t||s,i)}function q0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vu,i)}function Y0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yu,i)}function K0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xu,i)}function $0(r){switch(r){case 5126:return P0;case 35664:return I0;case 35665:return D0;case 35666:return L0;case 35674:return N0;case 35675:return U0;case 35676:return F0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return k0;case 35669:case 35673:return z0;case 5125:return G0;case 36294:return V0;case 36295:return H0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return K0}}function j0(r,t){r.uniform1fv(this.addr,t)}function J0(r,t){const e=ys(t,this.size,2);r.uniform2fv(this.addr,e)}function Z0(r,t){const e=ys(t,this.size,3);r.uniform3fv(this.addr,e)}function Q0(r,t){const e=ys(t,this.size,4);r.uniform4fv(this.addr,e)}function t_(r,t){const e=ys(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function e_(r,t){const e=ys(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function n_(r,t){const e=ys(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function i_(r,t){r.uniform1iv(this.addr,t)}function s_(r,t){r.uniform2iv(this.addr,t)}function r_(r,t){r.uniform3iv(this.addr,t)}function a_(r,t){r.uniform4iv(this.addr,t)}function o_(r,t){r.uniform1uiv(this.addr,t)}function c_(r,t){r.uniform2uiv(this.addr,t)}function l_(r,t){r.uniform3uiv(this.addr,t)}function h_(r,t){r.uniform4uiv(this.addr,t)}function u_(r,t,e){const n=this.cache,i=t.length,s=fa(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=ic:a=_u;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function d_(r,t,e){const n=this.cache,i=t.length,s=fa(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||vu,s[a])}function f_(r,t,e){const n=this.cache,i=t.length,s=fa(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||yu,s[a])}function p_(r,t,e){const n=this.cache,i=t.length,s=fa(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||xu,s[a])}function m_(r){switch(r){case 5126:return j0;case 35664:return J0;case 35665:return Z0;case 35666:return Q0;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return c_;case 36295:return l_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}class g_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$0(e.type)}}class __{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m_(e.type)}}class x_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function th(r,t){r.seq.push(t),r.map[t.id]=t}function v_(r,t,e){const n=r.name,i=n.length;for(Qa.lastIndex=0;;){const s=Qa.exec(n),a=Qa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){th(e,l===void 0?new g_(o,r,t):new __(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new x_(o),th(e,u)),e=u}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);v_(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function eh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const y_=37297;let M_=0;function S_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const nh=new Vt;function b_(r){Jt._getMatrix(nh,Jt.workingColorSpace,r);const t=`mat3( ${nh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(r)){case Qr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ih(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+S_(r.getShaderSource(t),o)}else return s}function T_(r,t){const e=b_(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const E_={[Sh]:"Linear",[bh]:"Reinhard",[Th]:"Cineon",[cc]:"ACESFilmic",[Ah]:"AgX",[wh]:"Neutral",[Eh]:"Custom"};function A_(r,t){const e=E_[t];return e===void 0?(wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vr=new E;function w_(){Jt.getLuminanceCoefficients(Vr);const r=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function R_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P_(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Bs(r){return r!==""}function sh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(r){return r.replace(I_,L_)}const D_=new Map;function L_(r,t){let e=Ht[t];if(e===void 0){const n=D_.get(t);if(n!==void 0)e=Ht[n],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sc(e)}const N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(r){return r.replace(N_,U_)}function U_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function oh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const F_={[Hr]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function O_(r){return F_[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const B_={[Ei]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE_UV"};function k_(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":B_[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const z_={[as]:"ENVMAP_MODE_REFRACTION"};function G_(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":z_[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const V_={[Mh]:"ENVMAP_BLENDING_MULTIPLY",[ed]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function H_(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":V_[r.combine]||"ENVMAP_BLENDING_NONE"}function W_(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function X_(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=O_(e),l=k_(e),h=G_(e),u=H_(e),d=W_(e),f=C_(e),g=R_(s),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(m=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Ln?A_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,T_("linearToOutputTexel",e.outputColorSpace),w_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),a=sc(a),a=sh(a,e),a=rh(a,e),o=sc(o),o=sh(o,e),o=rh(o,e),a=ah(a),o=ah(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,S=x+p+o,A=eh(i,i.VERTEX_SHADER,y),w=eh(i,i.FRAGMENT_SHADER,S);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(P){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(A)||"",W=i.getShaderInfoLog(w)||"",X=F.trim(),V=B.trim(),k=W.trim();let j=!0,dt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const at=ih(i,A,"vertex"),pt=ih(i,w,"fragment");Dt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+at+`
`+pt)}else X!==""?wt("WebGLProgram: Program Info Log:",X):(V===""||k==="")&&(dt=!1);dt&&(P.diagnostics={runnable:j,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(A),i.deleteShader(w),D=new $r(i,_),M=P_(i,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,y_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let q_=0;class Y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new K_(t),e.set(t,n)),n}}class K_{constructor(t){this.id=q_++,this.code=t,this.usedTimes=0}}function $_(r,t,e,n,i,s,a){const o=new Vh,c=new Y_,l=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,b,P,F,B){const W=F.fog,X=B.geometry,V=M.isMeshStandardMaterial?F.environment:null,k=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),j=k&&k.mapping===la?k.image.height:null,dt=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&wt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=at!==void 0?at.length:0;let Gt=0;X.morphAttributes.position!==void 0&&(Gt=1),X.morphAttributes.normal!==void 0&&(Gt=2),X.morphAttributes.color!==void 0&&(Gt=3);let Bt,ge,le,Y;if(dt){const se=Cn[dt];Bt=se.vertexShader,ge=se.fragmentShader}else Bt=M.vertexShader,ge=M.fragmentShader,c.update(M),le=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);const Z=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),mt=B.isInstancedMesh===!0,ct=B.isBatchedMesh===!0,Ct=!!M.map,Qt=!!M.matcap,jt=!!k,te=!!M.aoMap,he=!!M.lightMap,Wt=!!M.bumpMap,Ae=!!M.normalMap,I=!!M.displacementMap,we=!!M.emissiveMap,ne=!!M.metalnessMap,fe=!!M.roughnessMap,St=M.anisotropy>0,C=M.clearcoat>0,v=M.dispersion>0,N=M.iridescence>0,q=M.sheen>0,$=M.transmission>0,H=St&&!!M.anisotropyMap,Tt=C&&!!M.clearcoatMap,st=C&&!!M.clearcoatNormalMap,Mt=C&&!!M.clearcoatRoughnessMap,Ut=N&&!!M.iridescenceMap,tt=N&&!!M.iridescenceThicknessMap,ot=q&&!!M.sheenColorMap,yt=q&&!!M.sheenRoughnessMap,bt=!!M.specularMap,rt=!!M.specularColorMap,Xt=!!M.specularIntensityMap,L=$&&!!M.transmissionMap,ft=$&&!!M.thicknessMap,et=!!M.gradientMap,gt=!!M.alphaMap,Q=M.alphaTest>0,K=!!M.alphaHash,it=!!M.extensions;let Ot=Ln;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ot=r.toneMapping);const pe={shaderID:dt,shaderType:M.type,shaderName:M.name,vertexShader:Bt,fragmentShader:ge,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ct,batchingColor:ct&&B._colorsTexture!==null,instancing:mt,instancingColor:mt&&B.instanceColor!==null,instancingMorph:mt&&B.morphTexture!==null,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ge,alphaToCoverage:!!M.alphaToCoverage,map:Ct,matcap:Qt,envMap:jt,envMapMode:jt&&k.mapping,envMapCubeUVHeight:j,aoMap:te,lightMap:he,bumpMap:Wt,normalMap:Ae,displacementMap:I,emissiveMap:we,normalMapObjectSpace:Ae&&M.normalMapType===cd,normalMapTangentSpace:Ae&&M.normalMapType===kh,metalnessMap:ne,roughnessMap:fe,anisotropy:St,anisotropyMap:H,clearcoat:C,clearcoatMap:Tt,clearcoatNormalMap:st,clearcoatRoughnessMap:Mt,dispersion:v,iridescence:N,iridescenceMap:Ut,iridescenceThicknessMap:tt,sheen:q,sheenColorMap:ot,sheenRoughnessMap:yt,specularMap:bt,specularColorMap:rt,specularIntensityMap:Xt,transmission:$,transmissionMap:L,thicknessMap:ft,gradientMap:et,opaque:M.transparent===!1&&M.blending===es&&M.alphaToCoverage===!1,alphaMap:gt,alphaTest:Q,alphaHash:K,combine:M.combine,mapUv:Ct&&_(M.map.channel),aoMapUv:te&&_(M.aoMap.channel),lightMapUv:he&&_(M.lightMap.channel),bumpMapUv:Wt&&_(M.bumpMap.channel),normalMapUv:Ae&&_(M.normalMap.channel),displacementMapUv:I&&_(M.displacementMap.channel),emissiveMapUv:we&&_(M.emissiveMap.channel),metalnessMapUv:ne&&_(M.metalnessMap.channel),roughnessMapUv:fe&&_(M.roughnessMap.channel),anisotropyMapUv:H&&_(M.anisotropyMap.channel),clearcoatMapUv:Tt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(M.sheenRoughnessMap.channel),specularMapUv:bt&&_(M.specularMap.channel),specularColorMapUv:rt&&_(M.specularColorMap.channel),specularIntensityMapUv:Xt&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ft&&_(M.thicknessMap.channel),alphaMapUv:gt&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ae||St),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Ct||gt),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Gt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Ct&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===ae,decodeVideoTextureEmissive:we&&M.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(M.emissiveMap.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===de,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:it&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&M.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pe.vertexUv1s=l.has(1),pe.vertexUv2s=l.has(2),pe.vertexUv3s=l.has(3),l.clear(),pe}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)b.push(P),b.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(b,M),y(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function x(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const b=g[M.type];let P;if(b){const F=Cn[b];P=na.clone(F.uniforms)}else P=M.uniforms;return P}function A(M,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new X_(r,b,M,s),h.push(P),u.set(b,P)),P}function w(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),u.delete(M.cacheKey),M.destroy()}}function R(M){c.remove(M)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:D}}function j_(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function J_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ch(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function lh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||J_),n.length>1&&n.sort(d||ch),i.length>1&&i.sort(d||ch)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Z_(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new lh,r.set(n,[a])):i>=s.length?(a=new lh,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Q_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Rt};break;case"SpotLight":e={position:new E,direction:new E,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new E,halfWidth:new E,halfHeight:new E};break}return r[t.id]=e,e}}}function tx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ex=0;function nx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ix(r){const t=new Q_,e=tx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const i=new E,s=new zt,a=new zt;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,S=0,A=0,w=0,R=0;l.sort(nx);for(let M=0,b=l.length;M<b;M++){const P=l[M],F=P.color,B=P.intensity,W=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===os?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],B);R++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,j=e.get(P);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(F).multiplyScalar(B),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const k=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,k.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=k.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=X,S++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(F).multiplyScalar(B),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const k=P.shadow,j=e.get(P);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,j.shadowCameraNear=k.camera.near,j.shadowCameraFar=k.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(B),V.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==x||D.numPointShadows!==y||D.numSpotShadows!==S||D.numSpotMaps!==A||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=x,D.numPointShadows=y,D.numSpotShadows=S,D.numSpotMaps=A,D.numLightProbes=R,n.version=ex++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(y.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function hh(r){const t=new ix(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function sx(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new hh(r),t.set(i,[o])):s>=a.length?(o=new hh(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ox=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],cx=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],uh=new zt,Ls=new E,to=new E;function lx(r,t,e){let n=new Ec;const i=new nt,s=new nt,a=new _e,o=new $f,c=new jf,l={},h=e.maxTextureSize,u={[Jn]:qe,[qe]:Jn,[de]:de},d=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:rx,fragmentShader:ax}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let p=this.type;this.render=function(w,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===yh&&(wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Hr);const M=r.getRenderTarget(),b=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Dn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==this.type;B&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(X=>X.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,X=w.length;W<X;W++){const V=w[W],k=V.shadow;if(k===void 0){wt("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const j=k.getFrameExtents();if(i.multiply(j),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,k.mapSize.y=s.y)),k.map===null||B===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Us){if(V.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new $e(i.x,i.y,{format:os,type:nn,minFilter:De,magFilter:De,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new Js(i.x,i.y,hn),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=Zn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ie,k.map.depthTexture.magFilter=Ie}else{V.isPointLight?(k.map=new $h(i.x),k.map.depthTexture=new mf(i.x,Nn)):(k.map=new $e(i.x,i.y),k.map.depthTexture=new Js(i.x,i.y,Nn)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=Zn;const at=r.state.buffers.depth.getReversed();this.type===Hr?(k.map.depthTexture.compareFunction=at?xc:_c,k.map.depthTexture.minFilter=De,k.map.depthTexture.magFilter=De):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ie,k.map.depthTexture.magFilter=Ie)}k.camera.updateProjectionMatrix()}const dt=k.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<dt;at++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,at),r.clear();else{at===0&&(r.setRenderTarget(k.map),r.clear());const pt=k.getViewport(at);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),F.viewport(a)}if(V.isPointLight){const pt=k.camera,Gt=k.matrix,Bt=V.distance||pt.far;Bt!==pt.far&&(pt.far=Bt,pt.updateProjectionMatrix()),Ls.setFromMatrixPosition(V.matrixWorld),pt.position.copy(Ls),to.copy(pt.position),to.add(ox[at]),pt.up.copy(cx[at]),pt.lookAt(to),pt.updateMatrixWorld(),Gt.makeTranslation(-Ls.x,-Ls.y,-Ls.z),uh.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(uh,pt.coordinateSystem,pt.reversedDepth)}else k.updateMatrices(V);n=k.getFrustum(),S(R,D,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Us&&x(k,D),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,b,P)};function x(w,R){const D=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $e(i.x,i.y,{format:os,type:nn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(R,null,D,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(R,null,D,f,_,null)}function y(w,R,D,M){let b=null;const P=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=D.isPointLight===!0?c:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=b.uuid,B=R.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let X=W[B];X===void 0&&(X=b.clone(),W[B]=X,R.addEventListener("dispose",A)),b=X}if(b.visible=R.visible,b.wireframe=R.wireframe,M===Us?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=r.properties.get(b);F.light=D}return b}function S(w,R,D,M,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Us)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const B=t.update(w),W=w.material;if(Array.isArray(W)){const X=B.groups;for(let V=0,k=X.length;V<k;V++){const j=X[V],dt=W[j.materialIndex];if(dt&&dt.visible){const at=y(w,dt,M,b);w.onBeforeShadow(r,w,R,D,B,at,j),r.renderBufferDirect(D,null,B,at,w,j),w.onAfterShadow(r,w,R,D,B,at,j)}}}else if(W.visible){const X=y(w,W,M,b);w.onBeforeShadow(r,w,R,D,B,X,null),r.renderBufferDirect(D,null,B,X,w,null),w.onAfterShadow(r,w,R,D,B,X,null)}}const F=w.children;for(let B=0,W=F.length;B<W;B++)S(F[B],R,D,M,b)}function A(w){w.target.removeEventListener("dispose",A);for(const D in l){const M=l[D],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const hx={[oo]:co,[lo]:fo,[ho]:po,[rs]:uo,[co]:oo,[fo]:lo,[po]:ho,[uo]:rs};function ux(r,t){function e(){let L=!1;const ft=new _e;let et=null;const gt=new _e(0,0,0,0);return{setMask:function(Q){et!==Q&&!L&&(r.colorMask(Q,Q,Q,Q),et=Q)},setLocked:function(Q){L=Q},setClear:function(Q,K,it,Ot,pe){pe===!0&&(Q*=Ot,K*=Ot,it*=Ot),ft.set(Q,K,it,Ot),gt.equals(ft)===!1&&(r.clearColor(Q,K,it,Ot),gt.copy(ft))},reset:function(){L=!1,et=null,gt.set(-1,0,0,0)}}}function n(){let L=!1,ft=!1,et=null,gt=null,Q=null;return{setReversed:function(K){if(ft!==K){const it=t.get("EXT_clip_control");K?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),ft=K;const Ot=Q;Q=null,this.setClear(Ot)}},getReversed:function(){return ft},setTest:function(K){K?Z(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(K){et!==K&&!L&&(r.depthMask(K),et=K)},setFunc:function(K){if(ft&&(K=hx[K]),gt!==K){switch(K){case oo:r.depthFunc(r.NEVER);break;case co:r.depthFunc(r.ALWAYS);break;case lo:r.depthFunc(r.LESS);break;case rs:r.depthFunc(r.LEQUAL);break;case ho:r.depthFunc(r.EQUAL);break;case uo:r.depthFunc(r.GEQUAL);break;case fo:r.depthFunc(r.GREATER);break;case po:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=K}},setLocked:function(K){L=K},setClear:function(K){Q!==K&&(ft&&(K=1-K),r.clearDepth(K),Q=K)},reset:function(){L=!1,et=null,gt=null,Q=null,ft=!1}}}function i(){let L=!1,ft=null,et=null,gt=null,Q=null,K=null,it=null,Ot=null,pe=null;return{setTest:function(se){L||(se?Z(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(se){ft!==se&&!L&&(r.stencilMask(se),ft=se)},setFunc:function(se,bn,zn){(et!==se||gt!==bn||Q!==zn)&&(r.stencilFunc(se,bn,zn),et=se,gt=bn,Q=zn)},setOp:function(se,bn,zn){(K!==se||it!==bn||Ot!==zn)&&(r.stencilOp(se,bn,zn),K=se,it=bn,Ot=zn)},setLocked:function(se){L=se},setClear:function(se){pe!==se&&(r.clearStencil(se),pe=se)},reset:function(){L=!1,ft=null,et=null,gt=null,Q=null,K=null,it=null,Ot=null,pe=null}}}const s=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,S=null,A=null,w=null,R=new Rt(0,0,0),D=0,M=!1,b=null,P=null,F=null,B=null,W=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,k=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=k>=1):j.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=k>=2);let dt=null,at={};const pt=r.getParameter(r.SCISSOR_BOX),Gt=r.getParameter(r.VIEWPORT),Bt=new _e().fromArray(pt),ge=new _e().fromArray(Gt);function le(L,ft,et,gt){const Q=new Uint8Array(4),K=r.createTexture();r.bindTexture(L,K),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<et;it++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(ft+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return K}const Y={};Y[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(rs),Wt(!1),Ae(Yc),Z(r.CULL_FACE),te(Dn);function Z(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function xt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function mt(L,ft){return u[L]!==ft?(r.bindFramebuffer(L,ft),u[L]=ft,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ft),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function ct(L,ft){let et=f,gt=!1;if(L){et=d.get(ft),et===void 0&&(et=[],d.set(ft,et));const Q=L.textures;if(et.length!==Q.length||et[0]!==r.COLOR_ATTACHMENT0){for(let K=0,it=Q.length;K<it;K++)et[K]=r.COLOR_ATTACHMENT0+K;et.length=Q.length,gt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,gt=!0);gt&&r.drawBuffers(et)}function Ct(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Qt={[Mi]:r.FUNC_ADD,[Bu]:r.FUNC_SUBTRACT,[ku]:r.FUNC_REVERSE_SUBTRACT};Qt[zu]=r.MIN,Qt[Gu]=r.MAX;const jt={[Vu]:r.ZERO,[Hu]:r.ONE,[Wu]:r.SRC_COLOR,[ro]:r.SRC_ALPHA,[ju]:r.SRC_ALPHA_SATURATE,[Ku]:r.DST_COLOR,[qu]:r.DST_ALPHA,[Xu]:r.ONE_MINUS_SRC_COLOR,[ao]:r.ONE_MINUS_SRC_ALPHA,[$u]:r.ONE_MINUS_DST_COLOR,[Yu]:r.ONE_MINUS_DST_ALPHA,[Ju]:r.CONSTANT_COLOR,[Zu]:r.ONE_MINUS_CONSTANT_COLOR,[Qu]:r.CONSTANT_ALPHA,[td]:r.ONE_MINUS_CONSTANT_ALPHA};function te(L,ft,et,gt,Q,K,it,Ot,pe,se){if(L===Dn){_===!0&&(xt(r.BLEND),_=!1);return}if(_===!1&&(Z(r.BLEND),_=!0),L!==Ou){if(L!==m||se!==M){if((p!==Mi||S!==Mi)&&(r.blendEquation(r.FUNC_ADD),p=Mi,S=Mi),se)switch(L){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wn:r.blendFunc(r.ONE,r.ONE);break;case Kc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $c:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Dt("WebGLState: Invalid blending: ",L);break}else switch(L){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kc:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",L);break}x=null,y=null,A=null,w=null,R.set(0,0,0),D=0,m=L,M=se}return}Q=Q||ft,K=K||et,it=it||gt,(ft!==p||Q!==S)&&(r.blendEquationSeparate(Qt[ft],Qt[Q]),p=ft,S=Q),(et!==x||gt!==y||K!==A||it!==w)&&(r.blendFuncSeparate(jt[et],jt[gt],jt[K],jt[it]),x=et,y=gt,A=K,w=it),(Ot.equals(R)===!1||pe!==D)&&(r.blendColor(Ot.r,Ot.g,Ot.b,pe),R.copy(Ot),D=pe),m=L,M=!1}function he(L,ft){L.side===de?xt(r.CULL_FACE):Z(r.CULL_FACE);let et=L.side===qe;ft&&(et=!et),Wt(et),L.blending===es&&L.transparent===!1?te(Dn):te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const gt=L.stencilWrite;o.setTest(gt),gt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),we(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(L){b!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),b=L)}function Ae(L){L!==Uu?(Z(r.CULL_FACE),L!==P&&(L===Yc?r.cullFace(r.BACK):L===Fu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),P=L}function I(L){L!==F&&(V&&r.lineWidth(L),F=L)}function we(L,ft,et){L?(Z(r.POLYGON_OFFSET_FILL),(B!==ft||W!==et)&&(r.polygonOffset(ft,et),B=ft,W=et)):xt(r.POLYGON_OFFSET_FILL)}function ne(L){L?Z(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function fe(L){L===void 0&&(L=r.TEXTURE0+X-1),dt!==L&&(r.activeTexture(L),dt=L)}function St(L,ft,et){et===void 0&&(dt===null?et=r.TEXTURE0+X-1:et=dt);let gt=at[et];gt===void 0&&(gt={type:void 0,texture:void 0},at[et]=gt),(gt.type!==L||gt.texture!==ft)&&(dt!==et&&(r.activeTexture(et),dt=et),r.bindTexture(L,ft||Y[L]),gt.type=L,gt.texture=ft)}function C(){const L=at[dt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function q(){try{r.texSubImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function $(){try{r.texSubImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function Tt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function st(){try{r.texStorage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function Mt(){try{r.texStorage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function Ut(){try{r.texImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function tt(){try{r.texImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function ot(L){Bt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Bt.copy(L))}function yt(L){ge.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function bt(L,ft){let et=l.get(ft);et===void 0&&(et=new WeakMap,l.set(ft,et));let gt=et.get(L);gt===void 0&&(gt=r.getUniformBlockIndex(ft,L.name),et.set(L,gt))}function rt(L,ft){const gt=l.get(ft).get(L);c.get(ft)!==gt&&(r.uniformBlockBinding(ft,gt,L.__bindingPointIndex),c.set(ft,gt))}function Xt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},dt=null,at={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,S=null,A=null,w=null,R=new Rt(0,0,0),D=0,M=!1,b=null,P=null,F=null,B=null,W=null,Bt.set(0,0,r.canvas.width,r.canvas.height),ge.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:xt,bindFramebuffer:mt,drawBuffers:ct,useProgram:Ct,setBlending:te,setMaterial:he,setFlipSided:Wt,setCullFace:Ae,setLineWidth:I,setPolygonOffset:we,setScissorTest:ne,activeTexture:fe,bindTexture:St,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:Ut,texImage3D:tt,updateUBOMapping:bt,uniformBlockBinding:rt,texStorage2D:st,texStorage3D:Mt,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:H,compressedTexSubImage3D:Tt,scissor:ot,viewport:yt,reset:Xt}}function dx(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return f?new OffscreenCanvas(C,v):$s("canvas")}function _(C,v,N){let q=1;const $=St(C);if(($.width>N||$.height>N)&&(q=N/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const H=Math.floor(q*$.width),Tt=Math.floor(q*$.height);u===void 0&&(u=g(H,Tt));const st=v?g(H,Tt):u;return st.width=H,st.height=Tt,st.getContext("2d").drawImage(C,0,0,H,Tt),wt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+H+"x"+Tt+")."),st}else return"data"in C&&wt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,v,N,q,$=!1){if(C!==null){if(r[C]!==void 0)return r[C];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let H=v;if(v===r.RED&&(N===r.FLOAT&&(H=r.R32F),N===r.HALF_FLOAT&&(H=r.R16F),N===r.UNSIGNED_BYTE&&(H=r.R8)),v===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(H=r.R8UI),N===r.UNSIGNED_SHORT&&(H=r.R16UI),N===r.UNSIGNED_INT&&(H=r.R32UI),N===r.BYTE&&(H=r.R8I),N===r.SHORT&&(H=r.R16I),N===r.INT&&(H=r.R32I)),v===r.RG&&(N===r.FLOAT&&(H=r.RG32F),N===r.HALF_FLOAT&&(H=r.RG16F),N===r.UNSIGNED_BYTE&&(H=r.RG8)),v===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(H=r.RG8UI),N===r.UNSIGNED_SHORT&&(H=r.RG16UI),N===r.UNSIGNED_INT&&(H=r.RG32UI),N===r.BYTE&&(H=r.RG8I),N===r.SHORT&&(H=r.RG16I),N===r.INT&&(H=r.RG32I)),v===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(H=r.RGB8UI),N===r.UNSIGNED_SHORT&&(H=r.RGB16UI),N===r.UNSIGNED_INT&&(H=r.RGB32UI),N===r.BYTE&&(H=r.RGB8I),N===r.SHORT&&(H=r.RGB16I),N===r.INT&&(H=r.RGB32I)),v===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(H=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(H=r.RGBA16UI),N===r.UNSIGNED_INT&&(H=r.RGBA32UI),N===r.BYTE&&(H=r.RGBA8I),N===r.SHORT&&(H=r.RGBA16I),N===r.INT&&(H=r.RGBA32I)),v===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(H=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(H=r.R11F_G11F_B10F)),v===r.RGBA){const Tt=$?Qr:Jt.getTransfer(q);N===r.FLOAT&&(H=r.RGBA32F),N===r.HALF_FLOAT&&(H=r.RGBA16F),N===r.UNSIGNED_BYTE&&(H=Tt===ae?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(H=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(H=r.RGB5_A1)}return(H===r.R16F||H===r.R32F||H===r.RG16F||H===r.RG32F||H===r.RGBA16F||H===r.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function S(C,v){let N;return C?v===null||v===Nn||v===qs?N=r.DEPTH24_STENCIL8:v===hn?N=r.DEPTH32F_STENCIL8:v===Xs&&(N=r.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Nn||v===qs?N=r.DEPTH_COMPONENT24:v===hn?N=r.DEPTH_COMPONENT32F:v===Xs&&(N=r.DEPTH_COMPONENT16),N}function A(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ie&&C.minFilter!==De?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){const v=C.target;v.removeEventListener("dispose",w),D(v),v.isVideoTexture&&h.delete(v)}function R(C){const v=C.target;v.removeEventListener("dispose",R),b(v)}function D(C){const v=n.get(C);if(v.__webglInit===void 0)return;const N=C.source,q=d.get(N);if(q){const $=q[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(C),Object.keys(q).length===0&&d.delete(N)}n.remove(C)}function M(C){const v=n.get(C);r.deleteTexture(v.__webglTexture);const N=C.source,q=d.get(N);delete q[v.__cacheKey],a.memory.textures--}function b(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let $=0;$<v.__webglFramebuffer[q].length;$++)r.deleteFramebuffer(v.__webglFramebuffer[q][$]);else r.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)r.deleteFramebuffer(v.__webglFramebuffer[q]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=C.textures;for(let q=0,$=N.length;q<$;q++){const H=n.get(N[q]);H.__webglTexture&&(r.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(N[q])}n.remove(C)}let P=0;function F(){P=0}function B(){const C=P;return C>=i.maxTextures&&wt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function W(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function X(C,v){const N=n.get(C);if(C.isVideoTexture&&ne(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const q=C.image;if(q===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,C,v);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+v)}function V(C,v){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){Y(N,C,v);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+v)}function k(C,v){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){Y(N,C,v);return}e.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+v)}function j(C,v){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){Z(N,C,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+v)}const dt={[ln]:r.REPEAT,[Pn]:r.CLAMP_TO_EDGE,[Jr]:r.MIRRORED_REPEAT},at={[Ie]:r.NEAREST,[Rh]:r.NEAREST_MIPMAP_NEAREST,[Fs]:r.NEAREST_MIPMAP_LINEAR,[De]:r.LINEAR,[Wr]:r.LINEAR_MIPMAP_NEAREST,[Yn]:r.LINEAR_MIPMAP_LINEAR},pt={[ld]:r.NEVER,[pd]:r.ALWAYS,[hd]:r.LESS,[_c]:r.LEQUAL,[ud]:r.EQUAL,[xc]:r.GEQUAL,[dd]:r.GREATER,[fd]:r.NOTEQUAL};function Gt(C,v){if(v.type===hn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===De||v.magFilter===Wr||v.magFilter===Fs||v.magFilter===Yn||v.minFilter===De||v.minFilter===Wr||v.minFilter===Fs||v.minFilter===Yn)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,dt[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,dt[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,dt[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,at[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ie||v.minFilter!==Fs&&v.minFilter!==Yn||v.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Bt(C,v){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));const q=v.source;let $=d.get(q);$===void 0&&($={},d.set(q,$));const H=W(v);if(H!==C.__cacheKey){$[H]===void 0&&($[H]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[H].usedTimes++;const Tt=$[C.__cacheKey];Tt!==void 0&&($[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(v)),C.__cacheKey=H,C.__webglTexture=$[H].texture}return N}function ge(C,v,N){return Math.floor(Math.floor(C/N)/v)}function le(C,v,N,q){const H=C.updateRanges;if(H.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,N,q,v.data);else{H.sort((tt,ot)=>tt.start-ot.start);let Tt=0;for(let tt=1;tt<H.length;tt++){const ot=H[Tt],yt=H[tt],bt=ot.start+ot.count,rt=ge(yt.start,v.width,4),Xt=ge(ot.start,v.width,4);yt.start<=bt+1&&rt===Xt&&ge(yt.start+yt.count-1,v.width,4)===rt?ot.count=Math.max(ot.count,yt.start+yt.count-ot.start):(++Tt,H[Tt]=yt)}H.length=Tt+1;const st=r.getParameter(r.UNPACK_ROW_LENGTH),Mt=r.getParameter(r.UNPACK_SKIP_PIXELS),Ut=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let tt=0,ot=H.length;tt<ot;tt++){const yt=H[tt],bt=Math.floor(yt.start/4),rt=Math.ceil(yt.count/4),Xt=bt%v.width,L=Math.floor(bt/v.width),ft=rt,et=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),e.texSubImage2D(r.TEXTURE_2D,0,Xt,L,ft,et,N,q,v.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,st),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Mt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ut)}}function Y(C,v,N){let q=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=r.TEXTURE_3D);const $=Bt(C,v),H=v.source;e.bindTexture(q,C.__webglTexture,r.TEXTURE0+N);const Tt=n.get(H);if(H.version!==Tt.__version||$===!0){e.activeTexture(r.TEXTURE0+N);const st=Jt.getPrimaries(Jt.workingColorSpace),Mt=v.colorSpace===ai?null:Jt.getPrimaries(v.colorSpace),Ut=v.colorSpace===ai||st===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let tt=_(v.image,!1,i.maxTextureSize);tt=fe(v,tt);const ot=s.convert(v.format,v.colorSpace),yt=s.convert(v.type);let bt=y(v.internalFormat,ot,yt,v.colorSpace,v.isVideoTexture);Gt(q,v);let rt;const Xt=v.mipmaps,L=v.isVideoTexture!==!0,ft=Tt.__version===void 0||$===!0,et=H.dataReady,gt=A(v,tt);if(v.isDepthTexture)bt=S(v.format===bi,v.type),ft&&(L?e.texStorage2D(r.TEXTURE_2D,1,bt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,bt,tt.width,tt.height,0,ot,yt,null));else if(v.isDataTexture)if(Xt.length>0){L&&ft&&e.texStorage2D(r.TEXTURE_2D,gt,bt,Xt[0].width,Xt[0].height);for(let Q=0,K=Xt.length;Q<K;Q++)rt=Xt[Q],L?et&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,rt.width,rt.height,ot,yt,rt.data):e.texImage2D(r.TEXTURE_2D,Q,bt,rt.width,rt.height,0,ot,yt,rt.data);v.generateMipmaps=!1}else L?(ft&&e.texStorage2D(r.TEXTURE_2D,gt,bt,tt.width,tt.height),et&&le(v,tt,ot,yt)):e.texImage2D(r.TEXTURE_2D,0,bt,tt.width,tt.height,0,ot,yt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,bt,Xt[0].width,Xt[0].height,tt.depth);for(let Q=0,K=Xt.length;Q<K;Q++)if(rt=Xt[Q],v.format!==un)if(ot!==null)if(L){if(et)if(v.layerUpdates.size>0){const it=Vl(rt.width,rt.height,v.format,v.type);for(const Ot of v.layerUpdates){const pe=rt.data.subarray(Ot*it/rt.data.BYTES_PER_ELEMENT,(Ot+1)*it/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,Ot,rt.width,rt.height,1,ot,pe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,rt.width,rt.height,tt.depth,ot,rt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,bt,rt.width,rt.height,tt.depth,0,rt.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?et&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,rt.width,rt.height,tt.depth,ot,yt,rt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Q,bt,rt.width,rt.height,tt.depth,0,ot,yt,rt.data)}else{L&&ft&&e.texStorage2D(r.TEXTURE_2D,gt,bt,Xt[0].width,Xt[0].height);for(let Q=0,K=Xt.length;Q<K;Q++)rt=Xt[Q],v.format!==un?ot!==null?L?et&&e.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,rt.width,rt.height,ot,rt.data):e.compressedTexImage2D(r.TEXTURE_2D,Q,bt,rt.width,rt.height,0,rt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?et&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,rt.width,rt.height,ot,yt,rt.data):e.texImage2D(r.TEXTURE_2D,Q,bt,rt.width,rt.height,0,ot,yt,rt.data)}else if(v.isDataArrayTexture)if(L){if(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,bt,tt.width,tt.height,tt.depth),et)if(v.layerUpdates.size>0){const Q=Vl(tt.width,tt.height,v.format,v.type);for(const K of v.layerUpdates){const it=tt.data.subarray(K*Q/tt.data.BYTES_PER_ELEMENT,(K+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,ot,yt,it)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ot,yt,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,tt.width,tt.height,tt.depth,0,ot,yt,tt.data);else if(v.isData3DTexture)L?(ft&&e.texStorage3D(r.TEXTURE_3D,gt,bt,tt.width,tt.height,tt.depth),et&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ot,yt,tt.data)):e.texImage3D(r.TEXTURE_3D,0,bt,tt.width,tt.height,tt.depth,0,ot,yt,tt.data);else if(v.isFramebufferTexture){if(ft)if(L)e.texStorage2D(r.TEXTURE_2D,gt,bt,tt.width,tt.height);else{let Q=tt.width,K=tt.height;for(let it=0;it<gt;it++)e.texImage2D(r.TEXTURE_2D,it,bt,Q,K,0,ot,yt,null),Q>>=1,K>>=1}}else if(Xt.length>0){if(L&&ft){const Q=St(Xt[0]);e.texStorage2D(r.TEXTURE_2D,gt,bt,Q.width,Q.height)}for(let Q=0,K=Xt.length;Q<K;Q++)rt=Xt[Q],L?et&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,ot,yt,rt):e.texImage2D(r.TEXTURE_2D,Q,bt,ot,yt,rt);v.generateMipmaps=!1}else if(L){if(ft){const Q=St(tt);e.texStorage2D(r.TEXTURE_2D,gt,bt,Q.width,Q.height)}et&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,yt,tt)}else e.texImage2D(r.TEXTURE_2D,0,bt,ot,yt,tt);m(v)&&p(q),Tt.__version=H.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Z(C,v,N){if(v.image.length!==6)return;const q=Bt(C,v),$=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const H=n.get($);if($.version!==H.__version||q===!0){e.activeTexture(r.TEXTURE0+N);const Tt=Jt.getPrimaries(Jt.workingColorSpace),st=v.colorSpace===ai?null:Jt.getPrimaries(v.colorSpace),Mt=v.colorSpace===ai||Tt===st?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Ut=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,ot=[];for(let K=0;K<6;K++)!Ut&&!tt?ot[K]=_(v.image[K],!0,i.maxCubemapSize):ot[K]=tt?v.image[K].image:v.image[K],ot[K]=fe(v,ot[K]);const yt=ot[0],bt=s.convert(v.format,v.colorSpace),rt=s.convert(v.type),Xt=y(v.internalFormat,bt,rt,v.colorSpace),L=v.isVideoTexture!==!0,ft=H.__version===void 0||q===!0,et=$.dataReady;let gt=A(v,yt);Gt(r.TEXTURE_CUBE_MAP,v);let Q;if(Ut){L&&ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Xt,yt.width,yt.height);for(let K=0;K<6;K++){Q=ot[K].mipmaps;for(let it=0;it<Q.length;it++){const Ot=Q[it];v.format!==un?bt!==null?L?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,Ot.width,Ot.height,bt,Ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Xt,Ot.width,Ot.height,0,Ot.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,Ot.width,Ot.height,bt,rt,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Xt,Ot.width,Ot.height,0,bt,rt,Ot.data)}}}else{if(Q=v.mipmaps,L&&ft){Q.length>0&&gt++;const K=St(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Xt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ot[K].width,ot[K].height,bt,rt,ot[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,ot[K].width,ot[K].height,0,bt,rt,ot[K].data);for(let it=0;it<Q.length;it++){const pe=Q[it].image[K].image;L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,pe.width,pe.height,bt,rt,pe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Xt,pe.width,pe.height,0,bt,rt,pe.data)}}else{L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,bt,rt,ot[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,bt,rt,ot[K]);for(let it=0;it<Q.length;it++){const Ot=Q[it];L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,bt,rt,Ot.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Xt,bt,rt,Ot.image[K])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),H.__version=$.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function xt(C,v,N,q,$,H){const Tt=s.convert(N.format,N.colorSpace),st=s.convert(N.type),Mt=y(N.internalFormat,Tt,st,N.colorSpace),Ut=n.get(v),tt=n.get(N);if(tt.__renderTarget=v,!Ut.__hasExternalTextures){const ot=Math.max(1,v.width>>H),yt=Math.max(1,v.height>>H);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,H,Mt,ot,yt,v.depth,0,Tt,st,null):e.texImage2D($,H,Mt,ot,yt,0,Tt,st,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),we(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,$,tt.__webglTexture,0,I(v)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,$,tt.__webglTexture,H),e.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(C,v,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){const q=v.depthTexture,$=q&&q.isDepthTexture?q.type:null,H=S(v.stencilBuffer,$),Tt=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;we(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(v),H,v.width,v.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(v),H,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,H,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,C)}else{const q=v.textures;for(let $=0;$<q.length;$++){const H=q[$],Tt=s.convert(H.format,H.colorSpace),st=s.convert(H.type),Mt=y(H.internalFormat,Tt,st,H.colorSpace);we(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(v),Mt,v.width,v.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(v),Mt,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Mt,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(C,v,N){const q=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Gt(r.TEXTURE_CUBE_MAP,v.depthTexture);const Ut=s.convert(v.depthTexture.format),tt=s.convert(v.depthTexture.type);let ot;v.depthTexture.format===Zn?ot=r.DEPTH_COMPONENT24:v.depthTexture.format===bi&&(ot=r.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ot,v.width,v.height,0,Ut,tt,null)}}else X(v.depthTexture,0);const H=$.__webglTexture,Tt=I(v),st=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,Mt=v.depthTexture.format===bi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Zn)we(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Mt,st,H,0,Tt):r.framebufferTexture2D(r.FRAMEBUFFER,Mt,st,H,0);else if(v.depthTexture.format===bi)we(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Mt,st,H,0,Tt):r.framebufferTexture2D(r.FRAMEBUFFER,Mt,st,H,0);else throw new Error("Unknown depthTexture format")}function Ct(C){const v=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=q}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)ct(v.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?ct(v.__webglFramebuffer[0],C,0):ct(v.__webglFramebuffer,C,0)}else if(N){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=r.createRenderbuffer(),mt(v.__webglDepthbuffer[q],C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,H),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,H)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),mt(v.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,H),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,H)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(C,v,N){const q=n.get(C);v!==void 0&&xt(q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Ct(C)}function jt(C){const v=C.texture,N=n.get(C),q=n.get(v);C.addEventListener("dispose",R);const $=C.textures,H=C.isWebGLCubeRenderTarget===!0,Tt=$.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=v.version,a.memory.textures++),H){N.__webglFramebuffer=[];for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[st]=[];for(let Mt=0;Mt<v.mipmaps.length;Mt++)N.__webglFramebuffer[st][Mt]=r.createFramebuffer()}else N.__webglFramebuffer[st]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let st=0;st<v.mipmaps.length;st++)N.__webglFramebuffer[st]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let st=0,Mt=$.length;st<Mt;st++){const Ut=n.get($[st]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&we(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let st=0;st<$.length;st++){const Mt=$[st];N.__webglColorRenderbuffer[st]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[st]);const Ut=s.convert(Mt.format,Mt.colorSpace),tt=s.convert(Mt.type),ot=y(Mt.internalFormat,Ut,tt,Mt.colorSpace,C.isXRRenderTarget===!0),yt=I(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,ot,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,N.__webglColorRenderbuffer[st])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),mt(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(H){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Gt(r.TEXTURE_CUBE_MAP,v);for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)xt(N.__webglFramebuffer[st][Mt],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt);else xt(N.__webglFramebuffer[st],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(v)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let st=0,Mt=$.length;st<Mt;st++){const Ut=$[st],tt=n.get(Ut);let ot=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,tt.__webglTexture),Gt(ot,Ut),xt(N.__webglFramebuffer,C,Ut,r.COLOR_ATTACHMENT0+st,ot,0),m(Ut)&&p(ot)}e.unbindTexture()}else{let st=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(st,q.__webglTexture),Gt(st,v),v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)xt(N.__webglFramebuffer[Mt],C,v,r.COLOR_ATTACHMENT0,st,Mt);else xt(N.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,st,0);m(v)&&p(st),e.unbindTexture()}C.depthBuffer&&Ct(C)}function te(C){const v=C.textures;for(let N=0,q=v.length;N<q;N++){const $=v[N];if(m($)){const H=x(C),Tt=n.get($).__webglTexture;e.bindTexture(H,Tt),p(H),e.unbindTexture()}}}const he=[],Wt=[];function Ae(C){if(C.samples>0){if(we(C)===!1){const v=C.textures,N=C.width,q=C.height;let $=r.COLOR_BUFFER_BIT;const H=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(C),st=v.length>1;if(st)for(let Ut=0;Ut<v.length;Ut++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const Mt=C.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ut=0;Ut<v.length;Ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),st){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ut]);const tt=n.get(v[Ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,N,q,0,0,N,q,$,r.NEAREST),c===!0&&(he.length=0,Wt.length=0,he.push(r.COLOR_ATTACHMENT0+Ut),C.depthBuffer&&C.resolveDepthBuffer===!1&&(he.push(H),Wt.push(H),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),st)for(let Ut=0;Ut<v.length;Ut++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ut]);const tt=n.get(v[Ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,tt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(i.maxSamples,C.samples)}function we(C){const v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ne(C){const v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function fe(C,v){const N=C.colorSpace,q=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Ge&&N!==ai&&(Jt.getTransfer(N)===ae?(q!==un||$!==en)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",N)),v}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=k,this.setTextureCube=j,this.rebindTextures=Qt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function fx(r,t){function e(n,i=ai){let s;const a=Jt.getTransfer(i);if(n===en)return r.UNSIGNED_BYTE;if(n===hc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ph)return r.BYTE;if(n===Ih)return r.SHORT;if(n===Xs)return r.UNSIGNED_SHORT;if(n===lc)return r.INT;if(n===Nn)return r.UNSIGNED_INT;if(n===hn)return r.FLOAT;if(n===nn)return r.HALF_FLOAT;if(n===Nh)return r.ALPHA;if(n===Uh)return r.RGB;if(n===un)return r.RGBA;if(n===Zn)return r.DEPTH_COMPONENT;if(n===bi)return r.DEPTH_STENCIL;if(n===dc)return r.RED;if(n===fc)return r.RED_INTEGER;if(n===os)return r.RG;if(n===pc)return r.RG_INTEGER;if(n===mc)return r.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===Kr)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===xo||n===vo||n===yo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===So||n===bo||n===To||n===Eo||n===Ao||n===wo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mo||n===So)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===To)return s.COMPRESSED_R11_EAC;if(n===Eo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ao)return s.COMPRESSED_RG11_EAC;if(n===wo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Co||n===Ro||n===Po||n===Io||n===Do||n===Lo||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Go)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Co)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Ho||n===Wo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Vo)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===Ko)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new eu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Be({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends Ci{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new gx,p={},x=e.getContextAttributes();let y=null,S=null;const A=[],w=[],R=new nt;let D=null;const M=new Xe;M.viewport=new _e;const b=new Xe;b.viewport=new _e;const P=[M,b],F=new pp;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=A[Y];return Z===void 0&&(Z=new Ba,A[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=A[Y];return Z===void 0&&(Z=new Ba,A[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=A[Y];return Z===void 0&&(Z=new Ba,A[Y]=Z),Z.getHandSpace()};function X(Y){const Z=w.indexOf(Y.inputSource);if(Z===-1)return;const xt=A[Z];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,l||a),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",k);for(let Y=0;Y<A.length;Y++){const Z=w[Y];Z!==null&&(w[Y]=null,A[Y].disconnect(Z))}B=null,W=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(y),f=null,d=null,u=null,i=null,S=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",V),i.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,mt=null,ct=null;x.depth&&(ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=x.stencil?bi:Zn,mt=x.stencil?qs:Nn);const Ct={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new $e(d.textureWidth,d.textureHeight,{format:un,type:en,depthTexture:new Js(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new $e(f.framebufferWidth,f.framebufferHeight,{format:un,type:en,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Y){for(let Z=0;Z<Y.removed.length;Z++){const xt=Y.removed[Z],mt=w.indexOf(xt);mt>=0&&(w[mt]=null,A[mt].disconnect(xt))}for(let Z=0;Z<Y.added.length;Z++){const xt=Y.added[Z];let mt=w.indexOf(xt);if(mt===-1){for(let Ct=0;Ct<A.length;Ct++)if(Ct>=w.length){w.push(xt),mt=Ct;break}else if(w[Ct]===null){w[Ct]=xt,mt=Ct;break}if(mt===-1)break}const ct=A[mt];ct&&ct.connect(xt)}}const j=new E,dt=new E;function at(Y,Z,xt){j.setFromMatrixPosition(Z.matrixWorld),dt.setFromMatrixPosition(xt.matrixWorld);const mt=j.distanceTo(dt),ct=Z.projectionMatrix.elements,Ct=xt.projectionMatrix.elements,Qt=ct[14]/(ct[10]-1),jt=ct[14]/(ct[10]+1),te=(ct[9]+1)/ct[5],he=(ct[9]-1)/ct[5],Wt=(ct[8]-1)/ct[0],Ae=(Ct[8]+1)/Ct[0],I=Qt*Wt,we=Qt*Ae,ne=mt/(-Wt+Ae),fe=ne*-Wt;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(fe),Y.translateZ(ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ct[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const St=Qt+ne,C=jt+ne,v=I-fe,N=we+(mt-fe),q=te*jt/C*St,$=he*jt/C*St;Y.projectionMatrix.makePerspective(v,N,q,$,St,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pt(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Z=Y.near,xt=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),F.near=b.near=M.near=Z,F.far=b.far=M.far=xt,(B!==F.near||W!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,W=F.far),F.layers.mask=Y.layers.mask|6,M.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;const mt=Y.parent,ct=F.cameras;pt(F,mt);for(let Ct=0;Ct<ct.length;Ct++)pt(ct[Ct],mt);ct.length===2?at(F,M,b):F.projectionMatrix.copy(M.projectionMatrix),Gt(Y,F,mt)};function Gt(Y,Z,xt){xt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let Bt=null;function ge(Y,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let mt=!1;xt.length!==F.cameras.length&&(F.cameras.length=0,mt=!0);for(let jt=0;jt<xt.length;jt++){const te=xt[jt];let he=null;if(f!==null)he=f.getViewport(te);else{const Ae=u.getViewSubImage(d,te);he=Ae.viewport,jt===0&&(t.setRenderTargetTextures(S,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(S))}let Wt=P[jt];Wt===void 0&&(Wt=new Xe,Wt.layers.enable(jt),Wt.viewport=new _e,P[jt]=Wt),Wt.matrix.fromArray(te.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(te.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(he.x,he.y,he.width,he.height),jt===0&&(F.matrix.copy(Wt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),mt===!0&&F.cameras.push(Wt)}const ct=i.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const jt=u.getDepthInformation(xt[0]);jt&&jt.isValid&&jt.texture&&m.init(jt,i.renderState)}if(ct&&ct.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let jt=0;jt<xt.length;jt++){const te=xt[jt].camera;if(te){let he=p[te];he||(he=new eu,p[te]=he);const Wt=u.getCameraImage(te);he.sourceTexture=Wt}}}}for(let xt=0;xt<A.length;xt++){const mt=w[xt],ct=A[xt];mt!==null&&ct!==void 0&&ct.update(mt,Z,l||a)}Bt&&Bt(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const le=new gu;le.setAnimationLoop(ge),this.setAnimationLoop=function(Y){Bt=Y},this.dispose=function(){}}}const _i=new Un,xx=new zt;function vx(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,S=x.envMapRotation;y&&(m.envMap.value=y,_i.copy(S),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(_i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yx(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const S=y.program;n.uniformBlockBinding(x,S)}function l(x,y){let S=i[x.id];S===void 0&&(g(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(x,A);const w=t.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function h(x){const y=u();x.__bindingPointIndex=y;const S=r.createBuffer(),A=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],S=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,R=S.length;w<R;w++){const D=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,b=D.length;M<b;M++){const P=D[M];if(f(P,w,M,A)===!0){const F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let X=0;X<B.length;X++){const V=B[X],k=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,F+W,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,y,S,A){const w=x.value,R=y+"_"+S;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const D=A[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return A[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(x){const y=x.uniforms;let S=0;const A=16;for(let R=0,D=y.length;R<D;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,P=M.length;b<P;b++){const F=M[b],B=Array.isArray(F.value)?F.value:[F.value];for(let W=0,X=B.length;W<X;W++){const V=B[W],k=_(V),j=S%A,dt=j%k.boundary,at=j+dt;S+=dt,at!==0&&A-at<k.storage&&(S+=A-at),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=k.storage}}}const w=S%A;return w>0&&(S+=A-w),x.__size=S,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):wt("WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}const Mx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function Sx(){return Tn===null&&(Tn=new bc(Mx,16,16,os,nn),Tn.name="DFG_LUT",Tn.minFilter=De,Tn.magFilter=De,Tn.wrapS=Pn,Tn.wrapT=Pn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class bx{constructor(t={}){const{canvas:e=gd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=en}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([mc,pc,fc]),p=new Set([en,Nn,Xs,qs,hc,uc]),x=new Uint32Array(4),y=new Int32Array(4);let S=null,A=null;const w=[],R=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let b=!1;this._outputColorSpace=Ee;let P=0,F=0,B=null,W=-1,X=null;const V=new _e,k=new _e;let j=null;const dt=new Rt(0);let at=0,pt=e.width,Gt=e.height,Bt=1,ge=null,le=null;const Y=new _e(0,0,pt,Gt),Z=new _e(0,0,pt,Gt);let xt=!1;const mt=new Ec;let ct=!1,Ct=!1;const Qt=new zt,jt=new E,te=new _e,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Ae(){return B===null?Bt:1}let I=n;function we(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oc}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",se,!1),I===null){const U="webgl2";if(I=we(U,T),I===null)throw we(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Dt("WebGLRenderer: "+T.message),T}let ne,fe,St,C,v,N,q,$,H,Tt,st,Mt,Ut,tt,ot,yt,bt,rt,Xt,L,ft,et,gt,Q;function K(){ne=new S0(I),ne.init(),et=new fx(I,ne),fe=new f0(I,ne,t,et),St=new ux(I,ne),fe.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),C=new E0(I),v=new j_,N=new dx(I,ne,St,v,fe,et,C),q=new m0(M),$=new M0(M),H=new Rp(I),gt=new u0(I,H),Tt=new b0(I,H,C,gt),st=new w0(I,Tt,H,C),Xt=new A0(I,fe,N),yt=new p0(v),Mt=new $_(M,q,$,ne,fe,gt,yt),Ut=new vx(M,v),tt=new Z_,ot=new sx(ne),rt=new h0(M,q,$,St,st,g,c),bt=new lx(M,st,fe),Q=new yx(I,C,fe,St),L=new d0(I,ne,C),ft=new T0(I,ne,C),C.programs=Mt.programs,M.capabilities=fe,M.extensions=ne,M.properties=v,M.renderLists=tt,M.shadowMap=bt,M.state=St,M.info=C}K(),_!==en&&(D=new R0(_,e.width,e.height,i,s));const it=new _x(M,I);this.xr=it,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Bt},this.setPixelRatio=function(T){T!==void 0&&(Bt=T,this.setSize(pt,Gt,!1))},this.getSize=function(T){return T.set(pt,Gt)},this.setSize=function(T,U,G=!0){if(it.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=T,Gt=U,e.width=Math.floor(T*Bt),e.height=Math.floor(U*Bt),G===!0&&(e.style.width=T+"px",e.style.height=U+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(pt*Bt,Gt*Bt).floor()},this.setDrawingBufferSize=function(T,U,G){pt=T,Gt=U,Bt=G,e.width=Math.floor(T*G),e.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(V)},this.getViewport=function(T){return T.copy(Y)},this.setViewport=function(T,U,G,z){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,U,G,z),St.viewport(V.copy(Y).multiplyScalar(Bt).round())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,U,G,z){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,U,G,z),St.scissor(k.copy(Z).multiplyScalar(Bt).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(T){St.setScissorTest(xt=T)},this.setOpaqueSort=function(T){ge=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,G=!0){let z=0;if(T){let O=!1;if(B!==null){const lt=B.texture.format;O=m.has(lt)}if(O){const lt=B.texture.type,_t=p.has(lt),ut=rt.getClearColor(),vt=rt.getClearAlpha(),Et=ut.r,Lt=ut.g,Pt=ut.b;_t?(x[0]=Et,x[1]=Lt,x[2]=Pt,x[3]=vt,I.clearBufferuiv(I.COLOR,0,x)):(y[0]=Et,y[1]=Lt,y[2]=Pt,y[3]=vt,I.clearBufferiv(I.COLOR,0,y))}else z|=I.COLOR_BUFFER_BIT}U&&(z|=I.DEPTH_BUFFER_BIT),G&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",se,!1),rt.dispose(),tt.dispose(),ot.dispose(),v.dispose(),q.dispose(),$.dispose(),st.dispose(),gt.dispose(),Q.dispose(),Mt.dispose(),it.dispose(),it.removeEventListener("sessionstart",zc),it.removeEventListener("sessionend",Gc),hi.stop()};function Ot(T){T.preventDefault(),ea("WebGLRenderer: Context Lost."),b=!0}function pe(){ea("WebGLRenderer: Context Restored."),b=!1;const T=C.autoReset,U=bt.enabled,G=bt.autoUpdate,z=bt.needsUpdate,O=bt.type;K(),C.autoReset=T,bt.enabled=U,bt.autoUpdate=G,bt.needsUpdate=z,bt.type=O}function se(T){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function bn(T){const U=T.target;U.removeEventListener("dispose",bn),zn(U)}function zn(T){wu(T),v.remove(T)}function wu(T){const U=v.get(T).programs;U!==void 0&&(U.forEach(function(G){Mt.releaseProgram(G)}),T.isShaderMaterial&&Mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,z,O,lt){U===null&&(U=he);const _t=O.isMesh&&O.matrixWorld.determinant()<0,ut=Ru(T,U,G,z,O);St.setMaterial(z,_t);let vt=G.index,Et=1;if(z.wireframe===!0){if(vt=Tt.getWireframeAttribute(G),vt===void 0)return;Et=2}const Lt=G.drawRange,Pt=G.attributes.position;let Yt=Lt.start*Et,ce=(Lt.start+Lt.count)*Et;lt!==null&&(Yt=Math.max(Yt,lt.start*Et),ce=Math.min(ce,(lt.start+lt.count)*Et)),vt!==null?(Yt=Math.max(Yt,0),ce=Math.min(ce,vt.count)):Pt!=null&&(Yt=Math.max(Yt,0),ce=Math.min(ce,Pt.count));const Se=ce-Yt;if(Se<0||Se===1/0)return;gt.setup(O,z,ut,G,vt);let be,ue=L;if(vt!==null&&(be=H.get(vt),ue=ft,ue.setIndex(be)),O.isMesh)z.wireframe===!0?(St.setLineWidth(z.wireframeLinewidth*Ae()),ue.setMode(I.LINES)):ue.setMode(I.TRIANGLES);else if(O.isLine){let It=z.linewidth;It===void 0&&(It=1),St.setLineWidth(It*Ae()),O.isLineSegments?ue.setMode(I.LINES):O.isLineLoop?ue.setMode(I.LINE_LOOP):ue.setMode(I.LINE_STRIP)}else O.isPoints?ue.setMode(I.POINTS):O.isSprite&&ue.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)js("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ue.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const It=O._multiDrawStarts,re=O._multiDrawCounts,Zt=O._multiDrawCount,je=vt?H.get(vt).bytesPerElement:1,Pi=v.get(z).currentProgram.getUniforms();for(let Je=0;Je<Zt;Je++)Pi.setValue(I,"_gl_DrawID",Je),ue.render(It[Je]/je,re[Je])}else if(O.isInstancedMesh)ue.renderInstances(Yt,Se,O.count);else if(G.isInstancedBufferGeometry){const It=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,re=Math.min(G.instanceCount,It);ue.renderInstances(Yt,Se,re)}else ue.render(Yt,Se)};function kc(T,U,G){T.transparent===!0&&T.side===de&&T.forceSinglePass===!1?(T.side=qe,T.needsUpdate=!0,hr(T,U,G),T.side=Jn,T.needsUpdate=!0,hr(T,U,G),T.side=de):hr(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),A=ot.get(G),A.init(U),R.push(A),G.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights();const z=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const lt=O.material;if(lt)if(Array.isArray(lt))for(let _t=0;_t<lt.length;_t++){const ut=lt[_t];kc(ut,G,O),z.add(ut)}else kc(lt,G,O),z.add(lt)}),A=R.pop(),z},this.compileAsync=function(T,U,G=null){const z=this.compile(T,U,G);return new Promise(O=>{function lt(){if(z.forEach(function(_t){v.get(_t).currentProgram.isReady()&&z.delete(_t)}),z.size===0){O(T);return}setTimeout(lt,10)}ne.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let pa=null;function Cu(T){pa&&pa(T)}function zc(){hi.stop()}function Gc(){hi.start()}const hi=new gu;hi.setAnimationLoop(Cu),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){pa=T,it.setAnimationLoop(T),T===null?hi.stop():hi.start()},it.addEventListener("sessionstart",zc),it.addEventListener("sessionend",Gc),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const G=it.enabled===!0&&it.isPresenting===!0,z=D!==null&&(B===null||G)&&D.begin(M,B);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,U,B),A=ot.get(T,R.length),A.init(U),R.push(A),Qt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),mt.setFromProjectionMatrix(Qt,In,U.reversedDepth),Ct=this.localClippingEnabled,ct=yt.init(this.clippingPlanes,Ct),S=tt.get(T,w.length),S.init(),w.push(S),it.enabled===!0&&it.isPresenting===!0){const _t=M.xr.getDepthSensingMesh();_t!==null&&ma(_t,U,-1/0,M.sortObjects)}ma(T,U,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(ge,le),Wt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Wt&&rt.addToRenderList(S,T),this.info.render.frame++,ct===!0&&yt.beginShadows();const O=A.state.shadowsArray;if(bt.render(O,T,U),ct===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&D.hasRenderPass())===!1){const _t=S.opaque,ut=S.transmissive;if(A.setupLights(),U.isArrayCamera){const vt=U.cameras;if(ut.length>0)for(let Et=0,Lt=vt.length;Et<Lt;Et++){const Pt=vt[Et];Hc(_t,ut,T,Pt)}Wt&&rt.render(T);for(let Et=0,Lt=vt.length;Et<Lt;Et++){const Pt=vt[Et];Vc(S,T,Pt,Pt.viewport)}}else ut.length>0&&Hc(_t,ut,T,U),Wt&&rt.render(T),Vc(S,T,U)}B!==null&&F===0&&(N.updateMultisampleRenderTarget(B),N.updateRenderTargetMipmap(B)),z&&D.end(M),T.isScene===!0&&T.onAfterRender(M,T,U),gt.resetDefaultState(),W=-1,X=null,R.pop(),R.length>0?(A=R[R.length-1],ct===!0&&yt.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function ma(T,U,G,z){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||mt.intersectsSprite(T)){z&&te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Qt);const _t=st.update(T),ut=T.material;ut.visible&&S.push(T,_t,ut,G,te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||mt.intersectsObject(T))){const _t=st.update(T),ut=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),te.copy(T.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),te.copy(_t.boundingSphere.center)),te.applyMatrix4(T.matrixWorld).applyMatrix4(Qt)),Array.isArray(ut)){const vt=_t.groups;for(let Et=0,Lt=vt.length;Et<Lt;Et++){const Pt=vt[Et],Yt=ut[Pt.materialIndex];Yt&&Yt.visible&&S.push(T,_t,Yt,G,te.z,Pt)}}else ut.visible&&S.push(T,_t,ut,G,te.z,null)}}const lt=T.children;for(let _t=0,ut=lt.length;_t<ut;_t++)ma(lt[_t],U,G,z)}function Vc(T,U,G,z){const{opaque:O,transmissive:lt,transparent:_t}=T;A.setupLightsView(G),ct===!0&&yt.setGlobalState(M.clippingPlanes,G),z&&St.viewport(V.copy(z)),O.length>0&&lr(O,U,G),lt.length>0&&lr(lt,U,G),_t.length>0&&lr(_t,U,G),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Hc(T,U,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){const Yt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new $e(1,1,{generateMipmaps:!0,type:Yt?nn:en,minFilter:Yn,samples:fe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const lt=A.state.transmissionRenderTarget[z.id],_t=z.viewport||V;lt.setSize(_t.z*M.transmissionResolutionScale,_t.w*M.transmissionResolutionScale);const ut=M.getRenderTarget(),vt=M.getActiveCubeFace(),Et=M.getActiveMipmapLevel();M.setRenderTarget(lt),M.getClearColor(dt),at=M.getClearAlpha(),at<1&&M.setClearColor(16777215,.5),M.clear(),Wt&&rt.render(G);const Lt=M.toneMapping;M.toneMapping=Ln;const Pt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),ct===!0&&yt.setGlobalState(M.clippingPlanes,z),lr(T,G,z),N.updateMultisampleRenderTarget(lt),N.updateRenderTargetMipmap(lt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ce=0,Se=U.length;ce<Se;ce++){const be=U[ce],{object:ue,geometry:It,material:re,group:Zt}=be;if(re.side===de&&ue.layers.test(z.layers)){const je=re.side;re.side=qe,re.needsUpdate=!0,Wc(ue,G,z,It,re,Zt),re.side=je,re.needsUpdate=!0,Yt=!0}}Yt===!0&&(N.updateMultisampleRenderTarget(lt),N.updateRenderTargetMipmap(lt))}M.setRenderTarget(ut,vt,Et),M.setClearColor(dt,at),Pt!==void 0&&(z.viewport=Pt),M.toneMapping=Lt}function lr(T,U,G){const z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,lt=T.length;O<lt;O++){const _t=T[O],{object:ut,geometry:vt,group:Et}=_t;let Lt=_t.material;Lt.allowOverride===!0&&z!==null&&(Lt=z),ut.layers.test(G.layers)&&Wc(ut,U,G,vt,Lt,Et)}}function Wc(T,U,G,z,O,lt){T.onBeforeRender(M,U,G,z,O,lt),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(M,U,G,z,T,lt),O.transparent===!0&&O.side===de&&O.forceSinglePass===!1?(O.side=qe,O.needsUpdate=!0,M.renderBufferDirect(G,U,z,O,T,lt),O.side=Jn,O.needsUpdate=!0,M.renderBufferDirect(G,U,z,O,T,lt),O.side=de):M.renderBufferDirect(G,U,z,O,T,lt),T.onAfterRender(M,U,G,z,O,lt)}function hr(T,U,G){U.isScene!==!0&&(U=he);const z=v.get(T),O=A.state.lights,lt=A.state.shadowsArray,_t=O.state.version,ut=Mt.getParameters(T,O.state,lt,U,G),vt=Mt.getProgramCacheKey(ut);let Et=z.programs;z.environment=T.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(T.isMeshStandardMaterial?$:q).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Et===void 0&&(T.addEventListener("dispose",bn),Et=new Map,z.programs=Et);let Lt=Et.get(vt);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===_t)return qc(T,ut),Lt}else ut.uniforms=Mt.getUniforms(T),T.onBeforeCompile(ut,M),Lt=Mt.acquireProgram(ut,vt),Et.set(vt,Lt),z.uniforms=ut.uniforms;const Pt=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=yt.uniform),qc(T,ut),z.needsLights=Iu(T),z.lightsStateVersion=_t,z.needsLights&&(Pt.ambientLightColor.value=O.state.ambient,Pt.lightProbe.value=O.state.probe,Pt.directionalLights.value=O.state.directional,Pt.directionalLightShadows.value=O.state.directionalShadow,Pt.spotLights.value=O.state.spot,Pt.spotLightShadows.value=O.state.spotShadow,Pt.rectAreaLights.value=O.state.rectArea,Pt.ltc_1.value=O.state.rectAreaLTC1,Pt.ltc_2.value=O.state.rectAreaLTC2,Pt.pointLights.value=O.state.point,Pt.pointLightShadows.value=O.state.pointShadow,Pt.hemisphereLights.value=O.state.hemi,Pt.directionalShadowMap.value=O.state.directionalShadowMap,Pt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pt.spotShadowMap.value=O.state.spotShadowMap,Pt.spotLightMatrix.value=O.state.spotLightMatrix,Pt.spotLightMap.value=O.state.spotLightMap,Pt.pointShadowMap.value=O.state.pointShadowMap,Pt.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function Xc(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=$r.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function qc(T,U){const G=v.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ru(T,U,G,z,O){U.isScene!==!0&&(U=he),N.resetTextureUnits();const lt=U.fog,_t=z.isMeshStandardMaterial?U.environment:null,ut=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ge,vt=(z.isMeshStandardMaterial?$:q).get(z.envMap||_t),Et=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Lt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color;let Se=Ln;z.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Se=M.toneMapping);const be=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=be!==void 0?be.length:0,It=v.get(z),re=A.state.lights;if(ct===!0&&(Ct===!0||T!==X)){const Ve=T===X&&z.id===W;yt.setState(z,T,Ve)}let Zt=!1;z.version===It.__version?(It.needsLights&&It.lightsStateVersion!==re.state.version||It.outputColorSpace!==ut||O.isBatchedMesh&&It.batching===!1||!O.isBatchedMesh&&It.batching===!0||O.isBatchedMesh&&It.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&It.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&It.instancing===!1||!O.isInstancedMesh&&It.instancing===!0||O.isSkinnedMesh&&It.skinning===!1||!O.isSkinnedMesh&&It.skinning===!0||O.isInstancedMesh&&It.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&It.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&It.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&It.instancingMorph===!1&&O.morphTexture!==null||It.envMap!==vt||z.fog===!0&&It.fog!==lt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==yt.numPlanes||It.numIntersection!==yt.numIntersection)||It.vertexAlphas!==Et||It.vertexTangents!==Lt||It.morphTargets!==Pt||It.morphNormals!==Yt||It.morphColors!==ce||It.toneMapping!==Se||It.morphTargetsCount!==ue)&&(Zt=!0):(Zt=!0,It.__version=z.version);let je=It.currentProgram;Zt===!0&&(je=hr(z,U,O));let Pi=!1,Je=!1,Ms=!1;const me=je.getUniforms(),Ye=It.uniforms;if(St.useProgram(je.program)&&(Pi=!0,Je=!0,Ms=!0),z.id!==W&&(W=z.id,Je=!0),Pi||X!==T){St.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),me.setValue(I,"projectionMatrix",T.projectionMatrix),me.setValue(I,"viewMatrix",T.matrixWorldInverse);const Ke=me.map.cameraPosition;Ke!==void 0&&Ke.setValue(I,jt.setFromMatrixPosition(T.matrixWorld)),fe.logarithmicDepthBuffer&&me.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&me.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,Je=!0,Ms=!0)}if(It.needsLights&&(re.state.directionalShadowMap.length>0&&me.setValue(I,"directionalShadowMap",re.state.directionalShadowMap,N),re.state.spotShadowMap.length>0&&me.setValue(I,"spotShadowMap",re.state.spotShadowMap,N),re.state.pointShadowMap.length>0&&me.setValue(I,"pointShadowMap",re.state.pointShadowMap,N)),O.isSkinnedMesh){me.setOptional(I,O,"bindMatrix"),me.setOptional(I,O,"bindMatrixInverse");const Ve=O.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),me.setValue(I,"boneTexture",Ve.boneTexture,N))}O.isBatchedMesh&&(me.setOptional(I,O,"batchingTexture"),me.setValue(I,"batchingTexture",O._matricesTexture,N),me.setOptional(I,O,"batchingIdTexture"),me.setValue(I,"batchingIdTexture",O._indirectTexture,N),me.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&me.setValue(I,"batchingColorTexture",O._colorsTexture,N));const sn=G.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Xt.update(O,G,je),(Je||It.receiveShadow!==O.receiveShadow)&&(It.receiveShadow=O.receiveShadow,me.setValue(I,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ye.envMap.value=vt,Ye.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Ye.envMapIntensity.value=U.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=Sx()),Je&&(me.setValue(I,"toneMappingExposure",M.toneMappingExposure),It.needsLights&&Pu(Ye,Ms),lt&&z.fog===!0&&Ut.refreshFogUniforms(Ye,lt),Ut.refreshMaterialUniforms(Ye,z,Bt,Gt,A.state.transmissionRenderTarget[T.id]),$r.upload(I,Xc(It),Ye,N)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&($r.upload(I,Xc(It),Ye,N),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&me.setValue(I,"center",O.center),me.setValue(I,"modelViewMatrix",O.modelViewMatrix),me.setValue(I,"normalMatrix",O.normalMatrix),me.setValue(I,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ve=z.uniformsGroups;for(let Ke=0,ga=Ve.length;Ke<ga;Ke++){const ui=Ve[Ke];Q.update(ui,je),Q.bind(ui,je)}}return je}function Pu(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Iu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(T,U,G){const z=v.get(T);z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),v.get(T.texture).__webglTexture=U,v.get(T.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const G=v.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const Du=I.createFramebuffer();this.setRenderTarget=function(T,U=0,G=0){B=T,P=U,F=G;let z=null,O=!1,lt=!1;if(T){const ut=v.get(T);if(ut.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(I.FRAMEBUFFER,ut.__webglFramebuffer),V.copy(T.viewport),k.copy(T.scissor),j=T.scissorTest,St.viewport(V),St.scissor(k),St.setScissorTest(j),W=-1;return}else if(ut.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(ut.__hasExternalTextures)N.rebindTextures(T,v.get(T.texture).__webglTexture,v.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Lt=T.depthTexture;if(ut.__boundDepthTexture!==Lt){if(Lt!==null&&v.has(Lt)&&(T.width!==Lt.image.width||T.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const vt=T.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(lt=!0);const Et=v.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Et[U])?z=Et[U][G]:z=Et[U],O=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?z=v.get(T).__webglMultisampledFramebuffer:Array.isArray(Et)?z=Et[G]:z=Et,V.copy(T.viewport),k.copy(T.scissor),j=T.scissorTest}else V.copy(Y).multiplyScalar(Bt).floor(),k.copy(Z).multiplyScalar(Bt).floor(),j=xt;if(G!==0&&(z=Du),St.bindFramebuffer(I.FRAMEBUFFER,z)&&St.drawBuffers(T,z),St.viewport(V),St.scissor(k),St.setScissorTest(j),O){const ut=v.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,G)}else if(lt){const ut=U;for(let vt=0;vt<T.textures.length;vt++){const Et=v.get(T.textures[vt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+vt,Et.__webglTexture,G,ut)}}else if(T!==null&&G!==0){const ut=v.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ut.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(T,U,G,z,O,lt,_t,ut=0){if(!(T&&T.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(vt=vt[_t]),vt){St.bindFramebuffer(I.FRAMEBUFFER,vt);try{const Et=T.textures[ut],Lt=Et.format,Pt=Et.type;if(!fe.textureFormatReadable(Lt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Pt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-z&&G>=0&&G<=T.height-O&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ut),I.readPixels(U,G,z,O,et.convert(Lt),et.convert(Pt),lt))}finally{const Et=B!==null?v.get(B).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(T,U,G,z,O,lt,_t,ut=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(vt=vt[_t]),vt)if(U>=0&&U<=T.width-z&&G>=0&&G<=T.height-O){St.bindFramebuffer(I.FRAMEBUFFER,vt);const Et=T.textures[ut],Lt=Et.format,Pt=Et.type;if(!fe.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.bufferData(I.PIXEL_PACK_BUFFER,lt.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ut),I.readPixels(U,G,z,O,et.convert(Lt),et.convert(Pt),0);const ce=B!==null?v.get(B).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,ce);const Se=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await _d(I,Se,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,lt),I.deleteBuffer(Yt),I.deleteSync(Se),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,G=0){const z=Math.pow(2,-G),O=Math.floor(T.image.width*z),lt=Math.floor(T.image.height*z),_t=U!==null?U.x:0,ut=U!==null?U.y:0;N.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,_t,ut,O,lt),St.unbindTexture()};const Lu=I.createFramebuffer(),Nu=I.createFramebuffer();this.copyTextureToTexture=function(T,U,G=null,z=null,O=0,lt=null){lt===null&&(O!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=O,O=0):lt=0);let _t,ut,vt,Et,Lt,Pt,Yt,ce,Se;const be=T.isCompressedTexture?T.mipmaps[lt]:T.image;if(G!==null)_t=G.max.x-G.min.x,ut=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,Lt=G.min.y,Pt=G.isBox3?G.min.z:0;else{const sn=Math.pow(2,-O);_t=Math.floor(be.width*sn),ut=Math.floor(be.height*sn),T.isDataArrayTexture?vt=be.depth:T.isData3DTexture?vt=Math.floor(be.depth*sn):vt=1,Et=0,Lt=0,Pt=0}z!==null?(Yt=z.x,ce=z.y,Se=z.z):(Yt=0,ce=0,Se=0);const ue=et.convert(U.format),It=et.convert(U.type);let re;U.isData3DTexture?(N.setTexture3D(U,0),re=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),re=I.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),re=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Zt=I.getParameter(I.UNPACK_ROW_LENGTH),je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Pi=I.getParameter(I.UNPACK_SKIP_PIXELS),Je=I.getParameter(I.UNPACK_SKIP_ROWS),Ms=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Et),I.pixelStorei(I.UNPACK_SKIP_ROWS,Lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pt);const me=T.isDataArrayTexture||T.isData3DTexture,Ye=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const sn=v.get(T),Ve=v.get(U),Ke=v.get(sn.__renderTarget),ga=v.get(Ve.__renderTarget);St.bindFramebuffer(I.READ_FRAMEBUFFER,Ke.__webglFramebuffer),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,ga.__webglFramebuffer);for(let ui=0;ui<vt;ui++)me&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(T).__webglTexture,O,Pt+ui),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(U).__webglTexture,lt,Se+ui)),I.blitFramebuffer(Et,Lt,_t,ut,Yt,ce,_t,ut,I.DEPTH_BUFFER_BIT,I.NEAREST);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||T.isRenderTargetTexture||v.has(T)){const sn=v.get(T),Ve=v.get(U);St.bindFramebuffer(I.READ_FRAMEBUFFER,Lu),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nu);for(let Ke=0;Ke<vt;Ke++)me?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,O,Pt+Ke):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,O),Ye?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ve.__webglTexture,lt,Se+Ke):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ve.__webglTexture,lt),O!==0?I.blitFramebuffer(Et,Lt,_t,ut,Yt,ce,_t,ut,I.COLOR_BUFFER_BIT,I.NEAREST):Ye?I.copyTexSubImage3D(re,lt,Yt,ce,Se+Ke,Et,Lt,_t,ut):I.copyTexSubImage2D(re,lt,Yt,ce,Et,Lt,_t,ut);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ye?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(re,lt,Yt,ce,Se,_t,ut,vt,ue,It,be.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(re,lt,Yt,ce,Se,_t,ut,vt,ue,be.data):I.texSubImage3D(re,lt,Yt,ce,Se,_t,ut,vt,ue,It,be):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,lt,Yt,ce,_t,ut,ue,It,be.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,lt,Yt,ce,be.width,be.height,ue,be.data):I.texSubImage2D(I.TEXTURE_2D,lt,Yt,ce,_t,ut,ue,It,be);I.pixelStorei(I.UNPACK_ROW_LENGTH,Zt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ms),lt===0&&U.generateMipmaps&&I.generateMipmap(re),St.unbindTexture()},this.initRenderTarget=function(T){v.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),St.unbindTexture()},this.resetState=function(){P=0,F=0,B=null,St.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const jr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Tx=new ar(-1,1,1,-1,0,1);class Ex extends ve{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const Ax=new Ex;class Mu{constructor(t){this._mesh=new J(Ax,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Tx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Su extends or{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=na.clone(t.uniforms),this.material=new Be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Mu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class dh extends or{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class wx extends or{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Cx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Su(jr),this.copyPass.material.blending=Dn,this.clock=new mu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}dh!==void 0&&(a instanceof dh?n=!0:a instanceof wx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Rx extends or{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Rt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Px={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class gs extends or{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new Rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(s,a,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new $e(s,a,{type:nn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new $e(s,a,{type:nn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=Px;this.highPassUniforms=na.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=na.clone(jr.uniforms),this.blendMaterial=new Be({uniforms:this.copyUniforms,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,premultipliedAlpha:!0,blending:wn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Rt,this._oldClearAlpha=1,this._basic=new ee,this._fsQuad=new Mu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new nt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=gs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=gs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}gs.BlurDirectionX=new nt(1,0);gs.BlurDirectionY=new nt(0,1);class Ix{constructor(){this.remnant=0,this.heldRemnant=0,this.deathCount=0,this.deathLessons={},this.infusions={strength:0,vitality:0,stamina:0,spirit:0},this.MAX_TOTAL_DEPTH=20,this.MAX_TRACK_DEPTH=5,this.bonfirePosition=new E(0,0,5),this.maxHealth=100,this.maxStamina=100,this.maxPosture=100,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.isDead=!1,this.checkpoint=new E(0,0,5),this.deathScreenEl=document.getElementById("death-screen"),this.player=null,this.enemyManager=null,this.bloodstain=null,this.bloodstainMesh=null,this.staminaRegenDelay=.5,this.staminaRegenRate=25,this.staminaRegenTimer=0,this.postureRegenDelay=1,this.postureRegenRate=15,this.postureRegenTimer=0,this.audioManager=null,this.hitstopActive=!1,this.hitstopDuration=0,this.hitstopTimer=0,this.hud=null,this.cameraController=null}triggerHitstop(t=.04){this.hitstopActive=!0,this.hitstopDuration=t,this.hitstopTimer=0}hitstopLight(){this.triggerHitstop(.035)}hitstopHeavy(){this.triggerHitstop(.06)}isInHitstop(){return this.hitstopActive}updateHitstop(t){return this.hitstopActive?(this.hitstopTimer+=t,this.hitstopTimer>=this.hitstopDuration&&(this.hitstopActive=!1,this.hitstopTimer=0),!0):!1}update(t){this.isDead||(this.staminaRegenTimer+=t,this.staminaRegenTimer>=this.staminaRegenDelay&&this.stamina<this.maxStamina&&(this.stamina=Math.min(this.maxStamina,this.stamina+this.staminaRegenRate*t)),this.postureRegenTimer+=t,this.postureRegenTimer>=this.postureRegenDelay&&this.posture>0&&(this.posture=Math.max(0,this.posture-this.postureRegenRate*t)))}canUseStamina(t){const e=this.stamina>=t;return!e&&this.hud&&(this.hud.flashStaminaDepleted(),this.audioManager&&this.player&&this.audioManager.play("staminaDepleted",{position:this.player.mesh.position,volume:.4})),e}useStamina(t){this.stamina=Math.max(0,this.stamina-t),this.staminaRegenTimer=0,this.stamina<15&&this.hud&&this.hud.flashStaminaDepleted()}takeDamage(t,e="physical",n=0,i=!1){if(this.isDead)return;const s=this.deathLessons[e]||0;let a=Math.floor(t*(1-s));if(i){const o=a*.5;if(this.canUseStamina(o))this.useStamina(o),a=Math.floor(a*.2),n*=.5;else return this.stamina=0,this.posture=this.maxPosture,"guard_broken"}return this.health-=a,this.posture=Math.min(this.maxPosture,this.posture+n),this.postureRegenTimer=0,this.audioManager&&this.player&&this.audioManager.play("playerDamage",{position:this.player.mesh.position,volume:.7}),this.health<=0?(this.die(e),"died"):this.posture>=this.maxPosture?(this.audioManager&&this.player&&this.audioManager.play("postureBreak",{position:this.player.mesh.position,volume:.8}),"posture_broken"):"hit"}die(t="unknown"){this.isDead=!0,this.deathCount++,this.health=0,this.audioManager&&this.audioManager.play("death",{volume:.8});const e=this.player?this.player.mesh.position.clone():this.checkpoint.clone();if(this.particleManager&&this.player&&this.particleManager.spawnPlayerDeathEffect(e,this.camera),this.bloodstainMesh&&this.scene&&(this.scene.remove(this.bloodstainMesh),this.bloodstainMesh=null),this.remnant>0&&this.scene){this.heldRemnant=this.remnant,this.remnant=0,this.bloodstain=e.clone(),this.bloodstain.y=.05;const n=new is(.5,16),i=new ee({color:11154227,transparent:!0,opacity:.8,side:de});this.bloodstainMesh=new J(n,i),this.bloodstainMesh.rotation.x=-Math.PI/2,this.bloodstainMesh.position.copy(this.bloodstain),this.scene.add(this.bloodstainMesh),console.log(`[REMNANT] Dropped ${this.heldRemnant} remnant at bloodstain`)}else this.heldRemnant=0,this.bloodstain=null;this.deathLessons[t]||(this.deathLessons[t]=0),this.deathLessons[t]=Math.min(.25,this.deathLessons[t]+.005),this.deathScreenEl&&this.deathScreenEl.classList.add("visible"),setTimeout(()=>this.respawn(),3e3)}respawn(){this.isDead=!1,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.player&&(this.player.resetPosition(),console.log("[RESPAWN] Player reset to checkpoint")),this.enemyManager&&this.enemyManager.resetAll(),this.deathScreenEl&&this.deathScreenEl.classList.remove("visible")}setCheckpoint(t){this.checkpoint.copy(t)}setEntities(t,e,n,i=null){this.player=t,this.enemyManager=e,this.scene=n,this.camera=i}addRemnant(t){this.remnant+=t}collectBloodstain(){return!this.bloodstain||!this.player?!1:this.player.mesh.position.distanceTo(this.bloodstain)<2?(this.remnant+=this.heldRemnant,console.log(`[REMNANT] Recovered ${this.heldRemnant} remnant from bloodstain!`),this.audioManager&&this.audioManager.play("itemPickup",{volume:.6}),this.heldRemnant=0,this.bloodstainMesh&&this.scene&&this.scene.remove(this.bloodstainMesh),this.bloodstain=null,this.bloodstainMesh=null,!0):!1}getTotalDepth(){return this.infusions.bone+this.infusions.blood+this.infusions.stone}canInfuse(t){return!(!this.infusions.hasOwnProperty(t)||this.infusions[t]>=this.MAX_TRACK_DEPTH||this.getTotalDepth()>=this.MAX_TOTAL_DEPTH)}getInfusionCost(t,e){return 100*e*e}infuse(t){if(!this.canInfuse(t))return!1;const e=this.infusions[t]+1,n=this.getInfusionCost(t,e);return this.remnant<n?!1:(this.remnant-=n,this.infusions[t]=e,this.audioManager&&this.audioManager.play("menuConfirm",{volume:.5}),!0)}getInfusionBonuses(){return{damageMult:1+this.infusions.strength*.1,bonusHealth:this.infusions.vitality*20,bonusStamina:this.infusions.stamina*15,staminaRegenMult:1+this.infusions.stamina*.1,postureResist:this.infusions.spirit*.05,postureRegenMult:1+this.infusions.spirit*.15}}applyInfusionBonuses(){const t=this.getInfusionBonuses();this.maxHealth=100+t.bonusHealth,this.maxStamina=100+t.bonusStamina,this.isDead||(this.health=Math.min(this.health,this.maxHealth),this.stamina=Math.min(this.stamina,this.maxStamina))}isNearBonfire(){return this.player?this.player.mesh.position.distanceTo(this.bonfirePosition)<3:!1}getTrackInfo(t){const e=this.infusions[t]||0,n=e+1,i=n<=this.MAX_TRACK_DEPTH?this.getInfusionCost(t,n):null,s=i!==null&&this.remnant>=i,a=e>=this.MAX_TRACK_DEPTH,o={strength:{name:"Strength",desc:"+10% damage per level",bonus:`+${e*10}% damage`},vitality:{name:"Vitality",desc:"+20 max HP per level",bonus:`+${e*20} HP`},stamina:{name:"Stamina",desc:"+15 max stamina, +10% regen per level",bonus:`+${e*15} stamina`},spirit:{name:"Spirit",desc:"+5% posture resist, +15% posture regen per level",bonus:`+${e*5}% resist`}};return{level:e,nextLevel:n,cost:i,canAfford:s,maxed:a,...o[t]}}}function fh(r,t){if(t===ad)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===$o||t===Bh){let e=r.getIndex();if(e===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===$o)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class Dx extends Ri{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Ox(e)}),this.register(function(e){return new Bx(e)}),this.register(function(e){return new Yx(e)}),this.register(function(e){return new Kx(e)}),this.register(function(e){return new $x(e)}),this.register(function(e){return new zx(e)}),this.register(function(e){return new Gx(e)}),this.register(function(e){return new Vx(e)}),this.register(function(e){return new Hx(e)}),this.register(function(e){return new Fx(e)}),this.register(function(e){return new Wx(e)}),this.register(function(e){return new kx(e)}),this.register(function(e){return new qx(e)}),this.register(function(e){return new Xx(e)}),this.register(function(e){return new Nx(e)}),this.register(function(e){return new jx(e)}),this.register(function(e){return new Jx(e)})}load(t,e,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ws.extractUrlBase(t);a=Ws.resolveURL(l,this.path)}else a=Ws.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new ra(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,a,function(h){e(h),s.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===bu){try{a[Kt.KHR_BINARY_GLTF]=new Zx(t)}catch(u){i&&i(u);return}s=JSON.parse(a[Kt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new uv(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Kt.KHR_MATERIALS_UNLIT:a[u]=new Ux;break;case Kt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Qx(s,this.dracoLoader);break;case Kt.KHR_TEXTURE_TRANSFORM:a[u]=new tv;break;case Kt.KHR_MESH_QUANTIZATION:a[u]=new ev;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function Lx(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Kt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Nx{constructor(t){this.parser=t,this.name=Kt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let l;const h=new Rt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ge);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ji(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new An(h),l.distance=u;break;case"spot":l=new lp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),En(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class Ux{constructor(){this.name=Kt.KHR_MATERIALS_UNLIT}getMaterialType(){return ee}extendParams(t,e,n){const i=[];t.color=new Rt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ge),t.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Ee))}return Promise.all(i)}}class Fx{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class Ox{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new nt(o,o)}return Promise.all(s)}}class Bx{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class kx{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class zx{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Rt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Ge)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Ee)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Gx{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Vx{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Rt().setRGB(o[0],o[1],o[2],Ge),Promise.all(s)}}class Hx{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Wx{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new Rt().setRGB(o[0],o[1],o[2],Ge),a.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Ee)),Promise.all(s)}}class Xx{constructor(t){this.parser=t,this.name=Kt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}}class qx{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Yx{constructor(t){this.parser=t,this.name=Kt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}}class Kx{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(t,a.source,c)}}class $x{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(t,a.source,c)}}class jx{constructor(t){this.name=Kt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Jx{constructor(t){this.name=Kt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==an.TRIANGLES&&l.mode!==an.TRIANGLE_STRIP&&l.mode!==an.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new zt,m=new E,p=new yn,x=new E(1,1,1),y=new lf(g.geometry,g.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&x.fromBufferAttribute(c.SCALE,S),y.setMatrixAt(S,_.compose(m,p,x));for(const S in c)if(S==="_COLOR_0"){const A=c[S];y.instanceColor=new Jo(A.array,A.itemSize,A.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);xe.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const bu="glTF",Ns=12,ph={JSON:1313821514,BIN:5130562};class Zx{constructor(t){this.name=Kt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ns),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==bu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ns,s=new DataView(t,Ns);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===ph.JSON){const l=new Uint8Array(t,Ns+a,o);this.content=n.decode(l)}else if(c===ph.BIN){const l=Ns+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Qx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Kt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=rc[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=rc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[t.attributes[h]],f=ss[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,Ge,d)})})}}class tv{constructor(){this.name=Kt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class ev{constructor(){this.name=Kt.KHR_MESH_QUANTIZATION}}class Tu extends sr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[s+a];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*l,_=g-l,m=-2*f+3*d,p=f-d,x=1-m,y=p-d+u;for(let S=0;S!==o;S++){const A=a[_+S+o],w=a[_+S+c]*h,R=a[g+S+o],D=a[g+S]*h;s[S]=x*A+y*w+m*R+p*D}return s}}const nv=new yn;class iv extends Tu{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return nv.fromArray(s).normalize().toArray(s),s}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mh={9728:Ie,9729:De,9984:Rh,9985:Wr,9986:Fs,9987:Yn},gh={33071:Pn,33648:Jr,10497:ln},eo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sv={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Ys},no={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),r.DefaultMaterial}function xi(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function En(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function av(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function ov(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cv(r){let t;const e=r.extensions&&r.extensions[Kt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+io(e.attributes):t=r.indices+":"+io(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+io(r.targets[n]);return t}function io(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function ac(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const hv=new zt;class uv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Lx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new pu(this.options.manager):this.textureLoader=new fp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ra(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return xi(s,o,i),En(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Kt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Ws.resolveURL(e.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=eo[i.type],o=ss[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Pe(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=eo[i.type],l=ss[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(x);y||(_=new l(o,p*f,i.count*f/h),y=new Sc(_,f/h),e.cache.add(x,y)),m=new hs(y,c,d%f/h,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),m=new Pe(_,c,g);if(i.sparse!==void 0){const p=eo.SCALAR,x=ss[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,A=new x(a[1],y,i.sparse.count*p),w=new l(a[2],S,i.sparse.count*c);o!==null&&(m=new Pe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,D=A.length;R<D;R++){const M=A[R];if(m.setX(M,w[R*c]),c>=2&&m.setY(M,w[R*c+1]),c>=3&&m.setZ(M,w[R*c+2]),c>=4&&m.setW(M,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,a=e.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,n){const i=this,s=this.json,a=s.textures[t],o=s.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=mh[d.magFilter]||De,h.minFilter=mh[d.minFilter]||Yn,h.wrapS=gh[d.wrapS]||ln,h.wrapT=gh[d.wrapT]||ln,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ie&&h.minFilter!==De,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=i.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Le(_);m.needsUpdate=!0,d(m)}),e.load(Ws.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),En(u,a),u.userData.mimeType=a.mimeType||lv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Kt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Kt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Kt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new wc,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Qh,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Ft}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let a;const o={},c=s.extensions||{},l=[];if(c[Kt.KHR_MATERIALS_UNLIT]){const u=i[Kt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,e))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Rt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ge),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",u.baseColorTexture,Ee)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=de);const h=s.alphaMode||no.OPAQUE;if(h===no.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===no.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ee&&(l.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==ee&&(l.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ee){const u=s.emissiveFactor;o.emissive=new Rt().setRGB(u[0],u[1],u[2],Ge)}return s.emissiveTexture!==void 0&&a!==ee&&l.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,Ee)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),En(u,s),e.associations.set(u,{materials:t}),s.extensions&&xi(i,u,s),u})}createUniqueName(t){const e=ie.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Kt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return _h(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],h=cv(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Kt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=_h(new ve,l,e),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?rv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const x=l[f];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new af(_,x):new J(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===an.TRIANGLE_STRIP?p.geometry=fh(p.geometry,Bh):m.mode===an.TRIANGLE_FAN&&(p.geometry=fh(p.geometry,$o));else if(m.mode===an.LINES)p=new ff(_,x);else if(m.mode===an.LINE_STRIP)p=new Ac(_,x);else if(m.mode===an.LINE_LOOP)p=new pf(_,x);else if(m.mode===an.POINTS)p=new tu(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ov(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),En(p,s),m.extensions&&xi(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&xi(i,u[0],s),u[0];const d=new Re;s.extensions&&xi(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Xe(ci.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ar(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),En(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new zt;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Tc(o,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,S=d.length;y<S;y++){const A=d[y],w=f[y],R=g[y],D=_[y],M=m[y];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const b=n._createAnimationTracks(A,w,R,D,M);if(b)for(let P=0;P<b.length;P++)p.push(b[P])}const x=new nc(s,void 0,p);return En(x,i),x})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,hv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Zh:l.length>1?h=new Re:l.length===1?h=l[0]:h=new xe,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),En(h,s),s.extensions&&xi(n,h,s),s.matrix!==void 0){const u=new zt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new Re;n.name&&(s.name=i.createUniqueName(n.name)),En(s,n),n.extensions&&xi(e,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Mn||d instanceof Le)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){const a=[],o=t.name?t.name:t.uuid,c=[];ri[s.path]===ri.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ri[s.path]){case ri.weights:l=fs;break;case ri.rotation:l=ps;break;case ri.translation:case ri.scale:l=ms;break;default:n.itemSize===1?l=fs:l=ms;break}const h=i.interpolation!==void 0?sv[i.interpolation]:Ks,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ri[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=ac(e.constructor),i=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof ps?iv:Tu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dv(r,t,e){const n=t.attributes,i=new pn;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),o.normalized){const h=ac(ss[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const o=new E,c=new E;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ac(ss[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Fn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function _h(r,t,e){const n=t.attributes,i=[];function s(a,o){return e.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=rc[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(t.indices!==void 0&&!r.index){const a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});i.push(a)}return Jt.workingColorSpace!==Ge&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Jt.workingColorSpace}" not supported.`),En(r,t),dv(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?av(r,t.targets,e):r})}const so=new WeakMap;class fv extends Ri{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,n,i){const s=new ra(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,a=>{this.parse(a,e,i)},n,i)}parse(t,e,n=()=>{}){this.decodeDracoFile(t,e,null,null,Ee,n).catch(n)}decodeDracoFile(t,e,n,i,s=Ge,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(t,o).then(e).catch(a)}decodeGeometry(t,e){const n=JSON.stringify(e);if(so.has(t)){const c=so.get(t);if(c.key===n)return c.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=t.byteLength,o=this._getWorker(s,a).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[s]={resolve:l,reject:h},i.postMessage({type:"decode",id:s,taskConfig:e,buffer:t},[t])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),so.set(t,{key:n,promise:o}),o}_createGeometry(t){const e=new ve;t.index&&e.setIndex(new Pe(t.index.array,1));for(let n=0;n<t.attributes.length;n++){const{name:i,array:s,itemSize:a,stride:o,vertexColorSpace:c}=t.attributes[n];let l;if(a===o)l=new Pe(s,a);else{const h=new Sc(s,o);l=new hs(h,a,0)}i==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(s instanceof Float32Array)),e.setAttribute(i,l)}return e}_assignVertexColorSpace(t,e){if(e!==Ee)return;const n=new Rt;for(let i=0,s=t.count;i<s;i++)n.fromBufferAttribute(t,i),Jt.colorSpaceToWorking(n,Ee),t.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(t,e){const n=new ra(this.manager);return n.setPath(this.decoderPath),n.setResponseType(e),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(t,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(n=>{const i=n[0];t||(this.decoderConfig.wasmBinary=n[1]);const s=pv.toString(),a=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[t]=e,n._taskLoad+=e,n})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function pv(){let r,t;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,t=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const c=o.buffer,l=o.taskConfig;t.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=e(u,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function e(a,o,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=o.GetEncodedGeometryType(c);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(c,c.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let x,y;if(l.useUniqueIDs)y=h[m],x=o.GetAttributeByUniqueId(d,y);else{if(y=o.GetAttributeId(d,a[h[m]]),y===-1)continue;x=o.GetAttribute(d,y)}const S=i(a,o,d,m,p,x);m==="color"&&(S.vertexColorSpace=l.vertexColorSpace),_.attributes.push(S)}return g===a.TRIANGULAR_MESH&&(_.index=n(a,o,d)),a.destroy(d),_}function n(a,o,c){const h=c.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,c,l,h,u){const d=c.num_points(),f=u.num_components(),g=s(a,h),_=f*h.BYTES_PER_ELEMENT,m=Math.ceil(_/4)*4,p=m/h.BYTES_PER_ELEMENT,x=d*_,y=d*m,S=a._malloc(x);o.GetAttributeDataArrayForAllPoints(c,u,g,x,S);const A=new h(a.HEAPF32.buffer,S,x/h.BYTES_PER_ELEMENT);let w;if(_===m)w=A.slice();else{w=new h(y/h.BYTES_PER_ELEMENT);let R=0;for(let D=0,M=A.length;D<M;D++){for(let b=0;b<f;b++)w[R+b]=A[D*f+b];R+=p}}return a._free(S),{name:l,count:d,itemSize:f,array:w,stride:p}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class mv{constructor(){this.gltfLoader=new Dx,this.dracoLoader=new fv,this.textureLoader=new pu,this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/"),this.dracoLoader.setDecoderConfig({type:"js"}),this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.textureCache=new Map,this.loadingPromises=new Map,this.debug=!1}async loadModel(t,e={}){const n=t+JSON.stringify(e);if(this.modelCache.has(n)){const s=this.modelCache.get(n);return this._cloneGLTF(s)}if(this.loadingPromises.has(n)){const s=await this.loadingPromises.get(n);return this._cloneGLTF(s)}const i=new Promise((s,a)=>{this.debug&&console.log(`[AssetManager] Loading: ${t}`),this.gltfLoader.load(t,o=>{this.debug&&(console.log(`[AssetManager] Loaded: ${t}`),console.log(`  - Animations: ${o.animations.length}`),o.animations.forEach((l,h)=>{console.log(`    ${h}: ${l.name} (${l.duration.toFixed(2)}s)`)})),e.scale&&o.scene.scale.setScalar(e.scale),o.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.material&&(Array.isArray(l.material)?l.material.forEach(h=>this._fixMaterial(h)):this._fixMaterial(l.material)))});const c={scene:o.scene,animations:o.animations,gltf:o};this.modelCache.set(n,c),s(c)},o=>{if(this.debug&&o.total>0){const c=(o.loaded/o.total*100).toFixed(1);console.log(`[AssetManager] Loading ${t}: ${c}%`)}},o=>{console.error(`[AssetManager] Failed to load: ${t}`,o),a(o)})});this.loadingPromises.set(n,i);try{const s=await i;return this.loadingPromises.delete(n),this._cloneGLTF(s)}catch(s){throw this.loadingPromises.delete(n),s}}_cloneGLTF(t){return{scene:t.scene.clone(),animations:t.animations,gltf:t.gltf}}_fixMaterial(t){(t.isMeshStandardMaterial||t.isMeshPhysicalMaterial)&&(t.metalness===void 0&&(t.metalness=0),t.roughness===void 0&&(t.roughness=.8)),t.transparent&&(t.depthWrite=!1,t.side=de)}async loadTexture(t,e={}){return this.textureCache.has(t)?this.textureCache.get(t):new Promise((n,i)=>{this.textureLoader.load(t,s=>{e.repeat&&(s.wrapS=ln,s.wrapT=ln,s.repeat.set(e.repeat[0],e.repeat[1])),e.encoding?s.colorSpace=e.encoding:s.colorSpace=Ee,e.anisotropy&&(s.anisotropy=e.anisotropy),this.textureCache.set(t,s),n(s)},void 0,i)})}async preload(t){const e=t.map(n=>n.type==="model"?this.loadModel(n.path,n.options):n.type==="texture"?this.loadTexture(n.path,n.options):Promise.resolve());return Promise.all(e)}createAnimationSystem(t,e){const n=new wp(t),i=new Map;return e.forEach(s=>{const a=n.clipAction(s);i.set(s.name,a),i.set(s.name.toLowerCase(),a)}),{mixer:n,actions:i,play:(s,a={})=>{const o=i.get(s)||i.get(s.toLowerCase());return o?(o.reset(),a.loop!==void 0&&o.setLoop(a.loop?Oh:Fh),a.clampWhenFinished&&(o.clampWhenFinished=!0),a.timeScale&&(o.timeScale=a.timeScale),a.fadeIn&&o.fadeIn(a.fadeIn),o.play(),o):(this.debug&&console.warn(`[AssetManager] Animation not found: ${s}`),null)},crossFade:(s,a,o=.2)=>{const c=i.get(s)||i.get(s.toLowerCase()),l=i.get(a)||i.get(a.toLowerCase());return l?(l.reset(),l.play(),c&&c.isRunning()&&c.crossFadeTo(l,o,!0),l):null},stopAll:()=>{n.stopAllAction()},update:s=>{n.update(s)}}}clearCache(){this.modelCache.clear(),this.textureCache.clear()}dispose(){this.modelCache.forEach(t=>{t.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}),this.textureCache.forEach(t=>{t.dispose()}),this.dracoLoader.dispose(),this.clearCache()}}const aa=new mv,Nt={IDLE:"idle",MOVING:"moving",DODGING:"dodging",ATTACKING:"attacking",HEAVY_ATTACKING:"heavy_attacking",BLOCKING:"blocking",STAGGERED:"staggered",DEAD:"dead"},vi={dodge:20,lightAttack:15,heavyAttack:30},xn={dodgeDuration:.45,dodgeIframes:.3,lightAttackDuration:.4,heavyAttackDuration:.7,lightHitStart:.1,lightHitEnd:.25,heavyHitStart:.2,heavyHitEnd:.4,staggerDuration:.8,comboWindow:.15},gv={[Nt.IDLE]:"Idle",[Nt.MOVING]:"Walking",[Nt.DODGING]:"Jump",[Nt.ATTACKING]:"Punch",[Nt.HEAVY_ATTACKING]:"Punch",[Nt.BLOCKING]:"Idle",[Nt.STAGGERED]:"No",[Nt.DEAD]:"Death"};class _v{constructor(t,e,n){this.scene=t,this.gm=e,this.input=n,this.cameraController=null,this.state=Nt.IDLE,this.stateTimer=0,this.isInvincible=!1,this.attackCombo=0,this.hitThisSwing=!1,this.velocity=new E,this.moveSpeed=6,this.dodgeSpeed=14,this.gravity=-30,this.grounded=!0,this.currentMoveVelocity=new E,this.moveAcceleration=35,this.moveDeceleration=25,this.dodgeGhostMeshes=[],this.lastGhostSpawnTime=0,this.ghostSpawnInterval=.05,this.moveDir=new E,this.dodgeDir=new E,this.facingAngle=0,this.modelLoaded=!1,this.animSystem=null,this.currentAnim=null,this.gltfModel=null,this.mesh=new Re,this.mesh.position.set(0,0,5),this._createFallbackMesh(),this.attackRange=2,this.lightDamage=15,this.heavyDamage=35,this.lightPostureDmg=10,this.heavyPostureDmg=25,t.add(this.mesh),this._loadGLTFModel()}_createFallbackMesh(){const t=new Ft({color:5921384,roughness:.35,metalness:.85}),e=new Rn(.35,.6,8,16);this.fallbackBody=new J(e,t),this.fallbackBody.position.y=1.1,this.fallbackBody.castShadow=!0,this.mesh.add(this.fallbackBody);const n=new Te(.22,16,12);this.fallbackHead=new J(n,t),this.fallbackHead.position.y=1.7,this.mesh.add(this.fallbackHead);const i=new Ft({color:6737151,emissive:4491468,emissiveIntensity:3}),s=new ye(.2,.04,.12);this.visor=new J(s,i),this.visor.position.set(0,1.68,.25),this.mesh.add(this.visor),this.body=this.fallbackBody}async _loadGLTFModel(){try{console.log("[Player] Loading GLTF model...");const{scene:t,animations:e}=await aa.loadModel("/assets/models/robot_expressive.glb",{scale:.8});this.gltfModel=t,this.gltfModel.position.y=0,this.gltfModel.rotation.y=Math.PI,this.gltfModel.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.userData.originalMaterial=n.material.clone())}),this.fallbackBody&&(this.fallbackBody.visible=!1),this.fallbackHead&&(this.fallbackHead.visible=!1),this.mesh.add(this.gltfModel),e&&e.length>0&&(this.animSystem=aa.createAnimationSystem(this.gltfModel,e),console.log("[Player] Available animations:",e.map(n=>n.name)),this._playAnimation(Nt.IDLE,{loop:!0})),this.modelLoaded=!0,this.body=this.gltfModel,console.log("[Player] GLTF model loaded successfully")}catch(t){console.error("[Player] Failed to load GLTF model:",t)}}_playAnimation(t,e={}){if(!this.animSystem)return;const n=gv[t];if(!n||this.currentAnim===n&&t!==Nt.ATTACKING)return;const i={loop:t===Nt.IDLE||t===Nt.MOVING||t===Nt.BLOCKING,fadeIn:.2,timeScale:1,clampWhenFinished:t===Nt.DEAD};t===Nt.ATTACKING?(i.timeScale=1.3+this.attackCombo*.1,i.loop=!1):t===Nt.HEAVY_ATTACKING?(i.timeScale=.9,i.loop=!1):t===Nt.DODGING?(i.timeScale=1.5,i.loop=!1):t===Nt.MOVING&&(i.timeScale=1.2);const s={...i,...e};this.currentAnim?this.animSystem.crossFade(this.currentAnim,n,s.fadeIn):this.animSystem.play(n,s),this.currentAnim=n}update(t){if(this.gm.isDead){this.state=Nt.DEAD,this.currentAnim!=="Death"&&this._playAnimation(Nt.DEAD);return}switch(this.animSystem&&this.animSystem.update(t),this.stateTimer+=t,this.state){case Nt.IDLE:case Nt.MOVING:this._processMovement(t),this._processCombatInput();break;case Nt.DODGING:this._processDodge(t);break;case Nt.ATTACKING:case Nt.HEAVY_ATTACKING:this._processAttack(t);break;case Nt.BLOCKING:this._processBlock(t);break;case Nt.STAGGERED:this.stateTimer>=xn.staggerDuration&&this._changeState(Nt.IDLE);break}this.mesh.position.y>0&&(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.velocity.y=0,this.grounded=!0))}_processMovement(t){const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const n=this._getCameraYaw(),i=new E(-Math.sin(n),0,-Math.cos(n)),s=new E(Math.cos(n),0,-Math.sin(n));this.moveDir.set(0,0,0).addScaledVector(i,-e.z).addScaledVector(s,e.x).normalize();const a=this.moveDir.clone().multiplyScalar(this.moveSpeed);this.currentMoveVelocity.lerp(a,this.moveAcceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this.facingAngle=Math.atan2(this.moveDir.x,this.moveDir.z),this.mesh.rotation.y=ci.lerp(this.mesh.rotation.y,this.facingAngle,10*t),this.state!==Nt.MOVING&&this._changeState(Nt.MOVING)}else this.currentMoveVelocity.length()>.01?(this.currentMoveVelocity.lerp(new E(0,0,0),this.moveDeceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t)):this.currentMoveVelocity.set(0,0,0),this.state===Nt.MOVING&&this._changeState(Nt.IDLE)}_processCombatInput(){if(this.input.lockOn&&this._toggleLockOn(),this.input.dodge&&this.gm.canUseStamina(vi.dodge)){this._startDodge();return}if(this.input.lightAttack&&this.gm.canUseStamina(vi.lightAttack)){this._startAttack(!1);return}if(this.input.heavyAttack&&this.gm.canUseStamina(vi.heavyAttack)){this._startAttack(!0);return}this.input.block&&this._changeState(Nt.BLOCKING)}_toggleLockOn(){if(!this.cameraController||!this.gm.enemyManager)return;const e=this.gm.enemyManager.enemies.filter(o=>!o.isDead);if(this.gm.enemyManager.boss&&!this.gm.enemyManager.boss.isDead&&e.push(this.gm.enemyManager.boss),e.length===0){this.cameraController.clearLockOn();return}const n=20,i=this.mesh.position,s=e.map(o=>({enemy:o,dist:i.distanceTo(o.mesh.position)})).filter(o=>o.dist<=n).sort((o,c)=>o.dist-c.dist);if(s.length===0){this.cameraController.clearLockOn();return}const a=this.cameraController.lockOnTarget;if(a&&!a.isDead){const o=s.findIndex(c=>c.enemy===a);if(o!==-1&&s.length>1){const c=(o+1)%s.length;this.cameraController.setLockOnTarget(s[c].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.3})}else this.cameraController.clearLockOn(),this.gm.audioManager&&this.gm.audioManager.play("menuBack",{volume:.3})}else this.cameraController.setLockOnTarget(s[0].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.4})}_startDodge(){this.gm.useStamina(vi.dodge),this.gm.audioManager&&this.gm.audioManager.play("dodge",{position:this.mesh.position,volume:.5});const t=this.input.getMovementVector();if(t.x!==0||t.z!==0){const e=this._getCameraYaw(),n=new E(-Math.sin(e),0,-Math.cos(e)),i=new E(-Math.cos(e),0,Math.sin(e));this.dodgeDir.set(0,0,0).addScaledVector(n,-t.z).addScaledVector(i,t.x).normalize()}else this.dodgeDir.set(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.isInvincible=!0,this.lastGhostSpawnTime=0,this._flashDodgeStart(),this._changeState(Nt.DODGING)}_flashDodgeStart(){this._flashModel(65535,100)}_flashModel(t,e){if(this.gltfModel&&(this.gltfModel.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(t),s.emissiveIntensity=.5)})}),setTimeout(()=>{this.gltfModel.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(0),s.emissiveIntensity=0)})})},e)),this.visor&&this.visor.material){const n=this.visor.material.emissive.getHex();this.visor.material.emissive.setHex(t),this.visor.material.emissiveIntensity=8,setTimeout(()=>{this.visor.material.emissive.setHex(n),this.visor.material.emissiveIntensity=3},e)}}_spawnDodgeGhost(){const t=new Re,e=new ee({color:4491519,transparent:!0,opacity:.4,depthWrite:!1});if(this.gltfModel)this.gltfModel.traverse(n=>{if(n.isMesh&&n.visible){const i=new J(n.geometry.clone(),e);i.position.copy(n.position),i.rotation.copy(n.rotation),i.scale.copy(n.scale),t.add(i)}});else{const n=new Rn(.35,.6,4,8),i=new J(n,e);i.position.y=1.1,t.add(i)}t.position.copy(this.mesh.position),t.rotation.y=this.mesh.rotation.y,this.scene.add(t),this.dodgeGhostMeshes.push({mesh:t,material:e,spawnTime:Date.now(),lifetime:200})}_updateDodgeGhosts(){const t=Date.now();for(let e=this.dodgeGhostMeshes.length-1;e>=0;e--){const n=this.dodgeGhostMeshes[e],i=t-n.spawnTime;if(i>n.lifetime)this.scene.remove(n.mesh),n.mesh.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),this.dodgeGhostMeshes.splice(e,1);else{const s=i/n.lifetime;n.material.opacity=.4*(1-s)}}}_processDodge(t){const e=this.stateTimer/xn.dodgeDuration,n=Math.sin(e*Math.PI);this.mesh.position.addScaledVector(this.dodgeDir,this.dodgeSpeed*n*t),this.lastGhostSpawnTime+=t,this.isInvincible&&this.lastGhostSpawnTime>=this.ghostSpawnInterval&&(this._spawnDodgeGhost(),this.lastGhostSpawnTime=0),this._updateDodgeGhosts(),this.stateTimer>=xn.dodgeIframes&&this.isInvincible&&(this.isInvincible=!1,this._flashDodgeEnd()),this.stateTimer>=xn.dodgeDuration&&(this.isInvincible=!1,this._changeState(Nt.IDLE))}_flashDodgeEnd(){this._flashModel(2236962,50)}_startAttack(t){const e=t?vi.heavyAttack:vi.lightAttack;this.gm.useStamina(e),this.hitThisSwing=!1,this.gm.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.5,pitch:t?.8:1,variation:.1});const n=this._getCameraYaw();if(this.facingAngle=n,this.mesh.rotation.y=n,this.gm.particleManager){const i=new E(Math.sin(n),0,Math.cos(n));this.gm.particleManager.spawnSlashTrail(this.mesh.position.clone(),i,t)}this._changeState(t?Nt.HEAVY_ATTACKING:Nt.ATTACKING)}_processAttack(t){const e=this.state===Nt.HEAVY_ATTACKING,n=e?xn.heavyAttackDuration:xn.lightAttackDuration,i=e?xn.heavyHitStart:xn.lightHitStart,s=e?xn.heavyHitEnd:xn.lightHitEnd;if(this.stateTimer>=i&&this.stateTimer<s&&!this.hitThisSwing&&this._checkHit(e),!e&&this.stateTimer>n-xn.comboWindow&&this.stateTimer<n&&this.input.lightAttack&&this.gm.canUseStamina(vi.lightAttack)){this.attackCombo=(this.attackCombo+1)%3,this._startAttack(!1);return}const a=new E(Math.sin(this.facingAngle),0,Math.cos(this.facingAngle)),o=e?3:2;this.stateTimer<s&&this.mesh.position.addScaledVector(a,o*t),this.stateTimer>=n&&(this.attackCombo=0,this._changeState(Nt.IDLE))}_checkHit(t){this.activeAttack={position:this.mesh.position.clone().add(new E(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(1.2)),range:this.attackRange,damage:t?this.heavyDamage:this.lightDamage,postureDmg:t?this.heavyPostureDmg:this.lightPostureDmg,isHeavy:t}}_processBlock(t){this.input.block||this._changeState(Nt.IDLE);const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const n=this._getCameraYaw(),i=new E(-Math.sin(n),0,-Math.cos(n)),s=new E(-Math.cos(n),0,Math.sin(n)),a=new E().addScaledVector(i,-e.z).addScaledVector(s,e.x).normalize();this.mesh.position.addScaledVector(a,this.moveSpeed*.3*t)}}_changeState(t){this.state!==t&&((this.state===Nt.ATTACKING||this.state===Nt.HEAVY_ATTACKING)&&(this.activeAttack=null),this.state=t,this.stateTimer=0,this._playAnimation(t))}setCameraController(t){this.cameraController=t}_getCameraYaw(){return this.cameraController?this.cameraController.yaw:0}resetPosition(){this.mesh.position.copy(this.gm.checkpoint),this.velocity.set(0,0,0),this._changeState(Nt.IDLE)}get isBlocking(){return this.state===Nt.BLOCKING}get isAttacking(){return this.state===Nt.ATTACKING||this.state===Nt.HEAVY_ATTACKING}get isDead(){return this.state===Nt.DEAD}flashDamage(){this._flashModel(6684672,150)}}const At={IDLE:"idle",PATROL:"patrol",CHASE:"chase",CIRCLE:"circle",RETREAT:"retreat",ATTACK:"attack",STAGGERED:"staggered",DEAD:"dead"},xv={[At.IDLE]:"Idle",[At.PATROL]:"Walking",[At.CHASE]:"Running",[At.CIRCLE]:"Walking",[At.RETREAT]:"Walking",[At.ATTACK]:"Punch",[At.STAGGERED]:"No",[At.DEAD]:"Death"},oa={HOLLOW_SOLDIER:{name:"Hollow Soldier",health:50,damage:15,postureDmg:15,moveSpeed:2.5,detectionRange:10,attackRange:2.2,attackCooldown:1.5,attackWindup:.5,attackDuration:.2,remnantDrop:40,patrolRadius:3,bodyColor:4860458,eyeColor:16724787,canChainAttacks:!1,maxPosture:60,hasShield:!1,modelPath:"/assets/models/robot_expressive.glb",modelScale:.5,modelTint:4872762,animSpeedMult:1},BERSERKER:{name:"Berserker",health:35,damage:20,postureDmg:10,moveSpeed:4,detectionRange:12,attackRange:2,attackCooldown:.8,attackWindup:.3,attackDuration:.15,remnantDrop:60,patrolRadius:5,bodyColor:6693410,eyeColor:16737792,canChainAttacks:!0,maxChainAttacks:3,maxPosture:40,hasShield:!1,modelPath:"/assets/models/robot_expressive.glb",modelScale:.55,modelTint:9052706,animSpeedMult:1.5},SENTINEL:{name:"Sentinel",health:100,damage:30,postureDmg:25,moveSpeed:1.5,detectionRange:8,attackRange:2.5,attackCooldown:2.5,attackWindup:.8,attackDuration:.3,remnantDrop:100,patrolRadius:2,bodyColor:3355460,eyeColor:4474111,canChainAttacks:!1,maxPosture:100,hasShield:!0,shieldBlockChance:.4,modelPath:"/assets/models/soldier.glb",modelScale:.9,modelTint:3816026,animSpeedMult:.8}};class vv{constructor(t,e,n={},i=null){this.scene=t,this.gm=i;const s=n.type?oa[n.type]:{};this.config={...oa.HOLLOW_SOLDIER,...s,...n},this.maxHealth=this.config.health,this.health=this.maxHealth,this.maxPosture=this.config.maxPosture||60,this.posture=0,this.state=At.IDLE,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.isBlocking=!1,this.isDead=!1,this.chainAttackCount=0,this.lastAttackTime=0,this.circleDirection=Math.random()>.5?1:-1,this.circleTimer=0,this.spawnPos=e.clone(),this.patrolTarget=e.clone(),this.patrolWait=0,this.modelLoaded=!1,this.animSystem=null,this.currentAnim=null,this.gltfModel=null,this.mesh=new Re,this.mesh.position.copy(e),this._createFallbackMesh(),this._createHealthBar(2.1),t.add(this.mesh),this._loadGLTFModel()}_createFallbackMesh(){const t=new Ft({color:this.config.bodyColor,roughness:.7,metalness:.2}),e=new Rn(.3,.5,8,16);this.fallbackBody=new J(e,t),this.fallbackBody.position.y=1,this.fallbackBody.castShadow=!0,this.mesh.add(this.fallbackBody);const n=new Ft({color:this.config.eyeColor,emissive:this.config.eyeColor,emissiveIntensity:4}),i=new Te(.08,8,8);this.eye=new J(i,n),this.eye.position.set(0,1.5,.25),this.mesh.add(this.eye),this.body=this.fallbackBody}async _loadGLTFModel(){try{const t=this.config.modelPath||"/assets/models/robot_expressive.glb",e=this.config.modelScale||.5;console.log(`[Enemy:${this.config.name}] Loading GLTF model...`);const{scene:n,animations:i}=await aa.loadModel(t,{scale:e});this.gltfModel=n,this.gltfModel.position.y=0,this.gltfModel.rotation.y=Math.PI,this.config.modelTint&&this._applyModelTint(this.config.modelTint),this.gltfModel.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0,s.userData.originalMaterial=s.material.clone())}),this.fallbackBody&&(this.fallbackBody.visible=!1),this.mesh.add(this.gltfModel),i&&i.length>0&&(this.animSystem=aa.createAnimationSystem(this.gltfModel,i),console.log(`[Enemy:${this.config.name}] Animations:`,i.map(s=>s.name)),this._playAnimation(this.state,{loop:!0})),this.modelLoaded=!0,this.body=this.gltfModel,console.log(`[Enemy:${this.config.name}] GLTF model loaded`)}catch(t){console.error(`[Enemy:${this.config.name}] Failed to load GLTF:`,t)}}_applyModelTint(t){const e=new Rt(t);this.gltfModel.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>{s.color&&s.color.lerp(e,.3),s.emissive&&(s.emissive.copy(e).multiplyScalar(.1),s.emissiveIntensity=.2)})})}_playAnimation(t,e={}){if(!this.animSystem)return;const n=xv[t];if(!n||this.currentAnim===n&&t!==At.ATTACK)return;const i=this.config.animSpeedMult||1,s={loop:t===At.IDLE||t===At.PATROL||t===At.CHASE||t===At.CIRCLE||t===At.RETREAT,fadeIn:.2,timeScale:i,clampWhenFinished:t===At.DEAD};t===At.ATTACK?(s.loop=!1,s.timeScale=i*1.2):t===At.CHASE&&(s.timeScale=i*1.3);const a={...s,...e};this.currentAnim?this.animSystem.crossFade(this.currentAnim,n,a.fadeIn):this.animSystem.play(n,a),this.currentAnim=n}_createHealthBar(t){this.healthBarGroup=new Re,this.healthBarGroup.position.y=t;const e=new dn(1,.08),n=new ee({color:1118481,side:de}),i=new J(e,n);this.healthBarGroup.add(i);const s=new dn(.98,.06),a=new ee({color:13382451,side:de});this.healthFill=new J(s,a),this.healthFill.position.z=.001,this.healthBarGroup.add(this.healthFill);const o=new dn(1,.04),c=new ee({color:2236945,side:de}),l=new J(o,c);l.position.y=-.08,this.healthBarGroup.add(l);const h=new dn(.98,.03),u=new ee({color:16763904,side:de});this.postureFill=new J(h,u),this.postureFill.position.set(0,-.08,.001),this.postureFill.scale.x=0,this.healthBarGroup.add(this.postureFill),this.mesh.add(this.healthBarGroup),this.healthBarGroup.visible=!1,this.breakIndicator=this._createBreakIndicator(),this.breakIndicator.visible=!1,this.mesh.add(this.breakIndicator)}_createBreakIndicator(){const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.fillStyle="#ffcc00",e.font="bold 32px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("BREAK!",64,32);const n=new Qo(t),i=new jh({map:n,transparent:!0,depthTest:!1}),s=new sf(i);return s.scale.set(1.5,.75,1),s.position.y=3,s}update(t,e){if(this.state===At.DEAD)return;this.animSystem&&this.animSystem.update(t),this.stateTimer+=t;const n=this.mesh.position.distanceTo(e.mesh.position),i=this.health/this.maxHealth;if(this.healthBarGroup.visible){const s=this.scene.getObjectByProperty("type","PerspectiveCamera");s&&this.healthBarGroup.lookAt(s.position)}switch(this.config.hasShield&&this.state===At.CHASE&&n<this.config.attackRange*1.5?this.isBlocking=Math.random()<this.config.shieldBlockChance:this.isBlocking=!1,this.state){case At.IDLE:this.patrolWait+=t,n<this.config.detectionRange?(this._changeState(At.CHASE),this.healthBarGroup.visible=!0):this.patrolWait>2&&(this.patrolWait=0,this._pickPatrolTarget(),this._changeState(At.PATROL));break;case At.PATROL:if(n<this.config.detectionRange){this._changeState(At.CHASE),this.healthBarGroup.visible=!0;break}this._moveToward(this.patrolTarget,this.config.moveSpeed*.5,t),this.mesh.position.distanceTo(this.patrolTarget)<.5&&this._changeState(At.IDLE);break;case At.CHASE:if(n>this.config.detectionRange*1.5){this._changeState(At.IDLE),this.healthBarGroup.visible=!1;break}if(i<.3&&!this.config.canChainAttacks&&Math.random()<.01){this._changeState(At.RETREAT);break}if(n<=this.config.attackRange){this._changeState(At.ATTACK);break}if(n<this.config.attackRange*2&&Math.random()<.005){this._changeState(At.CIRCLE);break}this._moveToward(e.mesh.position,this.config.moveSpeed,t),this._faceTarget(e.mesh.position,t);break;case At.CIRCLE:if(this.circleTimer+=t,this.circleTimer>1.5||n>this.config.detectionRange){this._changeState(At.CHASE);break}if(n<=this.config.attackRange){this._changeState(At.ATTACK);break}this._circleStrafe(e.mesh.position,t),this._faceTarget(e.mesh.position,t);break;case At.RETREAT:if(this.stateTimer>2||n>this.config.detectionRange){this._changeState(At.CHASE);break}const s=new E().subVectors(this.mesh.position,e.mesh.position);s.y=0,s.normalize();const a=this.mesh.position.clone().add(s.multiplyScalar(3));this._moveToward(a,this.config.moveSpeed*.8,t),this._faceTarget(e.mesh.position,t);break;case At.ATTACK:this._processAttack(t,e);break;case At.STAGGERED:this.gltfModel?this.gltfModel.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5):this.fallbackBody&&(this.fallbackBody.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5)),this.stateTimer>=1.5&&(this.posture=0,this.gltfModel&&(this.gltfModel.rotation.z=0),this.fallbackBody&&(this.fallbackBody.rotation.z=0),this.breakIndicator.visible=!1,this._updatePostureBar(),this._changeState(n<this.config.detectionRange?At.CHASE:At.IDLE));break}this.state!==At.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-8*t),this._updatePostureBar())}_circleStrafe(t,e){const n=new E().subVectors(t,this.mesh.position);n.y=0;const i=n.length();n.normalize();const s=new E(-n.z,0,n.x).multiplyScalar(this.circleDirection),a=this.config.attackRange*1.5,o=new E().copy(n).multiplyScalar((i-a)*.5),c=s.add(o).normalize();this.mesh.position.addScaledVector(c,this.config.moveSpeed*.7*e)}_processAttack(t,e){const n=this.config.attackWindup,i=n+this.config.attackDuration;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);return}if(this.stateTimer>=n&&this.stateTimer<i&&!this.hitThisSwing){const s=new E(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(s.multiplyScalar(1)).add(new E(0,1,0)),range:this.config.attackRange,damage:this.config.damage,postureDmg:this.config.postureDmg}}if(this.stateTimer>=this.config.attackCooldown){this.hitThisSwing=!1,this.activeAttack=null;const s=this.mesh.position.distanceTo(e.mesh.position);if(this.config.canChainAttacks&&s<=this.config.attackRange*1.3&&(this.chainAttackCount++,this.chainAttackCount<this.config.maxChainAttacks)){this._changeState(At.ATTACK);return}this.chainAttackCount=0,s<=this.config.attackRange?this._changeState(At.ATTACK):this._changeState(At.CHASE)}}takeDamage(t,e=0,n=null){if(this.state===At.DEAD)return"dead";this.isBlocking&&(t=Math.floor(t*.3),e=Math.floor(e*.5),this._flashModel(4473958,100)),this.state===At.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&(this.gm.audioManager.play("hitImpact",{position:this.mesh.position,volume:.6,variation:.15}),this.gm.audioManager.playEnemyGrunt(this.mesh.position));const i=Math.max(0,this.health/this.maxHealth);return this.healthFill.scale.x=i,this.healthFill.position.x=-(1-i)*.49*.5,this.healthBarGroup.visible=!0,this._updatePostureBar(),this._flashModel(4456448,100),this._applyHitRecoil(n,t),this.health<=0?(this._die(),"died"):this.posture>=this.maxPosture&&this.state!==At.STAGGERED?(this._triggerPostureBreak(),"staggered"):((this.state===At.IDLE||this.state===At.PATROL)&&this._changeState(At.CHASE),"hit")}_flashModel(t,e){if(this.gltfModel?(this.gltfModel.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(t),s.emissiveIntensity=.5)})}),setTimeout(()=>{this.gltfModel.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(0),s.emissiveIntensity=0)})})},e)):this.fallbackBody&&this.fallbackBody.material&&(this.fallbackBody.material.emissive.setHex(t),setTimeout(()=>this.fallbackBody.material.emissive.setHex(0),e)),this.eye&&this.eye.material){const n=this.eye.material.emissive.getHex();this.eye.material.emissive.setHex(t),setTimeout(()=>this.eye.material.emissive.setHex(n),e)}}_applyHitRecoil(t,e){let n;if(t)n=new E().subVectors(this.mesh.position,t),n.y=0,n.normalize();else{const f=this.mesh.rotation.y;n=new E(-Math.sin(f),0,-Math.cos(f))}const i=Math.min(.5,e*.015),s=this.mesh.position.clone(),a=s.clone().add(n.multiplyScalar(i)),o=this.gltfModel||this.fallbackBody,c=o?o.rotation.z:0,l=Math.random()>.5?1:-1;o&&(o.rotation.z=c+l*.15);let h=0;const u=.12,d=()=>{h+=.016;const f=Math.min(1,h/u),g=1-Math.pow(1-f,3);this.mesh.position.lerpVectors(a,s,g),o&&(o.rotation.z=ci.lerp(c+l*.15,c,g)),f<1&&requestAnimationFrame(d)};this.mesh.position.copy(a),requestAnimationFrame(d)}_triggerPostureBreak(){this._changeState(At.STAGGERED),this.breakIndicator.visible=!0,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.7}),this._flashModel(16763904,300),this.postureFill.material.color.setHex(16729088),setTimeout(()=>this.postureFill.material.color.setHex(16763904),300),console.log(`[COMBAT] ${this.config.name} POSTURE BROKEN!`)}_updatePostureBar(){const t=this.posture/this.maxPosture;this.postureFill.scale.x=t,this.postureFill.position.x=-(1-t)*.49*.5}_die(){this.state=At.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.breakIndicator.visible=!1,this._playAnimation(At.DEAD,{loop:!1,clampWhenFinished:!0}),this.healthBarGroup.visible=!1,setTimeout(()=>{this._fadeOutModel()},2e3)}_fadeOutModel(){const t=this.gltfModel||this.fallbackBody;if(!t)return;t.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>{s.transparent=!0})});const e=()=>{let n=!0;t.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(a=>{a.opacity>0&&(a.opacity-=.02,n=!1)})}),n?this.mesh.visible=!1:requestAnimationFrame(e)};e()}respawn(){this.health=this.maxHealth,this.posture=0,this.state=At.IDLE,this.isDead=!1,this.stateTimer=0,this.chainAttackCount=0,this.circleTimer=0,this.isBlocking=!1,this.mesh.position.copy(this.spawnPos);const t=this.gltfModel||this.fallbackBody;t&&(t.rotation.x=0,t.rotation.z=0,t.traverse(e=>{e.isMesh&&e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.opacity=1,i.transparent=!1})})),this.mesh.visible=!0,this.healthBarGroup.visible=!1,this.breakIndicator.visible=!1,this.healthFill.scale.x=1,this.healthFill.position.x=0,this.postureFill.scale.x=0,this.postureFill.position.x=0,this._playAnimation(At.IDLE,{loop:!0})}_moveToward(t,e,n){const i=new E().subVectors(t,this.mesh.position);i.y=0,i.length()>.5&&(i.normalize(),this.mesh.position.addScaledVector(i,e*n))}_faceTarget(t,e){const n=new E().subVectors(t,this.mesh.position);if(n.y=0,n.length()>.1){const i=Math.atan2(n.x,n.z);this.mesh.rotation.y=ci.lerp(this.mesh.rotation.y,i,5*e)}}_pickPatrolTarget(){const t=Math.random()*Math.PI*2,e=Math.random()*this.config.patrolRadius;this.patrolTarget.set(this.spawnPos.x+Math.cos(t)*e,0,this.spawnPos.z+Math.sin(t)*e)}_changeState(t){this.state!==t&&(this.state===At.ATTACK&&(this.activeAttack=null,this.hitThisSwing=!1),t===At.CIRCLE&&(this.circleTimer=0,this.circleDirection=Math.random()>.5?1:-1),this.state=t,this.stateTimer=0,this._playAnimation(t))}}const kt={DORMANT:"dormant",AWAKENING:"awakening",IDLE:"idle",WALK:"walk",ATTACK:"attack",HEAVY_ATTACK:"heavy_attack",AOE_ATTACK:"aoe_attack",COMBO:"combo",STAGGERED:"staggered",PHASE_TRANSITION:"phase_transition",DEAD:"dead"};class yv{constructor(t,e,n){this.scene=t,this.gm=n,this.name="The Failed Experiment",this.maxHealth=500,this.health=this.maxHealth,this.maxPosture=150,this.posture=0,this.phase=1,this.state=kt.DORMANT,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.comboCount=0,this.isActive=!1,this.isDead=!1,this.phaseConfigs={1:{moveSpeed:2,attackCooldown:2.5,attackWindup:1,damage:35,postureDmg:30,canCombo:!1,canAoE:!1},2:{moveSpeed:3.5,attackCooldown:1.5,attackWindup:.6,damage:45,postureDmg:40,canCombo:!0,maxCombo:3,canAoE:!0,aoeCooldown:8}},this.config=this.phaseConfigs[1],this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.detectionRange=15,this.attackRange=3.5,this.spawnPos=e.clone(),this.mesh=new Re,this.mesh.position.copy(e);const i=new Re,s=new Te(.9,16,14),a=new Ft({color:1709344,roughness:.75,metalness:.25}),o=new J(s,a);o.position.y=2,o.scale.set(1.1,1.3,1),o.castShadow=!0,i.add(o);const c=new Te(.6,12,10),l=new Ft({color:2234408,roughness:.8,metalness:.2}),h=new J(c,l);h.position.set(0,2.5,-.5),h.scale.set(1.2,.9,.8),i.add(h);for(let mt=0;mt<8;mt++){const ct=new Te(.12+Math.random()*.15,8,6),Ct=new Ft({color:2759205,roughness:.9,metalness:.1}),Qt=new J(ct,Ct),jt=mt/8*Math.PI*2,te=1.5+Math.random()*1.5;Qt.position.set(Math.cos(jt)*.7+(Math.random()-.5)*.3,te,Math.sin(jt)*.5+(Math.random()-.5)*.3),i.add(Qt)}const u=new Ft({color:9075306,roughness:.6,metalness:.2});for(let mt=0;mt<5;mt++){const ct=new ds(.35-mt*.03,.03,6,16,Math.PI*.7),Ct=new J(ct,u);Ct.position.set(0,1.5+mt*.15,.6),Ct.rotation.x=Math.PI/2,Ct.rotation.y=Math.PI,i.add(Ct)}const d=new Te(.5,12,10),f=new Ft({color:1709349,roughness:.7,metalness:.3});this.leftShoulder=new J(d,f),this.leftShoulder.position.set(-.9,2.8,0),this.leftShoulder.scale.set(1.3,1,1.1),i.add(this.leftShoulder);const g=new Te(.6,12,10);this.rightShoulder=new J(g,f),this.rightShoulder.position.set(1,2.9,0),this.rightShoulder.scale.set(1.1,.9,1),i.add(this.rightShoulder);const _=new Rn(.12,.7,8,12),m=new Ft({color:2759202,roughness:.8,metalness:.15}),p=new J(_,m);p.position.set(-1.1,2,.2),p.rotation.z=.4,p.rotation.x=-.3,i.add(p);const x=new Rn(.2,.8,10,14),y=new J(x,m);y.position.set(1.3,2,.2),y.rotation.z=-.3,i.add(y);const S=new Ft({color:1709344,roughness:.75,metalness:.2}),A=new Rn(.2,.9,10,12),w=new J(A,S);w.position.set(-.4,.6,0),w.rotation.z=.1,i.add(w);const R=new Rn(.22,.85,10,12),D=new J(R,S);D.position.set(.4,.6,0),D.rotation.z=-.1,i.add(D);const M=new Ft({color:2236962,roughness:.5,metalness:.4});for(let mt of[-1,1])for(let ct=0;ct<3;ct++){const Ct=new Ti(.04,.15,6),Qt=new J(Ct,M);Qt.position.set(mt*.4+(ct-1)*.08,.05,.2),Qt.rotation.x=Math.PI/3,i.add(Qt)}const b=new Te(.4,14,12),P=new Ft({color:1709088,roughness:.75,metalness:.2}),F=new J(b,P);F.position.set(0,3.4,.3),F.scale.set(1,1.1,.9),i.add(F);const B=new ye(.35,.15,.25),W=new J(B,u);W.position.set(0,3.15,.45),W.rotation.x=.2,i.add(W),this.eyes=[];const X=[{x:-.15,y:3.5,z:.55,size:.09},{x:.15,y:3.5,z:.55,size:.09},{x:0,y:3.65,z:.5,size:.07},{x:-.32,y:3.35,z:.4,size:.05},{x:.32,y:3.35,z:.4,size:.05},{x:-.75,y:3,z:.25,size:.04},{x:-.85,y:2.85,z:.3,size:.03},{x:.1,y:2.7,z:-.3,size:.06}],V=new Ft({color:16720384,emissive:16720384,emissiveIntensity:5});X.forEach(mt=>{const ct=new Te(mt.size,10,10),Ct=new J(ct,V.clone());Ct.position.set(mt.x,mt.y,mt.z),this.eyes.push(Ct),i.add(Ct)}),this.body=i,this.mesh.add(i);const k=new Re,j=new on(.06,.08,1.8,10),dt=new Ft({color:3811872,roughness:.8,metalness:.2}),at=new J(j,dt);k.add(at);for(let mt=0;mt<4;mt++){const ct=new ds(.09,.02,6,12),Ct=new J(ct,new Ft({color:4860456,roughness:.9}));Ct.position.y=-.6+mt*.4,Ct.rotation.x=Math.PI/2,k.add(Ct)}const pt=new ye(.08,1.6,.5),Gt=new Ft({color:2763306,roughness:.3,metalness:.9}),Bt=new J(pt,Gt);Bt.position.set(0,1.4,.15),Bt.rotation.z=.15,k.add(Bt);const ge=new ye(.02,1.55,.02),le=new Ft({color:16724736,emissive:16720384,emissiveIntensity:2}),Y=new J(ge,le);Y.position.set(0,1.4,.41),Y.rotation.z=.15,k.add(Y);for(let mt=0;mt<5;mt++){const ct=new Ti(.03,.12,5),Ct=new J(ct,Gt);Ct.position.set(0,.8+mt*.25,.35),Ct.rotation.x=Math.PI/3,k.add(Ct)}k.position.set(1.5,1.8,0),k.rotation.z=.4,this.weapon=k,this.weapon.castShadow=!0,this.mesh.add(k);const Z=new wi(.5,6,32),xt=new ee({color:16729088,transparent:!0,opacity:0,side:de});this.aoeIndicator=new J(Z,xt),this.aoeIndicator.rotation.x=-Math.PI/2,this.aoeIndicator.position.y=.1,this.mesh.add(this.aoeIndicator),this.auraParticles=[];for(let mt=0;mt<6;mt++){const ct=new Te(.08,6,6),Ct=new Ft({color:2228258,emissive:1114129,emissiveIntensity:1,transparent:!0,opacity:.6}),Qt=new J(ct,Ct);Qt.userData.angle=mt/6*Math.PI*2,Qt.userData.yOffset=Math.random()*2,Qt.userData.radius=.8+Math.random()*.4,this.auraParticles.push(Qt),this.mesh.add(Qt)}this.mutatedArm=null,t.add(this.mesh),this._setDormant()}_setDormant(){this.eyes.forEach(t=>{t.material.emissiveIntensity=.5})}_awaken(){if(this.state!==kt.DORMANT)return;this.isActive=!0,this._changeState(kt.AWAKENING),this.gm?.audioManager&&(this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this.gm.audioManager.startBossMusic());let t=0;this.eyes.forEach((e,n)=>{setTimeout(()=>{e.material.emissiveIntensity=6,setTimeout(()=>{e.material.emissiveIntensity=4},200)},t),t+=150})}update(t,e){if(this.state===kt.DEAD)return;this.stateTimer+=t,this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-t),this.aoeCooldownTimer=Math.max(0,this.aoeCooldownTimer-t);const n=this.mesh.position.distanceTo(e.mesh.position);if(this.state===kt.DORMANT&&n<this.detectionRange){this._awaken();return}switch(this.state){case kt.AWAKENING:this.stateTimer<2?this.body.position.y=2.2+Math.sin(this.stateTimer*Math.PI)*.3:this._changeState(kt.IDLE);break;case kt.IDLE:this._faceTarget(e.mesh.position,t),n<=this.attackRange&&this.attackCooldownTimer<=0?this._startAttack(e):n>this.attackRange&&this._changeState(kt.WALK);break;case kt.WALK:this._moveToward(e.mesh.position,t),this._faceTarget(e.mesh.position,t),this.body.position.y=2.2+Math.sin(this.stateTimer*8)*.1,n<=this.attackRange&&(this.attackCooldownTimer<=0?this._startAttack(e):this._changeState(kt.IDLE));break;case kt.ATTACK:this._processAttack(t,e,!1);break;case kt.HEAVY_ATTACK:this._processAttack(t,e,!0);break;case kt.AOE_ATTACK:this._processAoEAttack(t,e);break;case kt.COMBO:this._processCombo(t,e);break;case kt.STAGGERED:this.body.rotation.z=Math.sin(this.stateTimer*12)*.15*(1-this.stateTimer/2.5),this.stateTimer>=2.5&&(this.posture=0,this.body.rotation.z=0,this._changeState(kt.IDLE));break;case kt.PHASE_TRANSITION:this._processPhaseTransition(t);break}this.state!==kt.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-3*t));const i=this.health/this.maxHealth,s=2+(1-i)*4,a=3+Math.sin(Date.now()*.001*s)*(1+(1-i)*2);if(this.eyes.forEach(o=>{o.material.emissiveIntensity=a}),this.auraParticles&&this.isActive){const o=Date.now()*.001;this.auraParticles.forEach((c,l)=>{const h=c.userData.angle+o*.5,u=c.userData.yOffset+Math.sin(o+l)*.3,d=c.userData.radius;c.position.set(Math.cos(h)*d,1.5+u,Math.sin(h)*d),c.material.opacity=.3+Math.sin(o*2+l)*.2})}}_startAttack(t){if(this.mesh.position.distanceTo(t.mesh.position),this.phase===2&&this.config.canAoE&&this.aoeCooldownTimer<=0&&Math.random()<.3){this._changeState(kt.AOE_ATTACK);return}if(this.phase===2&&this.config.canCombo&&Math.random()<.4){this.comboCount=0,this._changeState(kt.COMBO);return}Math.random()<.5?this._changeState(kt.ATTACK):this._changeState(kt.HEAVY_ATTACK)}_processAttack(t,e,n){const i=n?this.config.attackWindup*1.5:this.config.attackWindup,s=i+.3,a=s+(n?1:.6);if(this.stateTimer<i){this._faceTarget(e.mesh.position,t*2);const o=this.stateTimer/i;n?(this.weapon.rotation.z=-o*2.5,this.weapon.position.y=1.8+o*1.5):this.weapon.rotation.z=.3-o*1.5;return}if(this.stateTimer>=i&&this.stateTimer<s){if(!this.hitThisSwing){const c=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2)).add(new E(0,1.5,0)),range:this.attackRange,damage:n?this.config.damage*1.5:this.config.damage,postureDmg:n?this.config.postureDmg*1.5:this.config.postureDmg,isHeavy:n}}const o=(this.stateTimer-i)/.3;n?(this.weapon.rotation.z=-2.5+o*4,this.weapon.position.y=3.3-o*2.5):this.weapon.rotation.z=-1.2+o*2.5}this.stateTimer>=s&&(this.activeAttack=null,this.weapon.rotation.z*=.9,this.weapon.position.y=ci.lerp(this.weapon.position.y,1.8,.1)),this.stateTimer>=a&&(this.hitThisSwing=!1,this.activeAttack=null,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(kt.IDLE))}_processCombo(t,e){const n=this.config.attackWindup*.7,i=n+.2,s=i+.3;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*3);const a=this.stateTimer/n,o=this.comboCount%2===0?1:-1;this.weapon.rotation.z=o*a*1.5;return}if(this.stateTimer>=n&&this.stateTimer<i){if(!this.hitThisSwing){const c=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2)).add(new E(0,1.5,0)),range:this.attackRange*.9,damage:this.config.damage*.7,postureDmg:this.config.postureDmg*.6,isCombo:!0}}const a=(this.stateTimer-n)/.2,o=this.comboCount%2===0?1:-1;this.weapon.rotation.z=o*(1.5-a*3)}if(this.stateTimer>=s){this.comboCount++,this.hitThisSwing=!1,this.activeAttack=null;const a=this.mesh.position.distanceTo(e.mesh.position);if(this.comboCount<this.config.maxCombo&&a<this.attackRange*1.2){this.stateTimer=0;const o=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.mesh.position.addScaledVector(o,.5)}else this.comboCount=0,this.attackCooldownTimer=this.config.attackCooldown*1.5,this._resetWeapon(),this._changeState(kt.IDLE)}}_processAoEAttack(t,e){if(this.stateTimer<1.5){const a=this.stateTimer/1.5;this.aoeIndicator.material.opacity=a*.6,this.aoeIndicator.scale.setScalar(1+a*.3),this.weapon.rotation.z=-a*3,this.weapon.position.y=1.8+a*2;const o=Math.floor(2228224+a*1114112);this.body.traverse(c=>{c.isMesh&&c.material&&c.material.emissive&&c.material.emissive.setHex(o)}),this.eyes.forEach(c=>{c.material.emissiveIntensity=4+a*6});return}this.stateTimer>=1.5&&this.stateTimer<1.8&&(this.hitThisSwing||(this.hitThisSwing=!0,this.aoeIndicator.material.opacity=1,this.aoeIndicator.material.color.setHex(16737792),this.mesh.position.distanceTo(e.mesh.position)<6&&!e.isInvincible&&(this.activeAttack={position:this.mesh.position.clone(),range:6,damage:this.config.damage*1.2,postureDmg:this.config.postureDmg,isAoE:!0}),this.weapon.rotation.z=.5,this.weapon.position.y=.5)),this.stateTimer>=1.8&&(this.activeAttack=null,this.aoeIndicator.material.opacity*=.9,this.body.traverse(a=>{a.isMesh&&a.material&&a.material.emissive&&a.material.emissive.setHex(0)})),this.stateTimer>=2.8&&(this.hitThisSwing=!1,this.aoeIndicator.material.opacity=0,this.aoeIndicator.material.color.setHex(16729088),this.aoeCooldownTimer=this.config.aoeCooldown,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(kt.IDLE))}_processPhaseTransition(t){if(this.stateTimer<3){this.body.rotation.z=Math.sin(this.stateTimer*20)*.2,this.body.scale.y=1+Math.sin(this.stateTimer*10)*.1,this.eyes.forEach((n,i)=>{n.material.emissiveIntensity=5+Math.sin(this.stateTimer*15+i)*4}),this.stateTimer>1.5&&!this.mutatedArm&&this._createMutatedArm();return}this.body.rotation.z=0,this.body.scale.y=1,this.body.traverse(n=>{if(n.isMesh&&n.material&&n.material.color){const i=n.material.color.getHex(),s=i>>16&255,a=i>>8&255,o=i&255;n.material.color.setRGB(Math.min(1,(s+30)/255),Math.max(0,(a-10)/255),Math.min(1,(o+20)/255))}}),this.eyes.forEach(n=>{n.material.color.setHex(16729088),n.material.emissive.setHex(16729088)}),this._changeState(kt.IDLE)}_createMutatedArm(){this.mutatedArm=new Re;const t=new Rn(.15,1,10,14),e=new Ft({color:3806504,roughness:.85,metalness:.15}),n=new J(t,e);n.position.set(0,0,0),n.rotation.z=.6,n.rotation.x=.4,this.mutatedArm.add(n);const i=new Ft({color:2236962,roughness:.4,metalness:.7});for(let o=0;o<4;o++){const c=new Ti(.03,.2,6),l=new J(c,i);l.position.set(-.4+(o-1.5)*.08,.6,.7),l.rotation.x=-.8,this.mutatedArm.add(l)}for(let o=0;o<3;o++){const c=new Te(.06+Math.random()*.04,6,6),l=new Ft({color:4859960,roughness:.9}),h=new J(c,l);h.position.set(-.2+o*.15,.2+o*.15,.35),this.mutatedArm.add(h)}this.mutatedArm.position.set(-1,2.6,.2),this.mesh.add(this.mutatedArm);const s=new Ft({color:16729088,emissive:16729088,emissiveIntensity:5});[{x:-1.2,y:2.8,z:.5,size:.06},{x:-1,y:2.4,z:.6,size:.05},{x:.5,y:3,z:.35,size:.04}].forEach(o=>{const c=new J(new Te(o.size,8,8),s.clone());c.position.set(o.x,o.y,o.z),this.eyes.push(c),this.mesh.add(c)})}takeDamage(t,e=0,n=null){return this.state===kt.DEAD||this.state===kt.PHASE_TRANSITION||this.state===kt.DORMANT?"immune":(this.state===kt.AWAKENING&&(t=Math.floor(t*.5),e=Math.floor(e*.5)),this.state===kt.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.7}),this.body.traverse(i=>{i.isMesh&&i.material&&i.material.emissive&&i.material.emissive.setHex(4456448)}),setTimeout(()=>{this.state!==kt.AOE_ATTACK&&this.body.traverse(i=>{i.isMesh&&i.material&&i.material.emissive&&i.material.emissive.setHex(0)})},100),this._applyHitRecoil(n,t),this.health<=0?(this._die(),"died"):this.phase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==kt.STAGGERED?(this._triggerPostureBreak(),"staggered"):"hit")}_applyHitRecoil(t,e){let n;if(t)n=new E().subVectors(this.mesh.position,t),n.y=0,n.normalize();else{const d=this.body.rotation.y;n=new E(-Math.sin(d),0,-Math.cos(d))}const i=Math.min(.2,e*.005),s=this.mesh.position.clone(),a=s.clone().add(n.multiplyScalar(i)),o=this.body.rotation.z||0,c=Math.random()>.5?1:-1;this.body.rotation.z=o+c*.08;let l=0;const h=.15,u=()=>{l+=.016;const d=Math.min(1,l/h),f=1-Math.pow(1-d,3);this.mesh.position.lerpVectors(a,s,f),this.body.rotation.z=ci.lerp(o+c*.08,o,f),d<1&&requestAnimationFrame(u)};this.mesh.position.copy(a),requestAnimationFrame(u)}_triggerPostureBreak(){this._changeState(kt.STAGGERED),this.activeAttack=null,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.9}),this.body.traverse(t=>{t.isMesh&&t.material&&t.material.emissive&&t.material.emissive.setHex(16763904)}),this.eyes.forEach(t=>{t.material.emissive.setHex(16763904)}),setTimeout(()=>{this.state===kt.STAGGERED&&(this.body.traverse(t=>{t.isMesh&&t.material&&t.material.emissive&&t.material.emissive.setHex(0)}),this.eyes.forEach(t=>{t.material.emissive.setHex(this.phase===2?16729088:16720384)}))},300),console.log(`[BOSS] ${this.name} POSTURE BROKEN!`)}_enterPhase2(){this.phase=2,this.config=this.phaseConfigs[2],this.posture=0,this.activeAttack=null,this._changeState(kt.PHASE_TRANSITION),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1}),console.log(`[BOSS] ${this.name} enters PHASE 2!`)}_die(){this.state=kt.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.isActive=!1,this.gm?.audioManager&&this.gm.audioManager.startAmbientMusic(),console.log(`[BOSS] ${this.name} DEFEATED!`);let t=0;const e=()=>{t+=.02,this.body.position.y=-t*1.5,this.body.rotation.x=t*.5,this.eyes.forEach(n=>{n.material.emissiveIntensity*=.95}),t<1?requestAnimationFrame(e):this._fadeOut()};e(),this.gm&&this.gm.collectRemnants(2e3)}_fadeOut(){let t=1;const e=()=>{t-=.01,this.body.traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=!0,n.material.opacity=t)}),this.weapon.traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=!0,n.material.opacity=t)}),this.eyes.forEach(n=>{n.material.transparent=!0,n.material.opacity=t}),this.auraParticles&&this.auraParticles.forEach(n=>{n.material.opacity=t*.6}),t>0?requestAnimationFrame(e):this.mesh.visible=!1};setTimeout(e,3e3)}_moveToward(t,e){const n=new E().subVectors(t,this.mesh.position);n.y=0,n.length()>.5&&(n.normalize(),this.mesh.position.addScaledVector(n,this.config.moveSpeed*e))}_faceTarget(t,e){const n=new E().subVectors(t,this.mesh.position);if(n.y=0,n.length()>.1){const i=Math.atan2(n.x,n.z);this.body.rotation.y=ci.lerp(this.body.rotation.y,i,5*e)}}_resetWeapon(){this.weapon.rotation.z=.4,this.weapon.position.set(1.5,1.8,0)}_changeState(t){this.state!==t&&((this.state===kt.ATTACK||this.state===kt.HEAVY_ATTACK||this.state===kt.AOE_ATTACK||this.state===kt.COMBO)&&(this.activeAttack=null,this.hitThisSwing=!1),this.state=t,this.stateTimer=0)}respawn(){for(this.health=this.maxHealth,this.posture=0,this.phase=1,this.config=this.phaseConfigs[1],this.state=kt.DORMANT,this.stateTimer=0,this.isActive=!1,this.isDead=!1,this.comboCount=0,this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.mesh.position.copy(this.spawnPos),this.mesh.visible=!0,this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.body.scale.set(1,1,1),this.body.traverse(t=>{t.isMesh&&t.material&&(t.material.opacity=1,t.material.transparent=!1,t.material.emissive&&t.material.emissive.setHex(0))}),this._resetWeapon(),this.weapon.traverse(t=>{t.isMesh&&t.material&&(t.material.opacity=1,t.material.transparent=!1)});this.eyes.length>8;){const t=this.eyes.pop();t&&this.mesh.remove(t)}this.eyes.forEach(t=>{t.material.opacity=1,t.material.transparent=!1,t.material.color.setHex(16720384),t.material.emissive.setHex(16720384)}),this.mutatedArm&&(this.mesh.remove(this.mutatedArm),this.mutatedArm=null),this.aoeIndicator.material.opacity=0,this._setDormant()}}class Mv{constructor(t,e,n,i=null,s=null){this.scene=t,this.gm=e,this.player=n,this.world=i,this.particleManager=s,this.enemies=[],this.boss=null,this._spawnEnemies(),this._spawnBoss()}_spawnEnemies(){(this.world?.getEnemySpawns()||[{pos:new E(0,0,-6),type:"HOLLOW_SOLDIER"},{pos:new E(-4,0,-15),type:"BERSERKER"},{pos:new E(5,0,-22),type:"SENTINEL"}]).forEach((e,n)=>{const i=oa[e.type]||oa.HOLLOW_SOLDIER,s=new vv(this.scene,e.pos,{type:e.type,name:`${i.name} ${n+1}`},this.gm);this.enemies.push(s)})}_spawnBoss(){const t=this.world?.getBossPosition()||new E(0,0,-95);this.boss=new yv(this.scene,t,this.gm);const e=new wi(8,12,32),n=new ee({color:3346705,transparent:!0,opacity:.3,side:de}),i=new J(e,n);i.rotation.x=-Math.PI/2,i.position.copy(t),i.position.y=.02,this.scene.add(i)}update(t,e){for(let n=this.enemies.length-1;n>=0;n--){const i=this.enemies[n];if(i.update(t,e),e.activeAttack&&!e.hitThisSwing){const s=i.mesh.position.x-e.activeAttack.position.x,a=i.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(s*s+a*a)<e.activeAttack.range&&i.health>0){const c=i.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,console.log(`[COMBAT] Player hit ${i.config.name} for ${e.activeAttack.damage} damage! Result: ${c}`),e.activeAttack.isHeavy?this.gm.hitstopHeavy():this.gm.hitstopLight(),this.gm.cameraController&&(e.activeAttack.isHeavy?this.gm.cameraController.shakeMedium():this.gm.cameraController.shakeLight()),this.particleManager){const l=i.mesh.position.clone(),h=i.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(l,8,e.activeAttack.isHeavy),this.particleManager.spawnBlood(l,h,Math.ceil(e.activeAttack.damage/5)),c==="posture_broken"&&this.particleManager.spawnPostureBreak(l)}c==="died"&&(this.gm.addRemnant(i.config.remnantDrop),console.log(`[COMBAT] ${i.config.name} died! Dropped ${i.config.remnantDrop} remnant`),this.particleManager&&this.particleManager.spawnDeathBurst(i.mesh.position.clone()),setTimeout(()=>{i.respawn()},8e3))}}if(i.activeAttack&&!i.hitThisSwing){const s=e.mesh.position.x-i.activeAttack.position.x,a=e.mesh.position.z-i.activeAttack.position.z;if(Math.sqrt(s*s+a*a)<i.activeAttack.range&&!e.isInvincible){const c=this.gm.takeDamage(i.activeAttack.damage,"physical",i.activeAttack.postureDmg,e.isBlocking);if(i.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const l=i.activeAttack.damage/30;this.gm.hud.flashDamage(Math.min(1,l))}if(this.gm.cameraController&&this.gm.cameraController.shakeHeavy(),console.log(`[COMBAT] ${i.config.name} hit player for ${i.activeAttack.damage} damage! Result: ${c}, HP: ${this.gm.health}/${this.gm.maxHealth}`),this.particleManager){const l=e.mesh.position.clone(),h=e.mesh.position.clone().sub(i.mesh.position).normalize();e.isBlocking&&c!=="guard_broken"?this.particleManager.spawnBlockSparks(l):(this.particleManager.spawnHitSparks(l,6,!1),this.particleManager.spawnBlood(l,h,Math.ceil(i.activeAttack.damage/5))),(c==="guard_broken"||c==="posture_broken")&&this.particleManager.spawnPostureBreak(l)}c==="died"?console.log("[COMBAT] Player died!"):(c==="guard_broken"||c==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}if(this.boss){if(this.boss.update(t,e),e.activeAttack&&!e.hitThisSwing&&!this.boss.isDead){const n=this.boss.mesh.position.x-e.activeAttack.position.x,i=this.boss.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(n*n+i*i)<e.activeAttack.range+1&&this.boss.health>0){const a=this.boss.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,console.log(`[BOSS] Player hit ${this.boss.name} for ${e.activeAttack.damage} damage! Result: ${a}`),this.gm.hitstopHeavy(),this.gm.cameraController&&this.gm.cameraController.shakeMedium(),this.particleManager){const o=this.boss.mesh.position.clone(),c=this.boss.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(o,12,e.activeAttack.isHeavy),this.particleManager.spawnBlood(o,c,Math.ceil(e.activeAttack.damage/3)),a==="posture_broken"&&this.particleManager.spawnPostureBreak(o),a==="died"&&(this.particleManager.spawnDeathBurst(o),this.particleManager.spawnDeathBurst(o))}}}if(this.boss.activeAttack&&!this.boss.hitThisSwing){const n=e.mesh.position.x-this.boss.activeAttack.position.x,i=e.mesh.position.z-this.boss.activeAttack.position.z;if(Math.sqrt(n*n+i*i)<this.boss.activeAttack.range&&!e.isInvincible){const a=this.gm.takeDamage(this.boss.activeAttack.damage,"physical",this.boss.activeAttack.postureDmg,e.isBlocking);if(this.boss.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const o=this.boss.activeAttack.damage/25;this.gm.hud.flashDamage(Math.min(1,o))}if(this.gm.cameraController&&this.gm.cameraController.shake(.7,.25),console.log(`[BOSS] ${this.boss.name} hit player for ${this.boss.activeAttack.damage} damage! Result: ${a}`),this.particleManager){const o=e.mesh.position.clone(),c=e.mesh.position.clone().sub(this.boss.mesh.position).normalize();e.isBlocking&&a!=="guard_broken"?(this.particleManager.spawnBlockSparks(o),this.particleManager.spawnBlockSparks(o)):(this.particleManager.spawnHitSparks(o,10,!0),this.particleManager.spawnBlood(o,c,Math.ceil(this.boss.activeAttack.damage/4))),(a==="guard_broken"||a==="posture_broken")&&this.particleManager.spawnPostureBreak(o)}a==="died"?console.log("[BOSS] Player died to boss!"):(a==="guard_broken"||a==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}}resetAll(){this.enemies.forEach(t=>t.respawn()),this.boss&&this.boss.respawn(),console.log("[COMBAT] All enemies and boss reset")}getBoss(){return this.boss}}class Sv{constructor(t){this.scene=t,this.colliders=[],this.doors=[],this.hiddenWalls=[],this.bonfirePosition=new E(0,0,5),this._createSkybox(),this._createCathedral(),this._createLighting(),this._createEnvironmentProps()}_createSkybox(){const t=new Te(180,32,32),e=new Be({uniforms:{topColor:{value:new Rt(1712192)},midColor:{value:new Rt(4859992)},botColor:{value:new Rt(6963232)},starDensity:{value:.003}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 botColor;
        uniform float starDensity;
        varying vec3 vWorldPosition;
        
        // Simple hash for stars
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        
        void main() {
          float h = normalize(vWorldPosition).y;
          
          // Sky gradient
          vec3 sky;
          if (h > 0.0) {
            sky = mix(midColor, topColor, pow(h, 0.5));
          } else {
            sky = mix(midColor, botColor, pow(-h, 0.3));
          }
          
          // Add stars in upper sky
          if (h > 0.1) {
            vec2 starUV = vWorldPosition.xz * 0.02;
            float star = hash(floor(starUV * 100.0));
            if (star > 0.997) {
              float twinkle = 0.5 + 0.5 * sin(star * 1000.0 + vWorldPosition.x * 0.1);
              sky += vec3(twinkle * (h - 0.1) * 2.0);
            }
          }
          
          // Subtle aurora effect near horizon
          float aurora = sin(vWorldPosition.x * 0.03 + vWorldPosition.z * 0.02) * 0.5 + 0.5;
          aurora *= smoothstep(0.0, 0.3, h) * smoothstep(0.5, 0.2, h);
          sky += vec3(0.1, 0.2, 0.3) * aurora * 0.3;
          
          gl_FragColor = vec4(sky, 1.0);
        }
      `,side:qe}),n=new J(t,e);this.scene.add(n);const i=new is(8,32),s=new ee({color:15658717,transparent:!0,opacity:.8}),a=new J(i,s);a.position.set(-50,80,-100),a.lookAt(0,0,0),this.scene.add(a);const o=new is(15,32),c=new ee({color:11184844,transparent:!0,opacity:.15}),l=new J(o,c);l.position.copy(a.position),l.lookAt(0,0,0),this.scene.add(l)}_createEnvironmentProps(){[[-12,8],[14,6],[-10,-5],[12,-8],[-15,-15],[16,-20],[-14,-35],[15,-45]].forEach(([n,i])=>{this._createDeadTree(n,i)}),[[-11,0],[-13,-2],[13,2],[11,-3],[-16,-10],[14,-12],[-15,-40],[17,-38]].forEach(([n,i])=>{this._createGravestone(n,i)}),this._scatterGrass(0,-40,35,90,200),this._createFloorRunes(),this._createGlowingMushrooms(),this._createMagicalCrystals()}_createGlowingMushrooms(){[{pos:[-11,0,7],color:4521898,scale:.8},{pos:[13,0,5],color:6750088,scale:.6},{pos:[-12,0,-6],color:4521898,scale:.7},{pos:[11,0,-4],color:8978363,scale:.5},{pos:[-8,0,-18],color:4513279,scale:.9},{pos:[8,0,-18],color:4513279,scale:.7},{pos:[-8,0,-38],color:6728447,scale:.6},{pos:[8,0,-38],color:6728447,scale:.8},{pos:[-5,0,-68],color:11167487,scale:.9},{pos:[5,0,-72],color:11167487,scale:.7},{pos:[-3,0,-80],color:13404415,scale:.6},{pos:[4,0,-78],color:13404415,scale:.5}].forEach(({pos:e,color:n,scale:i})=>{const s=new Re;s.position.set(...e),s.scale.setScalar(i);const a=new on(.08,.12,.3,8),o=new Ft({color:13421738,roughness:.8,emissive:n,emissiveIntensity:.2}),c=new J(a,o);c.position.y=.15,s.add(c);const l=new Te(.2,16,8,0,Math.PI*2,0,Math.PI/2),h=new Ft({color:n,emissive:n,emissiveIntensity:.8,roughness:.3,transparent:!0,opacity:.9}),u=new J(l,h);u.position.y=.3,s.add(u);const d=new An(n,.6,4);d.position.y=.4,s.add(d),this.scene.add(s)})}_createMagicalCrystals(){[{pos:[-4,0,-15],color:6719743,scale:1.2,rot:.2},{pos:[4,0,-15],color:6719743,scale:1,rot:-.3},{pos:[-4,0,-30],color:8939263,scale:.9,rot:.15},{pos:[4,0,-30],color:8939263,scale:1.1,rot:-.2},{pos:[-3,0,-52],color:16755268,scale:1.3,rot:.1},{pos:[3,0,-52],color:16755268,scale:1.1,rot:-.1},{pos:[-6,0,-88],color:16729190,scale:1.5,rot:.25},{pos:[6,0,-88],color:16729190,scale:1.4,rot:-.2},{pos:[-6,0,-102],color:16737860,scale:1.2,rot:.3},{pos:[6,0,-102],color:16737860,scale:1.3,rot:-.25}].forEach(({pos:e,color:n,scale:i,rot:s})=>{const a=new Re;a.position.set(...e),a.scale.setScalar(i),a.rotation.z=s;const o=new Ti(.15,.8,6),c=new Ft({color:n,emissive:n,emissiveIntensity:1,roughness:.1,metalness:.3,transparent:!0,opacity:.85}),l=new J(o,c);l.position.y=.4,a.add(l);for(let u=0;u<3;u++){const d=new Ti(.08,.4,5),f=new J(d,c),g=u/3*Math.PI*2;f.position.set(Math.cos(g)*.15,.2,Math.sin(g)*.15),f.rotation.z=Math.random()*.4-.2,f.rotation.x=Math.random()*.3,a.add(f)}const h=new An(n,1.2,6);h.position.y=.5,a.add(h),this.scene.add(a)})}_createDeadTree(t,e){const n=new Re;n.position.set(t,0,e),n.rotation.y=Math.random()*Math.PI*2;const i=new Ft({color:2759184,roughness:.95}),s=new on(.2,.4,4,6),a=new J(s,i);a.position.y=2,a.rotation.z=(Math.random()-.5)*.2,a.castShadow=!0,n.add(a);for(let o=0;o<4;o++){const c=new on(.03,.12,2,4),l=new J(c,i);l.position.set(0,3+o*.3,0),l.rotation.z=.3+Math.random()*.8,l.rotation.y=o*Math.PI/2+Math.random()*.5,l.castShadow=!0,n.add(l)}this.scene.add(n)}_createGravestone(t,e){const n=new Ft({color:3816e3,roughness:.9}),i=Math.floor(Math.random()*3);let s;i===0?s=new ye(.6,1.2,.15):i===1?s=new ye(.5,1,.12):s=new ye(.15,1.4,.1);const a=new J(s,n);if(a.position.set(t,i===2?.7:.5,e),a.rotation.y=Math.random()*.4-.2,a.rotation.x=Math.random()*.1-.05,a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a),i===2){const o=new ye(.5,.1,.08),c=new J(o,n);c.position.set(t,1,e),c.rotation.y=a.rotation.y,c.castShadow=!0,this.scene.add(c)}}_scatterGrass(t,e,n,i,s){const a=new Ft({color:2767392,roughness:.9,side:de});for(let o=0;o<s;o++){const c=t+(Math.random()-.5)*n,l=e+(Math.random()-.5)*i,h=new dn(.1,.3+Math.random()*.3),u=new J(h,a);u.position.set(c,.15,l),u.rotation.y=Math.random()*Math.PI,u.rotation.x=-.1,this.scene.add(u)}}_createFloorRunes(){[{pos:[0,.02,-25],size:4,color:6710988},{pos:[0,.02,-55],size:3,color:13404211},{pos:[0,.02,-95],size:5,color:13382451},{pos:[0,.02,0],size:3,color:4500104},{pos:[0,.02,-42],size:2.5,color:8939178},{pos:[0,.02,-72],size:2.5,color:5605580}].forEach(({pos:e,size:n,color:i})=>{const s=new wi(n-.1,n,32),a=new ee({color:i,transparent:!0,opacity:.6,side:de}),o=new J(s,a);o.rotation.x=-Math.PI/2,o.position.set(...e),this.scene.add(o);const c=new wi(n*.4,n*.5,6),l=new J(c,a);l.rotation.x=-Math.PI/2,l.position.set(...e),this.scene.add(l);const h=new is(n*.3,16),u=new ee({color:i,transparent:!0,opacity:.3,side:de}),d=new J(h,u);d.rotation.x=-Math.PI/2,d.position.set(e[0],e[1]+.01,e[2]),this.scene.add(d);const f=new An(i,1.5,n*3);f.position.set(e[0],e[1]+.5,e[2]),this.scene.add(f)})}_createCathedral(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#3a3840",e.fillRect(0,0,256,256);for(let x=0;x<2e3;x++){const y=Math.random()*256,S=Math.random()*256,A=Math.random()*3+1,w=Math.floor(Math.random()*30);e.fillStyle=`rgb(${50+w}, ${48+w}, ${55+w})`,e.fillRect(y,S,A,A)}e.strokeStyle="#252228",e.lineWidth=2;for(let x=0;x<256;x+=32)e.beginPath(),e.moveTo(0,x),e.lineTo(256,x),e.stroke();for(let x=0;x<256;x+=64)for(let y=0;y<256;y+=64)e.beginPath(),e.moveTo(x+(y%64===0?0:32),y),e.lineTo(x+(y%64===0?0:32),y+32),e.stroke();const n=new Qo(t);n.wrapS=ln,n.wrapT=ln,n.repeat.set(2,2);const i=new Ft({color:4868176,roughness:.85,metalness:.1,map:n}),s=new Ft({color:2762037,roughness:.9,metalness:.05,map:n}),a=document.createElement("canvas");a.width=256,a.height=256;const o=a.getContext("2d");o.fillStyle="#2a2830",o.fillRect(0,0,256,256);for(let x=0;x<25;x++){const y=x%5*52+Math.random()*10,S=Math.floor(x/5)*52+Math.random()*10,A=40+Math.random()*10,w=40+Math.random()*10,R=Math.floor(Math.random()*20);o.fillStyle=`rgb(${38+R}, ${36+R}, ${42+R})`,o.beginPath(),o.roundRect(y,S,A,w,5),o.fill(),o.strokeStyle="#1a1820",o.lineWidth=2,o.stroke()}const c=new Qo(a);c.wrapS=ln,c.wrapT=ln,c.repeat.set(4,4);const l=new Ft({color:3815488,roughness:.95,metalness:.05,map:c});this._createFloorSection(0,0,16,16,l),this._createBonfire(this.bonfirePosition),this._createWall(-8,2,-8,1,6,16,i),this._createWall(8,2,-8,1,6,16,i),this._createWall(0,2,0,16,6,1,i),this._createFloorSection(0,-30,20,40,l),[[-6,-12],[6,-12],[-6,-22],[6,-22],[-6,-32],[6,-32],[-6,-42],[6,-42]].forEach(([x,y])=>{this._createPillar(x,y,i)}),this._createWall(-10,4,-30,1,10,44,i),this._createWall(10,4,-30,1,10,44,i),this._createFloorSection(-18,-25,12,14,l),this._createWall(-10,4,-18,1,10,6,i),this._createWall(-10,4,-38,1,10,10,i),this._createWall(-24,3,-25,1,8,14,i),this._createWall(-18,3,-32,12,8,1,i),this._createWall(-18,3,-18,12,8,1,i);const u=new ye(3,1.2,1.5),d=new Ft({color:3355456,roughness:.7}),f=new J(u,d);f.position.set(-21,.6,-25),f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f),this._createFloorSection(18,-25,12,14,l),this._createWall(10,4,-18,1,10,6,i),this._createWall(10,4,-38,1,10,10,i),this._createWall(24,3,-25,1,8,14,i),this._createWall(18,3,-32,12,8,1,i),this._createWall(18,3,-18,12,8,1,i),this._createHiddenWall(21,3,-32,4,6,.5,i,"chapel-secret"),this._createFloorSection(21,-38,6,8,l),this._createWall(18,3,-42,6,6,1,i),this._createWall(24,3,-38,1,6,8,i),this._createFloorSection(0,-55,16,10,l),this._createWall(-8,5,-55,1,12,10,i),this._createWall(8,5,-55,1,12,10,i),this._createWall(0,5,-60,16,12,1,i);const g=new ye(6,1.5,2),_=new J(g,d);_.position.set(0,.75,-58),_.castShadow=!0,_.receiveShadow=!0,this.scene.add(_);for(let x=-2;x<=2;x++)this._createCandle(x*1.2,-57.5);this._createLockedDoor(0,2.5,-50.5,3,5,.3,"crypt-key","Crypt Door"),this._createFloorSection(0,-70,20,20,s),[[-6,-65],[6,-65],[-6,-75],[6,-75]].forEach(([x,y])=>{this._createPillar(x,y,s,4)}),this._createWall(-10,3,-70,1,6,20,s),this._createWall(10,3,-70,1,6,20,s),this._createWall(0,3,-80,20,6,1,s);for(let x=0;x<6;x++){const y=new ye(1.8,.8,3),S=new Ft({color:2236968}),A=new J(y,S),w=x%2===0?-1:1;A.position.set(w*7,.4,-62-Math.floor(x/2)*6),A.castShadow=!0,A.receiveShadow=!0,this.scene.add(A)}this._createFloorSection(0,-95,24,16,s),this._createWall(-12,4,-95,1,10,16,s),this._createWall(12,4,-95,1,10,16,s),this._createWall(0,4,-103,24,10,1,s),[[-8,-88],[8,-88],[-8,-102],[8,-102]].forEach(([x,y])=>{this._createPillar(x,y,s,6)}),this._scatterDebris(0,-30,40,60,30,i)}_createFloorSection(t,e,n,i,s){const a=new dn(n,i,Math.floor(n),Math.floor(i)),o=a.attributes.position;for(let l=0;l<o.count;l++){const h=o.getX(l),u=o.getY(l);o.setZ(l,Math.sin(h*.3)*Math.cos(u*.3)*.05)}a.computeVertexNormals();const c=new J(a,s);c.rotation.x=-Math.PI/2,c.position.set(t,0,e),c.receiveShadow=!0,this.scene.add(c)}_createWall(t,e,n,i,s,a,o){const c=new ye(i,s,a),l=new J(c,o);l.position.set(t,e,n),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l),this.colliders.push({type:"box",mesh:l,bounds:new pn().setFromObject(l)})}_createPillar(t,e,n,i=8){const s=new on(.8,.9,.5,8),a=new J(s,n);a.position.set(t,.25,e),a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a);const o=new on(.5,.6,i-1,8),c=new J(o,n);c.position.set(t,i/2,e),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const l=new on(.9,.5,.6,8),h=new J(l,n);h.position.set(t,i-.3,e),h.castShadow=!0,h.receiveShadow=!0,this.scene.add(h),this.colliders.push({type:"cylinder",position:new E(t,i/2,e),radius:.6})}_createCandle(t,e){const n=new on(.05,.05,.3,6),i=new Ft({color:15658700}),s=new J(n,i);s.position.set(t,1.65,e),this.scene.add(s);const a=new An(16737826,.5,4);a.position.set(t,1.9,e),this.scene.add(a);const o=.4,c=()=>{requestAnimationFrame(c),a.intensity=o+Math.sin(Date.now()*.015+t*100)*.15+Math.random()*.1};c()}_createHiddenWall(t,e,n,i,s,a,o,c){const l=new ye(i,s,a),h=o.clone(),u=new J(l,h);return u.position.set(t,e,n),u.castShadow=!0,u.receiveShadow=!0,u.userData.isHidden=!0,u.userData.hiddenId=c,this.scene.add(u),this.hiddenWalls.push({id:c,mesh:u,revealed:!1,bounds:new pn().setFromObject(u)}),u}_createLockedDoor(t,e,n,i,s,a,o,c){const l=new ye(i,s,a),h=new Ft({color:3811866,roughness:.7,metalness:.2}),u=new J(l,h);u.position.set(t,e,n),u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u);const d=new ye(i+.4,s+.4,a+.1),f=new Ft({color:2236968}),g=new J(d,f);g.position.set(t,e,n-.05),this.scene.add(g);const _=new Te(.15,8,8),m=new Ft({color:16720418,emissive:6684672,emissiveIntensity:.5}),p=new J(_,m);p.position.set(t,e+.5,n+.2),this.scene.add(p);const x={id:o,name:c,mesh:u,lock:p,isOpen:!1,bounds:new pn().setFromObject(u)};return this.doors.push(x),this.colliders.push({type:"door",door:x,bounds:x.bounds}),x}tryOpenDoor(t,e){const n=this.doors.find(i=>i.id===t);if(!n||n.isOpen)return!1;if(e&&e.hasKey(t)){n.isOpen=!0,n.mesh.visible=!1,n.lock.material.color.setHex(2293538),n.lock.material.emissive.setHex(26112);const i=this.colliders.findIndex(s=>s.door===n);return i>=0&&this.colliders.splice(i,1),console.log(`[DOOR] ${n.name} opened!`),!0}return!1}getNearbyDoor(t,e=2.5){for(const n of this.doors){if(n.isOpen)continue;if(t.distanceTo(n.mesh.position)<e)return n}return null}revealHiddenWall(t){const e=this.hiddenWalls.find(a=>a.id===t);if(!e||e.revealed)return!1;e.revealed=!0;const n=e.mesh.material;n.transparent=!0;let i=1;const s=()=>{i-=.05,n.opacity=i,i>0?requestAnimationFrame(s):this.scene.remove(e.mesh)};return s(),console.log(`[SECRET] Hidden wall revealed: ${t}`),!0}checkHiddenWallHit(t,e){for(const n of this.hiddenWalls){if(n.revealed)continue;if(t.distanceTo(n.mesh.position)<e+2)return n}return null}_scatterDebris(t,e,n,i,s,a){for(let o=0;o<s;o++){const c=.15+Math.random()*.4,l=new ye(c,c*.5,c),h=new J(l,a);h.position.set(t+(Math.random()-.5)*n,c*.25,e+(Math.random()-.5)*i),h.rotation.y=Math.random()*Math.PI,h.rotation.x=(Math.random()-.5)*.3,h.castShadow=!0,this.scene.add(h)}}_createLighting(){const t=new op(11184861,8943462,8);this.scene.add(t);const e=new dp(8947899,6);this.scene.add(e);const n=new Ji(13421806,4);n.position.set(0,100,0),this.scene.add(n);const i=new Ji(8947882,3);i.position.set(0,50,0),i.target.position.set(0,0,-50),this.scene.add(i),this.scene.add(i.target);const s=new Ji(11189230,3);s.position.set(-50,80,-100),s.castShadow=!0,s.shadow.mapSize.set(4096,4096),s.shadow.camera.near=10,s.shadow.camera.far=200,s.shadow.camera.left=-60,s.shadow.camera.right=60,s.shadow.camera.top=60,s.shadow.camera.bottom=-60,s.shadow.bias=-1e-4,this.scene.add(s);const a=new Ji(13404262,.8);a.position.set(30,20,50),this.scene.add(a);const o=new Ji(10066363,.6);o.position.set(0,30,100),this.scene.add(o),[{pos:[0,3,5],color:16737826,intensity:4,dist:20},{pos:[0,1,5],color:16729088,intensity:3,dist:12},{pos:[-6,5,-12],color:6719726,intensity:2.5,dist:18},{pos:[6,5,-12],color:6719726,intensity:2.5,dist:18},{pos:[-6,5,-32],color:5601245,intensity:2,dist:18},{pos:[6,5,-32],color:5601245,intensity:2,dist:18},{pos:[0,4,-22],color:6719692,intensity:2,dist:20},{pos:[-21,3,-25],color:14500932,intensity:3,dist:15},{pos:[-18,6,-25],color:11154227,intensity:1.5,dist:20},{pos:[21,3,-25],color:6737015,intensity:3,dist:15},{pos:[18,6,-25],color:4500053,intensity:1.5,dist:20},{pos:[21,2,-40],color:16768358,intensity:3.5,dist:12},{pos:[0,4,-58],color:16764006,intensity:4,dist:20},{pos:[-2,2,-57],color:16755268,intensity:2,dist:8},{pos:[2,2,-57],color:16755268,intensity:2,dist:8},{pos:[-6,2,-65],color:4482764,intensity:2,dist:15},{pos:[6,2,-75],color:4482764,intensity:2,dist:15},{pos:[0,3,-70],color:5601194,intensity:1.5,dist:25},{pos:[-8,4,-95],color:11154261,intensity:3,dist:20},{pos:[8,4,-95],color:11154261,intensity:3,dist:20},{pos:[0,8,-98],color:13386871,intensity:4,dist:30},{pos:[0,1,-95],color:8921668,intensity:2.5,dist:20}].forEach(({pos:h,color:u,intensity:d,dist:f})=>{const g=new An(u,d,f);g.position.set(...h),this.scene.add(g)}),[[-6,6,-12],[6,6,-12],[-6,6,-22],[6,6,-22],[-6,6,-32],[6,6,-32],[-6,6,-42],[6,6,-42]].forEach(h=>{const u=new An(16746564,3,16);u.position.set(...h),this.scene.add(u);const d=3,f=Math.random()*1e3,g=()=>{requestAnimationFrame(g),u.intensity=d+Math.sin(Date.now()*.01+f)*.5+Math.sin(Date.now()*.023+f)*.4+Math.random()*.3};g()})}_createBonfire(t){const e=new Re;e.position.copy(t);const n=new on(.5,.6,.4,12),i=new Ft({color:3355443}),s=new J(n,i);s.position.y=.2,s.castShadow=!0,e.add(s);const a=new ds(.35,.08,8,16),o=new Ft({color:4473924}),c=new J(a,o);c.rotation.x=Math.PI/2,c.position.y=.4,e.add(c);const l=new An(16737826,2,10);l.position.y=1,l.castShadow=!0,e.add(l);const h=50,u=new ve,d=new Float32Array(h*3),f=new Float32Array(h*3);for(let p=0;p<h;p++){d[p*3]=(Math.random()-.5)*.4,d[p*3+1]=Math.random()*2,d[p*3+2]=(Math.random()-.5)*.4;const x=Math.random();f[p*3]=1,f[p*3+1]=.2+x*.5,f[p*3+2]=x*.1}u.setAttribute("position",new Pe(d,3)),u.setAttribute("color",new Pe(f,3));const g=new wc({size:.1,vertexColors:!0,transparent:!0,opacity:.9,blending:wn}),_=new tu(u,g);e.add(_);const m=()=>{requestAnimationFrame(m);const p=u.attributes.position;for(let x=0;x<h;x++){let y=p.getY(x)+.025;y>2&&(y=0,p.setX(x,(Math.random()-.5)*.4),p.setZ(x,(Math.random()-.5)*.4)),p.setY(x,y),p.setX(x,p.getX(x)+(Math.random()-.5)*.008)}p.needsUpdate=!0,l.intensity=1.8+Math.sin(Date.now()*.012)*.4+Math.random()*.3};m(),this.scene.add(e)}getBossPosition(){return new E(0,0,-95)}getEnemySpawns(){return[{pos:new E(0,0,-6),type:"HOLLOW_SOLDIER"},{pos:new E(-4,0,-15),type:"HOLLOW_SOLDIER"},{pos:new E(5,0,-22),type:"BERSERKER"},{pos:new E(0,0,-35),type:"SENTINEL"},{pos:new E(-18,0,-23),type:"BERSERKER"},{pos:new E(-20,0,-27),type:"HOLLOW_SOLDIER"},{pos:new E(18,0,-25),type:"SENTINEL"},{pos:new E(21,0,-38),type:"BERSERKER"},{pos:new E(-3,0,-54),type:"HOLLOW_SOLDIER"},{pos:new E(3,0,-54),type:"HOLLOW_SOLDIER"},{pos:new E(-5,0,-68),type:"SENTINEL"},{pos:new E(5,0,-72),type:"BERSERKER"},{pos:new E(0,0,-78),type:"BERSERKER"}]}getItemSpawns(){return[{pos:new E(6,.5,2),type:"remnant",value:50},{pos:new E(-6,.5,-18),type:"remnant",value:100},{pos:new E(7,.5,-30),type:"remnant",value:100},{pos:new E(-21,1.3,-25),type:"remnant",value:200},{pos:new E(20,.5,-28),type:"key",keyId:"crypt-key",name:"Crypt Key"},{pos:new E(21,.5,-40),type:"remnant",value:500},{pos:new E(0,1.6,-58),type:"remnant",value:300},{pos:new E(-7,.9,-62),type:"remnant",value:150},{pos:new E(7,.9,-74),type:"remnant",value:150}]}}class bv{constructor(t){this.keys={},this.mouseButtons={},this.mouseDelta={x:0,y:0},this.isLocked=!1,this.buffer={},this.bufferDuration=.15,this.domElement=t,window.addEventListener("keydown",e=>{this.keys[e.code]=!0,this._bufferAction(e.code)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),t.addEventListener("mousedown",e=>{this.mouseButtons[e.button]=!0,this._bufferAction(`mouse${e.button}`)}),t.addEventListener("mouseup",e=>{this.mouseButtons[e.button]=!1}),t.addEventListener("mousemove",e=>{this.isLocked&&(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY)}),t.addEventListener("click",()=>{this.isLocked||t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault())}_bufferAction(t){this.buffer[t]=this.bufferDuration}update(t){const e=t||.016666666666666666;for(const n in this.buffer)this.buffer[n]-=e,this.buffer[n]<=0&&delete this.buffer[n]}consumeBuffer(t){return this.buffer[t]?(delete this.buffer[t],!0):!1}getMouseDelta(){const t={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}get moveForward(){return this.keys.KeyW}get moveBack(){return this.keys.KeyS}get moveLeft(){return this.keys.KeyA}get moveRight(){return this.keys.KeyD}get dodge(){return this.consumeBuffer("Space")}get lightAttack(){return this.consumeBuffer("mouse0")}get heavyAttack(){return this.consumeBuffer("mouse2")}get block(){return this.keys.ShiftLeft||this.keys.ShiftRight}get lockOn(){return this.consumeBuffer("KeyQ")}get interact(){return this.consumeBuffer("KeyE")}getMovementVector(){let t=0,e=0;this.moveForward&&(e-=1),this.moveBack&&(e+=1),this.moveLeft&&(t-=1),this.moveRight&&(t+=1);const n=Math.sqrt(t*t+e*e);return n>0&&(t/=n,e/=n),{x:t,z:e}}}class Tv{constructor(t,e){this.scene=t,this.gm=e,this.items=[],this.inventory={keys:new Set},this.notificationEl=document.getElementById("item-notification")}initItems(t){t.forEach((e,n)=>{this.spawnItem(e.pos,e.type,e)})}spawnItem(t,e,n={}){const i={id:`item-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:e,position:t.clone(),collected:!1,mesh:null,light:null,...n};switch(e){case"remnant":this._createRemnantVisual(i);break;case"key":this._createKeyVisual(i);break;default:this._createGenericVisual(i)}return this.items.push(i),i}_createRemnantVisual(t){const e=new Te(.15,12,12),n=new Ft({color:8978346,emissive:4500070,emissiveIntensity:.8,transparent:!0,opacity:.9});t.mesh=new J(e,n),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh),t.light=new An(8978346,.8,4),t.light.position.copy(t.position),this.scene.add(t.light);const i=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=i+Math.sin(Date.now()*.003)*.15,t.mesh.rotation.y+=.02,t.light.position.y=t.mesh.position.y,t.light.intensity=.6+Math.sin(Date.now()*.005)*.3)};s()}_createKeyVisual(t){const e=new Re,n=new ds(.12,.03,8,16),i=new Ft({color:13412932,emissive:6702114,emissiveIntensity:.5,metalness:.8,roughness:.3}),s=new J(n,i);s.rotation.x=Math.PI/2,e.add(s);const a=new ye(.04,.25,.02),o=new J(a,i);o.position.y=-.18,e.add(o);const c=new ye(.08,.04,.02),l=new J(c,i);l.position.set(.04,-.25,0),e.add(l);const h=new J(c,i);h.position.set(.04,-.32,0),e.add(h),e.position.copy(t.position),t.mesh=e,this.scene.add(e),t.light=new An(16755268,1,5),t.light.position.copy(t.position),this.scene.add(t.light);const u=t.position.y,d=()=>{t.collected||(requestAnimationFrame(d),t.mesh.position.y=u+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.015,t.light.position.y=t.mesh.position.y,t.light.intensity=.8+Math.sin(Date.now()*.004)*.3)};d()}_createGenericVisual(t){const e=new Pc(.15),n=new Ft({color:11184895,emissive:4474026,emissiveIntensity:.5});t.mesh=new J(e,n),t.mesh.position.copy(t.position),this.scene.add(t.mesh);const i=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=i+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.02,t.mesh.rotation.x+=.01)};s()}update(t){for(const n of this.items){if(n.collected)continue;t.distanceTo(n.position)<1.5&&this.collectItem(n)}}collectItem(t){if(t.collected)return;t.collected=!0,t.mesh&&this.scene.remove(t.mesh),t.light&&this.scene.remove(t.light),this.gm.audioManager&&this.gm.audioManager.play("itemPickup",{position:t.position,volume:.6});let e="";switch(t.type){case"remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`,console.log(`[ITEM] Collected ${t.value} remnant`);break;case"key":this.inventory.keys.add(t.keyId),e=`Got ${t.name}`,console.log(`[ITEM] Collected key: ${t.name} (${t.keyId})`);break;default:e="Item collected"}this.showNotification(e)}showNotification(t){this.notificationEl&&(this.notificationEl.textContent=t,this.notificationEl.classList.add("visible"),setTimeout(()=>{this.notificationEl.classList.remove("visible")},2e3))}hasKey(t){return this.inventory.keys.has(t)}resetItems(){}}class Ev{constructor(t){this.gm=t,this.healthBar=document.getElementById("health-bar"),this.staminaBar=document.getElementById("stamina-bar"),this.postureBar=document.getElementById("posture-bar"),this.remnantLabel=document.getElementById("remnant"),this.lostRemnantLabel=document.getElementById("lost-remnant"),this.bossContainer=document.getElementById("boss-container"),this.bossName=document.getElementById("boss-name"),this.bossHealthBar=document.getElementById("boss-health-bar"),this.bossPostureBar=document.getElementById("boss-posture-bar"),this.bossPhase=document.getElementById("boss-phase"),this.enemyManager=null,this._createDamageVignette(),this.damageVignetteOpacity=0,this.staminaWarningActive=!1}_createDamageVignette(){this.damageVignette=document.createElement("div"),this.damageVignette.id="damage-vignette",this.damageVignette.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
      background: radial-gradient(ellipse at center, transparent 40%, rgba(180, 30, 30, 0.6) 100%);
      opacity: 0;
      transition: opacity 0.05s ease-out;
    `,document.body.appendChild(this.damageVignette),this.hitFlash=document.createElement("div"),this.hitFlash.id="hit-flash",this.hitFlash.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 998;
      background: rgba(255, 100, 100, 0.3);
      opacity: 0;
      transition: opacity 0.08s ease-out;
    `,document.body.appendChild(this.hitFlash)}flashDamage(t=.6){this.damageVignetteOpacity=Math.min(1,t),this.damageVignette.style.opacity=this.damageVignetteOpacity,this.hitFlash.style.opacity=Math.min(.5,t*.8),setTimeout(()=>{this.damageVignette.style.opacity=this.damageVignetteOpacity*.5,this.hitFlash.style.opacity=0},80),setTimeout(()=>{this.damageVignette.style.opacity=0},250)}flashStaminaDepleted(){this.staminaWarningActive||(this.staminaWarningActive=!0,this.staminaBar&&(this.staminaBar.style.background="linear-gradient(90deg, #ffaa00, #ff6600)",this.staminaBar.style.boxShadow="0 0 10px #ff6600",setTimeout(()=>{this.staminaBar.style.background="",this.staminaBar.style.boxShadow="",this.staminaWarningActive=!1},300)))}setEnemyManager(t){this.enemyManager=t}update(){this.healthBar&&(this.healthBar.style.width=`${this.gm.health/this.gm.maxHealth*100}%`),this.staminaBar&&(this.staminaBar.style.width=`${this.gm.stamina/this.gm.maxStamina*100}%`),this.postureBar&&(this.postureBar.style.width=`${this.gm.posture/this.gm.maxPosture*100}%`),this.remnantLabel&&(this.remnantLabel.textContent=`Remnant: ${this.gm.remnant}`),this.lostRemnantLabel&&(this.gm.bloodstain&&this.gm.heldRemnant>0?(this.lostRemnantLabel.style.display="block",this.lostRemnantLabel.textContent=`Lost: ${this.gm.heldRemnant} (recover at bloodstain)`):this.lostRemnantLabel.style.display="none"),this._updateBossUI()}_updateBossUI(){if(!this.enemyManager||!this.bossContainer)return;const t=this.enemyManager.getBoss();if(!t){this.bossContainer.style.display="none";return}if(t.isActive&&!t.isDead){if(this.bossContainer.style.display="block",this.bossName&&(this.bossName.textContent=t.name),this.bossHealthBar){const e=t.health/t.maxHealth*100;this.bossHealthBar.style.width=`${e}%`,t.phase===2?this.bossHealthBar.style.background="linear-gradient(90deg, #ff4400, #ff6622)":this.bossHealthBar.style.background="linear-gradient(90deg, #cc2222, #ff4444)"}if(this.bossPostureBar){const e=t.posture/t.maxPosture*100;this.bossPostureBar.style.width=`${e}%`}this.bossPhase&&(this.bossPhase.textContent=t.phase===2?"PHASE 2":"",this.bossPhase.style.color=t.phase===2?"#ff4400":"#ffcc00")}else this.bossContainer.style.display="none"}}class Av{constructor(t,e,n){this.gm=t,this.input=e,this.player=n,this.isOpen=!1,this.selectedTrack=0,this.tracks=["strength","vitality","stamina","spirit"],this._createUI(),window.addEventListener("keydown",i=>this._handleKey(i))}_createUI(){if(this.container=document.getElementById("crucible-container"),!this.container){console.warn("CrucibleUI: #crucible-container not found in HTML");return}this.promptEl=document.getElementById("crucible-prompt"),this.menuEl=document.getElementById("crucible-menu"),this.trackEls=this.tracks.map(t=>document.getElementById(`track-${t}`)),this.remnantEl=document.getElementById("crucible-remnant")}update(){if(!this.container)return;const t=this.gm.isNearBonfire(),e=this.gm.isDead;this.isOpen?(!t||e||this.input.keys.Escape)&&this._close():t&&!e?(this._showPrompt(!0),this.input.interact&&this._open()):this._showPrompt(!1),this.isOpen&&this._updateMenu()}_showPrompt(t){this.promptEl&&(this.promptEl.style.display=t?"block":"none")}_open(){this.isOpen=!0,this._showPrompt(!1),this.menuEl&&(this.menuEl.style.display="block"),document.pointerLockElement&&document.exitPointerLock()}_close(){this.isOpen=!1,this.menuEl&&(this.menuEl.style.display="none")}_handleKey(t){if(this.isOpen)switch(t.code){case"ArrowUp":case"KeyW":t.preventDefault(),this.selectedTrack=(this.selectedTrack-1+this.tracks.length)%this.tracks.length;break;case"ArrowDown":case"KeyS":t.preventDefault(),this.selectedTrack=(this.selectedTrack+1)%this.tracks.length;break;case"Enter":case"KeyF":t.preventDefault(),this._purchaseSelected();break;case"Escape":case"KeyE":t.preventDefault(),this._close();break}}_purchaseSelected(){const t=this.tracks[this.selectedTrack],e=this.gm.getTrackInfo(t);e.maxed||!e.canAfford||this.gm.infuse(t)&&(this.gm.applyInfusionBonuses(),this._applyVisualEffect(t),console.log(`[CRUCIBLE] Infused ${t} to level ${this.gm.infusions[t]}`))}_applyVisualEffect(t){if(!this.player)return;const e=this.gm.infusions[t],i=1+this.gm.getTotalDepth()*.01;switch(this.player.mesh.scale.setScalar(i),t){case"strength":this._addGlow(this.player.body,16729156,e*.1);break;case"vitality":this._addGlow(this.player.body,4521796,e*.1);break;case"stamina":this._addGlow(this.player.body,16777028,e*.1);break;case"spirit":this._addGlow(this.player.visor,4491519,e*.3);break}}_addGlow(t,e,n){if(!t||!t.material)return;const i=t.material.emissive?t.material.emissive.getHex():0,s=this._blendColors(i,e,.5);t.material.emissive.setHex(s),t.material.emissiveIntensity=Math.min(2,(t.material.emissiveIntensity||0)+n)}_blendColors(t,e,n){const i=t>>16&255,s=t>>8&255,a=t&255,o=e>>16&255,c=e>>8&255,l=e&255,h=Math.round(i+(o-i)*n),u=Math.round(s+(c-s)*n),d=Math.round(a+(l-a)*n);return h<<16|u<<8|d}_updateMenu(){this.remnantEl&&(this.remnantEl.textContent=`Remnant: ${this.gm.remnant}`),this.tracks.forEach((t,e)=>{const n=this.trackEls[e];if(!n)return;const i=this.gm.getTrackInfo(t),s=e===this.selectedTrack;n.classList.toggle("selected",s),n.classList.toggle("maxed",i.maxed),n.classList.toggle("affordable",i.canAfford&&!i.maxed);const a=n.querySelector(".track-name"),o=n.querySelector(".track-level"),c=n.querySelector(".track-cost"),l=n.querySelector(".track-bonus");a&&(a.textContent=i.name),o&&(o.textContent=`Lv. ${i.level}/${this.gm.MAX_TRACK_DEPTH}`),c&&(c.textContent=i.maxed?"MAX":`Cost: ${i.cost}`),l&&(l.textContent=i.bonus)})}}class wv{constructor(t,e,n){this.camera=t,this.target=e,this.input=n,this.distance=6,this.minDistance=3,this.maxDistance=12,this.height=2.5,this.sensitivity=.002,this.yaw=0,this.pitch=.3,this.minPitch=-.5,this.maxPitch=1.2,this.smoothing=8,this.currentPos=new E,this.lockOnTarget=null,this.lockOnYaw=0,this.lockOnTransition=0,this.lockOnTransitionSpeed=5,this.shakeIntensity=0,this.shakeDuration=0,this.shakeTimer=0,this.shakeOffset=new E,this.shakeDecay=.92}shake(t=.3,e=.15){this.shakeIntensity=Math.min(this.shakeIntensity+t,1),this.shakeDuration=Math.max(this.shakeDuration,e),this.shakeTimer=0}shakeLight(){this.shake(.15,.1)}shakeMedium(){this.shake(.35,.15)}shakeHeavy(){this.shake(.5,.2)}update(t){const e=this.input.getMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch+e.y*this.sensitivity));const n=this.target.position.clone();if(n.y+=this.height,this.lockOnTarget&&this.lockOnTarget.mesh){const h=this.lockOnTarget.mesh.position,u=this.target.position.distanceTo(h);if(this.lockOnTarget.isDead||u>25)this.lockOnTarget=null,this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);else{const d=new E().subVectors(h,n);d.y=0,this.lockOnYaw=Math.atan2(d.x,d.z)+Math.PI,this.lockOnTransition=Math.min(1,this.lockOnTransition+this.lockOnTransitionSpeed*t)}}else this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);let i=this.yaw;if(this.lockOnTransition>0){let h=this.lockOnYaw-this.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;i=this.yaw+h*this.lockOnTransition}const s=Math.sin(i)*this.distance*Math.cos(this.pitch),a=Math.cos(i)*this.distance*Math.cos(this.pitch),o=this.distance*Math.sin(this.pitch),c=new E(n.x+s,n.y+o,n.z+a);this.currentPos.lerp(c,this.smoothing*t),this._updateShake(t),this.camera.position.copy(this.currentPos),this.camera.position.add(this.shakeOffset);const l=n.clone();if(this.lockOnTarget&&this.lockOnTarget.mesh&&this.lockOnTransition>0){const h=this.lockOnTarget.mesh.position.clone();h.y+=1,l.lerp(h,.35*this.lockOnTransition)}this.camera.lookAt(l)}_updateShake(t){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity),this.shakeIntensity*=this.shakeDecay,this.shakeTimer+=t,this.shakeTimer>=this.shakeDuration&&(this.shakeIntensity=0,this.shakeOffset.set(0,0,0))):this.shakeOffset.set(0,0,0)}setLockOnTarget(t){if(this.lockOnTarget=t,t&&t.mesh){const e=this.target.position.clone();e.y+=this.height;const n=new E().subVectors(t.mesh.position,e);n.y=0,this.lockOnYaw=Math.atan2(n.x,n.z)+Math.PI}}isLockedOn(){return this.lockOnTarget!==null&&this.lockOnTransition>.5}clearLockOn(){this.lockOnTarget=null}getForwardDirection(){return new E(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).normalize()}getRightDirection(){return new E(-Math.cos(this.yaw),0,Math.sin(this.yaw)).normalize()}}class Cv{constructor(t){this.camera=t,this.context=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.initialized=!1,this.masterVolume=.7,this.musicVolume=.4,this.sfxVolume=.8,this.listener=null,this.currentMusic=null,this.musicSource=null,this.soundCooldowns={},this.soundBuffers={}}async init(){if(!this.initialized)try{this.context=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.context.createGain(),this.masterGain.gain.value=this.masterVolume,this.masterGain.connect(this.context.destination),this.musicGain=this.context.createGain(),this.musicGain.gain.value=this.musicVolume,this.musicGain.connect(this.masterGain),this.sfxGain=this.context.createGain(),this.sfxGain.gain.value=this.sfxVolume,this.sfxGain.connect(this.masterGain),this.listener=this.context.listener,await this.generateSoundBuffers(),this.initialized=!0,console.log("[AUDIO] AudioManager initialized")}catch(t){console.warn("[AUDIO] Failed to initialize:",t)}}async generateSoundBuffers(){this.soundBuffers.swordSwing=this.createNoiseBuffer(.15,"highpass",2e3,.3),this.soundBuffers.hitImpact=this.createImpactBuffer(.12,150,.6),this.soundBuffers.criticalHit=this.createImpactBuffer(.15,200,.8),this.soundBuffers.playerDamage=this.createImpactBuffer(.2,80,.5),this.soundBuffers.enemyGrunt1=this.createGruntBuffer(.2,120),this.soundBuffers.enemyGrunt2=this.createGruntBuffer(.25,100),this.soundBuffers.enemyGrunt3=this.createGruntBuffer(.18,140),this.soundBuffers.dodge=this.createNoiseBuffer(.2,"bandpass",800,.25),this.soundBuffers.footstepStone=this.createFootstepBuffer(.08,"stone"),this.soundBuffers.footstepMetal=this.createFootstepBuffer(.1,"metal"),this.soundBuffers.death=this.createDeathBuffer(.8),this.soundBuffers.postureBreak=this.createPostureBreakBuffer(.3),this.soundBuffers.itemPickup=this.createChimeBuffer(.3,[523,659,784]),this.soundBuffers.doorUnlock=this.createChimeBuffer(.4,[392,494,587]),this.soundBuffers.menuSelect=this.createChimeBuffer(.15,[880]),this.soundBuffers.menuConfirm=this.createChimeBuffer(.2,[523,659]),this.soundBuffers.bossRoar=this.createRoarBuffer(.6),this.soundBuffers.staminaDepleted=this.createStaminaDepletedBuffer(.15),console.log("[AUDIO] Sound buffers generated")}createNoiseBuffer(t,e,n,i){const s=this.context.sampleRate,a=s*t,o=this.context.createBuffer(1,a,s),c=o.getChannelData(0);for(let l=0;l<a;l++){const h=l/a,u=Math.sin(h*Math.PI);c[l]=(Math.random()*2-1)*u*i}return{buffer:o,filterType:e,filterFreq:n}}createImpactBuffer(t,e,n){const i=this.context.sampleRate,s=i*t,a=this.context.createBuffer(1,s,i),o=a.getChannelData(0);for(let c=0;c<s;c++){const l=c/s,h=Math.exp(-l*10),u=Math.sin(2*Math.PI*e*l*(1-l*.5)),d=(Math.random()*2-1)*.3;o[c]=(u+d)*h*n}return{buffer:a}}createGruntBuffer(t,e){const n=this.context.sampleRate,i=n*t,s=this.context.createBuffer(1,i,n),a=s.getChannelData(0);for(let o=0;o<i;o++){const c=o/i,l=Math.sin(c*Math.PI)*Math.exp(-c*3),h=Math.sin(2*Math.PI*e*o/n),u=Math.sin(2*Math.PI*e*2.5*o/n)*.5,d=Math.sin(2*Math.PI*e*4*o/n)*.25,f=(Math.random()*2-1)*.2;a[o]=(h+u+d+f)*l*.4}return{buffer:s}}createFootstepBuffer(t,e){const n=this.context.sampleRate,i=n*t,s=this.context.createBuffer(1,i,n),a=s.getChannelData(0),o=e==="metal"?400:200,c=e==="metal"?.6:.4;for(let l=0;l<i;l++){const h=l/i,u=Math.exp(-h*20),d=Math.sin(2*Math.PI*o*h),f=(Math.random()*2-1)*c;a[l]=(d*.5+f)*u*.3}return{buffer:s}}createDeathBuffer(t){const e=this.context.sampleRate,n=e*t,i=this.context.createBuffer(1,n,e),s=i.getChannelData(0);for(let a=0;a<n;a++){const o=a/n,c=Math.exp(-o*2)*(1-o),l=150*(1-o*.5),h=Math.sin(2*Math.PI*l*a/e),u=Math.tanh(h*3),d=(Math.random()*2-1)*.3*(1-o);s[a]=(u+d)*c*.5}return{buffer:i}}createPostureBreakBuffer(t){const e=this.context.sampleRate,n=e*t,i=this.context.createBuffer(1,n,e),s=i.getChannelData(0);for(let a=0;a<n;a++){const o=a/n,c=Math.exp(-o*5),l=Math.sin(2*Math.PI*800*a/e),h=Math.sin(2*Math.PI*1200*a/e),u=(Math.random()*2-1)*.5;s[a]=(l*.3+h*.2+u)*c*.4}return{buffer:i}}createChimeBuffer(t,e){const n=this.context.sampleRate,i=n*t,s=this.context.createBuffer(1,i,n),a=s.getChannelData(0);for(let o=0;o<i;o++){const c=o/i,l=Math.exp(-c*4);let h=0;e.forEach((u,d)=>{const f=d*.03*n;if(o>f){const g=(o-f)/n;h+=Math.sin(2*Math.PI*u*g)/e.length}}),a[o]=h*l*.3}return{buffer:s}}createStaminaDepletedBuffer(t){const e=this.context.sampleRate,n=e*t,i=this.context.createBuffer(1,n,e),s=i.getChannelData(0);for(let a=0;a<n;a++){const o=a/n,c=Math.exp(-o*8)*Math.sin(o*Math.PI*2),l=(Math.random()*2-1)*.6,h=Math.sin(2*Math.PI*200*a/e)*.3;s[a]=(l+h)*Math.abs(c)*.25}return{buffer:i}}createRoarBuffer(t){const e=this.context.sampleRate,n=e*t,i=this.context.createBuffer(1,n,e),s=i.getChannelData(0);for(let a=0;a<n;a++){const o=a/n;let c;o<.1?c=o/.1:o<.7?c=1:c=(1-o)/.3;const l=Math.sin(2*Math.PI*60*a/e),h=Math.sin(2*Math.PI*65*a/e),u=Math.sin(2*Math.PI*120*a/e)*.5,d=(Math.random()*2-1)*.4,f=Math.tanh((l+h+u+d)*2);s[a]=f*c*.5}return{buffer:i}}play(t,e={}){if(!this.initialized||!this.soundBuffers[t])return;const{position:n=null,volume:i=1,pitch:s=1,cooldown:a=0,variation:o=0}=e,c=performance.now();if(a>0){const f=this.soundCooldowns[t]||0;if(c-f<a)return;this.soundCooldowns[t]=c}const l=this.soundBuffers[t],h=this.context.createBufferSource();h.buffer=l.buffer;const u=s+(Math.random()*2-1)*o;h.playbackRate.value=Math.max(.5,Math.min(2,u));const d=this.context.createGain();if(d.gain.value=i,l.filterType){const f=this.context.createBiquadFilter();f.type=l.filterType,f.frequency.value=l.filterFreq,h.connect(f),f.connect(d)}else h.connect(d);if(n&&this.camera){const f=this.context.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1,f.maxDistance=50,f.rolloffFactor=1,f.setPosition(n.x,n.y,n.z),d.connect(f),f.connect(this.sfxGain)}else d.connect(this.sfxGain);return h.start(),h}playEnemyGrunt(t){const e=["enemyGrunt1","enemyGrunt2","enemyGrunt3"],n=e[Math.floor(Math.random()*e.length)];this.play(n,{position:t,volume:.6,pitch:.9+Math.random()*.2,cooldown:200})}playFootstep(t,e="stone"){const n=e==="metal"?"footstepMetal":"footstepStone";this.play(n,{position:t,volume:.4,pitch:.9+Math.random()*.2,cooldown:150})}updateListener(){if(!this.initialized||!this.camera||!this.listener)return;const t=this.camera.position,e=new E;this.camera.getWorldDirection(e);const n=this.camera.up;this.listener.positionX?(this.listener.positionX.value=t.x,this.listener.positionY.value=t.y,this.listener.positionZ.value=t.z,this.listener.forwardX.value=e.x,this.listener.forwardY.value=e.y,this.listener.forwardZ.value=e.z,this.listener.upX.value=n.x,this.listener.upY.value=n.y,this.listener.upZ.value=n.z):(this.listener.setPosition(t.x,t.y,t.z),this.listener.setOrientation(e.x,e.y,e.z,n.x,n.y,n.z))}startAmbientMusic(){this.initialized&&this.currentMusic!=="ambient"&&(this.stopMusic(),this.currentMusic="ambient",this.createAmbientDrone())}startBossMusic(){this.initialized&&this.currentMusic!=="boss"&&(this.stopMusic(),this.currentMusic="boss",this.createBossMusic())}createAmbientDrone(){const t=this.context.createOscillator();t.type="sine",t.frequency.value=55;const e=this.context.createOscillator();e.type="sine",e.frequency.value=82.5;const n=this.context.createOscillator();n.type="sine",n.frequency.value=.1;const i=this.context.createGain();i.gain.value=2,n.connect(i),i.connect(t.frequency);const s=this.context.createGain();s.gain.value=.15;const a=this.context.createGain();a.gain.value=.1,t.connect(s),e.connect(a),s.connect(this.musicGain),a.connect(this.musicGain),t.start(),e.start(),n.start(),this.musicSource={oscs:[t,e,n]}}createBossMusic(){const t=this.context.createOscillator();t.type="sawtooth",t.frequency.value=55;const e=this.context.createWaveShaper();e.curve=this.makeDistortionCurve(20);const n=this.context.createOscillator();n.type="square",n.frequency.value=2;const i=this.context.createGain();i.gain.value=.3;const s=this.context.createGain();s.gain.value=.2,n.connect(i),i.connect(s.gain),t.connect(e),e.connect(s),s.connect(this.musicGain),t.start(),n.start(),this.musicSource={oscs:[t,n]}}makeDistortionCurve(t){const n=new Float32Array(44100),i=Math.PI/180;for(let s=0;s<44100;++s){const a=s*2/44100-1;n[s]=(3+t)*a*20*i/(Math.PI+t*Math.abs(a))}return n}stopMusic(){this.musicSource&&this.musicSource.oscs&&this.musicSource.oscs.forEach(t=>{try{t.stop()}catch{}}),this.musicSource=null,this.currentMusic=null}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&(this.masterGain.gain.value=this.masterVolume)}setMusicVolume(t){this.musicVolume=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}resume(){this.context&&this.context.state==="suspended"&&this.context.resume()}}class Rv{constructor(t){this.scene=t,this.particles=[],this.slashTrails=[],this.embers=[],this.dustMotes=[],this._initSharedAssets(),this._initEmbers(),this._initDustMotes()}_initSharedAssets(){this.sparkGeo=new ve;const t=new Float32Array([0,.05,0,-.02,0,0,0,-.05,0,.02,0,0,0,.05,0,0,0,.02,0,-.05,0,0,0,-.02]);this.sparkGeo.setAttribute("position",new Pe(t,3)),this.bloodGeo=new Dc(.06,0),this.emberGeo=new Te(.02,4,4),this.sparkMat=new ee({color:16755268,transparent:!0,opacity:1,side:de}),this.critSparkMat=new ee({color:16777096,transparent:!0,opacity:1,side:de}),this.bloodMat=new ee({color:8912930,transparent:!0,opacity:.9}),this.emberMat=new ee({color:16729088,transparent:!0,opacity:.7}),this.slashMat=new ee({color:6719743,transparent:!0,opacity:.6,side:de,blending:wn,depthWrite:!1}),this.heavySlashMat=new ee({color:16737860,transparent:!0,opacity:.7,side:de,blending:wn,depthWrite:!1})}_initEmbers(){for(let e=0;e<30;e++)this._spawnEmber()}_spawnEmber(){const t=new J(this.emberGeo,this.emberMat.clone());t.position.set((Math.random()-.5)*60,Math.random()*.5,(Math.random()-.5)*100-20),this.scene.add(t),this.embers.push({mesh:t,velocity:new E((Math.random()-.5)*.3,.3+Math.random()*.5,(Math.random()-.5)*.3),life:Math.random()*10,maxLife:8+Math.random()*6})}_initDustMotes(){this.dustGeo=new dn(.03,.03),this.dustMat=new ee({color:16777198,transparent:!0,opacity:.4,blending:wn,depthWrite:!1,side:de});for(let e=0;e<80;e++){const n=new J(this.dustGeo,this.dustMat.clone());n.position.set((Math.random()-.5)*40,.5+Math.random()*5,(Math.random()-.5)*80-20),this.scene.add(n),this.dustMotes.push({mesh:n,baseY:n.position.y,driftSpeed:.1+Math.random()*.2,driftAmplitude:.3+Math.random()*.5,phase:Math.random()*Math.PI*2,rotateSpeed:(Math.random()-.5)*2})}}spawnSlashTrail(t,e,n=!1){const i=n?1.8:1.4,s=n?Math.PI*.7:Math.PI*.5,a=12,o=n?.15:.1,c=new au;c.moveTo(0,0);for(let f=0;f<=a;f++){const g=-s/2+s*f/a,_=Math.cos(g)*i,m=Math.sin(g)*i;f===0?c.moveTo(_,m):c.lineTo(_,m)}for(let f=a;f>=0;f--){const g=-s/2+s*f/a,_=Math.cos(g)*(i-o),m=Math.sin(g)*(i-o);c.lineTo(_,m)}c.closePath();const l=new Ic(c),h=(n?this.heavySlashMat:this.slashMat).clone(),u=new J(l,h);u.position.copy(t),u.position.y+=1.2;const d=Math.atan2(e.x,e.z);u.rotation.y=d,u.rotation.x=n?-.5:.2,this.scene.add(u),this.slashTrails.push({mesh:u,life:0,maxLife:n?.35:.25,scaleStart:.3,scaleEnd:1})}spawnHitSparks(t,e=8,n=!1){const i=n?e*2:e,s=n?this.critSparkMat:this.sparkMat;for(let a=0;a<i;a++){const o=new J(this.sparkGeo,s.clone());o.position.copy(t),o.position.y+=.8+Math.random()*.4;const c=Math.random()*Math.PI*2,l=2+Math.random()*4,h=2+Math.random()*3;this.scene.add(o),this.particles.push({mesh:o,velocity:new E(Math.cos(c)*l,h,Math.sin(c)*l),gravity:-15,life:0,maxLife:.3+Math.random()*.2,type:"spark"})}}spawnBlood(t,e,n=6){const i=Math.min(n,15);for(let s=0;s<i;s++){const a=new J(this.bloodGeo,this.bloodMat.clone());a.position.copy(t),a.position.y+=.8+Math.random()*.6;const c=Math.atan2(e.x,e.z)+(Math.random()-.5)*Math.PI*.6,l=3+Math.random()*3,h=1+Math.random()*3;this.scene.add(a),this.particles.push({mesh:a,velocity:new E(Math.sin(c)*l,h,Math.cos(c)*l),gravity:-18,life:0,maxLife:.6+Math.random()*.4,type:"blood",scale:.8+Math.random()*.4})}}spawnPostureBreak(t){this.spawnHitSparks(t,20,!0);const e=new wi(.1,.3,32),n=new ee({color:16763972,transparent:!0,opacity:.8,side:de,blending:wn,depthWrite:!1}),i=new J(e,n);i.position.copy(t),i.position.y+=1,i.rotation.x=-Math.PI/2,this.scene.add(i),this.particles.push({mesh:i,velocity:new E(0,0,0),gravity:0,life:0,maxLife:.5,type:"ring",expandRate:8})}spawnBlockSparks(t){for(let n=0;n<5;n++){const i=new J(this.sparkGeo,this.sparkMat.clone());i.material.color.setHex(8947967),i.position.copy(t),i.position.y+=1;const s=Math.random()*Math.PI*2,a=1+Math.random()*2;this.scene.add(i),this.particles.push({mesh:i,velocity:new E(Math.cos(s)*a,1+Math.random()*2,Math.sin(s)*a),gravity:-10,life:0,maxLife:.25,type:"spark"})}}spawnDeathBurst(t){for(let e=0;e<12;e++){const n=e/12*Math.PI*2,i=new J(this.bloodGeo,this.bloodMat.clone());i.position.copy(t),i.position.y+=1,this.scene.add(i),this.particles.push({mesh:i,velocity:new E(Math.cos(n)*4,2+Math.random()*3,Math.sin(n)*4),gravity:-15,life:0,maxLife:.8,type:"blood",scale:1.2})}for(let e=0;e<6;e++){const n=new Te(.1,8,8),i=new ee({color:8956671,transparent:!0,opacity:.8,blending:wn}),s=new J(n,i);s.position.copy(t),s.position.y+=.5+Math.random()*.5,s.position.x+=(Math.random()-.5)*.5,s.position.z+=(Math.random()-.5)*.5,this.scene.add(s),this.particles.push({mesh:s,velocity:new E((Math.random()-.5)*.5,2+Math.random()*1,(Math.random()-.5)*.5),gravity:0,life:0,maxLife:1.5+Math.random()*.5,type:"wisp"})}}update(t){this._updateDeathEffects(t);for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.life+=t,i.velocity.y+=i.gravity*t,i.mesh.position.add(i.velocity.clone().multiplyScalar(t)),i.type==="ring"){const a=1+i.expandRate*i.life;i.mesh.scale.set(a,a,1)}if(i.type==="playerSoul"){i.mesh.position.x+=Math.sin(i.life*2)*t*.5,i.mesh.position.z+=Math.cos(i.life*2)*t*.5;const o=.6+Math.sin(i.life*5)*.4;i.mesh.material.opacity=o*(1-i.life/i.maxLife)}if(i.type==="deathMist"){const a=1+i.life*.5;i.mesh.scale.setScalar(a)}const s=1-i.life/i.maxLife;if(i.mesh.material.opacity!==void 0&&(i.mesh.material.opacity=s*(i.type==="blood"?.9:1)),i.scale){const a=i.scale*s;i.mesh.scale.setScalar(a)}i.type==="blood"&&i.mesh.position.y<.05&&(i.mesh.position.y=.05,i.velocity.x*=.5,i.velocity.z*=.5,i.velocity.y=0),i.type==="spark"&&(i.mesh.rotation.x+=t*10,i.mesh.rotation.z+=t*8),i.life>=i.maxLife&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose?.(),i.mesh.material.dispose?.(),this.particles.splice(n,1))}for(let n=this.slashTrails.length-1;n>=0;n--){const i=this.slashTrails[n];i.life+=t;const s=i.life/i.maxLife,a=ci.lerp(i.scaleStart,i.scaleEnd,s);i.mesh.scale.setScalar(a),i.mesh.material.opacity=(1-s)*.6,i.life>=i.maxLife&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.slashTrails.splice(n,1))}for(let n=this.embers.length-1;n>=0;n--){const i=this.embers[n];i.life+=t,i.mesh.position.add(i.velocity.clone().multiplyScalar(t)),i.mesh.position.x+=Math.sin(i.life*2)*.01,i.mesh.position.z+=Math.cos(i.life*1.5)*.01;const s=1-i.life/i.maxLife;i.mesh.material.opacity=s*.7,i.life>=i.maxLife&&(i.life=0,i.mesh.position.set((Math.random()-.5)*60,Math.random()*.3,(Math.random()-.5)*100-20),i.maxLife=8+Math.random()*6)}const e=Date.now()*.001;for(const n of this.dustMotes){n.mesh.position.y=n.baseY+Math.sin(e*n.driftSpeed+n.phase)*n.driftAmplitude,n.mesh.position.x+=Math.sin(e*.5+n.phase)*.002,n.mesh.position.z+=Math.cos(e*.3+n.phase)*.002,n.mesh.rotation.z+=n.rotateSpeed*t;const i=.3+Math.sin(e*3+n.phase*5)*.15;n.mesh.material.opacity=i}}spawnPlayerDeathEffect(t,e){for(let n=0;n<15;n++){const i=new Te(.15+Math.random()*.1,8,8),s=new ee({color:8965375,transparent:!0,opacity:.9,blending:wn}),a=new J(i,s);a.position.copy(t),a.position.y+=.5+Math.random()*.8,a.position.x+=(Math.random()-.5)*.6,a.position.z+=(Math.random()-.5)*.6,this.scene.add(a),this.particles.push({mesh:a,velocity:new E((Math.random()-.5)*1.5,3+Math.random()*2,(Math.random()-.5)*1.5),gravity:-.5,life:0,maxLife:2.5+Math.random()*1.5,type:"playerSoul"})}for(let n=0;n<20;n++){const i=new Te(.2+Math.random()*.15,6,6),s=new ee({color:4456465,transparent:!0,opacity:.7}),a=new J(i,s);a.position.copy(t),a.position.y+=Math.random()*1.5;const o=Math.random()*Math.PI*2,c=1+Math.random()*2;this.scene.add(a),this.particles.push({mesh:a,velocity:new E(Math.cos(o)*c,.5+Math.random()*1,Math.sin(o)*c),gravity:-1,life:0,maxLife:2+Math.random()*1,type:"deathMist",scale:1})}this._createDeathVignette(e),e&&this._triggerCameraShake(e)}_createDeathVignette(t){const e=new dn(2,2),n=new Be({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uIntensity:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform float uTime;
        uniform float uIntensity;
        
        void main() {
          vec2 center = vUv - 0.5;
          float dist = length(center) * 1.8;
          
          // Dark red vignette
          float vignette = smoothstep(0.3, 1.2, dist);
          vec3 color = mix(vec3(0.0), vec3(0.3, 0.0, 0.0), vignette);
          
          // Pulsing effect
          float pulse = sin(uTime * 2.0) * 0.1 + 0.9;
          float alpha = vignette * uIntensity * pulse;
          
          gl_FragColor = vec4(color, alpha * 0.85);
        }
      `}),i=new J(e,n);i.frustumCulled=!1,i.renderOrder=999,this.scene.add(i),this.deathVignette={mesh:i,material:n,life:0,fadeInDuration:.5,holdDuration:2.5,fadeOutDuration:.5}}_triggerCameraShake(t){this.cameraShake||(this.cameraShake={originalPosition:t.position.clone(),intensity:.3,decay:.95,duration:.8,elapsed:0,camera:t})}_updateDeathEffects(t){if(this.deathVignette){const e=this.deathVignette;e.life+=t,e.material.uniforms.uTime.value=e.life;const n=e.fadeInDuration+e.holdDuration+e.fadeOutDuration;if(e.life<e.fadeInDuration)e.material.uniforms.uIntensity.value=e.life/e.fadeInDuration;else if(e.life<e.fadeInDuration+e.holdDuration)e.material.uniforms.uIntensity.value=1;else if(e.life<n){const i=(e.life-e.fadeInDuration-e.holdDuration)/e.fadeOutDuration;e.material.uniforms.uIntensity.value=1-i}else this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose(),this.deathVignette=null}if(this.cameraShake){const e=this.cameraShake;if(e.elapsed+=t,e.elapsed<e.duration){const n=1-e.elapsed/e.duration,i=e.intensity*n;e.camera.position.x+=(Math.random()-.5)*i,e.camera.position.y+=(Math.random()-.5)*i*.5,e.camera.position.z+=(Math.random()-.5)*i}else this.cameraShake=null}}dispose(){this.particles.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.particles=[],this.slashTrails.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.slashTrails=[],this.embers.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.embers=[],this.dustMotes.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.dustMotes=[]}}const Pv={uniforms:{tDiffuse:{value:null},brightness:{value:.3},contrast:{value:1.15},saturation:{value:1.1},vignetteIntensity:{value:.35},vignetteRadius:{value:.85}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float brightness;
    uniform float contrast;
    uniform float saturation;
    uniform float vignetteIntensity;
    uniform float vignetteRadius;
    varying vec2 vUv;
    
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      
      // Brightness
      color.rgb += brightness;
      
      // Contrast
      color.rgb = (color.rgb - 0.5) * contrast + 0.5;
      
      // Saturation
      float luminance = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      color.rgb = mix(vec3(luminance), color.rgb, saturation);
      
      // Vignette - darkens edges for cinematic feel
      vec2 center = vUv - 0.5;
      float dist = length(center);
      float vignette = smoothstep(vignetteRadius, vignetteRadius - 0.4, dist);
      color.rgb *= mix(1.0 - vignetteIntensity, 1.0, vignette);
      
      // Subtle warm color grading (fantasy atmosphere)
      color.r *= 1.02;
      color.b *= 0.95;
      
      gl_FragColor = color;
    }
  `},kn=new bx({antialias:!0});kn.setSize(window.innerWidth,window.innerHeight);kn.setPixelRatio(Math.min(window.devicePixelRatio,2));kn.shadowMap.enabled=!0;kn.shadowMap.type=yh;kn.toneMapping=cc;kn.toneMappingExposure=2;document.body.appendChild(kn.domElement);const li=new nf;li.fog=new Mc(1710120,.003);const _s=new Xe(60,window.innerWidth/window.innerHeight,.1,200),cr=new Cx(kn),Iv=new Rx(li,_s);cr.addPass(Iv);const Eu=new gs(new nt(window.innerWidth,window.innerHeight),.5,.4,.85);cr.addPass(Eu);const Dv=new Su(Pv);cr.addPass(Dv);const Lv=new mu,Oe=new Ix,er=new bv(kn.domElement),nr=new Cv(_s),ir=new Rv(li),Fc=new Ev(Oe);let xh=!1;const ca=async()=>{xh||(await nr.init(),nr.startAmbientMusic(),xh=!0,document.removeEventListener("click",ca),document.removeEventListener("keydown",ca))};document.addEventListener("click",ca);document.addEventListener("keydown",ca);const $n=new Sv(li),ts=new Tv(li,Oe);ts.initItems($n.getItemSpawns());const tn=new _v(li,Oe,er),Oc=new wv(_s,tn.mesh,er);tn.setCameraController(Oc);const Bc=new Mv(li,Oe,tn,$n,ir);Oe.setCheckpoint($n.bonfirePosition.clone());Oe.setEntities(tn,Bc,li,_s);Oe.bonfirePosition=$n.bonfirePosition;Oe.audioManager=nr;Oe.particleManager=ir;Oe.hud=Fc;Oe.cameraController=Oc;Fc.setEnemyManager(Bc);const vh=new Av(Oe,er,tn);window.addEventListener("resize",()=>{_s.aspect=window.innerWidth/window.innerHeight,_s.updateProjectionMatrix(),kn.setSize(window.innerWidth,window.innerHeight),cr.setSize(window.innerWidth,window.innerHeight),Eu.resolution.set(window.innerWidth,window.innerHeight)});function Au(){requestAnimationFrame(Au);const r=Math.min(Lv.getDelta(),.05);if(er.update(r),Oe.updateHitstop(r)?ir.update(r*.1):(tn.update(r),Bc.update(r,tn),ir.update(r)),Oc.update(r),ts.update(tn.mesh.position),Fc.update(),vh.update(),Oe.update(r),nr.updateListener(),Oe.collectBloodstain(),tn.activeAttack){const s=$n.checkHiddenWallHit(tn.activeAttack.position,tn.activeAttack.range);s&&!s.revealed&&$n.revealHiddenWall(s.id)}const e=$n.getNearbyDoor(tn.mesh.position),n=document.getElementById("door-prompt"),i=document.getElementById("door-name");if(e&&!vh.isOpen?(n.style.display="block",i.textContent=e.name,ts.hasKey(e.id)?(n.classList.remove("locked"),er.interact&&($n.tryOpenDoor(e.id,ts),ts.showNotification(`${e.name} Opened`))):(n.classList.add("locked"),i.textContent=`${e.name} (Locked)`)):n.style.display="none",Oe.bloodstainMesh){const s=.6+Math.sin(Date.now()*.005)*.3;Oe.bloodstainMesh.material.opacity=s}cr.render()}Au();window.gameManager=Oe;window.player=tn;window.world=$n;window.itemManager=ts;window.audioManager=nr;window.particleManager=ir;
