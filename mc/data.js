let heroes = [
    {
        "name": "Ant-Man",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 12
    },
    {
        "name": "Black Panther",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 11
    },
    {
        "name": "Black Widow",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 9
    },
    {
        "name": "Captain America",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 11
    },
    {
        "name": "Captain Marvel",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 12
    },
    {
        "name": "Doctor Strange",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 10
    },
    {
        "name": "Gamora",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 10
    },
    {
        "name": "Groot",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 10
    },
    {
        "name": "Hawkeye",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 9
    },
    {
        "name": "Hulk",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 18
    },
    {
        "name": "Iron Man",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 9
    },
    {
        "name": "Ms. Marvel",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 10
    },
    {
        "name": "Quicksilver",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 9
    },
    {
        "name": "Rocket Raccoon",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 9
    },
    {
        "name": "Scarlet Witch",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 10
    },
    {
        "name": "She-Hulk",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 15
    },
    {
        "name": "Spider-Man",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 10
    },
    {
        "name": "Spider-Woman",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 11
    },
    {
        "name": "Star-Lord",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 10
    },
    {
        "name": "Thor",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 14
    },
    {
        "name": "Wasp",
        "isSelected": false,
        "type": "hero",
        "hitpoints": 11
    }
];

let villains = [
    {
        "name": "Absorbing Man",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 14
    },
    {
        "name": "Bulldozer",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 12
    },
    {
        "name": "Crossbones",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 12
    },
    {
        "name": "Green Goblin",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 14
    },
    {
        "name": "Kang (Immortus)",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 18
    },
    {
        "name": "Kang (Iron Lad)",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 18
    },
    {
        "name": "Kang (Rama-Tut)",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 18
    },
    {
        "name": "Kang (Scarlet Centurion)",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 18
    },
    {
        "name": "Kang (The Conqueror)",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 12
    },
    {
        "name": "Klaw",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 12
    },
    {
        "name": "Norman Osborn",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 14
    },
    {
        "name": "Piledriver",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 11
    },
    {
        "name": "Red Skull",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 12
    },
    {
        "name": "Rhino",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 14
    },
    {
        "name": "Taskmaster",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 13
    },
    {
        "name": "Thunderball",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 13
    },
    {
        "name": "Ultron",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 17
    },
    {
        "name": "Wrecker",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 14
    },
    {
        "name": "Zola",
        "isSelected": false,
        "type": "villain",
        "hitpoints": 12
    }
];

let main_schemes = [
    {
        "name": "Assault on NORAD",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 10,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "Attack on Mount Athena",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 3,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "Breakout",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 6,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "Corporate Acquisition",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 10,
        "basethreat": 1
    },
    {
        "name": "Countdown to Oblivion",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 5,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "Hostile Takeover",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 7,
        "basethreat": 2
    },
    {
        "name": "Hunting Down Heroes",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 12,
        "basethreat": 1
    },
    {
        "name": "Inexorable Fate",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 9,
        "basethreat": 1,
        "basethreatfixed": true
    },
    {
        "name": "Kang's Arrival",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 7,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "Kang's Wrath",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 10,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "Mutagen Cloud",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 11,
        "basethreat": 4
    },
    {
        "name": "New World Hydra",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 11,
        "basethreat": 1
    },
    {
        "name": "None Shall Pass",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 12,
        "basethreat": 2
    },
    {
        "name": "Secret Rendezvous",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 8,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "The Break-In!",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 7,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "The Chronopolis",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 9,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "The Crimson Cowl",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 3,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "The Getaway",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 5,
        "basethreat": 1
    },
    {
        "name": "The Infinity Stone",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 6,
        "basethreat": 1
    },
    {
        "name": "The Island of Dr. Zola",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 6,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "The Mad Doctor",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 8,
        "basethreat": 1
    },
    {
        "name": "The Master of Time",
        "isSelected": false,
        "type": "main_scheme",
        "threat": null,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "The Present Future War",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 9,
        "basethreat": 2,
        "basethreatfixed": true
    },
    {
        "name": "The Realm of Rama-Tut",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 9,
        "basethreat": 1,
        "basethreatfixed": true
    },
    {
        "name": "The Rise of the Red Skull",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 8,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "Underground Distribution",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 6,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "Unleashing the Mutagen",
        "isSelected": false,
        "type": "main_scheme",
        "threat": 7,
        "basethreat": 2
    }
];

let side_schemes = [
    {
        "name": "A Mess of Things",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2,
        "basethreatfixed": true
    },
    {
        "name": "Avalanche!",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Budding Crime Syndicate",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Bomb Scare",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2,
        "basethreatfixed": true
    },
    {
        "name": "Breakin' & Takin'",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2,
        "basethreatfixed": true
    },
    {
        "name": "Captured by Hydra",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 5,
        "basethreat": 5,
        "basethreatfixed": true
    },
    {
        "name": "Censor the Past",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Clear the Road",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 4,
        "basethreat": 4,
        "basethreatfixed": true
    },
    {
        "name": "Collapsing Bridge",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Cornered Staff",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3,
        "basethreatfixed": true
    },
    {
        "name": "Corrupted Timestream",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2,
        "basethreatfixed": true
    },
    {
        "name": "Crossbones' Assault",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Crowd Control",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Day of Reckoning",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 6,
        "basethreat": 6,
        "basethreatfixed": true
    },
    {
        "name": "Defense Network",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2,
        "basethreatfixed": true
    },
    {
        "name": "Drone Factory",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 4,
        "basethreat": 4,
        "basethreatfixed": true
    },
    {
        "name": "Extortion of Seismic Proportion",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Family Feud",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Generation Why?",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Goblin Nation",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Goblin Reinforcements",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2,
        "basethreatfixed": true
    },
    {
        "name": "Highway Robbery",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Hit Squad",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Hydra Patrol",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Hydra Prison",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 1,
        "basethreat": 1,
        "basethreatfixed": true
    },
    {
        "name": "Hydra Reinforcements",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Illegal Arms Factory",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3,
        "basethreatfixed": true
    },
    {
        "name": "Imminent Overload",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3,
        "basethreatfixed": true
    },
    {
        "name": "Invasive AI",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Judge, Jury, Executioner",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Kang's Dominion",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Killer for Hire",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Legions of Hydra",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3,
        "basethreatfixed": true
    },
    {
        "name": "Light of Centuries Sphere",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Marked for Death",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 5,
        "basethreat": 5,
        "basethreatfixed": true
    },
    {
        "name": "Mass Chaos",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 0,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "Mother's Orders",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Open the Dark Dimension",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Oscorp Manufacturing",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Overrun",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 1,
        "basethreat": 1
    },
    {
        "name": "Payoff",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Personal Challenge",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3,
        "basethreatfixed": true
    },
    {
        "name": "Pile It On!",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3,
        "basethreatfixed": true
    },
    {
        "name": "Pinned Down",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2,
        "basethreatfixed": true
    },
    {
        "name": "Power Drain",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Prison Camps",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Rampage",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 4,
        "basethreat": 4,
        "basethreatfixed": true
    },
    {
        "name": "Running Interference",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 1,
        "basethreat": 1
    },
    {
        "name": "Sibling Rivalry",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 4,
        "basethreat": 4,
        "basethreatfixed": true
    },
    {
        "name": "Super Absorbing Power",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Taskmaster's Training Camp",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Tech Theft",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Test Subjects",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "The \"Immortal\" Klaw",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "The Anachronauts",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "The Doomsday Chair",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 8,
        "basethreat": 8,
        "basethreatfixed": true
    },
    {
        "name": "The Masters of Evil",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "The Next Evolution",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2,
        "basethreatfixed": false
    },
    {
        "name": "The Psych-Magnitron",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3,
        "basethreatfixed": true
    },
    {
        "name": "The Red House",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3,
        "basethreatfixed": false
    },
    {
        "name": "The Sleeper Awakened",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 0,
        "basethreat": 0,
        "basethreatfixed": true
    },
    {
        "name": "The Viper's Ambition",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2,
        "basethreatfixed": true
    },
    {
        "name": "Thunderstruck",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 5,
        "basethreat": 5,
        "basethreatfixed": true
    },
    {
        "name": "Time Portal",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Total Destruction",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Ultron's Imperative",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 2,
        "basethreat": 2
    },
    {
        "name": "Under Attack",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3,
        "basethreatfixed": true
    },
    {
        "name": "Usurp The Throne",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    },
    {
        "name": "Zola's Experiments",
        "isSelected": false,
        "type": "side_scheme",
        "threat": 3,
        "basethreat": 3
    }
];

let minions = [
    {
        "name": "Abomination",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Advanced Ultron Drone",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Ancient Warrior",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 2
    },
    {
        "name": "Apocryphus",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Armored Guard",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Avalanche",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Baron Mordo",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "Baron Zemo",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "Beetle",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Berserk Mutate",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Chitauri Soldier",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Corrupt Prison Guard",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Crossfire",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Deathunt 9000",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Edison's Giant Robot",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 8
    },
    {
        "name": "Electro",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Escaped Convict",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 2
    },
    {
        "name": "Frost Giant",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Goblin Knight",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 7
    },
    {
        "name": "Goblin Soldier",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "Goblin Thrall",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Hired Gun",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Hydra Bomber",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 2
    },
    {
        "name": "Hydra Exo-Soldier",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "Hydra Flame-Soldier",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Hydra Hunter",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Hydra Jet-Trooper",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Hydra Mercenary",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Hydra Regular",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 2
    },
    {
        "name": "Hydra Soldier",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Kang (Master of Time)",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Killmonger",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "Loki",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Luminous",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "MODOK",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 8
    },
    {
        "name": "Macrobots",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Madame Hydra",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Melter",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "Mister Knife",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Monster",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Nebula",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "Private Security Specialist",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Radioactive Man",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 7
    },
    {
        "name": "Ronan the Accuser",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 9
    },
    {
        "name": "Sandman",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Scorpion",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 7
    },
    {
        "name": "Shocker",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Sir Raston",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Taskmaster",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Terminatrix",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "The Sleeper",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "The Viper",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "Thomas Edison",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Tiger Shark",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Time-Displaced Soldier",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 3
    },
    {
        "name": "Titania",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Tombstone",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 9
    },
    {
        "name": "Tyrannosaurus Rex",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Ultimate Bio-Servant",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Vulture",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Weapons Runner",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 2
    },
    {
        "name": "Whiplash",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Whirlwind",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 6
    },
    {
        "name": "Wildrun",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "Yellowjacket",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 4
    },
    {
        "name": "Yon-Rogg",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    },
    {
        "name": "Zola's Mutate",
        "isSelected": false,
        "type": "minion",
        "hitpoints": 5
    }
];

let allies = [
    {
        "name": "Adam Warlock",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Agent 13",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Agent Coulson",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Angela",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Ant-Man",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Beta Ray Bill",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Black Cat",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Black Knight",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Black Widow",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Brawn",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 5
    },
    {
        "name": "Brother Voodoo",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Bug",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Captain Marvel",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Clea",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Cosmo",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Daredevil",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Drax",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Elektra",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Falcon",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Giant-Man",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Goliath",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Groot",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 6
    },
    {
        "name": "Hawkeye",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Heimdall",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Hellcat",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Hercules",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Hulk",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 5
    },
    {
        "name": "Iron Fist",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Iron Man",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Ironheart",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Jessica Jones",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Lady Sif",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Lockjaw",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Luke Cage",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 5
    },
    {
        "name": "Maria Hill",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Mockingbird",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Moon Knight",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Multiple Man",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Nick Fury",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Nova",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Nova Prime",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Nebula",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Quake",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Quicksilver",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Red Dagger",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Rocket Raccoon",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Ronin",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Scarlet Witch",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Sentry",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 5
    },
    {
        "name": "Shang-Chi",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "She-Hulk",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Shuri",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Speed",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Spider-Girl",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Spider-Man",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Spider-Woman",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Squirrel Girl",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Starhawk",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Stinger",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    },
    {
        "name": "Thor",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Tigra",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "U.S. Agent",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 5
    },
    {
        "name": "Valkyrie",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Vision",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "War Machine",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Warlock",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Wasp",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 0
    },
    {
        "name": "White Tiger",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Wiccan",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Winter Soldier",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 4
    },
    {
        "name": "Wonder Man",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Wong",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 3
    },
    {
        "name": "Yondu",
        "isSelected": false,
        "type": "ally",
        "hitpoints": 2
    }
];