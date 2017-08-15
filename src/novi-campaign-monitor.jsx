const React = novi.react.React;
import * as ExcerptFunction from "./ExcerptFunction";
import CampaignMonitorEditor from "./CampaignMonitorEditor";
import CampaignMonitorSettings from "./CampaignMonitorSettings";

const Plugin = {
    name: "novi-plugin-campaign-monitor",
    title: "Novi Campaign Monitor",
    description: "Novi Campaign Monitor description",
    version: "1.0.4",
    dependencies: {
    },
    defaults: {
        querySelector: '[class*="campaign-mailform"]'
    },
    ui: {
        editor: [CampaignMonitorEditor],
        settings: <CampaignMonitorSettings />,
    },
    excerpt : ExcerptFunction.validCampaignMonitorForm
};

novi.plugins.register(Plugin);