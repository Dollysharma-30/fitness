// plans.js - Complete Solution

document.addEventListener('DOMContentLoaded', function() {
    // Plan details data for ALL plans
    const planDetails = {
        'beginner-weight-loss': {
            title: '8-Week Beginner Weight Loss',
            level: 'Beginner',
            duration: '8 Weeks',
            goal: 'Weight Loss',
            frequency: '3-4 times per week',
            price: '$49.99',
            description: 'A gentle introduction to fitness combining cardio and strength training for sustainable weight loss. Perfect for those new to exercise who want to lose weight in a healthy way.',
            features: [
                '3 full-body workouts per week',
                '2 cardio sessions',
                'Nutrition guide for weight loss',
                'Exercise video library',
                'Progress tracking sheets',
                'Weekly check-ins'
            ],
            results: 'Expect to lose 4-8 pounds over 8 weeks while improving your overall fitness level and energy.',
            image: '06.jpg'
        },
        'muscle-building': {
            title: '12-Week Muscle Building',
            level: 'Intermediate',
            duration: '12 Weeks',
            goal: 'Muscle Gain',
            frequency: '4-5 times per week',
            price: '$79.99',
            description: 'A science-based hypertrophy program designed to maximize muscle growth through progressive overload and optimal training splits. Ideal for those with basic training experience.',
            features: [
                '4-5 weekly training sessions',
                'Body part split routine',
                'Nutrition guide for muscle gain',
                'Supplement recommendations',
                'Progression tracking',
                'Form video demonstrations'
            ],
            results: 'Gain 5-10 pounds of lean muscle over 12 weeks with proper nutrition and consistent training.',
            image: '07.jpg'
        },
        'body-toning': {
            title: '4-Week Body Toning',
            level: 'Beginner',
            duration: '4 Weeks',
            goal: 'Toning',
            frequency: '3 times per week',
            price: '$29.99',
            description: 'Short program focusing on sculpting and defining muscles without bulking. Uses bodyweight exercises and light resistance for a lean, toned look.',
            features: [
                '3 weekly full-body workouts',
                'Bodyweight and light dumbbell exercises',
                'Toning-focused nutrition tips',
                'Exercise modifications',
                'Progress photos guide',
                'Daily activity suggestions'
            ],
            results: 'Improved muscle definition and body composition in just 4 weeks.',
            image: '08.jpg'
        },
        'strength-program': {
            title: '12-Week Strength Program',
            level: 'Advanced',
            duration: '12 Weeks',
            goal: 'Strength',
            frequency: '4 times per week',
            price: '$89.99',
            description: 'For experienced lifters looking to increase their maximal strength on major lifts. Uses periodization and advanced techniques to push your limits.',
            features: [
                '4 weekly strength sessions',
                'Focus on compound lifts',
                'Advanced programming techniques',
                'Recovery protocols',
                '1-on-1 coaching session',
                'Video form analysis'
            ],
            results: 'Increase your major lifts by 15-25% over 12 weeks with proper programming.',
            image: '09.jpg'
        },
        'intense-weight-loss': {
            title: '8-Week Intense Weight Loss',
            level: 'Intermediate',
            duration: '8 Weeks',
            goal: 'Weight Loss',
            frequency: '5 times per week',
            price: '$59.99',
            description: 'High-intensity program combining metabolic conditioning with strength training for rapid fat loss. Not for beginners - requires good base fitness level.',
            features: [
                '5 intense weekly workouts',
                'Metabolic conditioning circuits',
                'Strict nutrition protocol',
                'Supplement guide',
                'Weekly weigh-ins',
                'Accountability partner matching'
            ],
            results: 'Significant fat loss and improved body composition in 8 weeks.',
            image: '10.jpg'
        },
        'endurance-builder': {
            title: '12-Week Endurance Builder',
            level: 'Intermediate',
            duration: '12 Weeks',
            goal: 'Endurance',
            frequency: '5-6 times per week',
            price: '$69.99',
            description: 'Improve your cardiovascular fitness and muscular endurance with this progressive program. Ideal for athletes or those training for events.',
            features: [
                '5-6 weekly endurance sessions',
                'Cardio and muscular endurance focus',
                'Sport-specific variations',
                'Recovery protocols',
                'Performance tracking',
                'Race/event preparation tips'
            ],
            results: 'Dramatically improved endurance capacity and recovery time.',
            image: '11.jpg'
        }
    };

    // DOM Elements
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const planCards = document.querySelectorAll('.plan-card');
    const modal = document.getElementById('plan-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.querySelector('.close-modal');
    const searchInput = document.getElementById('global-search');
    const searchBtn = document.getElementById('search-btn');

    // Event Delegation for View Details Buttons
    document.addEventListener('click', function(e) {
        // Handle View Details clicks
        if (e.target.classList.contains('view-details') || e.target.closest('.view-details')) {
            e.preventDefault();
            const button = e.target.classList.contains('view-details') ? e.target : e.target.closest('.view-details');
            const planId = button.getAttribute('href').substring(1);
            showPlanDetails(planId);
        }
    });

    // Show Plan Details in Modal
    function showPlanDetails(planId) {
        const plan = planDetails[planId];
        
        if (!plan) {
            console.error('Plan details not found for:', planId);
            return;
        }

        modalContent.innerHTML = `
            <div class="modal-plan-header">
                <img src="${plan.image}" alt="${plan.title}" onerror="this.src='default-plan.jpg'">
                <div class="modal-plan-title">
                    <h2>${plan.title}</h2>
                    <div class="modal-plan-meta">
                        <span><i class="fas fa-user"></i> ${plan.level}</span>
                        <span><i class="fas fa-calendar-alt"></i> ${plan.duration}</span>
                        <span><i class="fas fa-dumbbell"></i> ${plan.frequency}</span>
                    </div>
                </div>
            </div>
            <div class="modal-plan-body">
                <div class="modal-plan-section">
                    <h3>Description</h3>
                    <p>${plan.description}</p>
                </div>
                <div class="modal-plan-section">
                    <h3>Program Features</h3>
                    <ul>
                        ${plan.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="modal-plan-section">
                    <h3>Expected Results</h3>
                    <p>${plan.results}</p>
                </div>
                <div class="modal-plan-price">
                    <span>${plan.price}</span>
                    <button class="btn primary">Purchase Plan</button>
                </div>
            </div>
        `;
        modal.style.display = 'block';

        // Add event listener to purchase button
        document.querySelector('.modal-plan-price .btn').addEventListener('click', function() {
            alert(`Thank you for choosing ${plan.title}! Redirecting to checkout...`);
            // In a real implementation, you would redirect to a checkout page
        });
    }

    // Filter Plans
    applyFiltersBtn.addEventListener('click', function() {
        const goalFilter = document.getElementById('goal-filter').value;
        const levelFilter = document.getElementById('level-filter').value;
        const durationFilter = document.getElementById('duration-filter').value;
        
        planCards.forEach(card => {
            const cardGoal = card.getAttribute('data-goal');
            const cardLevel = card.getAttribute('data-level');
            const cardDuration = card.getAttribute('data-duration');
            
            const goalMatch = goalFilter === 'all' || cardGoal === goalFilter;
            const levelMatch = levelFilter === 'all' || cardLevel === levelFilter;
            const durationMatch = durationFilter === 'all' || cardDuration === durationFilter;
            
            card.style.display = (goalMatch && levelMatch && durationMatch) ? 'block' : 'none';
        });
    });

    // Reset Filters
    resetFiltersBtn.addEventListener('click', function() {
        document.getElementById('goal-filter').value = 'all';
        document.getElementById('level-filter').value = 'all';
        document.getElementById('duration-filter').value = 'all';
        
        planCards.forEach(card => {
            card.style.display = 'block';
        });
    });

    // Search Functionality
    function searchPlans() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') {
            planCards.forEach(card => card.style.display = 'block');
            return;
        }
        
        planCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchBtn.addEventListener('click', searchPlans);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchPlans();
    });

    // Close Modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.paddingTop = '15px';
                answer.style.paddingBottom = '15px';
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            }
        });
    });
});