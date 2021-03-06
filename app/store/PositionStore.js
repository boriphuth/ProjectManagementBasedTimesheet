﻿Ext.define(document.appName + '.store.PositionStore', {
    extend: 'Ext.data.Store',
    alias: 'widget.positionStore',
    model: document.appName + '.model.Position',
    pageSize: 99999,
    autoLoad: false,
    autoSync: false,

    proxy: {
        type: 'ajax',
        api: {
            read: document.urlOrganizationApi + '/ReadPosition'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total',
            successProperty: 'success'
        },
        writer: {
            type: 'json'
        }
    },
    listeners: {
        write: function (store, operation) {
            //var record = operation.getRecords()[0],
            //    name = Ext.String.capitalize(operation.action),
            //    verb;


            //if (name == 'Destroy') {
            //    verb = 'Destroyed';
            //} else {
            //    verb = name + 'd';
            //}
            //Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));
        },
        exception: function (proxy, response, options) {
            Ext.MessageBox.show({
                title: TextLabel.errorAlertTitle,
                msg: 'เกิดข้อผิดพลาดในการค้นข้อมูล Position '
                    + response.status + ": "
                    + response.statusText,
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
        }
    }
});