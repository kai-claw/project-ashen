(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const kc="182",pu=0,ml=1,mu=2,da=1,qh=2,js=3,cn=0,ni=1,fe=2,Gi=0,fs=1,vi=2,gl=3,_l=4,gu=5,Nn=100,_u=101,xu=102,yu=103,vu=104,Mu=200,Su=201,bu=202,wu=203,Lr=204,kr=205,Tu=206,Au=207,Eu=208,Cu=209,Ru=210,Pu=211,Iu=212,Du=213,Lu=214,Nr=0,Or=1,Br=2,xs=3,Ur=4,Fr=5,zr=6,Gr=7,Xh=0,ku=1,Nu=2,Hi=0,$h=1,Yh=2,Kh=3,Nc=4,jh=5,Zh=6,Jh=7,xl="attached",Ou="detached",Qh=300,Un=301,ys=302,Hr=303,Vr=304,ka=306,Wi=1e3,Fi=1001,ya=1002,He=1003,td=1004,Zs=1005,ze=1006,ua=1007,on=1008,ui=1009,ed=1010,id=1011,ro=1012,Oc=1013,qi=1014,bi=1015,pi=1016,Bc=1017,Uc=1018,co=1020,nd=35902,sd=35899,od=1021,ad=1022,fi=1023,ln=1026,Bn=1027,Fc=1028,zc=1029,vs=1030,Gc=1031,Hc=1033,fa=33776,pa=33777,ma=33778,ga=33779,Wr=35840,qr=35841,Xr=35842,$r=35843,Yr=36196,Kr=37492,jr=37496,Zr=37488,Jr=37489,Qr=37490,tc=37491,ec=37808,ic=37809,nc=37810,sc=37811,oc=37812,ac=37813,rc=37814,cc=37815,lc=37816,hc=37817,dc=37818,uc=37819,fc=37820,pc=37821,mc=36492,gc=36494,_c=36495,xc=36283,yc=36284,vc=36285,Mc=36286,rd=2200,cd=2201,Bu=2202,lo=2300,ho=2301,Ha=2302,ds=2400,us=2401,va=2402,Vc=2500,Uu=2501,Fu=0,ld=1,Sc=2,zu=3200,hd=0,Gu=1,xn="",Ie="srgb",Je="srgb-linear",Ma="linear",ge="srgb",qn=7680,yl=519,Hu=512,Vu=513,Wu=514,Wc=515,qu=516,Xu=517,qc=518,$u=519,bc=35044,vl="300 es",zi=2e3,Sa=2001;function dd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Yu(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function uo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ku(){const r=uo("canvas");return r.style.display="block",r}const Ml={};function ba(...r){const t="THREE."+r.shift();console.log(t,...r)}function Pt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function kt(...r){const t="THREE."+r.shift();console.error(t,...r)}function fo(...r){const t=r.join(" ");t in Ml||(Ml[t]=!0,Pt(...r))}function ju(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}class Hn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sl=1234567;const to=Math.PI/180,Ms=180/Math.PI;function wi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[r&255]+Ke[r>>8&255]+Ke[r>>16&255]+Ke[r>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function Kt(r,t,e){return Math.max(t,Math.min(e,r))}function Xc(r,t){return(r%t+t)%t}function Zu(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function Ju(r,t,e){return r!==t?(e-r)/(t-r):0}function eo(r,t,e){return(1-e)*r+e*t}function Qu(r,t,e,i){return eo(r,t,1-Math.exp(-e*i))}function tf(r,t=1){return t-Math.abs(Xc(r,t*2)-t)}function ef(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function nf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function sf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function of(r,t){return r+Math.random()*(t-r)}function af(r){return r*(.5-Math.random())}function rf(r){r!==void 0&&(Sl=r);let t=Sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cf(r){return r*to}function lf(r){return r*Ms}function hf(r){return(r&r-1)===0&&r!==0}function df(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function uf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ff(r,t,e,i,n){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),h=o((t+i)/2),d=s((t-i)/2),u=o((t-i)/2),f=s((i-t)/2),m=o((i-t)/2);switch(n){case"XYX":r.set(a*h,c*d,c*u,a*l);break;case"YZY":r.set(c*u,a*h,c*d,a*l);break;case"ZXZ":r.set(c*d,c*u,a*h,a*l);break;case"XZX":r.set(a*h,c*m,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*m,a*l);break;case"ZYZ":r.set(c*m,c*f,a*h,a*l);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ri(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _e(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qt={DEG2RAD:to,RAD2DEG:Ms,generateUUID:wi,clamp:Kt,euclideanModulo:Xc,mapLinear:Zu,inverseLerp:Ju,lerp:eo,damp:Qu,pingpong:tf,smoothstep:ef,smootherstep:nf,randInt:sf,randFloat:of,randFloatSpread:af,seededRandom:rf,degToRad:cf,radToDeg:lf,isPowerOfTwo:hf,ceilPowerOfTwo:df,floorPowerOfTwo:uf,setQuaternionFromProperEuler:ff,normalize:_e,denormalize:Ri};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pi{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let c=i[n+0],l=i[n+1],h=i[n+2],d=i[n+3],u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a<=0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a>=1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(d!==_||c!==u||l!==f||h!==m){let g=c*u+l*f+h*m+d*_;g<0&&(u=-u,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const x=Math.acos(g),y=Math.sin(x);p=Math.sin(p*x)/y,a=Math.sin(a*x)/y,c=c*p+u*a,l=l*p+f*a,h=h*p+m*a,d=d*p+_*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+m*a,d=d*p+_*a;const x=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=x,l*=x,h*=x,d*=x}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,o){const a=i[n],c=i[n+1],l=i[n+2],h=i[n+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-a*f,t[e+2]=l*m+h*f+a*u-c*d,t[e+3]=h*m-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(n/2),d=a(s/2),u=c(i/2),f=c(n/2),m=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-n)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+n*l-s*c,this._y=n*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-n*a,this._w=o*h-i*a-n*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,i=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*n-a*i),h=2*(a*e-s*n),d=2*(s*i-o*e);return this.x=e+c*l+o*d-a*h,this.y=i+c*h+a*l-s*d,this.z=n+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=n*c-s*a,this.y=s*o-i*c,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new b,bl=new Pi;class qt{constructor(t,e,i,n,s,o,a,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,c,l)}set(t,e,i,n,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],_=n[0],g=n[3],p=n[6],x=n[1],y=n[4],v=n[7],w=n[2],E=n[5],C=n[8];return s[0]=o*_+a*x+c*w,s[3]=o*g+a*y+c*E,s[6]=o*p+a*v+c*C,s[1]=l*_+h*x+d*w,s[4]=l*g+h*y+d*E,s[7]=l*p+h*v+d*C,s[2]=u*_+f*x+m*w,s[5]=u*g+f*y+m*E,s[8]=u*p+f*v+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*s*h+i*a*c+n*s*l-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,f=l*s-o*c,m=e*d+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(n*l-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=u*_,t[4]=(h*e-n*c)*_,t[5]=(n*s-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-n*l,n*c,-n*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new qt,wl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pf(){const r={enabled:!0,workingColorSpace:Je,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(n.r=rn(n.r),n.g=rn(n.g),n.b=rn(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(n.r=ps(n.r),n.g=ps(n.g),n.b=ps(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xn?Ma:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Je]:{primaries:t,whitePoint:i,transfer:Ma,toXYZ:wl,fromXYZ:Tl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:wl,fromXYZ:Tl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),r}const se=pf();function rn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xn;class mf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xn===void 0&&(Xn=uo("canvas")),Xn.width=t.width,Xn.height=t.height;const n=Xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Xn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=uo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=rn(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(rn(e[i]/255)*255):e[i]=rn(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gf=0;class $c{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(qa(n[o].image)):s.push(qa(n[o]))}else s=qa(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}let _f=0;const Xa=new b;class We extends Hn{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=Fi,n=Fi,s=ze,o=on,a=fi,c=ui,l=We.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=wi(),this.name="",this.source=new $c(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Qh;We.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,n=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(f+1)/2,w=(p+1)/2,E=(h+u)/4,C=(d+_)/4,I=(m+g)/4;return y>v&&y>w?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=E/i,s=C/i):v>w?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=E/n,s=I/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=C/s,n=I/s),this.set(i,n,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends Hn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const n={width:t,height:e,depth:i.depth},s=new We(n);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new $c(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends xf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ud extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=He,this.minFilter=He,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yf extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=He,this.minFilter=He,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ai):Ai.fromBufferAttribute(s,o),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}const n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Po.subVectors(this.max,Os),$n.subVectors(t.a,Os),Yn.subVectors(t.b,Os),Kn.subVectors(t.c,Os),dn.subVectors(Yn,$n),un.subVectors(Kn,Yn),wn.subVectors($n,Kn);let e=[0,-dn.z,dn.y,0,-un.z,un.y,0,-wn.z,wn.y,dn.z,0,-dn.x,un.z,0,-un.x,wn.z,0,-wn.x,-dn.y,dn.x,0,-un.y,un.x,0,-wn.y,wn.x,0];return!$a(e,$n,Yn,Kn,Po)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,$n,Yn,Kn,Po))?!1:(Io.crossVectors(dn,un),e=[Io.x,Io.y,Io.z],$a(e,$n,Yn,Kn,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new b,new b,new b,new b,new b,new b,new b,new b],Ai=new b,Ro=new ri,$n=new b,Yn=new b,Kn=new b,dn=new b,un=new b,wn=new b,Os=new b,Po=new b,Io=new b,Tn=new b;function $a(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Tn.fromArray(r,s);const a=n.x*Math.abs(Tn.x)+n.y*Math.abs(Tn.y)+n.z*Math.abs(Tn.z),c=t.dot(Tn),l=e.dot(Tn),h=i.dot(Tn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const vf=new ri,Bs=new b,Ya=new b;class Yi{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):vf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Bs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Ya)),this.expandByPoint(Bs.copy(t.center).sub(Ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Qi=new b,Ka=new b,Do=new b,fn=new b,ja=new b,Lo=new b,Za=new b;class Na{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ka.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Ka);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Do),a=fn.dot(this.direction),c=-fn.dot(Do),l=fn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=s*h,d>=0)if(u>=-m)if(u<=m){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ka).addScaledVector(Do,u),f}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);const i=Qi.dot(this.direction),n=Qi.dot(Qi)-i*i,s=t.radius*t.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||a>n)||((a>i||i!==i)&&(i=a),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,i,n,s){ja.subVectors(e,t),Lo.subVectors(i,t),Za.crossVectors(ja,Lo);let o=this.direction.dot(Za),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,t);const c=a*this.direction.dot(Lo.crossVectors(fn,Lo));if(c<0)return null;const l=a*this.direction.dot(ja.cross(fn));if(l<0||c+l>o)return null;const h=-a*fn.dot(Za);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(t,e,i,n,s,o,a,c,l,h,d,u,f,m,_,g){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,c,l,h,d,u,f,m,_,g)}set(t,e,i,n,s,o,a,c,l,h,d,u,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,n=1/jn.setFromMatrixColumn(t,0).length(),s=1/jn.setFromMatrixColumn(t,1).length(),o=1/jn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,m=l*h,_=l*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,m=l*h,_=l*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,_=a*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mf,t,Sf)}lookAt(t,e,i){const n=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),pn.crossVectors(i,hi),pn.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),pn.crossVectors(i,hi)),pn.normalize(),ko.crossVectors(hi,pn),n[0]=pn.x,n[4]=ko.x,n[8]=hi.x,n[1]=pn.y,n[5]=ko.y,n[9]=hi.y,n[2]=pn.z,n[6]=ko.z,n[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],x=i[3],y=i[7],v=i[11],w=i[15],E=n[0],C=n[4],I=n[8],M=n[12],T=n[1],P=n[5],O=n[9],B=n[13],W=n[2],H=n[6],q=n[10],G=n[14],j=n[3],ot=n[7],at=n[11],ft=n[15];return s[0]=o*E+a*T+c*W+l*j,s[4]=o*C+a*P+c*H+l*ot,s[8]=o*I+a*O+c*q+l*at,s[12]=o*M+a*B+c*G+l*ft,s[1]=h*E+d*T+u*W+f*j,s[5]=h*C+d*P+u*H+f*ot,s[9]=h*I+d*O+u*q+f*at,s[13]=h*M+d*B+u*G+f*ft,s[2]=m*E+_*T+g*W+p*j,s[6]=m*C+_*P+g*H+p*ot,s[10]=m*I+_*O+g*q+p*at,s[14]=m*M+_*B+g*G+p*ft,s[3]=x*E+y*T+v*W+w*j,s[7]=x*C+y*P+v*H+w*ot,s[11]=x*I+y*O+v*q+w*at,s[15]=x*M+y*B+v*G+w*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],x=c*f-l*u,y=a*f-l*d,v=a*u-c*d,w=o*f-l*h,E=o*u-c*h,C=o*d-a*h;return e*(_*x-g*y+p*v)-i*(m*x-g*w+p*E)+n*(m*y-_*w+p*C)-s*(m*v-_*E+g*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=d*g*l-_*u*l+_*c*f-a*g*f-d*c*p+a*u*p,y=m*u*l-h*g*l-m*c*f+o*g*f+h*c*p-o*u*p,v=h*_*l-m*d*l+m*a*f-o*_*f-h*a*p+o*d*p,w=m*d*c-h*_*c-m*a*u+o*_*u+h*a*g-o*d*g,E=e*x+i*y+n*v+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=x*C,t[1]=(_*u*s-d*g*s-_*n*f+i*g*f+d*n*p-i*u*p)*C,t[2]=(a*g*s-_*c*s+_*n*l-i*g*l-a*n*p+i*c*p)*C,t[3]=(d*c*s-a*u*s-d*n*l+i*u*l+a*n*f-i*c*f)*C,t[4]=y*C,t[5]=(h*g*s-m*u*s+m*n*f-e*g*f-h*n*p+e*u*p)*C,t[6]=(m*c*s-o*g*s-m*n*l+e*g*l+o*n*p-e*c*p)*C,t[7]=(o*u*s-h*c*s+h*n*l-e*u*l-o*n*f+e*c*f)*C,t[8]=v*C,t[9]=(m*d*s-h*_*s-m*i*f+e*_*f+h*i*p-e*d*p)*C,t[10]=(o*_*s-m*a*s+m*i*l-e*_*l-o*i*p+e*a*p)*C,t[11]=(h*a*s-o*d*s-h*i*l+e*d*l+o*i*f-e*a*f)*C,t[12]=w*C,t[13]=(h*_*n-m*d*n+m*i*u-e*_*u-h*i*g+e*d*g)*C,t[14]=(m*a*n-o*_*n-m*i*c+e*_*c+o*i*g-e*a*g)*C,t[15]=(o*d*n-h*a*n+h*i*c-e*d*c-o*i*u+e*a*u)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-n*c,l*c+n*a,0,l*a+n*c,h*a+i,h*c-n*o,0,l*c-n*a,h*c+n*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,f=s*h,m=s*d,_=o*h,g=o*d,p=a*d,x=c*l,y=c*h,v=c*d,w=i.x,E=i.y,C=i.z;return n[0]=(1-(_+p))*w,n[1]=(f+v)*w,n[2]=(m-y)*w,n[3]=0,n[4]=(f-v)*E,n[5]=(1-(u+p))*E,n[6]=(g+x)*E,n[7]=0,n[8]=(m+y)*C,n[9]=(g-x)*C,n[10]=(1-(u+_))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;if(t.x=n[12],t.y=n[13],t.z=n[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let s=jn.set(n[0],n[1],n[2]).length();const o=jn.set(n[4],n[5],n[6]).length(),a=jn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),Ei.copy(this);const l=1/s,h=1/o,d=1/a;return Ei.elements[0]*=l,Ei.elements[1]*=l,Ei.elements[2]*=l,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,e.setFromRotationMatrix(Ei),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,n,s,o,a=zi,c=!1){const l=this.elements,h=2*s/(e-t),d=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n);let m,_;if(c)m=s/(o-s),_=o*s/(o-s);else if(a===zi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Sa)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=zi,c=!1){const l=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n);let m,_;if(c)m=1/(o-s),_=o/(o-s);else if(a===zi)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Sa)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const jn=new b,Ei=new Gt,Mf=new b(0,0,0),Sf=new b(1,1,1),pn=new b,ko=new b,hi=new b,Al=new Gt,El=new Pi;class Xi{constructor(t=0,e=0,i=0,n=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],o=n[4],a=n[8],c=n[1],l=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return El.setFromEuler(this),this.setFromQuaternion(El,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class fd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bf=0;const Cl=new b,Zn=new Pi,tn=new Gt,No=new b,Us=new b,wf=new b,Tf=new Pi,Rl=new b(1,0,0),Pl=new b(0,1,0),Il=new b(0,0,1),Dl={type:"added"},Af={type:"removed"},Jn={type:"childadded",child:null},Ja={type:"childremoved",child:null};class Ce extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new b,e=new Xi,i=new Pi,n=new b(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Gt},normalMatrix:{value:new qt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.premultiply(Zn),this}rotateX(t){return this.rotateOnAxis(Rl,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,e){return Cl.copy(t).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rl,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?No.copy(t):No.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Us,No,this.up):tn.lookAt(No,Us,this.up),this.quaternion.setFromRotationMatrix(tn),n&&(tn.extractRotation(n.matrixWorld),Zn.setFromRotationMatrix(tn),this.quaternion.premultiply(Zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Af),Ja.child=t,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];n.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Ce.DEFAULT_UP=new b(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new b,en=new b,Qa=new b,nn=new b,Qn=new b,ts=new b,Ll=new b,tr=new b,er=new b,ir=new b,nr=new Ee,sr=new Ee,or=new Ee;class Si{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ci.subVectors(t,e),n.cross(Ci);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ci.subVectors(n,e),en.subVectors(i,e),Qa.subVectors(t,e);const o=Ci.dot(Ci),a=Ci.dot(en),c=Ci.dot(Qa),l=en.dot(en),h=en.dot(Qa),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(t,e,i,n,s,o,a,c){return this.getBarycoord(t,e,i,n,nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,nn.x),c.addScaledVector(o,nn.y),c.addScaledVector(a,nn.z),c)}static getInterpolatedAttribute(t,e,i,n,s,o){return nr.setScalar(0),sr.setScalar(0),or.setScalar(0),nr.fromBufferAttribute(t,e),sr.fromBufferAttribute(t,i),or.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(nr,s.x),o.addScaledVector(sr,s.y),o.addScaledVector(or,s.z),o}static isFrontFacing(t,e,i,n){return Ci.subVectors(i,e),en.subVectors(t,e),Ci.cross(en).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ci.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Si.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let o,a;Qn.subVectors(n,i),ts.subVectors(s,i),tr.subVectors(t,i);const c=Qn.dot(tr),l=ts.dot(tr);if(c<=0&&l<=0)return e.copy(i);er.subVectors(t,n);const h=Qn.dot(er),d=ts.dot(er);if(h>=0&&d<=h)return e.copy(n);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Qn,o);ir.subVectors(t,s);const f=Qn.dot(ir),m=ts.dot(ir);if(m>=0&&f<=m)return e.copy(s);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(ts,a);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Ll.subVectors(s,n),a=(d-h)/(d-h+(f-m)),e.copy(n).addScaledVector(Ll,a);const p=1/(g+_+u);return o=_*p,a=u*p,e.copy(i).addScaledVector(Qn,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function ar(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=se.workingColorSpace){if(t=Xc(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ar(o,s,t+1/3),this.g=ar(o,s,t),this.b=ar(o,s,t-1/3)}return se.colorSpaceToWorking(this,n),this}setStyle(t,e=Ie){function i(s){s!==void 0&&parseFloat(s)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const i=pd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rn(t.r),this.g=rn(t.g),this.b=rn(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return se.workingToColorSpace(je.copy(this),t),Math.round(Kt(je.r*255,0,255))*65536+Math.round(Kt(je.g*255,0,255))*256+Math.round(Kt(je.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(je.copy(this),e);const i=je.r,n=je.g,s=je.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(n-s)/d+(n<s?6:0);break;case n:c=(s-i)/d+2;break;case s:c=(i-n)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ie){se.workingToColorSpace(je.copy(this),t);const e=je.r,i=je.g,n=je.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(Oo);const i=eo(mn.h,Oo.h,e),n=eo(mn.s,Oo.s,e),s=eo(mn.l,Oo.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new vt;vt.NAMES=pd;let Ef=0;class Ii extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=fs,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lr,this.blendDst=kr,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lr&&(i.blendSrc=this.blendSrc),this.blendDst!==kr&&(i.blendDst=this.blendDst),this.blendEquation!==Nn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $t extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new b,Bo=new st;let Cf=0;class Ue{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bc,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}}class md extends Ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class gd extends Ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends Ue{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Rf=0;const gi=new Gt,rr=new Ce,es=new b,di=new ri,Fs=new ri,$e=new b;class Ae extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dd(t)?gd:md)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,i){return gi.makeTranslation(t,e,i),this.applyMatrix4(gi),this}scale(t,e,i){return gi.makeScale(t,e,i),this.applyMatrix4(gi),this}lookAt(t){return rr.lookAt(t),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(di.min,Fs.min),di.expandByPoint($e),$e.addVectors(di.max,Fs.max),di.expandByPoint($e)):(di.expandByPoint(Fs.min),di.expandByPoint(Fs.max))}di.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)$e.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared($e));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)$e.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(t,l),$e.add(es)),n=Math.max(n,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new b,c[I]=new b;const l=new b,h=new b,d=new b,u=new st,f=new st,m=new st,_=new b,g=new b;function p(I,M,T){l.fromBufferAttribute(i,I),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,T),u.fromBufferAttribute(s,I),f.fromBufferAttribute(s,M),m.fromBufferAttribute(s,T),h.sub(l),d.sub(l),f.sub(u),m.sub(u);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[I].add(_),a[M].add(_),a[T].add(_),c[I].add(g),c[M].add(g),c[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,M=x.length;I<M;++I){const T=x[I],P=T.start,O=T.count;for(let B=P,W=P+O;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new b,v=new b,w=new b,E=new b;function C(I){w.fromBufferAttribute(n,I),E.copy(w);const M=a[I];y.copy(M),y.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(E,M);const P=v.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,M=x.length;I<M;++I){const T=x[I],P=T.start,O=T.count;for(let B=P,W=P+O;B<W;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new b,s=new b,o=new b,a=new b,c=new b,l=new b,h=new b,d=new b;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);n.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new Ue(u,h,d)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,i=this.index.array,n=this.attributes;for(const a in n){const c=n[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(n[c]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kl=new Gt,An=new Na,Uo=new Yi,Nl=new b,Fo=new b,zo=new b,Go=new b,cr=new b,Ho=new b,Ol=new b,Vo=new b;class D extends Ce{constructor(t=new Ae,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(s&&a){Ho.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(cr.fromBufferAttribute(d,t),o?Ho.addScaledVector(cr,h):Ho.addScaledVector(cr.sub(e),h))}e.add(Ho)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(s),An.copy(t.ray).recast(t.near),!(Uo.containsPoint(An.origin)===!1&&(An.intersectSphere(Uo,Nl)===null||An.origin.distanceToSquared(Nl)>(t.far-t.near)**2))&&(kl.copy(s).invert(),An.copy(t.ray).applyMatrix4(kl),!(i.boundingBox!==null&&An.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,An)))}_computeIntersections(t,e,i){let n;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,w=y;v<w;v+=3){const E=a.getX(v),C=a.getX(v+1),I=a.getX(v+2);n=Wo(this,p,t,i,l,h,d,E,C,I),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);n=Wo(this,o,t,i,l,h,d,x,y,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,w=y;v<w;v+=3){const E=v,C=v+1,I=v+2;n=Wo(this,p,t,i,l,h,d,E,C,I),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,y=g+1,v=g+2;n=Wo(this,o,t,i,l,h,d,x,y,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}}function Pf(r,t,e,i,n,s,o,a){let c;if(t.side===ni?c=i.intersectTriangle(o,s,n,!0,a):c=i.intersectTriangle(n,s,o,t.side===cn,a),c===null)return null;Vo.copy(a),Vo.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Vo);return l<e.near||l>e.far?null:{distance:l,point:Vo.clone(),object:r}}function Wo(r,t,e,i,n,s,o,a,c,l){r.getVertexPosition(a,Fo),r.getVertexPosition(c,zo),r.getVertexPosition(l,Go);const h=Pf(r,t,e,i,Fo,zo,Go,Ol);if(h){const d=new b;Si.getBarycoord(Ol,Fo,zo,Go,d),n&&(h.uv=Si.getInterpolatedAttribute(n,a,c,l,d,new st)),s&&(h.uv1=Si.getInterpolatedAttribute(s,a,c,l,d,new st)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,c,l,d,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new b,materialIndex:0};Si.getNormal(Fo,zo,Go,u.normal),h.face=u,h.barycoord=d}return h}class Lt extends Ae{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,s,0),m("z","y","x",1,-1,i,e,-t,o,s,1),m("x","z","y",1,1,t,i,e,n,o,2),m("x","z","y",1,-1,t,i,-e,n,o,3),m("x","y","z",1,-1,t,e,i,n,s,4),m("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function m(_,g,p,x,y,v,w,E,C,I,M){const T=v/C,P=w/I,O=v/2,B=w/2,W=E/2,H=C+1,q=I+1;let G=0,j=0;const ot=new b;for(let at=0;at<q;at++){const ft=at*P-B;for(let Bt=0;Bt<H;Bt++){const Nt=Bt*T-O;ot[_]=Nt*x,ot[g]=ft*y,ot[p]=W,l.push(ot.x,ot.y,ot.z),ot[_]=0,ot[g]=0,ot[p]=E>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(Bt/C),d.push(1-at/I),G+=1}}for(let at=0;at<I;at++)for(let ft=0;ft<C;ft++){const Bt=u+ft+H*at,Nt=u+ft+H*(at+1),ye=u+(ft+1)+H*(at+1),he=u+(ft+1)+H*at;c.push(Bt,Nt,he),c.push(Nt,ye,he),j+=6}a.addGroup(f,j,M),f+=j,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ei(r){const t={};for(let e=0;e<r.length;e++){const i=Ss(r[e]);for(const n in i)t[n]=i[n]}return t}function If(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function _d(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const wa={clone:Ss,merge:ei};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=If(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xd extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new b,Bl=new st,Ul=new st;class ii extends xd{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,Bl,Ul),e.subVectors(Ul,Bl)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(to*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*n/c,e-=o.offsetY*i/l,n*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ns=1;class kf extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ii(is,ns,t,e);n.layers=this.layers,this.add(n);const s=new ii(is,ns,t,e);s.layers=this.layers,this.add(s);const o=new ii(is,ns,t,e);o.layers=this.layers,this.add(o);const a=new ii(is,ns,t,e);a.layers=this.layers,this.add(a);const c=new ii(is,ns,t,e);c.layers=this.layers,this.add(c);const l=new ii(is,ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class yd extends We{constructor(t=[],e=Un,i,n,s,o,a,c,l,h){super(t,e,i,n,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vd extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new yd(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Lt(5,5,5),s=new Ye({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:Gi});s.uniforms.tEquirect.value=e;const o=new D(n,s),a=e.minFilter;return e.minFilter===on&&(e.minFilter=ze),new kf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}}class zt extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nf={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return a!==null&&(a.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Of extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new b;class bs{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ti.fromBufferAttribute(this,e),ti.applyMatrix4(t),this.setXYZ(e,ti.x,ti.y,ti.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ti.fromBufferAttribute(this,e),ti.applyNormalMatrix(t),this.setXYZ(e,ti.x,ti.y,ti.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ti.fromBufferAttribute(this,e),ti.transformDirection(t),this.setXYZ(e,ti.x,ti.y,ti.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ri(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new bs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Md extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ss;const zs=new b,os=new b,as=new b,rs=new st,Gs=new st,Sd=new Gt,qo=new b,Hs=new b,Xo=new b,Fl=new st,hr=new st,zl=new st;class Bf extends Ce{constructor(t=new Md){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Yc(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new bs(i,3,0,!1)),ss.setAttribute("uv",new bs(i,2,3,!1))}this.geometry=ss,this.material=t,this.center=new st(.5,.5),this.count=1}raycast(t,e){t.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Sd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-as.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const o=this.center;$o(qo.set(-.5,-.5,0),as,o,os,n,s),$o(Hs.set(.5,-.5,0),as,o,os,n,s),$o(Xo.set(.5,.5,0),as,o,os,n,s),Fl.set(0,0),hr.set(1,0),zl.set(1,1);let a=t.ray.intersectTriangle(qo,Hs,Xo,!1,zs);if(a===null&&($o(Hs.set(-.5,.5,0),as,o,os,n,s),hr.set(0,1),a=t.ray.intersectTriangle(qo,Xo,Hs,!1,zs),a===null))return;const c=t.ray.origin.distanceTo(zs);c<t.near||c>t.far||e.push({distance:c,point:zs.clone(),uv:Si.getInterpolation(zs,qo,Hs,Xo,Fl,hr,zl,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $o(r,t,e,i,n,s){rs.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(Gs.x=s*rs.x-n*rs.y,Gs.y=n*rs.x+s*rs.y):Gs.copy(rs),r.copy(t),r.x+=Gs.x,r.y+=Gs.y,r.applyMatrix4(Sd)}const Gl=new b,Hl=new Ee,Vl=new Ee,Uf=new b,Wl=new Gt,Yo=new b,dr=new Yi,ql=new Gt,ur=new Na;class Ff extends D{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xl,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Yo),this.boundingBox.expandByPoint(Yo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Yo),this.boundingSphere.expandByPoint(Yo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),t.ray.intersectsSphere(dr)!==!1&&(ql.copy(n).invert(),ur.copy(t.ray).applyMatrix4(ql),!(this.boundingBox!==null&&ur.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ur)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ee,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===xl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ou?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;Hl.fromBufferAttribute(n.attributes.skinIndex,t),Vl.fromBufferAttribute(n.attributes.skinWeight,t),Gl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Vl.getComponent(s);if(o!==0){const a=Hl.getComponent(s);Wl.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(Uf.copy(Gl).applyMatrix4(Wl),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class bd extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kc extends We{constructor(t=null,e=1,i=1,n,s,o,a,c,l=He,h=He,d,u){super(null,o,a,c,l,h,n,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xl=new Gt,zf=new Gt;class jc{constructor(t=[],e=[]){this.uuid=wi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Pt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Gt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:zf;Xl.multiplyMatrices(a,e[s]),Xl.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new jc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Kc(e,t,t,fi,bi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const s=t.bones[i];let o=e[s];o===void 0&&(Pt("Skeleton: No bone found with UUID:",s),o=new bd),this.bones.push(o),this.boneInverses.push(new Gt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){const o=e[n];t.bones.push(o.uuid);const a=i[n];t.boneInverses.push(a.toArray())}return t}}class wc extends Ue{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cs=new Gt,$l=new Gt,Ko=[],Yl=new ri,Gf=new Gt,Vs=new D,Ws=new Yi;class Ln extends D{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Gf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),Yl.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(Yl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),Ws.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(i),t.ray.intersectsSphere(Ws)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,cs),$l.multiplyMatrices(i,cs),Vs.matrixWorld=$l,Vs.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){const c=Ko[o];c.instanceId=s,c.object=this,e.push(c)}Ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Kc(new Float32Array(n*this.count),n,this.count,Fc,bi));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=n*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fr=new b,Hf=new b,Vf=new qt;class kn{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=fr.subVectors(i,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(fr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Vf.getNormalMatrix(t),n=this.coplanarPoint(fr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const En=new Yi,Wf=new st(.5,.5),jo=new b;class Zc{constructor(t=new kn,e=new kn,i=new kn,n=new kn,s=new kn,o=new kn){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zi,i=!1){const n=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],x=s[12],y=s[13],v=s[14],w=s[15];if(n[0].setComponents(l-o,f-h,p-m,w-x).normalize(),n[1].setComponents(l+o,f+h,p+m,w+x).normalize(),n[2].setComponents(l+a,f+d,p+_,w+y).normalize(),n[3].setComponents(l-a,f-d,p-_,w-y).normalize(),i)n[4].setComponents(c,u,g,v).normalize(),n[5].setComponents(l-c,f-u,p-g,w-v).normalize();else if(n[4].setComponents(l-c,f-u,p-g,w-v).normalize(),e===zi)n[5].setComponents(l+c,f+u,p+g,w+v).normalize();else if(e===Sa)n[5].setComponents(c,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(t){En.center.set(0,0,0);const e=Wf.distanceTo(t.center);return En.radius=.7071067811865476+e,En.applyMatrix4(t.matrixWorld),this.intersectsSphere(En)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(jo.x=n.normal.x>0?t.max.x:t.min.x,jo.y=n.normal.y>0?t.max.y:t.min.y,jo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wd extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ta=new b,Aa=new b,Kl=new Gt,qs=new Na,Zo=new Yi,pr=new b,jl=new b;class Jc extends Ce{constructor(t=new Ae,e=new wd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Ta.fromBufferAttribute(e,n-1),Aa.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Ta.distanceTo(Aa);t.setAttribute("lineDistance",new ie(i,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(n),Zo.radius+=s,t.ray.intersectsSphere(Zo)===!1)return;Kl.copy(n).invert(),qs.copy(t.ray).applyMatrix4(Kl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),x=h.getX(_+1),y=Jo(this,t,qs,c,p,x,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Jo(this,t,qs,c,_,g,m-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=Jo(this,t,qs,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Jo(this,t,qs,c,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jo(r,t,e,i,n,s,o){const a=r.geometry.attributes.position;if(Ta.fromBufferAttribute(a,n),Aa.fromBufferAttribute(a,s),e.distanceSqToSegment(Ta,Aa,pr,jl)>i)return;pr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(pr);if(!(l<t.near||l>t.far))return{distance:l,point:jl.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Zl=new b,Jl=new b;class qf extends Jc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Zl.fromBufferAttribute(e,n),Jl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Zl.distanceTo(Jl);t.setAttribute("lineDistance",new ie(i,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xf extends Jc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Oa extends Ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ql=new Gt,Tc=new Na,Qo=new Yi,ta=new b;class Qc extends Ce{constructor(t=new Ae,e=new Oa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(n),Qo.radius+=s,t.ray.intersectsSphere(Qo)===!1)return;Ql.copy(n).invert(),Tc.copy(t.ray).applyMatrix4(Ql);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=u,_=f;m<_;m++){const g=l.getX(m);ta.fromBufferAttribute(d,g),th(ta,g,c,n,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,_=f;m<_;m++)ta.fromBufferAttribute(d,m),th(ta,m,c,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function th(r,t,e,i,n,s,o){const a=Tc.distanceSqToPoint(r);if(a<e){const c=new b;Tc.closestPointToPoint(r,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Td extends We{constructor(t,e,i,n,s,o,a,c,l){super(t,e,i,n,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class po extends We{constructor(t,e,i=qi,n,s,o,a=He,c=He,l,h=ln,d=1){if(h!==ln&&h!==Bn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,n,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $c(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $f extends po{constructor(t,e=qi,i=Un,n,s,o=He,a=He,c,l=ln){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ad extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class De extends Ae{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,m=i*2+s,_=n+1,g=new b,p=new b;for(let x=0;x<=m;x++){let y=0,v=0,w=0,E=0;if(x<=i){const M=x/i,T=M*Math.PI/2;v=-h-t*Math.cos(T),w=t*Math.sin(T),E=-t*Math.cos(T),y=M*d}else if(x<=i+s){const M=(x-i)/s;v=-h+M*e,w=t,E=0,y=d+M*u}else{const M=(x-i-s)/i,T=M*Math.PI/2;v=h+t*Math.sin(T),w=t*Math.cos(T),E=t*Math.sin(T),y=d+u+M*d}const C=Math.max(0,Math.min(1,y/f));let I=0;x===0?I=.5/n:x===m&&(I=-.5/n);for(let M=0;M<=n;M++){const T=M/n,P=T*Math.PI*2,O=Math.sin(P),B=Math.cos(P);p.x=-w*B,p.y=v,p.z=w*O,a.push(p.x,p.y,p.z),g.set(-w*B,E,w*O),g.normalize(),c.push(g.x,g.y,g.z),l.push(T+I,C)}if(x>0){const M=(x-1)*_;for(let T=0;T<n;T++){const P=M+T,O=M+T+1,B=x*_+T,W=x*_+T+1;o.push(P,O,B),o.push(O,W,B)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Fn extends Ae{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new b,h=new st;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*n;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class re extends Ae{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],f=[];let m=0;const _=[],g=i/2;let p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function x(){const v=new b,w=new b;let E=0;const C=(e-t)/i;for(let I=0;I<=s;I++){const M=[],T=I/s,P=T*(e-t)+t;for(let O=0;O<=n;O++){const B=O/n,W=B*c+a,H=Math.sin(W),q=Math.cos(W);w.x=P*H,w.y=-T*i+g,w.z=P*q,d.push(w.x,w.y,w.z),v.set(H,C,q).normalize(),u.push(v.x,v.y,v.z),f.push(B,1-T),M.push(m++)}_.push(M)}for(let I=0;I<n;I++)for(let M=0;M<s;M++){const T=_[M][I],P=_[M+1][I],O=_[M+1][I+1],B=_[M][I+1];(t>0||M!==0)&&(h.push(T,P,B),E+=3),(e>0||M!==s-1)&&(h.push(P,O,B),E+=3)}l.addGroup(p,E,0),p+=E}function y(v){const w=m,E=new st,C=new b;let I=0;const M=v===!0?t:e,T=v===!0?1:-1;for(let O=1;O<=n;O++)d.push(0,g*T,0),u.push(0,T,0),f.push(.5,.5),m++;const P=m;for(let O=0;O<=n;O++){const W=O/n*c+a,H=Math.cos(W),q=Math.sin(W);C.x=M*q,C.y=g*T,C.z=M*H,d.push(C.x,C.y,C.z),u.push(0,T,0),E.x=H*.5+.5,E.y=q*.5*T+.5,f.push(E.x,E.y),m++}for(let O=0;O<n;O++){const B=w+O,W=P+O;v===!0?h.push(W,W+1,B):h.push(W+1,W,B),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ze extends re{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ze(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ps extends Ae{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],o=[];a(n),l(i),h(),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(s.slice(),3)),this.setAttribute("uv",new ie(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new b,v=new b,w=new b;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],v),f(e[E+2],w),c(y,v,w,x)}function c(x,y,v,w){const E=w+1,C=[];for(let I=0;I<=E;I++){C[I]=[];const M=x.clone().lerp(v,I/E),T=y.clone().lerp(v,I/E),P=E-I;for(let O=0;O<=P;O++)O===0&&I===E?C[I][O]=M:C[I][O]=M.clone().lerp(T,O/P)}for(let I=0;I<E;I++)for(let M=0;M<2*(E-I)-1;M++){const T=Math.floor(M/2);M%2===0?(u(C[I][T+1]),u(C[I+1][T]),u(C[I][T])):(u(C[I][T+1]),u(C[I+1][T+1]),u(C[I+1][T]))}}function l(x){const y=new b;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const x=new b;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=g(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;o.push(v,1-w)}m(),d()}function d(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],w=o[x+4],E=Math.max(y,v,w),C=Math.min(y,v,w);E>.9&&C<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),w<.2&&(o[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function m(){const x=new b,y=new b,v=new b,w=new b,E=new st,C=new st,I=new st;for(let M=0,T=0;M<s.length;M+=9,T+=6){x.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),E.set(o[T+0],o[T+1]),C.set(o[T+2],o[T+3]),I.set(o[T+4],o[T+5]),w.copy(x).add(y).add(v).divideScalar(3);const P=g(w);_(E,T+0,x,P),_(C,T+2,y,P),_(I,T+4,v,P)}}function _(x,y,v,w){w<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.vertices,t.indices,t.radius,t.detail)}}class mo extends Ps{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mo(t.radius,t.detail)}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(n=Math.floor(a+(c-a)/2),l=i[n]-o,l<0)a=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===o)return n/(s-1);const h=i[n],u=i[n+1]-h,f=(o-h)/u;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),a=this.getPoint(s),c=e||(o.isVector2?new st:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new b,n=[],s=[],o=[],a=new b,c=new Gt;for(let f=0;f<=t;f++){const m=f/t;n[f]=this.getTangentAt(m,new b)}s[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Kt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Kt(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(n[m],f*m)),o[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tl extends Ki{constructor(t=0,e=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new st){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Yf extends tl{constructor(t,e,i,n,s,o){super(t,e,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function el(){let r=0,t=0,e=0,i=0;function n(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){n(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,d){let u=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,n(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+i*a}}}const ea=new b,mr=new el,gr=new el,_r=new el;class Kf extends Ki{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new b){const i=e,n=this.points,s=n.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=n[(a-1)%s]:(ea.subVectors(n[0],n[1]).add(n[0]),l=ea);const d=n[a%s],u=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(ea.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),mr.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,_,g),gr.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,_,g),_r.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(mr.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),gr.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),_r.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(mr.calc(c),gr.calc(c),_r.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new b().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function eh(r,t,e,i,n){const s=(i-t)*.5,o=(n-e)*.5,a=r*r,c=r*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*r+e}function jf(r,t){const e=1-r;return e*e*t}function Zf(r,t){return 2*(1-r)*r*t}function Jf(r,t){return r*r*t}function io(r,t,e,i){return jf(r,t)+Zf(r,e)+Jf(r,i)}function Qf(r,t){const e=1-r;return e*e*e*t}function tp(r,t){const e=1-r;return 3*e*e*r*t}function ep(r,t){return 3*(1-r)*r*r*t}function ip(r,t){return r*r*r*t}function no(r,t,e,i,n){return Qf(r,t)+tp(r,e)+ep(r,i)+ip(r,n)}class Ed extends Ki{constructor(t=new st,e=new st,i=new st,n=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new st){const i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(no(t,n.x,s.x,o.x,a.x),no(t,n.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class np extends Ki{constructor(t=new b,e=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new b){const i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(no(t,n.x,s.x,o.x,a.x),no(t,n.y,s.y,o.y,a.y),no(t,n.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cd extends Ki{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sp extends Ki{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rd extends Ki{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(io(t,n.x,s.x,o.x),io(t,n.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class op extends Ki{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){const i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(io(t,n.x,s.x,o.x),io(t,n.y,s.y,o.y),io(t,n.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pd extends Ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,n=this.points,s=(n.length-1)*t,o=Math.floor(s),a=s-o,c=n[o===0?o:o-1],l=n[o],h=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(eh(a,c.x,l.x,h.x,d.x),eh(a,c.y,l.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new st().fromArray(n))}return this}}var ih=Object.freeze({__proto__:null,ArcCurve:Yf,CatmullRomCurve3:Kf,CubicBezierCurve:Ed,CubicBezierCurve3:np,EllipseCurve:tl,LineCurve:Cd,LineCurve3:sp,QuadraticBezierCurve:Rd,QuadraticBezierCurve3:op,SplineCurve:Pd});class ap extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ih[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const o=n[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const o=s[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new ih[n.type]().fromJSON(n))}return this}}class nh extends ap{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Cd(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new Rd(this.currentPoint.clone(),new st(t,e),new st(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,o){const a=new Ed(this.currentPoint.clone(),new st(t,e),new st(i,n),new st(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Pd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,n,s,o),this}absarc(t,e,i,n,s,o){return this.absellipse(t,e,i,i,n,s,o),this}ellipse(t,e,i,n,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,n,s,o,a,c),this}absellipse(t,e,i,n,s,o,a,c){const l=new tl(t,e,i,n,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ac extends nh{constructor(t){super(t),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new nh().fromJSON(n))}return this}}function rp(r,t,e=2){const i=t&&t.length,n=i?t[0]*e:r.length;let s=Id(r,0,n,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=up(r,t,s,e)),r.length>80*e){a=r[0],c=r[1];let h=a,d=c;for(let u=e;u<n;u+=e){const f=r[u],m=r[u+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>d&&(d=m)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return go(s,o,e,a,c,l,0),o}function Id(r,t,e,i,n){let s;if(n===bp(r,t,e,i)>0)for(let o=t;o<e;o+=i)s=sh(o/i|0,r[o],r[o+1],s);else for(let o=e-i;o>=t;o-=i)s=sh(o/i|0,r[o],r[o+1],s);return s&&ws(s,s.next)&&(xo(s),s=s.next),s}function zn(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(ws(e,e.next)||Le(e.prev,e,e.next)===0)){if(xo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function go(r,t,e,i,n,s,o){if(!r)return;!o&&s&&_p(r,i,n,s);let a=r;for(;r.prev!==r.next;){const c=r.prev,l=r.next;if(s?lp(r,i,n,s):cp(r)){t.push(c.i,r.i,l.i),xo(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=hp(zn(r),t),go(r,t,e,i,n,s,2)):o===2&&dp(r,t,e,i,n,s):go(zn(r),t,e,i,n,s,1);break}}}function cp(r){const t=r.prev,e=r,i=r.next;if(Le(t,e,i)>=0)return!1;const n=t.x,s=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(n,s,o),d=Math.min(a,c,l),u=Math.max(n,s,o),f=Math.max(a,c,l);let m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Js(n,a,s,c,o,l,m.x,m.y)&&Le(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function lp(r,t,e,i){const n=r.prev,s=r,o=r.next;if(Le(n,s,o)>=0)return!1;const a=n.x,c=s.x,l=o.x,h=n.y,d=s.y,u=o.y,f=Math.min(a,c,l),m=Math.min(h,d,u),_=Math.max(a,c,l),g=Math.max(h,d,u),p=Ec(f,m,t,e,i),x=Ec(_,g,t,e,i);let y=r.prevZ,v=r.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==n&&y!==o&&Js(a,h,c,d,l,u,y.x,y.y)&&Le(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==n&&v!==o&&Js(a,h,c,d,l,u,v.x,v.y)&&Le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==n&&y!==o&&Js(a,h,c,d,l,u,y.x,y.y)&&Le(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==n&&v!==o&&Js(a,h,c,d,l,u,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hp(r,t){let e=r;do{const i=e.prev,n=e.next.next;!ws(i,n)&&Ld(i,e,e.next,n)&&_o(i,n)&&_o(n,i)&&(t.push(i.i,e.i,n.i),xo(e),xo(e.next),e=r=n),e=e.next}while(e!==r);return zn(e)}function dp(r,t,e,i,n,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vp(o,a)){let c=kd(o,a);o=zn(o,o.next),c=zn(c,c.next),go(o,t,e,i,n,s,0),go(c,t,e,i,n,s,0);return}a=a.next}o=o.next}while(o!==r)}function up(r,t,e,i){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,c=s<o-1?t[s+1]*i:r.length,l=Id(r,a,c,i,!1);l===l.next&&(l.steiner=!0),n.push(yp(l))}n.sort(fp);for(let s=0;s<n.length;s++)e=pp(n[s],e);return e}function fp(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function pp(r,t){const e=mp(r,t);if(!e)return t;const i=kd(e,r);return zn(i,i.next),zn(e,e.next)}function mp(r,t){let e=t;const i=r.x,n=r.y;let s=-1/0,o;if(ws(r,e))return e;do{if(ws(r,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const d=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Dd(n<l?i:s,n,c,l,n<l?s:i,n,e.x,e.y)){const d=Math.abs(n-e.y)/(i-e.x);_o(e,r)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&gp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function gp(r,t){return Le(r.prev,r,t.prev)<0&&Le(t.next,r,r.next)<0}function _p(r,t,e,i){let n=r;do n.z===0&&(n.z=Ec(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,xp(n)}function xp(r){let t,e=1;do{let i=r,n;r=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,c--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=o}s.nextZ=null,e*=2}while(t>1);return r}function Ec(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function yp(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Dd(r,t,e,i,n,s,o,a){return(n-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(n-o)*(i-a)}function Js(r,t,e,i,n,s,o,a){return!(r===o&&t===a)&&Dd(r,t,e,i,n,s,o,a)}function vp(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Mp(r,t)&&(_o(r,t)&&_o(t,r)&&Sp(r,t)&&(Le(r.prev,r,t.prev)||Le(r,t.prev,t))||ws(r,t)&&Le(r.prev,r,r.next)>0&&Le(t.prev,t,t.next)>0)}function Le(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ws(r,t){return r.x===t.x&&r.y===t.y}function Ld(r,t,e,i){const n=na(Le(r,t,e)),s=na(Le(r,t,i)),o=na(Le(e,i,r)),a=na(Le(e,i,t));return!!(n!==s&&o!==a||n===0&&ia(r,e,t)||s===0&&ia(r,i,t)||o===0&&ia(e,r,i)||a===0&&ia(e,t,i))}function ia(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function na(r){return r>0?1:r<0?-1:0}function Mp(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Ld(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function _o(r,t){return Le(r.prev,r,r.next)<0?Le(r,t,r.next)>=0&&Le(r,r.prev,t)>=0:Le(r,t,r.prev)<0||Le(r,r.next,t)<0}function Sp(r,t){let e=r,i=!1;const n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function kd(r,t){const e=Cc(r.i,r.x,r.y),i=Cc(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function sh(r,t,e,i){const n=Cc(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function xo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Cc(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bp(r,t,e,i){let n=0;for(let s=t,o=e-i;s<e;s+=i)n+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return n}class wp{static triangulate(t,e,i=2){return rp(t,e,i)}}class so{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return so.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];oh(t),ah(i,t);let o=t.length;e.forEach(oh);for(let c=0;c<e.length;c++)n.push(o),o+=e[c].length,ah(i,e[c]);const a=wp.triangulate(i,n);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function oh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function ah(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ts extends Ps{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ts(t.radius,t.detail)}}class Gn extends Ps{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gn(t.radius,t.detail)}}class Ve extends Ae{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(n),l=a+1,h=c+1,d=t/a,u=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*u-o;for(let y=0;y<l;y++){const v=y*d-s;m.push(v,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const y=x+l*p,v=x+l*(p+1),w=x+1+l*(p+1),E=x+1+l*p;f.push(y,v,E),f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.widthSegments,t.heightSegments)}}class Is extends Ae{constructor(t=.5,e=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/n,f=new b,m=new st;for(let _=0;_<=n;_++){for(let g=0;g<=i;g++){const p=s+g/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let _=0;_<n;_++){const g=_*(i+1);for(let p=0;p<i;p++){const x=p+g,y=x,v=x+i+1,w=x+i+2,E=x+1;a.push(y,v,E),a.push(v,w,E)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ea extends Ae{constructor(t=new Ac([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ie(n,3)),this.setAttribute("normal",new ie(s,3)),this.setAttribute("uv",new ie(o,2));function l(h){const d=n.length/3,u=h.extractPoints(e);let f=u.shape;const m=u.holes;so.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];so.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=so.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){const x=f[g];n.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){const x=_[g],y=x[0]+d,v=x[1]+d,w=x[2]+d;i.push(y,v,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Tp(e,t)}static fromJSON(t,e){const i=[];for(let n=0,s=t.shapes.length;n<s;n++){const o=e[t.shapes[n]];i.push(o)}return new Ea(i,t.curveSegments)}}function Tp(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,i=r.length;e<i;e++){const n=r[e];t.shapes.push(n.uuid)}else t.shapes.push(r.uuid);return t}class Vt extends Ae{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new b,u=new b,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const x=[],y=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&c===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const E=w/e;d.x=-t*Math.cos(n+E*s)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(n+E*s)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(E+v,1-y),x.push(l++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){const y=h[p][x+1],v=h[p][x],w=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&f.push(y,v,E),(p!==i-1||c<Math.PI)&&f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class il extends Ps{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new il(t.radius,t.detail)}}class $i extends Ae{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],c=[],l=[],h=new b,d=new b,u=new b;for(let f=0;f<=i;f++)for(let m=0;m<=n;m++){const _=m/n*s,g=f/i*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(_),d.y=(t+e*Math.cos(g))*Math.sin(_),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/n),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=n;m++){const _=(n+1)*f+m-1,g=(n+1)*(f-1)+m-1,p=(n+1)*(f-1)+m,x=(n+1)*f+m;o.push(_,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ap extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tt extends Ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ji extends tt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ep extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cp extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function sa(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Rp(r){function t(n,s){return r[n]-r[s]}const e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function rh(r,t,e){const i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){const a=e[s]*t;for(let c=0;c!==t;++c)n[o++]=r[a+c]}return n}function Nd(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),e.push(o)),s=r[n++];while(s!==void 0)}class Mo{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let o;i:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break e}o=e.length;break i}if(!(t>=s)){const a=e[1];t<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=e[--i-1],t>=s)break e}o=i,i=0;break i}break t}for(;i<o;){const a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Pp extends Mo{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ds,endingEnd:ds}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,o=t+1,a=n[s],c=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case us:s=t,a=2*e-i;break;case va:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case us:o=t,c=2*i-e;break;case va:o=1,c=i+n[1]-n[0];break;default:o=t-1,c=e}const l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(n-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,x=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let w=0;w!==a;++w)s[w]=p*o[h+w]+x*o[l+w]+y*o[c+w]+v*o[d+w];return s}}class Od extends Mo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[l+u]*d+o[c+u]*h;return s}}class Ip extends Mo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class Di{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sa(e,this.TimeBufferType),this.values=sa(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:sa(t.times,Array),values:sa(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ip(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Od(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lo:e=this.InterpolantFactoryMethodDiscrete;break;case ho:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){kt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){kt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(n!==void 0&&Yu(n))for(let a=0,c=n.length;a!==c;++a){const l=n[a];if(isNaN(l)){kt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ha,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(n)c=!0;else{const d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){const _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=ho;class Ds extends Di{constructor(t,e,i){super(t,e,i)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=lo;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Bd extends Di{constructor(t,e,i,n){super(t,e,i,n)}}Bd.prototype.ValueTypeName="color";class As extends Di{constructor(t,e,i,n){super(t,e,i,n)}}As.prototype.ValueTypeName="number";class Dp extends Mo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(n-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Pi.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Es extends Di{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Dp(this.times,this.values,this.getValueSize(),t)}}Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Di{constructor(t,e,i){super(t,e,i)}}Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=lo;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Di{constructor(t,e,i,n){super(t,e,i,n)}}Cs.prototype.ValueTypeName="vector";class Rc{constructor(t="",e=-1,i=[],n=Vc){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=wi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let o=0,a=i.length;o!==a;++o)e.push(kp(i[o]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=i.length;s!==o;++s)e.push(Di.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Rp(c);c=rh(c,1,h),l=rh(l,1,h),!n&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new As(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/i))}return new this(t,-1,o)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let u=n[d];u||(n[d]=u=[]),u.push(l)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],e,i));return o}static parseAnimation(t,e){if(Pt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return kt("AnimationClip: No animation in JSONLoader data."),null;const i=function(d,u,f,m,_){if(f.length!==0){const g=[],p=[];Nd(f,g,p,m),g.length!==0&&_.push(new d(u,g,p))}},n=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)f[u[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==u[m].morphTargets.length;++x){const y=u[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}n.push(new As(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{const f=".bones["+e[d].name+"]";i(Cs,f+".position",u,"pos",n),i(Es,f+".quaternion",u,"rot",n),i(Cs,f+".scale",u,"scl",n)}}return n.length===0?null:new this(s,c,n,a)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Lp(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return Bd;case"quaternion":return Es;case"bool":case"boolean":return Ds;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function kp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Lp(r.type);if(r.times===void 0){const e=[],i=[];Nd(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const an={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Np{constructor(t,e,i){const n=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Op=new Np;class Vn{constructor(t){this.manager=t!==void 0?t:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Vn.DEFAULT_MATERIAL_NAME="__DEFAULT";const sn={};class Bp extends Error{constructor(t,e){super(t),this.response=e}}class Ca extends Vn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=an.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(sn[t]!==void 0){sn[t].push({onLoad:e,onProgress:i,onError:n});return}sn[t]=[],sn[t].push({onLoad:e,onProgress:i,onError:n});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Pt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=sn[t],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){d.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let E=0,C=h.length;E<C;E++){const I=h[E];I.onProgress&&I.onProgress(w)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Bp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{an.add(`file:${t}`,l);const h=sn[t];delete sn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=sn[t];if(h===void 0)throw this.manager.itemError(t),l;delete sn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ls=new WeakMap;class Up extends Vn{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=an.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let d=ls.get(o);d===void 0&&(d=[],ls.set(o,d)),d.push({onLoad:e,onError:n})}return o}const a=uo("img");function c(){h(),e&&e(this);const d=ls.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}ls.delete(this),s.manager.itemEnd(t)}function l(d){h(),n&&n(d),an.remove(`image:${t}`);const u=ls.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(d)}ls.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),an.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class Ud extends Vn{constructor(t){super(t)}load(t,e,i,n){const s=new We,o=new Up(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}class So extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Fp extends So{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const xr=new Gt,ch=new b,lh=new b;class nl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),xr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zp extends nl{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Ms*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Gp extends So{constructor(t,e,i=0,n=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new zp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Hp extends nl{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class Be extends So{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Hp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class bo extends xd{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Vp extends nl{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fd extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Vp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Wp extends So{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class oo{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const yr=new WeakMap;class qp extends Vn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=an.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(l=>{if(yr.has(o)===!0)n&&n(yr.get(o)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(l),s.manager.itemEnd(t),l});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return an.add(`image-bitmap:${t}`,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){n&&n(l),yr.set(c,l),an.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});an.add(`image-bitmap:${t}`,c),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Xp extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class zd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class $p{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,o;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[s+a]=i[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(i,n,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){a.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,o=n;s!==o;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let o=0;o!==s;++o)t[e+o]=t[i+o]}_slerp(t,e,i,n){Pi.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const o=this._workIndex*s;Pi.multiplyQuaternionsFlat(t,o,t,e,t,i),Pi.slerpFlat(t,e,t,e,t,o,n)}_lerp(t,e,i,n,s){const o=1-n;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*o+t[i+a]*n}}_lerpAdditive(t,e,i,n,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[i+o]*n}}}const sl="\\[\\]\\.:\\/",Yp=new RegExp("["+sl+"]","g"),ol="[^"+sl+"]",Kp="[^"+sl.replace("\\.","")+"]",jp=/((?:WC+[\/:])*)/.source.replace("WC",ol),Zp=/(WCOD+)?/.source.replace("WCOD",Kp),Jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),Qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),tm=new RegExp("^"+jp+Zp+Jp+Qp+"$"),em=["material","materials","bones","map"];class im{constructor(t,e,i){const n=i||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class ue{constructor(t,e,i){this.path=e,this.parsedPath=i||ue.parseTrackName(e),this.node=ue.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new ue.Composite(t,e,i):new ue(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yp,"")}static parseTrackName(t){const e=tm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);em.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=i(a.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=ue.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[n];if(o===void 0){const l=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ue.Composite=im;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nm{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,o=s.length,a=new Array(o),c={endingStart:ds,endingEnd:ds};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){const n=this._clip.duration,s=t._clip.duration,o=s/n,a=n/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Uu:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Vc:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulate(n,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const o=i===Bu;if(t===0)return s===-1?n:o&&(s&1)===1?e-n:n;if(i===rd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=e||n<0){const a=Math.floor(n/e);n-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(o&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=us,n.endingEnd=us):(t?n.endingStart=this.zeroSlopeAtStart?us:ds:n.endingStart=va,e?n.endingEnd=this.zeroSlopeAtEnd?us:ds:n.endingEnd=va)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=i,this}}const sm=new Float32Array(1);class Gd extends Hn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,o=t._propertyBindings,a=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==s;++d){const u=n[d],f=u.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[d]=m;else{if(m=o[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=e&&e._propertyBindings[d].binding.parsedPath;m=new $p(ue.create(i,f,_),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[d]=m}a[d].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=n.length,n.push(t),o.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let o=n[e];o===void 0&&(o={},n[e]=o),o[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[n],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new Od(new Float32Array(2),new Float32Array(2),1,sm),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let o=typeof t=="string"?Rc.findByName(n,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Vc),c!==void 0){const d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new nm(this,o,e,i);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?Rc.findByName(i,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(n,t,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,d=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}function hh(r,t,e,i){const n=om(i);switch(e){case od:return r*t;case Fc:return r*t/n.components*n.byteLength;case zc:return r*t/n.components*n.byteLength;case vs:return r*t*2/n.components*n.byteLength;case Gc:return r*t*2/n.components*n.byteLength;case ad:return r*t*3/n.components*n.byteLength;case fi:return r*t*4/n.components*n.byteLength;case Hc:return r*t*4/n.components*n.byteLength;case fa:case pa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qr:case $r:return Math.max(r,16)*Math.max(t,8)/4;case Wr:case Xr:return Math.max(r,8)*Math.max(t,8)/2;case Yr:case Kr:case Zr:case Jr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:case tc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case lc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case uc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case fc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case mc:case gc:case _c:return Math.ceil(r/4)*Math.ceil(t/4)*16;case xc:case yc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case vc:case Mc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function om(r){switch(r){case ui:case ed:return{byteLength:1,components:1};case ro:case id:case pi:return{byteLength:2,components:1};case Bc:case Uc:return{byteLength:2,components:4};case qi:case Oc:case bi:return{byteLength:4,components:1};case nd:case sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);function Hd(){let r=null,t=!1,e=null,i=null;function n(s,o){e(s,o),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function am(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(r.bindBuffer(l,a),d.length===0)r.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:n,remove:s,update:o}}var rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
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
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
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
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
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
#endif`,gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,Mm=`#ifdef USE_BUMPMAP
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pm=`#define PI 3.141592653589793
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
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
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
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,o0=`uniform sampler2D dfgLUT;
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
}`,a0=`
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g0=`#if defined( USE_POINTS_UV )
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
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,P0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
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
}`,fg=`#if DEPTH_PACKING == 3200
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
}`,pg=`#define DISTANCE
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
}`,mg=`#define DISTANCE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
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
}`,yg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#define LAMBERT
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
}`,bg=`#define LAMBERT
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
}`,wg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,Eg=`#define NORMAL
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
}`,Cg=`#define PHONG
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
}`,Rg=`#define PHONG
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
}`,Pg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,Lg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,Ug=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:rm,alphahash_pars_fragment:cm,alphamap_fragment:lm,alphamap_pars_fragment:hm,alphatest_fragment:dm,alphatest_pars_fragment:um,aomap_fragment:fm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:gm,begin_vertex:_m,beginnormal_vertex:xm,bsdfs:ym,iridescence_fragment:vm,bumpmap_pars_fragment:Mm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:bm,clipping_planes_pars_vertex:wm,clipping_planes_vertex:Tm,color_fragment:Am,color_pars_fragment:Em,color_pars_vertex:Cm,color_vertex:Rm,common:Pm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Lm,displacementmap_vertex:km,emissivemap_fragment:Nm,emissivemap_pars_fragment:Om,colorspace_fragment:Bm,colorspace_pars_fragment:Um,envmap_fragment:Fm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Gm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:Qm,envmap_vertex:Vm,fog_vertex:Wm,fog_pars_vertex:qm,fog_fragment:Xm,fog_pars_fragment:$m,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:Km,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Zm,lights_pars_begin:Jm,lights_toon_fragment:t0,lights_toon_pars_fragment:e0,lights_phong_fragment:i0,lights_phong_pars_fragment:n0,lights_physical_fragment:s0,lights_physical_pars_fragment:o0,lights_fragment_begin:a0,lights_fragment_maps:r0,lights_fragment_end:c0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:u0,map_fragment:f0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:g0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:x0,morphinstance_vertex:y0,morphcolor_vertex:v0,morphnormal_vertex:M0,morphtarget_pars_vertex:S0,morphtarget_vertex:b0,normal_fragment_begin:w0,normal_fragment_maps:T0,normal_pars_fragment:A0,normal_pars_vertex:E0,normal_vertex:C0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:P0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:L0,opaque_fragment:k0,packing:N0,premultiplied_alpha_fragment:O0,project_vertex:B0,dithering_fragment:U0,dithering_pars_fragment:F0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:V0,shadowmap_vertex:W0,shadowmask_pars_fragment:q0,skinbase_vertex:X0,skinning_pars_vertex:$0,skinning_vertex:Y0,skinnormal_vertex:K0,specularmap_fragment:j0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:Q0,transmission_fragment:tg,transmission_pars_fragment:eg,uv_pars_fragment:ig,uv_pars_vertex:ng,uv_vertex:sg,worldpos_vertex:og,background_vert:ag,background_frag:rg,backgroundCube_vert:cg,backgroundCube_frag:lg,cube_vert:hg,cube_frag:dg,depth_vert:ug,depth_frag:fg,distance_vert:pg,distance_frag:mg,equirect_vert:gg,equirect_frag:_g,linedashed_vert:xg,linedashed_frag:yg,meshbasic_vert:vg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:bg,meshmatcap_vert:wg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:Eg,meshphong_vert:Cg,meshphong_frag:Rg,meshphysical_vert:Pg,meshphysical_frag:Ig,meshtoon_vert:Dg,meshtoon_frag:Lg,points_vert:kg,points_frag:Ng,shadow_vert:Og,shadow_frag:Bg,sprite_vert:Ug,sprite_frag:Fg},ut={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Ui={basic:{uniforms:ei([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:ei([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new vt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:ei([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:ei([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:ei([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new vt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:ei([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:ei([ut.points,ut.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:ei([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:ei([ut.common,ut.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:ei([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:ei([ut.sprite,ut.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:ei([ut.common,ut.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:ei([ut.lights,ut.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ui.physical={uniforms:ei([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const oa={r:0,b:0,g:0},Cn=new Xi,zg=new Gt;function Gg(r,t,e,i,n,s,o){const a=new vt(0);let c=s===!0?0:1,l,h,d=null,u=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const w=m(y);w===null?p(a,c):w&&w.isColor&&(p(w,1),v=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,v){const w=m(v);w&&(w.isCubeTexture||w.mapping===ka)?(h===void 0&&(h=new D(new Lt(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Ss(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Cn.copy(v.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(Cn)),h.material.toneMapped=se.getTransfer(w.colorSpace)!==ge,(d!==w||u!==w.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new D(new Ve(2,2),new Ye({name:"BackgroundMaterial",uniforms:Ss(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=se.getTransfer(w.colorSpace)!==ge,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,d=w,u=w.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(oa,_d(r)),i.buffers.color.setClear(oa.r,oa.g,oa.b,v,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g,dispose:x}}function Hg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,o=!1;function a(T,P,O,B,W){let H=!1;const q=d(B,O,P);s!==q&&(s=q,l(s.object)),H=f(T,B,O,W),H&&m(T,B,O,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(T,P,O,B),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return r.createVertexArray()}function l(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function d(T,P,O){const B=O.wireframe===!0;let W=i[T.id];W===void 0&&(W={},i[T.id]=W);let H=W[P.id];H===void 0&&(H={},W[P.id]=H);let q=H[B];return q===void 0&&(q=u(c()),H[B]=q),q}function u(T){const P=[],O=[],B=[];for(let W=0;W<e;W++)P[W]=0,O[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:T,attributes:{},index:null}}function f(T,P,O,B){const W=s.attributes,H=P.attributes;let q=0;const G=O.getAttributes();for(const j in G)if(G[j].location>=0){const at=W[j];let ft=H[j];if(ft===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),at===void 0||at.attribute!==ft||ft&&at.data!==ft.data)return!0;q++}return s.attributesNum!==q||s.index!==B}function m(T,P,O,B){const W={},H=P.attributes;let q=0;const G=O.getAttributes();for(const j in G)if(G[j].location>=0){let at=H[j];at===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(at=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(at=T.instanceColor));const ft={};ft.attribute=at,at&&at.data&&(ft.data=at.data),W[j]=ft,q++}s.attributes=W,s.attributesNum=q,s.index=B}function _(){const T=s.newAttributes;for(let P=0,O=T.length;P<O;P++)T[P]=0}function g(T){p(T,0)}function p(T,P){const O=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;O[T]=1,B[T]===0&&(r.enableVertexAttribArray(T),B[T]=1),W[T]!==P&&(r.vertexAttribDivisor(T,P),W[T]=P)}function x(){const T=s.newAttributes,P=s.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==T[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function y(T,P,O,B,W,H,q){q===!0?r.vertexAttribIPointer(T,P,O,W,H):r.vertexAttribPointer(T,P,O,B,W,H)}function v(T,P,O,B){_();const W=B.attributes,H=O.getAttributes(),q=P.defaultAttributeValues;for(const G in H){const j=H[G];if(j.location>=0){let ot=W[G];if(ot===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor)),ot!==void 0){const at=ot.normalized,ft=ot.itemSize,Bt=t.get(ot);if(Bt===void 0)continue;const Nt=Bt.buffer,ye=Bt.type,he=Bt.bytesPerElement,K=ye===r.INT||ye===r.UNSIGNED_INT||ot.gpuType===Oc;if(ot.isInterleavedBufferAttribute){const J=ot.data,_t=J.stride,Ft=ot.offset;if(J.isInstancedInterleavedBuffer){for(let Mt=0;Mt<j.locationSize;Mt++)p(j.location+Mt,J.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Mt=0;Mt<j.locationSize;Mt++)g(j.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let Mt=0;Mt<j.locationSize;Mt++)y(j.location+Mt,ft/j.locationSize,ye,at,_t*he,(Ft+ft/j.locationSize*Mt)*he,K)}else{if(ot.isInstancedBufferAttribute){for(let J=0;J<j.locationSize;J++)p(j.location+J,ot.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let J=0;J<j.locationSize;J++)g(j.location+J);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let J=0;J<j.locationSize;J++)y(j.location+J,ft/j.locationSize,ye,at,ft*he,ft/j.locationSize*J*he,K)}}else if(q!==void 0){const at=q[G];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(j.location,at);break;case 3:r.vertexAttrib3fv(j.location,at);break;case 4:r.vertexAttrib4fv(j.location,at);break;default:r.vertexAttrib1fv(j.location,at)}}}}x()}function w(){I();for(const T in i){const P=i[T];for(const O in P){const B=P[O];for(const W in B)h(B[W].object),delete B[W];delete P[O]}delete i[T]}}function E(T){if(i[T.id]===void 0)return;const P=i[T.id];for(const O in P){const B=P[O];for(const W in B)h(B[W].object),delete B[W];delete P[O]}delete i[T.id]}function C(T){for(const P in i){const O=i[P];if(O[T.id]===void 0)continue;const B=O[T.id];for(const W in B)h(B[W].object),delete B[W];delete O[T.id]}}function I(){M(),o=!0,s!==n&&(s=n,l(s.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function Vg(r,t,e){let i;function n(l){i=l}function s(l,h){r.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,d){d!==0&&(r.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,i,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*u[_];e.update(m,i,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wg(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(C){return!(C!==fi&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ui&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bi&&!I)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Pt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:w,samples:E}}function qg(r){const t=this;let e=null,i=0,n=!1,s=!1;const o=new kn,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=r.get(d);if(!n||m===null||m.length===0||s&&!g)s?h(null):l();else{const x=s?0:i,y=x*4;let v=p.clippingState||null;c.value=v,v=h(m,u,y,f);for(let w=0;w!==y;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(d[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Xg(r){let t=new WeakMap;function e(o,a){return a===Hr?o.mapping=Un:a===Vr&&(o.mapping=ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hr||a===Vr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vd(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const yn=4,dh=[.125,.215,.35,.446,.526,.582],On=20,$g=256,Xs=new bo,uh=new vt;let vr=null,Mr=0,Sr=0,br=!1;const Yg=new b;class fh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:o=256,position:a=Yg}=s;vr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vr,Mr,Sr),this._renderer.xr.enabled=br,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Un||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:pi,format:fi,colorSpace:Je,depthBuffer:!1},n=ph(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Kg(s)),this._blurMaterial=Zg(s,t,e),this._ggxMaterial=jg(s,t,e)}return n}_compileMaterial(t){const e=new D(new Ae,t);this._renderer.compile(e,Xs)}_sceneToCubeUV(t,e,i,n,s){const c=new ii(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(uh),d.toneMapping=Hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new D(new Lt,new $t({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(uh),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const w=this._cubeSize;hs(n,v*w,y>2?w:0,w,w),d.setRenderTarget(n),p&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Un||t.mapping===ys;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const s=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;hs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Xs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-yn?i-m+yn:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,hs(s,g,p,3*_,2*_),n.setRenderTarget(s),n.render(a,Xs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-i,hs(t,g,p,3*_,2*_),n.setRenderTarget(t),n.render(a,Xs)}_blur(t,e,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",s),this._halfBlur(o,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&kt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[n];d.material=l;const u=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*On-1),_=s/m,g=isFinite(s)?1+Math.floor(h*_):On;g>On&&Pt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${On}`);const p=[];let x=0;for(let C=0;C<On;++C){const I=C/_,M=Math.exp(-I*I/2);p.push(M),C===0?x+=M:C<g&&(x+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;const v=this._sizeLods[n],w=3*v*(n>y-yn?n-y+yn:0),E=4*(this._cubeSize-v);hs(e,w,E,3*v,2*v),c.setRenderTarget(e),c.render(d,Xs)}}function Kg(r){const t=[],e=[],i=[];let n=r;const s=r-yn+1+dh.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let c=1/a;o>r-yn?c=dh[o-r+yn-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,I=E>2?0:-1,M=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];x.set(M,_*m*E),y.set(u,g*m*E);const T=[E,E,E,E,E,E];v.set(T,p*m*E)}const w=new Ae;w.setAttribute("position",new Ue(x,_)),w.setAttribute("uv",new Ue(y,g)),w.setAttribute("faceIndex",new Ue(v,p)),i.push(new D(w,null)),n>yn&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ph(r,t,e){const i=new si(r,t,e);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function jg(r,t,e){return new Ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$g,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Zg(r,t,e){const i=new Float32Array(On),n=new b(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function mh(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function gh(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function Jg(r){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Hr||c===Vr,h=c===Un||c===ys;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new fh(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new fh(r)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function n(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Qg(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&fo("WebGLRenderer: "+i+" extension not supported."),n}}}function t_(r,t,e,i){const n={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete n[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],r.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,m=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const w=x[y+0],E=x[y+1],C=x[y+2];u.push(w,E,E,C,C,w)}}else if(m!==void 0){const x=m.array;_=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const w=y+0,E=y+1,C=y+2;u.push(w,E,E,C,C,w)}}else return;const g=new(dd(u)?gd:md)(u,1);g.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function e_(r,t,e){let i;function n(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,f){r.drawElements(i,f,s,u*o),e.update(f,i,1)}function l(u,f,m){m!==0&&(r.drawElementsInstanced(i,f,s,u*o,m),e.update(f,i,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function d(u,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*_[x];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function i_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function n_(r,t,e){const i=new WeakMap,n=new Ee;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let T=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var f=T;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let w=a.attributes.position.count*v,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*E*4*d),I=new ud(C,w,E,d);I.type=bi,I.needsUpdate=!0;const M=v*4;for(let P=0;P<d;P++){const O=p[P],B=x[P],W=y[P],H=w*E*4*P;for(let q=0;q<O.count;q++){const G=q*M;m===!0&&(n.fromBufferAttribute(O,q),C[H+G+0]=n.x,C[H+G+1]=n.y,C[H+G+2]=n.z,C[H+G+3]=0),_===!0&&(n.fromBufferAttribute(B,q),C[H+G+4]=n.x,C[H+G+5]=n.y,C[H+G+6]=n.z,C[H+G+7]=0),g===!0&&(n.fromBufferAttribute(W,q),C[H+G+8]=n.x,C[H+G+9]=n.y,C[H+G+10]=n.z,C[H+G+11]=W.itemSize===4?n.w:1)}}u={count:d,texture:I,size:new st(w,E)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function s_(r,t,e,i){let n=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(n.get(d)!==l&&(t.update(d),n.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;n.get(u)!==l&&(u.update(),n.set(u,l))}return d}function o(){n=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const o_={[$h]:"LINEAR_TONE_MAPPING",[Yh]:"REINHARD_TONE_MAPPING",[Kh]:"CINEON_TONE_MAPPING",[Nc]:"ACES_FILMIC_TONE_MAPPING",[Zh]:"AGX_TONE_MAPPING",[Jh]:"NEUTRAL_TONE_MAPPING",[jh]:"CUSTOM_TONE_MAPPING"};function a_(r,t,e,i,n){const s=new si(t,e,{type:r,depthBuffer:i,stencilBuffer:n}),o=new si(t,e,{type:pi,depthBuffer:!1,stencilBuffer:!1}),a=new Ae;a.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ie([0,2,0,0,2,0],2));const c=new Ap({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new D(a,c),h=new bo(-1,1,1,-1,0,1);let d=null,u=null,f=!1,m,_=null,g=[],p=!1;this.setSize=function(x,y){s.setSize(x,y),o.setSize(x,y);for(let v=0;v<g.length;v++){const w=g[v];w.setSize&&w.setSize(x,y)}},this.setEffects=function(x){g=x,p=g.length>0&&g[0].isRenderPass===!0;const y=s.width,v=s.height;for(let w=0;w<g.length;w++){const E=g[w];E.setSize&&E.setSize(y,v)}},this.begin=function(x,y){if(f||x.toneMapping===Hi&&g.length===0)return!1;if(_=y,y!==null){const v=y.width,w=y.height;(s.width!==v||s.height!==w)&&this.setSize(v,w)}return p===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=Hi,!0},this.hasRenderPass=function(){return p},this.end=function(x,y){x.toneMapping=m,f=!0;let v=s,w=o;for(let E=0;E<g.length;E++){const C=g[E];if(C.enabled!==!1&&(C.render(x,w,v,y),C.needsSwap!==!1)){const I=v;v=w,w=I}}if(d!==x.outputColorSpace||u!==x.toneMapping){d=x.outputColorSpace,u=x.toneMapping,c.defines={},se.getTransfer(d)===ge&&(c.defines.SRGB_TRANSFER="");const E=o_[u];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(_),x.render(l,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Vd=new We,Pc=new po(1,1),Wd=new ud,qd=new yf,Xd=new yd,_h=[],xh=[],yh=new Float32Array(16),vh=new Float32Array(9),Mh=new Float32Array(4);function ks(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=_h[n];if(s===void 0&&(s=new Float32Array(n),_h[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function qe(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Ua(r,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function r_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function c_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function l_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function h_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function d_(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Mh.set(i),r.uniformMatrix2fv(this.addr,!1,Mh),Xe(e,i)}}function u_(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;vh.set(i),r.uniformMatrix3fv(this.addr,!1,vh),Xe(e,i)}}function f_(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;yh.set(i),r.uniformMatrix4fv(this.addr,!1,yh),Xe(e,i)}}function p_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function m_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function g_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function __(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function x_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function y_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function v_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function M_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function S_(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Pc.compareFunction=e.isReversedDepthBuffer()?qc:Wc,s=Pc):s=Vd,e.setTexture2D(t||s,n)}function b_(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||qd,n)}function w_(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Xd,n)}function T_(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Wd,n)}function A_(r){switch(r){case 5126:return r_;case 35664:return c_;case 35665:return l_;case 35666:return h_;case 35674:return d_;case 35675:return u_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return x_;case 36294:return y_;case 36295:return v_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return T_}}function E_(r,t){r.uniform1fv(this.addr,t)}function C_(r,t){const e=ks(t,this.size,2);r.uniform2fv(this.addr,e)}function R_(r,t){const e=ks(t,this.size,3);r.uniform3fv(this.addr,e)}function P_(r,t){const e=ks(t,this.size,4);r.uniform4fv(this.addr,e)}function I_(r,t){const e=ks(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function D_(r,t){const e=ks(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function L_(r,t){const e=ks(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function k_(r,t){r.uniform1iv(this.addr,t)}function N_(r,t){r.uniform2iv(this.addr,t)}function O_(r,t){r.uniform3iv(this.addr,t)}function B_(r,t){r.uniform4iv(this.addr,t)}function U_(r,t){r.uniform1uiv(this.addr,t)}function F_(r,t){r.uniform2uiv(this.addr,t)}function z_(r,t){r.uniform3uiv(this.addr,t)}function G_(r,t){r.uniform4uiv(this.addr,t)}function H_(r,t,e){const i=this.cache,n=t.length,s=Ua(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Xe(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Pc:o=Vd;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function V_(r,t,e){const i=this.cache,n=t.length,s=Ua(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Xe(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||qd,s[o])}function W_(r,t,e){const i=this.cache,n=t.length,s=Ua(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Xe(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Xd,s[o])}function q_(r,t,e){const i=this.cache,n=t.length,s=Ua(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Xe(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Wd,s[o])}function X_(r){switch(r){case 5126:return E_;case 35664:return C_;case 35665:return R_;case 35666:return P_;case 35674:return I_;case 35675:return D_;case 35676:return L_;case 5124:case 35670:return k_;case 35667:case 35671:return N_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return U_;case 36294:return F_;case 36295:return z_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return q_}}class $_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=A_(e.type)}}class Y_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X_(e.type)}}class K_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(t,e[a.id],i)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function Sh(r,t){r.seq.push(t),r.map[t.id]=t}function j_(r,t,e){const i=r.name,n=i.length;for(wr.lastIndex=0;;){const s=wr.exec(i),o=wr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===n){Sh(e,l===void 0?new $_(a,r,t):new Y_(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new K_(a),Sh(e,d)),e=d}}}class _a{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);j_(a,c,this)}const n=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function bh(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const Z_=37297;let J_=0;function Q_(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const wh=new qt;function tx(r){se._getMatrix(wh,se.workingColorSpace,r);const t=`mat3( ${wh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(r)){case Ma:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Th(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Q_(r.getShaderSource(t),a)}else return s}function ex(r,t){const e=tx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ix={[$h]:"Linear",[Yh]:"Reinhard",[Kh]:"Cineon",[Nc]:"ACESFilmic",[Zh]:"AgX",[Jh]:"Neutral",[jh]:"Custom"};function nx(r,t){const e=ix[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const aa=new b;function sx(){se.getLuminanceCoefficients(aa);const r=aa.x.toFixed(4),t=aa.y.toFixed(4),e=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function ax(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rx(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Qs(r){return r!==""}function Ah(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(r){return r.replace(cx,hx)}const lx=new Map;function hx(r,t){let e=Xt[t];if(e===void 0){const i=lx.get(t);if(i!==void 0)e=Xt[i],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}const dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(r){return r.replace(dx,ux)}function ux(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Rh(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const fx={[da]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function px(r){return fx[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mx={[Un]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE_UV"};function gx(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":mx[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const _x={[ys]:"ENVMAP_MODE_REFRACTION"};function xx(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_x[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yx={[Xh]:"ENVMAP_BLENDING_MULTIPLY",[ku]:"ENVMAP_BLENDING_MIX",[Nu]:"ENVMAP_BLENDING_ADD"};function vx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yx[r.combine]||"ENVMAP_BLENDING_NONE"}function Mx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Sx(r,t,e,i){const n=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=px(e),l=gx(e),h=xx(e),d=vx(e),u=Mx(e),f=ox(e),m=ax(s),_=n.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Qs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(g=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Hi?nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,ex("linearToOutputTexel",e.outputColorSpace),sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Ic(o),o=Ah(o,e),o=Eh(o,e),a=Ic(a),a=Ah(a,e),a=Eh(a,e),o=Ch(o),a=Ch(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+o,v=x+p+a,w=bh(n,n.VERTEX_SHADER,y),E=bh(n,n.FRAGMENT_SHADER,v);n.attachShader(_,w),n.attachShader(_,E),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function C(P){if(r.debug.checkShaderErrors){const O=n.getProgramInfoLog(_)||"",B=n.getShaderInfoLog(w)||"",W=n.getShaderInfoLog(E)||"",H=O.trim(),q=B.trim(),G=W.trim();let j=!0,ot=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,w,E);else{const at=Th(n,w,"vertex"),ft=Th(n,E,"fragment");kt("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+at+`
`+ft)}else H!==""?Pt("WebGLProgram: Program Info Log:",H):(q===""||G==="")&&(ot=!1);ot&&(P.diagnostics={runnable:j,programLog:H,vertexShader:{log:q,prefix:g},fragmentShader:{log:G,prefix:p}})}n.deleteShader(w),n.deleteShader(E),I=new _a(n,_),M=rx(n,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=n.getProgramParameter(_,Z_)),T},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let bx=0;class wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Tx(t),e.set(t,i)),i}}class Tx{constructor(t){this.id=bx++,this.code=t,this.usedTimes=0}}function Ax(r,t,e,i,n,s,o){const a=new fd,c=new wx,l=new Set,h=[],d=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,T,P,O,B){const W=O.fog,H=B.geometry,q=M.isMeshStandardMaterial?O.environment:null,G=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),j=G&&G.mapping===ka?G.image.height:null,ot=m[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Pt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const at=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=at!==void 0?at.length:0;let Bt=0;H.morphAttributes.position!==void 0&&(Bt=1),H.morphAttributes.normal!==void 0&&(Bt=2),H.morphAttributes.color!==void 0&&(Bt=3);let Nt,ye,he,K;if(ot){const pe=Ui[ot];Nt=pe.vertexShader,ye=pe.fragmentShader}else Nt=M.vertexShader,ye=M.fragmentShader,c.update(M),he=c.getVertexShaderID(M),K=c.getFragmentShaderID(M);const J=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),Ft=B.isInstancedMesh===!0,Mt=B.isBatchedMesh===!0,oe=!!M.map,ke=!!M.matcap,te=!!G,jt=!!M.aoMap,de=!!M.lightMap,Wt=!!M.bumpMap,Re=!!M.normalMap,L=!!M.displacementMap,Pe=!!M.emissiveMap,ae=!!M.metalnessMap,ve=!!M.roughnessMap,bt=M.anisotropy>0,R=M.clearcoat>0,S=M.dispersion>0,k=M.iridescence>0,$=M.sheen>0,Z=M.transmission>0,Y=bt&&!!M.anisotropyMap,Et=R&&!!M.clearcoatMap,ct=R&&!!M.clearcoatNormalMap,Tt=R&&!!M.clearcoatRoughnessMap,Ut=k&&!!M.iridescenceMap,it=k&&!!M.iridescenceThicknessMap,ht=$&&!!M.sheenColorMap,wt=$&&!!M.sheenRoughnessMap,At=!!M.specularMap,lt=!!M.specularColorMap,Yt=!!M.specularIntensityMap,N=Z&&!!M.transmissionMap,mt=Z&&!!M.thicknessMap,nt=!!M.gradientMap,xt=!!M.alphaMap,et=M.alphaTest>0,Q=!!M.alphaHash,rt=!!M.extensions;let Ht=Hi;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ht=r.toneMapping);const we={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:Nt,fragmentShader:ye,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&B._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&B.instanceColor!==null,instancingMorph:Ft&&B.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Je,alphaToCoverage:!!M.alphaToCoverage,map:oe,matcap:ke,envMap:te,envMapMode:te&&G.mapping,envMapCubeUVHeight:j,aoMap:jt,lightMap:de,bumpMap:Wt,normalMap:Re,displacementMap:L,emissiveMap:Pe,normalMapObjectSpace:Re&&M.normalMapType===Gu,normalMapTangentSpace:Re&&M.normalMapType===hd,metalnessMap:ae,roughnessMap:ve,anisotropy:bt,anisotropyMap:Y,clearcoat:R,clearcoatMap:Et,clearcoatNormalMap:ct,clearcoatRoughnessMap:Tt,dispersion:S,iridescence:k,iridescenceMap:Ut,iridescenceThicknessMap:it,sheen:$,sheenColorMap:ht,sheenRoughnessMap:wt,specularMap:At,specularColorMap:lt,specularIntensityMap:Yt,transmission:Z,transmissionMap:N,thicknessMap:mt,gradientMap:nt,opaque:M.transparent===!1&&M.blending===fs&&M.alphaToCoverage===!1,alphaMap:xt,alphaTest:et,alphaHash:Q,combine:M.combine,mapUv:oe&&_(M.map.channel),aoMapUv:jt&&_(M.aoMap.channel),lightMapUv:de&&_(M.lightMap.channel),bumpMapUv:Wt&&_(M.bumpMap.channel),normalMapUv:Re&&_(M.normalMap.channel),displacementMapUv:L&&_(M.displacementMap.channel),emissiveMapUv:Pe&&_(M.emissiveMap.channel),metalnessMapUv:ae&&_(M.metalnessMap.channel),roughnessMapUv:ve&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:Et&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(M.sheenRoughnessMap.channel),specularMapUv:At&&_(M.specularMap.channel),specularColorMapUv:lt&&_(M.specularColorMap.channel),specularIntensityMapUv:Yt&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:mt&&_(M.thicknessMap.channel),alphaMapUv:xt&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Re||bt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(oe||xt),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Bt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ht,decodeVideoTexture:oe&&M.map.isVideoTexture===!0&&se.getTransfer(M.map.colorSpace)===ge,decodeVideoTextureEmissive:Pe&&M.emissiveMap.isVideoTexture===!0&&se.getTransfer(M.emissiveMap.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fe,flipSided:M.side===ni,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:rt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&M.extensions.multiDraw===!0||Mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)T.push(P),T.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(T,M),y(T,M),T.push(r.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const T=m[M.type];let P;if(T){const O=Ui[T];P=wa.clone(O.uniforms)}else P=M.uniforms;return P}function w(M,T){let P=d.get(T);return P!==void 0?++P.usedTimes:(P=new Sx(r,T,M,s),h.push(P),d.set(T,P)),P}function E(M){if(--M.usedTimes===0){const T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),d.delete(M.cacheKey),M.destroy()}}function C(M){c.remove(M)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:I}}function Ex(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Cx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ph(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ih(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(d,u,f,m,_,g){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),t++,p}function a(d,u,f,m,_,g){const p=o(d,u,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function c(d,u,f,m,_,g){const p=o(d,u,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Cx),i.length>1&&i.sort(u||Ph),n.length>1&&n.sort(u||Ph)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:a,unshift:c,finish:h,sort:l}}function Rx(){let r=new WeakMap;function t(i,n){const s=r.get(i);let o;return s===void 0?(o=new Ih,r.set(i,[o])):n>=s.length?(o=new Ih,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Px(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new vt};break;case"SpotLight":e={position:new b,direction:new b,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new b,halfWidth:new b,halfHeight:new b};break}return r[t.id]=e,e}}}function Ix(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Dx=0;function Lx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kx(r){const t=new Px,e=Ix(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);const n=new b,s=new Gt,o=new Gt;function a(l){let h=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,x=0,y=0,v=0,w=0,E=0,C=0;l.sort(Lx);for(let M=0,T=l.length;M<T;M++){const P=l[M],O=P.color,B=P.intensity,W=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===vs?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*B,d+=O.g*B,u+=O.b*B;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],B);C++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,j=e.get(P);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=P.shadow.matrix,x++}i.directional[f]=q,f++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(O).multiplyScalar(B),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[_]=q;const G=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,G.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[_]=G.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=H,v++}_++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(O).multiplyScalar(B),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=q,g++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const G=P.shadow,j=e.get(P);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=P.shadow.matrix,y++}i.point[m]=q,m++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(B),q.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[p]=q,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==y||I.numSpotShadows!==v||I.numSpotMaps!==w||I.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=y,I.numSpotShadows=v,I.numSpotMaps=w,I.numLightProbes=C,i.version=Dx++)}function c(l,h){let d=0,u=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),d++}else if(y.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function Dh(r){const t=new kx(r),e=[],i=[];function n(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Nx(r){let t=new WeakMap;function e(n,s=0){const o=t.get(n);let a;return o===void 0?(a=new Dh(r),t.set(n,[a])):s>=o.length?(a=new Dh(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`,Ux=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],Fx=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],Lh=new Gt,$s=new b,Tr=new b;function zx(r,t,e){let i=new Zc;const n=new st,s=new st,o=new Ee,a=new Ep,c=new Cp,l={},h=e.maxTextureSize,d={[cn]:ni,[ni]:cn,[fe]:fe},u=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Ox,fragmentShader:Bx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ae;m.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new D(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=da;let p=this.type;this.render=function(E,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;E.type===qh&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=da);const M=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==this.type;B&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(H=>H.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,H=E.length;W<H;W++){const q=E[W],G=q.shadow;if(G===void 0){Pt("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const j=G.getFrameExtents();if(n.multiply(j),s.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/j.x),n.x=s.x*j.x,G.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/j.y),n.y=s.y*j.y,G.mapSize.y=s.y)),G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===js){if(q.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new si(n.x,n.y,{format:vs,type:pi,minFilter:ze,magFilter:ze,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new po(n.x,n.y,bi),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=ln,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=He,G.map.depthTexture.magFilter=He}else{q.isPointLight?(G.map=new vd(n.x),G.map.depthTexture=new $f(n.x,qi)):(G.map=new si(n.x,n.y),G.map.depthTexture=new po(n.x,n.y,qi)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=ln;const at=r.state.buffers.depth.getReversed();this.type===da?(G.map.depthTexture.compareFunction=at?qc:Wc,G.map.depthTexture.minFilter=ze,G.map.depthTexture.magFilter=ze):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=He,G.map.depthTexture.magFilter=He)}G.camera.updateProjectionMatrix()}const ot=G.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<ot;at++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,at),r.clear();else{at===0&&(r.setRenderTarget(G.map),r.clear());const ft=G.getViewport(at);o.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),O.viewport(o)}if(q.isPointLight){const ft=G.camera,Bt=G.matrix,Nt=q.distance||ft.far;Nt!==ft.far&&(ft.far=Nt,ft.updateProjectionMatrix()),$s.setFromMatrixPosition(q.matrixWorld),ft.position.copy($s),Tr.copy(ft.position),Tr.add(Ux[at]),ft.up.copy(Fx[at]),ft.lookAt(Tr),ft.updateMatrixWorld(),Bt.makeTranslation(-$s.x,-$s.y,-$s.z),Lh.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Lh,ft.coordinateSystem,ft.reversedDepth)}else G.updateMatrices(q);i=G.getFrustum(),v(C,I,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===js&&x(G,I),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,T,P)};function x(E,C){const I=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new si(n.x,n.y,{format:vs,type:pi})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(C,null,I,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(C,null,I,f,_,null)}function y(E,C,I,M){let T=null;const P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)T=P;else if(T=I.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=T.uuid,B=C.uuid;let W=l[O];W===void 0&&(W={},l[O]=W);let H=W[B];H===void 0&&(H=T.clone(),W[B]=H,C.addEventListener("dispose",w)),T=H}if(T.visible=C.visible,T.wireframe=C.wireframe,M===js?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:d[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const O=r.properties.get(T);O.light=I}return T}function v(E,C,I,M,T){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===js)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const B=t.update(E),W=E.material;if(Array.isArray(W)){const H=B.groups;for(let q=0,G=H.length;q<G;q++){const j=H[q],ot=W[j.materialIndex];if(ot&&ot.visible){const at=y(E,ot,M,T);E.onBeforeShadow(r,E,C,I,B,at,j),r.renderBufferDirect(I,null,B,at,E,j),E.onAfterShadow(r,E,C,I,B,at,j)}}}else if(W.visible){const H=y(E,W,M,T);E.onBeforeShadow(r,E,C,I,B,H,null),r.renderBufferDirect(I,null,B,H,E,null),E.onAfterShadow(r,E,C,I,B,H,null)}}const O=E.children;for(let B=0,W=O.length;B<W;B++)v(O[B],C,I,M,T)}function w(E){E.target.removeEventListener("dispose",w);for(const I in l){const M=l[I],T=E.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const Gx={[Nr]:Or,[Br]:zr,[Ur]:Gr,[xs]:Fr,[Or]:Nr,[zr]:Br,[Gr]:Ur,[Fr]:xs};function Hx(r,t){function e(){let N=!1;const mt=new Ee;let nt=null;const xt=new Ee(0,0,0,0);return{setMask:function(et){nt!==et&&!N&&(r.colorMask(et,et,et,et),nt=et)},setLocked:function(et){N=et},setClear:function(et,Q,rt,Ht,we){we===!0&&(et*=Ht,Q*=Ht,rt*=Ht),mt.set(et,Q,rt,Ht),xt.equals(mt)===!1&&(r.clearColor(et,Q,rt,Ht),xt.copy(mt))},reset:function(){N=!1,nt=null,xt.set(-1,0,0,0)}}}function i(){let N=!1,mt=!1,nt=null,xt=null,et=null;return{setReversed:function(Q){if(mt!==Q){const rt=t.get("EXT_clip_control");Q?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),mt=Q;const Ht=et;et=null,this.setClear(Ht)}},getReversed:function(){return mt},setTest:function(Q){Q?J(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(Q){nt!==Q&&!N&&(r.depthMask(Q),nt=Q)},setFunc:function(Q){if(mt&&(Q=Gx[Q]),xt!==Q){switch(Q){case Nr:r.depthFunc(r.NEVER);break;case Or:r.depthFunc(r.ALWAYS);break;case Br:r.depthFunc(r.LESS);break;case xs:r.depthFunc(r.LEQUAL);break;case Ur:r.depthFunc(r.EQUAL);break;case Fr:r.depthFunc(r.GEQUAL);break;case zr:r.depthFunc(r.GREATER);break;case Gr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xt=Q}},setLocked:function(Q){N=Q},setClear:function(Q){et!==Q&&(mt&&(Q=1-Q),r.clearDepth(Q),et=Q)},reset:function(){N=!1,nt=null,xt=null,et=null,mt=!1}}}function n(){let N=!1,mt=null,nt=null,xt=null,et=null,Q=null,rt=null,Ht=null,we=null;return{setTest:function(pe){N||(pe?J(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(pe){mt!==pe&&!N&&(r.stencilMask(pe),mt=pe)},setFunc:function(pe,ki,Zi){(nt!==pe||xt!==ki||et!==Zi)&&(r.stencilFunc(pe,ki,Zi),nt=pe,xt=ki,et=Zi)},setOp:function(pe,ki,Zi){(Q!==pe||rt!==ki||Ht!==Zi)&&(r.stencilOp(pe,ki,Zi),Q=pe,rt=ki,Ht=Zi)},setLocked:function(pe){N=pe},setClear:function(pe){we!==pe&&(r.clearStencil(pe),we=pe)},reset:function(){N=!1,mt=null,nt=null,xt=null,et=null,Q=null,rt=null,Ht=null,we=null}}}const s=new e,o=new i,a=new n,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,w=null,E=null,C=new vt(0,0,0),I=0,M=!1,T=null,P=null,O=null,B=null,W=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=G>=2);let ot=null,at={};const ft=r.getParameter(r.SCISSOR_BOX),Bt=r.getParameter(r.VIEWPORT),Nt=new Ee().fromArray(ft),ye=new Ee().fromArray(Bt);function he(N,mt,nt,xt){const et=new Uint8Array(4),Q=r.createTexture();r.bindTexture(N,Q),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<nt;rt++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(mt,0,r.RGBA,1,1,xt,0,r.RGBA,r.UNSIGNED_BYTE,et):r.texImage2D(mt+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,et);return Q}const K={};K[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc(xs),Wt(!1),Re(ml),J(r.CULL_FACE),jt(Gi);function J(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function _t(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Ft(N,mt){return d[N]!==mt?(r.bindFramebuffer(N,mt),d[N]=mt,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=mt),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=mt),!0):!1}function Mt(N,mt){let nt=f,xt=!1;if(N){nt=u.get(mt),nt===void 0&&(nt=[],u.set(mt,nt));const et=N.textures;if(nt.length!==et.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,rt=et.length;Q<rt;Q++)nt[Q]=r.COLOR_ATTACHMENT0+Q;nt.length=et.length,xt=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,xt=!0);xt&&r.drawBuffers(nt)}function oe(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const ke={[Nn]:r.FUNC_ADD,[_u]:r.FUNC_SUBTRACT,[xu]:r.FUNC_REVERSE_SUBTRACT};ke[yu]=r.MIN,ke[vu]=r.MAX;const te={[Mu]:r.ZERO,[Su]:r.ONE,[bu]:r.SRC_COLOR,[Lr]:r.SRC_ALPHA,[Ru]:r.SRC_ALPHA_SATURATE,[Eu]:r.DST_COLOR,[Tu]:r.DST_ALPHA,[wu]:r.ONE_MINUS_SRC_COLOR,[kr]:r.ONE_MINUS_SRC_ALPHA,[Cu]:r.ONE_MINUS_DST_COLOR,[Au]:r.ONE_MINUS_DST_ALPHA,[Pu]:r.CONSTANT_COLOR,[Iu]:r.ONE_MINUS_CONSTANT_COLOR,[Du]:r.CONSTANT_ALPHA,[Lu]:r.ONE_MINUS_CONSTANT_ALPHA};function jt(N,mt,nt,xt,et,Q,rt,Ht,we,pe){if(N===Gi){_===!0&&(_t(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),N!==gu){if(N!==g||pe!==M){if((p!==Nn||v!==Nn)&&(r.blendEquation(r.FUNC_ADD),p=Nn,v=Nn),pe)switch(N){case fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vi:r.blendFunc(r.ONE,r.ONE);break;case gl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _l:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:kt("WebGLState: Invalid blending: ",N);break}else switch(N){case fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gl:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",N);break}x=null,y=null,w=null,E=null,C.set(0,0,0),I=0,g=N,M=pe}return}et=et||mt,Q=Q||nt,rt=rt||xt,(mt!==p||et!==v)&&(r.blendEquationSeparate(ke[mt],ke[et]),p=mt,v=et),(nt!==x||xt!==y||Q!==w||rt!==E)&&(r.blendFuncSeparate(te[nt],te[xt],te[Q],te[rt]),x=nt,y=xt,w=Q,E=rt),(Ht.equals(C)===!1||we!==I)&&(r.blendColor(Ht.r,Ht.g,Ht.b,we),C.copy(Ht),I=we),g=N,M=!1}function de(N,mt){N.side===fe?_t(r.CULL_FACE):J(r.CULL_FACE);let nt=N.side===ni;mt&&(nt=!nt),Wt(nt),N.blending===fs&&N.transparent===!1?jt(Gi):jt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const xt=N.stencilWrite;a.setTest(xt),xt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Pe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(N){T!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),T=N)}function Re(N){N!==pu?(J(r.CULL_FACE),N!==P&&(N===ml?r.cullFace(r.BACK):N===mu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),P=N}function L(N){N!==O&&(q&&r.lineWidth(N),O=N)}function Pe(N,mt,nt){N?(J(r.POLYGON_OFFSET_FILL),(B!==mt||W!==nt)&&(r.polygonOffset(mt,nt),B=mt,W=nt)):_t(r.POLYGON_OFFSET_FILL)}function ae(N){N?J(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function ve(N){N===void 0&&(N=r.TEXTURE0+H-1),ot!==N&&(r.activeTexture(N),ot=N)}function bt(N,mt,nt){nt===void 0&&(ot===null?nt=r.TEXTURE0+H-1:nt=ot);let xt=at[nt];xt===void 0&&(xt={type:void 0,texture:void 0},at[nt]=xt),(xt.type!==N||xt.texture!==mt)&&(ot!==nt&&(r.activeTexture(nt),ot=nt),r.bindTexture(N,mt||K[N]),xt.type=N,xt.texture=mt)}function R(){const N=at[ot];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function $(){try{r.texSubImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function Z(){try{r.texSubImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function Et(){try{r.compressedTexSubImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function ct(){try{r.texStorage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function Tt(){try{r.texStorage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function Ut(){try{r.texImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function it(){try{r.texImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function ht(N){Nt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Nt.copy(N))}function wt(N){ye.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ye.copy(N))}function At(N,mt){let nt=l.get(mt);nt===void 0&&(nt=new WeakMap,l.set(mt,nt));let xt=nt.get(N);xt===void 0&&(xt=r.getUniformBlockIndex(mt,N.name),nt.set(N,xt))}function lt(N,mt){const xt=l.get(mt).get(N);c.get(mt)!==xt&&(r.uniformBlockBinding(mt,xt,N.__bindingPointIndex),c.set(mt,xt))}function Yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ot=null,at={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,w=null,E=null,C=new vt(0,0,0),I=0,M=!1,T=null,P=null,O=null,B=null,W=null,Nt.set(0,0,r.canvas.width,r.canvas.height),ye.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:_t,bindFramebuffer:Ft,drawBuffers:Mt,useProgram:oe,setBlending:jt,setMaterial:de,setFlipSided:Wt,setCullFace:Re,setLineWidth:L,setPolygonOffset:Pe,setScissorTest:ae,activeTexture:ve,bindTexture:bt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:Ut,texImage3D:it,updateUBOMapping:At,uniformBlockBinding:lt,texStorage2D:ct,texStorage3D:Tt,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:Et,scissor:ht,viewport:wt,reset:Yt}}function Vx(r,t,e,i,n,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return f?new OffscreenCanvas(R,S):uo("canvas")}function _(R,S,k){let $=1;const Z=bt(R);if((Z.width>k||Z.height>k)&&($=k/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor($*Z.width),Et=Math.floor($*Z.height);d===void 0&&(d=m(Y,Et));const ct=S?m(Y,Et):d;return ct.width=Y,ct.height=Et,ct.getContext("2d").drawImage(R,0,0,Y,Et),Pt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Et+")."),ct}else return"data"in R&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,S,k,$,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=S;if(S===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),S===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),S===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),S===r.RGBA){const Et=Z?Ma:se.getTransfer($);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=Et===ge?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(R,S){let k;return R?S===null||S===qi||S===co?k=r.DEPTH24_STENCIL8:S===bi?k=r.DEPTH32F_STENCIL8:S===ro&&(k=r.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===co?k=r.DEPTH_COMPONENT24:S===bi?k=r.DEPTH_COMPONENT32F:S===ro&&(k=r.DEPTH_COMPONENT16),k}function w(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==He&&R.minFilter!==ze?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){const S=R.target;S.removeEventListener("dispose",E),I(S),S.isVideoTexture&&h.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),T(S)}function I(R){const S=i.get(R);if(S.__webglInit===void 0)return;const k=R.source,$=u.get(k);if($){const Z=$[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(R),Object.keys($).length===0&&u.delete(k)}i.remove(R)}function M(R){const S=i.get(R);r.deleteTexture(S.__webglTexture);const k=R.source,$=u.get(k);delete $[S.__cacheKey],o.memory.textures--}function T(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Z=0;Z<S.__webglFramebuffer[$].length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[$][Z]);else r.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)r.deleteFramebuffer(S.__webglFramebuffer[$]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=R.textures;for(let $=0,Z=k.length;$<Z;$++){const Y=i.get(k[$]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(R)}let P=0;function O(){P=0}function B(){const R=P;return R>=n.maxTextures&&Pt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),P+=1,R}function W(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function H(R,S){const k=i.get(R);if(R.isVideoTexture&&ae(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const $=R.image;if($===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,R,S);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function q(R,S){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){K(k,R,S);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function G(R,S){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){K(k,R,S);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function j(R,S){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){J(k,R,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const ot={[Wi]:r.REPEAT,[Fi]:r.CLAMP_TO_EDGE,[ya]:r.MIRRORED_REPEAT},at={[He]:r.NEAREST,[td]:r.NEAREST_MIPMAP_NEAREST,[Zs]:r.NEAREST_MIPMAP_LINEAR,[ze]:r.LINEAR,[ua]:r.LINEAR_MIPMAP_NEAREST,[on]:r.LINEAR_MIPMAP_LINEAR},ft={[Hu]:r.NEVER,[$u]:r.ALWAYS,[Vu]:r.LESS,[Wc]:r.LEQUAL,[Wu]:r.EQUAL,[qc]:r.GEQUAL,[qu]:r.GREATER,[Xu]:r.NOTEQUAL};function Bt(R,S){if(S.type===bi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ze||S.magFilter===ua||S.magFilter===Zs||S.magFilter===on||S.minFilter===ze||S.minFilter===ua||S.minFilter===Zs||S.minFilter===on)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ot[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ot[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ot[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,at[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===He||S.minFilter!==Zs&&S.minFilter!==on||S.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Nt(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const $=S.source;let Z=u.get($);Z===void 0&&(Z={},u.set($,Z));const Y=W(S);if(Y!==R.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[Y].usedTimes++;const Et=Z[R.__cacheKey];Et!==void 0&&(Z[R.__cacheKey].usedTimes--,Et.usedTimes===0&&M(S)),R.__cacheKey=Y,R.__webglTexture=Z[Y].texture}return k}function ye(R,S,k){return Math.floor(Math.floor(R/k)/S)}function he(R,S,k,$){const Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,k,$,S.data);else{Y.sort((it,ht)=>it.start-ht.start);let Et=0;for(let it=1;it<Y.length;it++){const ht=Y[Et],wt=Y[it],At=ht.start+ht.count,lt=ye(wt.start,S.width,4),Yt=ye(ht.start,S.width,4);wt.start<=At+1&&lt===Yt&&ye(wt.start+wt.count-1,S.width,4)===lt?ht.count=Math.max(ht.count,wt.start+wt.count-ht.start):(++Et,Y[Et]=wt)}Y.length=Et+1;const ct=r.getParameter(r.UNPACK_ROW_LENGTH),Tt=r.getParameter(r.UNPACK_SKIP_PIXELS),Ut=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let it=0,ht=Y.length;it<ht;it++){const wt=Y[it],At=Math.floor(wt.start/4),lt=Math.ceil(wt.count/4),Yt=At%S.width,N=Math.floor(At/S.width),mt=lt,nt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,N),e.texSubImage2D(r.TEXTURE_2D,0,Yt,N,mt,nt,k,$,S.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Tt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ut)}}function K(R,S,k){let $=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=r.TEXTURE_3D);const Z=Nt(R,S),Y=S.source;e.bindTexture($,R.__webglTexture,r.TEXTURE0+k);const Et=i.get(Y);if(Y.version!==Et.__version||Z===!0){e.activeTexture(r.TEXTURE0+k);const ct=se.getPrimaries(se.workingColorSpace),Tt=S.colorSpace===xn?null:se.getPrimaries(S.colorSpace),Ut=S.colorSpace===xn||ct===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let it=_(S.image,!1,n.maxTextureSize);it=ve(S,it);const ht=s.convert(S.format,S.colorSpace),wt=s.convert(S.type);let At=y(S.internalFormat,ht,wt,S.colorSpace,S.isVideoTexture);Bt($,S);let lt;const Yt=S.mipmaps,N=S.isVideoTexture!==!0,mt=Et.__version===void 0||Z===!0,nt=Y.dataReady,xt=w(S,it);if(S.isDepthTexture)At=v(S.format===Bn,S.type),mt&&(N?e.texStorage2D(r.TEXTURE_2D,1,At,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,At,it.width,it.height,0,ht,wt,null));else if(S.isDataTexture)if(Yt.length>0){N&&mt&&e.texStorage2D(r.TEXTURE_2D,xt,At,Yt[0].width,Yt[0].height);for(let et=0,Q=Yt.length;et<Q;et++)lt=Yt[et],N?nt&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,lt.width,lt.height,ht,wt,lt.data):e.texImage2D(r.TEXTURE_2D,et,At,lt.width,lt.height,0,ht,wt,lt.data);S.generateMipmaps=!1}else N?(mt&&e.texStorage2D(r.TEXTURE_2D,xt,At,it.width,it.height),nt&&he(S,it,ht,wt)):e.texImage2D(r.TEXTURE_2D,0,At,it.width,it.height,0,ht,wt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&mt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,At,Yt[0].width,Yt[0].height,it.depth);for(let et=0,Q=Yt.length;et<Q;et++)if(lt=Yt[et],S.format!==fi)if(ht!==null)if(N){if(nt)if(S.layerUpdates.size>0){const rt=hh(lt.width,lt.height,S.format,S.type);for(const Ht of S.layerUpdates){const we=lt.data.subarray(Ht*rt/lt.data.BYTES_PER_ELEMENT,(Ht+1)*rt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,Ht,lt.width,lt.height,1,ht,we)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,lt.width,lt.height,it.depth,ht,lt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,At,lt.width,lt.height,it.depth,0,lt.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?nt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,lt.width,lt.height,it.depth,ht,wt,lt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,At,lt.width,lt.height,it.depth,0,ht,wt,lt.data)}else{N&&mt&&e.texStorage2D(r.TEXTURE_2D,xt,At,Yt[0].width,Yt[0].height);for(let et=0,Q=Yt.length;et<Q;et++)lt=Yt[et],S.format!==fi?ht!==null?N?nt&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(r.TEXTURE_2D,et,At,lt.width,lt.height,0,lt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?nt&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,lt.width,lt.height,ht,wt,lt.data):e.texImage2D(r.TEXTURE_2D,et,At,lt.width,lt.height,0,ht,wt,lt.data)}else if(S.isDataArrayTexture)if(N){if(mt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,At,it.width,it.height,it.depth),nt)if(S.layerUpdates.size>0){const et=hh(it.width,it.height,S.format,S.type);for(const Q of S.layerUpdates){const rt=it.data.subarray(Q*et/it.data.BYTES_PER_ELEMENT,(Q+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,ht,wt,rt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ht,wt,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,At,it.width,it.height,it.depth,0,ht,wt,it.data);else if(S.isData3DTexture)N?(mt&&e.texStorage3D(r.TEXTURE_3D,xt,At,it.width,it.height,it.depth),nt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ht,wt,it.data)):e.texImage3D(r.TEXTURE_3D,0,At,it.width,it.height,it.depth,0,ht,wt,it.data);else if(S.isFramebufferTexture){if(mt)if(N)e.texStorage2D(r.TEXTURE_2D,xt,At,it.width,it.height);else{let et=it.width,Q=it.height;for(let rt=0;rt<xt;rt++)e.texImage2D(r.TEXTURE_2D,rt,At,et,Q,0,ht,wt,null),et>>=1,Q>>=1}}else if(Yt.length>0){if(N&&mt){const et=bt(Yt[0]);e.texStorage2D(r.TEXTURE_2D,xt,At,et.width,et.height)}for(let et=0,Q=Yt.length;et<Q;et++)lt=Yt[et],N?nt&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ht,wt,lt):e.texImage2D(r.TEXTURE_2D,et,At,ht,wt,lt);S.generateMipmaps=!1}else if(N){if(mt){const et=bt(it);e.texStorage2D(r.TEXTURE_2D,xt,At,et.width,et.height)}nt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,wt,it)}else e.texImage2D(r.TEXTURE_2D,0,At,ht,wt,it);g(S)&&p($),Et.__version=Y.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,k){if(S.image.length!==6)return;const $=Nt(R,S),Z=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const Y=i.get(Z);if(Z.version!==Y.__version||$===!0){e.activeTexture(r.TEXTURE0+k);const Et=se.getPrimaries(se.workingColorSpace),ct=S.colorSpace===xn?null:se.getPrimaries(S.colorSpace),Tt=S.colorSpace===xn||Et===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ut=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,ht=[];for(let Q=0;Q<6;Q++)!Ut&&!it?ht[Q]=_(S.image[Q],!0,n.maxCubemapSize):ht[Q]=it?S.image[Q].image:S.image[Q],ht[Q]=ve(S,ht[Q]);const wt=ht[0],At=s.convert(S.format,S.colorSpace),lt=s.convert(S.type),Yt=y(S.internalFormat,At,lt,S.colorSpace),N=S.isVideoTexture!==!0,mt=Y.__version===void 0||$===!0,nt=Z.dataReady;let xt=w(S,wt);Bt(r.TEXTURE_CUBE_MAP,S);let et;if(Ut){N&&mt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Yt,wt.width,wt.height);for(let Q=0;Q<6;Q++){et=ht[Q].mipmaps;for(let rt=0;rt<et.length;rt++){const Ht=et[rt];S.format!==fi?At!==null?N?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt,0,0,Ht.width,Ht.height,At,Ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt,Yt,Ht.width,Ht.height,0,Ht.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt,0,0,Ht.width,Ht.height,At,lt,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt,Yt,Ht.width,Ht.height,0,At,lt,Ht.data)}}}else{if(et=S.mipmaps,N&&mt){et.length>0&&xt++;const Q=bt(ht[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Yt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ht[Q].width,ht[Q].height,At,lt,ht[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,ht[Q].width,ht[Q].height,0,At,lt,ht[Q].data);for(let rt=0;rt<et.length;rt++){const we=et[rt].image[Q].image;N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt+1,0,0,we.width,we.height,At,lt,we.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt+1,Yt,we.width,we.height,0,At,lt,we.data)}}else{N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,At,lt,ht[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,At,lt,ht[Q]);for(let rt=0;rt<et.length;rt++){const Ht=et[rt];N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt+1,0,0,At,lt,Ht.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt+1,Yt,At,lt,Ht.image[Q])}}}g(S)&&p(r.TEXTURE_CUBE_MAP),Y.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _t(R,S,k,$,Z,Y){const Et=s.convert(k.format,k.colorSpace),ct=s.convert(k.type),Tt=y(k.internalFormat,Et,ct,k.colorSpace),Ut=i.get(S),it=i.get(k);if(it.__renderTarget=S,!Ut.__hasExternalTextures){const ht=Math.max(1,S.width>>Y),wt=Math.max(1,S.height>>Y);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,Tt,ht,wt,S.depth,0,Et,ct,null):e.texImage2D(Z,Y,Tt,ht,wt,0,Et,ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Pe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,Z,it.__webglTexture,0,L(S)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,Z,it.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(R,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=v(S.stencilBuffer,Z),Et=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Pe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(S),Y,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(S),Y,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,R)}else{const $=S.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],Et=s.convert(Y.format,Y.colorSpace),ct=s.convert(Y.type),Tt=y(Y.internalFormat,Et,ct,Y.colorSpace);Pe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(S),Tt,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(S),Tt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Tt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(R,S,k){const $=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,S.depthTexture);const Ut=s.convert(S.depthTexture.format),it=s.convert(S.depthTexture.type);let ht;S.depthTexture.format===ln?ht=r.DEPTH_COMPONENT24:S.depthTexture.format===Bn&&(ht=r.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ht,S.width,S.height,0,Ut,it,null)}}else H(S.depthTexture,0);const Y=Z.__webglTexture,Et=L(S),ct=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,Tt=S.depthTexture.format===Bn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===ln)Pe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Tt,ct,Y,0,Et):r.framebufferTexture2D(r.FRAMEBUFFER,Tt,ct,Y,0);else if(S.depthTexture.format===Bn)Pe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Tt,ct,Y,0,Et):r.framebufferTexture2D(r.FRAMEBUFFER,Tt,ct,Y,0);else throw new Error("Unknown depthTexture format")}function oe(R){const S=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let $=0;$<6;$++)Mt(S.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?Mt(S.__webglFramebuffer[0],R,0):Mt(S.__webglFramebuffer,R,0)}else if(k){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=r.createRenderbuffer(),Ft(S.__webglDepthbuffer[$],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}else{const $=R.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ft(S.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(R,S,k){const $=i.get(R);S!==void 0&&_t($.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&oe(R)}function te(R){const S=R.texture,k=i.get(R),$=i.get(S);R.addEventListener("dispose",C);const Z=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Et=Z.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=S.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)k.__webglFramebuffer[ct][Tt]=r.createFramebuffer()}else k.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)k.__webglFramebuffer[ct]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Et)for(let ct=0,Tt=Z.length;ct<Tt;ct++){const Ut=i.get(Z[ct]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Pe(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const Tt=Z[ct];k.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const Ut=s.convert(Tt.format,Tt.colorSpace),it=s.convert(Tt.type),ht=y(Tt.internalFormat,Ut,it,Tt.colorSpace,R.isXRRenderTarget===!0),wt=L(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,ht,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ft(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)_t(k.__webglFramebuffer[ct][Tt],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt);else _t(k.__webglFramebuffer[ct],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ct=0,Tt=Z.length;ct<Tt;ct++){const Ut=Z[ct],it=i.get(Ut);let ht=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,it.__webglTexture),Bt(ht,Ut),_t(k.__webglFramebuffer,R,Ut,r.COLOR_ATTACHMENT0+ct,ht,0),g(Ut)&&p(ht)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),Bt(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)_t(k.__webglFramebuffer[Tt],R,S,r.COLOR_ATTACHMENT0,ct,Tt);else _t(k.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ct,0);g(S)&&p(ct),e.unbindTexture()}R.depthBuffer&&oe(R)}function jt(R){const S=R.textures;for(let k=0,$=S.length;k<$;k++){const Z=S[k];if(g(Z)){const Y=x(R),Et=i.get(Z).__webglTexture;e.bindTexture(Y,Et),p(Y),e.unbindTexture()}}}const de=[],Wt=[];function Re(R){if(R.samples>0){if(Pe(R)===!1){const S=R.textures,k=R.width,$=R.height;let Z=r.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=i.get(R),ct=S.length>1;if(ct)for(let Ut=0;Ut<S.length;Ut++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Tt=R.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ut=0;Ut<S.length;Ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[Ut]);const it=i.get(S[Ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,it,0)}r.blitFramebuffer(0,0,k,$,0,0,k,$,Z,r.NEAREST),c===!0&&(de.length=0,Wt.length=0,de.push(r.COLOR_ATTACHMENT0+Ut),R.depthBuffer&&R.resolveDepthBuffer===!1&&(de.push(Y),Wt.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let Ut=0;Ut<S.length;Ut++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,Et.__webglColorRenderbuffer[Ut]);const it=i.get(S[Ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,it,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function L(R){return Math.min(n.maxSamples,R.samples)}function Pe(R){const S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ve(R,S){const k=R.colorSpace,$=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Je&&k!==xn&&(se.getTransfer(k)===ge?($!==fi||Z!==ui)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",k)),S}function bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=ke,this.setupRenderTarget=te,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Wx(r,t){function e(i,n=xn){let s;const o=se.getTransfer(n);if(i===ui)return r.UNSIGNED_BYTE;if(i===Bc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Uc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===nd)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===sd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===ed)return r.BYTE;if(i===id)return r.SHORT;if(i===ro)return r.UNSIGNED_SHORT;if(i===Oc)return r.INT;if(i===qi)return r.UNSIGNED_INT;if(i===bi)return r.FLOAT;if(i===pi)return r.HALF_FLOAT;if(i===od)return r.ALPHA;if(i===ad)return r.RGB;if(i===fi)return r.RGBA;if(i===ln)return r.DEPTH_COMPONENT;if(i===Bn)return r.DEPTH_STENCIL;if(i===Fc)return r.RED;if(i===zc)return r.RED_INTEGER;if(i===vs)return r.RG;if(i===Gc)return r.RG_INTEGER;if(i===Hc)return r.RGBA_INTEGER;if(i===fa||i===pa||i===ma||i===ga)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wr||i===qr||i===Xr||i===$r)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$r)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yr||i===Kr||i===jr||i===Zr||i===Jr||i===Qr||i===tc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yr||i===Kr)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zr)return s.COMPRESSED_R11_EAC;if(i===Jr)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Qr)return s.COMPRESSED_RG11_EAC;if(i===tc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ec||i===ic||i===nc||i===sc||i===oc||i===ac||i===rc||i===cc||i===lc||i===hc||i===dc||i===uc||i===fc||i===pc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ec)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===gc||i===_c)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===mc)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xc||i===yc||i===vc||i===Mc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===xc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
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

}`;class $x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ad(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ye({vertexShader:qx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new Ve(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yx extends Hn{constructor(t,e){super();const i=this;let n=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new $x,p={},x=e.getContextAttributes();let y=null,v=null;const w=[],E=[],C=new st;let I=null;const M=new ii;M.viewport=new Ee;const T=new ii;T.viewport=new Ee;const P=[M,T],O=new Xp;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=w[K];return J===void 0&&(J=new lr,w[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=w[K];return J===void 0&&(J=new lr,w[K]=J),J.getGripSpace()},this.getHand=function(K){let J=w[K];return J===void 0&&(J=new lr,w[K]=J),J.getHandSpace()};function H(K){const J=E.indexOf(K.inputSource);if(J===-1)return;const _t=w[J];_t!==void 0&&(_t.update(K.inputSource,K.frame,l||o),_t.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",G);for(let K=0;K<w.length;K++){const J=E[K];J!==null&&(E[K]=null,w[K].disconnect(J))}B=null,W=null,g.reset();for(const K in p)delete p[K];t.setRenderTarget(y),f=null,u=null,d=null,n=null,v=null,he.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(y=t.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",q),n.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ft=null,Mt=null;x.depth&&(Mt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=x.stencil?Bn:ln,Ft=x.stencil?co:qi);const oe={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(oe),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new si(u.textureWidth,u.textureHeight,{format:fi,type:ui,depthTexture:new po(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,_t),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new si(f.framebufferWidth,f.framebufferHeight,{format:fi,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await n.requestReferenceSpace(a),he.setContext(n),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(K){for(let J=0;J<K.removed.length;J++){const _t=K.removed[J],Ft=E.indexOf(_t);Ft>=0&&(E[Ft]=null,w[Ft].disconnect(_t))}for(let J=0;J<K.added.length;J++){const _t=K.added[J];let Ft=E.indexOf(_t);if(Ft===-1){for(let oe=0;oe<w.length;oe++)if(oe>=E.length){E.push(_t),Ft=oe;break}else if(E[oe]===null){E[oe]=_t,Ft=oe;break}if(Ft===-1)break}const Mt=w[Ft];Mt&&Mt.connect(_t)}}const j=new b,ot=new b;function at(K,J,_t){j.setFromMatrixPosition(J.matrixWorld),ot.setFromMatrixPosition(_t.matrixWorld);const Ft=j.distanceTo(ot),Mt=J.projectionMatrix.elements,oe=_t.projectionMatrix.elements,ke=Mt[14]/(Mt[10]-1),te=Mt[14]/(Mt[10]+1),jt=(Mt[9]+1)/Mt[5],de=(Mt[9]-1)/Mt[5],Wt=(Mt[8]-1)/Mt[0],Re=(oe[8]+1)/oe[0],L=ke*Wt,Pe=ke*Re,ae=Ft/(-Wt+Re),ve=ae*-Wt;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ve),K.translateZ(ae),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Mt[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const bt=ke+ae,R=te+ae,S=L-ve,k=Pe+(Ft-ve),$=jt*te/R*bt,Z=de*te/R*bt;K.projectionMatrix.makePerspective(S,k,$,Z,bt,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ft(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let J=K.near,_t=K.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),O.near=T.near=M.near=J,O.far=T.far=M.far=_t,(B!==O.near||W!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,W=O.far),O.layers.mask=K.layers.mask|6,M.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;const Ft=K.parent,Mt=O.cameras;ft(O,Ft);for(let oe=0;oe<Mt.length;oe++)ft(Mt[oe],Ft);Mt.length===2?at(O,M,T):O.projectionMatrix.copy(M.projectionMatrix),Bt(K,O,Ft)};function Bt(K,J,_t){_t===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(_t.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ms*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(K){return p[K]};let Nt=null;function ye(K,J){if(h=J.getViewerPose(l||o),m=J,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ft=!1;_t.length!==O.cameras.length&&(O.cameras.length=0,Ft=!0);for(let te=0;te<_t.length;te++){const jt=_t[te];let de=null;if(f!==null)de=f.getViewport(jt);else{const Re=d.getViewSubImage(u,jt);de=Re.viewport,te===0&&(t.setRenderTargetTextures(v,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(v))}let Wt=P[te];Wt===void 0&&(Wt=new ii,Wt.layers.enable(te),Wt.viewport=new Ee,P[te]=Wt),Wt.matrix.fromArray(jt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(jt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(de.x,de.y,de.width,de.height),te===0&&(O.matrix.copy(Wt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ft===!0&&O.cameras.push(Wt)}const Mt=n.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const te=d.getDepthInformation(_t[0]);te&&te.isValid&&te.texture&&g.init(te,n.renderState)}if(Mt&&Mt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let te=0;te<_t.length;te++){const jt=_t[te].camera;if(jt){let de=p[jt];de||(de=new Ad,p[jt]=de);const Wt=d.getCameraImage(jt);de.sourceTexture=Wt}}}}for(let _t=0;_t<w.length;_t++){const Ft=E[_t],Mt=w[_t];Ft!==null&&Mt!==void 0&&Mt.update(Ft,J,l||o)}Nt&&Nt(K,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}const he=new Hd;he.setAnimationLoop(ye),this.setAnimationLoop=function(K){Nt=K},this.dispose=function(){}}}const Rn=new Xi,Kx=new Gt;function jx(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,_d(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,x,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ni&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ni&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,Rn.copy(v),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),g.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(Rn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Zx(r,t,e,i){let n={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const v=y.program;i.uniformBlockBinding(x,v)}function l(x,y){let v=n[x.id];v===void 0&&(m(x),v=h(x),n[x.id]=v,x.addEventListener("dispose",g));const w=y.program;i.updateUBOMapping(x,w);const E=t.render.frame;s[x.id]!==E&&(u(x),s[x.id]=E)}function h(x){const y=d();x.__bindingPointIndex=y;const v=r.createBuffer(),w=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,w,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=n[x.id],v=x.uniforms,w=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,C=v.length;E<C;E++){const I=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,T=I.length;M<T;M++){const P=I[M];if(f(P,E,M,w)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let H=0;H<B.length;H++){const q=B[H],G=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,O+W,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,W),W+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,y,v,w){const E=x.value,C=y+"_"+v;if(w[C]===void 0)return typeof E=="number"||typeof E=="boolean"?w[C]=E:w[C]=E.clone(),!0;{const I=w[C];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return w[C]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(x){const y=x.uniforms;let v=0;const w=16;for(let C=0,I=y.length;C<I;C++){const M=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,P=M.length;T<P;T++){const O=M[T],B=Array.isArray(O.value)?O.value:[O.value];for(let W=0,H=B.length;W<H;W++){const q=B[W],G=_(q),j=v%w,ot=j%G.boundary,at=j+ot;v+=ot,at!==0&&w-at<G.storage&&(v+=w-at),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=G.storage}}}const E=v%w;return E>0&&(v+=w-E),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pt("WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function p(){for(const x in n)r.deleteBuffer(n[x]);o=[],n={},s={}}return{bind:c,update:l,dispose:p}}const Jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function Qx(){return Ni===null&&(Ni=new Kc(Jx,16,16,vs,pi),Ni.name="DFG_LUT",Ni.minFilter=ze,Ni.magFilter=ze,Ni.wrapS=Fi,Ni.wrapT=Fi,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class ty{constructor(t={}){const{canvas:e=Ku(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ui}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=f,g=new Set([Hc,Gc,zc]),p=new Set([ui,qi,ro,co,Bc,Uc]),x=new Uint32Array(4),y=new Int32Array(4);let v=null,w=null;const E=[],C=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=Ie;let P=0,O=0,B=null,W=-1,H=null;const q=new Ee,G=new Ee;let j=null;const ot=new vt(0);let at=0,ft=e.width,Bt=e.height,Nt=1,ye=null,he=null;const K=new Ee(0,0,ft,Bt),J=new Ee(0,0,ft,Bt);let _t=!1;const Ft=new Zc;let Mt=!1,oe=!1;const ke=new Gt,te=new b,jt=new Ee,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Re(){return B===null?Nt:1}let L=i;function Pe(A,U){return e.getContext(A,U)}try{const A={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kc}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",pe,!1),L===null){const U="webgl2";if(L=Pe(U,A),L===null)throw Pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw kt("WebGLRenderer: "+A.message),A}let ae,ve,bt,R,S,k,$,Z,Y,Et,ct,Tt,Ut,it,ht,wt,At,lt,Yt,N,mt,nt,xt,et;function Q(){ae=new Qg(L),ae.init(),nt=new Wx(L,ae),ve=new Wg(L,ae,t,nt),bt=new Hx(L,ae),ve.reversedDepthBuffer&&u&&bt.buffers.depth.setReversed(!0),R=new i_(L),S=new Ex,k=new Vx(L,ae,bt,S,ve,nt,R),$=new Xg(M),Z=new Jg(M),Y=new am(L),xt=new Hg(L,Y),Et=new t_(L,Y,R,xt),ct=new s_(L,Et,Y,R),Yt=new n_(L,ve,k),wt=new qg(S),Tt=new Ax(M,$,Z,ae,ve,xt,wt),Ut=new jx(M,S),it=new Rx,ht=new Nx(ae),lt=new Gg(M,$,Z,bt,ct,m,c),At=new zx(M,ct,ve),et=new Zx(L,R,ve,bt),N=new Vg(L,ae,R),mt=new e_(L,ae,R),R.programs=Tt.programs,M.capabilities=ve,M.extensions=ae,M.properties=S,M.renderLists=it,M.shadowMap=At,M.state=bt,M.info=R}Q(),_!==ui&&(I=new a_(_,e.width,e.height,n,s));const rt=new Yx(M,L);this.xr=rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(A){A!==void 0&&(Nt=A,this.setSize(ft,Bt,!1))},this.getSize=function(A){return A.set(ft,Bt)},this.setSize=function(A,U,X=!0){if(rt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=A,Bt=U,e.width=Math.floor(A*Nt),e.height=Math.floor(U*Nt),X===!0&&(e.style.width=A+"px",e.style.height=U+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(ft*Nt,Bt*Nt).floor()},this.setDrawingBufferSize=function(A,U,X){ft=A,Bt=U,Nt=X,e.width=Math.floor(A*X),e.height=Math.floor(U*X),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(_===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(q)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,U,X,V){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,U,X,V),bt.viewport(q.copy(K).multiplyScalar(Nt).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,U,X,V){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,U,X,V),bt.scissor(G.copy(J).multiplyScalar(Nt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){bt.setScissorTest(_t=A)},this.setOpaqueSort=function(A){ye=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,X=!0){let V=0;if(A){let z=!1;if(B!==null){const dt=B.texture.format;z=g.has(dt)}if(z){const dt=B.texture.type,yt=p.has(dt),pt=lt.getClearColor(),St=lt.getClearAlpha(),Ct=pt.r,Ot=pt.g,It=pt.b;yt?(x[0]=Ct,x[1]=Ot,x[2]=It,x[3]=St,L.clearBufferuiv(L.COLOR,0,x)):(y[0]=Ct,y[1]=Ot,y[2]=It,y[3]=St,L.clearBufferiv(L.COLOR,0,y))}else V|=L.COLOR_BUFFER_BIT}U&&(V|=L.DEPTH_BUFFER_BIT),X&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),lt.dispose(),it.dispose(),ht.dispose(),S.dispose(),$.dispose(),Z.dispose(),ct.dispose(),xt.dispose(),et.dispose(),Tt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",cl),rt.removeEventListener("sessionend",ll),Sn.stop()};function Ht(A){A.preventDefault(),ba("WebGLRenderer: Context Lost."),T=!0}function we(){ba("WebGLRenderer: Context Restored."),T=!1;const A=R.autoReset,U=At.enabled,X=At.autoUpdate,V=At.needsUpdate,z=At.type;Q(),R.autoReset=A,At.enabled=U,At.autoUpdate=X,At.needsUpdate=V,At.type=z}function pe(A){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ki(A){const U=A.target;U.removeEventListener("dispose",ki),Zi(U)}function Zi(A){au(A),S.remove(A)}function au(A){const U=S.get(A).programs;U!==void 0&&(U.forEach(function(X){Tt.releaseProgram(X)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,X,V,z,dt){U===null&&(U=de);const yt=z.isMesh&&z.matrixWorld.determinant()<0,pt=cu(A,U,X,V,z);bt.setMaterial(V,yt);let St=X.index,Ct=1;if(V.wireframe===!0){if(St=Et.getWireframeAttribute(X),St===void 0)return;Ct=2}const Ot=X.drawRange,It=X.attributes.position;let Zt=Ot.start*Ct,Me=(Ot.start+Ot.count)*Ct;dt!==null&&(Zt=Math.max(Zt,dt.start*Ct),Me=Math.min(Me,(dt.start+dt.count)*Ct)),St!==null?(Zt=Math.max(Zt,0),Me=Math.min(Me,St.count)):It!=null&&(Zt=Math.max(Zt,0),Me=Math.min(Me,It.count));const Ne=Me-Zt;if(Ne<0||Ne===1/0)return;xt.setup(z,V,pt,X,St);let Oe,be=N;if(St!==null&&(Oe=Y.get(St),be=mt,be.setIndex(Oe)),z.isMesh)V.wireframe===!0?(bt.setLineWidth(V.wireframeLinewidth*Re()),be.setMode(L.LINES)):be.setMode(L.TRIANGLES);else if(z.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),bt.setLineWidth(Dt*Re()),z.isLineSegments?be.setMode(L.LINES):z.isLineLoop?be.setMode(L.LINE_LOOP):be.setMode(L.LINE_STRIP)}else z.isPoints?be.setMode(L.POINTS):z.isSprite&&be.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))be.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Dt=z._multiDrawStarts,me=z._multiDrawCounts,ce=z._multiDrawCount,ci=St?Y.get(St).bytesPerElement:1,Wn=S.get(V).currentProgram.getUniforms();for(let li=0;li<ce;li++)Wn.setValue(L,"_gl_DrawID",li),be.render(Dt[li]/ci,me[li])}else if(z.isInstancedMesh)be.renderInstances(Zt,Ne,z.count);else if(X.isInstancedBufferGeometry){const Dt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,me=Math.min(X.instanceCount,Dt);be.renderInstances(Zt,Ne,me)}else be.render(Zt,Ne)};function rl(A,U,X){A.transparent===!0&&A.side===fe&&A.forceSinglePass===!1?(A.side=ni,A.needsUpdate=!0,Co(A,U,X),A.side=cn,A.needsUpdate=!0,Co(A,U,X),A.side=fe):Co(A,U,X)}this.compile=function(A,U,X=null){X===null&&(X=A),w=ht.get(X),w.init(U),C.push(w),X.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),A!==X&&A.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights();const V=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const dt=z.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){const pt=dt[yt];rl(pt,X,z),V.add(pt)}else rl(dt,X,z),V.add(dt)}),w=C.pop(),V},this.compileAsync=function(A,U,X=null){const V=this.compile(A,U,X);return new Promise(z=>{function dt(){if(V.forEach(function(yt){S.get(yt).currentProgram.isReady()&&V.delete(yt)}),V.size===0){z(A);return}setTimeout(dt,10)}ae.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Fa=null;function ru(A){Fa&&Fa(A)}function cl(){Sn.stop()}function ll(){Sn.start()}const Sn=new Hd;Sn.setAnimationLoop(ru),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(A){Fa=A,rt.setAnimationLoop(A),A===null?Sn.stop():Sn.start()},rt.addEventListener("sessionstart",cl),rt.addEventListener("sessionend",ll),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const X=rt.enabled===!0&&rt.isPresenting===!0,V=I!==null&&(B===null||X)&&I.begin(M,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,U,B),w=ht.get(A,C.length),w.init(U),C.push(w),ke.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ft.setFromProjectionMatrix(ke,zi,U.reversedDepth),oe=this.localClippingEnabled,Mt=wt.init(this.clippingPlanes,oe),v=it.get(A,E.length),v.init(),E.push(v),rt.enabled===!0&&rt.isPresenting===!0){const yt=M.xr.getDepthSensingMesh();yt!==null&&za(yt,U,-1/0,M.sortObjects)}za(A,U,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(ye,he),Wt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Wt&&lt.addToRenderList(v,A),this.info.render.frame++,Mt===!0&&wt.beginShadows();const z=w.state.shadowsArray;if(At.render(z,A,U),Mt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&I.hasRenderPass())===!1){const yt=v.opaque,pt=v.transmissive;if(w.setupLights(),U.isArrayCamera){const St=U.cameras;if(pt.length>0)for(let Ct=0,Ot=St.length;Ct<Ot;Ct++){const It=St[Ct];dl(yt,pt,A,It)}Wt&&lt.render(A);for(let Ct=0,Ot=St.length;Ct<Ot;Ct++){const It=St[Ct];hl(v,A,It,It.viewport)}}else pt.length>0&&dl(yt,pt,A,U),Wt&&lt.render(A),hl(v,A,U)}B!==null&&O===0&&(k.updateMultisampleRenderTarget(B),k.updateRenderTargetMipmap(B)),V&&I.end(M),A.isScene===!0&&A.onAfterRender(M,A,U),xt.resetDefaultState(),W=-1,H=null,C.pop(),C.length>0?(w=C[C.length-1],Mt===!0&&wt.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function za(A,U,X,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ft.intersectsSprite(A)){V&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ke);const yt=ct.update(A),pt=A.material;pt.visible&&v.push(A,yt,pt,X,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ft.intersectsObject(A))){const yt=ct.update(A),pt=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),jt.copy(yt.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(ke)),Array.isArray(pt)){const St=yt.groups;for(let Ct=0,Ot=St.length;Ct<Ot;Ct++){const It=St[Ct],Zt=pt[It.materialIndex];Zt&&Zt.visible&&v.push(A,yt,Zt,X,jt.z,It)}}else pt.visible&&v.push(A,yt,pt,X,jt.z,null)}}const dt=A.children;for(let yt=0,pt=dt.length;yt<pt;yt++)za(dt[yt],U,X,V)}function hl(A,U,X,V){const{opaque:z,transmissive:dt,transparent:yt}=A;w.setupLightsView(X),Mt===!0&&wt.setGlobalState(M.clippingPlanes,X),V&&bt.viewport(q.copy(V)),z.length>0&&Eo(z,U,X),dt.length>0&&Eo(dt,U,X),yt.length>0&&Eo(yt,U,X),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function dl(A,U,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Zt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new si(1,1,{generateMipmaps:!0,type:Zt?pi:ui,minFilter:on,samples:ve.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace})}const dt=w.state.transmissionRenderTarget[V.id],yt=V.viewport||q;dt.setSize(yt.z*M.transmissionResolutionScale,yt.w*M.transmissionResolutionScale);const pt=M.getRenderTarget(),St=M.getActiveCubeFace(),Ct=M.getActiveMipmapLevel();M.setRenderTarget(dt),M.getClearColor(ot),at=M.getClearAlpha(),at<1&&M.setClearColor(16777215,.5),M.clear(),Wt&&lt.render(X);const Ot=M.toneMapping;M.toneMapping=Hi;const It=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),Mt===!0&&wt.setGlobalState(M.clippingPlanes,V),Eo(A,X,V),k.updateMultisampleRenderTarget(dt),k.updateRenderTargetMipmap(dt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Me=0,Ne=U.length;Me<Ne;Me++){const Oe=U[Me],{object:be,geometry:Dt,material:me,group:ce}=Oe;if(me.side===fe&&be.layers.test(V.layers)){const ci=me.side;me.side=ni,me.needsUpdate=!0,ul(be,X,V,Dt,me,ce),me.side=ci,me.needsUpdate=!0,Zt=!0}}Zt===!0&&(k.updateMultisampleRenderTarget(dt),k.updateRenderTargetMipmap(dt))}M.setRenderTarget(pt,St,Ct),M.setClearColor(ot,at),It!==void 0&&(V.viewport=It),M.toneMapping=Ot}function Eo(A,U,X){const V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,dt=A.length;z<dt;z++){const yt=A[z],{object:pt,geometry:St,group:Ct}=yt;let Ot=yt.material;Ot.allowOverride===!0&&V!==null&&(Ot=V),pt.layers.test(X.layers)&&ul(pt,U,X,St,Ot,Ct)}}function ul(A,U,X,V,z,dt){A.onBeforeRender(M,U,X,V,z,dt),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(M,U,X,V,A,dt),z.transparent===!0&&z.side===fe&&z.forceSinglePass===!1?(z.side=ni,z.needsUpdate=!0,M.renderBufferDirect(X,U,V,z,A,dt),z.side=cn,z.needsUpdate=!0,M.renderBufferDirect(X,U,V,z,A,dt),z.side=fe):M.renderBufferDirect(X,U,V,z,A,dt),A.onAfterRender(M,U,X,V,z,dt)}function Co(A,U,X){U.isScene!==!0&&(U=de);const V=S.get(A),z=w.state.lights,dt=w.state.shadowsArray,yt=z.state.version,pt=Tt.getParameters(A,z.state,dt,U,X),St=Tt.getProgramCacheKey(pt);let Ct=V.programs;V.environment=A.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(A.isMeshStandardMaterial?Z:$).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Ct===void 0&&(A.addEventListener("dispose",ki),Ct=new Map,V.programs=Ct);let Ot=Ct.get(St);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===yt)return pl(A,pt),Ot}else pt.uniforms=Tt.getUniforms(A),A.onBeforeCompile(pt,M),Ot=Tt.acquireProgram(pt,St),Ct.set(St,Ot),V.uniforms=pt.uniforms;const It=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=wt.uniform),pl(A,pt),V.needsLights=hu(A),V.lightsStateVersion=yt,V.needsLights&&(It.ambientLightColor.value=z.state.ambient,It.lightProbe.value=z.state.probe,It.directionalLights.value=z.state.directional,It.directionalLightShadows.value=z.state.directionalShadow,It.spotLights.value=z.state.spot,It.spotLightShadows.value=z.state.spotShadow,It.rectAreaLights.value=z.state.rectArea,It.ltc_1.value=z.state.rectAreaLTC1,It.ltc_2.value=z.state.rectAreaLTC2,It.pointLights.value=z.state.point,It.pointLightShadows.value=z.state.pointShadow,It.hemisphereLights.value=z.state.hemi,It.directionalShadowMap.value=z.state.directionalShadowMap,It.directionalShadowMatrix.value=z.state.directionalShadowMatrix,It.spotShadowMap.value=z.state.spotShadowMap,It.spotLightMatrix.value=z.state.spotLightMatrix,It.spotLightMap.value=z.state.spotLightMap,It.pointShadowMap.value=z.state.pointShadowMap,It.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Ot,V.uniformsList=null,Ot}function fl(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=_a.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function pl(A,U){const X=S.get(A);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function cu(A,U,X,V,z){U.isScene!==!0&&(U=de),k.resetTextureUnits();const dt=U.fog,yt=V.isMeshStandardMaterial?U.environment:null,pt=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Je,St=(V.isMeshStandardMaterial?Z:$).get(V.envMap||yt),Ct=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ot=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!X.morphAttributes.position,Zt=!!X.morphAttributes.normal,Me=!!X.morphAttributes.color;let Ne=Hi;V.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ne=M.toneMapping);const Oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,be=Oe!==void 0?Oe.length:0,Dt=S.get(V),me=w.state.lights;if(Mt===!0&&(oe===!0||A!==H)){const Qe=A===H&&V.id===W;wt.setState(V,A,Qe)}let ce=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==me.state.version||Dt.outputColorSpace!==pt||z.isBatchedMesh&&Dt.batching===!1||!z.isBatchedMesh&&Dt.batching===!0||z.isBatchedMesh&&Dt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Dt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Dt.instancing===!1||!z.isInstancedMesh&&Dt.instancing===!0||z.isSkinnedMesh&&Dt.skinning===!1||!z.isSkinnedMesh&&Dt.skinning===!0||z.isInstancedMesh&&Dt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Dt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Dt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Dt.instancingMorph===!1&&z.morphTexture!==null||Dt.envMap!==St||V.fog===!0&&Dt.fog!==dt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==wt.numPlanes||Dt.numIntersection!==wt.numIntersection)||Dt.vertexAlphas!==Ct||Dt.vertexTangents!==Ot||Dt.morphTargets!==It||Dt.morphNormals!==Zt||Dt.morphColors!==Me||Dt.toneMapping!==Ne||Dt.morphTargetsCount!==be)&&(ce=!0):(ce=!0,Dt.__version=V.version);let ci=Dt.currentProgram;ce===!0&&(ci=Co(V,U,z));let Wn=!1,li=!1,Ns=!1;const Te=ci.getUniforms(),oi=Dt.uniforms;if(bt.useProgram(ci.program)&&(Wn=!0,li=!0,Ns=!0),V.id!==W&&(W=V.id,li=!0),Wn||H!==A){bt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Te.setValue(L,"projectionMatrix",A.projectionMatrix),Te.setValue(L,"viewMatrix",A.matrixWorldInverse);const ai=Te.map.cameraPosition;ai!==void 0&&ai.setValue(L,te.setFromMatrixPosition(A.matrixWorld)),ve.logarithmicDepthBuffer&&Te.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Te.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,li=!0,Ns=!0)}if(Dt.needsLights&&(me.state.directionalShadowMap.length>0&&Te.setValue(L,"directionalShadowMap",me.state.directionalShadowMap,k),me.state.spotShadowMap.length>0&&Te.setValue(L,"spotShadowMap",me.state.spotShadowMap,k),me.state.pointShadowMap.length>0&&Te.setValue(L,"pointShadowMap",me.state.pointShadowMap,k)),z.isSkinnedMesh){Te.setOptional(L,z,"bindMatrix"),Te.setOptional(L,z,"bindMatrixInverse");const Qe=z.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Te.setValue(L,"boneTexture",Qe.boneTexture,k))}z.isBatchedMesh&&(Te.setOptional(L,z,"batchingTexture"),Te.setValue(L,"batchingTexture",z._matricesTexture,k),Te.setOptional(L,z,"batchingIdTexture"),Te.setValue(L,"batchingIdTexture",z._indirectTexture,k),Te.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Te.setValue(L,"batchingColorTexture",z._colorsTexture,k));const mi=X.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&Yt.update(z,X,ci),(li||Dt.receiveShadow!==z.receiveShadow)&&(Dt.receiveShadow=z.receiveShadow,Te.setValue(L,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(oi.envMap.value=St,oi.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(oi.envMapIntensity.value=U.environmentIntensity),oi.dfgLUT!==void 0&&(oi.dfgLUT.value=Qx()),li&&(Te.setValue(L,"toneMappingExposure",M.toneMappingExposure),Dt.needsLights&&lu(oi,Ns),dt&&V.fog===!0&&Ut.refreshFogUniforms(oi,dt),Ut.refreshMaterialUniforms(oi,V,Nt,Bt,w.state.transmissionRenderTarget[A.id]),_a.upload(L,fl(Dt),oi,k)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_a.upload(L,fl(Dt),oi,k),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Te.setValue(L,"center",z.center),Te.setValue(L,"modelViewMatrix",z.modelViewMatrix),Te.setValue(L,"normalMatrix",z.normalMatrix),Te.setValue(L,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Qe=V.uniformsGroups;for(let ai=0,Ga=Qe.length;ai<Ga;ai++){const bn=Qe[ai];et.update(bn,ci),et.bind(bn,ci)}}return ci}function lu(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function hu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,U,X){const V=S.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),S.get(A.texture).__webglTexture=U,S.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){const X=S.get(A);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};const du=L.createFramebuffer();this.setRenderTarget=function(A,U=0,X=0){B=A,P=U,O=X;let V=null,z=!1,dt=!1;if(A){const pt=S.get(A);if(pt.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(L.FRAMEBUFFER,pt.__webglFramebuffer),q.copy(A.viewport),G.copy(A.scissor),j=A.scissorTest,bt.viewport(q),bt.scissor(G),bt.setScissorTest(j),W=-1;return}else if(pt.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(pt.__hasExternalTextures)k.rebindTextures(A,S.get(A.texture).__webglTexture,S.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ot=A.depthTexture;if(pt.__boundDepthTexture!==Ot){if(Ot!==null&&S.has(Ot)&&(A.width!==Ot.image.width||A.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const St=A.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(dt=!0);const Ct=S.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?V=Ct[U][X]:V=Ct[U],z=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?V=S.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?V=Ct[X]:V=Ct,q.copy(A.viewport),G.copy(A.scissor),j=A.scissorTest}else q.copy(K).multiplyScalar(Nt).floor(),G.copy(J).multiplyScalar(Nt).floor(),j=_t;if(X!==0&&(V=du),bt.bindFramebuffer(L.FRAMEBUFFER,V)&&bt.drawBuffers(A,V),bt.viewport(q),bt.scissor(G),bt.setScissorTest(j),z){const pt=S.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,X)}else if(dt){const pt=U;for(let St=0;St<A.textures.length;St++){const Ct=S.get(A.textures[St]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+St,Ct.__webglTexture,X,pt)}}else if(A!==null&&X!==0){const pt=S.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,X)}W=-1},this.readRenderTargetPixels=function(A,U,X,V,z,dt,yt,pt=0){if(!(A&&A.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){bt.bindFramebuffer(L.FRAMEBUFFER,St);try{const Ct=A.textures[pt],Ot=Ct.format,It=Ct.type;if(!ve.textureFormatReadable(Ot)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(It)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&X>=0&&X<=A.height-z&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pt),L.readPixels(U,X,V,z,nt.convert(Ot),nt.convert(It),dt))}finally{const Ct=B!==null?S.get(B).__webglFramebuffer:null;bt.bindFramebuffer(L.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,U,X,V,z,dt,yt,pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St)if(U>=0&&U<=A.width-V&&X>=0&&X<=A.height-z){bt.bindFramebuffer(L.FRAMEBUFFER,St);const Ct=A.textures[pt],Ot=Ct.format,It=Ct.type;if(!ve.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pt),L.readPixels(U,X,V,z,nt.convert(Ot),nt.convert(It),0);const Me=B!==null?S.get(B).__webglFramebuffer:null;bt.bindFramebuffer(L.FRAMEBUFFER,Me);const Ne=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ju(L,Ne,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.deleteBuffer(Zt),L.deleteSync(Ne),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,X=0){const V=Math.pow(2,-X),z=Math.floor(A.image.width*V),dt=Math.floor(A.image.height*V),yt=U!==null?U.x:0,pt=U!==null?U.y:0;k.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,yt,pt,z,dt),bt.unbindTexture()};const uu=L.createFramebuffer(),fu=L.createFramebuffer();this.copyTextureToTexture=function(A,U,X=null,V=null,z=0,dt=null){dt===null&&(z!==0?(fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=z,z=0):dt=0);let yt,pt,St,Ct,Ot,It,Zt,Me,Ne;const Oe=A.isCompressedTexture?A.mipmaps[dt]:A.image;if(X!==null)yt=X.max.x-X.min.x,pt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,Ot=X.min.y,It=X.isBox3?X.min.z:0;else{const mi=Math.pow(2,-z);yt=Math.floor(Oe.width*mi),pt=Math.floor(Oe.height*mi),A.isDataArrayTexture?St=Oe.depth:A.isData3DTexture?St=Math.floor(Oe.depth*mi):St=1,Ct=0,Ot=0,It=0}V!==null?(Zt=V.x,Me=V.y,Ne=V.z):(Zt=0,Me=0,Ne=0);const be=nt.convert(U.format),Dt=nt.convert(U.type);let me;U.isData3DTexture?(k.setTexture3D(U,0),me=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(k.setTexture2DArray(U,0),me=L.TEXTURE_2D_ARRAY):(k.setTexture2D(U,0),me=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ce=L.getParameter(L.UNPACK_ROW_LENGTH),ci=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Wn=L.getParameter(L.UNPACK_SKIP_PIXELS),li=L.getParameter(L.UNPACK_SKIP_ROWS),Ns=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Oe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Oe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,It);const Te=A.isDataArrayTexture||A.isData3DTexture,oi=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){const mi=S.get(A),Qe=S.get(U),ai=S.get(mi.__renderTarget),Ga=S.get(Qe.__renderTarget);bt.bindFramebuffer(L.READ_FRAMEBUFFER,ai.__webglFramebuffer),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ga.__webglFramebuffer);for(let bn=0;bn<St;bn++)Te&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(A).__webglTexture,z,It+bn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(U).__webglTexture,dt,Ne+bn)),L.blitFramebuffer(Ct,Ot,yt,pt,Zt,Me,yt,pt,L.DEPTH_BUFFER_BIT,L.NEAREST);bt.bindFramebuffer(L.READ_FRAMEBUFFER,null),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||S.has(A)){const mi=S.get(A),Qe=S.get(U);bt.bindFramebuffer(L.READ_FRAMEBUFFER,uu),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,fu);for(let ai=0;ai<St;ai++)Te?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,mi.__webglTexture,z,It+ai):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mi.__webglTexture,z),oi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qe.__webglTexture,dt,Ne+ai):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qe.__webglTexture,dt),z!==0?L.blitFramebuffer(Ct,Ot,yt,pt,Zt,Me,yt,pt,L.COLOR_BUFFER_BIT,L.NEAREST):oi?L.copyTexSubImage3D(me,dt,Zt,Me,Ne+ai,Ct,Ot,yt,pt):L.copyTexSubImage2D(me,dt,Zt,Me,Ct,Ot,yt,pt);bt.bindFramebuffer(L.READ_FRAMEBUFFER,null),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else oi?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(me,dt,Zt,Me,Ne,yt,pt,St,be,Dt,Oe.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(me,dt,Zt,Me,Ne,yt,pt,St,be,Oe.data):L.texSubImage3D(me,dt,Zt,Me,Ne,yt,pt,St,be,Dt,Oe):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,dt,Zt,Me,yt,pt,be,Dt,Oe.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,dt,Zt,Me,Oe.width,Oe.height,be,Oe.data):L.texSubImage2D(L.TEXTURE_2D,dt,Zt,Me,yt,pt,be,Dt,Oe);L.pixelStorei(L.UNPACK_ROW_LENGTH,ce),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ci),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wn),L.pixelStorei(L.UNPACK_SKIP_ROWS,li),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ns),dt===0&&U.generateMipmaps&&L.generateMipmap(me),bt.unbindTexture()},this.initRenderTarget=function(A){S.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),bt.unbindTexture()},this.resetState=function(){P=0,O=0,B=null,bt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ey=new bo(-1,1,1,-1,0,1);class iy extends Ae{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const ny=new iy;class $d{constructor(t){this._mesh=new D(ny,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ey)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Yd extends wo{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wa.clone(t.uniforms),this.material=new Ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new $d(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class kh extends wo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class sy extends wo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class oy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new st);this._width=i.width,this._height=i.height,e=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yd(xa),this.copyPass.material.blending=Gi,this.clock=new zd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}kh!==void 0&&(o instanceof kh?i=!0:o instanceof sy&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ay extends wo{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new vt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}}const ry={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Rs extends wo{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new si(s,o,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new si(s,o,{type:pi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new si(s,o,{type:pi});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}const a=ry;this.highPassUniforms=wa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ye({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new st(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wa.clone(xa.uniforms),this.blendMaterial=new Ye({uniforms:this.copyUniforms,vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,premultipliedAlpha:!0,blending:vi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new $t,this._fsQuad=new $d(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new st(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Rs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Rs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new Ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Rs.BlurDirectionX=new st(1,0);Rs.BlurDirectionY=new st(0,1);function cy(r){if(r<=1)return 0;let t=0;for(let e=2;e<=r;e++)t+=Math.floor(75*Math.pow(1.5,e-2));return t}const Kd=[];for(let r=0;r<=20;r++)Kd[r]=cy(r);const ly={dash:{name:"Dash",description:"Quick dodge in any direction",unlockLevel:3,baseCooldown:3,hotkey:"R",staminaCost:15},heavyCharge:{name:"Heavy Charge",description:"Hold for a powerful charged strike",unlockLevel:5,baseCooldown:0,hotkey:"HOLD LMB",staminaCost:35},parry:{name:"Parry",description:"Perfect timed block for riposte",unlockLevel:8,baseCooldown:1.5,hotkey:"F",staminaCost:10},warCry:{name:"War Cry",description:"Damage buff, scares weak enemies",unlockLevel:12,baseCooldown:20,hotkey:"G",staminaCost:25}};class hy{constructor(){this.currentXP=0,this.currentLevel=1,this.maxLevel=20,this.xpThresholds=Kd,this.statPointsPerLevel=3,this.stats={vigor:0,endurance:0,strength:0,dexterity:0,mind:0},this.spentStatPoints=0,this.abilities=ly,this.abilityCooldowns={dash:0,heavyCharge:0,parry:0,warCry:0},this.unlockedAbilities=new Set,this.warCryActive=!1,this.warCryDuration=8,this.warCryTimer=0,this.warCryDamageBonus=.5,this.mindStat=0,this.floatingTexts=[],this.remnant=0,this.heldRemnant=0,this.deathCount=0,this.deathLessons={},this.infusions={strength:0,vitality:0,stamina:0,spirit:0},this.MAX_TOTAL_DEPTH=20,this.MAX_TRACK_DEPTH=5,this.bonfirePosition=new b(0,0,5),this.maxHealth=100,this.maxStamina=100,this.maxPosture=100,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.isDead=!1,this.checkpoint=new b(0,0,5),this.deathScreenEl=document.getElementById("death-screen"),this.player=null,this.enemyManager=null,this.bloodstain=null,this.bloodstainMesh=null,this.staminaRegenDelay=.5,this.staminaRegenRate=25,this.staminaRegenTimer=0,this.postureRegenDelay=1,this.postureRegenRate=15,this.postureRegenTimer=0,this.audioManager=null,this.hitstopActive=!1,this.hitstopDuration=0,this.hitstopTimer=0,this.hud=null,this.cameraController=null,this._loadProgression()}_loadProgression(){try{const t=localStorage.getItem("ashen_progression");if(t){const e=JSON.parse(t);this.currentXP=e.currentXP||0,this.currentLevel=e.currentLevel||1,e.stats&&(this.stats={vigor:e.stats.vigor||0,endurance:e.stats.endurance||0,strength:e.stats.strength||0,dexterity:e.stats.dexterity||0,mind:e.stats.mind||0}),this.spentStatPoints=e.spentStatPoints||0,this._applyStatBonuses(),console.log(`[GameManager] Loaded progression: Level ${this.currentLevel}, XP ${this.currentXP}, Stats: ${JSON.stringify(this.stats)}`)}}catch(t){console.warn("[GameManager] Failed to load progression:",t)}}_saveProgression(){try{const t={currentXP:this.currentXP,currentLevel:this.currentLevel,stats:this.stats,spentStatPoints:this.spentStatPoints};localStorage.setItem("ashen_progression",JSON.stringify(t))}catch(t){console.warn("[GameManager] Failed to save progression:",t)}}getTotalStatPoints(){return Math.max(0,(this.currentLevel-1)*this.statPointsPerLevel)}getAvailableStatPoints(){return this.getTotalStatPoints()-this.spentStatPoints}spendStatPoint(t){return this.getAvailableStatPoints()<=0?(console.warn("[GameManager] No stat points available"),!1):this.stats.hasOwnProperty(t)?(this.stats[t]++,this.spentStatPoints++,this._applyStatBonuses(),this._saveProgression(),console.log(`[GameManager] Spent point on ${t}: now ${this.stats[t]}`),!0):(console.warn(`[GameManager] Invalid stat: ${t}`),!1)}getStatBonuses(){return{bonusHealth:this.stats.vigor*5,bonusStamina:this.stats.endurance*5,staminaRegenMult:1+this.stats.endurance*.05,damageMult:1+this.stats.strength*.05,attackSpeedMult:1+this.stats.dexterity*.03,cooldownMult:Math.max(.5,1-this.stats.mind*.05)}}_applyStatBonuses(){const t=this.getStatBonuses(),e=this.getInfusionBonuses(),i=this.equipmentBonuses||{health:0,stamina:0};this.maxHealth=100+t.bonusHealth+e.bonusHealth+(i.health||0),this.maxStamina=100+t.bonusStamina+e.bonusStamina+(i.stamina||0),this.mindStat=this.stats.mind,this.isDead||(this.health=Math.min(this.health,this.maxHealth),this.stamina=Math.min(this.stamina,this.maxStamina))}applyStatBonuses(){this._applyStatBonuses()}gainXP(t,e=null){if(!(this.currentLevel>=this.maxLevel)){for(this.currentLevel,this.currentXP+=t,e&&this.player&&this._spawnFloatingText(`+${t} XP`,e.clone(),65416);this.currentLevel<this.maxLevel&&this.currentXP>=this.xpThresholds[this.currentLevel+1];)this._levelUp();this._saveProgression()}}_levelUp(){this.currentLevel++,console.log(`[GameManager] LEVEL UP! Now level ${this.currentLevel}`),this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.audioManager&&this.audioManager.play("levelUp",{volume:.8}),this.particleManager&&this.player&&this.particleManager.spawnLevelUpEffect(this.player.mesh.position.clone()),this.player&&(this._spawnFloatingText(`LEVEL ${this.currentLevel}!`,this.player.mesh.position.clone().add(new b(0,2.5,0)),16768256,!0),setTimeout(()=>{this._spawnFloatingText(`+${this.statPointsPerLevel} Stat Points!`,this.player.mesh.position.clone().add(new b(0,2.2,0)),8965375,!1)},600)),this.itemManager&&this.itemManager.showNotification&&setTimeout(()=>{this.itemManager.showNotification(`+${this.statPointsPerLevel} Stat Points! Press TAB to allocate`,"levelup")},800),this.hud&&this.hud.flashLevelUp&&this.hud.flashLevelUp(),this._checkAbilityUnlocks(this.currentLevel)}_spawnFloatingText(t,e,i=16777215,n=!1){if(this.floatingText){const s=typeof i=="number"?"#"+i.toString(16).padStart(6,"0"):i;this.floatingText.spawn(t,e,{color:s,isLevelUp:n,duration:n?2.5:1.5})}}getXPProgress(){if(this.currentLevel>=this.maxLevel)return 1;const t=this.xpThresholds[this.currentLevel],e=this.xpThresholds[this.currentLevel+1],i=this.currentXP-t,n=e-t;return i/n}getXPToNextLevel(){return this.currentLevel>=this.maxLevel?0:this.xpThresholds[this.currentLevel+1]-this.currentXP}isAbilityUnlocked(t){const e=this.abilities[t];return e?this.currentLevel>=e.unlockLevel:!1}getUnlockedAbilities(){const t=[];for(const[e,i]of Object.entries(this.abilities))this.currentLevel>=i.unlockLevel&&t.push({id:e,...i});return t}getCooldownModifier(){return this.getStatBonuses().cooldownMult}isAbilityReady(t){return this.isAbilityUnlocked(t)?this.abilityCooldowns[t]<=0:!1}useAbility(t){const e=this.abilities[t];if(!e)return!1;const i=e.baseCooldown*this.getCooldownModifier();return this.abilityCooldowns[t]=i,this.unlockedAbilities.has(t)||this.unlockedAbilities.add(t),!0}getAbilityCooldown(t){return Math.max(0,this.abilityCooldowns[t]||0)}getAbilityCooldownProgress(t){const e=this.abilities[t];if(!e||e.baseCooldown===0)return 1;const i=this.abilityCooldowns[t]||0,n=e.baseCooldown*this.getCooldownModifier();return 1-i/n}activateWarCry(){this.warCryActive=!0,this.warCryTimer=this.warCryDuration,this.audioManager&&this.audioManager.play("warCry",{volume:.8}),this.particleManager&&this.player&&this.particleManager.spawnWarCryEffect(this.player.mesh.position.clone()),this.player&&this._spawnFloatingText("WAR CRY!",this.player.mesh.position.clone().add(new b(0,2.5,0)),16737792,!0)}getDamageMultiplier(){let t=this.getInfusionBonuses().damageMult;const e=this.getStatBonuses();return t+=e.damageMult-1,this.warCryActive&&(t+=this.warCryDamageBonus),t}getEquipmentDamageBonus(){return this.equipmentBonuses&&this.equipmentBonuses.damage||0}getEquipmentDefense(){return this.equipmentBonuses&&this.equipmentBonuses.defense||0}getEquipmentCritChance(){return this.equipmentBonuses&&this.equipmentBonuses.critChance||0}getEquipmentCritDamage(){return this.equipmentBonuses&&this.equipmentBonuses.critDamage||0}getAttackSpeedMultiplier(){return this.getStatBonuses().attackSpeedMult}_checkAbilityUnlocks(t){for(const[e,i]of Object.entries(this.abilities))i.unlockLevel===t&&this._showAbilityUnlockNotification(e,i)}_showAbilityUnlockNotification(t,e){this.itemManager&&this.itemManager.showNotification&&this.itemManager.showNotification(`NEW ABILITY: ${e.name}`,"ability"),this.player&&(setTimeout(()=>{this._spawnFloatingText(`${e.name} Unlocked!`,this.player.mesh.position.clone().add(new b(0,3,0)),4500223,!0)},500),setTimeout(()=>{this._spawnFloatingText(`[${e.hotkey}] ${e.description}`,this.player.mesh.position.clone().add(new b(0,2.5,0)),8965375,!1)},1200)),this.audioManager&&this.audioManager.play("abilityUnlock",{volume:.7})}calculateEnemyXP(t){let e=Math.floor((t.config?.remnantDrop||25)*.5);return t.config?.isElite&&(e=Math.floor(e*1.5)),t.isBoss&&(e=200),e}triggerHitstop(t=.04){this.hitstopActive=!0,this.hitstopDuration=t,this.hitstopTimer=0}hitstopLight(){this.triggerHitstop(.035)}hitstopHeavy(){this.triggerHitstop(.06)}isInHitstop(){return this.hitstopActive}updateHitstop(t){return this.hitstopActive?(this.hitstopTimer+=t,this.hitstopTimer>=this.hitstopDuration&&(this.hitstopActive=!1,this.hitstopTimer=0),!0):!1}update(t){if(!this.isDead){if(this.staminaRegenTimer+=t,this.staminaRegenTimer>=this.staminaRegenDelay&&this.stamina<this.maxStamina){const e=this.getStatBonuses(),i=this.getInfusionBonuses(),n=e.staminaRegenMult*i.staminaRegenMult;this.stamina=Math.min(this.maxStamina,this.stamina+this.staminaRegenRate*n*t)}this.postureRegenTimer+=t,this.postureRegenTimer>=this.postureRegenDelay&&this.posture>0&&(this.posture=Math.max(0,this.posture-this.postureRegenRate*t));for(const e in this.abilityCooldowns)this.abilityCooldowns[e]>0&&(this.abilityCooldowns[e]-=t);this.warCryActive&&(this.warCryTimer-=t,this.warCryTimer<=0&&(this.warCryActive=!1,this.warCryTimer=0,this.player&&this._spawnFloatingText("War Cry ended",this.player.mesh.position.clone().add(new b(0,2,0)),8947848,!1)))}}canUseStamina(t){const e=this.stamina>=t;return!e&&this.hud&&(this.hud.flashStaminaDepleted(),this.audioManager&&this.player&&this.audioManager.play("staminaDepleted",{position:this.player.mesh.position,volume:.4})),e}useStamina(t){this.stamina=Math.max(0,this.stamina-t),this.staminaRegenTimer=0,this.stamina<15&&this.hud&&this.hud.flashStaminaDepleted()}takeDamage(t,e="physical",i=0,n=!1){if(this.isDead)return;const s=this.deathLessons[e]||0;let o=Math.floor(t*(1-s));const a=this.getEquipmentDefense();if(a>0&&(o=Math.max(1,o-a)),n){const c=o*.5;if(this.canUseStamina(c))this.useStamina(c),o=Math.floor(o*.2),i*=.5;else return this.stamina=0,this.posture=this.maxPosture,"guard_broken"}return this.health-=o,this.posture=Math.min(this.maxPosture,this.posture+i),this.postureRegenTimer=0,this.audioManager&&this.player&&this.audioManager.play("playerDamage",{position:this.player.mesh.position,volume:.7}),this.health<=0?(this.die(e),"died"):this.posture>=this.maxPosture?(this.audioManager&&this.player&&this.audioManager.play("postureBreak",{position:this.player.mesh.position,volume:.8}),"posture_broken"):"hit"}die(t="unknown"){this.isDead=!0,this.deathCount++,this.health=0,this.audioManager&&this.audioManager.play("death",{volume:.8});const e=this.player?this.player.mesh.position.clone():this.checkpoint.clone();if(this.particleManager&&this.player&&this.particleManager.spawnPlayerDeathEffect(e,this.camera),this.bloodstainMesh&&this.scene&&(this.scene.remove(this.bloodstainMesh),this.bloodstainMesh=null),this.remnant>0&&this.scene){this.heldRemnant=this.remnant,this.remnant=0,this.bloodstain=e.clone(),this.bloodstain.y=.05;const i=new Fn(.5,16),n=new $t({color:11154227,transparent:!0,opacity:.8,side:fe});this.bloodstainMesh=new D(i,n),this.bloodstainMesh.rotation.x=-Math.PI/2,this.bloodstainMesh.position.copy(this.bloodstain),this.scene.add(this.bloodstainMesh)}else this.heldRemnant=0,this.bloodstain=null;this.deathLessons[t]||(this.deathLessons[t]=0),this.deathLessons[t]=Math.min(.25,this.deathLessons[t]+.005),this.deathScreenEl&&this.deathScreenEl.classList.add("visible"),setTimeout(()=>this.respawn(),3e3)}respawn(){this.isDead=!1,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.player&&this.player.resetPosition(),this.enemyManager&&this.enemyManager.resetAll(),this.deathScreenEl&&this.deathScreenEl.classList.remove("visible")}setCheckpoint(t){this.checkpoint.copy(t)}setEntities(t,e,i,n=null){this.player=t,this.enemyManager=e,this.scene=i,this.camera=n}addRemnant(t){this.remnant+=t}collectBloodstain(){return!this.bloodstain||!this.player?!1:this.player.mesh.position.distanceTo(this.bloodstain)<2?(this.remnant+=this.heldRemnant,this.audioManager&&this.audioManager.play("itemPickup",{volume:.6}),this.heldRemnant=0,this.bloodstainMesh&&this.scene&&this.scene.remove(this.bloodstainMesh),this.bloodstain=null,this.bloodstainMesh=null,!0):!1}getTotalDepth(){return this.infusions.strength+this.infusions.vitality+this.infusions.stamina+this.infusions.spirit}canInfuse(t){return!(!this.infusions.hasOwnProperty(t)||this.infusions[t]>=this.MAX_TRACK_DEPTH||this.getTotalDepth()>=this.MAX_TOTAL_DEPTH)}getInfusionCost(t,e){return 100*e*e}infuse(t){if(!this.canInfuse(t))return!1;const e=this.infusions[t]+1,i=this.getInfusionCost(t,e);return this.remnant<i?!1:(this.remnant-=i,this.infusions[t]=e,this.audioManager&&this.audioManager.play("menuConfirm",{volume:.5}),!0)}getInfusionBonuses(){return{damageMult:1+this.infusions.strength*.1,bonusHealth:this.infusions.vitality*20,bonusStamina:this.infusions.stamina*15,staminaRegenMult:1+this.infusions.stamina*.1,postureResist:this.infusions.spirit*.05,postureRegenMult:1+this.infusions.spirit*.15}}applyInfusionBonuses(){const t=this.getInfusionBonuses();this.maxHealth=100+t.bonusHealth,this.maxStamina=100+t.bonusStamina,this.isDead||(this.health=Math.min(this.health,this.maxHealth),this.stamina=Math.min(this.stamina,this.maxStamina))}isNearBonfire(){return this.player?this.player.mesh.position.distanceTo(this.bonfirePosition)<3:!1}getTrackInfo(t){const e=this.infusions[t]||0,i=e+1,n=i<=this.MAX_TRACK_DEPTH?this.getInfusionCost(t,i):null,s=n!==null&&this.remnant>=n,o=e>=this.MAX_TRACK_DEPTH,a={strength:{name:"Strength",desc:"+10% damage per level",bonus:`+${e*10}% damage`},vitality:{name:"Vitality",desc:"+20 max HP per level",bonus:`+${e*20} HP`},stamina:{name:"Stamina",desc:"+15 max stamina, +10% regen per level",bonus:`+${e*15} stamina`},spirit:{name:"Spirit",desc:"+5% posture resist, +15% posture regen per level",bonus:`+${e*5}% resist`}};return{level:e,nextLevel:i,cost:n,canAfford:s,maxed:o,...a[t]}}}function Nh(r,t){if(t===Fu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Sc||t===ld){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=e.count-2,n=[];if(t===Sc)for(let o=1;o<=i;o++)n.push(e.getX(0)),n.push(e.getX(o)),n.push(e.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(n.push(e.getX(o)),n.push(e.getX(o+1)),n.push(e.getX(o+2))):(n.push(e.getX(o+2)),n.push(e.getX(o+1)),n.push(e.getX(o)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class dy extends Vn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new gy(e)}),this.register(function(e){return new _y(e)}),this.register(function(e){return new Ay(e)}),this.register(function(e){return new Ey(e)}),this.register(function(e){return new Cy(e)}),this.register(function(e){return new yy(e)}),this.register(function(e){return new vy(e)}),this.register(function(e){return new My(e)}),this.register(function(e){return new Sy(e)}),this.register(function(e){return new my(e)}),this.register(function(e){return new by(e)}),this.register(function(e){return new xy(e)}),this.register(function(e){return new Ty(e)}),this.register(function(e){return new wy(e)}),this.register(function(e){return new fy(e)}),this.register(function(e){return new Ry(e)}),this.register(function(e){return new Py(e)})}load(t,e,i,n){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=oo.extractUrlBase(t);o=oo.resolveURL(l,this.path)}else o=oo.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){n?n(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new Ca(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s;const o={},a={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===jd){try{o[ee.KHR_BINARY_GLTF]=new Iy(t)}catch(d){n&&n(d);return}s=JSON.parse(o[ee.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Wy(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case ee.KHR_MATERIALS_UNLIT:o[d]=new py;break;case ee.KHR_DRACO_MESH_COMPRESSION:o[d]=new Dy(s,this.dracoLoader);break;case ee.KHR_TEXTURE_TRANSFORM:o[d]=new Ly;break;case ee.KHR_MESH_QUANTIZATION:o[d]=new ky;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,n)}parseAsync(t,e){const i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}}function uy(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const ee={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fy{constructor(t){this.parser=t,this.name=ee.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){const s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let n=e.cache.get(i);if(n)return n;const s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let l;const h=new vt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Je);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Fd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Be(h),l.distance=d;break;case"spot":l=new Gp(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),n=Promise.resolve(l),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,s=i.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(e.cache,a,c)})}}class py{constructor(){this.name=ee.KHR_MATERIALS_UNLIT}getMaterialType(){return $t}extendParams(t,e,i){const n=[];t.color=new vt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Je),t.opacity=o[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,Ie))}return Promise.all(n)}}class my{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class gy{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ji}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new st(a,a)}return Promise.all(s)}}class _y{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ji}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class xy{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ji}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class yy{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ji}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new vt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=n.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Je)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ie)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class vy{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ji}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class My{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ji}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new vt().setRGB(a[0],a[1],a[2],Je),Promise.all(s)}}class Sy{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ji}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class by{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ji}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new vt().setRGB(a[0],a[1],a[2],Je),o.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",o.specularColorTexture,Ie)),Promise.all(s)}}class wy{constructor(t){this.parser=t,this.name=ee.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ji}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Ty{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ji}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Ay{constructor(t){this.parser=t,this.name=ee.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class Ey{constructor(t){this.parser=t,this.name=ee.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=n.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(t,o.source,c)}}class Cy{constructor(t){this.parser=t,this.name=ee.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=n.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(t,o.source,c)}}class Ry{constructor(t){this.name=ee.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=n.byteOffset||0,l=n.byteLength||0,h=n.count,d=n.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,n.mode,n.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,n.mode,n.filter),f})})}else return null}}class Py{constructor(t){this.name=ee.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=e.meshes[i.mesh];for(const l of n.primitives)if(l.mode!==xi.TRIANGLES&&l.mode!==xi.TRIANGLE_STRIP&&l.mode!==xi.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const m of d){const _=new Gt,g=new b,p=new Pi,x=new b(1,1,1),y=new Ln(m.geometry,m.material,u);for(let v=0;v<u;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,_.compose(g,p,x));for(const v in c)if(v==="_COLOR_0"){const w=c[v];y.instanceColor=new wc(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);Ce.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const jd="glTF",Ys=12,Oh={JSON:1313821514,BIN:5130562};class Iy{constructor(t){this.name=ee.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ys),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==jd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ys,s=new DataView(t,Ys);let o=0;for(;o<n;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Oh.JSON){const l=new Uint8Array(t,Ys+o,a);this.content=i.decode(l)}else if(c===Oh.BIN){const l=Ys+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Dy{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ee.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const d=Dc[h]||h.toLowerCase();a[d]=o[h]}for(const h in t.attributes){const d=Dc[h]||h.toLowerCase();if(o[h]!==void 0){const u=i.accessors[t.attributes[h]],f=ms[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){n.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}d(f)},a,l,Je,u)})})}}class Ly{constructor(){this.name=ee.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class ky{constructor(){this.name=ee.KHR_MESH_QUANTIZATION}}class Zd extends Mo{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let o=0;o!==n;o++)e[o]=i[s+o];return e}interpolate_(t,e,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=n-e,d=(i-e)/h,u=d*d,f=u*d,m=t*l,_=m-l,g=-2*f+3*u,p=f-u,x=1-g,y=p-u+d;for(let v=0;v!==a;v++){const w=o[_+v+a],E=o[_+v+c]*h,C=o[m+v+a],I=o[m+v]*h;s[v]=x*w+y*E+g*C+p*I}return s}}const Ny=new Pi;class Oy extends Zd{interpolate_(t,e,i,n){const s=super.interpolate_(t,e,i,n);return Ny.fromArray(s).normalize().toArray(s),s}}const xi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bh={9728:He,9729:ze,9984:td,9985:ua,9986:Zs,9987:on},Uh={33071:Fi,33648:ya,10497:Wi},Ar={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},By={CUBICSPLINE:void 0,LINEAR:ho,STEP:lo},Er={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cn})),r.DefaultMaterial}function Pn(r,t,e){for(const i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Oi(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Fy(r,t,e){let i=!1,n=!1,s=!1;for(let l=0,h=t.length;l<h;l++){const d=t[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const d=t[l];if(i){const u=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):r.attributes.position;o.push(u)}if(n){const u=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):r.attributes.normal;a.push(u)}if(s){const u=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):r.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function zy(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Gy(r){let t;const e=r.extensions&&r.extensions[ee.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Cr(e.attributes):t=r.indices+":"+Cr(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)t+=":"+Cr(r.targets[i]);return t}function Cr(r){let t="";const e=Object.keys(r).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+r[e[i]]+";";return t}function Lc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Vy=new Gt;class Wy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new uy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);n=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&o<98?this.textureLoader=new Ud(this.options.manager):this.textureLoader=new qp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ca(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};return Pn(s,a,n),Oi(a,n),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){const o=e[n].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let n=0,s=t.length;n<s;n++){const o=t[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const n=i.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const n=t(e[i]);if(n)return n}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let n=0;n<e.length;n++){const s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){const i=t+":"+e;let n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,o){return i.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ee.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,o){i.load(oo.resolveURL(e.uri,n.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){const e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){const o=Ar[n.type],a=ms[n.componentType],c=n.normalized===!0,l=new a(n.count*o);return Promise.resolve(new Ue(l,o,c))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ar[n.type],l=ms[n.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0;let _,g;if(f&&f!==d){const p=Math.floor(u/f),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let y=e.cache.get(x);y||(_=new l(a,p*f,n.count*f/h),y=new Yc(_,f/h),e.cache.add(x,y)),g=new bs(y,c,u%f/h,m)}else a===null?_=new l(n.count*c):_=new l(a,u,n.count*c),g=new Ue(_,c,m);if(n.sparse!==void 0){const p=Ar.SCALAR,x=ms[n.sparse.indices.componentType],y=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,w=new x(o[1],y,n.sparse.count*p),E=new l(o[2],v,n.sparse.count*c);a!==null&&(g=new Ue(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,I=w.length;C<I;C++){const M=w[C];if(g.setX(M,E[C*c]),c>=2&&g.setY(M,E[C*c+1]),c>=3&&g.setZ(M,E[C*c+2]),c>=4&&g.setW(M,E[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,i=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,i){const n=this,s=this.json,o=s.textures[t],a=s.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return h.magFilter=Bh[u.magFilter]||ze,h.minFilter=Bh[u.minFilter]||on,h.wrapS=Uh[u.wrapS]||Wi,h.wrapT=Uh[u.wrapT]||Wi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==He&&h.minFilter!==ze,n.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const o=n.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let m=u;e.isImageBitmapLoader===!0&&(m=function(_){const g=new We(_);g.needsUpdate=!0,u(g)}),e.load(oo.resolveURL(d,s.path),m,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),Oi(d,o),d.userData.mimeType=o.mimeType||Hy(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[t]=h,h}assignTexture(t,e,i,n){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[ee.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[ee.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[ee.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return n!==void 0&&(o.colorSpace=n),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Oa,Ii.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(t.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new wd,Ii.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(n||s||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}t.material=i}getMaterialType(){return tt}loadMaterial(t){const e=this,i=this.json,n=this.extensions,s=i.materials[t];let o;const a={},c=s.extensions||{},l=[];if(c[ee.KHR_MATERIALS_UNLIT]){const d=n[ee.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,s,e))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new vt(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Je),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",d.baseColorTexture,Ie)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=fe);const h=s.alphaMode||Er.OPAQUE;if(h===Er.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Er.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==$t&&(l.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new st(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==$t&&(l.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==$t){const d=s.emissiveFactor;a.emissive=new vt().setRGB(d[0],d[1],d[2],Je)}return s.emissiveTexture!==void 0&&o!==$t&&l.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Ie)),Promise.all(l).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Oi(d,s),e.associations.set(d,{materials:t}),s.extensions&&Pn(n,d,s),d})}createUniqueName(t){const e=ue.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[ee.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Fh(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=Gy(l),d=n[h];if(d)o.push(d.promise);else{let u;l.extensions&&l.extensions[ee.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=Fh(new Ae,l,e),n[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(t){const e=this,i=this.json,n=this.extensions,s=i.meshes[t],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Uy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=o[f];let p;const x=l[f];if(g.mode===xi.TRIANGLES||g.mode===xi.TRIANGLE_STRIP||g.mode===xi.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Ff(_,x):new D(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===xi.TRIANGLE_STRIP?p.geometry=Nh(p.geometry,ld):g.mode===xi.TRIANGLE_FAN&&(p.geometry=Nh(p.geometry,Sc));else if(g.mode===xi.LINES)p=new qf(_,x);else if(g.mode===xi.LINE_STRIP)p=new Jc(_,x);else if(g.mode===xi.LINE_LOOP)p=new Xf(_,x);else if(g.mode===xi.POINTS)p=new Qc(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&zy(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Oi(p,s),g.extensions&&Pn(n,p,g),e.assignFinalMaterial(p),d.push(p)}for(let f=0,m=d.length;f<m;f++)e.associations.set(d[f],{meshes:t,primitives:f});if(d.length===1)return s.extensions&&Pn(n,d[0],s),d[0];const u=new zt;s.extensions&&Pn(n,u,s),e.associations.set(u,{meshes:t});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}loadCamera(t){let e;const i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new ii(Qt.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new bo(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Oi(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),o=n,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const d=o[l];if(d){a.push(d);const u=new Gt;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new jc(a,c)})}loadAnimation(t){const e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let d=0,u=n.channels.length;d<u;d++){const f=n.channels[d],m=n.samplers[f.sampler],_=f.target,g=_.node,p=n.parameters!==void 0?n.parameters[m.input]:m.input,x=n.parameters!==void 0?n.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],m=d[2],_=d[3],g=d[4],p=[];for(let y=0,v=u.length;y<v;y++){const w=u[y],E=f[y],C=m[y],I=_[y],M=g[y];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const T=i._createAnimationTracks(w,E,C,I,M);if(T)for(let P=0;P<T.length;P++)p.push(T[P])}const x=new Rc(s,void 0,p);return Oi(x,n),x})}createNodeMesh(t){const e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=n.weights.length;c<l;c++)a.morphTargetInfluences[c]=n.weights[c]}),o})}loadNode(t){const e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),o=[],a=n.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Vy)});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);return h})}_loadNodeShallow(t){const e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?n.createUniqueName(s.name):"",a=[],c=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(l){return n._getNodeRef(n.cameraCache,s.camera,l)})),n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new bd:l.length>1?h=new zt:l.length===1?h=l[0]:h=new Ce,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=o),Oi(h,s),s.extensions&&Pn(i,h,s),s.matrix!==void 0){const d=new Gt;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){const d=n.associations.get(h);n.associations.set(h,{...d})}return n.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],n=this,s=new zt;i.name&&(s.name=n.createUniqueName(i.name)),Oi(s,i),i.extensions&&Pn(e,s,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(n.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++)s.add(c[h]);const l=h=>{const d=new Map;for(const[u,f]of n.associations)(u instanceof Ii||u instanceof We)&&d.set(u,f);return h.traverse(u=>{const f=n.associations.get(u);f!=null&&d.set(u,f)}),d};return n.associations=l(s),s})}_createAnimationTracks(t,e,i,n,s){const o=[],a=t.name?t.name:t.uuid,c=[];_n[s.path]===_n.weights?t.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(_n[s.path]){case _n.weights:l=As;break;case _n.rotation:l=Es;break;case _n.translation:case _n.scale:l=Cs;break;default:i.itemSize===1?l=As:l=Cs;break}const h=n.interpolation!==void 0?By[n.interpolation]:ho,d=this._getArrayFromAccessor(i);for(let u=0,f=c.length;u<f;u++){const m=new l(c[u]+"."+_n[s.path],e.array,d,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=Lc(e.constructor),n=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const n=this instanceof Es?Oy:Zd;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qy(r,t,e){const i=t.attributes,n=new ri;if(i.POSITION!==void 0){const a=e.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(n.set(new b(c[0],c[1],c[2]),new b(l[0],l[1],l[2])),a.normalized){const h=Lc(ms[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new b,c=new b;for(let l=0,h=s.length;l<h;l++){const d=s[l];if(d.POSITION!==void 0){const u=e.json.accessors[d.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){const _=Lc(ms[u.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}r.boundingBox=n;const o=new Yi;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=o}function Fh(r,t,e){const i=t.attributes,n=[];function s(o,a){return e.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in i){const a=Dc[o]||o.toLowerCase();a in r.attributes||n.push(s(i[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});n.push(o)}return se.workingColorSpace!==Je&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${se.workingColorSpace}" not supported.`),Oi(r,t),qy(r,t,e),Promise.all(n).then(function(){return t.targets!==void 0?Fy(r,t.targets,e):r})}const Rr=new WeakMap;class Xy extends Vn{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,i,n){const s=new Ca(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,o=>{this.parse(o,e,n)},i,n)}parse(t,e,i=()=>{}){this.decodeDracoFile(t,e,null,null,Ie,i).catch(i)}decodeDracoFile(t,e,i,n,s=Je,o=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(t,a).then(e).catch(o)}decodeGeometry(t,e){const i=JSON.stringify(e);if(Rr.has(t)){const c=Rr.get(t);if(c.key===i)return c.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,o=t.byteLength,a=this._getWorker(s,o).then(c=>(n=c,new Promise((l,h)=>{n._callbacks[s]={resolve:l,reject:h},n.postMessage({type:"decode",id:s,taskConfig:e,buffer:t},[t])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),Rr.set(t,{key:i,promise:a}),a}_createGeometry(t){const e=new Ae;t.index&&e.setIndex(new Ue(t.index.array,1));for(let i=0;i<t.attributes.length;i++){const{name:n,array:s,itemSize:o,stride:a,vertexColorSpace:c}=t.attributes[i];let l;if(o===a)l=new Ue(s,o);else{const h=new Yc(s,a);l=new bs(h,o,0)}n==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(s instanceof Float32Array)),e.setAttribute(n,l)}return e}_assignVertexColorSpace(t,e){if(e!==Ie)return;const i=new vt;for(let n=0,s=t.count;n<s;n++)i.fromBufferAttribute(t,n),se.colorSpaceToWorking(i,Ie),t.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(t,e){const i=new Ca(this.manager);return i.setPath(this.decoderPath),i.setResponseType(e),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(t,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(i=>{const n=i[0];t||(this.decoderConfig.wasmBinary=i[1]);const s=$y.toString(),o=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const o=s.data;switch(o.type){case"decode":n._callbacks[o.id].resolve(o);break;case"error":n._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[t]=e,i._taskLoad+=e,i})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function $y(){let r,t;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,t=new Promise(function(h){r.onModuleLoaded=function(d){h({draco:d})},DracoDecoderModule(r)});break;case"decode":const c=a.buffer,l=a.taskConfig;t.then(h=>{const d=h.draco,u=new d.Decoder;try{const f=e(d,u,new Int8Array(c),l),m=f.attributes.map(_=>_.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{d.destroy(u)}});break}};function e(o,a,c,l){const h=l.attributeIDs,d=l.attributeTypes;let u,f;const m=a.GetEncodedGeometryType(c);if(m===o.TRIANGULAR_MESH)u=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,u);else if(m===o.POINT_CLOUD)u=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const g in h){const p=self[d[g]];let x,y;if(l.useUniqueIDs)y=h[g],x=a.GetAttributeByUniqueId(u,y);else{if(y=a.GetAttributeId(u,o[h[g]]),y===-1)continue;x=a.GetAttribute(u,y)}const v=n(o,a,u,g,p,x);g==="color"&&(v.vertexColorSpace=l.vertexColorSpace),_.attributes.push(v)}return m===o.TRIANGULAR_MESH&&(_.index=i(o,a,u)),o.destroy(u),_}function i(o,a,c){const h=c.num_faces()*3,d=h*4,u=o._malloc(d);a.GetTrianglesUInt32Array(c,d,u);const f=new Uint32Array(o.HEAPF32.buffer,u,h).slice();return o._free(u),{array:f,itemSize:1}}function n(o,a,c,l,h,d){const u=c.num_points(),f=d.num_components(),m=s(o,h),_=f*h.BYTES_PER_ELEMENT,g=Math.ceil(_/4)*4,p=g/h.BYTES_PER_ELEMENT,x=u*_,y=u*g,v=o._malloc(x);a.GetAttributeDataArrayForAllPoints(c,d,m,x,v);const w=new h(o.HEAPF32.buffer,v,x/h.BYTES_PER_ELEMENT);let E;if(_===g)E=w.slice();else{E=new h(y/h.BYTES_PER_ELEMENT);let C=0;for(let I=0,M=w.length;I<M;I++){for(let T=0;T<f;T++)E[C+T]=w[I*f+T];C+=p}}return o._free(v),{name:l,count:u,itemSize:f,array:E,stride:p}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class Yy{constructor(){this.gltfLoader=new dy,this.dracoLoader=new Xy,this.textureLoader=new Ud,this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/"),this.dracoLoader.setDecoderConfig({type:"js"}),this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.textureCache=new Map,this.loadingPromises=new Map,this.debug=!1}async loadModel(t,e={}){const i=t+JSON.stringify(e);if(this.modelCache.has(i)){const s=this.modelCache.get(i);return this._cloneGLTF(s)}if(this.loadingPromises.has(i)){const s=await this.loadingPromises.get(i);return this._cloneGLTF(s)}const n=new Promise((s,o)=>{this.debug&&console.log(`[AssetManager] Loading: ${t}`),this.gltfLoader.load(t,a=>{this.debug&&(console.log(`[AssetManager] Loaded: ${t}`),console.log(`  - Animations: ${a.animations.length}`),a.animations.forEach((l,h)=>{console.log(`    ${h}: ${l.name} (${l.duration.toFixed(2)}s)`)})),e.scale&&a.scene.scale.setScalar(e.scale),a.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.material&&(Array.isArray(l.material)?l.material.forEach(h=>this._fixMaterial(h)):this._fixMaterial(l.material)))});const c={scene:a.scene,animations:a.animations,gltf:a};this.modelCache.set(i,c),s(c)},a=>{if(this.debug&&a.total>0){const c=(a.loaded/a.total*100).toFixed(1);console.log(`[AssetManager] Loading ${t}: ${c}%`)}},a=>{console.error(`[AssetManager] Failed to load: ${t}`,a),o(a)})});this.loadingPromises.set(i,n);try{const s=await n;return this.loadingPromises.delete(i),this._cloneGLTF(s)}catch(s){throw this.loadingPromises.delete(i),s}}_cloneGLTF(t){return{scene:t.scene.clone(),animations:t.animations,gltf:t.gltf}}_fixMaterial(t){(t.isMeshStandardMaterial||t.isMeshPhysicalMaterial)&&(t.metalness===void 0&&(t.metalness=0),t.roughness===void 0&&(t.roughness=.8)),t.transparent&&(t.depthWrite=!1,t.side=fe)}async loadTexture(t,e={}){return this.textureCache.has(t)?this.textureCache.get(t):new Promise((i,n)=>{this.textureLoader.load(t,s=>{e.repeat&&(s.wrapS=Wi,s.wrapT=Wi,s.repeat.set(e.repeat[0],e.repeat[1])),e.encoding?s.colorSpace=e.encoding:s.colorSpace=Ie,e.anisotropy&&(s.anisotropy=e.anisotropy),this.textureCache.set(t,s),i(s)},void 0,n)})}async preload(t){const e=t.map(i=>i.type==="model"?this.loadModel(i.path,i.options):i.type==="texture"?this.loadTexture(i.path,i.options):Promise.resolve());return Promise.all(e)}createAnimationSystem(t,e){const i=new Gd(t),n=new Map;return e.forEach(s=>{const o=i.clipAction(s);n.set(s.name,o),n.set(s.name.toLowerCase(),o)}),{mixer:i,actions:n,play:(s,o={})=>{const a=n.get(s)||n.get(s.toLowerCase());return a?(a.reset(),o.loop!==void 0&&a.setLoop(o.loop?cd:rd),o.clampWhenFinished&&(a.clampWhenFinished=!0),o.timeScale&&(a.timeScale=o.timeScale),o.fadeIn&&a.fadeIn(o.fadeIn),a.play(),a):(this.debug&&console.warn(`[AssetManager] Animation not found: ${s}`),null)},crossFade:(s,o,a=.2)=>{const c=n.get(s)||n.get(s.toLowerCase()),l=n.get(o)||n.get(o.toLowerCase());return l?(l.reset(),l.play(),c&&c.isRunning()&&c.crossFadeTo(l,a,!0),l):null},stopAll:()=>{i.stopAllAction()},update:s=>{i.update(s)}}}clearCache(){this.modelCache.clear(),this.textureCache.clear()}dispose(){this.modelCache.forEach(t=>{t.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(i=>i.dispose()):e.material.dispose())})}),this.textureCache.forEach(t=>{t.dispose()}),this.dracoLoader.dispose(),this.clearCache()}}const yo=new Yy,gt={IDLE:"idle",MOVING:"moving",DODGING:"dodging",ATTACKING:"attacking",HEAVY_ATTACKING:"heavy_attacking",BLOCKING:"blocking",STAGGERED:"staggered",DEAD:"dead",DASHING:"dashing",CHARGING:"charging",CHARGED_ATTACKING:"charged_attacking",PARRYING:"parrying",WAR_CRYING:"war_crying"},In={dodge:20,lightAttack:15,heavyAttack:30},Fe={dodgeDuration:.45,dodgeIframes:.3,lightAttackDuration:.35,heavyAttackDuration:.65,lightHitStart:.06,lightHitEnd:.18,heavyHitStart:.15,heavyHitEnd:.35,staggerDuration:.8,comboWindow:.12,dashDuration:.25,dashIframes:.2,parryWindow:.15,parryDuration:.35,chargedAttackDuration:.9,chargedHitStart:.25,chargedHitEnd:.5,warCryDuration:.8},Ky={[gt.IDLE]:"Idle",[gt.MOVING]:"Walking",[gt.DODGING]:"Jump",[gt.ATTACKING]:"Punch",[gt.HEAVY_ATTACKING]:"Punch",[gt.BLOCKING]:"Idle",[gt.STAGGERED]:"No",[gt.DEAD]:"Death",[gt.DASHING]:"Jump",[gt.CHARGING]:"Idle",[gt.CHARGED_ATTACKING]:"Punch",[gt.PARRYING]:"Idle",[gt.WAR_CRYING]:"ThumbsUp"};class jy{constructor(t,e,i){this.scene=t,this.gm=e,this.input=i,this.cameraController=null,this.world=null,this.state=gt.IDLE,this.stateTimer=0,this.isInvincible=!1,this.attackCombo=0,this.hitThisSwing=!1,this.velocity=new b,this.moveSpeed=6,this.dodgeSpeed=14,this.gravity=-30,this.grounded=!0,this.collisionRadius=.4,this.currentMoveVelocity=new b,this.moveAcceleration=35,this.moveDeceleration=25,this.dodgeGhostMeshes=[],this.lastGhostSpawnTime=0,this.ghostSpawnInterval=.05,this.dashDir=new b,this.dashSpeed=18,this.parrySuccessful=!1,this.chargeProgress=0,this.chargedDamage=60,this.chargedPostureDmg=40,this.moveDir=new b,this.dodgeDir=new b,this.facingAngle=0,this.modelLoaded=!1,this.animSystem=null,this.currentAnim=null,this.gltfModel=null,this.mesh=new zt,this.mesh.position.set(0,0,5),this._createFallbackMesh(),this.attackRange=2,this.lightDamage=15,this.heavyDamage=35,this.lightPostureDmg=10,this.heavyPostureDmg=25,t.add(this.mesh),this._loadGLTFModel()}_createFallbackMesh(){const t=new tt({color:5921384,roughness:.35,metalness:.85}),e=new De(.35,.6,8,16);this.fallbackBody=new D(e,t),this.fallbackBody.position.y=1.1,this.fallbackBody.castShadow=!0,this.mesh.add(this.fallbackBody);const i=new Vt(.22,16,12);this.fallbackHead=new D(i,t),this.fallbackHead.position.y=1.7,this.mesh.add(this.fallbackHead);const n=new tt({color:6737151,emissive:4491468,emissiveIntensity:3}),s=new Lt(.2,.04,.12);this.visor=new D(s,n),this.visor.position.set(0,1.68,.25),this.mesh.add(this.visor),this.body=this.fallbackBody}async _loadGLTFModel(){try{const t="/project-ashen/",{scene:e,animations:i}=await yo.loadModel(`${t}assets/models/robot_expressive.glb`,{scale:.8});this.gltfModel=e,this.gltfModel.position.y=0,this.gltfModel.rotation.y=Math.PI,this.gltfModel.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.material&&(n.material.color&&n.material.color.multiplyScalar(.85),n.material.emissive&&(n.material.emissive.setHex(0),n.material.emissiveIntensity=0)),n.userData.originalMaterial=n.material.clone())}),this.fallbackBody&&(this.fallbackBody.visible=!1),this.fallbackHead&&(this.fallbackHead.visible=!1),this.visor&&(this.visor.visible=!1),this.mesh.add(this.gltfModel),i&&i.length>0&&(this.animSystem=yo.createAnimationSystem(this.gltfModel,i),this._playAnimation(gt.IDLE,{loop:!0})),this.modelLoaded=!0,this.body=this.gltfModel}catch(t){console.error("[Player] Failed to load GLTF model:",t)}}_playAnimation(t,e={}){if(!this.animSystem)return;const i=Ky[t];if(!i||this.currentAnim===i&&t!==gt.ATTACKING)return;const n={loop:t===gt.IDLE||t===gt.MOVING||t===gt.BLOCKING,fadeIn:.2,timeScale:1,clampWhenFinished:t===gt.DEAD};t===gt.ATTACKING?(n.timeScale=1.6+this.attackCombo*.15,n.loop=!1,n.fadeIn=.05):t===gt.HEAVY_ATTACKING?(n.timeScale=.75,n.loop=!1,n.fadeIn=.1):t===gt.DODGING?(n.timeScale=1.5,n.loop=!1):t===gt.MOVING?n.timeScale=1.2:t===gt.CHARGED_ATTACKING&&(n.timeScale=.65,n.loop=!1,n.fadeIn=.08);const s={...n,...e};this.currentAnim?this.animSystem.crossFade(this.currentAnim,i,s.fadeIn):this.animSystem.play(i,s),this.currentAnim=i}update(t){if(this.gm.isDead){this.state=gt.DEAD,this.currentAnim!=="Death"&&this._playAnimation(gt.DEAD);return}switch(this.animSystem&&this.animSystem.update(t),this.stateTimer+=t,this.state){case gt.IDLE:case gt.MOVING:this._processMovement(t),this._processCombatInput();break;case gt.DODGING:this._processDodge(t);break;case gt.ATTACKING:case gt.HEAVY_ATTACKING:this._processAttack(t);break;case gt.BLOCKING:this._processBlock(t);break;case gt.STAGGERED:this.stateTimer>=Fe.staggerDuration&&this._changeState(gt.IDLE);break;case gt.DEAD:break;case gt.DASHING:this._processDash(t);break;case gt.CHARGING:this._processCharging(t);break;case gt.CHARGED_ATTACKING:this._processChargedAttack(t);break;case gt.PARRYING:this._processParry(t);break;case gt.WAR_CRYING:this._processWarCry(t);break}if(this.world){const e=this.world.getFloorY(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y>e?(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=e?(this.mesh.position.y=e,this.velocity.y=0,this.grounded=!0):this.grounded=!1):this.mesh.position.y<e?(this.mesh.position.y=Qt.lerp(this.mesh.position.y,e,8*t),this.velocity.y=0,this.grounded=!0):(this.velocity.y=0,this.grounded=!0)}else this.mesh.position.y>0&&(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.velocity.y=0,this.grounded=!0))}_processMovement(t){const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const i=this._getCameraYaw(),n=new b(-Math.sin(i),0,-Math.cos(i)),s=new b(Math.cos(i),0,-Math.sin(i));this.moveDir.set(0,0,0).addScaledVector(n,-e.z).addScaledVector(s,e.x).normalize();const o=this.moveDir.clone().multiplyScalar(this.moveSpeed);this.currentMoveVelocity.lerp(o,this.moveAcceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this._applyWallCollision(),this.facingAngle=Math.atan2(this.moveDir.x,this.moveDir.z),this.mesh.rotation.y=Qt.lerp(this.mesh.rotation.y,this.facingAngle+Math.PI,10*t),this.state!==gt.MOVING&&this._changeState(gt.MOVING)}else this.currentMoveVelocity.length()>.01?(this.currentMoveVelocity.lerp(new b(0,0,0),this.moveDeceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this._applyWallCollision()):this.currentMoveVelocity.set(0,0,0),this.state===gt.MOVING&&this._changeState(gt.IDLE)}_applyWallCollision(){if(!this.world)return;const t=this.world.checkCollision(this.mesh.position,this.collisionRadius);t&&t.collides&&t.pushVector&&this.mesh.position.add(t.pushVector)}_applyFloorCollision(){if(!this.world)return;const t=this.world.getFloorY(this.mesh.position.x,this.mesh.position.z),e=t-this.mesh.position.y;Math.abs(e)<.1?this.mesh.position.y=t:e>0?this.mesh.position.y=Qt.lerp(this.mesh.position.y,t,.3):this.mesh.position.y=Qt.lerp(this.mesh.position.y,t,.2)}_processCombatInput(){if(this.input.lockOn&&this._toggleLockOn(),this.input.dashAbility&&this.gm.isAbilityUnlocked("dash")&&this.gm.isAbilityReady("dash")&&this.gm.canUseStamina(15)){this._startDash();return}if(this.input.parryAbility&&this.gm.isAbilityUnlocked("parry")&&this.gm.isAbilityReady("parry")&&this.gm.canUseStamina(10)){this._startParry();return}if(this.input.warCryAbility&&this.gm.isAbilityUnlocked("warCry")&&this.gm.isAbilityReady("warCry")&&this.gm.canUseStamina(25)){this._startWarCry();return}if(this.input.chargedAttack&&this.gm.isAbilityUnlocked("heavyCharge")&&this.gm.canUseStamina(35)){this._startChargedAttack();return}if(this.input.dodge&&this.gm.canUseStamina(In.dodge)){this._startDodge();return}if(this.input.lightAttack&&this.gm.canUseStamina(In.lightAttack)){this._startAttack(!1);return}if(this.input.heavyAttack&&this.gm.canUseStamina(In.heavyAttack)){this._startAttack(!0);return}this.input.block&&this._changeState(gt.BLOCKING)}_toggleLockOn(){if(!this.cameraController||!this.gm.enemyManager)return;const e=this.gm.enemyManager.enemies.filter(a=>!a.isDead);if(this.gm.enemyManager.boss&&!this.gm.enemyManager.boss.isDead&&e.push(this.gm.enemyManager.boss),e.length===0){this.cameraController.clearLockOn();return}const i=20,n=this.mesh.position,s=e.map(a=>({enemy:a,dist:n.distanceTo(a.mesh.position)})).filter(a=>a.dist<=i).sort((a,c)=>a.dist-c.dist);if(s.length===0){this.cameraController.clearLockOn();return}const o=this.cameraController.lockOnTarget;if(o&&!o.isDead){const a=s.findIndex(c=>c.enemy===o);if(a!==-1&&s.length>1){const c=(a+1)%s.length;this.cameraController.setLockOnTarget(s[c].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.3})}else this.cameraController.clearLockOn(),this.gm.audioManager&&this.gm.audioManager.play("menuBack",{volume:.3})}else this.cameraController.setLockOnTarget(s[0].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.4})}_startDodge(){this.gm.useStamina(In.dodge),this.gm.audioManager&&this.gm.audioManager.play("dodge",{position:this.mesh.position,volume:.5});const t=this.input.getMovementVector();if(t.x!==0||t.z!==0){const e=this._getCameraYaw(),i=new b(-Math.sin(e),0,-Math.cos(e)),n=new b(Math.cos(e),0,-Math.sin(e));this.dodgeDir.set(0,0,0).addScaledVector(i,-t.z).addScaledVector(n,t.x).normalize()}else this.dodgeDir.set(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.isInvincible=!0,this.lastGhostSpawnTime=0,this._flashDodgeStart(),this._changeState(gt.DODGING)}_flashDodgeStart(){this._flashModel(65535,100)}_flashModel(t,e){if(this.gltfModel&&(this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(t),s.emissiveIntensity=.5)})}),setTimeout(()=>{this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(0),s.emissiveIntensity=0)})})},e)),this.visor&&this.visor.material){const i=this.visor.material.emissive.getHex();this.visor.material.emissive.setHex(t),this.visor.material.emissiveIntensity=8,setTimeout(()=>{this.visor.material.emissive.setHex(i),this.visor.material.emissiveIntensity=3},e)}}_spawnDodgeGhost(){const t=new zt,e=new $t({color:4491519,transparent:!0,opacity:.4,depthWrite:!1});if(this.gltfModel)this.gltfModel.traverse(i=>{if(i.isMesh&&i.visible){const n=new D(i.geometry.clone(),e);n.position.copy(i.position),n.rotation.copy(i.rotation),n.scale.copy(i.scale),t.add(n)}});else{const i=new De(.35,.6,4,8),n=new D(i,e);n.position.y=1.1,t.add(n)}t.position.copy(this.mesh.position),t.rotation.y=this.mesh.rotation.y,this.scene.add(t),this.dodgeGhostMeshes.push({mesh:t,material:e,spawnTime:Date.now(),lifetime:200})}_updateDodgeGhosts(){const t=Date.now();for(let e=this.dodgeGhostMeshes.length-1;e>=0;e--){const i=this.dodgeGhostMeshes[e],n=t-i.spawnTime;if(n>i.lifetime)this.scene.remove(i.mesh),i.mesh.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),this.dodgeGhostMeshes.splice(e,1);else{const s=n/i.lifetime;i.material.opacity=.4*(1-s)}}}_processDodge(t){const e=this.stateTimer/Fe.dodgeDuration,i=Math.sin(e*Math.PI);this.mesh.position.addScaledVector(this.dodgeDir,this.dodgeSpeed*i*t),this._applyWallCollision(),this.lastGhostSpawnTime+=t,this.isInvincible&&this.lastGhostSpawnTime>=this.ghostSpawnInterval&&(this._spawnDodgeGhost(),this.lastGhostSpawnTime=0),this._updateDodgeGhosts(),this.stateTimer>=Fe.dodgeIframes&&this.isInvincible&&(this.isInvincible=!1,this._flashDodgeEnd()),this.stateTimer>=Fe.dodgeDuration&&(this.isInvincible=!1,this._changeState(gt.IDLE))}_flashDodgeEnd(){this._flashModel(2236962,50)}_startAttack(t){const e=t?In.heavyAttack:In.lightAttack;this.gm.useStamina(e),this.hitThisSwing=!1,this.gm.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.5,pitch:t?.8:1,variation:.1});const i=this._getCameraYaw();if(this.facingAngle=i,this.mesh.rotation.y=i+Math.PI,t?this._flashModel(16737826,200):this._flashModel(4491519,80),this.gm.particleManager){const n=new b(-Math.sin(i),0,-Math.cos(i));this.gm.particleManager.spawnAttackArc(this.mesh.position.clone(),n,t)}this._changeState(t?gt.HEAVY_ATTACKING:gt.ATTACKING)}_processAttack(t){const e=this.state===gt.HEAVY_ATTACKING,i=this.gm.getAttackSpeedMultiplier?this.gm.getAttackSpeedMultiplier():1,n=e?Fe.heavyAttackDuration:Fe.lightAttackDuration,s=e?Fe.heavyHitStart:Fe.lightHitStart,o=e?Fe.heavyHitEnd:Fe.lightHitEnd,a=n/i,c=s/i,l=o/i;if(this.stateTimer>=c&&this.stateTimer<l&&!this.hitThisSwing&&this._checkHit(e),!e&&this.stateTimer>a-Fe.comboWindow/i&&this.stateTimer<a&&this.input.lightAttack&&this.gm.canUseStamina(In.lightAttack)){this.attackCombo=(this.attackCombo+1)%3,this._startAttack(!1);return}const h=new b(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));if(this.stateTimer<l){const d=this.stateTimer/l;if(e){const f=5*(1-Math.pow(d,.5)*.5);this.mesh.position.addScaledVector(h,f*t)}else{const f=4*(1-Math.sin(d*Math.PI*.5)*.3);this.mesh.position.addScaledVector(h,f*t)}this._applyWallCollision()}this.stateTimer>=a&&(this.attackCombo=0,this._changeState(gt.IDLE))}_checkHit(t){const e=this.gm.getDamageMultiplier(),i=t?this.heavyDamage:this.lightDamage,n=this.gm.getEquipmentDamageBonus?this.gm.getEquipmentDamageBonus():0;let s=Math.floor((i+n)*e),o=!1;const a=this.gm.getEquipmentCritChance?this.gm.getEquipmentCritChance():0;if(a>0&&Math.random()*100<a){o=!0;const c=this.gm.getEquipmentCritDamage?this.gm.getEquipmentCritDamage():50;s=Math.floor(s*(1.5+c/100))}this.activeAttack={position:this.mesh.position.clone().add(new b(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(1.2)),range:this.attackRange,damage:s,postureDmg:t?this.heavyPostureDmg:this.lightPostureDmg,isHeavy:t,isCrit:o}}_processBlock(t){this.input.block||this._changeState(gt.IDLE);const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const i=this._getCameraYaw(),n=new b(-Math.sin(i),0,-Math.cos(i)),s=new b(Math.cos(i),0,-Math.sin(i)),o=new b().addScaledVector(n,-e.z).addScaledVector(s,e.x).normalize();this.mesh.position.addScaledVector(o,this.moveSpeed*.3*t)}}_startDash(){this.gm.useStamina(15),this.gm.useAbility("dash"),this.gm.audioManager&&this.gm.audioManager.play("dash",{position:this.mesh.position,volume:.6});const t=this.input.getMovementVector();if(t.x!==0||t.z!==0){const e=this._getCameraYaw(),i=new b(-Math.sin(e),0,-Math.cos(e)),n=new b(Math.cos(e),0,-Math.sin(e));this.dashDir.set(0,0,0).addScaledVector(i,-t.z).addScaledVector(n,t.x).normalize()}else this.dashDir.set(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.isInvincible=!0,this._flashModel(65416,150),this.gm.particleManager&&this.gm.particleManager.spawnDashEffect(this.mesh.position.clone(),this.dashDir),this._changeState(gt.DASHING)}_processDash(t){const e=this.stateTimer/Fe.dashDuration,i=Math.pow(1-e,.5);this.mesh.position.addScaledVector(this.dashDir,this.dashSpeed*i*t),this._applyWallCollision(),this.lastGhostSpawnTime+=t,this.lastGhostSpawnTime>=.04&&(this._spawnDodgeGhost(),this.lastGhostSpawnTime=0),this._updateDodgeGhosts(),this.stateTimer>=Fe.dashIframes&&this.isInvincible&&(this.isInvincible=!1),this.stateTimer>=Fe.dashDuration&&(this.isInvincible=!1,this._changeState(gt.IDLE))}_startChargedAttack(){this.gm.useStamina(35),this.hitThisSwing=!1,this.gm.audioManager&&this.gm.audioManager.play("chargedSwing",{position:this.mesh.position,volume:.7,pitch:.7});const t=this._getCameraYaw();this.facingAngle=t,this.mesh.rotation.y=t+Math.PI,this._flashModel(16755200,200),this.gm.cameraController&&this.gm.cameraController.shakeHeavy(),this._changeState(gt.CHARGED_ATTACKING)}_processChargedAttack(t){this.stateTimer>=Fe.chargedHitStart&&this.stateTimer<Fe.chargedHitEnd&&!this.hitThisSwing&&this._checkChargedHit();const e=new b(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.stateTimer<Fe.chargedHitEnd&&(this.mesh.position.addScaledVector(e,5*t),this._applyWallCollision()),this.stateTimer>=Fe.chargedAttackDuration&&this._changeState(gt.IDLE)}_checkChargedHit(){const t=this.gm.getDamageMultiplier();this.activeAttack={position:this.mesh.position.clone().add(new b(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(1.5)),range:this.attackRange*1.3,damage:Math.floor(this.chargedDamage*t),postureDmg:this.chargedPostureDmg,isHeavy:!0,isCharged:!0},this.gm.hitstopHeavy()}_startParry(){this.gm.useStamina(10),this.gm.useAbility("parry"),this.parrySuccessful=!1,this.gm.audioManager&&this.gm.audioManager.play("parryReady",{position:this.mesh.position,volume:.5}),this._flashModel(16777215,100),this._changeState(gt.PARRYING)}_processParry(t){this.stateTimer>=Fe.parryDuration&&(this.parrySuccessful?this._startRiposte():this._changeState(gt.IDLE))}_startRiposte(){this.hitThisSwing=!1,this.gm.audioManager&&this.gm.audioManager.play("riposte",{volume:.8}),this._flashModel(16729156,150),this.activeAttack={position:this.mesh.position.clone().add(new b(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(1.2)),range:this.attackRange,damage:this.chargedDamage*1.5,postureDmg:50,isHeavy:!0,isRiposte:!0},this.gm.hitstopHeavy(),this._changeState(gt.ATTACKING)}onParrySuccess(){this.parrySuccessful=!0,this.gm.audioManager&&this.gm.audioManager.play("parrySuccess",{position:this.mesh.position,volume:.8}),this._flashModel(16768256,200),this.gm.triggerHitstop(.1),this.gm.particleManager&&this.gm.particleManager.spawnParryEffect(this.mesh.position.clone())}_startWarCry(){this.gm.useStamina(25),this.gm.useAbility("warCry"),this.gm.activateWarCry(),this._flashModel(16737792,300),this._changeState(gt.WAR_CRYING)}_processWarCry(t){this.stateTimer>=Fe.warCryDuration&&this._changeState(gt.IDLE)}get isParrying(){return this.state===gt.PARRYING&&this.stateTimer<Fe.parryWindow}_changeState(t){this.state!==t&&((this.state===gt.ATTACKING||this.state===gt.HEAVY_ATTACKING)&&(this.activeAttack=null),this.state=t,this.stateTimer=0,this._playAnimation(t))}setCameraController(t){this.cameraController=t}setWorld(t){this.world=t}_getCameraYaw(){return this.cameraController?this.cameraController.yaw:0}resetPosition(){this.mesh.position.copy(this.gm.checkpoint),this.velocity.set(0,0,0),this._changeState(gt.IDLE)}get isBlocking(){return this.state===gt.BLOCKING}get isAttacking(){return this.state===gt.ATTACKING||this.state===gt.HEAVY_ATTACKING}get isDead(){return this.state===gt.DEAD}flashDamage(){this._flashModel(6684672,150)}}const Ra={CRYPT_LORDS_GREATSWORD:{id:"crypt-lords-greatsword",name:"Crypt Lord's Greatsword",type:"weapon",description:"A massive blade once wielded by the guardian of the ritual chamber. Purple energy crackles through cracks in the metal.",stats:{damage:65,scaling:{strength:"A",dexterity:"D"},weight:12,criticalDamage:110},special:"Charged R2 releases purple shockwave (consumes 20 extra stamina)",color:6693546,lightColor:8930508,canInfuse:!1},LORD_SOUL_FRAGMENT:{id:"lord-soul-fragment",name:"Lord Soul Fragment",type:"upgrade",description:"A fragment of the soul that sought godhood. Can be used at the crucible to grant +2 to any single stat track.",stats:{infusionBonus:2},color:16729343,lightColor:16738047,lore:"What rises from the ritual circle was never meant to die. It was meant to ascend."}};class Zy{constructor(t,e){this.scene=t,this.gm=e,this.items=[],this.inventory={keys:new Set,weapons:[],upgrades:[]},this.bossesDefeated=new Set,this.notificationEl=document.getElementById("item-notification"),this.victoryNotificationEl=document.getElementById("victory-notification")}initItems(t){t.forEach((e,i)=>{this.spawnItem(e.pos,e.type,e)})}spawnItem(t,e,i={}){const n={id:`item-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:e,position:t.clone(),collected:!1,mesh:null,light:null,...i};switch(e){case"remnant":this._createRemnantVisual(n);break;case"key":this._createKeyVisual(n);break;case"boss_remnant":this._createBossRemnantVisual(n);break;case"boss_weapon":this._createBossWeaponVisual(n);break;case"boss_upgrade":this._createBossUpgradeVisual(n);break;default:this._createGenericVisual(n)}return this.items.push(n),n}_createRemnantVisual(t){const e=new Vt(.15,12,12),i=new tt({color:8978346,emissive:4500070,emissiveIntensity:.8,transparent:!0,opacity:.9});t.mesh=new D(e,i),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh),t.light=new Be(8978346,.8,4),t.light.position.copy(t.position),this.scene.add(t.light);const n=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=n+Math.sin(Date.now()*.003)*.15,t.mesh.rotation.y+=.02,t.light.position.y=t.mesh.position.y,t.light.intensity=.6+Math.sin(Date.now()*.005)*.3)};s()}_createKeyVisual(t){const e=new zt,i=new $i(.12,.03,8,16),n=new tt({color:13412932,emissive:6702114,emissiveIntensity:.5,metalness:.8,roughness:.3}),s=new D(i,n);s.rotation.x=Math.PI/2,e.add(s);const o=new Lt(.04,.25,.02),a=new D(o,n);a.position.y=-.18,e.add(a);const c=new Lt(.08,.04,.02),l=new D(c,n);l.position.set(.04,-.25,0),e.add(l);const h=new D(c,n);h.position.set(.04,-.32,0),e.add(h),e.position.copy(t.position),t.mesh=e,this.scene.add(e),t.light=new Be(16755268,1,5),t.light.position.copy(t.position),this.scene.add(t.light);const d=t.position.y,u=()=>{t.collected||(requestAnimationFrame(u),t.mesh.position.y=d+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.015,t.light.position.y=t.mesh.position.y,t.light.intensity=.8+Math.sin(Date.now()*.004)*.3)};u()}_createGenericVisual(t){const e=new Gn(.15),i=new tt({color:11184895,emissive:4474026,emissiveIntensity:.5});t.mesh=new D(e,i),t.mesh.position.copy(t.position),this.scene.add(t.mesh);const n=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=n+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.02,t.mesh.rotation.x+=.01)};s()}_createBossRemnantVisual(t){const e=new Vt(.4,24,24),i=new tt({color:16768358,emissive:16755234,emissiveIntensity:1.2,transparent:!0,opacity:.95});t.mesh=new D(e,i),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh);const n=new Vt(.2,16,16),s=new $t({color:16777215,transparent:!0,opacity:.9}),o=new D(n,s);t.mesh.add(o),t.light=new Be(16768358,2.5,8),t.light.position.copy(t.position),this.scene.add(t.light);const a=t.position.y,c=()=>{if(t.collected)return;requestAnimationFrame(c);const l=Date.now()*.002;t.mesh.position.y=a+Math.sin(l)*.2,t.mesh.rotation.y+=.025;const h=1+Math.sin(l*2)*.08;t.mesh.scale.setScalar(h),t.light.position.y=t.mesh.position.y,t.light.intensity=2+Math.sin(l*2)*.8};c()}_createBossWeaponVisual(t){const e=new zt,i=t.itemDef||Ra.CRYPT_LORDS_GREATSWORD,n=new Lt(.12,1.2,.03),s=new tt({color:5592422,emissive:i.color,emissiveIntensity:.4,metalness:.9,roughness:.2}),o=new D(n,s);o.position.y=.6,e.add(o);const a=new Lt(.02,.8,.04),c=new $t({color:i.lightColor,transparent:!0,opacity:.9}),l=new D(a,c);l.position.set(.03,.5,0),l.rotation.z=.15,e.add(l);const h=new D(a,c);h.position.set(-.02,.7,0),h.rotation.z=-.1,e.add(h);const d=new Lt(.35,.06,.06),u=new tt({color:3355460,metalness:.8,roughness:.3}),f=new D(d,u);f.position.y=0,e.add(f);const m=new re(.03,.035,.3,8),_=new tt({color:4465186,roughness:.8}),g=new D(m,_);g.position.y=-.18,e.add(g);const p=new Vt(.05,8,8),x=new tt({color:i.color,emissive:i.color,emissiveIntensity:.6}),y=new D(p,x);y.position.y=-.35,e.add(y),e.position.copy(t.position),e.rotation.z=Math.PI/6,t.mesh=e,this.scene.add(e),t.light=new Be(i.lightColor,1.5,6),t.light.position.copy(t.position),this.scene.add(t.light);const v=t.position.y,w=()=>{if(t.collected)return;requestAnimationFrame(w);const E=Date.now()*.001;t.mesh.position.y=v+Math.sin(E*2)*.12,t.mesh.rotation.y+=.015;const C=.6+Math.sin(E*4)*.3;c.opacity=C,t.light.position.y=t.mesh.position.y,t.light.intensity=1.2+Math.sin(E*3)*.5};w()}_createBossUpgradeVisual(t){const e=t.itemDef||Ra.LORD_SOUL_FRAGMENT,i=new zt,n=new Gn(.25),s=new tt({color:e.color,emissive:e.color,emissiveIntensity:1,transparent:!0,opacity:.85,metalness:.3,roughness:.1}),o=new D(n,s);i.add(o);const a=5,c=[];for(let d=0;d<a;d++){const u=new Vt(.04,8,8),f=new $t({color:16777215,transparent:!0,opacity:.8}),m=new D(u,f);m.userData.orbitAngle=Math.PI*2*d/a,m.userData.orbitRadius=.35+Math.random()*.1,m.userData.orbitSpeed=2+Math.random(),c.push(m),i.add(m)}i.position.copy(t.position),t.mesh=i,this.scene.add(i),t.light=new Be(e.lightColor,2,7),t.light.position.copy(t.position),this.scene.add(t.light);const l=t.position.y,h=()=>{if(t.collected)return;requestAnimationFrame(h);const d=Date.now()*.001;t.mesh.position.y=l+Math.sin(d*1.5)*.15,o.rotation.y+=.02,o.rotation.x=Math.sin(d)*.2,c.forEach(u=>{const f=u.userData.orbitAngle+d*u.userData.orbitSpeed;u.position.x=Math.cos(f)*u.userData.orbitRadius,u.position.z=Math.sin(f)*u.userData.orbitRadius,u.position.y=Math.sin(f*2)*.1}),t.light.position.y=t.mesh.position.y,t.light.intensity=1.5+Math.sin(d*2)*.7};h()}spawnBossRewards(t,e,i,n){if(this.bossesDefeated.has(e))return;this.bossesDefeated.add(e);const s=t.clone();s.y+=.5,this.spawnItem(s,"boss_remnant",{value:i,name:`${i} Remnant`});const o=t.clone();o.x+=.8,o.y+=.8;const a=n.type==="weapon"?"boss_weapon":"boss_upgrade";this.spawnItem(o,a,{itemDef:n,name:n.name,description:n.description})}showVictoryNotification(t){let e=this.victoryNotificationEl;e||(e=document.getElementById("victory-notification")),e||(e=document.createElement("div"),e.id="victory-notification-temp",e.style.cssText=`
        position: fixed;
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Cinzel', serif;
        font-size: 3em;
        font-weight: bold;
        color: #ffd700;
        text-shadow: 0 0 30px #ffa500, 0 0 60px #ff6600, 2px 2px 4px #000;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        opacity: 0;
        transition: opacity 0.8s ease-in;
        z-index: 1000;
        pointer-events: none;
        text-align: center;
      `,document.body.appendChild(e)),e.innerHTML=`<span style="display:block;font-size:0.4em;color:#aaa;margin-bottom:0.3em">GREAT FOE VANQUISHED</span>${t}`,e.style.opacity="0",setTimeout(()=>{e.style.opacity="1"},100),setTimeout(()=>{e.style.opacity="0"},4500),e.id==="victory-notification-temp"&&setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},6e3)}update(t){for(const i of this.items){if(i.collected)continue;t.distanceTo(i.position)<1.5&&this.collectItem(i)}}collectItem(t){if(t.collected)return;t.collected=!0,t.mesh&&this.scene.remove(t.mesh),t.light&&this.scene.remove(t.light),this.gm.audioManager&&this.gm.audioManager.play("itemPickup",{position:t.position,volume:.6});let e="";switch(t.type){case"remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`;break;case"boss_remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:.8});break;case"key":this.inventory.keys.add(t.keyId),e=`Got ${t.name}`;break;case"boss_weapon":this.inventory.weapons.push(t.itemDef||t),e=`Obtained: ${t.name}`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:1});break;case"boss_upgrade":this.inventory.upgrades.push(t.itemDef||t),e=`Obtained: ${t.name}`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:1});break;default:e="Item collected"}this.showNotification(e)}showNotification(t){this.notificationEl&&(this.notificationEl.textContent=t,this.notificationEl.classList.add("visible"),setTimeout(()=>{this.notificationEl.classList.remove("visible")},2e3))}hasKey(t){return this.inventory.keys.has(t)}resetItems(){}}const Pa={standard:{body:4868677,accent:3814704,glow:16724787,corruption:2763301},berserker:{body:4857888,accent:6693410,glow:16737792,corruption:2099208},revenant:{body:9075290,accent:5917242,glow:4521796,corruption:3813408},ranged:{body:3820090,accent:2767402,glow:8978244,corruption:1714714},sentinel:{body:3816010,accent:2763317,glow:4474111,corruption:1710629},elite:{body:2757909,accent:1706506,glow:16729088,corruption:1378826},boss:{body:1708064,accent:657424,glow:16720418,corruption:328712,secondary:3805248}};function To(r={}){const{type:t="standard",scale:e=1,palette:i=null}=r,n=i||Pa[t]||Pa.standard,s=new zt,o=new tt({color:n.body,roughness:.85,metalness:.15}),a=new De(.4,.4,8,16),c=new D(a,o);c.position.set(0,.9,.1),c.rotation.x=.2,c.scale.set(1.2,.9,1),c.castShadow=!0,s.add(c);const l=new Vt(.35,12,8),h=new D(l,o);h.position.set(0,1.3,.15),h.scale.set(1.3,.8,1.1),h.castShadow=!0,s.add(h);const d=new tt({color:n.accent,roughness:.8,metalness:.1}),u=new Vt(.2,12,10),f=new D(u,d);f.position.set(0,1.5,.25),f.scale.set(1,.85,.9),f.castShadow=!0,s.add(f);const m=new tt({color:n.glow,emissive:n.glow,emissiveIntensity:4}),_=new Vt(.05,8,6),g=new D(_,m);g.position.set(-.08,1.55,.4),s.add(g);const p=new D(_,m);p.position.set(.08,1.55,.4),s.add(p);const x=new Be(n.glow,.5,2);x.position.set(0,1.55,.45),s.add(x),s.userData.eyes=[g,p],s.userData.eyeLight=x,s.userData.eyeMaterial=m;const y=new tt({color:n.body,roughness:.85,metalness:.1}),v=new De(.1,.35,6,10),w=new D(v,y);w.position.set(-.5,1,.1),w.rotation.z=.3,w.rotation.x=.2,w.castShadow=!0,s.add(w);const E=new D(v,y);E.position.set(.5,1,.1),E.rotation.z=-.3,E.rotation.x=.2,E.castShadow=!0,s.add(E);const C=new De(.08,.4,6,10),I=new D(C,y);I.position.set(-.65,.5,.15),I.rotation.z=.15,I.castShadow=!0,s.add(I);const M=new D(C,y);M.position.set(.65,.5,.15),M.rotation.z=-.15,M.castShadow=!0,s.add(M);const T=new Vt(.08,8,6),P=new tt({color:n.corruption,roughness:.7,metalness:.3}),O=new D(T,P);O.position.set(-.7,.15,.2),O.scale.set(1.2,.8,1.5),O.castShadow=!0,s.add(O);const B=new D(T,P);B.position.set(.7,.15,.2),B.scale.set(1.2,.8,1.5),B.castShadow=!0,s.add(B);const W=new De(.12,.3,6,10),H=new D(W,y);H.position.set(-.2,.35,0),H.rotation.x=-.15,H.castShadow=!0,s.add(H);const q=new D(W,y);q.position.set(.2,.35,0),q.rotation.x=-.15,q.castShadow=!0,s.add(q);const G=new Lt(.15,.08,.25),j=new D(G,P);j.position.set(-.2,.04,.05),j.castShadow=!0,s.add(j);const ot=new D(G,P);return ot.position.set(.2,.04,.05),ot.castShadow=!0,s.add(ot),Jy(s,n),s.userData.particles=Jd(n.glow),s.add(s.userData.particles),s.scale.setScalar(e),s.userData.bodyMaterial=o,s.userData.limbMaterial=y,s.userData.type=t,s.userData.isEnemyModel=!0,s}function Jy(r,t){const e=new tt({color:t.corruption,roughness:.6,metalness:.4}),i=new Ze(.06,.2,5);[{x:0,y:1.4,z:-.1,rot:-.4},{x:.1,y:1.3,z:-.05,rot:-.3},{x:-.1,y:1.3,z:-.05,rot:-.3},{x:0,y:1.2,z:0,rot:-.2},{x:.15,y:1.15,z:.05,rot:-.15},{x:-.15,y:1.15,z:.05,rot:-.15}].forEach(s=>{const o=new D(i,e);o.position.set(s.x,s.y,s.z),o.rotation.x=s.rot,o.castShadow=!0,r.add(o)})}function Jd(r){const e=new Float32Array(60),i=new Float32Array(60),n=new vt(r);for(let c=0;c<20;c++)e[c*3]=(Math.random()-.5)*.8,e[c*3+1]=Math.random()*1.5+.3,e[c*3+2]=(Math.random()-.5)*.6,i[c*3]=n.r*(.8+Math.random()*.4),i[c*3+1]=n.g*(.8+Math.random()*.4),i[c*3+2]=n.b*(.8+Math.random()*.4);const s=new Ae;s.setAttribute("position",new Ue(e,3)),s.setAttribute("color",new Ue(i,3));const o=new Oa({size:.08,vertexColors:!0,transparent:!0,opacity:.6,blending:vi,depthWrite:!1}),a=new Qc(s,o);return a.userData.time=0,a.userData.basePositions=e.slice(),a}function Qy(r={}){const t=To({...r,type:"elite",scale:(r.scale||1)*1.3}),e=new tt({color:2760736,roughness:.4,metalness:.7}),i=new Lt(.25,.15,.2),n=new D(i,e);n.position.set(-.45,1.25,.1),n.rotation.z=.3,n.castShadow=!0,t.add(n);const s=new D(i,e);s.position.set(.45,1.25,.1),s.rotation.z=-.3,s.castShadow=!0,t.add(s);const o=new tt({color:1706506,roughness:.5,metalness:.5,emissive:3342336,emissiveIntensity:.3}),a=new Ze(.1,.4,5),c=new D(a,o);return c.position.set(0,1.5,-.15),c.rotation.x=-.5,c.castShadow=!0,t.add(c),t.userData.isElite=!0,t}function tv(r={}){const t=To({...r,type:"berserker",scale:(r.scale||1)*.95});t.userData.eyeMaterial&&(t.userData.eyeMaterial.emissiveIntensity=6);const e=new tt({color:2099208,roughness:.5,metalness:.6}),i=new Ze(.03,.15,4);return[-.7,.7].forEach(n=>{for(let s=-1;s<=1;s++){const o=new D(i,e);o.position.set(n+s*.04*Math.sign(n),.08,.25+Math.abs(s)*.02),o.rotation.x=.3,o.castShadow=!0,t.add(o)}}),t.userData.isBerserker=!0,t}function ev(r={}){const t=To({...r,type:"revenant",scale:(r.scale||1)*.9});t.traverse(n=>{n.isMesh&&n.geometry?.type?.includes("Capsule")&&(n.scale.x*=.7,n.scale.z*=.7)});const e=new tt({color:6969930,roughness:.7,metalness:.2}),i=new De(.02,.2,4,6);for(let n=0;n<4;n++){const s=.7+n*.15,o=new D(i,e);o.position.set(-.25,s,.15),o.rotation.z=.8,o.rotation.y=.2,t.add(o);const a=new D(i,e);a.position.set(.25,s,.15),a.rotation.z=-.8,a.rotation.y=-.2,t.add(a)}return t.userData.isRevenant=!0,t}function iv(r={}){const t=To({...r,type:"sentinel",scale:(r.scale||1)*1.2}),e=new tt({color:3816010,roughness:.3,metalness:.8}),i=new Lt(.4,.5,.1),n=new D(i,e);n.position.set(-.8,.6,.2),n.rotation.y=.3,n.castShadow=!0,t.add(n);const s=new tt({color:2763317,roughness:.35,metalness:.75}),o=new Lt(.5,.4,.12),a=new D(o,s);return a.position.set(0,.95,.25),a.castShadow=!0,t.add(a),t.userData.isSentinel=!0,t}function nv(r={}){const t=Pa.ranged,e=(r.scale||1)*.85,i=new zt,n=new tt({color:t.body,roughness:.8,metalness:.2}),s=new De(.25,.5,8,16),o=new D(s,n);o.position.set(0,1,0),o.scale.set(.8,1.1,.7),o.castShadow=!0,i.add(o);const a=new tt({color:t.accent,roughness:.75,metalness:.1}),c=new Vt(.18,12,10),l=new D(c,a);l.position.set(0,1.6,.15),l.scale.set(.9,1.2,.85),l.castShadow=!0,i.add(l);const h=new tt({color:t.glow,emissive:t.glow,emissiveIntensity:5}),d=new Vt(.04,8,6),u=new D(d,h);u.position.set(-.06,1.65,.28),i.add(u);const f=new D(d,h);f.position.set(.06,1.65,.28),i.add(f);const m=new Be(t.glow,.4,2);m.position.set(0,1.65,.3),i.add(m),i.userData.eyes=[u,f],i.userData.eyeLight=m,i.userData.eyeMaterial=h;const _=new tt({color:t.body,roughness:.8,metalness:.15}),g=new De(.06,.35,6,10),p=new D(g,_);p.position.set(-.3,1.1,0),p.rotation.z=.4,p.rotation.x=.3,p.castShadow=!0,i.add(p);const x=new D(g,_);x.position.set(.3,1.1,0),x.rotation.z=-.4,x.rotation.x=.3,x.castShadow=!0,i.add(x);const y=new De(.05,.5,6,10),v=new D(y,_);v.position.set(-.5,.55,.1),v.rotation.z=.2,v.rotation.x=.4,v.castShadow=!0,i.add(v);const w=new D(y,_);w.position.set(.5,.55,.1),w.rotation.z=-.2,w.rotation.x=.4,w.castShadow=!0,i.add(w);const E=new tt({color:t.corruption,roughness:.4,metalness:.6,emissive:t.glow,emissiveIntensity:1.5}),C=new re(.06,.03,.15,8),I=new D(C,E);I.position.set(-.58,.15,.2),I.rotation.x=.5,I.rotation.z=.2,I.castShadow=!0,i.add(I);const M=new D(C,E);M.position.set(.58,.15,.2),M.rotation.x=.5,M.rotation.z=-.2,M.castShadow=!0,i.add(M);const T=new tt({color:t.glow,emissive:t.glow,emissiveIntensity:3,transparent:!0,opacity:.8}),P=new Vt(.04,8,6),O=new D(P,T);O.position.set(-.6,.08,.25),i.add(O);const B=new D(P,T);B.position.set(.6,.08,.25),i.add(B),i.userData.projectileOrbs=[O,B];const W=new De(.07,.3,6,10),H=new D(W,_);H.position.set(-.15,.4,0),H.rotation.x=.15,H.castShadow=!0,i.add(H);const q=new D(W,_);q.position.set(.15,.4,0),q.rotation.x=.15,q.castShadow=!0,i.add(q);const G=new De(.05,.25,6,10),j=new D(G,_);j.position.set(-.15,.12,.1),j.rotation.x=-.4,j.castShadow=!0,i.add(j);const ot=new D(G,_);ot.position.set(.15,.12,.1),ot.rotation.x=-.4,ot.castShadow=!0,i.add(ot);const at=new Lt(.1,.05,.2),ft=new tt({color:t.corruption,roughness:.7,metalness:.2}),Bt=new D(at,ft);Bt.position.set(-.15,.025,.15),Bt.castShadow=!0,i.add(Bt);const Nt=new D(at,ft);Nt.position.set(.15,.025,.15),Nt.castShadow=!0,i.add(Nt);const ye=new tt({color:t.glow,emissive:t.glow,emissiveIntensity:2,transparent:!0,opacity:.6}),he=new De(.02,.25,4,6);for(let K=0;K<4;K++){const J=new D(he,ye),_t=K/4*Math.PI*.6-Math.PI*.3;J.position.set(Math.sin(_t)*.3,.8+K*.15,-.2),J.rotation.x=-.5+Math.random()*.3,J.rotation.z=Math.sin(_t)*.3,i.add(J)}return i.userData.particles=Jd(t.glow),i.add(i.userData.particles),i.scale.setScalar(e),i.userData.bodyMaterial=n,i.userData.limbMaterial=_,i.userData.type="ranged",i.userData.isEnemyModel=!0,i.userData.isRanged=!0,i}function sv(r={}){const t=Pa.boss,e=(r.scale||1)*1.8,i=new zt,n=new tt({color:t.body,roughness:.7,metalness:.3}),s=new De(.5,.6,10,20),o=new D(s,n);o.position.set(0,1,0),o.scale.set(1.4,1,1.1),o.castShadow=!0,i.add(o);const a=new Vt(.45,12,10),c=new D(a,n);c.position.set(0,1.4,.05),c.scale.set(1.3,.9,1),c.castShadow=!0,i.add(c);const l=new tt({color:1710629,roughness:.3,metalness:.8}),h=new tt({color:2759216,roughness:.35,metalness:.7,emissive:t.glow,emissiveIntensity:.15}),d=new Lt(.7,.5,.15),u=new D(d,h);u.position.set(0,1.35,.35),u.castShadow=!0,i.add(u);const f=new Vt(.25,10,8),m=new D(f,l);m.position.set(-.6,1.55,0),m.scale.set(1.2,.9,1),m.castShadow=!0,i.add(m);const _=new D(f,l);_.position.set(.6,1.55,0),_.scale.set(1.2,.9,1),_.castShadow=!0,i.add(_);const g=new Ze(.08,.3,5),p=new tt({color:t.corruption,roughness:.5,metalness:.6});[[-.7,1.7,0],[.7,1.7,0],[-.5,1.75,-.1],[.5,1.75,-.1]].forEach(k=>{const $=new D(g,p);$.position.set(...k),$.rotation.x=-.3,$.castShadow=!0,i.add($)});const x=new tt({color:t.accent,roughness:.75,metalness:.2}),y=new Vt(.22,12,10),v=new D(y,x);v.position.set(0,1.85,.1),v.scale.set(1,1.1,.95),v.castShadow=!0,i.add(v);const w=new tt({color:2759184,roughness:.4,metalness:.85,emissive:3807776,emissiveIntensity:.3}),E=new D(new $i(.18,.03,8,16),w);E.position.set(0,2.05,.05),E.rotation.x=Math.PI/2,i.add(E);const C=new Ze(.04,.18,4);for(let k=0;k<5;k++){const $=k/5*Math.PI*2,Z=new D(C,w);Z.position.set(Math.sin($)*.17,2.12,Math.cos($)*.15+.05),Z.rotation.z=Math.sin($)*.2,i.add(Z)}const I=new tt({color:t.glow,emissive:t.glow,emissiveIntensity:6}),M=new Vt(.05,8,6),T=new D(M,I);T.position.set(-.08,1.9,.25),i.add(T);const P=new D(M,I);P.position.set(.08,1.9,.25),i.add(P);const O=new Be(t.glow,1,4);O.position.set(0,1.9,.3),i.add(O),i.userData.eyes=[T,P],i.userData.eyeLight=O,i.userData.eyeMaterial=I;const B=new tt({color:t.secondary||2756656,roughness:.8,metalness:.1,side:fe}),W=new Ve(1,1.2,8,12),H=W.attributes.position;for(let k=0;k<H.count;k++){const $=H.getY(k),Z=H.getX(k);H.setZ(k,-.1-$*.15-Math.abs(Z)*.1)}W.computeVertexNormals();const q=new D(W,B);q.position.set(0,1,-.35),q.rotation.x=.1,q.castShadow=!0,i.add(q),i.userData.cape=q;const G=new tt({color:t.body,roughness:.75,metalness:.25}),j=new De(.14,.4,8,12),ot=new D(j,G);ot.position.set(-.55,1.3,0),ot.rotation.z=.35,ot.castShadow=!0,i.add(ot);const at=new D(j,G);at.position.set(.55,1.3,0),at.rotation.z=-.35,at.castShadow=!0,i.add(at);const ft=new De(.11,.45,8,12),Bt=new D(ft,G);Bt.position.set(-.75,.7,.1),Bt.rotation.z=.15,Bt.castShadow=!0,i.add(Bt);const Nt=new D(ft,G);Nt.position.set(.75,.7,.1),Nt.rotation.z=-.15,Nt.castShadow=!0,i.add(Nt);const ye=new tt({color:1710624,roughness:.35,metalness:.75}),he=new Vt(.12,10,8),K=new D(he,ye);K.position.set(-.8,.3,.15),K.scale.set(1.1,.9,1.2),K.castShadow=!0,i.add(K);const J=new D(he,ye);J.position.set(.8,.3,.15),J.scale.set(1.1,.9,1.2),J.castShadow=!0,i.add(J);const _t=new De(.15,.45,8,12),Ft=new D(_t,G);Ft.position.set(-.25,.45,0),Ft.castShadow=!0,i.add(Ft);const Mt=new D(_t,G);Mt.position.set(.25,.45,0),Mt.castShadow=!0,i.add(Mt);const oe=new Lt(.2,.12,.3),ke=new D(oe,l);ke.position.set(-.25,.06,.05),ke.castShadow=!0,i.add(ke);const te=new D(oe,l);te.position.set(.25,.06,.05),te.castShadow=!0,i.add(te);const jt=new zt,de=new tt({color:3816005,roughness:.25,metalness:.9,emissive:2097168,emissiveIntensity:.2}),Wt=new Lt(.08,1.4,.02),Re=new D(Wt,de);Re.position.y=.7,jt.add(Re);const L=new Ze(.04,.2,4),Pe=new D(L,de);Pe.position.y=1.45,jt.add(Pe);const ae=new tt({color:2759189,roughness:.5,metalness:.7}),ve=new re(.03,.035,.25,8),bt=new D(ve,ae);bt.position.y=-.12,jt.add(bt);const R=new Lt(.25,.04,.06),S=new D(R,ae);return S.position.y=.02,jt.add(S),jt.position.set(.85,.6,.2),jt.rotation.z=-.3,i.add(jt),i.userData.sword=jt,i.userData.particles=ov(t.glow),i.add(i.userData.particles),i.scale.setScalar(e),i.userData.bodyMaterial=n,i.userData.limbMaterial=G,i.userData.type="boss",i.userData.isEnemyModel=!0,i.userData.isBoss=!0,i}function ov(r){const e=new Float32Array(120),i=new Float32Array(120),n=new vt(r);for(let c=0;c<40;c++)e[c*3]=(Math.random()-.5)*1.2,e[c*3+1]=Math.random()*2+.3,e[c*3+2]=(Math.random()-.5)*1,i[c*3]=n.r*(.7+Math.random()*.5),i[c*3+1]=n.g*(.7+Math.random()*.5),i[c*3+2]=n.b*(.7+Math.random()*.5);const s=new Ae;s.setAttribute("position",new Ue(e,3)),s.setAttribute("color",new Ue(i,3));const o=new Oa({size:.12,vertexColors:!0,transparent:!0,opacity:.7,blending:vi,depthWrite:!1}),a=new Qc(s,o);return a.userData.time=0,a.userData.basePositions=e.slice(),a}function av(r,t){if(r.userData.isEnemyModel){if(r.userData.particles){const e=r.userData.particles;e.userData.time+=t;const i=e.geometry.attributes.position.array,n=e.userData.basePositions,s=e.userData.time;for(let o=0;o<i.length/3;o++){const a=o*.5;i[o*3]=n[o*3]+Math.sin(s*2+a)*.1,i[o*3+1]=n[o*3+1]+(s*.5+a)%1.5,i[o*3+2]=n[o*3+2]+Math.cos(s*2+a)*.1,i[o*3+1]>2&&(i[o*3+1]=n[o*3+1])}e.geometry.attributes.position.needsUpdate=!0}if(r.userData.eyeMaterial){const e=3+Math.sin(Date.now()*.003)*1.5;r.userData.eyeMaterial.emissiveIntensity=e}if(r.userData.eyeLight){const e=.4+Math.sin(Date.now()*.003)*.2;r.userData.eyeLight.intensity=e}}}function rv(r,t=16711680,e=150){if(!r.userData.isEnemyModel)return;const i=new vt(t);r.traverse(n=>{if(n.isMesh&&n.material&&n.material.emissive){const s=n.material.emissive.clone(),o=n.material.emissiveIntensity;n.material.emissive.copy(i),n.material.emissiveIntensity=2,setTimeout(()=>{n.material&&(n.material.emissive.copy(s),n.material.emissiveIntensity=o)},e)}})}const F={IDLE:"idle",PATROL:"patrol",CHASE:"chase",CIRCLE:"circle",RETREAT:"retreat",FLANK:"flank",ATTACK:"attack",STAGGERED:"staggered",DEAD:"dead",DORMANT:"dormant",RISING:"rising",BOSS_SLAM:"boss_slam",BOSS_SWEEP:"boss_sweep",BOSS_COMBO:"boss_combo",BOSS_CHARGE:"boss_charge",BOSS_GRAB:"boss_grab",BOSS_TRANSITION:"boss_transition",BOSS_SUMMON:"boss_summon",BOSS_AOE:"boss_aoe",BOSS_PROJECTILE:"boss_projectile"},Se={NORMAL:"normal",QUICK_JAB:"quick_jab",HEAVY:"heavy",COMBO:"combo"},ra={[Se.NORMAL]:{windupMult:1,damageMult:1,postureMult:1,cooldownMult:1,rangeMult:1,tell:"normal"},[Se.QUICK_JAB]:{windupMult:.5,damageMult:.6,postureMult:.5,cooldownMult:.7,rangeMult:.85,tell:"jab"},[Se.HEAVY]:{windupMult:1.8,damageMult:1.6,postureMult:2,cooldownMult:1.5,rangeMult:1.2,tell:"heavy"},[Se.COMBO]:{windupMult:.7,damageMult:.5,postureMult:.6,cooldownMult:.4,rangeMult:1,tell:"combo"}},cv={[F.IDLE]:"Idle",[F.PATROL]:"Walking",[F.CHASE]:"Running",[F.CIRCLE]:"Walking",[F.RETREAT]:"Walking",[F.FLANK]:"Walking",[F.ATTACK]:"Punch",[F.STAGGERED]:"No",[F.DEAD]:"Death",[F.DORMANT]:"Idle",[F.RISING]:"ThumbsUp",[F.BOSS_SLAM]:"Punch",[F.BOSS_SWEEP]:"Punch",[F.BOSS_COMBO]:"Punch",[F.BOSS_CHARGE]:"Running",[F.BOSS_GRAB]:"Punch",[F.BOSS_TRANSITION]:"No",[F.BOSS_SUMMON]:"ThumbsUp",[F.BOSS_AOE]:"Punch",[F.BOSS_PROJECTILE]:"Punch"},Ia={HOLLOW_SOLDIER:{name:"Hollow Soldier",health:50,damage:15,postureDmg:15,moveSpeed:2.5,detectionRange:10,attackRange:2.2,attackCooldown:1.5,attackWindup:.5,attackDuration:.2,remnantDrop:40,patrolRadius:3,bodyColor:4860458,eyeColor:16724787,canChainAttacks:!1,maxPosture:60,hasShield:!1,canRetreat:!1,attackVariety:{enabled:!0,heavyChance:.2,quickJabChance:.3,comboEnabled:!1},proceduralModel:"standard",modelScale:1,animSpeedMult:1},BERSERKER:{name:"Berserker",health:35,damage:20,postureDmg:10,moveSpeed:4,detectionRange:12,attackRange:2,attackCooldown:.8,attackWindup:.3,attackDuration:.15,remnantDrop:60,patrolRadius:5,bodyColor:6693410,eyeColor:16737792,canChainAttacks:!0,maxChainAttacks:3,maxPosture:40,hasShield:!1,canRetreat:!1,canFlank:!0,attackVariety:{enabled:!0,heavyChance:.05,quickJabChance:.5,comboEnabled:!0,comboChance:.4,maxComboHits:3},proceduralModel:"berserker",modelScale:.95,animSpeedMult:1.5},SENTINEL:{name:"Sentinel",health:100,damage:30,postureDmg:25,moveSpeed:1.5,detectionRange:8,attackRange:2.5,attackCooldown:2.5,attackWindup:.8,attackDuration:.3,remnantDrop:100,patrolRadius:2,bodyColor:3355460,eyeColor:4474111,canChainAttacks:!1,maxPosture:100,hasShield:!0,shieldBlockChance:.4,canRetreat:!1,attackVariety:{enabled:!0,heavyChance:.6,quickJabChance:.15,comboEnabled:!1},proceduralModel:"sentinel",modelScale:1.2,animSpeedMult:.8},CRYPT_GUARDIAN:{name:"Crypt Guardian",health:200,damage:40,postureDmg:30,moveSpeed:1.8,detectionRange:12,attackRange:3,attackCooldown:2,attackWindup:.6,attackDuration:.4,remnantDrop:500,patrolRadius:3,bodyColor:1710634,eyeColor:16720418,canChainAttacks:!0,maxChainAttacks:2,maxPosture:150,hasShield:!1,isElite:!0,canRetreat:!1,attackVariety:{enabled:!0,heavyChance:.35,quickJabChance:.25,comboEnabled:!0,comboChance:.35,maxComboHits:2},proceduralModel:"elite",modelScale:1.3,animSpeedMult:.9},BONE_REVENANT:{name:"Bone Revenant",health:40,damage:18,postureDmg:12,moveSpeed:3.5,detectionRange:8,attackRange:2,attackCooldown:.9,attackWindup:.25,attackDuration:.15,remnantDrop:70,patrolRadius:4,bodyColor:9075290,eyeColor:4521796,canChainAttacks:!0,maxChainAttacks:2,maxPosture:45,hasShield:!1,isAmbush:!0,canRetreat:!0,retreatHealthThreshold:.25,retreatDistance:12,canFlank:!0,attackVariety:{enabled:!0,heavyChance:.1,quickJabChance:.55,comboEnabled:!0,comboChance:.3,maxComboHits:2},proceduralModel:"revenant",modelScale:.9,animSpeedMult:1.4},CORRUPTED_ARCHER:{name:"Corrupted Archer",health:30,damage:22,postureDmg:8,moveSpeed:2.8,detectionRange:18,attackRange:12,attackCooldown:2.5,attackWindup:.8,attackDuration:.2,remnantDrop:55,patrolRadius:5,bodyColor:3820090,eyeColor:8978244,canChainAttacks:!1,maxPosture:35,hasShield:!1,isRanged:!0,preferredRange:10,canRetreat:!0,retreatHealthThreshold:.5,retreatDistance:8,canFlank:!0,attackVariety:{enabled:!0,heavyChance:.3,quickJabChance:.4,comboEnabled:!1},proceduralModel:"ranged",modelScale:.85,animSpeedMult:1.2},CRYPT_LORD:{name:"The Crypt Lord",health:600,damage:45,postureDmg:35,moveSpeed:2,detectionRange:20,attackRange:3.5,attackCooldown:1.8,attackWindup:.8,attackDuration:.3,remnantDrop:2500,patrolRadius:3,bodyColor:1710634,eyeColor:16720418,canChainAttacks:!0,maxChainAttacks:3,maxPosture:200,hasShield:!1,isBoss:!0,isElite:!0,bossPhase:1,attacks:{GREATSWORD_SLAM:{damage:55,postureDmg:40,windup:.8,recovery:1.5,range:4},HORIZONTAL_SWEEP:{damage:45,postureDmg:35,windup:.6,recovery:1,range:4.5},THREE_HIT_COMBO:{damages:[35,35,50],postureDmg:25,windup:.4,recovery:2,range:3.5},SHOULDER_BASH:{damage:30,postureDmg:45,windup:.5,recovery:1.2,range:6,isCharge:!0},GRAB:{damage:80,postureDmg:0,windup:1,recovery:2.5,range:2.5,isGrab:!0},SKELETON_SUMMON:{windup:1.2,recovery:1.5,summonCount:2},GROUND_SLAM_AOE:{damage:50,postureDmg:60,windup:1,recovery:2,range:8,jumpHeight:3},DARK_PROJECTILE:{damage:40,windup:.6,recovery:.8,speed:8,trackingStrength:3}},proceduralModel:"boss",modelPath:"assets/models/soldier.glb",modelScale:1.8,animSpeedMult:.85}};class Da{constructor(t,e,i={},n=null){this.scene=t,this.gm=n;const s=i.type?Ia[i.type]:{};this.config={...Ia.HOLLOW_SOLDIER,...s,...i},this.maxHealth=this.config.health,this.health=this.maxHealth,this.maxPosture=this.config.maxPosture||60,this.posture=0,this.isDormant=this.config.behavior==="ambush"||this.config.isAmbush,this.triggerZone=this.config.triggerZone||null,this.triggerRadius=this.config.triggerRadius||6,this.state=this.isDormant?F.DORMANT:F.IDLE,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.isBlocking=!1,this.isDead=!1,this.chainAttackCount=0,this.lastAttackTime=0,this.circleDirection=Math.random()>.5?1:-1,this.circleTimer=0,this.spawnPos=e.clone(),this.patrolTarget=e.clone(),this.patrolWait=0,this.modelLoaded=!1,this.animSystem=null,this.currentAnim=null,this.gltfModel=null,this.mesh=new zt,this.mesh.position.copy(e),this._createFallbackMesh(),this._createHealthBar(2.1),t.add(this.mesh),this.isDormant&&(this.mesh.visible=!1),this._loadGLTFModel(),this.world=null,this.collisionRadius=.5,this.lastPosition=e.clone(),this.stuckTimer=0,this.stuckThreshold=2,this.unstuckAttempts=0,this.avoidanceDir=null,this.avoidanceTimer=0,this.canRetreat=this.config.canRetreat||!1,this.retreatHealthThreshold=this.config.retreatHealthThreshold||.25,this.retreatDistance=this.config.retreatDistance||12,this.retreatReengageThreshold=.4,this.retreatStartPos=null,this.isRetreating=!1,this.retreatWallHits=0,this.canFlank=this.config.canFlank||!1,this.flankCooldown=5,this.lastFlankTime=-this.flankCooldown,this.flankTarget=null,this.isFlankAssigned=!1,this.flankDirection=1,this.flankProgress=0,this.groupId=null,this.isGroupLeader=!1,this.groupJoinDelay=0,this.isWaitingToJoin=!1,this.groupConfusionTimer=0,this.isConfused=!1,this.attackQueuePosition=-1,this.canAttackInGroup=!0,this.lastGroupAttackTime=0,this.groupEngageTime=0;const o=this.config.attackVariety||{};this.attackVarietyEnabled=o.enabled||!1,this.currentAttackType=Se.NORMAL,this.lastAttackType=null,this.attackTypeCooldowns={[Se.HEAVY]:0,[Se.QUICK_JAB]:0,[Se.COMBO]:0},this.playerLastPos=null,this.playerMoveSpeed=0,this.comboHitsRemaining=0,this.attackTellActive=!1,this.attackTellStartTime=0,this.config.isBoss&&(this.isBoss=!0,this.bossPhase=this.config.bossPhase||1,this.bossActive=!1,this.currentBossAttack=null,this.bossComboHit=0,this.lastBossAttackTime=0,this.bossAttackCooldown=0,this.chargeTarget=null,this.chargeProgress=0,this.grabTarget=null,this.world=null,this.enemyManager=null,this.activeProjectiles=[],this.summonedAdds=[],this.lastSummonTime=0,this.summonCooldown=15e3,this.aoeJumpProgress=0,this.aoeStartY=0,this._createHealthBar(3.5))}wake(){this.state===F.DORMANT&&(this.mesh.visible=!0,this.isDormant=!1,this._changeState(F.RISING),this.gm?.audioManager&&this.gm.audioManager.play("ambush",{position:this.mesh.position,volume:.7}))}checkTrigger(t){if(this.state!==F.DORMANT)return!1;const e=t.x-this.mesh.position.x,i=t.z-this.mesh.position.z;return Math.sqrt(e*e+i*i)<this.triggerRadius}_createFallbackMesh(){const t=this.config.proceduralModel||"standard",e=this.config.modelScale||1;let i;switch(t){case"berserker":i=tv({scale:e});break;case"sentinel":i=iv({scale:e});break;case"revenant":i=ev({scale:e});break;case"ranged":i=nv({scale:e});break;case"elite":i=Qy({scale:e});break;case"boss":i=sv({scale:e});break;default:i=To({type:"standard",scale:e});break}this.proceduralModel=i,this.mesh.add(i),this.body=i,this.fallbackBody=i,i.userData.eyes&&(this.eye=i.userData.eyes[0]),this.useProceduralAnimation=!0}async _loadGLTFModel(){if(!this.config.isBoss){this.modelLoaded=!0;return}try{const t="/project-ashen/",e=this.config.modelPath||"assets/models/soldier.glb",i=`${t}${e}`,n=this.config.modelScale||1.5,{scene:s,animations:o}=await yo.loadModel(i,{scale:n});this.gltfModel=s,this.gltfModel.position.y=0,this.gltfModel.rotation.y=Math.PI,this._applyModelTint(2759226),this.gltfModel.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.userData.originalMaterial=a.material.clone())}),this.proceduralModel&&(this.proceduralModel.visible=!1),this.mesh.add(this.gltfModel),o&&o.length>0&&(this.animSystem=yo.createAnimationSystem(this.gltfModel,o),this._playAnimation(this.state,{loop:!0})),this.modelLoaded=!0,this.body=this.gltfModel,this.useProceduralAnimation=!1}catch(t){console.error(`[Boss:${this.config.name}] Failed to load GLTF, using procedural model:`,t),this.modelLoaded=!0}}_applyModelTint(t){const e=new vt(t);this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.color&&s.color.lerp(e,.3),s.emissive&&(s.emissive.copy(e).multiplyScalar(.1),s.emissiveIntensity=.2)})})}_playAnimation(t,e={}){if(!this.animSystem)return;const i=cv[t];if(!i||this.currentAnim===i&&t!==F.ATTACK)return;const n=this.config.animSpeedMult||1,s={loop:t===F.IDLE||t===F.PATROL||t===F.CHASE||t===F.CIRCLE||t===F.RETREAT,fadeIn:.2,timeScale:n,clampWhenFinished:t===F.DEAD};t===F.ATTACK?(s.loop=!1,s.timeScale=n*1.2):t===F.CHASE&&(s.timeScale=n*1.3);const o={...s,...e};this.currentAnim?this.animSystem.crossFade(this.currentAnim,i,o.fadeIn):this.animSystem.play(i,o),this.currentAnim=i}_updateProceduralAnimation(t){if(!this.proceduralModel)return;const e=this.stateTimer,i=Date.now()*.001,n=this.config.animSpeedMult||1,s=this.proceduralModel;let o=.02,a=2;const c=(this.mesh?.uuid?.charCodeAt(0)||0)*.1,l=this.config.isElite?.08:.05,h=Math.sin(i*12+c)*Math.sin(i*7.3)*l;switch(this.state){case F.IDLE:case F.DORMANT:o=.02,a=2.5;const d=Math.sin(e*1.2)*.06,u=Math.sin(e*8.5)*Math.sin(e*13.2)*.08,f=Math.random()<.002?(Math.random()-.5)*.2:0;s.rotation.y=d+u+f,s.rotation.z=Math.sin(e*.7)*.02+h*.5,Math.sin(e*.3)>.95?s.rotation.x=.05:s.rotation.x=Qt.lerp(s.rotation.x,0,t*2);break;case F.PATROL:o=.05,a=7*n;const m=Math.sin(e*1.8)*.15,_=Math.sin(e*11)*.04;s.rotation.y=m+_,s.rotation.z=Math.sin(e*a)*.03;break;case F.CIRCLE:o=.03,a=5*n,s.rotation.x=.08,s.rotation.y=h*2,s.rotation.z=Math.sin(e*3)*.02;break;case F.CHASE:case F.FLANK:o=.08,a=12*n,s.rotation.x=.25;const g=Math.sin(e*a*1.5)*.06;s.rotation.y=g+h,s.rotation.z=Math.sin(e*a)*.04;break;case F.RETREAT:o=.04,a=8*n,s.rotation.x=-.15,s.rotation.y=Math.sin(e*2)*.1,s.rotation.z=Math.sin(e*a)*.06+h;break;case F.ATTACK:o=.03,a=18*n;const p=(this.config.attackWindup||.5)*(ra[this.currentAttackType]?.windupMult||1);if(e<p){const w=e/p;s.rotation.x=-.2*w;const E=Math.sin(e*30)*.03*w;s.rotation.z=E,s.rotation.y=Math.sin(e*25)*.02*w,s.position.y=-.05*w}else{const w=e-p,C=Math.min(w/.15,1);s.rotation.x=Qt.lerp(-.2,.4,C),s.rotation.z=Math.sin(C*Math.PI)*.1,s.position.y=-.05+C*.08}break;case F.STAGGERED:const x=Math.max(0,1-e/1.5);s.rotation.z=Math.sin(e*18)*.15*x,s.rotation.x=Math.cos(e*14)*.08*x,s.rotation.y=Math.sin(e*11)*.1*x,s.position.y=-.1*x,o=0;break;case F.RISING:const y=Math.min(e/.8,1),v=Qt.lerp(-.6,0,this._easeOutBack(y));s.position.y=v,s.rotation.x=(1-y)*.6,s.rotation.z=Math.sin(e*15)*.05*(1-y),o=0;break;case F.DEAD:if(e<.5){const w=Math.sin(e*20)*Math.exp(-e*3);s.rotation.z=w*.2,s.rotation.x=e*.3}o=0;break;default:s.rotation.x=Qt.lerp(s.rotation.x,0,t*3),s.rotation.z=Qt.lerp(s.rotation.z,0,t*3)}if(o>0&&this.state!==F.STAGGERED&&this.state!==F.DEAD){const d=Math.sin(e*a*.7)*.2;s.position.y=(s.position.y||0)+Math.sin(e*a+d)*o}}_easeOutBack(t){return 1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2)}_createHealthBar(t){this.healthBarGroup=new zt,this.healthBarGroup.position.y=t;const e=new Ve(1,.08),i=new $t({color:1118481,side:fe}),n=new D(e,i);this.healthBarGroup.add(n);const s=new Ve(.98,.06),o=new $t({color:13382451,side:fe});this.healthFill=new D(s,o),this.healthFill.position.z=.001,this.healthBarGroup.add(this.healthFill);const a=new Ve(1,.04),c=new $t({color:2236945,side:fe}),l=new D(a,c);l.position.y=-.08,this.healthBarGroup.add(l);const h=new Ve(.98,.03),d=new $t({color:16763904,side:fe});this.postureFill=new D(h,d),this.postureFill.position.set(0,-.08,.001),this.postureFill.scale.x=0,this.healthBarGroup.add(this.postureFill),this.mesh.add(this.healthBarGroup),this.healthBarGroup.visible=!1,this.breakIndicator=this._createBreakIndicator(),this.breakIndicator.visible=!1,this.mesh.add(this.breakIndicator)}_createBreakIndicator(){const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.fillStyle="#ffcc00",e.font="bold 32px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("BREAK!",64,32);const i=new Td(t),n=new Md({map:i,transparent:!0,depthTest:!1}),s=new Bf(n);return s.scale.set(1.5,.75,1),s.position.y=3,s}update(t,e){if(this.state===F.DEAD)return;this.animSystem&&this.animSystem.update(t),this.proceduralModel&&this.useProceduralAnimation&&(av(this.proceduralModel,t),this._updateProceduralAnimation(t)),this.stateTimer+=t;const i=this.mesh.position.distanceTo(e.mesh.position),n=this.health/this.maxHealth;if(this.healthBarGroup.visible){const s=this.scene.getObjectByProperty("type","PerspectiveCamera");s&&this.healthBarGroup.lookAt(s.position)}switch(this.config.hasShield&&this.state===F.CHASE&&i<this.config.attackRange*1.5?this.isBlocking=Math.random()<this.config.shieldBlockChance:this.isBlocking=!1,this.state){case F.IDLE:this.patrolWait+=t,i<this.config.detectionRange?(this._changeState(F.CHASE),this.healthBarGroup.visible=!0):this.patrolWait>2&&(this.patrolWait=0,this._pickPatrolTarget(),this._changeState(F.PATROL));break;case F.PATROL:if(i<this.config.detectionRange){this._changeState(F.CHASE),this.healthBarGroup.visible=!0;break}this._moveToward(this.patrolTarget,this.config.moveSpeed*.5,t),this.mesh.position.distanceTo(this.patrolTarget)<.5&&this._changeState(F.IDLE);break;case F.CHASE:if(this.isBoss&&!this.bossActive&&(this.bossActive=!0,this.healthBarGroup.visible=!0,this.world&&this.world.activateBossArena&&this.world.activateBossArena(),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.9})),this.isBoss&&(this.playerTarget=e.mesh.position.clone()),!this.isBoss&&i>this.config.detectionRange*1.5){this._changeState(F.IDLE),this.healthBarGroup.visible=!1,this._resetGroupState();break}if(!this.isBoss&&this.isWaitingToJoin)if(this.groupJoinDelay-=t,this.groupJoinDelay<=0)this.isWaitingToJoin=!1,this.groupEngageTime=Date.now();else{this._moveToward(e.mesh.position,this.config.moveSpeed*.4,t),this._faceTarget(e.mesh.position,t);break}if(!this.isBoss&&this.isConfused)if(this.groupConfusionTimer-=t,this.groupConfusionTimer<=0)this.isConfused=!1,this.groupConfusionTimer=0;else{const p=Math.sin(this.stateTimer*8)*.5;this.mesh.rotation.y+=p*t;break}if(!this.isBoss&&this.canRetreat&&n<this.retreatHealthThreshold&&!this.isRetreating){this.retreatStartPos=this.mesh.position.clone(),this.isRetreating=!0,this.retreatWallHits=0,this._changeState(F.RETREAT);break}if(!this.isBoss&&this.canFlank&&this.isFlankAssigned&&this.stateTimer+Date.now()/1e3-this.lastFlankTime>=this.flankCooldown){this._calculateFlankTarget(e.mesh.position),this.flankProgress=0,this._changeState(F.FLANK);break}if(i<=this.config.attackRange&&this.bossAttackCooldown<=0){if(this.isBoss)this._selectBossAttack(i,n);else{if(this.groupId!==null&&!this.canAttackInGroup){this._changeState(F.CIRCLE);break}this.lastGroupAttackTime=Date.now(),this._changeState(F.ATTACK)}break}if(this.isBoss&&i>this.config.attackRange&&i<8&&this.bossAttackCooldown<=0&&Math.random()<.02){this._startBossCharge(e);break}if(i<this.config.attackRange*2&&Math.random()<.005){this._changeState(F.CIRCLE);break}this._moveToward(e.mesh.position,this.config.moveSpeed,t),this._faceTarget(e.mesh.position,t);break;case F.CIRCLE:if(this.circleTimer+=t,this.circleTimer>1.5||i>this.config.detectionRange){this._changeState(F.CHASE);break}if(i<=this.config.attackRange){this._changeState(F.ATTACK);break}this._circleStrafe(e.mesh.position,t),this._faceTarget(e.mesh.position,t);break;case F.FLANK:if(this.flankProgress+=t,this.flankProgress>3){this._endFlankManeuver(!1),this._changeState(F.CHASE);break}if(i>this.config.detectionRange*1.5){this._endFlankManeuver(!1),this._changeState(F.IDLE),this.healthBarGroup.visible=!1;break}if(this.flankProgress%.5<t&&this._calculateFlankTarget(e.mesh.position),(this.flankTarget?this.mesh.position.distanceTo(this.flankTarget):1/0)<1.5||i<=this.config.attackRange){this._endFlankManeuver(!0),this._changeState(F.ATTACK);break}const o=this.mesh.position.clone();if(this._moveToward(this.flankTarget,this.config.moveSpeed*1.1,t),this.mesh.position.distanceTo(o)<this.config.moveSpeed*.5*t){this._endFlankManeuver(!1),this._changeState(F.CHASE);break}this.flankTarget&&this._faceTarget(this.flankTarget,t);break;case F.RETREAT:const c=this.retreatStartPos?this.mesh.position.distanceTo(this.retreatStartPos):0,l=n>=this.retreatReengageThreshold,h=c>=this.retreatDistance,d=this.retreatWallHits>=3,u=i>this.config.detectionRange*1.5;if(h||l||d||u){this.isRetreating=!1,this.retreatStartPos=null,this.retreatWallHits=0,u?(this._changeState(F.IDLE),this.healthBarGroup.visible=!1):this._changeState(F.CHASE);break}const f=new b().subVectors(this.mesh.position,e.mesh.position);f.y=0,f.normalize();const m=this.mesh.position.clone().add(f.multiplyScalar(3)),_=this.mesh.position.clone();if(this._moveToward(m,this.config.moveSpeed*.7,t),this.mesh.position.distanceTo(_)<this.config.moveSpeed*.7*t*.5){this.retreatWallHits++;const p=new b(-f.z,0,f.x),x=this.retreatWallHits%2===0?p:p.negate(),y=this.mesh.position.clone().add(x.multiplyScalar(2));this._moveToward(y,this.config.moveSpeed*.5,t)}this._faceTarget(e.mesh.position,t);break;case F.ATTACK:this._processAttack(t,e);break;case F.STAGGERED:this.gltfModel?this.gltfModel.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5):this.fallbackBody&&(this.fallbackBody.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5)),this.stateTimer>=1.5&&(this.posture=0,this.gltfModel&&(this.gltfModel.rotation.z=0),this.fallbackBody&&(this.fallbackBody.rotation.z=0),this.breakIndicator.visible=!1,this._updatePostureBar(),this._changeState(i<this.config.detectionRange?F.CHASE:F.IDLE));break;case F.DORMANT:break;case F.RISING:if(this.stateTimer<.5){const p=this.gltfModel||this.fallbackBody;if(p){const x=this.stateTimer/.5;p.position.y=Qt.lerp(-.8,0,x)}}else if(this.stateTimer>=.8){const p=this.gltfModel||this.fallbackBody;p&&(p.position.y=0),this.healthBarGroup.visible=!0,this._changeState(F.CHASE)}this._faceTarget(e.mesh.position,t*2);break;case F.BOSS_SLAM:this._processBossSlamAttack(t,e);break;case F.BOSS_SWEEP:this._processBossSweepAttack(t,e);break;case F.BOSS_COMBO:this._processBossComboAttack(t,e);break;case F.BOSS_CHARGE:this._processBossChargeAttack(t,e);break;case F.BOSS_GRAB:this._processBossGrabAttack(t,e);break;case F.BOSS_TRANSITION:break;case F.BOSS_SUMMON:this._processBossSummonAttack(t,e);break;case F.BOSS_AOE:this._processBossAOEAttack(t,e);break;case F.BOSS_PROJECTILE:this._processBossProjectileAttack(t,e);break}this.isBoss&&this.activeProjectiles&&this._updateProjectiles(t,e),this.state!==F.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-8*t),this._updatePostureBar()),this.isBoss&&this.bossAttackCooldown>0&&(this.bossAttackCooldown-=t),(!this.isBoss||this.state===F.CHASE||this.state===F.PATROL)&&(this.state===F.CHASE||this.state===F.PATROL||this.state===F.RETREAT||this.state===F.CIRCLE)&&this._checkStuck(t)}_circleStrafe(t,e){const i=new b().subVectors(t,this.mesh.position);i.y=0;const n=i.length();i.normalize();const s=new b(-i.z,0,i.x).multiplyScalar(this.circleDirection),o=this.config.attackRange*1.5,a=new b().copy(i).multiplyScalar((n-o)*.5),c=s.add(a).normalize(),l=this.config.moveSpeed*.7*e,h=this.mesh.position.clone().addScaledVector(c,l);this.world&&this.world.checkCollision?this.world.checkCollision(h,this.collisionRadius).collides?this.circleDirection*=-1:this.mesh.position.copy(h):this.mesh.position.addScaledVector(c,l)}_calculateFlankTarget(t){const e=new b().subVectors(this.mesh.position,t);e.y=0,e.length(),e.normalize();const i=new b(-e.z*this.flankDirection,0,e.x*this.flankDirection),n=this.config.attackRange*1.2;this.flankTarget=new b(t.x+i.x*n,this.mesh.position.y,t.z+i.z*n);const s=new b().subVectors(t,this.flankTarget);s.y=0,s.normalize(),this.flankTarget.addScaledVector(s,n*.3)}_endFlankManeuver(t){this.isFlankAssigned=!1,this.flankTarget=null,this.flankProgress=0,t?this.lastFlankTime=Date.now()/1e3:(this.lastFlankTime=Date.now()/1e3-this.flankCooldown*.5,this.flankDirection*=-1)}requestFlank(){return!this.canFlank||this.state===F.DEAD||this.state===F.STAGGERED||this.state===F.FLANK||this.isRetreating||Date.now()/1e3-this.lastFlankTime<this.flankCooldown?!1:(this.isFlankAssigned=!0,this.flankDirection=Math.random()>.5?1:-1,!0)}_resetGroupState(){this.groupId=null,this.isGroupLeader=!1,this.groupJoinDelay=0,this.isWaitingToJoin=!1,this.groupConfusionTimer=0,this.isConfused=!1,this.attackQueuePosition=-1,this.canAttackInGroup=!0,this.groupEngageTime=0}joinGroup(t,e,i=0){this.groupId=t,this.isGroupLeader=e,e?(this.groupJoinDelay=0,this.isWaitingToJoin=!1,this.groupEngageTime=Date.now()):(this.groupJoinDelay=i,this.isWaitingToJoin=i>0,this.groupEngageTime=0)}triggerConfusion(t=1){this.isBoss||this.state!==F.DEAD&&(this.isConfused=!0,this.groupConfusionTimer=t,this.isGroupLeader=!1)}isAttacking(){return this.state===F.ATTACK||this.state===F.BOSS_SLAM||this.state===F.BOSS_SWEEP||this.state===F.BOSS_COMBO||this.state===F.BOSS_CHARGE||this.state===F.BOSS_GRAB||this.state===F.BOSS_AOE||this.state===F.BOSS_PROJECTILE}isInCombat(){return this.state===F.CHASE||this.state===F.CIRCLE||this.state===F.FLANK||this.state===F.ATTACK||this.isAttacking()}_selectBossAttack(t,e){const i=this.config.attacks;if(!i){this._changeState(F.ATTACK);return}if(this.bossPhase===2){this._selectPhase2Attack(t);return}const n=Math.random();t<=this.config.attackRange&&(n<.1&&i.GRAB?this._changeState(F.BOSS_GRAB):n<.35?this._changeState(F.BOSS_SLAM):n<.65?this._changeState(F.BOSS_COMBO):this._changeState(F.BOSS_SWEEP))}_selectPhase2Attack(t){this.config.attacks;const e=Math.random(),i=Date.now()-this.lastSummonTime>this.summonCooldown,n=this.summonedAdds.filter(s=>!s.isDead).length;if(i&&n===0&&e<.25){this._changeState(F.BOSS_SUMMON);return}if(t>this.config.attackRange&&t<10){if(e<.4)this._changeState(F.BOSS_PROJECTILE);else if(e<.7)this._changeState(F.BOSS_AOE);else if(e<.85)this.chargeTarget=this.playerTarget?this.playerTarget.clone():this.mesh.position.clone(),this.chargeProgress=0,this._changeState(F.BOSS_CHARGE);else return;return}t<=this.config.attackRange&&(e<.15?this._changeState(F.BOSS_AOE):e<.25?this._changeState(F.BOSS_PROJECTILE):e<.4?this._changeState(F.BOSS_SLAM):e<.6?this._changeState(F.BOSS_COMBO):e<.8?this._changeState(F.BOSS_SWEEP):e<.95?this._changeState(F.BOSS_GRAB):i&&n<3?this._changeState(F.BOSS_SUMMON):this._changeState(F.BOSS_SLAM))}_startBossCharge(t){this.chargeTarget=t.mesh.position.clone(),this.chargeProgress=0,this._changeState(F.BOSS_CHARGE)}_processBossSlamAttack(t,e){const i=this.config.attacks?.GREATSWORD_SLAM;if(!i){this._changeState(F.CHASE);return}const n=i.windup,s=n+.3,o=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.x=a*-.3);return}if(this.stateTimer>=n&&this.stateTimer<s){if(!this.hitThisSwing){const c=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(1.5)).add(new b(0,1.5,0)),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.8,pitch:.6})}const a=this.gltfModel||this.fallbackBody;if(a){const c=(this.stateTimer-n)/.3;a.rotation.x=Qt.lerp(-.3,.2,c)}}if(this.stateTimer>=s&&this.stateTimer<o){this.activeAttack=null;const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.x=Qt.lerp(a.rotation.x,0,.08))}this.stateTimer>=o&&this._endBossAttack()}_processBossSweepAttack(t,e){const i=this.config.attacks?.HORIZONTAL_SWEEP;if(!i){this._changeState(F.CHASE);return}const n=i.windup,s=n+.25,o=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.z=a*.3);return}if(this.stateTimer>=n&&this.stateTimer<s){this.hitThisSwing||(this.activeAttack={position:this.mesh.position.clone().add(new b(0,1.2,0)),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!1},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.7}));const a=this.gltfModel||this.fallbackBody;if(a){const c=(this.stateTimer-n)/.25;a.rotation.z=Qt.lerp(.3,-.25,c)}}if(this.stateTimer>=s&&this.stateTimer<o){this.activeAttack=null;const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.z=Qt.lerp(a.rotation.z,0,.1))}this.stateTimer>=o&&this._endBossAttack()}_processBossComboAttack(t,e){const i=this.config.attacks?.THREE_HIT_COMBO;if(!i){this._changeState(F.CHASE);return}const n=i.windup,s=.3,o=n+s,a=.15,c=this.bossComboHit||0,l=c*(o+a),h=this.stateTimer-l;if(h<n){this._faceTarget(e.mesh.position,t*3);const d=h/n,u=this.gltfModel||this.fallbackBody;if(u){const f=c%2===0?1:-1;u.rotation.z=d*.25*f}return}if(h>=n&&h<o){if(!this.hitThisSwing){const f=(i.damages||[35,35,50])[c]||i.damage;this.activeAttack={position:this.mesh.position.clone().add(new b(0,1.2,0)),range:i.range,damage:f,postureDmg:i.postureDmg,isHeavy:c===2,isCombo:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.65,pitch:.85+c*.1}),this.hitThisSwing=!0}const d=this.gltfModel||this.fallbackBody;if(d){const u=(h-n)/s,f=c%2===0?1:-1;d.rotation.z=Qt.lerp(.25*f,-.2*f,u)}}if(h>=o){this.activeAttack=null,this.hitThisSwing=!1;const d=this.mesh.position.distanceTo(e.mesh.position);if(c<2&&d<this.config.attackRange*1.3){this.bossComboHit=c+1;const u=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.mesh.position.addScaledVector(u,.5)}else{const u=this.gltfModel||this.fallbackBody;u&&(u.rotation.z=0),h>=o+i.recovery&&(this.bossComboHit=0,this._endBossAttack())}}}_processBossChargeAttack(t,e){const i=this.config.attacks?.SHOULDER_BASH;if(!i){this._changeState(F.CHASE);return}const n=i.windup,s=.4,o=n+s,a=o+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2),this.chargeTarget=e.mesh.position.clone();const c=this.stateTimer/n,l=this.gltfModel||this.fallbackBody;l&&(l.position.y=-c*.3,l.rotation.x=c*.2);return}if(this.stateTimer>=n&&this.stateTimer<o){this.hitThisSwing||(this.activeAttack={position:this.mesh.position.clone().add(new b(0,1,0)),range:2,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0,isCharge:!0},this.gm?.audioManager&&this.gm.audioManager.play("dash",{position:this.mesh.position,volume:.8}));const c=i.range/s;this._moveToward(this.chargeTarget,c,t),this.activeAttack&&(this.activeAttack.position=this.mesh.position.clone().add(new b(0,1,0)))}if(this.stateTimer>=o&&this.stateTimer<a){this.activeAttack=null;const c=this.gltfModel||this.fallbackBody;c&&(c.position.y=Qt.lerp(c.position.y,0,.15),c.rotation.x=Qt.lerp(c.rotation.x,0,.15))}this.stateTimer>=a&&this._endBossAttack()}_processBossGrabAttack(t,e){const i=this.config.attacks?.GRAB;if(!i){this._changeState(F.CHASE);return}const n=i.windup,s=n+.3,o=s+.5,a=o+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*1.5);const c=this.stateTimer/n,l=this.gltfModel||this.fallbackBody;l&&(l.scale.x=1+c*.15);return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.mesh.position.distanceTo(e.mesh.position)<i.range&&(this.activeAttack={position:this.mesh.position.clone(),range:i.range,damage:i.damage,postureDmg:0,isGrab:!0,isUnblockable:!0},this.grabTarget=e,this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.9})),this.hitThisSwing=!0)),this.stateTimer>=s&&this.stateTimer<o){this.activeAttack=null;const c=this.gltfModel||this.fallbackBody;c&&(c.scale.x=Qt.lerp(c.scale.x,1,.1))}if(this.stateTimer>=o&&this.stateTimer<a){this.grabTarget=null;const c=this.gltfModel||this.fallbackBody;c&&(c.scale.x=1)}this.stateTimer>=a&&this._endBossAttack()}_endBossAttack(){this.hitThisSwing=!1,this.activeAttack=null,this.bossComboHit=0,this.chargeTarget=null,this.grabTarget=null,this.bossAttackCooldown=this.config.attackCooldown;const t=this.gltfModel||this.fallbackBody;t&&(t.rotation.x=0,t.rotation.z=0,t.position.y=0,t.scale.x=1),this._changeState(F.CHASE)}_processBossSummonAttack(t,e){const i=this.config.attacks?.SKELETON_SUMMON;if(!i){this._changeState(F.CHASE);return}const n=i.windup,s=n+.5,o=s+i.recovery;if(this.stateTimer<n){const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.x=-a*.2),this.stateTimer%.2<.1&&this._flashModel(8930508,80),this.stateTimer<.1&&this.gm?.audioManager&&this.gm.audioManager.play("magic",{position:this.mesh.position,volume:.7});return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.hitThisSwing=!0,this.lastSummonTime=Date.now(),this._spawnSkeletonAdds(i.summonCount||2),this._flashModel(16729343,200),this.gm?.audioManager&&this.gm.audioManager.play("ambush",{position:this.mesh.position,volume:.8}),this.gm?.cameraController&&this.gm.cameraController.shakeLight())),this.stateTimer>=s&&this.stateTimer<o){const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.x=Qt.lerp(a.rotation.x,0,.1))}this.stateTimer>=o&&this._endBossAttack()}_spawnSkeletonAdds(t){if(!this.enemyManager)return;const e=this.mesh.position,i=5;for(let n=0;n<t;n++){const s=Math.PI*2*n/t+Math.random()*.5,o=new b(e.x+Math.cos(s)*i,e.y,e.z+Math.sin(s)*i),a=new Da(this.scene,o,{type:"BONE_REVENANT",name:"Summoned Revenant",behavior:"guard"},this.gm);a.mesh.visible=!0,a.isDormant=!1,a.state=F.CHASE,a.healthBarGroup.visible=!0,this.summonedAdds.push(a),this.enemyManager.enemies.push(a);const c=a.gltfModel||a.fallbackBody;if(c){c.position.y=-1;const l=()=>{c.position.y<0&&(c.position.y+=.05,requestAnimationFrame(l))};l()}}}_processBossAOEAttack(t,e){const i=this.config.attacks?.GROUND_SLAM_AOE;if(!i){this._changeState(F.CHASE);return}const n=i.windup,s=n+.4,o=s+.3,a=o+.2,c=a+i.recovery,l=this.gltfModel||this.fallbackBody;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t),this.playerTarget=e.mesh.position.clone();const h=this.stateTimer/n;l&&(l.position.y=-h*.3),this.aoeStartY=this.mesh.position.y;return}if(this.stateTimer>=n&&this.stateTimer<s){const h=(this.stateTimer-n)/.4,d=i.jumpHeight||3,u=Math.sin(h*Math.PI)*d;this.mesh.position.y=this.aoeStartY+u,l&&(l.position.y=0,l.rotation.x=-.3);const f=this.playerTarget||e.mesh.position;this._moveToward(f,8,t);return}if(this.stateTimer>=s&&this.stateTimer<o){const h=(this.stateTimer-s)/.3;this.mesh.position.y=Qt.lerp(this.mesh.position.y,this.aoeStartY,h*2),l&&(l.rotation.x=Qt.lerp(-.3,.2,h))}this.stateTimer>=o&&this.stateTimer<a&&(this.mesh.position.y=this.aoeStartY,this.hitThisSwing||(this.hitThisSwing=!0,this.activeAttack={position:this.mesh.position.clone(),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0,isAOE:!0},this._createShockwaveEffect(),this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:1,pitch:.6}),this.gm?.cameraController&&this.gm.cameraController.shake(.5,.4))),this.stateTimer>=a&&this.stateTimer<c&&(this.activeAttack=null,l&&(l.rotation.x=Qt.lerp(l.rotation.x,0,.1))),this.stateTimer>=c&&this._endBossAttack()}_createShockwaveEffect(){const t=new Is(.5,1.5,32),e=new $t({color:8930508,transparent:!0,opacity:.8,side:fe}),i=new D(t,e);i.rotation.x=-Math.PI/2,i.position.copy(this.mesh.position),i.position.y=.1,this.scene.add(i);const n=this.config.attacks?.GROUND_SLAM_AOE?.range||8,s=Date.now(),o=400,a=()=>{const l=(Date.now()-s)/o;if(l<1){const h=1+l*n;i.scale.set(h,h,1),i.material.opacity=.8*(1-l),requestAnimationFrame(a)}else this.scene.remove(i),i.geometry.dispose(),i.material.dispose()};a()}_processBossProjectileAttack(t,e){const i=this.config.attacks?.DARK_PROJECTILE;if(!i){this._changeState(F.CHASE);return}const n=i.windup,s=n+.2,o=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*3);const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.z=a*.15),this.stateTimer%.15<.075&&this._flashModel(6693546,60);return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.hitThisSwing=!0,this._spawnDarkProjectile(e,i),this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.6,pitch:1.5}))),this.stateTimer>=s&&this.stateTimer<o){const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.z=Qt.lerp(a.rotation.z,0,.15))}this.stateTimer>=o&&this._endBossAttack()}_spawnDarkProjectile(t,e){const i=new Vt(.4,16,16),n=new $t({color:8930508,transparent:!0,opacity:.9}),s=new D(i,n),o=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));s.position.copy(this.mesh.position).add(o.multiplyScalar(1.5)).add(new b(0,1.5,0));const a=new Vt(.25,12,12),c=new $t({color:16729343,transparent:!0,opacity:1}),l=new D(a,c);s.add(l);const h=new Be(8930508,2,5);s.add(h),this.scene.add(s),this.activeProjectiles.push({mesh:s,target:t,speed:e.speed||8,tracking:e.trackingStrength||3,damage:e.damage||40,lifetime:0,maxLifetime:5,direction:new b().subVectors(t.mesh.position,s.position).normalize()})}_updateProjectiles(t,e){for(let i=this.activeProjectiles.length-1;i>=0;i--){const n=this.activeProjectiles[i];if(n.lifetime+=t,n.lifetime>n.maxLifetime){this._destroyProjectile(i);continue}const s=new b().subVectors(e.mesh.position.clone().add(new b(0,1,0)),n.mesh.position),o=s.length();if(s.normalize(),n.direction.lerp(s,n.tracking*t),n.direction.normalize(),n.mesh.position.addScaledVector(n.direction,n.speed*t),n.mesh.rotation.x+=t*3,n.mesh.rotation.y+=t*2,o<1.2&&!e.isInvincible){this.gm?.takeDamage(n.damage,"magic",10,e.isBlocking),e.flashDamage(),this.gm?.hud&&this.gm.hud.flashDamage(.6),this.gm?.cameraController&&this.gm.cameraController.shakeMedium(),this.gm?.particleManager&&this.gm.particleManager.spawnHitSparks(n.mesh.position,8,!1),this._destroyProjectile(i);continue}o>30&&this._destroyProjectile(i)}}_destroyProjectile(t){const e=this.activeProjectiles[t];if(e&&e.mesh){const i=e.mesh.position.clone(),n=new Vt(.8,8,8),s=new $t({color:8930508,transparent:!0,opacity:.8}),o=new D(n,s);o.position.copy(i),this.scene.add(o);const a=()=>{o.scale.multiplyScalar(1.1),o.material.opacity-=.1,o.material.opacity>0?requestAnimationFrame(a):(this.scene.remove(o),o.geometry.dispose(),o.material.dispose())};a(),this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}this.activeProjectiles.splice(t,1)}_processAttack(t,e){this.stateTimer<t*2&&this.attackVarietyEnabled&&this._selectAttackType(e);const i=this.attackVarietyEnabled&&ra[this.currentAttackType]||ra[Se.NORMAL],n=this.config.attackWindup*i.windupMult,s=this.config.attackDuration,o=n+s,a=this.config.attackCooldown*i.cooldownMult;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2),this.attackVarietyEnabled&&this._showAttackTell(i.tell,this.stateTimer/n);return}if(this.stateTimer>=n&&this.stateTimer<o){if(!this.hitThisSwing){const c=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y)),l=Math.floor(this.config.damage*i.damageMult),h=Math.floor(this.config.postureDmg*i.postureMult),d=this.config.attackRange*i.rangeMult;if(this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(1)).add(new b(0,1,0)),range:d,damage:l,postureDmg:h,attackType:this.currentAttackType,isHeavy:this.currentAttackType===Se.HEAVY},this.gm?.audioManager){const u=this.currentAttackType===Se.HEAVY?.7:this.currentAttackType===Se.QUICK_JAB?1.3:1;this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.6,pitch:u})}this.hitThisSwing=!0}this._resetAttackTell()}if(this.stateTimer>=a){this.hitThisSwing=!1,this.activeAttack=null,this.lastAttackType=this.currentAttackType,this.attackVarietyEnabled&&(this.attackTypeCooldowns[this.currentAttackType]=3);const c=this.mesh.position.distanceTo(e.mesh.position);if((this.currentAttackType===Se.COMBO||this.config.canChainAttacks&&this.comboHitsRemaining>0)&&c<=this.config.attackRange*1.3&&(this.comboHitsRemaining--,this.comboHitsRemaining>0)){this.currentAttackType=Se.COMBO,this._changeState(F.ATTACK);return}if(this.config.canChainAttacks&&c<=this.config.attackRange*1.3&&(this.chainAttackCount++,this.chainAttackCount<this.config.maxChainAttacks)){this._changeState(F.ATTACK);return}this.chainAttackCount=0,this.comboHitsRemaining=0,this.currentAttackType=Se.NORMAL,c<=this.config.attackRange?this._changeState(F.ATTACK):this._changeState(F.CHASE)}}_selectAttackType(t){const e=this.config.attackVariety||{};if(!e.enabled){this.currentAttackType=Se.NORMAL;return}const i=t.mesh.position.clone();this.playerLastPos&&(this.playerMoveSpeed=i.distanceTo(this.playerLastPos)),this.playerLastPos=i;const n=this.playerMoveSpeed>.03,s=this.playerMoveSpeed<.01;for(const c in this.attackTypeCooldowns)this.attackTypeCooldowns[c]>0&&(this.attackTypeCooldowns[c]-=.016);const o=Math.random();let a=Se.NORMAL;if(e.comboEnabled&&this.attackTypeCooldowns[Se.COMBO]<=0){const c=e.comboChance||.3;o<c&&(a=Se.COMBO,this.comboHitsRemaining=e.maxComboHits||2)}if(a===Se.NORMAL&&s&&this.attackTypeCooldowns[Se.HEAVY]<=0){const c=e.heavyChance||.25;o<c&&(a=Se.HEAVY)}if(a===Se.NORMAL&&n&&this.attackTypeCooldowns[Se.QUICK_JAB]<=0){const c=e.quickJabChance||.3;o<c&&(a=Se.QUICK_JAB)}a===this.lastAttackType&&a!==Se.COMBO&&Math.random()<.5&&(a=Se.NORMAL),this.currentAttackType=a}_showAttackTell(t,e){const i=this.gltfModel||this.fallbackBody;if(i){switch(t){case"heavy":i.rotation.x=-e*.35,i.position.y=e*.15,this.eye&&e>.3&&(this.eye.material.emissiveIntensity=4+e*4),(e>.5&&e<.55||e>.8&&e<.85)&&this._flashModel(16720418,50);break;case"jab":i.position.y=-e*.08;break;case"combo":i.rotation.x=e*.15,e>.6&&Math.random()<.3&&this._flashModel(16755200,30);break;default:i.rotation.x=-e*.1;break}this.attackTellActive=!0}}_resetAttackTell(){if(!this.attackTellActive)return;const t=this.gltfModel||this.fallbackBody;t&&(t.rotation.x=0,t.position.y=0),this.eye&&(this.eye.material.emissiveIntensity=4),this.attackTellActive=!1}takeDamage(t,e=0,i=null){if(this.state===F.DEAD)return"dead";if(this.state===F.BOSS_TRANSITION)return"immune";this.isBlocking&&(t=Math.floor(t*.3),e=Math.floor(e*.5),this._flashModel(4473958,100)),this.state===F.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&(this.gm.audioManager.play("hitImpact",{position:this.mesh.position,volume:.6,variation:.15}),this.gm.audioManager.playEnemyGrunt(this.mesh.position));const n=Math.max(0,this.health/this.maxHealth);return this.healthFill.scale.x=n,this.healthFill.position.x=-(1-n)*.49*.5,this.healthBarGroup.visible=!0,this._updatePostureBar(),this._flashModel(4456448,100),this._applyHitRecoil(i,t),this.health<=0?(this._die(),"died"):this.isBoss&&this.bossPhase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2CryptLord(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==F.STAGGERED?(this._triggerPostureBreak(),"staggered"):((this.state===F.IDLE||this.state===F.PATROL)&&this._changeState(F.CHASE),"hit")}_enterPhase2CryptLord(){this.bossPhase=2,this.posture=0,this.activeAttack=null,this.hitThisSwing=!1,this._changeState(F.BOSS_TRANSITION),this.world&&this.world.setBossArenaPhase&&this.world.setBossArenaPhase("transition"),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1}),this.config.damage=55,this.config.postureDmg=45,this.config.moveSpeed=2.5,this.config.attackCooldown=1.2,this.config.maxPosture=250,this.maxPosture=250,this._cryptLordTransformSequence()}_cryptLordTransformSequence(){const e=Date.now(),i=this.gltfModel||this.fallbackBody,n=i?i.scale.clone():new b(1,1,1),s=n.clone().multiplyScalar(1.25);this.gm?.cameraController&&this.gm.cameraController.shake(.3,4);const o=()=>{const a=Date.now()-e,c=Math.min(a/4e3,1);if(this.state===F.BOSS_TRANSITION){if(i&&(i.scale.lerpVectors(n,s,c),i.rotation.z=Math.sin(a*.02)*.15*(1-c),i.rotation.x=Math.sin(a*.015)*.1*(1-c)),this.eye){const l=4+c*6;this.eye.material.emissiveIntensity=l;const h=Qt.lerp(1,1,c),d=Qt.lerp(.13,0,c),u=Qt.lerp(.13,1,c);this.eye.material.emissive.setRGB(h,d,u),this.eye.material.color.setRGB(h,d,u)}a%300<150&&this._flashModel(8930508,100),c<1?requestAnimationFrame(o):this._completeCryptLordTransform(i)}};o()}_completeCryptLordTransform(t){t&&(t.rotation.z=0,t.rotation.x=0),this.eye&&(this.eye.material.emissive.setHex(16711935),this.eye.material.color.setHex(16711935),this.eye.material.emissiveIntensity=5),this._applyModelTint(4465322),this.world&&this.world.setBossArenaPhase&&this.world.setBossArenaPhase("phase2"),this.bossAttackCooldown=.5,this._changeState(F.CHASE)}_flashModel(t,e){if(this.proceduralModel&&this.useProceduralAnimation){rv(this.proceduralModel,t,e);return}if(this.gltfModel&&(this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(t),s.emissiveIntensity=.5)})}),setTimeout(()=>{this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(0),s.emissiveIntensity=0)})})},e)),this.eye&&this.eye.material){const i=this.eye.material.emissive.getHex();this.eye.material.emissive.setHex(t),setTimeout(()=>this.eye.material.emissive.setHex(i),e)}}_applyHitRecoil(t,e){let i;if(t)i=new b().subVectors(this.mesh.position,t),i.y=0,i.normalize();else{const f=this.mesh.rotation.y;i=new b(-Math.sin(f),0,-Math.cos(f))}const n=Math.min(.5,e*.015),s=this.mesh.position.clone(),o=s.clone().add(i.multiplyScalar(n)),a=this.gltfModel||this.fallbackBody,c=a?a.rotation.z:0,l=Math.random()>.5?1:-1;a&&(a.rotation.z=c+l*.15);let h=0;const d=.12,u=()=>{h+=.016;const f=Math.min(1,h/d),m=1-Math.pow(1-f,3);this.mesh.position.lerpVectors(o,s,m),a&&(a.rotation.z=Qt.lerp(c+l*.15,c,m)),f<1&&requestAnimationFrame(u)};this.mesh.position.copy(o),requestAnimationFrame(u)}_triggerPostureBreak(){this._changeState(F.STAGGERED),this.breakIndicator.visible=!0,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.7}),this._flashModel(16763904,300),this.postureFill.material.color.setHex(16729088),setTimeout(()=>this.postureFill.material.color.setHex(16763904),300)}_updatePostureBar(){const t=this.posture/this.maxPosture;this.postureFill.scale.x=t,this.postureFill.position.x=-(1-t)*.49*.5}_die(){if(this.state=F.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.breakIndicator.visible=!1,this._playAnimation(F.DEAD,{loop:!1,clampWhenFinished:!0}),this.healthBarGroup.visible=!1,this.isBoss){if(this.bossActive=!1,this.world&&this.world.deactivateBossArena&&this.world.deactivateBossArena(),this.summonedAdds&&(this.summonedAdds.forEach(t=>{t&&!t.isDead&&t._die()}),this.summonedAdds=[]),this.activeProjectiles)for(let t=this.activeProjectiles.length-1;t>=0;t--)this._destroyProjectile(t);this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this._cryptLordDeathSequence();return}this._enemyDeathSequence()}_enemyDeathSequence(){const e=Date.now(),i=this.gltfModel||this.fallbackBody,n=i?.position.y||0,s=i?.rotation.x||0,o=i?.rotation.z||0,c=this.config.isElite?6684723:3355443;this.gm?.particleManager&&this.gm.particleManager.spawnDeathBurst(this.mesh.position.clone());const l=()=>{const h=Date.now()-e,d=Math.min(h/2500,1);if(i)if(d<.3){const u=d/.3;i.position.y=n-u*.4;const f=(this.mesh.uuid?.charCodeAt(0)||0)%2===0?1:-1;i.rotation.x=s+u*.4,i.rotation.z=o+u*.25*f;const m=(1-u)*.15,_=Math.sin(h*.025)*m;i.rotation.z+=_,i.rotation.y=Math.sin(h*.03)*m*.5}else{const u=(d-.3)/.7;i.position.y=n-.4-u*.3;const f=(this.mesh.uuid?.charCodeAt(0)||0)%2===0?1:-1;i.rotation.x=s+.4+u*.1,i.rotation.z=o+.25*f,h%150<75&&this._flashModel(c,30),i.traverse(_=>{_.isMesh&&_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(p=>{p.transparent=!0,p.opacity=Math.max(0,1-u*1.2)})});const m=1-u*.15;if(i.scale.setScalar(m*(this.config.modelScale||1)),this.gm?.particleManager&&h%300<50&&u<.8){const _=this.mesh.position.clone().add(new b((Math.random()-.5)*.8,Math.random()*1.2,(Math.random()-.5)*.8));this.gm.particleManager.spawnHitSparks(_,2,!1)}}this.eye&&(this.eye.material.emissiveIntensity=Math.max(0,3*(1-d*1.5)),this.eye.material.opacity!==void 0&&(this.eye.material.opacity=Math.max(0,1-d))),d<1?requestAnimationFrame(l):this.mesh.visible=!1};l()}_cryptLordDeathSequence(){const e=Date.now(),i=this.gltfModel||this.fallbackBody,n=this.mesh.position.clone();this.gm?.cameraController&&this.gm.cameraController.shake(.4,3),this.gm?.itemManager&&this.gm.itemManager.showVictoryNotification("THE CRYPT LORD");const s=()=>{const o=Date.now()-e,a=Math.min(o/5e3,1);if(i)if(a<.3){const c=a/.3;i.position.y=-c*.5,i.rotation.x=c*.3,i.rotation.z=c*.15}else{const c=(a-.3)/.7;o%200<100&&this._flashModel(8930508,50),i.traverse(l=>{l.isMesh&&l.material&&(Array.isArray(l.material)?l.material:[l.material]).forEach(d=>{d.transparent=!0,d.opacity=1-c})})}this.eye&&(this.eye.material.emissiveIntensity=5*(1-a),this.eye.material.opacity=1-a),a<1?requestAnimationFrame(s):(this.mesh.visible=!1,this._spawnCryptLordRewards(n))};s()}_spawnCryptLordRewards(t){if(!this.gm?.itemManager)return;const i=Math.random()<.5?Ra.CRYPT_LORDS_GREATSWORD:Ra.LORD_SOUL_FRAGMENT;this.gm.itemManager.spawnBossRewards(t,"crypt-lord",this.config.remnantDrop||2500,i),this.bossDefeated=!0,this.enemyManager&&this.enemyManager.markBossDefeated("crypt-lord")}_fadeOutModel(){const t=this.gltfModel||this.fallbackBody;if(!t)return;t.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.transparent=!0})});const e=()=>{let i=!0;t.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{o.opacity>0&&(o.opacity-=.02,i=!1)})}),i?this.mesh.visible=!1:requestAnimationFrame(e)};e()}respawn(){this.health=this.maxHealth,this.posture=0,this.isDead=!1,this.stateTimer=0,this.chainAttackCount=0,this.circleTimer=0,this.isBlocking=!1,this.stuckTimer=0,this.unstuckAttempts=0,this.avoidanceDir=null,this.avoidanceTimer=0,this.isRetreating=!1,this.retreatStartPos=null,this.retreatWallHits=0,this._resetGroupState();let t=this.spawnPos.clone();if(this.world&&this.world.checkCollision&&this.world.checkCollision(t,this.collisionRadius).collides){const n=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(1,0,1),new b(-1,0,1),new b(1,0,-1),new b(-1,0,-1)];for(const s of n){const o=this.spawnPos.clone().add(s);if(!this.world.checkCollision(o,this.collisionRadius).collides){t=o;break}}}this.mesh.position.copy(t),this.lastPosition.copy(t);const e=this.config.behavior==="ambush"||this.config.isAmbush;this.isDormant=e,this.state=e?F.DORMANT:F.IDLE;const i=this.gltfModel||this.fallbackBody;i&&(i.rotation.x=0,i.rotation.z=0,i.position.y=0,i.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{o.opacity=1,o.transparent=!1})})),this.mesh.visible=!e,this.healthBarGroup.visible=!1,this.breakIndicator.visible=!1,this.healthFill.scale.x=1,this.healthFill.position.x=0,this.postureFill.scale.x=0,this.postureFill.position.x=0,this._playAnimation(e?F.DORMANT:F.IDLE,{loop:!0})}_moveToward(t,e,i){const n=new b().subVectors(t,this.mesh.position);if(n.y=0,n.length()<.5)return;n.normalize();const o=e*i,a=this.mesh.position.clone().addScaledVector(n,o);if(this.world&&this.world.checkCollision){const c=this.world.checkCollision(a,this.collisionRadius);if(c.collides){const l=this._findSlideDirection(n,c,i);if(l){const h=this.mesh.position.clone().addScaledVector(l,o*.7);this.world.checkCollision(h,this.collisionRadius).collides?this._tryPerpendicularMove(n,o,i):(this.mesh.position.copy(h),this.avoidanceDir=l.clone(),this.avoidanceTimer=.5)}else this._tryPerpendicularMove(n,o,i)}else this.mesh.position.copy(a),this.avoidanceDir=null,this.avoidanceTimer=0}else this.mesh.position.addScaledVector(n,o)}_findSlideDirection(t,e,i){const n=new b(-t.z,0,t.x),s=new b(t.z,0,-t.x);if(e.normal){const o=t.dot(e.normal),a=t.clone().sub(e.normal.clone().multiplyScalar(o));if(a.length()>.1)return a.normalize()}return this.avoidanceDir&&this.avoidanceTimer>0?(this.avoidanceTimer-=i,this.avoidanceDir):this.unstuckAttempts%2===0?n:s}_tryPerpendicularMove(t,e,i){if(!this.world)return;const n=new b(-t.z,0,t.x),s=new b(t.z,0,-t.x),o=this.mesh.position.clone().addScaledVector(n,e);if(!this.world.checkCollision(o,this.collisionRadius).collides){this.mesh.position.copy(o),this.avoidanceDir=n,this.avoidanceTimer=.3;return}const a=this.mesh.position.clone().addScaledVector(s,e);if(!this.world.checkCollision(a,this.collisionRadius).collides){this.mesh.position.copy(a),this.avoidanceDir=s,this.avoidanceTimer=.3;return}}_checkStuck(t){if(this.mesh.position.distanceTo(this.lastPosition)<.05){if(this.stuckTimer+=t,this.stuckTimer>this.stuckThreshold)if(this.unstuckAttempts++,this.stuckTimer=0,this.unstuckAttempts>3){if(this._pickPatrolTarget(),this.world&&this.world.checkCollision){let i=0;for(;this.world.checkCollision(this.patrolTarget,this.collisionRadius).collides&&i<5;)this._pickPatrolTarget(),i++}this.unstuckAttempts=0,this._changeState(F.PATROL)}else this.circleDirection*=-1,(this.state===F.CHASE||this.state===F.CIRCLE)&&this._changeState(F.CIRCLE)}else this.stuckTimer=0,this.unstuckAttempts=0;this.lastPosition.copy(this.mesh.position)}_faceTarget(t,e){const i=new b().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.1){const n=Math.atan2(i.x,i.z);this.mesh.rotation.y=Qt.lerp(this.mesh.rotation.y,n,5*e)}}_pickPatrolTarget(){const t=Math.random()*Math.PI*2,e=Math.random()*this.config.patrolRadius;this.patrolTarget.set(this.spawnPos.x+Math.cos(t)*e,0,this.spawnPos.z+Math.sin(t)*e)}_changeState(t){this.state!==t&&(this.state===F.ATTACK&&(this.activeAttack=null,this.hitThisSwing=!1),t===F.CIRCLE&&(this.circleTimer=0,this.circleDirection=Math.random()>.5?1:-1),this.state=t,this.stateTimer=0,this._playAnimation(t))}}const Rt={DORMANT:"dormant",AWAKENING:"awakening",IDLE:"idle",WALK:"walk",ATTACK:"attack",HEAVY_ATTACK:"heavy_attack",AOE_ATTACK:"aoe_attack",COMBO:"combo",STAGGERED:"staggered",PHASE_TRANSITION:"phase_transition",DEAD:"dead"},lv={[Rt.DORMANT]:"Idle",[Rt.AWAKENING]:"Idle",[Rt.IDLE]:"Idle",[Rt.WALK]:"Walking",[Rt.ATTACK]:"Punch",[Rt.HEAVY_ATTACK]:"Punch",[Rt.AOE_ATTACK]:"Jump",[Rt.COMBO]:"Punch",[Rt.STAGGERED]:"No",[Rt.PHASE_TRANSITION]:"Death",[Rt.DEAD]:"Death"};class hv{constructor(t,e,i){this.scene=t,this.gm=i,this.name="The Failed Experiment",this.maxHealth=500,this.health=this.maxHealth,this.maxPosture=150,this.posture=0,this.phase=1,this.state=Rt.DORMANT,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.comboCount=0,this.isActive=!1,this.isDead=!1,this.mixer=null,this.animations={},this.currentAction=null,this.gltfModel=null,this.gltfLoaded=!1,this.phaseConfigs={1:{moveSpeed:2,attackCooldown:2.5,attackWindup:1,damage:35,postureDmg:30,canCombo:!1,canAoE:!1,modelTint:3809344,emissiveColor:2228258},2:{moveSpeed:3.5,attackCooldown:1.5,attackWindup:.6,damage:45,postureDmg:40,canCombo:!0,maxCombo:3,canAoE:!0,aoeCooldown:8,modelTint:5902368,emissiveColor:4456465}},this.config=this.phaseConfigs[1],this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.detectionRange=15,this.attackRange=3.5,this.spawnPos=e.clone(),this.world=null,this.collisionRadius=.8,this.mesh=new zt,this.mesh.position.copy(e),this.body=new zt,this.mesh.add(this.body),this._createFallbackMesh(),this.eyeLights=[],this.eyes=[],this._createEyes(),this.weapon=this._createWeapon(),this.mesh.add(this.weapon),this._createAoEIndicator(),this._createAuraParticles(),this.mutatedArm=null,t.add(this.mesh),this._loadGLTFModel(),this._setDormant()}_createFallbackMesh(){const t=new Ts(1.2,2),e=new tt({color:1709344,roughness:.75,metalness:.25,flatShading:!0});this.fallbackMesh=new D(t,e),this.fallbackMesh.position.y=2,this.fallbackMesh.scale.set(1.3,1.6,1.2),this.fallbackMesh.castShadow=!0,this.body.add(this.fallbackMesh);const i=new Ts(.7,1),n=new D(i,e.clone());n.position.set(0,2.8,-.6),n.scale.set(1.3,1,.9),this.body.add(n);for(let _=0;_<12;_++){const g=.12+Math.random()*.2,p=new Vt(g,6,6),x=new tt({color:2759205,roughness:.9,emissive:1114120,emissiveIntensity:.3}),y=new D(p,x),v=_/12*Math.PI*2,w=1.3+Math.random()*2,E=.8+Math.random()*.4;y.position.set(Math.cos(v)*E+(Math.random()-.5)*.3,w,Math.sin(v)*(E*.7)+(Math.random()-.5)*.3),this.body.add(y)}const s=new tt({color:9075306,roughness:.6,metalness:.3});for(let _=0;_<6;_++){const g=new $i(.4-_*.035,.035,6,16,Math.PI*.75),p=new D(g,s);p.position.set(0,1.4+_*.18,.7),p.rotation.x=Math.PI/2,p.rotation.y=Math.PI,this.body.add(p)}const o=new mo(.5,1),a=new tt({color:1709088,roughness:.7,metalness:.25}),c=new D(o,a);c.position.set(0,3.6,.35),c.scale.set(1,1.2,.85),this.body.add(c);const l=new tt({color:1709344,roughness:.75,metalness:.2}),h=new De(.22,1,10,12),d=new D(h,l);d.position.set(-.45,.6,0),d.rotation.z=.15,this.body.add(d);const u=new De(.24,.95,10,12),f=new D(u,l);f.position.set(.45,.6,0),f.rotation.z=-.12,this.body.add(f);const m=new tt({color:2236962,roughness:.4,metalness:.6});for(let _ of[-1,1])for(let g=0;g<3;g++){const p=new Ze(.05,.18,6),x=new D(p,m);x.position.set(_*.45+(g-1)*.1,.05,.25),x.rotation.x=Math.PI/3,this.body.add(x)}}async _loadGLTFModel(){try{const t="/project-ashen/",{scene:e,animations:i}=await yo.loadModel(`${t}assets/models/brainrobot.glb`,{scale:2.5});if(!e){console.warn("[BOSS] GLTF model failed to load, using fallback");return}this.gltfModel=e,this.gltfLoaded=!0,e.position.set(0,.5,0),e.scale.setScalar(2.5),this._applyModelTint(this.config.modelTint,this.config.emissiveColor),e.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),i&&i.length>0&&(this.mixer=new Gd(e),i.forEach(n=>{this.animations[n.name]=this.mixer.clipAction(n)}),this._playAnimation(Rt.IDLE)),this.body.add(e),this.fallbackMesh&&(this.fallbackMesh.visible=!1)}catch(t){console.warn("[BOSS] GLTF loading failed:",t)}}_applyModelTint(t,e){if(!this.gltfModel)return;const i=new vt(t),n=new vt(e);this.gltfModel.traverse(s=>{s.isMesh&&s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{a.color&&a.color.lerp(i,.4),a.emissive!==void 0&&(a.emissive.copy(n),a.emissiveIntensity=.5),a.needsUpdate=!0})}),this.body.traverse(s=>{s.isMesh&&s.material&&s!==this.gltfModel&&(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{a.color&&a.color.lerp(i,.3),a.emissive!==void 0&&(a.emissive.copy(n),a.emissiveIntensity=.4)})})}_playAnimation(t,e=1){if(!this.mixer)return;const i=lv[t];if(!i)return;let n=this.animations[i];if(!n){const s=i.toLowerCase();for(const o of Object.keys(this.animations))if(o.toLowerCase().includes(s)){n=this.animations[o];break}}n&&(this.currentAction&&this.currentAction!==n?(n.reset(),n.setEffectiveTimeScale(e),n.setEffectiveWeight(1),n.crossFadeFrom(this.currentAction,.3,!0),n.play()):this.currentAction||(n.reset(),n.setEffectiveTimeScale(e),n.play()),this.currentAction=n)}_createEyes(){const t=[{x:-.18,y:3.55,z:.6,size:.11},{x:.18,y:3.55,z:.6,size:.11},{x:0,y:3.75,z:.55,size:.085},{x:-.38,y:3.35,z:.45,size:.06},{x:.38,y:3.35,z:.45,size:.06},{x:-.85,y:3.1,z:.3,size:.05},{x:-.95,y:2.9,z:.35,size:.04},{x:.12,y:2.85,z:-.35,size:.07}],e=new tt({color:16720384,emissive:16720384,emissiveIntensity:5});t.forEach(i=>{const n=new Vt(i.size,12,12),s=new D(n,e.clone());if(s.position.set(i.x,i.y,i.z),this.eyes.push(s),this.body.add(s),i.size>=.08){const o=new Be(16720384,.5,3);o.position.copy(s.position),this.eyeLights.push(o),this.body.add(o)}})}_createWeapon(){const t=new zt,e=new re(.08,.1,2,12),i=new tt({color:3811872,roughness:.85,metalness:.15}),n=new D(e,i);t.add(n);for(let d=0;d<5;d++){const u=new $i(.11,.025,6,14),f=new D(u,new tt({color:4860456,roughness:.9}));f.position.y=-.7+d*.35,f.rotation.x=Math.PI/2,t.add(f)}const s=new Lt(.1,1.8,.6),o=new tt({color:2763306,roughness:.25,metalness:.95}),a=new D(s,o);a.position.set(0,1.5,.18),a.rotation.z=.12,t.add(a);const c=new Lt(.025,1.75,.025),l=new tt({color:16724736,emissive:16720384,emissiveIntensity:3}),h=new D(c,l);h.position.set(0,1.5,.5),h.rotation.z=.12,t.add(h);for(let d=0;d<6;d++){const u=new Ze(.04,.15,6),f=new D(u,o);f.position.set(0,.85+d*.22,-.1),f.rotation.x=-Math.PI/4,t.add(f)}return t.position.set(1.6,1.9,0),t.rotation.z=.4,t.castShadow=!0,t}_createAoEIndicator(){const t=new Is(.5,6,32),e=new $t({color:16729088,transparent:!0,opacity:0,side:fe});this.aoeIndicator=new D(t,e),this.aoeIndicator.rotation.x=-Math.PI/2,this.aoeIndicator.position.y=.1,this.mesh.add(this.aoeIndicator)}_createAuraParticles(){this.auraParticles=[];for(let t=0;t<8;t++){const e=new Vt(.1,6,6),i=new tt({color:2228258,emissive:1114129,emissiveIntensity:1.5,transparent:!0,opacity:.7}),n=new D(e,i);n.userData.angle=t/8*Math.PI*2,n.userData.yOffset=Math.random()*2,n.userData.radius=.9+Math.random()*.5,this.auraParticles.push(n),this.mesh.add(n)}}_setDormant(){this.eyes.forEach(t=>{t.material.emissiveIntensity=.5}),this.eyeLights.forEach(t=>{t.intensity=.1})}_awaken(){if(this.state!==Rt.DORMANT)return;this.isActive=!0,this._changeState(Rt.AWAKENING),this.gm?.audioManager&&(this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this.gm.audioManager.startBossMusic());let t=0;this.eyes.forEach((e,i)=>{setTimeout(()=>{e.material.emissiveIntensity=7,setTimeout(()=>{e.material.emissiveIntensity=4.5},200)},t),t+=120}),this.eyeLights.forEach((e,i)=>{setTimeout(()=>{e.intensity=.8},i*100)})}update(t,e){if(this.state===Rt.DEAD)return;this.mixer&&this.mixer.update(t),this.stateTimer+=t,this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-t),this.aoeCooldownTimer=Math.max(0,this.aoeCooldownTimer-t);const i=this.mesh.position.distanceTo(e.mesh.position);if(this.state===Rt.DORMANT&&i<this.detectionRange){this._awaken();return}switch(this.state){case Rt.AWAKENING:this.stateTimer<2?(this.body.position.y=Math.sin(this.stateTimer*Math.PI)*.4,this.body.rotation.z=Math.sin(this.stateTimer*3)*.05):(this.body.position.y=0,this.body.rotation.z=0,this._changeState(Rt.IDLE));break;case Rt.IDLE:this._faceTarget(e.mesh.position,t),this.body.position.y=Math.sin(this.stateTimer*2)*.08,this.body.scale.y=1+Math.sin(this.stateTimer*2.5)*.02,i<=this.attackRange&&this.attackCooldownTimer<=0?this._startAttack(e):i>this.attackRange&&this._changeState(Rt.WALK);break;case Rt.WALK:this._moveToward(e.mesh.position,t),this._faceTarget(e.mesh.position,t),this.body.position.y=Math.sin(this.stateTimer*8)*.12,this.body.rotation.z=Math.sin(this.stateTimer*4)*.03,i<=this.attackRange&&(this.attackCooldownTimer<=0?this._startAttack(e):this._changeState(Rt.IDLE));break;case Rt.ATTACK:this._processAttack(t,e,!1);break;case Rt.HEAVY_ATTACK:this._processAttack(t,e,!0);break;case Rt.AOE_ATTACK:this._processAoEAttack(t,e);break;case Rt.COMBO:this._processCombo(t,e);break;case Rt.STAGGERED:this.body.rotation.z=Math.sin(this.stateTimer*14)*.18*(1-this.stateTimer/2.5),this.body.position.y=Math.sin(this.stateTimer*8)*.1,this.stateTimer>=2.5&&(this.posture=0,this.body.rotation.z=0,this.body.position.y=0,this._changeState(Rt.IDLE));break;case Rt.PHASE_TRANSITION:this._processPhaseTransition(t);break}this.state!==Rt.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-3*t));const n=this.health/this.maxHealth,s=2+(1-n)*5,o=3.5+Math.sin(Date.now()*.001*s)*(1.5+(1-n)*2.5);if(this.eyes.forEach(a=>{a.material.emissiveIntensity=o}),this.eyeLights.forEach(a=>{a.intensity=.3+o*.1}),this.auraParticles&&this.isActive){const a=Date.now()*.001;this.auraParticles.forEach((c,l)=>{const h=c.userData.angle+a*.6,d=c.userData.yOffset+Math.sin(a+l)*.4,u=c.userData.radius;c.position.set(Math.cos(h)*u,1.6+d,Math.sin(h)*u),c.material.opacity=.35+Math.sin(a*2.5+l)*.25})}}_startAttack(t){if(this.phase===2&&this.config.canAoE&&this.aoeCooldownTimer<=0&&Math.random()<.3){this._changeState(Rt.AOE_ATTACK);return}if(this.phase===2&&this.config.canCombo&&Math.random()<.4){this.comboCount=0,this._changeState(Rt.COMBO);return}Math.random()<.5?this._changeState(Rt.ATTACK):this._changeState(Rt.HEAVY_ATTACK)}_processAttack(t,e,i){const n=i?this.config.attackWindup*1.5:this.config.attackWindup,s=n+.3,o=s+(i?1:.6);if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const a=this.stateTimer/n;i?(this.weapon.rotation.z=-a*2.8,this.weapon.position.y=1.9+a*1.6,this.body.rotation.x=a*.15):(this.weapon.rotation.z=.4-a*1.6,this.body.rotation.z=a*.1);return}if(this.stateTimer>=n&&this.stateTimer<s){if(!this.hitThisSwing){const c=new b(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2.2)).add(new b(0,1.6,0)),range:this.attackRange,damage:i?this.config.damage*1.5:this.config.damage,postureDmg:i?this.config.postureDmg*1.5:this.config.postureDmg,isHeavy:i},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.7,pitch:i?.6:.8})}const a=(this.stateTimer-n)/.3;i?(this.weapon.rotation.z=-2.8+a*4.5,this.weapon.position.y=3.5-a*2.8,this.body.rotation.x=.15-a*.25):(this.weapon.rotation.z=-1.2+a*2.8,this.body.rotation.z=.1-a*.15)}this.stateTimer>=s&&(this.activeAttack=null,this.weapon.rotation.z=Qt.lerp(this.weapon.rotation.z,.4,.12),this.weapon.position.y=Qt.lerp(this.weapon.position.y,1.9,.12),this.body.rotation.x=Qt.lerp(this.body.rotation.x,0,.15),this.body.rotation.z=Qt.lerp(this.body.rotation.z,0,.15)),this.stateTimer>=o&&(this.hitThisSwing=!1,this.activeAttack=null,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(Rt.IDLE))}_processCombo(t,e){const i=this.config.attackWindup*.7,n=i+.2,s=n+.3;if(this.stateTimer<i){this._faceTarget(e.mesh.position,t*3);const o=this.stateTimer/i,a=this.comboCount%2===0?1:-1;this.weapon.rotation.z=a*o*1.8,this.body.rotation.z=a*o*.08;return}if(this.stateTimer>=i&&this.stateTimer<n){if(!this.hitThisSwing){const c=new b(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2.2)).add(new b(0,1.6,0)),range:this.attackRange*.9,damage:this.config.damage*.7,postureDmg:this.config.postureDmg*.6,isCombo:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.6,pitch:.9+this.comboCount*.1})}const o=(this.stateTimer-i)/.2,a=this.comboCount%2===0?1:-1;this.weapon.rotation.z=a*(1.8-o*3.5),this.body.rotation.z=a*(.08-o*.12)}if(this.stateTimer>=s){this.comboCount++,this.hitThisSwing=!1,this.activeAttack=null;const o=this.mesh.position.distanceTo(e.mesh.position);if(this.comboCount<this.config.maxCombo&&o<this.attackRange*1.2){this.stateTimer=0;const a=new b(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.mesh.position.addScaledVector(a,.6)}else this.comboCount=0,this.attackCooldownTimer=this.config.attackCooldown*1.5,this._resetWeapon(),this._changeState(Rt.IDLE)}}_processAoEAttack(t,e){if(this.stateTimer<1.5){const o=this.stateTimer/1.5;this.aoeIndicator.material.opacity=o*.65,this.aoeIndicator.scale.setScalar(1+o*.35),this.weapon.rotation.z=-o*3.2,this.weapon.position.y=1.9+o*2.2,this._flashModel(o*.5,16720384),this.eyes.forEach(a=>{a.material.emissiveIntensity=4+o*7}),this.body.position.y=Math.sin(this.stateTimer*20)*.05*o;return}this.stateTimer>=1.5&&this.stateTimer<1.8&&(this.hitThisSwing||(this.hitThisSwing=!0,this.aoeIndicator.material.opacity=1,this.aoeIndicator.material.color.setHex(16737792),this.gm?.audioManager&&this.gm.audioManager.play("explosion",{position:this.mesh.position,volume:.9}),this.mesh.position.distanceTo(e.mesh.position)<6&&!e.isInvincible&&(this.activeAttack={position:this.mesh.position.clone(),range:6,damage:this.config.damage*1.2,postureDmg:this.config.postureDmg,isAoE:!0}),this.weapon.rotation.z=.6,this.weapon.position.y=.6)),this.stateTimer>=1.8&&(this.activeAttack=null,this.aoeIndicator.material.opacity*=.88,this._flashModel(0,0)),this.stateTimer>=2.8&&(this.hitThisSwing=!1,this.aoeIndicator.material.opacity=0,this.aoeIndicator.material.color.setHex(16729088),this.aoeCooldownTimer=this.config.aoeCooldown,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(Rt.IDLE))}_processPhaseTransition(t){if(this.stateTimer<3){this.body.rotation.z=Math.sin(this.stateTimer*22)*.25,this.body.scale.y=1+Math.sin(this.stateTimer*12)*.15,this.body.scale.x=1+Math.sin(this.stateTimer*10)*.08,this.eyes.forEach((o,a)=>{o.material.emissiveIntensity=6+Math.sin(this.stateTimer*18+a)*5});const i=this.stateTimer/3,n=new vt(this.phaseConfigs[1].modelTint),s=new vt(this.phaseConfigs[2].modelTint);n.lerp(s,i),this._applyModelTint(n.getHex(),this.phaseConfigs[2].emissiveColor),this.stateTimer>1.5&&!this.mutatedArm&&this._createMutatedArm();return}this.body.rotation.z=0,this.body.scale.set(1,1,1),this._applyModelTint(this.phaseConfigs[2].modelTint,this.phaseConfigs[2].emissiveColor),this.eyes.forEach(i=>{i.material.color.setHex(16729088),i.material.emissive.setHex(16729088)}),this._changeState(Rt.IDLE)}_createMutatedArm(){this.mutatedArm=new zt;const t=new De(.18,1.2,12,16),e=new tt({color:3806504,roughness:.85,metalness:.15}),i=new D(t,e);i.position.set(0,0,0),i.rotation.z=.7,i.rotation.x=.45,this.mutatedArm.add(i);const n=new tt({color:2236962,roughness:.35,metalness:.75});for(let a=0;a<4;a++){const c=new Ze(.04,.25,6),l=new D(c,n);l.position.set(-.5+(a-1.5)*.1,.7,.8),l.rotation.x=-.85,this.mutatedArm.add(l)}for(let a=0;a<4;a++){const c=new Vt(.07+Math.random()*.05,6,6),l=new tt({color:4859960,roughness:.9,emissive:1114120,emissiveIntensity:.4}),h=new D(c,l);h.position.set(-.25+a*.18,.25+a*.18,.4),this.mutatedArm.add(h)}this.mutatedArm.position.set(-1.1,2.7,.25),this.mesh.add(this.mutatedArm);const s=new tt({color:16729088,emissive:16729088,emissiveIntensity:5});[{x:-1.3,y:2.9,z:.55,size:.07},{x:-1.1,y:2.5,z:.65,size:.055},{x:.55,y:3.1,z:.4,size:.045}].forEach(a=>{const c=new D(new Vt(a.size,10,10),s.clone());c.position.set(a.x,a.y,a.z),this.eyes.push(c),this.mesh.add(c)})}_flashModel(t,e){const i=new vt(e);this.gltfModel&&this.gltfModel.traverse(n=>{n.isMesh&&n.material&&n.material.emissive!==void 0&&(n.material.emissive.lerp(i,t),n.material.emissiveIntensity=t*2)}),this.body.traverse(n=>{n.isMesh&&n.material&&n.material.emissive!==void 0&&n.material.emissive.lerp(i,t)})}takeDamage(t,e=0,i=null){return this.state===Rt.DEAD||this.state===Rt.PHASE_TRANSITION||this.state===Rt.DORMANT?"immune":(this.state===Rt.AWAKENING&&(t=Math.floor(t*.5),e=Math.floor(e*.5)),this.state===Rt.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.7}),this._flashModel(.6,16720384),setTimeout(()=>{this.state!==Rt.AOE_ATTACK&&this._flashModel(0,0)},100),this._applyHitRecoil(i,t),this.health<=0?(this._die(),"died"):this.phase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==Rt.STAGGERED?(this._triggerPostureBreak(),"staggered"):"hit")}_applyHitRecoil(t,e){let i;if(t)i=new b().subVectors(this.mesh.position,t),i.y=0,i.normalize();else{const u=this.body.rotation.y;i=new b(-Math.sin(u),0,-Math.cos(u))}const n=Math.min(.25,e*.006),s=this.mesh.position.clone(),o=s.clone().add(i.multiplyScalar(n)),a=this.body.rotation.z||0,c=Math.random()>.5?1:-1;this.body.rotation.z=a+c*.1;let l=0;const h=.15,d=()=>{l+=.016;const u=Math.min(1,l/h),f=1-Math.pow(1-u,3);this.mesh.position.lerpVectors(o,s,f),this.body.rotation.z=Qt.lerp(a+c*.1,a,f),u<1&&requestAnimationFrame(d)};this.mesh.position.copy(o),requestAnimationFrame(d)}_triggerPostureBreak(){this._changeState(Rt.STAGGERED),this.activeAttack=null,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.9}),this._flashModel(1,16763904),this.eyes.forEach(t=>{t.material.emissive.setHex(16763904)}),setTimeout(()=>{this.state===Rt.STAGGERED&&(this._flashModel(0,0),this.eyes.forEach(t=>{t.material.emissive.setHex(this.phase===2?16729088:16720384)}))},300)}_enterPhase2(){this.phase=2,this.config=this.phaseConfigs[2],this.posture=0,this.activeAttack=null,this._changeState(Rt.PHASE_TRANSITION),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1})}_die(){this.state=Rt.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.isActive=!1,this._playAnimation(Rt.DEAD,.8),this.gm?.audioManager&&this.gm.audioManager.startAmbientMusic();let t=0;const e=()=>{t+=.018,this.body.position.y=-t*1.8,this.body.rotation.x=t*.6,this.body.rotation.z=t*.3,this.eyes.forEach(i=>{i.material.emissiveIntensity*=.94}),this.eyeLights.forEach(i=>{i.intensity*=.92}),t<1?requestAnimationFrame(e):this._fadeOut()};e(),this.gm&&this.gm.collectRemnants(2e3)}_fadeOut(){let t=1;const e=()=>{t-=.008;const i=n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{o.transparent=!0,o.opacity=t})};this.body.traverse(i),this.weapon.traverse(i),this.eyes.forEach(n=>{n.material.transparent=!0,n.material.opacity=t}),this.auraParticles&&this.auraParticles.forEach(n=>{n.material.opacity=t*.6}),this.mutatedArm&&this.mutatedArm.traverse(i),t>0?requestAnimationFrame(e):this.mesh.visible=!1};setTimeout(e,3e3)}_moveToward(t,e){const i=new b().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.5){i.normalize();const n=this.config.moveSpeed*e,s=this.mesh.position.clone().addScaledVector(i,n);this.world&&this.world.checkCollision?this.world.checkCollision(s,this.collisionRadius).collides||this.mesh.position.copy(s):this.mesh.position.addScaledVector(i,n)}}_faceTarget(t,e){const i=new b().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.1){const n=Math.atan2(i.x,i.z);this.body.rotation.y=Qt.lerp(this.body.rotation.y,n,5*e)}}_resetWeapon(){this.weapon.rotation.z=.4,this.weapon.position.set(1.6,1.9,0),this.body.rotation.x=0,this.body.rotation.z=0}_changeState(t){this.state!==t&&((this.state===Rt.ATTACK||this.state===Rt.HEAVY_ATTACK||this.state===Rt.AOE_ATTACK||this.state===Rt.COMBO)&&(this.activeAttack=null,this.hitThisSwing=!1),this.state=t,this.stateTimer=0,this._playAnimation(t))}respawn(){this.health=this.maxHealth,this.posture=0,this.phase=1,this.config=this.phaseConfigs[1],this.state=Rt.DORMANT,this.stateTimer=0,this.isActive=!1,this.isDead=!1,this.comboCount=0,this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.mesh.position.copy(this.spawnPos),this.mesh.visible=!0,this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.body.scale.set(1,1,1);const t=e=>{e.isMesh&&e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.opacity=1,n.transparent=!1,n.emissive&&n.emissive.setHex(0)})};for(this.body.traverse(t),this.weapon.traverse(t),this._resetWeapon();this.eyes.length>8;){const e=this.eyes.pop();e&&this.mesh.remove(e)}this.eyes.forEach(e=>{e.material.opacity=1,e.material.transparent=!1,e.material.color.setHex(16720384),e.material.emissive.setHex(16720384)}),this.eyeLights.forEach(e=>{e.intensity=.1}),this.mutatedArm&&(this.mesh.remove(this.mutatedArm),this.mutatedArm=null),this._applyModelTint(this.phaseConfigs[1].modelTint,this.phaseConfigs[1].emissiveColor),this.aoeIndicator.material.opacity=0,this._setDormant(),this._playAnimation(Rt.IDLE)}}const Dn={SAFE:{maxDistance:50,hpMultiplier:.8,damageMultiplier:.7,remnantMultiplier:.8,spawnDensity:.3,enemyTypes:["HOLLOW_SOLDIER"],eliteChance:0,label:"Safe Zone"},MEDIUM:{maxDistance:150,hpMultiplier:1,damageMultiplier:1,remnantMultiplier:1,spawnDensity:.5,enemyTypes:["HOLLOW_SOLDIER","BERSERKER"],eliteChance:.05,label:"Medium Zone"},HARD:{maxDistance:300,hpMultiplier:1.3,damageMultiplier:1.2,remnantMultiplier:1.5,spawnDensity:.7,enemyTypes:["HOLLOW_SOLDIER","BERSERKER","SENTINEL"],eliteChance:.15,label:"Hard Zone"},FRONTIER:{maxDistance:1/0,hpMultiplier:1.6,damageMultiplier:1.4,remnantMultiplier:2,spawnDensity:.9,enemyTypes:["BERSERKER","SENTINEL","CRYPT_GUARDIAN"],eliteChance:.25,label:"Dark Frontier"}};function Pr(r){return r<Dn.SAFE.maxDistance?Dn.SAFE:r<Dn.MEDIUM.maxDistance?Dn.MEDIUM:r<Dn.HARD.maxDistance?Dn.HARD:Dn.FRONTIER}function ca(r,t){return Math.sqrt(r*r+t*t)}class dv{constructor(t,e,i,n=null,s=null,o=null){this.scene=t,this.gm=e,this.player=i,this.world=n,this.particleManager=s,this.lootManager=o,this.enemies=[],this.boss=null,this.cryptLord=null,this.defeatedBosses=new Set,this.spawnedRegions=new Set,this.maxEnemies=30,this.spawnCheckRadius=60,this.despawnRadius=100,this.groupRadius=30,this.maxActiveAttackers=3,this.groupJoinDelayMin=.5,this.groupJoinDelayMax=2,this.leaderDeathConfusionTime=1,this.activeGroups=new Map,this.nextGroupId=1,this._spawnEnemies(),console.log("[EnemyManager] Initialized with distance-based scaling")}_spawnEnemies(){if(!this.world?.terrain){console.warn("[EnemyManager] No terrain available, using fallback spawns"),this._spawnFallbackEnemies();return}this.world.terrain,this._populateArea(0,0,80),console.log(`[EnemyManager] Spawned ${this.enemies.length} enemies with distance scaling`)}_populateArea(t,e,i){if(!this.world?.terrain)return;const n=this.world.terrain,s=Math.floor(i/10);for(let o=0;o<s;o++){const a=Math.random()*Math.PI*2,c=Math.random()*i,l=t+Math.cos(a)*c,h=e+Math.sin(a)*c,d=ca(l,h);if(d<35)continue;const u=Pr(d);if(Math.random()>u.spawnDensity||n.getTerrainSlope(l,h)>.5||this.world.isNearTree&&this.world.isNearTree(l,h,3)||this.enemies.some(g=>{const p=g.spawnPos.x-l,x=g.spawnPos.z-h;return Math.sqrt(p*p+x*x)<8}))continue;if(this.enemies.length>=this.maxEnemies)break;const _=n.getTerrainHeight(l,h);this._spawnEnemyAtPosition(l,_,h,u,d)}}_spawnEnemyAtPosition(t,e,i,n,s){const o=n.enemyTypes[Math.floor(Math.random()*n.enemyTypes.length)],a=Ia[o];if(!a){console.warn(`[EnemyManager] Unknown enemy type: ${o}`);return}const c=Math.random()<n.eliteChance,l=this._applyDistanceScaling(a,n,s,c),h=new b(t,e,i),d=new Da(this.scene,h,{type:o,...l},this.gm);return d.spawnDistance=s,d.difficultyZone=n.label,d.world=this.world,this.enemies.push(d),d}_applyDistanceScaling(t,e,i,n=!1){let s=e.hpMultiplier,o=e.damageMultiplier,a=e.remnantMultiplier;const c=1+i/1e3;return s*=c,o*=c,a*=c,n&&(s*=1.5,o*=1.3,a*=2),{name:n?`Elite ${t.name}`:t.name,health:Math.round(t.health*s),damage:Math.round(t.damage*o),postureDmg:Math.round((t.postureDmg||15)*o),remnantDrop:Math.round(t.remnantDrop*a),maxPosture:Math.round((t.maxPosture||60)*s),moveSpeed:t.moveSpeed,detectionRange:t.detectionRange+(n?3:0),attackRange:t.attackRange,attackCooldown:t.attackCooldown,attackWindup:t.attackWindup,attackDuration:t.attackDuration,bodyColor:n?6684706:t.bodyColor,eyeColor:n?16711680:t.eyeColor,modelTint:n?this._eliteTint(t.modelTint):t.modelTint,modelScale:(t.modelScale||.5)*(n?1.15:1),canChainAttacks:t.canChainAttacks,maxChainAttacks:t.maxChainAttacks,hasShield:t.hasShield,shieldBlockChance:t.shieldBlockChance,modelPath:t.modelPath,animSpeedMult:t.animSpeedMult,patrolRadius:t.patrolRadius,isElite:n}}_eliteTint(t){if(!t)return 4456482;const e=new vt(t);return e.lerp(new vt(6684672),.4),e.getHex()}_spawnFallbackEnemies(){[{pos:new b(40,0,0),type:"HOLLOW_SOLDIER"},{pos:new b(60,0,20),type:"HOLLOW_SOLDIER"},{pos:new b(80,0,-10),type:"BERSERKER"},{pos:new b(100,0,30),type:"SENTINEL"}].forEach(e=>{const i=Pr(ca(e.pos.x,e.pos.z)),n=Ia[e.type],s=this._applyDistanceScaling(n,i,ca(e.pos.x,e.pos.z)),o=new Da(this.scene,e.pos,{type:e.type,...s},this.gm);o.world=this.world,this.enemies.push(o)})}updateDynamicSpawns(t){if(!this.world?.terrain)return;const e=new Set;for(let i=this.enemies.length-1;i>=0;i--){const n=this.enemies[i];if(n.mesh.position.distanceTo(t)>this.despawnRadius&&!n.bossActive){if(n.spawnPos){const o=Math.floor(n.spawnPos.x/40)*40,a=Math.floor(n.spawnPos.z/40)*40;e.add(`${o},${a}`)}n.mesh&&this.scene.remove(n.mesh),this.enemies.splice(i,1)}}for(const i of e)this.enemies.some(s=>{if(!s.spawnPos)return!1;const o=Math.floor(s.spawnPos.x/40)*40,a=Math.floor(s.spawnPos.z/40)*40;return`${o},${a}`===i})||this.spawnedRegions.delete(i);if(this.enemies.length<this.maxEnemies){const i=Math.floor(t.x/40),n=Math.floor(t.z/40);for(let s=-1;s<=1;s++)for(let o=-1;o<=1;o++){const a=(i+s)*40,c=(n+o)*40,l=`${a},${c}`;if(this.spawnedRegions.has(l))continue;if(this.enemies.length>=this.maxEnemies)break;Math.sqrt(Math.pow(a+20-t.x,2)+Math.pow(c+20-t.z,2))>this.spawnCheckRadius||(this.spawnedRegions.add(l),this._populateArea(a,c,40))}}}_spawnBoss(){const t=this.world?.getBossPosition()||new b(0,0,-95);this.boss=new hv(this.scene,t,this.gm),this.boss.world=this.world;const e=new Is(8,12,32),i=new $t({color:3346705,transparent:!0,opacity:.3,side:fe}),n=new D(e,i);n.rotation.x=-Math.PI/2,n.position.copy(t),n.position.y=.02,this.scene.add(n)}update(t,e){this.updateDynamicSpawns(e.mesh.position),this._checkDormantTriggers(e),this._coordinateFlanking(e),this._coordinateGroups(e);for(let i=this.enemies.length-1;i>=0;i--){const n=this.enemies[i];if(n.update(t,e),e.activeAttack&&!e.hitThisSwing){const s=n.mesh.position.x-e.activeAttack.position.x,o=n.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(s*s+o*o)<e.activeAttack.range&&n.health>0){const c=n.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,e.activeAttack.isHeavy?this.gm.hitstopHeavy():this.gm.hitstopLight(),this.gm.cameraController&&(e.activeAttack.isHeavy?this.gm.cameraController.shakeMedium():this.gm.cameraController.shakeLight()),this.particleManager){const l=n.mesh.position.clone(),h=n.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(l,8,e.activeAttack.isHeavy),this.particleManager.spawnBlood(l,h,Math.ceil(e.activeAttack.damage/5)),c==="posture_broken"&&this.particleManager.spawnPostureBreak(l)}if(c==="died"){this.gm.addRemnant(n.config.remnantDrop);const l=this.gm.calculateEnemyXP(n);this.gm.gainXP(l,n.mesh.position),this.particleManager&&this.particleManager.spawnDeathBurst(n.mesh.position.clone()),this.lootManager&&this.lootManager.rollLoot(n,n.mesh.position.clone()),setTimeout(()=>{n.respawn()},8e3)}}}if(n.activeAttack&&!n.hitThisSwing){const s=e.mesh.position.x-n.activeAttack.position.x,o=e.mesh.position.z-n.activeAttack.position.z;if(Math.sqrt(s*s+o*o)<n.activeAttack.range&&!e.isInvincible){if(e.isParrying){n.hitThisSwing=!0,e.onParrySuccess(),n.state="staggered",n.stateTimer=0,this.particleManager&&this.particleManager.spawnParryEffect(e.mesh.position.clone());continue}const c=this.gm.takeDamage(n.activeAttack.damage,"physical",n.activeAttack.postureDmg,e.isBlocking);if(n.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const l=n.activeAttack.damage/30;this.gm.hud.flashDamage(Math.min(1,l))}if(this.gm.cameraController&&this.gm.cameraController.shakeHeavy(),this.particleManager){const l=e.mesh.position.clone(),h=e.mesh.position.clone().sub(n.mesh.position).normalize();e.isBlocking&&c!=="guard_broken"?this.particleManager.spawnBlockSparks(l):(this.particleManager.spawnHitSparks(l,6,!1),this.particleManager.spawnBlood(l,h,Math.ceil(n.activeAttack.damage/5))),(c==="guard_broken"||c==="posture_broken")&&this.particleManager.spawnPostureBreak(l)}c==="died"||(c==="guard_broken"||c==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}if(this.boss){if(this.boss.update(t,e),e.activeAttack&&!e.hitThisSwing&&!this.boss.isDead){const i=this.boss.mesh.position.x-e.activeAttack.position.x,n=this.boss.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(i*i+n*n)<e.activeAttack.range+1&&this.boss.health>0){const o=this.boss.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,this.gm.hitstopHeavy(),this.gm.cameraController&&this.gm.cameraController.shakeMedium(),this.particleManager){const a=this.boss.mesh.position.clone(),c=this.boss.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(a,12,e.activeAttack.isHeavy),this.particleManager.spawnBlood(a,c,Math.ceil(e.activeAttack.damage/3)),o==="posture_broken"&&this.particleManager.spawnPostureBreak(a),o==="died"&&(this.particleManager.spawnDeathBurst(a),this.particleManager.spawnDeathBurst(a),this.gm.gainXP(200,a))}}}if(this.boss.activeAttack&&!this.boss.hitThisSwing){const i=e.mesh.position.x-this.boss.activeAttack.position.x,n=e.mesh.position.z-this.boss.activeAttack.position.z;if(Math.sqrt(i*i+n*n)<this.boss.activeAttack.range&&!e.isInvincible)if(e.isParrying)this.boss.hitThisSwing=!0,e.onParrySuccess(),this.boss.state!=="staggered"&&(this.boss.state="staggered",this.boss.stateTimer=0),this.particleManager&&(this.particleManager.spawnParryEffect(e.mesh.position.clone()),this.particleManager.spawnBlockSparks(e.mesh.position.clone())),this.gm.cameraController&&this.gm.cameraController.shakeMedium();else{const o=this.gm.takeDamage(this.boss.activeAttack.damage,"physical",this.boss.activeAttack.postureDmg,e.isBlocking);if(this.boss.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const a=this.boss.activeAttack.damage/25;this.gm.hud.flashDamage(Math.min(1,a))}if(this.gm.cameraController&&this.gm.cameraController.shake(.7,.25),this.particleManager){const a=e.mesh.position.clone(),c=e.mesh.position.clone().sub(this.boss.mesh.position).normalize();e.isBlocking&&o!=="guard_broken"?(this.particleManager.spawnBlockSparks(a),this.particleManager.spawnBlockSparks(a)):(this.particleManager.spawnHitSparks(a,10,!0),this.particleManager.spawnBlood(a,c,Math.ceil(this.boss.activeAttack.damage/4))),(o==="guard_broken"||o==="posture_broken")&&this.particleManager.spawnPostureBreak(a)}o==="died"||(o==="guard_broken"||o==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}}_checkDormantTriggers(t){const e=t.mesh.position;for(const i of this.enemies)i.checkTrigger&&i.checkTrigger(e)&&(i.wake(),this.gm?.audioManager&&this.gm.audioManager.play("ambushReveal",{position:i.mesh.position,volume:.8}),this.gm?.cameraController&&this.gm.cameraController.shakeLight())}_coordinateFlanking(t){const e=t.mesh.position,i=this.enemies.filter(a=>a.isDead||a.state==="dead"||a.state==="staggered"||a.state==="dormant"||a.isBoss||a.mesh.position.distanceTo(e)>(a.config.detectionRange||10)*1.2?!1:a.state==="chase"||a.state==="circle"||a.state==="attack");if(i.length<2)return;const n=i.filter(a=>!(!a.canFlank||a.state==="flank"||a.isFlankAssigned||a.isRetreating)),s=i.filter(a=>a.state==="flank").length,o=Math.floor(i.length/2);if(!(s>=o)){n.sort((a,c)=>{const l=a.mesh.position.distanceTo(e);return c.mesh.position.distanceTo(e)-l});for(const a of n)if(a.requestFlank&&a.requestFlank())break}}_coordinateGroups(t){const e=t.mesh.position,i=this.enemies.filter(s=>s.isDead||s.state==="dead"||s.state==="staggered"||s.state==="dormant"||s.state==="rising"||s.isBoss||s.mesh.position.distanceTo(e)>(s.config.detectionRange||10)*1.5?!1:s.state==="chase"||s.state==="circle"||s.state==="attack"||s.state==="flank"||s.isInCombat?.()||!1);if(i.length===0){this.activeGroups.clear();return}for(const[s,o]of this.activeGroups)o.members=o.members.filter(a=>!a.isDead&&a.state!=="dead"&&a.state!=="idle"&&a.state!=="patrol"),o.leader&&(o.leader.isDead||o.leader.state==="dead")&&(this._handleLeaderDeath(o),o.leader=null),o.members.length===0&&this.activeGroups.delete(s);const n=i.filter(s=>s.groupId===null);for(const s of n){let o=!1;for(const[a,c]of this.activeGroups){if(c.members.length===0)continue;if(c.members.some(h=>s.mesh.position.distanceTo(h.mesh.position)<this.groupRadius)){const h=this.groupJoinDelayMin+Math.random()*(this.groupJoinDelayMax-this.groupJoinDelayMin);s.joinGroup(a,!1,h),c.members.push(s),o=!0;break}}if(!o){const a=`group_${this.nextGroupId++}`;s.joinGroup(a,!0,0),this.activeGroups.set(a,{leader:s,members:[s],attackers:[]})}}this._mergeNearbyGroups(),this._manageGroupAttackers(t)}_handleLeaderDeath(t){for(const e of t.members)!e.isDead&&e.state!=="dead"&&!e.isGroupLeader&&e.triggerConfusion(this.leaderDeathConfusionTime);setTimeout(()=>{const e=t.members.filter(i=>!i.isDead&&i.state!=="dead");if(e.length>0){e.sort((n,s)=>s.health-n.health);const i=e[0];i.isGroupLeader=!0,t.leader=i}},this.leaderDeathConfusionTime*1e3)}_mergeNearbyGroups(){const t=Array.from(this.activeGroups.keys());for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){const n=this.activeGroups.get(t[e]),s=this.activeGroups.get(t[i]);if(!n||!s||n.members.length===0||s.members.length===0)continue;let o=!1;for(const a of n.members){for(const c of s.members)if(a.mesh.position.distanceTo(c.mesh.position)<this.groupRadius){o=!0;break}if(o)break}if(o){for(const a of s.members)a.groupId=t[e],a.isGroupLeader=!1,n.members.push(a);s.leader&&n.leader&&s.leader.health>n.leader.health&&(n.leader.isGroupLeader=!1,s.leader.isGroupLeader=!0,n.leader=s.leader),this.activeGroups.delete(t[i])}}}_manageGroupAttackers(t){for(const[e,i]of this.activeGroups){const n=i.members.filter(c=>c.isAttacking?.()||c.state==="attack"),s=i.members.filter(c=>c.isDead||c.state==="dead"||c.isAttacking?.()||c.state==="attack"||c.isWaitingToJoin||c.isConfused?!1:c.mesh.position.distanceTo(t.mesh.position)<=(c.config.attackRange||2.2)),o=this.maxActiveAttackers-n.length;let a=0;for(const c of i.members)c.isDead||c.state==="dead"||(c.isAttacking?.()||c.state==="attack"?c.canAttackInGroup=!0:a<o&&s.includes(c)?(c.canAttackInGroup=!0,a++):s.includes(c)?c.canAttackInGroup=!1:c.canAttackInGroup=!0);i.attackers=n}}getPlayerZone(t){const e=ca(t.x,t.z);return Pr(e)}resetAll(){this.activeGroups.clear(),this.enemies.forEach(t=>{t.isBoss&&this.defeatedBosses.has(t.bossId||"crypt-lord")||t.respawn()}),this.boss&&this.boss.respawn()}markBossDefeated(t){this.defeatedBosses.add(t)}isBossDefeated(t){return this.defeatedBosses.has(t)}getBoss(){return this.boss}getCryptLord(){return this.cryptLord}getActiveBoss(){return this.cryptLord&&this.cryptLord.bossActive&&!this.cryptLord.isDead?this.cryptLord:this.boss&&this.boss.isActive&&!this.boss.isDead?this.boss:null}}const Qd=Math.sqrt(3),uv=.5*(Qd-1),Ks=(3-Qd)/6,zh=r=>Math.floor(r)|0,Gh=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function fv(r=Math.random){const t=pv(r),e=new Float64Array(t).map(n=>Gh[n%12*2]),i=new Float64Array(t).map(n=>Gh[n%12*2+1]);return function(s,o){let a=0,c=0,l=0;const h=(s+o)*uv,d=zh(s+h),u=zh(o+h),f=(d+u)*Ks,m=d-f,_=u-f,g=s-m,p=o-_;let x,y;g>p?(x=1,y=0):(x=0,y=1);const v=g-x+Ks,w=p-y+Ks,E=g-1+2*Ks,C=p-1+2*Ks,I=d&255,M=u&255;let T=.5-g*g-p*p;if(T>=0){const B=I+t[M],W=e[B],H=i[B];T*=T,a=T*T*(W*g+H*p)}let P=.5-v*v-w*w;if(P>=0){const B=I+x+t[M+y],W=e[B],H=i[B];P*=P,c=P*P*(W*v+H*w)}let O=.5-E*E-C*C;if(O>=0){const B=I+1+t[M+1],W=e[B],H=i[B];O*=O,l=O*O*(W*E+H*C)}return 70*(a+c+l)}}function pv(r){const e=new Uint8Array(512);for(let i=0;i<512/2;i++)e[i]=i;for(let i=0;i<512/2-1;i++){const n=i+~~(r()*(256-i)),s=e[i];e[i]=e[n],e[n]=s}for(let i=256;i<512;i++)e[i]=e[i-256];return e}class mv{constructor(t){this.scene=t,this.chunkSize=64,this.chunkResolution=32,this.loadDistance=3,this.unloadDistance=5,this.heightScale=25,this.baseHeight=0,this.castleRadius=30,this.castleBlendRadius=45,this.seed=12345,this.noise2D=fv(()=>this.seed/1e4),this.octaves=[{frequency:.003,amplitude:1},{frequency:.01,amplitude:.4},{frequency:.03,amplitude:.15},{frequency:.08,amplitude:.05}],this.chunks=new Map,this.lastPlayerChunkX=null,this.lastPlayerChunkZ=null,this.terrainMaterial=this._createTerrainMaterial(),this._updateChunks(0,0)}_sampleNoise(t,e){let i=0,n=0;for(const s of this.octaves)i+=this.noise2D(t*s.frequency,e*s.frequency)*s.amplitude,n+=s.amplitude;return i/=n,i*this.heightScale+this.baseHeight}getTerrainHeight(t,e){const i=Math.sqrt(t*t+e*e);if(i<this.castleRadius)return this.baseHeight;const n=this._sampleNoise(t,e);if(i<this.castleBlendRadius){const s=(i-this.castleRadius)/(this.castleBlendRadius-this.castleRadius),o=s*s*(3-2*s);return Qt.lerp(this.baseHeight,n,o)}return n}getTerrainSlope(t,e){const n=this.getTerrainHeight(t,e),s=this.getTerrainHeight(t+1,e),o=this.getTerrainHeight(t,e+1),a=(s-n)/1,c=(o-n)/1;return Math.sqrt(a*a+c*c)}getTerrainNormal(t,e){const n=this.getTerrainHeight(t,e),s=this.getTerrainHeight(t+1,e),o=this.getTerrainHeight(t,e+1),a=new b(1,s-n,0),c=new b(0,o-n,1);return new b().crossVectors(c,a).normalize()}_worldToChunk(t,e){return{chunkX:Math.floor(t/this.chunkSize),chunkZ:Math.floor(e/this.chunkSize)}}_chunkKey(t,e){return`${t},${e}`}update(t,e){const{chunkX:i,chunkZ:n}=this._worldToChunk(t,e);i===this.lastPlayerChunkX&&n===this.lastPlayerChunkZ||(this.lastPlayerChunkX=i,this.lastPlayerChunkZ=n,this._updateChunks(i,n))}_updateChunks(t,e){const i=new Set;for(let s=-this.loadDistance;s<=this.loadDistance;s++)for(let o=-this.loadDistance;o<=this.loadDistance;o++){const a=t+s,c=e+o;i.add(this._chunkKey(a,c)),this.chunks.has(this._chunkKey(a,c))||this._loadChunk(a,c)}const n=[];for(const[s,o]of this.chunks){const[a,c]=s.split(",").map(Number),l=Math.abs(a-t),h=Math.abs(c-e);(l>this.unloadDistance||h>this.unloadDistance)&&n.push(s)}for(const s of n)this._unloadChunk(s)}_loadChunk(t,e){const i=this._chunkKey(t,e);if(this.chunks.has(i))return;const n=t*this.chunkSize,s=e*this.chunkSize,o=new Ve(this.chunkSize,this.chunkSize,this.chunkResolution,this.chunkResolution);o.rotateX(-Math.PI/2);const a=o.attributes.position.array;for(let l=0;l<a.length;l+=3){const h=a[l],d=a[l+2],u=h+n+this.chunkSize/2,f=d+s+this.chunkSize/2,m=this.getTerrainHeight(u,f);a[l+1]=m}o.computeVertexNormals();const c=new D(o,this.terrainMaterial);c.position.set(n+this.chunkSize/2,0,s+this.chunkSize/2),c.receiveShadow=!0,c.castShadow=!1,this.scene.add(c),this.chunks.set(i,{mesh:c,geometry:o})}_unloadChunk(t){const e=this.chunks.get(t);e&&(this.scene.remove(e.mesh),e.geometry.dispose(),this.chunks.delete(t))}_createTerrainMaterial(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#3a5a30",e.fillRect(0,0,512,512);for(let n=0;n<1e4;n++){const s=Math.random()*512,o=Math.random()*512,c=80+Math.floor(Math.random()*30),l=50+Math.floor(Math.random()*20),h=40+Math.floor(Math.random()*15);e.fillStyle=`rgb(${l}, ${c}, ${h})`,e.fillRect(s,o,2+Math.random()*3,2+Math.random()*3)}for(let n=0;n<50;n++){const s=Math.random()*512,o=Math.random()*512,a=10+Math.random()*30;e.fillStyle=`rgba(90, 70, 50, ${.2+Math.random()*.3})`,e.beginPath(),e.ellipse(s,o,a,a*.7,0,0,Math.PI*2),e.fill()}const i=new Td(t);return i.wrapS=Wi,i.wrapT=Wi,i.repeat.set(4,4),new tt({map:i,color:6982224,roughness:.9,metalness:0})}getBiome(t,e){const i=Math.sqrt(t*t+e*e);return i<this.castleRadius?"castle":i<100?"safe_meadow":i<300?"grassland":i<600?"dense_woods":"dark_frontier"}getBiomeParams(t,e){const i=this.getBiome(t,e),n={castle:{treeDensity:0,grassDensity:0,fogDensity:0,ambientLight:1,groundColor:5592405},safe_meadow:{treeDensity:.05,grassDensity:.8,fogDensity:.001,ambientLight:.9,groundColor:8039008},grassland:{treeDensity:.15,grassDensity:.6,fogDensity:.002,ambientLight:.7,groundColor:5933632},dense_woods:{treeDensity:.5,grassDensity:.4,fogDensity:.004,ambientLight:.4,groundColor:3825712},dark_frontier:{treeDensity:.3,grassDensity:.2,fogDensity:.008,ambientLight:.2,groundColor:4872768}};return n[i]||n.grassland}findValidSpawnPoint(t=50,e=200){for(let n=0;n<20;n++){const s=Math.random()*Math.PI*2,o=t+Math.random()*(e-t),a=Math.cos(s)*o,c=Math.sin(s)*o,l=this.getTerrainHeight(a,c);if(!(this.getTerrainSlope(a,c)>.5)&&!(l<-2))return new b(a,l,c)}return new b(60,this.getTerrainHeight(60,0),0)}raycast(t){for(const[e,i]of this.chunks){const n=t.intersectObject(i.mesh);if(n.length>0)return n[0].point}return null}getLoadedChunkCount(){return this.chunks.size}dispose(){for(const[t,e]of this.chunks)this.scene.remove(e.mesh),e.geometry.dispose();this.chunks.clear(),this.terrainMaterial.dispose()}}class gv{constructor(t,e){this.scene=t,this.terrain=e,this.chunkSize=64,this.loadDistance=3,this.unloadDistance=5,this.treesPerChunk=15,this.treeMinDistance=4,this.treeMaxSlope=.4,this.castleExclusionRadius=35,this.trunkCollisionRadius=.4,this.grassPerChunk=100,this.bushesPerChunk=12,this.chunks=new Map,this.treeColliders=[],this._createSharedAssets(),this.lastPlayerChunkX=null,this.lastPlayerChunkZ=null,this.update(0,0),console.log("[FoliageManager] Initialized with chunk-based generation")}_createSharedAssets(){this.oakTrunkGeo=new re(.15,.25,3,6),this.oakTrunkGeo.translate(0,1.5,0),this.oakFoliageGeo=new Ts(1.8,1),this.oakFoliageGeo.translate(0,4.2,0),this.pineTrunkGeo=new re(.12,.2,4,6),this.pineTrunkGeo.translate(0,2,0),this.pineFoliageGeo=new Ze(1.5,3,6),this.pineFoliageGeo.translate(0,5.5,0),this.grassGeo=new Ve(.3,.5),this.grassGeo.translate(0,.25,0),this.bushGeo=new Ts(.5,1),this.bushGeo.scale(1,.7,1),this.bushGeo.translate(0,.35,0),this.oakTrunkMat=new tt({color:4863269,roughness:.95}),this.oakFoliageMat=new tt({color:2972190,roughness:.9}),this.pineTrunkMat=new tt({color:3811866,roughness:.95}),this.pineFoliageMat=new tt({color:1722904,roughness:.85}),this.grassMat=new tt({color:4880944,roughness:.9,side:fe,alphaTest:.5}),this.bushMat=new tt({color:3828264,roughness:.9})}_seededRandom(t){const e=Math.sin(t*12.9898+78.233)*43758.5453;return e-Math.floor(e)}_chunkKey(t,e){return`${t},${e}`}_worldToChunk(t,e){return{cx:Math.floor(t/this.chunkSize),cz:Math.floor(e/this.chunkSize)}}update(t,e){const{cx:i,cz:n}=this._worldToChunk(t,e);if(i===this.lastPlayerChunkX&&n===this.lastPlayerChunkZ)return;this.lastPlayerChunkX=i,this.lastPlayerChunkZ=n;const s=new Set;for(let a=-this.loadDistance;a<=this.loadDistance;a++)for(let c=-this.loadDistance;c<=this.loadDistance;c++){const l=i+a,h=n+c,d=this._chunkKey(l,h);s.add(d),this.chunks.has(d)||this._loadChunk(l,h)}const o=[];for(const[a]of this.chunks)if(!s.has(a)){const[c,l]=a.split(",").map(Number),h=Math.abs(c-i),d=Math.abs(l-n);(h>this.unloadDistance||d>this.unloadDistance)&&o.push(a)}for(const a of o)this._unloadChunk(a)}_loadChunk(t,e){const i=this._chunkKey(t,e);if(this.chunks.has(i))return;const n={trees:[],colliders:[],meshes:[]},s=t*this.chunkSize,o=e*this.chunkSize,a=t*73856093+e*19349663,c=[],l=this.treesPerChunk*5;for(let h=0;h<l&&c.length<this.treesPerChunk;h++){const d=this._seededRandom(a+h*3),u=this._seededRandom(a+h*3+1),f=d*this.chunkSize,m=u*this.chunkSize,_=s+f,g=o+m;if(Math.sqrt(_*_+g*g)<this.castleExclusionRadius||this.terrain.getTerrainSlope(_,g)>this.treeMaxSlope)continue;const y=this.terrain.getBiomeParams(_,g);if(this._seededRandom(a+h*3+2)>y.treeDensity*3)continue;let w=!1;for(const P of c){const O=_-P.x,B=g-P.z;if(O*O+B*B<this.treeMinDistance*this.treeMinDistance){w=!0;break}}if(w)continue;const E=this.terrain.getTerrainHeight(_,g),C=this.terrain.getBiome(_,g),I=(C==="dense_woods"||C==="dark_frontier")&&this._seededRandom(a+h*7)>.3,M=.7+this._seededRandom(a+h*5)*.6,T=this._seededRandom(a+h*11)*Math.PI*2;c.push({x:_,y:E,z:g,scale:M,rotation:T,isPine:I})}c.length>0&&this._createTreeMeshes(n,c),this._createGrassMesh(n,t,e,a),this._createBushMesh(n,t,e,a+999),this.chunks.set(i,n),this.treeColliders.push(...n.colliders)}_createTreeMeshes(t,e){const i=e.filter(o=>!o.isPine),n=e.filter(o=>o.isPine),s=new Gt;if(i.length>0){const o=new Ln(this.oakTrunkGeo,this.oakTrunkMat,i.length),a=new Ln(this.oakFoliageGeo,this.oakFoliageMat,i.length);o.castShadow=!0,o.receiveShadow=!0,a.castShadow=!0,a.receiveShadow=!0,i.forEach((c,l)=>{s.makeRotationY(c.rotation),s.scale(new b(c.scale,c.scale,c.scale)),s.setPosition(c.x,c.y,c.z),o.setMatrixAt(l,s),a.setMatrixAt(l,s),t.colliders.push({x:c.x,z:c.z,radius:this.trunkCollisionRadius*c.scale,height:4*c.scale,baseY:c.y,chunkKey:null})}),o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,this.scene.add(o),this.scene.add(a),t.meshes.push(o,a)}if(n.length>0){const o=new Ln(this.pineTrunkGeo,this.pineTrunkMat,n.length),a=new Ln(this.pineFoliageGeo,this.pineFoliageMat,n.length);o.castShadow=!0,o.receiveShadow=!0,a.castShadow=!0,a.receiveShadow=!0,n.forEach((c,l)=>{s.makeRotationY(c.rotation),s.scale(new b(c.scale,c.scale,c.scale)),s.setPosition(c.x,c.y,c.z),o.setMatrixAt(l,s),a.setMatrixAt(l,s),t.colliders.push({x:c.x,z:c.z,radius:this.trunkCollisionRadius*c.scale*.9,height:5*c.scale,baseY:c.y})}),o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,this.scene.add(o),this.scene.add(a),t.meshes.push(o,a)}t.trees=e}_createGrassMesh(t,e,i,n){const s=e*this.chunkSize,o=i*this.chunkSize,a=new Ln(this.grassGeo,this.grassMat,this.grassPerChunk*3);a.receiveShadow=!0;const c=new Gt;let l=0;for(let h=0;h<this.grassPerChunk;h++){const d=this._seededRandom(n+h*2),u=this._seededRandom(n+h*2+1),f=s+d*this.chunkSize,m=o+u*this.chunkSize;if(f*f+m*m<this.castleExclusionRadius*this.castleExclusionRadius)continue;const _=this.terrain.getBiomeParams(f,m);if(this._seededRandom(n+h*3)>_.grassDensity)continue;const p=this.terrain.getTerrainHeight(f,m);for(let x=0;x<3;x++){const y=(this._seededRandom(n+h*10+x)-.5)*.3,v=(this._seededRandom(n+h*10+x+5)-.5)*.3,w=x/3*Math.PI+this._seededRandom(n+h*20+x)*.5,E=.5+this._seededRandom(n+h*30+x)*.5;if(c.makeRotationY(w),c.scale(new b(E,E,E)),c.setPosition(f+y,p,m+v),a.setMatrixAt(l,c),l++,l>=this.grassPerChunk*3)break}if(l>=this.grassPerChunk*3)break}a.instanceMatrix.needsUpdate=!0,a.count=l,this.scene.add(a),t.meshes.push(a)}_createBushMesh(t,e,i,n){const s=e*this.chunkSize,o=i*this.chunkSize,a=new Ln(this.bushGeo,this.bushMat,this.bushesPerChunk);a.castShadow=!0,a.receiveShadow=!0;const c=new Gt;let l=0;for(let h=0;h<this.bushesPerChunk*3&&l<this.bushesPerChunk;h++){const d=this._seededRandom(n+h*2),u=this._seededRandom(n+h*2+1),f=s+d*this.chunkSize,m=o+u*this.chunkSize,_=(this.castleExclusionRadius+5)*(this.castleExclusionRadius+5);if(f*f+m*m<_)continue;const g=this.terrain.getBiomeParams(f,m);if(this._seededRandom(n+h*3)>g.grassDensity*.8||this.terrain.getTerrainSlope(f,m)>.3)continue;const x=this.terrain.getTerrainHeight(f,m),y=.6+this._seededRandom(n+h*4)*.8,v=this._seededRandom(n+h*5)*Math.PI*2;c.makeRotationY(v),c.scale(new b(y,y,y)),c.setPosition(f,x,m),a.setMatrixAt(l,c),l++}a.instanceMatrix.needsUpdate=!0,a.count=l,this.scene.add(a),t.meshes.push(a)}_unloadChunk(t){const e=this.chunks.get(t);if(e){for(const i of e.meshes)this.scene.remove(i),i.geometry.dispose();this.treeColliders=this.treeColliders.filter(i=>{for(const n of e.colliders)if(i===n)return!1;return!0}),this.chunks.delete(t)}}checkTreeCollision(t,e=.4){for(const i of this.treeColliders){if(t.y<i.baseY-1||t.y>i.baseY+i.height)continue;const n=t.x-i.x,s=t.z-i.z,o=n*n+s*s,a=i.radius+e;if(o<a*a){const c=Math.sqrt(o);if(c>.001){const l=a-c;return new b(n/c*l,0,s/c*l)}}}return null}getTreeColliders(){return this.treeColliders}isNearTree(t,e,i=3){for(const n of this.treeColliders){const s=t-n.x,o=e-n.z;if(s*s+o*o<i*i)return!0}return!1}getLoadedChunkCount(){return this.chunks.size}dispose(){for(const[t]of this.chunks)this._unloadChunk(t);this.oakTrunkGeo.dispose(),this.oakFoliageGeo.dispose(),this.pineTrunkGeo.dispose(),this.pineFoliageGeo.dispose(),this.grassGeo.dispose(),this.bushGeo.dispose(),this.oakTrunkMat.dispose(),this.oakFoliageMat.dispose(),this.pineTrunkMat.dispose(),this.pineFoliageMat.dispose(),this.grassMat.dispose(),this.bushMat.dispose()}}class _v{constructor(t,e){this.scene=t,this.terrain=e,this.regionSize=200,this.loadDistance=2,this.unloadDistance=3,this.minDistFromCastle=60,this.villagesPerRegion=1,this.maxSlopeForVillage=.3,this.minVillageSpacing=80,this.materials=this._createMaterials(),this.regions=new Map,this.villages=[],this.lastPlayerRegionX=null,this.lastPlayerRegionZ=null,this.update(0,0),console.log("[VillageManager] Initialized with region-based generation")}_seededRandom(t){const e=Math.sin(t*12.9898+78.233)*43758.5453;return e-Math.floor(e)}_regionKey(t,e){return`${t},${e}`}_worldToRegion(t,e){return{rx:Math.floor(t/this.regionSize),rz:Math.floor(e/this.regionSize)}}update(t,e){const{rx:i,rz:n}=this._worldToRegion(t,e);if(i===this.lastPlayerRegionX&&n===this.lastPlayerRegionZ)return;this.lastPlayerRegionX=i,this.lastPlayerRegionZ=n;const s=new Set;for(let a=-this.loadDistance;a<=this.loadDistance;a++)for(let c=-this.loadDistance;c<=this.loadDistance;c++){const l=i+a,h=n+c,d=this._regionKey(l,h);s.add(d),this.regions.has(d)||this._loadRegion(l,h)}const o=[];for(const[a]of this.regions){const[c,l]=a.split(",").map(Number),h=Math.abs(c-i),d=Math.abs(l-n);(h>this.unloadDistance||d>this.unloadDistance)&&o.push(a)}for(const a of o)this._unloadRegion(a)}_loadRegion(t,e){const i=this._regionKey(t,e);if(this.regions.has(i))return;const n={villages:[],meshes:[]},s=t*this.regionSize,o=e*this.regionSize,a=t*73856093+e*19349663,c=20;for(let l=0;l<c;l++){const h=this._seededRandom(a+l*3),d=this._seededRandom(a+l*3+1),u=s+h*this.regionSize,f=o+d*this.regionSize;if(Math.sqrt(u*u+f*f)<this.minDistFromCastle||this.terrain.getTerrainSlope(u,f)>this.maxSlopeForVillage)continue;let g=!1;for(const v of this.villages){const w=u-v.x,E=f-v.z;if(Math.sqrt(w*w+E*E)<this.minVillageSpacing){g=!0;break}}if(g||this.terrain.getBiome(u,f)==="dark_frontier")continue;const x=this.terrain.getTerrainHeight(u,f),y={x:u,y:x,z:f,rotation:this._seededRandom(a+l*7)*Math.PI*2,size:2+Math.floor(this._seededRandom(a+l*11)*2),regionKey:i};this._buildVillage(y,n),n.villages.push(y),this.villages.push(y);break}this.regions.set(i,n)}_unloadRegion(t){const e=this.regions.get(t);if(e){for(const i of e.meshes)this.scene.remove(i),i.traverse(n=>{n.geometry&&n.geometry.dispose()});this.villages=this.villages.filter(i=>i.regionKey!==t),this.regions.delete(t)}}_createMaterials(){return{hutWall:new tt({color:9139029,roughness:.9,metalness:0}),hutRoof:new tt({color:10519900,roughness:1,metalness:0}),marketWood:new tt({color:7033668,roughness:.85,metalness:0}),wellStone:new tt({color:7368816,roughness:.95,metalness:0}),wellWood:new tt({color:6045747,roughness:.9,metalness:0}),fenceWood:new tt({color:8021074,roughness:.9,metalness:0})}}_buildVillage(t,e){const i=new zt;i.position.set(t.x,0,t.z),i.rotation.y=t.rotation,this._createWell(i,0,0);const n=t.size;for(let a=0;a<n;a++){const c=a/n*Math.PI*2+Math.random()*.5,l=8+Math.random()*5,h=Math.cos(c)*l,d=Math.sin(c)*l;this._createHut(i,h,d,t)}const s=1+Math.floor(Math.random()*2);for(let a=0;a<s;a++){const c=a/s*Math.PI*2+Math.PI/4+Math.random()*.3,l=5+Math.random()*3;this._createMarketStall(i,Math.cos(c)*l,Math.sin(c)*l,t)}const o=3+Math.floor(Math.random()*3);for(let a=0;a<o;a++){const c=Math.random()*Math.PI*2,l=12+Math.random()*5;this._createFence(i,Math.cos(c)*l,Math.sin(c)*l,c,t)}this.scene.add(i),e.meshes.push(i)}_createHut(t,e,i,n){const s=Math.cos(n.rotation),o=Math.sin(n.rotation),a=n.x+e*s-i*o,c=n.z+e*o+i*s,l=this.terrain.getTerrainHeight(a,c),h=new zt;h.position.set(e,l,i);const d=2.5+Math.random()*.5,u=1.5+Math.random()*.3,f=new re(u,u*1.1,d,12),m=new D(f,this.materials.hutWall);m.position.y=d/2,m.castShadow=!0,m.receiveShadow=!0,h.add(m);const _=1.8,g=new Ze(u*1.4,_,12),p=new D(g,this.materials.hutRoof);p.position.y=d+_/2-.1,p.castShadow=!0,h.add(p);const x=new Lt(.6,1.5,.1),y=new tt({color:2760725}),v=new D(x,y);v.position.set(0,.75,u+.05),h.add(v),h.rotation.y=Math.random()*Math.PI*2,t.add(h)}_createMarketStall(t,e,i,n){const s=Math.cos(n.rotation),o=Math.sin(n.rotation),a=n.x+e*s-i*o,c=n.z+e*o+i*s,l=this.terrain.getTerrainHeight(a,c),h=new zt;h.position.set(e,l,i);const d=2.2,u=new re(.08,.08,d,6),f=2,m=1.5,_=[[-f/2,-m/2],[f/2,-m/2],[-f/2,m/2],[f/2,m/2]];for(const[E,C]of _){const I=new D(u,this.materials.marketWood);I.position.set(E,d/2,C),I.castShadow=!0,h.add(I)}const g=new Lt(f,.1,m),p=new D(g,this.materials.marketWood);p.position.y=.9,p.castShadow=!0,p.receiveShadow=!0,h.add(p);const x=new Ve(f*1.2,m*1.3),y=[12080208,5535160,7051604,13216083],v=new tt({color:y[Math.floor(Math.random()*y.length)],roughness:.8,side:fe}),w=new D(x,v);w.position.y=d+.05,w.rotation.x=-Math.PI/2+.15,w.castShadow=!0,h.add(w),h.rotation.y=Math.random()*Math.PI*2,t.add(h)}_createWell(t,e,i){const n=new zt;n.position.set(e,0,i);const s=new $i(1,.3,8,16),o=new D(s,this.materials.wellStone);o.rotation.x=Math.PI/2,o.position.y=.3,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new re(1,1,.8,12,1,!0),c=new D(a,this.materials.wellStone);c.position.y=.4,c.castShadow=!0,n.add(c);const l=new re(.08,.08,2.5,6),h=new D(l,this.materials.wellWood);h.position.set(.7,1.25,0),h.castShadow=!0,n.add(h);const d=new D(l,this.materials.wellWood);d.position.set(-.7,1.25,0),d.castShadow=!0,n.add(d);const u=new re(.06,.06,1.6,6),f=new D(u,this.materials.wellWood);f.position.y=2.5,f.rotation.z=Math.PI/2,f.castShadow=!0,n.add(f);const m=new Ze(1.2,.6,4),_=new D(m,this.materials.hutRoof);_.position.y=2.9,_.rotation.y=Math.PI/4,_.castShadow=!0,n.add(_);const g=new Fn(.85,12),p=new tt({color:1716304,roughness:.3,metalness:.1}),x=new D(g,p);x.rotation.x=-Math.PI/2,x.position.y=.1,n.add(x),t.add(n)}_createFence(t,e,i,n,s){const o=Math.cos(s.rotation),a=Math.sin(s.rotation),c=s.x+e*o-i*a,l=s.z+e*a+i*o,h=this.terrain.getTerrainHeight(c,l),d=new zt;d.position.set(e,h,i),d.rotation.y=n;const u=3+Math.random()*2,f=Math.ceil(u/1.2),m=u/(f-1),_=new re(.06,.07,1,6);for(let y=0;y<f;y++){const v=new D(_,this.materials.fenceWood);v.position.set(y*m-u/2,.5,0),v.castShadow=!0,d.add(v)}const g=new Lt(u,.08,.06),p=new D(g,this.materials.fenceWood);p.position.y=.3,p.castShadow=!0,d.add(p);const x=new D(g,this.materials.fenceWood);x.position.y=.7,x.castShadow=!0,d.add(x),t.add(d)}getVillages(){return this.villages}isNearVillage(t,e,i=20){for(const n of this.villages){const s=t-n.x,o=e-n.z;if(Math.sqrt(s*s+o*o)<i)return!0}return!1}getLoadedRegionCount(){return this.regions.size}dispose(){for(const[t]of this.regions)this._unloadRegion(t);for(const t of Object.values(this.materials))t.dispose()}}class xv{constructor(t,e,i=[]){this.scene=t,this.terrain=e,this.colliders=i,this.regionSize=150,this.loadDistance=2,this.unloadDistance=3,this.minDistFromCastle=80,this.ruinsPerRegion=1,this.maxSlopeForRuins=.4,this.minRuinsSpacing=60,this.materials=this._createMaterials(),this.regions=new Map,this.ruins=[],this.lastPlayerRegionX=null,this.lastPlayerRegionZ=null,this.update(0,0),console.log("[RuinsManager] Initialized with region-based generation")}_seededRandom(t){const e=Math.sin(t*12.9898+78.233)*43758.5453;return e-Math.floor(e)}_regionKey(t,e){return`${t},${e}`}_worldToRegion(t,e){return{rx:Math.floor(t/this.regionSize),rz:Math.floor(e/this.regionSize)}}update(t,e){const{rx:i,rz:n}=this._worldToRegion(t,e);if(i===this.lastPlayerRegionX&&n===this.lastPlayerRegionZ)return;this.lastPlayerRegionX=i,this.lastPlayerRegionZ=n;const s=new Set;for(let a=-this.loadDistance;a<=this.loadDistance;a++)for(let c=-this.loadDistance;c<=this.loadDistance;c++){const l=i+a,h=n+c,d=this._regionKey(l,h);s.add(d),this.regions.has(d)||this._loadRegion(l,h)}const o=[];for(const[a]of this.regions){const[c,l]=a.split(",").map(Number),h=Math.abs(c-i),d=Math.abs(l-n);(h>this.unloadDistance||d>this.unloadDistance)&&o.push(a)}for(const a of o)this._unloadRegion(a)}_loadRegion(t,e){const i=this._regionKey(t,e);if(this.regions.has(i))return;const n={ruins:[],meshes:[],localColliders:[]},s=t*this.regionSize,o=e*this.regionSize,a=t*48271+e*16807,c=15;for(let l=0;l<c;l++){const h=this._seededRandom(a+l*3),d=this._seededRandom(a+l*3+1),u=s+h*this.regionSize,f=o+d*this.regionSize;if(Math.sqrt(u*u+f*f)<this.minDistFromCastle||this.terrain.getTerrainSlope(u,f)>this.maxSlopeForRuins)continue;let g=!1;for(const w of this.ruins){const E=u-w.x,C=f-w.z;if(Math.sqrt(E*E+C*C)<this.minRuinsSpacing){g=!0;break}}if(g)continue;const p=this.terrain.getBiome(u,f);if(p==="safe_meadow"||p==="castle")continue;const x=this.terrain.getTerrainHeight(u,f),y=["temple","monument","shrine","graveyard"],v={x:u,y:x,z:f,rotation:this._seededRandom(a+l*7)*Math.PI*2,type:y[Math.floor(this._seededRandom(a+l*11)*y.length)],enemyCampRadius:15+this._seededRandom(a+l*13)*10,regionKey:i};this._buildRuin(v,n),n.ruins.push(v),this.ruins.push(v);break}this.regions.set(i,n)}_unloadRegion(t){const e=this.regions.get(t);if(e){for(const i of e.meshes)this.scene.remove(i),i.traverse(n=>{n.geometry&&n.geometry.dispose()});for(const i of e.localColliders){const n=this.colliders.indexOf(i);n>=0&&this.colliders.splice(n,1)}this.ruins=this.ruins.filter(i=>i.regionKey!==t),this.regions.delete(t)}}_createMaterials(){return{ancientStone:new tt({color:5921370,roughness:.95,metalness:0}),mossyStone:new tt({color:4870208,roughness:1,metalness:0}),crackedStone:new tt({color:6973536,roughness:.9,metalness:0}),altarStone:new tt({color:3814709,roughness:.85,metalness:.05}),runeGlow:new tt({color:4491434,emissive:4491434,emissiveIntensity:.3,roughness:.5,metalness:.2})}}_buildRuin(t,e){const i=new zt;switch(i.position.set(t.x,0,t.z),i.rotation.y=t.rotation,t.type){case"temple":this._createTempleRuin(i,t,e);break;case"monument":this._createMonumentRuin(i,t,e);break;case"shrine":this._createShrineRuin(i,t,e);break;case"graveyard":this._createGraveyardRuin(i,t,e);break}this.scene.add(i),e.meshes.push(i)}_createTempleRuin(t,e,i){const n=Math.cos(e.rotation),s=Math.sin(e.rotation);this._createAltar(t,0,0,e,i);const o=[[-6,-4],[-6,4],[6,-4],[6,4],[-6,0],[6,0],[-3,-4],[-3,4],[3,-4],[3,4]];for(const[a,c]of o){const l=e.x+a*n-c*s,h=e.z+a*s+c*n,d=this.terrain.getTerrainHeight(l,h),f=Math.random()>.4?1+Math.random()*2:3.5+Math.random();this._createColumn(t,a,c,f,d,e,i)}this._createCollapsedWall(t,-8,0,Math.PI/2,e,i),this._createCollapsedWall(t,8,0,-Math.PI/2,e,i)}_createMonumentRuin(t,e,i){const n=this.terrain.getTerrainHeight(e.x,e.z);this._createObelisk(t,0,0,n,i,e);const s=6,o=Math.cos(e.rotation),a=Math.sin(e.rotation);for(let c=0;c<s;c++){const l=c/s*Math.PI*2,h=5,d=Math.cos(l)*h,u=Math.sin(l)*h,f=e.x+d*o-u*a,m=e.z+d*a+u*o,_=this.terrain.getTerrainHeight(f,m),g=Math.random()>.2?.8+Math.random()*1.5:3+Math.random();this._createColumn(t,d,u,g,_,e,i)}this._createDebris(t,3,2,e),this._createDebris(t,-2,4,e)}_createShrineRuin(t,e,i){this._createSmallAltar(t,0,0,e,i);const n=Math.cos(e.rotation),s=Math.sin(e.rotation);for(const o of[-1,1]){const a=o*3,c=e.x+a*n,l=e.z+a*s,h=this.terrain.getTerrainHeight(c,l),d=2+Math.random()*1.5;this._createColumn(t,a,0,d,h,e,i)}this._createOfferingStones(t,0,2,e)}_createGraveyardRuin(t,e,i){const n=Math.cos(e.rotation),s=Math.sin(e.rotation);this._createMausoleum(t,0,0,e,i);const o=8+Math.floor(Math.random()*5);for(let a=0;a<o;a++){const c=Math.random()*Math.PI*2,l=4+Math.random()*6,h=Math.cos(c)*l,d=Math.sin(c)*l,u=e.x+h*n-d*s,f=e.z+h*s+d*n,m=this.terrain.getTerrainHeight(u,f);this._createHeadstone(t,h,d,m)}}_createColumn(t,e,i,n,s,o,a){const c=new zt;c.position.set(e,s,i);const l=new re(.7,.8,.4,8),h=new D(l,this.materials.ancientStone);h.position.y=.2,h.castShadow=!0,h.receiveShadow=!0,c.add(h);const d=new re(.5,.55,n,8),u=new D(d,this.materials.mossyStone);if(u.position.y=.4+n/2,u.castShadow=!0,u.receiveShadow=!0,c.add(u),n>2.5){const x=new re(.65,.55,.3,8),y=new D(x,this.materials.crackedStone);y.position.y=.4+n+.15,y.castShadow=!0,c.add(y)}const f=Math.cos(o.rotation),m=Math.sin(o.rotation),_=o.x+e*f-i*m,g=o.z+e*m+i*f,p={type:"cylinder",position:new b(_,s,g),radius:.6,height:n+.5};this.colliders.push(p),a.localColliders.push(p),t.add(c)}_createCollapsedWall(t,e,i,n,s,o){const a=Math.cos(s.rotation),c=Math.sin(s.rotation),l=s.x+e*a-i*c,h=s.z+e*c+i*a,d=this.terrain.getTerrainHeight(l,h),u=new zt;u.position.set(e,d,i),u.rotation.y=n;const f=1.5+Math.random(),m=4+Math.random()*2,_=new Lt(m,f,.6),g=new D(_,this.materials.mossyStone);g.position.y=f/2,g.castShadow=!0,g.receiveShadow=!0,u.add(g);for(let x=0;x<3;x++){const y=.3+Math.random()*.4,v=new Lt(y,y*.7,y),w=new D(v,this.materials.crackedStone);w.position.set((Math.random()-.5)*m,y*.35,.6+Math.random()*.5),w.rotation.set(Math.random()*.3,Math.random()*Math.PI,Math.random()*.3),w.castShadow=!0,u.add(w)}const p={type:"box",bounds:new ri(new b(l-m/2,d,h-.5),new b(l+m/2,d+f,h+.5))};this.colliders.push(p),o.localColliders.push(p),t.add(u)}_createAltar(t,e,i,n,s){const o=Math.cos(n.rotation),a=Math.sin(n.rotation),c=n.x+e*o-i*a,l=n.z+e*a+i*o,h=this.terrain.getTerrainHeight(c,l),d=new zt;d.position.set(e,h,i);const u=new Lt(3,.4,2.5),f=new D(u,this.materials.altarStone);f.position.y=.2,f.castShadow=!0,f.receiveShadow=!0,d.add(f);const m=new Lt(2,.6,1.5),_=new D(m,this.materials.altarStone);_.position.y=.7,_.castShadow=!0,_.receiveShadow=!0,d.add(_);const g=new Ve(1.2,.8),p=new D(g,this.materials.runeGlow);p.rotation.x=-Math.PI/2,p.position.y=1.01,d.add(p);const x=new Be(4491434,.5,8);x.position.y=1.5,d.add(x);const y={type:"box",bounds:new ri(new b(c-1.5,h,l-1.25),new b(c+1.5,h+1.2,l+1.25))};this.colliders.push(y),s.localColliders.push(y),t.add(d)}_createSmallAltar(t,e,i,n,s){const o=Math.cos(n.rotation),a=Math.sin(n.rotation),c=n.x+e*o-i*a,l=n.z+e*a+i*o,h=this.terrain.getTerrainHeight(c,l),d=new zt;d.position.set(e,h,i);const u=new re(.6,.8,.8,8),f=new D(u,this.materials.altarStone);f.position.y=.4,f.castShadow=!0,f.receiveShadow=!0,d.add(f);const m=new $i(.3,.08,8,12),_=new D(m,this.materials.ancientStone);_.rotation.x=Math.PI/2,_.position.y=.85,d.add(_);const g=new Be(4491434,.3,5);g.position.y=1.2,d.add(g);const p={type:"cylinder",position:new b(c,h,l),radius:.9,height:1};this.colliders.push(p),s.localColliders.push(p),t.add(d)}_createOfferingStones(t,e,i,n){const s=Math.cos(n.rotation),o=Math.sin(n.rotation);for(let a=0;a<3;a++){const c=a/3*Math.PI*2,l=1.2,h=e+Math.cos(c)*l,d=i+Math.sin(c)*l,u=n.x+h*s-d*o,f=n.z+h*o+d*s,m=this.terrain.getTerrainHeight(u,f),_=new Vt(.15+Math.random()*.1,6,6),g=new D(_,this.materials.crackedStone);g.position.set(h,m+.1,d),g.scale.y=.6,g.castShadow=!0,t.add(g)}}_createObelisk(t,e,i,n,s,o){const a=new zt;a.position.set(e,n,i);const c=new Lt(2.5,.6,2.5),l=new D(c,this.materials.altarStone);l.position.y=.3,l.castShadow=!0,l.receiveShadow=!0,a.add(l);const h=6+Math.random()*2,d=new re(.3,.8,h,4),u=new D(d,this.materials.ancientStone);u.position.y=.6+h/2,u.rotation.y=Math.PI/4,u.castShadow=!0,u.receiveShadow=!0,a.add(u);const f=new Ze(.4,.6,4),m=new D(f,this.materials.runeGlow);m.position.y=.6+h+.3,m.rotation.y=Math.PI/4,a.add(m);const _=new Be(4491434,.8,12);_.position.y=h+1,a.add(_);const g={type:"box",bounds:new ri(new b(o.x+e-1.25,n,o.z+i-1.25),new b(o.x+e+1.25,n+h+1,o.z+i+1.25))};this.colliders.push(g),s.localColliders.push(g),t.add(a)}_createDebris(t,e,i,n){const s=Math.cos(n.rotation),o=Math.sin(n.rotation),a=n.x+e*s-i*o,c=n.z+e*o+i*s,l=this.terrain.getTerrainHeight(a,c),h=new zt;h.position.set(e,l,i);const d=3+Math.floor(Math.random()*3);for(let u=0;u<d;u++){const f=.2+Math.random()*.4,m=new Lt(f,f*.6,f*.8),_=new D(m,this.materials.crackedStone);_.position.set((Math.random()-.5)*2,f*.3,(Math.random()-.5)*2),_.rotation.set(Math.random()*.4,Math.random()*Math.PI,Math.random()*.4),_.castShadow=!0,h.add(_)}t.add(h)}_createMausoleum(t,e,i,n,s){const o=Math.cos(n.rotation),a=Math.sin(n.rotation),c=n.x+e*o-i*a,l=n.z+e*a+i*o,h=this.terrain.getTerrainHeight(c,l),d=new zt;d.position.set(e,h,i);const u=new Lt(5,.3,4),f=new D(u,this.materials.altarStone);f.position.y=.15,f.castShadow=!0,f.receiveShadow=!0,d.add(f);const m=new Lt(5,2.5,.4),_=new D(m,this.materials.mossyStone);_.position.set(0,1.55,-1.8),_.castShadow=!0,_.receiveShadow=!0,d.add(_);const g=new Lt(.4,1.8,3.2),p=new D(g,this.materials.mossyStone);p.position.set(-2.3,1.2,-.2),p.castShadow=!0,p.receiveShadow=!0,d.add(p);const x=new Lt(.4,2.2,3.2),y=new D(x,this.materials.mossyStone);y.position.set(2.3,1.4,-.2),y.castShadow=!0,y.receiveShadow=!0,d.add(y);const v=new Lt(2.2,.8,1.2),w=new D(v,this.materials.altarStone);w.position.set(0,.7,-.5),w.castShadow=!0,w.receiveShadow=!0,d.add(w);const E=new Lt(2.3,.2,1.3),C=new D(E,this.materials.ancientStone);C.position.set(.1,1.2,-.4),C.rotation.y=.08,C.castShadow=!0,d.add(C);const I={type:"box",bounds:new ri(new b(c-2.5,h,l-2),new b(c+2.5,h+2.8,l+2))};this.colliders.push(I),s.localColliders.push(I),t.add(d)}_createHeadstone(t,e,i,n){const s=new zt;s.position.set(e,n,i),s.rotation.y=Math.random()*.4-.2;const o=.6+Math.random()*.4,a=.4+Math.random()*.3,c=new Lt(a,o,.12),l=new D(c,this.materials.mossyStone);l.position.y=o/2,Math.random()>.6&&(l.rotation.x=(Math.random()-.5)*.3,l.rotation.z=(Math.random()-.5)*.2),l.castShadow=!0,s.add(l),t.add(s)}getRuins(){return this.ruins}isNearRuin(t,e,i=15){for(const n of this.ruins){const s=t-n.x,o=e-n.z;if(Math.sqrt(s*s+o*o)<i)return!0}return!1}getNearbyRuin(t,e,i=20){for(const n of this.ruins){const s=t-n.x,o=e-n.z;if(Math.sqrt(s*s+o*o)<i)return n}return null}getLoadedRegionCount(){return this.regions.size}dispose(){for(const[t]of this.regions)this._unloadRegion(t);for(const t of Object.values(this.materials))t.dispose()}}class yv{constructor(t,e){this.scene=t,this.terrain=e,this.regionSize=150,this.loadDistance=2,this.unloadDistance=4,this.minDistFromCastle=150,this.cavesPerRegion=1,this.minCaveSpacing=80,this.minSlopeForCave=.25,this.maxSlopeForCave=.9,this.materials=this._createMaterials(),this.regions=new Map,this.caves=[],this.lastPlayerRegionX=null,this.lastPlayerRegionZ=null,this.update(0,0),console.log("[CaveManager] Initialized with region-based generation")}_seededRandom(t){const e=Math.sin(t*12.9898+78.233)*43758.5453;return e-Math.floor(e)}_regionKey(t,e){return`${t},${e}`}_worldToRegion(t,e){return{rx:Math.floor(t/this.regionSize),rz:Math.floor(e/this.regionSize)}}update(t,e){const{rx:i,rz:n}=this._worldToRegion(t,e);if(i===this.lastPlayerRegionX&&n===this.lastPlayerRegionZ)return;this.lastPlayerRegionX=i,this.lastPlayerRegionZ=n;const s=new Set;for(let a=-this.loadDistance;a<=this.loadDistance;a++)for(let c=-this.loadDistance;c<=this.loadDistance;c++){const l=i+a,h=n+c,d=this._regionKey(l,h);s.add(d),this.regions.has(d)||this._loadRegion(l,h)}const o=[];for(const[a]of this.regions){const[c,l]=a.split(",").map(Number),h=Math.abs(c-i),d=Math.abs(l-n);(h>this.unloadDistance||d>this.unloadDistance)&&o.push(a)}for(const a of o)this._unloadRegion(a)}_loadRegion(t,e){const i=this._regionKey(t,e);if(this.regions.has(i))return;const n={caves:[],meshes:[]},s=t*this.regionSize,o=e*this.regionSize,a=t*73856093+e*19349663+54321,c=25;for(let l=0;l<c;l++){const h=this._seededRandom(a+l*3),d=this._seededRandom(a+l*3+1),u=s+h*this.regionSize,f=o+d*this.regionSize;if(Math.sqrt(u*u+f*f)<this.minDistFromCastle)continue;const _=this.terrain.getTerrainSlope(u,f);if(_<this.minSlopeForCave||_>this.maxSlopeForCave)continue;let g=!1;for(const w of this.caves){const E=u-w.x,C=f-w.z;if(Math.sqrt(E*E+C*C)<this.minCaveSpacing){g=!0;break}}if(g)continue;const p=this.terrain.getTerrainHeight(u,f),x=Math.atan2(-u,-f),y=this._seededRandom(a+l*7)<.5?"crystal":"torch",v={x:u,y:p,z:f,rotation:x,type:y,size:1.5+this._seededRandom(a+l*11)*.5,regionKey:i};this._buildCaveEntrance(v,n),n.caves.push(v),this.caves.push(v);break}this.regions.set(i,n)}_unloadRegion(t){const e=this.regions.get(t);if(e){for(const i of e.meshes)this.scene.remove(i),i.traverse(n=>{n.geometry&&n.geometry.dispose()});this.caves=this.caves.filter(i=>i.regionKey!==t),this.regions.delete(t)}}_createMaterials(){return{caveRock:new tt({color:1710618,roughness:1,metalness:0}),frameRock:new tt({color:3814704,roughness:.95,metalness:0}),moss:new tt({color:2768928,roughness:.9,metalness:0}),crystalCyan:new tt({color:65535,emissive:43690,emissiveIntensity:.8,roughness:.3,metalness:.2}),crystalPurple:new tt({color:11167487,emissive:7816362,emissiveIntensity:.8,roughness:.3,metalness:.2}),torchWood:new tt({color:4861984,roughness:.9,metalness:0})}}_buildCaveEntrance(t,e){const i=new zt;i.position.set(t.x,t.y,t.z),i.rotation.y=t.rotation;const n=t.size;this._createCaveOpening(i,n),this._createRockyFrame(i,n),this._createDebris(i,n),t.type==="crystal"?this._createCrystalMarkers(i,n):this._createTorchMarkers(i,n),this._createAtmosphere(i,t),this.scene.add(i),e.meshes.push(i)}_createCaveOpening(t,e){const i=3.5*e,n=4*e,s=5*e,o=new Fn(i*.8,16,0,Math.PI),a=new D(o,this.materials.caveRock);a.rotation.x=-.2,a.position.set(0,n*.5,-s*.5),a.scale.y=1.2,t.add(a);const c=new Fn(i*.5,12,0,Math.PI),l=new $t({color:328965}),h=new D(c,l);h.rotation.x=-.3,h.position.set(0,n*.45,-s*.8),h.scale.y=1.1,t.add(h);const d=new Ve(i*1.5,s),u=new D(d,this.materials.caveRock);u.rotation.x=-Math.PI/2,u.position.set(0,.02,-s*.3),u.receiveShadow=!0,t.add(u)}_createRockyFrame(t,e){const i=3.5*e,n=4*e;this._createRockFormation(t,-i*.7,0,0,e*1.2,n*.9),this._createRockFormation(t,i*.7,0,0,e*1,n*.85);const s=4+Math.floor(Math.random()*3);for(let o=0;o<s;o++){const a=o/(s-1),c=Qt.lerp(-i*.6,i*.6,a),l=n*(.6+Math.sin(a*Math.PI)*.35),h=-.5+Math.random()*.5,d=.4+Math.random()*.4;this._createBoulder(t,c,l,h,d*e)}this._createOverhang(t,e)}_createRockFormation(t,e,i,n,s,o){const a=new zt;a.position.set(e,i,n);const c=3+Math.floor(Math.random()*2);let l=0;for(let h=0;h<c;h++){const d=o/c*(.8+Math.random()*.4),u=s*(.8-h*.1)*(.8+Math.random()*.3),f=new mo(u,0),m=new D(f,this.materials.frameRock);m.position.y=l+d*.5,m.rotation.set(Math.random(),Math.random(),Math.random()),m.scale.y=d/u,m.castShadow=!0,m.receiveShadow=!0,a.add(m),l+=d*.7}t.add(a)}_createBoulder(t,e,i,n,s){const o=new mo(s,0),a=new D(o,this.materials.frameRock);a.position.set(e,i,n),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),a.scale.set(.8+Math.random()*.4,.6+Math.random()*.3,.8+Math.random()*.4),a.castShadow=!0,a.receiveShadow=!0,t.add(a)}_createOverhang(t,e){const i=4*e,n=new Lt(5*e,.8*e,3*e),s=new D(n,this.materials.frameRock);s.position.set(0,i+.5*e,-1*e),s.rotation.x=.15,s.rotation.z=(Math.random()-.5)*.1,s.castShadow=!0,t.add(s);const o=new Ve(1.5*e,1*e),a=new D(o,this.materials.moss);a.position.set(-1*e,i+.1*e,.5*e),a.rotation.x=-Math.PI/2+.3,t.add(a)}_createDebris(t,e){const i=8+Math.floor(Math.random()*6);for(let n=0;n<i;n++){const s=Math.random()*Math.PI-Math.PI/2,o=2+Math.random()*4,a=Math.sin(s)*o*e,c=Math.cos(s)*o*e,l=.15+Math.random()*.35;this._createBoulder(t,a,l*e*.3,c,l*e)}Math.random()<.7&&this._createBoneScatter(t,e)}_createBoneScatter(t,e){const i=new tt({color:13682872,roughness:.9}),n=3+Math.floor(Math.random()*4);for(let s=0;s<n;s++){const o=(Math.random()-.5)*3*e,a=1+Math.random()*2*e,c=new re(.03*e,.04*e,.4*e,6),l=new D(c,i);l.position.set(o,.02,a),l.rotation.x=Math.PI/2,l.rotation.z=Math.random()*Math.PI,t.add(l)}}_createCrystalMarkers(t,e){const i=[{x:-2.2,y:.3,z:.5,size:.6,angle:.4},{x:2.5,y:.5,z:.8,size:.5,angle:-.3},{x:-1.5,y:2.5,z:-.3,size:.35,angle:.6},{x:1.8,y:2.8,z:-.5,size:.4,angle:-.5},{x:0,y:.2,z:2,size:.45,angle:.2}];for(const n of i)Math.random()<.7&&this._createCrystal(t,n.x*e,n.y*e,n.z*e,n.size*e,n.angle);this._createCrystalCluster(t,-1.8*e,0,1.5*e,e*.7)}_createCrystal(t,e,i,n,s,o){const a=Math.random()<.6?this.materials.crystalCyan:this.materials.crystalPurple,c=new Gn(s,0);c.scale(1,2.5,1);const l=new D(c,a);l.position.set(e,i+s*1.2,n),l.rotation.z=o,l.rotation.y=Math.random()*Math.PI,l.castShadow=!0,t.add(l);const h=a===this.materials.crystalCyan?65535:11167487,d=new Be(h,.5,5*s);d.position.copy(l.position),t.add(d)}_createCrystalCluster(t,e,i,n,s){const o=new zt;o.position.set(e,i,n);const a=4+Math.floor(Math.random()*3);for(let l=0;l<a;l++){const h=(Math.random()-.5)*s,d=(Math.random()-.5)*s,u=(.15+Math.random()*.25)*s,f=(Math.random()-.5)*.8,m=Math.random()<.5?this.materials.crystalCyan:this.materials.crystalPurple,_=new Gn(u,0);_.scale(1,2+Math.random(),1);const g=new D(_,m);g.position.set(h,u*1.2,d),g.rotation.z=f,g.rotation.y=Math.random()*Math.PI*2,o.add(g)}const c=new Be(4513245,1,8);c.position.set(0,s*.5,0),o.add(c),t.add(o)}_createTorchMarkers(t,e){const i=[{x:-2.5,y:0,z:1,wallMount:!1},{x:2.5,y:0,z:1,wallMount:!1},{x:-1.5,y:2.5,z:0,wallMount:!0},{x:1.5,y:2.5,z:0,wallMount:!0}];for(const n of i)this._createTorch(t,n.x*e,n.y*e,n.z*e,e,n.wallMount)}_createTorch(t,e,i,n,s,o){const a=new zt;if(a.position.set(e,i,n),o){const x=new Lt(.1*s,.1*s,.3*s),y=new D(x,this.materials.torchWood);a.add(y)}const c=o?.6*s:1.2*s,l=new re(.05*s,.07*s,c,6),h=new D(l,this.materials.torchWood);h.position.y=c/2,h.castShadow=!0,a.add(h);const d=new re(.08*s,.12*s,.25*s,8),u=new tt({color:3351057}),f=new D(d,u);f.position.y=c+.1*s,a.add(f);const m=new Be(16737826,1.5,10);m.position.y=c+.2*s,m.castShadow=!1,a.add(m);const _=new Vt(.06*s,8,8),g=new $t({color:16729088});for(let x=0;x<4;x++){const y=new D(_,g);y.position.set((Math.random()-.5)*.1*s,c+.15*s+Math.random()*.15*s,(Math.random()-.5)*.1*s),a.add(y)}const p=()=>{requestAnimationFrame(p),m.intensity=1.3+Math.sin(Date.now()*.015)*.4+Math.random()*.2};p(),t.add(a)}_createAtmosphere(t,e){const i=new Be(2236979,.3,8);i.position.set(0,2,-2),t.add(i);const n=new Ve(6*e.size,3*e.size),s=new $t({color:8947865,transparent:!0,opacity:.15,side:fe,depthWrite:!1}),o=new D(n,s);o.position.set(0,1.5*e.size,-1),o.rotation.y=Math.PI,t.add(o);const a=()=>{requestAnimationFrame(a),o.position.x=Math.sin(Date.now()*5e-4)*.2,o.material.opacity=.1+Math.sin(Date.now()*.001)*.05};a()}getCaves(){return this.caves}isNearCave(t,e,i=15){for(const n of this.caves){const s=t-n.x,o=e-n.z;if(Math.sqrt(s*s+o*o)<i)return!0}return!1}getNearestCave(t,e){let i=null,n=1/0;for(const s of this.caves){const o=t-s.x,a=e-s.z,c=Math.sqrt(o*o+a*a);c<n&&(n=c,i=s)}return i?{cave:i,distance:n}:null}getLoadedRegionCount(){return this.regions.size}dispose(){for(const[t]of this.regions)this._unloadRegion(t);for(const t of Object.values(this.materials))t.dispose()}}class vv{constructor(t,e,i){this.scene=t,this.terrain=e,this.villageManager=i,this.npcsPerVillage={min:2,max:3},this.npcTypes=[{type:"merchant",bodyColor:3368618,headColor:13935988,role:"Sells goods"},{type:"guard",bodyColor:5592405,headColor:12883306,role:"Protects village"},{type:"villager",bodyColor:7033668,headColor:14530710,role:"Common folk"},{type:"elder",bodyColor:5583718,headColor:13213824,role:"Village wisdom"},{type:"blacksmith",bodyColor:3355443,headColor:13934720,role:"Crafts weapons"}],this.materials=new Map,this.npcs=[],this.meshes=[],this._populateVillages()}_getOrCreateMaterial(t,e=.8){const i=`${t.toString(16)}_${e}`;return this.materials.has(i)||this.materials.set(i,new tt({color:t,roughness:e,metalness:.1})),this.materials.get(i)}_populateVillages(){const t=this.villageManager.getVillages();for(const e of t)this._populateVillage(e);console.log(`[NPCManager] Created ${this.npcs.length} NPCs across ${t.length} villages`)}_populateVillage(t){const e=this.npcsPerVillage.min+Math.floor(Math.random()*(this.npcsPerVillage.max-this.npcsPerVillage.min+1)),i=[];for(i.push(this.npcTypes[0]),e>1&&i.push(this.npcTypes[1]);i.length<e;){const n=this.npcTypes[Math.floor(Math.random()*this.npcTypes.length)];i.push(n)}for(let n=0;n<e;n++){const s=n/e*Math.PI*2+Math.random()*.5,o=3+Math.random()*5,a=Math.cos(s)*o,c=Math.sin(s)*o,l=Math.cos(t.rotation),h=Math.sin(t.rotation),d=t.x+a*l-c*h,u=t.z+a*h+c*l,f=this.terrain.getTerrainHeight(d,u),m=i[n],_=this._createNPC(d,f,u,m,t);this.npcs.push(_)}}_createNPC(t,e,i,n,s){const o=new zt;o.position.set(t,e,i);const a=1.4+Math.random()*.2,c=.25+Math.random()*.05,l=.18+Math.random()*.02,h=.6,d=this._getOrCreateMaterial(n.bodyColor),u=new re(c,c*.9,a-c*2,12),f=new D(u,d);f.position.y=h+a/2,f.castShadow=!0,f.receiveShadow=!0,o.add(f);const m=new Vt(c,12,8,0,Math.PI*2,0,Math.PI/2),_=new D(m,d);_.position.y=h+a-c,_.castShadow=!0,o.add(_);const g=new Vt(c*.9,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),p=new D(g,d);p.position.y=h+c,p.castShadow=!0,o.add(p);const x=this._getOrCreateMaterial(n.headColor,.6),y=new Vt(l,12,10),v=new D(y,x);v.position.y=h+a+l*.7,v.castShadow=!0,o.add(v);const w=this._getOrCreateMaterial(4469538,.9),E=new re(c*.35,c*.3,h,8),C=c*.5,I=new D(E,w);I.position.set(-C,h/2,0),I.castShadow=!0,o.add(I);const M=new D(E,w);M.position.set(C,h/2,0),M.castShadow=!0,o.add(M);const T=a*.4,P=c*.25,O=new re(P,P*.8,T,8),B=new D(O,d);B.position.set(-c-P,h+a*.7,0),B.rotation.z=.3,B.castShadow=!0,o.add(B);const W=new D(O,d);W.position.set(c+P,h+a*.7,0),W.rotation.z=-.3,W.castShadow=!0,o.add(W),this._addAccessories(o,n,h,a,c);const H=Math.atan2(s.x-t,s.z-i);return o.rotation.y=H+(Math.random()-.5)*.5,this.scene.add(o),this.meshes.push(o),{mesh:o,type:n.type,role:n.role,position:new b(t,e,i),villageX:s.x,villageZ:s.z}}_addAccessories(t,e,i,n,s){switch(e.type){case"merchant":this._addApron(t,i,n,s);break;case"guard":this._addHelmet(t,i,n),this._addSpear(t,i,n,s);break;case"blacksmith":this._addApron(t,i,n,s,2236962),this._addHammer(t,i,n,s);break;case"elder":this._addStaff(t,i,n,s);break}}_addApron(t,e,i,n,s=14540236){const o=this._getOrCreateMaterial(s,.9),a=new Lt(n*1.8,i*.5,.05),c=new D(a,o);c.position.set(0,e+i*.35,n+.03),c.castShadow=!0,t.add(c)}_addHelmet(t,e,i){const n=this._getOrCreateMaterial(6710886,.4),s=new Vt(.22,12,8,0,Math.PI*2,0,Math.PI/2),o=new D(s,n);o.position.y=e+i+.2,o.castShadow=!0,t.add(o);const a=new $i(.22,.03,8,16),c=new D(a,n);c.position.y=e+i+.1,c.rotation.x=Math.PI/2,t.add(c)}_addSpear(t,e,i,n){const s=this._getOrCreateMaterial(6045747,.9),o=this._getOrCreateMaterial(8947848,.3),a=2.2,c=new re(.03,.03,a,6),l=new D(c,s);l.position.set(n+.15,e+a/2,0),l.castShadow=!0,t.add(l);const h=new Ze(.06,.2,6),d=new D(h,o);d.position.set(n+.15,e+a+.1,0),d.castShadow=!0,t.add(d)}_addHammer(t,e,i,n){const s=this._getOrCreateMaterial(6045747,.9),o=this._getOrCreateMaterial(5592405,.4),a=new re(.025,.025,.5,6),c=new D(a,s);c.position.set(n+.3,e+i*.5,.1),c.rotation.z=.3,c.castShadow=!0,t.add(c);const l=new Lt(.15,.08,.08),h=new D(l,o);h.position.set(n+.4,e+i*.65,.1),h.rotation.z=.3,h.castShadow=!0,t.add(h)}_addStaff(t,e,i,n){const s=this._getOrCreateMaterial(4861984,.9),o=1.6,a=new re(.04,.035,o,6),c=new D(a,s);c.position.set(n+.2,o/2,.15),c.rotation.z=.1,c.castShadow=!0,t.add(c);const l=new Vt(.06,8,6),h=new D(l,s);h.position.set(n+.2+o*.05,o+.02,.15),h.castShadow=!0,t.add(h)}getNPCs(){return this.npcs}getNPCAt(t,e,i=1.5){for(const n of this.npcs){const s=t-n.position.x,o=e-n.position.z;if(Math.sqrt(s*s+o*o)<i)return n}return null}getNPCsInVillage(t,e,i=25){return this.npcs.filter(n=>{const s=n.villageX-t,o=n.villageZ-e;return Math.sqrt(s*s+o*o)<i})}isNearNPC(t,e,i=2){return this.getNPCAt(t,e,i)!==null}update(t){}dispose(){for(const t of this.meshes)this.scene.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose()});for(const t of this.materials.values())t.dispose();this.npcs=[],this.meshes=[],this.materials.clear()}}class Mv{constructor(t){this.scene=t,this.colliders=[],this.floorZones=[],this.stairs=[],this.doors=[],this.hiddenWalls=[],this.ladders=[],this.shortcuts=[],this.bonfirePosition=new b(0,0,0),this.bossArena={active:!1,phase:"idle"},this._createSkybox(),this.terrain=new mv(t),this._createStartingCastle(),this.foliage=new gv(t,this.terrain),this.villages=new _v(t,this.terrain),this.npcManager=new vv(t,this.terrain,this.villages),this.ruinsManager=new xv(t,this.terrain,this.colliders),this.caveManager=new yv(t,this.terrain),this._createLighting(),this.bonfirePosition.y=this.terrain.getTerrainHeight(0,0)}getFloorY(t,e){return this.terrain.getTerrainHeight(t,e)}getTerrainSlope(t,e){return this.terrain.getTerrainSlope(t,e)}getBiome(t,e){return this.terrain.getBiome(t,e)}checkWallCollision(t,e=.4){const i=new b;let n=!1;for(const s of this.colliders)if(s.type==="box"){const o=s.bounds;if(!o)continue;const a=o.min.x-e,c=o.max.x+e,l=o.min.z-e,h=o.max.z+e;if(t.x>a&&t.x<c&&t.z>l&&t.z<h&&t.y>o.min.y-1&&t.y<o.max.y){const d=t.x-a,u=c-t.x,f=t.z-l,m=h-t.z,_=Math.min(d,u,f,m);_===d?i.x-=d:_===u?i.x+=u:_===f?i.z-=f:i.z+=m,n=!0}}else if(s.type==="cylinder"){const o=t.x-s.position.x,a=t.z-s.position.z,c=Math.sqrt(o*o+a*a),l=s.radius+e;if(c<l&&t.y>s.position.y-4&&t.y<s.position.y+s.height){const h=l-c;c>.001&&(i.x+=o/c*h,i.z+=a/c*h),n=!0}}return n?i:null}checkTreeCollision(t,e=.4){return this.foliage?this.foliage.checkTreeCollision(t,e):null}checkCollision(t,e=.4){const i=new b;let n=!1;const s=this.checkWallCollision(t,e);s&&(i.add(s),n=!0);const o=this.checkTreeCollision(t,e);return o&&(i.add(o),n=!0),{collides:n,pushVector:i}}isNearTree(t,e,i=3){return this.foliage?this.foliage.isNearTree(t,e,i):!1}isNearVillage(t,e,i=25){return this.villages?this.villages.isNearVillage(t,e,i):!1}getVillages(){return this.villages?this.villages.getVillages():[]}isNearRuin(t,e,i=15){return this.ruinsManager?this.ruinsManager.isNearRuin(t,e,i):!1}getRuins(){return this.ruinsManager?this.ruinsManager.getRuins():[]}getNearbyRuin(t,e,i=20){return this.ruinsManager?this.ruinsManager.getNearbyRuin(t,e,i):null}isNearCave(t,e,i=15){return this.caveManager?this.caveManager.isNearCave(t,e,i):!1}getCaves(){return this.caveManager?this.caveManager.getCaves():[]}getNearestCave(t,e){return this.caveManager?this.caveManager.getNearestCave(t,e):null}isNearNPC(t,e,i=2){return this.npcManager?this.npcManager.isNearNPC(t,e,i):!1}getNPCAt(t,e,i=1.5){return this.npcManager?this.npcManager.getNPCAt(t,e,i):null}getNPCs(){return this.npcManager?this.npcManager.getNPCs():[]}_createSkybox(){const t=new Vt(500,32,32),e=new Ye({uniforms:{topColor:{value:new vt(4491468)},horizonColor:{value:new vt(8956620)},bottomColor:{value:new vt(6715204)},sunDirection:{value:new b(.5,.7,.3).normalize()},sunColor:{value:new vt(16777181)}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        uniform vec3 sunDirection;
        uniform vec3 sunColor;
        varying vec3 vWorldPosition;
        
        void main() {
          vec3 viewDir = normalize(vWorldPosition);
          float h = viewDir.y;
          
          // Sky gradient
          vec3 sky;
          if (h > 0.0) {
            sky = mix(horizonColor, topColor, pow(h, 0.6));
          } else {
            sky = mix(horizonColor, bottomColor, pow(-h, 0.4));
          }
          
          // Sun glow
          float sunDot = max(0.0, dot(viewDir, sunDirection));
          float sunGlow = pow(sunDot, 128.0) * 2.0 + pow(sunDot, 16.0) * 0.3;
          sky += sunColor * sunGlow;
          
          // Atmospheric haze near horizon
          float haze = 1.0 - abs(h);
          haze = pow(haze, 3.0) * 0.3;
          sky = mix(sky, vec3(0.8, 0.85, 0.9), haze);
          
          gl_FragColor = vec4(sky, 1.0);
        }
      `,side:ni}),i=new D(t,e);this.scene.add(i);const n=new Fn(20,32),s=new $t({color:16777198,transparent:!0,opacity:.9}),o=new D(n,s);o.position.set(150,200,100),o.lookAt(0,0,0),this.scene.add(o)}_createLighting(){const t=new Fd(16775920,2);t.position.set(50,80,30),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=1,t.shadow.camera.far=200,t.shadow.camera.left=-80,t.shadow.camera.right=80,t.shadow.camera.top=80,t.shadow.camera.bottom=-80,t.shadow.bias=-.001,this.scene.add(t);const e=new Wp(6719658,.6);this.scene.add(e);const i=new Fp(8956620,4478259,.5);this.scene.add(i)}_createStartingCastle(){const c=new tt({color:5592405,roughness:.9,metalness:.1}),l=new tt({color:4473924,roughness:.95,metalness:.05}),h=new Ve(36,46),d=new tt({color:3816e3,roughness:.95}),u=new D(h,d);u.rotation.x=-Math.PI/2,u.position.y=.05,u.receiveShadow=!0,this.scene.add(u);const f=(v,w,E,C,I,M)=>{const T=new Lt(C,I,M),P=new D(T,c);P.position.set(v,w+I/2,E),P.castShadow=!0,P.receiveShadow=!0,this.scene.add(P),this.colliders.push({type:"box",bounds:new ri(new b(v-C/2,w,E-M/2),new b(v+C/2,w+I,E+M/2))})},m=(v,w)=>{const E=new re(3.5,4,12,8),C=new D(E,l);C.position.set(v,12/2,w),C.castShadow=!0,C.receiveShadow=!0,this.scene.add(C);const I=new re(8/2+.2,8/2-.3,1.5,8),M=new D(I,c);M.position.set(v,12+.75,w),M.castShadow=!0,this.scene.add(M),this.colliders.push({type:"cylinder",position:new b(v,0,w),radius:8/2,height:12})},_=40/2,g=50/2;f(0,0,-g,40,8,2);const p=34/2;f(-_+p/2+2/2,0,g,p-2,8,2),f(_-p/2-2/2,0,g,p-2,8,2),f(-_,0,0,2,8,50),f(_,0,0,2,8,50),m(-_+8/2,-g+8/2),m(_-8/2,-g+8/2),m(-_+8/2,g-8/2),m(_-8/2,g-8/2),this._createBonfire(0,0,-5);const x=new Lt(7,1.5,2+.5),y=new D(x,l);y.position.set(0,8-.25,g),y.castShadow=!0,this.scene.add(y),console.log("[World] Starting castle created")}_createBonfire(t,e,i){const n=new zt;n.position.set(t,e,i);const s=new $i(.8,.15,8,16),o=new tt({color:3355443,roughness:.9}),a=new D(s,o);a.rotation.x=Math.PI/2,a.position.y=.1,a.castShadow=!0,n.add(a);const c=new tt({color:3809296,roughness:.95});for(let f=0;f<6;f++){const m=new re(.08,.1,.8,6),_=new D(m,c),g=f/6*Math.PI*2;_.position.set(Math.cos(g)*.3,.15,Math.sin(g)*.3),_.rotation.x=Math.PI/2,_.rotation.z=g+Math.PI/2,_.rotation.y=.3,n.add(_)}const l=new Be(16746547,3,15);l.position.y=.8,l.castShadow=!0,n.add(l);const h=()=>{requestAnimationFrame(h),l.intensity=2.5+Math.sin(Date.now()*.01)*.5+Math.random()*.3};h();const d=new Vt(.05,8,8),u=new $t({color:16737792});for(let f=0;f<8;f++){const m=new D(d,u);m.position.set((Math.random()-.5)*.4,.3+Math.random()*.5,(Math.random()-.5)*.4),n.add(m)}this.scene.add(n),this.bonfirePosition.set(t,e,i)}getItemSpawns(){return[]}getNearbyDoor(t){return null}tryOpenDoor(t,e){return!1}getNearbyLadder(t){return null}getNearbyShortcut(t){return null}unlockShortcut(t){return!1}checkHiddenWallHit(t,e){return null}revealHiddenWall(t){}checkInsideIllusoryWall(t){return null}activateBossArena(){return!1}setBossArenaPhase(t){return null}updateBossArena(t,e){return 0}deactivateBossArena(){return!1}isBlockedByFogGate(t){return!1}getBossArenaState(){return{active:!1,phase:"idle"}}dispose(){this.terrain&&this.terrain.dispose(),this.foliage&&this.foliage.dispose(),this.villages&&this.villages.dispose(),this.npcManager&&this.npcManager.dispose(),this.ruinsManager&&this.ruinsManager.dispose(),this.caveManager&&this.caveManager.dispose()}}class Sv{constructor(t){this.keys={},this.mouseButtons={},this.mouseDelta={x:0,y:0},this.isLocked=!1,this.buffer={},this.bufferDuration=.15,this.lmbHoldTime=0,this.lmbHoldStart=0,this.lmbWasHeld=!1,this.chargeThreshold=.4,this.domElement=t,window.addEventListener("keydown",e=>{this.keys[e.code]=!0,this._bufferAction(e.code)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),t.addEventListener("mousedown",e=>{this.mouseButtons[e.button]=!0,this._bufferAction(`mouse${e.button}`),e.button===0&&(this.lmbHoldStart=performance.now(),this.lmbWasHeld=!1)}),t.addEventListener("mouseup",e=>{this.mouseButtons[e.button]=!1,e.button===0&&this.lmbHoldStart>0&&(this.lmbHoldTime=(performance.now()-this.lmbHoldStart)/1e3,this.lmbHoldTime>=this.chargeThreshold&&(this.lmbWasHeld=!0,this._bufferAction("chargedAttack")),this.lmbHoldStart=0)}),t.addEventListener("mousemove",e=>{this.isLocked&&(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY)}),t.addEventListener("click",()=>{this.isLocked||t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault())}_bufferAction(t){this.buffer[t]=this.bufferDuration}update(t){const e=t||.016666666666666666;for(const i in this.buffer)this.buffer[i]-=e,this.buffer[i]<=0&&delete this.buffer[i]}consumeBuffer(t){return this.buffer[t]?(delete this.buffer[t],!0):!1}getMouseDelta(){const t={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}get moveForward(){return this.keys.KeyW}get moveBack(){return this.keys.KeyS}get moveLeft(){return this.keys.KeyA}get moveRight(){return this.keys.KeyD}get dodge(){return this.consumeBuffer("Space")}get lightAttack(){return this.consumeBuffer("mouse0")}get heavyAttack(){return this.consumeBuffer("mouse2")}get block(){return this.keys.ShiftLeft||this.keys.ShiftRight}get lockOn(){return this.consumeBuffer("KeyQ")}get interact(){return this.consumeBuffer("KeyE")}get dashAbility(){return this.consumeBuffer("KeyR")}get parryAbility(){return this.consumeBuffer("KeyF")}get warCryAbility(){return this.consumeBuffer("KeyG")}get chargedAttack(){return this.consumeBuffer("chargedAttack")}get useHealthPotion(){return this.consumeBuffer("Digit1")}get useStaminaPotion(){return this.consumeBuffer("Digit2")}get openEquipment(){return this.consumeBuffer("KeyI")}get isChargingAttack(){return this.mouseButtons[0]&&this.lmbHoldStart>0}getChargeProgress(){if(!this.isChargingAttack)return 0;const t=(performance.now()-this.lmbHoldStart)/1e3;return Math.min(1,t/this.chargeThreshold)}getMovementVector(){let t=0,e=0;this.moveForward&&(e-=1),this.moveBack&&(e+=1),this.moveLeft&&(t-=1),this.moveRight&&(t+=1);const i=Math.sqrt(t*t+e*e);return i>0&&(t/=i,e/=i),{x:t,z:e}}}const gs={GOLD:{id:"gold",name:"Gold",type:"currency",description:"Currency for trading with merchants",color:16766720,emissive:11175936,stackable:!0},HEALTH_POTION:{id:"health-potion",name:"Health Potion",type:"consumable",description:"Restores 50 HP when used",effect:{healAmount:50},color:16729156,emissive:11149858,stackable:!0,maxStack:10,hotkey:"1"},STAMINA_POTION:{id:"stamina-potion",name:"Stamina Potion",type:"consumable",description:"Restores 75 Stamina when used",effect:{staminaAmount:75},color:4521796,emissive:2271778,stackable:!0,maxStack:10,hotkey:"2"},IRON_ORE:{id:"iron-ore",name:"Iron Ore",type:"material",description:"Raw metal for crafting weapons and armor",color:8947865,emissive:4473941,stackable:!0,maxStack:99},DARK_SHARD:{id:"dark-shard",name:"Dark Shard",type:"material",description:"Crystallized corruption. Used in advanced crafting.",color:6693546,emissive:4460936,stackable:!0,maxStack:50},BONE_FRAGMENT:{id:"bone-fragment",name:"Bone Fragment",type:"material",description:"Remains of fallen warriors. Used for crafting.",color:14535850,emissive:8943445,stackable:!0,maxStack:99},SPIRIT_ESSENCE:{id:"spirit-essence",name:"Spirit Essence",type:"material",description:"A wisp of captured soul energy. Rare material.",color:8969727,emissive:4495803,stackable:!0,maxStack:20}},Hh={hollow_soldier:[{itemId:"gold",chance:.9,minQty:5,maxQty:15},{itemId:"health-potion",chance:.15,minQty:1,maxQty:1},{itemId:"bone-fragment",chance:.25,minQty:1,maxQty:2}],berserker:[{itemId:"gold",chance:.95,minQty:10,maxQty:25},{itemId:"health-potion",chance:.2,minQty:1,maxQty:1},{itemId:"stamina-potion",chance:.2,minQty:1,maxQty:1},{itemId:"bone-fragment",chance:.3,minQty:1,maxQty:3},{itemId:"dark-shard",chance:.1,minQty:1,maxQty:1}],sentinel:[{itemId:"gold",chance:1,minQty:20,maxQty:40},{itemId:"health-potion",chance:.25,minQty:1,maxQty:2},{itemId:"iron-ore",chance:.35,minQty:1,maxQty:3},{itemId:"bone-fragment",chance:.4,minQty:2,maxQty:4}],revenant:[{itemId:"gold",chance:.85,minQty:8,maxQty:18},{itemId:"stamina-potion",chance:.2,minQty:1,maxQty:1},{itemId:"dark-shard",chance:.2,minQty:1,maxQty:2},{itemId:"spirit-essence",chance:.1,minQty:1,maxQty:1}],ranged:[{itemId:"gold",chance:.85,minQty:8,maxQty:20},{itemId:"health-potion",chance:.15,minQty:1,maxQty:1},{itemId:"bone-fragment",chance:.2,minQty:1,maxQty:2}],elite:[{itemId:"gold",chance:1,minQty:30,maxQty:60},{itemId:"health-potion",chance:.4,minQty:1,maxQty:2},{itemId:"stamina-potion",chance:.35,minQty:1,maxQty:2},{itemId:"iron-ore",chance:.4,minQty:2,maxQty:4},{itemId:"dark-shard",chance:.3,minQty:1,maxQty:3},{itemId:"spirit-essence",chance:.2,minQty:1,maxQty:1}],boss:[{itemId:"gold",chance:1,minQty:200,maxQty:400},{itemId:"health-potion",chance:1,minQty:3,maxQty:5},{itemId:"stamina-potion",chance:1,minQty:3,maxQty:5},{itemId:"dark-shard",chance:1,minQty:5,maxQty:10},{itemId:"spirit-essence",chance:1,minQty:3,maxQty:5}],default:[{itemId:"gold",chance:.8,minQty:3,maxQty:10},{itemId:"bone-fragment",chance:.15,minQty:1,maxQty:1}]};function bv(r){if(r.isBoss)return"boss";if(r.config?.isElite)return"elite";const t=(r.config?.name||"").toLowerCase();return t.includes("hollow")||t.includes("soldier")?"hollow_soldier":t.includes("berserker")?"berserker":t.includes("sentinel")?"sentinel":t.includes("revenant")?"revenant":t.includes("archer")||t.includes("ranged")?"ranged":"default"}class wv{constructor(t,e){this.scene=t,this.gm=e,this.drops=[],this.inventory={gold:0,items:{},potionHotbar:["health-potion","stamina-potion"]},this.pickupRadius=2,this.notificationQueue=[],this.notificationActive=!1,this._loadInventory(),this._ensureNotificationUI()}_ensureNotificationUI(){if(!document.getElementById("loot-notification")){const t=document.createElement("div");t.id="loot-notification",t.style.cssText=`
        position: fixed;
        bottom: 120px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.85);
        color: #fff;
        padding: 10px 25px;
        border-radius: 6px;
        font-family: 'Georgia', serif;
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 1000;
        border: 1px solid #444;
        text-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
      `,document.body.appendChild(t)}}_loadInventory(){try{const t=localStorage.getItem("ashen_inventory");if(t){const e=JSON.parse(t);this.inventory.gold=e.gold||0,this.inventory.items=e.items||{},e.potionHotbar&&(this.inventory.potionHotbar=e.potionHotbar),console.log("[LootManager] Loaded inventory:",this.inventory)}}catch(t){console.warn("[LootManager] Failed to load inventory:",t)}}_saveInventory(){try{localStorage.setItem("ashen_inventory",JSON.stringify(this.inventory))}catch(t){console.warn("[LootManager] Failed to save inventory:",t)}}rollLoot(t,e){const i=bv(t),n=Hh[i]||Hh.default,s=[];for(const o of n)if(Math.random()<o.chance){const a=Math.floor(Math.random()*(o.maxQty-o.minQty+1))+o.minQty;s.push({itemId:o.itemId,quantity:a})}if(this._spawnDrops(s,e),this.equipmentManager){const o=this.equipmentManager.generateEquipmentDrop(i);o&&(this.equipmentManager.addToInventory(o),console.log(`[LootManager] Equipment dropped: ${o.name}`))}return s}_spawnDrops(t,e){const n=Math.PI*2/Math.max(t.length,1);t.forEach((s,o)=>{const a=Object.values(gs).find(d=>d.id===s.itemId);if(!a)return;const c=n*o+Math.random()*.3,l=.5+Math.random()*.3,h=e.clone();h.x+=Math.cos(c)*l,h.z+=Math.sin(c)*l,h.y=.3,this._createDropVisual(a,s.quantity,h)})}_createDropVisual(t,e,i){const n={id:`drop-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,itemDef:t,quantity:e,position:i.clone(),collected:!1,mesh:null,light:null,spawnTime:Date.now()};let s,o;t.id==="gold"?(s=new re(.12,.14,.08,12),o=new tt({color:t.color,emissive:t.emissive,emissiveIntensity:.8,metalness:.9,roughness:.2})):t.type==="consumable"?(s=new De(.08,.12,4,8),o=new tt({color:t.color,emissive:t.emissive,emissiveIntensity:.6,transparent:!0,opacity:.85})):(s=new Gn(.12,0),o=new tt({color:t.color,emissive:t.emissive,emissiveIntensity:.5,roughness:.4})),n.mesh=new D(s,o),n.mesh.position.copy(i),n.mesh.castShadow=!0,this.scene.add(n.mesh),n.light=new Be(t.color,.6,3),n.light.position.copy(i),this.scene.add(n.light),this.drops.push(n),this._animateDrop(n)}_animateDrop(t){const e=t.position.y,i=()=>{if(t.collected)return;requestAnimationFrame(i);const n=Date.now()*.003;t.mesh.position.y=e+Math.sin(n)*.08,t.mesh.rotation.y+=.025,t.light.position.copy(t.mesh.position),t.light.intensity=.4+Math.sin(n*1.5)*.25};i()}update(t){for(let e=this.drops.length-1;e>=0;e--){const i=this.drops[e];if(i.collected)continue;t.distanceTo(i.mesh.position)<this.pickupRadius&&this._collectDrop(i,e)}this._processNotificationQueue()}_collectDrop(t,e){t.collected=!0,t.itemDef.id==="gold"?this.inventory.gold+=t.quantity:(this.inventory.items[t.itemDef.id]||(this.inventory.items[t.itemDef.id]=0),this.inventory.items[t.itemDef.id]+=t.quantity),this._saveInventory(),this.gm?.audioManager&&this.gm.audioManager.play("itemPickup",{volume:.5});const i=t.quantity>1?` x${t.quantity}`:"";this._queueNotification(`${t.itemDef.name}${i}`,t.itemDef.color),this.gm?.floatingText&&this.gm.floatingText.spawn(`+${t.quantity} ${t.itemDef.name}`,t.mesh.position.clone().add(new b(0,.5,0)),{color:"#"+t.itemDef.color.toString(16).padStart(6,"0"),duration:1.5}),this.scene.remove(t.mesh),this.scene.remove(t.light),t.mesh.geometry&&t.mesh.geometry.dispose(),t.mesh.material&&t.mesh.material.dispose(),this.drops.splice(e,1)}_queueNotification(t,e){this.notificationQueue.push({text:t,color:e})}_processNotificationQueue(){if(this.notificationActive||this.notificationQueue.length===0)return;const t=this.notificationQueue.shift();this._showNotification(t.text,t.color)}_showNotification(t,e=16777215){const i=document.getElementById("loot-notification");if(!i)return;this.notificationActive=!0;const n="#"+e.toString(16).padStart(6,"0");i.style.borderColor=n,i.style.textShadow=`0 0 8px ${n}`,i.innerHTML=`<span style="color: ${n}">+</span> ${t}`,i.style.opacity="1",setTimeout(()=>{i.style.opacity="0",setTimeout(()=>{this.notificationActive=!1},300)},1200)}useItem(t){if((this.inventory.items[t]||0)<=0)return!1;const i=Object.values(gs).find(n=>n.id===t);if(!i||i.type!=="consumable")return!1;if(i.effect){if(i.effect.healAmount&&this.gm){const n=Math.min(i.effect.healAmount,this.gm.maxHealth-this.gm.health);this.gm.health=Math.min(this.gm.maxHealth,this.gm.health+i.effect.healAmount),this.gm.floatingText&&this.gm.player&&this.gm.floatingText.spawn(`+${n} HP`,this.gm.player.mesh.position.clone().add(new b(0,2,0)),{color:"#ff4444",duration:1.5})}i.effect.staminaAmount&&this.gm&&(this.gm.stamina=Math.min(this.gm.maxStamina,this.gm.stamina+i.effect.staminaAmount),this.gm.floatingText&&this.gm.player&&this.gm.floatingText.spawn(`+${i.effect.staminaAmount} Stamina`,this.gm.player.mesh.position.clone().add(new b(0,2,0)),{color:"#44ff44",duration:1.5}))}return this.inventory.items[t]--,this.inventory.items[t]<=0&&delete this.inventory.items[t],this.gm?.audioManager&&this.gm.audioManager.play("itemPickup",{volume:.4}),this._saveInventory(),!0}getItemCount(t){return t==="gold"?this.inventory.gold:this.inventory.items[t]||0}getInventory(){return{...this.inventory}}getGold(){return this.inventory.gold}spendGold(t){return this.inventory.gold<t?!1:(this.inventory.gold-=t,this._saveInventory(),!0)}addGold(t){this.inventory.gold+=t,this._saveInventory()}clearDrops(){for(const t of this.drops)t.mesh&&(this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()),t.light&&this.scene.remove(t.light);this.drops=[]}spawnLootDrop(t,e){const i=Object.values(gs).find(n=>n.id===t.itemId);if(!i){console.warn(`[LootManager] Unknown item: ${t.itemId}`);return}this._createDropVisual(i,t.quantity,e.clone())}showNotification(t,e="wooden"){const n={wooden:9127187,silver:12632256,gold:16766720}[e]||16777215;this._showNotification(t,n)}get gameManager(){return this.gm}}const yi={COMMON:{id:"common",name:"Common",color:"#ffffff",hexColor:16777215,dropWeight:100,statMult:1},UNCOMMON:{id:"uncommon",name:"Uncommon",color:"#4ade80",hexColor:4906624,dropWeight:40,statMult:1.3},RARE:{id:"rare",name:"Rare",color:"#60a5fa",hexColor:6333946,dropWeight:15,statMult:1.7},EPIC:{id:"epic",name:"Epic",color:"#c084fc",hexColor:12616956,dropWeight:5,statMult:2.2}},le={WEAPON:"weapon",ARMOR:"armor",ACCESSORY:"accessory"},Ir={rusty_sword:{id:"rusty_sword",name:"Rusty Sword",slot:le.WEAPON,baseStats:{damage:5},description:"A weathered blade, still serviceable.",weaponModel:"sword"},iron_sword:{id:"iron_sword",name:"Iron Sword",slot:le.WEAPON,baseStats:{damage:10},description:"A sturdy iron blade.",weaponModel:"sword"},soldier_blade:{id:"soldier_blade",name:"Soldier's Blade",slot:le.WEAPON,baseStats:{damage:12,attackSpeed:5},description:"Standard issue military sword.",weaponModel:"sword"},knight_sword:{id:"knight_sword",name:"Knight Sword",slot:le.WEAPON,baseStats:{damage:18,critChance:3},description:"A finely crafted knightly weapon.",weaponModel:"longsword"},executioner_blade:{id:"executioner_blade",name:"Executioner Blade",slot:le.WEAPON,baseStats:{damage:25,critDamage:20},description:"Heavy blade meant to end lives.",weaponModel:"greatsword"},shadow_fang:{id:"shadow_fang",name:"Shadow Fang",slot:le.WEAPON,baseStats:{damage:15,critChance:8,attackSpeed:10},description:"A dagger forged in darkness.",weaponModel:"dagger"},tattered_robe:{id:"tattered_robe",name:"Tattered Robe",slot:le.ARMOR,baseStats:{defense:3},description:"Worn cloth offering minimal protection."},leather_armor:{id:"leather_armor",name:"Leather Armor",slot:le.ARMOR,baseStats:{defense:8,stamina:10},description:"Light armor for mobility."},chainmail:{id:"chainmail",name:"Chainmail",slot:le.ARMOR,baseStats:{defense:15,health:10},description:"Interlocking metal rings."},knight_armor:{id:"knight_armor",name:"Knight Armor",slot:le.ARMOR,baseStats:{defense:22,health:25},description:"Heavy plate worn by knights."},dark_plate:{id:"dark_plate",name:"Dark Plate",slot:le.ARMOR,baseStats:{defense:30,health:40,stamina:-10},description:"Corrupted armor of immense protection."},copper_ring:{id:"copper_ring",name:"Copper Ring",slot:le.ACCESSORY,baseStats:{health:10},description:"A simple ring."},warriors_band:{id:"warriors_band",name:"Warrior's Band",slot:le.ACCESSORY,baseStats:{damage:5,stamina:15},description:"Worn by seasoned fighters."},vitality_amulet:{id:"vitality_amulet",name:"Vitality Amulet",slot:le.ACCESSORY,baseStats:{health:30,healthRegen:1},description:"Pulses with life energy."},crit_pendant:{id:"crit_pendant",name:"Critical Pendant",slot:le.ACCESSORY,baseStats:{critChance:10,critDamage:25},description:"Sharpens your killing instinct."},endurance_charm:{id:"endurance_charm",name:"Endurance Charm",slot:le.ACCESSORY,baseStats:{stamina:30,staminaRegen:10},description:"Never tire, never falter."}},Vh={hollow_soldier:[{equipId:"rusty_sword",weight:30},{equipId:"tattered_robe",weight:30},{equipId:"copper_ring",weight:20}],berserker:[{equipId:"iron_sword",weight:25},{equipId:"soldier_blade",weight:15},{equipId:"leather_armor",weight:25},{equipId:"warriors_band",weight:15}],sentinel:[{equipId:"soldier_blade",weight:20},{equipId:"knight_sword",weight:10},{equipId:"chainmail",weight:25},{equipId:"warriors_band",weight:20},{equipId:"vitality_amulet",weight:10}],revenant:[{equipId:"shadow_fang",weight:15},{equipId:"knight_sword",weight:15},{equipId:"knight_armor",weight:15},{equipId:"crit_pendant",weight:20}],ranged:[{equipId:"leather_armor",weight:30},{equipId:"crit_pendant",weight:25},{equipId:"endurance_charm",weight:20}],elite:[{equipId:"knight_sword",weight:20},{equipId:"executioner_blade",weight:15},{equipId:"knight_armor",weight:20},{equipId:"dark_plate",weight:10},{equipId:"vitality_amulet",weight:15},{equipId:"crit_pendant",weight:15}],boss:[{equipId:"executioner_blade",weight:25},{equipId:"shadow_fang",weight:20},{equipId:"dark_plate",weight:25},{equipId:"crit_pendant",weight:15},{equipId:"endurance_charm",weight:15}]},Tv={hollow_soldier:.08,berserker:.12,sentinel:.15,revenant:.18,ranged:.1,elite:.3,boss:.85};class Av{constructor(t,e,i){this.scene=t,this.gameManager=e,this.lootManager=i,this.equipped={[le.WEAPON]:null,[le.ARMOR]:null,[le.ACCESSORY]:null},this.inventory=[],this.uiContainer=null,this.isUIVisible=!1,this.weaponMesh=null,this.loadEquipment(),this.createUI(),console.log("[EquipmentManager] Initialized")}generateEquipmentDrop(t){const e=Tv[t]||.05;if(Math.random()>e)return null;const i=Vh[t]||Vh.hollow_soldier,n=i.reduce((c,l)=>c+l.weight,0);let s=Math.random()*n,o=null;for(const c of i)if(s-=c.weight,s<=0){o=Ir[c.equipId];break}o||(o=Ir.rusty_sword);const a=this.rollRarity(t);return this.createEquipmentInstance(o,a)}generateChestEquipment(t){const e=Object.values(Ir),i=e[Math.floor(Math.random()*e.length)];return this.createEquipmentInstance(i,t)}spawnEquipmentDrop(t,e){if(!t||!this.lootManager)return;const i=new zt;i.position.copy(e);const n=new Vt(.25,12,8),s=new tt({color:t.rarity.hexColor,emissive:t.rarity.hexColor,emissiveIntensity:.6,metalness:.8,roughness:.2}),o=new D(n,s);i.add(o);const a=new Be(t.rarity.hexColor,1,5);i.add(a),this.scene.add(i);const c={type:"equipment",equipment:t,mesh:i,position:e.clone(),spawnTime:Date.now(),bobOffset:Math.random()*Math.PI*2};this.equipmentDrops||(this.equipmentDrops=[]),this.equipmentDrops.push(c)}updateEquipmentDrops(t,e){if(!this.equipmentDrops)return;const i=2,n=[];for(const s of this.equipmentDrops){const o=(Date.now()-s.spawnTime)/1e3;s.mesh.position.y=s.position.y+.5+Math.sin(o*2+s.bobOffset)*.15,s.mesh.rotation.y+=e*1.5;const a=t.x-s.position.x,c=t.z-s.position.z;Math.sqrt(a*a+c*c)<i&&(this.addToInventory(s.equipment),this.gameManager.audioManager&&this.gameManager.audioManager.playSound("itemPickup",{position:s.position}),this.scene.remove(s.mesh),s.mesh.traverse(h=>{h.geometry&&h.geometry.dispose(),h.material&&h.material.dispose()}),n.push(s))}for(const s of n){const o=this.equipmentDrops.indexOf(s);o>=0&&this.equipmentDrops.splice(o,1)}}rollRarity(t){let e=0;t==="elite"&&(e=20),t==="boss"&&(e=50);const i=Math.random()*100+e;return i>=160?yi.EPIC:i>=130?yi.RARE:i>=100?yi.UNCOMMON:yi.COMMON}createEquipmentInstance(t,e){const i={id:`${t.id}_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,baseId:t.id,name:this.generateEquipmentName(t,e),slot:t.slot,rarity:e,description:t.description,weaponModel:t.weaponModel||null,stats:{}};for(const[n,s]of Object.entries(t.baseStats))i.stats[n]=Math.round(s*e.statMult);return i}generateEquipmentName(t,e){const i={common:["","Old","Worn"],uncommon:["Fine","Quality","Sturdy"],rare:["Superior","Masterwork","Enchanted"],epic:["Legendary","Mythic","Divine"]},n=i[e.id][Math.floor(Math.random()*i[e.id].length)];return n?`${n} ${t.name}`:t.name}addToInventory(t){this.inventory.push(t),this.saveEquipment(),this.showEquipmentPickup(t),console.log(`[EquipmentManager] Added to inventory: ${t.name}`)}equip(t){const e=this.inventory.findIndex(s=>s.id===t);if(e===-1)return console.warn("[EquipmentManager] Equipment not found in inventory"),!1;const i=this.inventory[e],n=i.slot;return this.equipped[n]&&this.inventory.push(this.equipped[n]),this.inventory.splice(e,1),this.equipped[n]=i,this.applyEquipmentStats(),n===le.WEAPON&&this.updateWeaponVisual(),this.saveEquipment(),this.updateUI(),this.gameManager.audioManager&&this.gameManager.audioManager.play("itemPickup",{volume:.6}),console.log(`[EquipmentManager] Equipped: ${i.name}`),!0}unequip(t){if(!this.equipped[t])return!1;const e=this.equipped[t];return this.inventory.push(e),this.equipped[t]=null,this.applyEquipmentStats(),t===le.WEAPON&&this.updateWeaponVisual(),this.saveEquipment(),this.updateUI(),console.log(`[EquipmentManager] Unequipped: ${e.name}`),!0}dropEquipment(t){const e=this.inventory.findIndex(n=>n.id===t);if(e===-1)return!1;const i=this.inventory.splice(e,1)[0];return this.saveEquipment(),this.updateUI(),console.log(`[EquipmentManager] Dropped: ${i.name}`),!0}getEquipmentBonuses(){const t={damage:0,defense:0,health:0,stamina:0,critChance:0,critDamage:0,attackSpeed:0,healthRegen:0,staminaRegen:0};for(const e of Object.values(this.equipped))if(e)for(const[i,n]of Object.entries(e.stats))t.hasOwnProperty(i)&&(t[i]+=n);return t}applyEquipmentStats(){if(!this.gameManager)return;const t=this.getEquipmentBonuses();this.gameManager.equipmentBonuses=t,this.gameManager.applyStatBonuses(),console.log("[EquipmentManager] Applied equipment bonuses:",t)}updateWeaponVisual(){const t=this.equipped[le.WEAPON];if(!this.gameManager.playerMesh||(this.weaponMesh&&(this.gameManager.playerMesh.remove(this.weaponMesh),this.weaponMesh.geometry?.dispose(),this.weaponMesh.material?.dispose(),this.weaponMesh=null),!t))return;const e=this.createWeaponGeometry(t.weaponModel||"sword"),i=new tt({color:t.rarity.hexColor,metalness:.8,roughness:.3,emissive:t.rarity.hexColor,emissiveIntensity:.1});this.weaponMesh=new D(e,i),this.weaponMesh.position.set(.5,.2,.3),this.weaponMesh.rotation.set(0,0,-Math.PI/6),this.weaponMesh.castShadow=!0,this.gameManager.playerMesh.add(this.weaponMesh)}createWeaponGeometry(t){switch(t){case"dagger":return new Lt(.08,.4,.03);case"longsword":return new Lt(.1,1,.04);case"greatsword":return new Lt(.15,1.4,.05);default:return new Lt(.08,.7,.03)}}createUI(){this.uiContainer=document.createElement("div"),this.uiContainer.id="equipment-ui",this.uiContainer.style.cssText=`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px;
      max-height: 80vh;
      background: linear-gradient(135deg, rgba(20, 20, 30, 0.95), rgba(10, 10, 15, 0.98));
      border: 2px solid rgba(255, 200, 100, 0.3);
      border-radius: 8px;
      padding: 20px;
      color: #ddd;
      font-family: 'Cinzel', 'Times New Roman', serif;
      display: none;
      z-index: 2000;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(0, 0, 0, 0.3);
      overflow-y: auto;
    `,document.body.appendChild(this.uiContainer)}toggleUI(){this.isUIVisible=!this.isUIVisible,this.uiContainer.style.display=this.isUIVisible?"block":"none",this.isUIVisible&&this.updateUI()}updateUI(){if(!this.uiContainer)return;const t=this.getEquipmentBonuses();let e=`
      <h2 style="margin: 0 0 20px 0; text-align: center; color: #ffc864; text-shadow: 0 0 10px rgba(255, 200, 100, 0.5);">
        ⚔️ Equipment
      </h2>
      
      <div style="display: flex; gap: 20px;">
        <!-- Equipped slots -->
        <div style="flex: 1;">
          <h3 style="color: #aaa; margin-bottom: 10px; border-bottom: 1px solid rgba(255,200,100,0.2); padding-bottom: 5px;">Equipped</h3>
          ${this.renderEquippedSlot(le.WEAPON,"⚔️ Weapon")}
          ${this.renderEquippedSlot(le.ARMOR,"🛡️ Armor")}
          ${this.renderEquippedSlot(le.ACCESSORY,"💍 Accessory")}
          
          <div style="margin-top: 20px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 4px;">
            <h4 style="color: #888; margin: 0 0 8px 0;">Total Bonuses</h4>
            <div style="font-size: 12px; color: #8f8;">
              ${t.damage>0?`+${t.damage} Damage<br>`:""}
              ${t.defense>0?`+${t.defense} Defense<br>`:""}
              ${t.health!==0?`${t.health>0?"+":""}${t.health} Health<br>`:""}
              ${t.stamina!==0?`${t.stamina>0?"+":""}${t.stamina} Stamina<br>`:""}
              ${t.critChance>0?`+${t.critChance}% Crit Chance<br>`:""}
              ${t.critDamage>0?`+${t.critDamage}% Crit Damage<br>`:""}
              ${t.attackSpeed>0?`+${t.attackSpeed}% Attack Speed<br>`:""}
              ${t.healthRegen>0?`+${t.healthRegen} HP/s<br>`:""}
              ${t.staminaRegen>0?`+${t.staminaRegen}% Stamina Regen<br>`:""}
            </div>
          </div>
        </div>
        
        <!-- Inventory -->
        <div style="flex: 1.5;">
          <h3 style="color: #aaa; margin-bottom: 10px; border-bottom: 1px solid rgba(255,200,100,0.2); padding-bottom: 5px;">Inventory (${this.inventory.length})</h3>
          <div style="max-height: 400px; overflow-y: auto;">
            ${this.inventory.length===0?'<p style="color: #666;">No equipment in inventory</p>':""}
            ${this.inventory.map(i=>this.renderInventoryItem(i)).join("")}
          </div>
        </div>
      </div>
      
      <p style="text-align: center; color: #666; margin-top: 15px; font-size: 12px;">Press I to close</p>
    `;this.uiContainer.innerHTML=e,this.attachUIListeners()}renderEquippedSlot(t,e){const i=this.equipped[t];return i?`
      <div style="padding: 10px; margin-bottom: 8px; background: rgba(0,0,0,0.4); border: 1px solid ${i.rarity.color}40; border-radius: 4px;">
        <div style="color: ${i.rarity.color}; font-weight: bold;">${e}</div>
        <div style="color: ${i.rarity.color};">${i.name}</div>
        <div style="font-size: 11px; color: #888; margin-top: 4px;">
          ${Object.entries(i.stats).map(([n,s])=>`${s>0?"+":""}${s} ${this.formatStatName(n)}`).join(" | ")}
        </div>
        <button class="equip-unequip-btn" data-slot="${t}" style="
          margin-top: 6px;
          padding: 4px 10px;
          background: rgba(180, 80, 80, 0.4);
          border: 1px solid rgba(255, 100, 100, 0.3);
          color: #f88;
          border-radius: 3px;
          cursor: pointer;
          font-size: 11px;
        ">Unequip</button>
      </div>
    `:`
        <div style="padding: 10px; margin-bottom: 8px; background: rgba(0,0,0,0.3); border: 1px dashed rgba(255,255,255,0.1); border-radius: 4px;">
          <span style="color: #555;">${e}: Empty</span>
        </div>
      `}renderInventoryItem(t){return`
      <div style="padding: 10px; margin-bottom: 6px; background: rgba(0,0,0,0.3); border: 1px solid ${t.rarity.color}30; border-radius: 4px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="color: ${t.rarity.color};">${t.name}</span>
          <span style="color: #666; font-size: 11px;">${t.slot}</span>
        </div>
        <div style="font-size: 11px; color: #888; margin: 4px 0;">
          ${Object.entries(t.stats).map(([e,i])=>`${i>0?"+":""}${i} ${this.formatStatName(e)}`).join(" | ")}
        </div>
        <div style="display: flex; gap: 6px;">
          <button class="equip-item-btn" data-id="${t.id}" style="
            padding: 4px 12px;
            background: rgba(80, 180, 80, 0.4);
            border: 1px solid rgba(100, 255, 100, 0.3);
            color: #8f8;
            border-radius: 3px;
            cursor: pointer;
            font-size: 11px;
          ">Equip</button>
          <button class="drop-item-btn" data-id="${t.id}" style="
            padding: 4px 8px;
            background: rgba(80, 80, 80, 0.4);
            border: 1px solid rgba(100, 100, 100, 0.3);
            color: #888;
            border-radius: 3px;
            cursor: pointer;
            font-size: 11px;
          ">Drop</button>
        </div>
      </div>
    `}formatStatName(t){return{damage:"DMG",defense:"DEF",health:"HP",stamina:"STA",critChance:"CRIT%",critDamage:"CRIT DMG",attackSpeed:"ATK SPD",healthRegen:"HP/s",staminaRegen:"STA REG"}[t]||t}attachUIListeners(){this.uiContainer.querySelectorAll(".equip-item-btn").forEach(t=>{t.addEventListener("click",()=>{this.equip(t.dataset.id)})}),this.uiContainer.querySelectorAll(".equip-unequip-btn").forEach(t=>{t.addEventListener("click",()=>{this.unequip(t.dataset.slot)})}),this.uiContainer.querySelectorAll(".drop-item-btn").forEach(t=>{t.addEventListener("click",()=>{confirm("Drop this equipment?")&&this.dropEquipment(t.dataset.id)})})}showEquipmentPickup(t){const e=document.createElement("div");if(e.style.cssText=`
      position: fixed;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      padding: 15px 30px;
      background: rgba(0, 0, 0, 0.85);
      border: 2px solid ${t.rarity.color};
      border-radius: 6px;
      color: ${t.rarity.color};
      font-family: 'Cinzel', serif;
      font-size: 16px;
      text-align: center;
      z-index: 3000;
      animation: equipPickup 2s ease-out forwards;
      box-shadow: 0 0 20px ${t.rarity.color}40;
    `,e.innerHTML=`
      <div style="font-size: 12px; color: #888; margin-bottom: 4px;">${t.rarity.name} ${t.slot}</div>
      <div style="font-weight: bold;">${t.name}</div>
      <div style="font-size: 11px; color: #aaa; margin-top: 6px;">
        ${Object.entries(t.stats).map(([i,n])=>`${n>0?"+":""}${n} ${this.formatStatName(i)}`).join(" | ")}
      </div>
    `,!document.getElementById("equip-pickup-style")){const i=document.createElement("style");i.id="equip-pickup-style",i.textContent=`
        @keyframes equipPickup {
          0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
          15% { opacity: 1; transform: translateX(-50%) translateY(0); }
          85% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
      `,document.head.appendChild(i)}document.body.appendChild(e),setTimeout(()=>e.remove(),2e3)}saveEquipment(){const t={equipped:this.equipped,inventory:this.inventory};localStorage.setItem("ashen_equipment",JSON.stringify(t))}loadEquipment(){try{const t=localStorage.getItem("ashen_equipment");if(t){const e=JSON.parse(t);if(e.equipped)for(const[i,n]of Object.entries(e.equipped))n&&(n.rarity=yi[n.rarity.id.toUpperCase()]||yi.COMMON,this.equipped[i]=n);e.inventory&&(this.inventory=e.inventory.map(i=>(i.rarity=yi[i.rarity.id.toUpperCase()]||yi.COMMON,i))),console.log("[EquipmentManager] Loaded equipment from localStorage")}}catch(t){console.error("[EquipmentManager] Failed to load equipment:",t)}}update(t){}}const _i={WOODEN:{id:"wooden",name:"Wooden Chest",color:9127187,emissive:3346688,glowColor:16755268,glowIntensity:.5,spawnWeight:60,goldRange:[10,30],potionChance:.3,equipmentChance:.15,equipmentRarityWeights:{common:80,uncommon:18,rare:2,epic:0},materialChance:.4,materialRange:[1,3]},SILVER:{id:"silver",name:"Silver Chest",color:12632256,emissive:4473941,glowColor:8956671,glowIntensity:.8,spawnWeight:30,goldRange:[30,80],potionChance:.5,equipmentChance:.35,equipmentRarityWeights:{common:40,uncommon:40,rare:18,epic:2},materialChance:.6,materialRange:[2,5]},GOLD:{id:"gold",name:"Golden Chest",color:16766720,emissive:11175936,glowColor:16772744,glowIntensity:1.2,spawnWeight:10,goldRange:[80,200],potionChance:.8,equipmentChance:.65,equipmentRarityWeights:{common:10,uncommon:30,rare:45,epic:15},materialChance:.9,materialRange:[3,8]}},la={RUINS:{chance:.7,offset:{minDist:3,maxDist:12},tierBoost:1.2},CAVES:{chance:.85,offset:{minDist:2,maxDist:8},tierBoost:1.5},HIDDEN:{chance:.3,minDistFromCastle:120,tierBoost:1}};class Ev{constructor(t,e,i,n,s,o,a){this.scene=t,this.terrain=e,this.ruinsManager=i,this.caveManager=n,this.lootManager=s,this.equipmentManager=o,this.inputManager=a,this.regionSize=150,this.loadDistance=2,this.unloadDistance=4,this.interactionDistance=3,this.respawnTimeMs=300*1e3,this.regions=new Map,this.chests=[],this.chestMeshes=[],this.lastPlayerRegionX=null,this.lastPlayerRegionZ=null,this.openedChests=this._loadOpenedChests(),this.nearbyChest=null,this.interactPrompt=null,this.openingChests=[],this.materials=this._createMaterials(),this._createInteractPrompt(),console.log("[ChestManager] Initialized with region-based chest placement")}_loadOpenedChests(){try{const t=localStorage.getItem("ashen_opened_chests");if(t){const e=JSON.parse(t),i=Date.now(),n={};for(const[s,o]of Object.entries(e))i-o<this.respawnTimeMs&&(n[s]=o);return n}}catch(t){console.warn("[ChestManager] Failed to load opened chests:",t)}return{}}_saveOpenedChests(){try{localStorage.setItem("ashen_opened_chests",JSON.stringify(this.openedChests))}catch(t){console.warn("[ChestManager] Failed to save opened chests:",t)}}_getChestKey(t,e){return`${Math.round(t)},${Math.round(e)}`}_createMaterials(){return{wooden:{body:new tt({color:_i.WOODEN.color,emissive:_i.WOODEN.emissive,emissiveIntensity:.2,roughness:.8,metalness:.1}),trim:new tt({color:4863264,roughness:.7,metalness:.3})},silver:{body:new tt({color:_i.SILVER.color,emissive:_i.SILVER.emissive,emissiveIntensity:.3,roughness:.4,metalness:.7}),trim:new tt({color:6710920,roughness:.3,metalness:.8})},gold:{body:new tt({color:_i.GOLD.color,emissive:_i.GOLD.emissive,emissiveIntensity:.4,roughness:.3,metalness:.9}),trim:new tt({color:13408512,roughness:.2,metalness:.95})}}}_createInteractPrompt(){const t=document.createElement("div");t.id="chest-interact-prompt",t.style.cssText=`
      position: fixed;
      bottom: 25%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.75);
      color: #fff;
      padding: 12px 24px;
      border-radius: 8px;
      font-family: 'Segoe UI', sans-serif;
      font-size: 16px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 100;
      border: 1px solid rgba(255, 200, 100, 0.5);
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    `,t.innerHTML='<span style="color:#ffcc66">[E]</span> Open Chest',document.body.appendChild(t),this.interactPrompt=t}_showInteractPrompt(t){if(this.interactPrompt){const e=t.tier.name,i=`#${t.tier.color.toString(16).padStart(6,"0")}`;this.interactPrompt.innerHTML=`<span style="color:#ffcc66">[E]</span> Open <span style="color:${i}">${e}</span>`,this.interactPrompt.style.opacity="1"}}_hideInteractPrompt(){this.interactPrompt&&(this.interactPrompt.style.opacity="0")}_seededRandom(t){const e=Math.sin(t*12.9898+78.233)*43758.5453;return e-Math.floor(e)}_regionKey(t,e){return`${t},${e}`}_worldToRegion(t,e){return{rx:Math.floor(t/this.regionSize),rz:Math.floor(e/this.regionSize)}}update(t,e,i=0){const n=new b(t,0,e),{rx:s,rz:o}=this._worldToRegion(t,e);if(s!==this.lastPlayerRegionX||o!==this.lastPlayerRegionZ){this.lastPlayerRegionX=s,this.lastPlayerRegionZ=o;const a=new Set;for(let l=-this.loadDistance;l<=this.loadDistance;l++)for(let h=-this.loadDistance;h<=this.loadDistance;h++){const d=s+l,u=o+h,f=this._regionKey(d,u);a.add(f),this.regions.has(f)||this._loadRegion(d,u)}const c=[];for(const[l]of this.regions){const[h,d]=l.split(",").map(Number),u=Math.abs(h-s),f=Math.abs(d-o);(u>this.unloadDistance||f>this.unloadDistance)&&c.push(l)}for(const l of c)this._unloadRegion(l)}this._updateAnimations(i),this._updateInteraction(n),this.nearbyChest&&this.inputManager&&this.inputManager.interact&&this._openChest(this.nearbyChest)}_loadRegion(t,e){const i=this._regionKey(t,e);if(this.regions.has(i))return;const n={chests:[],meshes:[]},s=t*73856093+e*19349663;if(this.ruinsManager&&this.ruinsManager.ruins)for(const l of this.ruinsManager.ruins){const h=this._worldToRegion(l.x,l.z);h.rx===t&&h.rz===e&&this._tryPlaceChestNearPOI(l,"ruins",s,n)}if(this.caveManager&&this.caveManager.caves)for(const l of this.caveManager.caves){const h=this._worldToRegion(l.x,l.z);h.rx===t&&h.rz===e&&this._tryPlaceChestNearPOI(l,"caves",s+1e3,n)}const o=t*this.regionSize,a=e*this.regionSize;if(Math.sqrt((o+this.regionSize/2)**2+(a+this.regionSize/2)**2)>la.HIDDEN.minDistFromCastle&&this._seededRandom(s+5e3)<la.HIDDEN.chance){const h=o+this._seededRandom(s+5001)*this.regionSize,d=a+this._seededRandom(s+5002)*this.regionSize;if(this.terrain){const u=this.terrain.getTerrainHeight(h,d);if((this.terrain.getTerrainSlope?this.terrain.getTerrainSlope(h,d):0)<.5){const m=this._selectTier(s+5003,la.HIDDEN.tierBoost);this._createChest(h,u,d,m,s+5004,n)}}}this.regions.set(i,n)}_tryPlaceChestNearPOI(t,e,i,n){const s=la[e.toUpperCase()];if(!s||this._seededRandom(i+t.x*100+t.z)>s.chance)return;const a=this._seededRandom(i+t.x+t.z*50)*Math.PI*2,c=s.offset.minDist+this._seededRandom(i+t.x*7+t.z*13)*(s.offset.maxDist-s.offset.minDist),l=t.x+Math.cos(a)*c,h=t.z+Math.sin(a)*c,d=this.terrain?this.terrain.getTerrainHeight(l,h):t.y||0,u=this._selectTier(i+t.x*3+t.z*7,s.tierBoost);this._createChest(l,d,h,u,i,n)}_selectTier(t,e=1){const i=this._seededRandom(t)*100,n=_i.WOODEN.spawnWeight,s=_i.SILVER.spawnWeight*e,o=_i.GOLD.spawnWeight*(e*e),a=n+s+o,c=i*(a/100);return c<o?_i.GOLD:c<o+s?_i.SILVER:_i.WOODEN}_createChest(t,e,i,n,s,o){const a=this._getChestKey(t,i);if(this.openedChests[a]){if(Date.now()-this.openedChests[a]<this.respawnTimeMs)return;delete this.openedChests[a],this._saveOpenedChests()}const c=new zt;c.position.set(t,e,i),c.rotation.y=this._seededRandom(s+999)*Math.PI*2;const l=new Lt(1.2,.6,.8),h=new D(l,this.materials[n.id].body);h.position.y=.3,h.castShadow=!0,h.receiveShadow=!0,c.add(h);const d=new zt;d.position.set(0,.6,-.4);const u=new Lt(1.2,.3,.8),f=new D(u,this.materials[n.id].body);f.position.set(0,.15,.4),f.castShadow=!0,c.add(d),d.add(f);const m=new Lt(1.25,.08,.85),_=new D(m,this.materials[n.id].trim);_.position.y=.55,c.add(_);const g=new D(m,this.materials[n.id].trim);g.position.y=.15,c.add(g);const p=new Lt(.15,.2,.1),x=new D(p,this.materials[n.id].trim);if(x.position.set(0,.5,.42),c.add(x),n.glowIntensity>.5){const v=new Be(n.glowColor,n.glowIntensity,8);v.position.set(0,.8,0),c.add(v)}this.scene.add(c);const y={x:t,y:e,z:i,key:a,tier:n,mesh:c,lidGroup:d,opened:!1,seed:s};this.chests.push(y),o.chests.push(y),o.meshes.push(c),c.userData.chestData=y,this.chestMeshes.push(c)}_unloadRegion(t){const e=this.regions.get(t);if(e){for(const i of e.meshes){this.scene.remove(i);const n=this.chestMeshes.indexOf(i);n>=0&&this.chestMeshes.splice(n,1)}for(const i of e.chests){const n=this.chests.indexOf(i);n>=0&&this.chests.splice(n,1)}this.regions.delete(t)}}_updateInteraction(t){let e=null,i=this.interactionDistance;for(const n of this.chests){if(n.opened)continue;const s=t.x-n.x,o=t.z-n.z,a=Math.sqrt(s*s+o*o);a<i&&(e=n,i=a)}e!==this.nearbyChest&&(this.nearbyChest=e,e?this._showInteractPrompt(e):this._hideInteractPrompt())}_openChest(t){t.opened||(t.opened=!0,this._hideInteractPrompt(),this.nearbyChest=null,this.openedChests[t.key]=Date.now(),this._saveOpenedChests(),this.openingChests.push({chest:t,progress:0,targetAngle:-Math.PI*.7}),this._generateLoot(t),this.lootManager&&this.lootManager.gameManager&&this.lootManager.gameManager.audioManager&&this.lootManager.gameManager.audioManager.playSound("chestOpen",{position:new b(t.x,t.y,t.z)}))}_generateLoot(t){const e=t.tier,i=t.seed,n=new b(t.x,t.y+1,t.z),s=e.goldRange[0]+Math.floor(this._seededRandom(i+100)*(e.goldRange[1]-e.goldRange[0]));if(this.lootManager&&this.lootManager.spawnLootDrop({itemId:"gold",quantity:s},n.clone().add(new b((Math.random()-.5)*1.5,0,(Math.random()-.5)*1.5))),this._seededRandom(i+200)<e.potionChance){const o=this._seededRandom(i+201)<.5?"health-potion":"stamina-potion",a=Math.ceil(this._seededRandom(i+202)*2);this.lootManager&&this.lootManager.spawnLootDrop({itemId:o,quantity:a},n.clone().add(new b((Math.random()-.5)*1.5,0,(Math.random()-.5)*1.5)))}if(this._seededRandom(i+300)<e.materialChance){const o=["iron-ore","dark-shard","bone-fragment","spirit-essence"],a=Math.floor(this._seededRandom(i+301)*o.length),c=e.materialRange[0]+Math.floor(this._seededRandom(i+302)*(e.materialRange[1]-e.materialRange[0]));this.lootManager&&this.lootManager.spawnLootDrop({itemId:o[a],quantity:c},n.clone().add(new b((Math.random()-.5)*1.5,0,(Math.random()-.5)*1.5)))}if(this._seededRandom(i+400)<e.equipmentChance&&this.equipmentManager){const o=e.equipmentRarityWeights,a=this._seededRandom(i+401)*100;let c=yi.COMMON,l=0;a<(l+=o.epic)?c=yi.EPIC:a<(l+=o.rare)?c=yi.RARE:a<(l+=o.uncommon)&&(c=yi.UNCOMMON);const h=this.equipmentManager.generateChestEquipment(c);h&&this.equipmentManager.spawnEquipmentDrop(h,n.clone().add(new b((Math.random()-.5)*1.5,.5,(Math.random()-.5)*1.5)))}this.lootManager&&this.lootManager.showNotification&&this.lootManager.showNotification(`Opened ${e.name}!`,e.id)}_updateAnimations(t){const e=[];for(const i of this.openingChests){i.progress+=t*2,i.progress>=1&&(i.progress=1,e.push(i));const n=1-Math.pow(1-i.progress,3);i.chest.lidGroup.rotation.x=i.targetAngle*n}for(const i of e){const n=this.openingChests.indexOf(i);n>=0&&this.openingChests.splice(n,1)}}getChests(){return this.chests}getNearbyChest(t,e=5){for(const i of this.chests){if(i.opened)continue;const n=t.x-i.x,s=t.z-i.z;if(Math.sqrt(n*n+s*s)<e)return i}return null}respawnAll(){this.openedChests={},this._saveOpenedChests();const t=[...this.regions.keys()];for(const e of t)this._unloadRegion(e);this.lastPlayerRegionX=null,this.lastPlayerRegionZ=null}dispose(){for(const[t]of this.regions)this._unloadRegion(t);this.interactPrompt&&this.interactPrompt.parentNode&&this.interactPrompt.parentNode.removeChild(this.interactPrompt)}}class Cv{constructor(t){this.gm=t,this.healthBar=document.getElementById("health-bar"),this.staminaBar=document.getElementById("stamina-bar"),this.postureBar=document.getElementById("posture-bar"),this.remnantLabel=document.getElementById("remnant"),this.lostRemnantLabel=document.getElementById("lost-remnant"),this.bossContainer=document.getElementById("boss-container"),this.bossName=document.getElementById("boss-name"),this.bossHealthBar=document.getElementById("boss-health-bar"),this.bossPostureBar=document.getElementById("boss-posture-bar"),this.bossPhase=document.getElementById("boss-phase"),this.enemyManager=null,this.statsUI=null,this._createDamageVignette(),this.damageVignetteOpacity=0,this.staminaWarningActive=!1,this._createLevelBadge(),this._createXPBar(),this._createStatPointsIndicator(),this._createAbilityBar(),this.levelUpFlashActive=!1,this._lastLevel=this.gm.currentLevel||1}setStatsUI(t){this.statsUI=t}_createLevelBadge(){this.levelBadge=document.createElement("div"),this.levelBadge.id="level-badge",this.levelBadge.style.cssText=`
      position: fixed;
      top: 20px;
      left: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 100;
      pointer-events: none;
    `;const t=document.createElement("div");t.style.cssText=`
      font-size: 16px;
      filter: drop-shadow(0 0 4px rgba(255, 200, 0, 0.5));
    `,t.textContent="⚔️",this.levelBadge.appendChild(t),this.levelBadgeText=document.createElement("div"),this.levelBadgeText.style.cssText=`
      font-family: 'Cinzel', serif;
      font-size: 16px;
      font-weight: bold;
      color: #ffd088;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.9), 0 0 12px rgba(255, 180, 0, 0.4);
      letter-spacing: 1px;
    `,this.levelBadgeText.textContent="LV 1",this.levelBadge.appendChild(this.levelBadgeText),document.body.appendChild(this.levelBadge)}_createXPBar(){this.xpContainer=document.createElement("div"),this.xpContainer.id="xp-container",this.xpContainer.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      z-index: 100;
      pointer-events: none;
    `,this.levelLabel=document.createElement("div"),this.levelLabel.id="level-label",this.levelLabel.style.cssText=`
      font-family: 'Cinzel', serif;
      font-size: 14px;
      color: #ffdd88;
      text-shadow: 0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,200,0,0.3);
      letter-spacing: 2px;
    `,this.levelLabel.textContent="LEVEL 1",this.xpContainer.appendChild(this.levelLabel),this.xpBarBg=document.createElement("div"),this.xpBarBg.style.cssText=`
      width: 100%;
      height: 6px;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 200, 100, 0.3);
      border-radius: 3px;
      overflow: hidden;
    `,this.xpBar=document.createElement("div"),this.xpBar.id="xp-bar",this.xpBar.style.cssText=`
      width: 0%;
      height: 100%;
      background: linear-gradient(90deg, #aa8800, #ffcc44);
      box-shadow: 0 0 6px rgba(255, 200, 0, 0.5);
      transition: width 0.3s ease-out;
    `,this.xpBarBg.appendChild(this.xpBar),this.xpContainer.appendChild(this.xpBarBg),document.body.appendChild(this.xpContainer)}_createStatPointsIndicator(){this.statPointsIndicator=document.createElement("div"),this.statPointsIndicator.id="stat-points-indicator",this.statPointsIndicator.style.cssText=`
      position: fixed;
      bottom: 60px;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'Cinzel', serif;
      font-size: 13px;
      color: #ffd088;
      text-shadow: 0 0 8px rgba(255, 180, 80, 0.6), 0 0 2px rgba(0, 0, 0, 0.8);
      letter-spacing: 1px;
      z-index: 100;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease-out;
      animation: statPointsPulse 2s ease-in-out infinite;
    `;const t=document.createElement("style");t.textContent=`
      @keyframes statPointsPulse {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; text-shadow: 0 0 12px rgba(255, 200, 100, 0.9), 0 0 2px rgba(0, 0, 0, 0.8); }
      }
      @keyframes xpBarPulse {
        0%, 100% { box-shadow: 0 0 12px rgba(255, 255, 100, 0.8); }
        50% { box-shadow: 0 0 20px rgba(255, 255, 150, 1), 0 0 30px rgba(255, 200, 50, 0.6); }
      }
    `,document.head.appendChild(t),document.body.appendChild(this.statPointsIndicator)}_createAbilityBar(){this.abilityContainer=document.createElement("div"),this.abilityContainer.id="ability-container",this.abilityContainer.style.cssText=`
      position: fixed;
      bottom: 60px;
      right: 20px;
      display: flex;
      flex-direction: row;
      gap: 8px;
      z-index: 100;
      pointer-events: none;
    `,this.abilitySlots={};const t=[{id:"dash",hotkey:"R",icon:"⚡",color:"#00ff88"},{id:"heavyCharge",hotkey:"🖱️",icon:"💥",color:"#ffaa00"},{id:"parry",hotkey:"F",icon:"🛡️",color:"#4488ff"},{id:"warCry",hotkey:"G",icon:"🔥",color:"#ff6600"}];for(const e of t){const i=document.createElement("div");i.className="ability-slot",i.dataset.abilityId=e.id,i.style.cssText=`
        width: 48px;
        height: 48px;
        background: rgba(0, 0, 0, 0.7);
        border: 2px solid rgba(100, 100, 100, 0.5);
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        opacity: 0.3;
        transition: opacity 0.3s, border-color 0.3s;
      `;const n=document.createElement("div");n.className="ability-icon",n.textContent=e.icon,n.style.cssText=`
        font-size: 20px;
        line-height: 1;
      `,i.appendChild(n);const s=document.createElement("div");s.className="ability-hotkey",s.textContent=e.hotkey,s.style.cssText=`
        font-family: 'Cinzel', serif;
        font-size: 10px;
        color: #aaa;
        margin-top: 2px;
      `,i.appendChild(s);const o=document.createElement("div");o.className="cooldown-overlay",o.style.cssText=`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0%;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 4px;
        pointer-events: none;
      `,i.appendChild(o);const a=document.createElement("div");a.className="cooldown-text",a.style.cssText=`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Cinzel', serif;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        text-shadow: 0 0 4px rgba(0,0,0,0.8);
        display: none;
      `,i.appendChild(a),this.abilitySlots[e.id]={element:i,cooldownOverlay:o,cooldownText:a,color:e.color},this.abilityContainer.appendChild(i)}document.body.appendChild(this.abilityContainer)}_updateAbilityBar(){if(!(!this.abilitySlots||!this.gm.abilities)){for(const[t,e]of Object.entries(this.abilitySlots)){const i=this.gm.isAbilityUnlocked(t),n=this.gm.getAbilityCooldown(t),s=this.gm.abilities[t];if(i)if(e.element.style.opacity="1",e.element.style.borderColor=n>0?"rgba(100,100,100,0.5)":e.color,n>0){const o=n/(s.baseCooldown*this.gm.getCooldownModifier())*100;e.cooldownOverlay.style.height=`${o}%`,e.cooldownText.textContent=Math.ceil(n),e.cooldownText.style.display="block"}else e.cooldownOverlay.style.height="0%",e.cooldownText.style.display="none";else e.element.style.opacity="0.3",e.cooldownOverlay.style.height="0%",e.cooldownText.style.display="none"}if(this.gm.warCryActive&&this.abilitySlots.warCry){const t=this.abilitySlots.warCry;t.element.style.boxShadow="0 0 10px #ff6600, 0 0 20px #ff440088"}else this.abilitySlots.warCry&&(this.abilitySlots.warCry.element.style.boxShadow="none")}}flashLevelUp(){this.levelUpFlashActive||(this.levelUpFlashActive=!0,this.levelLabel.style.color="#ffffff",this.levelLabel.style.textShadow="0 0 20px rgba(255,220,0,1), 0 0 40px rgba(255,200,0,0.8)",this.levelLabel.style.fontSize="18px",this.levelLabel.style.transition="all 0.2s ease-out",this.levelBadgeText&&(this.levelBadgeText.style.color="#ffffff",this.levelBadgeText.style.textShadow="0 0 20px rgba(255,220,0,1), 0 0 30px rgba(255,200,0,0.8)",this.levelBadgeText.style.fontSize="22px",this.levelBadgeText.style.transition="all 0.3s ease-out"),this.xpBar.style.background="linear-gradient(90deg, #ffff88, #ffffff)",this.xpBar.style.boxShadow="0 0 20px rgba(255, 255, 200, 1)",this.levelUpFlash||(this.levelUpFlash=document.createElement("div"),this.levelUpFlash.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(ellipse at center, rgba(255, 220, 100, 0.4) 0%, transparent 70%);
        pointer-events: none;
        z-index: 997;
        opacity: 0;
        transition: opacity 0.1s ease-out;
      `,document.body.appendChild(this.levelUpFlash)),this.levelUpFlash.style.opacity="1",setTimeout(()=>{this.levelUpFlash.style.opacity="0"},200),setTimeout(()=>{this.levelLabel.style.color="#ffdd88",this.levelLabel.style.textShadow="0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,200,0,0.3)",this.levelLabel.style.fontSize="14px",this.xpBar.style.background="linear-gradient(90deg, #aa8800, #ffcc44)",this.xpBar.style.boxShadow="0 0 6px rgba(255, 200, 0, 0.5)",this.levelBadgeText&&(this.levelBadgeText.style.color="#ffd088",this.levelBadgeText.style.textShadow="0 0 6px rgba(0, 0, 0, 0.9), 0 0 12px rgba(255, 180, 0, 0.4)",this.levelBadgeText.style.fontSize="16px"),this.levelUpFlashActive=!1,this.statsUI&&this.gm.getAvailableStatPoints()>0&&setTimeout(()=>{this.statsUI.open()},300)},800))}_createDamageVignette(){this.damageVignette=document.createElement("div"),this.damageVignette.id="damage-vignette",this.damageVignette.style.cssText=`
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
    `,document.body.appendChild(this.hitFlash)}flashDamage(t=.6){this.damageVignetteOpacity=Math.min(1,t),this.damageVignette.style.opacity=this.damageVignetteOpacity,this.hitFlash.style.opacity=Math.min(.5,t*.8),setTimeout(()=>{this.damageVignette.style.opacity=this.damageVignetteOpacity*.5,this.hitFlash.style.opacity=0},80),setTimeout(()=>{this.damageVignette.style.opacity=0},250)}flashStaminaDepleted(){this.staminaWarningActive||(this.staminaWarningActive=!0,this.staminaBar&&(this.staminaBar.style.background="linear-gradient(90deg, #ffaa00, #ff6600)",this.staminaBar.style.boxShadow="0 0 10px #ff6600",setTimeout(()=>{this.staminaBar.style.background="",this.staminaBar.style.boxShadow="",this.staminaWarningActive=!1},300)))}setEnemyManager(t){this.enemyManager=t}update(){this.healthBar&&(this.healthBar.style.width=`${this.gm.health/this.gm.maxHealth*100}%`),this.staminaBar&&(this.staminaBar.style.width=`${this.gm.stamina/this.gm.maxStamina*100}%`),this.postureBar&&(this.postureBar.style.width=`${this.gm.posture/this.gm.maxPosture*100}%`),this.remnantLabel&&(this.remnantLabel.textContent=`Remnant: ${this.gm.remnant}`),this.lostRemnantLabel&&(this.gm.bloodstain&&this.gm.heldRemnant>0?(this.lostRemnantLabel.style.display="block",this.lostRemnantLabel.textContent=`Lost: ${this.gm.heldRemnant} (recover at bloodstain)`):this.lostRemnantLabel.style.display="none"),this._updateXPBar(),this._updateAbilityBar(),this._updateStatPointsIndicator(),this._updateBossUI()}_updateStatPointsIndicator(){if(!this.statPointsIndicator)return;const t=this.gm.getAvailableStatPoints?this.gm.getAvailableStatPoints():0;t>0?(this.statPointsIndicator.textContent=`⬆ ${t} Stat Point${t>1?"s":""} - Press TAB`,this.statPointsIndicator.style.opacity="1"):this.statPointsIndicator.style.opacity="0"}_updateXPBar(){const t=this.gm.currentLevel||1,e=this.gm.maxLevel||20;if(this.levelLabel&&(t>=e?this.levelLabel.textContent=`LEVEL ${t} (MAX)`:this.levelLabel.textContent=`LEVEL ${t}`),this.levelBadgeText&&(t>=e?(this.levelBadgeText.textContent=`LV ${t} ★`,this.levelBadgeText.style.color="#ffcc00"):this.levelBadgeText.textContent=`LV ${t}`),this.xpBar){const i=this.gm.getXPProgress?this.gm.getXPProgress():0;this.xpBar.style.width=`${i*100}%`,i>.8?(this.xpBar.style.boxShadow="0 0 12px rgba(255, 255, 100, 0.8)",this._xpBarPulsing||(this._xpBarPulsing=!0,this.xpBar.style.animation="xpBarPulse 1.5s ease-in-out infinite")):(this.xpBar.style.boxShadow="0 0 6px rgba(255, 200, 0, 0.5)",this._xpBarPulsing=!1,this.xpBar.style.animation="none")}}_updateBossUI(){if(!this.enemyManager||!this.bossContainer)return;const t=this.enemyManager.getCryptLord(),e=this.enemyManager.getBoss();let i=null,n=!1;if(t&&t.bossActive&&!t.isDead?(i=t,n=!0):e&&e.isActive&&!e.isDead&&(i=e),!i){this.bossContainer.style.display="none";return}if(this.bossContainer.style.display="block",this.bossName&&(this.bossName.textContent=n?i.config.name:i.name),this.bossHealthBar){const s=i.health/i.maxHealth*100;this.bossHealthBar.style.width=`${s}%`,n?(i.bossPhase||1)===2?this.bossHealthBar.style.background="linear-gradient(90deg, #8844cc, #aa66ff)":this.bossHealthBar.style.background="linear-gradient(90deg, #882222, #cc4444)":i.phase===2?this.bossHealthBar.style.background="linear-gradient(90deg, #ff4400, #ff6622)":this.bossHealthBar.style.background="linear-gradient(90deg, #cc2222, #ff4444)",s<=50&&s>0?this.bossHealthBar.classList.add("phase-two"):this.bossHealthBar.classList.remove("phase-two")}if(this.bossPostureBar){const s=i.posture/i.maxPosture*100;this.bossPostureBar.style.width=`${s}%`}if(this.bossPhase){const s=n?i.bossPhase||1:i.phase;this.bossPhase.textContent=s===2?"PHASE 2":"",this.bossPhase.style.color=s===2?n?"#aa66ff":"#ff4400":"#ffcc00"}}}class Rv{constructor(t,e,i){this.gm=t,this.input=e,this.player=i,this.isOpen=!1,this.selectedTrack=0,this.tracks=["strength","vitality","stamina","spirit"],this._createUI(),window.addEventListener("keydown",n=>this._handleKey(n))}_createUI(){if(this.container=document.getElementById("crucible-container"),!this.container){console.warn("CrucibleUI: #crucible-container not found in HTML");return}this.promptEl=document.getElementById("crucible-prompt"),this.menuEl=document.getElementById("crucible-menu"),this.trackEls=this.tracks.map(t=>document.getElementById(`track-${t}`)),this.remnantEl=document.getElementById("crucible-remnant")}update(){if(!this.container)return;const t=this.gm.isNearBonfire(),e=this.gm.isDead;this.isOpen?(!t||e||this.input.keys.Escape)&&this._close():t&&!e?(this._showPrompt(!0),this.input.interact&&this._open()):this._showPrompt(!1),this.isOpen&&this._updateMenu()}_showPrompt(t){this.promptEl&&(this.promptEl.style.display=t?"block":"none")}_open(){this.isOpen=!0,this._showPrompt(!1),this.menuEl&&(this.menuEl.style.display="block"),document.pointerLockElement&&document.exitPointerLock()}_close(){this.isOpen=!1,this.menuEl&&(this.menuEl.style.display="none")}_handleKey(t){if(this.isOpen)switch(t.code){case"ArrowUp":case"KeyW":t.preventDefault(),this.selectedTrack=(this.selectedTrack-1+this.tracks.length)%this.tracks.length;break;case"ArrowDown":case"KeyS":t.preventDefault(),this.selectedTrack=(this.selectedTrack+1)%this.tracks.length;break;case"Enter":case"KeyF":t.preventDefault(),this._purchaseSelected();break;case"Escape":case"KeyE":t.preventDefault(),this._close();break}}_purchaseSelected(){const t=this.tracks[this.selectedTrack],e=this.gm.getTrackInfo(t);e.maxed||!e.canAfford||this.gm.infuse(t)&&(this.gm.applyInfusionBonuses(),this._applyVisualEffect(t))}_applyVisualEffect(t){if(!this.player||!this.player.mesh)return;const e=this.gm.infusions[t]||0,n=1+(this.gm.getTotalDepth()||0)*.01;switch(isFinite(n)&&n>0&&this.player.mesh.scale.setScalar(n),t){case"strength":this._addGlow(this.player.body,16729156,e*.1);break;case"vitality":this._addGlow(this.player.body,4521796,e*.1);break;case"stamina":this._addGlow(this.player.body,16777028,e*.1);break;case"spirit":this._addGlow(this.player.visor,4491519,e*.3);break}}_addGlow(t,e,i){if(!t||!t.material||!t.material.emissive)return;const n=t.material.emissive.getHex(),s=this._blendColors(n,e,.5);t.material.emissive.setHex(s),t.material.emissiveIntensity=Math.min(2,(t.material.emissiveIntensity||0)+i)}_blendColors(t,e,i){const n=t>>16&255,s=t>>8&255,o=t&255,a=e>>16&255,c=e>>8&255,l=e&255,h=Math.round(n+(a-n)*i),d=Math.round(s+(c-s)*i),u=Math.round(o+(l-o)*i);return h<<16|d<<8|u}_updateMenu(){this.remnantEl&&(this.remnantEl.textContent=`Remnant: ${this.gm.remnant}`),this.tracks.forEach((t,e)=>{const i=this.trackEls[e];if(!i)return;const n=this.gm.getTrackInfo(t),s=e===this.selectedTrack;i.classList.toggle("selected",s),i.classList.toggle("maxed",n.maxed),i.classList.toggle("affordable",n.canAfford&&!n.maxed);const o=i.querySelector(".track-name"),a=i.querySelector(".track-level"),c=i.querySelector(".track-cost"),l=i.querySelector(".track-bonus");o&&(o.textContent=n.name),a&&(a.textContent=`Lv. ${n.level}/${this.gm.MAX_TRACK_DEPTH}`),c&&(c.textContent=n.maxed?"MAX":`Cost: ${n.cost}`),l&&(l.textContent=n.bonus)})}}class Pv{constructor(t,e,i){this.gm=t,this.input=e,this.player=i,this.isOpen=!1,this._createUI(),this._setupInput()}_setupInput(){window.addEventListener("keydown",t=>{(t.code==="Tab"||t.code==="KeyP")&&(t.preventDefault(),this.toggle()),t.code==="Escape"&&this.isOpen&&this.close()})}_createUI(){this.container=document.createElement("div"),this.container.id="stats-ui",this.container.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      font-family: 'Cinzel', serif;
    `,this.panel=document.createElement("div"),this.panel.style.cssText=`
      background: linear-gradient(135deg, rgba(30, 25, 20, 0.95), rgba(20, 15, 10, 0.98));
      border: 2px solid rgba(180, 140, 80, 0.5);
      border-radius: 8px;
      padding: 32px 48px;
      min-width: 450px;
      max-width: 550px;
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.8), 0 0 80px rgba(180, 140, 80, 0.2) inset;
    `;const t=document.createElement("h2");t.textContent="CHARACTER STATS",t.style.cssText=`
      text-align: center;
      color: #ffd088;
      font-size: 24px;
      margin: 0 0 8px 0;
      text-shadow: 0 0 10px rgba(255, 180, 80, 0.5);
      letter-spacing: 4px;
    `,this.panel.appendChild(t),this.levelInfo=document.createElement("div"),this.levelInfo.style.cssText=`
      text-align: center;
      color: #aaa;
      font-size: 14px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(180, 140, 80, 0.3);
    `,this.panel.appendChild(this.levelInfo),this.pointsDisplay=document.createElement("div"),this.pointsDisplay.style.cssText=`
      text-align: center;
      margin-bottom: 24px;
    `,this.panel.appendChild(this.pointsDisplay),this.statsGrid=document.createElement("div"),this.statsGrid.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 12px;
    `,this.panel.appendChild(this.statsGrid),this.statDefs=[{id:"vigor",name:"Vigor",icon:"❤️",color:"#ff6666",desc:"+5 Max HP per point",getBonus:n=>`+${n*5} HP`},{id:"endurance",name:"Endurance",icon:"⚡",color:"#66ff88",desc:"+5 Max Stamina, +5% regen per point",getBonus:n=>`+${n*5} Stam, +${n*5}% regen`},{id:"strength",name:"Strength",icon:"⚔️",color:"#ff8844",desc:"+5% melee damage per point",getBonus:n=>`+${n*5}% dmg`},{id:"dexterity",name:"Dexterity",icon:"🏃",color:"#88ccff",desc:"+3% attack speed per point",getBonus:n=>`+${n*3}% speed`},{id:"mind",name:"Mind",icon:"✨",color:"#cc88ff",desc:"+5% cooldown reduction per point",getBonus:n=>`-${n*5}% cooldowns`}],this.statRows={};for(const n of this.statDefs){const s=this._createStatRow(n);this.statsGrid.appendChild(s),this.statRows[n.id]=s}const e=document.createElement("div");e.textContent="DERIVED STATS",e.style.cssText=`
      color: #888;
      font-size: 12px;
      letter-spacing: 2px;
      margin-top: 24px;
      margin-bottom: 12px;
      padding-top: 16px;
      border-top: 1px solid rgba(180, 140, 80, 0.3);
    `,this.panel.appendChild(e),this.derivedStats=document.createElement("div"),this.derivedStats.style.cssText=`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      font-size: 13px;
      color: #aaa;
    `,this.panel.appendChild(this.derivedStats);const i=document.createElement("div");i.textContent="Press TAB, P, or ESC to close",i.style.cssText=`
      text-align: center;
      color: #666;
      font-size: 12px;
      margin-top: 24px;
    `,this.panel.appendChild(i),this.container.appendChild(this.panel),document.body.appendChild(this.container)}_createStatRow(t){const e=document.createElement("div");e.className="stat-row",e.style.cssText=`
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      transition: background 0.2s;
    `;const i=document.createElement("span");i.textContent=t.icon,i.style.cssText=`
      font-size: 24px;
      width: 36px;
      text-align: center;
    `,e.appendChild(i);const n=document.createElement("div");n.style.cssText=`
      flex: 1;
    `;const s=document.createElement("div");s.textContent=t.name,s.style.cssText=`
      color: ${t.color};
      font-size: 16px;
      font-weight: bold;
    `,n.appendChild(s);const o=document.createElement("div");o.textContent=t.desc,o.style.cssText=`
      color: #888;
      font-size: 11px;
      margin-top: 2px;
    `,n.appendChild(o),e.appendChild(n);const a=document.createElement("div");a.className="stat-value",a.style.cssText=`
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      min-width: 40px;
      text-align: center;
    `,e.appendChild(a);const c=document.createElement("div");c.className="stat-bonus",c.style.cssText=`
      font-size: 12px;
      color: ${t.color};
      min-width: 100px;
      text-align: right;
    `,e.appendChild(c);const l=document.createElement("button");return l.textContent="+",l.className="add-point-btn",l.style.cssText=`
      width: 36px;
      height: 36px;
      border: 2px solid rgba(180, 140, 80, 0.5);
      border-radius: 50%;
      background: rgba(180, 140, 80, 0.2);
      color: #ffd088;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    `,l.addEventListener("mouseenter",()=>{l.disabled||(l.style.background="rgba(180, 140, 80, 0.4)",l.style.borderColor="#ffd088",l.style.transform="scale(1.1)")}),l.addEventListener("mouseleave",()=>{l.style.background="rgba(180, 140, 80, 0.2)",l.style.borderColor="rgba(180, 140, 80, 0.5)",l.style.transform="scale(1)"}),l.addEventListener("click",()=>{this.gm.spendStatPoint(t.id)&&(this._update(),this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:.5}),e.style.background="rgba(180, 140, 80, 0.3)",setTimeout(()=>{e.style.background="rgba(0, 0, 0, 0.3)"},200))}),e.appendChild(l),e.valueDisplay=a,e.bonusDisplay=c,e.addBtn=l,e.statDef=t,e}_update(){const t=this.gm.currentLevel||1;this.levelInfo.textContent=`Level ${t}`;const e=this.gm.getAvailableStatPoints();e>0?this.pointsDisplay.innerHTML=`
        <span style="color: #ffd088; font-size: 18px;">
          ${e} Point${e>1?"s":""} Available
        </span>
      `:this.pointsDisplay.innerHTML=`
        <span style="color: #666; font-size: 14px;">
          No points available — Level up to earn more!
        </span>
      `;for(const n of this.statDefs){const s=this.statRows[n.id],o=this.gm.stats[n.id]||0;s.valueDisplay.textContent=o,s.bonusDisplay.textContent=n.getBonus(o),e>0?(s.addBtn.disabled=!1,s.addBtn.style.opacity="1",s.addBtn.style.cursor="pointer"):(s.addBtn.disabled=!0,s.addBtn.style.opacity="0.3",s.addBtn.style.cursor="not-allowed")}const i=this.gm.getStatBonuses();this.derivedStats.innerHTML=`
      <div>Max HP: <span style="color: #ff6666">${this.gm.maxHealth}</span></div>
      <div>Max Stamina: <span style="color: #66ff88">${this.gm.maxStamina}</span></div>
      <div>Damage Mult: <span style="color: #ff8844">${(i.damageMult*100).toFixed(0)}%</span></div>
      <div>Attack Speed: <span style="color: #88ccff">${(i.attackSpeedMult*100).toFixed(0)}%</span></div>
      <div>Stamina Regen: <span style="color: #66ff88">${(i.staminaRegenMult*100).toFixed(0)}%</span></div>
      <div>Cooldown Mult: <span style="color: #cc88ff">${(i.cooldownMult*100).toFixed(0)}%</span></div>
    `}toggle(){this.isOpen?this.close():this.open()}open(){this.isOpen||(this.isOpen=!0,this._update(),this.container.style.display="flex",this.gm.audioManager&&this.gm.audioManager.play("menuOpen",{volume:.4}))}close(){this.isOpen&&(this.isOpen=!1,this.container.style.display="none",this.gm.audioManager&&this.gm.audioManager.play("menuBack",{volume:.3}))}update(){this.isOpen&&this._update()}}class Iv{constructor(t,e,i,n){this.gm=t,this.lootManager=e,this.equipmentManager=i,this.inputManager=n,this.isOpen=!1,this.activeTab="items",this.hoveredItem=null,this.container=null,this.tooltipEl=null,this.createUI(),this.createHotbar(),console.log("[InventoryUI] Initialized")}createUI(){if(this.container=document.createElement("div"),this.container.id="inventory-ui",this.container.style.cssText=`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 750px;
      max-height: 85vh;
      background: linear-gradient(145deg, rgba(15, 15, 20, 0.97), rgba(8, 8, 12, 0.99));
      border: 2px solid rgba(200, 170, 100, 0.4);
      border-radius: 6px;
      padding: 0;
      color: #ddd;
      font-family: 'Cinzel', 'Georgia', serif;
      display: none;
      z-index: 2000;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.9), inset 0 0 80px rgba(0, 0, 0, 0.4);
      overflow: hidden;
    `,document.body.appendChild(this.container),this.tooltipEl=document.createElement("div"),this.tooltipEl.id="inventory-tooltip",this.tooltipEl.style.cssText=`
      position: fixed;
      background: rgba(10, 10, 15, 0.98);
      border: 1px solid rgba(200, 170, 100, 0.5);
      border-radius: 4px;
      padding: 12px 16px;
      color: #ccc;
      font-family: 'Cinzel', 'Georgia', serif;
      font-size: 13px;
      max-width: 280px;
      z-index: 3000;
      pointer-events: none;
      display: none;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
    `,document.body.appendChild(this.tooltipEl),!document.getElementById("inventory-ui-styles")){const t=document.createElement("style");t.id="inventory-ui-styles",t.textContent=`
        #inventory-ui .tab-btn {
          background: rgba(30, 30, 40, 0.8);
          border: none;
          border-bottom: 2px solid transparent;
          color: #888;
          padding: 12px 24px;
          font-family: 'Cinzel', 'Georgia', serif;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        #inventory-ui .tab-btn:hover {
          color: #ccc;
          background: rgba(50, 50, 60, 0.8);
        }
        #inventory-ui .tab-btn.active {
          color: #ffc864;
          border-bottom-color: #ffc864;
          background: rgba(40, 35, 30, 0.8);
        }
        #inventory-ui .item-slot {
          width: 60px;
          height: 60px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(80, 80, 80, 0.3);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
          position: relative;
        }
        #inventory-ui .item-slot:hover {
          border-color: rgba(200, 170, 100, 0.6);
          background: rgba(40, 35, 30, 0.5);
          transform: scale(1.05);
        }
        #inventory-ui .item-slot .item-icon {
          width: 40px;
          height: 40px;
          border-radius: 4px;
        }
        #inventory-ui .item-slot .item-qty {
          position: absolute;
          bottom: 2px;
          right: 4px;
          font-size: 11px;
          color: #fff;
          text-shadow: 0 0 3px #000, 0 0 5px #000;
          font-weight: bold;
        }
        #inventory-ui .item-slot .hotkey-badge {
          position: absolute;
          top: 2px;
          left: 4px;
          font-size: 10px;
          color: #ffc864;
          background: rgba(0,0,0,0.7);
          padding: 1px 4px;
          border-radius: 2px;
        }
        #inventory-ui .equip-slot {
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(80, 80, 80, 0.3);
          border-radius: 4px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        #inventory-ui .equip-slot:hover {
          border-color: rgba(200, 170, 100, 0.5);
          background: rgba(30, 25, 20, 0.4);
        }
        #inventory-ui .equip-slot.empty {
          border-style: dashed;
          opacity: 0.6;
        }
        #inventory-ui .action-btn {
          padding: 6px 14px;
          border: 1px solid rgba(100, 100, 100, 0.4);
          border-radius: 3px;
          background: rgba(40, 40, 50, 0.6);
          color: #aaa;
          font-family: 'Cinzel', 'Georgia', serif;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.15s ease;
          margin-right: 6px;
        }
        #inventory-ui .action-btn:hover {
          background: rgba(60, 60, 70, 0.8);
          color: #fff;
          border-color: rgba(150, 150, 150, 0.5);
        }
        #inventory-ui .action-btn.use {
          border-color: rgba(100, 200, 100, 0.4);
          color: #8f8;
        }
        #inventory-ui .action-btn.use:hover {
          background: rgba(50, 80, 50, 0.6);
          border-color: rgba(100, 255, 100, 0.5);
        }
        #inventory-ui .action-btn.equip {
          border-color: rgba(100, 150, 255, 0.4);
          color: #8af;
        }
        #inventory-ui .action-btn.equip:hover {
          background: rgba(50, 60, 90, 0.6);
          border-color: rgba(100, 150, 255, 0.6);
        }
        #inventory-ui .action-btn.drop {
          border-color: rgba(180, 80, 80, 0.4);
          color: #f88;
        }
        #inventory-ui .action-btn.drop:hover {
          background: rgba(80, 40, 40, 0.6);
          border-color: rgba(255, 100, 100, 0.5);
        }
      `,document.head.appendChild(t)}}createHotbar(){this.hotbarEl=document.createElement("div"),this.hotbarEl.id="potion-hotbar",this.hotbarEl.style.cssText=`
      position: fixed;
      bottom: 120px;
      right: 20px;
      display: flex;
      gap: 8px;
      z-index: 500;
      pointer-events: none;
    `,document.body.appendChild(this.hotbarEl),this.updateHotbar()}updateHotbar(){const t=this.lootManager.getInventory(),e=t.items["health-potion"]||0,i=t.items["stamina-potion"]||0;this.hotbarEl.innerHTML=`
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(0,0,0,0.6);
        border: 1px solid rgba(255,80,80,0.4);
        border-radius: 6px;
        padding: 6px 10px;
        min-width: 50px;
      ">
        <div style="font-size: 10px; color: #ff6666; margin-bottom: 2px;">[1]</div>
        <div style="font-size: 18px; color: #ff4444;">❤</div>
        <div style="font-size: 12px; color: ${e>0?"#fff":"#666"}; font-family: 'Cinzel', serif;">${e}</div>
      </div>
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(0,0,0,0.6);
        border: 1px solid rgba(80,255,80,0.4);
        border-radius: 6px;
        padding: 6px 10px;
        min-width: 50px;
      ">
        <div style="font-size: 10px; color: #66ff66; margin-bottom: 2px;">[2]</div>
        <div style="font-size: 18px; color: #44ff44;">⚡</div>
        <div style="font-size: 12px; color: ${i>0?"#fff":"#666"}; font-family: 'Cinzel', serif;">${i}</div>
      </div>
    `}toggle(){this.isOpen=!this.isOpen,this.container.style.display=this.isOpen?"block":"none",this.tooltipEl.style.display="none",this.isOpen&&this.render(),this.equipmentManager.isUIVisible&&(this.equipmentManager.isUIVisible=!1,this.equipmentManager.uiContainer.style.display="none")}render(){const t=this.lootManager.getInventory(),e=this.equipmentManager.equipped,i=this.equipmentManager.inventory,n=this.equipmentManager.getEquipmentBonuses();this.container.innerHTML=`
      <!-- Header with gold -->
      <div style="
        background: linear-gradient(90deg, rgba(40, 35, 25, 0.9), rgba(30, 28, 22, 0.95), rgba(40, 35, 25, 0.9));
        padding: 15px 20px;
        border-bottom: 1px solid rgba(200, 170, 100, 0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <h2 style="margin: 0; color: #ffc864; font-size: 20px; text-shadow: 0 0 15px rgba(255, 200, 100, 0.4);">
          📦 Inventory
        </h2>
        <div style="
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.4);
          padding: 8px 16px;
          border-radius: 4px;
          border: 1px solid rgba(255, 215, 0, 0.3);
        ">
          <span style="font-size: 20px;">💰</span>
          <span style="color: #ffd700; font-size: 18px; font-weight: bold;">${t.gold.toLocaleString()}</span>
          <span style="color: #aa9933; font-size: 12px;">Gold</span>
        </div>
      </div>
      
      <!-- Tabs -->
      <div style="display: flex; background: rgba(20, 20, 25, 0.8); border-bottom: 1px solid rgba(80, 80, 80, 0.3);">
        <button class="tab-btn ${this.activeTab==="items"?"active":""}" data-tab="items">
          🎒 Items
        </button>
        <button class="tab-btn ${this.activeTab==="equipment"?"active":""}" data-tab="equipment">
          ⚔️ Equipment
        </button>
      </div>
      
      <!-- Content area -->
      <div style="padding: 20px; max-height: calc(85vh - 140px); overflow-y: auto;">
        ${this.activeTab==="items"?this.renderItemsTab(t):this.renderEquipmentTab(e,i,n)}
      </div>
      
      <!-- Footer -->
      <div style="
        padding: 10px 20px;
        background: rgba(15, 15, 20, 0.9);
        border-top: 1px solid rgba(80, 80, 80, 0.3);
        text-align: center;
        color: #666;
        font-size: 12px;
      ">
        Press <span style="color: #ffc864;">I</span> to close • <span style="color: #ff6666;">[1]</span> Health Potion • <span style="color: #66ff66;">[2]</span> Stamina Potion
      </div>
    `,this.attachEventListeners()}renderItemsTab(t){const e=[],i=[];for(const[n,s]of Object.entries(t.items)){const o=Object.values(gs).find(a=>a.id===n);o&&(o.type==="consumable"?e.push({...o,quantity:s}):o.type==="material"&&i.push({...o,quantity:s}))}return`
      <!-- Consumables Section -->
      <div style="margin-bottom: 25px;">
        <h3 style="color: #aaa; font-size: 14px; margin: 0 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid rgba(100, 100, 100, 0.2);">
          🧪 Consumables
        </h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${e.length===0?'<span style="color: #555; font-size: 13px;">No consumables</span>':""}
          ${e.map(n=>this.renderItemSlot(n)).join("")}
        </div>
      </div>
      
      <!-- Materials Section -->
      <div>
        <h3 style="color: #aaa; font-size: 14px; margin: 0 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid rgba(100, 100, 100, 0.2);">
          ⚗️ Materials
        </h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${i.length===0?'<span style="color: #555; font-size: 13px;">No materials</span>':""}
          ${i.map(n=>this.renderItemSlot(n)).join("")}
        </div>
      </div>
    `}renderItemSlot(t){const e="#"+t.color.toString(16).padStart(6,"0"),i=t.hotkey?`<span class="hotkey-badge">${t.hotkey}</span>`:"";return`
      <div class="item-slot" data-item-id="${t.id}" data-item-type="consumable"
           style="border-color: ${e}40;">
        <div class="item-icon" style="
          background: radial-gradient(circle at 30% 30%, ${e}, ${e}66);
          box-shadow: 0 0 10px ${e}44;
        "></div>
        ${i}
        <span class="item-qty">${t.quantity}</span>
      </div>
    `}renderEquipmentTab(t,e,i){return`
      <div style="display: flex; gap: 25px;">
        <!-- Equipped Section -->
        <div style="flex: 1;">
          <h3 style="color: #aaa; font-size: 14px; margin: 0 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid rgba(100, 100, 100, 0.2);">
            Equipped
          </h3>
          ${this.renderEquipSlot(t[le.WEAPON],"⚔️ Weapon",le.WEAPON)}
          ${this.renderEquipSlot(t[le.ARMOR],"🛡️ Armor",le.ARMOR)}
          ${this.renderEquipSlot(t[le.ACCESSORY],"💍 Accessory",le.ACCESSORY)}
          
          <!-- Total Bonuses -->
          <div style="
            margin-top: 20px;
            padding: 12px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(100, 200, 100, 0.2);
            border-radius: 4px;
          ">
            <h4 style="color: #8f8; font-size: 12px; margin: 0 0 8px 0;">Total Bonuses</h4>
            <div style="font-size: 11px; color: #afa; line-height: 1.6;">
              ${i.damage>0?`<div>+${i.damage} Damage</div>`:""}
              ${i.defense>0?`<div>+${i.defense} Defense</div>`:""}
              ${i.health!==0?`<div>${i.health>0?"+":""}${i.health} Max Health</div>`:""}
              ${i.stamina!==0?`<div>${i.stamina>0?"+":""}${i.stamina} Max Stamina</div>`:""}
              ${i.critChance>0?`<div>+${i.critChance}% Crit Chance</div>`:""}
              ${i.critDamage>0?`<div>+${i.critDamage}% Crit Damage</div>`:""}
              ${i.attackSpeed>0?`<div>+${i.attackSpeed}% Attack Speed</div>`:""}
              ${i.healthRegen>0?`<div>+${i.healthRegen} HP/sec</div>`:""}
              ${i.staminaRegen>0?`<div>+${i.staminaRegen}% Stamina Regen</div>`:""}
              ${Object.values(i).every(n=>n===0)?'<div style="color: #666;">No bonuses</div>':""}
            </div>
          </div>
        </div>
        
        <!-- Inventory Section -->
        <div style="flex: 1.5;">
          <h3 style="color: #aaa; font-size: 14px; margin: 0 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid rgba(100, 100, 100, 0.2);">
            Equipment Inventory (${e.length})
          </h3>
          <div style="max-height: 350px; overflow-y: auto;">
            ${e.length===0?'<span style="color: #555; font-size: 13px;">No equipment in inventory</span>':""}
            ${e.map(n=>this.renderEquipmentItem(n)).join("")}
          </div>
        </div>
      </div>
    `}renderEquipSlot(t,e,i){if(!t)return`
        <div class="equip-slot empty" data-slot="${i}">
          <span style="color: #555; font-size: 13px;">${e}: Empty</span>
        </div>
      `;const n=Object.entries(t.stats).map(([s,o])=>`${o>0?"+":""}${o} ${this.formatStatName(s)}`).join(" • ");return`
      <div class="equip-slot" data-slot="${i}" style="border-color: ${t.rarity.color}40;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="color: #888; font-size: 11px; margin-bottom: 2px;">${e}</div>
            <div style="color: ${t.rarity.color}; font-weight: bold;">${t.name}</div>
            <div style="color: #777; font-size: 11px; margin-top: 4px;">${n}</div>
          </div>
          <button class="action-btn drop unequip-btn" data-slot="${i}">Unequip</button>
        </div>
      </div>
    `}renderEquipmentItem(t){const e=Object.entries(t.stats).map(([i,n])=>`${n>0?"+":""}${n} ${this.formatStatName(i)}`).join(" • ");return`
      <div class="equip-slot" data-equip-id="${t.id}" style="border-color: ${t.rarity.color}30;">
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: ${t.rarity.color}; font-weight: bold;">${t.name}</span>
              <span style="color: #666; font-size: 11px; text-transform: capitalize;">${t.slot}</span>
            </div>
            <div style="color: #777; font-size: 11px; margin-top: 4px;">${e}</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <button class="action-btn equip equip-btn" data-equip-id="${t.id}">Equip</button>
            <button class="action-btn drop drop-equip-btn" data-equip-id="${t.id}">Drop</button>
          </div>
        </div>
      </div>
    `}formatStatName(t){return{damage:"DMG",defense:"DEF",health:"HP",stamina:"STA",critChance:"CRIT%",critDamage:"CRIT DMG",attackSpeed:"ATK SPD",healthRegen:"HP/s",staminaRegen:"STA REG"}[t]||t}attachEventListeners(){this.container.querySelectorAll(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{this.activeTab=t.dataset.tab,this.render()})}),this.container.querySelectorAll(".item-slot").forEach(t=>{t.addEventListener("mouseenter",e=>this.showItemTooltip(e,t.dataset.itemId)),t.addEventListener("mouseleave",()=>this.hideTooltip()),t.addEventListener("click",()=>this.handleItemClick(t.dataset.itemId))}),this.container.querySelectorAll(".equip-btn").forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation(),this.equipmentManager.equip(t.dataset.equipId),this.render(),this.updateHotbar()})}),this.container.querySelectorAll(".unequip-btn").forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation(),this.equipmentManager.unequip(t.dataset.slot),this.render(),this.updateHotbar()})}),this.container.querySelectorAll(".drop-equip-btn").forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation(),confirm("Drop this equipment?")&&(this.equipmentManager.dropEquipment(t.dataset.equipId),this.render())})})}showItemTooltip(t,e){const i=Object.values(gs).find(o=>o.id===e);if(!i)return;const n="#"+i.color.toString(16).padStart(6,"0");let s="";i.effect&&(i.effect.healAmount&&(s=`<div style="color: #ff6666; margin-top: 6px;">Restores ${i.effect.healAmount} HP</div>`),i.effect.staminaAmount&&(s=`<div style="color: #66ff66; margin-top: 6px;">Restores ${i.effect.staminaAmount} Stamina</div>`)),this.tooltipEl.innerHTML=`
      <div style="color: ${n}; font-weight: bold; margin-bottom: 6px;">${i.name}</div>
      <div style="color: #888; font-size: 11px; text-transform: capitalize;">${i.type}</div>
      <div style="margin-top: 8px; line-height: 1.4;">${i.description}</div>
      ${s}
      ${i.type==="consumable"?'<div style="color: #ffc864; font-size: 11px; margin-top: 10px;">Click to use</div>':""}
    `,this.tooltipEl.style.display="block",this.positionTooltip(t)}positionTooltip(t){const e=t.clientX+15,i=t.clientY+10;this.tooltipEl.getBoundingClientRect();const n=window.innerWidth-300,s=window.innerHeight-200;this.tooltipEl.style.left=Math.min(e,n)+"px",this.tooltipEl.style.top=Math.min(i,s)+"px"}hideTooltip(){this.tooltipEl.style.display="none"}handleItemClick(t){const e=Object.values(gs).find(i=>i.id===t);e&&e.type==="consumable"&&this.lootManager.useItem(t)&&(this.render(),this.updateHotbar(),this.gm?.audioManager&&this.gm.audioManager.play("itemPickup",{volume:.5}))}update(){this.hotbarEl&&this.updateHotbar(),this.inputManager.openEquipment&&this.toggle()}}class Dv{constructor(t,e,i){this.camera=t,this.target=e,this.input=i,this.distance=6,this.minDistance=3,this.maxDistance=12,this.height=2.5,this.sensitivity=.002,this.yaw=0,this.pitch=.3,this.minPitch=-.5,this.maxPitch=1.2,this.smoothing=8,this.currentPos=t.position.clone(),this.lockOnTarget=null,this.lockOnYaw=0,this.lockOnTransition=0,this.lockOnTransitionSpeed=5,this.shakeIntensity=0,this.shakeDuration=0,this.shakeTimer=0,this.shakeOffset=new b,this.shakeDecay=.92}shake(t=.3,e=.15){this.shakeIntensity=Math.min(this.shakeIntensity+t,1),this.shakeDuration=Math.max(this.shakeDuration,e),this.shakeTimer=0}shakeLight(){this.shake(.15,.1)}shakeMedium(){this.shake(.35,.15)}shakeHeavy(){this.shake(.5,.2)}update(t){const e=this.input.getMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch+e.y*this.sensitivity));const i=this.target.position.clone();if(i.y+=this.height,this.lockOnTarget&&this.lockOnTarget.mesh){const h=this.lockOnTarget.mesh.position,d=this.target.position.distanceTo(h);if(this.lockOnTarget.isDead||d>25)this.lockOnTarget=null,this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);else{const u=new b().subVectors(h,i);u.y=0,this.lockOnYaw=Math.atan2(u.x,u.z)+Math.PI,this.lockOnTransition=Math.min(1,this.lockOnTransition+this.lockOnTransitionSpeed*t)}}else this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);let n=this.yaw;if(this.lockOnTransition>0){let h=this.lockOnYaw-this.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;n=this.yaw+h*this.lockOnTransition}const s=Math.sin(n)*this.distance*Math.cos(this.pitch),o=Math.cos(n)*this.distance*Math.cos(this.pitch),a=this.distance*Math.sin(this.pitch),c=new b(i.x+s,i.y+a,i.z+o);this.currentPos.lerp(c,this.smoothing*t),this._updateShake(t),this.camera.position.copy(this.currentPos),this.camera.position.add(this.shakeOffset);const l=i.clone();if(this.lockOnTarget&&this.lockOnTarget.mesh&&this.lockOnTransition>0){const h=this.lockOnTarget.mesh.position.clone();h.y+=1,l.lerp(h,.35*this.lockOnTransition)}this.camera.lookAt(l)}_updateShake(t){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity),this.shakeIntensity*=this.shakeDecay,this.shakeTimer+=t,this.shakeTimer>=this.shakeDuration&&(this.shakeIntensity=0,this.shakeOffset.set(0,0,0))):this.shakeOffset.set(0,0,0)}setLockOnTarget(t){if(this.lockOnTarget=t,t&&t.mesh){const e=this.target.position.clone();e.y+=this.height;const i=new b().subVectors(t.mesh.position,e);i.y=0,this.lockOnYaw=Math.atan2(i.x,i.z)+Math.PI}}isLockedOn(){return this.lockOnTarget!==null&&this.lockOnTransition>.5}clearLockOn(){this.lockOnTarget=null}getForwardDirection(){return new b(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).normalize()}getRightDirection(){return new b(-Math.cos(this.yaw),0,Math.sin(this.yaw)).normalize()}}class Lv{constructor(t){this.camera=t,this.context=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.initialized=!1,this.masterVolume=.7,this.musicVolume=.4,this.sfxVolume=.8,this.listener=null,this.currentMusic=null,this.musicSource=null,this.soundCooldowns={},this.soundBuffers={}}async init(){if(!this.initialized)try{this.context=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.context.createGain(),this.masterGain.gain.value=this.masterVolume,this.masterGain.connect(this.context.destination),this.musicGain=this.context.createGain(),this.musicGain.gain.value=this.musicVolume,this.musicGain.connect(this.masterGain),this.sfxGain=this.context.createGain(),this.sfxGain.gain.value=this.sfxVolume,this.sfxGain.connect(this.masterGain),this.listener=this.context.listener,await this.generateSoundBuffers(),this.initialized=!0}catch(t){console.warn("[AUDIO] Failed to initialize:",t)}}async generateSoundBuffers(){this.soundBuffers.swordSwing=this.createNoiseBuffer(.15,"highpass",2e3,.3),this.soundBuffers.hitImpact=this.createImpactBuffer(.12,150,.6),this.soundBuffers.criticalHit=this.createImpactBuffer(.15,200,.8),this.soundBuffers.playerDamage=this.createImpactBuffer(.2,80,.5),this.soundBuffers.enemyGrunt1=this.createGruntBuffer(.2,120),this.soundBuffers.enemyGrunt2=this.createGruntBuffer(.25,100),this.soundBuffers.enemyGrunt3=this.createGruntBuffer(.18,140),this.soundBuffers.dodge=this.createNoiseBuffer(.2,"bandpass",800,.25),this.soundBuffers.footstepStone=this.createFootstepBuffer(.08,"stone"),this.soundBuffers.footstepMetal=this.createFootstepBuffer(.1,"metal"),this.soundBuffers.death=this.createDeathBuffer(.8),this.soundBuffers.postureBreak=this.createPostureBreakBuffer(.3),this.soundBuffers.itemPickup=this.createChimeBuffer(.3,[523,659,784]),this.soundBuffers.doorUnlock=this.createChimeBuffer(.4,[392,494,587]),this.soundBuffers.menuSelect=this.createChimeBuffer(.15,[880]),this.soundBuffers.menuConfirm=this.createChimeBuffer(.2,[523,659]),this.soundBuffers.bossRoar=this.createRoarBuffer(.6),this.soundBuffers.staminaDepleted=this.createStaminaDepletedBuffer(.15),this.soundBuffers.levelUp=this.createLevelUpBuffer(.8),this.soundBuffers.dash=this.createNoiseBuffer(.15,"highpass",3e3,.4),this.soundBuffers.chargedSwing=this.createImpactBuffer(.25,100,.7),this.soundBuffers.parryReady=this.createChimeBuffer(.1,[440]),this.soundBuffers.parrySuccess=this.createImpactBuffer(.15,300,.6),this.soundBuffers.riposte=this.createImpactBuffer(.2,180,.8),this.soundBuffers.warCry=this.createRoarBuffer(.4),this.soundBuffers.abilityUnlock=this.createChimeBuffer(.5,[523,659,784,1047]),this.soundBuffers.chestOpen=this.createChestOpenBuffer(.5)}createChestOpenBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0),o=Math.floor(e*.2);for(let d=0;d<o;d++){const u=d/e,f=Math.sin(2*Math.PI*(200-u*150)*u)*.3,m=(Math.random()*2-1)*.15,_=Math.sin(d/o*Math.PI)*.5;s[d]=(f+m)*_}const a=o,c=i-a,l=[392,494,587,784],h=Math.floor(c/l.length);for(let d=0;d<l.length;d++){const u=l[d],f=a+d*h;for(let m=0;m<h;m++){const _=m/e,g=Math.exp(-_*4)*.5;s[f+m]=Math.sin(2*Math.PI*u*_)*g}}return n}createLevelUpBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0),o=[523,659,784,1047],a=i/o.length;for(let c=0;c<i;c++){const l=Math.min(Math.floor(c/a),o.length-1),h=c%a/a,d=c/i,u=Math.sin(h*Math.PI)*.8,f=1-Math.pow(d,3)*.5,m=o[l],_=Math.sin(2*Math.PI*m*(c/e)),g=Math.sin(2*Math.PI*m*2*(c/e))*.3,p=Math.sin(2*Math.PI*m*3*(c/e))*.15;s[c]=(_+g+p)*u*f*.4}return{buffer:n,filterType:null,filterFreq:null}}createNoiseBuffer(t,e,i,n){const s=this.context.sampleRate,o=s*t,a=this.context.createBuffer(1,o,s),c=a.getChannelData(0);for(let l=0;l<o;l++){const h=l/o,d=Math.sin(h*Math.PI);c[l]=(Math.random()*2-1)*d*n}return{buffer:a,filterType:e,filterFreq:i}}createImpactBuffer(t,e,i){const n=this.context.sampleRate,s=n*t,o=this.context.createBuffer(1,s,n),a=o.getChannelData(0);for(let c=0;c<s;c++){const l=c/s,h=Math.exp(-l*10),d=Math.sin(2*Math.PI*e*l*(1-l*.5)),u=(Math.random()*2-1)*.3;a[c]=(d+u)*h*i}return{buffer:o}}createGruntBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),o=s.getChannelData(0);for(let a=0;a<n;a++){const c=a/n,l=Math.sin(c*Math.PI)*Math.exp(-c*3),h=Math.sin(2*Math.PI*e*a/i),d=Math.sin(2*Math.PI*e*2.5*a/i)*.5,u=Math.sin(2*Math.PI*e*4*a/i)*.25,f=(Math.random()*2-1)*.2;o[a]=(h+d+u+f)*l*.4}return{buffer:s}}createFootstepBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),o=s.getChannelData(0),a=e==="metal"?400:200,c=e==="metal"?.6:.4;for(let l=0;l<n;l++){const h=l/n,d=Math.exp(-h*20),u=Math.sin(2*Math.PI*a*h),f=(Math.random()*2-1)*c;o[l]=(u*.5+f)*d*.3}return{buffer:s}}createDeathBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let o=0;o<i;o++){const a=o/i,c=Math.exp(-a*2)*(1-a),l=150*(1-a*.5),h=Math.sin(2*Math.PI*l*o/e),d=Math.tanh(h*3),u=(Math.random()*2-1)*.3*(1-a);s[o]=(d+u)*c*.5}return{buffer:n}}createPostureBreakBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let o=0;o<i;o++){const a=o/i,c=Math.exp(-a*5),l=Math.sin(2*Math.PI*800*o/e),h=Math.sin(2*Math.PI*1200*o/e),d=(Math.random()*2-1)*.5;s[o]=(l*.3+h*.2+d)*c*.4}return{buffer:n}}createChimeBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),o=s.getChannelData(0);for(let a=0;a<n;a++){const c=a/n,l=Math.exp(-c*4);let h=0;e.forEach((d,u)=>{const f=u*.03*i;if(a>f){const m=(a-f)/i;h+=Math.sin(2*Math.PI*d*m)/e.length}}),o[a]=h*l*.3}return{buffer:s}}createStaminaDepletedBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let o=0;o<i;o++){const a=o/i,c=Math.exp(-a*8)*Math.sin(a*Math.PI*2),l=(Math.random()*2-1)*.6,h=Math.sin(2*Math.PI*200*o/e)*.3;s[o]=(l+h)*Math.abs(c)*.25}return{buffer:n}}createRoarBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let o=0;o<i;o++){const a=o/i;let c;a<.1?c=a/.1:a<.7?c=1:c=(1-a)/.3;const l=Math.sin(2*Math.PI*60*o/e),h=Math.sin(2*Math.PI*65*o/e),d=Math.sin(2*Math.PI*120*o/e)*.5,u=(Math.random()*2-1)*.4,f=Math.tanh((l+h+d+u)*2);s[o]=f*c*.5}return{buffer:n}}play(t,e={}){if(!this.initialized||!this.soundBuffers[t])return;const{position:i=null,volume:n=1,pitch:s=1,cooldown:o=0,variation:a=0}=e,c=performance.now();if(o>0){const f=this.soundCooldowns[t]||0;if(c-f<o)return;this.soundCooldowns[t]=c}const l=this.soundBuffers[t],h=this.context.createBufferSource();h.buffer=l.buffer;const d=s+(Math.random()*2-1)*a;h.playbackRate.value=Math.max(.5,Math.min(2,d));const u=this.context.createGain();if(u.gain.value=n,l.filterType){const f=this.context.createBiquadFilter();f.type=l.filterType,f.frequency.value=l.filterFreq,h.connect(f),f.connect(u)}else h.connect(u);if(i&&this.camera){const f=this.context.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1,f.maxDistance=50,f.rolloffFactor=1,f.setPosition(i.x,i.y,i.z),u.connect(f),f.connect(this.sfxGain)}else u.connect(this.sfxGain);return h.start(),h}playEnemyGrunt(t){const e=["enemyGrunt1","enemyGrunt2","enemyGrunt3"],i=e[Math.floor(Math.random()*e.length)];this.play(i,{position:t,volume:.6,pitch:.9+Math.random()*.2,cooldown:200})}playFootstep(t,e="stone"){const i=e==="metal"?"footstepMetal":"footstepStone";this.play(i,{position:t,volume:.4,pitch:.9+Math.random()*.2,cooldown:150})}updateListener(){if(!this.initialized||!this.camera||!this.listener)return;const t=this.camera.position,e=new b;this.camera.getWorldDirection(e);const i=this.camera.up;this.listener.positionX?(this.listener.positionX.value=t.x,this.listener.positionY.value=t.y,this.listener.positionZ.value=t.z,this.listener.forwardX.value=e.x,this.listener.forwardY.value=e.y,this.listener.forwardZ.value=e.z,this.listener.upX.value=i.x,this.listener.upY.value=i.y,this.listener.upZ.value=i.z):(this.listener.setPosition(t.x,t.y,t.z),this.listener.setOrientation(e.x,e.y,e.z,i.x,i.y,i.z))}startAmbientMusic(){this.initialized&&this.currentMusic!=="ambient"&&(this.stopMusic(),this.currentMusic="ambient",this.createAmbientDrone())}startBossMusic(){this.initialized&&this.currentMusic!=="boss"&&(this.stopMusic(),this.currentMusic="boss",this.createBossMusic())}createAmbientDrone(){const t=this.context.createOscillator();t.type="sine",t.frequency.value=55;const e=this.context.createOscillator();e.type="sine",e.frequency.value=82.5;const i=this.context.createOscillator();i.type="sine",i.frequency.value=.1;const n=this.context.createGain();n.gain.value=2,i.connect(n),n.connect(t.frequency);const s=this.context.createGain();s.gain.value=.15;const o=this.context.createGain();o.gain.value=.1,t.connect(s),e.connect(o),s.connect(this.musicGain),o.connect(this.musicGain),t.start(),e.start(),i.start(),this.musicSource={oscs:[t,e,i]}}createBossMusic(){const t=this.context.createOscillator();t.type="sawtooth",t.frequency.value=55;const e=this.context.createWaveShaper();e.curve=this.makeDistortionCurve(20);const i=this.context.createOscillator();i.type="square",i.frequency.value=2;const n=this.context.createGain();n.gain.value=.3;const s=this.context.createGain();s.gain.value=.2,i.connect(n),n.connect(s.gain),t.connect(e),e.connect(s),s.connect(this.musicGain),t.start(),i.start(),this.musicSource={oscs:[t,i]}}makeDistortionCurve(t){const i=new Float32Array(44100),n=Math.PI/180;for(let s=0;s<44100;++s){const o=s*2/44100-1;i[s]=(3+t)*o*20*n/(Math.PI+t*Math.abs(o))}return i}stopMusic(){this.musicSource&&this.musicSource.oscs&&this.musicSource.oscs.forEach(t=>{try{t.stop()}catch{}}),this.musicSource=null,this.currentMusic=null}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&(this.masterGain.gain.value=this.masterVolume)}setMusicVolume(t){this.musicVolume=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}resume(){this.context&&this.context.state==="suspended"&&this.context.resume()}}class kv{constructor(t){this.scene=t,this.particles=[],this.slashTrails=[],this.embers=[],this.dustMotes=[],this.sparkPool=[],this.bloodPool=[],this.wispPool=[],this.ringPool=[],this.POOL_SIZES={spark:60,blood:40,wisp:20,ring:5},this._initSharedAssets(),this._initPools(),this._initEmbers(),this._initDustMotes()}_initSharedAssets(){this.sparkGeo=new Ae;const t=new Float32Array([0,.05,0,-.02,0,0,0,-.05,0,.02,0,0,0,.05,0,0,0,.02,0,-.05,0,0,0,-.02]);this.sparkGeo.setAttribute("position",new Ue(t,3)),this.bloodGeo=new il(.06,0),this.emberGeo=new Vt(.02,4,4),this.wispGeo=new Vt(.1,8,8),this.playerWispGeo=new Vt(.15,8,8),this.mistGeo=new Vt(.2,6,6),this.sparkMat=new $t({color:16755268,transparent:!0,opacity:1,side:fe}),this.critSparkMat=new $t({color:16777096,transparent:!0,opacity:1,side:fe}),this.bloodMat=new $t({color:8912930,transparent:!0,opacity:.9}),this.emberMat=new $t({color:16729088,transparent:!0,opacity:.7}),this.wispMat=new $t({color:8956671,transparent:!0,opacity:.8,blending:vi}),this.playerSoulMat=new $t({color:8965375,transparent:!0,opacity:.9,blending:vi}),this.deathMistMat=new $t({color:4456465,transparent:!0,opacity:.7}),this.slashMat=new $t({color:6719743,transparent:!0,opacity:.6,side:fe,blending:vi,depthWrite:!1}),this.heavySlashMat=new $t({color:16737860,transparent:!0,opacity:.7,side:fe,blending:vi,depthWrite:!1})}_initPools(){for(let t=0;t<this.POOL_SIZES.spark;t++){const e=new D(this.sparkGeo,this.sparkMat);e.visible=!1,e.userData.inPool=!0,this.scene.add(e),this.sparkPool.push(e)}for(let t=0;t<this.POOL_SIZES.blood;t++){const e=new D(this.bloodGeo,this.bloodMat);e.visible=!1,e.userData.inPool=!0,this.scene.add(e),this.bloodPool.push(e)}for(let t=0;t<this.POOL_SIZES.wisp;t++){const e=new D(this.wispGeo,this.wispMat);e.visible=!1,e.userData.inPool=!0,this.scene.add(e),this.wispPool.push(e)}for(let t=0;t<this.POOL_SIZES.ring;t++){const e=new Is(.1,.3,32),i=new $t({color:16763972,transparent:!0,opacity:.8,side:fe,blending:vi,depthWrite:!1}),n=new D(e,i);n.visible=!1,n.userData.inPool=!0,this.scene.add(n),this.ringPool.push(n)}console.log("[ParticleManager] Pools initialized:",{sparks:this.sparkPool.length,blood:this.bloodPool.length,wisps:this.wispPool.length,rings:this.ringPool.length})}_getFromPool(t){for(const e of t)if(e.userData.inPool)return e.userData.inPool=!1,e.visible=!0,e.scale.set(1,1,1),e.rotation.set(0,0,0),e;return null}_returnToPool(t){t.visible=!1,t.userData.inPool=!0}_initEmbers(){for(let e=0;e<30;e++)this._spawnEmber()}_spawnEmber(){const t=new D(this.emberGeo,this.emberMat);t.position.set((Math.random()-.5)*60,Math.random()*.5,(Math.random()-.5)*100-20),this.scene.add(t),this.embers.push({mesh:t,velocity:new b((Math.random()-.5)*.3,.3+Math.random()*.5,(Math.random()-.5)*.3),life:Math.random()*10,maxLife:8+Math.random()*6})}_initDustMotes(){this.dustGeo=new Ve(.03,.03),this.dustMat=new $t({color:16777198,transparent:!0,opacity:.4,blending:vi,depthWrite:!1,side:fe});for(let e=0;e<80;e++){const i=new D(this.dustGeo,this.dustMat);i.position.set((Math.random()-.5)*40,.5+Math.random()*5,(Math.random()-.5)*80-20),this.scene.add(i),this.dustMotes.push({mesh:i,baseY:i.position.y,driftSpeed:.1+Math.random()*.2,driftAmplitude:.3+Math.random()*.5,phase:Math.random()*Math.PI*2,rotateSpeed:(Math.random()-.5)*2})}}spawnSlashTrail(t,e,i=!1){const n=i?1.8:1.4,s=i?Math.PI*.7:Math.PI*.5,o=12,a=i?.15:.1,c=new Ac;c.moveTo(0,0);for(let f=0;f<=o;f++){const m=-s/2+s*f/o,_=Math.cos(m)*n,g=Math.sin(m)*n;f===0?c.moveTo(_,g):c.lineTo(_,g)}for(let f=o;f>=0;f--){const m=-s/2+s*f/o,_=Math.cos(m)*(n-a),g=Math.sin(m)*(n-a);c.lineTo(_,g)}c.closePath();const l=new Ea(c),h=i?this.heavySlashMat:this.slashMat,d=new D(l,h);d.position.copy(t),d.position.y+=1.2;const u=Math.atan2(e.x,e.z);d.rotation.y=u,d.rotation.x=i?-.5:.2,this.scene.add(d),this.slashTrails.push({mesh:d,life:0,maxLife:i?.35:.25,scaleStart:.3,scaleEnd:1,ownedGeometry:l})}spawnHitSparks(t,e=8,i=!1){const n=i?Math.min(e*2,16):Math.min(e,10);for(let s=0;s<n;s++){const o=this._getFromPool(this.sparkPool);if(!o)continue;o.userData.isCritical=i,o.position.copy(t),o.position.y+=.8+Math.random()*.4;const a=Math.random()*Math.PI*2,c=2+Math.random()*4,l=2+Math.random()*3;this.particles.push({mesh:o,velocity:new b(Math.cos(a)*c,l,Math.sin(a)*c),gravity:-15,life:0,maxLife:.3+Math.random()*.2,type:"spark",pool:this.sparkPool})}}spawnBlood(t,e,i=6){const n=Math.min(i,10);for(let s=0;s<n;s++){const o=this._getFromPool(this.bloodPool);if(!o)continue;o.position.copy(t),o.position.y+=.8+Math.random()*.6;const c=Math.atan2(e.x,e.z)+(Math.random()-.5)*Math.PI*.6,l=3+Math.random()*3,h=1+Math.random()*3;this.particles.push({mesh:o,velocity:new b(Math.sin(c)*l,h,Math.cos(c)*l),gravity:-18,life:0,maxLife:.6+Math.random()*.4,type:"blood",scale:.8+Math.random()*.4,pool:this.bloodPool})}}spawnPostureBreak(t){this.spawnHitSparks(t,12,!0);const e=this._getFromPool(this.ringPool);e&&(e.position.copy(t),e.position.y+=1,e.rotation.x=-Math.PI/2,e.scale.set(1,1,1),this.particles.push({mesh:e,velocity:new b(0,0,0),gravity:0,life:0,maxLife:.5,type:"ring",expandRate:8,pool:this.ringPool}))}spawnBlockSparks(t){for(let i=0;i<5;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.position.copy(t),n.position.y+=1;const s=Math.random()*Math.PI*2,o=1+Math.random()*2;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*o,1+Math.random()*2,Math.sin(s)*o),gravity:-10,life:0,maxLife:.25,type:"spark",isBlock:!0,pool:this.sparkPool})}}spawnDeathBurst(t){for(let e=0;e<6;e++){const i=this._getFromPool(this.bloodPool);if(!i)continue;const n=e/6*Math.PI*2;i.position.copy(t),i.position.y+=1,this.particles.push({mesh:i,velocity:new b(Math.cos(n)*4,2+Math.random()*3,Math.sin(n)*4),gravity:-15,life:0,maxLife:.8,type:"blood",scale:1.2,pool:this.bloodPool})}for(let e=0;e<3;e++){const i=this._getFromPool(this.wispPool);i&&(i.position.copy(t),i.position.y+=.5+Math.random()*.5,i.position.x+=(Math.random()-.5)*.5,i.position.z+=(Math.random()-.5)*.5,this.particles.push({mesh:i,velocity:new b((Math.random()-.5)*.5,2+Math.random()*1,(Math.random()-.5)*.5),gravity:0,life:0,maxLife:1.5+Math.random()*.5,type:"wisp",pool:this.wispPool}))}}update(t){this._updateDeathEffects(t);for(let i=this.particles.length-1;i>=0;i--){const n=this.particles[i];if(n.life+=t,n.velocity.y+=n.gravity*t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.type==="ring"){const o=1+n.expandRate*n.life;n.mesh.scale.set(o,o,1)}if(n.type==="playerSoul"&&(n.mesh.position.x+=Math.sin(n.life*2)*t*.5,n.mesh.position.z+=Math.cos(n.life*2)*t*.5),n.type==="deathMist"){const o=1+n.life*.5;n.mesh.scale.setScalar(o)}const s=1-n.life/n.maxLife;if(n.scale){const o=n.scale*s;n.mesh.scale.setScalar(Math.max(.1,o))}n.type==="blood"&&n.mesh.position.y<.05&&(n.mesh.position.y=.05,n.velocity.x*=.5,n.velocity.z*=.5,n.velocity.y=0),n.type==="spark"&&(n.mesh.rotation.x+=t*10,n.mesh.rotation.z+=t*8),n.life>=n.maxLife&&(n.pool?this._returnToPool(n.mesh):(this.scene.remove(n.mesh),n.mesh.geometry?.dispose?.()),this.particles.splice(i,1))}for(let i=this.slashTrails.length-1;i>=0;i--){const n=this.slashTrails[i];n.life+=t;const s=n.life/n.maxLife,o=Qt.lerp(n.scaleStart,n.scaleEnd,s);if(n.mesh.scale.setScalar(o),n.isAttackArc&&n.rotationSpeed){const a=Math.pow(s,.6);if(n.mesh.rotation.z=n.initialRotationZ+a*n.rotationSpeed,n.material&&s>.4){const l=(s-.4)/.6;n.material.opacity=(1-l)*.85}}n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.ownedGeometry?.dispose(),n.material?.dispose(),this.slashTrails.splice(i,1))}for(let i=this.embers.length-1;i>=0;i--){const n=this.embers[i];n.life+=t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.mesh.position.x+=Math.sin(n.life*2)*.01,n.mesh.position.z+=Math.cos(n.life*1.5)*.01,n.life>=n.maxLife&&(n.life=0,n.mesh.position.set((Math.random()-.5)*60,Math.random()*.3,(Math.random()-.5)*100-20),n.maxLife=8+Math.random()*6)}const e=Date.now()*.001;for(const i of this.dustMotes)i.mesh.position.y=i.baseY+Math.sin(e*i.driftSpeed+i.phase)*i.driftAmplitude,i.mesh.position.x+=Math.sin(e*.5+i.phase)*.002,i.mesh.position.z+=Math.cos(e*.3+i.phase)*.002,i.mesh.rotation.z+=i.rotateSpeed*t}spawnPlayerDeathEffect(t,e){for(let i=0;i<8;i++){const n=this._getFromPool(this.wispPool);n&&(n.position.copy(t),n.position.y+=.5+Math.random()*.8,n.position.x+=(Math.random()-.5)*.6,n.position.z+=(Math.random()-.5)*.6,this.particles.push({mesh:n,velocity:new b((Math.random()-.5)*1.5,3+Math.random()*2,(Math.random()-.5)*1.5),gravity:-.5,life:0,maxLife:2.5+Math.random()*1.5,type:"playerSoul",pool:this.wispPool}))}for(let i=0;i<10;i++){const n=this._getFromPool(this.bloodPool);if(!n)continue;n.position.copy(t),n.position.y+=Math.random()*1.5;const s=Math.random()*Math.PI*2,o=1+Math.random()*2;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*o,.5+Math.random()*1,Math.sin(s)*o),gravity:-1,life:0,maxLife:2+Math.random()*1,type:"deathMist",scale:1,pool:this.bloodPool})}this._createDeathVignette(e),e&&this._triggerCameraShake(e)}_createDeathVignette(t){const e=new Ve(2,2),i=new Ye({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uIntensity:{value:0}},vertexShader:`
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
          
          float vignette = smoothstep(0.3, 1.2, dist);
          vec3 color = mix(vec3(0.0), vec3(0.3, 0.0, 0.0), vignette);
          
          float pulse = sin(uTime * 2.0) * 0.1 + 0.9;
          float alpha = vignette * uIntensity * pulse;
          
          gl_FragColor = vec4(color, alpha * 0.85);
        }
      `}),n=new D(e,i);n.frustumCulled=!1,n.renderOrder=999,this.scene.add(n),this.deathVignette={mesh:n,material:i,life:0,fadeInDuration:.5,holdDuration:2.5,fadeOutDuration:.5}}_triggerCameraShake(t){this.cameraShake||(this.cameraShake={originalPosition:t.position.clone(),intensity:.3,decay:.95,duration:.8,elapsed:0,camera:t})}_updateDeathEffects(t){if(this.deathVignette){const e=this.deathVignette;e.life+=t,e.material.uniforms.uTime.value=e.life;const i=e.fadeInDuration+e.holdDuration+e.fadeOutDuration;if(e.life<e.fadeInDuration)e.material.uniforms.uIntensity.value=e.life/e.fadeInDuration;else if(e.life<e.fadeInDuration+e.holdDuration)e.material.uniforms.uIntensity.value=1;else if(e.life<i){const n=(e.life-e.fadeInDuration-e.holdDuration)/e.fadeOutDuration;e.material.uniforms.uIntensity.value=1-n}else this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose(),this.deathVignette=null}if(this.cameraShake){const e=this.cameraShake;if(e.elapsed+=t,e.elapsed<e.duration){const i=1-e.elapsed/e.duration,n=e.intensity*i;e.camera.position.x+=(Math.random()-.5)*n,e.camera.position.y+=(Math.random()-.5)*n*.5,e.camera.position.z+=(Math.random()-.5)*n}else this.cameraShake=null}}spawnLevelUpEffect(t){for(let i=0;i<20;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.userData.isLevelUp=!0;const s=i/20*Math.PI*2;n.position.copy(t),n.position.y+=1;const o=3+Math.random()*4,a=3+Math.random()*4;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*o,a,Math.sin(s)*o),gravity:-8,life:0,maxLife:.8+Math.random()*.4,type:"spark",isLevelUp:!0,pool:this.sparkPool})}for(let i=0;i<8;i++){const n=this._getFromPool(this.wispPool);n&&(n.position.copy(t),n.position.y+=.2,n.position.x+=(Math.random()-.5)*1.5,n.position.z+=(Math.random()-.5)*1.5,this.particles.push({mesh:n,velocity:new b((Math.random()-.5)*.5,4+Math.random()*2,(Math.random()-.5)*.5),gravity:0,life:0,maxLife:1.5+Math.random()*.5,type:"wisp",isLevelUp:!0,pool:this.wispPool}))}const e=this._getFromPool(this.ringPool);e&&(e.position.copy(t),e.position.y+=.1,e.rotation.x=-Math.PI/2,e.scale.set(.5,.5,1),e.userData.isLevelUp=!0,this.particles.push({mesh:e,velocity:new b(0,0,0),gravity:0,life:0,maxLife:.8,type:"ring",expandRate:12,isLevelUp:!0,pool:this.ringPool}))}spawnDashEffect(t,e){for(let i=0;i<12;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.userData.isDash=!0,n.position.copy(t),n.position.y+=.5+Math.random()*1,n.position.x+=(Math.random()-.5)*.8,n.position.z+=(Math.random()-.5)*.8;const s=e.clone().multiplyScalar(-1),o=(Math.random()-.5)*.5;this.particles.push({mesh:n,velocity:s.clone().multiplyScalar(5+Math.random()*3).add(new b(o,Math.random()*2,o)),gravity:-2,life:0,maxLife:.3+Math.random()*.2,type:"spark",isDash:!0,pool:this.sparkPool})}}spawnParryEffect(t){for(let i=0;i<15;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.userData.isParry=!0,n.position.copy(t),n.position.y+=1.2,n.position.z+=.5;const s=i/15*Math.PI*2,o=4+Math.random()*3;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*o*.5,Math.sin(s)*o,-2),gravity:-6,life:0,maxLife:.4+Math.random()*.2,type:"spark",isParry:!0,pool:this.sparkPool})}const e=this._getFromPool(this.ringPool);e&&(e.position.copy(t),e.position.y+=1.2,e.rotation.x=0,e.rotation.y=0,e.scale.set(.3,.3,1),e.userData.isParry=!0,this.particles.push({mesh:e,velocity:new b(0,0,0),gravity:0,life:0,maxLife:.4,type:"ring",expandRate:8,isParry:!0,pool:this.ringPool}))}spawnWarCryEffect(t){for(let i=0;i<25;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.userData.isWarCry=!0;const s=i/25*Math.PI*2;n.position.copy(t),n.position.y+=.5;const o=.5+Math.random()*.3;n.position.x+=Math.cos(s)*o,n.position.z+=Math.sin(s)*o;const a=5+Math.random()*4;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*a,2+Math.random()*3,Math.sin(s)*a),gravity:-4,life:0,maxLife:.6+Math.random()*.4,type:"spark",isWarCry:!0,pool:this.sparkPool})}for(let i=0;i<6;i++){const n=this._getFromPool(this.wispPool);if(!n)continue;n.userData.isWarCry=!0;const s=i/6*Math.PI*2;n.position.copy(t),n.position.x+=Math.cos(s)*.8,n.position.z+=Math.sin(s)*.8,this.particles.push({mesh:n,velocity:new b(Math.cos(s)*2,5+Math.random()*2,Math.sin(s)*2),gravity:1,life:0,maxLife:1+Math.random()*.5,type:"wisp",isWarCry:!0,pool:this.wispPool})}const e=this._getFromPool(this.ringPool);e&&(e.position.copy(t),e.position.y+=.1,e.rotation.x=-Math.PI/2,e.scale.set(1,1,1),e.userData.isWarCry=!0,this.particles.push({mesh:e,velocity:new b(0,0,0),gravity:0,life:0,maxLife:.6,type:"ring",expandRate:15,isWarCry:!0,pool:this.ringPool}))}spawnAttackArc(t,e,i=!1){const n=i?16737860:8956671,s=i?2:1.6,o=i?Math.PI*.8:Math.PI*.6,a=i?.18:.12,c=i?.35:.22,l=16,h=new Ac;for(let g=0;g<=l;g++){const p=-o/2+o*g/l,x=Math.cos(p)*s,y=Math.sin(p)*s;g===0?h.moveTo(x,y):h.lineTo(x,y)}for(let g=l;g>=0;g--){const p=-o/2+o*g/l,x=Math.cos(p)*(s-a),y=Math.sin(p)*(s-a);h.lineTo(x,y)}h.closePath();const d=new Ea(h),u=new $t({color:n,transparent:!0,opacity:i?.85:.7,side:fe,blending:vi,depthWrite:!1}),f=new D(d,u);f.position.copy(t),f.position.y+=1.1;const m=Math.atan2(e.x,e.z);f.rotation.y=m,f.rotation.x=i?-.6:.15,f.rotation.z=i?.2:-.1,this.scene.add(f);const _=i?10:6;for(let g=0;g<_;g++){const p=this._getFromPool(this.sparkPool);if(!p)continue;const x=-o/2+o*g/(_-1),y=t.clone();y.y+=1.1;const v=Math.cos(x)*s,w=Math.sin(x)*s;y.x+=v*Math.cos(m)-w*Math.sin(m)*.3,y.z+=v*Math.sin(m)+w*Math.cos(m)*.3,y.y+=w*.7,p.position.copy(y),p.userData.isAttackSpark=!0;const E=i?3:2;this.particles.push({mesh:p,velocity:new b((Math.random()-.5)*E,(Math.random()-.5)*E,(Math.random()-.5)*E),gravity:-8,life:0,maxLife:.2+Math.random()*.15,type:"spark",isAttackSpark:!0,pool:this.sparkPool})}this.slashTrails.push({mesh:f,life:0,maxLife:c,scaleStart:.2,scaleEnd:1,ownedGeometry:d,material:u,isAttackArc:!0,rotationSpeed:i?2.5:4,initialRotationZ:f.rotation.z})}dispose(){this.particles.forEach(t=>{t.pool?this._returnToPool(t.mesh):(this.scene.remove(t.mesh),t.mesh.geometry?.dispose?.())}),this.particles=[],this.slashTrails.forEach(t=>{this.scene.remove(t.mesh),t.ownedGeometry?.dispose()}),this.slashTrails=[],this.embers.forEach(t=>{this.scene.remove(t.mesh)}),this.embers=[],this.dustMotes.forEach(t=>{this.scene.remove(t.mesh)}),this.dustMotes=[],[...this.sparkPool,...this.bloodPool,...this.wispPool,...this.ringPool].forEach(t=>{this.scene.remove(t)}),this.sparkPool=[],this.bloodPool=[],this.wispPool=[],this.ringPool=[],this.sparkGeo?.dispose(),this.bloodGeo?.dispose(),this.emberGeo?.dispose(),this.wispGeo?.dispose(),this.playerWispGeo?.dispose(),this.mistGeo?.dispose(),this.dustGeo?.dispose(),this.sparkMat?.dispose(),this.critSparkMat?.dispose(),this.bloodMat?.dispose(),this.emberMat?.dispose(),this.wispMat?.dispose(),this.playerSoulMat?.dispose(),this.deathMistMat?.dispose(),this.slashMat?.dispose(),this.heavySlashMat?.dispose(),this.dustMat?.dispose()}}class Nv{constructor(t){this.camera=t,this.texts=[],this.container=document.createElement("div"),this.container.id="floating-text-container",this.container.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 500;
      overflow: hidden;
    `,document.body.appendChild(this.container)}spawn(t,e,i={}){const{color:n="#00ff88",fontSize:s=18,duration:o=1.5,isLevelUp:a=!1}=i,c=document.createElement("div");c.className="floating-text",c.textContent=t,c.style.cssText=`
      position: absolute;
      font-family: 'Cinzel', serif;
      font-size: ${a?28:s}px;
      font-weight: ${a?"bold":"normal"};
      color: ${n};
      text-shadow: 
        0 0 4px rgba(0,0,0,0.9),
        0 0 8px ${n}44,
        ${a?"0 0 20px "+n+"88":""};
      white-space: nowrap;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease-out;
      opacity: 1;
      ${a?"animation: levelUpPulse 0.5s ease-out;":""}
    `,this.container.appendChild(c),this.texts.push({element:c,worldPos:e.clone(),startY:e.y,age:0,duration:o,isLevelUp:a,floatSpeed:a?1.5:2.5})}update(t){const e=window.innerWidth,i=window.innerHeight;for(let n=this.texts.length-1;n>=0;n--){const s=this.texts[n];s.age+=t,s.worldPos.y+=s.floatSpeed*t;const o=s.worldPos.clone().project(this.camera),a=(o.x*.5+.5)*e,c=(-o.y*.5+.5)*i;o.z>1||a<-100||a>e+100||c<-100||c>i+100?s.element.style.display="none":(s.element.style.display="block",s.element.style.left=`${a}px`,s.element.style.top=`${c}px`);const l=s.duration*.6;if(s.age>l){const h=(s.age-l)/(s.duration-l);s.element.style.opacity=1-h}s.age>=s.duration&&(this.container.removeChild(s.element),this.texts.splice(n,1))}}dispose(){this.texts.forEach(t=>{t.element.parentNode&&t.element.parentNode.removeChild(t.element)}),this.texts=[],this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}const tu=document.createElement("style");tu.textContent=`
  @keyframes levelUpPulse {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    50% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }
`;document.head.appendChild(tu);const Ov={uniforms:{tDiffuse:{value:null},brightness:{value:.05},contrast:{value:1.1},saturation:{value:1.1},vignetteIntensity:{value:.2},vignetteRadius:{value:.9}},vertexShader:`
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
  `},Li=new ty({antialias:!0,preserveDrawingBuffer:!0});Li.setSize(window.innerWidth,window.innerHeight);Li.setPixelRatio(Math.min(window.devicePixelRatio,2));Li.shadowMap.enabled=!0;Li.shadowMap.type=qh;Li.toneMapping=Nc;Li.toneMappingExposure=2;Li.outputColorSpace=Ie;document.body.appendChild(Li.domElement);const Ti=new Of;Ti.fog=null;Ti.background=new vt(8900331);const hn=new ii(60,window.innerWidth/window.innerHeight,.1,200);hn.position.set(0,5,15);hn.lookAt(0,0,0);const Bv=new si(window.innerWidth*Math.min(window.devicePixelRatio,2),window.innerHeight*Math.min(window.devicePixelRatio,2),{minFilter:ze,magFilter:ze,format:fi,colorSpace:Ie}),Ao=new oy(Li,Bv),Uv=new ay(Ti,hn);Ao.addPass(Uv);const eu=new Rs(new st(window.innerWidth,window.innerHeight),.15,.2,.95);Ao.addPass(eu);const Fv=new Yd(Ov);Ao.addPass(Fv);const zv=new zd,xe=new hy,Mi=new Sv(Li.domElement),vn=new Lv(hn),vo=new kv(Ti),_s=new Cv(xe);let Wh=!1;const La=async()=>{Wh||(await vn.init(),vn.startAmbientMusic(),Wh=!0,document.removeEventListener("click",La),document.removeEventListener("keydown",La))};document.addEventListener("click",La);document.addEventListener("keydown",La);const ne=new Mv(Ti),Bi=new Zy(Ti,xe);Bi.initItems(ne.getItemSpawns());const Vi=new wv(Ti,xe),Mn=new Av(Ti,xe,Vi);Vi.equipmentManager=Mn;const Dr=new Ev(Ti,ne.terrain,ne.ruinsManager,ne.caveManager,Vi,Mn,Mi),iu=new Iv(xe,Vi,Mn,Mi),Jt=new jy(Ti,xe,Mi);Jt.setWorld(ne);const ao=new Dv(hn,Jt.mesh,Mi);Jt.setCameraController(ao);const al=new dv(Ti,xe,Jt,ne,vo,Vi),nu=new Nv(hn);xe.setCheckpoint(ne.bonfirePosition.clone());xe.setEntities(Jt,al,Ti,hn);xe.bonfirePosition=ne.bonfirePosition;xe.audioManager=vn;xe.particleManager=vo;xe.hud=_s;xe.cameraController=ao;xe.itemManager=Bi;xe.floatingText=nu;xe.lootManager=Vi;xe.equipmentManager=Mn;_s.setEnemyManager(al);const ha=new Rv(xe,Mi,Jt),su=new Pv(xe,Mi,Jt);_s.setStatsUI(su);window.addEventListener("resize",()=>{hn.aspect=window.innerWidth/window.innerHeight,hn.updateProjectionMatrix(),Li.setSize(window.innerWidth,window.innerHeight),Ao.setSize(window.innerWidth,window.innerHeight),eu.resolution.set(window.innerWidth,window.innerHeight)});function ou(){requestAnimationFrame(ou);const r=Math.min(zv.getDelta(),.05);if(Mi.update(r),xe.isDead||(Mi.useHealthPotion&&Vi.useItem("health-potion"),Mi.useStaminaPotion&&Vi.useItem("stamina-potion")),xe.updateHitstop(r))vo.update(r*.1);else if(Jt.update(r),al.update(r,Jt),vo.update(r),ne.terrain&&ne.terrain.update&&ne.terrain.update(Jt.mesh.position.x,Jt.mesh.position.z),ne.foliage&&ne.foliage.update&&ne.foliage.update(Jt.mesh.position.x,Jt.mesh.position.z),ne.villages&&ne.villages.update&&ne.villages.update(Jt.mesh.position.x,Jt.mesh.position.z),ne.ruinsManager&&ne.ruinsManager.update&&ne.ruinsManager.update(Jt.mesh.position.x,Jt.mesh.position.z),ne.caveManager&&ne.caveManager.update&&ne.caveManager.update(Jt.mesh.position.x,Jt.mesh.position.z),Dr&&Dr.update&&Dr.update(Jt.mesh.position.x,Jt.mesh.position.z,r),ne.bossArena&&ne.bossArena.active){const f=ne.updateBossArena(r,Jt.mesh.position);f>0&&!Jt.isInvincible&&(xe.takeDamage(f,"magical",0,!1),Jt.flashDamage(),_s&&_s.flashDamage(.5),ao&&ao.shakeLight(),Bi.showNotification("Ritual Circle burns!","damage"))}if(ao.update(r),Bi.update(Jt.mesh.position),Vi.update(Jt.mesh.position),Mn.updateEquipmentDrops(Jt.mesh.position,r),iu.update(),_s.update(),ha.update(),su.update(),xe.update(r),vn.updateListener(),nu.update(r),xe.collectBloodstain(),Jt.activeAttack){const f=ne.checkHiddenWallHit(Jt.activeAttack.position,Jt.activeAttack.range);f&&!f.revealed&&ne.revealHiddenWall(f.id)}const e=ne.getNearbyDoor(Jt.mesh.position),i=document.getElementById("door-prompt"),n=document.getElementById("door-name");e&&!ha.isOpen?(i.style.display="block",n.textContent=e.name,Bi.hasKey(e.id)?(i.classList.remove("locked"),Mi.interact&&(ne.tryOpenDoor(e.id,Bi),Bi.showNotification(`${e.name} Opened`))):(i.classList.add("locked"),n.textContent=`${e.name} (Locked)`)):i.style.display="none";const s=ne.getNearbyLadder(Jt.mesh.position),o=document.getElementById("ladder-prompt"),a=document.getElementById("ladder-name");s&&!ha.isOpen?(o.style.display="block",a.textContent=s.id==="shortcut-ladder"?"to Cathedral":"Ladder",Mi.interact&&s.id==="shortcut-ladder"&&(Jt.mesh.position.set(-15,0,-12),Jt.velocity.set(0,0,0),Bi.showNotification("Climbed to Cathedral"),vn.playSound("footstep"))):o.style.display="none";const c=ne.getNearbyShortcut(Jt.mesh.position),l=document.getElementById("shortcut-prompt"),h=document.getElementById("shortcut-action"),d=document.getElementById("shortcut-name");c&&!ha.isOpen?(l.style.display="block",h.textContent="remove bar from",d.textContent="Shortcut Door",Mi.interact&&ne.unlockShortcut(c.id)&&(Bi.showNotification("Shortcut Unlocked — Path to Cathedral opened!"),vn.playSound("hit"))):l.style.display="none";const u=ne.checkInsideIllusoryWall(Jt.mesh.position);if(u&&!u.revealed){ne.revealHiddenWall(u.id);const f=document.getElementById("illusory-notification");f.style.display="block",setTimeout(()=>{f.style.display="none"},2500),vn.playSound("hit")}if(xe.bloodstainMesh){const f=.6+Math.sin(Date.now()*.005)*.3;xe.bloodstainMesh.material.opacity=f}Ao.render()}ou();window.gameManager=xe;window.player=Jt;window.world=ne;window.itemManager=Bi;window.lootManager=Vi;window.equipmentManager=Mn;window.inventoryUI=iu;window.audioManager=vn;window.particleManager=vo;xe.playerMesh=Jt.mesh;Mn.applyEquipmentStats();Mn.updateWeaponVisual();
