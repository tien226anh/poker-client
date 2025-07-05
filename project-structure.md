```txt
my-phaser-game/
├── public/
│   └── assets/
│       ├── images/
│       ├── audio/
│       ├── spritesheets/
│       └── tilemaps/
├── src/
│   ├── main.ts             # Main entry point for the game
│   ├── game.ts             # Game configuration and initialization
│   ├── scenes/
│   │   ├── BaseScene.ts    # (Optional) Base class for common scene logic
│   │   ├── PreloadScene.ts # Scene for loading all game assets
│   │   ├── MainScene.ts    # Your primary game scene
│   │   └── UIScene.ts      # (Optional) Scene for UI elements
│   ├── objects/
│   │   ├── Player.ts       # Player character class
│   │   ├── Enemy.ts        # Enemy character class
│   │   └── Collectible.ts  # Game object classes
│   ├── ui/
│   │   ├── Button.ts       # Custom UI components
│   │   └── ScoreDisplay.ts # UI elements
│   ├── utils/
│   │   ├── constants.ts    # Global constants (e.g., game dimensions, keys)
│   │   ├── helpers.ts      # Utility functions (e.g., math, array manipulation)
│   │   └── types.ts        # Custom TypeScript types/interfaces
│   ├── components/         # (Optional) Reusable Phaser game objects/containers
│   │   └── HealthBar.ts
│   └── index.d.ts          # Global type declarations (e.g., for assets)
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
