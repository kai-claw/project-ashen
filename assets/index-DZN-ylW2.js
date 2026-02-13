(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const wo="182",Th=0,ac=1,Eh=2,da=1,ml=2,ps=3,Qi=0,qe=1,ue=2,Ei=0,Hn=1,oi=2,rc=3,oc=4,Ah=5,un=100,Ch=101,Rh=102,Ph=103,Ih=104,Dh=200,Lh=201,Nh=202,Uh=203,br=204,Tr=205,Fh=206,Bh=207,Oh=208,kh=209,zh=210,Gh=211,Vh=212,Hh=213,Wh=214,Er=0,Ar=1,Cr=2,Xn=3,Rr=4,Pr=5,Ir=6,Dr=7,gl=0,Xh=1,qh=2,Ai=0,_l=1,vl=2,xl=3,bo=4,Ml=5,yl=6,Sl=7,wl=300,gn=301,qn=302,Lr=303,Nr=304,Ia=306,fn=1e3,Oi=1001,Ur=1002,Fe=1003,Yh=1004,Bs=1005,Ge=1006,Ha=1007,pn=1008,ni=1009,bl=1010,Tl=1011,Ss=1012,To=1013,Ci=1014,wi=1015,si=1016,Eo=1017,Ao=1018,ws=1020,El=35902,Al=35899,Cl=1021,Rl=1022,mi=1023,Hi=1026,mn=1027,Pl=1028,Co=1029,Yn=1030,Ro=1031,Po=1033,fa=33776,pa=33777,ma=33778,ga=33779,Fr=35840,Br=35841,Or=35842,kr=35843,zr=36196,Gr=37492,Vr=37496,Hr=37488,Wr=37489,Xr=37490,qr=37491,Yr=37808,Kr=37809,Zr=37810,$r=37811,Jr=37812,jr=37813,Qr=37814,to=37815,eo=37816,io=37817,no=37818,so=37819,ao=37820,ro=37821,oo=36492,co=36494,lo=36495,ho=36283,uo=36284,fo=36285,po=36286,Io=2200,Do=2201,Kh=2202,xa=2300,mo=2301,Wa=2302,zn=2400,Gn=2401,Ma=2402,Lo=2500,Zh=2501,$h=3200,Il=0,Jh=1,$i="",ci="srgb",Kn="srgb-linear",ya="linear",oe="srgb",Sn=7680,cc=519,jh=512,Qh=513,tu=514,No=515,eu=516,iu=517,Uo=518,nu=519,go=35044,lc="300 es",bi=2e3,Sa=2001;function Dl(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function su(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function wa(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function au(){const a=wa("canvas");return a.style.display="block",a}const hc={};function ba(...a){const t="THREE."+a.shift();console.log(t,...a)}function Lt(...a){const t="THREE."+a.shift();console.warn(t,...a)}function Dt(...a){const t="THREE."+a.shift();console.error(t,...a)}function bs(...a){const t=a.join(" ");t in hc||(hc[t]=!0,Lt(...a))}function ru(a,t,e){return new Promise(function(i,n){function s(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}class xn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uc=1234567;const _s=Math.PI/180,Ts=180/Math.PI;function gi(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[a&255]+Oe[a>>8&255]+Oe[a>>16&255]+Oe[a>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Yt(a,t,e){return Math.max(t,Math.min(e,a))}function Fo(a,t){return(a%t+t)%t}function ou(a,t,e,i,n){return i+(a-t)*(n-i)/(e-t)}function cu(a,t,e){return a!==t?(e-a)/(t-a):0}function vs(a,t,e){return(1-e)*a+e*t}function lu(a,t,e,i){return vs(a,t,1-Math.exp(-e*i))}function hu(a,t=1){return t-Math.abs(Fo(a,t*2)-t)}function uu(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function du(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function fu(a,t){return a+Math.floor(Math.random()*(t-a+1))}function pu(a,t){return a+Math.random()*(t-a)}function mu(a){return a*(.5-Math.random())}function gu(a){a!==void 0&&(uc=a);let t=uc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _u(a){return a*_s}function vu(a){return a*Ts}function xu(a){return(a&a-1)===0&&a!==0}function Mu(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function yu(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Su(a,t,e,i,n){const s=Math.cos,r=Math.sin,o=s(e/2),c=r(e/2),l=s((t+i)/2),h=r((t+i)/2),u=s((t-i)/2),d=r((t-i)/2),f=s((i-t)/2),g=r((i-t)/2);switch(n){case"XYX":a.set(o*h,c*u,c*d,o*l);break;case"YZY":a.set(c*d,o*h,c*u,o*l);break;case"ZXZ":a.set(c*u,c*d,o*h,o*l);break;case"XZX":a.set(o*h,c*g,c*f,o*l);break;case"YXY":a.set(c*f,o*h,c*g,o*l);break;case"ZYZ":a.set(c*g,c*f,o*h,o*l);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function pi(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ce(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const ge={DEG2RAD:_s,RAD2DEG:Ts,generateUUID:gi,clamp:Yt,euclideanModulo:Fo,mapLinear:ou,inverseLerp:cu,lerp:vs,damp:lu,pingpong:hu,smoothstep:uu,smootherstep:du,randInt:fu,randFloat:pu,randFloatSpread:mu,seededRandom:gu,degToRad:_u,radToDeg:vu,isPowerOfTwo:xu,ceilPowerOfTwo:Mu,floorPowerOfTwo:yu,setQuaternionFromProperEuler:Su,normalize:ce,denormalize:pi};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*n+t.x,this.y=s*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gi{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,r,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],d=s[r+0],f=s[r+1],g=s[r+2],v=s[r+3];if(o<=0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const _=Math.acos(m),y=Math.sin(_);p=Math.sin(p*_)/y,o=Math.sin(o*_)/y,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+v*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+v*o;const _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,r){const o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(s/2),d=c(i/2),f=c(n/2),g=c(s/2);switch(r){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-l)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(r-n)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*o+n*l-s*c,this._y=n*h+r*c+s*o-i*l,this._z=s*h+r*l+i*c-n*o,this._w=r*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,n=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,r=-r,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+s*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+s*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,i=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*n-o*i),h=2*(o*e-s*n),u=2*(s*i-r*e);return this.x=e+c*l+r*u-o*h,this.y=i+c*h+o*l-s*u,this.z=n+c*u+s*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,r=e.x,o=e.y,c=e.z;return this.x=n*c-s*o,this.y=s*r-i*c,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xa.copy(this).projectOnVector(t),this.sub(Xa)}reflect(t){return this.sub(Xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new E,dc=new Gi;class Vt{constructor(t,e,i,n,s,r,o,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,c,l)}set(t,e,i,n,s,r,o,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=n[0],m=n[3],p=n[6],_=n[1],y=n[4],S=n[7],T=n[2],A=n[5],R=n[8];return s[0]=r*v+o*_+c*T,s[3]=r*m+o*y+c*A,s[6]=r*p+o*S+c*R,s[1]=l*v+h*_+u*T,s[4]=l*m+h*y+u*A,s[7]=l*p+h*S+u*R,s[2]=d*v+f*_+g*T,s[5]=d*m+f*y+g*A,s[8]=d*p+f*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-i*s*h+i*o*c+n*s*l-n*r*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*r-o*l,d=o*c-h*s,f=l*s-r*c,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(n*l-h*i)*v,t[2]=(o*i-n*r)*v,t[3]=d*v,t[4]=(h*e-n*c)*v,t[5]=(n*s-o*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(r*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*r+l*o)+r+t,-n*l,n*c,-n*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Vt,fc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wu(){const a={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(n,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===oe&&(n.r=Vi(n.r),n.g=Vi(n.g),n.b=Vi(n.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===oe&&(n.r=Wn(n.r),n.g=Wn(n.g),n.b=Wn(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$i?ya:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,r){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Kn]:{primaries:t,whitePoint:i,transfer:ya,toXYZ:fc,fromXYZ:pc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:fc,fromXYZ:pc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),a}const te=wu();function Vi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Wn(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let wn;class bu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{wn===void 0&&(wn=wa("canvas")),wn.width=t.width,wn.height=t.height;const n=wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=wn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Vi(s[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vi(e[i]/255)*255):e[i]=Vi(e[i]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tu=0;class Bo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(Ya(n[r].image)):s.push(Ya(n[r]))}else s=Ya(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ya(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?bu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}let Eu=0;const Ka=new E;class Ve extends xn{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=Oi,n=Oi,s=Ge,r=pn,o=mi,c=ni,l=Ve.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=gi(),this.name="",this.source=new Bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fn:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Ur:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fn:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Ur:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=wl;Ve.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,i=0,n=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,S=(f+1)/2,T=(p+1)/2,A=(h+d)/4,R=(u+v)/4,P=(g+m)/4;return y>S&&y>T?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=A/i,s=R/i):S>T?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=A/n,s=P/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=R/s,n=P/s),this.set(i,n,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Au extends xn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const n={width:t,height:e,depth:i.depth},s=new Ve(n);this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Bo(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $e extends Au{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ll extends Ve{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cu extends Ve{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ui):ui.fromBufferAttribute(s,r),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Os.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox)),Os.applyMatrix4(t.matrixWorld),this.union(Os)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),ks.subVectors(this.max,ns),bn.subVectors(t.a,ns),Tn.subVectors(t.b,ns),En.subVectors(t.c,ns),Wi.subVectors(Tn,bn),Xi.subVectors(En,Tn),sn.subVectors(bn,En);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-sn.z,sn.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,sn.z,0,-sn.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-sn.y,sn.x,0];return!Za(e,bn,Tn,En,ks)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,bn,Tn,En,ks))?!1:(zs.crossVectors(Wi,Xi),e=[zs.x,zs.y,zs.z],Za(e,bn,Tn,En,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Li=[new E,new E,new E,new E,new E,new E,new E,new E],ui=new E,Os=new ji,bn=new E,Tn=new E,En=new E,Wi=new E,Xi=new E,sn=new E,ns=new E,ks=new E,zs=new E,an=new E;function Za(a,t,e,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){an.fromArray(a,s);const o=n.x*Math.abs(an.x)+n.y*Math.abs(an.y)+n.z*Math.abs(an.z),c=t.dot(an),l=e.dot(an),h=i.dot(an);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ru=new ji,ss=new E,$a=new E;class Da{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ru.setFromPoints(t).getCenter(i);let n=0;for(let s=0,r=t.length;s<r;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ss,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add($a)),this.expandByPoint(ss.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ni=new E,Ja=new E,Gs=new E,qi=new E,ja=new E,Vs=new E,Qa=new E;class Nl{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ja.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(Ja);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Gs),o=qi.dot(this.direction),c=-qi.dot(Gs),l=qi.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*c-o,d=r*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+r*d+2*o)+d*(r*u+d+2*c)+l}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ja).addScaledVector(Gs,d),f}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);const i=Ni.dot(this.direction),n=Ni.dot(Ni)-i*i,s=t.radius*t.radius;if(n>s)return null;const r=Math.sqrt(s-n),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,i,n,s){ja.subVectors(e,t),Vs.subVectors(i,t),Qa.crossVectors(ja,Vs);let r=this.direction.dot(Qa),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;qi.subVectors(this.origin,t);const c=o*this.direction.dot(Vs.crossVectors(qi,Vs));if(c<0)return null;const l=o*this.direction.dot(ja.cross(qi));if(l<0||c+l>r)return null;const h=-o*qi.dot(Qa);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,i,n,s,r,o,c,l,h,u,d,f,g,v,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,c,l,h,u,d,f,g,v,m)}set(t,e,i,n,s,r,o,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,n=1/An.setFromMatrixColumn(t,0).length(),s=1/An.setFromMatrixColumn(t,1).length(),r=1/An.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=r*h,f=r*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*o,e[4]=-r*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*h,e[9]=v-d*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*c,f=r*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=r*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pu,t,Iu)}lookAt(t,e,i){const n=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Yi.crossVectors(i,Qe),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Yi.crossVectors(i,Qe)),Yi.normalize(),Hs.crossVectors(Qe,Yi),n[0]=Yi.x,n[4]=Hs.x,n[8]=Qe.x,n[1]=Yi.y,n[5]=Hs.y,n[9]=Qe.y,n[2]=Yi.z,n[6]=Hs.z,n[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],_=i[3],y=i[7],S=i[11],T=i[15],A=n[0],R=n[4],P=n[8],M=n[12],w=n[1],I=n[5],F=n[9],O=n[13],X=n[2],W=n[6],H=n[10],k=n[14],$=n[3],at=n[7],st=n[11],ut=n[15];return s[0]=r*A+o*w+c*X+l*$,s[4]=r*R+o*I+c*W+l*at,s[8]=r*P+o*F+c*H+l*st,s[12]=r*M+o*O+c*k+l*ut,s[1]=h*A+u*w+d*X+f*$,s[5]=h*R+u*I+d*W+f*at,s[9]=h*P+u*F+d*H+f*st,s[13]=h*M+u*O+d*k+f*ut,s[2]=g*A+v*w+m*X+p*$,s[6]=g*R+v*I+m*W+p*at,s[10]=g*P+v*F+m*H+p*st,s[14]=g*M+v*O+m*k+p*ut,s[3]=_*A+y*w+S*X+T*$,s[7]=_*R+y*I+S*W+T*at,s[11]=_*P+y*F+S*H+T*st,s[15]=_*M+y*O+S*k+T*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],_=c*f-l*d,y=o*f-l*u,S=o*d-c*u,T=r*f-l*h,A=r*d-c*h,R=r*u-o*h;return e*(v*_-m*y+p*S)-i*(g*_-m*T+p*A)+n*(g*y-v*T+p*R)-s*(g*S-v*A+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*l-v*d*l+v*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+r*m*f+h*c*p-r*d*p,S=h*v*l-g*u*l+g*o*f-r*v*f-h*o*p+r*u*p,T=g*u*c-h*v*c-g*o*d+r*v*d+h*o*m-r*u*m,A=e*_+i*y+n*S+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=_*R,t[1]=(v*d*s-u*m*s-v*n*f+i*m*f+u*n*p-i*d*p)*R,t[2]=(o*m*s-v*c*s+v*n*l-i*m*l-o*n*p+i*c*p)*R,t[3]=(u*c*s-o*d*s-u*n*l+i*d*l+o*n*f-i*c*f)*R,t[4]=y*R,t[5]=(h*m*s-g*d*s+g*n*f-e*m*f-h*n*p+e*d*p)*R,t[6]=(g*c*s-r*m*s-g*n*l+e*m*l+r*n*p-e*c*p)*R,t[7]=(r*d*s-h*c*s+h*n*l-e*d*l-r*n*f+e*c*f)*R,t[8]=S*R,t[9]=(g*u*s-h*v*s-g*i*f+e*v*f+h*i*p-e*u*p)*R,t[10]=(r*v*s-g*o*s+g*i*l-e*v*l-r*i*p+e*o*p)*R,t[11]=(h*o*s-r*u*s-h*i*l+e*u*l+r*i*f-e*o*f)*R,t[12]=T*R,t[13]=(h*v*n-g*u*n+g*i*d-e*v*d-h*i*m+e*u*m)*R,t[14]=(g*o*n-r*v*n-g*i*c+e*v*c+r*i*m-e*o*m)*R,t[15]=(r*u*n-h*o*n+h*i*c-e*u*c-r*i*d+e*o*d)*R,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,o=t.y,c=t.z,l=s*r,h=s*o;return this.set(l*r+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*r,0,l*c-n*o,h*c+n*r,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,r){return this.set(1,i,s,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,r=e._y,o=e._z,c=e._w,l=s+s,h=r+r,u=o+o,d=s*l,f=s*h,g=s*u,v=r*h,m=r*u,p=o*u,_=c*l,y=c*h,S=c*u,T=i.x,A=i.y,R=i.z;return n[0]=(1-(v+p))*T,n[1]=(f+S)*T,n[2]=(g-y)*T,n[3]=0,n[4]=(f-S)*A,n[5]=(1-(d+p))*A,n[6]=(m+_)*A,n[7]=0,n[8]=(g+y)*R,n[9]=(m-_)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;if(t.x=n[12],t.y=n[13],t.z=n[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let s=An.set(n[0],n[1],n[2]).length();const r=An.set(n[4],n[5],n[6]).length(),o=An.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),di.copy(this);const l=1/s,h=1/r,u=1/o;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,e.setFromRotationMatrix(di),i.x=s,i.y=r,i.z=o,this}makePerspective(t,e,i,n,s,r,o=bi,c=!1){const l=this.elements,h=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n);let g,v;if(c)g=s/(r-s),v=r*s/(r-s);else if(o===bi)g=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===Sa)g=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,r,o=bi,c=!1){const l=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n);let g,v;if(c)g=1/(r-s),v=r/(r-s);else if(o===bi)g=-2/(r-s),v=-(r+s)/(r-s);else if(o===Sa)g=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const An=new E,di=new Me,Pu=new E(0,0,0),Iu=new E(1,1,1),Yi=new E,Hs=new E,Qe=new E,mc=new Me,gc=new Gi;class Ri{constructor(t=0,e=0,i=0,n=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],r=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gc.setFromEuler(this),this.setFromQuaternion(gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Du=0;const _c=new E,Cn=new Gi,Ui=new Me,Ws=new E,as=new E,Lu=new E,Nu=new Gi,vc=new E(1,0,0),xc=new E(0,1,0),Mc=new E(0,0,1),yc={type:"added"},Uu={type:"removed"},Rn={type:"childadded",child:null},tr={type:"childremoved",child:null};class Pe extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new E,e=new Ri,i=new Gi,n=new E(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Me},normalMatrix:{value:new Vt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.premultiply(Cn),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(Mc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(Mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ws.copy(t):Ws.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(as,Ws,this.up):Ui.lookAt(Ws,as,this.up),this.quaternion.setFromRotationMatrix(Ui),n&&(Ui.extractRotation(n.matrixWorld),Cn.setFromRotationMatrix(Ui),this.quaternion.premultiply(Cn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yc),Rn.child=t,this.dispatchEvent(Rn),Rn.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uu),tr.child=t,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yc),Rn.child=t,this.dispatchEvent(Rn),Rn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,Lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(s(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Pe.DEFAULT_UP=new E(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new E,Fi=new E,er=new E,Bi=new E,Pn=new E,In=new E,Sc=new E,ir=new E,nr=new E,sr=new E,ar=new Te,rr=new Te,or=new Te;class li{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),fi.subVectors(t,e),n.cross(fi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){fi.subVectors(n,e),Fi.subVectors(i,e),er.subVectors(t,e);const r=fi.dot(fi),o=fi.dot(Fi),c=fi.dot(er),l=Fi.dot(Fi),h=Fi.dot(er),u=r*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(r*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,n,s,r,o,c){return this.getBarycoord(t,e,i,n,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bi.x),c.addScaledVector(r,Bi.y),c.addScaledVector(o,Bi.z),c)}static getInterpolatedAttribute(t,e,i,n,s,r){return ar.setScalar(0),rr.setScalar(0),or.setScalar(0),ar.fromBufferAttribute(t,e),rr.fromBufferAttribute(t,i),or.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector(ar,s.x),r.addScaledVector(rr,s.y),r.addScaledVector(or,s.z),r}static isFrontFacing(t,e,i,n){return fi.subVectors(i,e),Fi.subVectors(t,e),fi.cross(Fi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),fi.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return li.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let r,o;Pn.subVectors(n,i),In.subVectors(s,i),ir.subVectors(t,i);const c=Pn.dot(ir),l=In.dot(ir);if(c<=0&&l<=0)return e.copy(i);nr.subVectors(t,n);const h=Pn.dot(nr),u=In.dot(nr);if(h>=0&&u<=h)return e.copy(n);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Pn,r);sr.subVectors(t,s);const f=Pn.dot(sr),g=In.dot(sr);if(g>=0&&f<=g)return e.copy(s);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(In,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Sc.subVectors(s,n),o=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(Sc,o);const p=1/(m+v+d);return r=v*p,o=d*p,e.copy(i).addScaledVector(Pn,r).addScaledVector(In,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function cr(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=Fo(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=cr(r,s,t+1/3),this.g=cr(r,s,t),this.b=cr(r,s,t-1/3)}return te.colorSpaceToWorking(this,n),this}setStyle(t,e=ci){function i(s){s!==void 0&&parseFloat(s)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){const i=Fl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return te.workingToColorSpace(ke.copy(this),t),Math.round(Yt(ke.r*255,0,255))*65536+Math.round(Yt(ke.g*255,0,255))*256+Math.round(Yt(ke.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(ke.copy(this),e);const i=ke.r,n=ke.g,s=ke.b,r=Math.max(i,n,s),o=Math.min(i,n,s);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=ci){te.workingToColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,n=ke.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(Xs);const i=vs(Ki.h,Xs.h,e),n=vs(Ki.s,Xs.s,e),s=vs(Ki.l,Xs.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Ut;Ut.NAMES=Fl;let Fu=0;class Mn extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Hn,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=br,this.blendDst=Tr,this.blendEquation=un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sn,this.stencilZFail=Sn,this.stencilZPass=Sn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hn&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==br&&(i.blendSrc=this.blendSrc),this.blendDst!==Tr&&(i.blendDst=this.blendDst),this.blendEquation!==un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(e){const s=n(t.textures),r=n(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class le extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new E,qs=new et;let Bu=0;class Be{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=go,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==go&&(t.usage=this.usage),t}}class Bl extends Be{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ol extends Be{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class $t extends Be{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ou=0;const ri=new Me,lr=new Pe,Dn=new E,ti=new ji,rs=new ji,Le=new E;class ye extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dl(t)?Ol:Bl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Vt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,i){return ri.makeTranslation(t,e,i),this.applyMatrix4(ri),this}scale(t,e,i){return ri.makeScale(t,e,i),this.applyMatrix4(ri),this}lookAt(t){return lr.lookAt(t),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(ti.min,rs.min),ti.expandByPoint(Le),Le.addVectors(ti.max,rs.max),ti.expandByPoint(Le)):(ti.expandByPoint(rs.min),ti.expandByPoint(rs.max))}ti.getCenter(i);let n=0;for(let s=0,r=t.count;s<r;s++)Le.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Le));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Le.fromBufferAttribute(o,l),c&&(Dn.fromBufferAttribute(t,l),Le.add(Dn)),n=Math.max(n,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new E,c[P]=new E;const l=new E,h=new E,u=new E,d=new et,f=new et,g=new et,v=new E,m=new E;function p(P,M,w){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,w),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,w),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[P].add(v),o[M].add(v),o[w].add(v),c[P].add(m),c[M].add(m),c[w].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,M=_.length;P<M;++P){const w=_[P],I=w.start,F=w.count;for(let O=I,X=I+F;O<X;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new E,S=new E,T=new E,A=new E;function R(P){T.fromBufferAttribute(n,P),A.copy(T);const M=o[P];y.copy(M),y.sub(T.multiplyScalar(T.dot(M))).normalize(),S.crossVectors(A,M);const I=S.dot(c[P])<0?-1:1;r.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,M=_.length;P<M;++P){const w=_[P],I=w.start,F=w.count;for(let O=I,X=I+F;O<X;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new E,s=new E,r=new E,o=new E,c=new E,l=new E,h=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Be(d,h,u)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(n[c]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new Me,rn=new Nl,Ys=new Da,bc=new E,Ks=new E,Zs=new E,$s=new E,hr=new E,Js=new E,Tc=new E,js=new E;class D extends Pe{constructor(t=new ye,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){Js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(hr.fromBufferAttribute(u,t),r?Js.addScaledVector(hr,h):Js.addScaledVector(hr.sub(e),h))}e.add(Js)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(s),rn.copy(t.ray).recast(t.near),!(Ys.containsPoint(rn.origin)===!1&&(rn.intersectSphere(Ys,bc)===null||rn.origin.distanceToSquared(bc)>(t.far-t.near)**2))&&(wc.copy(s).invert(),rn.copy(t.ray).applyMatrix4(wc),!(i.boundingBox!==null&&rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rn)))}_computeIntersections(t,e,i){let n;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=r[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=_,T=y;S<T;S+=3){const A=o.getX(S),R=o.getX(S+1),P=o.getX(S+2);n=Qs(this,p,t,i,l,h,u,A,R,P),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);n=Qs(this,r,t,i,l,h,u,_,y,S),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=r[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=_,T=y;S<T;S+=3){const A=S,R=S+1,P=S+2;n=Qs(this,p,t,i,l,h,u,A,R,P),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,S=m+2;n=Qs(this,r,t,i,l,h,u,_,y,S),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function ku(a,t,e,i,n,s,r,o){let c;if(t.side===qe?c=i.intersectTriangle(r,s,n,!0,o):c=i.intersectTriangle(n,s,r,t.side===Qi,o),c===null)return null;js.copy(o),js.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(js);return l<e.near||l>e.far?null:{distance:l,point:js.clone(),object:a}}function Qs(a,t,e,i,n,s,r,o,c,l){a.getVertexPosition(o,Ks),a.getVertexPosition(c,Zs),a.getVertexPosition(l,$s);const h=ku(a,t,e,i,Ks,Zs,$s,Tc);if(h){const u=new E;li.getBarycoord(Tc,Ks,Zs,$s,u),n&&(h.uv=li.getInterpolatedAttribute(n,o,c,l,u,new et)),s&&(h.uv1=li.getInterpolatedAttribute(s,o,c,l,u,new et)),r&&(h.normal=li.getInterpolatedAttribute(r,o,c,l,u,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new E,materialIndex:0};li.getNormal(Ks,Zs,$s,d.normal),h.face=d,h.barycoord=u}return h}class yt extends ye{constructor(t=1,e=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,r,s,0),g("z","y","x",1,-1,i,e,-t,r,s,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(v,m,p,_,y,S,T,A,R,P,M){const w=S/R,I=T/P,F=S/2,O=T/2,X=A/2,W=R+1,H=P+1;let k=0,$=0;const at=new E;for(let st=0;st<H;st++){const ut=st*I-O;for(let Bt=0;Bt<W;Bt++){const It=Bt*w-F;at[v]=It*_,at[m]=ut*y,at[p]=X,l.push(at.x,at.y,at.z),at[v]=0,at[m]=0,at[p]=A>0?1:-1,h.push(at.x,at.y,at.z),u.push(Bt/R),u.push(1-st/P),k+=1}}for(let st=0;st<P;st++)for(let ut=0;ut<R;ut++){const Bt=d+ut+W*st,It=d+ut+W*(st+1),fe=d+(ut+1)+W*(st+1),ie=d+(ut+1)+W*st;c.push(Bt,It,ie),c.push(It,fe,ie),$+=6}o.addGroup(f,$,M),f+=$,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zn(a){const t={};for(const e in a){t[e]={};for(const i in a[e]){const n=a[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Xe(a){const t={};for(let e=0;e<a.length;e++){const i=Zn(a[e]);for(const n in i)t[n]=i[n]}return t}function zu(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function kl(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Ta={clone:Zn,merge:Xe};var Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Re extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zn(t.uniforms),this.uniformsGroups=zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zl extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new E,Ec=new et,Ac=new et;class ii extends zl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,Ec,Ac),e.subVectors(Ac,Ec)}setViewOffset(t,e,i,n,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_s*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*n/c,e-=r.offsetY*i/l,n*=r.width/c,i*=r.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ln=-90,Nn=1;class Hu extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ii(Ln,Nn,t,e);n.layers=this.layers,this.add(n);const s=new ii(Ln,Nn,t,e);s.layers=this.layers,this.add(s);const r=new ii(Ln,Nn,t,e);r.layers=this.layers,this.add(r);const o=new ii(Ln,Nn,t,e);o.layers=this.layers,this.add(o);const c=new ii(Ln,Nn,t,e);c.layers=this.layers,this.add(c);const l=new ii(Ln,Nn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,r,o,c]=e;for(const l of e)this.remove(l);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gl extends Ve{constructor(t=[],e=gn,i,n,s,r,o,c,l,h){super(t,e,i,n,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vl extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Gl(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new yt(5,5,5),s=new Re({name:"CubemapFromEquirect",uniforms:Zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:Ei});s.uniforms.tEquirect.value=e;const r=new D(n,s),o=e.minFilter;return e.minFilter===pn&&(e.minFilter=Ge),new Hu(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(s)}}class jt extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wu={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wu)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Oo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new Oo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xu extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=go,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new E;class Ea{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ea(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hl extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Un;const os=new E,Fn=new E,Bn=new E,On=new et,cs=new et,Wl=new Me,ta=new E,ls=new E,ea=new E,Cc=new et,dr=new et,Rc=new et;class Yu extends Pe{constructor(t=new Hl){if(super(),this.isSprite=!0,this.type="Sprite",Un===void 0){Un=new ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qu(e,5);Un.setIndex([0,1,2,0,2,3]),Un.setAttribute("position",new Ea(i,3,0,!1)),Un.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=Un,this.material=t,this.center=new et(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fn.setFromMatrixScale(this.matrixWorld),Wl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fn.multiplyScalar(-Bn.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const r=this.center;ia(ta.set(-.5,-.5,0),Bn,r,Fn,n,s),ia(ls.set(.5,-.5,0),Bn,r,Fn,n,s),ia(ea.set(.5,.5,0),Bn,r,Fn,n,s),Cc.set(0,0),dr.set(1,0),Rc.set(1,1);let o=t.ray.intersectTriangle(ta,ls,ea,!1,os);if(o===null&&(ia(ls.set(-.5,.5,0),Bn,r,Fn,n,s),dr.set(0,1),o=t.ray.intersectTriangle(ta,ea,ls,!1,os),o===null))return;const c=t.ray.origin.distanceTo(os);c<t.near||c>t.far||e.push({distance:c,point:os.clone(),uv:li.getInterpolation(os,ta,ls,ea,Cc,dr,Rc,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ia(a,t,e,i,n,s){On.subVectors(a,e).addScalar(.5).multiply(i),n!==void 0?(cs.x=s*On.x-n*On.y,cs.y=n*On.x+s*On.y):cs.copy(On),a.copy(t),a.x+=cs.x,a.y+=cs.y,a.applyMatrix4(Wl)}class Ku extends Ve{constructor(t=null,e=1,i=1,n,s,r,o,c,l=Fe,h=Fe,u,d){super(null,r,o,c,l,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fr=new E,Zu=new E,$u=new Vt;class hn{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=fr.subVectors(i,e).cross(Zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(fr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||$u.getNormalMatrix(t),n=this.coplanarPoint(fr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const on=new Da,Ju=new et(.5,.5),na=new E;class ko{constructor(t=new hn,e=new hn,i=new hn,n=new hn,s=new hn,r=new hn){this.planes=[t,e,i,n,s,r]}set(t,e,i,n,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bi,i=!1){const n=this.planes,s=t.elements,r=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],v=s[9],m=s[10],p=s[11],_=s[12],y=s[13],S=s[14],T=s[15];if(n[0].setComponents(l-r,f-h,p-g,T-_).normalize(),n[1].setComponents(l+r,f+h,p+g,T+_).normalize(),n[2].setComponents(l+o,f+u,p+v,T+y).normalize(),n[3].setComponents(l-o,f-u,p-v,T-y).normalize(),i)n[4].setComponents(c,d,m,S).normalize(),n[5].setComponents(l-c,f-d,p-m,T-S).normalize();else if(n[4].setComponents(l-c,f-d,p-m,T-S).normalize(),e===bi)n[5].setComponents(l+c,f+d,p+m,T+S).normalize();else if(e===Sa)n[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),on.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),on.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(on)}intersectsSprite(t){on.center.set(0,0,0);const e=Ju.distanceTo(t.center);return on.radius=.7071067811865476+e,on.applyMatrix4(t.matrixWorld),this.intersectsSphere(on)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(na.x=n.normal.x>0?t.max.x:t.min.x,na.y=n.normal.y>0?t.max.y:t.min.y,na.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xl extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pc=new Me,_o=new Nl,sa=new Da,aa=new E;class ju extends Pe{constructor(t=new ye,e=new Xl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(n),sa.radius+=s,t.ray.intersectsSphere(sa)===!1)return;Pc.copy(n).invert(),_o.copy(t.ray).applyMatrix4(Pc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);aa.fromBufferAttribute(u,m),Ic(aa,m,c,n,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,v=f;g<v;g++)aa.fromBufferAttribute(u,g),Ic(aa,g,c,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ic(a,t,e,i,n,s,r){const o=_o.distanceSqToPoint(a);if(o<e){const c=new E;_o.closestPointToPoint(a,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class vo extends Ve{constructor(t,e,i,n,s,r,o,c,l){super(t,e,i,n,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Es extends Ve{constructor(t,e,i=Ci,n,s,r,o=Fe,c=Fe,l,h=Hi,u=1){if(h!==Hi&&h!==mn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,n,s,r,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qu extends Es{constructor(t,e=Ci,i=gn,n,s,r=Fe,o=Fe,c,l=Hi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,r,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ql extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ne extends ye{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));const r=[],o=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=i*2+s,v=n+1,m=new E,p=new E;for(let _=0;_<=g;_++){let y=0,S=0,T=0,A=0;if(_<=i){const M=_/i,w=M*Math.PI/2;S=-h-t*Math.cos(w),T=t*Math.sin(w),A=-t*Math.cos(w),y=M*u}else if(_<=i+s){const M=(_-i)/s;S=-h+M*e,T=t,A=0,y=u+M*d}else{const M=(_-i-s)/i,w=M*Math.PI/2;S=h+t*Math.sin(w),T=t*Math.cos(w),A=t*Math.sin(w),y=u+d+M*u}const R=Math.max(0,Math.min(1,y/f));let P=0;_===0?P=.5/n:_===g&&(P=-.5/n);for(let M=0;M<=n;M++){const w=M/n,I=w*Math.PI*2,F=Math.sin(I),O=Math.cos(I);p.x=-T*O,p.y=S,p.z=T*F,o.push(p.x,p.y,p.z),m.set(-T*O,A,T*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(w+P,R)}if(_>0){const M=(_-1)*v;for(let w=0;w<n;w++){const I=M+w,F=M+w+1,O=_*v+w,X=_*v+w+1;r.push(I,F,O),r.push(F,X,O)}}}this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ti extends ye{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],r=[],o=[],c=[],l=new E,h=new et;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class se extends ye{constructor(t=1,e=1,i=1,n=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};const l=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=i/2;let p=0;_(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(f,2));function _(){const S=new E,T=new E;let A=0;const R=(e-t)/i;for(let P=0;P<=s;P++){const M=[],w=P/s,I=w*(e-t)+t;for(let F=0;F<=n;F++){const O=F/n,X=O*c+o,W=Math.sin(X),H=Math.cos(X);T.x=I*W,T.y=-w*i+m,T.z=I*H,u.push(T.x,T.y,T.z),S.set(W,R,H).normalize(),d.push(S.x,S.y,S.z),f.push(O,1-w),M.push(g++)}v.push(M)}for(let P=0;P<n;P++)for(let M=0;M<s;M++){const w=v[M][P],I=v[M+1][P],F=v[M+1][P+1],O=v[M][P+1];(t>0||M!==0)&&(h.push(w,I,O),A+=3),(e>0||M!==s-1)&&(h.push(I,F,O),A+=3)}l.addGroup(p,A,0),p+=A}function y(S){const T=g,A=new et,R=new E;let P=0;const M=S===!0?t:e,w=S===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;const I=g;for(let F=0;F<=n;F++){const X=F/n*c+o,W=Math.cos(X),H=Math.sin(X);R.x=M*H,R.y=m*w,R.z=M*W,u.push(R.x,R.y,R.z),d.push(0,w,0),A.x=W*.5+.5,A.y=H*.5*w+.5,f.push(A.x,A.y),g++}for(let F=0;F<n;F++){const O=T+F,X=I+F;S===!0?h.push(X,X+1,O):h.push(X+1,X,O),P+=3}l.addGroup(p,P,S===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hi extends se{constructor(t=1,e=1,i=32,n=1,s=!1,r=0,o=Math.PI*2){super(0,t,e,i,n,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new hi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class La extends ye{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],r=[];o(n),l(i),h(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new E,S=new E,T=new E;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],S),f(e[A+2],T),c(y,S,T,_)}function c(_,y,S,T){const A=T+1,R=[];for(let P=0;P<=A;P++){R[P]=[];const M=_.clone().lerp(S,P/A),w=y.clone().lerp(S,P/A),I=A-P;for(let F=0;F<=I;F++)F===0&&P===A?R[P][F]=M:R[P][F]=M.clone().lerp(w,F/I)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){const w=Math.floor(M/2);M%2===0?(d(R[P][w+1]),d(R[P+1][w]),d(R[P][w])):(d(R[P][w+1]),d(R[P+1][w+1]),d(R[P+1][w]))}}function l(_){const y=new E;for(let S=0;S<s.length;S+=3)y.x=s[S+0],y.y=s[S+1],y.z=s[S+2],y.normalize().multiplyScalar(_),s[S+0]=y.x,s[S+1]=y.y,s[S+2]=y.z}function h(){const _=new E;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const S=m(_)/2/Math.PI+.5,T=p(_)/Math.PI+.5;r.push(S,1-T)}g(),u()}function u(){for(let _=0;_<r.length;_+=6){const y=r[_+0],S=r[_+2],T=r[_+4],A=Math.max(y,S,T),R=Math.min(y,S,T);A>.9&&R<.1&&(y<.2&&(r[_+0]+=1),S<.2&&(r[_+2]+=1),T<.2&&(r[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,y){const S=_*3;y.x=t[S+0],y.y=t[S+1],y.z=t[S+2]}function g(){const _=new E,y=new E,S=new E,T=new E,A=new et,R=new et,P=new et;for(let M=0,w=0;M<s.length;M+=9,w+=6){_.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),A.set(r[w+0],r[w+1]),R.set(r[w+2],r[w+3]),P.set(r[w+4],r[w+5]),T.copy(_).add(y).add(S).divideScalar(3);const I=m(T);v(A,w+0,_,I),v(R,w+2,y,I),v(P,w+4,S,I)}}function v(_,y,S,T){T<0&&_.x===1&&(r[y]=_.x-1),S.x===0&&S.z===0&&(r[y]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.vertices,t.indices,t.radius,t.detail)}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Lt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let r;e?r=e:r=t*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=i[n]-r,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===r)return n/(s-1);const h=i[n],d=i[n+1]-h,f=(r-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const r=this.getPoint(n),o=this.getPoint(s),c=e||(r.isVector2?new et:new E);return c.copy(o).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new E,n=[],s=[],r=[],o=new E,c=new Me;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new E)}s[0]=new E,r[0]=new E;let l=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),r[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Yt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}r[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Yt(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],f*g)),r[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zo extends Pi{constructor(t=0,e=0,i=1,n=1,s=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new et){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(r?s=0:s=n),this.aClockwise===!0&&!r&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class td extends zo{constructor(t,e,i,n,s,r){super(t,e,i,i,n,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Go(){let a=0,t=0,e=0,i=0;function n(s,r,o,c){a=s,t=o,e=-3*s+3*r-2*o-c,i=2*s-2*r+o+c}return{initCatmullRom:function(s,r,o,c,l){n(r,o,l*(o-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,o,c,l,h,u){let d=(r-s)/l-(o-s)/(l+h)+(o-r)/h,f=(o-r)/h-(c-r)/(h+u)+(c-o)/u;d*=h,f*=h,n(r,o,d,f)},calc:function(s){const r=s*s,o=r*s;return a+t*s+e*r+i*o}}}const ra=new E,pr=new Go,mr=new Go,gr=new Go;class ed extends Pi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new E){const i=e,n=this.points,s=n.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=n[(o-1)%s]:(ra.subVectors(n[0],n[1]).add(n[0]),l=ra);const u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(ra.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=ra),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),pr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),mr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),gr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(pr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),mr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),gr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(pr.calc(c),mr.calc(c),gr.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new E().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dc(a,t,e,i,n){const s=(i-t)*.5,r=(n-e)*.5,o=a*a,c=a*o;return(2*e-2*i+s+r)*c+(-3*e+3*i-2*s-r)*o+s*a+e}function id(a,t){const e=1-a;return e*e*t}function nd(a,t){return 2*(1-a)*a*t}function sd(a,t){return a*a*t}function xs(a,t,e,i){return id(a,t)+nd(a,e)+sd(a,i)}function ad(a,t){const e=1-a;return e*e*e*t}function rd(a,t){const e=1-a;return 3*e*e*a*t}function od(a,t){return 3*(1-a)*a*a*t}function cd(a,t){return a*a*a*t}function Ms(a,t,e,i,n){return ad(a,t)+rd(a,e)+od(a,i)+cd(a,n)}class Yl extends Pi{constructor(t=new et,e=new et,i=new et,n=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new et){const i=e,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Ms(t,n.x,s.x,r.x,o.x),Ms(t,n.y,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ld extends Pi{constructor(t=new E,e=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new E){const i=e,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Ms(t,n.x,s.x,r.x,o.x),Ms(t,n.y,s.y,r.y,o.y),Ms(t,n.z,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kl extends Pi{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hd extends Pi{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zl extends Pi{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){const i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(xs(t,n.x,s.x,r.x),xs(t,n.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ud extends Pi{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){const i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(xs(t,n.x,s.x,r.x),xs(t,n.y,s.y,r.y),xs(t,n.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $l extends Pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const i=e,n=this.points,s=(n.length-1)*t,r=Math.floor(s),o=s-r,c=n[r===0?r:r-1],l=n[r],h=n[r>n.length-2?n.length-1:r+1],u=n[r>n.length-3?n.length-1:r+2];return i.set(Dc(o,c.x,l.x,h.x,u.x),Dc(o,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new et().fromArray(n))}return this}}var Lc=Object.freeze({__proto__:null,ArcCurve:td,CatmullRomCurve3:ed,CubicBezierCurve:Yl,CubicBezierCurve3:ld,EllipseCurve:zo,LineCurve:Kl,LineCurve3:hd,QuadraticBezierCurve:Zl,QuadraticBezierCurve3:ud,SplineCurve:$l});class dd extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const r=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const r=s[n],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Lc[n.type]().fromJSON(n))}return this}}class Nc extends dd{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Kl(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new Zl(this.currentPoint.clone(),new et(t,e),new et(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,r){const o=new Yl(this.currentPoint.clone(),new et(t,e),new et(i,n),new et(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new $l(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,n,s,r),this}absarc(t,e,i,n,s,r){return this.absellipse(t,e,i,i,n,s,r),this}ellipse(t,e,i,n,s,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,n,s,r,o,c),this}absellipse(t,e,i,n,s,r,o,c){const l=new zo(t,e,i,n,s,r,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jl extends Nc{constructor(t){super(t),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Nc().fromJSON(n))}return this}}function fd(a,t,e=2){const i=t&&t.length,n=i?t[0]*e:a.length;let s=jl(a,0,n,e,!0);const r=[];if(!s||s.next===s.prev)return r;let o,c,l;if(i&&(s=vd(a,t,s,e)),a.length>80*e){o=a[0],c=a[1];let h=o,u=c;for(let d=e;d<n;d+=e){const f=a[d],g=a[d+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return As(s,r,e,o,c,l,0),r}function jl(a,t,e,i,n){let s;if(n===Rd(a,t,e,i)>0)for(let r=t;r<e;r+=i)s=Uc(r/i|0,a[r],a[r+1],s);else for(let r=e-i;r>=t;r-=i)s=Uc(r/i|0,a[r],a[r+1],s);return s&&$n(s,s.next)&&(Rs(s),s=s.next),s}function _n(a,t){if(!a)return a;t||(t=a);let e=a,i;do if(i=!1,!e.steiner&&($n(e,e.next)||Se(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function As(a,t,e,i,n,s,r){if(!a)return;!r&&s&&wd(a,i,n,s);let o=a;for(;a.prev!==a.next;){const c=a.prev,l=a.next;if(s?md(a,i,n,s):pd(a)){t.push(c.i,a.i,l.i),Rs(a),a=l.next,o=l.next;continue}if(a=l,a===o){r?r===1?(a=gd(_n(a),t),As(a,t,e,i,n,s,2)):r===2&&_d(a,t,e,i,n,s):As(_n(a),t,e,i,n,s,1);break}}}function pd(a){const t=a.prev,e=a,i=a.next;if(Se(t,e,i)>=0)return!1;const n=t.x,s=e.x,r=i.x,o=t.y,c=e.y,l=i.y,h=Math.min(n,s,r),u=Math.min(o,c,l),d=Math.max(n,s,r),f=Math.max(o,c,l);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ms(n,o,s,c,r,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function md(a,t,e,i){const n=a.prev,s=a,r=a.next;if(Se(n,s,r)>=0)return!1;const o=n.x,c=s.x,l=r.x,h=n.y,u=s.y,d=r.y,f=Math.min(o,c,l),g=Math.min(h,u,d),v=Math.max(o,c,l),m=Math.max(h,u,d),p=xo(f,g,t,e,i),_=xo(v,m,t,e,i);let y=a.prevZ,S=a.nextZ;for(;y&&y.z>=p&&S&&S.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==n&&y!==r&&ms(o,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==n&&S!==r&&ms(o,h,c,u,l,d,S.x,S.y)&&Se(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==n&&y!==r&&ms(o,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=_;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==n&&S!==r&&ms(o,h,c,u,l,d,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function gd(a,t){let e=a;do{const i=e.prev,n=e.next.next;!$n(i,n)&&th(i,e,e.next,n)&&Cs(i,n)&&Cs(n,i)&&(t.push(i.i,e.i,n.i),Rs(e),Rs(e.next),e=a=n),e=e.next}while(e!==a);return _n(e)}function _d(a,t,e,i,n,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Ed(r,o)){let c=eh(r,o);r=_n(r,r.next),c=_n(c,c.next),As(r,t,e,i,n,s,0),As(c,t,e,i,n,s,0);return}o=o.next}r=r.next}while(r!==a)}function vd(a,t,e,i){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s]*i,c=s<r-1?t[s+1]*i:a.length,l=jl(a,o,c,i,!1);l===l.next&&(l.steiner=!0),n.push(Td(l))}n.sort(xd);for(let s=0;s<n.length;s++)e=Md(n[s],e);return e}function xd(a,t){let e=a.x-t.x;if(e===0&&(e=a.y-t.y,e===0)){const i=(a.next.y-a.y)/(a.next.x-a.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Md(a,t){const e=yd(a,t);if(!e)return t;const i=eh(e,a);return _n(i,i.next),_n(e,e.next)}function yd(a,t){let e=t;const i=a.x,n=a.y;let s=-1/0,r;if($n(a,e))return e;do{if($n(a,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const u=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,r=e.x<e.next.x?e:e.next,u===i))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,c=r.x,l=r.y;let h=1/0;e=r;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Ql(n<l?i:s,n,c,l,n<l?s:i,n,e.x,e.y)){const u=Math.abs(n-e.y)/(i-e.x);Cs(e,a)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&Sd(r,e)))&&(r=e,h=u)}e=e.next}while(e!==o);return r}function Sd(a,t){return Se(a.prev,a,t.prev)<0&&Se(t.next,a,a.next)<0}function wd(a,t,e,i){let n=a;do n.z===0&&(n.z=xo(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==a);n.prevZ.nextZ=null,n.prevZ=null,bd(n)}function bd(a){let t,e=1;do{let i=a,n;a=null;let s=null;for(t=0;i;){t++;let r=i,o=0;for(let l=0;l<e&&(o++,r=r.nextZ,!!r);l++);let c=e;for(;o>0||c>0&&r;)o!==0&&(c===0||!r||i.z<=r.z)?(n=i,i=i.nextZ,o--):(n=r,r=r.nextZ,c--),s?s.nextZ=n:a=n,n.prevZ=s,s=n;i=r}s.nextZ=null,e*=2}while(t>1);return a}function xo(a,t,e,i,n){return a=(a-e)*n|0,t=(t-i)*n|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,a|t<<1}function Td(a){let t=a,e=a;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==a);return e}function Ql(a,t,e,i,n,s,r,o){return(n-r)*(t-o)>=(a-r)*(s-o)&&(a-r)*(i-o)>=(e-r)*(t-o)&&(e-r)*(s-o)>=(n-r)*(i-o)}function ms(a,t,e,i,n,s,r,o){return!(a===r&&t===o)&&Ql(a,t,e,i,n,s,r,o)}function Ed(a,t){return a.next.i!==t.i&&a.prev.i!==t.i&&!Ad(a,t)&&(Cs(a,t)&&Cs(t,a)&&Cd(a,t)&&(Se(a.prev,a,t.prev)||Se(a,t.prev,t))||$n(a,t)&&Se(a.prev,a,a.next)>0&&Se(t.prev,t,t.next)>0)}function Se(a,t,e){return(t.y-a.y)*(e.x-t.x)-(t.x-a.x)*(e.y-t.y)}function $n(a,t){return a.x===t.x&&a.y===t.y}function th(a,t,e,i){const n=ca(Se(a,t,e)),s=ca(Se(a,t,i)),r=ca(Se(e,i,a)),o=ca(Se(e,i,t));return!!(n!==s&&r!==o||n===0&&oa(a,e,t)||s===0&&oa(a,i,t)||r===0&&oa(e,a,i)||o===0&&oa(e,t,i))}function oa(a,t,e){return t.x<=Math.max(a.x,e.x)&&t.x>=Math.min(a.x,e.x)&&t.y<=Math.max(a.y,e.y)&&t.y>=Math.min(a.y,e.y)}function ca(a){return a>0?1:a<0?-1:0}function Ad(a,t){let e=a;do{if(e.i!==a.i&&e.next.i!==a.i&&e.i!==t.i&&e.next.i!==t.i&&th(e,e.next,a,t))return!0;e=e.next}while(e!==a);return!1}function Cs(a,t){return Se(a.prev,a,a.next)<0?Se(a,t,a.next)>=0&&Se(a,a.prev,t)>=0:Se(a,t,a.prev)<0||Se(a,a.next,t)<0}function Cd(a,t){let e=a,i=!1;const n=(a.x+t.x)/2,s=(a.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==a);return i}function eh(a,t){const e=Mo(a.i,a.x,a.y),i=Mo(t.i,t.x,t.y),n=a.next,s=t.prev;return a.next=t,t.prev=a,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Uc(a,t,e,i){const n=Mo(a,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Rs(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Mo(a,t,e){return{i:a,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rd(a,t,e,i){let n=0;for(let s=t,r=e-i;s<e;s+=i)n+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return n}class Pd{static triangulate(t,e,i=2){return fd(t,e,i)}}class ys{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return ys.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];Fc(t),Bc(i,t);let r=t.length;e.forEach(Fc);for(let c=0;c<e.length;c++)n.push(r),r+=e[c].length,Bc(i,e[c]);const o=Pd.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Fc(a){const t=a.length;t>2&&a[t-1].equals(a[0])&&a.pop()}function Bc(a,t){for(let e=0;e<t.length;e++)a.push(t[e].x),a.push(t[e].y)}class Vo extends ye{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Yt(n,0,Math.PI*2);const s=[],r=[],o=[],c=[],l=[],h=1/e,u=new E,d=new et,f=new E,g=new E,v=new E;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=e;_++){const y=i+_*h*n,S=Math.sin(y),T=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*S,u.y=t[A].y,u.z=t[A].x*T,r.push(u.x,u.y,u.z),d.x=_/e,d.y=A/(t.length-1),o.push(d.x,d.y);const R=c[3*A+0]*S,P=c[3*A+1],M=c[3*A+0]*T;l.push(R,P,M)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const S=y+_*t.length,T=S,A=S+t.length,R=S+t.length+1,P=S+1;s.push(T,A,P),s.push(R,P,A)}this.setIndex(s),this.setAttribute("position",new $t(r,3)),this.setAttribute("uv",new $t(o,2)),this.setAttribute("normal",new $t(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.points,t.segments,t.phiStart,t.phiLength)}}class Ho extends La{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ho(t.radius,t.detail)}}class Ze extends ye{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,r=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*d-r;for(let y=0;y<l;y++){const S=y*u-s;g.push(S,-_,0),v.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){const y=_+l*p,S=_+l*(p+1),T=_+1+l*(p+1),A=_+1+l*p;f.push(y,S,A),f.push(S,T,A)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.widthSegments,t.heightSegments)}}class vn extends ye{constructor(t=.5,e=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/n,f=new E,g=new et;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const p=s+m/i*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<n;v++){const m=v*(i+1);for(let p=0;p<i;p++){const _=p+m,y=_,S=_+i+1,T=_+i+2,A=_+1;o.push(y,S,A),o.push(S,T,A)}}this.setIndex(o),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Wo extends ye{constructor(t=new Jl([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],s=[],r=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new $t(n,3)),this.setAttribute("normal",new $t(s,3)),this.setAttribute("uv",new $t(r,2));function l(h){const u=n.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;ys.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];ys.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=ys.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];n.push(_.x,_.y,0),s.push(0,0,1),r.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){const _=v[m],y=_[0]+u,S=_[1]+u,T=_[2]+u;i.push(y,S,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Id(e,t)}static fromJSON(t,e){const i=[];for(let n=0,s=t.shapes.length;n<s;n++){const r=e[t.shapes[n]];i.push(r)}return new Wo(i,t.curveSegments)}}function Id(a,t){if(t.shapes=[],Array.isArray(a))for(let e=0,i=a.length;e<i;e++){const n=a[e];t.shapes.push(n.uuid)}else t.shapes.push(a.uuid);return t}class qt extends ye{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new E,d=new E,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const _=[],y=p/i;let S=0;p===0&&r===0?S=.5/e:p===i&&c===Math.PI&&(S=-.5/e);for(let T=0;T<=e;T++){const A=T/e;u.x=-t*Math.cos(n+A*s)*Math.sin(r+y*o),u.y=t*Math.cos(r+y*o),u.z=t*Math.sin(n+A*s)*Math.sin(r+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+S,1-y),_.push(l++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){const y=h[p][_+1],S=h[p][_],T=h[p+1][_],A=h[p+1][_+1];(p!==0||r>0)&&f.push(y,S,A),(p!==i-1||c<Math.PI)&&f.push(S,T,A)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xo extends La{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xo(t.radius,t.detail)}}class ki extends ye{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const r=[],o=[],c=[],l=[],h=new E,u=new E,d=new E;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const v=g/n*s,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/n),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const v=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,_=(n+1)*f+g;r.push(v,m,_),r.push(m,p,_)}this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Dd extends Re{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Q extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ld extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nd extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function la(a,t){return!a||a.constructor===t?a:typeof t.BYTES_PER_ELEMENT=="number"?new t(a):Array.prototype.slice.call(a)}function Ud(a){function t(n,s){return a[n]-a[s]}const e=a.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function Oc(a,t,e){const i=a.length,n=new a.constructor(i);for(let s=0,r=0;r!==i;++s){const o=e[s]*t;for(let c=0;c!==t;++c)n[r++]=a[o+c]}return n}function ih(a,t,e,i){let n=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(t.push(s.time),e.push(...r)),s=a[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=a[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(t.push(s.time),e.push(r)),s=a[n++];while(s!==void 0)}class Na{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let r;i:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break e}r=e.length;break i}if(!(t>=s)){const o=e[1];t<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=e[--i-1],t>=s)break e}r=i,i=0;break i}break t}for(;i<r;){const o=i+r>>>1;t<e[o]?r=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let r=0;r!==n;++r)e[r]=i[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fd extends Na{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zn,endingEnd:zn}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,r=t+1,o=n[s],c=n[r];if(o===void 0)switch(this.getSettings_().endingStart){case Gn:s=t,o=2*e-i;break;case Ma:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Gn:r=t,c=2*i-e;break;case Ma:r=1,c=i+n[1]-n[0];break;default:r=t-1,c=e}const l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,e,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,S=f*m-f*v;for(let T=0;T!==o;++T)s[T]=p*r[h+T]+_*r[l+T]+y*r[c+T]+S*r[u+T];return s}}class nh extends Na{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=r[l+d]*u+r[c+d]*h;return s}}class Bd extends Na{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class _i{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=la(e,this.TimeBufferType),this.values=la(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:la(t.times,Array),values:la(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Bd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xa:e=this.InterpolantFactoryMethodDiscrete;break;case mo:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Lt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,r=n-1;for(;s!==n&&i[s]<t;)++s;for(;r!==-1&&i[r]>e;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){Dt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(r!==null&&r>c){Dt("KeyframeTrack: Out of order keys.",this,o,c,r),t=!1;break}r=c}if(n!==void 0&&su(n))for(let o=0,c=n.length;o!==c;++o){const l=n[o];if(isNaN(l)){Dt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Wa,s=t.length-1;let r=1;for(let o=1;o<s;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(n)c=!0;else{const u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){c=!0;break}}}if(c){if(o!==r){t[r]=t[o];const u=o*i,d=r*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,c=r*i,l=0;l!==i;++l)e[c+l]=e[o+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=mo;class Qn extends _i{constructor(t,e,i){super(t,e,i)}}Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=xa;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;class sh extends _i{constructor(t,e,i,n){super(t,e,i,n)}}sh.prototype.ValueTypeName="color";class Aa extends _i{constructor(t,e,i,n){super(t,e,i,n)}}Aa.prototype.ValueTypeName="number";class Od extends Na{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(i-e)/(n-e);let l=t*o;for(let h=l+o;l!==h;l+=4)Gi.slerpFlat(s,0,r,l-o,r,l,c);return s}}class Ua extends _i{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Od(this.times,this.values,this.getValueSize(),t)}}Ua.prototype.ValueTypeName="quaternion";Ua.prototype.InterpolantFactoryMethodSmooth=void 0;class ts extends _i{constructor(t,e,i){super(t,e,i)}}ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=xa;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Ca extends _i{constructor(t,e,i,n){super(t,e,i,n)}}Ca.prototype.ValueTypeName="vector";class kc{constructor(t="",e=-1,i=[],n=Lo){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=gi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let r=0,o=i.length;r!==o;++r)e.push(zd(i[r]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,r=i.length;s!==r;++s)e.push(_i.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=Ud(c);c=Oc(c,1,h),l=Oc(l,1,h),!n&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new Aa(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/i))}return new this(t,-1,r)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(l)}}const r=[];for(const o in n)r.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return r}static parseAnimation(t,e){if(Lt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Dt("AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];ih(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},n=[],s=t.name||"default",r=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}n.push(new Aa(".morphTargetInfluence["+v+"]",m,p))}c=f.length*r}else{const f=".bones["+e[u].name+"]";i(Ca,f+".position",d,"pos",n),i(Ua,f+".quaternion",d,"rot",n),i(Ca,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,c,n,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function kd(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Aa;case"vector":case"vector2":case"vector3":case"vector4":return Ca;case"color":return sh;case"quaternion":return Ua;case"bool":case"boolean":return Qn;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function zd(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=kd(a.type);if(a.times===void 0){const e=[],i=[];ih(a.keys,e,i,"value"),a.times=e,a.values=i}return t.parse!==void 0?t.parse(a):new t(a.name,a.times,a.values,a.interpolation)}class Fa extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Gd extends Fa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const _r=new Me,zc=new E,Gc=new E;class ah{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;zc.setFromMatrixPosition(t.matrixWorld),e.position.copy(zc),Gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gc),e.updateMatrixWorld(),_r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vd extends ah{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class yi extends Fa{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Vd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ba extends zl{constructor(t=-1,e=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Hd extends ah{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hs extends Fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Hd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Wd extends Fa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xd extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class rh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class qd{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,r;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==n;++o)i[s+o]=i[o];r=e}else{r+=e;const o=e/r;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=r}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(i,n,c,1-s,e)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){o.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,r=n;s!==r;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)t[e+r]=t[i+r]}_slerp(t,e,i,n){Gi.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const r=this._workIndex*s;Gi.multiplyQuaternionsFlat(t,r,t,e,t,i),Gi.slerpFlat(t,e,t,e,t,r,n)}_lerp(t,e,i,n,s){const r=1-n;for(let o=0;o!==s;++o){const c=e+o;t[c]=t[c]*r+t[i+o]*n}}_lerpAdditive(t,e,i,n,s){for(let r=0;r!==s;++r){const o=e+r;t[o]=t[o]+t[i+r]*n}}}const qo="\\[\\]\\.:\\/",Yd=new RegExp("["+qo+"]","g"),Yo="[^"+qo+"]",Kd="[^"+qo.replace("\\.","")+"]",Zd=/((?:WC+[\/:])*)/.source.replace("WC",Yo),$d=/(WCOD+)?/.source.replace("WCOD",Kd),Jd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yo),jd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yo),Qd=new RegExp("^"+Zd+$d+Jd+jd+"$"),tf=["material","materials","bones","map"];class ef{constructor(t,e,i){const n=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class he{constructor(t,e,i){this.path=e,this.parsedPath=i||he.parseTrackName(e),this.node=he.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new he.Composite(t,e,i):new he(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yd,"")}static parseTrackName(t){const e=Qd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);tf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===e||o.uuid===e)return o;const c=i(o.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=he.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const r=t[n];if(r===void 0){const l=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}he.Composite=ef;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nf{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,r=s.length,o=new Array(r),c={endingStart:zn,endingEnd:zn};for(let l=0;l!==r;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Do,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){const n=this._clip.duration,s=t._clip.duration,r=s/n,o=n/s;t.warp(1,r,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+i,l[0]=t/r,l[1]=e/r,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const r=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Zh:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case Lo:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulate(n,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const r=i===Kh;if(t===0)return s===-1?n:r&&(s&1)===1?e-n:n;if(i===Io){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=e||n<0){const o=Math.floor(n/e);n-=e*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(r&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=Gn,n.endingEnd=Gn):(t?n.endingStart=this.zeroSlopeAtStart?Gn:zn:n.endingStart=Ma,e?n.endingEnd=this.zeroSlopeAtEnd?Gn:zn:n.endingEnd=Ma)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,c=r.sampleValues;return o[0]=s,c[0]=e,o[1]=s+t,c[1]=i,this}}const sf=new Float32Array(1);class oh extends xn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,r=t._propertyBindings,o=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const v=e&&e._propertyBindings[u].binding.parsedPath;g=new qd(he.create(i,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),r[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let r=s[e];if(r===void 0)r={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=r;else{const o=r.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=n.length,n.push(t),r.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,r=this._actionsByClip,o=r[s],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete r[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let r=n[e];r===void 0&&(r={},n[e]=r),r[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,o=r[n],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[s],Object.keys(o).length===0&&delete r[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new nh(new Float32Array(2),new Float32Array(2),1,sf),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let r=typeof t=="string"?kc.findByName(n,t):t;const o=r!==null?r.uuid:t,c=this._actionsByClip[o];let l=null;if(i===void 0&&(r!==null?i=r.blendMode:i=Lo),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;const h=new nf(this,r,e,i);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?kc.findByName(i,t):t,r=s?s.uuid:t,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),r=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(n,t,s,r);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const r=s.knownActions;for(let o=0,c=r.length;o!==c;++o){const l=r[o];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const r in i){const o=i[r].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const r in s){const o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}function Vc(a,t,e,i){const n=af(i);switch(e){case Cl:return a*t;case Pl:return a*t/n.components*n.byteLength;case Co:return a*t/n.components*n.byteLength;case Yn:return a*t*2/n.components*n.byteLength;case Ro:return a*t*2/n.components*n.byteLength;case Rl:return a*t*3/n.components*n.byteLength;case mi:return a*t*4/n.components*n.byteLength;case Po:return a*t*4/n.components*n.byteLength;case fa:case pa:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Br:case kr:return Math.max(a,16)*Math.max(t,8)/4;case Fr:case Or:return Math.max(a,8)*Math.max(t,8)/2;case zr:case Gr:case Hr:case Wr:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Xr:case qr:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case $r:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case jr:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case to:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case eo:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case no:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case so:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case ao:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case ro:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case oo:case co:case lo:return Math.ceil(a/4)*Math.ceil(t/4)*16;case ho:case uo:return Math.ceil(a/4)*Math.ceil(t/4)*8;case fo:case po:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function af(a){switch(a){case ni:case bl:return{byteLength:1,components:1};case Ss:case Tl:case si:return{byteLength:2,components:1};case Eo:case Ao:return{byteLength:2,components:4};case Ci:case To:case wi:return{byteLength:4,components:1};case El:case Al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);function ch(){let a=null,t=!1,e=null,i=null;function n(s,r){e(s,r),i=a.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=a.requestAnimationFrame(n),t=!0)},stop:function(){a.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function rf(a){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=a.createBuffer();a.bindBuffer(c,d),a.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=a.SHORT;else if(l instanceof Uint32Array)f=a.UNSIGNED_INT;else if(l instanceof Int32Array)f=a.INT;else if(l instanceof Int8Array)f=a.BYTE;else if(l instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(a.bindBuffer(l,o),u.length===0)a.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];a.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(a.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:s,update:r}}var of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
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
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
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
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`#ifdef USE_BATCHING
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
#endif`,gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
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
#endif`,yf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pf=`#define PI 3.141592653589793
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
} // validated`,If=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Df=`vec3 transformedNormal = objectNormal;
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
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
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
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
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
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
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
#endif`,ap=`uniform sampler2D dfgLUT;
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
}`,rp=`
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gp=`#if defined( USE_POINTS_UV )
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
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xp=`float getShadowMask() {
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
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,pm=`#define DISTANCE
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
}`,mm=`#define DISTANCE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,ym=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,bm=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,Em=`#define NORMAL
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
}`,Am=`#define NORMAL
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
}`,Cm=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Pm=`#define STANDARD
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
}`,Im=`#define STANDARD
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
}`,Dm=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Bm=`uniform vec3 color;
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
}`,Om=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:of,alphahash_pars_fragment:cf,alphamap_fragment:lf,alphamap_pars_fragment:hf,alphatest_fragment:uf,alphatest_pars_fragment:df,aomap_fragment:ff,aomap_pars_fragment:pf,batching_pars_vertex:mf,batching_vertex:gf,begin_vertex:_f,beginnormal_vertex:vf,bsdfs:xf,iridescence_fragment:Mf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Tf,color_fragment:Ef,color_pars_fragment:Af,color_pars_vertex:Cf,color_vertex:Rf,common:Pf,cube_uv_reflection_fragment:If,defaultnormal_vertex:Df,displacementmap_pars_vertex:Lf,displacementmap_vertex:Nf,emissivemap_fragment:Uf,emissivemap_pars_fragment:Ff,colorspace_fragment:Bf,colorspace_pars_fragment:Of,envmap_fragment:kf,envmap_common_pars_fragment:zf,envmap_pars_fragment:Gf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:Qf,envmap_vertex:Hf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:qf,fog_pars_fragment:Yf,gradientmap_pars_fragment:Kf,lightmap_pars_fragment:Zf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Jf,lights_pars_begin:jf,lights_toon_fragment:tp,lights_toon_pars_fragment:ep,lights_phong_fragment:ip,lights_phong_pars_fragment:np,lights_physical_fragment:sp,lights_physical_pars_fragment:ap,lights_fragment_begin:rp,lights_fragment_maps:op,lights_fragment_end:cp,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:dp,map_fragment:fp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:vp,morphinstance_vertex:xp,morphcolor_vertex:Mp,morphnormal_vertex:yp,morphtarget_pars_vertex:Sp,morphtarget_vertex:wp,normal_fragment_begin:bp,normal_fragment_maps:Tp,normal_pars_fragment:Ep,normal_pars_vertex:Ap,normal_vertex:Cp,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Dp,iridescence_pars_fragment:Lp,opaque_fragment:Np,packing:Up,premultiplied_alpha_fragment:Fp,project_vertex:Bp,dithering_fragment:Op,dithering_pars_fragment:kp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:Kp,skinnormal_vertex:Zp,specularmap_fragment:$p,specularmap_pars_fragment:Jp,tonemapping_fragment:jp,tonemapping_pars_fragment:Qp,transmission_fragment:tm,transmission_pars_fragment:em,uv_pars_fragment:im,uv_pars_vertex:nm,uv_vertex:sm,worldpos_vertex:am,background_vert:rm,background_frag:om,backgroundCube_vert:cm,backgroundCube_frag:lm,cube_vert:hm,cube_frag:um,depth_vert:dm,depth_frag:fm,distance_vert:pm,distance_frag:mm,equirect_vert:gm,equirect_frag:_m,linedashed_vert:vm,linedashed_frag:xm,meshbasic_vert:Mm,meshbasic_frag:ym,meshlambert_vert:Sm,meshlambert_frag:wm,meshmatcap_vert:bm,meshmatcap_frag:Tm,meshnormal_vert:Em,meshnormal_frag:Am,meshphong_vert:Cm,meshphong_frag:Rm,meshphysical_vert:Pm,meshphysical_frag:Im,meshtoon_vert:Dm,meshtoon_frag:Lm,points_vert:Nm,points_frag:Um,shadow_vert:Fm,shadow_frag:Bm,sprite_vert:Om,sprite_frag:km},ft={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Si={basic:{uniforms:Xe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Xe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Xe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Xe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Xe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Xe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Xe([ft.points,ft.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Xe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Xe([ft.common,ft.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Xe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Xe([ft.sprite,ft.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Xe([ft.common,ft.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Xe([ft.lights,ft.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Si.physical={uniforms:Xe([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const ha={r:0,b:0,g:0},cn=new Ri,zm=new Me;function Gm(a,t,e,i,n,s,r){const o=new Ut(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function v(y){let S=!1;const T=g(y);T===null?p(o,c):T&&T.isColor&&(p(T,1),S=!0);const A=a.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(a.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(y,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===Ia)?(h===void 0&&(h=new D(new yt(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:Zn(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),cn.copy(S.backgroundRotation),cn.x*=-1,cn.y*=-1,cn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(cn)),h.material.toneMapped=te.getTransfer(T.colorSpace)!==oe,(u!==T||d!==T.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=a.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new D(new Ze(2,2),new Re({name:"BackgroundMaterial",uniforms:Zn(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=te.getTransfer(T.colorSpace)!==oe,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,f=a.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(ha,kl(a)),i.buffers.color.setClear(ha.r,ha.g,ha.b,S,r)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:v,addToRenderList:m,dispose:_}}function Vm(a,t){const e=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,r=!1;function o(w,I,F,O,X){let W=!1;const H=u(O,F,I);s!==H&&(s=H,l(s.object)),W=f(w,O,F,X),W&&g(w,O,F,X),X!==null&&t.update(X,a.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,S(w,I,F,O),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return a.createVertexArray()}function l(w){return a.bindVertexArray(w)}function h(w){return a.deleteVertexArray(w)}function u(w,I,F){const O=F.wireframe===!0;let X=i[w.id];X===void 0&&(X={},i[w.id]=X);let W=X[I.id];W===void 0&&(W={},X[I.id]=W);let H=W[O];return H===void 0&&(H=d(c()),W[O]=H),H}function d(w){const I=[],F=[],O=[];for(let X=0;X<e;X++)I[X]=0,F[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:O,object:w,attributes:{},index:null}}function f(w,I,F,O){const X=s.attributes,W=I.attributes;let H=0;const k=F.getAttributes();for(const $ in k)if(k[$].location>=0){const st=X[$];let ut=W[$];if(ut===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor)),st===void 0||st.attribute!==ut||ut&&st.data!==ut.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function g(w,I,F,O){const X={},W=I.attributes;let H=0;const k=F.getAttributes();for(const $ in k)if(k[$].location>=0){let st=W[$];st===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(st=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(st=w.instanceColor));const ut={};ut.attribute=st,st&&st.data&&(ut.data=st.data),X[$]=ut,H++}s.attributes=X,s.attributesNum=H,s.index=O}function v(){const w=s.newAttributes;for(let I=0,F=w.length;I<F;I++)w[I]=0}function m(w){p(w,0)}function p(w,I){const F=s.newAttributes,O=s.enabledAttributes,X=s.attributeDivisors;F[w]=1,O[w]===0&&(a.enableVertexAttribArray(w),O[w]=1),X[w]!==I&&(a.vertexAttribDivisor(w,I),X[w]=I)}function _(){const w=s.newAttributes,I=s.enabledAttributes;for(let F=0,O=I.length;F<O;F++)I[F]!==w[F]&&(a.disableVertexAttribArray(F),I[F]=0)}function y(w,I,F,O,X,W,H){H===!0?a.vertexAttribIPointer(w,I,F,X,W):a.vertexAttribPointer(w,I,F,O,X,W)}function S(w,I,F,O){v();const X=O.attributes,W=F.getAttributes(),H=I.defaultAttributeValues;for(const k in W){const $=W[k];if($.location>=0){let at=X[k];if(at===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(at=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(at=w.instanceColor)),at!==void 0){const st=at.normalized,ut=at.itemSize,Bt=t.get(at);if(Bt===void 0)continue;const It=Bt.buffer,fe=Bt.type,ie=Bt.bytesPerElement,Y=fe===a.INT||fe===a.UNSIGNED_INT||at.gpuType===To;if(at.isInterleavedBufferAttribute){const j=at.data,_t=j.stride,gt=at.offset;if(j.isInstancedInterleavedBuffer){for(let ot=0;ot<$.locationSize;ot++)p($.location+ot,j.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ot=0;ot<$.locationSize;ot++)m($.location+ot);a.bindBuffer(a.ARRAY_BUFFER,It);for(let ot=0;ot<$.locationSize;ot++)y($.location+ot,ut/$.locationSize,fe,st,_t*ie,(gt+ut/$.locationSize*ot)*ie,Y)}else{if(at.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)p($.location+j,at.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let j=0;j<$.locationSize;j++)m($.location+j);a.bindBuffer(a.ARRAY_BUFFER,It);for(let j=0;j<$.locationSize;j++)y($.location+j,ut/$.locationSize,fe,st,ut*ie,ut/$.locationSize*j*ie,Y)}}else if(H!==void 0){const st=H[k];if(st!==void 0)switch(st.length){case 2:a.vertexAttrib2fv($.location,st);break;case 3:a.vertexAttrib3fv($.location,st);break;case 4:a.vertexAttrib4fv($.location,st);break;default:a.vertexAttrib1fv($.location,st)}}}}_()}function T(){P();for(const w in i){const I=i[w];for(const F in I){const O=I[F];for(const X in O)h(O[X].object),delete O[X];delete I[F]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const I=i[w.id];for(const F in I){const O=I[F];for(const X in O)h(O[X].object),delete O[X];delete I[F]}delete i[w.id]}function R(w){for(const I in i){const F=i[I];if(F[w.id]===void 0)continue;const O=F[w.id];for(const X in O)h(O[X].object),delete O[X];delete F[w.id]}}function P(){M(),r=!0,s!==n&&(s=n,l(s.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Hm(a,t,e){let i;function n(l){i=l}function s(l,h){a.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(a.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Wm(a,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){return!(R!==mi&&i.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ni&&i.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wi&&!P)}function c(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Lt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),_=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),S=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),T=a.getParameter(a.MAX_SAMPLES),A=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:S,maxSamples:T,samples:A}}function Xm(a){const t=this;let e=null,i=0,n=!1,s=!1;const r=new hn,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=a.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):l();else{const _=s?0:i,y=_*4;let S=p.clippingState||null;c.value=S,S=h(g,d,y,f);for(let T=0;T!==y;++T)S[T]=e[T];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=f;y!==v;++y,S+=4)r.copy(u[y]).applyMatrix4(_,o),r.normal.toArray(m,S),m[S+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function qm(a){let t=new WeakMap;function e(r,o){return o===Lr?r.mapping=gn:o===Nr&&(r.mapping=qn),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Lr||o===Nr)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Vl(c.height);return l.fromEquirectangularTexture(a,r),t.set(r,l),r.addEventListener("dispose",n),e(l.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Ji=4,Hc=[.125,.215,.35,.446,.526,.582],dn=20,Ym=256,us=new Ba,Wc=new Ut;let vr=null,xr=0,Mr=0,yr=!1;const Km=new E;class Xc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:r=256,position:o=Km}=s;vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vr,xr,Mr),this._renderer.xr.enabled=yr,t.scissorTest=!1,kn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gn||t.mapping===qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:si,format:mi,colorSpace:Kn,depthBuffer:!1},n=qc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zm(s)),this._blurMaterial=Jm(s,t,e),this._ggxMaterial=$m(s,t,e)}return n}_compileMaterial(t){const e=new D(new ye,t);this._renderer.compile(e,us)}_sceneToCubeUV(t,e,i,n,s){const c=new ii(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Wc),u.toneMapping=Ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new D(new yt,new le({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,p=!0):(m.color.copy(Wc),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):S===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const T=this._cubeSize;kn(n,S*T,y>2?T:0,T,T),u.setRenderTarget(n),p&&u.render(v,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===gn||t.mapping===qn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const s=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;kn(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,us)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const c=r.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Ji?i-g+Ji:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,kn(s,m,p,3*v,2*v),n.setRenderTarget(s),n.render(o,us),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,kn(t,m,p,3*v,2*v),n.setRenderTarget(t),n.render(o,us)}_blur(t,e,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",s),this._halfBlur(r,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[n];u.material=l;const d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*dn-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):dn;m>dn&&Lt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dn}`);const p=[];let _=0;for(let R=0;R<dn;++R){const P=R/v,M=Math.exp(-P*P/2);p.push(M),R===0?_+=M:R<m&&(_+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const S=this._sizeLods[n],T=3*S*(n>y-Ji?n-y+Ji:0),A=4*(this._cubeSize-S);kn(e,T,A,3*S,2*S),c.setRenderTarget(e),c.render(u,us)}}function Zm(a){const t=[],e=[],i=[];let n=a;const s=a-Ji+1+Hc.length;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);let c=1/o;r>a-Ji?c=Hc[r-a+Ji-1]:r===0&&(c=0),e.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,P=A>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];_.set(M,v*g*A),y.set(d,m*g*A);const w=[A,A,A,A,A,A];S.set(w,p*g*A)}const T=new ye;T.setAttribute("position",new Be(_,v)),T.setAttribute("uv",new Be(y,m)),T.setAttribute("faceIndex",new Be(S,p)),i.push(new D(T,null)),n>Ji&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function qc(a,t,e){const i=new $e(a,t,e);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kn(a,t,e,i,n){a.viewport.set(t,e,i,n),a.scissor.set(t,e,i,n)}function $m(a,t,e){return new Re({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ym,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Jm(a,t,e){const i=new Float32Array(dn),n=new E(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Yc(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Kc(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function jm(a){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Lr||c===Nr,h=c===gn||c===qn;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Xc(a)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Xc(a)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Qm(a){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=a.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&bs("WebGLRenderer: "+i+" extension not supported."),n}}}function t0(a,t,e,i){const n={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete n[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],a.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,S=_.length;y<S;y+=3){const T=_[y+0],A=_[y+1],R=_[y+2];d.push(T,A,A,R,R,T)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,S=_.length/3-1;y<S;y+=3){const T=y+0,A=y+1,R=y+2;d.push(T,A,A,R,R,T)}}else return;const m=new(Dl(d)?Ol:Bl)(d,1);m.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function e0(a,t,e){let i;function n(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function c(d,f){a.drawElements(i,f,s,d*r),e.update(f,i,1)}function l(d,f,g){g!==0&&(a.drawElementsInstanced(i,f,s,d*r,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i0(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(s/3);break;case a.LINES:e.lines+=o*(s/2);break;case a.LINE_STRIP:e.lines+=o*(s-1);break;case a.LINE_LOOP:e.lines+=o*s;break;case a.POINTS:e.points+=o*s;break;default:Dt("WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function n0(a,t,e){const i=new WeakMap,n=new Te;function s(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let w=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*A*4*u),P=new Ll(R,T,A,u);P.type=wi,P.needsUpdate=!0;const M=S*4;for(let I=0;I<u;I++){const F=p[I],O=_[I],X=y[I],W=T*A*4*I;for(let H=0;H<F.count;H++){const k=H*M;g===!0&&(n.fromBufferAttribute(F,H),R[W+k+0]=n.x,R[W+k+1]=n.y,R[W+k+2]=n.z,R[W+k+3]=0),v===!0&&(n.fromBufferAttribute(O,H),R[W+k+4]=n.x,R[W+k+5]=n.y,R[W+k+6]=n.z,R[W+k+7]=0),m===!0&&(n.fromBufferAttribute(X,H),R[W+k+8]=n.x,R[W+k+9]=n.y,R[W+k+10]=n.z,R[W+k+11]=X.itemSize===4?n.w:1)}}d={count:u,texture:P,size:new et(T,A)},i.set(o,d),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(a,"morphTargetBaseInfluence",v),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function s0(a,t,e,i){let n=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(e.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,a.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;n.get(d)!==l&&(d.update(),n.set(d,l))}return u}function r(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}const a0={[_l]:"LINEAR_TONE_MAPPING",[vl]:"REINHARD_TONE_MAPPING",[xl]:"CINEON_TONE_MAPPING",[bo]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[Sl]:"NEUTRAL_TONE_MAPPING",[Ml]:"CUSTOM_TONE_MAPPING"};function r0(a,t,e,i,n){const s=new $e(t,e,{type:a,depthBuffer:i,stencilBuffer:n}),r=new $e(t,e,{type:si,depthBuffer:!1,stencilBuffer:!1}),o=new ye;o.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new $t([0,2,0,0,2,0],2));const c=new Dd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new D(o,c),h=new Ba(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,v=null,m=[],p=!1;this.setSize=function(_,y){s.setSize(_,y),r.setSize(_,y);for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(_,y)}},this.setEffects=function(_){m=_,p=m.length>0&&m[0].isRenderPass===!0;const y=s.width,S=s.height;for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(y,S)}},this.begin=function(_,y){if(f||_.toneMapping===Ai&&m.length===0)return!1;if(v=y,y!==null){const S=y.width,T=y.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return p===!1&&_.setRenderTarget(s),g=_.toneMapping,_.toneMapping=Ai,!0},this.hasRenderPass=function(){return p},this.end=function(_,y){_.toneMapping=g,f=!0;let S=s,T=r;for(let A=0;A<m.length;A++){const R=m[A];if(R.enabled!==!1&&(R.render(_,T,S,y),R.needsSwap!==!1)){const P=S;S=T,T=P}}if(u!==_.outputColorSpace||d!==_.toneMapping){u=_.outputColorSpace,d=_.toneMapping,c.defines={},te.getTransfer(u)===oe&&(c.defines.SRGB_TRANSFER="");const A=a0[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(v),_.render(l,h),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),r.dispose(),o.dispose(),c.dispose()}}const lh=new Ve,yo=new Es(1,1),hh=new Ll,uh=new Cu,dh=new Gl,Zc=[],$c=[],Jc=new Float32Array(16),jc=new Float32Array(9),Qc=new Float32Array(4);function es(a,t,e){const i=a[0];if(i<=0||i>0)return a;const n=t*e;let s=Zc[n];if(s===void 0&&(s=new Float32Array(n),Zc[n]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function Ie(a,t){if(a.length!==t.length)return!1;for(let e=0,i=a.length;e<i;e++)if(a[e]!==t[e])return!1;return!0}function De(a,t){for(let e=0,i=t.length;e<i;e++)a[e]=t[e]}function ka(a,t){let e=$c[t];e===void 0&&(e=new Int32Array(t),$c[t]=e);for(let i=0;i!==t;++i)e[i]=a.allocateTextureUnit();return e}function o0(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function c0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;a.uniform2fv(this.addr,t),De(e,t)}}function l0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;a.uniform3fv(this.addr,t),De(e,t)}}function h0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;a.uniform4fv(this.addr,t),De(e,t)}}function u0(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;Qc.set(i),a.uniformMatrix2fv(this.addr,!1,Qc),De(e,i)}}function d0(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;jc.set(i),a.uniformMatrix3fv(this.addr,!1,jc),De(e,i)}}function f0(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;Jc.set(i),a.uniformMatrix4fv(this.addr,!1,Jc),De(e,i)}}function p0(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function m0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;a.uniform2iv(this.addr,t),De(e,t)}}function g0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;a.uniform3iv(this.addr,t),De(e,t)}}function _0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;a.uniform4iv(this.addr,t),De(e,t)}}function v0(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function x0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;a.uniform2uiv(this.addr,t),De(e,t)}}function M0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;a.uniform3uiv(this.addr,t),De(e,t)}}function y0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;a.uniform4uiv(this.addr,t),De(e,t)}}function S0(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_2D_SHADOW?(yo.compareFunction=e.isReversedDepthBuffer()?Uo:No,s=yo):s=lh,e.setTexture2D(t||s,n)}function w0(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||uh,n)}function b0(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||dh,n)}function T0(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||hh,n)}function E0(a){switch(a){case 5126:return o0;case 35664:return c0;case 35665:return l0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return x0;case 36295:return M0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return T0}}function A0(a,t){a.uniform1fv(this.addr,t)}function C0(a,t){const e=es(t,this.size,2);a.uniform2fv(this.addr,e)}function R0(a,t){const e=es(t,this.size,3);a.uniform3fv(this.addr,e)}function P0(a,t){const e=es(t,this.size,4);a.uniform4fv(this.addr,e)}function I0(a,t){const e=es(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function D0(a,t){const e=es(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function L0(a,t){const e=es(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function N0(a,t){a.uniform1iv(this.addr,t)}function U0(a,t){a.uniform2iv(this.addr,t)}function F0(a,t){a.uniform3iv(this.addr,t)}function B0(a,t){a.uniform4iv(this.addr,t)}function O0(a,t){a.uniform1uiv(this.addr,t)}function k0(a,t){a.uniform2uiv(this.addr,t)}function z0(a,t){a.uniform3uiv(this.addr,t)}function G0(a,t){a.uniform4uiv(this.addr,t)}function V0(a,t,e){const i=this.cache,n=t.length,s=ka(e,n);Ie(i,s)||(a.uniform1iv(this.addr,s),De(i,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=yo:r=lh;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||r,s[o])}function H0(a,t,e){const i=this.cache,n=t.length,s=ka(e,n);Ie(i,s)||(a.uniform1iv(this.addr,s),De(i,s));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||uh,s[r])}function W0(a,t,e){const i=this.cache,n=t.length,s=ka(e,n);Ie(i,s)||(a.uniform1iv(this.addr,s),De(i,s));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||dh,s[r])}function X0(a,t,e){const i=this.cache,n=t.length,s=ka(e,n);Ie(i,s)||(a.uniform1iv(this.addr,s),De(i,s));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||hh,s[r])}function q0(a){switch(a){case 5126:return A0;case 35664:return C0;case 35665:return R0;case 35666:return P0;case 35674:return I0;case 35675:return D0;case 35676:return L0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return F0;case 35669:case 35673:return B0;case 5125:return O0;case 36294:return k0;case 36295:return z0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}class Y0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=E0(e.type)}}class K0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}}class Z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function tl(a,t){a.seq.push(t),a.map[t.id]=t}function $0(a,t,e){const i=a.name,n=i.length;for(Sr.lastIndex=0;;){const s=Sr.exec(i),r=Sr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===n){tl(e,l===void 0?new Y0(o,a,t):new K0(o,a,t));break}else{let u=e.map[o];u===void 0&&(u=new Z0(o),tl(e,u)),e=u}}}class _a{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),c=t.getUniformLocation(e,o.name);$0(o,c,this)}const n=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(r):s.push(r);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,r=e.length;s!==r;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function el(a,t,e){const i=a.createShader(t);return a.shaderSource(i,e),a.compileShader(i),i}const J0=37297;let j0=0;function Q0(a,t){const e=a.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=n;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const il=new Vt;function tg(a){te._getMatrix(il,te.workingColorSpace,a);const t=`mat3( ${il.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(a)){case ya:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function nl(a,t,e){const i=a.getShaderParameter(t,a.COMPILE_STATUS),s=(a.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Q0(a.getShaderSource(t),o)}else return s}function eg(a,t){const e=tg(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ig={[_l]:"Linear",[vl]:"Reinhard",[xl]:"Cineon",[bo]:"ACESFilmic",[yl]:"AgX",[Sl]:"Neutral",[Ml]:"Custom"};function ng(a,t){const e=ig[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ua=new E;function sg(){te.getLuminanceCoefficients(ua);const a=ua.x.toFixed(4),t=ua.y.toFixed(4),e=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function rg(a){const t=[];for(const e in a){const i=a[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function og(a,t){const e={},i=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=a.getActiveAttrib(t,n),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function gs(a){return a!==""}function sl(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function al(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(a){return a.replace(cg,hg)}const lg=new Map;function hg(a,t){let e=Ht[t];if(e===void 0){const i=lg.get(t);if(i!==void 0)e=Ht[i],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return So(e)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(a){return a.replace(ug,dg)}function dg(a,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function ol(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const fg={[da]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function pg(a){return fg[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mg={[gn]:"ENVMAP_TYPE_CUBE",[qn]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE_UV"};function gg(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":mg[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const _g={[qn]:"ENVMAP_MODE_REFRACTION"};function vg(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":_g[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xg={[gl]:"ENVMAP_BLENDING_MULTIPLY",[Xh]:"ENVMAP_BLENDING_MIX",[qh]:"ENVMAP_BLENDING_ADD"};function Mg(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":xg[a.combine]||"ENVMAP_BLENDING_NONE"}function yg(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Sg(a,t,e,i){const n=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=pg(e),l=gg(e),h=vg(e),u=Mg(e),d=yg(e),f=ag(e),g=rg(s),v=n.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Ai?ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),r=So(r),r=sl(r,e),r=al(r,e),o=So(o),o=sl(o,e),o=al(o,e),r=rl(r),o=rl(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+r,S=_+p+o,T=el(n,n.VERTEX_SHADER,y),A=el(n,n.FRAGMENT_SHADER,S);n.attachShader(v,T),n.attachShader(v,A),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(I){if(a.debug.checkShaderErrors){const F=n.getProgramInfoLog(v)||"",O=n.getShaderInfoLog(T)||"",X=n.getShaderInfoLog(A)||"",W=F.trim(),H=O.trim(),k=X.trim();let $=!0,at=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,v,T,A);else{const st=nl(n,T,"vertex"),ut=nl(n,A,"fragment");Dt("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+st+`
`+ut)}else W!==""?Lt("WebGLProgram: Program Info Log:",W):(H===""||k==="")&&(at=!1);at&&(I.diagnostics={runnable:$,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:p}})}n.deleteShader(T),n.deleteShader(A),P=new _a(n,v),M=og(n,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(v,J0)),w},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=A,this}let wg=0;class bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Tg(t),e.set(t,i)),i}}class Tg{constructor(t){this.id=wg++,this.code=t,this.usedTimes=0}}function Eg(a,t,e,i,n,s,r){const o=new Ul,c=new bg,l=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,w,I,F,O){const X=F.fog,W=O.geometry,H=M.isMeshStandardMaterial?F.environment:null,k=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),$=k&&k.mapping===Ia?k.image.height:null,at=g[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Lt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=st!==void 0?st.length:0;let Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let It,fe,ie,Y;if(at){const ae=Si[at];It=ae.vertexShader,fe=ae.fragmentShader}else It=M.vertexShader,fe=M.fragmentShader,c.update(M),ie=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);const j=a.getRenderTarget(),_t=a.state.buffers.depth.getReversed(),gt=O.isInstancedMesh===!0,ot=O.isBatchedMesh===!0,bt=!!M.map,Qt=!!M.matcap,Kt=!!k,Jt=!!M.aoMap,pe=!!M.lightMap,Wt=!!M.bumpMap,Ee=!!M.normalMap,L=!!M.displacementMap,Ae=!!M.emissiveMap,ne=!!M.metalnessMap,_e=!!M.roughnessMap,Tt=M.anisotropy>0,C=M.clearcoat>0,x=M.dispersion>0,U=M.iridescence>0,K=M.sheen>0,J=M.transmission>0,q=Tt&&!!M.anisotropyMap,At=C&&!!M.clearcoatMap,ct=C&&!!M.clearcoatNormalMap,wt=C&&!!M.clearcoatRoughnessMap,Ft=U&&!!M.iridescenceMap,it=U&&!!M.iridescenceThicknessMap,ht=K&&!!M.sheenColorMap,St=K&&!!M.sheenRoughnessMap,Et=!!M.specularMap,lt=!!M.specularColorMap,Xt=!!M.specularIntensityMap,N=J&&!!M.transmissionMap,mt=J&&!!M.thicknessMap,nt=!!M.gradientMap,vt=!!M.alphaMap,tt=M.alphaTest>0,Z=!!M.alphaHash,rt=!!M.extensions;let kt=Ai;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(kt=a.toneMapping);const ve={shaderID:at,shaderType:M.type,shaderName:M.name,vertexShader:It,fragmentShader:fe,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ot,batchingColor:ot&&O._colorsTexture!==null,instancing:gt,instancingColor:gt&&O.instanceColor!==null,instancingMorph:gt&&O.morphTexture!==null,outputColorSpace:j===null?a.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Kn,alphaToCoverage:!!M.alphaToCoverage,map:bt,matcap:Qt,envMap:Kt,envMapMode:Kt&&k.mapping,envMapCubeUVHeight:$,aoMap:Jt,lightMap:pe,bumpMap:Wt,normalMap:Ee,displacementMap:L,emissiveMap:Ae,normalMapObjectSpace:Ee&&M.normalMapType===Jh,normalMapTangentSpace:Ee&&M.normalMapType===Il,metalnessMap:ne,roughnessMap:_e,anisotropy:Tt,anisotropyMap:q,clearcoat:C,clearcoatMap:At,clearcoatNormalMap:ct,clearcoatRoughnessMap:wt,dispersion:x,iridescence:U,iridescenceMap:Ft,iridescenceThicknessMap:it,sheen:K,sheenColorMap:ht,sheenRoughnessMap:St,specularMap:Et,specularColorMap:lt,specularIntensityMap:Xt,transmission:J,transmissionMap:N,thicknessMap:mt,gradientMap:nt,opaque:M.transparent===!1&&M.blending===Hn&&M.alphaToCoverage===!1,alphaMap:vt,alphaTest:tt,alphaHash:Z,combine:M.combine,mapUv:bt&&v(M.map.channel),aoMapUv:Jt&&v(M.aoMap.channel),lightMapUv:pe&&v(M.lightMap.channel),bumpMapUv:Wt&&v(M.bumpMap.channel),normalMapUv:Ee&&v(M.normalMap.channel),displacementMapUv:L&&v(M.displacementMap.channel),emissiveMapUv:Ae&&v(M.emissiveMap.channel),metalnessMapUv:ne&&v(M.metalnessMap.channel),roughnessMapUv:_e&&v(M.roughnessMap.channel),anisotropyMapUv:q&&v(M.anisotropyMap.channel),clearcoatMapUv:At&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(M.sheenRoughnessMap.channel),specularMapUv:Et&&v(M.specularMap.channel),specularColorMapUv:lt&&v(M.specularColorMap.channel),specularIntensityMapUv:Xt&&v(M.specularIntensityMap.channel),transmissionMapUv:N&&v(M.transmissionMap.channel),thicknessMapUv:mt&&v(M.thicknessMap.channel),alphaMapUv:vt&&v(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ee||Tt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(bt||vt),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Bt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:kt,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===oe,decodeVideoTextureEmissive:Ae&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ue,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:rt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&M.extensions.multiDraw===!0||ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)w.push(I),w.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(w,M),y(w,M),w.push(a.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function y(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const w=g[M.type];let I;if(w){const F=Si[w];I=Ta.clone(F.uniforms)}else I=M.uniforms;return I}function T(M,w){let I=u.get(w);return I!==void 0?++I.usedTimes:(I=new Sg(a,w,M,s),h.push(I),u.set(w,I)),I}function A(M){if(--M.usedTimes===0){const w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),u.delete(M.cacheKey),M.destroy()}}function R(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:P}}function Ag(){let a=new WeakMap;function t(r){return a.has(r)}function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function n(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Cg(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function cl(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function ll(){const a=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function r(u,d,f,g,v,m){let p=a[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},a[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){const p=r(u,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=r(u,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Cg),i.length>1&&i.sort(d||cl),n.length>1&&n.sort(d||cl)}function h(){for(let u=t,d=a.length;u<d;u++){const f=a[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:c,finish:h,sort:l}}function Rg(){let a=new WeakMap;function t(i,n){const s=a.get(i);let r;return s===void 0?(r=new ll,a.set(i,[r])):n>=s.length?(r=new ll,s.push(r)):r=s[n],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function Pg(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Ut};break;case"SpotLight":e={position:new E,direction:new E,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new E,halfWidth:new E,halfHeight:new E};break}return a[t.id]=e,e}}}function Ig(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let Dg=0;function Lg(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Ng(a){const t=new Pg,e=Ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new E);const n=new E,s=new Me,r=new Me;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,S=0,T=0,A=0,R=0;l.sort(Lg);for(let M=0,w=l.length;M<w;M++){const I=l[M],F=I.color,O=I.intensity,X=I.distance;let W=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Yn?W=I.shadow.map.texture:W=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],O);R++}else if(I.isDirectionalLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const k=I.shadow,$=e.get(I);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=I.shadow.matrix,_++}i.directional[f]=H,f++}else if(I.isSpotLight){const H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=X,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[v]=H;const k=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,k.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[v]=k.matrix,I.castShadow){const $=e.get(I);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=W,S++}v++}else if(I.isRectAreaLight){const H=t.get(I);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=H,m++}else if(I.isPointLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const k=I.shadow,$=e.get(I);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=H,g++}else if(I.isHemisphereLight){const H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(O),H.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[p]=H,p++}}m>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==S||P.numSpotMaps!==T||P.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=S,P.numSpotMaps=T,P.numLightProbes=R,i.version=Dg++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const y=l[p];if(y.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),u++}else if(y.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),r.identity(),s.copy(y.matrixWorld),s.premultiply(m),r.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function hl(a){const t=new Ng(a),e=[],i=[];function n(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function r(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:r}}function Ug(a){let t=new WeakMap;function e(n,s=0){const r=t.get(n);let o;return r===void 0?(o=new hl(a),t.set(n,[o])):s>=r.length?(o=new hl(a),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
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
}`,Og=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],kg=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],ul=new Me,ds=new E,wr=new E;function zg(a,t,e){let i=new ko;const n=new et,s=new et,r=new Te,o=new Ld,c=new Nd,l={},h=e.maxTextureSize,u={[Qi]:qe,[qe]:Qi,[ue]:ue},d=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Fg,fragmentShader:Bg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new D(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=da;let p=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===ml&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=da);const M=a.getRenderTarget(),w=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),F=a.state;F.setBlending(Ei),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==this.type;O&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(W=>W.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,W=A.length;X<W;X++){const H=A[X],k=H.shadow;if(k===void 0){Lt("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);const $=k.getFrameExtents();if(n.multiply($),s.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/$.x),n.x=s.x*$.x,k.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/$.y),n.y=s.y*$.y,k.mapSize.y=s.y)),k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ps){if(H.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new $e(n.x,n.y,{format:Yn,type:si,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Es(n.x,n.y,wi),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=Hi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Fe,k.map.depthTexture.magFilter=Fe}else{H.isPointLight?(k.map=new Vl(n.x),k.map.depthTexture=new Qu(n.x,Ci)):(k.map=new $e(n.x,n.y),k.map.depthTexture=new Es(n.x,n.y,Ci)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=Hi;const st=a.state.buffers.depth.getReversed();this.type===da?(k.map.depthTexture.compareFunction=st?Uo:No,k.map.depthTexture.minFilter=Ge,k.map.depthTexture.magFilter=Ge):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Fe,k.map.depthTexture.magFilter=Fe)}k.camera.updateProjectionMatrix()}const at=k.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<at;st++){if(k.map.isWebGLCubeRenderTarget)a.setRenderTarget(k.map,st),a.clear();else{st===0&&(a.setRenderTarget(k.map),a.clear());const ut=k.getViewport(st);r.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),F.viewport(r)}if(H.isPointLight){const ut=k.camera,Bt=k.matrix,It=H.distance||ut.far;It!==ut.far&&(ut.far=It,ut.updateProjectionMatrix()),ds.setFromMatrixPosition(H.matrixWorld),ut.position.copy(ds),wr.copy(ut.position),wr.add(Og[st]),ut.up.copy(kg[st]),ut.lookAt(wr),ut.updateMatrixWorld(),Bt.makeTranslation(-ds.x,-ds.y,-ds.z),ul.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ul,ut.coordinateSystem,ut.reversedDepth)}else k.updateMatrices(H);i=k.getFrustum(),S(R,P,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===ps&&_(k,P),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(M,w,I)};function _(A,R){const P=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $e(n.x,n.y,{format:Yn,type:si})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(R,null,P,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(R,null,P,f,v,null)}function y(A,R,P,M){let w=null;const I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)w=I;else if(w=P.isPointLight===!0?c:o,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=w.uuid,O=R.uuid;let X=l[F];X===void 0&&(X={},l[F]=X);let W=X[O];W===void 0&&(W=w.clone(),X[O]=W,R.addEventListener("dispose",T)),w=W}if(w.visible=R.visible,w.wireframe=R.wireframe,M===ps?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=a.properties.get(w);F.light=P}return w}function S(A,R,P,M,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===ps)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=t.update(A),X=A.material;if(Array.isArray(X)){const W=O.groups;for(let H=0,k=W.length;H<k;H++){const $=W[H],at=X[$.materialIndex];if(at&&at.visible){const st=y(A,at,M,w);A.onBeforeShadow(a,A,R,P,O,st,$),a.renderBufferDirect(P,null,O,st,A,$),A.onAfterShadow(a,A,R,P,O,st,$)}}}else if(X.visible){const W=y(A,X,M,w);A.onBeforeShadow(a,A,R,P,O,W,null),a.renderBufferDirect(P,null,O,W,A,null),A.onAfterShadow(a,A,R,P,O,W,null)}}const F=A.children;for(let O=0,X=F.length;O<X;O++)S(F[O],R,P,M,w)}function T(A){A.target.removeEventListener("dispose",T);for(const P in l){const M=l[P],w=A.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const Gg={[Er]:Ar,[Cr]:Ir,[Rr]:Dr,[Xn]:Pr,[Ar]:Er,[Ir]:Cr,[Dr]:Rr,[Pr]:Xn};function Vg(a,t){function e(){let N=!1;const mt=new Te;let nt=null;const vt=new Te(0,0,0,0);return{setMask:function(tt){nt!==tt&&!N&&(a.colorMask(tt,tt,tt,tt),nt=tt)},setLocked:function(tt){N=tt},setClear:function(tt,Z,rt,kt,ve){ve===!0&&(tt*=kt,Z*=kt,rt*=kt),mt.set(tt,Z,rt,kt),vt.equals(mt)===!1&&(a.clearColor(tt,Z,rt,kt),vt.copy(mt))},reset:function(){N=!1,nt=null,vt.set(-1,0,0,0)}}}function i(){let N=!1,mt=!1,nt=null,vt=null,tt=null;return{setReversed:function(Z){if(mt!==Z){const rt=t.get("EXT_clip_control");Z?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),mt=Z;const kt=tt;tt=null,this.setClear(kt)}},getReversed:function(){return mt},setTest:function(Z){Z?j(a.DEPTH_TEST):_t(a.DEPTH_TEST)},setMask:function(Z){nt!==Z&&!N&&(a.depthMask(Z),nt=Z)},setFunc:function(Z){if(mt&&(Z=Gg[Z]),vt!==Z){switch(Z){case Er:a.depthFunc(a.NEVER);break;case Ar:a.depthFunc(a.ALWAYS);break;case Cr:a.depthFunc(a.LESS);break;case Xn:a.depthFunc(a.LEQUAL);break;case Rr:a.depthFunc(a.EQUAL);break;case Pr:a.depthFunc(a.GEQUAL);break;case Ir:a.depthFunc(a.GREATER);break;case Dr:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}vt=Z}},setLocked:function(Z){N=Z},setClear:function(Z){tt!==Z&&(mt&&(Z=1-Z),a.clearDepth(Z),tt=Z)},reset:function(){N=!1,nt=null,vt=null,tt=null,mt=!1}}}function n(){let N=!1,mt=null,nt=null,vt=null,tt=null,Z=null,rt=null,kt=null,ve=null;return{setTest:function(ae){N||(ae?j(a.STENCIL_TEST):_t(a.STENCIL_TEST))},setMask:function(ae){mt!==ae&&!N&&(a.stencilMask(ae),mt=ae)},setFunc:function(ae,vi,Di){(nt!==ae||vt!==vi||tt!==Di)&&(a.stencilFunc(ae,vi,Di),nt=ae,vt=vi,tt=Di)},setOp:function(ae,vi,Di){(Z!==ae||rt!==vi||kt!==Di)&&(a.stencilOp(ae,vi,Di),Z=ae,rt=vi,kt=Di)},setLocked:function(ae){N=ae},setClear:function(ae){ve!==ae&&(a.clearStencil(ae),ve=ae)},reset:function(){N=!1,mt=null,nt=null,vt=null,tt=null,Z=null,rt=null,kt=null,ve=null}}}const s=new e,r=new i,o=new n,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,S=null,T=null,A=null,R=new Ut(0,0,0),P=0,M=!1,w=null,I=null,F=null,O=null,X=null;const W=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const $=a.getParameter(a.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),H=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=k>=2);let at=null,st={};const ut=a.getParameter(a.SCISSOR_BOX),Bt=a.getParameter(a.VIEWPORT),It=new Te().fromArray(ut),fe=new Te().fromArray(Bt);function ie(N,mt,nt,vt){const tt=new Uint8Array(4),Z=a.createTexture();a.bindTexture(N,Z),a.texParameteri(N,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(N,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let rt=0;rt<nt;rt++)N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY?a.texImage3D(mt,0,a.RGBA,1,1,vt,0,a.RGBA,a.UNSIGNED_BYTE,tt):a.texImage2D(mt+rt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,tt);return Z}const Y={};Y[a.TEXTURE_2D]=ie(a.TEXTURE_2D,a.TEXTURE_2D,1),Y[a.TEXTURE_CUBE_MAP]=ie(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[a.TEXTURE_2D_ARRAY]=ie(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Y[a.TEXTURE_3D]=ie(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),j(a.DEPTH_TEST),r.setFunc(Xn),Wt(!1),Ee(ac),j(a.CULL_FACE),Jt(Ei);function j(N){h[N]!==!0&&(a.enable(N),h[N]=!0)}function _t(N){h[N]!==!1&&(a.disable(N),h[N]=!1)}function gt(N,mt){return u[N]!==mt?(a.bindFramebuffer(N,mt),u[N]=mt,N===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=mt),N===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=mt),!0):!1}function ot(N,mt){let nt=f,vt=!1;if(N){nt=d.get(mt),nt===void 0&&(nt=[],d.set(mt,nt));const tt=N.textures;if(nt.length!==tt.length||nt[0]!==a.COLOR_ATTACHMENT0){for(let Z=0,rt=tt.length;Z<rt;Z++)nt[Z]=a.COLOR_ATTACHMENT0+Z;nt.length=tt.length,vt=!0}}else nt[0]!==a.BACK&&(nt[0]=a.BACK,vt=!0);vt&&a.drawBuffers(nt)}function bt(N){return g!==N?(a.useProgram(N),g=N,!0):!1}const Qt={[un]:a.FUNC_ADD,[Ch]:a.FUNC_SUBTRACT,[Rh]:a.FUNC_REVERSE_SUBTRACT};Qt[Ph]=a.MIN,Qt[Ih]=a.MAX;const Kt={[Dh]:a.ZERO,[Lh]:a.ONE,[Nh]:a.SRC_COLOR,[br]:a.SRC_ALPHA,[zh]:a.SRC_ALPHA_SATURATE,[Oh]:a.DST_COLOR,[Fh]:a.DST_ALPHA,[Uh]:a.ONE_MINUS_SRC_COLOR,[Tr]:a.ONE_MINUS_SRC_ALPHA,[kh]:a.ONE_MINUS_DST_COLOR,[Bh]:a.ONE_MINUS_DST_ALPHA,[Gh]:a.CONSTANT_COLOR,[Vh]:a.ONE_MINUS_CONSTANT_COLOR,[Hh]:a.CONSTANT_ALPHA,[Wh]:a.ONE_MINUS_CONSTANT_ALPHA};function Jt(N,mt,nt,vt,tt,Z,rt,kt,ve,ae){if(N===Ei){v===!0&&(_t(a.BLEND),v=!1);return}if(v===!1&&(j(a.BLEND),v=!0),N!==Ah){if(N!==m||ae!==M){if((p!==un||S!==un)&&(a.blendEquation(a.FUNC_ADD),p=un,S=un),ae)switch(N){case Hn:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case oi:a.blendFunc(a.ONE,a.ONE);break;case rc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case oc:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Dt("WebGLState: Invalid blending: ",N);break}else switch(N){case Hn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case oi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case rc:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",N);break}_=null,y=null,T=null,A=null,R.set(0,0,0),P=0,m=N,M=ae}return}tt=tt||mt,Z=Z||nt,rt=rt||vt,(mt!==p||tt!==S)&&(a.blendEquationSeparate(Qt[mt],Qt[tt]),p=mt,S=tt),(nt!==_||vt!==y||Z!==T||rt!==A)&&(a.blendFuncSeparate(Kt[nt],Kt[vt],Kt[Z],Kt[rt]),_=nt,y=vt,T=Z,A=rt),(kt.equals(R)===!1||ve!==P)&&(a.blendColor(kt.r,kt.g,kt.b,ve),R.copy(kt),P=ve),m=N,M=!1}function pe(N,mt){N.side===ue?_t(a.CULL_FACE):j(a.CULL_FACE);let nt=N.side===qe;mt&&(nt=!nt),Wt(nt),N.blending===Hn&&N.transparent===!1?Jt(Ei):Jt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const vt=N.stencilWrite;o.setTest(vt),vt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(a.SAMPLE_ALPHA_TO_COVERAGE):_t(a.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(N){w!==N&&(N?a.frontFace(a.CW):a.frontFace(a.CCW),w=N)}function Ee(N){N!==Th?(j(a.CULL_FACE),N!==I&&(N===ac?a.cullFace(a.BACK):N===Eh?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):_t(a.CULL_FACE),I=N}function L(N){N!==F&&(H&&a.lineWidth(N),F=N)}function Ae(N,mt,nt){N?(j(a.POLYGON_OFFSET_FILL),(O!==mt||X!==nt)&&(a.polygonOffset(mt,nt),O=mt,X=nt)):_t(a.POLYGON_OFFSET_FILL)}function ne(N){N?j(a.SCISSOR_TEST):_t(a.SCISSOR_TEST)}function _e(N){N===void 0&&(N=a.TEXTURE0+W-1),at!==N&&(a.activeTexture(N),at=N)}function Tt(N,mt,nt){nt===void 0&&(at===null?nt=a.TEXTURE0+W-1:nt=at);let vt=st[nt];vt===void 0&&(vt={type:void 0,texture:void 0},st[nt]=vt),(vt.type!==N||vt.texture!==mt)&&(at!==nt&&(a.activeTexture(nt),at=nt),a.bindTexture(N,mt||Y[N]),vt.type=N,vt.texture=mt)}function C(){const N=st[at];N!==void 0&&N.type!==void 0&&(a.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{a.compressedTexImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function K(){try{a.texSubImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function J(){try{a.texSubImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function q(){try{a.compressedTexSubImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function At(){try{a.compressedTexSubImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function ct(){try{a.texStorage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function wt(){try{a.texStorage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function Ft(){try{a.texImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function it(){try{a.texImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function ht(N){It.equals(N)===!1&&(a.scissor(N.x,N.y,N.z,N.w),It.copy(N))}function St(N){fe.equals(N)===!1&&(a.viewport(N.x,N.y,N.z,N.w),fe.copy(N))}function Et(N,mt){let nt=l.get(mt);nt===void 0&&(nt=new WeakMap,l.set(mt,nt));let vt=nt.get(N);vt===void 0&&(vt=a.getUniformBlockIndex(mt,N.name),nt.set(N,vt))}function lt(N,mt){const vt=l.get(mt).get(N);c.get(mt)!==vt&&(a.uniformBlockBinding(mt,vt,N.__bindingPointIndex),c.set(mt,vt))}function Xt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},at=null,st={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,S=null,T=null,A=null,R=new Ut(0,0,0),P=0,M=!1,w=null,I=null,F=null,O=null,X=null,It.set(0,0,a.canvas.width,a.canvas.height),fe.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:j,disable:_t,bindFramebuffer:gt,drawBuffers:ot,useProgram:bt,setBlending:Jt,setMaterial:pe,setFlipSided:Wt,setCullFace:Ee,setLineWidth:L,setPolygonOffset:Ae,setScissorTest:ne,activeTexture:_e,bindTexture:Tt,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Ft,texImage3D:it,updateUBOMapping:Et,uniformBlockBinding:lt,texStorage2D:ct,texStorage3D:wt,texSubImage2D:K,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:At,scissor:ht,viewport:St,reset:Xt}}function Hg(a,t,e,i,n,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return f?new OffscreenCanvas(C,x):wa("canvas")}function v(C,x,U){let K=1;const J=Tt(C);if((J.width>U||J.height>U)&&(K=U/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(K*J.width),At=Math.floor(K*J.height);u===void 0&&(u=g(q,At));const ct=x?g(q,At):u;return ct.width=q,ct.height=At,ct.getContext("2d").drawImage(C,0,0,q,At),Lt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+At+")."),ct}else return"data"in C&&Lt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){a.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function y(C,x,U,K,J=!1){if(C!==null){if(a[C]!==void 0)return a[C];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=x;if(x===a.RED&&(U===a.FLOAT&&(q=a.R32F),U===a.HALF_FLOAT&&(q=a.R16F),U===a.UNSIGNED_BYTE&&(q=a.R8)),x===a.RED_INTEGER&&(U===a.UNSIGNED_BYTE&&(q=a.R8UI),U===a.UNSIGNED_SHORT&&(q=a.R16UI),U===a.UNSIGNED_INT&&(q=a.R32UI),U===a.BYTE&&(q=a.R8I),U===a.SHORT&&(q=a.R16I),U===a.INT&&(q=a.R32I)),x===a.RG&&(U===a.FLOAT&&(q=a.RG32F),U===a.HALF_FLOAT&&(q=a.RG16F),U===a.UNSIGNED_BYTE&&(q=a.RG8)),x===a.RG_INTEGER&&(U===a.UNSIGNED_BYTE&&(q=a.RG8UI),U===a.UNSIGNED_SHORT&&(q=a.RG16UI),U===a.UNSIGNED_INT&&(q=a.RG32UI),U===a.BYTE&&(q=a.RG8I),U===a.SHORT&&(q=a.RG16I),U===a.INT&&(q=a.RG32I)),x===a.RGB_INTEGER&&(U===a.UNSIGNED_BYTE&&(q=a.RGB8UI),U===a.UNSIGNED_SHORT&&(q=a.RGB16UI),U===a.UNSIGNED_INT&&(q=a.RGB32UI),U===a.BYTE&&(q=a.RGB8I),U===a.SHORT&&(q=a.RGB16I),U===a.INT&&(q=a.RGB32I)),x===a.RGBA_INTEGER&&(U===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),U===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),U===a.UNSIGNED_INT&&(q=a.RGBA32UI),U===a.BYTE&&(q=a.RGBA8I),U===a.SHORT&&(q=a.RGBA16I),U===a.INT&&(q=a.RGBA32I)),x===a.RGB&&(U===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),U===a.UNSIGNED_INT_10F_11F_11F_REV&&(q=a.R11F_G11F_B10F)),x===a.RGBA){const At=J?ya:te.getTransfer(K);U===a.FLOAT&&(q=a.RGBA32F),U===a.HALF_FLOAT&&(q=a.RGBA16F),U===a.UNSIGNED_BYTE&&(q=At===oe?a.SRGB8_ALPHA8:a.RGBA8),U===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),U===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(C,x){let U;return C?x===null||x===Ci||x===ws?U=a.DEPTH24_STENCIL8:x===wi?U=a.DEPTH32F_STENCIL8:x===Ss&&(U=a.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ci||x===ws?U=a.DEPTH_COMPONENT24:x===wi?U=a.DEPTH_COMPONENT32F:x===Ss&&(U=a.DEPTH_COMPONENT16),U}function T(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fe&&C.minFilter!==Ge?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){const x=C.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&h.delete(x)}function R(C){const x=C.target;x.removeEventListener("dispose",R),w(x)}function P(C){const x=i.get(C);if(x.__webglInit===void 0)return;const U=C.source,K=d.get(U);if(K){const J=K[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys(K).length===0&&d.delete(U)}i.remove(C)}function M(C){const x=i.get(C);a.deleteTexture(x.__webglTexture);const U=C.source,K=d.get(U);delete K[x.__cacheKey],r.memory.textures--}function w(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let J=0;J<x.__webglFramebuffer[K].length;J++)a.deleteFramebuffer(x.__webglFramebuffer[K][J]);else a.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)a.deleteFramebuffer(x.__webglFramebuffer[K]);else a.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&a.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&a.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&a.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=C.textures;for(let K=0,J=U.length;K<J;K++){const q=i.get(U[K]);q.__webglTexture&&(a.deleteTexture(q.__webglTexture),r.memory.textures--),i.remove(U[K])}i.remove(C)}let I=0;function F(){I=0}function O(){const C=I;return C>=n.maxTextures&&Lt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),I+=1,C}function X(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function W(C,x){const U=i.get(C);if(C.isVideoTexture&&ne(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){const K=C.image;if(K===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,C,x);return}}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(a.TEXTURE_2D,U.__webglTexture,a.TEXTURE0+x)}function H(C,x){const U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){Y(U,C,x);return}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(a.TEXTURE_2D_ARRAY,U.__webglTexture,a.TEXTURE0+x)}function k(C,x){const U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){Y(U,C,x);return}e.bindTexture(a.TEXTURE_3D,U.__webglTexture,a.TEXTURE0+x)}function $(C,x){const U=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&U.__version!==C.version){j(U,C,x);return}e.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+x)}const at={[fn]:a.REPEAT,[Oi]:a.CLAMP_TO_EDGE,[Ur]:a.MIRRORED_REPEAT},st={[Fe]:a.NEAREST,[Yh]:a.NEAREST_MIPMAP_NEAREST,[Bs]:a.NEAREST_MIPMAP_LINEAR,[Ge]:a.LINEAR,[Ha]:a.LINEAR_MIPMAP_NEAREST,[pn]:a.LINEAR_MIPMAP_LINEAR},ut={[jh]:a.NEVER,[nu]:a.ALWAYS,[Qh]:a.LESS,[No]:a.LEQUAL,[tu]:a.EQUAL,[Uo]:a.GEQUAL,[eu]:a.GREATER,[iu]:a.NOTEQUAL};function Bt(C,x){if(x.type===wi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ge||x.magFilter===Ha||x.magFilter===Bs||x.magFilter===pn||x.minFilter===Ge||x.minFilter===Ha||x.minFilter===Bs||x.minFilter===pn)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,at[x.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,at[x.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,at[x.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,st[x.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,st[x.minFilter]),x.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,ut[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Fe||x.minFilter!==Bs&&x.minFilter!==pn||x.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");a.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function It(C,x){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));const K=x.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const q=X(x);if(q!==C.__cacheKey){J[q]===void 0&&(J[q]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,U=!0),J[q].usedTimes++;const At=J[C.__cacheKey];At!==void 0&&(J[C.__cacheKey].usedTimes--,At.usedTimes===0&&M(x)),C.__cacheKey=q,C.__webglTexture=J[q].texture}return U}function fe(C,x,U){return Math.floor(Math.floor(C/U)/x)}function ie(C,x,U,K){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(a.TEXTURE_2D,0,0,0,x.width,x.height,U,K,x.data);else{q.sort((it,ht)=>it.start-ht.start);let At=0;for(let it=1;it<q.length;it++){const ht=q[At],St=q[it],Et=ht.start+ht.count,lt=fe(St.start,x.width,4),Xt=fe(ht.start,x.width,4);St.start<=Et+1&&lt===Xt&&fe(St.start+St.count-1,x.width,4)===lt?ht.count=Math.max(ht.count,St.start+St.count-ht.start):(++At,q[At]=St)}q.length=At+1;const ct=a.getParameter(a.UNPACK_ROW_LENGTH),wt=a.getParameter(a.UNPACK_SKIP_PIXELS),Ft=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,x.width);for(let it=0,ht=q.length;it<ht;it++){const St=q[it],Et=Math.floor(St.start/4),lt=Math.ceil(St.count/4),Xt=Et%x.width,N=Math.floor(Et/x.width),mt=lt,nt=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,Xt),a.pixelStorei(a.UNPACK_SKIP_ROWS,N),e.texSubImage2D(a.TEXTURE_2D,0,Xt,N,mt,nt,U,K,x.data)}C.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,ct),a.pixelStorei(a.UNPACK_SKIP_PIXELS,wt),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ft)}}function Y(C,x,U){let K=a.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=a.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=a.TEXTURE_3D);const J=It(C,x),q=x.source;e.bindTexture(K,C.__webglTexture,a.TEXTURE0+U);const At=i.get(q);if(q.version!==At.__version||J===!0){e.activeTexture(a.TEXTURE0+U);const ct=te.getPrimaries(te.workingColorSpace),wt=x.colorSpace===$i?null:te.getPrimaries(x.colorSpace),Ft=x.colorSpace===$i||ct===wt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let it=v(x.image,!1,n.maxTextureSize);it=_e(x,it);const ht=s.convert(x.format,x.colorSpace),St=s.convert(x.type);let Et=y(x.internalFormat,ht,St,x.colorSpace,x.isVideoTexture);Bt(K,x);let lt;const Xt=x.mipmaps,N=x.isVideoTexture!==!0,mt=At.__version===void 0||J===!0,nt=q.dataReady,vt=T(x,it);if(x.isDepthTexture)Et=S(x.format===mn,x.type),mt&&(N?e.texStorage2D(a.TEXTURE_2D,1,Et,it.width,it.height):e.texImage2D(a.TEXTURE_2D,0,Et,it.width,it.height,0,ht,St,null));else if(x.isDataTexture)if(Xt.length>0){N&&mt&&e.texStorage2D(a.TEXTURE_2D,vt,Et,Xt[0].width,Xt[0].height);for(let tt=0,Z=Xt.length;tt<Z;tt++)lt=Xt[tt],N?nt&&e.texSubImage2D(a.TEXTURE_2D,tt,0,0,lt.width,lt.height,ht,St,lt.data):e.texImage2D(a.TEXTURE_2D,tt,Et,lt.width,lt.height,0,ht,St,lt.data);x.generateMipmaps=!1}else N?(mt&&e.texStorage2D(a.TEXTURE_2D,vt,Et,it.width,it.height),nt&&ie(x,it,ht,St)):e.texImage2D(a.TEXTURE_2D,0,Et,it.width,it.height,0,ht,St,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&mt&&e.texStorage3D(a.TEXTURE_2D_ARRAY,vt,Et,Xt[0].width,Xt[0].height,it.depth);for(let tt=0,Z=Xt.length;tt<Z;tt++)if(lt=Xt[tt],x.format!==mi)if(ht!==null)if(N){if(nt)if(x.layerUpdates.size>0){const rt=Vc(lt.width,lt.height,x.format,x.type);for(const kt of x.layerUpdates){const ve=lt.data.subarray(kt*rt/lt.data.BYTES_PER_ELEMENT,(kt+1)*rt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,tt,0,0,kt,lt.width,lt.height,1,ht,ve)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,it.depth,ht,lt.data)}else e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,tt,Et,lt.width,lt.height,it.depth,0,lt.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?nt&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,it.depth,ht,St,lt.data):e.texImage3D(a.TEXTURE_2D_ARRAY,tt,Et,lt.width,lt.height,it.depth,0,ht,St,lt.data)}else{N&&mt&&e.texStorage2D(a.TEXTURE_2D,vt,Et,Xt[0].width,Xt[0].height);for(let tt=0,Z=Xt.length;tt<Z;tt++)lt=Xt[tt],x.format!==mi?ht!==null?N?nt&&e.compressedTexSubImage2D(a.TEXTURE_2D,tt,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(a.TEXTURE_2D,tt,Et,lt.width,lt.height,0,lt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?nt&&e.texSubImage2D(a.TEXTURE_2D,tt,0,0,lt.width,lt.height,ht,St,lt.data):e.texImage2D(a.TEXTURE_2D,tt,Et,lt.width,lt.height,0,ht,St,lt.data)}else if(x.isDataArrayTexture)if(N){if(mt&&e.texStorage3D(a.TEXTURE_2D_ARRAY,vt,Et,it.width,it.height,it.depth),nt)if(x.layerUpdates.size>0){const tt=Vc(it.width,it.height,x.format,x.type);for(const Z of x.layerUpdates){const rt=it.data.subarray(Z*tt/it.data.BYTES_PER_ELEMENT,(Z+1)*tt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,ht,St,rt)}x.clearLayerUpdates()}else e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ht,St,it.data)}else e.texImage3D(a.TEXTURE_2D_ARRAY,0,Et,it.width,it.height,it.depth,0,ht,St,it.data);else if(x.isData3DTexture)N?(mt&&e.texStorage3D(a.TEXTURE_3D,vt,Et,it.width,it.height,it.depth),nt&&e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ht,St,it.data)):e.texImage3D(a.TEXTURE_3D,0,Et,it.width,it.height,it.depth,0,ht,St,it.data);else if(x.isFramebufferTexture){if(mt)if(N)e.texStorage2D(a.TEXTURE_2D,vt,Et,it.width,it.height);else{let tt=it.width,Z=it.height;for(let rt=0;rt<vt;rt++)e.texImage2D(a.TEXTURE_2D,rt,Et,tt,Z,0,ht,St,null),tt>>=1,Z>>=1}}else if(Xt.length>0){if(N&&mt){const tt=Tt(Xt[0]);e.texStorage2D(a.TEXTURE_2D,vt,Et,tt.width,tt.height)}for(let tt=0,Z=Xt.length;tt<Z;tt++)lt=Xt[tt],N?nt&&e.texSubImage2D(a.TEXTURE_2D,tt,0,0,ht,St,lt):e.texImage2D(a.TEXTURE_2D,tt,Et,ht,St,lt);x.generateMipmaps=!1}else if(N){if(mt){const tt=Tt(it);e.texStorage2D(a.TEXTURE_2D,vt,Et,tt.width,tt.height)}nt&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,ht,St,it)}else e.texImage2D(a.TEXTURE_2D,0,Et,ht,St,it);m(x)&&p(K),At.__version=q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function j(C,x,U){if(x.image.length!==6)return;const K=It(C,x),J=x.source;e.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+U);const q=i.get(J);if(J.version!==q.__version||K===!0){e.activeTexture(a.TEXTURE0+U);const At=te.getPrimaries(te.workingColorSpace),ct=x.colorSpace===$i?null:te.getPrimaries(x.colorSpace),wt=x.colorSpace===$i||At===ct?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ft=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let Z=0;Z<6;Z++)!Ft&&!it?ht[Z]=v(x.image[Z],!0,n.maxCubemapSize):ht[Z]=it?x.image[Z].image:x.image[Z],ht[Z]=_e(x,ht[Z]);const St=ht[0],Et=s.convert(x.format,x.colorSpace),lt=s.convert(x.type),Xt=y(x.internalFormat,Et,lt,x.colorSpace),N=x.isVideoTexture!==!0,mt=q.__version===void 0||K===!0,nt=J.dataReady;let vt=T(x,St);Bt(a.TEXTURE_CUBE_MAP,x);let tt;if(Ft){N&&mt&&e.texStorage2D(a.TEXTURE_CUBE_MAP,vt,Xt,St.width,St.height);for(let Z=0;Z<6;Z++){tt=ht[Z].mipmaps;for(let rt=0;rt<tt.length;rt++){const kt=tt[rt];x.format!==mi?Et!==null?N?nt&&e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,kt.width,kt.height,Et,kt.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Xt,kt.width,kt.height,0,kt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?nt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,kt.width,kt.height,Et,lt,kt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Xt,kt.width,kt.height,0,Et,lt,kt.data)}}}else{if(tt=x.mipmaps,N&&mt){tt.length>0&&vt++;const Z=Tt(ht[0]);e.texStorage2D(a.TEXTURE_CUBE_MAP,vt,Xt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){N?nt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ht[Z].width,ht[Z].height,Et,lt,ht[Z].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,ht[Z].width,ht[Z].height,0,Et,lt,ht[Z].data);for(let rt=0;rt<tt.length;rt++){const ve=tt[rt].image[Z].image;N?nt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,ve.width,ve.height,Et,lt,ve.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Xt,ve.width,ve.height,0,Et,lt,ve.data)}}else{N?nt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Et,lt,ht[Z]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,Et,lt,ht[Z]);for(let rt=0;rt<tt.length;rt++){const kt=tt[rt];N?nt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Et,lt,kt.image[Z]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Xt,Et,lt,kt.image[Z])}}}m(x)&&p(a.TEXTURE_CUBE_MAP),q.__version=J.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function _t(C,x,U,K,J,q){const At=s.convert(U.format,U.colorSpace),ct=s.convert(U.type),wt=y(U.internalFormat,At,ct,U.colorSpace),Ft=i.get(x),it=i.get(U);if(it.__renderTarget=x,!Ft.__hasExternalTextures){const ht=Math.max(1,x.width>>q),St=Math.max(1,x.height>>q);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?e.texImage3D(J,q,wt,ht,St,x.depth,0,At,ct,null):e.texImage2D(J,q,wt,ht,St,0,At,ct,null)}e.bindFramebuffer(a.FRAMEBUFFER,C),Ae(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,J,it.__webglTexture,0,L(x)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,K,J,it.__webglTexture,q),e.bindFramebuffer(a.FRAMEBUFFER,null)}function gt(C,x,U){if(a.bindRenderbuffer(a.RENDERBUFFER,C),x.depthBuffer){const K=x.depthTexture,J=K&&K.isDepthTexture?K.type:null,q=S(x.stencilBuffer,J),At=x.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Ae(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,L(x),q,x.width,x.height):U?a.renderbufferStorageMultisample(a.RENDERBUFFER,L(x),q,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,q,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,At,a.RENDERBUFFER,C)}else{const K=x.textures;for(let J=0;J<K.length;J++){const q=K[J],At=s.convert(q.format,q.colorSpace),ct=s.convert(q.type),wt=y(q.internalFormat,At,ct,q.colorSpace);Ae(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,L(x),wt,x.width,x.height):U?a.renderbufferStorageMultisample(a.RENDERBUFFER,L(x),wt,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,wt,x.width,x.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ot(C,x,U){const K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(a.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=a.createTexture(),e.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture),Bt(a.TEXTURE_CUBE_MAP,x.depthTexture);const Ft=s.convert(x.depthTexture.format),it=s.convert(x.depthTexture.type);let ht;x.depthTexture.format===Hi?ht=a.DEPTH_COMPONENT24:x.depthTexture.format===mn&&(ht=a.DEPTH24_STENCIL8);for(let St=0;St<6;St++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ht,x.width,x.height,0,Ft,it,null)}}else W(x.depthTexture,0);const q=J.__webglTexture,At=L(x),ct=K?a.TEXTURE_CUBE_MAP_POSITIVE_X+U:a.TEXTURE_2D,wt=x.depthTexture.format===mn?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(x.depthTexture.format===Hi)Ae(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,wt,ct,q,0,At):a.framebufferTexture2D(a.FRAMEBUFFER,wt,ct,q,0);else if(x.depthTexture.format===mn)Ae(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,wt,ct,q,0,At):a.framebufferTexture2D(a.FRAMEBUFFER,wt,ct,q,0);else throw new Error("Unknown depthTexture format")}function bt(C){const x=i.get(C),U=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=K}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)ot(x.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?ot(x.__webglFramebuffer[0],C,0):ot(x.__webglFramebuffer,C,0)}else if(U){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=a.createRenderbuffer(),gt(x.__webglDepthbuffer[K],C,!1);else{const J=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[K];a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,q)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=a.createRenderbuffer(),gt(x.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,q)}}e.bindFramebuffer(a.FRAMEBUFFER,null)}function Qt(C,x,U){const K=i.get(C);x!==void 0&&_t(K.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),U!==void 0&&bt(C)}function Kt(C){const x=C.texture,U=i.get(C),K=i.get(x);C.addEventListener("dispose",R);const J=C.textures,q=C.isWebGLCubeRenderTarget===!0,At=J.length>1;if(At||(K.__webglTexture===void 0&&(K.__webglTexture=a.createTexture()),K.__version=x.version,r.memory.textures++),q){U.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ct]=[];for(let wt=0;wt<x.mipmaps.length;wt++)U.__webglFramebuffer[ct][wt]=a.createFramebuffer()}else U.__webglFramebuffer[ct]=a.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)U.__webglFramebuffer[ct]=a.createFramebuffer()}else U.__webglFramebuffer=a.createFramebuffer();if(At)for(let ct=0,wt=J.length;ct<wt;ct++){const Ft=i.get(J[ct]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=a.createTexture(),r.memory.textures++)}if(C.samples>0&&Ae(C)===!1){U.__webglMultisampledFramebuffer=a.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const wt=J[ct];U.__webglColorRenderbuffer[ct]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,U.__webglColorRenderbuffer[ct]);const Ft=s.convert(wt.format,wt.colorSpace),it=s.convert(wt.type),ht=y(wt.internalFormat,Ft,it,wt.colorSpace,C.isXRRenderTarget===!0),St=L(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,St,ht,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.RENDERBUFFER,U.__webglColorRenderbuffer[ct])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=a.createRenderbuffer(),gt(U.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(q){e.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture),Bt(a.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)_t(U.__webglFramebuffer[ct][wt],C,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt);else _t(U.__webglFramebuffer[ct],C,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&p(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ct=0,wt=J.length;ct<wt;ct++){const Ft=J[ct],it=i.get(Ft);let ht=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(ht,it.__webglTexture),Bt(ht,Ft),_t(U.__webglFramebuffer,C,Ft,a.COLOR_ATTACHMENT0+ct,ht,0),m(Ft)&&p(ht)}e.unbindTexture()}else{let ct=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),Bt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)_t(U.__webglFramebuffer[wt],C,x,a.COLOR_ATTACHMENT0,ct,wt);else _t(U.__webglFramebuffer,C,x,a.COLOR_ATTACHMENT0,ct,0);m(x)&&p(ct),e.unbindTexture()}C.depthBuffer&&bt(C)}function Jt(C){const x=C.textures;for(let U=0,K=x.length;U<K;U++){const J=x[U];if(m(J)){const q=_(C),At=i.get(J).__webglTexture;e.bindTexture(q,At),p(q),e.unbindTexture()}}}const pe=[],Wt=[];function Ee(C){if(C.samples>0){if(Ae(C)===!1){const x=C.textures,U=C.width,K=C.height;let J=a.COLOR_BUFFER_BIT;const q=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,At=i.get(C),ct=x.length>1;if(ct)for(let Ft=0;Ft<x.length;Ft++)e.bindFramebuffer(a.FRAMEBUFFER,At.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ft,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,At.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ft,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const wt=C.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(a.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(a.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Ft=0;Ft<x.length;Ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),ct){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,At.__webglColorRenderbuffer[Ft]);const it=i.get(x[Ft]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,it,0)}a.blitFramebuffer(0,0,U,K,0,0,U,K,J,a.NEAREST),c===!0&&(pe.length=0,Wt.length=0,pe.push(a.COLOR_ATTACHMENT0+Ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(pe.push(q),Wt.push(q),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Wt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ct)for(let Ft=0;Ft<x.length;Ft++){e.bindFramebuffer(a.FRAMEBUFFER,At.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ft,a.RENDERBUFFER,At.__webglColorRenderbuffer[Ft]);const it=i.get(x[Ft]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,At.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ft,a.TEXTURE_2D,it,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const x=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[x])}}}function L(C){return Math.min(n.maxSamples,C.samples)}function Ae(C){const x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(C){const x=r.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function _e(C,x){const U=C.colorSpace,K=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==Kn&&U!==$i&&(te.getTransfer(U)===oe?(K!==mi||J!==ni)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",U)),x}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=Qt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Wg(a,t){function e(i,n=$i){let s;const r=te.getTransfer(n);if(i===ni)return a.UNSIGNED_BYTE;if(i===Eo)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Ao)return a.UNSIGNED_SHORT_5_5_5_1;if(i===El)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Al)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===bl)return a.BYTE;if(i===Tl)return a.SHORT;if(i===Ss)return a.UNSIGNED_SHORT;if(i===To)return a.INT;if(i===Ci)return a.UNSIGNED_INT;if(i===wi)return a.FLOAT;if(i===si)return a.HALF_FLOAT;if(i===Cl)return a.ALPHA;if(i===Rl)return a.RGB;if(i===mi)return a.RGBA;if(i===Hi)return a.DEPTH_COMPONENT;if(i===mn)return a.DEPTH_STENCIL;if(i===Pl)return a.RED;if(i===Co)return a.RED_INTEGER;if(i===Yn)return a.RG;if(i===Ro)return a.RG_INTEGER;if(i===Po)return a.RGBA_INTEGER;if(i===fa||i===pa||i===ma||i===ga)if(r===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fr||i===Br||i===Or||i===kr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Br)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Or)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zr||i===Gr||i===Vr||i===Hr||i===Wr||i===Xr||i===qr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zr||i===Gr)return r===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vr)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hr)return s.COMPRESSED_R11_EAC;if(i===Wr)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xr)return s.COMPRESSED_RG11_EAC;if(i===qr)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yr||i===Kr||i===Zr||i===$r||i===Jr||i===jr||i===Qr||i===to||i===eo||i===io||i===no||i===so||i===ao||i===ro)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yr)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kr)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zr)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$r)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jr)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jr)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qr)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===to)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===eo)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===io)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===no)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===so)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ao)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ro)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oo||i===co||i===lo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===oo)return r===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===co)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ho||i===uo||i===fo||i===po)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ho)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===po)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:e}}const Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
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

}`;class Yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ql(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Re({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new Ze(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kg extends xn{constructor(t,e){super();const i=this;let n=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Yg,p={},_=e.getContextAttributes();let y=null,S=null;const T=[],A=[],R=new et;let P=null;const M=new ii;M.viewport=new Te;const w=new ii;w.viewport=new Te;const I=[M,w],F=new Xd;let O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=T[Y];return j===void 0&&(j=new ur,T[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=T[Y];return j===void 0&&(j=new ur,T[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=T[Y];return j===void 0&&(j=new ur,T[Y]=j),j.getHandSpace()};function W(Y){const j=A.indexOf(Y.inputSource);if(j===-1)return;const _t=T[j];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,l||r),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",k);for(let Y=0;Y<T.length;Y++){const j=A[Y];j!==null&&(A[Y]=null,T[Y].disconnect(j))}O=null,X=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(y),f=null,d=null,u=null,n=null,S=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(y=t.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",H),n.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,gt=null,ot=null;_.depth&&(ot=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=_.stencil?mn:Hi,gt=_.stencil?ws:Ci);const bt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(bt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new $e(d.textureWidth,d.textureHeight,{format:mi,type:ni,depthTexture:new Es(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,_t),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new $e(f.framebufferWidth,f.framebufferHeight,{format:mi,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await n.requestReferenceSpace(o),ie.setContext(n),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Y){for(let j=0;j<Y.removed.length;j++){const _t=Y.removed[j],gt=A.indexOf(_t);gt>=0&&(A[gt]=null,T[gt].disconnect(_t))}for(let j=0;j<Y.added.length;j++){const _t=Y.added[j];let gt=A.indexOf(_t);if(gt===-1){for(let bt=0;bt<T.length;bt++)if(bt>=A.length){A.push(_t),gt=bt;break}else if(A[bt]===null){A[bt]=_t,gt=bt;break}if(gt===-1)break}const ot=T[gt];ot&&ot.connect(_t)}}const $=new E,at=new E;function st(Y,j,_t){$.setFromMatrixPosition(j.matrixWorld),at.setFromMatrixPosition(_t.matrixWorld);const gt=$.distanceTo(at),ot=j.projectionMatrix.elements,bt=_t.projectionMatrix.elements,Qt=ot[14]/(ot[10]-1),Kt=ot[14]/(ot[10]+1),Jt=(ot[9]+1)/ot[5],pe=(ot[9]-1)/ot[5],Wt=(ot[8]-1)/ot[0],Ee=(bt[8]+1)/bt[0],L=Qt*Wt,Ae=Qt*Ee,ne=gt/(-Wt+Ee),_e=ne*-Wt;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(_e),Y.translateZ(ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ot[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Tt=Qt+ne,C=Kt+ne,x=L-_e,U=Ae+(gt-_e),K=Jt*Kt/C*Tt,J=pe*Kt/C*Tt;Y.projectionMatrix.makePerspective(x,U,K,J,Tt,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ut(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let j=Y.near,_t=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),F.near=w.near=M.near=j,F.far=w.far=M.far=_t,(O!==F.near||X!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,X=F.far),F.layers.mask=Y.layers.mask|6,M.layers.mask=F.layers.mask&3,w.layers.mask=F.layers.mask&5;const gt=Y.parent,ot=F.cameras;ut(F,gt);for(let bt=0;bt<ot.length;bt++)ut(ot[bt],gt);ot.length===2?st(F,M,w):F.projectionMatrix.copy(M.projectionMatrix),Bt(Y,F,gt)};function Bt(Y,j,_t){_t===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ts*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let It=null;function fe(Y,j){if(h=j.getViewerPose(l||r),g=j,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let gt=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,gt=!0);for(let Kt=0;Kt<_t.length;Kt++){const Jt=_t[Kt];let pe=null;if(f!==null)pe=f.getViewport(Jt);else{const Ee=u.getViewSubImage(d,Jt);pe=Ee.viewport,Kt===0&&(t.setRenderTargetTextures(S,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(S))}let Wt=I[Kt];Wt===void 0&&(Wt=new ii,Wt.layers.enable(Kt),Wt.viewport=new Te,I[Kt]=Wt),Wt.matrix.fromArray(Jt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Jt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(pe.x,pe.y,pe.width,pe.height),Kt===0&&(F.matrix.copy(Wt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),gt===!0&&F.cameras.push(Wt)}const ot=n.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const Kt=u.getDepthInformation(_t[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,n.renderState)}if(ot&&ot.includes("camera-access")&&v){t.state.unbindTexture(),u=i.getBinding();for(let Kt=0;Kt<_t.length;Kt++){const Jt=_t[Kt].camera;if(Jt){let pe=p[Jt];pe||(pe=new ql,p[Jt]=pe);const Wt=u.getCameraImage(Jt);pe.sourceTexture=Wt}}}}for(let _t=0;_t<T.length;_t++){const gt=A[_t],ot=T[_t];gt!==null&&ot!==void 0&&ot.update(gt,j,l||r)}It&&It(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const ie=new ch;ie.setAnimationLoop(fe),this.setAnimationLoop=function(Y){It=Y},this.dispose=function(){}}}const ln=new Ri,Zg=new Me;function $g(a,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,kl(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,S=_.envMapRotation;y&&(m.envMap.value=y,ln.copy(S),ln.x*=-1,ln.y*=-1,ln.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ln.y*=-1,ln.z*=-1),m.envMapRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(ln)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Jg(a,t,e,i){let n={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const S=y.program;i.uniformBlockBinding(_,S)}function l(_,y){let S=n[_.id];S===void 0&&(g(_),S=h(_),n[_.id]=S,_.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(_,T);const A=t.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function h(_){const y=u();_.__bindingPointIndex=y;const S=a.createBuffer(),T=_.__size,A=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,S),a.bufferData(a.UNIFORM_BUFFER,T,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,S),S}function u(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=n[_.id],S=_.uniforms,T=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let A=0,R=S.length;A<R;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,w=P.length;M<w;M++){const I=P[M];if(f(I,A,M,T)===!0){const F=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let W=0;W<O.length;W++){const H=O[W],k=v(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,a.bufferSubData(a.UNIFORM_BUFFER,F+X,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,X),X+=k.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,F,I.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(_,y,S,T){const A=_.value,R=y+"_"+S;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{const P=T[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return T[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(_){const y=_.uniforms;let S=0;const T=16;for(let R=0,P=y.length;R<P;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,I=M.length;w<I;w++){const F=M[w],O=Array.isArray(F.value)?F.value:[F.value];for(let X=0,W=O.length;X<W;X++){const H=O[X],k=v(H),$=S%T,at=$%k.boundary,st=$+at;S+=at,st!==0&&T-st<k.storage&&(S+=T-st),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=k.storage}}}const A=S%T;return A>0&&(S+=T-A),_.__size=S,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Lt("WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const S=r.indexOf(y.__bindingPointIndex);r.splice(S,1),a.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function p(){for(const _ in n)a.deleteBuffer(n[_]);r=[],n={},s={}}return{bind:c,update:l,dispose:p}}const jg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function Qg(){return xi===null&&(xi=new Ku(jg,16,16,Yn,si),xi.name="DFG_LUT",xi.minFilter=Ge,xi.magFilter=Ge,xi.wrapS=Oi,xi.wrapT=Oi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class t_{constructor(t={}){const{canvas:e=au(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ni}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const v=f,m=new Set([Po,Ro,Co]),p=new Set([ni,Ci,Ss,ws,Eo,Ao]),_=new Uint32Array(4),y=new Int32Array(4);let S=null,T=null;const A=[],R=[];let P=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=ci;let I=0,F=0,O=null,X=-1,W=null;const H=new Te,k=new Te;let $=null;const at=new Ut(0);let st=0,ut=e.width,Bt=e.height,It=1,fe=null,ie=null;const Y=new Te(0,0,ut,Bt),j=new Te(0,0,ut,Bt);let _t=!1;const gt=new ko;let ot=!1,bt=!1;const Qt=new Me,Kt=new E,Jt=new Te,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Ee(){return O===null?It:1}let L=i;function Ae(b,B){return e.getContext(b,B)}try{const b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",ae,!1),L===null){const B="webgl2";if(L=Ae(B,b),L===null)throw Ae(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Dt("WebGLRenderer: "+b.message),b}let ne,_e,Tt,C,x,U,K,J,q,At,ct,wt,Ft,it,ht,St,Et,lt,Xt,N,mt,nt,vt,tt;function Z(){ne=new Qm(L),ne.init(),nt=new Wg(L,ne),_e=new Wm(L,ne,t,nt),Tt=new Vg(L,ne),_e.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),C=new i0(L),x=new Ag,U=new Hg(L,ne,Tt,x,_e,nt,C),K=new qm(M),J=new jm(M),q=new rf(L),vt=new Vm(L,q),At=new t0(L,q,C,vt),ct=new s0(L,At,q,C),Xt=new n0(L,_e,U),St=new Xm(x),wt=new Eg(M,K,J,ne,_e,vt,St),Ft=new $g(M,x),it=new Rg,ht=new Ug(ne),lt=new Gm(M,K,J,Tt,ct,g,c),Et=new zg(M,ct,_e),tt=new Jg(L,C,_e,Tt),N=new Hm(L,ne,C),mt=new e0(L,ne,C),C.programs=wt.programs,M.capabilities=_e,M.extensions=ne,M.properties=x,M.renderLists=it,M.shadowMap=Et,M.state=Tt,M.info=C}Z(),v!==ni&&(P=new r0(v,e.width,e.height,n,s));const rt=new Kg(M,L);this.xr=rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return It},this.setPixelRatio=function(b){b!==void 0&&(It=b,this.setSize(ut,Bt,!1))},this.getSize=function(b){return b.set(ut,Bt)},this.setSize=function(b,B,V=!0){if(rt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=b,Bt=B,e.width=Math.floor(b*It),e.height=Math.floor(B*It),V===!0&&(e.style.width=b+"px",e.style.height=B+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(ut*It,Bt*It).floor()},this.setDrawingBufferSize=function(b,B,V){ut=b,Bt=B,It=V,e.width=Math.floor(b*V),e.height=Math.floor(B*V),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(v===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(Y)},this.setViewport=function(b,B,V,G){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,B,V,G),Tt.viewport(H.copy(Y).multiplyScalar(It).round())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,B,V,G){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,B,V,G),Tt.scissor(k.copy(j).multiplyScalar(It).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(b){Tt.setScissorTest(_t=b)},this.setOpaqueSort=function(b){fe=b},this.setTransparentSort=function(b){ie=b},this.getClearColor=function(b){return b.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,V=!0){let G=0;if(b){let z=!1;if(O!==null){const dt=O.texture.format;z=m.has(dt)}if(z){const dt=O.texture.type,xt=p.has(dt),pt=lt.getClearColor(),Mt=lt.getClearAlpha(),Ct=pt.r,Nt=pt.g,Rt=pt.b;xt?(_[0]=Ct,_[1]=Nt,_[2]=Rt,_[3]=Mt,L.clearBufferuiv(L.COLOR,0,_)):(y[0]=Ct,y[1]=Nt,y[2]=Rt,y[3]=Mt,L.clearBufferiv(L.COLOR,0,y))}else G|=L.COLOR_BUFFER_BIT}B&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),lt.dispose(),it.dispose(),ht.dispose(),x.dispose(),K.dispose(),J.dispose(),ct.dispose(),vt.dispose(),tt.dispose(),wt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",jo),rt.removeEventListener("sessionend",Qo),en.stop()};function kt(b){b.preventDefault(),ba("WebGLRenderer: Context Lost."),w=!0}function ve(){ba("WebGLRenderer: Context Restored."),w=!1;const b=C.autoReset,B=Et.enabled,V=Et.autoUpdate,G=Et.needsUpdate,z=Et.type;Z(),C.autoReset=b,Et.enabled=B,Et.autoUpdate=V,Et.needsUpdate=G,Et.type=z}function ae(b){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vi(b){const B=b.target;B.removeEventListener("dispose",vi),Di(B)}function Di(b){_h(b),x.remove(b)}function _h(b){const B=x.get(b).programs;B!==void 0&&(B.forEach(function(V){wt.releaseProgram(V)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,V,G,z,dt){B===null&&(B=pe);const xt=z.isMesh&&z.matrixWorld.determinant()<0,pt=xh(b,B,V,G,z);Tt.setMaterial(G,xt);let Mt=V.index,Ct=1;if(G.wireframe===!0){if(Mt=At.getWireframeAttribute(V),Mt===void 0)return;Ct=2}const Nt=V.drawRange,Rt=V.attributes.position;let Zt=Nt.start*Ct,de=(Nt.start+Nt.count)*Ct;dt!==null&&(Zt=Math.max(Zt,dt.start*Ct),de=Math.min(de,(dt.start+dt.count)*Ct)),Mt!==null?(Zt=Math.max(Zt,0),de=Math.min(de,Mt.count)):Rt!=null&&(Zt=Math.max(Zt,0),de=Math.min(de,Rt.count));const we=de-Zt;if(we<0||we===1/0)return;vt.setup(z,G,pt,V,Mt);let be,me=N;if(Mt!==null&&(be=q.get(Mt),me=mt,me.setIndex(be)),z.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*Ee()),me.setMode(L.LINES)):me.setMode(L.TRIANGLES);else if(z.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),Tt.setLineWidth(Pt*Ee()),z.isLineSegments?me.setMode(L.LINES):z.isLineLoop?me.setMode(L.LINE_LOOP):me.setMode(L.LINE_STRIP)}else z.isPoints?me.setMode(L.POINTS):z.isSprite&&me.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)bs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pt=z._multiDrawStarts,re=z._multiDrawCounts,ee=z._multiDrawCount,Je=Mt?q.get(Mt).bytesPerElement:1,yn=x.get(G).currentProgram.getUniforms();for(let je=0;je<ee;je++)yn.setValue(L,"_gl_DrawID",je),me.render(Pt[je]/Je,re[je])}else if(z.isInstancedMesh)me.renderInstances(Zt,we,z.count);else if(V.isInstancedBufferGeometry){const Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,re=Math.min(V.instanceCount,Pt);me.renderInstances(Zt,we,re)}else me.render(Zt,we)};function Jo(b,B,V){b.transparent===!0&&b.side===ue&&b.forceSinglePass===!1?(b.side=qe,b.needsUpdate=!0,Fs(b,B,V),b.side=Qi,b.needsUpdate=!0,Fs(b,B,V),b.side=ue):Fs(b,B,V)}this.compile=function(b,B,V=null){V===null&&(V=b),T=ht.get(V),T.init(B),R.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),b!==V&&b.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const G=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const dt=z.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){const pt=dt[xt];Jo(pt,V,z),G.add(pt)}else Jo(dt,V,z),G.add(dt)}),T=R.pop(),G},this.compileAsync=function(b,B,V=null){const G=this.compile(b,B,V);return new Promise(z=>{function dt(){if(G.forEach(function(xt){x.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){z(b);return}setTimeout(dt,10)}ne.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let za=null;function vh(b){za&&za(b)}function jo(){en.stop()}function Qo(){en.start()}const en=new ch;en.setAnimationLoop(vh),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(b){za=b,rt.setAnimationLoop(b),b===null?en.stop():en.start()},rt.addEventListener("sessionstart",jo),rt.addEventListener("sessionend",Qo),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const V=rt.enabled===!0&&rt.isPresenting===!0,G=P!==null&&(O===null||V)&&P.begin(M,O);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(B),B=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,B,O),T=ht.get(b,R.length),T.init(B),R.push(T),Qt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),gt.setFromProjectionMatrix(Qt,bi,B.reversedDepth),bt=this.localClippingEnabled,ot=St.init(this.clippingPlanes,bt),S=it.get(b,A.length),S.init(),A.push(S),rt.enabled===!0&&rt.isPresenting===!0){const xt=M.xr.getDepthSensingMesh();xt!==null&&Ga(xt,B,-1/0,M.sortObjects)}Ga(b,B,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(fe,ie),Wt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Wt&&lt.addToRenderList(S,b),this.info.render.frame++,ot===!0&&St.beginShadows();const z=T.state.shadowsArray;if(Et.render(z,b,B),ot===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&P.hasRenderPass())===!1){const xt=S.opaque,pt=S.transmissive;if(T.setupLights(),B.isArrayCamera){const Mt=B.cameras;if(pt.length>0)for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++){const Rt=Mt[Ct];ec(xt,pt,b,Rt)}Wt&&lt.render(b);for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++){const Rt=Mt[Ct];tc(S,b,Rt,Rt.viewport)}}else pt.length>0&&ec(xt,pt,b,B),Wt&&lt.render(b),tc(S,b,B)}O!==null&&F===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),G&&P.end(M),b.isScene===!0&&b.onAfterRender(M,b,B),vt.resetDefaultState(),X=-1,W=null,R.pop(),R.length>0?(T=R[R.length-1],ot===!0&&St.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Ga(b,B,V,G){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||gt.intersectsSprite(b)){G&&Jt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Qt);const xt=ct.update(b),pt=b.material;pt.visible&&S.push(b,xt,pt,V,Jt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||gt.intersectsObject(b))){const xt=ct.update(b),pt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Jt.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Jt.copy(xt.boundingSphere.center)),Jt.applyMatrix4(b.matrixWorld).applyMatrix4(Qt)),Array.isArray(pt)){const Mt=xt.groups;for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++){const Rt=Mt[Ct],Zt=pt[Rt.materialIndex];Zt&&Zt.visible&&S.push(b,xt,Zt,V,Jt.z,Rt)}}else pt.visible&&S.push(b,xt,pt,V,Jt.z,null)}}const dt=b.children;for(let xt=0,pt=dt.length;xt<pt;xt++)Ga(dt[xt],B,V,G)}function tc(b,B,V,G){const{opaque:z,transmissive:dt,transparent:xt}=b;T.setupLightsView(V),ot===!0&&St.setGlobalState(M.clippingPlanes,V),G&&Tt.viewport(H.copy(G)),z.length>0&&Us(z,B,V),dt.length>0&&Us(dt,B,V),xt.length>0&&Us(xt,B,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ec(b,B,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Zt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new $e(1,1,{generateMipmaps:!0,type:Zt?si:ni,minFilter:pn,samples:_e.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}const dt=T.state.transmissionRenderTarget[G.id],xt=G.viewport||H;dt.setSize(xt.z*M.transmissionResolutionScale,xt.w*M.transmissionResolutionScale);const pt=M.getRenderTarget(),Mt=M.getActiveCubeFace(),Ct=M.getActiveMipmapLevel();M.setRenderTarget(dt),M.getClearColor(at),st=M.getClearAlpha(),st<1&&M.setClearColor(16777215,.5),M.clear(),Wt&&lt.render(V);const Nt=M.toneMapping;M.toneMapping=Ai;const Rt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ot===!0&&St.setGlobalState(M.clippingPlanes,G),Us(b,V,G),U.updateMultisampleRenderTarget(dt),U.updateRenderTargetMipmap(dt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let de=0,we=B.length;de<we;de++){const be=B[de],{object:me,geometry:Pt,material:re,group:ee}=be;if(re.side===ue&&me.layers.test(G.layers)){const Je=re.side;re.side=qe,re.needsUpdate=!0,ic(me,V,G,Pt,re,ee),re.side=Je,re.needsUpdate=!0,Zt=!0}}Zt===!0&&(U.updateMultisampleRenderTarget(dt),U.updateRenderTargetMipmap(dt))}M.setRenderTarget(pt,Mt,Ct),M.setClearColor(at,st),Rt!==void 0&&(G.viewport=Rt),M.toneMapping=Nt}function Us(b,B,V){const G=B.isScene===!0?B.overrideMaterial:null;for(let z=0,dt=b.length;z<dt;z++){const xt=b[z],{object:pt,geometry:Mt,group:Ct}=xt;let Nt=xt.material;Nt.allowOverride===!0&&G!==null&&(Nt=G),pt.layers.test(V.layers)&&ic(pt,B,V,Mt,Nt,Ct)}}function ic(b,B,V,G,z,dt){b.onBeforeRender(M,B,V,G,z,dt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(M,B,V,G,b,dt),z.transparent===!0&&z.side===ue&&z.forceSinglePass===!1?(z.side=qe,z.needsUpdate=!0,M.renderBufferDirect(V,B,G,z,b,dt),z.side=Qi,z.needsUpdate=!0,M.renderBufferDirect(V,B,G,z,b,dt),z.side=ue):M.renderBufferDirect(V,B,G,z,b,dt),b.onAfterRender(M,B,V,G,z,dt)}function Fs(b,B,V){B.isScene!==!0&&(B=pe);const G=x.get(b),z=T.state.lights,dt=T.state.shadowsArray,xt=z.state.version,pt=wt.getParameters(b,z.state,dt,B,V),Mt=wt.getProgramCacheKey(pt);let Ct=G.programs;G.environment=b.isMeshStandardMaterial?B.environment:null,G.fog=B.fog,G.envMap=(b.isMeshStandardMaterial?J:K).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",vi),Ct=new Map,G.programs=Ct);let Nt=Ct.get(Mt);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===xt)return sc(b,pt),Nt}else pt.uniforms=wt.getUniforms(b),b.onBeforeCompile(pt,M),Nt=wt.acquireProgram(pt,Mt),Ct.set(Mt,Nt),G.uniforms=pt.uniforms;const Rt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=St.uniform),sc(b,pt),G.needsLights=yh(b),G.lightsStateVersion=xt,G.needsLights&&(Rt.ambientLightColor.value=z.state.ambient,Rt.lightProbe.value=z.state.probe,Rt.directionalLights.value=z.state.directional,Rt.directionalLightShadows.value=z.state.directionalShadow,Rt.spotLights.value=z.state.spot,Rt.spotLightShadows.value=z.state.spotShadow,Rt.rectAreaLights.value=z.state.rectArea,Rt.ltc_1.value=z.state.rectAreaLTC1,Rt.ltc_2.value=z.state.rectAreaLTC2,Rt.pointLights.value=z.state.point,Rt.pointLightShadows.value=z.state.pointShadow,Rt.hemisphereLights.value=z.state.hemi,Rt.directionalShadowMap.value=z.state.directionalShadowMap,Rt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Rt.spotShadowMap.value=z.state.spotShadowMap,Rt.spotLightMatrix.value=z.state.spotLightMatrix,Rt.spotLightMap.value=z.state.spotLightMap,Rt.pointShadowMap.value=z.state.pointShadowMap,Rt.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function nc(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=_a.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function sc(b,B){const V=x.get(b);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.batchingColor=B.batchingColor,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.instancingMorph=B.instancingMorph,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function xh(b,B,V,G,z){B.isScene!==!0&&(B=pe),U.resetTextureUnits();const dt=B.fog,xt=G.isMeshStandardMaterial?B.environment:null,pt=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Kn,Mt=(G.isMeshStandardMaterial?J:K).get(G.envMap||xt),Ct=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Nt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!V.morphAttributes.position,Zt=!!V.morphAttributes.normal,de=!!V.morphAttributes.color;let we=Ai;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(we=M.toneMapping);const be=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,me=be!==void 0?be.length:0,Pt=x.get(G),re=T.state.lights;if(ot===!0&&(bt===!0||b!==W)){const He=b===W&&G.id===X;St.setState(G,b,He)}let ee=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==re.state.version||Pt.outputColorSpace!==pt||z.isBatchedMesh&&Pt.batching===!1||!z.isBatchedMesh&&Pt.batching===!0||z.isBatchedMesh&&Pt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pt.instancing===!1||!z.isInstancedMesh&&Pt.instancing===!0||z.isSkinnedMesh&&Pt.skinning===!1||!z.isSkinnedMesh&&Pt.skinning===!0||z.isInstancedMesh&&Pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pt.instancingMorph===!1&&z.morphTexture!==null||Pt.envMap!==Mt||G.fog===!0&&Pt.fog!==dt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==St.numPlanes||Pt.numIntersection!==St.numIntersection)||Pt.vertexAlphas!==Ct||Pt.vertexTangents!==Nt||Pt.morphTargets!==Rt||Pt.morphNormals!==Zt||Pt.morphColors!==de||Pt.toneMapping!==we||Pt.morphTargetsCount!==me)&&(ee=!0):(ee=!0,Pt.__version=G.version);let Je=Pt.currentProgram;ee===!0&&(Je=Fs(G,B,z));let yn=!1,je=!1,is=!1;const xe=Je.getUniforms(),Ye=Pt.uniforms;if(Tt.useProgram(Je.program)&&(yn=!0,je=!0,is=!0),G.id!==X&&(X=G.id,je=!0),yn||W!==b){Tt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xe.setValue(L,"projectionMatrix",b.projectionMatrix),xe.setValue(L,"viewMatrix",b.matrixWorldInverse);const Ke=xe.map.cameraPosition;Ke!==void 0&&Ke.setValue(L,Kt.setFromMatrixPosition(b.matrixWorld)),_e.logarithmicDepthBuffer&&xe.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),W!==b&&(W=b,je=!0,is=!0)}if(Pt.needsLights&&(re.state.directionalShadowMap.length>0&&xe.setValue(L,"directionalShadowMap",re.state.directionalShadowMap,U),re.state.spotShadowMap.length>0&&xe.setValue(L,"spotShadowMap",re.state.spotShadowMap,U),re.state.pointShadowMap.length>0&&xe.setValue(L,"pointShadowMap",re.state.pointShadowMap,U)),z.isSkinnedMesh){xe.setOptional(L,z,"bindMatrix"),xe.setOptional(L,z,"bindMatrixInverse");const He=z.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),xe.setValue(L,"boneTexture",He.boneTexture,U))}z.isBatchedMesh&&(xe.setOptional(L,z,"batchingTexture"),xe.setValue(L,"batchingTexture",z._matricesTexture,U),xe.setOptional(L,z,"batchingIdTexture"),xe.setValue(L,"batchingIdTexture",z._indirectTexture,U),xe.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&xe.setValue(L,"batchingColorTexture",z._colorsTexture,U));const ai=V.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Xt.update(z,V,Je),(je||Pt.receiveShadow!==z.receiveShadow)&&(Pt.receiveShadow=z.receiveShadow,xe.setValue(L,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ye.envMap.value=Mt,Ye.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&B.environment!==null&&(Ye.envMapIntensity.value=B.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=Qg()),je&&(xe.setValue(L,"toneMappingExposure",M.toneMappingExposure),Pt.needsLights&&Mh(Ye,is),dt&&G.fog===!0&&Ft.refreshFogUniforms(Ye,dt),Ft.refreshMaterialUniforms(Ye,G,It,Bt,T.state.transmissionRenderTarget[b.id]),_a.upload(L,nc(Pt),Ye,U)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_a.upload(L,nc(Pt),Ye,U),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(L,"center",z.center),xe.setValue(L,"modelViewMatrix",z.modelViewMatrix),xe.setValue(L,"normalMatrix",z.normalMatrix),xe.setValue(L,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const He=G.uniformsGroups;for(let Ke=0,Va=He.length;Ke<Va;Ke++){const nn=He[Ke];tt.update(nn,Je),tt.bind(nn,Je)}}return Je}function Mh(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function yh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,B,V){const G=x.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=B,x.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const V=x.get(b);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0};const Sh=L.createFramebuffer();this.setRenderTarget=function(b,B=0,V=0){O=b,I=B,F=V;let G=null,z=!1,dt=!1;if(b){const pt=x.get(b);if(pt.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(L.FRAMEBUFFER,pt.__webglFramebuffer),H.copy(b.viewport),k.copy(b.scissor),$=b.scissorTest,Tt.viewport(H),Tt.scissor(k),Tt.setScissorTest($),X=-1;return}else if(pt.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(pt.__hasExternalTextures)U.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Nt=b.depthTexture;if(pt.__boundDepthTexture!==Nt){if(Nt!==null&&x.has(Nt)&&(b.width!==Nt.image.width||b.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const Mt=b.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(dt=!0);const Ct=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ct[B])?G=Ct[B][V]:G=Ct[B],z=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?G=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Ct)?G=Ct[V]:G=Ct,H.copy(b.viewport),k.copy(b.scissor),$=b.scissorTest}else H.copy(Y).multiplyScalar(It).floor(),k.copy(j).multiplyScalar(It).floor(),$=_t;if(V!==0&&(G=Sh),Tt.bindFramebuffer(L.FRAMEBUFFER,G)&&Tt.drawBuffers(b,G),Tt.viewport(H),Tt.scissor(k),Tt.setScissorTest($),z){const pt=x.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,pt.__webglTexture,V)}else if(dt){const pt=B;for(let Mt=0;Mt<b.textures.length;Mt++){const Ct=x.get(b.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,Ct.__webglTexture,V,pt)}}else if(b!==null&&V!==0){const pt=x.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,V)}X=-1},this.readRenderTargetPixels=function(b,B,V,G,z,dt,xt,pt=0){if(!(b&&b.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){Tt.bindFramebuffer(L.FRAMEBUFFER,Mt);try{const Ct=b.textures[pt],Nt=Ct.format,Rt=Ct.type;if(!_e.textureFormatReadable(Nt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Rt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-G&&V>=0&&V<=b.height-z&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pt),L.readPixels(B,V,G,z,nt.convert(Nt),nt.convert(Rt),dt))}finally{const Ct=O!==null?x.get(O).__webglFramebuffer:null;Tt.bindFramebuffer(L.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(b,B,V,G,z,dt,xt,pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(B>=0&&B<=b.width-G&&V>=0&&V<=b.height-z){Tt.bindFramebuffer(L.FRAMEBUFFER,Mt);const Ct=b.textures[pt],Nt=Ct.format,Rt=Ct.type;if(!_e.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pt),L.readPixels(B,V,G,z,nt.convert(Nt),nt.convert(Rt),0);const de=O!==null?x.get(O).__webglFramebuffer:null;Tt.bindFramebuffer(L.FRAMEBUFFER,de);const we=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ru(L,we,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.deleteBuffer(Zt),L.deleteSync(we),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,V=0){const G=Math.pow(2,-V),z=Math.floor(b.image.width*G),dt=Math.floor(b.image.height*G),xt=B!==null?B.x:0,pt=B!==null?B.y:0;U.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,xt,pt,z,dt),Tt.unbindTexture()};const wh=L.createFramebuffer(),bh=L.createFramebuffer();this.copyTextureToTexture=function(b,B,V=null,G=null,z=0,dt=null){dt===null&&(z!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=z,z=0):dt=0);let xt,pt,Mt,Ct,Nt,Rt,Zt,de,we;const be=b.isCompressedTexture?b.mipmaps[dt]:b.image;if(V!==null)xt=V.max.x-V.min.x,pt=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,Ct=V.min.x,Nt=V.min.y,Rt=V.isBox3?V.min.z:0;else{const ai=Math.pow(2,-z);xt=Math.floor(be.width*ai),pt=Math.floor(be.height*ai),b.isDataArrayTexture?Mt=be.depth:b.isData3DTexture?Mt=Math.floor(be.depth*ai):Mt=1,Ct=0,Nt=0,Rt=0}G!==null?(Zt=G.x,de=G.y,we=G.z):(Zt=0,de=0,we=0);const me=nt.convert(B.format),Pt=nt.convert(B.type);let re;B.isData3DTexture?(U.setTexture3D(B,0),re=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),re=L.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),re=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const ee=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),yn=L.getParameter(L.UNPACK_SKIP_PIXELS),je=L.getParameter(L.UNPACK_SKIP_ROWS),is=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,be.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,be.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rt);const xe=b.isDataArrayTexture||b.isData3DTexture,Ye=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const ai=x.get(b),He=x.get(B),Ke=x.get(ai.__renderTarget),Va=x.get(He.__renderTarget);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Va.__webglFramebuffer);for(let nn=0;nn<Mt;nn++)xe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(b).__webglTexture,z,Rt+nn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(B).__webglTexture,dt,we+nn)),L.blitFramebuffer(Ct,Nt,xt,pt,Zt,de,xt,pt,L.DEPTH_BUFFER_BIT,L.NEAREST);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||x.has(b)){const ai=x.get(b),He=x.get(B);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,wh),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,bh);for(let Ke=0;Ke<Mt;Ke++)xe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ai.__webglTexture,z,Rt+Ke):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ai.__webglTexture,z),Ye?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,He.__webglTexture,dt,we+Ke):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,He.__webglTexture,dt),z!==0?L.blitFramebuffer(Ct,Nt,xt,pt,Zt,de,xt,pt,L.COLOR_BUFFER_BIT,L.NEAREST):Ye?L.copyTexSubImage3D(re,dt,Zt,de,we+Ke,Ct,Nt,xt,pt):L.copyTexSubImage2D(re,dt,Zt,de,Ct,Nt,xt,pt);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ye?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(re,dt,Zt,de,we,xt,pt,Mt,me,Pt,be.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(re,dt,Zt,de,we,xt,pt,Mt,me,be.data):L.texSubImage3D(re,dt,Zt,de,we,xt,pt,Mt,me,Pt,be):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,dt,Zt,de,xt,pt,me,Pt,be.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,dt,Zt,de,be.width,be.height,me,be.data):L.texSubImage2D(L.TEXTURE_2D,dt,Zt,de,xt,pt,me,Pt,be);L.pixelStorei(L.UNPACK_ROW_LENGTH,ee),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yn),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,is),dt===0&&B.generateMipmaps&&L.generateMipmap(re),Tt.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),Tt.unbindTexture()},this.resetState=function(){I=0,F=0,O=null,Tt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const e_=new Ba(-1,1,1,-1,0,1);class i_ extends ye{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const n_=new i_;class fh{constructor(t){this._mesh=new D(n_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,e_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ph extends Ls{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ta.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new fh(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class dl extends Ls{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class s_ extends Ls{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class a_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new et);this._width=i.width,this._height=i.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:si}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ph(va),this.copyPass.material.blending=Ei,this.clock=new rh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}dl!==void 0&&(r instanceof dl?i=!0:r instanceof s_&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class r_ extends Ls{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ut}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=n}}const o_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Jn extends Ls{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new Ut(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(s,r,{type:si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new $e(s,r,{type:si});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new $e(s,r,{type:si});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}const o=o_;this.highPassUniforms=Ta.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new et(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ta.clone(va.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:va.vertexShader,fragmentShader:va.fragmentShader,premultipliedAlpha:!0,blending:oi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ut,this._oldClearAlpha=1,this._basic=new le,this._fsQuad=new fh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new et(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Jn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Jn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new Re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Jn.BlurDirectionX=new et(1,0);Jn.BlurDirectionY=new et(0,1);class c_{constructor(){this.remnant=0,this.heldRemnant=0,this.deathCount=0,this.deathLessons={},this.infusions={strength:0,vitality:0,stamina:0,spirit:0},this.MAX_TOTAL_DEPTH=20,this.MAX_TRACK_DEPTH=5,this.bonfirePosition=new E(0,0,5),this.maxHealth=100,this.maxStamina=100,this.maxPosture=100,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.isDead=!1,this.checkpoint=new E(0,0,5),this.deathScreenEl=document.getElementById("death-screen"),this.player=null,this.enemyManager=null,this.bloodstain=null,this.bloodstainMesh=null,this.staminaRegenDelay=.5,this.staminaRegenRate=25,this.staminaRegenTimer=0,this.postureRegenDelay=1,this.postureRegenRate=15,this.postureRegenTimer=0,this.audioManager=null,this.hitstopActive=!1,this.hitstopDuration=0,this.hitstopTimer=0,this.hud=null,this.cameraController=null}triggerHitstop(t=.04){this.hitstopActive=!0,this.hitstopDuration=t,this.hitstopTimer=0}hitstopLight(){this.triggerHitstop(.035)}hitstopHeavy(){this.triggerHitstop(.06)}isInHitstop(){return this.hitstopActive}updateHitstop(t){return this.hitstopActive?(this.hitstopTimer+=t,this.hitstopTimer>=this.hitstopDuration&&(this.hitstopActive=!1,this.hitstopTimer=0),!0):!1}update(t){this.isDead||(this.staminaRegenTimer+=t,this.staminaRegenTimer>=this.staminaRegenDelay&&this.stamina<this.maxStamina&&(this.stamina=Math.min(this.maxStamina,this.stamina+this.staminaRegenRate*t)),this.postureRegenTimer+=t,this.postureRegenTimer>=this.postureRegenDelay&&this.posture>0&&(this.posture=Math.max(0,this.posture-this.postureRegenRate*t)))}canUseStamina(t){const e=this.stamina>=t;return!e&&this.hud&&(this.hud.flashStaminaDepleted(),this.audioManager&&this.player&&this.audioManager.play("staminaDepleted",{position:this.player.mesh.position,volume:.4})),e}useStamina(t){this.stamina=Math.max(0,this.stamina-t),this.staminaRegenTimer=0,this.stamina<15&&this.hud&&this.hud.flashStaminaDepleted()}takeDamage(t,e="physical",i=0,n=!1){if(this.isDead)return;const s=this.deathLessons[e]||0;let r=Math.floor(t*(1-s));if(n){const o=r*.5;if(this.canUseStamina(o))this.useStamina(o),r=Math.floor(r*.2),i*=.5;else return this.stamina=0,this.posture=this.maxPosture,"guard_broken"}return this.health-=r,this.posture=Math.min(this.maxPosture,this.posture+i),this.postureRegenTimer=0,this.audioManager&&this.player&&this.audioManager.play("playerDamage",{position:this.player.mesh.position,volume:.7}),this.health<=0?(this.die(e),"died"):this.posture>=this.maxPosture?(this.audioManager&&this.player&&this.audioManager.play("postureBreak",{position:this.player.mesh.position,volume:.8}),"posture_broken"):"hit"}die(t="unknown"){this.isDead=!0,this.deathCount++,this.health=0,this.audioManager&&this.audioManager.play("death",{volume:.8});const e=this.player?this.player.mesh.position.clone():this.checkpoint.clone();if(this.particleManager&&this.player&&this.particleManager.spawnPlayerDeathEffect(e,this.camera),this.bloodstainMesh&&this.scene&&(this.scene.remove(this.bloodstainMesh),this.bloodstainMesh=null),this.remnant>0&&this.scene){this.heldRemnant=this.remnant,this.remnant=0,this.bloodstain=e.clone(),this.bloodstain.y=.05;const i=new Ti(.5,16),n=new le({color:11154227,transparent:!0,opacity:.8,side:ue});this.bloodstainMesh=new D(i,n),this.bloodstainMesh.rotation.x=-Math.PI/2,this.bloodstainMesh.position.copy(this.bloodstain),this.scene.add(this.bloodstainMesh),console.log(`[REMNANT] Dropped ${this.heldRemnant} remnant at bloodstain`)}else this.heldRemnant=0,this.bloodstain=null;this.deathLessons[t]||(this.deathLessons[t]=0),this.deathLessons[t]=Math.min(.25,this.deathLessons[t]+.005),this.deathScreenEl&&this.deathScreenEl.classList.add("visible"),setTimeout(()=>this.respawn(),3e3)}respawn(){this.isDead=!1,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.player&&(this.player.resetPosition(),console.log("[RESPAWN] Player reset to checkpoint")),this.enemyManager&&this.enemyManager.resetAll(),this.deathScreenEl&&this.deathScreenEl.classList.remove("visible")}setCheckpoint(t){this.checkpoint.copy(t)}setEntities(t,e,i,n=null){this.player=t,this.enemyManager=e,this.scene=i,this.camera=n}addRemnant(t){this.remnant+=t}collectBloodstain(){return!this.bloodstain||!this.player?!1:this.player.mesh.position.distanceTo(this.bloodstain)<2?(this.remnant+=this.heldRemnant,console.log(`[REMNANT] Recovered ${this.heldRemnant} remnant from bloodstain!`),this.audioManager&&this.audioManager.play("itemPickup",{volume:.6}),this.heldRemnant=0,this.bloodstainMesh&&this.scene&&this.scene.remove(this.bloodstainMesh),this.bloodstain=null,this.bloodstainMesh=null,!0):!1}getTotalDepth(){return this.infusions.bone+this.infusions.blood+this.infusions.stone}canInfuse(t){return!(!this.infusions.hasOwnProperty(t)||this.infusions[t]>=this.MAX_TRACK_DEPTH||this.getTotalDepth()>=this.MAX_TOTAL_DEPTH)}getInfusionCost(t,e){return 100*e*e}infuse(t){if(!this.canInfuse(t))return!1;const e=this.infusions[t]+1,i=this.getInfusionCost(t,e);return this.remnant<i?!1:(this.remnant-=i,this.infusions[t]=e,this.audioManager&&this.audioManager.play("menuConfirm",{volume:.5}),!0)}getInfusionBonuses(){return{damageMult:1+this.infusions.strength*.1,bonusHealth:this.infusions.vitality*20,bonusStamina:this.infusions.stamina*15,staminaRegenMult:1+this.infusions.stamina*.1,postureResist:this.infusions.spirit*.05,postureRegenMult:1+this.infusions.spirit*.15}}applyInfusionBonuses(){const t=this.getInfusionBonuses();this.maxHealth=100+t.bonusHealth,this.maxStamina=100+t.bonusStamina,this.isDead||(this.health=Math.min(this.health,this.maxHealth),this.stamina=Math.min(this.stamina,this.maxStamina))}isNearBonfire(){return this.player?this.player.mesh.position.distanceTo(this.bonfirePosition)<3:!1}getTrackInfo(t){const e=this.infusions[t]||0,i=e+1,n=i<=this.MAX_TRACK_DEPTH?this.getInfusionCost(t,i):null,s=n!==null&&this.remnant>=n,r=e>=this.MAX_TRACK_DEPTH,o={strength:{name:"Strength",desc:"+10% damage per level",bonus:`+${e*10}% damage`},vitality:{name:"Vitality",desc:"+20 max HP per level",bonus:`+${e*20} HP`},stamina:{name:"Stamina",desc:"+15 max stamina, +10% regen per level",bonus:`+${e*15} stamina`},spirit:{name:"Spirit",desc:"+5% posture resist, +15% posture regen per level",bonus:`+${e*5}% resist`}};return{level:e,nextLevel:i,cost:n,canAfford:s,maxed:r,...o[t]}}}const zt={IDLE:"idle",MOVING:"moving",DODGING:"dodging",ATTACKING:"attacking",HEAVY_ATTACKING:"heavy_attacking",BLOCKING:"blocking",STAGGERED:"staggered",DEAD:"dead"},Mi={dodge:20,lightAttack:15,heavyAttack:30},ze={dodgeDuration:.42,dodgeIframes:.28,lightAttackDuration:.38,heavyAttackDuration:.65,lightHitStart:.08,lightHitEnd:.22,heavyHitStart:.18,heavyHitEnd:.38,staggerDuration:.7,comboWindow:.2,inputBufferWindow:.15},fs={lightArc:Math.PI*.65,heavyArc:Math.PI*.85,lightRange:1.8,heavyRange:2.2,verticalTolerance:1.5},l_={idle:["Idle","idle","IDLE"],walk:["Walking","walk","Walk","WALK"],run:["Running","run","Run","RUN"],attack:["Punch","Attack","attack","Slash"],dodge:["Jump","Dodge","dodge","Roll"],death:["Death","death","Die","DEATH"],hit:["No","Hit","hit","Stagger"],block:["Standing","Block","block","Guard"]};class h_{constructor(t,e,i){this.scene=t,this.gm=e,this.input=i,this.cameraController=null,this.state=zt.IDLE,this.stateTimer=0,this.isInvincible=!1,this.attackCombo=0,this.hitThisSwing=!1,this.playedSwingWhoosh=!1,this.inputBuffer={dodge:!1,lightAttack:!1,heavyAttack:!1,bufferTime:0},this.lastGroundedTime=0,this.timeSinceGrounded=0,this.velocity=new E,this.moveSpeed=6,this.dodgeSpeed=14,this.gravity=-30,this.grounded=!0,this.currentMoveVelocity=new E,this.moveAcceleration=35,this.moveDeceleration=25,this.dodgeGhostMeshes=[],this.lastGhostSpawnTime=0,this.ghostSpawnInterval=.05,this.animationBlend=0,this.animationBlendSpeed=12,this.prevSwordPos=new E(.45,1.2,0),this.prevSwordRotZ=0,this.prevSwordRotX=0,this.targetSwordPos=new E(.45,1.2,0),this.targetSwordRotZ=0,this.targetSwordRotX=0,this.bodyTilt=0,this.bodyTwist=0,this.walkBobPhase=0,this.lastFootstepPhase=0,this.footstepCooldown=0,this.moveDir=new E,this.dodgeDir=new E,this.facingAngle=0,this.mixer=null,this.actions=new Map,this.currentAction=null,this.modelLoaded=!1,this.mesh=new jt,this.mesh.position.set(0,0,5),this._createFallbackMesh(),this.attackRange=2,this.lightDamage=15,this.heavyDamage=35,this.lightPostureDmg=10,this.heavyPostureDmg=25,t.add(this.mesh)}async _loadGLTFModel(){try{const t=await AssetManager.loadModel("./assets/models/robot_expressive.glb",{scale:1});this._removeFallbackMesh(),this.model=t.scene,this.model.scale.set(.6,.6,.6),this.mesh.add(this.model),this.mixer=new oh(this.model),t.animations.forEach(e=>{const i=this.mixer.clipAction(e);this.actions.set(e.name,i),this.actions.set(e.name.toLowerCase(),i),console.log(`[Player] Animation loaded: ${e.name}`)}),this._playAnimation("idle",{loop:!0}),this.modelLoaded=!0,console.log("[Player] GLTF model loaded successfully")}catch(t){console.warn("[Player] Failed to load GLTF model, using fallback:",t)}}_playAnimation(t,e={}){if(!this.mixer||this.actions.size===0)return;const i=l_[t]||[t];let n=null;for(const s of i)if(n=this.actions.get(s)||this.actions.get(s.toLowerCase()),n)break;if(n)return this.currentAction===n&&n.isRunning()||(n.reset(),n.setLoop(e.loop?Do:Io),n.clampWhenFinished=!e.loop,e.timeScale&&(n.timeScale=e.timeScale),this.currentAction&&this.currentAction!==n&&n.crossFadeFrom(this.currentAction,.2,!0),n.play(),this.currentAction=n),n}_createFallbackMesh(){const t=new Q({color:5921384,roughness:.35,metalness:.85}),e=new Q({color:2763317,roughness:.5,metalness:.7});new Q({color:13412949,roughness:.3,metalness:.9,emissive:3351040,emissiveIntensity:.2});const i=new Q({color:1709344,roughness:.9,metalness:0,side:ue});this.fallbackGroup=new jt;const n=new Ne(.35,.6,8,16);this.body=new D(n,t),this.body.position.y=1.1,this.body.castShadow=!0,this.fallbackGroup.add(this.body);const s=new yt(.5,.5,.25),r=new D(s,e);r.position.set(0,1.15,.18),r.castShadow=!0,this.fallbackGroup.add(r);const o=new qt(.22,16,12),c=new D(o,t);c.position.y=1.7,c.scale.set(1,1.1,1),c.castShadow=!0,this.fallbackGroup.add(c);const l=new yt(.2,.04,.12),h=new Q({color:6737151,emissive:4491468,emissiveIntensity:3});this.visor=new D(l,h),this.visor.position.set(0,1.68,.25),this.fallbackGroup.add(this.visor);const u=new qt(.15,8,6),d=new D(u,t);d.position.set(-.4,1.4,0),d.scale.set(1.2,.8,1),this.fallbackGroup.add(d);const f=d.clone();f.position.set(.4,1.4,0),this.fallbackGroup.add(f);const g=new Ne(.08,.4,4,8),v=new D(g,e);v.position.set(-.45,1,0),this.fallbackGroup.add(v);const m=v.clone();m.position.set(.45,1,0),this.fallbackGroup.add(m);const p=new Ne(.1,.5,4,8),_=new D(p,e);_.position.set(-.15,.4,0),this.fallbackGroup.add(_);const y=_.clone();y.position.set(.15,.4,0),this.fallbackGroup.add(y);const S=new Ze(.6,1,4,8);this.cape=new D(S,i),this.cape.position.set(0,1,-.3),this.cape.rotation.x=.2,this.fallbackGroup.add(this.cape),this._createSword(),this.fallbackGroup.add(this.sword),this.mesh.add(this.fallbackGroup)}_createSword(){const t=new Q({color:13421789,metalness:.95,roughness:.1}),e=new Q({color:13412949,roughness:.3,metalness:.9,emissive:3351040,emissiveIntensity:.2}),i=new Q({color:8956671,emissive:4482730,emissiveIntensity:.5});this.sword=new jt;const n=new yt(.06,.9,.02),s=new D(n,t);s.position.y=.45,s.castShadow=!0,this.sword.add(s);const r=new yt(.01,.85,.025),o=new D(r,i);o.position.set(.035,.45,0),this.sword.add(o);const c=new yt(.25,.04,.06),l=new D(c,e);l.position.y=0,this.sword.add(l);const h=new se(.025,.025,.2,8),u=new Q({color:3811866,roughness:.8}),d=new D(h,u);d.position.y=-.12,this.sword.add(d);const f=new qt(.04,8,8),g=new D(f,e);g.position.y=-.24,this.sword.add(g),this.sword.position.set(.5,1.1,0),this.sword.rotation.z=-.2}_removeFallbackMesh(){this.fallbackGroup&&(this.mesh.remove(this.fallbackGroup),this.fallbackGroup.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this.fallbackGroup=null,this.sword&&(this._createSword(),this.mesh.add(this.sword)))}update(t){if(this.gm.isDead){this.state=zt.DEAD,this.modelLoaded&&this._playAnimation("death",{loop:!1});return}switch(this.mixer&&this.mixer.update(t),this.stateTimer+=t,this._updateInputBuffer(t),this.grounded?(this.lastGroundedTime=performance.now(),this.timeSinceGrounded=0):this.timeSinceGrounded=(performance.now()-this.lastGroundedTime)/1e3,this.state){case zt.IDLE:case zt.MOVING:this._processMovement(t),this._processCombatInput();break;case zt.DODGING:this._processDodge(t);break;case zt.ATTACKING:case zt.HEAVY_ATTACKING:this._processAttack(t);break;case zt.BLOCKING:this._processBlock(t);break;case zt.STAGGERED:this.stateTimer>=ze.staggerDuration&&this._changeState(zt.IDLE);break}this.mesh.position.y>0&&(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.velocity.y=0,this.grounded=!0)),this._animateSword(t),this._updateRibbonTrail()}_getSwordWorldPositions(){this.mesh.updateMatrixWorld(!0),this.sword.updateMatrixWorld(!0);const t=new E(0,.9,0),e=new E(0,0,0),i=t.clone().applyMatrix4(this.sword.matrixWorld),n=e.clone().applyMatrix4(this.sword.matrixWorld);return{tip:i,base:n}}_updateRibbonTrail(){if(!this.gm.particleManager||this.state!==zt.ATTACKING&&this.state!==zt.HEAVY_ATTACKING)return;const{tip:t,base:e}=this._getSwordWorldPositions();this.gm.particleManager.updateRibbonTrail(t,e)}_processMovement(t){const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const i=this._getCameraYaw(),n=new E(-Math.sin(i),0,-Math.cos(i)),s=new E(Math.cos(i),0,-Math.sin(i));this.moveDir.set(0,0,0).addScaledVector(n,-e.z).addScaledVector(s,e.x).normalize();const r=this.moveDir.clone().multiplyScalar(this.moveSpeed);if(this.currentMoveVelocity.lerp(r,this.moveAcceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this.facingAngle=Math.atan2(this.moveDir.x,this.moveDir.z),this.mesh.rotation.y=ge.lerp(this.mesh.rotation.y,this.facingAngle,10*t),this.state!==zt.MOVING&&(this._changeState(zt.MOVING),this.modelLoaded)){const o=this.currentMoveVelocity.length();this._playAnimation(o>4?"run":"walk",{loop:!0})}}else this.currentMoveVelocity.length()>.01?(this.currentMoveVelocity.lerp(new E(0,0,0),this.moveDeceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t)):this.currentMoveVelocity.set(0,0,0),this.state===zt.MOVING&&(this._changeState(zt.IDLE),this.modelLoaded&&this._playAnimation("idle",{loop:!0}))}_processCombatInput(){if(this.input.lockOn&&this._toggleLockOn(),!this._processBufferedInput()){if(this.input.dodge&&this.gm.canUseStamina(Mi.dodge)){this._startDodge();return}if(this.input.lightAttack&&this.gm.canUseStamina(Mi.lightAttack)){this._startAttack(!1);return}if(this.input.heavyAttack&&this.gm.canUseStamina(Mi.heavyAttack)){this._startAttack(!0);return}this.input.block&&(this._changeState(zt.BLOCKING),this.modelLoaded&&this._playAnimation("block",{loop:!0}))}}_updateInputBuffer(t){this.inputBuffer.bufferTime>0&&(this.inputBuffer.bufferTime-=t,this.inputBuffer.bufferTime<=0&&this._clearInputBuffer()),(this.state===zt.ATTACKING||this.state===zt.HEAVY_ATTACKING||this.state===zt.DODGING||this.state===zt.STAGGERED)&&(this.input.dodge&&(this.inputBuffer.dodge=!0,this.inputBuffer.bufferTime=ze.inputBufferWindow),this.input.lightAttack&&(this.inputBuffer.lightAttack=!0,this.inputBuffer.bufferTime=ze.inputBufferWindow),this.input.heavyAttack&&(this.inputBuffer.heavyAttack=!0,this.inputBuffer.bufferTime=ze.inputBufferWindow))}_processBufferedInput(){return this.inputBuffer.bufferTime<=0?!1:this.inputBuffer.dodge&&this.gm.canUseStamina(Mi.dodge)?(this._clearInputBuffer(),this._startDodge(),!0):this.inputBuffer.heavyAttack&&this.gm.canUseStamina(Mi.heavyAttack)?(this._clearInputBuffer(),this._startAttack(!0),!0):this.inputBuffer.lightAttack&&this.gm.canUseStamina(Mi.lightAttack)?(this._clearInputBuffer(),this._startAttack(!1),!0):!1}_clearInputBuffer(){this.inputBuffer.dodge=!1,this.inputBuffer.lightAttack=!1,this.inputBuffer.heavyAttack=!1,this.inputBuffer.bufferTime=0}_toggleLockOn(){if(!this.cameraController||!this.gm.enemyManager)return;const e=this.gm.enemyManager.enemies.filter(o=>!o.isDead);if(this.gm.enemyManager.boss&&!this.gm.enemyManager.boss.isDead&&e.push(this.gm.enemyManager.boss),e.length===0){this.cameraController.clearLockOn();return}const i=20,n=this.mesh.position,s=e.map(o=>({enemy:o,dist:n.distanceTo(o.mesh.position)})).filter(o=>o.dist<=i).sort((o,c)=>o.dist-c.dist);if(s.length===0){this.cameraController.clearLockOn();return}const r=this.cameraController.lockOnTarget;if(r&&!r.isDead){const o=s.findIndex(c=>c.enemy===r);if(o!==-1&&s.length>1){const c=(o+1)%s.length;this.cameraController.setLockOnTarget(s[c].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.3})}else this.cameraController.clearLockOn(),this.gm.audioManager&&this.gm.audioManager.play("menuBack",{volume:.3})}else this.cameraController.setLockOnTarget(s[0].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.4})}_startDodge(){this.gm.useStamina(Mi.dodge),this.gm.audioManager&&this.gm.audioManager.play("dodge",{position:this.mesh.position,volume:.5});const t=this.input.getMovementVector();if(t.x!==0||t.z!==0){const e=this._getCameraYaw(),i=new E(-Math.sin(e),0,-Math.cos(e)),n=new E(-Math.cos(e),0,Math.sin(e));this.dodgeDir.set(0,0,0).addScaledVector(i,-t.z).addScaledVector(n,t.x).normalize()}else this.dodgeDir.set(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.isInvincible=!0,this.lastGhostSpawnTime=0,this._flashDodgeStart(),this._changeState(zt.DODGING),this.modelLoaded&&this._playAnimation("dodge",{loop:!1,timeScale:2})}_flashDodgeStart(){if(this.visor){const t=this.visor.material.emissive.getHex();this.visor.material.emissive.setHex(65535),this.visor.material.emissiveIntensity=8,this.body&&this.body.material.emissive.setHex(17493),setTimeout(()=>{this.visor&&(this.visor.material.emissive.setHex(t),this.visor.material.emissiveIntensity=3),this.body&&this.body.material.emissive.setHex(0)},100)}}_spawnDodgeGhost(){const t=new le({color:4491519,transparent:!0,opacity:.4,depthWrite:!1}),e=new jt;if(this.modelLoaded&&this.model){const i=this.model.clone();i.traverse(n=>{n.isMesh&&(n.material=t)}),e.add(i)}else{const i=new Ne(.35,.6,4,8),n=new D(i,t);n.position.y=1.1,e.add(n);const s=new qt(.22,8,6),r=new D(s,t);r.position.y=1.7,e.add(r)}e.position.copy(this.mesh.position),e.rotation.y=this.mesh.rotation.y,this.scene.add(e),this.dodgeGhostMeshes.push({mesh:e,material:t,spawnTime:Date.now(),lifetime:200})}_updateDodgeGhosts(){const t=Date.now();for(let e=this.dodgeGhostMeshes.length-1;e>=0;e--){const i=this.dodgeGhostMeshes[e],n=t-i.spawnTime;if(n>i.lifetime)this.scene.remove(i.mesh),i.mesh.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),this.dodgeGhostMeshes.splice(e,1);else{const s=n/i.lifetime;i.material.opacity=.4*(1-s)}}}_processDodge(t){const e=this.stateTimer/ze.dodgeDuration,i=Math.sin(e*Math.PI);this.mesh.position.addScaledVector(this.dodgeDir,this.dodgeSpeed*i*t),this.lastGhostSpawnTime+=t,this.isInvincible&&this.lastGhostSpawnTime>=this.ghostSpawnInterval&&(this._spawnDodgeGhost(),this.lastGhostSpawnTime=0),this._updateDodgeGhosts(),this.stateTimer>=ze.dodgeIframes&&this.isInvincible&&(this.isInvincible=!1,this._flashDodgeEnd()),this.stateTimer>=ze.dodgeDuration&&(this.isInvincible=!1,this.gm.audioManager&&this.gm.audioManager.play("footstepStone",{position:this.mesh.position.clone(),volume:.45,pitch:.85,variation:.05}),this._changeState(zt.IDLE),this.modelLoaded&&this._playAnimation("idle",{loop:!0})),this.body&&(this.body.position.y=1.1-i*.4,this.isInvincible&&this.body.material.emissive.setHex(8755))}_flashDodgeEnd(){this.body&&(this.body.material.emissive.setHex(2236962),setTimeout(()=>{this.body&&this.body.material.emissive.setHex(0)},50))}_startAttack(t){const e=t?Mi.heavyAttack:Mi.lightAttack;this.gm.useStamina(e),this.hitThisSwing=!1,this.playedSwingWhoosh=!1;const i=this._getCameraYaw();if(this.facingAngle=i,this.mesh.rotation.y=i,this.gm.particleManager){const n=new E(Math.sin(i),0,Math.cos(i));this.gm.particleManager.spawnSlashTrail(this.mesh.position.clone(),n,t),this.gm.particleManager.startRibbonTrail(t)}this._changeState(t?zt.HEAVY_ATTACKING:zt.ATTACKING),this.modelLoaded&&this._playAnimation("attack",{loop:!1,timeScale:t?.7:1.2})}_processAttack(t){const e=this.state===zt.HEAVY_ATTACKING,i=e?ze.heavyAttackDuration:ze.lightAttackDuration,n=e?ze.heavyHitStart:ze.lightHitStart,s=e?ze.heavyHitEnd:ze.lightHitEnd;if(!this.playedSwingWhoosh&&this.stateTimer>=n*.9&&(this.playedSwingWhoosh=!0,this.gm.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position.clone(),volume:e?.55:.4,pitch:e?.75:1.1+this.attackCombo*.1,variation:.05})),this.stateTimer>=n&&this.stateTimer<s&&!this.hitThisSwing&&this._checkHit(e),!e&&this.stateTimer>i-ze.comboWindow&&this.stateTimer<i&&this.input.lightAttack&&this.gm.canUseStamina(Mi.lightAttack)){this.attackCombo=(this.attackCombo+1)%3,this._startAttack(!1);return}const r=new E(Math.sin(this.facingAngle),0,Math.cos(this.facingAngle)),o=e?3:2;this.stateTimer<s&&this.mesh.position.addScaledVector(r,o*t),this.stateTimer>=i&&(this.attackCombo=0,this._changeState(zt.IDLE),this.modelLoaded&&this._playAnimation("idle",{loop:!0}))}_checkHit(t){const e=t?fs.heavyArc:fs.lightArc,i=t?fs.heavyRange:fs.lightRange,n=new E(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(.8);this.activeAttack={position:this.mesh.position.clone().add(n),range:i,arc:e,facingAngle:this.facingAngle,verticalTolerance:fs.verticalTolerance,damage:t?this.heavyDamage:this.lightDamage,postureDmg:t?this.heavyPostureDmg:this.lightPostureDmg,isHeavy:t,knockbackForce:t?3.5:1.8,knockbackDir:new E(Math.sin(this.facingAngle),0,Math.cos(this.facingAngle))}}_processBlock(t){this.input.block||(this._changeState(zt.IDLE),this.modelLoaded&&this._playAnimation("idle",{loop:!0}));const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const i=this._getCameraYaw(),n=new E(-Math.sin(i),0,-Math.cos(i)),s=new E(-Math.cos(i),0,Math.sin(i)),r=new E().addScaledVector(n,-e.z).addScaledVector(s,e.x).normalize();this.mesh.position.addScaledVector(r,this.moveSpeed*.3*t)}}_animateSword(t){const e=this.stateTimer;switch(this.animationBlend=Math.min(1,this.animationBlend+this.animationBlendSpeed*t),this.state){case zt.ATTACKING:{const n=ze.lightAttackDuration,s=.15;if(e<n*s){const r=e/(n*s),o=r*r;this.targetSwordRotZ=.3*o,this.targetSwordRotX=-.3*o,this.targetSwordPos.set(.5+o*.1,1.25,-.1*o),this.bodyTilt=ge.lerp(this.bodyTilt,-.08,8*t)}else{const r=(e-n*s)/(n*(1-s)),o=Math.sin(r*Math.PI),c=this.attackCombo*.3;this.targetSwordRotZ=-o*1.5-c,this.targetSwordRotX=o*.5+c*.5,this.targetSwordPos.set(.45+o*.3,1.2+o*.3,o*.5),this.bodyTilt=ge.lerp(this.bodyTilt,o*.15,10*t),this.bodyTwist=ge.lerp(this.bodyTwist,-o*.1-c*.05,8*t)}break}case zt.HEAVY_ATTACKING:{const n=ze.heavyAttackDuration,s=.25;if(e<n*s){const r=e/(n*s),o=Math.sin(r*Math.PI*.5);this.targetSwordRotZ=.8*o,this.targetSwordRotX=-1.5*o,this.targetSwordPos.set(.3,1.5+o*.5,-.3*o),this.bodyTilt=ge.lerp(this.bodyTilt,-.12,8*t)}else{const r=(e-n*s)/(n*(1-s)),o=Math.sin(r*Math.PI),c=Math.min(1,r*2);this.targetSwordRotZ=ge.lerp(.8,-2,c),this.targetSwordRotX=ge.lerp(-1.5,1.2,c),this.targetSwordPos.set(.45,1.2+(1-c)*.6,o*.8),this.bodyTilt=ge.lerp(this.bodyTilt,c*.2,12*t)}break}case zt.BLOCKING:{this.targetSwordRotZ=-.3,this.targetSwordRotX=0,this.targetSwordPos.set(.2,1.3,.3),this.bodyTilt=ge.lerp(this.bodyTilt,-.05,8*t),this.bodyTwist=ge.lerp(this.bodyTwist,0,8*t);break}case zt.MOVING:{const n=this.walkBobPhase;this.walkBobPhase+=t*12;const s=Math.sin(this.walkBobPhase)*.02,r=Math.cos(this.walkBobPhase*.5)*.05;this._syncFootstepAudio(n,t),this.targetSwordRotZ=r,this.targetSwordRotX=0,this.targetSwordPos.set(.45+r*.1,1.2+s,0),this.bodyTilt=ge.lerp(this.bodyTilt,.03,6*t),this.bodyTwist=ge.lerp(this.bodyTwist,0,6*t);break}case zt.DODGING:{this.targetSwordRotZ=.5,this.targetSwordRotX=-.3,this.targetSwordPos.set(.3,1,-.2);break}default:this.targetSwordRotZ=0,this.targetSwordRotX=0,this.targetSwordPos.set(.45,1.2,0),this.bodyTilt=ge.lerp(this.bodyTilt,0,6*t),this.bodyTwist=ge.lerp(this.bodyTwist,0,6*t),this.walkBobPhase=0}const i=this._easeOutCubic(this.animationBlend);this.sword.position.x=ge.lerp(this.prevSwordPos.x,this.targetSwordPos.x,i),this.sword.position.y=ge.lerp(this.prevSwordPos.y,this.targetSwordPos.y,i),this.sword.position.z=ge.lerp(this.prevSwordPos.z,this.targetSwordPos.z,i),this.sword.rotation.z=ge.lerp(this.prevSwordRotZ,this.targetSwordRotZ,i),this.sword.rotation.x=ge.lerp(this.prevSwordRotX,this.targetSwordRotX,i),this.state!==zt.ATTACKING&&this.state!==zt.HEAVY_ATTACKING&&(this.sword.rotation.z=ge.lerp(this.sword.rotation.z,this.targetSwordRotZ,8*t),this.sword.rotation.x=ge.lerp(this.sword.rotation.x,this.targetSwordRotX,8*t),this.sword.position.lerp(this.targetSwordPos,8*t)),this.body&&(this.body.rotation.x=this.bodyTilt,this.body.rotation.y=this.bodyTwist)}_easeOutCubic(t){return 1-Math.pow(1-t,3)}_changeState(t){this.state!==t&&(this.prevSwordPos.copy(this.sword.position),this.prevSwordRotZ=this.sword.rotation.z,this.prevSwordRotX=this.sword.rotation.x,this.animationBlend=0,(this.state===zt.ATTACKING||this.state===zt.HEAVY_ATTACKING)&&(this.activeAttack=null,this.gm.particleManager&&this.gm.particleManager.endRibbonTrail()),this.state===zt.DODGING&&this.body&&(this.body.position.y=1.1,this.body.material.emissive.setHex(0)),this.state=t,this.stateTimer=0)}setCameraController(t){this.cameraController=t}_getCameraYaw(){return this.cameraController?this.cameraController.yaw:0}resetPosition(){this.mesh.position.copy(this.gm.checkpoint),this.velocity.set(0,0,0),this._changeState(zt.IDLE),this.modelLoaded&&this._playAnimation("idle",{loop:!0})}get isBlocking(){return this.state===zt.BLOCKING}get isAttacking(){return this.state===zt.ATTACKING||this.state===zt.HEAVY_ATTACKING}_syncFootstepAudio(t,e){if(!this.gm.audioManager||(this.footstepCooldown=Math.max(0,this.footstepCooldown-e),this.footstepCooldown>0))return;const i=Math.sin(t),n=Math.sin(this.walkBobPhase),s=i>.85&&n<i&&n>.6,r=i<-.85&&n>i&&n<-.6;if(s||r){const c=s?.95:1.05;this.gm.audioManager.play("footstepStone",{position:this.mesh.position.clone(),volume:.35,pitch:c,variation:.08}),this.footstepCooldown=.15}}flashDamage(){if(this.body&&(this.body.material.emissive.setHex(6684672),setTimeout(()=>{this.body&&this.body.material.emissive.setHex(0)},150)),this.visor){const t=this.visor.material.emissive.getHex();this.visor.material.emissive.setHex(16729156),setTimeout(()=>{this.visor&&this.visor.material.emissive.setHex(t)},100)}this.modelLoaded&&this.model&&this.model.traverse(t=>{if(t.isMesh&&t.material){const e=t.material.emissive?t.material.emissive.getHex():0;t.material.emissive&&(t.material.emissive.setHex(6684672),setTimeout(()=>{t.material&&t.material.emissive&&t.material.emissive.setHex(e)},150))}})}stagger(){this._changeState(zt.STAGGERED),this.modelLoaded&&this._playAnimation("hit",{loop:!1}),this.flashDamage()}}const Ot={IDLE:"idle",PATROL:"patrol",CHASE:"chase",CIRCLE:"circle",RETREAT:"retreat",ATTACK:"attack",STAGGERED:"staggered",DEAD:"dead"},u_={idle:["Idle","idle","Standing","standing","Breathing_Idle"],patrol:["Walking","Walk","walking","walk"],chase:["Running","Run","running","run","Walking","Walk"],attack:["Punch","punch","Kick","kick","Attack","attack","Swipe"],stagger:["No","no","Hit","hit","Stagger","React"],death:["Death","death","Die","die","Dying"],block:["Wave","wave","Standing"]},Ra={HOLLOW_SOLDIER:{name:"Hollow Soldier",health:50,damage:15,postureDmg:15,moveSpeed:2.5,detectionRange:10,attackRange:2.2,attackCooldown:1.5,attackWindup:.5,attackDuration:.2,remnantDrop:40,patrolRadius:3,bodyColor:4860458,eyeColor:16724787,canChainAttacks:!1,maxPosture:60,hasShield:!1,modelPath:"./assets/models/robot_expressive.glb",modelScale:.5,modelTint:4872762,animSpeedMult:1},BERSERKER:{name:"Berserker",health:35,damage:20,postureDmg:10,moveSpeed:4,detectionRange:12,attackRange:2,attackCooldown:.8,attackWindup:.3,attackDuration:.15,remnantDrop:60,patrolRadius:5,bodyColor:6693410,eyeColor:16737792,canChainAttacks:!0,maxChainAttacks:3,maxPosture:40,hasShield:!1,modelPath:"./assets/models/robot_expressive.glb",modelScale:.55,modelTint:9052706,animSpeedMult:1.5},SENTINEL:{name:"Sentinel",health:100,damage:30,postureDmg:25,moveSpeed:1.5,detectionRange:8,attackRange:2.5,attackCooldown:2.5,attackWindup:.8,attackDuration:.3,remnantDrop:100,patrolRadius:2,bodyColor:3355460,eyeColor:4474111,canChainAttacks:!1,maxPosture:100,hasShield:!0,shieldBlockChance:.4,modelPath:"./assets/models/soldier.glb",modelScale:.9,modelTint:3816026,animSpeedMult:.8}};class d_{constructor(t,e,i={},n=null){this.scene=t,this.gm=n;const s=i.type?Ra[i.type]:{};this.config={...Ra.HOLLOW_SOLDIER,...s,...i},this.maxHealth=this.config.health,this.health=this.maxHealth,this.maxPosture=this.config.maxPosture||60,this.posture=0,this.state=Ot.IDLE,this.stateTimer=0,this.hitThisSwing=!1,this.playedStrikeSound=!1,this.activeAttack=null,this.isBlocking=!1,this.chainAttackCount=0,this.lastAttackTime=0,this.circleDirection=Math.random()>.5?1:-1,this.circleTimer=0,this.lastFootstepPos=e.clone(),this.footstepDistance=0,this.footstepThreshold=this.config.type==="BERSERKER"?.8:1.2,this.mixer=null,this.actions=new Map,this.currentAction=null,this.modelLoaded=!1,this.gltfModel=null,this.spawnPos=e.clone(),this.patrolTarget=e.clone(),this.patrolWait=0,this.mesh=new jt,this.mesh.position.copy(e),this.config.type==="BERSERKER"?this._createBerserkerModel():this.config.hasShield?this._createSentinelModel():this._createHollowSoldierModel(),t.add(this.mesh)}_createHollowSoldierModel(){const t=new jt,e=new Ne(.28,.6,8,16),i=new Q({color:3811368,roughness:.85,metalness:.1}),n=new D(e,i);n.position.y=1.1,n.castShadow=!0,t.add(n);const s=new se(.32,.35,.4,8),r=new Q({color:4473924,roughness:.6,metalness:.7}),o=new D(s,r);o.position.y=1.1,o.castShadow=!0,t.add(o);const c=new qt(.15,8,6),l=new Q({color:5588002,roughness:.8,metalness:.5}),h=new D(c,l);h.position.set(-.35,1.35,0),h.scale.set(1,.7,.8),t.add(h);const u=new D(c,l);u.position.set(.35,1.35,0),u.scale.set(1,.7,.8),t.add(u);const d=new qt(.18,12,10),f=new Q({color:4864554,roughness:.9,metalness:0}),g=new D(d,f);g.position.y=1.7,g.scale.set(1,1.1,.9),t.add(g);const v=new qt(.2,10,8,0,Math.PI*2,0,Math.PI*.6),m=new Q({color:5263440,roughness:.7,metalness:.6}),p=new D(v,m);p.position.y=1.75,p.rotation.x=.1,t.add(p);const _=new Q({color:this.config.eyeColor,emissive:this.config.eyeColor,emissiveIntensity:4}),y=new qt(.04,8,8),S=new D(y,_);S.position.set(-.07,1.72,.14),t.add(S);const T=new D(y,_.clone());T.position.set(.07,1.72,.14),t.add(T),this.eye=S;const A=new Ne(.06,.35,6,8),R=new Q({color:3811874,roughness:.9}),P=new D(A,R);P.position.set(-.4,.9,0),P.rotation.z=.2,t.add(P);const M=new D(A,R);M.position.set(.4,.9,0),M.rotation.z=-.2,t.add(M);const w=new Ne(.08,.4,6,8),I=new Q({color:2761250,roughness:.85}),F=new D(w,I);F.position.set(-.15,.35,0),t.add(F);const O=new D(w,I);O.position.set(.15,.35,0),t.add(O),this.body=t,this.mesh.add(t);const X=new yt(.05,.65,.02),W=new Q({color:5592388,roughness:.6,metalness:.7});this.weapon=new D(X,W),this.weapon.position.set(.45,1,.1),this.weapon.castShadow=!0,this.mesh.add(this.weapon);const H=new yt(.15,.03,.03),k=new D(H,W);k.position.set(.45,.68,.1),this.mesh.add(k),this._createHealthBar(2.1)}_createBerserkerModel(){const t=new jt,e=new qt(.35,12,10),i=new Q({color:5576728,roughness:.7,metalness:.15}),n=new D(e,i);n.position.y=.85,n.scale.set(1,.9,1.1),n.castShadow=!0,t.add(n);for(let P=0;P<5;P++){const M=new hi(.04,.15,6),w=new Q({color:3346705,roughness:.5,metalness:.3}),I=new D(M,w);I.position.set(0,.85+P*.1,-.3+P*.02),I.rotation.x=-.6,t.add(I)}const s=new qt(.18,10,8),r=new Q({color:4461074,roughness:.75}),o=new D(s,r);o.position.set(0,1.15,.15),o.scale.set(1,.9,1.2),t.add(o);const c=new hi(.1,.2,8),l=new D(c,r);l.position.set(0,1.1,.32),l.rotation.x=Math.PI/2,t.add(l);const h=new Q({color:this.config.eyeColor,emissive:this.config.eyeColor,emissiveIntensity:5}),u=new qt(.05,8,8),d=new D(u,h);d.position.set(-.1,1.2,.25),t.add(d);const f=new D(u,h.clone());f.position.set(.1,1.2,.25),t.add(f),this.eye=d;const g=new Ne(.08,.4,8,10),v=new Q({color:4855832,roughness:.7}),m=new D(g,v);m.position.set(-.35,.7,.15),m.rotation.z=.5,m.rotation.x=-.4,t.add(m);const p=new D(g,v);p.position.set(.35,.7,.15),p.rotation.z=-.5,p.rotation.x=-.4,t.add(p);const _=new Ne(.1,.35,8,10),y=new D(_,v);y.position.set(-.18,.3,0),t.add(y);const S=new D(_,v);S.position.set(.18,.3,0),t.add(S),this.body=t,this.mesh.add(t);const T=new jt,A=new Q({color:2236962,roughness:.3,metalness:.8});for(let P=0;P<4;P++){const M=new hi(.02,.2,6),w=new D(M,A);w.position.set(P*.04-.06,0,.08),w.rotation.x=-.3,T.add(w)}T.position.set(.45,.55,.25),this.weapon=T,this.mesh.add(T);const R=T.clone();R.position.set(-.45,.55,.25),this.weapon2=R,this.mesh.add(R),this._createHealthBar(1.8)}_createSentinelModel(){const t=new jt,e=1.25,i=new se(.4*e,.45*e,.8*e,10),n=new Q({color:2763322,roughness:.4,metalness:.8}),s=new D(i,n);s.position.y=1.2*e,s.castShadow=!0,t.add(s);const r=new yt(.5*e,.4*e,.15*e),o=new Q({color:3816010,roughness:.35,metalness:.85}),c=new D(r,o);c.position.set(0,1.25*e,.25*e),t.add(c);const l=new Ti(.08*e,6),h=new Q({color:4482815,emissive:4482815,emissiveIntensity:2}),u=new D(l,h);u.position.set(0,1.25*e,.33*e),t.add(u);const d=new qt(.22*e,10,8),f=new Q({color:3355460,roughness:.4,metalness:.8}),g=new D(d,f);g.position.set(-.5*e,1.5*e,0),g.scale.set(1,.7,.9),t.add(g);const v=new D(d,f);v.position.set(.5*e,1.5*e,0),v.scale.set(1,.7,.9),t.add(v);const m=new se(.2*e,.22*e,.35*e,10),p=new Q({color:3816010,roughness:.4,metalness:.75}),_=new D(m,p);_.position.y=1.85*e,t.add(_);const y=new yt(.25*e,.03*e,.05*e),S=new Q({color:this.config.eyeColor,emissive:this.config.eyeColor,emissiveIntensity:3}),T=new D(y,S);T.position.set(0,1.85*e,.2*e),t.add(T),this.eye=T;const A=new Ne(.1*e,.35*e,8,10),R=new Q({color:2763322,roughness:.45,metalness:.75}),P=new D(A,R);P.position.set(-.5*e,1*e,0),P.rotation.z=.15,t.add(P);const M=new D(A,R);M.position.set(.5*e,1*e,0),M.rotation.z=-.15,t.add(M);const w=new Ne(.12*e,.45*e,8,10),I=new D(w,R);I.position.set(-.2*e,.35*e,0),t.add(I);const F=new D(w,R);F.position.set(.2*e,.35*e,0),t.add(F);const O=new yt(.15*e,.1*e,.2*e),X=new Q({color:2763322,roughness:.5,metalness:.7}),W=new D(O,X);W.position.set(-.2*e,.05,.02),t.add(W);const H=new D(O,X);H.position.set(.2*e,.05,.02),t.add(H),this.body=t,this.mesh.add(t);const k=new jt,$=new se(.04*e,.04*e,1.1*e,8),at=new Q({color:4864554,roughness:.7,metalness:.3}),st=new D($,at);k.add(st);const ut=new yt(.2*e,.15*e,.3*e),Bt=new Q({color:4473941,roughness:.3,metalness:.85}),It=new D(ut,Bt);It.position.y=.55*e,k.add(It);const fe=new hi(.06*e,.2*e,6),ie=new D(fe,Bt);ie.position.set(0,.55*e,-.2*e),ie.rotation.x=Math.PI/2,k.add(ie),k.position.set(.6*e,1.2*e,0),k.rotation.z=.2,this.weapon=k,this.weapon.castShadow=!0,this.mesh.add(k);const Y=new jt,j=new yt(.1*e,.9*e,.5*e),_t=new Q({color:3816010,roughness:.35,metalness:.8}),gt=new D(j,_t);Y.add(gt);const ot=new qt(.1*e,10,8,0,Math.PI),bt=new D(ot,_t);bt.position.set(.06*e,0,0),bt.rotation.y=Math.PI/2,Y.add(bt);const Qt=new Ti(.06*e,6),Kt=new Q({color:4482815,emissive:4482815,emissiveIntensity:1.5}),Jt=new D(Qt,Kt);Jt.position.set(.06*e,.2*e,0),Jt.rotation.y=Math.PI/2,Y.add(Jt),Y.position.set(-.55*e,1.1*e,.2*e),this.shield=Y,this.mesh.add(Y),this._createHealthBar(2.6)}async _loadGLTFModel(){if(this.config.modelPath)try{const t=await AssetManager.loadModel(this.config.modelPath,{scale:this.config.modelScale||1});this.body&&this.mesh.remove(this.body),this.weapon&&this.mesh.remove(this.weapon),this.weapon2&&this.mesh.remove(this.weapon2),this.shield&&this.mesh.remove(this.shield),this.gltfModel=t.scene;const e=this.config.modelScale||.5;this.gltfModel.scale.set(e,e,e),this.config.modelTint&&this._applyModelTint(this.gltfModel,this.config.modelTint),this.mesh.add(this.gltfModel),this.body=this.gltfModel,this.mixer=new oh(this.gltfModel),t.animations.forEach(i=>{const n=this.mixer.clipAction(i);this.actions.set(i.name,n),this.actions.set(i.name.toLowerCase(),n)}),this._playAnimation("idle",{loop:!0}),this.modelLoaded=!0,console.log(`[Enemy:${this.config.name}] GLTF model loaded (${t.animations.length} animations)`)}catch(t){console.warn(`[Enemy:${this.config.name}] Failed to load GLTF:`,t)}}_applyModelTint(t,e){const i=new Ut(e);t.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{r.color&&r.color.lerp(i,.4),r.emissive&&r.emissive.copy(i).multiplyScalar(.1)})})}_playAnimation(t,e={}){if(!this.mixer||this.actions.size===0)return;const i=u_[t]||[t];let n=null;for(const r of i)if(n=this.actions.get(r)||this.actions.get(r.toLowerCase()),n)break;if(!n)return;if(this.currentAction===n&&n.isRunning())return n;n.reset(),n.setLoop(e.loop?Do:Io),n.clampWhenFinished=!e.loop;const s=e.timeScale||1;return n.timeScale=s*(this.config.animSpeedMult||1),this.currentAction&&this.currentAction!==n&&n.crossFadeFrom(this.currentAction,.15,!0),n.play(),this.currentAction=n,n}_createHealthBar(t){this.healthBarGroup=new jt,this.healthBarGroup.position.y=t;const e=new Ze(1,.08),i=new le({color:1118481,side:ue}),n=new D(e,i);this.healthBarGroup.add(n);const s=new Ze(.98,.06),r=new le({color:13382451,side:ue});this.healthFill=new D(s,r),this.healthFill.position.z=.001,this.healthBarGroup.add(this.healthFill);const o=new Ze(1,.04),c=new le({color:2236945,side:ue}),l=new D(o,c);l.position.y=-.08,this.healthBarGroup.add(l);const h=new Ze(.98,.03),u=new le({color:16763904,side:ue});this.postureFill=new D(h,u),this.postureFill.position.set(0,-.08,.001),this.postureFill.scale.x=0,this.healthBarGroup.add(this.postureFill),this.mesh.add(this.healthBarGroup),this.healthBarGroup.visible=!1,this.breakIndicator=this._createBreakIndicator(),this.breakIndicator.visible=!1,this.mesh.add(this.breakIndicator)}_createBreakIndicator(){const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.fillStyle="#ffcc00",e.font="bold 32px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("BREAK!",64,32);const i=new vo(t),n=new Hl({map:i,transparent:!0,depthTest:!1}),s=new Yu(n);return s.scale.set(1.5,.75,1),s.position.y=3,s}update(t,e){if(this.state===Ot.DEAD)return;this.mixer&&this.mixer.update(t),this.stateTimer+=t,this.knockbackVelocity&&this.knockbackVelocity.lengthSq()>.01&&(this.mesh.position.addScaledVector(this.knockbackVelocity,t),this.knockbackVelocity.multiplyScalar(Math.max(0,1-8*t)),this.knockbackVelocity.lengthSq()<.01&&this.knockbackVelocity.set(0,0,0));const i=this.mesh.position.distanceTo(e.mesh.position),n=this.health/this.maxHealth;if(this.healthBarGroup.visible){const s=this.scene.getObjectByProperty("type","PerspectiveCamera");s&&this.healthBarGroup.lookAt(s.position)}switch(this.config.hasShield&&this.state===Ot.CHASE&&i<this.config.attackRange*1.5?(this.isBlocking=Math.random()<this.config.shieldBlockChance,this.shield&&(this.shield.position.z=this.isBlocking?.35:.2)):this.isBlocking=!1,this.state){case Ot.IDLE:this.patrolWait+=t,i<this.config.detectionRange?(this._changeState(Ot.CHASE),this.healthBarGroup.visible=!0):this.patrolWait>2&&(this.patrolWait=0,this._pickPatrolTarget(),this._changeState(Ot.PATROL));break;case Ot.PATROL:if(i<this.config.detectionRange){this._changeState(Ot.CHASE),this.healthBarGroup.visible=!0;break}this._moveToward(this.patrolTarget,this.config.moveSpeed*.5,t),this.mesh.position.distanceTo(this.patrolTarget)<.5&&this._changeState(Ot.IDLE);break;case Ot.CHASE:if(i>this.config.detectionRange*1.5){this._changeState(Ot.IDLE),this.healthBarGroup.visible=!1;break}if(n<.3&&!this.config.canChainAttacks&&Math.random()<.01){this._changeState(Ot.RETREAT);break}if(i<=this.config.attackRange){this._changeState(Ot.ATTACK);break}if(i<this.config.attackRange*2&&Math.random()<.005){this._changeState(Ot.CIRCLE);break}this._moveToward(e.mesh.position,this.config.moveSpeed,t),this._faceTarget(e.mesh.position,t);break;case Ot.CIRCLE:if(this.circleTimer+=t,this.circleTimer>1.5||i>this.config.detectionRange){this._changeState(Ot.CHASE);break}if(i<=this.config.attackRange){this._changeState(Ot.ATTACK);break}this._circleStrafe(e.mesh.position,t),this._faceTarget(e.mesh.position,t);break;case Ot.RETREAT:if(this.stateTimer>2||i>this.config.detectionRange){this._changeState(Ot.CHASE);break}const s=new E().subVectors(this.mesh.position,e.mesh.position);s.y=0,s.normalize();const r=this.mesh.position.clone().add(s.multiplyScalar(3));this._moveToward(r,this.config.moveSpeed*.8,t),this._faceTarget(e.mesh.position,t);break;case Ot.ATTACK:this._processAttack(t,e);break;case Ot.STAGGERED:this.body.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5),this.stateTimer>=1.5&&(this.posture=0,this.body.rotation.z=0,this.breakIndicator.visible=!1,this._updatePostureBar(),this._changeState(i<this.config.detectionRange?Ot.CHASE:Ot.IDLE));break}this.state!==Ot.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-8*t),this._updatePostureBar())}_circleStrafe(t,e){const i=new E().subVectors(t,this.mesh.position);i.y=0;const n=i.length();i.normalize();const s=new E(-i.z,0,i.x).multiplyScalar(this.circleDirection),r=this.config.attackRange*1.5,o=new E().copy(i).multiplyScalar((n-r)*.5),c=s.add(o).normalize();this.mesh.position.addScaledVector(c,this.config.moveSpeed*.7*e),this._trackFootsteps()}_processAttack(t,e){const i=this.config.attackWindup,n=i+this.config.attackDuration;if(this.stateTimer<i){this._faceTarget(e.mesh.position,t*2);const s=this.stateTimer/i;this.weapon.rotation.z=-s*3,this.weapon2&&(this.weapon2.rotation.z=-s*3);return}if(this.stateTimer>=i&&this.stateTimer<n){if(!this.hitThisSwing){this.gm?.audioManager&&!this.playedStrikeSound&&(this.playedStrikeSound=!0,this.config.type==="BERSERKER"?this.gm.audioManager.play("swordSwing",{position:this.mesh.position.clone(),volume:.4,pitch:1.3,variation:.1}):this.config.hasShield?this.gm.audioManager.play("swordSwing",{position:this.mesh.position.clone(),volume:.55,pitch:.6,variation:.05}):this.gm.audioManager.play("swordSwing",{position:this.mesh.position.clone(),volume:.45,pitch:.9,variation:.1}));const r=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(r.multiplyScalar(1)).add(new E(0,1,0)),range:this.config.attackRange,damage:this.config.damage,postureDmg:this.config.postureDmg}}const s=(this.stateTimer-i)/this.config.attackDuration;this.weapon.rotation.z=Math.sin(s*Math.PI)*2,this.weapon2&&(this.weapon2.rotation.z=Math.sin(s*Math.PI)*2)}if(this.stateTimer>=n&&(this.activeAttack=null,this.weapon.rotation.z*=.9,this.weapon2&&(this.weapon2.rotation.z*=.9)),this.stateTimer>=this.config.attackCooldown){this.hitThisSwing=!1,this.playedStrikeSound=!1,this.activeAttack=null,this.weapon.rotation.z=0,this.weapon2&&(this.weapon2.rotation.z=0);const s=this.mesh.position.distanceTo(e.mesh.position);if(this.config.canChainAttacks&&s<=this.config.attackRange*1.3&&(this.chainAttackCount++,this.chainAttackCount<this.config.maxChainAttacks)){this._changeState(Ot.ATTACK);return}this.chainAttackCount=0,s<=this.config.attackRange?this._changeState(Ot.ATTACK):this._changeState(Ot.CHASE)}}takeDamage(t,e=0,i=null,n=0,s=null){if(this.state===Ot.DEAD)return"dead";this.isBlocking&&(t=Math.floor(t*.3),e=Math.floor(e*.5),n*=.2,console.log(`[COMBAT] ${this.config.name} blocked! Reduced damage.`),this.shield&&(this.shield.material.emissive.setHex(4473958),setTimeout(()=>this.shield.material.emissive.setHex(0),100))),this.state===Ot.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),n>0&&s&&this._applyKnockback(n,s),this.gm?.audioManager&&(this.gm.audioManager.play("hitImpact",{position:this.mesh.position,volume:.6,variation:.15}),this.gm.audioManager.playEnemyGrunt(this.mesh.position));const r=Math.max(0,this.health/this.maxHealth);return this.healthFill.scale.x=r,this.healthFill.position.x=-(1-r)*.49*.5,this.healthBarGroup.visible=!0,this._updatePostureBar(),this._flashModel(),this._applyHitRecoil(i,t),this.health<=0?(this._die(),"died"):this.posture>=this.maxPosture&&this.state!==Ot.STAGGERED?(this._triggerPostureBreak(),"staggered"):((this.state===Ot.IDLE||this.state===Ot.PATROL)&&this._changeState(Ot.CHASE),"hit")}_applyHitRecoil(t,e){let i;if(t)i=new E().subVectors(this.mesh.position,t),i.y=0,i.normalize();else{const d=this.body.rotation.y;i=new E(-Math.sin(d),0,-Math.cos(d))}const n=Math.min(.5,e*.015),s=this.mesh.position.clone(),r=s.clone().add(i.multiplyScalar(n)),o=this.body.rotation.z,c=Math.random()>.5?1:-1;this.body.rotation.z=o+c*.15;let l=0;const h=.12,u=()=>{l+=.016;const d=Math.min(1,l/h),f=1-Math.pow(1-d,3);this.mesh.position.lerpVectors(r,s,f),this.body.rotation.z=ge.lerp(o+c*.15,o,f),d<1&&requestAnimationFrame(u)};this.mesh.position.copy(r),requestAnimationFrame(u)}_applyKnockback(t,e){if(!t||!e||t<=0)return;this.knockbackVelocity||(this.knockbackVelocity=new E);const i=e.clone().normalize().multiplyScalar(t);this.knockbackVelocity.add(i);const n=6;this.knockbackVelocity.length()>n&&this.knockbackVelocity.normalize().multiplyScalar(n)}_flashModel(){this.body?.material&&(this.body.material.emissive.setHex(4456448),setTimeout(()=>{this.body?.material&&this.body.material.emissive.setHex(0)},100)),this.body?.traverse&&this.body.traverse(t=>{if(t.material?.emissive){const e=t.material.emissive.getHex();t.material.emissive.setHex(4456448),setTimeout(()=>{t.material?.emissive&&t.material.emissive.setHex(e)},100)}})}_triggerPostureBreak(){this._changeState(Ot.STAGGERED),this.breakIndicator.visible=!0,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.7}),this.body.material.emissive.setHex(16763904),this.eye.material.emissive.setHex(16763904),setTimeout(()=>{this.body.material.emissive.setHex(0),this.eye.material.emissive.setHex(this.config.eyeColor)},300),this.postureFill.material.color.setHex(16729088),setTimeout(()=>this.postureFill.material.color.setHex(16763904),300),console.log(`[COMBAT] ${this.config.name} POSTURE BROKEN!`)}_updatePostureBar(){const t=this.posture/this.maxPosture;this.postureFill.scale.x=t,this.postureFill.position.x=-(1-t)*.49*.5}_die(){if(this.state=Ot.DEAD,this.health=0,this.activeAttack=null,this.breakIndicator.visible=!1,this.healthBarGroup.visible=!1,this.modelLoaded)this._playAnimation("death",{loop:!1}),setTimeout(()=>{this._fadeOutModel()},2e3);else if(this.body.rotation.x=Math.PI/2,this.body.position.y=.4,this.body.material){this.body.material.transparent=!0;const t=()=>{this.body.material.opacity-=.02,this.body.material.opacity>0?requestAnimationFrame(t):this.mesh.visible=!1};setTimeout(t,2e3)}}_fadeOutModel(){if(!this.gltfModel){this.mesh.visible=!1;return}let t=1;const e=()=>{t-=.03,this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.transparent=!0,s.opacity=Math.max(0,t)})}),t>0?requestAnimationFrame(e):this.mesh.visible=!1};e()}respawn(){this.health=this.maxHealth,this.posture=0,this.state=Ot.IDLE,this.stateTimer=0,this.chainAttackCount=0,this.circleTimer=0,this.isBlocking=!1,this.mesh.position.copy(this.spawnPos),this.mesh.visible=!0,this.healthBarGroup.visible=!1,this.breakIndicator.visible=!1,this.healthFill.scale.x=1,this.healthFill.position.x=0,this.postureFill.scale.x=0,this.postureFill.position.x=0,this.modelLoaded&&this.gltfModel?(this.gltfModel.traverse(t=>{t.isMesh&&t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i.opacity=1,i.transparent=!1})}),this._playAnimation("idle",{loop:!0})):this.body&&(this.body.rotation.x=0,this.body.rotation.z=0,this.body.position.y=1*(this.config.hasShield?1.2:this.config.type==="BERSERKER"?.85:1),this.body.material&&(this.body.material.opacity=1,this.body.material.transparent=!1)),this.shield&&(this.shield.position.z=.2)}_moveToward(t,e,i){const n=new E().subVectors(t,this.mesh.position);n.y=0,n.length()>.5&&(n.normalize(),this.mesh.position.addScaledVector(n,e*i),this._trackFootsteps())}_trackFootsteps(){if(!this.gm?.audioManager)return;const t=this.mesh.position.distanceTo(this.lastFootstepPos);if(this.footstepDistance+=t,this.lastFootstepPos.copy(this.mesh.position),this.footstepDistance>=this.footstepThreshold){this.footstepDistance=0;let e="footstepStone",i=.25,n=1;this.config.hasShield?(e="footstepMetal",i=.35,n=.7):this.config.type==="BERSERKER"&&(i=.2,n=1.2),this.gm.audioManager.play(e,{position:this.mesh.position.clone(),volume:i,pitch:n,variation:.15})}}_faceTarget(t,e){const i=new E().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.1){const n=Math.atan2(i.x,i.z);this.body.rotation.y=ge.lerp(this.body.rotation.y,n,5*e)}}_pickPatrolTarget(){const t=Math.random()*Math.PI*2,e=Math.random()*this.config.patrolRadius;this.patrolTarget.set(this.spawnPos.x+Math.cos(t)*e,0,this.spawnPos.z+Math.sin(t)*e)}_changeState(t){if(this.state!==t&&(this.state===Ot.ATTACK&&(this.activeAttack=null,this.hitThisSwing=!1),t===Ot.CIRCLE&&(this.circleTimer=0,this.circleDirection=Math.random()>.5?1:-1),this.state=t,this.stateTimer=0,this.modelLoaded))switch(t){case Ot.IDLE:this._playAnimation("idle",{loop:!0});break;case Ot.PATROL:this._playAnimation("patrol",{loop:!0,timeScale:.8});break;case Ot.CHASE:case Ot.CIRCLE:this._playAnimation("chase",{loop:!0});break;case Ot.RETREAT:this._playAnimation("chase",{loop:!0,timeScale:-1});break;case Ot.ATTACK:this._playAnimation("attack",{loop:!1,timeScale:1.2});break;case Ot.STAGGERED:this._playAnimation("stagger",{loop:!1});break}}}const Gt={DORMANT:"dormant",AWAKENING:"awakening",IDLE:"idle",WALK:"walk",ATTACK:"attack",HEAVY_ATTACK:"heavy_attack",AOE_ATTACK:"aoe_attack",COMBO:"combo",STAGGERED:"staggered",PHASE_TRANSITION:"phase_transition",DEAD:"dead"};class f_{constructor(t,e,i){this.scene=t,this.gm=i,this.name="The Failed Experiment",this.maxHealth=500,this.health=this.maxHealth,this.maxPosture=150,this.posture=0,this.phase=1,this.state=Gt.DORMANT,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.comboCount=0,this.isActive=!1,this.isDead=!1,this.phaseConfigs={1:{moveSpeed:2,attackCooldown:2.5,attackWindup:1,damage:35,postureDmg:30,canCombo:!1,canAoE:!1},2:{moveSpeed:3.5,attackCooldown:1.5,attackWindup:.6,damage:45,postureDmg:40,canCombo:!0,maxCombo:3,canAoE:!0,aoeCooldown:8}},this.config=this.phaseConfigs[1],this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.detectionRange=15,this.attackRange=3.5,this.spawnPos=e.clone(),this.mesh=new jt,this.mesh.position.copy(e);const n=new jt,s=new qt(.9,16,14),r=new Q({color:1709344,roughness:.75,metalness:.25}),o=new D(s,r);o.position.y=2,o.scale.set(1.1,1.3,1),o.castShadow=!0,n.add(o);const c=new qt(.6,12,10),l=new Q({color:2234408,roughness:.8,metalness:.2}),h=new D(c,l);h.position.set(0,2.5,-.5),h.scale.set(1.2,.9,.8),n.add(h);for(let gt=0;gt<8;gt++){const ot=new qt(.12+Math.random()*.15,8,6),bt=new Q({color:2759205,roughness:.9,metalness:.1}),Qt=new D(ot,bt),Kt=gt/8*Math.PI*2,Jt=1.5+Math.random()*1.5;Qt.position.set(Math.cos(Kt)*.7+(Math.random()-.5)*.3,Jt,Math.sin(Kt)*.5+(Math.random()-.5)*.3),n.add(Qt)}const u=new Q({color:9075306,roughness:.6,metalness:.2});for(let gt=0;gt<5;gt++){const ot=new ki(.35-gt*.03,.03,6,16,Math.PI*.7),bt=new D(ot,u);bt.position.set(0,1.5+gt*.15,.6),bt.rotation.x=Math.PI/2,bt.rotation.y=Math.PI,n.add(bt)}const d=new qt(.5,12,10),f=new Q({color:1709349,roughness:.7,metalness:.3});this.leftShoulder=new D(d,f),this.leftShoulder.position.set(-.9,2.8,0),this.leftShoulder.scale.set(1.3,1,1.1),n.add(this.leftShoulder);const g=new qt(.6,12,10);this.rightShoulder=new D(g,f),this.rightShoulder.position.set(1,2.9,0),this.rightShoulder.scale.set(1.1,.9,1),n.add(this.rightShoulder);const v=new Ne(.12,.7,8,12),m=new Q({color:2759202,roughness:.8,metalness:.15}),p=new D(v,m);p.position.set(-1.1,2,.2),p.rotation.z=.4,p.rotation.x=-.3,n.add(p);const _=new Ne(.2,.8,10,14),y=new D(_,m);y.position.set(1.3,2,.2),y.rotation.z=-.3,n.add(y);const S=new Q({color:1709344,roughness:.75,metalness:.2}),T=new Ne(.2,.9,10,12),A=new D(T,S);A.position.set(-.4,.6,0),A.rotation.z=.1,n.add(A);const R=new Ne(.22,.85,10,12),P=new D(R,S);P.position.set(.4,.6,0),P.rotation.z=-.1,n.add(P);const M=new Q({color:2236962,roughness:.5,metalness:.4});for(let gt of[-1,1])for(let ot=0;ot<3;ot++){const bt=new hi(.04,.15,6),Qt=new D(bt,M);Qt.position.set(gt*.4+(ot-1)*.08,.05,.2),Qt.rotation.x=Math.PI/3,n.add(Qt)}const w=new qt(.4,14,12),I=new Q({color:1709088,roughness:.75,metalness:.2}),F=new D(w,I);F.position.set(0,3.4,.3),F.scale.set(1,1.1,.9),n.add(F);const O=new yt(.35,.15,.25),X=new D(O,u);X.position.set(0,3.15,.45),X.rotation.x=.2,n.add(X),this.eyes=[];const W=[{x:-.15,y:3.5,z:.55,size:.09},{x:.15,y:3.5,z:.55,size:.09},{x:0,y:3.65,z:.5,size:.07},{x:-.32,y:3.35,z:.4,size:.05},{x:.32,y:3.35,z:.4,size:.05},{x:-.75,y:3,z:.25,size:.04},{x:-.85,y:2.85,z:.3,size:.03},{x:.1,y:2.7,z:-.3,size:.06}],H=new Q({color:16720384,emissive:16720384,emissiveIntensity:5});W.forEach(gt=>{const ot=new qt(gt.size,10,10),bt=new D(ot,H.clone());bt.position.set(gt.x,gt.y,gt.z),this.eyes.push(bt),n.add(bt)}),this.body=n,this.mesh.add(n);const k=new jt,$=new se(.06,.08,1.8,10),at=new Q({color:3811872,roughness:.8,metalness:.2}),st=new D($,at);k.add(st);for(let gt=0;gt<4;gt++){const ot=new ki(.09,.02,6,12),bt=new D(ot,new Q({color:4860456,roughness:.9}));bt.position.y=-.6+gt*.4,bt.rotation.x=Math.PI/2,k.add(bt)}const ut=new yt(.08,1.6,.5),Bt=new Q({color:2763306,roughness:.3,metalness:.9}),It=new D(ut,Bt);It.position.set(0,1.4,.15),It.rotation.z=.15,k.add(It);const fe=new yt(.02,1.55,.02),ie=new Q({color:16724736,emissive:16720384,emissiveIntensity:2}),Y=new D(fe,ie);Y.position.set(0,1.4,.41),Y.rotation.z=.15,k.add(Y);for(let gt=0;gt<5;gt++){const ot=new hi(.03,.12,5),bt=new D(ot,Bt);bt.position.set(0,.8+gt*.25,.35),bt.rotation.x=Math.PI/3,k.add(bt)}k.position.set(1.5,1.8,0),k.rotation.z=.4,this.weapon=k,this.weapon.castShadow=!0,this.mesh.add(k);const j=new vn(.5,6,32),_t=new le({color:16729088,transparent:!0,opacity:0,side:ue});this.aoeIndicator=new D(j,_t),this.aoeIndicator.rotation.x=-Math.PI/2,this.aoeIndicator.position.y=.1,this.mesh.add(this.aoeIndicator),this.auraParticles=[];for(let gt=0;gt<6;gt++){const ot=new qt(.08,6,6),bt=new Q({color:2228258,emissive:1114129,emissiveIntensity:1,transparent:!0,opacity:.6}),Qt=new D(ot,bt);Qt.userData.angle=gt/6*Math.PI*2,Qt.userData.yOffset=Math.random()*2,Qt.userData.radius=.8+Math.random()*.4,this.auraParticles.push(Qt),this.mesh.add(Qt)}this.mutatedArm=null,t.add(this.mesh),this._setDormant()}_setDormant(){this.eyes.forEach(t=>{t.material.emissiveIntensity=.5})}_awaken(){if(this.state!==Gt.DORMANT)return;this.isActive=!0,this._changeState(Gt.AWAKENING),this.gm?.audioManager&&(this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this.gm.audioManager.startBossMusic());let t=0;this.eyes.forEach((e,i)=>{setTimeout(()=>{e.material.emissiveIntensity=6,setTimeout(()=>{e.material.emissiveIntensity=4},200)},t),t+=150})}update(t,e){if(this.state===Gt.DEAD)return;this.stateTimer+=t,this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-t),this.aoeCooldownTimer=Math.max(0,this.aoeCooldownTimer-t),this.knockbackVelocity&&this.knockbackVelocity.lengthSq()>.01&&(this.mesh.position.addScaledVector(this.knockbackVelocity,t),this.knockbackVelocity.multiplyScalar(Math.max(0,1-12*t)),this.knockbackVelocity.lengthSq()<.01&&this.knockbackVelocity.set(0,0,0));const i=this.mesh.position.distanceTo(e.mesh.position);if(this.state===Gt.DORMANT&&i<this.detectionRange){this._awaken();return}switch(this.state){case Gt.AWAKENING:this.stateTimer<2?this.body.position.y=2.2+Math.sin(this.stateTimer*Math.PI)*.3:this._changeState(Gt.IDLE);break;case Gt.IDLE:this._faceTarget(e.mesh.position,t),i<=this.attackRange&&this.attackCooldownTimer<=0?this._startAttack(e):i>this.attackRange&&this._changeState(Gt.WALK);break;case Gt.WALK:this._moveToward(e.mesh.position,t),this._faceTarget(e.mesh.position,t),this.body.position.y=2.2+Math.sin(this.stateTimer*8)*.1,i<=this.attackRange&&(this.attackCooldownTimer<=0?this._startAttack(e):this._changeState(Gt.IDLE));break;case Gt.ATTACK:this._processAttack(t,e,!1);break;case Gt.HEAVY_ATTACK:this._processAttack(t,e,!0);break;case Gt.AOE_ATTACK:this._processAoEAttack(t,e);break;case Gt.COMBO:this._processCombo(t,e);break;case Gt.STAGGERED:this.body.rotation.z=Math.sin(this.stateTimer*12)*.15*(1-this.stateTimer/2.5),this.stateTimer>=2.5&&(this.posture=0,this.body.rotation.z=0,this._changeState(Gt.IDLE));break;case Gt.PHASE_TRANSITION:this._processPhaseTransition(t);break}this.state!==Gt.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-3*t));const n=this.health/this.maxHealth,s=2+(1-n)*4,r=3+Math.sin(Date.now()*.001*s)*(1+(1-n)*2);if(this.eyes.forEach(o=>{o.material.emissiveIntensity=r}),this.auraParticles&&this.isActive){const o=Date.now()*.001;this.auraParticles.forEach((c,l)=>{const h=c.userData.angle+o*.5,u=c.userData.yOffset+Math.sin(o+l)*.3,d=c.userData.radius;c.position.set(Math.cos(h)*d,1.5+u,Math.sin(h)*d),c.material.opacity=.3+Math.sin(o*2+l)*.2})}}_startAttack(t){if(this.mesh.position.distanceTo(t.mesh.position),this.phase===2&&this.config.canAoE&&this.aoeCooldownTimer<=0&&Math.random()<.3){this._changeState(Gt.AOE_ATTACK);return}if(this.phase===2&&this.config.canCombo&&Math.random()<.4){this.comboCount=0,this._changeState(Gt.COMBO);return}Math.random()<.5?this._changeState(Gt.ATTACK):this._changeState(Gt.HEAVY_ATTACK)}_processAttack(t,e,i){const n=i?this.config.attackWindup*1.5:this.config.attackWindup,s=n+.3,r=s+(i?1:.6);if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const o=this.stateTimer/n;i?(this.weapon.rotation.z=-o*2.5,this.weapon.position.y=1.8+o*1.5):this.weapon.rotation.z=.3-o*1.5;return}if(this.stateTimer>=n&&this.stateTimer<s){if(!this.hitThisSwing){const c=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2)).add(new E(0,1.5,0)),range:this.attackRange,damage:i?this.config.damage*1.5:this.config.damage,postureDmg:i?this.config.postureDmg*1.5:this.config.postureDmg,isHeavy:i}}const o=(this.stateTimer-n)/.3;i?(this.weapon.rotation.z=-2.5+o*4,this.weapon.position.y=3.3-o*2.5):this.weapon.rotation.z=-1.2+o*2.5}this.stateTimer>=s&&(this.activeAttack=null,this.weapon.rotation.z*=.9,this.weapon.position.y=ge.lerp(this.weapon.position.y,1.8,.1)),this.stateTimer>=r&&(this.hitThisSwing=!1,this.activeAttack=null,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(Gt.IDLE))}_processCombo(t,e){const i=this.config.attackWindup*.7,n=i+.2,s=n+.3;if(this.stateTimer<i){this._faceTarget(e.mesh.position,t*3);const r=this.stateTimer/i,o=this.comboCount%2===0?1:-1;this.weapon.rotation.z=o*r*1.5;return}if(this.stateTimer>=i&&this.stateTimer<n){if(!this.hitThisSwing){const c=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2)).add(new E(0,1.5,0)),range:this.attackRange*.9,damage:this.config.damage*.7,postureDmg:this.config.postureDmg*.6,isCombo:!0}}const r=(this.stateTimer-i)/.2,o=this.comboCount%2===0?1:-1;this.weapon.rotation.z=o*(1.5-r*3)}if(this.stateTimer>=s){this.comboCount++,this.hitThisSwing=!1,this.activeAttack=null;const r=this.mesh.position.distanceTo(e.mesh.position);if(this.comboCount<this.config.maxCombo&&r<this.attackRange*1.2){this.stateTimer=0;const o=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.mesh.position.addScaledVector(o,.5)}else this.comboCount=0,this.attackCooldownTimer=this.config.attackCooldown*1.5,this._resetWeapon(),this._changeState(Gt.IDLE)}}_processAoEAttack(t,e){if(this.stateTimer<1.5){const r=this.stateTimer/1.5;this.aoeIndicator.material.opacity=r*.6,this.aoeIndicator.scale.setScalar(1+r*.3),this.weapon.rotation.z=-r*3,this.weapon.position.y=1.8+r*2;const o=Math.floor(2228224+r*1114112);this.body.traverse(c=>{c.isMesh&&c.material&&c.material.emissive&&c.material.emissive.setHex(o)}),this.eyes.forEach(c=>{c.material.emissiveIntensity=4+r*6});return}this.stateTimer>=1.5&&this.stateTimer<1.8&&(this.hitThisSwing||(this.hitThisSwing=!0,this.aoeIndicator.material.opacity=1,this.aoeIndicator.material.color.setHex(16737792),this.mesh.position.distanceTo(e.mesh.position)<6&&!e.isInvincible&&(this.activeAttack={position:this.mesh.position.clone(),range:6,damage:this.config.damage*1.2,postureDmg:this.config.postureDmg,isAoE:!0}),this.weapon.rotation.z=.5,this.weapon.position.y=.5)),this.stateTimer>=1.8&&(this.activeAttack=null,this.aoeIndicator.material.opacity*=.9,this.body.traverse(r=>{r.isMesh&&r.material&&r.material.emissive&&r.material.emissive.setHex(0)})),this.stateTimer>=2.8&&(this.hitThisSwing=!1,this.aoeIndicator.material.opacity=0,this.aoeIndicator.material.color.setHex(16729088),this.aoeCooldownTimer=this.config.aoeCooldown,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(Gt.IDLE))}_processPhaseTransition(t){if(this.stateTimer<3){this.body.rotation.z=Math.sin(this.stateTimer*20)*.2,this.body.scale.y=1+Math.sin(this.stateTimer*10)*.1,this.eyes.forEach((i,n)=>{i.material.emissiveIntensity=5+Math.sin(this.stateTimer*15+n)*4}),this.stateTimer>1.5&&!this.mutatedArm&&this._createMutatedArm();return}this.body.rotation.z=0,this.body.scale.y=1,this.body.traverse(i=>{if(i.isMesh&&i.material&&i.material.color){const n=i.material.color.getHex(),s=n>>16&255,r=n>>8&255,o=n&255;i.material.color.setRGB(Math.min(1,(s+30)/255),Math.max(0,(r-10)/255),Math.min(1,(o+20)/255))}}),this.eyes.forEach(i=>{i.material.color.setHex(16729088),i.material.emissive.setHex(16729088)}),this._changeState(Gt.IDLE)}_createMutatedArm(){this.mutatedArm=new jt;const t=new Ne(.15,1,10,14),e=new Q({color:3806504,roughness:.85,metalness:.15}),i=new D(t,e);i.position.set(0,0,0),i.rotation.z=.6,i.rotation.x=.4,this.mutatedArm.add(i);const n=new Q({color:2236962,roughness:.4,metalness:.7});for(let o=0;o<4;o++){const c=new hi(.03,.2,6),l=new D(c,n);l.position.set(-.4+(o-1.5)*.08,.6,.7),l.rotation.x=-.8,this.mutatedArm.add(l)}for(let o=0;o<3;o++){const c=new qt(.06+Math.random()*.04,6,6),l=new Q({color:4859960,roughness:.9}),h=new D(c,l);h.position.set(-.2+o*.15,.2+o*.15,.35),this.mutatedArm.add(h)}this.mutatedArm.position.set(-1,2.6,.2),this.mesh.add(this.mutatedArm);const s=new Q({color:16729088,emissive:16729088,emissiveIntensity:5});[{x:-1.2,y:2.8,z:.5,size:.06},{x:-1,y:2.4,z:.6,size:.05},{x:.5,y:3,z:.35,size:.04}].forEach(o=>{const c=new D(new qt(o.size,8,8),s.clone());c.position.set(o.x,o.y,o.z),this.eyes.push(c),this.mesh.add(c)})}takeDamage(t,e=0,i=null,n=0,s=null){return this.state===Gt.DEAD||this.state===Gt.PHASE_TRANSITION||this.state===Gt.DORMANT?"immune":(this.state===Gt.AWAKENING&&(t=Math.floor(t*.5),e=Math.floor(e*.5)),this.state===Gt.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),n>0&&s&&this._applyKnockback(n,s),this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.7}),this.body.traverse(r=>{r.isMesh&&r.material&&r.material.emissive&&r.material.emissive.setHex(4456448)}),setTimeout(()=>{this.state!==Gt.AOE_ATTACK&&this.body.traverse(r=>{r.isMesh&&r.material&&r.material.emissive&&r.material.emissive.setHex(0)})},100),this._applyHitRecoil(i,t),this.health<=0?(this._die(),"died"):this.phase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==Gt.STAGGERED?(this._triggerPostureBreak(),"staggered"):"hit")}_applyHitRecoil(t,e){let i;if(t)i=new E().subVectors(this.mesh.position,t),i.y=0,i.normalize();else{const d=this.body.rotation.y;i=new E(-Math.sin(d),0,-Math.cos(d))}const n=Math.min(.2,e*.005),s=this.mesh.position.clone(),r=s.clone().add(i.multiplyScalar(n)),o=this.body.rotation.z||0,c=Math.random()>.5?1:-1;this.body.rotation.z=o+c*.08;let l=0;const h=.15,u=()=>{l+=.016;const d=Math.min(1,l/h),f=1-Math.pow(1-d,3);this.mesh.position.lerpVectors(r,s,f),this.body.rotation.z=ge.lerp(o+c*.08,o,f),d<1&&requestAnimationFrame(u)};this.mesh.position.copy(r),requestAnimationFrame(u)}_applyKnockback(t,e){if(!t||!e||t<=0)return;this.knockbackVelocity||(this.knockbackVelocity=new E);const i=e.clone().normalize().multiplyScalar(t);this.knockbackVelocity.add(i);const n=2;this.knockbackVelocity.length()>n&&this.knockbackVelocity.normalize().multiplyScalar(n)}_triggerPostureBreak(){this._changeState(Gt.STAGGERED),this.activeAttack=null,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.9}),this.body.traverse(t=>{t.isMesh&&t.material&&t.material.emissive&&t.material.emissive.setHex(16763904)}),this.eyes.forEach(t=>{t.material.emissive.setHex(16763904)}),setTimeout(()=>{this.state===Gt.STAGGERED&&(this.body.traverse(t=>{t.isMesh&&t.material&&t.material.emissive&&t.material.emissive.setHex(0)}),this.eyes.forEach(t=>{t.material.emissive.setHex(this.phase===2?16729088:16720384)}))},300),console.log(`[BOSS] ${this.name} POSTURE BROKEN!`)}_enterPhase2(){this.phase=2,this.config=this.phaseConfigs[2],this.posture=0,this.activeAttack=null,this._changeState(Gt.PHASE_TRANSITION),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1}),console.log(`[BOSS] ${this.name} enters PHASE 2!`)}_die(){this.state=Gt.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.isActive=!1,this.gm?.audioManager&&this.gm.audioManager.startAmbientMusic(),console.log(`[BOSS] ${this.name} DEFEATED!`);let t=0;const e=()=>{t+=.02,this.body.position.y=-t*1.5,this.body.rotation.x=t*.5,this.eyes.forEach(i=>{i.material.emissiveIntensity*=.95}),t<1?requestAnimationFrame(e):this._fadeOut()};e(),this.gm&&this.gm.collectRemnants(2e3)}_fadeOut(){let t=1;const e=()=>{t-=.01,this.body.traverse(i=>{i.isMesh&&i.material&&(i.material.transparent=!0,i.material.opacity=t)}),this.weapon.traverse(i=>{i.isMesh&&i.material&&(i.material.transparent=!0,i.material.opacity=t)}),this.eyes.forEach(i=>{i.material.transparent=!0,i.material.opacity=t}),this.auraParticles&&this.auraParticles.forEach(i=>{i.material.opacity=t*.6}),t>0?requestAnimationFrame(e):this.mesh.visible=!1};setTimeout(e,3e3)}_moveToward(t,e){const i=new E().subVectors(t,this.mesh.position);i.y=0,i.length()>.5&&(i.normalize(),this.mesh.position.addScaledVector(i,this.config.moveSpeed*e))}_faceTarget(t,e){const i=new E().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.1){const n=Math.atan2(i.x,i.z);this.body.rotation.y=ge.lerp(this.body.rotation.y,n,5*e)}}_resetWeapon(){this.weapon.rotation.z=.4,this.weapon.position.set(1.5,1.8,0)}_changeState(t){this.state!==t&&((this.state===Gt.ATTACK||this.state===Gt.HEAVY_ATTACK||this.state===Gt.AOE_ATTACK||this.state===Gt.COMBO)&&(this.activeAttack=null,this.hitThisSwing=!1),this.state=t,this.stateTimer=0)}respawn(){for(this.health=this.maxHealth,this.posture=0,this.phase=1,this.config=this.phaseConfigs[1],this.state=Gt.DORMANT,this.stateTimer=0,this.isActive=!1,this.isDead=!1,this.comboCount=0,this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.mesh.position.copy(this.spawnPos),this.mesh.visible=!0,this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.body.scale.set(1,1,1),this.body.traverse(t=>{t.isMesh&&t.material&&(t.material.opacity=1,t.material.transparent=!1,t.material.emissive&&t.material.emissive.setHex(0))}),this._resetWeapon(),this.weapon.traverse(t=>{t.isMesh&&t.material&&(t.material.opacity=1,t.material.transparent=!1)});this.eyes.length>8;){const t=this.eyes.pop();t&&this.mesh.remove(t)}this.eyes.forEach(t=>{t.material.opacity=1,t.material.transparent=!1,t.material.color.setHex(16720384),t.material.emissive.setHex(16720384)}),this.mutatedArm&&(this.mesh.remove(this.mutatedArm),this.mutatedArm=null),this.aoeIndicator.material.opacity=0,this._setDormant()}}class p_{constructor(t,e,i,n=null,s=null){this.scene=t,this.gm=e,this.player=i,this.world=n,this.particleManager=s,this.enemies=[],this.boss=null,this._spawnEnemies(),this._spawnBoss()}_spawnEnemies(){(this.world?.getEnemySpawns()||[{pos:new E(0,0,-6),type:"HOLLOW_SOLDIER"},{pos:new E(-4,0,-15),type:"BERSERKER"},{pos:new E(5,0,-22),type:"SENTINEL"}]).forEach((e,i)=>{const n=Ra[e.type]||Ra.HOLLOW_SOLDIER,s=new d_(this.scene,e.pos,{type:e.type,name:`${n.name} ${i+1}`},this.gm);this.enemies.push(s)})}_spawnBoss(){const t=this.world?.getBossPosition()||new E(0,0,-95);this.boss=new f_(this.scene,t,this.gm);const e=new vn(8,12,32),i=new le({color:3346705,transparent:!0,opacity:.3,side:ue}),n=new D(e,i);n.rotation.x=-Math.PI/2,n.position.copy(t),n.position.y=.02,this.scene.add(n)}update(t,e){for(let i=this.enemies.length-1;i>=0;i--){const n=this.enemies[i];if(n.update(t,e),e.activeAttack&&!e.hitThisSwing&&this._checkArcHit(e.activeAttack,e.mesh.position,n.mesh.position)&&n.health>0){const r=n.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position,e.activeAttack.knockbackForce,e.activeAttack.knockbackDir);if(e.hitThisSwing=!0,console.log(`[COMBAT] Player hit ${n.config.name} for ${e.activeAttack.damage} damage! Result: ${r}`),e.activeAttack.isHeavy?this.gm.hitstopHeavy():this.gm.hitstopLight(),this.gm.cameraController&&(e.activeAttack.isHeavy?this.gm.cameraController.shakeMedium():this.gm.cameraController.shakeLight()),this.particleManager){const o=n.mesh.position.clone(),c=n.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(o,8,e.activeAttack.isHeavy),this.particleManager.spawnBlood(o,c,Math.ceil(e.activeAttack.damage/5)),r==="posture_broken"&&this.particleManager.spawnPostureBreak(o)}this.gm.hud&&this.gm.hud.flashHitLanded(e.activeAttack.isHeavy),r==="died"&&(this.gm.addRemnant(n.config.remnantDrop),console.log(`[COMBAT] ${n.config.name} died! Dropped ${n.config.remnantDrop} remnant`),this.particleManager&&this.particleManager.spawnDeathBurst(n.mesh.position.clone()),setTimeout(()=>{n.respawn()},8e3))}if(n.activeAttack&&!n.hitThisSwing){const s=e.mesh.position.x-n.activeAttack.position.x,r=e.mesh.position.z-n.activeAttack.position.z;if(Math.sqrt(s*s+r*r)<n.activeAttack.range&&!e.isInvincible){const c=this.gm.takeDamage(n.activeAttack.damage,"physical",n.activeAttack.postureDmg,e.isBlocking);if(n.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const l=n.activeAttack.damage/30;this.gm.hud.flashDamage(Math.min(1,l))}if(this.gm.cameraController&&this.gm.cameraController.shakeHeavy(),console.log(`[COMBAT] ${n.config.name} hit player for ${n.activeAttack.damage} damage! Result: ${c}, HP: ${this.gm.health}/${this.gm.maxHealth}`),this.particleManager){const l=e.mesh.position.clone(),h=e.mesh.position.clone().sub(n.mesh.position).normalize();e.isBlocking&&c!=="guard_broken"?(this.particleManager.spawnBlockSparks(l),this.gm.audioManager&&this.gm.audioManager.play("blockImpact",{position:l,volume:.5,pitch:.9+Math.random()*.2,variation:.05})):(this.particleManager.spawnHitSparks(l,6,!1),this.particleManager.spawnBlood(l,h,Math.ceil(n.activeAttack.damage/5))),(c==="guard_broken"||c==="posture_broken")&&this.particleManager.spawnPostureBreak(l)}c==="died"?console.log("[COMBAT] Player died!"):(c==="guard_broken"||c==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}if(this.boss){if(this.boss.update(t,e),e.activeAttack&&!e.hitThisSwing&&!this.boss.isDead){const i={...e.activeAttack,range:e.activeAttack.range+1};if(this._checkArcHit(i,e.mesh.position,this.boss.mesh.position)&&this.boss.health>0){const s=this.boss.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position,e.activeAttack.knockbackForce*.3,e.activeAttack.knockbackDir);if(e.hitThisSwing=!0,console.log(`[BOSS] Player hit ${this.boss.name} for ${e.activeAttack.damage} damage! Result: ${s}`),this.gm.hitstopHeavy(),this.gm.cameraController&&this.gm.cameraController.shakeMedium(),this.particleManager){const r=this.boss.mesh.position.clone(),o=this.boss.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(r,12,e.activeAttack.isHeavy),this.particleManager.spawnBlood(r,o,Math.ceil(e.activeAttack.damage/3)),s==="posture_broken"&&this.particleManager.spawnPostureBreak(r),s==="died"&&(this.particleManager.spawnDeathBurst(r),this.particleManager.spawnDeathBurst(r))}this.gm.hud&&this.gm.hud.flashHitLanded(!0)}}if(this.boss.activeAttack&&!this.boss.hitThisSwing){const i=e.mesh.position.x-this.boss.activeAttack.position.x,n=e.mesh.position.z-this.boss.activeAttack.position.z;if(Math.sqrt(i*i+n*n)<this.boss.activeAttack.range&&!e.isInvincible){const r=this.gm.takeDamage(this.boss.activeAttack.damage,"physical",this.boss.activeAttack.postureDmg,e.isBlocking);if(this.boss.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const o=this.boss.activeAttack.damage/25;this.gm.hud.flashDamage(Math.min(1,o))}if(this.gm.cameraController&&this.gm.cameraController.shake(.7,.25),console.log(`[BOSS] ${this.boss.name} hit player for ${this.boss.activeAttack.damage} damage! Result: ${r}`),this.particleManager){const o=e.mesh.position.clone(),c=e.mesh.position.clone().sub(this.boss.mesh.position).normalize();e.isBlocking&&r!=="guard_broken"?(this.particleManager.spawnBlockSparks(o),this.particleManager.spawnBlockSparks(o),this.gm.audioManager&&this.gm.audioManager.play("blockImpact",{position:o,volume:.65,pitch:.7,variation:.05})):(this.particleManager.spawnHitSparks(o,10,!0),this.particleManager.spawnBlood(o,c,Math.ceil(this.boss.activeAttack.damage/4))),(r==="guard_broken"||r==="posture_broken")&&this.particleManager.spawnPostureBreak(o)}r==="died"?console.log("[BOSS] Player died to boss!"):(r==="guard_broken"||r==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}}resetAll(){this.enemies.forEach(t=>t.respawn()),this.boss&&this.boss.respawn(),console.log("[COMBAT] All enemies and boss reset")}getBoss(){return this.boss}_checkArcHit(t,e,i){const n=i.x-t.position.x,s=i.z-t.position.z;if(Math.sqrt(n*n+s*s)>t.range)return!1;const o=Math.abs(i.y-e.y);if(t.verticalTolerance&&o>t.verticalTolerance)return!1;if(t.arc&&t.facingAngle!==void 0){let l=Math.atan2(n,s)-t.facingAngle;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;const h=t.arc/2;if(Math.abs(l)>h)return!1}return!0}}class m_{constructor(t){this.scene=t,this.colliders=[],this.doors=[],this.hiddenWalls=[],this.bonfirePosition=new E(0,0,5),this._createSkybox(),this._createCathedral(),this._createLighting(),this._createEnvironmentProps(),this._createCathedralDetails()}_createSkybox(){const t=new qt(180,32,32),e=new Re({uniforms:{topColor:{value:new Ut(1712192)},midColor:{value:new Ut(4859992)},botColor:{value:new Ut(6963232)},starDensity:{value:.003}},vertexShader:`
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
      `,side:qe}),i=new D(t,e);this.scene.add(i);const n=new Ti(8,32),s=new le({color:15658717,transparent:!0,opacity:.8}),r=new D(n,s);r.position.set(-50,80,-100),r.lookAt(0,0,0),this.scene.add(r);const o=new Ti(15,32),c=new le({color:11184844,transparent:!0,opacity:.15}),l=new D(o,c);l.position.copy(r.position),l.lookAt(0,0,0),this.scene.add(l)}_createEnvironmentProps(){[[-12,8],[14,6],[-10,-5],[12,-8],[-15,-15],[16,-20],[-14,-35],[15,-45]].forEach(([i,n])=>{this._createDeadTree(i,n)}),[[-11,0],[-13,-2],[13,2],[11,-3],[-16,-10],[14,-12],[-15,-40],[17,-38]].forEach(([i,n])=>{this._createGravestone(i,n)}),this._scatterGrass(0,-40,35,90,200),this._createFloorRunes(),this._createGlowingMushrooms(),this._createMagicalCrystals()}_createGlowingMushrooms(){[{pos:[-11,0,7],color:4521898,scale:.8},{pos:[13,0,5],color:6750088,scale:.6},{pos:[-12,0,-6],color:4521898,scale:.7},{pos:[11,0,-4],color:8978363,scale:.5},{pos:[-8,0,-18],color:4513279,scale:.9},{pos:[8,0,-18],color:4513279,scale:.7},{pos:[-8,0,-38],color:6728447,scale:.6},{pos:[8,0,-38],color:6728447,scale:.8},{pos:[-5,0,-68],color:11167487,scale:.9},{pos:[5,0,-72],color:11167487,scale:.7},{pos:[-3,0,-80],color:13404415,scale:.6},{pos:[4,0,-78],color:13404415,scale:.5}].forEach(({pos:e,color:i,scale:n})=>{const s=new jt;s.position.set(...e),s.scale.setScalar(n);const r=new se(.08,.12,.3,8),o=new Q({color:13421738,roughness:.8,emissive:i,emissiveIntensity:.2}),c=new D(r,o);c.position.y=.15,s.add(c);const l=new qt(.2,16,8,0,Math.PI*2,0,Math.PI/2),h=new Q({color:i,emissive:i,emissiveIntensity:.8,roughness:.3,transparent:!0,opacity:.9}),u=new D(l,h);u.position.y=.3,s.add(u);const d=new yi(i,.6,4);d.position.y=.4,s.add(d),this.scene.add(s)})}_createMagicalCrystals(){[{pos:[-4,0,-15],color:6719743,scale:1.2,rot:.2},{pos:[4,0,-15],color:6719743,scale:1,rot:-.3},{pos:[-4,0,-30],color:8939263,scale:.9,rot:.15},{pos:[4,0,-30],color:8939263,scale:1.1,rot:-.2},{pos:[-3,0,-52],color:16755268,scale:1.3,rot:.1},{pos:[3,0,-52],color:16755268,scale:1.1,rot:-.1},{pos:[-6,0,-88],color:16729190,scale:1.5,rot:.25},{pos:[6,0,-88],color:16729190,scale:1.4,rot:-.2},{pos:[-6,0,-102],color:16737860,scale:1.2,rot:.3},{pos:[6,0,-102],color:16737860,scale:1.3,rot:-.25}].forEach(({pos:e,color:i,scale:n,rot:s})=>{const r=new jt;r.position.set(...e),r.scale.setScalar(n),r.rotation.z=s;const o=new hi(.15,.8,6),c=new Q({color:i,emissive:i,emissiveIntensity:1,roughness:.1,metalness:.3,transparent:!0,opacity:.85}),l=new D(o,c);l.position.y=.4,r.add(l);for(let u=0;u<3;u++){const d=new hi(.08,.4,5),f=new D(d,c),g=u/3*Math.PI*2;f.position.set(Math.cos(g)*.15,.2,Math.sin(g)*.15),f.rotation.z=Math.random()*.4-.2,f.rotation.x=Math.random()*.3,r.add(f)}const h=new yi(i,1.2,6);h.position.y=.5,r.add(h),this.scene.add(r)})}_createDeadTree(t,e){const i=new jt;i.position.set(t,0,e),i.rotation.y=Math.random()*Math.PI*2;const n=new Q({color:2759184,roughness:.95}),s=new se(.2,.4,4,6),r=new D(s,n);r.position.y=2,r.rotation.z=(Math.random()-.5)*.2,r.castShadow=!0,i.add(r);for(let o=0;o<4;o++){const c=new se(.03,.12,2,4),l=new D(c,n);l.position.set(0,3+o*.3,0),l.rotation.z=.3+Math.random()*.8,l.rotation.y=o*Math.PI/2+Math.random()*.5,l.castShadow=!0,i.add(l)}this.scene.add(i)}_createGravestone(t,e){const i=new Q({color:3816e3,roughness:.9}),n=Math.floor(Math.random()*3);let s;n===0?s=new yt(.6,1.2,.15):n===1?s=new yt(.5,1,.12):s=new yt(.15,1.4,.1);const r=new D(s,i);if(r.position.set(t,n===2?.7:.5,e),r.rotation.y=Math.random()*.4-.2,r.rotation.x=Math.random()*.1-.05,r.castShadow=!0,r.receiveShadow=!0,this.scene.add(r),n===2){const o=new yt(.5,.1,.08),c=new D(o,i);c.position.set(t,1,e),c.rotation.y=r.rotation.y,c.castShadow=!0,this.scene.add(c)}}_scatterGrass(t,e,i,n,s){const r=new Q({color:2767392,roughness:.9,side:ue});for(let o=0;o<s;o++){const c=t+(Math.random()-.5)*i,l=e+(Math.random()-.5)*n,h=new Ze(.1,.3+Math.random()*.3),u=new D(h,r);u.position.set(c,.15,l),u.rotation.y=Math.random()*Math.PI,u.rotation.x=-.1,this.scene.add(u)}}_createFloorRunes(){[{pos:[0,.02,-25],size:4,color:6710988},{pos:[0,.02,-55],size:3,color:13404211},{pos:[0,.02,-95],size:5,color:13382451},{pos:[0,.02,0],size:3,color:4500104},{pos:[0,.02,-42],size:2.5,color:8939178},{pos:[0,.02,-72],size:2.5,color:5605580}].forEach(({pos:e,size:i,color:n})=>{const s=new vn(i-.1,i,32),r=new le({color:n,transparent:!0,opacity:.6,side:ue}),o=new D(s,r);o.rotation.x=-Math.PI/2,o.position.set(...e),this.scene.add(o);const c=new vn(i*.4,i*.5,6),l=new D(c,r);l.rotation.x=-Math.PI/2,l.position.set(...e),this.scene.add(l);const h=new Ti(i*.3,16),u=new le({color:n,transparent:!0,opacity:.3,side:ue}),d=new D(h,u);d.rotation.x=-Math.PI/2,d.position.set(e[0],e[1]+.01,e[2]),this.scene.add(d);const f=new yi(n,1.5,i*3);f.position.set(e[0],e[1]+.5,e[2]),this.scene.add(f)})}_createCathedral(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#3a3840",e.fillRect(0,0,256,256);for(let _=0;_<2e3;_++){const y=Math.random()*256,S=Math.random()*256,T=Math.random()*3+1,A=Math.floor(Math.random()*30);e.fillStyle=`rgb(${50+A}, ${48+A}, ${55+A})`,e.fillRect(y,S,T,T)}e.strokeStyle="#252228",e.lineWidth=2;for(let _=0;_<256;_+=32)e.beginPath(),e.moveTo(0,_),e.lineTo(256,_),e.stroke();for(let _=0;_<256;_+=64)for(let y=0;y<256;y+=64)e.beginPath(),e.moveTo(_+(y%64===0?0:32),y),e.lineTo(_+(y%64===0?0:32),y+32),e.stroke();const i=new vo(t);i.wrapS=fn,i.wrapT=fn,i.repeat.set(2,2);const n=new Q({color:4868176,roughness:.85,metalness:.1,map:i}),s=new Q({color:2762037,roughness:.9,metalness:.05,map:i}),r=document.createElement("canvas");r.width=256,r.height=256;const o=r.getContext("2d");o.fillStyle="#2a2830",o.fillRect(0,0,256,256);for(let _=0;_<25;_++){const y=_%5*52+Math.random()*10,S=Math.floor(_/5)*52+Math.random()*10,T=40+Math.random()*10,A=40+Math.random()*10,R=Math.floor(Math.random()*20);o.fillStyle=`rgb(${38+R}, ${36+R}, ${42+R})`,o.beginPath(),o.roundRect(y,S,T,A,5),o.fill(),o.strokeStyle="#1a1820",o.lineWidth=2,o.stroke()}const c=new vo(r);c.wrapS=fn,c.wrapT=fn,c.repeat.set(4,4);const l=new Q({color:3815488,roughness:.95,metalness:.05,map:c});this._createFloorSection(0,0,16,16,l),this._createBonfire(this.bonfirePosition),this._createWall(-8,2,-8,1,6,16,n),this._createWall(8,2,-8,1,6,16,n),this._createWall(0,2,0,16,6,1,n),this._createFloorSection(0,-30,20,40,l),[[-6,-12],[6,-12],[-6,-22],[6,-22],[-6,-32],[6,-32],[-6,-42],[6,-42]].forEach(([_,y])=>{this._createPillar(_,y,n)}),this._createWall(-10,4,-30,1,10,44,n),this._createWall(10,4,-30,1,10,44,n),this._createFloorSection(-18,-25,12,14,l),this._createWall(-10,4,-18,1,10,6,n),this._createWall(-10,4,-38,1,10,10,n),this._createWall(-24,3,-25,1,8,14,n),this._createWall(-18,3,-32,12,8,1,n),this._createWall(-18,3,-18,12,8,1,n);const u=new yt(3,1.2,1.5),d=new Q({color:3355456,roughness:.7}),f=new D(u,d);f.position.set(-21,.6,-25),f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f),this._createFloorSection(18,-25,12,14,l),this._createWall(10,4,-18,1,10,6,n),this._createWall(10,4,-38,1,10,10,n),this._createWall(24,3,-25,1,8,14,n),this._createWall(18,3,-32,12,8,1,n),this._createWall(18,3,-18,12,8,1,n),this._createHiddenWall(21,3,-32,4,6,.5,n,"chapel-secret"),this._createFloorSection(21,-38,6,8,l),this._createWall(18,3,-42,6,6,1,n),this._createWall(24,3,-38,1,6,8,n),this._createFloorSection(0,-55,16,10,l),this._createWall(-8,5,-55,1,12,10,n),this._createWall(8,5,-55,1,12,10,n),this._createWall(0,5,-60,16,12,1,n);const g=new yt(6,1.5,2),v=new D(g,d);v.position.set(0,.75,-58),v.castShadow=!0,v.receiveShadow=!0,this.scene.add(v);for(let _=-2;_<=2;_++)this._createCandle(_*1.2,-57.5);this._createLockedDoor(0,2.5,-50.5,3,5,.3,"crypt-key","Crypt Door"),this._createFloorSection(0,-70,20,20,s),[[-6,-65],[6,-65],[-6,-75],[6,-75]].forEach(([_,y])=>{this._createPillar(_,y,s,4)}),this._createWall(-10,3,-70,1,6,20,s),this._createWall(10,3,-70,1,6,20,s),this._createWall(0,3,-80,20,6,1,s);for(let _=0;_<6;_++){const y=new yt(1.8,.8,3),S=new Q({color:2236968}),T=new D(y,S),A=_%2===0?-1:1;T.position.set(A*7,.4,-62-Math.floor(_/2)*6),T.castShadow=!0,T.receiveShadow=!0,this.scene.add(T)}this._createFloorSection(0,-95,24,16,s),this._createWall(-12,4,-95,1,10,16,s),this._createWall(12,4,-95,1,10,16,s),this._createWall(0,4,-103,24,10,1,s),[[-8,-88],[8,-88],[-8,-102],[8,-102]].forEach(([_,y])=>{this._createPillar(_,y,s,6)}),this._scatterDebris(0,-30,40,60,30,n)}_createFloorSection(t,e,i,n,s){const r=new Ze(i,n,Math.floor(i),Math.floor(n)),o=r.attributes.position;for(let l=0;l<o.count;l++){const h=o.getX(l),u=o.getY(l);o.setZ(l,Math.sin(h*.3)*Math.cos(u*.3)*.05)}r.computeVertexNormals();const c=new D(r,s);c.rotation.x=-Math.PI/2,c.position.set(t,0,e),c.receiveShadow=!0,this.scene.add(c)}_createWall(t,e,i,n,s,r,o){const c=new yt(n,s,r),l=new D(c,o);l.position.set(t,e,i),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l),this.colliders.push({type:"box",mesh:l,bounds:new ji().setFromObject(l)})}_createPillar(t,e,i,n=8){const s=new se(.8,.9,.5,8),r=new D(s,i);r.position.set(t,.25,e),r.castShadow=!0,r.receiveShadow=!0,this.scene.add(r);const o=new se(.5,.6,n-1,8),c=new D(o,i);c.position.set(t,n/2,e),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const l=new se(.9,.5,.6,8),h=new D(l,i);h.position.set(t,n-.3,e),h.castShadow=!0,h.receiveShadow=!0,this.scene.add(h),this.colliders.push({type:"cylinder",position:new E(t,n/2,e),radius:.6})}_createCandle(t,e){const i=new se(.05,.05,.3,6),n=new Q({color:15658700}),s=new D(i,n);s.position.set(t,1.65,e),this.scene.add(s);const r=new yi(16737826,.5,4);r.position.set(t,1.9,e),this.scene.add(r);const o=.4,c=()=>{requestAnimationFrame(c),r.intensity=o+Math.sin(Date.now()*.015+t*100)*.15+Math.random()*.1};c()}_createHiddenWall(t,e,i,n,s,r,o,c){const l=new yt(n,s,r),h=o.clone(),u=new D(l,h);return u.position.set(t,e,i),u.castShadow=!0,u.receiveShadow=!0,u.userData.isHidden=!0,u.userData.hiddenId=c,this.scene.add(u),this.hiddenWalls.push({id:c,mesh:u,revealed:!1,bounds:new ji().setFromObject(u)}),u}_createLockedDoor(t,e,i,n,s,r,o,c){const l=new yt(n,s,r),h=new Q({color:3811866,roughness:.7,metalness:.2}),u=new D(l,h);u.position.set(t,e,i),u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u);const d=new yt(n+.4,s+.4,r+.1),f=new Q({color:2236968}),g=new D(d,f);g.position.set(t,e,i-.05),this.scene.add(g);const v=new qt(.15,8,8),m=new Q({color:16720418,emissive:6684672,emissiveIntensity:.5}),p=new D(v,m);p.position.set(t,e+.5,i+.2),this.scene.add(p);const _={id:o,name:c,mesh:u,lock:p,isOpen:!1,bounds:new ji().setFromObject(u)};return this.doors.push(_),this.colliders.push({type:"door",door:_,bounds:_.bounds}),_}tryOpenDoor(t,e){const i=this.doors.find(n=>n.id===t);if(!i||i.isOpen)return!1;if(e&&e.hasKey(t)){i.isOpen=!0,i.mesh.visible=!1,i.lock.material.color.setHex(2293538),i.lock.material.emissive.setHex(26112);const n=this.colliders.findIndex(s=>s.door===i);return n>=0&&this.colliders.splice(n,1),console.log(`[DOOR] ${i.name} opened!`),!0}return!1}getNearbyDoor(t,e=2.5){for(const i of this.doors){if(i.isOpen)continue;if(t.distanceTo(i.mesh.position)<e)return i}return null}revealHiddenWall(t){const e=this.hiddenWalls.find(r=>r.id===t);if(!e||e.revealed)return!1;e.revealed=!0;const i=e.mesh.material;i.transparent=!0;let n=1;const s=()=>{n-=.05,i.opacity=n,n>0?requestAnimationFrame(s):this.scene.remove(e.mesh)};return s(),console.log(`[SECRET] Hidden wall revealed: ${t}`),!0}checkHiddenWallHit(t,e){for(const i of this.hiddenWalls){if(i.revealed)continue;if(t.distanceTo(i.mesh.position)<e+2)return i}return null}_scatterDebris(t,e,i,n,s,r){for(let o=0;o<s;o++){const c=.15+Math.random()*.4,l=new yt(c,c*.5,c),h=new D(l,r);h.position.set(t+(Math.random()-.5)*i,c*.25,e+(Math.random()-.5)*n),h.rotation.y=Math.random()*Math.PI,h.rotation.x=(Math.random()-.5)*.3,h.castShadow=!0,this.scene.add(h)}}_createLighting(){const t=new Gd(11184861,8943462,8);this.scene.add(t);const e=new Wd(8947899,6);this.scene.add(e);const i=new hs(13421806,4);i.position.set(0,100,0),this.scene.add(i);const n=new hs(8947882,3);n.position.set(0,50,0),n.target.position.set(0,0,-50),this.scene.add(n),this.scene.add(n.target);const s=new hs(11189230,3);s.position.set(-50,80,-100),s.castShadow=!0,s.shadow.mapSize.set(4096,4096),s.shadow.camera.near=10,s.shadow.camera.far=200,s.shadow.camera.left=-60,s.shadow.camera.right=60,s.shadow.camera.top=60,s.shadow.camera.bottom=-60,s.shadow.bias=-1e-4,this.scene.add(s);const r=new hs(13404262,.8);r.position.set(30,20,50),this.scene.add(r);const o=new hs(10066363,.6);o.position.set(0,30,100),this.scene.add(o),[{pos:[0,3,5],color:16737826,intensity:4,dist:20},{pos:[0,1,5],color:16729088,intensity:3,dist:12},{pos:[-6,5,-12],color:6719726,intensity:2.5,dist:18},{pos:[6,5,-12],color:6719726,intensity:2.5,dist:18},{pos:[-6,5,-32],color:5601245,intensity:2,dist:18},{pos:[6,5,-32],color:5601245,intensity:2,dist:18},{pos:[0,4,-22],color:6719692,intensity:2,dist:20},{pos:[-21,3,-25],color:14500932,intensity:3,dist:15},{pos:[-18,6,-25],color:11154227,intensity:1.5,dist:20},{pos:[21,3,-25],color:6737015,intensity:3,dist:15},{pos:[18,6,-25],color:4500053,intensity:1.5,dist:20},{pos:[21,2,-40],color:16768358,intensity:3.5,dist:12},{pos:[0,4,-58],color:16764006,intensity:4,dist:20},{pos:[-2,2,-57],color:16755268,intensity:2,dist:8},{pos:[2,2,-57],color:16755268,intensity:2,dist:8},{pos:[-6,2,-65],color:4482764,intensity:2,dist:15},{pos:[6,2,-75],color:4482764,intensity:2,dist:15},{pos:[0,3,-70],color:5601194,intensity:1.5,dist:25},{pos:[-8,4,-95],color:11154261,intensity:3,dist:20},{pos:[8,4,-95],color:11154261,intensity:3,dist:20},{pos:[0,8,-98],color:13386871,intensity:4,dist:30},{pos:[0,1,-95],color:8921668,intensity:2.5,dist:20}].forEach(({pos:h,color:u,intensity:d,dist:f})=>{const g=new yi(u,d,f);g.position.set(...h),this.scene.add(g)}),[[-6,6,-12],[6,6,-12],[-6,6,-22],[6,6,-22],[-6,6,-32],[6,6,-32],[-6,6,-42],[6,6,-42]].forEach(h=>{const u=new yi(16746564,3,16);u.position.set(...h),this.scene.add(u);const d=3,f=Math.random()*1e3,g=()=>{requestAnimationFrame(g),u.intensity=d+Math.sin(Date.now()*.01+f)*.5+Math.sin(Date.now()*.023+f)*.4+Math.random()*.3};g()})}_createBonfire(t){const e=new jt;e.position.copy(t);const i=new se(.5,.6,.4,12),n=new Q({color:3355443}),s=new D(i,n);s.position.y=.2,s.castShadow=!0,e.add(s);const r=new ki(.35,.08,8,16),o=new Q({color:4473924}),c=new D(r,o);c.rotation.x=Math.PI/2,c.position.y=.4,e.add(c);const l=new yi(16737826,2,10);l.position.y=1,l.castShadow=!0,e.add(l);const h=50,u=new ye,d=new Float32Array(h*3),f=new Float32Array(h*3);for(let p=0;p<h;p++){d[p*3]=(Math.random()-.5)*.4,d[p*3+1]=Math.random()*2,d[p*3+2]=(Math.random()-.5)*.4;const _=Math.random();f[p*3]=1,f[p*3+1]=.2+_*.5,f[p*3+2]=_*.1}u.setAttribute("position",new Be(d,3)),u.setAttribute("color",new Be(f,3));const g=new Xl({size:.1,vertexColors:!0,transparent:!0,opacity:.9,blending:oi}),v=new ju(u,g);e.add(v);const m=()=>{requestAnimationFrame(m);const p=u.attributes.position;for(let _=0;_<h;_++){let y=p.getY(_)+.025;y>2&&(y=0,p.setX(_,(Math.random()-.5)*.4),p.setZ(_,(Math.random()-.5)*.4)),p.setY(_,y),p.setX(_,p.getX(_)+(Math.random()-.5)*.008)}p.needsUpdate=!0,l.intensity=1.8+Math.sin(Date.now()*.012)*.4+Math.random()*.3};m(),this.scene.add(e)}getBossPosition(){return new E(0,0,-95)}getEnemySpawns(){return[{pos:new E(0,0,-6),type:"HOLLOW_SOLDIER"},{pos:new E(-4,0,-15),type:"HOLLOW_SOLDIER"},{pos:new E(5,0,-22),type:"BERSERKER"},{pos:new E(0,0,-35),type:"SENTINEL"},{pos:new E(-18,0,-23),type:"BERSERKER"},{pos:new E(-20,0,-27),type:"HOLLOW_SOLDIER"},{pos:new E(18,0,-25),type:"SENTINEL"},{pos:new E(21,0,-38),type:"BERSERKER"},{pos:new E(-3,0,-54),type:"HOLLOW_SOLDIER"},{pos:new E(3,0,-54),type:"HOLLOW_SOLDIER"},{pos:new E(-5,0,-68),type:"SENTINEL"},{pos:new E(5,0,-72),type:"BERSERKER"},{pos:new E(0,0,-78),type:"BERSERKER"}]}getItemSpawns(){return[{pos:new E(6,.5,2),type:"remnant",value:50},{pos:new E(-6,.5,-18),type:"remnant",value:100},{pos:new E(7,.5,-30),type:"remnant",value:100},{pos:new E(-21,1.3,-25),type:"remnant",value:200},{pos:new E(20,.5,-28),type:"key",keyId:"crypt-key",name:"Crypt Key"},{pos:new E(21,.5,-40),type:"remnant",value:500},{pos:new E(0,1.6,-58),type:"remnant",value:300},{pos:new E(-7,.9,-62),type:"remnant",value:150},{pos:new E(7,.9,-74),type:"remnant",value:150}]}_createCathedralDetails(){this._createKnightStatue(-4,-8,0),this._createKnightStatue(4,-8,0),this._createKnightStatue(-4,-50,0),this._createKnightStatue(4,-50,0),this._createKnightStatue(-10,-88,Math.PI/4),this._createKnightStatue(10,-88,-Math.PI/4),this._createGargoyle(-6,7,-12,Math.PI/4),this._createGargoyle(6,7,-12,-Math.PI/4),this._createGargoyle(-6,7,-32,Math.PI/4),this._createGargoyle(6,7,-32,-Math.PI/4),this._createGargoyle(-8,9,-88,Math.PI/3),this._createGargoyle(8,9,-88,-Math.PI/3),this._createGargoyle(-8,9,-102,Math.PI/2),this._createGargoyle(8,9,-102,-Math.PI/2),this._createBrokenColumn(-3,-17,.3),this._createBrokenColumn(5,-28,-.2),this._createBrokenColumn(-7,-66,.4),this._createBrokenColumn(2,-73,-.1),this._createDebrisPile(-7,-14,1),this._createDebrisPile(8,-18,.8),this._createDebrisPile(-8,-36,1.2),this._createDebrisPile(7,-40,.9),this._createDebrisPile(-5,-62,1.1),this._createDebrisPile(6,-70,1),this._createDebrisPile(-9,-92,1.3),this._createDebrisPile(9,-98,1.2),this._createWallTorch(-10,4,-15,"east"),this._createWallTorch(-10,4,-25,"east"),this._createWallTorch(-10,4,-35,"east"),this._createWallTorch(10,4,-15,"west"),this._createWallTorch(10,4,-25,"west"),this._createWallTorch(10,4,-35,"west"),this._createWallTorch(-10,3,-65,"east"),this._createWallTorch(-10,3,-75,"east"),this._createWallTorch(10,3,-65,"west"),this._createWallTorch(10,3,-75,"west"),this._createWallTorch(-12,5,-90,"east"),this._createWallTorch(-12,5,-100,"east"),this._createWallTorch(12,5,-90,"west"),this._createWallTorch(12,5,-100,"west"),this._createArmorStand(-7,-45,Math.PI*.1),this._createArmorStand(7,-45,-Math.PI*.1),this._createArmorStand(-22,-22,Math.PI/2),this._createArmorStand(22,-22,-Math.PI/2),this._createBanner(-9.5,6,-20,9109504,0),this._createBanner(9.5,6,-20,9109504,Math.PI),this._createBanner(-9.5,6,-30,3100495,0),this._createBanner(9.5,6,-30,3100495,Math.PI),this._createBanner(-7.5,7,-55,14329120,0),this._createBanner(7.5,7,-55,14329120,Math.PI),this._createBanner(-11.5,6,-95,4915330,0),this._createBanner(11.5,6,-95,4915330,Math.PI),this._createStoneUrn(-3,-52),this._createStoneUrn(3,-52),this._createStoneUrn(-9,-25),this._createStoneUrn(9,-25),this._createWeaponRack(-8,-42,0),this._createWeaponRack(8,-42,Math.PI)}_createKnightStatue(t,e,i=0){const n=new jt;n.position.set(t,0,e),n.rotation.y=i;const s=new Q({color:5264736,roughness:.85,metalness:.1}),r=new Q({color:3816005,roughness:.9,metalness:.05}),o=new yt(1.4,.6,1.4),c=new D(o,r);c.position.y=.3,c.castShadow=!0,c.receiveShadow=!0,n.add(c);const l=new yt(1.5,.1,1.5),h=new D(l,s);h.position.y=.65,n.add(h);const u=new yt(.6,1.2,.5),d=new D(u,s);d.position.y=1.3,d.castShadow=!0,n.add(d);const f=new yt(.8,1,.45),g=new D(f,s);g.position.y=2.3,g.castShadow=!0,n.add(g);const v=new yt(1.2,.3,.5),m=new D(v,s);m.position.y=2.7,m.castShadow=!0,n.add(m);const p=new yt(.4,.5,.4),_=new D(p,s);_.position.y=3.1,_.castShadow=!0,n.add(_);const y=new yt(.35,.08,.1),S=new Q({color:1710618}),T=new D(y,S);T.position.set(0,3.1,.2),n.add(T);const A=new yt(.08,.4,.5),R=new D(A,r);R.position.set(0,3.4,0),R.castShadow=!0,n.add(R);const P=new yt(.2,.9,.2),M=new D(P,s);M.position.set(-.5,1.9,0),M.castShadow=!0,n.add(M);const w=new D(P,s);w.position.set(.5,2.2,.15),w.rotation.x=-.4,w.castShadow=!0,n.add(w);const I=new Q({color:8947864,roughness:.4,metalness:.6}),F=new yt(.1,2,.04),O=new D(F,I);O.position.set(.55,1,.35),O.rotation.x=-.3,O.castShadow=!0,n.add(O);const X=new yt(.4,.08,.08),W=new D(X,r);W.position.set(.55,2,.2),W.rotation.x=-.3,n.add(W);const H=new se(.04,.04,.4,6),k=new D(H,r);k.position.set(.55,2.25,.1),k.rotation.x=Math.PI/2-.3,n.add(k);const $=new yt(.5,.7,.08),at=new D($,s);at.position.set(-.6,2,.15),at.rotation.y=.2,at.castShadow=!0,n.add(at);const st=new yt(.08,.5,.02),ut=new D(st,r);ut.position.set(-.6,2,.21),ut.rotation.y=.2,n.add(ut);const Bt=new yt(.35,.08,.02),It=new D(Bt,r);It.position.set(-.6,2.05,.21),It.rotation.y=.2,n.add(It),this.scene.add(n)}_createGargoyle(t,e,i,n=0){const s=new jt;s.position.set(t,e,i),s.rotation.y=n;const r=new Q({color:3816002,roughness:.9,metalness:.05}),o=new qt(.4,8,6);o.scale(1.2,.8,1);const c=new D(o,r);c.position.set(0,.3,.2),c.castShadow=!0,s.add(c);const l=new yt(.35,.35,.4),h=new D(l,r);h.position.set(0,.5,.6),h.rotation.x=.2,h.castShadow=!0,s.add(h);const u=new hi(.06,.3,5),d=new D(u,r);d.position.set(-.15,.7,.55),d.rotation.z=.3,d.rotation.x=-.2,s.add(d);const f=new D(u,r);f.position.set(.15,.7,.55),f.rotation.z=-.3,f.rotation.x=-.2,s.add(f);const g=new qt(.04,6,6),v=new Q({color:16729156,emissive:6689041,emissiveIntensity:.4}),m=new D(g,v);m.position.set(-.08,.55,.78),s.add(m);const p=new D(g,v);p.position.set(.08,.55,.78),s.add(p);const _=new yt(.2,.15,.2),y=new D(_,r);y.position.set(0,.42,.8),y.rotation.x=.3,s.add(y);const S=new yt(.6,.5,.08),T=new D(S,r);T.position.set(-.4,.4,-.1),T.rotation.y=-.4,T.rotation.z=.3,T.castShadow=!0,s.add(T);const A=new D(A,r),R=new D(S,r);R.position.set(.4,.4,-.1),R.rotation.y=.4,R.rotation.z=-.3,R.castShadow=!0,s.add(R);const P=new yt(.15,.12,.25),M=new D(P,r);M.position.set(-.2,0,.4),s.add(M);const w=new D(P,r);w.position.set(.2,0,.4),s.add(w);const I=new se(.04,.08,.6,6),F=new D(I,r);F.position.set(0,.15,-.3),F.rotation.x=-.6,F.rotation.z=.2,s.add(F),this.scene.add(s)}_createBrokenColumn(t,e,i=0){const n=new jt;n.position.set(t,0,e),n.rotation.y=i;const s=new Q({color:4868693,roughness:.9}),r=new se(.4,.5,3.5,8),o=new D(r,s);o.rotation.z=Math.PI/2,o.rotation.y=Math.random()*.3,o.position.set(0,.4,0),o.castShadow=!0,o.receiveShadow=!0,n.add(o);const c=new se(.6,.4,.4,8),l=new D(c,s);l.position.set(2,.2,.5),l.rotation.x=.3,l.rotation.z=.2,l.castShadow=!0,n.add(l);for(let h=0;h<8;h++){const u=.1+Math.random()*.25,d=new yt(u,u*.7,u*.9),f=new D(d,s);f.position.set((Math.random()-.5)*4,u*.35,(Math.random()-.5)*2),f.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.3),f.castShadow=!0,n.add(f)}this.scene.add(n)}_createDebrisPile(t,e,i=1){const n=new jt;n.position.set(t,0,e),n.scale.setScalar(i);const s=new Q({color:4539728,roughness:.95});for(let r=0;r<4;r++){const o=.3+Math.random()*.4,c=new yt(o,o*.6,o*.8),l=new D(c,s),h=r/4*Math.PI*2;l.position.set(Math.cos(h)*.4,o*.3,Math.sin(h)*.4),l.rotation.set(Math.random()*.4,Math.random()*Math.PI,Math.random()*.3),l.castShadow=!0,l.receiveShadow=!0,n.add(l)}for(let r=0;r<6;r++){const o=.15+Math.random()*.2,c=new yt(o,o*.7,o),l=new D(c,s);l.position.set((Math.random()-.5)*.8,.25+Math.random()*.2,(Math.random()-.5)*.8),l.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.4),l.castShadow=!0,n.add(l)}for(let r=0;r<10;r++){const o=.05+Math.random()*.08,c=new qt(o,4,4),l=new D(c,s);l.position.set((Math.random()-.5)*1.2,o,(Math.random()-.5)*1.2),n.add(l)}this.scene.add(n)}_createWallTorch(t,e,i,n){const s=new jt;s.position.set(t,e,i),n==="east"?s.rotation.y=Math.PI/2:n==="west"?s.rotation.y=-Math.PI/2:n==="north"&&(s.rotation.y=Math.PI);const r=new Q({color:2763304,roughness:.6,metalness:.7}),o=new yt(.15,.4,.05),c=new D(o,r);c.position.set(0,0,-.025),s.add(c);const l=new yt(.08,.08,.5),h=new D(l,r);h.position.set(0,.1,.2),h.rotation.x=.2,s.add(h);const u=new ki(.1,.02,6,8),d=new D(u,r);d.position.set(0,.15,.45),d.rotation.y=Math.PI/2,s.add(d);const f=new se(.04,.05,.6,6),g=new Q({color:3811344,roughness:.9}),v=new D(f,g);v.position.set(0,.45,.45),s.add(v);const m=new se(.08,.06,.2,8),p=new Q({color:4864544,roughness:.95}),_=new D(m,p);_.position.set(0,.8,.45),s.add(_);const y=new qt(.12,8,8),S=new le({color:16737826,transparent:!0,opacity:.6}),T=new D(y,S);T.position.set(0,.95,.45),s.add(T);const A=new yi(16742195,2,10);A.position.set(0,1,.45),s.add(A);const R=2,P=Math.random()*1e3,M=()=>{requestAnimationFrame(M),A.intensity=R+Math.sin(Date.now()*.012+P)*.4+Math.sin(Date.now()*.027+P)*.3+Math.random()*.2,T.scale.setScalar(.9+Math.sin(Date.now()*.015+P)*.15)};M(),this.scene.add(s)}_createArmorStand(t,e,i=0){const n=new jt;n.position.set(t,0,e),n.rotation.y=i;const s=new Q({color:3811349,roughness:.85}),r=new Q({color:4868688,roughness:.5,metalness:.6}),o=new se(.4,.45,.1,8),c=new D(o,s);c.position.y=.05,c.castShadow=!0,c.receiveShadow=!0,n.add(c);const l=new se(.05,.06,2.2,6),h=new D(l,s);h.position.y=1.2,h.castShadow=!0,n.add(h);const u=new yt(.8,.06,.06),d=new D(u,s);d.position.y=2,n.add(d);const f=new se(.03,.04,.3,6),g=new D(f,s);g.position.y=2.35,n.add(g);const v=new ki(.07,.015,6,8);for(let m=0;m<3;m++){const p=new D(v,r);p.position.y=.5+m*.7,p.rotation.x=Math.PI/2,n.add(p)}this.scene.add(n)}_createBanner(t,e,i,n,s=0){const r=new jt;r.position.set(t,e,i),r.rotation.y=s;const o=new Q({color:3815992,roughness:.5,metalness:.7}),c=new se(.03,.03,1.8,6),l=new D(c,o);l.rotation.z=Math.PI/2,r.add(l);const h=new qt(.06,6,6),u=new D(h,o);u.position.x=-.9,r.add(u);const d=new D(h,o);d.position.x=.9,r.add(d);const f=new Ze(1.5,2.5,8,12),g=f.attributes.position;for(let S=0;S<g.count;S++){const T=g.getY(S),A=Math.sin(T*2)*.08+Math.sin(T*4+1)*.04;g.setZ(S,A)}f.computeVertexNormals();const v=new Q({color:n,roughness:.8,side:ue}),m=new D(f,v);m.position.y=-1.25,m.castShadow=!0,r.add(m);const p=new Ti(.25,6),_=new Q({color:13412966,roughness:.6,metalness:.3}),y=new D(p,_);y.position.set(0,-1,.05),r.add(y),this.scene.add(r)}_createStoneUrn(t,e){const i=new jt;i.position.set(t,0,e);const n=new Q({color:4868690,roughness:.85}),s=new se(.2,.25,.15,8),r=new D(s,n);r.position.y=.075,r.castShadow=!0,r.receiveShadow=!0,i.add(r);const o=[];o.push(new et(.15,0)),o.push(new et(.22,.15)),o.push(new et(.28,.4)),o.push(new et(.25,.6)),o.push(new et(.18,.75)),o.push(new et(.2,.85)),o.push(new et(.15,.9));const c=new Vo(o,12),l=new D(c,n);l.position.y=.15,l.castShadow=!0,i.add(l);const h=new ki(.08,.02,6,8,Math.PI),u=new D(h,n);u.position.set(-.28,.6,0),u.rotation.y=Math.PI/2,u.rotation.x=Math.PI/2,i.add(u);const d=new D(h,n);d.position.set(.28,.6,0),d.rotation.y=-Math.PI/2,d.rotation.x=Math.PI/2,i.add(d),this.scene.add(i)}_createWeaponRack(t,e,i=0){const n=new jt;n.position.set(t,0,e),n.rotation.y=i;const s=new Q({color:3811349,roughness:.9}),r=new Q({color:5921376,roughness:.4,metalness:.6}),o=new yt(.1,2,.1),c=new D(o,s);c.position.set(-.6,1,0),c.castShadow=!0,n.add(c);const l=new D(o,s);l.position.set(.6,1,0),l.castShadow=!0,n.add(l);const h=new yt(1.4,.08,.08),u=new D(h,s);u.position.y=1.8,n.add(u);const d=new D(h,s);d.position.y=1.2,n.add(d);const f=new yt(1.4,.1,.4),g=new D(f,s);g.position.y=.05,g.castShadow=!0,g.receiveShadow=!0,n.add(g);const v=new se(.02,.025,.15,6);for(let P=-2;P<=2;P++){const M=new D(v,r);M.position.set(P*.25,1.5,.1),M.rotation.x=Math.PI/2,n.add(M)}const m=new yt(.06,1.2,.02),p=new Q({color:6974064,roughness:.4,metalness:.6}),_=new D(m,p);_.position.set(-.25,1,.12),_.rotation.z=.1,n.add(_);const y=new yt(.2,.04,.04),S=new D(y,r);S.position.set(-.25,.35,.12),S.rotation.z=.1,n.add(S);const T=new se(.025,.025,.25,6),A=new Q({color:2759176,roughness:.9}),R=new D(T,A);R.position.set(-.24,.18,.12),R.rotation.z=.1,n.add(R),this.scene.add(n)}}class g_{constructor(t){this.keys={},this.mouseButtons={},this.mouseDelta={x:0,y:0},this.isLocked=!1,this.buffer={},this.bufferDuration=.15,this.domElement=t,window.addEventListener("keydown",e=>{this.keys[e.code]=!0,this._bufferAction(e.code)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),t.addEventListener("mousedown",e=>{this.mouseButtons[e.button]=!0,this._bufferAction(`mouse${e.button}`)}),t.addEventListener("mouseup",e=>{this.mouseButtons[e.button]=!1}),t.addEventListener("mousemove",e=>{this.isLocked&&(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY)}),t.addEventListener("click",()=>{this.isLocked||t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault())}_bufferAction(t){this.buffer[t]=this.bufferDuration}update(t){const e=t||.016666666666666666;for(const i in this.buffer)this.buffer[i]-=e,this.buffer[i]<=0&&delete this.buffer[i]}consumeBuffer(t){return this.buffer[t]?(delete this.buffer[t],!0):!1}getMouseDelta(){const t={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}get moveForward(){return this.keys.KeyW}get moveBack(){return this.keys.KeyS}get moveLeft(){return this.keys.KeyA}get moveRight(){return this.keys.KeyD}get dodge(){return this.consumeBuffer("Space")}get lightAttack(){return this.consumeBuffer("mouse0")}get heavyAttack(){return this.consumeBuffer("mouse2")}get block(){return this.keys.ShiftLeft||this.keys.ShiftRight}get lockOn(){return this.consumeBuffer("KeyQ")}get interact(){return this.consumeBuffer("KeyE")}getMovementVector(){let t=0,e=0;this.moveForward&&(e-=1),this.moveBack&&(e+=1),this.moveLeft&&(t-=1),this.moveRight&&(t+=1);const i=Math.sqrt(t*t+e*e);return i>0&&(t/=i,e/=i),{x:t,z:e}}}class __{constructor(t,e){this.scene=t,this.gm=e,this.items=[],this.inventory={keys:new Set},this.notificationEl=document.getElementById("item-notification")}initItems(t){t.forEach((e,i)=>{this.spawnItem(e.pos,e.type,e)})}spawnItem(t,e,i={}){const n={id:`item-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:e,position:t.clone(),collected:!1,mesh:null,light:null,...i};switch(e){case"remnant":this._createRemnantVisual(n);break;case"key":this._createKeyVisual(n);break;default:this._createGenericVisual(n)}return this.items.push(n),n}_createRemnantVisual(t){const e=new qt(.15,12,12),i=new Q({color:8978346,emissive:4500070,emissiveIntensity:.8,transparent:!0,opacity:.9});t.mesh=new D(e,i),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh),t.light=new yi(8978346,.8,4),t.light.position.copy(t.position),this.scene.add(t.light);const n=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=n+Math.sin(Date.now()*.003)*.15,t.mesh.rotation.y+=.02,t.light.position.y=t.mesh.position.y,t.light.intensity=.6+Math.sin(Date.now()*.005)*.3)};s()}_createKeyVisual(t){const e=new jt,i=new ki(.12,.03,8,16),n=new Q({color:13412932,emissive:6702114,emissiveIntensity:.5,metalness:.8,roughness:.3}),s=new D(i,n);s.rotation.x=Math.PI/2,e.add(s);const r=new yt(.04,.25,.02),o=new D(r,n);o.position.y=-.18,e.add(o);const c=new yt(.08,.04,.02),l=new D(c,n);l.position.set(.04,-.25,0),e.add(l);const h=new D(c,n);h.position.set(.04,-.32,0),e.add(h),e.position.copy(t.position),t.mesh=e,this.scene.add(e),t.light=new yi(16755268,1,5),t.light.position.copy(t.position),this.scene.add(t.light);const u=t.position.y,d=()=>{t.collected||(requestAnimationFrame(d),t.mesh.position.y=u+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.015,t.light.position.y=t.mesh.position.y,t.light.intensity=.8+Math.sin(Date.now()*.004)*.3)};d()}_createGenericVisual(t){const e=new Ho(.15),i=new Q({color:11184895,emissive:4474026,emissiveIntensity:.5});t.mesh=new D(e,i),t.mesh.position.copy(t.position),this.scene.add(t.mesh);const n=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=n+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.02,t.mesh.rotation.x+=.01)};s()}update(t){for(const i of this.items){if(i.collected)continue;t.distanceTo(i.position)<1.5&&this.collectItem(i)}}collectItem(t){if(t.collected)return;t.collected=!0,t.mesh&&this.scene.remove(t.mesh),t.light&&this.scene.remove(t.light),this.gm.audioManager&&this.gm.audioManager.play("itemPickup",{position:t.position,volume:.6});let e="";switch(t.type){case"remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`,console.log(`[ITEM] Collected ${t.value} remnant`);break;case"key":this.inventory.keys.add(t.keyId),e=`Got ${t.name}`,console.log(`[ITEM] Collected key: ${t.name} (${t.keyId})`);break;default:e="Item collected"}this.showNotification(e)}showNotification(t){this.notificationEl&&(this.notificationEl.textContent=t,this.notificationEl.classList.add("visible"),setTimeout(()=>{this.notificationEl.classList.remove("visible")},2e3))}hasKey(t){return this.inventory.keys.has(t)}resetItems(){}}class v_{constructor(t){this.gm=t,this.healthBar=document.getElementById("health-bar"),this.staminaBar=document.getElementById("stamina-bar"),this.postureBar=document.getElementById("posture-bar"),this.remnantLabel=document.getElementById("remnant"),this.lostRemnantLabel=document.getElementById("lost-remnant"),this.bossContainer=document.getElementById("boss-container"),this.bossName=document.getElementById("boss-name"),this.bossHealthBar=document.getElementById("boss-health-bar"),this.bossPostureBar=document.getElementById("boss-posture-bar"),this.bossPhase=document.getElementById("boss-phase"),this.enemyManager=null,this._createDamageVignette(),this.damageVignetteOpacity=0,this.staminaWarningActive=!1}_createDamageVignette(){this.damageVignette=document.createElement("div"),this.damageVignette.id="damage-vignette",this.damageVignette.style.cssText=`
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
    `,document.body.appendChild(this.hitFlash)}flashDamage(t=.6){this.damageVignetteOpacity=Math.min(1,t),this.damageVignette.style.opacity=this.damageVignetteOpacity,this.hitFlash.style.opacity=Math.min(.5,t*.8),setTimeout(()=>{this.damageVignette.style.opacity=this.damageVignetteOpacity*.5,this.hitFlash.style.opacity=0},80),setTimeout(()=>{this.damageVignette.style.opacity=0},250)}flashHitLanded(t=!1){const e=t?"rgba(255, 200, 100, 0.35)":"rgba(255, 255, 255, 0.2)";this.hitFlash.style.background=`radial-gradient(circle, ${e} 0%, transparent 70%)`,this.hitFlash.style.opacity=t?"0.4":"0.25",setTimeout(()=>{this.hitFlash.style.opacity="0",setTimeout(()=>{this.hitFlash.style.background="radial-gradient(circle, rgba(255, 0, 0, 0.4) 0%, transparent 70%)"},50)},t?60:40)}flashStaminaDepleted(){this.staminaWarningActive||(this.staminaWarningActive=!0,this.staminaBar&&(this.staminaBar.style.background="linear-gradient(90deg, #ffaa00, #ff6600)",this.staminaBar.style.boxShadow="0 0 10px #ff6600",setTimeout(()=>{this.staminaBar.style.background="",this.staminaBar.style.boxShadow="",this.staminaWarningActive=!1},300)))}setEnemyManager(t){this.enemyManager=t}update(){this.healthBar&&(this.healthBar.style.width=`${this.gm.health/this.gm.maxHealth*100}%`),this.staminaBar&&(this.staminaBar.style.width=`${this.gm.stamina/this.gm.maxStamina*100}%`),this.postureBar&&(this.postureBar.style.width=`${this.gm.posture/this.gm.maxPosture*100}%`),this.remnantLabel&&(this.remnantLabel.textContent=`Remnant: ${this.gm.remnant}`),this.lostRemnantLabel&&(this.gm.bloodstain&&this.gm.heldRemnant>0?(this.lostRemnantLabel.style.display="block",this.lostRemnantLabel.textContent=`Lost: ${this.gm.heldRemnant} (recover at bloodstain)`):this.lostRemnantLabel.style.display="none"),this._updateBossUI()}_updateBossUI(){if(!this.enemyManager||!this.bossContainer)return;const t=this.enemyManager.getBoss();if(!t){this.bossContainer.style.display="none";return}if(t.isActive&&!t.isDead){if(this.bossContainer.style.display="block",this.bossName&&(this.bossName.textContent=t.name),this.bossHealthBar){const e=t.health/t.maxHealth*100;this.bossHealthBar.style.width=`${e}%`,t.phase===2?this.bossHealthBar.style.background="linear-gradient(90deg, #ff4400, #ff6622)":this.bossHealthBar.style.background="linear-gradient(90deg, #cc2222, #ff4444)"}if(this.bossPostureBar){const e=t.posture/t.maxPosture*100;this.bossPostureBar.style.width=`${e}%`}this.bossPhase&&(this.bossPhase.textContent=t.phase===2?"PHASE 2":"",this.bossPhase.style.color=t.phase===2?"#ff4400":"#ffcc00")}else this.bossContainer.style.display="none"}}class x_{constructor(t,e,i){this.gm=t,this.input=e,this.player=i,this.isOpen=!1,this.selectedTrack=0,this.tracks=["strength","vitality","stamina","spirit"],this._createUI(),window.addEventListener("keydown",n=>this._handleKey(n))}_createUI(){if(this.container=document.getElementById("crucible-container"),!this.container){console.warn("CrucibleUI: #crucible-container not found in HTML");return}this.promptEl=document.getElementById("crucible-prompt"),this.menuEl=document.getElementById("crucible-menu"),this.trackEls=this.tracks.map(t=>document.getElementById(`track-${t}`)),this.remnantEl=document.getElementById("crucible-remnant")}update(){if(!this.container)return;const t=this.gm.isNearBonfire(),e=this.gm.isDead;this.isOpen?(!t||e||this.input.keys.Escape)&&this._close():t&&!e?(this._showPrompt(!0),this.input.interact&&this._open()):this._showPrompt(!1),this.isOpen&&this._updateMenu()}_showPrompt(t){this.promptEl&&(this.promptEl.style.display=t?"block":"none")}_open(){this.isOpen=!0,this._showPrompt(!1),this.menuEl&&(this.menuEl.style.display="block"),document.pointerLockElement&&document.exitPointerLock()}_close(){this.isOpen=!1,this.menuEl&&(this.menuEl.style.display="none")}_handleKey(t){if(this.isOpen)switch(t.code){case"ArrowUp":case"KeyW":t.preventDefault(),this.selectedTrack=(this.selectedTrack-1+this.tracks.length)%this.tracks.length;break;case"ArrowDown":case"KeyS":t.preventDefault(),this.selectedTrack=(this.selectedTrack+1)%this.tracks.length;break;case"Enter":case"KeyF":t.preventDefault(),this._purchaseSelected();break;case"Escape":case"KeyE":t.preventDefault(),this._close();break}}_purchaseSelected(){const t=this.tracks[this.selectedTrack],e=this.gm.getTrackInfo(t);e.maxed||!e.canAfford||this.gm.infuse(t)&&(this.gm.applyInfusionBonuses(),this._applyVisualEffect(t),console.log(`[CRUCIBLE] Infused ${t} to level ${this.gm.infusions[t]}`))}_applyVisualEffect(t){if(!this.player)return;const e=this.gm.infusions[t],n=1+this.gm.getTotalDepth()*.01;switch(this.player.mesh.scale.setScalar(n),t){case"strength":this._addGlow(this.player.body,16729156,e*.1);break;case"vitality":this._addGlow(this.player.body,4521796,e*.1);break;case"stamina":this._addGlow(this.player.body,16777028,e*.1);break;case"spirit":this._addGlow(this.player.visor,4491519,e*.3);break}}_addGlow(t,e,i){if(!t||!t.material)return;const n=t.material.emissive?t.material.emissive.getHex():0,s=this._blendColors(n,e,.5);t.material.emissive.setHex(s),t.material.emissiveIntensity=Math.min(2,(t.material.emissiveIntensity||0)+i)}_blendColors(t,e,i){const n=t>>16&255,s=t>>8&255,r=t&255,o=e>>16&255,c=e>>8&255,l=e&255,h=Math.round(n+(o-n)*i),u=Math.round(s+(c-s)*i),d=Math.round(r+(l-r)*i);return h<<16|u<<8|d}_updateMenu(){this.remnantEl&&(this.remnantEl.textContent=`Remnant: ${this.gm.remnant}`),this.tracks.forEach((t,e)=>{const i=this.trackEls[e];if(!i)return;const n=this.gm.getTrackInfo(t),s=e===this.selectedTrack;i.classList.toggle("selected",s),i.classList.toggle("maxed",n.maxed),i.classList.toggle("affordable",n.canAfford&&!n.maxed);const r=i.querySelector(".track-name"),o=i.querySelector(".track-level"),c=i.querySelector(".track-cost"),l=i.querySelector(".track-bonus");r&&(r.textContent=n.name),o&&(o.textContent=`Lv. ${n.level}/${this.gm.MAX_TRACK_DEPTH}`),c&&(c.textContent=n.maxed?"MAX":`Cost: ${n.cost}`),l&&(l.textContent=n.bonus)})}}class M_{constructor(t,e,i){this.camera=t,this.target=e,this.input=i,this.distance=6,this.minDistance=3,this.maxDistance=12,this.height=2.5,this.sensitivity=.002,this.yaw=0,this.pitch=.3,this.minPitch=-.5,this.maxPitch=1.2,this.smoothing=8,this.currentPos=new E,this.lockOnTarget=null,this.lockOnYaw=0,this.lockOnTransition=0,this.lockOnTransitionSpeed=5,this.shakeIntensity=0,this.shakeDuration=0,this.shakeTimer=0,this.shakeOffset=new E,this.shakeDecay=.92}shake(t=.3,e=.15){this.shakeIntensity=Math.min(this.shakeIntensity+t,1),this.shakeDuration=Math.max(this.shakeDuration,e),this.shakeTimer=0}shakeLight(){this.shake(.15,.1)}shakeMedium(){this.shake(.35,.15)}shakeHeavy(){this.shake(.5,.2)}update(t){const e=this.input.getMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch+e.y*this.sensitivity));const i=this.target.position.clone();if(i.y+=this.height,this.lockOnTarget&&this.lockOnTarget.mesh){const h=this.lockOnTarget.mesh.position,u=this.target.position.distanceTo(h);if(this.lockOnTarget.isDead||u>25)this.lockOnTarget=null,this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);else{const d=new E().subVectors(h,i);d.y=0,this.lockOnYaw=Math.atan2(d.x,d.z)+Math.PI,this.lockOnTransition=Math.min(1,this.lockOnTransition+this.lockOnTransitionSpeed*t)}}else this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);let n=this.yaw;if(this.lockOnTransition>0){let h=this.lockOnYaw-this.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;n=this.yaw+h*this.lockOnTransition}const s=Math.sin(n)*this.distance*Math.cos(this.pitch),r=Math.cos(n)*this.distance*Math.cos(this.pitch),o=this.distance*Math.sin(this.pitch),c=new E(i.x+s,i.y+o,i.z+r);this.currentPos.lerp(c,this.smoothing*t),this._updateShake(t),this.camera.position.copy(this.currentPos),this.camera.position.add(this.shakeOffset);const l=i.clone();if(this.lockOnTarget&&this.lockOnTarget.mesh&&this.lockOnTransition>0){const h=this.lockOnTarget.mesh.position.clone();h.y+=1,l.lerp(h,.35*this.lockOnTransition)}this.camera.lookAt(l)}_updateShake(t){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity),this.shakeIntensity*=this.shakeDecay,this.shakeTimer+=t,this.shakeTimer>=this.shakeDuration&&(this.shakeIntensity=0,this.shakeOffset.set(0,0,0))):this.shakeOffset.set(0,0,0)}setLockOnTarget(t){if(this.lockOnTarget=t,t&&t.mesh){const e=this.target.position.clone();e.y+=this.height;const i=new E().subVectors(t.mesh.position,e);i.y=0,this.lockOnYaw=Math.atan2(i.x,i.z)+Math.PI}}isLockedOn(){return this.lockOnTarget!==null&&this.lockOnTransition>.5}clearLockOn(){this.lockOnTarget=null}getForwardDirection(){return new E(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).normalize()}getRightDirection(){return new E(-Math.cos(this.yaw),0,Math.sin(this.yaw)).normalize()}}class y_{constructor(t){this.camera=t,this.context=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.initialized=!1,this.masterVolume=.7,this.musicVolume=.4,this.sfxVolume=.8,this.listener=null,this.currentMusic=null,this.musicSource=null,this.soundCooldowns={},this.soundBuffers={}}async init(){if(!this.initialized)try{this.context=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.context.createGain(),this.masterGain.gain.value=this.masterVolume,this.masterGain.connect(this.context.destination),this.musicGain=this.context.createGain(),this.musicGain.gain.value=this.musicVolume,this.musicGain.connect(this.masterGain),this.sfxGain=this.context.createGain(),this.sfxGain.gain.value=this.sfxVolume,this.sfxGain.connect(this.masterGain),this.listener=this.context.listener,await this.generateSoundBuffers(),this.initialized=!0,console.log("[AUDIO] AudioManager initialized")}catch(t){console.warn("[AUDIO] Failed to initialize:",t)}}async generateSoundBuffers(){this.soundBuffers.swordSwing=this.createNoiseBuffer(.15,"highpass",2e3,.3),this.soundBuffers.hitImpact=this.createImpactBuffer(.12,150,.6),this.soundBuffers.criticalHit=this.createImpactBuffer(.15,200,.8),this.soundBuffers.playerDamage=this.createImpactBuffer(.2,80,.5),this.soundBuffers.enemyGrunt1=this.createGruntBuffer(.2,120),this.soundBuffers.enemyGrunt2=this.createGruntBuffer(.25,100),this.soundBuffers.enemyGrunt3=this.createGruntBuffer(.18,140),this.soundBuffers.dodge=this.createNoiseBuffer(.2,"bandpass",800,.25),this.soundBuffers.footstepStone=this.createFootstepBuffer(.08,"stone"),this.soundBuffers.footstepMetal=this.createFootstepBuffer(.1,"metal"),this.soundBuffers.death=this.createDeathBuffer(.8),this.soundBuffers.postureBreak=this.createPostureBreakBuffer(.3),this.soundBuffers.itemPickup=this.createChimeBuffer(.3,[523,659,784]),this.soundBuffers.doorUnlock=this.createChimeBuffer(.4,[392,494,587]),this.soundBuffers.menuSelect=this.createChimeBuffer(.15,[880]),this.soundBuffers.menuConfirm=this.createChimeBuffer(.2,[523,659]),this.soundBuffers.bossRoar=this.createRoarBuffer(.6),this.soundBuffers.staminaDepleted=this.createStaminaDepletedBuffer(.15),this.soundBuffers.blockImpact=this.createBlockImpactBuffer(.15),this.soundBuffers.parrySuccess=this.createParryBuffer(.2),console.log("[AUDIO] Sound buffers generated")}createBlockImpactBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let r=0;r<i;r++){const o=r/i,c=Math.exp(-o*15),l=Math.sin(2*Math.PI*800*r/e),h=Math.sin(2*Math.PI*1600*r/e)*.5,u=Math.sin(2*Math.PI*2400*r/e)*.25,d=(Math.random()*2-1)*.2;s[r]=(l+h+u+d)*c*.5}return{buffer:n}}createParryBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let r=0;r<i;r++){const o=r/i,c=Math.exp(-o*8),l=Math.sin(2*Math.PI*1200*r/e),h=Math.sin(2*Math.PI*1800*r/e)*.6,u=Math.sin(2*Math.PI*2700*r/e)*.3;s[r]=(l+h+u)*c*.4}return{buffer:n}}createNoiseBuffer(t,e,i,n){const s=this.context.sampleRate,r=s*t,o=this.context.createBuffer(1,r,s),c=o.getChannelData(0);for(let l=0;l<r;l++){const h=l/r,u=Math.sin(h*Math.PI);c[l]=(Math.random()*2-1)*u*n}return{buffer:o,filterType:e,filterFreq:i}}createImpactBuffer(t,e,i){const n=this.context.sampleRate,s=n*t,r=this.context.createBuffer(1,s,n),o=r.getChannelData(0);for(let c=0;c<s;c++){const l=c/s,h=Math.exp(-l*10),u=Math.sin(2*Math.PI*e*l*(1-l*.5)),d=(Math.random()*2-1)*.3;o[c]=(u+d)*h*i}return{buffer:r}}createGruntBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),r=s.getChannelData(0);for(let o=0;o<n;o++){const c=o/n,l=Math.sin(c*Math.PI)*Math.exp(-c*3),h=Math.sin(2*Math.PI*e*o/i),u=Math.sin(2*Math.PI*e*2.5*o/i)*.5,d=Math.sin(2*Math.PI*e*4*o/i)*.25,f=(Math.random()*2-1)*.2;r[o]=(h+u+d+f)*l*.4}return{buffer:s}}createFootstepBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),r=s.getChannelData(0),o=e==="metal"?400:200,c=e==="metal"?.6:.4;for(let l=0;l<n;l++){const h=l/n,u=Math.exp(-h*20),d=Math.sin(2*Math.PI*o*h),f=(Math.random()*2-1)*c;r[l]=(d*.5+f)*u*.3}return{buffer:s}}createDeathBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let r=0;r<i;r++){const o=r/i,c=Math.exp(-o*2)*(1-o),l=150*(1-o*.5),h=Math.sin(2*Math.PI*l*r/e),u=Math.tanh(h*3),d=(Math.random()*2-1)*.3*(1-o);s[r]=(u+d)*c*.5}return{buffer:n}}createPostureBreakBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let r=0;r<i;r++){const o=r/i,c=Math.exp(-o*5),l=Math.sin(2*Math.PI*800*r/e),h=Math.sin(2*Math.PI*1200*r/e),u=(Math.random()*2-1)*.5;s[r]=(l*.3+h*.2+u)*c*.4}return{buffer:n}}createChimeBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),r=s.getChannelData(0);for(let o=0;o<n;o++){const c=o/n,l=Math.exp(-c*4);let h=0;e.forEach((u,d)=>{const f=d*.03*i;if(o>f){const g=(o-f)/i;h+=Math.sin(2*Math.PI*u*g)/e.length}}),r[o]=h*l*.3}return{buffer:s}}createStaminaDepletedBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let r=0;r<i;r++){const o=r/i,c=Math.exp(-o*8)*Math.sin(o*Math.PI*2),l=(Math.random()*2-1)*.6,h=Math.sin(2*Math.PI*200*r/e)*.3;s[r]=(l+h)*Math.abs(c)*.25}return{buffer:n}}createRoarBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let r=0;r<i;r++){const o=r/i;let c;o<.1?c=o/.1:o<.7?c=1:c=(1-o)/.3;const l=Math.sin(2*Math.PI*60*r/e),h=Math.sin(2*Math.PI*65*r/e),u=Math.sin(2*Math.PI*120*r/e)*.5,d=(Math.random()*2-1)*.4,f=Math.tanh((l+h+u+d)*2);s[r]=f*c*.5}return{buffer:n}}play(t,e={}){if(!this.initialized||!this.soundBuffers[t])return;const{position:i=null,volume:n=1,pitch:s=1,cooldown:r=0,variation:o=0}=e,c=performance.now();if(r>0){const f=this.soundCooldowns[t]||0;if(c-f<r)return;this.soundCooldowns[t]=c}const l=this.soundBuffers[t],h=this.context.createBufferSource();h.buffer=l.buffer;const u=s+(Math.random()*2-1)*o;h.playbackRate.value=Math.max(.5,Math.min(2,u));const d=this.context.createGain();if(d.gain.value=n,l.filterType){const f=this.context.createBiquadFilter();f.type=l.filterType,f.frequency.value=l.filterFreq,h.connect(f),f.connect(d)}else h.connect(d);if(i&&this.camera){const f=this.context.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1,f.maxDistance=50,f.rolloffFactor=1,f.setPosition(i.x,i.y,i.z),d.connect(f),f.connect(this.sfxGain)}else d.connect(this.sfxGain);return h.start(),h}playEnemyGrunt(t){const e=["enemyGrunt1","enemyGrunt2","enemyGrunt3"],i=e[Math.floor(Math.random()*e.length)];this.play(i,{position:t,volume:.6,pitch:.9+Math.random()*.2,cooldown:200})}playFootstep(t,e="stone"){const i=e==="metal"?"footstepMetal":"footstepStone";this.play(i,{position:t,volume:.4,pitch:.9+Math.random()*.2,cooldown:150})}updateListener(){if(!this.initialized||!this.camera||!this.listener)return;const t=this.camera.position,e=new E;this.camera.getWorldDirection(e);const i=this.camera.up;this.listener.positionX?(this.listener.positionX.value=t.x,this.listener.positionY.value=t.y,this.listener.positionZ.value=t.z,this.listener.forwardX.value=e.x,this.listener.forwardY.value=e.y,this.listener.forwardZ.value=e.z,this.listener.upX.value=i.x,this.listener.upY.value=i.y,this.listener.upZ.value=i.z):(this.listener.setPosition(t.x,t.y,t.z),this.listener.setOrientation(e.x,e.y,e.z,i.x,i.y,i.z))}startAmbientMusic(){this.initialized&&this.currentMusic!=="ambient"&&(this.stopMusic(),this.currentMusic="ambient",this.createAmbientDrone())}startBossMusic(){this.initialized&&this.currentMusic!=="boss"&&(this.stopMusic(),this.currentMusic="boss",this.createBossMusic())}createAmbientDrone(){const t=this.context.createOscillator();t.type="sine",t.frequency.value=55;const e=this.context.createOscillator();e.type="sine",e.frequency.value=82.5;const i=this.context.createOscillator();i.type="sine",i.frequency.value=.1;const n=this.context.createGain();n.gain.value=2,i.connect(n),n.connect(t.frequency);const s=this.context.createGain();s.gain.value=.15;const r=this.context.createGain();r.gain.value=.1,t.connect(s),e.connect(r),s.connect(this.musicGain),r.connect(this.musicGain),t.start(),e.start(),i.start(),this.musicSource={oscs:[t,e,i]}}createBossMusic(){const t=this.context.createOscillator();t.type="sawtooth",t.frequency.value=55;const e=this.context.createWaveShaper();e.curve=this.makeDistortionCurve(20);const i=this.context.createOscillator();i.type="square",i.frequency.value=2;const n=this.context.createGain();n.gain.value=.3;const s=this.context.createGain();s.gain.value=.2,i.connect(n),n.connect(s.gain),t.connect(e),e.connect(s),s.connect(this.musicGain),t.start(),i.start(),this.musicSource={oscs:[t,i]}}makeDistortionCurve(t){const i=new Float32Array(44100),n=Math.PI/180;for(let s=0;s<44100;++s){const r=s*2/44100-1;i[s]=(3+t)*r*20*n/(Math.PI+t*Math.abs(r))}return i}stopMusic(){this.musicSource&&this.musicSource.oscs&&this.musicSource.oscs.forEach(t=>{try{t.stop()}catch{}}),this.musicSource=null,this.currentMusic=null}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&(this.masterGain.gain.value=this.masterVolume)}setMusicVolume(t){this.musicVolume=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}resume(){this.context&&this.context.state==="suspended"&&this.context.resume()}}class S_{constructor(t){this.scene=t,this.particles=[],this.slashTrails=[],this.embers=[],this.dustMotes=[],this.ribbonTrails=[],this.activeRibbon=null,this.ribbonMaxPoints=24,this.bloodDecals=[],this.maxBloodDecals=50,this._initSharedAssets(),this._initEmbers(),this._initDustMotes(),this._initRibbonAssets(),this._initDecalAssets()}_initSharedAssets(){this.sparkGeo=new ye;const t=new Float32Array([0,.05,0,-.02,0,0,0,-.05,0,.02,0,0,0,.05,0,0,0,.02,0,-.05,0,0,0,-.02]);this.sparkGeo.setAttribute("position",new Be(t,3)),this.bloodGeo=new Xo(.06,0),this.emberGeo=new qt(.02,4,4),this.sparkMat=new le({color:16755268,transparent:!0,opacity:1,side:ue}),this.critSparkMat=new le({color:16777096,transparent:!0,opacity:1,side:ue}),this.bloodMat=new le({color:8912930,transparent:!0,opacity:.9}),this.emberMat=new le({color:16729088,transparent:!0,opacity:.7}),this.slashMat=new le({color:6719743,transparent:!0,opacity:.6,side:ue,blending:oi,depthWrite:!1}),this.heavySlashMat=new le({color:16737860,transparent:!0,opacity:.7,side:ue,blending:oi,depthWrite:!1}),this.metalSparkMat=new le({color:16768392,transparent:!0,opacity:1,side:ue}),this.parryFlashMat=new le({color:16777215,transparent:!0,opacity:.9,blending:oi,depthWrite:!1})}_initRibbonAssets(){this.ribbonMaterial=new Re({uniforms:{uColor:{value:new Ut(6719743)},uCoreColor:{value:new Ut(16777215)},uTime:{value:0},uOpacity:{value:.85}},vertexShader:`
        attribute float alpha;
        varying float vAlpha;
        varying vec2 vUv;
        void main() {
          vAlpha = alpha;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform vec3 uCoreColor;
        uniform float uTime;
        uniform float uOpacity;
        varying float vAlpha;
        varying vec2 vUv;
        
        void main() {
          // Distance from center line (0 at center, 1 at edges)
          float centerDist = abs(vUv.y - 0.5) * 2.0;
          
          // Bright white/blue core in center, colored glow at edges
          float coreWidth = 0.3;
          float coreFactor = smoothstep(coreWidth, 0.0, centerDist);
          
          // Edge glow falloff
          float edgeFade = 1.0 - smoothstep(0.4, 1.0, centerDist);
          
          // Trail length fade (newer = brighter)
          float lengthFade = vAlpha;
          
          // Energy pulse along trail
          float pulse = 0.85 + sin(uTime * 12.0 + vUv.x * 15.0 - lengthFade * 8.0) * 0.15;
          
          // Mix core white with colored glow
          vec3 coreGlow = mix(uColor * 1.5, uCoreColor, coreFactor * 0.7);
          vec3 finalColor = coreGlow * (1.0 + lengthFade * 0.3);
          
          // Composite alpha: core is fully opaque, edges fade
          float coreAlpha = coreFactor * 0.9 + 0.1;
          float finalAlpha = lengthFade * edgeFade * coreAlpha * uOpacity * pulse;
          
          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,transparent:!0,side:ue,blending:oi,depthWrite:!1}),this.heavyRibbonMaterial=this.ribbonMaterial.clone(),this.heavyRibbonMaterial.uniforms.uColor.value=new Ut(16729122),this.heavyRibbonMaterial.uniforms.uCoreColor.value=new Ut(16777096),this.heavyRibbonMaterial.uniforms.uOpacity.value=.8}_initDecalAssets(){this.decalGeo=new Ti(1,16),this.decalGeo.rotateX(-Math.PI/2),this.bloodDecalMat=new Re({uniforms:{uTime:{value:0},uOpacity:{value:.8},uColor:{value:new Ut(4456465)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uOpacity;
        uniform vec3 uColor;
        varying vec2 vUv;
        
        // Pseudo-random for splatter shape
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        
        void main() {
          vec2 center = vUv - 0.5;
          float dist = length(center);
          
          // Create irregular splatter edge
          float angle = atan(center.y, center.x);
          float noise = hash(vec2(angle * 3.0, 0.0)) * 0.15;
          float edge = 0.4 + noise;
          
          // Soft edge falloff
          float alpha = smoothstep(edge + 0.1, edge - 0.05, dist);
          
          // Darker center, lighter edges
          vec3 color = uColor * (1.0 - dist * 0.5);
          
          gl_FragColor = vec4(color, alpha * uOpacity);
        }
      `,transparent:!0,depthWrite:!1})}_initEmbers(){for(let e=0;e<30;e++)this._spawnEmber()}_spawnEmber(){const t=new D(this.emberGeo,this.emberMat.clone());t.position.set((Math.random()-.5)*60,Math.random()*.5,(Math.random()-.5)*100-20),this.scene.add(t),this.embers.push({mesh:t,velocity:new E((Math.random()-.5)*.3,.3+Math.random()*.5,(Math.random()-.5)*.3),life:Math.random()*10,maxLife:8+Math.random()*6})}_initDustMotes(){this.dustGeo=new Ze(.03,.03),this.dustMat=new le({color:16777198,transparent:!0,opacity:.4,blending:oi,depthWrite:!1,side:ue});for(let e=0;e<80;e++){const i=new D(this.dustGeo,this.dustMat.clone());i.position.set((Math.random()-.5)*40,.5+Math.random()*5,(Math.random()-.5)*80-20),this.scene.add(i),this.dustMotes.push({mesh:i,baseY:i.position.y,driftSpeed:.1+Math.random()*.2,driftAmplitude:.3+Math.random()*.5,phase:Math.random()*Math.PI*2,rotateSpeed:(Math.random()-.5)*2})}}startRibbonTrail(t=!1){const e=new ye,i=new Float32Array(this.ribbonMaxPoints*2*3),n=new Float32Array(this.ribbonMaxPoints*2),s=new Float32Array(this.ribbonMaxPoints*2*2);for(let l=0;l<this.ribbonMaxPoints;l++){const h=l/(this.ribbonMaxPoints-1);s[l*4]=h,s[l*4+1]=0,s[l*4+2]=h,s[l*4+3]=1,n[l*2]=1-h,n[l*2+1]=1-h}e.setAttribute("position",new Be(i,3)),e.setAttribute("alpha",new Be(n,1)),e.setAttribute("uv",new Be(s,2));const r=[];for(let l=0;l<this.ribbonMaxPoints-1;l++){const h=l*2,u=l*2+1,d=(l+1)*2,f=(l+1)*2+1;r.push(h,u,d,u,f,d)}e.setIndex(r);const o=t?this.heavyRibbonMaterial.clone():this.ribbonMaterial.clone(),c=new D(e,o);c.frustumCulled=!1,this.scene.add(c),this.activeRibbon={mesh:c,geometry:e,material:o,points:[],isHeavy:t,life:0,fadeStart:.3,maxLife:.5}}updateRibbonTrail(t,e){if(!this.activeRibbon)return;const i=this.activeRibbon;for(i.points.unshift({tip:t.clone(),base:e.clone()});i.points.length>this.ribbonMaxPoints;)i.points.pop();const n=i.geometry.attributes.position,s=n.array;for(let r=0;r<this.ribbonMaxPoints;r++){const o=i.points[r]||i.points[i.points.length-1];o&&(s[r*6]=o.base.x,s[r*6+1]=o.base.y,s[r*6+2]=o.base.z,s[r*6+3]=o.tip.x,s[r*6+4]=o.tip.y,s[r*6+5]=o.tip.z)}n.needsUpdate=!0,i.geometry.computeBoundingSphere()}endRibbonTrail(){this.activeRibbon&&(this.ribbonTrails.push(this.activeRibbon),this.activeRibbon=null)}spawnBloodDecal(t,e=.5){if(this.bloodDecals.length>=this.maxBloodDecals){const r=this.bloodDecals.shift();this.scene.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose()}const i=this.bloodDecalMat.clone(),n=new D(this.decalGeo.clone(),i),s=e*(.8+Math.random()*.4);n.scale.set(s,1,s),n.position.set(t.x,.02,t.z),n.rotation.y=Math.random()*Math.PI*2,this.scene.add(n),this.bloodDecals.push({mesh:n,material:i,life:0,fadeDelay:15,fadeDuration:10})}spawnMetalClash(t,e){const n=Math.atan2(e.x,e.z);for(let o=0;o<15;o++){const c=new D(this.sparkGeo,this.metalSparkMat.clone());c.position.copy(t),c.position.y+=.9+Math.random()*.3;const l=(Math.random()-.5)*Math.PI*.5,h=n+l,u=4+Math.random()*6,d=2+Math.random()*4;this.scene.add(c),this.particles.push({mesh:c,velocity:new E(Math.sin(h)*u,d,Math.cos(h)*u),gravity:-20,life:0,maxLife:.2+Math.random()*.15,type:"spark",sparkTrail:!0})}const s=new qt(.3,8,8),r=new D(s,this.parryFlashMat.clone());r.position.copy(t),r.position.y+=1,this.scene.add(r),this.particles.push({mesh:r,velocity:new E(0,0,0),gravity:0,life:0,maxLife:.12,type:"flash",expandRate:4})}spawnSlashTrail(t,e,i=!1){const n=i?1.8:1.4,s=i?Math.PI*.7:Math.PI*.5,r=12,o=i?.15:.1,c=new Jl;c.moveTo(0,0);for(let f=0;f<=r;f++){const g=-s/2+s*f/r,v=Math.cos(g)*n,m=Math.sin(g)*n;f===0?c.moveTo(v,m):c.lineTo(v,m)}for(let f=r;f>=0;f--){const g=-s/2+s*f/r,v=Math.cos(g)*(n-o),m=Math.sin(g)*(n-o);c.lineTo(v,m)}c.closePath();const l=new Wo(c),h=(i?this.heavySlashMat:this.slashMat).clone(),u=new D(l,h);u.position.copy(t),u.position.y+=1.2;const d=Math.atan2(e.x,e.z);u.rotation.y=d,u.rotation.x=i?-.5:.2,this.scene.add(u),this.slashTrails.push({mesh:u,life:0,maxLife:i?.35:.25,scaleStart:.3,scaleEnd:1})}spawnHitSparks(t,e=8,i=!1){const n=i?e*2:e,s=i?this.critSparkMat:this.sparkMat;for(let r=0;r<n;r++){const o=new D(this.sparkGeo,s.clone());o.position.copy(t),o.position.y+=.8+Math.random()*.4;const c=Math.random()*Math.PI*2,l=2+Math.random()*4,h=2+Math.random()*3;this.scene.add(o),this.particles.push({mesh:o,velocity:new E(Math.cos(c)*l,h,Math.sin(c)*l),gravity:-15,life:0,maxLife:.3+Math.random()*.2,type:"spark"})}}spawnBlood(t,e,i=6){const n=Math.min(i,15);for(let c=0;c<n;c++){const l=new D(this.bloodGeo,this.bloodMat.clone());l.position.copy(t),l.position.y+=.8+Math.random()*.6;const u=Math.atan2(e.x,e.z)+(Math.random()-.5)*Math.PI*.6,d=3+Math.random()*3,f=1+Math.random()*3;this.scene.add(l),this.particles.push({mesh:l,velocity:new E(Math.sin(u)*d,f,Math.cos(u)*d),gravity:-18,life:0,maxLife:.6+Math.random()*.4,type:"blood",scale:.8+Math.random()*.4})}const s=new E(e.x*(.5+Math.random()*1.5),0,e.z*(.5+Math.random()*1.5)),r=t.clone().add(s),o=.3+i/15*.5;this.spawnBloodDecal(r,o)}spawnPostureBreak(t){this.spawnHitSparks(t,20,!0);const e=new vn(.1,.3,32),i=new le({color:16763972,transparent:!0,opacity:.8,side:ue,blending:oi,depthWrite:!1}),n=new D(e,i);n.position.copy(t),n.position.y+=1,n.rotation.x=-Math.PI/2,this.scene.add(n),this.particles.push({mesh:n,velocity:new E(0,0,0),gravity:0,life:0,maxLife:.5,type:"ring",expandRate:8})}spawnBlockSparks(t){for(let i=0;i<5;i++){const n=new D(this.sparkGeo,this.sparkMat.clone());n.material.color.setHex(8947967),n.position.copy(t),n.position.y+=1;const s=Math.random()*Math.PI*2,r=1+Math.random()*2;this.scene.add(n),this.particles.push({mesh:n,velocity:new E(Math.cos(s)*r,1+Math.random()*2,Math.sin(s)*r),gravity:-10,life:0,maxLife:.25,type:"spark"})}}spawnDeathBurst(t){for(let e=0;e<12;e++){const i=e/12*Math.PI*2,n=new D(this.bloodGeo,this.bloodMat.clone());n.position.copy(t),n.position.y+=1,this.scene.add(n),this.particles.push({mesh:n,velocity:new E(Math.cos(i)*4,2+Math.random()*3,Math.sin(i)*4),gravity:-15,life:0,maxLife:.8,type:"blood",scale:1.2})}for(let e=0;e<6;e++){const i=new qt(.1,8,8),n=new le({color:8956671,transparent:!0,opacity:.8,blending:oi}),s=new D(i,n);s.position.copy(t),s.position.y+=.5+Math.random()*.5,s.position.x+=(Math.random()-.5)*.5,s.position.z+=(Math.random()-.5)*.5,this.scene.add(s),this.particles.push({mesh:s,velocity:new E((Math.random()-.5)*.5,2+Math.random()*1,(Math.random()-.5)*.5),gravity:0,life:0,maxLife:1.5+Math.random()*.5,type:"wisp"})}}update(t){this._updateDeathEffects(t);for(let i=this.particles.length-1;i>=0;i--){const n=this.particles[i];if(n.life+=t,n.velocity.y+=n.gravity*t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.type==="ring"){const r=1+n.expandRate*n.life;n.mesh.scale.set(r,r,1)}if(n.type==="playerSoul"){n.mesh.position.x+=Math.sin(n.life*2)*t*.5,n.mesh.position.z+=Math.cos(n.life*2)*t*.5;const o=.6+Math.sin(n.life*5)*.4;n.mesh.material.opacity=o*(1-n.life/n.maxLife)}if(n.type==="deathMist"){const r=1+n.life*.5;n.mesh.scale.setScalar(r)}const s=1-n.life/n.maxLife;if(n.mesh.material.opacity!==void 0&&(n.mesh.material.opacity=s*(n.type==="blood"?.9:1)),n.scale){const r=n.scale*s;n.mesh.scale.setScalar(r)}n.type==="blood"&&n.mesh.position.y<.05&&(n.mesh.position.y=.05,n.velocity.x*=.5,n.velocity.z*=.5,n.velocity.y=0),n.type==="spark"&&(n.mesh.rotation.x+=t*10,n.mesh.rotation.z+=t*8),n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose?.(),n.mesh.material.dispose?.(),this.particles.splice(i,1))}for(let i=this.slashTrails.length-1;i>=0;i--){const n=this.slashTrails[i];n.life+=t;const s=n.life/n.maxLife,r=ge.lerp(n.scaleStart,n.scaleEnd,s);n.mesh.scale.setScalar(r),n.mesh.material.opacity=(1-s)*.6,n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.slashTrails.splice(i,1))}for(let i=this.embers.length-1;i>=0;i--){const n=this.embers[i];n.life+=t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.mesh.position.x+=Math.sin(n.life*2)*.01,n.mesh.position.z+=Math.cos(n.life*1.5)*.01;const s=1-n.life/n.maxLife;n.mesh.material.opacity=s*.7,n.life>=n.maxLife&&(n.life=0,n.mesh.position.set((Math.random()-.5)*60,Math.random()*.3,(Math.random()-.5)*100-20),n.maxLife=8+Math.random()*6)}const e=Date.now()*.001;for(const i of this.dustMotes){i.mesh.position.y=i.baseY+Math.sin(e*i.driftSpeed+i.phase)*i.driftAmplitude,i.mesh.position.x+=Math.sin(e*.5+i.phase)*.002,i.mesh.position.z+=Math.cos(e*.3+i.phase)*.002,i.mesh.rotation.z+=i.rotateSpeed*t;const n=.3+Math.sin(e*3+i.phase*5)*.15;i.mesh.material.opacity=n}this.activeRibbon&&(this.activeRibbon.material.uniforms.uTime.value+=t);for(let i=this.ribbonTrails.length-1;i>=0;i--){const n=this.ribbonTrails[i];if(n.life+=t,n.material.uniforms.uTime.value+=t,n.life>n.fadeStart){const s=(n.life-n.fadeStart)/(n.maxLife-n.fadeStart);n.material.uniforms.uOpacity.value=(1-s)*.7}n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.geometry.dispose(),n.material.dispose(),this.ribbonTrails.splice(i,1))}for(let i=this.bloodDecals.length-1;i>=0;i--){const n=this.bloodDecals[i];if(n.life+=t,n.life>n.fadeDelay){const s=(n.life-n.fadeDelay)/n.fadeDuration;n.material.uniforms.uOpacity.value=.8*(1-s),s>=1&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.material.dispose(),this.bloodDecals.splice(i,1))}}}spawnPlayerDeathEffect(t,e){for(let i=0;i<15;i++){const n=new qt(.15+Math.random()*.1,8,8),s=new le({color:8965375,transparent:!0,opacity:.9,blending:oi}),r=new D(n,s);r.position.copy(t),r.position.y+=.5+Math.random()*.8,r.position.x+=(Math.random()-.5)*.6,r.position.z+=(Math.random()-.5)*.6,this.scene.add(r),this.particles.push({mesh:r,velocity:new E((Math.random()-.5)*1.5,3+Math.random()*2,(Math.random()-.5)*1.5),gravity:-.5,life:0,maxLife:2.5+Math.random()*1.5,type:"playerSoul"})}for(let i=0;i<20;i++){const n=new qt(.2+Math.random()*.15,6,6),s=new le({color:4456465,transparent:!0,opacity:.7}),r=new D(n,s);r.position.copy(t),r.position.y+=Math.random()*1.5;const o=Math.random()*Math.PI*2,c=1+Math.random()*2;this.scene.add(r),this.particles.push({mesh:r,velocity:new E(Math.cos(o)*c,.5+Math.random()*1,Math.sin(o)*c),gravity:-1,life:0,maxLife:2+Math.random()*1,type:"deathMist",scale:1})}this._createDeathVignette(e),e&&this._triggerCameraShake(e)}_createDeathVignette(t){const e=new Ze(2,2),i=new Re({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uIntensity:{value:0}},vertexShader:`
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
      `}),n=new D(e,i);n.frustumCulled=!1,n.renderOrder=999,this.scene.add(n),this.deathVignette={mesh:n,material:i,life:0,fadeInDuration:.5,holdDuration:2.5,fadeOutDuration:.5}}_triggerCameraShake(t){this.cameraShake||(this.cameraShake={originalPosition:t.position.clone(),intensity:.3,decay:.95,duration:.8,elapsed:0,camera:t})}_updateDeathEffects(t){if(this.deathVignette){const e=this.deathVignette;e.life+=t,e.material.uniforms.uTime.value=e.life;const i=e.fadeInDuration+e.holdDuration+e.fadeOutDuration;if(e.life<e.fadeInDuration)e.material.uniforms.uIntensity.value=e.life/e.fadeInDuration;else if(e.life<e.fadeInDuration+e.holdDuration)e.material.uniforms.uIntensity.value=1;else if(e.life<i){const n=(e.life-e.fadeInDuration-e.holdDuration)/e.fadeOutDuration;e.material.uniforms.uIntensity.value=1-n}else this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose(),this.deathVignette=null}if(this.cameraShake){const e=this.cameraShake;if(e.elapsed+=t,e.elapsed<e.duration){const i=1-e.elapsed/e.duration,n=e.intensity*i;e.camera.position.x+=(Math.random()-.5)*n,e.camera.position.y+=(Math.random()-.5)*n*.5,e.camera.position.z+=(Math.random()-.5)*n}else this.cameraShake=null}}dispose(){this.particles.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.particles=[],this.slashTrails.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.slashTrails=[],this.embers.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.embers=[],this.dustMotes.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.dustMotes=[],this.activeRibbon&&(this.scene.remove(this.activeRibbon.mesh),this.activeRibbon.geometry?.dispose(),this.activeRibbon.material?.dispose(),this.activeRibbon=null),this.ribbonTrails.forEach(t=>{this.scene.remove(t.mesh),t.geometry?.dispose(),t.material?.dispose()}),this.ribbonTrails=[],this.bloodDecals.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.material?.dispose()}),this.bloodDecals=[]}}const w_={uniforms:{tDiffuse:{value:null},brightness:{value:.3},contrast:{value:1.15},saturation:{value:1.1},vignetteIntensity:{value:.35},vignetteRadius:{value:.85}},vertexShader:`
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
  `},Ii=new t_({antialias:!0});Ii.setSize(window.innerWidth,window.innerHeight);Ii.setPixelRatio(Math.min(window.devicePixelRatio,2));Ii.shadowMap.enabled=!0;Ii.shadowMap.type=ml;Ii.toneMapping=bo;Ii.toneMappingExposure=2;document.body.appendChild(Ii.domElement);const tn=new Xu;tn.fog=new Oo(1710120,.003);const jn=new ii(60,window.innerWidth/window.innerHeight,.1,200),Ns=new a_(Ii),b_=new r_(tn,jn);Ns.addPass(b_);const mh=new Jn(new et(window.innerWidth,window.innerHeight),.5,.4,.85);Ns.addPass(mh);const T_=new ph(w_);Ns.addPass(T_);const E_=new rh,Ue=new c_,Ps=new g_(Ii.domElement),Is=new y_(jn),Ds=new S_(tn),Ko=new v_(Ue);let fl=!1;const Pa=async()=>{fl||(await Is.init(),Is.startAmbientMusic(),fl=!0,document.removeEventListener("click",Pa),document.removeEventListener("keydown",Pa))};document.addEventListener("click",Pa);document.addEventListener("keydown",Pa);const zi=new m_(tn),Vn=new __(tn,Ue);Vn.initItems(zi.getItemSpawns());const ei=new h_(tn,Ue,Ps),Zo=new M_(jn,ei.mesh,Ps);ei.setCameraController(Zo);const $o=new p_(tn,Ue,ei,zi,Ds);Ue.setCheckpoint(zi.bonfirePosition.clone());Ue.setEntities(ei,$o,tn,jn);Ue.bonfirePosition=zi.bonfirePosition;Ue.audioManager=Is;Ue.particleManager=Ds;Ue.hud=Ko;Ue.cameraController=Zo;Ko.setEnemyManager($o);const pl=new x_(Ue,Ps,ei);window.addEventListener("resize",()=>{jn.aspect=window.innerWidth/window.innerHeight,jn.updateProjectionMatrix(),Ii.setSize(window.innerWidth,window.innerHeight),Ns.setSize(window.innerWidth,window.innerHeight),mh.resolution.set(window.innerWidth,window.innerHeight)});function gh(){requestAnimationFrame(gh);const a=Math.min(E_.getDelta(),.05);if(Ps.update(a),Ue.updateHitstop(a)?Ds.update(a*.1):(ei.update(a),$o.update(a,ei),Ds.update(a)),Zo.update(a),Vn.update(ei.mesh.position),Ko.update(),pl.update(),Ue.update(a),Is.updateListener(),Ue.collectBloodstain(),ei.activeAttack){const s=zi.checkHiddenWallHit(ei.activeAttack.position,ei.activeAttack.range);s&&!s.revealed&&zi.revealHiddenWall(s.id)}const e=zi.getNearbyDoor(ei.mesh.position),i=document.getElementById("door-prompt"),n=document.getElementById("door-name");if(e&&!pl.isOpen?(i.style.display="block",n.textContent=e.name,Vn.hasKey(e.id)?(i.classList.remove("locked"),Ps.interact&&(zi.tryOpenDoor(e.id,Vn),Vn.showNotification(`${e.name} Opened`))):(i.classList.add("locked"),n.textContent=`${e.name} (Locked)`)):i.style.display="none",Ue.bloodstainMesh){const s=.6+Math.sin(Date.now()*.005)*.3;Ue.bloodstainMesh.material.opacity=s}Ns.render()}gh();window.gameManager=Ue;window.player=ei;window.world=zi;window.itemManager=Vn;window.audioManager=Is;window.particleManager=Ds;
