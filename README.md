# Plugin for [iodide](https://alpha.iodide.io/) to render UML diagrams with [plantuml](http://plantuml.com)

## Try It
A sample says more than a 1000 words:
https://alpha.iodide.io/notebooks/812/

# Installation
## 1. Add the following to the top of your notebooks
```
%% fetch
js: https://raw.githubusercontent.com/johan/js-deflate/master/rawdeflate.js

%% plugin
{
  "languageId": "plantuml",
  "displayName": "PlantUml",
  "codeMirrorMode": "",
  "keybinding": "x",
  "url": "https://raw.githubusercontent.com/six42/iodide-plantuml-plugin/master/src/iodide-plantuml-plugin.js" ,
  "module": "plantuml",
  "evaluator": "plantuml_img",
  "pluginType": "language"
}
```
## 2. Then use plantuml syntax directly in a notebook
```
%%plantuml
Alice->Bob: Hi!
Bob->Alice: This plugin is great
```

```
%%plantuml
@startmindmap
* Debian
** Ubuntu
*** Linux Mint
*** Kubuntu
*** Lubuntu
*** KDE Neon
** LMDE
** SolydXK
** SteamOS
** Raspbian with a very long name
*** <s>Raspmbc</s> => OSMC
*** <s>Raspyfi</s> => Volumio
@endmindmap
```

