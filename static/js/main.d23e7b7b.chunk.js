(this["webpackJsonpprison-manager"]=this["webpackJsonpprison-manager"]||[]).push([[0],{19:function(a,e,r){},20:function(a,e,r){},37:function(a,e,r){},39:function(a,e,r){"use strict";r.r(e);var o=r(1),i=r.n(o),t=r(12),n=r.n(t),s=(r(19),r(20),r(3)),l=r(4),c=r(6),h=r(5),u=r(8),d=r(14),m=r.n(d),p=(r(37),r(0)),b=function(a){Object(c.a)(r,a);var e=Object(h.a)(r);function r(a){var o;return Object(s.a)(this,r),(o=e.call(this,a)).onDoorClick=function(){o.props.onChildClick(o.props.prisoner.key)},o.state={rehabilitated:!1},o}return Object(l.a)(r,[{key:"render",value:function(){var a=this.props.prisoner,e=a.name,r=a.number;return Object(p.jsx)("div",{className:"prison-door",children:Object(p.jsxs)("div",{className:"prison-door-inner-border",children:[Object(p.jsx)("h4",{className:"prisoner-number glow",onClick:this.onDoorClick,children:r}),Object(p.jsx)("h2",{className:"prisoner-name",children:e})]})})}}]),r}(o.Component),g={initialIndex:15,freeScroll:!1,wrapAround:!0,pageDots:!1},f=function(a){Object(c.a)(r,a);var e=Object(h.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var a=this;this.flickity.on("change",(function(){a.onSelectionChanged()}))}},{key:"onSelectionChanged",value:function(){this.props.onSelectionChanged(this.flickity.selectedIndex)}},{key:"clickAlert",value:function(a){this.flickity.select(a)}},{key:"shouldComponentUpdate",value:function(a){return a.prisoners!==this.props.prisoners}},{key:"render",value:function(){var a=this,e=this.props.prisoners;return"undefined"==typeof e&&(console.log("Prisoners are undefined, empty array applied."),e=[]),Object(p.jsx)("div",{style:{padding:"0 0 0.8em 0"},children:Object(p.jsx)(m.a,{flickityRef:function(e){return a.flickity=e},className:"carousel",elementType:"div",options:g,disableImagesLoaded:!1,reloadOnUpdate:!0,static:!0,children:e.map((function(e){return Object(p.jsx)(b,{prisoner:e,onChildClick:a.clickAlert.bind(a)},e.key)}))})})}}]),r}(o.Component),k=function(a){Object(c.a)(r,a);var e=Object(h.a)(r);function r(a){var o;return Object(s.a)(this,r),(o=e.call(this,a)).state={counter1:0,counter2:0,counter3:0},o}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var a=this;setInterval((function(){a.setState({counter1:Math.floor(1e3*Math.random()),counter2:Math.floor(100*Math.random()),counter3:Math.floor(1e3*Math.random())})}),250)}},{key:"changeCounters",value:function(){}},{key:"render",value:function(){var a=this.props,e=a.prisoners[a.selectedPrisoner],r=e.name,o=e.number,i=e.crimes;return Object(p.jsx)("div",{className:"details-container",onClick:this.increment,children:Object(p.jsxs)("div",{className:"prison-door-inner-border",children:[Object(p.jsxs)("div",{className:"flex",style:{height:"200px"},children:[Object(p.jsxs)("div",{className:"left-container",children:[Object(p.jsx)("div",{className:"detail-description",children:"PRISONER"}),Object(p.jsx)("div",{className:"detail",children:o}),Object(p.jsx)("div",{className:"detail-description",children:"a.k.a."}),Object(p.jsx)("div",{className:"detail",children:r})]}),Object(p.jsxs)("div",{className:"right-container",children:[Object(p.jsxs)("div",{className:"flex flex-end",style:{width:"100%"},children:[Object(p.jsx)("div",{className:"photo"}),Object(p.jsxs)("div",{style:{width:"100%",height:"80%"},children:[Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(p.jsx)("div",{className:"numerics fg-blue-faded",children:this.state.counter1}),Object(p.jsx)("div",{className:"numerics fg-light-faded",children:this.state.counter2}),Object(p.jsx)("div",{className:"numerics fg-blue-faded",children:this.state.counter3})]}),Object(p.jsxs)("div",{className:"bar-graph",children:[Object(p.jsx)("div",{className:"bar b1"}),Object(p.jsx)("div",{className:"bar b2"}),Object(p.jsx)("div",{className:"bar b5"}),Object(p.jsx)("div",{className:"bar b3"}),Object(p.jsx)("div",{className:"bar b4"})]})]})]}),Object(p.jsx)("div",{style:{height:"20%"},children:Object(p.jsx)("div",{children:"hello"})})]})]}),Object(p.jsx)("div",{className:"detail-description",children:"CRIMES"}),i.map((function(a){return Object(p.jsx)("div",{className:"detail list",children:a})}))]})})}}]),r}(o.Component),y=function(a){Object(c.a)(r,a);var e=Object(h.a)(r);function r(a){var o;Object(s.a)(this,r),o=e.call(this,a);for(var i=u.adjectives,t=u.noun,n=u.crimeNoun,l=u.verb,c=u.toolsDefinitive,h=[],d=0;d<30;d++){var m=i[Math.floor(Math.random()*i.length)],p=t[Math.floor(Math.random()*t.length)],b=Math.floor(1e5*Math.random()),g=h.length,f=[],k=Math.floor(6*Math.random());k<1&&(k=1);for(var y=0;y<k;y++){var S=l[Math.floor(Math.random()*l.length)];S=S.charAt(0).toUpperCase()+S.slice(1);var C=n[Math.floor(Math.random()*n.length)].toLowerCase(),v=c[Math.floor(Math.random()*c.length)],j="".concat(S," ").concat(C," with ").concat(v);f.push(j)}var w={key:g,name:m+" "+p,number:b,crimes:f};h.push(w)}return o.state={prisoners:h,selectedPrisoner:0},o}return Object(l.a)(r,[{key:"selectionChanged",value:function(a){this.setState({selectedPrisoner:a})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:{marginTop:"0.1em"},children:"Prison"}),Object(p.jsx)("hr",{className:"hr-2"}),Object(p.jsx)(f,{prisoners:this.state.prisoners,onSelectionChanged:this.selectionChanged.bind(this)}),Object(p.jsx)("hr",{className:"hr-2"}),Object(p.jsx)(k,{prisoners:this.state.prisoners,selectedPrisoner:this.state.selectedPrisoner})]})}}]),r}(o.Component);var S=function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{style:{color:"#b0b0b0",fontSize:"0.9em",marginLeft:"0.1em"},children:"version. 00-003"}),Object(p.jsx)(y,{})]})};n.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},8:function(a){a.exports=JSON.parse('{"adjectives":["Abundant","Accurate","Addicted","Adorable","Adventurous","Afraid","Aggressive","Alcoholic","Alert","Aloof","Ambitious","Ancient","Angry","Animated","Annoying","Anxious","Arrogant","Ashamed","Attractive","Auspicious","Awesome","Awful","Abactinal","Abandoned","Abashed","Abatable","Abatic","Abaxial","Abbatial","Abbreviated","Abducent","Abducting","Aberrant","Abeyant","Abhorrent","Abiding","Abient","Bad","Bashful","Beautiful","Belligerent","Beneficial","Best","Big","Bitter","Bizarre","Black","Blue","Boring","Brainy","Bright","Broad","Broken","Busy","Barren","Barricaded","Barytic","Basal","Basaltic","Baseborn","Based","Baseless","Basic","Bathyal","Battleful","Battlemented","Batty","Batwing","Bias","Calm","Capable","Careful","Careless","Caring","Cautious","Charming","Cheap","Cheerful","Chubby","Clean","Clever","Clumsy","Cold","Colorful","Comfortable","Concerned","Confused","Crowded","Cruel","Curious","Curly","Cute","Damaged","Dangerous","Dark","Deep","Defective","Delicate","Delicious","Depressed","Determined","Different","Dirty","Disgusting","Dry","Dusty","Daft","Daily","Dainty","Damn","Damning","Damp","Dampish","Darkling","Darned","Dauntless","Daylong","Early","Educated","Efficient","Elderly","Elegant","Embarrassed","Empty","Encouraging","Enthusiastic","Excellent","Exciting","Expensive","Fabulous","Fair","Faithful","Famous","Fancy","Fantastic","Fast","Fearful","Fearless","Fertile","Filthy","Foolish","Forgetful","Friendly","Funny","Gentle","Glamorous","Glorious","Gorgeous","Graceful","Grateful","Great","Greedy","Green","Handsome","Happy","Harsh","Healthy","Heavy","Helpful","Hilarious","Historical","Horrible","Hot","Huge","Humorous","Hungry","Ignorant","Illegal","Imaginary","Impolite","Important","Impossible","Innocent","Intelligent","Interesting","Jealous","Jolly","Juicy","Juvenile","Kind","Large","Legal","Light","Literate","Little","Lively","Lonely","Loud","Lovely","Lucky","Macho","Magical","Magnificent","Massive","Mature","Mean","Messy","Modern","Narrow","Nasty","Naughty","Nervous","New","Noisy","Nutritious","Obedient","Obese","Obnoxious","Old","Overconfident","Peaceful","Pink","Polite","Poor","Powerful","Precious","Pretty","Proud","Quick","Quiet","Rapid","Rare","Red","Remarkable","Responsible","Rich","Romantic","Royal","Rude","Scintillating","Secretive","Selfish","Serious","Sharp","Shiny","Shocking","Short","Shy","Silly","Sincere","Skinny","Slim","Slow","Small","Soft","Spicy","Spiritual","Splendid","Strong","Successful","Sweet","Talented","Tall","Tense","Terrible","Terrific","Thick","Thin","Tiny","Tactful","Tailor-made","Take-charge","Tangible","Tasteful","Tasty","Teachable","Teeming","Tempean","Temperate","Tenable","Tenacious","Tender","Tender-hearted","Terrific","Testimonial","Thankful","Thankworthy","Therapeutic","Thorough","Thoughtful","Ugly","Unique","Untidy","Upset","Victorious","Violent","Vulgar","Warm","Weak","Wealthy","Wide","Wise","Witty","Wonderful","Worried","Young","Youthful","Zealous"],"noun":["Apple","Air","Conditioner","Airport","Ambulance","Aircraft","Apartment","Arrow","Antlers","Apro","Alligator","Architect","Ankle","Armchair","Aunt","Ball","Bermudas","Beans","Balloon","Bear","Blouse","Bed","Bow","Bread","Black","Board","Bones","Bill","Bitterness","Boxers","Belt","Brain","Buffalo","Bird","Baby","Book","Back","Butter","Bulb","Buckles","Bat","Bank","Bag","Bra","Boots","Blazer","Bikini","Bookcase","Bookstore","Bus stop","Brass","Brother","Boy","Blender","Bucket","Bakery","Bow","Bridge","Boat","Car","Cow","Cap","Cooker","Cheeks","Cheese","Credenza","Carpet","Crow","Crest","Chest","Chair","Candy","Cabinet","Cat","Coffee","Children","Cookware","Chaise longue","Chicken","Casino","Cabin","Castle","Church","Cafe","Cinema","Choker","Cravat","Cane","Costume","Cardigan","Chocolate","Crib","Couch","Cello","Cashier","Composer","Cave","Country","Computer","Canoe","Clock","Charlie (U.K)","Dog","Deer","Donkey","Desk","Desktop","Dress","Dolphin","Doctor","Dentist","Drum","Dresser","Designer","Detective","Daughter","Egg","Elephant","Earrings","Ears","Eyes","Estate","Finger","Fox","Frock","Frog","Fan","Freezer","Fish","Film","Foot","Flag","Factory","Father","Farm","Forest","Flower","Fruit","Fork","Grapes","Goat","Gown","Garlic","Ginger","Giraffe","Gauva","Grains","Gas station","Garage","Gloves","Glasses","Gift","Galaxy","Guitar","Grandmother","Grandfather","Governor","Girl","Guest","Hamburger","Hand","Head","Hair","Heart","House","Horse","Hen","Horn","Hat","Hammer","Hostel","Hospital","Hotel","Heels","Herbs","Host","Jacket","Jersey","Jewelry","Jaw","Jumper","Judge","Juicer","Keyboard","Kid","Kangaroo","Koala","Knife","Lemon","Lion","Leggings","Leg","Laptop","Library","Lamb","London","Lips","Lung","Lighter","Luggage","Lamp","Lawyer","Mouse","Monkey","Mouth","Mango","Mobile","Milk","Music","Mirror","Musician","Mother","Man","Model","Mall","Museum","Market","Moonlight","Medicine","Microscope","Newspaper","Nose","Notebook","Neck","Noodles","Nurse","Necklace","Noise","Ocean","Ostrich","Oil","Orange","Onion","Oven","Owl","Paper","Panda","Pants","Palm","Pasta","Pumpkin","Pharmacist","Potato","Parfume","Panther","Pad","Pencil","Pipe","Police","Pen","Pharmacy","Petrol station","Police station","Parrot","Plane","Pigeon","Phone","Peacock","Pencil","Pig","Pouch","Pagoda","Pyramid","Purse","Pancake","Popcorn","Piano","Physician","Photographer","Professor","Painter","Park","Plant","Parfume","Radio","Razor","Ribs","Rainbow","Ring","Rabbit","Rice","Refrigerator","Remote","Restaurant","Road","Surgeon","Scale","Shampoo","Sink","Salt","Shark","Sandals","Shoulder","Spoon","Soap","Sand","Sheep","Sari","Stomach","Stairs","Soup","Shoes","Scissors","Sparrow","Shirt","Suitcase","Stove","Stairs","Snowman","Shower","Swan","Suit","Sweater","Smoke","Skirt","Sofa","Socks","Stadium","Skyscraper","School","Sunglasses","Sandals","Slippers","Shorts","Sandwich","Strawberry","Spaghetti","Shrimp","Saxophone","Sister","Son","Singer","Senator","Street","Supermarket","Swimming pool","Star","Sky","Sun","Spoon","Ship","Smile","Table","Turkey","Tie","Toes","Truck","Train","Taxi","Tiger","Trousers","Tongue","Television","Teacher","Turtle","Tablet","Train station","Toothpaste","Tail","Theater","Trench coat","Tea","Tomato","Teen","Tunnel","Temple","Town","Toothbrush","Tree","Toy","Tissue","Telephone","Underwear","Uncle","Umbrella","Vest","Voice","Veterinarian","Villa","Violin","Village","Vehicle","Vase","Wallet","Wolf","Waist","Wrist","Water melon","Whale","Water","Wings","Whisker","Watch","Woman","Washing machine","Wheelchair","Waiter","Wound","Xylophone","Zebra","Zoo"],"crimeNoun":["an apple","some air","conditioner","an airport","an ambulance","an aircraft","an apartment","an arrow","antlers","an alligator","an architect","an ankle","an armchair","its aunt","a ball","the Bermudas","some beans","a balloon","a bear","a blouse","a bed","a bow","some bread","a board","a bone","its bills","bitterness","boxers","a belt","a brain","a buffalo","a bird","a baby","a book","a Back","some Butter","a Bulb","a pair of Buckles","a Bat","a Bank","a Bag","a Bra","some Boots","a Blazer","a Bikini","a Bookcase","a Bookstore","a Bus stop","some Brass","its Brother","a Boy","a Blender","a Bucket","a Bakery","a Bow","a Bridge","a Boat","a Car","a Cow","a Cap","a Cooker","someones Cheeks","some Cheese","a Carpet","a Crow","a Crest","a Chest","a Chair","some Candy","a Cabinet","a Cat","some Coffee","Children","Cookware","a Chaise longue","a Chicken","a Casino","a Cabin","a Castle","a Church","a Cafe","a Cinema","a Choker","a Cravat","a Cane","a Costume","a Cardigan","some Chocolate","a Crib","a Couch","a Cello","a Cashier","a Composer","a Cave","a Country","a Computer","a Canoe","a Clock","a Dog","a Deer","a Donkey","a Desk","a Desktop","a Dress","a Dolphin","a Doctor","a Dentist","a Drum","a Dresser","a Designer","a Detective","a Daughter","an Egg","an Elephant","an Earrings","someones Ears","someones Eyes","someones Estate","someones Finger","a Fox","a Frock","a Frog","a Fan","a Freezer","a Fish","a Film","a Foot","a Flag","a Factory","someones Father","a Farm","a Forest","a Flower","a Fruit","a Fork","a Grapes","a Goat","a Gown","some Garlic","some Ginger","a Giraffe","a Gauva","some Grain","a Gas station","a Garage","a pair of Gloves","a pair of Glasses","a Gift","a Galaxy","a Guitar","someones Grandmother","someones Grandfather","a Governor","a Girl","a Guest","a Hamburger","a Hand","a Head","a Hair","a Heart","a House","a Horse","a Hen","a Horn","a Hat","a Hammer","a Hostel","a Hospital","a Hotel","a pair of Heels","some Herbs","a Host","a Jacket","a Jersey","some Jewelry","a Jaw","a Jumper","a Judge","a Juicer","a Keyboard","a Kid","a Kangaroo","a Koala","a Knife","a Lemon","a Lion","a pair of Leggings","a Leg","a Laptop","a Library","a Lamb","London","a pair of Lips","a Lung","a Lighter","someones Luggage","a Lamp","a Lawyer","a Mouse","a Monkey","someones Mouth","a Mango","a Mobile","some Milk","Music","a Mirror","a Musician","someones Mother","a Man","a Model","a Mall","a Museum","a Market","the Moonlight","someones Medicine","a Microscope","a Newspaper","a Nose","a Notebook","a Neck","Noodles","a Nurse","a Necklace","a Noise","the Ocean","an Ostrich","all the Oil","an Orange","an Onion","an Oven","an Owl","a Paper","a Panda","a pair of Pants","a Palm","some Pasta","a Pumpkin","a Pharmacist","a Potato","someones Parfume","a Panther","a Pad","a Pencil","a Pipe","the Police","a Pen","a Pharmacy","a Petrol station","a Police station","a Parrot","a Plane","a Pigeon","a Phone","a Peacock","a Pencil","a Pig","a Pouch","a Pagoda","a Pyramid","a Purse","a Pancake","some Popcorn","a Piano","a Physician","a Photographer","a Professor","a Painter","a Park","a Plant","a Radio","a Razor","several Ribs","the Rainbow","a Ring","a Rabbit","some Rice","a Refrigerator","a Remote","a Restaurant","a Road","a Surgeon","a Scale","too much Shampoo","a Sink","some Salt","a Shark","a pair of Sandals","a Shoulder","a Spoon","some Soap","some Sand","a Sheep","a Sari","someones Stomach","a Stair","someones Soup","a pair of Shoes","a pair of Scissors","a Sparrow","a Shirt","a Suitcase","a Stove","a Snowman","a Shower","a Swan","a Suit","a Sweater","Smoke","a Skirt","a Sofa","a pair of Socks","a Stadium","a Skyscraper","a School","a pair of Sunglasses","a pair of Sandals","a pair of Slippers","a pair of Shorts","a Sandwich","a Strawberry","some Spaghetti","a Shrimp","a Saxophone","someones Sister","someones Son","a Singer","a Senator","a Street","a Supermarket","a Swimming pool","a Star","the Sky","the Sun","a Spoon","a Ship","a Smile","a Table","a Turkey","a Tie","someones toes","a Truck","a Train","a Taxi","a Tiger","a pair of Trousers","a Tongue","a Television","a Teacher","a Turtle","a Tablet","a Train station","some Toothpaste","a Tail","the Theater","a Trench coat","some Tea","a Tomato","a Teen","a Tunnel","a Temple","a Town","a Toothbrush","a Tree","a Toy","a Tissue","a Telephone","an Underwear","an Uncle","an Umbrella","a Vest","a Voice","a Veterinarian","a Villa","a Violin","a Village","a Vehicle","a Vase","a Wallet","a Wolf","someones Waist","someones Wrist","a Water melon","a Whale","all the Water","Wings","Whiskers","a Watch","a Woman","a Washing machine","a Wheelchair","a Waiter","a Wound","a Xylophone","a Zebra","a Zoo"],"verb":["babysat","beat","became","bent","bound","bit","bled","blew","broke","bred","broadcast","built","bought","bodyslammed","caught","cut","crushed","dealt","dug","did","drew","drank","drove","ate","fed","felt","fought","found","flew","forgot","forgave","froze","got","grew","hung","hid","hit","held","hurt","kept","killed","kicked","knifed","led","left","lent","lit","lost","made","meant","met","murdered","paid","ravaged","rode","robbed","sold","shook","shone","shot","sawed","sang","sank","spent","spun","spread","stole","stuck","stung","struck","swore","swept","swam","swung","took","taught","tore","thought","threw","understood","undercut","violated","woke","wore","won","wounded","withdrew","wrote"],"toolsDefinitive":["an allen key","an alligator","an auger","an axe","a ball-peen hammer","a beetle","a billhook","a bitstock","a bushhammer","a chaser","a chisel","a claw hammer","a clink","a pair of clippers","a cold chisel","a comb","a countersink","a cradle","a diamond point","a dibble","a drawknife","a dresser","a driftpin","a drill","a drill press","a drove chisel","an edge tool","a facer","a file","a fillet","a firmer chisel","a flange","a flatter","a float","a floatcut file","a fork","a gavel","a gouger","a hack","a hack hammer","a half-round chisel","a hammer","a hammer drill","a hoe","an icebreaker","an ice pick","a jackhammer","a jointer","a knapping hammer","a mallet","a maul","a monkey wrench","a padsaw","a pick","a piledriver","a pitching tool","a pair of pliers","a ploughstaff","a pneumatic hammer","a power drill","a pruning hook","a punch","a rake","a rawhide hammer","a router","a sander","a saw","a screwdriver","a screw tap","a scythe","a pair of shears","a sickle","a slasher","a sledgehammer","a snake","a soldering iron","a spade","a spanner","a spider","a spitsticker","a stylus","a tack hammer","a tilt hammer","a triphammer","a wrench","an antiaircraft gun","an antitank weapon","a cannon","a vulcan automatic cannon","coastal artillery","a german 88","a mortar","a panzerfaust","a panzerschreck","anthrax","the plague","fever","ricin","smallpox","hydrogen cyanide","nerve gas","tear gas","a boomerang","a crossbow","a longbow","a grapeshot","a flamethrower","greek fire","a sling","a spear","a bayonet","a club","a dagger","a halberd","a lance","a pike","a quarterstaff","a sabre","a sword","a tomahawk","bombs","depth charges","a dirty bomb","a grenade","an improvised explosive device","a mine","shrapnel","TNT","missiles","ballistic missiles","an antiballistic missile","a lance missile","a peacekeeper missile","a minuteman missile","a nike missile","a polaris missile","a poseidon missile","a torpedo","a trident missile","a V-2 missile","a cruise missiles","a tomahawk","a V-1 missile","rockets","a bazooka","an air gun","a blowgun","a blunderbuss","a carbine","a gatling gun","a handgun","a pistol","a revolver","a derringer","a harquebus","a musket","a rifle","a lee-Enfield rifle","a mauser rifle","a springfield rifle","a shotgun","a handgun","a pistol","a semiautomatic pistol","a revolver","a rifle","a assault rifle","a AK-47","a M16 rifle","a repeating rifle","a handgun","a machine gun","a MG42","a rifle","a submachine gun","an uzi","nuclear weapons","intermediate-range nuclear weapons","a thermonuclear bomb","an atomic bomb","a neutron bomb","a weapon of mass destruction","a battering ram","a cannon","a catapult","a ram"]}')}},[[39,1,2]]]);
//# sourceMappingURL=main.d23e7b7b.chunk.js.map