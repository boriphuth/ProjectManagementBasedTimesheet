﻿Ext.define(document.appName + '.model.TaskType', {
    extend: 'Ext.data.Model',
    xtype: 'tasktype',
    idProperty: 'ID',
    fields: [
        { name: 'ID', type: 'int' },
        { name: 'Name' },
        { name: 'Order', type: 'int' },
        { name: 'ContainsTimesheet', type: 'boolean', defaultValue: false }
    ],
    proxy: {
        type: 'rest',
        api: {
            create: document.urlProjectActivitiesApi + '/SaveTaskType',
            update: document.urlProjectActivitiesApi + '/UpdateTaskType',
            destroy: document.urlProjectActivitiesApi + '/DeleteTaskType'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        },
        listeners: {
            exception: function (proxy, response, operation) {
                var json = Ext.decode(response.responseText);
                if (json) {
                    Ext.MessageBox.show({
                        title: 'เกิดข้อผิดพลาดจากการดำเนินการ',
                        msg: json.message,
                        icon: Ext.MessageBox.ERROR,
                        buttons: Ext.Msg.OK
                    });
                } else {
                    Ext.MessageBox.show({
                        title: 'REMOTE EXCEPTION',
                        msg: operation.getError(),
                        icon: Ext.MessageBox.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }
            }
        }
    }
});