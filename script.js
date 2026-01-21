// Dummy user data
const users = [
    { username: 'elderly1', password: 'elderly123', type: 'elderly', name: 'John Doe', age: 72 },
    { username: 'elderly2', password: 'elderly123', type: 'elderly', name: 'Mary Johnson', age: 68 },
    { username: 'elderly3', password: 'elderly123', type: 'elderly', name: 'Robert Smith', age: 75 },
    { username: 'elderly4', password: 'elderly123', type: 'elderly', name: 'Patricia Brown', age: 70 },
    { username: 'elderly5', password: 'elderly123', type: 'elderly', name: 'James Wilson', age: 77 },
    { username: 'caretaker1', password: 'care123', type: 'caretaker', name: 'Sarah Smith', assignedElderly: ['elderly1', 'elderly2'] },
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
        organizer: 'Mike Johnson',
        ratings: []
    },
    {
        id: 2,
        title: 'Community Health Checkup',
        date: '2026-01-25',
        time: '10:00 AM',
        description: 'Free health screening including blood pressure, glucose, and general wellness check.',
        category: 'elderly',
        organizer: 'Mike Johnson',
        ratings: []
    },
    {
        id: 3,
        title: 'Social Tea Gathering',
        date: '2026-01-28',
        time: '03:00 PM',
        description: 'Afternoon tea and conversation with fellow community members.',
        category: 'elderly',
        organizer: 'Mike Johnson',
        ratings: []
    },
    {
        id: 4,
        title: 'Art & Craft Workshop',
        date: '2026-02-01',
        time: '02:00 PM',
        description: 'Creative workshop for seniors featuring painting and light crafts.',
        category: 'elderly',
        organizer: 'Mike Johnson',
        ratings: []
    },
    {
        id: 5,
        title: 'Music Therapy Session',
        date: '2026-02-05',
        time: '11:00 AM',
        description: 'Relaxing music therapy to enhance mood and cognitive function.',
        category: 'elderly',
        organizer: 'Mike Johnson',
        ratings: []
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
    },
    elderly2: {
        name: 'Mary Johnson',
        age: 68,
        bloodPressure: '125/80',
        heartRate: '72 bpm',
        glucose: '105 mg/dL',
        lastCheckup: '2026-01-10',
        medications: ['Metformin 500mg', 'Atorvastatin 20mg'],
        allergies: ['None'],
        emergencyContact: 'Tom Johnson (Son) - +60198765432'
    },
    elderly3: {
        name: 'Robert Smith',
        age: 75,
        bloodPressure: '135/90',
        heartRate: '78 bpm',
        glucose: '115 mg/dL',
        lastCheckup: '2026-01-12',
        medications: ['Amlodipine 5mg', 'Warfarin 2mg'],
        allergies: ['Sulfa drugs'],
        emergencyContact: 'Lisa Smith (Daughter) - +60187654321'
    },
    elderly4: {
        name: 'Patricia Brown',
        age: 70,
        bloodPressure: '128/82',
        heartRate: '70 bpm',
        glucose: '108 mg/dL',
        lastCheckup: '2026-01-18',
        medications: ['Levothyroxine 50mcg', 'Calcium 600mg'],
        allergies: ['Latex'],
        emergencyContact: 'Michael Brown (Son) - +60176543210'
    },
    elderly5: {
        name: 'James Wilson',
        age: 77,
        bloodPressure: '138/88',
        heartRate: '80 bpm',
        glucose: '120 mg/dL',
        lastCheckup: '2026-01-08',
        medications: ['Ramipril 5mg', 'Metoprolol 50mg', 'Furosemide 40mg'],
        allergies: ['Iodine'],
        emergencyContact: 'Emily Wilson (Daughter) - +60165432109'
    }
};

// Reminders storage
let reminders = [
    { id: 1, text: 'Morning Yoga Session tomorrow at 8:00 AM', time: '2026-01-21', dismissed: false },
    { id: 2, text: 'Take medication - Aspirin 81mg', time: '2026-01-20', dismissed: false }
];

// Login form handler
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// Select user type and open modal
function selectUserType(type) {
    const modal = document.getElementById('userTypeModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const selectedUserType = document.getElementById('selected-user-type');
    const elderlySelectGroup = document.getElementById('elderlySelectGroup');
    
    selectedUserType.value = type;
    
    if (type === 'elderly') {
        modalIcon.textContent = '👴';
        modalTitle.textContent = 'Senior Account Registration';
        modalDescription.textContent = 'Create your account to access events and community services';
        elderlySelectGroup.style.display = 'none';
    } else if (type === 'caretaker') {
        modalIcon.textContent = '🤲';
        modalTitle.textContent = 'Caregiver Account Registration';
        modalDescription.textContent = 'Create your account to monitor and assist elderly members';
        elderlySelectGroup.style.display = 'block';
        
        // Populate elderly select
        const elderlySelect = document.getElementById('elderly-select');
        elderlySelect.innerHTML = '<option value="">Select Elderly to Care For (Hold Ctrl/Cmd for multiple)</option>';
        elderlySelect.multiple = true;
        elderlySelect.size = 5;
        users.filter(u => u.type === 'elderly').forEach(elderly => {
            elderlySelect.innerHTML += `<option value="${elderly.username}">${elderly.name}</option>`;
        });
    } else if (type === 'organizer') {
        modalIcon.textContent = '📋';
        modalTitle.textContent = 'Event Organizer Registration';
        modalDescription.textContent = 'Create your account to organize and manage community events';
        elderlySelectGroup.style.display = 'none';
    }
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('userTypeModal');
    modal.style.display = 'none';
    
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
    
    const existingUser = users.find(u => u.username === username);
    
    if (existingUser) {
        alert('Username already exists. Please choose a different username.');
        return;
    }
    
    const newUser = {
        username: username,
        password: password,
        type: userType,
        name: fullname
    };
    
    // Add assigned elderly for caretaker
    if (userType === 'caretaker') {
        const elderlySelect = document.getElementById('elderly-select');
        const selectedOptions = Array.from(elderlySelect.selectedOptions).map(opt => opt.value);
        newUser.assignedElderly = selectedOptions.length > 0 ? selectedOptions : [];
    }
    
    users.push(newUser);
    
    alert('Account created successfully! Please login with your credentials.');
    closeModal();
}

// Logout
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
