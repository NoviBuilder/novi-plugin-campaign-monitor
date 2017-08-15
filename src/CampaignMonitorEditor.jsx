const React = novi.react.React;
const Icons = novi.ui.icons;
import Trigger from "./editor/Trigger";
import Body from "./editor/Body";


const EditorItem = {
    trigger: <Trigger/>,
    tooltip: "Change campaign monitor settings",
    header: [Icons.ICON_CAMPAIGN_MONITOR, <span>CampaignMonitor Settings</span>],
    body: [<Body/>],
    closeIcon: "submit",
    onSubmit: onSubmitAction,
    width: 360,
    height: 170,
    title: "Campaign monitor settings"
};


export default EditorItem;

function onSubmitAction(headerStates, bodyStates) {
    let state = bodyStates[0];
    if( state.initActionValue === state.action && state.initInputName === state.name) return;
    novi.element.setAttribute(state.element, "action", state.action);
    novi.element.setAttribute(state.input, "name", state.name);
    novi.page.forceUpdate();

}