import * as THREE from 'three';

/**
 * DialogueManager - Handles NPC conversations and dialogue choices
 * Phase 18: Village Interaction & Trading
 * 
 * Features:
 * - RPG-style dialogue box at bottom of screen
 * - Typewriter text effect with skip functionality
 * - Dialogue choices (numbered 1-4)
 * - NPC-specific dialogue trees (greetings, lore, hints)
 * - Merchant dialogue leads to shop
 * - Quest NPC story dialogues with branching
 */
export class DialogueManager {
  constructor(scene, camera, inputManager, gameManager, audioManager) {
    this.scene = scene;
    this.camera = camera;
    this.input = inputManager;
    this.gm = gameManager;
    this.audio = audioManager;
    
    // Dialogue state
    this.isActive = false;
    this.currentNPC = null;
    this.currentDialogue = null;
    this.currentLineIndex = 0;
    this.displayedText = '';
    this.fullText = '';
    this.typewriterIndex = 0;
    this.isTyping = false;
    this.selectedChoice = 0;
    this.choices = [];
    
    // Typewriter settings
    this.typeSpeed = 30; // ms per character
    this.typeTimer = 0;
    
    // Callbacks
    this.onShopRequest = null;  // Called when player wants to trade
    this.onDialogueEnd = null;  // Called when dialogue closes
    
    // NPC role display info
    this.npcRoles = {
      'merchant': { title: 'Merchant', icon: '🛒', color: '#ffcc66' },
      'blacksmith': { title: 'Blacksmith', icon: '⚒️', color: '#ff9966' },
      'guard': { title: 'Guard', icon: '🛡️', color: '#99ccff' },
      'elder': { title: 'Village Elder', icon: '📜', color: '#cc99ff' },
      'villager': { title: 'Villager', icon: '👤', color: '#aaddaa' },
      'healer': { title: 'Healer', icon: '💚', color: '#66ffcc' },
    };
    
    // Create dialogue UI
    this._createDialogueUI();
    
    // Bind input handlers
    this._boundKeyHandler = this._handleKeyDown.bind(this);
    this._boundClickHandler = this._handleClick.bind(this);
    
    console.log('[DialogueManager] Initialized');
  }
  
  /**
   * Create the dialogue box UI
   */
  _createDialogueUI() {
    // Main dialogue container
    this.dialogueContainer = document.createElement('div');
    this.dialogueContainer.id = 'dialogue-container';
    this.dialogueContainer.style.cssText = `
      position: fixed;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      max-width: 800px;
      display: none;
      flex-direction: column;
      z-index: 250;
      pointer-events: auto;
    `;
    
    // Portrait and name bar
    this.headerBar = document.createElement('div');
    this.headerBar.style.cssText = `
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: -2px;
      padding-left: 20px;
    `;
    
    // NPC icon/portrait
    this.npcPortrait = document.createElement('div');
    this.npcPortrait.style.cssText = `
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0.9);
      border: 2px solid rgba(255, 200, 100, 0.6);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    `;
    this.headerBar.appendChild(this.npcPortrait);
    
    // NPC name plate
    this.namePlate = document.createElement('div');
    this.namePlate.style.cssText = `
      padding: 8px 20px;
      background: linear-gradient(180deg, rgba(40, 30, 20, 0.95), rgba(20, 15, 10, 0.95));
      border: 2px solid rgba(255, 200, 100, 0.5);
      border-bottom: none;
      border-radius: 8px 8px 0 0;
      font-family: 'Cinzel', serif;
      font-size: 16px;
      font-weight: bold;
      color: #ffd088;
      letter-spacing: 2px;
      text-shadow: 0 0 8px rgba(255, 180, 0, 0.3);
    `;
    this.headerBar.appendChild(this.namePlate);
    
    this.dialogueContainer.appendChild(this.headerBar);
    
    // Main dialogue box
    this.dialogueBox = document.createElement('div');
    this.dialogueBox.style.cssText = `
      background: linear-gradient(180deg, rgba(20, 15, 10, 0.95), rgba(10, 8, 5, 0.98));
      border: 2px solid rgba(255, 200, 100, 0.4);
      border-radius: 8px;
      padding: 24px 30px;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(0, 0, 0, 0.3);
    `;
    
    // Dialogue text area
    this.textArea = document.createElement('div');
    this.textArea.style.cssText = `
      font-family: 'Georgia', serif;
      font-size: 17px;
      color: #e8e0d0;
      line-height: 1.7;
      min-height: 60px;
      margin-bottom: 16px;
    `;
    this.dialogueBox.appendChild(this.textArea);
    
    // Choices container
    this.choicesContainer = document.createElement('div');
    this.choicesContainer.style.cssText = `
      display: none;
      flex-direction: column;
      gap: 8px;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 200, 100, 0.2);
    `;
    this.dialogueBox.appendChild(this.choicesContainer);
    
    // Continue prompt
    this.continuePrompt = document.createElement('div');
    this.continuePrompt.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 12px;
      font-family: 'Cinzel', serif;
      font-size: 12px;
      color: #888;
      letter-spacing: 1px;
    `;
    
    // Animated arrow
    this.continueArrow = document.createElement('span');
    this.continueArrow.textContent = '▼';
    this.continueArrow.style.cssText = `
      animation: dialogueArrowBounce 0.8s ease-in-out infinite;
    `;
    
    this.continueText = document.createElement('span');
    this.continueText.textContent = 'Click or press SPACE to continue';
    
    this.continuePrompt.appendChild(this.continueText);
    this.continuePrompt.appendChild(this.continueArrow);
    this.dialogueBox.appendChild(this.continuePrompt);
    
    this.dialogueContainer.appendChild(this.dialogueBox);
    document.body.appendChild(this.dialogueContainer);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes dialogueArrowBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(4px); }
      }
      @keyframes dialogueFadeIn {
        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
      }
      #dialogue-container.visible {
        animation: dialogueFadeIn 0.3s ease-out forwards;
      }
      .dialogue-choice {
        padding: 10px 16px;
        background: rgba(40, 30, 20, 0.8);
        border: 1px solid rgba(255, 200, 100, 0.3);
        border-radius: 4px;
        font-family: 'Georgia', serif;
        font-size: 15px;
        color: #ccc;
        cursor: pointer;
        transition: all 0.15s ease-out;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .dialogue-choice:hover,
      .dialogue-choice.selected {
        background: rgba(80, 60, 30, 0.9);
        border-color: rgba(255, 200, 100, 0.6);
        color: #ffd088;
      }
      .dialogue-choice .choice-key {
        width: 24px;
        height: 24px;
        background: linear-gradient(145deg, #4a4a4a, #2a2a2a);
        border: 2px solid #666;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Cinzel', serif;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
      }
      .dialogue-choice.selected .choice-key {
        background: linear-gradient(145deg, #665522, #443311);
        border-color: #997744;
      }
    `;
    document.head.appendChild(style);
  }
  
  /**
   * Get dialogue data for an NPC type
   */
  _getDialogueData(npc) {
    // Comprehensive dialogue trees for each NPC type
    const dialogues = {
      'merchant': {
        greeting: [
          "Welcome, traveler! Looking to lighten your coin purse?",
          "Ah, a customer! I have just the wares you need.",
          "Step right up! Best goods this side of the mountains.",
        ],
        lines: [
          { text: "I source my goods from traders who brave the old roads. Dangerous work, but profitable.", choices: null },
          { text: "The corruption's been bad for business... but good for selling weapons, I suppose.", choices: null },
        ],
        tradePrompt: {
          text: "So, what'll it be? Care to browse my wares?",
          choices: [
            { text: "Let me see what you have.", action: 'shop' },
            { text: "What news do you have?", action: 'lore' },
            { text: "Maybe later.", action: 'close' },
          ]
        },
        lore: [
          "They say the corruption started in the old ruins to the east. Strange lights at night...",
          "A merchant friend of mine went north last week. Haven't heard from him since.",
          "If you're heading out there, stock up on potions. Trust me.",
        ],
      },
      
      'blacksmith': {
        greeting: [
          "*clangs hammer* Oh, a warrior! Let me see that blade of yours.",
          "The forge runs hot today. Good day for crafting.",
          "Steel and iron, that's what I know. What do you need?",
        ],
        lines: [
          { text: "This forge has been in my family for three generations. We know our craft.", choices: null },
          { text: "The corruption's twisted the metals in some areas. Have to be careful what ore I use.", choices: null },
        ],
        tradePrompt: {
          text: "Need a new weapon? Or perhaps some armor to protect you out there?",
          choices: [
            { text: "Show me your weapons and armor.", action: 'shop' },
            { text: "Tell me about the corruption.", action: 'lore' },
            { text: "I'll come back later.", action: 'close' },
          ]
        },
        lore: [
          "The old knight's armor... it used to gleam silver. Now it's all rusted and dark. Unnatural.",
          "I once forged a blade from corrupted ore. Had to destroy it. The thing whispered at night.",
          "If you find any ancient weapons out there, bring them to me. I can restore them.",
        ],
      },
      
      'healer': {
        greeting: [
          "You carry wounds, traveler. Let me help ease your burden.",
          "The light still shines in dark places. Welcome.",
          "Rest here awhile. You're safe within these walls.",
        ],
        lines: [
          { text: "I've treated many who returned from the wilds. The corruption leaves its mark on the soul as well as the body.", choices: null },
          { text: "Herbs grow scarce these days. The tainted land won't yield them anymore.", choices: null },
        ],
        tradePrompt: {
          text: "Do you need potions or remedies for your journey?",
          choices: [
            { text: "Yes, I need supplies.", action: 'shop' },
            { text: "What can you tell me about the corruption?", action: 'lore' },
            { text: "Thank you, but I must go.", action: 'close' },
          ]
        },
        lore: [
          "The corruption is not just physical. It feeds on despair, on hopelessness.",
          "There was once a great healer who ventured into the heart of darkness. She never returned.",
          "Keep your spirit strong, traveler. That is the best medicine against what lurks out there.",
        ],
      },
      
      'guard': {
        greeting: [
          "Halt! Oh, you're not one of those creatures. Forgive me, traveler.",
          "Stay alert. The night brings dangers.",
          "Another survivor? Good to see. We need all the fighters we can get.",
        ],
        lines: [
          { text: "We've doubled the watch since the attacks started. Still doesn't feel like enough.", choices: null },
          { text: "Lost two good men last week to those things. They came right up to the walls.", choices: null },
        ],
        continuePrompt: {
          text: "Anything else you need to know?",
          choices: [
            { text: "What's the situation outside?", action: 'lore' },
            { text: "Where should I explore?", action: 'hints' },
            { text: "Stay vigilant.", action: 'close' },
          ]
        },
        lore: [
          "The eastern ruins are crawling with corrupted ones. Strong ones too.",
          "We used to trade with the northern villages. Now the roads are too dangerous.",
          "If you're brave enough to clear out those creatures, we'd all be grateful.",
        ],
        hints: [
          "There's an old cave system to the south. Dangerous, but I've heard of treasure within.",
          "The ancient tower to the northeast... some say a powerful enemy guards it.",
          "Stick to the roads at night if you can. The forests hide things.",
        ],
      },
      
      'elder': {
        greeting: [
          "Ah, a traveler from beyond. Come, sit. I have much to tell you.",
          "The winds spoke of your coming. Welcome, warrior.",
          "Young one, you seek answers. I may have some.",
        ],
        lines: [
          { text: "This corruption... it is not the first time our world has seen such darkness.", choices: null },
          { text: "Long ago, there were those who could purify the taint. Perhaps that knowledge still exists.", choices: null },
          { text: "The old texts speak of a source, a heart of darkness. If it could be found...", choices: null },
        ],
        continuePrompt: {
          text: "What would you know, traveler?",
          choices: [
            { text: "Tell me of the corruption's origin.", action: 'lore' },
            { text: "Where should I seek answers?", action: 'hints' },
            { text: "Thank you for your wisdom.", action: 'close' },
          ]
        },
        lore: [
          "It began in the ancient places, where the veil between worlds grows thin.",
          "There were once guardians who held back the darkness. They fell, one by one.",
          "The corruption has a will, a hunger. It seeks to consume all life.",
        ],
        hints: [
          "Seek the ancient ruins. The old ones left knowledge there.",
          "There is power in the forgotten places. But also great danger.",
          "The corruption fears the light of the old magic. Find the sacred flames.",
        ],
      },
      
      'villager': {
        greeting: [
          "Oh! A stranger... are you friendly?",
          "Welcome to our village. It's not much, but it's home.",
          "Haven't seen an outsider in weeks. Where did you come from?",
          "Careful out there. The world's gone mad.",
        ],
        lines: [
          { text: "We try to live our lives, but the fear is always there.", choices: null },
          { text: "My family's been here for generations. We won't leave now.", choices: null },
          { text: "The guards do their best, but they can't be everywhere.", choices: null },
        ],
        continuePrompt: {
          text: "Is there something you wanted to ask?",
          choices: [
            { text: "What's life like here?", action: 'life' },
            { text: "Have you seen anything strange?", action: 'lore' },
            { text: "Take care of yourself.", action: 'close' },
          ]
        },
        life: [
          "We grow what we can, trade with the merchants. It's a simple life.",
          "The children can't play outside the walls anymore. Breaks my heart.",
          "Every night we hear things in the darkness. We try not to listen.",
        ],
        lore: [
          "Lights in the ruins at night. Unnatural, flickering lights.",
          "Old Miller says he saw a figure in black robes near the forest. Just watching.",
          "The well water tastes strange some mornings. We've started boiling everything.",
        ],
      },
    };
    
    return dialogues[npc.type] || dialogues['villager'];
  }
  
  /**
   * Start a dialogue with an NPC
   */
  startDialogue(npc) {
    if (this.isActive) return;
    
    this.isActive = true;
    this.currentNPC = npc;
    this.currentDialogue = this._getDialogueData(npc);
    this.currentLineIndex = 0;
    this.selectedChoice = 0;
    
    // Set NPC info in UI
    const roleInfo = this.npcRoles[npc.type] || this.npcRoles['villager'];
    this.npcPortrait.textContent = roleInfo.icon;
    this.npcPortrait.style.borderColor = roleInfo.color;
    this.namePlate.textContent = roleInfo.title;
    this.namePlate.style.color = roleInfo.color;
    
    // Show dialogue container
    this.dialogueContainer.style.display = 'flex';
    this.dialogueContainer.classList.add('visible');
    
    // Pick random greeting
    const greetings = this.currentDialogue.greeting;
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    
    // Start with greeting, then show trade/continue prompt
    this._displayLine(greeting, () => {
      // After greeting, show the prompt with choices
      this._showPromptWithChoices();
    });
    
    // Add input listeners
    document.addEventListener('keydown', this._boundKeyHandler);
    document.addEventListener('click', this._boundClickHandler);
    
    // Play dialogue open sound
    if (this.audio) {
      this.audio.play('menuSelect', { volume: 0.3 });
    }
    
    console.log('[DialogueManager] Started dialogue with', npc.type);
  }
  
  /**
   * Display a line with typewriter effect
   */
  _displayLine(text, onComplete = null) {
    this.fullText = text;
    this.displayedText = '';
    this.typewriterIndex = 0;
    this.isTyping = true;
    this.onLineComplete = onComplete;
    
    // Hide choices while typing
    this.choicesContainer.style.display = 'none';
    
    // Show continue prompt (will become active when typing done)
    this.continuePrompt.style.display = 'flex';
    this.continuePrompt.style.opacity = '0.3';
    this.continueText.textContent = 'Click or press SPACE to skip';
    
    // Start typewriter
    this._typewriterTick();
  }
  
  /**
   * Typewriter animation tick
   */
  _typewriterTick() {
    if (!this.isTyping) return;
    
    if (this.typewriterIndex < this.fullText.length) {
      this.displayedText += this.fullText[this.typewriterIndex];
      this.textArea.innerHTML = `"${this.displayedText}<span style="opacity: 0.5">|</span>"`;
      this.typewriterIndex++;
      
      // Play typing sound occasionally
      if (this.audio && this.typewriterIndex % 3 === 0) {
        // Soft click for typing
      }
      
      setTimeout(() => this._typewriterTick(), this.typeSpeed);
    } else {
      this._finishTyping();
    }
  }
  
  /**
   * Skip to end of current text
   */
  _skipTypewriter() {
    if (this.isTyping) {
      this.isTyping = false;
      this.displayedText = this.fullText;
      this.textArea.innerHTML = `"${this.displayedText}"`;
      this._finishTyping();
    }
  }
  
  /**
   * Called when typing is complete
   */
  _finishTyping() {
    this.isTyping = false;
    this.textArea.innerHTML = `"${this.fullText}"`;
    
    // Update continue prompt
    this.continuePrompt.style.opacity = '1';
    
    if (this.choices && this.choices.length > 0) {
      // Show choices
      this.continuePrompt.style.display = 'none';
      this._renderChoices();
    } else {
      this.continueText.textContent = 'Click or press SPACE to continue';
    }
    
    // Call completion callback if set
    if (this.onLineComplete) {
      // Delay to let player read
    }
  }
  
  /**
   * Show the main prompt with choices (trade or continue)
   */
  _showPromptWithChoices() {
    const promptData = this.currentDialogue.tradePrompt || this.currentDialogue.continuePrompt;
    
    if (promptData) {
      this.choices = promptData.choices;
      this._displayLine(promptData.text);
    } else {
      // No prompt, just cycle through random lines
      this._showRandomLine();
    }
  }
  
  /**
   * Show a random flavor line
   */
  _showRandomLine() {
    if (this.currentDialogue.lines && this.currentDialogue.lines.length > 0) {
      const lineData = this.currentDialogue.lines[Math.floor(Math.random() * this.currentDialogue.lines.length)];
      this.choices = lineData.choices;
      this._displayLine(lineData.text);
    } else {
      // Return to prompt
      this._showPromptWithChoices();
    }
  }
  
  /**
   * Show lore dialogue
   */
  _showLoreDialogue() {
    const loreLines = this.currentDialogue.lore;
    if (loreLines && loreLines.length > 0) {
      const line = loreLines[Math.floor(Math.random() * loreLines.length)];
      this.choices = null;
      this._displayLine(line, () => {
        setTimeout(() => this._showPromptWithChoices(), 500);
      });
    } else {
      this._showPromptWithChoices();
    }
  }
  
  /**
   * Show hints dialogue
   */
  _showHintsDialogue() {
    const hintsLines = this.currentDialogue.hints;
    if (hintsLines && hintsLines.length > 0) {
      const line = hintsLines[Math.floor(Math.random() * hintsLines.length)];
      this.choices = null;
      this._displayLine(line, () => {
        setTimeout(() => this._showPromptWithChoices(), 500);
      });
    } else {
      this._showPromptWithChoices();
    }
  }
  
  /**
   * Show life dialogue (villager specific)
   */
  _showLifeDialogue() {
    const lifeLines = this.currentDialogue.life;
    if (lifeLines && lifeLines.length > 0) {
      const line = lifeLines[Math.floor(Math.random() * lifeLines.length)];
      this.choices = null;
      this._displayLine(line, () => {
        setTimeout(() => this._showPromptWithChoices(), 500);
      });
    } else {
      this._showPromptWithChoices();
    }
  }
  
  /**
   * Render choice buttons
   */
  _renderChoices() {
    if (!this.choices || this.choices.length === 0) {
      this.choicesContainer.style.display = 'none';
      return;
    }
    
    this.choicesContainer.innerHTML = '';
    this.choicesContainer.style.display = 'flex';
    
    this.choices.forEach((choice, index) => {
      const choiceEl = document.createElement('div');
      choiceEl.className = 'dialogue-choice' + (index === this.selectedChoice ? ' selected' : '');
      
      const keyEl = document.createElement('span');
      keyEl.className = 'choice-key';
      keyEl.textContent = (index + 1).toString();
      choiceEl.appendChild(keyEl);
      
      const textEl = document.createElement('span');
      textEl.textContent = choice.text;
      choiceEl.appendChild(textEl);
      
      // Click handler
      choiceEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectedChoice = index;
        this._selectChoice();
      });
      
      // Hover handler
      choiceEl.addEventListener('mouseenter', () => {
        this.selectedChoice = index;
        this._updateChoiceSelection();
      });
      
      this.choicesContainer.appendChild(choiceEl);
    });
  }
  
  /**
   * Update choice selection highlight
   */
  _updateChoiceSelection() {
    const choiceEls = this.choicesContainer.querySelectorAll('.dialogue-choice');
    choiceEls.forEach((el, index) => {
      el.classList.toggle('selected', index === this.selectedChoice);
    });
  }
  
  /**
   * Execute the selected choice
   */
  _selectChoice() {
    if (!this.choices || this.choices.length === 0) return;
    
    const choice = this.choices[this.selectedChoice];
    
    // Play selection sound
    if (this.audio) {
      this.audio.play('menuSelect', { volume: 0.4 });
    }
    
    // Handle choice action
    switch (choice.action) {
      case 'shop':
        this._requestShop();
        break;
      case 'lore':
        this._showLoreDialogue();
        break;
      case 'hints':
        this._showHintsDialogue();
        break;
      case 'life':
        this._showLifeDialogue();
        break;
      case 'close':
        this.endDialogue();
        break;
      default:
        // Unknown action, just show random line
        this._showRandomLine();
    }
  }
  
  /**
   * Request to open the shop
   */
  _requestShop() {
    // Transition line before shop
    this._displayLine("Let me show you what I have...", () => {
      setTimeout(() => {
        if (this.onShopRequest) {
          this.onShopRequest(this.currentNPC);
        }
        this.endDialogue(true); // Silent end (shop is opening)
      }, 300);
    });
  }
  
  /**
   * Handle keyboard input
   */
  _handleKeyDown(e) {
    if (!this.isActive) return;
    
    // Number keys for choices
    if (e.key >= '1' && e.key <= '9') {
      const index = parseInt(e.key) - 1;
      if (this.choices && index < this.choices.length) {
        e.preventDefault();
        this.selectedChoice = index;
        this._selectChoice();
        return;
      }
    }
    
    switch (e.code) {
      case 'Space':
      case 'Enter':
      case 'KeyE':
        e.preventDefault();
        if (this.isTyping) {
          this._skipTypewriter();
        } else if (this.choices && this.choices.length > 0) {
          this._selectChoice();
        } else if (this.onLineComplete) {
          this.onLineComplete();
          this.onLineComplete = null;
        } else {
          this._showPromptWithChoices();
        }
        break;
        
      case 'ArrowUp':
      case 'KeyW':
        e.preventDefault();
        if (this.choices && this.choices.length > 0) {
          this.selectedChoice = Math.max(0, this.selectedChoice - 1);
          this._updateChoiceSelection();
        }
        break;
        
      case 'ArrowDown':
      case 'KeyS':
        e.preventDefault();
        if (this.choices && this.choices.length > 0) {
          this.selectedChoice = Math.min(this.choices.length - 1, this.selectedChoice + 1);
          this._updateChoiceSelection();
        }
        break;
        
      case 'Escape':
        e.preventDefault();
        this.endDialogue();
        break;
    }
  }
  
  /**
   * Handle click input
   */
  _handleClick(e) {
    if (!this.isActive) return;
    
    // If clicking outside dialogue box, close
    if (!this.dialogueContainer.contains(e.target)) {
      // Allow click to skip/advance
      if (this.isTyping) {
        this._skipTypewriter();
      } else if (!this.choices || this.choices.length === 0) {
        if (this.onLineComplete) {
          this.onLineComplete();
          this.onLineComplete = null;
        } else {
          this._showPromptWithChoices();
        }
      }
      return;
    }
    
    // Clicking on dialogue area (not a choice)
    if (this.isTyping) {
      this._skipTypewriter();
    }
  }
  
  /**
   * End the dialogue
   */
  endDialogue(silent = false) {
    if (!this.isActive) return;
    
    this.isActive = false;
    this.isTyping = false;
    
    // Hide UI
    this.dialogueContainer.classList.remove('visible');
    this.dialogueContainer.style.display = 'none';
    
    // Remove listeners
    document.removeEventListener('keydown', this._boundKeyHandler);
    document.removeEventListener('click', this._boundClickHandler);
    
    // Play close sound
    if (!silent && this.audio) {
      this.audio.play('menuClose', { volume: 0.3 });
    }
    
    // Callback
    if (this.onDialogueEnd) {
      this.onDialogueEnd();
    }
    
    // Reset state
    this.currentNPC = null;
    this.currentDialogue = null;
    this.choices = [];
    this.onLineComplete = null;
    
    console.log('[DialogueManager] Dialogue ended');
  }
  
  /**
   * Check if dialogue is active
   */
  isDialogueActive() {
    return this.isActive;
  }
  
  /**
   * Set callback for shop requests
   */
  setShopCallback(callback) {
    this.onShopRequest = callback;
  }
  
  /**
   * Set callback for dialogue end
   */
  setEndCallback(callback) {
    this.onDialogueEnd = callback;
  }
  
  /**
   * Update (called each frame - not much needed for dialogue)
   */
  update(delta) {
    // Could add animations here if needed
  }
  
  /**
   * Cleanup
   */
  dispose() {
    this.endDialogue(true);
    
    if (this.dialogueContainer) {
      this.dialogueContainer.remove();
    }
  }
}
