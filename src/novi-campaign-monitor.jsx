const React = novi.react.React;
import * as ExcerptFunction from "./ExcerptFunction";
import CampaignMonitorEditor from "./CampaignMonitorEditor";
import CampaignMonitorSettings from "./CampaignMonitorSettings";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-campaign-monitor",
    title: "Novi Campaign Monitor",
    description: "Novi Campaign Monitor description",
    version: "1.0.5",
    dependencies: {
        novi: "0.8.6"
    },
    defaults: {
        querySelector: '[class*="campaign-mailform"]'
    },
    ui: {
        editor: [CampaignMonitorEditor],
        settings: <CampaignMonitorSettings />,
    },
    excerpt : ExcerptFunction.validCampaignMonitorForm,
    onLanguageChange : onLanguageChange
};

function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-campaign-monitor");
    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    plugin.ui.editor[0].header[1] = <span>{messages.editor.header}</span>;
    return plugin;
}
novi.plugins.register(Plugin);