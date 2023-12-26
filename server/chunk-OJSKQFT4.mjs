import './polyfills.server.mjs';
import{C as K,Ca as J,E as Q,G as x,H as a,I as v,K as _,L as P,M as X,N as ve,O as d,P as h,Q as C,R as _e,S as E,T as Ce,U as Ve,V as De,W as k,b as ce,c as de,d as he,e as fe,f as pe,fa as Y,g as S,h as O,i as N,j as f,k as y,ka as be,l as ge,la as Me,n as V,o as p,p as c,q as Z,qa as Ae,r as me,sa as Ee,z as ye}from"./chunk-GIDFVJE5.mjs";import{a as u,b as m}from"./chunk-KRLCULJA.mjs";var ke=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(Q),a(K))},e.\u0275dir=c({type:e});let t=e;return t})(),ft=(()=>{let e=class e extends ke{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=me(e)))(s||e)}})(),e.\u0275dir=c({type:e,features:[_]});let t=e;return t})(),Ge=new y("NgValueAccessor");var pt={provide:Ge,useExisting:S(()=>W),multi:!0};function gt(){let t=Y()?Y().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var mt=new y("CompositionEventMode"),W=(()=>{let e=class e extends ke{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!gt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(Q),a(K),a(mt,8))},e.\u0275dir=c({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&E("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[k([pt]),_]});let t=e;return t})();function g(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function je(t){return t!=null&&typeof t.length=="number"}var Te=new y("NgValidators"),Be=new y("NgAsyncValidators"),yt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,T=class{static min(e){return vt(e)}static max(e){return _t(e)}static required(e){return Ct(e)}static requiredTrue(e){return Vt(e)}static email(e){return Dt(e)}static minLength(e){return bt(e)}static maxLength(e){return Mt(e)}static pattern(e){return At(e)}static nullValidator(e){return Ue(e)}static compose(e){return qe(e)}static composeAsync(e){return Ze(e)}};function vt(t){return e=>{if(g(e.value)||g(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function _t(t){return e=>{if(g(e.value)||g(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Ct(t){return g(t.value)?{required:!0}:null}function Vt(t){return t.value===!0?null:{required:!0}}function Dt(t){return g(t.value)||yt.test(t.value)?null:{email:!0}}function bt(t){return e=>g(e.value)||!je(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Mt(t){return e=>je(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function At(t){if(!t)return Ue;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(g(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Ue(t){return null}function Re(t){return t!=null}function He(t){return _e(t)?ce(t):t}function Le(t){let e={};return t.forEach(n=>{e=n!=null?u(u({},e),n):e}),Object.keys(e).length===0?null:e}function $e(t,e){return e.map(n=>n(t))}function Et(t){return!t.validate}function We(t){return t.map(e=>Et(e)?e:n=>e.validate(n))}function qe(t){if(!t)return null;let e=t.filter(Re);return e.length==0?null:function(n){return Le($e(n,e))}}function ze(t){return t!=null?qe(We(t)):null}function Ze(t){if(!t)return null;let e=t.filter(Re);return e.length==0?null:function(n){let i=$e(n,e).map(He);return fe(i).pipe(he(Le))}}function Ke(t){return t!=null?Ze(We(t)):null}function Fe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Qe(t){return t._rawValidators}function Xe(t){return t._rawAsyncValidators}function ee(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function we(t,e){let n=ee(e);return ee(t).forEach(r=>{B(n,r)||n.push(r)}),n}function Ie(t,e){return ee(e).filter(n=>!B(t,n))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ze(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},b=class extends U{get formDirective(){return null}get path(){return null}},I=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ft={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},_i=m(u({},Ft),{"[class.ng-submitted]":"isSubmitted"}),Ye=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(I,2))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&X("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[_]});let t=e;return t})(),Je=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(b,10))},e.\u0275dir=c({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&X("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[_]});let t=e;return t})();var F="VALID",G="INVALID",D="PENDING",w="DISABLED";function ne(t){return(q(t)?t.validators:t)||null}function wt(t){return Array.isArray(t)?ze(t):t||null}function re(t,e){return(q(e)?e.asyncValidators:t)||null}function It(t){return Array.isArray(t)?Ke(t):t||null}function q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function et(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new O(1e3,"");if(!i[n])throw new O(1001,"")}function tt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new O(1002,"")})}var M=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===G}get pending(){return this.status==D}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(we(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(we(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ie(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ie(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(i=>{i.disable(m(u({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(u({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(i=>{i.enable(m(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(u({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===D)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;let n=He(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new v,this.statusChanges=new v}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(G)?G:F}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=wt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=It(this._rawAsyncValidators)}},H=class extends M{constructor(e,n,i){super(ne(n),re(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){tt(this,!0,e),Object.keys(e).forEach(i=>{et(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var te=class extends H{};var it=new y("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function St(t,e){return[...e.path,t]}function Se(t,e,n=se){oe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Nt(t,e),Pt(t,e),xt(t,e),Ot(t,e)}function Oe(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),$(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function L(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Ot(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function oe(t,e){let n=Qe(t);e.validator!==null?t.setValidators(Fe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Xe(t);e.asyncValidator!==null?t.setAsyncValidators(Fe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();L(e._rawValidators,r),L(e._rawAsyncValidators,r)}function $(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Qe(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Xe(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return L(e._rawValidators,i),L(e._rawAsyncValidators,i),n}function Nt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&nt(t,e)})}function xt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&nt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function nt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Pt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function kt(t,e){t==null,oe(t,e)}function Gt(t,e){return $(t,e)}function jt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Tt(t){return Object.getPrototypeOf(t.constructor)===ft}function Bt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ut(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===W?n=s:Tt(s)?i=s:r=s}),r||i||n||null}function Rt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ne(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function xe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var j=class extends M{constructor(e=null,n,i){super(ne(n),re(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(xe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ne(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ne(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){xe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ht=t=>t instanceof j;var rt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=c({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Lt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({});let t=e;return t})();var st=new y("NgModelWithFormControlWarning");var $t={provide:b,useExisting:S(()=>ae)},ae=(()=>{let e=class e extends b{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new v,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Se(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Oe(i.control||null,i,!1),Rt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Bt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(Oe(r||null,i),Ht(s)&&(Se(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);kt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Gt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){oe(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Te,10),a(Be,10),a(it,8))},e.\u0275dir=c({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&E("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[k([$t]),_,Z]});let t=e;return t})();var Wt={provide:I,useExisting:S(()=>le)},le=(()=>{let e=class e extends I{set isDisabled(i){}constructor(i,r,s,o,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new v,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Ut(this,o)}ngOnChanges(i){this._added||this._setUpControl(),jt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return St(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(b,13),a(Te,10),a(Be,10),a(Ge,10),a(st,8))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[k([Wt]),_,Z]});let t=e;return t})();var qt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[Lt]});let t=e;return t})(),ie=class extends M{constructor(e,n,i){super(ne(n),re(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){tt(this,!1,e),e.forEach((i,r)=>{et(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Pe(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var ot=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let s=this._reduceControls(i),o={};return Pe(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new H(s,o)}record(i,r=null){let s=this._reduceControls(i);return new te(s,r)}control(i,r,s){let o={};return this.useNonNullable?(Pe(r)?o=r:(o.validators=r,o.asyncValidators=s),new j(i,m(u({},o),{nonNullable:!0}))):new j(i,r,s)}array(i,r,s){let o=i.map(l=>this._createControl(l));return new ie(o,r,s)}_reduceControls(i){let r={};return Object.keys(i).forEach(s=>{r[s]=this._createControl(i[s])}),r}_createControl(i){if(i instanceof j)return i;if(i instanceof M)return i;if(Array.isArray(i)){let r=i[0],s=i.length>1?i[1]:null,o=i.length>2?i[2]:null;return this.control(r,s,o)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var at=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:st,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:it,useValue:i.callSetDisabledState??se}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[qt]});let t=e;return t})();var ue={baseURL:"https://api.giphy.com/v1/gifs/",apiKey:"search?api_key=llUU0T6GkQ7slcrTXnuKV69CRQFQmSZ0"};var z=(()=>{let e=class e{constructor(i){this.http=i,this.baseUrl=ue.baseURL,this.key=ue.apiKey,this.gifEmitter=new v}getGifs(i){return this.http.get(`${this.baseUrl}${this.key}&q=${i}`).pipe(pe(()=>de([])))}};e.\u0275fac=function(r){return new(r||e)(ge(Ae))},e.\u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ut=(()=>{let e=class e{constructor(i,r){this.fb=i,this.gifService=r,this.formularioBusqueda=this.fb.group({busqueda:["",T.required]}),this.listaGifs=[]}onSearch(){if(this.formularioBusqueda.invalid)return;let i=this.formularioBusqueda.controls.busqueda.value;this.gifService.getGifs(i).subscribe({next:r=>{Array.isArray(r)?this.listaGifs=[...r,...this.listaGifs]:this.listaGifs=[...r.data,...this.listaGifs],this.gifService.gifEmitter.emit(this.listaGifs)},error:r=>{console.log(r)}})}};e.\u0275fac=function(r){return new(r||e)(a(ot),a(z))},e.\u0275cmp=V({type:e,selectors:[["app-buscar-gif"]],decls:4,vars:1,consts:[[1,"hero",3,"formGroup","submit"],[1,"buscar"],["type","text","formControlName","busqueda"],["type","submit","value","Buscar"]],template:function(r,s){r&1&&(d(0,"form",0),E("submit",function(){return s.onSearch()}),d(1,"div",1),C(2,"input",2)(3,"input",3),h()()),r&2&&P("formGroup",s.formularioBusqueda)},dependencies:[rt,W,Ye,Je,ae,le],styles:['.hero[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;background-image:url("./media/hero-UCQCFUKY.jpg");background-position:center;background-repeat:no-repeat;background-size:cover;background-attachment:fixed;height:40rem}.buscar[_ngcontent-%COMP%]{width:65%;margin:0 auto;text-align:center}.buscar[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{width:70%;height:4.4rem;margin-right:2rem;font-size:2rem;border:none;outline:none;background-color:var(--gray);transition:.2s ease-in-out;color:#fff}.buscar[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:hover{border:2px solid var(--orange)}.buscar[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{font-size:2rem;padding:1rem;border:none;text-transform:uppercase;background-color:#2c2c2c;color:#fff;transition:.3s ease-in-out}.buscar[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover{background-color:var(--orange);color:#000;font-size:2.2rem}']});let t=e;return t})();function Kt(t,e){if(t&1&&(d(0,"div",2)(1,"h3"),Ve(2),h(),C(3,"img",3),h()),t&2){let n=e.$implicit;x(2),De(n.title),x(1),Ce("src",n.images.original.url,ye)}}var ct=(()=>{let e=class e{constructor(i){this.gifService=i,this.listaGifs=[]}ngOnInit(){this.mostrarGifs()}mostrarGifs(){this.gifService.gifEmitter.subscribe(i=>{this.listaGifs=i})}};e.\u0275fac=function(r){return new(r||e)(a(z))},e.\u0275cmp=V({type:e,selectors:[["app-listar-gif"]],decls:2,vars:1,consts:[[1,"grid-card"],["class","card",4,"ngFor","ngForOf"],[1,"card"],["alt","",3,"src"]],template:function(r,s){r&1&&(d(0,"section",0),ve(1,Kt,4,2,"div",1),h()),r&2&&(x(1),P("ngForOf",s.listaGifs))},dependencies:[be],styles:[".grid-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);align-items:center;justify-content:center;gap:5rem;width:70%;margin:0 auto;margin-top:2rem}.card[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:center;box-shadow:var(--shadow-elevation-medium);text-transform:uppercase;font-size:2rem;background-color:var(--deep-gray);color:#fff}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:30rem;width:100%;object-fit:cover;display:block}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}"]});let t=e;return t})();var dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-home-page"]],decls:5,vars:0,template:function(r,s){r&1&&(d(0,"section")(1,"div"),C(2,"app-buscar-gif"),h(),d(3,"div"),C(4,"app-listar-gif"),h()())},dependencies:[ut,ct]});let t=e;return t})();var Xt=[{path:"search",component:dt},{path:"**",redirectTo:"search",pathMatch:"full"}],ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[J.forChild(Xt),J]});let t=e;return t})();var Li=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[Ee,at,Me,ht]});let t=e;return t})();export{ht as a,Li as b};
