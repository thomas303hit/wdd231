const courses = [
    {courseId: 'WDD 100', courseName: 'Introduction to Web Development', credits: 1, completed: false},
    {courseId: 'WDD 110', courseName: 'Web Development Foundations', credits: 3, completed: false},
    {courseId: 'WDD 130', courseName: 'JavaScript Language Basics', credits: 3, completed: false},
    {courseId: 'WDD 131', courseName: 'HTML/CSS Styling', credits: 3, completed: true},
    {courseId: 'WDD 231', courseName: 'Web Frontend Development I', credits: 3, completed: false},
    {courseId: 'CSE 110', courseName: 'Introduction to Programming', credits: 3, completed: true},
    {courseId: 'CSE 134', courseName: 'Web Scripting', credits: 3, completed: false},
    {courseId: 'CSE 210', courseName: 'Programming Foundations', credits: 3, completed: false}
];

const coursesContainer = document.getElementById('courses-container');
const totalCreditsEl = document.getElementById('total-credits');
const filterButtons = document.querySelectorAll('.filter');

function displayCourses(filteredCourses) {
    coursesContainer.innerHTML = '';
    
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsEl.textContent = `Total Credits: ${totalCredits}`;

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : ''}`;
        card.innerHTML = `
            <h3>${course.courseId}</h3>
            <p>${course.courseName}</p>
            <p><strong>${course.credits} Credit${course.credits > 1 ? 's' : ''}</strong></p>
        `;
        coursesContainer.appendChild(card);
    });
}

function filterCourses(filter) {
    let filtered;
    if (filter === 'wdd') {
        filtered = courses.filter(c => c.courseId.startsWith('WDD'));
    } else if (filter === 'cse') {
        filtered = courses.filter(c => c.courseId.startsWith('CSE'));
    } else {
        filtered = courses;
    }
    displayCourses(filtered);
}

// Event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterCourses(button.dataset.filter);
    });
});

// Initial load
displayCourses(courses);