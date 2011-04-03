roookies.views.ShotsGallery = Ext.extend(Ext.DataView, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Shots'
    }],
    tpl:'',
    itemSelector:'',

    refresh: function() {
        if (!this.rendered) {
            return;
        }

        var el = this.getTargetEl(),
            records = this.store.getRange();

        el.update('');
        if (records.length < 1) {
            if (!this.deferEmptyText || this.hasSkippedEmptyText) {
                el.update(this.emptyText);
            }
            this.all.clear();
        } else {
            this.tpl.overwrite(el, this.collectData(records, 0));
            this.all.fill(Ext.query(this.itemSelector, el.dom));
            this.updateIndexes(0);
        }
        this.hasSkippedEmptyText = true;
        this.fireEvent('refresh');
    },


    prepareData: function(data, index, record) {
        if (record) {
            Ext.apply(data, this.prepareAssociatedData(record));
        }
        return data;
    },


    prepareAssociatedData: function(record, ids) {

        ids = ids || [];

        var associations     = record.associations.items,
            associationCount = associations.length,
            associationData  = {},
            associatedStore, associatedName, associatedRecords, associatedRecord,
            associatedRecordCount, association, internalId, i, j;

        for (i = 0; i < associationCount; i++) {
            association = associations[i];


            associatedStore = record[association.storeName];


            associationData[association.name] = [];


            if (associatedStore && associatedStore.data.length > 0) {
                associatedRecords = associatedStore.data.items;
                associatedRecordCount = associatedRecords.length;


                for (j = 0; j < associatedRecordCount; j++) {
                    associatedRecord = associatedRecords[j];
                    internalId = associatedRecord.internalId;



                    if (ids.indexOf(internalId) == -1) {
                        ids.push(internalId);

                        associationData[association.name][j] = associatedRecord.data;
                        Ext.apply(associationData[association.name][j], this.prepareAssociatedData(associatedRecord, ids));
                    }
                }
            }
        }

        return associationData;
    },


    collectData : function(records, startIndex){
        var r = [],
            i = 0,
            len = records.length;

        for(; i < len; i++){
            r[r.length] = this.prepareData(records[i].data, startIndex + i, records[i]);
        }

        return r;
    },


    bufferRender : function(records, index){
        var div = document.createElement('div');
        this.tpl.overwrite(div, this.collectData(records, index));
        return Ext.query(this.itemSelector, div);
    },


    onUpdate : function(ds, record){
        var index = this.store.indexOf(record),
            original,
            node;

        if (index > -1){
            original = this.all.elements[index];
            node = this.bufferRender([record], index)[0];

            this.all.replaceElement(index, node, true);
            this.updateIndexes(index, index);



            this.selModel.refresh();
        }
    },


    onAdd : function(ds, records, index){
        if (this.all.getCount() === 0) {
            this.refresh();
            return;
        }

        var nodes = this.bufferRender(records, index), n, a = this.all.elements;
        if (index < this.all.getCount()) {
            n = this.all.item(index).insertSibling(nodes, 'before', true);
            a.splice.apply(a, [index, 0].concat(nodes));
        } else {
            n = this.all.last().insertSibling(nodes, 'after', true);
            a.push.apply(a, nodes);
        }
        this.updateIndexes(index);
    },


    onRemove : function(ds, record, index){
        this.all.removeElement(index, true);
        this.updateIndexes(index);
        if (this.store.getCount() === 0){
            this.refresh();
        }
    },


    refreshNode : function(index){
        this.onUpdate(this.store, this.store.getAt(index));
    },


    updateIndexes : function(startIndex, endIndex){
        var ns = this.all.elements;
        startIndex = startIndex || 0;
        endIndex = endIndex || ((endIndex === 0) ? 0 : (ns.length - 1));
        for(var i = startIndex; i <= endIndex; i++){
            ns[i].viewIndex = i;
        }
    },


    getStore : function(){
        return this.store;
    },


    bindStore : function(store, initial) {
        if (!initial && this.store) {
            if (store !== this.store && this.store.autoDestroy) {
                this.store.destroy();
            }
            else {
                this.mun(this.store, {
                    scope: this,
                    beforeload: this.onBeforeLoad,
                    datachanged: this.onDataChanged,
                    add: this.onAdd,
                    remove: this.onRemove,
                    update: this.onUpdate,
                    clear: this.refresh
                });
            }
            if (!store) {
                if (this.loadMask) {
                    this.loadMask.bindStore(null);
                }
                this.store = null;
            }
        }
        if (store) {
            store = Ext.StoreMgr.lookup(store);
            this.mon(store, {
                scope: this,
                beforeload: this.onBeforeLoad,
                datachanged: this.onDataChanged,
                add: this.onAdd,
                remove: this.onRemove,
                update: this.onUpdate,
                clear: this.refresh
            });
            if (this.loadMask) {
                this.loadMask.bindStore(store);
            }
        }

        this.store = store;

        this.getSelectionModel().bind(store);

        if (store) {
            this.refresh();
        }
    },


    onDataChanged: function() {
        if (this.blockRefresh !== true) {
            this.refresh.apply(this, arguments);
        }
    },


    findItemByChild: function(node){
        return Ext.fly(node).findParent(this.itemSelector, this.getTargetEl());
    },


    findTargetByEvent: function(e) {
        return e.getTarget(this.itemSelector, this.getTargetEl());
    },



    getSelectedNodes: function(){
        var nodes   = [],
            records = this.selModel.getSelection(),
            ln = records.length,
            i  = 0;

        for (; i < ln; i++) {
            nodes.push(this.getNode(records[i]));
        }

        return nodes;
    },


    getRecords: function(nodes) {
        var records = [],
            i = 0,
            len = nodes.length;

        for (; i < len; i++) {
            records[records.length] = this.store.getAt(nodes[i].viewIndex);
        }

        return r;
    },


    getRecord: function(node){
        return this.store.getAt(node.viewIndex);
    },


    isSelected : function(node) {

        var r = this.getRecord(node);
        return this.selModel.isSelected(r);
    },


    select: function(records, keepExisting, suppressEvent) {
        this.selModel.select(records, keepExisting, suppressEvent);
    },


    deselect: function(records, suppressEvent) {
        this.selModel.deselect(records, suppressEvent);
    },


    getNode : function(nodeInfo) {
        if (Ext.isString(nodeInfo)) {
            return document.getElementById(nodeInfo);
        } else if (Ext.isNumber(nodeInfo)) {
            return this.all.elements[nodeInfo];
        } else if (nodeInfo instanceof Ext.data.Model) {
            var idx = this.store.indexOf(nodeInfo);
            return this.all.elements[idx];
        }
        return nodeInfo;
    },


    getNodes: function(start, end) {
        var ns = this.all.elements,
            nodes = [],
            i;

        start = start || 0;
        end = !Ext.isDefined(end) ? Math.max(ns.length - 1, 0) : end;
        if (start <= end) {
            for (i = start; i <= end && ns[i]; i++) {
                nodes.push(ns[i]);
            }
        } else {
            for (i = start; i >= end && ns[i]; i--) {
                nodes.push(ns[i]);
            }
        }
        return nodes;
    },


    indexOf: function(node) {
        node = this.getNode(node);
        if (Ext.isNumber(node.viewIndex)) {
            return node.viewIndex;
        }
        return this.all.indexOf(node);
    },


    onBeforeLoad: function() {
        if (this.loadingText) {
            this.getTargetEl().update('');
            this.all.clear();
        }
    },

    onDestroy : function() {
        this.all.clear();
        Ext.DataView.superclass.onDestroy.call(this);
        this.bindStore(null);
        this.selModel.destroy();
    },


    onItemSelect: function(record) {
        var node = this.getNode(record);
        Ext.fly(node).addCls(this.selectedItemCls);
    },


    onItemDeselect: function(record) {
        var node = this.getNode(record);
        Ext.fly(node).removeCls(this.selectedItemCls);
    },

    select: function(records, keepExisting, supressEvents) {
        console.warn("DataView: select will be removed, please access select through a DataView's SelectionModel, ie: view.getSelectionModel().select()");
        var sm = this.getSelectionModel();
        return sm.select.apply(sm, arguments);
    },
    clearSelections: function() {
        console.warn("DataView: clearSelections will be removed, please access deselectAll through DataView's SelectionModel, ie: view.getSelectionModel().deselectAll()");
        var sm = this.getSelectionModel();
        return sm.deselectAll();
    }
});





















});