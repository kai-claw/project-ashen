(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const _c="182",qu=0,Qc=1,Yu=2,Jr=1,Eh=2,zs=3,Ji=0,Je=1,ue=2,Di=0,rs=1,Yi=2,tl=3,el=4,Ku=5,Cn=100,ju=101,Zu=102,$u=103,Ju=104,Qu=200,td=201,ed=202,id=203,_a=204,xa=205,nd=206,sd=207,rd=208,od=209,ad=210,cd=211,ld=212,hd=213,ud=214,va=0,Ma=1,ya=2,cs=3,Sa=4,Ta=5,ba=6,wa=7,Ch=0,dd=1,fd=2,Li=0,Rh=1,Ph=2,Ih=3,xc=4,Dh=5,Lh=6,Nh=7,il="attached",pd="detached",Uh=300,Dn=301,ls=302,Aa=303,Ea=304,yo=306,Ni=1e3,Pi=1001,oo=1002,Ne=1003,Oh=1004,Gs=1005,Re=1006,Qr=1007,Ki=1008,oi=1009,Fh=1010,Bh=1011,Js=1012,vc=1013,Ui=1014,pi=1015,ci=1016,Mc=1017,yc=1018,Qs=1020,kh=35902,zh=35899,Gh=1021,Hh=1022,ai=1023,Qi=1026,Pn=1027,Sc=1028,Tc=1029,hs=1030,bc=1031,wc=1033,to=33776,eo=33777,io=33778,no=33779,Ca=35840,Ra=35841,Pa=35842,Ia=35843,Da=36196,La=37492,Na=37496,Ua=37488,Oa=37489,Fa=37490,Ba=37491,ka=37808,za=37809,Ga=37810,Ha=37811,Va=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,Ka=37817,ja=37818,Za=37819,$a=37820,Ja=37821,Qa=36492,tc=36494,ec=36495,ic=36283,nc=36284,sc=36285,rc=36286,Vh=2200,Wh=2201,md=2202,tr=2300,er=2301,Co=2302,ns=2400,ss=2401,ao=2402,Ac=2500,gd=2501,_d=0,Xh=1,oc=2,xd=3200,qh=0,vd=1,ln="",Te="srgb",Xe="srgb-linear",co="linear",ce="srgb",Fn=7680,nl=519,Md=512,yd=513,Sd=514,Ec=515,Td=516,bd=517,Cc=518,wd=519,ac=35044,sl="300 es",Ii=2e3,lo=2001;function Yh(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ad(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function ir(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ed(){const o=ir("canvas");return o.style.display="block",o}const rl={};function ho(...o){const t="THREE."+o.shift();console.log(t,...o)}function Rt(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Dt(...o){const t="THREE."+o.shift();console.error(t,...o)}function nr(...o){const t=o.join(" ");t in rl||(rl[t]=!0,Rt(...o))}function Cd(o,t,e){return new Promise(function(i,n){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:n();break;case o.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}class Nn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ol=1234567;const Ws=Math.PI/180,us=180/Math.PI;function mi(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[o&255]+Ve[o>>8&255]+Ve[o>>16&255]+Ve[o>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Wt(o,t,e){return Math.max(t,Math.min(e,o))}function Rc(o,t){return(o%t+t)%t}function Rd(o,t,e,i,n){return i+(o-t)*(n-i)/(e-t)}function Pd(o,t,e){return o!==t?(e-o)/(t-o):0}function Xs(o,t,e){return(1-e)*o+e*t}function Id(o,t,e,i){return Xs(o,t,1-Math.exp(-e*i))}function Dd(o,t=1){return t-Math.abs(Rc(o,t*2)-t)}function Ld(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Nd(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function Ud(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Od(o,t){return o+Math.random()*(t-o)}function Fd(o){return o*(.5-Math.random())}function Bd(o){o!==void 0&&(ol=o);let t=ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kd(o){return o*Ws}function zd(o){return o*us}function Gd(o){return(o&o-1)===0&&o!==0}function Hd(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Vd(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Wd(o,t,e,i,n){const s=Math.cos,r=Math.sin,a=s(e/2),c=r(e/2),l=s((t+i)/2),h=r((t+i)/2),u=s((t-i)/2),d=r((t-i)/2),f=s((i-t)/2),g=r((i-t)/2);switch(n){case"XYX":o.set(a*h,c*u,c*d,a*l);break;case"YZY":o.set(c*d,a*h,c*u,a*l);break;case"ZXZ":o.set(c*u,c*d,a*h,a*l);break;case"XZX":o.set(a*h,c*g,c*f,a*l);break;case"YXY":o.set(c*f,a*h,c*g,a*l);break;case"ZYZ":o.set(c*g,c*f,a*h,a*l);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Mi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function le(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ee={DEG2RAD:Ws,RAD2DEG:us,generateUUID:mi,clamp:Wt,euclideanModulo:Rc,mapLinear:Rd,inverseLerp:Pd,lerp:Xs,damp:Id,pingpong:Dd,smoothstep:Ld,smootherstep:Nd,randInt:Ud,randFloat:Od,randFloatSpread:Fd,seededRandom:Bd,degToRad:kd,radToDeg:zd,isPowerOfTwo:Gd,ceilPowerOfTwo:Hd,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:Wd,normalize:le,denormalize:Mi};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*n+t.x,this.y=s*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,r,a){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],d=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(a<=0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a>=1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);p=Math.sin(p*v)/S,a=Math.sin(a*v)/S,c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+_*a}else{c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+_*a;const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,r){const a=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(n/2),u=a(s/2),d=c(i/2),f=c(n/2),g=c(s/2);switch(r){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-n)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+n*l-s*c,this._y=n*h+r*c+s*a-i*l,this._z=s*h+r*l+i*c-n*a,this._w=r*h-i*a-n*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,n=t._y,s=t._z,r=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,r=-r,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+s*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+s*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,i=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*n-a*i),h=2*(a*e-s*n),u=2*(s*i-r*e);return this.x=e+c*l+r*u-a*h,this.y=i+c*h+a*l-s*u,this.z=n+c*u+s*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,r=e.x,a=e.y,c=e.z;return this.x=n*c-s*a,this.y=s*r-i*c,this.z=i*a-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ro.copy(this).projectOnVector(t),this.sub(Ro)}reflect(t){return this.sub(Ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new b,al=new yi;class kt{constructor(t,e,i,n,s,r,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,a,c,l)}set(t,e,i,n,s,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],v=n[1],S=n[4],M=n[7],A=n[2],E=n[5],R=n[8];return s[0]=r*_+a*v+c*A,s[3]=r*m+a*S+c*E,s[6]=r*p+a*M+c*R,s[1]=l*_+h*v+u*A,s[4]=l*m+h*S+u*E,s[7]=l*p+h*M+u*R,s[2]=d*_+f*v+g*A,s[5]=d*m+f*S+g*E,s[8]=d*p+f*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*s*h+i*a*c+n*s*l-n*r*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*s,f=l*s-r*c,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(n*l-h*i)*_,t[2]=(a*i-n*r)*_,t[3]=d*_,t[4]=(h*e-n*c)*_,t[5]=(n*s-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(r*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-n*l,n*c,-n*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Po.makeScale(t,e)),this}rotate(t){return this.premultiply(Po.makeRotation(-t)),this}translate(t,e){return this.premultiply(Po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new kt,cl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ll=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xd(){const o={enabled:!0,workingColorSpace:Xe,spaces:{},convert:function(n,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ce&&(n.r=Zi(n.r),n.g=Zi(n.g),n.b=Zi(n.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ce&&(n.r=os(n.r),n.g=os(n.g),n.b=os(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ln?co:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,r){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Xe]:{primaries:t,whitePoint:i,transfer:co,toXYZ:cl,fromXYZ:ll,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:cl,fromXYZ:ll,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),o}const jt=Xd();function Zi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function os(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bn;class qd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Bn===void 0&&(Bn=ir("canvas")),Bn.width=t.width,Bn.height=t.height;const n=Bn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Bn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ir("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Zi(s[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zi(e[i]/255)*255):e[i]=Zi(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yd=0;class Pc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,a=n.length;r<a;r++)n[r].isDataTexture?s.push(Io(n[r].image)):s.push(Io(n[r]))}else s=Io(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Io(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?qd.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}let Kd=0;const Do=new b;class Ue extends Nn{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,i=Pi,n=Pi,s=Re,r=Ki,a=ai,c=oi,l=Ue.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=mi(),this.name="",this.source=new Pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Do).x}get height(){return this.source.getSize(Do).y}get depth(){return this.source.getSize(Do).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ni:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ni:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Uh;Ue.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,i=0,n=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,M=(f+1)/2,A=(p+1)/2,E=(h+d)/4,R=(u+_)/4,I=(g+m)/4;return S>M&&S>A?S<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(S),n=E/i,s=R/i):M>A?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=E/n,s=I/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=R/s,n=I/s),this.set(i,n,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jd extends Nn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Re,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const n={width:t,height:e,depth:i.depth},s=new Ue(n);this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Re,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Pc(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qe extends jd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Kh extends Ue{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zd extends Ue{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ze{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,gi):gi.fromBufferAttribute(s,r),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xr.copy(i.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),vr.subVectors(this.max,As),kn.subVectors(t.a,As),zn.subVectors(t.b,As),Gn.subVectors(t.c,As),en.subVectors(zn,kn),nn.subVectors(Gn,zn),_n.subVectors(kn,Gn);let e=[0,-en.z,en.y,0,-nn.z,nn.y,0,-_n.z,_n.y,en.z,0,-en.x,nn.z,0,-nn.x,_n.z,0,-_n.x,-en.y,en.x,0,-nn.y,nn.x,0,-_n.y,_n.x,0];return!Lo(e,kn,zn,Gn,vr)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,kn,zn,Gn,vr))?!1:(Mr.crossVectors(en,nn),e=[Mr.x,Mr.y,Mr.z],Lo(e,kn,zn,Gn,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gi=[new b,new b,new b,new b,new b,new b,new b,new b],gi=new b,xr=new Ze,kn=new b,zn=new b,Gn=new b,en=new b,nn=new b,_n=new b,As=new b,vr=new b,Mr=new b,xn=new b;function Lo(o,t,e,i,n){for(let s=0,r=o.length-3;s<=r;s+=3){xn.fromArray(o,s);const a=n.x*Math.abs(xn.x)+n.y*Math.abs(xn.y)+n.z*Math.abs(xn.z),c=t.dot(xn),l=e.dot(xn),h=i.dot(xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const $d=new Ze,Es=new b,No=new b;class Fi{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$d.setFromPoints(t).getCenter(i);let n=0;for(let s=0,r=t.length;s<r;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Es,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(No)),this.expandByPoint(Es.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Hi=new b,Uo=new b,yr=new b,sn=new b,Oo=new b,Sr=new b,Fo=new b;class So{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Uo.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),sn.copy(this.origin).sub(Uo);const s=t.distanceTo(e)*.5,r=-this.direction.dot(yr),a=sn.dot(this.direction),c=-sn.dot(yr),l=sn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*c-a,d=r*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Uo).addScaledVector(yr,d),f}intersectSphere(t,e){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),n=Hi.dot(Hi)-i*i,s=t.radius*t.radius;if(n>s)return null;const r=Math.sqrt(s-n),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>n)||((a>i||i!==i)&&(i=a),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,n,s){Oo.subVectors(e,t),Sr.subVectors(i,t),Fo.crossVectors(Oo,Sr);let r=this.direction.dot(Fo),a;if(r>0){if(n)return null;a=1}else if(r<0)a=-1,r=-r;else return null;sn.subVectors(this.origin,t);const c=a*this.direction.dot(Sr.crossVectors(sn,Sr));if(c<0)return null;const l=a*this.direction.dot(Oo.cross(sn));if(l<0||c+l>r)return null;const h=-a*sn.dot(Fo);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(t,e,i,n,s,r,a,c,l,h,u,d,f,g,_,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,a,c,l,h,u,d,f,g,_,m)}set(t,e,i,n,s,r,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Hn.setFromMatrixColumn(t,0).length(),s=1/Hn.setFromMatrixColumn(t,1).length(),r=1/Hn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=r*h,f=r*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-r*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*c,f=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=r*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jd,t,Qd)}lookAt(t,e,i){const n=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),rn.crossVectors(i,si),rn.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),rn.crossVectors(i,si)),rn.normalize(),Tr.crossVectors(si,rn),n[0]=rn.x,n[4]=Tr.x,n[8]=si.x,n[1]=rn.y,n[5]=Tr.y,n[9]=si.y,n[2]=rn.z,n[6]=Tr.z,n[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],S=i[7],M=i[11],A=i[15],E=n[0],R=n[4],I=n[8],y=n[12],T=n[1],P=n[5],O=n[9],F=n[13],H=n[2],V=n[6],X=n[10],G=n[14],J=n[3],ft=n[7],lt=n[11],pt=n[15];return s[0]=r*E+a*T+c*H+l*J,s[4]=r*R+a*P+c*V+l*ft,s[8]=r*I+a*O+c*X+l*lt,s[12]=r*y+a*F+c*G+l*pt,s[1]=h*E+u*T+d*H+f*J,s[5]=h*R+u*P+d*V+f*ft,s[9]=h*I+u*O+d*X+f*lt,s[13]=h*y+u*F+d*G+f*pt,s[2]=g*E+_*T+m*H+p*J,s[6]=g*R+_*P+m*V+p*ft,s[10]=g*I+_*O+m*X+p*lt,s[14]=g*y+_*F+m*G+p*pt,s[3]=v*E+S*T+M*H+A*J,s[7]=v*R+S*P+M*V+A*ft,s[11]=v*I+S*O+M*X+A*lt,s[15]=v*y+S*F+M*G+A*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],v=c*f-l*d,S=a*f-l*u,M=a*d-c*u,A=r*f-l*h,E=r*d-c*h,R=r*u-a*h;return e*(_*v-m*S+p*M)-i*(g*v-m*A+p*E)+n*(g*S-_*A+p*R)-s*(g*M-_*E+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,S=g*d*l-h*m*l-g*c*f+r*m*f+h*c*p-r*d*p,M=h*_*l-g*u*l+g*a*f-r*_*f-h*a*p+r*u*p,A=g*u*c-h*_*c-g*a*d+r*_*d+h*a*m-r*u*m,E=e*v+i*S+n*M+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(_*d*s-u*m*s-_*n*f+i*m*f+u*n*p-i*d*p)*R,t[2]=(a*m*s-_*c*s+_*n*l-i*m*l-a*n*p+i*c*p)*R,t[3]=(u*c*s-a*d*s-u*n*l+i*d*l+a*n*f-i*c*f)*R,t[4]=S*R,t[5]=(h*m*s-g*d*s+g*n*f-e*m*f-h*n*p+e*d*p)*R,t[6]=(g*c*s-r*m*s-g*n*l+e*m*l+r*n*p-e*c*p)*R,t[7]=(r*d*s-h*c*s+h*n*l-e*d*l-r*n*f+e*c*f)*R,t[8]=M*R,t[9]=(g*u*s-h*_*s-g*i*f+e*_*f+h*i*p-e*u*p)*R,t[10]=(r*_*s-g*a*s+g*i*l-e*_*l-r*i*p+e*a*p)*R,t[11]=(h*a*s-r*u*s-h*i*l+e*u*l+r*i*f-e*a*f)*R,t[12]=A*R,t[13]=(h*_*n-g*u*n+g*i*d-e*_*d-h*i*m+e*u*m)*R,t[14]=(g*a*n-r*_*n-g*i*c+e*_*c+r*i*m-e*a*m)*R,t[15]=(r*u*n-h*a*n+h*i*c-e*u*c-r*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,a=t.y,c=t.z,l=s*r,h=s*a;return this.set(l*r+i,l*a-n*c,l*c+n*a,0,l*a+n*c,h*a+i,h*c-n*r,0,l*c-n*a,h*c+n*r,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,r){return this.set(1,i,s,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,r=e._y,a=e._z,c=e._w,l=s+s,h=r+r,u=a+a,d=s*l,f=s*h,g=s*u,_=r*h,m=r*u,p=a*u,v=c*l,S=c*h,M=c*u,A=i.x,E=i.y,R=i.z;return n[0]=(1-(_+p))*A,n[1]=(f+M)*A,n[2]=(g-S)*A,n[3]=0,n[4]=(f-M)*E,n[5]=(1-(d+p))*E,n[6]=(m+v)*E,n[7]=0,n[8]=(g+S)*R,n[9]=(m-v)*R,n[10]=(1-(d+_))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;if(t.x=n[12],t.y=n[13],t.z=n[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let s=Hn.set(n[0],n[1],n[2]).length();const r=Hn.set(n[4],n[5],n[6]).length(),a=Hn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),_i.copy(this);const l=1/s,h=1/r,u=1/a;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,e.setFromRotationMatrix(_i),i.x=s,i.y=r,i.z=a,this}makePerspective(t,e,i,n,s,r,a=Ii,c=!1){const l=this.elements,h=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n);let g,_;if(c)g=s/(r-s),_=r*s/(r-s);else if(a===Ii)g=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===lo)g=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,r,a=Ii,c=!1){const l=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n);let g,_;if(c)g=1/(r-s),_=r/(r-s);else if(a===Ii)g=-2/(r-s),_=-(r+s)/(r-s);else if(a===lo)g=-1/(r-s),_=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Hn=new b,_i=new Ot,Jd=new b(0,0,0),Qd=new b(1,1,1),rn=new b,Tr=new b,si=new b,hl=new Ot,ul=new yi;class Oi{constructor(t=0,e=0,i=0,n=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],r=n[4],a=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Wt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ul.setFromEuler(this),this.setFromQuaternion(ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tf=0;const dl=new b,Vn=new yi,Vi=new Ot,br=new b,Cs=new b,ef=new b,nf=new yi,fl=new b(1,0,0),pl=new b(0,1,0),ml=new b(0,0,1),gl={type:"added"},sf={type:"removed"},Wn={type:"childadded",child:null},Bo={type:"childremoved",child:null};class ve extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new b,e=new Oi,i=new yi,n=new b(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ot},normalMatrix:{value:new kt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vn.setFromAxisAngle(t,e),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(t,e){return Vn.setFromAxisAngle(t,e),this.quaternion.premultiply(Vn),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return dl.copy(t).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?br.copy(t):br.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Cs,br,this.up):Vi.lookAt(br,Cs,this.up),this.quaternion.setFromRotationMatrix(Vi),n&&(Vi.extractRotation(n.matrixWorld),Vn.setFromRotationMatrix(Vi),this.quaternion.premultiply(Vn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gl),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sf),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gl),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];n.animations.push(s(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ve.DEFAULT_UP=new b(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new b,Wi=new b,ko=new b,Xi=new b,Xn=new b,qn=new b,_l=new b,zo=new b,Go=new b,Ho=new b,Vo=new xe,Wo=new xe,Xo=new xe;class di{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),xi.subVectors(t,e),n.cross(xi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){xi.subVectors(n,e),Wi.subVectors(i,e),ko.subVectors(t,e);const r=xi.dot(xi),a=xi.dot(Wi),c=xi.dot(ko),l=Wi.dot(Wi),h=Wi.dot(ko),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(r*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,i,n,s,r,a,c){return this.getBarycoord(t,e,i,n,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xi.x),c.addScaledVector(r,Xi.y),c.addScaledVector(a,Xi.z),c)}static getInterpolatedAttribute(t,e,i,n,s,r){return Vo.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Vo.fromBufferAttribute(t,e),Wo.fromBufferAttribute(t,i),Xo.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector(Vo,s.x),r.addScaledVector(Wo,s.y),r.addScaledVector(Xo,s.z),r}static isFrontFacing(t,e,i,n){return xi.subVectors(i,e),Wi.subVectors(t,e),xi.cross(Wi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),xi.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return di.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return di.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let r,a;Xn.subVectors(n,i),qn.subVectors(s,i),zo.subVectors(t,i);const c=Xn.dot(zo),l=qn.dot(zo);if(c<=0&&l<=0)return e.copy(i);Go.subVectors(t,n);const h=Xn.dot(Go),u=qn.dot(Go);if(h>=0&&u<=h)return e.copy(n);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Xn,r);Ho.subVectors(t,s);const f=Xn.dot(Ho),g=qn.dot(Ho);if(g>=0&&f<=g)return e.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(qn,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return _l.subVectors(s,n),a=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(_l,a);const p=1/(m+_+d);return r=_*p,a=d*p,e.copy(i).addScaledVector(Xn,r).addScaledVector(qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},wr={h:0,s:0,l:0};function qo(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=jt.workingColorSpace){if(t=Rc(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=qo(r,s,t+1/3),this.g=qo(r,s,t),this.b=qo(r,s,t-1/3)}return jt.colorSpaceToWorking(this,n),this}setStyle(t,e=Te){function i(s){s!==void 0&&parseFloat(s)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const i=Zh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return jt.workingToColorSpace(We.copy(this),t),Math.round(Wt(We.r*255,0,255))*65536+Math.round(Wt(We.g*255,0,255))*256+Math.round(Wt(We.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(We.copy(this),e);const i=We.r,n=We.g,s=We.b,r=Math.max(i,n,s),a=Math.min(i,n,s);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Te){jt.workingToColorSpace(We.copy(this),t);const e=We.r,i=We.g,n=We.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(on),this.setHSL(on.h+t,on.s+e,on.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(on),t.getHSL(wr);const i=Xs(on.h,wr.h,e),n=Xs(on.s,wr.s,e),s=Xs(on.l,wr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new vt;vt.NAMES=Zh;let rf=0;class Si extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=rs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=xa,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_a&&(i.blendSrc=this.blendSrc),this.blendDst!==xa&&(i.blendDst=this.blendDst),this.blendEquation!==Cn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(e){const s=n(t.textures),r=n(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zt extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new b,Ar=new nt;let of=0;class He{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:of++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ac,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ac&&(t.usage=this.usage),t}}class $h extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Jh extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Kt extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}}let af=0;const hi=new Ot,Yo=new ve,Yn=new b,ri=new Ze,Rs=new Ze,ke=new b;class ye extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yh(t)?Jh:$h)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,e,i){return hi.makeTranslation(t,e,i),this.applyMatrix4(hi),this}scale(t,e,i){return hi.makeScale(t,e,i),this.applyMatrix4(hi),this}lookAt(t){return Yo.lookAt(t),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(ri.min,Rs.min),ri.expandByPoint(ke),ke.addVectors(ri.max,Rs.max),ri.expandByPoint(ke)):(ri.expandByPoint(Rs.min),ri.expandByPoint(Rs.max))}ri.getCenter(i);let n=0;for(let s=0,r=t.count;s<r;s++)ke.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ke));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ke.fromBufferAttribute(a,l),c&&(Yn.fromBufferAttribute(t,l),ke.add(Yn)),n=Math.max(n,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new b,c[I]=new b;const l=new b,h=new b,u=new b,d=new nt,f=new nt,g=new nt,_=new b,m=new b;function p(I,y,T){l.fromBufferAttribute(i,I),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,T),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,T),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(_),a[y].add(_),a[T].add(_),c[I].add(m),c[y].add(m),c[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,y=v.length;I<y;++I){const T=v[I],P=T.start,O=T.count;for(let F=P,H=P+O;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new b,M=new b,A=new b,E=new b;function R(I){A.fromBufferAttribute(n,I),E.copy(A);const y=a[I];S.copy(y),S.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(E,y);const P=M.dot(c[I])<0?-1:1;r.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,y=v.length;I<y;++I){const T=v[I],P=T.start,O=T.count;for(let F=P,H=P+O;F<H;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new b,s=new b,r=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new He(d,h,u)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,i=this.index.array,n=this.attributes;for(const a in n){const c=n[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(n[c]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new Ot,vn=new So,Er=new Fi,vl=new b,Cr=new b,Rr=new b,Pr=new b,Ko=new b,Ir=new b,Ml=new b,Dr=new b;class Y extends ve{constructor(t=new ye,e=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(s&&a){Ir.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Ko.fromBufferAttribute(u,t),r?Ir.addScaledVector(Ko,h):Ir.addScaledVector(Ko.sub(e),h))}e.add(Ir)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(s),vn.copy(t.ray).recast(t.near),!(Er.containsPoint(vn.origin)===!1&&(vn.intersectSphere(Er,vl)===null||vn.origin.distanceToSquared(vl)>(t.far-t.near)**2))&&(xl.copy(s).invert(),vn.copy(t.ray).applyMatrix4(xl),!(i.boundingBox!==null&&vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vn)))}_computeIntersections(t,e,i){let n;const s=this.geometry,r=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,A=S;M<A;M+=3){const E=a.getX(M),R=a.getX(M+1),I=a.getX(M+2);n=Lr(this,p,t,i,l,h,u,E,R,I),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);n=Lr(this,r,t,i,l,h,u,v,S,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,A=S;M<A;M+=3){const E=M,R=M+1,I=M+2;n=Lr(this,p,t,i,l,h,u,E,R,I),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,S=m+1,M=m+2;n=Lr(this,r,t,i,l,h,u,v,S,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function cf(o,t,e,i,n,s,r,a){let c;if(t.side===Je?c=i.intersectTriangle(r,s,n,!0,a):c=i.intersectTriangle(n,s,r,t.side===Ji,a),c===null)return null;Dr.copy(a),Dr.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Dr);return l<e.near||l>e.far?null:{distance:l,point:Dr.clone(),object:o}}function Lr(o,t,e,i,n,s,r,a,c,l){o.getVertexPosition(a,Cr),o.getVertexPosition(c,Rr),o.getVertexPosition(l,Pr);const h=cf(o,t,e,i,Cr,Rr,Pr,Ml);if(h){const u=new b;di.getBarycoord(Ml,Cr,Rr,Pr,u),n&&(h.uv=di.getInterpolatedAttribute(n,a,c,l,u,new nt)),s&&(h.uv1=di.getInterpolatedAttribute(s,a,c,l,u,new nt)),r&&(h.normal=di.getInterpolatedAttribute(r,a,c,l,u,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};di.getNormal(Cr,Rr,Pr,d.normal),h.face=d,h.barycoord=u}return h}class ie extends ye{constructor(t=1,e=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const a=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,r,s,0),g("z","y","x",1,-1,i,e,-t,r,s,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(_,m,p,v,S,M,A,E,R,I,y){const T=M/R,P=A/I,O=M/2,F=A/2,H=E/2,V=R+1,X=I+1;let G=0,J=0;const ft=new b;for(let lt=0;lt<X;lt++){const pt=lt*P-F;for(let Xt=0;Xt<V;Xt++){const Gt=Xt*T-O;ft[_]=Gt*v,ft[m]=pt*S,ft[p]=H,l.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=E>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(Xt/R),u.push(1-lt/I),G+=1}}for(let lt=0;lt<I;lt++)for(let pt=0;pt<R;pt++){const Xt=d+pt+V*lt,Gt=d+pt+V*(lt+1),Se=d+(pt+1)+V*(lt+1),_e=d+(pt+1)+V*lt;c.push(Xt,Gt,_e),c.push(Gt,Se,_e),J+=6}a.addGroup(f,J,y),f+=J,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const n=o[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ke(o){const t={};for(let e=0;e<o.length;e++){const i=ds(o[e]);for(const n in i)t[n]=i[n]}return t}function lf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Qh(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const uo={clone:ds,merge:Ke};var hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class tu extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const an=new b,yl=new nt,Sl=new nt;class je extends tu{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){an.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(an.x,an.y).multiplyScalar(-t/an.z),an.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(an.x,an.y).multiplyScalar(-t/an.z)}getViewSize(t,e){return this.getViewBounds(t,yl,Sl),e.subVectors(Sl,yl)}setViewOffset(t,e,i,n,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*n/c,e-=r.offsetY*i/l,n*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Kn=-90,jn=1;class df extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new je(Kn,jn,t,e);n.layers=this.layers,this.add(n);const s=new je(Kn,jn,t,e);s.layers=this.layers,this.add(s);const r=new je(Kn,jn,t,e);r.layers=this.layers,this.add(r);const a=new je(Kn,jn,t,e);a.layers=this.layers,this.add(a);const c=new je(Kn,jn,t,e);c.layers=this.layers,this.add(c);const l=new je(Kn,jn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,r,a,c]=e;for(const l of e)this.remove(l);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class eu extends Ue{constructor(t=[],e=Dn,i,n,s,r,a,c,l,h){super(t,e,i,n,s,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iu extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new eu(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ie(5,5,5),s=new Ge({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:Di});s.uniforms.tEquirect.value=e;const r=new Y(n,s),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Re),new df(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(s)}}class $t extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ff={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ff)))}return a!==null&&(a.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class pf extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ic{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new b;class fs{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nu extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zn;const Ps=new b,$n=new b,Jn=new b,Qn=new nt,Is=new nt,su=new Ot,Nr=new b,Ds=new b,Ur=new b,Tl=new nt,Zo=new nt,bl=new nt;class mf extends ve{constructor(t=new nu){if(super(),this.isSprite=!0,this.type="Sprite",Zn===void 0){Zn=new ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ic(e,5);Zn.setIndex([0,1,2,0,2,3]),Zn.setAttribute("position",new fs(i,3,0,!1)),Zn.setAttribute("uv",new fs(i,2,3,!1))}this.geometry=Zn,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$n.setFromMatrixScale(this.matrixWorld),su.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Jn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$n.multiplyScalar(-Jn.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const r=this.center;Or(Nr.set(-.5,-.5,0),Jn,r,$n,n,s),Or(Ds.set(.5,-.5,0),Jn,r,$n,n,s),Or(Ur.set(.5,.5,0),Jn,r,$n,n,s),Tl.set(0,0),Zo.set(1,0),bl.set(1,1);let a=t.ray.intersectTriangle(Nr,Ds,Ur,!1,Ps);if(a===null&&(Or(Ds.set(-.5,.5,0),Jn,r,$n,n,s),Zo.set(0,1),a=t.ray.intersectTriangle(Nr,Ur,Ds,!1,Ps),a===null))return;const c=t.ray.origin.distanceTo(Ps);c<t.near||c>t.far||e.push({distance:c,point:Ps.clone(),uv:di.getInterpolation(Ps,Nr,Ds,Ur,Tl,Zo,bl,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Or(o,t,e,i,n,s){Qn.subVectors(o,e).addScalar(.5).multiply(i),n!==void 0?(Is.x=s*Qn.x-n*Qn.y,Is.y=n*Qn.x+s*Qn.y):Is.copy(Qn),o.copy(t),o.x+=Is.x,o.y+=Is.y,o.applyMatrix4(su)}const wl=new b,Al=new xe,El=new xe,gf=new b,Cl=new Ot,Fr=new b,$o=new Fi,Rl=new Ot,Jo=new So;class _f extends Y{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=il,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ze),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Fr),this.boundingBox.expandByPoint(Fr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Fr),this.boundingSphere.expandByPoint(Fr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(n),t.ray.intersectsSphere($o)!==!1&&(Rl.copy(n).invert(),Jo.copy(t.ray).applyMatrix4(Rl),!(this.boundingBox!==null&&Jo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Jo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new xe,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Rt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;Al.fromBufferAttribute(n.attributes.skinIndex,t),El.fromBufferAttribute(n.attributes.skinWeight,t),wl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const r=El.getComponent(s);if(r!==0){const a=Al.getComponent(s);Cl.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(gf.copy(wl).applyMatrix4(Cl),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}class ru extends ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dc extends Ue{constructor(t=null,e=1,i=1,n,s,r,a,c,l=Ne,h=Ne,u,d){super(null,r,a,c,l,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pl=new Ot,xf=new Ot;class Lc{constructor(t=[],e=[]){this.uuid=mi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Rt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Ot;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=t.length;s<r;s++){const a=t[s]?t[s].matrixWorld:xf;Pl.multiplyMatrices(a,e[s]),Pl.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Lc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Dc(e,t,t,ai,pi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const s=t.bones[i];let r=e[s];r===void 0&&(Rt("Skeleton: No bone found with UUID:",s),r=new ru),this.bones.push(r),this.boneInverses.push(new Ot().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){const r=e[n];t.bones.push(r.uuid);const a=i[n];t.boneInverses.push(a.toArray())}return t}}class cc extends He{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ts=new Ot,Il=new Ot,Br=[],Dl=new Ze,vf=new Ot,Ls=new Y,Ns=new Fi;class An extends Y{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,vf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ts),Dl.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Dl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ts),Ns.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,r=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[r+a]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(i),t.ray.intersectsSphere(Ns)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,ts),Il.multiplyMatrices(i,ts),Ls.matrixWorld=Il,Ls.raycast(t,Br);for(let r=0,a=Br.length;r<a;r++){const c=Br[r];c.instanceId=s,c.object=this,e.push(c)}Br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Dc(new Float32Array(n*this.count),n,this.count,Sc,pi));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=n*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qo=new b,Mf=new b,yf=new kt;class En{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Qo.subVectors(i,e).cross(Mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Qo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yf.getNormalMatrix(t),n=this.coplanarPoint(Qo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new Fi,Sf=new nt(.5,.5),kr=new b;class Nc{constructor(t=new En,e=new En,i=new En,n=new En,s=new En,r=new En){this.planes=[t,e,i,n,s,r]}set(t,e,i,n,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ii,i=!1){const n=this.planes,s=t.elements,r=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],v=s[12],S=s[13],M=s[14],A=s[15];if(n[0].setComponents(l-r,f-h,p-g,A-v).normalize(),n[1].setComponents(l+r,f+h,p+g,A+v).normalize(),n[2].setComponents(l+a,f+u,p+_,A+S).normalize(),n[3].setComponents(l-a,f-u,p-_,A-S).normalize(),i)n[4].setComponents(c,d,m,M).normalize(),n[5].setComponents(l-c,f-d,p-m,A-M).normalize();else if(n[4].setComponents(l-c,f-d,p-m,A-M).normalize(),e===Ii)n[5].setComponents(l+c,f+d,p+m,A+M).normalize();else if(e===lo)n[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(t){Mn.center.set(0,0,0);const e=Sf.distanceTo(t.center);return Mn.radius=.7071067811865476+e,Mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(kr.x=n.normal.x>0?t.max.x:t.min.x,kr.y=n.normal.y>0?t.max.y:t.min.y,kr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ou extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fo=new b,po=new b,Ll=new Ot,Us=new So,zr=new Fi,ta=new b,Nl=new b;class Uc extends ve{constructor(t=new ye,e=new ou){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)fo.fromBufferAttribute(e,n-1),po.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=fo.distanceTo(po);t.setAttribute("lineDistance",new Kt(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(n),zr.radius+=s,t.ray.intersectsSphere(zr)===!1)return;Ll.copy(n).invert(),Us.copy(t.ray).applyMatrix4(Ll);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),S=Gr(this,t,Us,c,p,v,_);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Gr(this,t,Us,c,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=l){const p=Gr(this,t,Us,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Gr(this,t,Us,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gr(o,t,e,i,n,s,r){const a=o.geometry.attributes.position;if(fo.fromBufferAttribute(a,n),po.fromBufferAttribute(a,s),e.distanceSqToSegment(fo,po,ta,Nl)>i)return;ta.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(ta);if(!(l<t.near||l>t.far))return{distance:l,point:Nl.clone().applyMatrix4(o.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:o}}const Ul=new b,Ol=new b;class Tf extends Uc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Ul.fromBufferAttribute(e,n),Ol.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Ul.distanceTo(Ol);t.setAttribute("lineDistance",new Kt(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bf extends Uc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class au extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fl=new Ot,lc=new So,Hr=new Fi,Vr=new b;class wf extends ve{constructor(t=new ye,e=new au){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(n),Hr.radius+=s,t.ray.intersectsSphere(Hr)===!1)return;Fl.copy(n).invert(),lc.copy(t.ray).applyMatrix4(Fl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Vr.fromBufferAttribute(u,m),Bl(Vr,m,c,n,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,_=f;g<_;g++)Vr.fromBufferAttribute(u,g),Bl(Vr,g,c,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bl(o,t,e,i,n,s,r){const a=lc.distanceSqToPoint(o);if(a<e){const c=new b;lc.closestPointToPoint(o,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class cu extends Ue{constructor(t,e,i,n,s,r,a,c,l){super(t,e,i,n,s,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sr extends Ue{constructor(t,e,i=Ui,n,s,r,a=Ne,c=Ne,l,h=Qi,u=1){if(h!==Qi&&h!==Pn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,n,s,r,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Af extends sr{constructor(t,e=Ui,i=Dn,n,s,r=Ne,a=Ne,c,l=Qi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,r,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class lu extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class dn extends ye{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));const r=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=i*2+s,_=n+1,m=new b,p=new b;for(let v=0;v<=g;v++){let S=0,M=0,A=0,E=0;if(v<=i){const y=v/i,T=y*Math.PI/2;M=-h-t*Math.cos(T),A=t*Math.sin(T),E=-t*Math.cos(T),S=y*u}else if(v<=i+s){const y=(v-i)/s;M=-h+y*e,A=t,E=0,S=u+y*d}else{const y=(v-i-s)/i,T=y*Math.PI/2;M=h+t*Math.sin(T),A=t*Math.cos(T),E=t*Math.sin(T),S=u+d+y*u}const R=Math.max(0,Math.min(1,S/f));let I=0;v===0?I=.5/n:v===g&&(I=-.5/n);for(let y=0;y<=n;y++){const T=y/n,P=T*Math.PI*2,O=Math.sin(P),F=Math.cos(P);p.x=-A*F,p.y=M,p.z=A*O,a.push(p.x,p.y,p.z),m.set(-A*F,E,A*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(T+I,R)}if(v>0){const y=(v-1)*_;for(let T=0;T<n;T++){const P=y+T,O=y+T+1,F=v*_+T,H=v*_+T+1;r.push(P,O,F),r.push(O,H,F)}}}this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class hr extends ye{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],r=[],a=[],c=[],l=new b,h=new nt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class be extends ye{constructor(t=1,e=1,i=1,n=32,s=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:c};const l=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;v(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function v(){const M=new b,A=new b;let E=0;const R=(e-t)/i;for(let I=0;I<=s;I++){const y=[],T=I/s,P=T*(e-t)+t;for(let O=0;O<=n;O++){const F=O/n,H=F*c+a,V=Math.sin(H),X=Math.cos(H);A.x=P*V,A.y=-T*i+m,A.z=P*X,u.push(A.x,A.y,A.z),M.set(V,R,X).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-T),y.push(g++)}_.push(y)}for(let I=0;I<n;I++)for(let y=0;y<s;y++){const T=_[y][I],P=_[y+1][I],O=_[y+1][I+1],F=_[y][I+1];(t>0||y!==0)&&(h.push(T,P,F),E+=3),(e>0||y!==s-1)&&(h.push(P,O,F),E+=3)}l.addGroup(p,E,0),p+=E}function S(M){const A=g,E=new nt,R=new b;let I=0;const y=M===!0?t:e,T=M===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=n;O++){const H=O/n*c+a,V=Math.cos(H),X=Math.sin(H);R.x=y*X,R.y=m*T,R.z=y*V,u.push(R.x,R.y,R.z),d.push(0,T,0),E.x=V*.5+.5,E.y=X*.5*T+.5,f.push(E.x,E.y),g++}for(let O=0;O<n;O++){const F=A+O,H=P+O;M===!0?h.push(H,H+1,F):h.push(H+1,H,F),I+=3}l.addGroup(p,I,M===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $i extends be{constructor(t=1,e=1,i=32,n=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,i,n,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new $i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ms extends ye{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],r=[];a(n),l(i),h(),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(s.slice(),3)),this.setAttribute("uv",new Kt(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const S=new b,M=new b,A=new b;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],M),f(e[E+2],A),c(S,M,A,v)}function c(v,S,M,A){const E=A+1,R=[];for(let I=0;I<=E;I++){R[I]=[];const y=v.clone().lerp(M,I/E),T=S.clone().lerp(M,I/E),P=E-I;for(let O=0;O<=P;O++)O===0&&I===E?R[I][O]=y:R[I][O]=y.clone().lerp(T,O/P)}for(let I=0;I<E;I++)for(let y=0;y<2*(E-I)-1;y++){const T=Math.floor(y/2);y%2===0?(d(R[I][T+1]),d(R[I+1][T]),d(R[I][T])):(d(R[I][T+1]),d(R[I+1][T+1]),d(R[I+1][T]))}}function l(v){const S=new b;for(let M=0;M<s.length;M+=3)S.x=s[M+0],S.y=s[M+1],S.z=s[M+2],S.normalize().multiplyScalar(v),s[M+0]=S.x,s[M+1]=S.y,s[M+2]=S.z}function h(){const v=new b;for(let S=0;S<s.length;S+=3){v.x=s[S+0],v.y=s[S+1],v.z=s[S+2];const M=m(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;r.push(M,1-A)}g(),u()}function u(){for(let v=0;v<r.length;v+=6){const S=r[v+0],M=r[v+2],A=r[v+4],E=Math.max(S,M,A),R=Math.min(S,M,A);E>.9&&R<.1&&(S<.2&&(r[v+0]+=1),M<.2&&(r[v+2]+=1),A<.2&&(r[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,S){const M=v*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function g(){const v=new b,S=new b,M=new b,A=new b,E=new nt,R=new nt,I=new nt;for(let y=0,T=0;y<s.length;y+=9,T+=6){v.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),M.set(s[y+6],s[y+7],s[y+8]),E.set(r[T+0],r[T+1]),R.set(r[T+2],r[T+3]),I.set(r[T+4],r[T+5]),A.copy(v).add(S).add(M).divideScalar(3);const P=m(A);_(E,T+0,v,P),_(R,T+2,S,P),_(I,T+4,M,P)}}function _(v,S,M,A){A<0&&v.x===1&&(r[S]=v.x-1),M.x===0&&M.z===0&&(r[S]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.vertices,t.indices,t.radius,t.detail)}}class Oc extends Ms{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oc(t.radius,t.detail)}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Rt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let r;e?r=e:r=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(n=Math.floor(a+(c-a)/2),l=i[n]-r,l<0)a=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===r)return n/(s-1);const h=i[n],d=i[n+1]-h,f=(r-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const r=this.getPoint(n),a=this.getPoint(s),c=e||(r.isVector2?new nt:new b);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new b,n=[],s=[],r=[],a=new b,c=new Ot;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new b)}s[0]=new b,r[0]=new b;let l=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),r[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Wt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}r[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Wt(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],f*g)),r[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fc extends Bi{constructor(t=0,e=0,i=1,n=1,s=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(r?s=0:s=n),this.aClockwise===!0&&!r&&(s===n?s=-n:s=s-n);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ef extends Fc{constructor(t,e,i,n,s,r){super(t,e,i,i,n,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Bc(){let o=0,t=0,e=0,i=0;function n(s,r,a,c){o=s,t=a,e=-3*s+3*r-2*a-c,i=2*s-2*r+a+c}return{initCatmullRom:function(s,r,a,c,l){n(r,a,l*(a-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,a,c,l,h,u){let d=(r-s)/l-(a-s)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,n(r,a,d,f)},calc:function(s){const r=s*s,a=r*s;return o+t*s+e*r+i*a}}}const Wr=new b,ea=new Bc,ia=new Bc,na=new Bc;class Cf extends Bi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new b){const i=e,n=this.points,s=n.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=n[(a-1)%s]:(Wr.subVectors(n[0],n[1]).add(n[0]),l=Wr);const u=n[a%s],d=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(Wr.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ea.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),ia.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),na.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ia.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),na.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(ea.calc(c),ia.calc(c),na.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new b().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kl(o,t,e,i,n){const s=(i-t)*.5,r=(n-e)*.5,a=o*o,c=o*a;return(2*e-2*i+s+r)*c+(-3*e+3*i-2*s-r)*a+s*o+e}function Rf(o,t){const e=1-o;return e*e*t}function Pf(o,t){return 2*(1-o)*o*t}function If(o,t){return o*o*t}function qs(o,t,e,i){return Rf(o,t)+Pf(o,e)+If(o,i)}function Df(o,t){const e=1-o;return e*e*e*t}function Lf(o,t){const e=1-o;return 3*e*e*o*t}function Nf(o,t){return 3*(1-o)*o*o*t}function Uf(o,t){return o*o*o*t}function Ys(o,t,e,i,n){return Df(o,t)+Lf(o,e)+Nf(o,i)+Uf(o,n)}class hu extends Bi{constructor(t=new nt,e=new nt,i=new nt,n=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new nt){const i=e,n=this.v0,s=this.v1,r=this.v2,a=this.v3;return i.set(Ys(t,n.x,s.x,r.x,a.x),Ys(t,n.y,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Of extends Bi{constructor(t=new b,e=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new b){const i=e,n=this.v0,s=this.v1,r=this.v2,a=this.v3;return i.set(Ys(t,n.x,s.x,r.x,a.x),Ys(t,n.y,s.y,r.y,a.y),Ys(t,n.z,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uu extends Bi{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ff extends Bi{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class du extends Bi{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){const i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(qs(t,n.x,s.x,r.x),qs(t,n.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bf extends Bi{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){const i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(qs(t,n.x,s.x,r.x),qs(t,n.y,s.y,r.y),qs(t,n.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fu extends Bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const i=e,n=this.points,s=(n.length-1)*t,r=Math.floor(s),a=s-r,c=n[r===0?r:r-1],l=n[r],h=n[r>n.length-2?n.length-1:r+1],u=n[r>n.length-3?n.length-1:r+2];return i.set(kl(a,c.x,l.x,h.x,u.x),kl(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new nt().fromArray(n))}return this}}var zl=Object.freeze({__proto__:null,ArcCurve:Ef,CatmullRomCurve3:Cf,CubicBezierCurve:hu,CubicBezierCurve3:Of,EllipseCurve:Fc,LineCurve:uu,LineCurve3:Ff,QuadraticBezierCurve:du,QuadraticBezierCurve3:Bf,SplineCurve:fu});class kf extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const r=n[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const r=s[n],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new zl[n.type]().fromJSON(n))}return this}}class Gl extends kf{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new uu(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new du(this.currentPoint.clone(),new nt(t,e),new nt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,r){const a=new hu(this.currentPoint.clone(),new nt(t,e),new nt(i,n),new nt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new fu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,n,s,r),this}absarc(t,e,i,n,s,r){return this.absellipse(t,e,i,i,n,s,r),this}ellipse(t,e,i,n,s,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,n,s,r,a,c),this}absellipse(t,e,i,n,s,r,a,c){const l=new Fc(t,e,i,n,s,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class pu extends Gl{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Gl().fromJSON(n))}return this}}function zf(o,t,e=2){const i=t&&t.length,n=i?t[0]*e:o.length;let s=mu(o,0,n,e,!0);const r=[];if(!s||s.next===s.prev)return r;let a,c,l;if(i&&(s=Xf(o,t,s,e)),o.length>80*e){a=o[0],c=o[1];let h=a,u=c;for(let d=e;d<n;d+=e){const f=o[d],g=o[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return rr(s,r,e,a,c,l,0),r}function mu(o,t,e,i,n){let s;if(n===ip(o,t,e,i)>0)for(let r=t;r<e;r+=i)s=Hl(r/i|0,o[r],o[r+1],s);else for(let r=e-i;r>=t;r-=i)s=Hl(r/i|0,o[r],o[r+1],s);return s&&ps(s,s.next)&&(ar(s),s=s.next),s}function Ln(o,t){if(!o)return o;t||(t=o);let e=o,i;do if(i=!1,!e.steiner&&(ps(e,e.next)||we(e.prev,e,e.next)===0)){if(ar(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function rr(o,t,e,i,n,s,r){if(!o)return;!r&&s&&Zf(o,i,n,s);let a=o;for(;o.prev!==o.next;){const c=o.prev,l=o.next;if(s?Hf(o,i,n,s):Gf(o)){t.push(c.i,o.i,l.i),ar(o),o=l.next,a=l.next;continue}if(o=l,o===a){r?r===1?(o=Vf(Ln(o),t),rr(o,t,e,i,n,s,2)):r===2&&Wf(o,t,e,i,n,s):rr(Ln(o),t,e,i,n,s,1);break}}}function Gf(o){const t=o.prev,e=o,i=o.next;if(we(t,e,i)>=0)return!1;const n=t.x,s=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(n,s,r),u=Math.min(a,c,l),d=Math.max(n,s,r),f=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Hs(n,a,s,c,r,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hf(o,t,e,i){const n=o.prev,s=o,r=o.next;if(we(n,s,r)>=0)return!1;const a=n.x,c=s.x,l=r.x,h=n.y,u=s.y,d=r.y,f=Math.min(a,c,l),g=Math.min(h,u,d),_=Math.max(a,c,l),m=Math.max(h,u,d),p=hc(f,g,t,e,i),v=hc(_,m,t,e,i);let S=o.prevZ,M=o.nextZ;for(;S&&S.z>=p&&M&&M.z<=v;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==n&&S!==r&&Hs(a,h,c,u,l,d,S.x,S.y)&&we(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==n&&M!==r&&Hs(a,h,c,u,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==n&&S!==r&&Hs(a,h,c,u,l,d,S.x,S.y)&&we(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==n&&M!==r&&Hs(a,h,c,u,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vf(o,t){let e=o;do{const i=e.prev,n=e.next.next;!ps(i,n)&&_u(i,e,e.next,n)&&or(i,n)&&or(n,i)&&(t.push(i.i,e.i,n.i),ar(e),ar(e.next),e=o=n),e=e.next}while(e!==o);return Ln(e)}function Wf(o,t,e,i,n,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Qf(r,a)){let c=xu(r,a);r=Ln(r,r.next),c=Ln(c,c.next),rr(r,t,e,i,n,s,0),rr(c,t,e,i,n,s,0);return}a=a.next}r=r.next}while(r!==o)}function Xf(o,t,e,i){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s]*i,c=s<r-1?t[s+1]*i:o.length,l=mu(o,a,c,i,!1);l===l.next&&(l.steiner=!0),n.push(Jf(l))}n.sort(qf);for(let s=0;s<n.length;s++)e=Yf(n[s],e);return e}function qf(o,t){let e=o.x-t.x;if(e===0&&(e=o.y-t.y,e===0)){const i=(o.next.y-o.y)/(o.next.x-o.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Yf(o,t){const e=Kf(o,t);if(!e)return t;const i=xu(e,o);return Ln(i,i.next),Ln(e,e.next)}function Kf(o,t){let e=t;const i=o.x,n=o.y;let s=-1/0,r;if(ps(o,e))return e;do{if(ps(o,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const u=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,r=e.x<e.next.x?e:e.next,u===i))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,c=r.x,l=r.y;let h=1/0;e=r;do{if(i>=e.x&&e.x>=c&&i!==e.x&&gu(n<l?i:s,n,c,l,n<l?s:i,n,e.x,e.y)){const u=Math.abs(n-e.y)/(i-e.x);or(e,o)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&jf(r,e)))&&(r=e,h=u)}e=e.next}while(e!==a);return r}function jf(o,t){return we(o.prev,o,t.prev)<0&&we(t.next,o,o.next)<0}function Zf(o,t,e,i){let n=o;do n.z===0&&(n.z=hc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==o);n.prevZ.nextZ=null,n.prevZ=null,$f(n)}function $f(o){let t,e=1;do{let i=o,n;o=null;let s=null;for(t=0;i;){t++;let r=i,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||i.z<=r.z)?(n=i,i=i.nextZ,a--):(n=r,r=r.nextZ,c--),s?s.nextZ=n:o=n,n.prevZ=s,s=n;i=r}s.nextZ=null,e*=2}while(t>1);return o}function hc(o,t,e,i,n){return o=(o-e)*n|0,t=(t-i)*n|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function Jf(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function gu(o,t,e,i,n,s,r,a){return(n-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(n-r)*(i-a)}function Hs(o,t,e,i,n,s,r,a){return!(o===r&&t===a)&&gu(o,t,e,i,n,s,r,a)}function Qf(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!tp(o,t)&&(or(o,t)&&or(t,o)&&ep(o,t)&&(we(o.prev,o,t.prev)||we(o,t.prev,t))||ps(o,t)&&we(o.prev,o,o.next)>0&&we(t.prev,t,t.next)>0)}function we(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function ps(o,t){return o.x===t.x&&o.y===t.y}function _u(o,t,e,i){const n=qr(we(o,t,e)),s=qr(we(o,t,i)),r=qr(we(e,i,o)),a=qr(we(e,i,t));return!!(n!==s&&r!==a||n===0&&Xr(o,e,t)||s===0&&Xr(o,i,t)||r===0&&Xr(e,o,i)||a===0&&Xr(e,t,i))}function Xr(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function qr(o){return o>0?1:o<0?-1:0}function tp(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&_u(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function or(o,t){return we(o.prev,o,o.next)<0?we(o,t,o.next)>=0&&we(o,o.prev,t)>=0:we(o,t,o.prev)<0||we(o,o.next,t)<0}function ep(o,t){let e=o,i=!1;const n=(o.x+t.x)/2,s=(o.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==o);return i}function xu(o,t){const e=uc(o.i,o.x,o.y),i=uc(t.i,t.x,t.y),n=o.next,s=t.prev;return o.next=t,t.prev=o,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Hl(o,t,e,i){const n=uc(o,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ar(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function uc(o,t,e){return{i:o,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ip(o,t,e,i){let n=0;for(let s=t,r=e-i;s<e;s+=i)n+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return n}class np{static triangulate(t,e,i=2){return zf(t,e,i)}}class Ks{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return Ks.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];Vl(t),Wl(i,t);let r=t.length;e.forEach(Vl);for(let c=0;c<e.length;c++)n.push(r),r+=e[c].length,Wl(i,e[c]);const a=np.triangulate(i,n);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Vl(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Wl(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}class ms extends Ms{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ms(t.radius,t.detail)}}class mo extends Ms{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mo(t.radius,t.detail)}}class $e extends ye{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,r=e/2,a=Math.floor(i),c=Math.floor(n),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-r;for(let S=0;S<l;S++){const M=S*u-s;g.push(M,-v,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const S=v+l*p,M=v+l*(p+1),A=v+1+l*(p+1),E=v+1+l*p;f.push(S,M,E),f.push(M,A,E)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.widthSegments,t.heightSegments)}}class ys extends ye{constructor(t=.5,e=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/n,f=new b,g=new nt;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){const p=s+m/i*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<n;_++){const m=_*(i+1);for(let p=0;p<i;p++){const v=p+m,S=v,M=v+i+1,A=v+i+2,E=v+1;a.push(S,M,E),a.push(M,A,E)}}this.setIndex(a),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class kc extends ye{constructor(t=new pu([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],s=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Kt(n,3)),this.setAttribute("normal",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2));function l(h){const u=n.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Ks.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];Ks.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=Ks.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];n.push(v.x,v.y,0),s.push(0,0,1),r.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],S=v[0]+u,M=v[1]+u,A=v[2]+u;i.push(S,M,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return sp(e,t)}static fromJSON(t,e){const i=[];for(let n=0,s=t.shapes.length;n<s;n++){const r=e[t.shapes[n]];i.push(r)}return new kc(i,t.curveSegments)}}function sp(o,t){if(t.shapes=[],Array.isArray(o))for(let e=0,i=o.length;e<i;e++){const n=o[e];t.shapes.push(n.uuid)}else t.shapes.push(o.uuid);return t}class Me extends ye{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new b,d=new b,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const v=[],S=p/i;let M=0;p===0&&r===0?M=.5/e:p===i&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(n+E*s)*Math.sin(r+S*a),u.y=t*Math.cos(r+S*a),u.z=t*Math.sin(n+E*s)*Math.sin(r+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+M,1-S),v.push(l++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const S=h[p][v+1],M=h[p][v],A=h[p+1][v],E=h[p+1][v+1];(p!==0||r>0)&&f.push(S,M,E),(p!==i-1||c<Math.PI)&&f.push(M,A,E)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zc extends Ms{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zc(t.radius,t.detail)}}class fn extends ye{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const r=[],a=[],c=[],l=[],h=new b,u=new b,d=new b;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const _=g/n*s,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/n),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const _=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,v=(n+1)*f+g;r.push(_,m,v),r.push(m,p,v)}this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rp extends Ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wt extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ki extends wt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class op extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ap extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Yr(o,t){return!o||o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function cp(o){function t(n,s){return o[n]-o[s]}const e=o.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function Xl(o,t,e){const i=o.length,n=new o.constructor(i);for(let s=0,r=0;r!==i;++s){const a=e[s]*t;for(let c=0;c!==t;++c)n[r++]=o[a+c]}return n}function vu(o,t,e,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(t.push(s.time),e.push(...r)),s=o[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=o[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(t.push(s.time),e.push(r)),s=o[n++];while(s!==void 0)}class ur{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let r;i:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break e}r=e.length;break i}if(!(t>=s)){const a=e[1];t<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=e[--i-1],t>=s)break e}r=i,i=0;break i}break t}for(;i<r;){const a=i+r>>>1;t<e[a]?r=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let r=0;r!==n;++r)e[r]=i[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lp extends ur{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ns,endingEnd:ns}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,r=t+1,a=n[s],c=n[r];if(a===void 0)switch(this.getSettings_().endingStart){case ss:s=t,a=2*e-i;break;case ao:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ss:r=t,c=2*i-e;break;case ao:r=1,c=i+n[1]-n[0];break;default:r=t-1,c=e}const l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,e,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let A=0;A!==a;++A)s[A]=p*r[h+A]+v*r[l+A]+S*r[c+A]+M*r[u+A];return s}}class Mu extends ur{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==a;++d)s[d]=r[l+d]*u+r[c+d]*h;return s}}class hp extends ur{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ti{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yr(e,this.TimeBufferType),this.values=Yr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Yr(t.times,Array),values:Yr(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new hp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case er:e=this.InterpolantFactoryMethodLinear;break;case Co:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return Co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,r=n-1;for(;s!==n&&i[s]<t;)++s;for(;r!==-1&&i[r]>e;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){Dt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){Dt("KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(n!==void 0&&Ad(n))for(let a=0,c=n.length;a!==c;++a){const l=n[a];if(isNaN(l)){Dt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Co,s=t.length-1;let r=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(n)c=!0;else{const u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];const u=a*i,d=r*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*i,c=r*i,l=0;l!==i;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=er;class Ss extends Ti{constructor(t,e,i){super(t,e,i)}}Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=tr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class yu extends Ti{constructor(t,e,i,n){super(t,e,i,n)}}yu.prototype.ValueTypeName="color";class gs extends Ti{constructor(t,e,i,n){super(t,e,i,n)}}gs.prototype.ValueTypeName="number";class up extends ur{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(i-e)/(n-e);let l=t*a;for(let h=l+a;l!==h;l+=4)yi.slerpFlat(s,0,r,l-a,r,l,c);return s}}class _s extends Ti{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new up(this.times,this.values,this.getValueSize(),t)}}_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends Ti{constructor(t,e,i){super(t,e,i)}}Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=tr;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Ti{constructor(t,e,i,n){super(t,e,i,n)}}xs.prototype.ValueTypeName="vector";class dc{constructor(t="",e=-1,i=[],n=Ac){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let r=0,a=i.length;r!==a;++r)e.push(fp(i[r]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,r=i.length;s!==r;++s)e.push(Ti.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,r=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=cp(c);c=Xl(c,1,h),l=Xl(l,1,h),!n&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new gs(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/i))}return new this(t,-1,r)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(l)}}const r=[];for(const a in n)r.push(this.CreateFromMorphTargetSequence(a,n[a],e,i));return r}static parseAnimation(t,e){if(Rt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Dt("AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];vu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},n=[],s=t.name||"default",r=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}n.push(new gs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*r}else{const f=".bones["+e[u].name+"]";i(xs,f+".position",d,"pos",n),i(_s,f+".quaternion",d,"rot",n),i(xs,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,c,n,a)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function dp(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return yu;case"quaternion":return _s;case"bool":case"boolean":return Ss;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function fp(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=dp(o.type);if(o.times===void 0){const e=[],i=[];vu(o.keys,e,i,"value"),o.times=e,o.values=i}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const ji={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class pp{constructor(t,e,i){const n=this;let s=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,a),r===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const mp=new pp;class Un{constructor(t){this.manager=t!==void 0?t:mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Un.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class gp extends Error{constructor(t,e){super(t),this.response=e}}class go extends Un{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ji.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(qi[t]!==void 0){qi[t].push({onLoad:e,onProgress:i,onError:n});return}qi[t]=[],qi[t].push({onLoad:e,onProgress:i,onError:n});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Rt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=qi[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:S,value:M})=>{if(S)p.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,R=h.length;E<R;E++){const I=h[E];I.onProgress&&I.onProgress(A)}p.enqueue(M),v()}},S=>{p.error(S)})}}});return new Response(m)}else throw new gp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ji.add(`file:${t}`,l);const h=qi[t];delete qi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=qi[t];if(h===void 0)throw this.manager.itemError(t),l;delete qi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const es=new WeakMap;class _p extends Un{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=ji.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0);else{let u=es.get(r);u===void 0&&(u=[],es.set(r,u)),u.push({onLoad:e,onError:n})}return r}const a=ir("img");function c(){h(),e&&e(this);const u=es.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}es.delete(this),s.manager.itemEnd(t)}function l(u){h(),n&&n(u),ji.remove(`image:${t}`);const d=es.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}es.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ji.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class Su extends Un{constructor(t){super(t)}load(t,e,i,n){const s=new Ue,r=new _p(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}class dr extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class xp extends dr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const sa=new Ot,ql=new b,Yl=new b;class Gc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(ql),Yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yl),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vp extends Gc{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=us*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Mp extends dr{constructor(t,e,i=0,n=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new vp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class yp extends Gc{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}}class fi extends dr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new yp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class fr extends tu{constructor(t=-1,e=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,r=i+t,a=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sp extends Gc{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tu extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Sp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Tp extends dr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class js{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const ra=new WeakMap;class bp extends Un{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Rt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Rt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=ji.get(`image-bitmap:${t}`);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(l=>{if(ra.has(r)===!0)n&&n(ra.get(r)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(l),s.manager.itemEnd(t),l});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ji.add(`image-bitmap:${t}`,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){n&&n(l),ra.set(c,l),ji.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});ji.add(`image-bitmap:${t}`,c),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class wp extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class bu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Ap{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,r;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==n;++a)i[s+a]=i[a];r=e}else{r+=e;const a=e/r;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=r}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(i,n,c,1-s,e)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){a.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,r=n;s!==r;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)t[e+r]=t[i+r]}_slerp(t,e,i,n){yi.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const r=this._workIndex*s;yi.multiplyQuaternionsFlat(t,r,t,e,t,i),yi.slerpFlat(t,e,t,e,t,r,n)}_lerp(t,e,i,n,s){const r=1-n;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*r+t[i+a]*n}}_lerpAdditive(t,e,i,n,s){for(let r=0;r!==s;++r){const a=e+r;t[a]=t[a]+t[i+r]*n}}}const Hc="\\[\\]\\.:\\/",Ep=new RegExp("["+Hc+"]","g"),Vc="[^"+Hc+"]",Cp="[^"+Hc.replace("\\.","")+"]",Rp=/((?:WC+[\/:])*)/.source.replace("WC",Vc),Pp=/(WCOD+)?/.source.replace("WCOD",Cp),Ip=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),Dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),Lp=new RegExp("^"+Rp+Pp+Ip+Dp+"$"),Np=["material","materials","bones","map"];class Up{constructor(t,e,i){const n=i||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class se{constructor(t,e,i){this.path=e,this.parsedPath=i||se.parseTrackName(e),this.node=se.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new se.Composite(t,e,i):new se(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ep,"")}static parseTrackName(t){const e=Lp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Np.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===e||a.uuid===e)return a;const c=i(a.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=se.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const r=t[n];if(r===void 0){const l=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}se.Composite=Up;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Op{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,r=s.length,a=new Array(r),c={endingStart:ns,endingEnd:ns};for(let l=0;l!==r;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Wh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){const n=this._clip.duration,s=t._clip.duration,r=s/n,a=n/s;t.warp(1,r,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=t/r,l[1]=e/r,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const r=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case gd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulateAdditive(a);break;case Ac:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulate(n,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const r=i===md;if(t===0)return s===-1?n:r&&(s&1)===1?e-n:n;if(i===Vh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=e||n<0){const a=Math.floor(n/e);n-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(r&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=ss,n.endingEnd=ss):(t?n.endingStart=this.zeroSlopeAtStart?ss:ns:n.endingStart=ao,e?n.endingEnd=this.zeroSlopeAtEnd?ss:ns:n.endingEnd=ao)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,c=r.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=i,this}}const Fp=new Float32Array(1);class wu extends Nn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,r=t._propertyBindings,a=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;g=new Ap(se.create(i,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),r[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let r=s[e];if(r===void 0)r={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=r;else{const a=r.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=n.length,n.push(t),r.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,r=this._actionsByClip,a=r[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete r[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let r=n[e];r===void 0&&(r={},n[e]=r),r[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,a=r[n],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete r[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new Mu(new Float32Array(2),new Float32Array(2),1,Fp),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let r=typeof t=="string"?dc.findByName(n,t):t;const a=r!==null?r.uuid:t,c=this._actionsByClip[a];let l=null;if(i===void 0&&(r!==null?i=r.blendMode:i=Ac),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;const h=new Op(this,r,e,i);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?dc.findByName(i,t):t,r=s?s.uuid:t,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),r=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(n,t,s,r);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(r);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const r=s.knownActions;for(let a=0,c=r.length;a!==c;++a){const l=r[a];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const r in i){const a=i[r].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}function Kl(o,t,e,i){const n=Bp(i);switch(e){case Gh:return o*t;case Sc:return o*t/n.components*n.byteLength;case Tc:return o*t/n.components*n.byteLength;case hs:return o*t*2/n.components*n.byteLength;case bc:return o*t*2/n.components*n.byteLength;case Hh:return o*t*3/n.components*n.byteLength;case ai:return o*t*4/n.components*n.byteLength;case wc:return o*t*4/n.components*n.byteLength;case to:case eo:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case io:case no:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Ia:return Math.max(o,16)*Math.max(t,8)/4;case Ca:case Pa:return Math.max(o,8)*Math.max(t,8)/2;case Da:case La:case Ua:case Oa:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Na:case Fa:case Ba:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Qa:case tc:case ec:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ic:case nc:return Math.ceil(o/4)*Math.ceil(t/4)*8;case sc:case rc:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bp(o){switch(o){case oi:case Fh:return{byteLength:1,components:1};case Js:case Bh:case ci:return{byteLength:2,components:1};case Mc:case yc:return{byteLength:2,components:4};case Ui:case vc:case pi:return{byteLength:4,components:1};case kh:case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);function Au(){let o=null,t=!1,e=null,i=null;function n(s,r){e(s,r),i=o.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(n),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function kp(o){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=o.createBuffer();o.bindBuffer(c,d),o.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=o.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=o.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=o.SHORT;else if(l instanceof Uint32Array)f=o.UNSIGNED_INT;else if(l instanceof Int32Array)f=o.INT;else if(l instanceof Int8Array)f=o.BYTE;else if(l instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(o.bindBuffer(l,a),u.length===0)o.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];o.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(o.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:n,remove:s,update:r}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
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
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qp=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lm=`#define PI 3.141592653589793
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
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
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
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
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
#endif`,Bm=`uniform sampler2D dfgLUT;
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
}`,km=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jm=`#if defined( USE_POINTS_UV )
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
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
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
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
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
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bg=`float getShadowMask() {
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
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zg=`uniform sampler2D t2D;
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
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
}`,qg=`#if DEPTH_PACKING == 3200
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
}`,Yg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`uniform float scale;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Qg=`#include <common>
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#define LAMBERT
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
}`,i0=`#define LAMBERT
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
}`,n0=`#define MATCAP
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
}`,s0=`#define MATCAP
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
}`,r0=`#define NORMAL
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
}`,o0=`#define NORMAL
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
}`,a0=`#define PHONG
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
}`,c0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,h0=`#define STANDARD
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
}`,u0=`#define TOON
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
}`,d0=`#define TOON
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
}`,f0=`uniform float size;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 color;
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
}`,_0=`uniform float rotation;
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
}`,x0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:zp,alphahash_pars_fragment:Gp,alphamap_fragment:Hp,alphamap_pars_fragment:Vp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:Kp,batching_vertex:jp,begin_vertex:Zp,beginnormal_vertex:$p,bsdfs:Jp,iridescence_fragment:Qp,bumpmap_pars_fragment:tm,clipping_planes_fragment:em,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:nm,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:om,color_pars_vertex:am,color_vertex:cm,common:lm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:dm,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:_m,envmap_fragment:xm,envmap_common_pars_fragment:vm,envmap_pars_fragment:Mm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Dm,envmap_vertex:Sm,fog_vertex:Tm,fog_pars_vertex:bm,fog_fragment:wm,fog_pars_fragment:Am,gradientmap_pars_fragment:Em,lightmap_pars_fragment:Cm,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Im,lights_toon_fragment:Lm,lights_toon_pars_fragment:Nm,lights_phong_fragment:Um,lights_phong_pars_fragment:Om,lights_physical_fragment:Fm,lights_physical_pars_fragment:Bm,lights_fragment_begin:km,lights_fragment_maps:zm,lights_fragment_end:Gm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Vm,logdepthbuf_pars_vertex:Wm,logdepthbuf_vertex:Xm,map_fragment:qm,map_pars_fragment:Ym,map_particle_fragment:Km,map_particle_pars_fragment:jm,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:$m,morphinstance_vertex:Jm,morphcolor_vertex:Qm,morphnormal_vertex:tg,morphtarget_pars_vertex:eg,morphtarget_vertex:ig,normal_fragment_begin:ng,normal_fragment_maps:sg,normal_pars_fragment:rg,normal_pars_vertex:og,normal_vertex:ag,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:dg,opaque_fragment:fg,packing:pg,premultiplied_alpha_fragment:mg,project_vertex:gg,dithering_fragment:_g,dithering_pars_fragment:xg,roughnessmap_fragment:vg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:yg,shadowmap_pars_vertex:Sg,shadowmap_vertex:Tg,shadowmask_pars_fragment:bg,skinbase_vertex:wg,skinning_pars_vertex:Ag,skinning_vertex:Eg,skinnormal_vertex:Cg,specularmap_fragment:Rg,specularmap_pars_fragment:Pg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Dg,transmission_fragment:Lg,transmission_pars_fragment:Ng,uv_pars_fragment:Ug,uv_pars_vertex:Og,uv_vertex:Fg,worldpos_vertex:Bg,background_vert:kg,background_frag:zg,backgroundCube_vert:Gg,backgroundCube_frag:Hg,cube_vert:Vg,cube_frag:Wg,depth_vert:Xg,depth_frag:qg,distance_vert:Yg,distance_frag:Kg,equirect_vert:jg,equirect_frag:Zg,linedashed_vert:$g,linedashed_frag:Jg,meshbasic_vert:Qg,meshbasic_frag:t0,meshlambert_vert:e0,meshlambert_frag:i0,meshmatcap_vert:n0,meshmatcap_frag:s0,meshnormal_vert:r0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:c0,meshphysical_vert:l0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:d0,points_vert:f0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:_0,sprite_frag:x0},ht={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ri={basic:{uniforms:Ke([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ke([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new vt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ke([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ke([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ke([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new vt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ke([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ke([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ke([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ke([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ke([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ke([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Ke([ht.common,ht.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Ke([ht.lights,ht.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ri.physical={uniforms:Ke([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Kr={r:0,b:0,g:0},yn=new Oi,v0=new Ot;function M0(o,t,e,i,n,s,r){const a=new vt(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function _(S){let M=!1;const A=g(S);A===null?p(a,c):A&&A.isColor&&(p(A,1),M=!0);const E=o.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(o.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(S,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===yo)?(h===void 0&&(h=new Y(new ie(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:ds(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),yn.copy(M.backgroundRotation),yn.x*=-1,yn.y*=-1,yn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(yn)),h.material.toneMapped=jt.getTransfer(A.colorSpace)!==ce,(u!==A||d!==A.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=o.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Y(new $e(2,2),new Ge({name:"BackgroundMaterial",uniforms:ds(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=jt.getTransfer(A.colorSpace)!==ce,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=o.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,M){S.getRGB(Kr,Qh(o)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,M,r)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:m,dispose:v}}function y0(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,r=!1;function a(T,P,O,F,H){let V=!1;const X=u(F,O,P);s!==X&&(s=X,l(s.object)),V=f(T,F,O,H),V&&g(T,F,O,H),H!==null&&t.update(H,o.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,M(T,P,O,F),H!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return o.createVertexArray()}function l(T){return o.bindVertexArray(T)}function h(T){return o.deleteVertexArray(T)}function u(T,P,O){const F=O.wireframe===!0;let H=i[T.id];H===void 0&&(H={},i[T.id]=H);let V=H[P.id];V===void 0&&(V={},H[P.id]=V);let X=V[F];return X===void 0&&(X=d(c()),V[F]=X),X}function d(T){const P=[],O=[],F=[];for(let H=0;H<e;H++)P[H]=0,O[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:F,object:T,attributes:{},index:null}}function f(T,P,O,F){const H=s.attributes,V=P.attributes;let X=0;const G=O.getAttributes();for(const J in G)if(G[J].location>=0){const lt=H[J];let pt=V[J];if(pt===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(pt=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(pt=T.instanceColor)),lt===void 0||lt.attribute!==pt||pt&&lt.data!==pt.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function g(T,P,O,F){const H={},V=P.attributes;let X=0;const G=O.getAttributes();for(const J in G)if(G[J].location>=0){let lt=V[J];lt===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(lt=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(lt=T.instanceColor));const pt={};pt.attribute=lt,lt&&lt.data&&(pt.data=lt.data),H[J]=pt,X++}s.attributes=H,s.attributesNum=X,s.index=F}function _(){const T=s.newAttributes;for(let P=0,O=T.length;P<O;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){const O=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;O[T]=1,F[T]===0&&(o.enableVertexAttribArray(T),F[T]=1),H[T]!==P&&(o.vertexAttribDivisor(T,P),H[T]=P)}function v(){const T=s.newAttributes,P=s.enabledAttributes;for(let O=0,F=P.length;O<F;O++)P[O]!==T[O]&&(o.disableVertexAttribArray(O),P[O]=0)}function S(T,P,O,F,H,V,X){X===!0?o.vertexAttribIPointer(T,P,O,H,V):o.vertexAttribPointer(T,P,O,F,H,V)}function M(T,P,O,F){_();const H=F.attributes,V=O.getAttributes(),X=P.defaultAttributeValues;for(const G in V){const J=V[G];if(J.location>=0){let ft=H[G];if(ft===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),ft!==void 0){const lt=ft.normalized,pt=ft.itemSize,Xt=t.get(ft);if(Xt===void 0)continue;const Gt=Xt.buffer,Se=Xt.type,_e=Xt.bytesPerElement,j=Se===o.INT||Se===o.UNSIGNED_INT||ft.gpuType===vc;if(ft.isInterleavedBufferAttribute){const Q=ft.data,_t=Q.stride,Bt=ft.offset;if(Q.isInstancedInterleavedBuffer){for(let yt=0;yt<J.locationSize;yt++)p(J.location+yt,Q.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let yt=0;yt<J.locationSize;yt++)m(J.location+yt);o.bindBuffer(o.ARRAY_BUFFER,Gt);for(let yt=0;yt<J.locationSize;yt++)S(J.location+yt,pt/J.locationSize,Se,lt,_t*_e,(Bt+pt/J.locationSize*yt)*_e,j)}else{if(ft.isInstancedBufferAttribute){for(let Q=0;Q<J.locationSize;Q++)p(J.location+Q,ft.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Q=0;Q<J.locationSize;Q++)m(J.location+Q);o.bindBuffer(o.ARRAY_BUFFER,Gt);for(let Q=0;Q<J.locationSize;Q++)S(J.location+Q,pt/J.locationSize,Se,lt,pt*_e,pt/J.locationSize*Q*_e,j)}}else if(X!==void 0){const lt=X[G];if(lt!==void 0)switch(lt.length){case 2:o.vertexAttrib2fv(J.location,lt);break;case 3:o.vertexAttrib3fv(J.location,lt);break;case 4:o.vertexAttrib4fv(J.location,lt);break;default:o.vertexAttrib1fv(J.location,lt)}}}}v()}function A(){I();for(const T in i){const P=i[T];for(const O in P){const F=P[O];for(const H in F)h(F[H].object),delete F[H];delete P[O]}delete i[T]}}function E(T){if(i[T.id]===void 0)return;const P=i[T.id];for(const O in P){const F=P[O];for(const H in F)h(F[H].object),delete F[H];delete P[O]}delete i[T.id]}function R(T){for(const P in i){const O=i[P];if(O[T.id]===void 0)continue;const F=O[T.id];for(const H in F)h(F[H].object),delete F[H];delete O[T.id]}}function I(){y(),r=!0,s!==n&&(s=n,l(s.object))}function y(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function S0(o,t,e){let i;function n(l){i=l}function s(l,h){o.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(o.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function T0(o,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){return!(R!==ai&&i.convert(R)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==oi&&i.convert(R)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pi&&!I)}function c(R){if(R==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Rt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),S=o.getParameter(o.MAX_VARYING_VECTORS),M=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=o.getParameter(o.MAX_SAMPLES),E=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:A,samples:E}}function b0(o){const t=this;let e=null,i=0,n=!1,s=!1;const r=new En,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=o.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):l();else{const v=s?0:i,S=v*4;let M=p.clippingState||null;c.value=M,M=h(g,d,S,f);for(let A=0;A!==S;++A)M[A]=e[A];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==_;++S,M+=4)r.copy(u[S]).applyMatrix4(v,a),r.normal.toArray(m,M),m[M+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function w0(o){let t=new WeakMap;function e(r,a){return a===Aa?r.mapping=Dn:a===Ea&&(r.mapping=ls),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Aa||a===Ea)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new iu(c.height);return l.fromEquirectangularTexture(o,r),t.set(r,l),r.addEventListener("dispose",n),e(l.texture,r.mapping)}else return null}}return r}function n(r){const a=r.target;a.removeEventListener("dispose",n);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const hn=4,jl=[.125,.215,.35,.446,.526,.582],Rn=20,A0=256,Os=new fr,Zl=new vt;let oa=null,aa=0,ca=0,la=!1;const E0=new b;class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:r=256,position:a=E0}=s;oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,aa,ca),this._renderer.xr.enabled=la,t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dn||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:ci,format:ai,colorSpace:Xe,depthBuffer:!1},n=Jl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=C0(s)),this._blurMaterial=P0(s,t,e),this._ggxMaterial=R0(s,t,e)}return n}_compileMaterial(t){const e=new Y(new ye,t);this._renderer.compile(e,Os)}_sceneToCubeUV(t,e,i,n,s){const c=new je(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Zl),u.toneMapping=Li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Y(new ie,new Zt({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Zl),p=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[S],s.y,s.z)):M===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[S]));const A=this._cubeSize;is(n,M*A,S>2?A:0,A,A),u.setRenderTarget(n),p&&u.render(_,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Dn||t.mapping===ls;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const s=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;is(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Os)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[i];a.material=r;const c=r.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-hn?i-g+hn:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,is(s,m,p,3*_,2*_),n.setRenderTarget(s),n.render(a,Os),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,is(t,m,p,3*_,2*_),n.setRenderTarget(t),n.render(a,Os)}_blur(t,e,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",s),this._halfBlur(r,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[n];u.material=l;const d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Rn-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Rn;m>Rn&&Rt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rn}`);const p=[];let v=0;for(let R=0;R<Rn;++R){const I=R/_,y=Math.exp(-I*I/2);p.push(y),R===0?v+=y:R<m&&(v+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const M=this._sizeLods[n],A=3*M*(n>S-hn?n-S+hn:0),E=4*(this._cubeSize-M);is(e,A,E,3*M,2*M),c.setRenderTarget(e),c.render(u,Os)}}function C0(o){const t=[],e=[],i=[];let n=o;const s=o-hn+1+jl.length;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);let c=1/a;r>o-hn?c=jl[r-o+hn-1]:r===0&&(c=0),e.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),S=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,I=E>2?0:-1,y=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(y,_*g*E),S.set(d,m*g*E);const T=[E,E,E,E,E,E];M.set(T,p*g*E)}const A=new ye;A.setAttribute("position",new He(v,_)),A.setAttribute("uv",new He(S,m)),A.setAttribute("faceIndex",new He(M,p)),i.push(new Y(A,null)),n>hn&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Jl(o,t,e){const i=new Qe(o,t,e);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(o,t,e,i,n){o.viewport.set(t,e,i,n),o.scissor.set(t,e,i,n)}function R0(o,t,e){return new Ge({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:A0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function P0(o,t,e){const i=new Float32Array(Rn),n=new b(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:To(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ql(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function th(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function To(){return`

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
	`}function I0(o){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Aa||c===Ea,h=c===Dn||c===ls;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new $l(o)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new $l(o)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function n(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function D0(o){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=o.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&nr("WebGLRenderer: "+i+" extension not supported."),n}}}function L0(o,t,e,i){const n={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete n[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],o.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let S=0,M=v.length;S<M;S+=3){const A=v[S+0],E=v[S+1],R=v[S+2];d.push(A,E,E,R,R,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let S=0,M=v.length/3-1;S<M;S+=3){const A=S+0,E=S+1,R=S+2;d.push(A,E,E,R,R,A)}}else return;const m=new(Yh(d)?Jh:$h)(d,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function N0(o,t,e){let i;function n(d){i=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function c(d,f){o.drawElements(i,f,s,d*r),e.update(f,i,1)}function l(d,f,g){g!==0&&(o.drawElementsInstanced(i,f,s,d*r,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function U0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:Dt("WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function O0(o,t,e){const i=new WeakMap,n=new xe;function s(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let T=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*E*4*u),I=new Kh(R,A,E,u);I.type=pi,I.needsUpdate=!0;const y=M*4;for(let P=0;P<u;P++){const O=p[P],F=v[P],H=S[P],V=A*E*4*P;for(let X=0;X<O.count;X++){const G=X*y;g===!0&&(n.fromBufferAttribute(O,X),R[V+G+0]=n.x,R[V+G+1]=n.y,R[V+G+2]=n.z,R[V+G+3]=0),_===!0&&(n.fromBufferAttribute(F,X),R[V+G+4]=n.x,R[V+G+5]=n.y,R[V+G+6]=n.z,R[V+G+7]=0),m===!0&&(n.fromBufferAttribute(H,X),R[V+G+8]=n.x,R[V+G+9]=n.y,R[V+G+10]=n.z,R[V+G+11]=H.itemSize===4?n.w:1)}}d={count:u,texture:I,size:new nt(A,E)},i.set(a,d),a.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(o,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(o,"morphTargetBaseInfluence",_),c.getUniforms().setValue(o,"morphTargetInfluences",l)}c.getUniforms().setValue(o,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function F0(o,t,e,i){let n=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.get(c)!==l&&(e.update(c.instanceMatrix,o.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,o.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;n.get(d)!==l&&(d.update(),n.set(d,l))}return u}function r(){n=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}const B0={[Rh]:"LINEAR_TONE_MAPPING",[Ph]:"REINHARD_TONE_MAPPING",[Ih]:"CINEON_TONE_MAPPING",[xc]:"ACES_FILMIC_TONE_MAPPING",[Lh]:"AGX_TONE_MAPPING",[Nh]:"NEUTRAL_TONE_MAPPING",[Dh]:"CUSTOM_TONE_MAPPING"};function k0(o,t,e,i,n){const s=new Qe(t,e,{type:o,depthBuffer:i,stencilBuffer:n}),r=new Qe(t,e,{type:ci,depthBuffer:!1,stencilBuffer:!1}),a=new ye;a.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const c=new rp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Y(a,c),h=new fr(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(v,S){s.setSize(v,S),r.setSize(v,S);for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const S=s.width,M=s.height;for(let A=0;A<m.length;A++){const E=m[A];E.setSize&&E.setSize(S,M)}},this.begin=function(v,S){if(f||v.toneMapping===Li&&m.length===0)return!1;if(_=S,S!==null){const M=S.width,A=S.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return p===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Li,!0},this.hasRenderPass=function(){return p},this.end=function(v,S){v.toneMapping=g,f=!0;let M=s,A=r;for(let E=0;E<m.length;E++){const R=m[E];if(R.enabled!==!1&&(R.render(v,A,M,S),R.needsSwap!==!1)){const I=M;M=A,A=I}}if(u!==v.outputColorSpace||d!==v.toneMapping){u=v.outputColorSpace,d=v.toneMapping,c.defines={},jt.getTransfer(u)===ce&&(c.defines.SRGB_TRANSFER="");const E=B0[d];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(_),v.render(l,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),r.dispose(),a.dispose(),c.dispose()}}const Eu=new Ue,fc=new sr(1,1),Cu=new Kh,Ru=new Zd,Pu=new eu,eh=[],ih=[],nh=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function bs(o,t,e){const i=o[0];if(i<=0||i>0)return o;const n=t*e;let s=eh[n];if(s===void 0&&(s=new Float32Array(n),eh[n]=s),t!==0){i.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function Oe(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function Fe(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function bo(o,t){let e=ih[t];e===void 0&&(e=new Int32Array(t),ih[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function z0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function G0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;o.uniform2fv(this.addr,t),Fe(e,t)}}function H0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;o.uniform3fv(this.addr,t),Fe(e,t)}}function V0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;o.uniform4fv(this.addr,t),Fe(e,t)}}function W0(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;rh.set(i),o.uniformMatrix2fv(this.addr,!1,rh),Fe(e,i)}}function X0(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;sh.set(i),o.uniformMatrix3fv(this.addr,!1,sh),Fe(e,i)}}function q0(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;nh.set(i),o.uniformMatrix4fv(this.addr,!1,nh),Fe(e,i)}}function Y0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function K0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;o.uniform2iv(this.addr,t),Fe(e,t)}}function j0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;o.uniform3iv(this.addr,t),Fe(e,t)}}function Z0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;o.uniform4iv(this.addr,t),Fe(e,t)}}function $0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function J0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;o.uniform2uiv(this.addr,t),Fe(e,t)}}function Q0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;o.uniform3uiv(this.addr,t),Fe(e,t)}}function t_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;o.uniform4uiv(this.addr,t),Fe(e,t)}}function e_(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n);let s;this.type===o.SAMPLER_2D_SHADOW?(fc.compareFunction=e.isReversedDepthBuffer()?Cc:Ec,s=fc):s=Eu,e.setTexture2D(t||s,n)}function i_(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ru,n)}function n_(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Pu,n)}function s_(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Cu,n)}function r_(o){switch(o){case 5126:return z0;case 35664:return G0;case 35665:return H0;case 35666:return V0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return K0;case 35668:case 35672:return j0;case 35669:case 35673:return Z0;case 5125:return $0;case 36294:return J0;case 36295:return Q0;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return s_}}function o_(o,t){o.uniform1fv(this.addr,t)}function a_(o,t){const e=bs(t,this.size,2);o.uniform2fv(this.addr,e)}function c_(o,t){const e=bs(t,this.size,3);o.uniform3fv(this.addr,e)}function l_(o,t){const e=bs(t,this.size,4);o.uniform4fv(this.addr,e)}function h_(o,t){const e=bs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function u_(o,t){const e=bs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function d_(o,t){const e=bs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function f_(o,t){o.uniform1iv(this.addr,t)}function p_(o,t){o.uniform2iv(this.addr,t)}function m_(o,t){o.uniform3iv(this.addr,t)}function g_(o,t){o.uniform4iv(this.addr,t)}function __(o,t){o.uniform1uiv(this.addr,t)}function x_(o,t){o.uniform2uiv(this.addr,t)}function v_(o,t){o.uniform3uiv(this.addr,t)}function M_(o,t){o.uniform4uiv(this.addr,t)}function y_(o,t,e){const i=this.cache,n=t.length,s=bo(e,n);Oe(i,s)||(o.uniform1iv(this.addr,s),Fe(i,s));let r;this.type===o.SAMPLER_2D_SHADOW?r=fc:r=Eu;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||r,s[a])}function S_(o,t,e){const i=this.cache,n=t.length,s=bo(e,n);Oe(i,s)||(o.uniform1iv(this.addr,s),Fe(i,s));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Ru,s[r])}function T_(o,t,e){const i=this.cache,n=t.length,s=bo(e,n);Oe(i,s)||(o.uniform1iv(this.addr,s),Fe(i,s));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Pu,s[r])}function b_(o,t,e){const i=this.cache,n=t.length,s=bo(e,n);Oe(i,s)||(o.uniform1iv(this.addr,s),Fe(i,s));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Cu,s[r])}function w_(o){switch(o){case 5126:return o_;case 35664:return a_;case 35665:return c_;case 35666:return l_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return __;case 36294:return x_;case 36295:return v_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return b_}}class A_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=r_(e.type)}}class E_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w_(e.type)}}class C_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const a=n[s];a.setValue(t,e[a.id],i)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function oh(o,t){o.seq.push(t),o.map[t.id]=t}function R_(o,t,e){const i=o.name,n=i.length;for(ha.lastIndex=0;;){const s=ha.exec(i),r=ha.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===n){oh(e,l===void 0?new A_(a,o,t):new E_(a,o,t));break}else{let u=e.map[a];u===void 0&&(u=new C_(a),oh(e,u)),e=u}}}class so{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=t.getActiveUniform(e,r),c=t.getUniformLocation(e,a.name);R_(a,c,this)}const n=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(r):s.push(r);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,r=e.length;s!==r;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function ah(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}const P_=37297;let I_=0;function D_(o,t){const e=o.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=n;r<s;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const ch=new kt;function L_(o){jt._getMatrix(ch,jt.workingColorSpace,o);const t=`mat3( ${ch.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(o)){case co:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function lh(o,t,e){const i=o.getShaderParameter(t,o.COMPILE_STATUS),s=(o.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+D_(o.getShaderSource(t),a)}else return s}function N_(o,t){const e=L_(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const U_={[Rh]:"Linear",[Ph]:"Reinhard",[Ih]:"Cineon",[xc]:"ACESFilmic",[Lh]:"AgX",[Nh]:"Neutral",[Dh]:"Custom"};function O_(o,t){const e=U_[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jr=new b;function F_(){jt.getLuminanceCoefficients(jr);const o=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function k_(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function z_(o,t){const e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=o.getActiveAttrib(t,n),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function Vs(o){return o!==""}function hh(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(o){return o.replace(G_,V_)}const H_=new Map;function V_(o,t){let e=zt[t];if(e===void 0){const i=H_.get(t);if(i!==void 0)e=zt[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}const W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(o){return o.replace(W_,X_)}function X_(o,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function fh(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const q_={[Jr]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function Y_(o){return q_[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K_={[Dn]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE_UV"};function j_(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":K_[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Z_={[ls]:"ENVMAP_MODE_REFRACTION"};function $_(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Z_[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J_={[Ch]:"ENVMAP_BLENDING_MULTIPLY",[dd]:"ENVMAP_BLENDING_MIX",[fd]:"ENVMAP_BLENDING_ADD"};function Q_(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":J_[o.combine]||"ENVMAP_BLENDING_NONE"}function tx(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ex(o,t,e,i){const n=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Y_(e),l=j_(e),h=$_(e),u=Q_(e),d=tx(e),f=B_(e),g=k_(s),_=n.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),p.length>0&&(p+=`
`)):(m=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),p=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?zt.tonemapping_pars_fragment:"",e.toneMapping!==Li?O_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,N_("linearToOutputTexel",e.outputColorSpace),F_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),r=pc(r),r=hh(r,e),r=uh(r,e),a=pc(a),a=hh(a,e),a=uh(a,e),r=dh(r),a=dh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+m+r,M=v+p+a,A=ah(n,n.VERTEX_SHADER,S),E=ah(n,n.FRAGMENT_SHADER,M);n.attachShader(_,A),n.attachShader(_,E),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function R(P){if(o.debug.checkShaderErrors){const O=n.getProgramInfoLog(_)||"",F=n.getShaderInfoLog(A)||"",H=n.getShaderInfoLog(E)||"",V=O.trim(),X=F.trim(),G=H.trim();let J=!0,ft=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(n,_,A,E);else{const lt=lh(n,A,"vertex"),pt=lh(n,E,"fragment");Dt("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+lt+`
`+pt)}else V!==""?Rt("WebGLProgram: Program Info Log:",V):(X===""||G==="")&&(ft=!1);ft&&(P.diagnostics={runnable:J,programLog:V,vertexShader:{log:X,prefix:m},fragmentShader:{log:G,prefix:p}})}n.deleteShader(A),n.deleteShader(E),I=new so(n,_),y=z_(n,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=n.getProgramParameter(_,P_)),T},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let ix=0;class nx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new sx(t),e.set(t,i)),i}}class sx{constructor(t){this.id=ix++,this.code=t,this.usedTimes=0}}function rx(o,t,e,i,n,s,r){const a=new jh,c=new nx,l=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,T,P,O,F){const H=O.fog,V=F.geometry,X=y.isMeshStandardMaterial?O.environment:null,G=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),J=G&&G.mapping===yo?G.image.height:null,ft=g[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Rt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=lt!==void 0?lt.length:0;let Xt=0;V.morphAttributes.position!==void 0&&(Xt=1),V.morphAttributes.normal!==void 0&&(Xt=2),V.morphAttributes.color!==void 0&&(Xt=3);let Gt,Se,_e,j;if(ft){const oe=Ri[ft];Gt=oe.vertexShader,Se=oe.fragmentShader}else Gt=y.vertexShader,Se=y.fragmentShader,c.update(y),_e=c.getVertexShaderID(y),j=c.getFragmentShaderID(y);const Q=o.getRenderTarget(),_t=o.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,yt=F.isBatchedMesh===!0,Qt=!!y.map,Be=!!y.matcap,Jt=!!G,re=!!y.aoMap,de=!!y.lightMap,Ht=!!y.bumpMap,Pe=!!y.normalMap,D=!!y.displacementMap,Ie=!!y.emissiveMap,ne=!!y.metalnessMap,pe=!!y.roughnessMap,Tt=y.anisotropy>0,C=y.clearcoat>0,x=y.dispersion>0,N=y.iridescence>0,K=y.sheen>0,$=y.transmission>0,q=Tt&&!!y.anisotropyMap,At=C&&!!y.clearcoatMap,rt=C&&!!y.clearcoatNormalMap,St=C&&!!y.clearcoatRoughnessMap,Ut=N&&!!y.iridescenceMap,et=N&&!!y.iridescenceThicknessMap,at=K&&!!y.sheenColorMap,Mt=K&&!!y.sheenRoughnessMap,bt=!!y.specularMap,ot=!!y.specularColorMap,Vt=!!y.specularIntensityMap,L=$&&!!y.transmissionMap,dt=$&&!!y.thicknessMap,it=!!y.gradientMap,mt=!!y.alphaMap,tt=y.alphaTest>0,Z=!!y.alphaHash,st=!!y.extensions;let Ft=Li;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ft=o.toneMapping);const me={shaderID:ft,shaderType:y.type,shaderName:y.name,vertexShader:Gt,fragmentShader:Se,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:yt,batchingColor:yt&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,outputColorSpace:Q===null?o.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xe,alphaToCoverage:!!y.alphaToCoverage,map:Qt,matcap:Be,envMap:Jt,envMapMode:Jt&&G.mapping,envMapCubeUVHeight:J,aoMap:re,lightMap:de,bumpMap:Ht,normalMap:Pe,displacementMap:D,emissiveMap:Ie,normalMapObjectSpace:Pe&&y.normalMapType===vd,normalMapTangentSpace:Pe&&y.normalMapType===qh,metalnessMap:ne,roughnessMap:pe,anisotropy:Tt,anisotropyMap:q,clearcoat:C,clearcoatMap:At,clearcoatNormalMap:rt,clearcoatRoughnessMap:St,dispersion:x,iridescence:N,iridescenceMap:Ut,iridescenceThicknessMap:et,sheen:K,sheenColorMap:at,sheenRoughnessMap:Mt,specularMap:bt,specularColorMap:ot,specularIntensityMap:Vt,transmission:$,transmissionMap:L,thicknessMap:dt,gradientMap:it,opaque:y.transparent===!1&&y.blending===rs&&y.alphaToCoverage===!1,alphaMap:mt,alphaTest:tt,alphaHash:Z,combine:y.combine,mapUv:Qt&&_(y.map.channel),aoMapUv:re&&_(y.aoMap.channel),lightMapUv:de&&_(y.lightMap.channel),bumpMapUv:Ht&&_(y.bumpMap.channel),normalMapUv:Pe&&_(y.normalMap.channel),displacementMapUv:D&&_(y.displacementMap.channel),emissiveMapUv:Ie&&_(y.emissiveMap.channel),metalnessMapUv:ne&&_(y.metalnessMap.channel),roughnessMapUv:pe&&_(y.roughnessMap.channel),anisotropyMapUv:q&&_(y.anisotropyMap.channel),clearcoatMapUv:At&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:at&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(y.sheenRoughnessMap.channel),specularMapUv:bt&&_(y.specularMap.channel),specularColorMapUv:ot&&_(y.specularColorMap.channel),specularIntensityMapUv:Vt&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:dt&&_(y.thicknessMap.channel),alphaMapUv:mt&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pe||Tt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Qt||mt),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Xt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Qt&&y.map.isVideoTexture===!0&&jt.getTransfer(y.map.colorSpace)===ce,decodeVideoTextureEmissive:Ie&&y.emissiveMap.isVideoTexture===!0&&jt.getTransfer(y.emissiveMap.colorSpace)===ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ue,flipSided:y.side===Je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&y.extensions.multiDraw===!0||yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(v(T,y),S(T,y),T.push(o.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const T=g[y.type];let P;if(T){const O=Ri[T];P=uo.clone(O.uniforms)}else P=y.uniforms;return P}function A(y,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new ex(o,T,y,s),h.push(P),u.set(T,P)),P}function E(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function R(y){c.remove(y)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:I}}function ox(){let o=new WeakMap;function t(r){return o.has(r)}function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function i(r){o.delete(r)}function n(r,a,c){o.get(r)[a]=c}function s(){o=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function ax(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function ph(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function mh(){const o=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function r(u,d,f,g,_,m){let p=o[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},o[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=r(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=r(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||ax),i.length>1&&i.sort(d||ph),n.length>1&&n.sort(d||ph)}function h(){for(let u=t,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:a,unshift:c,finish:h,sort:l}}function cx(){let o=new WeakMap;function t(i,n){const s=o.get(i);let r;return s===void 0?(r=new mh,o.set(i,[r])):n>=s.length?(r=new mh,s.push(r)):r=s[n],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function lx(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new vt};break;case"SpotLight":e={position:new b,direction:new b,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new b,halfWidth:new b,halfHeight:new b};break}return o[t.id]=e,e}}}function hx(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let ux=0;function dx(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function fx(o){const t=new lx,e=hx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);const n=new b,s=new Ot,r=new Ot;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,S=0,M=0,A=0,E=0,R=0;l.sort(dx);for(let y=0,T=l.length;y<T;y++){const P=l[y],O=P.color,F=P.intensity,H=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===hs?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*F,u+=O.g*F,d+=O.b*F;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],F);R++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,J=e.get(P);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.directionalShadow[f]=J,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=P.shadow.matrix,v++}i.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(F),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[_]=X;const G=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,G.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[_]=G.matrix,P.castShadow){const J=e.get(P);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=V,M++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(F),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const G=P.shadow,J=e.get(P);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(F),X.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[p]=X,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==S||I.numSpotShadows!==M||I.numSpotMaps!==A||I.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=S,I.numSpotShadows=M,I.numSpotMaps=A,I.numLightProbes=R,i.version=ux++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const S=l[p];if(S.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),u++}else if(S.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),r.identity(),s.copy(S.matrixWorld),s.premultiply(m),r.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function gh(o){const t=new fx(o),e=[],i=[];function n(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:r}}function px(o){let t=new WeakMap;function e(n,s=0){const r=t.get(n);let a;return r===void 0?(a=new gh(o),t.set(n,[a])):s>=r.length?(a=new gh(o),r.push(a)):a=r[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
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
}`,_x=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],xx=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],_h=new Ot,Fs=new b,ua=new b;function vx(o,t,e){let i=new Nc;const n=new nt,s=new nt,r=new xe,a=new op,c=new ap,l={},h=e.maxTextureSize,u={[Ji]:Je,[Je]:Ji,[ue]:ue},d=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Y(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let p=this.type;this.render=function(E,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;E.type===Eh&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=Jr);const y=o.getRenderTarget(),T=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),O=o.state;O.setBlending(Di),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==this.type;F&&R.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=E.length;H<V;H++){const X=E[H],G=X.shadow;if(G===void 0){Rt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const J=G.getFrameExtents();if(n.multiply(J),s.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/J.x),n.x=s.x*J.x,G.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/J.y),n.y=s.y*J.y,G.mapSize.y=s.y)),G.map===null||F===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===zs){if(X.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Qe(n.x,n.y,{format:hs,type:ci,minFilter:Re,magFilter:Re,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new sr(n.x,n.y,pi),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Qi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ne,G.map.depthTexture.magFilter=Ne}else{X.isPointLight?(G.map=new iu(n.x),G.map.depthTexture=new Af(n.x,Ui)):(G.map=new Qe(n.x,n.y),G.map.depthTexture=new sr(n.x,n.y,Ui)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Qi;const lt=o.state.buffers.depth.getReversed();this.type===Jr?(G.map.depthTexture.compareFunction=lt?Cc:Ec,G.map.depthTexture.minFilter=Re,G.map.depthTexture.magFilter=Re):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ne,G.map.depthTexture.magFilter=Ne)}G.camera.updateProjectionMatrix()}const ft=G.map.isWebGLCubeRenderTarget?6:1;for(let lt=0;lt<ft;lt++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,lt),o.clear();else{lt===0&&(o.setRenderTarget(G.map),o.clear());const pt=G.getViewport(lt);r.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),O.viewport(r)}if(X.isPointLight){const pt=G.camera,Xt=G.matrix,Gt=X.distance||pt.far;Gt!==pt.far&&(pt.far=Gt,pt.updateProjectionMatrix()),Fs.setFromMatrixPosition(X.matrixWorld),pt.position.copy(Fs),ua.copy(pt.position),ua.add(_x[lt]),pt.up.copy(xx[lt]),pt.lookAt(ua),pt.updateMatrixWorld(),Xt.makeTranslation(-Fs.x,-Fs.y,-Fs.z),_h.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(_h,pt.coordinateSystem,pt.reversedDepth)}else G.updateMatrices(X);i=G.getFrustum(),M(R,I,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===zs&&v(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(y,T,P)};function v(E,R){const I=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qe(n.x,n.y,{format:hs,type:ci})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,o.setRenderTarget(E.mapPass),o.clear(),o.renderBufferDirect(R,null,I,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,o.setRenderTarget(E.map),o.clear(),o.renderBufferDirect(R,null,I,f,_,null)}function S(E,R,I,y){let T=null;const P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)T=P;else if(T=I.isPointLight===!0?c:a,o.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=T.uuid,F=R.uuid;let H=l[O];H===void 0&&(H={},l[O]=H);let V=H[F];V===void 0&&(V=T.clone(),H[F]=V,R.addEventListener("dispose",A)),T=V}if(T.visible=R.visible,T.wireframe=R.wireframe,y===zs?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const O=o.properties.get(T);O.light=I}return T}function M(E,R,I,y,T){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===zs)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const F=t.update(E),H=E.material;if(Array.isArray(H)){const V=F.groups;for(let X=0,G=V.length;X<G;X++){const J=V[X],ft=H[J.materialIndex];if(ft&&ft.visible){const lt=S(E,ft,y,T);E.onBeforeShadow(o,E,R,I,F,lt,J),o.renderBufferDirect(I,null,F,lt,E,J),E.onAfterShadow(o,E,R,I,F,lt,J)}}}else if(H.visible){const V=S(E,H,y,T);E.onBeforeShadow(o,E,R,I,F,V,null),o.renderBufferDirect(I,null,F,V,E,null),E.onAfterShadow(o,E,R,I,F,V,null)}}const O=E.children;for(let F=0,H=O.length;F<H;F++)M(O[F],R,I,y,T)}function A(E){E.target.removeEventListener("dispose",A);for(const I in l){const y=l[I],T=E.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const Mx={[va]:Ma,[ya]:ba,[Sa]:wa,[cs]:Ta,[Ma]:va,[ba]:ya,[wa]:Sa,[Ta]:cs};function yx(o,t){function e(){let L=!1;const dt=new xe;let it=null;const mt=new xe(0,0,0,0);return{setMask:function(tt){it!==tt&&!L&&(o.colorMask(tt,tt,tt,tt),it=tt)},setLocked:function(tt){L=tt},setClear:function(tt,Z,st,Ft,me){me===!0&&(tt*=Ft,Z*=Ft,st*=Ft),dt.set(tt,Z,st,Ft),mt.equals(dt)===!1&&(o.clearColor(tt,Z,st,Ft),mt.copy(dt))},reset:function(){L=!1,it=null,mt.set(-1,0,0,0)}}}function i(){let L=!1,dt=!1,it=null,mt=null,tt=null;return{setReversed:function(Z){if(dt!==Z){const st=t.get("EXT_clip_control");Z?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),dt=Z;const Ft=tt;tt=null,this.setClear(Ft)}},getReversed:function(){return dt},setTest:function(Z){Z?Q(o.DEPTH_TEST):_t(o.DEPTH_TEST)},setMask:function(Z){it!==Z&&!L&&(o.depthMask(Z),it=Z)},setFunc:function(Z){if(dt&&(Z=Mx[Z]),mt!==Z){switch(Z){case va:o.depthFunc(o.NEVER);break;case Ma:o.depthFunc(o.ALWAYS);break;case ya:o.depthFunc(o.LESS);break;case cs:o.depthFunc(o.LEQUAL);break;case Sa:o.depthFunc(o.EQUAL);break;case Ta:o.depthFunc(o.GEQUAL);break;case ba:o.depthFunc(o.GREATER);break;case wa:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}mt=Z}},setLocked:function(Z){L=Z},setClear:function(Z){tt!==Z&&(dt&&(Z=1-Z),o.clearDepth(Z),tt=Z)},reset:function(){L=!1,it=null,mt=null,tt=null,dt=!1}}}function n(){let L=!1,dt=null,it=null,mt=null,tt=null,Z=null,st=null,Ft=null,me=null;return{setTest:function(oe){L||(oe?Q(o.STENCIL_TEST):_t(o.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!L&&(o.stencilMask(oe),dt=oe)},setFunc:function(oe,wi,zi){(it!==oe||mt!==wi||tt!==zi)&&(o.stencilFunc(oe,wi,zi),it=oe,mt=wi,tt=zi)},setOp:function(oe,wi,zi){(Z!==oe||st!==wi||Ft!==zi)&&(o.stencilOp(oe,wi,zi),Z=oe,st=wi,Ft=zi)},setLocked:function(oe){L=oe},setClear:function(oe){me!==oe&&(o.clearStencil(oe),me=oe)},reset:function(){L=!1,dt=null,it=null,mt=null,tt=null,Z=null,st=null,Ft=null,me=null}}}const s=new e,r=new i,a=new n,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,S=null,M=null,A=null,E=null,R=new vt(0,0,0),I=0,y=!1,T=null,P=null,O=null,F=null,H=null;const V=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const J=o.getParameter(o.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=G>=2);let ft=null,lt={};const pt=o.getParameter(o.SCISSOR_BOX),Xt=o.getParameter(o.VIEWPORT),Gt=new xe().fromArray(pt),Se=new xe().fromArray(Xt);function _e(L,dt,it,mt){const tt=new Uint8Array(4),Z=o.createTexture();o.bindTexture(L,Z),o.texParameteri(L,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(L,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let st=0;st<it;st++)L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY?o.texImage3D(dt,0,o.RGBA,1,1,mt,0,o.RGBA,o.UNSIGNED_BYTE,tt):o.texImage2D(dt+st,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,tt);return Z}const j={};j[o.TEXTURE_2D]=_e(o.TEXTURE_2D,o.TEXTURE_2D,1),j[o.TEXTURE_CUBE_MAP]=_e(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[o.TEXTURE_2D_ARRAY]=_e(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),j[o.TEXTURE_3D]=_e(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Q(o.DEPTH_TEST),r.setFunc(cs),Ht(!1),Pe(Qc),Q(o.CULL_FACE),re(Di);function Q(L){h[L]!==!0&&(o.enable(L),h[L]=!0)}function _t(L){h[L]!==!1&&(o.disable(L),h[L]=!1)}function Bt(L,dt){return u[L]!==dt?(o.bindFramebuffer(L,dt),u[L]=dt,L===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=dt),L===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=dt),!0):!1}function yt(L,dt){let it=f,mt=!1;if(L){it=d.get(dt),it===void 0&&(it=[],d.set(dt,it));const tt=L.textures;if(it.length!==tt.length||it[0]!==o.COLOR_ATTACHMENT0){for(let Z=0,st=tt.length;Z<st;Z++)it[Z]=o.COLOR_ATTACHMENT0+Z;it.length=tt.length,mt=!0}}else it[0]!==o.BACK&&(it[0]=o.BACK,mt=!0);mt&&o.drawBuffers(it)}function Qt(L){return g!==L?(o.useProgram(L),g=L,!0):!1}const Be={[Cn]:o.FUNC_ADD,[ju]:o.FUNC_SUBTRACT,[Zu]:o.FUNC_REVERSE_SUBTRACT};Be[$u]=o.MIN,Be[Ju]=o.MAX;const Jt={[Qu]:o.ZERO,[td]:o.ONE,[ed]:o.SRC_COLOR,[_a]:o.SRC_ALPHA,[ad]:o.SRC_ALPHA_SATURATE,[rd]:o.DST_COLOR,[nd]:o.DST_ALPHA,[id]:o.ONE_MINUS_SRC_COLOR,[xa]:o.ONE_MINUS_SRC_ALPHA,[od]:o.ONE_MINUS_DST_COLOR,[sd]:o.ONE_MINUS_DST_ALPHA,[cd]:o.CONSTANT_COLOR,[ld]:o.ONE_MINUS_CONSTANT_COLOR,[hd]:o.CONSTANT_ALPHA,[ud]:o.ONE_MINUS_CONSTANT_ALPHA};function re(L,dt,it,mt,tt,Z,st,Ft,me,oe){if(L===Di){_===!0&&(_t(o.BLEND),_=!1);return}if(_===!1&&(Q(o.BLEND),_=!0),L!==Ku){if(L!==m||oe!==y){if((p!==Cn||M!==Cn)&&(o.blendEquation(o.FUNC_ADD),p=Cn,M=Cn),oe)switch(L){case rs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yi:o.blendFunc(o.ONE,o.ONE);break;case tl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case el:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Dt("WebGLState: Invalid blending: ",L);break}else switch(L){case rs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yi:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case tl:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",L);break}v=null,S=null,A=null,E=null,R.set(0,0,0),I=0,m=L,y=oe}return}tt=tt||dt,Z=Z||it,st=st||mt,(dt!==p||tt!==M)&&(o.blendEquationSeparate(Be[dt],Be[tt]),p=dt,M=tt),(it!==v||mt!==S||Z!==A||st!==E)&&(o.blendFuncSeparate(Jt[it],Jt[mt],Jt[Z],Jt[st]),v=it,S=mt,A=Z,E=st),(Ft.equals(R)===!1||me!==I)&&(o.blendColor(Ft.r,Ft.g,Ft.b,me),R.copy(Ft),I=me),m=L,y=!1}function de(L,dt){L.side===ue?_t(o.CULL_FACE):Q(o.CULL_FACE);let it=L.side===Je;dt&&(it=!it),Ht(it),L.blending===rs&&L.transparent===!1?re(Di):re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const mt=L.stencilWrite;a.setTest(mt),mt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(o.SAMPLE_ALPHA_TO_COVERAGE):_t(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){T!==L&&(L?o.frontFace(o.CW):o.frontFace(o.CCW),T=L)}function Pe(L){L!==qu?(Q(o.CULL_FACE),L!==P&&(L===Qc?o.cullFace(o.BACK):L===Yu?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):_t(o.CULL_FACE),P=L}function D(L){L!==O&&(X&&o.lineWidth(L),O=L)}function Ie(L,dt,it){L?(Q(o.POLYGON_OFFSET_FILL),(F!==dt||H!==it)&&(o.polygonOffset(dt,it),F=dt,H=it)):_t(o.POLYGON_OFFSET_FILL)}function ne(L){L?Q(o.SCISSOR_TEST):_t(o.SCISSOR_TEST)}function pe(L){L===void 0&&(L=o.TEXTURE0+V-1),ft!==L&&(o.activeTexture(L),ft=L)}function Tt(L,dt,it){it===void 0&&(ft===null?it=o.TEXTURE0+V-1:it=ft);let mt=lt[it];mt===void 0&&(mt={type:void 0,texture:void 0},lt[it]=mt),(mt.type!==L||mt.texture!==dt)&&(ft!==it&&(o.activeTexture(it),ft=it),o.bindTexture(L,dt||j[L]),mt.type=L,mt.texture=dt)}function C(){const L=lt[ft];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{o.compressedTexImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function N(){try{o.compressedTexImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function K(){try{o.texSubImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function $(){try{o.texSubImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function q(){try{o.compressedTexSubImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function At(){try{o.compressedTexSubImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function rt(){try{o.texStorage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function St(){try{o.texStorage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function Ut(){try{o.texImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function et(){try{o.texImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function at(L){Gt.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),Gt.copy(L))}function Mt(L){Se.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),Se.copy(L))}function bt(L,dt){let it=l.get(dt);it===void 0&&(it=new WeakMap,l.set(dt,it));let mt=it.get(L);mt===void 0&&(mt=o.getUniformBlockIndex(dt,L.name),it.set(L,mt))}function ot(L,dt){const mt=l.get(dt).get(L);c.get(dt)!==mt&&(o.uniformBlockBinding(dt,mt,L.__bindingPointIndex),c.set(dt,mt))}function Vt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},ft=null,lt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,S=null,M=null,A=null,E=null,R=new vt(0,0,0),I=0,y=!1,T=null,P=null,O=null,F=null,H=null,Gt.set(0,0,o.canvas.width,o.canvas.height),Se.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Q,disable:_t,bindFramebuffer:Bt,drawBuffers:yt,useProgram:Qt,setBlending:re,setMaterial:de,setFlipSided:Ht,setCullFace:Pe,setLineWidth:D,setPolygonOffset:Ie,setScissorTest:ne,activeTexture:pe,bindTexture:Tt,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Ut,texImage3D:et,updateUBOMapping:bt,uniformBlockBinding:ot,texStorage2D:rt,texStorage3D:St,texSubImage2D:K,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:At,scissor:at,viewport:Mt,reset:Vt}}function Sx(o,t,e,i,n,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return f?new OffscreenCanvas(C,x):ir("canvas")}function _(C,x,N){let K=1;const $=Tt(C);if(($.width>N||$.height>N)&&(K=N/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(K*$.width),At=Math.floor(K*$.height);u===void 0&&(u=g(q,At));const rt=x?g(q,At):u;return rt.width=q,rt.height=At,rt.getContext("2d").drawImage(C,0,0,q,At),Rt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+At+")."),rt}else return"data"in C&&Rt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){o.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?o.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function S(C,x,N,K,$=!1){if(C!==null){if(o[C]!==void 0)return o[C];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=x;if(x===o.RED&&(N===o.FLOAT&&(q=o.R32F),N===o.HALF_FLOAT&&(q=o.R16F),N===o.UNSIGNED_BYTE&&(q=o.R8)),x===o.RED_INTEGER&&(N===o.UNSIGNED_BYTE&&(q=o.R8UI),N===o.UNSIGNED_SHORT&&(q=o.R16UI),N===o.UNSIGNED_INT&&(q=o.R32UI),N===o.BYTE&&(q=o.R8I),N===o.SHORT&&(q=o.R16I),N===o.INT&&(q=o.R32I)),x===o.RG&&(N===o.FLOAT&&(q=o.RG32F),N===o.HALF_FLOAT&&(q=o.RG16F),N===o.UNSIGNED_BYTE&&(q=o.RG8)),x===o.RG_INTEGER&&(N===o.UNSIGNED_BYTE&&(q=o.RG8UI),N===o.UNSIGNED_SHORT&&(q=o.RG16UI),N===o.UNSIGNED_INT&&(q=o.RG32UI),N===o.BYTE&&(q=o.RG8I),N===o.SHORT&&(q=o.RG16I),N===o.INT&&(q=o.RG32I)),x===o.RGB_INTEGER&&(N===o.UNSIGNED_BYTE&&(q=o.RGB8UI),N===o.UNSIGNED_SHORT&&(q=o.RGB16UI),N===o.UNSIGNED_INT&&(q=o.RGB32UI),N===o.BYTE&&(q=o.RGB8I),N===o.SHORT&&(q=o.RGB16I),N===o.INT&&(q=o.RGB32I)),x===o.RGBA_INTEGER&&(N===o.UNSIGNED_BYTE&&(q=o.RGBA8UI),N===o.UNSIGNED_SHORT&&(q=o.RGBA16UI),N===o.UNSIGNED_INT&&(q=o.RGBA32UI),N===o.BYTE&&(q=o.RGBA8I),N===o.SHORT&&(q=o.RGBA16I),N===o.INT&&(q=o.RGBA32I)),x===o.RGB&&(N===o.UNSIGNED_INT_5_9_9_9_REV&&(q=o.RGB9_E5),N===o.UNSIGNED_INT_10F_11F_11F_REV&&(q=o.R11F_G11F_B10F)),x===o.RGBA){const At=$?co:jt.getTransfer(K);N===o.FLOAT&&(q=o.RGBA32F),N===o.HALF_FLOAT&&(q=o.RGBA16F),N===o.UNSIGNED_BYTE&&(q=At===ce?o.SRGB8_ALPHA8:o.RGBA8),N===o.UNSIGNED_SHORT_4_4_4_4&&(q=o.RGBA4),N===o.UNSIGNED_SHORT_5_5_5_1&&(q=o.RGB5_A1)}return(q===o.R16F||q===o.R32F||q===o.RG16F||q===o.RG32F||q===o.RGBA16F||q===o.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(C,x){let N;return C?x===null||x===Ui||x===Qs?N=o.DEPTH24_STENCIL8:x===pi?N=o.DEPTH32F_STENCIL8:x===Js&&(N=o.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ui||x===Qs?N=o.DEPTH_COMPONENT24:x===pi?N=o.DEPTH_COMPONENT32F:x===Js&&(N=o.DEPTH_COMPONENT16),N}function A(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ne&&C.minFilter!==Re?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function E(C){const x=C.target;x.removeEventListener("dispose",E),I(x),x.isVideoTexture&&h.delete(x)}function R(C){const x=C.target;x.removeEventListener("dispose",R),T(x)}function I(C){const x=i.get(C);if(x.__webglInit===void 0)return;const N=C.source,K=d.get(N);if(K){const $=K[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(C),Object.keys(K).length===0&&d.delete(N)}i.remove(C)}function y(C){const x=i.get(C);o.deleteTexture(x.__webglTexture);const N=C.source,K=d.get(N);delete K[x.__cacheKey],r.memory.textures--}function T(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let $=0;$<x.__webglFramebuffer[K].length;$++)o.deleteFramebuffer(x.__webglFramebuffer[K][$]);else o.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&o.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)o.deleteFramebuffer(x.__webglFramebuffer[K]);else o.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&o.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&o.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&o.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&o.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=C.textures;for(let K=0,$=N.length;K<$;K++){const q=i.get(N[K]);q.__webglTexture&&(o.deleteTexture(q.__webglTexture),r.memory.textures--),i.remove(N[K])}i.remove(C)}let P=0;function O(){P=0}function F(){const C=P;return C>=n.maxTextures&&Rt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),P+=1,C}function H(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function V(C,x){const N=i.get(C);if(C.isVideoTexture&&ne(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const K=C.image;if(K===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,C,x);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,N.__webglTexture,o.TEXTURE0+x)}function X(C,x){const N=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){j(N,C,x);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(o.TEXTURE_2D_ARRAY,N.__webglTexture,o.TEXTURE0+x)}function G(C,x){const N=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){j(N,C,x);return}e.bindTexture(o.TEXTURE_3D,N.__webglTexture,o.TEXTURE0+x)}function J(C,x){const N=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){Q(N,C,x);return}e.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+x)}const ft={[Ni]:o.REPEAT,[Pi]:o.CLAMP_TO_EDGE,[oo]:o.MIRRORED_REPEAT},lt={[Ne]:o.NEAREST,[Oh]:o.NEAREST_MIPMAP_NEAREST,[Gs]:o.NEAREST_MIPMAP_LINEAR,[Re]:o.LINEAR,[Qr]:o.LINEAR_MIPMAP_NEAREST,[Ki]:o.LINEAR_MIPMAP_LINEAR},pt={[Md]:o.NEVER,[wd]:o.ALWAYS,[yd]:o.LESS,[Ec]:o.LEQUAL,[Sd]:o.EQUAL,[Cc]:o.GEQUAL,[Td]:o.GREATER,[bd]:o.NOTEQUAL};function Xt(C,x){if(x.type===pi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Re||x.magFilter===Qr||x.magFilter===Gs||x.magFilter===Ki||x.minFilter===Re||x.minFilter===Qr||x.minFilter===Gs||x.minFilter===Ki)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,ft[x.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,ft[x.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,ft[x.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,lt[x.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ne||x.minFilter!==Gs&&x.minFilter!==Ki||x.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");o.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Gt(C,x){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",E));const K=x.source;let $=d.get(K);$===void 0&&($={},d.set(K,$));const q=H(x);if(q!==C.__cacheKey){$[q]===void 0&&($[q]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,N=!0),$[q].usedTimes++;const At=$[C.__cacheKey];At!==void 0&&($[C.__cacheKey].usedTimes--,At.usedTimes===0&&y(x)),C.__cacheKey=q,C.__webglTexture=$[q].texture}return N}function Se(C,x,N){return Math.floor(Math.floor(C/N)/x)}function _e(C,x,N,K){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,x.width,x.height,N,K,x.data);else{q.sort((et,at)=>et.start-at.start);let At=0;for(let et=1;et<q.length;et++){const at=q[At],Mt=q[et],bt=at.start+at.count,ot=Se(Mt.start,x.width,4),Vt=Se(at.start,x.width,4);Mt.start<=bt+1&&ot===Vt&&Se(Mt.start+Mt.count-1,x.width,4)===ot?at.count=Math.max(at.count,Mt.start+Mt.count-at.start):(++At,q[At]=Mt)}q.length=At+1;const rt=o.getParameter(o.UNPACK_ROW_LENGTH),St=o.getParameter(o.UNPACK_SKIP_PIXELS),Ut=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,x.width);for(let et=0,at=q.length;et<at;et++){const Mt=q[et],bt=Math.floor(Mt.start/4),ot=Math.ceil(Mt.count/4),Vt=bt%x.width,L=Math.floor(bt/x.width),dt=ot,it=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Vt),o.pixelStorei(o.UNPACK_SKIP_ROWS,L),e.texSubImage2D(o.TEXTURE_2D,0,Vt,L,dt,it,N,K,x.data)}C.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,St),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ut)}}function j(C,x,N){let K=o.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=o.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=o.TEXTURE_3D);const $=Gt(C,x),q=x.source;e.bindTexture(K,C.__webglTexture,o.TEXTURE0+N);const At=i.get(q);if(q.version!==At.__version||$===!0){e.activeTexture(o.TEXTURE0+N);const rt=jt.getPrimaries(jt.workingColorSpace),St=x.colorSpace===ln?null:jt.getPrimaries(x.colorSpace),Ut=x.colorSpace===ln||rt===St?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,x.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,x.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let et=_(x.image,!1,n.maxTextureSize);et=pe(x,et);const at=s.convert(x.format,x.colorSpace),Mt=s.convert(x.type);let bt=S(x.internalFormat,at,Mt,x.colorSpace,x.isVideoTexture);Xt(K,x);let ot;const Vt=x.mipmaps,L=x.isVideoTexture!==!0,dt=At.__version===void 0||$===!0,it=q.dataReady,mt=A(x,et);if(x.isDepthTexture)bt=M(x.format===Pn,x.type),dt&&(L?e.texStorage2D(o.TEXTURE_2D,1,bt,et.width,et.height):e.texImage2D(o.TEXTURE_2D,0,bt,et.width,et.height,0,at,Mt,null));else if(x.isDataTexture)if(Vt.length>0){L&&dt&&e.texStorage2D(o.TEXTURE_2D,mt,bt,Vt[0].width,Vt[0].height);for(let tt=0,Z=Vt.length;tt<Z;tt++)ot=Vt[tt],L?it&&e.texSubImage2D(o.TEXTURE_2D,tt,0,0,ot.width,ot.height,at,Mt,ot.data):e.texImage2D(o.TEXTURE_2D,tt,bt,ot.width,ot.height,0,at,Mt,ot.data);x.generateMipmaps=!1}else L?(dt&&e.texStorage2D(o.TEXTURE_2D,mt,bt,et.width,et.height),it&&_e(x,et,at,Mt)):e.texImage2D(o.TEXTURE_2D,0,bt,et.width,et.height,0,at,Mt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&dt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,mt,bt,Vt[0].width,Vt[0].height,et.depth);for(let tt=0,Z=Vt.length;tt<Z;tt++)if(ot=Vt[tt],x.format!==ai)if(at!==null)if(L){if(it)if(x.layerUpdates.size>0){const st=Kl(ot.width,ot.height,x.format,x.type);for(const Ft of x.layerUpdates){const me=ot.data.subarray(Ft*st/ot.data.BYTES_PER_ELEMENT,(Ft+1)*st/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,Ft,ot.width,ot.height,1,at,me)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,0,ot.width,ot.height,et.depth,at,ot.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,tt,bt,ot.width,ot.height,et.depth,0,ot.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?it&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,0,ot.width,ot.height,et.depth,at,Mt,ot.data):e.texImage3D(o.TEXTURE_2D_ARRAY,tt,bt,ot.width,ot.height,et.depth,0,at,Mt,ot.data)}else{L&&dt&&e.texStorage2D(o.TEXTURE_2D,mt,bt,Vt[0].width,Vt[0].height);for(let tt=0,Z=Vt.length;tt<Z;tt++)ot=Vt[tt],x.format!==ai?at!==null?L?it&&e.compressedTexSubImage2D(o.TEXTURE_2D,tt,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(o.TEXTURE_2D,tt,bt,ot.width,ot.height,0,ot.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?it&&e.texSubImage2D(o.TEXTURE_2D,tt,0,0,ot.width,ot.height,at,Mt,ot.data):e.texImage2D(o.TEXTURE_2D,tt,bt,ot.width,ot.height,0,at,Mt,ot.data)}else if(x.isDataArrayTexture)if(L){if(dt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,mt,bt,et.width,et.height,et.depth),it)if(x.layerUpdates.size>0){const tt=Kl(et.width,et.height,x.format,x.type);for(const Z of x.layerUpdates){const st=et.data.subarray(Z*tt/et.data.BYTES_PER_ELEMENT,(Z+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,at,Mt,st)}x.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,at,Mt,et.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,bt,et.width,et.height,et.depth,0,at,Mt,et.data);else if(x.isData3DTexture)L?(dt&&e.texStorage3D(o.TEXTURE_3D,mt,bt,et.width,et.height,et.depth),it&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,at,Mt,et.data)):e.texImage3D(o.TEXTURE_3D,0,bt,et.width,et.height,et.depth,0,at,Mt,et.data);else if(x.isFramebufferTexture){if(dt)if(L)e.texStorage2D(o.TEXTURE_2D,mt,bt,et.width,et.height);else{let tt=et.width,Z=et.height;for(let st=0;st<mt;st++)e.texImage2D(o.TEXTURE_2D,st,bt,tt,Z,0,at,Mt,null),tt>>=1,Z>>=1}}else if(Vt.length>0){if(L&&dt){const tt=Tt(Vt[0]);e.texStorage2D(o.TEXTURE_2D,mt,bt,tt.width,tt.height)}for(let tt=0,Z=Vt.length;tt<Z;tt++)ot=Vt[tt],L?it&&e.texSubImage2D(o.TEXTURE_2D,tt,0,0,at,Mt,ot):e.texImage2D(o.TEXTURE_2D,tt,bt,at,Mt,ot);x.generateMipmaps=!1}else if(L){if(dt){const tt=Tt(et);e.texStorage2D(o.TEXTURE_2D,mt,bt,tt.width,tt.height)}it&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,at,Mt,et)}else e.texImage2D(o.TEXTURE_2D,0,bt,at,Mt,et);m(x)&&p(K),At.__version=q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Q(C,x,N){if(x.image.length!==6)return;const K=Gt(C,x),$=x.source;e.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+N);const q=i.get($);if($.version!==q.__version||K===!0){e.activeTexture(o.TEXTURE0+N);const At=jt.getPrimaries(jt.workingColorSpace),rt=x.colorSpace===ln?null:jt.getPrimaries(x.colorSpace),St=x.colorSpace===ln||At===rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,x.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,x.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Ut=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,at=[];for(let Z=0;Z<6;Z++)!Ut&&!et?at[Z]=_(x.image[Z],!0,n.maxCubemapSize):at[Z]=et?x.image[Z].image:x.image[Z],at[Z]=pe(x,at[Z]);const Mt=at[0],bt=s.convert(x.format,x.colorSpace),ot=s.convert(x.type),Vt=S(x.internalFormat,bt,ot,x.colorSpace),L=x.isVideoTexture!==!0,dt=q.__version===void 0||K===!0,it=$.dataReady;let mt=A(x,Mt);Xt(o.TEXTURE_CUBE_MAP,x);let tt;if(Ut){L&&dt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,mt,Vt,Mt.width,Mt.height);for(let Z=0;Z<6;Z++){tt=at[Z].mipmaps;for(let st=0;st<tt.length;st++){const Ft=tt[st];x.format!==ai?bt!==null?L?it&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,0,0,Ft.width,Ft.height,bt,Ft.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,Vt,Ft.width,Ft.height,0,Ft.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?it&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,0,0,Ft.width,Ft.height,bt,ot,Ft.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,Vt,Ft.width,Ft.height,0,bt,ot,Ft.data)}}}else{if(tt=x.mipmaps,L&&dt){tt.length>0&&mt++;const Z=Tt(at[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,mt,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){L?it&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,at[Z].width,at[Z].height,bt,ot,at[Z].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,at[Z].width,at[Z].height,0,bt,ot,at[Z].data);for(let st=0;st<tt.length;st++){const me=tt[st].image[Z].image;L?it&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,0,0,me.width,me.height,bt,ot,me.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,Vt,me.width,me.height,0,bt,ot,me.data)}}else{L?it&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt,ot,at[Z]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,bt,ot,at[Z]);for(let st=0;st<tt.length;st++){const Ft=tt[st];L?it&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,0,0,bt,ot,Ft.image[Z]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,Vt,bt,ot,Ft.image[Z])}}}m(x)&&p(o.TEXTURE_CUBE_MAP),q.__version=$.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function _t(C,x,N,K,$,q){const At=s.convert(N.format,N.colorSpace),rt=s.convert(N.type),St=S(N.internalFormat,At,rt,N.colorSpace),Ut=i.get(x),et=i.get(N);if(et.__renderTarget=x,!Ut.__hasExternalTextures){const at=Math.max(1,x.width>>q),Mt=Math.max(1,x.height>>q);$===o.TEXTURE_3D||$===o.TEXTURE_2D_ARRAY?e.texImage3D($,q,St,at,Mt,x.depth,0,At,rt,null):e.texImage2D($,q,St,at,Mt,0,At,rt,null)}e.bindFramebuffer(o.FRAMEBUFFER,C),Ie(x)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,K,$,et.__webglTexture,0,D(x)):($===o.TEXTURE_2D||$>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,K,$,et.__webglTexture,q),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(C,x,N){if(o.bindRenderbuffer(o.RENDERBUFFER,C),x.depthBuffer){const K=x.depthTexture,$=K&&K.isDepthTexture?K.type:null,q=M(x.stencilBuffer,$),At=x.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ie(x)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,D(x),q,x.width,x.height):N?o.renderbufferStorageMultisample(o.RENDERBUFFER,D(x),q,x.width,x.height):o.renderbufferStorage(o.RENDERBUFFER,q,x.width,x.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,C)}else{const K=x.textures;for(let $=0;$<K.length;$++){const q=K[$],At=s.convert(q.format,q.colorSpace),rt=s.convert(q.type),St=S(q.internalFormat,At,rt,q.colorSpace);Ie(x)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,D(x),St,x.width,x.height):N?o.renderbufferStorageMultisample(o.RENDERBUFFER,D(x),St,x.width,x.height):o.renderbufferStorage(o.RENDERBUFFER,St,x.width,x.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function yt(C,x,N){const K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(o.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=o.createTexture(),e.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture),Xt(o.TEXTURE_CUBE_MAP,x.depthTexture);const Ut=s.convert(x.depthTexture.format),et=s.convert(x.depthTexture.type);let at;x.depthTexture.format===Qi?at=o.DEPTH_COMPONENT24:x.depthTexture.format===Pn&&(at=o.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,at,x.width,x.height,0,Ut,et,null)}}else V(x.depthTexture,0);const q=$.__webglTexture,At=D(x),rt=K?o.TEXTURE_CUBE_MAP_POSITIVE_X+N:o.TEXTURE_2D,St=x.depthTexture.format===Pn?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(x.depthTexture.format===Qi)Ie(x)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,rt,q,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,St,rt,q,0);else if(x.depthTexture.format===Pn)Ie(x)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,rt,q,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,St,rt,q,0);else throw new Error("Unknown depthTexture format")}function Qt(C){const x=i.get(C),N=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=K}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let K=0;K<6;K++)yt(x.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?yt(x.__webglFramebuffer[0],C,0):yt(x.__webglFramebuffer,C,0)}else if(N){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(o.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=o.createRenderbuffer(),Bt(x.__webglDepthbuffer[K],C,!1);else{const $=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[K];o.bindRenderbuffer(o.RENDERBUFFER,q),o.framebufferRenderbuffer(o.FRAMEBUFFER,$,o.RENDERBUFFER,q)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(o.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=o.createRenderbuffer(),Bt(x.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,q),o.framebufferRenderbuffer(o.FRAMEBUFFER,$,o.RENDERBUFFER,q)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function Be(C,x,N){const K=i.get(C);x!==void 0&&_t(K.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),N!==void 0&&Qt(C)}function Jt(C){const x=C.texture,N=i.get(C),K=i.get(x);C.addEventListener("dispose",R);const $=C.textures,q=C.isWebGLCubeRenderTarget===!0,At=$.length>1;if(At||(K.__webglTexture===void 0&&(K.__webglTexture=o.createTexture()),K.__version=x.version,r.memory.textures++),q){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let St=0;St<x.mipmaps.length;St++)N.__webglFramebuffer[rt][St]=o.createFramebuffer()}else N.__webglFramebuffer[rt]=o.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)N.__webglFramebuffer[rt]=o.createFramebuffer()}else N.__webglFramebuffer=o.createFramebuffer();if(At)for(let rt=0,St=$.length;rt<St;rt++){const Ut=i.get($[rt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=o.createTexture(),r.memory.textures++)}if(C.samples>0&&Ie(C)===!1){N.__webglMultisampledFramebuffer=o.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<$.length;rt++){const St=$[rt];N.__webglColorRenderbuffer[rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);const Ut=s.convert(St.format,St.colorSpace),et=s.convert(St.type),at=S(St.internalFormat,Ut,et,St.colorSpace,C.isXRRenderTarget===!0),Mt=D(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,Mt,at,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+rt,o.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=o.createRenderbuffer(),Bt(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(q){e.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture),Xt(o.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)_t(N.__webglFramebuffer[rt][St],C,x,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St);else _t(N.__webglFramebuffer[rt],C,x,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(x)&&p(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let rt=0,St=$.length;rt<St;rt++){const Ut=$[rt],et=i.get(Ut);let at=o.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(at,et.__webglTexture),Xt(at,Ut),_t(N.__webglFramebuffer,C,Ut,o.COLOR_ATTACHMENT0+rt,at,0),m(Ut)&&p(at)}e.unbindTexture()}else{let rt=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),Xt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)_t(N.__webglFramebuffer[St],C,x,o.COLOR_ATTACHMENT0,rt,St);else _t(N.__webglFramebuffer,C,x,o.COLOR_ATTACHMENT0,rt,0);m(x)&&p(rt),e.unbindTexture()}C.depthBuffer&&Qt(C)}function re(C){const x=C.textures;for(let N=0,K=x.length;N<K;N++){const $=x[N];if(m($)){const q=v(C),At=i.get($).__webglTexture;e.bindTexture(q,At),p(q),e.unbindTexture()}}}const de=[],Ht=[];function Pe(C){if(C.samples>0){if(Ie(C)===!1){const x=C.textures,N=C.width,K=C.height;let $=o.COLOR_BUFFER_BIT;const q=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=i.get(C),rt=x.length>1;if(rt)for(let Ut=0;Ut<x.length;Ut++)e.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const St=C.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Ut=0;Ut<x.length;Ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=o.STENCIL_BUFFER_BIT)),rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,At.__webglColorRenderbuffer[Ut]);const et=i.get(x[Ut]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,et,0)}o.blitFramebuffer(0,0,N,K,0,0,N,K,$,o.NEAREST),c===!0&&(de.length=0,Ht.length=0,de.push(o.COLOR_ATTACHMENT0+Ut),C.depthBuffer&&C.resolveDepthBuffer===!1&&(de.push(q),Ht.push(q),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),rt)for(let Ut=0;Ut<x.length;Ut++){e.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,At.__webglColorRenderbuffer[Ut]);const et=i.get(x[Ut]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,et,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const x=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[x])}}}function D(C){return Math.min(n.maxSamples,C.samples)}function Ie(C){const x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(C){const x=r.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function pe(C,x){const N=C.colorSpace,K=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Xe&&N!==ln&&(jt.getTransfer(N)===ce?(K!==ai||$!==oi)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",N)),x}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=Be,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Tx(o,t){function e(i,n=ln){let s;const r=jt.getTransfer(n);if(i===oi)return o.UNSIGNED_BYTE;if(i===Mc)return o.UNSIGNED_SHORT_4_4_4_4;if(i===yc)return o.UNSIGNED_SHORT_5_5_5_1;if(i===kh)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fh)return o.BYTE;if(i===Bh)return o.SHORT;if(i===Js)return o.UNSIGNED_SHORT;if(i===vc)return o.INT;if(i===Ui)return o.UNSIGNED_INT;if(i===pi)return o.FLOAT;if(i===ci)return o.HALF_FLOAT;if(i===Gh)return o.ALPHA;if(i===Hh)return o.RGB;if(i===ai)return o.RGBA;if(i===Qi)return o.DEPTH_COMPONENT;if(i===Pn)return o.DEPTH_STENCIL;if(i===Sc)return o.RED;if(i===Tc)return o.RED_INTEGER;if(i===hs)return o.RG;if(i===bc)return o.RG_INTEGER;if(i===wc)return o.RGBA_INTEGER;if(i===to||i===eo||i===io||i===no)if(r===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===to)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===to)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ca||i===Ra||i===Pa||i===Ia)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ra)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Da||i===La||i===Na||i===Ua||i===Oa||i===Fa||i===Ba)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Da||i===La)return r===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Na)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ua)return s.COMPRESSED_R11_EAC;if(i===Oa)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fa)return s.COMPRESSED_RG11_EAC;if(i===Ba)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ka||i===za||i===Ga||i===Ha||i===Va||i===Wa||i===Xa||i===qa||i===Ya||i===Ka||i===ja||i===Za||i===$a||i===Ja)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ka)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===za)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ga)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ha)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Va)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wa)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xa)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qa)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ya)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ka)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ja)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Za)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$a)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ja)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qa||i===tc||i===ec)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Qa)return r===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ic||i===nc||i===sc||i===rc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ic)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:e}}const bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
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

}`;class Ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new lu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ge({vertexShader:bx,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new $e(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ex extends Nn{constructor(t,e){super();const i=this;let n=null,s=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ax,p={},v=e.getContextAttributes();let S=null,M=null;const A=[],E=[],R=new nt;let I=null;const y=new je;y.viewport=new xe;const T=new je;T.viewport=new xe;const P=[y,T],O=new wp;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=A[j];return Q===void 0&&(Q=new jo,A[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=A[j];return Q===void 0&&(Q=new jo,A[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=A[j];return Q===void 0&&(Q=new jo,A[j]=Q),Q.getHandSpace()};function V(j){const Q=E.indexOf(j.inputSource);if(Q===-1)return;const _t=A[Q];_t!==void 0&&(_t.update(j.inputSource,j.frame,l||r),_t.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",G);for(let j=0;j<A.length;j++){const Q=E[j];Q!==null&&(E[j]=null,A[j].disconnect(Q))}F=null,H=null,m.reset();for(const j in p)delete p[j];t.setRenderTarget(S),f=null,d=null,u=null,n=null,M=null,_e.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(S=t.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",X),n.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Bt=null,yt=null;v.depth&&(yt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?Pn:Qi,Bt=v.stencil?Qs:Ui);const Qt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Qt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Qe(d.textureWidth,d.textureHeight,{format:ai,type:oi,depthTexture:new sr(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,_t),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Qe(f.framebufferWidth,f.framebufferHeight,{format:ai,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await n.requestReferenceSpace(a),_e.setContext(n),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(j){for(let Q=0;Q<j.removed.length;Q++){const _t=j.removed[Q],Bt=E.indexOf(_t);Bt>=0&&(E[Bt]=null,A[Bt].disconnect(_t))}for(let Q=0;Q<j.added.length;Q++){const _t=j.added[Q];let Bt=E.indexOf(_t);if(Bt===-1){for(let Qt=0;Qt<A.length;Qt++)if(Qt>=E.length){E.push(_t),Bt=Qt;break}else if(E[Qt]===null){E[Qt]=_t,Bt=Qt;break}if(Bt===-1)break}const yt=A[Bt];yt&&yt.connect(_t)}}const J=new b,ft=new b;function lt(j,Q,_t){J.setFromMatrixPosition(Q.matrixWorld),ft.setFromMatrixPosition(_t.matrixWorld);const Bt=J.distanceTo(ft),yt=Q.projectionMatrix.elements,Qt=_t.projectionMatrix.elements,Be=yt[14]/(yt[10]-1),Jt=yt[14]/(yt[10]+1),re=(yt[9]+1)/yt[5],de=(yt[9]-1)/yt[5],Ht=(yt[8]-1)/yt[0],Pe=(Qt[8]+1)/Qt[0],D=Be*Ht,Ie=Be*Pe,ne=Bt/(-Ht+Pe),pe=ne*-Ht;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(pe),j.translateZ(ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),yt[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Tt=Be+ne,C=Jt+ne,x=D-pe,N=Ie+(Bt-pe),K=re*Jt/C*Tt,$=de*Jt/C*Tt;j.projectionMatrix.makePerspective(x,N,K,$,Tt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function pt(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let Q=j.near,_t=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),O.near=T.near=y.near=Q,O.far=T.far=y.far=_t,(F!==O.near||H!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),F=O.near,H=O.far),O.layers.mask=j.layers.mask|6,y.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;const Bt=j.parent,yt=O.cameras;pt(O,Bt);for(let Qt=0;Qt<yt.length;Qt++)pt(yt[Qt],Bt);yt.length===2?lt(O,y,T):O.projectionMatrix.copy(y.projectionMatrix),Xt(j,O,Bt)};function Xt(j,Q,_t){_t===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(_t.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=us*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return p[j]};let Gt=null;function Se(j,Q){if(h=Q.getViewerPose(l||r),g=Q,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Bt=!1;_t.length!==O.cameras.length&&(O.cameras.length=0,Bt=!0);for(let Jt=0;Jt<_t.length;Jt++){const re=_t[Jt];let de=null;if(f!==null)de=f.getViewport(re);else{const Pe=u.getViewSubImage(d,re);de=Pe.viewport,Jt===0&&(t.setRenderTargetTextures(M,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(M))}let Ht=P[Jt];Ht===void 0&&(Ht=new je,Ht.layers.enable(Jt),Ht.viewport=new xe,P[Jt]=Ht),Ht.matrix.fromArray(re.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(re.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(de.x,de.y,de.width,de.height),Jt===0&&(O.matrix.copy(Ht.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Bt===!0&&O.cameras.push(Ht)}const yt=n.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const Jt=u.getDepthInformation(_t[0]);Jt&&Jt.isValid&&Jt.texture&&m.init(Jt,n.renderState)}if(yt&&yt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let Jt=0;Jt<_t.length;Jt++){const re=_t[Jt].camera;if(re){let de=p[re];de||(de=new lu,p[re]=de);const Ht=u.getCameraImage(re);de.sourceTexture=Ht}}}}for(let _t=0;_t<A.length;_t++){const Bt=E[_t],yt=A[_t];Bt!==null&&yt!==void 0&&yt.update(Bt,Q,l||r)}Gt&&Gt(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const _e=new Au;_e.setAnimationLoop(Se),this.setAnimationLoop=function(j){Gt=j},this.dispose=function(){}}}const Sn=new Oi,Cx=new Ot;function Rx(o,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qh(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),S=v.envMap,M=v.envMapRotation;S&&(m.envMap.value=S,Sn.copy(M),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),m.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(Sn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Px(o,t,e,i){let n={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){const M=S.program;i.uniformBlockBinding(v,M)}function l(v,S){let M=n[v.id];M===void 0&&(g(v),M=h(v),n[v.id]=M,v.addEventListener("dispose",m));const A=S.program;i.updateUBOMapping(v,A);const E=t.render.frame;s[v.id]!==E&&(d(v),s[v.id]=E)}function h(v){const S=u();v.__bindingPointIndex=S;const M=o.createBuffer(),A=v.__size,E=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,M),o.bufferData(o.UNIFORM_BUFFER,A,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,S,M),M}function u(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const S=n[v.id],M=v.uniforms,A=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,S);for(let E=0,R=M.length;E<R;E++){const I=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,T=I.length;y<T;y++){const P=I[y];if(f(P,E,y,A)===!0){const O=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let V=0;V<F.length;V++){const X=F[V],G=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,O+H,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,O,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,S,M,A){const E=v.value,R=S+"_"+M;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{const I=A[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(v){const S=v.uniforms;let M=0;const A=16;for(let R=0,I=S.length;R<I;R++){const y=Array.isArray(S[R])?S[R]:[S[R]];for(let T=0,P=y.length;T<P;T++){const O=y[T],F=Array.isArray(O.value)?O.value:[O.value];for(let H=0,V=F.length;H<V;H++){const X=F[H],G=_(X),J=M%A,ft=J%G.boundary,lt=J+ft;M+=ft,lt!==0&&A-lt<G.storage&&(M+=A-lt),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=G.storage}}}const E=M%A;return E>0&&(M+=A-E),v.__size=M,v.__cache={},this}function _(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Rt("WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const M=r.indexOf(S.__bindingPointIndex);r.splice(M,1),o.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function p(){for(const v in n)o.deleteBuffer(n[v]);r=[],n={},s={}}return{bind:c,update:l,dispose:p}}const Ix=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function Dx(){return Ai===null&&(Ai=new Dc(Ix,16,16,hs,ci),Ai.name="DFG_LUT",Ai.minFilter=Re,Ai.magFilter=Re,Ai.wrapS=Pi,Ai.wrapT=Pi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class Lx{constructor(t={}){const{canvas:e=Ed(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=oi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const _=f,m=new Set([wc,bc,Tc]),p=new Set([oi,Ui,Js,Qs,Mc,yc]),v=new Uint32Array(4),S=new Int32Array(4);let M=null,A=null;const E=[],R=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let T=!1;this._outputColorSpace=Te;let P=0,O=0,F=null,H=-1,V=null;const X=new xe,G=new xe;let J=null;const ft=new vt(0);let lt=0,pt=e.width,Xt=e.height,Gt=1,Se=null,_e=null;const j=new xe(0,0,pt,Xt),Q=new xe(0,0,pt,Xt);let _t=!1;const Bt=new Nc;let yt=!1,Qt=!1;const Be=new Ot,Jt=new b,re=new xe,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function Pe(){return F===null?Gt:1}let D=i;function Ie(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_c}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",oe,!1),D===null){const U="webgl2";if(D=Ie(U,w),D===null)throw Ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Dt("WebGLRenderer: "+w.message),w}let ne,pe,Tt,C,x,N,K,$,q,At,rt,St,Ut,et,at,Mt,bt,ot,Vt,L,dt,it,mt,tt;function Z(){ne=new D0(D),ne.init(),it=new Tx(D,ne),pe=new T0(D,ne,t,it),Tt=new yx(D,ne),pe.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),C=new U0(D),x=new ox,N=new Sx(D,ne,Tt,x,pe,it,C),K=new w0(y),$=new I0(y),q=new kp(D),mt=new y0(D,q),At=new L0(D,q,C,mt),rt=new F0(D,At,q,C),Vt=new O0(D,pe,N),Mt=new b0(x),St=new rx(y,K,$,ne,pe,mt,Mt),Ut=new Rx(y,x),et=new cx,at=new px(ne),ot=new M0(y,K,$,Tt,rt,g,c),bt=new vx(y,rt,pe),tt=new Px(D,C,pe,Tt),L=new S0(D,ne,C),dt=new N0(D,ne,C),C.programs=St.programs,y.capabilities=pe,y.extensions=ne,y.properties=x,y.renderLists=et,y.shadowMap=bt,y.state=Tt,y.info=C}Z(),_!==oi&&(I=new k0(_,e.width,e.height,n,s));const st=new Ex(y,D);this.xr=st,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Gt},this.setPixelRatio=function(w){w!==void 0&&(Gt=w,this.setSize(pt,Xt,!1))},this.getSize=function(w){return w.set(pt,Xt)},this.setSize=function(w,U,z=!0){if(st.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=w,Xt=U,e.width=Math.floor(w*Gt),e.height=Math.floor(U*Gt),z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(pt*Gt,Xt*Gt).floor()},this.setDrawingBufferSize=function(w,U,z){pt=w,Xt=U,Gt=z,e.width=Math.floor(w*z),e.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(_===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(X)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,U,z,k){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,U,z,k),Tt.viewport(X.copy(j).multiplyScalar(Gt).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,U,z,k){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,U,z,k),Tt.scissor(G.copy(Q).multiplyScalar(Gt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(w){Tt.setScissorTest(_t=w)},this.setOpaqueSort=function(w){Se=w},this.setTransparentSort=function(w){_e=w},this.getClearColor=function(w){return w.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,z=!0){let k=0;if(w){let B=!1;if(F!==null){const ct=F.texture.format;B=m.has(ct)}if(B){const ct=F.texture.type,gt=p.has(ct),ut=ot.getClearColor(),xt=ot.getClearAlpha(),Et=ut.r,Lt=ut.g,Pt=ut.b;gt?(v[0]=Et,v[1]=Lt,v[2]=Pt,v[3]=xt,D.clearBufferuiv(D.COLOR,0,v)):(S[0]=Et,S[1]=Lt,S[2]=Pt,S[3]=xt,D.clearBufferiv(D.COLOR,0,S))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),z&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",oe,!1),ot.dispose(),et.dispose(),at.dispose(),x.dispose(),K.dispose(),$.dispose(),rt.dispose(),mt.dispose(),tt.dispose(),St.dispose(),st.dispose(),st.removeEventListener("sessionstart",qc),st.removeEventListener("sessionend",Yc),mn.stop()};function Ft(w){w.preventDefault(),ho("WebGLRenderer: Context Lost."),T=!0}function me(){ho("WebGLRenderer: Context Restored."),T=!1;const w=C.autoReset,U=bt.enabled,z=bt.autoUpdate,k=bt.needsUpdate,B=bt.type;Z(),C.autoReset=w,bt.enabled=U,bt.autoUpdate=z,bt.needsUpdate=k,bt.type=B}function oe(w){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function wi(w){const U=w.target;U.removeEventListener("dispose",wi),zi(U)}function zi(w){Bu(w),x.remove(w)}function Bu(w){const U=x.get(w).programs;U!==void 0&&(U.forEach(function(z){St.releaseProgram(z)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,k,B,ct){U===null&&(U=de);const gt=B.isMesh&&B.matrixWorld.determinant()<0,ut=zu(w,U,z,k,B);Tt.setMaterial(k,gt);let xt=z.index,Et=1;if(k.wireframe===!0){if(xt=At.getWireframeAttribute(z),xt===void 0)return;Et=2}const Lt=z.drawRange,Pt=z.attributes.position;let qt=Lt.start*Et,he=(Lt.start+Lt.count)*Et;ct!==null&&(qt=Math.max(qt,ct.start*Et),he=Math.min(he,(ct.start+ct.count)*Et)),xt!==null?(qt=Math.max(qt,0),he=Math.min(he,xt.count)):Pt!=null&&(qt=Math.max(qt,0),he=Math.min(he,Pt.count));const Ae=he-qt;if(Ae<0||Ae===1/0)return;mt.setup(B,k,ut,z,xt);let Ee,fe=L;if(xt!==null&&(Ee=q.get(xt),fe=dt,fe.setIndex(Ee)),B.isMesh)k.wireframe===!0?(Tt.setLineWidth(k.wireframeLinewidth*Pe()),fe.setMode(D.LINES)):fe.setMode(D.TRIANGLES);else if(B.isLine){let It=k.linewidth;It===void 0&&(It=1),Tt.setLineWidth(It*Pe()),B.isLineSegments?fe.setMode(D.LINES):B.isLineLoop?fe.setMode(D.LINE_LOOP):fe.setMode(D.LINE_STRIP)}else B.isPoints?fe.setMode(D.POINTS):B.isSprite&&fe.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))fe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const It=B._multiDrawStarts,ae=B._multiDrawCounts,te=B._multiDrawCount,ii=xt?q.get(xt).bytesPerElement:1,On=x.get(k).currentProgram.getUniforms();for(let ni=0;ni<te;ni++)On.setValue(D,"_gl_DrawID",ni),fe.render(It[ni]/ii,ae[ni])}else if(B.isInstancedMesh)fe.renderInstances(qt,Ae,B.count);else if(z.isInstancedBufferGeometry){const It=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ae=Math.min(z.instanceCount,It);fe.renderInstances(qt,Ae,ae)}else fe.render(qt,Ae)};function Xc(w,U,z){w.transparent===!0&&w.side===ue&&w.forceSinglePass===!1?(w.side=Je,w.needsUpdate=!0,_r(w,U,z),w.side=Ji,w.needsUpdate=!0,_r(w,U,z),w.side=ue):_r(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),A=at.get(z),A.init(U),R.push(A),z.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),w!==z&&w.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights();const k=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ct=B.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){const ut=ct[gt];Xc(ut,z,B),k.add(ut)}else Xc(ct,z,B),k.add(ct)}),A=R.pop(),k},this.compileAsync=function(w,U,z=null){const k=this.compile(w,U,z);return new Promise(B=>{function ct(){if(k.forEach(function(gt){x.get(gt).currentProgram.isReady()&&k.delete(gt)}),k.size===0){B(w);return}setTimeout(ct,10)}ne.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let wo=null;function ku(w){wo&&wo(w)}function qc(){mn.stop()}function Yc(){mn.start()}const mn=new Au;mn.setAnimationLoop(ku),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(w){wo=w,st.setAnimationLoop(w),w===null?mn.stop():mn.start()},st.addEventListener("sessionstart",qc),st.addEventListener("sessionend",Yc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const z=st.enabled===!0&&st.isPresenting===!0,k=I!==null&&(F===null||z)&&I.begin(y,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,U,F),A=at.get(w,R.length),A.init(U),R.push(A),Be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Bt.setFromProjectionMatrix(Be,Ii,U.reversedDepth),Qt=this.localClippingEnabled,yt=Mt.init(this.clippingPlanes,Qt),M=et.get(w,E.length),M.init(),E.push(M),st.enabled===!0&&st.isPresenting===!0){const gt=y.xr.getDepthSensingMesh();gt!==null&&Ao(gt,U,-1/0,y.sortObjects)}Ao(w,U,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(Se,_e),Ht=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ht&&ot.addToRenderList(M,w),this.info.render.frame++,yt===!0&&Mt.beginShadows();const B=A.state.shadowsArray;if(bt.render(B,w,U),yt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&I.hasRenderPass())===!1){const gt=M.opaque,ut=M.transmissive;if(A.setupLights(),U.isArrayCamera){const xt=U.cameras;if(ut.length>0)for(let Et=0,Lt=xt.length;Et<Lt;Et++){const Pt=xt[Et];jc(gt,ut,w,Pt)}Ht&&ot.render(w);for(let Et=0,Lt=xt.length;Et<Lt;Et++){const Pt=xt[Et];Kc(M,w,Pt,Pt.viewport)}}else ut.length>0&&jc(gt,ut,w,U),Ht&&ot.render(w),Kc(M,w,U)}F!==null&&O===0&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F)),k&&I.end(y),w.isScene===!0&&w.onAfterRender(y,w,U),mt.resetDefaultState(),H=-1,V=null,R.pop(),R.length>0?(A=R[R.length-1],yt===!0&&Mt.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?M=E[E.length-1]:M=null};function Ao(w,U,z,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Bt.intersectsSprite(w)){k&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Be);const gt=rt.update(w),ut=w.material;ut.visible&&M.push(w,gt,ut,z,re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Bt.intersectsObject(w))){const gt=rt.update(w),ut=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),re.copy(w.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),re.copy(gt.boundingSphere.center)),re.applyMatrix4(w.matrixWorld).applyMatrix4(Be)),Array.isArray(ut)){const xt=gt.groups;for(let Et=0,Lt=xt.length;Et<Lt;Et++){const Pt=xt[Et],qt=ut[Pt.materialIndex];qt&&qt.visible&&M.push(w,gt,qt,z,re.z,Pt)}}else ut.visible&&M.push(w,gt,ut,z,re.z,null)}}const ct=w.children;for(let gt=0,ut=ct.length;gt<ut;gt++)Ao(ct[gt],U,z,k)}function Kc(w,U,z,k){const{opaque:B,transmissive:ct,transparent:gt}=w;A.setupLightsView(z),yt===!0&&Mt.setGlobalState(y.clippingPlanes,z),k&&Tt.viewport(X.copy(k)),B.length>0&&gr(B,U,z),ct.length>0&&gr(ct,U,z),gt.length>0&&gr(gt,U,z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function jc(w,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const qt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new Qe(1,1,{generateMipmaps:!0,type:qt?ci:oi,minFilter:Ki,samples:pe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const ct=A.state.transmissionRenderTarget[k.id],gt=k.viewport||X;ct.setSize(gt.z*y.transmissionResolutionScale,gt.w*y.transmissionResolutionScale);const ut=y.getRenderTarget(),xt=y.getActiveCubeFace(),Et=y.getActiveMipmapLevel();y.setRenderTarget(ct),y.getClearColor(ft),lt=y.getClearAlpha(),lt<1&&y.setClearColor(16777215,.5),y.clear(),Ht&&ot.render(z);const Lt=y.toneMapping;y.toneMapping=Li;const Pt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),yt===!0&&Mt.setGlobalState(y.clippingPlanes,k),gr(w,z,k),N.updateMultisampleRenderTarget(ct),N.updateRenderTargetMipmap(ct),ne.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let he=0,Ae=U.length;he<Ae;he++){const Ee=U[he],{object:fe,geometry:It,material:ae,group:te}=Ee;if(ae.side===ue&&fe.layers.test(k.layers)){const ii=ae.side;ae.side=Je,ae.needsUpdate=!0,Zc(fe,z,k,It,ae,te),ae.side=ii,ae.needsUpdate=!0,qt=!0}}qt===!0&&(N.updateMultisampleRenderTarget(ct),N.updateRenderTargetMipmap(ct))}y.setRenderTarget(ut,xt,Et),y.setClearColor(ft,lt),Pt!==void 0&&(k.viewport=Pt),y.toneMapping=Lt}function gr(w,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ct=w.length;B<ct;B++){const gt=w[B],{object:ut,geometry:xt,group:Et}=gt;let Lt=gt.material;Lt.allowOverride===!0&&k!==null&&(Lt=k),ut.layers.test(z.layers)&&Zc(ut,U,z,xt,Lt,Et)}}function Zc(w,U,z,k,B,ct){w.onBeforeRender(y,U,z,k,B,ct),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,U,z,k,w,ct),B.transparent===!0&&B.side===ue&&B.forceSinglePass===!1?(B.side=Je,B.needsUpdate=!0,y.renderBufferDirect(z,U,k,B,w,ct),B.side=Ji,B.needsUpdate=!0,y.renderBufferDirect(z,U,k,B,w,ct),B.side=ue):y.renderBufferDirect(z,U,k,B,w,ct),w.onAfterRender(y,U,z,k,B,ct)}function _r(w,U,z){U.isScene!==!0&&(U=de);const k=x.get(w),B=A.state.lights,ct=A.state.shadowsArray,gt=B.state.version,ut=St.getParameters(w,B.state,ct,U,z),xt=St.getProgramCacheKey(ut);let Et=k.programs;k.environment=w.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(w.isMeshStandardMaterial?$:K).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Et===void 0&&(w.addEventListener("dispose",wi),Et=new Map,k.programs=Et);let Lt=Et.get(xt);if(Lt!==void 0){if(k.currentProgram===Lt&&k.lightsStateVersion===gt)return Jc(w,ut),Lt}else ut.uniforms=St.getUniforms(w),w.onBeforeCompile(ut,y),Lt=St.acquireProgram(ut,xt),Et.set(xt,Lt),k.uniforms=ut.uniforms;const Pt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=Mt.uniform),Jc(w,ut),k.needsLights=Hu(w),k.lightsStateVersion=gt,k.needsLights&&(Pt.ambientLightColor.value=B.state.ambient,Pt.lightProbe.value=B.state.probe,Pt.directionalLights.value=B.state.directional,Pt.directionalLightShadows.value=B.state.directionalShadow,Pt.spotLights.value=B.state.spot,Pt.spotLightShadows.value=B.state.spotShadow,Pt.rectAreaLights.value=B.state.rectArea,Pt.ltc_1.value=B.state.rectAreaLTC1,Pt.ltc_2.value=B.state.rectAreaLTC2,Pt.pointLights.value=B.state.point,Pt.pointLightShadows.value=B.state.pointShadow,Pt.hemisphereLights.value=B.state.hemi,Pt.directionalShadowMap.value=B.state.directionalShadowMap,Pt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pt.spotShadowMap.value=B.state.spotShadowMap,Pt.spotLightMatrix.value=B.state.spotLightMatrix,Pt.spotLightMap.value=B.state.spotLightMap,Pt.pointShadowMap.value=B.state.pointShadowMap,Pt.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Lt,k.uniformsList=null,Lt}function $c(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=so.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Jc(w,U){const z=x.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function zu(w,U,z,k,B){U.isScene!==!0&&(U=de),N.resetTextureUnits();const ct=U.fog,gt=k.isMeshStandardMaterial?U.environment:null,ut=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xe,xt=(k.isMeshStandardMaterial?$:K).get(k.envMap||gt),Et=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Lt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pt=!!z.morphAttributes.position,qt=!!z.morphAttributes.normal,he=!!z.morphAttributes.color;let Ae=Li;k.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ae=y.toneMapping);const Ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fe=Ee!==void 0?Ee.length:0,It=x.get(k),ae=A.state.lights;if(yt===!0&&(Qt===!0||w!==V)){const qe=w===V&&k.id===H;Mt.setState(k,w,qe)}let te=!1;k.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ae.state.version||It.outputColorSpace!==ut||B.isBatchedMesh&&It.batching===!1||!B.isBatchedMesh&&It.batching===!0||B.isBatchedMesh&&It.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&It.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&It.instancing===!1||!B.isInstancedMesh&&It.instancing===!0||B.isSkinnedMesh&&It.skinning===!1||!B.isSkinnedMesh&&It.skinning===!0||B.isInstancedMesh&&It.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&It.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&It.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&It.instancingMorph===!1&&B.morphTexture!==null||It.envMap!==xt||k.fog===!0&&It.fog!==ct||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Mt.numPlanes||It.numIntersection!==Mt.numIntersection)||It.vertexAlphas!==Et||It.vertexTangents!==Lt||It.morphTargets!==Pt||It.morphNormals!==qt||It.morphColors!==he||It.toneMapping!==Ae||It.morphTargetsCount!==fe)&&(te=!0):(te=!0,It.__version=k.version);let ii=It.currentProgram;te===!0&&(ii=_r(k,U,B));let On=!1,ni=!1,ws=!1;const ge=ii.getUniforms(),ti=It.uniforms;if(Tt.useProgram(ii.program)&&(On=!0,ni=!0,ws=!0),k.id!==H&&(H=k.id,ni=!0),On||V!==w){Tt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ge.setValue(D,"projectionMatrix",w.projectionMatrix),ge.setValue(D,"viewMatrix",w.matrixWorldInverse);const ei=ge.map.cameraPosition;ei!==void 0&&ei.setValue(D,Jt.setFromMatrixPosition(w.matrixWorld)),pe.logarithmicDepthBuffer&&ge.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ge.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,ni=!0,ws=!0)}if(It.needsLights&&(ae.state.directionalShadowMap.length>0&&ge.setValue(D,"directionalShadowMap",ae.state.directionalShadowMap,N),ae.state.spotShadowMap.length>0&&ge.setValue(D,"spotShadowMap",ae.state.spotShadowMap,N),ae.state.pointShadowMap.length>0&&ge.setValue(D,"pointShadowMap",ae.state.pointShadowMap,N)),B.isSkinnedMesh){ge.setOptional(D,B,"bindMatrix"),ge.setOptional(D,B,"bindMatrixInverse");const qe=B.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),ge.setValue(D,"boneTexture",qe.boneTexture,N))}B.isBatchedMesh&&(ge.setOptional(D,B,"batchingTexture"),ge.setValue(D,"batchingTexture",B._matricesTexture,N),ge.setOptional(D,B,"batchingIdTexture"),ge.setValue(D,"batchingIdTexture",B._indirectTexture,N),ge.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&ge.setValue(D,"batchingColorTexture",B._colorsTexture,N));const li=z.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&Vt.update(B,z,ii),(ni||It.receiveShadow!==B.receiveShadow)&&(It.receiveShadow=B.receiveShadow,ge.setValue(D,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ti.envMap.value=xt,ti.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(ti.envMapIntensity.value=U.environmentIntensity),ti.dfgLUT!==void 0&&(ti.dfgLUT.value=Dx()),ni&&(ge.setValue(D,"toneMappingExposure",y.toneMappingExposure),It.needsLights&&Gu(ti,ws),ct&&k.fog===!0&&Ut.refreshFogUniforms(ti,ct),Ut.refreshMaterialUniforms(ti,k,Gt,Xt,A.state.transmissionRenderTarget[w.id]),so.upload(D,$c(It),ti,N)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(so.upload(D,$c(It),ti,N),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ge.setValue(D,"center",B.center),ge.setValue(D,"modelViewMatrix",B.modelViewMatrix),ge.setValue(D,"normalMatrix",B.normalMatrix),ge.setValue(D,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const qe=k.uniformsGroups;for(let ei=0,Eo=qe.length;ei<Eo;ei++){const gn=qe[ei];tt.update(gn,ii),tt.bind(gn,ii)}}return ii}function Gu(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Hu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,U,z){const k=x.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),x.get(w.texture).__webglTexture=U,x.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const z=x.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Vu=D.createFramebuffer();this.setRenderTarget=function(w,U=0,z=0){F=w,P=U,O=z;let k=null,B=!1,ct=!1;if(w){const ut=x.get(w);if(ut.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(D.FRAMEBUFFER,ut.__webglFramebuffer),X.copy(w.viewport),G.copy(w.scissor),J=w.scissorTest,Tt.viewport(X),Tt.scissor(G),Tt.setScissorTest(J),H=-1;return}else if(ut.__webglFramebuffer===void 0)N.setupRenderTarget(w);else if(ut.__hasExternalTextures)N.rebindTextures(w,x.get(w.texture).__webglTexture,x.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Lt=w.depthTexture;if(ut.__boundDepthTexture!==Lt){if(Lt!==null&&x.has(Lt)&&(w.width!==Lt.image.width||w.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(w)}}const xt=w.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ct=!0);const Et=x.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Et[U])?k=Et[U][z]:k=Et[U],B=!0):w.samples>0&&N.useMultisampledRTT(w)===!1?k=x.get(w).__webglMultisampledFramebuffer:Array.isArray(Et)?k=Et[z]:k=Et,X.copy(w.viewport),G.copy(w.scissor),J=w.scissorTest}else X.copy(j).multiplyScalar(Gt).floor(),G.copy(Q).multiplyScalar(Gt).floor(),J=_t;if(z!==0&&(k=Vu),Tt.bindFramebuffer(D.FRAMEBUFFER,k)&&Tt.drawBuffers(w,k),Tt.viewport(X),Tt.scissor(G),Tt.setScissorTest(J),B){const ut=x.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,z)}else if(ct){const ut=U;for(let xt=0;xt<w.textures.length;xt++){const Et=x.get(w.textures[xt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+xt,Et.__webglTexture,z,ut)}}else if(w!==null&&z!==0){const ut=x.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,z)}H=-1},this.readRenderTargetPixels=function(w,U,z,k,B,ct,gt,ut=0){if(!(w&&w.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=x.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){Tt.bindFramebuffer(D.FRAMEBUFFER,xt);try{const Et=w.textures[ut],Lt=Et.format,Pt=Et.type;if(!pe.textureFormatReadable(Lt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Pt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&z>=0&&z<=w.height-B&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut),D.readPixels(U,z,k,B,it.convert(Lt),it.convert(Pt),ct))}finally{const Et=F!==null?x.get(F).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,k,B,ct,gt,ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=x.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(U>=0&&U<=w.width-k&&z>=0&&z<=w.height-B){Tt.bindFramebuffer(D.FRAMEBUFFER,xt);const Et=w.textures[ut],Lt=Et.format,Pt=Et.type;if(!pe.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,qt),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut),D.readPixels(U,z,k,B,it.convert(Lt),it.convert(Pt),0);const he=F!==null?x.get(F).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,he);const Ae=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Cd(D,Ae,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,qt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(qt),D.deleteSync(Ae),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,z=0){const k=Math.pow(2,-z),B=Math.floor(w.image.width*k),ct=Math.floor(w.image.height*k),gt=U!==null?U.x:0,ut=U!==null?U.y:0;N.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,gt,ut,B,ct),Tt.unbindTexture()};const Wu=D.createFramebuffer(),Xu=D.createFramebuffer();this.copyTextureToTexture=function(w,U,z=null,k=null,B=0,ct=null){ct===null&&(B!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=B,B=0):ct=0);let gt,ut,xt,Et,Lt,Pt,qt,he,Ae;const Ee=w.isCompressedTexture?w.mipmaps[ct]:w.image;if(z!==null)gt=z.max.x-z.min.x,ut=z.max.y-z.min.y,xt=z.isBox3?z.max.z-z.min.z:1,Et=z.min.x,Lt=z.min.y,Pt=z.isBox3?z.min.z:0;else{const li=Math.pow(2,-B);gt=Math.floor(Ee.width*li),ut=Math.floor(Ee.height*li),w.isDataArrayTexture?xt=Ee.depth:w.isData3DTexture?xt=Math.floor(Ee.depth*li):xt=1,Et=0,Lt=0,Pt=0}k!==null?(qt=k.x,he=k.y,Ae=k.z):(qt=0,he=0,Ae=0);const fe=it.convert(U.format),It=it.convert(U.type);let ae;U.isData3DTexture?(N.setTexture3D(U,0),ae=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),ae=D.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),ae=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const te=D.getParameter(D.UNPACK_ROW_LENGTH),ii=D.getParameter(D.UNPACK_IMAGE_HEIGHT),On=D.getParameter(D.UNPACK_SKIP_PIXELS),ni=D.getParameter(D.UNPACK_SKIP_ROWS),ws=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pt);const ge=w.isDataArrayTexture||w.isData3DTexture,ti=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const li=x.get(w),qe=x.get(U),ei=x.get(li.__renderTarget),Eo=x.get(qe.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,ei.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Eo.__webglFramebuffer);for(let gn=0;gn<xt;gn++)ge&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(w).__webglTexture,B,Pt+gn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(U).__webglTexture,ct,Ae+gn)),D.blitFramebuffer(Et,Lt,gt,ut,qt,he,gt,ut,D.DEPTH_BUFFER_BIT,D.NEAREST);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||x.has(w)){const li=x.get(w),qe=x.get(U);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,Wu),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xu);for(let ei=0;ei<xt;ei++)ge?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,li.__webglTexture,B,Pt+ei):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,li.__webglTexture,B),ti?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,ct,Ae+ei):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qe.__webglTexture,ct),B!==0?D.blitFramebuffer(Et,Lt,gt,ut,qt,he,gt,ut,D.COLOR_BUFFER_BIT,D.NEAREST):ti?D.copyTexSubImage3D(ae,ct,qt,he,Ae+ei,Et,Lt,gt,ut):D.copyTexSubImage2D(ae,ct,qt,he,Et,Lt,gt,ut);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ti?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(ae,ct,qt,he,Ae,gt,ut,xt,fe,It,Ee.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(ae,ct,qt,he,Ae,gt,ut,xt,fe,Ee.data):D.texSubImage3D(ae,ct,qt,he,Ae,gt,ut,xt,fe,It,Ee):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,qt,he,gt,ut,fe,It,Ee.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,qt,he,Ee.width,Ee.height,fe,Ee.data):D.texSubImage2D(D.TEXTURE_2D,ct,qt,he,gt,ut,fe,It,Ee);D.pixelStorei(D.UNPACK_ROW_LENGTH,te),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ii),D.pixelStorei(D.UNPACK_SKIP_PIXELS,On),D.pixelStorei(D.UNPACK_SKIP_ROWS,ni),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ws),ct===0&&U.generateMipmaps&&D.generateMipmap(ae),Tt.unbindTexture()},this.initRenderTarget=function(w){x.get(w).__webglFramebuffer===void 0&&N.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?N.setTextureCube(w,0):w.isData3DTexture?N.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?N.setTexture2DArray(w,0):N.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){P=0,O=0,F=null,Tt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class pr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Nx=new fr(-1,1,1,-1,0,1);class Ux extends ye{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const Ox=new Ux;class Iu{constructor(t){this._mesh=new Y(Ox,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Nx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Du extends pr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=uo.clone(t.uniforms),this.material=new Ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Iu(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xh extends pr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Fx extends pr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Bx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new nt);this._width=i.width,this._height=i.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Du(ro),this.copyPass.material.blending=Di,this.clock=new bu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xh!==void 0&&(r instanceof xh?i=!0:r instanceof Fx&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kx extends pr{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new vt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=n}}const zx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class vs extends pr{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(s,r,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Qe(s,r,{type:ci});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Qe(s,r,{type:ci});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}const a=zx;this.highPassUniforms=uo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=uo.clone(ro.uniforms),this.blendMaterial=new Ge({uniforms:this.copyUniforms,vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,premultipliedAlpha:!0,blending:Yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new Zt,this._fsQuad=new Iu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new nt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=vs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=vs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new Ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}vs.BlurDirectionX=new nt(1,0);vs.BlurDirectionY=new nt(0,1);class Gx{constructor(){this.remnant=0,this.heldRemnant=0,this.deathCount=0,this.deathLessons={},this.infusions={strength:0,vitality:0,stamina:0,spirit:0},this.MAX_TOTAL_DEPTH=20,this.MAX_TRACK_DEPTH=5,this.bonfirePosition=new b(0,0,5),this.maxHealth=100,this.maxStamina=100,this.maxPosture=100,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.isDead=!1,this.checkpoint=new b(0,0,5),this.deathScreenEl=document.getElementById("death-screen"),this.player=null,this.enemyManager=null,this.bloodstain=null,this.bloodstainMesh=null,this.staminaRegenDelay=.5,this.staminaRegenRate=25,this.staminaRegenTimer=0,this.postureRegenDelay=1,this.postureRegenRate=15,this.postureRegenTimer=0,this.audioManager=null,this.hitstopActive=!1,this.hitstopDuration=0,this.hitstopTimer=0,this.hud=null,this.cameraController=null}triggerHitstop(t=.04){this.hitstopActive=!0,this.hitstopDuration=t,this.hitstopTimer=0}hitstopLight(){this.triggerHitstop(.035)}hitstopHeavy(){this.triggerHitstop(.06)}isInHitstop(){return this.hitstopActive}updateHitstop(t){return this.hitstopActive?(this.hitstopTimer+=t,this.hitstopTimer>=this.hitstopDuration&&(this.hitstopActive=!1,this.hitstopTimer=0),!0):!1}update(t){this.isDead||(this.staminaRegenTimer+=t,this.staminaRegenTimer>=this.staminaRegenDelay&&this.stamina<this.maxStamina&&(this.stamina=Math.min(this.maxStamina,this.stamina+this.staminaRegenRate*t)),this.postureRegenTimer+=t,this.postureRegenTimer>=this.postureRegenDelay&&this.posture>0&&(this.posture=Math.max(0,this.posture-this.postureRegenRate*t)))}canUseStamina(t){const e=this.stamina>=t;return!e&&this.hud&&(this.hud.flashStaminaDepleted(),this.audioManager&&this.player&&this.audioManager.play("staminaDepleted",{position:this.player.mesh.position,volume:.4})),e}useStamina(t){this.stamina=Math.max(0,this.stamina-t),this.staminaRegenTimer=0,this.stamina<15&&this.hud&&this.hud.flashStaminaDepleted()}takeDamage(t,e="physical",i=0,n=!1){if(this.isDead)return;const s=this.deathLessons[e]||0;let r=Math.floor(t*(1-s));if(n){const a=r*.5;if(this.canUseStamina(a))this.useStamina(a),r=Math.floor(r*.2),i*=.5;else return this.stamina=0,this.posture=this.maxPosture,"guard_broken"}return this.health-=r,this.posture=Math.min(this.maxPosture,this.posture+i),this.postureRegenTimer=0,this.audioManager&&this.player&&this.audioManager.play("playerDamage",{position:this.player.mesh.position,volume:.7}),this.health<=0?(this.die(e),"died"):this.posture>=this.maxPosture?(this.audioManager&&this.player&&this.audioManager.play("postureBreak",{position:this.player.mesh.position,volume:.8}),"posture_broken"):"hit"}die(t="unknown"){this.isDead=!0,this.deathCount++,this.health=0,this.audioManager&&this.audioManager.play("death",{volume:.8});const e=this.player?this.player.mesh.position.clone():this.checkpoint.clone();if(this.particleManager&&this.player&&this.particleManager.spawnPlayerDeathEffect(e,this.camera),this.bloodstainMesh&&this.scene&&(this.scene.remove(this.bloodstainMesh),this.bloodstainMesh=null),this.remnant>0&&this.scene){this.heldRemnant=this.remnant,this.remnant=0,this.bloodstain=e.clone(),this.bloodstain.y=.05;const i=new hr(.5,16),n=new Zt({color:11154227,transparent:!0,opacity:.8,side:ue});this.bloodstainMesh=new Y(i,n),this.bloodstainMesh.rotation.x=-Math.PI/2,this.bloodstainMesh.position.copy(this.bloodstain),this.scene.add(this.bloodstainMesh)}else this.heldRemnant=0,this.bloodstain=null;this.deathLessons[t]||(this.deathLessons[t]=0),this.deathLessons[t]=Math.min(.25,this.deathLessons[t]+.005),this.deathScreenEl&&this.deathScreenEl.classList.add("visible"),setTimeout(()=>this.respawn(),3e3)}respawn(){this.isDead=!1,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.player&&this.player.resetPosition(),this.enemyManager&&this.enemyManager.resetAll(),this.deathScreenEl&&this.deathScreenEl.classList.remove("visible")}setCheckpoint(t){this.checkpoint.copy(t)}setEntities(t,e,i,n=null){this.player=t,this.enemyManager=e,this.scene=i,this.camera=n}addRemnant(t){this.remnant+=t}collectBloodstain(){return!this.bloodstain||!this.player?!1:this.player.mesh.position.distanceTo(this.bloodstain)<2?(this.remnant+=this.heldRemnant,this.audioManager&&this.audioManager.play("itemPickup",{volume:.6}),this.heldRemnant=0,this.bloodstainMesh&&this.scene&&this.scene.remove(this.bloodstainMesh),this.bloodstain=null,this.bloodstainMesh=null,!0):!1}getTotalDepth(){return this.infusions.bone+this.infusions.blood+this.infusions.stone}canInfuse(t){return!(!this.infusions.hasOwnProperty(t)||this.infusions[t]>=this.MAX_TRACK_DEPTH||this.getTotalDepth()>=this.MAX_TOTAL_DEPTH)}getInfusionCost(t,e){return 100*e*e}infuse(t){if(!this.canInfuse(t))return!1;const e=this.infusions[t]+1,i=this.getInfusionCost(t,e);return this.remnant<i?!1:(this.remnant-=i,this.infusions[t]=e,this.audioManager&&this.audioManager.play("menuConfirm",{volume:.5}),!0)}getInfusionBonuses(){return{damageMult:1+this.infusions.strength*.1,bonusHealth:this.infusions.vitality*20,bonusStamina:this.infusions.stamina*15,staminaRegenMult:1+this.infusions.stamina*.1,postureResist:this.infusions.spirit*.05,postureRegenMult:1+this.infusions.spirit*.15}}applyInfusionBonuses(){const t=this.getInfusionBonuses();this.maxHealth=100+t.bonusHealth,this.maxStamina=100+t.bonusStamina,this.isDead||(this.health=Math.min(this.health,this.maxHealth),this.stamina=Math.min(this.stamina,this.maxStamina))}isNearBonfire(){return this.player?this.player.mesh.position.distanceTo(this.bonfirePosition)<3:!1}getTrackInfo(t){const e=this.infusions[t]||0,i=e+1,n=i<=this.MAX_TRACK_DEPTH?this.getInfusionCost(t,i):null,s=n!==null&&this.remnant>=n,r=e>=this.MAX_TRACK_DEPTH,a={strength:{name:"Strength",desc:"+10% damage per level",bonus:`+${e*10}% damage`},vitality:{name:"Vitality",desc:"+20 max HP per level",bonus:`+${e*20} HP`},stamina:{name:"Stamina",desc:"+15 max stamina, +10% regen per level",bonus:`+${e*15} stamina`},spirit:{name:"Spirit",desc:"+5% posture resist, +15% posture regen per level",bonus:`+${e*5}% resist`}};return{level:e,nextLevel:i,cost:n,canAfford:s,maxed:r,...a[t]}}}function vh(o,t){if(t===_d)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===oc||t===Xh){let e=o.getIndex();if(e===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)r.push(c);o.setIndex(r),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=e.count-2,n=[];if(t===oc)for(let r=1;r<=i;r++)n.push(e.getX(0)),n.push(e.getX(r)),n.push(e.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(e.getX(r)),n.push(e.getX(r+1)),n.push(e.getX(r+2))):(n.push(e.getX(r+2)),n.push(e.getX(r+1)),n.push(e.getX(r)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class Hx extends Un{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Yx(e)}),this.register(function(e){return new Kx(e)}),this.register(function(e){return new nv(e)}),this.register(function(e){return new sv(e)}),this.register(function(e){return new rv(e)}),this.register(function(e){return new Zx(e)}),this.register(function(e){return new $x(e)}),this.register(function(e){return new Jx(e)}),this.register(function(e){return new Qx(e)}),this.register(function(e){return new qx(e)}),this.register(function(e){return new tv(e)}),this.register(function(e){return new jx(e)}),this.register(function(e){return new iv(e)}),this.register(function(e){return new ev(e)}),this.register(function(e){return new Wx(e)}),this.register(function(e){return new ov(e)}),this.register(function(e){return new av(e)})}load(t,e,i,n){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=js.extractUrlBase(t);r=js.resolveURL(l,this.path)}else r=js.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){n?n(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new go(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,r,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s;const r={},a={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Lu){try{r[Yt.KHR_BINARY_GLTF]=new cv(t)}catch(u){n&&n(u);return}s=JSON.parse(r[Yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new yv(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Yt.KHR_MATERIALS_UNLIT:r[u]=new Xx;break;case Yt.KHR_DRACO_MESH_COMPRESSION:r[u]=new lv(s,this.dracoLoader);break;case Yt.KHR_TEXTURE_TRANSFORM:r[u]=new hv;break;case Yt.KHR_MESH_QUANTIZATION:r[u]=new uv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(i,n)}parseAsync(t,e){const i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}}function Vx(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const Yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Wx{constructor(t){this.parser=t,this.name=Yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){const s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let n=e.cache.get(i);if(n)return n;const s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let l;const h=new vt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Xe);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Tu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new fi(h),l.distance=u;break;case"spot":l=new Mp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ei(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),n=Promise.resolve(l),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,s=i.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(e.cache,a,c)})}}class Xx{constructor(){this.name=Yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(t,e,i){const n=[];t.color=new vt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],Xe),t.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,Te))}return Promise.all(n)}}class qx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class Yx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new nt(a,a)}return Promise.all(s)}}class Kx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class jx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Zx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new vt(0,0,0),e.sheenRoughness=0,e.sheen=1;const r=n.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Xe)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",r.sheenColorTexture,Te)),r.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class $x{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Jx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return e.attenuationColor=new vt().setRGB(a[0],a[1],a[2],Xe),Promise.all(s)}}class Qx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class tv{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return e.specularColor=new vt().setRGB(a[0],a[1],a[2],Xe),r.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",r.specularColorTexture,Te)),Promise.all(s)}}class ev{constructor(t){this.parser=t,this.name=Yt.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}}class iv{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class nv{constructor(t){this.parser=t,this.name=Yt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}}class sv{constructor(t){this.parser=t,this.name=Yt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=n.images[r.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(t,r.source,c)}}class rv{constructor(t){this.parser=t,this.name=Yt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=n.images[r.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(t,r.source,c)}}class ov{constructor(t){this.name=Yt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=n.byteOffset||0,l=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class av{constructor(t){this.name=Yt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=e.meshes[i.mesh];for(const l of n.primitives)if(l.mode!==ui.TRIANGLES&&l.mode!==ui.TRIANGLE_STRIP&&l.mode!==ui.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=i.extensions[this.name].attributes,a=[],c={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Ot,m=new b,p=new yi,v=new b(1,1,1),S=new An(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),S.setMatrixAt(M,_.compose(m,p,v));for(const M in c)if(M==="_COLOR_0"){const A=c[M];S.instanceColor=new cc(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);ve.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Lu="glTF",Bs=12,Mh={JSON:1313821514,BIN:5130562};class cv{constructor(t){this.name=Yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Bs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Lu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Bs,s=new DataView(t,Bs);let r=0;for(;r<n;){const a=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===Mh.JSON){const l=new Uint8Array(t,Bs+r,a);this.content=i.decode(l)}else if(c===Mh.BIN){const l=Bs+r;this.body=t.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Yt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,a={},c={},l={};for(const h in r){const u=mc[h]||h.toLowerCase();a[u]=r[h]}for(const h in t.attributes){const u=mc[h]||h.toLowerCase();if(r[h]!==void 0){const d=i.accessors[t.attributes[h]],f=as[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,Xe,d)})})}}class hv{constructor(){this.name=Yt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class uv{constructor(){this.name=Yt.KHR_MESH_QUANTIZATION}}class Nu extends ur{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let r=0;r!==n;r++)e[r]=i[s+r];return e}interpolate_(t,e,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=n-e,u=(i-e)/h,d=u*u,f=d*u,g=t*l,_=g-l,m=-2*f+3*d,p=f-d,v=1-m,S=p-d+u;for(let M=0;M!==a;M++){const A=r[_+M+a],E=r[_+M+c]*h,R=r[g+M+a],I=r[g+M]*h;s[M]=v*A+S*E+m*R+p*I}return s}}const dv=new yi;class fv extends Nu{interpolate_(t,e,i,n){const s=super.interpolate_(t,e,i,n);return dv.fromArray(s).normalize().toArray(s),s}}const ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},as={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yh={9728:Ne,9729:Re,9984:Oh,9985:Qr,9986:Gs,9987:Ki},Sh={33071:Pi,33648:oo,10497:Ni},da={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pv={CUBICSPLINE:void 0,LINEAR:er,STEP:tr},fa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mv(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new wt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),o.DefaultMaterial}function Tn(o,t,e){for(const i in e.extensions)o[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Ei(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function gv(o,t,e){let i=!1,n=!1,s=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(o);const r=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(i){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(n){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):o.attributes.color;c.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(o.morphAttributes.position=h),n&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function _v(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)o.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xv(o){let t;const e=o.extensions&&o.extensions[Yt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+pa(e.attributes):t=o.indices+":"+pa(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,n=o.targets.length;i<n;i++)t+=":"+pa(o.targets[i]);return t}function pa(o){let t="";const e=Object.keys(o).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+o[e[i]]+";";return t}function gc(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vv(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Mv=new Ot;class yv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Vx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);n=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&r<98?this.textureLoader=new Su(this.options.manager):this.textureLoader=new bp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new go(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){const a={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};return Tn(s,a,n),Ei(a,n),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n].joints;for(let a=0,c=r.length;a<c;a++)t[r[a]].isBone=!0}for(let n=0,s=t.length;n<s;n++){const r=t[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const n=i.clone(),s=(r,a)=>{const c=this.associations.get(r);c!=null&&this.associations.set(a,c);for(const[l,h]of r.children.entries())s(h,a.children[l])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const n=t(e[i]);if(n)return n}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let n=0;n<e.length;n++){const s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){const i=t+":"+e;let n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,r){return i.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Yt.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,r){i.load(js.resolveURL(e.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){const e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){const r=da[n.type],a=as[n.componentType],c=n.normalized===!0,l=new a(n.count*r);return Promise.resolve(new He(l,r,c))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],c=da[n.type],l=as[n.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let S=e.cache.get(v);S||(_=new l(a,p*f,n.count*f/h),S=new Ic(_,f/h),e.cache.add(v,S)),m=new fs(S,c,d%f/h,g)}else a===null?_=new l(n.count*c):_=new l(a,d,n.count*c),m=new He(_,c,g);if(n.sparse!==void 0){const p=da.SCALAR,v=as[n.sparse.indices.componentType],S=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,A=new v(r[1],S,n.sparse.count*p),E=new l(r[2],M,n.sparse.count*c);a!==null&&(m=new He(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=A.length;R<I;R++){const y=A[R];if(m.setX(y,E[R*c]),c>=2&&m.setY(y,E[R*c+1]),c>=3&&m.setZ(y,E[R*c+2]),c>=4&&m.setW(y,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,i=this.options,s=e.textures[t].source,r=e.images[s];let a=this.textureLoader;if(r.uri){const c=i.manager.getHandler(r.uri);c!==null&&(a=c)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,i){const n=this,s=this.json,r=s.textures[t],a=s.images[e],c=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=r.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=yh[d.magFilter]||Re,h.minFilter=yh[d.minFilter]||Ki,h.wrapS=Sh[d.wrapS]||Ni,h.wrapT=Sh[d.wrapT]||Ni,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ne&&h.minFilter!==Re,n.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const r=n.images[t],a=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=i.getDependency("bufferView",r.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:r.mimeType});return c=a.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Ue(_);m.needsUpdate=!0,d(m)}),e.load(js.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ei(u,r),u.userData.mimeType=r.mimeType||vv(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,i,n){const s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),s.extensions[Yt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(r);r=s.extensions[Yt.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,c)}}return n!==void 0&&(r.colorSpace=n),t[e]=r,r})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new au,Si.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(t.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new ou,Si.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(n||s||r){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}t.material=i}getMaterialType(){return wt}loadMaterial(t){const e=this,i=this.json,n=this.extensions,s=i.materials[t];let r;const a={},c=s.extensions||{},l=[];if(c[Yt.KHR_MATERIALS_UNLIT]){const u=n[Yt.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(a,s,e))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new vt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Xe),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Te)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=ue);const h=s.alphaMode||fa.OPAQUE;if(h===fa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===fa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Zt&&(l.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==Zt&&(l.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Zt){const u=s.emissiveFactor;a.emissive=new vt().setRGB(u[0],u[1],u[2],Xe)}return s.emissiveTexture!==void 0&&r!==Zt&&l.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Te)),Promise.all(l).then(function(){const u=new r(a);return s.name&&(u.name=s.name),Ei(u,s),e.associations.set(u,{materials:t}),s.extensions&&Tn(n,u,s),u})}createUniqueName(t){const e=se.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[Yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Th(c,a,e)})}const r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=xv(l),u=n[h];if(u)r.push(u.promise);else{let d;l.extensions&&l.extensions[Yt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Th(new ye,l,e),n[h]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(t){const e=this,i=this.json,n=this.extensions,s=i.meshes[t],r=s.primitives,a=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?mv(this.cache):this.getDependency("material",r[c].material);a.push(h)}return a.push(e.loadGeometries(r)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=r[f];let p;const v=l[f];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new _f(_,v):new Y(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?p.geometry=vh(p.geometry,Xh):m.mode===ui.TRIANGLE_FAN&&(p.geometry=vh(p.geometry,oc));else if(m.mode===ui.LINES)p=new Tf(_,v);else if(m.mode===ui.LINE_STRIP)p=new Uc(_,v);else if(m.mode===ui.LINE_LOOP)p=new bf(_,v);else if(m.mode===ui.POINTS)p=new wf(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_v(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Ei(p,s),m.extensions&&Tn(n,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&Tn(n,u[0],s),u[0];const d=new $t;s.extensions&&Tn(n,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new je(ee.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new fr(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Ei(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),r=n,a=[],c=[];for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u){a.push(u);const d=new Ot;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Lc(a,c)})}loadAnimation(t){const e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,r=[],a=[],c=[],l=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const f=n.channels[u],g=n.samplers[f.sampler],_=f.target,m=_.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,v=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let S=0,M=d.length;S<M;S++){const A=d[S],E=f[S],R=g[S],I=_[S],y=m[S];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const T=i._createAnimationTracks(A,E,R,I,y);if(T)for(let P=0;P<T.length;P++)p.push(T[P])}const v=new dc(s,void 0,p);return Ei(v,n),v})}createNodeMesh(t){const e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let c=0,l=n.weights.length;c<l;c++)a.morphTargetInfluences[c]=n.weights[c]}),r})}loadNode(t){const e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),r=[],a=n.children||[];for(let l=0,h=a.length;l<h;l++)r.push(i.getDependency("node",a[l]));const c=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Mv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],r=s.name?n.createUniqueName(s.name):"",a=[],c=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(l){return n._getNodeRef(n.cameraCache,s.camera,l)})),n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new ru:l.length>1?h=new $t:l.length===1?h=l[0]:h=new ve,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=r),Ei(h,s),s.extensions&&Tn(i,h,s),s.matrix!==void 0){const u=new Ot;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){const u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],n=this,s=new $t;i.name&&(s.name=n.createUniqueName(i.name)),Ei(s,i),i.extensions&&Tn(e,s,i);const r=i.nodes||[],a=[];for(let c=0,l=r.length;c<l;c++)a.push(n.getDependency("node",r[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof Si||d instanceof Ue)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=l(s),s})}_createAnimationTracks(t,e,i,n,s){const r=[],a=t.name?t.name:t.uuid,c=[];cn[s.path]===cn.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(cn[s.path]){case cn.weights:l=gs;break;case cn.rotation:l=_s;break;case cn.translation:case cn.scale:l=xs;break;default:i.itemSize===1?l=gs:l=xs;break}const h=n.interpolation!==void 0?pv[n.interpolation]:er,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+cn[s.path],e.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=gc(e.constructor),n=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const n=this instanceof _s?fv:Nu;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Sv(o,t,e){const i=t.attributes,n=new Ze;if(i.POSITION!==void 0){const a=e.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(n.set(new b(c[0],c[1],c[2]),new b(l[0],l[1],l[2])),a.normalized){const h=gc(as[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new b,c=new b;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=gc(as[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}o.boundingBox=n;const r=new Fi;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,o.boundingSphere=r}function Th(o,t,e){const i=t.attributes,n=[];function s(r,a){return e.getDependency("accessor",r).then(function(c){o.setAttribute(a,c)})}for(const r in i){const a=mc[r]||r.toLowerCase();a in o.attributes||n.push(s(i[r],a))}if(t.indices!==void 0&&!o.index){const r=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});n.push(r)}return jt.workingColorSpace!==Xe&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${jt.workingColorSpace}" not supported.`),Ei(o,t),Sv(o,t,e),Promise.all(n).then(function(){return t.targets!==void 0?gv(o,t.targets,e):o})}const ma=new WeakMap;class Tv extends Un{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,i,n){const s=new go(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,r=>{this.parse(r,e,n)},i,n)}parse(t,e,i=()=>{}){this.decodeDracoFile(t,e,null,null,Te,i).catch(i)}decodeDracoFile(t,e,i,n,s=Xe,r=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(t,a).then(e).catch(r)}decodeGeometry(t,e){const i=JSON.stringify(e);if(ma.has(t)){const c=ma.get(t);if(c.key===i)return c.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,r=t.byteLength,a=this._getWorker(s,r).then(c=>(n=c,new Promise((l,h)=>{n._callbacks[s]={resolve:l,reject:h},n.postMessage({type:"decode",id:s,taskConfig:e,buffer:t},[t])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),ma.set(t,{key:i,promise:a}),a}_createGeometry(t){const e=new ye;t.index&&e.setIndex(new He(t.index.array,1));for(let i=0;i<t.attributes.length;i++){const{name:n,array:s,itemSize:r,stride:a,vertexColorSpace:c}=t.attributes[i];let l;if(r===a)l=new He(s,r);else{const h=new Ic(s,a);l=new fs(h,r,0)}n==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(s instanceof Float32Array)),e.setAttribute(n,l)}return e}_assignVertexColorSpace(t,e){if(e!==Te)return;const i=new vt;for(let n=0,s=t.count;n<s;n++)i.fromBufferAttribute(t,n),jt.colorSpaceToWorking(i,Te),t.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(t,e){const i=new go(this.manager);return i.setPath(this.decoderPath),i.setResponseType(e),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(t,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(i=>{const n=i[0];t||(this.decoderConfig.wasmBinary=i[1]);const s=bv.toString(),r=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const r=s.data;switch(r.type){case"decode":n._callbacks[r.id].resolve(r);break;case"error":n._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[t]=e,i._taskLoad+=e,i})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function bv(){let o,t;onmessage=function(r){const a=r.data;switch(a.type){case"init":o=a.decoderConfig,t=new Promise(function(h){o.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(o)});break;case"decode":const c=a.buffer,l=a.taskConfig;t.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=e(u,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function e(r,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(c);if(g===r.TRIANGULAR_MESH)d=new r.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===r.POINT_CLOUD)d=new r.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let v,S;if(l.useUniqueIDs)S=h[m],v=a.GetAttributeByUniqueId(d,S);else{if(S=a.GetAttributeId(d,r[h[m]]),S===-1)continue;v=a.GetAttribute(d,S)}const M=n(r,a,d,m,p,v);m==="color"&&(M.vertexColorSpace=l.vertexColorSpace),_.attributes.push(M)}return g===r.TRIANGULAR_MESH&&(_.index=i(r,a,d)),r.destroy(d),_}function i(r,a,c){const h=c.num_faces()*3,u=h*4,d=r._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(r.HEAPF32.buffer,d,h).slice();return r._free(d),{array:f,itemSize:1}}function n(r,a,c,l,h,u){const d=c.num_points(),f=u.num_components(),g=s(r,h),_=f*h.BYTES_PER_ELEMENT,m=Math.ceil(_/4)*4,p=m/h.BYTES_PER_ELEMENT,v=d*_,S=d*m,M=r._malloc(v);a.GetAttributeDataArrayForAllPoints(c,u,g,v,M);const A=new h(r.HEAPF32.buffer,M,v/h.BYTES_PER_ELEMENT);let E;if(_===m)E=A.slice();else{E=new h(S/h.BYTES_PER_ELEMENT);let R=0;for(let I=0,y=A.length;I<y;I++){for(let T=0;T<f;T++)E[R+T]=A[I*f+T];R+=p}}return r._free(M),{name:l,count:d,itemSize:f,array:E,stride:p}}function s(r,a){switch(a){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class wv{constructor(){this.gltfLoader=new Hx,this.dracoLoader=new Tv,this.textureLoader=new Su,this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/"),this.dracoLoader.setDecoderConfig({type:"js"}),this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.textureCache=new Map,this.loadingPromises=new Map,this.debug=!1}async loadModel(t,e={}){const i=t+JSON.stringify(e);if(this.modelCache.has(i)){const s=this.modelCache.get(i);return this._cloneGLTF(s)}if(this.loadingPromises.has(i)){const s=await this.loadingPromises.get(i);return this._cloneGLTF(s)}const n=new Promise((s,r)=>{this.debug&&console.log(`[AssetManager] Loading: ${t}`),this.gltfLoader.load(t,a=>{this.debug&&(console.log(`[AssetManager] Loaded: ${t}`),console.log(`  - Animations: ${a.animations.length}`),a.animations.forEach((l,h)=>{console.log(`    ${h}: ${l.name} (${l.duration.toFixed(2)}s)`)})),e.scale&&a.scene.scale.setScalar(e.scale),a.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.material&&(Array.isArray(l.material)?l.material.forEach(h=>this._fixMaterial(h)):this._fixMaterial(l.material)))});const c={scene:a.scene,animations:a.animations,gltf:a};this.modelCache.set(i,c),s(c)},a=>{if(this.debug&&a.total>0){const c=(a.loaded/a.total*100).toFixed(1);console.log(`[AssetManager] Loading ${t}: ${c}%`)}},a=>{console.error(`[AssetManager] Failed to load: ${t}`,a),r(a)})});this.loadingPromises.set(i,n);try{const s=await n;return this.loadingPromises.delete(i),this._cloneGLTF(s)}catch(s){throw this.loadingPromises.delete(i),s}}_cloneGLTF(t){return{scene:t.scene.clone(),animations:t.animations,gltf:t.gltf}}_fixMaterial(t){(t.isMeshStandardMaterial||t.isMeshPhysicalMaterial)&&(t.metalness===void 0&&(t.metalness=0),t.roughness===void 0&&(t.roughness=.8)),t.transparent&&(t.depthWrite=!1,t.side=ue)}async loadTexture(t,e={}){return this.textureCache.has(t)?this.textureCache.get(t):new Promise((i,n)=>{this.textureLoader.load(t,s=>{e.repeat&&(s.wrapS=Ni,s.wrapT=Ni,s.repeat.set(e.repeat[0],e.repeat[1])),e.encoding?s.colorSpace=e.encoding:s.colorSpace=Te,e.anisotropy&&(s.anisotropy=e.anisotropy),this.textureCache.set(t,s),i(s)},void 0,n)})}async preload(t){const e=t.map(i=>i.type==="model"?this.loadModel(i.path,i.options):i.type==="texture"?this.loadTexture(i.path,i.options):Promise.resolve());return Promise.all(e)}createAnimationSystem(t,e){const i=new wu(t),n=new Map;return e.forEach(s=>{const r=i.clipAction(s);n.set(s.name,r),n.set(s.name.toLowerCase(),r)}),{mixer:i,actions:n,play:(s,r={})=>{const a=n.get(s)||n.get(s.toLowerCase());return a?(a.reset(),r.loop!==void 0&&a.setLoop(r.loop?Wh:Vh),r.clampWhenFinished&&(a.clampWhenFinished=!0),r.timeScale&&(a.timeScale=r.timeScale),r.fadeIn&&a.fadeIn(r.fadeIn),a.play(),a):(this.debug&&console.warn(`[AssetManager] Animation not found: ${s}`),null)},crossFade:(s,r,a=.2)=>{const c=n.get(s)||n.get(s.toLowerCase()),l=n.get(r)||n.get(r.toLowerCase());return l?(l.reset(),l.play(),c&&c.isRunning()&&c.crossFadeTo(l,a,!0),l):null},stopAll:()=>{i.stopAllAction()},update:s=>{i.update(s)}}}clearCache(){this.modelCache.clear(),this.textureCache.clear()}dispose(){this.modelCache.forEach(t=>{t.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(i=>i.dispose()):e.material.dispose())})}),this.textureCache.forEach(t=>{t.dispose()}),this.dracoLoader.dispose(),this.clearCache()}}const cr=new wv,Nt={IDLE:"idle",MOVING:"moving",DODGING:"dodging",ATTACKING:"attacking",HEAVY_ATTACKING:"heavy_attacking",BLOCKING:"blocking",STAGGERED:"staggered",DEAD:"dead"},bn={dodge:20,lightAttack:15,heavyAttack:30},vi={dodgeDuration:.45,dodgeIframes:.3,lightAttackDuration:.4,heavyAttackDuration:.7,lightHitStart:.1,lightHitEnd:.25,heavyHitStart:.2,heavyHitEnd:.4,staggerDuration:.8,comboWindow:.15},Av={[Nt.IDLE]:"Idle",[Nt.MOVING]:"Walking",[Nt.DODGING]:"Jump",[Nt.ATTACKING]:"Punch",[Nt.HEAVY_ATTACKING]:"Punch",[Nt.BLOCKING]:"Idle",[Nt.STAGGERED]:"No",[Nt.DEAD]:"Death"};class Ev{constructor(t,e,i){this.scene=t,this.gm=e,this.input=i,this.cameraController=null,this.world=null,this.state=Nt.IDLE,this.stateTimer=0,this.isInvincible=!1,this.attackCombo=0,this.hitThisSwing=!1,this.velocity=new b,this.moveSpeed=6,this.dodgeSpeed=14,this.gravity=-30,this.grounded=!0,this.collisionRadius=.4,this.currentMoveVelocity=new b,this.moveAcceleration=35,this.moveDeceleration=25,this.dodgeGhostMeshes=[],this.lastGhostSpawnTime=0,this.ghostSpawnInterval=.05,this.moveDir=new b,this.dodgeDir=new b,this.facingAngle=0,this.modelLoaded=!1,this.animSystem=null,this.currentAnim=null,this.gltfModel=null,this.mesh=new $t,this.mesh.position.set(0,0,5),this._createFallbackMesh(),this.attackRange=2,this.lightDamage=15,this.heavyDamage=35,this.lightPostureDmg=10,this.heavyPostureDmg=25,t.add(this.mesh),this._loadGLTFModel()}_createFallbackMesh(){const t=new wt({color:5921384,roughness:.35,metalness:.85}),e=new dn(.35,.6,8,16);this.fallbackBody=new Y(e,t),this.fallbackBody.position.y=1.1,this.fallbackBody.castShadow=!0,this.mesh.add(this.fallbackBody);const i=new Me(.22,16,12);this.fallbackHead=new Y(i,t),this.fallbackHead.position.y=1.7,this.mesh.add(this.fallbackHead);const n=new wt({color:6737151,emissive:4491468,emissiveIntensity:3}),s=new ie(.2,.04,.12);this.visor=new Y(s,n),this.visor.position.set(0,1.68,.25),this.mesh.add(this.visor),this.body=this.fallbackBody}async _loadGLTFModel(){try{const t="/project-ashen/",{scene:e,animations:i}=await cr.loadModel(`${t}assets/models/robot_expressive.glb`,{scale:.8});this.gltfModel=e,this.gltfModel.position.y=0,this.gltfModel.rotation.y=Math.PI,this.gltfModel.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.material&&(n.material.color&&n.material.color.multiplyScalar(.85),n.material.emissive&&(n.material.emissive.setHex(0),n.material.emissiveIntensity=0)),n.userData.originalMaterial=n.material.clone())}),this.fallbackBody&&(this.fallbackBody.visible=!1),this.fallbackHead&&(this.fallbackHead.visible=!1),this.visor&&(this.visor.visible=!1),this.mesh.add(this.gltfModel),i&&i.length>0&&(this.animSystem=cr.createAnimationSystem(this.gltfModel,i),this._playAnimation(Nt.IDLE,{loop:!0})),this.modelLoaded=!0,this.body=this.gltfModel}catch(t){console.error("[Player] Failed to load GLTF model:",t)}}_playAnimation(t,e={}){if(!this.animSystem)return;const i=Av[t];if(!i||this.currentAnim===i&&t!==Nt.ATTACKING)return;const n={loop:t===Nt.IDLE||t===Nt.MOVING||t===Nt.BLOCKING,fadeIn:.2,timeScale:1,clampWhenFinished:t===Nt.DEAD};t===Nt.ATTACKING?(n.timeScale=1.3+this.attackCombo*.1,n.loop=!1):t===Nt.HEAVY_ATTACKING?(n.timeScale=.9,n.loop=!1):t===Nt.DODGING?(n.timeScale=1.5,n.loop=!1):t===Nt.MOVING&&(n.timeScale=1.2);const s={...n,...e};this.currentAnim?this.animSystem.crossFade(this.currentAnim,i,s.fadeIn):this.animSystem.play(i,s),this.currentAnim=i}update(t){if(this.gm.isDead){this.state=Nt.DEAD,this.currentAnim!=="Death"&&this._playAnimation(Nt.DEAD);return}switch(this.animSystem&&this.animSystem.update(t),this.stateTimer+=t,this.state){case Nt.IDLE:case Nt.MOVING:this._processMovement(t),this._processCombatInput();break;case Nt.DODGING:this._processDodge(t);break;case Nt.ATTACKING:case Nt.HEAVY_ATTACKING:this._processAttack(t);break;case Nt.BLOCKING:this._processBlock(t);break;case Nt.STAGGERED:this.stateTimer>=vi.staggerDuration&&this._changeState(Nt.IDLE);break}if(this.world){const e=this.world.getFloorY(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y>e?(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=e?(this.mesh.position.y=e,this.velocity.y=0,this.grounded=!0):this.grounded=!1):this.mesh.position.y<e?(this.mesh.position.y=ee.lerp(this.mesh.position.y,e,8*t),this.velocity.y=0,this.grounded=!0):(this.velocity.y=0,this.grounded=!0)}else this.mesh.position.y>0&&(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.velocity.y=0,this.grounded=!0))}_processMovement(t){const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const i=this._getCameraYaw(),n=new b(-Math.sin(i),0,-Math.cos(i)),s=new b(Math.cos(i),0,-Math.sin(i));this.moveDir.set(0,0,0).addScaledVector(n,-e.z).addScaledVector(s,e.x).normalize();const r=this.moveDir.clone().multiplyScalar(this.moveSpeed);this.currentMoveVelocity.lerp(r,this.moveAcceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this._applyWallCollision(),this.facingAngle=Math.atan2(this.moveDir.x,this.moveDir.z),this.mesh.rotation.y=ee.lerp(this.mesh.rotation.y,this.facingAngle+Math.PI,10*t),this.state!==Nt.MOVING&&this._changeState(Nt.MOVING)}else this.currentMoveVelocity.length()>.01?(this.currentMoveVelocity.lerp(new b(0,0,0),this.moveDeceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this._applyWallCollision()):this.currentMoveVelocity.set(0,0,0),this.state===Nt.MOVING&&this._changeState(Nt.IDLE)}_applyWallCollision(){if(!this.world)return;const t=this.world.checkCollision(this.mesh.position,this.collisionRadius);t&&t.collides&&t.pushVector&&this.mesh.position.add(t.pushVector)}_applyFloorCollision(){if(!this.world)return;const t=this.world.getFloorY(this.mesh.position.x,this.mesh.position.z),e=t-this.mesh.position.y;Math.abs(e)<.1?this.mesh.position.y=t:e>0?this.mesh.position.y=ee.lerp(this.mesh.position.y,t,.3):this.mesh.position.y=ee.lerp(this.mesh.position.y,t,.2)}_processCombatInput(){if(this.input.lockOn&&this._toggleLockOn(),this.input.dodge&&this.gm.canUseStamina(bn.dodge)){this._startDodge();return}if(this.input.lightAttack&&this.gm.canUseStamina(bn.lightAttack)){this._startAttack(!1);return}if(this.input.heavyAttack&&this.gm.canUseStamina(bn.heavyAttack)){this._startAttack(!0);return}this.input.block&&this._changeState(Nt.BLOCKING)}_toggleLockOn(){if(!this.cameraController||!this.gm.enemyManager)return;const e=this.gm.enemyManager.enemies.filter(a=>!a.isDead);if(this.gm.enemyManager.boss&&!this.gm.enemyManager.boss.isDead&&e.push(this.gm.enemyManager.boss),e.length===0){this.cameraController.clearLockOn();return}const i=20,n=this.mesh.position,s=e.map(a=>({enemy:a,dist:n.distanceTo(a.mesh.position)})).filter(a=>a.dist<=i).sort((a,c)=>a.dist-c.dist);if(s.length===0){this.cameraController.clearLockOn();return}const r=this.cameraController.lockOnTarget;if(r&&!r.isDead){const a=s.findIndex(c=>c.enemy===r);if(a!==-1&&s.length>1){const c=(a+1)%s.length;this.cameraController.setLockOnTarget(s[c].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.3})}else this.cameraController.clearLockOn(),this.gm.audioManager&&this.gm.audioManager.play("menuBack",{volume:.3})}else this.cameraController.setLockOnTarget(s[0].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.4})}_startDodge(){this.gm.useStamina(bn.dodge),this.gm.audioManager&&this.gm.audioManager.play("dodge",{position:this.mesh.position,volume:.5});const t=this.input.getMovementVector();if(t.x!==0||t.z!==0){const e=this._getCameraYaw(),i=new b(-Math.sin(e),0,-Math.cos(e)),n=new b(-Math.cos(e),0,Math.sin(e));this.dodgeDir.set(0,0,0).addScaledVector(i,-t.z).addScaledVector(n,t.x).normalize()}else this.dodgeDir.set(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.isInvincible=!0,this.lastGhostSpawnTime=0,this._flashDodgeStart(),this._changeState(Nt.DODGING)}_flashDodgeStart(){this._flashModel(65535,100)}_flashModel(t,e){if(this.gltfModel&&(this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(t),s.emissiveIntensity=.5)})}),setTimeout(()=>{this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(0),s.emissiveIntensity=0)})})},e)),this.visor&&this.visor.material){const i=this.visor.material.emissive.getHex();this.visor.material.emissive.setHex(t),this.visor.material.emissiveIntensity=8,setTimeout(()=>{this.visor.material.emissive.setHex(i),this.visor.material.emissiveIntensity=3},e)}}_spawnDodgeGhost(){const t=new $t,e=new Zt({color:4491519,transparent:!0,opacity:.4,depthWrite:!1});if(this.gltfModel)this.gltfModel.traverse(i=>{if(i.isMesh&&i.visible){const n=new Y(i.geometry.clone(),e);n.position.copy(i.position),n.rotation.copy(i.rotation),n.scale.copy(i.scale),t.add(n)}});else{const i=new dn(.35,.6,4,8),n=new Y(i,e);n.position.y=1.1,t.add(n)}t.position.copy(this.mesh.position),t.rotation.y=this.mesh.rotation.y,this.scene.add(t),this.dodgeGhostMeshes.push({mesh:t,material:e,spawnTime:Date.now(),lifetime:200})}_updateDodgeGhosts(){const t=Date.now();for(let e=this.dodgeGhostMeshes.length-1;e>=0;e--){const i=this.dodgeGhostMeshes[e],n=t-i.spawnTime;if(n>i.lifetime)this.scene.remove(i.mesh),i.mesh.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),this.dodgeGhostMeshes.splice(e,1);else{const s=n/i.lifetime;i.material.opacity=.4*(1-s)}}}_processDodge(t){const e=this.stateTimer/vi.dodgeDuration,i=Math.sin(e*Math.PI);this.mesh.position.addScaledVector(this.dodgeDir,this.dodgeSpeed*i*t),this._applyWallCollision(),this.lastGhostSpawnTime+=t,this.isInvincible&&this.lastGhostSpawnTime>=this.ghostSpawnInterval&&(this._spawnDodgeGhost(),this.lastGhostSpawnTime=0),this._updateDodgeGhosts(),this.stateTimer>=vi.dodgeIframes&&this.isInvincible&&(this.isInvincible=!1,this._flashDodgeEnd()),this.stateTimer>=vi.dodgeDuration&&(this.isInvincible=!1,this._changeState(Nt.IDLE))}_flashDodgeEnd(){this._flashModel(2236962,50)}_startAttack(t){const e=t?bn.heavyAttack:bn.lightAttack;this.gm.useStamina(e),this.hitThisSwing=!1,this.gm.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.5,pitch:t?.8:1,variation:.1});const i=this._getCameraYaw();this.facingAngle=i,this.mesh.rotation.y=i+Math.PI,this.gm.particleManager,this._changeState(t?Nt.HEAVY_ATTACKING:Nt.ATTACKING)}_processAttack(t){const e=this.state===Nt.HEAVY_ATTACKING,i=e?vi.heavyAttackDuration:vi.lightAttackDuration,n=e?vi.heavyHitStart:vi.lightHitStart,s=e?vi.heavyHitEnd:vi.lightHitEnd;if(this.stateTimer>=n&&this.stateTimer<s&&!this.hitThisSwing&&this._checkHit(e),!e&&this.stateTimer>i-vi.comboWindow&&this.stateTimer<i&&this.input.lightAttack&&this.gm.canUseStamina(bn.lightAttack)){this.attackCombo=(this.attackCombo+1)%3,this._startAttack(!1);return}const r=new b(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle)),a=e?3:2;this.stateTimer<s&&(this.mesh.position.addScaledVector(r,a*t),this._applyWallCollision()),this.stateTimer>=i&&(this.attackCombo=0,this._changeState(Nt.IDLE))}_checkHit(t){this.activeAttack={position:this.mesh.position.clone().add(new b(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(1.2)),range:this.attackRange,damage:t?this.heavyDamage:this.lightDamage,postureDmg:t?this.heavyPostureDmg:this.lightPostureDmg,isHeavy:t}}_processBlock(t){this.input.block||this._changeState(Nt.IDLE);const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const i=this._getCameraYaw(),n=new b(-Math.sin(i),0,-Math.cos(i)),s=new b(-Math.cos(i),0,Math.sin(i)),r=new b().addScaledVector(n,-e.z).addScaledVector(s,e.x).normalize();this.mesh.position.addScaledVector(r,this.moveSpeed*.3*t)}}_changeState(t){this.state!==t&&((this.state===Nt.ATTACKING||this.state===Nt.HEAVY_ATTACKING)&&(this.activeAttack=null),this.state=t,this.stateTimer=0,this._playAnimation(t))}setCameraController(t){this.cameraController=t}setWorld(t){this.world=t}_getCameraYaw(){return this.cameraController?this.cameraController.yaw:0}resetPosition(){this.mesh.position.copy(this.gm.checkpoint),this.velocity.set(0,0,0),this._changeState(Nt.IDLE)}get isBlocking(){return this.state===Nt.BLOCKING}get isAttacking(){return this.state===Nt.ATTACKING||this.state===Nt.HEAVY_ATTACKING}get isDead(){return this.state===Nt.DEAD}flashDamage(){this._flashModel(6684672,150)}}const _o={CRYPT_LORDS_GREATSWORD:{id:"crypt-lords-greatsword",name:"Crypt Lord's Greatsword",type:"weapon",description:"A massive blade once wielded by the guardian of the ritual chamber. Purple energy crackles through cracks in the metal.",stats:{damage:65,scaling:{strength:"A",dexterity:"D"},weight:12,criticalDamage:110},special:"Charged R2 releases purple shockwave (consumes 20 extra stamina)",color:6693546,lightColor:8930508,canInfuse:!1},LORD_SOUL_FRAGMENT:{id:"lord-soul-fragment",name:"Lord Soul Fragment",type:"upgrade",description:"A fragment of the soul that sought godhood. Can be used at the crucible to grant +2 to any single stat track.",stats:{infusionBonus:2},color:16729343,lightColor:16738047,lore:"What rises from the ritual circle was never meant to die. It was meant to ascend."}};class Cv{constructor(t,e){this.scene=t,this.gm=e,this.items=[],this.inventory={keys:new Set,weapons:[],upgrades:[]},this.bossesDefeated=new Set,this.notificationEl=document.getElementById("item-notification"),this.victoryNotificationEl=document.getElementById("victory-notification")}initItems(t){t.forEach((e,i)=>{this.spawnItem(e.pos,e.type,e)})}spawnItem(t,e,i={}){const n={id:`item-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:e,position:t.clone(),collected:!1,mesh:null,light:null,...i};switch(e){case"remnant":this._createRemnantVisual(n);break;case"key":this._createKeyVisual(n);break;case"boss_remnant":this._createBossRemnantVisual(n);break;case"boss_weapon":this._createBossWeaponVisual(n);break;case"boss_upgrade":this._createBossUpgradeVisual(n);break;default:this._createGenericVisual(n)}return this.items.push(n),n}_createRemnantVisual(t){const e=new Me(.15,12,12),i=new wt({color:8978346,emissive:4500070,emissiveIntensity:.8,transparent:!0,opacity:.9});t.mesh=new Y(e,i),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh),t.light=new fi(8978346,.8,4),t.light.position.copy(t.position),this.scene.add(t.light);const n=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=n+Math.sin(Date.now()*.003)*.15,t.mesh.rotation.y+=.02,t.light.position.y=t.mesh.position.y,t.light.intensity=.6+Math.sin(Date.now()*.005)*.3)};s()}_createKeyVisual(t){const e=new $t,i=new fn(.12,.03,8,16),n=new wt({color:13412932,emissive:6702114,emissiveIntensity:.5,metalness:.8,roughness:.3}),s=new Y(i,n);s.rotation.x=Math.PI/2,e.add(s);const r=new ie(.04,.25,.02),a=new Y(r,n);a.position.y=-.18,e.add(a);const c=new ie(.08,.04,.02),l=new Y(c,n);l.position.set(.04,-.25,0),e.add(l);const h=new Y(c,n);h.position.set(.04,-.32,0),e.add(h),e.position.copy(t.position),t.mesh=e,this.scene.add(e),t.light=new fi(16755268,1,5),t.light.position.copy(t.position),this.scene.add(t.light);const u=t.position.y,d=()=>{t.collected||(requestAnimationFrame(d),t.mesh.position.y=u+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.015,t.light.position.y=t.mesh.position.y,t.light.intensity=.8+Math.sin(Date.now()*.004)*.3)};d()}_createGenericVisual(t){const e=new mo(.15),i=new wt({color:11184895,emissive:4474026,emissiveIntensity:.5});t.mesh=new Y(e,i),t.mesh.position.copy(t.position),this.scene.add(t.mesh);const n=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=n+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.02,t.mesh.rotation.x+=.01)};s()}_createBossRemnantVisual(t){const e=new Me(.4,24,24),i=new wt({color:16768358,emissive:16755234,emissiveIntensity:1.2,transparent:!0,opacity:.95});t.mesh=new Y(e,i),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh);const n=new Me(.2,16,16),s=new Zt({color:16777215,transparent:!0,opacity:.9}),r=new Y(n,s);t.mesh.add(r),t.light=new fi(16768358,2.5,8),t.light.position.copy(t.position),this.scene.add(t.light);const a=t.position.y,c=()=>{if(t.collected)return;requestAnimationFrame(c);const l=Date.now()*.002;t.mesh.position.y=a+Math.sin(l)*.2,t.mesh.rotation.y+=.025;const h=1+Math.sin(l*2)*.08;t.mesh.scale.setScalar(h),t.light.position.y=t.mesh.position.y,t.light.intensity=2+Math.sin(l*2)*.8};c()}_createBossWeaponVisual(t){const e=new $t,i=t.itemDef||_o.CRYPT_LORDS_GREATSWORD,n=new ie(.12,1.2,.03),s=new wt({color:5592422,emissive:i.color,emissiveIntensity:.4,metalness:.9,roughness:.2}),r=new Y(n,s);r.position.y=.6,e.add(r);const a=new ie(.02,.8,.04),c=new Zt({color:i.lightColor,transparent:!0,opacity:.9}),l=new Y(a,c);l.position.set(.03,.5,0),l.rotation.z=.15,e.add(l);const h=new Y(a,c);h.position.set(-.02,.7,0),h.rotation.z=-.1,e.add(h);const u=new ie(.35,.06,.06),d=new wt({color:3355460,metalness:.8,roughness:.3}),f=new Y(u,d);f.position.y=0,e.add(f);const g=new be(.03,.035,.3,8),_=new wt({color:4465186,roughness:.8}),m=new Y(g,_);m.position.y=-.18,e.add(m);const p=new Me(.05,8,8),v=new wt({color:i.color,emissive:i.color,emissiveIntensity:.6}),S=new Y(p,v);S.position.y=-.35,e.add(S),e.position.copy(t.position),e.rotation.z=Math.PI/6,t.mesh=e,this.scene.add(e),t.light=new fi(i.lightColor,1.5,6),t.light.position.copy(t.position),this.scene.add(t.light);const M=t.position.y,A=()=>{if(t.collected)return;requestAnimationFrame(A);const E=Date.now()*.001;t.mesh.position.y=M+Math.sin(E*2)*.12,t.mesh.rotation.y+=.015;const R=.6+Math.sin(E*4)*.3;c.opacity=R,t.light.position.y=t.mesh.position.y,t.light.intensity=1.2+Math.sin(E*3)*.5};A()}_createBossUpgradeVisual(t){const e=t.itemDef||_o.LORD_SOUL_FRAGMENT,i=new $t,n=new mo(.25),s=new wt({color:e.color,emissive:e.color,emissiveIntensity:1,transparent:!0,opacity:.85,metalness:.3,roughness:.1}),r=new Y(n,s);i.add(r);const a=5,c=[];for(let u=0;u<a;u++){const d=new Me(.04,8,8),f=new Zt({color:16777215,transparent:!0,opacity:.8}),g=new Y(d,f);g.userData.orbitAngle=Math.PI*2*u/a,g.userData.orbitRadius=.35+Math.random()*.1,g.userData.orbitSpeed=2+Math.random(),c.push(g),i.add(g)}i.position.copy(t.position),t.mesh=i,this.scene.add(i),t.light=new fi(e.lightColor,2,7),t.light.position.copy(t.position),this.scene.add(t.light);const l=t.position.y,h=()=>{if(t.collected)return;requestAnimationFrame(h);const u=Date.now()*.001;t.mesh.position.y=l+Math.sin(u*1.5)*.15,r.rotation.y+=.02,r.rotation.x=Math.sin(u)*.2,c.forEach(d=>{const f=d.userData.orbitAngle+u*d.userData.orbitSpeed;d.position.x=Math.cos(f)*d.userData.orbitRadius,d.position.z=Math.sin(f)*d.userData.orbitRadius,d.position.y=Math.sin(f*2)*.1}),t.light.position.y=t.mesh.position.y,t.light.intensity=1.5+Math.sin(u*2)*.7};h()}spawnBossRewards(t,e,i,n){if(this.bossesDefeated.has(e))return;this.bossesDefeated.add(e);const s=t.clone();s.y+=.5,this.spawnItem(s,"boss_remnant",{value:i,name:`${i} Remnant`});const r=t.clone();r.x+=.8,r.y+=.8;const a=n.type==="weapon"?"boss_weapon":"boss_upgrade";this.spawnItem(r,a,{itemDef:n,name:n.name,description:n.description})}showVictoryNotification(t){let e=this.victoryNotificationEl;e||(e=document.getElementById("victory-notification")),e||(e=document.createElement("div"),e.id="victory-notification-temp",e.style.cssText=`
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
      `,document.body.appendChild(e)),e.innerHTML=`<span style="display:block;font-size:0.4em;color:#aaa;margin-bottom:0.3em">GREAT FOE VANQUISHED</span>${t}`,e.style.opacity="0",setTimeout(()=>{e.style.opacity="1"},100),setTimeout(()=>{e.style.opacity="0"},4500),e.id==="victory-notification-temp"&&setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},6e3)}update(t){for(const i of this.items){if(i.collected)continue;t.distanceTo(i.position)<1.5&&this.collectItem(i)}}collectItem(t){if(t.collected)return;t.collected=!0,t.mesh&&this.scene.remove(t.mesh),t.light&&this.scene.remove(t.light),this.gm.audioManager&&this.gm.audioManager.play("itemPickup",{position:t.position,volume:.6});let e="";switch(t.type){case"remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`;break;case"boss_remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:.8});break;case"key":this.inventory.keys.add(t.keyId),e=`Got ${t.name}`;break;case"boss_weapon":this.inventory.weapons.push(t.itemDef||t),e=`Obtained: ${t.name}`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:1});break;case"boss_upgrade":this.inventory.upgrades.push(t.itemDef||t),e=`Obtained: ${t.name}`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:1});break;default:e="Item collected"}this.showNotification(e)}showNotification(t){this.notificationEl&&(this.notificationEl.textContent=t,this.notificationEl.classList.add("visible"),setTimeout(()=>{this.notificationEl.classList.remove("visible")},2e3))}hasKey(t){return this.inventory.keys.has(t)}resetItems(){}}const W={IDLE:"idle",PATROL:"patrol",CHASE:"chase",CIRCLE:"circle",RETREAT:"retreat",ATTACK:"attack",STAGGERED:"staggered",DEAD:"dead",DORMANT:"dormant",RISING:"rising",BOSS_SLAM:"boss_slam",BOSS_SWEEP:"boss_sweep",BOSS_COMBO:"boss_combo",BOSS_CHARGE:"boss_charge",BOSS_GRAB:"boss_grab",BOSS_TRANSITION:"boss_transition",BOSS_SUMMON:"boss_summon",BOSS_AOE:"boss_aoe",BOSS_PROJECTILE:"boss_projectile"},Rv={[W.IDLE]:"Idle",[W.PATROL]:"Walking",[W.CHASE]:"Running",[W.CIRCLE]:"Walking",[W.RETREAT]:"Walking",[W.ATTACK]:"Punch",[W.STAGGERED]:"No",[W.DEAD]:"Death",[W.DORMANT]:"Idle",[W.RISING]:"ThumbsUp",[W.BOSS_SLAM]:"Punch",[W.BOSS_SWEEP]:"Punch",[W.BOSS_COMBO]:"Punch",[W.BOSS_CHARGE]:"Running",[W.BOSS_GRAB]:"Punch",[W.BOSS_TRANSITION]:"No",[W.BOSS_SUMMON]:"ThumbsUp",[W.BOSS_AOE]:"Punch",[W.BOSS_PROJECTILE]:"Punch"},xo={HOLLOW_SOLDIER:{name:"Hollow Soldier",health:50,damage:15,postureDmg:15,moveSpeed:2.5,detectionRange:10,attackRange:2.2,attackCooldown:1.5,attackWindup:.5,attackDuration:.2,remnantDrop:40,patrolRadius:3,bodyColor:4860458,eyeColor:16724787,canChainAttacks:!1,maxPosture:60,hasShield:!1,modelPath:"assets/models/robot_expressive.glb",modelScale:.5,modelTint:4872762,animSpeedMult:1},BERSERKER:{name:"Berserker",health:35,damage:20,postureDmg:10,moveSpeed:4,detectionRange:12,attackRange:2,attackCooldown:.8,attackWindup:.3,attackDuration:.15,remnantDrop:60,patrolRadius:5,bodyColor:6693410,eyeColor:16737792,canChainAttacks:!0,maxChainAttacks:3,maxPosture:40,hasShield:!1,modelPath:"assets/models/robot_expressive.glb",modelScale:.55,modelTint:9052706,animSpeedMult:1.5},SENTINEL:{name:"Sentinel",health:100,damage:30,postureDmg:25,moveSpeed:1.5,detectionRange:8,attackRange:2.5,attackCooldown:2.5,attackWindup:.8,attackDuration:.3,remnantDrop:100,patrolRadius:2,bodyColor:3355460,eyeColor:4474111,canChainAttacks:!1,maxPosture:100,hasShield:!0,shieldBlockChance:.4,modelPath:"assets/models/soldier.glb",modelScale:.9,modelTint:3816026,animSpeedMult:.8},CRYPT_GUARDIAN:{name:"Crypt Guardian",health:200,damage:40,postureDmg:30,moveSpeed:1.8,detectionRange:12,attackRange:3,attackCooldown:2,attackWindup:.6,attackDuration:.4,remnantDrop:500,patrolRadius:3,bodyColor:1710634,eyeColor:16720418,canChainAttacks:!0,maxChainAttacks:2,maxPosture:150,hasShield:!1,isElite:!0,modelPath:"assets/models/soldier.glb",modelScale:1.2,modelTint:2759226,animSpeedMult:.9},BONE_REVENANT:{name:"Bone Revenant",health:40,damage:18,postureDmg:12,moveSpeed:3.5,detectionRange:8,attackRange:2,attackCooldown:.9,attackWindup:.25,attackDuration:.15,remnantDrop:70,patrolRadius:4,bodyColor:9075290,eyeColor:4521796,canChainAttacks:!0,maxChainAttacks:2,maxPosture:45,hasShield:!1,isAmbush:!0,modelPath:"assets/models/robot_expressive.glb",modelScale:.45,modelTint:9075290,animSpeedMult:1.4},CRYPT_LORD:{name:"The Crypt Lord",health:600,damage:45,postureDmg:35,moveSpeed:2,detectionRange:20,attackRange:3.5,attackCooldown:1.8,attackWindup:.8,attackDuration:.3,remnantDrop:2500,patrolRadius:3,bodyColor:1710634,eyeColor:16720418,canChainAttacks:!0,maxChainAttacks:3,maxPosture:200,hasShield:!1,isBoss:!0,isElite:!0,bossPhase:1,attacks:{GREATSWORD_SLAM:{damage:55,postureDmg:40,windup:.8,recovery:1.5,range:4},HORIZONTAL_SWEEP:{damage:45,postureDmg:35,windup:.6,recovery:1,range:4.5},THREE_HIT_COMBO:{damages:[35,35,50],postureDmg:25,windup:.4,recovery:2,range:3.5},SHOULDER_BASH:{damage:30,postureDmg:45,windup:.5,recovery:1.2,range:6,isCharge:!0},GRAB:{damage:80,postureDmg:0,windup:1,recovery:2.5,range:2.5,isGrab:!0},SKELETON_SUMMON:{windup:1.2,recovery:1.5,summonCount:2},GROUND_SLAM_AOE:{damage:50,postureDmg:60,windup:1,recovery:2,range:8,jumpHeight:3},DARK_PROJECTILE:{damage:40,windup:.6,recovery:.8,speed:8,trackingStrength:3}},modelPath:"assets/models/soldier.glb",modelScale:1.5,modelTint:2759226,animSpeedMult:.85}};class vo{constructor(t,e,i={},n=null){this.scene=t,this.gm=n;const s=i.type?xo[i.type]:{};this.config={...xo.HOLLOW_SOLDIER,...s,...i},this.maxHealth=this.config.health,this.health=this.maxHealth,this.maxPosture=this.config.maxPosture||60,this.posture=0,this.isDormant=this.config.behavior==="ambush"||this.config.isAmbush,this.triggerZone=this.config.triggerZone||null,this.triggerRadius=this.config.triggerRadius||6,this.state=this.isDormant?W.DORMANT:W.IDLE,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.isBlocking=!1,this.isDead=!1,this.chainAttackCount=0,this.lastAttackTime=0,this.circleDirection=Math.random()>.5?1:-1,this.circleTimer=0,this.spawnPos=e.clone(),this.patrolTarget=e.clone(),this.patrolWait=0,this.modelLoaded=!1,this.animSystem=null,this.currentAnim=null,this.gltfModel=null,this.mesh=new $t,this.mesh.position.copy(e),this._createFallbackMesh(),this._createHealthBar(2.1),t.add(this.mesh),this.isDormant&&(this.mesh.visible=!1),this._loadGLTFModel(),this.world=null,this.collisionRadius=.5,this.lastPosition=e.clone(),this.stuckTimer=0,this.stuckThreshold=2,this.unstuckAttempts=0,this.avoidanceDir=null,this.avoidanceTimer=0,this.config.isBoss&&(this.isBoss=!0,this.bossPhase=this.config.bossPhase||1,this.bossActive=!1,this.currentBossAttack=null,this.bossComboHit=0,this.lastBossAttackTime=0,this.bossAttackCooldown=0,this.chargeTarget=null,this.chargeProgress=0,this.grabTarget=null,this.world=null,this.enemyManager=null,this.activeProjectiles=[],this.summonedAdds=[],this.lastSummonTime=0,this.summonCooldown=15e3,this.aoeJumpProgress=0,this.aoeStartY=0,this._createHealthBar(3.5))}wake(){this.state===W.DORMANT&&(this.mesh.visible=!0,this.isDormant=!1,this._changeState(W.RISING),this.gm?.audioManager&&this.gm.audioManager.play("ambush",{position:this.mesh.position,volume:.7}))}checkTrigger(t){if(this.state!==W.DORMANT)return!1;const e=t.x-this.mesh.position.x,i=t.z-this.mesh.position.z;return Math.sqrt(e*e+i*i)<this.triggerRadius}_createFallbackMesh(){const t=new wt({color:this.config.bodyColor,roughness:.7,metalness:.2}),e=new dn(.3,.5,8,16);this.fallbackBody=new Y(e,t),this.fallbackBody.position.y=1,this.fallbackBody.castShadow=!0,this.mesh.add(this.fallbackBody);const i=new wt({color:this.config.eyeColor,emissive:this.config.eyeColor,emissiveIntensity:4}),n=new Me(.08,8,8);this.eye=new Y(n,i),this.eye.position.set(0,1.5,.25),this.mesh.add(this.eye),this.body=this.fallbackBody}async _loadGLTFModel(){try{const t="/project-ashen/",e=this.config.modelPath||"assets/models/robot_expressive.glb",i=`${t}${e}`,n=this.config.modelScale||.5,{scene:s,animations:r}=await cr.loadModel(i,{scale:n});this.gltfModel=s,this.gltfModel.position.y=0,this.gltfModel.rotation.y=Math.PI,this.config.modelTint&&this._applyModelTint(this.config.modelTint),this.gltfModel.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.userData.originalMaterial=a.material.clone())}),this.fallbackBody&&(this.fallbackBody.visible=!1),this.mesh.add(this.gltfModel),r&&r.length>0&&(this.animSystem=cr.createAnimationSystem(this.gltfModel,r),this._playAnimation(this.state,{loop:!0})),this.modelLoaded=!0,this.body=this.gltfModel}catch(t){console.error(`[Enemy:${this.config.name}] Failed to load GLTF:`,t)}}_applyModelTint(t){const e=new vt(t);this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.color&&s.color.lerp(e,.3),s.emissive&&(s.emissive.copy(e).multiplyScalar(.1),s.emissiveIntensity=.2)})})}_playAnimation(t,e={}){if(!this.animSystem)return;const i=Rv[t];if(!i||this.currentAnim===i&&t!==W.ATTACK)return;const n=this.config.animSpeedMult||1,s={loop:t===W.IDLE||t===W.PATROL||t===W.CHASE||t===W.CIRCLE||t===W.RETREAT,fadeIn:.2,timeScale:n,clampWhenFinished:t===W.DEAD};t===W.ATTACK?(s.loop=!1,s.timeScale=n*1.2):t===W.CHASE&&(s.timeScale=n*1.3);const r={...s,...e};this.currentAnim?this.animSystem.crossFade(this.currentAnim,i,r.fadeIn):this.animSystem.play(i,r),this.currentAnim=i}_createHealthBar(t){this.healthBarGroup=new $t,this.healthBarGroup.position.y=t;const e=new $e(1,.08),i=new Zt({color:1118481,side:ue}),n=new Y(e,i);this.healthBarGroup.add(n);const s=new $e(.98,.06),r=new Zt({color:13382451,side:ue});this.healthFill=new Y(s,r),this.healthFill.position.z=.001,this.healthBarGroup.add(this.healthFill);const a=new $e(1,.04),c=new Zt({color:2236945,side:ue}),l=new Y(a,c);l.position.y=-.08,this.healthBarGroup.add(l);const h=new $e(.98,.03),u=new Zt({color:16763904,side:ue});this.postureFill=new Y(h,u),this.postureFill.position.set(0,-.08,.001),this.postureFill.scale.x=0,this.healthBarGroup.add(this.postureFill),this.mesh.add(this.healthBarGroup),this.healthBarGroup.visible=!1,this.breakIndicator=this._createBreakIndicator(),this.breakIndicator.visible=!1,this.mesh.add(this.breakIndicator)}_createBreakIndicator(){const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.fillStyle="#ffcc00",e.font="bold 32px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("BREAK!",64,32);const i=new cu(t),n=new nu({map:i,transparent:!0,depthTest:!1}),s=new mf(n);return s.scale.set(1.5,.75,1),s.position.y=3,s}update(t,e){if(this.state===W.DEAD)return;this.animSystem&&this.animSystem.update(t),this.stateTimer+=t;const i=this.mesh.position.distanceTo(e.mesh.position),n=this.health/this.maxHealth;if(this.healthBarGroup.visible){const s=this.scene.getObjectByProperty("type","PerspectiveCamera");s&&this.healthBarGroup.lookAt(s.position)}switch(this.config.hasShield&&this.state===W.CHASE&&i<this.config.attackRange*1.5?this.isBlocking=Math.random()<this.config.shieldBlockChance:this.isBlocking=!1,this.state){case W.IDLE:this.patrolWait+=t,i<this.config.detectionRange?(this._changeState(W.CHASE),this.healthBarGroup.visible=!0):this.patrolWait>2&&(this.patrolWait=0,this._pickPatrolTarget(),this._changeState(W.PATROL));break;case W.PATROL:if(i<this.config.detectionRange){this._changeState(W.CHASE),this.healthBarGroup.visible=!0;break}this._moveToward(this.patrolTarget,this.config.moveSpeed*.5,t),this.mesh.position.distanceTo(this.patrolTarget)<.5&&this._changeState(W.IDLE);break;case W.CHASE:if(this.isBoss&&!this.bossActive&&(this.bossActive=!0,this.healthBarGroup.visible=!0,this.world&&this.world.activateBossArena&&this.world.activateBossArena(),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.9})),this.isBoss&&(this.playerTarget=e.mesh.position.clone()),!this.isBoss&&i>this.config.detectionRange*1.5){this._changeState(W.IDLE),this.healthBarGroup.visible=!1;break}if(!this.isBoss&&n<.3&&!this.config.canChainAttacks&&Math.random()<.01){this._changeState(W.RETREAT);break}if(i<=this.config.attackRange&&this.bossAttackCooldown<=0){this.isBoss?this._selectBossAttack(i,n):this._changeState(W.ATTACK);break}if(this.isBoss&&i>this.config.attackRange&&i<8&&this.bossAttackCooldown<=0&&Math.random()<.02){this._startBossCharge(e);break}if(i<this.config.attackRange*2&&Math.random()<.005){this._changeState(W.CIRCLE);break}this._moveToward(e.mesh.position,this.config.moveSpeed,t),this._faceTarget(e.mesh.position,t);break;case W.CIRCLE:if(this.circleTimer+=t,this.circleTimer>1.5||i>this.config.detectionRange){this._changeState(W.CHASE);break}if(i<=this.config.attackRange){this._changeState(W.ATTACK);break}this._circleStrafe(e.mesh.position,t),this._faceTarget(e.mesh.position,t);break;case W.RETREAT:if(this.stateTimer>2||i>this.config.detectionRange){this._changeState(W.CHASE);break}const s=new b().subVectors(this.mesh.position,e.mesh.position);s.y=0,s.normalize();const r=this.mesh.position.clone().add(s.multiplyScalar(3));this._moveToward(r,this.config.moveSpeed*.8,t),this._faceTarget(e.mesh.position,t);break;case W.ATTACK:this._processAttack(t,e);break;case W.STAGGERED:this.gltfModel?this.gltfModel.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5):this.fallbackBody&&(this.fallbackBody.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5)),this.stateTimer>=1.5&&(this.posture=0,this.gltfModel&&(this.gltfModel.rotation.z=0),this.fallbackBody&&(this.fallbackBody.rotation.z=0),this.breakIndicator.visible=!1,this._updatePostureBar(),this._changeState(i<this.config.detectionRange?W.CHASE:W.IDLE));break;case W.DORMANT:break;case W.RISING:if(this.stateTimer<.5){const a=this.gltfModel||this.fallbackBody;if(a){const c=this.stateTimer/.5;a.position.y=ee.lerp(-.8,0,c)}}else if(this.stateTimer>=.8){const a=this.gltfModel||this.fallbackBody;a&&(a.position.y=0),this.healthBarGroup.visible=!0,this._changeState(W.CHASE)}this._faceTarget(e.mesh.position,t*2);break;case W.BOSS_SLAM:this._processBossSlamAttack(t,e);break;case W.BOSS_SWEEP:this._processBossSweepAttack(t,e);break;case W.BOSS_COMBO:this._processBossComboAttack(t,e);break;case W.BOSS_CHARGE:this._processBossChargeAttack(t,e);break;case W.BOSS_GRAB:this._processBossGrabAttack(t,e);break;case W.BOSS_TRANSITION:break;case W.BOSS_SUMMON:this._processBossSummonAttack(t,e);break;case W.BOSS_AOE:this._processBossAOEAttack(t,e);break;case W.BOSS_PROJECTILE:this._processBossProjectileAttack(t,e);break}this.isBoss&&this.activeProjectiles&&this._updateProjectiles(t,e),this.state!==W.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-8*t),this._updatePostureBar()),this.isBoss&&this.bossAttackCooldown>0&&(this.bossAttackCooldown-=t),(!this.isBoss||this.state===W.CHASE||this.state===W.PATROL)&&(this.state===W.CHASE||this.state===W.PATROL||this.state===W.RETREAT||this.state===W.CIRCLE)&&this._checkStuck(t)}_circleStrafe(t,e){const i=new b().subVectors(t,this.mesh.position);i.y=0;const n=i.length();i.normalize();const s=new b(-i.z,0,i.x).multiplyScalar(this.circleDirection),r=this.config.attackRange*1.5,a=new b().copy(i).multiplyScalar((n-r)*.5),c=s.add(a).normalize(),l=this.config.moveSpeed*.7*e,h=this.mesh.position.clone().addScaledVector(c,l);this.world&&this.world.checkCollision?this.world.checkCollision(h,this.collisionRadius).collides?this.circleDirection*=-1:this.mesh.position.copy(h):this.mesh.position.addScaledVector(c,l)}_selectBossAttack(t,e){const i=this.config.attacks;if(!i){this._changeState(W.ATTACK);return}if(this.bossPhase===2){this._selectPhase2Attack(t);return}const n=Math.random();t<=this.config.attackRange&&(n<.1&&i.GRAB?this._changeState(W.BOSS_GRAB):n<.35?this._changeState(W.BOSS_SLAM):n<.65?this._changeState(W.BOSS_COMBO):this._changeState(W.BOSS_SWEEP))}_selectPhase2Attack(t){this.config.attacks;const e=Math.random(),i=Date.now()-this.lastSummonTime>this.summonCooldown,n=this.summonedAdds.filter(s=>!s.isDead).length;if(i&&n===0&&e<.25){this._changeState(W.BOSS_SUMMON);return}if(t>this.config.attackRange&&t<10){if(e<.4)this._changeState(W.BOSS_PROJECTILE);else if(e<.7)this._changeState(W.BOSS_AOE);else if(e<.85)this.chargeTarget=this.playerTarget?this.playerTarget.clone():this.mesh.position.clone(),this.chargeProgress=0,this._changeState(W.BOSS_CHARGE);else return;return}t<=this.config.attackRange&&(e<.15?this._changeState(W.BOSS_AOE):e<.25?this._changeState(W.BOSS_PROJECTILE):e<.4?this._changeState(W.BOSS_SLAM):e<.6?this._changeState(W.BOSS_COMBO):e<.8?this._changeState(W.BOSS_SWEEP):e<.95?this._changeState(W.BOSS_GRAB):i&&n<3?this._changeState(W.BOSS_SUMMON):this._changeState(W.BOSS_SLAM))}_startBossCharge(t){this.chargeTarget=t.mesh.position.clone(),this.chargeProgress=0,this._changeState(W.BOSS_CHARGE)}_processBossSlamAttack(t,e){const i=this.config.attacks?.GREATSWORD_SLAM;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.3,r=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.x=a*-.3);return}if(this.stateTimer>=n&&this.stateTimer<s){if(!this.hitThisSwing){const c=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(1.5)).add(new b(0,1.5,0)),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.8,pitch:.6})}const a=this.gltfModel||this.fallbackBody;if(a){const c=(this.stateTimer-n)/.3;a.rotation.x=ee.lerp(-.3,.2,c)}}if(this.stateTimer>=s&&this.stateTimer<r){this.activeAttack=null;const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.x=ee.lerp(a.rotation.x,0,.08))}this.stateTimer>=r&&this._endBossAttack()}_processBossSweepAttack(t,e){const i=this.config.attacks?.HORIZONTAL_SWEEP;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.25,r=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.z=a*.3);return}if(this.stateTimer>=n&&this.stateTimer<s){this.hitThisSwing||(this.activeAttack={position:this.mesh.position.clone().add(new b(0,1.2,0)),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!1},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.7}));const a=this.gltfModel||this.fallbackBody;if(a){const c=(this.stateTimer-n)/.25;a.rotation.z=ee.lerp(.3,-.25,c)}}if(this.stateTimer>=s&&this.stateTimer<r){this.activeAttack=null;const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.z=ee.lerp(a.rotation.z,0,.1))}this.stateTimer>=r&&this._endBossAttack()}_processBossComboAttack(t,e){const i=this.config.attacks?.THREE_HIT_COMBO;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=.3,r=n+s,a=.15,c=this.bossComboHit||0,l=c*(r+a),h=this.stateTimer-l;if(h<n){this._faceTarget(e.mesh.position,t*3);const u=h/n,d=this.gltfModel||this.fallbackBody;if(d){const f=c%2===0?1:-1;d.rotation.z=u*.25*f}return}if(h>=n&&h<r){if(!this.hitThisSwing){const f=(i.damages||[35,35,50])[c]||i.damage;this.activeAttack={position:this.mesh.position.clone().add(new b(0,1.2,0)),range:i.range,damage:f,postureDmg:i.postureDmg,isHeavy:c===2,isCombo:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.65,pitch:.85+c*.1}),this.hitThisSwing=!0}const u=this.gltfModel||this.fallbackBody;if(u){const d=(h-n)/s,f=c%2===0?1:-1;u.rotation.z=ee.lerp(.25*f,-.2*f,d)}}if(h>=r){this.activeAttack=null,this.hitThisSwing=!1;const u=this.mesh.position.distanceTo(e.mesh.position);if(c<2&&u<this.config.attackRange*1.3){this.bossComboHit=c+1;const d=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.mesh.position.addScaledVector(d,.5)}else{const d=this.gltfModel||this.fallbackBody;d&&(d.rotation.z=0),h>=r+i.recovery&&(this.bossComboHit=0,this._endBossAttack())}}}_processBossChargeAttack(t,e){const i=this.config.attacks?.SHOULDER_BASH;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=.4,r=n+s,a=r+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2),this.chargeTarget=e.mesh.position.clone();const c=this.stateTimer/n,l=this.gltfModel||this.fallbackBody;l&&(l.position.y=-c*.3,l.rotation.x=c*.2);return}if(this.stateTimer>=n&&this.stateTimer<r){this.hitThisSwing||(this.activeAttack={position:this.mesh.position.clone().add(new b(0,1,0)),range:2,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0,isCharge:!0},this.gm?.audioManager&&this.gm.audioManager.play("dash",{position:this.mesh.position,volume:.8}));const c=i.range/s;this._moveToward(this.chargeTarget,c,t),this.activeAttack&&(this.activeAttack.position=this.mesh.position.clone().add(new b(0,1,0)))}if(this.stateTimer>=r&&this.stateTimer<a){this.activeAttack=null;const c=this.gltfModel||this.fallbackBody;c&&(c.position.y=ee.lerp(c.position.y,0,.15),c.rotation.x=ee.lerp(c.rotation.x,0,.15))}this.stateTimer>=a&&this._endBossAttack()}_processBossGrabAttack(t,e){const i=this.config.attacks?.GRAB;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.3,r=s+.5,a=r+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*1.5);const c=this.stateTimer/n,l=this.gltfModel||this.fallbackBody;l&&(l.scale.x=1+c*.15);return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.mesh.position.distanceTo(e.mesh.position)<i.range&&(this.activeAttack={position:this.mesh.position.clone(),range:i.range,damage:i.damage,postureDmg:0,isGrab:!0,isUnblockable:!0},this.grabTarget=e,this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.9})),this.hitThisSwing=!0)),this.stateTimer>=s&&this.stateTimer<r){this.activeAttack=null;const c=this.gltfModel||this.fallbackBody;c&&(c.scale.x=ee.lerp(c.scale.x,1,.1))}if(this.stateTimer>=r&&this.stateTimer<a){this.grabTarget=null;const c=this.gltfModel||this.fallbackBody;c&&(c.scale.x=1)}this.stateTimer>=a&&this._endBossAttack()}_endBossAttack(){this.hitThisSwing=!1,this.activeAttack=null,this.bossComboHit=0,this.chargeTarget=null,this.grabTarget=null,this.bossAttackCooldown=this.config.attackCooldown;const t=this.gltfModel||this.fallbackBody;t&&(t.rotation.x=0,t.rotation.z=0,t.position.y=0,t.scale.x=1),this._changeState(W.CHASE)}_processBossSummonAttack(t,e){const i=this.config.attacks?.SKELETON_SUMMON;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.5,r=s+i.recovery;if(this.stateTimer<n){const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.x=-a*.2),this.stateTimer%.2<.1&&this._flashModel(8930508,80),this.stateTimer<.1&&this.gm?.audioManager&&this.gm.audioManager.play("magic",{position:this.mesh.position,volume:.7});return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.hitThisSwing=!0,this.lastSummonTime=Date.now(),this._spawnSkeletonAdds(i.summonCount||2),this._flashModel(16729343,200),this.gm?.audioManager&&this.gm.audioManager.play("ambush",{position:this.mesh.position,volume:.8}),this.gm?.cameraController&&this.gm.cameraController.shakeLight())),this.stateTimer>=s&&this.stateTimer<r){const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.x=ee.lerp(a.rotation.x,0,.1))}this.stateTimer>=r&&this._endBossAttack()}_spawnSkeletonAdds(t){if(!this.enemyManager)return;const e=this.mesh.position,i=5;for(let n=0;n<t;n++){const s=Math.PI*2*n/t+Math.random()*.5,r=new b(e.x+Math.cos(s)*i,e.y,e.z+Math.sin(s)*i),a=new vo(this.scene,r,{type:"BONE_REVENANT",name:"Summoned Revenant",behavior:"guard"},this.gm);a.mesh.visible=!0,a.isDormant=!1,a.state=W.CHASE,a.healthBarGroup.visible=!0,this.summonedAdds.push(a),this.enemyManager.enemies.push(a);const c=a.gltfModel||a.fallbackBody;if(c){c.position.y=-1;const l=()=>{c.position.y<0&&(c.position.y+=.05,requestAnimationFrame(l))};l()}}}_processBossAOEAttack(t,e){const i=this.config.attacks?.GROUND_SLAM_AOE;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.4,r=s+.3,a=r+.2,c=a+i.recovery,l=this.gltfModel||this.fallbackBody;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t),this.playerTarget=e.mesh.position.clone();const h=this.stateTimer/n;l&&(l.position.y=-h*.3),this.aoeStartY=this.mesh.position.y;return}if(this.stateTimer>=n&&this.stateTimer<s){const h=(this.stateTimer-n)/.4,u=i.jumpHeight||3,d=Math.sin(h*Math.PI)*u;this.mesh.position.y=this.aoeStartY+d,l&&(l.position.y=0,l.rotation.x=-.3);const f=this.playerTarget||e.mesh.position;this._moveToward(f,8,t);return}if(this.stateTimer>=s&&this.stateTimer<r){const h=(this.stateTimer-s)/.3;this.mesh.position.y=ee.lerp(this.mesh.position.y,this.aoeStartY,h*2),l&&(l.rotation.x=ee.lerp(-.3,.2,h))}this.stateTimer>=r&&this.stateTimer<a&&(this.mesh.position.y=this.aoeStartY,this.hitThisSwing||(this.hitThisSwing=!0,this.activeAttack={position:this.mesh.position.clone(),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0,isAOE:!0},this._createShockwaveEffect(),this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:1,pitch:.6}),this.gm?.cameraController&&this.gm.cameraController.shake(.5,.4))),this.stateTimer>=a&&this.stateTimer<c&&(this.activeAttack=null,l&&(l.rotation.x=ee.lerp(l.rotation.x,0,.1))),this.stateTimer>=c&&this._endBossAttack()}_createShockwaveEffect(){const t=new ys(.5,1.5,32),e=new Zt({color:8930508,transparent:!0,opacity:.8,side:ue}),i=new Y(t,e);i.rotation.x=-Math.PI/2,i.position.copy(this.mesh.position),i.position.y=.1,this.scene.add(i);const n=this.config.attacks?.GROUND_SLAM_AOE?.range||8,s=Date.now(),r=400,a=()=>{const l=(Date.now()-s)/r;if(l<1){const h=1+l*n;i.scale.set(h,h,1),i.material.opacity=.8*(1-l),requestAnimationFrame(a)}else this.scene.remove(i),i.geometry.dispose(),i.material.dispose()};a()}_processBossProjectileAttack(t,e){const i=this.config.attacks?.DARK_PROJECTILE;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.2,r=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*3);const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.z=a*.15),this.stateTimer%.15<.075&&this._flashModel(6693546,60);return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.hitThisSwing=!0,this._spawnDarkProjectile(e,i),this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.6,pitch:1.5}))),this.stateTimer>=s&&this.stateTimer<r){const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.z=ee.lerp(a.rotation.z,0,.15))}this.stateTimer>=r&&this._endBossAttack()}_spawnDarkProjectile(t,e){const i=new Me(.4,16,16),n=new Zt({color:8930508,transparent:!0,opacity:.9}),s=new Y(i,n),r=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));s.position.copy(this.mesh.position).add(r.multiplyScalar(1.5)).add(new b(0,1.5,0));const a=new Me(.25,12,12),c=new Zt({color:16729343,transparent:!0,opacity:1}),l=new Y(a,c);s.add(l);const h=new fi(8930508,2,5);s.add(h),this.scene.add(s),this.activeProjectiles.push({mesh:s,target:t,speed:e.speed||8,tracking:e.trackingStrength||3,damage:e.damage||40,lifetime:0,maxLifetime:5,direction:new b().subVectors(t.mesh.position,s.position).normalize()})}_updateProjectiles(t,e){for(let i=this.activeProjectiles.length-1;i>=0;i--){const n=this.activeProjectiles[i];if(n.lifetime+=t,n.lifetime>n.maxLifetime){this._destroyProjectile(i);continue}const s=new b().subVectors(e.mesh.position.clone().add(new b(0,1,0)),n.mesh.position),r=s.length();if(s.normalize(),n.direction.lerp(s,n.tracking*t),n.direction.normalize(),n.mesh.position.addScaledVector(n.direction,n.speed*t),n.mesh.rotation.x+=t*3,n.mesh.rotation.y+=t*2,r<1.2&&!e.isInvincible){this.gm?.takeDamage(n.damage,"magic",10,e.isBlocking),e.flashDamage(),this.gm?.hud&&this.gm.hud.flashDamage(.6),this.gm?.cameraController&&this.gm.cameraController.shakeMedium(),this.gm?.particleManager&&this.gm.particleManager.spawnHitSparks(n.mesh.position,8,!1),this._destroyProjectile(i);continue}r>30&&this._destroyProjectile(i)}}_destroyProjectile(t){const e=this.activeProjectiles[t];if(e&&e.mesh){const i=e.mesh.position.clone(),n=new Me(.8,8,8),s=new Zt({color:8930508,transparent:!0,opacity:.8}),r=new Y(n,s);r.position.copy(i),this.scene.add(r);const a=()=>{r.scale.multiplyScalar(1.1),r.material.opacity-=.1,r.material.opacity>0?requestAnimationFrame(a):(this.scene.remove(r),r.geometry.dispose(),r.material.dispose())};a(),this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}this.activeProjectiles.splice(t,1)}_processAttack(t,e){const i=this.config.attackWindup,n=i+this.config.attackDuration;if(this.stateTimer<i){this._faceTarget(e.mesh.position,t*2);return}if(this.stateTimer>=i&&this.stateTimer<n&&!this.hitThisSwing){const s=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(s.multiplyScalar(1)).add(new b(0,1,0)),range:this.config.attackRange,damage:this.config.damage,postureDmg:this.config.postureDmg}}if(this.stateTimer>=this.config.attackCooldown){this.hitThisSwing=!1,this.activeAttack=null;const s=this.mesh.position.distanceTo(e.mesh.position);if(this.config.canChainAttacks&&s<=this.config.attackRange*1.3&&(this.chainAttackCount++,this.chainAttackCount<this.config.maxChainAttacks)){this._changeState(W.ATTACK);return}this.chainAttackCount=0,s<=this.config.attackRange?this._changeState(W.ATTACK):this._changeState(W.CHASE)}}takeDamage(t,e=0,i=null){if(this.state===W.DEAD)return"dead";if(this.state===W.BOSS_TRANSITION)return"immune";this.isBlocking&&(t=Math.floor(t*.3),e=Math.floor(e*.5),this._flashModel(4473958,100)),this.state===W.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&(this.gm.audioManager.play("hitImpact",{position:this.mesh.position,volume:.6,variation:.15}),this.gm.audioManager.playEnemyGrunt(this.mesh.position));const n=Math.max(0,this.health/this.maxHealth);return this.healthFill.scale.x=n,this.healthFill.position.x=-(1-n)*.49*.5,this.healthBarGroup.visible=!0,this._updatePostureBar(),this._flashModel(4456448,100),this._applyHitRecoil(i,t),this.health<=0?(this._die(),"died"):this.isBoss&&this.bossPhase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2CryptLord(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==W.STAGGERED?(this._triggerPostureBreak(),"staggered"):((this.state===W.IDLE||this.state===W.PATROL)&&this._changeState(W.CHASE),"hit")}_enterPhase2CryptLord(){this.bossPhase=2,this.posture=0,this.activeAttack=null,this.hitThisSwing=!1,this._changeState(W.BOSS_TRANSITION),this.world&&this.world.setBossArenaPhase&&this.world.setBossArenaPhase("transition"),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1}),this.config.damage=55,this.config.postureDmg=45,this.config.moveSpeed=2.5,this.config.attackCooldown=1.2,this.config.maxPosture=250,this.maxPosture=250,this._cryptLordTransformSequence()}_cryptLordTransformSequence(){const e=Date.now(),i=this.gltfModel||this.fallbackBody,n=i?i.scale.clone():new b(1,1,1),s=n.clone().multiplyScalar(1.25);this.gm?.cameraController&&this.gm.cameraController.shake(.3,4);const r=()=>{const a=Date.now()-e,c=Math.min(a/4e3,1);if(this.state===W.BOSS_TRANSITION){if(i&&(i.scale.lerpVectors(n,s,c),i.rotation.z=Math.sin(a*.02)*.15*(1-c),i.rotation.x=Math.sin(a*.015)*.1*(1-c)),this.eye){const l=4+c*6;this.eye.material.emissiveIntensity=l;const h=ee.lerp(1,1,c),u=ee.lerp(.13,0,c),d=ee.lerp(.13,1,c);this.eye.material.emissive.setRGB(h,u,d),this.eye.material.color.setRGB(h,u,d)}a%300<150&&this._flashModel(8930508,100),c<1?requestAnimationFrame(r):this._completeCryptLordTransform(i)}};r()}_completeCryptLordTransform(t){t&&(t.rotation.z=0,t.rotation.x=0),this.eye&&(this.eye.material.emissive.setHex(16711935),this.eye.material.color.setHex(16711935),this.eye.material.emissiveIntensity=5),this._applyModelTint(4465322),this.world&&this.world.setBossArenaPhase&&this.world.setBossArenaPhase("phase2"),this.bossAttackCooldown=.5,this._changeState(W.CHASE)}_flashModel(t,e){if(this.gltfModel?(this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(t),s.emissiveIntensity=.5)})}),setTimeout(()=>{this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(0),s.emissiveIntensity=0)})})},e)):this.fallbackBody&&this.fallbackBody.material&&(this.fallbackBody.material.emissive.setHex(t),setTimeout(()=>this.fallbackBody.material.emissive.setHex(0),e)),this.eye&&this.eye.material){const i=this.eye.material.emissive.getHex();this.eye.material.emissive.setHex(t),setTimeout(()=>this.eye.material.emissive.setHex(i),e)}}_applyHitRecoil(t,e){let i;if(t)i=new b().subVectors(this.mesh.position,t),i.y=0,i.normalize();else{const f=this.mesh.rotation.y;i=new b(-Math.sin(f),0,-Math.cos(f))}const n=Math.min(.5,e*.015),s=this.mesh.position.clone(),r=s.clone().add(i.multiplyScalar(n)),a=this.gltfModel||this.fallbackBody,c=a?a.rotation.z:0,l=Math.random()>.5?1:-1;a&&(a.rotation.z=c+l*.15);let h=0;const u=.12,d=()=>{h+=.016;const f=Math.min(1,h/u),g=1-Math.pow(1-f,3);this.mesh.position.lerpVectors(r,s,g),a&&(a.rotation.z=ee.lerp(c+l*.15,c,g)),f<1&&requestAnimationFrame(d)};this.mesh.position.copy(r),requestAnimationFrame(d)}_triggerPostureBreak(){this._changeState(W.STAGGERED),this.breakIndicator.visible=!0,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.7}),this._flashModel(16763904,300),this.postureFill.material.color.setHex(16729088),setTimeout(()=>this.postureFill.material.color.setHex(16763904),300)}_updatePostureBar(){const t=this.posture/this.maxPosture;this.postureFill.scale.x=t,this.postureFill.position.x=-(1-t)*.49*.5}_die(){if(this.state=W.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.breakIndicator.visible=!1,this._playAnimation(W.DEAD,{loop:!1,clampWhenFinished:!0}),this.healthBarGroup.visible=!1,this.isBoss){if(this.bossActive=!1,this.world&&this.world.deactivateBossArena&&this.world.deactivateBossArena(),this.summonedAdds&&(this.summonedAdds.forEach(t=>{t&&!t.isDead&&t._die()}),this.summonedAdds=[]),this.activeProjectiles)for(let t=this.activeProjectiles.length-1;t>=0;t--)this._destroyProjectile(t);this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this._cryptLordDeathSequence();return}setTimeout(()=>{this._fadeOutModel()},2e3)}_cryptLordDeathSequence(){const e=Date.now(),i=this.gltfModel||this.fallbackBody,n=this.mesh.position.clone();this.gm?.cameraController&&this.gm.cameraController.shake(.4,3),this.gm?.itemManager&&this.gm.itemManager.showVictoryNotification("THE CRYPT LORD");const s=()=>{const r=Date.now()-e,a=Math.min(r/5e3,1);if(i)if(a<.3){const c=a/.3;i.position.y=-c*.5,i.rotation.x=c*.3,i.rotation.z=c*.15}else{const c=(a-.3)/.7;r%200<100&&this._flashModel(8930508,50),i.traverse(l=>{l.isMesh&&l.material&&(Array.isArray(l.material)?l.material:[l.material]).forEach(u=>{u.transparent=!0,u.opacity=1-c})})}this.eye&&(this.eye.material.emissiveIntensity=5*(1-a),this.eye.material.opacity=1-a),a<1?requestAnimationFrame(s):(this.mesh.visible=!1,this._spawnCryptLordRewards(n))};s()}_spawnCryptLordRewards(t){if(!this.gm?.itemManager)return;const i=Math.random()<.5?_o.CRYPT_LORDS_GREATSWORD:_o.LORD_SOUL_FRAGMENT;this.gm.itemManager.spawnBossRewards(t,"crypt-lord",this.config.remnantDrop||2500,i),this.bossDefeated=!0,this.enemyManager&&this.enemyManager.markBossDefeated("crypt-lord")}_fadeOutModel(){const t=this.gltfModel||this.fallbackBody;if(!t)return;t.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.transparent=!0})});const e=()=>{let i=!0;t.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{r.opacity>0&&(r.opacity-=.02,i=!1)})}),i?this.mesh.visible=!1:requestAnimationFrame(e)};e()}respawn(){this.health=this.maxHealth,this.posture=0,this.isDead=!1,this.stateTimer=0,this.chainAttackCount=0,this.circleTimer=0,this.isBlocking=!1,this.stuckTimer=0,this.unstuckAttempts=0,this.avoidanceDir=null,this.avoidanceTimer=0;let t=this.spawnPos.clone();if(this.world&&this.world.checkCollision&&this.world.checkCollision(t,this.collisionRadius).collides){const n=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(1,0,1),new b(-1,0,1),new b(1,0,-1),new b(-1,0,-1)];for(const s of n){const r=this.spawnPos.clone().add(s);if(!this.world.checkCollision(r,this.collisionRadius).collides){t=r;break}}}this.mesh.position.copy(t),this.lastPosition.copy(t);const e=this.config.behavior==="ambush"||this.config.isAmbush;this.isDormant=e,this.state=e?W.DORMANT:W.IDLE;const i=this.gltfModel||this.fallbackBody;i&&(i.rotation.x=0,i.rotation.z=0,i.position.y=0,i.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{r.opacity=1,r.transparent=!1})})),this.mesh.visible=!e,this.healthBarGroup.visible=!1,this.breakIndicator.visible=!1,this.healthFill.scale.x=1,this.healthFill.position.x=0,this.postureFill.scale.x=0,this.postureFill.position.x=0,this._playAnimation(e?W.DORMANT:W.IDLE,{loop:!0})}_moveToward(t,e,i){const n=new b().subVectors(t,this.mesh.position);if(n.y=0,n.length()<.5)return;n.normalize();const r=e*i,a=this.mesh.position.clone().addScaledVector(n,r);if(this.world&&this.world.checkCollision){const c=this.world.checkCollision(a,this.collisionRadius);if(c.collides){const l=this._findSlideDirection(n,c,i);if(l){const h=this.mesh.position.clone().addScaledVector(l,r*.7);this.world.checkCollision(h,this.collisionRadius).collides?this._tryPerpendicularMove(n,r,i):(this.mesh.position.copy(h),this.avoidanceDir=l.clone(),this.avoidanceTimer=.5)}else this._tryPerpendicularMove(n,r,i)}else this.mesh.position.copy(a),this.avoidanceDir=null,this.avoidanceTimer=0}else this.mesh.position.addScaledVector(n,r)}_findSlideDirection(t,e,i){const n=new b(-t.z,0,t.x),s=new b(t.z,0,-t.x);if(e.normal){const r=t.dot(e.normal),a=t.clone().sub(e.normal.clone().multiplyScalar(r));if(a.length()>.1)return a.normalize()}return this.avoidanceDir&&this.avoidanceTimer>0?(this.avoidanceTimer-=i,this.avoidanceDir):this.unstuckAttempts%2===0?n:s}_tryPerpendicularMove(t,e,i){if(!this.world)return;const n=new b(-t.z,0,t.x),s=new b(t.z,0,-t.x),r=this.mesh.position.clone().addScaledVector(n,e);if(!this.world.checkCollision(r,this.collisionRadius).collides){this.mesh.position.copy(r),this.avoidanceDir=n,this.avoidanceTimer=.3;return}const a=this.mesh.position.clone().addScaledVector(s,e);if(!this.world.checkCollision(a,this.collisionRadius).collides){this.mesh.position.copy(a),this.avoidanceDir=s,this.avoidanceTimer=.3;return}}_checkStuck(t){if(this.mesh.position.distanceTo(this.lastPosition)<.05){if(this.stuckTimer+=t,this.stuckTimer>this.stuckThreshold)if(this.unstuckAttempts++,this.stuckTimer=0,this.unstuckAttempts>3){if(this._pickPatrolTarget(),this.world&&this.world.checkCollision){let i=0;for(;this.world.checkCollision(this.patrolTarget,this.collisionRadius).collides&&i<5;)this._pickPatrolTarget(),i++}this.unstuckAttempts=0,this._changeState(W.PATROL)}else this.circleDirection*=-1,(this.state===W.CHASE||this.state===W.CIRCLE)&&this._changeState(W.CIRCLE)}else this.stuckTimer=0,this.unstuckAttempts=0;this.lastPosition.copy(this.mesh.position)}_faceTarget(t,e){const i=new b().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.1){const n=Math.atan2(i.x,i.z);this.mesh.rotation.y=ee.lerp(this.mesh.rotation.y,n,5*e)}}_pickPatrolTarget(){const t=Math.random()*Math.PI*2,e=Math.random()*this.config.patrolRadius;this.patrolTarget.set(this.spawnPos.x+Math.cos(t)*e,0,this.spawnPos.z+Math.sin(t)*e)}_changeState(t){this.state!==t&&(this.state===W.ATTACK&&(this.activeAttack=null,this.hitThisSwing=!1),t===W.CIRCLE&&(this.circleTimer=0,this.circleDirection=Math.random()>.5?1:-1),this.state=t,this.stateTimer=0,this._playAnimation(t))}}const Ct={DORMANT:"dormant",AWAKENING:"awakening",IDLE:"idle",WALK:"walk",ATTACK:"attack",HEAVY_ATTACK:"heavy_attack",AOE_ATTACK:"aoe_attack",COMBO:"combo",STAGGERED:"staggered",PHASE_TRANSITION:"phase_transition",DEAD:"dead"},Pv={[Ct.DORMANT]:"Idle",[Ct.AWAKENING]:"Idle",[Ct.IDLE]:"Idle",[Ct.WALK]:"Walking",[Ct.ATTACK]:"Punch",[Ct.HEAVY_ATTACK]:"Punch",[Ct.AOE_ATTACK]:"Jump",[Ct.COMBO]:"Punch",[Ct.STAGGERED]:"No",[Ct.PHASE_TRANSITION]:"Death",[Ct.DEAD]:"Death"};class Iv{constructor(t,e,i){this.scene=t,this.gm=i,this.name="The Failed Experiment",this.maxHealth=500,this.health=this.maxHealth,this.maxPosture=150,this.posture=0,this.phase=1,this.state=Ct.DORMANT,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.comboCount=0,this.isActive=!1,this.isDead=!1,this.mixer=null,this.animations={},this.currentAction=null,this.gltfModel=null,this.gltfLoaded=!1,this.phaseConfigs={1:{moveSpeed:2,attackCooldown:2.5,attackWindup:1,damage:35,postureDmg:30,canCombo:!1,canAoE:!1,modelTint:3809344,emissiveColor:2228258},2:{moveSpeed:3.5,attackCooldown:1.5,attackWindup:.6,damage:45,postureDmg:40,canCombo:!0,maxCombo:3,canAoE:!0,aoeCooldown:8,modelTint:5902368,emissiveColor:4456465}},this.config=this.phaseConfigs[1],this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.detectionRange=15,this.attackRange=3.5,this.spawnPos=e.clone(),this.world=null,this.collisionRadius=.8,this.mesh=new $t,this.mesh.position.copy(e),this.body=new $t,this.mesh.add(this.body),this._createFallbackMesh(),this.eyeLights=[],this.eyes=[],this._createEyes(),this.weapon=this._createWeapon(),this.mesh.add(this.weapon),this._createAoEIndicator(),this._createAuraParticles(),this.mutatedArm=null,t.add(this.mesh),this._loadGLTFModel(),this._setDormant()}_createFallbackMesh(){const t=new ms(1.2,2),e=new wt({color:1709344,roughness:.75,metalness:.25,flatShading:!0});this.fallbackMesh=new Y(t,e),this.fallbackMesh.position.y=2,this.fallbackMesh.scale.set(1.3,1.6,1.2),this.fallbackMesh.castShadow=!0,this.body.add(this.fallbackMesh);const i=new ms(.7,1),n=new Y(i,e.clone());n.position.set(0,2.8,-.6),n.scale.set(1.3,1,.9),this.body.add(n);for(let _=0;_<12;_++){const m=.12+Math.random()*.2,p=new Me(m,6,6),v=new wt({color:2759205,roughness:.9,emissive:1114120,emissiveIntensity:.3}),S=new Y(p,v),M=_/12*Math.PI*2,A=1.3+Math.random()*2,E=.8+Math.random()*.4;S.position.set(Math.cos(M)*E+(Math.random()-.5)*.3,A,Math.sin(M)*(E*.7)+(Math.random()-.5)*.3),this.body.add(S)}const s=new wt({color:9075306,roughness:.6,metalness:.3});for(let _=0;_<6;_++){const m=new fn(.4-_*.035,.035,6,16,Math.PI*.75),p=new Y(m,s);p.position.set(0,1.4+_*.18,.7),p.rotation.x=Math.PI/2,p.rotation.y=Math.PI,this.body.add(p)}const r=new Oc(.5,1),a=new wt({color:1709088,roughness:.7,metalness:.25}),c=new Y(r,a);c.position.set(0,3.6,.35),c.scale.set(1,1.2,.85),this.body.add(c);const l=new wt({color:1709344,roughness:.75,metalness:.2}),h=new dn(.22,1,10,12),u=new Y(h,l);u.position.set(-.45,.6,0),u.rotation.z=.15,this.body.add(u);const d=new dn(.24,.95,10,12),f=new Y(d,l);f.position.set(.45,.6,0),f.rotation.z=-.12,this.body.add(f);const g=new wt({color:2236962,roughness:.4,metalness:.6});for(let _ of[-1,1])for(let m=0;m<3;m++){const p=new $i(.05,.18,6),v=new Y(p,g);v.position.set(_*.45+(m-1)*.1,.05,.25),v.rotation.x=Math.PI/3,this.body.add(v)}}async _loadGLTFModel(){try{const t="/project-ashen/",{scene:e,animations:i}=await cr.loadModel(`${t}assets/models/brainrobot.glb`,{scale:2.5});if(!e){console.warn("[BOSS] GLTF model failed to load, using fallback");return}this.gltfModel=e,this.gltfLoaded=!0,e.position.set(0,.5,0),e.scale.setScalar(2.5),this._applyModelTint(this.config.modelTint,this.config.emissiveColor),e.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),i&&i.length>0&&(this.mixer=new wu(e),i.forEach(n=>{this.animations[n.name]=this.mixer.clipAction(n)}),this._playAnimation(Ct.IDLE)),this.body.add(e),this.fallbackMesh&&(this.fallbackMesh.visible=!1)}catch(t){console.warn("[BOSS] GLTF loading failed:",t)}}_applyModelTint(t,e){if(!this.gltfModel)return;const i=new vt(t),n=new vt(e);this.gltfModel.traverse(s=>{s.isMesh&&s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{a.color&&a.color.lerp(i,.4),a.emissive!==void 0&&(a.emissive.copy(n),a.emissiveIntensity=.5),a.needsUpdate=!0})}),this.body.traverse(s=>{s.isMesh&&s.material&&s!==this.gltfModel&&(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{a.color&&a.color.lerp(i,.3),a.emissive!==void 0&&(a.emissive.copy(n),a.emissiveIntensity=.4)})})}_playAnimation(t,e=1){if(!this.mixer)return;const i=Pv[t];if(!i)return;let n=this.animations[i];if(!n){const s=i.toLowerCase();for(const r of Object.keys(this.animations))if(r.toLowerCase().includes(s)){n=this.animations[r];break}}n&&(this.currentAction&&this.currentAction!==n?(n.reset(),n.setEffectiveTimeScale(e),n.setEffectiveWeight(1),n.crossFadeFrom(this.currentAction,.3,!0),n.play()):this.currentAction||(n.reset(),n.setEffectiveTimeScale(e),n.play()),this.currentAction=n)}_createEyes(){const t=[{x:-.18,y:3.55,z:.6,size:.11},{x:.18,y:3.55,z:.6,size:.11},{x:0,y:3.75,z:.55,size:.085},{x:-.38,y:3.35,z:.45,size:.06},{x:.38,y:3.35,z:.45,size:.06},{x:-.85,y:3.1,z:.3,size:.05},{x:-.95,y:2.9,z:.35,size:.04},{x:.12,y:2.85,z:-.35,size:.07}],e=new wt({color:16720384,emissive:16720384,emissiveIntensity:5});t.forEach(i=>{const n=new Me(i.size,12,12),s=new Y(n,e.clone());if(s.position.set(i.x,i.y,i.z),this.eyes.push(s),this.body.add(s),i.size>=.08){const r=new fi(16720384,.5,3);r.position.copy(s.position),this.eyeLights.push(r),this.body.add(r)}})}_createWeapon(){const t=new $t,e=new be(.08,.1,2,12),i=new wt({color:3811872,roughness:.85,metalness:.15}),n=new Y(e,i);t.add(n);for(let u=0;u<5;u++){const d=new fn(.11,.025,6,14),f=new Y(d,new wt({color:4860456,roughness:.9}));f.position.y=-.7+u*.35,f.rotation.x=Math.PI/2,t.add(f)}const s=new ie(.1,1.8,.6),r=new wt({color:2763306,roughness:.25,metalness:.95}),a=new Y(s,r);a.position.set(0,1.5,.18),a.rotation.z=.12,t.add(a);const c=new ie(.025,1.75,.025),l=new wt({color:16724736,emissive:16720384,emissiveIntensity:3}),h=new Y(c,l);h.position.set(0,1.5,.5),h.rotation.z=.12,t.add(h);for(let u=0;u<6;u++){const d=new $i(.04,.15,6),f=new Y(d,r);f.position.set(0,.85+u*.22,-.1),f.rotation.x=-Math.PI/4,t.add(f)}return t.position.set(1.6,1.9,0),t.rotation.z=.4,t.castShadow=!0,t}_createAoEIndicator(){const t=new ys(.5,6,32),e=new Zt({color:16729088,transparent:!0,opacity:0,side:ue});this.aoeIndicator=new Y(t,e),this.aoeIndicator.rotation.x=-Math.PI/2,this.aoeIndicator.position.y=.1,this.mesh.add(this.aoeIndicator)}_createAuraParticles(){this.auraParticles=[];for(let t=0;t<8;t++){const e=new Me(.1,6,6),i=new wt({color:2228258,emissive:1114129,emissiveIntensity:1.5,transparent:!0,opacity:.7}),n=new Y(e,i);n.userData.angle=t/8*Math.PI*2,n.userData.yOffset=Math.random()*2,n.userData.radius=.9+Math.random()*.5,this.auraParticles.push(n),this.mesh.add(n)}}_setDormant(){this.eyes.forEach(t=>{t.material.emissiveIntensity=.5}),this.eyeLights.forEach(t=>{t.intensity=.1})}_awaken(){if(this.state!==Ct.DORMANT)return;this.isActive=!0,this._changeState(Ct.AWAKENING),this.gm?.audioManager&&(this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this.gm.audioManager.startBossMusic());let t=0;this.eyes.forEach((e,i)=>{setTimeout(()=>{e.material.emissiveIntensity=7,setTimeout(()=>{e.material.emissiveIntensity=4.5},200)},t),t+=120}),this.eyeLights.forEach((e,i)=>{setTimeout(()=>{e.intensity=.8},i*100)})}update(t,e){if(this.state===Ct.DEAD)return;this.mixer&&this.mixer.update(t),this.stateTimer+=t,this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-t),this.aoeCooldownTimer=Math.max(0,this.aoeCooldownTimer-t);const i=this.mesh.position.distanceTo(e.mesh.position);if(this.state===Ct.DORMANT&&i<this.detectionRange){this._awaken();return}switch(this.state){case Ct.AWAKENING:this.stateTimer<2?(this.body.position.y=Math.sin(this.stateTimer*Math.PI)*.4,this.body.rotation.z=Math.sin(this.stateTimer*3)*.05):(this.body.position.y=0,this.body.rotation.z=0,this._changeState(Ct.IDLE));break;case Ct.IDLE:this._faceTarget(e.mesh.position,t),this.body.position.y=Math.sin(this.stateTimer*2)*.08,this.body.scale.y=1+Math.sin(this.stateTimer*2.5)*.02,i<=this.attackRange&&this.attackCooldownTimer<=0?this._startAttack(e):i>this.attackRange&&this._changeState(Ct.WALK);break;case Ct.WALK:this._moveToward(e.mesh.position,t),this._faceTarget(e.mesh.position,t),this.body.position.y=Math.sin(this.stateTimer*8)*.12,this.body.rotation.z=Math.sin(this.stateTimer*4)*.03,i<=this.attackRange&&(this.attackCooldownTimer<=0?this._startAttack(e):this._changeState(Ct.IDLE));break;case Ct.ATTACK:this._processAttack(t,e,!1);break;case Ct.HEAVY_ATTACK:this._processAttack(t,e,!0);break;case Ct.AOE_ATTACK:this._processAoEAttack(t,e);break;case Ct.COMBO:this._processCombo(t,e);break;case Ct.STAGGERED:this.body.rotation.z=Math.sin(this.stateTimer*14)*.18*(1-this.stateTimer/2.5),this.body.position.y=Math.sin(this.stateTimer*8)*.1,this.stateTimer>=2.5&&(this.posture=0,this.body.rotation.z=0,this.body.position.y=0,this._changeState(Ct.IDLE));break;case Ct.PHASE_TRANSITION:this._processPhaseTransition(t);break}this.state!==Ct.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-3*t));const n=this.health/this.maxHealth,s=2+(1-n)*5,r=3.5+Math.sin(Date.now()*.001*s)*(1.5+(1-n)*2.5);if(this.eyes.forEach(a=>{a.material.emissiveIntensity=r}),this.eyeLights.forEach(a=>{a.intensity=.3+r*.1}),this.auraParticles&&this.isActive){const a=Date.now()*.001;this.auraParticles.forEach((c,l)=>{const h=c.userData.angle+a*.6,u=c.userData.yOffset+Math.sin(a+l)*.4,d=c.userData.radius;c.position.set(Math.cos(h)*d,1.6+u,Math.sin(h)*d),c.material.opacity=.35+Math.sin(a*2.5+l)*.25})}}_startAttack(t){if(this.phase===2&&this.config.canAoE&&this.aoeCooldownTimer<=0&&Math.random()<.3){this._changeState(Ct.AOE_ATTACK);return}if(this.phase===2&&this.config.canCombo&&Math.random()<.4){this.comboCount=0,this._changeState(Ct.COMBO);return}Math.random()<.5?this._changeState(Ct.ATTACK):this._changeState(Ct.HEAVY_ATTACK)}_processAttack(t,e,i){const n=i?this.config.attackWindup*1.5:this.config.attackWindup,s=n+.3,r=s+(i?1:.6);if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const a=this.stateTimer/n;i?(this.weapon.rotation.z=-a*2.8,this.weapon.position.y=1.9+a*1.6,this.body.rotation.x=a*.15):(this.weapon.rotation.z=.4-a*1.6,this.body.rotation.z=a*.1);return}if(this.stateTimer>=n&&this.stateTimer<s){if(!this.hitThisSwing){const c=new b(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2.2)).add(new b(0,1.6,0)),range:this.attackRange,damage:i?this.config.damage*1.5:this.config.damage,postureDmg:i?this.config.postureDmg*1.5:this.config.postureDmg,isHeavy:i},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.7,pitch:i?.6:.8})}const a=(this.stateTimer-n)/.3;i?(this.weapon.rotation.z=-2.8+a*4.5,this.weapon.position.y=3.5-a*2.8,this.body.rotation.x=.15-a*.25):(this.weapon.rotation.z=-1.2+a*2.8,this.body.rotation.z=.1-a*.15)}this.stateTimer>=s&&(this.activeAttack=null,this.weapon.rotation.z=ee.lerp(this.weapon.rotation.z,.4,.12),this.weapon.position.y=ee.lerp(this.weapon.position.y,1.9,.12),this.body.rotation.x=ee.lerp(this.body.rotation.x,0,.15),this.body.rotation.z=ee.lerp(this.body.rotation.z,0,.15)),this.stateTimer>=r&&(this.hitThisSwing=!1,this.activeAttack=null,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(Ct.IDLE))}_processCombo(t,e){const i=this.config.attackWindup*.7,n=i+.2,s=n+.3;if(this.stateTimer<i){this._faceTarget(e.mesh.position,t*3);const r=this.stateTimer/i,a=this.comboCount%2===0?1:-1;this.weapon.rotation.z=a*r*1.8,this.body.rotation.z=a*r*.08;return}if(this.stateTimer>=i&&this.stateTimer<n){if(!this.hitThisSwing){const c=new b(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2.2)).add(new b(0,1.6,0)),range:this.attackRange*.9,damage:this.config.damage*.7,postureDmg:this.config.postureDmg*.6,isCombo:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.6,pitch:.9+this.comboCount*.1})}const r=(this.stateTimer-i)/.2,a=this.comboCount%2===0?1:-1;this.weapon.rotation.z=a*(1.8-r*3.5),this.body.rotation.z=a*(.08-r*.12)}if(this.stateTimer>=s){this.comboCount++,this.hitThisSwing=!1,this.activeAttack=null;const r=this.mesh.position.distanceTo(e.mesh.position);if(this.comboCount<this.config.maxCombo&&r<this.attackRange*1.2){this.stateTimer=0;const a=new b(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.mesh.position.addScaledVector(a,.6)}else this.comboCount=0,this.attackCooldownTimer=this.config.attackCooldown*1.5,this._resetWeapon(),this._changeState(Ct.IDLE)}}_processAoEAttack(t,e){if(this.stateTimer<1.5){const r=this.stateTimer/1.5;this.aoeIndicator.material.opacity=r*.65,this.aoeIndicator.scale.setScalar(1+r*.35),this.weapon.rotation.z=-r*3.2,this.weapon.position.y=1.9+r*2.2,this._flashModel(r*.5,16720384),this.eyes.forEach(a=>{a.material.emissiveIntensity=4+r*7}),this.body.position.y=Math.sin(this.stateTimer*20)*.05*r;return}this.stateTimer>=1.5&&this.stateTimer<1.8&&(this.hitThisSwing||(this.hitThisSwing=!0,this.aoeIndicator.material.opacity=1,this.aoeIndicator.material.color.setHex(16737792),this.gm?.audioManager&&this.gm.audioManager.play("explosion",{position:this.mesh.position,volume:.9}),this.mesh.position.distanceTo(e.mesh.position)<6&&!e.isInvincible&&(this.activeAttack={position:this.mesh.position.clone(),range:6,damage:this.config.damage*1.2,postureDmg:this.config.postureDmg,isAoE:!0}),this.weapon.rotation.z=.6,this.weapon.position.y=.6)),this.stateTimer>=1.8&&(this.activeAttack=null,this.aoeIndicator.material.opacity*=.88,this._flashModel(0,0)),this.stateTimer>=2.8&&(this.hitThisSwing=!1,this.aoeIndicator.material.opacity=0,this.aoeIndicator.material.color.setHex(16729088),this.aoeCooldownTimer=this.config.aoeCooldown,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(Ct.IDLE))}_processPhaseTransition(t){if(this.stateTimer<3){this.body.rotation.z=Math.sin(this.stateTimer*22)*.25,this.body.scale.y=1+Math.sin(this.stateTimer*12)*.15,this.body.scale.x=1+Math.sin(this.stateTimer*10)*.08,this.eyes.forEach((r,a)=>{r.material.emissiveIntensity=6+Math.sin(this.stateTimer*18+a)*5});const i=this.stateTimer/3,n=new vt(this.phaseConfigs[1].modelTint),s=new vt(this.phaseConfigs[2].modelTint);n.lerp(s,i),this._applyModelTint(n.getHex(),this.phaseConfigs[2].emissiveColor),this.stateTimer>1.5&&!this.mutatedArm&&this._createMutatedArm();return}this.body.rotation.z=0,this.body.scale.set(1,1,1),this._applyModelTint(this.phaseConfigs[2].modelTint,this.phaseConfigs[2].emissiveColor),this.eyes.forEach(i=>{i.material.color.setHex(16729088),i.material.emissive.setHex(16729088)}),this._changeState(Ct.IDLE)}_createMutatedArm(){this.mutatedArm=new $t;const t=new dn(.18,1.2,12,16),e=new wt({color:3806504,roughness:.85,metalness:.15}),i=new Y(t,e);i.position.set(0,0,0),i.rotation.z=.7,i.rotation.x=.45,this.mutatedArm.add(i);const n=new wt({color:2236962,roughness:.35,metalness:.75});for(let a=0;a<4;a++){const c=new $i(.04,.25,6),l=new Y(c,n);l.position.set(-.5+(a-1.5)*.1,.7,.8),l.rotation.x=-.85,this.mutatedArm.add(l)}for(let a=0;a<4;a++){const c=new Me(.07+Math.random()*.05,6,6),l=new wt({color:4859960,roughness:.9,emissive:1114120,emissiveIntensity:.4}),h=new Y(c,l);h.position.set(-.25+a*.18,.25+a*.18,.4),this.mutatedArm.add(h)}this.mutatedArm.position.set(-1.1,2.7,.25),this.mesh.add(this.mutatedArm);const s=new wt({color:16729088,emissive:16729088,emissiveIntensity:5});[{x:-1.3,y:2.9,z:.55,size:.07},{x:-1.1,y:2.5,z:.65,size:.055},{x:.55,y:3.1,z:.4,size:.045}].forEach(a=>{const c=new Y(new Me(a.size,10,10),s.clone());c.position.set(a.x,a.y,a.z),this.eyes.push(c),this.mesh.add(c)})}_flashModel(t,e){const i=new vt(e);this.gltfModel&&this.gltfModel.traverse(n=>{n.isMesh&&n.material&&n.material.emissive!==void 0&&(n.material.emissive.lerp(i,t),n.material.emissiveIntensity=t*2)}),this.body.traverse(n=>{n.isMesh&&n.material&&n.material.emissive!==void 0&&n.material.emissive.lerp(i,t)})}takeDamage(t,e=0,i=null){return this.state===Ct.DEAD||this.state===Ct.PHASE_TRANSITION||this.state===Ct.DORMANT?"immune":(this.state===Ct.AWAKENING&&(t=Math.floor(t*.5),e=Math.floor(e*.5)),this.state===Ct.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.7}),this._flashModel(.6,16720384),setTimeout(()=>{this.state!==Ct.AOE_ATTACK&&this._flashModel(0,0)},100),this._applyHitRecoil(i,t),this.health<=0?(this._die(),"died"):this.phase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==Ct.STAGGERED?(this._triggerPostureBreak(),"staggered"):"hit")}_applyHitRecoil(t,e){let i;if(t)i=new b().subVectors(this.mesh.position,t),i.y=0,i.normalize();else{const d=this.body.rotation.y;i=new b(-Math.sin(d),0,-Math.cos(d))}const n=Math.min(.25,e*.006),s=this.mesh.position.clone(),r=s.clone().add(i.multiplyScalar(n)),a=this.body.rotation.z||0,c=Math.random()>.5?1:-1;this.body.rotation.z=a+c*.1;let l=0;const h=.15,u=()=>{l+=.016;const d=Math.min(1,l/h),f=1-Math.pow(1-d,3);this.mesh.position.lerpVectors(r,s,f),this.body.rotation.z=ee.lerp(a+c*.1,a,f),d<1&&requestAnimationFrame(u)};this.mesh.position.copy(r),requestAnimationFrame(u)}_triggerPostureBreak(){this._changeState(Ct.STAGGERED),this.activeAttack=null,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.9}),this._flashModel(1,16763904),this.eyes.forEach(t=>{t.material.emissive.setHex(16763904)}),setTimeout(()=>{this.state===Ct.STAGGERED&&(this._flashModel(0,0),this.eyes.forEach(t=>{t.material.emissive.setHex(this.phase===2?16729088:16720384)}))},300)}_enterPhase2(){this.phase=2,this.config=this.phaseConfigs[2],this.posture=0,this.activeAttack=null,this._changeState(Ct.PHASE_TRANSITION),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1})}_die(){this.state=Ct.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.isActive=!1,this._playAnimation(Ct.DEAD,.8),this.gm?.audioManager&&this.gm.audioManager.startAmbientMusic();let t=0;const e=()=>{t+=.018,this.body.position.y=-t*1.8,this.body.rotation.x=t*.6,this.body.rotation.z=t*.3,this.eyes.forEach(i=>{i.material.emissiveIntensity*=.94}),this.eyeLights.forEach(i=>{i.intensity*=.92}),t<1?requestAnimationFrame(e):this._fadeOut()};e(),this.gm&&this.gm.collectRemnants(2e3)}_fadeOut(){let t=1;const e=()=>{t-=.008;const i=n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{r.transparent=!0,r.opacity=t})};this.body.traverse(i),this.weapon.traverse(i),this.eyes.forEach(n=>{n.material.transparent=!0,n.material.opacity=t}),this.auraParticles&&this.auraParticles.forEach(n=>{n.material.opacity=t*.6}),this.mutatedArm&&this.mutatedArm.traverse(i),t>0?requestAnimationFrame(e):this.mesh.visible=!1};setTimeout(e,3e3)}_moveToward(t,e){const i=new b().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.5){i.normalize();const n=this.config.moveSpeed*e,s=this.mesh.position.clone().addScaledVector(i,n);this.world&&this.world.checkCollision?this.world.checkCollision(s,this.collisionRadius).collides||this.mesh.position.copy(s):this.mesh.position.addScaledVector(i,n)}}_faceTarget(t,e){const i=new b().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.1){const n=Math.atan2(i.x,i.z);this.body.rotation.y=ee.lerp(this.body.rotation.y,n,5*e)}}_resetWeapon(){this.weapon.rotation.z=.4,this.weapon.position.set(1.6,1.9,0),this.body.rotation.x=0,this.body.rotation.z=0}_changeState(t){this.state!==t&&((this.state===Ct.ATTACK||this.state===Ct.HEAVY_ATTACK||this.state===Ct.AOE_ATTACK||this.state===Ct.COMBO)&&(this.activeAttack=null,this.hitThisSwing=!1),this.state=t,this.stateTimer=0,this._playAnimation(t))}respawn(){this.health=this.maxHealth,this.posture=0,this.phase=1,this.config=this.phaseConfigs[1],this.state=Ct.DORMANT,this.stateTimer=0,this.isActive=!1,this.isDead=!1,this.comboCount=0,this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.mesh.position.copy(this.spawnPos),this.mesh.visible=!0,this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.body.scale.set(1,1,1);const t=e=>{e.isMesh&&e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.opacity=1,n.transparent=!1,n.emissive&&n.emissive.setHex(0)})};for(this.body.traverse(t),this.weapon.traverse(t),this._resetWeapon();this.eyes.length>8;){const e=this.eyes.pop();e&&this.mesh.remove(e)}this.eyes.forEach(e=>{e.material.opacity=1,e.material.transparent=!1,e.material.color.setHex(16720384),e.material.emissive.setHex(16720384)}),this.eyeLights.forEach(e=>{e.intensity=.1}),this.mutatedArm&&(this.mesh.remove(this.mutatedArm),this.mutatedArm=null),this._applyModelTint(this.phaseConfigs[1].modelTint,this.phaseConfigs[1].emissiveColor),this.aoeIndicator.material.opacity=0,this._setDormant(),this._playAnimation(Ct.IDLE)}}const wn={SAFE:{maxDistance:50,hpMultiplier:.8,damageMultiplier:.7,remnantMultiplier:.8,spawnDensity:.3,enemyTypes:["HOLLOW_SOLDIER"],eliteChance:0,label:"Safe Zone"},MEDIUM:{maxDistance:150,hpMultiplier:1,damageMultiplier:1,remnantMultiplier:1,spawnDensity:.5,enemyTypes:["HOLLOW_SOLDIER","BERSERKER"],eliteChance:.05,label:"Medium Zone"},HARD:{maxDistance:300,hpMultiplier:1.3,damageMultiplier:1.2,remnantMultiplier:1.5,spawnDensity:.7,enemyTypes:["HOLLOW_SOLDIER","BERSERKER","SENTINEL"],eliteChance:.15,label:"Hard Zone"},FRONTIER:{maxDistance:1/0,hpMultiplier:1.6,damageMultiplier:1.4,remnantMultiplier:2,spawnDensity:.9,enemyTypes:["BERSERKER","SENTINEL","CRYPT_GUARDIAN"],eliteChance:.25,label:"Dark Frontier"}};function ga(o){return o<wn.SAFE.maxDistance?wn.SAFE:o<wn.MEDIUM.maxDistance?wn.MEDIUM:o<wn.HARD.maxDistance?wn.HARD:wn.FRONTIER}function Zr(o,t){return Math.sqrt(o*o+t*t)}class Dv{constructor(t,e,i,n=null,s=null){this.scene=t,this.gm=e,this.player=i,this.world=n,this.particleManager=s,this.enemies=[],this.boss=null,this.cryptLord=null,this.defeatedBosses=new Set,this.spawnedRegions=new Set,this.maxEnemies=30,this.spawnCheckRadius=60,this.despawnRadius=100,this._spawnEnemies(),console.log("[EnemyManager] Initialized with distance-based scaling")}_spawnEnemies(){if(!this.world?.terrain){console.warn("[EnemyManager] No terrain available, using fallback spawns"),this._spawnFallbackEnemies();return}this.world.terrain,this._populateArea(0,0,80),console.log(`[EnemyManager] Spawned ${this.enemies.length} enemies with distance scaling`)}_populateArea(t,e,i){if(!this.world?.terrain)return;const n=this.world.terrain,s=Math.floor(i/10);for(let r=0;r<s;r++){const a=Math.random()*Math.PI*2,c=Math.random()*i,l=t+Math.cos(a)*c,h=e+Math.sin(a)*c,u=Zr(l,h);if(u<35)continue;const d=ga(u);if(Math.random()>d.spawnDensity||n.getTerrainSlope(l,h)>.5||this.world.isNearTree&&this.world.isNearTree(l,h,3)||this.enemies.some(m=>{const p=m.spawnPos.x-l,v=m.spawnPos.z-h;return Math.sqrt(p*p+v*v)<8}))continue;if(this.enemies.length>=this.maxEnemies)break;const _=n.getTerrainHeight(l,h);this._spawnEnemyAtPosition(l,_,h,d,u)}}_spawnEnemyAtPosition(t,e,i,n,s){const r=n.enemyTypes[Math.floor(Math.random()*n.enemyTypes.length)],a=xo[r];if(!a){console.warn(`[EnemyManager] Unknown enemy type: ${r}`);return}const c=Math.random()<n.eliteChance,l=this._applyDistanceScaling(a,n,s,c),h=new b(t,e,i),u=new vo(this.scene,h,{type:r,...l},this.gm);return u.spawnDistance=s,u.difficultyZone=n.label,u.world=this.world,this.enemies.push(u),u}_applyDistanceScaling(t,e,i,n=!1){let s=e.hpMultiplier,r=e.damageMultiplier,a=e.remnantMultiplier;const c=1+i/1e3;return s*=c,r*=c,a*=c,n&&(s*=1.5,r*=1.3,a*=2),{name:n?`Elite ${t.name}`:t.name,health:Math.round(t.health*s),damage:Math.round(t.damage*r),postureDmg:Math.round((t.postureDmg||15)*r),remnantDrop:Math.round(t.remnantDrop*a),maxPosture:Math.round((t.maxPosture||60)*s),moveSpeed:t.moveSpeed,detectionRange:t.detectionRange+(n?3:0),attackRange:t.attackRange,attackCooldown:t.attackCooldown,attackWindup:t.attackWindup,attackDuration:t.attackDuration,bodyColor:n?6684706:t.bodyColor,eyeColor:n?16711680:t.eyeColor,modelTint:n?this._eliteTint(t.modelTint):t.modelTint,modelScale:(t.modelScale||.5)*(n?1.15:1),canChainAttacks:t.canChainAttacks,maxChainAttacks:t.maxChainAttacks,hasShield:t.hasShield,shieldBlockChance:t.shieldBlockChance,modelPath:t.modelPath,animSpeedMult:t.animSpeedMult,patrolRadius:t.patrolRadius,isElite:n}}_eliteTint(t){if(!t)return 4456482;const e=new vt(t);return e.lerp(new vt(6684672),.4),e.getHex()}_spawnFallbackEnemies(){[{pos:new b(40,0,0),type:"HOLLOW_SOLDIER"},{pos:new b(60,0,20),type:"HOLLOW_SOLDIER"},{pos:new b(80,0,-10),type:"BERSERKER"},{pos:new b(100,0,30),type:"SENTINEL"}].forEach(e=>{const i=ga(Zr(e.pos.x,e.pos.z)),n=xo[e.type],s=this._applyDistanceScaling(n,i,Zr(e.pos.x,e.pos.z)),r=new vo(this.scene,e.pos,{type:e.type,...s},this.gm);r.world=this.world,this.enemies.push(r)})}updateDynamicSpawns(t){if(this.world?.terrain){for(let e=this.enemies.length-1;e>=0;e--){const i=this.enemies[e];i.mesh.position.distanceTo(t)>this.despawnRadius&&!i.bossActive&&(i.mesh&&this.scene.remove(i.mesh),this.enemies.splice(e,1))}if(this.enemies.length<this.maxEnemies){const e=Math.floor(t.x/40)*40,i=Math.floor(t.z/40)*40,n=`${e},${i}`;this.spawnedRegions.has(n)||(this.spawnedRegions.add(n),this._populateArea(e,i,40))}}}_spawnBoss(){const t=this.world?.getBossPosition()||new b(0,0,-95);this.boss=new Iv(this.scene,t,this.gm),this.boss.world=this.world;const e=new ys(8,12,32),i=new Zt({color:3346705,transparent:!0,opacity:.3,side:ue}),n=new Y(e,i);n.rotation.x=-Math.PI/2,n.position.copy(t),n.position.y=.02,this.scene.add(n)}update(t,e){this.updateDynamicSpawns(e.mesh.position),this._checkDormantTriggers(e);for(let i=this.enemies.length-1;i>=0;i--){const n=this.enemies[i];if(n.update(t,e),e.activeAttack&&!e.hitThisSwing){const s=n.mesh.position.x-e.activeAttack.position.x,r=n.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(s*s+r*r)<e.activeAttack.range&&n.health>0){const c=n.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,e.activeAttack.isHeavy?this.gm.hitstopHeavy():this.gm.hitstopLight(),this.gm.cameraController&&(e.activeAttack.isHeavy?this.gm.cameraController.shakeMedium():this.gm.cameraController.shakeLight()),this.particleManager){const l=n.mesh.position.clone(),h=n.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(l,8,e.activeAttack.isHeavy),this.particleManager.spawnBlood(l,h,Math.ceil(e.activeAttack.damage/5)),c==="posture_broken"&&this.particleManager.spawnPostureBreak(l)}c==="died"&&(this.gm.addRemnant(n.config.remnantDrop),this.particleManager&&this.particleManager.spawnDeathBurst(n.mesh.position.clone()),setTimeout(()=>{n.respawn()},8e3))}}if(n.activeAttack&&!n.hitThisSwing){const s=e.mesh.position.x-n.activeAttack.position.x,r=e.mesh.position.z-n.activeAttack.position.z;if(Math.sqrt(s*s+r*r)<n.activeAttack.range&&!e.isInvincible){const c=this.gm.takeDamage(n.activeAttack.damage,"physical",n.activeAttack.postureDmg,e.isBlocking);if(n.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const l=n.activeAttack.damage/30;this.gm.hud.flashDamage(Math.min(1,l))}if(this.gm.cameraController&&this.gm.cameraController.shakeHeavy(),this.particleManager){const l=e.mesh.position.clone(),h=e.mesh.position.clone().sub(n.mesh.position).normalize();e.isBlocking&&c!=="guard_broken"?this.particleManager.spawnBlockSparks(l):(this.particleManager.spawnHitSparks(l,6,!1),this.particleManager.spawnBlood(l,h,Math.ceil(n.activeAttack.damage/5))),(c==="guard_broken"||c==="posture_broken")&&this.particleManager.spawnPostureBreak(l)}c==="died"||(c==="guard_broken"||c==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}if(this.boss){if(this.boss.update(t,e),e.activeAttack&&!e.hitThisSwing&&!this.boss.isDead){const i=this.boss.mesh.position.x-e.activeAttack.position.x,n=this.boss.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(i*i+n*n)<e.activeAttack.range+1&&this.boss.health>0){const r=this.boss.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,this.gm.hitstopHeavy(),this.gm.cameraController&&this.gm.cameraController.shakeMedium(),this.particleManager){const a=this.boss.mesh.position.clone(),c=this.boss.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(a,12,e.activeAttack.isHeavy),this.particleManager.spawnBlood(a,c,Math.ceil(e.activeAttack.damage/3)),r==="posture_broken"&&this.particleManager.spawnPostureBreak(a),r==="died"&&(this.particleManager.spawnDeathBurst(a),this.particleManager.spawnDeathBurst(a))}}}if(this.boss.activeAttack&&!this.boss.hitThisSwing){const i=e.mesh.position.x-this.boss.activeAttack.position.x,n=e.mesh.position.z-this.boss.activeAttack.position.z;if(Math.sqrt(i*i+n*n)<this.boss.activeAttack.range&&!e.isInvincible){const r=this.gm.takeDamage(this.boss.activeAttack.damage,"physical",this.boss.activeAttack.postureDmg,e.isBlocking);if(this.boss.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const a=this.boss.activeAttack.damage/25;this.gm.hud.flashDamage(Math.min(1,a))}if(this.gm.cameraController&&this.gm.cameraController.shake(.7,.25),this.particleManager){const a=e.mesh.position.clone(),c=e.mesh.position.clone().sub(this.boss.mesh.position).normalize();e.isBlocking&&r!=="guard_broken"?(this.particleManager.spawnBlockSparks(a),this.particleManager.spawnBlockSparks(a)):(this.particleManager.spawnHitSparks(a,10,!0),this.particleManager.spawnBlood(a,c,Math.ceil(this.boss.activeAttack.damage/4))),(r==="guard_broken"||r==="posture_broken")&&this.particleManager.spawnPostureBreak(a)}r==="died"||(r==="guard_broken"||r==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}}_checkDormantTriggers(t){const e=t.mesh.position;for(const i of this.enemies)i.checkTrigger&&i.checkTrigger(e)&&(i.wake(),this.gm?.audioManager&&this.gm.audioManager.play("ambushReveal",{position:i.mesh.position,volume:.8}),this.gm?.cameraController&&this.gm.cameraController.shakeLight())}getPlayerZone(t){const e=Zr(t.x,t.z);return ga(e)}resetAll(){this.enemies.forEach(t=>{t.isBoss&&this.defeatedBosses.has(t.bossId||"crypt-lord")||t.respawn()}),this.boss&&this.boss.respawn()}markBossDefeated(t){this.defeatedBosses.add(t)}isBossDefeated(t){return this.defeatedBosses.has(t)}getBoss(){return this.boss}getCryptLord(){return this.cryptLord}getActiveBoss(){return this.cryptLord&&this.cryptLord.bossActive&&!this.cryptLord.isDead?this.cryptLord:this.boss&&this.boss.isActive&&!this.boss.isDead?this.boss:null}}const Uu=Math.sqrt(3),Lv=.5*(Uu-1),ks=(3-Uu)/6,bh=o=>Math.floor(o)|0,wh=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Nv(o=Math.random){const t=Uv(o),e=new Float64Array(t).map(n=>wh[n%12*2]),i=new Float64Array(t).map(n=>wh[n%12*2+1]);return function(s,r){let a=0,c=0,l=0;const h=(s+r)*Lv,u=bh(s+h),d=bh(r+h),f=(u+d)*ks,g=u-f,_=d-f,m=s-g,p=r-_;let v,S;m>p?(v=1,S=0):(v=0,S=1);const M=m-v+ks,A=p-S+ks,E=m-1+2*ks,R=p-1+2*ks,I=u&255,y=d&255;let T=.5-m*m-p*p;if(T>=0){const F=I+t[y],H=e[F],V=i[F];T*=T,a=T*T*(H*m+V*p)}let P=.5-M*M-A*A;if(P>=0){const F=I+v+t[y+S],H=e[F],V=i[F];P*=P,c=P*P*(H*M+V*A)}let O=.5-E*E-R*R;if(O>=0){const F=I+1+t[y+1],H=e[F],V=i[F];O*=O,l=O*O*(H*E+V*R)}return 70*(a+c+l)}}function Uv(o){const e=new Uint8Array(512);for(let i=0;i<512/2;i++)e[i]=i;for(let i=0;i<512/2-1;i++){const n=i+~~(o()*(256-i)),s=e[i];e[i]=e[n],e[n]=s}for(let i=256;i<512;i++)e[i]=e[i-256];return e}class Ov{constructor(t){this.scene=t,this.size=256,this.resolution=128,this.heightScale=25,this.baseHeight=0,this.castleRadius=30,this.castleBlendRadius=45,this.seed=12345,this.noise2D=Nv(()=>this.seed/1e4),this.octaves=[{frequency:.003,amplitude:1},{frequency:.01,amplitude:.4},{frequency:.03,amplitude:.15},{frequency:.08,amplitude:.05}],this.mesh=null,this.heightData=null,this.geometry=null,this.colliders=[],this._generateTerrain()}_sampleNoise(t,e){let i=0,n=0;for(const s of this.octaves)i+=this.noise2D(t*s.frequency,e*s.frequency)*s.amplitude,n+=s.amplitude;return i/=n,i*this.heightScale+this.baseHeight}getTerrainHeight(t,e){const i=Math.sqrt(t*t+e*e);if(i<this.castleRadius)return this.baseHeight;const n=this._sampleNoise(t,e);if(i<this.castleBlendRadius){const s=(i-this.castleRadius)/(this.castleBlendRadius-this.castleRadius),r=s*s*(3-2*s);return ee.lerp(this.baseHeight,n,r)}return n}getTerrainSlope(t,e){const n=this.getTerrainHeight(t,e),s=this.getTerrainHeight(t+1,e),r=this.getTerrainHeight(t,e+1),a=(s-n)/1,c=(r-n)/1;return Math.sqrt(a*a+c*c)}getTerrainNormal(t,e){const n=this.getTerrainHeight(t,e),s=this.getTerrainHeight(t+1,e),r=this.getTerrainHeight(t,e+1),a=new b(1,s-n,0),c=new b(0,r-n,1);return new b().crossVectors(c,a).normalize()}_generateTerrain(){this.size/2,this.size/this.resolution,this.geometry=new $e(this.size,this.size,this.resolution,this.resolution),this.geometry.rotateX(-Math.PI/2);const t=this.geometry.attributes.position.array,e=(this.resolution+1)*(this.resolution+1);this.heightData=new Float32Array(e);for(let n=0;n<t.length;n+=3){const s=t[n],r=t[n+2],a=this.getTerrainHeight(s,r);t[n+1]=a,this.heightData[n/3]=a}this.geometry.computeVertexNormals();const i=this._createTerrainMaterial();this.mesh=new Y(this.geometry,i),this.mesh.receiveShadow=!0,this.mesh.castShadow=!1,this.scene.add(this.mesh),console.log(`[TerrainGenerator] Created ${this.size}x${this.size} terrain with ${e} vertices`)}_createTerrainMaterial(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#3a5a30",e.fillRect(0,0,512,512);for(let n=0;n<1e4;n++){const s=Math.random()*512,r=Math.random()*512,c=80+Math.floor(Math.random()*30),l=50+Math.floor(Math.random()*20),h=40+Math.floor(Math.random()*15);e.fillStyle=`rgb(${l}, ${c}, ${h})`,e.fillRect(s,r,2+Math.random()*3,2+Math.random()*3)}for(let n=0;n<50;n++){const s=Math.random()*512,r=Math.random()*512,a=10+Math.random()*30;e.fillStyle=`rgba(90, 70, 50, ${.2+Math.random()*.3})`,e.beginPath(),e.ellipse(s,r,a,a*.7,0,0,Math.PI*2),e.fill()}const i=new cu(t);return i.wrapS=Ni,i.wrapT=Ni,i.repeat.set(16,16),new wt({map:i,color:6982224,roughness:.9,metalness:0})}getBiome(t,e){const i=Math.sqrt(t*t+e*e);return i<this.castleRadius?"castle":i<100?"safe_meadow":i<300?"grassland":i<600?"dense_woods":"dark_frontier"}getBiomeParams(t,e){const i=this.getBiome(t,e),n={castle:{treeDensity:0,grassDensity:0,fogDensity:0,ambientLight:1,groundColor:5592405},safe_meadow:{treeDensity:.05,grassDensity:.8,fogDensity:.001,ambientLight:.9,groundColor:8039008},grassland:{treeDensity:.15,grassDensity:.6,fogDensity:.002,ambientLight:.7,groundColor:5933632},dense_woods:{treeDensity:.5,grassDensity:.4,fogDensity:.004,ambientLight:.4,groundColor:3825712},dark_frontier:{treeDensity:.3,grassDensity:.2,fogDensity:.008,ambientLight:.2,groundColor:4872768}};return n[i]||n.grassland}findValidSpawnPoint(t=50,e=200){for(let n=0;n<20;n++){const s=Math.random()*Math.PI*2,r=t+Math.random()*(e-t),a=Math.cos(s)*r,c=Math.sin(s)*r,l=this.getTerrainHeight(a,c);if(!(this.getTerrainSlope(a,c)>.5)&&!(l<-2))return new b(a,l,c)}return new b(60,this.getTerrainHeight(60,0),0)}raycast(t){const e=t.intersectObject(this.mesh);return e.length>0?e[0].point:null}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.geometry.dispose(),this.mesh.material.dispose())}}class Fv{constructor(t,e){this.scene=t,this.terrain=e,this.treeCount=500,this.treeMinDistance=4,this.treeMaxSlope=.4,this.castleExclusionRadius=35,this.trunkCollisionRadius=.4,this.grassPatchCount=2e3,this.bushCount=200,this.trees=[],this.treeColliders=[],this.instancedTrunks=null,this.instancedFoliage=null,this.instancedPines=null,this.grassMesh=null,this.bushMesh=null,this._generateTrees(),this._generateGrass(),this._generateBushes(),console.log(`[FoliageManager] Placed ${this.trees.length} trees, ${this.grassPatchCount} grass patches, ${this.bushCount} bushes`)}_generateTrees(){const t=[],e=this.treeCount*5;let i=0;for(;t.length<this.treeCount&&i<e;){i++,this.terrain.size/2;const n=(Math.random()-.5)*(this.terrain.size-20),s=(Math.random()-.5)*(this.terrain.size-20);if(Math.sqrt(n*n+s*s)<this.castleExclusionRadius||this.terrain.getTerrainSlope(n,s)>this.treeMaxSlope)continue;const c=this.terrain.getBiomeParams(n,s);if(Math.random()>c.treeDensity*3)continue;let l=!1;for(const _ of t){const m=n-_.x,p=s-_.z;if(m*m+p*p<this.treeMinDistance*this.treeMinDistance){l=!0;break}}if(l)continue;const h=this.terrain.getTerrainHeight(n,s),u=this.terrain.getBiome(n,s),d=(u==="dense_woods"||u==="dark_frontier")&&Math.random()>.3,f=.7+Math.random()*.6,g=Math.random()*Math.PI*2;t.push({x:n,y:h,z:s,scale:f,rotation:g,isPine:d})}this.trees=t,this._createTreeInstances()}_createTreeInstances(){const t=this.trees.filter(i=>!i.isPine),e=this.trees.filter(i=>i.isPine);if(t.length>0){const i=new be(.15,.25,3,6);i.translate(0,1.5,0);const n=new wt({color:4863269,roughness:.95});this.instancedTrunks=new An(i,n,t.length),this.instancedTrunks.castShadow=!0,this.instancedTrunks.receiveShadow=!0;const s=new ms(1.8,1);s.translate(0,4.2,0);const r=new wt({color:2972190,roughness:.9});this.instancedFoliage=new An(s,r,t.length),this.instancedFoliage.castShadow=!0,this.instancedFoliage.receiveShadow=!0;const a=new Ot;t.forEach((c,l)=>{a.makeRotationY(c.rotation),a.scale(new b(c.scale,c.scale,c.scale)),a.setPosition(c.x,c.y,c.z),this.instancedTrunks.setMatrixAt(l,a),this.instancedFoliage.setMatrixAt(l,a),this.treeColliders.push({x:c.x,z:c.z,radius:this.trunkCollisionRadius*c.scale,height:4*c.scale,baseY:c.y})}),this.instancedTrunks.instanceMatrix.needsUpdate=!0,this.instancedFoliage.instanceMatrix.needsUpdate=!0,this.scene.add(this.instancedTrunks),this.scene.add(this.instancedFoliage)}if(e.length>0){const i=new be(.12,.2,4,6);i.translate(0,2,0);const n=new wt({color:3811866,roughness:.95}),s=new An(i,n,e.length);s.castShadow=!0,s.receiveShadow=!0;const r=new $i(1.5,3,6);r.translate(0,5.5,0);const a=new wt({color:1722904,roughness:.85});this.instancedPines=new An(r,a,e.length),this.instancedPines.castShadow=!0,this.instancedPines.receiveShadow=!0;const c=new Ot;e.forEach((l,h)=>{c.makeRotationY(l.rotation),c.scale(new b(l.scale,l.scale,l.scale)),c.setPosition(l.x,l.y,l.z),s.setMatrixAt(h,c),this.instancedPines.setMatrixAt(h,c),this.treeColliders.push({x:l.x,z:l.z,radius:this.trunkCollisionRadius*l.scale*.9,height:5*l.scale,baseY:l.y})}),s.instanceMatrix.needsUpdate=!0,this.instancedPines.instanceMatrix.needsUpdate=!0,this.scene.add(s),this.scene.add(this.instancedPines)}}_generateGrass(){const t=new $e(.3,.5);t.translate(0,.25,0);const e=new wt({color:4880944,roughness:.9,side:ue,alphaTest:.5});this.grassMesh=new An(t,e,this.grassPatchCount*3),this.grassMesh.receiveShadow=!0;const i=new Ot;let n=0;for(let s=0;s<this.grassPatchCount;s++){const r=(Math.random()-.5)*this.terrain.size*.9,a=(Math.random()-.5)*this.terrain.size*.9;if(r*r+a*a<this.castleExclusionRadius*this.castleExclusionRadius)continue;const c=this.terrain.getBiomeParams(r,a);if(Math.random()>c.grassDensity)continue;const l=this.terrain.getTerrainHeight(r,a);for(let h=0;h<3;h++){const u=(Math.random()-.5)*.3,d=(Math.random()-.5)*.3,f=h/3*Math.PI+Math.random()*.5,g=.5+Math.random()*.5;if(i.makeRotationY(f),i.scale(new b(g,g,g)),i.setPosition(r+u,l,a+d),this.grassMesh.setMatrixAt(n,i),n++,n>=this.grassPatchCount*3)break}if(n>=this.grassPatchCount*3)break}this.grassMesh.instanceMatrix.needsUpdate=!0,this.grassMesh.count=n,this.scene.add(this.grassMesh)}_generateBushes(){const t=new ms(.5,1);t.scale(1,.7,1),t.translate(0,.35,0);const e=new wt({color:3828264,roughness:.9});this.bushMesh=new An(t,e,this.bushCount),this.bushMesh.castShadow=!0,this.bushMesh.receiveShadow=!0;const i=new Ot;let n=0;for(let s=0;s<this.bushCount*3&&n<this.bushCount;s++){const r=(Math.random()-.5)*this.terrain.size*.85,a=(Math.random()-.5)*this.terrain.size*.85;if(r*r+a*a<(this.castleExclusionRadius+5)*(this.castleExclusionRadius+5))continue;const c=this.terrain.getBiomeParams(r,a);if(Math.random()>c.grassDensity*.8||this.terrain.getTerrainSlope(r,a)>.3)continue;const l=this.terrain.getTerrainHeight(r,a),h=.6+Math.random()*.8,u=Math.random()*Math.PI*2;i.makeRotationY(u),i.scale(new b(h,h,h)),i.setPosition(r,l,a),this.bushMesh.setMatrixAt(n,i),n++}this.bushMesh.instanceMatrix.needsUpdate=!0,this.bushMesh.count=n,this.scene.add(this.bushMesh)}checkTreeCollision(t,e=.4){for(const i of this.treeColliders){if(t.y<i.baseY-1||t.y>i.baseY+i.height)continue;const n=t.x-i.x,s=t.z-i.z,r=n*n+s*s,a=i.radius+e;if(r<a*a){const c=Math.sqrt(r);if(c>.001){const l=a-c;return new b(n/c*l,0,s/c*l)}}}return null}getTreeColliders(){return this.treeColliders}isNearTree(t,e,i=3){for(const n of this.treeColliders){const s=t-n.x,r=e-n.z;if(s*s+r*r<i*i)return!0}return!1}dispose(){this.instancedTrunks&&(this.scene.remove(this.instancedTrunks),this.instancedTrunks.geometry.dispose(),this.instancedTrunks.material.dispose()),this.instancedFoliage&&(this.scene.remove(this.instancedFoliage),this.instancedFoliage.geometry.dispose(),this.instancedFoliage.material.dispose()),this.instancedPines&&(this.scene.remove(this.instancedPines),this.instancedPines.geometry.dispose(),this.instancedPines.material.dispose()),this.grassMesh&&(this.scene.remove(this.grassMesh),this.grassMesh.geometry.dispose(),this.grassMesh.material.dispose()),this.bushMesh&&(this.scene.remove(this.bushMesh),this.bushMesh.geometry.dispose(),this.bushMesh.material.dispose())}}class Bv{constructor(t,e){this.scene=t,this.terrain=e,this.minDistFromCastle=60,this.maxDistFromCastle=180,this.villageCount=3,this.maxSlopeForVillage=.3,this.materials=this._createMaterials(),this.villages=[],this.meshes=[],this._generateVillages()}_createMaterials(){return{hutWall:new wt({color:9139029,roughness:.9,metalness:0}),hutRoof:new wt({color:10519900,roughness:1,metalness:0}),marketWood:new wt({color:7033668,roughness:.85,metalness:0}),marketFabric:new wt({color:12080208,roughness:.8,metalness:0,side:ue}),wellStone:new wt({color:7368816,roughness:.95,metalness:0}),wellWood:new wt({color:6045747,roughness:.9,metalness:0}),fenceWood:new wt({color:8021074,roughness:.9,metalness:0})}}_generateVillages(){const t=[];let i=0;const n=100;for(;t.length<this.villageCount&&i<n;){i++;const s=Math.random()*Math.PI*2,r=this.minDistFromCastle+Math.random()*(this.maxDistFromCastle-this.minDistFromCastle),a=Math.cos(s)*r,c=Math.sin(s)*r;if(this.terrain.getTerrainSlope(a,c)>this.maxSlopeForVillage)continue;let h=!1;for(const f of t){const g=a-f.x,_=c-f.z;if(Math.sqrt(g*g+_*_)<70){h=!0;break}}if(h)continue;const u=this.terrain.getTerrainHeight(a,c),d={x:a,y:u,z:c,rotation:Math.random()*Math.PI*2,size:2+Math.floor(Math.random()*2)};t.push(d)}this.villages=t,console.log(`[VillageManager] Placed ${t.length} villages`);for(const s of t)this._buildVillage(s)}_buildVillage(t){const e=new $t;e.position.set(t.x,0,t.z),e.rotation.y=t.rotation,this._createWell(e,0,0);const i=t.size;for(let r=0;r<i;r++){const a=r/i*Math.PI*2+Math.random()*.5,c=8+Math.random()*5,l=Math.cos(a)*c,h=Math.sin(a)*c;this._createHut(e,l,h,t)}const n=1+Math.floor(Math.random()*2);for(let r=0;r<n;r++){const a=r/n*Math.PI*2+Math.PI/4+Math.random()*.3,c=5+Math.random()*3,l=Math.cos(a)*c,h=Math.sin(a)*c;this._createMarketStall(e,l,h,t)}const s=3+Math.floor(Math.random()*3);for(let r=0;r<s;r++){const a=Math.random()*Math.PI*2,c=12+Math.random()*5,l=Math.cos(a)*c,h=Math.sin(a)*c;this._createFence(e,l,h,a,t)}this.scene.add(e),this.meshes.push(e)}_createHut(t,e,i,n){const s=Math.cos(n.rotation),r=Math.sin(n.rotation),a=n.x+e*s-i*r,c=n.z+e*r+i*s,l=this.terrain.getTerrainHeight(a,c),h=new $t;h.position.set(e,l,i);const u=2.5+Math.random()*.5,d=1.5+Math.random()*.3,f=new be(d,d*1.1,u,12),g=new Y(f,this.materials.hutWall);g.position.y=u/2,g.castShadow=!0,g.receiveShadow=!0,h.add(g);const _=1.8,m=d*1.4,p=new $i(m,_,12),v=new Y(p,this.materials.hutRoof);v.position.y=u+_/2-.1,v.castShadow=!0,h.add(v);const S=new ie(.6,1.5,.1),M=new wt({color:2760725}),A=new Y(S,M);A.position.set(0,.75,d+.05),h.add(A),h.rotation.y=Math.random()*Math.PI*2,t.add(h)}_createMarketStall(t,e,i,n){const s=Math.cos(n.rotation),r=Math.sin(n.rotation),a=n.x+e*s-i*r,c=n.z+e*r+i*s,l=this.terrain.getTerrainHeight(a,c),h=new $t;h.position.set(e,l,i);const u=2.2,d=new be(.08,.08,u,6),f=2,g=1.5,_=[[-f/2,-g/2],[f/2,-g/2],[-f/2,g/2],[f/2,g/2]];for(const[E,R]of _){const I=new Y(d,this.materials.marketWood);I.position.set(E,u/2,R),I.castShadow=!0,h.add(I)}const m=new ie(f,.1,g),p=new Y(m,this.materials.marketWood);p.position.y=.9,p.castShadow=!0,p.receiveShadow=!0,h.add(p);const v=new $e(f*1.2,g*1.3),S=[12080208,5535160,7051604,13216083],M=new wt({color:S[Math.floor(Math.random()*S.length)],roughness:.8,side:ue}),A=new Y(v,M);A.position.y=u+.05,A.rotation.x=-Math.PI/2+.15,A.castShadow=!0,h.add(A),h.rotation.y=Math.random()*Math.PI*2,t.add(h)}_createWell(t,e,i){const n=new $t;n.position.set(e,0,i);const s=new fn(1,.3,8,16),r=new Y(s,this.materials.wellStone);r.rotation.x=Math.PI/2,r.position.y=.3,r.castShadow=!0,r.receiveShadow=!0,n.add(r);const a=new be(1,1,.8,12,1,!0),c=new Y(a,this.materials.wellStone);c.position.y=.4,c.castShadow=!0,n.add(c);const l=new be(.08,.08,2.5,6),h=new Y(l,this.materials.wellWood);h.position.set(.7,1.25,0),h.castShadow=!0,n.add(h);const u=new Y(l,this.materials.wellWood);u.position.set(-.7,1.25,0),u.castShadow=!0,n.add(u);const d=new be(.06,.06,1.6,6),f=new Y(d,this.materials.wellWood);f.position.y=2.5,f.rotation.z=Math.PI/2,f.castShadow=!0,n.add(f);const g=new $i(1.2,.6,4),_=new Y(g,this.materials.hutRoof);_.position.y=2.9,_.rotation.y=Math.PI/4,_.castShadow=!0,n.add(_);const m=new hr(.85,12),p=new wt({color:1716304,roughness:.3,metalness:.1}),v=new Y(m,p);v.rotation.x=-Math.PI/2,v.position.y=.1,n.add(v),t.add(n)}_createFence(t,e,i,n,s){const r=Math.cos(s.rotation),a=Math.sin(s.rotation),c=s.x+e*r-i*a,l=s.z+e*a+i*r,h=this.terrain.getTerrainHeight(c,l),u=new $t;u.position.set(e,h,i),u.rotation.y=n;const d=3+Math.random()*2,f=Math.ceil(d/1.2),g=d/(f-1),_=new be(.06,.07,1,6);for(let S=0;S<f;S++){const M=new Y(_,this.materials.fenceWood);M.position.set(S*g-d/2,.5,0),M.castShadow=!0,u.add(M)}const m=new ie(d,.08,.06),p=new Y(m,this.materials.fenceWood);p.position.y=.3,p.castShadow=!0,u.add(p);const v=new Y(m,this.materials.fenceWood);v.position.y=.7,v.castShadow=!0,u.add(v),t.add(u)}getVillages(){return this.villages}isNearVillage(t,e,i=20){for(const n of this.villages){const s=t-n.x,r=e-n.z;if(Math.sqrt(s*s+r*r)<i)return!0}return!1}dispose(){for(const t of this.meshes)this.scene.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose()});for(const t of Object.values(this.materials))t.dispose()}}class kv{constructor(t,e,i=[]){this.scene=t,this.terrain=e,this.colliders=i,this.minDistFromCastle=100,this.maxDistFromCastle=250,this.ruinsCount=4,this.maxSlopeForRuins=.4,this.materials=this._createMaterials(),this.ruins=[],this.meshes=[],this._generateRuins()}_createMaterials(){return{ancientStone:new wt({color:5921370,roughness:.95,metalness:0}),mossyStone:new wt({color:4870208,roughness:1,metalness:0}),crackedStone:new wt({color:6973536,roughness:.9,metalness:0}),altarStone:new wt({color:3814709,roughness:.85,metalness:.05}),runeGlow:new wt({color:4491434,emissive:4491434,emissiveIntensity:.3,roughness:.5,metalness:.2})}}_generateRuins(){const t=[];let i=0;const n=150;for(;t.length<this.ruinsCount&&i<n;){i++;const s=Math.random()*Math.PI*2,r=this.minDistFromCastle+Math.random()*(this.maxDistFromCastle-this.minDistFromCastle),a=Math.cos(s)*r,c=Math.sin(s)*r;if(this.terrain.getTerrainSlope(a,c)>this.maxSlopeForRuins)continue;let h=!1;for(const f of t){const g=a-f.x,_=c-f.z;if(Math.sqrt(g*g+_*_)<50){h=!0;break}}if(h)continue;const u=this.terrain.getTerrainHeight(a,c),d={x:a,y:u,z:c,rotation:Math.random()*Math.PI*2,type:this._pickRuinType(),enemyCampRadius:15+Math.random()*10};t.push(d)}this.ruins=t,console.log(`[RuinsManager] Placed ${t.length} ruin sites`);for(const s of t)this._buildRuin(s)}_pickRuinType(){const t=["temple","monument","shrine","graveyard"];return t[Math.floor(Math.random()*t.length)]}_buildRuin(t){const e=new $t;switch(e.position.set(t.x,0,t.z),e.rotation.y=t.rotation,t.type){case"temple":this._createTempleRuin(e,t);break;case"monument":this._createMonumentRuin(e,t);break;case"shrine":this._createShrineRuin(e,t);break;case"graveyard":this._createGraveyardRuin(e,t);break}this.scene.add(e),this.meshes.push(e)}_createTempleRuin(t,e){const i=Math.cos(e.rotation),n=Math.sin(e.rotation);this._createAltar(t,0,0,e);const s=[[-6,-4],[-6,4],[6,-4],[6,4],[-6,0],[6,0],[-3,-4],[-3,4],[3,-4],[3,4]];for(const[r,a]of s){const c=e.x+r*i-a*n,l=e.z+r*n+a*i,h=this.terrain.getTerrainHeight(c,l),d=Math.random()>.4?1+Math.random()*2:3.5+Math.random()*1;this._createColumn(t,r,a,d,h,e)}this._createCollapsedWall(t,-8,0,Math.PI/2,e),this._createCollapsedWall(t,8,0,-Math.PI/2,e),this._createFallenColumn(t,2,-6,Math.PI*.1,e)}_createMonumentRuin(t,e){const i=Math.cos(e.rotation),n=Math.sin(e.rotation),s=e.x,r=e.z,a=this.terrain.getTerrainHeight(s,r);this._createObelisk(t,0,0,a);const c=6;for(let l=0;l<c;l++){const h=l/c*Math.PI*2,u=5,d=Math.cos(h)*u,f=Math.sin(h)*u,g=e.x+d*i-f*n,_=e.z+d*n+f*i,m=this.terrain.getTerrainHeight(g,_),p=Math.random()>.2?.8+Math.random()*1.5:3+Math.random();this._createColumn(t,d,f,p,m,e)}this._createDebris(t,3,2,e),this._createDebris(t,-2,4,e),this._createDebris(t,-4,-3,e)}_createShrineRuin(t,e){this._createSmallAltar(t,0,0,e);const i=Math.cos(e.rotation),n=Math.sin(e.rotation);for(const s of[-1,1]){const r=s*3,a=0,c=e.x+r*i-a*n,l=e.z+r*n+a*i,h=this.terrain.getTerrainHeight(c,l),u=2+Math.random()*1.5;this._createColumn(t,r,a,u,h,e)}this._createOfferingStones(t,0,2,e),this._createCollapsedWall(t,0,-3,0,e)}_createGraveyardRuin(t,e){const i=Math.cos(e.rotation),n=Math.sin(e.rotation);this._createMausoleum(t,0,0,e);const s=8+Math.floor(Math.random()*5);for(let r=0;r<s;r++){const a=Math.random()*Math.PI*2,c=4+Math.random()*6,l=Math.cos(a)*c,h=Math.sin(a)*c,u=e.x+l*i-h*n,d=e.z+l*n+h*i,f=this.terrain.getTerrainHeight(u,d);this._createHeadstone(t,l,h,f,e)}}_createColumn(t,e,i,n,s,r){const a=new $t;a.position.set(e,s,i);const c=new be(.7,.8,.4,8),l=new Y(c,this.materials.ancientStone);l.position.y=.2,l.castShadow=!0,l.receiveShadow=!0,a.add(l);const h=new be(.5,.55,n,8),u=new Y(h,this.materials.mossyStone);if(u.position.y=.4+n/2,u.castShadow=!0,u.receiveShadow=!0,a.add(u),n>2.5){const m=new be(.65,.55,.3,8),p=new Y(m,this.materials.crackedStone);p.position.y=.4+n+.15,p.castShadow=!0,a.add(p)}const d=Math.cos(r.rotation),f=Math.sin(r.rotation),g=r.x+e*d-i*f,_=r.z+e*f+i*d;this.colliders.push({type:"cylinder",position:new b(g,s,_),radius:.6,height:n+.5}),t.add(a)}_createFallenColumn(t,e,i,n,s){const r=Math.cos(s.rotation),a=Math.sin(s.rotation),c=s.x+e*r-i*a,l=s.z+e*a+i*r,h=this.terrain.getTerrainHeight(c,l),u=new $t;u.position.set(e,h+.3,i),u.rotation.set(Math.PI/2-.1,n,0);const d=new be(.45,.5,3,8),f=new Y(d,this.materials.mossyStone);f.castShadow=!0,f.receiveShadow=!0,u.add(f);const g=new be(.2,.45,.3,8),_=new Y(g,this.materials.crackedStone);_.position.y=1.65,u.add(_),this.colliders.push({type:"box",bounds:new Ze(new b(c-1.5,h,l-.6),new b(c+1.5,h+1,l+.6))}),t.add(u)}_createCollapsedWall(t,e,i,n,s){const r=Math.cos(s.rotation),a=Math.sin(s.rotation),c=s.x+e*r-i*a,l=s.z+e*a+i*r,h=this.terrain.getTerrainHeight(c,l),u=new $t;u.position.set(e,h,i),u.rotation.y=n;const d=1.5+Math.random()*1,f=4+Math.random()*2,g=new ie(f,d,.6),_=new Y(g,this.materials.mossyStone);_.position.y=d/2,_.castShadow=!0,_.receiveShadow=!0,u.add(_);for(let v=0;v<3;v++){const S=.3+Math.random()*.4,M=new ie(S,S*.7,S),A=new Y(M,this.materials.crackedStone);A.position.set((Math.random()-.5)*f,S*.35,.6+Math.random()*.5),A.rotation.set(Math.random()*.3,Math.random()*Math.PI,Math.random()*.3),A.castShadow=!0,u.add(A)}const m=Math.cos(s.rotation+n),p=Math.sin(s.rotation+n);this.colliders.push({type:"box",bounds:new Ze(new b(c-f/2*Math.abs(m)-.3,h,l-f/2*Math.abs(p)-.3),new b(c+f/2*Math.abs(m)+.3,h+d,l+f/2*Math.abs(p)+.3))}),t.add(u)}_createAltar(t,e,i,n){const s=Math.cos(n.rotation),r=Math.sin(n.rotation),a=n.x+e*s-i*r,c=n.z+e*r+i*s,l=this.terrain.getTerrainHeight(a,c),h=new $t;h.position.set(e,l,i);const u=new ie(3,.4,2.5),d=new Y(u,this.materials.altarStone);d.position.y=.2,d.castShadow=!0,d.receiveShadow=!0,h.add(d);const f=new ie(2,.6,1.5),g=new Y(f,this.materials.altarStone);g.position.y=.7,g.castShadow=!0,g.receiveShadow=!0,h.add(g);const _=new $e(1.2,.8),m=new Y(_,this.materials.runeGlow);m.rotation.x=-Math.PI/2,m.position.y=1.01,h.add(m);const p=new fi(4491434,.5,8);p.position.y=1.5,h.add(p),this.colliders.push({type:"box",bounds:new Ze(new b(a-1.5,l,c-1.25),new b(a+1.5,l+1.2,c+1.25))}),t.add(h)}_createSmallAltar(t,e,i,n){const s=Math.cos(n.rotation),r=Math.sin(n.rotation),a=n.x+e*s-i*r,c=n.z+e*r+i*s,l=this.terrain.getTerrainHeight(a,c),h=new $t;h.position.set(e,l,i);const u=new be(.6,.8,.8,8),d=new Y(u,this.materials.altarStone);d.position.y=.4,d.castShadow=!0,d.receiveShadow=!0,h.add(d);const f=new fn(.3,.08,8,12),g=new Y(f,this.materials.ancientStone);g.rotation.x=Math.PI/2,g.position.y=.85,h.add(g);const _=new fi(4491434,.3,5);_.position.y=1.2,h.add(_),this.colliders.push({type:"cylinder",position:new b(a,l,c),radius:.9,height:1}),t.add(h)}_createOfferingStones(t,e,i,n){const s=Math.cos(n.rotation),r=Math.sin(n.rotation);for(let a=0;a<3;a++){const c=a/3*Math.PI*2,l=1.2,h=e+Math.cos(c)*l,u=i+Math.sin(c)*l,d=n.x+h*s-u*r,f=n.z+h*r+u*s,g=this.terrain.getTerrainHeight(d,f),_=new Me(.15+Math.random()*.1,6,6),m=new Y(_,this.materials.crackedStone);m.position.set(h,g+.1,u),m.scale.y=.6,m.castShadow=!0,t.add(m)}}_createObelisk(t,e,i,n){const s=new $t;s.position.set(e,n,i);const r=new ie(2.5,.6,2.5),a=new Y(r,this.materials.altarStone);a.position.y=.3,a.castShadow=!0,a.receiveShadow=!0,s.add(a);const c=6+Math.random()*2,l=new be(.3,.8,c,4),h=new Y(l,this.materials.ancientStone);h.position.y=.6+c/2,h.rotation.y=Math.PI/4,h.castShadow=!0,h.receiveShadow=!0,s.add(h);const u=new $i(.4,.6,4),d=new Y(u,this.materials.runeGlow);d.position.y=.6+c+.3,d.rotation.y=Math.PI/4,s.add(d);const f=new fi(4491434,.8,12);f.position.y=c+1,s.add(f),this.colliders.push({type:"box",bounds:new Ze(new b(e-1.25,n,i-1.25),new b(e+1.25,n+c+1,i+1.25))}),t.add(s)}_createDebris(t,e,i,n){const s=Math.cos(n.rotation),r=Math.sin(n.rotation),a=n.x+e*s-i*r,c=n.z+e*r+i*s,l=this.terrain.getTerrainHeight(a,c),h=new $t;h.position.set(e,l,i);const u=3+Math.floor(Math.random()*3);for(let d=0;d<u;d++){const f=.2+Math.random()*.4,g=new ie(f,f*.6,f*.8),_=new Y(g,this.materials.crackedStone);_.position.set((Math.random()-.5)*2,f*.3,(Math.random()-.5)*2),_.rotation.set(Math.random()*.4,Math.random()*Math.PI,Math.random()*.4),_.castShadow=!0,h.add(_)}t.add(h)}_createMausoleum(t,e,i,n){const s=Math.cos(n.rotation),r=Math.sin(n.rotation),a=n.x+e*s-i*r,c=n.z+e*r+i*s,l=this.terrain.getTerrainHeight(a,c),h=new $t;h.position.set(e,l,i);const u=new ie(5,.3,4),d=new Y(u,this.materials.altarStone);d.position.y=.15,d.castShadow=!0,d.receiveShadow=!0,h.add(d);const f=new ie(5,2.5,.4),g=new Y(f,this.materials.mossyStone);g.position.set(0,1.25+.3,-1.8),g.castShadow=!0,g.receiveShadow=!0,h.add(g);const _=new ie(.4,1.8,3.2),m=new Y(_,this.materials.mossyStone);m.position.set(-2.3,.9+.3,-.2),m.castShadow=!0,m.receiveShadow=!0,h.add(m);const p=new ie(.4,2.2,3.2),v=new Y(p,this.materials.mossyStone);v.position.set(2.3,1.1+.3,-.2),v.castShadow=!0,v.receiveShadow=!0,h.add(v);const S=new ie(2.2,.8,1.2),M=new Y(S,this.materials.altarStone);M.position.set(0,.7,-.5),M.castShadow=!0,M.receiveShadow=!0,h.add(M);const A=new ie(2.3,.2,1.3),E=new Y(A,this.materials.ancientStone);E.position.set(.1,1.2,-.4),E.rotation.y=.08,E.castShadow=!0,h.add(E),this.colliders.push({type:"box",bounds:new Ze(new b(a-2.5,l,c-2),new b(a+2.5,l+2.8,c+2))}),t.add(h)}_createHeadstone(t,e,i,n,s){const r=new $t;r.position.set(e,n,i),r.rotation.y=Math.random()*.4-.2;const a=.6+Math.random()*.4,c=.4+Math.random()*.3,l=new ie(c,a,.12),h=new Y(l,this.materials.mossyStone);h.position.y=a/2,Math.random()>.6&&(h.rotation.x=(Math.random()-.5)*.3,h.rotation.z=(Math.random()-.5)*.2),h.castShadow=!0,r.add(h),t.add(r)}getRuins(){return this.ruins}isNearRuin(t,e,i=15){for(const n of this.ruins){const s=t-n.x,r=e-n.z;if(Math.sqrt(s*s+r*r)<i)return!0}return!1}getNearbyRuin(t,e,i=20){for(const n of this.ruins){const s=t-n.x,r=e-n.z;if(Math.sqrt(s*s+r*r)<i)return n}return null}dispose(){for(const t of this.meshes)this.scene.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose()});for(const t of Object.values(this.materials))t.dispose()}}class zv{constructor(t){this.scene=t,this.colliders=[],this.floorZones=[],this.stairs=[],this.doors=[],this.hiddenWalls=[],this.ladders=[],this.shortcuts=[],this.bonfirePosition=new b(0,0,0),this.bossArena={active:!1,phase:"idle"},this._createSkybox(),this.terrain=new Ov(t),this._createStartingCastle(),this.foliage=new Fv(t,this.terrain),this.villages=new Bv(t,this.terrain),this.ruinsManager=new kv(t,this.terrain,this.colliders),this._createLighting(),this.bonfirePosition.y=this.terrain.getTerrainHeight(0,0)}getFloorY(t,e){return this.terrain.getTerrainHeight(t,e)}getTerrainSlope(t,e){return this.terrain.getTerrainSlope(t,e)}getBiome(t,e){return this.terrain.getBiome(t,e)}checkWallCollision(t,e=.4){const i=new b;let n=!1;for(const s of this.colliders)if(s.type==="box"){const r=s.bounds;if(!r)continue;const a=r.min.x-e,c=r.max.x+e,l=r.min.z-e,h=r.max.z+e;if(t.x>a&&t.x<c&&t.z>l&&t.z<h&&t.y>r.min.y-1&&t.y<r.max.y){const u=t.x-a,d=c-t.x,f=t.z-l,g=h-t.z,_=Math.min(u,d,f,g);_===u?i.x-=u:_===d?i.x+=d:_===f?i.z-=f:i.z+=g,n=!0}}else if(s.type==="cylinder"){const r=t.x-s.position.x,a=t.z-s.position.z,c=Math.sqrt(r*r+a*a),l=s.radius+e;if(c<l&&t.y>s.position.y-4&&t.y<s.position.y+s.height){const h=l-c;c>.001&&(i.x+=r/c*h,i.z+=a/c*h),n=!0}}return n?i:null}checkTreeCollision(t,e=.4){return this.foliage?this.foliage.checkTreeCollision(t,e):null}checkCollision(t,e=.4){const i=new b;let n=!1;const s=this.checkWallCollision(t,e);s&&(i.add(s),n=!0);const r=this.checkTreeCollision(t,e);return r&&(i.add(r),n=!0),{collides:n,pushVector:i}}isNearTree(t,e,i=3){return this.foliage?this.foliage.isNearTree(t,e,i):!1}isNearVillage(t,e,i=25){return this.villages?this.villages.isNearVillage(t,e,i):!1}getVillages(){return this.villages?this.villages.getVillages():[]}isNearRuin(t,e,i=15){return this.ruinsManager?this.ruinsManager.isNearRuin(t,e,i):!1}getRuins(){return this.ruinsManager?this.ruinsManager.getRuins():[]}getNearbyRuin(t,e,i=20){return this.ruinsManager?this.ruinsManager.getNearbyRuin(t,e,i):null}_createSkybox(){const t=new Me(500,32,32),e=new Ge({uniforms:{topColor:{value:new vt(4491468)},horizonColor:{value:new vt(8956620)},bottomColor:{value:new vt(6715204)},sunDirection:{value:new b(.5,.7,.3).normalize()},sunColor:{value:new vt(16777181)}},vertexShader:`
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
      `,side:Je}),i=new Y(t,e);this.scene.add(i);const n=new hr(20,32),s=new Zt({color:16777198,transparent:!0,opacity:.9}),r=new Y(n,s);r.position.set(150,200,100),r.lookAt(0,0,0),this.scene.add(r)}_createLighting(){const t=new Tu(16775920,2);t.position.set(50,80,30),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=1,t.shadow.camera.far=200,t.shadow.camera.left=-80,t.shadow.camera.right=80,t.shadow.camera.top=80,t.shadow.camera.bottom=-80,t.shadow.bias=-.001,this.scene.add(t);const e=new Tp(6719658,.6);this.scene.add(e);const i=new xp(8956620,4478259,.5);this.scene.add(i)}_createStartingCastle(){const c=new wt({color:5592405,roughness:.9,metalness:.1}),l=new wt({color:4473924,roughness:.95,metalness:.05}),h=new $e(36,46),u=new wt({color:3816e3,roughness:.95}),d=new Y(h,u);d.rotation.x=-Math.PI/2,d.position.y=.05,d.receiveShadow=!0,this.scene.add(d);const f=(M,A,E,R,I,y)=>{const T=new ie(R,I,y),P=new Y(T,c);P.position.set(M,A+I/2,E),P.castShadow=!0,P.receiveShadow=!0,this.scene.add(P),this.colliders.push({type:"box",bounds:new Ze(new b(M-R/2,A,E-y/2),new b(M+R/2,A+I,E+y/2))})},g=(M,A)=>{const E=new be(3.5,4,12,8),R=new Y(E,l);R.position.set(M,12/2,A),R.castShadow=!0,R.receiveShadow=!0,this.scene.add(R);const I=new be(8/2+.2,8/2-.3,1.5,8),y=new Y(I,c);y.position.set(M,12+.75,A),y.castShadow=!0,this.scene.add(y),this.colliders.push({type:"cylinder",position:new b(M,0,A),radius:8/2,height:12})},_=40/2,m=50/2;f(0,0,-m,40,8,2);const p=34/2;f(-_+p/2+2/2,0,m,p-2,8,2),f(_-p/2-2/2,0,m,p-2,8,2),f(-_,0,0,2,8,50),f(_,0,0,2,8,50),g(-_+8/2,-m+8/2),g(_-8/2,-m+8/2),g(-_+8/2,m-8/2),g(_-8/2,m-8/2),this._createBonfire(0,0,-5);const v=new ie(7,1.5,2+.5),S=new Y(v,l);S.position.set(0,8-.25,m),S.castShadow=!0,this.scene.add(S),console.log("[World] Starting castle created")}_createBonfire(t,e,i){const n=new $t;n.position.set(t,e,i);const s=new fn(.8,.15,8,16),r=new wt({color:3355443,roughness:.9}),a=new Y(s,r);a.rotation.x=Math.PI/2,a.position.y=.1,a.castShadow=!0,n.add(a);const c=new wt({color:3809296,roughness:.95});for(let f=0;f<6;f++){const g=new be(.08,.1,.8,6),_=new Y(g,c),m=f/6*Math.PI*2;_.position.set(Math.cos(m)*.3,.15,Math.sin(m)*.3),_.rotation.x=Math.PI/2,_.rotation.z=m+Math.PI/2,_.rotation.y=.3,n.add(_)}const l=new fi(16746547,3,15);l.position.y=.8,l.castShadow=!0,n.add(l);const h=()=>{requestAnimationFrame(h),l.intensity=2.5+Math.sin(Date.now()*.01)*.5+Math.random()*.3};h();const u=new Me(.05,8,8),d=new Zt({color:16737792});for(let f=0;f<8;f++){const g=new Y(u,d);g.position.set((Math.random()-.5)*.4,.3+Math.random()*.5,(Math.random()-.5)*.4),n.add(g)}this.scene.add(n),this.bonfirePosition.set(t,e,i)}getItemSpawns(){return[]}getNearbyDoor(t){return null}tryOpenDoor(t,e){return!1}getNearbyLadder(t){return null}getNearbyShortcut(t){return null}unlockShortcut(t){return!1}checkHiddenWallHit(t,e){return null}revealHiddenWall(t){}checkInsideIllusoryWall(t){return null}activateBossArena(){return!1}setBossArenaPhase(t){return null}updateBossArena(t,e){return 0}deactivateBossArena(){return!1}isBlockedByFogGate(t){return!1}getBossArenaState(){return{active:!1,phase:"idle"}}dispose(){this.terrain&&this.terrain.dispose(),this.foliage&&this.foliage.dispose(),this.villages&&this.villages.dispose(),this.ruinsManager&&this.ruinsManager.dispose()}}class Gv{constructor(t){this.keys={},this.mouseButtons={},this.mouseDelta={x:0,y:0},this.isLocked=!1,this.buffer={},this.bufferDuration=.15,this.domElement=t,window.addEventListener("keydown",e=>{this.keys[e.code]=!0,this._bufferAction(e.code)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),t.addEventListener("mousedown",e=>{this.mouseButtons[e.button]=!0,this._bufferAction(`mouse${e.button}`)}),t.addEventListener("mouseup",e=>{this.mouseButtons[e.button]=!1}),t.addEventListener("mousemove",e=>{this.isLocked&&(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY)}),t.addEventListener("click",()=>{this.isLocked||t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault())}_bufferAction(t){this.buffer[t]=this.bufferDuration}update(t){const e=t||.016666666666666666;for(const i in this.buffer)this.buffer[i]-=e,this.buffer[i]<=0&&delete this.buffer[i]}consumeBuffer(t){return this.buffer[t]?(delete this.buffer[t],!0):!1}getMouseDelta(){const t={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}get moveForward(){return this.keys.KeyW}get moveBack(){return this.keys.KeyS}get moveLeft(){return this.keys.KeyA}get moveRight(){return this.keys.KeyD}get dodge(){return this.consumeBuffer("Space")}get lightAttack(){return this.consumeBuffer("mouse0")}get heavyAttack(){return this.consumeBuffer("mouse2")}get block(){return this.keys.ShiftLeft||this.keys.ShiftRight}get lockOn(){return this.consumeBuffer("KeyQ")}get interact(){return this.consumeBuffer("KeyE")}getMovementVector(){let t=0,e=0;this.moveForward&&(e-=1),this.moveBack&&(e+=1),this.moveLeft&&(t-=1),this.moveRight&&(t+=1);const i=Math.sqrt(t*t+e*e);return i>0&&(t/=i,e/=i),{x:t,z:e}}}class Hv{constructor(t){this.gm=t,this.healthBar=document.getElementById("health-bar"),this.staminaBar=document.getElementById("stamina-bar"),this.postureBar=document.getElementById("posture-bar"),this.remnantLabel=document.getElementById("remnant"),this.lostRemnantLabel=document.getElementById("lost-remnant"),this.bossContainer=document.getElementById("boss-container"),this.bossName=document.getElementById("boss-name"),this.bossHealthBar=document.getElementById("boss-health-bar"),this.bossPostureBar=document.getElementById("boss-posture-bar"),this.bossPhase=document.getElementById("boss-phase"),this.enemyManager=null,this._createDamageVignette(),this.damageVignetteOpacity=0,this.staminaWarningActive=!1}_createDamageVignette(){this.damageVignette=document.createElement("div"),this.damageVignette.id="damage-vignette",this.damageVignette.style.cssText=`
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
    `,document.body.appendChild(this.hitFlash)}flashDamage(t=.6){this.damageVignetteOpacity=Math.min(1,t),this.damageVignette.style.opacity=this.damageVignetteOpacity,this.hitFlash.style.opacity=Math.min(.5,t*.8),setTimeout(()=>{this.damageVignette.style.opacity=this.damageVignetteOpacity*.5,this.hitFlash.style.opacity=0},80),setTimeout(()=>{this.damageVignette.style.opacity=0},250)}flashStaminaDepleted(){this.staminaWarningActive||(this.staminaWarningActive=!0,this.staminaBar&&(this.staminaBar.style.background="linear-gradient(90deg, #ffaa00, #ff6600)",this.staminaBar.style.boxShadow="0 0 10px #ff6600",setTimeout(()=>{this.staminaBar.style.background="",this.staminaBar.style.boxShadow="",this.staminaWarningActive=!1},300)))}setEnemyManager(t){this.enemyManager=t}update(){this.healthBar&&(this.healthBar.style.width=`${this.gm.health/this.gm.maxHealth*100}%`),this.staminaBar&&(this.staminaBar.style.width=`${this.gm.stamina/this.gm.maxStamina*100}%`),this.postureBar&&(this.postureBar.style.width=`${this.gm.posture/this.gm.maxPosture*100}%`),this.remnantLabel&&(this.remnantLabel.textContent=`Remnant: ${this.gm.remnant}`),this.lostRemnantLabel&&(this.gm.bloodstain&&this.gm.heldRemnant>0?(this.lostRemnantLabel.style.display="block",this.lostRemnantLabel.textContent=`Lost: ${this.gm.heldRemnant} (recover at bloodstain)`):this.lostRemnantLabel.style.display="none"),this._updateBossUI()}_updateBossUI(){if(!this.enemyManager||!this.bossContainer)return;const t=this.enemyManager.getCryptLord(),e=this.enemyManager.getBoss();let i=null,n=!1;if(t&&t.bossActive&&!t.isDead?(i=t,n=!0):e&&e.isActive&&!e.isDead&&(i=e),!i){this.bossContainer.style.display="none";return}if(this.bossContainer.style.display="block",this.bossName&&(this.bossName.textContent=n?i.config.name:i.name),this.bossHealthBar){const s=i.health/i.maxHealth*100;this.bossHealthBar.style.width=`${s}%`,n?(i.bossPhase||1)===2?this.bossHealthBar.style.background="linear-gradient(90deg, #8844cc, #aa66ff)":this.bossHealthBar.style.background="linear-gradient(90deg, #882222, #cc4444)":i.phase===2?this.bossHealthBar.style.background="linear-gradient(90deg, #ff4400, #ff6622)":this.bossHealthBar.style.background="linear-gradient(90deg, #cc2222, #ff4444)",s<=50&&s>0?this.bossHealthBar.classList.add("phase-two"):this.bossHealthBar.classList.remove("phase-two")}if(this.bossPostureBar){const s=i.posture/i.maxPosture*100;this.bossPostureBar.style.width=`${s}%`}if(this.bossPhase){const s=n?i.bossPhase||1:i.phase;this.bossPhase.textContent=s===2?"PHASE 2":"",this.bossPhase.style.color=s===2?n?"#aa66ff":"#ff4400":"#ffcc00"}}}class Vv{constructor(t,e,i){this.gm=t,this.input=e,this.player=i,this.isOpen=!1,this.selectedTrack=0,this.tracks=["strength","vitality","stamina","spirit"],this._createUI(),window.addEventListener("keydown",n=>this._handleKey(n))}_createUI(){if(this.container=document.getElementById("crucible-container"),!this.container){console.warn("CrucibleUI: #crucible-container not found in HTML");return}this.promptEl=document.getElementById("crucible-prompt"),this.menuEl=document.getElementById("crucible-menu"),this.trackEls=this.tracks.map(t=>document.getElementById(`track-${t}`)),this.remnantEl=document.getElementById("crucible-remnant")}update(){if(!this.container)return;const t=this.gm.isNearBonfire(),e=this.gm.isDead;this.isOpen?(!t||e||this.input.keys.Escape)&&this._close():t&&!e?(this._showPrompt(!0),this.input.interact&&this._open()):this._showPrompt(!1),this.isOpen&&this._updateMenu()}_showPrompt(t){this.promptEl&&(this.promptEl.style.display=t?"block":"none")}_open(){this.isOpen=!0,this._showPrompt(!1),this.menuEl&&(this.menuEl.style.display="block"),document.pointerLockElement&&document.exitPointerLock()}_close(){this.isOpen=!1,this.menuEl&&(this.menuEl.style.display="none")}_handleKey(t){if(this.isOpen)switch(t.code){case"ArrowUp":case"KeyW":t.preventDefault(),this.selectedTrack=(this.selectedTrack-1+this.tracks.length)%this.tracks.length;break;case"ArrowDown":case"KeyS":t.preventDefault(),this.selectedTrack=(this.selectedTrack+1)%this.tracks.length;break;case"Enter":case"KeyF":t.preventDefault(),this._purchaseSelected();break;case"Escape":case"KeyE":t.preventDefault(),this._close();break}}_purchaseSelected(){const t=this.tracks[this.selectedTrack],e=this.gm.getTrackInfo(t);e.maxed||!e.canAfford||this.gm.infuse(t)&&(this.gm.applyInfusionBonuses(),this._applyVisualEffect(t))}_applyVisualEffect(t){if(!this.player)return;const e=this.gm.infusions[t],n=1+this.gm.getTotalDepth()*.01;switch(this.player.mesh.scale.setScalar(n),t){case"strength":this._addGlow(this.player.body,16729156,e*.1);break;case"vitality":this._addGlow(this.player.body,4521796,e*.1);break;case"stamina":this._addGlow(this.player.body,16777028,e*.1);break;case"spirit":this._addGlow(this.player.visor,4491519,e*.3);break}}_addGlow(t,e,i){if(!t||!t.material)return;const n=t.material.emissive?t.material.emissive.getHex():0,s=this._blendColors(n,e,.5);t.material.emissive.setHex(s),t.material.emissiveIntensity=Math.min(2,(t.material.emissiveIntensity||0)+i)}_blendColors(t,e,i){const n=t>>16&255,s=t>>8&255,r=t&255,a=e>>16&255,c=e>>8&255,l=e&255,h=Math.round(n+(a-n)*i),u=Math.round(s+(c-s)*i),d=Math.round(r+(l-r)*i);return h<<16|u<<8|d}_updateMenu(){this.remnantEl&&(this.remnantEl.textContent=`Remnant: ${this.gm.remnant}`),this.tracks.forEach((t,e)=>{const i=this.trackEls[e];if(!i)return;const n=this.gm.getTrackInfo(t),s=e===this.selectedTrack;i.classList.toggle("selected",s),i.classList.toggle("maxed",n.maxed),i.classList.toggle("affordable",n.canAfford&&!n.maxed);const r=i.querySelector(".track-name"),a=i.querySelector(".track-level"),c=i.querySelector(".track-cost"),l=i.querySelector(".track-bonus");r&&(r.textContent=n.name),a&&(a.textContent=`Lv. ${n.level}/${this.gm.MAX_TRACK_DEPTH}`),c&&(c.textContent=n.maxed?"MAX":`Cost: ${n.cost}`),l&&(l.textContent=n.bonus)})}}class Wv{constructor(t,e,i){this.camera=t,this.target=e,this.input=i,this.distance=6,this.minDistance=3,this.maxDistance=12,this.height=2.5,this.sensitivity=.002,this.yaw=0,this.pitch=.3,this.minPitch=-.5,this.maxPitch=1.2,this.smoothing=8,this.currentPos=t.position.clone(),this.lockOnTarget=null,this.lockOnYaw=0,this.lockOnTransition=0,this.lockOnTransitionSpeed=5,this.shakeIntensity=0,this.shakeDuration=0,this.shakeTimer=0,this.shakeOffset=new b,this.shakeDecay=.92}shake(t=.3,e=.15){this.shakeIntensity=Math.min(this.shakeIntensity+t,1),this.shakeDuration=Math.max(this.shakeDuration,e),this.shakeTimer=0}shakeLight(){this.shake(.15,.1)}shakeMedium(){this.shake(.35,.15)}shakeHeavy(){this.shake(.5,.2)}update(t){const e=this.input.getMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch+e.y*this.sensitivity));const i=this.target.position.clone();if(i.y+=this.height,this.lockOnTarget&&this.lockOnTarget.mesh){const h=this.lockOnTarget.mesh.position,u=this.target.position.distanceTo(h);if(this.lockOnTarget.isDead||u>25)this.lockOnTarget=null,this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);else{const d=new b().subVectors(h,i);d.y=0,this.lockOnYaw=Math.atan2(d.x,d.z)+Math.PI,this.lockOnTransition=Math.min(1,this.lockOnTransition+this.lockOnTransitionSpeed*t)}}else this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);let n=this.yaw;if(this.lockOnTransition>0){let h=this.lockOnYaw-this.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;n=this.yaw+h*this.lockOnTransition}const s=Math.sin(n)*this.distance*Math.cos(this.pitch),r=Math.cos(n)*this.distance*Math.cos(this.pitch),a=this.distance*Math.sin(this.pitch),c=new b(i.x+s,i.y+a,i.z+r);this.currentPos.lerp(c,this.smoothing*t),this._updateShake(t),this.camera.position.copy(this.currentPos),this.camera.position.add(this.shakeOffset);const l=i.clone();if(this.lockOnTarget&&this.lockOnTarget.mesh&&this.lockOnTransition>0){const h=this.lockOnTarget.mesh.position.clone();h.y+=1,l.lerp(h,.35*this.lockOnTransition)}this.camera.lookAt(l)}_updateShake(t){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity),this.shakeIntensity*=this.shakeDecay,this.shakeTimer+=t,this.shakeTimer>=this.shakeDuration&&(this.shakeIntensity=0,this.shakeOffset.set(0,0,0))):this.shakeOffset.set(0,0,0)}setLockOnTarget(t){if(this.lockOnTarget=t,t&&t.mesh){const e=this.target.position.clone();e.y+=this.height;const i=new b().subVectors(t.mesh.position,e);i.y=0,this.lockOnYaw=Math.atan2(i.x,i.z)+Math.PI}}isLockedOn(){return this.lockOnTarget!==null&&this.lockOnTransition>.5}clearLockOn(){this.lockOnTarget=null}getForwardDirection(){return new b(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).normalize()}getRightDirection(){return new b(-Math.cos(this.yaw),0,Math.sin(this.yaw)).normalize()}}class Xv{constructor(t){this.camera=t,this.context=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.initialized=!1,this.masterVolume=.7,this.musicVolume=.4,this.sfxVolume=.8,this.listener=null,this.currentMusic=null,this.musicSource=null,this.soundCooldowns={},this.soundBuffers={}}async init(){if(!this.initialized)try{this.context=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.context.createGain(),this.masterGain.gain.value=this.masterVolume,this.masterGain.connect(this.context.destination),this.musicGain=this.context.createGain(),this.musicGain.gain.value=this.musicVolume,this.musicGain.connect(this.masterGain),this.sfxGain=this.context.createGain(),this.sfxGain.gain.value=this.sfxVolume,this.sfxGain.connect(this.masterGain),this.listener=this.context.listener,await this.generateSoundBuffers(),this.initialized=!0}catch(t){console.warn("[AUDIO] Failed to initialize:",t)}}async generateSoundBuffers(){this.soundBuffers.swordSwing=this.createNoiseBuffer(.15,"highpass",2e3,.3),this.soundBuffers.hitImpact=this.createImpactBuffer(.12,150,.6),this.soundBuffers.criticalHit=this.createImpactBuffer(.15,200,.8),this.soundBuffers.playerDamage=this.createImpactBuffer(.2,80,.5),this.soundBuffers.enemyGrunt1=this.createGruntBuffer(.2,120),this.soundBuffers.enemyGrunt2=this.createGruntBuffer(.25,100),this.soundBuffers.enemyGrunt3=this.createGruntBuffer(.18,140),this.soundBuffers.dodge=this.createNoiseBuffer(.2,"bandpass",800,.25),this.soundBuffers.footstepStone=this.createFootstepBuffer(.08,"stone"),this.soundBuffers.footstepMetal=this.createFootstepBuffer(.1,"metal"),this.soundBuffers.death=this.createDeathBuffer(.8),this.soundBuffers.postureBreak=this.createPostureBreakBuffer(.3),this.soundBuffers.itemPickup=this.createChimeBuffer(.3,[523,659,784]),this.soundBuffers.doorUnlock=this.createChimeBuffer(.4,[392,494,587]),this.soundBuffers.menuSelect=this.createChimeBuffer(.15,[880]),this.soundBuffers.menuConfirm=this.createChimeBuffer(.2,[523,659]),this.soundBuffers.bossRoar=this.createRoarBuffer(.6),this.soundBuffers.staminaDepleted=this.createStaminaDepletedBuffer(.15)}createNoiseBuffer(t,e,i,n){const s=this.context.sampleRate,r=s*t,a=this.context.createBuffer(1,r,s),c=a.getChannelData(0);for(let l=0;l<r;l++){const h=l/r,u=Math.sin(h*Math.PI);c[l]=(Math.random()*2-1)*u*n}return{buffer:a,filterType:e,filterFreq:i}}createImpactBuffer(t,e,i){const n=this.context.sampleRate,s=n*t,r=this.context.createBuffer(1,s,n),a=r.getChannelData(0);for(let c=0;c<s;c++){const l=c/s,h=Math.exp(-l*10),u=Math.sin(2*Math.PI*e*l*(1-l*.5)),d=(Math.random()*2-1)*.3;a[c]=(u+d)*h*i}return{buffer:r}}createGruntBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),r=s.getChannelData(0);for(let a=0;a<n;a++){const c=a/n,l=Math.sin(c*Math.PI)*Math.exp(-c*3),h=Math.sin(2*Math.PI*e*a/i),u=Math.sin(2*Math.PI*e*2.5*a/i)*.5,d=Math.sin(2*Math.PI*e*4*a/i)*.25,f=(Math.random()*2-1)*.2;r[a]=(h+u+d+f)*l*.4}return{buffer:s}}createFootstepBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),r=s.getChannelData(0),a=e==="metal"?400:200,c=e==="metal"?.6:.4;for(let l=0;l<n;l++){const h=l/n,u=Math.exp(-h*20),d=Math.sin(2*Math.PI*a*h),f=(Math.random()*2-1)*c;r[l]=(d*.5+f)*u*.3}return{buffer:s}}createDeathBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let r=0;r<i;r++){const a=r/i,c=Math.exp(-a*2)*(1-a),l=150*(1-a*.5),h=Math.sin(2*Math.PI*l*r/e),u=Math.tanh(h*3),d=(Math.random()*2-1)*.3*(1-a);s[r]=(u+d)*c*.5}return{buffer:n}}createPostureBreakBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let r=0;r<i;r++){const a=r/i,c=Math.exp(-a*5),l=Math.sin(2*Math.PI*800*r/e),h=Math.sin(2*Math.PI*1200*r/e),u=(Math.random()*2-1)*.5;s[r]=(l*.3+h*.2+u)*c*.4}return{buffer:n}}createChimeBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),r=s.getChannelData(0);for(let a=0;a<n;a++){const c=a/n,l=Math.exp(-c*4);let h=0;e.forEach((u,d)=>{const f=d*.03*i;if(a>f){const g=(a-f)/i;h+=Math.sin(2*Math.PI*u*g)/e.length}}),r[a]=h*l*.3}return{buffer:s}}createStaminaDepletedBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let r=0;r<i;r++){const a=r/i,c=Math.exp(-a*8)*Math.sin(a*Math.PI*2),l=(Math.random()*2-1)*.6,h=Math.sin(2*Math.PI*200*r/e)*.3;s[r]=(l+h)*Math.abs(c)*.25}return{buffer:n}}createRoarBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let r=0;r<i;r++){const a=r/i;let c;a<.1?c=a/.1:a<.7?c=1:c=(1-a)/.3;const l=Math.sin(2*Math.PI*60*r/e),h=Math.sin(2*Math.PI*65*r/e),u=Math.sin(2*Math.PI*120*r/e)*.5,d=(Math.random()*2-1)*.4,f=Math.tanh((l+h+u+d)*2);s[r]=f*c*.5}return{buffer:n}}play(t,e={}){if(!this.initialized||!this.soundBuffers[t])return;const{position:i=null,volume:n=1,pitch:s=1,cooldown:r=0,variation:a=0}=e,c=performance.now();if(r>0){const f=this.soundCooldowns[t]||0;if(c-f<r)return;this.soundCooldowns[t]=c}const l=this.soundBuffers[t],h=this.context.createBufferSource();h.buffer=l.buffer;const u=s+(Math.random()*2-1)*a;h.playbackRate.value=Math.max(.5,Math.min(2,u));const d=this.context.createGain();if(d.gain.value=n,l.filterType){const f=this.context.createBiquadFilter();f.type=l.filterType,f.frequency.value=l.filterFreq,h.connect(f),f.connect(d)}else h.connect(d);if(i&&this.camera){const f=this.context.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1,f.maxDistance=50,f.rolloffFactor=1,f.setPosition(i.x,i.y,i.z),d.connect(f),f.connect(this.sfxGain)}else d.connect(this.sfxGain);return h.start(),h}playEnemyGrunt(t){const e=["enemyGrunt1","enemyGrunt2","enemyGrunt3"],i=e[Math.floor(Math.random()*e.length)];this.play(i,{position:t,volume:.6,pitch:.9+Math.random()*.2,cooldown:200})}playFootstep(t,e="stone"){const i=e==="metal"?"footstepMetal":"footstepStone";this.play(i,{position:t,volume:.4,pitch:.9+Math.random()*.2,cooldown:150})}updateListener(){if(!this.initialized||!this.camera||!this.listener)return;const t=this.camera.position,e=new b;this.camera.getWorldDirection(e);const i=this.camera.up;this.listener.positionX?(this.listener.positionX.value=t.x,this.listener.positionY.value=t.y,this.listener.positionZ.value=t.z,this.listener.forwardX.value=e.x,this.listener.forwardY.value=e.y,this.listener.forwardZ.value=e.z,this.listener.upX.value=i.x,this.listener.upY.value=i.y,this.listener.upZ.value=i.z):(this.listener.setPosition(t.x,t.y,t.z),this.listener.setOrientation(e.x,e.y,e.z,i.x,i.y,i.z))}startAmbientMusic(){this.initialized&&this.currentMusic!=="ambient"&&(this.stopMusic(),this.currentMusic="ambient",this.createAmbientDrone())}startBossMusic(){this.initialized&&this.currentMusic!=="boss"&&(this.stopMusic(),this.currentMusic="boss",this.createBossMusic())}createAmbientDrone(){const t=this.context.createOscillator();t.type="sine",t.frequency.value=55;const e=this.context.createOscillator();e.type="sine",e.frequency.value=82.5;const i=this.context.createOscillator();i.type="sine",i.frequency.value=.1;const n=this.context.createGain();n.gain.value=2,i.connect(n),n.connect(t.frequency);const s=this.context.createGain();s.gain.value=.15;const r=this.context.createGain();r.gain.value=.1,t.connect(s),e.connect(r),s.connect(this.musicGain),r.connect(this.musicGain),t.start(),e.start(),i.start(),this.musicSource={oscs:[t,e,i]}}createBossMusic(){const t=this.context.createOscillator();t.type="sawtooth",t.frequency.value=55;const e=this.context.createWaveShaper();e.curve=this.makeDistortionCurve(20);const i=this.context.createOscillator();i.type="square",i.frequency.value=2;const n=this.context.createGain();n.gain.value=.3;const s=this.context.createGain();s.gain.value=.2,i.connect(n),n.connect(s.gain),t.connect(e),e.connect(s),s.connect(this.musicGain),t.start(),i.start(),this.musicSource={oscs:[t,i]}}makeDistortionCurve(t){const i=new Float32Array(44100),n=Math.PI/180;for(let s=0;s<44100;++s){const r=s*2/44100-1;i[s]=(3+t)*r*20*n/(Math.PI+t*Math.abs(r))}return i}stopMusic(){this.musicSource&&this.musicSource.oscs&&this.musicSource.oscs.forEach(t=>{try{t.stop()}catch{}}),this.musicSource=null,this.currentMusic=null}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&(this.masterGain.gain.value=this.masterVolume)}setMusicVolume(t){this.musicVolume=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}resume(){this.context&&this.context.state==="suspended"&&this.context.resume()}}class qv{constructor(t){this.scene=t,this.particles=[],this.slashTrails=[],this.embers=[],this.dustMotes=[],this.sparkPool=[],this.bloodPool=[],this.wispPool=[],this.ringPool=[],this.POOL_SIZES={spark:60,blood:40,wisp:20,ring:5},this._initSharedAssets(),this._initPools(),this._initEmbers(),this._initDustMotes()}_initSharedAssets(){this.sparkGeo=new ye;const t=new Float32Array([0,.05,0,-.02,0,0,0,-.05,0,.02,0,0,0,.05,0,0,0,.02,0,-.05,0,0,0,-.02]);this.sparkGeo.setAttribute("position",new He(t,3)),this.bloodGeo=new zc(.06,0),this.emberGeo=new Me(.02,4,4),this.wispGeo=new Me(.1,8,8),this.playerWispGeo=new Me(.15,8,8),this.mistGeo=new Me(.2,6,6),this.sparkMat=new Zt({color:16755268,transparent:!0,opacity:1,side:ue}),this.critSparkMat=new Zt({color:16777096,transparent:!0,opacity:1,side:ue}),this.bloodMat=new Zt({color:8912930,transparent:!0,opacity:.9}),this.emberMat=new Zt({color:16729088,transparent:!0,opacity:.7}),this.wispMat=new Zt({color:8956671,transparent:!0,opacity:.8,blending:Yi}),this.playerSoulMat=new Zt({color:8965375,transparent:!0,opacity:.9,blending:Yi}),this.deathMistMat=new Zt({color:4456465,transparent:!0,opacity:.7}),this.slashMat=new Zt({color:6719743,transparent:!0,opacity:.6,side:ue,blending:Yi,depthWrite:!1}),this.heavySlashMat=new Zt({color:16737860,transparent:!0,opacity:.7,side:ue,blending:Yi,depthWrite:!1})}_initPools(){for(let t=0;t<this.POOL_SIZES.spark;t++){const e=new Y(this.sparkGeo,this.sparkMat);e.visible=!1,e.userData.inPool=!0,this.scene.add(e),this.sparkPool.push(e)}for(let t=0;t<this.POOL_SIZES.blood;t++){const e=new Y(this.bloodGeo,this.bloodMat);e.visible=!1,e.userData.inPool=!0,this.scene.add(e),this.bloodPool.push(e)}for(let t=0;t<this.POOL_SIZES.wisp;t++){const e=new Y(this.wispGeo,this.wispMat);e.visible=!1,e.userData.inPool=!0,this.scene.add(e),this.wispPool.push(e)}for(let t=0;t<this.POOL_SIZES.ring;t++){const e=new ys(.1,.3,32),i=new Zt({color:16763972,transparent:!0,opacity:.8,side:ue,blending:Yi,depthWrite:!1}),n=new Y(e,i);n.visible=!1,n.userData.inPool=!0,this.scene.add(n),this.ringPool.push(n)}console.log("[ParticleManager] Pools initialized:",{sparks:this.sparkPool.length,blood:this.bloodPool.length,wisps:this.wispPool.length,rings:this.ringPool.length})}_getFromPool(t){for(const e of t)if(e.userData.inPool)return e.userData.inPool=!1,e.visible=!0,e.scale.set(1,1,1),e.rotation.set(0,0,0),e;return null}_returnToPool(t){t.visible=!1,t.userData.inPool=!0}_initEmbers(){for(let e=0;e<30;e++)this._spawnEmber()}_spawnEmber(){const t=new Y(this.emberGeo,this.emberMat);t.position.set((Math.random()-.5)*60,Math.random()*.5,(Math.random()-.5)*100-20),this.scene.add(t),this.embers.push({mesh:t,velocity:new b((Math.random()-.5)*.3,.3+Math.random()*.5,(Math.random()-.5)*.3),life:Math.random()*10,maxLife:8+Math.random()*6})}_initDustMotes(){this.dustGeo=new $e(.03,.03),this.dustMat=new Zt({color:16777198,transparent:!0,opacity:.4,blending:Yi,depthWrite:!1,side:ue});for(let e=0;e<80;e++){const i=new Y(this.dustGeo,this.dustMat);i.position.set((Math.random()-.5)*40,.5+Math.random()*5,(Math.random()-.5)*80-20),this.scene.add(i),this.dustMotes.push({mesh:i,baseY:i.position.y,driftSpeed:.1+Math.random()*.2,driftAmplitude:.3+Math.random()*.5,phase:Math.random()*Math.PI*2,rotateSpeed:(Math.random()-.5)*2})}}spawnSlashTrail(t,e,i=!1){const n=i?1.8:1.4,s=i?Math.PI*.7:Math.PI*.5,r=12,a=i?.15:.1,c=new pu;c.moveTo(0,0);for(let f=0;f<=r;f++){const g=-s/2+s*f/r,_=Math.cos(g)*n,m=Math.sin(g)*n;f===0?c.moveTo(_,m):c.lineTo(_,m)}for(let f=r;f>=0;f--){const g=-s/2+s*f/r,_=Math.cos(g)*(n-a),m=Math.sin(g)*(n-a);c.lineTo(_,m)}c.closePath();const l=new kc(c),h=i?this.heavySlashMat:this.slashMat,u=new Y(l,h);u.position.copy(t),u.position.y+=1.2;const d=Math.atan2(e.x,e.z);u.rotation.y=d,u.rotation.x=i?-.5:.2,this.scene.add(u),this.slashTrails.push({mesh:u,life:0,maxLife:i?.35:.25,scaleStart:.3,scaleEnd:1,ownedGeometry:l})}spawnHitSparks(t,e=8,i=!1){const n=i?Math.min(e*2,16):Math.min(e,10);for(let s=0;s<n;s++){const r=this._getFromPool(this.sparkPool);if(!r)continue;r.userData.isCritical=i,r.position.copy(t),r.position.y+=.8+Math.random()*.4;const a=Math.random()*Math.PI*2,c=2+Math.random()*4,l=2+Math.random()*3;this.particles.push({mesh:r,velocity:new b(Math.cos(a)*c,l,Math.sin(a)*c),gravity:-15,life:0,maxLife:.3+Math.random()*.2,type:"spark",pool:this.sparkPool})}}spawnBlood(t,e,i=6){const n=Math.min(i,10);for(let s=0;s<n;s++){const r=this._getFromPool(this.bloodPool);if(!r)continue;r.position.copy(t),r.position.y+=.8+Math.random()*.6;const c=Math.atan2(e.x,e.z)+(Math.random()-.5)*Math.PI*.6,l=3+Math.random()*3,h=1+Math.random()*3;this.particles.push({mesh:r,velocity:new b(Math.sin(c)*l,h,Math.cos(c)*l),gravity:-18,life:0,maxLife:.6+Math.random()*.4,type:"blood",scale:.8+Math.random()*.4,pool:this.bloodPool})}}spawnPostureBreak(t){this.spawnHitSparks(t,12,!0);const e=this._getFromPool(this.ringPool);e&&(e.position.copy(t),e.position.y+=1,e.rotation.x=-Math.PI/2,e.scale.set(1,1,1),this.particles.push({mesh:e,velocity:new b(0,0,0),gravity:0,life:0,maxLife:.5,type:"ring",expandRate:8,pool:this.ringPool}))}spawnBlockSparks(t){for(let i=0;i<5;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.position.copy(t),n.position.y+=1;const s=Math.random()*Math.PI*2,r=1+Math.random()*2;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*r,1+Math.random()*2,Math.sin(s)*r),gravity:-10,life:0,maxLife:.25,type:"spark",isBlock:!0,pool:this.sparkPool})}}spawnDeathBurst(t){for(let e=0;e<6;e++){const i=this._getFromPool(this.bloodPool);if(!i)continue;const n=e/6*Math.PI*2;i.position.copy(t),i.position.y+=1,this.particles.push({mesh:i,velocity:new b(Math.cos(n)*4,2+Math.random()*3,Math.sin(n)*4),gravity:-15,life:0,maxLife:.8,type:"blood",scale:1.2,pool:this.bloodPool})}for(let e=0;e<3;e++){const i=this._getFromPool(this.wispPool);i&&(i.position.copy(t),i.position.y+=.5+Math.random()*.5,i.position.x+=(Math.random()-.5)*.5,i.position.z+=(Math.random()-.5)*.5,this.particles.push({mesh:i,velocity:new b((Math.random()-.5)*.5,2+Math.random()*1,(Math.random()-.5)*.5),gravity:0,life:0,maxLife:1.5+Math.random()*.5,type:"wisp",pool:this.wispPool}))}}update(t){this._updateDeathEffects(t);for(let i=this.particles.length-1;i>=0;i--){const n=this.particles[i];if(n.life+=t,n.velocity.y+=n.gravity*t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.type==="ring"){const r=1+n.expandRate*n.life;n.mesh.scale.set(r,r,1)}if(n.type==="playerSoul"&&(n.mesh.position.x+=Math.sin(n.life*2)*t*.5,n.mesh.position.z+=Math.cos(n.life*2)*t*.5),n.type==="deathMist"){const r=1+n.life*.5;n.mesh.scale.setScalar(r)}const s=1-n.life/n.maxLife;if(n.scale){const r=n.scale*s;n.mesh.scale.setScalar(Math.max(.1,r))}n.type==="blood"&&n.mesh.position.y<.05&&(n.mesh.position.y=.05,n.velocity.x*=.5,n.velocity.z*=.5,n.velocity.y=0),n.type==="spark"&&(n.mesh.rotation.x+=t*10,n.mesh.rotation.z+=t*8),n.life>=n.maxLife&&(n.pool?this._returnToPool(n.mesh):(this.scene.remove(n.mesh),n.mesh.geometry?.dispose?.()),this.particles.splice(i,1))}for(let i=this.slashTrails.length-1;i>=0;i--){const n=this.slashTrails[i];n.life+=t;const s=n.life/n.maxLife,r=ee.lerp(n.scaleStart,n.scaleEnd,s);n.mesh.scale.setScalar(r),n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.ownedGeometry?.dispose(),this.slashTrails.splice(i,1))}for(let i=this.embers.length-1;i>=0;i--){const n=this.embers[i];n.life+=t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.mesh.position.x+=Math.sin(n.life*2)*.01,n.mesh.position.z+=Math.cos(n.life*1.5)*.01,n.life>=n.maxLife&&(n.life=0,n.mesh.position.set((Math.random()-.5)*60,Math.random()*.3,(Math.random()-.5)*100-20),n.maxLife=8+Math.random()*6)}const e=Date.now()*.001;for(const i of this.dustMotes)i.mesh.position.y=i.baseY+Math.sin(e*i.driftSpeed+i.phase)*i.driftAmplitude,i.mesh.position.x+=Math.sin(e*.5+i.phase)*.002,i.mesh.position.z+=Math.cos(e*.3+i.phase)*.002,i.mesh.rotation.z+=i.rotateSpeed*t}spawnPlayerDeathEffect(t,e){for(let i=0;i<8;i++){const n=this._getFromPool(this.wispPool);n&&(n.position.copy(t),n.position.y+=.5+Math.random()*.8,n.position.x+=(Math.random()-.5)*.6,n.position.z+=(Math.random()-.5)*.6,this.particles.push({mesh:n,velocity:new b((Math.random()-.5)*1.5,3+Math.random()*2,(Math.random()-.5)*1.5),gravity:-.5,life:0,maxLife:2.5+Math.random()*1.5,type:"playerSoul",pool:this.wispPool}))}for(let i=0;i<10;i++){const n=this._getFromPool(this.bloodPool);if(!n)continue;n.position.copy(t),n.position.y+=Math.random()*1.5;const s=Math.random()*Math.PI*2,r=1+Math.random()*2;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*r,.5+Math.random()*1,Math.sin(s)*r),gravity:-1,life:0,maxLife:2+Math.random()*1,type:"deathMist",scale:1,pool:this.bloodPool})}this._createDeathVignette(e),e&&this._triggerCameraShake(e)}_createDeathVignette(t){const e=new $e(2,2),i=new Ge({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uIntensity:{value:0}},vertexShader:`
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
      `}),n=new Y(e,i);n.frustumCulled=!1,n.renderOrder=999,this.scene.add(n),this.deathVignette={mesh:n,material:i,life:0,fadeInDuration:.5,holdDuration:2.5,fadeOutDuration:.5}}_triggerCameraShake(t){this.cameraShake||(this.cameraShake={originalPosition:t.position.clone(),intensity:.3,decay:.95,duration:.8,elapsed:0,camera:t})}_updateDeathEffects(t){if(this.deathVignette){const e=this.deathVignette;e.life+=t,e.material.uniforms.uTime.value=e.life;const i=e.fadeInDuration+e.holdDuration+e.fadeOutDuration;if(e.life<e.fadeInDuration)e.material.uniforms.uIntensity.value=e.life/e.fadeInDuration;else if(e.life<e.fadeInDuration+e.holdDuration)e.material.uniforms.uIntensity.value=1;else if(e.life<i){const n=(e.life-e.fadeInDuration-e.holdDuration)/e.fadeOutDuration;e.material.uniforms.uIntensity.value=1-n}else this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose(),this.deathVignette=null}if(this.cameraShake){const e=this.cameraShake;if(e.elapsed+=t,e.elapsed<e.duration){const i=1-e.elapsed/e.duration,n=e.intensity*i;e.camera.position.x+=(Math.random()-.5)*n,e.camera.position.y+=(Math.random()-.5)*n*.5,e.camera.position.z+=(Math.random()-.5)*n}else this.cameraShake=null}}dispose(){this.particles.forEach(t=>{t.pool?this._returnToPool(t.mesh):(this.scene.remove(t.mesh),t.mesh.geometry?.dispose?.())}),this.particles=[],this.slashTrails.forEach(t=>{this.scene.remove(t.mesh),t.ownedGeometry?.dispose()}),this.slashTrails=[],this.embers.forEach(t=>{this.scene.remove(t.mesh)}),this.embers=[],this.dustMotes.forEach(t=>{this.scene.remove(t.mesh)}),this.dustMotes=[],[...this.sparkPool,...this.bloodPool,...this.wispPool,...this.ringPool].forEach(t=>{this.scene.remove(t)}),this.sparkPool=[],this.bloodPool=[],this.wispPool=[],this.ringPool=[],this.sparkGeo?.dispose(),this.bloodGeo?.dispose(),this.emberGeo?.dispose(),this.wispGeo?.dispose(),this.playerWispGeo?.dispose(),this.mistGeo?.dispose(),this.dustGeo?.dispose(),this.sparkMat?.dispose(),this.critSparkMat?.dispose(),this.bloodMat?.dispose(),this.emberMat?.dispose(),this.wispMat?.dispose(),this.playerSoulMat?.dispose(),this.deathMistMat?.dispose(),this.slashMat?.dispose(),this.heavySlashMat?.dispose(),this.dustMat?.dispose()}}const Yv={uniforms:{tDiffuse:{value:null},brightness:{value:.05},contrast:{value:1.1},saturation:{value:1.1},vignetteIntensity:{value:.2},vignetteRadius:{value:.9}},vertexShader:`
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
  `},bi=new Lx({antialias:!0,preserveDrawingBuffer:!0});bi.setSize(window.innerWidth,window.innerHeight);bi.setPixelRatio(Math.min(window.devicePixelRatio,2));bi.shadowMap.enabled=!0;bi.shadowMap.type=Eh;bi.toneMapping=xc;bi.toneMappingExposure=2;bi.outputColorSpace=Te;document.body.appendChild(bi.domElement);const tn=new pf;tn.fog=null;tn.background=new vt(8900331);const pn=new je(60,window.innerWidth/window.innerHeight,.1,200);pn.position.set(0,5,15);pn.lookAt(0,0,0);const Kv=new Qe(window.innerWidth*Math.min(window.devicePixelRatio,2),window.innerHeight*Math.min(window.devicePixelRatio,2),{minFilter:Re,magFilter:Re,format:ai,colorSpace:Te}),mr=new Bx(bi,Kv),jv=new kx(tn,pn);mr.addPass(jv);const Ou=new vs(new nt(window.innerWidth,window.innerHeight),.15,.2,.95);mr.addPass(Ou);const Zv=new Du(Yv);mr.addPass(Zv);const $v=new bu,Le=new Gx,In=new Gv(bi.domElement),un=new Xv(pn),lr=new qv(tn),Zs=new Hv(Le);let Ah=!1;const Mo=async()=>{Ah||(await un.init(),un.startAmbientMusic(),Ah=!0,document.removeEventListener("click",Mo),document.removeEventListener("keydown",Mo))};document.addEventListener("click",Mo);document.addEventListener("keydown",Mo);const ze=new zv(tn),Ci=new Cv(tn,Le);Ci.initItems(ze.getItemSpawns());const Ce=new Ev(tn,Le,In);Ce.setWorld(ze);const $s=new Wv(pn,Ce.mesh,In);Ce.setCameraController($s);const Wc=new Dv(tn,Le,Ce,ze,lr);Le.setCheckpoint(ze.bonfirePosition.clone());Le.setEntities(Ce,Wc,tn,pn);Le.bonfirePosition=ze.bonfirePosition;Le.audioManager=un;Le.particleManager=lr;Le.hud=Zs;Le.cameraController=$s;Le.itemManager=Ci;Zs.setEnemyManager(Wc);const $r=new Vv(Le,In,Ce);window.addEventListener("resize",()=>{pn.aspect=window.innerWidth/window.innerHeight,pn.updateProjectionMatrix(),bi.setSize(window.innerWidth,window.innerHeight),mr.setSize(window.innerWidth,window.innerHeight),Ou.resolution.set(window.innerWidth,window.innerHeight)});function Fu(){requestAnimationFrame(Fu);const o=Math.min($v.getDelta(),.05);if(In.update(o),Le.updateHitstop(o))lr.update(o*.1);else if(Ce.update(o),Wc.update(o,Ce),lr.update(o),ze.bossArena&&ze.bossArena.active){const f=ze.updateBossArena(o,Ce.mesh.position);f>0&&!Ce.isInvincible&&(Le.takeDamage(f,"magical",0,!1),Ce.flashDamage(),Zs&&Zs.flashDamage(.5),$s&&$s.shakeLight(),Ci.showNotification("Ritual Circle burns!","damage"))}if($s.update(o),Ci.update(Ce.mesh.position),Zs.update(),$r.update(),Le.update(o),un.updateListener(),Le.collectBloodstain(),Ce.activeAttack){const f=ze.checkHiddenWallHit(Ce.activeAttack.position,Ce.activeAttack.range);f&&!f.revealed&&ze.revealHiddenWall(f.id)}const e=ze.getNearbyDoor(Ce.mesh.position),i=document.getElementById("door-prompt"),n=document.getElementById("door-name");e&&!$r.isOpen?(i.style.display="block",n.textContent=e.name,Ci.hasKey(e.id)?(i.classList.remove("locked"),In.interact&&(ze.tryOpenDoor(e.id,Ci),Ci.showNotification(`${e.name} Opened`))):(i.classList.add("locked"),n.textContent=`${e.name} (Locked)`)):i.style.display="none";const s=ze.getNearbyLadder(Ce.mesh.position),r=document.getElementById("ladder-prompt"),a=document.getElementById("ladder-name");s&&!$r.isOpen?(r.style.display="block",a.textContent=s.id==="shortcut-ladder"?"to Cathedral":"Ladder",In.interact&&s.id==="shortcut-ladder"&&(Ce.mesh.position.set(-15,0,-12),Ce.velocity.set(0,0,0),Ci.showNotification("Climbed to Cathedral"),un.playSound("footstep"))):r.style.display="none";const c=ze.getNearbyShortcut(Ce.mesh.position),l=document.getElementById("shortcut-prompt"),h=document.getElementById("shortcut-action"),u=document.getElementById("shortcut-name");c&&!$r.isOpen?(l.style.display="block",h.textContent="remove bar from",u.textContent="Shortcut Door",In.interact&&ze.unlockShortcut(c.id)&&(Ci.showNotification("Shortcut Unlocked — Path to Cathedral opened!"),un.playSound("hit"))):l.style.display="none";const d=ze.checkInsideIllusoryWall(Ce.mesh.position);if(d&&!d.revealed){ze.revealHiddenWall(d.id);const f=document.getElementById("illusory-notification");f.style.display="block",setTimeout(()=>{f.style.display="none"},2500),un.playSound("hit")}if(Le.bloodstainMesh){const f=.6+Math.sin(Date.now()*.005)*.3;Le.bloodstainMesh.material.opacity=f}mr.render()}Fu();window.gameManager=Le;window.player=Ce;window.world=ze;window.itemManager=Ci;window.audioManager=un;window.particleManager=lr;
