(()=>{"use strict";var e={403:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var o,s,n,a,i,l=r(622),c=r(747),u=Object.prototype.toString;function d(e){return void 0!==e}function f(e){return"[object Number]"===u.call(e)}function h(e){return"[object String]"===u.call(e)}function p(e){return JSON.parse(c.readFileSync(e,"utf8"))}function g(e,t){return i&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,r){var o=r[0],s=t[o],n=e;return"string"==typeof s?n=s:"number"!=typeof s&&"boolean"!=typeof s&&null!=s||(n=String(s)),n}))}function k(e){return function(t,r){for(var o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s];return f(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):g(e[t],o):h(r)?(console.warn("Message "+r+" didn't get externalized correctly."),g(r,o)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function v(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return g(t,r)}function m(e,t){return n[e]=t,t}function w(e){try{return function(e){var t=p(l.join(e,"nls.metadata.json")),r=Object.create(null);for(var o in t){var s=t[o];r[o]=s.messages}return r}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function b(e,t){var r;if(!0===a.languagePackSupport&&void 0!==a.cacheRoot&&void 0!==a.languagePackId&&void 0!==a.translationsConfigFile&&void 0!==a.translationsConfig)try{r=function(e,t){var r,o,s,n=l.join(a.cacheRoot,e.id+"-"+e.hash+".json"),i=!1,u=!1;try{return r=JSON.parse(c.readFileSync(n,{encoding:"utf8",flag:"r"})),o=n,s=new Date,c.utimes(o,s,s,(function(){})),r}catch(e){if("ENOENT"===e.code)u=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),c.unlink(n,(function(e){e&&console.error("Deleting corrupted bundle "+n+" failed.")})),i=!0}}if(!(r=function(e,t){var r=a.translationsConfig[e.id];if(r){var o=p(r).contents,s=p(l.join(t,"nls.metadata.json")),n=Object.create(null);for(var i in s){var c=s[i],u=o[e.outDir+"/"+i];if(u){for(var d=[],f=0;f<c.keys.length;f++){var g=c.keys[f],k=u[h(g)?g:g.key];void 0===k&&(k=c.messages[f]),d.push(k)}n[i]=d}else n[i]=c.messages}return n}}(e,t))||i)return r;if(u)try{c.writeFileSync(n,JSON.stringify(r),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return r;throw e}return r}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!r){if(a.languagePackSupport)return w(t);var o=function(e){for(var t=a.locale;t;){var r=l.join(e,"nls.bundle."+t+".json");if(c.existsSync(r))return r;var o=t.lastIndexOf("-");t=o>0?t.substring(0,o):void 0}if(void 0===t&&(r=l.join(e,"nls.bundle.json"),c.existsSync(r)))return r}(t);if(o)try{return p(o)}catch(e){console.log("Loading in the box message bundle failed.",e)}r=w(t)}return r}function j(e){if(!e)return v;var t=l.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),a.messageFormat===o.both||a.messageFormat===o.bundle){var r=function(e){for(var t,r=l.dirname(e);t=l.join(r,"nls.metadata.header.json"),!c.existsSync(t);){var o=l.dirname(r);if(o===r){t=void 0;break}r=o}return t}(e);if(r){var s=l.dirname(r),u=n[s];if(void 0===u)try{var f=JSON.parse(c.readFileSync(r,"utf8"));try{var h=b(f,s);u=m(s,h?{header:f,nlsBundle:h}:null)}catch(e){console.error("Failed to load nls bundle",e),u=m(s,null)}}catch(e){console.error("Failed to read header file",e),u=m(s,null)}if(u){var g=e.substr(s.length+1).replace(/\\/g,"/"),w=u.nlsBundle[g];return void 0===w?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):k(w)}}}if(a.messageFormat===o.both||a.messageFormat===o.file)try{var j=p(function(e){var t;if(a.cacheLanguageResolution&&t)t=t;else{if(i||!a.locale)t=".nls.json";else for(var r=a.locale;r;){var o=".nls."+r+".json";if(c.existsSync(e+o)){t=o;break}var s=r.lastIndexOf("-");s>0?r=r.substring(0,s):(t=".nls.json",r=null)}a.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(j)?k(j):d(j.messages)&&d(j.keys)?k(j.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(o=t.MessageFormat||(t.MessageFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(s||(s={})),function(){if(a={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:o.bundle},h(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(h(e.locale)&&(a.locale=e.locale.toLowerCase()),(!0===(t=e._languagePackSupport)||!1===t)&&(a.languagePackSupport=e._languagePackSupport),h(e._cacheRoot)&&(a.cacheRoot=e._cacheRoot),h(e._languagePackId)&&(a.languagePackId=e._languagePackId),h(e._translationsConfigFile)){a.translationsConfigFile=e._translationsConfigFile;try{a.translationsConfig=p(a.translationsConfigFile)}catch(t){e._corruptedFile&&c.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}}}catch(e){}var t;i="pseudo"===a.locale,n=Object.create(null)}(),t.loadMessageBundle=j,t.config=function(e){return e&&(h(e.locale)&&(a.locale=e.locale.toLowerCase(),n=Object.create(null)),void 0!==e.messageFormat&&(a.messageFormat=e.messageFormat)),i="pseudo"===a.locale,j}},129:e=>{e.exports=require("child_process")},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")},549:e=>{e.exports=require("vscode")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=r(622),s=r(747),n=r(129),a=r(549),i=r(403).loadMessageBundle(r(622).join(__dirname,"main.ts"));function l(e){return new Promise(((t,r)=>{s.exists(e,(e=>{t(e)}))}))}const c=["build","compile","watch"];function u(e){for(let t of c)if(-1!==e.indexOf(t))return!0;return!1}const d=["test"];function f(e){for(let t of d)if(-1!==e.indexOf(t))return!0;return!1}let h,p;function g(){return h||(h=a.window.createOutputChannel("Jake Auto Detection")),h}function k(){a.window.showWarningMessage(i(0,null),i(1,null)).then((()=>{g().show(!0)}))}async function v(e){let r,o=process.platform;return r="win32"===o&&await l(t.join(e,"node_modules",".bin","jake.cmd"))?t.join(".","node_modules",".bin","jake.cmd"):"linux"!==o&&"darwin"!==o||!await l(t.join(e,"node_modules",".bin","jake"))?"jake":t.join(".","node_modules",".bin","jake"),r}class m{constructor(e,t){this._workspaceFolder=e,this._jakeCommand=t}get workspaceFolder(){return this._workspaceFolder}isEnabled(){return"on"===a.workspace.getConfiguration("jake",this._workspaceFolder.uri).get("autoDetect")}start(){let e=t.join(this._workspaceFolder.uri.fsPath,"{node_modules,Jakefile,Jakefile.js}");this.fileWatcher=a.workspace.createFileSystemWatcher(e),this.fileWatcher.onDidChange((()=>this.promise=void 0)),this.fileWatcher.onDidCreate((()=>this.promise=void 0)),this.fileWatcher.onDidDelete((()=>this.promise=void 0))}async getTasks(){return this.isEnabled()?(this.promise||(this.promise=this.computeTasks()),this.promise):[]}async getTask(e){const t=e.definition.task;if(t){let r=e.definition,o={cwd:this.workspaceFolder.uri.fsPath};return new a.Task(r,this.workspaceFolder,t,"jake",new a.ShellExecution(await this._jakeCommand,[t],o))}}async computeTasks(){let e="file"===this._workspaceFolder.uri.scheme?this._workspaceFolder.uri.fsPath:void 0,r=[];if(!e)return r;let o=t.join(e,"Jakefile");if(!await l(o)&&(o=t.join(e,"Jakefile.js"),!await l(o)))return r;let s=`${await this._jakeCommand} --tasks`;try{let{stdout:t,stderr:r}=await(c=s,d={cwd:e},new Promise(((e,t)=>{n.exec(c,d,((r,o,s)=>{r&&t({error:r,stdout:o,stderr:s}),e({stdout:o,stderr:s})}))})));r&&(g().appendLine(r),k());let o=[];if(t){let e=t.split(/\r{0,1}\n/);for(let t of e){if(0===t.length)continue;let e=/^jake\s+([^\s]+)\s/g.exec(t);if(e&&2===e.length){let r=e[1],s={type:"jake",task:r},n={cwd:this.workspaceFolder.uri.fsPath},i=new a.Task(s,r,"jake",new a.ShellExecution(`${await this._jakeCommand} ${r}`,n));o.push(i);let l=t.toLowerCase();u(l)?i.group=a.TaskGroup.Build:f(l)&&(i.group=a.TaskGroup.Test)}}}return o}catch(e){let t=g();return e.stderr&&t.appendLine(e.stderr),e.stdout&&t.appendLine(e.stdout),t.appendLine(i(2,null,this.workspaceFolder.name,e.error?e.error.toString():"unknown")),k(),r}var c,d}dispose(){this.promise=void 0,this.fileWatcher&&this.fileWatcher.dispose()}}class w{constructor(){this.detectors=new Map}start(){let e=a.workspace.workspaceFolders;e&&this.updateWorkspaceFolders(e,[]),a.workspace.onDidChangeWorkspaceFolders((e=>this.updateWorkspaceFolders(e.added,e.removed))),a.workspace.onDidChangeConfiguration(this.updateConfiguration,this)}dispose(){this.taskProvider&&(this.taskProvider.dispose(),this.taskProvider=void 0),this.detectors.clear()}updateWorkspaceFolders(e,t){for(let e of t){let t=this.detectors.get(e.uri.toString());t&&(t.dispose(),this.detectors.delete(e.uri.toString()))}for(let t of e){let e=new m(t,v(t.uri.fsPath));this.detectors.set(t.uri.toString(),e),e.isEnabled()&&e.start()}this.updateProvider()}updateConfiguration(){for(let e of this.detectors.values())e.dispose(),this.detectors.delete(e.workspaceFolder.uri.toString());let e=a.workspace.workspaceFolders;if(e)for(let t of e)if(!this.detectors.has(t.uri.toString())){let e=new m(t,v(t.uri.fsPath));this.detectors.set(t.uri.toString(),e),e.isEnabled()&&e.start()}this.updateProvider()}updateProvider(){if(!this.taskProvider&&this.detectors.size>0){const e=this;this.taskProvider=a.tasks.registerTaskProvider("jake",{provideTasks:()=>e.getTasks(),resolveTask:t=>e.getTask(t)})}else this.taskProvider&&0===this.detectors.size&&(this.taskProvider.dispose(),this.taskProvider=void 0)}getTasks(){return this.computeTasks()}computeTasks(){if(0===this.detectors.size)return Promise.resolve([]);if(1===this.detectors.size)return this.detectors.values().next().value.getTasks();{let e=[];for(let t of this.detectors.values())e.push(t.getTasks().then((e=>e),(()=>[])));return Promise.all(e).then((e=>{let t=[];for(let r of e)r&&r.length>0&&t.push(...r);return t}))}}async getTask(e){if(0!==this.detectors.size){if(1===this.detectors.size)return this.detectors.values().next().value.getTask(e);if(e.scope!==a.TaskScope.Workspace&&e.scope!==a.TaskScope.Global&&e.scope){const t=this.detectors.get(e.scope.uri.toString());if(t)return t.getTask(e)}}}}e.activate=function(e){p=new w,p.start()},e.deactivate=function(){p.dispose()}})();var s=exports;for(var n in o)s[n]=o[n];o.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/83bd43bc519d15e50c4272c6cf5c1479df196a4d/extensions/jake/dist/main.js.map