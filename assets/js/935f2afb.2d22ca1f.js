"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/courier-iOS/docs/Introduction","docId":"Introduction"},{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Installation","href":"/courier-iOS/docs/Installation","docId":"Installation"},{"type":"link","label":"Sample App","href":"/courier-iOS/docs/Sample App","docId":"Sample App"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Setup Connection","href":"/courier-iOS/docs/Setup Connection","docId":"Setup Connection"},{"type":"link","label":"Configuring Client","href":"/courier-iOS/docs/Configuring Client","docId":"Configuring Client"},{"type":"link","label":"Message Adapter","href":"/courier-iOS/docs/Message Adapter","docId":"Message Adapter"},{"type":"link","label":"Connection Lifeycle","href":"/courier-iOS/docs/Connection Lifeycle","docId":"Connection Lifeycle"},{"type":"link","label":"Message QoS","href":"/courier-iOS/docs/Message QoS","docId":"Message QoS"},{"type":"link","label":"Subscribe & Receive Message","href":"/courier-iOS/docs/Subscribe & Receive Message","docId":"Subscribe & Receive Message"},{"type":"link","label":"Publish Message","href":"/courier-iOS/docs/Publish Message","docId":"Publish Message"},{"type":"link","label":"Event Handling","href":"/courier-iOS/docs/Event Handling","docId":"Event Handling"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Contribution","href":"/courier-iOS/docs/CONTRIBUTION","docId":"CONTRIBUTION"},{"type":"link","label":"License","href":"/courier-iOS/docs/LICENSE","docId":"LICENSE"}]},"docs":{"Configuring Client":{"id":"Configuring Client","title":"Configuring Client","description":"Configure and Create MQTT CourierClient Instance with CourierClientFactory","sidebar":"tutorialSidebar"},"Connection Lifeycle":{"id":"Connection Lifeycle","title":"Connection Lifeycle","description":"To connect to the broker, you simply need to invoke connect method","sidebar":"tutorialSidebar"},"CONTRIBUTION":{"id":"CONTRIBUTION","title":"Courier iOS - Contribution Guidelines","description":"Courier iOS is an open-source project.","sidebar":"tutorialSidebar"},"Event Handling":{"id":"Event Handling","title":"Event Handling","description":"Listening to Courier System Events","sidebar":"tutorialSidebar"},"Installation":{"id":"Installation","title":"Installation","description":"Courier supports minimum deployment target of iOS 11. Cocoapods is used for dependency management. It is separated into these modules:","sidebar":"tutorialSidebar"},"Introduction":{"id":"Introduction","title":"Introduction","description":"image banner","sidebar":"tutorialSidebar"},"LICENSE":{"id":"LICENSE","title":"LICENSE","description":"MIT License","sidebar":"tutorialSidebar"},"LICENSE.MQTTClientGJ":{"id":"LICENSE.MQTTClientGJ","title":"LICENSE.MQTTClientGJ","description":"Eclipse Public License - v 1.0"},"Message Adapter":{"id":"Message Adapter","title":"Message Adapter","description":"To serialize and deserialize received and published messages, Courier uses MessageAdapter. With this, you don\'t need to handle the serialization and deserialization process when publishing and receiving messages from broker","sidebar":"tutorialSidebar"},"Message QoS":{"id":"Message QoS","title":"Message QoS","description":"The Quality of Service (QoS) level is an agreement between the sender of a message and the receiver of a message that defines the guarantee of delivery for a specific message. There are 3 QoS levels in MQTT:","sidebar":"tutorialSidebar"},"Publish Message":{"id":"Publish Message","title":"Publish Message","description":"To publish message to the broker, first make sure you have provided a MessageAdapter that is able to encode your object to the binary data format. For example, if you have a data struct that you want to send as JSON. Make sure, it conforms to Encodable protocol and pass JSONMessageAdapter in MQTTClientConfig when creating the CourierClient instance.","sidebar":"tutorialSidebar"},"Sample App":{"id":"Sample App","title":"Sample App","description":"To understand the connection flow and behaviors of the library, you can play around, debug, and run the sample SwiftUI App that you can customize to connect to any broker that you want.","sidebar":"tutorialSidebar"},"Setup Connection":{"id":"Setup Connection","title":"Setup Connection","description":"Providing Connect Options","sidebar":"tutorialSidebar"},"Subscribe & Receive Message":{"id":"Subscribe & Receive Message","title":"Subscribe & Receive Message","description":"After we have connected to broker, we can subscribe to any topic that we want and receive emitted message from that particular topic when the broker pushes the message.","sidebar":"tutorialSidebar"}}}')}}]);