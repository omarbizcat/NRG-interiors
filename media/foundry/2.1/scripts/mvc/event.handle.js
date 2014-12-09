!function(){var moduleFactory=function($){var module=this;var exports=function(){var $event=$.event,oldTrigger=$event.trigger,isElement=function(o){return(typeof HTMLElement==="object"?o instanceof HTMLElement:typeof o==="object"&&o.nodeType===1&&typeof o.nodeName==="string")||o===window||o===document};$.event.trigger=function(event,data,elem,onlyHandlers){var type=event.type||event,namespaces=[],exclusive;if(type.indexOf("!")>=0){type=type.slice(0,-1);exclusive=true}if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort()}if((!elem||$.event.customEvent[type])&&!$.event.global[type]){return}event=typeof event==="object"?event[$.expando]?event:new $.Event(type,event):new $.Event(type);event.type=type;event.exclusive=exclusive;event.namespace=namespaces.join(".");event.namespace_re=new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.)?")+"(\\.|$)");if(onlyHandlers||!elem){event.preventDefault();event.stopPropagation()}if(!elem){$.each($.cache,function(){var internalKey=$.expando,internalCache=this[internalKey];if(internalCache&&internalCache.events&&internalCache.events[type]){$.event.trigger(event,data,internalCache.handle.elem)}});return}if(elem.nodeType===3||elem.nodeType===8){return}event.result=undefined;event.target=elem;data=data?$.makeArray(data):[];data.unshift(event);var cur=elem,ontype=type.indexOf(":")<0?"on"+type:"";do{var handle=$._data(cur,"handle");event.currentTarget=cur;if(handle){handle.apply(cur,data)}if(ontype&&$.acceptData(cur)&&cur[ontype]&&cur[ontype].apply(cur,data)===false){event.result=false;event.preventDefault()}cur=cur.parentNode||cur.ownerDocument||cur===event.target.ownerDocument&&window}while(cur&&!event.isPropagationStopped());if(!event.isDefaultPrevented()){var old,special=$.event.special[type]||{};if((!special._default||special._default.call(elem.ownerDocument,event)===false)&&!(type==="click"&&$.nodeName(elem,"a"))&&$.acceptData(elem)){try{if(ontype&&elem[type]){old=elem[ontype];if(old){elem[ontype]=null}$.event.triggered=type;elem[type]()}}catch(ieError){}if(old){elem[ontype]=old}$.event.triggered=undefined}}return event.result};$.event.handle=function(event){event=$.event.fix(event||window.event);var handlers=(($._data(this,"events")||{})[event.type]||[]).slice(0),run_all=!event.exclusive&&!event.namespace,args=Array.prototype.slice.call(arguments,0);args[0]=event;event.currentTarget=this;var oldType=event.type,runDefault=event.type!=="default"&&$event.special["default"]&&!event.originalEvent&&isElement(event.target);if(runDefault){$event.special["default"].triggerDefault(event,this,args[1])}event.type=oldType;for(var j=0,l=handlers.length;j<l;j++){var handleObj=handlers[j];if(event.firstPass){event.firstPass=false;continue}if(run_all||event.namespace_re.test(handleObj.namespace)){event.handler=handleObj.handler;event.data=handleObj.data;event.handleObj=handleObj;var ret=handleObj.handler.apply(this,args);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation()}}if(event.isImmediatePropagationStopped()){break}}}if(runDefault){$event.special["default"].checkAndRunDefaults(event,this)}return event.result}};exports();module.resolveWith(exports)};dispatch("mvc/event.handle").containing(moduleFactory).to("Foundry/2.1 Modules")}();