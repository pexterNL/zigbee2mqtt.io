"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2109],{977176:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-7ffd3c3a","path":"/guide/installation/01_linux.html","title":"Linux","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"../configuration/"},"excerpt":"","headers":[{"level":2,"title":"Determine location of the adapter and checking user permissions","slug":"determine-location-of-the-adapter-and-checking-user-permissions","link":"#determine-location-of-the-adapter-and-checking-user-permissions","children":[]},{"level":2,"title":"Installing","slug":"installing","link":"#installing","children":[]},{"level":2,"title":"Configuring","slug":"configuring","link":"#configuring","children":[]},{"level":2,"title":"Starting Zigbee2MQTT","slug":"starting-zigbee2mqtt","link":"#starting-zigbee2mqtt","children":[]},{"level":2,"title":"(Optional) Running as a daemon with systemctl","slug":"optional-running-as-a-daemon-with-systemctl","link":"#optional-running-as-a-daemon-with-systemctl","children":[]},{"level":2,"title":"(For later) Update Zigbee2MQTT to the latest version","slug":"for-later-update-zigbee2mqtt-to-the-latest-version","link":"#for-later-update-zigbee2mqtt-to-the-latest-version","children":[]}],"git":{"updatedTime":1678215945000},"filePathRelative":"guide/installation/01_linux.md"}')},5632:(n,e,s)=>{s.r(e),s.d(e,{default:()=>M});var a=s(166252);const t=(0,a._)("h1",{id:"linux",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),(0,a.Uk)(" Linux")],-1),i=(0,a._)("p",null,"These instructions explain how to run Zigbee2MQTT on Linux.",-1),l=(0,a._)("p",null,"For the sake of simplicity this guide assumes running on a Raspberry Pi 4 with Raspbian Stretch Lite, but it should work on any Linux machine.",-1),o=(0,a._)("p",null,[(0,a.Uk)("Therefore the user "),(0,a._)("code",null,"pi"),(0,a.Uk)(" is used the following examples, but the user may differ between distributions e.g. "),(0,a._)("code",null,"openhabian"),(0,a.Uk)(" should be used on Openhabian.")],-1),r={href:"https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.uE)('<h2 id="determine-location-of-the-adapter-and-checking-user-permissions" tabindex="-1"><a class="header-anchor" href="#determine-location-of-the-adapter-and-checking-user-permissions" aria-hidden="true">#</a> Determine location of the adapter and checking user permissions</h2><p>We first need to determine the location of the adapter. Connect the adapter to your Raspberry Pi. Most of the times the location is <code>/dev/ttyACM0</code>. This can be verified by:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pi@raspberry:~ $ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /dev/ttyACM0\ncrw-rw---- <span class="token number">1</span> root dialout <span class="token number">166</span>, <span class="token number">0</span> May <span class="token number">16</span> <span class="token number">19</span>:15 /dev/ttyACM0  <span class="token comment"># &lt;-- adapter (CC2531 in this case) on /dev/ttyACM0</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Alternately, if you are using an ethernet connected adapter, follow the instructions given for your specific device.</p>',4),d=(0,a._)("strong",null,"recommended",-1),p=(0,a._)("code",null,"/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00",-1),u=(0,a.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pi@raspberry:/ $ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /dev/serial/by-id\ntotal <span class="token number">0</span>\nlrwxrwxrwx. <span class="token number">1</span> root root <span class="token number">13</span> Oct <span class="token number">19</span> <span class="token number">19</span>:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -<span class="token operator">&gt;</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/ttyACM0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Set up Node.js repository and install Node.js + required dependencies</span>\n<span class="token comment"># NOTE 1: Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v16.15.0/ e.g. Version 16.15.0 should work.</span>\n<span class="token comment"># NOTE 2: For Ubuntu see tip below</span>\n<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://deb.nodesource.com/setup_16.x <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token parameter variable">-E</span> <span class="token function">bash</span> -\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nodejs <span class="token function">git</span> <span class="token function">make</span> g++ gcc\n\n<span class="token comment"># Verify that the correct nodejs and npm (automatically installed with nodejs)</span>\n<span class="token comment"># version has been installed</span>\n<span class="token function">node</span> <span class="token parameter variable">--version</span>  <span class="token comment"># Should output v14.X, V16.x, V17.x or V18.X</span>\n<span class="token function">npm</span> <span class="token parameter variable">--version</span>  <span class="token comment"># Should output 6.X, 7.X or 8.X</span>\n\n<span class="token comment"># Create a directory for zigbee2mqtt and set your user as owner of it</span>\n<span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/zigbee2mqtt\n<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token variable">${<span class="token environment constant">USER</span>}</span><span class="token builtin class-name">:</span> /opt/zigbee2mqtt\n\n<span class="token comment"># Clone Zigbee2MQTT repository</span>\n<span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt\n\n<span class="token comment"># Install dependencies (as user &quot;pi&quot;)</span>\n<span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n<span class="token function">npm</span> ci\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If everything went correctly the output of <code>npm ci</code> is similar to (the number of packages and seconds is probably different on your device):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>node-pre-gyp info ok\nadded <span class="token number">383</span> packages <span class="token keyword">in</span> <span class="token number">111</span>.613s\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that the <code>npm ci</code> produces some <code>warning</code> which can be ignored.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>On Ubuntu, Node.js can be installed through Snap</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Install latest nodejs from snap store</span>\n<span class="token comment"># The --classic argument is required here as Node.js needs full access to your system in order to be useful.</span>\n<span class="token comment"># You can also use the --channel=XX argument to install a legacy version where XX is the version you want to install (we need 14+).</span>\n<span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token function">node</span> <span class="token parameter variable">--classic</span>\n\n<span class="token comment"># Verify node has been installed</span>\n<span class="token comment"># If you encounter an error at this stage and used the snap store instructions, adjust the BIN path as follows:</span>\n<span class="token comment">## PATH=$PATH:/snap/node/current/bin</span>\n<span class="token comment"># then re-verify nodejs and npm versions as above</span>\n<span class="token function">node</span> <span class="token parameter variable">--version</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="configuring" tabindex="-1"><a class="header-anchor" href="#configuring" aria-hidden="true">#</a> Configuring</h2><p>Before we can start Zigbee2MQTT we need to edit the <code>configuration.yaml</code> file. This file contains the configuration which will be used by Zigbee2MQTT.</p><p>Open the configuration file:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nano</span> /opt/zigbee2mqtt/data/configuration.yaml\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',11),m=(0,a._)("code",null,"configuration.yaml",-1),b=(0,a.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># MQTT settings</span>\n<span class="token key atrule">mqtt</span><span class="token punctuation">:</span>\n  <span class="token comment"># MQTT base topic for Zigbee2MQTT MQTT messages</span>\n  <span class="token key atrule">base_topic</span><span class="token punctuation">:</span> zigbee2mqtt\n  <span class="token comment"># MQTT server URL</span>\n  <span class="token key atrule">server</span><span class="token punctuation">:</span> <span class="token string">&#39;mqtt://localhost&#39;</span>\n  <span class="token comment"># MQTT server authentication, uncomment if required:</span>\n  <span class="token comment"># user: my_user</span>\n  <span class="token comment"># password: my_password</span>\n\n<span class="token comment"># Serial settings</span>\n<span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token comment"># Location of the adapter (see first step of this guide)</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/ttyACM0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is recommended to use a custom network key. This can be done by adding the following to your <code>configuration.yaml</code>. With this Zigbee2MQTT will generate a network key on next startup.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n    <span class="token key atrule">network_key</span><span class="token punctuation">:</span> GENERATE\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),v=(0,a.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">frontend</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Save the file and exit.</p><h2 id="starting-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#starting-zigbee2mqtt" aria-hidden="true">#</a> Starting Zigbee2MQTT</h2><p>Now that we have setup everything correctly we can start Zigbee2MQTT.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n<span class="token function">npm</span> start\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>When started successfully, you will see something like:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Logging to directory: <span class="token string">&#39;/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01&#39;</span>\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting Zigbee2MQTT version <span class="token number">1.6</span>.0 <span class="token punctuation">(</span>commit <span class="token comment">#720e393)</span>\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting zigbee-herdsman<span class="token punctuation">..</span>.\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: zigbee-herdsman started\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Coordinator firmware version: <span class="token string">&#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;</span>\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Currently <span class="token number">0</span> devices are joined:\nZigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: <span class="token variable"><span class="token variable">`</span>permit_join<span class="token variable">`</span></span> <span class="token builtin class-name">set</span> to  <span class="token variable"><span class="token variable">`</span><span class="token boolean">true</span><span class="token variable">`</span></span> <span class="token keyword">in</span> configuration.yaml.\nZigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: Allowing new devices to join.\nZigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: Set <span class="token variable"><span class="token variable">`</span>permit_join<span class="token variable">`</span></span> to <span class="token variable"><span class="token variable">`</span><span class="token boolean">false</span><span class="token variable">`</span></span> once you joined all devices.\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Zigbee: allowing new devices to join.\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Connecting to MQTT server at mqtt://localhost\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Connected to MQTT server\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zigbee2MQTT can be stopped by pressing <code>CTRL + C</code>.</p><h2 id="optional-running-as-a-daemon-with-systemctl" tabindex="-1"><a class="header-anchor" href="#optional-running-as-a-daemon-with-systemctl" aria-hidden="true">#</a> (Optional) Running as a daemon with systemctl</h2><p>To run Zigbee2MQTT as daemon (in background) and start it automatically on boot we will run Zigbee2MQTT with systemctl.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create a systemctl configuration file for Zigbee2MQTT</span>\n<span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/system/zigbee2mqtt.service\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Add the following to this file:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]\nDescription=zigbee2mqtt\nAfter=network.target\n\n[Service]\nEnvironment=NODE_ENV=production\nExecStart=/usr/bin/npm start\nWorkingDirectory=/opt/zigbee2mqtt\nStandardOutput=inherit\n# Or use StandardOutput=null if you don&#39;t want Zigbee2MQTT messages filling syslog, for more options see systemd.exec(5)\nStandardError=inherit\nRestart=always\nRestartSec=10s\nUser=pi\n\n[Install]\nWantedBy=multi-user.target\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',13),g={href:"https://gist.github.com/Koenkk/11fe6d4845f5275a2a8791d04ea223cb",target:"_blank",rel:"noopener noreferrer"},k=(0,a._)("code",null,"ExecStart=/usr/bin/npm start",-1),h=(0,a._)("code",null,"ExecStart=/usr/local/bin/npm start",-1),f=(0,a._)("p",null,[(0,a.Uk)("If you are using a Raspberry Pi or a system running from a SD card, you will likely want to minimize the amount of log files written to disk. Systemd service with "),(0,a._)("code",null,"StandardOutput=inherit"),(0,a.Uk)(" will result in logging everything twice: once in "),(0,a._)("code",null,"journalctl"),(0,a.Uk)(" through the systemd unit and once from Zigbee2MQTT default logging to files under "),(0,a._)("code",null,"data/log"),(0,a.Uk)(". You will likely want to keep only one of them:")],-1),y=(0,a._)("p",null,[(0,a.Uk)("Keep only the logs under "),(0,a._)("code",null,"data/log"),(0,a.Uk)(" --\x3e use "),(0,a._)("code",null,"StandardOutput=null"),(0,a.Uk)(" in the systemd unit. "),(0,a._)("strong",null,"or")],-1),T=(0,a._)("code",null,"journalctl",-1),w={href:"https://www.zigbee2mqtt.io/guide/configuration/logging.html",target:"_blank",rel:"noopener noreferrer"},q=(0,a._)("code",null,"advanced.log_output = ['console']",-1),_=(0,a.uE)('<blockquote><p>If you want to use another directory to place all Zigbee2MQTT data, add <code>Environment=ZIGBEE2MQTT_DATA=/path/to/data</code> below <code>[Service]</code></p></blockquote><p>Save the file and exit.</p><p>Verify that the configuration works:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Start Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl start zigbee2mqtt\n\n<span class="token comment"># Show status</span>\nsystemctl status zigbee2mqtt.service\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output should look like:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pi@raspberry:/opt/zigbee2mqtt $ systemctl status zigbee2mqtt.service\n● zigbee2mqtt.service - zigbee2mqtt\n   Loaded: loaded <span class="token punctuation">(</span>/etc/systemd/system/zigbee2mqtt.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>\n   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Thu <span class="token number">2018</span>-06-07 <span class="token number">20</span>:27:22 BST<span class="token punctuation">;</span> 3s ago\n Main PID: <span class="token number">665</span> <span class="token punctuation">(</span>npm<span class="token punctuation">)</span>\n   CGroup: /system.slice/zigbee2mqtt.service\n           ├─665 <span class="token function">npm</span>\n           ├─678 <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token function">node</span> index.js\n           └─679 <span class="token function">node</span> index.js\n\nJun 07 <span class="token number">20</span>:27:22 raspberry systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started zigbee2mqtt.\nJun 07 <span class="token number">20</span>:27:23 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: <span class="token operator">&gt;</span> zigbee2mqtt@1.6.0 start /opt/zigbee2mqtt\nJun 07 <span class="token number">20</span>:27:23 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: <span class="token operator">&gt;</span> <span class="token function">node</span> index.js\nJun 07 <span class="token number">20</span>:27:24 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Logging to directory: <span class="token string">&#39;/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01&#39;</span>\nJun 07 <span class="token number">20</span>:27:25 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting Zigbee2MQTT version <span class="token number">1.6</span>.0 <span class="token punctuation">(</span>commit <span class="token comment">#720e393)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now that everything works, we want systemctl to start Zigbee2MQTT automatically on boot, this can be done by executing:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> zigbee2mqtt.service\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Done! 😃</p><p>Some tips that can be handy later:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Stopping Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl stop zigbee2mqtt\n\n<span class="token comment"># Starting Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl start zigbee2mqtt\n\n<span class="token comment"># View the log of Zigbee2MQTT</span>\n<span class="token function">sudo</span> journalctl <span class="token parameter variable">-u</span> zigbee2mqtt.service <span class="token parameter variable">-f</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-later-update-zigbee2mqtt-to-the-latest-version" tabindex="-1"><a class="header-anchor" href="#for-later-update-zigbee2mqtt-to-the-latest-version" aria-hidden="true">#</a> (For later) Update Zigbee2MQTT to the latest version</h2><p>To update Zigbee2MQTT to the latest version, execute:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Stop Zigbee2MQTT and go to directory</span>\n<span class="token function">sudo</span> systemctl stop zigbee2mqtt\n<span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n\n<span class="token comment"># Backup configuration</span>\n<span class="token function">cp</span> <span class="token parameter variable">-R</span> data data-backup\n\n<span class="token comment"># Update</span>\n<span class="token function">git</span> pull\n<span class="token function">npm</span> ci\n\n<span class="token comment"># Restore configuration</span>\n<span class="token function">cp</span> <span class="token parameter variable">-R</span> data-backup/* data\n<span class="token function">rm</span> <span class="token parameter variable">-rf</span> data-backup\n\n<span class="token comment"># Start Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl start zigbee2mqtt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',14),x={},M=(0,s(983744).Z)(x,[["render",function(n,e){const s=(0,a.up)("ExternalLinkIcon"),x=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[t,i,l,o,(0,a._)("p",null,[(0,a.Uk)("Before starting make sure you have an MQTT broker installed on your system. There are many tutorials available on how to do this, "),(0,a._)("a",r,[(0,a.Uk)("example"),(0,a.Wm)(s)]),(0,a.Uk)(". Mosquitto is the recommended MQTT broker but others should also work fine.")]),c,(0,a._)("p",null,[(0,a.Uk)("However, it is "),d,(0,a.Uk)(' to use "by ID" mapping of the device (see '),(0,a.Wm)(x,{to:"/guide/configuration/adapter-settings.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Adapter settings")])),_:1}),(0,a.Uk)("). This kind of device path mapping is more stable, but can also be handy if you have multiple serial devices connected to your Raspberry Pi. In the example below the device location is: "),p]),u,(0,a._)("p",null,[(0,a.Uk)("For a basic configuration, the default settings are probably good. The only thing we need to change is the MQTT server url/authentication and the serial port (in some cases, your adapter might need additional configuration parameters, see "),(0,a.Wm)(x,{to:"/guide/adapters/"},{default:(0,a.w5)((()=>[(0,a.Uk)("supported Adapters")])),_:1}),(0,a.Uk)("). This can be done by changing the section below in your "),m,(0,a.Uk)(".")]),b,(0,a._)("p",null,[(0,a.Uk)("To enable the frontend add the following (see the "),(0,a.Wm)(x,{to:"/guide/configuration/frontend.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Frontend")])),_:1}),(0,a.Uk)(" page for more settings):")]),v,(0,a._)("blockquote",null,[(0,a._)("p",null,[(0,a.Uk)("If you are using a Raspberry Pi 1 or Zero AND if you followed this "),(0,a._)("a",g,[(0,a.Uk)("guide"),(0,a.Wm)(s)]),(0,a.Uk)(", replace "),k,(0,a.Uk)(" with "),h,(0,a.Uk)(".")])]),(0,a._)("blockquote",null,[f,(0,a._)("blockquote",null,[y,(0,a._)("p",null,[(0,a.Uk)("Keep only the "),T,(0,a.Uk)(" logging --\x3e set "),(0,a._)("a",w,[q,(0,a.Wm)(s)]),(0,a.Uk)(" in Zigbee2MQTT configuration.")])])]),_])}]])}}]);