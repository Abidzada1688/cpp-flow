/* ==========================================================================
   C++ MICRO-LEARNING APPLICATION - CORE SCRIPT (app.js)
   Vanilla JavaScript logic for C++ Duo-Light learning app.
   ========================================================================== */

/**
 * DEFAULT_LESSONS_DATA
 * Built-in curriculum fallback. This ensures the app runs perfectly even if
 * fetch('lessons.json') cannot access external files (such as local file:// mode).
 */
const DEFAULT_LESSONS_DATA = {
  curriculumTitle: "C++ Micro-Learning Course",
  modules: [
    {
      id: "module_1",
      title: "Module 1: C++ Basics & Console Output",
      level: "Basic",
      description: "Learn how to send text to your screen using the C++ standard output stream.",
      cards: [
        {
          id: "m1_c1",
          instruction: "Direct the greeting text into the standard output stream.",
          concept: "In C++, std::cout acts like your computer screen. We use stream insertion arrows to push text onto it.",
          code: "[hint:std::cout|Standard output stream. Think of this as your computer screen.] [blank] [hint:\"Welcome!\":String literal. Text wrapped in double quotes.] [hint:;:Semicolon. Ends the statement like a period in a sentence.];",
          options: [">> ", "<< ", "::", "=="],
          correctAnswer: "<<",
          explanation: "The << arrows point to the left, pushing data directly into the std::cout screen. The >> arrows are used for reading input with std::cin."
        },
        {
          id: "m1_c2",
          instruction: "Add a new line after printing your message.",
          concept: "std::endl moves the cursor to the next line on the screen and flushes the output buffer.",
          code: "std::cout << \"Hello World!\" << [blank] [hint:;:Semicolon ends this C++ command.];",
          options: ["std::endl", "std::next", "newline()", "\\break"],
          correctAnswer: "std::endl",
          explanation: "std::endl stands for 'end line'. It starts a new line on the screen."
        },
        {
          id: "m1_c3",
          instruction: "Complete the preprocessor directive to include input-output tools.",
          concept: "Before using std::cout, you must include the input-output stream library header.",
          code: "[hint:#include|Preprocessor directive that includes external libraries before compiling.] <[blank]>",
          options: ["iostream", "stdio", "console", "stream"],
          correctAnswer: "iostream",
          explanation: "iostream stands for Input Output Stream. It gives C++ access to std::cout and std::cin."
        },
        {
          id: "m1_c4",
          instruction: "Every C++ program starts inside the main entry point function.",
          concept: "The main function returns an integer code to the operating system when it finishes.",
          code: "[blank] [hint:main()|The starting point function where C++ programs begin running.] {\n    return 0;\n}",
          options: ["int", "start", "void*", "program"],
          correctAnswer: "int",
          explanation: "In standard C++, the main function must return an integer type (int) indicating success or failure to the operating system."
        }
      ]
    },
    {
      id: "module_2",
      title: "Module 2: Variables & Fundamental Types",
      level: "Basic",
      description: "Store whole numbers, decimal values, and true/false states in memory.",
      cards: [
        {
          id: "m2_c1",
          instruction: "Choose the type keyword to store whole numbers.",
          concept: "C++ is strongly typed. You must declare what kind of data a variable holds before using it.",
          code: "[blank] [hint:playerScore|Variable name holding the player's total points.] = 100;",
          options: ["int", "whole", "num", "float"],
          correctAnswer: "int",
          explanation: "int is the standard C++ keyword for integer numbers like -5, 0, and 100."
        },
        {
          id: "m2_c2",
          instruction: "Declare a decimal number with high precision.",
          concept: "Floating-point numbers can hold fractions and decimal points.",
          code: "[blank] [hint:itemPrice|Variable name storing the price of an item.] = 19.99;",
          options: ["double", "decimal", "currency", "int"],
          correctAnswer: "double",
          explanation: "double provides double-precision floating-point numbers, ideal for numbers with decimal values."
        },
        {
          id: "m2_c3",
          instruction: "Read user input from the keyboard into a variable.",
          concept: "std::cin uses extraction arrows pointing to the right to place input into a variable.",
          code: "int userAge;\n[hint:std::cin|Standard input stream that reads keys typed by the user.] [blank] userAge;",
          options: [">> ", "<< ", "->", "=>"],
          correctAnswer: ">>",
          explanation: "The >> operator points right, extracting data from std::cin and saving it into userAge."
        },
        {
          id: "m2_c4",
          instruction: "Store a single letter or character.",
          concept: "Single characters use the char type and must be surrounded by single quotes.",
          code: "[blank] [hint:grade|Variable holding a letter grade.] = 'A';",
          options: ["char", "letter", "string", "symbol"],
          correctAnswer: "char",
          explanation: "char stores a single 1-byte character enclosed in single quotes like 'A' or 'z'."
        }
      ]
    },
    {
      id: "module_3",
      title: "Module 3: Conditionals & Decisions",
      level: "Intermediate",
      description: "Make smart decisions in your code using comparison operators and boolean logic.",
      cards: [
        {
          id: "m3_c1",
          instruction: "Check if two values are exactly equal.",
          concept: "In C++, a single = assigns a value, while double == checks if two values match.",
          code: "if (lives [blank] 0) {\n    std::cout << \"Game Over!\";\n}",
          options: ["==", "=", "equals", "is"],
          correctAnswer: "==",
          explanation: "Use == to test for equality. A single = will accidentally overwrite the value instead of comparing it."
        },
        {
          id: "m3_c2",
          instruction: "Require BOTH conditions to be true using the logical AND operator.",
          concept: "Logical operators combine multiple true/false checks into one decision.",
          code: "if (hasKey == true [blank] playerLevel >= 5) {\n    openDoor();\n}",
          options: ["&&", "||", "AND", "&"],
          correctAnswer: "&&",
          explanation: "&& is the logical AND operator. It only evaluates to true if both conditions are satisfied."
        },
        {
          id: "m3_c3",
          instruction: "Provide a fallback branch when the if check evaluates to false.",
          concept: "The else block executes only when the preceding if test is not true.",
          code: "if (score > 50) {\n    std::cout << \"Pass!\";\n} [blank] {\n    std::cout << \"Try Again!\";\n}",
          options: ["else", "otherwise", "fallback", "default"],
          correctAnswer: "else",
          explanation: "The else keyword marks the code that runs when the if condition evaluates to false."
        }
      ]
    },
    {
      id: "module_4",
      title: "Module 4: Loops & Repetition",
      level: "Intermediate",
      description: "Run code repeatedly without repeating yourself using for and while loops.",
      cards: [
        {
          id: "m4_c1",
          instruction: "Complete the loop header to count from 0 up to 4.",
          concept: "A for loop specifies an initializer, a stopping condition, and an increment step.",
          code: "for (int i = 0; [blank]; i++) {\n    std::cout << i;\n}",
          options: ["i < 5", "i == 5", "i > 5", "i <= 4;"],
          correctAnswer: "i < 5",
          explanation: "i < 5 keeps the loop running while i is 0, 1, 2, 3, and 4, then stops when i reaches 5."
        },
        {
          id: "m4_c2",
          instruction: "Increase the loop counter by 1 in every iteration.",
          concept: "The ++ increment operator increases the value stored in a variable by exactly one.",
          code: "int count = 0;\ncount[blank];",
          options: ["++", "+=0", "**", "--"],
          correctAnswer: "++",
          explanation: "count++ is shorthand in C++ for count = count + 1."
        },
        {
          id: "m4_c3",
          instruction: "Keep running a loop while health is greater than zero.",
          concept: "A while loop tests its condition before every pass through the loop body.",
          code: "[blank] (health > 0) {\n    playRound();\n}",
          options: ["while", "repeat", "loop", "during"],
          correctAnswer: "while",
          explanation: "The while keyword repeats the block as long as the test condition remains true."
        }
      ]
    },
    {
      id: "module_5",
      title: "Module 5: Functions & Scope",
      level: "Intermediate",
      description: "Organize your code into reusable blocks with parameters and return values.",
      cards: [
        {
          id: "m5_c1",
          instruction: "Send the calculated sum back to the caller.",
          concept: "The return keyword stops execution of the function and provides the output value.",
          code: "int add(int a, int b) {\n    int sum = a + b;\n    [blank] sum;\n}",
          options: ["return", "output", "send", "give"],
          correctAnswer: "return",
          explanation: "return hands the value back to wherever the function was called in your program."
        },
        {
          id: "m5_c2",
          instruction: "Specify that a function does not return any value.",
          concept: "When a function only performs an action like printing, its return type is void.",
          code: "[blank] [hint:printDivider()|Function that prints a dashed line on the screen.] {\n    std::cout << \"--------\" << std::endl;\n}",
          options: ["void", "null", "empty", "none"],
          correctAnswer: "void",
          explanation: "void tells the C++ compiler that this function will not return any data."
        },
        {
          id: "m5_c3",
          instruction: "Pass a variable by reference so the function can modify the original variable.",
          concept: "Placing an & after the type lets the function work directly on the original memory.",
          code: "void doubleValue(int[blank] num) {\n    num = num * 2;\n}",
          options: ["&", "*", "%", "@"],
          correctAnswer: "&",
          explanation: "int& creates a reference parameter, allowing the function to modify the caller's actual variable."
        }
      ]
    },
    {
      id: "module_6",
      title: "Module 6: Pointers & Memory Addresses",
      level: "Advanced",
      description: "Master computer memory, addresses, and pointer dereferencing in modern C++.",
      cards: [
        {
          id: "m6_c1",
          instruction: "Get the physical memory address of a variable.",
          concept: "The address-of operator & returns the location in RAM where a variable is stored.",
          code: "int score = 42;\nint* ptr = [blank]score;",
          options: ["&", "*", "#", "->"],
          correctAnswer: "&",
          explanation: "The & symbol before a variable gets its memory address so a pointer can store it."
        },
        {
          id: "m6_c2",
          instruction: "Dereference the pointer to change the value it points to.",
          concept: "The asterisk * before a pointer accesses the actual value stored at that address.",
          code: "int score = 42;\nint* ptr = &score;\n[blank]ptr = 100;",
          options: ["*", "&", "val", "->"],
          correctAnswer: "*",
          explanation: "*ptr dereferences the pointer, allowing you to read or write the value at the address."
        },
        {
          id: "m6_c3",
          instruction: "Set an empty pointer safely using modern C++ standards.",
          concept: "Modern C++ uses nullptr instead of the old C-style NULL or 0.",
          code: "int* safePointer = [blank];",
          options: ["nullptr", "NULL", "nil", "0x0"],
          correctAnswer: "nullptr",
          explanation: "nullptr is type-safe and prevents accidental integer conversion errors in C++."
        }
      ]
    },
    {
      id: "module_7",
      title: "Module 7: Classes & Object-Oriented C++",
      level: "Advanced",
      description: "Model real-world objects using classes, constructors, and encapsulation.",
      cards: [
        {
          id: "m7_c1",
          instruction: "Make class members accessible from outside the class.",
          concept: "By default, class members are private. The public: label allows outside access.",
          code: "class Player {\n[blank]:\n    int health = 100;\n    void heal() { health += 10; }\n};",
          options: ["public", "open", "visible", "shared"],
          correctAnswer: "public",
          explanation: "public: makes members available to any code that uses an instance of the class."
        },
        {
          id: "m7_c2",
          instruction: "Create an instance of the Player class and call its heal method.",
          concept: "Use the dot . operator to access public members of an object instance.",
          code: "Player hero;\nhero[blank]heal();",
          options: [".", "->", "::", "#"],
          correctAnswer: ".",
          explanation: "Use the dot . operator to call methods or access properties on an object instance."
        },
        {
          id: "m7_c3",
          instruction: "Define a constructor that runs automatically when an object is created.",
          concept: "A constructor has the exact same name as the class and has no return type.",
          code: "class Robot {\npublic:\n    [blank]() {\n        std::cout << \"Robot initialized!\";\n    }\n};",
          options: ["Robot", "init", "construct", "void Robot"],
          correctAnswer: "Robot",
          explanation: "A constructor method must share the exact same name as its enclosing class with no return type."
        }
      ]
    }
  ]
};

/* --------------------------------------------------------------------------
   APPLICATION STATE
   Holds all in-memory variables that track the user's progress.
   -------------------------------------------------------------------------- */
const AppState = {
  curriculum: null,          // Full JSON curriculum data
  currentModuleIndex: 0,     // Index of current module (0-based)
  currentCardIndex: 0,       // Index of current card within current module
  hearts: 5,                 // Total user hearts (starts at 5)
  streak: 12,                // Current streak days
  completedModules: [],      // Array of module IDs the user has finished
  selectedValue: null,       // Value of the option the user clicked
  isAnswerSubmitted: false,  // True when the user has clicked "CHECK"
  isSoundMuted: false        // Audio mute preference
};

/* --------------------------------------------------------------------------
   AUDIO SYNTHESIZER (WEB AUDIO API)
   Generates clean, pleasant chimes without needing external audio files.
   -------------------------------------------------------------------------- */
let audioCtx = null;

/**
 * playSound
 * Synthesizes short, friendly tones for user interactions (correct, wrong, click, fanfare).
 * @param {string} type - Tone type: 'click', 'correct', 'wrong', or 'fanfare'
 */
function playSound(type) {
  if (AppState.isSoundMuted) return;

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;

    if (type === 'click') {
      // Soft high tick for button presses
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'correct') {
      // Pleasant rising two-tone chime (Duolingo style)
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc1.type = 'triangle';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc2.frequency.setValueAtTime(783.99, now + 0.1); // G5

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);

      osc1.start(now);
      osc2.start(now + 0.1);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } else if (type === 'wrong') {
      // Gentle low double-boop for wrong answers
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.setValueAtTime(196, now + 0.12); // G3
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'fanfare') {
      // Celebratory 3-chord fanfare on module completion
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + index * 0.08);
        gain.gain.setValueAtTime(0.12, now + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + index * 0.08);
        osc.stop(now + 0.7);
      });
    }
  } catch (err) {
    console.warn('Audio playback not supported or blocked:', err);
  }
}

/* --------------------------------------------------------------------------
   LOCAL STORAGE MANAGEMENT
   Saves and loads progress so the learner never loses their streak or hearts.
   -------------------------------------------------------------------------- */

/**
 * saveProgressToLocalStorage
 * Writes the user's hearts, streak, completed modules, and active position to localStorage.
 */
function saveProgressToLocalStorage() {
  try {
    const dataToSave = {
      hearts: AppState.hearts,
      streak: AppState.streak,
      completedModules: AppState.completedModules,
      currentModuleIndex: AppState.currentModuleIndex,
      currentCardIndex: AppState.currentCardIndex,
      isSoundMuted: AppState.isSoundMuted
    };
    localStorage.setItem('cpp_learning_app_progress', JSON.stringify(dataToSave));
  } catch (err) {
    console.warn('Unable to write to localStorage:', err);
  }
}

/**
 * loadProgressFromLocalStorage
 * Reads saved data on page load, falling back to sensible defaults if none exists.
 */
function loadProgressFromLocalStorage() {
  try {
    const raw = localStorage.getItem('cpp_learning_app_progress');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (typeof parsed.hearts === 'number') AppState.hearts = parsed.hearts;
      if (typeof parsed.streak === 'number') AppState.streak = parsed.streak;
      if (Array.isArray(parsed.completedModules)) AppState.completedModules = parsed.completedModules;
      if (typeof parsed.currentModuleIndex === 'number') AppState.currentModuleIndex = parsed.currentModuleIndex;
      if (typeof parsed.currentCardIndex === 'number') AppState.currentCardIndex = parsed.currentCardIndex;
      if (typeof parsed.isSoundMuted === 'boolean') AppState.isSoundMuted = parsed.isSoundMuted;
    }
  } catch (err) {
    console.warn('Unable to read from localStorage:', err);
  }
}

/**
 * openResetModal
 * Displays the in-page confirmation modal before resetting progress.
 */
function openResetModal() {
  playSound('click');
  const modal = document.getElementById('resetModal');
  if (modal) modal.classList.add('active');
}

/**
 * closeResetModal
 * Closes the in-page reset confirmation modal without changing progress.
 */
function closeResetModal() {
  const modal = document.getElementById('resetModal');
  if (modal) modal.classList.remove('active');
}

/**
 * executeResetProgress
 * Resets user progress back to defaults, saves state, and reloads the first card.
 */
function executeResetProgress() {
  AppState.hearts = 5;
  AppState.streak = 1;
  AppState.completedModules = [];
  AppState.currentModuleIndex = 0;
  AppState.currentCardIndex = 0;
  saveProgressToLocalStorage();
  updateHeaderStats();
  loadCurrentCard();
  closeResetModal();
  closeModuleDrawer();
  playSound('correct');
}

/* --------------------------------------------------------------------------
   CURRICULUM INITIALIZATION & JSON FETCH
   Uses fetch('lessons.json') as requested, with graceful fallback.
   -------------------------------------------------------------------------- */

/**
 * initCurriculum
 * Fetches curriculum from lessons.json or loads embedded fallback if fetch fails.
 */
async function initCurriculum() {
  try {
    const response = await fetch('lessons.json');
    if (!response.ok) {
      throw new Error('Network response returned status ' + response.status);
    }
    const data = await response.json();
    if (data && data.modules && data.modules.length > 0) {
      AppState.curriculum = data;
      console.log('Successfully loaded curriculum from lessons.json');
    } else {
      throw new Error('Invalid JSON structure in lessons.json');
    }
  } catch (err) {
    console.warn('Could not load lessons.json via fetch, using embedded fallback curriculum:', err);
    AppState.curriculum = DEFAULT_LESSONS_DATA;
  }

  // Restore saved learner state
  loadProgressFromLocalStorage();

  // Validate bounds in case the user's saved indexes exceed curriculum length
  if (AppState.currentModuleIndex >= AppState.curriculum.modules.length) {
    AppState.currentModuleIndex = 0;
    AppState.currentCardIndex = 0;
  }
  const activeMod = AppState.curriculum.modules[AppState.currentModuleIndex];
  if (AppState.currentCardIndex >= activeMod.cards.length) {
    AppState.currentCardIndex = 0;
  }

  // Render initial UI
  updateHeaderStats();
  loadCurrentCard();
  setupEventListeners();
}

/* --------------------------------------------------------------------------
   DOM RENDERING FUNCTIONS
   Dynamically updates the C++ code block, options, tooltips, and progress bar.
   -------------------------------------------------------------------------- */

/**
 * updateHeaderStats
 * Refreshes the hearts count, streak count, and sound icon in the top navigation bar.
 */
function updateHeaderStats() {
  const heartsEl = document.getElementById('heartsCount');
  const streakEl = document.getElementById('streakCount');
  const soundIconEl = document.getElementById('soundIcon');

  if (heartsEl) heartsEl.innerText = AppState.hearts;
  if (streakEl) streakEl.innerText = AppState.streak;

  // Toggle sound icon between unmuted and muted SVG
  if (soundIconEl) {
    if (AppState.isSoundMuted) {
      soundIconEl.innerHTML = `
        <svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
      `;
    } else {
      soundIconEl.innerHTML = `
        <svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
      `;
    }
  }
}

/**
 * parseCodeSnippet
 * Transforms code text containing [blank] and [hint:word|meaning] tags into interactive HTML elements.
 * @param {string} codeRaw - Raw code string from JSON
 * @returns {string} HTML string with interactive spans
 */
function parseCodeSnippet(codeRaw) {
  // Step 1: Replace [blank] or ___ with an interactive blank token
  let parsed = codeRaw.replace(/\[blank\]|___/g, '<span id="blankSpot" class="blank-token">___</span>');

  // Step 2: Replace [hint:word|hintText] or [hint:word:hintText] with a clickable hint token
  parsed = parsed.replace(/\[hint:([^|\]:]+)[|:]([^\]]+)\]/g, (match, word, hint) => {
    // Escape quotes to keep the data attribute safe
    const safeHint = hint.trim().replace(/"/g, '&quot;');
    const safeWord = word.trim();
    return `<span class="hint-token" data-hint="${safeHint}">${safeWord}</span>`;
  });

  return parsed;
}

/**
 * loadCurrentCard
 * Populates all DOM elements for the current card in the active module.
 */
function loadCurrentCard() {
  // Reset interaction state for the new card
  AppState.selectedValue = null;
  AppState.isAnswerSubmitted = false;

  const currentModule = AppState.curriculum.modules[AppState.currentModuleIndex];
  const currentCard = currentModule.cards[AppState.currentCardIndex];

  // Update Module and Step Banners
  const moduleBadge = document.getElementById('moduleBadge');
  const stepBadge = document.getElementById('stepBadge');
  if (moduleBadge) moduleBadge.innerText = currentModule.title;
  if (stepBadge) stepBadge.innerText = `Card ${AppState.currentCardIndex + 1} of ${currentModule.cards.length}`;

  // Update Progress Bar
  const progressFill = document.getElementById('progressFill');
  if (progressFill) {
    const percent = Math.round((AppState.currentCardIndex / currentModule.cards.length) * 100);
    progressFill.style.width = percent + '%';
  }

  // Update Instruction Title and Concept Box
  const instructionTitle = document.getElementById('instructionTitle');
  const conceptBox = document.getElementById('conceptBox');
  if (instructionTitle) instructionTitle.innerText = currentCard.instruction;
  if (conceptBox) conceptBox.innerText = currentCard.concept;

  // Render C++ Code Snippet
  const codeBlock = document.getElementById('codeBlock');
  if (codeBlock) {
    codeBlock.innerHTML = parseCodeSnippet(currentCard.code);
    attachHintTokenListeners();
  }

  // Render Multiple Choice Option Buttons
  const optionsGrid = document.getElementById('optionsGrid');
  if (optionsGrid) {
    optionsGrid.innerHTML = '';
    currentCard.options.forEach((optionText) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.type = 'button';
      btn.innerText = optionText;
      btn.addEventListener('click', () => handleOptionSelect(btn, optionText));
      optionsGrid.appendChild(btn);
    });
  }

  // Reset Bottom Action Sheet to neutral initial state
  resetBottomSheet();

  // Make sure the main card view is visible (and modal views hidden)
  showView('cardView');
}

/**
 * resetBottomSheet
 * Hides feedback drawer and resets the action button to disabled state.
 */
function resetBottomSheet() {
  const bottomSheet = document.getElementById('bottomSheet');
  const actionBtn = document.getElementById('actionBtn');

  if (bottomSheet) {
    bottomSheet.className = 'bottom-sheet';
  }
  if (actionBtn) {
    actionBtn.className = 'action-btn';
    actionBtn.disabled = true;
    actionBtn.innerText = 'CHECK';
  }
}

/**
 * attachHintTokenListeners
 * Adds click handlers to all dotted-underline words in the code block to show tooltips.
 */
function attachHintTokenListeners() {
  const tokens = document.querySelectorAll('.hint-token');
  tokens.forEach((token) => {
    token.addEventListener('click', (e) => {
      e.stopPropagation();
      const hintText = token.getAttribute('data-hint');
      showTooltip(token, hintText);
    });
  });
}

/**
 * showTooltip
 * Positions and displays a small floating tooltip right above a clicked code token.
 * @param {HTMLElement} targetElement - The word token element clicked
 * @param {string} text - The plain-English hint text
 */
function showTooltip(targetElement, text) {
  const tooltip = document.getElementById('codeTooltip');
  if (!tooltip) return;

  tooltip.innerText = text;
  tooltip.style.display = 'block';

  // Calculate coordinates relative to the code-container
  const container = document.getElementById('codeBlock');
  const containerRect = container.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();

  // Calculate left center
  const leftPos = (targetRect.left - containerRect.left) + (targetRect.width / 2);
  // Calculate top right above the word
  const topPos = (targetRect.top - containerRect.top) - 10;

  tooltip.style.left = leftPos + 'px';
  tooltip.style.top = topPos + 'px';
  tooltip.style.transform = 'translate(-50%, -100%)';

  playSound('click');
}

/**
 * hideTooltip
 * Hides the floating hint tooltip when the user clicks elsewhere.
 */
function hideTooltip() {
  const tooltip = document.getElementById('codeTooltip');
  if (tooltip) {
    tooltip.style.display = 'none';
  }
}

/* --------------------------------------------------------------------------
   INTERACTION HANDLERS
   Handles option selection, answer validation, and card advancement.
   -------------------------------------------------------------------------- */

/**
 * handleOptionSelect
 * Handles when a user taps one of the 3D option buttons.
 * @param {HTMLElement} btn - The clicked button element
 * @param {string} value - The text value of the option
 */
function handleOptionSelect(btn, value) {
  // If the answer was already checked, do not allow changing options
  if (AppState.isAnswerSubmitted) return;

  playSound('click');

  // Remove selected styling from all other option buttons
  document.querySelectorAll('.option-btn').forEach((b) => b.classList.remove('selected'));

  // Mark the clicked button as selected
  btn.classList.add('selected');
  AppState.selectedValue = value;

  // Fill the blank spot in the C++ code block
  const blankSpot = document.getElementById('blankSpot');
  if (blankSpot) {
    blankSpot.innerText = value;
    blankSpot.classList.add('filled');
    blankSpot.classList.remove('shake-animation');
  }

  // Enable the "CHECK" button with active green styling
  const actionBtn = document.getElementById('actionBtn');
  if (actionBtn) {
    actionBtn.disabled = false;
    actionBtn.className = 'action-btn ready';
    actionBtn.innerText = 'CHECK';
  }
}

/**
 * handleActionClick
 * Main loop controller: either validates the current answer or advances to the next card.
 */
function handleActionClick() {
  // If we haven't submitted yet, check the answer
  if (!AppState.isAnswerSubmitted) {
    checkAnswer();
  } else {
    // If answer was already submitted, continue to the next card
    advanceToNextCard();
  }
}

/**
 * checkAnswer
 * Compares selected answer against the correct answer from JSON and shows feedback sheet.
 */
function checkAnswer() {
  if (!AppState.selectedValue) return;

  const currentModule = AppState.curriculum.modules[AppState.currentModuleIndex];
  const currentCard = currentModule.cards[AppState.currentCardIndex];

  const bottomSheet = document.getElementById('bottomSheet');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackDesc = document.getElementById('feedbackDesc');
  const actionBtn = document.getElementById('actionBtn');
  const progressFill = document.getElementById('progressFill');

  // Strip trailing whitespace for clean comparison
  const userAns = AppState.selectedValue.trim();
  const correctAns = currentCard.correctAnswer.trim();

  AppState.isAnswerSubmitted = true;

  if (userAns === correctAns) {
    // ----------------------------------------------------
    // CORRECT ANSWER STATE
    // ----------------------------------------------------
    playSound('correct');

    if (bottomSheet) bottomSheet.className = 'bottom-sheet correct';
    if (feedbackTitle) feedbackTitle.innerText = 'Correct!';
    if (feedbackDesc) feedbackDesc.innerText = 'Great job! You picked the right C++ syntax.';

    if (actionBtn) {
      actionBtn.className = 'action-btn continue-correct';
      actionBtn.innerText = 'CONTINUE';
    }

    // Advance the progress bar fill smoothly
    if (progressFill) {
      const nextPercent = Math.round(((AppState.currentCardIndex + 1) / currentModule.cards.length) * 100);
      progressFill.style.width = nextPercent + '%';
    }
  } else {
    // ----------------------------------------------------
    // INCORRECT ANSWER STATE
    // ----------------------------------------------------
    playSound('wrong');

    // Deduct 1 heart
    AppState.hearts = Math.max(0, AppState.hearts - 1);
    updateHeaderStats();
    saveProgressToLocalStorage();

    if (bottomSheet) bottomSheet.className = 'bottom-sheet incorrect';
    if (feedbackTitle) feedbackTitle.innerText = 'Not quite.';
    if (feedbackDesc) feedbackDesc.innerText = currentCard.explanation;

    // Shake the blank spot in the code container
    const blankSpot = document.getElementById('blankSpot');
    if (blankSpot) {
      blankSpot.classList.add('shake-animation');
    }

    if (actionBtn) {
      actionBtn.className = 'action-btn continue-error';
      actionBtn.innerText = 'CONTINUE';
    }
  }
}

/**
 * advanceToNextCard
 * Moves forward to the next card or finishes the module if on the final card.
 */
function advanceToNextCard() {
  const currentModule = AppState.curriculum.modules[AppState.currentModuleIndex];

  // If the user ran out of hearts, show Out of Hearts screen
  if (AppState.hearts <= 0) {
    showOutOfHeartsModal();
    return;
  }

  // Advance card index
  AppState.currentCardIndex++;

  if (AppState.currentCardIndex < currentModule.cards.length) {
    // Load next card in this module
    saveProgressToLocalStorage();
    loadCurrentCard();
  } else {
    // All cards in this module are completed!
    finishCurrentModule();
  }
}

/**
 * finishCurrentModule
 * Marks the active module complete, increments streak, and displays completion celebration.
 */
function finishCurrentModule() {
  const currentModule = AppState.curriculum.modules[AppState.currentModuleIndex];

  // Mark module as completed if not already marked
  if (!AppState.completedModules.includes(currentModule.id)) {
    AppState.completedModules.push(currentModule.id);
  }

  // Increment streak
  AppState.streak++;
  saveProgressToLocalStorage();
  updateHeaderStats();

  playSound('fanfare');

  // Fill in stats on completion screen
  const completedTitle = document.getElementById('completedModuleTitle');
  const completedCardsCount = document.getElementById('completedCardsCount');
  const completedStreakVal = document.getElementById('completedStreakVal');

  if (completedTitle) completedTitle.innerText = currentModule.title;
  if (completedCardsCount) completedCardsCount.innerText = `${currentModule.cards.length}/${currentModule.cards.length}`;
  if (completedStreakVal) completedStreakVal.innerText = `${AppState.streak} Days`;

  showView('moduleCompleteView');
}

/**
 * showOutOfHeartsModal
 * Displays the modal when the user's hearts reach zero, offering a refill.
 */
function showOutOfHeartsModal() {
  playSound('wrong');
  showView('outOfHeartsView');
}

/**
 * refillHearts
 * Restores hearts back to 5 and restarts the current module so the user can keep learning.
 */
function refillHearts() {
  AppState.hearts = 5;
  AppState.currentCardIndex = 0;
  saveProgressToLocalStorage();
  updateHeaderStats();
  loadCurrentCard();
  playSound('correct');
}

/**
 * showNextModule
 * Advances to the next module in sequence if available, or wraps to module 0.
 */
function showNextModule() {
  const totalModules = AppState.curriculum.modules.length;
  AppState.currentModuleIndex = (AppState.currentModuleIndex + 1) % totalModules;
  AppState.currentCardIndex = 0;
  saveProgressToLocalStorage();
  loadCurrentCard();
}

/**
 * restartCurrentModule
 * Restarts the active module from card 1.
 */
function restartCurrentModule() {
  AppState.currentCardIndex = 0;
  saveProgressToLocalStorage();
  loadCurrentCard();
}

/* --------------------------------------------------------------------------
   VIEW ROUTING & DRAWER MANAGEMENT
   Shows and hides different views (Card view, Module complete, Out of hearts).
   -------------------------------------------------------------------------- */

/**
 * showView
 * Switches between the active learning card, module completion, and out-of-hearts screens.
 * @param {string} viewName - 'cardView', 'moduleCompleteView', or 'outOfHeartsView'
 */
function showView(viewName) {
  const cardView = document.getElementById('cardView');
  const bottomSheet = document.getElementById('bottomSheet');
  const completeView = document.getElementById('moduleCompleteView');
  const heartsView = document.getElementById('outOfHeartsView');

  if (viewName === 'cardView') {
    if (cardView) cardView.style.display = 'flex';
    if (bottomSheet) bottomSheet.style.display = 'block';
    if (completeView) completeView.classList.remove('active');
    if (heartsView) heartsView.classList.remove('active');
  } else if (viewName === 'moduleCompleteView') {
    if (cardView) cardView.style.display = 'none';
    if (bottomSheet) bottomSheet.style.display = 'none';
    if (completeView) completeView.classList.add('active');
    if (heartsView) heartsView.classList.remove('active');
  } else if (viewName === 'outOfHeartsView') {
    if (cardView) cardView.style.display = 'none';
    if (bottomSheet) bottomSheet.style.display = 'none';
    if (completeView) completeView.classList.remove('active');
    if (heartsView) heartsView.classList.add('active');
  }
}

/**
 * openModuleDrawer
 * Opens the drawer listing all curriculum modules from Basic to Advanced.
 */
function openModuleDrawer() {
  playSound('click');
  const drawer = document.getElementById('moduleDrawer');
  const list = document.getElementById('moduleList');
  if (!drawer || !list) return;

  list.innerHTML = '';
  AppState.curriculum.modules.forEach((mod, idx) => {
    const isCurrent = idx === AppState.currentModuleIndex;
    const isCompleted = AppState.completedModules.includes(mod.id);

    const card = document.createElement('div');
    card.className = `module-item-card ${isCurrent ? 'current' : ''}`;
    card.innerHTML = `
      <div class="module-item-info">
        <span class="module-level-tag">${mod.level} - ${mod.cards.length} Cards</span>
        <span class="module-item-title">${mod.title}</span>
      </div>
      <span class="module-status-badge ${isCompleted ? 'completed' : ''}">
        ${isCompleted ? 'Completed' : (isCurrent ? 'In Progress' : 'Start')}
      </span>
    `;

    card.addEventListener('click', () => {
      AppState.currentModuleIndex = idx;
      AppState.currentCardIndex = 0;
      saveProgressToLocalStorage();
      loadCurrentCard();
      closeModuleDrawer();
    });

    list.appendChild(card);
  });

  drawer.classList.add('active');
}

/**
 * closeModuleDrawer
 * Closes the curriculum selection drawer.
 */
function closeModuleDrawer() {
  const drawer = document.getElementById('moduleDrawer');
  if (drawer) drawer.classList.remove('active');
}

/**
 * toggleSound
 * Toggles the audio mute setting and updates the header icon.
 */
function toggleSound() {
  AppState.isSoundMuted = !AppState.isSoundMuted;
  saveProgressToLocalStorage();
  updateHeaderStats();
  if (!AppState.isSoundMuted) playSound('click');
}

/* --------------------------------------------------------------------------
   EVENT LISTENERS SETUP
   Registers all click and touch event listeners on buttons and document.
   -------------------------------------------------------------------------- */

/**
 * setupEventListeners
 * Attaches handlers to action buttons, close buttons, and global document clicks.
 */
function setupEventListeners() {
  // Action button click (Check / Continue)
  const actionBtn = document.getElementById('actionBtn');
  if (actionBtn) {
    actionBtn.addEventListener('click', handleActionClick);
  }

  // Module Drawer open button
  const moduleDrawerBtn = document.getElementById('moduleDrawerBtn');
  if (moduleDrawerBtn) {
    moduleDrawerBtn.addEventListener('click', openModuleDrawer);
  }

  // Module Title badge open drawer
  const moduleBadge = document.getElementById('moduleBadge');
  if (moduleBadge) {
    moduleBadge.addEventListener('click', openModuleDrawer);
  }

  // Close Drawer button
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeModuleDrawer);
  }

  // Close Drawer when clicking backdrop
  const moduleDrawer = document.getElementById('moduleDrawer');
  if (moduleDrawer) {
    moduleDrawer.addEventListener('click', (e) => {
      if (e.target === moduleDrawer) closeModuleDrawer();
    });
  }

  // Sound toggle button
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', toggleSound);
  }

  // Reset Progress button opens confirmation dialog
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', openResetModal);
  }

  // Reset Modal buttons
  const cancelResetBtn = document.getElementById('cancelResetBtn');
  if (cancelResetBtn) {
    cancelResetBtn.addEventListener('click', closeResetModal);
  }

  const confirmResetBtn = document.getElementById('confirmResetBtn');
  if (confirmResetBtn) {
    confirmResetBtn.addEventListener('click', executeResetProgress);
  }

  const resetModal = document.getElementById('resetModal');
  if (resetModal) {
    resetModal.addEventListener('click', (e) => {
      if (e.target === resetModal) closeResetModal();
    });
  }

  // Module Complete screen buttons
  const nextModuleBtn = document.getElementById('nextModuleBtn');
  if (nextModuleBtn) {
    nextModuleBtn.addEventListener('click', showNextModule);
  }

  const reviewModuleBtn = document.getElementById('reviewModuleBtn');
  if (reviewModuleBtn) {
    reviewModuleBtn.addEventListener('click', restartCurrentModule);
  }

  // Out of Hearts screen buttons
  const refillHeartsBtn = document.getElementById('refillHeartsBtn');
  if (refillHeartsBtn) {
    refillHeartsBtn.addEventListener('click', refillHearts);
  }

  // Global document click to close hint tooltips when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hint-token')) {
      hideTooltip();
    }
  });

  // Support pressing the Enter key to trigger Check / Continue
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const btn = document.getElementById('actionBtn');
      if (btn && !btn.disabled) {
        handleActionClick();
      }
    }
  });
}

// Start application when DOM is ready
window.addEventListener('DOMContentLoaded', initCurriculum);
