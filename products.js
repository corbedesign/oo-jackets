/* CATÁLOGO H2'26 — fonte única dos produtos do site. Edite aqui nome (n), preço (p), tags e cores.
   Campos do item:  c = código · n = nome · p = preço ("229,90") · f = modelagem · novo:1 · lim:1 (edição limitada)
                    ex = "Morumbi" | "Morumbi + Dom Pedro" (só em loja) · exc = cor exclusiva · cores = [{k:código da cor, n:nome}]
   Fotos: img/<pasta do grupo>/<CÓDIGO>.avif (+ .webp). Cor específica: <CÓDIGO>_<CÓDIGO DA COR>.avif. Veja o LEIA-ME.md */
const CATALOGO=[
{"id":"capsulas","nome":"Cápsulas","desc":"Cinco ideias, cada uma com seu mundo.","cor":"#b45cff","grupos":[
 {"grupo":{"id": "cyberflora", "nome": "Cyberflora", "dir": "capsulas/cyberflora", "desc": "Natureza e tecnologia no mesmo corpo. Espécies que ainda não existem, estampadas em gráficos biônicos.", "big": 1, "soon": 0, "cor": "#b45cff"},"itens":[
  {"c":"FOA408019","n":"Cyberflora Ellipse Glass SS Tee","p":"179,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"},{"k":"64T","n":"Mediterranean"}]},
  {"c":"FOA408021","n":"Cyberflora Bloomin Hand SS Tee","p":"199,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"68S","n":"Mist"}]},
  {"c":"FOA408020","n":"Cyberflora Metal Blossom SS Tee","p":"229,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"68S","n":"Mist"}]},
  {"c":"FOA408074","n":"Cyberflora Blossom II SS Tee","p":"229,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408590","n":"Hologram Frog SS Tee","p":"179,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"},{"k":"314","n":"Cement"}]},
  {"c":"FOA408585","n":"Cyber Dome SS Tee","p":"299,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"33U","n":"Cocoa Brown"}]},
  {"c":"FOA408583","n":"Cyberblossom SS Tee","p":"299,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"},{"k":"64T","n":"Mediterranean"}]}
 ]},
 {"grupo":{"id": "photochromic", "nome": "Photochromic", "dir": "capsulas/photochromic", "desc": "O calor revela a arte. Elipses e caveiras escondidas no cabedal aparecem com o uso. Vem com caixa exclusiva.", "big": 1, "soon": 0, "cor": "#ff6a2b"},"itens":[
  {"c":"FOF100770","n":"Crossfire Photochromic","p":"799,90","lim":1}
 ]},
 {"grupo":{"id": "biolumia", "nome": "Biolumia", "dir": "capsulas/biolumia", "desc": "Só exploramos 3% dos oceanos. O resto brilha no escuro: a tinta é glow-in-the-dark.", "big": 1, "soon": 0, "cor": "#27d3ff"},"itens":[
  {"c":"FOA407993","n":"Biolumia Creature SS Tee","p":"149,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"},{"k":"74W","n":"Faded Green"}]},
  {"c":"FOA408592","n":"Jellyfish Bubbles SS Tee","p":"149,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"},{"k":"6GA","n":"Abyss"}]},
  {"c":"FOA408593","n":"Biolumia Frog SS Tee","p":"149,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"}]},
  {"c":"FOA407991","n":"Biolumia Jellyfish SS Tee","p":"169,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"},{"k":"24A","n":"Lead"},{"k":"74W","n":"Faded Green"}]},
  {"c":"FOA407992","n":"Biolumia Octopus SS Tee","p":"199,90","f":"Boxy","cores":[{"k":"02E","n":"Blackout"},{"k":"68S","n":"Mist"}]},
  {"c":"FOA408091","n":"Jupiter's Adventure SS Tee","p":"249,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"64T","n":"Mediterranean"},{"k":"68S","n":"Mist"}]},
  {"c":"FOA408586","n":"Mad Octopus SS Tee","p":"279,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"},{"k":"24A","n":"Lead"}]},
  {"c":"FOA409126","n":"B1B Block Trunkshorts III 16\"","p":"299,90","cores":[{"k":"31R","n":"Humus"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408000","n":"Biolumia Color Boardshorts 18\"","p":"399,90","cores":[{"k":"022","n":"Black/White"}]}
 ]},
 {"grupo":{"id": "urbanverse", "nome": "Urbanverse", "dir": "capsulas/urbanverse", "desc": "50 anos de linhas fluidas em modo streetwear. Painéis curvos, silhueta oversized, a cidade como referência.", "big": 1, "soon": 0, "cor": "#9db2c9"},"itens":[
  {"c":"FOA408577","n":"Urbanverse Planet SS Tee","p":"179,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"200","n":"Dark Grey"},{"k":"100","n":"White"}]},
  {"c":"FOA408578","n":"Urbanverse 3D Building SS Tee","p":"179,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"200","n":"Dark Grey"},{"k":"100","n":"White"}]},
  {"c":"FOA408576","n":"Urbanverse City Dive SS Tee","p":"229,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"200","n":"Dark Grey"}]},
  {"c":"FOA408023","n":"Urbanverse Ellipse Edge SS Tee","p":"249,90","f":"Oversized","cores":[{"k":"26C","n":"Lunar Rock"}]},
  {"c":"FOA408589","n":"Urbanverse Patch SS Tee","p":"249,90","f":"Oversized","cores":[{"k":"02E","n":"Blackout"},{"k":"24A","n":"Lead"}]},
  {"c":"FOA408022","n":"Urbanverse Edge SS Tee","p":"349,90","f":"Boxy","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408058","n":"Urbanverse Edge Pants","p":"1.299,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408068","n":"Urbanverse Edge Jacket","p":"1.699,90","f":"Confort","cores":[{"k":"02E","n":"Blackout"}]}
 ]},
 {"grupo":{"id": "grungecore", "nome": "Grungecore", "dir": "capsulas/grungecore", "desc": "Black wash, desgaste de propósito, metal no peito. A rua como acabamento.", "big": 1, "soon": 1, "cor": "#a8a8a8"},"itens":[
  {"c":"FOA408018","n":"Grungecore Metal Pin SS Tee","p":"349,90","f":"Oversized","cores":[{"k":"905","n":"Black Wash"}]},
  {"c":"FOA408052","n":"Grungecore Zip Hoodie","p":"899,90","f":"Oversized","cores":[{"k":"905","n":"Black Wash"}]},
  {"c":"FOA408537","n":"Grungecore Shorts","p":"899,90","cores":[{"k":"905","n":"Black Wash"}]}
 ]}
]},
{"id":"training","nome":"Training","desc":"Feito pra suar. Tecidos que respiram, cortes que não atrapalham.","cor":"#d8ff3d","grupos":[
 {"grupo":{"id": "training-regatas", "nome": "Regatas", "dir": "training/regatas", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOA403204","n":"Daily Sport Tank III","p":"119,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407539","n":"TRN Wave Tank","p":"149,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407996","n":"TRN Dynamic Mesh Tank","p":"169,90","cores":[{"k":"02E","n":"Blackout"}]}
 ]},
 {"grupo":{"id": "training-camisetas", "nome": "Camisetas", "dir": "training/camisetas", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOA403208","n":"Daily Sport Tee III","p":"129,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA403209","n":"Daily Sport LS 3.0 Tee","p":"139,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA406185","n":"TRN Logo SS Tee III","p":"149,90","cores":[{"k":"22Y","n":"Stone Grey"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408579","n":"TRN Ellipse Blur SS Tee","p":"149,90","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"6EK","n":"Stone Wash Blue"}]},
  {"c":"FOA407987","n":"TRN Dynamic Mesh SS Tee","p":"199,90","cores":[{"k":"02E","n":"Blackout"}]}
 ]},
 {"grupo":{"id": "training-shorts", "nome": "Shorts", "dir": "training/shorts", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOA402724","n":"Sports Knit Shorts","p":"179,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407997","n":"TRN Dynamic Mesh Shorts 19\"","p":"229,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407998","n":"TRN Curve Tech Shorts 18\"","p":"249,90","novo":1,"cores":[{"k":"200","n":"Dark Grey"},{"k":"02E","n":"Blackout"}]}
 ]},
 {"grupo":{"id": "training-blade", "nome": "Linha Blade", "dir": "training/blade", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOA408571","n":"Blade Sun Protect SS Tee","p":"299,90","novo":1,"cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408572","n":"Blade Pro Boardshorts 18\"","p":"599,90","novo":1,"cores":[{"k":"6GA","n":"Abyss"},{"k":"02E","n":"Blackout"}]}
 ]}
]},
{"id":"apparel","nome":"Apparel","desc":"O dia a dia com cara de Oakley.","cor":"#ff4d4d","grupos":[
 {"grupo":{"id": "apparel-camisetas", "nome": "Camisetas", "dir": "apparel/camisetas", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"457290BR","n":"Mark II SS Tee","p":"129,90","f":"Regular","cores":[{"k":"203","n":"Heather Grey"},{"k":"100","n":"White"},{"k":"02E","n":"Blackout"}]},
  {"c":"457289BR","n":"O-Bark SS Tee","p":"129,90","f":"Regular","cores":[{"k":"100","n":"White"}]},
  {"c":"457292BR","n":"Bark New Tee","p":"129,90","f":"Regular","novo":1,"cores":[{"k":"100","n":"White"},{"k":"24A","n":"Lead"}]},
  {"c":"FOA407857","n":"Patch Tee II","p":"129,90","f":"Regular","novo":1,"cores":[{"k":"4CW","n":"Rosewood"},{"k":"74O","n":"Aviator Green"},{"k":"314","n":"Cement"},{"k":"100","n":"White"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408597","n":"O-Spider Web SS Tee","p":"129,90","f":"Regular","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"}]},
  {"c":"FOA408081","n":"Bunker Sketch SS Tee","p":"129,90","f":"Regular","novo":1,"cores":[{"k":"68S","n":"Mist"},{"k":"02E","n":"Blackout"}]},
  {"c":"457291BR","n":"O-Ellipse SS Tee","p":"139,90","f":"Regular","cores":[{"k":"100","n":"White"},{"k":"02E","n":"Blackout"}]},
  {"c":"457293BR","n":"Mark II LS Tee","p":"149,90","f":"Regular","cores":[{"k":"100","n":"White"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408596","n":"O-Oakley B1B Thunder SS Tee","p":"149,90","f":"Regular","novo":1,"cores":[{"k":"100","n":"White"},{"k":"02E","n":"Blackout"},{"k":"74O","n":"Aviator Green"}]},
  {"c":"FOA408007","n":"B1B Classics SS Tee II","p":"149,90","f":"Regular","cores":[{"k":"74O","n":"Aviator Green"},{"k":"1A1","n":"Off White"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408591","n":"Ellipse Gradient SS Tee","p":"149,90","f":"Regular","novo":1,"cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408594","n":"B1B Trim SS Tee","p":"149,90","f":"Regular","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"}]},
  {"c":"FOA406039","n":"Heritage Skull Tee","p":"149,90","f":"Regular","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"},{"k":"314","n":"Cement"},{"k":"24A","n":"Lead"}]},
  {"c":"FOA407221","n":"Ellipse Magma SS Tee","p":"169,90","f":"Oversized","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"68S","n":"Mist"},{"k":"24A","n":"Lead"}]},
  {"c":"FOA408599","n":"O-Galaxy SS Tee","p":"179,90","f":"Oversized","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"6GA","n":"Abyss"}]},
  {"c":"FOA408598","n":"Bunker Tech SS Tee","p":"179,90","f":"Oversized","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"68S","n":"Mist"}]},
  {"c":"FOA407226","n":"Stretch Ellipse Logo SS Tee","p":"199,90","f":"Oversized","novo":1,"cores":[{"k":"314","n":"Cement"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407552","n":"Thermonuclear Logo SS Tee","p":"229,90","f":"Oversized","novo":1,"cores":[{"k":"0K1","n":"Jet Black"},{"k":"26C","n":"Lunar Rock"},{"k":"596","n":"Straw"},{"k":"200","n":"Dark Grey"}]},
  {"c":"FOA407508","n":"Heritage Ellipse Metal SS Tee","p":"249,90","f":"Oversized","ex":"Morumbi","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407219","n":"Big Skull SS Tee","p":"249,90","f":"Oversized","novo":1,"cores":[{"k":"596","n":"Straw"},{"k":"02E","n":"Blackout"},{"k":"100","n":"White"}]},
  {"c":"FOA407220","n":"Ellipse Sharp Metal Tee","p":"279,90","f":"Oversized","novo":1,"cores":[{"k":"68S","n":"Mist"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408587","n":"O-Sun SS Tee","p":"279,90","f":"Oversized","novo":1,"cores":[{"k":"33U","n":"Cocoa Brown"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407239","n":"Patch Tee Three Pack Combo","p":"299,90","f":"Regular","cores":[{"k":"100","n":"White"},{"k":"02E","n":"Blackout"},{"k":"999","n":"Miscellaneous"}]}
 ]},
 {"grupo":{"id": "apparel-polos", "nome": "Polos", "dir": "apparel/polos", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"434268BR","n":"Patch Polo Piquet Heroes 215g","p":"299,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"}]},
  {"c":"FOA407495","n":"Sport Zip SS Polo","p":"449,90","f":"Confort","novo":1,"cores":[{"k":"02E","n":"Blackout"}]}
 ]},
 {"grupo":{"id": "apparel-regatas", "nome": "Regatas", "dir": "apparel/regatas", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"457297BR","n":"Patch Tank","p":"119,90","f":"Regular","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"},{"k":"4CW","n":"Rosewood"},{"k":"203","n":"Heather Grey"}]},
  {"c":"457296BR","n":"Mark II Tank","p":"119,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"}]},
  {"c":"457295BR","n":"Bark Tank","p":"119,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"}]},
  {"c":"FOA408600","n":"B1B Thunder Tank","p":"149,90","f":"Regular","novo":1,"cores":[{"k":"02E","n":"Blackout"}]}
 ]},
 {"grupo":{"id": "apparel-moletons", "nome": "Moletons, corta-ventos e jaquetas", "dir": "apparel/moletons-jaquetas", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOA405580","n":"Bark Crew","p":"329,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407293","n":"Essential Windbreaker Polyester","p":"329,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"472430BR","n":"Patch 2.0 Hoodie","p":"399,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"},{"k":"200","n":"Dark Grey"}]},
  {"c":"FOA403315","n":"Patch F/Z Hoodie","p":"449,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"472428BR","n":"B1B PO Hoodie","p":"449,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407290","n":"Windbreaker II Polyester","p":"449,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407202","n":"Double Ellipse Hoodie","p":"499,90","f":"Confort","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407827","n":"Big O 3D Logo Hoodie","p":"499,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407199","n":"Sports Windbreaker","p":"599,90","f":"Regular","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA409330","n":"Future Tech Jacket","p":"799,90","f":"Regular","cores":[{"k":"200","n":"Dark Grey"}]}
 ]},
 {"grupo":{"id": "apparel-calcas", "nome": "Calças", "dir": "apparel/calcas", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOA407181","n":"Cargo Zip Pants Ripstop","p":"399,90","cores":[{"k":"20G","n":"Shadow"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407183","n":"Outdoor Pants Tricoline Cannes","p":"449,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA405985","n":"Hybrid Cargo 365 Pant","p":"449,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408055","n":"Loose Cargo Pants Cotton Touch","p":"499,90","cores":[{"k":"02E","n":"Blackout"},{"k":"32F","n":"Pebble"}]}
 ]},
 {"grupo":{"id": "apparel-shorts", "nome": "Shorts", "dir": "apparel/shorts", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOA408353","n":"Trunk Heather Shorts 18\"","p":"249,90","cores":[{"k":"609","n":"Dark Blue"},{"k":"68S","n":"Mist"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407554","n":"Basic Ellipse Logo Walkshorts 16\"","p":"329,90","novo":1,"cores":[{"k":"68S","n":"Mist"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407188","n":"Essential Walkshorts 16\"","p":"329,90","cores":[{"k":"68S","n":"Mist"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA405561","n":"Hybrid Shorts II 18\" Polyester","p":"349,90","cores":[{"k":"02E","n":"Blackout"},{"k":"68S","n":"Mist"}]},
  {"c":"FOA407186","n":"Cargo Zip Shorts 21\"","p":"349,90","novo":1,"cores":[{"k":"32F","n":"Pebble"},{"k":"314","n":"Cement"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408048","n":"Outdoor Washed Shorts 18\"","p":"349,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOA407999","n":"Topstitch Color Shorts 18\"","p":"399,90","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"68S","n":"Mist"}]},
  {"c":"FOA405996","n":"Hybrid 365 Shorts 18\" 4Way Stretch","p":"449,90","cores":[{"k":"86L","n":"Dark Brush"},{"k":"32F","n":"Pebble"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA409125","n":"Classic Twill Shorts 21\"","p":"499,90","novo":1,"cores":[{"k":"02E","n":"Blackout"}]}
 ]},
 {"grupo":{"id": "apparel-beach", "nome": "Beachshorts e boardshorts", "dir": "apparel/beachshorts-boardshorts", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOA405634","n":"Essential Pocket Trunk Shorts","p":"249,90","novo":1,"cores":[{"k":"7CC","n":"Pacific"},{"k":"31R","n":"Humus"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408605","n":"Curved Block Trunkshort 18\"","p":"299,90","novo":1,"cores":[{"k":"32F","n":"Pebble"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408608","n":"Graphic Boardshorts II 20\"","p":"299,90","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"6GA","n":"Abyss"}]},
  {"c":"FOA408611","n":"Kana Boardshorts II 20\"","p":"299,90","novo":1,"cores":[{"k":"24A","n":"Lead"}]},
  {"c":"FOA408610","n":"Hybrid Curve Boardshorts 18\"","p":"299,90","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"314","n":"Cement"}]},
  {"c":"FOA408033","n":"Outdoor Tech Trunkshorts 18\"","p":"349,90","novo":1,"cores":[{"k":"24A","n":"Lead"},{"k":"32F","n":"Pebble"},{"k":"02E","n":"Blackout"}]}
 ]},
 {"grupo":{"id": "apparel-meias", "nome": "Meias e underwear", "dir": "apparel/meias-underwear", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOS900424","n":"Bark Low Quarter","p":"49,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS900426","n":"No Show Sock","p":"49,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS900421","n":"Crew Sock","p":"59,90","novo":1,"cores":[{"k":"02E","n":"Blackout"},{"k":"1A1","n":"Off White"}]},
  {"c":"FOS900420","n":"Urban Crew Sock","p":"69,90","cores":[{"k":"100","n":"White"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOS902323","n":"Skull Sock","p":"79,90","novo":1,"cores":[{"k":"100","n":"White"},{"k":"02E","n":"Blackout"},{"k":"22Y","n":"Stone Grey"}]},
  {"c":"FOS900606","n":"Invisible Socks 2 Pack","p":"89,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS900427","n":"Essential No Show 3 Pack","p":"89,90","cores":[{"k":"60B","n":"Navy Blue"},{"k":"100","n":"White"}]},
  {"c":"FOS900425","n":"Bark Low Quarter 3 Pack","p":"119,90","cores":[{"k":"999","n":"Miscellaneous"}]},
  {"c":"FOS900422","n":"Crew 3 Pack Sock 2.0","p":"119,90","cores":[{"k":"01K","n":"Jet Black"},{"k":"100","n":"White"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOA408493","n":"Underwear 2Pack 6\"","p":"199,90","cores":[{"k":"100","n":"White"}]}
 ]}
]},
{"id":"calcados","nome":"Calçados","desc":"Do trilho à calçada.","cor":"#ffb020","grupos":[
 {"grupo":{"id": "calcados-outdoor", "nome": "Outdoor", "dir": "calcados/outdoor", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOF100771","n":"Rampage","p":"449,90","cores":[{"k":"001","n":"Black"},{"k":"100","n":"White"},{"k":"323","n":"Khaki"}]},
  {"c":"FOF100456","n":"Battle","p":"599,90","cores":[{"k":"001","n":"Black"},{"k":"23Q","n":"Grigio Scuro"}]},
  {"c":"FOF100631","n":"Bridge","p":"649,90","cores":[{"k":"001","n":"Black"},{"k":"25N","n":"Uniform Grey"}]},
  {"c":"FOF100669","n":"Halftrack Low III","p":"699,90","cores":[{"k":"100","n":"White"},{"k":"001","n":"Black"}]},
  {"c":"FOF100751","n":"Crossfire","p":"699,90","novo":1,"cores":[{"k":"32F","n":"Pebble"},{"k":"001","n":"Black"},{"k":"26C","n":"Lunar Rock"}]},
  {"c":"FOF100576","n":"Granadier","p":"749,90","cores":[{"k":"001","n":"Black"}]},
  {"c":"FOF100724","n":"Wood Fire","p":"799,90","cores":[{"k":"001","n":"Black"},{"k":"30D","n":"Wood Grey"}]},
  {"c":"FOF100575","n":"Flak III","p":"899,90","cores":[{"k":"001","n":"Black"},{"k":"01K","n":"Jet Black"},{"k":"22Y","n":"Stone Grey"},{"k":"31R","n":"Humus"},{"k":"10R","n":"Arctic White"}]}
 ]},
 {"grupo":{"id": "calcados-teeth", "nome": "Teeth", "dir": "calcados/teeth", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOF100547","n":"Teeth Bomb","p":"1.099,90"},
  {"c":"FOF100545","n":"Teeth 1","p":"1.599,90","cores":[{"k":"100","n":"White"}]}
 ]},
 {"grupo":{"id": "calcados-casual", "nome": "Casual / Lifestyle", "dir": "calcados/casual", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOF100757","n":"Delta","p":"399,90","ex":"Morumbi + Dom Pedro","cores":[{"k":"31R","n":"Humus"},{"k":"24A","n":"Lead"},{"k":"01K","n":"Jet Black"},{"k":"1A1","n":"Off White"}],"exc":"Humus"},
  {"c":"FOF100561","n":"Radar","p":"649,90","cores":[{"k":"01K","n":"Jet Black"}]}
 ]},
 {"grupo":{"id": "calcados-sandalias", "nome": "Sandálias", "dir": "calcados/sandalias", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOF100686","n":"Raptor","p":"199,90","novo":1,"cores":[{"k":"22Y","n":"Stone Grey"},{"k":"01K","n":"Jet Black"},{"k":"32F","n":"Pebble"}]},
  {"c":"FOF100503","n":"Crowd","p":"229,90","cores":[{"k":"001","n":"Black"},{"k":"1A1","n":"Off White"}]},
  {"c":"FOF100726","n":"Operative Heritage","p":"249,90","ex":"Morumbi","cores":[{"k":"6BX","n":"Light Grey"}],"exc":"Light Grey"},
  {"c":"FOF100459","n":"Killer Point II","p":"279,90","novo":1,"cores":[{"k":"104","n":"White/Black"},{"k":"02E","n":"Blackout"},{"k":"26Y","n":"Granite Grey"}]},
  {"c":"FOF100534","n":"Titan","p":"299,90","novo":1,"cores":[{"k":"001","n":"Black"},{"k":"323","n":"Khaki"},{"k":"009","n":"Black/Red"},{"k":"050","n":"Black/Brown"}]},
  {"c":"FOF100458","n":"Killer Point II Camo","p":"329,90","cores":[{"k":"01K","n":"Jet Black"}]},
  {"c":"FOF100579","n":"Titan Slide","p":"349,90","novo":1,"cores":[{"k":"001","n":"Black"}]},
  {"c":"FOF100755","n":"Titan Camo","p":"349,90","novo":1,"cores":[{"k":"01K","n":"Jet Black"}]}
 ]}
]},
{"id":"importados","nome":"Importados","desc":"Coleção Japão, Latitude e Reserve. Técnica, silenciosa, quase toda preta.","cor":"#e8e8e8","grupos":[
 {"grupo":{"id": "importados-japao", "nome": "Coleção Japão", "dir": "importados/japao", "desc": "Peças técnicas importadas, só em loja.", "big": 1, "soon": 0},"itens":[
  {"c":"FOA409401","n":"FGL Union SS Tee 6.7","p":"449,90","f":"Oversized","ex":"Morumbi + Dom Pedro","cores":[{"k":"01N","n":"Phantom"}]},
  {"c":"FOA409413","n":"FGL Axis Pants 6.7","p":"979,90","ex":"Morumbi","cores":[{"k":"01N","n":"Phantom"}]},
  {"c":"FOA409414","n":"FGL Fuel LS Shirts 6.7","p":"979,90","f":"Oversized","ex":"Morumbi","cores":[{"k":"100","n":"White"}]},
  {"c":"FOA409406","n":"FGL Red Code Vest 6.7","p":"1.589,90","f":"Oversized","ex":"Morumbi","cores":[{"k":"467","n":"Rouge"}]},
  {"c":"FOA409408","n":"FGL Stealth Pants 2.0","p":"1.739,90","ex":"Morumbi","cores":[{"k":"013","n":"Stealth Black"}]},
  {"c":"FOA409399","n":"FGL Stealth Sweater 2.0","p":"1.969,90","f":"Oversized","ex":"Morumbi","cores":[{"k":"013","n":"Stealth Black"}]},
  {"c":"FOA409389","n":"FGL Stealth INS Jacket 2.0","p":"3.929,90","f":"Oversized","ex":"Morumbi","cores":[{"k":"013","n":"Stealth Black"}]},
  {"c":"FOS902077","n":"Oakley ShoeOne Bag","p":"869,90","ex":"Morumbi","cores":[{"k":"02Y","n":"Triple Black"}]}
 ]},
 {"grupo":{"id": "importados-latitude", "nome": "Latitude", "dir": "importados/latitude", "desc": "Camadas técnicas para qualquer clima. Cordura, Fidlock, Hydrofree.", "big": 1, "soon": 0},"itens":[
  {"c":"FOA408545","n":"Latitude Veil Tee","p":"659,90","f":"Boxy","ex":"Morumbi","cores":[{"k":"021","n":"Pitch Black"},{"k":"314","n":"Cement"}]},
  {"c":"FOA407895","n":"Latitude Veil Shorts","p":"1.179,90","ex":"Morumbi","cores":[{"k":"314","n":"Cement"}]},
  {"c":"FOA408386","n":"Latitude Veil 3/4 Shorts","p":"1.699,90","ex":"Morumbi","cores":[{"k":"021","n":"Pitch Black"}]},
  {"c":"FOA407871","n":"Latitude Veil Pant","p":"2.799,90","ex":"Morumbi","cores":[{"k":"68S","n":"Mist"}]},
  {"c":"FOA407923","n":"Latitude Veil Mid Layer","p":"2.869,90","f":"Regular","ex":"Morumbi","cores":[{"k":"314","n":"Cement"}]},
  {"c":"FOA407945","n":"Latitude Veil Flow Jacket","p":"2.869,90","f":"Regular","ex":"Morumbi","cores":[{"k":"68S","n":"Mist"}]},
  {"c":"FOA407866","n":"Latitude Veil Slingpack Jacket","p":"4.569,90","f":"Regular","ex":"Morumbi","cores":[{"k":"68S","n":"Mist"}]},
  {"c":"FOS901941","n":"Latitude Expedition Bag","p":"1.899,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS901940","n":"Latitude Flex Belt Bag","cores":[{"k":"02E","n":"Blackout"}]}
 ]},
 {"grupo":{"id": "importados-reserve", "nome": "Reserve", "dir": "importados/reserve", "desc": "Utilitário refinado, tons terrosos, acabamento de peça única.", "big": 1, "soon": 0},"itens":[
  {"c":"FOA407892","n":"Echo Rise Shorts","p":"519,90","ex":"Morumbi","cores":[{"k":"68S","n":"Mist"}]},
  {"c":"FOA409103","n":"Reserve Strato Reflective Tee","p":"329,90","f":"Regular","cores":[{"k":"2AL","n":"Cement Melange"}]},
  {"c":"FOA407926","n":"Reserve Momento Protopia Tee","p":"369,90","f":"Boxy","ex":"Morumbi","cores":[{"k":"74W","n":"Faded Green"},{"k":"68S","n":"Mist"}]},
  {"c":"FOS902306","n":"47 Reserve Distressed Cap","p":"659,90","ex":"Morumbi","cores":[{"k":"26Y","n":"Granite Grey"}]},
  {"c":"FOA407983","n":"Echo Rise Vest","p":"809,90","f":"Regular","ex":"Morumbi","cores":[{"k":"68S","n":"Mist"}]},
  {"c":"FOS902081","n":"Reserve Pouch","p":"809,90","cores":[{"k":"74O","n":"Aviator Green"},{"k":"021","n":"Pitch Black"},{"k":"26Y","n":"Granite Grey"}]},
  {"c":"FOA408660","n":"Echo Mod Pant","p":"849,90","ex":"Morumbi","cores":[{"k":"26Y","n":"Granite Grey"}]},
  {"c":"FOA408692","n":"Echo Mod Overshirt","p":"879,90","f":"Regular","ex":"Morumbi","cores":[{"k":"26Y","n":"Granite Grey"}]},
  {"c":"FOA407872","n":"Reserve Momento Utility Pant","p":"1.329,90","cores":[{"k":"74O","n":"Aviator Green"}]},
  {"c":"FOA408706","n":"Reserve Strato Cargo Pant","p":"1.439,90","ex":"Morumbi","cores":[{"k":"021","n":"Pitch Black"}]},
  {"c":"FOA408690","n":"Reserve Strato Vest","p":"1.919,90","f":"Regular","ex":"Morumbi","cores":[{"k":"314","n":"Cement"}]},
  {"c":"FOF100704","n":"Eon Shift","p":"2.139,90","ex":"Morumbi","cores":[{"k":"021","n":"Pitch Black"}]},
  {"c":"FOA407864","n":"Reserve Momento Jacket","p":"2.509,90","f":"Regular","ex":"Morumbi","cores":[{"k":"74O","n":"Aviator Green"}]}
 ]}
]},
{"id":"acessorios","nome":"Acessórios","desc":"O detalhe que fecha o look.","cor":"#3dffa8","grupos":[
 {"grupo":{"id": "acessorios-bones", "nome": "Bonés", "dir": "acessorios/bones", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOS900836","n":"O Original Patch Trucker","p":"239,90","cores":[{"k":"02H","n":"Blackout Dark"}]},
  {"c":"FOS900835","n":"Ellipse Mesh Hat","p":"279,90","cores":[{"k":"022","n":"Black/White"},{"k":"314","n":"Cement"}]},
  {"c":"FOS900906","n":"B1B HDO Patch Trucker","p":"279,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS902307","n":"Mod Cap","p":"279,90","cores":[{"k":"021","n":"Pitch Black"},{"k":"26Y","n":"Granite Grey"}]},
  {"c":"FOS901818","n":"Rope Hat","p":"279,90","cores":[{"k":"00N","n":"Graphite"}]},
  {"c":"912209","n":"Panel Stretch Metallic Hat","p":"329,90","cores":[{"k":"02E","n":"Blackout"},{"k":"7G9","n":"Deep Olive/Mist"}]},
  {"c":"FOS902102","n":"Bark Embossed Hat","p":"329,90","cores":[{"k":"04C","n":"Pitch Black/Flame Red"}]},
  {"c":"FOS900499","n":"Tincan Remix Cap","p":"329,90","cores":[{"k":"33U","n":"Cocoa Brown"},{"k":"02E","n":"Blackout"}]},
  {"c":"911545","n":"Tincan Cap","p":"329,90","cores":[{"k":"100","n":"White"},{"k":"01Y","n":"Black/Graphic Camo"},{"k":"6C6","n":"Fathom/Light Grey"},{"k":"01W","n":"Black/Carbon Fiber"}]},
  {"c":"FOS902287","n":"Cutdraw Hat","p":"329,90","cores":[{"k":"100","n":"White"},{"k":"021","n":"Pitch Black"}]},
  {"c":"FOS901817","n":"Bark Snapback","p":"329,90","cores":[{"k":"26Y","n":"Granite Grey"}]},
  {"c":"FOS902288","n":"Circle Bark","p":"329,90","cores":[{"k":"68S","n":"Mist"}]},
  {"c":"FOS901486","n":"Tincan LX","p":"379,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS901220","n":"Remix Dad Hat","p":"379,90","cores":[{"k":"32T","n":"Dark Umber"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOS902103","n":"47 Soho Gen Dad Cap","p":"429,90","cores":[{"k":"32F","n":"Pebble"},{"k":"74O","n":"Aviator Green"}]}
 ]},
 {"grupo":{"id": "acessorios-gorros", "nome": "Gorros, bucket e peças extras", "dir": "acessorios/gorros-extras", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"91099A","n":"Fine Knit Beanie","p":"219,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS902279","n":"Ellipse Waffle Beanie","p":"359,90","cores":[{"k":"021","n":"Pitch Black"}]},
  {"c":"FOS901946","n":"Ellipse Graphic Beanie","p":"469,90","cores":[{"k":"012","n":"Black/Grey"}]},
  {"c":"FOA402573","n":"Podium Plaid LS Flannel","p":"439,90","f":"Regular","cores":[{"k":"9I3","n":"Pitch Black/Cement/Mist Check"}]},
  {"c":"FOA406124","n":"Oakley Utility Chino Shorts","p":"439,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS902104","n":"47 Soho Gen Bucket Hat","p":"519,90","ex":"Morumbi","cores":[{"k":"021","n":"Pitch Black"},{"k":"74O","n":"Aviator Green"}]},
  {"c":"FOA408693","n":"Off-Slope Solid Overshirt","p":"1.249,90","f":"Regular","ex":"Morumbi + Dom Pedro","cores":[{"k":"021","n":"Pitch Black"}]}
 ]},
 {"grupo":{"id": "acessorios-cintos", "nome": "Cintos, carteiras e bolsas pequenas", "dir": "acessorios/cintos-bolsas-pequenas", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOS900696","n":"Essential Icon Carabiner","p":"129,90","cores":[{"k":"02E","n":"Blackout"},{"k":"206","n":"Silver"},{"k":"86L","n":"Dark Brush"}]},
  {"c":"FOS901036","n":"Contendar Belt","p":"209,90","cores":[{"k":"011","n":"Black/Graphite"}]},
  {"c":"FOS901652","n":"Rover Wallet","p":"239,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"96185","n":"Ellipse Web Belt","p":"279,90","cores":[{"k":"02E","n":"Blackout"},{"k":"100","n":"White"},{"k":"314","n":"Cement"},{"k":"32F","n":"Pebble"}]},
  {"c":"FOS901420","n":"Essential Canvas Tote 7.0","p":"289,90","cores":[{"k":"00G","n":"Black Print"}]},
  {"c":"FOS900851","n":"Transit Belt Bag","p":"289,90","cores":[{"k":"7EE","n":"Graffiti Camo Green"},{"k":"02E","n":"Blackout"}]},
  {"c":"FOS901815","n":"Latitude Web Belt","p":"359,90","cores":[{"k":"314","n":"Cement"},{"k":"7CE","n":"Army Green"}]},
  {"c":"FOS901481","n":"Rover Crossbody","p":"379,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS901214","n":"Oakley Turbine Umbrella","p":"409,90","cores":[{"k":"02E","n":"Blackout"}]}
 ]},
 {"grupo":{"id": "acessorios-mochilas", "nome": "Mochilas e bolsas", "dir": "acessorios/mochilas-bolsas", "desc": "", "big": 0, "soon": 0},"itens":[
  {"c":"FOS902258","n":"Confront Bag","p":"379,90","cores":[{"k":"02E","n":"Blackout"},{"k":"24K","n":"Oxide"}]},
  {"c":"FOS902259","n":"Navigate Bag","p":"449,90","cores":[{"k":"02E","n":"Blackout"},{"k":"323","n":"Khaki"}]},
  {"c":"FOS902290","n":"Enduro 20L","p":"529,90","cores":[{"k":"26Y","n":"Granite Grey"},{"k":"021","n":"Pitch Black"}]},
  {"c":"FOS902324","n":"Bravo Bag","p":"599,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS901202","n":"The Freshman Skate Backpack","p":"629,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS902291","n":"Enduro 25L","p":"669,90","cores":[{"k":"021","n":"Pitch Black"}]},
  {"c":"FOS901478","n":"Rover Laptop Backpack","p":"799,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS901958","n":"Oakley Packable Duffle","p":"869,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS902292","n":"Enduro 30L","p":"909,90","cores":[{"k":"021","n":"Pitch Black"}]},
  {"c":"FOS902082","n":"Rover Commuter Tote","p":"1.149,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS901479","n":"Heritage Icon BP","p":"1.389,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"FOS902294","n":"Terraquest 29L Backpack","p":"1.829,90","cores":[{"k":"021","n":"Pitch Black"}]},
  {"c":"FOS901477","n":"Bathroom Sink RC Backpack","p":"1.919,90","cores":[{"k":"02E","n":"Blackout"}]},
  {"c":"92060A","n":"Kitchen Sink","p":"2.309,90","cores":[{"k":"013","n":"Stealth Black"},{"k":"84U","n":"Total Coyote"},{"k":"7DI","n":"Deep Olive"}]}
 ]}
]}
];
