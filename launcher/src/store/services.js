import { defineStore } from "pinia";
export const useServices = defineStore("services", {
  state: () => {
    return {
      filteredServices: [],
      buttonState: [
        {
          id: 1,
          name: "graffiti",
          displayName: "Graffiti",
          icon: "/img/icon/the-staking/option-graffiti.png",
          display: true,
        },
        {
          id: 2,
          name: "remove",
          displayName: "Remove all keys",
          icon: "/img/icon/the-staking/option-remove.png",
          display: true,
        },
      ],
      backendServicesTimestamp: null,
      backendServices: [],
      installedServices: [],
      runningServices: [],
      allServices: [
        {
          id: 1,
          name: "Lighthouse",
          service: "LighthouseBeaconService",
          category: "consensus",
          displayCategory: "csc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          addPanel: false,
          modifierPanel: false,
          replacePanel: false,
          path: "/lighthouse",
          linkUrl: "",
          docsUrl: "https://lighthouse-book.sigmaprime.io/",
          icon: require("../../public/img/icon/plugin-icons/consensus/LightHouse.png"),
          sIcon: require("../../public/img/icon/plugin-icons/consensus/Lighthouse-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            // {
            //   title: "Resync",
            //   type: "action",
            //   action: "resyncronization",
            //   changeValue: null,
            //   displayResyncModal: false,
            //   icon: "/img/icon/plugin-menu-icons/resync.png",
            // },
            {
              title: "External IP Address",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/ip_address.png",
              pattern: ["(- --enr-address=)(.*)(\\n)"],
            },
            {
              title: "Disable ENR auto update",
              type: "toggle",
              changeValue: true,
              icon: "/img/icon/plugin-menu-icons/external_ip_update.png",
              pattern: ["(- --disable-enr-auto-update=)(.*)(\\n)"],
            },
            {
              title: "External TCP/UDP port",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/tcp_udp_port.png",
              pattern: [
                "(- --enr-tcp-port=)(.*)(\\n)",
                "(- --enr-udp-port=)(.*)(\\n)",
                "(^ {2}- (\\d{1,3}\\.){3}\\d{1,3}):([0-9]\\d{0,4}):([0-9]\\d{0,4})/tcp",
                "(^ {2}- (\\d{1,3}\\.){3}\\d{1,3}):([0-9]\\d{0,4}):([0-9]\\d{0,4})/udp",
                "(- --port=)(.*)(\\n)",
              ],
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 2,
          name: "Lighthouse",
          service: "LighthouseValidatorService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/lighthouse",
          linkUrl: "",
          docsUrl: "https://lighthouse-book.sigmaprime.io/",
          icon: require("../../public/img/icon/plugin-icons/validator/Lighthouse-Validator-Circle.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/Lighthouse-Validator-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: ["(- --suggested-fee-recipient=)(.*)(\\n)"],
            },
            {
              title: "Doppelganger",
              type: "toggle",
              changeValue: true,
              icon: "/img/icon/plugin-menu-icons/doppelganger.png",
              pattern: ["- --enable-doppelganger-protection"],
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 3,
          name: "Prysm",
          service: "PrysmBeaconService",
          category: "consensus",
          displayCategory: "csc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/prysm",
          linkUrl: "",
          docsUrl: "https://docs.prylabs.network/docs/getting-started/",
          icon: require("../../public/img/icon/plugin-icons/consensus/Prysm.png"),
          sIcon: require("../../public/img/icon/plugin-icons/consensus/Prysm-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            // {
            //   title: "Resync",
            //   type: "action",
            //   action: "resyncronization",
            //   changeValue: null,
            //   displayResyncModal: false,
            //   icon: "/img/icon/plugin-menu-icons/resync.png",
            // },
            {
              title: "External IP Address",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/ip_address.png",
              pattern: ["( --p2p-host-ip=)(.*)(\\n)"],
            },
            {
              title: "External TCP/UDP port",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/tcp_udp_port.png",
              pattern: [
                "(--p2p-tcp-port=)(.*)(\\n)",
                "(--p2p-udp-port=)(.*)(\\n)",
                "(^ {2}- (\\d{1,3}\\.){3}\\d{1,3}):([0-9]\\d{0,4}):([0-9]\\d{0,4})/tcp",
                "(^ {2}- (\\d{1,3}\\.){3}\\d{1,3}):([0-9]\\d{0,4}):([0-9]\\d{0,4})/udp",
              ],
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 4,
          name: "Prysm",
          service: "PrysmValidatorService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/prysm",
          linkUrl: "",
          docsUrl: "https://docs.prylabs.network/docs/getting-started/",
          icon: require("../../public/img/icon/plugin-icons/validator/Prysm-Validator-Circle.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/Prysm-Validator-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: ["(--suggested-fee-recipient=)(.*)(\\n)"],
            },
            {
              title: "Doppelganger",
              type: "toggle",
              changeValue: true,
              icon: "/img/icon/plugin-menu-icons/doppelganger.png",
              pattern: ["(--enable-doppelganger=)(.*)(\\n)"],
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 5,
          name: "Nimbus",
          service: "NimbusBeaconService",
          category: "consensus",
          displayCategory: "csc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/nimbus",
          linkUrl: "",
          docsUrl: "https://nimbus.guide/",
          icon: require("../../public/img/icon/plugin-icons/consensus/Nimbus.png"),
          sIcon: require("../../public/img/icon/plugin-icons/consensus/Nimbus-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Pruning Mode",
              type: "select",
              value: ["archive", "prune"],
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/prunning.png",
              unit: "",
              pattern: ["(--history=)(.*)(\\n)"],
            },
            // {
            //   title: "Resync",
            //   type: "action",
            //   action: "resyncronization",
            //   changeValue: null,
            //   displayResyncModal: false,
            //   icon: "/img/icon/plugin-menu-icons/resync.png",
            // },
            {
              title: "External IP Address",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/ip_address.png",
              pattern: ["(- --nat:extip:)(.*)(\\n)"],
            },
            {
              title: "ENR auto update",
              type: "toggle",
              changeValue: true,
              icon: "/img/icon/plugin-menu-icons/external_ip_update.png",
              pattern: ["(- --enr-auto-update=)(.*)(\\n)"],
            },
            {
              title: "External TCP/UDP port",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/tcp_udp_port.png",
              pattern: [
                "(- --tcp-port=)(.*)(\\n)",
                "(- --udp-port=)(.*)(\\n)",
                "(^ {2}- (\\d{1,3}\\.){3}\\d{1,3}):([0-9]\\d{0,4}):([0-9]\\d{0,4})/tcp",
                "(^ {2}- (\\d{1,3}\\.){3}\\d{1,3}):([0-9]\\d{0,4}):([0-9]\\d{0,4})/udp",
              ],
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 6,
          name: "Nimbus",
          service: "NimbusValidatorService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/nimbus",
          linkUrl: "",
          docsUrl: "https://nimbus.guide/",
          icon: require("../../public/img/icon/plugin-icons/validator/Nimbus-Validator-Circle.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/Nimbus-Validator-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: ["(- --suggested-fee-recipient=)(.*)(\\n)"],
            },
            {
              title: "Doppelganger",
              type: "toggle",
              changeValue: true,
              icon: "/img/icon/plugin-menu-icons/doppelganger.png",
              pattern: ["(- --doppelganger-detection=)(.*)(\\n)"],
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 7,
          name: "Teku",
          service: "TekuBeaconService",
          category: "consensus",
          displayCategory: "csc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/teku",
          linkUrl: "",
          docsUrl: "https://docs.teku.consensys.net/en/latest/",
          icon: require("../../public/img/icon/plugin-icons/consensus/Teku.png"),
          sIcon: require("../../public/img/icon/plugin-icons/consensus/Teku-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "RAM Usage Limit",
              type: "select",
              value: [2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 48, 64],
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/ram.png",
              unit: "GB",
              pattern: ["(JAVA_OPTS: -Xmx)(\\d+)(g)"],
            },
            // {
            //   title: "Resync",
            //   type: "action",
            //   action: "resyncronization",
            //   changeValue: null,
            //   displayResyncModal: false,
            //   icon: "/img/icon/plugin-menu-icons/resync.png",
            // },
            {
              title: "External IP Address",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/ip_address.png",
              pattern: ["(- --p2p-advertised-ip=)(.*)(\\n)"],
            },
            {
              title: "External TCP/UDP port",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/tcp_udp_port.png",
              pattern: [
                "(- --p2p-port=)(.*)(\\n)",
                "(- --p2p-advertised-port=)(.*)(\\n)",
                "(^ {2}- (\\d{1,3}\\.){3}\\d{1,3}):([0-9]\\d{0,4}):([0-9]\\d{0,4})/tcp",
                "(^ {2}- (\\d{1,3}\\.){3}\\d{1,3}):([0-9]\\d{0,4}):([0-9]\\d{0,4})/udp",
              ],
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 8,
          name: "Teku",
          service: "TekuValidatorService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/teku",
          linkUrl: "",
          docsUrl: "https://docs.teku.consensys.net/en/latest/",
          icon: require("../../public/img/icon/plugin-icons/validator/Teku-Validator-Circle.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/Teku-Validator-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          serviceIsPending: false,
          expertOptions: [
            {
              title: "RAM Usage Limit",
              type: "select",
              value: [2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 48, 64],
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/ram.png",
              unit: "GB",
              pattern: ["(JAVA_OPTS: -Xmx)(\\d+)(g)"],
            },
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: ["(- --validators-proposer-default-fee-recipient=)(.*)(\\n)"],
            },
            {
              title: "Doppelganger",
              type: "toggle",
              changeValue: true,
              icon: "/img/icon/plugin-menu-icons/doppelganger.png",
              pattern: ["(- --doppelganger-detection-enabled=)(.*)(\\n)"],
            },
            {
              title: "Remove Lockfiles",
              type: "action",
              action: "removeLockfiles",
              changeValue: null,
              displayWarningModal: false,
              icon: "/img/icon/plugin-menu-icons/prunning.png",
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 9,
          name: "ssv.network",
          service: "SSVNetworkService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/ssv_network",
          icon: require("../../public/img/icon/plugin-icons/Other/ssv-network.png"),
          sIcon: require("../../public/img/icon/plugin-icons/Other/ssv-network-s.png"),
          hIcon: "/img/icon/service-icons/ssv.png",
          linkUrl: "",
          docsUrl: "https://docs.ssv.network/",
          headerOption: true,
          expertOptionsModal: false,
          expertOptions: [],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 10,
          name: "Prometheus",
          service: "PrometheusService",
          category: "service",
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/prometheus",
          icon: require("../../public/img/icon/plugin-icons/Other/prometheus.png"),
          sIcon: require("../../public/img/icon/plugin-icons/Other/Prometheus-s.png"),
          hIcon: "/img/icon/service-icons/prometheus.png",
          linkUrl: "",
          docsUrl: "https://prometheus.io/docs/introduction/overview/",
          headerOption: true,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Data retention (in days)",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/DataRetention.png",
              pattern: ["(--storage.tsdb.retention.time=)(.*)(d)"],
            },
          ],
          tunnelLink: true,
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 11,
          name: "Grafana",
          service: "GrafanaService",
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          category: "service",
          path: "/grafana",
          icon: "/img/icon/plugin-icons/Other/grafana-service.png",
          sIcon: "/img/icon/plugin-icons/Other/Grafana-s.png",
          hIcon: "/img/icon/service-icons/grafana.png",
          linkUrl: "",
          docsUrl: "https://grafana.com/docs/grafana/latest/",
          headerOption: true,
          expertOptionsModal: false,
          expertOptions: [],
          tunnelLink: true,
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 12,
          name: "Geth",
          service: "GethService",
          category: "execution",
          displayCategory: "exc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/geth",
          linkUrl: "",
          docsUrl: "https://geth.ethereum.org/docs/",
          icon: require("../..//public/img/icon/plugin-icons/execution/Geth.png"),
          sIcon: require("../../public/img/icon/plugin-icons/execution/Geth-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            // {
            //   title: "Resync",
            //   type: "action",
            //   action: "resyncronization",
            //   changeValue: null,
            //   displayResyncModal: false,
            //   icon: "/img/icon/plugin-menu-icons/resync.png",
            // },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 13,
          name: "Besu",
          service: "BesuService",
          category: "execution",
          displayCategory: "exc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/besu",
          linkUrl: "",
          docsUrl: "https://besu.hyperledger.org/en/stable/",
          icon: require("../..//public/img/icon/plugin-icons/execution/hyperLedger-besu.png"),
          sIcon: require("../../public/img/icon/plugin-icons/execution/HyperLedger-besu-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Auto Pruning",
              type: "toggle",
              changeValue: true,
              icon: "/img/icon/plugin-menu-icons/prunning.png",
              pattern: ["(- --pruning-enabled=)(.*)(\\n)"],
            },
            // {
            //   title: "Resync",
            //   type: "action",
            //   action: "resyncronization",
            //   changeValue: null,
            //   displayResyncModal: false,
            //   icon: "/img/icon/plugin-menu-icons/resync.png",
            // },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 14,
          name: "Nethermind",
          service: "NethermindService",
          category: "execution",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          displayCategory: "exc",
          path: "/nethermind",
          linkUrl: "",
          docsUrl: "https://docs.nethermind.io/nethermind/",
          icon: require("../..//public/img/icon/plugin-icons/execution/Nethermind.png"),
          sIcon: require("../../public/img/icon/plugin-icons/execution/Nethermind-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Pruning Mode",
              type: "select",
              value: ["Hybrid", "Memory", "Full", "None"],
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/prunning.png",
              unit: "",
              pattern: ["(--Pruning.Mode=)(.*)(\\n)"],
            },
            // {
            //   title: "Resync",
            //   type: "action",
            //   action: "resyncronization",
            //   changeValue: null,
            //   displayResyncModal: false,
            //   icon: "/img/icon/plugin-menu-icons/resync.png",
            // },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 15,
          name: "NodeExporter",
          service: "PrometheusNodeExporterService",
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          category: "service",
          path: "/prometheusnodeexporter",
          icon: "/img/icon/plugin-icons/Other/PrometheusNodeExporter.png",
          sIcon: "/img/icon/plugin-icons/Other/PrometheusNodeExporter-s.png",
          linkUrl: "",
          docsUrl: "https://github.com/prometheus/node_exporter",
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 16,
          name: "Flashbots Mev Boost",
          service: "FlashbotsMevBoostService",
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          category: "service",
          path: "/flashbotsmevboost",
          icon: "/img/icon/plugin-icons/Other/mev-icon.png",
          sIcon: "/img/icon/plugin-icons/Other/mev-sIcon.png",
          hIcon: "/img/icon/plugin-icons/Other/mev-sIcon.png",
          linkUrl: "",
          docsUrl: "https://github.com/flashbots/mev-boost",
          headerOption: true,
          expertOptionsModal: false,
          expertOptions: [],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 17,
          name: "Web3Signer",
          service: "Web3SignerService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/web3signer",
          linkUrl: "",
          docsUrl: "https://docs.web3signer.consensys.net/en/latest/",
          icon: require("../../public/img/icon/plugin-icons/validator/Web3Signer-Circle.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/Web3Signer-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          serviceIsPending: false,
          expertOptions: [],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 18,
          name: "Lodestar",
          service: "LodestarBeaconService",
          category: "consensus",
          displayCategory: "csc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          addPanel: false,
          modifierPanel: false,
          replacePanel: false,
          path: "/lodestar",
          linkUrl: "",
          docsUrl: "https://chainsafe.github.io/lodestar/",
          icon: require("../../public/img/icon/plugin-icons/consensus/Lodestar.png"),
          sIcon: require("../../public/img/icon/plugin-icons/consensus/Lodestar-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            // {
            //   title: "Resync",
            //   type: "action",
            //   action: "resyncronization",
            //   changeValue: null,
            //   displayResyncModal: false,
            //   icon: "/img/icon/plugin-menu-icons/resync.png",
            // },
            {
              title: "External IP Address",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/ip_address.png",
              pattern: ["(- --enr.ip=)(.*)(\\n)"],
            },
            {
              title: "Enable NAT",
              type: "toggle",
              changeValue: true,
              icon: "/img/icon/plugin-menu-icons/external_ip_update.png",
              pattern: ["(- --nat=)(.*)(\\n)"],
            },
            {
              title: "External TCP/UDP port",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/tcp_udp_port.png",
              pattern: [
                "(- --enr.tcp=)(.*)(\\n)",
                "(- --enr.udp=)(.*)(\\n)",
                "(^ {2}- (\\d{1,3}\\.){3}\\d{1,3}):([0-9]\\d{0,4}):([0-9]\\d{0,4})/tcp",
                "(^ {2}- (\\d{1,3}\\.){3}\\d{1,3}):([0-9]\\d{0,4}):([0-9]\\d{0,4})/udp",
                "(- --port=)(.*)(\\n)",
              ],
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 19,
          name: "Lodestar",
          service: "LodestarValidatorService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/lodestar",
          linkUrl: "",
          docsUrl: "https://chainsafe.github.io/lodestar/",
          icon: require("../../public/img/icon/plugin-icons/validator/Lodestar-Validator-Circle.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/Lodestar-Validator-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: ["(- --suggestedFeeRecipient=)(.*)(\\n)"],
            },
            {
              title: "Doppelganger",
              type: "toggle",
              changeValue: true,
              icon: "/img/icon/plugin-menu-icons/doppelganger.png",
              pattern: ["(- --doppelgangerProtection=)(.*)(\\n)"],
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 20,
          name: "Erigon",
          service: "ErigonService",
          category: "execution",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          displayCategory: "exc",
          path: "/erigon",
          linkUrl: "",
          docsUrl: "https://github.com/ledgerwatch/erigon/",
          icon: require("../../public/img/icon/plugin-icons/execution/Erigon.png"),
          sIcon: require("../../public/img/icon/plugin-icons/execution/Erigon-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            // {
            //   title: "Resync",
            //   type: "action",
            //   action: "resyncronization",
            //   changeValue: null,
            //   displayResyncModal: false,
            //   icon: "/img/icon/plugin-menu-icons/resync.png",
            // },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 21,
          name: "Notifications",
          service: "NotificationService",
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          category: "service",
          path: "/notifications",
          icon: "/img/icon/plugin-icons/Other/NotifierService.svg",
          sIcon: "/img/icon/plugin-icons/Other/NotifierService-s.png",
          linkUrl: "",
          docsUrl: "https://stereum.net/",
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 22,
          name: "ValidatorEjector",
          service: "ValidatorEjectorService",
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          category: "service",
          path: "/validatorejector",
          icon: "/img/icon/plugin-icons/Other/ValidatorEjector.png",
          sIcon: "/img/icon/plugin-icons/Other/ValidatorEjector-s.png",
          linkUrl: "",
          docsUrl:
            "https://enchanted-direction-844.notion.site/Validator-Exits-NO-Setup-Overview-07436e1694ce4b7091473602049664d7",
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 23,
          name: "Lido Keys API",
          service: "KeysAPIService",
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          category: "service",
          path: "/keysapi",
          icon: "/img/icon/plugin-icons/Other/LIDOKeyAPI.png",
          sIcon: "/img/icon/plugin-icons/Other/LIDOKeyAPI-s.png",
          linkUrl: "",
          docsUrl: "https://github.com/lidofinance/lido-keys-api",
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 24,
          name: "Obol Charon",
          service: "CharonService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/charon",
          icon: require("../../public/img/icon/plugin-icons/validator/ObolCharon.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/ObolCharon-s.png"),
          hIcon: require("../../public/img/icon/plugin-icons/validator/ObolCharon-s.png"),
          linkUrl: "",
          docsUrl: "https://docs.obol.tech/docs/intro",
          headerOption: true,
          expertOptionsModal: false,
          expertOptions: [],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 25,
          name: "Reth",
          service: "RethService",
          category: "execution",
          displayCategory: "exc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          replacePanel: false,
          addPanel: false,
          path: "/reth",
          linkUrl: "",
          docsUrl: "https://paradigmxyz.github.io/reth/",
          icon: require("../..//public/img/icon/plugin-icons/execution/Reth.png"),
          sIcon: require("../../public/img/icon/plugin-icons/execution/Reth-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
      ],
      versions: {},
      stereumVersion: {},
      launcherVersion: "",
      newUpdates: [],
    };
  },
  getters: {},
  actions: {},
});
