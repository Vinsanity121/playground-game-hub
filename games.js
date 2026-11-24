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
});


Object.assign(gameOptions, {
  "aestro-oh-hi": { title: "0h h1", sourceLabel: "AESTRO", url: "https://aestro.page/games/oh-hi/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-solitaire": { title: "Klondike Solitaire", sourceLabel: "AESTRO", url: "https://aestro.page/games/solitaire/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-javascript-tetris": { title: "JavaScript Tetris", sourceLabel: "AESTRO", url: "https://aestro.page/games/javascript-tetris/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-tower-building": { title: "Tower Building", sourceLabel: "AESTRO", url: "https://aestro.page/games/tower-building/", icon: "🛡️", note: "Strategy", category: "Strategy", cardClass: "aestro-card" },
  "aestro-radius-raid": { title: "Radius Raid", sourceLabel: "AESTRO", url: "https://aestro.page/games/radius-raid/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-pixel-hop-twins": { title: "Pixel Hop Twins", sourceLabel: "AESTRO", url: "https://aestro.page/games/pixel-hop-twins/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-asteroids": { title: "Asteroids", sourceLabel: "AESTRO", url: "https://aestro.page/games/asteroids/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-brick-breaker": { title: "Brick Breaker", sourceLabel: "AESTRO", url: "https://aestro.page/games/brick-breaker/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-bubble-pop": { title: "Bubble Pop", sourceLabel: "AESTRO", url: "https://aestro.page/games/bubble-pop/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-cash-king": { title: "Cash King", sourceLabel: "AESTRO", url: "https://aestro.page/games/cash-king/", icon: "✨", note: "Casual", category: "Casual", cardClass: "aestro-card" },
  "aestro-color-click": { title: "Color Click", sourceLabel: "AESTRO", url: "https://aestro.page/games/color-click/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-connect-four": { title: "Connect Four", sourceLabel: "AESTRO", url: "https://aestro.page/games/connect-four/", icon: "🎲", note: "Board & Table", category: "Board & Table", cardClass: "aestro-card" },
  "aestro-flappy-flight": { title: "Flappy Flight", sourceLabel: "AESTRO", url: "https://aestro.page/games/flappy-flight/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-frog-dash": { title: "Frog Dash", sourceLabel: "AESTRO", url: "https://aestro.page/games/frog-dash/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-number-guess": { title: "Number Guess", sourceLabel: "AESTRO", url: "https://aestro.page/games/number-guess/", icon: "🧠", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-hangman": { title: "Hangman", sourceLabel: "AESTRO", url: "https://aestro.page/games/hangman/", icon: "🔤", note: "Word", category: "Word", cardClass: "aestro-card" },
  "aestro-memory-match": { title: "Memory Match", sourceLabel: "AESTRO", url: "https://aestro.page/games/memory-match/", icon: "🧠", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-minesweeper": { title: "Minesweeper", sourceLabel: "AESTRO", url: "https://aestro.page/games/minesweeper/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-number-memory": { title: "Number Memory", sourceLabel: "AESTRO", url: "https://aestro.page/games/number-memory/", icon: "🧠", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-pong": { title: "Pong", sourceLabel: "AESTRO", url: "https://aestro.page/games/pong/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-reaction-test": { title: "Reaction Test", sourceLabel: "AESTRO", url: "https://aestro.page/games/reaction-test/", icon: "🧠", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-rock-paper-scissors": { title: "Rock Paper Scissors", sourceLabel: "AESTRO", url: "https://aestro.page/games/rock-paper-scissors/", icon: "✨", note: "Casual", category: "Casual", cardClass: "aestro-card" },
  "aestro-simon-says": { title: "Simon Says", sourceLabel: "AESTRO", url: "https://aestro.page/games/simon-says/", icon: "🧠", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-snake": { title: "Snake", sourceLabel: "AESTRO", url: "https://aestro.page/games/snake/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-sudoku": { title: "Sudoku", sourceLabel: "AESTRO", url: "https://aestro.page/games/sudoku/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-tic-tac-toe": { title: "Tic Tac Toe", sourceLabel: "AESTRO", url: "https://aestro.page/games/tic-tac-toe/", icon: "🎲", note: "Board & Table", category: "Board & Table", cardClass: "aestro-card" },
  "aestro-whack-a-mole": { title: "Whack-a-Mole", sourceLabel: "AESTRO", url: "https://aestro.page/games/whack-a-mole/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-word-find": { title: "Word Find", sourceLabel: "AESTRO", url: "https://aestro.page/games/word-find/", icon: "🔤", note: "Word", category: "Word", cardClass: "aestro-card" },
  "aestro-wordle": { title: "Wordle", sourceLabel: "AESTRO", url: "https://aestro.page/games/wordle/", icon: "🔤", note: "Word", category: "Word", cardClass: "aestro-card" },
  "aestro-brick-it": { title: "Brick It", sourceLabel: "AESTRO", url: "https://aestro.page/games/brick-it/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-bounce-it": { title: "Bounce It", sourceLabel: "AESTRO", url: "https://aestro.page/games/bounce-it/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-flood-it": { title: "Flood It", sourceLabel: "AESTRO", url: "https://aestro.page/games/flood-it/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-snake-it": { title: "Snake It", sourceLabel: "AESTRO", url: "https://aestro.page/games/snake-it/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-sweep-it": { title: "Sweep It", sourceLabel: "AESTRO", url: "https://aestro.page/games/sweep-it/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-1942": { title: "1942", sourceLabel: "AESTRO", url: "https://aestro.page/games/1942/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-jumpy": { title: "Jumpy!", sourceLabel: "AESTRO", url: "https://aestro.page/games/jumpy/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-phaser-shooter": { title: "Phaser Shooter", sourceLabel: "AESTRO", url: "https://aestro.page/games/phaser-shooter/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-othello": { title: "Othello", sourceLabel: "AESTRO", url: "https://aestro.page/games/othello/", icon: "🎲", note: "Board & Table", category: "Board & Table", cardClass: "aestro-card" },
  "aestro-endless-run": { title: "Endless Run", sourceLabel: "AESTRO", url: "https://aestro.page/games/endless-run/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-air-hockey": { title: "Air Hockey", sourceLabel: "AESTRO", url: "https://aestro.page/games/air-hockey/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-all-fives": { title: "All Fives Dominoes", sourceLabel: "AESTRO", url: "https://aestro.page/games/all-fives/", icon: "🎲", note: "Board & Table", category: "Board & Table", cardClass: "aestro-card" },
  "aestro-anti-pacman": { title: "Anti-Pacman", sourceLabel: "AESTRO", url: "https://aestro.page/games/anti-pacman/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-artillery": { title: "Artillery", sourceLabel: "AESTRO", url: "https://aestro.page/games/artillery/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-battleboat": { title: "Battleboat", sourceLabel: "AESTRO", url: "https://aestro.page/games/battleboat/", icon: "🎲", note: "Board & Table", category: "Board & Table", cardClass: "aestro-card" },
  "aestro-black-hole-square": { title: "Black Hole Square", sourceLabel: "AESTRO", url: "https://aestro.page/games/black-hole-square/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-bombergirl": { title: "Bombergirl", sourceLabel: "AESTRO", url: "https://aestro.page/games/bombergirl/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-bullet-hell": { title: "Bullet Hell", sourceLabel: "AESTRO", url: "https://aestro.page/games/bullet-hell/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-checkers": { title: "Checkers", sourceLabel: "AESTRO", url: "https://aestro.page/games/checkers/", icon: "🎲", note: "Board & Table", category: "Board & Table", cardClass: "aestro-card" },
  "aestro-chess": { title: "Chess", sourceLabel: "AESTRO", url: "https://aestro.page/games/chess/", icon: "🎲", note: "Board & Table", category: "Board & Table", cardClass: "aestro-card" },
  "aestro-cloud-hopper": { title: "Cloud Hopper", sourceLabel: "AESTRO", url: "https://aestro.page/games/cloud-hopper/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-crazy-racing": { title: "Crazy Racing", sourceLabel: "AESTRO", url: "https://aestro.page/games/crazy-racing/", icon: "🏎️", note: "Racing", category: "Racing", cardClass: "aestro-card" },
  "aestro-dust": { title: "Dust", sourceLabel: "AESTRO", url: "https://aestro.page/games/dust/", icon: "✨", note: "Casual", category: "Casual", cardClass: "aestro-card" },
  "aestro-factors-game": { title: "Factors", sourceLabel: "AESTRO", url: "https://aestro.page/games/factors-game/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-fruit-drop": { title: "Fruit Drop", sourceLabel: "AESTRO", url: "https://aestro.page/games/fruit-drop/", icon: "✨", note: "Casual", category: "Casual", cardClass: "aestro-card" },
  "aestro-gem-match": { title: "Gem Match", sourceLabel: "AESTRO", url: "https://aestro.page/games/gem-match/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-lights-out": { title: "Lights Out", sourceLabel: "AESTRO", url: "https://aestro.page/games/lights-out/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-missile-defense": { title: "Missile Defense", sourceLabel: "AESTRO", url: "https://aestro.page/games/missile-defense/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-pacman": { title: "Pac-Man", sourceLabel: "AESTRO", url: "https://aestro.page/games/pacman/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-pool": { title: "Pool", sourceLabel: "AESTRO", url: "https://aestro.page/games/pool/", icon: "🎲", note: "Board & Table", category: "Board & Table", cardClass: "aestro-card" },
  "aestro-lunar-lander": { title: "Lunar Lander", sourceLabel: "AESTRO", url: "https://aestro.page/games/lunar-lander/", icon: "✨", note: "Casual", category: "Casual", cardClass: "aestro-card" },
  "aestro-space-invaders": { title: "Space Invaders", sourceLabel: "AESTRO", url: "https://aestro.page/games/space-invaders/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-save-the-forest": { title: "Save the Forest", sourceLabel: "AESTRO", url: "https://aestro.page/games/save-the-forest/", icon: "✨", note: "Casual", category: "Casual", cardClass: "aestro-card" },
  "aestro-sokoban": { title: "Sokoban", sourceLabel: "AESTRO", url: "https://aestro.page/games/sokoban/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-speed-typer": { title: "Speed Typer", sourceLabel: "AESTRO", url: "https://aestro.page/games/speed-typer/", icon: "🔤", note: "Word", category: "Word", cardClass: "aestro-card" },
  "aestro-star-battle": { title: "Star Battle", sourceLabel: "AESTRO", url: "https://aestro.page/games/star-battle/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-taptaptap": { title: "Tap Tap Tap", sourceLabel: "AESTRO", url: "https://aestro.page/games/taptaptap/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-td13k": { title: "Tiny Star Defense", sourceLabel: "AESTRO", url: "https://aestro.page/games/td13k/", icon: "🛡️", note: "Strategy", category: "Strategy", cardClass: "aestro-card" },
  "aestro-tether": { title: "Tether", sourceLabel: "AESTRO", url: "https://aestro.page/games/tether/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-bounce-classic": { title: "Bounce", sourceLabel: "AESTRO", url: "https://aestro.page/games/bounce-classic/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "aestro-defender": { title: "Defender", sourceLabel: "AESTRO", url: "https://aestro.page/games/defender/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-puzzle-pieces": { title: "Puzzle Pieces", sourceLabel: "AESTRO", url: "https://aestro.page/games/puzzle-pieces/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-spider-solitaire": { title: "Spider Solitaire", sourceLabel: "AESTRO", url: "https://aestro.page/games/spider-solitaire/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-tower-defense": { title: "Tower Defense", sourceLabel: "AESTRO", url: "https://aestro.page/games/tower-defense/", icon: "🛡️", note: "Strategy", category: "Strategy", cardClass: "aestro-card" },
  "aestro-traffic-jam": { title: "Traffic Jam", sourceLabel: "AESTRO", url: "https://aestro.page/games/traffic-jam/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "aestro-card" },
  "aestro-underrun": { title: "Underrun", sourceLabel: "AESTRO", url: "https://aestro.page/games/underrun/", icon: "🎯", note: "Action", category: "Action", cardClass: "aestro-card" },
  "aestro-wordpluck": { title: "WordPluck", sourceLabel: "AESTRO", url: "https://aestro.page/games/wordpluck/", icon: "🔤", note: "Word", category: "Word", cardClass: "aestro-card" },
  "aestro-xonix": { title: "Xonix", sourceLabel: "AESTRO", url: "https://aestro.page/games/xonix/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "aestro-card" },
  "komyo-trap-the-cat": { title: "Trap the Cat", sourceLabel: "KOMYO", url: "https://komyo.online/games/trap-the-cat/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "komyo-card" },
  "komyo-tower-defense": { title: "Keep Defender", sourceLabel: "KOMYO", url: "https://komyo.online/games/tower-defense/", icon: "🎯", note: "Action", category: "Action", cardClass: "komyo-card" },
  "komyo-forcefield": { title: "Forcefield", sourceLabel: "KOMYO", url: "https://komyo.online/games/forcefield/", icon: "🎯", note: "Action", category: "Action", cardClass: "komyo-card" },
  "komyo-snake": { title: "Neon Snake", sourceLabel: "KOMYO", url: "https://komyo.online/games/snake/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "komyo-card" },
  "komyo-dusk-runner": { title: "Chrome Runner", sourceLabel: "KOMYO", url: "https://komyo.online/games/dusk-runner/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "komyo-card" },
  "komyo-frog-bonk": { title: "Frog Bonk", sourceLabel: "KOMYO", url: "https://komyo.online/games/frog-bonk/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "komyo-card" },
  "komyo-stacker": { title: "Stack", sourceLabel: "KOMYO", url: "https://komyo.online/games/stacker/", icon: "✨", note: "Casual", category: "Casual", cardClass: "komyo-card" },
  "komyo-flappy": { title: "Meadow Flyer", sourceLabel: "KOMYO", url: "https://komyo.online/games/flappy/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "komyo-card" },
  "komyo-aim-trainer": { title: "Range", sourceLabel: "KOMYO", url: "https://komyo.online/games/aim-trainer/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "komyo-card" },
  "komyo-type-siege": { title: "Type Siege", sourceLabel: "KOMYO", url: "https://komyo.online/games/type-siege/", icon: "🕹️", note: "Arcade", category: "Arcade", cardClass: "komyo-card" },
  "komyo-floodgate": { title: "Floodgate", sourceLabel: "KOMYO", url: "https://komyo.online/games/floodgate/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "komyo-card" },
  "komyo-mirror-maze": { title: "Mirror Maze", sourceLabel: "KOMYO", url: "https://komyo.online/games/mirror-maze/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "komyo-card" },
  "komyo-balloon-pop": { title: "Balloon Pop", sourceLabel: "KOMYO", url: "https://komyo.online/games/balloon-pop/", icon: "✨", note: "Casual", category: "Casual", cardClass: "komyo-card" },
  "komyo-critter-match": { title: "Critter Match", sourceLabel: "KOMYO", url: "https://komyo.online/games/critter-match/", icon: "🧩", note: "Puzzle", category: "Puzzle", cardClass: "komyo-card" },
  "komyo-glow-says": { title: "Glow Says", sourceLabel: "KOMYO", url: "https://komyo.online/games/glow-says/", icon: "✨", note: "Casual", category: "Casual", cardClass: "komyo-card" },
  "komyo-tube-racer": { title: "Tube Racer", sourceLabel: "KOMYO", url: "https://komyo.online/games/tube-racer/", icon: "🏎️", note: "Racing", category: "Racing", cardClass: "komyo-card" },
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
  } else {
    entries.sort(([, first], [, second]) => first.title.localeCompare(second.title, undefined, { sensitivity: 'base' }));
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
    const source = document.createElement('span');
    source.className = 'game-card-source';
    source.textContent = ({ TABSPAWN: 'TabSpawn', AESTRO: 'Aestro', KOMYO: 'Komyo', 'SELF-HOSTED': 'Self-hosted', 'SELF-HOSTED REUPLOAD': 'Self-hosted' })[game.sourceLabel] || game.sourceLabel;
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
    playButton.append(icon, source, title, note, arrow);
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
const featuredGames = document.querySelector('.featured-games');
const gameGrid = document.querySelector('#game-grid');
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

featuredGames.querySelectorAll('[data-game]').forEach((button) => {
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
  gameType.textContent = ({ TABSPAWN: 'TabSpawn', AESTRO: 'Aestro', KOMYO: 'Komyo', 'SELF-HOSTED': 'Self-hosted', 'SELF-HOSTED REUPLOAD': 'Self-hosted' })[game.sourceLabel] || game.sourceLabel;
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
