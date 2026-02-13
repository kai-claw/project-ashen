(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const ao="182",Jl=0,Oo=1,jl=2,sr=1,Xc=2,as=3,Zn=0,He=1,ge=2,yn=0,Oi=1,_n=2,Bo=3,ko=4,Ql=5,oi=100,th=101,eh=102,nh=103,ih=104,sh=200,rh=201,ah=202,oh=203,la=204,ha=205,ch=206,lh=207,hh=208,uh=209,dh=210,fh=211,ph=212,mh=213,gh=214,ua=0,da=1,fa=2,ki=3,pa=4,ma=5,ga=6,_a=7,Yc=0,_h=1,xh=2,Sn=0,qc=1,Kc=2,Zc=3,oo=4,$c=5,Jc=6,jc=7,Qc=300,di=301,zi=302,xa=303,va=304,vr=306,li=1e3,Nn=1001,Ma=1002,Ne=1003,vh=1004,Ps=1005,Be=1006,Rr=1007,hi=1008,en=1009,tl=1010,el=1011,ps=1012,co=1013,bn=1014,vn=1015,sn=1016,lo=1017,ho=1018,ms=1020,nl=35902,il=35899,sl=1021,rl=1022,pn=1023,Bn=1026,ui=1027,al=1028,uo=1029,Gi=1030,fo=1031,po=1033,rr=33776,ar=33777,or=33778,cr=33779,ya=35840,Sa=35841,wa=35842,ba=35843,Ta=36196,Ea=37492,Aa=37496,Ca=37488,Ra=37489,Pa=37490,Da=37491,Ia=37808,La=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,Ba=37814,ka=37815,za=37816,Ga=37817,Va=37818,Ha=37819,Wa=37820,Xa=37821,Ya=36492,qa=36494,Ka=36495,Za=36283,$a=36284,Ja=36285,ja=36286,Mh=3200,ol=0,yh=1,Xn="",on="srgb",Vi="srgb-linear",ur="linear",ae="srgb",xi=7680,zo=519,Sh=512,wh=513,bh=514,mo=515,Th=516,Eh=517,go=518,Ah=519,Qa=35044,Go="300 es",Mn=2e3,dr=2001;function cl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ch(){const s=fr("canvas");return s.style.display="block",s}const Vo={};function pr(...s){const t="THREE."+s.shift();console.log(t,...s)}function Ut(...s){const t="THREE."+s.shift();console.warn(t,...s)}function jt(...s){const t="THREE."+s.shift();console.error(t,...s)}function gs(...s){const t=s.join(" ");t in Vo||(Vo[t]=!0,Ut(...s))}function Rh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ho=1234567;const ls=Math.PI/180,_s=180/Math.PI;function wn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Xt(s,t,e){return Math.max(t,Math.min(e,s))}function _o(s,t){return(s%t+t)%t}function Ph(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Dh(s,t,e){return s!==t?(e-s)/(t-s):0}function hs(s,t,e){return(1-e)*s+e*t}function Ih(s,t,e,n){return hs(s,t,1-Math.exp(-e*n))}function Lh(s,t=1){return t-Math.abs(_o(s,t*2)-t)}function Uh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Nh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Fh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Oh(s,t){return s+Math.random()*(t-s)}function Bh(s){return s*(.5-Math.random())}function kh(s){s!==void 0&&(Ho=s);let t=Ho+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zh(s){return s*ls}function Gh(s){return s*_s}function Vh(s){return(s&s-1)===0&&s!==0}function Hh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xh(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ue={DEG2RAD:ls,RAD2DEG:_s,generateUUID:wn,clamp:Xt,euclideanModulo:_o,mapLinear:Ph,inverseLerp:Dh,lerp:hs,damp:Ih,pingpong:Lh,smoothstep:Uh,smootherstep:Nh,randInt:Fh,randFloat:Oh,randFloatSpread:Bh,seededRandom:kh,degToRad:zh,radToDeg:Gh,isPowerOfTwo:Vh,ceilPowerOfTwo:Hh,floorPowerOfTwo:Wh,setQuaternionFromProperEuler:Xh,normalize:oe,denormalize:fn};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ts{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(o<=0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=M;return}if(u!==M||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*M;m<0&&(d=-d,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);p=Math.sin(p*v)/y,o=Math.sin(o*v)/y,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+M*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+M*o;const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pr.copy(this).projectOnVector(t),this.sub(Pr)}reflect(t){return this.sub(Pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new E,Wo=new Ts;class kt{constructor(t,e,n,i,r,a,o,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],M=i[0],m=i[3],p=i[6],v=i[1],y=i[4],w=i[7],T=i[2],A=i[5],R=i[8];return r[0]=a*M+o*v+c*T,r[3]=a*m+o*y+c*A,r[6]=a*p+o*w+c*R,r[1]=l*M+h*v+u*T,r[4]=l*m+h*y+u*A,r[7]=l*p+h*w+u*R,r[2]=d*M+f*v+g*T,r[5]=d*m+f*y+g*A,r[8]=d*p+f*w+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=u*M,t[1]=(i*l-h*n)*M,t[2]=(o*n-i*a)*M,t[3]=d*M,t[4]=(h*e-i*c)*M,t[5]=(i*r-o*e)*M,t[6]=f*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Dr.makeScale(t,e)),this}rotate(t){return this.premultiply(Dr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dr=new kt,Xo=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yo=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yh(){const s={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(i.r=On(i.r),i.g=On(i.g),i.b=On(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?ur:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Vi]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:Xo,fromXYZ:Yo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Xo,fromXYZ:Yo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),s}const Qt=Yh();function On(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vi;class qh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vi===void 0&&(vi=fr("canvas")),vi.width=t.width,vi.height=t.height;const i=vi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kh=0;class xo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ir(i[a].image)):r.push(Ir(i[a]))}else r=Ir(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ir(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let Zh=0;const Lr=new E;class ke extends qi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Nn,i=Nn,r=Be,a=hi,o=pn,c=en,l=ke.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=wn(),this.name="",this.source=new xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lr).x}get height(){return this.source.getSize(Lr).y}get depth(){return this.source.getSize(Lr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case li:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case li:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Qc;ke.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,i=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,w=(f+1)/2,T=(p+1)/2,A=(h+d)/4,R=(u+M)/4,D=(g+m)/4;return y>w&&y>T?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=R/n):w>T?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=A/i,r=D/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=R/r,i=D/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-M)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $h extends qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new ke(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new xo(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ye extends $h{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ll extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),Is.subVectors(this.max,$i),Mi.subVectors(t.a,$i),yi.subVectors(t.b,$i),Si.subVectors(t.c,$i),kn.subVectors(yi,Mi),zn.subVectors(Si,yi),Qn.subVectors(Mi,Si);let e=[0,-kn.z,kn.y,0,-zn.z,zn.y,0,-Qn.z,Qn.y,kn.z,0,-kn.x,zn.z,0,-zn.x,Qn.z,0,-Qn.x,-kn.y,kn.x,0,-zn.y,zn.x,0,-Qn.y,Qn.x,0];return!Ur(e,Mi,yi,Si,Is)||(e=[1,0,0,0,1,0,0,0,1],!Ur(e,Mi,yi,Si,Is))?!1:(Ls.crossVectors(kn,zn),e=[Ls.x,Ls.y,Ls.z],Ur(e,Mi,yi,Si,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rn=[new E,new E,new E,new E,new E,new E,new E,new E],hn=new E,Ds=new qn,Mi=new E,yi=new E,Si=new E,kn=new E,zn=new E,Qn=new E,$i=new E,Is=new E,Ls=new E,ti=new E;function Ur(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ti.fromArray(s,r);const o=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),c=t.dot(ti),l=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const jh=new qn,Ji=new E,Nr=new E;class Mr{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ji,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Nr)),this.expandByPoint(Ji.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Pn=new E,Fr=new E,Us=new E,Gn=new E,Or=new E,Ns=new E,Br=new E;class hl{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fr.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(Fr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Us),o=Gn.dot(this.direction),c=-Gn.dot(Us),l=Gn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const M=1/h;u*=M,d*=M,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fr).addScaledVector(Us,d),f}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,r){Or.subVectors(e,t),Ns.subVectors(n,t),Br.crossVectors(Or,Ns);let a=this.direction.dot(Br),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const c=o*this.direction.dot(Ns.crossVectors(Gn,Ns));if(c<0)return null;const l=o*this.direction.dot(Or.cross(Gn));if(l<0||c+l>a)return null;const h=-o*Gn.dot(Br);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,i,r,a,o,c,l,h,u,d,f,g,M,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,d,f,g,M,m)}set(t,e,n,i,r,a,o,c,l,h,u,d,f,g,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,M=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-M*l,e[9]=-o*c,e[2]=M-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,M=l*u;e[0]=d+M*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,M=l*u;e[0]=d-M*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,M=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+M,e[1]=c*u,e[5]=M*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=M-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-M*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+M,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,tu)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Vn.crossVectors(n,$e),Vn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Vn.crossVectors(n,$e)),Vn.normalize(),Fs.crossVectors($e,Vn),i[0]=Vn.x,i[4]=Fs.x,i[8]=$e.x,i[1]=Vn.y,i[5]=Fs.y,i[9]=$e.y,i[2]=Vn.z,i[6]=Fs.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],v=n[3],y=n[7],w=n[11],T=n[15],A=i[0],R=i[4],D=i[8],x=i[12],S=i[1],P=i[5],F=i[9],O=i[13],W=i[2],X=i[6],H=i[10],B=i[14],$=i[3],ct=i[7],it=i[11],dt=i[15];return r[0]=a*A+o*S+c*W+l*$,r[4]=a*R+o*P+c*X+l*ct,r[8]=a*D+o*F+c*H+l*it,r[12]=a*x+o*O+c*B+l*dt,r[1]=h*A+u*S+d*W+f*$,r[5]=h*R+u*P+d*X+f*ct,r[9]=h*D+u*F+d*H+f*it,r[13]=h*x+u*O+d*B+f*dt,r[2]=g*A+M*S+m*W+p*$,r[6]=g*R+M*P+m*X+p*ct,r[10]=g*D+M*F+m*H+p*it,r[14]=g*x+M*O+m*B+p*dt,r[3]=v*A+y*S+w*W+T*$,r[7]=v*R+y*P+w*X+T*ct,r[11]=v*D+y*F+w*H+T*it,r[15]=v*x+y*O+w*B+T*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15],v=c*f-l*d,y=o*f-l*u,w=o*d-c*u,T=a*f-l*h,A=a*d-c*h,R=a*u-o*h;return e*(M*v-m*y+p*w)-n*(g*v-m*T+p*A)+i*(g*y-M*T+p*R)-r*(g*w-M*A+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],v=u*m*l-M*d*l+M*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,w=h*M*l-g*u*l+g*o*f-a*M*f-h*o*p+a*u*p,T=g*u*c-h*M*c-g*o*d+a*M*d+h*o*m-a*u*m,A=e*v+n*y+i*w+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=v*R,t[1]=(M*d*r-u*m*r-M*i*f+n*m*f+u*i*p-n*d*p)*R,t[2]=(o*m*r-M*c*r+M*i*l-n*m*l-o*i*p+n*c*p)*R,t[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*R,t[4]=y*R,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*R,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*p-e*c*p)*R,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*f+e*c*f)*R,t[8]=w*R,t[9]=(g*u*r-h*M*r-g*n*f+e*M*f+h*n*p-e*u*p)*R,t[10]=(a*M*r-g*o*r+g*n*l-e*M*l-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*R,t[12]=T*R,t[13]=(h*M*i-g*u*i+g*n*d-e*M*d-h*n*m+e*u*m)*R,t[14]=(g*o*i-a*M*i-g*n*c+e*M*c+a*n*m-e*o*m)*R,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,M=a*h,m=a*u,p=o*u,v=c*l,y=c*h,w=c*u,T=n.x,A=n.y,R=n.z;return i[0]=(1-(M+p))*T,i[1]=(f+w)*T,i[2]=(g-y)*T,i[3]=0,i[4]=(f-w)*A,i[5]=(1-(d+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+y)*R,i[9]=(m-v)*R,i[10]=(1-(d+M))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=wi.set(i[0],i[1],i[2]).length();const a=wi.set(i[4],i[5],i[6]).length(),o=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),un.copy(this);const l=1/r,h=1/a,u=1/o;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Mn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(o===Mn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===dr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Mn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,M;if(c)g=1/(a-r),M=a/(a-r);else if(o===Mn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===dr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new E,un=new _e,Qh=new E(0,0,0),tu=new E(1,1,1),Vn=new E,Fs=new E,$e=new E,qo=new _e,Ko=new Ts;class Tn{constructor(t=0,e=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eu=0;const Zo=new E,bi=new Ts,Dn=new _e,Os=new E,ji=new E,nu=new E,iu=new Ts,$o=new E(1,0,0),Jo=new E(0,1,0),jo=new E(0,0,1),Qo={type:"added"},su={type:"removed"},Ti={type:"childadded",child:null},kr={type:"childremoved",child:null};class Ae extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new E,e=new Tn,n=new Ts,i=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new kt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis($o,t)}rotateY(t){return this.rotateOnAxis(Jo,t)}rotateZ(t){return this.rotateOnAxis(jo,t)}translateOnAxis(t,e){return Zo.copy(t).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($o,t)}translateY(t){return this.translateOnAxis(Jo,t)}translateZ(t){return this.translateOnAxis(jo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ji,Os,this.up):Dn.lookAt(Os,ji,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(Dn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qo),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(su),kr.child=t,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qo),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,iu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new E(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new E,In=new E,zr=new E,Ln=new E,Ei=new E,Ai=new E,tc=new E,Gr=new E,Vr=new E,Hr=new E,Wr=new Se,Xr=new Se,Yr=new Se;class cn{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){dn.subVectors(i,e),In.subVectors(n,e),zr.subVectors(t,e);const a=dn.dot(dn),o=dn.dot(In),c=dn.dot(zr),l=In.dot(In),h=In.dot(zr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Wr.setScalar(0),Xr.setScalar(0),Yr.setScalar(0),Wr.fromBufferAttribute(t,e),Xr.fromBufferAttribute(t,n),Yr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Wr,r.x),a.addScaledVector(Xr,r.y),a.addScaledVector(Yr,r.z),a}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),In.subVectors(t,e),dn.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ei.subVectors(i,n),Ai.subVectors(r,n),Gr.subVectors(t,n);const c=Ei.dot(Gr),l=Ai.dot(Gr);if(c<=0&&l<=0)return e.copy(n);Vr.subVectors(t,i);const h=Ei.dot(Vr),u=Ai.dot(Vr);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ei,a);Hr.subVectors(t,r);const f=Ei.dot(Hr),g=Ai.dot(Hr);if(g>=0&&f<=g)return e.copy(r);const M=f*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ai,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return tc.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(tc,o);const p=1/(m+M+d);return a=M*p,o=d*p,e.copy(n).addScaledVector(Ei,a).addScaledVector(Ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function qr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=_o(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qr(a,r,t+1/3),this.g=qr(a,r,t),this.b=qr(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,i),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Qt.workingToColorSpace(Oe.copy(this),t),Math.round(Xt(Oe.r*255,0,255))*65536+Math.round(Xt(Oe.g*255,0,255))*256+Math.round(Xt(Oe.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Oe.copy(this),e);const n=Oe.r,i=Oe.g,r=Oe.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=on){Qt.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,i=Oe.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Bs);const n=hs(Hn.h,Bs.h,e),i=hs(Hn.s,Bs.s,e),r=hs(Hn.l,Bs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Ot;Ot.NAMES=dl;let ru=0;class gi extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Oi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ha,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class me extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new E,ks=new nt;let au=0;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:au++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qa&&(t.usage=this.usage),t}}class fl extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pl extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ou=0;const an=new _e,Kr=new Ae,Ci=new E,Je=new qn,Qi=new qn,Pe=new E;class we extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cl(t)?pl:fl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Je.min,Qi.min),Je.expandByPoint(Pe),Pe.addVectors(Je.max,Qi.max),Je.expandByPoint(Pe)):(Je.expandByPoint(Qi.min),Je.expandByPoint(Qi.max))}Je.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pe.fromBufferAttribute(o,l),c&&(Ci.fromBufferAttribute(t,l),Pe.add(Ci)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new E,c[D]=new E;const l=new E,h=new E,u=new E,d=new nt,f=new nt,g=new nt,M=new E,m=new E;function p(D,x,S){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[D].add(M),o[x].add(M),o[S].add(M),c[D].add(m),c[x].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,x=v.length;D<x;++D){const S=v[D],P=S.start,F=S.count;for(let O=P,W=P+F;O<W;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new E,w=new E,T=new E,A=new E;function R(D){T.fromBufferAttribute(i,D),A.copy(T);const x=o[D];y.copy(x),y.sub(T.multiplyScalar(T.dot(x))).normalize(),w.crossVectors(A,x);const P=w.dot(c[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,x=v.length;D<x;++D){const S=v[D],P=S.start,F=S.count;for(let O=P,W=P+F;O<W;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,a=new E,o=new E,c=new E,l=new E,h=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new qe(d,h,u)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new _e,ei=new hl,zs=new Mr,nc=new E,Gs=new E,Vs=new E,Hs=new E,Zr=new E,Ws=new E,ic=new E,Xs=new E;class z extends Ae{constructor(t=new we,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Zr.fromBufferAttribute(u,t),a?Ws.addScaledVector(Zr,h):Ws.addScaledVector(Zr.sub(e),h))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(zs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(zs,nc)===null||ei.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ec.copy(r).invert(),ei.copy(t.ray).applyMatrix4(ec),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=v,T=y;w<T;w+=3){const A=o.getX(w),R=o.getX(w+1),D=o.getX(w+2);i=Ys(this,p,t,n,l,h,u,A,R,D),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),w=o.getX(m+2);i=Ys(this,a,t,n,l,h,u,v,y,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let w=v,T=y;w<T;w+=3){const A=w,R=w+1,D=w+2;i=Ys(this,p,t,n,l,h,u,A,R,D),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const v=m,y=m+1,w=m+2;i=Ys(this,a,t,n,l,h,u,v,y,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function cu(s,t,e,n,i,r,a,o){let c;if(t.side===He?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Zn,o),c===null)return null;Xs.copy(o),Xs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Xs);return l<e.near||l>e.far?null:{distance:l,point:Xs.clone(),object:s}}function Ys(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Gs),s.getVertexPosition(c,Vs),s.getVertexPosition(l,Hs);const h=cu(s,t,e,n,Gs,Vs,Hs,ic);if(h){const u=new E;cn.getBarycoord(ic,Gs,Vs,Hs,u),i&&(h.uv=cn.getInterpolatedAttribute(i,o,c,l,u,new nt)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,c,l,u,new nt)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new E,materialIndex:0};cn.getNormal(Gs,Vs,Hs,d.normal),h.face=d,h.barycoord=u}return h}class Yt extends we{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(M,m,p,v,y,w,T,A,R,D,x){const S=w/R,P=T/D,F=w/2,O=T/2,W=A/2,X=R+1,H=D+1;let B=0,$=0;const ct=new E;for(let it=0;it<H;it++){const dt=it*P-O;for(let Lt=0;Lt<X;Lt++){const Pt=Lt*S-F;ct[M]=Pt*v,ct[m]=dt*y,ct[p]=W,l.push(ct.x,ct.y,ct.z),ct[M]=0,ct[m]=0,ct[p]=A>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Lt/R),u.push(1-it/D),B+=1}}for(let it=0;it<D;it++)for(let dt=0;dt<R;dt++){const Lt=d+dt+X*it,Pt=d+dt+X*(it+1),ie=d+(dt+1)+X*(it+1),Jt=d+(dt+1)+X*it;c.push(Lt,Pt,Jt),c.push(Pt,ie,Jt),$+=6}o.addGroup(f,$,x),f+=$,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){const t={};for(let e=0;e<s.length;e++){const n=Hi(s[e]);for(const i in n)t[i]=n[i]}return t}function lu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ml(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const mr={clone:Hi,merge:Ve};var hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Le extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gl extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new E,sc=new nt,rc=new nt;class tn extends gl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,sc,rc),e.subVectors(rc,sc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Pi=1;class du extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Ri,Pi,t,e);i.layers=this.layers,this.add(i);const r=new tn(Ri,Pi,t,e);r.layers=this.layers,this.add(r);const a=new tn(Ri,Pi,t,e);a.layers=this.layers,this.add(a);const o=new tn(Ri,Pi,t,e);o.layers=this.layers,this.add(o);const c=new tn(Ri,Pi,t,e);c.layers=this.layers,this.add(c);const l=new tn(Ri,Pi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _l extends ke{constructor(t=[],e=di,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xl extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _l(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yt(5,5,5),r=new Le({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:yn});r.uniforms.tEquirect.value=e;const a=new z(i,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=Be),new du(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class xe extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fu={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fu)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class vo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new vo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pu extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qa,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new E;class gr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vl extends gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Di;const ts=new E,Ii=new E,Li=new E,Ui=new nt,es=new nt,Ml=new _e,qs=new E,ns=new E,Ks=new E,ac=new nt,Jr=new nt,oc=new nt;class gu extends Ae{constructor(t=new vl){if(super(),this.isSprite=!0,this.type="Sprite",Di===void 0){Di=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mu(e,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new gr(n,3,0,!1)),Di.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=Di,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),Ml.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Li.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Zs(qs.set(-.5,-.5,0),Li,a,Ii,i,r),Zs(ns.set(.5,-.5,0),Li,a,Ii,i,r),Zs(Ks.set(.5,.5,0),Li,a,Ii,i,r),ac.set(0,0),Jr.set(1,0),oc.set(1,1);let o=t.ray.intersectTriangle(qs,ns,Ks,!1,ts);if(o===null&&(Zs(ns.set(-.5,.5,0),Li,a,Ii,i,r),Jr.set(0,1),o=t.ray.intersectTriangle(qs,Ks,ns,!1,ts),o===null))return;const c=t.ray.origin.distanceTo(ts);c<t.near||c>t.far||e.push({distance:c,point:ts.clone(),uv:cn.getInterpolation(ts,qs,ns,Ks,ac,Jr,oc,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zs(s,t,e,n,i,r){Ui.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(es.x=r*Ui.x-i*Ui.y,es.y=i*Ui.x+r*Ui.y):es.copy(Ui),s.copy(t),s.x+=es.x,s.y+=es.y,s.applyMatrix4(Ml)}class _u extends ke{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Ne,h=Ne,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jr=new E,xu=new E,vu=new kt;class ai{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=jr.subVectors(n,e).cross(xu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vu.getNormalMatrix(t),i=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Mr,Mu=new nt(.5,.5),$s=new E;class Mo{constructor(t=new ai,e=new ai,n=new ai,i=new ai,r=new ai,a=new ai){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],v=r[12],y=r[13],w=r[14],T=r[15];if(i[0].setComponents(l-a,f-h,p-g,T-v).normalize(),i[1].setComponents(l+a,f+h,p+g,T+v).normalize(),i[2].setComponents(l+o,f+u,p+M,T+y).normalize(),i[3].setComponents(l-o,f-u,p-M,T-y).normalize(),n)i[4].setComponents(c,d,m,w).normalize(),i[5].setComponents(l-c,f-d,p-m,T-w).normalize();else if(i[4].setComponents(l-c,f-d,p-m,T-w).normalize(),e===Mn)i[5].setComponents(l+c,f+d,p+m,T+w).normalize();else if(e===dr)i[5].setComponents(c,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){ni.center.set(0,0,0);const e=Mu.distanceTo(t.center);return ni.radius=.7071067811865476+e,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if($s.x=i.normal.x>0?t.max.x:t.min.x,$s.y=i.normal.y>0?t.max.y:t.min.y,$s.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yl extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cc=new _e,to=new hl,Js=new Mr,js=new E;class yu extends Ae{constructor(t=new we,e=new yl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;cc.copy(i).invert(),to.copy(t.ray).applyMatrix4(cc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,M=f;g<M;g++){const m=l.getX(g);js.fromBufferAttribute(u,m),lc(js,m,c,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,M=f;g<M;g++)js.fromBufferAttribute(u,g),lc(js,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lc(s,t,e,n,i,r,a){const o=to.distanceSqToPoint(s);if(o<e){const c=new E;to.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class eo extends ke{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xs extends ke{constructor(t,e,n=bn,i,r,a,o=Ne,c=Ne,l,h=Bn,u=1){if(h!==Bn&&h!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Su extends xs{constructor(t,e=bn,n=di,i,r,a=Ne,o=Ne,c,l=Bn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Sl extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class De extends we{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=n*2+r,M=i+1,m=new E,p=new E;for(let v=0;v<=g;v++){let y=0,w=0,T=0,A=0;if(v<=n){const x=v/n,S=x*Math.PI/2;w=-h-t*Math.cos(S),T=t*Math.sin(S),A=-t*Math.cos(S),y=x*u}else if(v<=n+r){const x=(v-n)/r;w=-h+x*e,T=t,A=0,y=u+x*d}else{const x=(v-n-r)/n,S=x*Math.PI/2;w=h+t*Math.sin(S),T=t*Math.cos(S),A=t*Math.sin(S),y=u+d+x*u}const R=Math.max(0,Math.min(1,y/f));let D=0;v===0?D=.5/i:v===g&&(D=-.5/i);for(let x=0;x<=i;x++){const S=x/i,P=S*Math.PI*2,F=Math.sin(P),O=Math.cos(P);p.x=-T*O,p.y=w,p.z=T*F,o.push(p.x,p.y,p.z),m.set(-T*O,A,T*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(S+D,R)}if(v>0){const x=(v-1)*M;for(let S=0;S<i;S++){const P=x+S,F=x+S+1,O=v*M+S,W=v*M+S+1;a.push(P,F,O),a.push(F,W,O)}}}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Kn extends we{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new E,h=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ue extends we{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const M=[],m=n/2;let p=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(f,2));function v(){const w=new E,T=new E;let A=0;const R=(e-t)/n;for(let D=0;D<=r;D++){const x=[],S=D/r,P=S*(e-t)+t;for(let F=0;F<=i;F++){const O=F/i,W=O*c+o,X=Math.sin(W),H=Math.cos(W);T.x=P*X,T.y=-S*n+m,T.z=P*H,u.push(T.x,T.y,T.z),w.set(X,R,H).normalize(),d.push(w.x,w.y,w.z),f.push(O,1-S),x.push(g++)}M.push(x)}for(let D=0;D<i;D++)for(let x=0;x<r;x++){const S=M[x][D],P=M[x+1][D],F=M[x+1][D+1],O=M[x][D+1];(t>0||x!==0)&&(h.push(S,P,O),A+=3),(e>0||x!==r-1)&&(h.push(P,F,O),A+=3)}l.addGroup(p,A,0),p+=A}function y(w){const T=g,A=new nt,R=new E;let D=0;const x=w===!0?t:e,S=w===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const W=F/i*c+o,X=Math.cos(W),H=Math.sin(W);R.x=x*H,R.y=m*S,R.z=x*X,u.push(R.x,R.y,R.z),d.push(0,S,0),A.x=X*.5+.5,A.y=H*.5*S+.5,f.push(A.x,A.y),g++}for(let F=0;F<i;F++){const O=T+F,W=P+F;w===!0?h.push(W,W+1,O):h.push(W+1,W,O),D+=3}l.addGroup(p,D,w===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ln extends Ue{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ln(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yr extends we{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new E,w=new E,T=new E;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],w),f(e[A+2],T),c(y,w,T,v)}function c(v,y,w,T){const A=T+1,R=[];for(let D=0;D<=A;D++){R[D]=[];const x=v.clone().lerp(w,D/A),S=y.clone().lerp(w,D/A),P=A-D;for(let F=0;F<=P;F++)F===0&&D===A?R[D][F]=x:R[D][F]=x.clone().lerp(S,F/P)}for(let D=0;D<A;D++)for(let x=0;x<2*(A-D)-1;x++){const S=Math.floor(x/2);x%2===0?(d(R[D][S+1]),d(R[D+1][S]),d(R[D][S])):(d(R[D][S+1]),d(R[D+1][S+1]),d(R[D+1][S]))}}function l(v){const y=new E;for(let w=0;w<r.length;w+=3)y.x=r[w+0],y.y=r[w+1],y.z=r[w+2],y.normalize().multiplyScalar(v),r[w+0]=y.x,r[w+1]=y.y,r[w+2]=y.z}function h(){const v=new E;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const w=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;a.push(w,1-T)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){const y=a[v+0],w=a[v+2],T=a[v+4],A=Math.max(y,w,T),R=Math.min(y,w,T);A>.9&&R<.1&&(y<.2&&(a[v+0]+=1),w<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const w=v*3;y.x=t[w+0],y.y=t[w+1],y.z=t[w+2]}function g(){const v=new E,y=new E,w=new E,T=new E,A=new nt,R=new nt,D=new nt;for(let x=0,S=0;x<r.length;x+=9,S+=6){v.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),w.set(r[x+6],r[x+7],r[x+8]),A.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),T.copy(v).add(y).add(w).divideScalar(3);const P=m(T);M(A,S+0,v,P),M(R,S+2,y,P),M(D,S+4,w,P)}}function M(v,y,w,T){T<0&&v.x===1&&(a[y]=v.x-1),w.x===0&&w.z===0&&(a[y]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.vertices,t.indices,t.radius,t.detail)}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new nt:new E);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new E,i=[],r=[],a=[],o=new E,c=new _e;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new E)}r[0]=new E,a[0]=new E;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Xt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Xt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yo extends En{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new nt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wu extends yo{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function So(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Qs=new E,Qr=new So,ta=new So,ea=new So;class bu extends En{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Qs.subVectors(i[0],i[1]).add(i[0]),l=Qs);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Qs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Qr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,M,m),ta.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,M,m),ea.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(Qr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ta.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ea.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Qr.calc(c),ta.calc(c),ea.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hc(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Tu(s,t){const e=1-s;return e*e*t}function Eu(s,t){return 2*(1-s)*s*t}function Au(s,t){return s*s*t}function us(s,t,e,n){return Tu(s,t)+Eu(s,e)+Au(s,n)}function Cu(s,t){const e=1-s;return e*e*e*t}function Ru(s,t){const e=1-s;return 3*e*e*s*t}function Pu(s,t){return 3*(1-s)*s*s*t}function Du(s,t){return s*s*s*t}function ds(s,t,e,n,i){return Cu(s,t)+Ru(s,e)+Pu(s,n)+Du(s,i)}class wl extends En{constructor(t=new nt,e=new nt,n=new nt,i=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new nt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,i.x,r.x,a.x,o.x),ds(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Iu extends En{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,i.x,r.x,a.x,o.x),ds(t,i.y,r.y,a.y,o.y),ds(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bl extends En{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends En{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tl extends En{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(us(t,i.x,r.x,a.x),us(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uu extends En{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(us(t,i.x,r.x,a.x),us(t,i.y,r.y,a.y),us(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class El extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(hc(o,c.x,l.x,h.x,u.x),hc(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new nt().fromArray(i))}return this}}var uc=Object.freeze({__proto__:null,ArcCurve:wu,CatmullRomCurve3:bu,CubicBezierCurve:wl,CubicBezierCurve3:Iu,EllipseCurve:yo,LineCurve:bl,LineCurve3:Lu,QuadraticBezierCurve:Tl,QuadraticBezierCurve3:Uu,SplineCurve:El});class Nu extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new uc[i.type]().fromJSON(i))}return this}}class dc extends Nu{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bl(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Tl(this.currentPoint.clone(),new nt(t,e),new nt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new wl(this.currentPoint.clone(),new nt(t,e),new nt(n,i),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new El(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new yo(t,e,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Al extends dc{constructor(t){super(t),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new dc().fromJSON(i))}return this}}function Fu(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Cl(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Gu(s,t,r,e)),s.length>80*e){o=s[0],c=s[1];let h=o,u=c;for(let d=e;d<i;d+=e){const f=s[d],g=s[d+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return vs(r,a,e,o,c,l,0),a}function Cl(s,t,e,n,i){let r;if(i===ju(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=fc(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=fc(a/n|0,s[a],s[a+1],r);return r&&Wi(r,r.next)&&(ys(r),r=r.next),r}function fi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Wi(e,e.next)||ve(e.prev,e,e.next)===0)){if(ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vs(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Yu(s,n,i,r);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?Bu(s,n,i,r):Ou(s)){t.push(c.i,s.i,l.i),ys(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=ku(fi(s),t),vs(s,t,e,n,i,r,2)):a===2&&zu(s,t,e,n,i,r):vs(fi(s),t,e,n,i,r,1);break}}}function Ou(s){const t=s.prev,e=s,n=s.next;if(ve(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(i,r,a),u=Math.min(o,c,l),d=Math.max(i,r,a),f=Math.max(o,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&os(i,o,r,c,a,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bu(s,t,e,n){const i=s.prev,r=s,a=s.next;if(ve(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(h,u,d),M=Math.max(o,c,l),m=Math.max(h,u,d),p=no(f,g,t,e,n),v=no(M,m,t,e,n);let y=s.prevZ,w=s.nextZ;for(;y&&y.z>=p&&w&&w.z<=v;){if(y.x>=f&&y.x<=M&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&os(o,h,c,u,l,d,y.x,y.y)&&ve(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=f&&w.x<=M&&w.y>=g&&w.y<=m&&w!==i&&w!==a&&os(o,h,c,u,l,d,w.x,w.y)&&ve(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=M&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&os(o,h,c,u,l,d,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=v;){if(w.x>=f&&w.x<=M&&w.y>=g&&w.y<=m&&w!==i&&w!==a&&os(o,h,c,u,l,d,w.x,w.y)&&ve(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function ku(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Wi(n,i)&&Pl(n,e,e.next,i)&&Ms(n,i)&&Ms(i,n)&&(t.push(n.i,e.i,i.i),ys(e),ys(e.next),e=s=i),e=e.next}while(e!==s);return fi(e)}function zu(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zu(a,o)){let c=Dl(a,o);a=fi(a,a.next),c=fi(c,c.next),vs(a,t,e,n,i,r,0),vs(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Gu(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Cl(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Ku(l))}i.sort(Vu);for(let r=0;r<i.length;r++)e=Hu(i[r],e);return e}function Vu(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Hu(s,t){const e=Wu(s,t);if(!e)return t;const n=Dl(e,s);return fi(n,n.next),fi(e,e.next)}function Wu(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(Wi(s,e))return e;do{if(Wi(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Rl(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Ms(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Xu(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Xu(s,t){return ve(s.prev,s,t.prev)<0&&ve(t.next,s,s.next)<0}function Yu(s,t,e,n){let i=s;do i.z===0&&(i.z=no(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,qu(i)}function qu(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function no(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ku(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Rl(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function os(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Rl(s,t,e,n,i,r,a,o)}function Zu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!$u(s,t)&&(Ms(s,t)&&Ms(t,s)&&Ju(s,t)&&(ve(s.prev,s,t.prev)||ve(s,t.prev,t))||Wi(s,t)&&ve(s.prev,s,s.next)>0&&ve(t.prev,t,t.next)>0)}function ve(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Wi(s,t){return s.x===t.x&&s.y===t.y}function Pl(s,t,e,n){const i=er(ve(s,t,e)),r=er(ve(s,t,n)),a=er(ve(e,n,s)),o=er(ve(e,n,t));return!!(i!==r&&a!==o||i===0&&tr(s,e,t)||r===0&&tr(s,n,t)||a===0&&tr(e,s,n)||o===0&&tr(e,t,n))}function tr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function er(s){return s>0?1:s<0?-1:0}function $u(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Pl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ms(s,t){return ve(s.prev,s,s.next)<0?ve(s,t,s.next)>=0&&ve(s,s.prev,t)>=0:ve(s,t,s.prev)<0||ve(s,s.next,t)<0}function Ju(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Dl(s,t){const e=io(s.i,s.x,s.y),n=io(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function fc(s,t,e,n){const i=io(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ys(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function io(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ju(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Qu{static triangulate(t,e,n=2){return Fu(t,e,n)}}class fs{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return fs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];pc(t),mc(n,t);let a=t.length;e.forEach(pc);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,mc(n,e[c]);const o=Qu.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function pc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function mc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class wo extends yr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wo(t.radius,t.detail)}}class nn extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){const v=p*d-a;for(let y=0;y<l;y++){const w=y*u-r;g.push(w,-v,0),M.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const y=v+l*p,w=v+l*(p+1),T=v+1+l*(p+1),A=v+1+l*p;f.push(y,w,A),f.push(w,T,A)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.widthSegments,t.heightSegments)}}class pi extends we{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new E,g=new nt;for(let M=0;M<=i;M++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let M=0;M<i;M++){const m=M*(n+1);for(let p=0;p<n;p++){const v=p+m,y=v,w=v+n+1,T=v+n+2,A=v+1;o.push(y,w,A),o.push(w,T,A)}}this.setIndex(o),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class bo extends we{constructor(t=new Al([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new $t(i,3)),this.setAttribute("normal",new $t(r,3)),this.setAttribute("uv",new $t(a,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;fs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];fs.isClockWise(v)===!0&&(g[m]=v.reverse())}const M=fs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,p=M.length;m<p;m++){const v=M[m],y=v[0]+u,w=v[1]+u,T=v[2]+u;n.push(y,w,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return td(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new bo(n,t.curveSegments)}}function td(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class te extends we{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new E,d=new E,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let w=0;p===0&&a===0?w=.5/e:p===n&&c===Math.PI&&(w=-.5/e);for(let T=0;T<=e;T++){const A=T/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),m.push(A+w,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=h[p][v+1],w=h[p][v],T=h[p+1][v],A=h[p+1][v+1];(p!==0||a>0)&&f.push(y,w,A),(p!==n-1||c<Math.PI)&&f.push(w,T,A)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class To extends yr{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new To(t.radius,t.detail)}}class mi extends we{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const M=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const M=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;a.push(M,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ed extends Le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ft extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nd extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class id extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Sr extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class sd extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const na=new _e,gc=new E,_c=new E;class Il{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(gc),_c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_c),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rd extends Il{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Un extends Sr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class wr extends gl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ad extends Il{constructor(){super(new wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class is extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new ad}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class od extends Sr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class cd extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ll{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xc(s,t,e,n){const i=ld(n);switch(e){case sl:return s*t;case al:return s*t/i.components*i.byteLength;case uo:return s*t/i.components*i.byteLength;case Gi:return s*t*2/i.components*i.byteLength;case fo:return s*t*2/i.components*i.byteLength;case rl:return s*t*3/i.components*i.byteLength;case pn:return s*t*4/i.components*i.byteLength;case po:return s*t*4/i.components*i.byteLength;case rr:case ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case or:case cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sa:case ba:return Math.max(s,16)*Math.max(t,8)/4;case ya:case wa:return Math.max(s,8)*Math.max(t,8)/2;case Ta:case Ea:case Ca:case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Aa:case Pa:case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ya:case qa:case Ka:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Za:case $a:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ja:case ja:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ld(s){switch(s){case en:case tl:return{byteLength:1,components:1};case ps:case el:case sn:return{byteLength:2,components:1};case lo:case ho:return{byteLength:2,components:4};case bn:case co:case vn:return{byteLength:4,components:1};case nl:case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);function Ul(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function hd(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],M=u[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const M=u[f];s.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
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
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_d=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
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
#endif`,Md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Td=`#ifdef USE_BUMPMAP
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ud=`#define PI 3.141592653589793
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
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
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
}`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
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
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
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
#endif`,hf=`uniform sampler2D dfgLUT;
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
}`,uf=`
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yf=`#if defined( USE_POINTS_UV )
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
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
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
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$f=`float getShadowMask() {
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
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jf=`#ifdef USE_SKINNING
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
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,xp=`#if DEPTH_PACKING == 3200
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
}`,vp=`#define DISTANCE
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
}`,Mp=`#define DISTANCE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`uniform float scale;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Ap=`#define LAMBERT
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
}`,Cp=`#define LAMBERT
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
}`,Rp=`#define MATCAP
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
}`,Pp=`#define MATCAP
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
}`,Dp=`#define NORMAL
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
}`,Ip=`#define NORMAL
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
}`,Lp=`#define PHONG
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
}`,Up=`#define PHONG
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
}`,Np=`#define STANDARD
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
}`,Fp=`#define STANDARD
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
}`,Op=`#define TOON
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
}`,Bp=`#define TOON
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
}`,kp=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Vp=`uniform vec3 color;
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
}`,Hp=`uniform float rotation;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:ud,alphahash_pars_fragment:dd,alphamap_fragment:fd,alphamap_pars_fragment:pd,alphatest_fragment:md,alphatest_pars_fragment:gd,aomap_fragment:_d,aomap_pars_fragment:xd,batching_pars_vertex:vd,batching_vertex:Md,begin_vertex:yd,beginnormal_vertex:Sd,bsdfs:wd,iridescence_fragment:bd,bumpmap_pars_fragment:Td,clipping_planes_fragment:Ed,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Rd,color_fragment:Pd,color_pars_fragment:Dd,color_pars_vertex:Id,color_vertex:Ld,common:Ud,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Od,displacementmap_vertex:Bd,emissivemap_fragment:kd,emissivemap_pars_fragment:zd,colorspace_fragment:Gd,colorspace_pars_fragment:Vd,envmap_fragment:Hd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:Yd,envmap_physical_pars_fragment:sf,envmap_vertex:qd,fog_vertex:Kd,fog_pars_vertex:Zd,fog_fragment:$d,fog_pars_fragment:Jd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:Qd,lights_lambert_fragment:tf,lights_lambert_pars_fragment:ef,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:af,lights_phong_fragment:of,lights_phong_pars_fragment:cf,lights_physical_fragment:lf,lights_physical_pars_fragment:hf,lights_fragment_begin:uf,lights_fragment_maps:df,lights_fragment_end:ff,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:_f,map_fragment:xf,map_pars_fragment:vf,map_particle_fragment:Mf,map_particle_pars_fragment:yf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:wf,morphinstance_vertex:bf,morphcolor_vertex:Tf,morphnormal_vertex:Ef,morphtarget_pars_vertex:Af,morphtarget_vertex:Cf,normal_fragment_begin:Rf,normal_fragment_maps:Pf,normal_pars_fragment:Df,normal_pars_vertex:If,normal_vertex:Lf,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Ff,clearcoat_pars_fragment:Of,iridescence_pars_fragment:Bf,opaque_fragment:kf,packing:zf,premultiplied_alpha_fragment:Gf,project_vertex:Vf,dithering_fragment:Hf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:Yf,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:Kf,shadowmap_vertex:Zf,shadowmask_pars_fragment:$f,skinbase_vertex:Jf,skinning_pars_vertex:jf,skinning_vertex:Qf,skinnormal_vertex:tp,specularmap_fragment:ep,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:cp,uv_vertex:lp,worldpos_vertex:hp,background_vert:up,background_frag:dp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:xp,distance_vert:vp,distance_frag:Mp,equirect_vert:yp,equirect_frag:Sp,linedashed_vert:wp,linedashed_frag:bp,meshbasic_vert:Tp,meshbasic_frag:Ep,meshlambert_vert:Ap,meshlambert_frag:Cp,meshmatcap_vert:Rp,meshmatcap_frag:Pp,meshnormal_vert:Dp,meshnormal_frag:Ip,meshphong_vert:Lp,meshphong_frag:Up,meshphysical_vert:Np,meshphysical_frag:Fp,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:kp,points_frag:zp,shadow_vert:Gp,shadow_frag:Vp,sprite_vert:Hp,sprite_frag:Wp},ut={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},xn={basic:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ve([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ve([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ve([ut.points,ut.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ve([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ve([ut.common,ut.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ve([ut.sprite,ut.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Ve([ut.common,ut.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Ve([ut.lights,ut.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};xn.physical={uniforms:Ve([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const nr={r:0,b:0,g:0},ii=new Tn,Xp=new _e;function Yp(s,t,e,n,i,r,a){const o=new Ot(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let w=y.isScene===!0?y.background:null;return w&&w.isTexture&&(w=(y.backgroundBlurriness>0?e:t).get(w)),w}function M(y){let w=!1;const T=g(y);T===null?p(o,c):T&&T.isColor&&(p(T,1),w=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,w){const T=g(w);T&&(T.isCubeTexture||T.mapping===vr)?(h===void 0&&(h=new z(new Yt(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:Hi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ii.copy(w.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(ii)),h.material.toneMapped=Qt.getTransfer(T.colorSpace)!==ae,(u!==T||d!==T.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new z(new nn(2,2),new Le({name:"BackgroundMaterial",uniforms:Hi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(T.colorSpace)!==ae,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,w){y.getRGB(nr,ml(s)),n.buffers.color.setClear(nr.r,nr.g,nr.b,w,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),c=w,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:M,addToRenderList:m,dispose:v}}function qp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(S,P,F,O,W){let X=!1;const H=u(O,F,P);r!==H&&(r=H,l(r.object)),X=f(S,O,F,W),X&&g(S,O,F,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,w(S,P,F,O),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,P,F){const O=F.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let H=X[O];return H===void 0&&(H=d(c()),X[O]=H),H}function d(S){const P=[],F=[],O=[];for(let W=0;W<e;W++)P[W]=0,F[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:S,attributes:{},index:null}}function f(S,P,F,O){const W=r.attributes,X=P.attributes;let H=0;const B=F.getAttributes();for(const $ in B)if(B[$].location>=0){const it=W[$];let dt=X[$];if(dt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),it===void 0||it.attribute!==dt||dt&&it.data!==dt.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(S,P,F,O){const W={},X=P.attributes;let H=0;const B=F.getAttributes();for(const $ in B)if(B[$].location>=0){let it=X[$];it===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(it=S.instanceColor));const dt={};dt.attribute=it,it&&it.data&&(dt.data=it.data),W[$]=dt,H++}r.attributes=W,r.attributesNum=H,r.index=O}function M(){const S=r.newAttributes;for(let P=0,F=S.length;P<F;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const F=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;F[S]=1,O[S]===0&&(s.enableVertexAttribArray(S),O[S]=1),W[S]!==P&&(s.vertexAttribDivisor(S,P),W[S]=P)}function v(){const S=r.newAttributes,P=r.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==S[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function y(S,P,F,O,W,X,H){H===!0?s.vertexAttribIPointer(S,P,F,W,X):s.vertexAttribPointer(S,P,F,O,W,X)}function w(S,P,F,O){M();const W=O.attributes,X=F.getAttributes(),H=P.defaultAttributeValues;for(const B in X){const $=X[B];if($.location>=0){let ct=W[B];if(ct===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),ct!==void 0){const it=ct.normalized,dt=ct.itemSize,Lt=t.get(ct);if(Lt===void 0)continue;const Pt=Lt.buffer,ie=Lt.type,Jt=Lt.bytesPerElement,Y=ie===s.INT||ie===s.UNSIGNED_INT||ct.gpuType===co;if(ct.isInterleavedBufferAttribute){const j=ct.data,_t=j.stride,pt=ct.offset;if(j.isInstancedInterleavedBuffer){for(let st=0;st<$.locationSize;st++)p($.location+st,j.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let st=0;st<$.locationSize;st++)m($.location+st);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let st=0;st<$.locationSize;st++)y($.location+st,dt/$.locationSize,ie,it,_t*Jt,(pt+dt/$.locationSize*st)*Jt,Y)}else{if(ct.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)p($.location+j,ct.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let j=0;j<$.locationSize;j++)m($.location+j);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let j=0;j<$.locationSize;j++)y($.location+j,dt/$.locationSize,ie,it,dt*Jt,dt/$.locationSize*j*Jt,Y)}}else if(H!==void 0){const it=H[B];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv($.location,it);break;case 3:s.vertexAttrib3fv($.location,it);break;case 4:s.vertexAttrib4fv($.location,it);break;default:s.vertexAttrib1fv($.location,it)}}}}v()}function T(){D();for(const S in n){const P=n[S];for(const F in P){const O=P[F];for(const W in O)h(O[W].object),delete O[W];delete P[F]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const F in P){const O=P[F];for(const W in O)h(O[W].object),delete O[W];delete P[F]}delete n[S.id]}function R(S){for(const P in n){const F=n[P];if(F[S.id]===void 0)continue;const O=F[S.id];for(const W in O)h(O[W].object),delete O[W];delete F[S.id]}}function D(){x(),a=!0,r!==i&&(r=i,l(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function Kp(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*d[M];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Zp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==pn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==en&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vn&&!D)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Ut("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:w,maxSamples:T,samples:A}}function $p(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ai,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,y=v*4;let w=p.clippingState||null;c.value=w,w=h(g,d,y,f);for(let T=0;T!==y;++T)w[T]=e[T];p.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const p=f+M*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,w=f;y!==M;++y,w+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(m,w),m[w+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Jp(s){let t=new WeakMap;function e(a,o){return o===xa?a.mapping=di:o===va&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xa||o===va)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new xl(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Yn=4,vc=[.125,.215,.35,.446,.526,.582],ci=20,jp=256,ss=new wr,Mc=new Ot;let ia=null,sa=0,ra=0,aa=!1;const Qp=new E;class yc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Qp}=r;ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=aa,t.scissorTest=!1,Ni(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:sn,format:pn,colorSpace:Vi,depthBuffer:!1},i=Sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tm(r)),this._blurMaterial=nm(r,t,e),this._ggxMaterial=em(r,t,e)}return i}_compileMaterial(t){const e=new z(new we,t);this._renderer.compile(e,ss)}_sceneToCubeUV(t,e,n,i,r){const c=new tn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Mc),u.toneMapping=Sn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new z(new Yt,new me({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Mc),p=!0);for(let y=0;y<6;y++){const w=y%3;w===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):w===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const T=this._cubeSize;Ni(i,w*T,y>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(M,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===di||t.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ni(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ss)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-Yn?n-g+Yn:0),p=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Ni(r,m,p,3*M,2*M),i.setRenderTarget(r),i.render(o,ss),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Ni(t,m,p,3*M,2*M),i.setRenderTarget(t),i.render(o,ss)}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ci-1),M=r/g,m=isFinite(r)?1+Math.floor(h*M):ci;m>ci&&Ut(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let v=0;for(let R=0;R<ci;++R){const D=R/M,x=Math.exp(-D*D/2);p.push(x),R===0?v+=x:R<m&&(v+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const w=this._sizeLods[i],T=3*w*(i>y-Yn?i-y+Yn:0),A=4*(this._cubeSize-w);Ni(e,T,A,3*w,2*w),c.setRenderTarget(e),c.render(u,ss)}}function tm(s){const t=[],e=[],n=[];let i=s;const r=s-Yn+1+vc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Yn?c=vc[a-s+Yn-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,M=3,m=2,p=1,v=new Float32Array(M*g*f),y=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,D=A>2?0:-1,x=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(x,M*g*A),y.set(d,m*g*A);const S=[A,A,A,A,A,A];w.set(S,p*g*A)}const T=new we;T.setAttribute("position",new qe(v,M)),T.setAttribute("uv",new qe(y,m)),T.setAttribute("faceIndex",new qe(w,p)),n.push(new z(T,null)),i>Yn&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Sc(s,t,e){const n=new Ye(s,t,e);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function em(s,t,e){return new Le({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:br(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function nm(s,t,e){const n=new Float32Array(ci),i=new E(0,1,0);return new Le({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:br(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function wc(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:br(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function bc(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function br(){return`

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
	`}function im(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===xa||c===va,h=c===di||c===zi;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new yc(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new yc(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&gs("WebGLRenderer: "+n+" extension not supported."),i}}}function rm(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let M=0;if(f!==null){const v=f.array;M=f.version;for(let y=0,w=v.length;y<w;y+=3){const T=v[y+0],A=v[y+1],R=v[y+2];d.push(T,A,A,R,R,T)}}else if(g!==void 0){const v=g.array;M=g.version;for(let y=0,w=v.length/3-1;y<w;y+=3){const T=y+0,A=y+1,R=y+2;d.push(T,A,A,R,R,T)}}else return;const m=new(cl(d)?pl:fl)(d,1);m.version=M;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function am(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,M){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,M,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*M[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function om(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cm(s,t,e){const n=new WeakMap,i=new Se;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),M===!0&&(w=2),m===!0&&(w=3);let T=o.attributes.position.count*w,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*A*4*u),D=new ll(R,T,A,u);D.type=vn,D.needsUpdate=!0;const x=w*4;for(let P=0;P<u;P++){const F=p[P],O=v[P],W=y[P],X=T*A*4*P;for(let H=0;H<F.count;H++){const B=H*x;g===!0&&(i.fromBufferAttribute(F,H),R[X+B+0]=i.x,R[X+B+1]=i.y,R[X+B+2]=i.z,R[X+B+3]=0),M===!0&&(i.fromBufferAttribute(O,H),R[X+B+4]=i.x,R[X+B+5]=i.y,R[X+B+6]=i.z,R[X+B+7]=0),m===!0&&(i.fromBufferAttribute(W,H),R[X+B+8]=i.x,R[X+B+9]=i.y,R[X+B+10]=i.z,R[X+B+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new nt(T,A)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const M=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",M),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function lm(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const hm={[qc]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[Zc]:"CINEON_TONE_MAPPING",[oo]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[jc]:"NEUTRAL_TONE_MAPPING",[$c]:"CUSTOM_TONE_MAPPING"};function um(s,t,e,n,i){const r=new Ye(t,e,{type:s,depthBuffer:n,stencilBuffer:i}),a=new Ye(t,e,{type:sn,depthBuffer:!1,stencilBuffer:!1}),o=new we;o.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new $t([0,2,0,0,2,0],2));const c=new ed({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new z(o,c),h=new wr(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,M=null,m=[],p=!1;this.setSize=function(v,y){r.setSize(v,y),a.setSize(v,y);for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(v,y)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const y=r.width,w=r.height;for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(y,w)}},this.begin=function(v,y){if(f||v.toneMapping===Sn&&m.length===0)return!1;if(M=y,y!==null){const w=y.width,T=y.height;(r.width!==w||r.height!==T)&&this.setSize(w,T)}return p===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=Sn,!0},this.hasRenderPass=function(){return p},this.end=function(v,y){v.toneMapping=g,f=!0;let w=r,T=a;for(let A=0;A<m.length;A++){const R=m[A];if(R.enabled!==!1&&(R.render(v,T,w,y),R.needsSwap!==!1)){const D=w;w=T,T=D}}if(u!==v.outputColorSpace||d!==v.toneMapping){u=v.outputColorSpace,d=v.toneMapping,c.defines={},Qt.getTransfer(u)===ae&&(c.defines.SRGB_TRANSFER="");const A=hm[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(M),v.render(l,h),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Nl=new ke,so=new xs(1,1),Fl=new ll,Ol=new Jh,Bl=new _l,Tc=[],Ec=[],Ac=new Float32Array(16),Cc=new Float32Array(9),Rc=new Float32Array(4);function Ki(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Tc[i];if(r===void 0&&(r=new Float32Array(i),Tc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Tr(s,t){let e=Ec[t];e===void 0&&(e=new Int32Array(t),Ec[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function dm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function gm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Rc.set(n),s.uniformMatrix2fv(this.addr,!1,Rc),Re(e,n)}}function _m(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Cc.set(n),s.uniformMatrix3fv(this.addr,!1,Cc),Re(e,n)}}function xm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Ac.set(n),s.uniformMatrix4fv(this.addr,!1,Ac),Re(e,n)}}function vm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function Sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function wm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function bm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function Tm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function Em(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function Am(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(so.compareFunction=e.isReversedDepthBuffer()?go:mo,r=so):r=Nl,e.setTexture2D(t||r,i)}function Cm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ol,i)}function Rm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bl,i)}function Pm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Fl,i)}function Dm(s){switch(s){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return Mm;case 35668:case 35672:return ym;case 35669:case 35673:return Sm;case 5125:return wm;case 36294:return bm;case 36295:return Tm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Im(s,t){s.uniform1fv(this.addr,t)}function Lm(s,t){const e=Ki(t,this.size,2);s.uniform2fv(this.addr,e)}function Um(s,t){const e=Ki(t,this.size,3);s.uniform3fv(this.addr,e)}function Nm(s,t){const e=Ki(t,this.size,4);s.uniform4fv(this.addr,e)}function Fm(s,t){const e=Ki(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Om(s,t){const e=Ki(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Bm(s,t){const e=Ki(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function km(s,t){s.uniform1iv(this.addr,t)}function zm(s,t){s.uniform2iv(this.addr,t)}function Gm(s,t){s.uniform3iv(this.addr,t)}function Vm(s,t){s.uniform4iv(this.addr,t)}function Hm(s,t){s.uniform1uiv(this.addr,t)}function Wm(s,t){s.uniform2uiv(this.addr,t)}function Xm(s,t){s.uniform3uiv(this.addr,t)}function Ym(s,t){s.uniform4uiv(this.addr,t)}function qm(s,t,e){const n=this.cache,i=t.length,r=Tr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=so:a=Nl;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Km(s,t,e){const n=this.cache,i=t.length,r=Tr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ol,r[a])}function Zm(s,t,e){const n=this.cache,i=t.length,r=Tr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Bl,r[a])}function $m(s,t,e){const n=this.cache,i=t.length,r=Tr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Fl,r[a])}function Jm(s){switch(s){case 5126:return Im;case 35664:return Lm;case 35665:return Um;case 35666:return Nm;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return km;case 35667:case 35671:return zm;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return Hm;case 36294:return Wm;case 36295:return Xm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return $m}}class jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dm(e.type)}}class Qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jm(e.type)}}class t0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function Pc(s,t){s.seq.push(t),s.map[t.id]=t}function e0(s,t,e){const n=s.name,i=n.length;for(oa.lastIndex=0;;){const r=oa.exec(n),a=oa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Pc(e,l===void 0?new jm(o,s,t):new Qm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new t0(o),Pc(e,u)),e=u}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);e0(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Dc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const n0=37297;let i0=0;function s0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ic=new kt;function r0(s){Qt._getMatrix(Ic,Qt.workingColorSpace,s);const t=`mat3( ${Ic.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case ur:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Lc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+s0(s.getShaderSource(t),o)}else return r}function a0(s,t){const e=r0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const o0={[qc]:"Linear",[Kc]:"Reinhard",[Zc]:"Cineon",[oo]:"ACESFilmic",[Jc]:"AgX",[jc]:"Neutral",[$c]:"Custom"};function c0(s,t){const e=o0[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new E;function l0(){Qt.getLuminanceCoefficients(ir);const s=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function u0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function cs(s){return s!==""}function Uc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(s){return s.replace(f0,m0)}const p0=new Map;function m0(s,t){let e=zt[t];if(e===void 0){const n=p0.get(t);if(n!==void 0)e=zt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ro(e)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(s){return s.replace(g0,_0)}function _0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Oc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const x0={[sr]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function v0(s){return x0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const M0={[di]:"ENVMAP_TYPE_CUBE",[zi]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE_UV"};function y0(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":M0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const S0={[zi]:"ENVMAP_MODE_REFRACTION"};function w0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":S0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const b0={[Yc]:"ENVMAP_BLENDING_MULTIPLY",[_h]:"ENVMAP_BLENDING_MIX",[xh]:"ENVMAP_BLENDING_ADD"};function T0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":b0[s.combine]||"ENVMAP_BLENDING_NONE"}function E0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function A0(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=v0(e),l=y0(e),h=w0(e),u=T0(e),d=E0(e),f=h0(e),g=u0(r),M=i.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),p.length>0&&(p+=`
`)):(m=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),p=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?c0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,a0("linearToOutputTexel",e.outputColorSpace),l0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),a=ro(a),a=Uc(a,e),a=Nc(a,e),o=ro(o),o=Uc(o,e),o=Nc(o,e),a=Fc(a),o=Fc(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+a,w=v+p+o,T=Dc(i,i.VERTEX_SHADER,y),A=Dc(i,i.FRAGMENT_SHADER,w);i.attachShader(M,T),i.attachShader(M,A),e.index0AttributeName!==void 0?i.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function R(P){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(M)||"",O=i.getShaderInfoLog(T)||"",W=i.getShaderInfoLog(A)||"",X=F.trim(),H=O.trim(),B=W.trim();let $=!0,ct=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,T,A);else{const it=Lc(i,T,"vertex"),dt=Lc(i,A,"fragment");jt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+it+`
`+dt)}else X!==""?Ut("WebGLProgram: Program Info Log:",X):(H===""||B==="")&&(ct=!1);ct&&(P.diagnostics={runnable:$,programLog:X,vertexShader:{log:H,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(T),i.deleteShader(A),D=new lr(i,M),x=d0(i,M)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(M,n0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=A,this}let C0=0;class R0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new P0(t),e.set(t,n)),n}}class P0{constructor(t){this.id=C0++,this.code=t,this.usedTimes=0}}function D0(s,t,e,n,i,r,a){const o=new ul,c=new R0,l=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,F,O){const W=F.fog,X=O.geometry,H=x.isMeshStandardMaterial?F.environment:null,B=(x.isMeshStandardMaterial?e:t).get(x.envMap||H),$=B&&B.mapping===vr?B.image.height:null,ct=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const it=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=it!==void 0?it.length:0;let Lt=0;X.morphAttributes.position!==void 0&&(Lt=1),X.morphAttributes.normal!==void 0&&(Lt=2),X.morphAttributes.color!==void 0&&(Lt=3);let Pt,ie,Jt,Y;if(ct){const se=xn[ct];Pt=se.vertexShader,ie=se.fragmentShader}else Pt=x.vertexShader,ie=x.fragmentShader,c.update(x),Jt=c.getVertexShaderID(x),Y=c.getFragmentShaderID(x);const j=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),pt=O.isInstancedMesh===!0,st=O.isBatchedMesh===!0,yt=!!x.map,Kt=!!x.matcap,Bt=!!B,Zt=!!x.aoMap,le=!!x.lightMap,Gt=!!x.bumpMap,be=!!x.normalMap,I=!!x.displacementMap,Te=!!x.emissiveMap,ne=!!x.metalnessMap,de=!!x.roughnessMap,bt=x.anisotropy>0,C=x.clearcoat>0,_=x.dispersion>0,U=x.iridescence>0,K=x.sheen>0,J=x.transmission>0,q=bt&&!!x.anisotropyMap,Et=C&&!!x.clearcoatMap,at=C&&!!x.clearcoatNormalMap,wt=C&&!!x.clearcoatRoughnessMap,It=U&&!!x.iridescenceMap,tt=U&&!!x.iridescenceThicknessMap,lt=K&&!!x.sheenColorMap,St=K&&!!x.sheenRoughnessMap,Tt=!!x.specularMap,ot=!!x.specularColorMap,Vt=!!x.specularIntensityMap,L=J&&!!x.transmissionMap,gt=J&&!!x.thicknessMap,et=!!x.gradientMap,xt=!!x.alphaMap,Q=x.alphaTest>0,Z=!!x.alphaHash,rt=!!x.extensions;let Nt=Sn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const fe={shaderID:ct,shaderType:x.type,shaderName:x.name,vertexShader:Pt,fragmentShader:ie,defines:x.defines,customVertexShaderID:Jt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:st,batchingColor:st&&O._colorsTexture!==null,instancing:pt,instancingColor:pt&&O.instanceColor!==null,instancingMorph:pt&&O.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Vi,alphaToCoverage:!!x.alphaToCoverage,map:yt,matcap:Kt,envMap:Bt,envMapMode:Bt&&B.mapping,envMapCubeUVHeight:$,aoMap:Zt,lightMap:le,bumpMap:Gt,normalMap:be,displacementMap:I,emissiveMap:Te,normalMapObjectSpace:be&&x.normalMapType===yh,normalMapTangentSpace:be&&x.normalMapType===ol,metalnessMap:ne,roughnessMap:de,anisotropy:bt,anisotropyMap:q,clearcoat:C,clearcoatMap:Et,clearcoatNormalMap:at,clearcoatRoughnessMap:wt,dispersion:_,iridescence:U,iridescenceMap:It,iridescenceThicknessMap:tt,sheen:K,sheenColorMap:lt,sheenRoughnessMap:St,specularMap:Tt,specularColorMap:ot,specularIntensityMap:Vt,transmission:J,transmissionMap:L,thicknessMap:gt,gradientMap:et,opaque:x.transparent===!1&&x.blending===Oi&&x.alphaToCoverage===!1,alphaMap:xt,alphaTest:Q,alphaHash:Z,combine:x.combine,mapUv:yt&&M(x.map.channel),aoMapUv:Zt&&M(x.aoMap.channel),lightMapUv:le&&M(x.lightMap.channel),bumpMapUv:Gt&&M(x.bumpMap.channel),normalMapUv:be&&M(x.normalMap.channel),displacementMapUv:I&&M(x.displacementMap.channel),emissiveMapUv:Te&&M(x.emissiveMap.channel),metalnessMapUv:ne&&M(x.metalnessMap.channel),roughnessMapUv:de&&M(x.roughnessMap.channel),anisotropyMapUv:q&&M(x.anisotropyMap.channel),clearcoatMapUv:Et&&M(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&M(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&M(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&M(x.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&M(x.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&M(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&M(x.sheenRoughnessMap.channel),specularMapUv:Tt&&M(x.specularMap.channel),specularColorMapUv:ot&&M(x.specularColorMap.channel),specularIntensityMapUv:Vt&&M(x.specularIntensityMap.channel),transmissionMapUv:L&&M(x.transmissionMap.channel),thicknessMapUv:gt&&M(x.thicknessMap.channel),alphaMapUv:xt&&M(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(be||bt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(yt||xt),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:yt&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:Te&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ge,flipSided:x.side===He,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(v(S,x),y(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function w(x){const S=g[x.type];let P;if(S){const F=xn[S];P=mr.clone(F.uniforms)}else P=x.uniforms;return P}function T(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new A0(s,S,x,r),h.push(P),u.set(S,P)),P}function A(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){c.remove(x)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:D}}function I0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function L0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Bc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function kc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,M,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:M,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=M,p.group=m),t++,p}function o(u,d,f,g,M,m){const p=a(u,d,f,g,M,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,M,m){const p=a(u,d,f,g,M,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||L0),n.length>1&&n.sort(d||Bc),i.length>1&&i.sort(d||Bc)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function U0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new kc,s.set(n,[a])):i>=r.length?(a=new kc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function N0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Ot};break;case"SpotLight":e={position:new E,direction:new E,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function F0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let O0=0;function B0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function k0(s){const t=new N0,e=F0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const i=new E,r=new _e,a=new _e;function o(l){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,v=0,y=0,w=0,T=0,A=0,R=0;l.sort(B0);for(let x=0,S=l.length;x<S;x++){const P=l[x],F=P.color,O=P.intensity,W=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Gi?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],O);R++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,$=e.get(P);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=H,f++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=W,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[M]=H;const B=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,B.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[M]=B.matrix,P.castShadow){const $=e.get(P);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=X,w++}M++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const B=P.shadow,$=e.get(P);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==M||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==w||D.numSpotMaps!==T||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=w+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=M,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=w,D.numSpotMaps=T,D.numLightProbes=R,n.version=O0++)}function c(l,h){let u=0,d=0,f=0,g=0,M=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),u++}else if(y.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),M++}}}return{setup:o,setupView:c,state:n}}function zc(s){const t=new k0(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function z0(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new zc(s),t.set(i,[o])):r>=a.length?(o=new zc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`,H0=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],W0=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],Gc=new _e,rs=new E,ca=new E;function X0(s,t,e){let n=new Mo;const i=new nt,r=new nt,a=new Se,o=new nd,c=new id,l={},h=e.maxTextureSize,u={[Zn]:He,[He]:Zn,[ge]:ge},d=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:G0,fragmentShader:V0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new z(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let p=this.type;this.render=function(A,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===Xc&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=sr);const x=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(yn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==this.type;O&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(X=>X.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,X=A.length;W<X;W++){const H=A[W],B=H.shadow;if(B===void 0){Ut("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const $=B.getFrameExtents();if(i.multiply($),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,B.mapSize.y=r.y)),B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===as){if(H.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ye(i.x,i.y,{format:Gi,type:sn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new xs(i.x,i.y,vn),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=Bn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ne,B.map.depthTexture.magFilter=Ne}else{H.isPointLight?(B.map=new xl(i.x),B.map.depthTexture=new Su(i.x,bn)):(B.map=new Ye(i.x,i.y),B.map.depthTexture=new xs(i.x,i.y,bn)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=Bn;const it=s.state.buffers.depth.getReversed();this.type===sr?(B.map.depthTexture.compareFunction=it?go:mo,B.map.depthTexture.minFilter=Be,B.map.depthTexture.magFilter=Be):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ne,B.map.depthTexture.magFilter=Ne)}B.camera.updateProjectionMatrix()}const ct=B.map.isWebGLCubeRenderTarget?6:1;for(let it=0;it<ct;it++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,it),s.clear();else{it===0&&(s.setRenderTarget(B.map),s.clear());const dt=B.getViewport(it);a.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),F.viewport(a)}if(H.isPointLight){const dt=B.camera,Lt=B.matrix,Pt=H.distance||dt.far;Pt!==dt.far&&(dt.far=Pt,dt.updateProjectionMatrix()),rs.setFromMatrixPosition(H.matrixWorld),dt.position.copy(rs),ca.copy(dt.position),ca.add(H0[it]),dt.up.copy(W0[it]),dt.lookAt(ca),dt.updateMatrixWorld(),Lt.makeTranslation(-rs.x,-rs.y,-rs.z),Gc.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Gc,dt.coordinateSystem,dt.reversedDepth)}else B.updateMatrices(H);n=B.getFrustum(),w(R,D,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===as&&v(B,D),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,S,P)};function v(A,R){const D=t.update(M);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ye(i.x,i.y,{format:Gi,type:sn})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,D,d,M,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,D,f,M,null)}function y(A,R,D,x){let S=null;const P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=S.uuid,O=R.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let X=W[O];X===void 0&&(X=S.clone(),W[O]=X,R.addEventListener("dispose",T)),S=X}if(S.visible=R.visible,S.wireframe=R.wireframe,x===as?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=s.properties.get(S);F.light=D}return S}function w(A,R,D,x,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===as)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const O=t.update(A),W=A.material;if(Array.isArray(W)){const X=O.groups;for(let H=0,B=X.length;H<B;H++){const $=X[H],ct=W[$.materialIndex];if(ct&&ct.visible){const it=y(A,ct,x,S);A.onBeforeShadow(s,A,R,D,O,it,$),s.renderBufferDirect(D,null,O,it,A,$),A.onAfterShadow(s,A,R,D,O,it,$)}}}else if(W.visible){const X=y(A,W,x,S);A.onBeforeShadow(s,A,R,D,O,X,null),s.renderBufferDirect(D,null,O,X,A,null),A.onAfterShadow(s,A,R,D,O,X,null)}}const F=A.children;for(let O=0,W=F.length;O<W;O++)w(F[O],R,D,x,S)}function T(A){A.target.removeEventListener("dispose",T);for(const D in l){const x=l[D],S=A.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const Y0={[ua]:da,[fa]:ga,[pa]:_a,[ki]:ma,[da]:ua,[ga]:fa,[_a]:pa,[ma]:ki};function q0(s,t){function e(){let L=!1;const gt=new Se;let et=null;const xt=new Se(0,0,0,0);return{setMask:function(Q){et!==Q&&!L&&(s.colorMask(Q,Q,Q,Q),et=Q)},setLocked:function(Q){L=Q},setClear:function(Q,Z,rt,Nt,fe){fe===!0&&(Q*=Nt,Z*=Nt,rt*=Nt),gt.set(Q,Z,rt,Nt),xt.equals(gt)===!1&&(s.clearColor(Q,Z,rt,Nt),xt.copy(gt))},reset:function(){L=!1,et=null,xt.set(-1,0,0,0)}}}function n(){let L=!1,gt=!1,et=null,xt=null,Q=null;return{setReversed:function(Z){if(gt!==Z){const rt=t.get("EXT_clip_control");Z?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),gt=Z;const Nt=Q;Q=null,this.setClear(Nt)}},getReversed:function(){return gt},setTest:function(Z){Z?j(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(Z){et!==Z&&!L&&(s.depthMask(Z),et=Z)},setFunc:function(Z){if(gt&&(Z=Y0[Z]),xt!==Z){switch(Z){case ua:s.depthFunc(s.NEVER);break;case da:s.depthFunc(s.ALWAYS);break;case fa:s.depthFunc(s.LESS);break;case ki:s.depthFunc(s.LEQUAL);break;case pa:s.depthFunc(s.EQUAL);break;case ma:s.depthFunc(s.GEQUAL);break;case ga:s.depthFunc(s.GREATER);break;case _a:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=Z}},setLocked:function(Z){L=Z},setClear:function(Z){Q!==Z&&(gt&&(Z=1-Z),s.clearDepth(Z),Q=Z)},reset:function(){L=!1,et=null,xt=null,Q=null,gt=!1}}}function i(){let L=!1,gt=null,et=null,xt=null,Q=null,Z=null,rt=null,Nt=null,fe=null;return{setTest:function(se){L||(se?j(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(se){gt!==se&&!L&&(s.stencilMask(se),gt=se)},setFunc:function(se,mn,Cn){(et!==se||xt!==mn||Q!==Cn)&&(s.stencilFunc(se,mn,Cn),et=se,xt=mn,Q=Cn)},setOp:function(se,mn,Cn){(Z!==se||rt!==mn||Nt!==Cn)&&(s.stencilOp(se,mn,Cn),Z=se,rt=mn,Nt=Cn)},setLocked:function(se){L=se},setClear:function(se){fe!==se&&(s.clearStencil(se),fe=se)},reset:function(){L=!1,gt=null,et=null,xt=null,Q=null,Z=null,rt=null,Nt=null,fe=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,M=!1,m=null,p=null,v=null,y=null,w=null,T=null,A=null,R=new Ot(0,0,0),D=0,x=!1,S=null,P=null,F=null,O=null,W=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),H=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=B>=2);let ct=null,it={};const dt=s.getParameter(s.SCISSOR_BOX),Lt=s.getParameter(s.VIEWPORT),Pt=new Se().fromArray(dt),ie=new Se().fromArray(Lt);function Jt(L,gt,et,xt){const Q=new Uint8Array(4),Z=s.createTexture();s.bindTexture(L,Z),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<et;rt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(gt+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return Z}const Y={};Y[s.TEXTURE_2D]=Jt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Jt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Jt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Jt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(ki),Gt(!1),be(Oo),j(s.CULL_FACE),Zt(yn);function j(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function _t(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function pt(L,gt){return u[L]!==gt?(s.bindFramebuffer(L,gt),u[L]=gt,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function st(L,gt){let et=f,xt=!1;if(L){et=d.get(gt),et===void 0&&(et=[],d.set(gt,et));const Q=L.textures;if(et.length!==Q.length||et[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,rt=Q.length;Z<rt;Z++)et[Z]=s.COLOR_ATTACHMENT0+Z;et.length=Q.length,xt=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,xt=!0);xt&&s.drawBuffers(et)}function yt(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const Kt={[oi]:s.FUNC_ADD,[th]:s.FUNC_SUBTRACT,[eh]:s.FUNC_REVERSE_SUBTRACT};Kt[nh]=s.MIN,Kt[ih]=s.MAX;const Bt={[sh]:s.ZERO,[rh]:s.ONE,[ah]:s.SRC_COLOR,[la]:s.SRC_ALPHA,[dh]:s.SRC_ALPHA_SATURATE,[hh]:s.DST_COLOR,[ch]:s.DST_ALPHA,[oh]:s.ONE_MINUS_SRC_COLOR,[ha]:s.ONE_MINUS_SRC_ALPHA,[uh]:s.ONE_MINUS_DST_COLOR,[lh]:s.ONE_MINUS_DST_ALPHA,[fh]:s.CONSTANT_COLOR,[ph]:s.ONE_MINUS_CONSTANT_COLOR,[mh]:s.CONSTANT_ALPHA,[gh]:s.ONE_MINUS_CONSTANT_ALPHA};function Zt(L,gt,et,xt,Q,Z,rt,Nt,fe,se){if(L===yn){M===!0&&(_t(s.BLEND),M=!1);return}if(M===!1&&(j(s.BLEND),M=!0),L!==Ql){if(L!==m||se!==x){if((p!==oi||w!==oi)&&(s.blendEquation(s.FUNC_ADD),p=oi,w=oi),se)switch(L){case Oi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _n:s.blendFunc(s.ONE,s.ONE);break;case Bo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ko:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:jt("WebGLState: Invalid blending: ",L);break}else switch(L){case Oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _n:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bo:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ko:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",L);break}v=null,y=null,T=null,A=null,R.set(0,0,0),D=0,m=L,x=se}return}Q=Q||gt,Z=Z||et,rt=rt||xt,(gt!==p||Q!==w)&&(s.blendEquationSeparate(Kt[gt],Kt[Q]),p=gt,w=Q),(et!==v||xt!==y||Z!==T||rt!==A)&&(s.blendFuncSeparate(Bt[et],Bt[xt],Bt[Z],Bt[rt]),v=et,y=xt,T=Z,A=rt),(Nt.equals(R)===!1||fe!==D)&&(s.blendColor(Nt.r,Nt.g,Nt.b,fe),R.copy(Nt),D=fe),m=L,x=!1}function le(L,gt){L.side===ge?_t(s.CULL_FACE):j(s.CULL_FACE);let et=L.side===He;gt&&(et=!et),Gt(et),L.blending===Oi&&L.transparent===!1?Zt(yn):Zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const xt=L.stencilWrite;o.setTest(xt),xt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Te(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){S!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),S=L)}function be(L){L!==Jl?(j(s.CULL_FACE),L!==P&&(L===Oo?s.cullFace(s.BACK):L===jl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),P=L}function I(L){L!==F&&(H&&s.lineWidth(L),F=L)}function Te(L,gt,et){L?(j(s.POLYGON_OFFSET_FILL),(O!==gt||W!==et)&&(s.polygonOffset(gt,et),O=gt,W=et)):_t(s.POLYGON_OFFSET_FILL)}function ne(L){L?j(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function de(L){L===void 0&&(L=s.TEXTURE0+X-1),ct!==L&&(s.activeTexture(L),ct=L)}function bt(L,gt,et){et===void 0&&(ct===null?et=s.TEXTURE0+X-1:et=ct);let xt=it[et];xt===void 0&&(xt={type:void 0,texture:void 0},it[et]=xt),(xt.type!==L||xt.texture!==gt)&&(ct!==et&&(s.activeTexture(et),ct=et),s.bindTexture(L,gt||Y[L]),xt.type=L,xt.texture=gt)}function C(){const L=it[ct];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(L){jt("WebGLState:",L)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(L){jt("WebGLState:",L)}}function K(){try{s.texSubImage2D(...arguments)}catch(L){jt("WebGLState:",L)}}function J(){try{s.texSubImage3D(...arguments)}catch(L){jt("WebGLState:",L)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(L){jt("WebGLState:",L)}}function Et(){try{s.compressedTexSubImage3D(...arguments)}catch(L){jt("WebGLState:",L)}}function at(){try{s.texStorage2D(...arguments)}catch(L){jt("WebGLState:",L)}}function wt(){try{s.texStorage3D(...arguments)}catch(L){jt("WebGLState:",L)}}function It(){try{s.texImage2D(...arguments)}catch(L){jt("WebGLState:",L)}}function tt(){try{s.texImage3D(...arguments)}catch(L){jt("WebGLState:",L)}}function lt(L){Pt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Pt.copy(L))}function St(L){ie.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function Tt(L,gt){let et=l.get(gt);et===void 0&&(et=new WeakMap,l.set(gt,et));let xt=et.get(L);xt===void 0&&(xt=s.getUniformBlockIndex(gt,L.name),et.set(L,xt))}function ot(L,gt){const xt=l.get(gt).get(L);c.get(gt)!==xt&&(s.uniformBlockBinding(gt,xt,L.__bindingPointIndex),c.set(gt,xt))}function Vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ct=null,it={},u={},d=new WeakMap,f=[],g=null,M=!1,m=null,p=null,v=null,y=null,w=null,T=null,A=null,R=new Ot(0,0,0),D=0,x=!1,S=null,P=null,F=null,O=null,W=null,Pt.set(0,0,s.canvas.width,s.canvas.height),ie.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:_t,bindFramebuffer:pt,drawBuffers:st,useProgram:yt,setBlending:Zt,setMaterial:le,setFlipSided:Gt,setCullFace:be,setLineWidth:I,setPolygonOffset:Te,setScissorTest:ne,activeTexture:de,bindTexture:bt,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:It,texImage3D:tt,updateUBOMapping:Tt,uniformBlockBinding:ot,texStorage2D:at,texStorage3D:wt,texSubImage2D:K,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:Et,scissor:lt,viewport:St,reset:Vt}}function K0(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,_){return f?new OffscreenCanvas(C,_):fr("canvas")}function M(C,_,U){let K=1;const J=bt(C);if((J.width>U||J.height>U)&&(K=U/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(K*J.width),Et=Math.floor(K*J.height);u===void 0&&(u=g(q,Et));const at=_?g(q,Et):u;return at.width=q,at.height=Et,at.getContext("2d").drawImage(C,0,0,q,Et),Ut("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Et+")."),at}else return"data"in C&&Ut("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,_,U,K,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=_;if(_===s.RED&&(U===s.FLOAT&&(q=s.R32F),U===s.HALF_FLOAT&&(q=s.R16F),U===s.UNSIGNED_BYTE&&(q=s.R8)),_===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.R8UI),U===s.UNSIGNED_SHORT&&(q=s.R16UI),U===s.UNSIGNED_INT&&(q=s.R32UI),U===s.BYTE&&(q=s.R8I),U===s.SHORT&&(q=s.R16I),U===s.INT&&(q=s.R32I)),_===s.RG&&(U===s.FLOAT&&(q=s.RG32F),U===s.HALF_FLOAT&&(q=s.RG16F),U===s.UNSIGNED_BYTE&&(q=s.RG8)),_===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.RG8UI),U===s.UNSIGNED_SHORT&&(q=s.RG16UI),U===s.UNSIGNED_INT&&(q=s.RG32UI),U===s.BYTE&&(q=s.RG8I),U===s.SHORT&&(q=s.RG16I),U===s.INT&&(q=s.RG32I)),_===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.RGB8UI),U===s.UNSIGNED_SHORT&&(q=s.RGB16UI),U===s.UNSIGNED_INT&&(q=s.RGB32UI),U===s.BYTE&&(q=s.RGB8I),U===s.SHORT&&(q=s.RGB16I),U===s.INT&&(q=s.RGB32I)),_===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),U===s.UNSIGNED_INT&&(q=s.RGBA32UI),U===s.BYTE&&(q=s.RGBA8I),U===s.SHORT&&(q=s.RGBA16I),U===s.INT&&(q=s.RGBA32I)),_===s.RGB&&(U===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),_===s.RGBA){const Et=J?ur:Qt.getTransfer(K);U===s.FLOAT&&(q=s.RGBA32F),U===s.HALF_FLOAT&&(q=s.RGBA16F),U===s.UNSIGNED_BYTE&&(q=Et===ae?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function w(C,_){let U;return C?_===null||_===bn||_===ms?U=s.DEPTH24_STENCIL8:_===vn?U=s.DEPTH32F_STENCIL8:_===ps&&(U=s.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===bn||_===ms?U=s.DEPTH_COMPONENT24:_===vn?U=s.DEPTH_COMPONENT32F:_===ps&&(U=s.DEPTH_COMPONENT16),U}function T(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ne&&C.minFilter!==Be?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function A(C){const _=C.target;_.removeEventListener("dispose",A),D(_),_.isVideoTexture&&h.delete(_)}function R(C){const _=C.target;_.removeEventListener("dispose",R),S(_)}function D(C){const _=n.get(C);if(_.__webglInit===void 0)return;const U=C.source,K=d.get(U);if(K){const J=K[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(C),Object.keys(K).length===0&&d.delete(U)}n.remove(C)}function x(C){const _=n.get(C);s.deleteTexture(_.__webglTexture);const U=C.source,K=d.get(U);delete K[_.__cacheKey],a.memory.textures--}function S(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let J=0;J<_.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(_.__webglFramebuffer[K][J]);else s.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)s.deleteFramebuffer(_.__webglFramebuffer[K]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=C.textures;for(let K=0,J=U.length;K<J;K++){const q=n.get(U[K]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(U[K])}n.remove(C)}let P=0;function F(){P=0}function O(){const C=P;return C>=i.maxTextures&&Ut("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function W(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function X(C,_){const U=n.get(C);if(C.isVideoTexture&&ne(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){const K=C.image;if(K===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,C,_);return}}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+_)}function H(C,_){const U=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){Y(U,C,_);return}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+_)}function B(C,_){const U=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){Y(U,C,_);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+_)}function $(C,_){const U=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&U.__version!==C.version){j(U,C,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+_)}const ct={[li]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[Ma]:s.MIRRORED_REPEAT},it={[Ne]:s.NEAREST,[vh]:s.NEAREST_MIPMAP_NEAREST,[Ps]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[Rr]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},dt={[Sh]:s.NEVER,[Ah]:s.ALWAYS,[wh]:s.LESS,[mo]:s.LEQUAL,[bh]:s.EQUAL,[go]:s.GEQUAL,[Th]:s.GREATER,[Eh]:s.NOTEQUAL};function Lt(C,_){if(_.type===vn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Be||_.magFilter===Rr||_.magFilter===Ps||_.magFilter===hi||_.minFilter===Be||_.minFilter===Rr||_.minFilter===Ps||_.minFilter===hi)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ct[_.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ct[_.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ct[_.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,it[_.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,it[_.minFilter]),_.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,dt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ne||_.minFilter!==Ps&&_.minFilter!==hi||_.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Pt(C,_){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",A));const K=_.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const q=W(_);if(q!==C.__cacheKey){J[q]===void 0&&(J[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[q].usedTimes++;const Et=J[C.__cacheKey];Et!==void 0&&(J[C.__cacheKey].usedTimes--,Et.usedTimes===0&&x(_)),C.__cacheKey=q,C.__webglTexture=J[q].texture}return U}function ie(C,_,U){return Math.floor(Math.floor(C/U)/_)}function Jt(C,_,U,K){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,U,K,_.data);else{q.sort((tt,lt)=>tt.start-lt.start);let Et=0;for(let tt=1;tt<q.length;tt++){const lt=q[Et],St=q[tt],Tt=lt.start+lt.count,ot=ie(St.start,_.width,4),Vt=ie(lt.start,_.width,4);St.start<=Tt+1&&ot===Vt&&ie(St.start+St.count-1,_.width,4)===ot?lt.count=Math.max(lt.count,St.start+St.count-lt.start):(++Et,q[Et]=St)}q.length=Et+1;const at=s.getParameter(s.UNPACK_ROW_LENGTH),wt=s.getParameter(s.UNPACK_SKIP_PIXELS),It=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let tt=0,lt=q.length;tt<lt;tt++){const St=q[tt],Tt=Math.floor(St.start/4),ot=Math.ceil(St.count/4),Vt=Tt%_.width,L=Math.floor(Tt/_.width),gt=ot,et=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),e.texSubImage2D(s.TEXTURE_2D,0,Vt,L,gt,et,U,K,_.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,at),s.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,It)}}function Y(C,_,U){let K=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=s.TEXTURE_3D);const J=Pt(C,_),q=_.source;e.bindTexture(K,C.__webglTexture,s.TEXTURE0+U);const Et=n.get(q);if(q.version!==Et.__version||J===!0){e.activeTexture(s.TEXTURE0+U);const at=Qt.getPrimaries(Qt.workingColorSpace),wt=_.colorSpace===Xn?null:Qt.getPrimaries(_.colorSpace),It=_.colorSpace===Xn||at===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let tt=M(_.image,!1,i.maxTextureSize);tt=de(_,tt);const lt=r.convert(_.format,_.colorSpace),St=r.convert(_.type);let Tt=y(_.internalFormat,lt,St,_.colorSpace,_.isVideoTexture);Lt(K,_);let ot;const Vt=_.mipmaps,L=_.isVideoTexture!==!0,gt=Et.__version===void 0||J===!0,et=q.dataReady,xt=T(_,tt);if(_.isDepthTexture)Tt=w(_.format===ui,_.type),gt&&(L?e.texStorage2D(s.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Tt,tt.width,tt.height,0,lt,St,null));else if(_.isDataTexture)if(Vt.length>0){L&&gt&&e.texStorage2D(s.TEXTURE_2D,xt,Tt,Vt[0].width,Vt[0].height);for(let Q=0,Z=Vt.length;Q<Z;Q++)ot=Vt[Q],L?et&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ot.width,ot.height,lt,St,ot.data):e.texImage2D(s.TEXTURE_2D,Q,Tt,ot.width,ot.height,0,lt,St,ot.data);_.generateMipmaps=!1}else L?(gt&&e.texStorage2D(s.TEXTURE_2D,xt,Tt,tt.width,tt.height),et&&Jt(_,tt,lt,St)):e.texImage2D(s.TEXTURE_2D,0,Tt,tt.width,tt.height,0,lt,St,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Tt,Vt[0].width,Vt[0].height,tt.depth);for(let Q=0,Z=Vt.length;Q<Z;Q++)if(ot=Vt[Q],_.format!==pn)if(lt!==null)if(L){if(et)if(_.layerUpdates.size>0){const rt=xc(ot.width,ot.height,_.format,_.type);for(const Nt of _.layerUpdates){const fe=ot.data.subarray(Nt*rt/ot.data.BYTES_PER_ELEMENT,(Nt+1)*rt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Nt,ot.width,ot.height,1,lt,fe)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,tt.depth,lt,ot.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Tt,ot.width,ot.height,tt.depth,0,ot.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?et&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,tt.depth,lt,St,ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Tt,ot.width,ot.height,tt.depth,0,lt,St,ot.data)}else{L&&gt&&e.texStorage2D(s.TEXTURE_2D,xt,Tt,Vt[0].width,Vt[0].height);for(let Q=0,Z=Vt.length;Q<Z;Q++)ot=Vt[Q],_.format!==pn?lt!==null?L?et&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,ot.width,ot.height,lt,ot.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Tt,ot.width,ot.height,0,ot.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?et&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ot.width,ot.height,lt,St,ot.data):e.texImage2D(s.TEXTURE_2D,Q,Tt,ot.width,ot.height,0,lt,St,ot.data)}else if(_.isDataArrayTexture)if(L){if(gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Tt,tt.width,tt.height,tt.depth),et)if(_.layerUpdates.size>0){const Q=xc(tt.width,tt.height,_.format,_.type);for(const Z of _.layerUpdates){const rt=tt.data.subarray(Z*Q/tt.data.BYTES_PER_ELEMENT,(Z+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,lt,St,rt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,St,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,lt,St,tt.data);else if(_.isData3DTexture)L?(gt&&e.texStorage3D(s.TEXTURE_3D,xt,Tt,tt.width,tt.height,tt.depth),et&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,St,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,lt,St,tt.data);else if(_.isFramebufferTexture){if(gt)if(L)e.texStorage2D(s.TEXTURE_2D,xt,Tt,tt.width,tt.height);else{let Q=tt.width,Z=tt.height;for(let rt=0;rt<xt;rt++)e.texImage2D(s.TEXTURE_2D,rt,Tt,Q,Z,0,lt,St,null),Q>>=1,Z>>=1}}else if(Vt.length>0){if(L&&gt){const Q=bt(Vt[0]);e.texStorage2D(s.TEXTURE_2D,xt,Tt,Q.width,Q.height)}for(let Q=0,Z=Vt.length;Q<Z;Q++)ot=Vt[Q],L?et&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,lt,St,ot):e.texImage2D(s.TEXTURE_2D,Q,Tt,lt,St,ot);_.generateMipmaps=!1}else if(L){if(gt){const Q=bt(tt);e.texStorage2D(s.TEXTURE_2D,xt,Tt,Q.width,Q.height)}et&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,St,tt)}else e.texImage2D(s.TEXTURE_2D,0,Tt,lt,St,tt);m(_)&&p(K),Et.__version=q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function j(C,_,U){if(_.image.length!==6)return;const K=Pt(C,_),J=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+U);const q=n.get(J);if(J.version!==q.__version||K===!0){e.activeTexture(s.TEXTURE0+U);const Et=Qt.getPrimaries(Qt.workingColorSpace),at=_.colorSpace===Xn?null:Qt.getPrimaries(_.colorSpace),wt=_.colorSpace===Xn||Et===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const It=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,lt=[];for(let Z=0;Z<6;Z++)!It&&!tt?lt[Z]=M(_.image[Z],!0,i.maxCubemapSize):lt[Z]=tt?_.image[Z].image:_.image[Z],lt[Z]=de(_,lt[Z]);const St=lt[0],Tt=r.convert(_.format,_.colorSpace),ot=r.convert(_.type),Vt=y(_.internalFormat,Tt,ot,_.colorSpace),L=_.isVideoTexture!==!0,gt=q.__version===void 0||K===!0,et=J.dataReady;let xt=T(_,St);Lt(s.TEXTURE_CUBE_MAP,_);let Q;if(It){L&&gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,Vt,St.width,St.height);for(let Z=0;Z<6;Z++){Q=lt[Z].mipmaps;for(let rt=0;rt<Q.length;rt++){const Nt=Q[rt];_.format!==pn?Tt!==null?L?et&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,Nt.width,Nt.height,Tt,Nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Vt,Nt.width,Nt.height,0,Nt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,Nt.width,Nt.height,Tt,ot,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Vt,Nt.width,Nt.height,0,Tt,ot,Nt.data)}}}else{if(Q=_.mipmaps,L&&gt){Q.length>0&&xt++;const Z=bt(lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){L?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,lt[Z].width,lt[Z].height,Tt,ot,lt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,lt[Z].width,lt[Z].height,0,Tt,ot,lt[Z].data);for(let rt=0;rt<Q.length;rt++){const fe=Q[rt].image[Z].image;L?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,fe.width,fe.height,Tt,ot,fe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Vt,fe.width,fe.height,0,Tt,ot,fe.data)}}else{L?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt,ot,lt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,Tt,ot,lt[Z]);for(let rt=0;rt<Q.length;rt++){const Nt=Q[rt];L?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Tt,ot,Nt.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Vt,Tt,ot,Nt.image[Z])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),q.__version=J.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function _t(C,_,U,K,J,q){const Et=r.convert(U.format,U.colorSpace),at=r.convert(U.type),wt=y(U.internalFormat,Et,at,U.colorSpace),It=n.get(_),tt=n.get(U);if(tt.__renderTarget=_,!It.__hasExternalTextures){const lt=Math.max(1,_.width>>q),St=Math.max(1,_.height>>q);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,q,wt,lt,St,_.depth,0,Et,at,null):e.texImage2D(J,q,wt,lt,St,0,Et,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Te(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,tt.__webglTexture,0,I(_)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,tt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(C,_,U){if(s.bindRenderbuffer(s.RENDERBUFFER,C),_.depthBuffer){const K=_.depthTexture,J=K&&K.isDepthTexture?K.type:null,q=w(_.stencilBuffer,J),Et=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Te(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(_),q,_.width,_.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(_),q,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,q,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,C)}else{const K=_.textures;for(let J=0;J<K.length;J++){const q=K[J],Et=r.convert(q.format,q.colorSpace),at=r.convert(q.type),wt=y(q.internalFormat,Et,at,q.colorSpace);Te(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(_),wt,_.width,_.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(_),wt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,wt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(C,_,U){const K=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Lt(s.TEXTURE_CUBE_MAP,_.depthTexture);const It=r.convert(_.depthTexture.format),tt=r.convert(_.depthTexture.type);let lt;_.depthTexture.format===Bn?lt=s.DEPTH_COMPONENT24:_.depthTexture.format===ui&&(lt=s.DEPTH24_STENCIL8);for(let St=0;St<6;St++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,lt,_.width,_.height,0,It,tt,null)}}else X(_.depthTexture,0);const q=J.__webglTexture,Et=I(_),at=K?s.TEXTURE_CUBE_MAP_POSITIVE_X+U:s.TEXTURE_2D,wt=_.depthTexture.format===ui?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Bn)Te(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,wt,at,q,0,Et):s.framebufferTexture2D(s.FRAMEBUFFER,wt,at,q,0);else if(_.depthTexture.format===ui)Te(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,wt,at,q,0,Et):s.framebufferTexture2D(s.FRAMEBUFFER,wt,at,q,0);else throw new Error("Unknown depthTexture format")}function yt(C){const _=n.get(C),U=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=K}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)st(_.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?st(_.__webglFramebuffer[0],C,0):st(_.__webglFramebuffer,C,0)}else if(U){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=s.createRenderbuffer(),pt(_.__webglDepthbuffer[K],C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),pt(_.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(C,_,U){const K=n.get(C);_!==void 0&&_t(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&yt(C)}function Bt(C){const _=C.texture,U=n.get(C),K=n.get(_);C.addEventListener("dispose",R);const J=C.textures,q=C.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=_.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[at]=[];for(let wt=0;wt<_.mipmaps.length;wt++)U.__webglFramebuffer[at][wt]=s.createFramebuffer()}else U.__webglFramebuffer[at]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)U.__webglFramebuffer[at]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(Et)for(let at=0,wt=J.length;at<wt;at++){const It=n.get(J[at]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Te(C)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const wt=J[at];U.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[at]);const It=r.convert(wt.format,wt.colorSpace),tt=r.convert(wt.type),lt=y(wt.internalFormat,It,tt,wt.colorSpace,C.isXRRenderTarget===!0),St=I(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,St,lt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,U.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(U.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Lt(s.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let wt=0;wt<_.mipmaps.length;wt++)_t(U.__webglFramebuffer[at][wt],C,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt);else _t(U.__webglFramebuffer[at],C,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(_)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let at=0,wt=J.length;at<wt;at++){const It=J[at],tt=n.get(It);let lt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),Lt(lt,It),_t(U.__webglFramebuffer,C,It,s.COLOR_ATTACHMENT0+at,lt,0),m(It)&&p(lt)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),Lt(at,_),_.mipmaps&&_.mipmaps.length>0)for(let wt=0;wt<_.mipmaps.length;wt++)_t(U.__webglFramebuffer[wt],C,_,s.COLOR_ATTACHMENT0,at,wt);else _t(U.__webglFramebuffer,C,_,s.COLOR_ATTACHMENT0,at,0);m(_)&&p(at),e.unbindTexture()}C.depthBuffer&&yt(C)}function Zt(C){const _=C.textures;for(let U=0,K=_.length;U<K;U++){const J=_[U];if(m(J)){const q=v(C),Et=n.get(J).__webglTexture;e.bindTexture(q,Et),p(q),e.unbindTexture()}}}const le=[],Gt=[];function be(C){if(C.samples>0){if(Te(C)===!1){const _=C.textures,U=C.width,K=C.height;let J=s.COLOR_BUFFER_BIT;const q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(C),at=_.length>1;if(at)for(let It=0;It<_.length;It++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const wt=C.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let It=0;It<_.length;It++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[It]);const tt=n.get(_[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,U,K,0,0,U,K,J,s.NEAREST),c===!0&&(le.length=0,Gt.length=0,le.push(s.COLOR_ATTACHMENT0+It),C.depthBuffer&&C.resolveDepthBuffer===!1&&(le.push(q),Gt.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let It=0;It<_.length;It++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,Et.__webglColorRenderbuffer[It]);const tt=n.get(_[It]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const _=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function I(C){return Math.min(i.maxSamples,C.samples)}function Te(C){const _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ne(C){const _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function de(C,_){const U=C.colorSpace,K=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==Vi&&U!==Xn&&(Qt.getTransfer(U)===ae?(K!==pn||J!==en)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",U)),_}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=Kt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Z0(s,t){function e(n,i=Xn){let r;const a=Qt.getTransfer(i);if(n===en)return s.UNSIGNED_BYTE;if(n===lo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===il)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===tl)return s.BYTE;if(n===el)return s.SHORT;if(n===ps)return s.UNSIGNED_SHORT;if(n===co)return s.INT;if(n===bn)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===sn)return s.HALF_FLOAT;if(n===sl)return s.ALPHA;if(n===rl)return s.RGB;if(n===pn)return s.RGBA;if(n===Bn)return s.DEPTH_COMPONENT;if(n===ui)return s.DEPTH_STENCIL;if(n===al)return s.RED;if(n===uo)return s.RED_INTEGER;if(n===Gi)return s.RG;if(n===fo)return s.RG_INTEGER;if(n===po)return s.RGBA_INTEGER;if(n===rr||n===ar||n===or||n===cr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Sa||n===wa||n===ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===Ea||n===Aa||n===Ca||n===Ra||n===Pa||n===Da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ta||n===Ea)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ca)return r.COMPRESSED_R11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pa)return r.COMPRESSED_RG11_EAC;if(n===Da)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ia||n===La||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ga||n===Va||n===Ha||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===qa||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ya)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Za||n===$a||n===Ja||n===ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J0=`
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

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Sl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Le({vertexShader:$0,fragmentShader:J0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new z(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q0 extends qi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const M=typeof XRWebGLBinding<"u",m=new j0,p={},v=e.getContextAttributes();let y=null,w=null;const T=[],A=[],R=new nt;let D=null;const x=new tn;x.viewport=new Se;const S=new tn;S.viewport=new Se;const P=[x,S],F=new cd;let O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=T[Y];return j===void 0&&(j=new $r,T[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=T[Y];return j===void 0&&(j=new $r,T[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=T[Y];return j===void 0&&(j=new $r,T[Y]=j),j.getHandSpace()};function X(Y){const j=A.indexOf(Y.inputSource);if(j===-1)return;const _t=T[j];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,l||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",B);for(let Y=0;Y<T.length;Y++){const j=A[Y];j!==null&&(A[Y]=null,T[Y].disconnect(j))}O=null,W=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(y),f=null,d=null,u=null,i=null,w=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",H),i.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,pt=null,st=null;v.depth&&(st=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?ui:Bn,pt=v.stencil?ms:bn);const yt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(yt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ye(d.textureWidth,d.textureHeight,{format:pn,type:en,depthTexture:new xs(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Ye(f.framebufferWidth,f.framebufferHeight,{format:pn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Y){for(let j=0;j<Y.removed.length;j++){const _t=Y.removed[j],pt=A.indexOf(_t);pt>=0&&(A[pt]=null,T[pt].disconnect(_t))}for(let j=0;j<Y.added.length;j++){const _t=Y.added[j];let pt=A.indexOf(_t);if(pt===-1){for(let yt=0;yt<T.length;yt++)if(yt>=A.length){A.push(_t),pt=yt;break}else if(A[yt]===null){A[yt]=_t,pt=yt;break}if(pt===-1)break}const st=T[pt];st&&st.connect(_t)}}const $=new E,ct=new E;function it(Y,j,_t){$.setFromMatrixPosition(j.matrixWorld),ct.setFromMatrixPosition(_t.matrixWorld);const pt=$.distanceTo(ct),st=j.projectionMatrix.elements,yt=_t.projectionMatrix.elements,Kt=st[14]/(st[10]-1),Bt=st[14]/(st[10]+1),Zt=(st[9]+1)/st[5],le=(st[9]-1)/st[5],Gt=(st[8]-1)/st[0],be=(yt[8]+1)/yt[0],I=Kt*Gt,Te=Kt*be,ne=pt/(-Gt+be),de=ne*-Gt;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(de),Y.translateZ(ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),st[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const bt=Kt+ne,C=Bt+ne,_=I-de,U=Te+(pt-de),K=Zt*Bt/C*bt,J=le*Bt/C*bt;Y.projectionMatrix.makePerspective(_,U,K,J,bt,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function dt(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let j=Y.near,_t=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),F.near=S.near=x.near=j,F.far=S.far=x.far=_t,(O!==F.near||W!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,W=F.far),F.layers.mask=Y.layers.mask|6,x.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const pt=Y.parent,st=F.cameras;dt(F,pt);for(let yt=0;yt<st.length;yt++)dt(st[yt],pt);st.length===2?it(F,x,S):F.projectionMatrix.copy(x.projectionMatrix),Lt(Y,F,pt)};function Lt(Y,j,_t){_t===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_s*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let Pt=null;function ie(Y,j){if(h=j.getViewerPose(l||a),g=j,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let pt=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,pt=!0);for(let Bt=0;Bt<_t.length;Bt++){const Zt=_t[Bt];let le=null;if(f!==null)le=f.getViewport(Zt);else{const be=u.getViewSubImage(d,Zt);le=be.viewport,Bt===0&&(t.setRenderTargetTextures(w,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(w))}let Gt=P[Bt];Gt===void 0&&(Gt=new tn,Gt.layers.enable(Bt),Gt.viewport=new Se,P[Bt]=Gt),Gt.matrix.fromArray(Zt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Zt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(le.x,le.y,le.width,le.height),Bt===0&&(F.matrix.copy(Gt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),pt===!0&&F.cameras.push(Gt)}const st=i.enabledFeatures;if(st&&st.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const Bt=u.getDepthInformation(_t[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,i.renderState)}if(st&&st.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let Bt=0;Bt<_t.length;Bt++){const Zt=_t[Bt].camera;if(Zt){let le=p[Zt];le||(le=new Sl,p[Zt]=le);const Gt=u.getCameraImage(Zt);le.sourceTexture=Gt}}}}for(let _t=0;_t<T.length;_t++){const pt=A[_t],st=T[_t];pt!==null&&st!==void 0&&st.update(pt,j,l||a)}Pt&&Pt(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Jt=new Ul;Jt.setAnimationLoop(ie),this.setAnimationLoop=function(Y){Pt=Y},this.dispose=function(){}}}const si=new Tn,tg=new _e;function eg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ml(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,w=v.envMapRotation;y&&(m.envMap.value=y,si.copy(w),si.x*=-1,si.y*=-1,si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(si)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ng(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const w=y.program;n.uniformBlockBinding(v,w)}function l(v,y){let w=i[v.id];w===void 0&&(g(v),w=h(v),i[v.id]=w,v.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(v,T);const A=t.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){const y=u();v.__bindingPointIndex=y;const w=s.createBuffer(),T=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,w),w}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],w=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,R=w.length;A<R;A++){const D=Array.isArray(w[A])?w[A]:[w[A]];for(let x=0,S=D.length;x<S;x++){const P=D[x];if(f(P,A,x,T)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let X=0;X<O.length;X++){const H=O[X],B=M(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,F+W,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,W),W+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,w,T){const A=v.value,R=y+"_"+w;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{const D=T[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return T[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(v){const y=v.uniforms;let w=0;const T=16;for(let R=0,D=y.length;R<D;R++){const x=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,P=x.length;S<P;S++){const F=x[S],O=Array.isArray(F.value)?F.value:[F.value];for(let W=0,X=O.length;W<X;W++){const H=O[W],B=M(H),$=w%T,ct=$%B.boundary,it=$+ct;w+=ct,it!==0&&T-it<B.storage&&(w+=T-it),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=B.storage}}}const A=w%T;return A>0&&(w+=T-A),v.__size=w,v.__cache={},this}function M(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ut("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}const ig=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gn=null;function sg(){return gn===null&&(gn=new _u(ig,16,16,Gi,sn),gn.name="DFG_LUT",gn.minFilter=Be,gn.magFilter=Be,gn.wrapS=Nn,gn.wrapT=Nn,gn.generateMipmaps=!1,gn.needsUpdate=!0),gn}class rg{constructor(t={}){const{canvas:e=Ch(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=en}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=f,m=new Set([po,fo,uo]),p=new Set([en,bn,ps,ms,lo,ho]),v=new Uint32Array(4),y=new Int32Array(4);let w=null,T=null;const A=[],R=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=on;let P=0,F=0,O=null,W=-1,X=null;const H=new Se,B=new Se;let $=null;const ct=new Ot(0);let it=0,dt=e.width,Lt=e.height,Pt=1,ie=null,Jt=null;const Y=new Se(0,0,dt,Lt),j=new Se(0,0,dt,Lt);let _t=!1;const pt=new Mo;let st=!1,yt=!1;const Kt=new _e,Bt=new E,Zt=new Se,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function be(){return O===null?Pt:1}let I=n;function Te(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ao}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",se,!1),I===null){const N="webgl2";if(I=Te(N,b),I===null)throw Te(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw jt("WebGLRenderer: "+b.message),b}let ne,de,bt,C,_,U,K,J,q,Et,at,wt,It,tt,lt,St,Tt,ot,Vt,L,gt,et,xt,Q;function Z(){ne=new sm(I),ne.init(),et=new Z0(I,ne),de=new Zp(I,ne,t,et),bt=new q0(I,ne),de.reversedDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),C=new om(I),_=new I0,U=new K0(I,ne,bt,_,de,et,C),K=new Jp(x),J=new im(x),q=new hd(I),xt=new qp(I,q),Et=new rm(I,q,C,xt),at=new lm(I,Et,q,C),Vt=new cm(I,de,U),St=new $p(_),wt=new D0(x,K,J,ne,de,xt,St),It=new eg(x,_),tt=new U0,lt=new z0(ne),ot=new Yp(x,K,J,bt,at,g,c),Tt=new X0(x,at,de),Q=new ng(I,C,de,bt),L=new Kp(I,ne,C),gt=new am(I,ne,C),C.programs=wt.programs,x.capabilities=de,x.extensions=ne,x.properties=_,x.renderLists=tt,x.shadowMap=Tt,x.state=bt,x.info=C}Z(),M!==en&&(D=new um(M,e.width,e.height,i,r));const rt=new Q0(x,I);this.xr=rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(b){b!==void 0&&(Pt=b,this.setSize(dt,Lt,!1))},this.getSize=function(b){return b.set(dt,Lt)},this.setSize=function(b,N,V=!0){if(rt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=b,Lt=N,e.width=Math.floor(b*Pt),e.height=Math.floor(N*Pt),V===!0&&(e.style.width=b+"px",e.style.height=N+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(dt*Pt,Lt*Pt).floor()},this.setDrawingBufferSize=function(b,N,V){dt=b,Lt=N,Pt=V,e.width=Math.floor(b*V),e.height=Math.floor(N*V),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(M===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(Y)},this.setViewport=function(b,N,V,G){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,N,V,G),bt.viewport(H.copy(Y).multiplyScalar(Pt).round())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,N,V,G){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,N,V,G),bt.scissor(B.copy(j).multiplyScalar(Pt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(b){bt.setScissorTest(_t=b)},this.setOpaqueSort=function(b){ie=b},this.setTransparentSort=function(b){Jt=b},this.getClearColor=function(b){return b.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,V=!0){let G=0;if(b){let k=!1;if(O!==null){const ht=O.texture.format;k=m.has(ht)}if(k){const ht=O.texture.type,vt=p.has(ht),mt=ot.getClearColor(),Mt=ot.getClearAlpha(),At=mt.r,Dt=mt.g,Ct=mt.b;vt?(v[0]=At,v[1]=Dt,v[2]=Ct,v[3]=Mt,I.clearBufferuiv(I.COLOR,0,v)):(y[0]=At,y[1]=Dt,y[2]=Ct,y[3]=Mt,I.clearBufferiv(I.COLOR,0,y))}else G|=I.COLOR_BUFFER_BIT}N&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",se,!1),ot.dispose(),tt.dispose(),lt.dispose(),_.dispose(),K.dispose(),J.dispose(),at.dispose(),xt.dispose(),Q.dispose(),wt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Po),rt.removeEventListener("sessionend",Do),Jn.stop()};function Nt(b){b.preventDefault(),pr("WebGLRenderer: Context Lost."),S=!0}function fe(){pr("WebGLRenderer: Context Restored."),S=!1;const b=C.autoReset,N=Tt.enabled,V=Tt.autoUpdate,G=Tt.needsUpdate,k=Tt.type;Z(),C.autoReset=b,Tt.enabled=N,Tt.autoUpdate=V,Tt.needsUpdate=G,Tt.type=k}function se(b){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mn(b){const N=b.target;N.removeEventListener("dispose",mn),Cn(N)}function Cn(b){Hl(b),_.remove(b)}function Hl(b){const N=_.get(b).programs;N!==void 0&&(N.forEach(function(V){wt.releaseProgram(V)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,V,G,k,ht){N===null&&(N=le);const vt=k.isMesh&&k.matrixWorld.determinant()<0,mt=Xl(b,N,V,G,k);bt.setMaterial(G,vt);let Mt=V.index,At=1;if(G.wireframe===!0){if(Mt=Et.getWireframeAttribute(V),Mt===void 0)return;At=2}const Dt=V.drawRange,Ct=V.attributes.position;let Ht=Dt.start*At,ce=(Dt.start+Dt.count)*At;ht!==null&&(Ht=Math.max(Ht,ht.start*At),ce=Math.min(ce,(ht.start+ht.count)*At)),Mt!==null?(Ht=Math.max(Ht,0),ce=Math.min(ce,Mt.count)):Ct!=null&&(Ht=Math.max(Ht,0),ce=Math.min(ce,Ct.count));const Me=ce-Ht;if(Me<0||Me===1/0)return;xt.setup(k,G,mt,V,Mt);let ye,he=L;if(Mt!==null&&(ye=q.get(Mt),he=gt,he.setIndex(ye)),k.isMesh)G.wireframe===!0?(bt.setLineWidth(G.wireframeLinewidth*be()),he.setMode(I.LINES)):he.setMode(I.TRIANGLES);else if(k.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),bt.setLineWidth(Rt*be()),k.isLineSegments?he.setMode(I.LINES):k.isLineLoop?he.setMode(I.LINE_LOOP):he.setMode(I.LINE_STRIP)}else k.isPoints?he.setMode(I.POINTS):k.isSprite&&he.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)gs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))he.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Rt=k._multiDrawStarts,re=k._multiDrawCounts,ee=k._multiDrawCount,Ke=Mt?q.get(Mt).bytesPerElement:1,_i=_.get(G).currentProgram.getUniforms();for(let Ze=0;Ze<ee;Ze++)_i.setValue(I,"_gl_DrawID",Ze),he.render(Rt[Ze]/Ke,re[Ze])}else if(k.isInstancedMesh)he.renderInstances(Ht,Me,k.count);else if(V.isInstancedBufferGeometry){const Rt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,re=Math.min(V.instanceCount,Rt);he.renderInstances(Ht,Me,re)}else he.render(Ht,Me)};function Ro(b,N,V){b.transparent===!0&&b.side===ge&&b.forceSinglePass===!1?(b.side=He,b.needsUpdate=!0,Rs(b,N,V),b.side=Zn,b.needsUpdate=!0,Rs(b,N,V),b.side=ge):Rs(b,N,V)}this.compile=function(b,N,V=null){V===null&&(V=b),T=lt.get(V),T.init(N),R.push(T),V.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),b!==V&&b.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();const G=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ht=k.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){const mt=ht[vt];Ro(mt,V,k),G.add(mt)}else Ro(ht,V,k),G.add(ht)}),T=R.pop(),G},this.compileAsync=function(b,N,V=null){const G=this.compile(b,N,V);return new Promise(k=>{function ht(){if(G.forEach(function(vt){_.get(vt).currentProgram.isReady()&&G.delete(vt)}),G.size===0){k(b);return}setTimeout(ht,10)}ne.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Er=null;function Wl(b){Er&&Er(b)}function Po(){Jn.stop()}function Do(){Jn.start()}const Jn=new Ul;Jn.setAnimationLoop(Wl),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(b){Er=b,rt.setAnimationLoop(b),b===null?Jn.stop():Jn.start()},rt.addEventListener("sessionstart",Po),rt.addEventListener("sessionend",Do),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const V=rt.enabled===!0&&rt.isPresenting===!0,G=D!==null&&(O===null||V)&&D.begin(x,O);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,O),T=lt.get(b,R.length),T.init(N),R.push(T),Kt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),pt.setFromProjectionMatrix(Kt,Mn,N.reversedDepth),yt=this.localClippingEnabled,st=St.init(this.clippingPlanes,yt),w=tt.get(b,A.length),w.init(),A.push(w),rt.enabled===!0&&rt.isPresenting===!0){const vt=x.xr.getDepthSensingMesh();vt!==null&&Ar(vt,N,-1/0,x.sortObjects)}Ar(b,N,0,x.sortObjects),w.finish(),x.sortObjects===!0&&w.sort(ie,Jt),Gt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Gt&&ot.addToRenderList(w,b),this.info.render.frame++,st===!0&&St.beginShadows();const k=T.state.shadowsArray;if(Tt.render(k,b,N),st===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&D.hasRenderPass())===!1){const vt=w.opaque,mt=w.transmissive;if(T.setupLights(),N.isArrayCamera){const Mt=N.cameras;if(mt.length>0)for(let At=0,Dt=Mt.length;At<Dt;At++){const Ct=Mt[At];Lo(vt,mt,b,Ct)}Gt&&ot.render(b);for(let At=0,Dt=Mt.length;At<Dt;At++){const Ct=Mt[At];Io(w,b,Ct,Ct.viewport)}}else mt.length>0&&Lo(vt,mt,b,N),Gt&&ot.render(b),Io(w,b,N)}O!==null&&F===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),G&&D.end(x),b.isScene===!0&&b.onAfterRender(x,b,N),xt.resetDefaultState(),W=-1,X=null,R.pop(),R.length>0?(T=R[R.length-1],st===!0&&St.setGlobalState(x.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?w=A[A.length-1]:w=null};function Ar(b,N,V,G){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||pt.intersectsSprite(b)){G&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Kt);const vt=at.update(b),mt=b.material;mt.visible&&w.push(b,vt,mt,V,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||pt.intersectsObject(b))){const vt=at.update(b),mt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Zt.copy(vt.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(Kt)),Array.isArray(mt)){const Mt=vt.groups;for(let At=0,Dt=Mt.length;At<Dt;At++){const Ct=Mt[At],Ht=mt[Ct.materialIndex];Ht&&Ht.visible&&w.push(b,vt,Ht,V,Zt.z,Ct)}}else mt.visible&&w.push(b,vt,mt,V,Zt.z,null)}}const ht=b.children;for(let vt=0,mt=ht.length;vt<mt;vt++)Ar(ht[vt],N,V,G)}function Io(b,N,V,G){const{opaque:k,transmissive:ht,transparent:vt}=b;T.setupLightsView(V),st===!0&&St.setGlobalState(x.clippingPlanes,V),G&&bt.viewport(H.copy(G)),k.length>0&&Cs(k,N,V),ht.length>0&&Cs(ht,N,V),vt.length>0&&Cs(vt,N,V),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Lo(b,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Ht=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Ye(1,1,{generateMipmaps:!0,type:Ht?sn:en,minFilter:hi,samples:de.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const ht=T.state.transmissionRenderTarget[G.id],vt=G.viewport||H;ht.setSize(vt.z*x.transmissionResolutionScale,vt.w*x.transmissionResolutionScale);const mt=x.getRenderTarget(),Mt=x.getActiveCubeFace(),At=x.getActiveMipmapLevel();x.setRenderTarget(ht),x.getClearColor(ct),it=x.getClearAlpha(),it<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&ot.render(V);const Dt=x.toneMapping;x.toneMapping=Sn;const Ct=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),st===!0&&St.setGlobalState(x.clippingPlanes,G),Cs(b,V,G),U.updateMultisampleRenderTarget(ht),U.updateRenderTargetMipmap(ht),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ce=0,Me=N.length;ce<Me;ce++){const ye=N[ce],{object:he,geometry:Rt,material:re,group:ee}=ye;if(re.side===ge&&he.layers.test(G.layers)){const Ke=re.side;re.side=He,re.needsUpdate=!0,Uo(he,V,G,Rt,re,ee),re.side=Ke,re.needsUpdate=!0,Ht=!0}}Ht===!0&&(U.updateMultisampleRenderTarget(ht),U.updateRenderTargetMipmap(ht))}x.setRenderTarget(mt,Mt,At),x.setClearColor(ct,it),Ct!==void 0&&(G.viewport=Ct),x.toneMapping=Dt}function Cs(b,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,ht=b.length;k<ht;k++){const vt=b[k],{object:mt,geometry:Mt,group:At}=vt;let Dt=vt.material;Dt.allowOverride===!0&&G!==null&&(Dt=G),mt.layers.test(V.layers)&&Uo(mt,N,V,Mt,Dt,At)}}function Uo(b,N,V,G,k,ht){b.onBeforeRender(x,N,V,G,k,ht),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(x,N,V,G,b,ht),k.transparent===!0&&k.side===ge&&k.forceSinglePass===!1?(k.side=He,k.needsUpdate=!0,x.renderBufferDirect(V,N,G,k,b,ht),k.side=Zn,k.needsUpdate=!0,x.renderBufferDirect(V,N,G,k,b,ht),k.side=ge):x.renderBufferDirect(V,N,G,k,b,ht),b.onAfterRender(x,N,V,G,k,ht)}function Rs(b,N,V){N.isScene!==!0&&(N=le);const G=_.get(b),k=T.state.lights,ht=T.state.shadowsArray,vt=k.state.version,mt=wt.getParameters(b,k.state,ht,N,V),Mt=wt.getProgramCacheKey(mt);let At=G.programs;G.environment=b.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(b.isMeshStandardMaterial?J:K).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",mn),At=new Map,G.programs=At);let Dt=At.get(Mt);if(Dt!==void 0){if(G.currentProgram===Dt&&G.lightsStateVersion===vt)return Fo(b,mt),Dt}else mt.uniforms=wt.getUniforms(b),b.onBeforeCompile(mt,x),Dt=wt.acquireProgram(mt,Mt),At.set(Mt,Dt),G.uniforms=mt.uniforms;const Ct=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=St.uniform),Fo(b,mt),G.needsLights=ql(b),G.lightsStateVersion=vt,G.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.directionalShadowMap.value=k.state.directionalShadowMap,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotShadowMap.value=k.state.spotShadowMap,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMap.value=k.state.pointShadowMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Dt,G.uniformsList=null,Dt}function No(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=lr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Fo(b,N){const V=_.get(b);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Xl(b,N,V,G,k){N.isScene!==!0&&(N=le),U.resetTextureUnits();const ht=N.fog,vt=G.isMeshStandardMaterial?N.environment:null,mt=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Vi,Mt=(G.isMeshStandardMaterial?J:K).get(G.envMap||vt),At=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Dt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!V.morphAttributes.position,Ht=!!V.morphAttributes.normal,ce=!!V.morphAttributes.color;let Me=Sn;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Me=x.toneMapping);const ye=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=ye!==void 0?ye.length:0,Rt=_.get(G),re=T.state.lights;if(st===!0&&(yt===!0||b!==X)){const ze=b===X&&G.id===W;St.setState(G,b,ze)}let ee=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==re.state.version||Rt.outputColorSpace!==mt||k.isBatchedMesh&&Rt.batching===!1||!k.isBatchedMesh&&Rt.batching===!0||k.isBatchedMesh&&Rt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Rt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Rt.instancing===!1||!k.isInstancedMesh&&Rt.instancing===!0||k.isSkinnedMesh&&Rt.skinning===!1||!k.isSkinnedMesh&&Rt.skinning===!0||k.isInstancedMesh&&Rt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Rt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Rt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Rt.instancingMorph===!1&&k.morphTexture!==null||Rt.envMap!==Mt||G.fog===!0&&Rt.fog!==ht||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==St.numPlanes||Rt.numIntersection!==St.numIntersection)||Rt.vertexAlphas!==At||Rt.vertexTangents!==Dt||Rt.morphTargets!==Ct||Rt.morphNormals!==Ht||Rt.morphColors!==ce||Rt.toneMapping!==Me||Rt.morphTargetsCount!==he)&&(ee=!0):(ee=!0,Rt.__version=G.version);let Ke=Rt.currentProgram;ee===!0&&(Ke=Rs(G,N,k));let _i=!1,Ze=!1,Zi=!1;const pe=Ke.getUniforms(),We=Rt.uniforms;if(bt.useProgram(Ke.program)&&(_i=!0,Ze=!0,Zi=!0),G.id!==W&&(W=G.id,Ze=!0),_i||X!==b){bt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pe.setValue(I,"projectionMatrix",b.projectionMatrix),pe.setValue(I,"viewMatrix",b.matrixWorldInverse);const Xe=pe.map.cameraPosition;Xe!==void 0&&Xe.setValue(I,Bt.setFromMatrixPosition(b.matrixWorld)),de.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pe.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),X!==b&&(X=b,Ze=!0,Zi=!0)}if(Rt.needsLights&&(re.state.directionalShadowMap.length>0&&pe.setValue(I,"directionalShadowMap",re.state.directionalShadowMap,U),re.state.spotShadowMap.length>0&&pe.setValue(I,"spotShadowMap",re.state.spotShadowMap,U),re.state.pointShadowMap.length>0&&pe.setValue(I,"pointShadowMap",re.state.pointShadowMap,U)),k.isSkinnedMesh){pe.setOptional(I,k,"bindMatrix"),pe.setOptional(I,k,"bindMatrixInverse");const ze=k.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),pe.setValue(I,"boneTexture",ze.boneTexture,U))}k.isBatchedMesh&&(pe.setOptional(I,k,"batchingTexture"),pe.setValue(I,"batchingTexture",k._matricesTexture,U),pe.setOptional(I,k,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",k._indirectTexture,U),pe.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&pe.setValue(I,"batchingColorTexture",k._colorsTexture,U));const rn=V.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Vt.update(k,V,Ke),(Ze||Rt.receiveShadow!==k.receiveShadow)&&(Rt.receiveShadow=k.receiveShadow,pe.setValue(I,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(We.envMap.value=Mt,We.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(We.envMapIntensity.value=N.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=sg()),Ze&&(pe.setValue(I,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&Yl(We,Zi),ht&&G.fog===!0&&It.refreshFogUniforms(We,ht),It.refreshMaterialUniforms(We,G,Pt,Lt,T.state.transmissionRenderTarget[b.id]),lr.upload(I,No(Rt),We,U)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(lr.upload(I,No(Rt),We,U),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pe.setValue(I,"center",k.center),pe.setValue(I,"modelViewMatrix",k.modelViewMatrix),pe.setValue(I,"normalMatrix",k.normalMatrix),pe.setValue(I,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ze=G.uniformsGroups;for(let Xe=0,Cr=ze.length;Xe<Cr;Xe++){const jn=ze[Xe];Q.update(jn,Ke),Q.bind(jn,Ke)}}return Ke}function Yl(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function ql(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,N,V){const G=_.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),_.get(b.texture).__webglTexture=N,_.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const V=_.get(b);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const Kl=I.createFramebuffer();this.setRenderTarget=function(b,N=0,V=0){O=b,P=N,F=V;let G=null,k=!1,ht=!1;if(b){const mt=_.get(b);if(mt.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(I.FRAMEBUFFER,mt.__webglFramebuffer),H.copy(b.viewport),B.copy(b.scissor),$=b.scissorTest,bt.viewport(H),bt.scissor(B),bt.setScissorTest($),W=-1;return}else if(mt.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(mt.__hasExternalTextures)U.rebindTextures(b,_.get(b.texture).__webglTexture,_.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Dt=b.depthTexture;if(mt.__boundDepthTexture!==Dt){if(Dt!==null&&_.has(Dt)&&(b.width!==Dt.image.width||b.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const Mt=b.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ht=!0);const At=_.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(At[N])?G=At[N][V]:G=At[N],k=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?G=_.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?G=At[V]:G=At,H.copy(b.viewport),B.copy(b.scissor),$=b.scissorTest}else H.copy(Y).multiplyScalar(Pt).floor(),B.copy(j).multiplyScalar(Pt).floor(),$=_t;if(V!==0&&(G=Kl),bt.bindFramebuffer(I.FRAMEBUFFER,G)&&bt.drawBuffers(b,G),bt.viewport(H),bt.scissor(B),bt.setScissorTest($),k){const mt=_.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,V)}else if(ht){const mt=N;for(let Mt=0;Mt<b.textures.length;Mt++){const At=_.get(b.textures[Mt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Mt,At.__webglTexture,V,mt)}}else if(b!==null&&V!==0){const mt=_.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,V)}W=-1},this.readRenderTargetPixels=function(b,N,V,G,k,ht,vt,mt=0){if(!(b&&b.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(Mt=Mt[vt]),Mt){bt.bindFramebuffer(I.FRAMEBUFFER,Mt);try{const At=b.textures[mt],Dt=At.format,Ct=At.type;if(!de.textureFormatReadable(Dt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Ct)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-G&&V>=0&&V<=b.height-k&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+mt),I.readPixels(N,V,G,k,et.convert(Dt),et.convert(Ct),ht))}finally{const At=O!==null?_.get(O).__webglFramebuffer:null;bt.bindFramebuffer(I.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,N,V,G,k,ht,vt,mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(Mt=Mt[vt]),Mt)if(N>=0&&N<=b.width-G&&V>=0&&V<=b.height-k){bt.bindFramebuffer(I.FRAMEBUFFER,Mt);const At=b.textures[mt],Dt=At.format,Ct=At.type;if(!de.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ht),I.bufferData(I.PIXEL_PACK_BUFFER,ht.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+mt),I.readPixels(N,V,G,k,et.convert(Dt),et.convert(Ct),0);const ce=O!==null?_.get(O).__webglFramebuffer:null;bt.bindFramebuffer(I.FRAMEBUFFER,ce);const Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rh(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ht),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ht),I.deleteBuffer(Ht),I.deleteSync(Me),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,V=0){const G=Math.pow(2,-V),k=Math.floor(b.image.width*G),ht=Math.floor(b.image.height*G),vt=N!==null?N.x:0,mt=N!==null?N.y:0;U.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,vt,mt,k,ht),bt.unbindTexture()};const Zl=I.createFramebuffer(),$l=I.createFramebuffer();this.copyTextureToTexture=function(b,N,V=null,G=null,k=0,ht=null){ht===null&&(k!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=k,k=0):ht=0);let vt,mt,Mt,At,Dt,Ct,Ht,ce,Me;const ye=b.isCompressedTexture?b.mipmaps[ht]:b.image;if(V!==null)vt=V.max.x-V.min.x,mt=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,At=V.min.x,Dt=V.min.y,Ct=V.isBox3?V.min.z:0;else{const rn=Math.pow(2,-k);vt=Math.floor(ye.width*rn),mt=Math.floor(ye.height*rn),b.isDataArrayTexture?Mt=ye.depth:b.isData3DTexture?Mt=Math.floor(ye.depth*rn):Mt=1,At=0,Dt=0,Ct=0}G!==null?(Ht=G.x,ce=G.y,Me=G.z):(Ht=0,ce=0,Me=0);const he=et.convert(N.format),Rt=et.convert(N.type);let re;N.isData3DTexture?(U.setTexture3D(N,0),re=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(U.setTexture2DArray(N,0),re=I.TEXTURE_2D_ARRAY):(U.setTexture2D(N,0),re=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const ee=I.getParameter(I.UNPACK_ROW_LENGTH),Ke=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_i=I.getParameter(I.UNPACK_SKIP_PIXELS),Ze=I.getParameter(I.UNPACK_SKIP_ROWS),Zi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ye.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ye.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ct);const pe=b.isDataArrayTexture||b.isData3DTexture,We=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const rn=_.get(b),ze=_.get(N),Xe=_.get(rn.__renderTarget),Cr=_.get(ze.__renderTarget);bt.bindFramebuffer(I.READ_FRAMEBUFFER,Xe.__webglFramebuffer),bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let jn=0;jn<Mt;jn++)pe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(b).__webglTexture,k,Ct+jn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(N).__webglTexture,ht,Me+jn)),I.blitFramebuffer(At,Dt,vt,mt,Ht,ce,vt,mt,I.DEPTH_BUFFER_BIT,I.NEAREST);bt.bindFramebuffer(I.READ_FRAMEBUFFER,null),bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||_.has(b)){const rn=_.get(b),ze=_.get(N);bt.bindFramebuffer(I.READ_FRAMEBUFFER,Zl),bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,$l);for(let Xe=0;Xe<Mt;Xe++)pe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rn.__webglTexture,k,Ct+Xe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,rn.__webglTexture,k),We?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.__webglTexture,ht,Me+Xe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ze.__webglTexture,ht),k!==0?I.blitFramebuffer(At,Dt,vt,mt,Ht,ce,vt,mt,I.COLOR_BUFFER_BIT,I.NEAREST):We?I.copyTexSubImage3D(re,ht,Ht,ce,Me+Xe,At,Dt,vt,mt):I.copyTexSubImage2D(re,ht,Ht,ce,At,Dt,vt,mt);bt.bindFramebuffer(I.READ_FRAMEBUFFER,null),bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else We?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(re,ht,Ht,ce,Me,vt,mt,Mt,he,Rt,ye.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(re,ht,Ht,ce,Me,vt,mt,Mt,he,ye.data):I.texSubImage3D(re,ht,Ht,ce,Me,vt,mt,Mt,he,Rt,ye):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ht,Ht,ce,vt,mt,he,Rt,ye.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ht,Ht,ce,ye.width,ye.height,he,ye.data):I.texSubImage2D(I.TEXTURE_2D,ht,Ht,ce,vt,mt,he,Rt,ye);I.pixelStorei(I.UNPACK_ROW_LENGTH,ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_i),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zi),ht===0&&N.generateMipmaps&&I.generateMipmap(re),bt.unbindTexture()},this.initRenderTarget=function(b){_.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),bt.unbindTexture()},this.resetState=function(){P=0,F=0,O=null,bt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const hr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Es{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ag=new wr(-1,1,1,-1,0,1);class og extends we{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const cg=new og;class kl{constructor(t){this._mesh=new z(cg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ag)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class zl extends Es{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=mr.clone(t.uniforms),this.material=new Le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new kl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vc extends Es{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class lg extends Es{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class hg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zl(hr),this.copyPass.material.blending=yn,this.clock=new Ll}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vc!==void 0&&(a instanceof Vc?n=!0:a instanceof lg&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ug extends Es{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ot}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const dg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xi extends Es{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new Ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(r,a,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Ye(r,a,{type:sn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Ye(r,a,{type:sn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=dg;this.highPassUniforms=mr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Le({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mr.clone(hr.uniforms),this.blendMaterial=new Le({uniforms:this.copyUniforms,vertexShader:hr.vertexShader,fragmentShader:hr.fragmentShader,premultipliedAlpha:!0,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ot,this._oldClearAlpha=1,this._basic=new me,this._fsQuad=new kl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Xi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Xi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Xi.BlurDirectionX=new nt(1,0);Xi.BlurDirectionY=new nt(0,1);class fg{constructor(){this.remnant=0,this.heldRemnant=0,this.deathCount=0,this.deathLessons={},this.infusions={strength:0,vitality:0,stamina:0,spirit:0},this.MAX_TOTAL_DEPTH=20,this.MAX_TRACK_DEPTH=5,this.bonfirePosition=new E(0,0,5),this.maxHealth=100,this.maxStamina=100,this.maxPosture=100,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.isDead=!1,this.checkpoint=new E(0,0,5),this.deathScreenEl=document.getElementById("death-screen"),this.player=null,this.enemyManager=null,this.bloodstain=null,this.bloodstainMesh=null,this.staminaRegenDelay=.5,this.staminaRegenRate=25,this.staminaRegenTimer=0,this.postureRegenDelay=1,this.postureRegenRate=15,this.postureRegenTimer=0,this.audioManager=null,this.hitstopActive=!1,this.hitstopDuration=0,this.hitstopTimer=0,this.hud=null,this.cameraController=null}triggerHitstop(t=.04){this.hitstopActive=!0,this.hitstopDuration=t,this.hitstopTimer=0}hitstopLight(){this.triggerHitstop(.035)}hitstopHeavy(){this.triggerHitstop(.06)}isInHitstop(){return this.hitstopActive}updateHitstop(t){return this.hitstopActive?(this.hitstopTimer+=t,this.hitstopTimer>=this.hitstopDuration&&(this.hitstopActive=!1,this.hitstopTimer=0),!0):!1}update(t){this.isDead||(this.staminaRegenTimer+=t,this.staminaRegenTimer>=this.staminaRegenDelay&&this.stamina<this.maxStamina&&(this.stamina=Math.min(this.maxStamina,this.stamina+this.staminaRegenRate*t)),this.postureRegenTimer+=t,this.postureRegenTimer>=this.postureRegenDelay&&this.posture>0&&(this.posture=Math.max(0,this.posture-this.postureRegenRate*t)))}canUseStamina(t){const e=this.stamina>=t;return!e&&this.hud&&(this.hud.flashStaminaDepleted(),this.audioManager&&this.player&&this.audioManager.play("staminaDepleted",{position:this.player.mesh.position,volume:.4})),e}useStamina(t){this.stamina=Math.max(0,this.stamina-t),this.staminaRegenTimer=0,this.stamina<15&&this.hud&&this.hud.flashStaminaDepleted()}takeDamage(t,e="physical",n=0,i=!1){if(this.isDead)return;const r=this.deathLessons[e]||0;let a=Math.floor(t*(1-r));if(i){const o=a*.5;if(this.canUseStamina(o))this.useStamina(o),a=Math.floor(a*.2),n*=.5;else return this.stamina=0,this.posture=this.maxPosture,"guard_broken"}return this.health-=a,this.posture=Math.min(this.maxPosture,this.posture+n),this.postureRegenTimer=0,this.audioManager&&this.player&&this.audioManager.play("playerDamage",{position:this.player.mesh.position,volume:.7}),this.health<=0?(this.die(e),"died"):this.posture>=this.maxPosture?(this.audioManager&&this.player&&this.audioManager.play("postureBreak",{position:this.player.mesh.position,volume:.8}),"posture_broken"):"hit"}die(t="unknown"){this.isDead=!0,this.deathCount++,this.health=0,this.audioManager&&this.audioManager.play("death",{volume:.8});const e=this.player?this.player.mesh.position.clone():this.checkpoint.clone();if(this.particleManager&&this.player&&this.particleManager.spawnPlayerDeathEffect(e,this.camera),this.bloodstainMesh&&this.scene&&(this.scene.remove(this.bloodstainMesh),this.bloodstainMesh=null),this.remnant>0&&this.scene){this.heldRemnant=this.remnant,this.remnant=0,this.bloodstain=e.clone(),this.bloodstain.y=.05;const n=new Kn(.5,16),i=new me({color:11154227,transparent:!0,opacity:.8,side:ge});this.bloodstainMesh=new z(n,i),this.bloodstainMesh.rotation.x=-Math.PI/2,this.bloodstainMesh.position.copy(this.bloodstain),this.scene.add(this.bloodstainMesh),console.log(`[REMNANT] Dropped ${this.heldRemnant} remnant at bloodstain`)}else this.heldRemnant=0,this.bloodstain=null;this.deathLessons[t]||(this.deathLessons[t]=0),this.deathLessons[t]=Math.min(.25,this.deathLessons[t]+.005),this.deathScreenEl&&this.deathScreenEl.classList.add("visible"),setTimeout(()=>this.respawn(),3e3)}respawn(){this.isDead=!1,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.player&&(this.player.resetPosition(),console.log("[RESPAWN] Player reset to checkpoint")),this.enemyManager&&this.enemyManager.resetAll(),this.deathScreenEl&&this.deathScreenEl.classList.remove("visible")}setCheckpoint(t){this.checkpoint.copy(t)}setEntities(t,e,n,i=null){this.player=t,this.enemyManager=e,this.scene=n,this.camera=i}addRemnant(t){this.remnant+=t}collectBloodstain(){return!this.bloodstain||!this.player?!1:this.player.mesh.position.distanceTo(this.bloodstain)<2?(this.remnant+=this.heldRemnant,console.log(`[REMNANT] Recovered ${this.heldRemnant} remnant from bloodstain!`),this.audioManager&&this.audioManager.play("itemPickup",{volume:.6}),this.heldRemnant=0,this.bloodstainMesh&&this.scene&&this.scene.remove(this.bloodstainMesh),this.bloodstain=null,this.bloodstainMesh=null,!0):!1}getTotalDepth(){return this.infusions.bone+this.infusions.blood+this.infusions.stone}canInfuse(t){return!(!this.infusions.hasOwnProperty(t)||this.infusions[t]>=this.MAX_TRACK_DEPTH||this.getTotalDepth()>=this.MAX_TOTAL_DEPTH)}getInfusionCost(t,e){return 100*e*e}infuse(t){if(!this.canInfuse(t))return!1;const e=this.infusions[t]+1,n=this.getInfusionCost(t,e);return this.remnant<n?!1:(this.remnant-=n,this.infusions[t]=e,this.audioManager&&this.audioManager.play("menuConfirm",{volume:.5}),!0)}getInfusionBonuses(){return{damageMult:1+this.infusions.strength*.1,bonusHealth:this.infusions.vitality*20,bonusStamina:this.infusions.stamina*15,staminaRegenMult:1+this.infusions.stamina*.1,postureResist:this.infusions.spirit*.05,postureRegenMult:1+this.infusions.spirit*.15}}applyInfusionBonuses(){const t=this.getInfusionBonuses();this.maxHealth=100+t.bonusHealth,this.maxStamina=100+t.bonusStamina,this.isDead||(this.health=Math.min(this.health,this.maxHealth),this.stamina=Math.min(this.stamina,this.maxStamina))}isNearBonfire(){return this.player?this.player.mesh.position.distanceTo(this.bonfirePosition)<3:!1}getTrackInfo(t){const e=this.infusions[t]||0,n=e+1,i=n<=this.MAX_TRACK_DEPTH?this.getInfusionCost(t,n):null,r=i!==null&&this.remnant>=i,a=e>=this.MAX_TRACK_DEPTH,o={strength:{name:"Strength",desc:"+10% damage per level",bonus:`+${e*10}% damage`},vitality:{name:"Vitality",desc:"+20 max HP per level",bonus:`+${e*20} HP`},stamina:{name:"Stamina",desc:"+15 max stamina, +10% regen per level",bonus:`+${e*15} stamina`},spirit:{name:"Spirit",desc:"+5% posture resist, +15% posture regen per level",bonus:`+${e*5}% resist`}};return{level:e,nextLevel:n,cost:i,canAfford:r,maxed:a,...o[t]}}}const qt={IDLE:"idle",MOVING:"moving",DODGING:"dodging",ATTACKING:"attacking",HEAVY_ATTACKING:"heavy_attacking",BLOCKING:"blocking",STAGGERED:"staggered",DEAD:"dead"},ri={dodge:20,lightAttack:15,heavyAttack:30},je={dodgeDuration:.45,dodgeIframes:.3,lightAttackDuration:.4,heavyAttackDuration:.7,lightHitStart:.1,lightHitEnd:.25,heavyHitStart:.2,heavyHitEnd:.4,staggerDuration:.8,comboWindow:.15};class pg{constructor(t,e,n){this.scene=t,this.gm=e,this.input=n,this.cameraController=null,this.state=qt.IDLE,this.stateTimer=0,this.isInvincible=!1,this.attackCombo=0,this.hitThisSwing=!1,this.velocity=new E,this.moveSpeed=6,this.dodgeSpeed=14,this.gravity=-30,this.grounded=!0,this.currentMoveVelocity=new E,this.moveAcceleration=35,this.moveDeceleration=25,this.dodgeGhostMeshes=[],this.lastGhostSpawnTime=0,this.ghostSpawnInterval=.05,this.animationBlend=0,this.animationBlendSpeed=12,this.prevSwordPos=new E(.45,1.2,0),this.prevSwordRotZ=0,this.prevSwordRotX=0,this.targetSwordPos=new E(.45,1.2,0),this.targetSwordRotZ=0,this.targetSwordRotX=0,this.bodyTilt=0,this.bodyTwist=0,this.walkBobPhase=0,this.moveDir=new E,this.dodgeDir=new E,this.facingAngle=0,this.mesh=new xe,this.mesh.position.set(0,0,5);const i=new ft({color:5921384,roughness:.35,metalness:.85}),r=new ft({color:2763317,roughness:.5,metalness:.7}),a=new ft({color:13412949,roughness:.3,metalness:.9,emissive:3351040,emissiveIntensity:.2}),o=new ft({color:1709344,roughness:.9,metalness:0,side:ge}),c=new De(.35,.6,8,16);this.body=new z(c,i),this.body.position.y=1.1,this.body.castShadow=!0,this.mesh.add(this.body);const l=new Yt(.5,.5,.25),h=new z(l,r);h.position.set(0,1.15,.18),h.castShadow=!0,this.mesh.add(h);const u=new mi(.25,.03,4,8),d=new z(u,a);d.position.set(0,1.15,.3),d.rotation.x=Math.PI/2,this.mesh.add(d);const f=new te(.22,16,12),g=new z(f,i);g.position.y=1.7,g.scale.set(1,1.1,1),g.castShadow=!0,this.mesh.add(g);const M=new Yt(.25,.2,.1),m=new z(M,r);m.position.set(0,1.65,.2),this.mesh.add(m);const p=new Yt(.2,.04,.12),v=new ft({color:6737151,emissive:4491468,emissiveIntensity:3});this.visor=new z(p,v),this.visor.position.set(0,1.68,.25),this.mesh.add(this.visor);const y=new ln(.08,.4,4),w=new z(y,a);w.position.set(0,1.95,-.05),w.rotation.x=.3,this.mesh.add(w);const T=new te(.15,8,6),A=new z(T,i);A.position.set(-.4,1.4,0),A.scale.set(1.2,.8,1),A.castShadow=!0,this.mesh.add(A);const R=new z(T,i);R.position.set(.4,1.4,0),R.scale.set(1.2,.8,1),R.castShadow=!0,this.mesh.add(R);const D=new De(.08,.4,4,8),x=new z(D,r);x.position.set(-.45,1,0),x.castShadow=!0,this.mesh.add(x);const S=new z(D,r);S.position.set(.45,1,0),S.castShadow=!0,this.mesh.add(S);const P=new Yt(.12,.15,.1),F=new z(P,i);F.position.set(-.45,.7,0),this.mesh.add(F);const O=new z(P,i);O.position.set(.45,.7,0),this.mesh.add(O);const W=new De(.1,.5,4,8),X=new z(W,r);X.position.set(-.15,.4,0),X.castShadow=!0,this.mesh.add(X);const H=new z(W,r);H.position.set(.15,.4,0),H.castShadow=!0,this.mesh.add(H);const B=new Yt(.14,.15,.2),$=new z(B,i);$.position.set(-.15,.08,.02),this.mesh.add($);const ct=new z(B,i);ct.position.set(.15,.08,.02),this.mesh.add(ct);const it=new nn(.6,1,4,8);this.cape=new z(it,o),this.cape.position.set(0,1,-.3),this.cape.rotation.x=.2,this.mesh.add(this.cape);const dt=new Yt(.06,.9,.02),Lt=new ft({color:13421789,metalness:.95,roughness:.1});this.sword=new xe;const Pt=new z(dt,Lt);Pt.position.y=.45,Pt.castShadow=!0,this.sword.add(Pt);const ie=new ft({color:8956671,emissive:4482730,emissiveIntensity:.5}),Jt=new Yt(.01,.85,.025),Y=new z(Jt,ie);Y.position.set(.035,.45,0),this.sword.add(Y);const j=new Yt(.25,.04,.06),_t=new z(j,a);_t.position.y=0,this.sword.add(_t);const pt=new Ue(.025,.025,.2,8),st=new ft({color:3811866,roughness:.8}),yt=new z(pt,st);yt.position.y=-.12,this.sword.add(yt);const Kt=new te(.04,8,8),Bt=new z(Kt,a);Bt.position.y=-.24,this.sword.add(Bt),this.sword.position.set(.5,1.1,0),this.sword.rotation.z=-.2,this.mesh.add(this.sword),this.attackRange=2,this.lightDamage=15,this.heavyDamage=35,this.lightPostureDmg=10,this.heavyPostureDmg=25,t.add(this.mesh)}update(t){if(this.gm.isDead){this.state=qt.DEAD;return}switch(this.stateTimer+=t,this.state){case qt.IDLE:case qt.MOVING:this._processMovement(t),this._processCombatInput();break;case qt.DODGING:this._processDodge(t);break;case qt.ATTACKING:case qt.HEAVY_ATTACKING:this._processAttack(t);break;case qt.BLOCKING:this._processBlock(t);break;case qt.STAGGERED:this.stateTimer>=je.staggerDuration&&this._changeState(qt.IDLE);break}this.mesh.position.y>0&&(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.velocity.y=0,this.grounded=!0)),this._animateSword(t)}_processMovement(t){const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const n=this._getCameraYaw(),i=new E(-Math.sin(n),0,-Math.cos(n)),r=new E(Math.cos(n),0,-Math.sin(n));this.moveDir.set(0,0,0).addScaledVector(i,-e.z).addScaledVector(r,e.x).normalize();const a=this.moveDir.clone().multiplyScalar(this.moveSpeed);this.currentMoveVelocity.lerp(a,this.moveAcceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this.facingAngle=Math.atan2(this.moveDir.x,this.moveDir.z),this.mesh.rotation.y=ue.lerp(this.mesh.rotation.y,this.facingAngle,10*t),this.state!==qt.MOVING&&this._changeState(qt.MOVING)}else this.currentMoveVelocity.length()>.01?(this.currentMoveVelocity.lerp(new E(0,0,0),this.moveDeceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t)):this.currentMoveVelocity.set(0,0,0),this.state===qt.MOVING&&this._changeState(qt.IDLE)}_processCombatInput(){if(this.input.lockOn&&this._toggleLockOn(),this.input.dodge&&this.gm.canUseStamina(ri.dodge)){this._startDodge();return}if(this.input.lightAttack&&this.gm.canUseStamina(ri.lightAttack)){this._startAttack(!1);return}if(this.input.heavyAttack&&this.gm.canUseStamina(ri.heavyAttack)){this._startAttack(!0);return}this.input.block&&this._changeState(qt.BLOCKING)}_toggleLockOn(){if(!this.cameraController||!this.gm.enemyManager)return;const e=this.gm.enemyManager.enemies.filter(o=>!o.isDead);if(this.gm.enemyManager.boss&&!this.gm.enemyManager.boss.isDead&&e.push(this.gm.enemyManager.boss),e.length===0){this.cameraController.clearLockOn();return}const n=20,i=this.mesh.position,r=e.map(o=>({enemy:o,dist:i.distanceTo(o.mesh.position)})).filter(o=>o.dist<=n).sort((o,c)=>o.dist-c.dist);if(r.length===0){this.cameraController.clearLockOn();return}const a=this.cameraController.lockOnTarget;if(a&&!a.isDead){const o=r.findIndex(c=>c.enemy===a);if(o!==-1&&r.length>1){const c=(o+1)%r.length;this.cameraController.setLockOnTarget(r[c].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.3})}else this.cameraController.clearLockOn(),this.gm.audioManager&&this.gm.audioManager.play("menuBack",{volume:.3})}else this.cameraController.setLockOnTarget(r[0].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.4})}_startDodge(){this.gm.useStamina(ri.dodge),this.gm.audioManager&&this.gm.audioManager.play("dodge",{position:this.mesh.position,volume:.5});const t=this.input.getMovementVector();if(t.x!==0||t.z!==0){const e=this._getCameraYaw(),n=new E(-Math.sin(e),0,-Math.cos(e)),i=new E(-Math.cos(e),0,Math.sin(e));this.dodgeDir.set(0,0,0).addScaledVector(n,-t.z).addScaledVector(i,t.x).normalize()}else this.dodgeDir.set(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.isInvincible=!0,this.lastGhostSpawnTime=0,this._flashDodgeStart(),this._changeState(qt.DODGING)}_flashDodgeStart(){const t=this.visor.material.emissive.getHex();this.visor.material.emissive.setHex(65535),this.visor.material.emissiveIntensity=8,this.body.material.emissive.setHex(17493),setTimeout(()=>{this.visor.material.emissive.setHex(t),this.visor.material.emissiveIntensity=3,this.body.material.emissive.setHex(0)},100)}_spawnDodgeGhost(){const t=new xe,e=new me({color:4491519,transparent:!0,opacity:.4,depthWrite:!1}),n=new De(.35,.6,4,8),i=new z(n,e);i.position.y=1.1,t.add(i);const r=new te(.22,8,6),a=new z(r,e);a.position.y=1.7,t.add(a),t.position.copy(this.mesh.position),t.rotation.y=this.mesh.rotation.y,this.scene.add(t),this.dodgeGhostMeshes.push({mesh:t,material:e,spawnTime:Date.now(),lifetime:200})}_updateDodgeGhosts(){const t=Date.now();for(let e=this.dodgeGhostMeshes.length-1;e>=0;e--){const n=this.dodgeGhostMeshes[e],i=t-n.spawnTime;if(i>n.lifetime)this.scene.remove(n.mesh),n.mesh.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()}),this.dodgeGhostMeshes.splice(e,1);else{const r=i/n.lifetime;n.material.opacity=.4*(1-r)}}}_processDodge(t){const e=this.stateTimer/je.dodgeDuration,n=Math.sin(e*Math.PI);this.mesh.position.addScaledVector(this.dodgeDir,this.dodgeSpeed*n*t),this.lastGhostSpawnTime+=t,this.isInvincible&&this.lastGhostSpawnTime>=this.ghostSpawnInterval&&(this._spawnDodgeGhost(),this.lastGhostSpawnTime=0),this._updateDodgeGhosts(),this.stateTimer>=je.dodgeIframes&&this.isInvincible&&(this.isInvincible=!1,this._flashDodgeEnd()),this.stateTimer>=je.dodgeDuration&&(this.isInvincible=!1,this._changeState(qt.IDLE)),this.body.position.y=1.1-n*.4,this.isInvincible&&this.body.material.emissive.setHex(8755)}_flashDodgeEnd(){this.body.material.emissive.setHex(2236962),setTimeout(()=>{this.body.material.emissive.setHex(0)},50)}_startAttack(t){const e=t?ri.heavyAttack:ri.lightAttack;this.gm.useStamina(e),this.hitThisSwing=!1,this.gm.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.5,pitch:t?.8:1,variation:.1});const n=this._getCameraYaw();if(this.facingAngle=n,this.mesh.rotation.y=n,this.gm.particleManager){const i=new E(Math.sin(n),0,Math.cos(n));this.gm.particleManager.spawnSlashTrail(this.mesh.position.clone(),i,t)}this._changeState(t?qt.HEAVY_ATTACKING:qt.ATTACKING)}_processAttack(t){const e=this.state===qt.HEAVY_ATTACKING,n=e?je.heavyAttackDuration:je.lightAttackDuration,i=e?je.heavyHitStart:je.lightHitStart,r=e?je.heavyHitEnd:je.lightHitEnd;if(this.stateTimer>=i&&this.stateTimer<r&&!this.hitThisSwing&&this._checkHit(e),!e&&this.stateTimer>n-je.comboWindow&&this.stateTimer<n&&this.input.lightAttack&&this.gm.canUseStamina(ri.lightAttack)){this.attackCombo=(this.attackCombo+1)%3,this._startAttack(!1);return}const a=new E(Math.sin(this.facingAngle),0,Math.cos(this.facingAngle)),o=e?3:2;this.stateTimer<r&&this.mesh.position.addScaledVector(a,o*t),this.stateTimer>=n&&(this.attackCombo=0,this._changeState(qt.IDLE))}_checkHit(t){this.activeAttack={position:this.mesh.position.clone().add(new E(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(1.2)),range:this.attackRange,damage:t?this.heavyDamage:this.lightDamage,postureDmg:t?this.heavyPostureDmg:this.lightPostureDmg,isHeavy:t}}_processBlock(t){this.input.block||this._changeState(qt.IDLE);const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const n=this._getCameraYaw(),i=new E(-Math.sin(n),0,-Math.cos(n)),r=new E(-Math.cos(n),0,Math.sin(n)),a=new E().addScaledVector(i,-e.z).addScaledVector(r,e.x).normalize();this.mesh.position.addScaledVector(a,this.moveSpeed*.3*t)}}_animateSword(t){const e=this.stateTimer;switch(this.animationBlend=Math.min(1,this.animationBlend+this.animationBlendSpeed*t),this.state){case qt.ATTACKING:{const i=je.lightAttackDuration,r=.15;if(e<i*r){const a=e/(i*r),o=a*a;this.targetSwordRotZ=.3*o,this.targetSwordRotX=-.3*o,this.targetSwordPos.set(.5+o*.1,1.25,-.1*o),this.bodyTilt=ue.lerp(this.bodyTilt,-.08,8*t)}else{const a=(e-i*r)/(i*(1-r)),o=Math.sin(a*Math.PI),c=this.attackCombo*.3;this.targetSwordRotZ=-o*1.5-c,this.targetSwordRotX=o*.5+c*.5,this.targetSwordPos.set(.45+o*.3,1.2+o*.3,o*.5),this.bodyTilt=ue.lerp(this.bodyTilt,o*.15,10*t),this.bodyTwist=ue.lerp(this.bodyTwist,-o*.1-c*.05,8*t)}break}case qt.HEAVY_ATTACKING:{const i=je.heavyAttackDuration,r=.25;if(e<i*r){const a=e/(i*r),o=Math.sin(a*Math.PI*.5);this.targetSwordRotZ=.8*o,this.targetSwordRotX=-1.5*o,this.targetSwordPos.set(.3,1.5+o*.5,-.3*o),this.bodyTilt=ue.lerp(this.bodyTilt,-.12,8*t)}else{const a=(e-i*r)/(i*(1-r)),o=Math.sin(a*Math.PI),c=Math.min(1,a*2);this.targetSwordRotZ=ue.lerp(.8,-2,c),this.targetSwordRotX=ue.lerp(-1.5,1.2,c),this.targetSwordPos.set(.45,1.2+(1-c)*.6,o*.8),this.bodyTilt=ue.lerp(this.bodyTilt,c*.2,12*t)}break}case qt.BLOCKING:{this.targetSwordRotZ=-.3,this.targetSwordRotX=0,this.targetSwordPos.set(.2,1.3,.3),this.bodyTilt=ue.lerp(this.bodyTilt,-.05,8*t),this.bodyTwist=ue.lerp(this.bodyTwist,0,8*t);break}case qt.MOVING:{this.walkBobPhase+=t*12;const i=Math.sin(this.walkBobPhase)*.02,r=Math.cos(this.walkBobPhase*.5)*.05;this.targetSwordRotZ=r,this.targetSwordRotX=0,this.targetSwordPos.set(.45+r*.1,1.2+i,0),this.bodyTilt=ue.lerp(this.bodyTilt,.03,6*t),this.bodyTwist=ue.lerp(this.bodyTwist,0,6*t);break}case qt.DODGING:{this.targetSwordRotZ=.5,this.targetSwordRotX=-.3,this.targetSwordPos.set(.3,1,-.2);break}default:this.targetSwordRotZ=0,this.targetSwordRotX=0,this.targetSwordPos.set(.45,1.2,0),this.bodyTilt=ue.lerp(this.bodyTilt,0,6*t),this.bodyTwist=ue.lerp(this.bodyTwist,0,6*t),this.walkBobPhase=0}const n=this._easeOutCubic(this.animationBlend);this.sword.position.x=ue.lerp(this.prevSwordPos.x,this.targetSwordPos.x,n),this.sword.position.y=ue.lerp(this.prevSwordPos.y,this.targetSwordPos.y,n),this.sword.position.z=ue.lerp(this.prevSwordPos.z,this.targetSwordPos.z,n),this.sword.rotation.z=ue.lerp(this.prevSwordRotZ,this.targetSwordRotZ,n),this.sword.rotation.x=ue.lerp(this.prevSwordRotX,this.targetSwordRotX,n),this.state!==qt.ATTACKING&&this.state!==qt.HEAVY_ATTACKING&&(this.sword.rotation.z=ue.lerp(this.sword.rotation.z,this.targetSwordRotZ,8*t),this.sword.rotation.x=ue.lerp(this.sword.rotation.x,this.targetSwordRotX,8*t),this.sword.position.lerp(this.targetSwordPos,8*t)),this.body.rotation.x=this.bodyTilt,this.body.rotation.y=this.bodyTwist}_easeOutCubic(t){return 1-Math.pow(1-t,3)}_changeState(t){this.state!==t&&(this.prevSwordPos.copy(this.sword.position),this.prevSwordRotZ=this.sword.rotation.z,this.prevSwordRotX=this.sword.rotation.x,this.animationBlend=0,(this.state===qt.ATTACKING||this.state===qt.HEAVY_ATTACKING)&&(this.activeAttack=null),this.state===qt.DODGING&&(this.body.position.y=1.1,this.body.material.emissive.setHex(0)),this.state=t,this.stateTimer=0)}setCameraController(t){this.cameraController=t}_getCameraYaw(){return this.cameraController?this.cameraController.yaw:0}resetPosition(){this.mesh.position.copy(this.gm.checkpoint),this.velocity.set(0,0,0),this._changeState(qt.IDLE)}get isBlocking(){return this.state===qt.BLOCKING}get isAttacking(){return this.state===qt.ATTACKING||this.state===qt.HEAVY_ATTACKING}flashDamage(){this.body.material.emissive.setHex(6684672),setTimeout(()=>this.body.material.emissive.setHex(0),150);const t=this.visor.material.emissive.getHex();this.visor.material.emissive.setHex(16729156),setTimeout(()=>this.visor.material.emissive.setHex(t),100)}}const Wt={IDLE:"idle",PATROL:"patrol",CHASE:"chase",CIRCLE:"circle",RETREAT:"retreat",ATTACK:"attack",STAGGERED:"staggered",DEAD:"dead"},_r={HOLLOW_SOLDIER:{name:"Hollow Soldier",health:50,damage:15,postureDmg:15,moveSpeed:2.5,detectionRange:10,attackRange:2.2,attackCooldown:1.5,attackWindup:.5,attackDuration:.2,remnantDrop:40,patrolRadius:3,bodyColor:4860458,eyeColor:16724787,canChainAttacks:!1,maxPosture:60,hasShield:!1},BERSERKER:{name:"Berserker",health:35,damage:20,postureDmg:10,moveSpeed:4,detectionRange:12,attackRange:2,attackCooldown:.8,attackWindup:.3,attackDuration:.15,remnantDrop:60,patrolRadius:5,bodyColor:6693410,eyeColor:16737792,canChainAttacks:!0,maxChainAttacks:3,maxPosture:40,hasShield:!1},SENTINEL:{name:"Sentinel",health:100,damage:30,postureDmg:25,moveSpeed:1.5,detectionRange:8,attackRange:2.5,attackCooldown:2.5,attackWindup:.8,attackDuration:.3,remnantDrop:100,patrolRadius:2,bodyColor:3355460,eyeColor:4474111,canChainAttacks:!1,maxPosture:100,hasShield:!0,shieldBlockChance:.4}};class mg{constructor(t,e,n={},i=null){this.scene=t,this.gm=i;const r=n.type?_r[n.type]:{};this.config={..._r.HOLLOW_SOLDIER,...r,...n},this.maxHealth=this.config.health,this.health=this.maxHealth,this.maxPosture=this.config.maxPosture||60,this.posture=0,this.state=Wt.IDLE,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.isBlocking=!1,this.chainAttackCount=0,this.lastAttackTime=0,this.circleDirection=Math.random()>.5?1:-1,this.circleTimer=0,this.spawnPos=e.clone(),this.patrolTarget=e.clone(),this.patrolWait=0,this.mesh=new xe,this.mesh.position.copy(e),this.config.type==="BERSERKER"?this._createBerserkerModel():this.config.hasShield?this._createSentinelModel():this._createHollowSoldierModel(),t.add(this.mesh)}_createHollowSoldierModel(){const t=new xe,e=new De(.28,.6,8,16),n=new ft({color:3811368,roughness:.85,metalness:.1}),i=new z(e,n);i.position.y=1.1,i.castShadow=!0,t.add(i);const r=new Ue(.32,.35,.4,8),a=new ft({color:4473924,roughness:.6,metalness:.7}),o=new z(r,a);o.position.y=1.1,o.castShadow=!0,t.add(o);const c=new te(.15,8,6),l=new ft({color:5588002,roughness:.8,metalness:.5}),h=new z(c,l);h.position.set(-.35,1.35,0),h.scale.set(1,.7,.8),t.add(h);const u=new z(c,l);u.position.set(.35,1.35,0),u.scale.set(1,.7,.8),t.add(u);const d=new te(.18,12,10),f=new ft({color:4864554,roughness:.9,metalness:0}),g=new z(d,f);g.position.y=1.7,g.scale.set(1,1.1,.9),t.add(g);const M=new te(.2,10,8,0,Math.PI*2,0,Math.PI*.6),m=new ft({color:5263440,roughness:.7,metalness:.6}),p=new z(M,m);p.position.y=1.75,p.rotation.x=.1,t.add(p);const v=new ft({color:this.config.eyeColor,emissive:this.config.eyeColor,emissiveIntensity:4}),y=new te(.04,8,8),w=new z(y,v);w.position.set(-.07,1.72,.14),t.add(w);const T=new z(y,v.clone());T.position.set(.07,1.72,.14),t.add(T),this.eye=w;const A=new De(.06,.35,6,8),R=new ft({color:3811874,roughness:.9}),D=new z(A,R);D.position.set(-.4,.9,0),D.rotation.z=.2,t.add(D);const x=new z(A,R);x.position.set(.4,.9,0),x.rotation.z=-.2,t.add(x);const S=new De(.08,.4,6,8),P=new ft({color:2761250,roughness:.85}),F=new z(S,P);F.position.set(-.15,.35,0),t.add(F);const O=new z(S,P);O.position.set(.15,.35,0),t.add(O),this.body=t,this.mesh.add(t);const W=new Yt(.05,.65,.02),X=new ft({color:5592388,roughness:.6,metalness:.7});this.weapon=new z(W,X),this.weapon.position.set(.45,1,.1),this.weapon.castShadow=!0,this.mesh.add(this.weapon);const H=new Yt(.15,.03,.03),B=new z(H,X);B.position.set(.45,.68,.1),this.mesh.add(B),this._createHealthBar(2.1)}_createBerserkerModel(){const t=new xe,e=new te(.35,12,10),n=new ft({color:5576728,roughness:.7,metalness:.15}),i=new z(e,n);i.position.y=.85,i.scale.set(1,.9,1.1),i.castShadow=!0,t.add(i);for(let D=0;D<5;D++){const x=new ln(.04,.15,6),S=new ft({color:3346705,roughness:.5,metalness:.3}),P=new z(x,S);P.position.set(0,.85+D*.1,-.3+D*.02),P.rotation.x=-.6,t.add(P)}const r=new te(.18,10,8),a=new ft({color:4461074,roughness:.75}),o=new z(r,a);o.position.set(0,1.15,.15),o.scale.set(1,.9,1.2),t.add(o);const c=new ln(.1,.2,8),l=new z(c,a);l.position.set(0,1.1,.32),l.rotation.x=Math.PI/2,t.add(l);const h=new ft({color:this.config.eyeColor,emissive:this.config.eyeColor,emissiveIntensity:5}),u=new te(.05,8,8),d=new z(u,h);d.position.set(-.1,1.2,.25),t.add(d);const f=new z(u,h.clone());f.position.set(.1,1.2,.25),t.add(f),this.eye=d;const g=new De(.08,.4,8,10),M=new ft({color:4855832,roughness:.7}),m=new z(g,M);m.position.set(-.35,.7,.15),m.rotation.z=.5,m.rotation.x=-.4,t.add(m);const p=new z(g,M);p.position.set(.35,.7,.15),p.rotation.z=-.5,p.rotation.x=-.4,t.add(p);const v=new De(.1,.35,8,10),y=new z(v,M);y.position.set(-.18,.3,0),t.add(y);const w=new z(v,M);w.position.set(.18,.3,0),t.add(w),this.body=t,this.mesh.add(t);const T=new xe,A=new ft({color:2236962,roughness:.3,metalness:.8});for(let D=0;D<4;D++){const x=new ln(.02,.2,6),S=new z(x,A);S.position.set(D*.04-.06,0,.08),S.rotation.x=-.3,T.add(S)}T.position.set(.45,.55,.25),this.weapon=T,this.mesh.add(T);const R=T.clone();R.position.set(-.45,.55,.25),this.weapon2=R,this.mesh.add(R),this._createHealthBar(1.8)}_createSentinelModel(){const t=new xe,e=1.25,n=new Ue(.4*e,.45*e,.8*e,10),i=new ft({color:2763322,roughness:.4,metalness:.8}),r=new z(n,i);r.position.y=1.2*e,r.castShadow=!0,t.add(r);const a=new Yt(.5*e,.4*e,.15*e),o=new ft({color:3816010,roughness:.35,metalness:.85}),c=new z(a,o);c.position.set(0,1.25*e,.25*e),t.add(c);const l=new Kn(.08*e,6),h=new ft({color:4482815,emissive:4482815,emissiveIntensity:2}),u=new z(l,h);u.position.set(0,1.25*e,.33*e),t.add(u);const d=new te(.22*e,10,8),f=new ft({color:3355460,roughness:.4,metalness:.8}),g=new z(d,f);g.position.set(-.5*e,1.5*e,0),g.scale.set(1,.7,.9),t.add(g);const M=new z(d,f);M.position.set(.5*e,1.5*e,0),M.scale.set(1,.7,.9),t.add(M);const m=new Ue(.2*e,.22*e,.35*e,10),p=new ft({color:3816010,roughness:.4,metalness:.75}),v=new z(m,p);v.position.y=1.85*e,t.add(v);const y=new Yt(.25*e,.03*e,.05*e),w=new ft({color:this.config.eyeColor,emissive:this.config.eyeColor,emissiveIntensity:3}),T=new z(y,w);T.position.set(0,1.85*e,.2*e),t.add(T),this.eye=T;const A=new De(.1*e,.35*e,8,10),R=new ft({color:2763322,roughness:.45,metalness:.75}),D=new z(A,R);D.position.set(-.5*e,1*e,0),D.rotation.z=.15,t.add(D);const x=new z(A,R);x.position.set(.5*e,1*e,0),x.rotation.z=-.15,t.add(x);const S=new De(.12*e,.45*e,8,10),P=new z(S,R);P.position.set(-.2*e,.35*e,0),t.add(P);const F=new z(S,R);F.position.set(.2*e,.35*e,0),t.add(F);const O=new Yt(.15*e,.1*e,.2*e),W=new ft({color:2763322,roughness:.5,metalness:.7}),X=new z(O,W);X.position.set(-.2*e,.05,.02),t.add(X);const H=new z(O,W);H.position.set(.2*e,.05,.02),t.add(H),this.body=t,this.mesh.add(t);const B=new xe,$=new Ue(.04*e,.04*e,1.1*e,8),ct=new ft({color:4864554,roughness:.7,metalness:.3}),it=new z($,ct);B.add(it);const dt=new Yt(.2*e,.15*e,.3*e),Lt=new ft({color:4473941,roughness:.3,metalness:.85}),Pt=new z(dt,Lt);Pt.position.y=.55*e,B.add(Pt);const ie=new ln(.06*e,.2*e,6),Jt=new z(ie,Lt);Jt.position.set(0,.55*e,-.2*e),Jt.rotation.x=Math.PI/2,B.add(Jt),B.position.set(.6*e,1.2*e,0),B.rotation.z=.2,this.weapon=B,this.weapon.castShadow=!0,this.mesh.add(B);const Y=new xe,j=new Yt(.1*e,.9*e,.5*e),_t=new ft({color:3816010,roughness:.35,metalness:.8}),pt=new z(j,_t);Y.add(pt);const st=new te(.1*e,10,8,0,Math.PI),yt=new z(st,_t);yt.position.set(.06*e,0,0),yt.rotation.y=Math.PI/2,Y.add(yt);const Kt=new Kn(.06*e,6),Bt=new ft({color:4482815,emissive:4482815,emissiveIntensity:1.5}),Zt=new z(Kt,Bt);Zt.position.set(.06*e,.2*e,0),Zt.rotation.y=Math.PI/2,Y.add(Zt),Y.position.set(-.55*e,1.1*e,.2*e),this.shield=Y,this.mesh.add(Y),this._createHealthBar(2.6)}_createHealthBar(t){this.healthBarGroup=new xe,this.healthBarGroup.position.y=t;const e=new nn(1,.08),n=new me({color:1118481,side:ge}),i=new z(e,n);this.healthBarGroup.add(i);const r=new nn(.98,.06),a=new me({color:13382451,side:ge});this.healthFill=new z(r,a),this.healthFill.position.z=.001,this.healthBarGroup.add(this.healthFill);const o=new nn(1,.04),c=new me({color:2236945,side:ge}),l=new z(o,c);l.position.y=-.08,this.healthBarGroup.add(l);const h=new nn(.98,.03),u=new me({color:16763904,side:ge});this.postureFill=new z(h,u),this.postureFill.position.set(0,-.08,.001),this.postureFill.scale.x=0,this.healthBarGroup.add(this.postureFill),this.mesh.add(this.healthBarGroup),this.healthBarGroup.visible=!1,this.breakIndicator=this._createBreakIndicator(),this.breakIndicator.visible=!1,this.mesh.add(this.breakIndicator)}_createBreakIndicator(){const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.fillStyle="#ffcc00",e.font="bold 32px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("BREAK!",64,32);const n=new eo(t),i=new vl({map:n,transparent:!0,depthTest:!1}),r=new gu(i);return r.scale.set(1.5,.75,1),r.position.y=3,r}update(t,e){if(this.state===Wt.DEAD)return;this.stateTimer+=t;const n=this.mesh.position.distanceTo(e.mesh.position),i=this.health/this.maxHealth;if(this.healthBarGroup.visible){const r=this.scene.getObjectByProperty("type","PerspectiveCamera");r&&this.healthBarGroup.lookAt(r.position)}switch(this.config.hasShield&&this.state===Wt.CHASE&&n<this.config.attackRange*1.5?(this.isBlocking=Math.random()<this.config.shieldBlockChance,this.shield&&(this.shield.position.z=this.isBlocking?.35:.2)):this.isBlocking=!1,this.state){case Wt.IDLE:this.patrolWait+=t,n<this.config.detectionRange?(this._changeState(Wt.CHASE),this.healthBarGroup.visible=!0):this.patrolWait>2&&(this.patrolWait=0,this._pickPatrolTarget(),this._changeState(Wt.PATROL));break;case Wt.PATROL:if(n<this.config.detectionRange){this._changeState(Wt.CHASE),this.healthBarGroup.visible=!0;break}this._moveToward(this.patrolTarget,this.config.moveSpeed*.5,t),this.mesh.position.distanceTo(this.patrolTarget)<.5&&this._changeState(Wt.IDLE);break;case Wt.CHASE:if(n>this.config.detectionRange*1.5){this._changeState(Wt.IDLE),this.healthBarGroup.visible=!1;break}if(i<.3&&!this.config.canChainAttacks&&Math.random()<.01){this._changeState(Wt.RETREAT);break}if(n<=this.config.attackRange){this._changeState(Wt.ATTACK);break}if(n<this.config.attackRange*2&&Math.random()<.005){this._changeState(Wt.CIRCLE);break}this._moveToward(e.mesh.position,this.config.moveSpeed,t),this._faceTarget(e.mesh.position,t);break;case Wt.CIRCLE:if(this.circleTimer+=t,this.circleTimer>1.5||n>this.config.detectionRange){this._changeState(Wt.CHASE);break}if(n<=this.config.attackRange){this._changeState(Wt.ATTACK);break}this._circleStrafe(e.mesh.position,t),this._faceTarget(e.mesh.position,t);break;case Wt.RETREAT:if(this.stateTimer>2||n>this.config.detectionRange){this._changeState(Wt.CHASE);break}const r=new E().subVectors(this.mesh.position,e.mesh.position);r.y=0,r.normalize();const a=this.mesh.position.clone().add(r.multiplyScalar(3));this._moveToward(a,this.config.moveSpeed*.8,t),this._faceTarget(e.mesh.position,t);break;case Wt.ATTACK:this._processAttack(t,e);break;case Wt.STAGGERED:this.body.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5),this.stateTimer>=1.5&&(this.posture=0,this.body.rotation.z=0,this.breakIndicator.visible=!1,this._updatePostureBar(),this._changeState(n<this.config.detectionRange?Wt.CHASE:Wt.IDLE));break}this.state!==Wt.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-8*t),this._updatePostureBar())}_circleStrafe(t,e){const n=new E().subVectors(t,this.mesh.position);n.y=0;const i=n.length();n.normalize();const r=new E(-n.z,0,n.x).multiplyScalar(this.circleDirection),a=this.config.attackRange*1.5,o=new E().copy(n).multiplyScalar((i-a)*.5),c=r.add(o).normalize();this.mesh.position.addScaledVector(c,this.config.moveSpeed*.7*e)}_processAttack(t,e){const n=this.config.attackWindup,i=n+this.config.attackDuration;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const r=this.stateTimer/n;this.weapon.rotation.z=-r*3,this.weapon2&&(this.weapon2.rotation.z=-r*3);return}if(this.stateTimer>=n&&this.stateTimer<i){if(!this.hitThisSwing){const a=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(a.multiplyScalar(1)).add(new E(0,1,0)),range:this.config.attackRange,damage:this.config.damage,postureDmg:this.config.postureDmg}}const r=(this.stateTimer-n)/this.config.attackDuration;this.weapon.rotation.z=Math.sin(r*Math.PI)*2,this.weapon2&&(this.weapon2.rotation.z=Math.sin(r*Math.PI)*2)}if(this.stateTimer>=i&&(this.activeAttack=null,this.weapon.rotation.z*=.9,this.weapon2&&(this.weapon2.rotation.z*=.9)),this.stateTimer>=this.config.attackCooldown){this.hitThisSwing=!1,this.activeAttack=null,this.weapon.rotation.z=0,this.weapon2&&(this.weapon2.rotation.z=0);const r=this.mesh.position.distanceTo(e.mesh.position);if(this.config.canChainAttacks&&r<=this.config.attackRange*1.3&&(this.chainAttackCount++,this.chainAttackCount<this.config.maxChainAttacks)){this._changeState(Wt.ATTACK);return}this.chainAttackCount=0,r<=this.config.attackRange?this._changeState(Wt.ATTACK):this._changeState(Wt.CHASE)}}takeDamage(t,e=0,n=null){if(this.state===Wt.DEAD)return"dead";this.isBlocking&&(t=Math.floor(t*.3),e=Math.floor(e*.5),console.log(`[COMBAT] ${this.config.name} blocked! Reduced damage.`),this.shield&&(this.shield.material.emissive.setHex(4473958),setTimeout(()=>this.shield.material.emissive.setHex(0),100))),this.state===Wt.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&(this.gm.audioManager.play("hitImpact",{position:this.mesh.position,volume:.6,variation:.15}),this.gm.audioManager.playEnemyGrunt(this.mesh.position));const i=Math.max(0,this.health/this.maxHealth);return this.healthFill.scale.x=i,this.healthFill.position.x=-(1-i)*.49*.5,this.healthBarGroup.visible=!0,this._updatePostureBar(),this.body.material.emissive.setHex(4456448),setTimeout(()=>this.body.material.emissive.setHex(0),100),this._applyHitRecoil(n,t),this.health<=0?(this._die(),"died"):this.posture>=this.maxPosture&&this.state!==Wt.STAGGERED?(this._triggerPostureBreak(),"staggered"):((this.state===Wt.IDLE||this.state===Wt.PATROL)&&this._changeState(Wt.CHASE),"hit")}_applyHitRecoil(t,e){let n;if(t)n=new E().subVectors(this.mesh.position,t),n.y=0,n.normalize();else{const d=this.body.rotation.y;n=new E(-Math.sin(d),0,-Math.cos(d))}const i=Math.min(.5,e*.015),r=this.mesh.position.clone(),a=r.clone().add(n.multiplyScalar(i)),o=this.body.rotation.z,c=Math.random()>.5?1:-1;this.body.rotation.z=o+c*.15;let l=0;const h=.12,u=()=>{l+=.016;const d=Math.min(1,l/h),f=1-Math.pow(1-d,3);this.mesh.position.lerpVectors(a,r,f),this.body.rotation.z=ue.lerp(o+c*.15,o,f),d<1&&requestAnimationFrame(u)};this.mesh.position.copy(a),requestAnimationFrame(u)}_triggerPostureBreak(){this._changeState(Wt.STAGGERED),this.breakIndicator.visible=!0,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.7}),this.body.material.emissive.setHex(16763904),this.eye.material.emissive.setHex(16763904),setTimeout(()=>{this.body.material.emissive.setHex(0),this.eye.material.emissive.setHex(this.config.eyeColor)},300),this.postureFill.material.color.setHex(16729088),setTimeout(()=>this.postureFill.material.color.setHex(16763904),300),console.log(`[COMBAT] ${this.config.name} POSTURE BROKEN!`)}_updatePostureBar(){const t=this.posture/this.maxPosture;this.postureFill.scale.x=t,this.postureFill.position.x=-(1-t)*.49*.5}_die(){this.state=Wt.DEAD,this.health=0,this.activeAttack=null,this.breakIndicator.visible=!1,this.body.rotation.x=Math.PI/2,this.body.position.y=.4,this.healthBarGroup.visible=!1,this.body.material.transparent=!0;const t=()=>{this.body.material.opacity-=.02,this.body.material.opacity>0?requestAnimationFrame(t):this.mesh.visible=!1};setTimeout(t,2e3)}respawn(){this.health=this.maxHealth,this.posture=0,this.state=Wt.IDLE,this.stateTimer=0,this.chainAttackCount=0,this.circleTimer=0,this.isBlocking=!1,this.mesh.position.copy(this.spawnPos),this.body.rotation.x=0,this.body.rotation.z=0,this.body.position.y=1*(this.config.hasShield?1.2:this.config.type==="BERSERKER"?.85:1),this.body.material.opacity=1,this.body.material.transparent=!1,this.mesh.visible=!0,this.healthBarGroup.visible=!1,this.breakIndicator.visible=!1,this.healthFill.scale.x=1,this.healthFill.position.x=0,this.postureFill.scale.x=0,this.postureFill.position.x=0,this.shield&&(this.shield.position.z=.2)}_moveToward(t,e,n){const i=new E().subVectors(t,this.mesh.position);i.y=0,i.length()>.5&&(i.normalize(),this.mesh.position.addScaledVector(i,e*n))}_faceTarget(t,e){const n=new E().subVectors(t,this.mesh.position);if(n.y=0,n.length()>.1){const i=Math.atan2(n.x,n.z);this.body.rotation.y=ue.lerp(this.body.rotation.y,i,5*e)}}_pickPatrolTarget(){const t=Math.random()*Math.PI*2,e=Math.random()*this.config.patrolRadius;this.patrolTarget.set(this.spawnPos.x+Math.cos(t)*e,0,this.spawnPos.z+Math.sin(t)*e)}_changeState(t){this.state!==t&&(this.state===Wt.ATTACK&&(this.activeAttack=null,this.hitThisSwing=!1),t===Wt.CIRCLE&&(this.circleTimer=0,this.circleDirection=Math.random()>.5?1:-1),this.state=t,this.stateTimer=0)}}const Ft={DORMANT:"dormant",AWAKENING:"awakening",IDLE:"idle",WALK:"walk",ATTACK:"attack",HEAVY_ATTACK:"heavy_attack",AOE_ATTACK:"aoe_attack",COMBO:"combo",STAGGERED:"staggered",PHASE_TRANSITION:"phase_transition",DEAD:"dead"};class gg{constructor(t,e,n){this.scene=t,this.gm=n,this.name="The Failed Experiment",this.maxHealth=500,this.health=this.maxHealth,this.maxPosture=150,this.posture=0,this.phase=1,this.state=Ft.DORMANT,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.comboCount=0,this.isActive=!1,this.isDead=!1,this.phaseConfigs={1:{moveSpeed:2,attackCooldown:2.5,attackWindup:1,damage:35,postureDmg:30,canCombo:!1,canAoE:!1},2:{moveSpeed:3.5,attackCooldown:1.5,attackWindup:.6,damage:45,postureDmg:40,canCombo:!0,maxCombo:3,canAoE:!0,aoeCooldown:8}},this.config=this.phaseConfigs[1],this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.detectionRange=15,this.attackRange=3.5,this.spawnPos=e.clone(),this.mesh=new xe,this.mesh.position.copy(e);const i=new xe,r=new te(.9,16,14),a=new ft({color:1709344,roughness:.75,metalness:.25}),o=new z(r,a);o.position.y=2,o.scale.set(1.1,1.3,1),o.castShadow=!0,i.add(o);const c=new te(.6,12,10),l=new ft({color:2234408,roughness:.8,metalness:.2}),h=new z(c,l);h.position.set(0,2.5,-.5),h.scale.set(1.2,.9,.8),i.add(h);for(let pt=0;pt<8;pt++){const st=new te(.12+Math.random()*.15,8,6),yt=new ft({color:2759205,roughness:.9,metalness:.1}),Kt=new z(st,yt),Bt=pt/8*Math.PI*2,Zt=1.5+Math.random()*1.5;Kt.position.set(Math.cos(Bt)*.7+(Math.random()-.5)*.3,Zt,Math.sin(Bt)*.5+(Math.random()-.5)*.3),i.add(Kt)}const u=new ft({color:9075306,roughness:.6,metalness:.2});for(let pt=0;pt<5;pt++){const st=new mi(.35-pt*.03,.03,6,16,Math.PI*.7),yt=new z(st,u);yt.position.set(0,1.5+pt*.15,.6),yt.rotation.x=Math.PI/2,yt.rotation.y=Math.PI,i.add(yt)}const d=new te(.5,12,10),f=new ft({color:1709349,roughness:.7,metalness:.3});this.leftShoulder=new z(d,f),this.leftShoulder.position.set(-.9,2.8,0),this.leftShoulder.scale.set(1.3,1,1.1),i.add(this.leftShoulder);const g=new te(.6,12,10);this.rightShoulder=new z(g,f),this.rightShoulder.position.set(1,2.9,0),this.rightShoulder.scale.set(1.1,.9,1),i.add(this.rightShoulder);const M=new De(.12,.7,8,12),m=new ft({color:2759202,roughness:.8,metalness:.15}),p=new z(M,m);p.position.set(-1.1,2,.2),p.rotation.z=.4,p.rotation.x=-.3,i.add(p);const v=new De(.2,.8,10,14),y=new z(v,m);y.position.set(1.3,2,.2),y.rotation.z=-.3,i.add(y);const w=new ft({color:1709344,roughness:.75,metalness:.2}),T=new De(.2,.9,10,12),A=new z(T,w);A.position.set(-.4,.6,0),A.rotation.z=.1,i.add(A);const R=new De(.22,.85,10,12),D=new z(R,w);D.position.set(.4,.6,0),D.rotation.z=-.1,i.add(D);const x=new ft({color:2236962,roughness:.5,metalness:.4});for(let pt of[-1,1])for(let st=0;st<3;st++){const yt=new ln(.04,.15,6),Kt=new z(yt,x);Kt.position.set(pt*.4+(st-1)*.08,.05,.2),Kt.rotation.x=Math.PI/3,i.add(Kt)}const S=new te(.4,14,12),P=new ft({color:1709088,roughness:.75,metalness:.2}),F=new z(S,P);F.position.set(0,3.4,.3),F.scale.set(1,1.1,.9),i.add(F);const O=new Yt(.35,.15,.25),W=new z(O,u);W.position.set(0,3.15,.45),W.rotation.x=.2,i.add(W),this.eyes=[];const X=[{x:-.15,y:3.5,z:.55,size:.09},{x:.15,y:3.5,z:.55,size:.09},{x:0,y:3.65,z:.5,size:.07},{x:-.32,y:3.35,z:.4,size:.05},{x:.32,y:3.35,z:.4,size:.05},{x:-.75,y:3,z:.25,size:.04},{x:-.85,y:2.85,z:.3,size:.03},{x:.1,y:2.7,z:-.3,size:.06}],H=new ft({color:16720384,emissive:16720384,emissiveIntensity:5});X.forEach(pt=>{const st=new te(pt.size,10,10),yt=new z(st,H.clone());yt.position.set(pt.x,pt.y,pt.z),this.eyes.push(yt),i.add(yt)}),this.body=i,this.mesh.add(i);const B=new xe,$=new Ue(.06,.08,1.8,10),ct=new ft({color:3811872,roughness:.8,metalness:.2}),it=new z($,ct);B.add(it);for(let pt=0;pt<4;pt++){const st=new mi(.09,.02,6,12),yt=new z(st,new ft({color:4860456,roughness:.9}));yt.position.y=-.6+pt*.4,yt.rotation.x=Math.PI/2,B.add(yt)}const dt=new Yt(.08,1.6,.5),Lt=new ft({color:2763306,roughness:.3,metalness:.9}),Pt=new z(dt,Lt);Pt.position.set(0,1.4,.15),Pt.rotation.z=.15,B.add(Pt);const ie=new Yt(.02,1.55,.02),Jt=new ft({color:16724736,emissive:16720384,emissiveIntensity:2}),Y=new z(ie,Jt);Y.position.set(0,1.4,.41),Y.rotation.z=.15,B.add(Y);for(let pt=0;pt<5;pt++){const st=new ln(.03,.12,5),yt=new z(st,Lt);yt.position.set(0,.8+pt*.25,.35),yt.rotation.x=Math.PI/3,B.add(yt)}B.position.set(1.5,1.8,0),B.rotation.z=.4,this.weapon=B,this.weapon.castShadow=!0,this.mesh.add(B);const j=new pi(.5,6,32),_t=new me({color:16729088,transparent:!0,opacity:0,side:ge});this.aoeIndicator=new z(j,_t),this.aoeIndicator.rotation.x=-Math.PI/2,this.aoeIndicator.position.y=.1,this.mesh.add(this.aoeIndicator),this.auraParticles=[];for(let pt=0;pt<6;pt++){const st=new te(.08,6,6),yt=new ft({color:2228258,emissive:1114129,emissiveIntensity:1,transparent:!0,opacity:.6}),Kt=new z(st,yt);Kt.userData.angle=pt/6*Math.PI*2,Kt.userData.yOffset=Math.random()*2,Kt.userData.radius=.8+Math.random()*.4,this.auraParticles.push(Kt),this.mesh.add(Kt)}this.mutatedArm=null,t.add(this.mesh),this._setDormant()}_setDormant(){this.eyes.forEach(t=>{t.material.emissiveIntensity=.5})}_awaken(){if(this.state!==Ft.DORMANT)return;this.isActive=!0,this._changeState(Ft.AWAKENING),this.gm?.audioManager&&(this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this.gm.audioManager.startBossMusic());let t=0;this.eyes.forEach((e,n)=>{setTimeout(()=>{e.material.emissiveIntensity=6,setTimeout(()=>{e.material.emissiveIntensity=4},200)},t),t+=150})}update(t,e){if(this.state===Ft.DEAD)return;this.stateTimer+=t,this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-t),this.aoeCooldownTimer=Math.max(0,this.aoeCooldownTimer-t);const n=this.mesh.position.distanceTo(e.mesh.position);if(this.state===Ft.DORMANT&&n<this.detectionRange){this._awaken();return}switch(this.state){case Ft.AWAKENING:this.stateTimer<2?this.body.position.y=2.2+Math.sin(this.stateTimer*Math.PI)*.3:this._changeState(Ft.IDLE);break;case Ft.IDLE:this._faceTarget(e.mesh.position,t),n<=this.attackRange&&this.attackCooldownTimer<=0?this._startAttack(e):n>this.attackRange&&this._changeState(Ft.WALK);break;case Ft.WALK:this._moveToward(e.mesh.position,t),this._faceTarget(e.mesh.position,t),this.body.position.y=2.2+Math.sin(this.stateTimer*8)*.1,n<=this.attackRange&&(this.attackCooldownTimer<=0?this._startAttack(e):this._changeState(Ft.IDLE));break;case Ft.ATTACK:this._processAttack(t,e,!1);break;case Ft.HEAVY_ATTACK:this._processAttack(t,e,!0);break;case Ft.AOE_ATTACK:this._processAoEAttack(t,e);break;case Ft.COMBO:this._processCombo(t,e);break;case Ft.STAGGERED:this.body.rotation.z=Math.sin(this.stateTimer*12)*.15*(1-this.stateTimer/2.5),this.stateTimer>=2.5&&(this.posture=0,this.body.rotation.z=0,this._changeState(Ft.IDLE));break;case Ft.PHASE_TRANSITION:this._processPhaseTransition(t);break}this.state!==Ft.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-3*t));const i=this.health/this.maxHealth,r=2+(1-i)*4,a=3+Math.sin(Date.now()*.001*r)*(1+(1-i)*2);if(this.eyes.forEach(o=>{o.material.emissiveIntensity=a}),this.auraParticles&&this.isActive){const o=Date.now()*.001;this.auraParticles.forEach((c,l)=>{const h=c.userData.angle+o*.5,u=c.userData.yOffset+Math.sin(o+l)*.3,d=c.userData.radius;c.position.set(Math.cos(h)*d,1.5+u,Math.sin(h)*d),c.material.opacity=.3+Math.sin(o*2+l)*.2})}}_startAttack(t){if(this.mesh.position.distanceTo(t.mesh.position),this.phase===2&&this.config.canAoE&&this.aoeCooldownTimer<=0&&Math.random()<.3){this._changeState(Ft.AOE_ATTACK);return}if(this.phase===2&&this.config.canCombo&&Math.random()<.4){this.comboCount=0,this._changeState(Ft.COMBO);return}Math.random()<.5?this._changeState(Ft.ATTACK):this._changeState(Ft.HEAVY_ATTACK)}_processAttack(t,e,n){const i=n?this.config.attackWindup*1.5:this.config.attackWindup,r=i+.3,a=r+(n?1:.6);if(this.stateTimer<i){this._faceTarget(e.mesh.position,t*2);const o=this.stateTimer/i;n?(this.weapon.rotation.z=-o*2.5,this.weapon.position.y=1.8+o*1.5):this.weapon.rotation.z=.3-o*1.5;return}if(this.stateTimer>=i&&this.stateTimer<r){if(!this.hitThisSwing){const c=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2)).add(new E(0,1.5,0)),range:this.attackRange,damage:n?this.config.damage*1.5:this.config.damage,postureDmg:n?this.config.postureDmg*1.5:this.config.postureDmg,isHeavy:n}}const o=(this.stateTimer-i)/.3;n?(this.weapon.rotation.z=-2.5+o*4,this.weapon.position.y=3.3-o*2.5):this.weapon.rotation.z=-1.2+o*2.5}this.stateTimer>=r&&(this.activeAttack=null,this.weapon.rotation.z*=.9,this.weapon.position.y=ue.lerp(this.weapon.position.y,1.8,.1)),this.stateTimer>=a&&(this.hitThisSwing=!1,this.activeAttack=null,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(Ft.IDLE))}_processCombo(t,e){const n=this.config.attackWindup*.7,i=n+.2,r=i+.3;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*3);const a=this.stateTimer/n,o=this.comboCount%2===0?1:-1;this.weapon.rotation.z=o*a*1.5;return}if(this.stateTimer>=n&&this.stateTimer<i){if(!this.hitThisSwing){const c=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2)).add(new E(0,1.5,0)),range:this.attackRange*.9,damage:this.config.damage*.7,postureDmg:this.config.postureDmg*.6,isCombo:!0}}const a=(this.stateTimer-n)/.2,o=this.comboCount%2===0?1:-1;this.weapon.rotation.z=o*(1.5-a*3)}if(this.stateTimer>=r){this.comboCount++,this.hitThisSwing=!1,this.activeAttack=null;const a=this.mesh.position.distanceTo(e.mesh.position);if(this.comboCount<this.config.maxCombo&&a<this.attackRange*1.2){this.stateTimer=0;const o=new E(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.mesh.position.addScaledVector(o,.5)}else this.comboCount=0,this.attackCooldownTimer=this.config.attackCooldown*1.5,this._resetWeapon(),this._changeState(Ft.IDLE)}}_processAoEAttack(t,e){if(this.stateTimer<1.5){const a=this.stateTimer/1.5;this.aoeIndicator.material.opacity=a*.6,this.aoeIndicator.scale.setScalar(1+a*.3),this.weapon.rotation.z=-a*3,this.weapon.position.y=1.8+a*2;const o=Math.floor(2228224+a*1114112);this.body.traverse(c=>{c.isMesh&&c.material&&c.material.emissive&&c.material.emissive.setHex(o)}),this.eyes.forEach(c=>{c.material.emissiveIntensity=4+a*6});return}this.stateTimer>=1.5&&this.stateTimer<1.8&&(this.hitThisSwing||(this.hitThisSwing=!0,this.aoeIndicator.material.opacity=1,this.aoeIndicator.material.color.setHex(16737792),this.mesh.position.distanceTo(e.mesh.position)<6&&!e.isInvincible&&(this.activeAttack={position:this.mesh.position.clone(),range:6,damage:this.config.damage*1.2,postureDmg:this.config.postureDmg,isAoE:!0}),this.weapon.rotation.z=.5,this.weapon.position.y=.5)),this.stateTimer>=1.8&&(this.activeAttack=null,this.aoeIndicator.material.opacity*=.9,this.body.traverse(a=>{a.isMesh&&a.material&&a.material.emissive&&a.material.emissive.setHex(0)})),this.stateTimer>=2.8&&(this.hitThisSwing=!1,this.aoeIndicator.material.opacity=0,this.aoeIndicator.material.color.setHex(16729088),this.aoeCooldownTimer=this.config.aoeCooldown,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(Ft.IDLE))}_processPhaseTransition(t){if(this.stateTimer<3){this.body.rotation.z=Math.sin(this.stateTimer*20)*.2,this.body.scale.y=1+Math.sin(this.stateTimer*10)*.1,this.eyes.forEach((n,i)=>{n.material.emissiveIntensity=5+Math.sin(this.stateTimer*15+i)*4}),this.stateTimer>1.5&&!this.mutatedArm&&this._createMutatedArm();return}this.body.rotation.z=0,this.body.scale.y=1,this.body.traverse(n=>{if(n.isMesh&&n.material&&n.material.color){const i=n.material.color.getHex(),r=i>>16&255,a=i>>8&255,o=i&255;n.material.color.setRGB(Math.min(1,(r+30)/255),Math.max(0,(a-10)/255),Math.min(1,(o+20)/255))}}),this.eyes.forEach(n=>{n.material.color.setHex(16729088),n.material.emissive.setHex(16729088)}),this._changeState(Ft.IDLE)}_createMutatedArm(){this.mutatedArm=new xe;const t=new De(.15,1,10,14),e=new ft({color:3806504,roughness:.85,metalness:.15}),n=new z(t,e);n.position.set(0,0,0),n.rotation.z=.6,n.rotation.x=.4,this.mutatedArm.add(n);const i=new ft({color:2236962,roughness:.4,metalness:.7});for(let o=0;o<4;o++){const c=new ln(.03,.2,6),l=new z(c,i);l.position.set(-.4+(o-1.5)*.08,.6,.7),l.rotation.x=-.8,this.mutatedArm.add(l)}for(let o=0;o<3;o++){const c=new te(.06+Math.random()*.04,6,6),l=new ft({color:4859960,roughness:.9}),h=new z(c,l);h.position.set(-.2+o*.15,.2+o*.15,.35),this.mutatedArm.add(h)}this.mutatedArm.position.set(-1,2.6,.2),this.mesh.add(this.mutatedArm);const r=new ft({color:16729088,emissive:16729088,emissiveIntensity:5});[{x:-1.2,y:2.8,z:.5,size:.06},{x:-1,y:2.4,z:.6,size:.05},{x:.5,y:3,z:.35,size:.04}].forEach(o=>{const c=new z(new te(o.size,8,8),r.clone());c.position.set(o.x,o.y,o.z),this.eyes.push(c),this.mesh.add(c)})}takeDamage(t,e=0,n=null){return this.state===Ft.DEAD||this.state===Ft.PHASE_TRANSITION||this.state===Ft.DORMANT?"immune":(this.state===Ft.AWAKENING&&(t=Math.floor(t*.5),e=Math.floor(e*.5)),this.state===Ft.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.7}),this.body.traverse(i=>{i.isMesh&&i.material&&i.material.emissive&&i.material.emissive.setHex(4456448)}),setTimeout(()=>{this.state!==Ft.AOE_ATTACK&&this.body.traverse(i=>{i.isMesh&&i.material&&i.material.emissive&&i.material.emissive.setHex(0)})},100),this._applyHitRecoil(n,t),this.health<=0?(this._die(),"died"):this.phase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==Ft.STAGGERED?(this._triggerPostureBreak(),"staggered"):"hit")}_applyHitRecoil(t,e){let n;if(t)n=new E().subVectors(this.mesh.position,t),n.y=0,n.normalize();else{const d=this.body.rotation.y;n=new E(-Math.sin(d),0,-Math.cos(d))}const i=Math.min(.2,e*.005),r=this.mesh.position.clone(),a=r.clone().add(n.multiplyScalar(i)),o=this.body.rotation.z||0,c=Math.random()>.5?1:-1;this.body.rotation.z=o+c*.08;let l=0;const h=.15,u=()=>{l+=.016;const d=Math.min(1,l/h),f=1-Math.pow(1-d,3);this.mesh.position.lerpVectors(a,r,f),this.body.rotation.z=ue.lerp(o+c*.08,o,f),d<1&&requestAnimationFrame(u)};this.mesh.position.copy(a),requestAnimationFrame(u)}_triggerPostureBreak(){this._changeState(Ft.STAGGERED),this.activeAttack=null,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.9}),this.body.traverse(t=>{t.isMesh&&t.material&&t.material.emissive&&t.material.emissive.setHex(16763904)}),this.eyes.forEach(t=>{t.material.emissive.setHex(16763904)}),setTimeout(()=>{this.state===Ft.STAGGERED&&(this.body.traverse(t=>{t.isMesh&&t.material&&t.material.emissive&&t.material.emissive.setHex(0)}),this.eyes.forEach(t=>{t.material.emissive.setHex(this.phase===2?16729088:16720384)}))},300),console.log(`[BOSS] ${this.name} POSTURE BROKEN!`)}_enterPhase2(){this.phase=2,this.config=this.phaseConfigs[2],this.posture=0,this.activeAttack=null,this._changeState(Ft.PHASE_TRANSITION),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1}),console.log(`[BOSS] ${this.name} enters PHASE 2!`)}_die(){this.state=Ft.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.isActive=!1,this.gm?.audioManager&&this.gm.audioManager.startAmbientMusic(),console.log(`[BOSS] ${this.name} DEFEATED!`);let t=0;const e=()=>{t+=.02,this.body.position.y=-t*1.5,this.body.rotation.x=t*.5,this.eyes.forEach(n=>{n.material.emissiveIntensity*=.95}),t<1?requestAnimationFrame(e):this._fadeOut()};e(),this.gm&&this.gm.collectRemnants(2e3)}_fadeOut(){let t=1;const e=()=>{t-=.01,this.body.traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=!0,n.material.opacity=t)}),this.weapon.traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=!0,n.material.opacity=t)}),this.eyes.forEach(n=>{n.material.transparent=!0,n.material.opacity=t}),this.auraParticles&&this.auraParticles.forEach(n=>{n.material.opacity=t*.6}),t>0?requestAnimationFrame(e):this.mesh.visible=!1};setTimeout(e,3e3)}_moveToward(t,e){const n=new E().subVectors(t,this.mesh.position);n.y=0,n.length()>.5&&(n.normalize(),this.mesh.position.addScaledVector(n,this.config.moveSpeed*e))}_faceTarget(t,e){const n=new E().subVectors(t,this.mesh.position);if(n.y=0,n.length()>.1){const i=Math.atan2(n.x,n.z);this.body.rotation.y=ue.lerp(this.body.rotation.y,i,5*e)}}_resetWeapon(){this.weapon.rotation.z=.4,this.weapon.position.set(1.5,1.8,0)}_changeState(t){this.state!==t&&((this.state===Ft.ATTACK||this.state===Ft.HEAVY_ATTACK||this.state===Ft.AOE_ATTACK||this.state===Ft.COMBO)&&(this.activeAttack=null,this.hitThisSwing=!1),this.state=t,this.stateTimer=0)}respawn(){for(this.health=this.maxHealth,this.posture=0,this.phase=1,this.config=this.phaseConfigs[1],this.state=Ft.DORMANT,this.stateTimer=0,this.isActive=!1,this.isDead=!1,this.comboCount=0,this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.mesh.position.copy(this.spawnPos),this.mesh.visible=!0,this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.body.scale.set(1,1,1),this.body.traverse(t=>{t.isMesh&&t.material&&(t.material.opacity=1,t.material.transparent=!1,t.material.emissive&&t.material.emissive.setHex(0))}),this._resetWeapon(),this.weapon.traverse(t=>{t.isMesh&&t.material&&(t.material.opacity=1,t.material.transparent=!1)});this.eyes.length>8;){const t=this.eyes.pop();t&&this.mesh.remove(t)}this.eyes.forEach(t=>{t.material.opacity=1,t.material.transparent=!1,t.material.color.setHex(16720384),t.material.emissive.setHex(16720384)}),this.mutatedArm&&(this.mesh.remove(this.mutatedArm),this.mutatedArm=null),this.aoeIndicator.material.opacity=0,this._setDormant()}}class _g{constructor(t,e,n,i=null,r=null){this.scene=t,this.gm=e,this.player=n,this.world=i,this.particleManager=r,this.enemies=[],this.boss=null,this._spawnEnemies(),this._spawnBoss()}_spawnEnemies(){(this.world?.getEnemySpawns()||[{pos:new E(0,0,-6),type:"HOLLOW_SOLDIER"},{pos:new E(-4,0,-15),type:"BERSERKER"},{pos:new E(5,0,-22),type:"SENTINEL"}]).forEach((e,n)=>{const i=_r[e.type]||_r.HOLLOW_SOLDIER,r=new mg(this.scene,e.pos,{type:e.type,name:`${i.name} ${n+1}`},this.gm);this.enemies.push(r)})}_spawnBoss(){const t=this.world?.getBossPosition()||new E(0,0,-95);this.boss=new gg(this.scene,t,this.gm);const e=new pi(8,12,32),n=new me({color:3346705,transparent:!0,opacity:.3,side:ge}),i=new z(e,n);i.rotation.x=-Math.PI/2,i.position.copy(t),i.position.y=.02,this.scene.add(i)}update(t,e){for(let n=this.enemies.length-1;n>=0;n--){const i=this.enemies[n];if(i.update(t,e),e.activeAttack&&!e.hitThisSwing){const r=i.mesh.position.x-e.activeAttack.position.x,a=i.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(r*r+a*a)<e.activeAttack.range&&i.health>0){const c=i.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,console.log(`[COMBAT] Player hit ${i.config.name} for ${e.activeAttack.damage} damage! Result: ${c}`),e.activeAttack.isHeavy?this.gm.hitstopHeavy():this.gm.hitstopLight(),this.gm.cameraController&&(e.activeAttack.isHeavy?this.gm.cameraController.shakeMedium():this.gm.cameraController.shakeLight()),this.particleManager){const l=i.mesh.position.clone(),h=i.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(l,8,e.activeAttack.isHeavy),this.particleManager.spawnBlood(l,h,Math.ceil(e.activeAttack.damage/5)),c==="posture_broken"&&this.particleManager.spawnPostureBreak(l)}c==="died"&&(this.gm.addRemnant(i.config.remnantDrop),console.log(`[COMBAT] ${i.config.name} died! Dropped ${i.config.remnantDrop} remnant`),this.particleManager&&this.particleManager.spawnDeathBurst(i.mesh.position.clone()),setTimeout(()=>{i.respawn()},8e3))}}if(i.activeAttack&&!i.hitThisSwing){const r=e.mesh.position.x-i.activeAttack.position.x,a=e.mesh.position.z-i.activeAttack.position.z;if(Math.sqrt(r*r+a*a)<i.activeAttack.range&&!e.isInvincible){const c=this.gm.takeDamage(i.activeAttack.damage,"physical",i.activeAttack.postureDmg,e.isBlocking);if(i.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const l=i.activeAttack.damage/30;this.gm.hud.flashDamage(Math.min(1,l))}if(this.gm.cameraController&&this.gm.cameraController.shakeHeavy(),console.log(`[COMBAT] ${i.config.name} hit player for ${i.activeAttack.damage} damage! Result: ${c}, HP: ${this.gm.health}/${this.gm.maxHealth}`),this.particleManager){const l=e.mesh.position.clone(),h=e.mesh.position.clone().sub(i.mesh.position).normalize();e.isBlocking&&c!=="guard_broken"?this.particleManager.spawnBlockSparks(l):(this.particleManager.spawnHitSparks(l,6,!1),this.particleManager.spawnBlood(l,h,Math.ceil(i.activeAttack.damage/5))),(c==="guard_broken"||c==="posture_broken")&&this.particleManager.spawnPostureBreak(l)}c==="died"?console.log("[COMBAT] Player died!"):(c==="guard_broken"||c==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}if(this.boss){if(this.boss.update(t,e),e.activeAttack&&!e.hitThisSwing&&!this.boss.isDead){const n=this.boss.mesh.position.x-e.activeAttack.position.x,i=this.boss.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(n*n+i*i)<e.activeAttack.range+1&&this.boss.health>0){const a=this.boss.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,console.log(`[BOSS] Player hit ${this.boss.name} for ${e.activeAttack.damage} damage! Result: ${a}`),this.gm.hitstopHeavy(),this.gm.cameraController&&this.gm.cameraController.shakeMedium(),this.particleManager){const o=this.boss.mesh.position.clone(),c=this.boss.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(o,12,e.activeAttack.isHeavy),this.particleManager.spawnBlood(o,c,Math.ceil(e.activeAttack.damage/3)),a==="posture_broken"&&this.particleManager.spawnPostureBreak(o),a==="died"&&(this.particleManager.spawnDeathBurst(o),this.particleManager.spawnDeathBurst(o))}}}if(this.boss.activeAttack&&!this.boss.hitThisSwing){const n=e.mesh.position.x-this.boss.activeAttack.position.x,i=e.mesh.position.z-this.boss.activeAttack.position.z;if(Math.sqrt(n*n+i*i)<this.boss.activeAttack.range&&!e.isInvincible){const a=this.gm.takeDamage(this.boss.activeAttack.damage,"physical",this.boss.activeAttack.postureDmg,e.isBlocking);if(this.boss.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const o=this.boss.activeAttack.damage/25;this.gm.hud.flashDamage(Math.min(1,o))}if(this.gm.cameraController&&this.gm.cameraController.shake(.7,.25),console.log(`[BOSS] ${this.boss.name} hit player for ${this.boss.activeAttack.damage} damage! Result: ${a}`),this.particleManager){const o=e.mesh.position.clone(),c=e.mesh.position.clone().sub(this.boss.mesh.position).normalize();e.isBlocking&&a!=="guard_broken"?(this.particleManager.spawnBlockSparks(o),this.particleManager.spawnBlockSparks(o)):(this.particleManager.spawnHitSparks(o,10,!0),this.particleManager.spawnBlood(o,c,Math.ceil(this.boss.activeAttack.damage/4))),(a==="guard_broken"||a==="posture_broken")&&this.particleManager.spawnPostureBreak(o)}a==="died"?console.log("[BOSS] Player died to boss!"):(a==="guard_broken"||a==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}}resetAll(){this.enemies.forEach(t=>t.respawn()),this.boss&&this.boss.respawn(),console.log("[COMBAT] All enemies and boss reset")}getBoss(){return this.boss}}class xg{constructor(t){this.scene=t,this.colliders=[],this.doors=[],this.hiddenWalls=[],this.bonfirePosition=new E(0,0,5),this._createSkybox(),this._createCathedral(),this._createLighting(),this._createEnvironmentProps()}_createSkybox(){const t=new te(180,32,32),e=new Le({uniforms:{topColor:{value:new Ot(1712192)},midColor:{value:new Ot(4859992)},botColor:{value:new Ot(6963232)},starDensity:{value:.003}},vertexShader:`
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
      `,side:He}),n=new z(t,e);this.scene.add(n);const i=new Kn(8,32),r=new me({color:15658717,transparent:!0,opacity:.8}),a=new z(i,r);a.position.set(-50,80,-100),a.lookAt(0,0,0),this.scene.add(a);const o=new Kn(15,32),c=new me({color:11184844,transparent:!0,opacity:.15}),l=new z(o,c);l.position.copy(a.position),l.lookAt(0,0,0),this.scene.add(l)}_createEnvironmentProps(){[[-12,8],[14,6],[-10,-5],[12,-8],[-15,-15],[16,-20],[-14,-35],[15,-45]].forEach(([n,i])=>{this._createDeadTree(n,i)}),[[-11,0],[-13,-2],[13,2],[11,-3],[-16,-10],[14,-12],[-15,-40],[17,-38]].forEach(([n,i])=>{this._createGravestone(n,i)}),this._scatterGrass(0,-40,35,90,200),this._createFloorRunes(),this._createGlowingMushrooms(),this._createMagicalCrystals()}_createGlowingMushrooms(){[{pos:[-11,0,7],color:4521898,scale:.8},{pos:[13,0,5],color:6750088,scale:.6},{pos:[-12,0,-6],color:4521898,scale:.7},{pos:[11,0,-4],color:8978363,scale:.5},{pos:[-8,0,-18],color:4513279,scale:.9},{pos:[8,0,-18],color:4513279,scale:.7},{pos:[-8,0,-38],color:6728447,scale:.6},{pos:[8,0,-38],color:6728447,scale:.8},{pos:[-5,0,-68],color:11167487,scale:.9},{pos:[5,0,-72],color:11167487,scale:.7},{pos:[-3,0,-80],color:13404415,scale:.6},{pos:[4,0,-78],color:13404415,scale:.5}].forEach(({pos:e,color:n,scale:i})=>{const r=new xe;r.position.set(...e),r.scale.setScalar(i);const a=new Ue(.08,.12,.3,8),o=new ft({color:13421738,roughness:.8,emissive:n,emissiveIntensity:.2}),c=new z(a,o);c.position.y=.15,r.add(c);const l=new te(.2,16,8,0,Math.PI*2,0,Math.PI/2),h=new ft({color:n,emissive:n,emissiveIntensity:.8,roughness:.3,transparent:!0,opacity:.9}),u=new z(l,h);u.position.y=.3,r.add(u);const d=new Un(n,.6,4);d.position.y=.4,r.add(d),this.scene.add(r)})}_createMagicalCrystals(){[{pos:[-4,0,-15],color:6719743,scale:1.2,rot:.2},{pos:[4,0,-15],color:6719743,scale:1,rot:-.3},{pos:[-4,0,-30],color:8939263,scale:.9,rot:.15},{pos:[4,0,-30],color:8939263,scale:1.1,rot:-.2},{pos:[-3,0,-52],color:16755268,scale:1.3,rot:.1},{pos:[3,0,-52],color:16755268,scale:1.1,rot:-.1},{pos:[-6,0,-88],color:16729190,scale:1.5,rot:.25},{pos:[6,0,-88],color:16729190,scale:1.4,rot:-.2},{pos:[-6,0,-102],color:16737860,scale:1.2,rot:.3},{pos:[6,0,-102],color:16737860,scale:1.3,rot:-.25}].forEach(({pos:e,color:n,scale:i,rot:r})=>{const a=new xe;a.position.set(...e),a.scale.setScalar(i),a.rotation.z=r;const o=new ln(.15,.8,6),c=new ft({color:n,emissive:n,emissiveIntensity:1,roughness:.1,metalness:.3,transparent:!0,opacity:.85}),l=new z(o,c);l.position.y=.4,a.add(l);for(let u=0;u<3;u++){const d=new ln(.08,.4,5),f=new z(d,c),g=u/3*Math.PI*2;f.position.set(Math.cos(g)*.15,.2,Math.sin(g)*.15),f.rotation.z=Math.random()*.4-.2,f.rotation.x=Math.random()*.3,a.add(f)}const h=new Un(n,1.2,6);h.position.y=.5,a.add(h),this.scene.add(a)})}_createDeadTree(t,e){const n=new xe;n.position.set(t,0,e),n.rotation.y=Math.random()*Math.PI*2;const i=new ft({color:2759184,roughness:.95}),r=new Ue(.2,.4,4,6),a=new z(r,i);a.position.y=2,a.rotation.z=(Math.random()-.5)*.2,a.castShadow=!0,n.add(a);for(let o=0;o<4;o++){const c=new Ue(.03,.12,2,4),l=new z(c,i);l.position.set(0,3+o*.3,0),l.rotation.z=.3+Math.random()*.8,l.rotation.y=o*Math.PI/2+Math.random()*.5,l.castShadow=!0,n.add(l)}this.scene.add(n)}_createGravestone(t,e){const n=new ft({color:3816e3,roughness:.9}),i=Math.floor(Math.random()*3);let r;i===0?r=new Yt(.6,1.2,.15):i===1?r=new Yt(.5,1,.12):r=new Yt(.15,1.4,.1);const a=new z(r,n);if(a.position.set(t,i===2?.7:.5,e),a.rotation.y=Math.random()*.4-.2,a.rotation.x=Math.random()*.1-.05,a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a),i===2){const o=new Yt(.5,.1,.08),c=new z(o,n);c.position.set(t,1,e),c.rotation.y=a.rotation.y,c.castShadow=!0,this.scene.add(c)}}_scatterGrass(t,e,n,i,r){const a=new ft({color:2767392,roughness:.9,side:ge});for(let o=0;o<r;o++){const c=t+(Math.random()-.5)*n,l=e+(Math.random()-.5)*i,h=new nn(.1,.3+Math.random()*.3),u=new z(h,a);u.position.set(c,.15,l),u.rotation.y=Math.random()*Math.PI,u.rotation.x=-.1,this.scene.add(u)}}_createFloorRunes(){[{pos:[0,.02,-25],size:4,color:6710988},{pos:[0,.02,-55],size:3,color:13404211},{pos:[0,.02,-95],size:5,color:13382451},{pos:[0,.02,0],size:3,color:4500104},{pos:[0,.02,-42],size:2.5,color:8939178},{pos:[0,.02,-72],size:2.5,color:5605580}].forEach(({pos:e,size:n,color:i})=>{const r=new pi(n-.1,n,32),a=new me({color:i,transparent:!0,opacity:.6,side:ge}),o=new z(r,a);o.rotation.x=-Math.PI/2,o.position.set(...e),this.scene.add(o);const c=new pi(n*.4,n*.5,6),l=new z(c,a);l.rotation.x=-Math.PI/2,l.position.set(...e),this.scene.add(l);const h=new Kn(n*.3,16),u=new me({color:i,transparent:!0,opacity:.3,side:ge}),d=new z(h,u);d.rotation.x=-Math.PI/2,d.position.set(e[0],e[1]+.01,e[2]),this.scene.add(d);const f=new Un(i,1.5,n*3);f.position.set(e[0],e[1]+.5,e[2]),this.scene.add(f)})}_createCathedral(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#3a3840",e.fillRect(0,0,256,256);for(let v=0;v<2e3;v++){const y=Math.random()*256,w=Math.random()*256,T=Math.random()*3+1,A=Math.floor(Math.random()*30);e.fillStyle=`rgb(${50+A}, ${48+A}, ${55+A})`,e.fillRect(y,w,T,T)}e.strokeStyle="#252228",e.lineWidth=2;for(let v=0;v<256;v+=32)e.beginPath(),e.moveTo(0,v),e.lineTo(256,v),e.stroke();for(let v=0;v<256;v+=64)for(let y=0;y<256;y+=64)e.beginPath(),e.moveTo(v+(y%64===0?0:32),y),e.lineTo(v+(y%64===0?0:32),y+32),e.stroke();const n=new eo(t);n.wrapS=li,n.wrapT=li,n.repeat.set(2,2);const i=new ft({color:8025472,roughness:.75,metalness:.1,map:n}),r=new ft({color:5920101,roughness:.8,metalness:.05,map:n}),a=document.createElement("canvas");a.width=256,a.height=256;const o=a.getContext("2d");o.fillStyle="#2a2830",o.fillRect(0,0,256,256);for(let v=0;v<25;v++){const y=v%5*52+Math.random()*10,w=Math.floor(v/5)*52+Math.random()*10,T=40+Math.random()*10,A=40+Math.random()*10,R=Math.floor(Math.random()*20);o.fillStyle=`rgb(${38+R}, ${36+R}, ${42+R})`,o.beginPath(),o.roundRect(y,w,T,A,5),o.fill(),o.strokeStyle="#1a1820",o.lineWidth=2,o.stroke()}const c=new eo(a);c.wrapS=li,c.wrapT=li,c.repeat.set(4,4);const l=new ft({color:6973552,roughness:.85,metalness:.05,map:c});this._createFloorSection(0,0,16,16,l),this._createBonfire(this.bonfirePosition),this._createWall(-8,2,-8,1,6,16,i),this._createWall(8,2,-8,1,6,16,i),this._createWall(0,2,0,16,6,1,i),this._createFloorSection(0,-30,20,40,l),[[-6,-12],[6,-12],[-6,-22],[6,-22],[-6,-32],[6,-32],[-6,-42],[6,-42]].forEach(([v,y])=>{this._createPillar(v,y,i)}),this._createWall(-10,4,-30,1,10,44,i),this._createWall(10,4,-30,1,10,44,i),this._createFloorSection(-18,-25,12,14,l),this._createWall(-10,4,-18,1,10,6,i),this._createWall(-10,4,-38,1,10,10,i),this._createWall(-24,3,-25,1,8,14,i),this._createWall(-18,3,-32,12,8,1,i),this._createWall(-18,3,-18,12,8,1,i);const u=new Yt(3,1.2,1.5),d=new ft({color:3355456,roughness:.7}),f=new z(u,d);f.position.set(-21,.6,-25),f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f),this._createFloorSection(18,-25,12,14,l),this._createWall(10,4,-18,1,10,6,i),this._createWall(10,4,-38,1,10,10,i),this._createWall(24,3,-25,1,8,14,i),this._createWall(18,3,-32,12,8,1,i),this._createWall(18,3,-18,12,8,1,i),this._createHiddenWall(21,3,-32,4,6,.5,i,"chapel-secret"),this._createFloorSection(21,-38,6,8,l),this._createWall(18,3,-42,6,6,1,i),this._createWall(24,3,-38,1,6,8,i),this._createFloorSection(0,-55,16,10,l),this._createWall(-8,5,-55,1,12,10,i),this._createWall(8,5,-55,1,12,10,i),this._createWall(0,5,-60,16,12,1,i);const g=new Yt(6,1.5,2),M=new z(g,d);M.position.set(0,.75,-58),M.castShadow=!0,M.receiveShadow=!0,this.scene.add(M);for(let v=-2;v<=2;v++)this._createCandle(v*1.2,-57.5);this._createLockedDoor(0,2.5,-50.5,3,5,.3,"crypt-key","Crypt Door"),this._createFloorSection(0,-70,20,20,r),[[-6,-65],[6,-65],[-6,-75],[6,-75]].forEach(([v,y])=>{this._createPillar(v,y,r,4)}),this._createWall(-10,3,-70,1,6,20,r),this._createWall(10,3,-70,1,6,20,r),this._createWall(0,3,-80,20,6,1,r);for(let v=0;v<6;v++){const y=new Yt(1.8,.8,3),w=new ft({color:2236968}),T=new z(y,w),A=v%2===0?-1:1;T.position.set(A*7,.4,-62-Math.floor(v/2)*6),T.castShadow=!0,T.receiveShadow=!0,this.scene.add(T)}this._createFloorSection(0,-95,24,16,r),this._createWall(-12,4,-95,1,10,16,r),this._createWall(12,4,-95,1,10,16,r),this._createWall(0,4,-103,24,10,1,r),[[-8,-88],[8,-88],[-8,-102],[8,-102]].forEach(([v,y])=>{this._createPillar(v,y,r,6)}),this._scatterDebris(0,-30,40,60,30,i)}_createFloorSection(t,e,n,i,r){const a=new nn(n,i,Math.floor(n),Math.floor(i)),o=a.attributes.position;for(let l=0;l<o.count;l++){const h=o.getX(l),u=o.getY(l);o.setZ(l,Math.sin(h*.3)*Math.cos(u*.3)*.05)}a.computeVertexNormals();const c=new z(a,r);c.rotation.x=-Math.PI/2,c.position.set(t,0,e),c.receiveShadow=!0,this.scene.add(c)}_createWall(t,e,n,i,r,a,o){const c=new Yt(i,r,a),l=new z(c,o);l.position.set(t,e,n),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l),this.colliders.push({type:"box",mesh:l,bounds:new qn().setFromObject(l)})}_createPillar(t,e,n,i=8){const r=new Ue(.8,.9,.5,8),a=new z(r,n);a.position.set(t,.25,e),a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a);const o=new Ue(.5,.6,i-1,8),c=new z(o,n);c.position.set(t,i/2,e),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const l=new Ue(.9,.5,.6,8),h=new z(l,n);h.position.set(t,i-.3,e),h.castShadow=!0,h.receiveShadow=!0,this.scene.add(h),this.colliders.push({type:"cylinder",position:new E(t,i/2,e),radius:.6})}_createCandle(t,e){const n=new Ue(.05,.05,.3,6),i=new ft({color:15658700}),r=new z(n,i);r.position.set(t,1.65,e),this.scene.add(r);const a=new Un(16737826,.5,4);a.position.set(t,1.9,e),this.scene.add(a);const o=.4,c=()=>{requestAnimationFrame(c),a.intensity=o+Math.sin(Date.now()*.015+t*100)*.15+Math.random()*.1};c()}_createHiddenWall(t,e,n,i,r,a,o,c){const l=new Yt(i,r,a),h=o.clone(),u=new z(l,h);return u.position.set(t,e,n),u.castShadow=!0,u.receiveShadow=!0,u.userData.isHidden=!0,u.userData.hiddenId=c,this.scene.add(u),this.hiddenWalls.push({id:c,mesh:u,revealed:!1,bounds:new qn().setFromObject(u)}),u}_createLockedDoor(t,e,n,i,r,a,o,c){const l=new Yt(i,r,a),h=new ft({color:3811866,roughness:.7,metalness:.2}),u=new z(l,h);u.position.set(t,e,n),u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u);const d=new Yt(i+.4,r+.4,a+.1),f=new ft({color:2236968}),g=new z(d,f);g.position.set(t,e,n-.05),this.scene.add(g);const M=new te(.15,8,8),m=new ft({color:16720418,emissive:6684672,emissiveIntensity:.5}),p=new z(M,m);p.position.set(t,e+.5,n+.2),this.scene.add(p);const v={id:o,name:c,mesh:u,lock:p,isOpen:!1,bounds:new qn().setFromObject(u)};return this.doors.push(v),this.colliders.push({type:"door",door:v,bounds:v.bounds}),v}tryOpenDoor(t,e){const n=this.doors.find(i=>i.id===t);if(!n||n.isOpen)return!1;if(e&&e.hasKey(t)){n.isOpen=!0,n.mesh.visible=!1,n.lock.material.color.setHex(2293538),n.lock.material.emissive.setHex(26112);const i=this.colliders.findIndex(r=>r.door===n);return i>=0&&this.colliders.splice(i,1),console.log(`[DOOR] ${n.name} opened!`),!0}return!1}getNearbyDoor(t,e=2.5){for(const n of this.doors){if(n.isOpen)continue;if(t.distanceTo(n.mesh.position)<e)return n}return null}revealHiddenWall(t){const e=this.hiddenWalls.find(a=>a.id===t);if(!e||e.revealed)return!1;e.revealed=!0;const n=e.mesh.material;n.transparent=!0;let i=1;const r=()=>{i-=.05,n.opacity=i,i>0?requestAnimationFrame(r):this.scene.remove(e.mesh)};return r(),console.log(`[SECRET] Hidden wall revealed: ${t}`),!0}checkHiddenWallHit(t,e){for(const n of this.hiddenWalls){if(n.revealed)continue;if(t.distanceTo(n.mesh.position)<e+2)return n}return null}_scatterDebris(t,e,n,i,r,a){for(let o=0;o<r;o++){const c=.15+Math.random()*.4,l=new Yt(c,c*.5,c),h=new z(l,a);h.position.set(t+(Math.random()-.5)*n,c*.25,e+(Math.random()-.5)*i),h.rotation.y=Math.random()*Math.PI,h.rotation.x=(Math.random()-.5)*.3,h.castShadow=!0,this.scene.add(h)}}_createLighting(){const t=new sd(11184861,8943462,8);this.scene.add(t);const e=new od(8947899,6);this.scene.add(e);const n=new is(13421806,4);n.position.set(0,100,0),this.scene.add(n);const i=new is(8947882,3);i.position.set(0,50,0),i.target.position.set(0,0,-50),this.scene.add(i),this.scene.add(i.target);const r=new is(11189230,3);r.position.set(-50,80,-100),r.castShadow=!0,r.shadow.mapSize.set(4096,4096),r.shadow.camera.near=10,r.shadow.camera.far=200,r.shadow.camera.left=-60,r.shadow.camera.right=60,r.shadow.camera.top=60,r.shadow.camera.bottom=-60,r.shadow.bias=-1e-4,this.scene.add(r);const a=new is(13404262,.8);a.position.set(30,20,50),this.scene.add(a);const o=new is(10066363,.6);o.position.set(0,30,100),this.scene.add(o),[{pos:[0,3,5],color:16737826,intensity:4,dist:20},{pos:[0,1,5],color:16729088,intensity:3,dist:12},{pos:[-6,5,-12],color:6719726,intensity:2.5,dist:18},{pos:[6,5,-12],color:6719726,intensity:2.5,dist:18},{pos:[-6,5,-32],color:5601245,intensity:2,dist:18},{pos:[6,5,-32],color:5601245,intensity:2,dist:18},{pos:[0,4,-22],color:6719692,intensity:2,dist:20},{pos:[-21,3,-25],color:14500932,intensity:3,dist:15},{pos:[-18,6,-25],color:11154227,intensity:1.5,dist:20},{pos:[21,3,-25],color:6737015,intensity:3,dist:15},{pos:[18,6,-25],color:4500053,intensity:1.5,dist:20},{pos:[21,2,-40],color:16768358,intensity:3.5,dist:12},{pos:[0,4,-58],color:16764006,intensity:4,dist:20},{pos:[-2,2,-57],color:16755268,intensity:2,dist:8},{pos:[2,2,-57],color:16755268,intensity:2,dist:8},{pos:[-6,2,-65],color:4482764,intensity:2,dist:15},{pos:[6,2,-75],color:4482764,intensity:2,dist:15},{pos:[0,3,-70],color:5601194,intensity:1.5,dist:25},{pos:[-8,4,-95],color:11154261,intensity:3,dist:20},{pos:[8,4,-95],color:11154261,intensity:3,dist:20},{pos:[0,8,-98],color:13386871,intensity:4,dist:30},{pos:[0,1,-95],color:8921668,intensity:2.5,dist:20}].forEach(({pos:h,color:u,intensity:d,dist:f})=>{const g=new Un(u,d,f);g.position.set(...h),this.scene.add(g)}),[[-6,6,-12],[6,6,-12],[-6,6,-22],[6,6,-22],[-6,6,-32],[6,6,-32],[-6,6,-42],[6,6,-42]].forEach(h=>{const u=new Un(16746564,3,16);u.position.set(...h),this.scene.add(u);const d=3,f=Math.random()*1e3,g=()=>{requestAnimationFrame(g),u.intensity=d+Math.sin(Date.now()*.01+f)*.5+Math.sin(Date.now()*.023+f)*.4+Math.random()*.3};g()})}_createBonfire(t){const e=new xe;e.position.copy(t);const n=new Ue(.5,.6,.4,12),i=new ft({color:3355443}),r=new z(n,i);r.position.y=.2,r.castShadow=!0,e.add(r);const a=new mi(.35,.08,8,16),o=new ft({color:4473924}),c=new z(a,o);c.rotation.x=Math.PI/2,c.position.y=.4,e.add(c);const l=new Un(16737826,2,10);l.position.y=1,l.castShadow=!0,e.add(l);const h=50,u=new we,d=new Float32Array(h*3),f=new Float32Array(h*3);for(let p=0;p<h;p++){d[p*3]=(Math.random()-.5)*.4,d[p*3+1]=Math.random()*2,d[p*3+2]=(Math.random()-.5)*.4;const v=Math.random();f[p*3]=1,f[p*3+1]=.2+v*.5,f[p*3+2]=v*.1}u.setAttribute("position",new qe(d,3)),u.setAttribute("color",new qe(f,3));const g=new yl({size:.1,vertexColors:!0,transparent:!0,opacity:.9,blending:_n}),M=new yu(u,g);e.add(M);const m=()=>{requestAnimationFrame(m);const p=u.attributes.position;for(let v=0;v<h;v++){let y=p.getY(v)+.025;y>2&&(y=0,p.setX(v,(Math.random()-.5)*.4),p.setZ(v,(Math.random()-.5)*.4)),p.setY(v,y),p.setX(v,p.getX(v)+(Math.random()-.5)*.008)}p.needsUpdate=!0,l.intensity=1.8+Math.sin(Date.now()*.012)*.4+Math.random()*.3};m(),this.scene.add(e)}getBossPosition(){return new E(0,0,-95)}getEnemySpawns(){return[{pos:new E(0,0,-6),type:"HOLLOW_SOLDIER"},{pos:new E(-4,0,-15),type:"HOLLOW_SOLDIER"},{pos:new E(5,0,-22),type:"BERSERKER"},{pos:new E(0,0,-35),type:"SENTINEL"},{pos:new E(-18,0,-23),type:"BERSERKER"},{pos:new E(-20,0,-27),type:"HOLLOW_SOLDIER"},{pos:new E(18,0,-25),type:"SENTINEL"},{pos:new E(21,0,-38),type:"BERSERKER"},{pos:new E(-3,0,-54),type:"HOLLOW_SOLDIER"},{pos:new E(3,0,-54),type:"HOLLOW_SOLDIER"},{pos:new E(-5,0,-68),type:"SENTINEL"},{pos:new E(5,0,-72),type:"BERSERKER"},{pos:new E(0,0,-78),type:"BERSERKER"}]}getItemSpawns(){return[{pos:new E(6,.5,2),type:"remnant",value:50},{pos:new E(-6,.5,-18),type:"remnant",value:100},{pos:new E(7,.5,-30),type:"remnant",value:100},{pos:new E(-21,1.3,-25),type:"remnant",value:200},{pos:new E(20,.5,-28),type:"key",keyId:"crypt-key",name:"Crypt Key"},{pos:new E(21,.5,-40),type:"remnant",value:500},{pos:new E(0,1.6,-58),type:"remnant",value:300},{pos:new E(-7,.9,-62),type:"remnant",value:150},{pos:new E(7,.9,-74),type:"remnant",value:150}]}}class vg{constructor(t){this.keys={},this.mouseButtons={},this.mouseDelta={x:0,y:0},this.isLocked=!1,this.buffer={},this.bufferDuration=.15,this.domElement=t,window.addEventListener("keydown",e=>{this.keys[e.code]=!0,this._bufferAction(e.code)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),t.addEventListener("mousedown",e=>{this.mouseButtons[e.button]=!0,this._bufferAction(`mouse${e.button}`)}),t.addEventListener("mouseup",e=>{this.mouseButtons[e.button]=!1}),t.addEventListener("mousemove",e=>{this.isLocked&&(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY)}),t.addEventListener("click",()=>{this.isLocked||t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault())}_bufferAction(t){this.buffer[t]=this.bufferDuration}update(t){const e=t||.016666666666666666;for(const n in this.buffer)this.buffer[n]-=e,this.buffer[n]<=0&&delete this.buffer[n]}consumeBuffer(t){return this.buffer[t]?(delete this.buffer[t],!0):!1}getMouseDelta(){const t={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}get moveForward(){return this.keys.KeyW}get moveBack(){return this.keys.KeyS}get moveLeft(){return this.keys.KeyA}get moveRight(){return this.keys.KeyD}get dodge(){return this.consumeBuffer("Space")}get lightAttack(){return this.consumeBuffer("mouse0")}get heavyAttack(){return this.consumeBuffer("mouse2")}get block(){return this.keys.ShiftLeft||this.keys.ShiftRight}get lockOn(){return this.consumeBuffer("KeyQ")}get interact(){return this.consumeBuffer("KeyE")}getMovementVector(){let t=0,e=0;this.moveForward&&(e-=1),this.moveBack&&(e+=1),this.moveLeft&&(t-=1),this.moveRight&&(t+=1);const n=Math.sqrt(t*t+e*e);return n>0&&(t/=n,e/=n),{x:t,z:e}}}class Mg{constructor(t,e){this.scene=t,this.gm=e,this.items=[],this.inventory={keys:new Set},this.notificationEl=document.getElementById("item-notification")}initItems(t){t.forEach((e,n)=>{this.spawnItem(e.pos,e.type,e)})}spawnItem(t,e,n={}){const i={id:`item-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:e,position:t.clone(),collected:!1,mesh:null,light:null,...n};switch(e){case"remnant":this._createRemnantVisual(i);break;case"key":this._createKeyVisual(i);break;default:this._createGenericVisual(i)}return this.items.push(i),i}_createRemnantVisual(t){const e=new te(.15,12,12),n=new ft({color:8978346,emissive:4500070,emissiveIntensity:.8,transparent:!0,opacity:.9});t.mesh=new z(e,n),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh),t.light=new Un(8978346,.8,4),t.light.position.copy(t.position),this.scene.add(t.light);const i=t.position.y,r=()=>{t.collected||(requestAnimationFrame(r),t.mesh.position.y=i+Math.sin(Date.now()*.003)*.15,t.mesh.rotation.y+=.02,t.light.position.y=t.mesh.position.y,t.light.intensity=.6+Math.sin(Date.now()*.005)*.3)};r()}_createKeyVisual(t){const e=new xe,n=new mi(.12,.03,8,16),i=new ft({color:13412932,emissive:6702114,emissiveIntensity:.5,metalness:.8,roughness:.3}),r=new z(n,i);r.rotation.x=Math.PI/2,e.add(r);const a=new Yt(.04,.25,.02),o=new z(a,i);o.position.y=-.18,e.add(o);const c=new Yt(.08,.04,.02),l=new z(c,i);l.position.set(.04,-.25,0),e.add(l);const h=new z(c,i);h.position.set(.04,-.32,0),e.add(h),e.position.copy(t.position),t.mesh=e,this.scene.add(e),t.light=new Un(16755268,1,5),t.light.position.copy(t.position),this.scene.add(t.light);const u=t.position.y,d=()=>{t.collected||(requestAnimationFrame(d),t.mesh.position.y=u+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.015,t.light.position.y=t.mesh.position.y,t.light.intensity=.8+Math.sin(Date.now()*.004)*.3)};d()}_createGenericVisual(t){const e=new wo(.15),n=new ft({color:11184895,emissive:4474026,emissiveIntensity:.5});t.mesh=new z(e,n),t.mesh.position.copy(t.position),this.scene.add(t.mesh);const i=t.position.y,r=()=>{t.collected||(requestAnimationFrame(r),t.mesh.position.y=i+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.02,t.mesh.rotation.x+=.01)};r()}update(t){for(const n of this.items){if(n.collected)continue;t.distanceTo(n.position)<1.5&&this.collectItem(n)}}collectItem(t){if(t.collected)return;t.collected=!0,t.mesh&&this.scene.remove(t.mesh),t.light&&this.scene.remove(t.light),this.gm.audioManager&&this.gm.audioManager.play("itemPickup",{position:t.position,volume:.6});let e="";switch(t.type){case"remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`,console.log(`[ITEM] Collected ${t.value} remnant`);break;case"key":this.inventory.keys.add(t.keyId),e=`Got ${t.name}`,console.log(`[ITEM] Collected key: ${t.name} (${t.keyId})`);break;default:e="Item collected"}this.showNotification(e)}showNotification(t){this.notificationEl&&(this.notificationEl.textContent=t,this.notificationEl.classList.add("visible"),setTimeout(()=>{this.notificationEl.classList.remove("visible")},2e3))}hasKey(t){return this.inventory.keys.has(t)}resetItems(){}}class yg{constructor(t){this.gm=t,this.healthBar=document.getElementById("health-bar"),this.staminaBar=document.getElementById("stamina-bar"),this.postureBar=document.getElementById("posture-bar"),this.remnantLabel=document.getElementById("remnant"),this.lostRemnantLabel=document.getElementById("lost-remnant"),this.bossContainer=document.getElementById("boss-container"),this.bossName=document.getElementById("boss-name"),this.bossHealthBar=document.getElementById("boss-health-bar"),this.bossPostureBar=document.getElementById("boss-posture-bar"),this.bossPhase=document.getElementById("boss-phase"),this.enemyManager=null,this._createDamageVignette(),this.damageVignetteOpacity=0,this.staminaWarningActive=!1}_createDamageVignette(){this.damageVignette=document.createElement("div"),this.damageVignette.id="damage-vignette",this.damageVignette.style.cssText=`
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
    `,document.body.appendChild(this.hitFlash)}flashDamage(t=.6){this.damageVignetteOpacity=Math.min(1,t),this.damageVignette.style.opacity=this.damageVignetteOpacity,this.hitFlash.style.opacity=Math.min(.5,t*.8),setTimeout(()=>{this.damageVignette.style.opacity=this.damageVignetteOpacity*.5,this.hitFlash.style.opacity=0},80),setTimeout(()=>{this.damageVignette.style.opacity=0},250)}flashStaminaDepleted(){this.staminaWarningActive||(this.staminaWarningActive=!0,this.staminaBar&&(this.staminaBar.style.background="linear-gradient(90deg, #ffaa00, #ff6600)",this.staminaBar.style.boxShadow="0 0 10px #ff6600",setTimeout(()=>{this.staminaBar.style.background="",this.staminaBar.style.boxShadow="",this.staminaWarningActive=!1},300)))}setEnemyManager(t){this.enemyManager=t}update(){this.healthBar&&(this.healthBar.style.width=`${this.gm.health/this.gm.maxHealth*100}%`),this.staminaBar&&(this.staminaBar.style.width=`${this.gm.stamina/this.gm.maxStamina*100}%`),this.postureBar&&(this.postureBar.style.width=`${this.gm.posture/this.gm.maxPosture*100}%`),this.remnantLabel&&(this.remnantLabel.textContent=`Remnant: ${this.gm.remnant}`),this.lostRemnantLabel&&(this.gm.bloodstain&&this.gm.heldRemnant>0?(this.lostRemnantLabel.style.display="block",this.lostRemnantLabel.textContent=`Lost: ${this.gm.heldRemnant} (recover at bloodstain)`):this.lostRemnantLabel.style.display="none"),this._updateBossUI()}_updateBossUI(){if(!this.enemyManager||!this.bossContainer)return;const t=this.enemyManager.getBoss();if(!t){this.bossContainer.style.display="none";return}if(t.isActive&&!t.isDead){if(this.bossContainer.style.display="block",this.bossName&&(this.bossName.textContent=t.name),this.bossHealthBar){const e=t.health/t.maxHealth*100;this.bossHealthBar.style.width=`${e}%`,t.phase===2?this.bossHealthBar.style.background="linear-gradient(90deg, #ff4400, #ff6622)":this.bossHealthBar.style.background="linear-gradient(90deg, #cc2222, #ff4444)"}if(this.bossPostureBar){const e=t.posture/t.maxPosture*100;this.bossPostureBar.style.width=`${e}%`}this.bossPhase&&(this.bossPhase.textContent=t.phase===2?"PHASE 2":"",this.bossPhase.style.color=t.phase===2?"#ff4400":"#ffcc00")}else this.bossContainer.style.display="none"}}class Sg{constructor(t,e,n){this.gm=t,this.input=e,this.player=n,this.isOpen=!1,this.selectedTrack=0,this.tracks=["strength","vitality","stamina","spirit"],this._createUI(),window.addEventListener("keydown",i=>this._handleKey(i))}_createUI(){if(this.container=document.getElementById("crucible-container"),!this.container){console.warn("CrucibleUI: #crucible-container not found in HTML");return}this.promptEl=document.getElementById("crucible-prompt"),this.menuEl=document.getElementById("crucible-menu"),this.trackEls=this.tracks.map(t=>document.getElementById(`track-${t}`)),this.remnantEl=document.getElementById("crucible-remnant")}update(){if(!this.container)return;const t=this.gm.isNearBonfire(),e=this.gm.isDead;this.isOpen?(!t||e||this.input.keys.Escape)&&this._close():t&&!e?(this._showPrompt(!0),this.input.interact&&this._open()):this._showPrompt(!1),this.isOpen&&this._updateMenu()}_showPrompt(t){this.promptEl&&(this.promptEl.style.display=t?"block":"none")}_open(){this.isOpen=!0,this._showPrompt(!1),this.menuEl&&(this.menuEl.style.display="block"),document.pointerLockElement&&document.exitPointerLock()}_close(){this.isOpen=!1,this.menuEl&&(this.menuEl.style.display="none")}_handleKey(t){if(this.isOpen)switch(t.code){case"ArrowUp":case"KeyW":t.preventDefault(),this.selectedTrack=(this.selectedTrack-1+this.tracks.length)%this.tracks.length;break;case"ArrowDown":case"KeyS":t.preventDefault(),this.selectedTrack=(this.selectedTrack+1)%this.tracks.length;break;case"Enter":case"KeyF":t.preventDefault(),this._purchaseSelected();break;case"Escape":case"KeyE":t.preventDefault(),this._close();break}}_purchaseSelected(){const t=this.tracks[this.selectedTrack],e=this.gm.getTrackInfo(t);e.maxed||!e.canAfford||this.gm.infuse(t)&&(this.gm.applyInfusionBonuses(),this._applyVisualEffect(t),console.log(`[CRUCIBLE] Infused ${t} to level ${this.gm.infusions[t]}`))}_applyVisualEffect(t){if(!this.player)return;const e=this.gm.infusions[t],i=1+this.gm.getTotalDepth()*.01;switch(this.player.mesh.scale.setScalar(i),t){case"strength":this._addGlow(this.player.body,16729156,e*.1);break;case"vitality":this._addGlow(this.player.body,4521796,e*.1);break;case"stamina":this._addGlow(this.player.body,16777028,e*.1);break;case"spirit":this._addGlow(this.player.visor,4491519,e*.3);break}}_addGlow(t,e,n){if(!t||!t.material)return;const i=t.material.emissive?t.material.emissive.getHex():0,r=this._blendColors(i,e,.5);t.material.emissive.setHex(r),t.material.emissiveIntensity=Math.min(2,(t.material.emissiveIntensity||0)+n)}_blendColors(t,e,n){const i=t>>16&255,r=t>>8&255,a=t&255,o=e>>16&255,c=e>>8&255,l=e&255,h=Math.round(i+(o-i)*n),u=Math.round(r+(c-r)*n),d=Math.round(a+(l-a)*n);return h<<16|u<<8|d}_updateMenu(){this.remnantEl&&(this.remnantEl.textContent=`Remnant: ${this.gm.remnant}`),this.tracks.forEach((t,e)=>{const n=this.trackEls[e];if(!n)return;const i=this.gm.getTrackInfo(t),r=e===this.selectedTrack;n.classList.toggle("selected",r),n.classList.toggle("maxed",i.maxed),n.classList.toggle("affordable",i.canAfford&&!i.maxed);const a=n.querySelector(".track-name"),o=n.querySelector(".track-level"),c=n.querySelector(".track-cost"),l=n.querySelector(".track-bonus");a&&(a.textContent=i.name),o&&(o.textContent=`Lv. ${i.level}/${this.gm.MAX_TRACK_DEPTH}`),c&&(c.textContent=i.maxed?"MAX":`Cost: ${i.cost}`),l&&(l.textContent=i.bonus)})}}class wg{constructor(t,e,n){this.camera=t,this.target=e,this.input=n,this.distance=6,this.minDistance=3,this.maxDistance=12,this.height=2.5,this.sensitivity=.002,this.yaw=0,this.pitch=.3,this.minPitch=-.5,this.maxPitch=1.2,this.smoothing=8,this.currentPos=new E,this.lockOnTarget=null,this.lockOnYaw=0,this.lockOnTransition=0,this.lockOnTransitionSpeed=5,this.shakeIntensity=0,this.shakeDuration=0,this.shakeTimer=0,this.shakeOffset=new E,this.shakeDecay=.92}shake(t=.3,e=.15){this.shakeIntensity=Math.min(this.shakeIntensity+t,1),this.shakeDuration=Math.max(this.shakeDuration,e),this.shakeTimer=0}shakeLight(){this.shake(.15,.1)}shakeMedium(){this.shake(.35,.15)}shakeHeavy(){this.shake(.5,.2)}update(t){const e=this.input.getMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch+e.y*this.sensitivity));const n=this.target.position.clone();if(n.y+=this.height,this.lockOnTarget&&this.lockOnTarget.mesh){const h=this.lockOnTarget.mesh.position,u=this.target.position.distanceTo(h);if(this.lockOnTarget.isDead||u>25)this.lockOnTarget=null,this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);else{const d=new E().subVectors(h,n);d.y=0,this.lockOnYaw=Math.atan2(d.x,d.z)+Math.PI,this.lockOnTransition=Math.min(1,this.lockOnTransition+this.lockOnTransitionSpeed*t)}}else this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);let i=this.yaw;if(this.lockOnTransition>0){let h=this.lockOnYaw-this.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;i=this.yaw+h*this.lockOnTransition}const r=Math.sin(i)*this.distance*Math.cos(this.pitch),a=Math.cos(i)*this.distance*Math.cos(this.pitch),o=this.distance*Math.sin(this.pitch),c=new E(n.x+r,n.y+o,n.z+a);this.currentPos.lerp(c,this.smoothing*t),this._updateShake(t),this.camera.position.copy(this.currentPos),this.camera.position.add(this.shakeOffset);const l=n.clone();if(this.lockOnTarget&&this.lockOnTarget.mesh&&this.lockOnTransition>0){const h=this.lockOnTarget.mesh.position.clone();h.y+=1,l.lerp(h,.35*this.lockOnTransition)}this.camera.lookAt(l)}_updateShake(t){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity),this.shakeIntensity*=this.shakeDecay,this.shakeTimer+=t,this.shakeTimer>=this.shakeDuration&&(this.shakeIntensity=0,this.shakeOffset.set(0,0,0))):this.shakeOffset.set(0,0,0)}setLockOnTarget(t){if(this.lockOnTarget=t,t&&t.mesh){const e=this.target.position.clone();e.y+=this.height;const n=new E().subVectors(t.mesh.position,e);n.y=0,this.lockOnYaw=Math.atan2(n.x,n.z)+Math.PI}}isLockedOn(){return this.lockOnTarget!==null&&this.lockOnTransition>.5}clearLockOn(){this.lockOnTarget=null}getForwardDirection(){return new E(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).normalize()}getRightDirection(){return new E(-Math.cos(this.yaw),0,Math.sin(this.yaw)).normalize()}}class bg{constructor(t){this.camera=t,this.context=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.initialized=!1,this.masterVolume=.7,this.musicVolume=.4,this.sfxVolume=.8,this.listener=null,this.currentMusic=null,this.musicSource=null,this.soundCooldowns={},this.soundBuffers={}}async init(){if(!this.initialized)try{this.context=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.context.createGain(),this.masterGain.gain.value=this.masterVolume,this.masterGain.connect(this.context.destination),this.musicGain=this.context.createGain(),this.musicGain.gain.value=this.musicVolume,this.musicGain.connect(this.masterGain),this.sfxGain=this.context.createGain(),this.sfxGain.gain.value=this.sfxVolume,this.sfxGain.connect(this.masterGain),this.listener=this.context.listener,await this.generateSoundBuffers(),this.initialized=!0,console.log("[AUDIO] AudioManager initialized")}catch(t){console.warn("[AUDIO] Failed to initialize:",t)}}async generateSoundBuffers(){this.soundBuffers.swordSwing=this.createNoiseBuffer(.15,"highpass",2e3,.3),this.soundBuffers.hitImpact=this.createImpactBuffer(.12,150,.6),this.soundBuffers.criticalHit=this.createImpactBuffer(.15,200,.8),this.soundBuffers.playerDamage=this.createImpactBuffer(.2,80,.5),this.soundBuffers.enemyGrunt1=this.createGruntBuffer(.2,120),this.soundBuffers.enemyGrunt2=this.createGruntBuffer(.25,100),this.soundBuffers.enemyGrunt3=this.createGruntBuffer(.18,140),this.soundBuffers.dodge=this.createNoiseBuffer(.2,"bandpass",800,.25),this.soundBuffers.footstepStone=this.createFootstepBuffer(.08,"stone"),this.soundBuffers.footstepMetal=this.createFootstepBuffer(.1,"metal"),this.soundBuffers.death=this.createDeathBuffer(.8),this.soundBuffers.postureBreak=this.createPostureBreakBuffer(.3),this.soundBuffers.itemPickup=this.createChimeBuffer(.3,[523,659,784]),this.soundBuffers.doorUnlock=this.createChimeBuffer(.4,[392,494,587]),this.soundBuffers.menuSelect=this.createChimeBuffer(.15,[880]),this.soundBuffers.menuConfirm=this.createChimeBuffer(.2,[523,659]),this.soundBuffers.bossRoar=this.createRoarBuffer(.6),this.soundBuffers.staminaDepleted=this.createStaminaDepletedBuffer(.15),console.log("[AUDIO] Sound buffers generated")}createNoiseBuffer(t,e,n,i){const r=this.context.sampleRate,a=r*t,o=this.context.createBuffer(1,a,r),c=o.getChannelData(0);for(let l=0;l<a;l++){const h=l/a,u=Math.sin(h*Math.PI);c[l]=(Math.random()*2-1)*u*i}return{buffer:o,filterType:e,filterFreq:n}}createImpactBuffer(t,e,n){const i=this.context.sampleRate,r=i*t,a=this.context.createBuffer(1,r,i),o=a.getChannelData(0);for(let c=0;c<r;c++){const l=c/r,h=Math.exp(-l*10),u=Math.sin(2*Math.PI*e*l*(1-l*.5)),d=(Math.random()*2-1)*.3;o[c]=(u+d)*h*n}return{buffer:a}}createGruntBuffer(t,e){const n=this.context.sampleRate,i=n*t,r=this.context.createBuffer(1,i,n),a=r.getChannelData(0);for(let o=0;o<i;o++){const c=o/i,l=Math.sin(c*Math.PI)*Math.exp(-c*3),h=Math.sin(2*Math.PI*e*o/n),u=Math.sin(2*Math.PI*e*2.5*o/n)*.5,d=Math.sin(2*Math.PI*e*4*o/n)*.25,f=(Math.random()*2-1)*.2;a[o]=(h+u+d+f)*l*.4}return{buffer:r}}createFootstepBuffer(t,e){const n=this.context.sampleRate,i=n*t,r=this.context.createBuffer(1,i,n),a=r.getChannelData(0),o=e==="metal"?400:200,c=e==="metal"?.6:.4;for(let l=0;l<i;l++){const h=l/i,u=Math.exp(-h*20),d=Math.sin(2*Math.PI*o*h),f=(Math.random()*2-1)*c;a[l]=(d*.5+f)*u*.3}return{buffer:r}}createDeathBuffer(t){const e=this.context.sampleRate,n=e*t,i=this.context.createBuffer(1,n,e),r=i.getChannelData(0);for(let a=0;a<n;a++){const o=a/n,c=Math.exp(-o*2)*(1-o),l=150*(1-o*.5),h=Math.sin(2*Math.PI*l*a/e),u=Math.tanh(h*3),d=(Math.random()*2-1)*.3*(1-o);r[a]=(u+d)*c*.5}return{buffer:i}}createPostureBreakBuffer(t){const e=this.context.sampleRate,n=e*t,i=this.context.createBuffer(1,n,e),r=i.getChannelData(0);for(let a=0;a<n;a++){const o=a/n,c=Math.exp(-o*5),l=Math.sin(2*Math.PI*800*a/e),h=Math.sin(2*Math.PI*1200*a/e),u=(Math.random()*2-1)*.5;r[a]=(l*.3+h*.2+u)*c*.4}return{buffer:i}}createChimeBuffer(t,e){const n=this.context.sampleRate,i=n*t,r=this.context.createBuffer(1,i,n),a=r.getChannelData(0);for(let o=0;o<i;o++){const c=o/i,l=Math.exp(-c*4);let h=0;e.forEach((u,d)=>{const f=d*.03*n;if(o>f){const g=(o-f)/n;h+=Math.sin(2*Math.PI*u*g)/e.length}}),a[o]=h*l*.3}return{buffer:r}}createStaminaDepletedBuffer(t){const e=this.context.sampleRate,n=e*t,i=this.context.createBuffer(1,n,e),r=i.getChannelData(0);for(let a=0;a<n;a++){const o=a/n,c=Math.exp(-o*8)*Math.sin(o*Math.PI*2),l=(Math.random()*2-1)*.6,h=Math.sin(2*Math.PI*200*a/e)*.3;r[a]=(l+h)*Math.abs(c)*.25}return{buffer:i}}createRoarBuffer(t){const e=this.context.sampleRate,n=e*t,i=this.context.createBuffer(1,n,e),r=i.getChannelData(0);for(let a=0;a<n;a++){const o=a/n;let c;o<.1?c=o/.1:o<.7?c=1:c=(1-o)/.3;const l=Math.sin(2*Math.PI*60*a/e),h=Math.sin(2*Math.PI*65*a/e),u=Math.sin(2*Math.PI*120*a/e)*.5,d=(Math.random()*2-1)*.4,f=Math.tanh((l+h+u+d)*2);r[a]=f*c*.5}return{buffer:i}}play(t,e={}){if(!this.initialized||!this.soundBuffers[t])return;const{position:n=null,volume:i=1,pitch:r=1,cooldown:a=0,variation:o=0}=e,c=performance.now();if(a>0){const f=this.soundCooldowns[t]||0;if(c-f<a)return;this.soundCooldowns[t]=c}const l=this.soundBuffers[t],h=this.context.createBufferSource();h.buffer=l.buffer;const u=r+(Math.random()*2-1)*o;h.playbackRate.value=Math.max(.5,Math.min(2,u));const d=this.context.createGain();if(d.gain.value=i,l.filterType){const f=this.context.createBiquadFilter();f.type=l.filterType,f.frequency.value=l.filterFreq,h.connect(f),f.connect(d)}else h.connect(d);if(n&&this.camera){const f=this.context.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1,f.maxDistance=50,f.rolloffFactor=1,f.setPosition(n.x,n.y,n.z),d.connect(f),f.connect(this.sfxGain)}else d.connect(this.sfxGain);return h.start(),h}playEnemyGrunt(t){const e=["enemyGrunt1","enemyGrunt2","enemyGrunt3"],n=e[Math.floor(Math.random()*e.length)];this.play(n,{position:t,volume:.6,pitch:.9+Math.random()*.2,cooldown:200})}playFootstep(t,e="stone"){const n=e==="metal"?"footstepMetal":"footstepStone";this.play(n,{position:t,volume:.4,pitch:.9+Math.random()*.2,cooldown:150})}updateListener(){if(!this.initialized||!this.camera||!this.listener)return;const t=this.camera.position,e=new E;this.camera.getWorldDirection(e);const n=this.camera.up;this.listener.positionX?(this.listener.positionX.value=t.x,this.listener.positionY.value=t.y,this.listener.positionZ.value=t.z,this.listener.forwardX.value=e.x,this.listener.forwardY.value=e.y,this.listener.forwardZ.value=e.z,this.listener.upX.value=n.x,this.listener.upY.value=n.y,this.listener.upZ.value=n.z):(this.listener.setPosition(t.x,t.y,t.z),this.listener.setOrientation(e.x,e.y,e.z,n.x,n.y,n.z))}startAmbientMusic(){this.initialized&&this.currentMusic!=="ambient"&&(this.stopMusic(),this.currentMusic="ambient",this.createAmbientDrone())}startBossMusic(){this.initialized&&this.currentMusic!=="boss"&&(this.stopMusic(),this.currentMusic="boss",this.createBossMusic())}createAmbientDrone(){const t=this.context.createOscillator();t.type="sine",t.frequency.value=55;const e=this.context.createOscillator();e.type="sine",e.frequency.value=82.5;const n=this.context.createOscillator();n.type="sine",n.frequency.value=.1;const i=this.context.createGain();i.gain.value=2,n.connect(i),i.connect(t.frequency);const r=this.context.createGain();r.gain.value=.15;const a=this.context.createGain();a.gain.value=.1,t.connect(r),e.connect(a),r.connect(this.musicGain),a.connect(this.musicGain),t.start(),e.start(),n.start(),this.musicSource={oscs:[t,e,n]}}createBossMusic(){const t=this.context.createOscillator();t.type="sawtooth",t.frequency.value=55;const e=this.context.createWaveShaper();e.curve=this.makeDistortionCurve(20);const n=this.context.createOscillator();n.type="square",n.frequency.value=2;const i=this.context.createGain();i.gain.value=.3;const r=this.context.createGain();r.gain.value=.2,n.connect(i),i.connect(r.gain),t.connect(e),e.connect(r),r.connect(this.musicGain),t.start(),n.start(),this.musicSource={oscs:[t,n]}}makeDistortionCurve(t){const n=new Float32Array(44100),i=Math.PI/180;for(let r=0;r<44100;++r){const a=r*2/44100-1;n[r]=(3+t)*a*20*i/(Math.PI+t*Math.abs(a))}return n}stopMusic(){this.musicSource&&this.musicSource.oscs&&this.musicSource.oscs.forEach(t=>{try{t.stop()}catch{}}),this.musicSource=null,this.currentMusic=null}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&(this.masterGain.gain.value=this.masterVolume)}setMusicVolume(t){this.musicVolume=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}resume(){this.context&&this.context.state==="suspended"&&this.context.resume()}}class Tg{constructor(t){this.scene=t,this.particles=[],this.slashTrails=[],this.embers=[],this.dustMotes=[],this._initSharedAssets(),this._initEmbers(),this._initDustMotes()}_initSharedAssets(){this.sparkGeo=new we;const t=new Float32Array([0,.05,0,-.02,0,0,0,-.05,0,.02,0,0,0,.05,0,0,0,.02,0,-.05,0,0,0,-.02]);this.sparkGeo.setAttribute("position",new qe(t,3)),this.bloodGeo=new To(.06,0),this.emberGeo=new te(.02,4,4),this.sparkMat=new me({color:16755268,transparent:!0,opacity:1,side:ge}),this.critSparkMat=new me({color:16777096,transparent:!0,opacity:1,side:ge}),this.bloodMat=new me({color:8912930,transparent:!0,opacity:.9}),this.emberMat=new me({color:16729088,transparent:!0,opacity:.7}),this.slashMat=new me({color:6719743,transparent:!0,opacity:.6,side:ge,blending:_n,depthWrite:!1}),this.heavySlashMat=new me({color:16737860,transparent:!0,opacity:.7,side:ge,blending:_n,depthWrite:!1})}_initEmbers(){for(let e=0;e<30;e++)this._spawnEmber()}_spawnEmber(){const t=new z(this.emberGeo,this.emberMat.clone());t.position.set((Math.random()-.5)*60,Math.random()*.5,(Math.random()-.5)*100-20),this.scene.add(t),this.embers.push({mesh:t,velocity:new E((Math.random()-.5)*.3,.3+Math.random()*.5,(Math.random()-.5)*.3),life:Math.random()*10,maxLife:8+Math.random()*6})}_initDustMotes(){this.dustGeo=new nn(.03,.03),this.dustMat=new me({color:16777198,transparent:!0,opacity:.4,blending:_n,depthWrite:!1,side:ge});for(let e=0;e<80;e++){const n=new z(this.dustGeo,this.dustMat.clone());n.position.set((Math.random()-.5)*40,.5+Math.random()*5,(Math.random()-.5)*80-20),this.scene.add(n),this.dustMotes.push({mesh:n,baseY:n.position.y,driftSpeed:.1+Math.random()*.2,driftAmplitude:.3+Math.random()*.5,phase:Math.random()*Math.PI*2,rotateSpeed:(Math.random()-.5)*2})}}spawnSlashTrail(t,e,n=!1){const i=n?1.8:1.4,r=n?Math.PI*.7:Math.PI*.5,a=12,o=n?.15:.1,c=new Al;c.moveTo(0,0);for(let f=0;f<=a;f++){const g=-r/2+r*f/a,M=Math.cos(g)*i,m=Math.sin(g)*i;f===0?c.moveTo(M,m):c.lineTo(M,m)}for(let f=a;f>=0;f--){const g=-r/2+r*f/a,M=Math.cos(g)*(i-o),m=Math.sin(g)*(i-o);c.lineTo(M,m)}c.closePath();const l=new bo(c),h=(n?this.heavySlashMat:this.slashMat).clone(),u=new z(l,h);u.position.copy(t),u.position.y+=1.2;const d=Math.atan2(e.x,e.z);u.rotation.y=d,u.rotation.x=n?-.5:.2,this.scene.add(u),this.slashTrails.push({mesh:u,life:0,maxLife:n?.35:.25,scaleStart:.3,scaleEnd:1})}spawnHitSparks(t,e=8,n=!1){const i=n?e*2:e,r=n?this.critSparkMat:this.sparkMat;for(let a=0;a<i;a++){const o=new z(this.sparkGeo,r.clone());o.position.copy(t),o.position.y+=.8+Math.random()*.4;const c=Math.random()*Math.PI*2,l=2+Math.random()*4,h=2+Math.random()*3;this.scene.add(o),this.particles.push({mesh:o,velocity:new E(Math.cos(c)*l,h,Math.sin(c)*l),gravity:-15,life:0,maxLife:.3+Math.random()*.2,type:"spark"})}}spawnBlood(t,e,n=6){const i=Math.min(n,15);for(let r=0;r<i;r++){const a=new z(this.bloodGeo,this.bloodMat.clone());a.position.copy(t),a.position.y+=.8+Math.random()*.6;const c=Math.atan2(e.x,e.z)+(Math.random()-.5)*Math.PI*.6,l=3+Math.random()*3,h=1+Math.random()*3;this.scene.add(a),this.particles.push({mesh:a,velocity:new E(Math.sin(c)*l,h,Math.cos(c)*l),gravity:-18,life:0,maxLife:.6+Math.random()*.4,type:"blood",scale:.8+Math.random()*.4})}}spawnPostureBreak(t){this.spawnHitSparks(t,20,!0);const e=new pi(.1,.3,32),n=new me({color:16763972,transparent:!0,opacity:.8,side:ge,blending:_n,depthWrite:!1}),i=new z(e,n);i.position.copy(t),i.position.y+=1,i.rotation.x=-Math.PI/2,this.scene.add(i),this.particles.push({mesh:i,velocity:new E(0,0,0),gravity:0,life:0,maxLife:.5,type:"ring",expandRate:8})}spawnBlockSparks(t){for(let n=0;n<5;n++){const i=new z(this.sparkGeo,this.sparkMat.clone());i.material.color.setHex(8947967),i.position.copy(t),i.position.y+=1;const r=Math.random()*Math.PI*2,a=1+Math.random()*2;this.scene.add(i),this.particles.push({mesh:i,velocity:new E(Math.cos(r)*a,1+Math.random()*2,Math.sin(r)*a),gravity:-10,life:0,maxLife:.25,type:"spark"})}}spawnDeathBurst(t){for(let e=0;e<12;e++){const n=e/12*Math.PI*2,i=new z(this.bloodGeo,this.bloodMat.clone());i.position.copy(t),i.position.y+=1,this.scene.add(i),this.particles.push({mesh:i,velocity:new E(Math.cos(n)*4,2+Math.random()*3,Math.sin(n)*4),gravity:-15,life:0,maxLife:.8,type:"blood",scale:1.2})}for(let e=0;e<6;e++){const n=new te(.1,8,8),i=new me({color:8956671,transparent:!0,opacity:.8,blending:_n}),r=new z(n,i);r.position.copy(t),r.position.y+=.5+Math.random()*.5,r.position.x+=(Math.random()-.5)*.5,r.position.z+=(Math.random()-.5)*.5,this.scene.add(r),this.particles.push({mesh:r,velocity:new E((Math.random()-.5)*.5,2+Math.random()*1,(Math.random()-.5)*.5),gravity:0,life:0,maxLife:1.5+Math.random()*.5,type:"wisp"})}}update(t){this._updateDeathEffects(t);for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.life+=t,i.velocity.y+=i.gravity*t,i.mesh.position.add(i.velocity.clone().multiplyScalar(t)),i.type==="ring"){const a=1+i.expandRate*i.life;i.mesh.scale.set(a,a,1)}if(i.type==="playerSoul"){i.mesh.position.x+=Math.sin(i.life*2)*t*.5,i.mesh.position.z+=Math.cos(i.life*2)*t*.5;const o=.6+Math.sin(i.life*5)*.4;i.mesh.material.opacity=o*(1-i.life/i.maxLife)}if(i.type==="deathMist"){const a=1+i.life*.5;i.mesh.scale.setScalar(a)}const r=1-i.life/i.maxLife;if(i.mesh.material.opacity!==void 0&&(i.mesh.material.opacity=r*(i.type==="blood"?.9:1)),i.scale){const a=i.scale*r;i.mesh.scale.setScalar(a)}i.type==="blood"&&i.mesh.position.y<.05&&(i.mesh.position.y=.05,i.velocity.x*=.5,i.velocity.z*=.5,i.velocity.y=0),i.type==="spark"&&(i.mesh.rotation.x+=t*10,i.mesh.rotation.z+=t*8),i.life>=i.maxLife&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose?.(),i.mesh.material.dispose?.(),this.particles.splice(n,1))}for(let n=this.slashTrails.length-1;n>=0;n--){const i=this.slashTrails[n];i.life+=t;const r=i.life/i.maxLife,a=ue.lerp(i.scaleStart,i.scaleEnd,r);i.mesh.scale.setScalar(a),i.mesh.material.opacity=(1-r)*.6,i.life>=i.maxLife&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.slashTrails.splice(n,1))}for(let n=this.embers.length-1;n>=0;n--){const i=this.embers[n];i.life+=t,i.mesh.position.add(i.velocity.clone().multiplyScalar(t)),i.mesh.position.x+=Math.sin(i.life*2)*.01,i.mesh.position.z+=Math.cos(i.life*1.5)*.01;const r=1-i.life/i.maxLife;i.mesh.material.opacity=r*.7,i.life>=i.maxLife&&(i.life=0,i.mesh.position.set((Math.random()-.5)*60,Math.random()*.3,(Math.random()-.5)*100-20),i.maxLife=8+Math.random()*6)}const e=Date.now()*.001;for(const n of this.dustMotes){n.mesh.position.y=n.baseY+Math.sin(e*n.driftSpeed+n.phase)*n.driftAmplitude,n.mesh.position.x+=Math.sin(e*.5+n.phase)*.002,n.mesh.position.z+=Math.cos(e*.3+n.phase)*.002,n.mesh.rotation.z+=n.rotateSpeed*t;const i=.3+Math.sin(e*3+n.phase*5)*.15;n.mesh.material.opacity=i}}spawnPlayerDeathEffect(t,e){for(let n=0;n<15;n++){const i=new te(.15+Math.random()*.1,8,8),r=new me({color:8965375,transparent:!0,opacity:.9,blending:_n}),a=new z(i,r);a.position.copy(t),a.position.y+=.5+Math.random()*.8,a.position.x+=(Math.random()-.5)*.6,a.position.z+=(Math.random()-.5)*.6,this.scene.add(a),this.particles.push({mesh:a,velocity:new E((Math.random()-.5)*1.5,3+Math.random()*2,(Math.random()-.5)*1.5),gravity:-.5,life:0,maxLife:2.5+Math.random()*1.5,type:"playerSoul"})}for(let n=0;n<20;n++){const i=new te(.2+Math.random()*.15,6,6),r=new me({color:4456465,transparent:!0,opacity:.7}),a=new z(i,r);a.position.copy(t),a.position.y+=Math.random()*1.5;const o=Math.random()*Math.PI*2,c=1+Math.random()*2;this.scene.add(a),this.particles.push({mesh:a,velocity:new E(Math.cos(o)*c,.5+Math.random()*1,Math.sin(o)*c),gravity:-1,life:0,maxLife:2+Math.random()*1,type:"deathMist",scale:1})}this._createDeathVignette(e),e&&this._triggerCameraShake(e)}_createDeathVignette(t){const e=new nn(2,2),n=new Le({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uIntensity:{value:0}},vertexShader:`
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
      `}),i=new z(e,n);i.frustumCulled=!1,i.renderOrder=999,this.scene.add(i),this.deathVignette={mesh:i,material:n,life:0,fadeInDuration:.5,holdDuration:2.5,fadeOutDuration:.5}}_triggerCameraShake(t){this.cameraShake||(this.cameraShake={originalPosition:t.position.clone(),intensity:.3,decay:.95,duration:.8,elapsed:0,camera:t})}_updateDeathEffects(t){if(this.deathVignette){const e=this.deathVignette;e.life+=t,e.material.uniforms.uTime.value=e.life;const n=e.fadeInDuration+e.holdDuration+e.fadeOutDuration;if(e.life<e.fadeInDuration)e.material.uniforms.uIntensity.value=e.life/e.fadeInDuration;else if(e.life<e.fadeInDuration+e.holdDuration)e.material.uniforms.uIntensity.value=1;else if(e.life<n){const i=(e.life-e.fadeInDuration-e.holdDuration)/e.fadeOutDuration;e.material.uniforms.uIntensity.value=1-i}else this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose(),this.deathVignette=null}if(this.cameraShake){const e=this.cameraShake;if(e.elapsed+=t,e.elapsed<e.duration){const n=1-e.elapsed/e.duration,i=e.intensity*n;e.camera.position.x+=(Math.random()-.5)*i,e.camera.position.y+=(Math.random()-.5)*i*.5,e.camera.position.z+=(Math.random()-.5)*i}else this.cameraShake=null}}dispose(){this.particles.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.particles=[],this.slashTrails.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.slashTrails=[],this.embers.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.embers=[],this.dustMotes.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.dustMotes=[]}}const Eg={uniforms:{tDiffuse:{value:null},brightness:{value:.1},contrast:{value:1.25},saturation:{value:1.2},vignetteIntensity:{value:.15},vignetteRadius:{value:.95}},vertexShader:`
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
  `},An=new rg({antialias:!0});An.setSize(window.innerWidth,window.innerHeight);An.setPixelRatio(Math.min(window.devicePixelRatio,2));An.shadowMap.enabled=!0;An.shadowMap.type=Xc;An.toneMapping=oo;An.toneMappingExposure=3;document.body.appendChild(An.domElement);const $n=new pu;$n.fog=new vo(2762808,.001);const Yi=new tn(60,window.innerWidth/window.innerHeight,.1,200),As=new hg(An),Ag=new ug($n,Yi);As.addPass(Ag);const Gl=new Xi(new nt(window.innerWidth,window.innerHeight),.5,.4,.85);As.addPass(Gl);const Cg=new zl(Eg);As.addPass(Cg);const Rg=new Ll,Ie=new fg,Ss=new vg(An.domElement),ws=new bg(Yi),bs=new Tg($n),Eo=new yg(Ie);let Hc=!1;const xr=async()=>{Hc||(await ws.init(),ws.startAmbientMusic(),Hc=!0,document.removeEventListener("click",xr),document.removeEventListener("keydown",xr))};document.addEventListener("click",xr);document.addEventListener("keydown",xr);const Fn=new xg($n),Fi=new Mg($n,Ie);Fi.initItems(Fn.getItemSpawns());const Qe=new pg($n,Ie,Ss),Ao=new wg(Yi,Qe.mesh,Ss);Qe.setCameraController(Ao);const Co=new _g($n,Ie,Qe,Fn,bs);Ie.setCheckpoint(Fn.bonfirePosition.clone());Ie.setEntities(Qe,Co,$n,Yi);Ie.bonfirePosition=Fn.bonfirePosition;Ie.audioManager=ws;Ie.particleManager=bs;Ie.hud=Eo;Ie.cameraController=Ao;Eo.setEnemyManager(Co);const Wc=new Sg(Ie,Ss,Qe);window.addEventListener("resize",()=>{Yi.aspect=window.innerWidth/window.innerHeight,Yi.updateProjectionMatrix(),An.setSize(window.innerWidth,window.innerHeight),As.setSize(window.innerWidth,window.innerHeight),Gl.resolution.set(window.innerWidth,window.innerHeight)});function Vl(){requestAnimationFrame(Vl);const s=Math.min(Rg.getDelta(),.05);if(Ss.update(s),Ie.updateHitstop(s)?bs.update(s*.1):(Qe.update(s),Co.update(s,Qe),bs.update(s)),Ao.update(s),Fi.update(Qe.mesh.position),Eo.update(),Wc.update(),Ie.update(s),ws.updateListener(),Ie.collectBloodstain(),Qe.activeAttack){const r=Fn.checkHiddenWallHit(Qe.activeAttack.position,Qe.activeAttack.range);r&&!r.revealed&&Fn.revealHiddenWall(r.id)}const e=Fn.getNearbyDoor(Qe.mesh.position),n=document.getElementById("door-prompt"),i=document.getElementById("door-name");if(e&&!Wc.isOpen?(n.style.display="block",i.textContent=e.name,Fi.hasKey(e.id)?(n.classList.remove("locked"),Ss.interact&&(Fn.tryOpenDoor(e.id,Fi),Fi.showNotification(`${e.name} Opened`))):(n.classList.add("locked"),i.textContent=`${e.name} (Locked)`)):n.style.display="none",Ie.bloodstainMesh){const r=.6+Math.sin(Date.now()*.005)*.3;Ie.bloodstainMesh.material.opacity=r}As.render()}Vl();window.gameManager=Ie;window.player=Qe;window.world=Fn;window.itemManager=Fi;window.audioManager=ws;window.particleManager=bs;
