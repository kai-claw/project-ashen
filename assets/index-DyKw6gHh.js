(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const dc="182",Hu=0,jc=1,Vu=2,Yr=1,Th=2,Os=3,Zi=0,je=1,me=2,Ri=0,es=1,Xi=2,Zc=3,Jc=4,Wu=5,bn=100,Xu=101,qu=102,Yu=103,Ku=104,ju=200,Zu=201,Ju=202,$u=203,uo=204,fo=205,Qu=206,td=207,ed=208,id=209,nd=210,sd=211,rd=212,ad=213,od=214,po=0,mo=1,go=2,ss=3,_o=4,xo=5,vo=6,yo=7,bh=0,cd=1,ld=2,Pi=0,Ah=1,Eh=2,wh=3,fc=4,Ch=5,Rh=6,Ph=7,$c="attached",hd="detached",Ih=300,Cn=301,rs=302,Mo=303,So=304,ma=306,Ii=1e3,wi=1001,ea=1002,Ie=1003,Dh=1004,Bs=1005,Ee=1006,Kr=1007,Yi=1008,ni=1009,Lh=1010,Nh=1011,js=1012,pc=1013,Di=1014,hi=1015,ri=1016,mc=1017,gc=1018,Zs=1020,Uh=35902,Oh=35899,Bh=1021,Fh=1022,si=1023,Ji=1026,En=1027,_c=1028,xc=1029,as=1030,vc=1031,yc=1033,jr=33776,Zr=33777,Jr=33778,$r=33779,To=35840,bo=35841,Ao=35842,Eo=35843,wo=36196,Co=37492,Ro=37496,Po=37488,Io=37489,Do=37490,Lo=37491,No=37808,Uo=37809,Oo=37810,Bo=37811,Fo=37812,ko=37813,zo=37814,Go=37815,Ho=37816,Vo=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,Ko=36492,jo=36494,Zo=36495,Jo=36283,$o=36284,Qo=36285,tc=36286,kh=2200,zh=2201,ud=2202,Js=2300,$s=2301,Ta=2302,Qn=2400,ts=2401,ia=2402,Mc=2500,dd=2501,fd=0,Gh=1,ec=2,pd=3200,Hh=0,md=1,on="",ye="srgb",Ve="srgb-linear",na="linear",ae="srgb",Ln=7680,Qc=519,gd=512,_d=513,xd=514,Sc=515,vd=516,yd=517,Tc=518,Md=519,ic=35044,tl="300 es",Ci=2e3,sa=2001;function Vh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Sd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Td(){const r=Qs("canvas");return r.style.display="block",r}const el={};function ra(...r){const t="THREE."+r.shift();console.log(t,...r)}function Ct(...r){const t="THREE."+r.shift();console.warn(t,...r)}function It(...r){const t="THREE."+r.shift();console.error(t,...r)}function tr(...r){const t=r.join(" ");t in el||(el[t]=!0,Ct(...r))}function bd(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}class Pn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const zs=Math.PI/180,os=180/Math.PI;function di(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[r&255]+Ge[r>>8&255]+Ge[r>>16&255]+Ge[r>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Vt(r,t,e){return Math.max(t,Math.min(e,r))}function bc(r,t){return(r%t+t)%t}function Ad(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function Ed(r,t,e){return r!==t?(e-r)/(t-r):0}function Gs(r,t,e){return(1-e)*r+e*t}function wd(r,t,e,i){return Gs(r,t,1-Math.exp(-e*i))}function Cd(r,t=1){return t-Math.abs(bc(r,t*2)-t)}function Rd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Pd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Id(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Dd(r,t){return r+Math.random()*(t-r)}function Ld(r){return r*(.5-Math.random())}function Nd(r){r!==void 0&&(il=r);let t=il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ud(r){return r*zs}function Od(r){return r*os}function Bd(r){return(r&r-1)===0&&r!==0}function Fd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zd(r,t,e,i,n){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function _i(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const te={DEG2RAD:zs,RAD2DEG:os,generateUUID:di,clamp:Vt,euclideanModulo:bc,mapLinear:Ad,inverseLerp:Ed,lerp:Gs,damp:wd,pingpong:Cd,smoothstep:Rd,smootherstep:Pd,randInt:Id,randFloat:Dd,randFloatSpread:Ld,seededRandom:Nd,degToRad:Ud,radToDeg:Od,isPowerOfTwo:Bd,ceilPowerOfTwo:Fd,floorPowerOfTwo:kd,setQuaternionFromProperEuler:zd,normalize:oe,denormalize:_i};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xi{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),S=Math.sin(M);p=Math.sin(p*M)/S,o=Math.sin(o*M)/S,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+_*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+_*o;const M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(s/2),d=c(i/2),f=c(n/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-l)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,i=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=n+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ba.copy(this).projectOnVector(t),this.sub(ba)}reflect(t){return this.sub(ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new A,nl=new xi;class Ft{constructor(t,e,i,n,s,a,o,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,c,l)}set(t,e,i,n,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],M=n[1],S=n[4],y=n[7],E=n[2],w=n[5],R=n[8];return s[0]=a*_+o*M+c*E,s[3]=a*m+o*S+c*w,s[6]=a*p+o*y+c*R,s[1]=l*_+h*M+u*E,s[4]=l*m+h*S+u*w,s[7]=l*p+h*y+u*R,s[2]=d*_+f*M+g*E,s[5]=d*m+f*S+g*w,s[8]=d*p+f*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(n*l-h*i)*_,t[2]=(o*i-n*a)*_,t[3]=d*_,t[4]=(h*e-n*c)*_,t[5]=(n*s-o*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-n*l,n*c,-n*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Ft,sl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gd(){const r={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ae&&(n.r=ji(n.r),n.g=ji(n.g),n.b=ji(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(n.r=is(n.r),n.g=is(n.g),n.b=is(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===on?na:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Ve]:{primaries:t,whitePoint:i,transfer:na,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),r}const jt=Gd();function ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Nn;class Hd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Nn===void 0&&(Nn=Qs("canvas")),Nn.width=t.width,Nn.height=t.height;const n=Nn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Nn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ji(e[i]/255)*255):e[i]=ji(e[i]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vd=0;class Ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Ea(n[a].image)):s.push(Ea(n[a]))}else s=Ea(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let Wd=0;const wa=new A;class Le extends Pn{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=wi,n=wi,s=Ee,a=Yi,o=si,c=ni,l=Le.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=di(),this.name="",this.source=new Ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ii:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ii:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Ih;Le.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,n=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,y=(f+1)/2,E=(p+1)/2,w=(h+d)/4,R=(u+_)/4,I=(g+m)/4;return S>y&&S>E?S<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(S),n=w/i,s=R/i):y>E?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=w/n,s=I/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=R/s,n=I/s),this.set(i,n,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xd extends Pn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const n={width:t,height:e,depth:i.depth},s=new Le(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ee,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ac(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends Xd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wh extends Le{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qd extends Le{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fi):fi.fromBufferAttribute(s,a),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pr.copy(i.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),mr.subVectors(this.max,Ss),Un.subVectors(t.a,Ss),On.subVectors(t.b,Ss),Bn.subVectors(t.c,Ss),Qi.subVectors(On,Un),tn.subVectors(Bn,On),mn.subVectors(Un,Bn);let e=[0,-Qi.z,Qi.y,0,-tn.z,tn.y,0,-mn.z,mn.y,Qi.z,0,-Qi.x,tn.z,0,-tn.x,mn.z,0,-mn.x,-Qi.y,Qi.x,0,-tn.y,tn.x,0,-mn.y,mn.x,0];return!Ca(e,Un,On,Bn,mr)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Un,On,Bn,mr))?!1:(gr.crossVectors(Qi,tn),e=[gr.x,gr.y,gr.z],Ca(e,Un,On,Bn,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ki=[new A,new A,new A,new A,new A,new A,new A,new A],fi=new A,pr=new Ni,Un=new A,On=new A,Bn=new A,Qi=new A,tn=new A,mn=new A,Ss=new A,mr=new A,gr=new A,gn=new A;function Ca(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){gn.fromArray(r,s);const o=n.x*Math.abs(gn.x)+n.y*Math.abs(gn.y)+n.z*Math.abs(gn.z),c=t.dot(gn),l=e.dot(gn),h=i.dot(gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Yd=new Ni,Ts=new A,Ra=new A;class Ui{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Yd.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ts,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Ra)),this.expandByPoint(Ts.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const zi=new A,Pa=new A,_r=new A,en=new A,Ia=new A,xr=new A,Da=new A;class ga{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Pa.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),en.copy(this.origin).sub(Pa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(_r),o=en.dot(this.direction),c=-en.dot(_r),l=en.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Pa).addScaledVector(_r,d),f}intersectSphere(t,e){zi.subVectors(t.center,this.origin);const i=zi.dot(this.direction),n=zi.dot(zi)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,i,n,s){Ia.subVectors(e,t),xr.subVectors(i,t),Da.crossVectors(Ia,xr);let a=this.direction.dot(Da),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;en.subVectors(this.origin,t);const c=o*this.direction.dot(xr.crossVectors(en,xr));if(c<0)return null;const l=o*this.direction.dot(Ia.cross(en));if(l<0||c+l>a)return null;const h=-o*en.dot(Da);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(t,e,i,n,s,a,o,c,l,h,u,d,f,g,_,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,c,l,h,u,d,f,g,_,m)}set(t,e,i,n,s,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Fn.setFromMatrixColumn(t,0).length(),s=1/Fn.setFromMatrixColumn(t,1).length(),a=1/Fn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,jd)}lookAt(t,e,i){const n=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),nn.crossVectors(i,ei),nn.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),nn.crossVectors(i,ei)),nn.normalize(),vr.crossVectors(ei,nn),n[0]=nn.x,n[4]=vr.x,n[8]=ei.x,n[1]=nn.y,n[5]=vr.y,n[9]=ei.y,n[2]=nn.z,n[6]=vr.z,n[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],S=i[7],y=i[11],E=i[15],w=n[0],R=n[4],I=n[8],v=n[12],T=n[1],P=n[5],O=n[9],B=n[13],H=n[2],V=n[6],X=n[10],G=n[14],J=n[3],ft=n[7],lt=n[11],pt=n[15];return s[0]=a*w+o*T+c*H+l*J,s[4]=a*R+o*P+c*V+l*ft,s[8]=a*I+o*O+c*X+l*lt,s[12]=a*v+o*B+c*G+l*pt,s[1]=h*w+u*T+d*H+f*J,s[5]=h*R+u*P+d*V+f*ft,s[9]=h*I+u*O+d*X+f*lt,s[13]=h*v+u*B+d*G+f*pt,s[2]=g*w+_*T+m*H+p*J,s[6]=g*R+_*P+m*V+p*ft,s[10]=g*I+_*O+m*X+p*lt,s[14]=g*v+_*B+m*G+p*pt,s[3]=M*w+S*T+y*H+E*J,s[7]=M*R+S*P+y*V+E*ft,s[11]=M*I+S*O+y*X+E*lt,s[15]=M*v+S*B+y*G+E*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],M=c*f-l*d,S=o*f-l*u,y=o*d-c*u,E=a*f-l*h,w=a*d-c*h,R=a*u-o*h;return e*(_*M-m*S+p*y)-i*(g*M-m*E+p*w)+n*(g*S-_*E+p*R)-s*(g*y-_*w+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,S=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,y=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,E=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,w=e*M+i*S+n*y+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=M*R,t[1]=(_*d*s-u*m*s-_*n*f+i*m*f+u*n*p-i*d*p)*R,t[2]=(o*m*s-_*c*s+_*n*l-i*m*l-o*n*p+i*c*p)*R,t[3]=(u*c*s-o*d*s-u*n*l+i*d*l+o*n*f-i*c*f)*R,t[4]=S*R,t[5]=(h*m*s-g*d*s+g*n*f-e*m*f-h*n*p+e*d*p)*R,t[6]=(g*c*s-a*m*s-g*n*l+e*m*l+a*n*p-e*c*p)*R,t[7]=(a*d*s-h*c*s+h*n*l-e*d*l-a*n*f+e*c*f)*R,t[8]=y*R,t[9]=(g*u*s-h*_*s-g*i*f+e*_*f+h*i*p-e*u*p)*R,t[10]=(a*_*s-g*o*s+g*i*l-e*_*l-a*i*p+e*o*p)*R,t[11]=(h*o*s-a*u*s-h*i*l+e*u*l+a*i*f-e*o*f)*R,t[12]=E*R,t[13]=(h*_*n-g*u*n+g*i*d-e*_*d-h*i*m+e*u*m)*R,t[14]=(g*o*n-a*_*n-g*i*c+e*_*c+a*i*m-e*o*m)*R,t[15]=(a*u*n-h*o*n+h*i*c-e*u*c-a*i*d+e*o*d)*R,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,M=c*l,S=c*h,y=c*u,E=i.x,w=i.y,R=i.z;return n[0]=(1-(_+p))*E,n[1]=(f+y)*E,n[2]=(g-S)*E,n[3]=0,n[4]=(f-y)*w,n[5]=(1-(d+p))*w,n[6]=(m+M)*w,n[7]=0,n[8]=(g+S)*R,n[9]=(m-M)*R,n[10]=(1-(d+_))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;if(t.x=n[12],t.y=n[13],t.z=n[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let s=Fn.set(n[0],n[1],n[2]).length();const a=Fn.set(n[4],n[5],n[6]).length(),o=Fn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),pi.copy(this);const l=1/s,h=1/a,u=1/o;return pi.elements[0]*=l,pi.elements[1]*=l,pi.elements[2]*=l,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=u,pi.elements[9]*=u,pi.elements[10]*=u,e.setFromRotationMatrix(pi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=Ci,c=!1){const l=this.elements,h=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Ci)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===sa)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Ci,c=!1){const l=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Ci)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===sa)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Fn=new A,pi=new Ot,Kd=new A(0,0,0),jd=new A(1,1,1),nn=new A,vr=new A,ei=new A,al=new Ot,ol=new xi;class Li{constructor(t=0,e=0,i=0,n=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zd=0;const cl=new A,kn=new xi,Gi=new Ot,yr=new A,bs=new A,Jd=new A,$d=new xi,ll=new A(1,0,0),hl=new A(0,1,0),ul=new A(0,0,1),dl={type:"added"},Qd={type:"removed"},zn={type:"childadded",child:null},La={type:"childremoved",child:null};class _e extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new A,e=new Li,i=new xi,n=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Ft}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.multiply(kn),this}rotateOnWorldAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.premultiply(kn),this}rotateX(t){return this.rotateOnAxis(ll,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ll,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yr.copy(t):yr.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(bs,yr,this.up):Gi.lookAt(yr,bs,this.up),this.quaternion.setFromRotationMatrix(Gi),n&&(Gi.extractRotation(n.matrixWorld),kn.setFromRotationMatrix(Gi),this.quaternion.premultiply(kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),zn.child=t,this.dispatchEvent(zn),zn.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qd),La.child=t,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),zn.child=t,this.dispatchEvent(zn),zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,$d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}_e.DEFAULT_UP=new A(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new A,Hi=new A,Na=new A,Vi=new A,Gn=new A,Hn=new A,fl=new A,Ua=new A,Oa=new A,Ba=new A,Fa=new ge,ka=new ge,za=new ge;class li{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),mi.subVectors(t,e),n.cross(mi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){mi.subVectors(n,e),Hi.subVectors(i,e),Na.subVectors(t,e);const a=mi.dot(mi),o=mi.dot(Hi),c=mi.dot(Na),l=Hi.dot(Hi),h=Hi.dot(Na),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,i,n,s,a,o,c){return this.getBarycoord(t,e,i,n,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vi.x),c.addScaledVector(a,Vi.y),c.addScaledVector(o,Vi.z),c)}static getInterpolatedAttribute(t,e,i,n,s,a){return Fa.setScalar(0),ka.setScalar(0),za.setScalar(0),Fa.fromBufferAttribute(t,e),ka.fromBufferAttribute(t,i),za.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Fa,s.x),a.addScaledVector(ka,s.y),a.addScaledVector(za,s.z),a}static isFrontFacing(t,e,i,n){return mi.subVectors(i,e),Hi.subVectors(t,e),mi.cross(Hi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),mi.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return li.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;Gn.subVectors(n,i),Hn.subVectors(s,i),Ua.subVectors(t,i);const c=Gn.dot(Ua),l=Hn.dot(Ua);if(c<=0&&l<=0)return e.copy(i);Oa.subVectors(t,n);const h=Gn.dot(Oa),u=Hn.dot(Oa);if(h>=0&&u<=h)return e.copy(n);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Gn,a);Ba.subVectors(t,s);const f=Gn.dot(Ba),g=Hn.dot(Ba);if(g>=0&&f<=g)return e.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Hn,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return fl.subVectors(s,n),o=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(fl,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(i).addScaledVector(Gn,a).addScaledVector(Hn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Ga(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=jt.workingColorSpace){if(t=bc(t,1),e=Vt(e,0,1),i=Vt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ga(a,s,t+1/3),this.g=Ga(a,s,t),this.b=Ga(a,s,t-1/3)}return jt.colorSpaceToWorking(this,n),this}setStyle(t,e=ye){function i(s){s!==void 0&&parseFloat(s)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const i=qh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return jt.workingToColorSpace(He.copy(this),t),Math.round(Vt(He.r*255,0,255))*65536+Math.round(Vt(He.g*255,0,255))*256+Math.round(Vt(He.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(He.copy(this),e);const i=He.r,n=He.g,s=He.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=ye){jt.workingToColorSpace(He.copy(this),t);const e=He.r,i=He.g,n=He.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(sn),this.setHSL(sn.h+t,sn.s+e,sn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(sn),t.getHSL(Mr);const i=Gs(sn.h,Mr.h,e),n=Gs(sn.s,Mr.s,e),s=Gs(sn.l,Mr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new yt;yt.NAMES=qh;let tf=0;class vi extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=di(),this.name="",this.type="Material",this.blending=es,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ln,this.stencilZFail=Ln,this.stencilZPass=Ln,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uo&&(i.blendSrc=this.blendSrc),this.blendDst!==fo&&(i.blendDst=this.blendDst),this.blendEquation!==bn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ln&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ln&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ln&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zt extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new A,Sr=new nt;let ef=0;class ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ef++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ic,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ic&&(t.usage=this.usage),t}}class Yh extends ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Kh extends ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Kt extends ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let nf=0;const oi=new Ot,Ha=new _e,Vn=new A,ii=new Ni,As=new Ni,Be=new A;class xe extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?Kh:Yh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,i){return oi.makeTranslation(t,e,i),this.applyMatrix4(oi),this}scale(t,e,i){return oi.makeScale(t,e,i),this.applyMatrix4(oi),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];As.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(ii.min,As.min),ii.expandByPoint(Be),Be.addVectors(ii.max,As.max),ii.expandByPoint(Be)):(ii.expandByPoint(As.min),ii.expandByPoint(As.max))}ii.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Be.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Be));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Be.fromBufferAttribute(o,l),c&&(Vn.fromBufferAttribute(t,l),Be.add(Vn)),n=Math.max(n,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<i.count;I++)o[I]=new A,c[I]=new A;const l=new A,h=new A,u=new A,d=new nt,f=new nt,g=new nt,_=new A,m=new A;function p(I,v,T){l.fromBufferAttribute(i,I),h.fromBufferAttribute(i,v),u.fromBufferAttribute(i,T),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,v),g.fromBufferAttribute(s,T),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(_),o[v].add(_),o[T].add(_),c[I].add(m),c[v].add(m),c[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,v=M.length;I<v;++I){const T=M[I],P=T.start,O=T.count;for(let B=P,H=P+O;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new A,y=new A,E=new A,w=new A;function R(I){E.fromBufferAttribute(n,I),w.copy(E);const v=o[I];S.copy(v),S.sub(E.multiplyScalar(E.dot(v))).normalize(),y.crossVectors(w,v);const P=y.dot(c[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,v=M.length;I<v;++I){const T=M[I],P=T.start,O=T.count;for(let B=P,H=P+O;B<H;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new A,s=new A,a=new A,o=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ze(d,h,u)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(n[c]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new Ot,_n=new ga,Tr=new Ui,ml=new A,br=new A,Ar=new A,Er=new A,Va=new A,wr=new A,gl=new A,Cr=new A;class et extends _e{constructor(t=new xe,e=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){wr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(Va.fromBufferAttribute(u,t),a?wr.addScaledVector(Va,h):wr.addScaledVector(Va.sub(e),h))}e.add(wr)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(s),_n.copy(t.ray).recast(t.near),!(Tr.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Tr,ml)===null||_n.origin.distanceToSquared(ml)>(t.far-t.near)**2))&&(pl.copy(s).invert(),_n.copy(t.ray).applyMatrix4(pl),!(i.boundingBox!==null&&_n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_n)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,E=S;y<E;y+=3){const w=o.getX(y),R=o.getX(y+1),I=o.getX(y+2);n=Rr(this,p,t,i,l,h,u,w,R,I),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);n=Rr(this,a,t,i,l,h,u,M,S,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,E=S;y<E;y+=3){const w=y,R=y+1,I=y+2;n=Rr(this,p,t,i,l,h,u,w,R,I),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,y=m+2;n=Rr(this,a,t,i,l,h,u,M,S,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function sf(r,t,e,i,n,s,a,o){let c;if(t.side===je?c=i.intersectTriangle(a,s,n,!0,o):c=i.intersectTriangle(n,s,a,t.side===Zi,o),c===null)return null;Cr.copy(o),Cr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Cr);return l<e.near||l>e.far?null:{distance:l,point:Cr.clone(),object:r}}function Rr(r,t,e,i,n,s,a,o,c,l){r.getVertexPosition(o,br),r.getVertexPosition(c,Ar),r.getVertexPosition(l,Er);const h=sf(r,t,e,i,br,Ar,Er,gl);if(h){const u=new A;li.getBarycoord(gl,br,Ar,Er,u),n&&(h.uv=li.getInterpolatedAttribute(n,o,c,l,u,new nt)),s&&(h.uv1=li.getInterpolatedAttribute(s,o,c,l,u,new nt)),a&&(h.normal=li.getInterpolatedAttribute(a,o,c,l,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new A,materialIndex:0};li.getNormal(br,Ar,Er,d.normal),h.face=d,h.barycoord=u}return h}class Ke extends xe{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(_,m,p,M,S,y,E,w,R,I,v){const T=y/R,P=E/I,O=y/2,B=E/2,H=w/2,V=R+1,X=I+1;let G=0,J=0;const ft=new A;for(let lt=0;lt<X;lt++){const pt=lt*P-B;for(let Wt=0;Wt<V;Wt++){const zt=Wt*T-O;ft[_]=zt*M,ft[m]=pt*S,ft[p]=H,l.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=w>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(Wt/R),u.push(1-lt/I),G+=1}}for(let lt=0;lt<I;lt++)for(let pt=0;pt<R;pt++){const Wt=d+pt+V*lt,zt=d+pt+V*(lt+1),ve=d+(pt+1)+V*(lt+1),pe=d+(pt+1)+V*lt;c.push(Wt,zt,pe),c.push(zt,ve,pe),J+=6}o.addGroup(f,J,v),f+=J,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function qe(r){const t={};for(let e=0;e<r.length;e++){const i=cs(r[e]);for(const n in i)t[n]=i[n]}return t}function rf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function jh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const aa={clone:cs,merge:qe};var af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Zh extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rn=new A,_l=new nt,xl=new nt;class Ye extends Zh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rn.x,rn.y).multiplyScalar(-t/rn.z),rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rn.x,rn.y).multiplyScalar(-t/rn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,xl),e.subVectors(xl,_l)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,e-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wn=-90,Xn=1;class cf extends _e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ye(Wn,Xn,t,e);n.layers=this.layers,this.add(n);const s=new Ye(Wn,Xn,t,e);s.layers=this.layers,this.add(s);const a=new Ye(Wn,Xn,t,e);a.layers=this.layers,this.add(a);const o=new Ye(Wn,Xn,t,e);o.layers=this.layers,this.add(o);const c=new Ye(Wn,Xn,t,e);c.layers=this.layers,this.add(c);const l=new Ye(Wn,Xn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jh extends Le{constructor(t=[],e=Cn,i,n,s,a,o,c,l,h){super(t,e,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $h extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Jh(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ke(5,5,5),s=new ke({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:Ri});s.uniforms.tEquirect.value=e;const a=new et(n,s),o=e.minFilter;return e.minFilter===Yi&&(e.minFilter=Ee),new cf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}class De extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lf={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new De;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class hf extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ec{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ic,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new A;class ls{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ls(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qh extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qn;const Es=new A,Yn=new A,Kn=new A,jn=new nt,ws=new nt,tu=new Ot,Pr=new A,Cs=new A,Ir=new A,vl=new nt,Xa=new nt,yl=new nt;class uf extends _e{constructor(t=new Qh){if(super(),this.isSprite=!0,this.type="Sprite",qn===void 0){qn=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ec(e,5);qn.setIndex([0,1,2,0,2,3]),qn.setAttribute("position",new ls(i,3,0,!1)),qn.setAttribute("uv",new ls(i,2,3,!1))}this.geometry=qn,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&It('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yn.setFromMatrixScale(this.matrixWorld),tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Kn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yn.multiplyScalar(-Kn.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;Dr(Pr.set(-.5,-.5,0),Kn,a,Yn,n,s),Dr(Cs.set(.5,-.5,0),Kn,a,Yn,n,s),Dr(Ir.set(.5,.5,0),Kn,a,Yn,n,s),vl.set(0,0),Xa.set(1,0),yl.set(1,1);let o=t.ray.intersectTriangle(Pr,Cs,Ir,!1,Es);if(o===null&&(Dr(Cs.set(-.5,.5,0),Kn,a,Yn,n,s),Xa.set(0,1),o=t.ray.intersectTriangle(Pr,Ir,Cs,!1,Es),o===null))return;const c=t.ray.origin.distanceTo(Es);c<t.near||c>t.far||e.push({distance:c,point:Es.clone(),uv:li.getInterpolation(Es,Pr,Cs,Ir,vl,Xa,yl,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Dr(r,t,e,i,n,s){jn.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(ws.x=s*jn.x-n*jn.y,ws.y=n*jn.x+s*jn.y):ws.copy(jn),r.copy(t),r.x+=ws.x,r.y+=ws.y,r.applyMatrix4(tu)}const Ml=new A,Sl=new ge,Tl=new ge,df=new A,bl=new Ot,Lr=new A,qa=new Ui,Al=new Ot,Ya=new ga;class ff extends et{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$c,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ni),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Lr),this.boundingBox.expandByPoint(Lr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ui),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Lr),this.boundingSphere.expandByPoint(Lr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(n),t.ray.intersectsSphere(qa)!==!1&&(Al.copy(n).invert(),Ya.copy(t.ray).applyMatrix4(Al),!(this.boundingBox!==null&&Ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ya)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ge,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===$c?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ct("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;Sl.fromBufferAttribute(n.attributes.skinIndex,t),Tl.fromBufferAttribute(n.attributes.skinWeight,t),Ml.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Tl.getComponent(s);if(a!==0){const o=Sl.getComponent(s);bl.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(df.copy(Ml).applyMatrix4(bl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class eu extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wc extends Le{constructor(t=null,e=1,i=1,n,s,a,o,c,l=Ie,h=Ie,u,d){super(null,a,o,c,l,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const El=new Ot,pf=new Ot;class Cc{constructor(t=[],e=[]){this.uuid=di(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Ct("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Ot;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:pf;El.multiplyMatrices(o,e[s]),El.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Cc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new wc(e,t,t,si,hi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const s=t.bones[i];let a=e[s];a===void 0&&(Ct("Skeleton: No bone found with UUID:",s),a=new eu),this.bones.push(a),this.boneInverses.push(new Ot().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){const a=e[n];t.bones.push(a.uuid);const o=i[n];t.boneInverses.push(o.toArray())}return t}}class nc extends ze{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zn=new Ot,wl=new Ot,Nr=[],Cl=new Ni,mf=new Ot,Rs=new et,Ps=new Ui;class gf extends et{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,mf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zn),Cl.copy(t.boundingBox).applyMatrix4(Zn),this.boundingBox.union(Cl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zn),Ps.copy(t.boundingSphere).applyMatrix4(Zn),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(i),t.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Zn),wl.multiplyMatrices(i,Zn),Rs.matrixWorld=wl,Rs.raycast(t,Nr);for(let a=0,o=Nr.length;a<o;a++){const c=Nr[a];c.instanceId=s,c.object=this,e.push(c)}Nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new wc(new Float32Array(n*this.count),n,this.count,_c,hi));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=n*t;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ka=new A,_f=new A,xf=new Ft;class Tn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ka.subVectors(i,e).cross(_f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ka),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xf.getNormalMatrix(t),n=this.coplanarPoint(Ka).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xn=new Ui,vf=new nt(.5,.5),Ur=new A;class Rc{constructor(t=new Tn,e=new Tn,i=new Tn,n=new Tn,s=new Tn,a=new Tn){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ci,i=!1){const n=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],S=s[13],y=s[14],E=s[15];if(n[0].setComponents(l-a,f-h,p-g,E-M).normalize(),n[1].setComponents(l+a,f+h,p+g,E+M).normalize(),n[2].setComponents(l+o,f+u,p+_,E+S).normalize(),n[3].setComponents(l-o,f-u,p-_,E-S).normalize(),i)n[4].setComponents(c,d,m,y).normalize(),n[5].setComponents(l-c,f-d,p-m,E-y).normalize();else if(n[4].setComponents(l-c,f-d,p-m,E-y).normalize(),e===Ci)n[5].setComponents(l+c,f+d,p+m,E+y).normalize();else if(e===sa)n[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xn)}intersectsSprite(t){xn.center.set(0,0,0);const e=vf.distanceTo(t.center);return xn.radius=.7071067811865476+e,xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Ur.x=n.normal.x>0?t.max.x:t.min.x,Ur.y=n.normal.y>0?t.max.y:t.min.y,Ur.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iu extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oa=new A,ca=new A,Rl=new Ot,Is=new ga,Or=new Ui,ja=new A,Pl=new A;class Pc extends _e{constructor(t=new xe,e=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)oa.fromBufferAttribute(e,n-1),ca.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=oa.distanceTo(ca);t.setAttribute("lineDistance",new Kt(i,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(n),Or.radius+=s,t.ray.intersectsSphere(Or)===!1)return;Rl.copy(n).invert(),Is.copy(t.ray).applyMatrix4(Rl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),M=h.getX(_+1),S=Br(this,t,Is,c,p,M,_);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Br(this,t,Is,c,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Br(this,t,Is,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Br(this,t,Is,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Br(r,t,e,i,n,s,a){const o=r.geometry.attributes.position;if(oa.fromBufferAttribute(o,n),ca.fromBufferAttribute(o,s),e.distanceSqToSegment(oa,ca,ja,Pl)>i)return;ja.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ja);if(!(l<t.near||l>t.far))return{distance:l,point:Pl.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Il=new A,Dl=new A;class yf extends Pc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Il.fromBufferAttribute(e,n),Dl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Il.distanceTo(Dl);t.setAttribute("lineDistance",new Kt(i,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mf extends Pc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class nu extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ll=new Ot,sc=new ga,Fr=new Ui,kr=new A;class Sf extends _e{constructor(t=new xe,e=new nu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(n),Fr.radius+=s,t.ray.intersectsSphere(Fr)===!1)return;Ll.copy(n).invert(),sc.copy(t.ray).applyMatrix4(Ll);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);kr.fromBufferAttribute(u,m),Nl(kr,m,c,n,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)kr.fromBufferAttribute(u,g),Nl(kr,g,c,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Nl(r,t,e,i,n,s,a){const o=sc.distanceSqToPoint(r);if(o<e){const c=new A;sc.closestPointToPoint(r,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class su extends Le{constructor(t,e,i,n,s,a,o,c,l){super(t,e,i,n,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class er extends Le{constructor(t,e,i=Di,n,s,a,o=Ie,c=Ie,l,h=Ji,u=1){if(h!==Ji&&h!==En)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tf extends er{constructor(t,e=Di,i=Cn,n,s,a=Ie,o=Ie,c,l=Ji){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ru extends Le{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class hn extends xe{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=i*2+s,_=n+1,m=new A,p=new A;for(let M=0;M<=g;M++){let S=0,y=0,E=0,w=0;if(M<=i){const v=M/i,T=v*Math.PI/2;y=-h-t*Math.cos(T),E=t*Math.sin(T),w=-t*Math.cos(T),S=v*u}else if(M<=i+s){const v=(M-i)/s;y=-h+v*e,E=t,w=0,S=u+v*d}else{const v=(M-i-s)/i,T=v*Math.PI/2;y=h+t*Math.sin(T),E=t*Math.cos(T),w=t*Math.sin(T),S=u+d+v*u}const R=Math.max(0,Math.min(1,S/f));let I=0;M===0?I=.5/n:M===g&&(I=-.5/n);for(let v=0;v<=n;v++){const T=v/n,P=T*Math.PI*2,O=Math.sin(P),B=Math.cos(P);p.x=-E*B,p.y=y,p.z=E*O,o.push(p.x,p.y,p.z),m.set(-E*B,w,E*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(T+I,R)}if(M>0){const v=(M-1)*_;for(let T=0;T<n;T++){const P=v+T,O=v+T+1,B=M*_+T,H=M*_+T+1;a.push(P,O,B),a.push(O,H,B)}}}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class _a extends xe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new A,h=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class un extends xe{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;M(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function M(){const y=new A,E=new A;let w=0;const R=(e-t)/i;for(let I=0;I<=s;I++){const v=[],T=I/s,P=T*(e-t)+t;for(let O=0;O<=n;O++){const B=O/n,H=B*c+o,V=Math.sin(H),X=Math.cos(H);E.x=P*V,E.y=-T*i+m,E.z=P*X,u.push(E.x,E.y,E.z),y.set(V,R,X).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-T),v.push(g++)}_.push(v)}for(let I=0;I<n;I++)for(let v=0;v<s;v++){const T=_[v][I],P=_[v+1][I],O=_[v+1][I+1],B=_[v][I+1];(t>0||v!==0)&&(h.push(T,P,B),w+=3),(e>0||v!==s-1)&&(h.push(P,O,B),w+=3)}l.addGroup(p,w,0),p+=w}function S(y){const E=g,w=new nt,R=new A;let I=0;const v=y===!0?t:e,T=y===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=n;O++){const H=O/n*c+o,V=Math.cos(H),X=Math.sin(H);R.x=v*X,R.y=m*T,R.z=v*V,u.push(R.x,R.y,R.z),d.push(0,T,0),w.x=V*.5+.5,w.y=X*.5*T+.5,f.push(w.x,w.y),g++}for(let O=0;O<n;O++){const B=E+O,H=P+O;y===!0?h.push(H,H+1,B):h.push(H+1,H,B),I+=3}l.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hs extends un{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Hs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gs extends xe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],a=[];o(n),l(i),h(),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(s.slice(),3)),this.setAttribute("uv",new Kt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const S=new A,y=new A,E=new A;for(let w=0;w<e.length;w+=3)f(e[w+0],S),f(e[w+1],y),f(e[w+2],E),c(S,y,E,M)}function c(M,S,y,E){const w=E+1,R=[];for(let I=0;I<=w;I++){R[I]=[];const v=M.clone().lerp(y,I/w),T=S.clone().lerp(y,I/w),P=w-I;for(let O=0;O<=P;O++)O===0&&I===w?R[I][O]=v:R[I][O]=v.clone().lerp(T,O/P)}for(let I=0;I<w;I++)for(let v=0;v<2*(w-I)-1;v++){const T=Math.floor(v/2);v%2===0?(d(R[I][T+1]),d(R[I+1][T]),d(R[I][T])):(d(R[I][T+1]),d(R[I+1][T+1]),d(R[I+1][T]))}}function l(M){const S=new A;for(let y=0;y<s.length;y+=3)S.x=s[y+0],S.y=s[y+1],S.z=s[y+2],S.normalize().multiplyScalar(M),s[y+0]=S.x,s[y+1]=S.y,s[y+2]=S.z}function h(){const M=new A;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];const y=m(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;a.push(y,1-E)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const S=a[M+0],y=a[M+2],E=a[M+4],w=Math.max(S,y,E),R=Math.min(S,y,E);w>.9&&R<.1&&(S<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,S){const y=M*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function g(){const M=new A,S=new A,y=new A,E=new A,w=new nt,R=new nt,I=new nt;for(let v=0,T=0;v<s.length;v+=9,T+=6){M.set(s[v+0],s[v+1],s[v+2]),S.set(s[v+3],s[v+4],s[v+5]),y.set(s[v+6],s[v+7],s[v+8]),w.set(a[T+0],a[T+1]),R.set(a[T+2],a[T+3]),I.set(a[T+4],a[T+5]),E.copy(M).add(S).add(y).divideScalar(3);const P=m(E);_(w,T+0,M,P),_(R,T+2,S,P),_(I,T+4,y,P)}}function _(M,S,y,E){E<0&&M.x===1&&(a[S]=M.x-1),y.x===0&&y.z===0&&(a[S]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.vertices,t.indices,t.radius,t.detail)}}class Ic extends gs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ic(t.radius,t.detail)}}class Oi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ct("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=i[n]-a,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===a)return n/(s-1);const h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),c=e||(a.isVector2?new nt:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new A,n=[],s=[],a=[],o=new A,c=new Ot;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new A)}s[0]=new A,a[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Vt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Vt(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dc extends Oi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new nt){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bf extends Dc{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Lc(){let r=0,t=0,e=0,i=0;function n(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+i*o}}}const zr=new A,Za=new Lc,Ja=new Lc,$a=new Lc;class Af extends Oi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new A){const i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=n[(o-1)%s]:(zr.subVectors(n[0],n[1]).add(n[0]),l=zr);const u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(zr.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Za.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Ja.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),$a.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ja.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),$a.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Za.calc(c),Ja.calc(c),$a.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new A().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ul(r,t,e,i,n){const s=(i-t)*.5,a=(n-e)*.5,o=r*r,c=r*o;return(2*e-2*i+s+a)*c+(-3*e+3*i-2*s-a)*o+s*r+e}function Ef(r,t){const e=1-r;return e*e*t}function wf(r,t){return 2*(1-r)*r*t}function Cf(r,t){return r*r*t}function Vs(r,t,e,i){return Ef(r,t)+wf(r,e)+Cf(r,i)}function Rf(r,t){const e=1-r;return e*e*e*t}function Pf(r,t){const e=1-r;return 3*e*e*r*t}function If(r,t){return 3*(1-r)*r*r*t}function Df(r,t){return r*r*r*t}function Ws(r,t,e,i,n){return Rf(r,t)+Pf(r,e)+If(r,i)+Df(r,n)}class au extends Oi{constructor(t=new nt,e=new nt,i=new nt,n=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new nt){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ws(t,n.x,s.x,a.x,o.x),Ws(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lf extends Oi{constructor(t=new A,e=new A,i=new A,n=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new A){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ws(t,n.x,s.x,a.x,o.x),Ws(t,n.y,s.y,a.y,o.y),Ws(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ou extends Oi{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nf extends Oi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cu extends Oi{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Vs(t,n.x,s.x,a.x),Vs(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uf extends Oi{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Vs(t,n.x,s.x,a.x),Vs(t,n.y,s.y,a.y),Vs(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lu extends Oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Ul(o,c.x,l.x,h.x,u.x),Ul(o,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new nt().fromArray(n))}return this}}var Ol=Object.freeze({__proto__:null,ArcCurve:bf,CatmullRomCurve3:Af,CubicBezierCurve:au,CubicBezierCurve3:Lf,EllipseCurve:Dc,LineCurve:ou,LineCurve3:Nf,QuadraticBezierCurve:cu,QuadraticBezierCurve3:Uf,SplineCurve:lu});class Of extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ol[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Ol[n.type]().fromJSON(n))}return this}}class Bl extends Of{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new ou(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new cu(this.currentPoint.clone(),new nt(t,e),new nt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){const o=new au(this.currentPoint.clone(),new nt(t,e),new nt(i,n),new nt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new lu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,n,s,a,o,c),this}absellipse(t,e,i,n,s,a,o,c){const l=new Dc(t,e,i,n,s,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hu extends Bl{constructor(t){super(t),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Bl().fromJSON(n))}return this}}function Bf(r,t,e=2){const i=t&&t.length,n=i?t[0]*e:r.length;let s=uu(r,0,n,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=Hf(r,t,s,e)),r.length>80*e){o=r[0],c=r[1];let h=o,u=c;for(let d=e;d<n;d+=e){const f=r[d],g=r[d+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return ir(s,a,e,o,c,l,0),a}function uu(r,t,e,i,n){let s;if(n===Qf(r,t,e,i)>0)for(let a=t;a<e;a+=i)s=Fl(a/i|0,r[a],r[a+1],s);else for(let a=e-i;a>=t;a-=i)s=Fl(a/i|0,r[a],r[a+1],s);return s&&hs(s,s.next)&&(sr(s),s=s.next),s}function Rn(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(hs(e,e.next)||Me(e.prev,e,e.next)===0)){if(sr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ir(r,t,e,i,n,s,a){if(!r)return;!a&&s&&Yf(r,i,n,s);let o=r;for(;r.prev!==r.next;){const c=r.prev,l=r.next;if(s?kf(r,i,n,s):Ff(r)){t.push(c.i,r.i,l.i),sr(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=zf(Rn(r),t),ir(r,t,e,i,n,s,2)):a===2&&Gf(r,t,e,i,n,s):ir(Rn(r),t,e,i,n,s,1);break}}}function Ff(r){const t=r.prev,e=r,i=r.next;if(Me(t,e,i)>=0)return!1;const n=t.x,s=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=Math.min(n,s,a),u=Math.min(o,c,l),d=Math.max(n,s,a),f=Math.max(o,c,l);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Fs(n,o,s,c,a,l,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kf(r,t,e,i){const n=r.prev,s=r,a=r.next;if(Me(n,s,a)>=0)return!1;const o=n.x,c=s.x,l=a.x,h=n.y,u=s.y,d=a.y,f=Math.min(o,c,l),g=Math.min(h,u,d),_=Math.max(o,c,l),m=Math.max(h,u,d),p=rc(f,g,t,e,i),M=rc(_,m,t,e,i);let S=r.prevZ,y=r.nextZ;for(;S&&S.z>=p&&y&&y.z<=M;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==n&&S!==a&&Fs(o,h,c,u,l,d,S.x,S.y)&&Me(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==n&&y!==a&&Fs(o,h,c,u,l,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==n&&S!==a&&Fs(o,h,c,u,l,d,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==n&&y!==a&&Fs(o,h,c,u,l,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function zf(r,t){let e=r;do{const i=e.prev,n=e.next.next;!hs(i,n)&&fu(i,e,e.next,n)&&nr(i,n)&&nr(n,i)&&(t.push(i.i,e.i,n.i),sr(e),sr(e.next),e=r=n),e=e.next}while(e!==r);return Rn(e)}function Gf(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zf(a,o)){let c=pu(a,o);a=Rn(a,a.next),c=Rn(c,c.next),ir(a,t,e,i,n,s,0),ir(c,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Hf(r,t,e,i){const n=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*i,c=s<a-1?t[s+1]*i:r.length,l=uu(r,o,c,i,!1);l===l.next&&(l.steiner=!0),n.push(jf(l))}n.sort(Vf);for(let s=0;s<n.length;s++)e=Wf(n[s],e);return e}function Vf(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Wf(r,t){const e=Xf(r,t);if(!e)return t;const i=pu(e,r);return Rn(i,i.next),Rn(e,e.next)}function Xf(r,t){let e=t;const i=r.x,n=r.y;let s=-1/0,a;if(hs(r,e))return e;do{if(hs(r,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const u=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&du(n<l?i:s,n,c,l,n<l?s:i,n,e.x,e.y)){const u=Math.abs(n-e.y)/(i-e.x);nr(e,r)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&qf(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function qf(r,t){return Me(r.prev,r,t.prev)<0&&Me(t.next,r,r.next)<0}function Yf(r,t,e,i){let n=r;do n.z===0&&(n.z=rc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Kf(n)}function Kf(r){let t,e=1;do{let i=r,n;r=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,c--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=a}s.nextZ=null,e*=2}while(t>1);return r}function rc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function jf(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function du(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function Fs(r,t,e,i,n,s,a,o){return!(r===a&&t===o)&&du(r,t,e,i,n,s,a,o)}function Zf(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Jf(r,t)&&(nr(r,t)&&nr(t,r)&&$f(r,t)&&(Me(r.prev,r,t.prev)||Me(r,t.prev,t))||hs(r,t)&&Me(r.prev,r,r.next)>0&&Me(t.prev,t,t.next)>0)}function Me(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function hs(r,t){return r.x===t.x&&r.y===t.y}function fu(r,t,e,i){const n=Hr(Me(r,t,e)),s=Hr(Me(r,t,i)),a=Hr(Me(e,i,r)),o=Hr(Me(e,i,t));return!!(n!==s&&a!==o||n===0&&Gr(r,e,t)||s===0&&Gr(r,i,t)||a===0&&Gr(e,r,i)||o===0&&Gr(e,t,i))}function Gr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Hr(r){return r>0?1:r<0?-1:0}function Jf(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&fu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function nr(r,t){return Me(r.prev,r,r.next)<0?Me(r,t,r.next)>=0&&Me(r,r.prev,t)>=0:Me(r,t,r.prev)<0||Me(r,r.next,t)<0}function $f(r,t){let e=r,i=!1;const n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function pu(r,t){const e=ac(r.i,r.x,r.y),i=ac(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Fl(r,t,e,i){const n=ac(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function sr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ac(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qf(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}class tp{static triangulate(t,e,i=2){return Bf(t,e,i)}}class Xs{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return Xs.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];kl(t),zl(i,t);let a=t.length;e.forEach(kl);for(let c=0;c<e.length;c++)n.push(a),a+=e[c].length,zl(i,e[c]);const o=tp.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function kl(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function zl(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class la extends gs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new la(t.radius,t.detail)}}class ha extends gs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ha(t.radius,t.detail)}}class ui extends xe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let S=0;S<l;S++){const y=S*u-s;g.push(y,-M,0),_.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const S=M+l*p,y=M+l*(p+1),E=M+1+l*(p+1),w=M+1+l*p;f.push(S,y,w),f.push(y,E,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.width,t.height,t.widthSegments,t.heightSegments)}}class _s extends xe{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/n,f=new A,g=new nt;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){const p=s+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<n;_++){const m=_*(i+1);for(let p=0;p<i;p++){const M=p+m,S=M,y=M+i+1,E=M+i+2,w=M+1;o.push(S,y,w),o.push(y,E,w)}}this.setIndex(o),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nc extends xe{constructor(t=new hu([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],s=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Kt(n,3)),this.setAttribute("normal",new Kt(s,3)),this.setAttribute("uv",new Kt(a,2));function l(h){const u=n.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Xs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];Xs.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=Xs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){const M=f[m];n.push(M.x,M.y,0),s.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){const M=_[m],S=M[0]+u,y=M[1]+u,E=M[2]+u;i.push(S,y,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ep(e,t)}static fromJSON(t,e){const i=[];for(let n=0,s=t.shapes.length;n<s;n++){const a=e[t.shapes[n]];i.push(a)}return new Nc(i,t.curveSegments)}}function ep(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,i=r.length;e<i;e++){const n=r[e];t.shapes.push(n.uuid)}else t.shapes.push(r.uuid);return t}class Se extends xe{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const M=[],S=p/i;let y=0;p===0&&a===0?y=.5/e:p===i&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const w=E/e;u.x=-t*Math.cos(n+w*s)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(n+w*s)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+y,1-S),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const S=h[p][M+1],y=h[p][M],E=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(S,y,w),(p!==i-1||c<Math.PI)&&f.push(y,E,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Uc extends gs{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Uc(t.radius,t.detail)}}class us extends xe{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const _=g/n*s,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/n),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const _=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,M=(n+1)*f+g;a.push(_,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ip extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qt extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bi extends qt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class np extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sp extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Vr(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function rp(r){function t(n,s){return r[n]-r[s]}const e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function Gl(r,t,e){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=e[s]*t;for(let c=0;c!==t;++c)n[a++]=r[o+c]}return n}function mu(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push(...a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}class or{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let a;i:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break e}a=e.length;break i}if(!(t>=s)){const o=e[1];t<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=e[--i-1],t>=s)break e}a=i,i=0;break i}break t}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ap extends or{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qn,endingEnd:Qn}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,a=t+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case ts:s=t,o=2*e-i;break;case ia:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ts:a=t,c=2*i-e;break;case ia:a=1,c=i+n[1]-n[0];break;default:a=t-1,c=e}const l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let E=0;E!==o;++E)s[E]=p*a[h+E]+M*a[l+E]+S*a[c+E]+y*a[u+E];return s}}class gu extends or{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}}class op extends or{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class yi{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new op(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ap(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Js:e=this.InterpolantFactoryMethodDiscrete;break;case $s:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ct("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){It("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){It("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(n!==void 0&&Sd(n))for(let o=0,c=n.length;o!==c;++o){const l=n[o];if(isNaN(l)){It("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ta,s=t.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(n)c=!0;else{const u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}yi.prototype.ValueTypeName="";yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=$s;class xs extends yi{constructor(t,e,i){super(t,e,i)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Js;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class _u extends yi{constructor(t,e,i,n){super(t,e,i,n)}}_u.prototype.ValueTypeName="color";class ds extends yi{constructor(t,e,i,n){super(t,e,i,n)}}ds.prototype.ValueTypeName="number";class cp extends or{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(n-e);let l=t*o;for(let h=l+o;l!==h;l+=4)xi.slerpFlat(s,0,a,l-o,a,l,c);return s}}class fs extends yi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new cp(this.times,this.values,this.getValueSize(),t)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends yi{constructor(t,e,i){super(t,e,i)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Js;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends yi{constructor(t,e,i,n){super(t,e,i,n)}}ps.prototype.ValueTypeName="vector";class oc{constructor(t="",e=-1,i=[],n=Mc){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(hp(i[a]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,a=i.length;s!==a;++s)e.push(yi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=rp(c);c=Gl(c,1,h),l=Gl(l,1,h),!n&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ds(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(l)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(Ct("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return It("AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];mu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},n=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}n.push(new ds(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+e[u].name+"]";i(ps,f+".position",d,"pos",n),i(fs,f+".quaternion",d,"rot",n),i(ps,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,c,n,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function lp(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return _u;case"quaternion":return fs;case"bool":case"boolean":return xs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function hp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=lp(r.type);if(r.times===void 0){const e=[],i=[];mu(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Ki={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class up{constructor(t,e,i){const n=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const dp=new up;class In{constructor(t){this.manager=t!==void 0?t:dp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}In.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi={};class fp extends Error{constructor(t,e){super(t),this.response=e}}class ua extends In{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ki.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Wi[t]!==void 0){Wi[t].push({onLoad:e,onProgress:i,onError:n});return}Wi[t]=[],Wi[t].push({onLoad:e,onProgress:i,onError:n});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ct("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Wi[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:S,value:y})=>{if(S)p.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,R=h.length;w<R;w++){const I=h[w];I.onProgress&&I.onProgress(E)}p.enqueue(y),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new fp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ki.add(`file:${t}`,l);const h=Wi[t];delete Wi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Wi[t];if(h===void 0)throw this.manager.itemError(t),l;delete Wi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Jn=new WeakMap;class pp extends In{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ki.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=Jn.get(a);u===void 0&&(u=[],Jn.set(a,u)),u.push({onLoad:e,onError:n})}return a}const o=Qs("img");function c(){h(),e&&e(this);const u=Jn.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Jn.delete(this),s.manager.itemEnd(t)}function l(u){h(),n&&n(u),Ki.remove(`image:${t}`);const d=Jn.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Jn.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ki.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class xu extends In{constructor(t){super(t)}load(t,e,i,n){const s=new Le,a=new pp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}class cr extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class mp extends cr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Qa=new Ot,Hl=new A,Vl=new A;class Oc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hl),Vl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vl),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gp extends Oc{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=os*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class _p extends cr{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new gp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class xp extends Oc{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}}class qi extends cr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new xp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class lr extends Zh{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vp extends Oc{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vu extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new vp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class yp extends cr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class qs{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const to=new WeakMap;class Mp extends In{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ct("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ct("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ki.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(l=>{if(to.has(a)===!0)n&&n(to.get(a)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(l),s.manager.itemEnd(t),l});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ki.add(`image-bitmap:${t}`,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){n&&n(l),to.set(c,l),Ki.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});Ki.add(`image-bitmap:${t}`,c),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Sp extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class yu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Tp{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,a;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(i,n,c,1-s,e)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){o.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,a=n;s!==a;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)t[e+a]=t[i+a]}_slerp(t,e,i,n){xi.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const a=this._workIndex*s;xi.multiplyQuaternionsFlat(t,a,t,e,t,i),xi.slerpFlat(t,e,t,e,t,a,n)}_lerp(t,e,i,n,s){const a=1-n;for(let o=0;o!==s;++o){const c=e+o;t[c]=t[c]*a+t[i+o]*n}}_lerpAdditive(t,e,i,n,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[i+a]*n}}}const Bc="\\[\\]\\.:\\/",bp=new RegExp("["+Bc+"]","g"),Fc="[^"+Bc+"]",Ap="[^"+Bc.replace("\\.","")+"]",Ep=/((?:WC+[\/:])*)/.source.replace("WC",Fc),wp=/(WCOD+)?/.source.replace("WCOD",Ap),Cp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),Rp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),Pp=new RegExp("^"+Ep+wp+Cp+Rp+"$"),Ip=["material","materials","bones","map"];class Dp{constructor(t,e,i){const n=i||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class ie{constructor(t,e,i){this.path=e,this.parsedPath=i||ie.parseTrackName(e),this.node=ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new ie.Composite(t,e,i):new ie(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bp,"")}static parseTrackName(t){const e=Pp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Ip.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const c=i(o.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=ie.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[n];if(a===void 0){const l=e.nodeName;It("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ie.Composite=Dp;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Lp{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,a=s.length,o=new Array(a),c={endingStart:Qn,endingEnd:Qn};for(let l=0;l!==a;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=zh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){const n=this._clip.duration,s=t._clip.duration,a=s/n,o=n/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+i,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case dd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Mc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(n,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const a=i===ud;if(t===0)return s===-1?n:a&&(s&1)===1?e-n:n;if(i===kh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=e||n<0){const o=Math.floor(n/e);n-=e*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=ts,n.endingEnd=ts):(t?n.endingStart=this.zeroSlopeAtStart?ts:Qn:n.endingStart=ia,e?n.endingEnd=this.zeroSlopeAtEnd?ts:Qn:n.endingEnd=ia)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=e,o[1]=s+t,c[1]=i,this}}const Np=new Float32Array(1);class Mu extends Pn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,a=t._propertyBindings,o=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;g=new Tp(ie.create(i,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=n.length,n.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[e];a===void 0&&(a={},n[e]=a),a[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new gu(new Float32Array(2),new Float32Array(2),1,Np),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let a=typeof t=="string"?oc.findByName(n,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Mc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Lp(this,a,e,i);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?oc.findByName(i,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(n,t,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}function Wl(r,t,e,i){const n=Up(i);switch(e){case Bh:return r*t;case _c:return r*t/n.components*n.byteLength;case xc:return r*t/n.components*n.byteLength;case as:return r*t*2/n.components*n.byteLength;case vc:return r*t*2/n.components*n.byteLength;case Fh:return r*t*3/n.components*n.byteLength;case si:return r*t*4/n.components*n.byteLength;case yc:return r*t*4/n.components*n.byteLength;case jr:case Zr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Jr:case $r:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bo:case Eo:return Math.max(r,16)*Math.max(t,8)/4;case To:case Ao:return Math.max(r,8)*Math.max(t,8)/2;case wo:case Co:case Po:case Io:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Do:case Lo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ko:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case qo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ko:case jo:case Zo:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Jo:case $o:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Qo:case tc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Up(r){switch(r){case ni:case Lh:return{byteLength:1,components:1};case js:case Nh:case ri:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case Di:case pc:case hi:return{byteLength:4,components:1};case Uh:case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);function Su(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Op(r){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:s,update:a}}var Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vp=`#ifdef USE_AOMAP
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
#endif`,Wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp=`#ifdef USE_BATCHING
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
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,am=`#define PI 3.141592653589793
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
} // validated`,om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cm=`vec3 transformedNormal = objectNormal;
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
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
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
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Um=`uniform sampler2D dfgLUT;
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
}`,Om=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qm=`#if defined( USE_POINTS_UV )
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
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
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
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bg=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Vg=`#if DEPTH_PACKING == 3200
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`#define DISTANCE
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,Qg=`#define LAMBERT
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
}`,t0=`#define MATCAP
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
}`,e0=`#define MATCAP
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
}`,i0=`#define NORMAL
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
}`,n0=`#define NORMAL
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
}`,s0=`#define PHONG
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
}`,r0=`#define PHONG
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
}`,a0=`#define STANDARD
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
}`,o0=`#define STANDARD
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
}`,c0=`#define TOON
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
}`,l0=`#define TOON
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
}`,h0=`uniform float size;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 color;
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
}`,p0=`uniform float rotation;
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
}`,m0=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Bp,alphahash_pars_fragment:Fp,alphamap_fragment:kp,alphamap_pars_fragment:zp,alphatest_fragment:Gp,alphatest_pars_fragment:Hp,aomap_fragment:Vp,aomap_pars_fragment:Wp,batching_pars_vertex:Xp,batching_vertex:qp,begin_vertex:Yp,beginnormal_vertex:Kp,bsdfs:jp,iridescence_fragment:Zp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Qp,clipping_planes_pars_vertex:tm,clipping_planes_vertex:em,color_fragment:im,color_pars_fragment:nm,color_pars_vertex:sm,color_vertex:rm,common:am,cube_uv_reflection_fragment:om,defaultnormal_vertex:cm,displacementmap_pars_vertex:lm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:dm,colorspace_fragment:fm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:_m,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Rm,envmap_vertex:vm,fog_vertex:ym,fog_pars_vertex:Mm,fog_fragment:Sm,fog_pars_fragment:Tm,gradientmap_pars_fragment:bm,lightmap_pars_fragment:Am,lights_lambert_fragment:Em,lights_lambert_pars_fragment:wm,lights_pars_begin:Cm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Im,lights_phong_fragment:Dm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Nm,lights_physical_pars_fragment:Um,lights_fragment_begin:Om,lights_fragment_maps:Bm,lights_fragment_end:Fm,logdepthbuf_fragment:km,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Gm,logdepthbuf_vertex:Hm,map_fragment:Vm,map_pars_fragment:Wm,map_particle_fragment:Xm,map_particle_pars_fragment:qm,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:Km,morphinstance_vertex:jm,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:$m,morphtarget_vertex:Qm,normal_fragment_begin:tg,normal_fragment_maps:eg,normal_pars_fragment:ig,normal_pars_vertex:ng,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:cg,iridescence_pars_fragment:lg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:vg,shadowmap_vertex:yg,shadowmask_pars_fragment:Mg,skinbase_vertex:Sg,skinning_pars_vertex:Tg,skinning_vertex:bg,skinnormal_vertex:Ag,specularmap_fragment:Eg,specularmap_pars_fragment:wg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Rg,transmission_fragment:Pg,transmission_pars_fragment:Ig,uv_pars_fragment:Dg,uv_pars_vertex:Lg,uv_vertex:Ng,worldpos_vertex:Ug,background_vert:Og,background_frag:Bg,backgroundCube_vert:Fg,backgroundCube_frag:kg,cube_vert:zg,cube_frag:Gg,depth_vert:Hg,depth_frag:Vg,distance_vert:Wg,distance_frag:Xg,equirect_vert:qg,equirect_frag:Yg,linedashed_vert:Kg,linedashed_frag:jg,meshbasic_vert:Zg,meshbasic_frag:Jg,meshlambert_vert:$g,meshlambert_frag:Qg,meshmatcap_vert:t0,meshmatcap_frag:e0,meshnormal_vert:i0,meshnormal_frag:n0,meshphong_vert:s0,meshphong_frag:r0,meshphysical_vert:a0,meshphysical_frag:o0,meshtoon_vert:c0,meshtoon_frag:l0,points_vert:h0,points_frag:u0,shadow_vert:d0,shadow_frag:f0,sprite_vert:p0,sprite_frag:m0},ht={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ei={basic:{uniforms:qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new yt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:qe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:qe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new yt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:qe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:qe([ht.points,ht.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:qe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:qe([ht.common,ht.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:qe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:qe([ht.sprite,ht.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:qe([ht.common,ht.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:qe([ht.lights,ht.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Ei.physical={uniforms:qe([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Wr={r:0,b:0,g:0},vn=new Li,g0=new Ot;function _0(r,t,e,i,n,s,a){const o=new yt(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const E=g(S);E===null?p(o,c):E&&E.isColor&&(p(E,1),y=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===ma)?(h===void 0&&(h=new et(new Ke(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:cs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),vn.copy(y.backgroundRotation),vn.x*=-1,vn.y*=-1,vn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vn.y*=-1,vn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(vn)),h.material.toneMapped=jt.getTransfer(E.colorSpace)!==ae,(u!==E||d!==E.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new et(new ui(2,2),new ke({name:"BackgroundMaterial",uniforms:cs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=jt.getTransfer(E.colorSpace)!==ae,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(Wr,jh(r)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,y,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(o,c)},render:_,addToRenderList:m,dispose:M}}function x0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,a=!1;function o(T,P,O,B,H){let V=!1;const X=u(B,O,P);s!==X&&(s=X,l(s.object)),V=f(T,B,O,H),V&&g(T,B,O,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(T,P,O,B),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return r.createVertexArray()}function l(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function u(T,P,O){const B=O.wireframe===!0;let H=i[T.id];H===void 0&&(H={},i[T.id]=H);let V=H[P.id];V===void 0&&(V={},H[P.id]=V);let X=V[B];return X===void 0&&(X=d(c()),V[B]=X),X}function d(T){const P=[],O=[],B=[];for(let H=0;H<e;H++)P[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:T,attributes:{},index:null}}function f(T,P,O,B){const H=s.attributes,V=P.attributes;let X=0;const G=O.getAttributes();for(const J in G)if(G[J].location>=0){const lt=H[J];let pt=V[J];if(pt===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(pt=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(pt=T.instanceColor)),lt===void 0||lt.attribute!==pt||pt&&lt.data!==pt.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function g(T,P,O,B){const H={},V=P.attributes;let X=0;const G=O.getAttributes();for(const J in G)if(G[J].location>=0){let lt=V[J];lt===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(lt=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(lt=T.instanceColor));const pt={};pt.attribute=lt,lt&&lt.data&&(pt.data=lt.data),H[J]=pt,X++}s.attributes=H,s.attributesNum=X,s.index=B}function _(){const T=s.newAttributes;for(let P=0,O=T.length;P<O;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){const O=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;O[T]=1,B[T]===0&&(r.enableVertexAttribArray(T),B[T]=1),H[T]!==P&&(r.vertexAttribDivisor(T,P),H[T]=P)}function M(){const T=s.newAttributes,P=s.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==T[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function S(T,P,O,B,H,V,X){X===!0?r.vertexAttribIPointer(T,P,O,H,V):r.vertexAttribPointer(T,P,O,B,H,V)}function y(T,P,O,B){_();const H=B.attributes,V=O.getAttributes(),X=P.defaultAttributeValues;for(const G in V){const J=V[G];if(J.location>=0){let ft=H[G];if(ft===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),ft!==void 0){const lt=ft.normalized,pt=ft.itemSize,Wt=t.get(ft);if(Wt===void 0)continue;const zt=Wt.buffer,ve=Wt.type,pe=Wt.bytesPerElement,K=ve===r.INT||ve===r.UNSIGNED_INT||ft.gpuType===pc;if(ft.isInterleavedBufferAttribute){const $=ft.data,_t=$.stride,Bt=ft.offset;if($.isInstancedInterleavedBuffer){for(let Mt=0;Mt<J.locationSize;Mt++)p(J.location+Mt,$.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Mt=0;Mt<J.locationSize;Mt++)m(J.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let Mt=0;Mt<J.locationSize;Mt++)S(J.location+Mt,pt/J.locationSize,ve,lt,_t*pe,(Bt+pt/J.locationSize*Mt)*pe,K)}else{if(ft.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)p(J.location+$,ft.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let $=0;$<J.locationSize;$++)m(J.location+$);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let $=0;$<J.locationSize;$++)S(J.location+$,pt/J.locationSize,ve,lt,pt*pe,pt/J.locationSize*$*pe,K)}}else if(X!==void 0){const lt=X[G];if(lt!==void 0)switch(lt.length){case 2:r.vertexAttrib2fv(J.location,lt);break;case 3:r.vertexAttrib3fv(J.location,lt);break;case 4:r.vertexAttrib4fv(J.location,lt);break;default:r.vertexAttrib1fv(J.location,lt)}}}}M()}function E(){I();for(const T in i){const P=i[T];for(const O in P){const B=P[O];for(const H in B)h(B[H].object),delete B[H];delete P[O]}delete i[T]}}function w(T){if(i[T.id]===void 0)return;const P=i[T.id];for(const O in P){const B=P[O];for(const H in B)h(B[H].object),delete B[H];delete P[O]}delete i[T.id]}function R(T){for(const P in i){const O=i[P];if(O[T.id]===void 0)continue;const B=O[T.id];for(const H in B)h(B[H].object),delete B[H];delete O[T.id]}}function I(){v(),a=!0,s!==n&&(s=n,l(s.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:I,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function v0(r,t,e){let i;function n(l){i=l}function s(l,h){r.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function y0(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){return!(R!==si&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ni&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hi&&!I)}function c(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Ct("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,maxSamples:E,samples:w}}function M0(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Tn,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):l();else{const M=s?0:i,S=M*4;let y=p.clippingState||null;c.value=y,y=h(g,d,S,f);for(let E=0;E!==S;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==_;++S,y+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function S0(r){let t=new WeakMap;function e(a,o){return o===Mo?a.mapping=Cn:o===So&&(a.mapping=rs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mo||o===So)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new $h(c.height);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",n),e(l.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const cn=4,Xl=[.125,.215,.35,.446,.526,.582],An=20,T0=256,Ds=new lr,ql=new yt;let eo=null,io=0,no=0,so=!1;const b0=new A;class Yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:o=b0}=s;eo=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(eo,io,no),this._renderer.xr.enabled=so,t.scissorTest=!1,$n(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cn||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:ri,format:si,colorSpace:Ve,depthBuffer:!1},n=Kl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A0(s)),this._blurMaterial=w0(s,t,e),this._ggxMaterial=E0(s,t,e)}return n}_compileMaterial(t){const e=new et(new xe,t);this._renderer.compile(e,Ds)}_sceneToCubeUV(t,e,i,n,s){const c=new Ye(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ql),u.toneMapping=Pi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new Ke,new Zt({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(ql),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[S],s.y,s.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[S]));const E=this._cubeSize;$n(n,y*E,S>2?E:0,E,E),u.setRenderTarget(n),p&&u.render(_,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Cn||t.mapping===rs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;$n(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Ds)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-cn?i-g+cn:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,$n(s,m,p,3*_,2*_),n.setRenderTarget(s),n.render(o,Ds),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,$n(t,m,p,3*_,2*_),n.setRenderTarget(t),n.render(o,Ds)}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[n];u.material=l;const d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*An-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):An;m>An&&Ct(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${An}`);const p=[];let M=0;for(let R=0;R<An;++R){const I=R/_,v=Math.exp(-I*I/2);p.push(v),R===0?M+=v:R<m&&(M+=2*v)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const y=this._sizeLods[n],E=3*y*(n>S-cn?n-S+cn:0),w=4*(this._cubeSize-y);$n(e,E,w,3*y,2*y),c.setRenderTarget(e),c.render(u,Ds)}}function A0(r){const t=[],e=[],i=[];let n=r;const s=r-cn+1+Xl.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let c=1/o;a>r-cn?c=Xl[a-r+cn-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),S=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,I=w>2?0:-1,v=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];M.set(v,_*g*w),S.set(d,m*g*w);const T=[w,w,w,w,w,w];y.set(T,p*g*w)}const E=new xe;E.setAttribute("position",new ze(M,_)),E.setAttribute("uv",new ze(S,m)),E.setAttribute("faceIndex",new ze(y,p)),i.push(new et(E,null)),n>cn&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Kl(r,t,e){const i=new Ze(r,t,e);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $n(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function E0(r,t,e){return new ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function w0(r,t,e){const i=new Float32Array(An),n=new A(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function jl(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Zl(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}function C0(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Mo||c===So,h=c===Cn||c===rs;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Yl(r)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Yl(r)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function R0(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&tr("WebGLRenderer: "+i+" extension not supported."),n}}}function P0(r,t,e,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let S=0,y=M.length;S<y;S+=3){const E=M[S+0],w=M[S+1],R=M[S+2];d.push(E,w,w,R,R,E)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const E=S+0,w=S+1,R=S+2;d.push(E,w,w,R,R,E)}}else return;const m=new(Vh(d)?Kh:Yh)(d,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function I0(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(i,f,s,d*a),e.update(f,i,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,d*a,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function D0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function L0(r,t,e){const i=new WeakMap,n=new ge;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let T=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let E=o.attributes.position.count*y,w=1;E>t.maxTextureSize&&(w=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*w*4*u),I=new Wh(R,E,w,u);I.type=hi,I.needsUpdate=!0;const v=y*4;for(let P=0;P<u;P++){const O=p[P],B=M[P],H=S[P],V=E*w*4*P;for(let X=0;X<O.count;X++){const G=X*v;g===!0&&(n.fromBufferAttribute(O,X),R[V+G+0]=n.x,R[V+G+1]=n.y,R[V+G+2]=n.z,R[V+G+3]=0),_===!0&&(n.fromBufferAttribute(B,X),R[V+G+4]=n.x,R[V+G+5]=n.y,R[V+G+6]=n.z,R[V+G+7]=0),m===!0&&(n.fromBufferAttribute(H,X),R[V+G+8]=n.x,R[V+G+9]=n.y,R[V+G+10]=n.z,R[V+G+11]=H.itemSize===4?n.w:1)}}d={count:u,texture:I,size:new nt(E,w)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function N0(r,t,e,i){let n=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;n.get(d)!==l&&(d.update(),n.set(d,l))}return u}function a(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const U0={[Ah]:"LINEAR_TONE_MAPPING",[Eh]:"REINHARD_TONE_MAPPING",[wh]:"CINEON_TONE_MAPPING",[fc]:"ACES_FILMIC_TONE_MAPPING",[Rh]:"AGX_TONE_MAPPING",[Ph]:"NEUTRAL_TONE_MAPPING",[Ch]:"CUSTOM_TONE_MAPPING"};function O0(r,t,e,i,n){const s=new Ze(t,e,{type:r,depthBuffer:i,stencilBuffer:n}),a=new Ze(t,e,{type:ri,depthBuffer:!1,stencilBuffer:!1}),o=new xe;o.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const c=new ip({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new et(o,c),h=new lr(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(M,S){s.setSize(M,S),a.setSize(M,S);for(let y=0;y<m.length;y++){const E=m[y];E.setSize&&E.setSize(M,S)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const S=s.width,y=s.height;for(let E=0;E<m.length;E++){const w=m[E];w.setSize&&w.setSize(S,y)}},this.begin=function(M,S){if(f||M.toneMapping===Pi&&m.length===0)return!1;if(_=S,S!==null){const y=S.width,E=S.height;(s.width!==y||s.height!==E)&&this.setSize(y,E)}return p===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=Pi,!0},this.hasRenderPass=function(){return p},this.end=function(M,S){M.toneMapping=g,f=!0;let y=s,E=a;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(M,E,y,S),R.needsSwap!==!1)){const I=y;y=E,E=I}}if(u!==M.outputColorSpace||d!==M.toneMapping){u=M.outputColorSpace,d=M.toneMapping,c.defines={},jt.getTransfer(u)===ae&&(c.defines.SRGB_TRANSFER="");const w=U0[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(_),M.render(l,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Tu=new Le,cc=new er(1,1),bu=new Wh,Au=new qd,Eu=new Jh,Jl=[],$l=[],Ql=new Float32Array(16),th=new Float32Array(9),eh=new Float32Array(4);function ys(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=Jl[n];if(s===void 0&&(s=new Float32Array(n),Jl[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ne(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ue(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function va(r,t){let e=$l[t];e===void 0&&(e=new Int32Array(t),$l[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function B0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function F0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2fv(this.addr,t),Ue(e,t)}}function k0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;r.uniform3fv(this.addr,t),Ue(e,t)}}function z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4fv(this.addr,t),Ue(e,t)}}function G0(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;eh.set(i),r.uniformMatrix2fv(this.addr,!1,eh),Ue(e,i)}}function H0(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;th.set(i),r.uniformMatrix3fv(this.addr,!1,th),Ue(e,i)}}function V0(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;Ql.set(i),r.uniformMatrix4fv(this.addr,!1,Ql),Ue(e,i)}}function W0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function X0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2iv(this.addr,t),Ue(e,t)}}function q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3iv(this.addr,t),Ue(e,t)}}function Y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4iv(this.addr,t),Ue(e,t)}}function K0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function j0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2uiv(this.addr,t),Ue(e,t)}}function Z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3uiv(this.addr,t),Ue(e,t)}}function J0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4uiv(this.addr,t),Ue(e,t)}}function $0(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(cc.compareFunction=e.isReversedDepthBuffer()?Tc:Sc,s=cc):s=Tu,e.setTexture2D(t||s,n)}function Q0(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Au,n)}function t_(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Eu,n)}function e_(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||bu,n)}function i_(r){switch(r){case 5126:return B0;case 35664:return F0;case 35665:return k0;case 35666:return z0;case 35674:return G0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return K0;case 36294:return j0;case 36295:return Z0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}function n_(r,t){r.uniform1fv(this.addr,t)}function s_(r,t){const e=ys(t,this.size,2);r.uniform2fv(this.addr,e)}function r_(r,t){const e=ys(t,this.size,3);r.uniform3fv(this.addr,e)}function a_(r,t){const e=ys(t,this.size,4);r.uniform4fv(this.addr,e)}function o_(r,t){const e=ys(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function c_(r,t){const e=ys(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function l_(r,t){const e=ys(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function h_(r,t){r.uniform1iv(this.addr,t)}function u_(r,t){r.uniform2iv(this.addr,t)}function d_(r,t){r.uniform3iv(this.addr,t)}function f_(r,t){r.uniform4iv(this.addr,t)}function p_(r,t){r.uniform1uiv(this.addr,t)}function m_(r,t){r.uniform2uiv(this.addr,t)}function g_(r,t){r.uniform3uiv(this.addr,t)}function __(r,t){r.uniform4uiv(this.addr,t)}function x_(r,t,e){const i=this.cache,n=t.length,s=va(e,n);Ne(i,s)||(r.uniform1iv(this.addr,s),Ue(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=cc:a=Tu;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function v_(r,t,e){const i=this.cache,n=t.length,s=va(e,n);Ne(i,s)||(r.uniform1iv(this.addr,s),Ue(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Au,s[a])}function y_(r,t,e){const i=this.cache,n=t.length,s=va(e,n);Ne(i,s)||(r.uniform1iv(this.addr,s),Ue(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Eu,s[a])}function M_(r,t,e){const i=this.cache,n=t.length,s=va(e,n);Ne(i,s)||(r.uniform1iv(this.addr,s),Ue(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||bu,s[a])}function S_(r){switch(r){case 5126:return n_;case 35664:return s_;case 35665:return r_;case 35666:return a_;case 35674:return o_;case 35675:return c_;case 35676:return l_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}class T_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=i_(e.type)}}class b_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S_(e.type)}}class A_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function ih(r,t){r.seq.push(t),r.map[t.id]=t}function E_(r,t,e){const i=r.name,n=i.length;for(ro.lastIndex=0;;){const s=ro.exec(i),a=ro.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){ih(e,l===void 0?new T_(o,r,t):new b_(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new A_(o),ih(e,u)),e=u}}}class Qr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);E_(o,c,this)}const n=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function nh(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const w_=37297;let C_=0;function R_(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const sh=new Ft;function P_(r){jt._getMatrix(sh,jt.workingColorSpace,r);const t=`mat3( ${sh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(r)){case na:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function rh(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+R_(r.getShaderSource(t),o)}else return s}function I_(r,t){const e=P_(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const D_={[Ah]:"Linear",[Eh]:"Reinhard",[wh]:"Cineon",[fc]:"ACESFilmic",[Rh]:"AgX",[Ph]:"Neutral",[Ch]:"Custom"};function L_(r,t){const e=D_[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new A;function N_(){jt.getLuminanceCoefficients(Xr);const r=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function O_(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function B_(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ks(r){return r!==""}function ah(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const F_=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(r){return r.replace(F_,z_)}const k_=new Map;function z_(r,t){let e=kt[t];if(e===void 0){const i=k_.get(t);if(i!==void 0)e=kt[i],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return lc(e)}const G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(r){return r.replace(G_,H_)}function H_(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function lh(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const V_={[Yr]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function W_(r){return V_[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const X_={[Cn]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function q_(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":X_[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Y_={[rs]:"ENVMAP_MODE_REFRACTION"};function K_(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Y_[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const j_={[bh]:"ENVMAP_BLENDING_MULTIPLY",[cd]:"ENVMAP_BLENDING_MIX",[ld]:"ENVMAP_BLENDING_ADD"};function Z_(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":j_[r.combine]||"ENVMAP_BLENDING_NONE"}function J_(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function $_(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=W_(e),l=q_(e),h=K_(e),u=Z_(e),d=J_(e),f=U_(e),g=O_(s),_=n.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(m=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?kt.tonemapping_pars_fragment:"",e.toneMapping!==Pi?L_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,I_("linearToOutputTexel",e.outputColorSpace),N_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),a=lc(a),a=ah(a,e),a=oh(a,e),o=lc(o),o=ah(o,e),o=oh(o,e),a=ch(a),o=ch(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+a,y=M+p+o,E=nh(n,n.VERTEX_SHADER,S),w=nh(n,n.FRAGMENT_SHADER,y);n.attachShader(_,E),n.attachShader(_,w),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function R(P){if(r.debug.checkShaderErrors){const O=n.getProgramInfoLog(_)||"",B=n.getShaderInfoLog(E)||"",H=n.getShaderInfoLog(w)||"",V=O.trim(),X=B.trim(),G=H.trim();let J=!0,ft=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,E,w);else{const lt=rh(n,E,"vertex"),pt=rh(n,w,"fragment");It("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+lt+`
`+pt)}else V!==""?Ct("WebGLProgram: Program Info Log:",V):(X===""||G==="")&&(ft=!1);ft&&(P.diagnostics={runnable:J,programLog:V,vertexShader:{log:X,prefix:m},fragmentShader:{log:G,prefix:p}})}n.deleteShader(E),n.deleteShader(w),I=new Qr(n,_),v=B_(n,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=n.getProgramParameter(_,w_)),T},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let Q_=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ex(t),e.set(t,i)),i}}class ex{constructor(t){this.id=Q_++,this.code=t,this.usedTimes=0}}function ix(r,t,e,i,n,s,a){const o=new Xh,c=new tx,l=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,T,P,O,B){const H=O.fog,V=B.geometry,X=v.isMeshStandardMaterial?O.environment:null,G=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),J=G&&G.mapping===ma?G.image.height:null,ft=g[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Ct("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=lt!==void 0?lt.length:0;let Wt=0;V.morphAttributes.position!==void 0&&(Wt=1),V.morphAttributes.normal!==void 0&&(Wt=2),V.morphAttributes.color!==void 0&&(Wt=3);let zt,ve,pe,K;if(ft){const se=Ei[ft];zt=se.vertexShader,ve=se.fragmentShader}else zt=v.vertexShader,ve=v.fragmentShader,c.update(v),pe=c.getVertexShaderID(v),K=c.getFragmentShaderID(v);const $=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),Bt=B.isInstancedMesh===!0,Mt=B.isBatchedMesh===!0,$t=!!v.map,Oe=!!v.matcap,Jt=!!G,ne=!!v.aoMap,le=!!v.lightMap,Gt=!!v.bumpMap,we=!!v.normalMap,D=!!v.displacementMap,Ce=!!v.emissiveMap,ee=!!v.metalnessMap,ue=!!v.roughnessMap,Tt=v.anisotropy>0,C=v.clearcoat>0,x=v.dispersion>0,N=v.iridescence>0,Y=v.sheen>0,Z=v.transmission>0,q=Tt&&!!v.anisotropyMap,At=C&&!!v.clearcoatMap,rt=C&&!!v.clearcoatNormalMap,St=C&&!!v.clearcoatRoughnessMap,Nt=N&&!!v.iridescenceMap,tt=N&&!!v.iridescenceThicknessMap,ot=Y&&!!v.sheenColorMap,vt=Y&&!!v.sheenRoughnessMap,bt=!!v.specularMap,at=!!v.specularColorMap,Ht=!!v.specularIntensityMap,L=Z&&!!v.transmissionMap,dt=Z&&!!v.thicknessMap,it=!!v.gradientMap,mt=!!v.alphaMap,Q=v.alphaTest>0,j=!!v.alphaHash,st=!!v.extensions;let Ut=Pi;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const de={shaderID:ft,shaderType:v.type,shaderName:v.name,vertexShader:zt,fragmentShader:ve,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&B._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&B.instanceColor!==null,instancingMorph:Bt&&B.morphTexture!==null,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ve,alphaToCoverage:!!v.alphaToCoverage,map:$t,matcap:Oe,envMap:Jt,envMapMode:Jt&&G.mapping,envMapCubeUVHeight:J,aoMap:ne,lightMap:le,bumpMap:Gt,normalMap:we,displacementMap:D,emissiveMap:Ce,normalMapObjectSpace:we&&v.normalMapType===md,normalMapTangentSpace:we&&v.normalMapType===Hh,metalnessMap:ee,roughnessMap:ue,anisotropy:Tt,anisotropyMap:q,clearcoat:C,clearcoatMap:At,clearcoatNormalMap:rt,clearcoatRoughnessMap:St,dispersion:x,iridescence:N,iridescenceMap:Nt,iridescenceThicknessMap:tt,sheen:Y,sheenColorMap:ot,sheenRoughnessMap:vt,specularMap:bt,specularColorMap:at,specularIntensityMap:Ht,transmission:Z,transmissionMap:L,thicknessMap:dt,gradientMap:it,opaque:v.transparent===!1&&v.blending===es&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:Q,alphaHash:j,combine:v.combine,mapUv:$t&&_(v.map.channel),aoMapUv:ne&&_(v.aoMap.channel),lightMapUv:le&&_(v.lightMap.channel),bumpMapUv:Gt&&_(v.bumpMap.channel),normalMapUv:we&&_(v.normalMap.channel),displacementMapUv:D&&_(v.displacementMap.channel),emissiveMapUv:Ce&&_(v.emissiveMap.channel),metalnessMapUv:ee&&_(v.metalnessMap.channel),roughnessMapUv:ue&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:At&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(v.sheenRoughnessMap.channel),specularMapUv:bt&&_(v.specularMap.channel),specularColorMapUv:at&&_(v.specularColorMap.channel),specularIntensityMapUv:Ht&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:dt&&_(v.thicknessMap.channel),alphaMapUv:mt&&_(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(we||Tt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&($t||mt),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Wt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:$t&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:Ce&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===me,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||Mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)T.push(P),T.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(M(T,v),S(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function M(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const T=g[v.type];let P;if(T){const O=Ei[T];P=aa.clone(O.uniforms)}else P=v.uniforms;return P}function E(v,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new $_(r,T,v,s),h.push(P),u.set(T,P)),P}function w(v){if(--v.usedTimes===0){const T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){c.remove(v)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:I}}function nx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function sx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function hh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function uh(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||sx),i.length>1&&i.sort(d||hh),n.length>1&&n.sort(d||hh)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:c,finish:h,sort:l}}function rx(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new uh,r.set(i,[a])):n>=s.length?(a=new uh,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function ax(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new yt};break;case"SpotLight":e={position:new A,direction:new A,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new A,halfWidth:new A,halfHeight:new A};break}return r[t.id]=e,e}}}function ox(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let cx=0;function lx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function hx(r){const t=new ax,e=ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const n=new A,s=new Ot,a=new Ot;function o(l){let h=0,u=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,S=0,y=0,E=0,w=0,R=0;l.sort(lx);for(let v=0,T=l.length;v<T;v++){const P=l[v],O=P.color,B=P.intensity,H=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===as?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],B);R++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,J=e.get(P);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.directionalShadow[f]=J,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=P.shadow.matrix,M++}i.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(B),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[_]=X;const G=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,G.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=G.matrix,P.castShadow){const J=e.get(P);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=V,y++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const G=P.shadow,J=e.get(P);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(B),X.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==y||I.numSpotMaps!==E||I.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=y,I.numSpotMaps=E,I.numLightProbes=R,i.version=cx++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const S=l[p];if(S.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),u++}else if(S.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function dh(r){const t=new hx(r),e=[],i=[];function n(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function ux(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new dh(r),t.set(n,[o])):s>=a.length?(o=new dh(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`,px=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],mx=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],fh=new Ot,Ls=new A,ao=new A;function gx(r,t,e){let i=new Rc;const n=new nt,s=new nt,a=new ge,o=new np,c=new sp,l={},h=e.maxTextureSize,u={[Zi]:je,[je]:Zi,[me]:me},d=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:dx,fragmentShader:fx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let p=this.type;this.render=function(w,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Th&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Yr);const v=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Ri),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==this.type;B&&R.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=w.length;H<V;H++){const X=w[H],G=X.shadow;if(G===void 0){Ct("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const J=G.getFrameExtents();if(n.multiply(J),s.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/J.x),n.x=s.x*J.x,G.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/J.y),n.y=s.y*J.y,G.mapSize.y=s.y)),G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Os){if(X.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ze(n.x,n.y,{format:as,type:ri,minFilter:Ee,magFilter:Ee,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new er(n.x,n.y,hi),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Ji,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ie,G.map.depthTexture.magFilter=Ie}else{X.isPointLight?(G.map=new $h(n.x),G.map.depthTexture=new Tf(n.x,Di)):(G.map=new Ze(n.x,n.y),G.map.depthTexture=new er(n.x,n.y,Di)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Ji;const lt=r.state.buffers.depth.getReversed();this.type===Yr?(G.map.depthTexture.compareFunction=lt?Tc:Sc,G.map.depthTexture.minFilter=Ee,G.map.depthTexture.magFilter=Ee):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ie,G.map.depthTexture.magFilter=Ie)}G.camera.updateProjectionMatrix()}const ft=G.map.isWebGLCubeRenderTarget?6:1;for(let lt=0;lt<ft;lt++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,lt),r.clear();else{lt===0&&(r.setRenderTarget(G.map),r.clear());const pt=G.getViewport(lt);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),O.viewport(a)}if(X.isPointLight){const pt=G.camera,Wt=G.matrix,zt=X.distance||pt.far;zt!==pt.far&&(pt.far=zt,pt.updateProjectionMatrix()),Ls.setFromMatrixPosition(X.matrixWorld),pt.position.copy(Ls),ao.copy(pt.position),ao.add(px[lt]),pt.up.copy(mx[lt]),pt.lookAt(ao),pt.updateMatrixWorld(),Wt.makeTranslation(-Ls.x,-Ls.y,-Ls.z),fh.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(fh,pt.coordinateSystem,pt.reversedDepth)}else G.updateMatrices(X);i=G.getFrustum(),y(R,I,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Os&&M(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,T,P)};function M(w,R){const I=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ze(n.x,n.y,{format:as,type:ri})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(R,null,I,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(R,null,I,f,_,null)}function S(w,R,I,v){let T=null;const P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=I.isPointLight===!0?c:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=T.uuid,B=R.uuid;let H=l[O];H===void 0&&(H={},l[O]=H);let V=H[B];V===void 0&&(V=T.clone(),H[B]=V,R.addEventListener("dispose",E)),T=V}if(T.visible=R.visible,T.wireframe=R.wireframe,v===Os?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const O=r.properties.get(T);O.light=I}return T}function y(w,R,I,v,T){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Os)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const B=t.update(w),H=w.material;if(Array.isArray(H)){const V=B.groups;for(let X=0,G=V.length;X<G;X++){const J=V[X],ft=H[J.materialIndex];if(ft&&ft.visible){const lt=S(w,ft,v,T);w.onBeforeShadow(r,w,R,I,B,lt,J),r.renderBufferDirect(I,null,B,lt,w,J),w.onAfterShadow(r,w,R,I,B,lt,J)}}}else if(H.visible){const V=S(w,H,v,T);w.onBeforeShadow(r,w,R,I,B,V,null),r.renderBufferDirect(I,null,B,V,w,null),w.onAfterShadow(r,w,R,I,B,V,null)}}const O=w.children;for(let B=0,H=O.length;B<H;B++)y(O[B],R,I,v,T)}function E(w){w.target.removeEventListener("dispose",E);for(const I in l){const v=l[I],T=w.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}const _x={[po]:mo,[go]:vo,[_o]:yo,[ss]:xo,[mo]:po,[vo]:go,[yo]:_o,[xo]:ss};function xx(r,t){function e(){let L=!1;const dt=new ge;let it=null;const mt=new ge(0,0,0,0);return{setMask:function(Q){it!==Q&&!L&&(r.colorMask(Q,Q,Q,Q),it=Q)},setLocked:function(Q){L=Q},setClear:function(Q,j,st,Ut,de){de===!0&&(Q*=Ut,j*=Ut,st*=Ut),dt.set(Q,j,st,Ut),mt.equals(dt)===!1&&(r.clearColor(Q,j,st,Ut),mt.copy(dt))},reset:function(){L=!1,it=null,mt.set(-1,0,0,0)}}}function i(){let L=!1,dt=!1,it=null,mt=null,Q=null;return{setReversed:function(j){if(dt!==j){const st=t.get("EXT_clip_control");j?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),dt=j;const Ut=Q;Q=null,this.setClear(Ut)}},getReversed:function(){return dt},setTest:function(j){j?$(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(j){it!==j&&!L&&(r.depthMask(j),it=j)},setFunc:function(j){if(dt&&(j=_x[j]),mt!==j){switch(j){case po:r.depthFunc(r.NEVER);break;case mo:r.depthFunc(r.ALWAYS);break;case go:r.depthFunc(r.LESS);break;case ss:r.depthFunc(r.LEQUAL);break;case _o:r.depthFunc(r.EQUAL);break;case xo:r.depthFunc(r.GEQUAL);break;case vo:r.depthFunc(r.GREATER);break;case yo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=j}},setLocked:function(j){L=j},setClear:function(j){Q!==j&&(dt&&(j=1-j),r.clearDepth(j),Q=j)},reset:function(){L=!1,it=null,mt=null,Q=null,dt=!1}}}function n(){let L=!1,dt=null,it=null,mt=null,Q=null,j=null,st=null,Ut=null,de=null;return{setTest:function(se){L||(se?$(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(se){dt!==se&&!L&&(r.stencilMask(se),dt=se)},setFunc:function(se,Si,Fi){(it!==se||mt!==Si||Q!==Fi)&&(r.stencilFunc(se,Si,Fi),it=se,mt=Si,Q=Fi)},setOp:function(se,Si,Fi){(j!==se||st!==Si||Ut!==Fi)&&(r.stencilOp(se,Si,Fi),j=se,st=Si,Ut=Fi)},setLocked:function(se){L=se},setClear:function(se){de!==se&&(r.clearStencil(se),de=se)},reset:function(){L=!1,dt=null,it=null,mt=null,Q=null,j=null,st=null,Ut=null,de=null}}}const s=new e,a=new i,o=new n,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,y=null,E=null,w=null,R=new yt(0,0,0),I=0,v=!1,T=null,P=null,O=null,B=null,H=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=G>=2);let ft=null,lt={};const pt=r.getParameter(r.SCISSOR_BOX),Wt=r.getParameter(r.VIEWPORT),zt=new ge().fromArray(pt),ve=new ge().fromArray(Wt);function pe(L,dt,it,mt){const Q=new Uint8Array(4),j=r.createTexture();r.bindTexture(L,j),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<it;st++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(dt,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(dt+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return j}const K={};K[r.TEXTURE_2D]=pe(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(r.DEPTH_TEST),a.setFunc(ss),Gt(!1),we(jc),$(r.CULL_FACE),ne(Ri);function $(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function _t(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Bt(L,dt){return u[L]!==dt?(r.bindFramebuffer(L,dt),u[L]=dt,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=dt),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=dt),!0):!1}function Mt(L,dt){let it=f,mt=!1;if(L){it=d.get(dt),it===void 0&&(it=[],d.set(dt,it));const Q=L.textures;if(it.length!==Q.length||it[0]!==r.COLOR_ATTACHMENT0){for(let j=0,st=Q.length;j<st;j++)it[j]=r.COLOR_ATTACHMENT0+j;it.length=Q.length,mt=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,mt=!0);mt&&r.drawBuffers(it)}function $t(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Oe={[bn]:r.FUNC_ADD,[Xu]:r.FUNC_SUBTRACT,[qu]:r.FUNC_REVERSE_SUBTRACT};Oe[Yu]=r.MIN,Oe[Ku]=r.MAX;const Jt={[ju]:r.ZERO,[Zu]:r.ONE,[Ju]:r.SRC_COLOR,[uo]:r.SRC_ALPHA,[nd]:r.SRC_ALPHA_SATURATE,[ed]:r.DST_COLOR,[Qu]:r.DST_ALPHA,[$u]:r.ONE_MINUS_SRC_COLOR,[fo]:r.ONE_MINUS_SRC_ALPHA,[id]:r.ONE_MINUS_DST_COLOR,[td]:r.ONE_MINUS_DST_ALPHA,[sd]:r.CONSTANT_COLOR,[rd]:r.ONE_MINUS_CONSTANT_COLOR,[ad]:r.CONSTANT_ALPHA,[od]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(L,dt,it,mt,Q,j,st,Ut,de,se){if(L===Ri){_===!0&&(_t(r.BLEND),_=!1);return}if(_===!1&&($(r.BLEND),_=!0),L!==Wu){if(L!==m||se!==v){if((p!==bn||y!==bn)&&(r.blendEquation(r.FUNC_ADD),p=bn,y=bn),se)switch(L){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xi:r.blendFunc(r.ONE,r.ONE);break;case Zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:It("WebGLState: Invalid blending: ",L);break}else switch(L){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Zc:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",L);break}M=null,S=null,E=null,w=null,R.set(0,0,0),I=0,m=L,v=se}return}Q=Q||dt,j=j||it,st=st||mt,(dt!==p||Q!==y)&&(r.blendEquationSeparate(Oe[dt],Oe[Q]),p=dt,y=Q),(it!==M||mt!==S||j!==E||st!==w)&&(r.blendFuncSeparate(Jt[it],Jt[mt],Jt[j],Jt[st]),M=it,S=mt,E=j,w=st),(Ut.equals(R)===!1||de!==I)&&(r.blendColor(Ut.r,Ut.g,Ut.b,de),R.copy(Ut),I=de),m=L,v=!1}function le(L,dt){L.side===me?_t(r.CULL_FACE):$(r.CULL_FACE);let it=L.side===je;dt&&(it=!it),Gt(it),L.blending===es&&L.transparent===!1?ne(Ri):ne(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const mt=L.stencilWrite;o.setTest(mt),mt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){T!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),T=L)}function we(L){L!==Hu?($(r.CULL_FACE),L!==P&&(L===jc?r.cullFace(r.BACK):L===Vu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),P=L}function D(L){L!==O&&(X&&r.lineWidth(L),O=L)}function Ce(L,dt,it){L?($(r.POLYGON_OFFSET_FILL),(B!==dt||H!==it)&&(r.polygonOffset(dt,it),B=dt,H=it)):_t(r.POLYGON_OFFSET_FILL)}function ee(L){L?$(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function ue(L){L===void 0&&(L=r.TEXTURE0+V-1),ft!==L&&(r.activeTexture(L),ft=L)}function Tt(L,dt,it){it===void 0&&(ft===null?it=r.TEXTURE0+V-1:it=ft);let mt=lt[it];mt===void 0&&(mt={type:void 0,texture:void 0},lt[it]=mt),(mt.type!==L||mt.texture!==dt)&&(ft!==it&&(r.activeTexture(it),ft=it),r.bindTexture(L,dt||K[L]),mt.type=L,mt.texture=dt)}function C(){const L=lt[ft];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(L){It("WebGLState:",L)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(L){It("WebGLState:",L)}}function Y(){try{r.texSubImage2D(...arguments)}catch(L){It("WebGLState:",L)}}function Z(){try{r.texSubImage3D(...arguments)}catch(L){It("WebGLState:",L)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(L){It("WebGLState:",L)}}function At(){try{r.compressedTexSubImage3D(...arguments)}catch(L){It("WebGLState:",L)}}function rt(){try{r.texStorage2D(...arguments)}catch(L){It("WebGLState:",L)}}function St(){try{r.texStorage3D(...arguments)}catch(L){It("WebGLState:",L)}}function Nt(){try{r.texImage2D(...arguments)}catch(L){It("WebGLState:",L)}}function tt(){try{r.texImage3D(...arguments)}catch(L){It("WebGLState:",L)}}function ot(L){zt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),zt.copy(L))}function vt(L){ve.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ve.copy(L))}function bt(L,dt){let it=l.get(dt);it===void 0&&(it=new WeakMap,l.set(dt,it));let mt=it.get(L);mt===void 0&&(mt=r.getUniformBlockIndex(dt,L.name),it.set(L,mt))}function at(L,dt){const mt=l.get(dt).get(L);c.get(dt)!==mt&&(r.uniformBlockBinding(dt,mt,L.__bindingPointIndex),c.set(dt,mt))}function Ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ft=null,lt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,y=null,E=null,w=null,R=new yt(0,0,0),I=0,v=!1,T=null,P=null,O=null,B=null,H=null,zt.set(0,0,r.canvas.width,r.canvas.height),ve.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:_t,bindFramebuffer:Bt,drawBuffers:Mt,useProgram:$t,setBlending:ne,setMaterial:le,setFlipSided:Gt,setCullFace:we,setLineWidth:D,setPolygonOffset:Ce,setScissorTest:ee,activeTexture:ue,bindTexture:Tt,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Nt,texImage3D:tt,updateUBOMapping:bt,uniformBlockBinding:at,texStorage2D:rt,texStorage3D:St,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:At,scissor:ot,viewport:vt,reset:Ht}}function vx(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return f?new OffscreenCanvas(C,x):Qs("canvas")}function _(C,x,N){let Y=1;const Z=Tt(C);if((Z.width>N||Z.height>N)&&(Y=N/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(Y*Z.width),At=Math.floor(Y*Z.height);u===void 0&&(u=g(q,At));const rt=x?g(q,At):u;return rt.width=q,rt.height=At,rt.getContext("2d").drawImage(C,0,0,q,At),Ct("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+At+")."),rt}else return"data"in C&&Ct("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,x,N,Y,Z=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=x;if(x===r.RED&&(N===r.FLOAT&&(q=r.R32F),N===r.HALF_FLOAT&&(q=r.R16F),N===r.UNSIGNED_BYTE&&(q=r.R8)),x===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(q=r.R8UI),N===r.UNSIGNED_SHORT&&(q=r.R16UI),N===r.UNSIGNED_INT&&(q=r.R32UI),N===r.BYTE&&(q=r.R8I),N===r.SHORT&&(q=r.R16I),N===r.INT&&(q=r.R32I)),x===r.RG&&(N===r.FLOAT&&(q=r.RG32F),N===r.HALF_FLOAT&&(q=r.RG16F),N===r.UNSIGNED_BYTE&&(q=r.RG8)),x===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(q=r.RG8UI),N===r.UNSIGNED_SHORT&&(q=r.RG16UI),N===r.UNSIGNED_INT&&(q=r.RG32UI),N===r.BYTE&&(q=r.RG8I),N===r.SHORT&&(q=r.RG16I),N===r.INT&&(q=r.RG32I)),x===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(q=r.RGB8UI),N===r.UNSIGNED_SHORT&&(q=r.RGB16UI),N===r.UNSIGNED_INT&&(q=r.RGB32UI),N===r.BYTE&&(q=r.RGB8I),N===r.SHORT&&(q=r.RGB16I),N===r.INT&&(q=r.RGB32I)),x===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),N===r.UNSIGNED_INT&&(q=r.RGBA32UI),N===r.BYTE&&(q=r.RGBA8I),N===r.SHORT&&(q=r.RGBA16I),N===r.INT&&(q=r.RGBA32I)),x===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),x===r.RGBA){const At=Z?na:jt.getTransfer(Y);N===r.FLOAT&&(q=r.RGBA32F),N===r.HALF_FLOAT&&(q=r.RGBA16F),N===r.UNSIGNED_BYTE&&(q=At===ae?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(C,x){let N;return C?x===null||x===Di||x===Zs?N=r.DEPTH24_STENCIL8:x===hi?N=r.DEPTH32F_STENCIL8:x===js&&(N=r.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Di||x===Zs?N=r.DEPTH_COMPONENT24:x===hi?N=r.DEPTH_COMPONENT32F:x===js&&(N=r.DEPTH_COMPONENT16),N}function E(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ie&&C.minFilter!==Ee?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function w(C){const x=C.target;x.removeEventListener("dispose",w),I(x),x.isVideoTexture&&h.delete(x)}function R(C){const x=C.target;x.removeEventListener("dispose",R),T(x)}function I(C){const x=i.get(C);if(x.__webglInit===void 0)return;const N=C.source,Y=d.get(N);if(Y){const Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&v(C),Object.keys(Y).length===0&&d.delete(N)}i.remove(C)}function v(C){const x=i.get(C);r.deleteTexture(x.__webglTexture);const N=C.source,Y=d.get(N);delete Y[x.__cacheKey],a.memory.textures--}function T(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Z=0;Z<x.__webglFramebuffer[Y].length;Z++)r.deleteFramebuffer(x.__webglFramebuffer[Y][Z]);else r.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)r.deleteFramebuffer(x.__webglFramebuffer[Y]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=C.textures;for(let Y=0,Z=N.length;Y<Z;Y++){const q=i.get(N[Y]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(N[Y])}i.remove(C)}let P=0;function O(){P=0}function B(){const C=P;return C>=n.maxTextures&&Ct("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),P+=1,C}function H(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function V(C,x){const N=i.get(C);if(C.isVideoTexture&&ee(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const Y=C.image;if(Y===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{K(N,C,x);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+x)}function X(C,x){const N=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){K(N,C,x);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+x)}function G(C,x){const N=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){K(N,C,x);return}e.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+x)}function J(C,x){const N=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){$(N,C,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+x)}const ft={[Ii]:r.REPEAT,[wi]:r.CLAMP_TO_EDGE,[ea]:r.MIRRORED_REPEAT},lt={[Ie]:r.NEAREST,[Dh]:r.NEAREST_MIPMAP_NEAREST,[Bs]:r.NEAREST_MIPMAP_LINEAR,[Ee]:r.LINEAR,[Kr]:r.LINEAR_MIPMAP_NEAREST,[Yi]:r.LINEAR_MIPMAP_LINEAR},pt={[gd]:r.NEVER,[Md]:r.ALWAYS,[_d]:r.LESS,[Sc]:r.LEQUAL,[xd]:r.EQUAL,[Tc]:r.GEQUAL,[vd]:r.GREATER,[yd]:r.NOTEQUAL};function Wt(C,x){if(x.type===hi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ee||x.magFilter===Kr||x.magFilter===Bs||x.magFilter===Yi||x.minFilter===Ee||x.minFilter===Kr||x.minFilter===Bs||x.minFilter===Yi)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ft[x.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ft[x.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ft[x.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,lt[x.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ie||x.minFilter!==Bs&&x.minFilter!==Yi||x.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function zt(C,x){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",w));const Y=x.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const q=H(x);if(q!==C.__cacheKey){Z[q]===void 0&&(Z[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[q].usedTimes++;const At=Z[C.__cacheKey];At!==void 0&&(Z[C.__cacheKey].usedTimes--,At.usedTimes===0&&v(x)),C.__cacheKey=q,C.__webglTexture=Z[q].texture}return N}function ve(C,x,N){return Math.floor(Math.floor(C/N)/x)}function pe(C,x,N,Y){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,N,Y,x.data);else{q.sort((tt,ot)=>tt.start-ot.start);let At=0;for(let tt=1;tt<q.length;tt++){const ot=q[At],vt=q[tt],bt=ot.start+ot.count,at=ve(vt.start,x.width,4),Ht=ve(ot.start,x.width,4);vt.start<=bt+1&&at===Ht&&ve(vt.start+vt.count-1,x.width,4)===at?ot.count=Math.max(ot.count,vt.start+vt.count-ot.start):(++At,q[At]=vt)}q.length=At+1;const rt=r.getParameter(r.UNPACK_ROW_LENGTH),St=r.getParameter(r.UNPACK_SKIP_PIXELS),Nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let tt=0,ot=q.length;tt<ot;tt++){const vt=q[tt],bt=Math.floor(vt.start/4),at=Math.ceil(vt.count/4),Ht=bt%x.width,L=Math.floor(bt/x.width),dt=at,it=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ht),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),e.texSubImage2D(r.TEXTURE_2D,0,Ht,L,dt,it,N,Y,x.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,St),r.pixelStorei(r.UNPACK_SKIP_ROWS,Nt)}}function K(C,x,N){let Y=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=r.TEXTURE_3D);const Z=zt(C,x),q=x.source;e.bindTexture(Y,C.__webglTexture,r.TEXTURE0+N);const At=i.get(q);if(q.version!==At.__version||Z===!0){e.activeTexture(r.TEXTURE0+N);const rt=jt.getPrimaries(jt.workingColorSpace),St=x.colorSpace===on?null:jt.getPrimaries(x.colorSpace),Nt=x.colorSpace===on||rt===St?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let tt=_(x.image,!1,n.maxTextureSize);tt=ue(x,tt);const ot=s.convert(x.format,x.colorSpace),vt=s.convert(x.type);let bt=S(x.internalFormat,ot,vt,x.colorSpace,x.isVideoTexture);Wt(Y,x);let at;const Ht=x.mipmaps,L=x.isVideoTexture!==!0,dt=At.__version===void 0||Z===!0,it=q.dataReady,mt=E(x,tt);if(x.isDepthTexture)bt=y(x.format===En,x.type),dt&&(L?e.texStorage2D(r.TEXTURE_2D,1,bt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,bt,tt.width,tt.height,0,ot,vt,null));else if(x.isDataTexture)if(Ht.length>0){L&&dt&&e.texStorage2D(r.TEXTURE_2D,mt,bt,Ht[0].width,Ht[0].height);for(let Q=0,j=Ht.length;Q<j;Q++)at=Ht[Q],L?it&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,at.width,at.height,ot,vt,at.data):e.texImage2D(r.TEXTURE_2D,Q,bt,at.width,at.height,0,ot,vt,at.data);x.generateMipmaps=!1}else L?(dt&&e.texStorage2D(r.TEXTURE_2D,mt,bt,tt.width,tt.height),it&&pe(x,tt,ot,vt)):e.texImage2D(r.TEXTURE_2D,0,bt,tt.width,tt.height,0,ot,vt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,bt,Ht[0].width,Ht[0].height,tt.depth);for(let Q=0,j=Ht.length;Q<j;Q++)if(at=Ht[Q],x.format!==si)if(ot!==null)if(L){if(it)if(x.layerUpdates.size>0){const st=Wl(at.width,at.height,x.format,x.type);for(const Ut of x.layerUpdates){const de=at.data.subarray(Ut*st/at.data.BYTES_PER_ELEMENT,(Ut+1)*st/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,Ut,at.width,at.height,1,ot,de)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,tt.depth,ot,at.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,bt,at.width,at.height,tt.depth,0,at.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?it&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,tt.depth,ot,vt,at.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Q,bt,at.width,at.height,tt.depth,0,ot,vt,at.data)}else{L&&dt&&e.texStorage2D(r.TEXTURE_2D,mt,bt,Ht[0].width,Ht[0].height);for(let Q=0,j=Ht.length;Q<j;Q++)at=Ht[Q],x.format!==si?ot!==null?L?it&&e.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,at.width,at.height,ot,at.data):e.compressedTexImage2D(r.TEXTURE_2D,Q,bt,at.width,at.height,0,at.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?it&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,at.width,at.height,ot,vt,at.data):e.texImage2D(r.TEXTURE_2D,Q,bt,at.width,at.height,0,ot,vt,at.data)}else if(x.isDataArrayTexture)if(L){if(dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,bt,tt.width,tt.height,tt.depth),it)if(x.layerUpdates.size>0){const Q=Wl(tt.width,tt.height,x.format,x.type);for(const j of x.layerUpdates){const st=tt.data.subarray(j*Q/tt.data.BYTES_PER_ELEMENT,(j+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,ot,vt,st)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ot,vt,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,tt.width,tt.height,tt.depth,0,ot,vt,tt.data);else if(x.isData3DTexture)L?(dt&&e.texStorage3D(r.TEXTURE_3D,mt,bt,tt.width,tt.height,tt.depth),it&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ot,vt,tt.data)):e.texImage3D(r.TEXTURE_3D,0,bt,tt.width,tt.height,tt.depth,0,ot,vt,tt.data);else if(x.isFramebufferTexture){if(dt)if(L)e.texStorage2D(r.TEXTURE_2D,mt,bt,tt.width,tt.height);else{let Q=tt.width,j=tt.height;for(let st=0;st<mt;st++)e.texImage2D(r.TEXTURE_2D,st,bt,Q,j,0,ot,vt,null),Q>>=1,j>>=1}}else if(Ht.length>0){if(L&&dt){const Q=Tt(Ht[0]);e.texStorage2D(r.TEXTURE_2D,mt,bt,Q.width,Q.height)}for(let Q=0,j=Ht.length;Q<j;Q++)at=Ht[Q],L?it&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,ot,vt,at):e.texImage2D(r.TEXTURE_2D,Q,bt,ot,vt,at);x.generateMipmaps=!1}else if(L){if(dt){const Q=Tt(tt);e.texStorage2D(r.TEXTURE_2D,mt,bt,Q.width,Q.height)}it&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,vt,tt)}else e.texImage2D(r.TEXTURE_2D,0,bt,ot,vt,tt);m(x)&&p(Y),At.__version=q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function $(C,x,N){if(x.image.length!==6)return;const Y=zt(C,x),Z=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const q=i.get(Z);if(Z.version!==q.__version||Y===!0){e.activeTexture(r.TEXTURE0+N);const At=jt.getPrimaries(jt.workingColorSpace),rt=x.colorSpace===on?null:jt.getPrimaries(x.colorSpace),St=x.colorSpace===on||At===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Nt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,ot=[];for(let j=0;j<6;j++)!Nt&&!tt?ot[j]=_(x.image[j],!0,n.maxCubemapSize):ot[j]=tt?x.image[j].image:x.image[j],ot[j]=ue(x,ot[j]);const vt=ot[0],bt=s.convert(x.format,x.colorSpace),at=s.convert(x.type),Ht=S(x.internalFormat,bt,at,x.colorSpace),L=x.isVideoTexture!==!0,dt=q.__version===void 0||Y===!0,it=Z.dataReady;let mt=E(x,vt);Wt(r.TEXTURE_CUBE_MAP,x);let Q;if(Nt){L&&dt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Ht,vt.width,vt.height);for(let j=0;j<6;j++){Q=ot[j].mipmaps;for(let st=0;st<Q.length;st++){const Ut=Q[st];x.format!==si?bt!==null?L?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,st,0,0,Ut.width,Ut.height,bt,Ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,st,Ht,Ut.width,Ut.height,0,Ut.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,st,0,0,Ut.width,Ut.height,bt,at,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,st,Ht,Ut.width,Ut.height,0,bt,at,Ut.data)}}}else{if(Q=x.mipmaps,L&&dt){Q.length>0&&mt++;const j=Tt(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(tt){L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ot[j].width,ot[j].height,bt,at,ot[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,ot[j].width,ot[j].height,0,bt,at,ot[j].data);for(let st=0;st<Q.length;st++){const de=Q[st].image[j].image;L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,st+1,0,0,de.width,de.height,bt,at,de.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,st+1,Ht,de.width,de.height,0,bt,at,de.data)}}else{L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,bt,at,ot[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,bt,at,ot[j]);for(let st=0;st<Q.length;st++){const Ut=Q[st];L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,st+1,0,0,bt,at,Ut.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,st+1,Ht,bt,at,Ut.image[j])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),q.__version=Z.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function _t(C,x,N,Y,Z,q){const At=s.convert(N.format,N.colorSpace),rt=s.convert(N.type),St=S(N.internalFormat,At,rt,N.colorSpace),Nt=i.get(x),tt=i.get(N);if(tt.__renderTarget=x,!Nt.__hasExternalTextures){const ot=Math.max(1,x.width>>q),vt=Math.max(1,x.height>>q);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,St,ot,vt,x.depth,0,At,rt,null):e.texImage2D(Z,q,St,ot,vt,0,At,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Ce(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,Z,tt.__webglTexture,0,D(x)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,Z,tt.__webglTexture,q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(C,x,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),x.depthBuffer){const Y=x.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=y(x.stencilBuffer,Z),At=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ce(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(x),q,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(x),q,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,q,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,C)}else{const Y=x.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],At=s.convert(q.format,q.colorSpace),rt=s.convert(q.type),St=S(q.internalFormat,At,rt,q.colorSpace);Ce(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(x),St,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(x),St,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,St,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(C,x,N){const Y=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Wt(r.TEXTURE_CUBE_MAP,x.depthTexture);const Nt=s.convert(x.depthTexture.format),tt=s.convert(x.depthTexture.type);let ot;x.depthTexture.format===Ji?ot=r.DEPTH_COMPONENT24:x.depthTexture.format===En&&(ot=r.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ot,x.width,x.height,0,Nt,tt,null)}}else V(x.depthTexture,0);const q=Z.__webglTexture,At=D(x),rt=Y?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,St=x.depthTexture.format===En?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ji)Ce(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,St,rt,q,0,At):r.framebufferTexture2D(r.FRAMEBUFFER,St,rt,q,0);else if(x.depthTexture.format===En)Ce(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,St,rt,q,0,At):r.framebufferTexture2D(r.FRAMEBUFFER,St,rt,q,0);else throw new Error("Unknown depthTexture format")}function $t(C){const x=i.get(C),N=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=Y}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)Mt(x.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?Mt(x.__webglFramebuffer[0],C,0):Mt(x.__webglFramebuffer,C,0)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=r.createRenderbuffer(),Bt(x.__webglDepthbuffer[Y],C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,q)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Bt(x.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,q)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(C,x,N){const Y=i.get(C);x!==void 0&&_t(Y.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&$t(C)}function Jt(C){const x=C.texture,N=i.get(C),Y=i.get(x);C.addEventListener("dispose",R);const Z=C.textures,q=C.isWebGLCubeRenderTarget===!0,At=Z.length>1;if(At||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=x.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let St=0;St<x.mipmaps.length;St++)N.__webglFramebuffer[rt][St]=r.createFramebuffer()}else N.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)N.__webglFramebuffer[rt]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(At)for(let rt=0,St=Z.length;rt<St;rt++){const Nt=i.get(Z[rt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Ce(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const St=Z[rt];N.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);const Nt=s.convert(St.format,St.colorSpace),tt=s.convert(St.type),ot=S(St.internalFormat,Nt,tt,St.colorSpace,C.isXRRenderTarget===!0),vt=D(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,ot,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Bt(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Wt(r.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)_t(N.__webglFramebuffer[rt][St],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St);else _t(N.__webglFramebuffer[rt],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(x)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let rt=0,St=Z.length;rt<St;rt++){const Nt=Z[rt],tt=i.get(Nt);let ot=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,tt.__webglTexture),Wt(ot,Nt),_t(N.__webglFramebuffer,C,Nt,r.COLOR_ATTACHMENT0+rt,ot,0),m(Nt)&&p(ot)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Wt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)_t(N.__webglFramebuffer[St],C,x,r.COLOR_ATTACHMENT0,rt,St);else _t(N.__webglFramebuffer,C,x,r.COLOR_ATTACHMENT0,rt,0);m(x)&&p(rt),e.unbindTexture()}C.depthBuffer&&$t(C)}function ne(C){const x=C.textures;for(let N=0,Y=x.length;N<Y;N++){const Z=x[N];if(m(Z)){const q=M(C),At=i.get(Z).__webglTexture;e.bindTexture(q,At),p(q),e.unbindTexture()}}}const le=[],Gt=[];function we(C){if(C.samples>0){if(Ce(C)===!1){const x=C.textures,N=C.width,Y=C.height;let Z=r.COLOR_BUFFER_BIT;const q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=i.get(C),rt=x.length>1;if(rt)for(let Nt=0;Nt<x.length;Nt++)e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const St=C.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Nt=0;Nt<x.length;Nt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,At.__webglColorRenderbuffer[Nt]);const tt=i.get(x[Nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,r.NEAREST),c===!0&&(le.length=0,Gt.length=0,le.push(r.COLOR_ATTACHMENT0+Nt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(le.push(q),Gt.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Gt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let Nt=0;Nt<x.length;Nt++){e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,At.__webglColorRenderbuffer[Nt]);const tt=i.get(x[Nt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,tt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const x=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function D(C){return Math.min(n.maxSamples,C.samples)}function Ce(C){const x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ee(C){const x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function ue(C,x){const N=C.colorSpace,Y=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Ve&&N!==on&&(jt.getTransfer(N)===ae?(Y!==si||Z!==ni)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",N)),x}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=Oe,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function yx(r,t){function e(i,n=on){let s;const a=jt.getTransfer(n);if(i===ni)return r.UNSIGNED_BYTE;if(i===mc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===gc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Oh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lh)return r.BYTE;if(i===Nh)return r.SHORT;if(i===js)return r.UNSIGNED_SHORT;if(i===pc)return r.INT;if(i===Di)return r.UNSIGNED_INT;if(i===hi)return r.FLOAT;if(i===ri)return r.HALF_FLOAT;if(i===Bh)return r.ALPHA;if(i===Fh)return r.RGB;if(i===si)return r.RGBA;if(i===Ji)return r.DEPTH_COMPONENT;if(i===En)return r.DEPTH_STENCIL;if(i===_c)return r.RED;if(i===xc)return r.RED_INTEGER;if(i===as)return r.RG;if(i===vc)return r.RG_INTEGER;if(i===yc)return r.RGBA_INTEGER;if(i===jr||i===Zr||i===Jr||i===$r)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===To||i===bo||i===Ao||i===Eo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===To)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wo||i===Co||i===Ro||i===Po||i===Io||i===Do||i===Lo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wo||i===Co)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ro)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Po)return s.COMPRESSED_R11_EAC;if(i===Io)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Do)return s.COMPRESSED_RG11_EAC;if(i===Lo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===No||i===Uo||i===Oo||i===Bo||i===Fo||i===ko||i===zo||i===Go||i===Ho||i===Vo||i===Wo||i===Xo||i===qo||i===Yo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===No)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ko)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Go)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ho)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===jo||i===Zo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ko)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jo||i===$o||i===Qo||i===tc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$o)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`;class Tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ru(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ke({vertexShader:Mx,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bx extends Pn{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Tx,p={},M=e.getContextAttributes();let S=null,y=null;const E=[],w=[],R=new nt;let I=null;const v=new Ye;v.viewport=new ge;const T=new Ye;T.viewport=new ge;const P=[v,T],O=new Sp;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=E[K];return $===void 0&&($=new Wa,E[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=E[K];return $===void 0&&($=new Wa,E[K]=$),$.getGripSpace()},this.getHand=function(K){let $=E[K];return $===void 0&&($=new Wa,E[K]=$),$.getHandSpace()};function V(K){const $=w.indexOf(K.inputSource);if($===-1)return;const _t=E[$];_t!==void 0&&(_t.update(K.inputSource,K.frame,l||a),_t.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",G);for(let K=0;K<E.length;K++){const $=w[K];$!==null&&(w[K]=null,E[K].disconnect($))}B=null,H=null,m.reset();for(const K in p)delete p[K];t.setRenderTarget(S),f=null,d=null,u=null,n=null,y=null,pe.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(S=t.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",X),n.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Bt=null,Mt=null;M.depth&&(Mt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=M.stencil?En:Ji,Bt=M.stencil?Zs:Di);const $t={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer($t),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ze(d.textureWidth,d.textureHeight,{format:si,type:ni,depthTexture:new er(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,_t),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ze(f.framebufferWidth,f.framebufferHeight,{format:si,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),pe.setContext(n),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let $=0;$<K.removed.length;$++){const _t=K.removed[$],Bt=w.indexOf(_t);Bt>=0&&(w[Bt]=null,E[Bt].disconnect(_t))}for(let $=0;$<K.added.length;$++){const _t=K.added[$];let Bt=w.indexOf(_t);if(Bt===-1){for(let $t=0;$t<E.length;$t++)if($t>=w.length){w.push(_t),Bt=$t;break}else if(w[$t]===null){w[$t]=_t,Bt=$t;break}if(Bt===-1)break}const Mt=E[Bt];Mt&&Mt.connect(_t)}}const J=new A,ft=new A;function lt(K,$,_t){J.setFromMatrixPosition($.matrixWorld),ft.setFromMatrixPosition(_t.matrixWorld);const Bt=J.distanceTo(ft),Mt=$.projectionMatrix.elements,$t=_t.projectionMatrix.elements,Oe=Mt[14]/(Mt[10]-1),Jt=Mt[14]/(Mt[10]+1),ne=(Mt[9]+1)/Mt[5],le=(Mt[9]-1)/Mt[5],Gt=(Mt[8]-1)/Mt[0],we=($t[8]+1)/$t[0],D=Oe*Gt,Ce=Oe*we,ee=Bt/(-Gt+we),ue=ee*-Gt;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ue),K.translateZ(ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Mt[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Tt=Oe+ee,C=Jt+ee,x=D-ue,N=Ce+(Bt-ue),Y=ne*Jt/C*Tt,Z=le*Jt/C*Tt;K.projectionMatrix.makePerspective(x,N,Y,Z,Tt,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function pt(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let $=K.near,_t=K.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),O.near=T.near=v.near=$,O.far=T.far=v.far=_t,(B!==O.near||H!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,H=O.far),O.layers.mask=K.layers.mask|6,v.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;const Bt=K.parent,Mt=O.cameras;pt(O,Bt);for(let $t=0;$t<Mt.length;$t++)pt(Mt[$t],Bt);Mt.length===2?lt(O,v,T):O.projectionMatrix.copy(v.projectionMatrix),Wt(K,O,Bt)};function Wt(K,$,_t){_t===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(_t.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=os*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(K){return p[K]};let zt=null;function ve(K,$){if(h=$.getViewerPose(l||a),g=$,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Bt=!1;_t.length!==O.cameras.length&&(O.cameras.length=0,Bt=!0);for(let Jt=0;Jt<_t.length;Jt++){const ne=_t[Jt];let le=null;if(f!==null)le=f.getViewport(ne);else{const we=u.getViewSubImage(d,ne);le=we.viewport,Jt===0&&(t.setRenderTargetTextures(y,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(y))}let Gt=P[Jt];Gt===void 0&&(Gt=new Ye,Gt.layers.enable(Jt),Gt.viewport=new ge,P[Jt]=Gt),Gt.matrix.fromArray(ne.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(ne.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(le.x,le.y,le.width,le.height),Jt===0&&(O.matrix.copy(Gt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Bt===!0&&O.cameras.push(Gt)}const Mt=n.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const Jt=u.getDepthInformation(_t[0]);Jt&&Jt.isValid&&Jt.texture&&m.init(Jt,n.renderState)}if(Mt&&Mt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let Jt=0;Jt<_t.length;Jt++){const ne=_t[Jt].camera;if(ne){let le=p[ne];le||(le=new ru,p[ne]=le);const Gt=u.getCameraImage(ne);le.sourceTexture=Gt}}}}for(let _t=0;_t<E.length;_t++){const Bt=w[_t],Mt=E[_t];Bt!==null&&Mt!==void 0&&Mt.update(Bt,$,l||a)}zt&&zt(K,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const pe=new Su;pe.setAnimationLoop(ve),this.setAnimationLoop=function(K){zt=K},this.dispose=function(){}}}const yn=new Li,Ax=new Ot;function Ex(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,M,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,yn.copy(y),yn.x*=-1,yn.y*=-1,yn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(yn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function wx(r,t,e,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,S){const y=S.program;i.uniformBlockBinding(M,y)}function l(M,S){let y=n[M.id];y===void 0&&(g(M),y=h(M),n[M.id]=y,M.addEventListener("dispose",m));const E=S.program;i.updateUBOMapping(M,E);const w=t.render.frame;s[M.id]!==w&&(d(M),s[M.id]=w)}function h(M){const S=u();M.__bindingPointIndex=S;const y=r.createBuffer(),E=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=n[M.id],y=M.uniforms,E=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,R=y.length;w<R;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,T=I.length;v<T;v++){const P=I[v];if(f(P,w,v,E)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let V=0;V<B.length;V++){const X=B[V],G=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,O+H,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,S,y,E){const w=M.value,R=S+"_"+y;if(E[R]===void 0)return typeof w=="number"||typeof w=="boolean"?E[R]=w:E[R]=w.clone(),!0;{const I=E[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return E[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(M){const S=M.uniforms;let y=0;const E=16;for(let R=0,I=S.length;R<I;R++){const v=Array.isArray(S[R])?S[R]:[S[R]];for(let T=0,P=v.length;T<P;T++){const O=v[T],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,V=B.length;H<V;H++){const X=B[H],G=_(X),J=y%E,ft=J%G.boundary,lt=J+ft;y+=ft,lt!==0&&E-lt<G.storage&&(y+=E-lt),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=G.storage}}}const w=y%E;return w>0&&(y+=E-w),M.__size=y,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ct("WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function p(){for(const M in n)r.deleteBuffer(n[M]);a=[],n={},s={}}return{bind:c,update:l,dispose:p}}const Cx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function Rx(){return Ti===null&&(Ti=new wc(Cx,16,16,as,ri),Ti.name="DFG_LUT",Ti.minFilter=Ee,Ti.magFilter=Ee,Ti.wrapS=wi,Ti.wrapT=wi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class Px{constructor(t={}){const{canvas:e=Td(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ni}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=f,m=new Set([yc,vc,xc]),p=new Set([ni,Di,js,Zs,mc,gc]),M=new Uint32Array(4),S=new Int32Array(4);let y=null,E=null;const w=[],R=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=ye;let P=0,O=0,B=null,H=-1,V=null;const X=new ge,G=new ge;let J=null;const ft=new yt(0);let lt=0,pt=e.width,Wt=e.height,zt=1,ve=null,pe=null;const K=new ge(0,0,pt,Wt),$=new ge(0,0,pt,Wt);let _t=!1;const Bt=new Rc;let Mt=!1,$t=!1;const Oe=new Ot,Jt=new A,ne=new ge,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function we(){return B===null?zt:1}let D=i;function Ce(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dc}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",se,!1),D===null){const U="webgl2";if(D=Ce(U,b),D===null)throw Ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw It("WebGLRenderer: "+b.message),b}let ee,ue,Tt,C,x,N,Y,Z,q,At,rt,St,Nt,tt,ot,vt,bt,at,Ht,L,dt,it,mt,Q;function j(){ee=new R0(D),ee.init(),it=new yx(D,ee),ue=new y0(D,ee,t,it),Tt=new xx(D,ee),ue.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),C=new D0(D),x=new nx,N=new vx(D,ee,Tt,x,ue,it,C),Y=new S0(v),Z=new C0(v),q=new Op(D),mt=new x0(D,q),At=new P0(D,q,C,mt),rt=new N0(D,At,q,C),Ht=new L0(D,ue,N),vt=new M0(x),St=new ix(v,Y,Z,ee,ue,mt,vt),Nt=new Ex(v,x),tt=new rx,ot=new ux(ee),at=new _0(v,Y,Z,Tt,rt,g,c),bt=new gx(v,rt,ue),Q=new wx(D,C,ue,Tt),L=new v0(D,ee,C),dt=new I0(D,ee,C),C.programs=St.programs,v.capabilities=ue,v.extensions=ee,v.properties=x,v.renderLists=tt,v.shadowMap=bt,v.state=Tt,v.info=C}j(),_!==ni&&(I=new O0(_,e.width,e.height,n,s));const st=new bx(v,D);this.xr=st,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return zt},this.setPixelRatio=function(b){b!==void 0&&(zt=b,this.setSize(pt,Wt,!1))},this.getSize=function(b){return b.set(pt,Wt)},this.setSize=function(b,U,z=!0){if(st.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=b,Wt=U,e.width=Math.floor(b*zt),e.height=Math.floor(U*zt),z===!0&&(e.style.width=b+"px",e.style.height=U+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(pt*zt,Wt*zt).floor()},this.setDrawingBufferSize=function(b,U,z){pt=b,Wt=U,zt=z,e.width=Math.floor(b*z),e.height=Math.floor(U*z),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,U,z,k){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,U,z,k),Tt.viewport(X.copy(K).multiplyScalar(zt).round())},this.getScissor=function(b){return b.copy($)},this.setScissor=function(b,U,z,k){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,U,z,k),Tt.scissor(G.copy($).multiplyScalar(zt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(b){Tt.setScissorTest(_t=b)},this.setOpaqueSort=function(b){ve=b},this.setTransparentSort=function(b){pe=b},this.getClearColor=function(b){return b.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,z=!0){let k=0;if(b){let F=!1;if(B!==null){const ct=B.texture.format;F=m.has(ct)}if(F){const ct=B.texture.type,gt=p.has(ct),ut=at.getClearColor(),xt=at.getClearAlpha(),Et=ut.r,Dt=ut.g,Rt=ut.b;gt?(M[0]=Et,M[1]=Dt,M[2]=Rt,M[3]=xt,D.clearBufferuiv(D.COLOR,0,M)):(S[0]=Et,S[1]=Dt,S[2]=Rt,S[3]=xt,D.clearBufferiv(D.COLOR,0,S))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),z&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",se,!1),at.dispose(),tt.dispose(),ot.dispose(),x.dispose(),Y.dispose(),Z.dispose(),rt.dispose(),mt.dispose(),Q.dispose(),St.dispose(),st.dispose(),st.removeEventListener("sessionstart",Hc),st.removeEventListener("sessionend",Vc),fn.stop()};function Ut(b){b.preventDefault(),ra("WebGLRenderer: Context Lost."),T=!0}function de(){ra("WebGLRenderer: Context Restored."),T=!1;const b=C.autoReset,U=bt.enabled,z=bt.autoUpdate,k=bt.needsUpdate,F=bt.type;j(),C.autoReset=b,bt.enabled=U,bt.autoUpdate=z,bt.needsUpdate=k,bt.type=F}function se(b){It("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Si(b){const U=b.target;U.removeEventListener("dispose",Si),Fi(U)}function Fi(b){Nu(b),x.remove(b)}function Nu(b){const U=x.get(b).programs;U!==void 0&&(U.forEach(function(z){St.releaseProgram(z)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,z,k,F,ct){U===null&&(U=le);const gt=F.isMesh&&F.matrixWorld.determinant()<0,ut=Ou(b,U,z,k,F);Tt.setMaterial(k,gt);let xt=z.index,Et=1;if(k.wireframe===!0){if(xt=At.getWireframeAttribute(z),xt===void 0)return;Et=2}const Dt=z.drawRange,Rt=z.attributes.position;let Xt=Dt.start*Et,ce=(Dt.start+Dt.count)*Et;ct!==null&&(Xt=Math.max(Xt,ct.start*Et),ce=Math.min(ce,(ct.start+ct.count)*Et)),xt!==null?(Xt=Math.max(Xt,0),ce=Math.min(ce,xt.count)):Rt!=null&&(Xt=Math.max(Xt,0),ce=Math.min(ce,Rt.count));const Te=ce-Xt;if(Te<0||Te===1/0)return;mt.setup(F,k,ut,z,xt);let be,he=L;if(xt!==null&&(be=q.get(xt),he=dt,he.setIndex(be)),F.isMesh)k.wireframe===!0?(Tt.setLineWidth(k.wireframeLinewidth*we()),he.setMode(D.LINES)):he.setMode(D.TRIANGLES);else if(F.isLine){let Pt=k.linewidth;Pt===void 0&&(Pt=1),Tt.setLineWidth(Pt*we()),F.isLineSegments?he.setMode(D.LINES):F.isLineLoop?he.setMode(D.LINE_LOOP):he.setMode(D.LINE_STRIP)}else F.isPoints?he.setMode(D.POINTS):F.isSprite&&he.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)tr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))he.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pt=F._multiDrawStarts,re=F._multiDrawCounts,Qt=F._multiDrawCount,Qe=xt?q.get(xt).bytesPerElement:1,Dn=x.get(k).currentProgram.getUniforms();for(let ti=0;ti<Qt;ti++)Dn.setValue(D,"_gl_DrawID",ti),he.render(Pt[ti]/Qe,re[ti])}else if(F.isInstancedMesh)he.renderInstances(Xt,Te,F.count);else if(z.isInstancedBufferGeometry){const Pt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,re=Math.min(z.instanceCount,Pt);he.renderInstances(Xt,Te,re)}else he.render(Xt,Te)};function Gc(b,U,z){b.transparent===!0&&b.side===me&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,fr(b,U,z),b.side=Zi,b.needsUpdate=!0,fr(b,U,z),b.side=me):fr(b,U,z)}this.compile=function(b,U,z=null){z===null&&(z=b),E=ot.get(z),E.init(U),R.push(E),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(E.pushLight(F),F.castShadow&&E.pushShadow(F))}),b!==z&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(E.pushLight(F),F.castShadow&&E.pushShadow(F))}),E.setupLights();const k=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ct=F.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){const ut=ct[gt];Gc(ut,z,F),k.add(ut)}else Gc(ct,z,F),k.add(ct)}),E=R.pop(),k},this.compileAsync=function(b,U,z=null){const k=this.compile(b,U,z);return new Promise(F=>{function ct(){if(k.forEach(function(gt){x.get(gt).currentProgram.isReady()&&k.delete(gt)}),k.size===0){F(b);return}setTimeout(ct,10)}ee.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ya=null;function Uu(b){ya&&ya(b)}function Hc(){fn.stop()}function Vc(){fn.start()}const fn=new Su;fn.setAnimationLoop(Uu),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(b){ya=b,st.setAnimationLoop(b),b===null?fn.stop():fn.start()},st.addEventListener("sessionstart",Hc),st.addEventListener("sessionend",Vc),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const z=st.enabled===!0&&st.isPresenting===!0,k=I!==null&&(B===null||z)&&I.begin(v,B);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,B),E=ot.get(b,R.length),E.init(U),R.push(E),Oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Bt.setFromProjectionMatrix(Oe,Ci,U.reversedDepth),$t=this.localClippingEnabled,Mt=vt.init(this.clippingPlanes,$t),y=tt.get(b,w.length),y.init(),w.push(y),st.enabled===!0&&st.isPresenting===!0){const gt=v.xr.getDepthSensingMesh();gt!==null&&Ma(gt,U,-1/0,v.sortObjects)}Ma(b,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(ve,pe),Gt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Gt&&at.addToRenderList(y,b),this.info.render.frame++,Mt===!0&&vt.beginShadows();const F=E.state.shadowsArray;if(bt.render(F,b,U),Mt===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&I.hasRenderPass())===!1){const gt=y.opaque,ut=y.transmissive;if(E.setupLights(),U.isArrayCamera){const xt=U.cameras;if(ut.length>0)for(let Et=0,Dt=xt.length;Et<Dt;Et++){const Rt=xt[Et];Xc(gt,ut,b,Rt)}Gt&&at.render(b);for(let Et=0,Dt=xt.length;Et<Dt;Et++){const Rt=xt[Et];Wc(y,b,Rt,Rt.viewport)}}else ut.length>0&&Xc(gt,ut,b,U),Gt&&at.render(b),Wc(y,b,U)}B!==null&&O===0&&(N.updateMultisampleRenderTarget(B),N.updateRenderTargetMipmap(B)),k&&I.end(v),b.isScene===!0&&b.onAfterRender(v,b,U),mt.resetDefaultState(),H=-1,V=null,R.pop(),R.length>0?(E=R[R.length-1],Mt===!0&&vt.setGlobalState(v.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function Ma(b,U,z,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Bt.intersectsSprite(b)){k&&ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Oe);const gt=rt.update(b),ut=b.material;ut.visible&&y.push(b,gt,ut,z,ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Bt.intersectsObject(b))){const gt=rt.update(b),ut=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ne.copy(b.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),ne.copy(gt.boundingSphere.center)),ne.applyMatrix4(b.matrixWorld).applyMatrix4(Oe)),Array.isArray(ut)){const xt=gt.groups;for(let Et=0,Dt=xt.length;Et<Dt;Et++){const Rt=xt[Et],Xt=ut[Rt.materialIndex];Xt&&Xt.visible&&y.push(b,gt,Xt,z,ne.z,Rt)}}else ut.visible&&y.push(b,gt,ut,z,ne.z,null)}}const ct=b.children;for(let gt=0,ut=ct.length;gt<ut;gt++)Ma(ct[gt],U,z,k)}function Wc(b,U,z,k){const{opaque:F,transmissive:ct,transparent:gt}=b;E.setupLightsView(z),Mt===!0&&vt.setGlobalState(v.clippingPlanes,z),k&&Tt.viewport(X.copy(k)),F.length>0&&dr(F,U,z),ct.length>0&&dr(ct,U,z),gt.length>0&&dr(gt,U,z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Xc(b,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const Xt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Ze(1,1,{generateMipmaps:!0,type:Xt?ri:ni,minFilter:Yi,samples:ue.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const ct=E.state.transmissionRenderTarget[k.id],gt=k.viewport||X;ct.setSize(gt.z*v.transmissionResolutionScale,gt.w*v.transmissionResolutionScale);const ut=v.getRenderTarget(),xt=v.getActiveCubeFace(),Et=v.getActiveMipmapLevel();v.setRenderTarget(ct),v.getClearColor(ft),lt=v.getClearAlpha(),lt<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&at.render(z);const Dt=v.toneMapping;v.toneMapping=Pi;const Rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),Mt===!0&&vt.setGlobalState(v.clippingPlanes,k),dr(b,z,k),N.updateMultisampleRenderTarget(ct),N.updateRenderTargetMipmap(ct),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ce=0,Te=U.length;ce<Te;ce++){const be=U[ce],{object:he,geometry:Pt,material:re,group:Qt}=be;if(re.side===me&&he.layers.test(k.layers)){const Qe=re.side;re.side=je,re.needsUpdate=!0,qc(he,z,k,Pt,re,Qt),re.side=Qe,re.needsUpdate=!0,Xt=!0}}Xt===!0&&(N.updateMultisampleRenderTarget(ct),N.updateRenderTargetMipmap(ct))}v.setRenderTarget(ut,xt,Et),v.setClearColor(ft,lt),Rt!==void 0&&(k.viewport=Rt),v.toneMapping=Dt}function dr(b,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ct=b.length;F<ct;F++){const gt=b[F],{object:ut,geometry:xt,group:Et}=gt;let Dt=gt.material;Dt.allowOverride===!0&&k!==null&&(Dt=k),ut.layers.test(z.layers)&&qc(ut,U,z,xt,Dt,Et)}}function qc(b,U,z,k,F,ct){b.onBeforeRender(v,U,z,k,F,ct),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,U,z,k,b,ct),F.transparent===!0&&F.side===me&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,v.renderBufferDirect(z,U,k,F,b,ct),F.side=Zi,F.needsUpdate=!0,v.renderBufferDirect(z,U,k,F,b,ct),F.side=me):v.renderBufferDirect(z,U,k,F,b,ct),b.onAfterRender(v,U,z,k,F,ct)}function fr(b,U,z){U.isScene!==!0&&(U=le);const k=x.get(b),F=E.state.lights,ct=E.state.shadowsArray,gt=F.state.version,ut=St.getParameters(b,F.state,ct,U,z),xt=St.getProgramCacheKey(ut);let Et=k.programs;k.environment=b.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(b.isMeshStandardMaterial?Z:Y).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Et===void 0&&(b.addEventListener("dispose",Si),Et=new Map,k.programs=Et);let Dt=Et.get(xt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===gt)return Kc(b,ut),Dt}else ut.uniforms=St.getUniforms(b),b.onBeforeCompile(ut,v),Dt=St.acquireProgram(ut,xt),Et.set(xt,Dt),k.uniforms=ut.uniforms;const Rt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=vt.uniform),Kc(b,ut),k.needsLights=Fu(b),k.lightsStateVersion=gt,k.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function Yc(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Qr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Kc(b,U){const z=x.get(b);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Ou(b,U,z,k,F){U.isScene!==!0&&(U=le),N.resetTextureUnits();const ct=U.fog,gt=k.isMeshStandardMaterial?U.environment:null,ut=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ve,xt=(k.isMeshStandardMaterial?Z:Y).get(k.envMap||gt),Et=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Rt=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,ce=!!z.morphAttributes.color;let Te=Pi;k.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Te=v.toneMapping);const be=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=be!==void 0?be.length:0,Pt=x.get(k),re=E.state.lights;if(Mt===!0&&($t===!0||b!==V)){const We=b===V&&k.id===H;vt.setState(k,b,We)}let Qt=!1;k.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==re.state.version||Pt.outputColorSpace!==ut||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==xt||k.fog===!0&&Pt.fog!==ct||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==vt.numPlanes||Pt.numIntersection!==vt.numIntersection)||Pt.vertexAlphas!==Et||Pt.vertexTangents!==Dt||Pt.morphTargets!==Rt||Pt.morphNormals!==Xt||Pt.morphColors!==ce||Pt.toneMapping!==Te||Pt.morphTargetsCount!==he)&&(Qt=!0):(Qt=!0,Pt.__version=k.version);let Qe=Pt.currentProgram;Qt===!0&&(Qe=fr(k,U,F));let Dn=!1,ti=!1,Ms=!1;const fe=Qe.getUniforms(),Je=Pt.uniforms;if(Tt.useProgram(Qe.program)&&(Dn=!0,ti=!0,Ms=!0),k.id!==H&&(H=k.id,ti=!0),Dn||V!==b){Tt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(D,"projectionMatrix",b.projectionMatrix),fe.setValue(D,"viewMatrix",b.matrixWorldInverse);const $e=fe.map.cameraPosition;$e!==void 0&&$e.setValue(D,Jt.setFromMatrixPosition(b.matrixWorld)),ue.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,ti=!0,Ms=!0)}if(Pt.needsLights&&(re.state.directionalShadowMap.length>0&&fe.setValue(D,"directionalShadowMap",re.state.directionalShadowMap,N),re.state.spotShadowMap.length>0&&fe.setValue(D,"spotShadowMap",re.state.spotShadowMap,N),re.state.pointShadowMap.length>0&&fe.setValue(D,"pointShadowMap",re.state.pointShadowMap,N)),F.isSkinnedMesh){fe.setOptional(D,F,"bindMatrix"),fe.setOptional(D,F,"bindMatrixInverse");const We=F.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),fe.setValue(D,"boneTexture",We.boneTexture,N))}F.isBatchedMesh&&(fe.setOptional(D,F,"batchingTexture"),fe.setValue(D,"batchingTexture",F._matricesTexture,N),fe.setOptional(D,F,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",F._indirectTexture,N),fe.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",F._colorsTexture,N));const ai=z.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Ht.update(F,z,Qe),(ti||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,fe.setValue(D,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Je.envMap.value=xt,Je.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Je.envMapIntensity.value=U.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=Rx()),ti&&(fe.setValue(D,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&Bu(Je,Ms),ct&&k.fog===!0&&Nt.refreshFogUniforms(Je,ct),Nt.refreshMaterialUniforms(Je,k,zt,Wt,E.state.transmissionRenderTarget[b.id]),Qr.upload(D,Yc(Pt),Je,N)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Qr.upload(D,Yc(Pt),Je,N),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(D,"center",F.center),fe.setValue(D,"modelViewMatrix",F.modelViewMatrix),fe.setValue(D,"normalMatrix",F.normalMatrix),fe.setValue(D,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const We=k.uniformsGroups;for(let $e=0,Sa=We.length;$e<Sa;$e++){const pn=We[$e];Q.update(pn,Qe),Q.bind(pn,Qe)}}return Qe}function Bu(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Fu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,U,z){const k=x.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=U,x.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const z=x.get(b);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const ku=D.createFramebuffer();this.setRenderTarget=function(b,U=0,z=0){B=b,P=U,O=z;let k=null,F=!1,ct=!1;if(b){const ut=x.get(b);if(ut.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(D.FRAMEBUFFER,ut.__webglFramebuffer),X.copy(b.viewport),G.copy(b.scissor),J=b.scissorTest,Tt.viewport(X),Tt.scissor(G),Tt.setScissorTest(J),H=-1;return}else if(ut.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(ut.__hasExternalTextures)N.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Dt=b.depthTexture;if(ut.__boundDepthTexture!==Dt){if(Dt!==null&&x.has(Dt)&&(b.width!==Dt.image.width||b.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const xt=b.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ct=!0);const Et=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Et[U])?k=Et[U][z]:k=Et[U],F=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?k=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Et)?k=Et[z]:k=Et,X.copy(b.viewport),G.copy(b.scissor),J=b.scissorTest}else X.copy(K).multiplyScalar(zt).floor(),G.copy($).multiplyScalar(zt).floor(),J=_t;if(z!==0&&(k=ku),Tt.bindFramebuffer(D.FRAMEBUFFER,k)&&Tt.drawBuffers(b,k),Tt.viewport(X),Tt.scissor(G),Tt.setScissorTest(J),F){const ut=x.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,z)}else if(ct){const ut=U;for(let xt=0;xt<b.textures.length;xt++){const Et=x.get(b.textures[xt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+xt,Et.__webglTexture,z,ut)}}else if(b!==null&&z!==0){const ut=x.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,z)}H=-1},this.readRenderTargetPixels=function(b,U,z,k,F,ct,gt,ut=0){if(!(b&&b.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){Tt.bindFramebuffer(D.FRAMEBUFFER,xt);try{const Et=b.textures[ut],Dt=Et.format,Rt=Et.type;if(!ue.textureFormatReadable(Dt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Rt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&z>=0&&z<=b.height-F&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut),D.readPixels(U,z,k,F,it.convert(Dt),it.convert(Rt),ct))}finally{const Et=B!==null?x.get(B).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,U,z,k,F,ct,gt,ut=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(U>=0&&U<=b.width-k&&z>=0&&z<=b.height-F){Tt.bindFramebuffer(D.FRAMEBUFFER,xt);const Et=b.textures[ut],Dt=Et.format,Rt=Et.type;if(!ue.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xt),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut),D.readPixels(U,z,k,F,it.convert(Dt),it.convert(Rt),0);const ce=B!==null?x.get(B).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,ce);const Te=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await bd(D,Te,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(Xt),D.deleteSync(Te),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,z=0){const k=Math.pow(2,-z),F=Math.floor(b.image.width*k),ct=Math.floor(b.image.height*k),gt=U!==null?U.x:0,ut=U!==null?U.y:0;N.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,gt,ut,F,ct),Tt.unbindTexture()};const zu=D.createFramebuffer(),Gu=D.createFramebuffer();this.copyTextureToTexture=function(b,U,z=null,k=null,F=0,ct=null){ct===null&&(F!==0?(tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=F,F=0):ct=0);let gt,ut,xt,Et,Dt,Rt,Xt,ce,Te;const be=b.isCompressedTexture?b.mipmaps[ct]:b.image;if(z!==null)gt=z.max.x-z.min.x,ut=z.max.y-z.min.y,xt=z.isBox3?z.max.z-z.min.z:1,Et=z.min.x,Dt=z.min.y,Rt=z.isBox3?z.min.z:0;else{const ai=Math.pow(2,-F);gt=Math.floor(be.width*ai),ut=Math.floor(be.height*ai),b.isDataArrayTexture?xt=be.depth:b.isData3DTexture?xt=Math.floor(be.depth*ai):xt=1,Et=0,Dt=0,Rt=0}k!==null?(Xt=k.x,ce=k.y,Te=k.z):(Xt=0,ce=0,Te=0);const he=it.convert(U.format),Pt=it.convert(U.type);let re;U.isData3DTexture?(N.setTexture3D(U,0),re=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),re=D.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),re=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Dn=D.getParameter(D.UNPACK_SKIP_PIXELS),ti=D.getParameter(D.UNPACK_SKIP_ROWS),Ms=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,be.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);const fe=b.isDataArrayTexture||b.isData3DTexture,Je=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const ai=x.get(b),We=x.get(U),$e=x.get(ai.__renderTarget),Sa=x.get(We.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,$e.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Sa.__webglFramebuffer);for(let pn=0;pn<xt;pn++)fe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(b).__webglTexture,F,Rt+pn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(U).__webglTexture,ct,Te+pn)),D.blitFramebuffer(Et,Dt,gt,ut,Xt,ce,gt,ut,D.DEPTH_BUFFER_BIT,D.NEAREST);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||x.has(b)){const ai=x.get(b),We=x.get(U);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,zu),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gu);for(let $e=0;$e<xt;$e++)fe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ai.__webglTexture,F,Rt+$e):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ai.__webglTexture,F),Je?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,We.__webglTexture,ct,Te+$e):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,We.__webglTexture,ct),F!==0?D.blitFramebuffer(Et,Dt,gt,ut,Xt,ce,gt,ut,D.COLOR_BUFFER_BIT,D.NEAREST):Je?D.copyTexSubImage3D(re,ct,Xt,ce,Te+$e,Et,Dt,gt,ut):D.copyTexSubImage2D(re,ct,Xt,ce,Et,Dt,gt,ut);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Je?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(re,ct,Xt,ce,Te,gt,ut,xt,he,Pt,be.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(re,ct,Xt,ce,Te,gt,ut,xt,he,be.data):D.texSubImage3D(re,ct,Xt,ce,Te,gt,ut,xt,he,Pt,be):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,Xt,ce,gt,ut,he,Pt,be.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,Xt,ce,be.width,be.height,he,be.data):D.texSubImage2D(D.TEXTURE_2D,ct,Xt,ce,gt,ut,he,Pt,be);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ti),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ms),ct===0&&U.generateMipmaps&&D.generateMipmap(re),Tt.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),Tt.unbindTexture()},this.resetState=function(){P=0,O=0,B=null,Tt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class hr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ix=new lr(-1,1,1,-1,0,1);class Dx extends xe{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const Lx=new Dx;class wu{constructor(t){this._mesh=new et(Lx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ix)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Cu extends hr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=aa.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new wu(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ph extends hr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Nx extends hr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ux{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new nt);this._width=i.width,this._height=i.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cu(ta),this.copyPass.material.blending=Ri,this.clock=new yu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ph!==void 0&&(a instanceof ph?i=!0:a instanceof Nx&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ox extends hr{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new yt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const Bx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ms extends hr{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(s,a,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Ze(s,a,{type:ri});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Ze(s,a,{type:ri});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=Bx;this.highPassUniforms=aa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=aa.clone(ta.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,premultipliedAlpha:!0,blending:Xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new yt,this._oldClearAlpha=1,this._basic=new Zt,this._fsQuad=new wu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new nt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ms.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ms.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ms.BlurDirectionX=new nt(1,0);ms.BlurDirectionY=new nt(0,1);class Fx{constructor(){this.remnant=0,this.heldRemnant=0,this.deathCount=0,this.deathLessons={},this.infusions={strength:0,vitality:0,stamina:0,spirit:0},this.MAX_TOTAL_DEPTH=20,this.MAX_TRACK_DEPTH=5,this.bonfirePosition=new A(0,0,5),this.maxHealth=100,this.maxStamina=100,this.maxPosture=100,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.isDead=!1,this.checkpoint=new A(0,0,5),this.deathScreenEl=document.getElementById("death-screen"),this.player=null,this.enemyManager=null,this.bloodstain=null,this.bloodstainMesh=null,this.staminaRegenDelay=.5,this.staminaRegenRate=25,this.staminaRegenTimer=0,this.postureRegenDelay=1,this.postureRegenRate=15,this.postureRegenTimer=0,this.audioManager=null,this.hitstopActive=!1,this.hitstopDuration=0,this.hitstopTimer=0,this.hud=null,this.cameraController=null}triggerHitstop(t=.04){this.hitstopActive=!0,this.hitstopDuration=t,this.hitstopTimer=0}hitstopLight(){this.triggerHitstop(.035)}hitstopHeavy(){this.triggerHitstop(.06)}isInHitstop(){return this.hitstopActive}updateHitstop(t){return this.hitstopActive?(this.hitstopTimer+=t,this.hitstopTimer>=this.hitstopDuration&&(this.hitstopActive=!1,this.hitstopTimer=0),!0):!1}update(t){this.isDead||(this.staminaRegenTimer+=t,this.staminaRegenTimer>=this.staminaRegenDelay&&this.stamina<this.maxStamina&&(this.stamina=Math.min(this.maxStamina,this.stamina+this.staminaRegenRate*t)),this.postureRegenTimer+=t,this.postureRegenTimer>=this.postureRegenDelay&&this.posture>0&&(this.posture=Math.max(0,this.posture-this.postureRegenRate*t)))}canUseStamina(t){const e=this.stamina>=t;return!e&&this.hud&&(this.hud.flashStaminaDepleted(),this.audioManager&&this.player&&this.audioManager.play("staminaDepleted",{position:this.player.mesh.position,volume:.4})),e}useStamina(t){this.stamina=Math.max(0,this.stamina-t),this.staminaRegenTimer=0,this.stamina<15&&this.hud&&this.hud.flashStaminaDepleted()}takeDamage(t,e="physical",i=0,n=!1){if(this.isDead)return;const s=this.deathLessons[e]||0;let a=Math.floor(t*(1-s));if(n){const o=a*.5;if(this.canUseStamina(o))this.useStamina(o),a=Math.floor(a*.2),i*=.5;else return this.stamina=0,this.posture=this.maxPosture,"guard_broken"}return this.health-=a,this.posture=Math.min(this.maxPosture,this.posture+i),this.postureRegenTimer=0,this.audioManager&&this.player&&this.audioManager.play("playerDamage",{position:this.player.mesh.position,volume:.7}),this.health<=0?(this.die(e),"died"):this.posture>=this.maxPosture?(this.audioManager&&this.player&&this.audioManager.play("postureBreak",{position:this.player.mesh.position,volume:.8}),"posture_broken"):"hit"}die(t="unknown"){this.isDead=!0,this.deathCount++,this.health=0,this.audioManager&&this.audioManager.play("death",{volume:.8});const e=this.player?this.player.mesh.position.clone():this.checkpoint.clone();if(this.particleManager&&this.player&&this.particleManager.spawnPlayerDeathEffect(e,this.camera),this.bloodstainMesh&&this.scene&&(this.scene.remove(this.bloodstainMesh),this.bloodstainMesh=null),this.remnant>0&&this.scene){this.heldRemnant=this.remnant,this.remnant=0,this.bloodstain=e.clone(),this.bloodstain.y=.05;const i=new _a(.5,16),n=new Zt({color:11154227,transparent:!0,opacity:.8,side:me});this.bloodstainMesh=new et(i,n),this.bloodstainMesh.rotation.x=-Math.PI/2,this.bloodstainMesh.position.copy(this.bloodstain),this.scene.add(this.bloodstainMesh)}else this.heldRemnant=0,this.bloodstain=null;this.deathLessons[t]||(this.deathLessons[t]=0),this.deathLessons[t]=Math.min(.25,this.deathLessons[t]+.005),this.deathScreenEl&&this.deathScreenEl.classList.add("visible"),setTimeout(()=>this.respawn(),3e3)}respawn(){this.isDead=!1,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.player&&this.player.resetPosition(),this.enemyManager&&this.enemyManager.resetAll(),this.deathScreenEl&&this.deathScreenEl.classList.remove("visible")}setCheckpoint(t){this.checkpoint.copy(t)}setEntities(t,e,i,n=null){this.player=t,this.enemyManager=e,this.scene=i,this.camera=n}addRemnant(t){this.remnant+=t}collectBloodstain(){return!this.bloodstain||!this.player?!1:this.player.mesh.position.distanceTo(this.bloodstain)<2?(this.remnant+=this.heldRemnant,this.audioManager&&this.audioManager.play("itemPickup",{volume:.6}),this.heldRemnant=0,this.bloodstainMesh&&this.scene&&this.scene.remove(this.bloodstainMesh),this.bloodstain=null,this.bloodstainMesh=null,!0):!1}getTotalDepth(){return this.infusions.bone+this.infusions.blood+this.infusions.stone}canInfuse(t){return!(!this.infusions.hasOwnProperty(t)||this.infusions[t]>=this.MAX_TRACK_DEPTH||this.getTotalDepth()>=this.MAX_TOTAL_DEPTH)}getInfusionCost(t,e){return 100*e*e}infuse(t){if(!this.canInfuse(t))return!1;const e=this.infusions[t]+1,i=this.getInfusionCost(t,e);return this.remnant<i?!1:(this.remnant-=i,this.infusions[t]=e,this.audioManager&&this.audioManager.play("menuConfirm",{volume:.5}),!0)}getInfusionBonuses(){return{damageMult:1+this.infusions.strength*.1,bonusHealth:this.infusions.vitality*20,bonusStamina:this.infusions.stamina*15,staminaRegenMult:1+this.infusions.stamina*.1,postureResist:this.infusions.spirit*.05,postureRegenMult:1+this.infusions.spirit*.15}}applyInfusionBonuses(){const t=this.getInfusionBonuses();this.maxHealth=100+t.bonusHealth,this.maxStamina=100+t.bonusStamina,this.isDead||(this.health=Math.min(this.health,this.maxHealth),this.stamina=Math.min(this.stamina,this.maxStamina))}isNearBonfire(){return this.player?this.player.mesh.position.distanceTo(this.bonfirePosition)<3:!1}getTrackInfo(t){const e=this.infusions[t]||0,i=e+1,n=i<=this.MAX_TRACK_DEPTH?this.getInfusionCost(t,i):null,s=n!==null&&this.remnant>=n,a=e>=this.MAX_TRACK_DEPTH,o={strength:{name:"Strength",desc:"+10% damage per level",bonus:`+${e*10}% damage`},vitality:{name:"Vitality",desc:"+20 max HP per level",bonus:`+${e*20} HP`},stamina:{name:"Stamina",desc:"+15 max stamina, +10% regen per level",bonus:`+${e*15} stamina`},spirit:{name:"Spirit",desc:"+5% posture resist, +15% posture regen per level",bonus:`+${e*5}% resist`}};return{level:e,nextLevel:i,cost:n,canAfford:s,maxed:a,...o[t]}}}function mh(r,t){if(t===fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===ec||t===Gh){let e=r.getIndex();if(e===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=e.count-2,n=[];if(t===ec)for(let a=1;a<=i;a++)n.push(e.getX(0)),n.push(e.getX(a)),n.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(e.getX(a)),n.push(e.getX(a+1)),n.push(e.getX(a+2))):(n.push(e.getX(a+2)),n.push(e.getX(a+1)),n.push(e.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class kx extends In{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Wx(e)}),this.register(function(e){return new Xx(e)}),this.register(function(e){return new tv(e)}),this.register(function(e){return new ev(e)}),this.register(function(e){return new iv(e)}),this.register(function(e){return new Yx(e)}),this.register(function(e){return new Kx(e)}),this.register(function(e){return new jx(e)}),this.register(function(e){return new Zx(e)}),this.register(function(e){return new Vx(e)}),this.register(function(e){return new Jx(e)}),this.register(function(e){return new qx(e)}),this.register(function(e){return new Qx(e)}),this.register(function(e){return new $x(e)}),this.register(function(e){return new Gx(e)}),this.register(function(e){return new nv(e)}),this.register(function(e){return new sv(e)})}load(t,e,i,n){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=qs.extractUrlBase(t);a=qs.resolveURL(l,this.path)}else a=qs.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){n?n(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new ua(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,a,function(h){e(h),s.manager.itemEnd(t)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s;const a={},o={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Ru){try{a[Yt.KHR_BINARY_GLTF]=new rv(t)}catch(u){n&&n(u);return}s=JSON.parse(a[Yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new xv(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Yt.KHR_MATERIALS_UNLIT:a[u]=new Hx;break;case Yt.KHR_DRACO_MESH_COMPRESSION:a[u]=new av(s,this.dracoLoader);break;case Yt.KHR_TEXTURE_TRANSFORM:a[u]=new ov;break;case Yt.KHR_MESH_QUANTIZATION:a[u]=new cv;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,n)}parseAsync(t,e){const i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}}function zx(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Gx{constructor(t){this.parser=t,this.name=Yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){const s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let n=e.cache.get(i);if(n)return n;const s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let l;const h=new yt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ve);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qi(h),l.distance=u;break;case"spot":l=new _p(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),n=Promise.resolve(l),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,s=i.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(e.cache,o,c)})}}class Hx{constructor(){this.name=Yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(t,e,i){const n=[];t.color=new yt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ve),t.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,ye))}return Promise.all(n)}}class Vx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class Wx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new nt(o,o)}return Promise.all(s)}}class Xx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class qx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Yx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new yt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Ve)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",a.sheenColorTexture,ye)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Kx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class jx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new yt().setRGB(o[0],o[1],o[2],Ve),Promise.all(s)}}class Zx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Jx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new yt().setRGB(o[0],o[1],o[2],Ve),a.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",a.specularColorTexture,ye)),Promise.all(s)}}class $x{constructor(t){this.parser=t,this.name=Yt.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Qx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class tv{constructor(t){this.parser=t,this.name=Yt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}}class ev{constructor(t){this.parser=t,this.name=Yt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],o=n.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(t,a.source,c)}}class iv{constructor(t){this.parser=t,this.name=Yt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],o=n.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(t,a.source,c)}}class nv{constructor(t){this.name=Yt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=n.byteOffset||0,l=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class sv{constructor(t){this.name=Yt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=e.meshes[i.mesh];for(const l of n.primitives)if(l.mode!==ci.TRIANGLES&&l.mode!==ci.TRIANGLE_STRIP&&l.mode!==ci.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Ot,m=new A,p=new xi,M=new A(1,1,1),S=new gf(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&M.fromBufferAttribute(c.SCALE,y),S.setMatrixAt(y,_.compose(m,p,M));for(const y in c)if(y==="_COLOR_0"){const E=c[y];S.instanceColor=new nc(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);_e.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ru="glTF",Ns=12,gh={JSON:1313821514,BIN:5130562};class rv{constructor(t){this.name=Yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ns),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Ru)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ns,s=new DataView(t,Ns);let a=0;for(;a<n;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===gh.JSON){const l=new Uint8Array(t,Ns+a,o);this.content=i.decode(l)}else if(c===gh.BIN){const l=Ns+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class av{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Yt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=hc[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=hc[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[t.attributes[h]],f=ns[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,Ve,d)})})}}class ov{constructor(){this.name=Yt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class cv{constructor(){this.name=Yt.KHR_MESH_QUANTIZATION}}class Pu extends or{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let a=0;a!==n;a++)e[a]=i[s+a];return e}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=n-e,u=(i-e)/h,d=u*u,f=d*u,g=t*l,_=g-l,m=-2*f+3*d,p=f-d,M=1-m,S=p-d+u;for(let y=0;y!==o;y++){const E=a[_+y+o],w=a[_+y+c]*h,R=a[g+y+o],I=a[g+y]*h;s[y]=M*E+S*w+m*R+p*I}return s}}const lv=new xi;class hv extends Pu{interpolate_(t,e,i,n){const s=super.interpolate_(t,e,i,n);return lv.fromArray(s).normalize().toArray(s),s}}const ci={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_h={9728:Ie,9729:Ee,9984:Dh,9985:Kr,9986:Bs,9987:Yi},xh={33071:wi,33648:ea,10497:Ii},oo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},an={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uv={CUBICSPLINE:void 0,LINEAR:$s,STEP:Js},co={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zi})),r.DefaultMaterial}function Mn(r,t,e){for(const i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function bi(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function fv(r,t,e){let i=!1,n=!1,s=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(i){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(n){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function pv(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mv(r){let t;const e=r.extensions&&r.extensions[Yt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+lo(e.attributes):t=r.indices+":"+lo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)t+=":"+lo(r.targets[i]);return t}function lo(r){let t="";const e=Object.keys(r).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+r[e[i]]+";";return t}function uc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const _v=new Ot;class xv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new zx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);n=i&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&a<98?this.textureLoader=new xu(this.options.manager):this.textureLoader=new Mp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ua(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return Mn(s,o,n),bi(o,n),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){const a=e[n].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let n=0,s=t.length;n<s;n++){const a=t[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const n=i.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const n=t(e[i]);if(n)return n}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let n=0;n<e.length;n++){const s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){const i=t+":"+e;let n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,a){return i.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Yt.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,a){i.load(qs.resolveURL(e.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){const e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){const a=oo[n.type],o=ns[n.componentType],c=n.normalized===!0,l=new o(n.count*a);return Promise.resolve(new ze(l,a,c))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=oo[n.type],l=ns[n.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let S=e.cache.get(M);S||(_=new l(o,p*f,n.count*f/h),S=new Ec(_,f/h),e.cache.add(M,S)),m=new ls(S,c,d%f/h,g)}else o===null?_=new l(n.count*c):_=new l(o,d,n.count*c),m=new ze(_,c,g);if(n.sparse!==void 0){const p=oo.SCALAR,M=ns[n.sparse.indices.componentType],S=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,E=new M(a[1],S,n.sparse.count*p),w=new l(a[2],y,n.sparse.count*c);o!==null&&(m=new ze(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=E.length;R<I;R++){const v=E[R];if(m.setX(v,w[R*c]),c>=2&&m.setY(v,w[R*c+1]),c>=3&&m.setZ(v,w[R*c+2]),c>=4&&m.setW(v,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,i=this.options,s=e.textures[t].source,a=e.images[s];let o=this.textureLoader;if(a.uri){const c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,i){const n=this,s=this.json,a=s.textures[t],o=s.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=_h[d.magFilter]||Ee,h.minFilter=_h[d.minFilter]||Yi,h.wrapS=xh[d.wrapS]||Ii,h.wrapT=xh[d.wrapT]||Ii,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ie&&h.minFilter!==Ee,n.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=n.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Le(_);m.needsUpdate=!0,d(m)}),e.load(qs.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),bi(u,a),u.userData.mimeType=a.mimeType||gv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,i,n){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Yt.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Yt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Yt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return n!==void 0&&(a.colorSpace=n),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new nu,vi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(t.isLine){const o="LineBasicMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new iu,vi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}t.material=i}getMaterialType(){return qt}loadMaterial(t){const e=this,i=this.json,n=this.extensions,s=i.materials[t];let a;const o={},c=s.extensions||{},l=[];if(c[Yt.KHR_MATERIALS_UNLIT]){const u=n[Yt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,e))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new yt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ve),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",u.baseColorTexture,ye)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=me);const h=s.alphaMode||co.OPAQUE;if(h===co.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===co.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Zt&&(l.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Zt&&(l.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Zt){const u=s.emissiveFactor;o.emissive=new yt().setRGB(u[0],u[1],u[2],Ve)}return s.emissiveTexture!==void 0&&a!==Zt&&l.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,ye)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),bi(u,s),e.associations.set(u,{materials:t}),s.extensions&&Mn(n,u,s),u})}createUniqueName(t){const e=ie.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return vh(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],h=mv(l),u=n[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Yt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=vh(new xe,l,e),n[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,i=this.json,n=this.extensions,s=i.meshes[t],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?dv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const M=l[f];if(m.mode===ci.TRIANGLES||m.mode===ci.TRIANGLE_STRIP||m.mode===ci.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new ff(_,M):new et(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ci.TRIANGLE_STRIP?p.geometry=mh(p.geometry,Gh):m.mode===ci.TRIANGLE_FAN&&(p.geometry=mh(p.geometry,ec));else if(m.mode===ci.LINES)p=new yf(_,M);else if(m.mode===ci.LINE_STRIP)p=new Pc(_,M);else if(m.mode===ci.LINE_LOOP)p=new Mf(_,M);else if(m.mode===ci.POINTS)p=new Sf(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&pv(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),bi(p,s),m.extensions&&Mn(n,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&Mn(n,u[0],s),u[0];const d=new De;s.extensions&&Mn(n,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Ye(te.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new lr(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),bi(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),a=n,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Ot;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Cc(o,c)})}loadAnimation(t){const e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const f=n.channels[u],g=n.samplers[f.sampler],_=f.target,m=_.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,M=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let S=0,y=d.length;S<y;S++){const E=d[S],w=f[S],R=g[S],I=_[S],v=m[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const T=i._createAnimationTracks(E,w,R,I,v);if(T)for(let P=0;P<T.length;P++)p.push(T[P])}const M=new oc(s,void 0,p);return bi(M,n),M})}createNodeMesh(t){const e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=n.weights.length;c<l;c++)o.morphTargetInfluences[c]=n.weights[c]}),a})}loadNode(t){const e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),a=[],o=n.children||[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));const c=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,_v)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],a=s.name?n.createUniqueName(s.name):"",o=[],c=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(l){return n._getNodeRef(n.cameraCache,s.camera,l)})),n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new eu:l.length>1?h=new De:l.length===1?h=l[0]:h=new _e,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),bi(h,s),s.extensions&&Mn(i,h,s),s.matrix!==void 0){const u=new Ot;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){const u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],n=this,s=new De;i.name&&(s.name=n.createUniqueName(i.name)),bi(s,i),i.extensions&&Mn(e,s,i);const a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(n.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof vi||d instanceof Le)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=l(s),s})}_createAnimationTracks(t,e,i,n,s){const a=[],o=t.name?t.name:t.uuid,c=[];an[s.path]===an.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(an[s.path]){case an.weights:l=ds;break;case an.rotation:l=fs;break;case an.translation:case an.scale:l=ps;break;default:i.itemSize===1?l=ds:l=ps;break}const h=n.interpolation!==void 0?uv[n.interpolation]:$s,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+an[s.path],e.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=uc(e.constructor),n=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const n=this instanceof fs?hv:Pu;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vv(r,t,e){const i=t.attributes,n=new Ni;if(i.POSITION!==void 0){const o=e.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(n.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),o.normalized){const h=uc(ns[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const o=new A,c=new A;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=uc(ns[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;const a=new Ui;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function vh(r,t,e){const i=t.attributes,n=[];function s(a,o){return e.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in i){const o=hc[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(t.indices!==void 0&&!r.index){const a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});n.push(a)}return jt.workingColorSpace!==Ve&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${jt.workingColorSpace}" not supported.`),bi(r,t),vv(r,t,e),Promise.all(n).then(function(){return t.targets!==void 0?fv(r,t.targets,e):r})}const ho=new WeakMap;class yv extends In{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,i,n){const s=new ua(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,a=>{this.parse(a,e,n)},i,n)}parse(t,e,i=()=>{}){this.decodeDracoFile(t,e,null,null,ye,i).catch(i)}decodeDracoFile(t,e,i,n,s=Ve,a=()=>{}){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(t,o).then(e).catch(a)}decodeGeometry(t,e){const i=JSON.stringify(e);if(ho.has(t)){const c=ho.get(t);if(c.key===i)return c.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,a=t.byteLength,o=this._getWorker(s,a).then(c=>(n=c,new Promise((l,h)=>{n._callbacks[s]={resolve:l,reject:h},n.postMessage({type:"decode",id:s,taskConfig:e,buffer:t},[t])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),ho.set(t,{key:i,promise:o}),o}_createGeometry(t){const e=new xe;t.index&&e.setIndex(new ze(t.index.array,1));for(let i=0;i<t.attributes.length;i++){const{name:n,array:s,itemSize:a,stride:o,vertexColorSpace:c}=t.attributes[i];let l;if(a===o)l=new ze(s,a);else{const h=new Ec(s,o);l=new ls(h,a,0)}n==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(s instanceof Float32Array)),e.setAttribute(n,l)}return e}_assignVertexColorSpace(t,e){if(e!==ye)return;const i=new yt;for(let n=0,s=t.count;n<s;n++)i.fromBufferAttribute(t,n),jt.colorSpaceToWorking(i,ye),t.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(t,e){const i=new ua(this.manager);return i.setPath(this.decoderPath),i.setResponseType(e),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(t,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(i=>{const n=i[0];t||(this.decoderConfig.wasmBinary=i[1]);const s=Mv.toString(),a=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const a=s.data;switch(a.type){case"decode":n._callbacks[a.id].resolve(a);break;case"error":n._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[t]=e,i._taskLoad+=e,i})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Mv(){let r,t;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,t=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const c=o.buffer,l=o.taskConfig;t.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=e(u,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function e(a,o,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=o.GetEncodedGeometryType(c);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(c,c.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let M,S;if(l.useUniqueIDs)S=h[m],M=o.GetAttributeByUniqueId(d,S);else{if(S=o.GetAttributeId(d,a[h[m]]),S===-1)continue;M=o.GetAttribute(d,S)}const y=n(a,o,d,m,p,M);m==="color"&&(y.vertexColorSpace=l.vertexColorSpace),_.attributes.push(y)}return g===a.TRIANGULAR_MESH&&(_.index=i(a,o,d)),a.destroy(d),_}function i(a,o,c){const h=c.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function n(a,o,c,l,h,u){const d=c.num_points(),f=u.num_components(),g=s(a,h),_=f*h.BYTES_PER_ELEMENT,m=Math.ceil(_/4)*4,p=m/h.BYTES_PER_ELEMENT,M=d*_,S=d*m,y=a._malloc(M);o.GetAttributeDataArrayForAllPoints(c,u,g,M,y);const E=new h(a.HEAPF32.buffer,y,M/h.BYTES_PER_ELEMENT);let w;if(_===m)w=E.slice();else{w=new h(S/h.BYTES_PER_ELEMENT);let R=0;for(let I=0,v=E.length;I<v;I++){for(let T=0;T<f;T++)w[R+T]=E[I*f+T];R+=p}}return a._free(y),{name:l,count:d,itemSize:f,array:w,stride:p}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class Sv{constructor(){this.gltfLoader=new kx,this.dracoLoader=new yv,this.textureLoader=new xu,this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/"),this.dracoLoader.setDecoderConfig({type:"js"}),this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.textureCache=new Map,this.loadingPromises=new Map,this.debug=!1}async loadModel(t,e={}){const i=t+JSON.stringify(e);if(this.modelCache.has(i)){const s=this.modelCache.get(i);return this._cloneGLTF(s)}if(this.loadingPromises.has(i)){const s=await this.loadingPromises.get(i);return this._cloneGLTF(s)}const n=new Promise((s,a)=>{this.debug&&console.log(`[AssetManager] Loading: ${t}`),this.gltfLoader.load(t,o=>{this.debug&&(console.log(`[AssetManager] Loaded: ${t}`),console.log(`  - Animations: ${o.animations.length}`),o.animations.forEach((l,h)=>{console.log(`    ${h}: ${l.name} (${l.duration.toFixed(2)}s)`)})),e.scale&&o.scene.scale.setScalar(e.scale),o.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.material&&(Array.isArray(l.material)?l.material.forEach(h=>this._fixMaterial(h)):this._fixMaterial(l.material)))});const c={scene:o.scene,animations:o.animations,gltf:o};this.modelCache.set(i,c),s(c)},o=>{if(this.debug&&o.total>0){const c=(o.loaded/o.total*100).toFixed(1);console.log(`[AssetManager] Loading ${t}: ${c}%`)}},o=>{console.error(`[AssetManager] Failed to load: ${t}`,o),a(o)})});this.loadingPromises.set(i,n);try{const s=await n;return this.loadingPromises.delete(i),this._cloneGLTF(s)}catch(s){throw this.loadingPromises.delete(i),s}}_cloneGLTF(t){return{scene:t.scene.clone(),animations:t.animations,gltf:t.gltf}}_fixMaterial(t){(t.isMeshStandardMaterial||t.isMeshPhysicalMaterial)&&(t.metalness===void 0&&(t.metalness=0),t.roughness===void 0&&(t.roughness=.8)),t.transparent&&(t.depthWrite=!1,t.side=me)}async loadTexture(t,e={}){return this.textureCache.has(t)?this.textureCache.get(t):new Promise((i,n)=>{this.textureLoader.load(t,s=>{e.repeat&&(s.wrapS=Ii,s.wrapT=Ii,s.repeat.set(e.repeat[0],e.repeat[1])),e.encoding?s.colorSpace=e.encoding:s.colorSpace=ye,e.anisotropy&&(s.anisotropy=e.anisotropy),this.textureCache.set(t,s),i(s)},void 0,n)})}async preload(t){const e=t.map(i=>i.type==="model"?this.loadModel(i.path,i.options):i.type==="texture"?this.loadTexture(i.path,i.options):Promise.resolve());return Promise.all(e)}createAnimationSystem(t,e){const i=new Mu(t),n=new Map;return e.forEach(s=>{const a=i.clipAction(s);n.set(s.name,a),n.set(s.name.toLowerCase(),a)}),{mixer:i,actions:n,play:(s,a={})=>{const o=n.get(s)||n.get(s.toLowerCase());return o?(o.reset(),a.loop!==void 0&&o.setLoop(a.loop?zh:kh),a.clampWhenFinished&&(o.clampWhenFinished=!0),a.timeScale&&(o.timeScale=a.timeScale),a.fadeIn&&o.fadeIn(a.fadeIn),o.play(),o):(this.debug&&console.warn(`[AssetManager] Animation not found: ${s}`),null)},crossFade:(s,a,o=.2)=>{const c=n.get(s)||n.get(s.toLowerCase()),l=n.get(a)||n.get(a.toLowerCase());return l?(l.reset(),l.play(),c&&c.isRunning()&&c.crossFadeTo(l,o,!0),l):null},stopAll:()=>{i.stopAllAction()},update:s=>{i.update(s)}}}clearCache(){this.modelCache.clear(),this.textureCache.clear()}dispose(){this.modelCache.forEach(t=>{t.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(i=>i.dispose()):e.material.dispose())})}),this.textureCache.forEach(t=>{t.dispose()}),this.dracoLoader.dispose(),this.clearCache()}}const rr=new Sv,Lt={IDLE:"idle",MOVING:"moving",DODGING:"dodging",ATTACKING:"attacking",HEAVY_ATTACKING:"heavy_attacking",BLOCKING:"blocking",STAGGERED:"staggered",DEAD:"dead"},Sn={dodge:20,lightAttack:15,heavyAttack:30},gi={dodgeDuration:.45,dodgeIframes:.3,lightAttackDuration:.4,heavyAttackDuration:.7,lightHitStart:.1,lightHitEnd:.25,heavyHitStart:.2,heavyHitEnd:.4,staggerDuration:.8,comboWindow:.15},Tv={[Lt.IDLE]:"Idle",[Lt.MOVING]:"Walking",[Lt.DODGING]:"Jump",[Lt.ATTACKING]:"Punch",[Lt.HEAVY_ATTACKING]:"Punch",[Lt.BLOCKING]:"Idle",[Lt.STAGGERED]:"No",[Lt.DEAD]:"Death"};class bv{constructor(t,e,i){this.scene=t,this.gm=e,this.input=i,this.cameraController=null,this.world=null,this.state=Lt.IDLE,this.stateTimer=0,this.isInvincible=!1,this.attackCombo=0,this.hitThisSwing=!1,this.velocity=new A,this.moveSpeed=6,this.dodgeSpeed=14,this.gravity=-30,this.grounded=!0,this.collisionRadius=.4,this.currentMoveVelocity=new A,this.moveAcceleration=35,this.moveDeceleration=25,this.dodgeGhostMeshes=[],this.lastGhostSpawnTime=0,this.ghostSpawnInterval=.05,this.moveDir=new A,this.dodgeDir=new A,this.facingAngle=0,this.modelLoaded=!1,this.animSystem=null,this.currentAnim=null,this.gltfModel=null,this.mesh=new De,this.mesh.position.set(0,0,5),this._createFallbackMesh(),this.attackRange=2,this.lightDamage=15,this.heavyDamage=35,this.lightPostureDmg=10,this.heavyPostureDmg=25,t.add(this.mesh),this._loadGLTFModel()}_createFallbackMesh(){const t=new qt({color:5921384,roughness:.35,metalness:.85}),e=new hn(.35,.6,8,16);this.fallbackBody=new et(e,t),this.fallbackBody.position.y=1.1,this.fallbackBody.castShadow=!0,this.mesh.add(this.fallbackBody);const i=new Se(.22,16,12);this.fallbackHead=new et(i,t),this.fallbackHead.position.y=1.7,this.mesh.add(this.fallbackHead);const n=new qt({color:6737151,emissive:4491468,emissiveIntensity:3}),s=new Ke(.2,.04,.12);this.visor=new et(s,n),this.visor.position.set(0,1.68,.25),this.mesh.add(this.visor),this.body=this.fallbackBody}async _loadGLTFModel(){try{const t="/project-ashen/",{scene:e,animations:i}=await rr.loadModel(`${t}assets/models/robot_expressive.glb`,{scale:.8});this.gltfModel=e,this.gltfModel.position.y=0,this.gltfModel.rotation.y=Math.PI,this.gltfModel.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.material&&(n.material.color&&n.material.color.multiplyScalar(.85),n.material.emissive&&(n.material.emissive.setHex(0),n.material.emissiveIntensity=0)),n.userData.originalMaterial=n.material.clone())}),this.fallbackBody&&(this.fallbackBody.visible=!1),this.fallbackHead&&(this.fallbackHead.visible=!1),this.visor&&(this.visor.visible=!1),this.mesh.add(this.gltfModel),i&&i.length>0&&(this.animSystem=rr.createAnimationSystem(this.gltfModel,i),this._playAnimation(Lt.IDLE,{loop:!0})),this.modelLoaded=!0,this.body=this.gltfModel}catch(t){console.error("[Player] Failed to load GLTF model:",t)}}_playAnimation(t,e={}){if(!this.animSystem)return;const i=Tv[t];if(!i||this.currentAnim===i&&t!==Lt.ATTACKING)return;const n={loop:t===Lt.IDLE||t===Lt.MOVING||t===Lt.BLOCKING,fadeIn:.2,timeScale:1,clampWhenFinished:t===Lt.DEAD};t===Lt.ATTACKING?(n.timeScale=1.3+this.attackCombo*.1,n.loop=!1):t===Lt.HEAVY_ATTACKING?(n.timeScale=.9,n.loop=!1):t===Lt.DODGING?(n.timeScale=1.5,n.loop=!1):t===Lt.MOVING&&(n.timeScale=1.2);const s={...n,...e};this.currentAnim?this.animSystem.crossFade(this.currentAnim,i,s.fadeIn):this.animSystem.play(i,s),this.currentAnim=i}update(t){if(this.gm.isDead){this.state=Lt.DEAD,this.currentAnim!=="Death"&&this._playAnimation(Lt.DEAD);return}switch(this.animSystem&&this.animSystem.update(t),this.stateTimer+=t,this.state){case Lt.IDLE:case Lt.MOVING:this._processMovement(t),this._processCombatInput();break;case Lt.DODGING:this._processDodge(t);break;case Lt.ATTACKING:case Lt.HEAVY_ATTACKING:this._processAttack(t);break;case Lt.BLOCKING:this._processBlock(t);break;case Lt.STAGGERED:this.stateTimer>=gi.staggerDuration&&this._changeState(Lt.IDLE);break}if(this.world){const e=this.world.getFloorY(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y>e?(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=e?(this.mesh.position.y=e,this.velocity.y=0,this.grounded=!0):this.grounded=!1):this.mesh.position.y<e?(this.mesh.position.y=te.lerp(this.mesh.position.y,e,8*t),this.velocity.y=0,this.grounded=!0):(this.velocity.y=0,this.grounded=!0)}else this.mesh.position.y>0&&(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.velocity.y=0,this.grounded=!0))}_processMovement(t){const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const i=this._getCameraYaw(),n=new A(-Math.sin(i),0,-Math.cos(i)),s=new A(Math.cos(i),0,-Math.sin(i));this.moveDir.set(0,0,0).addScaledVector(n,-e.z).addScaledVector(s,e.x).normalize();const a=this.moveDir.clone().multiplyScalar(this.moveSpeed);this.currentMoveVelocity.lerp(a,this.moveAcceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this._applyWallCollision(),this.facingAngle=Math.atan2(this.moveDir.x,this.moveDir.z),this.mesh.rotation.y=te.lerp(this.mesh.rotation.y,this.facingAngle+Math.PI,10*t),this.state!==Lt.MOVING&&this._changeState(Lt.MOVING)}else this.currentMoveVelocity.length()>.01?(this.currentMoveVelocity.lerp(new A(0,0,0),this.moveDeceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this._applyWallCollision()):this.currentMoveVelocity.set(0,0,0),this.state===Lt.MOVING&&this._changeState(Lt.IDLE)}_applyWallCollision(){if(!this.world)return;const t=this.world.checkWallCollision(this.mesh.position,this.collisionRadius);t&&this.mesh.position.add(t)}_applyFloorCollision(){if(!this.world)return;const t=this.world.getFloorY(this.mesh.position.x,this.mesh.position.z),e=t-this.mesh.position.y;Math.abs(e)<.1?this.mesh.position.y=t:e>0?this.mesh.position.y=te.lerp(this.mesh.position.y,t,.3):this.mesh.position.y=te.lerp(this.mesh.position.y,t,.2)}_processCombatInput(){if(this.input.lockOn&&this._toggleLockOn(),this.input.dodge&&this.gm.canUseStamina(Sn.dodge)){this._startDodge();return}if(this.input.lightAttack&&this.gm.canUseStamina(Sn.lightAttack)){this._startAttack(!1);return}if(this.input.heavyAttack&&this.gm.canUseStamina(Sn.heavyAttack)){this._startAttack(!0);return}this.input.block&&this._changeState(Lt.BLOCKING)}_toggleLockOn(){if(!this.cameraController||!this.gm.enemyManager)return;const e=this.gm.enemyManager.enemies.filter(o=>!o.isDead);if(this.gm.enemyManager.boss&&!this.gm.enemyManager.boss.isDead&&e.push(this.gm.enemyManager.boss),e.length===0){this.cameraController.clearLockOn();return}const i=20,n=this.mesh.position,s=e.map(o=>({enemy:o,dist:n.distanceTo(o.mesh.position)})).filter(o=>o.dist<=i).sort((o,c)=>o.dist-c.dist);if(s.length===0){this.cameraController.clearLockOn();return}const a=this.cameraController.lockOnTarget;if(a&&!a.isDead){const o=s.findIndex(c=>c.enemy===a);if(o!==-1&&s.length>1){const c=(o+1)%s.length;this.cameraController.setLockOnTarget(s[c].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.3})}else this.cameraController.clearLockOn(),this.gm.audioManager&&this.gm.audioManager.play("menuBack",{volume:.3})}else this.cameraController.setLockOnTarget(s[0].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.4})}_startDodge(){this.gm.useStamina(Sn.dodge),this.gm.audioManager&&this.gm.audioManager.play("dodge",{position:this.mesh.position,volume:.5});const t=this.input.getMovementVector();if(t.x!==0||t.z!==0){const e=this._getCameraYaw(),i=new A(-Math.sin(e),0,-Math.cos(e)),n=new A(-Math.cos(e),0,Math.sin(e));this.dodgeDir.set(0,0,0).addScaledVector(i,-t.z).addScaledVector(n,t.x).normalize()}else this.dodgeDir.set(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.isInvincible=!0,this.lastGhostSpawnTime=0,this._flashDodgeStart(),this._changeState(Lt.DODGING)}_flashDodgeStart(){this._flashModel(65535,100)}_flashModel(t,e){if(this.gltfModel&&(this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(t),s.emissiveIntensity=.5)})}),setTimeout(()=>{this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(0),s.emissiveIntensity=0)})})},e)),this.visor&&this.visor.material){const i=this.visor.material.emissive.getHex();this.visor.material.emissive.setHex(t),this.visor.material.emissiveIntensity=8,setTimeout(()=>{this.visor.material.emissive.setHex(i),this.visor.material.emissiveIntensity=3},e)}}_spawnDodgeGhost(){const t=new De,e=new Zt({color:4491519,transparent:!0,opacity:.4,depthWrite:!1});if(this.gltfModel)this.gltfModel.traverse(i=>{if(i.isMesh&&i.visible){const n=new et(i.geometry.clone(),e);n.position.copy(i.position),n.rotation.copy(i.rotation),n.scale.copy(i.scale),t.add(n)}});else{const i=new hn(.35,.6,4,8),n=new et(i,e);n.position.y=1.1,t.add(n)}t.position.copy(this.mesh.position),t.rotation.y=this.mesh.rotation.y,this.scene.add(t),this.dodgeGhostMeshes.push({mesh:t,material:e,spawnTime:Date.now(),lifetime:200})}_updateDodgeGhosts(){const t=Date.now();for(let e=this.dodgeGhostMeshes.length-1;e>=0;e--){const i=this.dodgeGhostMeshes[e],n=t-i.spawnTime;if(n>i.lifetime)this.scene.remove(i.mesh),i.mesh.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),this.dodgeGhostMeshes.splice(e,1);else{const s=n/i.lifetime;i.material.opacity=.4*(1-s)}}}_processDodge(t){const e=this.stateTimer/gi.dodgeDuration,i=Math.sin(e*Math.PI);this.mesh.position.addScaledVector(this.dodgeDir,this.dodgeSpeed*i*t),this._applyWallCollision(),this.lastGhostSpawnTime+=t,this.isInvincible&&this.lastGhostSpawnTime>=this.ghostSpawnInterval&&(this._spawnDodgeGhost(),this.lastGhostSpawnTime=0),this._updateDodgeGhosts(),this.stateTimer>=gi.dodgeIframes&&this.isInvincible&&(this.isInvincible=!1,this._flashDodgeEnd()),this.stateTimer>=gi.dodgeDuration&&(this.isInvincible=!1,this._changeState(Lt.IDLE))}_flashDodgeEnd(){this._flashModel(2236962,50)}_startAttack(t){const e=t?Sn.heavyAttack:Sn.lightAttack;this.gm.useStamina(e),this.hitThisSwing=!1,this.gm.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.5,pitch:t?.8:1,variation:.1});const i=this._getCameraYaw();this.facingAngle=i,this.mesh.rotation.y=i+Math.PI,this.gm.particleManager,this._changeState(t?Lt.HEAVY_ATTACKING:Lt.ATTACKING)}_processAttack(t){const e=this.state===Lt.HEAVY_ATTACKING,i=e?gi.heavyAttackDuration:gi.lightAttackDuration,n=e?gi.heavyHitStart:gi.lightHitStart,s=e?gi.heavyHitEnd:gi.lightHitEnd;if(this.stateTimer>=n&&this.stateTimer<s&&!this.hitThisSwing&&this._checkHit(e),!e&&this.stateTimer>i-gi.comboWindow&&this.stateTimer<i&&this.input.lightAttack&&this.gm.canUseStamina(Sn.lightAttack)){this.attackCombo=(this.attackCombo+1)%3,this._startAttack(!1);return}const a=new A(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle)),o=e?3:2;this.stateTimer<s&&(this.mesh.position.addScaledVector(a,o*t),this._applyWallCollision()),this.stateTimer>=i&&(this.attackCombo=0,this._changeState(Lt.IDLE))}_checkHit(t){this.activeAttack={position:this.mesh.position.clone().add(new A(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(1.2)),range:this.attackRange,damage:t?this.heavyDamage:this.lightDamage,postureDmg:t?this.heavyPostureDmg:this.lightPostureDmg,isHeavy:t}}_processBlock(t){this.input.block||this._changeState(Lt.IDLE);const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const i=this._getCameraYaw(),n=new A(-Math.sin(i),0,-Math.cos(i)),s=new A(-Math.cos(i),0,Math.sin(i)),a=new A().addScaledVector(n,-e.z).addScaledVector(s,e.x).normalize();this.mesh.position.addScaledVector(a,this.moveSpeed*.3*t)}}_changeState(t){this.state!==t&&((this.state===Lt.ATTACKING||this.state===Lt.HEAVY_ATTACKING)&&(this.activeAttack=null),this.state=t,this.stateTimer=0,this._playAnimation(t))}setCameraController(t){this.cameraController=t}setWorld(t){this.world=t}_getCameraYaw(){return this.cameraController?this.cameraController.yaw:0}resetPosition(){this.mesh.position.copy(this.gm.checkpoint),this.velocity.set(0,0,0),this._changeState(Lt.IDLE)}get isBlocking(){return this.state===Lt.BLOCKING}get isAttacking(){return this.state===Lt.ATTACKING||this.state===Lt.HEAVY_ATTACKING}get isDead(){return this.state===Lt.DEAD}flashDamage(){this._flashModel(6684672,150)}}const da={CRYPT_LORDS_GREATSWORD:{id:"crypt-lords-greatsword",name:"Crypt Lord's Greatsword",type:"weapon",description:"A massive blade once wielded by the guardian of the ritual chamber. Purple energy crackles through cracks in the metal.",stats:{damage:65,scaling:{strength:"A",dexterity:"D"},weight:12,criticalDamage:110},special:"Charged R2 releases purple shockwave (consumes 20 extra stamina)",color:6693546,lightColor:8930508,canInfuse:!1},LORD_SOUL_FRAGMENT:{id:"lord-soul-fragment",name:"Lord Soul Fragment",type:"upgrade",description:"A fragment of the soul that sought godhood. Can be used at the crucible to grant +2 to any single stat track.",stats:{infusionBonus:2},color:16729343,lightColor:16738047,lore:"What rises from the ritual circle was never meant to die. It was meant to ascend."}};class Av{constructor(t,e){this.scene=t,this.gm=e,this.items=[],this.inventory={keys:new Set,weapons:[],upgrades:[]},this.bossesDefeated=new Set,this.notificationEl=document.getElementById("item-notification"),this.victoryNotificationEl=document.getElementById("victory-notification")}initItems(t){t.forEach((e,i)=>{this.spawnItem(e.pos,e.type,e)})}spawnItem(t,e,i={}){const n={id:`item-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:e,position:t.clone(),collected:!1,mesh:null,light:null,...i};switch(e){case"remnant":this._createRemnantVisual(n);break;case"key":this._createKeyVisual(n);break;case"boss_remnant":this._createBossRemnantVisual(n);break;case"boss_weapon":this._createBossWeaponVisual(n);break;case"boss_upgrade":this._createBossUpgradeVisual(n);break;default:this._createGenericVisual(n)}return this.items.push(n),n}_createRemnantVisual(t){const e=new Se(.15,12,12),i=new qt({color:8978346,emissive:4500070,emissiveIntensity:.8,transparent:!0,opacity:.9});t.mesh=new et(e,i),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh),t.light=new qi(8978346,.8,4),t.light.position.copy(t.position),this.scene.add(t.light);const n=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=n+Math.sin(Date.now()*.003)*.15,t.mesh.rotation.y+=.02,t.light.position.y=t.mesh.position.y,t.light.intensity=.6+Math.sin(Date.now()*.005)*.3)};s()}_createKeyVisual(t){const e=new De,i=new us(.12,.03,8,16),n=new qt({color:13412932,emissive:6702114,emissiveIntensity:.5,metalness:.8,roughness:.3}),s=new et(i,n);s.rotation.x=Math.PI/2,e.add(s);const a=new Ke(.04,.25,.02),o=new et(a,n);o.position.y=-.18,e.add(o);const c=new Ke(.08,.04,.02),l=new et(c,n);l.position.set(.04,-.25,0),e.add(l);const h=new et(c,n);h.position.set(.04,-.32,0),e.add(h),e.position.copy(t.position),t.mesh=e,this.scene.add(e),t.light=new qi(16755268,1,5),t.light.position.copy(t.position),this.scene.add(t.light);const u=t.position.y,d=()=>{t.collected||(requestAnimationFrame(d),t.mesh.position.y=u+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.015,t.light.position.y=t.mesh.position.y,t.light.intensity=.8+Math.sin(Date.now()*.004)*.3)};d()}_createGenericVisual(t){const e=new ha(.15),i=new qt({color:11184895,emissive:4474026,emissiveIntensity:.5});t.mesh=new et(e,i),t.mesh.position.copy(t.position),this.scene.add(t.mesh);const n=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=n+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.02,t.mesh.rotation.x+=.01)};s()}_createBossRemnantVisual(t){const e=new Se(.4,24,24),i=new qt({color:16768358,emissive:16755234,emissiveIntensity:1.2,transparent:!0,opacity:.95});t.mesh=new et(e,i),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh);const n=new Se(.2,16,16),s=new Zt({color:16777215,transparent:!0,opacity:.9}),a=new et(n,s);t.mesh.add(a),t.light=new qi(16768358,2.5,8),t.light.position.copy(t.position),this.scene.add(t.light);const o=t.position.y,c=()=>{if(t.collected)return;requestAnimationFrame(c);const l=Date.now()*.002;t.mesh.position.y=o+Math.sin(l)*.2,t.mesh.rotation.y+=.025;const h=1+Math.sin(l*2)*.08;t.mesh.scale.setScalar(h),t.light.position.y=t.mesh.position.y,t.light.intensity=2+Math.sin(l*2)*.8};c()}_createBossWeaponVisual(t){const e=new De,i=t.itemDef||da.CRYPT_LORDS_GREATSWORD,n=new Ke(.12,1.2,.03),s=new qt({color:5592422,emissive:i.color,emissiveIntensity:.4,metalness:.9,roughness:.2}),a=new et(n,s);a.position.y=.6,e.add(a);const o=new Ke(.02,.8,.04),c=new Zt({color:i.lightColor,transparent:!0,opacity:.9}),l=new et(o,c);l.position.set(.03,.5,0),l.rotation.z=.15,e.add(l);const h=new et(o,c);h.position.set(-.02,.7,0),h.rotation.z=-.1,e.add(h);const u=new Ke(.35,.06,.06),d=new qt({color:3355460,metalness:.8,roughness:.3}),f=new et(u,d);f.position.y=0,e.add(f);const g=new un(.03,.035,.3,8),_=new qt({color:4465186,roughness:.8}),m=new et(g,_);m.position.y=-.18,e.add(m);const p=new Se(.05,8,8),M=new qt({color:i.color,emissive:i.color,emissiveIntensity:.6}),S=new et(p,M);S.position.y=-.35,e.add(S),e.position.copy(t.position),e.rotation.z=Math.PI/6,t.mesh=e,this.scene.add(e),t.light=new qi(i.lightColor,1.5,6),t.light.position.copy(t.position),this.scene.add(t.light);const y=t.position.y,E=()=>{if(t.collected)return;requestAnimationFrame(E);const w=Date.now()*.001;t.mesh.position.y=y+Math.sin(w*2)*.12,t.mesh.rotation.y+=.015;const R=.6+Math.sin(w*4)*.3;c.opacity=R,t.light.position.y=t.mesh.position.y,t.light.intensity=1.2+Math.sin(w*3)*.5};E()}_createBossUpgradeVisual(t){const e=t.itemDef||da.LORD_SOUL_FRAGMENT,i=new De,n=new ha(.25),s=new qt({color:e.color,emissive:e.color,emissiveIntensity:1,transparent:!0,opacity:.85,metalness:.3,roughness:.1}),a=new et(n,s);i.add(a);const o=5,c=[];for(let u=0;u<o;u++){const d=new Se(.04,8,8),f=new Zt({color:16777215,transparent:!0,opacity:.8}),g=new et(d,f);g.userData.orbitAngle=Math.PI*2*u/o,g.userData.orbitRadius=.35+Math.random()*.1,g.userData.orbitSpeed=2+Math.random(),c.push(g),i.add(g)}i.position.copy(t.position),t.mesh=i,this.scene.add(i),t.light=new qi(e.lightColor,2,7),t.light.position.copy(t.position),this.scene.add(t.light);const l=t.position.y,h=()=>{if(t.collected)return;requestAnimationFrame(h);const u=Date.now()*.001;t.mesh.position.y=l+Math.sin(u*1.5)*.15,a.rotation.y+=.02,a.rotation.x=Math.sin(u)*.2,c.forEach(d=>{const f=d.userData.orbitAngle+u*d.userData.orbitSpeed;d.position.x=Math.cos(f)*d.userData.orbitRadius,d.position.z=Math.sin(f)*d.userData.orbitRadius,d.position.y=Math.sin(f*2)*.1}),t.light.position.y=t.mesh.position.y,t.light.intensity=1.5+Math.sin(u*2)*.7};h()}spawnBossRewards(t,e,i,n){if(this.bossesDefeated.has(e))return;this.bossesDefeated.add(e);const s=t.clone();s.y+=.5,this.spawnItem(s,"boss_remnant",{value:i,name:`${i} Remnant`});const a=t.clone();a.x+=.8,a.y+=.8;const o=n.type==="weapon"?"boss_weapon":"boss_upgrade";this.spawnItem(a,o,{itemDef:n,name:n.name,description:n.description})}showVictoryNotification(t){let e=this.victoryNotificationEl;e||(e=document.getElementById("victory-notification")),e||(e=document.createElement("div"),e.id="victory-notification-temp",e.style.cssText=`
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
      `,document.body.appendChild(e)),e.innerHTML=`<span style="display:block;font-size:0.4em;color:#aaa;margin-bottom:0.3em">GREAT FOE VANQUISHED</span>${t}`,e.style.opacity="0",setTimeout(()=>{e.style.opacity="1"},100),setTimeout(()=>{e.style.opacity="0"},4500),e.id==="victory-notification-temp"&&setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},6e3)}update(t){for(const i of this.items){if(i.collected)continue;t.distanceTo(i.position)<1.5&&this.collectItem(i)}}collectItem(t){if(t.collected)return;t.collected=!0,t.mesh&&this.scene.remove(t.mesh),t.light&&this.scene.remove(t.light),this.gm.audioManager&&this.gm.audioManager.play("itemPickup",{position:t.position,volume:.6});let e="";switch(t.type){case"remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`;break;case"boss_remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:.8});break;case"key":this.inventory.keys.add(t.keyId),e=`Got ${t.name}`;break;case"boss_weapon":this.inventory.weapons.push(t.itemDef||t),e=`Obtained: ${t.name}`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:1});break;case"boss_upgrade":this.inventory.upgrades.push(t.itemDef||t),e=`Obtained: ${t.name}`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:1});break;default:e="Item collected"}this.showNotification(e)}showNotification(t){this.notificationEl&&(this.notificationEl.textContent=t,this.notificationEl.classList.add("visible"),setTimeout(()=>{this.notificationEl.classList.remove("visible")},2e3))}hasKey(t){return this.inventory.keys.has(t)}resetItems(){}}const W={IDLE:"idle",PATROL:"patrol",CHASE:"chase",CIRCLE:"circle",RETREAT:"retreat",ATTACK:"attack",STAGGERED:"staggered",DEAD:"dead",DORMANT:"dormant",RISING:"rising",BOSS_SLAM:"boss_slam",BOSS_SWEEP:"boss_sweep",BOSS_COMBO:"boss_combo",BOSS_CHARGE:"boss_charge",BOSS_GRAB:"boss_grab",BOSS_TRANSITION:"boss_transition",BOSS_SUMMON:"boss_summon",BOSS_AOE:"boss_aoe",BOSS_PROJECTILE:"boss_projectile"},Ev={[W.IDLE]:"Idle",[W.PATROL]:"Walking",[W.CHASE]:"Running",[W.CIRCLE]:"Walking",[W.RETREAT]:"Walking",[W.ATTACK]:"Punch",[W.STAGGERED]:"No",[W.DEAD]:"Death",[W.DORMANT]:"Idle",[W.RISING]:"ThumbsUp",[W.BOSS_SLAM]:"Punch",[W.BOSS_SWEEP]:"Punch",[W.BOSS_COMBO]:"Punch",[W.BOSS_CHARGE]:"Running",[W.BOSS_GRAB]:"Punch",[W.BOSS_TRANSITION]:"No",[W.BOSS_SUMMON]:"ThumbsUp",[W.BOSS_AOE]:"Punch",[W.BOSS_PROJECTILE]:"Punch"},fa={HOLLOW_SOLDIER:{name:"Hollow Soldier",health:50,damage:15,postureDmg:15,moveSpeed:2.5,detectionRange:10,attackRange:2.2,attackCooldown:1.5,attackWindup:.5,attackDuration:.2,remnantDrop:40,patrolRadius:3,bodyColor:4860458,eyeColor:16724787,canChainAttacks:!1,maxPosture:60,hasShield:!1,modelPath:"assets/models/robot_expressive.glb",modelScale:.5,modelTint:4872762,animSpeedMult:1},BERSERKER:{name:"Berserker",health:35,damage:20,postureDmg:10,moveSpeed:4,detectionRange:12,attackRange:2,attackCooldown:.8,attackWindup:.3,attackDuration:.15,remnantDrop:60,patrolRadius:5,bodyColor:6693410,eyeColor:16737792,canChainAttacks:!0,maxChainAttacks:3,maxPosture:40,hasShield:!1,modelPath:"assets/models/robot_expressive.glb",modelScale:.55,modelTint:9052706,animSpeedMult:1.5},SENTINEL:{name:"Sentinel",health:100,damage:30,postureDmg:25,moveSpeed:1.5,detectionRange:8,attackRange:2.5,attackCooldown:2.5,attackWindup:.8,attackDuration:.3,remnantDrop:100,patrolRadius:2,bodyColor:3355460,eyeColor:4474111,canChainAttacks:!1,maxPosture:100,hasShield:!0,shieldBlockChance:.4,modelPath:"assets/models/soldier.glb",modelScale:.9,modelTint:3816026,animSpeedMult:.8},CRYPT_GUARDIAN:{name:"Crypt Guardian",health:200,damage:40,postureDmg:30,moveSpeed:1.8,detectionRange:12,attackRange:3,attackCooldown:2,attackWindup:.6,attackDuration:.4,remnantDrop:500,patrolRadius:3,bodyColor:1710634,eyeColor:16720418,canChainAttacks:!0,maxChainAttacks:2,maxPosture:150,hasShield:!1,isElite:!0,modelPath:"assets/models/soldier.glb",modelScale:1.2,modelTint:2759226,animSpeedMult:.9},BONE_REVENANT:{name:"Bone Revenant",health:40,damage:18,postureDmg:12,moveSpeed:3.5,detectionRange:8,attackRange:2,attackCooldown:.9,attackWindup:.25,attackDuration:.15,remnantDrop:70,patrolRadius:4,bodyColor:9075290,eyeColor:4521796,canChainAttacks:!0,maxChainAttacks:2,maxPosture:45,hasShield:!1,isAmbush:!0,modelPath:"assets/models/robot_expressive.glb",modelScale:.45,modelTint:9075290,animSpeedMult:1.4},CRYPT_LORD:{name:"The Crypt Lord",health:600,damage:45,postureDmg:35,moveSpeed:2,detectionRange:20,attackRange:3.5,attackCooldown:1.8,attackWindup:.8,attackDuration:.3,remnantDrop:2500,patrolRadius:3,bodyColor:1710634,eyeColor:16720418,canChainAttacks:!0,maxChainAttacks:3,maxPosture:200,hasShield:!1,isBoss:!0,isElite:!0,bossPhase:1,attacks:{GREATSWORD_SLAM:{damage:55,postureDmg:40,windup:.8,recovery:1.5,range:4},HORIZONTAL_SWEEP:{damage:45,postureDmg:35,windup:.6,recovery:1,range:4.5},THREE_HIT_COMBO:{damages:[35,35,50],postureDmg:25,windup:.4,recovery:2,range:3.5},SHOULDER_BASH:{damage:30,postureDmg:45,windup:.5,recovery:1.2,range:6,isCharge:!0},GRAB:{damage:80,postureDmg:0,windup:1,recovery:2.5,range:2.5,isGrab:!0},SKELETON_SUMMON:{windup:1.2,recovery:1.5,summonCount:2},GROUND_SLAM_AOE:{damage:50,postureDmg:60,windup:1,recovery:2,range:8,jumpHeight:3},DARK_PROJECTILE:{damage:40,windup:.6,recovery:.8,speed:8,trackingStrength:3}},modelPath:"assets/models/soldier.glb",modelScale:1.5,modelTint:2759226,animSpeedMult:.85}};class kc{constructor(t,e,i={},n=null){this.scene=t,this.gm=n;const s=i.type?fa[i.type]:{};this.config={...fa.HOLLOW_SOLDIER,...s,...i},this.maxHealth=this.config.health,this.health=this.maxHealth,this.maxPosture=this.config.maxPosture||60,this.posture=0,this.isDormant=this.config.behavior==="ambush"||this.config.isAmbush,this.triggerZone=this.config.triggerZone||null,this.triggerRadius=this.config.triggerRadius||6,this.state=this.isDormant?W.DORMANT:W.IDLE,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.isBlocking=!1,this.isDead=!1,this.chainAttackCount=0,this.lastAttackTime=0,this.circleDirection=Math.random()>.5?1:-1,this.circleTimer=0,this.spawnPos=e.clone(),this.patrolTarget=e.clone(),this.patrolWait=0,this.modelLoaded=!1,this.animSystem=null,this.currentAnim=null,this.gltfModel=null,this.mesh=new De,this.mesh.position.copy(e),this._createFallbackMesh(),this._createHealthBar(2.1),t.add(this.mesh),this.isDormant&&(this.mesh.visible=!1),this._loadGLTFModel(),this.world=null,this.collisionRadius=.5,this.lastPosition=e.clone(),this.stuckTimer=0,this.stuckThreshold=2,this.unstuckAttempts=0,this.avoidanceDir=null,this.avoidanceTimer=0,this.config.isBoss&&(this.isBoss=!0,this.bossPhase=this.config.bossPhase||1,this.bossActive=!1,this.currentBossAttack=null,this.bossComboHit=0,this.lastBossAttackTime=0,this.bossAttackCooldown=0,this.chargeTarget=null,this.chargeProgress=0,this.grabTarget=null,this.world=null,this.enemyManager=null,this.activeProjectiles=[],this.summonedAdds=[],this.lastSummonTime=0,this.summonCooldown=15e3,this.aoeJumpProgress=0,this.aoeStartY=0,this._createHealthBar(3.5))}wake(){this.state===W.DORMANT&&(this.mesh.visible=!0,this.isDormant=!1,this._changeState(W.RISING),this.gm?.audioManager&&this.gm.audioManager.play("ambush",{position:this.mesh.position,volume:.7}))}checkTrigger(t){if(this.state!==W.DORMANT)return!1;const e=t.x-this.mesh.position.x,i=t.z-this.mesh.position.z;return Math.sqrt(e*e+i*i)<this.triggerRadius}_createFallbackMesh(){const t=new qt({color:this.config.bodyColor,roughness:.7,metalness:.2}),e=new hn(.3,.5,8,16);this.fallbackBody=new et(e,t),this.fallbackBody.position.y=1,this.fallbackBody.castShadow=!0,this.mesh.add(this.fallbackBody);const i=new qt({color:this.config.eyeColor,emissive:this.config.eyeColor,emissiveIntensity:4}),n=new Se(.08,8,8);this.eye=new et(n,i),this.eye.position.set(0,1.5,.25),this.mesh.add(this.eye),this.body=this.fallbackBody}async _loadGLTFModel(){try{const t="/project-ashen/",e=this.config.modelPath||"assets/models/robot_expressive.glb",i=`${t}${e}`,n=this.config.modelScale||.5,{scene:s,animations:a}=await rr.loadModel(i,{scale:n});this.gltfModel=s,this.gltfModel.position.y=0,this.gltfModel.rotation.y=Math.PI,this.config.modelTint&&this._applyModelTint(this.config.modelTint),this.gltfModel.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.userData.originalMaterial=o.material.clone())}),this.fallbackBody&&(this.fallbackBody.visible=!1),this.mesh.add(this.gltfModel),a&&a.length>0&&(this.animSystem=rr.createAnimationSystem(this.gltfModel,a),this._playAnimation(this.state,{loop:!0})),this.modelLoaded=!0,this.body=this.gltfModel}catch(t){console.error(`[Enemy:${this.config.name}] Failed to load GLTF:`,t)}}_applyModelTint(t){const e=new yt(t);this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.color&&s.color.lerp(e,.3),s.emissive&&(s.emissive.copy(e).multiplyScalar(.1),s.emissiveIntensity=.2)})})}_playAnimation(t,e={}){if(!this.animSystem)return;const i=Ev[t];if(!i||this.currentAnim===i&&t!==W.ATTACK)return;const n=this.config.animSpeedMult||1,s={loop:t===W.IDLE||t===W.PATROL||t===W.CHASE||t===W.CIRCLE||t===W.RETREAT,fadeIn:.2,timeScale:n,clampWhenFinished:t===W.DEAD};t===W.ATTACK?(s.loop=!1,s.timeScale=n*1.2):t===W.CHASE&&(s.timeScale=n*1.3);const a={...s,...e};this.currentAnim?this.animSystem.crossFade(this.currentAnim,i,a.fadeIn):this.animSystem.play(i,a),this.currentAnim=i}_createHealthBar(t){this.healthBarGroup=new De,this.healthBarGroup.position.y=t;const e=new ui(1,.08),i=new Zt({color:1118481,side:me}),n=new et(e,i);this.healthBarGroup.add(n);const s=new ui(.98,.06),a=new Zt({color:13382451,side:me});this.healthFill=new et(s,a),this.healthFill.position.z=.001,this.healthBarGroup.add(this.healthFill);const o=new ui(1,.04),c=new Zt({color:2236945,side:me}),l=new et(o,c);l.position.y=-.08,this.healthBarGroup.add(l);const h=new ui(.98,.03),u=new Zt({color:16763904,side:me});this.postureFill=new et(h,u),this.postureFill.position.set(0,-.08,.001),this.postureFill.scale.x=0,this.healthBarGroup.add(this.postureFill),this.mesh.add(this.healthBarGroup),this.healthBarGroup.visible=!1,this.breakIndicator=this._createBreakIndicator(),this.breakIndicator.visible=!1,this.mesh.add(this.breakIndicator)}_createBreakIndicator(){const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.fillStyle="#ffcc00",e.font="bold 32px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("BREAK!",64,32);const i=new su(t),n=new Qh({map:i,transparent:!0,depthTest:!1}),s=new uf(n);return s.scale.set(1.5,.75,1),s.position.y=3,s}update(t,e){if(this.state===W.DEAD)return;this.animSystem&&this.animSystem.update(t),this.stateTimer+=t;const i=this.mesh.position.distanceTo(e.mesh.position),n=this.health/this.maxHealth;if(this.healthBarGroup.visible){const s=this.scene.getObjectByProperty("type","PerspectiveCamera");s&&this.healthBarGroup.lookAt(s.position)}switch(this.config.hasShield&&this.state===W.CHASE&&i<this.config.attackRange*1.5?this.isBlocking=Math.random()<this.config.shieldBlockChance:this.isBlocking=!1,this.state){case W.IDLE:this.patrolWait+=t,i<this.config.detectionRange?(this._changeState(W.CHASE),this.healthBarGroup.visible=!0):this.patrolWait>2&&(this.patrolWait=0,this._pickPatrolTarget(),this._changeState(W.PATROL));break;case W.PATROL:if(i<this.config.detectionRange){this._changeState(W.CHASE),this.healthBarGroup.visible=!0;break}this._moveToward(this.patrolTarget,this.config.moveSpeed*.5,t),this.mesh.position.distanceTo(this.patrolTarget)<.5&&this._changeState(W.IDLE);break;case W.CHASE:if(this.isBoss&&!this.bossActive&&(this.bossActive=!0,this.healthBarGroup.visible=!0,this.world&&this.world.activateBossArena&&this.world.activateBossArena(),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.9})),this.isBoss&&(this.playerTarget=e.mesh.position.clone()),!this.isBoss&&i>this.config.detectionRange*1.5){this._changeState(W.IDLE),this.healthBarGroup.visible=!1;break}if(!this.isBoss&&n<.3&&!this.config.canChainAttacks&&Math.random()<.01){this._changeState(W.RETREAT);break}if(i<=this.config.attackRange&&this.bossAttackCooldown<=0){this.isBoss?this._selectBossAttack(i,n):this._changeState(W.ATTACK);break}if(this.isBoss&&i>this.config.attackRange&&i<8&&this.bossAttackCooldown<=0&&Math.random()<.02){this._startBossCharge(e);break}if(i<this.config.attackRange*2&&Math.random()<.005){this._changeState(W.CIRCLE);break}this._moveToward(e.mesh.position,this.config.moveSpeed,t),this._faceTarget(e.mesh.position,t);break;case W.CIRCLE:if(this.circleTimer+=t,this.circleTimer>1.5||i>this.config.detectionRange){this._changeState(W.CHASE);break}if(i<=this.config.attackRange){this._changeState(W.ATTACK);break}this._circleStrafe(e.mesh.position,t),this._faceTarget(e.mesh.position,t);break;case W.RETREAT:if(this.stateTimer>2||i>this.config.detectionRange){this._changeState(W.CHASE);break}const s=new A().subVectors(this.mesh.position,e.mesh.position);s.y=0,s.normalize();const a=this.mesh.position.clone().add(s.multiplyScalar(3));this._moveToward(a,this.config.moveSpeed*.8,t),this._faceTarget(e.mesh.position,t);break;case W.ATTACK:this._processAttack(t,e);break;case W.STAGGERED:this.gltfModel?this.gltfModel.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5):this.fallbackBody&&(this.fallbackBody.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5)),this.stateTimer>=1.5&&(this.posture=0,this.gltfModel&&(this.gltfModel.rotation.z=0),this.fallbackBody&&(this.fallbackBody.rotation.z=0),this.breakIndicator.visible=!1,this._updatePostureBar(),this._changeState(i<this.config.detectionRange?W.CHASE:W.IDLE));break;case W.DORMANT:break;case W.RISING:if(this.stateTimer<.5){const o=this.gltfModel||this.fallbackBody;if(o){const c=this.stateTimer/.5;o.position.y=te.lerp(-.8,0,c)}}else if(this.stateTimer>=.8){const o=this.gltfModel||this.fallbackBody;o&&(o.position.y=0),this.healthBarGroup.visible=!0,this._changeState(W.CHASE)}this._faceTarget(e.mesh.position,t*2);break;case W.BOSS_SLAM:this._processBossSlamAttack(t,e);break;case W.BOSS_SWEEP:this._processBossSweepAttack(t,e);break;case W.BOSS_COMBO:this._processBossComboAttack(t,e);break;case W.BOSS_CHARGE:this._processBossChargeAttack(t,e);break;case W.BOSS_GRAB:this._processBossGrabAttack(t,e);break;case W.BOSS_TRANSITION:break;case W.BOSS_SUMMON:this._processBossSummonAttack(t,e);break;case W.BOSS_AOE:this._processBossAOEAttack(t,e);break;case W.BOSS_PROJECTILE:this._processBossProjectileAttack(t,e);break}this.isBoss&&this.activeProjectiles&&this._updateProjectiles(t,e),this.state!==W.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-8*t),this._updatePostureBar()),this.isBoss&&this.bossAttackCooldown>0&&(this.bossAttackCooldown-=t),(!this.isBoss||this.state===W.CHASE||this.state===W.PATROL)&&(this.state===W.CHASE||this.state===W.PATROL||this.state===W.RETREAT||this.state===W.CIRCLE)&&this._checkStuck(t)}_circleStrafe(t,e){const i=new A().subVectors(t,this.mesh.position);i.y=0;const n=i.length();i.normalize();const s=new A(-i.z,0,i.x).multiplyScalar(this.circleDirection),a=this.config.attackRange*1.5,o=new A().copy(i).multiplyScalar((n-a)*.5),c=s.add(o).normalize(),l=this.config.moveSpeed*.7*e,h=this.mesh.position.clone().addScaledVector(c,l);this.world&&this.world.checkCollision?this.world.checkCollision(h,this.collisionRadius).collides?this.circleDirection*=-1:this.mesh.position.copy(h):this.mesh.position.addScaledVector(c,l)}_selectBossAttack(t,e){const i=this.config.attacks;if(!i){this._changeState(W.ATTACK);return}if(this.bossPhase===2){this._selectPhase2Attack(t);return}const n=Math.random();t<=this.config.attackRange&&(n<.1&&i.GRAB?this._changeState(W.BOSS_GRAB):n<.35?this._changeState(W.BOSS_SLAM):n<.65?this._changeState(W.BOSS_COMBO):this._changeState(W.BOSS_SWEEP))}_selectPhase2Attack(t){this.config.attacks;const e=Math.random(),i=Date.now()-this.lastSummonTime>this.summonCooldown,n=this.summonedAdds.filter(s=>!s.isDead).length;if(i&&n===0&&e<.25){this._changeState(W.BOSS_SUMMON);return}if(t>this.config.attackRange&&t<10){if(e<.4)this._changeState(W.BOSS_PROJECTILE);else if(e<.7)this._changeState(W.BOSS_AOE);else if(e<.85)this.chargeTarget=this.playerTarget?this.playerTarget.clone():this.mesh.position.clone(),this.chargeProgress=0,this._changeState(W.BOSS_CHARGE);else return;return}t<=this.config.attackRange&&(e<.15?this._changeState(W.BOSS_AOE):e<.25?this._changeState(W.BOSS_PROJECTILE):e<.4?this._changeState(W.BOSS_SLAM):e<.6?this._changeState(W.BOSS_COMBO):e<.8?this._changeState(W.BOSS_SWEEP):e<.95?this._changeState(W.BOSS_GRAB):i&&n<3?this._changeState(W.BOSS_SUMMON):this._changeState(W.BOSS_SLAM))}_startBossCharge(t){this.chargeTarget=t.mesh.position.clone(),this.chargeProgress=0,this._changeState(W.BOSS_CHARGE)}_processBossSlamAttack(t,e){const i=this.config.attacks?.GREATSWORD_SLAM;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.3,a=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const o=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.x=o*-.3);return}if(this.stateTimer>=n&&this.stateTimer<s){if(!this.hitThisSwing){const c=new A(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(1.5)).add(new A(0,1.5,0)),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.8,pitch:.6})}const o=this.gltfModel||this.fallbackBody;if(o){const c=(this.stateTimer-n)/.3;o.rotation.x=te.lerp(-.3,.2,c)}}if(this.stateTimer>=s&&this.stateTimer<a){this.activeAttack=null;const o=this.gltfModel||this.fallbackBody;o&&(o.rotation.x=te.lerp(o.rotation.x,0,.08))}this.stateTimer>=a&&this._endBossAttack()}_processBossSweepAttack(t,e){const i=this.config.attacks?.HORIZONTAL_SWEEP;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.25,a=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const o=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.z=o*.3);return}if(this.stateTimer>=n&&this.stateTimer<s){this.hitThisSwing||(this.activeAttack={position:this.mesh.position.clone().add(new A(0,1.2,0)),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!1},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.7}));const o=this.gltfModel||this.fallbackBody;if(o){const c=(this.stateTimer-n)/.25;o.rotation.z=te.lerp(.3,-.25,c)}}if(this.stateTimer>=s&&this.stateTimer<a){this.activeAttack=null;const o=this.gltfModel||this.fallbackBody;o&&(o.rotation.z=te.lerp(o.rotation.z,0,.1))}this.stateTimer>=a&&this._endBossAttack()}_processBossComboAttack(t,e){const i=this.config.attacks?.THREE_HIT_COMBO;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=.3,a=n+s,o=.15,c=this.bossComboHit||0,l=c*(a+o),h=this.stateTimer-l;if(h<n){this._faceTarget(e.mesh.position,t*3);const u=h/n,d=this.gltfModel||this.fallbackBody;if(d){const f=c%2===0?1:-1;d.rotation.z=u*.25*f}return}if(h>=n&&h<a){if(!this.hitThisSwing){const f=(i.damages||[35,35,50])[c]||i.damage;this.activeAttack={position:this.mesh.position.clone().add(new A(0,1.2,0)),range:i.range,damage:f,postureDmg:i.postureDmg,isHeavy:c===2,isCombo:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.65,pitch:.85+c*.1}),this.hitThisSwing=!0}const u=this.gltfModel||this.fallbackBody;if(u){const d=(h-n)/s,f=c%2===0?1:-1;u.rotation.z=te.lerp(.25*f,-.2*f,d)}}if(h>=a){this.activeAttack=null,this.hitThisSwing=!1;const u=this.mesh.position.distanceTo(e.mesh.position);if(c<2&&u<this.config.attackRange*1.3){this.bossComboHit=c+1;const d=new A(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.mesh.position.addScaledVector(d,.5)}else{const d=this.gltfModel||this.fallbackBody;d&&(d.rotation.z=0),h>=a+i.recovery&&(this.bossComboHit=0,this._endBossAttack())}}}_processBossChargeAttack(t,e){const i=this.config.attacks?.SHOULDER_BASH;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=.4,a=n+s,o=a+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2),this.chargeTarget=e.mesh.position.clone();const c=this.stateTimer/n,l=this.gltfModel||this.fallbackBody;l&&(l.position.y=-c*.3,l.rotation.x=c*.2);return}if(this.stateTimer>=n&&this.stateTimer<a){this.hitThisSwing||(this.activeAttack={position:this.mesh.position.clone().add(new A(0,1,0)),range:2,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0,isCharge:!0},this.gm?.audioManager&&this.gm.audioManager.play("dash",{position:this.mesh.position,volume:.8}));const c=i.range/s;this._moveToward(this.chargeTarget,c,t),this.activeAttack&&(this.activeAttack.position=this.mesh.position.clone().add(new A(0,1,0)))}if(this.stateTimer>=a&&this.stateTimer<o){this.activeAttack=null;const c=this.gltfModel||this.fallbackBody;c&&(c.position.y=te.lerp(c.position.y,0,.15),c.rotation.x=te.lerp(c.rotation.x,0,.15))}this.stateTimer>=o&&this._endBossAttack()}_processBossGrabAttack(t,e){const i=this.config.attacks?.GRAB;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.3,a=s+.5,o=a+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*1.5);const c=this.stateTimer/n,l=this.gltfModel||this.fallbackBody;l&&(l.scale.x=1+c*.15);return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.mesh.position.distanceTo(e.mesh.position)<i.range&&(this.activeAttack={position:this.mesh.position.clone(),range:i.range,damage:i.damage,postureDmg:0,isGrab:!0,isUnblockable:!0},this.grabTarget=e,this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.9})),this.hitThisSwing=!0)),this.stateTimer>=s&&this.stateTimer<a){this.activeAttack=null;const c=this.gltfModel||this.fallbackBody;c&&(c.scale.x=te.lerp(c.scale.x,1,.1))}if(this.stateTimer>=a&&this.stateTimer<o){this.grabTarget=null;const c=this.gltfModel||this.fallbackBody;c&&(c.scale.x=1)}this.stateTimer>=o&&this._endBossAttack()}_endBossAttack(){this.hitThisSwing=!1,this.activeAttack=null,this.bossComboHit=0,this.chargeTarget=null,this.grabTarget=null,this.bossAttackCooldown=this.config.attackCooldown;const t=this.gltfModel||this.fallbackBody;t&&(t.rotation.x=0,t.rotation.z=0,t.position.y=0,t.scale.x=1),this._changeState(W.CHASE)}_processBossSummonAttack(t,e){const i=this.config.attacks?.SKELETON_SUMMON;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.5,a=s+i.recovery;if(this.stateTimer<n){const o=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.x=-o*.2),this.stateTimer%.2<.1&&this._flashModel(8930508,80),this.stateTimer<.1&&this.gm?.audioManager&&this.gm.audioManager.play("magic",{position:this.mesh.position,volume:.7});return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.hitThisSwing=!0,this.lastSummonTime=Date.now(),this._spawnSkeletonAdds(i.summonCount||2),this._flashModel(16729343,200),this.gm?.audioManager&&this.gm.audioManager.play("ambush",{position:this.mesh.position,volume:.8}),this.gm?.cameraController&&this.gm.cameraController.shakeLight())),this.stateTimer>=s&&this.stateTimer<a){const o=this.gltfModel||this.fallbackBody;o&&(o.rotation.x=te.lerp(o.rotation.x,0,.1))}this.stateTimer>=a&&this._endBossAttack()}_spawnSkeletonAdds(t){if(!this.enemyManager)return;const e=this.mesh.position,i=5;for(let n=0;n<t;n++){const s=Math.PI*2*n/t+Math.random()*.5,a=new A(e.x+Math.cos(s)*i,e.y,e.z+Math.sin(s)*i),o=new kc(this.scene,a,{type:"BONE_REVENANT",name:"Summoned Revenant",behavior:"guard"},this.gm);o.mesh.visible=!0,o.isDormant=!1,o.state=W.CHASE,o.healthBarGroup.visible=!0,this.summonedAdds.push(o),this.enemyManager.enemies.push(o);const c=o.gltfModel||o.fallbackBody;if(c){c.position.y=-1;const l=()=>{c.position.y<0&&(c.position.y+=.05,requestAnimationFrame(l))};l()}}}_processBossAOEAttack(t,e){const i=this.config.attacks?.GROUND_SLAM_AOE;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.4,a=s+.3,o=a+.2,c=o+i.recovery,l=this.gltfModel||this.fallbackBody;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t),this.playerTarget=e.mesh.position.clone();const h=this.stateTimer/n;l&&(l.position.y=-h*.3),this.aoeStartY=this.mesh.position.y;return}if(this.stateTimer>=n&&this.stateTimer<s){const h=(this.stateTimer-n)/.4,u=i.jumpHeight||3,d=Math.sin(h*Math.PI)*u;this.mesh.position.y=this.aoeStartY+d,l&&(l.position.y=0,l.rotation.x=-.3);const f=this.playerTarget||e.mesh.position;this._moveToward(f,8,t);return}if(this.stateTimer>=s&&this.stateTimer<a){const h=(this.stateTimer-s)/.3;this.mesh.position.y=te.lerp(this.mesh.position.y,this.aoeStartY,h*2),l&&(l.rotation.x=te.lerp(-.3,.2,h))}this.stateTimer>=a&&this.stateTimer<o&&(this.mesh.position.y=this.aoeStartY,this.hitThisSwing||(this.hitThisSwing=!0,this.activeAttack={position:this.mesh.position.clone(),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0,isAOE:!0},this._createShockwaveEffect(),this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:1,pitch:.6}),this.gm?.cameraController&&this.gm.cameraController.shake(.5,.4))),this.stateTimer>=o&&this.stateTimer<c&&(this.activeAttack=null,l&&(l.rotation.x=te.lerp(l.rotation.x,0,.1))),this.stateTimer>=c&&this._endBossAttack()}_createShockwaveEffect(){const t=new _s(.5,1.5,32),e=new Zt({color:8930508,transparent:!0,opacity:.8,side:me}),i=new et(t,e);i.rotation.x=-Math.PI/2,i.position.copy(this.mesh.position),i.position.y=.1,this.scene.add(i);const n=this.config.attacks?.GROUND_SLAM_AOE?.range||8,s=Date.now(),a=400,o=()=>{const l=(Date.now()-s)/a;if(l<1){const h=1+l*n;i.scale.set(h,h,1),i.material.opacity=.8*(1-l),requestAnimationFrame(o)}else this.scene.remove(i),i.geometry.dispose(),i.material.dispose()};o()}_processBossProjectileAttack(t,e){const i=this.config.attacks?.DARK_PROJECTILE;if(!i){this._changeState(W.CHASE);return}const n=i.windup,s=n+.2,a=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*3);const o=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.z=o*.15),this.stateTimer%.15<.075&&this._flashModel(6693546,60);return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.hitThisSwing=!0,this._spawnDarkProjectile(e,i),this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.6,pitch:1.5}))),this.stateTimer>=s&&this.stateTimer<a){const o=this.gltfModel||this.fallbackBody;o&&(o.rotation.z=te.lerp(o.rotation.z,0,.15))}this.stateTimer>=a&&this._endBossAttack()}_spawnDarkProjectile(t,e){const i=new Se(.4,16,16),n=new Zt({color:8930508,transparent:!0,opacity:.9}),s=new et(i,n),a=new A(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));s.position.copy(this.mesh.position).add(a.multiplyScalar(1.5)).add(new A(0,1.5,0));const o=new Se(.25,12,12),c=new Zt({color:16729343,transparent:!0,opacity:1}),l=new et(o,c);s.add(l);const h=new qi(8930508,2,5);s.add(h),this.scene.add(s),this.activeProjectiles.push({mesh:s,target:t,speed:e.speed||8,tracking:e.trackingStrength||3,damage:e.damage||40,lifetime:0,maxLifetime:5,direction:new A().subVectors(t.mesh.position,s.position).normalize()})}_updateProjectiles(t,e){for(let i=this.activeProjectiles.length-1;i>=0;i--){const n=this.activeProjectiles[i];if(n.lifetime+=t,n.lifetime>n.maxLifetime){this._destroyProjectile(i);continue}const s=new A().subVectors(e.mesh.position.clone().add(new A(0,1,0)),n.mesh.position),a=s.length();if(s.normalize(),n.direction.lerp(s,n.tracking*t),n.direction.normalize(),n.mesh.position.addScaledVector(n.direction,n.speed*t),n.mesh.rotation.x+=t*3,n.mesh.rotation.y+=t*2,a<1.2&&!e.isInvincible){this.gm?.takeDamage(n.damage,"magic",10,e.isBlocking),e.flashDamage(),this.gm?.hud&&this.gm.hud.flashDamage(.6),this.gm?.cameraController&&this.gm.cameraController.shakeMedium(),this.gm?.particleManager&&this.gm.particleManager.spawnHitSparks(n.mesh.position,8,!1),this._destroyProjectile(i);continue}a>30&&this._destroyProjectile(i)}}_destroyProjectile(t){const e=this.activeProjectiles[t];if(e&&e.mesh){const i=e.mesh.position.clone(),n=new Se(.8,8,8),s=new Zt({color:8930508,transparent:!0,opacity:.8}),a=new et(n,s);a.position.copy(i),this.scene.add(a);const o=()=>{a.scale.multiplyScalar(1.1),a.material.opacity-=.1,a.material.opacity>0?requestAnimationFrame(o):(this.scene.remove(a),a.geometry.dispose(),a.material.dispose())};o(),this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}this.activeProjectiles.splice(t,1)}_processAttack(t,e){const i=this.config.attackWindup,n=i+this.config.attackDuration;if(this.stateTimer<i){this._faceTarget(e.mesh.position,t*2);return}if(this.stateTimer>=i&&this.stateTimer<n&&!this.hitThisSwing){const s=new A(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(s.multiplyScalar(1)).add(new A(0,1,0)),range:this.config.attackRange,damage:this.config.damage,postureDmg:this.config.postureDmg}}if(this.stateTimer>=this.config.attackCooldown){this.hitThisSwing=!1,this.activeAttack=null;const s=this.mesh.position.distanceTo(e.mesh.position);if(this.config.canChainAttacks&&s<=this.config.attackRange*1.3&&(this.chainAttackCount++,this.chainAttackCount<this.config.maxChainAttacks)){this._changeState(W.ATTACK);return}this.chainAttackCount=0,s<=this.config.attackRange?this._changeState(W.ATTACK):this._changeState(W.CHASE)}}takeDamage(t,e=0,i=null){if(this.state===W.DEAD)return"dead";if(this.state===W.BOSS_TRANSITION)return"immune";this.isBlocking&&(t=Math.floor(t*.3),e=Math.floor(e*.5),this._flashModel(4473958,100)),this.state===W.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&(this.gm.audioManager.play("hitImpact",{position:this.mesh.position,volume:.6,variation:.15}),this.gm.audioManager.playEnemyGrunt(this.mesh.position));const n=Math.max(0,this.health/this.maxHealth);return this.healthFill.scale.x=n,this.healthFill.position.x=-(1-n)*.49*.5,this.healthBarGroup.visible=!0,this._updatePostureBar(),this._flashModel(4456448,100),this._applyHitRecoil(i,t),this.health<=0?(this._die(),"died"):this.isBoss&&this.bossPhase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2CryptLord(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==W.STAGGERED?(this._triggerPostureBreak(),"staggered"):((this.state===W.IDLE||this.state===W.PATROL)&&this._changeState(W.CHASE),"hit")}_enterPhase2CryptLord(){this.bossPhase=2,this.posture=0,this.activeAttack=null,this.hitThisSwing=!1,this._changeState(W.BOSS_TRANSITION),this.world&&this.world.setBossArenaPhase&&this.world.setBossArenaPhase("transition"),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1}),this.config.damage=55,this.config.postureDmg=45,this.config.moveSpeed=2.5,this.config.attackCooldown=1.2,this.config.maxPosture=250,this.maxPosture=250,this._cryptLordTransformSequence()}_cryptLordTransformSequence(){const e=Date.now(),i=this.gltfModel||this.fallbackBody,n=i?i.scale.clone():new A(1,1,1),s=n.clone().multiplyScalar(1.25);this.gm?.cameraController&&this.gm.cameraController.shake(.3,4);const a=()=>{const o=Date.now()-e,c=Math.min(o/4e3,1);if(this.state===W.BOSS_TRANSITION){if(i&&(i.scale.lerpVectors(n,s,c),i.rotation.z=Math.sin(o*.02)*.15*(1-c),i.rotation.x=Math.sin(o*.015)*.1*(1-c)),this.eye){const l=4+c*6;this.eye.material.emissiveIntensity=l;const h=te.lerp(1,1,c),u=te.lerp(.13,0,c),d=te.lerp(.13,1,c);this.eye.material.emissive.setRGB(h,u,d),this.eye.material.color.setRGB(h,u,d)}o%300<150&&this._flashModel(8930508,100),c<1?requestAnimationFrame(a):this._completeCryptLordTransform(i)}};a()}_completeCryptLordTransform(t){t&&(t.rotation.z=0,t.rotation.x=0),this.eye&&(this.eye.material.emissive.setHex(16711935),this.eye.material.color.setHex(16711935),this.eye.material.emissiveIntensity=5),this._applyModelTint(4465322),this.world&&this.world.setBossArenaPhase&&this.world.setBossArenaPhase("phase2"),this.bossAttackCooldown=.5,this._changeState(W.CHASE)}_flashModel(t,e){if(this.gltfModel?(this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(t),s.emissiveIntensity=.5)})}),setTimeout(()=>{this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(0),s.emissiveIntensity=0)})})},e)):this.fallbackBody&&this.fallbackBody.material&&(this.fallbackBody.material.emissive.setHex(t),setTimeout(()=>this.fallbackBody.material.emissive.setHex(0),e)),this.eye&&this.eye.material){const i=this.eye.material.emissive.getHex();this.eye.material.emissive.setHex(t),setTimeout(()=>this.eye.material.emissive.setHex(i),e)}}_applyHitRecoil(t,e){let i;if(t)i=new A().subVectors(this.mesh.position,t),i.y=0,i.normalize();else{const f=this.mesh.rotation.y;i=new A(-Math.sin(f),0,-Math.cos(f))}const n=Math.min(.5,e*.015),s=this.mesh.position.clone(),a=s.clone().add(i.multiplyScalar(n)),o=this.gltfModel||this.fallbackBody,c=o?o.rotation.z:0,l=Math.random()>.5?1:-1;o&&(o.rotation.z=c+l*.15);let h=0;const u=.12,d=()=>{h+=.016;const f=Math.min(1,h/u),g=1-Math.pow(1-f,3);this.mesh.position.lerpVectors(a,s,g),o&&(o.rotation.z=te.lerp(c+l*.15,c,g)),f<1&&requestAnimationFrame(d)};this.mesh.position.copy(a),requestAnimationFrame(d)}_triggerPostureBreak(){this._changeState(W.STAGGERED),this.breakIndicator.visible=!0,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.7}),this._flashModel(16763904,300),this.postureFill.material.color.setHex(16729088),setTimeout(()=>this.postureFill.material.color.setHex(16763904),300)}_updatePostureBar(){const t=this.posture/this.maxPosture;this.postureFill.scale.x=t,this.postureFill.position.x=-(1-t)*.49*.5}_die(){if(this.state=W.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.breakIndicator.visible=!1,this._playAnimation(W.DEAD,{loop:!1,clampWhenFinished:!0}),this.healthBarGroup.visible=!1,this.isBoss){if(this.bossActive=!1,this.world&&this.world.deactivateBossArena&&this.world.deactivateBossArena(),this.summonedAdds&&(this.summonedAdds.forEach(t=>{t&&!t.isDead&&t._die()}),this.summonedAdds=[]),this.activeProjectiles)for(let t=this.activeProjectiles.length-1;t>=0;t--)this._destroyProjectile(t);this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this._cryptLordDeathSequence();return}setTimeout(()=>{this._fadeOutModel()},2e3)}_cryptLordDeathSequence(){const e=Date.now(),i=this.gltfModel||this.fallbackBody,n=this.mesh.position.clone();this.gm?.cameraController&&this.gm.cameraController.shake(.4,3),this.gm?.itemManager&&this.gm.itemManager.showVictoryNotification("THE CRYPT LORD");const s=()=>{const a=Date.now()-e,o=Math.min(a/5e3,1);if(i)if(o<.3){const c=o/.3;i.position.y=-c*.5,i.rotation.x=c*.3,i.rotation.z=c*.15}else{const c=(o-.3)/.7;a%200<100&&this._flashModel(8930508,50),i.traverse(l=>{l.isMesh&&l.material&&(Array.isArray(l.material)?l.material:[l.material]).forEach(u=>{u.transparent=!0,u.opacity=1-c})})}this.eye&&(this.eye.material.emissiveIntensity=5*(1-o),this.eye.material.opacity=1-o),o<1?requestAnimationFrame(s):(this.mesh.visible=!1,this._spawnCryptLordRewards(n))};s()}_spawnCryptLordRewards(t){if(!this.gm?.itemManager)return;const i=Math.random()<.5?da.CRYPT_LORDS_GREATSWORD:da.LORD_SOUL_FRAGMENT;this.gm.itemManager.spawnBossRewards(t,"crypt-lord",this.config.remnantDrop||2500,i),this.bossDefeated=!0,this.enemyManager&&this.enemyManager.markBossDefeated("crypt-lord")}_fadeOutModel(){const t=this.gltfModel||this.fallbackBody;if(!t)return;t.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.transparent=!0})});const e=()=>{let i=!0;t.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{a.opacity>0&&(a.opacity-=.02,i=!1)})}),i?this.mesh.visible=!1:requestAnimationFrame(e)};e()}respawn(){this.health=this.maxHealth,this.posture=0,this.isDead=!1,this.stateTimer=0,this.chainAttackCount=0,this.circleTimer=0,this.isBlocking=!1,this.stuckTimer=0,this.unstuckAttempts=0,this.avoidanceDir=null,this.avoidanceTimer=0;let t=this.spawnPos.clone();if(this.world&&this.world.checkCollision&&this.world.checkCollision(t,this.collisionRadius).collides){const n=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(1,0,1),new A(-1,0,1),new A(1,0,-1),new A(-1,0,-1)];for(const s of n){const a=this.spawnPos.clone().add(s);if(!this.world.checkCollision(a,this.collisionRadius).collides){t=a;break}}}this.mesh.position.copy(t),this.lastPosition.copy(t);const e=this.config.behavior==="ambush"||this.config.isAmbush;this.isDormant=e,this.state=e?W.DORMANT:W.IDLE;const i=this.gltfModel||this.fallbackBody;i&&(i.rotation.x=0,i.rotation.z=0,i.position.y=0,i.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{a.opacity=1,a.transparent=!1})})),this.mesh.visible=!e,this.healthBarGroup.visible=!1,this.breakIndicator.visible=!1,this.healthFill.scale.x=1,this.healthFill.position.x=0,this.postureFill.scale.x=0,this.postureFill.position.x=0,this._playAnimation(e?W.DORMANT:W.IDLE,{loop:!0})}_moveToward(t,e,i){const n=new A().subVectors(t,this.mesh.position);if(n.y=0,n.length()<.5)return;n.normalize();const a=e*i,o=this.mesh.position.clone().addScaledVector(n,a);if(this.world&&this.world.checkCollision){const c=this.world.checkCollision(o,this.collisionRadius);if(c.collides){const l=this._findSlideDirection(n,c,i);if(l){const h=this.mesh.position.clone().addScaledVector(l,a*.7);this.world.checkCollision(h,this.collisionRadius).collides?this._tryPerpendicularMove(n,a,i):(this.mesh.position.copy(h),this.avoidanceDir=l.clone(),this.avoidanceTimer=.5)}else this._tryPerpendicularMove(n,a,i)}else this.mesh.position.copy(o),this.avoidanceDir=null,this.avoidanceTimer=0}else this.mesh.position.addScaledVector(n,a)}_findSlideDirection(t,e,i){const n=new A(-t.z,0,t.x),s=new A(t.z,0,-t.x);if(e.normal){const a=t.dot(e.normal),o=t.clone().sub(e.normal.clone().multiplyScalar(a));if(o.length()>.1)return o.normalize()}return this.avoidanceDir&&this.avoidanceTimer>0?(this.avoidanceTimer-=i,this.avoidanceDir):this.unstuckAttempts%2===0?n:s}_tryPerpendicularMove(t,e,i){if(!this.world)return;const n=new A(-t.z,0,t.x),s=new A(t.z,0,-t.x),a=this.mesh.position.clone().addScaledVector(n,e);if(!this.world.checkCollision(a,this.collisionRadius).collides){this.mesh.position.copy(a),this.avoidanceDir=n,this.avoidanceTimer=.3;return}const o=this.mesh.position.clone().addScaledVector(s,e);if(!this.world.checkCollision(o,this.collisionRadius).collides){this.mesh.position.copy(o),this.avoidanceDir=s,this.avoidanceTimer=.3;return}}_checkStuck(t){if(this.mesh.position.distanceTo(this.lastPosition)<.05){if(this.stuckTimer+=t,this.stuckTimer>this.stuckThreshold)if(this.unstuckAttempts++,this.stuckTimer=0,this.unstuckAttempts>3){if(this._pickPatrolTarget(),this.world&&this.world.checkCollision){let i=0;for(;this.world.checkCollision(this.patrolTarget,this.collisionRadius).collides&&i<5;)this._pickPatrolTarget(),i++}this.unstuckAttempts=0,this._changeState(W.PATROL)}else this.circleDirection*=-1,(this.state===W.CHASE||this.state===W.CIRCLE)&&this._changeState(W.CIRCLE)}else this.stuckTimer=0,this.unstuckAttempts=0;this.lastPosition.copy(this.mesh.position)}_faceTarget(t,e){const i=new A().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.1){const n=Math.atan2(i.x,i.z);this.mesh.rotation.y=te.lerp(this.mesh.rotation.y,n,5*e)}}_pickPatrolTarget(){const t=Math.random()*Math.PI*2,e=Math.random()*this.config.patrolRadius;this.patrolTarget.set(this.spawnPos.x+Math.cos(t)*e,0,this.spawnPos.z+Math.sin(t)*e)}_changeState(t){this.state!==t&&(this.state===W.ATTACK&&(this.activeAttack=null,this.hitThisSwing=!1),t===W.CIRCLE&&(this.circleTimer=0,this.circleDirection=Math.random()>.5?1:-1),this.state=t,this.stateTimer=0,this._playAnimation(t))}}const wt={DORMANT:"dormant",AWAKENING:"awakening",IDLE:"idle",WALK:"walk",ATTACK:"attack",HEAVY_ATTACK:"heavy_attack",AOE_ATTACK:"aoe_attack",COMBO:"combo",STAGGERED:"staggered",PHASE_TRANSITION:"phase_transition",DEAD:"dead"},wv={[wt.DORMANT]:"Idle",[wt.AWAKENING]:"Idle",[wt.IDLE]:"Idle",[wt.WALK]:"Walking",[wt.ATTACK]:"Punch",[wt.HEAVY_ATTACK]:"Punch",[wt.AOE_ATTACK]:"Jump",[wt.COMBO]:"Punch",[wt.STAGGERED]:"No",[wt.PHASE_TRANSITION]:"Death",[wt.DEAD]:"Death"};class Cv{constructor(t,e,i){this.scene=t,this.gm=i,this.name="The Failed Experiment",this.maxHealth=500,this.health=this.maxHealth,this.maxPosture=150,this.posture=0,this.phase=1,this.state=wt.DORMANT,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.comboCount=0,this.isActive=!1,this.isDead=!1,this.mixer=null,this.animations={},this.currentAction=null,this.gltfModel=null,this.gltfLoaded=!1,this.phaseConfigs={1:{moveSpeed:2,attackCooldown:2.5,attackWindup:1,damage:35,postureDmg:30,canCombo:!1,canAoE:!1,modelTint:3809344,emissiveColor:2228258},2:{moveSpeed:3.5,attackCooldown:1.5,attackWindup:.6,damage:45,postureDmg:40,canCombo:!0,maxCombo:3,canAoE:!0,aoeCooldown:8,modelTint:5902368,emissiveColor:4456465}},this.config=this.phaseConfigs[1],this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.detectionRange=15,this.attackRange=3.5,this.spawnPos=e.clone(),this.world=null,this.collisionRadius=.8,this.mesh=new De,this.mesh.position.copy(e),this.body=new De,this.mesh.add(this.body),this._createFallbackMesh(),this.eyeLights=[],this.eyes=[],this._createEyes(),this.weapon=this._createWeapon(),this.mesh.add(this.weapon),this._createAoEIndicator(),this._createAuraParticles(),this.mutatedArm=null,t.add(this.mesh),this._loadGLTFModel(),this._setDormant()}_createFallbackMesh(){const t=new la(1.2,2),e=new qt({color:1709344,roughness:.75,metalness:.25,flatShading:!0});this.fallbackMesh=new et(t,e),this.fallbackMesh.position.y=2,this.fallbackMesh.scale.set(1.3,1.6,1.2),this.fallbackMesh.castShadow=!0,this.body.add(this.fallbackMesh);const i=new la(.7,1),n=new et(i,e.clone());n.position.set(0,2.8,-.6),n.scale.set(1.3,1,.9),this.body.add(n);for(let _=0;_<12;_++){const m=.12+Math.random()*.2,p=new Se(m,6,6),M=new qt({color:2759205,roughness:.9,emissive:1114120,emissiveIntensity:.3}),S=new et(p,M),y=_/12*Math.PI*2,E=1.3+Math.random()*2,w=.8+Math.random()*.4;S.position.set(Math.cos(y)*w+(Math.random()-.5)*.3,E,Math.sin(y)*(w*.7)+(Math.random()-.5)*.3),this.body.add(S)}const s=new qt({color:9075306,roughness:.6,metalness:.3});for(let _=0;_<6;_++){const m=new us(.4-_*.035,.035,6,16,Math.PI*.75),p=new et(m,s);p.position.set(0,1.4+_*.18,.7),p.rotation.x=Math.PI/2,p.rotation.y=Math.PI,this.body.add(p)}const a=new Ic(.5,1),o=new qt({color:1709088,roughness:.7,metalness:.25}),c=new et(a,o);c.position.set(0,3.6,.35),c.scale.set(1,1.2,.85),this.body.add(c);const l=new qt({color:1709344,roughness:.75,metalness:.2}),h=new hn(.22,1,10,12),u=new et(h,l);u.position.set(-.45,.6,0),u.rotation.z=.15,this.body.add(u);const d=new hn(.24,.95,10,12),f=new et(d,l);f.position.set(.45,.6,0),f.rotation.z=-.12,this.body.add(f);const g=new qt({color:2236962,roughness:.4,metalness:.6});for(let _ of[-1,1])for(let m=0;m<3;m++){const p=new Hs(.05,.18,6),M=new et(p,g);M.position.set(_*.45+(m-1)*.1,.05,.25),M.rotation.x=Math.PI/3,this.body.add(M)}}async _loadGLTFModel(){try{const t="/project-ashen/",{scene:e,animations:i}=await rr.loadModel(`${t}assets/models/brainrobot.glb`,{scale:2.5});if(!e){console.warn("[BOSS] GLTF model failed to load, using fallback");return}this.gltfModel=e,this.gltfLoaded=!0,e.position.set(0,.5,0),e.scale.setScalar(2.5),this._applyModelTint(this.config.modelTint,this.config.emissiveColor),e.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),i&&i.length>0&&(this.mixer=new Mu(e),i.forEach(n=>{this.animations[n.name]=this.mixer.clipAction(n)}),this._playAnimation(wt.IDLE)),this.body.add(e),this.fallbackMesh&&(this.fallbackMesh.visible=!1)}catch(t){console.warn("[BOSS] GLTF loading failed:",t)}}_applyModelTint(t,e){if(!this.gltfModel)return;const i=new yt(t),n=new yt(e);this.gltfModel.traverse(s=>{s.isMesh&&s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(o=>{o.color&&o.color.lerp(i,.4),o.emissive!==void 0&&(o.emissive.copy(n),o.emissiveIntensity=.5),o.needsUpdate=!0})}),this.body.traverse(s=>{s.isMesh&&s.material&&s!==this.gltfModel&&(Array.isArray(s.material)?s.material:[s.material]).forEach(o=>{o.color&&o.color.lerp(i,.3),o.emissive!==void 0&&(o.emissive.copy(n),o.emissiveIntensity=.4)})})}_playAnimation(t,e=1){if(!this.mixer)return;const i=wv[t];if(!i)return;let n=this.animations[i];if(!n){const s=i.toLowerCase();for(const a of Object.keys(this.animations))if(a.toLowerCase().includes(s)){n=this.animations[a];break}}n&&(this.currentAction&&this.currentAction!==n?(n.reset(),n.setEffectiveTimeScale(e),n.setEffectiveWeight(1),n.crossFadeFrom(this.currentAction,.3,!0),n.play()):this.currentAction||(n.reset(),n.setEffectiveTimeScale(e),n.play()),this.currentAction=n)}_createEyes(){const t=[{x:-.18,y:3.55,z:.6,size:.11},{x:.18,y:3.55,z:.6,size:.11},{x:0,y:3.75,z:.55,size:.085},{x:-.38,y:3.35,z:.45,size:.06},{x:.38,y:3.35,z:.45,size:.06},{x:-.85,y:3.1,z:.3,size:.05},{x:-.95,y:2.9,z:.35,size:.04},{x:.12,y:2.85,z:-.35,size:.07}],e=new qt({color:16720384,emissive:16720384,emissiveIntensity:5});t.forEach(i=>{const n=new Se(i.size,12,12),s=new et(n,e.clone());if(s.position.set(i.x,i.y,i.z),this.eyes.push(s),this.body.add(s),i.size>=.08){const a=new qi(16720384,.5,3);a.position.copy(s.position),this.eyeLights.push(a),this.body.add(a)}})}_createWeapon(){const t=new De,e=new un(.08,.1,2,12),i=new qt({color:3811872,roughness:.85,metalness:.15}),n=new et(e,i);t.add(n);for(let u=0;u<5;u++){const d=new us(.11,.025,6,14),f=new et(d,new qt({color:4860456,roughness:.9}));f.position.y=-.7+u*.35,f.rotation.x=Math.PI/2,t.add(f)}const s=new Ke(.1,1.8,.6),a=new qt({color:2763306,roughness:.25,metalness:.95}),o=new et(s,a);o.position.set(0,1.5,.18),o.rotation.z=.12,t.add(o);const c=new Ke(.025,1.75,.025),l=new qt({color:16724736,emissive:16720384,emissiveIntensity:3}),h=new et(c,l);h.position.set(0,1.5,.5),h.rotation.z=.12,t.add(h);for(let u=0;u<6;u++){const d=new Hs(.04,.15,6),f=new et(d,a);f.position.set(0,.85+u*.22,-.1),f.rotation.x=-Math.PI/4,t.add(f)}return t.position.set(1.6,1.9,0),t.rotation.z=.4,t.castShadow=!0,t}_createAoEIndicator(){const t=new _s(.5,6,32),e=new Zt({color:16729088,transparent:!0,opacity:0,side:me});this.aoeIndicator=new et(t,e),this.aoeIndicator.rotation.x=-Math.PI/2,this.aoeIndicator.position.y=.1,this.mesh.add(this.aoeIndicator)}_createAuraParticles(){this.auraParticles=[];for(let t=0;t<8;t++){const e=new Se(.1,6,6),i=new qt({color:2228258,emissive:1114129,emissiveIntensity:1.5,transparent:!0,opacity:.7}),n=new et(e,i);n.userData.angle=t/8*Math.PI*2,n.userData.yOffset=Math.random()*2,n.userData.radius=.9+Math.random()*.5,this.auraParticles.push(n),this.mesh.add(n)}}_setDormant(){this.eyes.forEach(t=>{t.material.emissiveIntensity=.5}),this.eyeLights.forEach(t=>{t.intensity=.1})}_awaken(){if(this.state!==wt.DORMANT)return;this.isActive=!0,this._changeState(wt.AWAKENING),this.gm?.audioManager&&(this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this.gm.audioManager.startBossMusic());let t=0;this.eyes.forEach((e,i)=>{setTimeout(()=>{e.material.emissiveIntensity=7,setTimeout(()=>{e.material.emissiveIntensity=4.5},200)},t),t+=120}),this.eyeLights.forEach((e,i)=>{setTimeout(()=>{e.intensity=.8},i*100)})}update(t,e){if(this.state===wt.DEAD)return;this.mixer&&this.mixer.update(t),this.stateTimer+=t,this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-t),this.aoeCooldownTimer=Math.max(0,this.aoeCooldownTimer-t);const i=this.mesh.position.distanceTo(e.mesh.position);if(this.state===wt.DORMANT&&i<this.detectionRange){this._awaken();return}switch(this.state){case wt.AWAKENING:this.stateTimer<2?(this.body.position.y=Math.sin(this.stateTimer*Math.PI)*.4,this.body.rotation.z=Math.sin(this.stateTimer*3)*.05):(this.body.position.y=0,this.body.rotation.z=0,this._changeState(wt.IDLE));break;case wt.IDLE:this._faceTarget(e.mesh.position,t),this.body.position.y=Math.sin(this.stateTimer*2)*.08,this.body.scale.y=1+Math.sin(this.stateTimer*2.5)*.02,i<=this.attackRange&&this.attackCooldownTimer<=0?this._startAttack(e):i>this.attackRange&&this._changeState(wt.WALK);break;case wt.WALK:this._moveToward(e.mesh.position,t),this._faceTarget(e.mesh.position,t),this.body.position.y=Math.sin(this.stateTimer*8)*.12,this.body.rotation.z=Math.sin(this.stateTimer*4)*.03,i<=this.attackRange&&(this.attackCooldownTimer<=0?this._startAttack(e):this._changeState(wt.IDLE));break;case wt.ATTACK:this._processAttack(t,e,!1);break;case wt.HEAVY_ATTACK:this._processAttack(t,e,!0);break;case wt.AOE_ATTACK:this._processAoEAttack(t,e);break;case wt.COMBO:this._processCombo(t,e);break;case wt.STAGGERED:this.body.rotation.z=Math.sin(this.stateTimer*14)*.18*(1-this.stateTimer/2.5),this.body.position.y=Math.sin(this.stateTimer*8)*.1,this.stateTimer>=2.5&&(this.posture=0,this.body.rotation.z=0,this.body.position.y=0,this._changeState(wt.IDLE));break;case wt.PHASE_TRANSITION:this._processPhaseTransition(t);break}this.state!==wt.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-3*t));const n=this.health/this.maxHealth,s=2+(1-n)*5,a=3.5+Math.sin(Date.now()*.001*s)*(1.5+(1-n)*2.5);if(this.eyes.forEach(o=>{o.material.emissiveIntensity=a}),this.eyeLights.forEach(o=>{o.intensity=.3+a*.1}),this.auraParticles&&this.isActive){const o=Date.now()*.001;this.auraParticles.forEach((c,l)=>{const h=c.userData.angle+o*.6,u=c.userData.yOffset+Math.sin(o+l)*.4,d=c.userData.radius;c.position.set(Math.cos(h)*d,1.6+u,Math.sin(h)*d),c.material.opacity=.35+Math.sin(o*2.5+l)*.25})}}_startAttack(t){if(this.phase===2&&this.config.canAoE&&this.aoeCooldownTimer<=0&&Math.random()<.3){this._changeState(wt.AOE_ATTACK);return}if(this.phase===2&&this.config.canCombo&&Math.random()<.4){this.comboCount=0,this._changeState(wt.COMBO);return}Math.random()<.5?this._changeState(wt.ATTACK):this._changeState(wt.HEAVY_ATTACK)}_processAttack(t,e,i){const n=i?this.config.attackWindup*1.5:this.config.attackWindup,s=n+.3,a=s+(i?1:.6);if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const o=this.stateTimer/n;i?(this.weapon.rotation.z=-o*2.8,this.weapon.position.y=1.9+o*1.6,this.body.rotation.x=o*.15):(this.weapon.rotation.z=.4-o*1.6,this.body.rotation.z=o*.1);return}if(this.stateTimer>=n&&this.stateTimer<s){if(!this.hitThisSwing){const c=new A(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2.2)).add(new A(0,1.6,0)),range:this.attackRange,damage:i?this.config.damage*1.5:this.config.damage,postureDmg:i?this.config.postureDmg*1.5:this.config.postureDmg,isHeavy:i},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.7,pitch:i?.6:.8})}const o=(this.stateTimer-n)/.3;i?(this.weapon.rotation.z=-2.8+o*4.5,this.weapon.position.y=3.5-o*2.8,this.body.rotation.x=.15-o*.25):(this.weapon.rotation.z=-1.2+o*2.8,this.body.rotation.z=.1-o*.15)}this.stateTimer>=s&&(this.activeAttack=null,this.weapon.rotation.z=te.lerp(this.weapon.rotation.z,.4,.12),this.weapon.position.y=te.lerp(this.weapon.position.y,1.9,.12),this.body.rotation.x=te.lerp(this.body.rotation.x,0,.15),this.body.rotation.z=te.lerp(this.body.rotation.z,0,.15)),this.stateTimer>=a&&(this.hitThisSwing=!1,this.activeAttack=null,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(wt.IDLE))}_processCombo(t,e){const i=this.config.attackWindup*.7,n=i+.2,s=n+.3;if(this.stateTimer<i){this._faceTarget(e.mesh.position,t*3);const a=this.stateTimer/i,o=this.comboCount%2===0?1:-1;this.weapon.rotation.z=o*a*1.8,this.body.rotation.z=o*a*.08;return}if(this.stateTimer>=i&&this.stateTimer<n){if(!this.hitThisSwing){const c=new A(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2.2)).add(new A(0,1.6,0)),range:this.attackRange*.9,damage:this.config.damage*.7,postureDmg:this.config.postureDmg*.6,isCombo:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.6,pitch:.9+this.comboCount*.1})}const a=(this.stateTimer-i)/.2,o=this.comboCount%2===0?1:-1;this.weapon.rotation.z=o*(1.8-a*3.5),this.body.rotation.z=o*(.08-a*.12)}if(this.stateTimer>=s){this.comboCount++,this.hitThisSwing=!1,this.activeAttack=null;const a=this.mesh.position.distanceTo(e.mesh.position);if(this.comboCount<this.config.maxCombo&&a<this.attackRange*1.2){this.stateTimer=0;const o=new A(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.mesh.position.addScaledVector(o,.6)}else this.comboCount=0,this.attackCooldownTimer=this.config.attackCooldown*1.5,this._resetWeapon(),this._changeState(wt.IDLE)}}_processAoEAttack(t,e){if(this.stateTimer<1.5){const a=this.stateTimer/1.5;this.aoeIndicator.material.opacity=a*.65,this.aoeIndicator.scale.setScalar(1+a*.35),this.weapon.rotation.z=-a*3.2,this.weapon.position.y=1.9+a*2.2,this._flashModel(a*.5,16720384),this.eyes.forEach(o=>{o.material.emissiveIntensity=4+a*7}),this.body.position.y=Math.sin(this.stateTimer*20)*.05*a;return}this.stateTimer>=1.5&&this.stateTimer<1.8&&(this.hitThisSwing||(this.hitThisSwing=!0,this.aoeIndicator.material.opacity=1,this.aoeIndicator.material.color.setHex(16737792),this.gm?.audioManager&&this.gm.audioManager.play("explosion",{position:this.mesh.position,volume:.9}),this.mesh.position.distanceTo(e.mesh.position)<6&&!e.isInvincible&&(this.activeAttack={position:this.mesh.position.clone(),range:6,damage:this.config.damage*1.2,postureDmg:this.config.postureDmg,isAoE:!0}),this.weapon.rotation.z=.6,this.weapon.position.y=.6)),this.stateTimer>=1.8&&(this.activeAttack=null,this.aoeIndicator.material.opacity*=.88,this._flashModel(0,0)),this.stateTimer>=2.8&&(this.hitThisSwing=!1,this.aoeIndicator.material.opacity=0,this.aoeIndicator.material.color.setHex(16729088),this.aoeCooldownTimer=this.config.aoeCooldown,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(wt.IDLE))}_processPhaseTransition(t){if(this.stateTimer<3){this.body.rotation.z=Math.sin(this.stateTimer*22)*.25,this.body.scale.y=1+Math.sin(this.stateTimer*12)*.15,this.body.scale.x=1+Math.sin(this.stateTimer*10)*.08,this.eyes.forEach((a,o)=>{a.material.emissiveIntensity=6+Math.sin(this.stateTimer*18+o)*5});const i=this.stateTimer/3,n=new yt(this.phaseConfigs[1].modelTint),s=new yt(this.phaseConfigs[2].modelTint);n.lerp(s,i),this._applyModelTint(n.getHex(),this.phaseConfigs[2].emissiveColor),this.stateTimer>1.5&&!this.mutatedArm&&this._createMutatedArm();return}this.body.rotation.z=0,this.body.scale.set(1,1,1),this._applyModelTint(this.phaseConfigs[2].modelTint,this.phaseConfigs[2].emissiveColor),this.eyes.forEach(i=>{i.material.color.setHex(16729088),i.material.emissive.setHex(16729088)}),this._changeState(wt.IDLE)}_createMutatedArm(){this.mutatedArm=new De;const t=new hn(.18,1.2,12,16),e=new qt({color:3806504,roughness:.85,metalness:.15}),i=new et(t,e);i.position.set(0,0,0),i.rotation.z=.7,i.rotation.x=.45,this.mutatedArm.add(i);const n=new qt({color:2236962,roughness:.35,metalness:.75});for(let o=0;o<4;o++){const c=new Hs(.04,.25,6),l=new et(c,n);l.position.set(-.5+(o-1.5)*.1,.7,.8),l.rotation.x=-.85,this.mutatedArm.add(l)}for(let o=0;o<4;o++){const c=new Se(.07+Math.random()*.05,6,6),l=new qt({color:4859960,roughness:.9,emissive:1114120,emissiveIntensity:.4}),h=new et(c,l);h.position.set(-.25+o*.18,.25+o*.18,.4),this.mutatedArm.add(h)}this.mutatedArm.position.set(-1.1,2.7,.25),this.mesh.add(this.mutatedArm);const s=new qt({color:16729088,emissive:16729088,emissiveIntensity:5});[{x:-1.3,y:2.9,z:.55,size:.07},{x:-1.1,y:2.5,z:.65,size:.055},{x:.55,y:3.1,z:.4,size:.045}].forEach(o=>{const c=new et(new Se(o.size,10,10),s.clone());c.position.set(o.x,o.y,o.z),this.eyes.push(c),this.mesh.add(c)})}_flashModel(t,e){const i=new yt(e);this.gltfModel&&this.gltfModel.traverse(n=>{n.isMesh&&n.material&&n.material.emissive!==void 0&&(n.material.emissive.lerp(i,t),n.material.emissiveIntensity=t*2)}),this.body.traverse(n=>{n.isMesh&&n.material&&n.material.emissive!==void 0&&n.material.emissive.lerp(i,t)})}takeDamage(t,e=0,i=null){return this.state===wt.DEAD||this.state===wt.PHASE_TRANSITION||this.state===wt.DORMANT?"immune":(this.state===wt.AWAKENING&&(t=Math.floor(t*.5),e=Math.floor(e*.5)),this.state===wt.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.7}),this._flashModel(.6,16720384),setTimeout(()=>{this.state!==wt.AOE_ATTACK&&this._flashModel(0,0)},100),this._applyHitRecoil(i,t),this.health<=0?(this._die(),"died"):this.phase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==wt.STAGGERED?(this._triggerPostureBreak(),"staggered"):"hit")}_applyHitRecoil(t,e){let i;if(t)i=new A().subVectors(this.mesh.position,t),i.y=0,i.normalize();else{const d=this.body.rotation.y;i=new A(-Math.sin(d),0,-Math.cos(d))}const n=Math.min(.25,e*.006),s=this.mesh.position.clone(),a=s.clone().add(i.multiplyScalar(n)),o=this.body.rotation.z||0,c=Math.random()>.5?1:-1;this.body.rotation.z=o+c*.1;let l=0;const h=.15,u=()=>{l+=.016;const d=Math.min(1,l/h),f=1-Math.pow(1-d,3);this.mesh.position.lerpVectors(a,s,f),this.body.rotation.z=te.lerp(o+c*.1,o,f),d<1&&requestAnimationFrame(u)};this.mesh.position.copy(a),requestAnimationFrame(u)}_triggerPostureBreak(){this._changeState(wt.STAGGERED),this.activeAttack=null,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.9}),this._flashModel(1,16763904),this.eyes.forEach(t=>{t.material.emissive.setHex(16763904)}),setTimeout(()=>{this.state===wt.STAGGERED&&(this._flashModel(0,0),this.eyes.forEach(t=>{t.material.emissive.setHex(this.phase===2?16729088:16720384)}))},300)}_enterPhase2(){this.phase=2,this.config=this.phaseConfigs[2],this.posture=0,this.activeAttack=null,this._changeState(wt.PHASE_TRANSITION),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1})}_die(){this.state=wt.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.isActive=!1,this._playAnimation(wt.DEAD,.8),this.gm?.audioManager&&this.gm.audioManager.startAmbientMusic();let t=0;const e=()=>{t+=.018,this.body.position.y=-t*1.8,this.body.rotation.x=t*.6,this.body.rotation.z=t*.3,this.eyes.forEach(i=>{i.material.emissiveIntensity*=.94}),this.eyeLights.forEach(i=>{i.intensity*=.92}),t<1?requestAnimationFrame(e):this._fadeOut()};e(),this.gm&&this.gm.collectRemnants(2e3)}_fadeOut(){let t=1;const e=()=>{t-=.008;const i=n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{a.transparent=!0,a.opacity=t})};this.body.traverse(i),this.weapon.traverse(i),this.eyes.forEach(n=>{n.material.transparent=!0,n.material.opacity=t}),this.auraParticles&&this.auraParticles.forEach(n=>{n.material.opacity=t*.6}),this.mutatedArm&&this.mutatedArm.traverse(i),t>0?requestAnimationFrame(e):this.mesh.visible=!1};setTimeout(e,3e3)}_moveToward(t,e){const i=new A().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.5){i.normalize();const n=this.config.moveSpeed*e,s=this.mesh.position.clone().addScaledVector(i,n);this.world&&this.world.checkCollision?this.world.checkCollision(s,this.collisionRadius).collides||this.mesh.position.copy(s):this.mesh.position.addScaledVector(i,n)}}_faceTarget(t,e){const i=new A().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.1){const n=Math.atan2(i.x,i.z);this.body.rotation.y=te.lerp(this.body.rotation.y,n,5*e)}}_resetWeapon(){this.weapon.rotation.z=.4,this.weapon.position.set(1.6,1.9,0),this.body.rotation.x=0,this.body.rotation.z=0}_changeState(t){this.state!==t&&((this.state===wt.ATTACK||this.state===wt.HEAVY_ATTACK||this.state===wt.AOE_ATTACK||this.state===wt.COMBO)&&(this.activeAttack=null,this.hitThisSwing=!1),this.state=t,this.stateTimer=0,this._playAnimation(t))}respawn(){this.health=this.maxHealth,this.posture=0,this.phase=1,this.config=this.phaseConfigs[1],this.state=wt.DORMANT,this.stateTimer=0,this.isActive=!1,this.isDead=!1,this.comboCount=0,this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.mesh.position.copy(this.spawnPos),this.mesh.visible=!0,this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.body.scale.set(1,1,1);const t=e=>{e.isMesh&&e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.opacity=1,n.transparent=!1,n.emissive&&n.emissive.setHex(0)})};for(this.body.traverse(t),this.weapon.traverse(t),this._resetWeapon();this.eyes.length>8;){const e=this.eyes.pop();e&&this.mesh.remove(e)}this.eyes.forEach(e=>{e.material.opacity=1,e.material.transparent=!1,e.material.color.setHex(16720384),e.material.emissive.setHex(16720384)}),this.eyeLights.forEach(e=>{e.intensity=.1}),this.mutatedArm&&(this.mesh.remove(this.mutatedArm),this.mutatedArm=null),this._applyModelTint(this.phaseConfigs[1].modelTint,this.phaseConfigs[1].emissiveColor),this.aoeIndicator.material.opacity=0,this._setDormant(),this._playAnimation(wt.IDLE)}}class Rv{constructor(t,e,i,n=null,s=null){this.scene=t,this.gm=e,this.player=i,this.world=n,this.particleManager=s,this.enemies=[],this.boss=null,this.cryptLord=null,this.defeatedBosses=new Set,this._spawnEnemies(),this._spawnBoss()}_spawnEnemies(){(this.world?.getEnemySpawns()||[{pos:new A(0,0,-6),type:"HOLLOW_SOLDIER"},{pos:new A(-4,0,-15),type:"BERSERKER"},{pos:new A(5,0,-22),type:"SENTINEL"}]).forEach((e,i)=>{const n=fa[e.type]||fa.HOLLOW_SOLDIER,s=new kc(this.scene,e.pos,{type:e.type,name:n.name,behavior:e.behavior,triggerRadius:e.triggerRadius},this.gm);s.world=this.world,(e.type==="CRYPT_LORD"||e.isCryptLord)&&(this.cryptLord=s,s.enemyManager=this),this.enemies.push(s)})}_spawnBoss(){const t=this.world?.getBossPosition()||new A(0,0,-95);this.boss=new Cv(this.scene,t,this.gm),this.boss.world=this.world;const e=new _s(8,12,32),i=new Zt({color:3346705,transparent:!0,opacity:.3,side:me}),n=new et(e,i);n.rotation.x=-Math.PI/2,n.position.copy(t),n.position.y=.02,this.scene.add(n)}update(t,e){this._checkDormantTriggers(e);for(let i=this.enemies.length-1;i>=0;i--){const n=this.enemies[i];if(n.update(t,e),e.activeAttack&&!e.hitThisSwing){const s=n.mesh.position.x-e.activeAttack.position.x,a=n.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(s*s+a*a)<e.activeAttack.range&&n.health>0){const c=n.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,e.activeAttack.isHeavy?this.gm.hitstopHeavy():this.gm.hitstopLight(),this.gm.cameraController&&(e.activeAttack.isHeavy?this.gm.cameraController.shakeMedium():this.gm.cameraController.shakeLight()),this.particleManager){const l=n.mesh.position.clone(),h=n.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(l,8,e.activeAttack.isHeavy),this.particleManager.spawnBlood(l,h,Math.ceil(e.activeAttack.damage/5)),c==="posture_broken"&&this.particleManager.spawnPostureBreak(l)}c==="died"&&(this.gm.addRemnant(n.config.remnantDrop),this.particleManager&&this.particleManager.spawnDeathBurst(n.mesh.position.clone()),setTimeout(()=>{n.respawn()},8e3))}}if(n.activeAttack&&!n.hitThisSwing){const s=e.mesh.position.x-n.activeAttack.position.x,a=e.mesh.position.z-n.activeAttack.position.z;if(Math.sqrt(s*s+a*a)<n.activeAttack.range&&!e.isInvincible){const c=this.gm.takeDamage(n.activeAttack.damage,"physical",n.activeAttack.postureDmg,e.isBlocking);if(n.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const l=n.activeAttack.damage/30;this.gm.hud.flashDamage(Math.min(1,l))}if(this.gm.cameraController&&this.gm.cameraController.shakeHeavy(),this.particleManager){const l=e.mesh.position.clone(),h=e.mesh.position.clone().sub(n.mesh.position).normalize();e.isBlocking&&c!=="guard_broken"?this.particleManager.spawnBlockSparks(l):(this.particleManager.spawnHitSparks(l,6,!1),this.particleManager.spawnBlood(l,h,Math.ceil(n.activeAttack.damage/5))),(c==="guard_broken"||c==="posture_broken")&&this.particleManager.spawnPostureBreak(l)}c==="died"||(c==="guard_broken"||c==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}if(this.boss){if(this.boss.update(t,e),e.activeAttack&&!e.hitThisSwing&&!this.boss.isDead){const i=this.boss.mesh.position.x-e.activeAttack.position.x,n=this.boss.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(i*i+n*n)<e.activeAttack.range+1&&this.boss.health>0){const a=this.boss.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,this.gm.hitstopHeavy(),this.gm.cameraController&&this.gm.cameraController.shakeMedium(),this.particleManager){const o=this.boss.mesh.position.clone(),c=this.boss.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(o,12,e.activeAttack.isHeavy),this.particleManager.spawnBlood(o,c,Math.ceil(e.activeAttack.damage/3)),a==="posture_broken"&&this.particleManager.spawnPostureBreak(o),a==="died"&&(this.particleManager.spawnDeathBurst(o),this.particleManager.spawnDeathBurst(o))}}}if(this.boss.activeAttack&&!this.boss.hitThisSwing){const i=e.mesh.position.x-this.boss.activeAttack.position.x,n=e.mesh.position.z-this.boss.activeAttack.position.z;if(Math.sqrt(i*i+n*n)<this.boss.activeAttack.range&&!e.isInvincible){const a=this.gm.takeDamage(this.boss.activeAttack.damage,"physical",this.boss.activeAttack.postureDmg,e.isBlocking);if(this.boss.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const o=this.boss.activeAttack.damage/25;this.gm.hud.flashDamage(Math.min(1,o))}if(this.gm.cameraController&&this.gm.cameraController.shake(.7,.25),this.particleManager){const o=e.mesh.position.clone(),c=e.mesh.position.clone().sub(this.boss.mesh.position).normalize();e.isBlocking&&a!=="guard_broken"?(this.particleManager.spawnBlockSparks(o),this.particleManager.spawnBlockSparks(o)):(this.particleManager.spawnHitSparks(o,10,!0),this.particleManager.spawnBlood(o,c,Math.ceil(this.boss.activeAttack.damage/4))),(a==="guard_broken"||a==="posture_broken")&&this.particleManager.spawnPostureBreak(o)}a==="died"||(a==="guard_broken"||a==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}}_checkDormantTriggers(t){const e=t.mesh.position;for(const i of this.enemies)i.checkTrigger&&i.checkTrigger(e)&&(i.wake(),this.gm?.audioManager&&this.gm.audioManager.play("ambushReveal",{position:i.mesh.position,volume:.8}),this.gm?.cameraController&&this.gm.cameraController.shakeLight())}resetAll(){this.enemies.forEach(t=>{t.isBoss&&this.defeatedBosses.has(t.bossId||"crypt-lord")||t.respawn()}),this.boss&&this.boss.respawn()}markBossDefeated(t){this.defeatedBosses.add(t)}isBossDefeated(t){return this.defeatedBosses.has(t)}getBoss(){return this.boss}getCryptLord(){return this.cryptLord}getActiveBoss(){return this.cryptLord&&this.cryptLord.bossActive&&!this.cryptLord.isDead?this.cryptLord:this.boss&&this.boss.isActive&&!this.boss.isDead?this.boss:null}}const Iu=Math.sqrt(3),Pv=.5*(Iu-1),Us=(3-Iu)/6,yh=r=>Math.floor(r)|0,Mh=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Iv(r=Math.random){const t=Dv(r),e=new Float64Array(t).map(n=>Mh[n%12*2]),i=new Float64Array(t).map(n=>Mh[n%12*2+1]);return function(s,a){let o=0,c=0,l=0;const h=(s+a)*Pv,u=yh(s+h),d=yh(a+h),f=(u+d)*Us,g=u-f,_=d-f,m=s-g,p=a-_;let M,S;m>p?(M=1,S=0):(M=0,S=1);const y=m-M+Us,E=p-S+Us,w=m-1+2*Us,R=p-1+2*Us,I=u&255,v=d&255;let T=.5-m*m-p*p;if(T>=0){const B=I+t[v],H=e[B],V=i[B];T*=T,o=T*T*(H*m+V*p)}let P=.5-y*y-E*E;if(P>=0){const B=I+M+t[v+S],H=e[B],V=i[B];P*=P,c=P*P*(H*y+V*E)}let O=.5-w*w-R*R;if(O>=0){const B=I+1+t[v+1],H=e[B],V=i[B];O*=O,l=O*O*(H*w+V*R)}return 70*(o+c+l)}}function Dv(r){const e=new Uint8Array(512);for(let i=0;i<512/2;i++)e[i]=i;for(let i=0;i<512/2-1;i++){const n=i+~~(r()*(256-i)),s=e[i];e[i]=e[n],e[n]=s}for(let i=256;i<512;i++)e[i]=e[i-256];return e}class Lv{constructor(t){this.scene=t,this.size=256,this.resolution=128,this.heightScale=25,this.baseHeight=0,this.castleRadius=30,this.castleBlendRadius=45,this.seed=12345,this.noise2D=Iv(()=>this.seed/1e4),this.octaves=[{frequency:.003,amplitude:1},{frequency:.01,amplitude:.4},{frequency:.03,amplitude:.15},{frequency:.08,amplitude:.05}],this.mesh=null,this.heightData=null,this.geometry=null,this.colliders=[],this._generateTerrain()}_sampleNoise(t,e){let i=0,n=0;for(const s of this.octaves)i+=this.noise2D(t*s.frequency,e*s.frequency)*s.amplitude,n+=s.amplitude;return i/=n,i*this.heightScale+this.baseHeight}getTerrainHeight(t,e){const i=Math.sqrt(t*t+e*e);if(i<this.castleRadius)return this.baseHeight;const n=this._sampleNoise(t,e);if(i<this.castleBlendRadius){const s=(i-this.castleRadius)/(this.castleBlendRadius-this.castleRadius),a=s*s*(3-2*s);return te.lerp(this.baseHeight,n,a)}return n}getTerrainSlope(t,e){const n=this.getTerrainHeight(t,e),s=this.getTerrainHeight(t+1,e),a=this.getTerrainHeight(t,e+1),o=(s-n)/1,c=(a-n)/1;return Math.sqrt(o*o+c*c)}getTerrainNormal(t,e){const n=this.getTerrainHeight(t,e),s=this.getTerrainHeight(t+1,e),a=this.getTerrainHeight(t,e+1),o=new A(1,s-n,0),c=new A(0,a-n,1);return new A().crossVectors(c,o).normalize()}_generateTerrain(){this.size/2,this.size/this.resolution,this.geometry=new ui(this.size,this.size,this.resolution,this.resolution),this.geometry.rotateX(-Math.PI/2);const t=this.geometry.attributes.position.array,e=(this.resolution+1)*(this.resolution+1);this.heightData=new Float32Array(e);for(let n=0;n<t.length;n+=3){const s=t[n],a=t[n+2],o=this.getTerrainHeight(s,a);t[n+1]=o,this.heightData[n/3]=o}this.geometry.computeVertexNormals();const i=this._createTerrainMaterial();this.mesh=new et(this.geometry,i),this.mesh.receiveShadow=!0,this.mesh.castShadow=!1,this.scene.add(this.mesh),console.log(`[TerrainGenerator] Created ${this.size}x${this.size} terrain with ${e} vertices`)}_createTerrainMaterial(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#3a5a30",e.fillRect(0,0,512,512);for(let n=0;n<1e4;n++){const s=Math.random()*512,a=Math.random()*512,c=80+Math.floor(Math.random()*30),l=50+Math.floor(Math.random()*20),h=40+Math.floor(Math.random()*15);e.fillStyle=`rgb(${l}, ${c}, ${h})`,e.fillRect(s,a,2+Math.random()*3,2+Math.random()*3)}for(let n=0;n<50;n++){const s=Math.random()*512,a=Math.random()*512,o=10+Math.random()*30;e.fillStyle=`rgba(90, 70, 50, ${.2+Math.random()*.3})`,e.beginPath(),e.ellipse(s,a,o,o*.7,0,0,Math.PI*2),e.fill()}const i=new su(t);return i.wrapS=Ii,i.wrapT=Ii,i.repeat.set(16,16),new qt({map:i,color:6982224,roughness:.9,metalness:0})}getBiome(t,e){const i=Math.sqrt(t*t+e*e);return i<this.castleRadius?"castle":i<100?"safe_meadow":i<300?"grassland":i<600?"dense_woods":"dark_frontier"}getBiomeParams(t,e){const i=this.getBiome(t,e),n={castle:{treeDensity:0,grassDensity:0,fogDensity:0,ambientLight:1,groundColor:5592405},safe_meadow:{treeDensity:.05,grassDensity:.8,fogDensity:.001,ambientLight:.9,groundColor:8039008},grassland:{treeDensity:.15,grassDensity:.6,fogDensity:.002,ambientLight:.7,groundColor:5933632},dense_woods:{treeDensity:.5,grassDensity:.4,fogDensity:.004,ambientLight:.4,groundColor:3825712},dark_frontier:{treeDensity:.3,grassDensity:.2,fogDensity:.008,ambientLight:.2,groundColor:4872768}};return n[i]||n.grassland}findValidSpawnPoint(t=50,e=200){for(let n=0;n<20;n++){const s=Math.random()*Math.PI*2,a=t+Math.random()*(e-t),o=Math.cos(s)*a,c=Math.sin(s)*a,l=this.getTerrainHeight(o,c);if(!(this.getTerrainSlope(o,c)>.5)&&!(l<-2))return new A(o,l,c)}return new A(60,this.getTerrainHeight(60,0),0)}raycast(t){const e=t.intersectObject(this.mesh);return e.length>0?e[0].point:null}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.geometry.dispose(),this.mesh.material.dispose())}}class Nv{constructor(t){this.scene=t,this.colliders=[],this.floorZones=[],this.stairs=[],this.doors=[],this.hiddenWalls=[],this.ladders=[],this.shortcuts=[],this.bonfirePosition=new A(0,0,0),this.bossArena={active:!1,phase:"idle"},this._createSkybox(),this.terrain=new Lv(t),this._createStartingCastle(),this._createLighting(),this.bonfirePosition.y=this.terrain.getTerrainHeight(0,0)}getFloorY(t,e){return this.terrain.getTerrainHeight(t,e)}getTerrainSlope(t,e){return this.terrain.getTerrainSlope(t,e)}getBiome(t,e){return this.terrain.getBiome(t,e)}checkWallCollision(t,e=.4){const i=new A;let n=!1;for(const s of this.colliders)if(s.type==="box"){const a=s.bounds;if(!a)continue;const o=a.min.x-e,c=a.max.x+e,l=a.min.z-e,h=a.max.z+e;if(t.x>o&&t.x<c&&t.z>l&&t.z<h&&t.y>a.min.y-1&&t.y<a.max.y){const u=t.x-o,d=c-t.x,f=t.z-l,g=h-t.z,_=Math.min(u,d,f,g);_===u?i.x-=u:_===d?i.x+=d:_===f?i.z-=f:i.z+=g,n=!0}}else if(s.type==="cylinder"){const a=t.x-s.position.x,o=t.z-s.position.z,c=Math.sqrt(a*a+o*o),l=s.radius+e;if(c<l&&t.y>s.position.y-4&&t.y<s.position.y+s.height){const h=l-c;c>.001&&(i.x+=a/c*h,i.z+=o/c*h),n=!0}}return n?i:null}_createSkybox(){const t=new Se(500,32,32),e=new ke({uniforms:{topColor:{value:new yt(4491468)},horizonColor:{value:new yt(8956620)},bottomColor:{value:new yt(6715204)},sunDirection:{value:new A(.5,.7,.3).normalize()},sunColor:{value:new yt(16777181)}},vertexShader:`
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
      `,side:je}),i=new et(t,e);this.scene.add(i);const n=new _a(20,32),s=new Zt({color:16777198,transparent:!0,opacity:.9}),a=new et(n,s);a.position.set(150,200,100),a.lookAt(0,0,0),this.scene.add(a)}_createLighting(){const t=new vu(16775920,2);t.position.set(50,80,30),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=1,t.shadow.camera.far=200,t.shadow.camera.left=-80,t.shadow.camera.right=80,t.shadow.camera.top=80,t.shadow.camera.bottom=-80,t.shadow.bias=-.001,this.scene.add(t);const e=new yp(6719658,.6);this.scene.add(e);const i=new mp(8956620,4478259,.5);this.scene.add(i)}_createStartingCastle(){const c=new qt({color:5592405,roughness:.9,metalness:.1}),l=new qt({color:4473924,roughness:.95,metalness:.05}),h=new ui(36,46),u=new qt({color:3816e3,roughness:.95}),d=new et(h,u);d.rotation.x=-Math.PI/2,d.position.y=.05,d.receiveShadow=!0,this.scene.add(d);const f=(y,E,w,R,I,v)=>{const T=new Ke(R,I,v),P=new et(T,c);P.position.set(y,E+I/2,w),P.castShadow=!0,P.receiveShadow=!0,this.scene.add(P),this.colliders.push({type:"box",bounds:new Ni(new A(y-R/2,E,w-v/2),new A(y+R/2,E+I,w+v/2))})},g=(y,E)=>{const w=new un(3.5,4,12,8),R=new et(w,l);R.position.set(y,12/2,E),R.castShadow=!0,R.receiveShadow=!0,this.scene.add(R);const I=new un(8/2+.2,8/2-.3,1.5,8),v=new et(I,c);v.position.set(y,12+.75,E),v.castShadow=!0,this.scene.add(v),this.colliders.push({type:"cylinder",position:new A(y,0,E),radius:8/2,height:12})},_=40/2,m=50/2;f(0,0,-m,40,8,2);const p=34/2;f(-_+p/2+2/2,0,m,p-2,8,2),f(_-p/2-2/2,0,m,p-2,8,2),f(-_,0,0,2,8,50),f(_,0,0,2,8,50),g(-_+8/2,-m+8/2),g(_-8/2,-m+8/2),g(-_+8/2,m-8/2),g(_-8/2,m-8/2),this._createBonfire(0,0,-5);const M=new Ke(7,1.5,2+.5),S=new et(M,l);S.position.set(0,8-.25,m),S.castShadow=!0,this.scene.add(S),console.log("[World] Starting castle created")}_createBonfire(t,e,i){const n=new De;n.position.set(t,e,i);const s=new us(.8,.15,8,16),a=new qt({color:3355443,roughness:.9}),o=new et(s,a);o.rotation.x=Math.PI/2,o.position.y=.1,o.castShadow=!0,n.add(o);const c=new qt({color:3809296,roughness:.95});for(let f=0;f<6;f++){const g=new un(.08,.1,.8,6),_=new et(g,c),m=f/6*Math.PI*2;_.position.set(Math.cos(m)*.3,.15,Math.sin(m)*.3),_.rotation.x=Math.PI/2,_.rotation.z=m+Math.PI/2,_.rotation.y=.3,n.add(_)}const l=new qi(16746547,3,15);l.position.y=.8,l.castShadow=!0,n.add(l);const h=()=>{requestAnimationFrame(h),l.intensity=2.5+Math.sin(Date.now()*.01)*.5+Math.random()*.3};h();const u=new Se(.05,8,8),d=new Zt({color:16737792});for(let f=0;f<8;f++){const g=new et(u,d);g.position.set((Math.random()-.5)*.4,.3+Math.random()*.5,(Math.random()-.5)*.4),n.add(g)}this.scene.add(n),this.bonfirePosition.set(t,e,i)}getItemSpawns(){return[]}getNearbyDoor(t){return null}tryOpenDoor(t,e){return!1}getNearbyLadder(t){return null}getNearbyShortcut(t){return null}unlockShortcut(t){return!1}checkHiddenWallHit(t,e){return null}revealHiddenWall(t){}checkInsideIllusoryWall(t){return null}activateBossArena(){return!1}setBossArenaPhase(t){return null}updateBossArena(t,e){return 0}deactivateBossArena(){return!1}isBlockedByFogGate(t){return!1}getBossArenaState(){return{active:!1,phase:"idle"}}dispose(){this.terrain&&this.terrain.dispose()}}class Uv{constructor(t){this.keys={},this.mouseButtons={},this.mouseDelta={x:0,y:0},this.isLocked=!1,this.buffer={},this.bufferDuration=.15,this.domElement=t,window.addEventListener("keydown",e=>{this.keys[e.code]=!0,this._bufferAction(e.code)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),t.addEventListener("mousedown",e=>{this.mouseButtons[e.button]=!0,this._bufferAction(`mouse${e.button}`)}),t.addEventListener("mouseup",e=>{this.mouseButtons[e.button]=!1}),t.addEventListener("mousemove",e=>{this.isLocked&&(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY)}),t.addEventListener("click",()=>{this.isLocked||t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault())}_bufferAction(t){this.buffer[t]=this.bufferDuration}update(t){const e=t||.016666666666666666;for(const i in this.buffer)this.buffer[i]-=e,this.buffer[i]<=0&&delete this.buffer[i]}consumeBuffer(t){return this.buffer[t]?(delete this.buffer[t],!0):!1}getMouseDelta(){const t={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}get moveForward(){return this.keys.KeyW}get moveBack(){return this.keys.KeyS}get moveLeft(){return this.keys.KeyA}get moveRight(){return this.keys.KeyD}get dodge(){return this.consumeBuffer("Space")}get lightAttack(){return this.consumeBuffer("mouse0")}get heavyAttack(){return this.consumeBuffer("mouse2")}get block(){return this.keys.ShiftLeft||this.keys.ShiftRight}get lockOn(){return this.consumeBuffer("KeyQ")}get interact(){return this.consumeBuffer("KeyE")}getMovementVector(){let t=0,e=0;this.moveForward&&(e-=1),this.moveBack&&(e+=1),this.moveLeft&&(t-=1),this.moveRight&&(t+=1);const i=Math.sqrt(t*t+e*e);return i>0&&(t/=i,e/=i),{x:t,z:e}}}class Ov{constructor(t){this.gm=t,this.healthBar=document.getElementById("health-bar"),this.staminaBar=document.getElementById("stamina-bar"),this.postureBar=document.getElementById("posture-bar"),this.remnantLabel=document.getElementById("remnant"),this.lostRemnantLabel=document.getElementById("lost-remnant"),this.bossContainer=document.getElementById("boss-container"),this.bossName=document.getElementById("boss-name"),this.bossHealthBar=document.getElementById("boss-health-bar"),this.bossPostureBar=document.getElementById("boss-posture-bar"),this.bossPhase=document.getElementById("boss-phase"),this.enemyManager=null,this._createDamageVignette(),this.damageVignetteOpacity=0,this.staminaWarningActive=!1}_createDamageVignette(){this.damageVignette=document.createElement("div"),this.damageVignette.id="damage-vignette",this.damageVignette.style.cssText=`
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
    `,document.body.appendChild(this.hitFlash)}flashDamage(t=.6){this.damageVignetteOpacity=Math.min(1,t),this.damageVignette.style.opacity=this.damageVignetteOpacity,this.hitFlash.style.opacity=Math.min(.5,t*.8),setTimeout(()=>{this.damageVignette.style.opacity=this.damageVignetteOpacity*.5,this.hitFlash.style.opacity=0},80),setTimeout(()=>{this.damageVignette.style.opacity=0},250)}flashStaminaDepleted(){this.staminaWarningActive||(this.staminaWarningActive=!0,this.staminaBar&&(this.staminaBar.style.background="linear-gradient(90deg, #ffaa00, #ff6600)",this.staminaBar.style.boxShadow="0 0 10px #ff6600",setTimeout(()=>{this.staminaBar.style.background="",this.staminaBar.style.boxShadow="",this.staminaWarningActive=!1},300)))}setEnemyManager(t){this.enemyManager=t}update(){this.healthBar&&(this.healthBar.style.width=`${this.gm.health/this.gm.maxHealth*100}%`),this.staminaBar&&(this.staminaBar.style.width=`${this.gm.stamina/this.gm.maxStamina*100}%`),this.postureBar&&(this.postureBar.style.width=`${this.gm.posture/this.gm.maxPosture*100}%`),this.remnantLabel&&(this.remnantLabel.textContent=`Remnant: ${this.gm.remnant}`),this.lostRemnantLabel&&(this.gm.bloodstain&&this.gm.heldRemnant>0?(this.lostRemnantLabel.style.display="block",this.lostRemnantLabel.textContent=`Lost: ${this.gm.heldRemnant} (recover at bloodstain)`):this.lostRemnantLabel.style.display="none"),this._updateBossUI()}_updateBossUI(){if(!this.enemyManager||!this.bossContainer)return;const t=this.enemyManager.getCryptLord(),e=this.enemyManager.getBoss();let i=null,n=!1;if(t&&t.bossActive&&!t.isDead?(i=t,n=!0):e&&e.isActive&&!e.isDead&&(i=e),!i){this.bossContainer.style.display="none";return}if(this.bossContainer.style.display="block",this.bossName&&(this.bossName.textContent=n?i.config.name:i.name),this.bossHealthBar){const s=i.health/i.maxHealth*100;this.bossHealthBar.style.width=`${s}%`,n?(i.bossPhase||1)===2?this.bossHealthBar.style.background="linear-gradient(90deg, #8844cc, #aa66ff)":this.bossHealthBar.style.background="linear-gradient(90deg, #882222, #cc4444)":i.phase===2?this.bossHealthBar.style.background="linear-gradient(90deg, #ff4400, #ff6622)":this.bossHealthBar.style.background="linear-gradient(90deg, #cc2222, #ff4444)",s<=50&&s>0?this.bossHealthBar.classList.add("phase-two"):this.bossHealthBar.classList.remove("phase-two")}if(this.bossPostureBar){const s=i.posture/i.maxPosture*100;this.bossPostureBar.style.width=`${s}%`}if(this.bossPhase){const s=n?i.bossPhase||1:i.phase;this.bossPhase.textContent=s===2?"PHASE 2":"",this.bossPhase.style.color=s===2?n?"#aa66ff":"#ff4400":"#ffcc00"}}}class Bv{constructor(t,e,i){this.gm=t,this.input=e,this.player=i,this.isOpen=!1,this.selectedTrack=0,this.tracks=["strength","vitality","stamina","spirit"],this._createUI(),window.addEventListener("keydown",n=>this._handleKey(n))}_createUI(){if(this.container=document.getElementById("crucible-container"),!this.container){console.warn("CrucibleUI: #crucible-container not found in HTML");return}this.promptEl=document.getElementById("crucible-prompt"),this.menuEl=document.getElementById("crucible-menu"),this.trackEls=this.tracks.map(t=>document.getElementById(`track-${t}`)),this.remnantEl=document.getElementById("crucible-remnant")}update(){if(!this.container)return;const t=this.gm.isNearBonfire(),e=this.gm.isDead;this.isOpen?(!t||e||this.input.keys.Escape)&&this._close():t&&!e?(this._showPrompt(!0),this.input.interact&&this._open()):this._showPrompt(!1),this.isOpen&&this._updateMenu()}_showPrompt(t){this.promptEl&&(this.promptEl.style.display=t?"block":"none")}_open(){this.isOpen=!0,this._showPrompt(!1),this.menuEl&&(this.menuEl.style.display="block"),document.pointerLockElement&&document.exitPointerLock()}_close(){this.isOpen=!1,this.menuEl&&(this.menuEl.style.display="none")}_handleKey(t){if(this.isOpen)switch(t.code){case"ArrowUp":case"KeyW":t.preventDefault(),this.selectedTrack=(this.selectedTrack-1+this.tracks.length)%this.tracks.length;break;case"ArrowDown":case"KeyS":t.preventDefault(),this.selectedTrack=(this.selectedTrack+1)%this.tracks.length;break;case"Enter":case"KeyF":t.preventDefault(),this._purchaseSelected();break;case"Escape":case"KeyE":t.preventDefault(),this._close();break}}_purchaseSelected(){const t=this.tracks[this.selectedTrack],e=this.gm.getTrackInfo(t);e.maxed||!e.canAfford||this.gm.infuse(t)&&(this.gm.applyInfusionBonuses(),this._applyVisualEffect(t))}_applyVisualEffect(t){if(!this.player)return;const e=this.gm.infusions[t],n=1+this.gm.getTotalDepth()*.01;switch(this.player.mesh.scale.setScalar(n),t){case"strength":this._addGlow(this.player.body,16729156,e*.1);break;case"vitality":this._addGlow(this.player.body,4521796,e*.1);break;case"stamina":this._addGlow(this.player.body,16777028,e*.1);break;case"spirit":this._addGlow(this.player.visor,4491519,e*.3);break}}_addGlow(t,e,i){if(!t||!t.material)return;const n=t.material.emissive?t.material.emissive.getHex():0,s=this._blendColors(n,e,.5);t.material.emissive.setHex(s),t.material.emissiveIntensity=Math.min(2,(t.material.emissiveIntensity||0)+i)}_blendColors(t,e,i){const n=t>>16&255,s=t>>8&255,a=t&255,o=e>>16&255,c=e>>8&255,l=e&255,h=Math.round(n+(o-n)*i),u=Math.round(s+(c-s)*i),d=Math.round(a+(l-a)*i);return h<<16|u<<8|d}_updateMenu(){this.remnantEl&&(this.remnantEl.textContent=`Remnant: ${this.gm.remnant}`),this.tracks.forEach((t,e)=>{const i=this.trackEls[e];if(!i)return;const n=this.gm.getTrackInfo(t),s=e===this.selectedTrack;i.classList.toggle("selected",s),i.classList.toggle("maxed",n.maxed),i.classList.toggle("affordable",n.canAfford&&!n.maxed);const a=i.querySelector(".track-name"),o=i.querySelector(".track-level"),c=i.querySelector(".track-cost"),l=i.querySelector(".track-bonus");a&&(a.textContent=n.name),o&&(o.textContent=`Lv. ${n.level}/${this.gm.MAX_TRACK_DEPTH}`),c&&(c.textContent=n.maxed?"MAX":`Cost: ${n.cost}`),l&&(l.textContent=n.bonus)})}}class Fv{constructor(t,e,i){this.camera=t,this.target=e,this.input=i,this.distance=6,this.minDistance=3,this.maxDistance=12,this.height=2.5,this.sensitivity=.002,this.yaw=0,this.pitch=.3,this.minPitch=-.5,this.maxPitch=1.2,this.smoothing=8,this.currentPos=t.position.clone(),this.lockOnTarget=null,this.lockOnYaw=0,this.lockOnTransition=0,this.lockOnTransitionSpeed=5,this.shakeIntensity=0,this.shakeDuration=0,this.shakeTimer=0,this.shakeOffset=new A,this.shakeDecay=.92}shake(t=.3,e=.15){this.shakeIntensity=Math.min(this.shakeIntensity+t,1),this.shakeDuration=Math.max(this.shakeDuration,e),this.shakeTimer=0}shakeLight(){this.shake(.15,.1)}shakeMedium(){this.shake(.35,.15)}shakeHeavy(){this.shake(.5,.2)}update(t){const e=this.input.getMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch+e.y*this.sensitivity));const i=this.target.position.clone();if(i.y+=this.height,this.lockOnTarget&&this.lockOnTarget.mesh){const h=this.lockOnTarget.mesh.position,u=this.target.position.distanceTo(h);if(this.lockOnTarget.isDead||u>25)this.lockOnTarget=null,this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);else{const d=new A().subVectors(h,i);d.y=0,this.lockOnYaw=Math.atan2(d.x,d.z)+Math.PI,this.lockOnTransition=Math.min(1,this.lockOnTransition+this.lockOnTransitionSpeed*t)}}else this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);let n=this.yaw;if(this.lockOnTransition>0){let h=this.lockOnYaw-this.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;n=this.yaw+h*this.lockOnTransition}const s=Math.sin(n)*this.distance*Math.cos(this.pitch),a=Math.cos(n)*this.distance*Math.cos(this.pitch),o=this.distance*Math.sin(this.pitch),c=new A(i.x+s,i.y+o,i.z+a);this.currentPos.lerp(c,this.smoothing*t),this._updateShake(t),this.camera.position.copy(this.currentPos),this.camera.position.add(this.shakeOffset);const l=i.clone();if(this.lockOnTarget&&this.lockOnTarget.mesh&&this.lockOnTransition>0){const h=this.lockOnTarget.mesh.position.clone();h.y+=1,l.lerp(h,.35*this.lockOnTransition)}this.camera.lookAt(l)}_updateShake(t){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity),this.shakeIntensity*=this.shakeDecay,this.shakeTimer+=t,this.shakeTimer>=this.shakeDuration&&(this.shakeIntensity=0,this.shakeOffset.set(0,0,0))):this.shakeOffset.set(0,0,0)}setLockOnTarget(t){if(this.lockOnTarget=t,t&&t.mesh){const e=this.target.position.clone();e.y+=this.height;const i=new A().subVectors(t.mesh.position,e);i.y=0,this.lockOnYaw=Math.atan2(i.x,i.z)+Math.PI}}isLockedOn(){return this.lockOnTarget!==null&&this.lockOnTransition>.5}clearLockOn(){this.lockOnTarget=null}getForwardDirection(){return new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).normalize()}getRightDirection(){return new A(-Math.cos(this.yaw),0,Math.sin(this.yaw)).normalize()}}class kv{constructor(t){this.camera=t,this.context=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.initialized=!1,this.masterVolume=.7,this.musicVolume=.4,this.sfxVolume=.8,this.listener=null,this.currentMusic=null,this.musicSource=null,this.soundCooldowns={},this.soundBuffers={}}async init(){if(!this.initialized)try{this.context=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.context.createGain(),this.masterGain.gain.value=this.masterVolume,this.masterGain.connect(this.context.destination),this.musicGain=this.context.createGain(),this.musicGain.gain.value=this.musicVolume,this.musicGain.connect(this.masterGain),this.sfxGain=this.context.createGain(),this.sfxGain.gain.value=this.sfxVolume,this.sfxGain.connect(this.masterGain),this.listener=this.context.listener,await this.generateSoundBuffers(),this.initialized=!0}catch(t){console.warn("[AUDIO] Failed to initialize:",t)}}async generateSoundBuffers(){this.soundBuffers.swordSwing=this.createNoiseBuffer(.15,"highpass",2e3,.3),this.soundBuffers.hitImpact=this.createImpactBuffer(.12,150,.6),this.soundBuffers.criticalHit=this.createImpactBuffer(.15,200,.8),this.soundBuffers.playerDamage=this.createImpactBuffer(.2,80,.5),this.soundBuffers.enemyGrunt1=this.createGruntBuffer(.2,120),this.soundBuffers.enemyGrunt2=this.createGruntBuffer(.25,100),this.soundBuffers.enemyGrunt3=this.createGruntBuffer(.18,140),this.soundBuffers.dodge=this.createNoiseBuffer(.2,"bandpass",800,.25),this.soundBuffers.footstepStone=this.createFootstepBuffer(.08,"stone"),this.soundBuffers.footstepMetal=this.createFootstepBuffer(.1,"metal"),this.soundBuffers.death=this.createDeathBuffer(.8),this.soundBuffers.postureBreak=this.createPostureBreakBuffer(.3),this.soundBuffers.itemPickup=this.createChimeBuffer(.3,[523,659,784]),this.soundBuffers.doorUnlock=this.createChimeBuffer(.4,[392,494,587]),this.soundBuffers.menuSelect=this.createChimeBuffer(.15,[880]),this.soundBuffers.menuConfirm=this.createChimeBuffer(.2,[523,659]),this.soundBuffers.bossRoar=this.createRoarBuffer(.6),this.soundBuffers.staminaDepleted=this.createStaminaDepletedBuffer(.15)}createNoiseBuffer(t,e,i,n){const s=this.context.sampleRate,a=s*t,o=this.context.createBuffer(1,a,s),c=o.getChannelData(0);for(let l=0;l<a;l++){const h=l/a,u=Math.sin(h*Math.PI);c[l]=(Math.random()*2-1)*u*n}return{buffer:o,filterType:e,filterFreq:i}}createImpactBuffer(t,e,i){const n=this.context.sampleRate,s=n*t,a=this.context.createBuffer(1,s,n),o=a.getChannelData(0);for(let c=0;c<s;c++){const l=c/s,h=Math.exp(-l*10),u=Math.sin(2*Math.PI*e*l*(1-l*.5)),d=(Math.random()*2-1)*.3;o[c]=(u+d)*h*i}return{buffer:a}}createGruntBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),a=s.getChannelData(0);for(let o=0;o<n;o++){const c=o/n,l=Math.sin(c*Math.PI)*Math.exp(-c*3),h=Math.sin(2*Math.PI*e*o/i),u=Math.sin(2*Math.PI*e*2.5*o/i)*.5,d=Math.sin(2*Math.PI*e*4*o/i)*.25,f=(Math.random()*2-1)*.2;a[o]=(h+u+d+f)*l*.4}return{buffer:s}}createFootstepBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),a=s.getChannelData(0),o=e==="metal"?400:200,c=e==="metal"?.6:.4;for(let l=0;l<n;l++){const h=l/n,u=Math.exp(-h*20),d=Math.sin(2*Math.PI*o*h),f=(Math.random()*2-1)*c;a[l]=(d*.5+f)*u*.3}return{buffer:s}}createDeathBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let a=0;a<i;a++){const o=a/i,c=Math.exp(-o*2)*(1-o),l=150*(1-o*.5),h=Math.sin(2*Math.PI*l*a/e),u=Math.tanh(h*3),d=(Math.random()*2-1)*.3*(1-o);s[a]=(u+d)*c*.5}return{buffer:n}}createPostureBreakBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let a=0;a<i;a++){const o=a/i,c=Math.exp(-o*5),l=Math.sin(2*Math.PI*800*a/e),h=Math.sin(2*Math.PI*1200*a/e),u=(Math.random()*2-1)*.5;s[a]=(l*.3+h*.2+u)*c*.4}return{buffer:n}}createChimeBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),a=s.getChannelData(0);for(let o=0;o<n;o++){const c=o/n,l=Math.exp(-c*4);let h=0;e.forEach((u,d)=>{const f=d*.03*i;if(o>f){const g=(o-f)/i;h+=Math.sin(2*Math.PI*u*g)/e.length}}),a[o]=h*l*.3}return{buffer:s}}createStaminaDepletedBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let a=0;a<i;a++){const o=a/i,c=Math.exp(-o*8)*Math.sin(o*Math.PI*2),l=(Math.random()*2-1)*.6,h=Math.sin(2*Math.PI*200*a/e)*.3;s[a]=(l+h)*Math.abs(c)*.25}return{buffer:n}}createRoarBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let a=0;a<i;a++){const o=a/i;let c;o<.1?c=o/.1:o<.7?c=1:c=(1-o)/.3;const l=Math.sin(2*Math.PI*60*a/e),h=Math.sin(2*Math.PI*65*a/e),u=Math.sin(2*Math.PI*120*a/e)*.5,d=(Math.random()*2-1)*.4,f=Math.tanh((l+h+u+d)*2);s[a]=f*c*.5}return{buffer:n}}play(t,e={}){if(!this.initialized||!this.soundBuffers[t])return;const{position:i=null,volume:n=1,pitch:s=1,cooldown:a=0,variation:o=0}=e,c=performance.now();if(a>0){const f=this.soundCooldowns[t]||0;if(c-f<a)return;this.soundCooldowns[t]=c}const l=this.soundBuffers[t],h=this.context.createBufferSource();h.buffer=l.buffer;const u=s+(Math.random()*2-1)*o;h.playbackRate.value=Math.max(.5,Math.min(2,u));const d=this.context.createGain();if(d.gain.value=n,l.filterType){const f=this.context.createBiquadFilter();f.type=l.filterType,f.frequency.value=l.filterFreq,h.connect(f),f.connect(d)}else h.connect(d);if(i&&this.camera){const f=this.context.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1,f.maxDistance=50,f.rolloffFactor=1,f.setPosition(i.x,i.y,i.z),d.connect(f),f.connect(this.sfxGain)}else d.connect(this.sfxGain);return h.start(),h}playEnemyGrunt(t){const e=["enemyGrunt1","enemyGrunt2","enemyGrunt3"],i=e[Math.floor(Math.random()*e.length)];this.play(i,{position:t,volume:.6,pitch:.9+Math.random()*.2,cooldown:200})}playFootstep(t,e="stone"){const i=e==="metal"?"footstepMetal":"footstepStone";this.play(i,{position:t,volume:.4,pitch:.9+Math.random()*.2,cooldown:150})}updateListener(){if(!this.initialized||!this.camera||!this.listener)return;const t=this.camera.position,e=new A;this.camera.getWorldDirection(e);const i=this.camera.up;this.listener.positionX?(this.listener.positionX.value=t.x,this.listener.positionY.value=t.y,this.listener.positionZ.value=t.z,this.listener.forwardX.value=e.x,this.listener.forwardY.value=e.y,this.listener.forwardZ.value=e.z,this.listener.upX.value=i.x,this.listener.upY.value=i.y,this.listener.upZ.value=i.z):(this.listener.setPosition(t.x,t.y,t.z),this.listener.setOrientation(e.x,e.y,e.z,i.x,i.y,i.z))}startAmbientMusic(){this.initialized&&this.currentMusic!=="ambient"&&(this.stopMusic(),this.currentMusic="ambient",this.createAmbientDrone())}startBossMusic(){this.initialized&&this.currentMusic!=="boss"&&(this.stopMusic(),this.currentMusic="boss",this.createBossMusic())}createAmbientDrone(){const t=this.context.createOscillator();t.type="sine",t.frequency.value=55;const e=this.context.createOscillator();e.type="sine",e.frequency.value=82.5;const i=this.context.createOscillator();i.type="sine",i.frequency.value=.1;const n=this.context.createGain();n.gain.value=2,i.connect(n),n.connect(t.frequency);const s=this.context.createGain();s.gain.value=.15;const a=this.context.createGain();a.gain.value=.1,t.connect(s),e.connect(a),s.connect(this.musicGain),a.connect(this.musicGain),t.start(),e.start(),i.start(),this.musicSource={oscs:[t,e,i]}}createBossMusic(){const t=this.context.createOscillator();t.type="sawtooth",t.frequency.value=55;const e=this.context.createWaveShaper();e.curve=this.makeDistortionCurve(20);const i=this.context.createOscillator();i.type="square",i.frequency.value=2;const n=this.context.createGain();n.gain.value=.3;const s=this.context.createGain();s.gain.value=.2,i.connect(n),n.connect(s.gain),t.connect(e),e.connect(s),s.connect(this.musicGain),t.start(),i.start(),this.musicSource={oscs:[t,i]}}makeDistortionCurve(t){const i=new Float32Array(44100),n=Math.PI/180;for(let s=0;s<44100;++s){const a=s*2/44100-1;i[s]=(3+t)*a*20*n/(Math.PI+t*Math.abs(a))}return i}stopMusic(){this.musicSource&&this.musicSource.oscs&&this.musicSource.oscs.forEach(t=>{try{t.stop()}catch{}}),this.musicSource=null,this.currentMusic=null}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&(this.masterGain.gain.value=this.masterVolume)}setMusicVolume(t){this.musicVolume=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}resume(){this.context&&this.context.state==="suspended"&&this.context.resume()}}class zv{constructor(t){this.scene=t,this.particles=[],this.slashTrails=[],this.embers=[],this.dustMotes=[],this._initSharedAssets(),this._initEmbers(),this._initDustMotes()}_initSharedAssets(){this.sparkGeo=new xe;const t=new Float32Array([0,.05,0,-.02,0,0,0,-.05,0,.02,0,0,0,.05,0,0,0,.02,0,-.05,0,0,0,-.02]);this.sparkGeo.setAttribute("position",new ze(t,3)),this.bloodGeo=new Uc(.06,0),this.emberGeo=new Se(.02,4,4),this.sparkMat=new Zt({color:16755268,transparent:!0,opacity:1,side:me}),this.critSparkMat=new Zt({color:16777096,transparent:!0,opacity:1,side:me}),this.bloodMat=new Zt({color:8912930,transparent:!0,opacity:.9}),this.emberMat=new Zt({color:16729088,transparent:!0,opacity:.7}),this.slashMat=new Zt({color:6719743,transparent:!0,opacity:.6,side:me,blending:Xi,depthWrite:!1}),this.heavySlashMat=new Zt({color:16737860,transparent:!0,opacity:.7,side:me,blending:Xi,depthWrite:!1})}_initEmbers(){for(let e=0;e<30;e++)this._spawnEmber()}_spawnEmber(){const t=new et(this.emberGeo,this.emberMat.clone());t.position.set((Math.random()-.5)*60,Math.random()*.5,(Math.random()-.5)*100-20),this.scene.add(t),this.embers.push({mesh:t,velocity:new A((Math.random()-.5)*.3,.3+Math.random()*.5,(Math.random()-.5)*.3),life:Math.random()*10,maxLife:8+Math.random()*6})}_initDustMotes(){this.dustGeo=new ui(.03,.03),this.dustMat=new Zt({color:16777198,transparent:!0,opacity:.4,blending:Xi,depthWrite:!1,side:me});for(let e=0;e<80;e++){const i=new et(this.dustGeo,this.dustMat.clone());i.position.set((Math.random()-.5)*40,.5+Math.random()*5,(Math.random()-.5)*80-20),this.scene.add(i),this.dustMotes.push({mesh:i,baseY:i.position.y,driftSpeed:.1+Math.random()*.2,driftAmplitude:.3+Math.random()*.5,phase:Math.random()*Math.PI*2,rotateSpeed:(Math.random()-.5)*2})}}spawnSlashTrail(t,e,i=!1){const n=i?1.8:1.4,s=i?Math.PI*.7:Math.PI*.5,a=12,o=i?.15:.1,c=new hu;c.moveTo(0,0);for(let f=0;f<=a;f++){const g=-s/2+s*f/a,_=Math.cos(g)*n,m=Math.sin(g)*n;f===0?c.moveTo(_,m):c.lineTo(_,m)}for(let f=a;f>=0;f--){const g=-s/2+s*f/a,_=Math.cos(g)*(n-o),m=Math.sin(g)*(n-o);c.lineTo(_,m)}c.closePath();const l=new Nc(c),h=(i?this.heavySlashMat:this.slashMat).clone(),u=new et(l,h);u.position.copy(t),u.position.y+=1.2;const d=Math.atan2(e.x,e.z);u.rotation.y=d,u.rotation.x=i?-.5:.2,this.scene.add(u),this.slashTrails.push({mesh:u,life:0,maxLife:i?.35:.25,scaleStart:.3,scaleEnd:1})}spawnHitSparks(t,e=8,i=!1){const n=i?e*2:e,s=i?this.critSparkMat:this.sparkMat;for(let a=0;a<n;a++){const o=new et(this.sparkGeo,s.clone());o.position.copy(t),o.position.y+=.8+Math.random()*.4;const c=Math.random()*Math.PI*2,l=2+Math.random()*4,h=2+Math.random()*3;this.scene.add(o),this.particles.push({mesh:o,velocity:new A(Math.cos(c)*l,h,Math.sin(c)*l),gravity:-15,life:0,maxLife:.3+Math.random()*.2,type:"spark"})}}spawnBlood(t,e,i=6){const n=Math.min(i,15);for(let s=0;s<n;s++){const a=new et(this.bloodGeo,this.bloodMat.clone());a.position.copy(t),a.position.y+=.8+Math.random()*.6;const c=Math.atan2(e.x,e.z)+(Math.random()-.5)*Math.PI*.6,l=3+Math.random()*3,h=1+Math.random()*3;this.scene.add(a),this.particles.push({mesh:a,velocity:new A(Math.sin(c)*l,h,Math.cos(c)*l),gravity:-18,life:0,maxLife:.6+Math.random()*.4,type:"blood",scale:.8+Math.random()*.4})}}spawnPostureBreak(t){this.spawnHitSparks(t,20,!0);const e=new _s(.1,.3,32),i=new Zt({color:16763972,transparent:!0,opacity:.8,side:me,blending:Xi,depthWrite:!1}),n=new et(e,i);n.position.copy(t),n.position.y+=1,n.rotation.x=-Math.PI/2,this.scene.add(n),this.particles.push({mesh:n,velocity:new A(0,0,0),gravity:0,life:0,maxLife:.5,type:"ring",expandRate:8})}spawnBlockSparks(t){for(let i=0;i<5;i++){const n=new et(this.sparkGeo,this.sparkMat.clone());n.material.color.setHex(8947967),n.position.copy(t),n.position.y+=1;const s=Math.random()*Math.PI*2,a=1+Math.random()*2;this.scene.add(n),this.particles.push({mesh:n,velocity:new A(Math.cos(s)*a,1+Math.random()*2,Math.sin(s)*a),gravity:-10,life:0,maxLife:.25,type:"spark"})}}spawnDeathBurst(t){for(let e=0;e<12;e++){const i=e/12*Math.PI*2,n=new et(this.bloodGeo,this.bloodMat.clone());n.position.copy(t),n.position.y+=1,this.scene.add(n),this.particles.push({mesh:n,velocity:new A(Math.cos(i)*4,2+Math.random()*3,Math.sin(i)*4),gravity:-15,life:0,maxLife:.8,type:"blood",scale:1.2})}for(let e=0;e<6;e++){const i=new Se(.1,8,8),n=new Zt({color:8956671,transparent:!0,opacity:.8,blending:Xi}),s=new et(i,n);s.position.copy(t),s.position.y+=.5+Math.random()*.5,s.position.x+=(Math.random()-.5)*.5,s.position.z+=(Math.random()-.5)*.5,this.scene.add(s),this.particles.push({mesh:s,velocity:new A((Math.random()-.5)*.5,2+Math.random()*1,(Math.random()-.5)*.5),gravity:0,life:0,maxLife:1.5+Math.random()*.5,type:"wisp"})}}update(t){this._updateDeathEffects(t);for(let i=this.particles.length-1;i>=0;i--){const n=this.particles[i];if(n.life+=t,n.velocity.y+=n.gravity*t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.type==="ring"){const a=1+n.expandRate*n.life;n.mesh.scale.set(a,a,1)}if(n.type==="playerSoul"){n.mesh.position.x+=Math.sin(n.life*2)*t*.5,n.mesh.position.z+=Math.cos(n.life*2)*t*.5;const o=.6+Math.sin(n.life*5)*.4;n.mesh.material.opacity=o*(1-n.life/n.maxLife)}if(n.type==="deathMist"){const a=1+n.life*.5;n.mesh.scale.setScalar(a)}const s=1-n.life/n.maxLife;if(n.mesh.material.opacity!==void 0&&(n.mesh.material.opacity=s*(n.type==="blood"?.9:1)),n.scale){const a=n.scale*s;n.mesh.scale.setScalar(a)}n.type==="blood"&&n.mesh.position.y<.05&&(n.mesh.position.y=.05,n.velocity.x*=.5,n.velocity.z*=.5,n.velocity.y=0),n.type==="spark"&&(n.mesh.rotation.x+=t*10,n.mesh.rotation.z+=t*8),n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose?.(),n.mesh.material.dispose?.(),this.particles.splice(i,1))}for(let i=this.slashTrails.length-1;i>=0;i--){const n=this.slashTrails[i];n.life+=t;const s=n.life/n.maxLife,a=te.lerp(n.scaleStart,n.scaleEnd,s);n.mesh.scale.setScalar(a),n.mesh.material.opacity=(1-s)*.6,n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.slashTrails.splice(i,1))}for(let i=this.embers.length-1;i>=0;i--){const n=this.embers[i];n.life+=t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.mesh.position.x+=Math.sin(n.life*2)*.01,n.mesh.position.z+=Math.cos(n.life*1.5)*.01;const s=1-n.life/n.maxLife;n.mesh.material.opacity=s*.7,n.life>=n.maxLife&&(n.life=0,n.mesh.position.set((Math.random()-.5)*60,Math.random()*.3,(Math.random()-.5)*100-20),n.maxLife=8+Math.random()*6)}const e=Date.now()*.001;for(const i of this.dustMotes){i.mesh.position.y=i.baseY+Math.sin(e*i.driftSpeed+i.phase)*i.driftAmplitude,i.mesh.position.x+=Math.sin(e*.5+i.phase)*.002,i.mesh.position.z+=Math.cos(e*.3+i.phase)*.002,i.mesh.rotation.z+=i.rotateSpeed*t;const n=.3+Math.sin(e*3+i.phase*5)*.15;i.mesh.material.opacity=n}}spawnPlayerDeathEffect(t,e){for(let i=0;i<15;i++){const n=new Se(.15+Math.random()*.1,8,8),s=new Zt({color:8965375,transparent:!0,opacity:.9,blending:Xi}),a=new et(n,s);a.position.copy(t),a.position.y+=.5+Math.random()*.8,a.position.x+=(Math.random()-.5)*.6,a.position.z+=(Math.random()-.5)*.6,this.scene.add(a),this.particles.push({mesh:a,velocity:new A((Math.random()-.5)*1.5,3+Math.random()*2,(Math.random()-.5)*1.5),gravity:-.5,life:0,maxLife:2.5+Math.random()*1.5,type:"playerSoul"})}for(let i=0;i<20;i++){const n=new Se(.2+Math.random()*.15,6,6),s=new Zt({color:4456465,transparent:!0,opacity:.7}),a=new et(n,s);a.position.copy(t),a.position.y+=Math.random()*1.5;const o=Math.random()*Math.PI*2,c=1+Math.random()*2;this.scene.add(a),this.particles.push({mesh:a,velocity:new A(Math.cos(o)*c,.5+Math.random()*1,Math.sin(o)*c),gravity:-1,life:0,maxLife:2+Math.random()*1,type:"deathMist",scale:1})}this._createDeathVignette(e),e&&this._triggerCameraShake(e)}_createDeathVignette(t){const e=new ui(2,2),i=new ke({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uIntensity:{value:0}},vertexShader:`
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
      `}),n=new et(e,i);n.frustumCulled=!1,n.renderOrder=999,this.scene.add(n),this.deathVignette={mesh:n,material:i,life:0,fadeInDuration:.5,holdDuration:2.5,fadeOutDuration:.5}}_triggerCameraShake(t){this.cameraShake||(this.cameraShake={originalPosition:t.position.clone(),intensity:.3,decay:.95,duration:.8,elapsed:0,camera:t})}_updateDeathEffects(t){if(this.deathVignette){const e=this.deathVignette;e.life+=t,e.material.uniforms.uTime.value=e.life;const i=e.fadeInDuration+e.holdDuration+e.fadeOutDuration;if(e.life<e.fadeInDuration)e.material.uniforms.uIntensity.value=e.life/e.fadeInDuration;else if(e.life<e.fadeInDuration+e.holdDuration)e.material.uniforms.uIntensity.value=1;else if(e.life<i){const n=(e.life-e.fadeInDuration-e.holdDuration)/e.fadeOutDuration;e.material.uniforms.uIntensity.value=1-n}else this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose(),this.deathVignette=null}if(this.cameraShake){const e=this.cameraShake;if(e.elapsed+=t,e.elapsed<e.duration){const i=1-e.elapsed/e.duration,n=e.intensity*i;e.camera.position.x+=(Math.random()-.5)*n,e.camera.position.y+=(Math.random()-.5)*n*.5,e.camera.position.z+=(Math.random()-.5)*n}else this.cameraShake=null}}dispose(){this.particles.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.particles=[],this.slashTrails.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.slashTrails=[],this.embers.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.embers=[],this.dustMotes.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry?.dispose(),t.mesh.material?.dispose()}),this.dustMotes=[]}}const Gv={uniforms:{tDiffuse:{value:null},brightness:{value:.05},contrast:{value:1.1},saturation:{value:1.1},vignetteIntensity:{value:.2},vignetteRadius:{value:.9}},vertexShader:`
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
  `},Mi=new Px({antialias:!0,preserveDrawingBuffer:!0});Mi.setSize(window.innerWidth,window.innerHeight);Mi.setPixelRatio(Math.min(window.devicePixelRatio,2));Mi.shadowMap.enabled=!0;Mi.shadowMap.type=Th;Mi.toneMapping=fc;Mi.toneMappingExposure=2;Mi.outputColorSpace=ye;document.body.appendChild(Mi.domElement);const $i=new hf;$i.fog=null;$i.background=new yt(8900331);const dn=new Ye(60,window.innerWidth/window.innerHeight,.1,200);dn.position.set(0,5,15);dn.lookAt(0,0,0);const Hv=new Ze(window.innerWidth*Math.min(window.devicePixelRatio,2),window.innerHeight*Math.min(window.devicePixelRatio,2),{minFilter:Ee,magFilter:Ee,format:si,colorSpace:ye}),ur=new Ux(Mi,Hv),Vv=new Ox($i,dn);ur.addPass(Vv);const Du=new ms(new nt(window.innerWidth,window.innerHeight),.15,.2,.95);ur.addPass(Du);const Wv=new Cu(Gv);ur.addPass(Wv);const Xv=new yu,Pe=new Fx,wn=new Uv(Mi.domElement),ln=new kv(dn),ar=new zv($i),Ys=new Ov(Pe);let Sh=!1;const pa=async()=>{Sh||(await ln.init(),ln.startAmbientMusic(),Sh=!0,document.removeEventListener("click",pa),document.removeEventListener("keydown",pa))};document.addEventListener("click",pa);document.addEventListener("keydown",pa);const Fe=new Nv($i),Ai=new Av($i,Pe);Ai.initItems(Fe.getItemSpawns());const Ae=new bv($i,Pe,wn);Ae.setWorld(Fe);const Ks=new Fv(dn,Ae.mesh,wn);Ae.setCameraController(Ks);const zc=new Rv($i,Pe,Ae,Fe,ar);Pe.setCheckpoint(Fe.bonfirePosition.clone());Pe.setEntities(Ae,zc,$i,dn);Pe.bonfirePosition=Fe.bonfirePosition;Pe.audioManager=ln;Pe.particleManager=ar;Pe.hud=Ys;Pe.cameraController=Ks;Pe.itemManager=Ai;Ys.setEnemyManager(zc);const qr=new Bv(Pe,wn,Ae);window.addEventListener("resize",()=>{dn.aspect=window.innerWidth/window.innerHeight,dn.updateProjectionMatrix(),Mi.setSize(window.innerWidth,window.innerHeight),ur.setSize(window.innerWidth,window.innerHeight),Du.resolution.set(window.innerWidth,window.innerHeight)});function Lu(){requestAnimationFrame(Lu);const r=Math.min(Xv.getDelta(),.05);if(wn.update(r),Pe.updateHitstop(r))ar.update(r*.1);else if(Ae.update(r),zc.update(r,Ae),ar.update(r),Fe.bossArena&&Fe.bossArena.active){const f=Fe.updateBossArena(r,Ae.mesh.position);f>0&&!Ae.isInvincible&&(Pe.takeDamage(f,"magical",0,!1),Ae.flashDamage(),Ys&&Ys.flashDamage(.5),Ks&&Ks.shakeLight(),Ai.showNotification("Ritual Circle burns!","damage"))}if(Ks.update(r),Ai.update(Ae.mesh.position),Ys.update(),qr.update(),Pe.update(r),ln.updateListener(),Pe.collectBloodstain(),Ae.activeAttack){const f=Fe.checkHiddenWallHit(Ae.activeAttack.position,Ae.activeAttack.range);f&&!f.revealed&&Fe.revealHiddenWall(f.id)}const e=Fe.getNearbyDoor(Ae.mesh.position),i=document.getElementById("door-prompt"),n=document.getElementById("door-name");e&&!qr.isOpen?(i.style.display="block",n.textContent=e.name,Ai.hasKey(e.id)?(i.classList.remove("locked"),wn.interact&&(Fe.tryOpenDoor(e.id,Ai),Ai.showNotification(`${e.name} Opened`))):(i.classList.add("locked"),n.textContent=`${e.name} (Locked)`)):i.style.display="none";const s=Fe.getNearbyLadder(Ae.mesh.position),a=document.getElementById("ladder-prompt"),o=document.getElementById("ladder-name");s&&!qr.isOpen?(a.style.display="block",o.textContent=s.id==="shortcut-ladder"?"to Cathedral":"Ladder",wn.interact&&s.id==="shortcut-ladder"&&(Ae.mesh.position.set(-15,0,-12),Ae.velocity.set(0,0,0),Ai.showNotification("Climbed to Cathedral"),ln.playSound("footstep"))):a.style.display="none";const c=Fe.getNearbyShortcut(Ae.mesh.position),l=document.getElementById("shortcut-prompt"),h=document.getElementById("shortcut-action"),u=document.getElementById("shortcut-name");c&&!qr.isOpen?(l.style.display="block",h.textContent="remove bar from",u.textContent="Shortcut Door",wn.interact&&Fe.unlockShortcut(c.id)&&(Ai.showNotification("Shortcut Unlocked — Path to Cathedral opened!"),ln.playSound("hit"))):l.style.display="none";const d=Fe.checkInsideIllusoryWall(Ae.mesh.position);if(d&&!d.revealed){Fe.revealHiddenWall(d.id);const f=document.getElementById("illusory-notification");f.style.display="block",setTimeout(()=>{f.style.display="none"},2500),ln.playSound("hit")}if(Pe.bloodstainMesh){const f=.6+Math.sin(Date.now()*.005)*.3;Pe.bloodstainMesh.material.opacity=f}ur.render()}Lu();window.gameManager=Pe;window.player=Ae;window.world=Fe;window.itemManager=Ai;window.audioManager=ln;window.particleManager=ar;
