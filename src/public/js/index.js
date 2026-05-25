var PW="182",n9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},s9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},IW=0,iQ=1,AW=2;var z7=1,TW=2,o8=3,i9=0,sJ=1,vJ=2,j9=0,C7=1,a8=2,oQ=3,aQ=4,SW=5,r8=100,jW=101,yW=102,vW=103,fW=104,hW=200,bW=201,xW=202,gW=203,pW=204,lW=205,mW=206,uW=207,dW=208,cW=209,nW=210,sW=211,iW=212,oW=213,aW=214,B6=0,z6=1,C6=2,w7=3,w6=4,_6=5,P6=6,I6=7,rW=0,tW=1,eW=2,q9=0,rQ=1,tQ=2,eQ=3,_7=4,J$=5,Q$=6,$$=7;var t8=301,O8=302,A6=303,T6=304,P7=306,e8=1000,J7=1001,S6=1002,E9=1003,j6=1004;var R8=1005;var DJ=1006,Q7=1007;var y9=1008;var N9=1009,JH=1010,QH=1011,I7=1012,Z$=1013,o9=1014,v9=1015,f9=1016,W$=1017,H$=1018,$7=1020,$H=35902,ZH=35899,WH=1021,HH=1022,R9=1023,k8=1026,M8=1027,YH=1028,Y$=1029,Z7=1030,X$=1031;var K$=1033,y6=33776,v6=33777,f6=33778,h6=33779,U$=35840,G$=35841,q$=35842,E$=35843,N$=36196,F$=37492,O$=37496,R$=37488,k$=37489,M$=37490,L$=37491,D$=37808,V$=37809,B$=37810,z$=37811,C$=37812,w$=37813,_$=37814,P$=37815,I$=37816,A$=37817,T$=37818,S$=37819,j$=37820,y$=37821,v$=36492,f$=36494,h$=36495,b$=36283,x$=36284,g$=36285,p$=36286;var l$=2300,b6=2301;var m$=0,A7=1,W7=2;var XH=0,KH=1,L8="",gJ="srgb",IJ="srgb-linear",u$="linear",ZJ="srgb";var UH=512,GH=513,qH=514,x6=515,EH=516,NH=517,g6=518,FH=519;var d$="300 es",c$=2000;function n$(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function cY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function n8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function OH(){let J=n8("canvas");return J.style.display="block",J}var dZ={},s8=null;function B7(...J){let Q="THREE."+J.shift();if(s8)s8("log",Q,...J);else console.log(Q,...J)}function L0(...J){let Q="THREE."+J.shift();if(s8)s8("warn",Q,...J);else console.warn(Q,...J)}function I0(...J){let Q="THREE."+J.shift();if(s8)s8("error",Q,...J);else console.error(Q,...J)}function i8(...J){let Q=J.join(" ");if(Q in dZ)return;dZ[Q]=!0,L0(...J)}function RH(J,Q,$){return new Promise(function(Z,W){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(H,$);break;default:Z()}}setTimeout(H,$)})}class h9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,H=Z.length;W<H;W++)Z[W].call(this,J);J.target=null}}}var AJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cZ=1234567,d8=Math.PI/180,N8=180/Math.PI;function U9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(AJ[J&255]+AJ[J>>8&255]+AJ[J>>16&255]+AJ[J>>24&255]+"-"+AJ[Q&255]+AJ[Q>>8&255]+"-"+AJ[Q>>16&15|64]+AJ[Q>>24&255]+"-"+AJ[$&63|128]+AJ[$>>8&255]+"-"+AJ[$>>16&255]+AJ[$>>24&255]+AJ[Z&255]+AJ[Z>>8&255]+AJ[Z>>16&255]+AJ[Z>>24&255]).toLowerCase()}function l0(J,Q,$){return Math.max(Q,Math.min($,J))}function s$(J,Q){return(J%Q+Q)%Q}function nY(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function sY(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function V7(J,Q,$){return(1-$)*J+$*Q}function iY(J,Q,$,Z){return V7(J,Q,1-Math.exp(-$*Z))}function oY(J,Q=1){return Q-Math.abs(s$(J,Q*2)-Q)}function aY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function rY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function tY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function eY(J,Q){return J+Math.random()*(Q-J)}function JX(J){return J*(0.5-Math.random())}function QX(J){if(J!==void 0)cZ=J;let Q=cZ+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function $X(J){return J*d8}function ZX(J){return J*N8}function WX(J){return(J&J-1)===0&&J!==0}function HX(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function YX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function XX(J,Q,$,Z,W){let{cos:H,sin:Y}=Math,X=H($/2),K=Y($/2),U=H((Q+Z)/2),G=Y((Q+Z)/2),q=H((Q-Z)/2),E=Y((Q-Z)/2),N=H((Z-Q)/2),k=Y((Z-Q)/2);switch(W){case"XYX":J.set(X*G,K*q,K*E,X*U);break;case"YZY":J.set(K*E,X*G,K*q,X*U);break;case"ZXZ":J.set(K*q,K*E,X*G,X*U);break;case"XZX":J.set(X*G,K*k,K*N,X*U);break;case"YXY":J.set(K*N,X*G,K*k,X*U);break;case"ZYZ":J.set(K*k,K*N,X*G,X*U);break;default:L0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function K9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function r0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var T7={DEG2RAD:d8,RAD2DEG:N8,generateUUID:U9,clamp:l0,euclideanModulo:s$,mapLinear:nY,inverseLerp:sY,lerp:V7,damp:iY,pingpong:oY,smoothstep:aY,smootherstep:rY,randInt:tY,randFloat:eY,randFloatSpread:JX,seededRandom:QX,degToRad:$X,radToDeg:ZX,isPowerOfTwo:WX,ceilPowerOfTwo:HX,floorPowerOfTwo:YX,setQuaternionFromProperEuler:XX,normalize:r0,denormalize:K9};class P0{constructor(J=0,Q=0){P0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(l0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,H=this.y-J.y;return this.x=W*$-H*Z+J.x,this.y=W*Z+H*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,H,Y){let X=$[Z+0],K=$[Z+1],U=$[Z+2],G=$[Z+3],q=W[H+0],E=W[H+1],N=W[H+2],k=W[H+3];if(Y<=0){J[Q+0]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G;return}if(Y>=1){J[Q+0]=q,J[Q+1]=E,J[Q+2]=N,J[Q+3]=k;return}if(G!==k||X!==q||K!==E||U!==N){let M=X*q+K*E+U*N+G*k;if(M<0)q=-q,E=-E,N=-N,k=-k,M=-M;let F=1-Y;if(M<0.9995){let O=Math.acos(M),w=Math.sin(O);F=Math.sin(F*O)/w,Y=Math.sin(Y*O)/w,X=X*F+q*Y,K=K*F+E*Y,U=U*F+N*Y,G=G*F+k*Y}else{X=X*F+q*Y,K=K*F+E*Y,U=U*F+N*Y,G=G*F+k*Y;let O=1/Math.sqrt(X*X+K*K+U*U+G*G);X*=O,K*=O,U*=O,G*=O}}J[Q]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,H){let Y=$[Z],X=$[Z+1],K=$[Z+2],U=$[Z+3],G=W[H],q=W[H+1],E=W[H+2],N=W[H+3];return J[Q]=Y*N+U*G+X*E-K*q,J[Q+1]=X*N+U*q+K*G-Y*E,J[Q+2]=K*N+U*E+Y*q-X*G,J[Q+3]=U*N-Y*G-X*q-K*E,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:H}=J,Y=Math.cos,X=Math.sin,K=Y($/2),U=Y(Z/2),G=Y(W/2),q=X($/2),E=X(Z/2),N=X(W/2);switch(H){case"XYZ":this._x=q*U*G+K*E*N,this._y=K*E*G-q*U*N,this._z=K*U*N+q*E*G,this._w=K*U*G-q*E*N;break;case"YXZ":this._x=q*U*G+K*E*N,this._y=K*E*G-q*U*N,this._z=K*U*N-q*E*G,this._w=K*U*G+q*E*N;break;case"ZXY":this._x=q*U*G-K*E*N,this._y=K*E*G+q*U*N,this._z=K*U*N+q*E*G,this._w=K*U*G-q*E*N;break;case"ZYX":this._x=q*U*G-K*E*N,this._y=K*E*G+q*U*N,this._z=K*U*N-q*E*G,this._w=K*U*G+q*E*N;break;case"YZX":this._x=q*U*G+K*E*N,this._y=K*E*G+q*U*N,this._z=K*U*N-q*E*G,this._w=K*U*G-q*E*N;break;case"XZY":this._x=q*U*G-K*E*N,this._y=K*E*G-q*U*N,this._z=K*U*N+q*E*G,this._w=K*U*G+q*E*N;break;default:L0("Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],H=Q[1],Y=Q[5],X=Q[9],K=Q[2],U=Q[6],G=Q[10],q=$+Y+G;if(q>0){let E=0.5/Math.sqrt(q+1);this._w=0.25/E,this._x=(U-X)*E,this._y=(W-K)*E,this._z=(H-Z)*E}else if($>Y&&$>G){let E=2*Math.sqrt(1+$-Y-G);this._w=(U-X)/E,this._x=0.25*E,this._y=(Z+H)/E,this._z=(W+K)/E}else if(Y>G){let E=2*Math.sqrt(1+Y-$-G);this._w=(W-K)/E,this._x=(Z+H)/E,this._y=0.25*E,this._z=(X+U)/E}else{let E=2*Math.sqrt(1+G-$-Y);this._w=(H-Z)/E,this._x=(W+K)/E,this._y=(X+U)/E,this._z=0.25*E}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(l0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:H}=J,Y=Q._x,X=Q._y,K=Q._z,U=Q._w;return this._x=$*U+H*Y+Z*K-W*X,this._y=Z*U+H*X+W*Y-$*K,this._z=W*U+H*K+$*X-Z*Y,this._w=H*U-$*Y-Z*X-W*K,this._onChangeCallback(),this}slerp(J,Q){if(Q<=0)return this;if(Q>=1)return this.copy(J);let{_x:$,_y:Z,_z:W,_w:H}=J,Y=this.dot(J);if(Y<0)$=-$,Z=-Z,W=-W,H=-H,Y=-Y;let X=1-Q;if(Y<0.9995){let K=Math.acos(Y),U=Math.sin(K);X=Math.sin(X*K)/U,Q=Math.sin(Q*K)/U,this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+W*Q,this._w=this._w*X+H*Q,this._onChangeCallback()}else this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+W*Q,this._w=this._w*X+H*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(J=0,Q=0,$=0){I.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(nZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(nZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,H=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*H,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*H,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*H,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,H=J.y,Y=J.z,X=J.w,K=2*(H*Z-Y*$),U=2*(Y*Q-W*Z),G=2*(W*$-H*Q);return this.x=Q+X*K+H*G-Y*U,this.y=$+X*U+Y*K-W*G,this.z=Z+X*G+W*U-H*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this.z=l0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this.z=l0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,H=Q.x,Y=Q.y,X=Q.z;return this.x=Z*X-W*Y,this.y=W*H-$*X,this.z=$*Y-Z*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return LQ.copy(this).projectOnVector(J),this.sub(LQ)}reflect(J){return this.sub(LQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(l0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var LQ=new I,nZ=new pJ;class h0{constructor(J,Q,$,Z,W,H,Y,X,K){if(h0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,X,K)}set(J,Q,$,Z,W,H,Y,X,K){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=W,U[5]=X,U[6]=$,U[7]=H,U[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[3],X=$[6],K=$[1],U=$[4],G=$[7],q=$[2],E=$[5],N=$[8],k=Z[0],M=Z[3],F=Z[6],O=Z[1],w=Z[4],D=Z[7],C=Z[2],S=Z[5],_=Z[8];return W[0]=H*k+Y*O+X*C,W[3]=H*M+Y*w+X*S,W[6]=H*F+Y*D+X*_,W[1]=K*k+U*O+G*C,W[4]=K*M+U*w+G*S,W[7]=K*F+U*D+G*_,W[2]=q*k+E*O+N*C,W[5]=q*M+E*w+N*S,W[8]=q*F+E*D+N*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8];return Q*H*U-Q*Y*K-$*W*U+$*Y*X+Z*W*K-Z*H*X}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=U*H-Y*K,q=Y*X-U*W,E=K*W-H*X,N=Q*G+$*q+Z*E;if(N===0)return this.set(0,0,0,0,0,0,0,0,0);let k=1/N;return J[0]=G*k,J[1]=(Z*K-U*$)*k,J[2]=(Y*$-Z*H)*k,J[3]=q*k,J[4]=(U*Q-Z*X)*k,J[5]=(Z*W-Y*Q)*k,J[6]=E*k,J[7]=($*X-K*Q)*k,J[8]=(H*Q-$*W)*k,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,H,Y){let X=Math.cos(W),K=Math.sin(W);return this.set($*X,$*K,-$*(X*H+K*Y)+H+J,-Z*K,Z*X,-Z*(-K*H+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return this.premultiply(DQ.makeScale(J,Q)),this}rotate(J){return this.premultiply(DQ.makeRotation(-J)),this}translate(J,Q){return this.premultiply(DQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var DQ=new h0,sZ=new h0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),iZ=new h0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function KX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,H,Y){if(this.enabled===!1||H===Y||!H||!Y)return W;if(this.spaces[H].transfer==="srgb")W.r=A9(W.r),W.g=A9(W.g),W.b=A9(W.b);if(this.spaces[H].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[H].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=c8(W.r),W.g=c8(W.g),W.b=c8(W.b);return W},workingToColorSpace:function(W,H){return this.convert(W,this.workingColorSpace,H)},colorSpaceToWorking:function(W,H){return this.convert(W,H,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,H=this.workingColorSpace){return W.fromArray(this.spaces[H].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,H,Y){return W.copy(this.spaces[H].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,H){return i8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,H)},toWorkingColorSpace:function(W,H){return i8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:sZ,fromXYZ:iZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:sZ,fromXYZ:iZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var p0=KX();function A9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function c8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var T8;class i${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(T8===void 0)T8=n8("canvas");T8.width=J.width,T8.height=J.height;let Z=T8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=T8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=n8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let H=0;H<W.length;H++)W[H]=A9(W[H]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(A9(Q[$]/255)*255);else Q[$]=A9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return L0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var UX=0;class S7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UX++}),this.uuid=U9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let H=0,Y=Z.length;H<Y;H++)if(Z[H].isDataTexture)W.push(VQ(Z[H].image));else W.push(VQ(Z[H]))}else W=VQ(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function VQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return i$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return L0("Texture: Unable to serialize Texture."),{}}var GX=0,BQ=new I;class NJ extends h9{constructor(J=NJ.DEFAULT_IMAGE,Q=NJ.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,H=1008,Y=1023,X=1009,K=NJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:GX++}),this.uuid=U9(),this.name="",this.source=new S7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=H,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new P0(0,0),this.repeat=new P0(1,1),this.center=new P0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new h0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(BQ).x}get height(){return this.source.getSize(BQ).y}get depth(){return this.source.getSize(BQ).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){L0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){L0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}NJ.DEFAULT_IMAGE=null;NJ.DEFAULT_MAPPING=300;NJ.DEFAULT_ANISOTROPY=1;class XJ{constructor(J=0,Q=0,$=0,Z=1){XJ.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*$+H[8]*Z+H[12]*W,this.y=H[1]*Q+H[5]*$+H[9]*Z+H[13]*W,this.z=H[2]*Q+H[6]*$+H[10]*Z+H[14]*W,this.w=H[3]*Q+H[7]*$+H[11]*Z+H[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,H=0.01,Y=0.1,X=J.elements,K=X[0],U=X[4],G=X[8],q=X[1],E=X[5],N=X[9],k=X[2],M=X[6],F=X[10];if(Math.abs(U-q)<0.01&&Math.abs(G-k)<0.01&&Math.abs(N-M)<0.01){if(Math.abs(U+q)<0.1&&Math.abs(G+k)<0.1&&Math.abs(N+M)<0.1&&Math.abs(K+E+F-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let w=(K+1)/2,D=(E+1)/2,C=(F+1)/2,S=(U+q)/4,_=(G+k)/4,A=(N+M)/4;if(w>D&&w>C)if(w<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(w),Z=S/$,W=_/$;else if(D>C)if(D<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(D),$=S/Z,W=A/Z;else if(C<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(C),$=_/W,Z=A/W;return this.set($,Z,W,Q),this}let O=Math.sqrt((M-N)*(M-N)+(G-k)*(G-k)+(q-U)*(q-U));if(Math.abs(O)<0.001)O=1;return this.x=(M-N)/O,this.y=(G-k)/O,this.z=(q-U)/O,this.w=Math.acos((K+E+F-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this.z=l0(this.z,J.z,Q.z),this.w=l0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this.z=l0(this.z,J,Q),this.w=l0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o$ extends h9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new XJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new XJ(0,0,J,Q);let Z={width:J,height:Q,depth:$.depth},W=new NJ(Z);this.textures=[];let H=$.count;for(let Y=0;Y<H;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new S7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class J9 extends o${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class p6 extends NJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class a$ extends NJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q9{constructor(J=new I(1/0,1/0,1/0),Q=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(W9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(W9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=W9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let H=0,Y=W.count;H<Y;H++){if(J.isMesh===!0)J.getVertexPosition(H,W9);else W9.fromBufferAttribute(W,H);W9.applyMatrix4(J.matrixWorld),this.expandByPoint(W9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();s7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();s7.copy($.boundingBox)}s7.applyMatrix4(J.matrixWorld),this.union(s7)}}let Z=J.children;for(let W=0,H=Z.length;W<H;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,W9),W9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(F7),i7.subVectors(this.max,F7),S8.subVectors(J.a,F7),j8.subVectors(J.b,F7),y8.subVectors(J.c,F7),p9.subVectors(j8,S8),l9.subVectors(y8,j8),U8.subVectors(S8,y8);let Q=[0,-p9.z,p9.y,0,-l9.z,l9.y,0,-U8.z,U8.y,p9.z,0,-p9.x,l9.z,0,-l9.x,U8.z,0,-U8.x,-p9.y,p9.x,0,-l9.y,l9.x,0,-U8.y,U8.x,0];if(!zQ(Q,S8,j8,y8,i7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!zQ(Q,S8,j8,y8,i7))return!1;return o7.crossVectors(p9,l9),Q=[o7.x,o7.y,o7.z],zQ(Q,S8,j8,y8,i7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,W9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(W9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return z9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),z9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),z9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),z9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),z9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),z9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),z9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),z9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(z9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var z9=[new I,new I,new I,new I,new I,new I,new I,new I],W9=new I,s7=new Q9,S8=new I,j8=new I,y8=new I,p9=new I,l9=new I,U8=new I,F7=new I,i7=new I,o7=new I,G8=new I;function zQ(J,Q,$,Z,W){for(let H=0,Y=J.length-3;H<=Y;H+=3){G8.fromArray(J,H);let X=W.x*Math.abs(G8.x)+W.y*Math.abs(G8.y)+W.z*Math.abs(G8.z),K=Q.dot(G8),U=$.dot(G8),G=Z.dot(G8);if(Math.max(-Math.max(K,U,G),Math.min(K,U,G))>X)return!1}return!0}var qX=new Q9,O7=new I,CQ=new I;class iJ{constructor(J=new I,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else qX.setFromPoints(J).getCenter($);let Z=0;for(let W=0,H=J.length;W<H;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;O7.subVectors(J,this.center);let Q=O7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(O7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else CQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(O7.copy(J.center).add(CQ)),this.expandByPoint(O7.copy(J.center).sub(CQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var C9=new I,wQ=new I,a7=new I,m9=new I,_Q=new I,r7=new I,PQ=new I;class b9{constructor(J=new I,Q=new I(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,C9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=C9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return C9.copy(this.origin).addScaledVector(this.direction,Q),C9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){wQ.copy(J).add(Q).multiplyScalar(0.5),a7.copy(Q).sub(J).normalize(),m9.copy(this.origin).sub(wQ);let W=J.distanceTo(Q)*0.5,H=-this.direction.dot(a7),Y=m9.dot(this.direction),X=-m9.dot(a7),K=m9.lengthSq(),U=Math.abs(1-H*H),G,q,E,N;if(U>0)if(G=H*X-Y,q=H*Y-X,N=W*U,G>=0)if(q>=-N)if(q<=N){let k=1/U;G*=k,q*=k,E=G*(G+H*q+2*Y)+q*(H*G+q+2*X)+K}else q=W,G=Math.max(0,-(H*q+Y)),E=-G*G+q*(q+2*X)+K;else q=-W,G=Math.max(0,-(H*q+Y)),E=-G*G+q*(q+2*X)+K;else if(q<=-N)G=Math.max(0,-(-H*W+Y)),q=G>0?-W:Math.min(Math.max(-W,-X),W),E=-G*G+q*(q+2*X)+K;else if(q<=N)G=0,q=Math.min(Math.max(-W,-X),W),E=q*(q+2*X)+K;else G=Math.max(0,-(H*W+Y)),q=G>0?W:Math.min(Math.max(-W,-X),W),E=-G*G+q*(q+2*X)+K;else q=H>0?-W:W,G=Math.max(0,-(H*q+Y)),E=-G*G+q*(q+2*X)+K;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(wQ).addScaledVector(a7,q);return E}intersectSphere(J,Q){C9.subVectors(J.center,this.origin);let $=C9.dot(this.direction),Z=C9.dot(C9)-$*$,W=J.radius*J.radius;if(Z>W)return null;let H=Math.sqrt(W-Z),Y=$-H,X=$+H;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,H,Y,X,K=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,q=this.origin;if(K>=0)$=(J.min.x-q.x)*K,Z=(J.max.x-q.x)*K;else $=(J.max.x-q.x)*K,Z=(J.min.x-q.x)*K;if(U>=0)W=(J.min.y-q.y)*U,H=(J.max.y-q.y)*U;else W=(J.max.y-q.y)*U,H=(J.min.y-q.y)*U;if($>H||W>Z)return null;if(W>$||isNaN($))$=W;if(H<Z||isNaN(Z))Z=H;if(G>=0)Y=(J.min.z-q.z)*G,X=(J.max.z-q.z)*G;else Y=(J.max.z-q.z)*G,X=(J.min.z-q.z)*G;if($>X||Y>Z)return null;if(Y>$||$!==$)$=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,C9)!==null}intersectTriangle(J,Q,$,Z,W){_Q.subVectors(Q,J),r7.subVectors($,J),PQ.crossVectors(_Q,r7);let H=this.direction.dot(PQ),Y;if(H>0){if(Z)return null;Y=1}else if(H<0)Y=-1,H=-H;else return null;m9.subVectors(this.origin,J);let X=Y*this.direction.dot(r7.crossVectors(m9,r7));if(X<0)return null;let K=Y*this.direction.dot(_Q.cross(m9));if(K<0)return null;if(X+K>H)return null;let U=-Y*m9.dot(PQ);if(U<0)return null;return this.at(U/H,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class f0{constructor(J,Q,$,Z,W,H,Y,X,K,U,G,q,E,N,k,M){if(f0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,X,K,U,G,q,E,N,k,M)}set(J,Q,$,Z,W,H,Y,X,K,U,G,q,E,N,k,M){let F=this.elements;return F[0]=J,F[4]=Q,F[8]=$,F[12]=Z,F[1]=W,F[5]=H,F[9]=Y,F[13]=X,F[2]=K,F[6]=U,F[10]=G,F[14]=q,F[3]=E,F[7]=N,F[11]=k,F[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new f0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinant()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinant()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/v8.setFromMatrixColumn(J,0).length(),W=1/v8.setFromMatrixColumn(J,1).length(),H=1/v8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*H,Q[9]=$[9]*H,Q[10]=$[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,H=Math.cos($),Y=Math.sin($),X=Math.cos(Z),K=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let q=H*U,E=H*G,N=Y*U,k=Y*G;Q[0]=X*U,Q[4]=-X*G,Q[8]=K,Q[1]=E+N*K,Q[5]=q-k*K,Q[9]=-Y*X,Q[2]=k-q*K,Q[6]=N+E*K,Q[10]=H*X}else if(J.order==="YXZ"){let q=X*U,E=X*G,N=K*U,k=K*G;Q[0]=q+k*Y,Q[4]=N*Y-E,Q[8]=H*K,Q[1]=H*G,Q[5]=H*U,Q[9]=-Y,Q[2]=E*Y-N,Q[6]=k+q*Y,Q[10]=H*X}else if(J.order==="ZXY"){let q=X*U,E=X*G,N=K*U,k=K*G;Q[0]=q-k*Y,Q[4]=-H*G,Q[8]=N+E*Y,Q[1]=E+N*Y,Q[5]=H*U,Q[9]=k-q*Y,Q[2]=-H*K,Q[6]=Y,Q[10]=H*X}else if(J.order==="ZYX"){let q=H*U,E=H*G,N=Y*U,k=Y*G;Q[0]=X*U,Q[4]=N*K-E,Q[8]=q*K+k,Q[1]=X*G,Q[5]=k*K+q,Q[9]=E*K-N,Q[2]=-K,Q[6]=Y*X,Q[10]=H*X}else if(J.order==="YZX"){let q=H*X,E=H*K,N=Y*X,k=Y*K;Q[0]=X*U,Q[4]=k-q*G,Q[8]=N*G+E,Q[1]=G,Q[5]=H*U,Q[9]=-Y*U,Q[2]=-K*U,Q[6]=E*G+N,Q[10]=q-k*G}else if(J.order==="XZY"){let q=H*X,E=H*K,N=Y*X,k=Y*K;Q[0]=X*U,Q[4]=-G,Q[8]=K*U,Q[1]=q*G+k,Q[5]=H*U,Q[9]=E*G-N,Q[2]=N*G-E,Q[6]=Y*U,Q[10]=k*G+q}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(EX,J,NX)}lookAt(J,Q,$){let Z=this.elements;if(dJ.subVectors(J,Q),dJ.lengthSq()===0)dJ.z=1;if(dJ.normalize(),u9.crossVectors($,dJ),u9.lengthSq()===0){if(Math.abs($.z)===1)dJ.x+=0.0001;else dJ.z+=0.0001;dJ.normalize(),u9.crossVectors($,dJ)}return u9.normalize(),t7.crossVectors(dJ,u9),Z[0]=u9.x,Z[4]=t7.x,Z[8]=dJ.x,Z[1]=u9.y,Z[5]=t7.y,Z[9]=dJ.y,Z[2]=u9.z,Z[6]=t7.z,Z[10]=dJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[4],X=$[8],K=$[12],U=$[1],G=$[5],q=$[9],E=$[13],N=$[2],k=$[6],M=$[10],F=$[14],O=$[3],w=$[7],D=$[11],C=$[15],S=Z[0],_=Z[4],A=Z[8],j=Z[12],z=Z[1],B=Z[5],P=Z[9],x=Z[13],u=Z[2],p=Z[6],o=Z[10],d=Z[14],l=Z[3],i=Z[7],U0=Z[11],W0=Z[15];return W[0]=H*S+Y*z+X*u+K*l,W[4]=H*_+Y*B+X*p+K*i,W[8]=H*A+Y*P+X*o+K*U0,W[12]=H*j+Y*x+X*d+K*W0,W[1]=U*S+G*z+q*u+E*l,W[5]=U*_+G*B+q*p+E*i,W[9]=U*A+G*P+q*o+E*U0,W[13]=U*j+G*x+q*d+E*W0,W[2]=N*S+k*z+M*u+F*l,W[6]=N*_+k*B+M*p+F*i,W[10]=N*A+k*P+M*o+F*U0,W[14]=N*j+k*x+M*d+F*W0,W[3]=O*S+w*z+D*u+C*l,W[7]=O*_+w*B+D*p+C*i,W[11]=O*A+w*P+D*o+C*U0,W[15]=O*j+w*x+D*d+C*W0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],H=J[1],Y=J[5],X=J[9],K=J[13],U=J[2],G=J[6],q=J[10],E=J[14],N=J[3],k=J[7],M=J[11],F=J[15],O=X*E-K*q,w=Y*E-K*G,D=Y*q-X*G,C=H*E-K*U,S=H*q-X*U,_=H*G-Y*U;return Q*(k*O-M*w+F*D)-$*(N*O-M*C+F*S)+Z*(N*w-k*C+F*_)-W*(N*D-k*S+M*_)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=J[9],q=J[10],E=J[11],N=J[12],k=J[13],M=J[14],F=J[15],O=G*M*K-k*q*K+k*X*E-Y*M*E-G*X*F+Y*q*F,w=N*q*K-U*M*K-N*X*E+H*M*E+U*X*F-H*q*F,D=U*k*K-N*G*K+N*Y*E-H*k*E-U*Y*F+H*G*F,C=N*G*X-U*k*X-N*Y*q+H*k*q+U*Y*M-H*G*M,S=Q*O+$*w+Z*D+W*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/S;return J[0]=O*_,J[1]=(k*q*W-G*M*W-k*Z*E+$*M*E+G*Z*F-$*q*F)*_,J[2]=(Y*M*W-k*X*W+k*Z*K-$*M*K-Y*Z*F+$*X*F)*_,J[3]=(G*X*W-Y*q*W-G*Z*K+$*q*K+Y*Z*E-$*X*E)*_,J[4]=w*_,J[5]=(U*M*W-N*q*W+N*Z*E-Q*M*E-U*Z*F+Q*q*F)*_,J[6]=(N*X*W-H*M*W-N*Z*K+Q*M*K+H*Z*F-Q*X*F)*_,J[7]=(H*q*W-U*X*W+U*Z*K-Q*q*K-H*Z*E+Q*X*E)*_,J[8]=D*_,J[9]=(N*G*W-U*k*W-N*$*E+Q*k*E+U*$*F-Q*G*F)*_,J[10]=(H*k*W-N*Y*W+N*$*K-Q*k*K-H*$*F+Q*Y*F)*_,J[11]=(U*Y*W-H*G*W-U*$*K+Q*G*K+H*$*E-Q*Y*E)*_,J[12]=C*_,J[13]=(U*k*Z-N*G*Z+N*$*q-Q*k*q-U*$*M+Q*G*M)*_,J[14]=(N*Y*Z-H*k*Z-N*$*X+Q*k*X+H*$*M-Q*Y*M)*_,J[15]=(H*G*Z-U*Y*Z+U*$*X-Q*G*X-H*$*q+Q*Y*q)*_,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,H=J.x,Y=J.y,X=J.z,K=W*H,U=W*Y;return this.set(K*H+$,K*Y-Z*X,K*X+Z*Y,0,K*Y+Z*X,U*Y+$,U*X-Z*H,0,K*X-Z*Y,U*X+Z*H,W*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,H){return this.set(1,$,W,0,J,1,H,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,H=Q._y,Y=Q._z,X=Q._w,K=W+W,U=H+H,G=Y+Y,q=W*K,E=W*U,N=W*G,k=H*U,M=H*G,F=Y*G,O=X*K,w=X*U,D=X*G,C=$.x,S=$.y,_=$.z;return Z[0]=(1-(k+F))*C,Z[1]=(E+D)*C,Z[2]=(N-w)*C,Z[3]=0,Z[4]=(E-D)*S,Z[5]=(1-(q+F))*S,Z[6]=(M+O)*S,Z[7]=0,Z[8]=(N+w)*_,Z[9]=(M-O)*_,Z[10]=(1-(q+k))*_,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;if(J.x=Z[12],J.y=Z[13],J.z=Z[14],this.determinant()===0)return $.set(1,1,1),Q.identity(),this;let W=v8.set(Z[0],Z[1],Z[2]).length(),H=v8.set(Z[4],Z[5],Z[6]).length(),Y=v8.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;H9.copy(this);let K=1/W,U=1/H,G=1/Y;return H9.elements[0]*=K,H9.elements[1]*=K,H9.elements[2]*=K,H9.elements[4]*=U,H9.elements[5]*=U,H9.elements[6]*=U,H9.elements[8]*=G,H9.elements[9]*=G,H9.elements[10]*=G,Q.setFromRotationMatrix(H9),$.x=W,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,H,Y=2000,X=!1){let K=this.elements,U=2*W/(Q-J),G=2*W/($-Z),q=(Q+J)/(Q-J),E=($+Z)/($-Z),N,k;if(X)N=W/(H-W),k=H*W/(H-W);else if(Y===2000)N=-(H+W)/(H-W),k=-2*H*W/(H-W);else if(Y===2001)N=-H/(H-W),k=-H*W/(H-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=q,K[12]=0,K[1]=0,K[5]=G,K[9]=E,K[13]=0,K[2]=0,K[6]=0,K[10]=N,K[14]=k,K[3]=0,K[7]=0,K[11]=-1,K[15]=0,this}makeOrthographic(J,Q,$,Z,W,H,Y=2000,X=!1){let K=this.elements,U=2/(Q-J),G=2/($-Z),q=-(Q+J)/(Q-J),E=-($+Z)/($-Z),N,k;if(X)N=1/(H-W),k=H/(H-W);else if(Y===2000)N=-2/(H-W),k=-(H+W)/(H-W);else if(Y===2001)N=-1/(H-W),k=-W/(H-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=0,K[12]=q,K[1]=0,K[5]=G,K[9]=0,K[13]=E,K[2]=0,K[6]=0,K[10]=N,K[14]=k,K[3]=0,K[7]=0,K[11]=0,K[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var v8=new I,H9=new f0,EX=new I(0,0,0),NX=new I(1,1,1),u9=new I,t7=new I,dJ=new I,oZ=new f0,aZ=new pJ;class G9{constructor(J=0,Q=0,$=0,Z=G9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],H=Z[4],Y=Z[8],X=Z[1],K=Z[5],U=Z[9],G=Z[2],q=Z[6],E=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(l0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,E),this._z=Math.atan2(-H,W);else this._x=Math.atan2(q,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-l0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,E),this._z=Math.atan2(X,K);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(l0(q,-1,1)),Math.abs(q)<0.9999999)this._y=Math.atan2(-G,E),this._z=Math.atan2(-H,K);else this._y=0,this._z=Math.atan2(X,W);break;case"ZYX":if(this._y=Math.asin(-l0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(q,E),this._z=Math.atan2(X,W);else this._x=0,this._z=Math.atan2(-H,K);break;case"YZX":if(this._z=Math.asin(l0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,K),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(Y,E);break;case"XZY":if(this._z=Math.asin(-l0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(q,K),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-U,E),this._y=0;break;default:L0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return oZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(oZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return aZ.setFromEuler(this),this.setFromQuaternion(aZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}G9.DEFAULT_ORDER="XYZ";class j7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var FX=0,rZ=new I,f8=new pJ,w9=new f0,e7=new I,R7=new I,OX=new I,RX=new pJ,tZ=new I(1,0,0),eZ=new I(0,1,0),JW=new I(0,0,1),QW={type:"added"},kX={type:"removed"},h8={type:"childadded",child:null},IQ={type:"childremoved",child:null};class UJ extends h9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:FX++}),this.uuid=U9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=UJ.DEFAULT_UP.clone();let J=new I,Q=new G9,$=new pJ,Z=new I(1,1,1);function W(){$.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new f0},normalMatrix:{value:new h0}}),this.matrix=new f0,this.matrixWorld=new f0,this.matrixAutoUpdate=UJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=UJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return f8.setFromAxisAngle(J,Q),this.quaternion.multiply(f8),this}rotateOnWorldAxis(J,Q){return f8.setFromAxisAngle(J,Q),this.quaternion.premultiply(f8),this}rotateX(J){return this.rotateOnAxis(tZ,J)}rotateY(J){return this.rotateOnAxis(eZ,J)}rotateZ(J){return this.rotateOnAxis(JW,J)}translateOnAxis(J,Q){return rZ.copy(J).applyQuaternion(this.quaternion),this.position.add(rZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(tZ,J)}translateY(J){return this.translateOnAxis(eZ,J)}translateZ(J){return this.translateOnAxis(JW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(w9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)e7.copy(J);else e7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),R7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)w9.lookAt(R7,e7,this.up);else w9.lookAt(e7,R7,this.up);if(this.quaternion.setFromRotationMatrix(w9),Z)w9.extractRotation(Z.matrixWorld),f8.setFromRotationMatrix(w9),this.quaternion.premultiply(f8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return I0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(QW),h8.child=J,this.dispatchEvent(h8),h8.child=null;else I0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(kX),IQ.child=J,this.dispatchEvent(IQ),IQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),w9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),w9.multiply(J.parent.matrixWorld);return J.applyMatrix4(w9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(QW),h8.child=J,this.dispatchEvent(h8),h8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let H=this.children[$].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(R7,J,OX),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(R7,RX,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let K=0,U=X.length;K<U;K++){let G=X[K];W(J.shapes,G)}else W(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,K=this.material.length;X<K;X++)Y.push(W(J.materials,this.material[X]));Z.material=Y}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(W(J.animations,X))}}if(Q){let Y=H(J.geometries),X=H(J.materials),K=H(J.textures),U=H(J.images),G=H(J.shapes),q=H(J.skeletons),E=H(J.animations),N=H(J.nodes);if(Y.length>0)$.geometries=Y;if(X.length>0)$.materials=X;if(K.length>0)$.textures=K;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(q.length>0)$.skeletons=q;if(E.length>0)$.animations=E;if(N.length>0)$.nodes=N}return $.object=Z,$;function H(Y){let X=[];for(let K in Y){let U=Y[K];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}UJ.DEFAULT_UP=new I(0,1,0);UJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;UJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Y9=new I,_9=new I,AQ=new I,P9=new I,b8=new I,x8=new I,$W=new I,TQ=new I,SQ=new I,jQ=new I,yQ=new XJ,vQ=new XJ,fQ=new XJ;class nJ{constructor(J=new I,Q=new I,$=new I){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),Y9.subVectors(J,Q),Z.cross(Y9);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){Y9.subVectors(Z,Q),_9.subVectors($,Q),AQ.subVectors(J,Q);let H=Y9.dot(Y9),Y=Y9.dot(_9),X=Y9.dot(AQ),K=_9.dot(_9),U=_9.dot(AQ),G=H*K-Y*Y;if(G===0)return W.set(0,0,0),null;let q=1/G,E=(K*X-Y*U)*q,N=(H*U-Y*X)*q;return W.set(1-E-N,N,E)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,P9)===null)return!1;return P9.x>=0&&P9.y>=0&&P9.x+P9.y<=1}static getInterpolation(J,Q,$,Z,W,H,Y,X){if(this.getBarycoord(J,Q,$,Z,P9)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(W,P9.x),X.addScaledVector(H,P9.y),X.addScaledVector(Y,P9.z),X}static getInterpolatedAttribute(J,Q,$,Z,W,H){return yQ.setScalar(0),vQ.setScalar(0),fQ.setScalar(0),yQ.fromBufferAttribute(J,Q),vQ.fromBufferAttribute(J,$),fQ.fromBufferAttribute(J,Z),H.setScalar(0),H.addScaledVector(yQ,W.x),H.addScaledVector(vQ,W.y),H.addScaledVector(fQ,W.z),H}static isFrontFacing(J,Q,$,Z){return Y9.subVectors($,Q),_9.subVectors(J,Q),Y9.cross(_9).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return Y9.subVectors(this.c,this.b),_9.subVectors(this.a,this.b),Y9.cross(_9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return nJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return nJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return nJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return nJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return nJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,H,Y;b8.subVectors(Z,$),x8.subVectors(W,$),TQ.subVectors(J,$);let X=b8.dot(TQ),K=x8.dot(TQ);if(X<=0&&K<=0)return Q.copy($);SQ.subVectors(J,Z);let U=b8.dot(SQ),G=x8.dot(SQ);if(U>=0&&G<=U)return Q.copy(Z);let q=X*G-U*K;if(q<=0&&X>=0&&U<=0)return H=X/(X-U),Q.copy($).addScaledVector(b8,H);jQ.subVectors(J,W);let E=b8.dot(jQ),N=x8.dot(jQ);if(N>=0&&E<=N)return Q.copy(W);let k=E*K-X*N;if(k<=0&&K>=0&&N<=0)return Y=K/(K-N),Q.copy($).addScaledVector(x8,Y);let M=U*N-E*G;if(M<=0&&G-U>=0&&E-N>=0)return $W.subVectors(W,Z),Y=(G-U)/(G-U+(E-N)),Q.copy(Z).addScaledVector($W,Y);let F=1/(M+k+q);return H=k*F,Y=q*F,Q.copy($).addScaledVector(b8,H).addScaledVector(x8,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var kH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},d9={h:0,s:0,l:0},J6={h:0,s:0,l:0};function hQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class w0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,p0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=p0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,p0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=p0.workingColorSpace){if(J=s$(J,1),Q=l0(Q,0,1),$=l0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,H=2*$-W;this.r=hQ(H,W,J+0.3333333333333333),this.g=hQ(H,W,J),this.b=hQ(H,W,J-0.3333333333333333)}return p0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)L0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,H=Z[1],Y=Z[2];switch(H){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:L0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],H=W.length;if(H===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(W,16),Q);else L0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=kH[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else L0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=A9(J.r),this.g=A9(J.g),this.b=A9(J.b),this}copyLinearToSRGB(J){return this.r=c8(J.r),this.g=c8(J.g),this.b=c8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return p0.workingToColorSpace(TJ.copy(this),J),Math.round(l0(TJ.r*255,0,255))*65536+Math.round(l0(TJ.g*255,0,255))*256+Math.round(l0(TJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=p0.workingColorSpace){p0.workingToColorSpace(TJ.copy(this),Q);let{r:$,g:Z,b:W}=TJ,H=Math.max($,Z,W),Y=Math.min($,Z,W),X,K,U=(Y+H)/2;if(Y===H)X=0,K=0;else{let G=H-Y;switch(K=U<=0.5?G/(H+Y):G/(2-H-Y),H){case $:X=(Z-W)/G+(Z<W?6:0);break;case Z:X=(W-$)/G+2;break;case W:X=($-Z)/G+4;break}X/=6}return J.h=X,J.s=K,J.l=U,J}getRGB(J,Q=p0.workingColorSpace){return p0.workingToColorSpace(TJ.copy(this),Q),J.r=TJ.r,J.g=TJ.g,J.b=TJ.b,J}getStyle(J="srgb"){p0.workingToColorSpace(TJ.copy(this),J);let{r:Q,g:$,b:Z}=TJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(d9),this.setHSL(d9.h+J,d9.s+Q,d9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(d9),J.getHSL(J6);let $=V7(d9.h,J6.h,Q),Z=V7(d9.s,J6.s,Q),W=V7(d9.l,J6.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var TJ=new w0;w0.NAMES=kH;var MX=0;class oJ extends h9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:MX++}),this.uuid=U9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new w0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){L0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){L0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let H=[];for(let Y in W){let X=W[Y];delete X.metadata,H.push(X)}return H}if(Q){let W=Z(J.textures),H=Z(J.images);if(W.length>0)$.textures=W;if(H.length>0)$.images=H}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class fJ extends oJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new w0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new G9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var MJ=new I,Q6=new P0,LX=0;class FJ{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LX++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)Q6.fromBufferAttribute(this,Q),Q6.applyMatrix3(J),this.setXY(Q,Q6.x,Q6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)MJ.fromBufferAttribute(this,Q),MJ.applyMatrix3(J),this.setXYZ(Q,MJ.x,MJ.y,MJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)MJ.fromBufferAttribute(this,Q),MJ.applyMatrix4(J),this.setXYZ(Q,MJ.x,MJ.y,MJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)MJ.fromBufferAttribute(this,Q),MJ.applyNormalMatrix(J),this.setXYZ(Q,MJ.x,MJ.y,MJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)MJ.fromBufferAttribute(this,Q),MJ.transformDirection(J),this.setXYZ(Q,MJ.x,MJ.y,MJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=K9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=r0($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=K9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=r0(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=K9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=r0(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=K9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=r0(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=K9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=r0(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=r0(Q,this.array),$=r0($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=r0(Q,this.array),$=r0($,this.array),Z=r0(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=r0(Q,this.array),$=r0($,this.array),Z=r0(Z,this.array),W=r0(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class l6 extends FJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class m6 extends FJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class LJ extends FJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var DX=0,eJ=new f0,bQ=new UJ,g8=new I,cJ=new Q9,k7=new Q9,_J=new I;class VJ extends h9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DX++}),this.uuid=U9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((n$(J))?m6:l6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new h0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return eJ.makeRotationFromQuaternion(J),this.applyMatrix4(eJ),this}rotateX(J){return eJ.makeRotationX(J),this.applyMatrix4(eJ),this}rotateY(J){return eJ.makeRotationY(J),this.applyMatrix4(eJ),this}rotateZ(J){return eJ.makeRotationZ(J),this.applyMatrix4(eJ),this}translate(J,Q,$){return eJ.makeTranslation(J,Q,$),this.applyMatrix4(eJ),this}scale(J,Q,$){return eJ.makeScale(J,Q,$),this.applyMatrix4(eJ),this}lookAt(J){return bQ.lookAt(J),bQ.updateMatrix(),this.applyMatrix4(bQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(g8).negate(),this.translate(g8.x,g8.y,g8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];$.push(H.x,H.y,H.z||0)}this.setAttribute("position",new LJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)L0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Q9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){I0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(cJ.setFromBufferAttribute(W),this.morphTargetsRelative)_J.addVectors(this.boundingBox.min,cJ.min),this.boundingBox.expandByPoint(_J),_J.addVectors(this.boundingBox.max,cJ.max),this.boundingBox.expandByPoint(_J);else this.boundingBox.expandByPoint(cJ.min),this.boundingBox.expandByPoint(cJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))I0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new iJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){I0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(J){let $=this.boundingSphere.center;if(cJ.setFromBufferAttribute(J),Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W];if(k7.setFromBufferAttribute(Y),this.morphTargetsRelative)_J.addVectors(cJ.min,k7.min),cJ.expandByPoint(_J),_J.addVectors(cJ.max,k7.max),cJ.expandByPoint(_J);else cJ.expandByPoint(k7.min),cJ.expandByPoint(k7.max)}cJ.getCenter($);let Z=0;for(let W=0,H=J.count;W<H;W++)_J.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(_J));if(Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W],X=this.morphTargetsRelative;for(let K=0,U=Y.count;K<U;K++){if(_J.fromBufferAttribute(Y,K),X)g8.fromBufferAttribute(J,K),_J.add(g8);Z=Math.max(Z,$.distanceToSquared(_J))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))I0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){I0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new FJ(new Float32Array(4*$.count),4));let H=this.getAttribute("tangent"),Y=[],X=[];for(let A=0;A<$.count;A++)Y[A]=new I,X[A]=new I;let K=new I,U=new I,G=new I,q=new P0,E=new P0,N=new P0,k=new I,M=new I;function F(A,j,z){K.fromBufferAttribute($,A),U.fromBufferAttribute($,j),G.fromBufferAttribute($,z),q.fromBufferAttribute(W,A),E.fromBufferAttribute(W,j),N.fromBufferAttribute(W,z),U.sub(K),G.sub(K),E.sub(q),N.sub(q);let B=1/(E.x*N.y-N.x*E.y);if(!isFinite(B))return;k.copy(U).multiplyScalar(N.y).addScaledVector(G,-E.y).multiplyScalar(B),M.copy(G).multiplyScalar(E.x).addScaledVector(U,-N.x).multiplyScalar(B),Y[A].add(k),Y[j].add(k),Y[z].add(k),X[A].add(M),X[j].add(M),X[z].add(M)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let A=0,j=O.length;A<j;++A){let z=O[A],B=z.start,P=z.count;for(let x=B,u=B+P;x<u;x+=3)F(J.getX(x+0),J.getX(x+1),J.getX(x+2))}let w=new I,D=new I,C=new I,S=new I;function _(A){C.fromBufferAttribute(Z,A),S.copy(C);let j=Y[A];w.copy(j),w.sub(C.multiplyScalar(C.dot(j))).normalize(),D.crossVectors(S,j);let B=D.dot(X[A])<0?-1:1;H.setXYZW(A,w.x,w.y,w.z,B)}for(let A=0,j=O.length;A<j;++A){let z=O[A],B=z.start,P=z.count;for(let x=B,u=B+P;x<u;x+=3)_(J.getX(x+0)),_(J.getX(x+1)),_(J.getX(x+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new FJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let q=0,E=$.count;q<E;q++)$.setXYZ(q,0,0,0);let Z=new I,W=new I,H=new I,Y=new I,X=new I,K=new I,U=new I,G=new I;if(J)for(let q=0,E=J.count;q<E;q+=3){let N=J.getX(q+0),k=J.getX(q+1),M=J.getX(q+2);Z.fromBufferAttribute(Q,N),W.fromBufferAttribute(Q,k),H.fromBufferAttribute(Q,M),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),Y.fromBufferAttribute($,N),X.fromBufferAttribute($,k),K.fromBufferAttribute($,M),Y.add(U),X.add(U),K.add(U),$.setXYZ(N,Y.x,Y.y,Y.z),$.setXYZ(k,X.x,X.y,X.z),$.setXYZ(M,K.x,K.y,K.z)}else for(let q=0,E=Q.count;q<E;q+=3)Z.fromBufferAttribute(Q,q+0),W.fromBufferAttribute(Q,q+1),H.fromBufferAttribute(Q,q+2),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),$.setXYZ(q+0,U.x,U.y,U.z),$.setXYZ(q+1,U.x,U.y,U.z),$.setXYZ(q+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)_J.fromBufferAttribute(J,Q),_J.normalize(),J.setXYZ(Q,_J.x,_J.y,_J.z)}toNonIndexed(){function J(Y,X){let{array:K,itemSize:U,normalized:G}=Y,q=new K.constructor(X.length*U),E=0,N=0;for(let k=0,M=X.length;k<M;k++){if(Y.isInterleavedBufferAttribute)E=X[k]*Y.data.stride+Y.offset;else E=X[k]*U;for(let F=0;F<U;F++)q[N++]=K[E++]}return new FJ(q,U,G)}if(this.index===null)return L0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new VJ,$=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],K=J(X,$);Q.setAttribute(Y,K)}let W=this.morphAttributes;for(let Y in W){let X=[],K=W[Y];for(let U=0,G=K.length;U<G;U++){let q=K[U],E=J(q,$);X.push(E)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let Y=0,X=H.length;Y<X;Y++){let K=H[Y];Q.addGroup(K.start,K.count,K.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let K in X)if(X[K]!==void 0)J[K]=X[K];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let K=$[X];J.data.attributes[X]=K.toJSON(J.data)}let Z={},W=!1;for(let X in this.morphAttributes){let K=this.morphAttributes[X],U=[];for(let G=0,q=K.length;G<q;G++){let E=K[G];U.push(E.toJSON(J.data))}if(U.length>0)Z[X]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let K in Z){let U=Z[K];this.setAttribute(K,U.clone(Q))}let W=J.morphAttributes;for(let K in W){let U=[],G=W[K];for(let q=0,E=G.length;q<E;q++)U.push(G[q].clone(Q));this.morphAttributes[K]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let K=0,U=H.length;K<U;K++){let G=H[K];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ZW=new f0,q8=new b9,$6=new iJ,WW=new I,Z6=new I,W6=new I,H6=new I,xQ=new I,Y6=new I,HW=new I,X6=new I;class OJ extends UJ{constructor(J=new VJ,Q=new fJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,H=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(W&&Y){Y6.set(0,0,0);for(let X=0,K=W.length;X<K;X++){let U=Y[X],G=W[X];if(U===0)continue;if(xQ.fromBufferAttribute(G,J),H)Y6.addScaledVector(xQ,U);else Y6.addScaledVector(xQ.sub(Q),U)}Q.add(Y6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if($6.copy($.boundingSphere),$6.applyMatrix4(W),q8.copy(J.ray).recast(J.near),$6.containsPoint(q8.origin)===!1){if(q8.intersectSphere($6,WW)===null)return;if(q8.origin.distanceToSquared(WW)>(J.far-J.near)**2)return}if(ZW.copy(W).invert(),q8.copy(J.ray).applyMatrix4(ZW),$.boundingBox!==null){if(q8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,q8)}_computeIntersections(J,Q,$){let Z,W=this.geometry,H=this.material,Y=W.index,X=W.attributes.position,K=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,q=W.groups,E=W.drawRange;if(Y!==null)if(Array.isArray(H))for(let N=0,k=q.length;N<k;N++){let M=q[N],F=H[M.materialIndex],O=Math.max(M.start,E.start),w=Math.min(Y.count,Math.min(M.start+M.count,E.start+E.count));for(let D=O,C=w;D<C;D+=3){let S=Y.getX(D),_=Y.getX(D+1),A=Y.getX(D+2);if(Z=K6(this,F,J,$,K,U,G,S,_,A),Z)Z.faceIndex=Math.floor(D/3),Z.face.materialIndex=M.materialIndex,Q.push(Z)}}else{let N=Math.max(0,E.start),k=Math.min(Y.count,E.start+E.count);for(let M=N,F=k;M<F;M+=3){let O=Y.getX(M),w=Y.getX(M+1),D=Y.getX(M+2);if(Z=K6(this,H,J,$,K,U,G,O,w,D),Z)Z.faceIndex=Math.floor(M/3),Q.push(Z)}}else if(X!==void 0)if(Array.isArray(H))for(let N=0,k=q.length;N<k;N++){let M=q[N],F=H[M.materialIndex],O=Math.max(M.start,E.start),w=Math.min(X.count,Math.min(M.start+M.count,E.start+E.count));for(let D=O,C=w;D<C;D+=3){let S=D,_=D+1,A=D+2;if(Z=K6(this,F,J,$,K,U,G,S,_,A),Z)Z.faceIndex=Math.floor(D/3),Z.face.materialIndex=M.materialIndex,Q.push(Z)}}else{let N=Math.max(0,E.start),k=Math.min(X.count,E.start+E.count);for(let M=N,F=k;M<F;M+=3){let O=M,w=M+1,D=M+2;if(Z=K6(this,H,J,$,K,U,G,O,w,D),Z)Z.faceIndex=Math.floor(M/3),Q.push(Z)}}}}function VX(J,Q,$,Z,W,H,Y,X){let K;if(Q.side===1)K=Z.intersectTriangle(Y,H,W,!0,X);else K=Z.intersectTriangle(W,H,Y,Q.side===0,X);if(K===null)return null;X6.copy(X),X6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(X6);if(U<$.near||U>$.far)return null;return{distance:U,point:X6.clone(),object:J}}function K6(J,Q,$,Z,W,H,Y,X,K,U){J.getVertexPosition(X,Z6),J.getVertexPosition(K,W6),J.getVertexPosition(U,H6);let G=VX(J,Q,$,Z,Z6,W6,H6,HW);if(G){let q=new I;if(nJ.getBarycoord(HW,Z6,W6,H6,q),W)G.uv=nJ.getInterpolatedAttribute(W,X,K,U,q,new P0);if(H)G.uv1=nJ.getInterpolatedAttribute(H,X,K,U,q,new P0);if(Y){if(G.normal=nJ.getInterpolatedAttribute(Y,X,K,U,q,new I),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let E={a:X,b:K,c:U,normal:new I,materialIndex:0};nJ.getNormal(Z6,W6,H6,E.normal),G.face=E,G.barycoord=q}return G}class a9 extends VJ{constructor(J=1,Q=1,$=1,Z=1,W=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:H};let Y=this;Z=Math.floor(Z),W=Math.floor(W),H=Math.floor(H);let X=[],K=[],U=[],G=[],q=0,E=0;N("z","y","x",-1,-1,$,Q,J,H,W,0),N("z","y","x",1,-1,$,Q,-J,H,W,1),N("x","z","y",1,1,J,$,Q,Z,H,2),N("x","z","y",1,-1,J,$,-Q,Z,H,3),N("x","y","z",1,-1,J,Q,$,Z,W,4),N("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(X),this.setAttribute("position",new LJ(K,3)),this.setAttribute("normal",new LJ(U,3)),this.setAttribute("uv",new LJ(G,2));function N(k,M,F,O,w,D,C,S,_,A,j){let z=D/_,B=C/A,P=D/2,x=C/2,u=S/2,p=_+1,o=A+1,d=0,l=0,i=new I;for(let U0=0;U0<o;U0++){let W0=U0*B-x;for(let F0=0;F0<p;F0++){let v0=F0*z-P;i[k]=v0*O,i[M]=W0*w,i[F]=u,K.push(i.x,i.y,i.z),i[k]=0,i[M]=0,i[F]=S>0?1:-1,U.push(i.x,i.y,i.z),G.push(F0/_),G.push(1-U0/A),d+=1}}for(let U0=0;U0<A;U0++)for(let W0=0;W0<_;W0++){let F0=q+W0+p*U0,v0=q+W0+p*(U0+1),GJ=q+(W0+1)+p*(U0+1),JJ=q+(W0+1)+p*U0;X.push(F0,v0,JJ),X.push(v0,GJ,JJ),l+=6}Y.addGroup(E,l,j),E+=l,q+=d}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function D8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)L0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function SJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=D8(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function BX(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function r$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return p0.workingColorSpace}var MH={clone:D8,merge:SJ},zX=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CX=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $9 extends oJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zX,this.fragmentShader=CX,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=D8(J.uniforms),this.uniformsGroups=BX(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let H=this.uniforms[Z].value;if(H&&H.isTexture)Q.uniforms[Z]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[Z]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[Z]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[Z]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[Z]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[Z]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[Z]={type:"m4",value:H.toArray()};else Q.uniforms[Z]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class u6 extends UJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new f0,this.projectionMatrix=new f0,this.projectionMatrixInverse=new f0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var c9=new I,YW=new P0,XW=new P0;class BJ extends u6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=N8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(d8*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return N8*2*Math.atan(Math.tan(d8*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){c9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(c9.x,c9.y).multiplyScalar(-J/c9.z),c9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(c9.x,c9.y).multiplyScalar(-J/c9.z)}getViewSize(J,Q){return this.getViewBounds(J,YW,XW),Q.subVectors(XW,YW)}setViewOffset(J,Q,$,Z,W,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(d8*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:K}=H;W+=H.offsetX*Z/X,Q-=H.offsetY*$/K,Z*=H.width/X,$*=H.height/K}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var p8=-90,l8=1;class t$ extends UJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new BJ(p8,l8,J,Q);Z.layers=this.layers,this.add(Z);let W=new BJ(p8,l8,J,Q);W.layers=this.layers,this.add(W);let H=new BJ(p8,l8,J,Q);H.layers=this.layers,this.add(H);let Y=new BJ(p8,l8,J,Q);Y.layers=this.layers,this.add(Y);let X=new BJ(p8,l8,J,Q);X.layers=this.layers,this.add(X);let K=new BJ(p8,l8,J,Q);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,H,Y,X]=Q;for(let K of Q)this.remove(K);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of Q)this.add(K),K.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,H,Y,X,K,U]=this.children,G=J.getRenderTarget(),q=J.getActiveCubeFace(),E=J.getActiveMipmapLevel(),N=J.xr.enabled;J.xr.enabled=!1;let k=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,W),J.setRenderTarget($,1,Z),J.render(Q,H),J.setRenderTarget($,2,Z),J.render(Q,Y),J.setRenderTarget($,3,Z),J.render(Q,X),J.setRenderTarget($,4,Z),J.render(Q,K),$.texture.generateMipmaps=k,J.setRenderTarget($,5,Z),J.render(Q,U),J.setRenderTarget(G,q,E),J.xr.enabled=N,$.texture.needsPMREMUpdate=!0}}class d6 extends NJ{constructor(J=[],Q=301,$,Z,W,H,Y,X,K,U){super(J,Q,$,Z,W,H,Y,X,K,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class c6 extends J9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new d6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new a9(5,5,5),W=new $9({name:"CubemapFromEquirect",uniforms:D8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let H=new OJ(Z,W),Y=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new t$(1,10,this).update(J,H),Q.minFilter=Y,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,$,Z);J.setRenderTarget(W)}}class xJ extends UJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var wX={type:"move"};class y7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new xJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new xJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new xJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,H=null,Y=this._targetRay,X=this._grip,K=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(K&&J.hand){H=!0;for(let k of J.hand.values()){let M=Q.getJointPose(k,$),F=this._getHandJoint(K,k);if(M!==null)F.matrix.fromArray(M.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=M.radius;F.visible=M!==null}let U=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],q=U.position.distanceTo(G.position),E=0.02,N=0.005;if(K.inputState.pinching&&q>E+N)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&q<=E-N)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,W.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(W.linearVelocity);else X.hasLinearVelocity=!1;if(W.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(W.angularVelocity);else X.hasAngularVelocity=!1}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(wX)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=W!==null;if(K!==null)K.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new xJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}class n6 extends UJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new G9,this.environmentIntensity=1,this.environmentRotation=new G9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class V8{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=U9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=U9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=U9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var yJ=new I;class r9{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.applyMatrix4(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.applyNormalMatrix(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.transformDirection(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=K9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=r0($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=r0(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=r0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=r0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=r0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=K9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=K9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=K9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=K9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=r0(Q,this.array),$=r0($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=r0(Q,this.array),$=r0($,this.array),Z=r0(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=r0(Q,this.array),$=r0($,this.array),Z=r0(Z,this.array),W=r0(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){B7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new FJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new r9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){B7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var KW=new I,UW=new XJ,GW=new XJ,_X=new I,qW=new f0,U6=new I,gQ=new iJ,EW=new f0,pQ=new b9;class s6 extends OJ{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new f0,this.bindMatrixInverse=new f0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new Q9;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,U6),this.boundingBox.expandByPoint(U6)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new iJ;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,U6),this.boundingSphere.expandByPoint(U6)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(gQ.copy(this.boundingSphere),gQ.applyMatrix4(Z),J.ray.intersectsSphere(gQ)===!1)return;if(EW.copy(Z).invert(),pQ.copy(J.ray).applyMatrix4(EW),this.boundingBox!==null){if(pQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,pQ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new XJ,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else L0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;UW.fromBufferAttribute(Z.attributes.skinIndex,J),GW.fromBufferAttribute(Z.attributes.skinWeight,J),KW.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let H=GW.getComponent(W);if(H!==0){let Y=UW.getComponent(W);qW.multiplyMatrices($.bones[Y].matrixWorld,$.boneInverses[Y]),Q.addScaledVector(_X.copy(KW).applyMatrix4(qW),H)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class v7 extends UJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class f7 extends NJ{constructor(J=null,Q=1,$=1,Z,W,H,Y,X,K=1003,U=1003,G,q){super(null,H,Y,X,K,U,Z,W,G,q);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var NW=new f0,PX=new f0;class h7{constructor(J=[],Q=[]){this.uuid=U9(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){L0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new f0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new f0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,H=J.length;W<H;W++){let Y=J[W]?J[W].matrixWorld:PX;NW.multiplyMatrices(Y,Q[W]),NW.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new h7(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new f7(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],H=Q[W];if(H===void 0)L0("Skeleton: No bone found with UUID:",W),H=new v7;this.bones.push(H),this.boneInverses.push(new f0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let H=Q[Z];J.bones.push(H.uuid);let Y=$[Z];J.boneInverses.push(Y.toArray())}return J}}class F8 extends FJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var m8=new f0,FW=new f0,G6=[],OW=new Q9,IX=new f0,M7=new OJ,L7=new iJ;class i6 extends OJ{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new F8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,IX)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new Q9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,m8),OW.copy(J.boundingBox).applyMatrix4(m8),this.boundingBox.union(OW)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new iJ;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,m8),L7.copy(J.boundingSphere).applyMatrix4(m8),this.boundingSphere.union(L7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,H=J*W+1;for(let Y=0;Y<$.length;Y++)$[Y]=Z[H+Y]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(M7.geometry=this.geometry,M7.material=this.material,M7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(L7.copy(this.boundingSphere),L7.applyMatrix4($),J.ray.intersectsSphere(L7)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,m8),FW.multiplyMatrices($,m8),M7.matrixWorld=FW,M7.raycast(J,G6);for(let H=0,Y=G6.length;H<Y;H++){let X=G6[H];X.instanceId=W,X.object=this,Q.push(X)}G6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new F8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new f7(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,H=0;for(let K=0;K<$.length;K++)H+=$[K];let Y=this.geometry.morphTargetsRelative?1:1-H,X=Z*J;W[X]=Y,W.set($,X+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var lQ=new I,AX=new I,TX=new h0;class X9{constructor(J=new I(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=lQ.subVectors($,Q).cross(AX.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(lQ),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||TX.getNormalMatrix(J),Z=this.coplanarPoint(lQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var E8=new iJ,SX=new P0(0.5,0.5),q6=new I;class b7{constructor(J=new X9,Q=new X9,$=new X9,Z=new X9,W=new X9,H=new X9){this.planes=[J,Q,$,Z,W,H]}set(J,Q,$,Z,W,H){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(W),Y[5].copy(H),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,H=W[0],Y=W[1],X=W[2],K=W[3],U=W[4],G=W[5],q=W[6],E=W[7],N=W[8],k=W[9],M=W[10],F=W[11],O=W[12],w=W[13],D=W[14],C=W[15];if(Z[0].setComponents(K-H,E-U,F-N,C-O).normalize(),Z[1].setComponents(K+H,E+U,F+N,C+O).normalize(),Z[2].setComponents(K+Y,E+G,F+k,C+w).normalize(),Z[3].setComponents(K-Y,E-G,F-k,C-w).normalize(),$)Z[4].setComponents(X,q,M,D).normalize(),Z[5].setComponents(K-X,E-q,F-M,C-D).normalize();else if(Z[4].setComponents(K-X,E-q,F-M,C-D).normalize(),Q===2000)Z[5].setComponents(K+X,E+q,F+M,C+D).normalize();else if(Q===2001)Z[5].setComponents(X,q,M,D).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();E8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();E8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(E8)}intersectsSprite(J){E8.center.set(0,0,0);let Q=SX.distanceTo(J.center);return E8.radius=0.7071067811865476+Q,E8.applyMatrix4(J.matrixWorld),this.intersectsSphere(E8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(q6.x=Z.normal.x>0?J.max.x:J.min.x,q6.y=Z.normal.y>0?J.max.y:J.min.y,q6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(q6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class t9 extends oJ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new w0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var D6=new I,V6=new I,RW=new f0,D7=new b9,E6=new iJ,mQ=new I,kW=new I;class H7 extends UJ{constructor(J=new VJ,Q=new t9){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)D6.fromBufferAttribute(Q,Z-1),V6.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=D6.distanceTo(V6);J.setAttribute("lineDistance",new LJ($,1))}else L0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(E6.copy($.boundingSphere),E6.applyMatrix4(Z),E6.radius+=W,J.ray.intersectsSphere(E6)===!1)return;RW.copy(Z).invert(),D7.copy(J.ray).applyMatrix4(RW);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=this.isLineSegments?2:1,U=$.index,q=$.attributes.position;if(U!==null){let E=Math.max(0,H.start),N=Math.min(U.count,H.start+H.count);for(let k=E,M=N-1;k<M;k+=K){let F=U.getX(k),O=U.getX(k+1),w=N6(this,J,D7,X,F,O,k);if(w)Q.push(w)}if(this.isLineLoop){let k=U.getX(N-1),M=U.getX(E),F=N6(this,J,D7,X,k,M,N-1);if(F)Q.push(F)}}else{let E=Math.max(0,H.start),N=Math.min(q.count,H.start+H.count);for(let k=E,M=N-1;k<M;k+=K){let F=N6(this,J,D7,X,k,k+1,k);if(F)Q.push(F)}if(this.isLineLoop){let k=N6(this,J,D7,X,N-1,E,N-1);if(k)Q.push(k)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function N6(J,Q,$,Z,W,H,Y){let X=J.geometry.attributes.position;if(D6.fromBufferAttribute(X,W),V6.fromBufferAttribute(X,H),$.distanceSqToSegment(D6,V6,mQ,kW)>Z)return;mQ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(mQ);if(U<Q.near||U>Q.far)return;return{distance:U,point:kW.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var MW=new I,LW=new I;class B8 extends H7{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)MW.fromBufferAttribute(Q,Z),LW.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+MW.distanceTo(LW);J.setAttribute("lineDistance",new LJ($,1))}else L0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class o6 extends H7{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class x7 extends oJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new w0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var DW=new f0,nQ=new b9,F6=new iJ,O6=new I;class a6 extends UJ{constructor(J=new VJ,Q=new x7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(F6.copy($.boundingSphere),F6.applyMatrix4(Z),F6.radius+=W,J.ray.intersectsSphere(F6)===!1)return;DW.copy(Z).invert(),nQ.copy(J.ray).applyMatrix4(DW);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=$.index,G=$.attributes.position;if(K!==null){let q=Math.max(0,H.start),E=Math.min(K.count,H.start+H.count);for(let N=q,k=E;N<k;N++){let M=K.getX(N);O6.fromBufferAttribute(G,M),VW(O6,M,X,Z,J,Q,this)}}else{let q=Math.max(0,H.start),E=Math.min(G.count,H.start+H.count);for(let N=q,k=E;N<k;N++)O6.fromBufferAttribute(G,N),VW(O6,N,X,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function VW(J,Q,$,Z,W,H,Y){let X=nQ.distanceSqToPoint(J);if(X<$){let K=new I;nQ.closestPointToPoint(J,K),K.applyMatrix4(Z);let U=W.ray.origin.distanceTo(K);if(U<W.near||U>W.far)return;H.push({distance:U,distanceToRay:Math.sqrt(X),point:K,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class r6 extends NJ{constructor(J,Q,$,Z,W=1006,H=1006,Y,X,K){super(J,Q,$,Z,W,H,Y,X,K);this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let U=this;function G(){U.needsUpdate=!0,U._requestVideoFrameCallbackId=J.requestVideoFrameCallback(G)}if("requestVideoFrameCallback"in J)this._requestVideoFrameCallbackId=J.requestVideoFrameCallback(G)}clone(){return new this.constructor(this.image).copy(this)}update(){let J=this.image;if("requestVideoFrameCallback"in J===!1&&J.readyState>=J.HAVE_CURRENT_DATA)this.needsUpdate=!0}dispose(){if(this._requestVideoFrameCallbackId!==0)this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0;super.dispose()}}class t6 extends NJ{constructor(J,Q,$,Z,W,H,Y,X,K){super(J,Q,$,Z,W,H,Y,X,K);this.isCanvasTexture=!0,this.needsUpdate=!0}}class z8 extends NJ{constructor(J,Q,$=1014,Z,W,H,Y=1003,X=1003,K,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let q={width:J,height:Q,depth:G};super(q,Z,W,H,Y,X,U,$,K);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new S7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class e$ extends z8{constructor(J,Q=1014,$=301,Z,W,H=1003,Y=1003,X,K=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,Z,W,H,Y,X,K);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class e6 extends NJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class Y7 extends VJ{constructor(J=1,Q=1,$=1,Z=32,W=1,H=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:W,openEnded:H,thetaStart:Y,thetaLength:X};let K=this;Z=Math.floor(Z),W=Math.floor(W);let U=[],G=[],q=[],E=[],N=0,k=[],M=$/2,F=0;if(O(),H===!1){if(J>0)w(!0);if(Q>0)w(!1)}this.setIndex(U),this.setAttribute("position",new LJ(G,3)),this.setAttribute("normal",new LJ(q,3)),this.setAttribute("uv",new LJ(E,2));function O(){let D=new I,C=new I,S=0,_=(Q-J)/$;for(let A=0;A<=W;A++){let j=[],z=A/W,B=z*(Q-J)+J;for(let P=0;P<=Z;P++){let x=P/Z,u=x*X+Y,p=Math.sin(u),o=Math.cos(u);C.x=B*p,C.y=-z*$+M,C.z=B*o,G.push(C.x,C.y,C.z),D.set(p,_,o).normalize(),q.push(D.x,D.y,D.z),E.push(x,1-z),j.push(N++)}k.push(j)}for(let A=0;A<Z;A++)for(let j=0;j<W;j++){let z=k[j][A],B=k[j+1][A],P=k[j+1][A+1],x=k[j][A+1];if(J>0||j!==0)U.push(z,B,x),S+=3;if(Q>0||j!==W-1)U.push(B,P,x),S+=3}K.addGroup(F,S,0),F+=S}function w(D){let C=N,S=new P0,_=new I,A=0,j=D===!0?J:Q,z=D===!0?1:-1;for(let P=1;P<=Z;P++)G.push(0,M*z,0),q.push(0,z,0),E.push(0.5,0.5),N++;let B=N;for(let P=0;P<=Z;P++){let u=P/Z*X+Y,p=Math.cos(u),o=Math.sin(u);_.x=j*o,_.y=M*z,_.z=j*p,G.push(_.x,_.y,_.z),q.push(0,z,0),S.x=p*0.5+0.5,S.y=o*0.5*z+0.5,E.push(S.x,S.y),N++}for(let P=0;P<Z;P++){let x=C+P,u=B+P;if(D===!0)U.push(u,u+1,x);else U.push(u+1,u,x);A+=3}K.addGroup(F,A,D===!0?1:2),F+=A}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Y7(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}var R6=new I,k6=new I,uQ=new I,M6=new nJ;class JQ extends VJ{constructor(J=null,Q=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:J,thresholdAngle:Q},J!==null){let Z=Math.pow(10,4),W=Math.cos(d8*Q),H=J.getIndex(),Y=J.getAttribute("position"),X=H?H.count:Y.count,K=[0,0,0],U=["a","b","c"],G=[,,,],q={},E=[];for(let N=0;N<X;N+=3){if(H)K[0]=H.getX(N),K[1]=H.getX(N+1),K[2]=H.getX(N+2);else K[0]=N,K[1]=N+1,K[2]=N+2;let{a:k,b:M,c:F}=M6;if(k.fromBufferAttribute(Y,K[0]),M.fromBufferAttribute(Y,K[1]),F.fromBufferAttribute(Y,K[2]),M6.getNormal(uQ),G[0]=`${Math.round(k.x*Z)},${Math.round(k.y*Z)},${Math.round(k.z*Z)}`,G[1]=`${Math.round(M.x*Z)},${Math.round(M.y*Z)},${Math.round(M.z*Z)}`,G[2]=`${Math.round(F.x*Z)},${Math.round(F.y*Z)},${Math.round(F.z*Z)}`,G[0]===G[1]||G[1]===G[2]||G[2]===G[0])continue;for(let O=0;O<3;O++){let w=(O+1)%3,D=G[O],C=G[w],S=M6[U[O]],_=M6[U[w]],A=`${D}_${C}`,j=`${C}_${D}`;if(j in q&&q[j]){if(uQ.dot(q[j].normal)<=W)E.push(S.x,S.y,S.z),E.push(_.x,_.y,_.z);q[j]=null}else if(!(A in q))q[A]={index0:K[O],index1:K[w],normal:uQ.clone()}}}for(let N in q)if(q[N]){let{index0:k,index1:M}=q[N];R6.fromBufferAttribute(Y,k),k6.fromBufferAttribute(Y,M),E.push(R6.x,R6.y,R6.z),E.push(k6.x,k6.y,k6.z)}this.setAttribute("position",new LJ(E,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}class x9 extends VJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,H=Q/2,Y=Math.floor($),X=Math.floor(Z),K=Y+1,U=X+1,G=J/Y,q=Q/X,E=[],N=[],k=[],M=[];for(let F=0;F<U;F++){let O=F*q-H;for(let w=0;w<K;w++){let D=w*G-W;N.push(D,-O,0),k.push(0,0,1),M.push(w/Y),M.push(1-F/X)}}for(let F=0;F<X;F++)for(let O=0;O<Y;O++){let w=O+K*F,D=O+K*(F+1),C=O+1+K*(F+1),S=O+1+K*F;E.push(w,D,S),E.push(D,C,S)}this.setIndex(E),this.setAttribute("position",new LJ(N,3)),this.setAttribute("normal",new LJ(k,3)),this.setAttribute("uv",new LJ(M,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x9(J.width,J.height,J.widthSegments,J.heightSegments)}}class JZ extends $9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class e9 extends oJ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new w0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new w0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new P0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new G9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class aJ extends e9{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new P0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return l0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new w0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new w0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new w0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class QZ extends oJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class $Z extends oJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function L6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function jX(J){function Q(W,H){return J[W]-J[H]}let $=J.length,Z=Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function BW(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let H=0,Y=0;Y!==Z;++H){let X=$[H]*Q;for(let K=0;K!==Q;++K)W[Y++]=J[X+K]}return W}function LH(J,Q,$,Z){let W=1,H=J[0];while(H!==void 0&&H[Z]===void 0)H=J[W++];if(H===void 0)return;let Y=H[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=H[Z],Y!==void 0)Q.push(H.time),$.push(...Y);H=J[W++]}while(H!==void 0);else if(Y.toArray!==void 0)do{if(Y=H[Z],Y!==void 0)Q.push(H.time),Y.toArray($,$.length);H=J[W++]}while(H!==void 0);else do{if(Y=H[Z],Y!==void 0)Q.push(H.time),$.push(Y);H=J[W++]}while(H!==void 0)}class J8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let H;Q:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(W=Z,Z=Q[++$],J<Z)break J}H=Q.length;break Q}if(!(J>=W)){let Y=Q[1];if(J<Y)$=2,W=Y;for(let X=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(Z=W,W=Q[--$-1],J>=W)break J}H=$,$=0;break Q}break $}while($<H){let Y=$+H>>>1;if(J<Q[Y])H=Y;else $=Y+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let H=0;H!==Z;++H)Q[H]=$[W+H];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class ZZ extends J8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,H=J+1,Y=Z[W],X=Z[H];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*Q-$;break;case 2402:W=Z.length-2,Y=Q+Z[W]-Z[W+1];break;default:W=J,Y=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,X=2*$-Q;break;case 2402:H=1,X=$+Z[1]-Z[0];break;default:H=J-1,X=Q}let K=($-Q)*0.5,U=this.valueSize;this._weightPrev=K/(Q-Y),this._weightNext=K/(X-$),this._offsetPrev=W*U,this._offsetNext=H*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=this._offsetPrev,G=this._offsetNext,q=this._weightPrev,E=this._weightNext,N=($-Q)/(Z-Q),k=N*N,M=k*N,F=-q*M+2*q*k-q*N,O=(1+q)*M+(-1.5-2*q)*k+(-0.5+q)*N+1,w=(-1-E)*M+(1.5+E)*k+0.5*N,D=E*M-E*k;for(let C=0;C!==Y;++C)W[C]=F*H[U+C]+O*H[K+C]+w*H[X+C]+D*H[G+C];return W}}class WZ extends J8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=($-Q)/(Z-Q),G=1-U;for(let q=0;q!==Y;++q)W[q]=H[K+q]*G+H[X+q]*U;return W}}class HZ extends J8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class rJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=L6(Q,this.TimeBufferType),this.values=L6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:L6(J.times,Array),values:L6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new HZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new WZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new ZZ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return L0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,H=Z-1;while(W!==Z&&$[W]<J)++W;while(H!==-1&&$[H]>Q)--H;if(++H,W!==0||H!==Z){if(W>=H)H=Math.max(H,1),W=H-1;let Y=this.getValueSize();this.times=$.slice(W,H),this.values=this.values.slice(W*Y,H*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)I0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)I0("KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let Y=0;Y!==W;Y++){let X=$[Y];if(typeof X==="number"&&isNaN(X)){I0("KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(H!==null&&H>X){I0("KeyframeTrack: Out of order keys.",this,Y,X,H),J=!1;break}H=X}if(Z!==void 0){if(cY(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let K=Z[Y];if(isNaN(K)){I0("KeyframeTrack: Value is not a valid number.",this,Y,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,H=1;for(let Y=1;Y<W;++Y){let X=!1,K=J[Y],U=J[Y+1];if(K!==U&&(Y!==1||K!==J[0]))if(!Z){let G=Y*$,q=G-$,E=G+$;for(let N=0;N!==$;++N){let k=Q[G+N];if(k!==Q[q+N]||k!==Q[E+N]){X=!0;break}}}else X=!0;if(X){if(Y!==H){J[H]=J[Y];let G=Y*$,q=H*$;for(let E=0;E!==$;++E)Q[q+E]=Q[G+E]}++H}}if(W>0){J[H]=J[W];for(let Y=W*$,X=H*$,K=0;K!==$;++K)Q[X+K]=Q[Y+K];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}rJ.prototype.ValueTypeName="";rJ.prototype.TimeBufferType=Float32Array;rJ.prototype.ValueBufferType=Float32Array;rJ.prototype.DefaultInterpolation=2301;class Q8 extends rJ{constructor(J,Q,$){super(J,Q,$)}}Q8.prototype.ValueTypeName="bool";Q8.prototype.ValueBufferType=Array;Q8.prototype.DefaultInterpolation=2300;Q8.prototype.InterpolantFactoryMethodLinear=void 0;Q8.prototype.InterpolantFactoryMethodSmooth=void 0;class QQ extends rJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}QQ.prototype.ValueTypeName="color";class T9 extends rJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}T9.prototype.ValueTypeName="number";class YZ extends J8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=($-Q)/(Z-Q),K=J*Y;for(let U=K+Y;K!==U;K+=4)pJ.slerpFlat(W,0,H,K-Y,H,K,X);return W}}class g9 extends rJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new YZ(this.times,this.values,this.getValueSize(),J)}}g9.prototype.ValueTypeName="quaternion";g9.prototype.InterpolantFactoryMethodSmooth=void 0;class $8 extends rJ{constructor(J,Q,$){super(J,Q,$)}}$8.prototype.ValueTypeName="string";$8.prototype.ValueBufferType=Array;$8.prototype.DefaultInterpolation=2300;$8.prototype.InterpolantFactoryMethodLinear=void 0;$8.prototype.InterpolantFactoryMethodSmooth=void 0;class S9 extends rJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}S9.prototype.ValueTypeName="vector";class $Q{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=U9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let H=0,Y=$.length;H!==Y;++H)Q.push(vX($[H]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W.userData=JSON.parse(J.userData||"{}"),W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let W=0,H=$.length;W!==H;++W)Q.push(rJ.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,H=[];for(let Y=0;Y<W;Y++){let X=[],K=[];X.push((Y+W-1)%W,Y,(Y+1)%W),K.push(0,1,0);let U=jX(X);if(X=BW(X,1,U),K=BW(K,1,U),!Z&&X[0]===0)X.push(W),K.push(K[0]);H.push(new T9(".morphTargetInfluences["+Q[Y].name+"]",X,K).scale(1/$))}return new this(J,-1,H)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=K.name.match(W);if(U&&U.length>1){let G=U[1],q=Z[G];if(!q)Z[G]=q=[];q.push(K)}}let H=[];for(let Y in Z)H.push(this.CreateFromMorphTargetSequence(Y,Z[Y],Q,$));return H}static parseAnimation(J,Q){if(L0("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!J)return I0("AnimationClip: No animation in JSONLoader data."),null;let $=function(G,q,E,N,k){if(E.length!==0){let M=[],F=[];if(LH(E,M,F,N),M.length!==0)k.push(new G(q,M,F))}},Z=[],W=J.name||"default",H=J.fps||30,Y=J.blendMode,X=J.length||-1,K=J.hierarchy||[];for(let G=0;G<K.length;G++){let q=K[G].keys;if(!q||q.length===0)continue;if(q[0].morphTargets){let E={},N;for(N=0;N<q.length;N++)if(q[N].morphTargets)for(let k=0;k<q[N].morphTargets.length;k++)E[q[N].morphTargets[k]]=-1;for(let k in E){let M=[],F=[];for(let O=0;O!==q[N].morphTargets.length;++O){let w=q[N];M.push(w.time),F.push(w.morphTarget===k?1:0)}Z.push(new T9(".morphTargetInfluence["+k+"]",M,F))}X=E.length*H}else{let E=".bones["+Q[G].name+"]";$(S9,E+".position",q,"pos",Z),$(g9,E+".quaternion",q,"rot",Z),$(S9,E+".scale",q,"scl",Z)}}if(Z.length===0)return null;return new this(W,X,Z,Y)}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function yX(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return T9;case"vector":case"vector2":case"vector3":case"vector4":return S9;case"color":return QQ;case"quaternion":return g9;case"bool":case"boolean":return Q8;case"string":return $8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function vX(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=yX(J.type);if(J.times===void 0){let $=[],Z=[];LH(J.keys,$,Z,"value"),J.times=$,J.values=Z}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var O9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class XZ{constructor(J,Q,$){let Z=this,W=!1,H=0,Y=0,X=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(Y++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,H,Y)}W=!0},this.itemEnd=function(U){if(H++,Z.onProgress!==void 0)Z.onProgress(U,H,Y);if(H===Y){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return K.push(U,G),this},this.removeHandler=function(U){let G=K.indexOf(U);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(U){for(let G=0,q=K.length;G<q;G+=2){let E=K[G],N=K[G+1];if(E.global)E.lastIndex=0;if(E.test(U))return N}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var DH=new XZ;class F9{constructor(J){this.manager=J!==void 0?J:DH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}F9.DEFAULT_MATERIAL_NAME="__DEFAULT";var I9={};class VH extends Error{constructor(J,Q){super(J);this.response=Q}}class Z8 extends F9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=O9.get(`file:${J}`);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(I9[J]!==void 0){I9[J].push({onLoad:Q,onProgress:$,onError:Z});return}I9[J]=[],I9[J].push({onLoad:Q,onProgress:$,onError:Z});let H=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(H).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)L0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||K.body===void 0||K.body.getReader===void 0)return K;let U=I9[J],G=K.body.getReader(),q=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),E=q?parseInt(q):0,N=E!==0,k=0,M=new ReadableStream({start(F){O();function O(){G.read().then(({done:w,value:D})=>{if(w)F.close();else{k+=D.byteLength;let C=new ProgressEvent("progress",{lengthComputable:N,loaded:k,total:E});for(let S=0,_=U.length;S<_;S++){let A=U[S];if(A.onProgress)A.onProgress(C)}F.enqueue(D),O()}},(w)=>{F.error(w)})}}});return new Response(M)}else throw new VH(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(X){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return K.json();default:if(Y==="")return K.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(Y),q=G&&G[1]?G[1].toLowerCase():void 0,E=new TextDecoder(q);return K.arrayBuffer().then((N)=>E.decode(N))}}}).then((K)=>{O9.add(`file:${J}`,K);let U=I9[J];delete I9[J];for(let G=0,q=U.length;G<q;G++){let E=U[G];if(E.onLoad)E.onLoad(K)}}).catch((K)=>{let U=I9[J];if(U===void 0)throw this.manager.itemError(J),K;delete I9[J];for(let G=0,q=U.length;G<q;G++){let E=U[G];if(E.onError)E.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var u8=new WeakMap;class KZ extends F9{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=O9.get(`image:${J}`);if(H!==void 0){if(H.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0);else{let G=u8.get(H);if(G===void 0)G=[],u8.set(H,G);G.push({onLoad:Q,onError:Z})}return H}let Y=n8("img");function X(){if(U(),Q)Q(this);let G=u8.get(this)||[];for(let q=0;q<G.length;q++){let E=G[q];if(E.onLoad)E.onLoad(this)}u8.delete(this),W.manager.itemEnd(J)}function K(G){if(U(),Z)Z(G);O9.remove(`image:${J}`);let q=u8.get(this)||[];for(let E=0;E<q.length;E++){let N=q[E];if(N.onError)N.onError(G)}u8.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return O9.add(`image:${J}`,Y),W.manager.itemStart(J),Y.src=J,Y}}class ZQ extends F9{constructor(J){super(J)}load(J,Q,$,Z){let W=new NJ,H=new KZ(this.manager);return H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function(Y){if(W.image=Y,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class X7 extends UJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new w0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var dQ=new f0,zW=new I,CW=new I;class WQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new P0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new f0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new b7,this._frameExtents=new P0(1,1),this._viewportCount=1,this._viewports=[new XJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(zW.setFromMatrixPosition(J.matrixWorld),Q.position.copy(zW),CW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(CW),Q.updateMatrixWorld(),dQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dQ,Q.coordinateSystem,Q.reversedDepth),Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(dQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class BH extends WQ{constructor(){super(new BJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=N8*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class K7 extends X7{constructor(J,Q,$=0,Z=Math.PI/3,W=0,H=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(UJ.DEFAULT_UP),this.updateMatrix(),this.target=new UJ,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=H,this.map=null,this.shadow=new BH}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class zH extends WQ{constructor(){super(new BJ(90,1,0.5,500));this.isPointLightShadow=!0}}class HQ extends X7{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new zH}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class C8 extends u6{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,H=$+J,Y=Z+Q,X=Z-Q;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,H=W+K*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(W,H,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class CH extends WQ{constructor(){super(new C8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class U7 extends X7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(UJ.DEFAULT_UP),this.updateMatrix(),this.target=new UJ,this.shadow=new CH}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class YQ extends X7{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}class W8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var cQ=new WeakMap;class XQ extends F9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")L0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")L0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=O9.get(`image-bitmap:${J}`);if(H!==void 0){if(W.manager.itemStart(J),H.then){H.then((K)=>{if(cQ.has(H)===!0){if(Z)Z(cQ.get(H));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(K);return W.manager.itemEnd(J),K}});return}return setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0),H}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(K){if(O9.add(`image-bitmap:${J}`,K),Q)Q(K);return W.manager.itemEnd(J),K}).catch(function(K){if(Z)Z(K);cQ.set(X,K),O9.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});O9.add(`image-bitmap:${J}`,X),W.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class UZ extends BJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var GZ="\\[\\]\\.:\\/",fX=new RegExp("["+GZ+"]","g"),qZ="[^"+GZ+"]",hX="[^"+GZ.replace("\\.","")+"]",bX=/((?:WC+[\/:])*)/.source.replace("WC",qZ),xX=/(WCOD+)?/.source.replace("WCOD",hX),gX=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qZ),pX=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qZ),lX=new RegExp("^"+bX+xX+gX+pX+"$"),mX=["material","materials","bones","map"];class wH{constructor(J,Q,$){let Z=$||s0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class s0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||s0.parseTrackName(Q),this.node=s0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new s0(J,Q,$);else return new s0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(fX,"")}static parseTrackName(J){let Q=lX.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(mX.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let H=0;H<W.length;H++){let Y=W[H];if(Y.name===Q||Y.uuid===Q)return Y;let X=$(Y.children);if(X)return X}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=s0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){L0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let K=Q.objectIndex;switch($){case"materials":if(!J.material){I0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){I0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){I0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===K){K=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){I0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){I0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){I0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(K!==void 0){if(J[K]===void 0){I0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let H=J[Z];if(H===void 0){let K=Q.nodeName;I0("PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){I0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){I0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}X=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=W}else if(H.fromArray!==void 0&&H.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))X=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}s0.Composite=wH;s0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};s0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};s0.prototype.GetterByBindingType=[s0.prototype._getValue_direct,s0.prototype._getValue_array,s0.prototype._getValue_arrayElement,s0.prototype._getValue_toArray];s0.prototype.SetterByBindingTypeAndVersioning=[[s0.prototype._setValue_direct,s0.prototype._setValue_direct_setNeedsUpdate,s0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[s0.prototype._setValue_array,s0.prototype._setValue_array_setNeedsUpdate,s0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[s0.prototype._setValue_arrayElement,s0.prototype._setValue_arrayElement_setNeedsUpdate,s0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[s0.prototype._setValue_fromArray,s0.prototype._setValue_fromArray_setNeedsUpdate,s0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $E=new Float32Array(1);var wW=new f0;class KQ{constructor(J,Q,$=0,Z=1/0){this.ray=new b9(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new j7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,(Q.near+Q.far)/(Q.near-Q.far)).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else I0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return wW.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wW),this}intersectObject(J,Q=!0,$=[]){return sQ(J,this,$,Q),$.sort(_W),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,W=J.length;Z<W;Z++)sQ(J[Z],this,$,Q);return $.sort(_W),$}}function _W(J,Q){return J.distance-Q.distance}function sQ(J,Q,$,Z){let W=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)W=!1}if(W===!0&&Z===!0){let H=J.children;for(let Y=0,X=H.length;Y<X;Y++)sQ(H[Y],Q,$,!0)}}class g7{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=l0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(l0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class UQ extends B8{constructor(J=10,Q=10,$=4473924,Z=8947848){$=new w0($),Z=new w0(Z);let W=Q/2,H=J/Q,Y=J/2,X=[],K=[];for(let q=0,E=0,N=-Y;q<=Q;q++,N+=H){X.push(-Y,0,N,Y,0,N),X.push(N,0,-Y,N,0,Y);let k=q===W?$:Z;k.toArray(K,E),E+=3,k.toArray(K,E),E+=3,k.toArray(K,E),E+=3,k.toArray(K,E),E+=3}let U=new VJ;U.setAttribute("position",new LJ(X,3)),U.setAttribute("color",new LJ(K,3));let G=new t9({vertexColors:!0,toneMapped:!1});super(U,G);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class GQ extends h9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(J===void 0){L0("Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function EZ(J,Q,$,Z){let W=uX(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function uX(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));if(typeof window<"u")if(window.__THREE__)L0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="182";function iH(){let J=null,Q=!1,$=null,Z=null;function W(H,Y){$(H,Y),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(H){$=H},setContext:function(H){J=H}}}function dX(J){let Q=new WeakMap;function $(X,K){let{array:U,usage:G}=X,q=U.byteLength,E=J.createBuffer();J.bindBuffer(K,E),J.bufferData(K,U,G),X.onUploadCallback();let N;if(U instanceof Float32Array)N=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)N=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)N=J.HALF_FLOAT;else N=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)N=J.SHORT;else if(U instanceof Uint32Array)N=J.UNSIGNED_INT;else if(U instanceof Int32Array)N=J.INT;else if(U instanceof Int8Array)N=J.BYTE;else if(U instanceof Uint8Array)N=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)N=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:E,type:N,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:q}}function Z(X,K,U){let{array:G,updateRanges:q}=K;if(J.bindBuffer(U,X),q.length===0)J.bufferSubData(U,0,G);else{q.sort((N,k)=>N.start-k.start);let E=0;for(let N=1;N<q.length;N++){let k=q[E],M=q[N];if(M.start<=k.start+k.count+1)k.count=Math.max(k.count,M.start+M.count-k.start);else++E,q[E]=M}q.length=E+1;for(let N=0,k=q.length;N<k;N++){let M=q[N];J.bufferSubData(U,M.start*G.BYTES_PER_ELEMENT,G,M.start,M.count)}K.clearUpdateRanges()}K.onUploadCallback()}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function H(X){if(X.isInterleavedBufferAttribute)X=X.data;let K=Q.get(X);if(K)J.deleteBuffer(K.buffer),Q.delete(X)}function Y(X,K){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=Q.get(X);if(!G||G.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,K));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,K),U.version=X.version}}return{get:W,remove:H,update:Y}}var cX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nX=`#ifdef USE_ALPHAHASH
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
#endif`,sX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rX=`#ifdef USE_AOMAP
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
#endif`,tX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eX=`#ifdef USE_BATCHING
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
#endif`,JK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$K=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZK=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WK=`#ifdef USE_IRIDESCENCE
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
#endif`,HK=`#ifdef USE_BUMPMAP
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
#endif`,YK=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UK=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GK=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NK=`#if defined( USE_COLOR_ALPHA )
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
#endif`,FK=`#define PI 3.141592653589793
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
} // validated`,OK=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RK=`vec3 transformedNormal = objectNormal;
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
#endif`,kK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MK=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VK="gl_FragColor = linearToOutputTexel( gl_FragColor );",BK=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zK=`#ifdef USE_ENVMAP
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
#endif`,CK=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wK=`#ifdef USE_ENVMAP
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
#endif`,_K=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PK=`#ifdef USE_ENVMAP
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
#endif`,IK=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AK=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TK=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SK=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jK=`#ifdef USE_GRADIENTMAP
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
}`,yK=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vK=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hK=`uniform bool receiveShadow;
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
#endif`,bK=`#ifdef USE_ENVMAP
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
#endif`,xK=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pK=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mK=`PhysicalMaterial material;
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
#endif`,uK=`uniform sampler2D dfgLUT;
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
}`,dK=`
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
#endif`,cK=`#if defined( RE_IndirectDiffuse )
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
#endif`,nK=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sK=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iK=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oK=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aK=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rK=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tK=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eK=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JU=`#if defined( USE_POINTS_UV )
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
#endif`,QU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$U=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WU=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YU=`#ifdef USE_MORPHTARGETS
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
#endif`,XU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UU=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NU=`#ifdef USE_NORMALMAP
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
#endif`,FU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_U=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AU=`float getShadowMask() {
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
}`,TU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SU=`#ifdef USE_SKINNING
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
#endif`,jU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yU=`#ifdef USE_SKINNING
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
#endif`,vU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xU=`#ifdef USE_TRANSMISSION
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
#endif`,gU=`#ifdef USE_TRANSMISSION
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
#endif`,pU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cU=`uniform sampler2D t2D;
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
}`,nU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aU=`#include <common>
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
}`,rU=`#if DEPTH_PACKING == 3200
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
}`,tU=`#define DISTANCE
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
}`,eU=`#define DISTANCE
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
}`,JG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$G=`uniform float scale;
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
}`,ZG=`uniform vec3 diffuse;
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
}`,WG=`#include <common>
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
}`,HG=`uniform vec3 diffuse;
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
}`,YG=`#define LAMBERT
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
}`,XG=`#define LAMBERT
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
}`,KG=`#define MATCAP
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
}`,UG=`#define MATCAP
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
}`,GG=`#define NORMAL
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
}`,qG=`#define NORMAL
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
}`,EG=`#define PHONG
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
}`,NG=`#define PHONG
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
}`,FG=`#define STANDARD
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
}`,OG=`#define STANDARD
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
}`,RG=`#define TOON
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
}`,kG=`#define TOON
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
}`,MG=`uniform float size;
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
}`,LG=`uniform vec3 diffuse;
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
}`,DG=`#include <common>
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
}`,VG=`uniform vec3 color;
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
}`,BG=`uniform float rotation;
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
}`,zG=`uniform vec3 diffuse;
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
}`,b0={alphahash_fragment:cX,alphahash_pars_fragment:nX,alphamap_fragment:sX,alphamap_pars_fragment:iX,alphatest_fragment:oX,alphatest_pars_fragment:aX,aomap_fragment:rX,aomap_pars_fragment:tX,batching_pars_vertex:eX,batching_vertex:JK,begin_vertex:QK,beginnormal_vertex:$K,bsdfs:ZK,iridescence_fragment:WK,bumpmap_pars_fragment:HK,clipping_planes_fragment:YK,clipping_planes_pars_fragment:XK,clipping_planes_pars_vertex:KK,clipping_planes_vertex:UK,color_fragment:GK,color_pars_fragment:qK,color_pars_vertex:EK,color_vertex:NK,common:FK,cube_uv_reflection_fragment:OK,defaultnormal_vertex:RK,displacementmap_pars_vertex:kK,displacementmap_vertex:MK,emissivemap_fragment:LK,emissivemap_pars_fragment:DK,colorspace_fragment:VK,colorspace_pars_fragment:BK,envmap_fragment:zK,envmap_common_pars_fragment:CK,envmap_pars_fragment:wK,envmap_pars_vertex:_K,envmap_physical_pars_fragment:bK,envmap_vertex:PK,fog_vertex:IK,fog_pars_vertex:AK,fog_fragment:TK,fog_pars_fragment:SK,gradientmap_pars_fragment:jK,lightmap_pars_fragment:yK,lights_lambert_fragment:vK,lights_lambert_pars_fragment:fK,lights_pars_begin:hK,lights_toon_fragment:xK,lights_toon_pars_fragment:gK,lights_phong_fragment:pK,lights_phong_pars_fragment:lK,lights_physical_fragment:mK,lights_physical_pars_fragment:uK,lights_fragment_begin:dK,lights_fragment_maps:cK,lights_fragment_end:nK,logdepthbuf_fragment:sK,logdepthbuf_pars_fragment:iK,logdepthbuf_pars_vertex:oK,logdepthbuf_vertex:aK,map_fragment:rK,map_pars_fragment:tK,map_particle_fragment:eK,map_particle_pars_fragment:JU,metalnessmap_fragment:QU,metalnessmap_pars_fragment:$U,morphinstance_vertex:ZU,morphcolor_vertex:WU,morphnormal_vertex:HU,morphtarget_pars_vertex:YU,morphtarget_vertex:XU,normal_fragment_begin:KU,normal_fragment_maps:UU,normal_pars_fragment:GU,normal_pars_vertex:qU,normal_vertex:EU,normalmap_pars_fragment:NU,clearcoat_normal_fragment_begin:FU,clearcoat_normal_fragment_maps:OU,clearcoat_pars_fragment:RU,iridescence_pars_fragment:kU,opaque_fragment:MU,packing:LU,premultiplied_alpha_fragment:DU,project_vertex:VU,dithering_fragment:BU,dithering_pars_fragment:zU,roughnessmap_fragment:CU,roughnessmap_pars_fragment:wU,shadowmap_pars_fragment:_U,shadowmap_pars_vertex:PU,shadowmap_vertex:IU,shadowmask_pars_fragment:AU,skinbase_vertex:TU,skinning_pars_vertex:SU,skinning_vertex:jU,skinnormal_vertex:yU,specularmap_fragment:vU,specularmap_pars_fragment:fU,tonemapping_fragment:hU,tonemapping_pars_fragment:bU,transmission_fragment:xU,transmission_pars_fragment:gU,uv_pars_fragment:pU,uv_pars_vertex:lU,uv_vertex:mU,worldpos_vertex:uU,background_vert:dU,background_frag:cU,backgroundCube_vert:nU,backgroundCube_frag:sU,cube_vert:iU,cube_frag:oU,depth_vert:aU,depth_frag:rU,distance_vert:tU,distance_frag:eU,equirect_vert:JG,equirect_frag:QG,linedashed_vert:$G,linedashed_frag:ZG,meshbasic_vert:WG,meshbasic_frag:HG,meshlambert_vert:YG,meshlambert_frag:XG,meshmatcap_vert:KG,meshmatcap_frag:UG,meshnormal_vert:GG,meshnormal_frag:qG,meshphong_vert:EG,meshphong_frag:NG,meshphysical_vert:FG,meshphysical_frag:OG,meshtoon_vert:RG,meshtoon_frag:kG,points_vert:MG,points_frag:LG,shadow_vert:DG,shadow_frag:VG,sprite_vert:BG,sprite_frag:zG},X0={common:{diffuse:{value:new w0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new h0},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new h0}},envmap:{envMap:{value:null},envMapRotation:{value:new h0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new h0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new h0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new h0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new h0},normalScale:{value:new P0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new h0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new h0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new h0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new h0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new w0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new w0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0},uvTransform:{value:new h0}},sprite:{diffuse:{value:new w0(16777215)},opacity:{value:1},center:{value:new P0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new h0},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0}}},M9={basic:{uniforms:SJ([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.fog]),vertexShader:b0.meshbasic_vert,fragmentShader:b0.meshbasic_frag},lambert:{uniforms:SJ([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,X0.lights,{emissive:{value:new w0(0)}}]),vertexShader:b0.meshlambert_vert,fragmentShader:b0.meshlambert_frag},phong:{uniforms:SJ([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,X0.lights,{emissive:{value:new w0(0)},specular:{value:new w0(1118481)},shininess:{value:30}}]),vertexShader:b0.meshphong_vert,fragmentShader:b0.meshphong_frag},standard:{uniforms:SJ([X0.common,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.roughnessmap,X0.metalnessmap,X0.fog,X0.lights,{emissive:{value:new w0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag},toon:{uniforms:SJ([X0.common,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.gradientmap,X0.fog,X0.lights,{emissive:{value:new w0(0)}}]),vertexShader:b0.meshtoon_vert,fragmentShader:b0.meshtoon_frag},matcap:{uniforms:SJ([X0.common,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,{matcap:{value:null}}]),vertexShader:b0.meshmatcap_vert,fragmentShader:b0.meshmatcap_frag},points:{uniforms:SJ([X0.points,X0.fog]),vertexShader:b0.points_vert,fragmentShader:b0.points_frag},dashed:{uniforms:SJ([X0.common,X0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:b0.linedashed_vert,fragmentShader:b0.linedashed_frag},depth:{uniforms:SJ([X0.common,X0.displacementmap]),vertexShader:b0.depth_vert,fragmentShader:b0.depth_frag},normal:{uniforms:SJ([X0.common,X0.bumpmap,X0.normalmap,X0.displacementmap,{opacity:{value:1}}]),vertexShader:b0.meshnormal_vert,fragmentShader:b0.meshnormal_frag},sprite:{uniforms:SJ([X0.sprite,X0.fog]),vertexShader:b0.sprite_vert,fragmentShader:b0.sprite_frag},background:{uniforms:{uvTransform:{value:new h0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:b0.background_vert,fragmentShader:b0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new h0}},vertexShader:b0.backgroundCube_vert,fragmentShader:b0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:b0.cube_vert,fragmentShader:b0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:b0.equirect_vert,fragmentShader:b0.equirect_frag},distance:{uniforms:SJ([X0.common,X0.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:b0.distance_vert,fragmentShader:b0.distance_frag},shadow:{uniforms:SJ([X0.lights,X0.fog,{color:{value:new w0(0)},opacity:{value:1}}]),vertexShader:b0.shadow_vert,fragmentShader:b0.shadow_frag}};M9.physical={uniforms:SJ([M9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new h0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new h0},clearcoatNormalScale:{value:new P0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new h0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new h0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new h0},sheen:{value:0},sheenColor:{value:new w0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new h0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new h0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new h0},transmissionSamplerSize:{value:new P0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new h0},attenuationDistance:{value:0},attenuationColor:{value:new w0(0)},specularColor:{value:new w0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new h0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new h0},anisotropyVector:{value:new P0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new h0}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag};var qQ={r:0,b:0,g:0},w8=new G9,CG=new f0;function wG(J,Q,$,Z,W,H,Y){let X=new w0(0),K=H===!0?0:1,U,G,q=null,E=0,N=null;function k(D){let C=D.isScene===!0?D.background:null;if(C&&C.isTexture)C=(D.backgroundBlurriness>0?$:Q).get(C);return C}function M(D){let C=!1,S=k(D);if(S===null)O(X,K);else if(S&&S.isColor)O(S,1),C=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")Z.buffers.color.setClear(0,0,0,1,Y);else if(_==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||C)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function F(D,C){let S=k(C);if(S&&(S.isCubeTexture||S.mapping===P7)){if(G===void 0)G=new OJ(new a9(1,1,1),new $9({name:"BackgroundCubeMaterial",uniforms:D8(M9.backgroundCube.uniforms),vertexShader:M9.backgroundCube.vertexShader,fragmentShader:M9.backgroundCube.fragmentShader,side:sJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(_,A,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(w8.copy(C.backgroundRotation),w8.x*=-1,w8.y*=-1,w8.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1)w8.y*=-1,w8.z*=-1;if(G.material.uniforms.envMap.value=S,G.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(CG.makeRotationFromEuler(w8)),G.material.toneMapped=p0.getTransfer(S.colorSpace)!==ZJ,q!==S||E!==S.version||N!==J.toneMapping)G.material.needsUpdate=!0,q=S,E=S.version,N=J.toneMapping;G.layers.enableAll(),D.unshift(G,G.geometry,G.material,0,0,null)}else if(S&&S.isTexture){if(U===void 0)U=new OJ(new x9(2,2),new $9({name:"BackgroundMaterial",uniforms:D8(M9.background.uniforms),vertexShader:M9.background.vertexShader,fragmentShader:M9.background.fragmentShader,side:i9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=S,U.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,U.material.toneMapped=p0.getTransfer(S.colorSpace)!==ZJ,S.matrixAutoUpdate===!0)S.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(S.matrix),q!==S||E!==S.version||N!==J.toneMapping)U.material.needsUpdate=!0,q=S,E=S.version,N=J.toneMapping;U.layers.enableAll(),D.unshift(U,U.geometry,U.material,0,0,null)}}function O(D,C){D.getRGB(qQ,r$(J)),Z.buffers.color.setClear(qQ.r,qQ.g,qQ.b,C,Y)}function w(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(D,C=1){X.set(D),K=C,O(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(D){K=D,O(X,K)},render:M,addToRenderList:F,dispose:w}}function _G(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=E(null),H=W,Y=!1;function X(B,P,x,u,p){let o=!1,d=q(u,x,P);if(H!==d)H=d,U(H.object);if(o=N(B,u,x,p),o)k(B,u,x,p);if(p!==null)Q.update(p,J.ELEMENT_ARRAY_BUFFER);if(o||Y){if(Y=!1,C(B,P,x,u),p!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(p).buffer)}}function K(){return J.createVertexArray()}function U(B){return J.bindVertexArray(B)}function G(B){return J.deleteVertexArray(B)}function q(B,P,x){let u=x.wireframe===!0,p=Z[B.id];if(p===void 0)p={},Z[B.id]=p;let o=p[P.id];if(o===void 0)o={},p[P.id]=o;let d=o[u];if(d===void 0)d=E(K()),o[u]=d;return d}function E(B){let P=[],x=[],u=[];for(let p=0;p<$;p++)P[p]=0,x[p]=0,u[p]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:x,attributeDivisors:u,object:B,attributes:{},index:null}}function N(B,P,x,u){let p=H.attributes,o=P.attributes,d=0,l=x.getAttributes();for(let i in l)if(l[i].location>=0){let W0=p[i],F0=o[i];if(F0===void 0){if(i==="instanceMatrix"&&B.instanceMatrix)F0=B.instanceMatrix;if(i==="instanceColor"&&B.instanceColor)F0=B.instanceColor}if(W0===void 0)return!0;if(W0.attribute!==F0)return!0;if(F0&&W0.data!==F0.data)return!0;d++}if(H.attributesNum!==d)return!0;if(H.index!==u)return!0;return!1}function k(B,P,x,u){let p={},o=P.attributes,d=0,l=x.getAttributes();for(let i in l)if(l[i].location>=0){let W0=o[i];if(W0===void 0){if(i==="instanceMatrix"&&B.instanceMatrix)W0=B.instanceMatrix;if(i==="instanceColor"&&B.instanceColor)W0=B.instanceColor}let F0={};if(F0.attribute=W0,W0&&W0.data)F0.data=W0.data;p[i]=F0,d++}H.attributes=p,H.attributesNum=d,H.index=u}function M(){let B=H.newAttributes;for(let P=0,x=B.length;P<x;P++)B[P]=0}function F(B){O(B,0)}function O(B,P){let{newAttributes:x,enabledAttributes:u,attributeDivisors:p}=H;if(x[B]=1,u[B]===0)J.enableVertexAttribArray(B),u[B]=1;if(p[B]!==P)J.vertexAttribDivisor(B,P),p[B]=P}function w(){let{newAttributes:B,enabledAttributes:P}=H;for(let x=0,u=P.length;x<u;x++)if(P[x]!==B[x])J.disableVertexAttribArray(x),P[x]=0}function D(B,P,x,u,p,o,d){if(d===!0)J.vertexAttribIPointer(B,P,x,p,o);else J.vertexAttribPointer(B,P,x,u,p,o)}function C(B,P,x,u){M();let p=u.attributes,o=x.getAttributes(),d=P.defaultAttributeValues;for(let l in o){let i=o[l];if(i.location>=0){let U0=p[l];if(U0===void 0){if(l==="instanceMatrix"&&B.instanceMatrix)U0=B.instanceMatrix;if(l==="instanceColor"&&B.instanceColor)U0=B.instanceColor}if(U0!==void 0){let{normalized:W0,itemSize:F0}=U0,v0=Q.get(U0);if(v0===void 0)continue;let{buffer:GJ,type:JJ,bytesPerElement:s}=v0,Y0=JJ===J.INT||JJ===J.UNSIGNED_INT||U0.gpuType===Z$;if(U0.isInterleavedBufferAttribute){let $0=U0.data,_0=$0.stride,A0=U0.offset;if($0.isInstancedInterleavedBuffer){for(let j0=0;j0<i.locationSize;j0++)O(i.location+j0,$0.meshPerAttribute);if(B.isInstancedMesh!==!0&&u._maxInstanceCount===void 0)u._maxInstanceCount=$0.meshPerAttribute*$0.count}else for(let j0=0;j0<i.locationSize;j0++)F(i.location+j0);J.bindBuffer(J.ARRAY_BUFFER,GJ);for(let j0=0;j0<i.locationSize;j0++)D(i.location+j0,F0/i.locationSize,JJ,W0,_0*s,(A0+F0/i.locationSize*j0)*s,Y0)}else{if(U0.isInstancedBufferAttribute){for(let $0=0;$0<i.locationSize;$0++)O(i.location+$0,U0.meshPerAttribute);if(B.isInstancedMesh!==!0&&u._maxInstanceCount===void 0)u._maxInstanceCount=U0.meshPerAttribute*U0.count}else for(let $0=0;$0<i.locationSize;$0++)F(i.location+$0);J.bindBuffer(J.ARRAY_BUFFER,GJ);for(let $0=0;$0<i.locationSize;$0++)D(i.location+$0,F0/i.locationSize,JJ,W0,F0*s,F0/i.locationSize*$0*s,Y0)}}else if(d!==void 0){let W0=d[l];if(W0!==void 0)switch(W0.length){case 2:J.vertexAttrib2fv(i.location,W0);break;case 3:J.vertexAttrib3fv(i.location,W0);break;case 4:J.vertexAttrib4fv(i.location,W0);break;default:J.vertexAttrib1fv(i.location,W0)}}}}w()}function S(){j();for(let B in Z){let P=Z[B];for(let x in P){let u=P[x];for(let p in u)G(u[p].object),delete u[p];delete P[x]}delete Z[B]}}function _(B){if(Z[B.id]===void 0)return;let P=Z[B.id];for(let x in P){let u=P[x];for(let p in u)G(u[p].object),delete u[p];delete P[x]}delete Z[B.id]}function A(B){for(let P in Z){let x=Z[P];if(x[B.id]===void 0)continue;let u=x[B.id];for(let p in u)G(u[p].object),delete u[p];delete x[B.id]}}function j(){if(z(),Y=!0,H===W)return;H=W,U(H.object)}function z(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:X,reset:j,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:_,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:F,disableUnusedAttributes:w}}function PG(J,Q,$){let Z;function W(U){Z=U}function H(U,G){J.drawArrays(Z,U,G),$.update(G,Z,1)}function Y(U,G,q){if(q===0)return;J.drawArraysInstanced(Z,U,G,q),$.update(G,Z,q)}function X(U,G,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,q);let N=0;for(let k=0;k<q;k++)N+=G[k];$.update(N,Z,1)}function K(U,G,q,E){if(q===0)return;let N=Q.get("WEBGL_multi_draw");if(N===null)for(let k=0;k<U.length;k++)Y(U[k],G[k],E[k]);else{N.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,E,0,q);let k=0;for(let M=0;M<q;M++)k+=G[M]*E[M];$.update(k,Z,1)}}this.setMode=W,this.render=H,this.renderInstances=Y,this.renderMultiDraw=X,this.renderMultiDrawInstances=K}function IG(J,Q,$,Z){let W;function H(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let A=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(A){if(A!==R9&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(A){let j=A===f9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(A!==N9&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==v9&&!j)return!1;return!0}function K(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=K(U);if(G!==U)L0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let q=$.logarithmicDepthBuffer===!0,E=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),N=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_TEXTURE_SIZE),F=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),w=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),D=J.getParameter(J.MAX_VARYING_VECTORS),C=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),S=J.getParameter(J.MAX_SAMPLES),_=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:q,reversedDepthBuffer:E,maxTextures:N,maxVertexTextures:k,maxTextureSize:M,maxCubemapSize:F,maxAttributes:O,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:C,maxSamples:S,samples:_}}function AG(J){let Q=this,$=null,Z=0,W=!1,H=!1,Y=new X9,X=new h0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(q,E){let N=q.length!==0||E||Z!==0||W;return W=E,Z=q.length,N},this.beginShadows=function(){H=!0,G(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(q,E){$=G(q,E,0)},this.setState=function(q,E,N){let{clippingPlanes:k,clipIntersection:M,clipShadows:F}=q,O=J.get(q);if(!W||k===null||k.length===0||H&&!F)if(H)G(null);else U();else{let w=H?0:Z,D=w*4,C=O.clippingState||null;K.value=C,C=G(k,E,D,N);for(let S=0;S!==D;++S)C[S]=$[S];O.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function U(){if(K.value!==$)K.value=$,K.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(q,E,N,k){let M=q!==null?q.length:0,F=null;if(M!==0){if(F=K.value,k!==!0||F===null){let O=N+M*4,w=E.matrixWorldInverse;if(X.getNormalMatrix(w),F===null||F.length<O)F=new Float32Array(O);for(let D=0,C=N;D!==M;++D,C+=4)Y.copy(q[D]).applyMatrix4(w,X),Y.normal.toArray(F,C),F[C+3]=Y.constant}K.value=F,K.needsUpdate=!0}return Q.numPlanes=M,Q.numIntersection=0,F}}function TG(J){let Q=new WeakMap;function $(Y,X){if(X===A6)Y.mapping=t8;else if(X===T6)Y.mapping=O8;return Y}function Z(Y){if(Y&&Y.isTexture){let X=Y.mapping;if(X===A6||X===T6)if(Q.has(Y)){let K=Q.get(Y).texture;return $(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let U=new c6(K.height);return U.fromEquirectangularTexture(J,Y),Q.set(Y,U),Y.addEventListener("dispose",W),$(U.texture,Y.mapping)}else return null}}return Y}function W(Y){let X=Y.target;X.removeEventListener("dispose",W);let K=Q.get(X);if(K!==void 0)Q.delete(X),K.dispose()}function H(){Q=new WeakMap}return{get:Z,dispose:H}}var H8=4,_H=[0.125,0.215,0.35,0.446,0.526,0.582],P8=20,SG=256,p7=new C8,PH=new w0,NZ=null,FZ=0,OZ=0,RZ=!1,jG=new I;class LZ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:H=256,position:Y=jG}=W;NZ=this._renderer.getRenderTarget(),FZ=this._renderer.getActiveCubeFace(),OZ=this._renderer.getActiveMipmapLevel(),RZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=TH(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=AH(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(NZ,FZ,OZ),this._renderer.xr.enabled=RZ,J.scissorTest=!1,G7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===t8||J.mapping===O8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);NZ=this._renderer.getRenderTarget(),FZ=this._renderer.getActiveCubeFace(),OZ=this._renderer.getActiveMipmapLevel(),RZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:DJ,minFilter:DJ,generateMipmaps:!1,type:f9,format:R9,colorSpace:IJ,depthBuffer:!1},Z=IH(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=IH(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yG(W)),this._blurMaterial=fG(W,J,Q),this._ggxMaterial=vG(W,J,Q)}return Z}_compileMaterial(J){let Q=new OJ(new VJ,J);this._renderer.compile(Q,p7)}_sceneToCubeUV(J,Q,$,Z,W){let X=new BJ(90,1,Q,$),K=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,q=G.autoClear,E=G.toneMapping;if(G.getClearColor(PH),G.toneMapping=q9,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new OJ(new a9,new fJ({name:"PMREM.Background",side:sJ,depthWrite:!1,depthTest:!1}));let k=this._backgroundBox,M=k.material,F=!1,O=J.background;if(O){if(O.isColor)M.color.copy(O),J.background=null,F=!0}else M.color.copy(PH),F=!0;for(let w=0;w<6;w++){let D=w%3;if(D===0)X.up.set(0,K[w],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x+U[w],W.y,W.z);else if(D===1)X.up.set(0,0,K[w]),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y+U[w],W.z);else X.up.set(0,K[w],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y,W.z+U[w]);let C=this._cubeSize;if(G7(Z,D*C,w>2?C:0,C,C),G.setRenderTarget(Z),F)G.render(k,X);G.render(J,X)}G.toneMapping=E,G.autoClear=q,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===t8||J.mapping===O8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=TH();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=AH();let W=Z?this._cubemapMaterial:this._equirectMaterial,H=this._lodMeshes[0];H.material=W;let Y=W.uniforms;Y.envMap.value=J;let X=this._cubeSize;G7(Q,0,0,3*X,2*X),$.setRenderTarget(Q),$.render(H,p7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let W=1;W<Z;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,W=this._pingPongRenderTarget,H=this._ggxMaterial,Y=this._lodMeshes[$];Y.material=H;let X=H.uniforms,K=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),G=Math.sqrt(K*K-U*U),q=0+K*1.25,E=G*q,{_lodMax:N}=this,k=this._sizeLods[$],M=3*k*($>N-H8?$-N+H8:0),F=4*(this._cubeSize-k);X.envMap.value=J.texture,X.roughness.value=E,X.mipInt.value=N-Q,G7(W,M,F,3*k,2*k),Z.setRenderTarget(W),Z.render(Y,p7),X.envMap.value=W.texture,X.roughness.value=0,X.mipInt.value=N-$,G7(J,M,F,3*k,2*k),Z.setRenderTarget(J),Z.render(Y,p7)}_blur(J,Q,$,Z,W){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,$,Z,"latitudinal",W),this._halfBlur(H,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,H,Y){let X=this._renderer,K=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")I0("blur direction must be either latitudinal or longitudinal!");let U=3,G=this._lodMeshes[Z];G.material=K;let q=K.uniforms,E=this._sizeLods[$]-1,N=isFinite(W)?Math.PI/(2*E):2*Math.PI/(2*P8-1),k=W/N,M=isFinite(W)?1+Math.floor(U*k):P8;if(M>P8)L0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${P8}`);let F=[],O=0;for(let _=0;_<P8;++_){let A=_/k,j=Math.exp(-A*A/2);if(F.push(j),_===0)O+=j;else if(_<M)O+=2*j}for(let _=0;_<F.length;_++)F[_]=F[_]/O;if(q.envMap.value=J.texture,q.samples.value=M,q.weights.value=F,q.latitudinal.value=H==="latitudinal",Y)q.poleAxis.value=Y;let{_lodMax:w}=this;q.dTheta.value=N,q.mipInt.value=w-$;let D=this._sizeLods[Z],C=3*D*(Z>w-H8?Z-w+H8:0),S=4*(this._cubeSize-D);G7(Q,C,S,3*D,2*D),X.setRenderTarget(Q),X.render(G,p7)}}function yG(J){let Q=[],$=[],Z=[],W=J,H=J-H8+1+_H.length;for(let Y=0;Y<H;Y++){let X=Math.pow(2,W);Q.push(X);let K=1/X;if(Y>J-H8)K=_H[Y-J+H8-1];else if(Y===0)K=0;$.push(K);let U=1/(X-2),G=-U,q=1+U,E=[G,G,q,G,q,q,G,G,q,q,G,q],N=6,k=6,M=3,F=2,O=1,w=new Float32Array(M*k*N),D=new Float32Array(F*k*N),C=new Float32Array(O*k*N);for(let _=0;_<N;_++){let A=_%3*2/3-1,j=_>2?0:-1,z=[A,j,0,A+0.6666666666666666,j,0,A+0.6666666666666666,j+1,0,A,j,0,A+0.6666666666666666,j+1,0,A,j+1,0];w.set(z,M*k*_),D.set(E,F*k*_);let B=[_,_,_,_,_,_];C.set(B,O*k*_)}let S=new VJ;if(S.setAttribute("position",new FJ(w,M)),S.setAttribute("uv",new FJ(D,F)),S.setAttribute("faceIndex",new FJ(C,O)),Z.push(new OJ(S,null)),W>H8)W--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function IH(J,Q,$){let Z=new J9(J,Q,$);return Z.texture.mapping=P7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function G7(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function vG(J,Q,$){return new $9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:NQ(),fragmentShader:`

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
		`,blending:j9,depthTest:!1,depthWrite:!1})}function fG(J,Q,$){let Z=new Float32Array(P8),W=new I(0,1,0);return new $9({name:"SphericalGaussianBlur",defines:{n:P8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:NQ(),fragmentShader:`

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
		`,blending:j9,depthTest:!1,depthWrite:!1})}function AH(){return new $9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:NQ(),fragmentShader:`

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
		`,blending:j9,depthTest:!1,depthWrite:!1})}function TH(){return new $9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:NQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:j9,depthTest:!1,depthWrite:!1})}function NQ(){return`

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
	`}function hG(J){let Q=new WeakMap,$=null;function Z(X){if(X&&X.isTexture){let K=X.mapping,U=K===A6||K===T6,G=K===t8||K===O8;if(U||G){let q=Q.get(X),E=q!==void 0?q.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==E){if($===null)$=new LZ(J);return q=U?$.fromEquirectangular(X,q):$.fromCubemap(X,q),q.texture.pmremVersion=X.pmremVersion,Q.set(X,q),q.texture}else if(q!==void 0)return q.texture;else{let N=X.image;if(U&&N&&N.height>0||G&&N&&W(N)){if($===null)$=new LZ(J);return q=U?$.fromEquirectangular(X):$.fromCubemap(X),q.texture.pmremVersion=X.pmremVersion,Q.set(X,q),X.addEventListener("dispose",H),q.texture}else return null}}}return X}function W(X){let K=0,U=6;for(let G=0;G<U;G++)if(X[G]!==void 0)K++;return K===U}function H(X){let K=X.target;K.removeEventListener("dispose",H);let U=Q.get(K);if(U!==void 0)Q.delete(K),U.dispose()}function Y(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:Y}}function bG(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)i8("WebGLRenderer: "+Z+" extension not supported.");return W}}}function xG(J,Q,$,Z){let W={},H=new WeakMap;function Y(q){let E=q.target;if(E.index!==null)Q.remove(E.index);for(let k in E.attributes)Q.remove(E.attributes[k]);E.removeEventListener("dispose",Y),delete W[E.id];let N=H.get(E);if(N)Q.remove(N),H.delete(E);if(Z.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0)delete E._maxInstanceCount;$.memory.geometries--}function X(q,E){if(W[E.id]===!0)return E;return E.addEventListener("dispose",Y),W[E.id]=!0,$.memory.geometries++,E}function K(q){let E=q.attributes;for(let N in E)Q.update(E[N],J.ARRAY_BUFFER)}function U(q){let E=[],N=q.index,k=q.attributes.position,M=0;if(N!==null){let w=N.array;M=N.version;for(let D=0,C=w.length;D<C;D+=3){let S=w[D+0],_=w[D+1],A=w[D+2];E.push(S,_,_,A,A,S)}}else if(k!==void 0){let w=k.array;M=k.version;for(let D=0,C=w.length/3-1;D<C;D+=3){let S=D+0,_=D+1,A=D+2;E.push(S,_,_,A,A,S)}}else return;let F=new((n$(E))?m6:l6)(E,1);F.version=M;let O=H.get(q);if(O)Q.remove(O);H.set(q,F)}function G(q){let E=H.get(q);if(E){let N=q.index;if(N!==null){if(E.version<N.version)U(q)}}else U(q);return H.get(q)}return{get:X,update:K,getWireframeAttribute:G}}function gG(J,Q,$){let Z;function W(E){Z=E}let H,Y;function X(E){H=E.type,Y=E.bytesPerElement}function K(E,N){J.drawElements(Z,N,H,E*Y),$.update(N,Z,1)}function U(E,N,k){if(k===0)return;J.drawElementsInstanced(Z,N,H,E*Y,k),$.update(N,Z,k)}function G(E,N,k){if(k===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,H,E,0,k);let F=0;for(let O=0;O<k;O++)F+=N[O];$.update(F,Z,1)}function q(E,N,k,M){if(k===0)return;let F=Q.get("WEBGL_multi_draw");if(F===null)for(let O=0;O<E.length;O++)U(E[O]/Y,N[O],M[O]);else{F.multiDrawElementsInstancedWEBGL(Z,N,0,H,E,0,M,0,k);let O=0;for(let w=0;w<k;w++)O+=N[w]*M[w];$.update(O,Z,1)}}this.setMode=W,this.setIndex=X,this.render=K,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=q}function pG(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(H,Y,X){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=X*(H/3);break;case J.LINES:$.lines+=X*(H/2);break;case J.LINE_STRIP:$.lines+=X*(H-1);break;case J.LINE_LOOP:$.lines+=X*H;break;case J.POINTS:$.points+=X*H;break;default:I0("WebGLInfo: Unknown draw mode:",Y);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function lG(J,Q,$){let Z=new WeakMap,W=new XJ;function H(Y,X,K){let U=Y.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,q=G!==void 0?G.length:0,E=Z.get(X);if(E===void 0||E.count!==q){let z=function(){A.dispose(),Z.delete(X),X.removeEventListener("dispose",z)};if(E!==void 0)E.texture.dispose();let N=X.morphAttributes.position!==void 0,k=X.morphAttributes.normal!==void 0,M=X.morphAttributes.color!==void 0,F=X.morphAttributes.position||[],O=X.morphAttributes.normal||[],w=X.morphAttributes.color||[],D=0;if(N===!0)D=1;if(k===!0)D=2;if(M===!0)D=3;let C=X.attributes.position.count*D,S=1;if(C>Q.maxTextureSize)S=Math.ceil(C/Q.maxTextureSize),C=Q.maxTextureSize;let _=new Float32Array(C*S*4*q),A=new p6(_,C,S,q);A.type=v9,A.needsUpdate=!0;let j=D*4;for(let B=0;B<q;B++){let P=F[B],x=O[B],u=w[B],p=C*S*4*B;for(let o=0;o<P.count;o++){let d=o*j;if(N===!0)W.fromBufferAttribute(P,o),_[p+d+0]=W.x,_[p+d+1]=W.y,_[p+d+2]=W.z,_[p+d+3]=0;if(k===!0)W.fromBufferAttribute(x,o),_[p+d+4]=W.x,_[p+d+5]=W.y,_[p+d+6]=W.z,_[p+d+7]=0;if(M===!0)W.fromBufferAttribute(u,o),_[p+d+8]=W.x,_[p+d+9]=W.y,_[p+d+10]=W.z,_[p+d+11]=u.itemSize===4?W.w:1}}E={count:q,texture:A,size:new P0(C,S)},Z.set(X,E),X.addEventListener("dispose",z)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let N=0;for(let M=0;M<U.length;M++)N+=U[M];let k=X.morphTargetsRelative?1:1-N;K.getUniforms().setValue(J,"morphTargetBaseInfluence",k),K.getUniforms().setValue(J,"morphTargetInfluences",U)}K.getUniforms().setValue(J,"morphTargetsTexture",E.texture,$),K.getUniforms().setValue(J,"morphTargetsTextureSize",E.size)}return{update:H}}function mG(J,Q,$,Z){let W=new WeakMap;function H(K){let U=Z.render.frame,G=K.geometry,q=Q.get(K,G);if(W.get(q)!==U)Q.update(q),W.set(q,U);if(K.isInstancedMesh){if(K.hasEventListener("dispose",X)===!1)K.addEventListener("dispose",X);if(W.get(K)!==U){if($.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)$.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,U)}}if(K.isSkinnedMesh){let E=K.skeleton;if(W.get(E)!==U)E.update(),W.set(E,U)}return q}function Y(){W=new WeakMap}function X(K){let U=K.target;if(U.removeEventListener("dispose",X),$.remove(U.instanceMatrix),U.instanceColor!==null)$.remove(U.instanceColor)}return{update:H,dispose:Y}}var uG={[rQ]:"LINEAR_TONE_MAPPING",[tQ]:"REINHARD_TONE_MAPPING",[eQ]:"CINEON_TONE_MAPPING",[_7]:"ACES_FILMIC_TONE_MAPPING",[Q$]:"AGX_TONE_MAPPING",[$$]:"NEUTRAL_TONE_MAPPING",[J$]:"CUSTOM_TONE_MAPPING"};function dG(J,Q,$,Z,W){let H=new J9(Q,$,{type:J,depthBuffer:Z,stencilBuffer:W}),Y=new J9(Q,$,{type:f9,depthBuffer:!1,stencilBuffer:!1}),X=new VJ;X.setAttribute("position",new LJ([-1,3,0,-1,-1,0,3,-1,0],3)),X.setAttribute("uv",new LJ([0,2,0,0,2,0],2));let K=new JZ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),U=new OJ(X,K),G=new C8(-1,1,1,-1,0,1),q=null,E=null,N=!1,k,M=null,F=[],O=!1;this.setSize=function(w,D){H.setSize(w,D),Y.setSize(w,D);for(let C=0;C<F.length;C++){let S=F[C];if(S.setSize)S.setSize(w,D)}},this.setEffects=function(w){F=w,O=F.length>0&&F[0].isRenderPass===!0;let{width:D,height:C}=H;for(let S=0;S<F.length;S++){let _=F[S];if(_.setSize)_.setSize(D,C)}},this.begin=function(w,D){if(N)return!1;if(w.toneMapping===q9&&F.length===0)return!1;if(M=D,D!==null){let{width:C,height:S}=D;if(H.width!==C||H.height!==S)this.setSize(C,S)}if(O===!1)w.setRenderTarget(H);return k=w.toneMapping,w.toneMapping=q9,!0},this.hasRenderPass=function(){return O},this.end=function(w,D){w.toneMapping=k,N=!0;let C=H,S=Y;for(let _=0;_<F.length;_++){let A=F[_];if(A.enabled===!1)continue;if(A.render(w,S,C,D),A.needsSwap!==!1){let j=C;C=S,S=j}}if(q!==w.outputColorSpace||E!==w.toneMapping){if(q=w.outputColorSpace,E=w.toneMapping,K.defines={},p0.getTransfer(q)===ZJ)K.defines.SRGB_TRANSFER="";let _=uG[E];if(_)K.defines[_]="";K.needsUpdate=!0}K.uniforms.tDiffuse.value=C.texture,w.setRenderTarget(M),w.render(U,G),M=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){H.dispose(),Y.dispose(),X.dispose(),K.dispose()}}var oH=new NJ,DZ=new z8(1,1),aH=new p6,rH=new a$,tH=new d6,SH=[],jH=[],yH=new Float32Array(16),vH=new Float32Array(9),fH=new Float32Array(4);function q7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,H=SH[W];if(H===void 0)H=new Float32Array(W),SH[W]=H;if(Q!==0){Z.toArray(H,0);for(let Y=1,X=0;Y!==Q;++Y)X+=$,J[Y].toArray(H,X)}return H}function zJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function CJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function FQ(J,Q){let $=jH[Q];if($===void 0)$=new Int32Array(Q),jH[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function cG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function nG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(zJ($,Q))return;J.uniform2fv(this.addr,Q),CJ($,Q)}}function sG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(zJ($,Q))return;J.uniform3fv(this.addr,Q),CJ($,Q)}}function iG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(zJ($,Q))return;J.uniform4fv(this.addr,Q),CJ($,Q)}}function oG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(zJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),CJ($,Q)}else{if(zJ($,Z))return;fH.set(Z),J.uniformMatrix2fv(this.addr,!1,fH),CJ($,Z)}}function aG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(zJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),CJ($,Q)}else{if(zJ($,Z))return;vH.set(Z),J.uniformMatrix3fv(this.addr,!1,vH),CJ($,Z)}}function rG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(zJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),CJ($,Q)}else{if(zJ($,Z))return;yH.set(Z),J.uniformMatrix4fv(this.addr,!1,yH),CJ($,Z)}}function tG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function eG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(zJ($,Q))return;J.uniform2iv(this.addr,Q),CJ($,Q)}}function Jq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(zJ($,Q))return;J.uniform3iv(this.addr,Q),CJ($,Q)}}function Qq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(zJ($,Q))return;J.uniform4iv(this.addr,Q),CJ($,Q)}}function $q(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function Zq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(zJ($,Q))return;J.uniform2uiv(this.addr,Q),CJ($,Q)}}function Wq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(zJ($,Q))return;J.uniform3uiv(this.addr,Q),CJ($,Q)}}function Hq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(zJ($,Q))return;J.uniform4uiv(this.addr,Q),CJ($,Q)}}function Yq(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let H;if(this.type===J.SAMPLER_2D_SHADOW)DZ.compareFunction=$.isReversedDepthBuffer()?g6:x6,H=DZ;else H=oH;$.setTexture2D(Q||H,W)}function Xq(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||rH,W)}function Kq(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||tH,W)}function Uq(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||aH,W)}function Gq(J){switch(J){case 5126:return cG;case 35664:return nG;case 35665:return sG;case 35666:return iG;case 35674:return oG;case 35675:return aG;case 35676:return rG;case 5124:case 35670:return tG;case 35667:case 35671:return eG;case 35668:case 35672:return Jq;case 35669:case 35673:return Qq;case 5125:return $q;case 36294:return Zq;case 36295:return Wq;case 36296:return Hq;case 35678:case 36198:case 36298:case 36306:case 35682:return Yq;case 35679:case 36299:case 36307:return Xq;case 35680:case 36300:case 36308:case 36293:return Kq;case 36289:case 36303:case 36311:case 36292:return Uq}}function qq(J,Q){J.uniform1fv(this.addr,Q)}function Eq(J,Q){let $=q7(Q,this.size,2);J.uniform2fv(this.addr,$)}function Nq(J,Q){let $=q7(Q,this.size,3);J.uniform3fv(this.addr,$)}function Fq(J,Q){let $=q7(Q,this.size,4);J.uniform4fv(this.addr,$)}function Oq(J,Q){let $=q7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function Rq(J,Q){let $=q7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function kq(J,Q){let $=q7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function Mq(J,Q){J.uniform1iv(this.addr,Q)}function Lq(J,Q){J.uniform2iv(this.addr,Q)}function Dq(J,Q){J.uniform3iv(this.addr,Q)}function Vq(J,Q){J.uniform4iv(this.addr,Q)}function Bq(J,Q){J.uniform1uiv(this.addr,Q)}function zq(J,Q){J.uniform2uiv(this.addr,Q)}function Cq(J,Q){J.uniform3uiv(this.addr,Q)}function wq(J,Q){J.uniform4uiv(this.addr,Q)}function _q(J,Q,$){let Z=this.cache,W=Q.length,H=FQ($,W);if(!zJ(Z,H))J.uniform1iv(this.addr,H),CJ(Z,H);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=DZ;else Y=oH;for(let X=0;X!==W;++X)$.setTexture2D(Q[X]||Y,H[X])}function Pq(J,Q,$){let Z=this.cache,W=Q.length,H=FQ($,W);if(!zJ(Z,H))J.uniform1iv(this.addr,H),CJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture3D(Q[Y]||rH,H[Y])}function Iq(J,Q,$){let Z=this.cache,W=Q.length,H=FQ($,W);if(!zJ(Z,H))J.uniform1iv(this.addr,H),CJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTextureCube(Q[Y]||tH,H[Y])}function Aq(J,Q,$){let Z=this.cache,W=Q.length,H=FQ($,W);if(!zJ(Z,H))J.uniform1iv(this.addr,H),CJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2DArray(Q[Y]||aH,H[Y])}function Tq(J){switch(J){case 5126:return qq;case 35664:return Eq;case 35665:return Nq;case 35666:return Fq;case 35674:return Oq;case 35675:return Rq;case 35676:return kq;case 5124:case 35670:return Mq;case 35667:case 35671:return Lq;case 35668:case 35672:return Dq;case 35669:case 35673:return Vq;case 5125:return Bq;case 36294:return zq;case 36295:return Cq;case 36296:return wq;case 35678:case 36198:case 36298:case 36306:case 35682:return _q;case 35679:case 36299:case 36307:return Pq;case 35680:case 36300:case 36308:case 36293:return Iq;case 36289:case 36303:case 36311:case 36292:return Aq}}class eH{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=Gq(Q.type)}}class JY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=Tq(Q.type)}}class QY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,H=Z.length;W!==H;++W){let Y=Z[W];Y.setValue(J,Q[Y.id],$)}}}var kZ=/(\w+)(\])?(\[|\.)?/g;function hH(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Sq(J,Q,$){let Z=J.name,W=Z.length;kZ.lastIndex=0;while(!0){let H=kZ.exec(Z),Y=kZ.lastIndex,X=H[1],K=H[2]==="]",U=H[3];if(K)X=X|0;if(U===void 0||U==="["&&Y+2===W){hH($,U===void 0?new eH(X,J,Q):new JY(X,J,Q));break}else{let q=$.map[X];if(q===void 0)q=new QY(X),hH($,q);$=q}}}class u7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let H=0;H<$;++H){let Y=J.getActiveUniform(Q,H),X=J.getUniformLocation(Q,Y.name);Sq(Y,X,this)}let Z=[],W=[];for(let H of this.seq)if(H.type===J.SAMPLER_2D_SHADOW||H.type===J.SAMPLER_CUBE_SHADOW||H.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(H);else W.push(H);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,H=Q.length;W!==H;++W){let Y=Q[W],X=$[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let H=J[Z];if(H.id in Q)$.push(H)}return $}}function bH(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var jq=37297,yq=0;function vq(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),H=Math.min(Q+6,$.length);for(let Y=W;Y<H;Y++){let X=Y+1;Z.push(`${X===Q?">":" "} ${X}: ${$[Y]}`)}return Z.join(`
`)}var xH=new h0;function fq(J){p0._getMatrix(xH,p0.workingColorSpace,J);let Q=`mat3( ${xH.elements.map(($)=>$.toFixed(4))} )`;switch(p0.getTransfer(J)){case u$:return[Q,"LinearTransferOETF"];case ZJ:return[Q,"sRGBTransferOETF"];default:return L0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function gH(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if(Z&&H==="")return"";let Y=/ERROR: 0:(\d+)/.exec(H);if(Y){let X=parseInt(Y[1]);return $.toUpperCase()+`

`+H+`

`+vq(J.getShaderSource(Q),X)}else return H}function hq(J,Q){let $=fq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var bq={[rQ]:"Linear",[tQ]:"Reinhard",[eQ]:"Cineon",[_7]:"ACESFilmic",[Q$]:"AgX",[$$]:"Neutral",[J$]:"Custom"};function xq(J,Q){let $=bq[Q];if($===void 0)return L0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var EQ=new I;function gq(){p0.getLuminanceCoefficients(EQ);let J=EQ.x.toFixed(4),Q=EQ.y.toFixed(4),$=EQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function pq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(m7).join(`
`)}function lq(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function mq(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let H=J.getActiveAttrib(Q,W),Y=H.name,X=1;if(H.type===J.FLOAT_MAT2)X=2;if(H.type===J.FLOAT_MAT3)X=3;if(H.type===J.FLOAT_MAT4)X=4;$[Y]={type:H.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return $}function m7(J){return J!==""}function pH(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function lH(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var uq=/^[ \t]*#include +<([\w\d./]+)>/gm;function VZ(J){return J.replace(uq,cq)}var dq=new Map;function cq(J,Q){let $=b0[Q];if($===void 0){let Z=dq.get(Q);if(Z!==void 0)$=b0[Z],L0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return VZ($)}var nq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mH(J){return J.replace(nq,sq)}function sq(J,Q,$,Z){let W="";for(let H=parseInt(Q);H<parseInt($);H++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return W}function uH(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var iq={[z7]:"SHADOWMAP_TYPE_PCF",[o8]:"SHADOWMAP_TYPE_VSM"};function oq(J){return iq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var aq={[t8]:"ENVMAP_TYPE_CUBE",[O8]:"ENVMAP_TYPE_CUBE",[P7]:"ENVMAP_TYPE_CUBE_UV"};function rq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return aq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var tq={[O8]:"ENVMAP_MODE_REFRACTION"};function eq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return tq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var J1={[rW]:"ENVMAP_BLENDING_MULTIPLY",[tW]:"ENVMAP_BLENDING_MIX",[eW]:"ENVMAP_BLENDING_ADD"};function Q1(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return J1[J.combine]||"ENVMAP_BLENDING_NONE"}function $1(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function Z1(J,Q,$,Z){let W=J.getContext(),H=$.defines,Y=$.vertexShader,X=$.fragmentShader,K=oq($),U=rq($),G=eq($),q=Q1($),E=$1($),N=pq($),k=lq(H),M=W.createProgram(),F,O,w=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k].filter(m7).join(`
`),F.length>0)F+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k].filter(m7).join(`
`),O.length>0)O+=`
`}else F=[uH($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(m7).join(`
`),O=[uH($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+q:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==q9?"#define TONE_MAPPING":"",$.toneMapping!==q9?b0.tonemapping_pars_fragment:"",$.toneMapping!==q9?xq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",b0.colorspace_pars_fragment,hq("linearToOutputTexel",$.outputColorSpace),gq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(m7).join(`
`);if(Y=VZ(Y),Y=pH(Y,$),Y=lH(Y,$),X=VZ(X),X=pH(X,$),X=lH(X,$),Y=mH(Y),X=mH(X),$.isRawShaderMaterial!==!0)w=`#version 300 es
`,F=[N,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+F,O=["#define varying in",$.glslVersion===d$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===d$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let D=w+F+Y,C=w+O+X,S=bH(W,W.VERTEX_SHADER,D),_=bH(W,W.FRAGMENT_SHADER,C);if(W.attachShader(M,S),W.attachShader(M,_),$.index0AttributeName!==void 0)W.bindAttribLocation(M,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(M,0,"position");W.linkProgram(M);function A(P){if(J.debug.checkShaderErrors){let x=W.getProgramInfoLog(M)||"",u=W.getShaderInfoLog(S)||"",p=W.getShaderInfoLog(_)||"",o=x.trim(),d=u.trim(),l=p.trim(),i=!0,U0=!0;if(W.getProgramParameter(M,W.LINK_STATUS)===!1)if(i=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,M,S,_);else{let W0=gH(W,S,"vertex"),F0=gH(W,_,"fragment");I0("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(M,W.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+o+`
`+W0+`
`+F0)}else if(o!=="")L0("WebGLProgram: Program Info Log:",o);else if(d===""||l==="")U0=!1;if(U0)P.diagnostics={runnable:i,programLog:o,vertexShader:{log:d,prefix:F},fragmentShader:{log:l,prefix:O}}}W.deleteShader(S),W.deleteShader(_),j=new u7(W,M),z=mq(W,M)}let j;this.getUniforms=function(){if(j===void 0)A(this);return j};let z;this.getAttributes=function(){if(z===void 0)A(this);return z};let B=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(B===!1)B=W.getProgramParameter(M,jq);return B},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(M),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=yq++,this.cacheKey=Q,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=_,this}var W1=0;class $Y{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),H=this._getShaderCacheForMaterial(J);if(H.has(Z)===!1)H.add(Z),Z.usedTimes++;if(H.has(W)===!1)H.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new ZY(J),Q.set(J,$);return $}}class ZY{constructor(J){this.id=W1++,this.code=J,this.usedTimes=0}}function H1(J,Q,$,Z,W,H,Y){let X=new j7,K=new $Y,U=new Set,G=[],q=new Map,E=W.logarithmicDepthBuffer,N=W.precision,k={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function F(z,B,P,x,u){let p=x.fog,o=u.geometry,d=z.isMeshStandardMaterial?x.environment:null,l=(z.isMeshStandardMaterial?$:Q).get(z.envMap||d),i=!!l&&l.mapping===P7?l.image.height:null,U0=k[z.type];if(z.precision!==null){if(N=W.getMaxPrecision(z.precision),N!==z.precision)L0("WebGLProgram.getParameters:",z.precision,"not supported, using",N,"instead.")}let W0=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,F0=W0!==void 0?W0.length:0,v0=0;if(o.morphAttributes.position!==void 0)v0=1;if(o.morphAttributes.normal!==void 0)v0=2;if(o.morphAttributes.color!==void 0)v0=3;let GJ,JJ,s,Y0;if(U0){let o0=M9[U0];GJ=o0.vertexShader,JJ=o0.fragmentShader}else GJ=z.vertexShader,JJ=z.fragmentShader,K.update(z),s=K.getVertexShaderID(z),Y0=K.getFragmentShaderID(z);let $0=J.getRenderTarget(),_0=J.state.buffers.depth.getReversed(),A0=u.isInstancedMesh===!0,j0=u.isBatchedMesh===!0,RJ=!!z.map,c0=!!z.matcap,i0=!!l,QJ=!!z.aoMap,m0=!!z.lightMap,kJ=!!z.bumpMap,T=!!z.normalMap,PJ=!!z.displacementMap,x0=!!z.emissiveMap,KJ=!!z.metalnessMap,V0=!!z.roughnessMap,WJ=z.anisotropy>0,V=z.clearcoat>0,R=z.dispersion>0,h=z.iridescence>0,n=z.sheen>0,a=z.transmission>0,c=WJ&&!!z.anisotropyMap,O0=V&&!!z.clearcoatMap,Q0=V&&!!z.clearcoatNormalMap,B0=V&&!!z.clearcoatRoughnessMap,T0=h&&!!z.iridescenceMap,r=h&&!!z.iridescenceThicknessMap,e=n&&!!z.sheenColorMap,R0=n&&!!z.sheenRoughnessMap,M0=!!z.specularMap,G0=!!z.specularColorMap,g0=!!z.specularIntensityMap,y=a&&!!z.transmissionMap,Z0=a&&!!z.thicknessMap,J0=!!z.gradientMap,E0=!!z.alphaMap,t=z.alphaTest>0,m=!!z.alphaHash,k0=!!z.extensions,y0=q9;if(z.toneMapped){if($0===null||$0.isXRRenderTarget===!0)y0=J.toneMapping}let HJ={shaderID:U0,shaderType:z.type,shaderName:z.name,vertexShader:GJ,fragmentShader:JJ,defines:z.defines,customVertexShaderID:s,customFragmentShaderID:Y0,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:N,batching:j0,batchingColor:j0&&u._colorsTexture!==null,instancing:A0,instancingColor:A0&&u.instanceColor!==null,instancingMorph:A0&&u.morphTexture!==null,outputColorSpace:$0===null?J.outputColorSpace:$0.isXRRenderTarget===!0?$0.texture.colorSpace:IJ,alphaToCoverage:!!z.alphaToCoverage,map:RJ,matcap:c0,envMap:i0,envMapMode:i0&&l.mapping,envMapCubeUVHeight:i,aoMap:QJ,lightMap:m0,bumpMap:kJ,normalMap:T,displacementMap:PJ,emissiveMap:x0,normalMapObjectSpace:T&&z.normalMapType===KH,normalMapTangentSpace:T&&z.normalMapType===XH,metalnessMap:KJ,roughnessMap:V0,anisotropy:WJ,anisotropyMap:c,clearcoat:V,clearcoatMap:O0,clearcoatNormalMap:Q0,clearcoatRoughnessMap:B0,dispersion:R,iridescence:h,iridescenceMap:T0,iridescenceThicknessMap:r,sheen:n,sheenColorMap:e,sheenRoughnessMap:R0,specularMap:M0,specularColorMap:G0,specularIntensityMap:g0,transmission:a,transmissionMap:y,thicknessMap:Z0,gradientMap:J0,opaque:z.transparent===!1&&z.blending===C7&&z.alphaToCoverage===!1,alphaMap:E0,alphaTest:t,alphaHash:m,combine:z.combine,mapUv:RJ&&M(z.map.channel),aoMapUv:QJ&&M(z.aoMap.channel),lightMapUv:m0&&M(z.lightMap.channel),bumpMapUv:kJ&&M(z.bumpMap.channel),normalMapUv:T&&M(z.normalMap.channel),displacementMapUv:PJ&&M(z.displacementMap.channel),emissiveMapUv:x0&&M(z.emissiveMap.channel),metalnessMapUv:KJ&&M(z.metalnessMap.channel),roughnessMapUv:V0&&M(z.roughnessMap.channel),anisotropyMapUv:c&&M(z.anisotropyMap.channel),clearcoatMapUv:O0&&M(z.clearcoatMap.channel),clearcoatNormalMapUv:Q0&&M(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B0&&M(z.clearcoatRoughnessMap.channel),iridescenceMapUv:T0&&M(z.iridescenceMap.channel),iridescenceThicknessMapUv:r&&M(z.iridescenceThicknessMap.channel),sheenColorMapUv:e&&M(z.sheenColorMap.channel),sheenRoughnessMapUv:R0&&M(z.sheenRoughnessMap.channel),specularMapUv:M0&&M(z.specularMap.channel),specularColorMapUv:G0&&M(z.specularColorMap.channel),specularIntensityMapUv:g0&&M(z.specularIntensityMap.channel),transmissionMapUv:y&&M(z.transmissionMap.channel),thicknessMapUv:Z0&&M(z.thicknessMap.channel),alphaMapUv:E0&&M(z.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(T||WJ),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:u.isPoints===!0&&!!o.attributes.uv&&(RJ||E0),fog:!!p,useFog:z.fog===!0,fogExp2:!!p&&p.isFogExp2,flatShading:z.flatShading===!0&&z.wireframe===!1,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:_0,skinning:u.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:F0,morphTextureStride:v0,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:z.dithering,shadowMapEnabled:J.shadowMap.enabled&&P.length>0,shadowMapType:J.shadowMap.type,toneMapping:y0,decodeVideoTexture:RJ&&z.map.isVideoTexture===!0&&p0.getTransfer(z.map.colorSpace)===ZJ,decodeVideoTextureEmissive:x0&&z.emissiveMap.isVideoTexture===!0&&p0.getTransfer(z.emissiveMap.colorSpace)===ZJ,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===vJ,flipSided:z.side===sJ,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:k0&&z.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(k0&&z.extensions.multiDraw===!0||j0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return HJ.vertexUv1s=U.has(1),HJ.vertexUv2s=U.has(2),HJ.vertexUv3s=U.has(3),U.clear(),HJ}function O(z){let B=[];if(z.shaderID)B.push(z.shaderID);else B.push(z.customVertexShaderID),B.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let P in z.defines)B.push(P),B.push(z.defines[P]);if(z.isRawShaderMaterial===!1)w(B,z),D(B,z),B.push(J.outputColorSpace);return B.push(z.customProgramCacheKey),B.join()}function w(z,B){z.push(B.precision),z.push(B.outputColorSpace),z.push(B.envMapMode),z.push(B.envMapCubeUVHeight),z.push(B.mapUv),z.push(B.alphaMapUv),z.push(B.lightMapUv),z.push(B.aoMapUv),z.push(B.bumpMapUv),z.push(B.normalMapUv),z.push(B.displacementMapUv),z.push(B.emissiveMapUv),z.push(B.metalnessMapUv),z.push(B.roughnessMapUv),z.push(B.anisotropyMapUv),z.push(B.clearcoatMapUv),z.push(B.clearcoatNormalMapUv),z.push(B.clearcoatRoughnessMapUv),z.push(B.iridescenceMapUv),z.push(B.iridescenceThicknessMapUv),z.push(B.sheenColorMapUv),z.push(B.sheenRoughnessMapUv),z.push(B.specularMapUv),z.push(B.specularColorMapUv),z.push(B.specularIntensityMapUv),z.push(B.transmissionMapUv),z.push(B.thicknessMapUv),z.push(B.combine),z.push(B.fogExp2),z.push(B.sizeAttenuation),z.push(B.morphTargetsCount),z.push(B.morphAttributeCount),z.push(B.numDirLights),z.push(B.numPointLights),z.push(B.numSpotLights),z.push(B.numSpotLightMaps),z.push(B.numHemiLights),z.push(B.numRectAreaLights),z.push(B.numDirLightShadows),z.push(B.numPointLightShadows),z.push(B.numSpotLightShadows),z.push(B.numSpotLightShadowsWithMaps),z.push(B.numLightProbes),z.push(B.shadowMapType),z.push(B.toneMapping),z.push(B.numClippingPlanes),z.push(B.numClipIntersection),z.push(B.depthPacking)}function D(z,B){if(X.disableAll(),B.instancing)X.enable(0);if(B.instancingColor)X.enable(1);if(B.instancingMorph)X.enable(2);if(B.matcap)X.enable(3);if(B.envMap)X.enable(4);if(B.normalMapObjectSpace)X.enable(5);if(B.normalMapTangentSpace)X.enable(6);if(B.clearcoat)X.enable(7);if(B.iridescence)X.enable(8);if(B.alphaTest)X.enable(9);if(B.vertexColors)X.enable(10);if(B.vertexAlphas)X.enable(11);if(B.vertexUv1s)X.enable(12);if(B.vertexUv2s)X.enable(13);if(B.vertexUv3s)X.enable(14);if(B.vertexTangents)X.enable(15);if(B.anisotropy)X.enable(16);if(B.alphaHash)X.enable(17);if(B.batching)X.enable(18);if(B.dispersion)X.enable(19);if(B.batchingColor)X.enable(20);if(B.gradientMap)X.enable(21);if(z.push(X.mask),X.disableAll(),B.fog)X.enable(0);if(B.useFog)X.enable(1);if(B.flatShading)X.enable(2);if(B.logarithmicDepthBuffer)X.enable(3);if(B.reversedDepthBuffer)X.enable(4);if(B.skinning)X.enable(5);if(B.morphTargets)X.enable(6);if(B.morphNormals)X.enable(7);if(B.morphColors)X.enable(8);if(B.premultipliedAlpha)X.enable(9);if(B.shadowMapEnabled)X.enable(10);if(B.doubleSided)X.enable(11);if(B.flipSided)X.enable(12);if(B.useDepthPacking)X.enable(13);if(B.dithering)X.enable(14);if(B.transmission)X.enable(15);if(B.sheen)X.enable(16);if(B.opaque)X.enable(17);if(B.pointsUvs)X.enable(18);if(B.decodeVideoTexture)X.enable(19);if(B.decodeVideoTextureEmissive)X.enable(20);if(B.alphaToCoverage)X.enable(21);z.push(X.mask)}function C(z){let B=k[z.type],P;if(B){let x=M9[B];P=MH.clone(x.uniforms)}else P=z.uniforms;return P}function S(z,B){let P=q.get(B);if(P!==void 0)++P.usedTimes;else P=new Z1(J,B,z,H),G.push(P),q.set(B,P);return P}function _(z){if(--z.usedTimes===0){let B=G.indexOf(z);G[B]=G[G.length-1],G.pop(),q.delete(z.cacheKey),z.destroy()}}function A(z){K.remove(z)}function j(){K.dispose()}return{getParameters:F,getProgramCacheKey:O,getUniforms:C,acquireProgram:S,releaseProgram:_,releaseShaderCache:A,programs:G,dispose:j}}function Y1(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function W(Y,X,K){J.get(Y)[X]=K}function H(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:H}}function X1(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function dH(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function cH(){let J=[],Q=0,$=[],Z=[],W=[];function H(){Q=0,$.length=0,Z.length=0,W.length=0}function Y(q,E,N,k,M,F){let O=J[Q];if(O===void 0)O={id:q.id,object:q,geometry:E,material:N,groupOrder:k,renderOrder:q.renderOrder,z:M,group:F},J[Q]=O;else O.id=q.id,O.object=q,O.geometry=E,O.material=N,O.groupOrder=k,O.renderOrder=q.renderOrder,O.z=M,O.group=F;return Q++,O}function X(q,E,N,k,M,F){let O=Y(q,E,N,k,M,F);if(N.transmission>0)Z.push(O);else if(N.transparent===!0)W.push(O);else $.push(O)}function K(q,E,N,k,M,F){let O=Y(q,E,N,k,M,F);if(N.transmission>0)Z.unshift(O);else if(N.transparent===!0)W.unshift(O);else $.unshift(O)}function U(q,E){if($.length>1)$.sort(q||X1);if(Z.length>1)Z.sort(E||dH);if(W.length>1)W.sort(E||dH)}function G(){for(let q=Q,E=J.length;q<E;q++){let N=J[q];if(N.id===null)break;N.id=null,N.object=null,N.geometry=null,N.material=null,N.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:H,push:X,unshift:K,finish:G,sort:U}}function K1(){let J=new WeakMap;function Q(Z,W){let H=J.get(Z),Y;if(H===void 0)Y=new cH,J.set(Z,[Y]);else if(W>=H.length)Y=new cH,H.push(Y);else Y=H[W];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function U1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new I,color:new w0};break;case"SpotLight":$={position:new I,direction:new I,color:new w0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new I,color:new w0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new I,skyColor:new w0,groundColor:new w0};break;case"RectAreaLight":$={color:new w0,position:new I,halfWidth:new I,halfHeight:new I};break}return J[Q.id]=$,$}}}function G1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new P0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new P0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new P0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var q1=0;function E1(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function N1(J){let Q=new U1,$=G1(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new I);let W=new I,H=new f0,Y=new f0;function X(U){let G=0,q=0,E=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let N=0,k=0,M=0,F=0,O=0,w=0,D=0,C=0,S=0,_=0,A=0;U.sort(E1);for(let z=0,B=U.length;z<B;z++){let P=U[z],x=P.color,u=P.intensity,p=P.distance,o=null;if(P.shadow&&P.shadow.map)if(P.shadow.map.texture.format===Z7)o=P.shadow.map.texture;else o=P.shadow.map.depthTexture||P.shadow.map.texture;if(P.isAmbientLight)G+=x.r*u,q+=x.g*u,E+=x.b*u;else if(P.isLightProbe){for(let d=0;d<9;d++)Z.probe[d].addScaledVector(P.sh.coefficients[d],u);A++}else if(P.isDirectionalLight){let d=Q.get(P);if(d.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let l=P.shadow,i=$.get(P);i.shadowIntensity=l.intensity,i.shadowBias=l.bias,i.shadowNormalBias=l.normalBias,i.shadowRadius=l.radius,i.shadowMapSize=l.mapSize,Z.directionalShadow[N]=i,Z.directionalShadowMap[N]=o,Z.directionalShadowMatrix[N]=P.shadow.matrix,w++}Z.directional[N]=d,N++}else if(P.isSpotLight){let d=Q.get(P);d.position.setFromMatrixPosition(P.matrixWorld),d.color.copy(x).multiplyScalar(u),d.distance=p,d.coneCos=Math.cos(P.angle),d.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),d.decay=P.decay,Z.spot[M]=d;let l=P.shadow;if(P.map){if(Z.spotLightMap[S]=P.map,S++,l.updateMatrices(P),P.castShadow)_++}if(Z.spotLightMatrix[M]=l.matrix,P.castShadow){let i=$.get(P);i.shadowIntensity=l.intensity,i.shadowBias=l.bias,i.shadowNormalBias=l.normalBias,i.shadowRadius=l.radius,i.shadowMapSize=l.mapSize,Z.spotShadow[M]=i,Z.spotShadowMap[M]=o,C++}M++}else if(P.isRectAreaLight){let d=Q.get(P);d.color.copy(x).multiplyScalar(u),d.halfWidth.set(P.width*0.5,0,0),d.halfHeight.set(0,P.height*0.5,0),Z.rectArea[F]=d,F++}else if(P.isPointLight){let d=Q.get(P);if(d.color.copy(P.color).multiplyScalar(P.intensity),d.distance=P.distance,d.decay=P.decay,P.castShadow){let l=P.shadow,i=$.get(P);i.shadowIntensity=l.intensity,i.shadowBias=l.bias,i.shadowNormalBias=l.normalBias,i.shadowRadius=l.radius,i.shadowMapSize=l.mapSize,i.shadowCameraNear=l.camera.near,i.shadowCameraFar=l.camera.far,Z.pointShadow[k]=i,Z.pointShadowMap[k]=o,Z.pointShadowMatrix[k]=P.shadow.matrix,D++}Z.point[k]=d,k++}else if(P.isHemisphereLight){let d=Q.get(P);d.skyColor.copy(P.color).multiplyScalar(u),d.groundColor.copy(P.groundColor).multiplyScalar(u),Z.hemi[O]=d,O++}}if(F>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=X0.LTC_FLOAT_1,Z.rectAreaLTC2=X0.LTC_FLOAT_2;else Z.rectAreaLTC1=X0.LTC_HALF_1,Z.rectAreaLTC2=X0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=q,Z.ambient[2]=E;let j=Z.hash;if(j.directionalLength!==N||j.pointLength!==k||j.spotLength!==M||j.rectAreaLength!==F||j.hemiLength!==O||j.numDirectionalShadows!==w||j.numPointShadows!==D||j.numSpotShadows!==C||j.numSpotMaps!==S||j.numLightProbes!==A)Z.directional.length=N,Z.spot.length=M,Z.rectArea.length=F,Z.point.length=k,Z.hemi.length=O,Z.directionalShadow.length=w,Z.directionalShadowMap.length=w,Z.pointShadow.length=D,Z.pointShadowMap.length=D,Z.spotShadow.length=C,Z.spotShadowMap.length=C,Z.directionalShadowMatrix.length=w,Z.pointShadowMatrix.length=D,Z.spotLightMatrix.length=C+S-_,Z.spotLightMap.length=S,Z.numSpotLightShadowsWithMaps=_,Z.numLightProbes=A,j.directionalLength=N,j.pointLength=k,j.spotLength=M,j.rectAreaLength=F,j.hemiLength=O,j.numDirectionalShadows=w,j.numPointShadows=D,j.numSpotShadows=C,j.numSpotMaps=S,j.numLightProbes=A,Z.version=q1++}function K(U,G){let q=0,E=0,N=0,k=0,M=0,F=G.matrixWorldInverse;for(let O=0,w=U.length;O<w;O++){let D=U[O];if(D.isDirectionalLight){let C=Z.directional[q];C.direction.setFromMatrixPosition(D.matrixWorld),W.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(W),C.direction.transformDirection(F),q++}else if(D.isSpotLight){let C=Z.spot[N];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(F),C.direction.setFromMatrixPosition(D.matrixWorld),W.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(W),C.direction.transformDirection(F),N++}else if(D.isRectAreaLight){let C=Z.rectArea[k];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(F),Y.identity(),H.copy(D.matrixWorld),H.premultiply(F),Y.extractRotation(H),C.halfWidth.set(D.width*0.5,0,0),C.halfHeight.set(0,D.height*0.5,0),C.halfWidth.applyMatrix4(Y),C.halfHeight.applyMatrix4(Y),k++}else if(D.isPointLight){let C=Z.point[E];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(F),E++}else if(D.isHemisphereLight){let C=Z.hemi[M];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(F),M++}}}return{setup:X,setupView:K,state:Z}}function nH(J){let Q=new N1(J),$=[],Z=[];function W(G){U.camera=G,$.length=0,Z.length=0}function H(G){$.push(G)}function Y(G){Z.push(G)}function X(){Q.setup($)}function K(G){Q.setupView($,G)}let U={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:X,setupLightsView:K,pushLight:H,pushShadow:Y}}function F1(J){let Q=new WeakMap;function $(W,H=0){let Y=Q.get(W),X;if(Y===void 0)X=new nH(J),Q.set(W,[X]);else if(H>=Y.length)X=new nH(J),Y.push(X);else X=Y[H];return X}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var O1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R1=`uniform sampler2D shadow_pass;
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
}`,k1=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],M1=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],sH=new f0,l7=new I,MZ=new I;function L1(J,Q,$){let Z=new b7,W=new P0,H=new P0,Y=new XJ,X=new QZ,K=new $Z,U={},G=$.maxTextureSize,q={[i9]:sJ,[sJ]:i9,[vJ]:vJ},E=new $9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new P0},radius:{value:4}},vertexShader:O1,fragmentShader:R1}),N=E.clone();N.defines.HORIZONTAL_PASS=1;let k=new VJ;k.setAttribute("position",new FJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new OJ(k,E),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z7;let O=this.type;this.render=function(_,A,j){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(_.length===0)return;if(_.type===TW)L0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),_.type=z7;let z=J.getRenderTarget(),B=J.getActiveCubeFace(),P=J.getActiveMipmapLevel(),x=J.state;if(x.setBlending(j9),x.buffers.depth.getReversed()===!0)x.buffers.color.setClear(0,0,0,0);else x.buffers.color.setClear(1,1,1,1);x.buffers.depth.setTest(!0),x.setScissorTest(!1);let u=O!==this.type;if(u)A.traverse(function(p){if(p.material)if(Array.isArray(p.material))p.material.forEach((o)=>o.needsUpdate=!0);else p.material.needsUpdate=!0});for(let p=0,o=_.length;p<o;p++){let d=_[p],l=d.shadow;if(l===void 0){L0("WebGLShadowMap:",d,"has no shadow.");continue}if(l.autoUpdate===!1&&l.needsUpdate===!1)continue;W.copy(l.mapSize);let i=l.getFrameExtents();if(W.multiply(i),H.copy(l.mapSize),W.x>G||W.y>G){if(W.x>G)H.x=Math.floor(G/i.x),W.x=H.x*i.x,l.mapSize.x=H.x;if(W.y>G)H.y=Math.floor(G/i.y),W.y=H.y*i.y,l.mapSize.y=H.y}if(l.map===null||u===!0){if(l.map!==null){if(l.map.depthTexture!==null)l.map.depthTexture.dispose(),l.map.depthTexture=null;l.map.dispose()}if(this.type===o8){if(d.isPointLight){L0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}l.map=new J9(W.x,W.y,{format:Z7,type:f9,minFilter:DJ,magFilter:DJ,generateMipmaps:!1}),l.map.texture.name=d.name+".shadowMap",l.map.depthTexture=new z8(W.x,W.y,v9),l.map.depthTexture.name=d.name+".shadowMapDepth",l.map.depthTexture.format=k8,l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=E9,l.map.depthTexture.magFilter=E9}else{if(d.isPointLight)l.map=new c6(W.x),l.map.depthTexture=new e$(W.x,o9);else l.map=new J9(W.x,W.y),l.map.depthTexture=new z8(W.x,W.y,o9);l.map.depthTexture.name=d.name+".shadowMap",l.map.depthTexture.format=k8;let W0=J.state.buffers.depth.getReversed();if(this.type===z7)l.map.depthTexture.compareFunction=W0?g6:x6,l.map.depthTexture.minFilter=DJ,l.map.depthTexture.magFilter=DJ;else l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=E9,l.map.depthTexture.magFilter=E9}l.camera.updateProjectionMatrix()}let U0=l.map.isWebGLCubeRenderTarget?6:1;for(let W0=0;W0<U0;W0++){if(l.map.isWebGLCubeRenderTarget)J.setRenderTarget(l.map,W0),J.clear();else{if(W0===0)J.setRenderTarget(l.map),J.clear();let F0=l.getViewport(W0);Y.set(H.x*F0.x,H.y*F0.y,H.x*F0.z,H.y*F0.w),x.viewport(Y)}if(d.isPointLight){let{camera:F0,matrix:v0}=l,GJ=d.distance||F0.far;if(GJ!==F0.far)F0.far=GJ,F0.updateProjectionMatrix();l7.setFromMatrixPosition(d.matrixWorld),F0.position.copy(l7),MZ.copy(F0.position),MZ.add(k1[W0]),F0.up.copy(M1[W0]),F0.lookAt(MZ),F0.updateMatrixWorld(),v0.makeTranslation(-l7.x,-l7.y,-l7.z),sH.multiplyMatrices(F0.projectionMatrix,F0.matrixWorldInverse),l._frustum.setFromProjectionMatrix(sH,F0.coordinateSystem,F0.reversedDepth)}else l.updateMatrices(d);Z=l.getFrustum(),C(A,j,l.camera,d,this.type)}if(l.isPointLightShadow!==!0&&this.type===o8)w(l,j);l.needsUpdate=!1}O=this.type,F.needsUpdate=!1,J.setRenderTarget(z,B,P)};function w(_,A){let j=Q.update(M);if(E.defines.VSM_SAMPLES!==_.blurSamples)E.defines.VSM_SAMPLES=_.blurSamples,N.defines.VSM_SAMPLES=_.blurSamples,E.needsUpdate=!0,N.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new J9(W.x,W.y,{format:Z7,type:f9});E.uniforms.shadow_pass.value=_.map.depthTexture,E.uniforms.resolution.value=_.mapSize,E.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(A,null,j,E,M,null),N.uniforms.shadow_pass.value=_.mapPass.texture,N.uniforms.resolution.value=_.mapSize,N.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(A,null,j,N,M,null)}function D(_,A,j,z){let B=null,P=j.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(P!==void 0)B=P;else if(B=j.isPointLight===!0?K:X,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let x=B.uuid,u=A.uuid,p=U[x];if(p===void 0)p={},U[x]=p;let o=p[u];if(o===void 0)o=B.clone(),p[u]=o,A.addEventListener("dispose",S);B=o}if(B.visible=A.visible,B.wireframe=A.wireframe,z===o8)B.side=A.shadowSide!==null?A.shadowSide:A.side;else B.side=A.shadowSide!==null?A.shadowSide:q[A.side];if(B.alphaMap=A.alphaMap,B.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,B.map=A.map,B.clipShadows=A.clipShadows,B.clippingPlanes=A.clippingPlanes,B.clipIntersection=A.clipIntersection,B.displacementMap=A.displacementMap,B.displacementScale=A.displacementScale,B.displacementBias=A.displacementBias,B.wireframeLinewidth=A.wireframeLinewidth,B.linewidth=A.linewidth,j.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let x=J.properties.get(B);x.light=j}return B}function C(_,A,j,z,B){if(_.visible===!1)return;if(_.layers.test(A.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&B===o8)&&(!_.frustumCulled||Z.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,_.matrixWorld);let u=Q.update(_),p=_.material;if(Array.isArray(p)){let o=u.groups;for(let d=0,l=o.length;d<l;d++){let i=o[d],U0=p[i.materialIndex];if(U0&&U0.visible){let W0=D(_,U0,z,B);_.onBeforeShadow(J,_,A,j,u,W0,i),J.renderBufferDirect(j,null,u,W0,_,i),_.onAfterShadow(J,_,A,j,u,W0,i)}}}else if(p.visible){let o=D(_,p,z,B);_.onBeforeShadow(J,_,A,j,u,o,null),J.renderBufferDirect(j,null,u,o,_,null),_.onAfterShadow(J,_,A,j,u,o,null)}}}let x=_.children;for(let u=0,p=x.length;u<p;u++)C(x[u],A,j,z,B)}function S(_){_.target.removeEventListener("dispose",S);for(let j in U){let z=U[j],B=_.target.uuid;if(B in z)z[B].dispose(),delete z[B]}}}var D1={[B6]:z6,[C6]:P6,[w6]:I6,[w7]:_6,[z6]:B6,[P6]:C6,[I6]:w6,[_6]:w7};function V1(J,Q){function $(){let y=!1,Z0=new XJ,J0=null,E0=new XJ(0,0,0,0);return{setMask:function(t){if(J0!==t&&!y)J.colorMask(t,t,t,t),J0=t},setLocked:function(t){y=t},setClear:function(t,m,k0,y0,HJ){if(HJ===!0)t*=y0,m*=y0,k0*=y0;if(Z0.set(t,m,k0,y0),E0.equals(Z0)===!1)J.clearColor(t,m,k0,y0),E0.copy(Z0)},reset:function(){y=!1,J0=null,E0.set(-1,0,0,0)}}}function Z(){let y=!1,Z0=!1,J0=null,E0=null,t=null;return{setReversed:function(m){if(Z0!==m){let k0=Q.get("EXT_clip_control");if(m)k0.clipControlEXT(k0.LOWER_LEFT_EXT,k0.ZERO_TO_ONE_EXT);else k0.clipControlEXT(k0.LOWER_LEFT_EXT,k0.NEGATIVE_ONE_TO_ONE_EXT);Z0=m;let y0=t;t=null,this.setClear(y0)}},getReversed:function(){return Z0},setTest:function(m){if(m)$0(J.DEPTH_TEST);else _0(J.DEPTH_TEST)},setMask:function(m){if(J0!==m&&!y)J.depthMask(m),J0=m},setFunc:function(m){if(Z0)m=D1[m];if(E0!==m){switch(m){case B6:J.depthFunc(J.NEVER);break;case z6:J.depthFunc(J.ALWAYS);break;case C6:J.depthFunc(J.LESS);break;case w7:J.depthFunc(J.LEQUAL);break;case w6:J.depthFunc(J.EQUAL);break;case _6:J.depthFunc(J.GEQUAL);break;case P6:J.depthFunc(J.GREATER);break;case I6:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}E0=m}},setLocked:function(m){y=m},setClear:function(m){if(t!==m){if(Z0)m=1-m;J.clearDepth(m),t=m}},reset:function(){y=!1,J0=null,E0=null,t=null,Z0=!1}}}function W(){let y=!1,Z0=null,J0=null,E0=null,t=null,m=null,k0=null,y0=null,HJ=null;return{setTest:function(o0){if(!y)if(o0)$0(J.STENCIL_TEST);else _0(J.STENCIL_TEST)},setMask:function(o0){if(Z0!==o0&&!y)J.stencilMask(o0),Z0=o0},setFunc:function(o0,V9,B9){if(J0!==o0||E0!==V9||t!==B9)J.stencilFunc(o0,V9,B9),J0=o0,E0=V9,t=B9},setOp:function(o0,V9,B9){if(m!==o0||k0!==V9||y0!==B9)J.stencilOp(o0,V9,B9),m=o0,k0=V9,y0=B9},setLocked:function(o0){y=o0},setClear:function(o0){if(HJ!==o0)J.clearStencil(o0),HJ=o0},reset:function(){y=!1,Z0=null,J0=null,E0=null,t=null,m=null,k0=null,y0=null,HJ=null}}}let H=new $,Y=new Z,X=new W,K=new WeakMap,U=new WeakMap,G={},q={},E=new WeakMap,N=[],k=null,M=!1,F=null,O=null,w=null,D=null,C=null,S=null,_=null,A=new w0(0,0,0),j=0,z=!1,B=null,P=null,x=null,u=null,p=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,l=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)l=parseFloat(/^WebGL (\d)/.exec(i)[1]),d=l>=1;else if(i.indexOf("OpenGL ES")!==-1)l=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),d=l>=2;let U0=null,W0={},F0=J.getParameter(J.SCISSOR_BOX),v0=J.getParameter(J.VIEWPORT),GJ=new XJ().fromArray(F0),JJ=new XJ().fromArray(v0);function s(y,Z0,J0,E0){let t=new Uint8Array(4),m=J.createTexture();J.bindTexture(y,m),J.texParameteri(y,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(y,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let k0=0;k0<J0;k0++)if(y===J.TEXTURE_3D||y===J.TEXTURE_2D_ARRAY)J.texImage3D(Z0,0,J.RGBA,1,1,E0,0,J.RGBA,J.UNSIGNED_BYTE,t);else J.texImage2D(Z0+k0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,t);return m}let Y0={};Y0[J.TEXTURE_2D]=s(J.TEXTURE_2D,J.TEXTURE_2D,1),Y0[J.TEXTURE_CUBE_MAP]=s(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y0[J.TEXTURE_2D_ARRAY]=s(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),Y0[J.TEXTURE_3D]=s(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),$0(J.DEPTH_TEST),Y.setFunc(w7),kJ(!1),T(iQ),$0(J.CULL_FACE),QJ(j9);function $0(y){if(G[y]!==!0)J.enable(y),G[y]=!0}function _0(y){if(G[y]!==!1)J.disable(y),G[y]=!1}function A0(y,Z0){if(q[y]!==Z0){if(J.bindFramebuffer(y,Z0),q[y]=Z0,y===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=Z0;if(y===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=Z0;return!0}return!1}function j0(y,Z0){let J0=N,E0=!1;if(y){if(J0=E.get(Z0),J0===void 0)J0=[],E.set(Z0,J0);let t=y.textures;if(J0.length!==t.length||J0[0]!==J.COLOR_ATTACHMENT0){for(let m=0,k0=t.length;m<k0;m++)J0[m]=J.COLOR_ATTACHMENT0+m;J0.length=t.length,E0=!0}}else if(J0[0]!==J.BACK)J0[0]=J.BACK,E0=!0;if(E0)J.drawBuffers(J0)}function RJ(y){if(k!==y)return J.useProgram(y),k=y,!0;return!1}let c0={[r8]:J.FUNC_ADD,[jW]:J.FUNC_SUBTRACT,[yW]:J.FUNC_REVERSE_SUBTRACT};c0[vW]=J.MIN,c0[fW]=J.MAX;let i0={[hW]:J.ZERO,[bW]:J.ONE,[xW]:J.SRC_COLOR,[pW]:J.SRC_ALPHA,[nW]:J.SRC_ALPHA_SATURATE,[dW]:J.DST_COLOR,[mW]:J.DST_ALPHA,[gW]:J.ONE_MINUS_SRC_COLOR,[lW]:J.ONE_MINUS_SRC_ALPHA,[cW]:J.ONE_MINUS_DST_COLOR,[uW]:J.ONE_MINUS_DST_ALPHA,[sW]:J.CONSTANT_COLOR,[iW]:J.ONE_MINUS_CONSTANT_COLOR,[oW]:J.CONSTANT_ALPHA,[aW]:J.ONE_MINUS_CONSTANT_ALPHA};function QJ(y,Z0,J0,E0,t,m,k0,y0,HJ,o0){if(y===j9){if(M===!0)_0(J.BLEND),M=!1;return}if(M===!1)$0(J.BLEND),M=!0;if(y!==SW){if(y!==F||o0!==z){if(O!==r8||C!==r8)J.blendEquation(J.FUNC_ADD),O=r8,C=r8;if(o0)switch(y){case C7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case a8:J.blendFunc(J.ONE,J.ONE);break;case oQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case aQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:I0("WebGLState: Invalid blending: ",y);break}else switch(y){case C7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case a8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case oQ:I0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case aQ:I0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:I0("WebGLState: Invalid blending: ",y);break}w=null,D=null,S=null,_=null,A.set(0,0,0),j=0,F=y,z=o0}return}if(t=t||Z0,m=m||J0,k0=k0||E0,Z0!==O||t!==C)J.blendEquationSeparate(c0[Z0],c0[t]),O=Z0,C=t;if(J0!==w||E0!==D||m!==S||k0!==_)J.blendFuncSeparate(i0[J0],i0[E0],i0[m],i0[k0]),w=J0,D=E0,S=m,_=k0;if(y0.equals(A)===!1||HJ!==j)J.blendColor(y0.r,y0.g,y0.b,HJ),A.copy(y0),j=HJ;F=y,z=!1}function m0(y,Z0){y.side===vJ?_0(J.CULL_FACE):$0(J.CULL_FACE);let J0=y.side===sJ;if(Z0)J0=!J0;kJ(J0),y.blending===C7&&y.transparent===!1?QJ(j9):QJ(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),Y.setFunc(y.depthFunc),Y.setTest(y.depthTest),Y.setMask(y.depthWrite),H.setMask(y.colorWrite);let E0=y.stencilWrite;if(X.setTest(E0),E0)X.setMask(y.stencilWriteMask),X.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),X.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass);x0(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?$0(J.SAMPLE_ALPHA_TO_COVERAGE):_0(J.SAMPLE_ALPHA_TO_COVERAGE)}function kJ(y){if(B!==y){if(y)J.frontFace(J.CW);else J.frontFace(J.CCW);B=y}}function T(y){if(y!==IW){if($0(J.CULL_FACE),y!==P)if(y===iQ)J.cullFace(J.BACK);else if(y===AW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else _0(J.CULL_FACE);P=y}function PJ(y){if(y!==x){if(d)J.lineWidth(y);x=y}}function x0(y,Z0,J0){if(y){if($0(J.POLYGON_OFFSET_FILL),u!==Z0||p!==J0)J.polygonOffset(Z0,J0),u=Z0,p=J0}else _0(J.POLYGON_OFFSET_FILL)}function KJ(y){if(y)$0(J.SCISSOR_TEST);else _0(J.SCISSOR_TEST)}function V0(y){if(y===void 0)y=J.TEXTURE0+o-1;if(U0!==y)J.activeTexture(y),U0=y}function WJ(y,Z0,J0){if(J0===void 0)if(U0===null)J0=J.TEXTURE0+o-1;else J0=U0;let E0=W0[J0];if(E0===void 0)E0={type:void 0,texture:void 0},W0[J0]=E0;if(E0.type!==y||E0.texture!==Z0){if(U0!==J0)J.activeTexture(J0),U0=J0;J.bindTexture(y,Z0||Y0[y]),E0.type=y,E0.texture=Z0}}function V(){let y=W0[U0];if(y!==void 0&&y.type!==void 0)J.bindTexture(y.type,null),y.type=void 0,y.texture=void 0}function R(){try{J.compressedTexImage2D(...arguments)}catch(y){I0("WebGLState:",y)}}function h(){try{J.compressedTexImage3D(...arguments)}catch(y){I0("WebGLState:",y)}}function n(){try{J.texSubImage2D(...arguments)}catch(y){I0("WebGLState:",y)}}function a(){try{J.texSubImage3D(...arguments)}catch(y){I0("WebGLState:",y)}}function c(){try{J.compressedTexSubImage2D(...arguments)}catch(y){I0("WebGLState:",y)}}function O0(){try{J.compressedTexSubImage3D(...arguments)}catch(y){I0("WebGLState:",y)}}function Q0(){try{J.texStorage2D(...arguments)}catch(y){I0("WebGLState:",y)}}function B0(){try{J.texStorage3D(...arguments)}catch(y){I0("WebGLState:",y)}}function T0(){try{J.texImage2D(...arguments)}catch(y){I0("WebGLState:",y)}}function r(){try{J.texImage3D(...arguments)}catch(y){I0("WebGLState:",y)}}function e(y){if(GJ.equals(y)===!1)J.scissor(y.x,y.y,y.z,y.w),GJ.copy(y)}function R0(y){if(JJ.equals(y)===!1)J.viewport(y.x,y.y,y.z,y.w),JJ.copy(y)}function M0(y,Z0){let J0=U.get(Z0);if(J0===void 0)J0=new WeakMap,U.set(Z0,J0);let E0=J0.get(y);if(E0===void 0)E0=J.getUniformBlockIndex(Z0,y.name),J0.set(y,E0)}function G0(y,Z0){let E0=U.get(Z0).get(y);if(K.get(Z0)!==E0)J.uniformBlockBinding(Z0,E0,y.__bindingPointIndex),K.set(Z0,E0)}function g0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},U0=null,W0={},q={},E=new WeakMap,N=[],k=null,M=!1,F=null,O=null,w=null,D=null,C=null,S=null,_=null,A=new w0(0,0,0),j=0,z=!1,B=null,P=null,x=null,u=null,p=null,GJ.set(0,0,J.canvas.width,J.canvas.height),JJ.set(0,0,J.canvas.width,J.canvas.height),H.reset(),Y.reset(),X.reset()}return{buffers:{color:H,depth:Y,stencil:X},enable:$0,disable:_0,bindFramebuffer:A0,drawBuffers:j0,useProgram:RJ,setBlending:QJ,setMaterial:m0,setFlipSided:kJ,setCullFace:T,setLineWidth:PJ,setPolygonOffset:x0,setScissorTest:KJ,activeTexture:V0,bindTexture:WJ,unbindTexture:V,compressedTexImage2D:R,compressedTexImage3D:h,texImage2D:T0,texImage3D:r,updateUBOMapping:M0,uniformBlockBinding:G0,texStorage2D:Q0,texStorage3D:B0,texSubImage2D:n,texSubImage3D:a,compressedTexSubImage2D:c,compressedTexSubImage3D:O0,scissor:e,viewport:R0,reset:g0}}function B1(J,Q,$,Z,W,H,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new P0,G=new WeakMap,q,E=new WeakMap,N=!1;try{N=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(V){}function k(V,R){return N?new OffscreenCanvas(V,R):n8("canvas")}function M(V,R,h){let n=1,a=WJ(V);if(a.width>h||a.height>h)n=h/Math.max(a.width,a.height);if(n<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let c=Math.floor(n*a.width),O0=Math.floor(n*a.height);if(q===void 0)q=k(c,O0);let Q0=R?k(c,O0):q;return Q0.width=c,Q0.height=O0,Q0.getContext("2d").drawImage(V,0,0,c,O0),L0("WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+c+"x"+O0+")."),Q0}else{if("data"in V)L0("WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");return V}return V}function F(V){return V.generateMipmaps}function O(V){J.generateMipmap(V)}function w(V){if(V.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(V.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function D(V,R,h,n,a=!1){if(V!==null){if(J[V]!==void 0)return J[V];L0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let c=R;if(R===J.RED){if(h===J.FLOAT)c=J.R32F;if(h===J.HALF_FLOAT)c=J.R16F;if(h===J.UNSIGNED_BYTE)c=J.R8}if(R===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)c=J.R8UI;if(h===J.UNSIGNED_SHORT)c=J.R16UI;if(h===J.UNSIGNED_INT)c=J.R32UI;if(h===J.BYTE)c=J.R8I;if(h===J.SHORT)c=J.R16I;if(h===J.INT)c=J.R32I}if(R===J.RG){if(h===J.FLOAT)c=J.RG32F;if(h===J.HALF_FLOAT)c=J.RG16F;if(h===J.UNSIGNED_BYTE)c=J.RG8}if(R===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)c=J.RG8UI;if(h===J.UNSIGNED_SHORT)c=J.RG16UI;if(h===J.UNSIGNED_INT)c=J.RG32UI;if(h===J.BYTE)c=J.RG8I;if(h===J.SHORT)c=J.RG16I;if(h===J.INT)c=J.RG32I}if(R===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)c=J.RGB8UI;if(h===J.UNSIGNED_SHORT)c=J.RGB16UI;if(h===J.UNSIGNED_INT)c=J.RGB32UI;if(h===J.BYTE)c=J.RGB8I;if(h===J.SHORT)c=J.RGB16I;if(h===J.INT)c=J.RGB32I}if(R===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(h===J.UNSIGNED_INT)c=J.RGBA32UI;if(h===J.BYTE)c=J.RGBA8I;if(h===J.SHORT)c=J.RGBA16I;if(h===J.INT)c=J.RGBA32I}if(R===J.RGB){if(h===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(R===J.RGBA){let O0=a?u$:p0.getTransfer(n);if(h===J.FLOAT)c=J.RGBA32F;if(h===J.HALF_FLOAT)c=J.RGBA16F;if(h===J.UNSIGNED_BYTE)c=O0===ZJ?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function C(V,R){let h;if(V){if(R===null||R===o9||R===$7)h=J.DEPTH24_STENCIL8;else if(R===v9)h=J.DEPTH32F_STENCIL8;else if(R===I7)h=J.DEPTH24_STENCIL8,L0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===o9||R===$7)h=J.DEPTH_COMPONENT24;else if(R===v9)h=J.DEPTH_COMPONENT32F;else if(R===I7)h=J.DEPTH_COMPONENT16;return h}function S(V,R){if(F(V)===!0||V.isFramebufferTexture&&V.minFilter!==E9&&V.minFilter!==DJ)return Math.log2(Math.max(R.width,R.height))+1;else if(V.mipmaps!==void 0&&V.mipmaps.length>0)return V.mipmaps.length;else if(V.isCompressedTexture&&Array.isArray(V.image))return R.mipmaps.length;else return 1}function _(V){let R=V.target;if(R.removeEventListener("dispose",_),j(R),R.isVideoTexture)G.delete(R)}function A(V){let R=V.target;R.removeEventListener("dispose",A),B(R)}function j(V){let R=Z.get(V);if(R.__webglInit===void 0)return;let h=V.source,n=E.get(h);if(n){let a=n[R.__cacheKey];if(a.usedTimes--,a.usedTimes===0)z(V);if(Object.keys(n).length===0)E.delete(h)}Z.remove(V)}function z(V){let R=Z.get(V);J.deleteTexture(R.__webglTexture);let h=V.source,n=E.get(h);delete n[R.__cacheKey],Y.memory.textures--}function B(V){let R=Z.get(V);if(V.depthTexture)V.depthTexture.dispose(),Z.remove(V.depthTexture);if(V.isWebGLCubeRenderTarget)for(let n=0;n<6;n++){if(Array.isArray(R.__webglFramebuffer[n]))for(let a=0;a<R.__webglFramebuffer[n].length;a++)J.deleteFramebuffer(R.__webglFramebuffer[n][a]);else J.deleteFramebuffer(R.__webglFramebuffer[n]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[n])}else{if(Array.isArray(R.__webglFramebuffer))for(let n=0;n<R.__webglFramebuffer.length;n++)J.deleteFramebuffer(R.__webglFramebuffer[n]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let n=0;n<R.__webglColorRenderbuffer.length;n++)if(R.__webglColorRenderbuffer[n])J.deleteRenderbuffer(R.__webglColorRenderbuffer[n])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let h=V.textures;for(let n=0,a=h.length;n<a;n++){let c=Z.get(h[n]);if(c.__webglTexture)J.deleteTexture(c.__webglTexture),Y.memory.textures--;Z.remove(h[n])}Z.remove(V)}let P=0;function x(){P=0}function u(){let V=P;if(V>=W.maxTextures)L0("WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+W.maxTextures);return P+=1,V}function p(V){let R=[];return R.push(V.wrapS),R.push(V.wrapT),R.push(V.wrapR||0),R.push(V.magFilter),R.push(V.minFilter),R.push(V.anisotropy),R.push(V.internalFormat),R.push(V.format),R.push(V.type),R.push(V.generateMipmaps),R.push(V.premultiplyAlpha),R.push(V.flipY),R.push(V.unpackAlignment),R.push(V.colorSpace),R.join()}function o(V,R){let h=Z.get(V);if(V.isVideoTexture)KJ(V);if(V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&h.__version!==V.version){let n=V.image;if(n===null)L0("WebGLRenderer: Texture marked for update but no image data found.");else if(n.complete===!1)L0("WebGLRenderer: Texture marked for update but image is incomplete");else{Y0(h,V,R);return}}else if(V.isExternalTexture)h.__webglTexture=V.sourceTexture?V.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+R)}function d(V,R){let h=Z.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&h.__version!==V.version){Y0(h,V,R);return}else if(V.isExternalTexture)h.__webglTexture=V.sourceTexture?V.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+R)}function l(V,R){let h=Z.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&h.__version!==V.version){Y0(h,V,R);return}$.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+R)}function i(V,R){let h=Z.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&h.__version!==V.version){$0(h,V,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+R)}let U0={[e8]:J.REPEAT,[J7]:J.CLAMP_TO_EDGE,[S6]:J.MIRRORED_REPEAT},W0={[E9]:J.NEAREST,[j6]:J.NEAREST_MIPMAP_NEAREST,[R8]:J.NEAREST_MIPMAP_LINEAR,[DJ]:J.LINEAR,[Q7]:J.LINEAR_MIPMAP_NEAREST,[y9]:J.LINEAR_MIPMAP_LINEAR},F0={[UH]:J.NEVER,[FH]:J.ALWAYS,[GH]:J.LESS,[x6]:J.LEQUAL,[qH]:J.EQUAL,[g6]:J.GEQUAL,[EH]:J.GREATER,[NH]:J.NOTEQUAL};function v0(V,R){if(R.type===v9&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===DJ||R.magFilter===Q7||R.magFilter===R8||R.magFilter===y9||R.minFilter===DJ||R.minFilter===Q7||R.minFilter===R8||R.minFilter===y9))L0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(V,J.TEXTURE_WRAP_S,U0[R.wrapS]),J.texParameteri(V,J.TEXTURE_WRAP_T,U0[R.wrapT]),V===J.TEXTURE_3D||V===J.TEXTURE_2D_ARRAY)J.texParameteri(V,J.TEXTURE_WRAP_R,U0[R.wrapR]);if(J.texParameteri(V,J.TEXTURE_MAG_FILTER,W0[R.magFilter]),J.texParameteri(V,J.TEXTURE_MIN_FILTER,W0[R.minFilter]),R.compareFunction)J.texParameteri(V,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(V,J.TEXTURE_COMPARE_FUNC,F0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===E9)return;if(R.minFilter!==R8&&R.minFilter!==y9)return;if(R.type===v9&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(V,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,W.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function GJ(V,R){let h=!1;if(V.__webglInit===void 0)V.__webglInit=!0,R.addEventListener("dispose",_);let n=R.source,a=E.get(n);if(a===void 0)a={},E.set(n,a);let c=p(R);if(c!==V.__cacheKey){if(a[c]===void 0)a[c]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,h=!0;a[c].usedTimes++;let O0=a[V.__cacheKey];if(O0!==void 0){if(a[V.__cacheKey].usedTimes--,O0.usedTimes===0)z(R)}V.__cacheKey=c,V.__webglTexture=a[c].texture}return h}function JJ(V,R,h){return Math.floor(Math.floor(V/h)/R)}function s(V,R,h,n){let c=V.updateRanges;if(c.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,h,n,R.data);else{c.sort((r,e)=>r.start-e.start);let O0=0;for(let r=1;r<c.length;r++){let e=c[O0],R0=c[r],M0=e.start+e.count,G0=JJ(R0.start,R.width,4),g0=JJ(e.start,R.width,4);if(R0.start<=M0+1&&G0===g0&&JJ(R0.start+R0.count-1,R.width,4)===G0)e.count=Math.max(e.count,R0.start+R0.count-e.start);else++O0,c[O0]=R0}c.length=O0+1;let Q0=J.getParameter(J.UNPACK_ROW_LENGTH),B0=J.getParameter(J.UNPACK_SKIP_PIXELS),T0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let r=0,e=c.length;r<e;r++){let R0=c[r],M0=Math.floor(R0.start/4),G0=Math.ceil(R0.count/4),g0=M0%R.width,y=Math.floor(M0/R.width),Z0=G0,J0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,g0),J.pixelStorei(J.UNPACK_SKIP_ROWS,y),$.texSubImage2D(J.TEXTURE_2D,0,g0,y,Z0,1,h,n,R.data)}V.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,Q0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,B0),J.pixelStorei(J.UNPACK_SKIP_ROWS,T0)}}function Y0(V,R,h){let n=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)n=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)n=J.TEXTURE_3D;let a=GJ(V,R),c=R.source;$.bindTexture(n,V.__webglTexture,J.TEXTURE0+h);let O0=Z.get(c);if(c.version!==O0.__version||a===!0){$.activeTexture(J.TEXTURE0+h);let Q0=p0.getPrimaries(p0.workingColorSpace),B0=R.colorSpace===L8?null:p0.getPrimaries(R.colorSpace),T0=R.colorSpace===L8||Q0===B0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,T0);let r=M(R.image,!1,W.maxTextureSize);r=V0(R,r);let e=H.convert(R.format,R.colorSpace),R0=H.convert(R.type),M0=D(R.internalFormat,e,R0,R.colorSpace,R.isVideoTexture);v0(n,R);let G0,g0=R.mipmaps,y=R.isVideoTexture!==!0,Z0=O0.__version===void 0||a===!0,J0=c.dataReady,E0=S(R,r);if(R.isDepthTexture){if(M0=C(R.format===M8,R.type),Z0)if(y)$.texStorage2D(J.TEXTURE_2D,1,M0,r.width,r.height);else $.texImage2D(J.TEXTURE_2D,0,M0,r.width,r.height,0,e,R0,null)}else if(R.isDataTexture)if(g0.length>0){if(y&&Z0)$.texStorage2D(J.TEXTURE_2D,E0,M0,g0[0].width,g0[0].height);for(let t=0,m=g0.length;t<m;t++)if(G0=g0[t],y){if(J0)$.texSubImage2D(J.TEXTURE_2D,t,0,0,G0.width,G0.height,e,R0,G0.data)}else $.texImage2D(J.TEXTURE_2D,t,M0,G0.width,G0.height,0,e,R0,G0.data);R.generateMipmaps=!1}else if(y){if(Z0)$.texStorage2D(J.TEXTURE_2D,E0,M0,r.width,r.height);if(J0)s(R,r,e,R0)}else $.texImage2D(J.TEXTURE_2D,0,M0,r.width,r.height,0,e,R0,r.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(y&&Z0)$.texStorage3D(J.TEXTURE_2D_ARRAY,E0,M0,g0[0].width,g0[0].height,r.depth);for(let t=0,m=g0.length;t<m;t++)if(G0=g0[t],R.format!==R9)if(e!==null)if(y){if(J0)if(R.layerUpdates.size>0){let k0=EZ(G0.width,G0.height,R.format,R.type);for(let y0 of R.layerUpdates){let HJ=G0.data.subarray(y0*k0/G0.data.BYTES_PER_ELEMENT,(y0+1)*k0/G0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,t,0,0,y0,G0.width,G0.height,1,e,HJ)}R.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,t,0,0,0,G0.width,G0.height,r.depth,e,G0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,t,M0,G0.width,G0.height,r.depth,0,G0.data,0,0);else L0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(y){if(J0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,t,0,0,0,G0.width,G0.height,r.depth,e,R0,G0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,t,M0,G0.width,G0.height,r.depth,0,e,R0,G0.data)}else{if(y&&Z0)$.texStorage2D(J.TEXTURE_2D,E0,M0,g0[0].width,g0[0].height);for(let t=0,m=g0.length;t<m;t++)if(G0=g0[t],R.format!==R9)if(e!==null)if(y){if(J0)$.compressedTexSubImage2D(J.TEXTURE_2D,t,0,0,G0.width,G0.height,e,G0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,t,M0,G0.width,G0.height,0,G0.data);else L0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(y){if(J0)$.texSubImage2D(J.TEXTURE_2D,t,0,0,G0.width,G0.height,e,R0,G0.data)}else $.texImage2D(J.TEXTURE_2D,t,M0,G0.width,G0.height,0,e,R0,G0.data)}else if(R.isDataArrayTexture)if(y){if(Z0)$.texStorage3D(J.TEXTURE_2D_ARRAY,E0,M0,r.width,r.height,r.depth);if(J0)if(R.layerUpdates.size>0){let t=EZ(r.width,r.height,R.format,R.type);for(let m of R.layerUpdates){let k0=r.data.subarray(m*t/r.data.BYTES_PER_ELEMENT,(m+1)*t/r.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,m,r.width,r.height,1,e,R0,k0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,r.width,r.height,r.depth,e,R0,r.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,M0,r.width,r.height,r.depth,0,e,R0,r.data);else if(R.isData3DTexture)if(y){if(Z0)$.texStorage3D(J.TEXTURE_3D,E0,M0,r.width,r.height,r.depth);if(J0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,r.width,r.height,r.depth,e,R0,r.data)}else $.texImage3D(J.TEXTURE_3D,0,M0,r.width,r.height,r.depth,0,e,R0,r.data);else if(R.isFramebufferTexture){if(Z0)if(y)$.texStorage2D(J.TEXTURE_2D,E0,M0,r.width,r.height);else{let{width:t,height:m}=r;for(let k0=0;k0<E0;k0++)$.texImage2D(J.TEXTURE_2D,k0,M0,t,m,0,e,R0,null),t>>=1,m>>=1}}else if(g0.length>0){if(y&&Z0){let t=WJ(g0[0]);$.texStorage2D(J.TEXTURE_2D,E0,M0,t.width,t.height)}for(let t=0,m=g0.length;t<m;t++)if(G0=g0[t],y){if(J0)$.texSubImage2D(J.TEXTURE_2D,t,0,0,e,R0,G0)}else $.texImage2D(J.TEXTURE_2D,t,M0,e,R0,G0);R.generateMipmaps=!1}else if(y){if(Z0){let t=WJ(r);$.texStorage2D(J.TEXTURE_2D,E0,M0,t.width,t.height)}if(J0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,e,R0,r)}else $.texImage2D(J.TEXTURE_2D,0,M0,e,R0,r);if(F(R))O(n);if(O0.__version=c.version,R.onUpdate)R.onUpdate(R)}V.__version=R.version}function $0(V,R,h){if(R.image.length!==6)return;let n=GJ(V,R),a=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,V.__webglTexture,J.TEXTURE0+h);let c=Z.get(a);if(a.version!==c.__version||n===!0){$.activeTexture(J.TEXTURE0+h);let O0=p0.getPrimaries(p0.workingColorSpace),Q0=R.colorSpace===L8?null:p0.getPrimaries(R.colorSpace),B0=R.colorSpace===L8||O0===Q0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,B0);let T0=R.isCompressedTexture||R.image[0].isCompressedTexture,r=R.image[0]&&R.image[0].isDataTexture,e=[];for(let m=0;m<6;m++){if(!T0&&!r)e[m]=M(R.image[m],!0,W.maxCubemapSize);else e[m]=r?R.image[m].image:R.image[m];e[m]=V0(R,e[m])}let R0=e[0],M0=H.convert(R.format,R.colorSpace),G0=H.convert(R.type),g0=D(R.internalFormat,M0,G0,R.colorSpace),y=R.isVideoTexture!==!0,Z0=c.__version===void 0||n===!0,J0=a.dataReady,E0=S(R,R0);v0(J.TEXTURE_CUBE_MAP,R);let t;if(T0){if(y&&Z0)$.texStorage2D(J.TEXTURE_CUBE_MAP,E0,g0,R0.width,R0.height);for(let m=0;m<6;m++){t=e[m].mipmaps;for(let k0=0;k0<t.length;k0++){let y0=t[k0];if(R.format!==R9)if(M0!==null)if(y){if(J0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,k0,0,0,y0.width,y0.height,M0,y0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,k0,g0,y0.width,y0.height,0,y0.data);else L0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(y){if(J0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,k0,0,0,y0.width,y0.height,M0,G0,y0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,k0,g0,y0.width,y0.height,0,M0,G0,y0.data)}}}else{if(t=R.mipmaps,y&&Z0){if(t.length>0)E0++;let m=WJ(e[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,E0,g0,m.width,m.height)}for(let m=0;m<6;m++)if(r){if(y){if(J0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0,0,0,e[m].width,e[m].height,M0,G0,e[m].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0,g0,e[m].width,e[m].height,0,M0,G0,e[m].data);for(let k0=0;k0<t.length;k0++){let HJ=t[k0].image[m].image;if(y){if(J0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,k0+1,0,0,HJ.width,HJ.height,M0,G0,HJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,k0+1,g0,HJ.width,HJ.height,0,M0,G0,HJ.data)}}else{if(y){if(J0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0,0,0,M0,G0,e[m])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0,g0,M0,G0,e[m]);for(let k0=0;k0<t.length;k0++){let y0=t[k0];if(y){if(J0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,k0+1,0,0,M0,G0,y0.image[m])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+m,k0+1,g0,M0,G0,y0.image[m])}}}if(F(R))O(J.TEXTURE_CUBE_MAP);if(c.__version=a.version,R.onUpdate)R.onUpdate(R)}V.__version=R.version}function _0(V,R,h,n,a,c){let O0=H.convert(h.format,h.colorSpace),Q0=H.convert(h.type),B0=D(h.internalFormat,O0,Q0,h.colorSpace),T0=Z.get(R),r=Z.get(h);if(r.__renderTarget=R,!T0.__hasExternalTextures){let e=Math.max(1,R.width>>c),R0=Math.max(1,R.height>>c);if(a===J.TEXTURE_3D||a===J.TEXTURE_2D_ARRAY)$.texImage3D(a,c,B0,e,R0,R.depth,0,O0,Q0,null);else $.texImage2D(a,c,B0,e,R0,0,O0,Q0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,V),x0(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,n,a,r.__webglTexture,0,PJ(R));else if(a===J.TEXTURE_2D||a>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,n,a,r.__webglTexture,c);$.bindFramebuffer(J.FRAMEBUFFER,null)}function A0(V,R,h){if(J.bindRenderbuffer(J.RENDERBUFFER,V),R.depthBuffer){let n=R.depthTexture,a=n&&n.isDepthTexture?n.type:null,c=C(R.stencilBuffer,a),O0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(x0(R))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,PJ(R),c,R.width,R.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,PJ(R),c,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,c,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,O0,J.RENDERBUFFER,V)}else{let n=R.textures;for(let a=0;a<n.length;a++){let c=n[a],O0=H.convert(c.format,c.colorSpace),Q0=H.convert(c.type),B0=D(c.internalFormat,O0,Q0,c.colorSpace);if(x0(R))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,PJ(R),B0,R.width,R.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,PJ(R),B0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,B0,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function j0(V,R,h){let n=R.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,V),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let a=Z.get(R.depthTexture);if(a.__renderTarget=R,!a.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;if(n){if(a.__webglInit===void 0)a.__webglInit=!0,R.depthTexture.addEventListener("dispose",_);if(a.__webglTexture===void 0){a.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,a.__webglTexture),v0(J.TEXTURE_CUBE_MAP,R.depthTexture);let T0=H.convert(R.depthTexture.format),r=H.convert(R.depthTexture.type),e;if(R.depthTexture.format===k8)e=J.DEPTH_COMPONENT24;else if(R.depthTexture.format===M8)e=J.DEPTH24_STENCIL8;for(let R0=0;R0<6;R0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,0,e,R.width,R.height,0,T0,r,null)}}else o(R.depthTexture,0);let c=a.__webglTexture,O0=PJ(R),Q0=n?J.TEXTURE_CUBE_MAP_POSITIVE_X+h:J.TEXTURE_2D,B0=R.depthTexture.format===M8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(R.depthTexture.format===k8)if(x0(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,B0,Q0,c,0,O0);else J.framebufferTexture2D(J.FRAMEBUFFER,B0,Q0,c,0);else if(R.depthTexture.format===M8)if(x0(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,B0,Q0,c,0,O0);else J.framebufferTexture2D(J.FRAMEBUFFER,B0,Q0,c,0);else throw Error("Unknown depthTexture format")}function RJ(V){let R=Z.get(V),h=V.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==V.depthTexture){let n=V.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(n){let a=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,n.removeEventListener("dispose",a)};n.addEventListener("dispose",a),R.__depthDisposeCallback=a}R.__boundDepthTexture=n}if(V.depthTexture&&!R.__autoAllocateDepthBuffer)if(h)for(let n=0;n<6;n++)j0(R.__webglFramebuffer[n],V,n);else{let n=V.texture.mipmaps;if(n&&n.length>0)j0(R.__webglFramebuffer[0],V,0);else j0(R.__webglFramebuffer,V,0)}else if(h){R.__webglDepthbuffer=[];for(let n=0;n<6;n++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[n]),R.__webglDepthbuffer[n]===void 0)R.__webglDepthbuffer[n]=J.createRenderbuffer(),A0(R.__webglDepthbuffer[n],V,!1);else{let a=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,c=R.__webglDepthbuffer[n];J.bindRenderbuffer(J.RENDERBUFFER,c),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,c)}}else{let n=V.texture.mipmaps;if(n&&n.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),A0(R.__webglDepthbuffer,V,!1);else{let a=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,c=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,c),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,c)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function c0(V,R,h){let n=Z.get(V);if(R!==void 0)_0(n.__webglFramebuffer,V,V.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)RJ(V)}function i0(V){let R=V.texture,h=Z.get(V),n=Z.get(R);V.addEventListener("dispose",A);let a=V.textures,c=V.isWebGLCubeRenderTarget===!0,O0=a.length>1;if(!O0){if(n.__webglTexture===void 0)n.__webglTexture=J.createTexture();n.__version=R.version,Y.memory.textures++}if(c){h.__webglFramebuffer=[];for(let Q0=0;Q0<6;Q0++)if(R.mipmaps&&R.mipmaps.length>0){h.__webglFramebuffer[Q0]=[];for(let B0=0;B0<R.mipmaps.length;B0++)h.__webglFramebuffer[Q0][B0]=J.createFramebuffer()}else h.__webglFramebuffer[Q0]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){h.__webglFramebuffer=[];for(let Q0=0;Q0<R.mipmaps.length;Q0++)h.__webglFramebuffer[Q0]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(O0)for(let Q0=0,B0=a.length;Q0<B0;Q0++){let T0=Z.get(a[Q0]);if(T0.__webglTexture===void 0)T0.__webglTexture=J.createTexture(),Y.memory.textures++}if(V.samples>0&&x0(V)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let Q0=0;Q0<a.length;Q0++){let B0=a[Q0];h.__webglColorRenderbuffer[Q0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[Q0]);let T0=H.convert(B0.format,B0.colorSpace),r=H.convert(B0.type),e=D(B0.internalFormat,T0,r,B0.colorSpace,V.isXRRenderTarget===!0),R0=PJ(V);J.renderbufferStorageMultisample(J.RENDERBUFFER,R0,e,V.width,V.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Q0,J.RENDERBUFFER,h.__webglColorRenderbuffer[Q0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),V.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),A0(h.__webglDepthRenderbuffer,V,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(c){$.bindTexture(J.TEXTURE_CUBE_MAP,n.__webglTexture),v0(J.TEXTURE_CUBE_MAP,R);for(let Q0=0;Q0<6;Q0++)if(R.mipmaps&&R.mipmaps.length>0)for(let B0=0;B0<R.mipmaps.length;B0++)_0(h.__webglFramebuffer[Q0][B0],V,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,B0);else _0(h.__webglFramebuffer[Q0],V,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0);if(F(R))O(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(O0){for(let Q0=0,B0=a.length;Q0<B0;Q0++){let T0=a[Q0],r=Z.get(T0),e=J.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)e=V.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(e,r.__webglTexture),v0(e,T0),_0(h.__webglFramebuffer,V,T0,J.COLOR_ATTACHMENT0+Q0,e,0),F(T0))O(e)}$.unbindTexture()}else{let Q0=J.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)Q0=V.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(Q0,n.__webglTexture),v0(Q0,R),R.mipmaps&&R.mipmaps.length>0)for(let B0=0;B0<R.mipmaps.length;B0++)_0(h.__webglFramebuffer[B0],V,R,J.COLOR_ATTACHMENT0,Q0,B0);else _0(h.__webglFramebuffer,V,R,J.COLOR_ATTACHMENT0,Q0,0);if(F(R))O(Q0);$.unbindTexture()}if(V.depthBuffer)RJ(V)}function QJ(V){let R=V.textures;for(let h=0,n=R.length;h<n;h++){let a=R[h];if(F(a)){let c=w(V),O0=Z.get(a).__webglTexture;$.bindTexture(c,O0),O(c),$.unbindTexture()}}}let m0=[],kJ=[];function T(V){if(V.samples>0){if(x0(V)===!1){let{textures:R,width:h,height:n}=V,a=J.COLOR_BUFFER_BIT,c=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,O0=Z.get(V),Q0=R.length>1;if(Q0)for(let T0=0;T0<R.length;T0++)$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,O0.__webglMultisampledFramebuffer);let B0=V.texture.mipmaps;if(B0&&B0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglFramebuffer);for(let T0=0;T0<R.length;T0++){if(V.resolveDepthBuffer){if(V.depthBuffer)a|=J.DEPTH_BUFFER_BIT;if(V.stencilBuffer&&V.resolveStencilBuffer)a|=J.STENCIL_BUFFER_BIT}if(Q0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,O0.__webglColorRenderbuffer[T0]);let r=Z.get(R[T0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,r,0)}if(J.blitFramebuffer(0,0,h,n,0,0,h,n,a,J.NEAREST),K===!0){if(m0.length=0,kJ.length=0,m0.push(J.COLOR_ATTACHMENT0+T0),V.depthBuffer&&V.resolveDepthBuffer===!1)m0.push(c),kJ.push(c),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,kJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,m0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),Q0)for(let T0=0;T0<R.length;T0++){$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.RENDERBUFFER,O0.__webglColorRenderbuffer[T0]);let r=Z.get(R[T0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.TEXTURE_2D,r,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&K){let R=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function PJ(V){return Math.min(W.maxSamples,V.samples)}function x0(V){let R=Z.get(V);return V.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function KJ(V){let R=Y.render.frame;if(G.get(V)!==R)G.set(V,R),V.update()}function V0(V,R){let{colorSpace:h,format:n,type:a}=V;if(V.isCompressedTexture===!0||V.isVideoTexture===!0)return R;if(h!==IJ&&h!==L8)if(p0.getTransfer(h)===ZJ){if(n!==R9||a!==N9)L0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else I0("WebGLTextures: Unsupported texture color space:",h);return R}function WJ(V){if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement)U.width=V.naturalWidth||V.width,U.height=V.naturalHeight||V.height;else if(typeof VideoFrame<"u"&&V instanceof VideoFrame)U.width=V.displayWidth,U.height=V.displayHeight;else U.width=V.width,U.height=V.height;return U}this.allocateTextureUnit=u,this.resetTextureUnits=x,this.setTexture2D=o,this.setTexture2DArray=d,this.setTexture3D=l,this.setTextureCube=i,this.rebindTextures=c0,this.setupRenderTarget=i0,this.updateRenderTargetMipmap=QJ,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=RJ,this.setupFrameBufferTexture=_0,this.useMultisampledRTT=x0,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function z1(J,Q){function $(Z,W=L8){let H,Y=p0.getTransfer(W);if(Z===N9)return J.UNSIGNED_BYTE;if(Z===W$)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===H$)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===$H)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===ZH)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===JH)return J.BYTE;if(Z===QH)return J.SHORT;if(Z===I7)return J.UNSIGNED_SHORT;if(Z===Z$)return J.INT;if(Z===o9)return J.UNSIGNED_INT;if(Z===v9)return J.FLOAT;if(Z===f9)return J.HALF_FLOAT;if(Z===WH)return J.ALPHA;if(Z===HH)return J.RGB;if(Z===R9)return J.RGBA;if(Z===k8)return J.DEPTH_COMPONENT;if(Z===M8)return J.DEPTH_STENCIL;if(Z===YH)return J.RED;if(Z===Y$)return J.RED_INTEGER;if(Z===Z7)return J.RG;if(Z===X$)return J.RG_INTEGER;if(Z===K$)return J.RGBA_INTEGER;if(Z===y6||Z===v6||Z===f6||Z===h6)if(Y===ZJ)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(Z===y6)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===v6)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===f6)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===h6)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if(Z===y6)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===v6)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===f6)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===h6)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===U$||Z===G$||Z===q$||Z===E$)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(Z===U$)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===G$)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===q$)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===E$)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===N$||Z===F$||Z===O$||Z===R$||Z===k$||Z===M$||Z===L$)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if(Z===N$||Z===F$)return Y===ZJ?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(Z===O$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC;if(Z===R$)return H.COMPRESSED_R11_EAC;if(Z===k$)return H.COMPRESSED_SIGNED_R11_EAC;if(Z===M$)return H.COMPRESSED_RG11_EAC;if(Z===L$)return H.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===D$||Z===V$||Z===B$||Z===z$||Z===C$||Z===w$||Z===_$||Z===P$||Z===I$||Z===A$||Z===T$||Z===S$||Z===j$||Z===y$)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if(Z===D$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===V$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===B$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===z$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===C$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===w$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===_$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===P$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===I$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===A$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===T$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===S$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===j$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===y$)return Y===ZJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===v$||Z===f$||Z===h$)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if(Z===v$)return Y===ZJ?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===f$)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===h$)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===b$||Z===x$||Z===g$||Z===p$)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if(Z===b$)return H.COMPRESSED_RED_RGTC1_EXT;if(Z===x$)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===g$)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===p$)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===$7)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`;class WY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new e6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new $9({vertexShader:C1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new OJ(new x9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HY extends h9{constructor(J,Q){super();let $=this,Z=null,W=1,H=null,Y="local-floor",X=1,K=null,U=null,G=null,q=null,E=null,N=null,k=typeof XRWebGLBinding<"u",M=new WY,F={},O=Q.getContextAttributes(),w=null,D=null,C=[],S=[],_=new P0,A=null,j=new BJ;j.viewport=new XJ;let z=new BJ;z.viewport=new XJ;let B=[j,z],P=new UZ,x=null,u=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(s){let Y0=C[s];if(Y0===void 0)Y0=new y7,C[s]=Y0;return Y0.getTargetRaySpace()},this.getControllerGrip=function(s){let Y0=C[s];if(Y0===void 0)Y0=new y7,C[s]=Y0;return Y0.getGripSpace()},this.getHand=function(s){let Y0=C[s];if(Y0===void 0)Y0=new y7,C[s]=Y0;return Y0.getHandSpace()};function p(s){let Y0=S.indexOf(s.inputSource);if(Y0===-1)return;let $0=C[Y0];if($0!==void 0)$0.update(s.inputSource,s.frame,K||H),$0.dispatchEvent({type:s.type,data:s.inputSource})}function o(){Z.removeEventListener("select",p),Z.removeEventListener("selectstart",p),Z.removeEventListener("selectend",p),Z.removeEventListener("squeeze",p),Z.removeEventListener("squeezestart",p),Z.removeEventListener("squeezeend",p),Z.removeEventListener("end",o),Z.removeEventListener("inputsourceschange",d);for(let s=0;s<C.length;s++){let Y0=S[s];if(Y0===null)continue;S[s]=null,C[s].disconnect(Y0)}x=null,u=null,M.reset();for(let s in F)delete F[s];J.setRenderTarget(w),E=null,q=null,G=null,Z=null,D=null,JJ.stop(),$.isPresenting=!1,J.setPixelRatio(A),J.setSize(_.width,_.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(s){if(W=s,$.isPresenting===!0)L0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(s){if(Y=s,$.isPresenting===!0)L0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||H},this.setReferenceSpace=function(s){K=s},this.getBaseLayer=function(){return q!==null?q:E},this.getBinding=function(){if(G===null&&k)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return N},this.getSession=function(){return Z},this.setSession=async function(s){if(Z=s,Z!==null){if(w=J.getRenderTarget(),Z.addEventListener("select",p),Z.addEventListener("selectstart",p),Z.addEventListener("selectend",p),Z.addEventListener("squeeze",p),Z.addEventListener("squeezestart",p),Z.addEventListener("squeezeend",p),Z.addEventListener("end",o),Z.addEventListener("inputsourceschange",d),O.xrCompatible!==!0)await Q.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(_),!(k&&("createProjectionLayer"in XRWebGLBinding.prototype))){let $0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:W};E=new XRWebGLLayer(Z,Q,$0),Z.updateRenderState({baseLayer:E}),J.setPixelRatio(1),J.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new J9(E.framebufferWidth,E.framebufferHeight,{format:R9,type:N9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{let $0=null,_0=null,A0=null;if(O.depth)A0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,$0=O.stencil?M8:k8,_0=O.stencil?$7:o9;let j0={colorFormat:Q.RGBA8,depthFormat:A0,scaleFactor:W};G=this.getBinding(),q=G.createProjectionLayer(j0),Z.updateRenderState({layers:[q]}),J.setPixelRatio(1),J.setSize(q.textureWidth,q.textureHeight,!1),D=new J9(q.textureWidth,q.textureHeight,{format:R9,type:N9,depthTexture:new z8(q.textureWidth,q.textureHeight,_0,void 0,void 0,void 0,void 0,void 0,void 0,$0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(X),K=null,H=await Z.requestReferenceSpace(Y),JJ.setContext(Z),JJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function d(s){for(let Y0=0;Y0<s.removed.length;Y0++){let $0=s.removed[Y0],_0=S.indexOf($0);if(_0>=0)S[_0]=null,C[_0].disconnect($0)}for(let Y0=0;Y0<s.added.length;Y0++){let $0=s.added[Y0],_0=S.indexOf($0);if(_0===-1){for(let j0=0;j0<C.length;j0++)if(j0>=S.length){S.push($0),_0=j0;break}else if(S[j0]===null){S[j0]=$0,_0=j0;break}if(_0===-1)break}let A0=C[_0];if(A0)A0.connect($0)}}let l=new I,i=new I;function U0(s,Y0,$0){l.setFromMatrixPosition(Y0.matrixWorld),i.setFromMatrixPosition($0.matrixWorld);let _0=l.distanceTo(i),A0=Y0.projectionMatrix.elements,j0=$0.projectionMatrix.elements,RJ=A0[14]/(A0[10]-1),c0=A0[14]/(A0[10]+1),i0=(A0[9]+1)/A0[5],QJ=(A0[9]-1)/A0[5],m0=(A0[8]-1)/A0[0],kJ=(j0[8]+1)/j0[0],T=RJ*m0,PJ=RJ*kJ,x0=_0/(-m0+kJ),KJ=x0*-m0;if(Y0.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.translateX(KJ),s.translateZ(x0),s.matrixWorld.compose(s.position,s.quaternion,s.scale),s.matrixWorldInverse.copy(s.matrixWorld).invert(),A0[10]===-1)s.projectionMatrix.copy(Y0.projectionMatrix),s.projectionMatrixInverse.copy(Y0.projectionMatrixInverse);else{let V0=RJ+x0,WJ=c0+x0,V=T-KJ,R=PJ+(_0-KJ),h=i0*c0/WJ*V0,n=QJ*c0/WJ*V0;s.projectionMatrix.makePerspective(V,R,h,n,V0,WJ),s.projectionMatrixInverse.copy(s.projectionMatrix).invert()}}function W0(s,Y0){if(Y0===null)s.matrixWorld.copy(s.matrix);else s.matrixWorld.multiplyMatrices(Y0.matrixWorld,s.matrix);s.matrixWorldInverse.copy(s.matrixWorld).invert()}this.updateCamera=function(s){if(Z===null)return;let{near:Y0,far:$0}=s;if(M.texture!==null){if(M.depthNear>0)Y0=M.depthNear;if(M.depthFar>0)$0=M.depthFar}if(P.near=z.near=j.near=Y0,P.far=z.far=j.far=$0,x!==P.near||u!==P.far)Z.updateRenderState({depthNear:P.near,depthFar:P.far}),x=P.near,u=P.far;P.layers.mask=s.layers.mask|6,j.layers.mask=P.layers.mask&3,z.layers.mask=P.layers.mask&5;let _0=s.parent,A0=P.cameras;W0(P,_0);for(let j0=0;j0<A0.length;j0++)W0(A0[j0],_0);if(A0.length===2)U0(P,j,z);else P.projectionMatrix.copy(j.projectionMatrix);F0(s,P,_0)};function F0(s,Y0,$0){if($0===null)s.matrix.copy(Y0.matrixWorld);else s.matrix.copy($0.matrixWorld),s.matrix.invert(),s.matrix.multiply(Y0.matrixWorld);if(s.matrix.decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),s.projectionMatrix.copy(Y0.projectionMatrix),s.projectionMatrixInverse.copy(Y0.projectionMatrixInverse),s.isPerspectiveCamera)s.fov=N8*2*Math.atan(1/s.projectionMatrix.elements[5]),s.zoom=1}this.getCamera=function(){return P},this.getFoveation=function(){if(q===null&&E===null)return;return X},this.setFoveation=function(s){if(X=s,q!==null)q.fixedFoveation=s;if(E!==null&&E.fixedFoveation!==void 0)E.fixedFoveation=s},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(P)},this.getCameraTexture=function(s){return F[s]};let v0=null;function GJ(s,Y0){if(U=Y0.getViewerPose(K||H),N=Y0,U!==null){let $0=U.views;if(E!==null)J.setRenderTargetFramebuffer(D,E.framebuffer),J.setRenderTarget(D);let _0=!1;if($0.length!==P.cameras.length)P.cameras.length=0,_0=!0;for(let c0=0;c0<$0.length;c0++){let i0=$0[c0],QJ=null;if(E!==null)QJ=E.getViewport(i0);else{let kJ=G.getViewSubImage(q,i0);if(QJ=kJ.viewport,c0===0)J.setRenderTargetTextures(D,kJ.colorTexture,kJ.depthStencilTexture),J.setRenderTarget(D)}let m0=B[c0];if(m0===void 0)m0=new BJ,m0.layers.enable(c0),m0.viewport=new XJ,B[c0]=m0;if(m0.matrix.fromArray(i0.transform.matrix),m0.matrix.decompose(m0.position,m0.quaternion,m0.scale),m0.projectionMatrix.fromArray(i0.projectionMatrix),m0.projectionMatrixInverse.copy(m0.projectionMatrix).invert(),m0.viewport.set(QJ.x,QJ.y,QJ.width,QJ.height),c0===0)P.matrix.copy(m0.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);if(_0===!0)P.cameras.push(m0)}let A0=Z.enabledFeatures;if(A0&&A0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&k){G=$.getBinding();let c0=G.getDepthInformation($0[0]);if(c0&&c0.isValid&&c0.texture)M.init(c0,Z.renderState)}if(A0&&A0.includes("camera-access")&&k){J.state.unbindTexture(),G=$.getBinding();for(let c0=0;c0<$0.length;c0++){let i0=$0[c0].camera;if(i0){let QJ=F[i0];if(!QJ)QJ=new e6,F[i0]=QJ;let m0=G.getCameraImage(i0);QJ.sourceTexture=m0}}}}for(let $0=0;$0<C.length;$0++){let _0=S[$0],A0=C[$0];if(_0!==null&&A0!==void 0)A0.update(_0,Y0,K||H)}if(v0)v0(s,Y0);if(Y0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Y0});N=null}let JJ=new iH;JJ.setAnimationLoop(GJ),this.setAnimationLoop=function(s){v0=s},this.dispose=function(){}}}var _8=new G9,_1=new f0;function P1(J,Q){function $(F,O){if(F.matrixAutoUpdate===!0)F.updateMatrix();O.value.copy(F.matrix)}function Z(F,O){if(O.color.getRGB(F.fogColor.value,r$(J)),O.isFog)F.fogNear.value=O.near,F.fogFar.value=O.far;else if(O.isFogExp2)F.fogDensity.value=O.density}function W(F,O,w,D,C){if(O.isMeshBasicMaterial)H(F,O);else if(O.isMeshLambertMaterial)H(F,O);else if(O.isMeshToonMaterial)H(F,O),q(F,O);else if(O.isMeshPhongMaterial)H(F,O),G(F,O);else if(O.isMeshStandardMaterial){if(H(F,O),E(F,O),O.isMeshPhysicalMaterial)N(F,O,C)}else if(O.isMeshMatcapMaterial)H(F,O),k(F,O);else if(O.isMeshDepthMaterial)H(F,O);else if(O.isMeshDistanceMaterial)H(F,O),M(F,O);else if(O.isMeshNormalMaterial)H(F,O);else if(O.isLineBasicMaterial){if(Y(F,O),O.isLineDashedMaterial)X(F,O)}else if(O.isPointsMaterial)K(F,O,w,D);else if(O.isSpriteMaterial)U(F,O);else if(O.isShadowMaterial)F.color.value.copy(O.color),F.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function H(F,O){if(F.opacity.value=O.opacity,O.color)F.diffuse.value.copy(O.color);if(O.emissive)F.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)F.map.value=O.map,$(O.map,F.mapTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.bumpMap){if(F.bumpMap.value=O.bumpMap,$(O.bumpMap,F.bumpMapTransform),F.bumpScale.value=O.bumpScale,O.side===sJ)F.bumpScale.value*=-1}if(O.normalMap){if(F.normalMap.value=O.normalMap,$(O.normalMap,F.normalMapTransform),F.normalScale.value.copy(O.normalScale),O.side===sJ)F.normalScale.value.negate()}if(O.displacementMap)F.displacementMap.value=O.displacementMap,$(O.displacementMap,F.displacementMapTransform),F.displacementScale.value=O.displacementScale,F.displacementBias.value=O.displacementBias;if(O.emissiveMap)F.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,F.emissiveMapTransform);if(O.specularMap)F.specularMap.value=O.specularMap,$(O.specularMap,F.specularMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest;let w=Q.get(O),D=w.envMap,C=w.envMapRotation;if(D){if(F.envMap.value=D,_8.copy(C),_8.x*=-1,_8.y*=-1,_8.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1)_8.y*=-1,_8.z*=-1;F.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(_8)),F.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,F.reflectivity.value=O.reflectivity,F.ior.value=O.ior,F.refractionRatio.value=O.refractionRatio}if(O.lightMap)F.lightMap.value=O.lightMap,F.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,F.lightMapTransform);if(O.aoMap)F.aoMap.value=O.aoMap,F.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,F.aoMapTransform)}function Y(F,O){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,O.map)F.map.value=O.map,$(O.map,F.mapTransform)}function X(F,O){F.dashSize.value=O.dashSize,F.totalSize.value=O.dashSize+O.gapSize,F.scale.value=O.scale}function K(F,O,w,D){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,F.size.value=O.size*w,F.scale.value=D*0.5,O.map)F.map.value=O.map,$(O.map,F.uvTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest}function U(F,O){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,F.rotation.value=O.rotation,O.map)F.map.value=O.map,$(O.map,F.mapTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest}function G(F,O){F.specular.value.copy(O.specular),F.shininess.value=Math.max(O.shininess,0.0001)}function q(F,O){if(O.gradientMap)F.gradientMap.value=O.gradientMap}function E(F,O){if(F.metalness.value=O.metalness,O.metalnessMap)F.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=O.roughness,O.roughnessMap)F.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,F.roughnessMapTransform);if(O.envMap)F.envMapIntensity.value=O.envMapIntensity}function N(F,O,w){if(F.ior.value=O.ior,O.sheen>0){if(F.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),F.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)F.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,F.sheenColorMapTransform);if(O.sheenRoughnessMap)F.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(F.clearcoat.value=O.clearcoat,F.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)F.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,F.clearcoatMapTransform);if(O.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(F.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===sJ)F.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)F.dispersion.value=O.dispersion;if(O.iridescence>0){if(F.iridescence.value=O.iridescence,F.iridescenceIOR.value=O.iridescenceIOR,F.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],F.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)F.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,F.iridescenceMapTransform);if(O.iridescenceThicknessMap)F.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(O.transmission>0){if(F.transmission.value=O.transmission,F.transmissionSamplerMap.value=w.texture,F.transmissionSamplerSize.value.set(w.width,w.height),O.transmissionMap)F.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=O.thickness,O.thicknessMap)F.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=O.attenuationDistance,F.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(F.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)F.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=O.specularIntensity,F.specularColor.value.copy(O.specularColor),O.specularColorMap)F.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,F.specularColorMapTransform);if(O.specularIntensityMap)F.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,F.specularIntensityMapTransform)}function k(F,O){if(O.matcap)F.matcap.value=O.matcap}function M(F,O){let w=Q.get(O).light;F.referencePosition.value.setFromMatrixPosition(w.matrixWorld),F.nearDistance.value=w.shadow.camera.near,F.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function I1(J,Q,$,Z){let W={},H={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(w,D){let C=D.program;Z.uniformBlockBinding(w,C)}function U(w,D){let C=W[w.id];if(C===void 0)k(w),C=G(w),W[w.id]=C,w.addEventListener("dispose",F);let S=D.program;Z.updateUBOMapping(w,S);let _=Q.render.frame;if(H[w.id]!==_)E(w),H[w.id]=_}function G(w){let D=q();w.__bindingPointIndex=D;let C=J.createBuffer(),S=w.__size,_=w.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,S,_),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,D,C),C}function q(){for(let w=0;w<X;w++)if(Y.indexOf(w)===-1)return Y.push(w),w;return I0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(w){let D=W[w.id],C=w.uniforms,S=w.__cache;J.bindBuffer(J.UNIFORM_BUFFER,D);for(let _=0,A=C.length;_<A;_++){let j=Array.isArray(C[_])?C[_]:[C[_]];for(let z=0,B=j.length;z<B;z++){let P=j[z];if(N(P,_,z,S)===!0){let x=P.__offset,u=Array.isArray(P.value)?P.value:[P.value],p=0;for(let o=0;o<u.length;o++){let d=u[o],l=M(d);if(typeof d==="number"||typeof d==="boolean")P.__data[0]=d,J.bufferSubData(J.UNIFORM_BUFFER,x+p,P.__data);else if(d.isMatrix3)P.__data[0]=d.elements[0],P.__data[1]=d.elements[1],P.__data[2]=d.elements[2],P.__data[3]=0,P.__data[4]=d.elements[3],P.__data[5]=d.elements[4],P.__data[6]=d.elements[5],P.__data[7]=0,P.__data[8]=d.elements[6],P.__data[9]=d.elements[7],P.__data[10]=d.elements[8],P.__data[11]=0;else d.toArray(P.__data,p),p+=l.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,x,P.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(w,D,C,S){let _=w.value,A=D+"_"+C;if(S[A]===void 0){if(typeof _==="number"||typeof _==="boolean")S[A]=_;else S[A]=_.clone();return!0}else{let j=S[A];if(typeof _==="number"||typeof _==="boolean"){if(j!==_)return S[A]=_,!0}else if(j.equals(_)===!1)return j.copy(_),!0}return!1}function k(w){let D=w.uniforms,C=0,S=16;for(let A=0,j=D.length;A<j;A++){let z=Array.isArray(D[A])?D[A]:[D[A]];for(let B=0,P=z.length;B<P;B++){let x=z[B],u=Array.isArray(x.value)?x.value:[x.value];for(let p=0,o=u.length;p<o;p++){let d=u[p],l=M(d),i=C%S,U0=i%l.boundary,W0=i+U0;if(C+=U0,W0!==0&&S-W0<l.storage)C+=S-W0;x.__data=new Float32Array(l.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=C,C+=l.storage}}}let _=C%S;if(_>0)C+=S-_;return w.__size=C,w.__cache={},this}function M(w){let D={boundary:0,storage:0};if(typeof w==="number"||typeof w==="boolean")D.boundary=4,D.storage=4;else if(w.isVector2)D.boundary=8,D.storage=8;else if(w.isVector3||w.isColor)D.boundary=16,D.storage=12;else if(w.isVector4)D.boundary=16,D.storage=16;else if(w.isMatrix3)D.boundary=48,D.storage=48;else if(w.isMatrix4)D.boundary=64,D.storage=64;else if(w.isTexture)L0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else L0("WebGLRenderer: Unsupported uniform value type.",w);return D}function F(w){let D=w.target;D.removeEventListener("dispose",F);let C=Y.indexOf(D.__bindingPointIndex);Y.splice(C,1),J.deleteBuffer(W[D.id]),delete W[D.id],delete H[D.id]}function O(){for(let w in W)J.deleteBuffer(W[w]);Y=[],W={},H={}}return{bind:K,update:U,dispose:O}}var A1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),k9=null;function T1(){if(k9===null)k9=new f7(A1,16,16,Z7,f9),k9.name="DFG_LUT",k9.minFilter=DJ,k9.magFilter=DJ,k9.wrapS=J7,k9.wrapT=J7,k9.generateMipmaps=!1,k9.needsUpdate=!0;return k9}class BZ{constructor(J={}){let{canvas:Q=OH(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:H=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:K=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:q=!1,outputBufferType:E=N9}=J;this.isWebGLRenderer=!0;let N;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");N=$.getContextAttributes().alpha}else N=H;let k=E,M=new Set([K$,X$,Y$]),F=new Set([N9,o9,I7,$7,W$,H$]),O=new Uint32Array(4),w=new Int32Array(4),D=null,C=null,S=[],_=[],A=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=q9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,z=!1;this._outputColorSpace=gJ;let B=0,P=0,x=null,u=-1,p=null,o=new XJ,d=new XJ,l=null,i=new w0(0),U0=0,W0=Q.width,F0=Q.height,v0=1,GJ=null,JJ=null,s=new XJ(0,0,W0,F0),Y0=new XJ(0,0,W0,F0),$0=!1,_0=new b7,A0=!1,j0=!1,RJ=new f0,c0=new I,i0=new XJ,QJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},m0=!1;function kJ(){return x===null?v0:1}let T=$;function PJ(L,v){return Q.getContext(L,v)}try{let L={alpha:!0,depth:Z,stencil:W,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:K,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${PW}`);if(Q.addEventListener("webglcontextlost",k0,!1),Q.addEventListener("webglcontextrestored",y0,!1),Q.addEventListener("webglcontextcreationerror",HJ,!1),T===null){if(T=PJ("webgl2",L),T===null)if(PJ("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(L){throw I0("WebGLRenderer: "+L.message),L}let x0,KJ,V0,WJ,V,R,h,n,a,c,O0,Q0,B0,T0,r,e,R0,M0,G0,g0,y,Z0,J0,E0;function t(){if(x0=new bG(T),x0.init(),Z0=new z1(T,x0),KJ=new IG(T,x0,J,Z0),V0=new V1(T,x0),KJ.reversedDepthBuffer&&q)V0.buffers.depth.setReversed(!0);WJ=new pG(T),V=new Y1,R=new B1(T,x0,V0,V,KJ,Z0,WJ),h=new TG(j),n=new hG(j),a=new dX(T),J0=new _G(T,a),c=new xG(T,a,WJ,J0),O0=new mG(T,c,a,WJ),G0=new lG(T,KJ,R),e=new AG(V),Q0=new H1(j,h,n,x0,KJ,J0,e),B0=new P1(j,V),T0=new K1,r=new F1(x0),M0=new wG(j,h,n,V0,O0,N,X),R0=new L1(j,O0,KJ),E0=new I1(T,WJ,KJ,V0),g0=new PG(T,x0,WJ),y=new gG(T,x0,WJ),WJ.programs=Q0.programs,j.capabilities=KJ,j.extensions=x0,j.properties=V,j.renderLists=T0,j.shadowMap=R0,j.state=V0,j.info=WJ}if(t(),k!==N9)A=new dG(k,Q.width,Q.height,Z,W);let m=new HY(j,T);this.xr=m,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let L=x0.get("WEBGL_lose_context");if(L)L.loseContext()},this.forceContextRestore=function(){let L=x0.get("WEBGL_lose_context");if(L)L.restoreContext()},this.getPixelRatio=function(){return v0},this.setPixelRatio=function(L){if(L===void 0)return;v0=L,this.setSize(W0,F0,!1)},this.getSize=function(L){return L.set(W0,F0)},this.setSize=function(L,v,g=!0){if(m.isPresenting){L0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(W0=L,F0=v,Q.width=Math.floor(L*v0),Q.height=Math.floor(v*v0),g===!0)Q.style.width=L+"px",Q.style.height=v+"px";if(A!==null)A.setSize(Q.width,Q.height);this.setViewport(0,0,L,v)},this.getDrawingBufferSize=function(L){return L.set(W0*v0,F0*v0).floor()},this.setDrawingBufferSize=function(L,v,g){W0=L,F0=v,v0=g,Q.width=Math.floor(L*g),Q.height=Math.floor(v*g),this.setViewport(0,0,L,v)},this.setEffects=function(L){if(k===N9){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let v=0;v<L.length;v++)if(L[v].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(o)},this.getViewport=function(L){return L.copy(s)},this.setViewport=function(L,v,g,b){if(L.isVector4)s.set(L.x,L.y,L.z,L.w);else s.set(L,v,g,b);V0.viewport(o.copy(s).multiplyScalar(v0).round())},this.getScissor=function(L){return L.copy(Y0)},this.setScissor=function(L,v,g,b){if(L.isVector4)Y0.set(L.x,L.y,L.z,L.w);else Y0.set(L,v,g,b);V0.scissor(d.copy(Y0).multiplyScalar(v0).round())},this.getScissorTest=function(){return $0},this.setScissorTest=function(L){V0.setScissorTest($0=L)},this.setOpaqueSort=function(L){GJ=L},this.setTransparentSort=function(L){JJ=L},this.getClearColor=function(L){return L.copy(M0.getClearColor())},this.setClearColor=function(){M0.setClearColor(...arguments)},this.getClearAlpha=function(){return M0.getClearAlpha()},this.setClearAlpha=function(){M0.setClearAlpha(...arguments)},this.clear=function(L=!0,v=!0,g=!0){let b=0;if(L){let f=!1;if(x!==null){let H0=x.texture.format;f=M.has(H0)}if(f){let H0=x.texture.type,q0=F.has(H0),K0=M0.getClearColor(),N0=M0.getClearAlpha(),D0=K0.r,S0=K0.g,z0=K0.b;if(q0)O[0]=D0,O[1]=S0,O[2]=z0,O[3]=N0,T.clearBufferuiv(T.COLOR,0,O);else w[0]=D0,w[1]=S0,w[2]=z0,w[3]=N0,T.clearBufferiv(T.COLOR,0,w)}else b|=T.COLOR_BUFFER_BIT}if(v)b|=T.DEPTH_BUFFER_BIT;if(g)b|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);T.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",k0,!1),Q.removeEventListener("webglcontextrestored",y0,!1),Q.removeEventListener("webglcontextcreationerror",HJ,!1),M0.dispose(),T0.dispose(),r.dispose(),V.dispose(),h.dispose(),n.dispose(),O0.dispose(),J0.dispose(),E0.dispose(),Q0.dispose(),m.dispose(),m.removeEventListener("sessionstart",bZ),m.removeEventListener("sessionend",xZ),X8.stop()};function k0(L){L.preventDefault(),B7("WebGLRenderer: Context Lost."),z=!0}function y0(){B7("WebGLRenderer: Context Restored."),z=!1;let L=WJ.autoReset,v=R0.enabled,g=R0.autoUpdate,b=R0.needsUpdate,f=R0.type;t(),WJ.autoReset=L,R0.enabled=v,R0.autoUpdate=g,R0.needsUpdate=b,R0.type=f}function HJ(L){I0("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function o0(L){let v=L.target;v.removeEventListener("dispose",o0),V9(v)}function V9(L){B9(L),V.remove(L)}function B9(L){let v=V.get(L).programs;if(v!==void 0){if(v.forEach(function(g){Q0.releaseProgram(g)}),L.isShaderMaterial)Q0.releaseShaderCache(L)}}this.renderBufferDirect=function(L,v,g,b,f,H0){if(v===null)v=QJ;let q0=f.isMesh&&f.matrixWorld.determinant()<0,K0=gY(L,v,g,b,f);V0.setMaterial(b,q0);let N0=g.index,D0=1;if(b.wireframe===!0){if(N0=c.getWireframeAttribute(g),N0===void 0)return;D0=2}let S0=g.drawRange,z0=g.attributes.position,u0=S0.start*D0,t0=(S0.start+S0.count)*D0;if(H0!==null)u0=Math.max(u0,H0.start*D0),t0=Math.min(t0,(H0.start+H0.count)*D0);if(N0!==null)u0=Math.max(u0,0),t0=Math.min(t0,N0.count);else if(z0!==void 0&&z0!==null)u0=Math.max(u0,0),t0=Math.min(t0,z0.count);let qJ=t0-u0;if(qJ<0||qJ===1/0)return;J0.setup(f,b,K0,g,N0);let EJ,$J=g0;if(N0!==null)EJ=a.get(N0),$J=y,$J.setIndex(EJ);if(f.isMesh)if(b.wireframe===!0)V0.setLineWidth(b.wireframeLinewidth*kJ()),$J.setMode(T.LINES);else $J.setMode(T.TRIANGLES);else if(f.isLine){let C0=b.linewidth;if(C0===void 0)C0=1;if(V0.setLineWidth(C0*kJ()),f.isLineSegments)$J.setMode(T.LINES);else if(f.isLineLoop)$J.setMode(T.LINE_LOOP);else $J.setMode(T.LINE_STRIP)}else if(f.isPoints)$J.setMode(T.POINTS);else if(f.isSprite)$J.setMode(T.TRIANGLES);if(f.isBatchedMesh)if(f._multiDrawInstances!==null)i8("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$J.renderMultiDrawInstances(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount,f._multiDrawInstances);else if(!x0.get("WEBGL_multi_draw")){let{_multiDrawStarts:C0,_multiDrawCounts:a0,_multiDrawCount:n0}=f,mJ=N0?a.get(N0).bytesPerElement:1,A8=V.get(b).currentProgram.getUniforms();for(let uJ=0;uJ<n0;uJ++)A8.setValue(T,"_gl_DrawID",uJ),$J.render(C0[uJ]/mJ,a0[uJ])}else $J.renderMultiDraw(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount);else if(f.isInstancedMesh)$J.renderInstances(u0,qJ,f.count);else if(g.isInstancedBufferGeometry){let C0=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,a0=Math.min(g.instanceCount,C0);$J.renderInstances(u0,qJ,a0)}else $J.render(u0,qJ)};function hZ(L,v,g){if(L.transparent===!0&&L.side===vJ&&L.forceSinglePass===!1)L.side=sJ,L.needsUpdate=!0,n7(L,v,g),L.side=i9,L.needsUpdate=!0,n7(L,v,g),L.side=vJ;else n7(L,v,g)}this.compile=function(L,v,g=null){if(g===null)g=L;if(C=r.get(g),C.init(v),_.push(C),g.traverseVisible(function(f){if(f.isLight&&f.layers.test(v.layers)){if(C.pushLight(f),f.castShadow)C.pushShadow(f)}}),L!==g)L.traverseVisible(function(f){if(f.isLight&&f.layers.test(v.layers)){if(C.pushLight(f),f.castShadow)C.pushShadow(f)}});C.setupLights();let b=new Set;return L.traverse(function(f){if(!(f.isMesh||f.isPoints||f.isLine||f.isSprite))return;let H0=f.material;if(H0)if(Array.isArray(H0))for(let q0=0;q0<H0.length;q0++){let K0=H0[q0];hZ(K0,g,f),b.add(K0)}else hZ(H0,g,f),b.add(H0)}),C=_.pop(),b},this.compileAsync=function(L,v,g=null){let b=this.compile(L,v,g);return new Promise((f)=>{function H0(){if(b.forEach(function(q0){if(V.get(q0).currentProgram.isReady())b.delete(q0)}),b.size===0){f(L);return}setTimeout(H0,10)}if(x0.get("KHR_parallel_shader_compile")!==null)H0();else setTimeout(H0,10)})};let RQ=null;function xY(L){if(RQ)RQ(L)}function bZ(){X8.stop()}function xZ(){X8.start()}let X8=new iH;if(X8.setAnimationLoop(xY),typeof self<"u")X8.setContext(self);this.setAnimationLoop=function(L){RQ=L,m.setAnimationLoop(L),L===null?X8.stop():X8.start()},m.addEventListener("sessionstart",bZ),m.addEventListener("sessionend",xZ),this.render=function(L,v){if(v!==void 0&&v.isCamera!==!0){I0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;let g=m.enabled===!0&&m.isPresenting===!0,b=A!==null&&(x===null||g)&&A.begin(j,x);if(L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(m.enabled===!0&&m.isPresenting===!0&&(A===null||A.isCompositing()===!1)){if(m.cameraAutoUpdate===!0)m.updateCamera(v);v=m.getCamera()}if(L.isScene===!0)L.onBeforeRender(j,L,v,x);if(C=r.get(L,_.length),C.init(v),_.push(C),RJ.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),_0.setFromProjectionMatrix(RJ,c$,v.reversedDepth),j0=this.localClippingEnabled,A0=e.init(this.clippingPlanes,j0),D=T0.get(L,S.length),D.init(),S.push(D),m.enabled===!0&&m.isPresenting===!0){let q0=j.xr.getDepthSensingMesh();if(q0!==null)kQ(q0,v,-1/0,j.sortObjects)}if(kQ(L,v,0,j.sortObjects),D.finish(),j.sortObjects===!0)D.sort(GJ,JJ);if(m0=m.enabled===!1||m.isPresenting===!1||m.hasDepthSensing()===!1,m0)M0.addToRenderList(D,L);if(this.info.render.frame++,A0===!0)e.beginShadows();let f=C.state.shadowsArray;if(R0.render(f,L,v),A0===!0)e.endShadows();if(this.info.autoReset===!0)this.info.reset();if((b&&A.hasRenderPass())===!1){let{opaque:q0,transmissive:K0}=D;if(C.setupLights(),v.isArrayCamera){let N0=v.cameras;if(K0.length>0)for(let D0=0,S0=N0.length;D0<S0;D0++){let z0=N0[D0];pZ(q0,K0,L,z0)}if(m0)M0.render(L);for(let D0=0,S0=N0.length;D0<S0;D0++){let z0=N0[D0];gZ(D,L,z0,z0.viewport)}}else{if(K0.length>0)pZ(q0,K0,L,v);if(m0)M0.render(L);gZ(D,L,v)}}if(x!==null&&P===0)R.updateMultisampleRenderTarget(x),R.updateRenderTargetMipmap(x);if(b)A.end(j);if(L.isScene===!0)L.onAfterRender(j,L,v);if(J0.resetDefaultState(),u=-1,p=null,_.pop(),_.length>0){if(C=_[_.length-1],A0===!0)e.setGlobalState(j.clippingPlanes,C.state.camera)}else C=null;if(S.pop(),S.length>0)D=S[S.length-1];else D=null};function kQ(L,v,g,b){if(L.visible===!1)return;if(L.layers.test(v.layers)){if(L.isGroup)g=L.renderOrder;else if(L.isLOD){if(L.autoUpdate===!0)L.update(v)}else if(L.isLight){if(C.pushLight(L),L.castShadow)C.pushShadow(L)}else if(L.isSprite){if(!L.frustumCulled||_0.intersectsSprite(L)){if(b)i0.setFromMatrixPosition(L.matrixWorld).applyMatrix4(RJ);let q0=O0.update(L),K0=L.material;if(K0.visible)D.push(L,q0,K0,g,i0.z,null)}}else if(L.isMesh||L.isLine||L.isPoints){if(!L.frustumCulled||_0.intersectsObject(L)){let q0=O0.update(L),K0=L.material;if(b){if(L.boundingSphere!==void 0){if(L.boundingSphere===null)L.computeBoundingSphere();i0.copy(L.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();i0.copy(q0.boundingSphere.center)}i0.applyMatrix4(L.matrixWorld).applyMatrix4(RJ)}if(Array.isArray(K0)){let N0=q0.groups;for(let D0=0,S0=N0.length;D0<S0;D0++){let z0=N0[D0],u0=K0[z0.materialIndex];if(u0&&u0.visible)D.push(L,q0,u0,g,i0.z,z0)}}else if(K0.visible)D.push(L,q0,K0,g,i0.z,null)}}}let H0=L.children;for(let q0=0,K0=H0.length;q0<K0;q0++)kQ(H0[q0],v,g,b)}function gZ(L,v,g,b){let{opaque:f,transmissive:H0,transparent:q0}=L;if(C.setupLightsView(g),A0===!0)e.setGlobalState(j.clippingPlanes,g);if(b)V0.viewport(o.copy(b));if(f.length>0)c7(f,v,g);if(H0.length>0)c7(H0,v,g);if(q0.length>0)c7(q0,v,g);V0.buffers.depth.setTest(!0),V0.buffers.depth.setMask(!0),V0.buffers.color.setMask(!0),V0.setPolygonOffset(!1)}function pZ(L,v,g,b){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[b.id]===void 0){let u0=x0.has("EXT_color_buffer_half_float")||x0.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[b.id]=new J9(1,1,{generateMipmaps:!0,type:u0?f9:N9,minFilter:y9,samples:KJ.samples,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:p0.workingColorSpace})}let H0=C.state.transmissionRenderTarget[b.id],q0=b.viewport||o;H0.setSize(q0.z*j.transmissionResolutionScale,q0.w*j.transmissionResolutionScale);let K0=j.getRenderTarget(),N0=j.getActiveCubeFace(),D0=j.getActiveMipmapLevel();if(j.setRenderTarget(H0),j.getClearColor(i),U0=j.getClearAlpha(),U0<1)j.setClearColor(16777215,0.5);if(j.clear(),m0)M0.render(g);let S0=j.toneMapping;j.toneMapping=q9;let z0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(C.setupLightsView(b),A0===!0)e.setGlobalState(j.clippingPlanes,b);if(c7(L,g,b),R.updateMultisampleRenderTarget(H0),R.updateRenderTargetMipmap(H0),x0.has("WEBGL_multisampled_render_to_texture")===!1){let u0=!1;for(let t0=0,qJ=v.length;t0<qJ;t0++){let EJ=v[t0],{object:$J,geometry:C0,material:a0,group:n0}=EJ;if(a0.side===vJ&&$J.layers.test(b.layers)){let mJ=a0.side;a0.side=sJ,a0.needsUpdate=!0,lZ($J,g,b,C0,a0,n0),a0.side=mJ,a0.needsUpdate=!0,u0=!0}}if(u0===!0)R.updateMultisampleRenderTarget(H0),R.updateRenderTargetMipmap(H0)}if(j.setRenderTarget(K0,N0,D0),j.setClearColor(i,U0),z0!==void 0)b.viewport=z0;j.toneMapping=S0}function c7(L,v,g){let b=v.isScene===!0?v.overrideMaterial:null;for(let f=0,H0=L.length;f<H0;f++){let q0=L[f],{object:K0,geometry:N0,group:D0}=q0,S0=q0.material;if(S0.allowOverride===!0&&b!==null)S0=b;if(K0.layers.test(g.layers))lZ(K0,v,g,N0,S0,D0)}}function lZ(L,v,g,b,f,H0){if(L.onBeforeRender(j,v,g,b,f,H0),L.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),f.onBeforeRender(j,v,g,b,L,H0),f.transparent===!0&&f.side===vJ&&f.forceSinglePass===!1)f.side=sJ,f.needsUpdate=!0,j.renderBufferDirect(g,v,b,f,L,H0),f.side=i9,f.needsUpdate=!0,j.renderBufferDirect(g,v,b,f,L,H0),f.side=vJ;else j.renderBufferDirect(g,v,b,f,L,H0);L.onAfterRender(j,v,g,b,f,H0)}function n7(L,v,g){if(v.isScene!==!0)v=QJ;let b=V.get(L),f=C.state.lights,H0=C.state.shadowsArray,q0=f.state.version,K0=Q0.getParameters(L,f.state,H0,v,g),N0=Q0.getProgramCacheKey(K0),D0=b.programs;if(b.environment=L.isMeshStandardMaterial?v.environment:null,b.fog=v.fog,b.envMap=(L.isMeshStandardMaterial?n:h).get(L.envMap||b.environment),b.envMapRotation=b.environment!==null&&L.envMap===null?v.environmentRotation:L.envMapRotation,D0===void 0)L.addEventListener("dispose",o0),D0=new Map,b.programs=D0;let S0=D0.get(N0);if(S0!==void 0){if(b.currentProgram===S0&&b.lightsStateVersion===q0)return uZ(L,K0),S0}else K0.uniforms=Q0.getUniforms(L),L.onBeforeCompile(K0,j),S0=Q0.acquireProgram(K0,N0),D0.set(N0,S0),b.uniforms=K0.uniforms;let z0=b.uniforms;if(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)z0.clippingPlanes=e.uniform;if(uZ(L,K0),b.needsLights=lY(L),b.lightsStateVersion=q0,b.needsLights)z0.ambientLightColor.value=f.state.ambient,z0.lightProbe.value=f.state.probe,z0.directionalLights.value=f.state.directional,z0.directionalLightShadows.value=f.state.directionalShadow,z0.spotLights.value=f.state.spot,z0.spotLightShadows.value=f.state.spotShadow,z0.rectAreaLights.value=f.state.rectArea,z0.ltc_1.value=f.state.rectAreaLTC1,z0.ltc_2.value=f.state.rectAreaLTC2,z0.pointLights.value=f.state.point,z0.pointLightShadows.value=f.state.pointShadow,z0.hemisphereLights.value=f.state.hemi,z0.directionalShadowMap.value=f.state.directionalShadowMap,z0.directionalShadowMatrix.value=f.state.directionalShadowMatrix,z0.spotShadowMap.value=f.state.spotShadowMap,z0.spotLightMatrix.value=f.state.spotLightMatrix,z0.spotLightMap.value=f.state.spotLightMap,z0.pointShadowMap.value=f.state.pointShadowMap,z0.pointShadowMatrix.value=f.state.pointShadowMatrix;return b.currentProgram=S0,b.uniformsList=null,S0}function mZ(L){if(L.uniformsList===null){let v=L.currentProgram.getUniforms();L.uniformsList=u7.seqWithValue(v.seq,L.uniforms)}return L.uniformsList}function uZ(L,v){let g=V.get(L);g.outputColorSpace=v.outputColorSpace,g.batching=v.batching,g.batchingColor=v.batchingColor,g.instancing=v.instancing,g.instancingColor=v.instancingColor,g.instancingMorph=v.instancingMorph,g.skinning=v.skinning,g.morphTargets=v.morphTargets,g.morphNormals=v.morphNormals,g.morphColors=v.morphColors,g.morphTargetsCount=v.morphTargetsCount,g.numClippingPlanes=v.numClippingPlanes,g.numIntersection=v.numClipIntersection,g.vertexAlphas=v.vertexAlphas,g.vertexTangents=v.vertexTangents,g.toneMapping=v.toneMapping}function gY(L,v,g,b,f){if(v.isScene!==!0)v=QJ;R.resetTextureUnits();let H0=v.fog,q0=b.isMeshStandardMaterial?v.environment:null,K0=x===null?j.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:IJ,N0=(b.isMeshStandardMaterial?n:h).get(b.envMap||q0),D0=b.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,S0=!!g.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),z0=!!g.morphAttributes.position,u0=!!g.morphAttributes.normal,t0=!!g.morphAttributes.color,qJ=q9;if(b.toneMapped){if(x===null||x.isXRRenderTarget===!0)qJ=j.toneMapping}let EJ=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,$J=EJ!==void 0?EJ.length:0,C0=V.get(b),a0=C.state.lights;if(A0===!0){if(j0===!0||L!==p){let jJ=L===p&&b.id===u;e.setState(b,L,jJ)}}let n0=!1;if(b.version===C0.__version){if(C0.needsLights&&C0.lightsStateVersion!==a0.state.version)n0=!0;else if(C0.outputColorSpace!==K0)n0=!0;else if(f.isBatchedMesh&&C0.batching===!1)n0=!0;else if(!f.isBatchedMesh&&C0.batching===!0)n0=!0;else if(f.isBatchedMesh&&C0.batchingColor===!0&&f.colorTexture===null)n0=!0;else if(f.isBatchedMesh&&C0.batchingColor===!1&&f.colorTexture!==null)n0=!0;else if(f.isInstancedMesh&&C0.instancing===!1)n0=!0;else if(!f.isInstancedMesh&&C0.instancing===!0)n0=!0;else if(f.isSkinnedMesh&&C0.skinning===!1)n0=!0;else if(!f.isSkinnedMesh&&C0.skinning===!0)n0=!0;else if(f.isInstancedMesh&&C0.instancingColor===!0&&f.instanceColor===null)n0=!0;else if(f.isInstancedMesh&&C0.instancingColor===!1&&f.instanceColor!==null)n0=!0;else if(f.isInstancedMesh&&C0.instancingMorph===!0&&f.morphTexture===null)n0=!0;else if(f.isInstancedMesh&&C0.instancingMorph===!1&&f.morphTexture!==null)n0=!0;else if(C0.envMap!==N0)n0=!0;else if(b.fog===!0&&C0.fog!==H0)n0=!0;else if(C0.numClippingPlanes!==void 0&&(C0.numClippingPlanes!==e.numPlanes||C0.numIntersection!==e.numIntersection))n0=!0;else if(C0.vertexAlphas!==D0)n0=!0;else if(C0.vertexTangents!==S0)n0=!0;else if(C0.morphTargets!==z0)n0=!0;else if(C0.morphNormals!==u0)n0=!0;else if(C0.morphColors!==t0)n0=!0;else if(C0.toneMapping!==qJ)n0=!0;else if(C0.morphTargetsCount!==$J)n0=!0}else n0=!0,C0.__version=b.version;let mJ=C0.currentProgram;if(n0===!0)mJ=n7(b,v,f);let A8=!1,uJ=!1,N7=!1,YJ=mJ.getUniforms(),hJ=C0.uniforms;if(V0.useProgram(mJ.program))A8=!0,uJ=!0,N7=!0;if(b.id!==u)u=b.id,uJ=!0;if(A8||p!==L){if(V0.buffers.depth.getReversed()&&L.reversedDepth!==!0)L._reversedDepth=!0,L.updateProjectionMatrix();YJ.setValue(T,"projectionMatrix",L.projectionMatrix),YJ.setValue(T,"viewMatrix",L.matrixWorldInverse);let bJ=YJ.map.cameraPosition;if(bJ!==void 0)bJ.setValue(T,c0.setFromMatrixPosition(L.matrixWorld));if(KJ.logarithmicDepthBuffer)YJ.setValue(T,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)YJ.setValue(T,"isOrthographic",L.isOrthographicCamera===!0);if(p!==L)p=L,uJ=!0,N7=!0}if(C0.needsLights){if(a0.state.directionalShadowMap.length>0)YJ.setValue(T,"directionalShadowMap",a0.state.directionalShadowMap,R);if(a0.state.spotShadowMap.length>0)YJ.setValue(T,"spotShadowMap",a0.state.spotShadowMap,R);if(a0.state.pointShadowMap.length>0)YJ.setValue(T,"pointShadowMap",a0.state.pointShadowMap,R)}if(f.isSkinnedMesh){YJ.setOptional(T,f,"bindMatrix"),YJ.setOptional(T,f,"bindMatrixInverse");let jJ=f.skeleton;if(jJ){if(jJ.boneTexture===null)jJ.computeBoneTexture();YJ.setValue(T,"boneTexture",jJ.boneTexture,R)}}if(f.isBatchedMesh){if(YJ.setOptional(T,f,"batchingTexture"),YJ.setValue(T,"batchingTexture",f._matricesTexture,R),YJ.setOptional(T,f,"batchingIdTexture"),YJ.setValue(T,"batchingIdTexture",f._indirectTexture,R),YJ.setOptional(T,f,"batchingColorTexture"),f._colorsTexture!==null)YJ.setValue(T,"batchingColorTexture",f._colorsTexture,R)}let tJ=g.morphAttributes;if(tJ.position!==void 0||tJ.normal!==void 0||tJ.color!==void 0)G0.update(f,g,mJ);if(uJ||C0.receiveShadow!==f.receiveShadow)C0.receiveShadow=f.receiveShadow,YJ.setValue(T,"receiveShadow",f.receiveShadow);if(b.isMeshGouraudMaterial&&b.envMap!==null)hJ.envMap.value=N0,hJ.flipEnvMap.value=N0.isCubeTexture&&N0.isRenderTargetTexture===!1?-1:1;if(b.isMeshStandardMaterial&&b.envMap===null&&v.environment!==null)hJ.envMapIntensity.value=v.environmentIntensity;if(hJ.dfgLUT!==void 0)hJ.dfgLUT.value=T1();if(uJ){if(YJ.setValue(T,"toneMappingExposure",j.toneMappingExposure),C0.needsLights)pY(hJ,N7);if(H0&&b.fog===!0)B0.refreshFogUniforms(hJ,H0);B0.refreshMaterialUniforms(hJ,b,v0,F0,C.state.transmissionRenderTarget[L.id]),u7.upload(T,mZ(C0),hJ,R)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)u7.upload(T,mZ(C0),hJ,R),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)YJ.setValue(T,"center",f.center);if(YJ.setValue(T,"modelViewMatrix",f.modelViewMatrix),YJ.setValue(T,"normalMatrix",f.normalMatrix),YJ.setValue(T,"modelMatrix",f.matrixWorld),b.isShaderMaterial||b.isRawShaderMaterial){let jJ=b.uniformsGroups;for(let bJ=0,MQ=jJ.length;bJ<MQ;bJ++){let K8=jJ[bJ];E0.update(K8,mJ),E0.bind(K8,mJ)}}return mJ}function pY(L,v){L.ambientLightColor.needsUpdate=v,L.lightProbe.needsUpdate=v,L.directionalLights.needsUpdate=v,L.directionalLightShadows.needsUpdate=v,L.pointLights.needsUpdate=v,L.pointLightShadows.needsUpdate=v,L.spotLights.needsUpdate=v,L.spotLightShadows.needsUpdate=v,L.rectAreaLights.needsUpdate=v,L.hemisphereLights.needsUpdate=v}function lY(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(L,v,g){let b=V.get(L);if(b.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;V.get(L.texture).__webglTexture=v,V.get(L.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:g,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,v){let g=V.get(L);g.__webglFramebuffer=v,g.__useDefaultFramebuffer=v===void 0};let mY=T.createFramebuffer();this.setRenderTarget=function(L,v=0,g=0){x=L,B=v,P=g;let b=null,f=!1,H0=!1;if(L){let K0=V.get(L);if(K0.__useDefaultFramebuffer!==void 0){V0.bindFramebuffer(T.FRAMEBUFFER,K0.__webglFramebuffer),o.copy(L.viewport),d.copy(L.scissor),l=L.scissorTest,V0.viewport(o),V0.scissor(d),V0.setScissorTest(l),u=-1;return}else if(K0.__webglFramebuffer===void 0)R.setupRenderTarget(L);else if(K0.__hasExternalTextures)R.rebindTextures(L,V.get(L.texture).__webglTexture,V.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let S0=L.depthTexture;if(K0.__boundDepthTexture!==S0){if(S0!==null&&V.has(S0)&&(L.width!==S0.image.width||L.height!==S0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(L)}}let N0=L.texture;if(N0.isData3DTexture||N0.isDataArrayTexture||N0.isCompressedArrayTexture)H0=!0;let D0=V.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget){if(Array.isArray(D0[v]))b=D0[v][g];else b=D0[v];f=!0}else if(L.samples>0&&R.useMultisampledRTT(L)===!1)b=V.get(L).__webglMultisampledFramebuffer;else if(Array.isArray(D0))b=D0[g];else b=D0;o.copy(L.viewport),d.copy(L.scissor),l=L.scissorTest}else o.copy(s).multiplyScalar(v0).floor(),d.copy(Y0).multiplyScalar(v0).floor(),l=$0;if(g!==0)b=mY;if(V0.bindFramebuffer(T.FRAMEBUFFER,b))V0.drawBuffers(L,b);if(V0.viewport(o),V0.scissor(d),V0.setScissorTest(l),f){let K0=V.get(L.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+v,K0.__webglTexture,g)}else if(H0){let K0=v;for(let N0=0;N0<L.textures.length;N0++){let D0=V.get(L.textures[N0]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+N0,D0.__webglTexture,g,K0)}}else if(L!==null&&g!==0){let K0=V.get(L.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,K0.__webglTexture,g)}u=-1},this.readRenderTargetPixels=function(L,v,g,b,f,H0,q0,K0=0){if(!(L&&L.isWebGLRenderTarget)){I0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let N0=V.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&q0!==void 0)N0=N0[q0];if(N0){V0.bindFramebuffer(T.FRAMEBUFFER,N0);try{let D0=L.textures[K0],S0=D0.format,z0=D0.type;if(!KJ.textureFormatReadable(S0)){I0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!KJ.textureTypeReadable(z0)){I0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=L.width-b&&(g>=0&&g<=L.height-f)){if(L.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+K0);T.readPixels(v,g,b,f,Z0.convert(S0),Z0.convert(z0),H0)}}finally{let D0=x!==null?V.get(x).__webglFramebuffer:null;V0.bindFramebuffer(T.FRAMEBUFFER,D0)}}},this.readRenderTargetPixelsAsync=async function(L,v,g,b,f,H0,q0,K0=0){if(!(L&&L.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let N0=V.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&q0!==void 0)N0=N0[q0];if(N0)if(v>=0&&v<=L.width-b&&(g>=0&&g<=L.height-f)){V0.bindFramebuffer(T.FRAMEBUFFER,N0);let D0=L.textures[K0],S0=D0.format,z0=D0.type;if(!KJ.textureFormatReadable(S0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!KJ.textureTypeReadable(z0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let u0=T.createBuffer();if(T.bindBuffer(T.PIXEL_PACK_BUFFER,u0),T.bufferData(T.PIXEL_PACK_BUFFER,H0.byteLength,T.STREAM_READ),L.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+K0);T.readPixels(v,g,b,f,Z0.convert(S0),Z0.convert(z0),0);let t0=x!==null?V.get(x).__webglFramebuffer:null;V0.bindFramebuffer(T.FRAMEBUFFER,t0);let qJ=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await RH(T,qJ,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,u0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,H0),T.deleteBuffer(u0),T.deleteSync(qJ),H0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,v=null,g=0){let b=Math.pow(2,-g),f=Math.floor(L.image.width*b),H0=Math.floor(L.image.height*b),q0=v!==null?v.x:0,K0=v!==null?v.y:0;R.setTexture2D(L,0),T.copyTexSubImage2D(T.TEXTURE_2D,g,0,0,q0,K0,f,H0),V0.unbindTexture()};let uY=T.createFramebuffer(),dY=T.createFramebuffer();if(this.copyTextureToTexture=function(L,v,g=null,b=null,f=0,H0=null){if(H0===null)if(f!==0)i8("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),H0=f,f=0;else H0=0;let q0,K0,N0,D0,S0,z0,u0,t0,qJ,EJ=L.isCompressedTexture?L.mipmaps[H0]:L.image;if(g!==null)q0=g.max.x-g.min.x,K0=g.max.y-g.min.y,N0=g.isBox3?g.max.z-g.min.z:1,D0=g.min.x,S0=g.min.y,z0=g.isBox3?g.min.z:0;else{let tJ=Math.pow(2,-f);if(q0=Math.floor(EJ.width*tJ),K0=Math.floor(EJ.height*tJ),L.isDataArrayTexture)N0=EJ.depth;else if(L.isData3DTexture)N0=Math.floor(EJ.depth*tJ);else N0=1;D0=0,S0=0,z0=0}if(b!==null)u0=b.x,t0=b.y,qJ=b.z;else u0=0,t0=0,qJ=0;let $J=Z0.convert(v.format),C0=Z0.convert(v.type),a0;if(v.isData3DTexture)R.setTexture3D(v,0),a0=T.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)R.setTexture2DArray(v,0),a0=T.TEXTURE_2D_ARRAY;else R.setTexture2D(v,0),a0=T.TEXTURE_2D;T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,v.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,v.unpackAlignment);let n0=T.getParameter(T.UNPACK_ROW_LENGTH),mJ=T.getParameter(T.UNPACK_IMAGE_HEIGHT),A8=T.getParameter(T.UNPACK_SKIP_PIXELS),uJ=T.getParameter(T.UNPACK_SKIP_ROWS),N7=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,EJ.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,EJ.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,D0),T.pixelStorei(T.UNPACK_SKIP_ROWS,S0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,z0);let YJ=L.isDataArrayTexture||L.isData3DTexture,hJ=v.isDataArrayTexture||v.isData3DTexture;if(L.isDepthTexture){let tJ=V.get(L),jJ=V.get(v),bJ=V.get(tJ.__renderTarget),MQ=V.get(jJ.__renderTarget);V0.bindFramebuffer(T.READ_FRAMEBUFFER,bJ.__webglFramebuffer),V0.bindFramebuffer(T.DRAW_FRAMEBUFFER,MQ.__webglFramebuffer);for(let K8=0;K8<N0;K8++){if(YJ)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,V.get(L).__webglTexture,f,z0+K8),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,V.get(v).__webglTexture,H0,qJ+K8);T.blitFramebuffer(D0,S0,q0,K0,u0,t0,q0,K0,T.DEPTH_BUFFER_BIT,T.NEAREST)}V0.bindFramebuffer(T.READ_FRAMEBUFFER,null),V0.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(f!==0||L.isRenderTargetTexture||V.has(L)){let tJ=V.get(L),jJ=V.get(v);V0.bindFramebuffer(T.READ_FRAMEBUFFER,uY),V0.bindFramebuffer(T.DRAW_FRAMEBUFFER,dY);for(let bJ=0;bJ<N0;bJ++){if(YJ)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,tJ.__webglTexture,f,z0+bJ);else T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,tJ.__webglTexture,f);if(hJ)T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,jJ.__webglTexture,H0,qJ+bJ);else T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,jJ.__webglTexture,H0);if(f!==0)T.blitFramebuffer(D0,S0,q0,K0,u0,t0,q0,K0,T.COLOR_BUFFER_BIT,T.NEAREST);else if(hJ)T.copyTexSubImage3D(a0,H0,u0,t0,qJ+bJ,D0,S0,q0,K0);else T.copyTexSubImage2D(a0,H0,u0,t0,D0,S0,q0,K0)}V0.bindFramebuffer(T.READ_FRAMEBUFFER,null),V0.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(hJ)if(L.isDataTexture||L.isData3DTexture)T.texSubImage3D(a0,H0,u0,t0,qJ,q0,K0,N0,$J,C0,EJ.data);else if(v.isCompressedArrayTexture)T.compressedTexSubImage3D(a0,H0,u0,t0,qJ,q0,K0,N0,$J,EJ.data);else T.texSubImage3D(a0,H0,u0,t0,qJ,q0,K0,N0,$J,C0,EJ);else if(L.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,H0,u0,t0,q0,K0,$J,C0,EJ.data);else if(L.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,H0,u0,t0,EJ.width,EJ.height,$J,EJ.data);else T.texSubImage2D(T.TEXTURE_2D,H0,u0,t0,q0,K0,$J,C0,EJ);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,n0),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,mJ),T.pixelStorei(T.UNPACK_SKIP_PIXELS,A8),T.pixelStorei(T.UNPACK_SKIP_ROWS,uJ),T.pixelStorei(T.UNPACK_SKIP_IMAGES,N7),H0===0&&v.generateMipmaps)T.generateMipmap(a0);V0.unbindTexture()},this.initRenderTarget=function(L){if(V.get(L).__webglFramebuffer===void 0)R.setupRenderTarget(L)},this.initTexture=function(L){if(L.isCubeTexture)R.setTextureCube(L,0);else if(L.isData3DTexture)R.setTexture3D(L,0);else if(L.isDataArrayTexture||L.isCompressedArrayTexture)R.setTexture2DArray(L,0);else R.setTexture2D(L,0);V0.unbindTexture()},this.resetState=function(){B=0,P=0,x=null,V0.reset(),J0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return c$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=p0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=p0._getUnpackColorSpace()}}function zZ(J,Q){if(Q===m$)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===W7||Q===A7){let $=J.getIndex();if($===null){let Y=[],X=J.getAttribute("position");if(X!==void 0){for(let K=0;K<X.count;K++)Y.push(K);J.setIndex(Y),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===W7)for(let Y=1;Y<=Z;Y++)W.push($.getX(0)),W.push($.getX(Y)),W.push($.getX(Y+1));else for(let Y=0;Y<Z;Y++)if(Y%2===0)W.push($.getX(Y)),W.push($.getX(Y+1)),W.push($.getX(Y+2));else W.push($.getX(Y+2)),W.push($.getX(Y+1)),W.push($.getX(Y));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let H=J.clone();return H.setIndex(W),H.clearGroups(),H}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class AZ extends F9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new NY(Q)}),this.register(function(Q){return new FY(Q)}),this.register(function(Q){return new zY(Q)}),this.register(function(Q){return new CY(Q)}),this.register(function(Q){return new wY(Q)}),this.register(function(Q){return new RY(Q)}),this.register(function(Q){return new kY(Q)}),this.register(function(Q){return new MY(Q)}),this.register(function(Q){return new LY(Q)}),this.register(function(Q){return new EY(Q)}),this.register(function(Q){return new DY(Q)}),this.register(function(Q){return new OY(Q)}),this.register(function(Q){return new BY(Q)}),this.register(function(Q){return new VY(Q)}),this.register(function(Q){return new GY(Q)}),this.register(function(Q){return new _Y(Q)}),this.register(function(Q){return new PY(Q)})}load(J,Q,$,Z){let W=this,H;if(this.resourcePath!=="")H=this.resourcePath;else if(this.path!==""){let K=W8.extractUrlBase(J);H=W8.resolveURL(K,this.path)}else H=W8.extractUrlBase(J);this.manager.itemStart(J);let Y=function(K){if(Z)Z(K);else console.error(K);W.manager.itemError(J),W.manager.itemEnd(J)},X=new Z8(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(K){try{W.parse(K,H,function(U){Q(U),W.manager.itemEnd(J)},Y)}catch(U){Y(U)}},$,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,H={},Y={},X=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===IY){try{H[d0.KHR_BINARY_GLTF]=new AY(J)}catch(G){if(Z)Z(G);return}W=JSON.parse(H[d0.KHR_BINARY_GLTF].content)}else W=JSON.parse(X.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new vY(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](K);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[G.name]=G,H[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],q=W.extensionsRequired||[];switch(G){case d0.KHR_MATERIALS_UNLIT:H[G]=new qY;break;case d0.KHR_DRACO_MESH_COMPRESSION:H[G]=new TY(W,this.dracoLoader);break;case d0.KHR_TEXTURE_TRANSFORM:H[G]=new SY;break;case d0.KHR_MESH_QUANTIZATION:H[G]=new jY;break;default:if(q.indexOf(G)>=0&&Y[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}K.setExtensions(H),K.setPlugins(Y),K.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function j1(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var d0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GY{constructor(J){this.parser=J,this.name=d0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,X=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],K,U=new w0(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],IJ);let G=X.range!==void 0?X.range:0;switch(X.type){case"directional":K=new U7(U),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new HQ(U),K.distance=G;break;case"spot":K=new K7(U),K.distance=G,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,K.angle=X.spot.outerConeAngle,K.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(K.position.set(0,0,0),L9(K,X),X.intensity!==void 0)K.intensity=X.intensity;return K.name=Q.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(K),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],Y=(W.extensions&&W.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return $._getNodeRef(Q.cache,Y,X)})}}class qY{constructor(){this.name=d0.KHR_MATERIALS_UNLIT}getMaterialType(){return fJ}extendParams(J,Q,$){let Z=[];J.color=new w0(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let H=W.baseColorFactor;J.color.setRGB(H[0],H[1],H[2],IJ),J.opacity=H[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,gJ))}return Promise.all(Z)}}class EY{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)Q.emissiveIntensity=W;return Promise.resolve()}}class NY{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return aJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.clearcoatFactor!==void 0)Q.clearcoat=H.clearcoatFactor;if(H.clearcoatTexture!==void 0)W.push($.assignTexture(Q,"clearcoatMap",H.clearcoatTexture));if(H.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=H.clearcoatRoughnessFactor;if(H.clearcoatRoughnessTexture!==void 0)W.push($.assignTexture(Q,"clearcoatRoughnessMap",H.clearcoatRoughnessTexture));if(H.clearcoatNormalTexture!==void 0){if(W.push($.assignTexture(Q,"clearcoatNormalMap",H.clearcoatNormalTexture)),H.clearcoatNormalTexture.scale!==void 0){let Y=H.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new P0(Y,Y)}}return Promise.all(W)}}class FY{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_DISPERSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return aJ}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class OY{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return aJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.iridescenceFactor!==void 0)Q.iridescence=H.iridescenceFactor;if(H.iridescenceTexture!==void 0)W.push($.assignTexture(Q,"iridescenceMap",H.iridescenceTexture));if(H.iridescenceIor!==void 0)Q.iridescenceIOR=H.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(H.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=H.iridescenceThicknessMinimum;if(H.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=H.iridescenceThicknessMaximum;if(H.iridescenceThicknessTexture!==void 0)W.push($.assignTexture(Q,"iridescenceThicknessMap",H.iridescenceThicknessTexture));return Promise.all(W)}}class RY{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_SHEEN}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return aJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];Q.sheenColor=new w0(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let H=Z.extensions[this.name];if(H.sheenColorFactor!==void 0){let Y=H.sheenColorFactor;Q.sheenColor.setRGB(Y[0],Y[1],Y[2],IJ)}if(H.sheenRoughnessFactor!==void 0)Q.sheenRoughness=H.sheenRoughnessFactor;if(H.sheenColorTexture!==void 0)W.push($.assignTexture(Q,"sheenColorMap",H.sheenColorTexture,gJ));if(H.sheenRoughnessTexture!==void 0)W.push($.assignTexture(Q,"sheenRoughnessMap",H.sheenRoughnessTexture));return Promise.all(W)}}class kY{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return aJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.transmissionFactor!==void 0)Q.transmission=H.transmissionFactor;if(H.transmissionTexture!==void 0)W.push($.assignTexture(Q,"transmissionMap",H.transmissionTexture));return Promise.all(W)}}class MY{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_VOLUME}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return aJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.thickness=H.thicknessFactor!==void 0?H.thicknessFactor:0,H.thicknessTexture!==void 0)W.push($.assignTexture(Q,"thicknessMap",H.thicknessTexture));Q.attenuationDistance=H.attenuationDistance||1/0;let Y=H.attenuationColor||[1,1,1];return Q.attenuationColor=new w0().setRGB(Y[0],Y[1],Y[2],IJ),Promise.all(W)}}class LY{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_IOR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return aJ}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class DY{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_SPECULAR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return aJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.specularIntensity=H.specularFactor!==void 0?H.specularFactor:1,H.specularTexture!==void 0)W.push($.assignTexture(Q,"specularIntensityMap",H.specularTexture));let Y=H.specularColorFactor||[1,1,1];if(Q.specularColor=new w0().setRGB(Y[0],Y[1],Y[2],IJ),H.specularColorTexture!==void 0)W.push($.assignTexture(Q,"specularColorMap",H.specularColorTexture,gJ));return Promise.all(W)}}class VY{constructor(J){this.parser=J,this.name=d0.EXT_MATERIALS_BUMP}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return aJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.bumpScale=H.bumpFactor!==void 0?H.bumpFactor:1,H.bumpTexture!==void 0)W.push($.assignTexture(Q,"bumpMap",H.bumpTexture));return Promise.all(W)}}class BY{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return aJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.anisotropyStrength!==void 0)Q.anisotropy=H.anisotropyStrength;if(H.anisotropyRotation!==void 0)Q.anisotropyRotation=H.anisotropyRotation;if(H.anisotropyTexture!==void 0)W.push($.assignTexture(Q,"anisotropyMap",H.anisotropyTexture));return Promise.all(W)}}class zY{constructor(J){this.parser=J,this.name=d0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],H=Q.options.ktx2Loader;if(!H)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,H)}}class CY{constructor(J){this.parser=J,this.name=d0.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=Z.images[H.source],X=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)X=K}return $.loadTextureImage(J,H.source,X)}}class wY{constructor(J){this.parser=J,this.name=d0.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=Z.images[H.source],X=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)X=K}return $.loadTextureImage(J,H.source,X)}}class _Y{constructor(J){this.name=d0.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),H=this.parser.options.meshoptDecoder;if(!H||!H.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(Y){let X=Z.byteOffset||0,K=Z.byteLength||0,U=Z.count,G=Z.byteStride,q=new Uint8Array(Y,X,K);if(H.decodeGltfBufferAsync)return H.decodeGltfBufferAsync(U,G,q,Z.mode,Z.filter).then(function(E){return E.buffer});else return H.ready.then(function(){let E=new ArrayBuffer(U*G);return H.decodeGltfBuffer(new Uint8Array(E),U,G,q,Z.mode,Z.filter),E})})}else return null}}class PY{constructor(J){this.name=d0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let K of Z.primitives)if(K.mode!==Z9.TRIANGLES&&K.mode!==Z9.TRIANGLE_STRIP&&K.mode!==Z9.TRIANGLE_FAN&&K.mode!==void 0)return null;let H=$.extensions[this.name].attributes,Y=[],X={};for(let K in H)Y.push(this.parser.getDependency("accessor",H[K]).then((U)=>{return X[K]=U,X[K]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((K)=>{let U=K.pop(),G=U.isGroup?U.children:[U],q=K[0].count,E=[];for(let N of G){let k=new f0,M=new I,F=new pJ,O=new I(1,1,1),w=new i6(N.geometry,N.material,q);for(let D=0;D<q;D++){if(X.TRANSLATION)M.fromBufferAttribute(X.TRANSLATION,D);if(X.ROTATION)F.fromBufferAttribute(X.ROTATION,D);if(X.SCALE)O.fromBufferAttribute(X.SCALE,D);w.setMatrixAt(D,k.compose(M,F,O))}for(let D in X)if(D==="_COLOR_0"){let C=X[D];w.instanceColor=new F8(C.array,C.itemSize,C.normalized)}else if(D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE")N.geometry.setAttribute(D,X[D]);UJ.prototype.copy.call(w,N),this.parser.assignFinalMaterial(w),E.push(w)}if(U.isGroup)return U.clear(),U.add(...E),U;return E[0]})}}var IY="glTF",d7=12,YY={JSON:1313821514,BIN:5130562};class AY{constructor(J){this.name=d0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,d7),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==IY)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-d7,W=new DataView(J,d7),H=0;while(H<Z){let Y=W.getUint32(H,!0);H+=4;let X=W.getUint32(H,!0);if(H+=4,X===YY.JSON){let K=new Uint8Array(J,d7+H,Y);this.content=$.decode(K)}else if(X===YY.BIN){let K=d7+H;this.body=J.slice(K,K+Y)}H+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class TY{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=d0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,H=J.extensions[this.name].attributes,Y={},X={},K={};for(let U in H){let G=PZ[U]||U.toLowerCase();Y[G]=H[U]}for(let U in J.attributes){let G=PZ[U]||U.toLowerCase();if(H[U]!==void 0){let q=$.accessors[J.attributes[U]],E=E7[q.componentType];K[G]=E.name,X[G]=q.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(G,q){Z.decodeDracoFile(U,function(E){for(let N in E.attributes){let k=E.attributes[N],M=X[N];if(M!==void 0)k.normalized=M}G(E)},Y,K,IJ,q)})})}}class SY{constructor(){this.name=d0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class jY{constructor(){this.name=d0.KHR_MESH_QUANTIZATION}}class TZ extends J8{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let H=0;H!==Z;H++)Q[H]=$[W+H];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=Y*2,K=Y*3,U=Z-Q,G=($-Q)/U,q=G*G,E=q*G,N=J*K,k=N-K,M=-2*E+3*q,F=E-q,O=1-M,w=F-q+G;for(let D=0;D!==Y;D++){let C=H[k+D+Y],S=H[k+D+X]*U,_=H[N+D+Y],A=H[N+D]*U;W[D]=O*C+w*S+M*_+F*A}return W}}var y1=new pJ;class yY extends TZ{interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return y1.fromArray(W).normalize().toArray(W),W}}var Z9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},E7={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},XY={9728:E9,9729:DJ,9984:j6,9985:Q7,9986:R8,9987:y9},KY={33071:J7,33648:S6,10497:e8},CZ={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},PZ={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Y8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},v1={CUBICSPLINE:void 0,LINEAR:b6,STEP:l$},wZ={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function f1(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new e9({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:i9});return J.DefaultMaterial}function I8(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function L9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function h1(J,Q,$){let Z=!1,W=!1,H=!1;for(let U=0,G=Q.length;U<G;U++){let q=Q[U];if(q.POSITION!==void 0)Z=!0;if(q.NORMAL!==void 0)W=!0;if(q.COLOR_0!==void 0)H=!0;if(Z&&W&&H)break}if(!Z&&!W&&!H)return Promise.resolve(J);let Y=[],X=[],K=[];for(let U=0,G=Q.length;U<G;U++){let q=Q[U];if(Z){let E=q.POSITION!==void 0?$.getDependency("accessor",q.POSITION):J.attributes.position;Y.push(E)}if(W){let E=q.NORMAL!==void 0?$.getDependency("accessor",q.NORMAL):J.attributes.normal;X.push(E)}if(H){let E=q.COLOR_0!==void 0?$.getDependency("accessor",q.COLOR_0):J.attributes.color;K.push(E)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(K)]).then(function(U){let G=U[0],q=U[1],E=U[2];if(Z)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=q;if(H)J.morphAttributes.color=E;return J.morphTargetsRelative=!0,J})}function b1(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function x1(J){let Q,$=J.extensions&&J.extensions[d0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+_Z($.attributes);else Q=J.indices+":"+_Z(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+_Z(J.targets[Z]);return Q}function _Z(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function IZ(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function g1(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var p1=new f0;class vY{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new j1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,H=-1;if(typeof navigator<"u"){let Y=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=$&&X?parseInt(X[1],10):-1,W=Y.indexOf("Firefox")>-1,H=W?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||W&&H<98)this.textureLoader=new ZQ(this.options.manager);else this.textureLoader=new XQ(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Z8(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(H){return H._markDefs&&H._markDefs()}),Promise.all(this._invokeAll(function(H){return H.beforeRoot&&H.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(H){let Y={scene:H[0][Z.scene||0],scenes:H[0],animations:H[1],cameras:H[2],asset:Z.asset,parser:$,userData:{}};return I8(W,Y,Z),L9(Y,Z),Promise.all($._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let H=Q[Z].joints;for(let Y=0,X=H.length;Y<X;Y++)J[H[Y]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];if(H.mesh!==void 0){if(this._addNodeRef(this.meshCache,H.mesh),H.skin!==void 0)$[H.mesh].isSkinnedMesh=!0}if(H.camera!==void 0)this._addNodeRef(this.cameraCache,H.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(H,Y)=>{let X=this.associations.get(H);if(X!=null)this.associations.set(Y,X);for(let[K,U]of H.children.entries())W(U,Y.children[K])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,H){return $.getDependency(J,H)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[d0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,H){$.load(W8.resolveURL(Q.uri,Z.path),W,void 0,function(){H(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let H=CZ[Z.type],Y=E7[Z.componentType],X=Z.normalized===!0,K=new Y(Z.count*H);return Promise.resolve(new FJ(K,H,X))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(H){let Y=H[0],X=CZ[Z.type],K=E7[Z.componentType],U=K.BYTES_PER_ELEMENT,G=U*X,q=Z.byteOffset||0,E=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,N=Z.normalized===!0,k,M;if(E&&E!==G){let F=Math.floor(q/E),O="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+F+":"+Z.count,w=Q.cache.get(O);if(!w)k=new K(Y,F*E,Z.count*E/U),w=new V8(k,E/U),Q.cache.add(O,w);M=new r9(w,X,q%E/U,N)}else{if(Y===null)k=new K(Z.count*X);else k=new K(Y,q,Z.count*X);M=new FJ(k,X,N)}if(Z.sparse!==void 0){let F=CZ.SCALAR,O=E7[Z.sparse.indices.componentType],w=Z.sparse.indices.byteOffset||0,D=Z.sparse.values.byteOffset||0,C=new O(H[1],w,Z.sparse.count*F),S=new K(H[2],D,Z.sparse.count*X);if(Y!==null)M=new FJ(M.array.slice(),M.itemSize,M.normalized);M.normalized=!1;for(let _=0,A=C.length;_<A;_++){let j=C[_];if(M.setX(j,S[_*X]),X>=2)M.setY(j,S[_*X+1]);if(X>=3)M.setZ(j,S[_*X+2]);if(X>=4)M.setW(j,S[_*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=N}return M})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,H=Q.images[W],Y=this.textureLoader;if(H.uri){let X=$.manager.getHandler(H.uri);if(X!==null)Y=X}return this.loadTextureImage(J,W,Y)}loadTextureImage(J,Q,$){let Z=this,W=this.json,H=W.textures[J],Y=W.images[Q],X=(Y.uri||Y.bufferView)+":"+H.sampler;if(this.textureCache[X])return this.textureCache[X];let K=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=H.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let q=(W.samplers||{})[H.sampler]||{};return U.magFilter=XY[q.magFilter]||DJ,U.minFilter=XY[q.minFilter]||y9,U.wrapS=KY[q.wrapS]||e8,U.wrapT=KY[q.wrapT]||e8,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==E9&&U.minFilter!==DJ,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=K,K}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let H=Z.images[J],Y=self.URL||self.webkitURL,X=H.uri||"",K=!1;if(H.bufferView!==void 0)X=$.getDependency("bufferView",H.bufferView).then(function(G){K=!0;let q=new Blob([G],{type:H.mimeType});return X=Y.createObjectURL(q),X});else if(H.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(G){return new Promise(function(q,E){let N=q;if(Q.isImageBitmapLoader===!0)N=function(k){let M=new NJ(k);M.needsUpdate=!0,q(M)};Q.load(W8.resolveURL(G,W.path),N,void 0,E)})}).then(function(G){if(K===!0)Y.revokeObjectURL(X);return L9(G,H),G.userData.mimeType=H.mimeType||g1(H.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(H){if(!H)return null;if($.texCoord!==void 0&&$.texCoord>0)H=H.clone(),H.channel=$.texCoord;if(W.extensions[d0.KHR_TEXTURE_TRANSFORM]){let Y=$.extensions!==void 0?$.extensions[d0.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=W.associations.get(H);H=W.extensions[d0.KHR_TEXTURE_TRANSFORM].extendTexture(H,Y),W.associations.set(H,X)}}if(Z!==void 0)H.colorSpace=Z;return J[Q]=H,H})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,H=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new x7,oJ.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,X.sizeAttenuation=!1,this.cache.add(Y,X);$=X}else if(J.isLine){let Y="LineBasicMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new t9,oJ.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,this.cache.add(Y,X);$=X}if(Z||W||H){let Y="ClonedMaterial:"+$.uuid+":";if(Z)Y+="derivative-tangents:";if(W)Y+="vertex-colors:";if(H)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=$.clone(),W)X.vertexColors=!0;if(H)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get($))}$=X}J.material=$}getMaterialType(){return e9}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],H,Y={},X=W.extensions||{},K=[];if(X[d0.KHR_MATERIALS_UNLIT]){let G=Z[d0.KHR_MATERIALS_UNLIT];H=G.getMaterialType(),K.push(G.extendParams(Y,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(Y.color=new w0(1,1,1),Y.opacity=1,Array.isArray(G.baseColorFactor)){let q=G.baseColorFactor;Y.color.setRGB(q[0],q[1],q[2],IJ),Y.opacity=q[3]}if(G.baseColorTexture!==void 0)K.push(Q.assignTexture(Y,"map",G.baseColorTexture,gJ));if(Y.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,Y.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)K.push(Q.assignTexture(Y,"metalnessMap",G.metallicRoughnessTexture)),K.push(Q.assignTexture(Y,"roughnessMap",G.metallicRoughnessTexture));H=this._invokeOne(function(q){return q.getMaterialType&&q.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(q){return q.extendMaterialParams&&q.extendMaterialParams(J,Y)})))}if(W.doubleSided===!0)Y.side=vJ;let U=W.alphaMode||wZ.OPAQUE;if(U===wZ.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===wZ.MASK)Y.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&H!==fJ){if(K.push(Q.assignTexture(Y,"normalMap",W.normalTexture)),Y.normalScale=new P0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;Y.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&H!==fJ){if(K.push(Q.assignTexture(Y,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)Y.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&H!==fJ){let G=W.emissiveFactor;Y.emissive=new w0().setRGB(G[0],G[1],G[2],IJ)}if(W.emissiveTexture!==void 0&&H!==fJ)K.push(Q.assignTexture(Y,"emissiveMap",W.emissiveTexture,gJ));return Promise.all(K).then(function(){let G=new H(Y);if(W.name)G.name=W.name;if(L9(G,W),Q.associations.set(G,{materials:J}),W.extensions)I8(Z,G,W);return G})}createUniqueName(J){let Q=s0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(Y){return $[d0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return UY(X,Y,Q)})}let H=[];for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=x1(K),G=Z[U];if(G)H.push(G.promise);else{let q;if(K.extensions&&K.extensions[d0.KHR_DRACO_MESH_COMPRESSION])q=W(K);else q=UY(new VJ,K,Q);Z[U]={primitive:K,promise:q},H.push(q)}}return Promise.all(H)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],H=W.primitives,Y=[];for(let X=0,K=H.length;X<K;X++){let U=H[X].material===void 0?f1(this.cache):this.getDependency("material",H[X].material);Y.push(U)}return Y.push(Q.loadGeometries(H)),Promise.all(Y).then(function(X){let K=X.slice(0,X.length-1),U=X[X.length-1],G=[];for(let E=0,N=U.length;E<N;E++){let k=U[E],M=H[E],F,O=K[E];if(M.mode===Z9.TRIANGLES||M.mode===Z9.TRIANGLE_STRIP||M.mode===Z9.TRIANGLE_FAN||M.mode===void 0){if(F=W.isSkinnedMesh===!0?new s6(k,O):new OJ(k,O),F.isSkinnedMesh===!0)F.normalizeSkinWeights();if(M.mode===Z9.TRIANGLE_STRIP)F.geometry=zZ(F.geometry,A7);else if(M.mode===Z9.TRIANGLE_FAN)F.geometry=zZ(F.geometry,W7)}else if(M.mode===Z9.LINES)F=new B8(k,O);else if(M.mode===Z9.LINE_STRIP)F=new H7(k,O);else if(M.mode===Z9.LINE_LOOP)F=new o6(k,O);else if(M.mode===Z9.POINTS)F=new a6(k,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);if(Object.keys(F.geometry.morphAttributes).length>0)b1(F,W);if(F.name=Q.createUniqueName(W.name||"mesh_"+J),L9(F,W),M.extensions)I8(Z,F,M);Q.assignFinalMaterial(F),G.push(F)}for(let E=0,N=G.length;E<N;E++)Q.associations.set(G[E],{meshes:J,primitives:E});if(G.length===1){if(W.extensions)I8(Z,G[0],W);return G[0]}let q=new xJ;if(W.extensions)I8(Z,q,W);Q.associations.set(q,{meshes:J});for(let E=0,N=G.length;E<N;E++)q.add(G[E]);return q})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new BJ(T7.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new C8(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return L9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),H=Z,Y=[],X=[];for(let K=0,U=H.length;K<U;K++){let G=H[K];if(G){Y.push(G);let q=new f0;if(W!==null)q.fromArray(W.array,K*16);X.push(q)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[K])}return new h7(Y,X)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,H=[],Y=[],X=[],K=[],U=[];for(let G=0,q=Z.channels.length;G<q;G++){let E=Z.channels[G],N=Z.samplers[E.sampler],k=E.target,M=k.node,F=Z.parameters!==void 0?Z.parameters[N.input]:N.input,O=Z.parameters!==void 0?Z.parameters[N.output]:N.output;if(k.node===void 0)continue;H.push(this.getDependency("node",M)),Y.push(this.getDependency("accessor",F)),X.push(this.getDependency("accessor",O)),K.push(N),U.push(k)}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(K),Promise.all(U)]).then(function(G){let q=G[0],E=G[1],N=G[2],k=G[3],M=G[4],F=[];for(let w=0,D=q.length;w<D;w++){let C=q[w],S=E[w],_=N[w],A=k[w],j=M[w];if(C===void 0)continue;if(C.updateMatrix)C.updateMatrix();let z=$._createAnimationTracks(C,S,_,A,j);if(z)for(let B=0;B<z.length;B++)F.push(z[B])}let O=new $Q(W,void 0,F);return L9(O,Z),O})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let H=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)H.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,K=Z.weights.length;X<K;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return H})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),H=[],Y=Z.children||[];for(let K=0,U=Y.length;K<U;K++)H.push($.getDependency("node",Y[K]));let X=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(H),X]).then(function(K){let U=K[0],G=K[1],q=K[2];if(q!==null)U.traverse(function(E){if(!E.isSkinnedMesh)return;E.bind(q,p1)});for(let E=0,N=G.length;E<N;E++)U.add(G[E]);return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],H=W.name?Z.createUniqueName(W.name):"",Y=[],X=Z._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(X)Y.push(X);if(W.camera!==void 0)Y.push(Z.getDependency("camera",W.camera).then(function(K){return Z._getNodeRef(Z.cameraCache,W.camera,K)}));return Z._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){Y.push(K)}),this.nodeCache[J]=Promise.all(Y).then(function(K){let U;if(W.isBone===!0)U=new v7;else if(K.length>1)U=new xJ;else if(K.length===1)U=K[0];else U=new UJ;if(U!==K[0])for(let G=0,q=K.length;G<q;G++)U.add(K[G]);if(W.name)U.userData.name=W.name,U.name=H;if(L9(U,W),W.extensions)I8($,U,W);if(W.matrix!==void 0){let G=new f0;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new xJ;if($.name)W.name=Z.createUniqueName($.name);if(L9(W,$),$.extensions)I8(Q,W,$);let H=$.nodes||[],Y=[];for(let X=0,K=H.length;X<K;X++)Y.push(Z.getDependency("node",H[X]));return Promise.all(Y).then(function(X){for(let U=0,G=X.length;U<G;U++)W.add(X[U]);let K=(U)=>{let G=new Map;for(let[q,E]of Z.associations)if(q instanceof oJ||q instanceof NJ)G.set(q,E);return U.traverse((q)=>{let E=Z.associations.get(q);if(E!=null)G.set(q,E)}),G};return Z.associations=K(W),W})}_createAnimationTracks(J,Q,$,Z,W){let H=[],Y=J.name?J.name:J.uuid,X=[];if(Y8[W.path]===Y8.weights)J.traverse(function(q){if(q.morphTargetInfluences)X.push(q.name?q.name:q.uuid)});else X.push(Y);let K;switch(Y8[W.path]){case Y8.weights:K=T9;break;case Y8.rotation:K=g9;break;case Y8.translation:case Y8.scale:K=S9;break;default:switch($.itemSize){case 1:K=T9;break;case 2:case 3:default:K=S9;break}break}let U=Z.interpolation!==void 0?v1[Z.interpolation]:b6,G=this._getArrayFromAccessor($);for(let q=0,E=X.length;q<E;q++){let N=new K(X[q]+"."+Y8[W.path],Q.array,G,U);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(N);H.push(N)}return H}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=IZ(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,H=Q.length;W<H;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof g9?yY:TZ)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function l1(J,Q,$){let Z=Q.attributes,W=new Q9;if(Z.POSITION!==void 0){let X=$.json.accessors[Z.POSITION],K=X.min,U=X.max;if(K!==void 0&&U!==void 0){if(W.set(new I(K[0],K[1],K[2]),new I(U[0],U[1],U[2])),X.normalized){let G=IZ(E7[X.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let H=Q.targets;if(H!==void 0){let X=new I,K=new I;for(let U=0,G=H.length;U<G;U++){let q=H[U];if(q.POSITION!==void 0){let E=$.json.accessors[q.POSITION],N=E.min,k=E.max;if(N!==void 0&&k!==void 0){if(K.setX(Math.max(Math.abs(N[0]),Math.abs(k[0]))),K.setY(Math.max(Math.abs(N[1]),Math.abs(k[1]))),K.setZ(Math.max(Math.abs(N[2]),Math.abs(k[2]))),E.normalized){let M=IZ(E7[E.componentType]);K.multiplyScalar(M)}X.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(X)}J.boundingBox=W;let Y=new iJ;W.getCenter(Y.center),Y.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=Y}function UY(J,Q,$){let Z=Q.attributes,W=[];function H(Y,X){return $.getDependency("accessor",Y).then(function(K){J.setAttribute(X,K)})}for(let Y in Z){let X=PZ[Y]||Y.toLowerCase();if(X in J.attributes)continue;W.push(H(Z[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=$.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});W.push(Y)}if(p0.workingColorSpace!==IJ&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${p0.workingColorSpace}" not supported.`);return L9(J,Q),l1(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?h1(J,Q.targets,$):J})}var SZ=new WeakMap;class jZ extends F9{constructor(J){super(J);this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(J){return this.decoderPath=J,this}setDecoderConfig(J){return this.decoderConfig=J,this}setWorkerLimit(J){return this.workerLimit=J,this}load(J,Q,$,Z){let W=new Z8(this.manager);W.setPath(this.path),W.setResponseType("arraybuffer"),W.setRequestHeader(this.requestHeader),W.setWithCredentials(this.withCredentials),W.load(J,(H)=>{this.parse(H,Q,Z)},$,Z)}parse(J,Q,$=()=>{}){this.decodeDracoFile(J,Q,null,null,gJ,$).catch($)}decodeDracoFile(J,Q,$,Z,W=IJ,H=()=>{}){let Y={attributeIDs:$||this.defaultAttributeIDs,attributeTypes:Z||this.defaultAttributeTypes,useUniqueIDs:!!$,vertexColorSpace:W};return this.decodeGeometry(J,Y).then(Q).catch(H)}decodeGeometry(J,Q){let $=JSON.stringify(Q);if(SZ.has(J)){let X=SZ.get(J);if(X.key===$)return X.promise;else if(J.byteLength===0)throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let Z,W=this.workerNextTaskID++,H=J.byteLength,Y=this._getWorker(W,H).then((X)=>{return Z=X,new Promise((K,U)=>{Z._callbacks[W]={resolve:K,reject:U},Z.postMessage({type:"decode",id:W,taskConfig:Q,buffer:J},[J])})}).then((X)=>this._createGeometry(X.geometry));return Y.catch(()=>!0).then(()=>{if(Z&&W)this._releaseTask(Z,W)}),SZ.set(J,{key:$,promise:Y}),Y}_createGeometry(J){let Q=new VJ;if(J.index)Q.setIndex(new FJ(J.index.array,1));for(let $=0;$<J.attributes.length;$++){let{name:Z,array:W,itemSize:H,stride:Y,vertexColorSpace:X}=J.attributes[$],K;if(H===Y)K=new FJ(W,H);else{let U=new V8(W,Y);K=new r9(U,H,0)}if(Z==="color")this._assignVertexColorSpace(K,X),K.normalized=W instanceof Float32Array===!1;Q.setAttribute(Z,K)}return Q}_assignVertexColorSpace(J,Q){if(Q!==gJ)return;let $=new w0;for(let Z=0,W=J.count;Z<W;Z++)$.fromBufferAttribute(J,Z),p0.colorSpaceToWorking($,gJ),J.setXYZ(Z,$.r,$.g,$.b)}_loadLibrary(J,Q){let $=new Z8(this.manager);return $.setPath(this.decoderPath),$.setResponseType(Q),$.setWithCredentials(this.withCredentials),new Promise((Z,W)=>{$.load(J,Z,void 0,W)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let J=typeof WebAssembly!=="object"||this.decoderConfig.type==="js",Q=[];if(J)Q.push(this._loadLibrary("draco_decoder.js","text"));else Q.push(this._loadLibrary("draco_wasm_wrapper.js","text")),Q.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"));return this.decoderPending=Promise.all(Q).then(($)=>{let Z=$[0];if(!J)this.decoderConfig.wasmBinary=$[1];let W=m1.toString(),H=["/* draco decoder */",Z,"","/* worker */",W.substring(W.indexOf("{")+1,W.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([H]))}),this.decoderPending}_getWorker(J,Q){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let Z=new Worker(this.workerSourceURL);Z._callbacks={},Z._taskCosts={},Z._taskLoad=0,Z.postMessage({type:"init",decoderConfig:this.decoderConfig}),Z.onmessage=function(W){let H=W.data;switch(H.type){case"decode":Z._callbacks[H.id].resolve(H);break;case"error":Z._callbacks[H.id].reject(H);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+H.type+'"')}},this.workerPool.push(Z)}else this.workerPool.sort(function(Z,W){return Z._taskLoad>W._taskLoad?-1:1});let $=this.workerPool[this.workerPool.length-1];return $._taskCosts[J]=Q,$._taskLoad+=Q,$})}_releaseTask(J,Q){J._taskLoad-=J._taskCosts[Q],delete J._callbacks[Q],delete J._taskCosts[Q]}debug(){console.log("Task load: ",this.workerPool.map((J)=>J._taskLoad))}dispose(){for(let J=0;J<this.workerPool.length;++J)this.workerPool[J].terminate();if(this.workerPool.length=0,this.workerSourceURL!=="")URL.revokeObjectURL(this.workerSourceURL);return this}}function m1(){let J,Q;onmessage=function(Y){let X=Y.data;switch(X.type){case"init":J=X.decoderConfig,Q=new Promise(function(G){J.onModuleLoaded=function(q){G({draco:q})},DracoDecoderModule(J)});break;case"decode":let{buffer:K,taskConfig:U}=X;Q.then((G)=>{let q=G.draco,E=new q.Decoder;try{let N=$(q,E,new Int8Array(K),U),k=N.attributes.map((M)=>M.array.buffer);if(N.index)k.push(N.index.array.buffer);self.postMessage({type:"decode",id:X.id,geometry:N},k)}catch(N){console.error(N),self.postMessage({type:"error",id:X.id,error:N.message})}finally{q.destroy(E)}});break}};function $(Y,X,K,U){let{attributeIDs:G,attributeTypes:q}=U,E,N,k=X.GetEncodedGeometryType(K);if(k===Y.TRIANGULAR_MESH)E=new Y.Mesh,N=X.DecodeArrayToMesh(K,K.byteLength,E);else if(k===Y.POINT_CLOUD)E=new Y.PointCloud,N=X.DecodeArrayToPointCloud(K,K.byteLength,E);else throw Error("THREE.DRACOLoader: Unexpected geometry type.");if(!N.ok()||E.ptr===0)throw Error("THREE.DRACOLoader: Decoding failed: "+N.error_msg());let M={index:null,attributes:[]};for(let F in G){let O=self[q[F]],w,D;if(U.useUniqueIDs)D=G[F],w=X.GetAttributeByUniqueId(E,D);else{if(D=X.GetAttributeId(E,Y[G[F]]),D===-1)continue;w=X.GetAttribute(E,D)}let C=W(Y,X,E,F,O,w);if(F==="color")C.vertexColorSpace=U.vertexColorSpace;M.attributes.push(C)}if(k===Y.TRIANGULAR_MESH)M.index=Z(Y,X,E);return Y.destroy(E),M}function Z(Y,X,K){let G=K.num_faces()*3,q=G*4,E=Y._malloc(q);X.GetTrianglesUInt32Array(K,q,E);let N=new Uint32Array(Y.HEAPF32.buffer,E,G).slice();return Y._free(E),{array:N,itemSize:1}}function W(Y,X,K,U,G,q){let E=K.num_points(),N=q.num_components(),k=H(Y,G),M=N*G.BYTES_PER_ELEMENT,F=Math.ceil(M/4)*4,O=F/G.BYTES_PER_ELEMENT,w=E*M,D=E*F,C=Y._malloc(w);X.GetAttributeDataArrayForAllPoints(K,q,k,w,C);let S=new G(Y.HEAPF32.buffer,C,w/G.BYTES_PER_ELEMENT),_;if(M===F)_=S.slice();else{_=new G(D/G.BYTES_PER_ELEMENT);let A=0;for(let j=0,z=S.length;j<z;j++){for(let B=0;B<N;B++)_[A+B]=S[j*N+B];A+=O}}return Y._free(C),{name:U,count:E,itemSize:N,array:_,stride:O}}function H(Y,X){switch(X){case Float32Array:return Y.DT_FLOAT32;case Int8Array:return Y.DT_INT8;case Int16Array:return Y.DT_INT16;case Int32Array:return Y.DT_INT32;case Uint8Array:return Y.DT_UINT8;case Uint16Array:return Y.DT_UINT16;case Uint32Array:return Y.DT_UINT32}}}var fY={type:"change"},vZ={type:"start"},bY={type:"end"},OQ=new b9,hY=new X9,u1=Math.cos(70*T7.DEG2RAD),wJ=new I,lJ=2*Math.PI,e0={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yZ=0.000001;class fZ extends GQ{constructor(J,Q=null){super(J,Q);if(this.state=e0.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:n9.ROTATE,MIDDLE:n9.DOLLY,RIGHT:n9.PAN},this.touches={ONE:s9.ROTATE,TWO:s9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new pJ,this._lastTargetPosition=new I,this._quat=new pJ().setFromUnitVectors(J.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new g7,this._sphericalDelta=new g7,this._scale=1,this._panOffset=new I,this._rotateStart=new P0,this._rotateEnd=new P0,this._rotateDelta=new P0,this._panStart=new P0,this._panEnd=new P0,this._panDelta=new P0,this._dollyStart=new P0,this._dollyEnd=new P0,this._dollyDelta=new P0,this._dollyDirection=new I,this._mouse=new P0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c1.bind(this),this._onPointerDown=d1.bind(this),this._onPointerUp=n1.bind(this),this._onContextMenu=e1.bind(this),this._onMouseWheel=o1.bind(this),this._onKeyDown=a1.bind(this),this._onTouchStart=r1.bind(this),this._onTouchMove=t1.bind(this),this._onMouseDown=s1.bind(this),this._onMouseMove=i1.bind(this),this._interceptControlDown=JE.bind(this),this._interceptControlUp=QE.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fY),this.update(),this.state=e0.NONE}update(J=null){let Q=this.object.position;if(wJ.copy(Q).sub(this.target),wJ.applyQuaternion(this._quat),this._spherical.setFromVector3(wJ),this.autoRotate&&this.state===e0.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=lJ;else if($>Math.PI)$-=lJ;if(Z<-Math.PI)Z+=lJ;else if(Z>Math.PI)Z-=lJ;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let H=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=H!=this._spherical.radius}if(wJ.setFromSpherical(this._spherical),wJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(wJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let H=null;if(this.object.isPerspectiveCamera){let Y=wJ.length();H=this._clampDistance(Y*this._scale);let X=Y-H;this.object.position.addScaledVector(this._dollyDirection,X),this.object.updateMatrixWorld(),W=!!X}else if(this.object.isOrthographicCamera){let Y=new I(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let X=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=X!==this.object.zoom;let K=new I(this._mouse.x,this._mouse.y,0);K.unproject(this.object),this.object.position.sub(K).add(Y),this.object.updateMatrixWorld(),H=wJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(H!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(H).add(this.object.position);else if(OQ.origin.copy(this.object.position),OQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(OQ.direction))<u1)this.object.lookAt(this.target);else hY.setFromNormalAndCoplanarPoint(this.object.up,this.target),OQ.intersectPlane(hY,this.target)}else if(this.object.isOrthographicCamera){let H=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),H!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>yZ||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yZ||this._lastTargetPosition.distanceToSquared(this.target)>yZ)return this.dispatchEvent(fY),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return lJ/60*this.autoRotateSpeed*J;else return lJ/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){wJ.setFromMatrixColumn(Q,0),wJ.multiplyScalar(-J),this._panOffset.add(wJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)wJ.setFromMatrixColumn(Q,1);else wJ.setFromMatrixColumn(Q,0),wJ.crossVectors(this.object.up,wJ);wJ.multiplyScalar(J),this._panOffset.add(wJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;wJ.copy(Z).sub(this.target);let W=wJ.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/$.clientHeight,this.object.matrix),this._panUp(2*Q*W/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,W=Q-$.top,H=$.width,Y=$.height;this._mouse.x=Z/H*2-1,this._mouse.y=-(W/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(lJ*this._rotateDelta.x/Q.clientHeight),this._rotateUp(lJ*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(lJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-lJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(lJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-lJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,W=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(lJ*this._rotateDelta.x/Q.clientHeight),this._rotateUp(lJ*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,W=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let H=(J.pageX+Q.x)*0.5,Y=(J.pageY+Q.y)*0.5;this._updateZoomParameters(H,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new P0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function d1(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J)}function c1(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function n1(J){switch(this._removePointer(J),this._pointers.length){case 0:this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bY),this.state=e0.NONE;break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function s1(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case n9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=e0.DOLLY;break;case n9.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=e0.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=e0.ROTATE}break;case n9.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=e0.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=e0.PAN}break;default:this.state=e0.NONE}if(this.state!==e0.NONE)this.dispatchEvent(vZ)}function i1(J){switch(this.state){case e0.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case e0.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case e0.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function o1(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==e0.NONE)return;J.preventDefault(),this.dispatchEvent(vZ),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(bY)}function a1(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function r1(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case s9.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=e0.TOUCH_ROTATE;break;case s9.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=e0.TOUCH_PAN;break;default:this.state=e0.NONE}break;case 2:switch(this.touches.TWO){case s9.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=e0.TOUCH_DOLLY_PAN;break;case s9.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=e0.TOUCH_DOLLY_ROTATE;break;default:this.state=e0.NONE}break;default:this.state=e0.NONE}if(this.state!==e0.NONE)this.dispatchEvent(vZ)}function t1(J){switch(this._trackPointer(J),this.state){case e0.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case e0.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case e0.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case e0.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=e0.NONE}}function e1(J){if(this.enabled===!1)return;J.preventDefault()}function JE(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function QE(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}class D9{static instance;container;scene;camera;renderer;controls=null;bgMesh=null;videoCache=new Map;activeVideoPath=null;VIDEO_MAP={business_formal:"/public/assets/videos/business_formal.mp4",casual_formal:"/public/assets/videos/business_casual.mp4",tactical_casual:"/public/assets/videos/tactical_casual.mp4",full_tactical:"/public/assets/videos/full_tactical.mp4"};principalModel=null;principalInstances=[];formationGroup;gltfloader;targetPositions=[];modelCache=new Map;slotGroup=new xJ;loadedVehicles=new Map;raycaster=new KQ;mouse=new P0;resizeTimer=null;static DEFAULT_SLOTS=[{id:0,role:"SWEEPER",allowed_categories:["SWEEPER"],x:0,z:20,color:65535},{id:1,role:"LEAD",allowed_categories:["LEAD"],x:0,z:10,color:8947848},{id:2,role:"PRINCIPAL",allowed_categories:["PRINCIPAL"],x:0,z:0,color:16766720},{id:3,role:"CAT",allowed_categories:["CAT"],x:0,z:-10,color:16729156},{id:4,role:"ECM",allowed_categories:["ECM"],x:0,z:-20,color:4474111}];TIER_CONFIG={Vanguard:[...D9.DEFAULT_SLOTS],Sentinel:[...D9.DEFAULT_SLOTS],Praetorian:[...D9.DEFAULT_SLOTS]};ROLE_COLOR_HEX={PRINCIPAL:15381256,LEAD:9741240,REAR:3900150,SWEEPER:440020,CAT:15680580,ECM:11032055};cameraTargetPos=new I(0,8,12);cameraLookAt=new I(0,0,0);formationCentroidZ=0;motorcadeSpotLights=[];motorcadeBeams=[];motorcadeLightPools=[];groundPlane=null;radiantTexture=null;isMotorcade=!1;skipFormationAnimation=!1;isTransitioning=!1;boundOnMouseClick;constructor(){if(this.container=document.getElementById("canvas-container"),!this.container)throw Error("Canvas container not found!");this.scene=new n6,this.scene.background=new w0(657930),this.camera=new BJ(75,window.innerWidth/window.innerHeight,0.1,1000),this.camera.position.z=8,this.renderer=new BZ({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=_7,this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement),this.controls=new fZ(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=0.05,this.controls.minDistance=5,this.controls.maxDistance=120,this.controls.maxPolarAngle=Math.PI/2-0.05,this.controls.enabled=!1,this.controls.addEventListener("start",()=>{this.isTransitioning=!1}),window.addEventListener("wheel",()=>{this.isTransitioning=!1});let J=new x9(500,500),Q=new e9({color:1381653,roughness:0.6,metalness:0.1});this.groundPlane=new OJ(J,Q),this.groundPlane.rotation.x=-Math.PI/2,this.groundPlane.position.y=-0.05,this.groundPlane.receiveShadow=!0,this.groundPlane.visible=!1,this.scene.add(this.groundPlane);let $=new UQ(500,100,16777215,2236962);$.position.y=-0.02,$.material.transparent=!0,$.material.opacity=0.1,this.groundPlane.add($);let Z=new YQ(16777215,1);this.scene.add(Z);let W=new U7(16777215,2.5);W.position.set(20,50,20),W.castShadow=!0,this.scene.add(W),this.formationGroup=new xJ,this.scene.add(this.formationGroup);let H=new jZ;H.setDecoderPath("/public/js/libs/draco/"),this.gltfloader=new AZ,this.gltfloader.setDRACOLoader(H),this.preloadPrincipal(),window.addEventListener("resize",this.onWindowResize.bind(this)),this.boundOnMouseClick=this.onMouseClick.bind(this),window.addEventListener("click",this.boundOnMouseClick),this.animate(),window.Sentinel=this,console.log("Sentinel SceneManager: Initialized")}createRadiantTexture(){let Q=document.createElement("canvas");Q.width=512,Q.height=512;let $=Q.getContext("2d");if(!$)return null;let Z=$.createRadialGradient(256,256,0,256,256,256);return Z.addColorStop(0,"rgba(255, 255, 255, 1)"),Z.addColorStop(0.8,"rgba(255, 255, 255, 1)"),Z.addColorStop(1,"rgba(255, 255, 255, 0)"),$.fillStyle=Z,$.fillRect(0,0,512,512),new t6(Q)}static getInstance(){if(!D9.instance)D9.instance=new D9;return D9.instance}preloadPrincipal(){this.gltfloader.load("/public/assets/models/Principal-v1.glb",(J)=>{this.principalModel=J.scene,this.principalModel.traverse((Q)=>{if(Q.isMesh)Q.castShadow=!0,Q.receiveShadow=!0}),this.principalModel.scale.set(1,1,1),this.principalModel.visible=!1,this.scene.add(this.principalModel),console.log("Sentinel: Principal Model Loaded")},void 0,(J)=>console.error("Error loading principal:",J))}updatePrincipals(J){if(console.log(`Sentinel: Updating Formation to ${J}`),this.isMotorcade=!1,this.skipFormationAnimation=!1,this.controls)this.controls.enabled=!1;if(this.groundPlane)this.groundPlane.visible=!1;if(this.camera.position.set(4,5,4),this.camera.lookAt(0,0.5,0),this.bgMesh)this.bgMesh.visible=!1;if(this.pauseAllVideos(),this.formationGroup.visible=!0,this.slotGroup.visible=!1,!this.principalModel){console.warn("Principal model not loaded yet.");return}while(this.principalInstances.length<J){let H=this.principalModel.clone();H.visible=!0,H.position.set(1,0,0),H.scale.set(0,0,0),this.formationGroup.add(H),this.principalInstances.push(H),this.targetPositions.push(new I(1,0,0))}while(this.principalInstances.length>J){let H=this.principalInstances.pop();if(this.targetPositions.pop(),H)this.formationGroup.remove(H)}let Q=1.2,$=[];if(J===1)$.push(new I(0,0,0));else if(J===2)$.push(new I(0,0,-Q/2)),$.push(new I(0,0,Q/2));else if(J===3)$.push(new I(0,0,Q/2)),$.push(new I(Q/2,0,-Q/2)),$.push(new I(-Q/2,0,-Q/2));else if(J===4)$.push(new I(-Q,0,0)),$.push(new I(0,0,-Q)),$.push(new I(0,0,Q)),$.push(new I(Q,0,0));else $.push(new I(0,0,0)),$.push(new I(-Q,0,0)),$.push(new I(Q,0,0)),$.push(new I(0,0,-Q)),$.push(new I(0,0,Q));let Z=[...$],W=this.principalInstances.map((H,Y)=>({id:Y,pos:H.position}));this.targetPositions=Array(J).fill(null),Z.forEach((H)=>{let Y=-1,X=1/0;if(W.forEach((K,U)=>{let G=K.pos.distanceTo(H);if(G<X)X=G,Y=U}),Y!==-1){let K=W[Y];if(K)this.targetPositions[K.id]=H,W.splice(Y,1)}}),this.targetPositions.forEach((H,Y)=>{if(!H&&$[Y])this.targetPositions[Y]=$[Y]})}onWindowResize(){if(this.resizeTimer)clearTimeout(this.resizeTimer);this.resizeTimer=setTimeout(()=>{this.refresh()},150)}refresh(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){if(requestAnimationFrame(this.animate.bind(this)),this.isMotorcade){if(this.controls){if(this.isTransitioning){if(this.camera.position.lerp(this.cameraTargetPos,0.08),this.controls.target.lerp(this.cameraLookAt,0.08),this.camera.position.distanceTo(this.cameraTargetPos)<0.05&&this.controls.target.distanceTo(this.cameraLookAt)<0.05)this.isTransitioning=!1}if(this.controls.enabled)this.controls.update()}}if(this.formationGroup.visible)this.principalInstances.forEach((J,Q)=>{let $=this.targetPositions[Q];if(!$)return;J.position.lerp($,0.08),J.scale.lerp(new I(1.5,1.5,1.5),0.1),J.lookAt(-10,0,0)});if(this.activeVideoPath){let J=this.videoCache.get(this.activeVideoPath);if(J)J.texture.needsUpdate=!0}this.renderer.render(this.scene,this.camera)}changeBackground(J){if(console.log(`Sentinel 3D: Switching to [${J}]`),this.isMotorcade&&J==="black"){console.warn("Sentinel: Blocked stale changeBackground('black') while in Motorcade mode");return}if(this.isMotorcade=!1,this.skipFormationAnimation=!1,this.controls)this.controls.enabled=!1;if(this.groundPlane)this.groundPlane.visible=!1;if(this.slotGroup.visible=!1,this.motorcadeSpotLights.forEach((Y)=>{if(Y.visible=!1,Y.target)Y.target.visible=!1}),this.motorcadeBeams.forEach((Y)=>Y.visible=!1),this.motorcadeLightPools.forEach((Y)=>Y.visible=!1),this.loadedVehicles.forEach((Y)=>Y.visible=!1),J!=="black")this.camera.position.set(0,0,8),this.camera.lookAt(0,0,0),this.formationGroup.visible=!1;else this.formationGroup.visible=!0;let $=window.__DRESSCODES__?.[J]?.video_path??this.VIDEO_MAP[J]??null;if(J==="black"||!$){if(this.bgMesh)this.bgMesh.visible=!1;this.pauseAllVideos(),this.activeVideoPath=null;return}let Z=$;if(this.pauseAllVideos(),!this.bgMesh)this.initBgMesh();else if(!this.bgMesh.parent)this.scene.add(this.bgMesh);let W=this.getOrCreateVideo(Z),H=this.bgMesh.material;H.map=W.texture,H.needsUpdate=!0,this.bgMesh.position.set(0,-2,-3.5),this.bgMesh.visible=!0,this.activeVideoPath=Z,W.video.currentTime=0,W.video.play().catch(()=>{})}pauseAllVideos(){this.videoCache.forEach((J)=>{J.video.pause()}),this.activeVideoPath=null}getOrCreateVideo(J){let Q=this.videoCache.get(J);if(Q)return Q;let $=document.createElement("video");$.src=J,$.crossOrigin="anonymous",$.loop=!1,$.muted=!0,$.playsInline=!0,$.style.display="none",$.preload="auto";let Z=new r6($);Z.colorSpace=gJ,Z.minFilter=DJ,Z.magFilter=DJ;let W={video:$,texture:Z};return this.videoCache.set(J,W),W}initBgMesh(){let J=new x9(32,18),Q=new fJ({side:vJ});this.bgMesh=new OJ(J,Q),this.bgMesh.position.set(0,-2,-3.5),this.scene.add(this.bgMesh)}initMotorcadeMode(J="Vanguard"){if(console.log(`Sentinel: Initializing Motorcade for [${J}]`),this.isMotorcade=!0,this.controls)this.controls.enabled=!0,this.controls.target.set(0,0,0),this.controls.update();if(this.bgMesh){this.bgMesh.visible=!1;let Y=this.bgMesh.material;Y.map=null,Y.needsUpdate=!0,this.scene.remove(this.bgMesh)}if(this.pauseAllVideos(),this.activeVideoPath=null,this.groundPlane)this.groundPlane.visible=!0,this.groundPlane.position.y=-0.05;this.formationGroup.visible=!1,this.formationGroup.traverse((Y)=>{Y.visible=!1}),this.principalInstances.forEach((Y)=>{Y.visible=!1}),this.motorcadeSpotLights.forEach((Y)=>{if(this.scene.remove(Y),Y.target)this.scene.remove(Y.target)}),this.motorcadeBeams.forEach((Y)=>this.scene.remove(Y)),this.motorcadeLightPools.forEach((Y)=>this.scene.remove(Y)),this.motorcadeSpotLights=[],this.motorcadeBeams=[],this.motorcadeLightPools=[],this.slotGroup.clear(),this.scene.add(this.slotGroup);let Q=window.__FORMATIONS__?.[J],$;if(Q&&Array.isArray(Q.slots)&&Q.slots.length>0)$=Q.slots.map((Y,X)=>{let K=Y.role??(Array.isArray(Y.allowed_categories)?Y.allowed_categories[0]:"LEAD");return{id:X,role:K,x:Number(Y.x)||0,z:Number(Y.z)||0,color:this.ROLE_COLOR_HEX[K]??8947848,allowed_categories:Array.isArray(Y.allowed_categories)?Y.allowed_categories:[K]}});else $=this.TIER_CONFIG[J]||this.TIER_CONFIG.Vanguard;let Z=$.length>0?$.reduce((Y,X)=>Y+(Number(X.z)||0),0)/$.length:0;if(Z!==0)$=$.map((Y)=>({...Y,z:Number(Y.z)-Z}));if(this.formationCentroidZ=0,this.cameraTargetPos.set(25,8,0),this.cameraLookAt.set(0,0,0),this.camera.position.copy(this.cameraTargetPos),this.camera.lookAt(this.cameraLookAt),this.controls)this.controls.target.set(0,0,0),this.controls.update();this.loadedVehicles.forEach((Y)=>{Y.visible=!0,Y.traverse((X)=>{X.visible=!0})});let W=new Y7(0.1,4.5,25,32,1,!0);W.translate(0,-12.5,0);let H=new x9(9,9);if(!this.radiantTexture)this.radiantTexture=this.createRadiantTexture();if(!$)return;$.forEach((Y)=>{this.createHolographicSlot(Y);let X=new K7(16777215,800);X.position.set(Y.x,25,Y.z),X.target.position.set(Y.x,0,Y.z),X.angle=Math.PI/10,X.penumbra=0.6,X.decay=2,X.distance=50,X.castShadow=!0,this.scene.add(X),this.scene.add(X.target),this.motorcadeSpotLights.push(X);let K=new fJ({color:16777215,transparent:!0,opacity:0.1,side:vJ,blending:a8,depthWrite:!1}),U=new OJ(W,K);U.position.set(Y.x,25,Y.z),this.scene.add(U),this.motorcadeBeams.push(U);let G=new fJ({map:this.radiantTexture,transparent:!0,opacity:0.4,blending:a8,depthWrite:!1}),q=new OJ(H,G);q.position.set(Y.x,0.1,Y.z),q.rotation.x=-Math.PI/2,this.scene.add(q),this.motorcadeLightPools.push(q)}),this.slotGroup.visible=!0,this.renderer.render(this.scene,this.camera)}focusOnSlot(J){if(!this.slotGroup.children.find(($)=>$.userData.id===J))return;if(this.controls)this.controls.enabled=!1;this.motorcadeSpotLights.forEach(($,Z)=>{let W=this.motorcadeBeams[Z],H=this.motorcadeLightPools[Z];if(Z===J){if($.intensity=2000,W)W.material.opacity=0.35;if(H)H.material.opacity=1}else{if($.intensity=50,W)W.material.opacity=0.02;if(H)H.material.opacity=0.05}})}resetMotorcadeCamera(){if(this.controls)this.controls.enabled=!0,this.controls.update();this.motorcadeSpotLights.forEach((J,Q)=>{let $=this.motorcadeBeams[Q],Z=this.motorcadeLightPools[Q];if(J.intensity=800,$)$.material.opacity=0.1;if(Z)Z.material.opacity=0.4})}createHolographicSlot(J){let Q=new a9(3.5,0.1,6),$=new JQ(Q),Z=new t9({color:J.color,transparent:!0,opacity:0.8}),W=new B8($,Z);W.position.set(J.x,0,J.z),W.userData={id:J.id,role:J.role,allowed_categories:Array.isArray(J.allowed_categories)?J.allowed_categories:[J.role],type:"slot"};let H=new Y7(0.05,0.05,2),Y=new fJ({color:J.color}),X=new OJ(H,Y);X.position.y=1,W.add(X),this.slotGroup.add(W)}onMouseClick(J){if(!this.isMotorcade)return;let Q=document.getElementById("garage-drawer");if(Q&&!Q.classList.contains("translate-x-full"))return;this.mouse.x=J.clientX/window.innerWidth*2-1,this.mouse.y=-(J.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let $=this.raycaster.intersectObjects(this.slotGroup.children,!1);if($.length>0){let Z=$[0]?.object.userData;if(Z?.type==="slot")console.log(`Sentinel: Clicked Slot ${Z.role}`),this.focusOnSlot(Z.id),document.body.dispatchEvent(new CustomEvent("sentinel-garage-open",{detail:{slotId:Z.id,role:Z.role,allowed_categories:Array.isArray(Z.allowed_categories)?Z.allowed_categories:[Z.role]}}))}}disposeObject(J){J.traverse((Q)=>{if(Q.isMesh){let $=Q;if($.geometry?.dispose(),Array.isArray($.material))$.material.forEach((Z)=>Z.dispose());else if($.material)$.material.dispose()}})}getOrLoadModel(J){let Q=this.modelCache.get(J);if(Q)return Q.then((Z)=>Z.clone());let $=new Promise((Z,W)=>{this.gltfloader.load(J,(H)=>{let Y=H.scene;Y.traverse((X)=>{if(X.isMesh)X.castShadow=!0,X.receiveShadow=!0}),Z(Y)},void 0,(H)=>{this.modelCache.delete(J),W(H)})});return this.modelCache.set(J,$),$.then((Z)=>Z.clone())}spawnVehicle(J,Q,$=1){let Z=this.slotGroup.children.find((E)=>E.userData.id===J);if(!Z)return;if(this.loadedVehicles.has(J)){let E=this.loadedVehicles.get(J);if(E)this.disposeObject(E),this.scene.remove(E);this.loadedVehicles.delete(J)}if(Q==="none")return;let H=window.__VEHICLES__?.[Q];if(!H||!H.model_path){console.warn(`Sentinel: no manifest entry for vehicle "${Q}" — skipping load.`);return}let Y=H.model_path,X=Number(H.scale)||1,K=(Number(H.model_rotation_y_deg)||0)*(Math.PI/180),U=new xJ;U.position.copy(Z.position),this.scene.add(U),this.loadedVehicles.set(J,U);let G=4,q=[];if($===1)q.push(new I(0,0,0));else if($===2)q.push(new I(-G/2,0,0)),q.push(new I(G/2,0,0));else if($===3)q.push(new I(0,0,G/2)),q.push(new I(-G/2,0,-G/2)),q.push(new I(G/2,0,-G/2));q.forEach((E)=>{this.getOrLoadModel(Y).then((N)=>{N.position.copy(E),N.rotation.y=K,N.scale.setScalar(X);let k=5;N.position.y+=k,U.add(N);let M=E.y,F=()=>{if(N.position.y>M)N.position.y-=0.2,requestAnimationFrame(F);else N.position.y=M};F()}).catch((N)=>console.error(`Sentinel: Failed to load ${Q}`,N))})}}document.addEventListener("DOMContentLoaded",()=>{let J=D9.getInstance();window.Sentinel=J,document.body.addEventListener("sentinel-bg-change",(Q)=>{let $=Q.detail.theme;if($)J.changeBackground($)}),document.body.addEventListener("htmx:afterSettle",()=>{J.refresh()})});
