Komento.module("migrator.common",function(e){var t=this;Komento.Controller("Migrator.Common",{defaults:{"{categoriesList}":"#category","{componentsList}":"#components","{publishingState}":"#publishingState","{migrateLikes}":"#migrateLikes"}},function(t){return{init:function(){t.migrationType=t.element.attr("migration-type"),t.migratorType=t.element.attr("migrator-type"),t.progress=t.element.find(".migratorProgress"),t.actions=t.element.parents(".tab")},getStatistic:function(){var n,r;switch(t.migrationType){case"component":r="components",n=t.componentsList().val();break;case"article":r="categories",n=t.categoriesList().val();break;case"custom":r="data",n=e(".migrator-custom-data").controller().getData()}var i={};i[r]=n,Komento.ajax("admin.views.migrators.getmigrator",{type:t.migratorType,"function":"getstatistic",params:i},{success:function(e,n){t.progress.controller().setTotalPosts(e.length),t.progress.controller().setTotalComments(n),n>0&&(t.migratorType=="custom"?t.migrateCustom(i,0,n):t.migrate(e,0,e[0]))},log:function(e){t.progress.controller().log(e)}})},migrate:function(e,n,r){if(r===undefined){t.actions.controller().migrateComplete();return}switch(t.migrationType){case"article":var i=r;r={component:t.migratorType,cid:i}}var s=t.publishingState().val(),o=t.migrateLikes().is(":checked")?1:0;Komento.ajax("admin.views.migrators.getmigrator",{type:t.migratorType,"function":"migrate",params:{component:r.component,cid:r.cid,publishingState:s,migrateLikes:o}},{success:function(){t.migrate(e,n+1,e[n+1])},fail:function(e){t.progress.controller().log("error: "+e)},update:function(e){t.progress.controller().updateMigratedComments(e)},log:function(e){t.progress.controller().log(e)}})},migrateCustom:function(e,n,r){if(n>=r){t.actions.controller().migrateComplete();return}e.data.start=n,Komento.ajax("admin.views.migrators.getmigrator",{type:t.migratorType,"function":"migrate",params:e},{success:function(n){t.migrateCustom(e,n,r)},fail:function(e){t.progress.controller().log("error: "+e)},update:function(e){t.progress.controller().updateMigratedComments(e)},log:function(e){t.progress.controller().log(e)}})}}}),t.resolve()});