"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80749],{900190:(e,t,r)=>{r.r(t),r.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-98143184","path":"/advanced/zigbee/02_improve_network_range_and_stability.html","title":"Improve network range and stability","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Adapter","slug":"adapter","link":"#adapter","children":[]},{"level":2,"title":"USB based adapter","slug":"usb-based-adapter","link":"#usb-based-adapter","children":[{"level":3,"title":"Try different orientations of the adapter","slug":"try-different-orientations-of-the-adapter","link":"#try-different-orientations-of-the-adapter","children":[]}]},{"level":2,"title":"Reduce Wi-Fi interference by changing the Zigbee channel","slug":"reduce-wi-fi-interference-by-changing-the-zigbee-channel","link":"#reduce-wi-fi-interference-by-changing-the-zigbee-channel","children":[]},{"level":2,"title":"Interference from other 2.4 GHz devices","slug":"interference-from-other-2-4-ghz-devices","link":"#interference-from-other-2-4-ghz-devices","children":[]},{"level":2,"title":"Adding routers to your network","slug":"adding-routers-to-your-network","link":"#adding-routers-to-your-network","children":[]},{"level":2,"title":"Hardware","slug":"hardware","link":"#hardware","children":[]}],"git":{"updatedTime":1678215945000},"filePathRelative":"advanced/zigbee/02_improve_network_range_and_stability.md"}')},575615:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var i=r(166252);const n=(0,i._)("h1",{id:"improve-network-range-and-stability",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#improve-network-range-and-stability","aria-hidden":"true"},"#"),(0,i.Uk)(" Improve network range and stability")],-1),a=(0,i._)("p",null,"In case you are experiencing an unstable or bad network range you can do the following things to improve your network.",-1),o=(0,i._)("h2",{id:"adapter",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#adapter","aria-hidden":"true"},"#"),(0,i.Uk)(" Adapter")],-1),s=(0,i._)("h2",{id:"usb-based-adapter",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#usb-based-adapter","aria-hidden":"true"},"#"),(0,i.Uk)(" USB based adapter")],-1),l=(0,i._)("p",null,"The range of these adapters can greatly be improved when connecting them with an USB extension cable instead of directly plugging it into the computer (e.g. Raspberry Pi). When plugged directly into the computer, the antenna suffers from interference of radio signals and electrical components of the computer. Also be sure not to position the adapter too close to any other radio transmitting devices (e.g. a Wi-Fi router) or an SSD.",-1),d=(0,i._)("strong",null,"USB extension cable",-1),h={href:"https://www.reddit.com/r/homeassistant/comments/10ebkis/psareminder_about_zigbee_interference/?utm_source=share&utm_medium=ios_app&utm_name=iossmf",target:"_blank",rel:"noopener noreferrer"},g=(0,i._)("strong",null,"Do not underestimate this!",-1),c={href:"https://www.unit3compliance.co.uk/2-4ghz-intra-system-or-self-platform-interference-demonstration/",target:"_blank",rel:"noopener noreferrer"},u=(0,i.uE)('<p>Aditionally, it may help to plug the adapter to a USB 2 instead of USB 3 port.</p><h3 id="try-different-orientations-of-the-adapter" tabindex="-1"><a class="header-anchor" href="#try-different-orientations-of-the-adapter" aria-hidden="true">#</a> Try different orientations of the adapter</h3><p>RF connection between the adapter and other devices also depends on the way it is oriented in space. You might be having very poor <code>linkquality</code> reports and intermittent ping failures but once the adapter is rotated a little it all can change greatly without re-locating the coordinator far away. Try to experiment with positioning and orienting the adapter in space while monitoring the <code>linkquality</code> values reported. You might find it useful to buy a small rotating USB connector like this:</p><p><img src="https://i.imgur.com/AI41Oxz.png" alt="rotating USB connector"></p><h2 id="reduce-wi-fi-interference-by-changing-the-zigbee-channel" tabindex="-1"><a class="header-anchor" href="#reduce-wi-fi-interference-by-changing-the-zigbee-channel" aria-hidden="true">#</a> Reduce Wi-Fi interference by changing the Zigbee channel</h2><p><strong>Changing the Zigbee channel requires repairing of all your devices!</strong></p>',6),p={href:"https://www.metageek.com/training/resources/zigbee-wifi-coexistence.html",target:"_blank",rel:"noopener noreferrer"},m=(0,i._)("code",null,"channel",-1),f=(0,i._)("code",null,"configuration.yaml",-1),b=(0,i._)("h2",{id:"interference-from-other-2-4-ghz-devices",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#interference-from-other-2-4-ghz-devices","aria-hidden":"true"},"#"),(0,i.Uk)(" Interference from other 2.4 GHz devices")],-1),k=(0,i._)("p",null,"Any device using the open 2.4 GHz spectrum could interfere with Zigbee such as Bluetooth or gaming devices like Logitech “Unifying” or “Lightspeed” or Razer “Hyperspeed Wireless”.",-1),w=(0,i._)("h2",{id:"adding-routers-to-your-network",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#adding-routers-to-your-network","aria-hidden":"true"},"#"),(0,i.Uk)(" Adding routers to your network")],-1),_={href:"https://en.wikipedia.org/wiki/Zigbee",target:"_blank",rel:"noopener noreferrer"},y=(0,i._)("p",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/routing1.jpg",alt:"The signal could be too weak for the message to reach its target."})],-1),v={href:"https://www.zigbee2mqtt.io/guide/configuration/adapter-settings.html",target:"_blank",rel:"noopener noreferrer"},U=(0,i._)("p",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/routing2.jpg",alt:"More transmission power on the sender side might not be sufficient for a complete message roundtrip."})],-1),z=(0,i._)("p",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/routing3.jpg",alt:"Routers can stabilize the complete message roundtrip."})],-1),x={href:"https://www.zigbee2mqtt.io/devices/ZBDongle-E.html",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://www.zigbee2mqtt.io/devices/8719514301481.html#philips-8719514301481",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.zigbee2mqtt.io/devices/S26R2ZB.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/Koenkk/zigbee2mqtt/issues/10282",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.zigbee2mqtt.io/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request",target:"_blank",rel:"noopener noreferrer"},S=(0,i._)("code",null,"zigbee2mqtt/bridge/request/networkmap",-1),A={href:"https://software-dl.ti.com/simplelink/esd/plugins/simplelink_zigbee_sdk_plugin/1.60.01.09/exports/docs/zigbee_user_guide/html/zigbee/developing_zigbee_applications/z_stack_developers_guide/z-stack-overview.html#routing",target:"_blank",rel:"noopener noreferrer"},B=(0,i._)("h2",{id:"hardware",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#hardware","aria-hidden":"true"},"#"),(0,i.Uk)(" Hardware")],-1),F=(0,i._)("p",null,"Although Zigbee2MQTT does not require many resources, the hardware you are running Zigbee2MQTT on can impact the performance. This is especially true when using low-power hardware like the Raspbery Pi 3. Make sure that enough resources (CPU/memory) is free. For example, running Home Assistant + Zigbee2MQTT Home Assistant addon on the Raspberry Pi 3 may give bad performance.",-1),R={},C=(0,r(983744).Z)(R,[["render",function(e,t){const r=(0,i.up)("RouterLink"),R=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[n,a,o,(0,i._)("p",null,[(0,i.Uk)("Use a "),(0,i.Wm)(r,{to:"/guide/adapters/"},{default:(0,i.w5)((()=>[(0,i.Uk)("recommended")])),_:1}),(0,i.Uk)(" adapter, especially the CC2530 and CC2531 are known to perform poorly.")]),s,l,(0,i._)("p",null,[(0,i.Uk)("A "),d,(0,i.Uk)(" of 50 cm is already enough to reduce the interference. Preferably get one with shielding as this may give better results ("),(0,i._)("a",h,[(0,i.Uk)("source"),(0,i.Wm)(R)]),(0,i.Uk)(").")]),(0,i._)("p",null,[g,(0,i.Uk)(" Placing your adapter close to an USB port can kill the radio signal entirely as demonstrated in "),(0,i._)("a",c,[(0,i.Uk)("this article"),(0,i.Wm)(R)]),(0,i.Uk)(".")]),u,(0,i._)("p",null,[(0,i.Uk)("As Wi-Fi and Zigbee both operate on the same frequency space (2.4 GHz), they can interfere with each other. By using the correct Zigbee channel, interference with Wi-Fi can (partly) be avoided. A good article explaining this is "),(0,i._)("a",p,[(0,i.Uk)("Zigbee and Wi-Fi Coexistence"),(0,i.Wm)(R)]),(0,i.Uk)(".")]),(0,i._)("p",null,[(0,i.Uk)("To change the Zigbee channel Zigbee2MQTT uses you have to set the "),(0,i.Wm)(r,{to:"/guide/configuration/zigbee-network.html"},{default:(0,i.w5)((()=>[m,(0,i.Uk)(" in "),f])),_:1}),(0,i.Uk)(".")]),b,k,w,(0,i._)("p",null,[(0,i.Uk)('"Zigbee is a low-power wireless mesh network standard targeted at battery-powered devices" (see '),(0,i._)("a",_,[(0,i.Uk)("Wikipedia"),(0,i.Wm)(R)]),(0,i.Uk)("). Yet, low transmission power can be the cause of an unstable or unreliable network:")]),y,(0,i._)("p",null,[(0,i.Uk)("Zigbee2MQTT enables the user to "),(0,i._)("a",v,[(0,i.Uk)("increase the transmission power"),(0,i.Wm)(R)]),(0,i.Uk)(" for some coordinator models. However, this simple measure might yield to a network with weird behavior, if messages to an end device reach their target, but responses (or messages) from that end device do not reliably reach the coordinator:")]),U,(0,i._)("p",null,[(0,i.Uk)("Introducing a router ("),(0,i.Wm)(r,{to:"/advanced/zigbee/01_zigbee_network.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("read more about this")])),_:1}),(0,i.Uk)(") can improve the forward path as well as the return path:")]),z,(0,i._)("p",null,[(0,i.Uk)("You might choose a dedicated router (for example, a "),(0,i._)("a",x,[(0,i.Uk)("SONOFF ZBDongle-E based router"),(0,i.Wm)(R)]),(0,i.Uk)(") or a mains-powered Zigbee device (for example, a "),(0,i._)("a",Z,[(0,i.Uk)("Hue lamp"),(0,i.Wm)(R)]),(0,i.Uk)(") to stabilize your network. Almost all AC powered devices will serve as a router.")]),(0,i._)("p",null,[(0,i.Uk)("Please note that there are routers of mediocre quality that might not harmonize well with your network (for example, some versions of the "),(0,i._)("a",W,[(0,i.Uk)("SONOFF Smart Plug S26R2ZB"),(0,i.Wm)(R)]),(0,i.Uk)(" are "),(0,i._)("a",q,[(0,i.Uk)("known to be limited"),(0,i.Wm)(R)]),(0,i.Uk)("). This may yield in message routing errors. In case you have such devices in your network, it might help to add additional routers of better quality and bind your devices to these routers (re-pairing devices with “Permit join” restricted to the new/better router) to improve the overall network performance.")]),(0,i._)("p",null,[(0,i.Uk)("If you assume to have routing problems, try "),(0,i._)("a",T,[(0,i.Uk)("sending an MQTT request to the bridge"),(0,i.Wm)(R)]),(0,i.Uk)(" to the topic "),S,(0,i.Uk)(" to retrieve a map of your Zigbee network including routes.")]),(0,i._)("p",null,[(0,i.Uk)("For more technical details on Zigbee routing, see the "),(0,i._)("a",A,[(0,i.Uk)('"5. Routing" in the TI Z-Stack User Guide'),(0,i.Wm)(R)]),(0,i.Uk)(", for example.")]),B,F])}]])}}]);