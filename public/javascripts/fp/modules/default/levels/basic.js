/*!
 * Fierce Planet - Levels
 *
 * Copyright (C) 2011 Liam Magee
 * MIT Licensed
 */

/* NB: Level is defined in level.js */

var FiercePlanet = FiercePlanet || {};

/**
 * @namespace The namespace for preset levels
 */
var Basic = Basic || new Campaign();


(function() {

    this.init = function() {
        /* Level 0 Definition */

        this.level0 = new Level(0);
        this.level0.isPresetLevel = true;
        this.level0.addEntryPoint(0, 0);
        this.level0.addExitPoint(4, 4);
        this.level0.cellsAcross = 5;
        this.level0.cellsDown = 5;
        this.level0.initialAgentNumber = 1;
        this.level0.waveNumber = 3;
        this.level0.expiryLimit = 20;
        this.level0.name = ("Tutorial");
        this.level0.introduction = ("" +
                "<p>The citizens of Fierce Planet are in danger of extinction. Their cities have been destroyed &mdash; there is a shortage of food and water, law and order has broken down, and disease is rampant.</p>" +
                "<p>The aim of the game is to help citizens survive as they build a sustainable city. Their start point is marked by a green circle, and the goal by a white circle. Both circles reflect your progress as more waves of citizens come through.</p> " +
                "<p>You can save your citizens by placing <em>resources</em> on tiles around their path. You can click on tiles to select a resource, or drag resources from the panel on the right onto the game map.</p> " +
                "<p>Resources come in three kinds: economic, environmental and social. Your citizens need all of these to build a sustainable city. " +
                "If you don't provide enough resources of a particular kind, your citizens will start turning that colour. This indicates you need to put down some resources of that colour to help your citizens.</p> " +
                "<p>You start with a limited amount of resources. Saving citizens will allow you to place more resources, which will allow you to help others.</p> " +
                "<p>Begin by placing some resources on the map. When you are ready, click the 'Play' button in the Control Panel on the left. After a few seconds, citizens will start marching towards their goal.</p> "
                );
        this.level0.conclusion = ("Well done - you have completed the tutorial. Now time to help your citizens on Level 1.");

        this.level0.setup = function() {
            this.fillWithTiles();
            this.removeTiles(20, 5);
            this.removeTiles(15, 1);
            this.removeTiles(10, 5);
            this.removeTiles(9, 1);
            this.removeTiles(0, 5);
        };


        /* Level 1 Definition */

        this.level1 = new Level(1);
        this.level1.thumbnail = '/images/levels/level-thumbnail-1.png';
        this.level1.isPresetLevel = true;
        this.level1.addEntryPoint(0, 9);
        this.level1.addExitPoint(10, 1);
        this.level1.cellsAcross = 11;
        this.level1.cellsDown = 11;
        this.level1.initialAgentNumber = 1;
        this.level1.waveNumber = 10;
        this.level1.expiryLimit = 20;
        this.level1.name = ("Level 1: Welcome to Fierce Planet!");
        this.level1.introduction = (
                "<p>The citizens of Fierce Planet are in danger of extinction. Their cities have been destroyed &mdash; there is a shortage of food and water, law and order has broken down, and disease is rampant.</p>" +
                        "<p>Help your citizens rebuild their world before they are wiped out!</p>"
        );
        this.level1.conclusion = (
                "<p>Congratulations, you have helped the citizens of Fierce Planet start rebuilding their world... there is still a long way to go!</p>"
        );
        //"<p>The citizens of Fierce Planet are under threat. They are migrating in ever increasing numbers, seeking a promised land of peace and prosperity.</p>" +
        //"<p>Help them by placing resources beside their path - before they expire!</p> "
        // this.level1.tip = new Notice("Drag or click the resources on the right (->), then add them to the map.", FiercePlanet.Orientation.worldWidth - FiercePlanet.Game.WAVE_NOTICE_WIDTH, FiercePlanet.Orientation.halfWorldHeight);
        this.level1.tip = new Notice("Drag or click the resources on the right (->), then add them to the map.");
        this.level1.soundSrc = ("http://db.tt/iFLVJKi");


        this.level1.setup = function() {
            this.fillWithTiles();
            this.removeTiles(99, 10);
            this.removeTiles(97, 1);
            this.removeTiles(78, 9);
            this.removeTiles(67, 1);
            this.removeTiles(56, 9);
            this.removeTiles(53, 1);
            this.removeTiles(34, 9);
            this.removeTiles(23, 1);
            this.removeTiles(12, 10);
            this.addTerrainToPath(new Terrain('#aaa', 0.8));

            // Add predators and rivals
//            this.levelAgents = ([new Agent(AgentTypes.PREDATOR_AGENT_TYPE, 0, 9)]);
//            this.waveAgents = ([new Agent(AgentTypes.RIVAL_AGENT_TYPE, 10, 1)]);
        };


        /* Level 2 Definition */

        this.level2 = new Level(2);
        this.level2.thumbnail = '/images/levels/level-thumbnail-2.png';
        this.level2.isPresetLevel = true;
        this.level2.addEntryPoint(0, 0);
        this.level2.addExitPoint(11, 1);
        this.level2.cellsAcross = 12;
        this.level2.cellsDown = 12;
        this.level2.initialAgentNumber = 1;
        this.level2.waveNumber = 10;
        this.level2.expiryLimit = 10;
        this.level2.initialResourceStore = 120 ;
        this.level2.name = ("Level 2: Twists and Turns");
        this.level2.introduction = (
                "<p>The citizens of Fierce Planet are slowly building their city. With your help they can make it a place of peace and prosperity.</p>"
        //        "<p>The citizens of Fierce Planet have survived their first great challenge. But life is about to get much tougher...</p>"
        );
        this.level2.conclusion = (
                "<p>Well done, you have completed level 2. The hard work must continue...</p>"
        );
        this.level2.tip = (new Notice("You can pause at any time to add resources. You can place more resources as you save citizens.", 0, 0));
        this.level2.soundSrc = ("http://db.tt/Tyd9F6M");

        this.level2.setup = function() {
            this.fillWithTiles();
            this.removeTiles(121, 10);
            this.removeTiles(118, 1);
            this.removeTiles(109, 1);
            this.removeTiles(102, 5);
            this.removeTiles(97, 4);
            this.removeTiles(90, 1);
            this.removeTiles(88, 1);
            this.removeTiles(78, 5);
            this.removeTiles(73, 4);
            this.removeTiles(70, 1);
            this.removeTiles(61, 1);
            this.removeTiles(54, 5);
            this.removeTiles(49, 4);
            this.removeTiles(42, 1);
            this.removeTiles(40, 1);
            this.removeTiles(32, 3);
            this.removeTiles(30, 1);
            this.removeTiles(25, 4);
            this.removeTiles(22, 2);
            this.removeTiles(18, 3);
            this.removeTiles(13, 1);
            this.removeTiles(0, 2);

            this.addTerrainToPath(new Terrain('#BFB3A7', 0.8));
        };


        /* Level 3 Definition */

        this.level3 = new Level(3);
        this.level3.thumbnail = '/images/levels/level-thumbnail-3.png';
        this.level3.isPresetLevel = true;
        this.level3.addEntryPoint(5, 12);
        this.level3.addExitPoint(3, 3);
        this.level3.cellsAcross = 13;
        this.level3.cellsDown = 13;
        this.level3.initialAgentNumber = 1;
        this.level3.waveNumber = 10;
        this.level3.expiryLimit = 10;
        this.level3.initialResourceStore =150 ;
        this.level3.name = ("Level 3: Waves of Uncertainty");
        this.level3.introduction = (
                "<p>The rebuilding of Fierce Planet is proceeding well... but how can you plan for a random act of nature??!!! </p>"
        //        "<p>So far, everything seems to be proceeding as planned. But on Fierce Planet, learn to expect the unexpected... </p>"
        );
        this.level3.conclusion = (
                "<p>Phew - that was a rush! Perhaps the citizens will need to head inland for a while.</p>"
        );
        this.level3.tip = new Notice("The levels get progressively larger, requiring more planning as to where you allocate resources. Aim to place resources at regular intervals along the path.");
        this.level3.soundSrc = "http://db.tt/7KPJ8Xi";
        this.level3.catastrophe = (new Catastrophe(new ResourceCategory("Environmental", "env", "ABBB2A"), 1000 + (Math.random() * 1000), 250, 0.8, new Notice("A tsumani will soon hit the city - some of its resources will be depleted.", undefined, undefined, 500, 250, undefined, undefined, "ABBB2A", "000000")));
//        this.level3.catastrophe = (new Catastrophe(TBL.ENV_CATEGORY, 1000 + (Math.random() * 1000), 250, 0.8, new Notice("A tsumani will soon hit the city - some of its resources will be depleted.", undefined, undefined, 500, 250, undefined, undefined, TBL.ENV_CATEGORY.color, "000000")));


        this.level3.setup = function() {
            this.fillWithTiles();
            this.removeTiles(161, 1);
            this.removeTiles(150, 5);
            this.removeTiles(148, 1);
            this.removeTiles(144, 3);
            this.removeTiles(141, 1);
            this.removeTiles(137, 1);
            this.removeTiles(135, 1);
            this.removeTiles(133, 1);
            this.removeTiles(131, 1);
            this.removeTiles(126, 3);
            this.removeTiles(124, 1);
            this.removeTiles(122, 1);
            this.removeTiles(120, 1);
            this.removeTiles(118, 1);
            this.removeTiles(113, 1);
            this.removeTiles(111, 1);
            this.removeTiles(109, 1);
            this.removeTiles(107, 1);
            this.removeTiles(105, 1);
            this.removeTiles(100, 3);
            this.removeTiles(96, 3);
            this.removeTiles(94, 1);
            this.removeTiles(92, 1);
            this.removeTiles(89, 1);
            this.removeTiles(81, 1);
            this.removeTiles(79, 1);
            this.removeTiles(68, 9);
            this.removeTiles(66, 1);
            this.removeTiles(53, 1);
            this.removeTiles(42, 9);
            this.removeTiles(40, 1);
            this.removeTiles(37, 1);
            this.removeTiles(27, 1);
            this.removeTiles(14, 11);

            this.addTerrainToPath(new Terrain('#BBB1B0', 0.8));
        };


        /* Level 4 Definition */

        this.level4 = new Level(4);
        this.level4.thumbnail = '/images/levels/level-thumbnail-4.png';
        this.level4.isPresetLevel = true;
        this.level4.addEntryPoint(6, 6);
        this.level4.addExitPoint(0, 0);
        this.level4.cellsAcross = 14;
        this.level4.cellsDown = 14;
        this.level4.initialAgentNumber = 1;
        this.level4.waveNumber = 10;
        this.level4.expiryLimit = 10;
        this.level4.initialResourceStore =180 ;
        this.level4.name = ("Level 4: Spiral of Doom");
        this.level4.introduction = (
                "<p>The only way out is via the long and winding road...</p>"
                );
        this.level4.tip = (new Notice("Be sure to allocate resources to the outer reaches of the path. Citizens will run faster when there is less to go around..."));
        this.level4.soundSrc = ("http://db.tt/9m8kuIs");
        this.level4.conclusion = ("Your citizens are feeling dizzy! But thankfully they have survived!");

        this.level4.setup = function() {
            this.fillWithTiles();
            this.removeTiles(168, 13);
            this.removeTiles(166, 1);
            this.removeTiles(154, 1);
            this.removeTiles(152, 1);
            this.removeTiles(142, 9);
            this.removeTiles(140, 1);
            this.removeTiles(138, 1);
            this.removeTiles(136, 1);
            this.removeTiles(128, 1);
            this.removeTiles(126, 1);
            this.removeTiles(124, 1);
            this.removeTiles(122, 1);
            this.removeTiles(116, 5);
            this.removeTiles(114, 1);
            this.removeTiles(112, 1);
            this.removeTiles(110, 1);
            this.removeTiles(108, 1);
            this.removeTiles(106, 1);
            this.removeTiles(102, 1);
            this.removeTiles(100, 1);
            this.removeTiles(98, 1);
            this.removeTiles(96, 1);
            this.removeTiles(94, 1);
            this.removeTiles(92, 1);
            this.removeTiles(90, 1);
            this.removeTiles(88, 1);
            this.removeTiles(86, 1);
            this.removeTiles(84, 1);
            this.removeTiles(82, 1);
            this.removeTiles(80, 1);
            this.removeTiles(76, 3);
            this.removeTiles(74, 1);
            this.removeTiles(72, 1);
            this.removeTiles(70, 1);
            this.removeTiles(68, 1);
            this.removeTiles(66, 1);
            this.removeTiles(60, 1);
            this.removeTiles(58, 1);
            this.removeTiles(56, 1);
            this.removeTiles(54, 1);
            this.removeTiles(46, 7);
            this.removeTiles(44, 1);
            this.removeTiles(42, 1);
            this.removeTiles(40, 1);
            this.removeTiles(30, 1);
            this.removeTiles(28, 1);
            this.removeTiles(16, 11);
            this.removeTiles(14, 1);
            this.removeTiles(0, 1);

            // Experimental terrain support
            this.addTerrainToPath(new Terrain('#CEA98F', 0.5));
            var lowerHalfTerrain = new Terrain('#645C51', 0.5);
            this.terrainMap[[0, 4]] = lowerHalfTerrain;
            this.terrainMap[[0, 5]] = lowerHalfTerrain;
            this.terrainMap[[0, 6]] = lowerHalfTerrain;
            this.terrainMap[[0, 7]] = lowerHalfTerrain;
            this.terrainMap[[0, 8]] = lowerHalfTerrain;
            this.terrainMap[[0, 9]] = lowerHalfTerrain;
            this.terrainMap[[0, 10]] = lowerHalfTerrain;
            this.terrainMap[[0, 11]] = lowerHalfTerrain;
            this.terrainMap[[0, 12]] = lowerHalfTerrain;
            this.terrainMap[[1, 12]] = lowerHalfTerrain;
            this.terrainMap[[2, 12]] = lowerHalfTerrain;
            this.terrainMap[[3, 12]] = lowerHalfTerrain;
            this.terrainMap[[2, 4]] = lowerHalfTerrain;
            this.terrainMap[[2, 5]] = lowerHalfTerrain;
            this.terrainMap[[2, 6]] = lowerHalfTerrain;
            this.terrainMap[[2, 7]] = lowerHalfTerrain;
            this.terrainMap[[2, 8]] = lowerHalfTerrain;
            this.terrainMap[[2, 9]] = lowerHalfTerrain;
            this.terrainMap[[2, 10]] = lowerHalfTerrain;
            this.terrainMap[[3, 10]] = lowerHalfTerrain;
            this.terrainMap[[4, 9]] = lowerHalfTerrain;
        };


        /* Level 5 Definition */

        this.level5 = new Level(5);
        this.level5.thumbnail = '/images/levels/level-thumbnail-5.png';
        this.level5.isPresetLevel = true;
        this.level5.addEntryPoint(13, 0);
        this.level5.addExitPoint(0, 1);
        this.level5.cellsAcross = 15;
        this.level5.cellsDown = 15;
        this.level5.initialAgentNumber = 1;
        this.level5.waveNumber = 10;
        this.level5.expiryLimit = 10;
        this.level5.initialResourceStore =200 ;
        this.level5.name = ("Level 5: A-mazing Grace");
        this.level5.introduction = (
                "<p>The citizens are hopeful that the promised land lies not too far ahead. Or does it?</p>"
                );
        this.level5.tip = (new Notice("Citizens are (sort of) smart - at forks in the road, they'll take the path which appears more plentiful. Place resources to help them choose the right path."));
        this.level5.soundSrc = ("http://db.tt/DIi4CW0");
        this.level5.conclusion = ("That really was a-mazing! Time to straighten things out...");


        this.level5.setup = function() {
            this.fillWithTiles();
            this.removeTiles(208, 1);
            this.removeTiles(204, 3);
            this.removeTiles(196, 7);
            this.removeTiles(193, 1);
            this.removeTiles(191, 1);
            this.removeTiles(189, 1);
            this.removeTiles(187, 1);
            this.removeTiles(183, 1);
            this.removeTiles(178, 1);
            this.removeTiles(176, 1);
            this.removeTiles(174, 1);
            this.removeTiles(172, 1);
            this.removeTiles(170, 1);
            this.removeTiles(166, 3);
            this.removeTiles(163, 1);
            this.removeTiles(161, 1);
            this.removeTiles(159, 1);
            this.removeTiles(157, 1);
            this.removeTiles(155, 1);
            this.removeTiles(151, 1);
            this.removeTiles(148, 1);
            this.removeTiles(146, 1);
            this.removeTiles(144, 1);
            this.removeTiles(142, 1);
            this.removeTiles(140, 1);
            this.removeTiles(138, 1);
            this.removeTiles(136, 1);
            this.removeTiles(131, 3);
            this.removeTiles(129, 1);
            this.removeTiles(127, 1);
            this.removeTiles(125, 1);
            this.removeTiles(123, 1);
            this.removeTiles(121, 1);
            this.removeTiles(118, 1);
            this.removeTiles(114, 1);
            this.removeTiles(112, 1);
            this.removeTiles(110, 1);
            this.removeTiles(108, 1);
            this.removeTiles(106, 1);
            this.removeTiles(103, 1);
            this.removeTiles(99, 3);
            this.removeTiles(95, 3);
            this.removeTiles(91, 3);
            this.removeTiles(88, 1);
            this.removeTiles(86, 1);
            this.removeTiles(80, 1);
            this.removeTiles(78, 1);
            this.removeTiles(76, 1);
            this.removeTiles(73, 1);
            this.removeTiles(71, 1);
            this.removeTiles(67, 3);
            this.removeTiles(65, 1);
            this.removeTiles(63, 1);
            this.removeTiles(61, 1);
            this.removeTiles(58, 1);
            this.removeTiles(56, 1);
            this.removeTiles(54, 1);
            this.removeTiles(52, 1);
            this.removeTiles(50, 1);
            this.removeTiles(48, 1);
            this.removeTiles(46, 1);
            this.removeTiles(43, 1);
            this.removeTiles(41, 1);
            this.removeTiles(39, 1);
            this.removeTiles(37, 1);
            this.removeTiles(35, 1);
            this.removeTiles(33, 1);
            this.removeTiles(28, 1);
            this.removeTiles(24, 3);
            this.removeTiles(20, 3);
            this.removeTiles(15, 4);
            this.removeTiles(13, 1);

            this.addTerrainToPath(new Terrain('#A7A493', 0.8));
        };


        /* Level 6 Definition */

        this.level6 = new Level(6);
        this.level6.thumbnail = '/images/levels/level-thumbnail-6.png';
        this.level6.isPresetLevel = true;
        this.level6.addEntryPoint(0, 1);
        this.level6.addExitPoint(2, 14);
        this.level6.cellsAcross = 16;
        this.level6.cellsDown = 16;
        this.level6.initialAgentNumber = 1;
        this.level6.waveNumber = 10;
        this.level6.expiryLimit = 10;
        this.level6.allowOffscreenCycling = (true);
        this.level6.initialResourceStore =350 ;
        this.level6.name = ("Level 6: Dire Straits");
        this.level6.introduction = (
                "<p>This level looks well resourced &mdash; but there are troubling signs ahead for the economy. your citizens are going to need all the help they can get... </p>");
        //this.level6.tip = (new Notice("Clicking on an existing resource allows you to delete or upgrade it. An upgraded resource will dispense more health to citizens passing by."));
        this.level6.tip = (new Notice("Clicking on an existing resource allows you to delete it, and give you back some of what you spent"));
        this.level6.conclusion = ("Back in surplus! Your citizens were able to pull through. Can they continue to work together through the challenges that lie ahead?");
        this.level6.soundSrc = ("http://db.tt/gre8MPS");
//        this.level6.catastrophe = (new Catastrophe(TBL.ECO_CATEGORY, 500 + (Math.random() * 500), 250, 0.75, new Notice("The city is suffering a financial crisis - many services will be temporarily discontinued...", undefined, undefined, 500, 250, undefined, undefined, TBL.ECO_CATEGORY.color)));
        this.level6.catastrophe = (new Catastrophe(new ResourceCategory("Economic", "eco", "44ABE0"), 500 + (Math.random() * 500), 250, 0.75, new Notice("The city is suffering a financial crisis - many services will be temporarily discontinued...", undefined, undefined, 500, 250, undefined, undefined, "44ABE0")));

        this.level6.setup = function() {
            this.fillWithTiles();
            this.removeTiles(226, 1);
            this.removeTiles(212, 12);
            this.removeTiles(208, 3);
            this.removeTiles(196, 1);
            this.removeTiles(182, 10);
            this.removeTiles(176, 5);
            this.removeTiles(166, 1);
            this.removeTiles(152, 8);
            this.removeTiles(144, 7);
            this.removeTiles(136, 1);
            this.removeTiles(122, 6);
            this.removeTiles(112, 9);
            this.removeTiles(106, 1);
            this.removeTiles(92, 4);
            this.removeTiles(80, 11);
            this.removeTiles(76, 1);
            this.removeTiles(62, 2);
            this.removeTiles(48, 13);
            this.removeTiles(46, 1);
            this.removeTiles(16, 15);

            this.addTerrainToPath(new Terrain('#EBBA99', 0.8));
        };


        /* Level 7 Definition */

        this.level7 = new Level(7);
        this.level7.thumbnail = '/images/levels/level-thumbnail-7.png';
        this.level7.isPresetLevel = true;
        this.level7.cellsAcross = 17;
        this.level7.cellsDown = 17;
        this.level7.addEntryPoint(0, 8);
        this.level7.addExitPoint(16, 8);
        this.level7.initialAgentNumber = 1;
        this.level7.waveNumber = 10;
        this.level7.expiryLimit = 10;
        this.level7.allowResourcesOnPath = (true);
        // TODO: Testing - remove for production deployment
        this.level7.initialResourceStore = 200;
        this.level7.agentGoToNearestExit = true;
        this.level7.resourcesOwnTilesExclusively = true;
        this.level7.name = ("Level 7: Like, Totally Random...");
        this.level7.introduction = (
                "<p>Ahead lies a vast and empty expanse. Your citizens are understandably nervous. Left unaided, they will try not to backtrack, but could find themselves hopelessly lost.</p>");
        this.level7.tip = (new Notice("You can add resources to the paths (the white squares) on this level, to direct citizens to their goal."));
        this.level7.conclusion = ("Spaced out! Time to move back to the (apparent) comforts of the city.");
        this.level7.soundSrc = ("http://db.tt/7SRv0qP");

        this.level7.setup = function() {
            this.fillWithTiles();
            this.removeTiles(280, 1);
            this.removeTiles(262, 3);
            this.removeTiles(244, 5);
            this.removeTiles(226, 7);
            this.removeTiles(208, 9);
            this.removeTiles(190, 11);
            this.removeTiles(172, 13);
            this.removeTiles(154, 15);
            this.removeTiles(136, 17);
            this.removeTiles(120, 15);
            this.removeTiles(104, 13);
            this.removeTiles(88, 11);
            this.removeTiles(72, 9);
            this.removeTiles(56, 7);
            this.removeTiles(40, 5);
            this.removeTiles(24, 3);
            this.removeTiles(8, 1);

            this.addTerrainToPath(new Terrain('#DCDCDE', 0.9));
            // Add predators and rivals
        //    this.addLevelAgent(new Agent(AgentTypes.PREDATOR_AGENT_TYPE, 8, 4));
        //    this.addWaveAgent(new Agent(AgentTypes.RIVAL_AGENT_TYPE, 9, 4));
        };




        /* Level 8 Definition */

        this.level8 = new Level(8);
        this.level8.thumbnail = '/images/levels/level-thumbnail-8.png';
        this.level8.isPresetLevel = true;
        this.level8.addEntryPoint(0, 0);
        this.level8.addExitPoint(17, 17);
        this.level8.cellsAcross = 18;
        this.level8.cellsDown = 18;
        this.level8.initialAgentNumber = 1;
        this.level8.waveNumber = 10;
        this.level8.expiryLimit = 10;
        this.level8.initialResourceStore =300 ;
        this.level8.name = ("Level 8: A Fork (or Two) in the Road");
        this.level8.introduction = (
                "<p>Life for the citizens of Fierce Planet is never simple. They are now faced with difficult dilemmas about which way to turn.</p>");
        this.level8.tip = (new Notice("You'll need to direct citizen through numerous forks in the road, by strategic placement of resources along the path."));
        this.level8.conclusion = ("Un-fork-ettable! After all that running around, time for a refreshing break...");
        this.level8.soundSrc = ("http://db.tt/0ynKmXS");


        this.level8.setup = function() {
            this.fillWithTiles();
            this.removeTiles(322, 2);
            this.removeTiles(289, 16);
            this.removeTiles(286, 1);
            this.removeTiles(271, 1);
            this.removeTiles(255, 14);
            this.removeTiles(253, 1);
            this.removeTiles(250, 1);
            this.removeTiles(248, 1);
            this.removeTiles(246, 1);
            this.removeTiles(237, 1);
            this.removeTiles(235, 1);
            this.removeTiles(232, 1);
            this.removeTiles(230, 1);
            this.removeTiles(221, 8);
            this.removeTiles(219, 1);
            this.removeTiles(217, 1);
            this.removeTiles(214, 1);
            this.removeTiles(212, 1);
            this.removeTiles(210, 1);
            this.removeTiles(203, 1);
            this.removeTiles(201, 1);
            this.removeTiles(199, 1);
            this.removeTiles(196, 1);
            this.removeTiles(194, 1);
            this.removeTiles(187, 6);
            this.removeTiles(185, 1);
            this.removeTiles(183, 1);
            this.removeTiles(181, 1);
            this.removeTiles(178, 1);
            this.removeTiles(176, 1);
            this.removeTiles(174, 1);
            this.removeTiles(172, 1);
            this.removeTiles(169, 1);
            this.removeTiles(167, 1);
            this.removeTiles(165, 1);
            this.removeTiles(163, 1);
            this.removeTiles(160, 1);
            this.removeTiles(158, 1);
            this.removeTiles(156, 1);
            this.removeTiles(154, 1);
            this.removeTiles(151, 1);
            this.removeTiles(149, 1);
            this.removeTiles(147, 1);
            this.removeTiles(145, 1);
            this.removeTiles(142, 1);
            this.removeTiles(140, 1);
            this.removeTiles(138, 1);
            this.removeTiles(131, 6);
            this.removeTiles(129, 1);
            this.removeTiles(127, 1);
            this.removeTiles(124, 1);
            this.removeTiles(122, 1);
            this.removeTiles(120, 1);
            this.removeTiles(113, 1);
            this.removeTiles(111, 1);
            this.removeTiles(109, 1);
            this.removeTiles(106, 1);
            this.removeTiles(104, 1);
            this.removeTiles(95, 8);
            this.removeTiles(93, 1);
            this.removeTiles(91, 1);
            this.removeTiles(88, 1);
            this.removeTiles(86, 1);
            this.removeTiles(77, 1);
            this.removeTiles(75, 1);
            this.removeTiles(73, 1);
            this.removeTiles(70, 1);
            this.removeTiles(55, 14);
            this.removeTiles(52, 1);
            this.removeTiles(37, 1);
            this.removeTiles(19, 16);
            this.removeTiles(0, 2);

            this.addTerrainToPath(new Terrain('#CCB09A', 0.9));
        };


        /* Level 9 Definition */

        this.level9 = new Level(9);
        this.level9.thumbnail = '/images/levels/level-thumbnail-9.png';
        this.level9.isPresetLevel = true;
        this.level9.addEntryPoint(9, 0);
        this.level9.addExitPoint(9, 18);
        this.level9.cellsAcross = 19;
        this.level9.cellsDown = 19;
        this.level9.initialAgentNumber = 1;
        this.level9.waveNumber = 10;
        this.level9.expiryLimit = 10;
        this.level9.initialResourceStore =280 ;
        this.level9.name = ("Level 9: Cascades");
        this.level9.introduction = (
                "<p>Time is running out. But the citizens of Fierce Planet still need some rest and relaxation. Doesn't a trip to the beach sound like a good idea?</p>");
        this.level9.tip = (new Notice("No tip! You've gotten this far..."));
        this.level9.conclusion = ("This seaside journey nearly brought about their downfall! Now time for the final stretch...");
        this.level9.soundSrc = ("http://db.tt/LMyYRtH");

        this.level9.setup = function() {
            this.fillWithTiles();
            this.removeTiles(351, 1);
            this.removeTiles(330, 5);
        //    this.clearTiles(315, 1);
            this.removeTiles(311, 1);
            this.removeTiles(296, 3);
            this.removeTiles(294, 1);
            this.removeTiles(290, 3);
            this.removeTiles(279, 1);
            this.removeTiles(275, 1);
            this.removeTiles(271, 1);
            this.removeTiles(260, 3);
            this.removeTiles(254, 5);
            this.removeTiles(250, 3);
            this.removeTiles(243, 1);
            this.removeTiles(239, 1);
            this.removeTiles(235, 1);
            this.removeTiles(231, 1);
            this.removeTiles(224, 3);
            this.removeTiles(214, 9);
            this.removeTiles(210, 3);
            this.removeTiles(207, 1);
            this.removeTiles(203, 1);
            this.removeTiles(195, 1);
            this.removeTiles(191, 1);
            this.removeTiles(182, 7);
            this.removeTiles(178, 1);
            this.removeTiles(172, 5);
            this.removeTiles(163, 1);
            this.removeTiles(159, 1);
            this.removeTiles(144, 3);
            this.removeTiles(138, 3);
            this.removeTiles(127, 1);
            this.removeTiles(125, 1);
            this.removeTiles(121, 1);
            this.removeTiles(119, 1);
            this.removeTiles(108, 3);
            this.removeTiles(106, 1);
            this.removeTiles(102, 1);
            this.removeTiles(98, 3);
            this.removeTiles(91, 1);
            this.removeTiles(87, 1);
            this.removeTiles(83, 1);
            this.removeTiles(79, 1);
            this.removeTiles(72, 3);
            this.removeTiles(62, 9);
            this.removeTiles(58, 3);
            this.removeTiles(55, 1);
            this.removeTiles(39, 1);
            this.removeTiles(20, 17);
            this.removeTiles(9, 1);

            this.addTerrainToPath(new Terrain('#ECDDCA', 0.9));

        };



        /* Level 10 Definition */

        this.level10 = new Level(10);
        this.level10.thumbnail = '/images/levels/level-thumbnail-10.png';
        this.level10.isPresetLevel = true;
        this.level10.addEntryPoint(18, 19);
        this.level10.addExitPoint(16, 19);
        this.level10.cellsAcross = 20;
        this.level10.cellsDown = 20;
        this.level10.initialAgentNumber = 1;
        this.level10.waveNumber = 5;
        this.level10.expiryLimit = 1;
        this.level10.initialResourceStore =500 ;
        this.level10.name = ("Level 10: Fields of Ma(i)ze");
        this.level10.introduction = (
                "<p>Pastures of plenty and a new sustainable future lie in store for the citizens of Fierce Planet. </p>" +
                "<p>With few remaining resources, they are starting to fight among themselves. Can they withstand a revolution from within?</p>");
        this.level10.tip = (new Notice("Remember to resource dead end paths, or your citizens will fade away, dazed and confused..."));
        this.level10.soundSrc = ("http://db.tt/DIi4CW0");
        this.level10.catastrophe = (new Catastrophe(new ResourceCategory("Social", "soc", "DE1F2A"), 500 + (Math.random() * 100), 250, 0.6, new Notice("Oh no! A revolution is coming...", undefined, undefined, 500, 250, undefined, undefined, "DE1F2A")));

        this.level10.setup = function() {
            this.fillWithTiles();
            this.removeTiles(398, 1);
            this.removeTiles(396, 1);
            this.removeTiles(378, 1);
            this.removeTiles(361, 16);
            this.removeTiles(358, 1);
            this.removeTiles(356, 1);
            this.removeTiles(345, 1);
            this.removeTiles(341, 1);
            this.removeTiles(338, 1);
            this.removeTiles(334, 3);
            this.removeTiles(325, 8);
            this.removeTiles(323, 1);
            this.removeTiles(321, 1);
            this.removeTiles(318, 1);
            this.removeTiles(312, 1);
            this.removeTiles(305, 1);
            this.removeTiles(303, 1);
            this.removeTiles(301, 1);
            this.removeTiles(298, 1);
            this.removeTiles(292, 5);
            this.removeTiles(287, 4);
            this.removeTiles(285, 1);
            this.removeTiles(281, 3);
            this.removeTiles(278, 1);
            this.removeTiles(267, 1);
            this.removeTiles(265, 1);
            this.removeTiles(247, 12);
            this.removeTiles(241, 5);
            this.removeTiles(238, 1);
            this.removeTiles(221, 1);
            this.removeTiles(218, 1);
            this.removeTiles(215, 1);
            this.removeTiles(211, 3);
            this.removeTiles(207, 3);
            this.removeTiles(205, 1);
            this.removeTiles(203, 1);
            this.removeTiles(201, 1);
            this.removeTiles(195, 4);
            this.removeTiles(193, 1);
            this.removeTiles(189, 3);
            this.removeTiles(183, 5);
            this.removeTiles(181, 1);
            this.removeTiles(178, 1);
            this.removeTiles(173, 1);
            this.removeTiles(164, 1);
            this.removeTiles(161, 1);
            this.removeTiles(158, 1);
            this.removeTiles(153, 4);
            this.removeTiles(146, 6);
            this.removeTiles(141, 4);
            this.removeTiles(138, 1);
            this.removeTiles(136, 1);
            this.removeTiles(131, 1);
            this.removeTiles(126, 1);
            this.removeTiles(118, 1);
            this.removeTiles(114, 3);
            this.removeTiles(108, 5);
            this.removeTiles(106, 1);
            this.removeTiles(101, 4);
            this.removeTiles(98, 1);
            this.removeTiles(94, 1);
            this.removeTiles(91, 1);
            this.removeTiles(88, 1);
            this.removeTiles(86, 1);
            this.removeTiles(84, 1);
            this.removeTiles(81, 1);
            this.removeTiles(78, 1);
            this.removeTiles(76, 1);
            this.removeTiles(71, 4);
            this.removeTiles(68, 2);
            this.removeTiles(63, 4);
            this.removeTiles(61, 1);
            this.removeTiles(58, 1);
            this.removeTiles(56, 1);
            this.removeTiles(41, 1);
            this.removeTiles(21, 18);

            this.addTerrainToPath(new Terrain('#FAF6ED', 0.9));
        };



        /* Level 11 Definition */

        this.level11 = new Level(11);
        this.level11.thumbnail = '/images/levels/level-thumbnail-11.png';
        this.level11.isPresetLevel = true;
        this.level11.addEntryPoint(11, 12);
        this.level11.addEntryPoint(18, 12);
        this.level11.addExitPoint(12, 17);
        this.level11.addExitPoint(17, 7);
        this.level11.cellsAcross = 30;
        this.level11.cellsDown = 25;
        this.level11.initialAgentNumber = 4;
        this.level11.waveNumber = 3;
        this.level11.expiryLimit = 10;
        this.level11.initialResourceStore = 3000;
        this.level11.allowOffscreenCycling = (true);
        this.level11.name = ("Level 11: It's a Mad World");
        this.level11.isTerminalLevel = true;
        this.level11.introduction = (
                "<p>The citizens are safe! There's no mad rush &mdash; time to sit back and watch the world go by....");
        this.level11.tip = (new Notice("'There is a place. Like no place on Earth. A land full of wonder, mystery, and danger! Some say to survive it: You need to be as mad as a hatter. ' (The Mad Hatter)"));

        this.level11.setup = function() {
            this.setTiles(JSON.parse('[{"color":"0FFF1F","x":0,"y":0},null,{"color":"0FFF1F","x":2,"y":0},{"color":"0FFF1F","x":3,"y":0},{"color":"0FFF1F","x":4,"y":0},{"color":"0FFF1F","x":5,"y":0},{"color":"0FFF1F","x":6,"y":0},{"color":"0FFF1F","x":7,"y":0},{"color":"0FFF1F","x":8,"y":0},{"color":"0FFF1F","x":9,"y":0},{"color":"0FFF1F","x":10,"y":0},{"color":"0FFF1F","x":11,"y":0},{"color":"0FFF1F","x":12,"y":0},{"color":"0FFF1F","x":13,"y":0},{"color":"0FFF1F","x":14,"y":0},{"color":"0FFF1F","x":15,"y":0},{"color":"0FFF1F","x":16,"y":0},{"color":"0FFF1F","x":17,"y":0},{"color":"0FFF1F","x":18,"y":0},{"color":"0FFF1F","x":19,"y":0},{"color":"0FFF1F","x":20,"y":0},{"color":"0FFF1F","x":21,"y":0},{"color":"0FFF1F","x":22,"y":0},{"color":"0FFF1F","x":23,"y":0},{"color":"0FFF1F","x":24,"y":0},{"color":"0FFF1F","x":25,"y":0},{"color":"0FFF1F","x":26,"y":0},{"color":"0FFF1F","x":27,"y":0},null,{"color":"0FFF1F","x":29,"y":0},null,null,null,{"color":"0FFF1F","x":3,"y":1},{"color":"0FFF1F","x":4,"y":1},{"color":"0FFF1F","x":5,"y":1},null,null,null,{"color":"0FFF1F","x":9,"y":1},{"color":"0FFF1F","x":10,"y":1},{"color":"0FFF1F","x":11,"y":1},null,null,null,{"color":"0FFF1F","x":15,"y":1},{"color":"0FFF1F","x":16,"y":1},{"color":"0FFF1F","x":17,"y":1},{"color":"0FFF1F","x":18,"y":1},{"color":"0FFF1F","x":19,"y":1},null,null,null,{"color":"0FFF1F","x":23,"y":1},{"color":"0FFF1F","x":24,"y":1},{"color":"0FFF1F","x":25,"y":1},{"color":"0FFF1F","x":26,"y":1},{"color":"0FFF1F","x":27,"y":1},null,null,{"color":"0FFF1F","x":0,"y":2},{"color":"0FFF1F","x":1,"y":2},null,null,{"color":"0FFF1F","x":4,"y":2},null,null,{"color":"0FFF1F","x":7,"y":2},null,null,{"color":"0FFF1F","x":10,"y":2},null,null,{"color":"0FFF1F","x":13,"y":2},null,null,{"color":"0FFF1F","x":16,"y":2},{"color":"0FFF1F","x":17,"y":2},{"color":"0FFF1F","x":18,"y":2},null,null,{"color":"0FFF1F","x":21,"y":2},null,null,{"color":"0FFF1F","x":24,"y":2},{"color":"0FFF1F","x":25,"y":2},{"color":"0FFF1F","x":26,"y":2},null,null,{"color":"0FFF1F","x":29,"y":2},{"color":"0FFF1F","x":0,"y":3},{"color":"0FFF1F","x":1,"y":3},{"color":"0FFF1F","x":2,"y":3},null,null,null,{"color":"0FFF1F","x":6,"y":3},{"color":"0FFF1F","x":7,"y":3},{"color":"0FFF1F","x":8,"y":3},null,null,null,{"color":"0FFF1F","x":12,"y":3},{"color":"0FFF1F","x":13,"y":3},{"color":"0FFF1F","x":14,"y":3},null,{"color":"0FFF1F","x":16,"y":3},{"color":"0FFF1F","x":17,"y":3},null,null,{"color":"0FFF1F","x":20,"y":3},{"color":"0FFF1F","x":21,"y":3},{"color":"0FFF1F","x":22,"y":3},null,null,{"color":"0FFF1F","x":25,"y":3},null,null,{"color":"0FFF1F","x":28,"y":3},{"color":"0FFF1F","x":29,"y":3},{"color":"0FFF1F","x":0,"y":4},{"color":"0FFF1F","x":1,"y":4},{"color":"0FFF1F","x":2,"y":4},{"color":"0FFF1F","x":3,"y":4},null,{"color":"0FFF1F","x":5,"y":4},{"color":"0FFF1F","x":6,"y":4},{"color":"0FFF1F","x":7,"y":4},{"color":"0FFF1F","x":8,"y":4},{"color":"0FFF1F","x":9,"y":4},null,{"color":"0FFF1F","x":11,"y":4},{"color":"0FFF1F","x":12,"y":4},{"color":"0FFF1F","x":13,"y":4},null,null,null,{"color":"0FFF1F","x":17,"y":4},{"color":"0FFF1F","x":18,"y":4},{"color":"0FFF1F","x":19,"y":4},{"color":"0FFF1F","x":20,"y":4},{"color":"0FFF1F","x":21,"y":4},{"color":"0FFF1F","x":22,"y":4},{"color":"0FFF1F","x":23,"y":4},null,null,null,{"color":"0FFF1F","x":27,"y":4},{"color":"0FFF1F","x":28,"y":4},{"color":"0FFF1F","x":29,"y":4},{"color":"0FFF1F","x":0,"y":5},{"color":"0FFF1F","x":1,"y":5},{"color":"0FFF1F","x":2,"y":5},null,null,null,{"color":"0FFF1F","x":6,"y":5},{"color":"0FFF1F","x":7,"y":5},{"color":"0FFF1F","x":8,"y":5},null,null,null,{"color":"0FFF1F","x":12,"y":5},{"color":"0FFF1F","x":13,"y":5},{"color":"0FFF1F","x":14,"y":5},{"color":"0FFF1F","x":15,"y":5},{"color":"0FFF1F","x":16,"y":5},{"color":"0FFF1F","x":17,"y":5},{"color":"0FFF1F","x":18,"y":5},null,null,null,{"color":"0FFF1F","x":22,"y":5},{"color":"0FFF1F","x":23,"y":5},null,{"color":"0FFF1F","x":25,"y":5},null,null,{"color":"0FFF1F","x":28,"y":5},{"color":"0FFF1F","x":29,"y":5},{"color":"0FFF1F","x":0,"y":6},{"color":"0FFF1F","x":1,"y":6},null,null,{"color":"0FFF1F","x":4,"y":6},{"color":"0FFF1F","x":5,"y":6},{"color":"0FFF1F","x":6,"y":6},null,{"color":"0FFF1F","x":8,"y":6},{"color":"0FFF1F","x":9,"y":6},{"color":"0FFF1F","x":10,"y":6},{"color":"0FFF1F","x":11,"y":6},{"color":"0FFF1F","x":12,"y":6},{"color":"0FFF1F","x":13,"y":6},null,null,{"color":"0FFF1F","x":16,"y":6},{"color":"0FFF1F","x":17,"y":6},null,null,{"color":"0FFF1F","x":20,"y":6},null,null,{"color":"0FFF1F","x":23,"y":6},{"color":"0FFF1F","x":24,"y":6},{"color":"0FFF1F","x":25,"y":6},{"color":"0FFF1F","x":26,"y":6},null,null,{"color":"0FFF1F","x":29,"y":6},{"color":"0FFF1F","x":0,"y":7},null,null,{"color":"0FFF1F","x":3,"y":7},{"color":"0FFF1F","x":4,"y":7},{"color":"0FFF1F","x":5,"y":7},{"color":"0FFF1F","x":6,"y":7},null,null,null,{"color":"0FFF1F","x":10,"y":7},null,null,null,null,{"color":"0FFF1F","x":15,"y":7},{"color":"0FFF1F","x":16,"y":7},null,null,{"color":"0FFF1F","x":19,"y":7},{"color":"0FFF1F","x":20,"y":7},{"color":"0FFF1F","x":21,"y":7},null,null,null,{"color":"0FFF1F","x":25,"y":7},{"color":"0FFF1F","x":26,"y":7},{"color":"0FFF1F","x":27,"y":7},null,{"color":"0FFF1F","x":29,"y":7},{"color":"0FFF1F","x":0,"y":8},null,{"color":"0FFF1F","x":2,"y":8},{"color":"0FFF1F","x":3,"y":8},null,null,{"color":"0FFF1F","x":6,"y":8},{"color":"0FFF1F","x":7,"y":8},null,{"color":"0FFF1F","x":9,"y":8},{"color":"0FFF1F","x":10,"y":8},{"color":"0FFF1F","x":11,"y":8},null,{"color":"0FFF1F","x":13,"y":8},null,null,{"color":"0FFF1F","x":16,"y":8},{"color":"0FFF1F","x":17,"y":8},{"color":"0FFF1F","x":18,"y":8},{"color":"0FFF1F","x":19,"y":8},{"color":"0FFF1F","x":20,"y":8},{"color":"0FFF1F","x":21,"y":8},{"color":"0FFF1F","x":22,"y":8},null,{"color":"0FFF1F","x":24,"y":8},{"color":"0FFF1F","x":25,"y":8},{"color":"0FFF1F","x":26,"y":8},null,null,{"color":"0FFF1F","x":29,"y":8},{"color":"0FFF1F","x":0,"y":9},null,null,{"color":"0FFF1F","x":3,"y":9},{"color":"0FFF1F","x":4,"y":9},null,null,null,null,{"color":"0FFF1F","x":9,"y":9},{"color":"0FFF1F","x":10,"y":9},null,null,{"color":"0FFF1F","x":13,"y":9},{"color":"0FFF1F","x":14,"y":9},null,{"color":"0FFF1F","x":16,"y":9},{"color":"0FFF1F","x":17,"y":9},null,null,null,{"color":"0FFF1F","x":21,"y":9},{"color":"0FFF1F","x":22,"y":9},null,null,{"color":"0FFF1F","x":25,"y":9},null,null,{"color":"0FFF1F","x":28,"y":9},{"color":"0FFF1F","x":29,"y":9},{"color":"0FFF1F","x":0,"y":10},{"color":"0FFF1F","x":1,"y":10},null,null,{"color":"0FFF1F","x":4,"y":10},{"color":"0FFF1F","x":5,"y":10},null,{"color":"0FFF1F","x":7,"y":10},null,null,null,null,{"color":"0FFF1F","x":12,"y":10},{"color":"0FFF1F","x":13,"y":10},null,null,{"color":"0FFF1F","x":16,"y":10},null,null,{"color":"0FFF1F","x":19,"y":10},null,null,{"color":"0FFF1F","x":22,"y":10},{"color":"0FFF1F","x":23,"y":10},null,null,null,{"color":"0FFF1F","x":27,"y":10},{"color":"0FFF1F","x":28,"y":10},{"color":"0FFF1F","x":29,"y":10},{"color":"0FFF1F","x":0,"y":11},{"color":"0FFF1F","x":1,"y":11},{"color":"0FFF1F","x":2,"y":11},null,null,null,null,{"color":"0FFF1F","x":7,"y":11},{"color":"0FFF1F","x":8,"y":11},{"color":"0FFF1F","x":9,"y":11},{"color":"0FFF1F","x":10,"y":11},{"color":"0FFF1F","x":11,"y":11},{"color":"0FFF1F","x":12,"y":11},{"color":"0FFF1F","x":13,"y":11},null,{"color":"0FFF1F","x":15,"y":11},{"color":"0FFF1F","x":16,"y":11},null,{"color":"0FFF1F","x":18,"y":11},{"color":"0FFF1F","x":19,"y":11},{"color":"0FFF1F","x":20,"y":11},null,null,{"color":"0FFF1F","x":23,"y":11},{"color":"0FFF1F","x":24,"y":11},{"color":"0FFF1F","x":25,"y":11},null,null,null,{"color":"0FFF1F","x":29,"y":11},{"color":"0FFF1F","x":0,"y":12},null,{"color":"0FFF1F","x":2,"y":12},{"color":"0FFF1F","x":3,"y":12},{"color":"0FFF1F","x":4,"y":12},{"color":"0FFF1F","x":5,"y":12},null,null,{"color":"0FFF1F","x":8,"y":12},{"color":"0FFF1F","x":9,"y":12},{"color":"0FFF1F","x":10,"y":12},null,null,{"color":"0FFF1F","x":13,"y":12},null,null,{"color":"0FFF1F","x":16,"y":12},null,null,{"color":"0FFF1F","x":19,"y":12},{"color":"0FFF1F","x":20,"y":12},{"color":"0FFF1F","x":21,"y":12},null,null,{"color":"0FFF1F","x":24,"y":12},{"color":"0FFF1F","x":25,"y":12},{"color":"0FFF1F","x":26,"y":12},{"color":"0FFF1F","x":27,"y":12},{"color":"0FFF1F","x":28,"y":12},{"color":"0FFF1F","x":29,"y":12},{"color":"0FFF1F","x":0,"y":13},null,null,null,{"color":"0FFF1F","x":4,"y":13},{"color":"0FFF1F","x":5,"y":13},{"color":"0FFF1F","x":6,"y":13},null,null,{"color":"0FFF1F","x":9,"y":13},{"color":"0FFF1F","x":10,"y":13},{"color":"0FFF1F","x":11,"y":13},null,{"color":"0FFF1F","x":13,"y":13},{"color":"0FFF1F","x":14,"y":13},null,{"color":"0FFF1F","x":16,"y":13},{"color":"0FFF1F","x":17,"y":13},{"color":"0FFF1F","x":18,"y":13},{"color":"0FFF1F","x":19,"y":13},{"color":"0FFF1F","x":20,"y":13},{"color":"0FFF1F","x":21,"y":13},{"color":"0FFF1F","x":22,"y":13},null,null,null,null,{"color":"0FFF1F","x":27,"y":13},{"color":"0FFF1F","x":28,"y":13},{"color":"0FFF1F","x":29,"y":13},{"color":"0FFF1F","x":0,"y":14},{"color":"0FFF1F","x":1,"y":14},{"color":"0FFF1F","x":2,"y":14},null,null,null,{"color":"0FFF1F","x":6,"y":14},{"color":"0FFF1F","x":7,"y":14},null,null,{"color":"0FFF1F","x":10,"y":14},null,null,{"color":"0FFF1F","x":13,"y":14},null,null,{"color":"0FFF1F","x":16,"y":14},{"color":"0FFF1F","x":17,"y":14},null,null,null,null,{"color":"0FFF1F","x":22,"y":14},null,{"color":"0FFF1F","x":24,"y":14},{"color":"0FFF1F","x":25,"y":14},null,null,{"color":"0FFF1F","x":28,"y":14},{"color":"0FFF1F","x":29,"y":14},{"color":"0FFF1F","x":0,"y":15},{"color":"0FFF1F","x":1,"y":15},null,null,{"color":"0FFF1F","x":4,"y":15},null,null,{"color":"0FFF1F","x":7,"y":15},{"color":"0FFF1F","x":8,"y":15},null,null,null,{"color":"0FFF1F","x":12,"y":15},{"color":"0FFF1F","x":13,"y":15},null,{"color":"0FFF1F","x":15,"y":15},{"color":"0FFF1F","x":16,"y":15},null,null,{"color":"0FFF1F","x":19,"y":15},{"color":"0FFF1F","x":20,"y":15},null,null,null,null,{"color":"0FFF1F","x":25,"y":15},{"color":"0FFF1F","x":26,"y":15},null,null,{"color":"0FFF1F","x":29,"y":15},{"color":"0FFF1F","x":0,"y":16},null,null,{"color":"0FFF1F","x":3,"y":16},{"color":"0FFF1F","x":4,"y":16},{"color":"0FFF1F","x":5,"y":16},null,{"color":"0FFF1F","x":7,"y":16},{"color":"0FFF1F","x":8,"y":16},{"color":"0FFF1F","x":9,"y":16},{"color":"0FFF1F","x":10,"y":16},{"color":"0FFF1F","x":11,"y":16},{"color":"0FFF1F","x":12,"y":16},{"color":"0FFF1F","x":13,"y":16},null,null,{"color":"0FFF1F","x":16,"y":16},null,{"color":"0FFF1F","x":18,"y":16},{"color":"0FFF1F","x":19,"y":16},{"color":"0FFF1F","x":20,"y":16},null,{"color":"0FFF1F","x":22,"y":16},{"color":"0FFF1F","x":23,"y":16},null,null,{"color":"0FFF1F","x":26,"y":16},{"color":"0FFF1F","x":27,"y":16},null,{"color":"0FFF1F","x":29,"y":16},{"color":"0FFF1F","x":0,"y":17},null,{"color":"0FFF1F","x":2,"y":17},{"color":"0FFF1F","x":3,"y":17},{"color":"0FFF1F","x":4,"y":17},null,null,null,{"color":"0FFF1F","x":8,"y":17},{"color":"0FFF1F","x":9,"y":17},{"color":"0FFF1F","x":10,"y":17},null,null,{"color":"0FFF1F","x":13,"y":17},{"color":"0FFF1F","x":14,"y":17},null,null,null,null,{"color":"0FFF1F","x":19,"y":17},null,null,null,{"color":"0FFF1F","x":23,"y":17},{"color":"0FFF1F","x":24,"y":17},{"color":"0FFF1F","x":25,"y":17},{"color":"0FFF1F","x":26,"y":17},null,null,{"color":"0FFF1F","x":29,"y":17},{"color":"0FFF1F","x":0,"y":18},null,null,{"color":"0FFF1F","x":3,"y":18},{"color":"0FFF1F","x":4,"y":18},{"color":"0FFF1F","x":5,"y":18},{"color":"0FFF1F","x":6,"y":18},null,null,{"color":"0FFF1F","x":9,"y":18},null,null,{"color":"0FFF1F","x":12,"y":18},{"color":"0FFF1F","x":13,"y":18},null,null,{"color":"0FFF1F","x":16,"y":18},{"color":"0FFF1F","x":17,"y":18},{"color":"0FFF1F","x":18,"y":18},{"color":"0FFF1F","x":19,"y":18},{"color":"0FFF1F","x":20,"y":18},{"color":"0FFF1F","x":21,"y":18},null,{"color":"0FFF1F","x":23,"y":18},{"color":"0FFF1F","x":24,"y":18},{"color":"0FFF1F","x":25,"y":18},null,null,{"color":"0FFF1F","x":28,"y":18},{"color":"0FFF1F","x":29,"y":18},{"color":"0FFF1F","x":0,"y":19},{"color":"0FFF1F","x":1,"y":19},null,null,{"color":"0FFF1F","x":4,"y":19},null,{"color":"0FFF1F","x":6,"y":19},{"color":"0FFF1F","x":7,"y":19},null,null,null,{"color":"0FFF1F","x":11,"y":19},{"color":"0FFF1F","x":12,"y":19},{"color":"0FFF1F","x":13,"y":19},{"color":"0FFF1F","x":14,"y":19},{"color":"0FFF1F","x":15,"y":19},{"color":"0FFF1F","x":16,"y":19},{"color":"0FFF1F","x":17,"y":19},null,null,null,{"color":"0FFF1F","x":21,"y":19},{"color":"0FFF1F","x":22,"y":19},{"color":"0FFF1F","x":23,"y":19},null,null,null,{"color":"0FFF1F","x":27,"y":19},{"color":"0FFF1F","x":28,"y":19},{"color":"0FFF1F","x":29,"y":19},{"color":"0FFF1F","x":0,"y":20},{"color":"0FFF1F","x":1,"y":20},{"color":"0FFF1F","x":2,"y":20},null,null,null,{"color":"0FFF1F","x":6,"y":20},{"color":"0FFF1F","x":7,"y":20},{"color":"0FFF1F","x":8,"y":20},{"color":"0FFF1F","x":9,"y":20},{"color":"0FFF1F","x":10,"y":20},{"color":"0FFF1F","x":11,"y":20},{"color":"0FFF1F","x":12,"y":20},null,null,null,{"color":"0FFF1F","x":16,"y":20},{"color":"0FFF1F","x":17,"y":20},{"color":"0FFF1F","x":18,"y":20},null,{"color":"0FFF1F","x":20,"y":20},{"color":"0FFF1F","x":21,"y":20},{"color":"0FFF1F","x":22,"y":20},{"color":"0FFF1F","x":23,"y":20},{"color":"0FFF1F","x":24,"y":20},null,{"color":"0FFF1F","x":26,"y":20},{"color":"0FFF1F","x":27,"y":20},{"color":"0FFF1F","x":28,"y":20},{"color":"0FFF1F","x":29,"y":20},{"color":"0FFF1F","x":0,"y":21},{"color":"0FFF1F","x":1,"y":21},null,null,{"color":"0FFF1F","x":4,"y":21},null,null,{"color":"0FFF1F","x":7,"y":21},{"color":"0FFF1F","x":8,"y":21},{"color":"0FFF1F","x":9,"y":21},null,null,{"color":"0FFF1F","x":12,"y":21},{"color":"0FFF1F","x":13,"y":21},null,{"color":"0FFF1F","x":15,"y":21},{"color":"0FFF1F","x":16,"y":21},{"color":"0FFF1F","x":17,"y":21},null,null,null,{"color":"0FFF1F","x":21,"y":21},{"color":"0FFF1F","x":22,"y":21},{"color":"0FFF1F","x":23,"y":21},null,null,null,{"color":"0FFF1F","x":27,"y":21},{"color":"0FFF1F","x":28,"y":21},{"color":"0FFF1F","x":29,"y":21},{"color":"0FFF1F","x":0,"y":22},null,null,{"color":"0FFF1F","x":3,"y":22},{"color":"0FFF1F","x":4,"y":22},{"color":"0FFF1F","x":5,"y":22},null,null,{"color":"0FFF1F","x":8,"y":22},null,null,{"color":"0FFF1F","x":11,"y":22},{"color":"0FFF1F","x":12,"y":22},{"color":"0FFF1F","x":13,"y":22},null,null,{"color":"0FFF1F","x":16,"y":22},null,null,{"color":"0FFF1F","x":19,"y":22},null,null,{"color":"0FFF1F","x":22,"y":22},null,null,{"color":"0FFF1F","x":25,"y":22},null,null,{"color":"0FFF1F","x":28,"y":22},{"color":"0FFF1F","x":29,"y":22},null,null,{"color":"0FFF1F","x":2,"y":23},{"color":"0FFF1F","x":3,"y":23},{"color":"0FFF1F","x":4,"y":23},{"color":"0FFF1F","x":5,"y":23},{"color":"0FFF1F","x":6,"y":23},null,null,null,{"color":"0FFF1F","x":10,"y":23},{"color":"0FFF1F","x":11,"y":23},{"color":"0FFF1F","x":12,"y":23},{"color":"0FFF1F","x":13,"y":23},{"color":"0FFF1F","x":14,"y":23},null,null,null,{"color":"0FFF1F","x":18,"y":23},{"color":"0FFF1F","x":19,"y":23},{"color":"0FFF1F","x":20,"y":23},null,null,null,{"color":"0FFF1F","x":24,"y":23},{"color":"0FFF1F","x":25,"y":23},{"color":"0FFF1F","x":26,"y":23},null,null,null,{"color":"0FFF1F","x":0,"y":24},null,{"color":"0FFF1F","x":2,"y":24},{"color":"0FFF1F","x":3,"y":24},{"color":"0FFF1F","x":4,"y":24},{"color":"0FFF1F","x":5,"y":24},{"color":"0FFF1F","x":6,"y":24},{"color":"0FFF1F","x":7,"y":24},{"color":"0FFF1F","x":8,"y":24},{"color":"0FFF1F","x":9,"y":24},{"color":"0FFF1F","x":10,"y":24},{"color":"0FFF1F","x":11,"y":24},{"color":"0FFF1F","x":12,"y":24},{"color":"0FFF1F","x":13,"y":24},{"color":"0FFF1F","x":14,"y":24},{"color":"0FFF1F","x":15,"y":24},{"color":"0FFF1F","x":16,"y":24},{"color":"0FFF1F","x":17,"y":24},{"color":"0FFF1F","x":18,"y":24},{"color":"0FFF1F","x":19,"y":24},{"color":"0FFF1F","x":20,"y":24},{"color":"0FFF1F","x":21,"y":24},{"color":"0FFF1F","x":22,"y":24},{"color":"0FFF1F","x":23,"y":24},{"color":"0FFF1F","x":24,"y":24},{"color":"0FFF1F","x":25,"y":24},{"color":"0FFF1F","x":26,"y":24},{"color":"0FFF1F","x":27,"y":24},null,{"  color":"0FFF1F","x":29,"y":24}]'));
            this.addTerrainToPath(new Terrain('#848A64', 0.7));
            if (! this.preState) {
                this.preState = {};
                this.preState.agentsCanCommunicate = World.settings.agentsCanCommunicate;
                this.preState.ignoreResourceBalance = World.settings.ignoreResourceBalance;
                this.preState.agentsCanCommunicate = World.settings.useInlineResourceSwatch;
                this.preState.interval = Lifecycle.interval;
                this.preState.capabilities = FiercePlanet.Game.currentProfile.capabilities;
            }
            World.settings.agentsCanCommunicate = true;
            World.settings.ignoreResourceBalance = true;
            World.settings.useInlineResourceSwatch = false;
            Lifecycle.interval = 10;
            FiercePlanet.Game.currentProfile.capabilities = FiercePlanet.Profile.GENIUS_CAPABILITIES;
            FiercePlanet.GeneralUI.refreshSwatch();
            this.noSpeedChange = true;
        };

        this.level11.teardown = function() {
            console.log(this.preState.capabilities)
            if (!this.preState)
                return;
            World.settings.agentsCanCommunicate = this.preState.agentsCanCommunicate;
            World.settings.ignoreResourceBalance = this.preState.ignoreResourceBalance;
            World.settings.useInlineResourceSwatch = this.preState.agentsCanCommunicate;
            Lifecycle.interval = this.preState.interval;
            FiercePlanet.Game.currentProfile.capabilities = this.preState.capabilities;
            FiercePlanet.GeneralUI.refreshSwatch();
        };




        // Checked and authorised
        this.level1.image =( "/images/levels/level-1-art.jpg");
        this.level1.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://nuclearsyndrom.deviantart.com/"><em>Nuclear Winter</em></a>. Kindly reproduced courtesy of NuclearSyndrom.');
        this.level2.image =( "/images/levels/level-2-art.jpg");
        this.level2.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://www.slv.vic.gov.au/pictoria/b/2/8/doc/b28555.shtml"><em>Canvas Town, between Princess Bridge and South Melbourne in 1850\'s</em></a>. De Gruchy & Leigh, 1850-1860.');
        this.level3.image =( "/images/levels/level-3-art.jpg");
        this.level3.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://www.mynameisyakub.com"><em>The Apocalypse</em></a>. Kindly reproduced courtesy of Yakub.');
        this.level4.image =( "/images/levels/level-4-art.jpg");
        this.level4.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://en.wikipedia.org/wiki/File:Brueghel-tower-of-babel.jpg"><em>The Tower of Babel</em></a>. Pieter Bruegel the Elder, 1563.');
        this.level5.image =( "/images/levels/level-5-art.jpg");
        this.level5.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://http://en.wikipedia.org/wiki/File:Dore_London.jpg"><em>Over London–by Rail from London: A Pilgrimage</em></a>. Gustave Doré, 1870.');
        this.level6.image =( "/images/levels/level-6-art.jpg");
        this.level6.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://entertainment.howstuffworks.com/arts/artwork/claude-monet-paintings-1900-19082.htm"><em>Waterloo Bridge</em></a>. Claude Monet, 1900.');
        this.level7.image =( "/images/levels/level-7-art.jpg");
        this.level7.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://en.wikipedia.org/wiki/File:Ballarat_1853-54_von_guerard.jpg"><em>Ballarat 1853-54</em></a>. Eugene von Guerard, 1884.');
        this.level8.image =( "/images/levels/level-8-art.jpg");
        this.level8.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://en.wikipedia.org/wiki/File:Gustave_Caillebotte_-_Jour_de_pluie_%C3%A0_Paris.jpg"><em>A Rainy Day in Paris</em></a>. Gustave Caillebotte, 1877.');
        this.level9.image =( "/images/levels/level-9-art.jpg");
        this.level9.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://en.wikipedia.org/wiki/File:Renoir16.jpg"><em>Children on the Beach of Guernesey</em></a>. Pierre-Auguste Renoir, 1883.');
        this.level10.image =( "/images/levels/level-10-art.jpg");
        this.level10.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://nuclearsyndrom.deviantart.com/"><em>Nuclear Summer</em></a>. Kindly reproduced courtesy of NuclearSyndrom.');
        this.level11.image =( "/images/levels/level-11-art.jpg");
        this.level11.imageAttribution = ('<a tabindex="-1" target="_blank" href="http://nuclearsyndrom.deviantart.com/"><em>Mad Tea Party</em></a>. Sir John Tenniel, 1865.');




        /* Google Map links */
        if (!_.isUndefined(google) && !_.isUndefined(google.maps)) {
	        this.level1.mapOptions = ({mapTypeId: 'mars_infrared', center: new google.maps.LatLng(-80.73270997231712, 85.09268911182834), zoom: 3, tilt: 0}); // Budapest: 47.5153, 19.0782
	        this.level2.mapOptions = ({mapTypeId: google.maps.MapTypeId.SATELLITE, rotate: -0, center: new google.maps.LatLng(37.390296, -5.954579), zoom: 18, tilt: 45}); // Seville: 37.390296,-5.954579
	        this.level3.mapOptions = ({mapTypeId: google.maps.MapTypeId.SATELLITE, center: new google.maps.LatLng(45.433607, 12.338124), zoom: 18, tilt: 45}); // Venice: 45.433607,12.338124
	        this.level4.mapOptions = ({mapTypeId: google.maps.MapTypeId.SATELLITE, center: new google.maps.LatLng(41.890384354793554, 12.49228627979709), zoom: 19, tilt: 45}); // Rome, Colosseum: 41.890384354793554, 12.49228627979709
	        this.level5.mapOptions = ({mapTypeId: google.maps.MapTypeId.SATELLITE, center: new google.maps.LatLng(-33.434969, -70.655254), zoom: 18, tilt: 45}); // Santiago: -33.434969,-70.655254
	        this.level6.mapOptions = ({mapTypeId: google.maps.MapTypeId.SATELLITE, center: new google.maps.LatLng(47.487229, 19.07513), zoom: 18, tilt: 45}); // Budapest: 47.487229,19.07513
	        this.level7.mapOptions = ({mapTypeId: google.maps.MapTypeId.SATELLITE, center: new google.maps.LatLng(30.006533, -90.158792), zoom: 18, tilt: 45}); // New Orleans: 30.006533,-90.158792
	        this.level8.mapOptions = ({mapTypeId: google.maps.MapTypeId.SATELLITE, center: new google.maps.LatLng(33.441393, -112.077407), zoom: 18, tilt: 45}); // Phoenix, Arizona: 33.441393,-112.077407
	        this.level9.mapOptions = ({mapTypeId: google.maps.MapTypeId.SATELLITE, center: new google.maps.LatLng(21.281500, -157.839000), zoom: 18, tilt: 45}); // Honululu: 21.283355,-157.837787
	        this.level10.mapOptions = ({mapTypeId: google.maps.MapTypeId.SATELLITE, center: new google.maps.LatLng(30.265450, -97.744524), zoom: 18, tilt: 45}); // Austin, Texas: 30.265452,-97.744524
	        this.level11.mapOptions = ({mapTypeId: google.maps.MapTypeId.SATELLITE, center: new google.maps.LatLng(51, 73), zoom: 2}); // The World
		}


        // Prepare as a module
        this.id = "Default";
        this.name = "Default";
        this.position = 1;
        this.levels = [this.level0, this.level1, this.level2, this.level3, this.level4, this.level5, this.level6, this.level7, this.level8, this.level9, this.level10, this.level11 ];
    };

    this.init();

}).apply(Basic);

if (typeof exports !== "undefined")
    exports.Basic = Basic;
