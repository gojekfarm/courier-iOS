"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[885],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(6540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(t),g=i,m=l["".concat(c,".").concat(g)]||l[g]||b[g]||o;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=g;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[l]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7490:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=t(8168),i=(t(6540),t(5680));const o={},s=void 0,a={unversionedId:"Subscribe & Receive Message",id:"Subscribe & Receive Message",title:"Subscribe & Receive Message",description:"After we have connected to broker, we can subscribe to any topic that we want and receive emitted message from that particular topic when the broker pushes the message.",source:"@site/docs/Subscribe & Receive Message.md",sourceDirName:".",slug:"/Subscribe & Receive Message",permalink:"/courier-iOS/docs/Subscribe & Receive Message",draft:!1,editUrl:"https://github.com/gojek/courier-iOS/edit/main/docs/docs/Subscribe & Receive Message.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Message QoS",permalink:"/courier-iOS/docs/Message QoS"},next:{title:"Publish Message",permalink:"/courier-iOS/docs/Publish Message"}},c={},u=[{value:"Subscribe to topics from Broker",id:"subscribe-to-topics-from-broker",level:3},{value:"Receive Message from Subscribed Topic",id:"receive-message-from-subscribed-topic",level:3},{value:"Unsubscribe from topics",id:"unsubscribe-from-topics",level:3}],p={toc:u},l="wrapper";function b(e){let{components:r,...t}=e;return(0,i.yg)(l,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"After we have connected to broker, we can subscribe to any topic that we want and receive emitted message from that particular topic when the broker pushes the message."),(0,i.yg)("h3",{id:"subscribe-to-topics-from-broker"},"Subscribe to topics from Broker"),(0,i.yg)("p",null,"To subscribe to a topic from the broker. we can invoke ",(0,i.yg)("inlineCode",{parentName:"p"},"CourierSession/subscribe(_:)")," and pass a tuple containing the topic string and QoS enum."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-swift"},'courierClient.subscribe(("chat/user1", QoS.zero))\n')),(0,i.yg)("p",null,"You can also subscribe to multiple topics, invoking ",(0,i.yg)("inlineCode",{parentName:"p"},"CourierSession/subscribe(_:)")," and pass an array containing tuples of topic string and QoS enum"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-swift"},'courierClient.subscribe([\n    ("chat/user1", QoS.zero),\n    ("order/1234", QoS.one),\n    ("order/123456", QoS.two),\n])\n')),(0,i.yg)("h3",{id:"receive-message-from-subscribed-topic"},"Receive Message from Subscribed Topic"),(0,i.yg)("p",null,"After you have subscribed to the topic, you need to subscribe to a message publisher passing the associated topic using ",(0,i.yg)("inlineCode",{parentName:"p"},"CourierSession/messagePublisher(topic:)"),". This method uses ",(0,i.yg)("inlineCode",{parentName:"p"},"Generic")," for serializing the binary data to a type. Make sure you have provided the associated MessageAdapter that can decode the data to the type. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-swift"},'courierClient.messagePublisher(topic: topic)\n    .sink { [weak self] (note: Note) in\n        self?.messages.insert(Message(id: UUID().uuidString, name: "Protobuf: \\(note.title)", timestamp: Date()), at: 0)\n    }.store(in: &cancellables)\n')),(0,i.yg)("p",null,"This method returns AnyPublisher which you can chain with operators such as ",(0,i.yg)("inlineCode",{parentName:"p"},"AnyPublisher/filter(predicate:)")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"AnyPublisher/map(transform:)"),"."),(0,i.yg)("p",null,"The observable API that Courier provide is very similar to Apple Combine although it is implemented internally using RxSwift so we can support iOS 12, only the ",(0,i.yg)("inlineCode",{parentName:"p"},"filter")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"map")," operators are supported."),(0,i.yg)("h3",{id:"unsubscribe-from-topics"},"Unsubscribe from topics"),(0,i.yg)("p",null,"To unsubscribe from a topic. we can invoke ",(0,i.yg)("inlineCode",{parentName:"p"},"CourierSession/unsubscribe(_:)")," and pass a topic string."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-swift"},'courierClient.unsubscribe("chat/user1")\n')),(0,i.yg)("p",null,"You can also subscribe to multiple topics, invoking ",(0,i.yg)("inlineCode",{parentName:"p"},"CourierSession/unsubscribe(_:)")," and pass an array containing tuples of topic string and QoS enum"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-swift"},'courierClient.unsubscribe([\n    "chat/user1",\n    "order/"\n])\n')))}b.isMDXComponent=!0}}]);