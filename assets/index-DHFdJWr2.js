(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const Sc="182",Zu=0,il=1,Ju=2,ia=1,Ph=2,Vs=3,Qi=0,ti=1,pe=2,ki=0,rs=1,Ri=2,nl=3,sl=4,Qu=5,Pn=100,td=101,ed=102,id=103,nd=104,sd=200,od=201,ad=202,rd=203,Mr=204,Sr=205,cd=206,ld=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,br=0,Tr=1,wr=2,hs=3,Ar=4,Er=5,Cr=6,Rr=7,Ih=0,_d=1,xd=2,Ni=0,Dh=1,Lh=2,kh=3,bc=4,Nh=5,Oh=6,Uh=7,ol="attached",vd="detached",Bh=300,Ln=301,us=302,Pr=303,Ir=304,Ta=306,Ui=1e3,Di=1001,ha=1002,Ue=1003,Fh=1004,Ws=1005,Le=1006,na=1007,$i=1008,li=1009,zh=1010,Gh=1011,eo=1012,Tc=1013,Bi=1014,gi=1015,ui=1016,wc=1017,Ac=1018,io=1020,Hh=35902,Vh=35899,Wh=1021,Xh=1022,hi=1023,tn=1026,Dn=1027,Ec=1028,Cc=1029,ds=1030,Rc=1031,Pc=1033,sa=33776,oa=33777,aa=33778,ra=33779,Dr=35840,Lr=35841,kr=35842,Nr=35843,Or=36196,Ur=37492,Br=37496,Fr=37488,zr=37489,Gr=37490,Hr=37491,Vr=37808,Wr=37809,Xr=37810,qr=37811,Yr=37812,Kr=37813,jr=37814,$r=37815,Zr=37816,Jr=37817,Qr=37818,tc=37819,ec=37820,ic=37821,nc=36492,sc=36494,oc=36495,ac=36283,rc=36284,cc=36285,lc=36286,qh=2200,Yh=2201,yd=2202,no=2300,so=2301,Ia=2302,os=2400,as=2401,ua=2402,Ic=2500,Md=2501,Sd=0,Kh=1,hc=2,bd=3200,jh=0,Td=1,dn="",Ee="srgb",je="srgb-linear",da="linear",de="srgb",Fn=7680,al=519,wd=512,Ad=513,Ed=514,Dc=515,Cd=516,Rd=517,Lc=518,Pd=519,uc=35044,rl="300 es",Li=2e3,fa=2001;function $h(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Id(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function oo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dd(){const r=oo("canvas");return r.style.display="block",r}const cl={};function pa(...r){const t="THREE."+r.shift();console.log(t,...r)}function Pt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Lt(...r){const t="THREE."+r.shift();console.error(t,...r)}function ao(...r){const t=r.join(" ");t in cl||(cl[t]=!0,Pt(...r))}function Ld(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}class On{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const Ys=Math.PI/180,fs=180/Math.PI;function _i(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qe[r&255]+qe[r>>8&255]+qe[r>>16&255]+qe[r>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]).toLowerCase()}function Xt(r,t,e){return Math.max(t,Math.min(e,r))}function kc(r,t){return(r%t+t)%t}function kd(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function Nd(r,t,e){return r!==t?(e-r)/(t-r):0}function Ks(r,t,e){return(1-e)*r+e*t}function Od(r,t,e,i){return Ks(r,t,1-Math.exp(-e*i))}function Ud(r,t=1){return t-Math.abs(kc(r,t*2)-t)}function Bd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Fd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function zd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Gd(r,t){return r+Math.random()*(t-r)}function Hd(r){return r*(.5-Math.random())}function Vd(r){r!==void 0&&(ll=r);let t=ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wd(r){return r*Ys}function Xd(r){return r*fs}function qd(r){return(r&r-1)===0&&r!==0}function Yd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Kd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jd(r,t,e,i,n){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),d=o((t-i)/2),f=s((i-t)/2),g=o((i-t)/2);switch(n){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Mi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function fe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ie={DEG2RAD:Ys,RAD2DEG:fs,generateUUID:_i,clamp:Xt,euclideanModulo:kc,mapLinear:kd,inverseLerp:Nd,lerp:Ks,damp:Od,pingpong:Ud,smoothstep:Bd,smootherstep:Fd,randInt:zd,randFloat:Gd,randFloatSpread:Hd,seededRandom:Vd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:qd,ceilPowerOfTwo:Yd,floorPowerOfTwo:Kd,setQuaternionFromProperEuler:jd,normalize:fe,denormalize:Mi};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Si{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a>=1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const x=Math.acos(m),v=Math.sin(x);p=Math.sin(p*x)/v,a=Math.sin(a*x)/v,c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+_*a}else{c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+_*a;const x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,o){const a=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(n/2),u=a(s/2),d=c(i/2),f=c(n/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+n*l-s*c,this._y=n*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-n*a,this._w=o*h-i*a-n*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,i=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*n-a*i),h=2*(a*e-s*n),u=2*(s*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=n+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=n*c-s*a,this.y=s*o-i*c,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new b,hl=new Si;class Ft{constructor(t,e,i,n,s,o,a,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,c,l)}set(t,e,i,n,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],x=n[1],v=n[4],y=n[7],w=n[2],E=n[5],C=n[8];return s[0]=o*_+a*x+c*w,s[3]=o*m+a*v+c*E,s[6]=o*p+a*y+c*C,s[1]=l*_+h*x+u*w,s[4]=l*m+h*v+u*E,s[7]=l*p+h*y+u*C,s[2]=d*_+f*x+g*w,s[5]=d*m+f*v+g*E,s[8]=d*p+f*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*s*h+i*a*c+n*s*l-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(n*l-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=d*_,t[4]=(h*e-n*c)*_,t[5]=(n*s-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-n*l,n*c,-n*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(La.makeScale(t,e)),this}rotate(t){return this.premultiply(La.makeRotation(-t)),this}translate(t,e){return this.premultiply(La.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const La=new Ft,ul=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $d(){const r={enabled:!0,workingColorSpace:je,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(n.r=Ji(n.r),n.g=Ji(n.g),n.b=Ji(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(n.r=cs(n.r),n.g=cs(n.g),n.b=cs(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===dn?da:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[je]:{primaries:t,whitePoint:i,transfer:da,toXYZ:ul,fromXYZ:dl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:i,transfer:de,toXYZ:ul,fromXYZ:dl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),r}const Zt=$d();function Ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zn;class Zd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zn===void 0&&(zn=oo("canvas")),zn.width=t.width,zn.height=t.height;const n=zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=zn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Ji(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ji(e[i]/255)*255):e[i]=Ji(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jd=0;class Nc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(ka(n[o].image)):s.push(ka(n[o]))}else s=ka(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function ka(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}let Qd=0;const Na=new b;class Be extends On{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=Di,n=Di,s=Le,o=$i,a=hi,c=li,l=Be.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=_i(),this.name="",this.source=new Nc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Na).x}get height(){return this.source.getSize(Na).y}get depth(){return this.source.getSize(Na).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Bh;Be.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,n=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(f+1)/2,w=(p+1)/2,E=(h+d)/4,C=(u+_)/4,I=(g+m)/4;return v>y&&v>w?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=E/i,s=C/i):y>w?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=E/n,s=I/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=C/s,n=I/s),this.set(i,n,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tf extends On{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const n={width:t,height:e,depth:i.depth},s=new Be(n);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Nc(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends tf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Zh extends Be{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ef extends Be{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xi):xi.fromBufferAttribute(s,o),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}const n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),bo.subVectors(this.max,Rs),Gn.subVectors(t.a,Rs),Hn.subVectors(t.b,Rs),Vn.subVectors(t.c,Rs),on.subVectors(Hn,Gn),an.subVectors(Vn,Hn),vn.subVectors(Gn,Vn);let e=[0,-on.z,on.y,0,-an.z,an.y,0,-vn.z,vn.y,on.z,0,-on.x,an.z,0,-an.x,vn.z,0,-vn.x,-on.y,on.x,0,-an.y,an.x,0,-vn.y,vn.x,0];return!Oa(e,Gn,Hn,Vn,bo)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,Gn,Hn,Vn,bo))?!1:(To.crossVectors(on,an),e=[To.x,To.y,To.z],Oa(e,Gn,Hn,Vn,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wi=[new b,new b,new b,new b,new b,new b,new b,new b],xi=new b,So=new si,Gn=new b,Hn=new b,Vn=new b,on=new b,an=new b,vn=new b,Rs=new b,bo=new b,To=new b,yn=new b;function Oa(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){yn.fromArray(r,s);const a=n.x*Math.abs(yn.x)+n.y*Math.abs(yn.y)+n.z*Math.abs(yn.z),c=t.dot(yn),l=e.dot(yn),h=i.dot(yn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const nf=new si,Ps=new b,Ua=new b;class zi{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):nf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ps,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Ua)),this.expandByPoint(Ps.copy(t.center).sub(Ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xi=new b,Ba=new b,wo=new b,rn=new b,Fa=new b,Ao=new b,za=new b;class wa{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ba.copy(t).add(e).multiplyScalar(.5),wo.copy(e).sub(t).normalize(),rn.copy(this.origin).sub(Ba);const s=t.distanceTo(e)*.5,o=-this.direction.dot(wo),a=rn.dot(this.direction),c=-rn.dot(wo),l=rn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ba).addScaledVector(wo,d),f}intersectSphere(t,e){Xi.subVectors(t.center,this.origin);const i=Xi.dot(this.direction),n=Xi.dot(Xi)-i*i,s=t.radius*t.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>n)||((a>i||i!==i)&&(i=a),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,i,n,s){Fa.subVectors(e,t),Ao.subVectors(i,t),za.crossVectors(Fa,Ao);let o=this.direction.dot(za),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rn.subVectors(this.origin,t);const c=a*this.direction.dot(Ao.crossVectors(rn,Ao));if(c<0)return null;const l=a*this.direction.dot(Fa.cross(rn));if(l<0||c+l>o)return null;const h=-a*rn.dot(za);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(t,e,i,n,s,o,a,c,l,h,u,d,f,g,_,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,i,n,s,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Wn.setFromMatrixColumn(t,0).length(),s=1/Wn.setFromMatrixColumn(t,1).length(),o=1/Wn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sf,t,of)}lookAt(t,e,i){const n=this.elements;return ri.subVectors(t,e),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),cn.crossVectors(i,ri),cn.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),cn.crossVectors(i,ri)),cn.normalize(),Eo.crossVectors(ri,cn),n[0]=cn.x,n[4]=Eo.x,n[8]=ri.x,n[1]=cn.y,n[5]=Eo.y,n[9]=ri.y,n[2]=cn.z,n[6]=Eo.z,n[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],v=i[7],y=i[11],w=i[15],E=n[0],C=n[4],I=n[8],S=n[12],T=n[1],P=n[5],O=n[9],U=n[13],W=n[2],X=n[6],q=n[10],V=n[14],J=n[3],ft=n[7],lt=n[11],mt=n[15];return s[0]=o*E+a*T+c*W+l*J,s[4]=o*C+a*P+c*X+l*ft,s[8]=o*I+a*O+c*q+l*lt,s[12]=o*S+a*U+c*V+l*mt,s[1]=h*E+u*T+d*W+f*J,s[5]=h*C+u*P+d*X+f*ft,s[9]=h*I+u*O+d*q+f*lt,s[13]=h*S+u*U+d*V+f*mt,s[2]=g*E+_*T+m*W+p*J,s[6]=g*C+_*P+m*X+p*ft,s[10]=g*I+_*O+m*q+p*lt,s[14]=g*S+_*U+m*V+p*mt,s[3]=x*E+v*T+y*W+w*J,s[7]=x*C+v*P+y*X+w*ft,s[11]=x*I+v*O+y*q+w*lt,s[15]=x*S+v*U+y*V+w*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],x=c*f-l*d,v=a*f-l*u,y=a*d-c*u,w=o*f-l*h,E=o*d-c*h,C=o*u-a*h;return e*(_*x-m*v+p*y)-i*(g*x-m*w+p*E)+n*(g*v-_*w+p*C)-s*(g*y-_*E+m*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,w=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,E=e*x+i*v+n*y+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=x*C,t[1]=(_*d*s-u*m*s-_*n*f+i*m*f+u*n*p-i*d*p)*C,t[2]=(a*m*s-_*c*s+_*n*l-i*m*l-a*n*p+i*c*p)*C,t[3]=(u*c*s-a*d*s-u*n*l+i*d*l+a*n*f-i*c*f)*C,t[4]=v*C,t[5]=(h*m*s-g*d*s+g*n*f-e*m*f-h*n*p+e*d*p)*C,t[6]=(g*c*s-o*m*s-g*n*l+e*m*l+o*n*p-e*c*p)*C,t[7]=(o*d*s-h*c*s+h*n*l-e*d*l-o*n*f+e*c*f)*C,t[8]=y*C,t[9]=(g*u*s-h*_*s-g*i*f+e*_*f+h*i*p-e*u*p)*C,t[10]=(o*_*s-g*a*s+g*i*l-e*_*l-o*i*p+e*a*p)*C,t[11]=(h*a*s-o*u*s-h*i*l+e*u*l+o*i*f-e*a*f)*C,t[12]=w*C,t[13]=(h*_*n-g*u*n+g*i*d-e*_*d-h*i*m+e*u*m)*C,t[14]=(g*a*n-o*_*n-g*i*c+e*_*c+o*i*m-e*a*m)*C,t[15]=(o*u*n-h*a*n+h*i*c-e*u*c-o*i*d+e*a*d)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-n*c,l*c+n*a,0,l*a+n*c,h*a+i,h*c-n*o,0,l*c-n*a,h*c+n*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,x=c*l,v=c*h,y=c*u,w=i.x,E=i.y,C=i.z;return n[0]=(1-(_+p))*w,n[1]=(f+y)*w,n[2]=(g-v)*w,n[3]=0,n[4]=(f-y)*E,n[5]=(1-(d+p))*E,n[6]=(m+x)*E,n[7]=0,n[8]=(g+v)*C,n[9]=(m-x)*C,n[10]=(1-(d+_))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;if(t.x=n[12],t.y=n[13],t.z=n[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let s=Wn.set(n[0],n[1],n[2]).length();const o=Wn.set(n[4],n[5],n[6]).length(),a=Wn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),vi.copy(this);const l=1/s,h=1/o,u=1/a;return vi.elements[0]*=l,vi.elements[1]*=l,vi.elements[2]*=l,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=u,vi.elements[9]*=u,vi.elements[10]*=u,e.setFromRotationMatrix(vi),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,n,s,o,a=Li,c=!1){const l=this.elements,h=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===Li)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fa)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=Li,c=!1){const l=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===Li)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===fa)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wn=new b,vi=new Ot,sf=new b(0,0,0),of=new b(1,1,1),cn=new b,Eo=new b,ri=new b,fl=new Ot,pl=new Si;class Fi{constructor(t=0,e=0,i=0,n=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],o=n[4],a=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let af=0;const ml=new b,Xn=new Si,qi=new Ot,Co=new b,Is=new b,rf=new b,cf=new Si,gl=new b(1,0,0),_l=new b(0,1,0),xl=new b(0,0,1),vl={type:"added"},lf={type:"removed"},qn={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Te extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new b,e=new Fi,i=new Si,n=new b(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Ft}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.premultiply(Xn),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Co.copy(t):Co.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Is,Co,this.up):qi.lookAt(Co,Is,this.up),this.quaternion.setFromRotationMatrix(qi),n&&(qi.extractRotation(n.matrixWorld),Xn.setFromRotationMatrix(qi),this.quaternion.premultiply(Xn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),qn.child=t,this.dispatchEvent(qn),qn.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lf),Ga.child=t,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),qn.child=t,this.dispatchEvent(qn),qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];n.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Te.DEFAULT_UP=new b(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new b,Yi=new b,Ha=new b,Ki=new b,Yn=new b,Kn=new b,yl=new b,Va=new b,Wa=new b,Xa=new b,qa=new be,Ya=new be,Ka=new be;class mi{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),yi.subVectors(t,e),n.cross(yi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){yi.subVectors(n,e),Yi.subVectors(i,e),Ha.subVectors(t,e);const o=yi.dot(yi),a=yi.dot(Yi),c=yi.dot(Ha),l=Yi.dot(Yi),h=Yi.dot(Ha),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,i,n,s,o,a,c){return this.getBarycoord(t,e,i,n,Ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ki.x),c.addScaledVector(o,Ki.y),c.addScaledVector(a,Ki.z),c)}static getInterpolatedAttribute(t,e,i,n,s,o){return qa.setScalar(0),Ya.setScalar(0),Ka.setScalar(0),qa.fromBufferAttribute(t,e),Ya.fromBufferAttribute(t,i),Ka.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(qa,s.x),o.addScaledVector(Ya,s.y),o.addScaledVector(Ka,s.z),o}static isFrontFacing(t,e,i,n){return yi.subVectors(i,e),Yi.subVectors(t,e),yi.cross(Yi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),yi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return mi.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let o,a;Yn.subVectors(n,i),Kn.subVectors(s,i),Va.subVectors(t,i);const c=Yn.dot(Va),l=Kn.dot(Va);if(c<=0&&l<=0)return e.copy(i);Wa.subVectors(t,n);const h=Yn.dot(Wa),u=Kn.dot(Wa);if(h>=0&&u<=h)return e.copy(n);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Yn,o);Xa.subVectors(t,s);const f=Yn.dot(Xa),g=Kn.dot(Xa);if(g>=0&&f<=g)return e.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Kn,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return yl.subVectors(s,n),a=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(yl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(Yn,o).addScaledVector(Kn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function ja(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Mt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Zt.workingColorSpace){if(t=kc(t,1),e=Xt(e,0,1),i=Xt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ja(o,s,t+1/3),this.g=ja(o,s,t),this.b=ja(o,s,t-1/3)}return Zt.colorSpaceToWorking(this,n),this}setStyle(t,e=Ee){function i(s){s!==void 0&&parseFloat(s)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const i=Qh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Zt.workingToColorSpace(Ye.copy(this),t),Math.round(Xt(Ye.r*255,0,255))*65536+Math.round(Xt(Ye.g*255,0,255))*256+Math.round(Xt(Ye.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Ye.copy(this),e);const i=Ye.r,n=Ye.g,s=Ye.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ee){Zt.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,i=Ye.g,n=Ye.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(ln),this.setHSL(ln.h+t,ln.s+e,ln.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(Ro);const i=Ks(ln.h,Ro.h,e),n=Ks(ln.s,Ro.s,e),s=Ks(ln.l,Ro.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Mt;Mt.NAMES=Qh;let hf=0;class bi extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=rs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mr,this.blendDst=Sr,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mr&&(i.blendSrc=this.blendSrc),this.blendDst!==Sr&&(i.blendDst=this.blendDst),this.blendEquation!==Pn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Gt extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new b,Po=new nt;let uf=0;class Xe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uc,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}}class tu extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class eu extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class $t extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let df=0;const fi=new Ot,$a=new Te,jn=new b,ci=new si,Ds=new si,He=new b;class we extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?eu:tu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,i){return fi.makeTranslation(t,e,i),this.applyMatrix4(fi),this}scale(t,e,i){return fi.makeScale(t,e,i),this.applyMatrix4(fi),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(ci.min,Ds.min),ci.expandByPoint(He),He.addVectors(ci.max,Ds.max),ci.expandByPoint(He)):(ci.expandByPoint(Ds.min),ci.expandByPoint(Ds.max))}ci.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)He.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(He));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)He.fromBufferAttribute(a,l),c&&(jn.fromBufferAttribute(t,l),He.add(jn)),n=Math.max(n,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new b,c[I]=new b;const l=new b,h=new b,u=new b,d=new nt,f=new nt,g=new nt,_=new b,m=new b;function p(I,S,T){l.fromBufferAttribute(i,I),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,T),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,T),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(_),a[S].add(_),a[T].add(_),c[I].add(m),c[S].add(m),c[T].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,S=x.length;I<S;++I){const T=x[I],P=T.start,O=T.count;for(let U=P,W=P+O;U<W;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new b,y=new b,w=new b,E=new b;function C(I){w.fromBufferAttribute(n,I),E.copy(w);const S=a[I];v.copy(S),v.sub(w.multiplyScalar(w.dot(S))).normalize(),y.crossVectors(E,S);const P=y.dot(c[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,P)}for(let I=0,S=x.length;I<S;++I){const T=x[I],P=T.start,O=T.count;for(let U=P,W=P+O;U<W;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new b,s=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Xe(d,h,u)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,n=this.attributes;for(const a in n){const c=n[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(n[c]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new Ot,Mn=new wa,Io=new zi,Sl=new b,Do=new b,Lo=new b,ko=new b,Za=new b,No=new b,bl=new b,Oo=new b;class F extends Te{constructor(t=new we,e=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(s&&a){No.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Za.fromBufferAttribute(u,t),o?No.addScaledVector(Za,h):No.addScaledVector(Za.sub(e),h))}e.add(No)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Mn.copy(t.ray).recast(t.near),!(Io.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(Io,Sl)===null||Mn.origin.distanceToSquared(Sl)>(t.far-t.near)**2))&&(Ml.copy(s).invert(),Mn.copy(t.ray).applyMatrix4(Ml),!(i.boundingBox!==null&&Mn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mn)))}_computeIntersections(t,e,i){let n;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,w=v;y<w;y+=3){const E=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);n=Uo(this,p,t,i,l,h,u,E,C,I),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);n=Uo(this,o,t,i,l,h,u,x,v,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,w=v;y<w;y+=3){const E=y,C=y+1,I=y+2;n=Uo(this,p,t,i,l,h,u,E,C,I),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,y=m+2;n=Uo(this,o,t,i,l,h,u,x,v,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function ff(r,t,e,i,n,s,o,a){let c;if(t.side===ti?c=i.intersectTriangle(o,s,n,!0,a):c=i.intersectTriangle(n,s,o,t.side===Qi,a),c===null)return null;Oo.copy(a),Oo.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Oo);return l<e.near||l>e.far?null:{distance:l,point:Oo.clone(),object:r}}function Uo(r,t,e,i,n,s,o,a,c,l){r.getVertexPosition(a,Do),r.getVertexPosition(c,Lo),r.getVertexPosition(l,ko);const h=ff(r,t,e,i,Do,Lo,ko,bl);if(h){const u=new b;mi.getBarycoord(bl,Do,Lo,ko,u),n&&(h.uv=mi.getInterpolatedAttribute(n,a,c,l,u,new nt)),s&&(h.uv1=mi.getInterpolatedAttribute(s,a,c,l,u,new nt)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,c,l,u,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};mi.getNormal(Do,Lo,ko,d.normal),h.face=d,h.barycoord=u}return h}class Jt extends we{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(_,m,p,x,v,y,w,E,C,I,S){const T=y/C,P=w/I,O=y/2,U=w/2,W=E/2,X=C+1,q=I+1;let V=0,J=0;const ft=new b;for(let lt=0;lt<q;lt++){const mt=lt*P-U;for(let qt=0;qt<X;qt++){const Ht=qt*T-O;ft[_]=Ht*x,ft[m]=mt*v,ft[p]=W,l.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=E>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(qt/C),u.push(1-lt/I),V+=1}}for(let lt=0;lt<I;lt++)for(let mt=0;mt<C;mt++){const qt=d+mt+X*lt,Ht=d+mt+X*(lt+1),Ae=d+(mt+1)+X*(lt+1),Se=d+(mt+1)+X*lt;c.push(qt,Ht,Se),c.push(Ht,Ae,Se),J+=6}a.addGroup(f,J,S),f+=J,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Je(r){const t={};for(let e=0;e<r.length;e++){const i=ps(r[e]);for(const n in i)t[n]=i[n]}return t}function pf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function iu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const ma={clone:ps,merge:Je};var mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class nu extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hn=new b,Tl=new nt,wl=new nt;class Qe extends nu{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hn.x,hn.y).multiplyScalar(-t/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hn.x,hn.y).multiplyScalar(-t/hn.z)}getViewSize(t,e){return this.getViewBounds(t,Tl,wl),e.subVectors(wl,Tl)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*n/c,e-=o.offsetY*i/l,n*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $n=-90,Zn=1;class _f extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Qe($n,Zn,t,e);n.layers=this.layers,this.add(n);const s=new Qe($n,Zn,t,e);s.layers=this.layers,this.add(s);const o=new Qe($n,Zn,t,e);o.layers=this.layers,this.add(o);const a=new Qe($n,Zn,t,e);a.layers=this.layers,this.add(a);const c=new Qe($n,Zn,t,e);c.layers=this.layers,this.add(c);const l=new Qe($n,Zn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class su extends Be{constructor(t=[],e=Ln,i,n,s,o,a,c,l,h){super(t,e,i,n,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ou extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new su(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Jt(5,5,5),s=new Ve({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:ki});s.uniforms.tEquirect.value=e;const o=new F(n,s),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=Le),new _f(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}}class Kt extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xf={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xf)))}return a!==null&&(a.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class vf extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Oc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new b;class ms{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ms(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class au extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Jn;const Ls=new b,Qn=new b,ts=new b,es=new nt,ks=new nt,ru=new Ot,Bo=new b,Ns=new b,Fo=new b,Al=new nt,Qa=new nt,El=new nt;class yf extends Te{constructor(t=new au){if(super(),this.isSprite=!0,this.type="Sprite",Jn===void 0){Jn=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Oc(e,5);Jn.setIndex([0,1,2,0,2,3]),Jn.setAttribute("position",new ms(i,3,0,!1)),Jn.setAttribute("uv",new ms(i,2,3,!1))}this.geometry=Jn,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qn.setFromMatrixScale(this.matrixWorld),ru.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qn.multiplyScalar(-ts.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const o=this.center;zo(Bo.set(-.5,-.5,0),ts,o,Qn,n,s),zo(Ns.set(.5,-.5,0),ts,o,Qn,n,s),zo(Fo.set(.5,.5,0),ts,o,Qn,n,s),Al.set(0,0),Qa.set(1,0),El.set(1,1);let a=t.ray.intersectTriangle(Bo,Ns,Fo,!1,Ls);if(a===null&&(zo(Ns.set(-.5,.5,0),ts,o,Qn,n,s),Qa.set(0,1),a=t.ray.intersectTriangle(Bo,Fo,Ns,!1,Ls),a===null))return;const c=t.ray.origin.distanceTo(Ls);c<t.near||c>t.far||e.push({distance:c,point:Ls.clone(),uv:mi.getInterpolation(Ls,Bo,Ns,Fo,Al,Qa,El,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zo(r,t,e,i,n,s){es.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(ks.x=s*es.x-n*es.y,ks.y=n*es.x+s*es.y):ks.copy(es),r.copy(t),r.x+=ks.x,r.y+=ks.y,r.applyMatrix4(ru)}const Cl=new b,Rl=new be,Pl=new be,Mf=new b,Il=new Ot,Go=new b,tr=new zi,Dl=new Ot,er=new wa;class Sf extends F{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ol,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Go),this.boundingSphere.expandByPoint(Go)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1&&(Dl.copy(n).invert(),er.copy(t.ray).applyMatrix4(Dl),!(this.boundingBox!==null&&er.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,er)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new be,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ol?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;Rl.fromBufferAttribute(n.attributes.skinIndex,t),Pl.fromBufferAttribute(n.attributes.skinWeight,t),Cl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Pl.getComponent(s);if(o!==0){const a=Rl.getComponent(s);Il.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(Mf.copy(Cl).applyMatrix4(Il),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class cu extends Te{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uc extends Be{constructor(t=null,e=1,i=1,n,s,o,a,c,l=Ue,h=Ue,u,d){super(null,o,a,c,l,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ll=new Ot,bf=new Ot;class Bc{constructor(t=[],e=[]){this.uuid=_i(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Pt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Ot;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:bf;Ll.multiplyMatrices(a,e[s]),Ll.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Bc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Uc(e,t,t,hi,gi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const s=t.bones[i];let o=e[s];o===void 0&&(Pt("Skeleton: No bone found with UUID:",s),o=new cu),this.bones.push(o),this.boneInverses.push(new Ot().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){const o=e[n];t.bones.push(o.uuid);const a=i[n];t.boneInverses.push(a.toArray())}return t}}class dc extends Xe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const is=new Ot,kl=new Ot,Ho=[],Nl=new si,Tf=new Ot,Os=new F,Us=new zi;class Cn extends F{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Tf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,is),Nl.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(Nl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,is),Us.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(i),t.ray.intersectsSphere(Us)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,is),kl.multiplyMatrices(i,is),Os.matrixWorld=kl,Os.raycast(t,Ho);for(let o=0,a=Ho.length;o<a;o++){const c=Ho[o];c.instanceId=s,c.object=this,e.push(c)}Ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Uc(new Float32Array(n*this.count),n,this.count,Ec,gi));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=n*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ir=new b,wf=new b,Af=new Ft;class Rn{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=ir.subVectors(i,e).cross(wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ir),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Af.getNormalMatrix(t),n=this.coplanarPoint(ir).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new zi,Ef=new nt(.5,.5),Vo=new b;class Fc{constructor(t=new Rn,e=new Rn,i=new Rn,n=new Rn,s=new Rn,o=new Rn){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Li,i=!1){const n=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],x=s[12],v=s[13],y=s[14],w=s[15];if(n[0].setComponents(l-o,f-h,p-g,w-x).normalize(),n[1].setComponents(l+o,f+h,p+g,w+x).normalize(),n[2].setComponents(l+a,f+u,p+_,w+v).normalize(),n[3].setComponents(l-a,f-u,p-_,w-v).normalize(),i)n[4].setComponents(c,d,m,y).normalize(),n[5].setComponents(l-c,f-d,p-m,w-y).normalize();else if(n[4].setComponents(l-c,f-d,p-m,w-y).normalize(),e===Li)n[5].setComponents(l+c,f+d,p+m,w+y).normalize();else if(e===fa)n[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(t){Sn.center.set(0,0,0);const e=Ef.distanceTo(t.center);return Sn.radius=.7071067811865476+e,Sn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Vo.x=n.normal.x>0?t.max.x:t.min.x,Vo.y=n.normal.y>0?t.max.y:t.min.y,Vo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ga=new b,_a=new b,Ol=new Ot,Bs=new wa,Wo=new zi,nr=new b,Ul=new b;class zc extends Te{constructor(t=new we,e=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)ga.fromBufferAttribute(e,n-1),_a.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ga.distanceTo(_a);t.setAttribute("lineDistance",new $t(i,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(n),Wo.radius+=s,t.ray.intersectsSphere(Wo)===!1)return;Ol.copy(n).invert(),Bs.copy(t.ray).applyMatrix4(Ol);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),x=h.getX(_+1),v=Xo(this,t,Bs,c,p,x,_);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Xo(this,t,Bs,c,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Xo(this,t,Bs,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Xo(this,t,Bs,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xo(r,t,e,i,n,s,o){const a=r.geometry.attributes.position;if(ga.fromBufferAttribute(a,n),_a.fromBufferAttribute(a,s),e.distanceSqToSegment(ga,_a,nr,Ul)>i)return;nr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(nr);if(!(l<t.near||l>t.far))return{distance:l,point:Ul.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Bl=new b,Fl=new b;class Cf extends zc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Bl.fromBufferAttribute(e,n),Fl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Bl.distanceTo(Fl);t.setAttribute("lineDistance",new $t(i,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rf extends zc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class hu extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zl=new Ot,fc=new wa,qo=new zi,Yo=new b;class Pf extends Te{constructor(t=new we,e=new hu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(n),qo.radius+=s,t.ray.intersectsSphere(qo)===!1)return;zl.copy(n).invert(),fc.copy(t.ray).applyMatrix4(zl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Yo.fromBufferAttribute(u,m),Gl(Yo,m,c,n,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Yo.fromBufferAttribute(u,g),Gl(Yo,g,c,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gl(r,t,e,i,n,s,o){const a=fc.distanceSqToPoint(r);if(a<e){const c=new b;fc.closestPointToPoint(r,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class uu extends Be{constructor(t,e,i,n,s,o,a,c,l){super(t,e,i,n,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ro extends Be{constructor(t,e,i=Bi,n,s,o,a=Ue,c=Ue,l,h=tn,u=1){if(h!==tn&&h!==Dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,n,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class If extends ro{constructor(t,e=Bi,i=Ln,n,s,o=Ue,a=Ue,c,l=tn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class du extends Be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gn extends we{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=i*2+s,_=n+1,m=new b,p=new b;for(let x=0;x<=g;x++){let v=0,y=0,w=0,E=0;if(x<=i){const S=x/i,T=S*Math.PI/2;y=-h-t*Math.cos(T),w=t*Math.sin(T),E=-t*Math.cos(T),v=S*u}else if(x<=i+s){const S=(x-i)/s;y=-h+S*e,w=t,E=0,v=u+S*d}else{const S=(x-i-s)/i,T=S*Math.PI/2;y=h+t*Math.sin(T),w=t*Math.cos(T),E=t*Math.sin(T),v=u+d+S*u}const C=Math.max(0,Math.min(1,v/f));let I=0;x===0?I=.5/n:x===g&&(I=-.5/n);for(let S=0;S<=n;S++){const T=S/n,P=T*Math.PI*2,O=Math.sin(P),U=Math.cos(P);p.x=-w*U,p.y=y,p.z=w*O,a.push(p.x,p.y,p.z),m.set(-w*U,E,w*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(T+I,C)}if(x>0){const S=(x-1)*_;for(let T=0;T<n;T++){const P=S+T,O=S+T+1,U=x*_+T,W=x*_+T+1;o.push(P,O,U),o.push(O,W,U)}}}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class kn extends we{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new b,h=new nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class re extends we{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(f,2));function x(){const y=new b,w=new b;let E=0;const C=(e-t)/i;for(let I=0;I<=s;I++){const S=[],T=I/s,P=T*(e-t)+t;for(let O=0;O<=n;O++){const U=O/n,W=U*c+a,X=Math.sin(W),q=Math.cos(W);w.x=P*X,w.y=-T*i+m,w.z=P*q,u.push(w.x,w.y,w.z),y.set(X,C,q).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-T),S.push(g++)}_.push(S)}for(let I=0;I<n;I++)for(let S=0;S<s;S++){const T=_[S][I],P=_[S+1][I],O=_[S+1][I+1],U=_[S][I+1];(t>0||S!==0)&&(h.push(T,P,U),E+=3),(e>0||S!==s-1)&&(h.push(P,O,U),E+=3)}l.addGroup(p,E,0),p+=E}function v(y){const w=g,E=new nt,C=new b;let I=0;const S=y===!0?t:e,T=y===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=n;O++){const W=O/n*c+a,X=Math.cos(W),q=Math.sin(W);C.x=S*q,C.y=m*T,C.z=S*X,u.push(C.x,C.y,C.z),d.push(0,T,0),E.x=X*.5+.5,E.y=q*.5*T+.5,f.push(E.x,E.y),g++}for(let O=0;O<n;O++){const U=w+O,W=P+O;y===!0?h.push(W,W+1,U):h.push(W+1,W,U),I+=3}l.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oi extends re{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Oi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bs extends we{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],o=[];a(n),l(i),h(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new b,y=new b,w=new b;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],y),f(e[E+2],w),c(v,y,w,x)}function c(x,v,y,w){const E=w+1,C=[];for(let I=0;I<=E;I++){C[I]=[];const S=x.clone().lerp(y,I/E),T=v.clone().lerp(y,I/E),P=E-I;for(let O=0;O<=P;O++)O===0&&I===E?C[I][O]=S:C[I][O]=S.clone().lerp(T,O/P)}for(let I=0;I<E;I++)for(let S=0;S<2*(E-I)-1;S++){const T=Math.floor(S/2);S%2===0?(d(C[I][T+1]),d(C[I+1][T]),d(C[I][T])):(d(C[I][T+1]),d(C[I+1][T+1]),d(C[I+1][T]))}}function l(x){const v=new b;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){const x=new b;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;o.push(y,1-w)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],w=o[x+4],E=Math.max(v,y,w),C=Math.min(v,y,w);E>.9&&C<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),w<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,v){const y=x*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const x=new b,v=new b,y=new b,w=new b,E=new nt,C=new nt,I=new nt;for(let S=0,T=0;S<s.length;S+=9,T+=6){x.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),E.set(o[T+0],o[T+1]),C.set(o[T+2],o[T+3]),I.set(o[T+4],o[T+5]),w.copy(x).add(v).add(y).divideScalar(3);const P=m(w);_(E,T+0,x,P),_(C,T+2,v,P),_(I,T+4,y,P)}}function _(x,v,y,w){w<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.vertices,t.indices,t.radius,t.detail)}}class co extends bs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new co(t.radius,t.detail)}}class Gi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(n=Math.floor(a+(c-a)/2),l=i[n]-o,l<0)a=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===o)return n/(s-1);const h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),a=this.getPoint(s),c=e||(o.isVector2?new nt:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new b,n=[],s=[],o=[],a=new b,c=new Ot;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new b)}s[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Xt(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gc extends Gi{constructor(t=0,e=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Df extends Gc{constructor(t,e,i,n,s,o){super(t,e,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hc(){let r=0,t=0,e=0,i=0;function n(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){n(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+i*a}}}const Ko=new b,sr=new Hc,or=new Hc,ar=new Hc;class Lf extends Gi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new b){const i=e,n=this.points,s=n.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=n[(a-1)%s]:(Ko.subVectors(n[0],n[1]).add(n[0]),l=Ko);const u=n[a%s],d=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(Ko.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=Ko),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),sr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),or.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),ar.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(sr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),or.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ar.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(sr.calc(c),or.calc(c),ar.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new b().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hl(r,t,e,i,n){const s=(i-t)*.5,o=(n-e)*.5,a=r*r,c=r*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*r+e}function kf(r,t){const e=1-r;return e*e*t}function Nf(r,t){return 2*(1-r)*r*t}function Of(r,t){return r*r*t}function js(r,t,e,i){return kf(r,t)+Nf(r,e)+Of(r,i)}function Uf(r,t){const e=1-r;return e*e*e*t}function Bf(r,t){const e=1-r;return 3*e*e*r*t}function Ff(r,t){return 3*(1-r)*r*r*t}function zf(r,t){return r*r*r*t}function $s(r,t,e,i,n){return Uf(r,t)+Bf(r,e)+Ff(r,i)+zf(r,n)}class fu extends Gi{constructor(t=new nt,e=new nt,i=new nt,n=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new nt){const i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($s(t,n.x,s.x,o.x,a.x),$s(t,n.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gf extends Gi{constructor(t=new b,e=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new b){const i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($s(t,n.x,s.x,o.x,a.x),$s(t,n.y,s.y,o.y,a.y),$s(t,n.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pu extends Gi{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hf extends Gi{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mu extends Gi{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){const i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(js(t,n.x,s.x,o.x),js(t,n.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vf extends Gi{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){const i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(js(t,n.x,s.x,o.x),js(t,n.y,s.y,o.y),js(t,n.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gu extends Gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const i=e,n=this.points,s=(n.length-1)*t,o=Math.floor(s),a=s-o,c=n[o===0?o:o-1],l=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Hl(a,c.x,l.x,h.x,u.x),Hl(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new nt().fromArray(n))}return this}}var Vl=Object.freeze({__proto__:null,ArcCurve:Df,CatmullRomCurve3:Lf,CubicBezierCurve:fu,CubicBezierCurve3:Gf,EllipseCurve:Gc,LineCurve:pu,LineCurve3:Hf,QuadraticBezierCurve:mu,QuadraticBezierCurve3:Vf,SplineCurve:gu});class Wf extends Gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const o=n[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const o=s[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Vl[n.type]().fromJSON(n))}return this}}class Wl extends Wf{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new pu(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new mu(this.currentPoint.clone(),new nt(t,e),new nt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,o){const a=new fu(this.currentPoint.clone(),new nt(t,e),new nt(i,n),new nt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new gu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,n,s,o),this}absarc(t,e,i,n,s,o){return this.absellipse(t,e,i,i,n,s,o),this}ellipse(t,e,i,n,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,n,s,o,a,c),this}absellipse(t,e,i,n,s,o,a,c){const l=new Gc(t,e,i,n,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class pc extends Wl{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Wl().fromJSON(n))}return this}}function Xf(r,t,e=2){const i=t&&t.length,n=i?t[0]*e:r.length;let s=_u(r,0,n,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=$f(r,t,s,e)),r.length>80*e){a=r[0],c=r[1];let h=a,u=c;for(let d=e;d<n;d+=e){const f=r[d],g=r[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return lo(s,o,e,a,c,l,0),o}function _u(r,t,e,i,n){let s;if(n===rp(r,t,e,i)>0)for(let o=t;o<e;o+=i)s=Xl(o/i|0,r[o],r[o+1],s);else for(let o=e-i;o>=t;o-=i)s=Xl(o/i|0,r[o],r[o+1],s);return s&&gs(s,s.next)&&(uo(s),s=s.next),s}function Nn(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(gs(e,e.next)||Ce(e.prev,e,e.next)===0)){if(uo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function lo(r,t,e,i,n,s,o){if(!r)return;!o&&s&&ep(r,i,n,s);let a=r;for(;r.prev!==r.next;){const c=r.prev,l=r.next;if(s?Yf(r,i,n,s):qf(r)){t.push(c.i,r.i,l.i),uo(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Kf(Nn(r),t),lo(r,t,e,i,n,s,2)):o===2&&jf(r,t,e,i,n,s):lo(Nn(r),t,e,i,n,s,1);break}}}function qf(r){const t=r.prev,e=r,i=r.next;if(Ce(t,e,i)>=0)return!1;const n=t.x,s=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(n,s,o),u=Math.min(a,c,l),d=Math.max(n,s,o),f=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Xs(n,a,s,c,o,l,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yf(r,t,e,i){const n=r.prev,s=r,o=r.next;if(Ce(n,s,o)>=0)return!1;const a=n.x,c=s.x,l=o.x,h=n.y,u=s.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),_=Math.max(a,c,l),m=Math.max(h,u,d),p=mc(f,g,t,e,i),x=mc(_,m,t,e,i);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==n&&v!==o&&Xs(a,h,c,u,l,d,v.x,v.y)&&Ce(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&Xs(a,h,c,u,l,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==n&&v!==o&&Xs(a,h,c,u,l,d,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&Xs(a,h,c,u,l,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Kf(r,t){let e=r;do{const i=e.prev,n=e.next.next;!gs(i,n)&&vu(i,e,e.next,n)&&ho(i,n)&&ho(n,i)&&(t.push(i.i,e.i,n.i),uo(e),uo(e.next),e=r=n),e=e.next}while(e!==r);return Nn(e)}function jf(r,t,e,i,n,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sp(o,a)){let c=yu(o,a);o=Nn(o,o.next),c=Nn(c,c.next),lo(o,t,e,i,n,s,0),lo(c,t,e,i,n,s,0);return}a=a.next}o=o.next}while(o!==r)}function $f(r,t,e,i){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,c=s<o-1?t[s+1]*i:r.length,l=_u(r,a,c,i,!1);l===l.next&&(l.steiner=!0),n.push(np(l))}n.sort(Zf);for(let s=0;s<n.length;s++)e=Jf(n[s],e);return e}function Zf(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Jf(r,t){const e=Qf(r,t);if(!e)return t;const i=yu(e,r);return Nn(i,i.next),Nn(e,e.next)}function Qf(r,t){let e=t;const i=r.x,n=r.y;let s=-1/0,o;if(gs(r,e))return e;do{if(gs(r,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const u=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&xu(n<l?i:s,n,c,l,n<l?s:i,n,e.x,e.y)){const u=Math.abs(n-e.y)/(i-e.x);ho(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&tp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function tp(r,t){return Ce(r.prev,r,t.prev)<0&&Ce(t.next,r,r.next)<0}function ep(r,t,e,i){let n=r;do n.z===0&&(n.z=mc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,ip(n)}function ip(r){let t,e=1;do{let i=r,n;r=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,c--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=o}s.nextZ=null,e*=2}while(t>1);return r}function mc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function np(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function xu(r,t,e,i,n,s,o,a){return(n-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(n-o)*(i-a)}function Xs(r,t,e,i,n,s,o,a){return!(r===o&&t===a)&&xu(r,t,e,i,n,s,o,a)}function sp(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!op(r,t)&&(ho(r,t)&&ho(t,r)&&ap(r,t)&&(Ce(r.prev,r,t.prev)||Ce(r,t.prev,t))||gs(r,t)&&Ce(r.prev,r,r.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function gs(r,t){return r.x===t.x&&r.y===t.y}function vu(r,t,e,i){const n=$o(Ce(r,t,e)),s=$o(Ce(r,t,i)),o=$o(Ce(e,i,r)),a=$o(Ce(e,i,t));return!!(n!==s&&o!==a||n===0&&jo(r,e,t)||s===0&&jo(r,i,t)||o===0&&jo(e,r,i)||a===0&&jo(e,t,i))}function jo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function $o(r){return r>0?1:r<0?-1:0}function op(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&vu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ho(r,t){return Ce(r.prev,r,r.next)<0?Ce(r,t,r.next)>=0&&Ce(r,r.prev,t)>=0:Ce(r,t,r.prev)<0||Ce(r,r.next,t)<0}function ap(r,t){let e=r,i=!1;const n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function yu(r,t){const e=gc(r.i,r.x,r.y),i=gc(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Xl(r,t,e,i){const n=gc(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function uo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function gc(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rp(r,t,e,i){let n=0;for(let s=t,o=e-i;s<e;s+=i)n+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return n}class cp{static triangulate(t,e,i=2){return Xf(t,e,i)}}class Zs{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return Zs.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];ql(t),Yl(i,t);let o=t.length;e.forEach(ql);for(let c=0;c<e.length;c++)n.push(o),o+=e[c].length,Yl(i,e[c]);const a=cp.triangulate(i,n);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function ql(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Yl(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class _s extends bs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _s(t.radius,t.detail)}}class xs extends bs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xs(t.radius,t.detail)}}class We extends we{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(n),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let v=0;v<l;v++){const y=v*u-s;g.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const v=x+l*p,y=x+l*(p+1),w=x+1+l*(p+1),E=x+1+l*p;f.push(v,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ts extends we{constructor(t=.5,e=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/n,f=new b,g=new nt;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){const p=s+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<n;_++){const m=_*(i+1);for(let p=0;p<i;p++){const x=p+m,v=x,y=x+i+1,w=x+i+2,E=x+1;a.push(v,y,E),a.push(y,w,E)}}this.setIndex(a),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xa extends we{constructor(t=new pc([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new $t(n,3)),this.setAttribute("normal",new $t(s,3)),this.setAttribute("uv",new $t(o,2));function l(h){const u=n.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Zs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];Zs.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=Zs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];n.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],v=x[0]+u,y=x[1]+u,w=x[2]+u;i.push(v,y,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return lp(e,t)}static fromJSON(t,e){const i=[];for(let n=0,s=t.shapes.length;n<s;n++){const o=e[t.shapes[n]];i.push(o)}return new xa(i,t.curveSegments)}}function lp(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,i=r.length;e<i;e++){const n=r[e];t.shapes.push(n.uuid)}else t.shapes.push(r.uuid);return t}class ce extends we{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new b,d=new b,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const x=[],v=p/i;let y=0;p===0&&o===0?y=.5/e:p===i&&c===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const E=w/e;u.x=-t*Math.cos(n+E*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(n+E*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+y,1-v),x.push(l++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){const v=h[p][x+1],y=h[p][x],w=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&f.push(v,y,E),(p!==i-1||c<Math.PI)&&f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vc extends bs{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vc(t.radius,t.detail)}}class en extends we{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],c=[],l=[],h=new b,u=new b,d=new b;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const _=g/n*s,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/n),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const _=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,x=(n+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class hp extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _t extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hi extends _t{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class up extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dp extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Zo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function fp(r){function t(n,s){return r[n]-r[s]}const e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function Kl(r,t,e){const i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){const a=e[s]*t;for(let c=0;c!==t;++c)n[o++]=r[a+c]}return n}function Mu(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),e.push(o)),s=r[n++];while(s!==void 0)}class mo{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let o;i:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break e}o=e.length;break i}if(!(t>=s)){const a=e[1];t<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=e[--i-1],t>=s)break e}o=i,i=0;break i}break t}for(;i<o;){const a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pp extends mo{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,o=t+1,a=n[s],c=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case as:s=t,a=2*e-i;break;case ua:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case as:o=t,c=2*i-e;break;case ua:o=1,c=i+n[1]-n[0];break;default:o=t-1,c=e}const l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let w=0;w!==a;++w)s[w]=p*o[h+w]+x*o[l+w]+v*o[c+w]+y*o[u+w];return s}}class Su extends mo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class mp extends mo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ti{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zo(e,this.TimeBufferType),this.values=Zo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Zo(t.times,Array),values:Zo(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new mp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Su(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case so:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){Lt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Lt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(n!==void 0&&Id(n))for(let a=0,c=n.length;a!==c;++a){const l=n[a];if(isNaN(l)){Lt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ia,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(n)c=!0;else{const u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=so;class ws extends Ti{constructor(t,e,i){super(t,e,i)}}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=no;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class bu extends Ti{constructor(t,e,i,n){super(t,e,i,n)}}bu.prototype.ValueTypeName="color";class vs extends Ti{constructor(t,e,i,n){super(t,e,i,n)}}vs.prototype.ValueTypeName="number";class gp extends mo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(n-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Si.slerpFlat(s,0,o,l-a,o,l,c);return s}}class ys extends Ti{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new gp(this.times,this.values,this.getValueSize(),t)}}ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends Ti{constructor(t,e,i){super(t,e,i)}}As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=no;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Ti{constructor(t,e,i,n){super(t,e,i,n)}}Ms.prototype.ValueTypeName="vector";class _c{constructor(t="",e=-1,i=[],n=Ic){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=_i(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let o=0,a=i.length;o!==a;++o)e.push(xp(i[o]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=i.length;s!==o;++s)e.push(Ti.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=fp(c);c=Kl(c,1,h),l=Kl(l,1,h),!n&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new vs(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/i))}return new this(t,-1,o)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(l)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],e,i));return o}static parseAnimation(t,e){if(Pt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Lt("AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Mu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},n=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}n.push(new vs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+e[u].name+"]";i(Ms,f+".position",d,"pos",n),i(ys,f+".quaternion",d,"rot",n),i(Ms,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,c,n,a)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function _p(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return bu;case"quaternion":return ys;case"bool":case"boolean":return ws;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function xp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=_p(r.type);if(r.times===void 0){const e=[],i=[];Mu(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Zi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class vp{constructor(t,e,i){const n=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yp=new vp;class Un{constructor(t){this.manager=t!==void 0?t:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Un.DEFAULT_MATERIAL_NAME="__DEFAULT";const ji={};class Mp extends Error{constructor(t,e){super(t),this.response=e}}class va extends Un{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Zi.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ji[t]!==void 0){ji[t].push({onLoad:e,onProgress:i,onError:n});return}ji[t]=[],ji[t].push({onLoad:e,onProgress:i,onError:n});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Pt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ji[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,C=h.length;E<C;E++){const I=h[E];I.onProgress&&I.onProgress(w)}p.enqueue(y),x()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Mp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Zi.add(`file:${t}`,l);const h=ji[t];delete ji[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ji[t];if(h===void 0)throw this.manager.itemError(t),l;delete ji[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ns=new WeakMap;class Sp extends Un{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Zi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=ns.get(o);u===void 0&&(u=[],ns.set(o,u)),u.push({onLoad:e,onError:n})}return o}const a=oo("img");function c(){h(),e&&e(this);const u=ns.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ns.delete(this),s.manager.itemEnd(t)}function l(u){h(),n&&n(u),Zi.remove(`image:${t}`);const d=ns.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}ns.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Zi.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class Tu extends Un{constructor(t){super(t)}load(t,e,i,n){const s=new Be,o=new Sp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}class go extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class bp extends go{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const rr=new Ot,jl=new b,$l=new b;class Wc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(jl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tp extends Wc{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=fs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class wp extends go{constructor(t,e,i=0,n=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Tp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Ap extends Wc{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}}class Ke extends go{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class _o extends nu{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ep extends Wc{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wu extends go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Ep}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Cp extends go{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Js{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const cr=new WeakMap;class Rp extends Un{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Zi.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(l=>{if(cr.has(o)===!0)n&&n(cr.get(o)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(l),s.manager.itemEnd(t),l});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zi.add(`image-bitmap:${t}`,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){n&&n(l),cr.set(c,l),Zi.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});Zi.add(`image-bitmap:${t}`,c),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Pp extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Au{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Ip{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,o;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[s+a]=i[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(i,n,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){a.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,o=n;s!==o;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let o=0;o!==s;++o)t[e+o]=t[i+o]}_slerp(t,e,i,n){Si.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const o=this._workIndex*s;Si.multiplyQuaternionsFlat(t,o,t,e,t,i),Si.slerpFlat(t,e,t,e,t,o,n)}_lerp(t,e,i,n,s){const o=1-n;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*o+t[i+a]*n}}_lerpAdditive(t,e,i,n,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[i+o]*n}}}const Xc="\\[\\]\\.:\\/",Dp=new RegExp("["+Xc+"]","g"),qc="[^"+Xc+"]",Lp="[^"+Xc.replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",qc),Np=/(WCOD+)?/.source.replace("WCOD",Lp),Op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),Up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),Bp=new RegExp("^"+kp+Np+Op+Up+"$"),Fp=["material","materials","bones","map"];class zp{constructor(t,e,i){const n=i||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class ae{constructor(t,e,i){this.path=e,this.parsedPath=i||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new ae.Composite(t,e,i):new ae(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dp,"")}static parseTrackName(t){const e=Bp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Fp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=i(a.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[n];if(o===void 0){const l=e.nodeName;Lt("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=zp;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Gp{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,o=s.length,a=new Array(o),c={endingStart:os,endingEnd:os};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Yh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){const n=this._clip.duration,s=t._clip.duration,o=s/n,a=n/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Md:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Ic:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(n,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const o=i===yd;if(t===0)return s===-1?n:o&&(s&1)===1?e-n:n;if(i===qh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=e||n<0){const a=Math.floor(n/e);n-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(o&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=as,n.endingEnd=as):(t?n.endingStart=this.zeroSlopeAtStart?as:os:n.endingStart=ua,e?n.endingEnd=this.zeroSlopeAtEnd?as:os:n.endingEnd=ua)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=i,this}}const Hp=new Float32Array(1);class Eu extends On{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,o=t._propertyBindings,a=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;g=new Ip(ae.create(i,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=n.length,n.push(t),o.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let o=n[e];o===void 0&&(o={},n[e]=o),o[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[n],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new Su(new Float32Array(2),new Float32Array(2),1,Hp),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let o=typeof t=="string"?_c.findByName(n,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Ic),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Gp(this,o,e,i);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?_c.findByName(i,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(n,t,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}function Zl(r,t,e,i){const n=Vp(i);switch(e){case Wh:return r*t;case Ec:return r*t/n.components*n.byteLength;case Cc:return r*t/n.components*n.byteLength;case ds:return r*t*2/n.components*n.byteLength;case Rc:return r*t*2/n.components*n.byteLength;case Xh:return r*t*3/n.components*n.byteLength;case hi:return r*t*4/n.components*n.byteLength;case Pc:return r*t*4/n.components*n.byteLength;case sa:case oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case aa:case ra:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lr:case Nr:return Math.max(r,16)*Math.max(t,8)/4;case Dr:case kr:return Math.max(r,8)*Math.max(t,8)/2;case Or:case Ur:case Fr:case zr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Br:case Gr:case Hr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case qr:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case jr:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case $r:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case nc:case sc:case oc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ac:case rc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case cc:case lc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vp(r){switch(r){case li:case zh:return{byteLength:1,components:1};case eo:case Gh:case ui:return{byteLength:2,components:1};case wc:case Ac:return{byteLength:2,components:4};case Bi:case Tc:case gi:return{byteLength:4,components:1};case Hh:case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);function Cu(){let r=null,t=!1,e=null,i=null;function n(s,o){e(s,o),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Wp(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:n,remove:s,update:o}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
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
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
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
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
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
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
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
#endif`,Vm=`uniform sampler2D dfgLUT;
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
}`,Wm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tg=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
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
}`,Zg=`#if DEPTH_PACKING == 3200
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
}`,Jg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,n0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,r0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,l0=`#define MATCAP
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
}`,h0=`#define NORMAL
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
}`,u0=`#define NORMAL
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
}`,d0=`#define PHONG
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
}`,f0=`#define PHONG
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
}`,p0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
}`,g0=`#define TOON
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
}`,_0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,v0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,M0=`uniform vec3 color;
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
}`,S0=`uniform float rotation;
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
}`,b0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Xp,alphahash_pars_fragment:qp,alphamap_fragment:Yp,alphamap_pars_fragment:Kp,alphatest_fragment:jp,alphatest_pars_fragment:$p,aomap_fragment:Zp,aomap_pars_fragment:Jp,batching_pars_vertex:Qp,batching_vertex:tm,begin_vertex:em,beginnormal_vertex:im,bsdfs:nm,iridescence_fragment:sm,bumpmap_pars_fragment:om,clipping_planes_fragment:am,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:lm,color_fragment:hm,color_pars_fragment:um,color_pars_vertex:dm,color_vertex:fm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:_m,displacementmap_vertex:xm,emissivemap_fragment:vm,emissivemap_pars_fragment:ym,colorspace_fragment:Mm,colorspace_pars_fragment:Sm,envmap_fragment:bm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:wm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Um,envmap_vertex:Em,fog_vertex:Cm,fog_pars_vertex:Rm,fog_fragment:Pm,fog_pars_fragment:Im,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Lm,lights_lambert_fragment:km,lights_lambert_pars_fragment:Nm,lights_pars_begin:Om,lights_toon_fragment:Bm,lights_toon_pars_fragment:Fm,lights_phong_fragment:zm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:$m,map_fragment:Zm,map_pars_fragment:Jm,map_particle_fragment:Qm,map_particle_pars_fragment:tg,metalnessmap_fragment:eg,metalnessmap_pars_fragment:ig,morphinstance_vertex:ng,morphcolor_vertex:sg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:rg,normal_fragment_begin:cg,normal_fragment_maps:lg,normal_pars_fragment:hg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:_g,opaque_fragment:xg,packing:vg,premultiplied_alpha_fragment:yg,project_vertex:Mg,dithering_fragment:Sg,dithering_pars_fragment:bg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Eg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Rg,skinbase_vertex:Pg,skinning_pars_vertex:Ig,skinning_vertex:Dg,skinnormal_vertex:Lg,specularmap_fragment:kg,specularmap_pars_fragment:Ng,tonemapping_fragment:Og,tonemapping_pars_fragment:Ug,transmission_fragment:Bg,transmission_pars_fragment:Fg,uv_pars_fragment:zg,uv_pars_vertex:Gg,uv_vertex:Hg,worldpos_vertex:Vg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:qg,backgroundCube_frag:Yg,cube_vert:Kg,cube_frag:jg,depth_vert:$g,depth_frag:Zg,distance_vert:Jg,distance_frag:Qg,equirect_vert:t0,equirect_frag:e0,linedashed_vert:i0,linedashed_frag:n0,meshbasic_vert:s0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:r0,meshmatcap_vert:c0,meshmatcap_frag:l0,meshnormal_vert:h0,meshnormal_frag:u0,meshphong_vert:d0,meshphong_frag:f0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:x0,points_frag:v0,shadow_vert:y0,shadow_frag:M0,sprite_vert:S0,sprite_frag:b0},ht={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ii={basic:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Je([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Je([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Je([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Je([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Je([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Je([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Je([ht.common,ht.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Je([ht.lights,ht.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ii.physical={uniforms:Je([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Jo={r:0,b:0,g:0},bn=new Fi,T0=new Ot;function w0(r,t,e,i,n,s,o){const a=new Mt(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const w=g(v);w===null?p(a,c):w&&w.isColor&&(p(w,1),y=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===Ta)?(h===void 0&&(h=new F(new Jt(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:ps(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),bn.copy(y.backgroundRotation),bn.x*=-1,bn.y*=-1,bn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(bn)),h.material.toneMapped=Zt.getTransfer(w.colorSpace)!==de,(u!==w||d!==w.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new F(new We(2,2),new Ve({name:"BackgroundMaterial",uniforms:ps(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(w.colorSpace)!==de,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(Jo,iu(r)),i.buffers.color.setClear(Jo.r,Jo.g,Jo.b,y,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m,dispose:x}}function A0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,o=!1;function a(T,P,O,U,W){let X=!1;const q=u(U,O,P);s!==q&&(s=q,l(s.object)),X=f(T,U,O,W),X&&g(T,U,O,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(T,P,O,U),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return r.createVertexArray()}function l(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function u(T,P,O){const U=O.wireframe===!0;let W=i[T.id];W===void 0&&(W={},i[T.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let q=X[U];return q===void 0&&(q=d(c()),X[U]=q),q}function d(T){const P=[],O=[],U=[];for(let W=0;W<e;W++)P[W]=0,O[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:U,object:T,attributes:{},index:null}}function f(T,P,O,U){const W=s.attributes,X=P.attributes;let q=0;const V=O.getAttributes();for(const J in V)if(V[J].location>=0){const lt=W[J];let mt=X[J];if(mt===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(mt=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(mt=T.instanceColor)),lt===void 0||lt.attribute!==mt||mt&&lt.data!==mt.data)return!0;q++}return s.attributesNum!==q||s.index!==U}function g(T,P,O,U){const W={},X=P.attributes;let q=0;const V=O.getAttributes();for(const J in V)if(V[J].location>=0){let lt=X[J];lt===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(lt=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(lt=T.instanceColor));const mt={};mt.attribute=lt,lt&&lt.data&&(mt.data=lt.data),W[J]=mt,q++}s.attributes=W,s.attributesNum=q,s.index=U}function _(){const T=s.newAttributes;for(let P=0,O=T.length;P<O;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){const O=s.newAttributes,U=s.enabledAttributes,W=s.attributeDivisors;O[T]=1,U[T]===0&&(r.enableVertexAttribArray(T),U[T]=1),W[T]!==P&&(r.vertexAttribDivisor(T,P),W[T]=P)}function x(){const T=s.newAttributes,P=s.enabledAttributes;for(let O=0,U=P.length;O<U;O++)P[O]!==T[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function v(T,P,O,U,W,X,q){q===!0?r.vertexAttribIPointer(T,P,O,W,X):r.vertexAttribPointer(T,P,O,U,W,X)}function y(T,P,O,U){_();const W=U.attributes,X=O.getAttributes(),q=P.defaultAttributeValues;for(const V in X){const J=X[V];if(J.location>=0){let ft=W[V];if(ft===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),ft!==void 0){const lt=ft.normalized,mt=ft.itemSize,qt=t.get(ft);if(qt===void 0)continue;const Ht=qt.buffer,Ae=qt.type,Se=qt.bytesPerElement,j=Ae===r.INT||Ae===r.UNSIGNED_INT||ft.gpuType===Tc;if(ft.isInterleavedBufferAttribute){const Q=ft.data,vt=Q.stride,Bt=ft.offset;if(Q.isInstancedInterleavedBuffer){for(let bt=0;bt<J.locationSize;bt++)p(J.location+bt,Q.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<J.locationSize;bt++)m(J.location+bt);r.bindBuffer(r.ARRAY_BUFFER,Ht);for(let bt=0;bt<J.locationSize;bt++)v(J.location+bt,mt/J.locationSize,Ae,lt,vt*Se,(Bt+mt/J.locationSize*bt)*Se,j)}else{if(ft.isInstancedBufferAttribute){for(let Q=0;Q<J.locationSize;Q++)p(J.location+Q,ft.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Q=0;Q<J.locationSize;Q++)m(J.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Ht);for(let Q=0;Q<J.locationSize;Q++)v(J.location+Q,mt/J.locationSize,Ae,lt,mt*Se,mt/J.locationSize*Q*Se,j)}}else if(q!==void 0){const lt=q[V];if(lt!==void 0)switch(lt.length){case 2:r.vertexAttrib2fv(J.location,lt);break;case 3:r.vertexAttrib3fv(J.location,lt);break;case 4:r.vertexAttrib4fv(J.location,lt);break;default:r.vertexAttrib1fv(J.location,lt)}}}}x()}function w(){I();for(const T in i){const P=i[T];for(const O in P){const U=P[O];for(const W in U)h(U[W].object),delete U[W];delete P[O]}delete i[T]}}function E(T){if(i[T.id]===void 0)return;const P=i[T.id];for(const O in P){const U=P[O];for(const W in U)h(U[W].object),delete U[W];delete P[O]}delete i[T.id]}function C(T){for(const P in i){const O=i[P];if(O[T.id]===void 0)continue;const U=O[T.id];for(const W in U)h(U[W].object),delete U[W];delete O[T.id]}}function I(){S(),o=!0,s!==n&&(s=n,l(s.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function E0(r,t,e){let i;function n(l){i=l}function s(l,h){r.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function C0(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(C){return!(C!==hi&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==li&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gi&&!I)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Pt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,maxSamples:w,samples:E}}function R0(r){const t=this;let e=null,i=0,n=!1,s=!1;const o=new Rn,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):l();else{const x=s?0:i,v=x*4;let y=p.clippingState||null;c.value=y,y=h(g,d,v,f);for(let w=0;w!==v;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function P0(r){let t=new WeakMap;function e(o,a){return a===Pr?o.mapping=Ln:a===Ir&&(o.mapping=us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pr||a===Ir)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ou(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const fn=4,Jl=[.125,.215,.35,.446,.526,.582],In=20,I0=256,Fs=new _o,Ql=new Mt;let lr=null,hr=0,ur=0,dr=!1;const D0=new b;class th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:o=256,position:a=D0}=s;lr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lr,hr,ur),this._renderer.xr.enabled=dr,t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ln||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:ui,format:hi,colorSpace:je,depthBuffer:!1},n=eh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=L0(s)),this._blurMaterial=N0(s,t,e),this._ggxMaterial=k0(s,t,e)}return n}_compileMaterial(t){const e=new F(new we,t);this._renderer.compile(e,Fs)}_sceneToCubeUV(t,e,i,n,s){const c=new Qe(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ql),u.toneMapping=Ni,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new F(new Jt,new Gt({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,p=!0):(m.color.copy(Ql),p=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[v],s.y,s.z)):y===1?(c.up.set(0,0,l[v]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[v],s.z)):(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[v]));const w=this._cubeSize;ss(n,y*w,v>2?w:0,w,w),u.setRenderTarget(n),p&&u.render(_,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Ln||t.mapping===us;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const s=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;ss(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Fs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-fn?i-g+fn:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,ss(s,m,p,3*_,2*_),n.setRenderTarget(s),n.render(a,Fs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,ss(t,m,p,3*_,2*_),n.setRenderTarget(t),n.render(a,Fs)}_blur(t,e,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",s),this._halfBlur(o,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[n];u.material=l;const d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*In-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):In;m>In&&Pt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${In}`);const p=[];let x=0;for(let C=0;C<In;++C){const I=C/_,S=Math.exp(-I*I/2);p.push(S),C===0?x+=S:C<m&&(x+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const y=this._sizeLods[n],w=3*y*(n>v-fn?n-v+fn:0),E=4*(this._cubeSize-y);ss(e,w,E,3*y,2*y),c.setRenderTarget(e),c.render(u,Fs)}}function L0(r){const t=[],e=[],i=[];let n=r;const s=r-fn+1+Jl.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let c=1/a;o>r-fn?c=Jl[o-r+fn-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,I=E>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];x.set(S,_*g*E),v.set(d,m*g*E);const T=[E,E,E,E,E,E];y.set(T,p*g*E)}const w=new we;w.setAttribute("position",new Xe(x,_)),w.setAttribute("uv",new Xe(v,m)),w.setAttribute("faceIndex",new Xe(y,p)),i.push(new F(w,null)),n>fn&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function eh(r,t,e){const i=new ei(r,t,e);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function k0(r,t,e){return new Ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function N0(r,t,e){const i=new Float32Array(In),n=new b(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function ih(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function nh(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function O0(r){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pr||c===Ir,h=c===Ln||c===us;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new th(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new th(r)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function n(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function U0(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&ao("WebGLRenderer: "+i+" extension not supported."),n}}}function B0(r,t,e,i){const n={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete n[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,y=x.length;v<y;v+=3){const w=x[v+0],E=x[v+1],C=x[v+2];d.push(w,E,E,C,C,w)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const w=v+0,E=v+1,C=v+2;d.push(w,E,E,C,C,w)}}else return;const m=new($h(d)?eu:tu)(d,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function F0(r,t,e){let i;function n(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(i,f,s,d*o),e.update(f,i,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function z0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Lt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function G0(r,t,e){const i=new WeakMap,n=new be;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let T=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*E*4*u),I=new Zh(C,w,E,u);I.type=gi,I.needsUpdate=!0;const S=y*4;for(let P=0;P<u;P++){const O=p[P],U=x[P],W=v[P],X=w*E*4*P;for(let q=0;q<O.count;q++){const V=q*S;g===!0&&(n.fromBufferAttribute(O,q),C[X+V+0]=n.x,C[X+V+1]=n.y,C[X+V+2]=n.z,C[X+V+3]=0),_===!0&&(n.fromBufferAttribute(U,q),C[X+V+4]=n.x,C[X+V+5]=n.y,C[X+V+6]=n.z,C[X+V+7]=0),m===!0&&(n.fromBufferAttribute(W,q),C[X+V+8]=n.x,C[X+V+9]=n.y,C[X+V+10]=n.z,C[X+V+11]=W.itemSize===4?n.w:1)}}d={count:u,texture:I,size:new nt(w,E)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function H0(r,t,e,i){let n=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;n.get(d)!==l&&(d.update(),n.set(d,l))}return u}function o(){n=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const V0={[Dh]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[kh]:"CINEON_TONE_MAPPING",[bc]:"ACES_FILMIC_TONE_MAPPING",[Oh]:"AGX_TONE_MAPPING",[Uh]:"NEUTRAL_TONE_MAPPING",[Nh]:"CUSTOM_TONE_MAPPING"};function W0(r,t,e,i,n){const s=new ei(t,e,{type:r,depthBuffer:i,stencilBuffer:n}),o=new ei(t,e,{type:ui,depthBuffer:!1,stencilBuffer:!1}),a=new we;a.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new $t([0,2,0,0,2,0],2));const c=new hp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new F(a,c),h=new _o(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(x,v){s.setSize(x,v),o.setSize(x,v);for(let y=0;y<m.length;y++){const w=m[y];w.setSize&&w.setSize(x,v)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const v=s.width,y=s.height;for(let w=0;w<m.length;w++){const E=m[w];E.setSize&&E.setSize(v,y)}},this.begin=function(x,v){if(f||x.toneMapping===Ni&&m.length===0)return!1;if(_=v,v!==null){const y=v.width,w=v.height;(s.width!==y||s.height!==w)&&this.setSize(y,w)}return p===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=Ni,!0},this.hasRenderPass=function(){return p},this.end=function(x,v){x.toneMapping=g,f=!0;let y=s,w=o;for(let E=0;E<m.length;E++){const C=m[E];if(C.enabled!==!1&&(C.render(x,w,y,v),C.needsSwap!==!1)){const I=y;y=w,w=I}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,c.defines={},Zt.getTransfer(u)===de&&(c.defines.SRGB_TRANSFER="");const E=V0[d];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(l,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Ru=new Be,xc=new ro(1,1),Pu=new Zh,Iu=new ef,Du=new su,sh=[],oh=[],ah=new Float32Array(16),rh=new Float32Array(9),ch=new Float32Array(4);function Es(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=sh[n];if(s===void 0&&(s=new Float32Array(n),sh[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Fe(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ze(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Ea(r,t){let e=oh[t];e===void 0&&(e=new Int32Array(t),oh[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function X0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2fv(this.addr,t),ze(e,t)}}function Y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;r.uniform3fv(this.addr,t),ze(e,t)}}function K0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4fv(this.addr,t),ze(e,t)}}function j0(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,i))return;ch.set(i),r.uniformMatrix2fv(this.addr,!1,ch),ze(e,i)}}function $0(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,i))return;rh.set(i),r.uniformMatrix3fv(this.addr,!1,rh),ze(e,i)}}function Z0(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,i))return;ah.set(i),r.uniformMatrix4fv(this.addr,!1,ah),ze(e,i)}}function J0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2iv(this.addr,t),ze(e,t)}}function t_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;r.uniform3iv(this.addr,t),ze(e,t)}}function e_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4iv(this.addr,t),ze(e,t)}}function i_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function n_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2uiv(this.addr,t),ze(e,t)}}function s_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;r.uniform3uiv(this.addr,t),ze(e,t)}}function o_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4uiv(this.addr,t),ze(e,t)}}function a_(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(xc.compareFunction=e.isReversedDepthBuffer()?Lc:Dc,s=xc):s=Ru,e.setTexture2D(t||s,n)}function r_(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Iu,n)}function c_(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Du,n)}function l_(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Pu,n)}function h_(r){switch(r){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return K0;case 35674:return j0;case 35675:return $0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return i_;case 36294:return n_;case 36295:return s_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return l_}}function u_(r,t){r.uniform1fv(this.addr,t)}function d_(r,t){const e=Es(t,this.size,2);r.uniform2fv(this.addr,e)}function f_(r,t){const e=Es(t,this.size,3);r.uniform3fv(this.addr,e)}function p_(r,t){const e=Es(t,this.size,4);r.uniform4fv(this.addr,e)}function m_(r,t){const e=Es(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function g_(r,t){const e=Es(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function __(r,t){const e=Es(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function x_(r,t){r.uniform1iv(this.addr,t)}function v_(r,t){r.uniform2iv(this.addr,t)}function y_(r,t){r.uniform3iv(this.addr,t)}function M_(r,t){r.uniform4iv(this.addr,t)}function S_(r,t){r.uniform1uiv(this.addr,t)}function b_(r,t){r.uniform2uiv(this.addr,t)}function T_(r,t){r.uniform3uiv(this.addr,t)}function w_(r,t){r.uniform4uiv(this.addr,t)}function A_(r,t,e){const i=this.cache,n=t.length,s=Ea(e,n);Fe(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=xc:o=Ru;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function E_(r,t,e){const i=this.cache,n=t.length,s=Ea(e,n);Fe(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Iu,s[o])}function C_(r,t,e){const i=this.cache,n=t.length,s=Ea(e,n);Fe(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Du,s[o])}function R_(r,t,e){const i=this.cache,n=t.length,s=Ea(e,n);Fe(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Pu,s[o])}function P_(r){switch(r){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return b_;case 36295:return T_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return R_}}class I_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=h_(e.type)}}class D_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P_(e.type)}}class L_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(t,e[a.id],i)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function lh(r,t){r.seq.push(t),r.map[t.id]=t}function k_(r,t,e){const i=r.name,n=i.length;for(fr.lastIndex=0;;){const s=fr.exec(i),o=fr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===n){lh(e,l===void 0?new I_(a,r,t):new D_(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new L_(a),lh(e,u)),e=u}}}class ca{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);k_(a,c,this)}const n=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function hh(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const N_=37297;let O_=0;function U_(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const uh=new Ft;function B_(r){Zt._getMatrix(uh,Zt.workingColorSpace,r);const t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(r)){case da:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function dh(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+U_(r.getShaderSource(t),a)}else return s}function F_(r,t){const e=B_(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const z_={[Dh]:"Linear",[Lh]:"Reinhard",[kh]:"Cineon",[bc]:"ACESFilmic",[Oh]:"AgX",[Uh]:"Neutral",[Nh]:"Custom"};function G_(r,t){const e=z_[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qo=new b;function H_(){Zt.getLuminanceCoefficients(Qo);const r=Qo.x.toFixed(4),t=Qo.y.toFixed(4),e=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function W_(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function X_(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function qs(r){return r!==""}function fh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(r){return r.replace(q_,K_)}const Y_=new Map;function K_(r,t){let e=zt[t];if(e===void 0){const i=Y_.get(t);if(i!==void 0)e=zt[i],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return vc(e)}const j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(r){return r.replace(j_,$_)}function $_(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function gh(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const Z_={[ia]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function J_(r){return Z_[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q_={[Ln]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE_UV"};function tx(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Q_[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const ex={[us]:"ENVMAP_MODE_REFRACTION"};function ix(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ex[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nx={[Ih]:"ENVMAP_BLENDING_MULTIPLY",[_d]:"ENVMAP_BLENDING_MIX",[xd]:"ENVMAP_BLENDING_ADD"};function sx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":nx[r.combine]||"ENVMAP_BLENDING_NONE"}function ox(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ax(r,t,e,i){const n=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=J_(e),l=tx(e),h=ix(e),u=sx(e),d=ox(e),f=V_(e),g=W_(s),_=n.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?zt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,F_("linearToOutputTexel",e.outputColorSpace),H_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),o=vc(o),o=fh(o,e),o=ph(o,e),a=vc(a),a=fh(a,e),a=ph(a,e),o=mh(o),a=mh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+o,y=x+p+a,w=hh(n,n.VERTEX_SHADER,v),E=hh(n,n.FRAGMENT_SHADER,y);n.attachShader(_,w),n.attachShader(_,E),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function C(P){if(r.debug.checkShaderErrors){const O=n.getProgramInfoLog(_)||"",U=n.getShaderInfoLog(w)||"",W=n.getShaderInfoLog(E)||"",X=O.trim(),q=U.trim(),V=W.trim();let J=!0,ft=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,w,E);else{const lt=dh(n,w,"vertex"),mt=dh(n,E,"fragment");Lt("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+lt+`
`+mt)}else X!==""?Pt("WebGLProgram: Program Info Log:",X):(q===""||V==="")&&(ft=!1);ft&&(P.diagnostics={runnable:J,programLog:X,vertexShader:{log:q,prefix:m},fragmentShader:{log:V,prefix:p}})}n.deleteShader(w),n.deleteShader(E),I=new ca(n,_),S=X_(n,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=n.getProgramParameter(_,N_)),T},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=O_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let rx=0;class cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new lx(t),e.set(t,i)),i}}class lx{constructor(t){this.id=rx++,this.code=t,this.usedTimes=0}}function hx(r,t,e,i,n,s,o){const a=new Jh,c=new cx,l=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,T,P,O,U){const W=O.fog,X=U.geometry,q=S.isMeshStandardMaterial?O.environment:null,V=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),J=V&&V.mapping===Ta?V.image.height:null,ft=g[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&Pt("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=lt!==void 0?lt.length:0;let qt=0;X.morphAttributes.position!==void 0&&(qt=1),X.morphAttributes.normal!==void 0&&(qt=2),X.morphAttributes.color!==void 0&&(qt=3);let Ht,Ae,Se,j;if(ft){const he=Ii[ft];Ht=he.vertexShader,Ae=he.fragmentShader}else Ht=S.vertexShader,Ae=S.fragmentShader,c.update(S),Se=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);const Q=r.getRenderTarget(),vt=r.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,bt=U.isBatchedMesh===!0,ne=!!S.map,Ge=!!S.matcap,Qt=!!V,le=!!S.aoMap,_e=!!S.lightMap,Vt=!!S.bumpMap,ke=!!S.normalMap,D=!!S.displacementMap,Ne=!!S.emissiveMap,oe=!!S.metalnessMap,ve=!!S.roughnessMap,wt=S.anisotropy>0,R=S.clearcoat>0,M=S.dispersion>0,k=S.iridescence>0,K=S.sheen>0,Z=S.transmission>0,Y=wt&&!!S.anisotropyMap,Et=R&&!!S.clearcoatMap,ot=R&&!!S.clearcoatNormalMap,Tt=R&&!!S.clearcoatRoughnessMap,Nt=k&&!!S.iridescenceMap,et=k&&!!S.iridescenceThicknessMap,rt=K&&!!S.sheenColorMap,St=K&&!!S.sheenRoughnessMap,At=!!S.specularMap,at=!!S.specularColorMap,Wt=!!S.specularIntensityMap,L=Z&&!!S.transmissionMap,dt=Z&&!!S.thicknessMap,it=!!S.gradientMap,gt=!!S.alphaMap,tt=S.alphaTest>0,$=!!S.alphaHash,st=!!S.extensions;let Ut=Ni;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const ye={shaderID:ft,shaderType:S.type,shaderName:S.name,vertexShader:Ht,fragmentShader:Ae,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:bt,batchingColor:bt&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:je,alphaToCoverage:!!S.alphaToCoverage,map:ne,matcap:Ge,envMap:Qt,envMapMode:Qt&&V.mapping,envMapCubeUVHeight:J,aoMap:le,lightMap:_e,bumpMap:Vt,normalMap:ke,displacementMap:D,emissiveMap:Ne,normalMapObjectSpace:ke&&S.normalMapType===Td,normalMapTangentSpace:ke&&S.normalMapType===jh,metalnessMap:oe,roughnessMap:ve,anisotropy:wt,anisotropyMap:Y,clearcoat:R,clearcoatMap:Et,clearcoatNormalMap:ot,clearcoatRoughnessMap:Tt,dispersion:M,iridescence:k,iridescenceMap:Nt,iridescenceThicknessMap:et,sheen:K,sheenColorMap:rt,sheenRoughnessMap:St,specularMap:At,specularColorMap:at,specularIntensityMap:Wt,transmission:Z,transmissionMap:L,thicknessMap:dt,gradientMap:it,opaque:S.transparent===!1&&S.blending===rs&&S.alphaToCoverage===!1,alphaMap:gt,alphaTest:tt,alphaHash:$,combine:S.combine,mapUv:ne&&_(S.map.channel),aoMapUv:le&&_(S.aoMap.channel),lightMapUv:_e&&_(S.lightMap.channel),bumpMapUv:Vt&&_(S.bumpMap.channel),normalMapUv:ke&&_(S.normalMap.channel),displacementMapUv:D&&_(S.displacementMap.channel),emissiveMapUv:Ne&&_(S.emissiveMap.channel),metalnessMapUv:oe&&_(S.metalnessMap.channel),roughnessMapUv:ve&&_(S.roughnessMap.channel),anisotropyMapUv:Y&&_(S.anisotropyMap.channel),clearcoatMapUv:Et&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(S.sheenRoughnessMap.channel),specularMapUv:At&&_(S.specularMap.channel),specularColorMapUv:at&&_(S.specularColorMap.channel),specularIntensityMapUv:Wt&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:dt&&_(S.thicknessMap.channel),alphaMapUv:gt&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ke||wt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(ne||gt),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:qt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:ne&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:Ne&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pe,flipSided:S.side===ti,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:st&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&S.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)T.push(P),T.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(T,S),v(T,S),T.push(r.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function x(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const T=g[S.type];let P;if(T){const O=Ii[T];P=ma.clone(O.uniforms)}else P=S.uniforms;return P}function w(S,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new ax(r,T,S,s),h.push(P),u.set(T,P)),P}function E(S){if(--S.usedTimes===0){const T=h.indexOf(S);h[T]=h[h.length-1],h.pop(),u.delete(S.cacheKey),S.destroy()}}function C(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:I}}function ux(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function dx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function _h(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xh(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||dx),i.length>1&&i.sort(d||_h),n.length>1&&n.sort(d||_h)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:a,unshift:c,finish:h,sort:l}}function fx(){let r=new WeakMap;function t(i,n){const s=r.get(i);let o;return s===void 0?(o=new xh,r.set(i,[o])):n>=s.length?(o=new xh,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function px(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Mt};break;case"SpotLight":e={position:new b,direction:new b,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new b,halfWidth:new b,halfHeight:new b};break}return r[t.id]=e,e}}}function mx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let gx=0;function _x(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function xx(r){const t=new px,e=mx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);const n=new b,s=new Ot,o=new Ot;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,v=0,y=0,w=0,E=0,C=0;l.sort(_x);for(let S=0,T=l.length;S<T;S++){const P=l[S],O=P.color,U=P.intensity,W=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ds?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*U,u+=O.g*U,d+=O.b*U;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],U);C++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,J=e.get(P);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,i.directionalShadow[f]=J,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=P.shadow.matrix,x++}i.directional[f]=q,f++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(O).multiplyScalar(U),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[_]=q;const V=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,V.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[_]=V.matrix,P.castShadow){const J=e.get(P);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=X,y++}_++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(O).multiplyScalar(U),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=q,m++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const V=P.shadow,J=e.get(P);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=P.shadow.matrix,v++}i.point[g]=q,g++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(U),q.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[p]=q,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==w||I.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=w,I.numLightProbes=C,i.version=gx++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const v=l[p];if(v.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),u++}else if(v.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function vh(r){const t=new xx(r),e=[],i=[];function n(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function vx(r){let t=new WeakMap;function e(n,s=0){const o=t.get(n);let a;return o===void 0?(a=new vh(r),t.set(n,[a])):s>=o.length?(a=new vh(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
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
}`,Sx=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],bx=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],yh=new Ot,zs=new b,pr=new b;function Tx(r,t,e){let i=new Fc;const n=new nt,s=new nt,o=new be,a=new up,c=new dp,l={},h=e.maxTextureSize,u={[Qi]:ti,[ti]:Qi,[pe]:pe},d=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:yx,fragmentShader:Mx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new F(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let p=this.type;this.render=function(E,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;E.type===Ph&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=ia);const S=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(ki),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==this.type;U&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(X=>X.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,X=E.length;W<X;W++){const q=E[W],V=q.shadow;if(V===void 0){Pt("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const J=V.getFrameExtents();if(n.multiply(J),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/J.x),n.x=s.x*J.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/J.y),n.y=s.y*J.y,V.mapSize.y=s.y)),V.map===null||U===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Vs){if(q.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ei(n.x,n.y,{format:ds,type:ui,minFilter:Le,magFilter:Le,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new ro(n.x,n.y,gi),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=tn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ue,V.map.depthTexture.magFilter=Ue}else{q.isPointLight?(V.map=new ou(n.x),V.map.depthTexture=new If(n.x,Bi)):(V.map=new ei(n.x,n.y),V.map.depthTexture=new ro(n.x,n.y,Bi)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=tn;const lt=r.state.buffers.depth.getReversed();this.type===ia?(V.map.depthTexture.compareFunction=lt?Lc:Dc,V.map.depthTexture.minFilter=Le,V.map.depthTexture.magFilter=Le):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ue,V.map.depthTexture.magFilter=Ue)}V.camera.updateProjectionMatrix()}const ft=V.map.isWebGLCubeRenderTarget?6:1;for(let lt=0;lt<ft;lt++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,lt),r.clear();else{lt===0&&(r.setRenderTarget(V.map),r.clear());const mt=V.getViewport(lt);o.set(s.x*mt.x,s.y*mt.y,s.x*mt.z,s.y*mt.w),O.viewport(o)}if(q.isPointLight){const mt=V.camera,qt=V.matrix,Ht=q.distance||mt.far;Ht!==mt.far&&(mt.far=Ht,mt.updateProjectionMatrix()),zs.setFromMatrixPosition(q.matrixWorld),mt.position.copy(zs),pr.copy(mt.position),pr.add(Sx[lt]),mt.up.copy(bx[lt]),mt.lookAt(pr),mt.updateMatrixWorld(),qt.makeTranslation(-zs.x,-zs.y,-zs.z),yh.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(yh,mt.coordinateSystem,mt.reversedDepth)}else V.updateMatrices(q);i=V.getFrustum(),y(C,I,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Vs&&x(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,T,P)};function x(E,C){const I=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ei(n.x,n.y,{format:ds,type:ui})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(C,null,I,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(C,null,I,f,_,null)}function v(E,C,I,S){let T=null;const P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)T=P;else if(T=I.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=T.uuid,U=C.uuid;let W=l[O];W===void 0&&(W={},l[O]=W);let X=W[U];X===void 0&&(X=T.clone(),W[U]=X,C.addEventListener("dispose",w)),T=X}if(T.visible=C.visible,T.wireframe=C.wireframe,S===Vs?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const O=r.properties.get(T);O.light=I}return T}function y(E,C,I,S,T){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Vs)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const U=t.update(E),W=E.material;if(Array.isArray(W)){const X=U.groups;for(let q=0,V=X.length;q<V;q++){const J=X[q],ft=W[J.materialIndex];if(ft&&ft.visible){const lt=v(E,ft,S,T);E.onBeforeShadow(r,E,C,I,U,lt,J),r.renderBufferDirect(I,null,U,lt,E,J),E.onAfterShadow(r,E,C,I,U,lt,J)}}}else if(W.visible){const X=v(E,W,S,T);E.onBeforeShadow(r,E,C,I,U,X,null),r.renderBufferDirect(I,null,U,X,E,null),E.onAfterShadow(r,E,C,I,U,X,null)}}const O=E.children;for(let U=0,W=O.length;U<W;U++)y(O[U],C,I,S,T)}function w(E){E.target.removeEventListener("dispose",w);for(const I in l){const S=l[I],T=E.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const wx={[br]:Tr,[wr]:Cr,[Ar]:Rr,[hs]:Er,[Tr]:br,[Cr]:wr,[Rr]:Ar,[Er]:hs};function Ax(r,t){function e(){let L=!1;const dt=new be;let it=null;const gt=new be(0,0,0,0);return{setMask:function(tt){it!==tt&&!L&&(r.colorMask(tt,tt,tt,tt),it=tt)},setLocked:function(tt){L=tt},setClear:function(tt,$,st,Ut,ye){ye===!0&&(tt*=Ut,$*=Ut,st*=Ut),dt.set(tt,$,st,Ut),gt.equals(dt)===!1&&(r.clearColor(tt,$,st,Ut),gt.copy(dt))},reset:function(){L=!1,it=null,gt.set(-1,0,0,0)}}}function i(){let L=!1,dt=!1,it=null,gt=null,tt=null;return{setReversed:function($){if(dt!==$){const st=t.get("EXT_clip_control");$?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),dt=$;const Ut=tt;tt=null,this.setClear(Ut)}},getReversed:function(){return dt},setTest:function($){$?Q(r.DEPTH_TEST):vt(r.DEPTH_TEST)},setMask:function($){it!==$&&!L&&(r.depthMask($),it=$)},setFunc:function($){if(dt&&($=wx[$]),gt!==$){switch($){case br:r.depthFunc(r.NEVER);break;case Tr:r.depthFunc(r.ALWAYS);break;case wr:r.depthFunc(r.LESS);break;case hs:r.depthFunc(r.LEQUAL);break;case Ar:r.depthFunc(r.EQUAL);break;case Er:r.depthFunc(r.GEQUAL);break;case Cr:r.depthFunc(r.GREATER);break;case Rr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=$}},setLocked:function($){L=$},setClear:function($){tt!==$&&(dt&&($=1-$),r.clearDepth($),tt=$)},reset:function(){L=!1,it=null,gt=null,tt=null,dt=!1}}}function n(){let L=!1,dt=null,it=null,gt=null,tt=null,$=null,st=null,Ut=null,ye=null;return{setTest:function(he){L||(he?Q(r.STENCIL_TEST):vt(r.STENCIL_TEST))},setMask:function(he){dt!==he&&!L&&(r.stencilMask(he),dt=he)},setFunc:function(he,Ai,Vi){(it!==he||gt!==Ai||tt!==Vi)&&(r.stencilFunc(he,Ai,Vi),it=he,gt=Ai,tt=Vi)},setOp:function(he,Ai,Vi){($!==he||st!==Ai||Ut!==Vi)&&(r.stencilOp(he,Ai,Vi),$=he,st=Ai,Ut=Vi)},setLocked:function(he){L=he},setClear:function(he){ye!==he&&(r.clearStencil(he),ye=he)},reset:function(){L=!1,dt=null,it=null,gt=null,tt=null,$=null,st=null,Ut=null,ye=null}}}const s=new e,o=new i,a=new n,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,v=null,y=null,w=null,E=null,C=new Mt(0,0,0),I=0,S=!1,T=null,P=null,O=null,U=null,W=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=V>=1):J.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=V>=2);let ft=null,lt={};const mt=r.getParameter(r.SCISSOR_BOX),qt=r.getParameter(r.VIEWPORT),Ht=new be().fromArray(mt),Ae=new be().fromArray(qt);function Se(L,dt,it,gt){const tt=new Uint8Array(4),$=r.createTexture();r.bindTexture(L,$),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<it;st++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(dt,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,tt):r.texImage2D(dt+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,tt);return $}const j={};j[r.TEXTURE_2D]=Se(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(r.DEPTH_TEST),o.setFunc(hs),Vt(!1),ke(il),Q(r.CULL_FACE),le(ki);function Q(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function vt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Bt(L,dt){return u[L]!==dt?(r.bindFramebuffer(L,dt),u[L]=dt,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=dt),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=dt),!0):!1}function bt(L,dt){let it=f,gt=!1;if(L){it=d.get(dt),it===void 0&&(it=[],d.set(dt,it));const tt=L.textures;if(it.length!==tt.length||it[0]!==r.COLOR_ATTACHMENT0){for(let $=0,st=tt.length;$<st;$++)it[$]=r.COLOR_ATTACHMENT0+$;it.length=tt.length,gt=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,gt=!0);gt&&r.drawBuffers(it)}function ne(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Ge={[Pn]:r.FUNC_ADD,[td]:r.FUNC_SUBTRACT,[ed]:r.FUNC_REVERSE_SUBTRACT};Ge[id]=r.MIN,Ge[nd]=r.MAX;const Qt={[sd]:r.ZERO,[od]:r.ONE,[ad]:r.SRC_COLOR,[Mr]:r.SRC_ALPHA,[dd]:r.SRC_ALPHA_SATURATE,[hd]:r.DST_COLOR,[cd]:r.DST_ALPHA,[rd]:r.ONE_MINUS_SRC_COLOR,[Sr]:r.ONE_MINUS_SRC_ALPHA,[ud]:r.ONE_MINUS_DST_COLOR,[ld]:r.ONE_MINUS_DST_ALPHA,[fd]:r.CONSTANT_COLOR,[pd]:r.ONE_MINUS_CONSTANT_COLOR,[md]:r.CONSTANT_ALPHA,[gd]:r.ONE_MINUS_CONSTANT_ALPHA};function le(L,dt,it,gt,tt,$,st,Ut,ye,he){if(L===ki){_===!0&&(vt(r.BLEND),_=!1);return}if(_===!1&&(Q(r.BLEND),_=!0),L!==Qu){if(L!==m||he!==S){if((p!==Pn||y!==Pn)&&(r.blendEquation(r.FUNC_ADD),p=Pn,y=Pn),he)switch(L){case rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ri:r.blendFunc(r.ONE,r.ONE);break;case nl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",L);break}else switch(L){case rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ri:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nl:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",L);break}x=null,v=null,w=null,E=null,C.set(0,0,0),I=0,m=L,S=he}return}tt=tt||dt,$=$||it,st=st||gt,(dt!==p||tt!==y)&&(r.blendEquationSeparate(Ge[dt],Ge[tt]),p=dt,y=tt),(it!==x||gt!==v||$!==w||st!==E)&&(r.blendFuncSeparate(Qt[it],Qt[gt],Qt[$],Qt[st]),x=it,v=gt,w=$,E=st),(Ut.equals(C)===!1||ye!==I)&&(r.blendColor(Ut.r,Ut.g,Ut.b,ye),C.copy(Ut),I=ye),m=L,S=!1}function _e(L,dt){L.side===pe?vt(r.CULL_FACE):Q(r.CULL_FACE);let it=L.side===ti;dt&&(it=!it),Vt(it),L.blending===rs&&L.transparent===!1?le(ki):le(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const gt=L.stencilWrite;a.setTest(gt),gt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(L){T!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),T=L)}function ke(L){L!==Zu?(Q(r.CULL_FACE),L!==P&&(L===il?r.cullFace(r.BACK):L===Ju?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):vt(r.CULL_FACE),P=L}function D(L){L!==O&&(q&&r.lineWidth(L),O=L)}function Ne(L,dt,it){L?(Q(r.POLYGON_OFFSET_FILL),(U!==dt||W!==it)&&(r.polygonOffset(dt,it),U=dt,W=it)):vt(r.POLYGON_OFFSET_FILL)}function oe(L){L?Q(r.SCISSOR_TEST):vt(r.SCISSOR_TEST)}function ve(L){L===void 0&&(L=r.TEXTURE0+X-1),ft!==L&&(r.activeTexture(L),ft=L)}function wt(L,dt,it){it===void 0&&(ft===null?it=r.TEXTURE0+X-1:it=ft);let gt=lt[it];gt===void 0&&(gt={type:void 0,texture:void 0},lt[it]=gt),(gt.type!==L||gt.texture!==dt)&&(ft!==it&&(r.activeTexture(it),ft=it),r.bindTexture(L,dt||j[L]),gt.type=L,gt.texture=dt)}function R(){const L=lt[ft];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(L){Lt("WebGLState:",L)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(L){Lt("WebGLState:",L)}}function K(){try{r.texSubImage2D(...arguments)}catch(L){Lt("WebGLState:",L)}}function Z(){try{r.texSubImage3D(...arguments)}catch(L){Lt("WebGLState:",L)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Lt("WebGLState:",L)}}function Et(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Lt("WebGLState:",L)}}function ot(){try{r.texStorage2D(...arguments)}catch(L){Lt("WebGLState:",L)}}function Tt(){try{r.texStorage3D(...arguments)}catch(L){Lt("WebGLState:",L)}}function Nt(){try{r.texImage2D(...arguments)}catch(L){Lt("WebGLState:",L)}}function et(){try{r.texImage3D(...arguments)}catch(L){Lt("WebGLState:",L)}}function rt(L){Ht.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ht.copy(L))}function St(L){Ae.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Ae.copy(L))}function At(L,dt){let it=l.get(dt);it===void 0&&(it=new WeakMap,l.set(dt,it));let gt=it.get(L);gt===void 0&&(gt=r.getUniformBlockIndex(dt,L.name),it.set(L,gt))}function at(L,dt){const gt=l.get(dt).get(L);c.get(dt)!==gt&&(r.uniformBlockBinding(dt,gt,L.__bindingPointIndex),c.set(dt,gt))}function Wt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ft=null,lt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,v=null,y=null,w=null,E=null,C=new Mt(0,0,0),I=0,S=!1,T=null,P=null,O=null,U=null,W=null,Ht.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:vt,bindFramebuffer:Bt,drawBuffers:bt,useProgram:ne,setBlending:le,setMaterial:_e,setFlipSided:Vt,setCullFace:ke,setLineWidth:D,setPolygonOffset:Ne,setScissorTest:oe,activeTexture:ve,bindTexture:wt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:Nt,texImage3D:et,updateUBOMapping:At,uniformBlockBinding:at,texStorage2D:ot,texStorage3D:Tt,texSubImage2D:K,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:Et,scissor:rt,viewport:St,reset:Wt}}function Ex(r,t,e,i,n,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):oo("canvas")}function _(R,M,k){let K=1;const Z=wt(R);if((Z.width>k||Z.height>k)&&(K=k/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(K*Z.width),Et=Math.floor(K*Z.height);u===void 0&&(u=g(Y,Et));const ot=M?g(Y,Et):u;return ot.width=Y,ot.height=Et,ot.getContext("2d").drawImage(R,0,0,Y,Et),Pt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Et+")."),ot}else return"data"in R&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,M,k,K,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=M;if(M===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8)),M===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),M===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8)),M===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),M===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),M===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),M===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),M===r.RGBA){const Et=Z?da:Zt.getTransfer(K);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=Et===de?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(R,M){let k;return R?M===null||M===Bi||M===io?k=r.DEPTH24_STENCIL8:M===gi?k=r.DEPTH32F_STENCIL8:M===eo&&(k=r.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Bi||M===io?k=r.DEPTH_COMPONENT24:M===gi?k=r.DEPTH_COMPONENT32F:M===eo&&(k=r.DEPTH_COMPONENT16),k}function w(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ue&&R.minFilter!==Le?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function E(R){const M=R.target;M.removeEventListener("dispose",E),I(M),M.isVideoTexture&&h.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),T(M)}function I(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,K=d.get(k);if(K){const Z=K[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(R),Object.keys(K).length===0&&d.delete(k)}i.remove(R)}function S(R){const M=i.get(R);r.deleteTexture(M.__webglTexture);const k=R.source,K=d.get(k);delete K[M.__cacheKey],o.memory.textures--}function T(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let Z=0;Z<M.__webglFramebuffer[K].length;Z++)r.deleteFramebuffer(M.__webglFramebuffer[K][Z]);else r.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)r.deleteFramebuffer(M.__webglFramebuffer[K]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let K=0,Z=k.length;K<Z;K++){const Y=i.get(k[K]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(R)}let P=0;function O(){P=0}function U(){const R=P;return R>=n.maxTextures&&Pt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),P+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){const k=i.get(R);if(R.isVideoTexture&&oe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const K=R.image;if(K===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+M)}function q(R,M){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){j(k,R,M);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+M)}function V(R,M){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){j(k,R,M);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+M)}function J(R,M){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Q(k,R,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+M)}const ft={[Ui]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[ha]:r.MIRRORED_REPEAT},lt={[Ue]:r.NEAREST,[Fh]:r.NEAREST_MIPMAP_NEAREST,[Ws]:r.NEAREST_MIPMAP_LINEAR,[Le]:r.LINEAR,[na]:r.LINEAR_MIPMAP_NEAREST,[$i]:r.LINEAR_MIPMAP_LINEAR},mt={[wd]:r.NEVER,[Pd]:r.ALWAYS,[Ad]:r.LESS,[Dc]:r.LEQUAL,[Ed]:r.EQUAL,[Lc]:r.GEQUAL,[Cd]:r.GREATER,[Rd]:r.NOTEQUAL};function qt(R,M){if(M.type===gi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Le||M.magFilter===na||M.magFilter===Ws||M.magFilter===$i||M.minFilter===Le||M.minFilter===na||M.minFilter===Ws||M.minFilter===$i)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ft[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ft[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ft[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,lt[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ue||M.minFilter!==Ws&&M.minFilter!==$i||M.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ht(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",E));const K=M.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const Y=W(M);if(Y!==R.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[Y].usedTimes++;const Et=Z[R.__cacheKey];Et!==void 0&&(Z[R.__cacheKey].usedTimes--,Et.usedTimes===0&&S(M)),R.__cacheKey=Y,R.__webglTexture=Z[Y].texture}return k}function Ae(R,M,k){return Math.floor(Math.floor(R/k)/M)}function Se(R,M,k,K){const Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,k,K,M.data);else{Y.sort((et,rt)=>et.start-rt.start);let Et=0;for(let et=1;et<Y.length;et++){const rt=Y[Et],St=Y[et],At=rt.start+rt.count,at=Ae(St.start,M.width,4),Wt=Ae(rt.start,M.width,4);St.start<=At+1&&at===Wt&&Ae(St.start+St.count-1,M.width,4)===at?rt.count=Math.max(rt.count,St.start+St.count-rt.start):(++Et,Y[Et]=St)}Y.length=Et+1;const ot=r.getParameter(r.UNPACK_ROW_LENGTH),Tt=r.getParameter(r.UNPACK_SKIP_PIXELS),Nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let et=0,rt=Y.length;et<rt;et++){const St=Y[et],At=Math.floor(St.start/4),at=Math.ceil(St.count/4),Wt=At%M.width,L=Math.floor(At/M.width),dt=at,it=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),e.texSubImage2D(r.TEXTURE_2D,0,Wt,L,dt,it,k,K,M.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Tt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Nt)}}function j(R,M,k){let K=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=r.TEXTURE_3D);const Z=Ht(R,M),Y=M.source;e.bindTexture(K,R.__webglTexture,r.TEXTURE0+k);const Et=i.get(Y);if(Y.version!==Et.__version||Z===!0){e.activeTexture(r.TEXTURE0+k);const ot=Zt.getPrimaries(Zt.workingColorSpace),Tt=M.colorSpace===dn?null:Zt.getPrimaries(M.colorSpace),Nt=M.colorSpace===dn||ot===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let et=_(M.image,!1,n.maxTextureSize);et=ve(M,et);const rt=s.convert(M.format,M.colorSpace),St=s.convert(M.type);let At=v(M.internalFormat,rt,St,M.colorSpace,M.isVideoTexture);qt(K,M);let at;const Wt=M.mipmaps,L=M.isVideoTexture!==!0,dt=Et.__version===void 0||Z===!0,it=Y.dataReady,gt=w(M,et);if(M.isDepthTexture)At=y(M.format===Dn,M.type),dt&&(L?e.texStorage2D(r.TEXTURE_2D,1,At,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,At,et.width,et.height,0,rt,St,null));else if(M.isDataTexture)if(Wt.length>0){L&&dt&&e.texStorage2D(r.TEXTURE_2D,gt,At,Wt[0].width,Wt[0].height);for(let tt=0,$=Wt.length;tt<$;tt++)at=Wt[tt],L?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,at.width,at.height,rt,St,at.data):e.texImage2D(r.TEXTURE_2D,tt,At,at.width,at.height,0,rt,St,at.data);M.generateMipmaps=!1}else L?(dt&&e.texStorage2D(r.TEXTURE_2D,gt,At,et.width,et.height),it&&Se(M,et,rt,St)):e.texImage2D(r.TEXTURE_2D,0,At,et.width,et.height,0,rt,St,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,At,Wt[0].width,Wt[0].height,et.depth);for(let tt=0,$=Wt.length;tt<$;tt++)if(at=Wt[tt],M.format!==hi)if(rt!==null)if(L){if(it)if(M.layerUpdates.size>0){const st=Zl(at.width,at.height,M.format,M.type);for(const Ut of M.layerUpdates){const ye=at.data.subarray(Ut*st/at.data.BYTES_PER_ELEMENT,(Ut+1)*st/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,Ut,at.width,at.height,1,rt,ye)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,at.width,at.height,et.depth,rt,at.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,At,at.width,at.height,et.depth,0,at.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?it&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,at.width,at.height,et.depth,rt,St,at.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,At,at.width,at.height,et.depth,0,rt,St,at.data)}else{L&&dt&&e.texStorage2D(r.TEXTURE_2D,gt,At,Wt[0].width,Wt[0].height);for(let tt=0,$=Wt.length;tt<$;tt++)at=Wt[tt],M.format!==hi?rt!==null?L?it&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,At,at.width,at.height,0,at.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,at.width,at.height,rt,St,at.data):e.texImage2D(r.TEXTURE_2D,tt,At,at.width,at.height,0,rt,St,at.data)}else if(M.isDataArrayTexture)if(L){if(dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,At,et.width,et.height,et.depth),it)if(M.layerUpdates.size>0){const tt=Zl(et.width,et.height,M.format,M.type);for(const $ of M.layerUpdates){const st=et.data.subarray($*tt/et.data.BYTES_PER_ELEMENT,($+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,et.width,et.height,1,rt,St,st)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,rt,St,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,At,et.width,et.height,et.depth,0,rt,St,et.data);else if(M.isData3DTexture)L?(dt&&e.texStorage3D(r.TEXTURE_3D,gt,At,et.width,et.height,et.depth),it&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,rt,St,et.data)):e.texImage3D(r.TEXTURE_3D,0,At,et.width,et.height,et.depth,0,rt,St,et.data);else if(M.isFramebufferTexture){if(dt)if(L)e.texStorage2D(r.TEXTURE_2D,gt,At,et.width,et.height);else{let tt=et.width,$=et.height;for(let st=0;st<gt;st++)e.texImage2D(r.TEXTURE_2D,st,At,tt,$,0,rt,St,null),tt>>=1,$>>=1}}else if(Wt.length>0){if(L&&dt){const tt=wt(Wt[0]);e.texStorage2D(r.TEXTURE_2D,gt,At,tt.width,tt.height)}for(let tt=0,$=Wt.length;tt<$;tt++)at=Wt[tt],L?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,rt,St,at):e.texImage2D(r.TEXTURE_2D,tt,At,rt,St,at);M.generateMipmaps=!1}else if(L){if(dt){const tt=wt(et);e.texStorage2D(r.TEXTURE_2D,gt,At,tt.width,tt.height)}it&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,St,et)}else e.texImage2D(r.TEXTURE_2D,0,At,rt,St,et);m(M)&&p(K),Et.__version=Y.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Q(R,M,k){if(M.image.length!==6)return;const K=Ht(R,M),Z=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const Y=i.get(Z);if(Z.version!==Y.__version||K===!0){e.activeTexture(r.TEXTURE0+k);const Et=Zt.getPrimaries(Zt.workingColorSpace),ot=M.colorSpace===dn?null:Zt.getPrimaries(M.colorSpace),Tt=M.colorSpace===dn||Et===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Nt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,rt=[];for(let $=0;$<6;$++)!Nt&&!et?rt[$]=_(M.image[$],!0,n.maxCubemapSize):rt[$]=et?M.image[$].image:M.image[$],rt[$]=ve(M,rt[$]);const St=rt[0],At=s.convert(M.format,M.colorSpace),at=s.convert(M.type),Wt=v(M.internalFormat,At,at,M.colorSpace),L=M.isVideoTexture!==!0,dt=Y.__version===void 0||K===!0,it=Z.dataReady;let gt=w(M,St);qt(r.TEXTURE_CUBE_MAP,M);let tt;if(Nt){L&&dt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Wt,St.width,St.height);for(let $=0;$<6;$++){tt=rt[$].mipmaps;for(let st=0;st<tt.length;st++){const Ut=tt[st];M.format!==hi?At!==null?L?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,0,0,Ut.width,Ut.height,At,Ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,Wt,Ut.width,Ut.height,0,Ut.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,0,0,Ut.width,Ut.height,At,at,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,Wt,Ut.width,Ut.height,0,At,at,Ut.data)}}}else{if(tt=M.mipmaps,L&&dt){tt.length>0&&gt++;const $=wt(rt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Wt,$.width,$.height)}for(let $=0;$<6;$++)if(et){L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,rt[$].width,rt[$].height,At,at,rt[$].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,rt[$].width,rt[$].height,0,At,at,rt[$].data);for(let st=0;st<tt.length;st++){const ye=tt[st].image[$].image;L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,0,0,ye.width,ye.height,At,at,ye.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,Wt,ye.width,ye.height,0,At,at,ye.data)}}else{L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,At,at,rt[$]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,At,at,rt[$]);for(let st=0;st<tt.length;st++){const Ut=tt[st];L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,0,0,At,at,Ut.image[$]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,Wt,At,at,Ut.image[$])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),Y.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function vt(R,M,k,K,Z,Y){const Et=s.convert(k.format,k.colorSpace),ot=s.convert(k.type),Tt=v(k.internalFormat,Et,ot,k.colorSpace),Nt=i.get(M),et=i.get(k);if(et.__renderTarget=M,!Nt.__hasExternalTextures){const rt=Math.max(1,M.width>>Y),St=Math.max(1,M.height>>Y);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,Tt,rt,St,M.depth,0,Et,ot,null):e.texImage2D(Z,Y,Tt,rt,St,0,Et,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Ne(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Z,et.__webglTexture,0,D(M)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Z,et.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(R,M,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=y(M.stencilBuffer,Z),Et=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ne(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(M),Y,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(M),Y,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Y,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,R)}else{const K=M.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],Et=s.convert(Y.format,Y.colorSpace),ot=s.convert(Y.type),Tt=v(Y.internalFormat,Et,ot,Y.colorSpace);Ne(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(M),Tt,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(M),Tt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Tt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(R,M,k){const K=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),qt(r.TEXTURE_CUBE_MAP,M.depthTexture);const Nt=s.convert(M.depthTexture.format),et=s.convert(M.depthTexture.type);let rt;M.depthTexture.format===tn?rt=r.DEPTH_COMPONENT24:M.depthTexture.format===Dn&&(rt=r.DEPTH24_STENCIL8);for(let St=0;St<6;St++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,rt,M.width,M.height,0,Nt,et,null)}}else X(M.depthTexture,0);const Y=Z.__webglTexture,Et=D(M),ot=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,Tt=M.depthTexture.format===Dn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===tn)Ne(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Tt,ot,Y,0,Et):r.framebufferTexture2D(r.FRAMEBUFFER,Tt,ot,Y,0);else if(M.depthTexture.format===Dn)Ne(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Tt,ot,Y,0,Et):r.framebufferTexture2D(r.FRAMEBUFFER,Tt,ot,Y,0);else throw new Error("Unknown depthTexture format")}function ne(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let K=0;K<6;K++)bt(M.__webglFramebuffer[K],R,K);else{const K=R.texture.mipmaps;K&&K.length>0?bt(M.__webglFramebuffer[0],R,0):bt(M.__webglFramebuffer,R,0)}else if(k){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=r.createRenderbuffer(),Bt(M.__webglDepthbuffer[K],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Bt(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(R,M,k){const K=i.get(R);M!==void 0&&vt(K.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&ne(R)}function Qt(R){const M=R.texture,k=i.get(R),K=i.get(M);R.addEventListener("dispose",C);const Z=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Et=Z.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=M.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let Tt=0;Tt<M.mipmaps.length;Tt++)k.__webglFramebuffer[ot][Tt]=r.createFramebuffer()}else k.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)k.__webglFramebuffer[ot]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Et)for(let ot=0,Tt=Z.length;ot<Tt;ot++){const Nt=i.get(Z[ot]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Ne(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const Tt=Z[ot];k.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ot]);const Nt=s.convert(Tt.format,Tt.colorSpace),et=s.convert(Tt.type),rt=v(Tt.internalFormat,Nt,et,Tt.colorSpace,R.isXRRenderTarget===!0),St=D(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,St,rt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,k.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Bt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),qt(r.TEXTURE_CUBE_MAP,M);for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0)for(let Tt=0;Tt<M.mipmaps.length;Tt++)vt(k.__webglFramebuffer[ot][Tt],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt);else vt(k.__webglFramebuffer[ot],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(M)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ot=0,Tt=Z.length;ot<Tt;ot++){const Nt=Z[ot],et=i.get(Nt);let rt=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,et.__webglTexture),qt(rt,Nt),vt(k.__webglFramebuffer,R,Nt,r.COLOR_ATTACHMENT0+ot,rt,0),m(Nt)&&p(rt)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),qt(ot,M),M.mipmaps&&M.mipmaps.length>0)for(let Tt=0;Tt<M.mipmaps.length;Tt++)vt(k.__webglFramebuffer[Tt],R,M,r.COLOR_ATTACHMENT0,ot,Tt);else vt(k.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,ot,0);m(M)&&p(ot),e.unbindTexture()}R.depthBuffer&&ne(R)}function le(R){const M=R.textures;for(let k=0,K=M.length;k<K;k++){const Z=M[k];if(m(Z)){const Y=x(R),Et=i.get(Z).__webglTexture;e.bindTexture(Y,Et),p(Y),e.unbindTexture()}}}const _e=[],Vt=[];function ke(R){if(R.samples>0){if(Ne(R)===!1){const M=R.textures,k=R.width,K=R.height;let Z=r.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=i.get(R),ot=M.length>1;if(ot)for(let Nt=0;Nt<M.length;Nt++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Tt=R.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Nt=0;Nt<M.length;Nt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[Nt]);const et=i.get(M[Nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,k,K,0,0,k,K,Z,r.NEAREST),c===!0&&(_e.length=0,Vt.length=0,_e.push(r.COLOR_ATTACHMENT0+Nt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(_e.push(Y),Vt.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Vt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let Nt=0;Nt<M.length;Nt++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,Et.__webglColorRenderbuffer[Nt]);const et=i.get(M[Nt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,et,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function D(R){return Math.min(n.maxSamples,R.samples)}function Ne(R){const M=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function oe(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ve(R,M){const k=R.colorSpace,K=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==je&&k!==dn&&(Zt.getTransfer(k)===de?(K!==hi||Z!==li)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",k)),M}function wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=J,this.rebindTextures=Ge,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Cx(r,t){function e(i,n=dn){let s;const o=Zt.getTransfer(n);if(i===li)return r.UNSIGNED_BYTE;if(i===wc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Ac)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Hh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Vh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===zh)return r.BYTE;if(i===Gh)return r.SHORT;if(i===eo)return r.UNSIGNED_SHORT;if(i===Tc)return r.INT;if(i===Bi)return r.UNSIGNED_INT;if(i===gi)return r.FLOAT;if(i===ui)return r.HALF_FLOAT;if(i===Wh)return r.ALPHA;if(i===Xh)return r.RGB;if(i===hi)return r.RGBA;if(i===tn)return r.DEPTH_COMPONENT;if(i===Dn)return r.DEPTH_STENCIL;if(i===Ec)return r.RED;if(i===Cc)return r.RED_INTEGER;if(i===ds)return r.RG;if(i===Rc)return r.RG_INTEGER;if(i===Pc)return r.RGBA_INTEGER;if(i===sa||i===oa||i===aa||i===ra)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dr||i===Lr||i===kr||i===Nr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Or||i===Ur||i===Br||i===Fr||i===zr||i===Gr||i===Hr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Or||i===Ur)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Br)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fr)return s.COMPRESSED_R11_EAC;if(i===zr)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Gr)return s.COMPRESSED_RG11_EAC;if(i===Hr)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vr||i===Wr||i===Xr||i===qr||i===Yr||i===Kr||i===jr||i===$r||i===Zr||i===Jr||i===Qr||i===tc||i===ec||i===ic)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vr)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wr)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xr)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qr)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yr)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kr)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jr)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$r)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zr)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jr)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qr)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nc||i===sc||i===oc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===nc)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===rc||i===cc||i===lc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const Rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Px=`
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

}`;class Ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new du(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ve({vertexShader:Rx,fragmentShader:Px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new F(new We(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dx extends On{constructor(t,e){super();const i=this;let n=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ix,p={},x=e.getContextAttributes();let v=null,y=null;const w=[],E=[],C=new nt;let I=null;const S=new Qe;S.viewport=new be;const T=new Qe;T.viewport=new be;const P=[S,T],O=new Pp;let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=w[j];return Q===void 0&&(Q=new Ja,w[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=w[j];return Q===void 0&&(Q=new Ja,w[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=w[j];return Q===void 0&&(Q=new Ja,w[j]=Q),Q.getHandSpace()};function X(j){const Q=E.indexOf(j.inputSource);if(Q===-1)return;const vt=w[Q];vt!==void 0&&(vt.update(j.inputSource,j.frame,l||o),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",V);for(let j=0;j<w.length;j++){const Q=E[j];Q!==null&&(E[j]=null,w[j].disconnect(Q))}U=null,W=null,m.reset();for(const j in p)delete p[j];t.setRenderTarget(v),f=null,d=null,u=null,n=null,y=null,Se.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(v=t.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",q),n.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Bt=null,bt=null;x.depth&&(bt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=x.stencil?Dn:tn,Bt=x.stencil?io:Bi);const ne={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(ne),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ei(d.textureWidth,d.textureHeight,{format:hi,type:li,depthTexture:new ro(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const vt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,vt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ei(f.framebufferWidth,f.framebufferHeight,{format:hi,type:li,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await n.requestReferenceSpace(a),Se.setContext(n),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(j){for(let Q=0;Q<j.removed.length;Q++){const vt=j.removed[Q],Bt=E.indexOf(vt);Bt>=0&&(E[Bt]=null,w[Bt].disconnect(vt))}for(let Q=0;Q<j.added.length;Q++){const vt=j.added[Q];let Bt=E.indexOf(vt);if(Bt===-1){for(let ne=0;ne<w.length;ne++)if(ne>=E.length){E.push(vt),Bt=ne;break}else if(E[ne]===null){E[ne]=vt,Bt=ne;break}if(Bt===-1)break}const bt=w[Bt];bt&&bt.connect(vt)}}const J=new b,ft=new b;function lt(j,Q,vt){J.setFromMatrixPosition(Q.matrixWorld),ft.setFromMatrixPosition(vt.matrixWorld);const Bt=J.distanceTo(ft),bt=Q.projectionMatrix.elements,ne=vt.projectionMatrix.elements,Ge=bt[14]/(bt[10]-1),Qt=bt[14]/(bt[10]+1),le=(bt[9]+1)/bt[5],_e=(bt[9]-1)/bt[5],Vt=(bt[8]-1)/bt[0],ke=(ne[8]+1)/ne[0],D=Ge*Vt,Ne=Ge*ke,oe=Bt/(-Vt+ke),ve=oe*-Vt;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ve),j.translateZ(oe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),bt[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const wt=Ge+oe,R=Qt+oe,M=D-ve,k=Ne+(Bt-ve),K=le*Qt/R*wt,Z=_e*Qt/R*wt;j.projectionMatrix.makePerspective(M,k,K,Z,wt,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function mt(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let Q=j.near,vt=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),O.near=T.near=S.near=Q,O.far=T.far=S.far=vt,(U!==O.near||W!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),U=O.near,W=O.far),O.layers.mask=j.layers.mask|6,S.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;const Bt=j.parent,bt=O.cameras;mt(O,Bt);for(let ne=0;ne<bt.length;ne++)mt(bt[ne],Bt);bt.length===2?lt(O,S,T):O.projectionMatrix.copy(S.projectionMatrix),qt(j,O,Bt)};function qt(j,Q,vt){vt===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return p[j]};let Ht=null;function Ae(j,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Bt=!1;vt.length!==O.cameras.length&&(O.cameras.length=0,Bt=!0);for(let Qt=0;Qt<vt.length;Qt++){const le=vt[Qt];let _e=null;if(f!==null)_e=f.getViewport(le);else{const ke=u.getViewSubImage(d,le);_e=ke.viewport,Qt===0&&(t.setRenderTargetTextures(y,ke.colorTexture,ke.depthStencilTexture),t.setRenderTarget(y))}let Vt=P[Qt];Vt===void 0&&(Vt=new Qe,Vt.layers.enable(Qt),Vt.viewport=new be,P[Qt]=Vt),Vt.matrix.fromArray(le.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(le.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(_e.x,_e.y,_e.width,_e.height),Qt===0&&(O.matrix.copy(Vt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Bt===!0&&O.cameras.push(Vt)}const bt=n.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const Qt=u.getDepthInformation(vt[0]);Qt&&Qt.isValid&&Qt.texture&&m.init(Qt,n.renderState)}if(bt&&bt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let Qt=0;Qt<vt.length;Qt++){const le=vt[Qt].camera;if(le){let _e=p[le];_e||(_e=new du,p[le]=_e);const Vt=u.getCameraImage(le);_e.sourceTexture=Vt}}}}for(let vt=0;vt<w.length;vt++){const Bt=E[vt],bt=w[vt];Bt!==null&&bt!==void 0&&bt.update(Bt,Q,l||o)}Ht&&Ht(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Se=new Cu;Se.setAnimationLoop(Ae),this.setAnimationLoop=function(j){Ht=j},this.dispose=function(){}}}const Tn=new Fi,Lx=new Ot;function kx(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,iu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ti&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ti&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,Tn.copy(y),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),m.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(Tn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ti&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Nx(r,t,e,i){let n={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function l(x,v){let y=n[x.id];y===void 0&&(g(x),y=h(x),n[x.id]=y,x.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(x,w);const E=t.render.frame;s[x.id]!==E&&(d(x),s[x.id]=E)}function h(x){const v=u();x.__bindingPointIndex=v;const y=r.createBuffer(),w=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,w,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=n[x.id],y=x.uniforms,w=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,C=y.length;E<C;E++){const I=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,T=I.length;S<T;S++){const P=I[S];if(f(P,E,S,w)===!0){const O=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let X=0;X<U.length;X++){const q=U[X],V=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,O+W,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,W),W+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,y,w){const E=x.value,C=v+"_"+y;if(w[C]===void 0)return typeof E=="number"||typeof E=="boolean"?w[C]=E:w[C]=E.clone(),!0;{const I=w[C];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return w[C]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(x){const v=x.uniforms;let y=0;const w=16;for(let C=0,I=v.length;C<I;C++){const S=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,P=S.length;T<P;T++){const O=S[T],U=Array.isArray(O.value)?O.value:[O.value];for(let W=0,X=U.length;W<X;W++){const q=U[W],V=_(q),J=y%w,ft=J%V.boundary,lt=J+ft;y+=ft,lt!==0&&w-lt<V.storage&&(y+=w-lt),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=V.storage}}}const E=y%w;return E>0&&(y+=w-E),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pt("WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function p(){for(const x in n)r.deleteBuffer(n[x]);o=[],n={},s={}}return{bind:c,update:l,dispose:p}}const Ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function Ux(){return Ei===null&&(Ei=new Uc(Ox,16,16,ds,ui),Ei.name="DFG_LUT",Ei.minFilter=Le,Ei.magFilter=Le,Ei.wrapS=Di,Ei.wrapT=Di,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class Bx{constructor(t={}){const{canvas:e=Dd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=li}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=f,m=new Set([Pc,Rc,Cc]),p=new Set([li,Bi,eo,io,wc,Ac]),x=new Uint32Array(4),v=new Int32Array(4);let y=null,w=null;const E=[],C=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=Ee;let P=0,O=0,U=null,W=-1,X=null;const q=new be,V=new be;let J=null;const ft=new Mt(0);let lt=0,mt=e.width,qt=e.height,Ht=1,Ae=null,Se=null;const j=new be(0,0,mt,qt),Q=new be(0,0,mt,qt);let vt=!1;const Bt=new Fc;let bt=!1,ne=!1;const Ge=new Ot,Qt=new b,le=new be,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ke(){return U===null?Ht:1}let D=i;function Ne(A,N){return e.getContext(A,N)}try{const A={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",he,!1),D===null){const N="webgl2";if(D=Ne(N,A),D===null)throw Ne(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Lt("WebGLRenderer: "+A.message),A}let oe,ve,wt,R,M,k,K,Z,Y,Et,ot,Tt,Nt,et,rt,St,At,at,Wt,L,dt,it,gt,tt;function $(){oe=new U0(D),oe.init(),it=new Cx(D,oe),ve=new C0(D,oe,t,it),wt=new Ax(D,oe),ve.reversedDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),R=new z0(D),M=new ux,k=new Ex(D,oe,wt,M,ve,it,R),K=new P0(S),Z=new O0(S),Y=new Wp(D),gt=new A0(D,Y),Et=new B0(D,Y,R,gt),ot=new H0(D,Et,Y,R),Wt=new G0(D,ve,k),St=new R0(M),Tt=new hx(S,K,Z,oe,ve,gt,St),Nt=new kx(S,M),et=new fx,rt=new vx(oe),at=new w0(S,K,Z,wt,ot,g,c),At=new Tx(S,ot,ve),tt=new Nx(D,R,ve,wt),L=new E0(D,oe,R),dt=new F0(D,oe,R),R.programs=Tt.programs,S.capabilities=ve,S.extensions=oe,S.properties=M,S.renderLists=et,S.shadowMap=At,S.state=wt,S.info=R}$(),_!==li&&(I=new W0(_,e.width,e.height,n,s));const st=new Dx(S,D);this.xr=st,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ht},this.setPixelRatio=function(A){A!==void 0&&(Ht=A,this.setSize(mt,qt,!1))},this.getSize=function(A){return A.set(mt,qt)},this.setSize=function(A,N,H=!0){if(st.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=A,qt=N,e.width=Math.floor(A*Ht),e.height=Math.floor(N*Ht),H===!0&&(e.style.width=A+"px",e.style.height=N+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(mt*Ht,qt*Ht).floor()},this.setDrawingBufferSize=function(A,N,H){mt=A,qt=N,Ht=H,e.width=Math.floor(A*H),e.height=Math.floor(N*H),this.setViewport(0,0,A,N)},this.setEffects=function(A){if(_===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let N=0;N<A.length;N++)if(A[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(q)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,N,H,G){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,N,H,G),wt.viewport(q.copy(j).multiplyScalar(Ht).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,N,H,G){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,N,H,G),wt.scissor(V.copy(Q).multiplyScalar(Ht).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(A){wt.setScissorTest(vt=A)},this.setOpaqueSort=function(A){Ae=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,N=!0,H=!0){let G=0;if(A){let B=!1;if(U!==null){const ct=U.texture.format;B=m.has(ct)}if(B){const ct=U.texture.type,xt=p.has(ct),ut=at.getClearColor(),yt=at.getClearAlpha(),Ct=ut.r,kt=ut.g,It=ut.b;xt?(x[0]=Ct,x[1]=kt,x[2]=It,x[3]=yt,D.clearBufferuiv(D.COLOR,0,x)):(v[0]=Ct,v[1]=kt,v[2]=It,v[3]=yt,D.clearBufferiv(D.COLOR,0,v))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",he,!1),at.dispose(),et.dispose(),rt.dispose(),M.dispose(),K.dispose(),Z.dispose(),ot.dispose(),gt.dispose(),tt.dispose(),Tt.dispose(),st.dispose(),st.removeEventListener("sessionstart",jc),st.removeEventListener("sessionend",$c),_n.stop()};function Ut(A){A.preventDefault(),pa("WebGLRenderer: Context Lost."),T=!0}function ye(){pa("WebGLRenderer: Context Restored."),T=!1;const A=R.autoReset,N=At.enabled,H=At.autoUpdate,G=At.needsUpdate,B=At.type;$(),R.autoReset=A,At.enabled=N,At.autoUpdate=H,At.needsUpdate=G,At.type=B}function he(A){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ai(A){const N=A.target;N.removeEventListener("dispose",Ai),Vi(N)}function Vi(A){Vu(A),M.remove(A)}function Vu(A){const N=M.get(A).programs;N!==void 0&&(N.forEach(function(H){Tt.releaseProgram(H)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,H,G,B,ct){N===null&&(N=_e);const xt=B.isMesh&&B.matrixWorld.determinant()<0,ut=Xu(A,N,H,G,B);wt.setMaterial(G,xt);let yt=H.index,Ct=1;if(G.wireframe===!0){if(yt=Et.getWireframeAttribute(H),yt===void 0)return;Ct=2}const kt=H.drawRange,It=H.attributes.position;let Yt=kt.start*Ct,me=(kt.start+kt.count)*Ct;ct!==null&&(Yt=Math.max(Yt,ct.start*Ct),me=Math.min(me,(ct.start+ct.count)*Ct)),yt!==null?(Yt=Math.max(Yt,0),me=Math.min(me,yt.count)):It!=null&&(Yt=Math.max(Yt,0),me=Math.min(me,It.count));const Re=me-Yt;if(Re<0||Re===1/0)return;gt.setup(B,G,ut,H,yt);let Pe,xe=L;if(yt!==null&&(Pe=Y.get(yt),xe=dt,xe.setIndex(Pe)),B.isMesh)G.wireframe===!0?(wt.setLineWidth(G.wireframeLinewidth*ke()),xe.setMode(D.LINES)):xe.setMode(D.TRIANGLES);else if(B.isLine){let Dt=G.linewidth;Dt===void 0&&(Dt=1),wt.setLineWidth(Dt*ke()),B.isLineSegments?xe.setMode(D.LINES):B.isLineLoop?xe.setMode(D.LINE_LOOP):xe.setMode(D.LINE_STRIP)}else B.isPoints?xe.setMode(D.POINTS):B.isSprite&&xe.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ao("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))xe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Dt=B._multiDrawStarts,ue=B._multiDrawCounts,se=B._multiDrawCount,oi=yt?Y.get(yt).bytesPerElement:1,Bn=M.get(G).currentProgram.getUniforms();for(let ai=0;ai<se;ai++)Bn.setValue(D,"_gl_DrawID",ai),xe.render(Dt[ai]/oi,ue[ai])}else if(B.isInstancedMesh)xe.renderInstances(Yt,Re,B.count);else if(H.isInstancedBufferGeometry){const Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ue=Math.min(H.instanceCount,Dt);xe.renderInstances(Yt,Re,ue)}else xe.render(Yt,Re)};function Kc(A,N,H){A.transparent===!0&&A.side===pe&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Mo(A,N,H),A.side=Qi,A.needsUpdate=!0,Mo(A,N,H),A.side=pe):Mo(A,N,H)}this.compile=function(A,N,H=null){H===null&&(H=A),w=rt.get(H),w.init(N),C.push(w),H.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),A!==H&&A.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),w.setupLights();const G=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ct=B.material;if(ct)if(Array.isArray(ct))for(let xt=0;xt<ct.length;xt++){const ut=ct[xt];Kc(ut,H,B),G.add(ut)}else Kc(ct,H,B),G.add(ct)}),w=C.pop(),G},this.compileAsync=function(A,N,H=null){const G=this.compile(A,N,H);return new Promise(B=>{function ct(){if(G.forEach(function(xt){M.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){B(A);return}setTimeout(ct,10)}oe.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ca=null;function Wu(A){Ca&&Ca(A)}function jc(){_n.stop()}function $c(){_n.start()}const _n=new Cu;_n.setAnimationLoop(Wu),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(A){Ca=A,st.setAnimationLoop(A),A===null?_n.stop():_n.start()},st.addEventListener("sessionstart",jc),st.addEventListener("sessionend",$c),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const H=st.enabled===!0&&st.isPresenting===!0,G=I!==null&&(U===null||H)&&I.begin(S,U);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(N),N=st.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,N,U),w=rt.get(A,C.length),w.init(N),C.push(w),Ge.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Bt.setFromProjectionMatrix(Ge,Li,N.reversedDepth),ne=this.localClippingEnabled,bt=St.init(this.clippingPlanes,ne),y=et.get(A,E.length),y.init(),E.push(y),st.enabled===!0&&st.isPresenting===!0){const xt=S.xr.getDepthSensingMesh();xt!==null&&Ra(xt,N,-1/0,S.sortObjects)}Ra(A,N,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Ae,Se),Vt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Vt&&at.addToRenderList(y,A),this.info.render.frame++,bt===!0&&St.beginShadows();const B=w.state.shadowsArray;if(At.render(B,A,N),bt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&I.hasRenderPass())===!1){const xt=y.opaque,ut=y.transmissive;if(w.setupLights(),N.isArrayCamera){const yt=N.cameras;if(ut.length>0)for(let Ct=0,kt=yt.length;Ct<kt;Ct++){const It=yt[Ct];Jc(xt,ut,A,It)}Vt&&at.render(A);for(let Ct=0,kt=yt.length;Ct<kt;Ct++){const It=yt[Ct];Zc(y,A,It,It.viewport)}}else ut.length>0&&Jc(xt,ut,A,N),Vt&&at.render(A),Zc(y,A,N)}U!==null&&O===0&&(k.updateMultisampleRenderTarget(U),k.updateRenderTargetMipmap(U)),G&&I.end(S),A.isScene===!0&&A.onAfterRender(S,A,N),gt.resetDefaultState(),W=-1,X=null,C.pop(),C.length>0?(w=C[C.length-1],bt===!0&&St.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function Ra(A,N,H,G){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Bt.intersectsSprite(A)){G&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ge);const xt=ot.update(A),ut=A.material;ut.visible&&y.push(A,xt,ut,H,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Bt.intersectsObject(A))){const xt=ot.update(A),ut=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),le.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),le.copy(xt.boundingSphere.center)),le.applyMatrix4(A.matrixWorld).applyMatrix4(Ge)),Array.isArray(ut)){const yt=xt.groups;for(let Ct=0,kt=yt.length;Ct<kt;Ct++){const It=yt[Ct],Yt=ut[It.materialIndex];Yt&&Yt.visible&&y.push(A,xt,Yt,H,le.z,It)}}else ut.visible&&y.push(A,xt,ut,H,le.z,null)}}const ct=A.children;for(let xt=0,ut=ct.length;xt<ut;xt++)Ra(ct[xt],N,H,G)}function Zc(A,N,H,G){const{opaque:B,transmissive:ct,transparent:xt}=A;w.setupLightsView(H),bt===!0&&St.setGlobalState(S.clippingPlanes,H),G&&wt.viewport(q.copy(G)),B.length>0&&yo(B,N,H),ct.length>0&&yo(ct,N,H),xt.length>0&&yo(xt,N,H),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Jc(A,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Yt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new ei(1,1,{generateMipmaps:!0,type:Yt?ui:li,minFilter:$i,samples:ve.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const ct=w.state.transmissionRenderTarget[G.id],xt=G.viewport||q;ct.setSize(xt.z*S.transmissionResolutionScale,xt.w*S.transmissionResolutionScale);const ut=S.getRenderTarget(),yt=S.getActiveCubeFace(),Ct=S.getActiveMipmapLevel();S.setRenderTarget(ct),S.getClearColor(ft),lt=S.getClearAlpha(),lt<1&&S.setClearColor(16777215,.5),S.clear(),Vt&&at.render(H);const kt=S.toneMapping;S.toneMapping=Ni;const It=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),bt===!0&&St.setGlobalState(S.clippingPlanes,G),yo(A,H,G),k.updateMultisampleRenderTarget(ct),k.updateRenderTargetMipmap(ct),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let me=0,Re=N.length;me<Re;me++){const Pe=N[me],{object:xe,geometry:Dt,material:ue,group:se}=Pe;if(ue.side===pe&&xe.layers.test(G.layers)){const oi=ue.side;ue.side=ti,ue.needsUpdate=!0,Qc(xe,H,G,Dt,ue,se),ue.side=oi,ue.needsUpdate=!0,Yt=!0}}Yt===!0&&(k.updateMultisampleRenderTarget(ct),k.updateRenderTargetMipmap(ct))}S.setRenderTarget(ut,yt,Ct),S.setClearColor(ft,lt),It!==void 0&&(G.viewport=It),S.toneMapping=kt}function yo(A,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ct=A.length;B<ct;B++){const xt=A[B],{object:ut,geometry:yt,group:Ct}=xt;let kt=xt.material;kt.allowOverride===!0&&G!==null&&(kt=G),ut.layers.test(H.layers)&&Qc(ut,N,H,yt,kt,Ct)}}function Qc(A,N,H,G,B,ct){A.onBeforeRender(S,N,H,G,B,ct),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(S,N,H,G,A,ct),B.transparent===!0&&B.side===pe&&B.forceSinglePass===!1?(B.side=ti,B.needsUpdate=!0,S.renderBufferDirect(H,N,G,B,A,ct),B.side=Qi,B.needsUpdate=!0,S.renderBufferDirect(H,N,G,B,A,ct),B.side=pe):S.renderBufferDirect(H,N,G,B,A,ct),A.onAfterRender(S,N,H,G,B,ct)}function Mo(A,N,H){N.isScene!==!0&&(N=_e);const G=M.get(A),B=w.state.lights,ct=w.state.shadowsArray,xt=B.state.version,ut=Tt.getParameters(A,B.state,ct,N,H),yt=Tt.getProgramCacheKey(ut);let Ct=G.programs;G.environment=A.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(A.isMeshStandardMaterial?Z:K).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Ct===void 0&&(A.addEventListener("dispose",Ai),Ct=new Map,G.programs=Ct);let kt=Ct.get(yt);if(kt!==void 0){if(G.currentProgram===kt&&G.lightsStateVersion===xt)return el(A,ut),kt}else ut.uniforms=Tt.getUniforms(A),A.onBeforeCompile(ut,S),kt=Tt.acquireProgram(ut,yt),Ct.set(yt,kt),G.uniforms=ut.uniforms;const It=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=St.uniform),el(A,ut),G.needsLights=Yu(A),G.lightsStateVersion=xt,G.needsLights&&(It.ambientLightColor.value=B.state.ambient,It.lightProbe.value=B.state.probe,It.directionalLights.value=B.state.directional,It.directionalLightShadows.value=B.state.directionalShadow,It.spotLights.value=B.state.spot,It.spotLightShadows.value=B.state.spotShadow,It.rectAreaLights.value=B.state.rectArea,It.ltc_1.value=B.state.rectAreaLTC1,It.ltc_2.value=B.state.rectAreaLTC2,It.pointLights.value=B.state.point,It.pointLightShadows.value=B.state.pointShadow,It.hemisphereLights.value=B.state.hemi,It.directionalShadowMap.value=B.state.directionalShadowMap,It.directionalShadowMatrix.value=B.state.directionalShadowMatrix,It.spotShadowMap.value=B.state.spotShadowMap,It.spotLightMatrix.value=B.state.spotLightMatrix,It.spotLightMap.value=B.state.spotLightMap,It.pointShadowMap.value=B.state.pointShadowMap,It.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=kt,G.uniformsList=null,kt}function tl(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=ca.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function el(A,N){const H=M.get(A);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Xu(A,N,H,G,B){N.isScene!==!0&&(N=_e),k.resetTextureUnits();const ct=N.fog,xt=G.isMeshStandardMaterial?N.environment:null,ut=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:je,yt=(G.isMeshStandardMaterial?Z:K).get(G.envMap||xt),Ct=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!H.morphAttributes.position,Yt=!!H.morphAttributes.normal,me=!!H.morphAttributes.color;let Re=Ni;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Re=S.toneMapping);const Pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xe=Pe!==void 0?Pe.length:0,Dt=M.get(G),ue=w.state.lights;if(bt===!0&&(ne===!0||A!==X)){const $e=A===X&&G.id===W;St.setState(G,A,$e)}let se=!1;G.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ue.state.version||Dt.outputColorSpace!==ut||B.isBatchedMesh&&Dt.batching===!1||!B.isBatchedMesh&&Dt.batching===!0||B.isBatchedMesh&&Dt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Dt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Dt.instancing===!1||!B.isInstancedMesh&&Dt.instancing===!0||B.isSkinnedMesh&&Dt.skinning===!1||!B.isSkinnedMesh&&Dt.skinning===!0||B.isInstancedMesh&&Dt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Dt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Dt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Dt.instancingMorph===!1&&B.morphTexture!==null||Dt.envMap!==yt||G.fog===!0&&Dt.fog!==ct||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==St.numPlanes||Dt.numIntersection!==St.numIntersection)||Dt.vertexAlphas!==Ct||Dt.vertexTangents!==kt||Dt.morphTargets!==It||Dt.morphNormals!==Yt||Dt.morphColors!==me||Dt.toneMapping!==Re||Dt.morphTargetsCount!==xe)&&(se=!0):(se=!0,Dt.__version=G.version);let oi=Dt.currentProgram;se===!0&&(oi=Mo(G,N,B));let Bn=!1,ai=!1,Cs=!1;const Me=oi.getUniforms(),ii=Dt.uniforms;if(wt.useProgram(oi.program)&&(Bn=!0,ai=!0,Cs=!0),G.id!==W&&(W=G.id,ai=!0),Bn||X!==A){wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Me.setValue(D,"projectionMatrix",A.projectionMatrix),Me.setValue(D,"viewMatrix",A.matrixWorldInverse);const ni=Me.map.cameraPosition;ni!==void 0&&ni.setValue(D,Qt.setFromMatrixPosition(A.matrixWorld)),ve.logarithmicDepthBuffer&&Me.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Me.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,ai=!0,Cs=!0)}if(Dt.needsLights&&(ue.state.directionalShadowMap.length>0&&Me.setValue(D,"directionalShadowMap",ue.state.directionalShadowMap,k),ue.state.spotShadowMap.length>0&&Me.setValue(D,"spotShadowMap",ue.state.spotShadowMap,k),ue.state.pointShadowMap.length>0&&Me.setValue(D,"pointShadowMap",ue.state.pointShadowMap,k)),B.isSkinnedMesh){Me.setOptional(D,B,"bindMatrix"),Me.setOptional(D,B,"bindMatrixInverse");const $e=B.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Me.setValue(D,"boneTexture",$e.boneTexture,k))}B.isBatchedMesh&&(Me.setOptional(D,B,"batchingTexture"),Me.setValue(D,"batchingTexture",B._matricesTexture,k),Me.setOptional(D,B,"batchingIdTexture"),Me.setValue(D,"batchingIdTexture",B._indirectTexture,k),Me.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Me.setValue(D,"batchingColorTexture",B._colorsTexture,k));const di=H.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&Wt.update(B,H,oi),(ai||Dt.receiveShadow!==B.receiveShadow)&&(Dt.receiveShadow=B.receiveShadow,Me.setValue(D,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ii.envMap.value=yt,ii.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(ii.envMapIntensity.value=N.environmentIntensity),ii.dfgLUT!==void 0&&(ii.dfgLUT.value=Ux()),ai&&(Me.setValue(D,"toneMappingExposure",S.toneMappingExposure),Dt.needsLights&&qu(ii,Cs),ct&&G.fog===!0&&Nt.refreshFogUniforms(ii,ct),Nt.refreshMaterialUniforms(ii,G,Ht,qt,w.state.transmissionRenderTarget[A.id]),ca.upload(D,tl(Dt),ii,k)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ca.upload(D,tl(Dt),ii,k),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Me.setValue(D,"center",B.center),Me.setValue(D,"modelViewMatrix",B.modelViewMatrix),Me.setValue(D,"normalMatrix",B.normalMatrix),Me.setValue(D,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const $e=G.uniformsGroups;for(let ni=0,Pa=$e.length;ni<Pa;ni++){const xn=$e[ni];tt.update(xn,oi),tt.bind(xn,oi)}}return oi}function qu(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function Yu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,N,H){const G=M.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=N,M.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,N){const H=M.get(A);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Ku=D.createFramebuffer();this.setRenderTarget=function(A,N=0,H=0){U=A,P=N,O=H;let G=null,B=!1,ct=!1;if(A){const ut=M.get(A);if(ut.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(D.FRAMEBUFFER,ut.__webglFramebuffer),q.copy(A.viewport),V.copy(A.scissor),J=A.scissorTest,wt.viewport(q),wt.scissor(V),wt.setScissorTest(J),W=-1;return}else if(ut.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(ut.__hasExternalTextures)k.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(ut.__boundDepthTexture!==kt){if(kt!==null&&M.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const yt=A.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ct=!0);const Ct=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[N])?G=Ct[N][H]:G=Ct[N],B=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?G=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?G=Ct[H]:G=Ct,q.copy(A.viewport),V.copy(A.scissor),J=A.scissorTest}else q.copy(j).multiplyScalar(Ht).floor(),V.copy(Q).multiplyScalar(Ht).floor(),J=vt;if(H!==0&&(G=Ku),wt.bindFramebuffer(D.FRAMEBUFFER,G)&&wt.drawBuffers(A,G),wt.viewport(q),wt.scissor(V),wt.setScissorTest(J),B){const ut=M.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ut.__webglTexture,H)}else if(ct){const ut=N;for(let yt=0;yt<A.textures.length;yt++){const Ct=M.get(A.textures[yt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+yt,Ct.__webglTexture,H,ut)}}else if(A!==null&&H!==0){const ut=M.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,H)}W=-1},this.readRenderTargetPixels=function(A,N,H,G,B,ct,xt,ut=0){if(!(A&&A.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt){wt.bindFramebuffer(D.FRAMEBUFFER,yt);try{const Ct=A.textures[ut],kt=Ct.format,It=Ct.type;if(!ve.textureFormatReadable(kt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(It)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-G&&H>=0&&H<=A.height-B&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut),D.readPixels(N,H,G,B,it.convert(kt),it.convert(It),ct))}finally{const Ct=U!==null?M.get(U).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,N,H,G,B,ct,xt,ut=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt)if(N>=0&&N<=A.width-G&&H>=0&&H<=A.height-B){wt.bindFramebuffer(D.FRAMEBUFFER,yt);const Ct=A.textures[ut],kt=Ct.format,It=Ct.type;if(!ve.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut),D.readPixels(N,H,G,B,it.convert(kt),it.convert(It),0);const me=U!==null?M.get(U).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,me);const Re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ld(D,Re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(Yt),D.deleteSync(Re),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,N=null,H=0){const G=Math.pow(2,-H),B=Math.floor(A.image.width*G),ct=Math.floor(A.image.height*G),xt=N!==null?N.x:0,ut=N!==null?N.y:0;k.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,xt,ut,B,ct),wt.unbindTexture()};const ju=D.createFramebuffer(),$u=D.createFramebuffer();this.copyTextureToTexture=function(A,N,H=null,G=null,B=0,ct=null){ct===null&&(B!==0?(ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=B,B=0):ct=0);let xt,ut,yt,Ct,kt,It,Yt,me,Re;const Pe=A.isCompressedTexture?A.mipmaps[ct]:A.image;if(H!==null)xt=H.max.x-H.min.x,ut=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,Ct=H.min.x,kt=H.min.y,It=H.isBox3?H.min.z:0;else{const di=Math.pow(2,-B);xt=Math.floor(Pe.width*di),ut=Math.floor(Pe.height*di),A.isDataArrayTexture?yt=Pe.depth:A.isData3DTexture?yt=Math.floor(Pe.depth*di):yt=1,Ct=0,kt=0,It=0}G!==null?(Yt=G.x,me=G.y,Re=G.z):(Yt=0,me=0,Re=0);const xe=it.convert(N.format),Dt=it.convert(N.type);let ue;N.isData3DTexture?(k.setTexture3D(N,0),ue=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(k.setTexture2DArray(N,0),ue=D.TEXTURE_2D_ARRAY):(k.setTexture2D(N,0),ue=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const se=D.getParameter(D.UNPACK_ROW_LENGTH),oi=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Bn=D.getParameter(D.UNPACK_SKIP_PIXELS),ai=D.getParameter(D.UNPACK_SKIP_ROWS),Cs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),D.pixelStorei(D.UNPACK_SKIP_ROWS,kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,It);const Me=A.isDataArrayTexture||A.isData3DTexture,ii=N.isDataArrayTexture||N.isData3DTexture;if(A.isDepthTexture){const di=M.get(A),$e=M.get(N),ni=M.get(di.__renderTarget),Pa=M.get($e.__renderTarget);wt.bindFramebuffer(D.READ_FRAMEBUFFER,ni.__webglFramebuffer),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Pa.__webglFramebuffer);for(let xn=0;xn<yt;xn++)Me&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(A).__webglTexture,B,It+xn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(N).__webglTexture,ct,Re+xn)),D.blitFramebuffer(Ct,kt,xt,ut,Yt,me,xt,ut,D.DEPTH_BUFFER_BIT,D.NEAREST);wt.bindFramebuffer(D.READ_FRAMEBUFFER,null),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||A.isRenderTargetTexture||M.has(A)){const di=M.get(A),$e=M.get(N);wt.bindFramebuffer(D.READ_FRAMEBUFFER,ju),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,$u);for(let ni=0;ni<yt;ni++)Me?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,di.__webglTexture,B,It+ni):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,di.__webglTexture,B),ii?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$e.__webglTexture,ct,Re+ni):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$e.__webglTexture,ct),B!==0?D.blitFramebuffer(Ct,kt,xt,ut,Yt,me,xt,ut,D.COLOR_BUFFER_BIT,D.NEAREST):ii?D.copyTexSubImage3D(ue,ct,Yt,me,Re+ni,Ct,kt,xt,ut):D.copyTexSubImage2D(ue,ct,Yt,me,Ct,kt,xt,ut);wt.bindFramebuffer(D.READ_FRAMEBUFFER,null),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ii?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(ue,ct,Yt,me,Re,xt,ut,yt,xe,Dt,Pe.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(ue,ct,Yt,me,Re,xt,ut,yt,xe,Pe.data):D.texSubImage3D(ue,ct,Yt,me,Re,xt,ut,yt,xe,Dt,Pe):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,Yt,me,xt,ut,xe,Dt,Pe.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,Yt,me,Pe.width,Pe.height,xe,Pe.data):D.texSubImage2D(D.TEXTURE_2D,ct,Yt,me,xt,ut,xe,Dt,Pe);D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oi),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ai),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Cs),ct===0&&N.generateMipmaps&&D.generateMipmap(ue),wt.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){P=0,O=0,U=null,wt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const la={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fx=new _o(-1,1,1,-1,0,1);class zx extends we{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const Gx=new zx;class Lu{constructor(t){this._mesh=new F(Gx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Fx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ku extends xo{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ma.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Lu(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mh extends xo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Hx extends xo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Vx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new nt);this._width=i.width,this._height=i.height,e=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ku(la),this.copyPass.material.blending=ki,this.clock=new Au}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Mh!==void 0&&(o instanceof Mh?i=!0:o instanceof Hx&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wx extends xo{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Mt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}}const Xx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ss extends xo{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new Mt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ei(s,o,{type:ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new ei(s,o,{type:ui});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new ei(s,o,{type:ui});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=Xx;this.highPassUniforms=ma.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ma.clone(la.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader,premultipliedAlpha:!0,blending:Ri,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Mt,this._oldClearAlpha=1,this._basic=new Gt,this._fsQuad=new Lu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new nt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ss.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ss.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Ss.BlurDirectionX=new nt(1,0);Ss.BlurDirectionY=new nt(0,1);function qx(r){if(r<=1)return 0;let t=0;for(let e=2;e<=r;e++)t+=Math.floor(75*Math.pow(1.5,e-2));return t}const Nu=[];for(let r=0;r<=20;r++)Nu[r]=qx(r);const Yx={dash:{name:"Dash",description:"Quick dodge in any direction",unlockLevel:3,baseCooldown:3,hotkey:"R",staminaCost:15},heavyCharge:{name:"Heavy Charge",description:"Hold for a powerful charged strike",unlockLevel:5,baseCooldown:0,hotkey:"HOLD LMB",staminaCost:35},parry:{name:"Parry",description:"Perfect timed block for riposte",unlockLevel:8,baseCooldown:1.5,hotkey:"F",staminaCost:10},warCry:{name:"War Cry",description:"Damage buff, scares weak enemies",unlockLevel:12,baseCooldown:20,hotkey:"G",staminaCost:25}};class Kx{constructor(){this.currentXP=0,this.currentLevel=1,this.maxLevel=20,this.xpThresholds=Nu,this.statPointsPerLevel=3,this.stats={vigor:0,endurance:0,strength:0,dexterity:0,mind:0},this.spentStatPoints=0,this.abilities=Yx,this.abilityCooldowns={dash:0,heavyCharge:0,parry:0,warCry:0},this.unlockedAbilities=new Set,this.warCryActive=!1,this.warCryDuration=8,this.warCryTimer=0,this.warCryDamageBonus=.5,this.mindStat=0,this.floatingTexts=[],this.remnant=0,this.heldRemnant=0,this.deathCount=0,this.deathLessons={},this.infusions={strength:0,vitality:0,stamina:0,spirit:0},this.MAX_TOTAL_DEPTH=20,this.MAX_TRACK_DEPTH=5,this.bonfirePosition=new b(0,0,5),this.maxHealth=100,this.maxStamina=100,this.maxPosture=100,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.isDead=!1,this.checkpoint=new b(0,0,5),this.deathScreenEl=document.getElementById("death-screen"),this.player=null,this.enemyManager=null,this.bloodstain=null,this.bloodstainMesh=null,this.staminaRegenDelay=.5,this.staminaRegenRate=25,this.staminaRegenTimer=0,this.postureRegenDelay=1,this.postureRegenRate=15,this.postureRegenTimer=0,this.audioManager=null,this.hitstopActive=!1,this.hitstopDuration=0,this.hitstopTimer=0,this.hud=null,this.cameraController=null,this._loadProgression()}_loadProgression(){try{const t=localStorage.getItem("ashen_progression");if(t){const e=JSON.parse(t);this.currentXP=e.currentXP||0,this.currentLevel=e.currentLevel||1,e.stats&&(this.stats={vigor:e.stats.vigor||0,endurance:e.stats.endurance||0,strength:e.stats.strength||0,dexterity:e.stats.dexterity||0,mind:e.stats.mind||0}),this.spentStatPoints=e.spentStatPoints||0,this._applyStatBonuses(),console.log(`[GameManager] Loaded progression: Level ${this.currentLevel}, XP ${this.currentXP}, Stats: ${JSON.stringify(this.stats)}`)}}catch(t){console.warn("[GameManager] Failed to load progression:",t)}}_saveProgression(){try{const t={currentXP:this.currentXP,currentLevel:this.currentLevel,stats:this.stats,spentStatPoints:this.spentStatPoints};localStorage.setItem("ashen_progression",JSON.stringify(t))}catch(t){console.warn("[GameManager] Failed to save progression:",t)}}getTotalStatPoints(){return Math.max(0,(this.currentLevel-1)*this.statPointsPerLevel)}getAvailableStatPoints(){return this.getTotalStatPoints()-this.spentStatPoints}spendStatPoint(t){return this.getAvailableStatPoints()<=0?(console.warn("[GameManager] No stat points available"),!1):this.stats.hasOwnProperty(t)?(this.stats[t]++,this.spentStatPoints++,this._applyStatBonuses(),this._saveProgression(),console.log(`[GameManager] Spent point on ${t}: now ${this.stats[t]}`),!0):(console.warn(`[GameManager] Invalid stat: ${t}`),!1)}getStatBonuses(){return{bonusHealth:this.stats.vigor*5,bonusStamina:this.stats.endurance*5,staminaRegenMult:1+this.stats.endurance*.05,damageMult:1+this.stats.strength*.05,attackSpeedMult:1+this.stats.dexterity*.03,cooldownMult:Math.max(.5,1-this.stats.mind*.05)}}_applyStatBonuses(){const t=this.getStatBonuses(),e=this.getInfusionBonuses();this.maxHealth=100+t.bonusHealth+e.bonusHealth,this.maxStamina=100+t.bonusStamina+e.bonusStamina,this.mindStat=this.stats.mind,this.isDead||(this.health=Math.min(this.health,this.maxHealth),this.stamina=Math.min(this.stamina,this.maxStamina))}gainXP(t,e=null){if(!(this.currentLevel>=this.maxLevel)){for(this.currentLevel,this.currentXP+=t,e&&this.player&&this._spawnFloatingText(`+${t} XP`,e.clone(),65416);this.currentLevel<this.maxLevel&&this.currentXP>=this.xpThresholds[this.currentLevel+1];)this._levelUp();this._saveProgression()}}_levelUp(){this.currentLevel++,console.log(`[GameManager] LEVEL UP! Now level ${this.currentLevel}`),this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.audioManager&&this.audioManager.play("levelUp",{volume:.8}),this.particleManager&&this.player&&this.particleManager.spawnLevelUpEffect(this.player.mesh.position.clone()),this.player&&(this._spawnFloatingText(`LEVEL ${this.currentLevel}!`,this.player.mesh.position.clone().add(new b(0,2.5,0)),16768256,!0),setTimeout(()=>{this._spawnFloatingText(`+${this.statPointsPerLevel} Stat Points!`,this.player.mesh.position.clone().add(new b(0,2.2,0)),8965375,!1)},600)),this.itemManager&&this.itemManager.showNotification&&setTimeout(()=>{this.itemManager.showNotification(`+${this.statPointsPerLevel} Stat Points! Press TAB to allocate`,"levelup")},800),this.hud&&this.hud.flashLevelUp&&this.hud.flashLevelUp(),this._checkAbilityUnlocks(this.currentLevel)}_spawnFloatingText(t,e,i=16777215,n=!1){if(this.floatingText){const s=typeof i=="number"?"#"+i.toString(16).padStart(6,"0"):i;this.floatingText.spawn(t,e,{color:s,isLevelUp:n,duration:n?2.5:1.5})}}getXPProgress(){if(this.currentLevel>=this.maxLevel)return 1;const t=this.xpThresholds[this.currentLevel],e=this.xpThresholds[this.currentLevel+1],i=this.currentXP-t,n=e-t;return i/n}getXPToNextLevel(){return this.currentLevel>=this.maxLevel?0:this.xpThresholds[this.currentLevel+1]-this.currentXP}isAbilityUnlocked(t){const e=this.abilities[t];return e?this.currentLevel>=e.unlockLevel:!1}getUnlockedAbilities(){const t=[];for(const[e,i]of Object.entries(this.abilities))this.currentLevel>=i.unlockLevel&&t.push({id:e,...i});return t}getCooldownModifier(){return this.getStatBonuses().cooldownMult}isAbilityReady(t){return this.isAbilityUnlocked(t)?this.abilityCooldowns[t]<=0:!1}useAbility(t){const e=this.abilities[t];if(!e)return!1;const i=e.baseCooldown*this.getCooldownModifier();return this.abilityCooldowns[t]=i,this.unlockedAbilities.has(t)||this.unlockedAbilities.add(t),!0}getAbilityCooldown(t){return Math.max(0,this.abilityCooldowns[t]||0)}getAbilityCooldownProgress(t){const e=this.abilities[t];if(!e||e.baseCooldown===0)return 1;const i=this.abilityCooldowns[t]||0,n=e.baseCooldown*this.getCooldownModifier();return 1-i/n}activateWarCry(){this.warCryActive=!0,this.warCryTimer=this.warCryDuration,this.audioManager&&this.audioManager.play("warCry",{volume:.8}),this.particleManager&&this.player&&this.particleManager.spawnWarCryEffect(this.player.mesh.position.clone()),this.player&&this._spawnFloatingText("WAR CRY!",this.player.mesh.position.clone().add(new b(0,2.5,0)),16737792,!0)}getDamageMultiplier(){let t=this.getInfusionBonuses().damageMult;const e=this.getStatBonuses();return t+=e.damageMult-1,this.warCryActive&&(t+=this.warCryDamageBonus),t}getAttackSpeedMultiplier(){return this.getStatBonuses().attackSpeedMult}_checkAbilityUnlocks(t){for(const[e,i]of Object.entries(this.abilities))i.unlockLevel===t&&this._showAbilityUnlockNotification(e,i)}_showAbilityUnlockNotification(t,e){this.itemManager&&this.itemManager.showNotification&&this.itemManager.showNotification(`NEW ABILITY: ${e.name}`,"ability"),this.player&&(setTimeout(()=>{this._spawnFloatingText(`${e.name} Unlocked!`,this.player.mesh.position.clone().add(new b(0,3,0)),4500223,!0)},500),setTimeout(()=>{this._spawnFloatingText(`[${e.hotkey}] ${e.description}`,this.player.mesh.position.clone().add(new b(0,2.5,0)),8965375,!1)},1200)),this.audioManager&&this.audioManager.play("abilityUnlock",{volume:.7})}calculateEnemyXP(t){let e=Math.floor((t.config?.remnantDrop||25)*.5);return t.config?.isElite&&(e=Math.floor(e*1.5)),t.isBoss&&(e=200),e}triggerHitstop(t=.04){this.hitstopActive=!0,this.hitstopDuration=t,this.hitstopTimer=0}hitstopLight(){this.triggerHitstop(.035)}hitstopHeavy(){this.triggerHitstop(.06)}isInHitstop(){return this.hitstopActive}updateHitstop(t){return this.hitstopActive?(this.hitstopTimer+=t,this.hitstopTimer>=this.hitstopDuration&&(this.hitstopActive=!1,this.hitstopTimer=0),!0):!1}update(t){if(!this.isDead){if(this.staminaRegenTimer+=t,this.staminaRegenTimer>=this.staminaRegenDelay&&this.stamina<this.maxStamina){const e=this.getStatBonuses(),i=this.getInfusionBonuses(),n=e.staminaRegenMult*i.staminaRegenMult;this.stamina=Math.min(this.maxStamina,this.stamina+this.staminaRegenRate*n*t)}this.postureRegenTimer+=t,this.postureRegenTimer>=this.postureRegenDelay&&this.posture>0&&(this.posture=Math.max(0,this.posture-this.postureRegenRate*t));for(const e in this.abilityCooldowns)this.abilityCooldowns[e]>0&&(this.abilityCooldowns[e]-=t);this.warCryActive&&(this.warCryTimer-=t,this.warCryTimer<=0&&(this.warCryActive=!1,this.warCryTimer=0,this.player&&this._spawnFloatingText("War Cry ended",this.player.mesh.position.clone().add(new b(0,2,0)),8947848,!1)))}}canUseStamina(t){const e=this.stamina>=t;return!e&&this.hud&&(this.hud.flashStaminaDepleted(),this.audioManager&&this.player&&this.audioManager.play("staminaDepleted",{position:this.player.mesh.position,volume:.4})),e}useStamina(t){this.stamina=Math.max(0,this.stamina-t),this.staminaRegenTimer=0,this.stamina<15&&this.hud&&this.hud.flashStaminaDepleted()}takeDamage(t,e="physical",i=0,n=!1){if(this.isDead)return;const s=this.deathLessons[e]||0;let o=Math.floor(t*(1-s));if(n){const a=o*.5;if(this.canUseStamina(a))this.useStamina(a),o=Math.floor(o*.2),i*=.5;else return this.stamina=0,this.posture=this.maxPosture,"guard_broken"}return this.health-=o,this.posture=Math.min(this.maxPosture,this.posture+i),this.postureRegenTimer=0,this.audioManager&&this.player&&this.audioManager.play("playerDamage",{position:this.player.mesh.position,volume:.7}),this.health<=0?(this.die(e),"died"):this.posture>=this.maxPosture?(this.audioManager&&this.player&&this.audioManager.play("postureBreak",{position:this.player.mesh.position,volume:.8}),"posture_broken"):"hit"}die(t="unknown"){this.isDead=!0,this.deathCount++,this.health=0,this.audioManager&&this.audioManager.play("death",{volume:.8});const e=this.player?this.player.mesh.position.clone():this.checkpoint.clone();if(this.particleManager&&this.player&&this.particleManager.spawnPlayerDeathEffect(e,this.camera),this.bloodstainMesh&&this.scene&&(this.scene.remove(this.bloodstainMesh),this.bloodstainMesh=null),this.remnant>0&&this.scene){this.heldRemnant=this.remnant,this.remnant=0,this.bloodstain=e.clone(),this.bloodstain.y=.05;const i=new kn(.5,16),n=new Gt({color:11154227,transparent:!0,opacity:.8,side:pe});this.bloodstainMesh=new F(i,n),this.bloodstainMesh.rotation.x=-Math.PI/2,this.bloodstainMesh.position.copy(this.bloodstain),this.scene.add(this.bloodstainMesh)}else this.heldRemnant=0,this.bloodstain=null;this.deathLessons[t]||(this.deathLessons[t]=0),this.deathLessons[t]=Math.min(.25,this.deathLessons[t]+.005),this.deathScreenEl&&this.deathScreenEl.classList.add("visible"),setTimeout(()=>this.respawn(),3e3)}respawn(){this.isDead=!1,this.health=this.maxHealth,this.stamina=this.maxStamina,this.posture=0,this.player&&this.player.resetPosition(),this.enemyManager&&this.enemyManager.resetAll(),this.deathScreenEl&&this.deathScreenEl.classList.remove("visible")}setCheckpoint(t){this.checkpoint.copy(t)}setEntities(t,e,i,n=null){this.player=t,this.enemyManager=e,this.scene=i,this.camera=n}addRemnant(t){this.remnant+=t}collectBloodstain(){return!this.bloodstain||!this.player?!1:this.player.mesh.position.distanceTo(this.bloodstain)<2?(this.remnant+=this.heldRemnant,this.audioManager&&this.audioManager.play("itemPickup",{volume:.6}),this.heldRemnant=0,this.bloodstainMesh&&this.scene&&this.scene.remove(this.bloodstainMesh),this.bloodstain=null,this.bloodstainMesh=null,!0):!1}getTotalDepth(){return this.infusions.strength+this.infusions.vitality+this.infusions.stamina+this.infusions.spirit}canInfuse(t){return!(!this.infusions.hasOwnProperty(t)||this.infusions[t]>=this.MAX_TRACK_DEPTH||this.getTotalDepth()>=this.MAX_TOTAL_DEPTH)}getInfusionCost(t,e){return 100*e*e}infuse(t){if(!this.canInfuse(t))return!1;const e=this.infusions[t]+1,i=this.getInfusionCost(t,e);return this.remnant<i?!1:(this.remnant-=i,this.infusions[t]=e,this.audioManager&&this.audioManager.play("menuConfirm",{volume:.5}),!0)}getInfusionBonuses(){return{damageMult:1+this.infusions.strength*.1,bonusHealth:this.infusions.vitality*20,bonusStamina:this.infusions.stamina*15,staminaRegenMult:1+this.infusions.stamina*.1,postureResist:this.infusions.spirit*.05,postureRegenMult:1+this.infusions.spirit*.15}}applyInfusionBonuses(){const t=this.getInfusionBonuses();this.maxHealth=100+t.bonusHealth,this.maxStamina=100+t.bonusStamina,this.isDead||(this.health=Math.min(this.health,this.maxHealth),this.stamina=Math.min(this.stamina,this.maxStamina))}isNearBonfire(){return this.player?this.player.mesh.position.distanceTo(this.bonfirePosition)<3:!1}getTrackInfo(t){const e=this.infusions[t]||0,i=e+1,n=i<=this.MAX_TRACK_DEPTH?this.getInfusionCost(t,i):null,s=n!==null&&this.remnant>=n,o=e>=this.MAX_TRACK_DEPTH,a={strength:{name:"Strength",desc:"+10% damage per level",bonus:`+${e*10}% damage`},vitality:{name:"Vitality",desc:"+20 max HP per level",bonus:`+${e*20} HP`},stamina:{name:"Stamina",desc:"+15 max stamina, +10% regen per level",bonus:`+${e*15} stamina`},spirit:{name:"Spirit",desc:"+5% posture resist, +15% posture regen per level",bonus:`+${e*5}% resist`}};return{level:e,nextLevel:i,cost:n,canAfford:s,maxed:o,...a[t]}}}function Sh(r,t){if(t===Sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===hc||t===Kh){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=e.count-2,n=[];if(t===hc)for(let o=1;o<=i;o++)n.push(e.getX(0)),n.push(e.getX(o)),n.push(e.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(n.push(e.getX(o)),n.push(e.getX(o+1)),n.push(e.getX(o+2))):(n.push(e.getX(o+2)),n.push(e.getX(o+1)),n.push(e.getX(o)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class jx extends Un{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new tv(e)}),this.register(function(e){return new ev(e)}),this.register(function(e){return new hv(e)}),this.register(function(e){return new uv(e)}),this.register(function(e){return new dv(e)}),this.register(function(e){return new nv(e)}),this.register(function(e){return new sv(e)}),this.register(function(e){return new ov(e)}),this.register(function(e){return new av(e)}),this.register(function(e){return new Qx(e)}),this.register(function(e){return new rv(e)}),this.register(function(e){return new iv(e)}),this.register(function(e){return new lv(e)}),this.register(function(e){return new cv(e)}),this.register(function(e){return new Zx(e)}),this.register(function(e){return new fv(e)}),this.register(function(e){return new pv(e)})}load(t,e,i,n){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Js.extractUrlBase(t);o=Js.resolveURL(l,this.path)}else o=Js.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){n?n(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new va(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s;const o={},a={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Ou){try{o[jt.KHR_BINARY_GLTF]=new mv(t)}catch(u){n&&n(u);return}s=JSON.parse(o[jt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Cv(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case jt.KHR_MATERIALS_UNLIT:o[u]=new Jx;break;case jt.KHR_DRACO_MESH_COMPRESSION:o[u]=new gv(s,this.dracoLoader);break;case jt.KHR_TEXTURE_TRANSFORM:o[u]=new _v;break;case jt.KHR_MESH_QUANTIZATION:o[u]=new xv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,n)}parseAsync(t,e){const i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}}function $x(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zx{constructor(t){this.parser=t,this.name=jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){const s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let n=e.cache.get(i);if(n)return n;const s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let l;const h=new Mt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],je);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new wu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ke(h),l.distance=u;break;case"spot":l=new wp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),n=Promise.resolve(l),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,s=i.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(e.cache,a,c)})}}class Jx{constructor(){this.name=jt.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(t,e,i){const n=[];t.color=new Mt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],je),t.opacity=o[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,Ee))}return Promise.all(n)}}class Qx{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class tv{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new nt(a,a)}return Promise.all(s)}}class ev{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class iv{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class nv{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Mt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=n.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],je)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ee)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class sv{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class ov{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Mt().setRGB(a[0],a[1],a[2],je),Promise.all(s)}}class av{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class rv{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Mt().setRGB(a[0],a[1],a[2],je),o.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",o.specularColorTexture,Ee)),Promise.all(s)}}class cv{constructor(t){this.parser=t,this.name=jt.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class lv{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class hv{constructor(t){this.parser=t,this.name=jt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class uv{constructor(t){this.parser=t,this.name=jt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=n.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(t,o.source,c)}}class dv{constructor(t){this.parser=t,this.name=jt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=n.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(t,o.source,c)}}class fv{constructor(t){this.name=jt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=n.byteOffset||0,l=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class pv{constructor(t){this.name=jt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=e.meshes[i.mesh];for(const l of n.primitives)if(l.mode!==pi.TRIANGLES&&l.mode!==pi.TRIANGLE_STRIP&&l.mode!==pi.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Ot,m=new b,p=new Si,x=new b(1,1,1),v=new Cn(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,_.compose(m,p,x));for(const y in c)if(y==="_COLOR_0"){const w=c[y];v.instanceColor=new dc(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Te.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ou="glTF",Gs=12,bh={JSON:1313821514,BIN:5130562};class mv{constructor(t){this.name=jt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Gs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Ou)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Gs,s=new DataView(t,Gs);let o=0;for(;o<n;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===bh.JSON){const l=new Uint8Array(t,Gs+o,a);this.content=i.decode(l)}else if(c===bh.BIN){const l=Gs+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=jt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=yc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=yc[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[t.attributes[h]],f=ls[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,je,d)})})}}class _v{constructor(){this.name=jt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class xv{constructor(){this.name=jt.KHR_MESH_QUANTIZATION}}class Uu extends mo{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let o=0;o!==n;o++)e[o]=i[s+o];return e}interpolate_(t,e,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=n-e,u=(i-e)/h,d=u*u,f=d*u,g=t*l,_=g-l,m=-2*f+3*d,p=f-d,x=1-m,v=p-d+u;for(let y=0;y!==a;y++){const w=o[_+y+a],E=o[_+y+c]*h,C=o[g+y+a],I=o[g+y]*h;s[y]=x*w+v*E+m*C+p*I}return s}}const vv=new Si;class yv extends Uu{interpolate_(t,e,i,n){const s=super.interpolate_(t,e,i,n);return vv.fromArray(s).normalize().toArray(s),s}}const pi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Th={9728:Ue,9729:Le,9984:Fh,9985:na,9986:Ws,9987:$i},wh={33071:Di,33648:ha,10497:Ui},mr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},un={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mv={CUBICSPLINE:void 0,LINEAR:so,STEP:no},gr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new _t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),r.DefaultMaterial}function wn(r,t,e){for(const i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Ci(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function bv(r,t,e){let i=!1,n=!1,s=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(i){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(n){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Tv(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wv(r){let t;const e=r.extensions&&r.extensions[jt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+_r(e.attributes):t=r.indices+":"+_r(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)t+=":"+_r(r.targets[i]);return t}function _r(r){let t="";const e=Object.keys(r).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+r[e[i]]+";";return t}function Mc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Av(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ev=new Ot;class Cv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new $x,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);n=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&o<98?this.textureLoader=new Tu(this.options.manager):this.textureLoader=new Rp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new va(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};return wn(s,a,n),Ci(a,n),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){const o=e[n].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let n=0,s=t.length;n<s;n++){const o=t[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const n=i.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const n=t(e[i]);if(n)return n}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let n=0;n<e.length;n++){const s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){const i=t+":"+e;let n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,o){return i.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[jt.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,o){i.load(Js.resolveURL(e.uri,n.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){const e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){const o=mr[n.type],a=ls[n.componentType],c=n.normalized===!0,l=new a(n.count*o);return Promise.resolve(new Xe(l,o,c))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=mr[n.type],l=ls[n.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let v=e.cache.get(x);v||(_=new l(a,p*f,n.count*f/h),v=new Oc(_,f/h),e.cache.add(x,v)),m=new ms(v,c,d%f/h,g)}else a===null?_=new l(n.count*c):_=new l(a,d,n.count*c),m=new Xe(_,c,g);if(n.sparse!==void 0){const p=mr.SCALAR,x=ls[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,w=new x(o[1],v,n.sparse.count*p),E=new l(o[2],y,n.sparse.count*c);a!==null&&(m=new Xe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,I=w.length;C<I;C++){const S=w[C];if(m.setX(S,E[C*c]),c>=2&&m.setY(S,E[C*c+1]),c>=3&&m.setZ(S,E[C*c+2]),c>=4&&m.setW(S,E[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,i=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,i){const n=this,s=this.json,o=s.textures[t],a=s.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Th[d.magFilter]||Le,h.minFilter=Th[d.minFilter]||$i,h.wrapS=wh[d.wrapS]||Ui,h.wrapT=wh[d.wrapT]||Ui,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ue&&h.minFilter!==Le,n.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=n.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Be(_);m.needsUpdate=!0,d(m)}),e.load(Js.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ci(u,o),u.userData.mimeType=o.mimeType||Av(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,i,n){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[jt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[jt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[jt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return n!==void 0&&(o.colorSpace=n),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new hu,bi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(t.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new lu,bi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(n||s||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}t.material=i}getMaterialType(){return _t}loadMaterial(t){const e=this,i=this.json,n=this.extensions,s=i.materials[t];let o;const a={},c=s.extensions||{},l=[];if(c[jt.KHR_MATERIALS_UNLIT]){const u=n[jt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,e))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Mt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],je),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Ee)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=pe);const h=s.alphaMode||gr.OPAQUE;if(h===gr.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===gr.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Gt&&(l.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Gt&&(l.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Gt){const u=s.emissiveFactor;a.emissive=new Mt().setRGB(u[0],u[1],u[2],je)}return s.emissiveTexture!==void 0&&o!==Gt&&l.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Ee)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Ci(u,s),e.associations.set(u,{materials:t}),s.extensions&&wn(n,u,s),u})}createUniqueName(t){const e=ae.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Ah(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=wv(l),u=n[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[jt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Ah(new we,l,e),n[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,i=this.json,n=this.extensions,s=i.meshes[t],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Sv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const x=l[f];if(m.mode===pi.TRIANGLES||m.mode===pi.TRIANGLE_STRIP||m.mode===pi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Sf(_,x):new F(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===pi.TRIANGLE_STRIP?p.geometry=Sh(p.geometry,Kh):m.mode===pi.TRIANGLE_FAN&&(p.geometry=Sh(p.geometry,hc));else if(m.mode===pi.LINES)p=new Cf(_,x);else if(m.mode===pi.LINE_STRIP)p=new zc(_,x);else if(m.mode===pi.LINE_LOOP)p=new Rf(_,x);else if(m.mode===pi.POINTS)p=new Pf(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Tv(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Ci(p,s),m.extensions&&wn(n,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&wn(n,u[0],s),u[0];const d=new Kt;s.extensions&&wn(n,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Qe(ie.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new _o(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Ci(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),o=n,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ot;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Bc(a,c)})}loadAnimation(t){const e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const f=n.channels[u],g=n.samplers[f.sampler],_=f.target,m=_.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,x=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,y=d.length;v<y;v++){const w=d[v],E=f[v],C=g[v],I=_[v],S=m[v];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const T=i._createAnimationTracks(w,E,C,I,S);if(T)for(let P=0;P<T.length;P++)p.push(T[P])}const x=new _c(s,void 0,p);return Ci(x,n),x})}createNodeMesh(t){const e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=n.weights.length;c<l;c++)a.morphTargetInfluences[c]=n.weights[c]}),o})}loadNode(t){const e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),o=[],a=n.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ev)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?n.createUniqueName(s.name):"",a=[],c=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(l){return n._getNodeRef(n.cameraCache,s.camera,l)})),n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new cu:l.length>1?h=new Kt:l.length===1?h=l[0]:h=new Te,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Ci(h,s),s.extensions&&wn(i,h,s),s.matrix!==void 0){const u=new Ot;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){const u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],n=this,s=new Kt;i.name&&(s.name=n.createUniqueName(i.name)),Ci(s,i),i.extensions&&wn(e,s,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(n.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof bi||d instanceof Be)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=l(s),s})}_createAnimationTracks(t,e,i,n,s){const o=[],a=t.name?t.name:t.uuid,c=[];un[s.path]===un.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(un[s.path]){case un.weights:l=vs;break;case un.rotation:l=ys;break;case un.translation:case un.scale:l=Ms;break;default:i.itemSize===1?l=vs:l=Ms;break}const h=n.interpolation!==void 0?Mv[n.interpolation]:so,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+un[s.path],e.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=Mc(e.constructor),n=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const n=this instanceof ys?yv:Uu;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Rv(r,t,e){const i=t.attributes,n=new si;if(i.POSITION!==void 0){const a=e.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(n.set(new b(c[0],c[1],c[2]),new b(l[0],l[1],l[2])),a.normalized){const h=Mc(ls[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new b,c=new b;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Mc(ls[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}r.boundingBox=n;const o=new zi;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=o}function Ah(r,t,e){const i=t.attributes,n=[];function s(o,a){return e.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in i){const a=yc[o]||o.toLowerCase();a in r.attributes||n.push(s(i[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});n.push(o)}return Zt.workingColorSpace!==je&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Zt.workingColorSpace}" not supported.`),Ci(r,t),Rv(r,t,e),Promise.all(n).then(function(){return t.targets!==void 0?bv(r,t.targets,e):r})}const xr=new WeakMap;class Pv extends Un{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,i,n){const s=new va(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,o=>{this.parse(o,e,n)},i,n)}parse(t,e,i=()=>{}){this.decodeDracoFile(t,e,null,null,Ee,i).catch(i)}decodeDracoFile(t,e,i,n,s=je,o=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(t,a).then(e).catch(o)}decodeGeometry(t,e){const i=JSON.stringify(e);if(xr.has(t)){const c=xr.get(t);if(c.key===i)return c.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,o=t.byteLength,a=this._getWorker(s,o).then(c=>(n=c,new Promise((l,h)=>{n._callbacks[s]={resolve:l,reject:h},n.postMessage({type:"decode",id:s,taskConfig:e,buffer:t},[t])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),xr.set(t,{key:i,promise:a}),a}_createGeometry(t){const e=new we;t.index&&e.setIndex(new Xe(t.index.array,1));for(let i=0;i<t.attributes.length;i++){const{name:n,array:s,itemSize:o,stride:a,vertexColorSpace:c}=t.attributes[i];let l;if(o===a)l=new Xe(s,o);else{const h=new Oc(s,a);l=new ms(h,o,0)}n==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(s instanceof Float32Array)),e.setAttribute(n,l)}return e}_assignVertexColorSpace(t,e){if(e!==Ee)return;const i=new Mt;for(let n=0,s=t.count;n<s;n++)i.fromBufferAttribute(t,n),Zt.colorSpaceToWorking(i,Ee),t.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(t,e){const i=new va(this.manager);return i.setPath(this.decoderPath),i.setResponseType(e),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(t,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(i=>{const n=i[0];t||(this.decoderConfig.wasmBinary=i[1]);const s=Iv.toString(),o=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const o=s.data;switch(o.type){case"decode":n._callbacks[o.id].resolve(o);break;case"error":n._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[t]=e,i._taskLoad+=e,i})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Iv(){let r,t;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,t=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const c=a.buffer,l=a.taskConfig;t.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=e(u,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function e(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let x,v;if(l.useUniqueIDs)v=h[m],x=a.GetAttributeByUniqueId(d,v);else{if(v=a.GetAttributeId(d,o[h[m]]),v===-1)continue;x=a.GetAttribute(d,v)}const y=n(o,a,d,m,p,x);m==="color"&&(y.vertexColorSpace=l.vertexColorSpace),_.attributes.push(y)}return g===o.TRIANGULAR_MESH&&(_.index=i(o,a,d)),o.destroy(d),_}function i(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function n(o,a,c,l,h,u){const d=c.num_points(),f=u.num_components(),g=s(o,h),_=f*h.BYTES_PER_ELEMENT,m=Math.ceil(_/4)*4,p=m/h.BYTES_PER_ELEMENT,x=d*_,v=d*m,y=o._malloc(x);a.GetAttributeDataArrayForAllPoints(c,u,g,x,y);const w=new h(o.HEAPF32.buffer,y,x/h.BYTES_PER_ELEMENT);let E;if(_===m)E=w.slice();else{E=new h(v/h.BYTES_PER_ELEMENT);let C=0;for(let I=0,S=w.length;I<S;I++){for(let T=0;T<f;T++)E[C+T]=w[I*f+T];C+=p}}return o._free(y),{name:l,count:d,itemSize:f,array:E,stride:p}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class Dv{constructor(){this.gltfLoader=new jx,this.dracoLoader=new Pv,this.textureLoader=new Tu,this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/"),this.dracoLoader.setDecoderConfig({type:"js"}),this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.textureCache=new Map,this.loadingPromises=new Map,this.debug=!1}async loadModel(t,e={}){const i=t+JSON.stringify(e);if(this.modelCache.has(i)){const s=this.modelCache.get(i);return this._cloneGLTF(s)}if(this.loadingPromises.has(i)){const s=await this.loadingPromises.get(i);return this._cloneGLTF(s)}const n=new Promise((s,o)=>{this.debug&&console.log(`[AssetManager] Loading: ${t}`),this.gltfLoader.load(t,a=>{this.debug&&(console.log(`[AssetManager] Loaded: ${t}`),console.log(`  - Animations: ${a.animations.length}`),a.animations.forEach((l,h)=>{console.log(`    ${h}: ${l.name} (${l.duration.toFixed(2)}s)`)})),e.scale&&a.scene.scale.setScalar(e.scale),a.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.material&&(Array.isArray(l.material)?l.material.forEach(h=>this._fixMaterial(h)):this._fixMaterial(l.material)))});const c={scene:a.scene,animations:a.animations,gltf:a};this.modelCache.set(i,c),s(c)},a=>{if(this.debug&&a.total>0){const c=(a.loaded/a.total*100).toFixed(1);console.log(`[AssetManager] Loading ${t}: ${c}%`)}},a=>{console.error(`[AssetManager] Failed to load: ${t}`,a),o(a)})});this.loadingPromises.set(i,n);try{const s=await n;return this.loadingPromises.delete(i),this._cloneGLTF(s)}catch(s){throw this.loadingPromises.delete(i),s}}_cloneGLTF(t){return{scene:t.scene.clone(),animations:t.animations,gltf:t.gltf}}_fixMaterial(t){(t.isMeshStandardMaterial||t.isMeshPhysicalMaterial)&&(t.metalness===void 0&&(t.metalness=0),t.roughness===void 0&&(t.roughness=.8)),t.transparent&&(t.depthWrite=!1,t.side=pe)}async loadTexture(t,e={}){return this.textureCache.has(t)?this.textureCache.get(t):new Promise((i,n)=>{this.textureLoader.load(t,s=>{e.repeat&&(s.wrapS=Ui,s.wrapT=Ui,s.repeat.set(e.repeat[0],e.repeat[1])),e.encoding?s.colorSpace=e.encoding:s.colorSpace=Ee,e.anisotropy&&(s.anisotropy=e.anisotropy),this.textureCache.set(t,s),i(s)},void 0,n)})}async preload(t){const e=t.map(i=>i.type==="model"?this.loadModel(i.path,i.options):i.type==="texture"?this.loadTexture(i.path,i.options):Promise.resolve());return Promise.all(e)}createAnimationSystem(t,e){const i=new Eu(t),n=new Map;return e.forEach(s=>{const o=i.clipAction(s);n.set(s.name,o),n.set(s.name.toLowerCase(),o)}),{mixer:i,actions:n,play:(s,o={})=>{const a=n.get(s)||n.get(s.toLowerCase());return a?(a.reset(),o.loop!==void 0&&a.setLoop(o.loop?Yh:qh),o.clampWhenFinished&&(a.clampWhenFinished=!0),o.timeScale&&(a.timeScale=o.timeScale),o.fadeIn&&a.fadeIn(o.fadeIn),a.play(),a):(this.debug&&console.warn(`[AssetManager] Animation not found: ${s}`),null)},crossFade:(s,o,a=.2)=>{const c=n.get(s)||n.get(s.toLowerCase()),l=n.get(o)||n.get(o.toLowerCase());return l?(l.reset(),l.play(),c&&c.isRunning()&&c.crossFadeTo(l,a,!0),l):null},stopAll:()=>{i.stopAllAction()},update:s=>{i.update(s)}}}clearCache(){this.modelCache.clear(),this.textureCache.clear()}dispose(){this.modelCache.forEach(t=>{t.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(i=>i.dispose()):e.material.dispose())})}),this.textureCache.forEach(t=>{t.dispose()}),this.dracoLoader.dispose(),this.clearCache()}}const fo=new Dv,pt={IDLE:"idle",MOVING:"moving",DODGING:"dodging",ATTACKING:"attacking",HEAVY_ATTACKING:"heavy_attacking",BLOCKING:"blocking",STAGGERED:"staggered",DEAD:"dead",DASHING:"dashing",CHARGING:"charging",CHARGED_ATTACKING:"charged_attacking",PARRYING:"parrying",WAR_CRYING:"war_crying"},An={dodge:20,lightAttack:15,heavyAttack:30},De={dodgeDuration:.45,dodgeIframes:.3,lightAttackDuration:.35,heavyAttackDuration:.65,lightHitStart:.06,lightHitEnd:.18,heavyHitStart:.15,heavyHitEnd:.35,staggerDuration:.8,comboWindow:.12,dashDuration:.25,dashIframes:.2,parryWindow:.15,parryDuration:.35,chargedAttackDuration:.9,chargedHitStart:.25,chargedHitEnd:.5,warCryDuration:.8},Lv={[pt.IDLE]:"Idle",[pt.MOVING]:"Walking",[pt.DODGING]:"Jump",[pt.ATTACKING]:"Punch",[pt.HEAVY_ATTACKING]:"Punch",[pt.BLOCKING]:"Idle",[pt.STAGGERED]:"No",[pt.DEAD]:"Death",[pt.DASHING]:"Jump",[pt.CHARGING]:"Idle",[pt.CHARGED_ATTACKING]:"Punch",[pt.PARRYING]:"Idle",[pt.WAR_CRYING]:"ThumbsUp"};class kv{constructor(t,e,i){this.scene=t,this.gm=e,this.input=i,this.cameraController=null,this.world=null,this.state=pt.IDLE,this.stateTimer=0,this.isInvincible=!1,this.attackCombo=0,this.hitThisSwing=!1,this.velocity=new b,this.moveSpeed=6,this.dodgeSpeed=14,this.gravity=-30,this.grounded=!0,this.collisionRadius=.4,this.currentMoveVelocity=new b,this.moveAcceleration=35,this.moveDeceleration=25,this.dodgeGhostMeshes=[],this.lastGhostSpawnTime=0,this.ghostSpawnInterval=.05,this.dashDir=new b,this.dashSpeed=18,this.parrySuccessful=!1,this.chargeProgress=0,this.chargedDamage=60,this.chargedPostureDmg=40,this.moveDir=new b,this.dodgeDir=new b,this.facingAngle=0,this.modelLoaded=!1,this.animSystem=null,this.currentAnim=null,this.gltfModel=null,this.mesh=new Kt,this.mesh.position.set(0,0,5),this._createFallbackMesh(),this.attackRange=2,this.lightDamage=15,this.heavyDamage=35,this.lightPostureDmg=10,this.heavyPostureDmg=25,t.add(this.mesh),this._loadGLTFModel()}_createFallbackMesh(){const t=new _t({color:5921384,roughness:.35,metalness:.85}),e=new gn(.35,.6,8,16);this.fallbackBody=new F(e,t),this.fallbackBody.position.y=1.1,this.fallbackBody.castShadow=!0,this.mesh.add(this.fallbackBody);const i=new ce(.22,16,12);this.fallbackHead=new F(i,t),this.fallbackHead.position.y=1.7,this.mesh.add(this.fallbackHead);const n=new _t({color:6737151,emissive:4491468,emissiveIntensity:3}),s=new Jt(.2,.04,.12);this.visor=new F(s,n),this.visor.position.set(0,1.68,.25),this.mesh.add(this.visor),this.body=this.fallbackBody}async _loadGLTFModel(){try{const t="/project-ashen/",{scene:e,animations:i}=await fo.loadModel(`${t}assets/models/robot_expressive.glb`,{scale:.8});this.gltfModel=e,this.gltfModel.position.y=0,this.gltfModel.rotation.y=Math.PI,this.gltfModel.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.material&&(n.material.color&&n.material.color.multiplyScalar(.85),n.material.emissive&&(n.material.emissive.setHex(0),n.material.emissiveIntensity=0)),n.userData.originalMaterial=n.material.clone())}),this.fallbackBody&&(this.fallbackBody.visible=!1),this.fallbackHead&&(this.fallbackHead.visible=!1),this.visor&&(this.visor.visible=!1),this.mesh.add(this.gltfModel),i&&i.length>0&&(this.animSystem=fo.createAnimationSystem(this.gltfModel,i),this._playAnimation(pt.IDLE,{loop:!0})),this.modelLoaded=!0,this.body=this.gltfModel}catch(t){console.error("[Player] Failed to load GLTF model:",t)}}_playAnimation(t,e={}){if(!this.animSystem)return;const i=Lv[t];if(!i||this.currentAnim===i&&t!==pt.ATTACKING)return;const n={loop:t===pt.IDLE||t===pt.MOVING||t===pt.BLOCKING,fadeIn:.2,timeScale:1,clampWhenFinished:t===pt.DEAD};t===pt.ATTACKING?(n.timeScale=1.6+this.attackCombo*.15,n.loop=!1,n.fadeIn=.05):t===pt.HEAVY_ATTACKING?(n.timeScale=.75,n.loop=!1,n.fadeIn=.1):t===pt.DODGING?(n.timeScale=1.5,n.loop=!1):t===pt.MOVING?n.timeScale=1.2:t===pt.CHARGED_ATTACKING&&(n.timeScale=.65,n.loop=!1,n.fadeIn=.08);const s={...n,...e};this.currentAnim?this.animSystem.crossFade(this.currentAnim,i,s.fadeIn):this.animSystem.play(i,s),this.currentAnim=i}update(t){if(this.gm.isDead){this.state=pt.DEAD,this.currentAnim!=="Death"&&this._playAnimation(pt.DEAD);return}switch(this.animSystem&&this.animSystem.update(t),this.stateTimer+=t,this.state){case pt.IDLE:case pt.MOVING:this._processMovement(t),this._processCombatInput();break;case pt.DODGING:this._processDodge(t);break;case pt.ATTACKING:case pt.HEAVY_ATTACKING:this._processAttack(t);break;case pt.BLOCKING:this._processBlock(t);break;case pt.STAGGERED:this.stateTimer>=De.staggerDuration&&this._changeState(pt.IDLE);break;case pt.DEAD:break;case pt.DASHING:this._processDash(t);break;case pt.CHARGING:this._processCharging(t);break;case pt.CHARGED_ATTACKING:this._processChargedAttack(t);break;case pt.PARRYING:this._processParry(t);break;case pt.WAR_CRYING:this._processWarCry(t);break}if(this.world){const e=this.world.getFloorY(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y>e?(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=e?(this.mesh.position.y=e,this.velocity.y=0,this.grounded=!0):this.grounded=!1):this.mesh.position.y<e?(this.mesh.position.y=ie.lerp(this.mesh.position.y,e,8*t),this.velocity.y=0,this.grounded=!0):(this.velocity.y=0,this.grounded=!0)}else this.mesh.position.y>0&&(this.velocity.y+=this.gravity*t,this.mesh.position.y+=this.velocity.y*t,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.velocity.y=0,this.grounded=!0))}_processMovement(t){const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const i=this._getCameraYaw(),n=new b(-Math.sin(i),0,-Math.cos(i)),s=new b(Math.cos(i),0,-Math.sin(i));this.moveDir.set(0,0,0).addScaledVector(n,-e.z).addScaledVector(s,e.x).normalize();const o=this.moveDir.clone().multiplyScalar(this.moveSpeed);this.currentMoveVelocity.lerp(o,this.moveAcceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this._applyWallCollision(),this.facingAngle=Math.atan2(this.moveDir.x,this.moveDir.z),this.mesh.rotation.y=ie.lerp(this.mesh.rotation.y,this.facingAngle+Math.PI,10*t),this.state!==pt.MOVING&&this._changeState(pt.MOVING)}else this.currentMoveVelocity.length()>.01?(this.currentMoveVelocity.lerp(new b(0,0,0),this.moveDeceleration*t),this.mesh.position.addScaledVector(this.currentMoveVelocity,t),this._applyWallCollision()):this.currentMoveVelocity.set(0,0,0),this.state===pt.MOVING&&this._changeState(pt.IDLE)}_applyWallCollision(){if(!this.world)return;const t=this.world.checkCollision(this.mesh.position,this.collisionRadius);t&&t.collides&&t.pushVector&&this.mesh.position.add(t.pushVector)}_applyFloorCollision(){if(!this.world)return;const t=this.world.getFloorY(this.mesh.position.x,this.mesh.position.z),e=t-this.mesh.position.y;Math.abs(e)<.1?this.mesh.position.y=t:e>0?this.mesh.position.y=ie.lerp(this.mesh.position.y,t,.3):this.mesh.position.y=ie.lerp(this.mesh.position.y,t,.2)}_processCombatInput(){if(this.input.lockOn&&this._toggleLockOn(),this.input.dashAbility&&this.gm.isAbilityUnlocked("dash")&&this.gm.isAbilityReady("dash")&&this.gm.canUseStamina(15)){this._startDash();return}if(this.input.parryAbility&&this.gm.isAbilityUnlocked("parry")&&this.gm.isAbilityReady("parry")&&this.gm.canUseStamina(10)){this._startParry();return}if(this.input.warCryAbility&&this.gm.isAbilityUnlocked("warCry")&&this.gm.isAbilityReady("warCry")&&this.gm.canUseStamina(25)){this._startWarCry();return}if(this.input.chargedAttack&&this.gm.isAbilityUnlocked("heavyCharge")&&this.gm.canUseStamina(35)){this._startChargedAttack();return}if(this.input.dodge&&this.gm.canUseStamina(An.dodge)){this._startDodge();return}if(this.input.lightAttack&&this.gm.canUseStamina(An.lightAttack)){this._startAttack(!1);return}if(this.input.heavyAttack&&this.gm.canUseStamina(An.heavyAttack)){this._startAttack(!0);return}this.input.block&&this._changeState(pt.BLOCKING)}_toggleLockOn(){if(!this.cameraController||!this.gm.enemyManager)return;const e=this.gm.enemyManager.enemies.filter(a=>!a.isDead);if(this.gm.enemyManager.boss&&!this.gm.enemyManager.boss.isDead&&e.push(this.gm.enemyManager.boss),e.length===0){this.cameraController.clearLockOn();return}const i=20,n=this.mesh.position,s=e.map(a=>({enemy:a,dist:n.distanceTo(a.mesh.position)})).filter(a=>a.dist<=i).sort((a,c)=>a.dist-c.dist);if(s.length===0){this.cameraController.clearLockOn();return}const o=this.cameraController.lockOnTarget;if(o&&!o.isDead){const a=s.findIndex(c=>c.enemy===o);if(a!==-1&&s.length>1){const c=(a+1)%s.length;this.cameraController.setLockOnTarget(s[c].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.3})}else this.cameraController.clearLockOn(),this.gm.audioManager&&this.gm.audioManager.play("menuBack",{volume:.3})}else this.cameraController.setLockOnTarget(s[0].enemy),this.gm.audioManager&&this.gm.audioManager.play("menuSelect",{volume:.4})}_startDodge(){this.gm.useStamina(An.dodge),this.gm.audioManager&&this.gm.audioManager.play("dodge",{position:this.mesh.position,volume:.5});const t=this.input.getMovementVector();if(t.x!==0||t.z!==0){const e=this._getCameraYaw(),i=new b(-Math.sin(e),0,-Math.cos(e)),n=new b(Math.cos(e),0,-Math.sin(e));this.dodgeDir.set(0,0,0).addScaledVector(i,-t.z).addScaledVector(n,t.x).normalize()}else this.dodgeDir.set(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.isInvincible=!0,this.lastGhostSpawnTime=0,this._flashDodgeStart(),this._changeState(pt.DODGING)}_flashDodgeStart(){this._flashModel(65535,100)}_flashModel(t,e){if(this.gltfModel&&(this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(t),s.emissiveIntensity=.5)})}),setTimeout(()=>{this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(0),s.emissiveIntensity=0)})})},e)),this.visor&&this.visor.material){const i=this.visor.material.emissive.getHex();this.visor.material.emissive.setHex(t),this.visor.material.emissiveIntensity=8,setTimeout(()=>{this.visor.material.emissive.setHex(i),this.visor.material.emissiveIntensity=3},e)}}_spawnDodgeGhost(){const t=new Kt,e=new Gt({color:4491519,transparent:!0,opacity:.4,depthWrite:!1});if(this.gltfModel)this.gltfModel.traverse(i=>{if(i.isMesh&&i.visible){const n=new F(i.geometry.clone(),e);n.position.copy(i.position),n.rotation.copy(i.rotation),n.scale.copy(i.scale),t.add(n)}});else{const i=new gn(.35,.6,4,8),n=new F(i,e);n.position.y=1.1,t.add(n)}t.position.copy(this.mesh.position),t.rotation.y=this.mesh.rotation.y,this.scene.add(t),this.dodgeGhostMeshes.push({mesh:t,material:e,spawnTime:Date.now(),lifetime:200})}_updateDodgeGhosts(){const t=Date.now();for(let e=this.dodgeGhostMeshes.length-1;e>=0;e--){const i=this.dodgeGhostMeshes[e],n=t-i.spawnTime;if(n>i.lifetime)this.scene.remove(i.mesh),i.mesh.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),this.dodgeGhostMeshes.splice(e,1);else{const s=n/i.lifetime;i.material.opacity=.4*(1-s)}}}_processDodge(t){const e=this.stateTimer/De.dodgeDuration,i=Math.sin(e*Math.PI);this.mesh.position.addScaledVector(this.dodgeDir,this.dodgeSpeed*i*t),this._applyWallCollision(),this.lastGhostSpawnTime+=t,this.isInvincible&&this.lastGhostSpawnTime>=this.ghostSpawnInterval&&(this._spawnDodgeGhost(),this.lastGhostSpawnTime=0),this._updateDodgeGhosts(),this.stateTimer>=De.dodgeIframes&&this.isInvincible&&(this.isInvincible=!1,this._flashDodgeEnd()),this.stateTimer>=De.dodgeDuration&&(this.isInvincible=!1,this._changeState(pt.IDLE))}_flashDodgeEnd(){this._flashModel(2236962,50)}_startAttack(t){const e=t?An.heavyAttack:An.lightAttack;this.gm.useStamina(e),this.hitThisSwing=!1,this.gm.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.5,pitch:t?.8:1,variation:.1});const i=this._getCameraYaw();if(this.facingAngle=i,this.mesh.rotation.y=i+Math.PI,t?this._flashModel(16737826,200):this._flashModel(4491519,80),this.gm.particleManager){const n=new b(-Math.sin(i),0,-Math.cos(i));this.gm.particleManager.spawnAttackArc(this.mesh.position.clone(),n,t)}this._changeState(t?pt.HEAVY_ATTACKING:pt.ATTACKING)}_processAttack(t){const e=this.state===pt.HEAVY_ATTACKING,i=this.gm.getAttackSpeedMultiplier?this.gm.getAttackSpeedMultiplier():1,n=e?De.heavyAttackDuration:De.lightAttackDuration,s=e?De.heavyHitStart:De.lightHitStart,o=e?De.heavyHitEnd:De.lightHitEnd,a=n/i,c=s/i,l=o/i;if(this.stateTimer>=c&&this.stateTimer<l&&!this.hitThisSwing&&this._checkHit(e),!e&&this.stateTimer>a-De.comboWindow/i&&this.stateTimer<a&&this.input.lightAttack&&this.gm.canUseStamina(An.lightAttack)){this.attackCombo=(this.attackCombo+1)%3,this._startAttack(!1);return}const h=new b(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));if(this.stateTimer<l){const u=this.stateTimer/l;if(e){const f=5*(1-Math.pow(u,.5)*.5);this.mesh.position.addScaledVector(h,f*t)}else{const f=4*(1-Math.sin(u*Math.PI*.5)*.3);this.mesh.position.addScaledVector(h,f*t)}this._applyWallCollision()}this.stateTimer>=a&&(this.attackCombo=0,this._changeState(pt.IDLE))}_checkHit(t){const e=this.gm.getDamageMultiplier(),i=t?this.heavyDamage:this.lightDamage;this.activeAttack={position:this.mesh.position.clone().add(new b(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(1.2)),range:this.attackRange,damage:Math.floor(i*e),postureDmg:t?this.heavyPostureDmg:this.lightPostureDmg,isHeavy:t}}_processBlock(t){this.input.block||this._changeState(pt.IDLE);const e=this.input.getMovementVector();if(e.x!==0||e.z!==0){const i=this._getCameraYaw(),n=new b(-Math.sin(i),0,-Math.cos(i)),s=new b(Math.cos(i),0,-Math.sin(i)),o=new b().addScaledVector(n,-e.z).addScaledVector(s,e.x).normalize();this.mesh.position.addScaledVector(o,this.moveSpeed*.3*t)}}_startDash(){this.gm.useStamina(15),this.gm.useAbility("dash"),this.gm.audioManager&&this.gm.audioManager.play("dash",{position:this.mesh.position,volume:.6});const t=this.input.getMovementVector();if(t.x!==0||t.z!==0){const e=this._getCameraYaw(),i=new b(-Math.sin(e),0,-Math.cos(e)),n=new b(Math.cos(e),0,-Math.sin(e));this.dashDir.set(0,0,0).addScaledVector(i,-t.z).addScaledVector(n,t.x).normalize()}else this.dashDir.set(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.isInvincible=!0,this._flashModel(65416,150),this.gm.particleManager&&this.gm.particleManager.spawnDashEffect(this.mesh.position.clone(),this.dashDir),this._changeState(pt.DASHING)}_processDash(t){const e=this.stateTimer/De.dashDuration,i=Math.pow(1-e,.5);this.mesh.position.addScaledVector(this.dashDir,this.dashSpeed*i*t),this._applyWallCollision(),this.lastGhostSpawnTime+=t,this.lastGhostSpawnTime>=.04&&(this._spawnDodgeGhost(),this.lastGhostSpawnTime=0),this._updateDodgeGhosts(),this.stateTimer>=De.dashIframes&&this.isInvincible&&(this.isInvincible=!1),this.stateTimer>=De.dashDuration&&(this.isInvincible=!1,this._changeState(pt.IDLE))}_startChargedAttack(){this.gm.useStamina(35),this.hitThisSwing=!1,this.gm.audioManager&&this.gm.audioManager.play("chargedSwing",{position:this.mesh.position,volume:.7,pitch:.7});const t=this._getCameraYaw();this.facingAngle=t,this.mesh.rotation.y=t+Math.PI,this._flashModel(16755200,200),this.gm.cameraController&&this.gm.cameraController.shakeHeavy(),this._changeState(pt.CHARGED_ATTACKING)}_processChargedAttack(t){this.stateTimer>=De.chargedHitStart&&this.stateTimer<De.chargedHitEnd&&!this.hitThisSwing&&this._checkChargedHit();const e=new b(-Math.sin(this.facingAngle),0,-Math.cos(this.facingAngle));this.stateTimer<De.chargedHitEnd&&(this.mesh.position.addScaledVector(e,5*t),this._applyWallCollision()),this.stateTimer>=De.chargedAttackDuration&&this._changeState(pt.IDLE)}_checkChargedHit(){const t=this.gm.getDamageMultiplier();this.activeAttack={position:this.mesh.position.clone().add(new b(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(1.5)),range:this.attackRange*1.3,damage:Math.floor(this.chargedDamage*t),postureDmg:this.chargedPostureDmg,isHeavy:!0,isCharged:!0},this.gm.hitstopHeavy()}_startParry(){this.gm.useStamina(10),this.gm.useAbility("parry"),this.parrySuccessful=!1,this.gm.audioManager&&this.gm.audioManager.play("parryReady",{position:this.mesh.position,volume:.5}),this._flashModel(16777215,100),this._changeState(pt.PARRYING)}_processParry(t){this.stateTimer>=De.parryDuration&&(this.parrySuccessful?this._startRiposte():this._changeState(pt.IDLE))}_startRiposte(){this.hitThisSwing=!1,this.gm.audioManager&&this.gm.audioManager.play("riposte",{volume:.8}),this._flashModel(16729156,150),this.activeAttack={position:this.mesh.position.clone().add(new b(Math.sin(this.facingAngle),1,Math.cos(this.facingAngle)).multiplyScalar(1.2)),range:this.attackRange,damage:this.chargedDamage*1.5,postureDmg:50,isHeavy:!0,isRiposte:!0},this.gm.hitstopHeavy(),this._changeState(pt.ATTACKING)}onParrySuccess(){this.parrySuccessful=!0,this.gm.audioManager&&this.gm.audioManager.play("parrySuccess",{position:this.mesh.position,volume:.8}),this._flashModel(16768256,200),this.gm.triggerHitstop(.1),this.gm.particleManager&&this.gm.particleManager.spawnParryEffect(this.mesh.position.clone())}_startWarCry(){this.gm.useStamina(25),this.gm.useAbility("warCry"),this.gm.activateWarCry(),this._flashModel(16737792,300),this._changeState(pt.WAR_CRYING)}_processWarCry(t){this.stateTimer>=De.warCryDuration&&this._changeState(pt.IDLE)}get isParrying(){return this.state===pt.PARRYING&&this.stateTimer<De.parryWindow}_changeState(t){this.state!==t&&((this.state===pt.ATTACKING||this.state===pt.HEAVY_ATTACKING)&&(this.activeAttack=null),this.state=t,this.stateTimer=0,this._playAnimation(t))}setCameraController(t){this.cameraController=t}setWorld(t){this.world=t}_getCameraYaw(){return this.cameraController?this.cameraController.yaw:0}resetPosition(){this.mesh.position.copy(this.gm.checkpoint),this.velocity.set(0,0,0),this._changeState(pt.IDLE)}get isBlocking(){return this.state===pt.BLOCKING}get isAttacking(){return this.state===pt.ATTACKING||this.state===pt.HEAVY_ATTACKING}get isDead(){return this.state===pt.DEAD}flashDamage(){this._flashModel(6684672,150)}}const ya={CRYPT_LORDS_GREATSWORD:{id:"crypt-lords-greatsword",name:"Crypt Lord's Greatsword",type:"weapon",description:"A massive blade once wielded by the guardian of the ritual chamber. Purple energy crackles through cracks in the metal.",stats:{damage:65,scaling:{strength:"A",dexterity:"D"},weight:12,criticalDamage:110},special:"Charged R2 releases purple shockwave (consumes 20 extra stamina)",color:6693546,lightColor:8930508,canInfuse:!1},LORD_SOUL_FRAGMENT:{id:"lord-soul-fragment",name:"Lord Soul Fragment",type:"upgrade",description:"A fragment of the soul that sought godhood. Can be used at the crucible to grant +2 to any single stat track.",stats:{infusionBonus:2},color:16729343,lightColor:16738047,lore:"What rises from the ritual circle was never meant to die. It was meant to ascend."}};class Nv{constructor(t,e){this.scene=t,this.gm=e,this.items=[],this.inventory={keys:new Set,weapons:[],upgrades:[]},this.bossesDefeated=new Set,this.notificationEl=document.getElementById("item-notification"),this.victoryNotificationEl=document.getElementById("victory-notification")}initItems(t){t.forEach((e,i)=>{this.spawnItem(e.pos,e.type,e)})}spawnItem(t,e,i={}){const n={id:`item-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:e,position:t.clone(),collected:!1,mesh:null,light:null,...i};switch(e){case"remnant":this._createRemnantVisual(n);break;case"key":this._createKeyVisual(n);break;case"boss_remnant":this._createBossRemnantVisual(n);break;case"boss_weapon":this._createBossWeaponVisual(n);break;case"boss_upgrade":this._createBossUpgradeVisual(n);break;default:this._createGenericVisual(n)}return this.items.push(n),n}_createRemnantVisual(t){const e=new ce(.15,12,12),i=new _t({color:8978346,emissive:4500070,emissiveIntensity:.8,transparent:!0,opacity:.9});t.mesh=new F(e,i),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh),t.light=new Ke(8978346,.8,4),t.light.position.copy(t.position),this.scene.add(t.light);const n=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=n+Math.sin(Date.now()*.003)*.15,t.mesh.rotation.y+=.02,t.light.position.y=t.mesh.position.y,t.light.intensity=.6+Math.sin(Date.now()*.005)*.3)};s()}_createKeyVisual(t){const e=new Kt,i=new en(.12,.03,8,16),n=new _t({color:13412932,emissive:6702114,emissiveIntensity:.5,metalness:.8,roughness:.3}),s=new F(i,n);s.rotation.x=Math.PI/2,e.add(s);const o=new Jt(.04,.25,.02),a=new F(o,n);a.position.y=-.18,e.add(a);const c=new Jt(.08,.04,.02),l=new F(c,n);l.position.set(.04,-.25,0),e.add(l);const h=new F(c,n);h.position.set(.04,-.32,0),e.add(h),e.position.copy(t.position),t.mesh=e,this.scene.add(e),t.light=new Ke(16755268,1,5),t.light.position.copy(t.position),this.scene.add(t.light);const u=t.position.y,d=()=>{t.collected||(requestAnimationFrame(d),t.mesh.position.y=u+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.015,t.light.position.y=t.mesh.position.y,t.light.intensity=.8+Math.sin(Date.now()*.004)*.3)};d()}_createGenericVisual(t){const e=new xs(.15),i=new _t({color:11184895,emissive:4474026,emissiveIntensity:.5});t.mesh=new F(e,i),t.mesh.position.copy(t.position),this.scene.add(t.mesh);const n=t.position.y,s=()=>{t.collected||(requestAnimationFrame(s),t.mesh.position.y=n+Math.sin(Date.now()*.003)*.1,t.mesh.rotation.y+=.02,t.mesh.rotation.x+=.01)};s()}_createBossRemnantVisual(t){const e=new ce(.4,24,24),i=new _t({color:16768358,emissive:16755234,emissiveIntensity:1.2,transparent:!0,opacity:.95});t.mesh=new F(e,i),t.mesh.position.copy(t.position),t.mesh.castShadow=!0,this.scene.add(t.mesh);const n=new ce(.2,16,16),s=new Gt({color:16777215,transparent:!0,opacity:.9}),o=new F(n,s);t.mesh.add(o),t.light=new Ke(16768358,2.5,8),t.light.position.copy(t.position),this.scene.add(t.light);const a=t.position.y,c=()=>{if(t.collected)return;requestAnimationFrame(c);const l=Date.now()*.002;t.mesh.position.y=a+Math.sin(l)*.2,t.mesh.rotation.y+=.025;const h=1+Math.sin(l*2)*.08;t.mesh.scale.setScalar(h),t.light.position.y=t.mesh.position.y,t.light.intensity=2+Math.sin(l*2)*.8};c()}_createBossWeaponVisual(t){const e=new Kt,i=t.itemDef||ya.CRYPT_LORDS_GREATSWORD,n=new Jt(.12,1.2,.03),s=new _t({color:5592422,emissive:i.color,emissiveIntensity:.4,metalness:.9,roughness:.2}),o=new F(n,s);o.position.y=.6,e.add(o);const a=new Jt(.02,.8,.04),c=new Gt({color:i.lightColor,transparent:!0,opacity:.9}),l=new F(a,c);l.position.set(.03,.5,0),l.rotation.z=.15,e.add(l);const h=new F(a,c);h.position.set(-.02,.7,0),h.rotation.z=-.1,e.add(h);const u=new Jt(.35,.06,.06),d=new _t({color:3355460,metalness:.8,roughness:.3}),f=new F(u,d);f.position.y=0,e.add(f);const g=new re(.03,.035,.3,8),_=new _t({color:4465186,roughness:.8}),m=new F(g,_);m.position.y=-.18,e.add(m);const p=new ce(.05,8,8),x=new _t({color:i.color,emissive:i.color,emissiveIntensity:.6}),v=new F(p,x);v.position.y=-.35,e.add(v),e.position.copy(t.position),e.rotation.z=Math.PI/6,t.mesh=e,this.scene.add(e),t.light=new Ke(i.lightColor,1.5,6),t.light.position.copy(t.position),this.scene.add(t.light);const y=t.position.y,w=()=>{if(t.collected)return;requestAnimationFrame(w);const E=Date.now()*.001;t.mesh.position.y=y+Math.sin(E*2)*.12,t.mesh.rotation.y+=.015;const C=.6+Math.sin(E*4)*.3;c.opacity=C,t.light.position.y=t.mesh.position.y,t.light.intensity=1.2+Math.sin(E*3)*.5};w()}_createBossUpgradeVisual(t){const e=t.itemDef||ya.LORD_SOUL_FRAGMENT,i=new Kt,n=new xs(.25),s=new _t({color:e.color,emissive:e.color,emissiveIntensity:1,transparent:!0,opacity:.85,metalness:.3,roughness:.1}),o=new F(n,s);i.add(o);const a=5,c=[];for(let u=0;u<a;u++){const d=new ce(.04,8,8),f=new Gt({color:16777215,transparent:!0,opacity:.8}),g=new F(d,f);g.userData.orbitAngle=Math.PI*2*u/a,g.userData.orbitRadius=.35+Math.random()*.1,g.userData.orbitSpeed=2+Math.random(),c.push(g),i.add(g)}i.position.copy(t.position),t.mesh=i,this.scene.add(i),t.light=new Ke(e.lightColor,2,7),t.light.position.copy(t.position),this.scene.add(t.light);const l=t.position.y,h=()=>{if(t.collected)return;requestAnimationFrame(h);const u=Date.now()*.001;t.mesh.position.y=l+Math.sin(u*1.5)*.15,o.rotation.y+=.02,o.rotation.x=Math.sin(u)*.2,c.forEach(d=>{const f=d.userData.orbitAngle+u*d.userData.orbitSpeed;d.position.x=Math.cos(f)*d.userData.orbitRadius,d.position.z=Math.sin(f)*d.userData.orbitRadius,d.position.y=Math.sin(f*2)*.1}),t.light.position.y=t.mesh.position.y,t.light.intensity=1.5+Math.sin(u*2)*.7};h()}spawnBossRewards(t,e,i,n){if(this.bossesDefeated.has(e))return;this.bossesDefeated.add(e);const s=t.clone();s.y+=.5,this.spawnItem(s,"boss_remnant",{value:i,name:`${i} Remnant`});const o=t.clone();o.x+=.8,o.y+=.8;const a=n.type==="weapon"?"boss_weapon":"boss_upgrade";this.spawnItem(o,a,{itemDef:n,name:n.name,description:n.description})}showVictoryNotification(t){let e=this.victoryNotificationEl;e||(e=document.getElementById("victory-notification")),e||(e=document.createElement("div"),e.id="victory-notification-temp",e.style.cssText=`
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
      `,document.body.appendChild(e)),e.innerHTML=`<span style="display:block;font-size:0.4em;color:#aaa;margin-bottom:0.3em">GREAT FOE VANQUISHED</span>${t}`,e.style.opacity="0",setTimeout(()=>{e.style.opacity="1"},100),setTimeout(()=>{e.style.opacity="0"},4500),e.id==="victory-notification-temp"&&setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},6e3)}update(t){for(const i of this.items){if(i.collected)continue;t.distanceTo(i.position)<1.5&&this.collectItem(i)}}collectItem(t){if(t.collected)return;t.collected=!0,t.mesh&&this.scene.remove(t.mesh),t.light&&this.scene.remove(t.light),this.gm.audioManager&&this.gm.audioManager.play("itemPickup",{position:t.position,volume:.6});let e="";switch(t.type){case"remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`;break;case"boss_remnant":this.gm.addRemnant(t.value),e=`+${t.value} Remnant`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:.8});break;case"key":this.inventory.keys.add(t.keyId),e=`Got ${t.name}`;break;case"boss_weapon":this.inventory.weapons.push(t.itemDef||t),e=`Obtained: ${t.name}`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:1});break;case"boss_upgrade":this.inventory.upgrades.push(t.itemDef||t),e=`Obtained: ${t.name}`,this.gm.audioManager&&this.gm.audioManager.play("menuConfirm",{volume:1});break;default:e="Item collected"}this.showNotification(e)}showNotification(t){this.notificationEl&&(this.notificationEl.textContent=t,this.notificationEl.classList.add("visible"),setTimeout(()=>{this.notificationEl.classList.remove("visible")},2e3))}hasKey(t){return this.inventory.keys.has(t)}resetItems(){}}const z={IDLE:"idle",PATROL:"patrol",CHASE:"chase",CIRCLE:"circle",RETREAT:"retreat",FLANK:"flank",ATTACK:"attack",STAGGERED:"staggered",DEAD:"dead",DORMANT:"dormant",RISING:"rising",BOSS_SLAM:"boss_slam",BOSS_SWEEP:"boss_sweep",BOSS_COMBO:"boss_combo",BOSS_CHARGE:"boss_charge",BOSS_GRAB:"boss_grab",BOSS_TRANSITION:"boss_transition",BOSS_SUMMON:"boss_summon",BOSS_AOE:"boss_aoe",BOSS_PROJECTILE:"boss_projectile"},ge={NORMAL:"normal",QUICK_JAB:"quick_jab",HEAVY:"heavy",COMBO:"combo"},vr={[ge.NORMAL]:{windupMult:1,damageMult:1,postureMult:1,cooldownMult:1,rangeMult:1,tell:"normal"},[ge.QUICK_JAB]:{windupMult:.5,damageMult:.6,postureMult:.5,cooldownMult:.7,rangeMult:.85,tell:"jab"},[ge.HEAVY]:{windupMult:1.8,damageMult:1.6,postureMult:2,cooldownMult:1.5,rangeMult:1.2,tell:"heavy"},[ge.COMBO]:{windupMult:.7,damageMult:.5,postureMult:.6,cooldownMult:.4,rangeMult:1,tell:"combo"}},Ov={[z.IDLE]:"Idle",[z.PATROL]:"Walking",[z.CHASE]:"Running",[z.CIRCLE]:"Walking",[z.RETREAT]:"Walking",[z.FLANK]:"Walking",[z.ATTACK]:"Punch",[z.STAGGERED]:"No",[z.DEAD]:"Death",[z.DORMANT]:"Idle",[z.RISING]:"ThumbsUp",[z.BOSS_SLAM]:"Punch",[z.BOSS_SWEEP]:"Punch",[z.BOSS_COMBO]:"Punch",[z.BOSS_CHARGE]:"Running",[z.BOSS_GRAB]:"Punch",[z.BOSS_TRANSITION]:"No",[z.BOSS_SUMMON]:"ThumbsUp",[z.BOSS_AOE]:"Punch",[z.BOSS_PROJECTILE]:"Punch"},Ma={HOLLOW_SOLDIER:{name:"Hollow Soldier",health:50,damage:15,postureDmg:15,moveSpeed:2.5,detectionRange:10,attackRange:2.2,attackCooldown:1.5,attackWindup:.5,attackDuration:.2,remnantDrop:40,patrolRadius:3,bodyColor:4860458,eyeColor:16724787,canChainAttacks:!1,maxPosture:60,hasShield:!1,canRetreat:!1,attackVariety:{enabled:!0,heavyChance:.2,quickJabChance:.3,comboEnabled:!1},modelPath:"assets/models/robot_expressive.glb",modelScale:.5,modelTint:4872762,animSpeedMult:1},BERSERKER:{name:"Berserker",health:35,damage:20,postureDmg:10,moveSpeed:4,detectionRange:12,attackRange:2,attackCooldown:.8,attackWindup:.3,attackDuration:.15,remnantDrop:60,patrolRadius:5,bodyColor:6693410,eyeColor:16737792,canChainAttacks:!0,maxChainAttacks:3,maxPosture:40,hasShield:!1,canRetreat:!1,canFlank:!0,attackVariety:{enabled:!0,heavyChance:.05,quickJabChance:.5,comboEnabled:!0,comboChance:.4,maxComboHits:3},modelPath:"assets/models/robot_expressive.glb",modelScale:.55,modelTint:9052706,animSpeedMult:1.5},SENTINEL:{name:"Sentinel",health:100,damage:30,postureDmg:25,moveSpeed:1.5,detectionRange:8,attackRange:2.5,attackCooldown:2.5,attackWindup:.8,attackDuration:.3,remnantDrop:100,patrolRadius:2,bodyColor:3355460,eyeColor:4474111,canChainAttacks:!1,maxPosture:100,hasShield:!0,shieldBlockChance:.4,canRetreat:!1,attackVariety:{enabled:!0,heavyChance:.6,quickJabChance:.15,comboEnabled:!1},modelPath:"assets/models/soldier.glb",modelScale:.9,modelTint:3816026,animSpeedMult:.8},CRYPT_GUARDIAN:{name:"Crypt Guardian",health:200,damage:40,postureDmg:30,moveSpeed:1.8,detectionRange:12,attackRange:3,attackCooldown:2,attackWindup:.6,attackDuration:.4,remnantDrop:500,patrolRadius:3,bodyColor:1710634,eyeColor:16720418,canChainAttacks:!0,maxChainAttacks:2,maxPosture:150,hasShield:!1,isElite:!0,canRetreat:!1,attackVariety:{enabled:!0,heavyChance:.35,quickJabChance:.25,comboEnabled:!0,comboChance:.35,maxComboHits:2},modelPath:"assets/models/soldier.glb",modelScale:1.2,modelTint:2759226,animSpeedMult:.9},BONE_REVENANT:{name:"Bone Revenant",health:40,damage:18,postureDmg:12,moveSpeed:3.5,detectionRange:8,attackRange:2,attackCooldown:.9,attackWindup:.25,attackDuration:.15,remnantDrop:70,patrolRadius:4,bodyColor:9075290,eyeColor:4521796,canChainAttacks:!0,maxChainAttacks:2,maxPosture:45,hasShield:!1,isAmbush:!0,canRetreat:!0,retreatHealthThreshold:.25,retreatDistance:12,canFlank:!0,attackVariety:{enabled:!0,heavyChance:.1,quickJabChance:.55,comboEnabled:!0,comboChance:.3,maxComboHits:2},modelPath:"assets/models/robot_expressive.glb",modelScale:.45,modelTint:9075290,animSpeedMult:1.4},CRYPT_LORD:{name:"The Crypt Lord",health:600,damage:45,postureDmg:35,moveSpeed:2,detectionRange:20,attackRange:3.5,attackCooldown:1.8,attackWindup:.8,attackDuration:.3,remnantDrop:2500,patrolRadius:3,bodyColor:1710634,eyeColor:16720418,canChainAttacks:!0,maxChainAttacks:3,maxPosture:200,hasShield:!1,isBoss:!0,isElite:!0,bossPhase:1,attacks:{GREATSWORD_SLAM:{damage:55,postureDmg:40,windup:.8,recovery:1.5,range:4},HORIZONTAL_SWEEP:{damage:45,postureDmg:35,windup:.6,recovery:1,range:4.5},THREE_HIT_COMBO:{damages:[35,35,50],postureDmg:25,windup:.4,recovery:2,range:3.5},SHOULDER_BASH:{damage:30,postureDmg:45,windup:.5,recovery:1.2,range:6,isCharge:!0},GRAB:{damage:80,postureDmg:0,windup:1,recovery:2.5,range:2.5,isGrab:!0},SKELETON_SUMMON:{windup:1.2,recovery:1.5,summonCount:2},GROUND_SLAM_AOE:{damage:50,postureDmg:60,windup:1,recovery:2,range:8,jumpHeight:3},DARK_PROJECTILE:{damage:40,windup:.6,recovery:.8,speed:8,trackingStrength:3}},modelPath:"assets/models/soldier.glb",modelScale:1.5,modelTint:2759226,animSpeedMult:.85}};class Sa{constructor(t,e,i={},n=null){this.scene=t,this.gm=n;const s=i.type?Ma[i.type]:{};this.config={...Ma.HOLLOW_SOLDIER,...s,...i},this.maxHealth=this.config.health,this.health=this.maxHealth,this.maxPosture=this.config.maxPosture||60,this.posture=0,this.isDormant=this.config.behavior==="ambush"||this.config.isAmbush,this.triggerZone=this.config.triggerZone||null,this.triggerRadius=this.config.triggerRadius||6,this.state=this.isDormant?z.DORMANT:z.IDLE,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.isBlocking=!1,this.isDead=!1,this.chainAttackCount=0,this.lastAttackTime=0,this.circleDirection=Math.random()>.5?1:-1,this.circleTimer=0,this.spawnPos=e.clone(),this.patrolTarget=e.clone(),this.patrolWait=0,this.modelLoaded=!1,this.animSystem=null,this.currentAnim=null,this.gltfModel=null,this.mesh=new Kt,this.mesh.position.copy(e),this._createFallbackMesh(),this._createHealthBar(2.1),t.add(this.mesh),this.isDormant&&(this.mesh.visible=!1),this._loadGLTFModel(),this.world=null,this.collisionRadius=.5,this.lastPosition=e.clone(),this.stuckTimer=0,this.stuckThreshold=2,this.unstuckAttempts=0,this.avoidanceDir=null,this.avoidanceTimer=0,this.canRetreat=this.config.canRetreat||!1,this.retreatHealthThreshold=this.config.retreatHealthThreshold||.25,this.retreatDistance=this.config.retreatDistance||12,this.retreatReengageThreshold=.4,this.retreatStartPos=null,this.isRetreating=!1,this.retreatWallHits=0,this.canFlank=this.config.canFlank||!1,this.flankCooldown=5,this.lastFlankTime=-this.flankCooldown,this.flankTarget=null,this.isFlankAssigned=!1,this.flankDirection=1,this.flankProgress=0,this.groupId=null,this.isGroupLeader=!1,this.groupJoinDelay=0,this.isWaitingToJoin=!1,this.groupConfusionTimer=0,this.isConfused=!1,this.attackQueuePosition=-1,this.canAttackInGroup=!0,this.lastGroupAttackTime=0,this.groupEngageTime=0;const o=this.config.attackVariety||{};this.attackVarietyEnabled=o.enabled||!1,this.currentAttackType=ge.NORMAL,this.lastAttackType=null,this.attackTypeCooldowns={[ge.HEAVY]:0,[ge.QUICK_JAB]:0,[ge.COMBO]:0},this.playerLastPos=null,this.playerMoveSpeed=0,this.comboHitsRemaining=0,this.attackTellActive=!1,this.attackTellStartTime=0,this.config.isBoss&&(this.isBoss=!0,this.bossPhase=this.config.bossPhase||1,this.bossActive=!1,this.currentBossAttack=null,this.bossComboHit=0,this.lastBossAttackTime=0,this.bossAttackCooldown=0,this.chargeTarget=null,this.chargeProgress=0,this.grabTarget=null,this.world=null,this.enemyManager=null,this.activeProjectiles=[],this.summonedAdds=[],this.lastSummonTime=0,this.summonCooldown=15e3,this.aoeJumpProgress=0,this.aoeStartY=0,this._createHealthBar(3.5))}wake(){this.state===z.DORMANT&&(this.mesh.visible=!0,this.isDormant=!1,this._changeState(z.RISING),this.gm?.audioManager&&this.gm.audioManager.play("ambush",{position:this.mesh.position,volume:.7}))}checkTrigger(t){if(this.state!==z.DORMANT)return!1;const e=t.x-this.mesh.position.x,i=t.z-this.mesh.position.z;return Math.sqrt(e*e+i*i)<this.triggerRadius}_createFallbackMesh(){const t=new _t({color:this.config.bodyColor,roughness:.7,metalness:.2}),e=new gn(.3,.5,8,16);this.fallbackBody=new F(e,t),this.fallbackBody.position.y=1,this.fallbackBody.castShadow=!0,this.mesh.add(this.fallbackBody);const i=new _t({color:this.config.eyeColor,emissive:this.config.eyeColor,emissiveIntensity:4}),n=new ce(.08,8,8);this.eye=new F(n,i),this.eye.position.set(0,1.5,.25),this.mesh.add(this.eye),this.body=this.fallbackBody}async _loadGLTFModel(){try{const t="/project-ashen/",e=this.config.modelPath||"assets/models/robot_expressive.glb",i=`${t}${e}`,n=this.config.modelScale||.5,{scene:s,animations:o}=await fo.loadModel(i,{scale:n});this.gltfModel=s,this.gltfModel.position.y=0,this.gltfModel.rotation.y=Math.PI,this.config.modelTint&&this._applyModelTint(this.config.modelTint),this.gltfModel.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.userData.originalMaterial=a.material.clone())}),this.fallbackBody&&(this.fallbackBody.visible=!1),this.mesh.add(this.gltfModel),o&&o.length>0&&(this.animSystem=fo.createAnimationSystem(this.gltfModel,o),this._playAnimation(this.state,{loop:!0})),this.modelLoaded=!0,this.body=this.gltfModel}catch(t){console.error(`[Enemy:${this.config.name}] Failed to load GLTF:`,t)}}_applyModelTint(t){const e=new Mt(t);this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.color&&s.color.lerp(e,.3),s.emissive&&(s.emissive.copy(e).multiplyScalar(.1),s.emissiveIntensity=.2)})})}_playAnimation(t,e={}){if(!this.animSystem)return;const i=Ov[t];if(!i||this.currentAnim===i&&t!==z.ATTACK)return;const n=this.config.animSpeedMult||1,s={loop:t===z.IDLE||t===z.PATROL||t===z.CHASE||t===z.CIRCLE||t===z.RETREAT,fadeIn:.2,timeScale:n,clampWhenFinished:t===z.DEAD};t===z.ATTACK?(s.loop=!1,s.timeScale=n*1.2):t===z.CHASE&&(s.timeScale=n*1.3);const o={...s,...e};this.currentAnim?this.animSystem.crossFade(this.currentAnim,i,o.fadeIn):this.animSystem.play(i,o),this.currentAnim=i}_createHealthBar(t){this.healthBarGroup=new Kt,this.healthBarGroup.position.y=t;const e=new We(1,.08),i=new Gt({color:1118481,side:pe}),n=new F(e,i);this.healthBarGroup.add(n);const s=new We(.98,.06),o=new Gt({color:13382451,side:pe});this.healthFill=new F(s,o),this.healthFill.position.z=.001,this.healthBarGroup.add(this.healthFill);const a=new We(1,.04),c=new Gt({color:2236945,side:pe}),l=new F(a,c);l.position.y=-.08,this.healthBarGroup.add(l);const h=new We(.98,.03),u=new Gt({color:16763904,side:pe});this.postureFill=new F(h,u),this.postureFill.position.set(0,-.08,.001),this.postureFill.scale.x=0,this.healthBarGroup.add(this.postureFill),this.mesh.add(this.healthBarGroup),this.healthBarGroup.visible=!1,this.breakIndicator=this._createBreakIndicator(),this.breakIndicator.visible=!1,this.mesh.add(this.breakIndicator)}_createBreakIndicator(){const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.fillStyle="#ffcc00",e.font="bold 32px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("BREAK!",64,32);const i=new uu(t),n=new au({map:i,transparent:!0,depthTest:!1}),s=new yf(n);return s.scale.set(1.5,.75,1),s.position.y=3,s}update(t,e){if(this.state===z.DEAD)return;this.animSystem&&this.animSystem.update(t),this.stateTimer+=t;const i=this.mesh.position.distanceTo(e.mesh.position),n=this.health/this.maxHealth;if(this.healthBarGroup.visible){const s=this.scene.getObjectByProperty("type","PerspectiveCamera");s&&this.healthBarGroup.lookAt(s.position)}switch(this.config.hasShield&&this.state===z.CHASE&&i<this.config.attackRange*1.5?this.isBlocking=Math.random()<this.config.shieldBlockChance:this.isBlocking=!1,this.state){case z.IDLE:this.patrolWait+=t,i<this.config.detectionRange?(this._changeState(z.CHASE),this.healthBarGroup.visible=!0):this.patrolWait>2&&(this.patrolWait=0,this._pickPatrolTarget(),this._changeState(z.PATROL));break;case z.PATROL:if(i<this.config.detectionRange){this._changeState(z.CHASE),this.healthBarGroup.visible=!0;break}this._moveToward(this.patrolTarget,this.config.moveSpeed*.5,t),this.mesh.position.distanceTo(this.patrolTarget)<.5&&this._changeState(z.IDLE);break;case z.CHASE:if(this.isBoss&&!this.bossActive&&(this.bossActive=!0,this.healthBarGroup.visible=!0,this.world&&this.world.activateBossArena&&this.world.activateBossArena(),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.9})),this.isBoss&&(this.playerTarget=e.mesh.position.clone()),!this.isBoss&&i>this.config.detectionRange*1.5){this._changeState(z.IDLE),this.healthBarGroup.visible=!1,this._resetGroupState();break}if(!this.isBoss&&this.isWaitingToJoin)if(this.groupJoinDelay-=t,this.groupJoinDelay<=0)this.isWaitingToJoin=!1,this.groupEngageTime=Date.now();else{this._moveToward(e.mesh.position,this.config.moveSpeed*.4,t),this._faceTarget(e.mesh.position,t);break}if(!this.isBoss&&this.isConfused)if(this.groupConfusionTimer-=t,this.groupConfusionTimer<=0)this.isConfused=!1,this.groupConfusionTimer=0;else{const p=Math.sin(this.stateTimer*8)*.5;this.mesh.rotation.y+=p*t;break}if(!this.isBoss&&this.canRetreat&&n<this.retreatHealthThreshold&&!this.isRetreating){this.retreatStartPos=this.mesh.position.clone(),this.isRetreating=!0,this.retreatWallHits=0,this._changeState(z.RETREAT);break}if(!this.isBoss&&this.canFlank&&this.isFlankAssigned&&this.stateTimer+Date.now()/1e3-this.lastFlankTime>=this.flankCooldown){this._calculateFlankTarget(e.mesh.position),this.flankProgress=0,this._changeState(z.FLANK);break}if(i<=this.config.attackRange&&this.bossAttackCooldown<=0){if(this.isBoss)this._selectBossAttack(i,n);else{if(this.groupId!==null&&!this.canAttackInGroup){this._changeState(z.CIRCLE);break}this.lastGroupAttackTime=Date.now(),this._changeState(z.ATTACK)}break}if(this.isBoss&&i>this.config.attackRange&&i<8&&this.bossAttackCooldown<=0&&Math.random()<.02){this._startBossCharge(e);break}if(i<this.config.attackRange*2&&Math.random()<.005){this._changeState(z.CIRCLE);break}this._moveToward(e.mesh.position,this.config.moveSpeed,t),this._faceTarget(e.mesh.position,t);break;case z.CIRCLE:if(this.circleTimer+=t,this.circleTimer>1.5||i>this.config.detectionRange){this._changeState(z.CHASE);break}if(i<=this.config.attackRange){this._changeState(z.ATTACK);break}this._circleStrafe(e.mesh.position,t),this._faceTarget(e.mesh.position,t);break;case z.FLANK:if(this.flankProgress+=t,this.flankProgress>3){this._endFlankManeuver(!1),this._changeState(z.CHASE);break}if(i>this.config.detectionRange*1.5){this._endFlankManeuver(!1),this._changeState(z.IDLE),this.healthBarGroup.visible=!1;break}if(this.flankProgress%.5<t&&this._calculateFlankTarget(e.mesh.position),(this.flankTarget?this.mesh.position.distanceTo(this.flankTarget):1/0)<1.5||i<=this.config.attackRange){this._endFlankManeuver(!0),this._changeState(z.ATTACK);break}const o=this.mesh.position.clone();if(this._moveToward(this.flankTarget,this.config.moveSpeed*1.1,t),this.mesh.position.distanceTo(o)<this.config.moveSpeed*.5*t){this._endFlankManeuver(!1),this._changeState(z.CHASE);break}this.flankTarget&&this._faceTarget(this.flankTarget,t);break;case z.RETREAT:const c=this.retreatStartPos?this.mesh.position.distanceTo(this.retreatStartPos):0,l=n>=this.retreatReengageThreshold,h=c>=this.retreatDistance,u=this.retreatWallHits>=3,d=i>this.config.detectionRange*1.5;if(h||l||u||d){this.isRetreating=!1,this.retreatStartPos=null,this.retreatWallHits=0,d?(this._changeState(z.IDLE),this.healthBarGroup.visible=!1):this._changeState(z.CHASE);break}const f=new b().subVectors(this.mesh.position,e.mesh.position);f.y=0,f.normalize();const g=this.mesh.position.clone().add(f.multiplyScalar(3)),_=this.mesh.position.clone();if(this._moveToward(g,this.config.moveSpeed*.7,t),this.mesh.position.distanceTo(_)<this.config.moveSpeed*.7*t*.5){this.retreatWallHits++;const p=new b(-f.z,0,f.x),x=this.retreatWallHits%2===0?p:p.negate(),v=this.mesh.position.clone().add(x.multiplyScalar(2));this._moveToward(v,this.config.moveSpeed*.5,t)}this._faceTarget(e.mesh.position,t);break;case z.ATTACK:this._processAttack(t,e);break;case z.STAGGERED:this.gltfModel?this.gltfModel.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5):this.fallbackBody&&(this.fallbackBody.rotation.z=Math.sin(this.stateTimer*15)*.1*(1-this.stateTimer/1.5)),this.stateTimer>=1.5&&(this.posture=0,this.gltfModel&&(this.gltfModel.rotation.z=0),this.fallbackBody&&(this.fallbackBody.rotation.z=0),this.breakIndicator.visible=!1,this._updatePostureBar(),this._changeState(i<this.config.detectionRange?z.CHASE:z.IDLE));break;case z.DORMANT:break;case z.RISING:if(this.stateTimer<.5){const p=this.gltfModel||this.fallbackBody;if(p){const x=this.stateTimer/.5;p.position.y=ie.lerp(-.8,0,x)}}else if(this.stateTimer>=.8){const p=this.gltfModel||this.fallbackBody;p&&(p.position.y=0),this.healthBarGroup.visible=!0,this._changeState(z.CHASE)}this._faceTarget(e.mesh.position,t*2);break;case z.BOSS_SLAM:this._processBossSlamAttack(t,e);break;case z.BOSS_SWEEP:this._processBossSweepAttack(t,e);break;case z.BOSS_COMBO:this._processBossComboAttack(t,e);break;case z.BOSS_CHARGE:this._processBossChargeAttack(t,e);break;case z.BOSS_GRAB:this._processBossGrabAttack(t,e);break;case z.BOSS_TRANSITION:break;case z.BOSS_SUMMON:this._processBossSummonAttack(t,e);break;case z.BOSS_AOE:this._processBossAOEAttack(t,e);break;case z.BOSS_PROJECTILE:this._processBossProjectileAttack(t,e);break}this.isBoss&&this.activeProjectiles&&this._updateProjectiles(t,e),this.state!==z.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-8*t),this._updatePostureBar()),this.isBoss&&this.bossAttackCooldown>0&&(this.bossAttackCooldown-=t),(!this.isBoss||this.state===z.CHASE||this.state===z.PATROL)&&(this.state===z.CHASE||this.state===z.PATROL||this.state===z.RETREAT||this.state===z.CIRCLE)&&this._checkStuck(t)}_circleStrafe(t,e){const i=new b().subVectors(t,this.mesh.position);i.y=0;const n=i.length();i.normalize();const s=new b(-i.z,0,i.x).multiplyScalar(this.circleDirection),o=this.config.attackRange*1.5,a=new b().copy(i).multiplyScalar((n-o)*.5),c=s.add(a).normalize(),l=this.config.moveSpeed*.7*e,h=this.mesh.position.clone().addScaledVector(c,l);this.world&&this.world.checkCollision?this.world.checkCollision(h,this.collisionRadius).collides?this.circleDirection*=-1:this.mesh.position.copy(h):this.mesh.position.addScaledVector(c,l)}_calculateFlankTarget(t){const e=new b().subVectors(this.mesh.position,t);e.y=0,e.length(),e.normalize();const i=new b(-e.z*this.flankDirection,0,e.x*this.flankDirection),n=this.config.attackRange*1.2;this.flankTarget=new b(t.x+i.x*n,this.mesh.position.y,t.z+i.z*n);const s=new b().subVectors(t,this.flankTarget);s.y=0,s.normalize(),this.flankTarget.addScaledVector(s,n*.3)}_endFlankManeuver(t){this.isFlankAssigned=!1,this.flankTarget=null,this.flankProgress=0,t?this.lastFlankTime=Date.now()/1e3:(this.lastFlankTime=Date.now()/1e3-this.flankCooldown*.5,this.flankDirection*=-1)}requestFlank(){return!this.canFlank||this.state===z.DEAD||this.state===z.STAGGERED||this.state===z.FLANK||this.isRetreating||Date.now()/1e3-this.lastFlankTime<this.flankCooldown?!1:(this.isFlankAssigned=!0,this.flankDirection=Math.random()>.5?1:-1,!0)}_resetGroupState(){this.groupId=null,this.isGroupLeader=!1,this.groupJoinDelay=0,this.isWaitingToJoin=!1,this.groupConfusionTimer=0,this.isConfused=!1,this.attackQueuePosition=-1,this.canAttackInGroup=!0,this.groupEngageTime=0}joinGroup(t,e,i=0){this.groupId=t,this.isGroupLeader=e,e?(this.groupJoinDelay=0,this.isWaitingToJoin=!1,this.groupEngageTime=Date.now()):(this.groupJoinDelay=i,this.isWaitingToJoin=i>0,this.groupEngageTime=0)}triggerConfusion(t=1){this.isBoss||this.state!==z.DEAD&&(this.isConfused=!0,this.groupConfusionTimer=t,this.isGroupLeader=!1)}isAttacking(){return this.state===z.ATTACK||this.state===z.BOSS_SLAM||this.state===z.BOSS_SWEEP||this.state===z.BOSS_COMBO||this.state===z.BOSS_CHARGE||this.state===z.BOSS_GRAB||this.state===z.BOSS_AOE||this.state===z.BOSS_PROJECTILE}isInCombat(){return this.state===z.CHASE||this.state===z.CIRCLE||this.state===z.FLANK||this.state===z.ATTACK||this.isAttacking()}_selectBossAttack(t,e){const i=this.config.attacks;if(!i){this._changeState(z.ATTACK);return}if(this.bossPhase===2){this._selectPhase2Attack(t);return}const n=Math.random();t<=this.config.attackRange&&(n<.1&&i.GRAB?this._changeState(z.BOSS_GRAB):n<.35?this._changeState(z.BOSS_SLAM):n<.65?this._changeState(z.BOSS_COMBO):this._changeState(z.BOSS_SWEEP))}_selectPhase2Attack(t){this.config.attacks;const e=Math.random(),i=Date.now()-this.lastSummonTime>this.summonCooldown,n=this.summonedAdds.filter(s=>!s.isDead).length;if(i&&n===0&&e<.25){this._changeState(z.BOSS_SUMMON);return}if(t>this.config.attackRange&&t<10){if(e<.4)this._changeState(z.BOSS_PROJECTILE);else if(e<.7)this._changeState(z.BOSS_AOE);else if(e<.85)this.chargeTarget=this.playerTarget?this.playerTarget.clone():this.mesh.position.clone(),this.chargeProgress=0,this._changeState(z.BOSS_CHARGE);else return;return}t<=this.config.attackRange&&(e<.15?this._changeState(z.BOSS_AOE):e<.25?this._changeState(z.BOSS_PROJECTILE):e<.4?this._changeState(z.BOSS_SLAM):e<.6?this._changeState(z.BOSS_COMBO):e<.8?this._changeState(z.BOSS_SWEEP):e<.95?this._changeState(z.BOSS_GRAB):i&&n<3?this._changeState(z.BOSS_SUMMON):this._changeState(z.BOSS_SLAM))}_startBossCharge(t){this.chargeTarget=t.mesh.position.clone(),this.chargeProgress=0,this._changeState(z.BOSS_CHARGE)}_processBossSlamAttack(t,e){const i=this.config.attacks?.GREATSWORD_SLAM;if(!i){this._changeState(z.CHASE);return}const n=i.windup,s=n+.3,o=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.x=a*-.3);return}if(this.stateTimer>=n&&this.stateTimer<s){if(!this.hitThisSwing){const c=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(1.5)).add(new b(0,1.5,0)),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.8,pitch:.6})}const a=this.gltfModel||this.fallbackBody;if(a){const c=(this.stateTimer-n)/.3;a.rotation.x=ie.lerp(-.3,.2,c)}}if(this.stateTimer>=s&&this.stateTimer<o){this.activeAttack=null;const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.x=ie.lerp(a.rotation.x,0,.08))}this.stateTimer>=o&&this._endBossAttack()}_processBossSweepAttack(t,e){const i=this.config.attacks?.HORIZONTAL_SWEEP;if(!i){this._changeState(z.CHASE);return}const n=i.windup,s=n+.25,o=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.z=a*.3);return}if(this.stateTimer>=n&&this.stateTimer<s){this.hitThisSwing||(this.activeAttack={position:this.mesh.position.clone().add(new b(0,1.2,0)),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!1},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.7}));const a=this.gltfModel||this.fallbackBody;if(a){const c=(this.stateTimer-n)/.25;a.rotation.z=ie.lerp(.3,-.25,c)}}if(this.stateTimer>=s&&this.stateTimer<o){this.activeAttack=null;const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.z=ie.lerp(a.rotation.z,0,.1))}this.stateTimer>=o&&this._endBossAttack()}_processBossComboAttack(t,e){const i=this.config.attacks?.THREE_HIT_COMBO;if(!i){this._changeState(z.CHASE);return}const n=i.windup,s=.3,o=n+s,a=.15,c=this.bossComboHit||0,l=c*(o+a),h=this.stateTimer-l;if(h<n){this._faceTarget(e.mesh.position,t*3);const u=h/n,d=this.gltfModel||this.fallbackBody;if(d){const f=c%2===0?1:-1;d.rotation.z=u*.25*f}return}if(h>=n&&h<o){if(!this.hitThisSwing){const f=(i.damages||[35,35,50])[c]||i.damage;this.activeAttack={position:this.mesh.position.clone().add(new b(0,1.2,0)),range:i.range,damage:f,postureDmg:i.postureDmg,isHeavy:c===2,isCombo:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.65,pitch:.85+c*.1}),this.hitThisSwing=!0}const u=this.gltfModel||this.fallbackBody;if(u){const d=(h-n)/s,f=c%2===0?1:-1;u.rotation.z=ie.lerp(.25*f,-.2*f,d)}}if(h>=o){this.activeAttack=null,this.hitThisSwing=!1;const u=this.mesh.position.distanceTo(e.mesh.position);if(c<2&&u<this.config.attackRange*1.3){this.bossComboHit=c+1;const d=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.mesh.position.addScaledVector(d,.5)}else{const d=this.gltfModel||this.fallbackBody;d&&(d.rotation.z=0),h>=o+i.recovery&&(this.bossComboHit=0,this._endBossAttack())}}}_processBossChargeAttack(t,e){const i=this.config.attacks?.SHOULDER_BASH;if(!i){this._changeState(z.CHASE);return}const n=i.windup,s=.4,o=n+s,a=o+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2),this.chargeTarget=e.mesh.position.clone();const c=this.stateTimer/n,l=this.gltfModel||this.fallbackBody;l&&(l.position.y=-c*.3,l.rotation.x=c*.2);return}if(this.stateTimer>=n&&this.stateTimer<o){this.hitThisSwing||(this.activeAttack={position:this.mesh.position.clone().add(new b(0,1,0)),range:2,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0,isCharge:!0},this.gm?.audioManager&&this.gm.audioManager.play("dash",{position:this.mesh.position,volume:.8}));const c=i.range/s;this._moveToward(this.chargeTarget,c,t),this.activeAttack&&(this.activeAttack.position=this.mesh.position.clone().add(new b(0,1,0)))}if(this.stateTimer>=o&&this.stateTimer<a){this.activeAttack=null;const c=this.gltfModel||this.fallbackBody;c&&(c.position.y=ie.lerp(c.position.y,0,.15),c.rotation.x=ie.lerp(c.rotation.x,0,.15))}this.stateTimer>=a&&this._endBossAttack()}_processBossGrabAttack(t,e){const i=this.config.attacks?.GRAB;if(!i){this._changeState(z.CHASE);return}const n=i.windup,s=n+.3,o=s+.5,a=o+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*1.5);const c=this.stateTimer/n,l=this.gltfModel||this.fallbackBody;l&&(l.scale.x=1+c*.15);return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.mesh.position.distanceTo(e.mesh.position)<i.range&&(this.activeAttack={position:this.mesh.position.clone(),range:i.range,damage:i.damage,postureDmg:0,isGrab:!0,isUnblockable:!0},this.grabTarget=e,this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.9})),this.hitThisSwing=!0)),this.stateTimer>=s&&this.stateTimer<o){this.activeAttack=null;const c=this.gltfModel||this.fallbackBody;c&&(c.scale.x=ie.lerp(c.scale.x,1,.1))}if(this.stateTimer>=o&&this.stateTimer<a){this.grabTarget=null;const c=this.gltfModel||this.fallbackBody;c&&(c.scale.x=1)}this.stateTimer>=a&&this._endBossAttack()}_endBossAttack(){this.hitThisSwing=!1,this.activeAttack=null,this.bossComboHit=0,this.chargeTarget=null,this.grabTarget=null,this.bossAttackCooldown=this.config.attackCooldown;const t=this.gltfModel||this.fallbackBody;t&&(t.rotation.x=0,t.rotation.z=0,t.position.y=0,t.scale.x=1),this._changeState(z.CHASE)}_processBossSummonAttack(t,e){const i=this.config.attacks?.SKELETON_SUMMON;if(!i){this._changeState(z.CHASE);return}const n=i.windup,s=n+.5,o=s+i.recovery;if(this.stateTimer<n){const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.x=-a*.2),this.stateTimer%.2<.1&&this._flashModel(8930508,80),this.stateTimer<.1&&this.gm?.audioManager&&this.gm.audioManager.play("magic",{position:this.mesh.position,volume:.7});return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.hitThisSwing=!0,this.lastSummonTime=Date.now(),this._spawnSkeletonAdds(i.summonCount||2),this._flashModel(16729343,200),this.gm?.audioManager&&this.gm.audioManager.play("ambush",{position:this.mesh.position,volume:.8}),this.gm?.cameraController&&this.gm.cameraController.shakeLight())),this.stateTimer>=s&&this.stateTimer<o){const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.x=ie.lerp(a.rotation.x,0,.1))}this.stateTimer>=o&&this._endBossAttack()}_spawnSkeletonAdds(t){if(!this.enemyManager)return;const e=this.mesh.position,i=5;for(let n=0;n<t;n++){const s=Math.PI*2*n/t+Math.random()*.5,o=new b(e.x+Math.cos(s)*i,e.y,e.z+Math.sin(s)*i),a=new Sa(this.scene,o,{type:"BONE_REVENANT",name:"Summoned Revenant",behavior:"guard"},this.gm);a.mesh.visible=!0,a.isDormant=!1,a.state=z.CHASE,a.healthBarGroup.visible=!0,this.summonedAdds.push(a),this.enemyManager.enemies.push(a);const c=a.gltfModel||a.fallbackBody;if(c){c.position.y=-1;const l=()=>{c.position.y<0&&(c.position.y+=.05,requestAnimationFrame(l))};l()}}}_processBossAOEAttack(t,e){const i=this.config.attacks?.GROUND_SLAM_AOE;if(!i){this._changeState(z.CHASE);return}const n=i.windup,s=n+.4,o=s+.3,a=o+.2,c=a+i.recovery,l=this.gltfModel||this.fallbackBody;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t),this.playerTarget=e.mesh.position.clone();const h=this.stateTimer/n;l&&(l.position.y=-h*.3),this.aoeStartY=this.mesh.position.y;return}if(this.stateTimer>=n&&this.stateTimer<s){const h=(this.stateTimer-n)/.4,u=i.jumpHeight||3,d=Math.sin(h*Math.PI)*u;this.mesh.position.y=this.aoeStartY+d,l&&(l.position.y=0,l.rotation.x=-.3);const f=this.playerTarget||e.mesh.position;this._moveToward(f,8,t);return}if(this.stateTimer>=s&&this.stateTimer<o){const h=(this.stateTimer-s)/.3;this.mesh.position.y=ie.lerp(this.mesh.position.y,this.aoeStartY,h*2),l&&(l.rotation.x=ie.lerp(-.3,.2,h))}this.stateTimer>=o&&this.stateTimer<a&&(this.mesh.position.y=this.aoeStartY,this.hitThisSwing||(this.hitThisSwing=!0,this.activeAttack={position:this.mesh.position.clone(),range:i.range,damage:i.damage,postureDmg:i.postureDmg,isHeavy:!0,isAOE:!0},this._createShockwaveEffect(),this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:1,pitch:.6}),this.gm?.cameraController&&this.gm.cameraController.shake(.5,.4))),this.stateTimer>=a&&this.stateTimer<c&&(this.activeAttack=null,l&&(l.rotation.x=ie.lerp(l.rotation.x,0,.1))),this.stateTimer>=c&&this._endBossAttack()}_createShockwaveEffect(){const t=new Ts(.5,1.5,32),e=new Gt({color:8930508,transparent:!0,opacity:.8,side:pe}),i=new F(t,e);i.rotation.x=-Math.PI/2,i.position.copy(this.mesh.position),i.position.y=.1,this.scene.add(i);const n=this.config.attacks?.GROUND_SLAM_AOE?.range||8,s=Date.now(),o=400,a=()=>{const l=(Date.now()-s)/o;if(l<1){const h=1+l*n;i.scale.set(h,h,1),i.material.opacity=.8*(1-l),requestAnimationFrame(a)}else this.scene.remove(i),i.geometry.dispose(),i.material.dispose()};a()}_processBossProjectileAttack(t,e){const i=this.config.attacks?.DARK_PROJECTILE;if(!i){this._changeState(z.CHASE);return}const n=i.windup,s=n+.2,o=s+i.recovery;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*3);const a=this.stateTimer/n,c=this.gltfModel||this.fallbackBody;c&&(c.rotation.z=a*.15),this.stateTimer%.15<.075&&this._flashModel(6693546,60);return}if(this.stateTimer>=n&&this.stateTimer<s&&(this.hitThisSwing||(this.hitThisSwing=!0,this._spawnDarkProjectile(e,i),this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.6,pitch:1.5}))),this.stateTimer>=s&&this.stateTimer<o){const a=this.gltfModel||this.fallbackBody;a&&(a.rotation.z=ie.lerp(a.rotation.z,0,.15))}this.stateTimer>=o&&this._endBossAttack()}_spawnDarkProjectile(t,e){const i=new ce(.4,16,16),n=new Gt({color:8930508,transparent:!0,opacity:.9}),s=new F(i,n),o=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));s.position.copy(this.mesh.position).add(o.multiplyScalar(1.5)).add(new b(0,1.5,0));const a=new ce(.25,12,12),c=new Gt({color:16729343,transparent:!0,opacity:1}),l=new F(a,c);s.add(l);const h=new Ke(8930508,2,5);s.add(h),this.scene.add(s),this.activeProjectiles.push({mesh:s,target:t,speed:e.speed||8,tracking:e.trackingStrength||3,damage:e.damage||40,lifetime:0,maxLifetime:5,direction:new b().subVectors(t.mesh.position,s.position).normalize()})}_updateProjectiles(t,e){for(let i=this.activeProjectiles.length-1;i>=0;i--){const n=this.activeProjectiles[i];if(n.lifetime+=t,n.lifetime>n.maxLifetime){this._destroyProjectile(i);continue}const s=new b().subVectors(e.mesh.position.clone().add(new b(0,1,0)),n.mesh.position),o=s.length();if(s.normalize(),n.direction.lerp(s,n.tracking*t),n.direction.normalize(),n.mesh.position.addScaledVector(n.direction,n.speed*t),n.mesh.rotation.x+=t*3,n.mesh.rotation.y+=t*2,o<1.2&&!e.isInvincible){this.gm?.takeDamage(n.damage,"magic",10,e.isBlocking),e.flashDamage(),this.gm?.hud&&this.gm.hud.flashDamage(.6),this.gm?.cameraController&&this.gm.cameraController.shakeMedium(),this.gm?.particleManager&&this.gm.particleManager.spawnHitSparks(n.mesh.position,8,!1),this._destroyProjectile(i);continue}o>30&&this._destroyProjectile(i)}}_destroyProjectile(t){const e=this.activeProjectiles[t];if(e&&e.mesh){const i=e.mesh.position.clone(),n=new ce(.8,8,8),s=new Gt({color:8930508,transparent:!0,opacity:.8}),o=new F(n,s);o.position.copy(i),this.scene.add(o);const a=()=>{o.scale.multiplyScalar(1.1),o.material.opacity-=.1,o.material.opacity>0?requestAnimationFrame(a):(this.scene.remove(o),o.geometry.dispose(),o.material.dispose())};a(),this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}this.activeProjectiles.splice(t,1)}_processAttack(t,e){this.stateTimer<t*2&&this.attackVarietyEnabled&&this._selectAttackType(e);const i=this.attackVarietyEnabled&&vr[this.currentAttackType]||vr[ge.NORMAL],n=this.config.attackWindup*i.windupMult,s=this.config.attackDuration,o=n+s,a=this.config.attackCooldown*i.cooldownMult;if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2),this.attackVarietyEnabled&&this._showAttackTell(i.tell,this.stateTimer/n);return}if(this.stateTimer>=n&&this.stateTimer<o){if(!this.hitThisSwing){const c=new b(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y)),l=Math.floor(this.config.damage*i.damageMult),h=Math.floor(this.config.postureDmg*i.postureMult),u=this.config.attackRange*i.rangeMult;if(this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(1)).add(new b(0,1,0)),range:u,damage:l,postureDmg:h,attackType:this.currentAttackType,isHeavy:this.currentAttackType===ge.HEAVY},this.gm?.audioManager){const d=this.currentAttackType===ge.HEAVY?.7:this.currentAttackType===ge.QUICK_JAB?1.3:1;this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.6,pitch:d})}this.hitThisSwing=!0}this._resetAttackTell()}if(this.stateTimer>=a){this.hitThisSwing=!1,this.activeAttack=null,this.lastAttackType=this.currentAttackType,this.attackVarietyEnabled&&(this.attackTypeCooldowns[this.currentAttackType]=3);const c=this.mesh.position.distanceTo(e.mesh.position);if((this.currentAttackType===ge.COMBO||this.config.canChainAttacks&&this.comboHitsRemaining>0)&&c<=this.config.attackRange*1.3&&(this.comboHitsRemaining--,this.comboHitsRemaining>0)){this.currentAttackType=ge.COMBO,this._changeState(z.ATTACK);return}if(this.config.canChainAttacks&&c<=this.config.attackRange*1.3&&(this.chainAttackCount++,this.chainAttackCount<this.config.maxChainAttacks)){this._changeState(z.ATTACK);return}this.chainAttackCount=0,this.comboHitsRemaining=0,this.currentAttackType=ge.NORMAL,c<=this.config.attackRange?this._changeState(z.ATTACK):this._changeState(z.CHASE)}}_selectAttackType(t){const e=this.config.attackVariety||{};if(!e.enabled){this.currentAttackType=ge.NORMAL;return}const i=t.mesh.position.clone();this.playerLastPos&&(this.playerMoveSpeed=i.distanceTo(this.playerLastPos)),this.playerLastPos=i;const n=this.playerMoveSpeed>.03,s=this.playerMoveSpeed<.01;for(const c in this.attackTypeCooldowns)this.attackTypeCooldowns[c]>0&&(this.attackTypeCooldowns[c]-=.016);const o=Math.random();let a=ge.NORMAL;if(e.comboEnabled&&this.attackTypeCooldowns[ge.COMBO]<=0){const c=e.comboChance||.3;o<c&&(a=ge.COMBO,this.comboHitsRemaining=e.maxComboHits||2)}if(a===ge.NORMAL&&s&&this.attackTypeCooldowns[ge.HEAVY]<=0){const c=e.heavyChance||.25;o<c&&(a=ge.HEAVY)}if(a===ge.NORMAL&&n&&this.attackTypeCooldowns[ge.QUICK_JAB]<=0){const c=e.quickJabChance||.3;o<c&&(a=ge.QUICK_JAB)}a===this.lastAttackType&&a!==ge.COMBO&&Math.random()<.5&&(a=ge.NORMAL),this.currentAttackType=a}_showAttackTell(t,e){const i=this.gltfModel||this.fallbackBody;if(i){switch(t){case"heavy":i.rotation.x=-e*.35,i.position.y=e*.15,this.eye&&e>.3&&(this.eye.material.emissiveIntensity=4+e*4),(e>.5&&e<.55||e>.8&&e<.85)&&this._flashModel(16720418,50);break;case"jab":i.position.y=-e*.08;break;case"combo":i.rotation.x=e*.15,e>.6&&Math.random()<.3&&this._flashModel(16755200,30);break;default:i.rotation.x=-e*.1;break}this.attackTellActive=!0}}_resetAttackTell(){if(!this.attackTellActive)return;const t=this.gltfModel||this.fallbackBody;t&&(t.rotation.x=0,t.position.y=0),this.eye&&(this.eye.material.emissiveIntensity=4),this.attackTellActive=!1}takeDamage(t,e=0,i=null){if(this.state===z.DEAD)return"dead";if(this.state===z.BOSS_TRANSITION)return"immune";this.isBlocking&&(t=Math.floor(t*.3),e=Math.floor(e*.5),this._flashModel(4473958,100)),this.state===z.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&(this.gm.audioManager.play("hitImpact",{position:this.mesh.position,volume:.6,variation:.15}),this.gm.audioManager.playEnemyGrunt(this.mesh.position));const n=Math.max(0,this.health/this.maxHealth);return this.healthFill.scale.x=n,this.healthFill.position.x=-(1-n)*.49*.5,this.healthBarGroup.visible=!0,this._updatePostureBar(),this._flashModel(4456448,100),this._applyHitRecoil(i,t),this.health<=0?(this._die(),"died"):this.isBoss&&this.bossPhase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2CryptLord(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==z.STAGGERED?(this._triggerPostureBreak(),"staggered"):((this.state===z.IDLE||this.state===z.PATROL)&&this._changeState(z.CHASE),"hit")}_enterPhase2CryptLord(){this.bossPhase=2,this.posture=0,this.activeAttack=null,this.hitThisSwing=!1,this._changeState(z.BOSS_TRANSITION),this.world&&this.world.setBossArenaPhase&&this.world.setBossArenaPhase("transition"),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1}),this.config.damage=55,this.config.postureDmg=45,this.config.moveSpeed=2.5,this.config.attackCooldown=1.2,this.config.maxPosture=250,this.maxPosture=250,this._cryptLordTransformSequence()}_cryptLordTransformSequence(){const e=Date.now(),i=this.gltfModel||this.fallbackBody,n=i?i.scale.clone():new b(1,1,1),s=n.clone().multiplyScalar(1.25);this.gm?.cameraController&&this.gm.cameraController.shake(.3,4);const o=()=>{const a=Date.now()-e,c=Math.min(a/4e3,1);if(this.state===z.BOSS_TRANSITION){if(i&&(i.scale.lerpVectors(n,s,c),i.rotation.z=Math.sin(a*.02)*.15*(1-c),i.rotation.x=Math.sin(a*.015)*.1*(1-c)),this.eye){const l=4+c*6;this.eye.material.emissiveIntensity=l;const h=ie.lerp(1,1,c),u=ie.lerp(.13,0,c),d=ie.lerp(.13,1,c);this.eye.material.emissive.setRGB(h,u,d),this.eye.material.color.setRGB(h,u,d)}a%300<150&&this._flashModel(8930508,100),c<1?requestAnimationFrame(o):this._completeCryptLordTransform(i)}};o()}_completeCryptLordTransform(t){t&&(t.rotation.z=0,t.rotation.x=0),this.eye&&(this.eye.material.emissive.setHex(16711935),this.eye.material.color.setHex(16711935),this.eye.material.emissiveIntensity=5),this._applyModelTint(4465322),this.world&&this.world.setBossArenaPhase&&this.world.setBossArenaPhase("phase2"),this.bossAttackCooldown=.5,this._changeState(z.CHASE)}_flashModel(t,e){if(this.gltfModel?(this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(t),s.emissiveIntensity=.5)})}),setTimeout(()=>{this.gltfModel.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.emissive&&(s.emissive.setHex(0),s.emissiveIntensity=0)})})},e)):this.fallbackBody&&this.fallbackBody.material&&(this.fallbackBody.material.emissive.setHex(t),setTimeout(()=>this.fallbackBody.material.emissive.setHex(0),e)),this.eye&&this.eye.material){const i=this.eye.material.emissive.getHex();this.eye.material.emissive.setHex(t),setTimeout(()=>this.eye.material.emissive.setHex(i),e)}}_applyHitRecoil(t,e){let i;if(t)i=new b().subVectors(this.mesh.position,t),i.y=0,i.normalize();else{const f=this.mesh.rotation.y;i=new b(-Math.sin(f),0,-Math.cos(f))}const n=Math.min(.5,e*.015),s=this.mesh.position.clone(),o=s.clone().add(i.multiplyScalar(n)),a=this.gltfModel||this.fallbackBody,c=a?a.rotation.z:0,l=Math.random()>.5?1:-1;a&&(a.rotation.z=c+l*.15);let h=0;const u=.12,d=()=>{h+=.016;const f=Math.min(1,h/u),g=1-Math.pow(1-f,3);this.mesh.position.lerpVectors(o,s,g),a&&(a.rotation.z=ie.lerp(c+l*.15,c,g)),f<1&&requestAnimationFrame(d)};this.mesh.position.copy(o),requestAnimationFrame(d)}_triggerPostureBreak(){this._changeState(z.STAGGERED),this.breakIndicator.visible=!0,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.7}),this._flashModel(16763904,300),this.postureFill.material.color.setHex(16729088),setTimeout(()=>this.postureFill.material.color.setHex(16763904),300)}_updatePostureBar(){const t=this.posture/this.maxPosture;this.postureFill.scale.x=t,this.postureFill.position.x=-(1-t)*.49*.5}_die(){if(this.state=z.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.breakIndicator.visible=!1,this._playAnimation(z.DEAD,{loop:!1,clampWhenFinished:!0}),this.healthBarGroup.visible=!1,this.isBoss){if(this.bossActive=!1,this.world&&this.world.deactivateBossArena&&this.world.deactivateBossArena(),this.summonedAdds&&(this.summonedAdds.forEach(t=>{t&&!t.isDead&&t._die()}),this.summonedAdds=[]),this.activeProjectiles)for(let t=this.activeProjectiles.length-1;t>=0;t--)this._destroyProjectile(t);this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this._cryptLordDeathSequence();return}setTimeout(()=>{this._fadeOutModel()},2e3)}_cryptLordDeathSequence(){const e=Date.now(),i=this.gltfModel||this.fallbackBody,n=this.mesh.position.clone();this.gm?.cameraController&&this.gm.cameraController.shake(.4,3),this.gm?.itemManager&&this.gm.itemManager.showVictoryNotification("THE CRYPT LORD");const s=()=>{const o=Date.now()-e,a=Math.min(o/5e3,1);if(i)if(a<.3){const c=a/.3;i.position.y=-c*.5,i.rotation.x=c*.3,i.rotation.z=c*.15}else{const c=(a-.3)/.7;o%200<100&&this._flashModel(8930508,50),i.traverse(l=>{l.isMesh&&l.material&&(Array.isArray(l.material)?l.material:[l.material]).forEach(u=>{u.transparent=!0,u.opacity=1-c})})}this.eye&&(this.eye.material.emissiveIntensity=5*(1-a),this.eye.material.opacity=1-a),a<1?requestAnimationFrame(s):(this.mesh.visible=!1,this._spawnCryptLordRewards(n))};s()}_spawnCryptLordRewards(t){if(!this.gm?.itemManager)return;const i=Math.random()<.5?ya.CRYPT_LORDS_GREATSWORD:ya.LORD_SOUL_FRAGMENT;this.gm.itemManager.spawnBossRewards(t,"crypt-lord",this.config.remnantDrop||2500,i),this.bossDefeated=!0,this.enemyManager&&this.enemyManager.markBossDefeated("crypt-lord")}_fadeOutModel(){const t=this.gltfModel||this.fallbackBody;if(!t)return;t.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.transparent=!0})});const e=()=>{let i=!0;t.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{o.opacity>0&&(o.opacity-=.02,i=!1)})}),i?this.mesh.visible=!1:requestAnimationFrame(e)};e()}respawn(){this.health=this.maxHealth,this.posture=0,this.isDead=!1,this.stateTimer=0,this.chainAttackCount=0,this.circleTimer=0,this.isBlocking=!1,this.stuckTimer=0,this.unstuckAttempts=0,this.avoidanceDir=null,this.avoidanceTimer=0,this.isRetreating=!1,this.retreatStartPos=null,this.retreatWallHits=0,this._resetGroupState();let t=this.spawnPos.clone();if(this.world&&this.world.checkCollision&&this.world.checkCollision(t,this.collisionRadius).collides){const n=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(1,0,1),new b(-1,0,1),new b(1,0,-1),new b(-1,0,-1)];for(const s of n){const o=this.spawnPos.clone().add(s);if(!this.world.checkCollision(o,this.collisionRadius).collides){t=o;break}}}this.mesh.position.copy(t),this.lastPosition.copy(t);const e=this.config.behavior==="ambush"||this.config.isAmbush;this.isDormant=e,this.state=e?z.DORMANT:z.IDLE;const i=this.gltfModel||this.fallbackBody;i&&(i.rotation.x=0,i.rotation.z=0,i.position.y=0,i.traverse(n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{o.opacity=1,o.transparent=!1})})),this.mesh.visible=!e,this.healthBarGroup.visible=!1,this.breakIndicator.visible=!1,this.healthFill.scale.x=1,this.healthFill.position.x=0,this.postureFill.scale.x=0,this.postureFill.position.x=0,this._playAnimation(e?z.DORMANT:z.IDLE,{loop:!0})}_moveToward(t,e,i){const n=new b().subVectors(t,this.mesh.position);if(n.y=0,n.length()<.5)return;n.normalize();const o=e*i,a=this.mesh.position.clone().addScaledVector(n,o);if(this.world&&this.world.checkCollision){const c=this.world.checkCollision(a,this.collisionRadius);if(c.collides){const l=this._findSlideDirection(n,c,i);if(l){const h=this.mesh.position.clone().addScaledVector(l,o*.7);this.world.checkCollision(h,this.collisionRadius).collides?this._tryPerpendicularMove(n,o,i):(this.mesh.position.copy(h),this.avoidanceDir=l.clone(),this.avoidanceTimer=.5)}else this._tryPerpendicularMove(n,o,i)}else this.mesh.position.copy(a),this.avoidanceDir=null,this.avoidanceTimer=0}else this.mesh.position.addScaledVector(n,o)}_findSlideDirection(t,e,i){const n=new b(-t.z,0,t.x),s=new b(t.z,0,-t.x);if(e.normal){const o=t.dot(e.normal),a=t.clone().sub(e.normal.clone().multiplyScalar(o));if(a.length()>.1)return a.normalize()}return this.avoidanceDir&&this.avoidanceTimer>0?(this.avoidanceTimer-=i,this.avoidanceDir):this.unstuckAttempts%2===0?n:s}_tryPerpendicularMove(t,e,i){if(!this.world)return;const n=new b(-t.z,0,t.x),s=new b(t.z,0,-t.x),o=this.mesh.position.clone().addScaledVector(n,e);if(!this.world.checkCollision(o,this.collisionRadius).collides){this.mesh.position.copy(o),this.avoidanceDir=n,this.avoidanceTimer=.3;return}const a=this.mesh.position.clone().addScaledVector(s,e);if(!this.world.checkCollision(a,this.collisionRadius).collides){this.mesh.position.copy(a),this.avoidanceDir=s,this.avoidanceTimer=.3;return}}_checkStuck(t){if(this.mesh.position.distanceTo(this.lastPosition)<.05){if(this.stuckTimer+=t,this.stuckTimer>this.stuckThreshold)if(this.unstuckAttempts++,this.stuckTimer=0,this.unstuckAttempts>3){if(this._pickPatrolTarget(),this.world&&this.world.checkCollision){let i=0;for(;this.world.checkCollision(this.patrolTarget,this.collisionRadius).collides&&i<5;)this._pickPatrolTarget(),i++}this.unstuckAttempts=0,this._changeState(z.PATROL)}else this.circleDirection*=-1,(this.state===z.CHASE||this.state===z.CIRCLE)&&this._changeState(z.CIRCLE)}else this.stuckTimer=0,this.unstuckAttempts=0;this.lastPosition.copy(this.mesh.position)}_faceTarget(t,e){const i=new b().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.1){const n=Math.atan2(i.x,i.z);this.mesh.rotation.y=ie.lerp(this.mesh.rotation.y,n,5*e)}}_pickPatrolTarget(){const t=Math.random()*Math.PI*2,e=Math.random()*this.config.patrolRadius;this.patrolTarget.set(this.spawnPos.x+Math.cos(t)*e,0,this.spawnPos.z+Math.sin(t)*e)}_changeState(t){this.state!==t&&(this.state===z.ATTACK&&(this.activeAttack=null,this.hitThisSwing=!1),t===z.CIRCLE&&(this.circleTimer=0,this.circleDirection=Math.random()>.5?1:-1),this.state=t,this.stateTimer=0,this._playAnimation(t))}}const Rt={DORMANT:"dormant",AWAKENING:"awakening",IDLE:"idle",WALK:"walk",ATTACK:"attack",HEAVY_ATTACK:"heavy_attack",AOE_ATTACK:"aoe_attack",COMBO:"combo",STAGGERED:"staggered",PHASE_TRANSITION:"phase_transition",DEAD:"dead"},Uv={[Rt.DORMANT]:"Idle",[Rt.AWAKENING]:"Idle",[Rt.IDLE]:"Idle",[Rt.WALK]:"Walking",[Rt.ATTACK]:"Punch",[Rt.HEAVY_ATTACK]:"Punch",[Rt.AOE_ATTACK]:"Jump",[Rt.COMBO]:"Punch",[Rt.STAGGERED]:"No",[Rt.PHASE_TRANSITION]:"Death",[Rt.DEAD]:"Death"};class Bv{constructor(t,e,i){this.scene=t,this.gm=i,this.name="The Failed Experiment",this.maxHealth=500,this.health=this.maxHealth,this.maxPosture=150,this.posture=0,this.phase=1,this.state=Rt.DORMANT,this.stateTimer=0,this.hitThisSwing=!1,this.activeAttack=null,this.comboCount=0,this.isActive=!1,this.isDead=!1,this.mixer=null,this.animations={},this.currentAction=null,this.gltfModel=null,this.gltfLoaded=!1,this.phaseConfigs={1:{moveSpeed:2,attackCooldown:2.5,attackWindup:1,damage:35,postureDmg:30,canCombo:!1,canAoE:!1,modelTint:3809344,emissiveColor:2228258},2:{moveSpeed:3.5,attackCooldown:1.5,attackWindup:.6,damage:45,postureDmg:40,canCombo:!0,maxCombo:3,canAoE:!0,aoeCooldown:8,modelTint:5902368,emissiveColor:4456465}},this.config=this.phaseConfigs[1],this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.detectionRange=15,this.attackRange=3.5,this.spawnPos=e.clone(),this.world=null,this.collisionRadius=.8,this.mesh=new Kt,this.mesh.position.copy(e),this.body=new Kt,this.mesh.add(this.body),this._createFallbackMesh(),this.eyeLights=[],this.eyes=[],this._createEyes(),this.weapon=this._createWeapon(),this.mesh.add(this.weapon),this._createAoEIndicator(),this._createAuraParticles(),this.mutatedArm=null,t.add(this.mesh),this._loadGLTFModel(),this._setDormant()}_createFallbackMesh(){const t=new _s(1.2,2),e=new _t({color:1709344,roughness:.75,metalness:.25,flatShading:!0});this.fallbackMesh=new F(t,e),this.fallbackMesh.position.y=2,this.fallbackMesh.scale.set(1.3,1.6,1.2),this.fallbackMesh.castShadow=!0,this.body.add(this.fallbackMesh);const i=new _s(.7,1),n=new F(i,e.clone());n.position.set(0,2.8,-.6),n.scale.set(1.3,1,.9),this.body.add(n);for(let _=0;_<12;_++){const m=.12+Math.random()*.2,p=new ce(m,6,6),x=new _t({color:2759205,roughness:.9,emissive:1114120,emissiveIntensity:.3}),v=new F(p,x),y=_/12*Math.PI*2,w=1.3+Math.random()*2,E=.8+Math.random()*.4;v.position.set(Math.cos(y)*E+(Math.random()-.5)*.3,w,Math.sin(y)*(E*.7)+(Math.random()-.5)*.3),this.body.add(v)}const s=new _t({color:9075306,roughness:.6,metalness:.3});for(let _=0;_<6;_++){const m=new en(.4-_*.035,.035,6,16,Math.PI*.75),p=new F(m,s);p.position.set(0,1.4+_*.18,.7),p.rotation.x=Math.PI/2,p.rotation.y=Math.PI,this.body.add(p)}const o=new co(.5,1),a=new _t({color:1709088,roughness:.7,metalness:.25}),c=new F(o,a);c.position.set(0,3.6,.35),c.scale.set(1,1.2,.85),this.body.add(c);const l=new _t({color:1709344,roughness:.75,metalness:.2}),h=new gn(.22,1,10,12),u=new F(h,l);u.position.set(-.45,.6,0),u.rotation.z=.15,this.body.add(u);const d=new gn(.24,.95,10,12),f=new F(d,l);f.position.set(.45,.6,0),f.rotation.z=-.12,this.body.add(f);const g=new _t({color:2236962,roughness:.4,metalness:.6});for(let _ of[-1,1])for(let m=0;m<3;m++){const p=new Oi(.05,.18,6),x=new F(p,g);x.position.set(_*.45+(m-1)*.1,.05,.25),x.rotation.x=Math.PI/3,this.body.add(x)}}async _loadGLTFModel(){try{const t="/project-ashen/",{scene:e,animations:i}=await fo.loadModel(`${t}assets/models/brainrobot.glb`,{scale:2.5});if(!e){console.warn("[BOSS] GLTF model failed to load, using fallback");return}this.gltfModel=e,this.gltfLoaded=!0,e.position.set(0,.5,0),e.scale.setScalar(2.5),this._applyModelTint(this.config.modelTint,this.config.emissiveColor),e.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),i&&i.length>0&&(this.mixer=new Eu(e),i.forEach(n=>{this.animations[n.name]=this.mixer.clipAction(n)}),this._playAnimation(Rt.IDLE)),this.body.add(e),this.fallbackMesh&&(this.fallbackMesh.visible=!1)}catch(t){console.warn("[BOSS] GLTF loading failed:",t)}}_applyModelTint(t,e){if(!this.gltfModel)return;const i=new Mt(t),n=new Mt(e);this.gltfModel.traverse(s=>{s.isMesh&&s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{a.color&&a.color.lerp(i,.4),a.emissive!==void 0&&(a.emissive.copy(n),a.emissiveIntensity=.5),a.needsUpdate=!0})}),this.body.traverse(s=>{s.isMesh&&s.material&&s!==this.gltfModel&&(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{a.color&&a.color.lerp(i,.3),a.emissive!==void 0&&(a.emissive.copy(n),a.emissiveIntensity=.4)})})}_playAnimation(t,e=1){if(!this.mixer)return;const i=Uv[t];if(!i)return;let n=this.animations[i];if(!n){const s=i.toLowerCase();for(const o of Object.keys(this.animations))if(o.toLowerCase().includes(s)){n=this.animations[o];break}}n&&(this.currentAction&&this.currentAction!==n?(n.reset(),n.setEffectiveTimeScale(e),n.setEffectiveWeight(1),n.crossFadeFrom(this.currentAction,.3,!0),n.play()):this.currentAction||(n.reset(),n.setEffectiveTimeScale(e),n.play()),this.currentAction=n)}_createEyes(){const t=[{x:-.18,y:3.55,z:.6,size:.11},{x:.18,y:3.55,z:.6,size:.11},{x:0,y:3.75,z:.55,size:.085},{x:-.38,y:3.35,z:.45,size:.06},{x:.38,y:3.35,z:.45,size:.06},{x:-.85,y:3.1,z:.3,size:.05},{x:-.95,y:2.9,z:.35,size:.04},{x:.12,y:2.85,z:-.35,size:.07}],e=new _t({color:16720384,emissive:16720384,emissiveIntensity:5});t.forEach(i=>{const n=new ce(i.size,12,12),s=new F(n,e.clone());if(s.position.set(i.x,i.y,i.z),this.eyes.push(s),this.body.add(s),i.size>=.08){const o=new Ke(16720384,.5,3);o.position.copy(s.position),this.eyeLights.push(o),this.body.add(o)}})}_createWeapon(){const t=new Kt,e=new re(.08,.1,2,12),i=new _t({color:3811872,roughness:.85,metalness:.15}),n=new F(e,i);t.add(n);for(let u=0;u<5;u++){const d=new en(.11,.025,6,14),f=new F(d,new _t({color:4860456,roughness:.9}));f.position.y=-.7+u*.35,f.rotation.x=Math.PI/2,t.add(f)}const s=new Jt(.1,1.8,.6),o=new _t({color:2763306,roughness:.25,metalness:.95}),a=new F(s,o);a.position.set(0,1.5,.18),a.rotation.z=.12,t.add(a);const c=new Jt(.025,1.75,.025),l=new _t({color:16724736,emissive:16720384,emissiveIntensity:3}),h=new F(c,l);h.position.set(0,1.5,.5),h.rotation.z=.12,t.add(h);for(let u=0;u<6;u++){const d=new Oi(.04,.15,6),f=new F(d,o);f.position.set(0,.85+u*.22,-.1),f.rotation.x=-Math.PI/4,t.add(f)}return t.position.set(1.6,1.9,0),t.rotation.z=.4,t.castShadow=!0,t}_createAoEIndicator(){const t=new Ts(.5,6,32),e=new Gt({color:16729088,transparent:!0,opacity:0,side:pe});this.aoeIndicator=new F(t,e),this.aoeIndicator.rotation.x=-Math.PI/2,this.aoeIndicator.position.y=.1,this.mesh.add(this.aoeIndicator)}_createAuraParticles(){this.auraParticles=[];for(let t=0;t<8;t++){const e=new ce(.1,6,6),i=new _t({color:2228258,emissive:1114129,emissiveIntensity:1.5,transparent:!0,opacity:.7}),n=new F(e,i);n.userData.angle=t/8*Math.PI*2,n.userData.yOffset=Math.random()*2,n.userData.radius=.9+Math.random()*.5,this.auraParticles.push(n),this.mesh.add(n)}}_setDormant(){this.eyes.forEach(t=>{t.material.emissiveIntensity=.5}),this.eyeLights.forEach(t=>{t.intensity=.1})}_awaken(){if(this.state!==Rt.DORMANT)return;this.isActive=!0,this._changeState(Rt.AWAKENING),this.gm?.audioManager&&(this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:.8}),this.gm.audioManager.startBossMusic());let t=0;this.eyes.forEach((e,i)=>{setTimeout(()=>{e.material.emissiveIntensity=7,setTimeout(()=>{e.material.emissiveIntensity=4.5},200)},t),t+=120}),this.eyeLights.forEach((e,i)=>{setTimeout(()=>{e.intensity=.8},i*100)})}update(t,e){if(this.state===Rt.DEAD)return;this.mixer&&this.mixer.update(t),this.stateTimer+=t,this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-t),this.aoeCooldownTimer=Math.max(0,this.aoeCooldownTimer-t);const i=this.mesh.position.distanceTo(e.mesh.position);if(this.state===Rt.DORMANT&&i<this.detectionRange){this._awaken();return}switch(this.state){case Rt.AWAKENING:this.stateTimer<2?(this.body.position.y=Math.sin(this.stateTimer*Math.PI)*.4,this.body.rotation.z=Math.sin(this.stateTimer*3)*.05):(this.body.position.y=0,this.body.rotation.z=0,this._changeState(Rt.IDLE));break;case Rt.IDLE:this._faceTarget(e.mesh.position,t),this.body.position.y=Math.sin(this.stateTimer*2)*.08,this.body.scale.y=1+Math.sin(this.stateTimer*2.5)*.02,i<=this.attackRange&&this.attackCooldownTimer<=0?this._startAttack(e):i>this.attackRange&&this._changeState(Rt.WALK);break;case Rt.WALK:this._moveToward(e.mesh.position,t),this._faceTarget(e.mesh.position,t),this.body.position.y=Math.sin(this.stateTimer*8)*.12,this.body.rotation.z=Math.sin(this.stateTimer*4)*.03,i<=this.attackRange&&(this.attackCooldownTimer<=0?this._startAttack(e):this._changeState(Rt.IDLE));break;case Rt.ATTACK:this._processAttack(t,e,!1);break;case Rt.HEAVY_ATTACK:this._processAttack(t,e,!0);break;case Rt.AOE_ATTACK:this._processAoEAttack(t,e);break;case Rt.COMBO:this._processCombo(t,e);break;case Rt.STAGGERED:this.body.rotation.z=Math.sin(this.stateTimer*14)*.18*(1-this.stateTimer/2.5),this.body.position.y=Math.sin(this.stateTimer*8)*.1,this.stateTimer>=2.5&&(this.posture=0,this.body.rotation.z=0,this.body.position.y=0,this._changeState(Rt.IDLE));break;case Rt.PHASE_TRANSITION:this._processPhaseTransition(t);break}this.state!==Rt.STAGGERED&&this.posture>0&&(this.posture=Math.max(0,this.posture-3*t));const n=this.health/this.maxHealth,s=2+(1-n)*5,o=3.5+Math.sin(Date.now()*.001*s)*(1.5+(1-n)*2.5);if(this.eyes.forEach(a=>{a.material.emissiveIntensity=o}),this.eyeLights.forEach(a=>{a.intensity=.3+o*.1}),this.auraParticles&&this.isActive){const a=Date.now()*.001;this.auraParticles.forEach((c,l)=>{const h=c.userData.angle+a*.6,u=c.userData.yOffset+Math.sin(a+l)*.4,d=c.userData.radius;c.position.set(Math.cos(h)*d,1.6+u,Math.sin(h)*d),c.material.opacity=.35+Math.sin(a*2.5+l)*.25})}}_startAttack(t){if(this.phase===2&&this.config.canAoE&&this.aoeCooldownTimer<=0&&Math.random()<.3){this._changeState(Rt.AOE_ATTACK);return}if(this.phase===2&&this.config.canCombo&&Math.random()<.4){this.comboCount=0,this._changeState(Rt.COMBO);return}Math.random()<.5?this._changeState(Rt.ATTACK):this._changeState(Rt.HEAVY_ATTACK)}_processAttack(t,e,i){const n=i?this.config.attackWindup*1.5:this.config.attackWindup,s=n+.3,o=s+(i?1:.6);if(this.stateTimer<n){this._faceTarget(e.mesh.position,t*2);const a=this.stateTimer/n;i?(this.weapon.rotation.z=-a*2.8,this.weapon.position.y=1.9+a*1.6,this.body.rotation.x=a*.15):(this.weapon.rotation.z=.4-a*1.6,this.body.rotation.z=a*.1);return}if(this.stateTimer>=n&&this.stateTimer<s){if(!this.hitThisSwing){const c=new b(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2.2)).add(new b(0,1.6,0)),range:this.attackRange,damage:i?this.config.damage*1.5:this.config.damage,postureDmg:i?this.config.postureDmg*1.5:this.config.postureDmg,isHeavy:i},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.7,pitch:i?.6:.8})}const a=(this.stateTimer-n)/.3;i?(this.weapon.rotation.z=-2.8+a*4.5,this.weapon.position.y=3.5-a*2.8,this.body.rotation.x=.15-a*.25):(this.weapon.rotation.z=-1.2+a*2.8,this.body.rotation.z=.1-a*.15)}this.stateTimer>=s&&(this.activeAttack=null,this.weapon.rotation.z=ie.lerp(this.weapon.rotation.z,.4,.12),this.weapon.position.y=ie.lerp(this.weapon.position.y,1.9,.12),this.body.rotation.x=ie.lerp(this.body.rotation.x,0,.15),this.body.rotation.z=ie.lerp(this.body.rotation.z,0,.15)),this.stateTimer>=o&&(this.hitThisSwing=!1,this.activeAttack=null,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(Rt.IDLE))}_processCombo(t,e){const i=this.config.attackWindup*.7,n=i+.2,s=n+.3;if(this.stateTimer<i){this._faceTarget(e.mesh.position,t*3);const o=this.stateTimer/i,a=this.comboCount%2===0?1:-1;this.weapon.rotation.z=a*o*1.8,this.body.rotation.z=a*o*.08;return}if(this.stateTimer>=i&&this.stateTimer<n){if(!this.hitThisSwing){const c=new b(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.activeAttack={position:this.mesh.position.clone().add(c.multiplyScalar(2.2)).add(new b(0,1.6,0)),range:this.attackRange*.9,damage:this.config.damage*.7,postureDmg:this.config.postureDmg*.6,isCombo:!0},this.gm?.audioManager&&this.gm.audioManager.play("swordSwing",{position:this.mesh.position,volume:.6,pitch:.9+this.comboCount*.1})}const o=(this.stateTimer-i)/.2,a=this.comboCount%2===0?1:-1;this.weapon.rotation.z=a*(1.8-o*3.5),this.body.rotation.z=a*(.08-o*.12)}if(this.stateTimer>=s){this.comboCount++,this.hitThisSwing=!1,this.activeAttack=null;const o=this.mesh.position.distanceTo(e.mesh.position);if(this.comboCount<this.config.maxCombo&&o<this.attackRange*1.2){this.stateTimer=0;const a=new b(Math.sin(this.body.rotation.y),0,Math.cos(this.body.rotation.y));this.mesh.position.addScaledVector(a,.6)}else this.comboCount=0,this.attackCooldownTimer=this.config.attackCooldown*1.5,this._resetWeapon(),this._changeState(Rt.IDLE)}}_processAoEAttack(t,e){if(this.stateTimer<1.5){const o=this.stateTimer/1.5;this.aoeIndicator.material.opacity=o*.65,this.aoeIndicator.scale.setScalar(1+o*.35),this.weapon.rotation.z=-o*3.2,this.weapon.position.y=1.9+o*2.2,this._flashModel(o*.5,16720384),this.eyes.forEach(a=>{a.material.emissiveIntensity=4+o*7}),this.body.position.y=Math.sin(this.stateTimer*20)*.05*o;return}this.stateTimer>=1.5&&this.stateTimer<1.8&&(this.hitThisSwing||(this.hitThisSwing=!0,this.aoeIndicator.material.opacity=1,this.aoeIndicator.material.color.setHex(16737792),this.gm?.audioManager&&this.gm.audioManager.play("explosion",{position:this.mesh.position,volume:.9}),this.mesh.position.distanceTo(e.mesh.position)<6&&!e.isInvincible&&(this.activeAttack={position:this.mesh.position.clone(),range:6,damage:this.config.damage*1.2,postureDmg:this.config.postureDmg,isAoE:!0}),this.weapon.rotation.z=.6,this.weapon.position.y=.6)),this.stateTimer>=1.8&&(this.activeAttack=null,this.aoeIndicator.material.opacity*=.88,this._flashModel(0,0)),this.stateTimer>=2.8&&(this.hitThisSwing=!1,this.aoeIndicator.material.opacity=0,this.aoeIndicator.material.color.setHex(16729088),this.aoeCooldownTimer=this.config.aoeCooldown,this.attackCooldownTimer=this.config.attackCooldown,this._resetWeapon(),this._changeState(Rt.IDLE))}_processPhaseTransition(t){if(this.stateTimer<3){this.body.rotation.z=Math.sin(this.stateTimer*22)*.25,this.body.scale.y=1+Math.sin(this.stateTimer*12)*.15,this.body.scale.x=1+Math.sin(this.stateTimer*10)*.08,this.eyes.forEach((o,a)=>{o.material.emissiveIntensity=6+Math.sin(this.stateTimer*18+a)*5});const i=this.stateTimer/3,n=new Mt(this.phaseConfigs[1].modelTint),s=new Mt(this.phaseConfigs[2].modelTint);n.lerp(s,i),this._applyModelTint(n.getHex(),this.phaseConfigs[2].emissiveColor),this.stateTimer>1.5&&!this.mutatedArm&&this._createMutatedArm();return}this.body.rotation.z=0,this.body.scale.set(1,1,1),this._applyModelTint(this.phaseConfigs[2].modelTint,this.phaseConfigs[2].emissiveColor),this.eyes.forEach(i=>{i.material.color.setHex(16729088),i.material.emissive.setHex(16729088)}),this._changeState(Rt.IDLE)}_createMutatedArm(){this.mutatedArm=new Kt;const t=new gn(.18,1.2,12,16),e=new _t({color:3806504,roughness:.85,metalness:.15}),i=new F(t,e);i.position.set(0,0,0),i.rotation.z=.7,i.rotation.x=.45,this.mutatedArm.add(i);const n=new _t({color:2236962,roughness:.35,metalness:.75});for(let a=0;a<4;a++){const c=new Oi(.04,.25,6),l=new F(c,n);l.position.set(-.5+(a-1.5)*.1,.7,.8),l.rotation.x=-.85,this.mutatedArm.add(l)}for(let a=0;a<4;a++){const c=new ce(.07+Math.random()*.05,6,6),l=new _t({color:4859960,roughness:.9,emissive:1114120,emissiveIntensity:.4}),h=new F(c,l);h.position.set(-.25+a*.18,.25+a*.18,.4),this.mutatedArm.add(h)}this.mutatedArm.position.set(-1.1,2.7,.25),this.mesh.add(this.mutatedArm);const s=new _t({color:16729088,emissive:16729088,emissiveIntensity:5});[{x:-1.3,y:2.9,z:.55,size:.07},{x:-1.1,y:2.5,z:.65,size:.055},{x:.55,y:3.1,z:.4,size:.045}].forEach(a=>{const c=new F(new ce(a.size,10,10),s.clone());c.position.set(a.x,a.y,a.z),this.eyes.push(c),this.mesh.add(c)})}_flashModel(t,e){const i=new Mt(e);this.gltfModel&&this.gltfModel.traverse(n=>{n.isMesh&&n.material&&n.material.emissive!==void 0&&(n.material.emissive.lerp(i,t),n.material.emissiveIntensity=t*2)}),this.body.traverse(n=>{n.isMesh&&n.material&&n.material.emissive!==void 0&&n.material.emissive.lerp(i,t)})}takeDamage(t,e=0,i=null){return this.state===Rt.DEAD||this.state===Rt.PHASE_TRANSITION||this.state===Rt.DORMANT?"immune":(this.state===Rt.AWAKENING&&(t=Math.floor(t*.5),e=Math.floor(e*.5)),this.state===Rt.STAGGERED&&(e*=2),this.health-=t,this.posture=Math.min(this.maxPosture,this.posture+e),this.gm?.audioManager&&this.gm.audioManager.play("criticalHit",{position:this.mesh.position,volume:.7}),this._flashModel(.6,16720384),setTimeout(()=>{this.state!==Rt.AOE_ATTACK&&this._flashModel(0,0)},100),this._applyHitRecoil(i,t),this.health<=0?(this._die(),"died"):this.phase===1&&this.health<=this.maxHealth*.5?(this._enterPhase2(),"phase_transition"):this.posture>=this.maxPosture&&this.state!==Rt.STAGGERED?(this._triggerPostureBreak(),"staggered"):"hit")}_applyHitRecoil(t,e){let i;if(t)i=new b().subVectors(this.mesh.position,t),i.y=0,i.normalize();else{const d=this.body.rotation.y;i=new b(-Math.sin(d),0,-Math.cos(d))}const n=Math.min(.25,e*.006),s=this.mesh.position.clone(),o=s.clone().add(i.multiplyScalar(n)),a=this.body.rotation.z||0,c=Math.random()>.5?1:-1;this.body.rotation.z=a+c*.1;let l=0;const h=.15,u=()=>{l+=.016;const d=Math.min(1,l/h),f=1-Math.pow(1-d,3);this.mesh.position.lerpVectors(o,s,f),this.body.rotation.z=ie.lerp(a+c*.1,a,f),d<1&&requestAnimationFrame(u)};this.mesh.position.copy(o),requestAnimationFrame(u)}_triggerPostureBreak(){this._changeState(Rt.STAGGERED),this.activeAttack=null,this.gm?.audioManager&&this.gm.audioManager.play("postureBreak",{position:this.mesh.position,volume:.9}),this._flashModel(1,16763904),this.eyes.forEach(t=>{t.material.emissive.setHex(16763904)}),setTimeout(()=>{this.state===Rt.STAGGERED&&(this._flashModel(0,0),this.eyes.forEach(t=>{t.material.emissive.setHex(this.phase===2?16729088:16720384)}))},300)}_enterPhase2(){this.phase=2,this.config=this.phaseConfigs[2],this.posture=0,this.activeAttack=null,this._changeState(Rt.PHASE_TRANSITION),this.gm?.audioManager&&this.gm.audioManager.play("bossRoar",{position:this.mesh.position,volume:1})}_die(){this.state=Rt.DEAD,this.isDead=!0,this.health=0,this.activeAttack=null,this.isActive=!1,this._playAnimation(Rt.DEAD,.8),this.gm?.audioManager&&this.gm.audioManager.startAmbientMusic();let t=0;const e=()=>{t+=.018,this.body.position.y=-t*1.8,this.body.rotation.x=t*.6,this.body.rotation.z=t*.3,this.eyes.forEach(i=>{i.material.emissiveIntensity*=.94}),this.eyeLights.forEach(i=>{i.intensity*=.92}),t<1?requestAnimationFrame(e):this._fadeOut()};e(),this.gm&&this.gm.collectRemnants(2e3)}_fadeOut(){let t=1;const e=()=>{t-=.008;const i=n=>{n.isMesh&&n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{o.transparent=!0,o.opacity=t})};this.body.traverse(i),this.weapon.traverse(i),this.eyes.forEach(n=>{n.material.transparent=!0,n.material.opacity=t}),this.auraParticles&&this.auraParticles.forEach(n=>{n.material.opacity=t*.6}),this.mutatedArm&&this.mutatedArm.traverse(i),t>0?requestAnimationFrame(e):this.mesh.visible=!1};setTimeout(e,3e3)}_moveToward(t,e){const i=new b().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.5){i.normalize();const n=this.config.moveSpeed*e,s=this.mesh.position.clone().addScaledVector(i,n);this.world&&this.world.checkCollision?this.world.checkCollision(s,this.collisionRadius).collides||this.mesh.position.copy(s):this.mesh.position.addScaledVector(i,n)}}_faceTarget(t,e){const i=new b().subVectors(t,this.mesh.position);if(i.y=0,i.length()>.1){const n=Math.atan2(i.x,i.z);this.body.rotation.y=ie.lerp(this.body.rotation.y,n,5*e)}}_resetWeapon(){this.weapon.rotation.z=.4,this.weapon.position.set(1.6,1.9,0),this.body.rotation.x=0,this.body.rotation.z=0}_changeState(t){this.state!==t&&((this.state===Rt.ATTACK||this.state===Rt.HEAVY_ATTACK||this.state===Rt.AOE_ATTACK||this.state===Rt.COMBO)&&(this.activeAttack=null,this.hitThisSwing=!1),this.state=t,this.stateTimer=0,this._playAnimation(t))}respawn(){this.health=this.maxHealth,this.posture=0,this.phase=1,this.config=this.phaseConfigs[1],this.state=Rt.DORMANT,this.stateTimer=0,this.isActive=!1,this.isDead=!1,this.comboCount=0,this.attackCooldownTimer=0,this.aoeCooldownTimer=0,this.mesh.position.copy(this.spawnPos),this.mesh.visible=!0,this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.body.scale.set(1,1,1);const t=e=>{e.isMesh&&e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.opacity=1,n.transparent=!1,n.emissive&&n.emissive.setHex(0)})};for(this.body.traverse(t),this.weapon.traverse(t),this._resetWeapon();this.eyes.length>8;){const e=this.eyes.pop();e&&this.mesh.remove(e)}this.eyes.forEach(e=>{e.material.opacity=1,e.material.transparent=!1,e.material.color.setHex(16720384),e.material.emissive.setHex(16720384)}),this.eyeLights.forEach(e=>{e.intensity=.1}),this.mutatedArm&&(this.mesh.remove(this.mutatedArm),this.mutatedArm=null),this._applyModelTint(this.phaseConfigs[1].modelTint,this.phaseConfigs[1].emissiveColor),this.aoeIndicator.material.opacity=0,this._setDormant(),this._playAnimation(Rt.IDLE)}}const En={SAFE:{maxDistance:50,hpMultiplier:.8,damageMultiplier:.7,remnantMultiplier:.8,spawnDensity:.3,enemyTypes:["HOLLOW_SOLDIER"],eliteChance:0,label:"Safe Zone"},MEDIUM:{maxDistance:150,hpMultiplier:1,damageMultiplier:1,remnantMultiplier:1,spawnDensity:.5,enemyTypes:["HOLLOW_SOLDIER","BERSERKER"],eliteChance:.05,label:"Medium Zone"},HARD:{maxDistance:300,hpMultiplier:1.3,damageMultiplier:1.2,remnantMultiplier:1.5,spawnDensity:.7,enemyTypes:["HOLLOW_SOLDIER","BERSERKER","SENTINEL"],eliteChance:.15,label:"Hard Zone"},FRONTIER:{maxDistance:1/0,hpMultiplier:1.6,damageMultiplier:1.4,remnantMultiplier:2,spawnDensity:.9,enemyTypes:["BERSERKER","SENTINEL","CRYPT_GUARDIAN"],eliteChance:.25,label:"Dark Frontier"}};function yr(r){return r<En.SAFE.maxDistance?En.SAFE:r<En.MEDIUM.maxDistance?En.MEDIUM:r<En.HARD.maxDistance?En.HARD:En.FRONTIER}function ta(r,t){return Math.sqrt(r*r+t*t)}class Fv{constructor(t,e,i,n=null,s=null){this.scene=t,this.gm=e,this.player=i,this.world=n,this.particleManager=s,this.enemies=[],this.boss=null,this.cryptLord=null,this.defeatedBosses=new Set,this.spawnedRegions=new Set,this.maxEnemies=30,this.spawnCheckRadius=60,this.despawnRadius=100,this.groupRadius=30,this.maxActiveAttackers=3,this.groupJoinDelayMin=.5,this.groupJoinDelayMax=2,this.leaderDeathConfusionTime=1,this.activeGroups=new Map,this.nextGroupId=1,this._spawnEnemies(),console.log("[EnemyManager] Initialized with distance-based scaling")}_spawnEnemies(){if(!this.world?.terrain){console.warn("[EnemyManager] No terrain available, using fallback spawns"),this._spawnFallbackEnemies();return}this.world.terrain,this._populateArea(0,0,80),console.log(`[EnemyManager] Spawned ${this.enemies.length} enemies with distance scaling`)}_populateArea(t,e,i){if(!this.world?.terrain)return;const n=this.world.terrain,s=Math.floor(i/10);for(let o=0;o<s;o++){const a=Math.random()*Math.PI*2,c=Math.random()*i,l=t+Math.cos(a)*c,h=e+Math.sin(a)*c,u=ta(l,h);if(u<35)continue;const d=yr(u);if(Math.random()>d.spawnDensity||n.getTerrainSlope(l,h)>.5||this.world.isNearTree&&this.world.isNearTree(l,h,3)||this.enemies.some(m=>{const p=m.spawnPos.x-l,x=m.spawnPos.z-h;return Math.sqrt(p*p+x*x)<8}))continue;if(this.enemies.length>=this.maxEnemies)break;const _=n.getTerrainHeight(l,h);this._spawnEnemyAtPosition(l,_,h,d,u)}}_spawnEnemyAtPosition(t,e,i,n,s){const o=n.enemyTypes[Math.floor(Math.random()*n.enemyTypes.length)],a=Ma[o];if(!a){console.warn(`[EnemyManager] Unknown enemy type: ${o}`);return}const c=Math.random()<n.eliteChance,l=this._applyDistanceScaling(a,n,s,c),h=new b(t,e,i),u=new Sa(this.scene,h,{type:o,...l},this.gm);return u.spawnDistance=s,u.difficultyZone=n.label,u.world=this.world,this.enemies.push(u),u}_applyDistanceScaling(t,e,i,n=!1){let s=e.hpMultiplier,o=e.damageMultiplier,a=e.remnantMultiplier;const c=1+i/1e3;return s*=c,o*=c,a*=c,n&&(s*=1.5,o*=1.3,a*=2),{name:n?`Elite ${t.name}`:t.name,health:Math.round(t.health*s),damage:Math.round(t.damage*o),postureDmg:Math.round((t.postureDmg||15)*o),remnantDrop:Math.round(t.remnantDrop*a),maxPosture:Math.round((t.maxPosture||60)*s),moveSpeed:t.moveSpeed,detectionRange:t.detectionRange+(n?3:0),attackRange:t.attackRange,attackCooldown:t.attackCooldown,attackWindup:t.attackWindup,attackDuration:t.attackDuration,bodyColor:n?6684706:t.bodyColor,eyeColor:n?16711680:t.eyeColor,modelTint:n?this._eliteTint(t.modelTint):t.modelTint,modelScale:(t.modelScale||.5)*(n?1.15:1),canChainAttacks:t.canChainAttacks,maxChainAttacks:t.maxChainAttacks,hasShield:t.hasShield,shieldBlockChance:t.shieldBlockChance,modelPath:t.modelPath,animSpeedMult:t.animSpeedMult,patrolRadius:t.patrolRadius,isElite:n}}_eliteTint(t){if(!t)return 4456482;const e=new Mt(t);return e.lerp(new Mt(6684672),.4),e.getHex()}_spawnFallbackEnemies(){[{pos:new b(40,0,0),type:"HOLLOW_SOLDIER"},{pos:new b(60,0,20),type:"HOLLOW_SOLDIER"},{pos:new b(80,0,-10),type:"BERSERKER"},{pos:new b(100,0,30),type:"SENTINEL"}].forEach(e=>{const i=yr(ta(e.pos.x,e.pos.z)),n=Ma[e.type],s=this._applyDistanceScaling(n,i,ta(e.pos.x,e.pos.z)),o=new Sa(this.scene,e.pos,{type:e.type,...s},this.gm);o.world=this.world,this.enemies.push(o)})}updateDynamicSpawns(t){if(!this.world?.terrain)return;const e=new Set;for(let i=this.enemies.length-1;i>=0;i--){const n=this.enemies[i];if(n.mesh.position.distanceTo(t)>this.despawnRadius&&!n.bossActive){if(n.spawnPos){const o=Math.floor(n.spawnPos.x/40)*40,a=Math.floor(n.spawnPos.z/40)*40;e.add(`${o},${a}`)}n.mesh&&this.scene.remove(n.mesh),this.enemies.splice(i,1)}}for(const i of e)this.enemies.some(s=>{if(!s.spawnPos)return!1;const o=Math.floor(s.spawnPos.x/40)*40,a=Math.floor(s.spawnPos.z/40)*40;return`${o},${a}`===i})||this.spawnedRegions.delete(i);if(this.enemies.length<this.maxEnemies){const i=Math.floor(t.x/40),n=Math.floor(t.z/40);for(let s=-1;s<=1;s++)for(let o=-1;o<=1;o++){const a=(i+s)*40,c=(n+o)*40,l=`${a},${c}`;if(this.spawnedRegions.has(l))continue;if(this.enemies.length>=this.maxEnemies)break;Math.sqrt(Math.pow(a+20-t.x,2)+Math.pow(c+20-t.z,2))>this.spawnCheckRadius||(this.spawnedRegions.add(l),this._populateArea(a,c,40))}}}_spawnBoss(){const t=this.world?.getBossPosition()||new b(0,0,-95);this.boss=new Bv(this.scene,t,this.gm),this.boss.world=this.world;const e=new Ts(8,12,32),i=new Gt({color:3346705,transparent:!0,opacity:.3,side:pe}),n=new F(e,i);n.rotation.x=-Math.PI/2,n.position.copy(t),n.position.y=.02,this.scene.add(n)}update(t,e){this.updateDynamicSpawns(e.mesh.position),this._checkDormantTriggers(e),this._coordinateFlanking(e),this._coordinateGroups(e);for(let i=this.enemies.length-1;i>=0;i--){const n=this.enemies[i];if(n.update(t,e),e.activeAttack&&!e.hitThisSwing){const s=n.mesh.position.x-e.activeAttack.position.x,o=n.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(s*s+o*o)<e.activeAttack.range&&n.health>0){const c=n.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,e.activeAttack.isHeavy?this.gm.hitstopHeavy():this.gm.hitstopLight(),this.gm.cameraController&&(e.activeAttack.isHeavy?this.gm.cameraController.shakeMedium():this.gm.cameraController.shakeLight()),this.particleManager){const l=n.mesh.position.clone(),h=n.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(l,8,e.activeAttack.isHeavy),this.particleManager.spawnBlood(l,h,Math.ceil(e.activeAttack.damage/5)),c==="posture_broken"&&this.particleManager.spawnPostureBreak(l)}if(c==="died"){this.gm.addRemnant(n.config.remnantDrop);const l=this.gm.calculateEnemyXP(n);this.gm.gainXP(l,n.mesh.position),this.particleManager&&this.particleManager.spawnDeathBurst(n.mesh.position.clone()),setTimeout(()=>{n.respawn()},8e3)}}}if(n.activeAttack&&!n.hitThisSwing){const s=e.mesh.position.x-n.activeAttack.position.x,o=e.mesh.position.z-n.activeAttack.position.z;if(Math.sqrt(s*s+o*o)<n.activeAttack.range&&!e.isInvincible){if(e.isParrying){n.hitThisSwing=!0,e.onParrySuccess(),n.state="staggered",n.stateTimer=0,this.particleManager&&this.particleManager.spawnParryEffect(e.mesh.position.clone());continue}const c=this.gm.takeDamage(n.activeAttack.damage,"physical",n.activeAttack.postureDmg,e.isBlocking);if(n.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const l=n.activeAttack.damage/30;this.gm.hud.flashDamage(Math.min(1,l))}if(this.gm.cameraController&&this.gm.cameraController.shakeHeavy(),this.particleManager){const l=e.mesh.position.clone(),h=e.mesh.position.clone().sub(n.mesh.position).normalize();e.isBlocking&&c!=="guard_broken"?this.particleManager.spawnBlockSparks(l):(this.particleManager.spawnHitSparks(l,6,!1),this.particleManager.spawnBlood(l,h,Math.ceil(n.activeAttack.damage/5))),(c==="guard_broken"||c==="posture_broken")&&this.particleManager.spawnPostureBreak(l)}c==="died"||(c==="guard_broken"||c==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}if(this.boss){if(this.boss.update(t,e),e.activeAttack&&!e.hitThisSwing&&!this.boss.isDead){const i=this.boss.mesh.position.x-e.activeAttack.position.x,n=this.boss.mesh.position.z-e.activeAttack.position.z;if(Math.sqrt(i*i+n*n)<e.activeAttack.range+1&&this.boss.health>0){const o=this.boss.takeDamage(e.activeAttack.damage,e.activeAttack.postureDmg,e.mesh.position);if(e.hitThisSwing=!0,this.gm.hitstopHeavy(),this.gm.cameraController&&this.gm.cameraController.shakeMedium(),this.particleManager){const a=this.boss.mesh.position.clone(),c=this.boss.mesh.position.clone().sub(e.mesh.position).normalize();this.particleManager.spawnHitSparks(a,12,e.activeAttack.isHeavy),this.particleManager.spawnBlood(a,c,Math.ceil(e.activeAttack.damage/3)),o==="posture_broken"&&this.particleManager.spawnPostureBreak(a),o==="died"&&(this.particleManager.spawnDeathBurst(a),this.particleManager.spawnDeathBurst(a),this.gm.gainXP(200,a))}}}if(this.boss.activeAttack&&!this.boss.hitThisSwing){const i=e.mesh.position.x-this.boss.activeAttack.position.x,n=e.mesh.position.z-this.boss.activeAttack.position.z;if(Math.sqrt(i*i+n*n)<this.boss.activeAttack.range&&!e.isInvincible)if(e.isParrying)this.boss.hitThisSwing=!0,e.onParrySuccess(),this.boss.state!=="staggered"&&(this.boss.state="staggered",this.boss.stateTimer=0),this.particleManager&&(this.particleManager.spawnParryEffect(e.mesh.position.clone()),this.particleManager.spawnBlockSparks(e.mesh.position.clone())),this.gm.cameraController&&this.gm.cameraController.shakeMedium();else{const o=this.gm.takeDamage(this.boss.activeAttack.damage,"physical",this.boss.activeAttack.postureDmg,e.isBlocking);if(this.boss.hitThisSwing=!0,e.flashDamage(),this.gm.hud){const a=this.boss.activeAttack.damage/25;this.gm.hud.flashDamage(Math.min(1,a))}if(this.gm.cameraController&&this.gm.cameraController.shake(.7,.25),this.particleManager){const a=e.mesh.position.clone(),c=e.mesh.position.clone().sub(this.boss.mesh.position).normalize();e.isBlocking&&o!=="guard_broken"?(this.particleManager.spawnBlockSparks(a),this.particleManager.spawnBlockSparks(a)):(this.particleManager.spawnHitSparks(a,10,!0),this.particleManager.spawnBlood(a,c,Math.ceil(this.boss.activeAttack.damage/4))),(o==="guard_broken"||o==="posture_broken")&&this.particleManager.spawnPostureBreak(a)}o==="died"||(o==="guard_broken"||o==="posture_broken")&&(e.state="staggered",e.stateTimer=0)}}}}_checkDormantTriggers(t){const e=t.mesh.position;for(const i of this.enemies)i.checkTrigger&&i.checkTrigger(e)&&(i.wake(),this.gm?.audioManager&&this.gm.audioManager.play("ambushReveal",{position:i.mesh.position,volume:.8}),this.gm?.cameraController&&this.gm.cameraController.shakeLight())}_coordinateFlanking(t){const e=t.mesh.position,i=this.enemies.filter(a=>a.isDead||a.state==="dead"||a.state==="staggered"||a.state==="dormant"||a.isBoss||a.mesh.position.distanceTo(e)>(a.config.detectionRange||10)*1.2?!1:a.state==="chase"||a.state==="circle"||a.state==="attack");if(i.length<2)return;const n=i.filter(a=>!(!a.canFlank||a.state==="flank"||a.isFlankAssigned||a.isRetreating)),s=i.filter(a=>a.state==="flank").length,o=Math.floor(i.length/2);if(!(s>=o)){n.sort((a,c)=>{const l=a.mesh.position.distanceTo(e);return c.mesh.position.distanceTo(e)-l});for(const a of n)if(a.requestFlank&&a.requestFlank())break}}_coordinateGroups(t){const e=t.mesh.position,i=this.enemies.filter(s=>s.isDead||s.state==="dead"||s.state==="staggered"||s.state==="dormant"||s.state==="rising"||s.isBoss||s.mesh.position.distanceTo(e)>(s.config.detectionRange||10)*1.5?!1:s.state==="chase"||s.state==="circle"||s.state==="attack"||s.state==="flank"||s.isInCombat?.()||!1);if(i.length===0){this.activeGroups.clear();return}for(const[s,o]of this.activeGroups)o.members=o.members.filter(a=>!a.isDead&&a.state!=="dead"&&a.state!=="idle"&&a.state!=="patrol"),o.leader&&(o.leader.isDead||o.leader.state==="dead")&&(this._handleLeaderDeath(o),o.leader=null),o.members.length===0&&this.activeGroups.delete(s);const n=i.filter(s=>s.groupId===null);for(const s of n){let o=!1;for(const[a,c]of this.activeGroups){if(c.members.length===0)continue;if(c.members.some(h=>s.mesh.position.distanceTo(h.mesh.position)<this.groupRadius)){const h=this.groupJoinDelayMin+Math.random()*(this.groupJoinDelayMax-this.groupJoinDelayMin);s.joinGroup(a,!1,h),c.members.push(s),o=!0;break}}if(!o){const a=`group_${this.nextGroupId++}`;s.joinGroup(a,!0,0),this.activeGroups.set(a,{leader:s,members:[s],attackers:[]})}}this._mergeNearbyGroups(),this._manageGroupAttackers(t)}_handleLeaderDeath(t){for(const e of t.members)!e.isDead&&e.state!=="dead"&&!e.isGroupLeader&&e.triggerConfusion(this.leaderDeathConfusionTime);setTimeout(()=>{const e=t.members.filter(i=>!i.isDead&&i.state!=="dead");if(e.length>0){e.sort((n,s)=>s.health-n.health);const i=e[0];i.isGroupLeader=!0,t.leader=i}},this.leaderDeathConfusionTime*1e3)}_mergeNearbyGroups(){const t=Array.from(this.activeGroups.keys());for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){const n=this.activeGroups.get(t[e]),s=this.activeGroups.get(t[i]);if(!n||!s||n.members.length===0||s.members.length===0)continue;let o=!1;for(const a of n.members){for(const c of s.members)if(a.mesh.position.distanceTo(c.mesh.position)<this.groupRadius){o=!0;break}if(o)break}if(o){for(const a of s.members)a.groupId=t[e],a.isGroupLeader=!1,n.members.push(a);s.leader&&n.leader&&s.leader.health>n.leader.health&&(n.leader.isGroupLeader=!1,s.leader.isGroupLeader=!0,n.leader=s.leader),this.activeGroups.delete(t[i])}}}_manageGroupAttackers(t){for(const[e,i]of this.activeGroups){const n=i.members.filter(c=>c.isAttacking?.()||c.state==="attack"),s=i.members.filter(c=>c.isDead||c.state==="dead"||c.isAttacking?.()||c.state==="attack"||c.isWaitingToJoin||c.isConfused?!1:c.mesh.position.distanceTo(t.mesh.position)<=(c.config.attackRange||2.2)),o=this.maxActiveAttackers-n.length;let a=0;for(const c of i.members)c.isDead||c.state==="dead"||(c.isAttacking?.()||c.state==="attack"?c.canAttackInGroup=!0:a<o&&s.includes(c)?(c.canAttackInGroup=!0,a++):s.includes(c)?c.canAttackInGroup=!1:c.canAttackInGroup=!0);i.attackers=n}}getPlayerZone(t){const e=ta(t.x,t.z);return yr(e)}resetAll(){this.activeGroups.clear(),this.enemies.forEach(t=>{t.isBoss&&this.defeatedBosses.has(t.bossId||"crypt-lord")||t.respawn()}),this.boss&&this.boss.respawn()}markBossDefeated(t){this.defeatedBosses.add(t)}isBossDefeated(t){return this.defeatedBosses.has(t)}getBoss(){return this.boss}getCryptLord(){return this.cryptLord}getActiveBoss(){return this.cryptLord&&this.cryptLord.bossActive&&!this.cryptLord.isDead?this.cryptLord:this.boss&&this.boss.isActive&&!this.boss.isDead?this.boss:null}}const Bu=Math.sqrt(3),zv=.5*(Bu-1),Hs=(3-Bu)/6,Eh=r=>Math.floor(r)|0,Ch=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Gv(r=Math.random){const t=Hv(r),e=new Float64Array(t).map(n=>Ch[n%12*2]),i=new Float64Array(t).map(n=>Ch[n%12*2+1]);return function(s,o){let a=0,c=0,l=0;const h=(s+o)*zv,u=Eh(s+h),d=Eh(o+h),f=(u+d)*Hs,g=u-f,_=d-f,m=s-g,p=o-_;let x,v;m>p?(x=1,v=0):(x=0,v=1);const y=m-x+Hs,w=p-v+Hs,E=m-1+2*Hs,C=p-1+2*Hs,I=u&255,S=d&255;let T=.5-m*m-p*p;if(T>=0){const U=I+t[S],W=e[U],X=i[U];T*=T,a=T*T*(W*m+X*p)}let P=.5-y*y-w*w;if(P>=0){const U=I+x+t[S+v],W=e[U],X=i[U];P*=P,c=P*P*(W*y+X*w)}let O=.5-E*E-C*C;if(O>=0){const U=I+1+t[S+1],W=e[U],X=i[U];O*=O,l=O*O*(W*E+X*C)}return 70*(a+c+l)}}function Hv(r){const e=new Uint8Array(512);for(let i=0;i<512/2;i++)e[i]=i;for(let i=0;i<512/2-1;i++){const n=i+~~(r()*(256-i)),s=e[i];e[i]=e[n],e[n]=s}for(let i=256;i<512;i++)e[i]=e[i-256];return e}class Vv{constructor(t){this.scene=t,this.chunkSize=64,this.chunkResolution=32,this.loadDistance=3,this.unloadDistance=5,this.heightScale=25,this.baseHeight=0,this.castleRadius=30,this.castleBlendRadius=45,this.seed=12345,this.noise2D=Gv(()=>this.seed/1e4),this.octaves=[{frequency:.003,amplitude:1},{frequency:.01,amplitude:.4},{frequency:.03,amplitude:.15},{frequency:.08,amplitude:.05}],this.chunks=new Map,this.lastPlayerChunkX=null,this.lastPlayerChunkZ=null,this.terrainMaterial=this._createTerrainMaterial(),this._updateChunks(0,0)}_sampleNoise(t,e){let i=0,n=0;for(const s of this.octaves)i+=this.noise2D(t*s.frequency,e*s.frequency)*s.amplitude,n+=s.amplitude;return i/=n,i*this.heightScale+this.baseHeight}getTerrainHeight(t,e){const i=Math.sqrt(t*t+e*e);if(i<this.castleRadius)return this.baseHeight;const n=this._sampleNoise(t,e);if(i<this.castleBlendRadius){const s=(i-this.castleRadius)/(this.castleBlendRadius-this.castleRadius),o=s*s*(3-2*s);return ie.lerp(this.baseHeight,n,o)}return n}getTerrainSlope(t,e){const n=this.getTerrainHeight(t,e),s=this.getTerrainHeight(t+1,e),o=this.getTerrainHeight(t,e+1),a=(s-n)/1,c=(o-n)/1;return Math.sqrt(a*a+c*c)}getTerrainNormal(t,e){const n=this.getTerrainHeight(t,e),s=this.getTerrainHeight(t+1,e),o=this.getTerrainHeight(t,e+1),a=new b(1,s-n,0),c=new b(0,o-n,1);return new b().crossVectors(c,a).normalize()}_worldToChunk(t,e){return{chunkX:Math.floor(t/this.chunkSize),chunkZ:Math.floor(e/this.chunkSize)}}_chunkKey(t,e){return`${t},${e}`}update(t,e){const{chunkX:i,chunkZ:n}=this._worldToChunk(t,e);i===this.lastPlayerChunkX&&n===this.lastPlayerChunkZ||(this.lastPlayerChunkX=i,this.lastPlayerChunkZ=n,this._updateChunks(i,n))}_updateChunks(t,e){const i=new Set;for(let s=-this.loadDistance;s<=this.loadDistance;s++)for(let o=-this.loadDistance;o<=this.loadDistance;o++){const a=t+s,c=e+o;i.add(this._chunkKey(a,c)),this.chunks.has(this._chunkKey(a,c))||this._loadChunk(a,c)}const n=[];for(const[s,o]of this.chunks){const[a,c]=s.split(",").map(Number),l=Math.abs(a-t),h=Math.abs(c-e);(l>this.unloadDistance||h>this.unloadDistance)&&n.push(s)}for(const s of n)this._unloadChunk(s)}_loadChunk(t,e){const i=this._chunkKey(t,e);if(this.chunks.has(i))return;const n=t*this.chunkSize,s=e*this.chunkSize,o=new We(this.chunkSize,this.chunkSize,this.chunkResolution,this.chunkResolution);o.rotateX(-Math.PI/2);const a=o.attributes.position.array;for(let l=0;l<a.length;l+=3){const h=a[l],u=a[l+2],d=h+n+this.chunkSize/2,f=u+s+this.chunkSize/2,g=this.getTerrainHeight(d,f);a[l+1]=g}o.computeVertexNormals();const c=new F(o,this.terrainMaterial);c.position.set(n+this.chunkSize/2,0,s+this.chunkSize/2),c.receiveShadow=!0,c.castShadow=!1,this.scene.add(c),this.chunks.set(i,{mesh:c,geometry:o})}_unloadChunk(t){const e=this.chunks.get(t);e&&(this.scene.remove(e.mesh),e.geometry.dispose(),this.chunks.delete(t))}_createTerrainMaterial(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#3a5a30",e.fillRect(0,0,512,512);for(let n=0;n<1e4;n++){const s=Math.random()*512,o=Math.random()*512,c=80+Math.floor(Math.random()*30),l=50+Math.floor(Math.random()*20),h=40+Math.floor(Math.random()*15);e.fillStyle=`rgb(${l}, ${c}, ${h})`,e.fillRect(s,o,2+Math.random()*3,2+Math.random()*3)}for(let n=0;n<50;n++){const s=Math.random()*512,o=Math.random()*512,a=10+Math.random()*30;e.fillStyle=`rgba(90, 70, 50, ${.2+Math.random()*.3})`,e.beginPath(),e.ellipse(s,o,a,a*.7,0,0,Math.PI*2),e.fill()}const i=new uu(t);return i.wrapS=Ui,i.wrapT=Ui,i.repeat.set(4,4),new _t({map:i,color:6982224,roughness:.9,metalness:0})}getBiome(t,e){const i=Math.sqrt(t*t+e*e);return i<this.castleRadius?"castle":i<100?"safe_meadow":i<300?"grassland":i<600?"dense_woods":"dark_frontier"}getBiomeParams(t,e){const i=this.getBiome(t,e),n={castle:{treeDensity:0,grassDensity:0,fogDensity:0,ambientLight:1,groundColor:5592405},safe_meadow:{treeDensity:.05,grassDensity:.8,fogDensity:.001,ambientLight:.9,groundColor:8039008},grassland:{treeDensity:.15,grassDensity:.6,fogDensity:.002,ambientLight:.7,groundColor:5933632},dense_woods:{treeDensity:.5,grassDensity:.4,fogDensity:.004,ambientLight:.4,groundColor:3825712},dark_frontier:{treeDensity:.3,grassDensity:.2,fogDensity:.008,ambientLight:.2,groundColor:4872768}};return n[i]||n.grassland}findValidSpawnPoint(t=50,e=200){for(let n=0;n<20;n++){const s=Math.random()*Math.PI*2,o=t+Math.random()*(e-t),a=Math.cos(s)*o,c=Math.sin(s)*o,l=this.getTerrainHeight(a,c);if(!(this.getTerrainSlope(a,c)>.5)&&!(l<-2))return new b(a,l,c)}return new b(60,this.getTerrainHeight(60,0),0)}raycast(t){for(const[e,i]of this.chunks){const n=t.intersectObject(i.mesh);if(n.length>0)return n[0].point}return null}getLoadedChunkCount(){return this.chunks.size}dispose(){for(const[t,e]of this.chunks)this.scene.remove(e.mesh),e.geometry.dispose();this.chunks.clear(),this.terrainMaterial.dispose()}}class Wv{constructor(t,e){this.scene=t,this.terrain=e,this.chunkSize=64,this.loadDistance=3,this.unloadDistance=5,this.treesPerChunk=15,this.treeMinDistance=4,this.treeMaxSlope=.4,this.castleExclusionRadius=35,this.trunkCollisionRadius=.4,this.grassPerChunk=100,this.bushesPerChunk=12,this.chunks=new Map,this.treeColliders=[],this._createSharedAssets(),this.lastPlayerChunkX=null,this.lastPlayerChunkZ=null,this.update(0,0),console.log("[FoliageManager] Initialized with chunk-based generation")}_createSharedAssets(){this.oakTrunkGeo=new re(.15,.25,3,6),this.oakTrunkGeo.translate(0,1.5,0),this.oakFoliageGeo=new _s(1.8,1),this.oakFoliageGeo.translate(0,4.2,0),this.pineTrunkGeo=new re(.12,.2,4,6),this.pineTrunkGeo.translate(0,2,0),this.pineFoliageGeo=new Oi(1.5,3,6),this.pineFoliageGeo.translate(0,5.5,0),this.grassGeo=new We(.3,.5),this.grassGeo.translate(0,.25,0),this.bushGeo=new _s(.5,1),this.bushGeo.scale(1,.7,1),this.bushGeo.translate(0,.35,0),this.oakTrunkMat=new _t({color:4863269,roughness:.95}),this.oakFoliageMat=new _t({color:2972190,roughness:.9}),this.pineTrunkMat=new _t({color:3811866,roughness:.95}),this.pineFoliageMat=new _t({color:1722904,roughness:.85}),this.grassMat=new _t({color:4880944,roughness:.9,side:pe,alphaTest:.5}),this.bushMat=new _t({color:3828264,roughness:.9})}_seededRandom(t){const e=Math.sin(t*12.9898+78.233)*43758.5453;return e-Math.floor(e)}_chunkKey(t,e){return`${t},${e}`}_worldToChunk(t,e){return{cx:Math.floor(t/this.chunkSize),cz:Math.floor(e/this.chunkSize)}}update(t,e){const{cx:i,cz:n}=this._worldToChunk(t,e);if(i===this.lastPlayerChunkX&&n===this.lastPlayerChunkZ)return;this.lastPlayerChunkX=i,this.lastPlayerChunkZ=n;const s=new Set;for(let a=-this.loadDistance;a<=this.loadDistance;a++)for(let c=-this.loadDistance;c<=this.loadDistance;c++){const l=i+a,h=n+c,u=this._chunkKey(l,h);s.add(u),this.chunks.has(u)||this._loadChunk(l,h)}const o=[];for(const[a]of this.chunks)if(!s.has(a)){const[c,l]=a.split(",").map(Number),h=Math.abs(c-i),u=Math.abs(l-n);(h>this.unloadDistance||u>this.unloadDistance)&&o.push(a)}for(const a of o)this._unloadChunk(a)}_loadChunk(t,e){const i=this._chunkKey(t,e);if(this.chunks.has(i))return;const n={trees:[],colliders:[],meshes:[]},s=t*this.chunkSize,o=e*this.chunkSize,a=t*73856093+e*19349663,c=[],l=this.treesPerChunk*5;for(let h=0;h<l&&c.length<this.treesPerChunk;h++){const u=this._seededRandom(a+h*3),d=this._seededRandom(a+h*3+1),f=u*this.chunkSize,g=d*this.chunkSize,_=s+f,m=o+g;if(Math.sqrt(_*_+m*m)<this.castleExclusionRadius||this.terrain.getTerrainSlope(_,m)>this.treeMaxSlope)continue;const v=this.terrain.getBiomeParams(_,m);if(this._seededRandom(a+h*3+2)>v.treeDensity*3)continue;let w=!1;for(const P of c){const O=_-P.x,U=m-P.z;if(O*O+U*U<this.treeMinDistance*this.treeMinDistance){w=!0;break}}if(w)continue;const E=this.terrain.getTerrainHeight(_,m),C=this.terrain.getBiome(_,m),I=(C==="dense_woods"||C==="dark_frontier")&&this._seededRandom(a+h*7)>.3,S=.7+this._seededRandom(a+h*5)*.6,T=this._seededRandom(a+h*11)*Math.PI*2;c.push({x:_,y:E,z:m,scale:S,rotation:T,isPine:I})}c.length>0&&this._createTreeMeshes(n,c),this._createGrassMesh(n,t,e,a),this._createBushMesh(n,t,e,a+999),this.chunks.set(i,n),this.treeColliders.push(...n.colliders)}_createTreeMeshes(t,e){const i=e.filter(o=>!o.isPine),n=e.filter(o=>o.isPine),s=new Ot;if(i.length>0){const o=new Cn(this.oakTrunkGeo,this.oakTrunkMat,i.length),a=new Cn(this.oakFoliageGeo,this.oakFoliageMat,i.length);o.castShadow=!0,o.receiveShadow=!0,a.castShadow=!0,a.receiveShadow=!0,i.forEach((c,l)=>{s.makeRotationY(c.rotation),s.scale(new b(c.scale,c.scale,c.scale)),s.setPosition(c.x,c.y,c.z),o.setMatrixAt(l,s),a.setMatrixAt(l,s),t.colliders.push({x:c.x,z:c.z,radius:this.trunkCollisionRadius*c.scale,height:4*c.scale,baseY:c.y,chunkKey:null})}),o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,this.scene.add(o),this.scene.add(a),t.meshes.push(o,a)}if(n.length>0){const o=new Cn(this.pineTrunkGeo,this.pineTrunkMat,n.length),a=new Cn(this.pineFoliageGeo,this.pineFoliageMat,n.length);o.castShadow=!0,o.receiveShadow=!0,a.castShadow=!0,a.receiveShadow=!0,n.forEach((c,l)=>{s.makeRotationY(c.rotation),s.scale(new b(c.scale,c.scale,c.scale)),s.setPosition(c.x,c.y,c.z),o.setMatrixAt(l,s),a.setMatrixAt(l,s),t.colliders.push({x:c.x,z:c.z,radius:this.trunkCollisionRadius*c.scale*.9,height:5*c.scale,baseY:c.y})}),o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,this.scene.add(o),this.scene.add(a),t.meshes.push(o,a)}t.trees=e}_createGrassMesh(t,e,i,n){const s=e*this.chunkSize,o=i*this.chunkSize,a=new Cn(this.grassGeo,this.grassMat,this.grassPerChunk*3);a.receiveShadow=!0;const c=new Ot;let l=0;for(let h=0;h<this.grassPerChunk;h++){const u=this._seededRandom(n+h*2),d=this._seededRandom(n+h*2+1),f=s+u*this.chunkSize,g=o+d*this.chunkSize;if(f*f+g*g<this.castleExclusionRadius*this.castleExclusionRadius)continue;const _=this.terrain.getBiomeParams(f,g);if(this._seededRandom(n+h*3)>_.grassDensity)continue;const p=this.terrain.getTerrainHeight(f,g);for(let x=0;x<3;x++){const v=(this._seededRandom(n+h*10+x)-.5)*.3,y=(this._seededRandom(n+h*10+x+5)-.5)*.3,w=x/3*Math.PI+this._seededRandom(n+h*20+x)*.5,E=.5+this._seededRandom(n+h*30+x)*.5;if(c.makeRotationY(w),c.scale(new b(E,E,E)),c.setPosition(f+v,p,g+y),a.setMatrixAt(l,c),l++,l>=this.grassPerChunk*3)break}if(l>=this.grassPerChunk*3)break}a.instanceMatrix.needsUpdate=!0,a.count=l,this.scene.add(a),t.meshes.push(a)}_createBushMesh(t,e,i,n){const s=e*this.chunkSize,o=i*this.chunkSize,a=new Cn(this.bushGeo,this.bushMat,this.bushesPerChunk);a.castShadow=!0,a.receiveShadow=!0;const c=new Ot;let l=0;for(let h=0;h<this.bushesPerChunk*3&&l<this.bushesPerChunk;h++){const u=this._seededRandom(n+h*2),d=this._seededRandom(n+h*2+1),f=s+u*this.chunkSize,g=o+d*this.chunkSize,_=(this.castleExclusionRadius+5)*(this.castleExclusionRadius+5);if(f*f+g*g<_)continue;const m=this.terrain.getBiomeParams(f,g);if(this._seededRandom(n+h*3)>m.grassDensity*.8||this.terrain.getTerrainSlope(f,g)>.3)continue;const x=this.terrain.getTerrainHeight(f,g),v=.6+this._seededRandom(n+h*4)*.8,y=this._seededRandom(n+h*5)*Math.PI*2;c.makeRotationY(y),c.scale(new b(v,v,v)),c.setPosition(f,x,g),a.setMatrixAt(l,c),l++}a.instanceMatrix.needsUpdate=!0,a.count=l,this.scene.add(a),t.meshes.push(a)}_unloadChunk(t){const e=this.chunks.get(t);if(e){for(const i of e.meshes)this.scene.remove(i),i.geometry.dispose();this.treeColliders=this.treeColliders.filter(i=>{for(const n of e.colliders)if(i===n)return!1;return!0}),this.chunks.delete(t)}}checkTreeCollision(t,e=.4){for(const i of this.treeColliders){if(t.y<i.baseY-1||t.y>i.baseY+i.height)continue;const n=t.x-i.x,s=t.z-i.z,o=n*n+s*s,a=i.radius+e;if(o<a*a){const c=Math.sqrt(o);if(c>.001){const l=a-c;return new b(n/c*l,0,s/c*l)}}}return null}getTreeColliders(){return this.treeColliders}isNearTree(t,e,i=3){for(const n of this.treeColliders){const s=t-n.x,o=e-n.z;if(s*s+o*o<i*i)return!0}return!1}getLoadedChunkCount(){return this.chunks.size}dispose(){for(const[t]of this.chunks)this._unloadChunk(t);this.oakTrunkGeo.dispose(),this.oakFoliageGeo.dispose(),this.pineTrunkGeo.dispose(),this.pineFoliageGeo.dispose(),this.grassGeo.dispose(),this.bushGeo.dispose(),this.oakTrunkMat.dispose(),this.oakFoliageMat.dispose(),this.pineTrunkMat.dispose(),this.pineFoliageMat.dispose(),this.grassMat.dispose(),this.bushMat.dispose()}}class Xv{constructor(t,e){this.scene=t,this.terrain=e,this.regionSize=200,this.loadDistance=2,this.unloadDistance=3,this.minDistFromCastle=60,this.villagesPerRegion=1,this.maxSlopeForVillage=.3,this.minVillageSpacing=80,this.materials=this._createMaterials(),this.regions=new Map,this.villages=[],this.lastPlayerRegionX=null,this.lastPlayerRegionZ=null,this.update(0,0),console.log("[VillageManager] Initialized with region-based generation")}_seededRandom(t){const e=Math.sin(t*12.9898+78.233)*43758.5453;return e-Math.floor(e)}_regionKey(t,e){return`${t},${e}`}_worldToRegion(t,e){return{rx:Math.floor(t/this.regionSize),rz:Math.floor(e/this.regionSize)}}update(t,e){const{rx:i,rz:n}=this._worldToRegion(t,e);if(i===this.lastPlayerRegionX&&n===this.lastPlayerRegionZ)return;this.lastPlayerRegionX=i,this.lastPlayerRegionZ=n;const s=new Set;for(let a=-this.loadDistance;a<=this.loadDistance;a++)for(let c=-this.loadDistance;c<=this.loadDistance;c++){const l=i+a,h=n+c,u=this._regionKey(l,h);s.add(u),this.regions.has(u)||this._loadRegion(l,h)}const o=[];for(const[a]of this.regions){const[c,l]=a.split(",").map(Number),h=Math.abs(c-i),u=Math.abs(l-n);(h>this.unloadDistance||u>this.unloadDistance)&&o.push(a)}for(const a of o)this._unloadRegion(a)}_loadRegion(t,e){const i=this._regionKey(t,e);if(this.regions.has(i))return;const n={villages:[],meshes:[]},s=t*this.regionSize,o=e*this.regionSize,a=t*73856093+e*19349663,c=20;for(let l=0;l<c;l++){const h=this._seededRandom(a+l*3),u=this._seededRandom(a+l*3+1),d=s+h*this.regionSize,f=o+u*this.regionSize;if(Math.sqrt(d*d+f*f)<this.minDistFromCastle||this.terrain.getTerrainSlope(d,f)>this.maxSlopeForVillage)continue;let m=!1;for(const y of this.villages){const w=d-y.x,E=f-y.z;if(Math.sqrt(w*w+E*E)<this.minVillageSpacing){m=!0;break}}if(m||this.terrain.getBiome(d,f)==="dark_frontier")continue;const x=this.terrain.getTerrainHeight(d,f),v={x:d,y:x,z:f,rotation:this._seededRandom(a+l*7)*Math.PI*2,size:2+Math.floor(this._seededRandom(a+l*11)*2),regionKey:i};this._buildVillage(v,n),n.villages.push(v),this.villages.push(v);break}this.regions.set(i,n)}_unloadRegion(t){const e=this.regions.get(t);if(e){for(const i of e.meshes)this.scene.remove(i),i.traverse(n=>{n.geometry&&n.geometry.dispose()});this.villages=this.villages.filter(i=>i.regionKey!==t),this.regions.delete(t)}}_createMaterials(){return{hutWall:new _t({color:9139029,roughness:.9,metalness:0}),hutRoof:new _t({color:10519900,roughness:1,metalness:0}),marketWood:new _t({color:7033668,roughness:.85,metalness:0}),wellStone:new _t({color:7368816,roughness:.95,metalness:0}),wellWood:new _t({color:6045747,roughness:.9,metalness:0}),fenceWood:new _t({color:8021074,roughness:.9,metalness:0})}}_buildVillage(t,e){const i=new Kt;i.position.set(t.x,0,t.z),i.rotation.y=t.rotation,this._createWell(i,0,0);const n=t.size;for(let a=0;a<n;a++){const c=a/n*Math.PI*2+Math.random()*.5,l=8+Math.random()*5,h=Math.cos(c)*l,u=Math.sin(c)*l;this._createHut(i,h,u,t)}const s=1+Math.floor(Math.random()*2);for(let a=0;a<s;a++){const c=a/s*Math.PI*2+Math.PI/4+Math.random()*.3,l=5+Math.random()*3;this._createMarketStall(i,Math.cos(c)*l,Math.sin(c)*l,t)}const o=3+Math.floor(Math.random()*3);for(let a=0;a<o;a++){const c=Math.random()*Math.PI*2,l=12+Math.random()*5;this._createFence(i,Math.cos(c)*l,Math.sin(c)*l,c,t)}this.scene.add(i),e.meshes.push(i)}_createHut(t,e,i,n){const s=Math.cos(n.rotation),o=Math.sin(n.rotation),a=n.x+e*s-i*o,c=n.z+e*o+i*s,l=this.terrain.getTerrainHeight(a,c),h=new Kt;h.position.set(e,l,i);const u=2.5+Math.random()*.5,d=1.5+Math.random()*.3,f=new re(d,d*1.1,u,12),g=new F(f,this.materials.hutWall);g.position.y=u/2,g.castShadow=!0,g.receiveShadow=!0,h.add(g);const _=1.8,m=new Oi(d*1.4,_,12),p=new F(m,this.materials.hutRoof);p.position.y=u+_/2-.1,p.castShadow=!0,h.add(p);const x=new Jt(.6,1.5,.1),v=new _t({color:2760725}),y=new F(x,v);y.position.set(0,.75,d+.05),h.add(y),h.rotation.y=Math.random()*Math.PI*2,t.add(h)}_createMarketStall(t,e,i,n){const s=Math.cos(n.rotation),o=Math.sin(n.rotation),a=n.x+e*s-i*o,c=n.z+e*o+i*s,l=this.terrain.getTerrainHeight(a,c),h=new Kt;h.position.set(e,l,i);const u=2.2,d=new re(.08,.08,u,6),f=2,g=1.5,_=[[-f/2,-g/2],[f/2,-g/2],[-f/2,g/2],[f/2,g/2]];for(const[E,C]of _){const I=new F(d,this.materials.marketWood);I.position.set(E,u/2,C),I.castShadow=!0,h.add(I)}const m=new Jt(f,.1,g),p=new F(m,this.materials.marketWood);p.position.y=.9,p.castShadow=!0,p.receiveShadow=!0,h.add(p);const x=new We(f*1.2,g*1.3),v=[12080208,5535160,7051604,13216083],y=new _t({color:v[Math.floor(Math.random()*v.length)],roughness:.8,side:pe}),w=new F(x,y);w.position.y=u+.05,w.rotation.x=-Math.PI/2+.15,w.castShadow=!0,h.add(w),h.rotation.y=Math.random()*Math.PI*2,t.add(h)}_createWell(t,e,i){const n=new Kt;n.position.set(e,0,i);const s=new en(1,.3,8,16),o=new F(s,this.materials.wellStone);o.rotation.x=Math.PI/2,o.position.y=.3,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new re(1,1,.8,12,1,!0),c=new F(a,this.materials.wellStone);c.position.y=.4,c.castShadow=!0,n.add(c);const l=new re(.08,.08,2.5,6),h=new F(l,this.materials.wellWood);h.position.set(.7,1.25,0),h.castShadow=!0,n.add(h);const u=new F(l,this.materials.wellWood);u.position.set(-.7,1.25,0),u.castShadow=!0,n.add(u);const d=new re(.06,.06,1.6,6),f=new F(d,this.materials.wellWood);f.position.y=2.5,f.rotation.z=Math.PI/2,f.castShadow=!0,n.add(f);const g=new Oi(1.2,.6,4),_=new F(g,this.materials.hutRoof);_.position.y=2.9,_.rotation.y=Math.PI/4,_.castShadow=!0,n.add(_);const m=new kn(.85,12),p=new _t({color:1716304,roughness:.3,metalness:.1}),x=new F(m,p);x.rotation.x=-Math.PI/2,x.position.y=.1,n.add(x),t.add(n)}_createFence(t,e,i,n,s){const o=Math.cos(s.rotation),a=Math.sin(s.rotation),c=s.x+e*o-i*a,l=s.z+e*a+i*o,h=this.terrain.getTerrainHeight(c,l),u=new Kt;u.position.set(e,h,i),u.rotation.y=n;const d=3+Math.random()*2,f=Math.ceil(d/1.2),g=d/(f-1),_=new re(.06,.07,1,6);for(let v=0;v<f;v++){const y=new F(_,this.materials.fenceWood);y.position.set(v*g-d/2,.5,0),y.castShadow=!0,u.add(y)}const m=new Jt(d,.08,.06),p=new F(m,this.materials.fenceWood);p.position.y=.3,p.castShadow=!0,u.add(p);const x=new F(m,this.materials.fenceWood);x.position.y=.7,x.castShadow=!0,u.add(x),t.add(u)}getVillages(){return this.villages}isNearVillage(t,e,i=20){for(const n of this.villages){const s=t-n.x,o=e-n.z;if(Math.sqrt(s*s+o*o)<i)return!0}return!1}getLoadedRegionCount(){return this.regions.size}dispose(){for(const[t]of this.regions)this._unloadRegion(t);for(const t of Object.values(this.materials))t.dispose()}}class qv{constructor(t,e,i=[]){this.scene=t,this.terrain=e,this.colliders=i,this.regionSize=150,this.loadDistance=2,this.unloadDistance=3,this.minDistFromCastle=80,this.ruinsPerRegion=1,this.maxSlopeForRuins=.4,this.minRuinsSpacing=60,this.materials=this._createMaterials(),this.regions=new Map,this.ruins=[],this.lastPlayerRegionX=null,this.lastPlayerRegionZ=null,this.update(0,0),console.log("[RuinsManager] Initialized with region-based generation")}_seededRandom(t){const e=Math.sin(t*12.9898+78.233)*43758.5453;return e-Math.floor(e)}_regionKey(t,e){return`${t},${e}`}_worldToRegion(t,e){return{rx:Math.floor(t/this.regionSize),rz:Math.floor(e/this.regionSize)}}update(t,e){const{rx:i,rz:n}=this._worldToRegion(t,e);if(i===this.lastPlayerRegionX&&n===this.lastPlayerRegionZ)return;this.lastPlayerRegionX=i,this.lastPlayerRegionZ=n;const s=new Set;for(let a=-this.loadDistance;a<=this.loadDistance;a++)for(let c=-this.loadDistance;c<=this.loadDistance;c++){const l=i+a,h=n+c,u=this._regionKey(l,h);s.add(u),this.regions.has(u)||this._loadRegion(l,h)}const o=[];for(const[a]of this.regions){const[c,l]=a.split(",").map(Number),h=Math.abs(c-i),u=Math.abs(l-n);(h>this.unloadDistance||u>this.unloadDistance)&&o.push(a)}for(const a of o)this._unloadRegion(a)}_loadRegion(t,e){const i=this._regionKey(t,e);if(this.regions.has(i))return;const n={ruins:[],meshes:[],localColliders:[]},s=t*this.regionSize,o=e*this.regionSize,a=t*48271+e*16807,c=15;for(let l=0;l<c;l++){const h=this._seededRandom(a+l*3),u=this._seededRandom(a+l*3+1),d=s+h*this.regionSize,f=o+u*this.regionSize;if(Math.sqrt(d*d+f*f)<this.minDistFromCastle||this.terrain.getTerrainSlope(d,f)>this.maxSlopeForRuins)continue;let m=!1;for(const w of this.ruins){const E=d-w.x,C=f-w.z;if(Math.sqrt(E*E+C*C)<this.minRuinsSpacing){m=!0;break}}if(m)continue;const p=this.terrain.getBiome(d,f);if(p==="safe_meadow"||p==="castle")continue;const x=this.terrain.getTerrainHeight(d,f),v=["temple","monument","shrine","graveyard"],y={x:d,y:x,z:f,rotation:this._seededRandom(a+l*7)*Math.PI*2,type:v[Math.floor(this._seededRandom(a+l*11)*v.length)],enemyCampRadius:15+this._seededRandom(a+l*13)*10,regionKey:i};this._buildRuin(y,n),n.ruins.push(y),this.ruins.push(y);break}this.regions.set(i,n)}_unloadRegion(t){const e=this.regions.get(t);if(e){for(const i of e.meshes)this.scene.remove(i),i.traverse(n=>{n.geometry&&n.geometry.dispose()});for(const i of e.localColliders){const n=this.colliders.indexOf(i);n>=0&&this.colliders.splice(n,1)}this.ruins=this.ruins.filter(i=>i.regionKey!==t),this.regions.delete(t)}}_createMaterials(){return{ancientStone:new _t({color:5921370,roughness:.95,metalness:0}),mossyStone:new _t({color:4870208,roughness:1,metalness:0}),crackedStone:new _t({color:6973536,roughness:.9,metalness:0}),altarStone:new _t({color:3814709,roughness:.85,metalness:.05}),runeGlow:new _t({color:4491434,emissive:4491434,emissiveIntensity:.3,roughness:.5,metalness:.2})}}_buildRuin(t,e){const i=new Kt;switch(i.position.set(t.x,0,t.z),i.rotation.y=t.rotation,t.type){case"temple":this._createTempleRuin(i,t,e);break;case"monument":this._createMonumentRuin(i,t,e);break;case"shrine":this._createShrineRuin(i,t,e);break;case"graveyard":this._createGraveyardRuin(i,t,e);break}this.scene.add(i),e.meshes.push(i)}_createTempleRuin(t,e,i){const n=Math.cos(e.rotation),s=Math.sin(e.rotation);this._createAltar(t,0,0,e,i);const o=[[-6,-4],[-6,4],[6,-4],[6,4],[-6,0],[6,0],[-3,-4],[-3,4],[3,-4],[3,4]];for(const[a,c]of o){const l=e.x+a*n-c*s,h=e.z+a*s+c*n,u=this.terrain.getTerrainHeight(l,h),f=Math.random()>.4?1+Math.random()*2:3.5+Math.random();this._createColumn(t,a,c,f,u,e,i)}this._createCollapsedWall(t,-8,0,Math.PI/2,e,i),this._createCollapsedWall(t,8,0,-Math.PI/2,e,i)}_createMonumentRuin(t,e,i){const n=this.terrain.getTerrainHeight(e.x,e.z);this._createObelisk(t,0,0,n,i,e);const s=6,o=Math.cos(e.rotation),a=Math.sin(e.rotation);for(let c=0;c<s;c++){const l=c/s*Math.PI*2,h=5,u=Math.cos(l)*h,d=Math.sin(l)*h,f=e.x+u*o-d*a,g=e.z+u*a+d*o,_=this.terrain.getTerrainHeight(f,g),m=Math.random()>.2?.8+Math.random()*1.5:3+Math.random();this._createColumn(t,u,d,m,_,e,i)}this._createDebris(t,3,2,e),this._createDebris(t,-2,4,e)}_createShrineRuin(t,e,i){this._createSmallAltar(t,0,0,e,i);const n=Math.cos(e.rotation),s=Math.sin(e.rotation);for(const o of[-1,1]){const a=o*3,c=e.x+a*n,l=e.z+a*s,h=this.terrain.getTerrainHeight(c,l),u=2+Math.random()*1.5;this._createColumn(t,a,0,u,h,e,i)}this._createOfferingStones(t,0,2,e)}_createGraveyardRuin(t,e,i){const n=Math.cos(e.rotation),s=Math.sin(e.rotation);this._createMausoleum(t,0,0,e,i);const o=8+Math.floor(Math.random()*5);for(let a=0;a<o;a++){const c=Math.random()*Math.PI*2,l=4+Math.random()*6,h=Math.cos(c)*l,u=Math.sin(c)*l,d=e.x+h*n-u*s,f=e.z+h*s+u*n,g=this.terrain.getTerrainHeight(d,f);this._createHeadstone(t,h,u,g)}}_createColumn(t,e,i,n,s,o,a){const c=new Kt;c.position.set(e,s,i);const l=new re(.7,.8,.4,8),h=new F(l,this.materials.ancientStone);h.position.y=.2,h.castShadow=!0,h.receiveShadow=!0,c.add(h);const u=new re(.5,.55,n,8),d=new F(u,this.materials.mossyStone);if(d.position.y=.4+n/2,d.castShadow=!0,d.receiveShadow=!0,c.add(d),n>2.5){const x=new re(.65,.55,.3,8),v=new F(x,this.materials.crackedStone);v.position.y=.4+n+.15,v.castShadow=!0,c.add(v)}const f=Math.cos(o.rotation),g=Math.sin(o.rotation),_=o.x+e*f-i*g,m=o.z+e*g+i*f,p={type:"cylinder",position:new b(_,s,m),radius:.6,height:n+.5};this.colliders.push(p),a.localColliders.push(p),t.add(c)}_createCollapsedWall(t,e,i,n,s,o){const a=Math.cos(s.rotation),c=Math.sin(s.rotation),l=s.x+e*a-i*c,h=s.z+e*c+i*a,u=this.terrain.getTerrainHeight(l,h),d=new Kt;d.position.set(e,u,i),d.rotation.y=n;const f=1.5+Math.random(),g=4+Math.random()*2,_=new Jt(g,f,.6),m=new F(_,this.materials.mossyStone);m.position.y=f/2,m.castShadow=!0,m.receiveShadow=!0,d.add(m);for(let x=0;x<3;x++){const v=.3+Math.random()*.4,y=new Jt(v,v*.7,v),w=new F(y,this.materials.crackedStone);w.position.set((Math.random()-.5)*g,v*.35,.6+Math.random()*.5),w.rotation.set(Math.random()*.3,Math.random()*Math.PI,Math.random()*.3),w.castShadow=!0,d.add(w)}const p={type:"box",bounds:new si(new b(l-g/2,u,h-.5),new b(l+g/2,u+f,h+.5))};this.colliders.push(p),o.localColliders.push(p),t.add(d)}_createAltar(t,e,i,n,s){const o=Math.cos(n.rotation),a=Math.sin(n.rotation),c=n.x+e*o-i*a,l=n.z+e*a+i*o,h=this.terrain.getTerrainHeight(c,l),u=new Kt;u.position.set(e,h,i);const d=new Jt(3,.4,2.5),f=new F(d,this.materials.altarStone);f.position.y=.2,f.castShadow=!0,f.receiveShadow=!0,u.add(f);const g=new Jt(2,.6,1.5),_=new F(g,this.materials.altarStone);_.position.y=.7,_.castShadow=!0,_.receiveShadow=!0,u.add(_);const m=new We(1.2,.8),p=new F(m,this.materials.runeGlow);p.rotation.x=-Math.PI/2,p.position.y=1.01,u.add(p);const x=new Ke(4491434,.5,8);x.position.y=1.5,u.add(x);const v={type:"box",bounds:new si(new b(c-1.5,h,l-1.25),new b(c+1.5,h+1.2,l+1.25))};this.colliders.push(v),s.localColliders.push(v),t.add(u)}_createSmallAltar(t,e,i,n,s){const o=Math.cos(n.rotation),a=Math.sin(n.rotation),c=n.x+e*o-i*a,l=n.z+e*a+i*o,h=this.terrain.getTerrainHeight(c,l),u=new Kt;u.position.set(e,h,i);const d=new re(.6,.8,.8,8),f=new F(d,this.materials.altarStone);f.position.y=.4,f.castShadow=!0,f.receiveShadow=!0,u.add(f);const g=new en(.3,.08,8,12),_=new F(g,this.materials.ancientStone);_.rotation.x=Math.PI/2,_.position.y=.85,u.add(_);const m=new Ke(4491434,.3,5);m.position.y=1.2,u.add(m);const p={type:"cylinder",position:new b(c,h,l),radius:.9,height:1};this.colliders.push(p),s.localColliders.push(p),t.add(u)}_createOfferingStones(t,e,i,n){const s=Math.cos(n.rotation),o=Math.sin(n.rotation);for(let a=0;a<3;a++){const c=a/3*Math.PI*2,l=1.2,h=e+Math.cos(c)*l,u=i+Math.sin(c)*l,d=n.x+h*s-u*o,f=n.z+h*o+u*s,g=this.terrain.getTerrainHeight(d,f),_=new ce(.15+Math.random()*.1,6,6),m=new F(_,this.materials.crackedStone);m.position.set(h,g+.1,u),m.scale.y=.6,m.castShadow=!0,t.add(m)}}_createObelisk(t,e,i,n,s,o){const a=new Kt;a.position.set(e,n,i);const c=new Jt(2.5,.6,2.5),l=new F(c,this.materials.altarStone);l.position.y=.3,l.castShadow=!0,l.receiveShadow=!0,a.add(l);const h=6+Math.random()*2,u=new re(.3,.8,h,4),d=new F(u,this.materials.ancientStone);d.position.y=.6+h/2,d.rotation.y=Math.PI/4,d.castShadow=!0,d.receiveShadow=!0,a.add(d);const f=new Oi(.4,.6,4),g=new F(f,this.materials.runeGlow);g.position.y=.6+h+.3,g.rotation.y=Math.PI/4,a.add(g);const _=new Ke(4491434,.8,12);_.position.y=h+1,a.add(_);const m={type:"box",bounds:new si(new b(o.x+e-1.25,n,o.z+i-1.25),new b(o.x+e+1.25,n+h+1,o.z+i+1.25))};this.colliders.push(m),s.localColliders.push(m),t.add(a)}_createDebris(t,e,i,n){const s=Math.cos(n.rotation),o=Math.sin(n.rotation),a=n.x+e*s-i*o,c=n.z+e*o+i*s,l=this.terrain.getTerrainHeight(a,c),h=new Kt;h.position.set(e,l,i);const u=3+Math.floor(Math.random()*3);for(let d=0;d<u;d++){const f=.2+Math.random()*.4,g=new Jt(f,f*.6,f*.8),_=new F(g,this.materials.crackedStone);_.position.set((Math.random()-.5)*2,f*.3,(Math.random()-.5)*2),_.rotation.set(Math.random()*.4,Math.random()*Math.PI,Math.random()*.4),_.castShadow=!0,h.add(_)}t.add(h)}_createMausoleum(t,e,i,n,s){const o=Math.cos(n.rotation),a=Math.sin(n.rotation),c=n.x+e*o-i*a,l=n.z+e*a+i*o,h=this.terrain.getTerrainHeight(c,l),u=new Kt;u.position.set(e,h,i);const d=new Jt(5,.3,4),f=new F(d,this.materials.altarStone);f.position.y=.15,f.castShadow=!0,f.receiveShadow=!0,u.add(f);const g=new Jt(5,2.5,.4),_=new F(g,this.materials.mossyStone);_.position.set(0,1.55,-1.8),_.castShadow=!0,_.receiveShadow=!0,u.add(_);const m=new Jt(.4,1.8,3.2),p=new F(m,this.materials.mossyStone);p.position.set(-2.3,1.2,-.2),p.castShadow=!0,p.receiveShadow=!0,u.add(p);const x=new Jt(.4,2.2,3.2),v=new F(x,this.materials.mossyStone);v.position.set(2.3,1.4,-.2),v.castShadow=!0,v.receiveShadow=!0,u.add(v);const y=new Jt(2.2,.8,1.2),w=new F(y,this.materials.altarStone);w.position.set(0,.7,-.5),w.castShadow=!0,w.receiveShadow=!0,u.add(w);const E=new Jt(2.3,.2,1.3),C=new F(E,this.materials.ancientStone);C.position.set(.1,1.2,-.4),C.rotation.y=.08,C.castShadow=!0,u.add(C);const I={type:"box",bounds:new si(new b(c-2.5,h,l-2),new b(c+2.5,h+2.8,l+2))};this.colliders.push(I),s.localColliders.push(I),t.add(u)}_createHeadstone(t,e,i,n){const s=new Kt;s.position.set(e,n,i),s.rotation.y=Math.random()*.4-.2;const o=.6+Math.random()*.4,a=.4+Math.random()*.3,c=new Jt(a,o,.12),l=new F(c,this.materials.mossyStone);l.position.y=o/2,Math.random()>.6&&(l.rotation.x=(Math.random()-.5)*.3,l.rotation.z=(Math.random()-.5)*.2),l.castShadow=!0,s.add(l),t.add(s)}getRuins(){return this.ruins}isNearRuin(t,e,i=15){for(const n of this.ruins){const s=t-n.x,o=e-n.z;if(Math.sqrt(s*s+o*o)<i)return!0}return!1}getNearbyRuin(t,e,i=20){for(const n of this.ruins){const s=t-n.x,o=e-n.z;if(Math.sqrt(s*s+o*o)<i)return n}return null}getLoadedRegionCount(){return this.regions.size}dispose(){for(const[t]of this.regions)this._unloadRegion(t);for(const t of Object.values(this.materials))t.dispose()}}class Yv{constructor(t,e){this.scene=t,this.terrain=e,this.regionSize=150,this.loadDistance=2,this.unloadDistance=4,this.minDistFromCastle=150,this.cavesPerRegion=1,this.minCaveSpacing=80,this.minSlopeForCave=.25,this.maxSlopeForCave=.9,this.materials=this._createMaterials(),this.regions=new Map,this.caves=[],this.lastPlayerRegionX=null,this.lastPlayerRegionZ=null,this.update(0,0),console.log("[CaveManager] Initialized with region-based generation")}_seededRandom(t){const e=Math.sin(t*12.9898+78.233)*43758.5453;return e-Math.floor(e)}_regionKey(t,e){return`${t},${e}`}_worldToRegion(t,e){return{rx:Math.floor(t/this.regionSize),rz:Math.floor(e/this.regionSize)}}update(t,e){const{rx:i,rz:n}=this._worldToRegion(t,e);if(i===this.lastPlayerRegionX&&n===this.lastPlayerRegionZ)return;this.lastPlayerRegionX=i,this.lastPlayerRegionZ=n;const s=new Set;for(let a=-this.loadDistance;a<=this.loadDistance;a++)for(let c=-this.loadDistance;c<=this.loadDistance;c++){const l=i+a,h=n+c,u=this._regionKey(l,h);s.add(u),this.regions.has(u)||this._loadRegion(l,h)}const o=[];for(const[a]of this.regions){const[c,l]=a.split(",").map(Number),h=Math.abs(c-i),u=Math.abs(l-n);(h>this.unloadDistance||u>this.unloadDistance)&&o.push(a)}for(const a of o)this._unloadRegion(a)}_loadRegion(t,e){const i=this._regionKey(t,e);if(this.regions.has(i))return;const n={caves:[],meshes:[]},s=t*this.regionSize,o=e*this.regionSize,a=t*73856093+e*19349663+54321,c=25;for(let l=0;l<c;l++){const h=this._seededRandom(a+l*3),u=this._seededRandom(a+l*3+1),d=s+h*this.regionSize,f=o+u*this.regionSize;if(Math.sqrt(d*d+f*f)<this.minDistFromCastle)continue;const _=this.terrain.getTerrainSlope(d,f);if(_<this.minSlopeForCave||_>this.maxSlopeForCave)continue;let m=!1;for(const w of this.caves){const E=d-w.x,C=f-w.z;if(Math.sqrt(E*E+C*C)<this.minCaveSpacing){m=!0;break}}if(m)continue;const p=this.terrain.getTerrainHeight(d,f),x=Math.atan2(-d,-f),v=this._seededRandom(a+l*7)<.5?"crystal":"torch",y={x:d,y:p,z:f,rotation:x,type:v,size:1.5+this._seededRandom(a+l*11)*.5,regionKey:i};this._buildCaveEntrance(y,n),n.caves.push(y),this.caves.push(y);break}this.regions.set(i,n)}_unloadRegion(t){const e=this.regions.get(t);if(e){for(const i of e.meshes)this.scene.remove(i),i.traverse(n=>{n.geometry&&n.geometry.dispose()});this.caves=this.caves.filter(i=>i.regionKey!==t),this.regions.delete(t)}}_createMaterials(){return{caveRock:new _t({color:1710618,roughness:1,metalness:0}),frameRock:new _t({color:3814704,roughness:.95,metalness:0}),moss:new _t({color:2768928,roughness:.9,metalness:0}),crystalCyan:new _t({color:65535,emissive:43690,emissiveIntensity:.8,roughness:.3,metalness:.2}),crystalPurple:new _t({color:11167487,emissive:7816362,emissiveIntensity:.8,roughness:.3,metalness:.2}),torchWood:new _t({color:4861984,roughness:.9,metalness:0})}}_buildCaveEntrance(t,e){const i=new Kt;i.position.set(t.x,t.y,t.z),i.rotation.y=t.rotation;const n=t.size;this._createCaveOpening(i,n),this._createRockyFrame(i,n),this._createDebris(i,n),t.type==="crystal"?this._createCrystalMarkers(i,n):this._createTorchMarkers(i,n),this._createAtmosphere(i,t),this.scene.add(i),e.meshes.push(i)}_createCaveOpening(t,e){const i=3.5*e,n=4*e,s=5*e,o=new kn(i*.8,16,0,Math.PI),a=new F(o,this.materials.caveRock);a.rotation.x=-.2,a.position.set(0,n*.5,-s*.5),a.scale.y=1.2,t.add(a);const c=new kn(i*.5,12,0,Math.PI),l=new Gt({color:328965}),h=new F(c,l);h.rotation.x=-.3,h.position.set(0,n*.45,-s*.8),h.scale.y=1.1,t.add(h);const u=new We(i*1.5,s),d=new F(u,this.materials.caveRock);d.rotation.x=-Math.PI/2,d.position.set(0,.02,-s*.3),d.receiveShadow=!0,t.add(d)}_createRockyFrame(t,e){const i=3.5*e,n=4*e;this._createRockFormation(t,-i*.7,0,0,e*1.2,n*.9),this._createRockFormation(t,i*.7,0,0,e*1,n*.85);const s=4+Math.floor(Math.random()*3);for(let o=0;o<s;o++){const a=o/(s-1),c=ie.lerp(-i*.6,i*.6,a),l=n*(.6+Math.sin(a*Math.PI)*.35),h=-.5+Math.random()*.5,u=.4+Math.random()*.4;this._createBoulder(t,c,l,h,u*e)}this._createOverhang(t,e)}_createRockFormation(t,e,i,n,s,o){const a=new Kt;a.position.set(e,i,n);const c=3+Math.floor(Math.random()*2);let l=0;for(let h=0;h<c;h++){const u=o/c*(.8+Math.random()*.4),d=s*(.8-h*.1)*(.8+Math.random()*.3),f=new co(d,0),g=new F(f,this.materials.frameRock);g.position.y=l+u*.5,g.rotation.set(Math.random(),Math.random(),Math.random()),g.scale.y=u/d,g.castShadow=!0,g.receiveShadow=!0,a.add(g),l+=u*.7}t.add(a)}_createBoulder(t,e,i,n,s){const o=new co(s,0),a=new F(o,this.materials.frameRock);a.position.set(e,i,n),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),a.scale.set(.8+Math.random()*.4,.6+Math.random()*.3,.8+Math.random()*.4),a.castShadow=!0,a.receiveShadow=!0,t.add(a)}_createOverhang(t,e){const i=4*e,n=new Jt(5*e,.8*e,3*e),s=new F(n,this.materials.frameRock);s.position.set(0,i+.5*e,-1*e),s.rotation.x=.15,s.rotation.z=(Math.random()-.5)*.1,s.castShadow=!0,t.add(s);const o=new We(1.5*e,1*e),a=new F(o,this.materials.moss);a.position.set(-1*e,i+.1*e,.5*e),a.rotation.x=-Math.PI/2+.3,t.add(a)}_createDebris(t,e){const i=8+Math.floor(Math.random()*6);for(let n=0;n<i;n++){const s=Math.random()*Math.PI-Math.PI/2,o=2+Math.random()*4,a=Math.sin(s)*o*e,c=Math.cos(s)*o*e,l=.15+Math.random()*.35;this._createBoulder(t,a,l*e*.3,c,l*e)}Math.random()<.7&&this._createBoneScatter(t,e)}_createBoneScatter(t,e){const i=new _t({color:13682872,roughness:.9}),n=3+Math.floor(Math.random()*4);for(let s=0;s<n;s++){const o=(Math.random()-.5)*3*e,a=1+Math.random()*2*e,c=new re(.03*e,.04*e,.4*e,6),l=new F(c,i);l.position.set(o,.02,a),l.rotation.x=Math.PI/2,l.rotation.z=Math.random()*Math.PI,t.add(l)}}_createCrystalMarkers(t,e){const i=[{x:-2.2,y:.3,z:.5,size:.6,angle:.4},{x:2.5,y:.5,z:.8,size:.5,angle:-.3},{x:-1.5,y:2.5,z:-.3,size:.35,angle:.6},{x:1.8,y:2.8,z:-.5,size:.4,angle:-.5},{x:0,y:.2,z:2,size:.45,angle:.2}];for(const n of i)Math.random()<.7&&this._createCrystal(t,n.x*e,n.y*e,n.z*e,n.size*e,n.angle);this._createCrystalCluster(t,-1.8*e,0,1.5*e,e*.7)}_createCrystal(t,e,i,n,s,o){const a=Math.random()<.6?this.materials.crystalCyan:this.materials.crystalPurple,c=new xs(s,0);c.scale(1,2.5,1);const l=new F(c,a);l.position.set(e,i+s*1.2,n),l.rotation.z=o,l.rotation.y=Math.random()*Math.PI,l.castShadow=!0,t.add(l);const h=a===this.materials.crystalCyan?65535:11167487,u=new Ke(h,.5,5*s);u.position.copy(l.position),t.add(u)}_createCrystalCluster(t,e,i,n,s){const o=new Kt;o.position.set(e,i,n);const a=4+Math.floor(Math.random()*3);for(let l=0;l<a;l++){const h=(Math.random()-.5)*s,u=(Math.random()-.5)*s,d=(.15+Math.random()*.25)*s,f=(Math.random()-.5)*.8,g=Math.random()<.5?this.materials.crystalCyan:this.materials.crystalPurple,_=new xs(d,0);_.scale(1,2+Math.random(),1);const m=new F(_,g);m.position.set(h,d*1.2,u),m.rotation.z=f,m.rotation.y=Math.random()*Math.PI*2,o.add(m)}const c=new Ke(4513245,1,8);c.position.set(0,s*.5,0),o.add(c),t.add(o)}_createTorchMarkers(t,e){const i=[{x:-2.5,y:0,z:1,wallMount:!1},{x:2.5,y:0,z:1,wallMount:!1},{x:-1.5,y:2.5,z:0,wallMount:!0},{x:1.5,y:2.5,z:0,wallMount:!0}];for(const n of i)this._createTorch(t,n.x*e,n.y*e,n.z*e,e,n.wallMount)}_createTorch(t,e,i,n,s,o){const a=new Kt;if(a.position.set(e,i,n),o){const x=new Jt(.1*s,.1*s,.3*s),v=new F(x,this.materials.torchWood);a.add(v)}const c=o?.6*s:1.2*s,l=new re(.05*s,.07*s,c,6),h=new F(l,this.materials.torchWood);h.position.y=c/2,h.castShadow=!0,a.add(h);const u=new re(.08*s,.12*s,.25*s,8),d=new _t({color:3351057}),f=new F(u,d);f.position.y=c+.1*s,a.add(f);const g=new Ke(16737826,1.5,10);g.position.y=c+.2*s,g.castShadow=!1,a.add(g);const _=new ce(.06*s,8,8),m=new Gt({color:16729088});for(let x=0;x<4;x++){const v=new F(_,m);v.position.set((Math.random()-.5)*.1*s,c+.15*s+Math.random()*.15*s,(Math.random()-.5)*.1*s),a.add(v)}const p=()=>{requestAnimationFrame(p),g.intensity=1.3+Math.sin(Date.now()*.015)*.4+Math.random()*.2};p(),t.add(a)}_createAtmosphere(t,e){const i=new Ke(2236979,.3,8);i.position.set(0,2,-2),t.add(i);const n=new We(6*e.size,3*e.size),s=new Gt({color:8947865,transparent:!0,opacity:.15,side:pe,depthWrite:!1}),o=new F(n,s);o.position.set(0,1.5*e.size,-1),o.rotation.y=Math.PI,t.add(o);const a=()=>{requestAnimationFrame(a),o.position.x=Math.sin(Date.now()*5e-4)*.2,o.material.opacity=.1+Math.sin(Date.now()*.001)*.05};a()}getCaves(){return this.caves}isNearCave(t,e,i=15){for(const n of this.caves){const s=t-n.x,o=e-n.z;if(Math.sqrt(s*s+o*o)<i)return!0}return!1}getNearestCave(t,e){let i=null,n=1/0;for(const s of this.caves){const o=t-s.x,a=e-s.z,c=Math.sqrt(o*o+a*a);c<n&&(n=c,i=s)}return i?{cave:i,distance:n}:null}getLoadedRegionCount(){return this.regions.size}dispose(){for(const[t]of this.regions)this._unloadRegion(t);for(const t of Object.values(this.materials))t.dispose()}}class Kv{constructor(t,e,i){this.scene=t,this.terrain=e,this.villageManager=i,this.npcsPerVillage={min:2,max:3},this.npcTypes=[{type:"merchant",bodyColor:3368618,headColor:13935988,role:"Sells goods"},{type:"guard",bodyColor:5592405,headColor:12883306,role:"Protects village"},{type:"villager",bodyColor:7033668,headColor:14530710,role:"Common folk"},{type:"elder",bodyColor:5583718,headColor:13213824,role:"Village wisdom"},{type:"blacksmith",bodyColor:3355443,headColor:13934720,role:"Crafts weapons"}],this.materials=new Map,this.npcs=[],this.meshes=[],this._populateVillages()}_getOrCreateMaterial(t,e=.8){const i=`${t.toString(16)}_${e}`;return this.materials.has(i)||this.materials.set(i,new _t({color:t,roughness:e,metalness:.1})),this.materials.get(i)}_populateVillages(){const t=this.villageManager.getVillages();for(const e of t)this._populateVillage(e);console.log(`[NPCManager] Created ${this.npcs.length} NPCs across ${t.length} villages`)}_populateVillage(t){const e=this.npcsPerVillage.min+Math.floor(Math.random()*(this.npcsPerVillage.max-this.npcsPerVillage.min+1)),i=[];for(i.push(this.npcTypes[0]),e>1&&i.push(this.npcTypes[1]);i.length<e;){const n=this.npcTypes[Math.floor(Math.random()*this.npcTypes.length)];i.push(n)}for(let n=0;n<e;n++){const s=n/e*Math.PI*2+Math.random()*.5,o=3+Math.random()*5,a=Math.cos(s)*o,c=Math.sin(s)*o,l=Math.cos(t.rotation),h=Math.sin(t.rotation),u=t.x+a*l-c*h,d=t.z+a*h+c*l,f=this.terrain.getTerrainHeight(u,d),g=i[n],_=this._createNPC(u,f,d,g,t);this.npcs.push(_)}}_createNPC(t,e,i,n,s){const o=new Kt;o.position.set(t,e,i);const a=1.4+Math.random()*.2,c=.25+Math.random()*.05,l=.18+Math.random()*.02,h=.6,u=this._getOrCreateMaterial(n.bodyColor),d=new re(c,c*.9,a-c*2,12),f=new F(d,u);f.position.y=h+a/2,f.castShadow=!0,f.receiveShadow=!0,o.add(f);const g=new ce(c,12,8,0,Math.PI*2,0,Math.PI/2),_=new F(g,u);_.position.y=h+a-c,_.castShadow=!0,o.add(_);const m=new ce(c*.9,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),p=new F(m,u);p.position.y=h+c,p.castShadow=!0,o.add(p);const x=this._getOrCreateMaterial(n.headColor,.6),v=new ce(l,12,10),y=new F(v,x);y.position.y=h+a+l*.7,y.castShadow=!0,o.add(y);const w=this._getOrCreateMaterial(4469538,.9),E=new re(c*.35,c*.3,h,8),C=c*.5,I=new F(E,w);I.position.set(-C,h/2,0),I.castShadow=!0,o.add(I);const S=new F(E,w);S.position.set(C,h/2,0),S.castShadow=!0,o.add(S);const T=a*.4,P=c*.25,O=new re(P,P*.8,T,8),U=new F(O,u);U.position.set(-c-P,h+a*.7,0),U.rotation.z=.3,U.castShadow=!0,o.add(U);const W=new F(O,u);W.position.set(c+P,h+a*.7,0),W.rotation.z=-.3,W.castShadow=!0,o.add(W),this._addAccessories(o,n,h,a,c);const X=Math.atan2(s.x-t,s.z-i);return o.rotation.y=X+(Math.random()-.5)*.5,this.scene.add(o),this.meshes.push(o),{mesh:o,type:n.type,role:n.role,position:new b(t,e,i),villageX:s.x,villageZ:s.z}}_addAccessories(t,e,i,n,s){switch(e.type){case"merchant":this._addApron(t,i,n,s);break;case"guard":this._addHelmet(t,i,n),this._addSpear(t,i,n,s);break;case"blacksmith":this._addApron(t,i,n,s,2236962),this._addHammer(t,i,n,s);break;case"elder":this._addStaff(t,i,n,s);break}}_addApron(t,e,i,n,s=14540236){const o=this._getOrCreateMaterial(s,.9),a=new Jt(n*1.8,i*.5,.05),c=new F(a,o);c.position.set(0,e+i*.35,n+.03),c.castShadow=!0,t.add(c)}_addHelmet(t,e,i){const n=this._getOrCreateMaterial(6710886,.4),s=new ce(.22,12,8,0,Math.PI*2,0,Math.PI/2),o=new F(s,n);o.position.y=e+i+.2,o.castShadow=!0,t.add(o);const a=new en(.22,.03,8,16),c=new F(a,n);c.position.y=e+i+.1,c.rotation.x=Math.PI/2,t.add(c)}_addSpear(t,e,i,n){const s=this._getOrCreateMaterial(6045747,.9),o=this._getOrCreateMaterial(8947848,.3),a=2.2,c=new re(.03,.03,a,6),l=new F(c,s);l.position.set(n+.15,e+a/2,0),l.castShadow=!0,t.add(l);const h=new Oi(.06,.2,6),u=new F(h,o);u.position.set(n+.15,e+a+.1,0),u.castShadow=!0,t.add(u)}_addHammer(t,e,i,n){const s=this._getOrCreateMaterial(6045747,.9),o=this._getOrCreateMaterial(5592405,.4),a=new re(.025,.025,.5,6),c=new F(a,s);c.position.set(n+.3,e+i*.5,.1),c.rotation.z=.3,c.castShadow=!0,t.add(c);const l=new Jt(.15,.08,.08),h=new F(l,o);h.position.set(n+.4,e+i*.65,.1),h.rotation.z=.3,h.castShadow=!0,t.add(h)}_addStaff(t,e,i,n){const s=this._getOrCreateMaterial(4861984,.9),o=1.6,a=new re(.04,.035,o,6),c=new F(a,s);c.position.set(n+.2,o/2,.15),c.rotation.z=.1,c.castShadow=!0,t.add(c);const l=new ce(.06,8,6),h=new F(l,s);h.position.set(n+.2+o*.05,o+.02,.15),h.castShadow=!0,t.add(h)}getNPCs(){return this.npcs}getNPCAt(t,e,i=1.5){for(const n of this.npcs){const s=t-n.position.x,o=e-n.position.z;if(Math.sqrt(s*s+o*o)<i)return n}return null}getNPCsInVillage(t,e,i=25){return this.npcs.filter(n=>{const s=n.villageX-t,o=n.villageZ-e;return Math.sqrt(s*s+o*o)<i})}isNearNPC(t,e,i=2){return this.getNPCAt(t,e,i)!==null}update(t){}dispose(){for(const t of this.meshes)this.scene.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose()});for(const t of this.materials.values())t.dispose();this.npcs=[],this.meshes=[],this.materials.clear()}}class jv{constructor(t){this.scene=t,this.colliders=[],this.floorZones=[],this.stairs=[],this.doors=[],this.hiddenWalls=[],this.ladders=[],this.shortcuts=[],this.bonfirePosition=new b(0,0,0),this.bossArena={active:!1,phase:"idle"},this._createSkybox(),this.terrain=new Vv(t),this._createStartingCastle(),this.foliage=new Wv(t,this.terrain),this.villages=new Xv(t,this.terrain),this.npcManager=new Kv(t,this.terrain,this.villages),this.ruinsManager=new qv(t,this.terrain,this.colliders),this.caveManager=new Yv(t,this.terrain),this._createLighting(),this.bonfirePosition.y=this.terrain.getTerrainHeight(0,0)}getFloorY(t,e){return this.terrain.getTerrainHeight(t,e)}getTerrainSlope(t,e){return this.terrain.getTerrainSlope(t,e)}getBiome(t,e){return this.terrain.getBiome(t,e)}checkWallCollision(t,e=.4){const i=new b;let n=!1;for(const s of this.colliders)if(s.type==="box"){const o=s.bounds;if(!o)continue;const a=o.min.x-e,c=o.max.x+e,l=o.min.z-e,h=o.max.z+e;if(t.x>a&&t.x<c&&t.z>l&&t.z<h&&t.y>o.min.y-1&&t.y<o.max.y){const u=t.x-a,d=c-t.x,f=t.z-l,g=h-t.z,_=Math.min(u,d,f,g);_===u?i.x-=u:_===d?i.x+=d:_===f?i.z-=f:i.z+=g,n=!0}}else if(s.type==="cylinder"){const o=t.x-s.position.x,a=t.z-s.position.z,c=Math.sqrt(o*o+a*a),l=s.radius+e;if(c<l&&t.y>s.position.y-4&&t.y<s.position.y+s.height){const h=l-c;c>.001&&(i.x+=o/c*h,i.z+=a/c*h),n=!0}}return n?i:null}checkTreeCollision(t,e=.4){return this.foliage?this.foliage.checkTreeCollision(t,e):null}checkCollision(t,e=.4){const i=new b;let n=!1;const s=this.checkWallCollision(t,e);s&&(i.add(s),n=!0);const o=this.checkTreeCollision(t,e);return o&&(i.add(o),n=!0),{collides:n,pushVector:i}}isNearTree(t,e,i=3){return this.foliage?this.foliage.isNearTree(t,e,i):!1}isNearVillage(t,e,i=25){return this.villages?this.villages.isNearVillage(t,e,i):!1}getVillages(){return this.villages?this.villages.getVillages():[]}isNearRuin(t,e,i=15){return this.ruinsManager?this.ruinsManager.isNearRuin(t,e,i):!1}getRuins(){return this.ruinsManager?this.ruinsManager.getRuins():[]}getNearbyRuin(t,e,i=20){return this.ruinsManager?this.ruinsManager.getNearbyRuin(t,e,i):null}isNearCave(t,e,i=15){return this.caveManager?this.caveManager.isNearCave(t,e,i):!1}getCaves(){return this.caveManager?this.caveManager.getCaves():[]}getNearestCave(t,e){return this.caveManager?this.caveManager.getNearestCave(t,e):null}isNearNPC(t,e,i=2){return this.npcManager?this.npcManager.isNearNPC(t,e,i):!1}getNPCAt(t,e,i=1.5){return this.npcManager?this.npcManager.getNPCAt(t,e,i):null}getNPCs(){return this.npcManager?this.npcManager.getNPCs():[]}_createSkybox(){const t=new ce(500,32,32),e=new Ve({uniforms:{topColor:{value:new Mt(4491468)},horizonColor:{value:new Mt(8956620)},bottomColor:{value:new Mt(6715204)},sunDirection:{value:new b(.5,.7,.3).normalize()},sunColor:{value:new Mt(16777181)}},vertexShader:`
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
      `,side:ti}),i=new F(t,e);this.scene.add(i);const n=new kn(20,32),s=new Gt({color:16777198,transparent:!0,opacity:.9}),o=new F(n,s);o.position.set(150,200,100),o.lookAt(0,0,0),this.scene.add(o)}_createLighting(){const t=new wu(16775920,2);t.position.set(50,80,30),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=1,t.shadow.camera.far=200,t.shadow.camera.left=-80,t.shadow.camera.right=80,t.shadow.camera.top=80,t.shadow.camera.bottom=-80,t.shadow.bias=-.001,this.scene.add(t);const e=new Cp(6719658,.6);this.scene.add(e);const i=new bp(8956620,4478259,.5);this.scene.add(i)}_createStartingCastle(){const c=new _t({color:5592405,roughness:.9,metalness:.1}),l=new _t({color:4473924,roughness:.95,metalness:.05}),h=new We(36,46),u=new _t({color:3816e3,roughness:.95}),d=new F(h,u);d.rotation.x=-Math.PI/2,d.position.y=.05,d.receiveShadow=!0,this.scene.add(d);const f=(y,w,E,C,I,S)=>{const T=new Jt(C,I,S),P=new F(T,c);P.position.set(y,w+I/2,E),P.castShadow=!0,P.receiveShadow=!0,this.scene.add(P),this.colliders.push({type:"box",bounds:new si(new b(y-C/2,w,E-S/2),new b(y+C/2,w+I,E+S/2))})},g=(y,w)=>{const E=new re(3.5,4,12,8),C=new F(E,l);C.position.set(y,12/2,w),C.castShadow=!0,C.receiveShadow=!0,this.scene.add(C);const I=new re(8/2+.2,8/2-.3,1.5,8),S=new F(I,c);S.position.set(y,12+.75,w),S.castShadow=!0,this.scene.add(S),this.colliders.push({type:"cylinder",position:new b(y,0,w),radius:8/2,height:12})},_=40/2,m=50/2;f(0,0,-m,40,8,2);const p=34/2;f(-_+p/2+2/2,0,m,p-2,8,2),f(_-p/2-2/2,0,m,p-2,8,2),f(-_,0,0,2,8,50),f(_,0,0,2,8,50),g(-_+8/2,-m+8/2),g(_-8/2,-m+8/2),g(-_+8/2,m-8/2),g(_-8/2,m-8/2),this._createBonfire(0,0,-5);const x=new Jt(7,1.5,2+.5),v=new F(x,l);v.position.set(0,8-.25,m),v.castShadow=!0,this.scene.add(v),console.log("[World] Starting castle created")}_createBonfire(t,e,i){const n=new Kt;n.position.set(t,e,i);const s=new en(.8,.15,8,16),o=new _t({color:3355443,roughness:.9}),a=new F(s,o);a.rotation.x=Math.PI/2,a.position.y=.1,a.castShadow=!0,n.add(a);const c=new _t({color:3809296,roughness:.95});for(let f=0;f<6;f++){const g=new re(.08,.1,.8,6),_=new F(g,c),m=f/6*Math.PI*2;_.position.set(Math.cos(m)*.3,.15,Math.sin(m)*.3),_.rotation.x=Math.PI/2,_.rotation.z=m+Math.PI/2,_.rotation.y=.3,n.add(_)}const l=new Ke(16746547,3,15);l.position.y=.8,l.castShadow=!0,n.add(l);const h=()=>{requestAnimationFrame(h),l.intensity=2.5+Math.sin(Date.now()*.01)*.5+Math.random()*.3};h();const u=new ce(.05,8,8),d=new Gt({color:16737792});for(let f=0;f<8;f++){const g=new F(u,d);g.position.set((Math.random()-.5)*.4,.3+Math.random()*.5,(Math.random()-.5)*.4),n.add(g)}this.scene.add(n),this.bonfirePosition.set(t,e,i)}getItemSpawns(){return[]}getNearbyDoor(t){return null}tryOpenDoor(t,e){return!1}getNearbyLadder(t){return null}getNearbyShortcut(t){return null}unlockShortcut(t){return!1}checkHiddenWallHit(t,e){return null}revealHiddenWall(t){}checkInsideIllusoryWall(t){return null}activateBossArena(){return!1}setBossArenaPhase(t){return null}updateBossArena(t,e){return 0}deactivateBossArena(){return!1}isBlockedByFogGate(t){return!1}getBossArenaState(){return{active:!1,phase:"idle"}}dispose(){this.terrain&&this.terrain.dispose(),this.foliage&&this.foliage.dispose(),this.villages&&this.villages.dispose(),this.npcManager&&this.npcManager.dispose(),this.ruinsManager&&this.ruinsManager.dispose(),this.caveManager&&this.caveManager.dispose()}}class $v{constructor(t){this.keys={},this.mouseButtons={},this.mouseDelta={x:0,y:0},this.isLocked=!1,this.buffer={},this.bufferDuration=.15,this.lmbHoldTime=0,this.lmbHoldStart=0,this.lmbWasHeld=!1,this.chargeThreshold=.4,this.domElement=t,window.addEventListener("keydown",e=>{this.keys[e.code]=!0,this._bufferAction(e.code)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),t.addEventListener("mousedown",e=>{this.mouseButtons[e.button]=!0,this._bufferAction(`mouse${e.button}`),e.button===0&&(this.lmbHoldStart=performance.now(),this.lmbWasHeld=!1)}),t.addEventListener("mouseup",e=>{this.mouseButtons[e.button]=!1,e.button===0&&this.lmbHoldStart>0&&(this.lmbHoldTime=(performance.now()-this.lmbHoldStart)/1e3,this.lmbHoldTime>=this.chargeThreshold&&(this.lmbWasHeld=!0,this._bufferAction("chargedAttack")),this.lmbHoldStart=0)}),t.addEventListener("mousemove",e=>{this.isLocked&&(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY)}),t.addEventListener("click",()=>{this.isLocked||t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault())}_bufferAction(t){this.buffer[t]=this.bufferDuration}update(t){const e=t||.016666666666666666;for(const i in this.buffer)this.buffer[i]-=e,this.buffer[i]<=0&&delete this.buffer[i]}consumeBuffer(t){return this.buffer[t]?(delete this.buffer[t],!0):!1}getMouseDelta(){const t={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}get moveForward(){return this.keys.KeyW}get moveBack(){return this.keys.KeyS}get moveLeft(){return this.keys.KeyA}get moveRight(){return this.keys.KeyD}get dodge(){return this.consumeBuffer("Space")}get lightAttack(){return this.consumeBuffer("mouse0")}get heavyAttack(){return this.consumeBuffer("mouse2")}get block(){return this.keys.ShiftLeft||this.keys.ShiftRight}get lockOn(){return this.consumeBuffer("KeyQ")}get interact(){return this.consumeBuffer("KeyE")}get dashAbility(){return this.consumeBuffer("KeyR")}get parryAbility(){return this.consumeBuffer("KeyF")}get warCryAbility(){return this.consumeBuffer("KeyG")}get chargedAttack(){return this.consumeBuffer("chargedAttack")}get isChargingAttack(){return this.mouseButtons[0]&&this.lmbHoldStart>0}getChargeProgress(){if(!this.isChargingAttack)return 0;const t=(performance.now()-this.lmbHoldStart)/1e3;return Math.min(1,t/this.chargeThreshold)}getMovementVector(){let t=0,e=0;this.moveForward&&(e-=1),this.moveBack&&(e+=1),this.moveLeft&&(t-=1),this.moveRight&&(t+=1);const i=Math.sqrt(t*t+e*e);return i>0&&(t/=i,e/=i),{x:t,z:e}}}class Zv{constructor(t){this.gm=t,this.healthBar=document.getElementById("health-bar"),this.staminaBar=document.getElementById("stamina-bar"),this.postureBar=document.getElementById("posture-bar"),this.remnantLabel=document.getElementById("remnant"),this.lostRemnantLabel=document.getElementById("lost-remnant"),this.bossContainer=document.getElementById("boss-container"),this.bossName=document.getElementById("boss-name"),this.bossHealthBar=document.getElementById("boss-health-bar"),this.bossPostureBar=document.getElementById("boss-posture-bar"),this.bossPhase=document.getElementById("boss-phase"),this.enemyManager=null,this._createDamageVignette(),this.damageVignetteOpacity=0,this.staminaWarningActive=!1,this._createXPBar(),this._createStatPointsIndicator(),this._createAbilityBar(),this.levelUpFlashActive=!1}_createXPBar(){this.xpContainer=document.createElement("div"),this.xpContainer.id="xp-container",this.xpContainer.style.cssText=`
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
      `,i.appendChild(a),this.abilitySlots[e.id]={element:i,cooldownOverlay:o,cooldownText:a,color:e.color},this.abilityContainer.appendChild(i)}document.body.appendChild(this.abilityContainer)}_updateAbilityBar(){if(!(!this.abilitySlots||!this.gm.abilities)){for(const[t,e]of Object.entries(this.abilitySlots)){const i=this.gm.isAbilityUnlocked(t),n=this.gm.getAbilityCooldown(t),s=this.gm.abilities[t];if(i)if(e.element.style.opacity="1",e.element.style.borderColor=n>0?"rgba(100,100,100,0.5)":e.color,n>0){const o=n/(s.baseCooldown*this.gm.getCooldownModifier())*100;e.cooldownOverlay.style.height=`${o}%`,e.cooldownText.textContent=Math.ceil(n),e.cooldownText.style.display="block"}else e.cooldownOverlay.style.height="0%",e.cooldownText.style.display="none";else e.element.style.opacity="0.3",e.cooldownOverlay.style.height="0%",e.cooldownText.style.display="none"}if(this.gm.warCryActive&&this.abilitySlots.warCry){const t=this.abilitySlots.warCry;t.element.style.boxShadow="0 0 10px #ff6600, 0 0 20px #ff440088"}else this.abilitySlots.warCry&&(this.abilitySlots.warCry.element.style.boxShadow="none")}}flashLevelUp(){this.levelUpFlashActive||(this.levelUpFlashActive=!0,this.levelLabel.style.color="#ffffff",this.levelLabel.style.textShadow="0 0 20px rgba(255,220,0,1), 0 0 40px rgba(255,200,0,0.8)",this.levelLabel.style.fontSize="18px",this.levelLabel.style.transition="all 0.2s ease-out",this.xpBar.style.background="linear-gradient(90deg, #ffff88, #ffffff)",this.xpBar.style.boxShadow="0 0 20px rgba(255, 255, 200, 1)",this.levelUpFlash||(this.levelUpFlash=document.createElement("div"),this.levelUpFlash.style.cssText=`
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
      `,document.body.appendChild(this.levelUpFlash)),this.levelUpFlash.style.opacity="1",setTimeout(()=>{this.levelUpFlash.style.opacity="0"},200),setTimeout(()=>{this.levelLabel.style.color="#ffdd88",this.levelLabel.style.textShadow="0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,200,0,0.3)",this.levelLabel.style.fontSize="14px",this.xpBar.style.background="linear-gradient(90deg, #aa8800, #ffcc44)",this.xpBar.style.boxShadow="0 0 6px rgba(255, 200, 0, 0.5)",this.levelUpFlashActive=!1},800))}_createDamageVignette(){this.damageVignette=document.createElement("div"),this.damageVignette.id="damage-vignette",this.damageVignette.style.cssText=`
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
    `,document.body.appendChild(this.hitFlash)}flashDamage(t=.6){this.damageVignetteOpacity=Math.min(1,t),this.damageVignette.style.opacity=this.damageVignetteOpacity,this.hitFlash.style.opacity=Math.min(.5,t*.8),setTimeout(()=>{this.damageVignette.style.opacity=this.damageVignetteOpacity*.5,this.hitFlash.style.opacity=0},80),setTimeout(()=>{this.damageVignette.style.opacity=0},250)}flashStaminaDepleted(){this.staminaWarningActive||(this.staminaWarningActive=!0,this.staminaBar&&(this.staminaBar.style.background="linear-gradient(90deg, #ffaa00, #ff6600)",this.staminaBar.style.boxShadow="0 0 10px #ff6600",setTimeout(()=>{this.staminaBar.style.background="",this.staminaBar.style.boxShadow="",this.staminaWarningActive=!1},300)))}setEnemyManager(t){this.enemyManager=t}update(){this.healthBar&&(this.healthBar.style.width=`${this.gm.health/this.gm.maxHealth*100}%`),this.staminaBar&&(this.staminaBar.style.width=`${this.gm.stamina/this.gm.maxStamina*100}%`),this.postureBar&&(this.postureBar.style.width=`${this.gm.posture/this.gm.maxPosture*100}%`),this.remnantLabel&&(this.remnantLabel.textContent=`Remnant: ${this.gm.remnant}`),this.lostRemnantLabel&&(this.gm.bloodstain&&this.gm.heldRemnant>0?(this.lostRemnantLabel.style.display="block",this.lostRemnantLabel.textContent=`Lost: ${this.gm.heldRemnant} (recover at bloodstain)`):this.lostRemnantLabel.style.display="none"),this._updateXPBar(),this._updateAbilityBar(),this._updateStatPointsIndicator(),this._updateBossUI()}_updateStatPointsIndicator(){if(!this.statPointsIndicator)return;const t=this.gm.getAvailableStatPoints?this.gm.getAvailableStatPoints():0;t>0?(this.statPointsIndicator.textContent=`⬆ ${t} Stat Point${t>1?"s":""} - Press TAB`,this.statPointsIndicator.style.opacity="1"):this.statPointsIndicator.style.opacity="0"}_updateXPBar(){if(this.levelLabel){const t=this.gm.currentLevel||1,e=this.gm.maxLevel||20;t>=e?this.levelLabel.textContent=`LEVEL ${t} (MAX)`:this.levelLabel.textContent=`LEVEL ${t}`}if(this.xpBar){const t=this.gm.getXPProgress?this.gm.getXPProgress():0;this.xpBar.style.width=`${t*100}%`,t>.8?this.xpBar.style.boxShadow="0 0 12px rgba(255, 255, 100, 0.8)":this.xpBar.style.boxShadow="0 0 6px rgba(255, 200, 0, 0.5)"}}_updateBossUI(){if(!this.enemyManager||!this.bossContainer)return;const t=this.enemyManager.getCryptLord(),e=this.enemyManager.getBoss();let i=null,n=!1;if(t&&t.bossActive&&!t.isDead?(i=t,n=!0):e&&e.isActive&&!e.isDead&&(i=e),!i){this.bossContainer.style.display="none";return}if(this.bossContainer.style.display="block",this.bossName&&(this.bossName.textContent=n?i.config.name:i.name),this.bossHealthBar){const s=i.health/i.maxHealth*100;this.bossHealthBar.style.width=`${s}%`,n?(i.bossPhase||1)===2?this.bossHealthBar.style.background="linear-gradient(90deg, #8844cc, #aa66ff)":this.bossHealthBar.style.background="linear-gradient(90deg, #882222, #cc4444)":i.phase===2?this.bossHealthBar.style.background="linear-gradient(90deg, #ff4400, #ff6622)":this.bossHealthBar.style.background="linear-gradient(90deg, #cc2222, #ff4444)",s<=50&&s>0?this.bossHealthBar.classList.add("phase-two"):this.bossHealthBar.classList.remove("phase-two")}if(this.bossPostureBar){const s=i.posture/i.maxPosture*100;this.bossPostureBar.style.width=`${s}%`}if(this.bossPhase){const s=n?i.bossPhase||1:i.phase;this.bossPhase.textContent=s===2?"PHASE 2":"",this.bossPhase.style.color=s===2?n?"#aa66ff":"#ff4400":"#ffcc00"}}}class Jv{constructor(t,e,i){this.gm=t,this.input=e,this.player=i,this.isOpen=!1,this.selectedTrack=0,this.tracks=["strength","vitality","stamina","spirit"],this._createUI(),window.addEventListener("keydown",n=>this._handleKey(n))}_createUI(){if(this.container=document.getElementById("crucible-container"),!this.container){console.warn("CrucibleUI: #crucible-container not found in HTML");return}this.promptEl=document.getElementById("crucible-prompt"),this.menuEl=document.getElementById("crucible-menu"),this.trackEls=this.tracks.map(t=>document.getElementById(`track-${t}`)),this.remnantEl=document.getElementById("crucible-remnant")}update(){if(!this.container)return;const t=this.gm.isNearBonfire(),e=this.gm.isDead;this.isOpen?(!t||e||this.input.keys.Escape)&&this._close():t&&!e?(this._showPrompt(!0),this.input.interact&&this._open()):this._showPrompt(!1),this.isOpen&&this._updateMenu()}_showPrompt(t){this.promptEl&&(this.promptEl.style.display=t?"block":"none")}_open(){this.isOpen=!0,this._showPrompt(!1),this.menuEl&&(this.menuEl.style.display="block"),document.pointerLockElement&&document.exitPointerLock()}_close(){this.isOpen=!1,this.menuEl&&(this.menuEl.style.display="none")}_handleKey(t){if(this.isOpen)switch(t.code){case"ArrowUp":case"KeyW":t.preventDefault(),this.selectedTrack=(this.selectedTrack-1+this.tracks.length)%this.tracks.length;break;case"ArrowDown":case"KeyS":t.preventDefault(),this.selectedTrack=(this.selectedTrack+1)%this.tracks.length;break;case"Enter":case"KeyF":t.preventDefault(),this._purchaseSelected();break;case"Escape":case"KeyE":t.preventDefault(),this._close();break}}_purchaseSelected(){const t=this.tracks[this.selectedTrack],e=this.gm.getTrackInfo(t);e.maxed||!e.canAfford||this.gm.infuse(t)&&(this.gm.applyInfusionBonuses(),this._applyVisualEffect(t))}_applyVisualEffect(t){if(!this.player||!this.player.mesh)return;const e=this.gm.infusions[t]||0,n=1+(this.gm.getTotalDepth()||0)*.01;switch(isFinite(n)&&n>0&&this.player.mesh.scale.setScalar(n),t){case"strength":this._addGlow(this.player.body,16729156,e*.1);break;case"vitality":this._addGlow(this.player.body,4521796,e*.1);break;case"stamina":this._addGlow(this.player.body,16777028,e*.1);break;case"spirit":this._addGlow(this.player.visor,4491519,e*.3);break}}_addGlow(t,e,i){if(!t||!t.material||!t.material.emissive)return;const n=t.material.emissive.getHex(),s=this._blendColors(n,e,.5);t.material.emissive.setHex(s),t.material.emissiveIntensity=Math.min(2,(t.material.emissiveIntensity||0)+i)}_blendColors(t,e,i){const n=t>>16&255,s=t>>8&255,o=t&255,a=e>>16&255,c=e>>8&255,l=e&255,h=Math.round(n+(a-n)*i),u=Math.round(s+(c-s)*i),d=Math.round(o+(l-o)*i);return h<<16|u<<8|d}_updateMenu(){this.remnantEl&&(this.remnantEl.textContent=`Remnant: ${this.gm.remnant}`),this.tracks.forEach((t,e)=>{const i=this.trackEls[e];if(!i)return;const n=this.gm.getTrackInfo(t),s=e===this.selectedTrack;i.classList.toggle("selected",s),i.classList.toggle("maxed",n.maxed),i.classList.toggle("affordable",n.canAfford&&!n.maxed);const o=i.querySelector(".track-name"),a=i.querySelector(".track-level"),c=i.querySelector(".track-cost"),l=i.querySelector(".track-bonus");o&&(o.textContent=n.name),a&&(a.textContent=`Lv. ${n.level}/${this.gm.MAX_TRACK_DEPTH}`),c&&(c.textContent=n.maxed?"MAX":`Cost: ${n.cost}`),l&&(l.textContent=n.bonus)})}}class Qv{constructor(t,e,i){this.gm=t,this.input=e,this.player=i,this.isOpen=!1,this._createUI(),this._setupInput()}_setupInput(){window.addEventListener("keydown",t=>{(t.code==="Tab"||t.code==="KeyP")&&(t.preventDefault(),this.toggle()),t.code==="Escape"&&this.isOpen&&this.close()})}_createUI(){this.container=document.createElement("div"),this.container.id="stats-ui",this.container.style.cssText=`
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
    `}toggle(){this.isOpen?this.close():this.open()}open(){this.isOpen||(this.isOpen=!0,this._update(),this.container.style.display="flex",this.gm.audioManager&&this.gm.audioManager.play("menuOpen",{volume:.4}))}close(){this.isOpen&&(this.isOpen=!1,this.container.style.display="none",this.gm.audioManager&&this.gm.audioManager.play("menuBack",{volume:.3}))}update(){this.isOpen&&this._update()}}class ty{constructor(t,e,i){this.camera=t,this.target=e,this.input=i,this.distance=6,this.minDistance=3,this.maxDistance=12,this.height=2.5,this.sensitivity=.002,this.yaw=0,this.pitch=.3,this.minPitch=-.5,this.maxPitch=1.2,this.smoothing=8,this.currentPos=t.position.clone(),this.lockOnTarget=null,this.lockOnYaw=0,this.lockOnTransition=0,this.lockOnTransitionSpeed=5,this.shakeIntensity=0,this.shakeDuration=0,this.shakeTimer=0,this.shakeOffset=new b,this.shakeDecay=.92}shake(t=.3,e=.15){this.shakeIntensity=Math.min(this.shakeIntensity+t,1),this.shakeDuration=Math.max(this.shakeDuration,e),this.shakeTimer=0}shakeLight(){this.shake(.15,.1)}shakeMedium(){this.shake(.35,.15)}shakeHeavy(){this.shake(.5,.2)}update(t){const e=this.input.getMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch+e.y*this.sensitivity));const i=this.target.position.clone();if(i.y+=this.height,this.lockOnTarget&&this.lockOnTarget.mesh){const h=this.lockOnTarget.mesh.position,u=this.target.position.distanceTo(h);if(this.lockOnTarget.isDead||u>25)this.lockOnTarget=null,this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);else{const d=new b().subVectors(h,i);d.y=0,this.lockOnYaw=Math.atan2(d.x,d.z)+Math.PI,this.lockOnTransition=Math.min(1,this.lockOnTransition+this.lockOnTransitionSpeed*t)}}else this.lockOnTransition=Math.max(0,this.lockOnTransition-this.lockOnTransitionSpeed*t);let n=this.yaw;if(this.lockOnTransition>0){let h=this.lockOnYaw-this.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;n=this.yaw+h*this.lockOnTransition}const s=Math.sin(n)*this.distance*Math.cos(this.pitch),o=Math.cos(n)*this.distance*Math.cos(this.pitch),a=this.distance*Math.sin(this.pitch),c=new b(i.x+s,i.y+a,i.z+o);this.currentPos.lerp(c,this.smoothing*t),this._updateShake(t),this.camera.position.copy(this.currentPos),this.camera.position.add(this.shakeOffset);const l=i.clone();if(this.lockOnTarget&&this.lockOnTarget.mesh&&this.lockOnTransition>0){const h=this.lockOnTarget.mesh.position.clone();h.y+=1,l.lerp(h,.35*this.lockOnTransition)}this.camera.lookAt(l)}_updateShake(t){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity,(Math.random()-.5)*2*this.shakeIntensity),this.shakeIntensity*=this.shakeDecay,this.shakeTimer+=t,this.shakeTimer>=this.shakeDuration&&(this.shakeIntensity=0,this.shakeOffset.set(0,0,0))):this.shakeOffset.set(0,0,0)}setLockOnTarget(t){if(this.lockOnTarget=t,t&&t.mesh){const e=this.target.position.clone();e.y+=this.height;const i=new b().subVectors(t.mesh.position,e);i.y=0,this.lockOnYaw=Math.atan2(i.x,i.z)+Math.PI}}isLockedOn(){return this.lockOnTarget!==null&&this.lockOnTransition>.5}clearLockOn(){this.lockOnTarget=null}getForwardDirection(){return new b(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).normalize()}getRightDirection(){return new b(-Math.cos(this.yaw),0,Math.sin(this.yaw)).normalize()}}class ey{constructor(t){this.camera=t,this.context=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.initialized=!1,this.masterVolume=.7,this.musicVolume=.4,this.sfxVolume=.8,this.listener=null,this.currentMusic=null,this.musicSource=null,this.soundCooldowns={},this.soundBuffers={}}async init(){if(!this.initialized)try{this.context=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.context.createGain(),this.masterGain.gain.value=this.masterVolume,this.masterGain.connect(this.context.destination),this.musicGain=this.context.createGain(),this.musicGain.gain.value=this.musicVolume,this.musicGain.connect(this.masterGain),this.sfxGain=this.context.createGain(),this.sfxGain.gain.value=this.sfxVolume,this.sfxGain.connect(this.masterGain),this.listener=this.context.listener,await this.generateSoundBuffers(),this.initialized=!0}catch(t){console.warn("[AUDIO] Failed to initialize:",t)}}async generateSoundBuffers(){this.soundBuffers.swordSwing=this.createNoiseBuffer(.15,"highpass",2e3,.3),this.soundBuffers.hitImpact=this.createImpactBuffer(.12,150,.6),this.soundBuffers.criticalHit=this.createImpactBuffer(.15,200,.8),this.soundBuffers.playerDamage=this.createImpactBuffer(.2,80,.5),this.soundBuffers.enemyGrunt1=this.createGruntBuffer(.2,120),this.soundBuffers.enemyGrunt2=this.createGruntBuffer(.25,100),this.soundBuffers.enemyGrunt3=this.createGruntBuffer(.18,140),this.soundBuffers.dodge=this.createNoiseBuffer(.2,"bandpass",800,.25),this.soundBuffers.footstepStone=this.createFootstepBuffer(.08,"stone"),this.soundBuffers.footstepMetal=this.createFootstepBuffer(.1,"metal"),this.soundBuffers.death=this.createDeathBuffer(.8),this.soundBuffers.postureBreak=this.createPostureBreakBuffer(.3),this.soundBuffers.itemPickup=this.createChimeBuffer(.3,[523,659,784]),this.soundBuffers.doorUnlock=this.createChimeBuffer(.4,[392,494,587]),this.soundBuffers.menuSelect=this.createChimeBuffer(.15,[880]),this.soundBuffers.menuConfirm=this.createChimeBuffer(.2,[523,659]),this.soundBuffers.bossRoar=this.createRoarBuffer(.6),this.soundBuffers.staminaDepleted=this.createStaminaDepletedBuffer(.15),this.soundBuffers.levelUp=this.createLevelUpBuffer(.8),this.soundBuffers.dash=this.createNoiseBuffer(.15,"highpass",3e3,.4),this.soundBuffers.chargedSwing=this.createImpactBuffer(.25,100,.7),this.soundBuffers.parryReady=this.createChimeBuffer(.1,[440]),this.soundBuffers.parrySuccess=this.createImpactBuffer(.15,300,.6),this.soundBuffers.riposte=this.createImpactBuffer(.2,180,.8),this.soundBuffers.warCry=this.createRoarBuffer(.4),this.soundBuffers.abilityUnlock=this.createChimeBuffer(.5,[523,659,784,1047])}createLevelUpBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0),o=[523,659,784,1047],a=i/o.length;for(let c=0;c<i;c++){const l=Math.min(Math.floor(c/a),o.length-1),h=c%a/a,u=c/i,d=Math.sin(h*Math.PI)*.8,f=1-Math.pow(u,3)*.5,g=o[l],_=Math.sin(2*Math.PI*g*(c/e)),m=Math.sin(2*Math.PI*g*2*(c/e))*.3,p=Math.sin(2*Math.PI*g*3*(c/e))*.15;s[c]=(_+m+p)*d*f*.4}return{buffer:n,filterType:null,filterFreq:null}}createNoiseBuffer(t,e,i,n){const s=this.context.sampleRate,o=s*t,a=this.context.createBuffer(1,o,s),c=a.getChannelData(0);for(let l=0;l<o;l++){const h=l/o,u=Math.sin(h*Math.PI);c[l]=(Math.random()*2-1)*u*n}return{buffer:a,filterType:e,filterFreq:i}}createImpactBuffer(t,e,i){const n=this.context.sampleRate,s=n*t,o=this.context.createBuffer(1,s,n),a=o.getChannelData(0);for(let c=0;c<s;c++){const l=c/s,h=Math.exp(-l*10),u=Math.sin(2*Math.PI*e*l*(1-l*.5)),d=(Math.random()*2-1)*.3;a[c]=(u+d)*h*i}return{buffer:o}}createGruntBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),o=s.getChannelData(0);for(let a=0;a<n;a++){const c=a/n,l=Math.sin(c*Math.PI)*Math.exp(-c*3),h=Math.sin(2*Math.PI*e*a/i),u=Math.sin(2*Math.PI*e*2.5*a/i)*.5,d=Math.sin(2*Math.PI*e*4*a/i)*.25,f=(Math.random()*2-1)*.2;o[a]=(h+u+d+f)*l*.4}return{buffer:s}}createFootstepBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),o=s.getChannelData(0),a=e==="metal"?400:200,c=e==="metal"?.6:.4;for(let l=0;l<n;l++){const h=l/n,u=Math.exp(-h*20),d=Math.sin(2*Math.PI*a*h),f=(Math.random()*2-1)*c;o[l]=(d*.5+f)*u*.3}return{buffer:s}}createDeathBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let o=0;o<i;o++){const a=o/i,c=Math.exp(-a*2)*(1-a),l=150*(1-a*.5),h=Math.sin(2*Math.PI*l*o/e),u=Math.tanh(h*3),d=(Math.random()*2-1)*.3*(1-a);s[o]=(u+d)*c*.5}return{buffer:n}}createPostureBreakBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let o=0;o<i;o++){const a=o/i,c=Math.exp(-a*5),l=Math.sin(2*Math.PI*800*o/e),h=Math.sin(2*Math.PI*1200*o/e),u=(Math.random()*2-1)*.5;s[o]=(l*.3+h*.2+u)*c*.4}return{buffer:n}}createChimeBuffer(t,e){const i=this.context.sampleRate,n=i*t,s=this.context.createBuffer(1,n,i),o=s.getChannelData(0);for(let a=0;a<n;a++){const c=a/n,l=Math.exp(-c*4);let h=0;e.forEach((u,d)=>{const f=d*.03*i;if(a>f){const g=(a-f)/i;h+=Math.sin(2*Math.PI*u*g)/e.length}}),o[a]=h*l*.3}return{buffer:s}}createStaminaDepletedBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let o=0;o<i;o++){const a=o/i,c=Math.exp(-a*8)*Math.sin(a*Math.PI*2),l=(Math.random()*2-1)*.6,h=Math.sin(2*Math.PI*200*o/e)*.3;s[o]=(l+h)*Math.abs(c)*.25}return{buffer:n}}createRoarBuffer(t){const e=this.context.sampleRate,i=e*t,n=this.context.createBuffer(1,i,e),s=n.getChannelData(0);for(let o=0;o<i;o++){const a=o/i;let c;a<.1?c=a/.1:a<.7?c=1:c=(1-a)/.3;const l=Math.sin(2*Math.PI*60*o/e),h=Math.sin(2*Math.PI*65*o/e),u=Math.sin(2*Math.PI*120*o/e)*.5,d=(Math.random()*2-1)*.4,f=Math.tanh((l+h+u+d)*2);s[o]=f*c*.5}return{buffer:n}}play(t,e={}){if(!this.initialized||!this.soundBuffers[t])return;const{position:i=null,volume:n=1,pitch:s=1,cooldown:o=0,variation:a=0}=e,c=performance.now();if(o>0){const f=this.soundCooldowns[t]||0;if(c-f<o)return;this.soundCooldowns[t]=c}const l=this.soundBuffers[t],h=this.context.createBufferSource();h.buffer=l.buffer;const u=s+(Math.random()*2-1)*a;h.playbackRate.value=Math.max(.5,Math.min(2,u));const d=this.context.createGain();if(d.gain.value=n,l.filterType){const f=this.context.createBiquadFilter();f.type=l.filterType,f.frequency.value=l.filterFreq,h.connect(f),f.connect(d)}else h.connect(d);if(i&&this.camera){const f=this.context.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1,f.maxDistance=50,f.rolloffFactor=1,f.setPosition(i.x,i.y,i.z),d.connect(f),f.connect(this.sfxGain)}else d.connect(this.sfxGain);return h.start(),h}playEnemyGrunt(t){const e=["enemyGrunt1","enemyGrunt2","enemyGrunt3"],i=e[Math.floor(Math.random()*e.length)];this.play(i,{position:t,volume:.6,pitch:.9+Math.random()*.2,cooldown:200})}playFootstep(t,e="stone"){const i=e==="metal"?"footstepMetal":"footstepStone";this.play(i,{position:t,volume:.4,pitch:.9+Math.random()*.2,cooldown:150})}updateListener(){if(!this.initialized||!this.camera||!this.listener)return;const t=this.camera.position,e=new b;this.camera.getWorldDirection(e);const i=this.camera.up;this.listener.positionX?(this.listener.positionX.value=t.x,this.listener.positionY.value=t.y,this.listener.positionZ.value=t.z,this.listener.forwardX.value=e.x,this.listener.forwardY.value=e.y,this.listener.forwardZ.value=e.z,this.listener.upX.value=i.x,this.listener.upY.value=i.y,this.listener.upZ.value=i.z):(this.listener.setPosition(t.x,t.y,t.z),this.listener.setOrientation(e.x,e.y,e.z,i.x,i.y,i.z))}startAmbientMusic(){this.initialized&&this.currentMusic!=="ambient"&&(this.stopMusic(),this.currentMusic="ambient",this.createAmbientDrone())}startBossMusic(){this.initialized&&this.currentMusic!=="boss"&&(this.stopMusic(),this.currentMusic="boss",this.createBossMusic())}createAmbientDrone(){const t=this.context.createOscillator();t.type="sine",t.frequency.value=55;const e=this.context.createOscillator();e.type="sine",e.frequency.value=82.5;const i=this.context.createOscillator();i.type="sine",i.frequency.value=.1;const n=this.context.createGain();n.gain.value=2,i.connect(n),n.connect(t.frequency);const s=this.context.createGain();s.gain.value=.15;const o=this.context.createGain();o.gain.value=.1,t.connect(s),e.connect(o),s.connect(this.musicGain),o.connect(this.musicGain),t.start(),e.start(),i.start(),this.musicSource={oscs:[t,e,i]}}createBossMusic(){const t=this.context.createOscillator();t.type="sawtooth",t.frequency.value=55;const e=this.context.createWaveShaper();e.curve=this.makeDistortionCurve(20);const i=this.context.createOscillator();i.type="square",i.frequency.value=2;const n=this.context.createGain();n.gain.value=.3;const s=this.context.createGain();s.gain.value=.2,i.connect(n),n.connect(s.gain),t.connect(e),e.connect(s),s.connect(this.musicGain),t.start(),i.start(),this.musicSource={oscs:[t,i]}}makeDistortionCurve(t){const i=new Float32Array(44100),n=Math.PI/180;for(let s=0;s<44100;++s){const o=s*2/44100-1;i[s]=(3+t)*o*20*n/(Math.PI+t*Math.abs(o))}return i}stopMusic(){this.musicSource&&this.musicSource.oscs&&this.musicSource.oscs.forEach(t=>{try{t.stop()}catch{}}),this.musicSource=null,this.currentMusic=null}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&(this.masterGain.gain.value=this.masterVolume)}setMusicVolume(t){this.musicVolume=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}resume(){this.context&&this.context.state==="suspended"&&this.context.resume()}}class iy{constructor(t){this.scene=t,this.particles=[],this.slashTrails=[],this.embers=[],this.dustMotes=[],this.sparkPool=[],this.bloodPool=[],this.wispPool=[],this.ringPool=[],this.POOL_SIZES={spark:60,blood:40,wisp:20,ring:5},this._initSharedAssets(),this._initPools(),this._initEmbers(),this._initDustMotes()}_initSharedAssets(){this.sparkGeo=new we;const t=new Float32Array([0,.05,0,-.02,0,0,0,-.05,0,.02,0,0,0,.05,0,0,0,.02,0,-.05,0,0,0,-.02]);this.sparkGeo.setAttribute("position",new Xe(t,3)),this.bloodGeo=new Vc(.06,0),this.emberGeo=new ce(.02,4,4),this.wispGeo=new ce(.1,8,8),this.playerWispGeo=new ce(.15,8,8),this.mistGeo=new ce(.2,6,6),this.sparkMat=new Gt({color:16755268,transparent:!0,opacity:1,side:pe}),this.critSparkMat=new Gt({color:16777096,transparent:!0,opacity:1,side:pe}),this.bloodMat=new Gt({color:8912930,transparent:!0,opacity:.9}),this.emberMat=new Gt({color:16729088,transparent:!0,opacity:.7}),this.wispMat=new Gt({color:8956671,transparent:!0,opacity:.8,blending:Ri}),this.playerSoulMat=new Gt({color:8965375,transparent:!0,opacity:.9,blending:Ri}),this.deathMistMat=new Gt({color:4456465,transparent:!0,opacity:.7}),this.slashMat=new Gt({color:6719743,transparent:!0,opacity:.6,side:pe,blending:Ri,depthWrite:!1}),this.heavySlashMat=new Gt({color:16737860,transparent:!0,opacity:.7,side:pe,blending:Ri,depthWrite:!1})}_initPools(){for(let t=0;t<this.POOL_SIZES.spark;t++){const e=new F(this.sparkGeo,this.sparkMat);e.visible=!1,e.userData.inPool=!0,this.scene.add(e),this.sparkPool.push(e)}for(let t=0;t<this.POOL_SIZES.blood;t++){const e=new F(this.bloodGeo,this.bloodMat);e.visible=!1,e.userData.inPool=!0,this.scene.add(e),this.bloodPool.push(e)}for(let t=0;t<this.POOL_SIZES.wisp;t++){const e=new F(this.wispGeo,this.wispMat);e.visible=!1,e.userData.inPool=!0,this.scene.add(e),this.wispPool.push(e)}for(let t=0;t<this.POOL_SIZES.ring;t++){const e=new Ts(.1,.3,32),i=new Gt({color:16763972,transparent:!0,opacity:.8,side:pe,blending:Ri,depthWrite:!1}),n=new F(e,i);n.visible=!1,n.userData.inPool=!0,this.scene.add(n),this.ringPool.push(n)}console.log("[ParticleManager] Pools initialized:",{sparks:this.sparkPool.length,blood:this.bloodPool.length,wisps:this.wispPool.length,rings:this.ringPool.length})}_getFromPool(t){for(const e of t)if(e.userData.inPool)return e.userData.inPool=!1,e.visible=!0,e.scale.set(1,1,1),e.rotation.set(0,0,0),e;return null}_returnToPool(t){t.visible=!1,t.userData.inPool=!0}_initEmbers(){for(let e=0;e<30;e++)this._spawnEmber()}_spawnEmber(){const t=new F(this.emberGeo,this.emberMat);t.position.set((Math.random()-.5)*60,Math.random()*.5,(Math.random()-.5)*100-20),this.scene.add(t),this.embers.push({mesh:t,velocity:new b((Math.random()-.5)*.3,.3+Math.random()*.5,(Math.random()-.5)*.3),life:Math.random()*10,maxLife:8+Math.random()*6})}_initDustMotes(){this.dustGeo=new We(.03,.03),this.dustMat=new Gt({color:16777198,transparent:!0,opacity:.4,blending:Ri,depthWrite:!1,side:pe});for(let e=0;e<80;e++){const i=new F(this.dustGeo,this.dustMat);i.position.set((Math.random()-.5)*40,.5+Math.random()*5,(Math.random()-.5)*80-20),this.scene.add(i),this.dustMotes.push({mesh:i,baseY:i.position.y,driftSpeed:.1+Math.random()*.2,driftAmplitude:.3+Math.random()*.5,phase:Math.random()*Math.PI*2,rotateSpeed:(Math.random()-.5)*2})}}spawnSlashTrail(t,e,i=!1){const n=i?1.8:1.4,s=i?Math.PI*.7:Math.PI*.5,o=12,a=i?.15:.1,c=new pc;c.moveTo(0,0);for(let f=0;f<=o;f++){const g=-s/2+s*f/o,_=Math.cos(g)*n,m=Math.sin(g)*n;f===0?c.moveTo(_,m):c.lineTo(_,m)}for(let f=o;f>=0;f--){const g=-s/2+s*f/o,_=Math.cos(g)*(n-a),m=Math.sin(g)*(n-a);c.lineTo(_,m)}c.closePath();const l=new xa(c),h=i?this.heavySlashMat:this.slashMat,u=new F(l,h);u.position.copy(t),u.position.y+=1.2;const d=Math.atan2(e.x,e.z);u.rotation.y=d,u.rotation.x=i?-.5:.2,this.scene.add(u),this.slashTrails.push({mesh:u,life:0,maxLife:i?.35:.25,scaleStart:.3,scaleEnd:1,ownedGeometry:l})}spawnHitSparks(t,e=8,i=!1){const n=i?Math.min(e*2,16):Math.min(e,10);for(let s=0;s<n;s++){const o=this._getFromPool(this.sparkPool);if(!o)continue;o.userData.isCritical=i,o.position.copy(t),o.position.y+=.8+Math.random()*.4;const a=Math.random()*Math.PI*2,c=2+Math.random()*4,l=2+Math.random()*3;this.particles.push({mesh:o,velocity:new b(Math.cos(a)*c,l,Math.sin(a)*c),gravity:-15,life:0,maxLife:.3+Math.random()*.2,type:"spark",pool:this.sparkPool})}}spawnBlood(t,e,i=6){const n=Math.min(i,10);for(let s=0;s<n;s++){const o=this._getFromPool(this.bloodPool);if(!o)continue;o.position.copy(t),o.position.y+=.8+Math.random()*.6;const c=Math.atan2(e.x,e.z)+(Math.random()-.5)*Math.PI*.6,l=3+Math.random()*3,h=1+Math.random()*3;this.particles.push({mesh:o,velocity:new b(Math.sin(c)*l,h,Math.cos(c)*l),gravity:-18,life:0,maxLife:.6+Math.random()*.4,type:"blood",scale:.8+Math.random()*.4,pool:this.bloodPool})}}spawnPostureBreak(t){this.spawnHitSparks(t,12,!0);const e=this._getFromPool(this.ringPool);e&&(e.position.copy(t),e.position.y+=1,e.rotation.x=-Math.PI/2,e.scale.set(1,1,1),this.particles.push({mesh:e,velocity:new b(0,0,0),gravity:0,life:0,maxLife:.5,type:"ring",expandRate:8,pool:this.ringPool}))}spawnBlockSparks(t){for(let i=0;i<5;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.position.copy(t),n.position.y+=1;const s=Math.random()*Math.PI*2,o=1+Math.random()*2;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*o,1+Math.random()*2,Math.sin(s)*o),gravity:-10,life:0,maxLife:.25,type:"spark",isBlock:!0,pool:this.sparkPool})}}spawnDeathBurst(t){for(let e=0;e<6;e++){const i=this._getFromPool(this.bloodPool);if(!i)continue;const n=e/6*Math.PI*2;i.position.copy(t),i.position.y+=1,this.particles.push({mesh:i,velocity:new b(Math.cos(n)*4,2+Math.random()*3,Math.sin(n)*4),gravity:-15,life:0,maxLife:.8,type:"blood",scale:1.2,pool:this.bloodPool})}for(let e=0;e<3;e++){const i=this._getFromPool(this.wispPool);i&&(i.position.copy(t),i.position.y+=.5+Math.random()*.5,i.position.x+=(Math.random()-.5)*.5,i.position.z+=(Math.random()-.5)*.5,this.particles.push({mesh:i,velocity:new b((Math.random()-.5)*.5,2+Math.random()*1,(Math.random()-.5)*.5),gravity:0,life:0,maxLife:1.5+Math.random()*.5,type:"wisp",pool:this.wispPool}))}}update(t){this._updateDeathEffects(t);for(let i=this.particles.length-1;i>=0;i--){const n=this.particles[i];if(n.life+=t,n.velocity.y+=n.gravity*t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.type==="ring"){const o=1+n.expandRate*n.life;n.mesh.scale.set(o,o,1)}if(n.type==="playerSoul"&&(n.mesh.position.x+=Math.sin(n.life*2)*t*.5,n.mesh.position.z+=Math.cos(n.life*2)*t*.5),n.type==="deathMist"){const o=1+n.life*.5;n.mesh.scale.setScalar(o)}const s=1-n.life/n.maxLife;if(n.scale){const o=n.scale*s;n.mesh.scale.setScalar(Math.max(.1,o))}n.type==="blood"&&n.mesh.position.y<.05&&(n.mesh.position.y=.05,n.velocity.x*=.5,n.velocity.z*=.5,n.velocity.y=0),n.type==="spark"&&(n.mesh.rotation.x+=t*10,n.mesh.rotation.z+=t*8),n.life>=n.maxLife&&(n.pool?this._returnToPool(n.mesh):(this.scene.remove(n.mesh),n.mesh.geometry?.dispose?.()),this.particles.splice(i,1))}for(let i=this.slashTrails.length-1;i>=0;i--){const n=this.slashTrails[i];n.life+=t;const s=n.life/n.maxLife,o=ie.lerp(n.scaleStart,n.scaleEnd,s);if(n.mesh.scale.setScalar(o),n.isAttackArc&&n.rotationSpeed){const a=Math.pow(s,.6);if(n.mesh.rotation.z=n.initialRotationZ+a*n.rotationSpeed,n.material&&s>.4){const l=(s-.4)/.6;n.material.opacity=(1-l)*.85}}n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.ownedGeometry?.dispose(),n.material?.dispose(),this.slashTrails.splice(i,1))}for(let i=this.embers.length-1;i>=0;i--){const n=this.embers[i];n.life+=t,n.mesh.position.add(n.velocity.clone().multiplyScalar(t)),n.mesh.position.x+=Math.sin(n.life*2)*.01,n.mesh.position.z+=Math.cos(n.life*1.5)*.01,n.life>=n.maxLife&&(n.life=0,n.mesh.position.set((Math.random()-.5)*60,Math.random()*.3,(Math.random()-.5)*100-20),n.maxLife=8+Math.random()*6)}const e=Date.now()*.001;for(const i of this.dustMotes)i.mesh.position.y=i.baseY+Math.sin(e*i.driftSpeed+i.phase)*i.driftAmplitude,i.mesh.position.x+=Math.sin(e*.5+i.phase)*.002,i.mesh.position.z+=Math.cos(e*.3+i.phase)*.002,i.mesh.rotation.z+=i.rotateSpeed*t}spawnPlayerDeathEffect(t,e){for(let i=0;i<8;i++){const n=this._getFromPool(this.wispPool);n&&(n.position.copy(t),n.position.y+=.5+Math.random()*.8,n.position.x+=(Math.random()-.5)*.6,n.position.z+=(Math.random()-.5)*.6,this.particles.push({mesh:n,velocity:new b((Math.random()-.5)*1.5,3+Math.random()*2,(Math.random()-.5)*1.5),gravity:-.5,life:0,maxLife:2.5+Math.random()*1.5,type:"playerSoul",pool:this.wispPool}))}for(let i=0;i<10;i++){const n=this._getFromPool(this.bloodPool);if(!n)continue;n.position.copy(t),n.position.y+=Math.random()*1.5;const s=Math.random()*Math.PI*2,o=1+Math.random()*2;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*o,.5+Math.random()*1,Math.sin(s)*o),gravity:-1,life:0,maxLife:2+Math.random()*1,type:"deathMist",scale:1,pool:this.bloodPool})}this._createDeathVignette(e),e&&this._triggerCameraShake(e)}_createDeathVignette(t){const e=new We(2,2),i=new Ve({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uIntensity:{value:0}},vertexShader:`
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
      `}),n=new F(e,i);n.frustumCulled=!1,n.renderOrder=999,this.scene.add(n),this.deathVignette={mesh:n,material:i,life:0,fadeInDuration:.5,holdDuration:2.5,fadeOutDuration:.5}}_triggerCameraShake(t){this.cameraShake||(this.cameraShake={originalPosition:t.position.clone(),intensity:.3,decay:.95,duration:.8,elapsed:0,camera:t})}_updateDeathEffects(t){if(this.deathVignette){const e=this.deathVignette;e.life+=t,e.material.uniforms.uTime.value=e.life;const i=e.fadeInDuration+e.holdDuration+e.fadeOutDuration;if(e.life<e.fadeInDuration)e.material.uniforms.uIntensity.value=e.life/e.fadeInDuration;else if(e.life<e.fadeInDuration+e.holdDuration)e.material.uniforms.uIntensity.value=1;else if(e.life<i){const n=(e.life-e.fadeInDuration-e.holdDuration)/e.fadeOutDuration;e.material.uniforms.uIntensity.value=1-n}else this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose(),this.deathVignette=null}if(this.cameraShake){const e=this.cameraShake;if(e.elapsed+=t,e.elapsed<e.duration){const i=1-e.elapsed/e.duration,n=e.intensity*i;e.camera.position.x+=(Math.random()-.5)*n,e.camera.position.y+=(Math.random()-.5)*n*.5,e.camera.position.z+=(Math.random()-.5)*n}else this.cameraShake=null}}spawnLevelUpEffect(t){for(let i=0;i<20;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.userData.isLevelUp=!0;const s=i/20*Math.PI*2;n.position.copy(t),n.position.y+=1;const o=3+Math.random()*4,a=3+Math.random()*4;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*o,a,Math.sin(s)*o),gravity:-8,life:0,maxLife:.8+Math.random()*.4,type:"spark",isLevelUp:!0,pool:this.sparkPool})}for(let i=0;i<8;i++){const n=this._getFromPool(this.wispPool);n&&(n.position.copy(t),n.position.y+=.2,n.position.x+=(Math.random()-.5)*1.5,n.position.z+=(Math.random()-.5)*1.5,this.particles.push({mesh:n,velocity:new b((Math.random()-.5)*.5,4+Math.random()*2,(Math.random()-.5)*.5),gravity:0,life:0,maxLife:1.5+Math.random()*.5,type:"wisp",isLevelUp:!0,pool:this.wispPool}))}const e=this._getFromPool(this.ringPool);e&&(e.position.copy(t),e.position.y+=.1,e.rotation.x=-Math.PI/2,e.scale.set(.5,.5,1),e.userData.isLevelUp=!0,this.particles.push({mesh:e,velocity:new b(0,0,0),gravity:0,life:0,maxLife:.8,type:"ring",expandRate:12,isLevelUp:!0,pool:this.ringPool}))}spawnDashEffect(t,e){for(let i=0;i<12;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.userData.isDash=!0,n.position.copy(t),n.position.y+=.5+Math.random()*1,n.position.x+=(Math.random()-.5)*.8,n.position.z+=(Math.random()-.5)*.8;const s=e.clone().multiplyScalar(-1),o=(Math.random()-.5)*.5;this.particles.push({mesh:n,velocity:s.clone().multiplyScalar(5+Math.random()*3).add(new b(o,Math.random()*2,o)),gravity:-2,life:0,maxLife:.3+Math.random()*.2,type:"spark",isDash:!0,pool:this.sparkPool})}}spawnParryEffect(t){for(let i=0;i<15;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.userData.isParry=!0,n.position.copy(t),n.position.y+=1.2,n.position.z+=.5;const s=i/15*Math.PI*2,o=4+Math.random()*3;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*o*.5,Math.sin(s)*o,-2),gravity:-6,life:0,maxLife:.4+Math.random()*.2,type:"spark",isParry:!0,pool:this.sparkPool})}const e=this._getFromPool(this.ringPool);e&&(e.position.copy(t),e.position.y+=1.2,e.rotation.x=0,e.rotation.y=0,e.scale.set(.3,.3,1),e.userData.isParry=!0,this.particles.push({mesh:e,velocity:new b(0,0,0),gravity:0,life:0,maxLife:.4,type:"ring",expandRate:8,isParry:!0,pool:this.ringPool}))}spawnWarCryEffect(t){for(let i=0;i<25;i++){const n=this._getFromPool(this.sparkPool);if(!n)continue;n.userData.isWarCry=!0;const s=i/25*Math.PI*2;n.position.copy(t),n.position.y+=.5;const o=.5+Math.random()*.3;n.position.x+=Math.cos(s)*o,n.position.z+=Math.sin(s)*o;const a=5+Math.random()*4;this.particles.push({mesh:n,velocity:new b(Math.cos(s)*a,2+Math.random()*3,Math.sin(s)*a),gravity:-4,life:0,maxLife:.6+Math.random()*.4,type:"spark",isWarCry:!0,pool:this.sparkPool})}for(let i=0;i<6;i++){const n=this._getFromPool(this.wispPool);if(!n)continue;n.userData.isWarCry=!0;const s=i/6*Math.PI*2;n.position.copy(t),n.position.x+=Math.cos(s)*.8,n.position.z+=Math.sin(s)*.8,this.particles.push({mesh:n,velocity:new b(Math.cos(s)*2,5+Math.random()*2,Math.sin(s)*2),gravity:1,life:0,maxLife:1+Math.random()*.5,type:"wisp",isWarCry:!0,pool:this.wispPool})}const e=this._getFromPool(this.ringPool);e&&(e.position.copy(t),e.position.y+=.1,e.rotation.x=-Math.PI/2,e.scale.set(1,1,1),e.userData.isWarCry=!0,this.particles.push({mesh:e,velocity:new b(0,0,0),gravity:0,life:0,maxLife:.6,type:"ring",expandRate:15,isWarCry:!0,pool:this.ringPool}))}spawnAttackArc(t,e,i=!1){const n=i?16737860:8956671,s=i?2:1.6,o=i?Math.PI*.8:Math.PI*.6,a=i?.18:.12,c=i?.35:.22,l=16,h=new pc;for(let m=0;m<=l;m++){const p=-o/2+o*m/l,x=Math.cos(p)*s,v=Math.sin(p)*s;m===0?h.moveTo(x,v):h.lineTo(x,v)}for(let m=l;m>=0;m--){const p=-o/2+o*m/l,x=Math.cos(p)*(s-a),v=Math.sin(p)*(s-a);h.lineTo(x,v)}h.closePath();const u=new xa(h),d=new Gt({color:n,transparent:!0,opacity:i?.85:.7,side:pe,blending:Ri,depthWrite:!1}),f=new F(u,d);f.position.copy(t),f.position.y+=1.1;const g=Math.atan2(e.x,e.z);f.rotation.y=g,f.rotation.x=i?-.6:.15,f.rotation.z=i?.2:-.1,this.scene.add(f);const _=i?10:6;for(let m=0;m<_;m++){const p=this._getFromPool(this.sparkPool);if(!p)continue;const x=-o/2+o*m/(_-1),v=t.clone();v.y+=1.1;const y=Math.cos(x)*s,w=Math.sin(x)*s;v.x+=y*Math.cos(g)-w*Math.sin(g)*.3,v.z+=y*Math.sin(g)+w*Math.cos(g)*.3,v.y+=w*.7,p.position.copy(v),p.userData.isAttackSpark=!0;const E=i?3:2;this.particles.push({mesh:p,velocity:new b((Math.random()-.5)*E,(Math.random()-.5)*E,(Math.random()-.5)*E),gravity:-8,life:0,maxLife:.2+Math.random()*.15,type:"spark",isAttackSpark:!0,pool:this.sparkPool})}this.slashTrails.push({mesh:f,life:0,maxLife:c,scaleStart:.2,scaleEnd:1,ownedGeometry:u,material:d,isAttackArc:!0,rotationSpeed:i?2.5:4,initialRotationZ:f.rotation.z})}dispose(){this.particles.forEach(t=>{t.pool?this._returnToPool(t.mesh):(this.scene.remove(t.mesh),t.mesh.geometry?.dispose?.())}),this.particles=[],this.slashTrails.forEach(t=>{this.scene.remove(t.mesh),t.ownedGeometry?.dispose()}),this.slashTrails=[],this.embers.forEach(t=>{this.scene.remove(t.mesh)}),this.embers=[],this.dustMotes.forEach(t=>{this.scene.remove(t.mesh)}),this.dustMotes=[],[...this.sparkPool,...this.bloodPool,...this.wispPool,...this.ringPool].forEach(t=>{this.scene.remove(t)}),this.sparkPool=[],this.bloodPool=[],this.wispPool=[],this.ringPool=[],this.sparkGeo?.dispose(),this.bloodGeo?.dispose(),this.emberGeo?.dispose(),this.wispGeo?.dispose(),this.playerWispGeo?.dispose(),this.mistGeo?.dispose(),this.dustGeo?.dispose(),this.sparkMat?.dispose(),this.critSparkMat?.dispose(),this.bloodMat?.dispose(),this.emberMat?.dispose(),this.wispMat?.dispose(),this.playerSoulMat?.dispose(),this.deathMistMat?.dispose(),this.slashMat?.dispose(),this.heavySlashMat?.dispose(),this.dustMat?.dispose()}}class ny{constructor(t){this.camera=t,this.texts=[],this.container=document.createElement("div"),this.container.id="floating-text-container",this.container.style.cssText=`
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
    `,this.container.appendChild(c),this.texts.push({element:c,worldPos:e.clone(),startY:e.y,age:0,duration:o,isLevelUp:a,floatSpeed:a?1.5:2.5})}update(t){const e=window.innerWidth,i=window.innerHeight;for(let n=this.texts.length-1;n>=0;n--){const s=this.texts[n];s.age+=t,s.worldPos.y+=s.floatSpeed*t;const o=s.worldPos.clone().project(this.camera),a=(o.x*.5+.5)*e,c=(-o.y*.5+.5)*i;o.z>1||a<-100||a>e+100||c<-100||c>i+100?s.element.style.display="none":(s.element.style.display="block",s.element.style.left=`${a}px`,s.element.style.top=`${c}px`);const l=s.duration*.6;if(s.age>l){const h=(s.age-l)/(s.duration-l);s.element.style.opacity=1-h}s.age>=s.duration&&(this.container.removeChild(s.element),this.texts.splice(n,1))}}dispose(){this.texts.forEach(t=>{t.element.parentNode&&t.element.parentNode.removeChild(t.element)}),this.texts=[],this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}const Fu=document.createElement("style");Fu.textContent=`
  @keyframes levelUpPulse {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    50% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }
`;document.head.appendChild(Fu);const sy={uniforms:{tDiffuse:{value:null},brightness:{value:.05},contrast:{value:1.1},saturation:{value:1.1},vignetteIntensity:{value:.2},vignetteRadius:{value:.9}},vertexShader:`
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
  `},wi=new Bx({antialias:!0,preserveDrawingBuffer:!0});wi.setSize(window.innerWidth,window.innerHeight);wi.setPixelRatio(Math.min(window.devicePixelRatio,2));wi.shadowMap.enabled=!0;wi.shadowMap.type=Ph;wi.toneMapping=bc;wi.toneMappingExposure=2;wi.outputColorSpace=Ee;document.body.appendChild(wi.domElement);const sn=new vf;sn.fog=null;sn.background=new Mt(8900331);const nn=new Qe(60,window.innerWidth/window.innerHeight,.1,200);nn.position.set(0,5,15);nn.lookAt(0,0,0);const oy=new ei(window.innerWidth*Math.min(window.devicePixelRatio,2),window.innerHeight*Math.min(window.devicePixelRatio,2),{minFilter:Le,magFilter:Le,format:hi,colorSpace:Ee}),vo=new Vx(wi,oy),ay=new Wx(sn,nn);vo.addPass(ay);const zu=new Ss(new nt(window.innerWidth,window.innerHeight),.15,.2,.95);vo.addPass(zu);const ry=new ku(sy);vo.addPass(ry);const cy=new Au,Ie=new Kx,pn=new $v(wi.domElement),mn=new ey(nn),po=new iy(sn),Qs=new Zv(Ie);let Rh=!1;const ba=async()=>{Rh||(await mn.init(),mn.startAmbientMusic(),Rh=!0,document.removeEventListener("click",ba),document.removeEventListener("keydown",ba))};document.addEventListener("click",ba);document.addEventListener("keydown",ba);const te=new jv(sn),Pi=new Nv(sn,Ie);Pi.initItems(te.getItemSpawns());const ee=new kv(sn,Ie,pn);ee.setWorld(te);const to=new ty(nn,ee.mesh,pn);ee.setCameraController(to);const Yc=new Fv(sn,Ie,ee,te,po),Gu=new ny(nn);Ie.setCheckpoint(te.bonfirePosition.clone());Ie.setEntities(ee,Yc,sn,nn);Ie.bonfirePosition=te.bonfirePosition;Ie.audioManager=mn;Ie.particleManager=po;Ie.hud=Qs;Ie.cameraController=to;Ie.itemManager=Pi;Ie.floatingText=Gu;Qs.setEnemyManager(Yc);const ea=new Jv(Ie,pn,ee),ly=new Qv(Ie,pn,ee);window.addEventListener("resize",()=>{nn.aspect=window.innerWidth/window.innerHeight,nn.updateProjectionMatrix(),wi.setSize(window.innerWidth,window.innerHeight),vo.setSize(window.innerWidth,window.innerHeight),zu.resolution.set(window.innerWidth,window.innerHeight)});function Hu(){requestAnimationFrame(Hu);const r=Math.min(cy.getDelta(),.05);if(pn.update(r),Ie.updateHitstop(r))po.update(r*.1);else if(ee.update(r),Yc.update(r,ee),po.update(r),te.terrain&&te.terrain.update&&te.terrain.update(ee.mesh.position.x,ee.mesh.position.z),te.foliage&&te.foliage.update&&te.foliage.update(ee.mesh.position.x,ee.mesh.position.z),te.villages&&te.villages.update&&te.villages.update(ee.mesh.position.x,ee.mesh.position.z),te.ruinsManager&&te.ruinsManager.update&&te.ruinsManager.update(ee.mesh.position.x,ee.mesh.position.z),te.caveManager&&te.caveManager.update&&te.caveManager.update(ee.mesh.position.x,ee.mesh.position.z),te.bossArena&&te.bossArena.active){const f=te.updateBossArena(r,ee.mesh.position);f>0&&!ee.isInvincible&&(Ie.takeDamage(f,"magical",0,!1),ee.flashDamage(),Qs&&Qs.flashDamage(.5),to&&to.shakeLight(),Pi.showNotification("Ritual Circle burns!","damage"))}if(to.update(r),Pi.update(ee.mesh.position),Qs.update(),ea.update(),ly.update(),Ie.update(r),mn.updateListener(),Gu.update(r),Ie.collectBloodstain(),ee.activeAttack){const f=te.checkHiddenWallHit(ee.activeAttack.position,ee.activeAttack.range);f&&!f.revealed&&te.revealHiddenWall(f.id)}const e=te.getNearbyDoor(ee.mesh.position),i=document.getElementById("door-prompt"),n=document.getElementById("door-name");e&&!ea.isOpen?(i.style.display="block",n.textContent=e.name,Pi.hasKey(e.id)?(i.classList.remove("locked"),pn.interact&&(te.tryOpenDoor(e.id,Pi),Pi.showNotification(`${e.name} Opened`))):(i.classList.add("locked"),n.textContent=`${e.name} (Locked)`)):i.style.display="none";const s=te.getNearbyLadder(ee.mesh.position),o=document.getElementById("ladder-prompt"),a=document.getElementById("ladder-name");s&&!ea.isOpen?(o.style.display="block",a.textContent=s.id==="shortcut-ladder"?"to Cathedral":"Ladder",pn.interact&&s.id==="shortcut-ladder"&&(ee.mesh.position.set(-15,0,-12),ee.velocity.set(0,0,0),Pi.showNotification("Climbed to Cathedral"),mn.playSound("footstep"))):o.style.display="none";const c=te.getNearbyShortcut(ee.mesh.position),l=document.getElementById("shortcut-prompt"),h=document.getElementById("shortcut-action"),u=document.getElementById("shortcut-name");c&&!ea.isOpen?(l.style.display="block",h.textContent="remove bar from",u.textContent="Shortcut Door",pn.interact&&te.unlockShortcut(c.id)&&(Pi.showNotification("Shortcut Unlocked — Path to Cathedral opened!"),mn.playSound("hit"))):l.style.display="none";const d=te.checkInsideIllusoryWall(ee.mesh.position);if(d&&!d.revealed){te.revealHiddenWall(d.id);const f=document.getElementById("illusory-notification");f.style.display="block",setTimeout(()=>{f.style.display="none"},2500),mn.playSound("hit")}if(Ie.bloodstainMesh){const f=.6+Math.sin(Date.now()*.005)*.3;Ie.bloodstainMesh.material.opacity=f}vo.render()}Hu();window.gameManager=Ie;window.player=ee;window.world=te;window.itemManager=Pi;window.audioManager=mn;window.particleManager=po;
