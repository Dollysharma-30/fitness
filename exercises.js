// exercises.js - Complete Image-Free Version with YouTube Videos

// Exercise Data with YouTube Links
const exercises = [
  // CHEST EXERCISES
  {
    id: 1,
    name: "Push-Up",
    bodyPart: "chest",
    equipment: "bodyweight",
    difficulty: "beginner",
    instructions: "1. Place hands slightly wider than shoulder-width apart.\n2. Keep body straight and lower chest to the ground.\n3. Push back up to starting position.",
    videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4"
  },
  {
    id: 2,
    name: "Bench Press",
    bodyPart: "chest",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "1. Lie on bench with feet flat.\n2. Grip bar slightly wider than shoulders.\n3. Lower bar to chest, then press up.",
    videoUrl: "https://www.youtube.com/embed/vcBig73ojpE"
  },
  {
    id: 3,
    name: "Dumbbell Fly",
    bodyPart: "chest",
    equipment: "dumbbells",
    difficulty: "intermediate",
    instructions: "1. Lie on bench with dumbbells extended above chest.\n2. Lower arms out to sides in arc motion.\n3. Bring back to start.",
    videoUrl: "https://www.youtube.com/embed/eozdVDA78K0"
  },

  // BACK EXERCISES
  {
    id: 4,
    name: "Pull-Up",
    bodyPart: "back",
    equipment: "bar",
    difficulty: "intermediate",
    instructions: "1. Hang from bar with overhand grip.\n2. Pull body up until chin clears bar.\n3. Lower with control.",
    videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g"
  },
  {
    id: 5,
    name: "Bent-Over Row",
    bodyPart: "back",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "1. Bend knees slightly, hinge at hips.\n2. Pull bar to lower ribs.\n3. Lower with control.",
    videoUrl: "https://www.youtube.com/embed/9efgcAjQe7E"
  },
  {
    id: 6,
    name: "Lat Pulldown",
    bodyPart: "back",
    equipment: "machine",
    difficulty: "beginner",
    instructions: "1. Sit with thighs under pads.\n2. Pull bar to upper chest.\n3. Slowly return.",
    videoUrl: "https://www.youtube.com/embed/CAwf7n6Luuc"
  },

  // SHOULDERS EXERCISES
  {
    id: 7,
    name: "Overhead Press",
    bodyPart: "shoulders",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "1. Stand with bar at shoulder height.\n2. Press directly overhead.\n3. Lower with control.",
    videoUrl: "https://www.youtube.com/embed/2yjwXTZQDDI"
  },
  {
    id: 8,
    name: "Lateral Raise",
    bodyPart: "shoulders",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "1. Stand with dumbbells at sides.\n2. Raise arms to shoulder height.\n3. Lower slowly.",
    videoUrl: "https://www.youtube.com/embed/3VcKaXpzqRo"
  },
  {
    id: 9,
    name: "Face Pull",
    bodyPart: "shoulders",
    equipment: "cable",
    difficulty: "intermediate",
    instructions: "1. Use rope attachment on cable machine.\n2. Pull toward forehead.\n3. Squeeze rear delts.",
    videoUrl: "https://www.youtube.com/embed/rep-qVOkqgk"
  },

  // ARMS EXERCISES
  {
    id: 10,
    name: "Bicep Curl",
    bodyPart: "arms",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "1. Stand with dumbbells at sides.\n2. Curl weights toward shoulders.\n3. Lower with control.",
    videoUrl: "https://www.youtube.com/embed/ykJmrZ5v0Oo"
  },
  {
    id: 11,
    name: "Tricep Dip",
    bodyPart: "arms",
    equipment: "bodyweight",
    difficulty: "beginner",
    instructions: "1. Use parallel bars or bench.\n2. Lower body by bending elbows.\n3. Push back up.",
    videoUrl: "https://www.youtube.com/embed/6kALZikXxLc"
  },
  {
    id: 12,
    name: "Hammer Curl",
    bodyPart: "arms",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "1. Hold dumbbells with neutral grip.\n2. Curl while keeping palms facing inward.",
    videoUrl: "https://www.youtube.com/embed/zC3nLlEvin4"
  },

  // LEGS EXERCISES
  {
    id: 13,
    name: "Squat",
    bodyPart: "legs",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "1. Stand with feet shoulder-width apart.\n2. Lower hips until thighs parallel.\n3. Drive through heels.",
    videoUrl: "https://www.youtube.com/embed/bEv6CCg2BC8"
  },
  {
    id: 14,
    name: "Lunge",
    bodyPart: "legs",
    equipment: "bodyweight",
    difficulty: "beginner",
    instructions: "1. Step forward and lower until both knees at 90°.\n2. Push back to start.\n3. Alternate legs.",
    videoUrl: "https://www.youtube.com/embed/QOVaHwm-Q6U"
  },
  {
    id: 15,
    name: "Romanian Deadlift",
    bodyPart: "legs",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "1. Hinge at hips with slight knee bend.\n2. Lower bar along legs.\n3. Return by squeezing glutes.",
    videoUrl: "https://www.youtube.com/embed/2SHsk9AzdjA"
  },

  // CORE EXERCISES
  {
    id: 16,
    name: "Plank",
    bodyPart: "core",
    equipment: "bodyweight",
    difficulty: "beginner",
    instructions: "1. Hold straight-body position on forearms and toes.\n2. Keep core engaged.\n3. Hold for time.",
    videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw"
  },
  {
    id: 17,
    name: "Hanging Leg Raise",
    bodyPart: "core",
    equipment: "bar",
    difficulty: "advanced",
    instructions: "1. Hang from pull-up bar.\n2. Raise legs to 90°.\n3. Lower with control.",
    videoUrl: "https://www.youtube.com/embed/hQ3eH2Q9fTU"
  },
  {
    id: 18,
    name: "Russian Twist",
    bodyPart: "core",
    equipment: "bodyweight",
    difficulty: "intermediate",
    instructions: "1. Sit with knees bent, lean back slightly.\n2. Rotate torso side to side.",
    videoUrl: "https://www.youtube.com/embed/wkD8rjkodUI"
  },

  // FULL BODY EXERCISES
  {
    id: 19,
    name: "Burpee",
    bodyPart: "full-body",
    equipment: "bodyweight",
    difficulty: "intermediate",
    instructions: "1. Squat down, place hands on floor.\n2. Kick feet back.\n3. Jump back up.",
    videoUrl: "https://www.youtube.com/embed/dZgVxmf6jkA"
  },
  {
    id: 20,
    name: "Kettlebell Swing",
    bodyPart: "full-body",
    equipment: "kettlebells",
    difficulty: "intermediate",
    instructions: "1. Hinge at hips, swing kettlebell forward.\n2. Use hip power, not arms.",
    videoUrl: "https://www.youtube.com/embed/mKDIuUbH94Q"
  },
  {
    id: 21,
    name: "Clean and Press",
    bodyPart: "full-body",
    equipment: "barbell",
    difficulty: "advanced",
    instructions: "1. Lift bar from floor to shoulders.\n2. Press overhead.\n3. Lower with control.",
    videoUrl: "https://www.youtube.com/embed/F6wxWBiYwBc"
  }
];

// DOM Elements
const exercisesGrid = document.querySelector('.exercises-grid');
const bodyPartTabs = document.querySelectorAll('.bodypart-tab');
const bodyPartFilter = document.getElementById('bodypart-filter');
const equipmentFilter = document.getElementById('equipment-filter');
const difficultyFilter = document.getElementById('difficulty-filter');
const applyFiltersBtn = document.getElementById('apply-exercise-filters');
const resetFiltersBtn = document.getElementById('reset-exercise-filters');
const searchInput = document.getElementById('exercise-search');
const searchBtn = document.getElementById('search-exercise-btn');
const exerciseModal = document.getElementById('exercise-modal');
const modalContent = document.getElementById('exercise-modal-content');
const closeModal = document.querySelector('.close-modal');

// Current filtered exercises
let currentExercises = [...exercises];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  displayExercises(currentExercises);
  setupEventListeners();
});

// Display exercises in grid (without images)
function displayExercises(exercisesToShow) {
  exercisesGrid.innerHTML = '';

  if (exercisesToShow.length === 0) {
    exercisesGrid.innerHTML = '<p class="no-results">No exercises found matching your criteria.</p>';
    return;
  }

  exercisesToShow.forEach(exercise => {
    const exerciseCard = document.createElement('div');
    exerciseCard.className = 'exercise-card';
    exerciseCard.innerHTML = `
      <div class="exercise-info">
        <h3>${exercise.name}</h3>
        <div class="exercise-meta">
          <span class="bodypart-tag">${capitalizeFirstLetter(exercise.bodyPart)}</span>
          <span class="equipment-tag">${capitalizeFirstLetter(exercise.equipment)}</span>
          <span class="difficulty-tag ${exercise.difficulty}">${capitalizeFirstLetter(exercise.difficulty)}</span>
        </div>
        <p class="exercise-description">${exercise.instructions.split('\n')[0]}...</p>
        <button class="btn small view-details" data-id="${exercise.id}">View Details</button>
      </div>
    `;
    exercisesGrid.appendChild(exerciseCard);
  });

  // Add event listeners to view details buttons
  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', () => showExerciseDetails(btn.dataset.id));
  });
}

// Show exercise details in modal (with YouTube video)
function showExerciseDetails(exerciseId) {
  const exercise = exercises.find(ex => ex.id === parseInt(exerciseId));
  if (!exercise) return;

  modalContent.innerHTML = `
    <div class="exercise-modal-header">
      <h2>${exercise.name}</h2>
      <div class="exercise-modal-meta">
        <span class="bodypart-tag">${capitalizeFirstLetter(exercise.bodyPart)}</span>
        <span class="equipment-tag">${capitalizeFirstLetter(exercise.equipment)}</span>
        <span class="difficulty-tag ${exercise.difficulty}">${capitalizeFirstLetter(exercise.difficulty)}</span>
      </div>
    </div>
    <div class="exercise-modal-body">
      <div class="exercise-modal-video">
        <iframe width="100%" height="315" src="${exercise.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="exercise-modal-instructions">
        <h3>Instructions</h3>
        <p>${exercise.instructions.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  `;

  exerciseModal.style.display = 'block';
}

// Filter exercises based on current filters
function filterExercises() {
  let filtered = [...exercises];

  // Body part filter
  if (bodyPartFilter.value !== 'all') {
    filtered = filtered.filter(ex => ex.bodyPart === bodyPartFilter.value);
  }

  // Equipment filter
  if (equipmentFilter.value !== 'all') {
    filtered = filtered.filter(ex => ex.equipment === equipmentFilter.value);
  }

  // Difficulty filter
  if (difficultyFilter.value !== 'all') {
    filtered = filtered.filter(ex => ex.difficulty === difficultyFilter.value);
  }

  // Search filter
  if (searchInput.value.trim() !== '') {
    const searchTerm = searchInput.value.trim().toLowerCase();
    filtered = filtered.filter(ex => 
      ex.name.toLowerCase().includes(searchTerm) ||
      ex.bodyPart.toLowerCase().includes(searchTerm) ||
      ex.equipment.toLowerCase().includes(searchTerm)
    );
  }

  currentExercises = filtered;
  displayExercises(currentExercises);
}

// Reset all filters
function resetFilters() {
  bodyPartFilter.value = 'all';
  equipmentFilter.value = 'all';
  difficultyFilter.value = 'all';
  searchInput.value = '';
  currentExercises = [...exercises];
  displayExercises(currentExercises);
  
  // Reset active tab
  bodyPartTabs.forEach(tab => {
    if (tab.dataset.bodypart === 'all') {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

// Setup event listeners
function setupEventListeners() {
  // Body part tabs
  bodyPartTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      bodyPartTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      bodyPartFilter.value = tab.dataset.bodypart;
      filterExercises();
    });
  });

  // Filter dropdowns
  applyFiltersBtn.addEventListener('click', filterExercises);
  resetFiltersBtn.addEventListener('click', resetFilters);

  // Search functionality
  searchBtn.addEventListener('click', filterExercises);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') filterExercises();
  });

  // Modal close
  closeModal.addEventListener('click', () => {
    exerciseModal.style.display = 'none';
  });
  window.addEventListener('click', (e) => {
    if (e.target === exerciseModal) {
      exerciseModal.style.display = 'none';
    }
  });
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}