import SBManiaIcon from '../assets/Icons/SBMania/SBManiaIcon.jpg';
import SBMania from '../assets/Icons/SBMania/SBMania.jpg';
import PlaceholderIcon from '../assets/Icons/Site/LuxxPlaceholder.jpg';
import PLiteIcon from '../assets/Icons/PLite/PLiteIcon.gif';
import dataStoring from '../assets/dataStoring.png';
import Economy from '../assets/Economy.png';
import Funnel from '../assets/Funnel.png';
import Stats from '../assets/Stats.png';
import tvSystemImg from '../assets/tvSystemImg.jpg';
import npcContestImg from '../assets/npcContestImg.png';
import FLSMobile from '../assets/FLSMobile.jpg';

import blinkDash from '../assets/Icons/SBMania/dashPackAnims/blinkDashPack.gif'
import defaultDash from '../assets/Icons/SBMania/dashPackAnims/defaultDashPack.gif'
import shadowCloneDash from '../assets/Icons/SBMania/dashPackAnims/shadowCloneDashPack.gif'
import slideDash from '../assets/Icons/SBMania/dashPackAnims/slideDashPack.gif'
import defaultKO from '../assets/Icons/SBMania/koAnims/defaultKO.gif'
import dissolveKO from '../assets/Icons/SBMania/koAnims/dissolveKO.gif'
import flingKO from '../assets/Icons/SBMania/koAnims/flingKO.gif'
import zeusKO from '../assets/Icons/SBMania/koAnims/zeusKO.gif'
import defaultRe from '../assets/Icons/SBMania/reloadAnims/defaultReload.gif'
import stompRe from '../assets/Icons/SBMania/reloadAnims/stompReload.gif'
import summonRe from '../assets/Icons/SBMania/reloadAnims/summonReload.gif'
import supplyDropRe from '../assets/Icons/SBMania/reloadAnims/supplyDropReload.gif'
import noScopeThrow from '../assets/Icons/SBMania/throwAnims/360NoScopeThrow.gif'
import defaultThrow from '../assets/Icons/SBMania/throwAnims/defaultThrow.gif'
import forcePushThrow from '../assets/Icons/SBMania/throwAnims/forcePushThrow.gif'
import kamehamehaThrow from '../assets/Icons/SBMania/throwAnims/kamehamehaThrow.gif'

export const GAMES = [
  {
    title: "Snowball Mania",
    image: SBManiaIcon,
    link:
      "/SBMania",
    gamelink:
      "https://www.roblox.com/games/123836375697264/Snowball-Mania",
    devices: ["PC, Mobile, Xbox"],
  },
  {
    title: "Coming soon...",
    image: PlaceholderIcon,
    link:
      "https://www.roblox.com/communities/35488818/Luxxury-Games#!/about",
    devices: ["PC, Mobile, Xbox"],
  },
  {
    title: "Coming soon...",
    image: PlaceholderIcon,
    gamelink:
      "https://www.roblox.com/communities/35488818/Luxxury-Games#!/about",
    devices: ["PC, Mobile, Xbox"],
  }
];

export const PROJECTS = [
  {
    title: "Plugins",
    image: PLiteIcon,
    link:
      "/Plugins",
  },
  {
    title: "Creations",
    image: npcContestImg,
    link:
      "/Creations",
  },
  {
    title: "Commissions",
    image: FLSMobile,
    link:
      "/Commissions",
  }
];

export const PLUGINS =[
  {
    name: "PhenomenonLite",
    image: PLiteIcon,
    media: 'https://streamable.com/ai0yht',
    link: 'https://create.roblox.com/store/asset/126200194575913/PhenomenonLite',
    desc: "A lightweight Roblox plugin designed to simplify event creation & functionality. Create remote events, assign functions, set up triggers, locate event sources, and unlock more features with future updates. Streamline your scripting workflow! This plugin finds all events for any object in the explorer you choose for easy access"
  },
]

export const CREATIONS = [
  {
    name: "Custom TV System",
    image: tvSystemImg,
    media: 'https://streamable.com/alpo5b',
    desc: 'Remote and tv system that can take any number of video frames to use as tv channels, switch channels with remote and even see channel lists/channel timestamps'
  },
  {
    name: "NPC Contest",
    image: npcContestImg,
    media: 'https://streamable.com/f81cnj',
    desc: 'Entered a contest for npc autonomous action but only had 2 days, dinosaur summons piece of the sun and hurls meteors at you'
  },
  {
    name: "SBMania Trello",
    image: 'https://media.discordapp.net/attachments/765838759110377494/1342063327206969384/image.png?ex=67b8455f&is=67b6f3df&hm=d465f0f024ea1a6d0088fd8444f65ef9d9f54d98a7ad7938746ca3530e1a7960&=&format=webp&quality=lossless&width=1440&height=627',
    media: '',
    desc: 'https://trello.com/b/wXWfRh7g/snowball-mania'
  }
]

export const COMMISSIONS = [
  {
    name: "FLSystem Mobile",
    image: FLSMobile,
    media: 'https://streamable.com/mh4zp4',
    desc: 'This flashlight system was based on mouse position which made it buggy on mobile since it uses touch input, fixed by changing some functionality in the script for mobile and creating a redesignable thumbstick'
  },
  {
    name: "SStorm Trello",
    image: 'https://media.discordapp.net/attachments/765838759110377494/1342064004188606514/image.png?ex=67b84600&is=67b6f480&hm=44379cbb075a4cfd4a6d55a7be0eaa1c64b308846a20a22aae4b6ac4c7983773&=&format=webp&quality=lossless&width=1440&height=637',
    media: '',
    desc: 'https://trello.com/b/sPAqwEgs/old-official-shinobi-storm-trello'
  }
]

export const SBMANIA = [
  {
    name: "Programming",
    icon: "",
    subcats: {
      Modual: {
        CharModule: {
          media: ['https://streamable.com/8a7zrh'],
          desc: "Players get a player and character module, one holding and updating stats and the other holding and updating inventory and attributes. Very flexible and allows character creation & selection similiar to ABA or battleground games. The ui was made in 5ms just to display the module",
        },
        GameModule: {
          media: ['https://streamable.com/3a0oa4'],
          desc: "Game module system to hold and decide gamemodes, maps, rounds, and teams."
        }
      },
      Functional: {
        ProjectileSystem: {
          media: ['https://streamable.com/t8tx9n', 'https://streamable.com/ci9rx6'],
          desc: "Projectile combat system with snowball visualized and replicated only on all clients when thrown, with castings and hit/collision validation calculations only on the server."
        },
        PerfectDodgeSystem: {
          media: ['https://streamable.com/9kpts8'],
          desc: "Dodges give iframes for 1 second and have a window for a perfect dodge, which for now gives an automatic free reload. Dodges recharge over time."
        },
        VotingSystem: {
          media: ['https://streamable.com/3a0oa4'],
          desc: "Flexible voting system, able to be used for more things like maps"
        },
        RewardSystem: {
          media: ['https://streamable.com/vvamx7'],
          desc: "Rewarding system, for now just timed rewards; wheel spin and afk rewards soon to come."
        }
      },
      DataStorage: {
        Storing: {
          media: [dataStoring],
          desc: "Data storing for players inventory and statistics, not much data to present in the screenshot as seen since it was taken just as the game released."
        }
      },
      Network: {
        Optimization: {
          media: ['https://streamable.com/t8tx9n'],
          desc: "Animations and effects played & replicated on client for synchronization and speed, server validates things like cooldowns, purchases, etc for basic cheat prevention"
        }
      }
    }
  },

  {
    name: "GUI",
    icon: "",
    subcats: {
      UI: {
        ShopInventory: {
          media: ['https://streamable.com/ef5u4x'],
          desc: "Flexible shop and inventory system with multiple currencies very organized & easy to append new content, into as well as redesign."
        },
        GameSettings: {
          media: ['https://streamable.com/tyxx2o'],
          desc: "Simple settings tab, with custom bind choices to be added soon"
        }
      },
      Data: {
        Stats: {
          media: [Stats],
          desc: "Stat tracking with kill:death ratio and win rate visualized. Normal leaderboard as well."
        }
      },
      HUD: {
        CDsTimerKillBoardDisplay: {
          media: ['https://streamable.com/7e2ljd', 'https://streamable.com/ci9rx6'],
          desc: "Cooldowns visualized, active ability displayed, kill leaderboard similiar to arsenal. Fully functional and easily redesignable."
        }
      }
    }
  },

  {
    name: "GFX",
    icon: "",
    subcats: {
      GameArt: {
        Thumbnails: {
          media: [SBMania],
          desc: "Created with blender and photoshop."
        },
        GameCovers: {
          media: [SBManiaIcon],
          desc: "Created with blender and photoshop."
        }
      },
      Icons: {
        ItemIcons: {
          media: ['https://streamable.com/ef5u4x'],
          desc: "Icons created with blender and photoshop."
        },
        IndicatorIcons: {
          media: ['https://streamable.com/7e2ljd'],
          desc: "Created in studio, before using blender."
        }
      },
    }
  },

  {
    name: "Animating",
    icon: "",
    subcats: {
      KOAnims: {
        KOAnimations: {
          media: [defaultKO, dissolveKO, flingKO, zeusKO],
          desc: "Death Animations."
        }
      },
      DashPackAnims: {
        DashAnimations: {
          media: [blinkDash, defaultDash, shadowCloneDash, slideDash],
          desc: "Dash Animation Packs."
        }
      },
      ReloadAnims: {
        ReloadAnimations: {
          media: [defaultRe, stompRe, summonRe, supplyDropRe],
          desc: "Reload Animations."
        }
      },
      ThrowAnims: {
        ThrowAnimations: {
          media: [noScopeThrow, defaultThrow, forcePushThrow, kamehamehaThrow],
          desc: "Throw Animations."
        }
      }
    }
  },

  {
    name: "FX",
    icon: "",
    subcats: {
      VFX_SFX: {
        HitKOEffects: {
          media: ['https://streamable.com/ci9rx6'],
          desc: "Effects on hit, animations and effects on KOs as well."
        },
        SoundEffects: {
          media: ['https://streamable.com/vzk54h'],
          desc: "Sound effects made for generally all actions, optional music with toggable genres."
        }
      },
      Visuals: {
        RespawnTransition: {
          media: ['https://streamable.com/7e5a8x'],
          desc: "Respawn transition."
        },
        MainMenuTransition: {
          media: ['https://streamable.com/fbdh55'],
          desc: "Skippable main menu cutscene with update logs available."
        }
      },
    }
  },

  {
    name: "Management",
    icon: "",
    subcats: {
      Analytics: {
        FunnelTracking: {
          media: [Funnel],
          desc: "Funnel events that track shop steps to tell when players do and dont purchase items, as well as how far players progress in the game. Boosts engagement and retention trackability. Not much data to present in the screenshot as seen since it was taken just as the game released."
        },
        EconomyTracking: {
          media: [Economy],
          desc: "Economy events that track how players are earning and spending currencies. Will allow price balancing to increase revenue as well as boost engagement trackability. Not much data to present in the screenshot as seen since it was taken just as the game released."
        }
      },
      Blueprinting: {
        Whiteboard: {
          media: [''],
          desc: "Solo dev'd so i made quick blueprints, checklists, and plans on my whiteboard, there's probably apps like discord or sites that I will use when working with a team."
        },
      },
      Community: {
        Discord: {
          media: [''],
          desc: "Game Server: https://discord.gg/jbqryrdp4U Group Server: https://discord.gg/HxRkdSTWhH"
        },
        Trello: {
          media: [''],
          desc: "https://trello.com/b/wXWfRh7g/snowball-mania"
        }
      },
    }
  },
];

export const TIMELINE = [
  {
    id: 1,
    title: 'Back-Engineering Experiences & Scripts',
    location: 'Roblox',
    description: "Introduced to roblox and general game development starting with back engineering of popular games, as well as modifying and creating scripts with luau.",
    date: '2017 - 2020'
  },
  {
    id: 2,
    title: 'Escape Room Game (turing test)',
    location: 'Unity',
    description: "Made an escape room game with a turing test style in unity for a final project at an academy, though for game development outside roblox I will be using Unreal Engine.",
    buttonText: 'Button',
    date: 'April 2023 - May 2023'
  },

  {
    id: 3,
    title: 'Pro gaming & QA testing',
    location: 'Xbox, PS, Roblox',
    description: "Playing games at ranked & tournament level, solo and with teams and communities. Games range from action/adventures like dust 514, uncharted, destiny, rainbow siege; to single players like spiderman, gow, elden ring; sports like nba 2k, ufc; and many more. Roblox and Discord connected me closer to developers and I began to help with testing and feedback (what led to me doing the trello that can be seen in commissions).",
    buttonText: 'Button',
    date: '2012 - August 2024'
  },
  {
    id: 4,
    title: 'PhenomenonLite Plugin',
    location: 'Roblox Studio',
    description: "After seeing how many new developers struggle with using or understanding events or connecting functions to them, I created a plugin that gives a different perspective of using them and makes it easier to bind anything needed, between the remote/bindable event instances- to the scripts with functions- to the possible triggers of events. The hardest part was the fact I couldn't access objects' meta data to see events as well as object browser being useless beyond reading, so I created a module sourcing the properties, methods, and events of all instances, derived from an api i created that reads the roblox documentation.",
    buttonText: 'Button',
    date: 'December 2024 - January 2025'
  },
  {
    id: 5,
    title: 'Snowball Mania',
    location: 'Roblox Studio, Blender',
    description: "As I got back into roblox developing and already understood things easily, i took the challenge of making a first game and since it was already december I chose snowball fighting as the theme. I wanted to develop module skills- especially combat, rarity, and item shop systems but did not want to make a copy paste battlegrounds game.",
    buttonText: 'Button',
    date: 'December 2024 - February 2025'
  },
  {
    id: 6,
    title: 'Commissions',
    location: 'Roblox Studio',
    description: "Started a few commissions but paused to focus on my game and plugin, I'm now available for commissions or hire oppurtunities (If other dev/manager/studio/team happens to observe this portfolio).",
    buttonText: 'Button',
    date: 'November 2024 - Present'
  },
  {
    id: 7,
    title: 'Luxxury Studio',
    location: 'Freestyle',
    description: "A vision. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    buttonText: 'Button',
    date: 'December 2024 - ∞'
  },

]