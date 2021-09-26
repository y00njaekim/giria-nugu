"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/var _amdLoaderGlobal=this,_commonjsGlobal=typeof global=="object"?global:{},AMDLoader;(function(f){f.global=_amdLoaderGlobal;var y=function(){function h(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1}return Object.defineProperty(h.prototype,"isWindows",{get:function(){return this._detect(),this._isWindows},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isNode",{get:function(){return this._detect(),this._isNode},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isElectronRenderer",{get:function(){return this._detect(),this._isElectronRenderer},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isWebWorker",{get:function(){return this._detect(),this._isWebWorker},enumerable:!1,configurable:!0}),h.prototype._detect=function(){this._detected||(this._detected=!0,this._isWindows=h._isWindows(),this._isNode=typeof module!="undefined"&&!!module.exports,this._isElectronRenderer=typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.electron!="undefined"&&process.type==="renderer",this._isWebWorker=typeof f.global.importScripts=="function")},h._isWindows=function(){return typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0?!0:typeof process!="undefined"?process.platform==="win32":!1},h}();f.Environment=y})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var y=function(){function a(i,c,r){this.type=i,this.detail=c,this.timestamp=r}return a}();f.LoaderEvent=y;var h=function(){function a(i){this._events=[new y(1,"",i)]}return a.prototype.record=function(i,c){this._events.push(new y(i,c,f.Utilities.getHighPerformanceTimestamp()))},a.prototype.getEvents=function(){return this._events},a}();f.LoaderEventRecorder=h;var p=function(){function a(){}return a.prototype.record=function(i,c){},a.prototype.getEvents=function(){return[]},a.INSTANCE=new a,a}();f.NullLoaderEventRecorder=p})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var y=function(){function h(){}return h.fileUriToFilePath=function(p,a){if(a=decodeURI(a).replace(/%23/g,"#"),p){if(/^file:\/\/\//.test(a))return a.substr(8);if(/^file:\/\//.test(a))return a.substr(5)}else if(/^file:\/\//.test(a))return a.substr(7);return a},h.startsWith=function(p,a){return p.length>=a.length&&p.substr(0,a.length)===a},h.endsWith=function(p,a){return p.length>=a.length&&p.substr(p.length-a.length)===a},h.containsQueryString=function(p){return/^[^\#]*\?/gi.test(p)},h.isAbsolutePath=function(p){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(p)},h.forEachProperty=function(p,a){if(p){var i=void 0;for(i in p)p.hasOwnProperty(i)&&a(i,p[i])}},h.isEmpty=function(p){var a=!0;return h.forEachProperty(p,function(){a=!1}),a},h.recursiveClone=function(p){if(!p||typeof p!="object"||p instanceof RegExp||!Array.isArray(p)&&Object.getPrototypeOf(p)!==Object.prototype)return p;var a=Array.isArray(p)?[]:{};return h.forEachProperty(p,function(i,c){c&&typeof c=="object"?a[i]=h.recursiveClone(c):a[i]=c}),a},h.generateAnonymousModule=function(){return"===anonymous"+h.NEXT_ANONYMOUS_ID+++"==="},h.isAnonymousModule=function(p){return h.startsWith(p,"===anonymous")},h.getHighPerformanceTimestamp=function(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=f.global.performance&&typeof f.global.performance.now=="function"),this.HAS_PERFORMANCE_NOW?f.global.performance.now():Date.now()},h.NEXT_ANONYMOUS_ID=1,h.PERFORMANCE_NOW_PROBED=!1,h.HAS_PERFORMANCE_NOW=!1,h}();f.Utilities=y})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){function y(a){if(a instanceof Error)return a;var i=new Error(a.message||String(a)||"Unknown Error");return a.stack&&(i.stack=a.stack),i}f.ensureError=y;var h=function(){function a(){}return a.validateConfigurationOptions=function(i){function c(e){if(e.phase==="loading"){console.error('Loading "'+e.moduleId+'" failed'),console.error(e),console.error("Here are the modules that depend on it:"),console.error(e.neededBy);return}if(e.phase==="factory"){console.error('The factory method of "'+e.moduleId+'" has thrown an exception'),console.error(e);return}}if(i=i||{},typeof i.baseUrl!="string"&&(i.baseUrl=""),typeof i.isBuild!="boolean"&&(i.isBuild=!1),typeof i.paths!="object"&&(i.paths={}),typeof i.config!="object"&&(i.config={}),typeof i.catchError=="undefined"&&(i.catchError=!1),typeof i.recordStats=="undefined"&&(i.recordStats=!1),typeof i.urlArgs!="string"&&(i.urlArgs=""),typeof i.onError!="function"&&(i.onError=c),Array.isArray(i.ignoreDuplicateModules)||(i.ignoreDuplicateModules=[]),i.baseUrl.length>0&&(f.Utilities.endsWith(i.baseUrl,"/")||(i.baseUrl+="/")),typeof i.cspNonce!="string"&&(i.cspNonce=""),typeof i.preferScriptTags=="undefined"&&(i.preferScriptTags=!1),Array.isArray(i.nodeModules)||(i.nodeModules=[]),i.nodeCachedData&&typeof i.nodeCachedData=="object"&&(typeof i.nodeCachedData.seed!="string"&&(i.nodeCachedData.seed="seed"),(typeof i.nodeCachedData.writeDelay!="number"||i.nodeCachedData.writeDelay<0)&&(i.nodeCachedData.writeDelay=1e3*7),!i.nodeCachedData.path||typeof i.nodeCachedData.path!="string")){var r=y(new Error("INVALID cached data configuration, 'path' MUST be set"));r.phase="configuration",i.onError(r),i.nodeCachedData=void 0}return i},a.mergeConfigurationOptions=function(i,c){i===void 0&&(i=null),c===void 0&&(c=null);var r=f.Utilities.recursiveClone(c||{});return f.Utilities.forEachProperty(i,function(e,t){e==="ignoreDuplicateModules"&&typeof r.ignoreDuplicateModules!="undefined"?r.ignoreDuplicateModules=r.ignoreDuplicateModules.concat(t):e==="paths"&&typeof r.paths!="undefined"?f.Utilities.forEachProperty(t,function(n,o){return r.paths[n]=o}):e==="config"&&typeof r.config!="undefined"?f.Utilities.forEachProperty(t,function(n,o){return r.config[n]=o}):r[e]=f.Utilities.recursiveClone(t)}),a.validateConfigurationOptions(r)},a}();f.ConfigurationOptionsUtil=h;var p=function(){function a(i,c){if(this._env=i,this.options=h.mergeConfigurationOptions(c),this._createIgnoreDuplicateModulesMap(),this._createNodeModulesMap(),this._createSortedPathsRules(),this.options.baseUrl===""){if(this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){var r=this.options.nodeRequire.main.filename,e=Math.max(r.lastIndexOf("/"),r.lastIndexOf("\\"));this.options.baseUrl=r.substring(0,e+1)}if(this.options.nodeMain&&this._env.isNode){var r=this.options.nodeMain,e=Math.max(r.lastIndexOf("/"),r.lastIndexOf("\\"));this.options.baseUrl=r.substring(0,e+1)}}}return a.prototype._createIgnoreDuplicateModulesMap=function(){this.ignoreDuplicateModulesMap={};for(var i=0;i<this.options.ignoreDuplicateModules.length;i++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[i]]=!0},a.prototype._createNodeModulesMap=function(){this.nodeModulesMap=Object.create(null);for(var i=0,c=this.options.nodeModules;i<c.length;i++){var r=c[i];this.nodeModulesMap[r]=!0}},a.prototype._createSortedPathsRules=function(){var i=this;this.sortedPathsRules=[],f.Utilities.forEachProperty(this.options.paths,function(c,r){Array.isArray(r)?i.sortedPathsRules.push({from:c,to:r}):i.sortedPathsRules.push({from:c,to:[r]})}),this.sortedPathsRules.sort(function(c,r){return r.from.length-c.from.length})},a.prototype.cloneAndMerge=function(i){return new a(this._env,h.mergeConfigurationOptions(i,this.options))},a.prototype.getOptionsLiteral=function(){return this.options},a.prototype._applyPaths=function(i){for(var c,r=0,e=this.sortedPathsRules.length;r<e;r++)if(c=this.sortedPathsRules[r],f.Utilities.startsWith(i,c.from)){for(var t=[],n=0,o=c.to.length;n<o;n++)t.push(c.to[n]+i.substr(c.from.length));return t}return[i]},a.prototype._addUrlArgsToUrl=function(i){return f.Utilities.containsQueryString(i)?i+"&"+this.options.urlArgs:i+"?"+this.options.urlArgs},a.prototype._addUrlArgsIfNecessaryToUrl=function(i){return this.options.urlArgs?this._addUrlArgsToUrl(i):i},a.prototype._addUrlArgsIfNecessaryToUrls=function(i){if(this.options.urlArgs)for(var c=0,r=i.length;c<r;c++)i[c]=this._addUrlArgsToUrl(i[c]);return i},a.prototype.moduleIdToPaths=function(i){var c=this.nodeModulesMap[i]===!0||this.options.amdModulesPattern instanceof RegExp&&!this.options.amdModulesPattern.test(i);if(c)return this.isBuild()?["empty:"]:["node|"+i];var r=i,e;if(!f.Utilities.endsWith(r,".js")&&!f.Utilities.isAbsolutePath(r)){e=this._applyPaths(r);for(var t=0,n=e.length;t<n;t++)this.isBuild()&&e[t]==="empty:"||(f.Utilities.isAbsolutePath(e[t])||(e[t]=this.options.baseUrl+e[t]),!f.Utilities.endsWith(e[t],".js")&&!f.Utilities.containsQueryString(e[t])&&(e[t]=e[t]+".js"))}else!f.Utilities.endsWith(r,".js")&&!f.Utilities.containsQueryString(r)&&(r=r+".js"),e=[r];return this._addUrlArgsIfNecessaryToUrls(e)},a.prototype.requireToUrl=function(i){var c=i;return f.Utilities.isAbsolutePath(c)||(c=this._applyPaths(c)[0],f.Utilities.isAbsolutePath(c)||(c=this.options.baseUrl+c)),this._addUrlArgsIfNecessaryToUrl(c)},a.prototype.isBuild=function(){return this.options.isBuild},a.prototype.isDuplicateMessageIgnoredFor=function(i){return this.ignoreDuplicateModulesMap.hasOwnProperty(i)},a.prototype.getConfigForModule=function(i){if(this.options.config)return this.options.config[i]},a.prototype.shouldCatchError=function(){return this.options.catchError},a.prototype.shouldRecordStats=function(){return this.options.recordStats},a.prototype.onError=function(i){this.options.onError(i)},a}();f.Configuration=p})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var y=function(){function r(e){this._env=e,this._scriptLoader=null,this._callbackMap={}}return r.prototype.load=function(e,t,n,o){var u=this;if(!this._scriptLoader)if(this._env.isWebWorker)this._scriptLoader=new p;else if(this._env.isElectronRenderer){var s=e.getConfig().getOptionsLiteral().preferScriptTags;s?this._scriptLoader=new h:this._scriptLoader=new a(this._env)}else this._env.isNode?this._scriptLoader=new a(this._env):this._scriptLoader=new h;var l={callback:n,errorback:o};if(this._callbackMap.hasOwnProperty(t)){this._callbackMap[t].push(l);return}this._callbackMap[t]=[l],this._scriptLoader.load(e,t,function(){return u.triggerCallback(t)},function(d){return u.triggerErrorback(t,d)})},r.prototype.triggerCallback=function(e){var t=this._callbackMap[e];delete this._callbackMap[e];for(var n=0;n<t.length;n++)t[n].callback()},r.prototype.triggerErrorback=function(e,t){var n=this._callbackMap[e];delete this._callbackMap[e];for(var o=0;o<n.length;o++)n[o].errorback(t)},r}(),h=function(){function r(){}return r.prototype.attachListeners=function(e,t,n){var o=function(){e.removeEventListener("load",u),e.removeEventListener("error",s)},u=function(l){o(),t()},s=function(l){o(),n(l)};e.addEventListener("load",u),e.addEventListener("error",s)},r.prototype.load=function(e,t,n,o){if(/^node\|/.test(t)){var u=e.getConfig().getOptionsLiteral(),s=i(e.getRecorder(),u.nodeRequire||f.global.nodeRequire),l=t.split("|"),d=null;try{d=s(l[1])}catch(E){o(E);return}e.enqueueDefineAnonymousModule([],function(){return d}),n()}else{var v=document.createElement("script");v.setAttribute("async","async"),v.setAttribute("type","text/javascript"),this.attachListeners(v,n,o);var g=e.getConfig().getOptionsLiteral().trustedTypesPolicy;g&&(t=g.createScriptURL(t)),v.setAttribute("src",t);var _=e.getConfig().getOptionsLiteral().cspNonce;_&&v.setAttribute("nonce",_),document.getElementsByTagName("head")[0].appendChild(v)}},r}(),p=function(){function r(){}return r.prototype.load=function(e,t,n,o){var u=e.getConfig().getOptionsLiteral().trustedTypesPolicy,s=/^((http:)|(https:)|(file:))/.test(t)&&t.substring(0,self.origin.length)!==self.origin;if(!s){fetch(t).then(function(l){if(l.status!==200)throw new Error(l.statusText);return l.text()}).then(function(l){l=l+`
//# sourceURL=`+t;var d=u?self.eval(u.createScript("",l)):new Function(l);d.call(self),n()}).then(void 0,o);return}try{u&&(t=u.createScriptURL(t)),importScripts(t),n()}catch(l){o(l)}},r}(),a=function(){function r(e){this._env=e,this._didInitialize=!1,this._didPatchNodeRequire=!1}return r.prototype._init=function(e){this._didInitialize||(this._didInitialize=!0,this._fs=e("fs"),this._vm=e("vm"),this._path=e("path"),this._crypto=e("crypto"))},r.prototype._initNodeRequire=function(e,t){var n=t.getConfig().getOptionsLiteral().nodeCachedData;if(!n||this._didPatchNodeRequire)return;this._didPatchNodeRequire=!0;var o=this,u=e("module");function s(l){var d=l.constructor,v=function(_){try{return l.require(_)}finally{}};return v.resolve=function(_,E){return d._resolveFilename(_,l,!1,E)},v.resolve.paths=function(_){return d._resolveLookupPaths(_,l)},v.main=process.mainModule,v.extensions=d._extensions,v.cache=d._cache,v}u.prototype._compile=function(l,d){var v=u.wrap(l.replace(/^#!.*/,"")),g=t.getRecorder(),_=o._getCachedDataPath(n,d),E={filename:d},m;try{var I=o._fs.readFileSync(_);m=I.slice(0,16),E.cachedData=I.slice(16),g.record(60,_)}catch(O){g.record(61,_)}var R=new o._vm.Script(v,E),C=R.runInThisContext(E),P=o._path.dirname(d),w=s(this),U=[this.exports,w,this,d,P,process,_commonjsGlobal,Buffer],b=C.apply(this.exports,U);return o._handleCachedData(R,v,_,!E.cachedData,t),o._verifyCachedData(R,v,_,m,t),b}},r.prototype.load=function(e,t,n,o){var u=this,s=e.getConfig().getOptionsLiteral(),l=i(e.getRecorder(),s.nodeRequire||f.global.nodeRequire),d=s.nodeInstrumenter||function(C){return C};this._init(l),this._initNodeRequire(l,e);var v=e.getRecorder();if(/^node\|/.test(t)){var g=t.split("|"),_=null;try{_=l(g[1])}catch(C){o(C);return}e.enqueueDefineAnonymousModule([],function(){return _}),n()}else{t=f.Utilities.fileUriToFilePath(this._env.isWindows,t);var E=this._path.normalize(t),m=this._getElectronRendererScriptPathOrUri(E),I=Boolean(s.nodeCachedData),R=I?this._getCachedDataPath(s.nodeCachedData,t):void 0;this._readSourceAndCachedData(E,R,v,function(C,P,w,U){if(C){o(C);return}var b;P.charCodeAt(0)===r._BOM?b=r._PREFIX+P.substring(1)+r._SUFFIX:b=r._PREFIX+P+r._SUFFIX,b=d(b,E);var O={filename:m,cachedData:w},S=u._createAndEvalScript(e,b,O,n,o);u._handleCachedData(S,b,R,I&&!w,e),u._verifyCachedData(S,b,R,U,e)})}},r.prototype._createAndEvalScript=function(e,t,n,o,u){var s=e.getRecorder();s.record(31,n.filename);var l=new this._vm.Script(t,n),d=l.runInThisContext(n),v=e.getGlobalAMDDefineFunc(),g=!1,_=function(){return g=!0,v.apply(null,arguments)};return _.amd=v.amd,d.call(f.global,e.getGlobalAMDRequireFunc(),_,n.filename,this._path.dirname(n.filename)),s.record(32,n.filename),g?o():u(new Error("Didn't receive define call in "+n.filename+"!")),l},r.prototype._getElectronRendererScriptPathOrUri=function(e){if(!this._env.isElectronRenderer)return e;var t=e.match(/^([a-z])\:(.*)/i);return t?"file:///"+(t[1].toUpperCase()+":"+t[2]).replace(/\\/g,"/"):"file://"+e},r.prototype._getCachedDataPath=function(e,t){var n=this._crypto.createHash("md5").update(t,"utf8").update(e.seed,"utf8").update(process.arch,"").digest("hex"),o=this._path.basename(t).replace(/\.js$/,"");return this._path.join(e.path,o+"-"+n+".code")},r.prototype._handleCachedData=function(e,t,n,o,u){var s=this;e.cachedDataRejected?this._fs.unlink(n,function(l){u.getRecorder().record(62,n),s._createAndWriteCachedData(e,t,n,u),l&&u.getConfig().onError(l)}):o&&this._createAndWriteCachedData(e,t,n,u)},r.prototype._createAndWriteCachedData=function(e,t,n,o){var u=this,s=Math.ceil(o.getConfig().getOptionsLiteral().nodeCachedData.writeDelay*(1+Math.random())),l=-1,d=0,v=void 0,g=function(){setTimeout(function(){v||(v=u._crypto.createHash("md5").update(t,"utf8").digest());var _=e.createCachedData();if(!(_.length===0||_.length===l||d>=5)){if(_.length<l){g();return}l=_.length,u._fs.writeFile(n,Buffer.concat([v,_]),function(E){E&&o.getConfig().onError(E),o.getRecorder().record(63,n),g()})}},s*Math.pow(4,d++))};g()},r.prototype._readSourceAndCachedData=function(e,t,n,o){if(!t)this._fs.readFile(e,{encoding:"utf8"},o);else{var u=void 0,s=void 0,l=void 0,d=2,v=function(g){g?o(g):--d==0&&o(void 0,u,s,l)};this._fs.readFile(e,{encoding:"utf8"},function(g,_){u=_,v(g)}),this._fs.readFile(t,function(g,_){!g&&_&&_.length>0?(l=_.slice(0,16),s=_.slice(16),n.record(60,t)):n.record(61,t),v()})}},r.prototype._verifyCachedData=function(e,t,n,o,u){var s=this;!o||e.cachedDataRejected||setTimeout(function(){var l=s._crypto.createHash("md5").update(t,"utf8").digest();o.equals(l)||(u.getConfig().onError(new Error("FAILED TO VERIFY CACHED DATA, deleting stale '"+n+"' now, but a RESTART IS REQUIRED")),s._fs.unlink(n,function(d){d&&u.getConfig().onError(d)}))},Math.ceil(5e3*(1+Math.random())))},r._BOM=65279,r._PREFIX="(function (require, define, __filename, __dirname) { ",r._SUFFIX=`
});`,r}();function i(r,e){if(e.__$__isRecorded)return e;var t=function(o){r.record(33,o);try{return e(o)}finally{r.record(34,o)}};return t.__$__isRecorded=!0,t}f.ensureRecordedNodeRequire=i;function c(r){return new y(r)}f.createScriptLoader=c})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var y=function(){function r(e){var t=e.lastIndexOf("/");t!==-1?this.fromModulePath=e.substr(0,t+1):this.fromModulePath=""}return r._normalizeModuleId=function(e){var t=e,n;for(n=/\/\.\//;n.test(t);)t=t.replace(n,"/");for(t=t.replace(/^\.\//g,""),n=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;n.test(t);)t=t.replace(n,"/");return t=t.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,""),t},r.prototype.resolveModule=function(e){var t=e;return f.Utilities.isAbsolutePath(t)||(f.Utilities.startsWith(t,"./")||f.Utilities.startsWith(t,"../"))&&(t=r._normalizeModuleId(this.fromModulePath+t)),t},r.ROOT=new r(""),r}();f.ModuleIdResolver=y;var h=function(){function r(e,t,n,o,u,s){this.id=e,this.strId=t,this.dependencies=n,this._callback=o,this._errorback=u,this.moduleIdResolver=s,this.exports={},this.error=null,this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}return r._safeInvokeFunction=function(e,t){try{return{returnedValue:e.apply(f.global,t),producedError:null}}catch(n){return{returnedValue:null,producedError:n}}},r._invokeFactory=function(e,t,n,o){return e.isBuild()&&!f.Utilities.isAnonymousModule(t)?{returnedValue:null,producedError:null}:e.shouldCatchError()?this._safeInvokeFunction(n,o):{returnedValue:n.apply(f.global,o),producedError:null}},r.prototype.complete=function(e,t,n){this._isComplete=!0;var o=null;if(this._callback)if(typeof this._callback=="function"){e.record(21,this.strId);var u=r._invokeFactory(t,this.strId,this._callback,n);o=u.producedError,e.record(22,this.strId),!o&&typeof u.returnedValue!="undefined"&&(!this.exportsPassedIn||f.Utilities.isEmpty(this.exports))&&(this.exports=u.returnedValue)}else this.exports=this._callback;if(o){var s=f.ensureError(o);s.phase="factory",s.moduleId=this.strId,this.error=s,t.onError(s)}this.dependencies=null,this._callback=null,this._errorback=null,this.moduleIdResolver=null},r.prototype.onDependencyError=function(e){return this._isComplete=!0,this.error=e,this._errorback?(this._errorback(e),!0):!1},r.prototype.isComplete=function(){return this._isComplete},r}();f.Module=h;var p=function(){function r(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}return r.prototype.getMaxModuleId=function(){return this._nextId},r.prototype.getModuleId=function(e){var t=this._strModuleIdToIntModuleId.get(e);return typeof t=="undefined"&&(t=this._nextId++,this._strModuleIdToIntModuleId.set(e,t),this._intModuleIdToStrModuleId[t]=e),t},r.prototype.getStrModuleId=function(e){return this._intModuleIdToStrModuleId[e]},r}(),a=function(){function r(e){this.id=e}return r.EXPORTS=new r(0),r.MODULE=new r(1),r.REQUIRE=new r(2),r}();f.RegularDependency=a;var i=function(){function r(e,t,n){this.id=e,this.pluginId=t,this.pluginParam=n}return r}();f.PluginDependency=i;var c=function(){function r(e,t,n,o,u){u===void 0&&(u=0),this._env=e,this._scriptLoader=t,this._loaderAvailableTimestamp=u,this._defineFunc=n,this._requireFunc=o,this._moduleIdProvider=new p,this._config=new f.Configuration(this._env),this._hasDependencyCycle=!1,this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[]}return r.prototype.reset=function(){return new r(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)},r.prototype.getGlobalAMDDefineFunc=function(){return this._defineFunc},r.prototype.getGlobalAMDRequireFunc=function(){return this._requireFunc},r._findRelevantLocationInStack=function(e,t){for(var n=function(m){return m.replace(/\\/g,"/")},o=n(e),u=t.split(/\n/),s=0;s<u.length;s++){var l=u[s].match(/(.*):(\d+):(\d+)\)?$/);if(l){var d=l[1],v=l[2],g=l[3],_=Math.max(d.lastIndexOf(" ")+1,d.lastIndexOf("(")+1);if(d=d.substr(_),d=n(d),d===o){var E={line:parseInt(v,10),col:parseInt(g,10)};return E.line===1&&(E.col-="(function (require, define, __filename, __dirname) { ".length),E}}}throw new Error("Could not correlate define call site for needle "+e)},r.prototype.getBuildInfo=function(){if(!this._config.isBuild())return null;for(var e=[],t=0,n=0,o=this._modules2.length;n<o;n++){var u=this._modules2[n];if(!!u){var s=this._buildInfoPath[u.id]||null,l=this._buildInfoDefineStack[u.id]||null,d=this._buildInfoDependencies[u.id];e[t++]={id:u.strId,path:s,defineLocation:s&&l?r._findRelevantLocationInStack(s,l):null,dependencies:d,shim:null,exports:u.exports}}}return e},r.prototype.getRecorder=function(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new f.LoaderEventRecorder(this._loaderAvailableTimestamp):this._recorder=f.NullLoaderEventRecorder.INSTANCE),this._recorder},r.prototype.getLoaderEvents=function(){return this.getRecorder().getEvents()},r.prototype.enqueueDefineAnonymousModule=function(e,t){if(this._currentAnonymousDefineCall!==null)throw new Error("Can only have one anonymous define call per script file");var n=null;this._config.isBuild()&&(n=new Error("StackLocation").stack||null),this._currentAnonymousDefineCall={stack:n,dependencies:e,callback:t}},r.prototype.defineModule=function(e,t,n,o,u,s){var l=this;s===void 0&&(s=new y(e));var d=this._moduleIdProvider.getModuleId(e);if(this._modules2[d]){this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'");return}var v=new h(d,e,this._normalizeDependencies(t,s),n,o,s);this._modules2[d]=v,this._config.isBuild()&&(this._buildInfoDefineStack[d]=u,this._buildInfoDependencies[d]=(v.dependencies||[]).map(function(g){return l._moduleIdProvider.getStrModuleId(g.id)})),this._resolve(v)},r.prototype._normalizeDependency=function(e,t){if(e==="exports")return a.EXPORTS;if(e==="module")return a.MODULE;if(e==="require")return a.REQUIRE;var n=e.indexOf("!");if(n>=0){var o=t.resolveModule(e.substr(0,n)),u=t.resolveModule(e.substr(n+1)),s=this._moduleIdProvider.getModuleId(o+"!"+u),l=this._moduleIdProvider.getModuleId(o);return new i(s,l,u)}return new a(this._moduleIdProvider.getModuleId(t.resolveModule(e)))},r.prototype._normalizeDependencies=function(e,t){for(var n=[],o=0,u=0,s=e.length;u<s;u++)n[o++]=this._normalizeDependency(e[u],t);return n},r.prototype._relativeRequire=function(e,t,n,o){if(typeof t=="string")return this.synchronousRequire(t,e);this.defineModule(f.Utilities.generateAnonymousModule(),t,n,o,null,e)},r.prototype.synchronousRequire=function(e,t){t===void 0&&(t=new y(e));var n=this._normalizeDependency(e,t),o=this._modules2[n.id];if(!o)throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This is the first mention of this module!");if(!o.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This module has not been resolved completely yet.");if(o.error)throw o.error;return o.exports},r.prototype.configure=function(e,t){var n=this._config.shouldRecordStats();t?this._config=new f.Configuration(this._env,e):this._config=this._config.cloneAndMerge(e),this._config.shouldRecordStats()&&!n&&(this._recorder=null)},r.prototype.getConfig=function(){return this._config},r.prototype._onLoad=function(e){if(this._currentAnonymousDefineCall!==null){var t=this._currentAnonymousDefineCall;this._currentAnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(e),t.dependencies,t.callback,null,t.stack)}},r.prototype._createLoadError=function(e,t){var n=this,o=this._moduleIdProvider.getStrModuleId(e),u=(this._inverseDependencies2[e]||[]).map(function(l){return n._moduleIdProvider.getStrModuleId(l)}),s=f.ensureError(t);return s.phase="loading",s.moduleId=o,s.neededBy=u,s},r.prototype._onLoadError=function(e,t){var n=this._createLoadError(e,t);this._modules2[e]||(this._modules2[e]=new h(e,this._moduleIdProvider.getStrModuleId(e),[],function(){},function(){},null));for(var o=[],u=0,s=this._moduleIdProvider.getMaxModuleId();u<s;u++)o[u]=!1;var l=!1,d=[];for(d.push(e),o[e]=!0;d.length>0;){var v=d.shift(),g=this._modules2[v];g&&(l=g.onDependencyError(n)||l);var _=this._inverseDependencies2[v];if(_)for(var u=0,s=_.length;u<s;u++){var E=_[u];o[E]||(d.push(E),o[E]=!0)}}l||this._config.onError(n)},r.prototype._hasDependencyPath=function(e,t){var n=this._modules2[e];if(!n)return!1;for(var o=[],u=0,s=this._moduleIdProvider.getMaxModuleId();u<s;u++)o[u]=!1;var l=[];for(l.push(n),o[e]=!0;l.length>0;){var d=l.shift(),v=d.dependencies;if(v)for(var u=0,s=v.length;u<s;u++){var g=v[u];if(g.id===t)return!0;var _=this._modules2[g.id];_&&!o[g.id]&&(o[g.id]=!0,l.push(_))}}return!1},r.prototype._findCyclePath=function(e,t,n){if(e===t||n===50)return[e];var o=this._modules2[e];if(!o)return null;var u=o.dependencies;if(u)for(var s=0,l=u.length;s<l;s++){var d=this._findCyclePath(u[s].id,t,n+1);if(d!==null)return d.push(e),d}return null},r.prototype._createRequire=function(e){var t=this,n=function(o,u,s){return t._relativeRequire(e,o,u,s)};return n.toUrl=function(o){return t._config.requireToUrl(e.resolveModule(o))},n.getStats=function(){return t.getLoaderEvents()},n.hasDependencyCycle=function(){return t._hasDependencyCycle},n.config=function(o,u){u===void 0&&(u=!1),t.configure(o,u)},n.__$__nodeRequire=f.global.nodeRequire,n},r.prototype._loadModule=function(e){var t=this;if(!(this._modules2[e]||this._knownModules2[e])){this._knownModules2[e]=!0;var n=this._moduleIdProvider.getStrModuleId(e),o=this._config.moduleIdToPaths(n),u=/^@[^\/]+\/[^\/]+$/;this._env.isNode&&(n.indexOf("/")===-1||u.test(n))&&o.push("node|"+n);var s=-1,l=function(d){if(s++,s>=o.length)t._onLoadError(e,d);else{var v=o[s],g=t.getRecorder();if(t._config.isBuild()&&v==="empty:"){t._buildInfoPath[e]=v,t.defineModule(t._moduleIdProvider.getStrModuleId(e),[],null,null,null),t._onLoad(e);return}g.record(10,v),t._scriptLoader.load(t,v,function(){t._config.isBuild()&&(t._buildInfoPath[e]=v),g.record(11,v),t._onLoad(e)},function(_){g.record(12,v),l(_)})}};l(null)}},r.prototype._loadPluginDependency=function(e,t){var n=this;if(!(this._modules2[t.id]||this._knownModules2[t.id])){this._knownModules2[t.id]=!0;var o=function(u){n.defineModule(n._moduleIdProvider.getStrModuleId(t.id),[],u,null,null)};o.error=function(u){n._config.onError(n._createLoadError(t.id,u))},e.load(t.pluginParam,this._createRequire(y.ROOT),o,this._config.getOptionsLiteral())}},r.prototype._resolve=function(e){var t=this,n=e.dependencies;if(n)for(var o=0,u=n.length;o<u;o++){var s=n[o];if(s===a.EXPORTS){e.exportsPassedIn=!0,e.unresolvedDependenciesCount--;continue}if(s===a.MODULE){e.unresolvedDependenciesCount--;continue}if(s===a.REQUIRE){e.unresolvedDependenciesCount--;continue}var l=this._modules2[s.id];if(l&&l.isComplete()){if(l.error){e.onDependencyError(l.error);return}e.unresolvedDependenciesCount--;continue}if(this._hasDependencyPath(s.id,e.id)){this._hasDependencyCycle=!0,console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(s.id)+"' and '"+this._moduleIdProvider.getStrModuleId(e.id)+"'. The cyclic path follows:");var d=this._findCyclePath(s.id,e.id,0)||[];d.reverse(),d.push(s.id),console.warn(d.map(function(_){return t._moduleIdProvider.getStrModuleId(_)}).join(` => 
`)),e.unresolvedDependenciesCount--;continue}if(this._inverseDependencies2[s.id]=this._inverseDependencies2[s.id]||[],this._inverseDependencies2[s.id].push(e.id),s instanceof i){var v=this._modules2[s.pluginId];if(v&&v.isComplete()){this._loadPluginDependency(v.exports,s);continue}var g=this._inversePluginDependencies2.get(s.pluginId);g||(g=[],this._inversePluginDependencies2.set(s.pluginId,g)),g.push(s),this._loadModule(s.pluginId);continue}this._loadModule(s.id)}e.unresolvedDependenciesCount===0&&this._onModuleComplete(e)},r.prototype._onModuleComplete=function(e){var t=this,n=this.getRecorder();if(!e.isComplete()){var o=e.dependencies,u=[];if(o)for(var s=0,l=o.length;s<l;s++){var d=o[s];if(d===a.EXPORTS){u[s]=e.exports;continue}if(d===a.MODULE){u[s]={id:e.strId,config:function(){return t._config.getConfigForModule(e.strId)}};continue}if(d===a.REQUIRE){u[s]=this._createRequire(e.moduleIdResolver);continue}var v=this._modules2[d.id];if(v){u[s]=v.exports;continue}u[s]=null}e.complete(n,this._config,u);var g=this._inverseDependencies2[e.id];if(this._inverseDependencies2[e.id]=null,g)for(var s=0,l=g.length;s<l;s++){var _=g[s],E=this._modules2[_];E.unresolvedDependenciesCount--,E.unresolvedDependenciesCount===0&&this._onModuleComplete(E)}var m=this._inversePluginDependencies2.get(e.id);if(m){this._inversePluginDependencies2.delete(e.id);for(var s=0,l=m.length;s<l;s++)this._loadPluginDependency(e.exports,m[s])}}},r}();f.ModuleManager=c})(AMDLoader||(AMDLoader={}));var define,AMDLoader;(function(f){var y=new f.Environment,h=null,p=function(r,e,t){typeof r!="string"&&(t=e,e=r,r=null),(typeof e!="object"||!Array.isArray(e))&&(t=e,e=null),e||(e=["require","exports","module"]),r?h.defineModule(r,e,t,null,null):h.enqueueDefineAnonymousModule(e,t)};p.amd={jQuery:!0};var a=function(r,e){e===void 0&&(e=!1),h.configure(r,e)},i=function(){if(arguments.length===1){if(arguments[0]instanceof Object&&!Array.isArray(arguments[0])){a(arguments[0]);return}if(typeof arguments[0]=="string")return h.synchronousRequire(arguments[0])}if((arguments.length===2||arguments.length===3)&&Array.isArray(arguments[0])){h.defineModule(f.Utilities.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null);return}throw new Error("Unrecognized require call")};i.config=a,i.getConfig=function(){return h.getConfig().getOptionsLiteral()},i.reset=function(){h=h.reset()},i.getBuildInfo=function(){return h.getBuildInfo()},i.getStats=function(){return h.getLoaderEvents()},i.define=function(){return p.apply(null,arguments)};function c(){if(typeof f.global.require!="undefined"||typeof require!="undefined"){var r=f.global.require||require;if(typeof r=="function"&&typeof r.resolve=="function"){var e=f.ensureRecordedNodeRequire(h.getRecorder(),r);f.global.nodeRequire=e,i.nodeRequire=e,i.__$__nodeRequire=e}}y.isNode&&!y.isElectronRenderer?(module.exports=i,require=i):(y.isElectronRenderer||(f.global.define=p),f.global.require=i)}f.init=c,(typeof f.global.define!="function"||!f.global.define.amd)&&(h=new f.ModuleManager(y,f.createScriptLoader(y),p,i,f.Utilities.getHighPerformanceTimestamp()),typeof f.global.require!="undefined"&&typeof f.global.require!="function"&&i.config(f.global.require),define=function(){return p.apply(null,arguments)},define.amd=p.amd,typeof doNotInitLoader=="undefined"&&c())})(AMDLoader||(AMDLoader={}));var CSSLoaderPlugin;(function(f){var y=function(){function p(){this._pendingLoads=0}return p.prototype.attachListeners=function(a,i,c,r){var e=function(){i.removeEventListener("load",t),i.removeEventListener("error",n)},t=function(o){e(),c()},n=function(o){e(),r(o)};i.addEventListener("load",t),i.addEventListener("error",n)},p.prototype._onLoad=function(a,i){this._pendingLoads--,i()},p.prototype._onLoadError=function(a,i,c){this._pendingLoads--,i(c)},p.prototype._insertLinkNode=function(a){this._pendingLoads++;var i=document.head||document.getElementsByTagName("head")[0],c=i.getElementsByTagName("link")||i.getElementsByTagName("script");c.length>0?i.insertBefore(a,c[c.length-1]):i.appendChild(a)},p.prototype.createLinkTag=function(a,i,c,r){var e=this,t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("data-name",a);var n=function(){return e._onLoad(a,c)},o=function(u){return e._onLoadError(a,r,u)};return this.attachListeners(a,t,n,o),t.setAttribute("href",i),t},p.prototype._linkTagExists=function(a,i){var c,r,e,t,n=document.getElementsByTagName("link");for(c=0,r=n.length;c<r;c++)if(e=n[c].getAttribute("data-name"),t=n[c].getAttribute("href"),e===a||t===i)return!0;return!1},p.prototype.load=function(a,i,c,r){if(this._linkTagExists(a,i)){c();return}var e=this.createLinkTag(a,i,c,r);this._insertLinkNode(e)},p}(),h=function(){function p(){this._cssLoader=new y}return p.prototype.load=function(a,i,c,r){r=r||{};var e=r["vs/css"]||{};if(e.disabled){c({});return}var t=i.toUrl(a+".css");this._cssLoader.load(a,t,function(n){c({})},function(n){typeof c.error=="function"&&c.error("Could not find "+t+" or it was empty")})},p}();f.CSSPlugin=h,define("vs/css",new h)})(CSSLoaderPlugin||(CSSLoaderPlugin={}));var __spreadArrays=this&&this.__spreadArrays||function(){for(var f=0,y=0,h=arguments.length;y<h;y++)f+=arguments[y].length;for(var p=Array(f),a=0,y=0;y<h;y++)for(var i=arguments[y],c=0,r=i.length;c<r;c++,a++)p[a]=i[c];return p},NLSLoaderPlugin;(function(f){var y=function(){function r(){this._detected=!1,this._isPseudo=!1}return Object.defineProperty(r.prototype,"isPseudo",{get:function(){return this._detect(),this._isPseudo},enumerable:!0,configurable:!0}),r.prototype._detect=function(){this._detected||(this._detected=!0,this._isPseudo=typeof document!="undefined"&&document.location&&document.location.hash.indexOf("pseudo=true")>=0)},r}();function h(r,e,t){var n;return e.length===0?n=r:n=r.replace(/\{(\d+)\}/g,function(o,u){var s=u[0],l=e[s],d=o;return typeof l=="string"?d=l:(typeof l=="number"||typeof l=="boolean"||l===void 0||l===null)&&(d=String(l)),d}),t.isPseudo&&(n="\uFF3B"+n.replace(/[aouei]/g,"$&$&")+"\uFF3D"),n}function p(r,e){var t=r[e];return t||(t=r["*"],t)?t:null}function a(r,e,t){for(var n=[],o=3;o<arguments.length;o++)n[o-3]=arguments[o];return h(t,n,r)}function i(r,e){return function(t,n){var o=Array.prototype.slice.call(arguments,2);return h(r[t],o,e)}}var c=function(){function r(e){var t=this;this._env=e,this.localize=function(n,o){for(var u=[],s=2;s<arguments.length;s++)u[s-2]=arguments[s];return a.apply(void 0,__spreadArrays([t._env,n,o],u))}}return r.prototype.setPseudoTranslation=function(e){this._env._isPseudo=e},r.prototype.create=function(e,t){return{localize:i(t[e],this._env)}},r.prototype.load=function(e,t,n,o){var u=this;if(o=o||{},!e||e.length===0)n({localize:this.localize});else{var s=o["vs/nls"]||{},l=s.availableLanguages?p(s.availableLanguages,e):null,d=".nls";l!==null&&l!==r.DEFAULT_TAG&&(d=d+"."+l);var v=function(g){Array.isArray(g)?g.localize=i(g,u._env):g.localize=i(g[e],u._env),n(g)};typeof s.loadBundle=="function"?s.loadBundle(e,l,function(g,_){g?t([e+".nls"],v):v(_)}):t([e+d],v)}},r.DEFAULT_TAG="i-default",r}();f.NLSPlugin=c,define("vs/nls",new c(new y))})(NLSLoaderPlugin||(NLSLoaderPlugin={}));

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/7f6ab5485bbc008386c4386d08766667e155244e/core/vs/loader.js.map
