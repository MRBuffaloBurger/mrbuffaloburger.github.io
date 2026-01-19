// Dummy user data
const users = [
    { username: 'elderly1', password: 'elderly123', type: 'elderly', name: 'John Doe' },
    { username: 'caretaker1', password: 'care123', type: 'caretaker', name: 'Sarah Smith' },
    { username: 'organizer1', password: 'org123', type: 'organizer', name: 'Mike Johnson' }
];

// Dummy events data
let events = [
    {
        id: 1,
        title: 'Morning Yoga Session',
        date: '2026-01-22',
        time: '08:00 AM',
        description: 'Gentle yoga exercises perfect for seniors to improve flexibility and balance.',
        category: 'elderly',
        organizer: 'Mike Johnson'
    },
    {
        id: 2,
        title: 'Community Health Checkup',
        date: '2026-01-25',
        time: '10:00 AM',
        description: 'Free health screening including blood pressure, glucose, and general wellness check.',
        category: 'elderly',
        organizer: 'Mike Johnson'
    },
    {
        id: 3,
        title: 'Social Tea Gathering',
        date: '2026-01-28',
        time: '03:00 PM',
        description: 'Afternoon tea and conversation with fellow community members.',
        category: 'elderly',
        organizer: 'Mike Johnson'
    },
    {
        id: 4,
        title: 'Art & Craft Workshop',
        date: '2026-02-01',
        time: '02:00 PM',
        description: 'Creative workshop for seniors featuring painting and light crafts.',
        category: 'elderly',
        organizer: 'Mike Johnson'
    },
    {
        id: 5,
        title: 'Music Therapy Session',
        date: '2026-02-05',
        time: '11:00 AM',
        description: 'Relaxing music therapy to enhance mood and cognitive function.',
        category: 'elderly',
        organizer: 'Mike Johnson'
    }
];

// Dummy elderly health data
const elderlyHealthData = {
    elderly1: {
        name: 'John Doe',
        age: 72,
        bloodPressure: '130/85',
        heartRate: '75 bpm',
        glucose: '110 mg/dL',
        lastCheckup: '2026-01-15',
        medications: ['Aspirin 81mg', 'Lisinopril 10mg'],
        allergies: ['Penicillin'],
        emergencyContact: 'Jane Doe (Daughter) - +60123456789'
    }
};

// Login form handler
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Store user session
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again or use one of the demo accounts.');
    }
}

// Show signup form
function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

// Show login form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

// Fill credentials (for demo accounts)
function fillCredentials(username, password) {
    document.getElementById('username').value = username;
    document.getElementById('password').value = password;
}

// Select user type and open modal
function selectUserType(type) {
    const modal = document.getElementById('userTypeModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const selectedUserType = document.getElementById('selected-user-type');
    
    // Set user type
    selectedUserType.value = type;
    
    // Set modal content based on user type
    if (type === 'elderly') {
        modalIcon.textContent = '👴';
        modalTitle.textContent = 'Elderly Account Registration';
        modalDescription.textContent = 'Create your account to access events and community services';
    } else if (type === 'caretaker') {
        modalIcon.textContent = '👨‍⚕️';
        modalTitle.textContent = 'Caretaker Account Registration';
        modalDescription.textContent = 'Create your account to monitor and assist elderly members';
    } else if (type === 'organizer') {
        modalIcon.textContent = '📋';
        modalTitle.textContent = 'Event Organizer Registration';
        modalDescription.textContent = 'Create your account to organize and manage community events';
    }
    
    // Show modal
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('userTypeModal');
    modal.style.display = 'none';
    
    // Clear form
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('signup-name').value = '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('userTypeModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Signup form handler
function handleSignup(event) {
    event.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const fullname = document.getElementById('signup-name').value;
    const userType = document.getElementById('selected-user-type').value;
    
    // Check if username already exists
    const existingUser = users.find(u => u.username === username);
    
    if (existingUser) {
        alert('Username already exists. Please choose a different username.');
        return;
    }
    
    // Create new user
    const newUser = {
        username: username,
        password: password,
        type: userType,
        name: fullname
    };
    
    users.push(newUser);
    
    alert('Account created successfully! Please login with your credentials.');
    
    // Close modal and return to login
    closeModal();
    showLogin();
}

// Logout
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
