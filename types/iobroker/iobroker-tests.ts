declare function assertNever(val: never): never;

// Let the tests begin
declare let adapter: ioBroker.Adapter;

// Test EventEmitter definitions
adapter
    .on("ready", readyHandler)
    .on("stateChange", stateChangeHandler)
    .on("objectChange", objectChangeHandler)
    .on("message", messageHandler)
    .on("unload", unloadHandler)
    ;
adapter
    .removeListener("ready", readyHandler)
    .removeListener("stateChange", stateChangeHandler)
    .removeListener("objectChange", objectChangeHandler)
    .removeListener("message", messageHandler)
    .removeListener("unload", unloadHandler)
    ;
adapter.removeAllListeners();

function readyHandler() { }

function stateChangeHandler(id: string, state: ioBroker.State | null | undefined) {
    // Test State properties
    if (state) {
        state.ack;
        state.c && state.c.toLowerCase();
        state.expire && state.expire.toFixed();
        state.from.toLowerCase();
        state.lc.toFixed();
        state.q && state.q.toFixed();
        state.ts.toFixed();
        state.val;
    }
}

function objectChangeHandler(id: string, object: ioBroker.Object | null | undefined) {
    // Test properties of all objects
    if (object) {
        object._id.toLowerCase();
        object.common.name.toLowerCase();
        object.common.role && object.common.role.toLowerCase();
        object.common.icon && object.common.icon.toLowerCase();
        object.native.toString();
        object.enums && object.enums.toString();
        if (object.acl) {
            object.acl.object.toFixed();
            object.acl.owner.toLowerCase();
            object.acl.ownerGroup.toLowerCase();
        }
        // Test different object kinds
        switch (object.type) {
            case "adapter":
            case "config":
            case "enum":
            case "group":
            case "host":
            case "info":
            case "instance":
            case "meta":
            case "script":
            case "user":
                // nothing special here, update these tests when we have specialized definitions
                break;

            case "state":
                if (object.acl) object.acl.state.toFixed();
                object.common.def;
                object.common.desc && object.common.desc.toLowerCase();
                object.common.history;
                object.common.max && object.common.max.toFixed();
                object.common.min && object.common.min.toFixed();
                object.common.read.valueOf();
                object.common.states && object.common.states.toString();
                object.common.type && object.common.type.toLowerCase();
                object.common.unit && object.common.unit.toLowerCase();
                object.common.workingID && object.common.workingID.toLowerCase();
                object.common.write.valueOf();
                break;

            case "channel":
                object.common.desc && object.common.desc.toLowerCase();
                break;

            case "device":
                // nothing special here, update these tests when we have specialized definitions
                break;
        }
    }
}

function messageHandler(msg: ioBroker.Message) {
    msg._id.toFixed();
    msg.callback.ack.valueOf();
    msg.callback.id.toFixed();
    msg.callback.message.toString();
    msg.callback.time.toFixed();
    msg.command.toLowerCase();
    msg.from.toLowerCase();
    msg.message.toString();
}

function unloadHandler(callback: ioBroker.EmptyCallback) {
    adapter.log.info("shutting down");
    callback();
}

// Test the most important methods
adapter.setState("state.name", "value");
adapter.setState("state.name", "value", true);
adapter.setState("state.name", "value", (err, id) => { });
adapter.setState("state.name", { val: "value", ack: true });
adapter.setState("state.name", { val: "value", ack: true }, (err, id) => { });

adapter.setStateAsync("state.name", "value").then(id => id.toLowerCase());
adapter.setStateAsync("state.name", "value", true).then(id => id.toLowerCase());
adapter.setStateAsync("state.name", { val: "value", ack: true }).then(id => id.toLowerCase());

adapter.setStateChanged("state.name", "value");
adapter.setStateChanged("state.name", "value", true);
adapter.setStateChanged("state.name", "value", (err, id) => { });
adapter.setStateChanged("state.name", { val: "value", ack: true });
adapter.setStateChanged("state.name", { val: "value", ack: true }, (err, id) => { });

adapter.setStateChangedAsync("state.name", "value").then(id => id.toLowerCase());
adapter.setStateChangedAsync("state.name", "value", true).then(id => id.toLowerCase());
adapter.setStateChangedAsync("state.name", { val: "value", ack: true }).then(id => id.toLowerCase());

adapter.setForeignState("state.name", "value");
adapter.setForeignState("state.name", "value", true);
adapter.setForeignState("state.name", "value", (err, id) => { });
adapter.setForeignState("state.name", { val: "value", ack: true });
adapter.setForeignState("state.name", { val: "value", ack: true }, (err, id) => { });

adapter.setForeignStateAsync("state.name", "value").then(id => id.toLowerCase());
adapter.setForeignStateAsync("state.name", "value", true).then(id => id.toLowerCase());
adapter.setForeignStateAsync("state.name", { val: "value", ack: true }).then(id => id.toLowerCase());

adapter.setForeignStateChanged("state.name", "value");
adapter.setForeignStateChanged("state.name", "value", true);
adapter.setForeignStateChanged("state.name", "value", (err, id) => { });
adapter.setForeignStateChanged("state.name", { val: "value", ack: true });
adapter.setForeignStateChanged("state.name", { val: "value", ack: true }, (err, id) => { });

adapter.setForeignStateChangedAsync("state.name", "value").then(id => id.toLowerCase());
adapter.setForeignStateChangedAsync("state.name", "value", true).then(id => id.toLowerCase());
adapter.setForeignStateChangedAsync("state.name", { val: "value", ack: true }).then(id => id.toLowerCase());

adapter.setObject("obj.id", { type: "state", common: { name: "foo" }, native: {} });
adapter.setObject("obj.id", { type: "state", common: { name: "foo" }, native: {} }, (err, id) => { });
adapter.setForeignObject("obj.id", { type: "state", common: { name: "foo" }, native: {} });
adapter.setForeignObject("obj.id", { type: "state", common: { name: "foo" }, native: {} }, (err, id) => { });

adapter.setObjectAsync("obj.id", { type: "state", common: { name: "foo" }, native: {} }).then(({ id }) => id.toLowerCase());
adapter.setForeignObjectAsync("obj.id", { type: "state", common: { name: "foo" }, native: {} }).then(({ id }) => id.toLowerCase());

adapter.setObjectNotExists("obj.id", { type: "state", common: { name: "foo" }, native: {} });
adapter.setObjectNotExists("obj.id", { type: "state", common: { name: "foo" }, native: {} }, (err, id) => { });
adapter.setForeignObjectNotExists("obj.id", { type: "state", common: { name: "foo" }, native: {} });
adapter.setForeignObjectNotExists("obj.id", { type: "state", common: { name: "foo" }, native: {} }, (err, id) => { });

adapter.setObjectNotExistsAsync("obj.id", { type: "state", common: { name: "foo" }, native: {} }).then(({ id }) => id.toLowerCase());
adapter.setForeignObjectNotExistsAsync("obj.id", { type: "state", common: { name: "foo" }, native: {} }).then(({ id }) => id.toLowerCase());

adapter.getObject("obj.id", (err, obj) => { });
adapter.getForeignObject("obj.id", (err, obj) => { });

adapter.getObjectAsync("obj.id").then(obj => obj._id.toLowerCase());
adapter.getForeignObjectAsync("obj.id").then(obj => obj._id.toLowerCase());

adapter.subscribeObjects("*");
adapter.subscribeStates("*");
adapter.subscribeForeignObjects("*");
adapter.subscribeForeignStates("*");
adapter.unsubscribeObjects("*");
adapter.unsubscribeStates("*");
adapter.unsubscribeForeignObjects("*");
adapter.unsubscribeForeignStates("*");

adapter.log.info("msg");
adapter.log.debug("msg");
adapter.log.warn("msg");
adapter.log.error("msg");
adapter.log.silly("msg");

switch (adapter.log.level) {
    case "debug":
    case "error":
    case "info":
    case "silly":
    case "warn":
        break;
    default:
        assertNever(adapter.log.level);
}
