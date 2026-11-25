const gameOptions = {
  polytrack: {
    title: 'PolyTrack',
    sourceLabel: 'SELF-HOSTED REUPLOAD',
    url: './games/polytrack/',
    icon: '🏁',
    note: 'Racing',
    cardClass: 'polytrack-card',
  },
  game2048: {
    title: '2048',
    sourceLabel: 'SELF-HOSTED',
    url: './games/catalog-sample/2048/',
    icon: '🔢',
    note: 'Puzzle',
    cardClass: 'game-2048-card',
  },
  breaklock: {
    title: 'Breaklock',
    sourceLabel: 'SELF-HOSTED',
    url: './games/catalog-sample/breaklock/',
    icon: '🔐',
    note: 'Pattern puzzle',
    cardClass: 'breaklock-card',
  },
  wbwwb: {
    title: 'We Become What We Behold',
    sourceLabel: 'SELF-HOSTED',
    url: './games/catalog-sample/we-become-what-we-behold/',
    icon: '📰',
    note: 'Interactive story',
    cardClass: 'wbwwb-card',
  },
  crossyroad: {
    title: 'Crossy Road',
    sourceLabel: 'SELF-HOSTED',
    url: './games/crossy-road/',
    icon: '🛣️',
    note: 'Arcade crossing',
    cardClass: 'crossy-card',
  },
  energycrossing: {
    title: 'Energy Crossing',
    sourceLabel: 'SELF-HOSTED',
    url: './games/energy-crossing/',
    icon: '⚡',
    note: 'Arcade runner',
    cardClass: 'energy-crossing-card',
  },
};

Object.assign(gameOptions, {
  "tabspawn-jetbrawl": { title: "Jetbrawl", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/jetbrawl/", icon: "🎯", note: "Action", category: "Action", cardClass: "tabspawn-card" },
  "tabspawn-stackrise": { title: "Stackrise", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/stackrise/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "tabspawn-card" },
  "tabspawn-dotweave": { title: "Dotweave", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/dotweave/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "tabspawn-card" },
  "tabspawn-arrowscape": { title: "Arrowscape", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/arrowscape/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "tabspawn-card" },
  "tabspawn-jugnu-ii": { title: "Jugnu II", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/jugnu-ii/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "tabspawn-card" },
  "tabspawn-dusk-duel": { title: "Dusk Duel", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/dusk-duel/", icon: "🌐", note: "Multiplayer", category: "Multiplayer", cardClass: "tabspawn-card" },
  "tabspawn-gridbloom": { title: "Gridbloom", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/gridbloom/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "tabspawn-card" },
  "tabspawn-huesort": { title: "Huesort", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/huesort/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "tabspawn-card" },
  "tabspawn-inkgrid": { title: "Inkgrid", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/inkgrid/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "tabspawn-card" },
  "tabspawn-apex-rider": { title: "Apex Rider", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/apex-rider/", icon: "🏎️", note: "Racing", category: "Racing", cardClass: "tabspawn-card" },
  "tabspawn-outline": { title: "Outline", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/outline/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "tabspawn-card" },
  "tabspawn-bowfall": { title: "Bowfall", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/bowfall/", icon: "🎯", note: "Action", category: "Action", cardClass: "tabspawn-card" },
  "tabspawn-cosmojar": { title: "Cosmojar", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/cosmojar/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "tabspawn-card" },
  "tabspawn-trustfall": { title: "Trustfall", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/trustfall/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "tabspawn-card" },
  "tabspawn-airlock": { title: "Airlock", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/airlock/", icon: "🌐", note: "Multiplayer", category: "Multiplayer", cardClass: "tabspawn-card" },
  "tabspawn-umbra": { title: "Umbra", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/umbra/", icon: "🎯", note: "Action", category: "Action", cardClass: "tabspawn-card" },
  "tabspawn-ludo": { title: "Ludo", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/ludo/", icon: "🎲", note: "Board & Table", category: "Board & Table", cardClass: "tabspawn-card" },
  "tabspawn-carrom": { title: "Carrom", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/carrom/", icon: "🎲", note: "Board & Table", category: "Board & Table", cardClass: "tabspawn-card" },
  "tabspawn-dusk-duel-2": { title: "Dusk Duel 2", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/dusk-duel-2/", icon: "🌐", note: "Multiplayer", category: "Multiplayer", cardClass: "tabspawn-card" },
  "tabspawn-boltline": { title: "Boltline", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/boltline/", icon: "🎯", note: "Action", category: "Action", cardClass: "tabspawn-card" },
  "tabspawn-trustfall-2": { title: "Trustfall 2", sourceLabel: "TABSPAWN", url: "https://tabspawn.com/play/trustfall-2/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "tabspawn-card" },
  "playtundra-rocket-clash-3d": { title: "Rocket Clash 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/rocket-clash-3d/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-kingdom-tower-defense": { title: "Kingdom Tower Defense", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/kingdom-tower-defense/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-assault-zone": { title: "Assault Zone", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/assault-zone/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-stickman-attack": { title: "Stickman Attack", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/stickman-attack/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-space-destroyer": { title: "Space Destroyer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/space-destroyer/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-bandits-bane": { title: "Bandits Bane", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/bandits-bane/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-t-rex-ny": { title: "T-REX N.Y Online", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/t-rex-ny/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-sift-renegade-brawl": { title: "Sift Renegade Brawl", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/sift-renegade-brawl/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-stickman-epic-battle": { title: "Stickman Epic Battle", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/stickman-epic-battle/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-ultimate-robo-duel-3d": { title: "Ultimate Robo Duel 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ultimate-robo-duel-3d/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-medieval-battle-2p": { title: "Medieval Battle 2P", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/medieval-battle-2p/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-castel-wars": { title: "Castel Wars", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/castel-wars/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-drunken-wrestle": { title: "Drunken Wrestle", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/drunken-wrestle/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-tug-of-heads": { title: "Tug of Heads", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tug-of-heads/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-blockgunner": { title: "BlockGunner", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/blockgunner/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-boom-duello": { title: "Boom Duello", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/boom-duello/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-tanks-of-liberty": { title: "Tanks of Liberty", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tanks-of-liberty/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-stickman-fighter-3d": { title: "Stickman Fighter 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/stickman-fighter-3d/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-stickman-hooks": { title: "Stickman Hooks", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/stickman-hooks/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-void-drop-3d": { title: "Void Drop 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/void-drop-3d/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-popcorn-thief": { title: "Popcorn Thief", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/popcorn-thief/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-astro-chickens": { title: "Astro Chickens", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/astro-chickens/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-animal-boxing": { title: "Animal Boxing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/animal-boxing/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-dragon-draw-joust": { title: "Dragon Draw Joust", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dragon-draw-joust/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-sumo-battle": { title: "Sumo Battle!", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/sumo-battle/", icon: "🎯", note: "Action", category: "Action", cardClass: "playtundra-card" },
  "playtundra-skate-hooligans": { title: "Skate Hooligans", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/skate-hooligans/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-relic-runway": { title: "Relic Runway", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/relic-runway/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-yeti-sensation": { title: "Yeti Sensation", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/yeti-sensation/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-giant-snowball-rush": { title: "Giant Snowball Rush", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/giant-snowball-rush/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-temple-quest": { title: "Temple Quest", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/temple-quest/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-super-onion-boy": { title: "Super Onion Boy", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/super-onion-boy/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-jumper-jam": { title: "Jumper Jam", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/jumper-jam/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-dune-surfer-3d": { title: "Dune Surfer 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dune-surfer-3d/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-one-bit": { title: "One Bit", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/one-bit/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-tap-tap-reloaded": { title: "Tap Tap Reloaded", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tap-tap-reloaded/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-obby-tsunami-runner": { title: "Obby Tsunami Runner", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/obby-tsunami-runner/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-obby-plus-1-double-jump": { title: "Obby +1 Double Jump", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/obby-plus-1-double-jump/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-snake-run-eat-grow": { title: "Snake Run: Eat & Grow", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/snake-run-eat-grow/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-block-blaster": { title: "Block Blaster", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/block-blaster/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-flying-sahur": { title: "Flying Sahur", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/flying-sahur/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-paws-up": { title: "Paws Up", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/paws-up/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-mini-switcher": { title: "Mini Switcher", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mini-switcher/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-slope-city": { title: "Slope City", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/slope-city/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-slope-bike": { title: "Slope Bike", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/slope-bike/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-battle-wheels": { title: "Battle Wheels", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/battle-wheels/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-slope-city-2": { title: "Slope City 2", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/slope-city-2/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-slope-extra": { title: "Slope Extra", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/slope-extra/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-neon-ball-slope": { title: "Neon Ball Slope", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/neon-ball-slope/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-ragdoll-rush-3d": { title: "Ragdoll Rush 3D: Sky Race", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ragdoll-rush-3d/", icon: "🕹️", note: "Arcade & Runners", category: "Arcade & Runners", cardClass: "playtundra-card" },
  "playtundra-worms-zone": { title: "Worms Zone: A Slithery Snake", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/worms-zone/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-warfare-area": { title: "Warfare Area", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/warfare-area/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-masked-forces": { title: "Masked Forces", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/masked-forces/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-ultimate-strike": { title: "Ultimate Strike", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ultimate-strike/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-urban-sniper-multiplayer-2": { title: "Urban Sniper Multiplayer 2", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/urban-sniper-multiplayer-2/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-doodlecube-io": { title: "DoodleCube.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/doodlecube-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-wormate-sweetness": { title: "Wormate Sweetness", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/wormate-sweetness/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-basketball-io": { title: "Basketball.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/basketball-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-fallingman-io-winter": { title: "Fallingman.io: Winter Seasons", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/fallingman-io-winter/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-evowarriors-fun": { title: "EvoWarriors.fun", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/evowarriors-fun/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-wormo-io": { title: "Wormo.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/wormo-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-quiz-runner-io": { title: "Quiz Runner.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/quiz-runner-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-tung-sahur-io": { title: "Tung Sahur IO", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tung-sahur-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-color-path-io": { title: "Color Path IO", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/color-path-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-shark-io": { title: "Shark io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/shark-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-football-io": { title: "Football.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/football-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-multiplayer-pong-time": { title: "Multiplayer Pong Time", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/multiplayer-pong-time/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-slither-dragon-io": { title: "Slither Dragon.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/slither-dragon-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-shooterz-io": { title: "ShooterZ.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/shooterz-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-territory-io": { title: "Territory.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/territory-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-snowball-io": { title: "SnowBall.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/snowball-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-goal-io": { title: "Goal.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/goal-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-sumo-smash": { title: "Sumo Smash!", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/sumo-smash/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-swordbattle-io": { title: "Swordbattle.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/swordbattle-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-kingdom-of-pixels": { title: "Kingdom of Pixels", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/kingdom-of-pixels/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-jump-race": { title: "Jump Race", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/jump-race/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-masked-forces-crazy-mode": { title: "Masked Forces Crazy Mode", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/masked-forces-crazy-mode/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-limax-io": { title: "Limax.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/limax-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-ducklings-io": { title: "Ducklings.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ducklings-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-speen": { title: "Speen", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/speen/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-oib-io": { title: "Oib.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/oib-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-koxo-io": { title: "Koxo.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/koxo-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-masked-forces-dark-forest": { title: "Masked Forces: Dark Forest", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/masked-forces-dark-forest/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-wormroyale-io": { title: "WormRoyale.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/wormroyale-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-wormania-io": { title: "Wormania.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/wormania-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-carhit-io": { title: "CarHit.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/carhit-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-knight-arena-io": { title: "Knight Arena.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/knight-arena-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-triset-io": { title: "Triset.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/triset-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-superspin-io": { title: "SuperSpin.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/superspin-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-wormeat-io": { title: "Wormeat.io", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/wormeat-io/", icon: "🌐", note: ".io & Multiplayer", category: ".io & Multiplayer", cardClass: "playtundra-card" },
  "playtundra-hero-rescue-puzzle": { title: "Hero Rescue Puzzle", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/hero-rescue-puzzle/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-love-balls-2d": { title: "Love Balls 2D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/love-balls-2d/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-alchemist-lab-jewel-crush": { title: "Alchemist Lab: Jewel Crush", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/alchemist-lab-jewel-crush/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-zumba-mania": { title: "Zumba Mania", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/zumba-mania/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-correct-math": { title: "Correct Math", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/correct-math/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-pixel-art-color-by-numbers": { title: "Pixel Art: Color by Numbers", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/pixel-art-color-by-numbers/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-the-panda-brother": { title: "The Panda Brother", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/the-panda-brother/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-save-the-dummy": { title: "Save the Dummy", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/save-the-dummy/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-color-turntable": { title: "ColorTurntable", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/color-turntable/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-sokoban-master": { title: "Sokoban Master", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/sokoban-master/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-icymatch": { title: "IcyMatch", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/icymatch/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-cocoon-crossing": { title: "Cocoon Crossing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/cocoon-crossing/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-word-master-puzzle": { title: "Word Master Puzzle", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/word-master-puzzle/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-mahjong-tiles-match": { title: "Mahjong Tiles Match", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mahjong-tiles-match/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-dominoes-classic-duel": { title: "Dominoes Classic Duel", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dominoes-classic-duel/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-bricks-breaker": { title: "Bricks Breaker", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/bricks-breaker/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-rolling-cubes-3d": { title: "Rolling Cubes", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/rolling-cubes-3d/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-nexus-3d": { title: "Nexus 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/nexus-3d/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-pixelblock": { title: "PixelBlock", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/pixelblock/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-paletto": { title: "Paletto", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/paletto/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-math-squares": { title: "Math Squares", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/math-squares/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-mischievous-pairs": { title: "Mischievous Pairs", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mischievous-pairs/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-dama-stars": { title: "Dama Stars", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dama-stars/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-parking-puzzle": { title: "Parking Puzzle", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/parking-puzzle/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-difference-find-master": { title: "Difference Find Master", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/difference-find-master/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-maze-tower": { title: "Maze Tower", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/maze-tower/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-worm-path": { title: "Worm Path", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/worm-path/", icon: "🧩", note: "Puzzle & Brain", category: "Puzzle & Brain", cardClass: "playtundra-card" },
  "playtundra-russian-taz-driving-2": { title: "Russian Taz Driving 2", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/russian-taz-driving-2/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-superbike-hero": { title: "Superbike Hero", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/superbike-hero/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-grand-prix-hero": { title: "Grand Prix Hero", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/grand-prix-hero/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-car-eats-car-winter-adventure": { title: "Car Eats Car: Winter Adventure", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/car-eats-car-winter-adventure/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-city-bike-stunt-2": { title: "City Bike Stunt 2", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/city-bike-stunt-2/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-truck-parking-2": { title: "Truck Parking 2", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/truck-parking-2/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-moto-x3m-original": { title: "Moto X3M Original", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/moto-x3m-original/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-stock-car-hero": { title: "Stock Car Hero", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/stock-car-hero/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-urban-derby-stunt-drift": { title: "Urban Derby: Stunt & Drift", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/urban-derby-stunt-drift/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-grand-city-stunts": { title: "Grand City Stunts", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/grand-city-stunts/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-two-bike-stunts": { title: "Two Bike Stunts", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/two-bike-stunts/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-moto-x3m-winter": { title: "Moto X3M Winter", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/moto-x3m-winter/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-ultimate-flying-car": { title: "Ultimate Flying Car", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ultimate-flying-car/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-fly-car-stunt-5": { title: "Fly Car Stunt 5", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/fly-car-stunt-5/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-city-car-stunt-4": { title: "City Car Stunt 4", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/city-car-stunt-4/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-city-car-stunt-3": { title: "City Car Stunt 3", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/city-car-stunt-3/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-sky-city-riders": { title: "Sky City Riders", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/sky-city-riders/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-port-bike-stunt": { title: "Port Bike Stunt", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/port-bike-stunt/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-night-city-racing": { title: "Night City Racing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/night-city-racing/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-mega-ramp-stunt-racing-3d": { title: "Mega Ramp Stunt Racing 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mega-ramp-stunt-racing-3d/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-slope-racing": { title: "Slope Racing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/slope-racing/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-highway-racers": { title: "Highway Racers", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/highway-racers/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-drift-city": { title: "Drift City", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/drift-city/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-super-traffic-racer": { title: "Super Traffic Racer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/super-traffic-racer/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-crazy-buggy-demolition-derby": { title: "Crazy Buggy Demolition Derby", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/crazy-buggy-demolition-derby/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-bus-crash-stunts-2": { title: "Bus Crash Stunts 2", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/bus-crash-stunts-2/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-car-eats-car-dungeon-adventure": { title: "Car Eats Car: Dungeon Adventure", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/car-eats-car-dungeon-adventure/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-snow-ball-race": { title: "Snow Ball Race", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/snow-ball-race/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-moto-x3m-pool-party": { title: "Moto X3M Pool Party", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/moto-x3m-pool-party/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-moto-x3m-halloween": { title: "Moto X3M Halloween", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/moto-x3m-halloween/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-dirt-bike-max-duel": { title: "Dirt Bike Max Duel", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dirt-bike-max-duel/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-pixel-kart": { title: "Pixel Kart", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/pixel-kart/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-dirt-bike-racing-duel": { title: "Dirt Bike Racing Duel", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dirt-bike-racing-duel/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-mountain-climb-racing": { title: "Mountain Climb Racing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mountain-climb-racing/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-dirt-bike-racing-adventure": { title: "Dirt Bike Racing Adventure", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dirt-bike-racing-adventure/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-dirt-bikes-rally": { title: "Dirt Bikes Rally", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dirt-bikes-rally/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-mtb-downhill-extreme": { title: "MTB DownHill Extreme", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mtb-downhill-extreme/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-car-madness-3d": { title: "Car Madness 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/car-madness-3d/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-2d-car-racing": { title: "2D Car Racing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/2d-car-racing/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-low-poly-car-racing": { title: "Low Poly Car Racing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/low-poly-car-racing/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-neon-city-drift-racing": { title: "Neon City Drift Racing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/neon-city-drift-racing/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-tug-pull-crash-challenge": { title: "Tug Pull Crash Challenge", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tug-pull-crash-challenge/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-go-kart-racing": { title: "Go Kart Racing Game", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/go-kart-racing/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-mr-racer-car-racing": { title: "MR RACER: Car Racing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mr-racer-car-racing/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-bike-rush-xtreme": { title: "Bike Rush Xtreme", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/bike-rush-xtreme/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-snowfall-racing-championship": { title: "Snowfall Racing Championship", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/snowfall-racing-championship/", icon: "🏎️", note: "Racing & Driving", category: "Racing & Driving", cardClass: "playtundra-card" },
  "playtundra-basket-random": { title: "Basket Random", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/basket-random/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-soccer-random": { title: "Soccer Random", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/soccer-random/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-dunkers-fight": { title: "Dunkers Fight", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dunkers-fight/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-sports-minibattles": { title: "Sports MiniBattles", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/sports-minibattles/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-football-heads": { title: "Football Heads", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/football-heads/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-home-run-master": { title: "Home Run Master", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/home-run-master/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-mini-boxing-final-round": { title: "Mini Boxing: Final Round", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mini-boxing-final-round/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-basketball-allstars": { title: "Basketball AllStars", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/basketball-allstars/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-toy-soccer-cup": { title: "Toy Soccer Cup", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/toy-soccer-cup/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-epic-basketball": { title: "Epic Basketball", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/epic-basketball/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-tennis-hero": { title: "Tennis Hero", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tennis-hero/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-athletics-hero": { title: "Athletics Hero", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/athletics-hero/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-skateboard-city": { title: "Skateboard City", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/skateboard-city/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-bball-pro-league": { title: "BBall Pro League", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/bball-pro-league/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-sprinter-heroes": { title: "Sprinter Heroes", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/sprinter-heroes/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-mini-tennis-club": { title: "Mini Tennis Club", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mini-tennis-club/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-darts-501": { title: "Darts 501", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/darts-501/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-archery-world-tour": { title: "Archery World Tour", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/archery-world-tour/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-basketball-league": { title: "Basketball League", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/basketball-league/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-basketball-strike": { title: "Basketball Strike", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/basketball-strike/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-penalty-kick-target": { title: "Penalty Kick Target", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/penalty-kick-target/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-bicycle-kick-master": { title: "Bicycle Kick Master", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/bicycle-kick-master/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-super-goal-keeper": { title: "Super Goal Keeper", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/super-goal-keeper/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-goalshot": { title: "GoalShot", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/goalshot/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-aimball": { title: "AIMBALL", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/aimball/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-billiard-challenge": { title: "Billiard Challenge", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/billiard-challenge/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-free-kick-challenge": { title: "Free Kick Challenge", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/free-kick-challenge/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-disc-golf-master": { title: "Disc Golf Master", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/disc-golf-master/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-volley-random": { title: "Volley Random", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/volley-random/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-boxing-random": { title: "Boxing Random", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/boxing-random/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-basketball-legends": { title: "Basketball Legends", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/basketball-legends/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-football-legends": { title: "Football Legends", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/football-legends/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-volley-lama": { title: "Volley Lama", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/volley-lama/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-1-on-1-soccer": { title: "1 On 1 Soccer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/1-on-1-soccer/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-dodgeball-3d": { title: "Dodgeball 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dodgeball-3d/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-ice-hockey": { title: "Ice Hockey", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ice-hockey/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-pixel-sumo": { title: "Pixel Sumo", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/pixel-sumo/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-mini-soccer": { title: "Mini Soccer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mini-soccer/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-beach-volleyball": { title: "Beach Volleyball", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/beach-volleyball/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-coconut-volley": { title: "Coconut Volley", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/coconut-volley/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-pocket-league-3d": { title: "Pocket League 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/pocket-league-3d/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-nine-eight-and-snooker": { title: "Nine, Eight and Snooker", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/nine-eight-and-snooker/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-hurdles-heroes": { title: "Hurdles Heroes", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/hurdles-heroes/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-ring-master-legends": { title: "Ring Master Legends", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ring-master-legends/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-ski-legends": { title: "Ski Legends", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ski-legends/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-cubic-tennis": { title: "Cubic Tennis", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/cubic-tennis/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-pocket-tennis": { title: "Pocket Tennis", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/pocket-tennis/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-crazy-table-tennis": { title: "Crazy Table Tennis", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/crazy-table-tennis/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-drunk-basket": { title: "Drunk Basket", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/drunk-basket/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-soccer-pixel": { title: "Soccer Pixel", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/soccer-pixel/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-battle-soccer-arena": { title: "Battle Soccer Arena", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/battle-soccer-arena/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-cuesoccer": { title: "CueSoccer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/cuesoccer/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-dart-duell-timing-champion": { title: "Dart Duell: Timing Champion", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/dart-duell-timing-champion/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-3d-mini-curling": { title: "3D Mini Curling", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/3d-mini-curling/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-blaze-ball-showdown": { title: "Blaze Ball Showdown", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/blaze-ball-showdown/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-darts-pro-multiplayer": { title: "Darts Pro Multiplayer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/darts-pro-multiplayer/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-glow-darts": { title: "Glow Darts", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/glow-darts/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-soccer-duel": { title: "Soccer Duel", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/soccer-duel/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-finger-soccer": { title: "Finger Soccer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/finger-soccer/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-basketball-shooter": { title: "Basketball Shooter", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/basketball-shooter/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-air-hockey-cup": { title: "Air Hockey Cup", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/air-hockey-cup/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-soccer-battle-online": { title: "Soccer Battle Online", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/soccer-battle-online/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-penalty-challenge-multiplayer": { title: "Penalty Challenge Multiplayer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/penalty-challenge-multiplayer/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-basketball-park": { title: "Basketball Park", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/basketball-park/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-puppet-hockey": { title: "Puppet Hockey", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/puppet-hockey/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-puppet-hockey-battle": { title: "Puppet Hockey Battle", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/puppet-hockey-battle/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-mini-boxing": { title: "Mini Boxing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mini-boxing/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-basketball-simulator-3d": { title: "Basketball Simulator 3D", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/basketball-simulator-3d/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-100-meters-race": { title: "100 Meters Race", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/100-meters-race/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-king-boxing-2024": { title: "King Boxing 2024", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/king-boxing-2024/", icon: "🏆", note: "Sports", category: "Sports", cardClass: "playtundra-card" },
  "playtundra-12-minibattles": { title: "12 MiniBattles", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/12-minibattles/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-minibattles-2-6-players": { title: "MiniBattles: 2–6 Players", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/minibattles-2-6-players/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-drunken-boxing": { title: "Drunken Boxing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/drunken-boxing/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-drunken-duel": { title: "Drunken Duel", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/drunken-duel/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-stick-duel-medieval-wars": { title: "Stick Duel: Medieval Wars", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/stick-duel-medieval-wars/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-roshambo": { title: "Roshambo", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/roshambo/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-drunken-duel-2": { title: "Drunken Duel 2", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/drunken-duel-2/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-duel-of-builders": { title: "Duel of Builders", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/duel-of-builders/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-obby-rainbow-parkour-two-player": { title: "Obby Rainbow Parkour: Two Player", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/obby-rainbow-parkour-two-player/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-hexa-two": { title: "Hexa Two", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/hexa-two/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-wiggly-worm-race": { title: "Wiggly Worm Race", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/wiggly-worm-race/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-tennis-master": { title: "Tennis Master", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tennis-master/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-two-punk-racing-2": { title: "Two Punk Racing 2", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/two-punk-racing-2/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-ragdoll-soccer": { title: "Ragdoll Soccer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ragdoll-soccer/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-minicars-soccer": { title: "Minicars Soccer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/minicars-soccer/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-fish-soccer": { title: "Fish Soccer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/fish-soccer/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-air-hockey-glow": { title: "Air Hockey Glow", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/air-hockey-glow/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-table-pong": { title: "Table Pong", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/table-pong/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-checkers": { title: "Checkers", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/checkers/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-backgammonia": { title: "Backgammonia", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/backgammonia/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-gang-fall-party": { title: "Gang Fall Party", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/gang-fall-party/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-nightmare-runners": { title: "Nightmare Runners", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/nightmare-runners/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-black-and-white-stickman": { title: "Black and White Stickman", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/black-and-white-stickman/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-neon-slimes": { title: "Neon Slimes", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/neon-slimes/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-rocketcar-cup": { title: "Rocketcar Cup", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/rocketcar-cup/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-foosball-funny": { title: "Foosball Funny", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/foosball-funny/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-tug-the-table-classic": { title: "Tug The Table Classic", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tug-the-table-classic/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-wrestle-online": { title: "Wrestle Online", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/wrestle-online/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-neon-ping-pong": { title: "Neon Ping Pong", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/neon-ping-pong/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-neon-hockey-2": { title: "Neon Hockey 2", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/neon-hockey-2/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-glowit-two-players": { title: "Glowit: Two Players", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/glowit-two-players/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-helifight": { title: "Helifight", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/helifight/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-superbattle": { title: "SuperBattle", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/superbattle/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-mini-duels-battle": { title: "Mini Duels Battle", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/mini-duels-battle/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-ragdoll-arena-2-player": { title: "Ragdoll Arena 2 Player", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ragdoll-arena-2-player/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-wobbly-boxing": { title: "Wobbly Boxing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/wobbly-boxing/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-newpong-multiplayer": { title: "Newpong Multiplayer", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/newpong-multiplayer/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-drunken-boxing-ultimate": { title: "Drunken Boxing: Ultimate", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/drunken-boxing-ultimate/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-drunken-slap-wars": { title: "Drunken Slap Wars", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/drunken-slap-wars/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-fighter-legends-duo": { title: "Fighter Legends Duo", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/fighter-legends-duo/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-prison-twins": { title: "Prison Twins", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/prison-twins/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-duo-summerbombs": { title: "DUO SummerBombs", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/duo-summerbombs/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-pixel-pulling": { title: "Pixel Pulling", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/pixel-pulling/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-truck-slam": { title: "Truck Slam", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/truck-slam/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-table-tug-online": { title: "Table Tug Online", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/table-tug-online/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-rope-pull": { title: "Rope Pull", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/rope-pull/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-extreme-thumb-wars": { title: "Extreme Thumb Wars", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/extreme-thumb-wars/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-egg-challenge": { title: "Egg Challenge", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/egg-challenge/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-rabbit-punch-rabbit": { title: "Rabbit Punch Rabbit", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/rabbit-punch-rabbit/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-four-square-ii": { title: "Four Square II", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/four-square-ii/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-ragdoll-duel-boxing": { title: "Ragdoll Duel: Boxing", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ragdoll-duel-boxing/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-boxing-gang-stars": { title: "Boxing Gang Stars", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/boxing-gang-stars/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-table-football-soccer": { title: "Table Football", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/table-football-soccer/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-tank-war-two-player": { title: "Tank War Two Player", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tank-war-two-player/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-hole-upper-for-2-players": { title: "Hole Upper For 2 Players", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/hole-upper-for-2-players/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-tankbattle-2-player": { title: "TankBattle 2 Player", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tankbattle-2-player/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-africa-jeep-race": { title: "Africa Jeep Race", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/africa-jeep-race/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-3d-formula-racing-pro-edition": { title: "3D Formula Racing: Pro Edition", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/3d-formula-racing-pro-edition/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-battle-tung-tung-sahur-2-player": { title: "Battle Tung Tung Sahur 2 Player", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/battle-tung-tung-sahur-2-player/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-ragdoll-duel-2p": { title: "Ragdoll Duel 2P", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ragdoll-duel-2p/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-house-of-hazards-online": { title: "House of Hazards Online", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/house-of-hazards-online/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-ragdoll-gangs": { title: "Ragdoll Gangs", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/ragdoll-gangs/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-tank-war-ice-age": { title: "Tank War Ice Age", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/tank-war-ice-age/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-flappy-helicopter-2-player": { title: "Flappy Helicopter 2 Player", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/flappy-helicopter-2-player/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
  "playtundra-cyber-city-driver": { title: "Cyber City Driver", sourceLabel: "PLAYTUNDRA", url: "https://www.playtundra.com/cyber-city-driver/", icon: "🎮", note: "2 Player", category: "2 Player", cardClass: "playtundra-card" },
});

const FAVORITES_STORAGE_KEY = 'playground-favorites-v1';
const RECENTS_STORAGE_KEY = 'playground-recents-v1';
const gameSearch = document.querySelector('#game-search');
const catalogSummary = document.querySelector('#catalog-summary');
const catalogEmpty = document.querySelector('#catalog-empty');
const allCount = document.querySelector('#all-count');
const favoritesCount = document.querySelector('#favorites-count');
const recentCount = document.querySelector('#recent-count');
const filterButtons = document.querySelectorAll('[data-filter]');
let activeFilter = 'all';

function loadSavedList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value.filter((item) => typeof item === 'string' && gameOptions[item]) : [];
  } catch {
    return [];
  }
}

const favoriteKeys = new Set(loadSavedList(FAVORITES_STORAGE_KEY));
let recentKeys = loadSavedList(RECENTS_STORAGE_KEY).slice(0, 20);

function saveSavedList(key, values) {
  try {
    localStorage.setItem(key, JSON.stringify(values));
  } catch {
    // The catalog still works when browser storage is unavailable.
  }
}

function getVisibleGames() {
  const query = gameSearch.value.trim().toLocaleLowerCase();
  let entries = Object.entries(gameOptions);
  if (activeFilter === 'favorites') entries = entries.filter(([key]) => favoriteKeys.has(key));
  if (activeFilter === 'recent') {
    entries = recentKeys
      .filter((key) => Boolean(gameOptions[key]))
      .map((key) => [key, gameOptions[key]]);
  }
  if (!query) return entries;
  return entries.filter(([, game]) => [game.title, game.note, game.category, game.sourceLabel]
    .filter(Boolean).join(' ').toLocaleLowerCase().includes(query));
}

function updateCatalogCounts() {
  allCount.textContent = String(Object.keys(gameOptions).length);
  favoritesCount.textContent = String(favoriteKeys.size);
  recentCount.textContent = String(recentKeys.length);
}

function renderGameCards() {
  const entries = getVisibleGames();
  gameGrid.replaceChildren();
  entries.forEach(([key, game]) => {
    const card = document.createElement('article');
    card.className = `game-card ${game.cardClass}`;
    const playButton = document.createElement('button');
    playButton.className = 'game-card-play';
    playButton.type = 'button';
    playButton.setAttribute('aria-label', `Play ${game.title}`);
    const icon = document.createElement('span');
    icon.className = 'game-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = game.icon;
    const title = document.createElement('span');
    title.className = 'game-card-title';
    title.textContent = game.title;
    const note = document.createElement('span');
    note.className = 'game-card-note';
    note.textContent = game.category || game.note;
    const arrow = document.createElement('span');
    arrow.className = 'card-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    playButton.append(icon, title, note, arrow);
    playButton.addEventListener('click', () => showGame(key));
    const favoriteButton = document.createElement('button');
    favoriteButton.className = 'favorite-toggle';
    favoriteButton.type = 'button';
    favoriteButton.textContent = favoriteKeys.has(key) ? '♥' : '♡';
    favoriteButton.setAttribute('aria-pressed', String(favoriteKeys.has(key)));
    favoriteButton.setAttribute('aria-label', favoriteKeys.has(key) ? `Remove ${game.title} from favorites` : `Add ${game.title} to favorites`);
    favoriteButton.addEventListener('click', () => {
      if (favoriteKeys.has(key)) favoriteKeys.delete(key);
      else favoriteKeys.add(key);
      saveSavedList(FAVORITES_STORAGE_KEY, [...favoriteKeys]);
      renderGameCards();
    });
    card.append(playButton, favoriteButton);
    gameGrid.append(card);
  });
  updateCatalogCounts();
  catalogSummary.textContent = gameSearch.value.trim()
    ? `Showing ${entries.length} of ${Object.keys(gameOptions).length} games`
    : `${entries.length} games`;
  catalogEmpty.hidden = entries.length > 0;
  if (!entries.length) {
    catalogEmpty.textContent = activeFilter === 'favorites' && !favoriteKeys.size
      ? 'Tap a heart on any game to save it here.'
      : activeFilter === 'recent' && !recentKeys.length
        ? 'Games you open will appear here.'
        : 'No games match your search.';
  }
}

gameSearch.addEventListener('input', renderGameCards);
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filter) => filter.classList.toggle('active', filter === button));
    renderGameCards();
  });
});

const homeScreen = document.querySelector('#home-screen');
const playerScreen = document.querySelector('#player-screen');
const gameName = document.querySelector('#game-name');
const gameType = document.querySelector('#game-type');
const gamePlayer = document.querySelector('#game-player');
const gameFrame = document.querySelector('#game-frame');
const directLink = document.querySelector('#direct-link');
const gameAttribution = document.querySelector('#game-attribution');
const gameGrid = document.querySelector('#game-grid');
const featuredGames = document.querySelector('.featured-games');
const screenTabs = document.querySelectorAll('[data-screen]');
const homeLink = document.querySelector('[data-home-link]');
let currentGame = null;

function setActiveScreen(screen) {
  screenTabs.forEach((tab) => {
    const active = tab.dataset.screen === screen;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
}

featuredGames?.querySelectorAll('[data-game]').forEach((button) => {
  button.addEventListener('click', () => showGame(button.dataset.game));
});

function showHome() {
  setActiveScreen('home');
  homeScreen.classList.remove('hidden');
  playerScreen.classList.add('hidden');
  directLink.hidden = true;
}

function showGame(key) {
  const game = gameOptions[key];
  if (!game) return;
  recentKeys = [key, ...recentKeys.filter((recentKey) => recentKey !== key)].slice(0, 20);
  saveSavedList(RECENTS_STORAGE_KEY, recentKeys);
  renderGameCards();

  setActiveScreen(key);
  homeScreen.classList.add('hidden');
  playerScreen.classList.remove('hidden');
  directLink.hidden = false;
  gameAttribution.hidden = key !== 'polytrack';
  directLink.href = game.url;
  directLink.textContent = 'Open directly ↗';
  gameName.textContent = game.title;
  gameType.textContent = game.sourceLabel;
  gamePlayer.setAttribute('aria-label', `${game.title} game`);
  gameFrame.title = game.title;

  if (currentGame !== key) {
    gameFrame.src = game.url;
    currentGame = key;
  }
}


screenTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (tab.dataset.screen === 'home') showHome();
    else showGame(tab.dataset.screen);
  });
});

homeLink.addEventListener('click', (event) => {
  event.preventDefault();
  showHome();
});

renderGameCards();
showHome();
