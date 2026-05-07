const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const container = document.getElementById("course-groups");
const totalCreditsDiv = document.getElementById("total-credits");

function renderCourses(filteredCourses) {

    container.innerHTML = '';

    const totalCredits = filteredCourses.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    filteredCourses.forEach(course => {

        const card = document.createElement('div');

        card.className = `course-card ${course.completed ? 'completed' : ''}`;

        card.innerHTML = `
            <strong>${course.subject} ${course.number}</strong><br>
            ${course.title}<br>
            Credits: ${course.credits}<br>
            Technologies: ${course.technology.join(', ')}
        `;

        container.appendChild(card);
    });

    totalCreditsDiv.textContent =
        `Total Credits: ${totalCredits}`;
}

function filterCourses(filter) {

    let filteredCourses = courses;

    if (filter !== 'all') {
        filteredCourses = courses.filter(
            course => course.subject === filter
        );
    }

    renderCourses(filteredCourses);
}

filterCourses('all');