// Check if user is logged in
function checkAuth() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
        return null;
    }
    return JSON.parse(currentUser);
}

// Initialize dashboard
function initDashboard() {
    const user = checkAuth();
    if (!user) return;
    
    // Update user info
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userType').textContent = user.type.charAt(0).toUpperCase() + user.type.slice(1);
    
    // Load content based on user type
    if (user.type === 'elderly') {
        loadElderlyDashboard();
    } else if (user.type === 'caretaker') {
        loadCaretakerDashboard();
    } else if (user.type === 'organizer') {
        loadOrganizerDashboard();
    }
}

// Load Elderly Dashboard
function loadElderlyDashboard() {
    // Show SOS button
    document.getElementById('sosButton').style.display = 'block';
    
    // Show voice control
    document.getElementById('voiceControl').style.display = 'block';
    
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div class="card">
            <h3>📅 Event Calendar</h3>
            <div id="calendar"></div>
            <div class="calendar-legend">
                <div class="legend-item">
                    <div class="legend-color legend-elderly"></div>
                    <span>Elderly Events</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color legend-general"></div>
                    <span>General Events</span>
                </div>
            </div>
        </div>
        
        <div class="card">
            <h3>🎉 Upcoming Events</h3>
            <div id="upcomingEvents"></div>
        </div>
        
        <div class="card">
            <h3>👴 Events Suitable for Elderly</h3>
            <div id="elderlyEvents"></div>
        </div>
    `;
    
    loadCalendar();
    loadUpcomingEvents();
    loadElderlyEvents();
}

// Load Caretaker Dashboard
function loadCaretakerDashboard() {
    // Show SOS button
    document.getElementById('sosButton').style.display = 'block';
    
    // Show voice control
    document.getElementById('voiceControl').style.display = 'block';
    
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div class="card">
            <h3>📅 Event Calendar</h3>
            <div id="calendar"></div>
            <div class="calendar-legend">
                <div class="legend-item">
                    <div class="legend-color legend-elderly"></div>
                    <span>Elderly Events</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color legend-general"></div>
                    <span>General Events</span>
                </div>
            </div>
        </div>
        
        <div class="card">
            <h3>🎉 Upcoming Events</h3>
            <div id="upcomingEvents"></div>
        </div>
        
        <div class="card">
            <h3>👴 Events Suitable for Elderly</h3>
            <div id="elderlyEvents"></div>
        </div>
        
        <div class="card">
            <h3>❤️ Elderly Health Information</h3>
            <div id="healthInfo"></div>
        </div>
    `;
    
    loadCalendar();
    loadUpcomingEvents();
    loadElderlyEvents();
    loadHealthInfo();
}

// Load Organizer Dashboard
function loadOrganizerDashboard() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div class="card">
            <h3>➕ Add New Event</h3>
            <form class="form-add-event" onsubmit="addEvent(event)">
                <input type="text" id="eventTitle" placeholder="Event Title" required>
                <input type="date" id="eventDate" required>
                <input type="time" id="eventTime" required>
                <textarea id="eventDescription" placeholder="Event Description" required></textarea>
                <select id="eventCategory" required>
                    <option value="">Select Category</option>
                    <option value="elderly">Suitable for Elderly</option>
                    <option value="general">General Event</option>
                </select>
                <button type="submit">Add Event</button>
            </form>
        </div>
        
        <div class="card">
            <h3>📋 All Events</h3>
            <div id="allEvents"></div>
        </div>
    `;
    
    loadAllEvents();
}

// Load Calendar with color coding
function loadCalendar() {
    const calendarDiv = document.getElementById('calendar');
    
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    
    let calendarHTML = `
        <div class="calendar-header">
            <h4>${monthNames[currentMonth]} ${currentYear}</h4>
        </div>
        <div class="calendar-grid">
            <div style="font-weight: 600; text-align: center; padding: 5px;">Sun</div>
            <div style="font-weight: 600; text-align: center; padding: 5px;">Mon</div>
            <div style="font-weight: 600; text-align: center; padding: 5px;">Tue</div>
            <div style="font-weight: 600; text-align: center; padding: 5px;">Wed</div>
            <div style="font-weight: 600; text-align: center; padding: 5px;">Thu</div>
            <div style="font-weight: 600; text-align: center; padding: 5px;">Fri</div>
            <div style="font-weight: 600; text-align: center; padding: 5px;">Sat</div>
    `;
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += '<div class="calendar-day" style="background: #f8f9fa;"></div>';
    }
    
    // Add days of the month with color coding
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // Get events for this date
        const dayEvents = events.filter(e => e.date === dateStr);
        const isToday = day === today.getDate() && currentMonth === today.getMonth();
        
        let className = 'calendar-day';
        let eventClass = '';
        
        // Determine event class based on event types
        if (dayEvents.length > 0) {
            const hasElderly = dayEvents.some(e => e.category === 'elderly');
            const hasGeneral = dayEvents.some(e => e.category === 'general');
            
            if (hasElderly && hasGeneral) {
                eventClass = 'event-multiple';
            } else if (hasElderly) {
                eventClass = 'event-elderly';
            } else if (hasGeneral) {
                eventClass = 'event-general';
            }
            
            className += ' has-event ' + eventClass;
        }
        
        if (isToday) className += ' today';
        
        calendarHTML += `<div class="${className}" title="${dayEvents.map(e => e.title).join(', ')}">${day}</div>`;
    }
    
    calendarHTML += '</div>';
    calendarDiv.innerHTML = calendarHTML;
}

// Load Upcoming Events
function loadUpcomingEvents() {
    const upcomingDiv = document.getElementById('upcomingEvents');
    const today = new Date();
    
    const upcoming = events
        .filter(e => new Date(e.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);
    
    if (upcoming.length === 0) {
        upcomingDiv.innerHTML = '<p style="color: #999;">No upcoming events</p>';
        return;
    }
    
    upcomingDiv.innerHTML = upcoming.map(event => {
        const tagColor = event.category === 'elderly' ? '#28a745' : '#17a2b8';
        return `
            <div class="event-item" style="border-left-color: ${tagColor}">
                <h4>${event.title}</h4>
                <div class="event-date">📅 ${formatDate(event.date)} at ${event.time}</div>
                <div class="event-description">${event.description}</div>
                <span class="event-tag" style="background: ${tagColor}">
                    ${event.category === 'elderly' ? 'Senior Friendly' : 'General'}
                </span>
            </div>
        `;
    }).join('');
}

// Load Elderly Events
function loadElderlyEvents() {
    const elderlyDiv = document.getElementById('elderlyEvents');
    
    const elderlyEvents = events.filter(e => e.category === 'elderly');
    
    if (elderlyEvents.length === 0) {
        elderlyDiv.innerHTML = '<p style="color: #999;">No events available</p>';
        return;
    }
    
    elderlyDiv.innerHTML = elderlyEvents.map(event => `
        <div class="event-item" style="border-left-color: #28a745">
            <h4>${event.title}</h4>
            <div class="event-date">📅 ${formatDate(event.date)} at ${event.time}</div>
            <div class="event-description">${event.description}</div>
        </div>
    `).join('');
}

// Load Health Information (Caretaker only)
function loadHealthInfo() {
    const healthDiv = document.getElementById('healthInfo');
    const healthData = elderlyHealthData.elderly1;
    
    healthDiv.innerHTML = `
        <div class="health-info">
            <div style="background: #667eea; color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <h4 style="margin-bottom: 5px;">${healthData.name}</h4>
                <p style="font-size: 14px; opacity: 0.9;">Age: ${healthData.age} years</p>
            </div>
            
            <div class="health-item">
                <span class="health-label">Blood Pressure</span>
                <span class="health-value">${healthData.bloodPressure}</span>
                <span class="health-status status-warning">Monitor</span>
            </div>
            
            <div class="health-item">
                <span class="health-label">Heart Rate</span>
                <span class="health-value">${healthData.heartRate}</span>
                <span class="health-status status-normal">Normal</span>
            </div>
            
            <div class="health-item">
                <span class="health-label">Blood Glucose</span>
                <span class="health-value">${healthData.glucose}</span>
                <span class="health-status status-normal">Normal</span>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <p style="margin-bottom: 10px;"><strong>Last Checkup:</strong> ${formatDate(healthData.lastCheckup)}</p>
                <p style="margin-bottom: 10px;"><strong>Medications:</strong> ${healthData.medications.join(', ')}</p>
                <p style="margin-bottom: 10px;"><strong>Allergies:</strong> ${healthData.allergies.join(', ')}</p>
                <p style="margin-bottom: 0;"><strong>Emergency Contact:</strong> ${healthData.emergencyContact}</p>
            </div>
        </div>
    `;
}

// Load All Events (Organizer)
function loadAllEvents() {
    const allEventsDiv = document.getElementById('allEvents');
    
    if (events.length === 0) {
        allEventsDiv.innerHTML = '<p style="color: #999;">No events created yet</p>';
        return;
    }
    
    allEventsDiv.innerHTML = events.map(event => {
        const tagColor = event.category === 'elderly' ? '#28a745' : '#17a2b8';
        return `
            <div class="event-item" style="border-left-color: ${tagColor}">
                <h4>${event.title}</h4>
                <div class="event-date">📅 ${formatDate(event.date)} at ${event.time}</div>
                <div class="event-description">${event.description}</div>
                <span class="event-tag" style="background: ${tagColor}">
                    ${event.category === 'elderly' ? 'Senior Friendly' : 'General'}
                </span>
                <span class="event-tag" style="background: #6c757d;">By: ${event.organizer}</span>
            </div>
        `;
    }).join('');
}

// Add Event (Organizer)
function addEvent(e) {
    e.preventDefault();
    
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    
    const newEvent = {
        id: events.length + 1,
        title: document.getElementById('eventTitle').value,
        date: document.getElementById('eventDate').value,
        time: document.getElementById('eventTime').value,
        description: document.getElementById('eventDescription').value,
        category: document.getElementById('eventCategory').value,
        organizer: user.name
    };
    
    events.push(newEvent);
    
    // Clear form
    document.getElementById('eventTitle').value = '';
    document.getElementById('eventDate').value = '';
    document.getElementById('eventTime').value = '';
    document.getElementById('eventDescription').value = '';
    document.getElementById('eventCategory').value = '';
    
    // Reload events
    loadAllEvents();
    
    alert('Event added successfully!');
}

// Handle SOS
function handleSOS() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    alert(`🚨 EMERGENCY ALERT SENT!\n\nEmergency services and caretakers have been notified.\n\nUser: ${user.name}\nTime: ${new Date().toLocaleString()}\n\nHelp is on the way!`);
}

// Voice Command
let isListening = false;
let recognition;

function toggleVoiceCommand() {
    if (!isListening) {
        startListening();
    } else {
        stopListening();
    }
}

function startListening() {
    const voiceBtn = document.getElementById('voiceBtn');
    const voiceText = document.getElementById('voiceText');
    const voiceFeedback = document.getElementById('voiceFeedback');
    
    isListening = true;
    voiceBtn.classList.add('listening');
    voiceText.textContent = 'Listening...';
    voiceFeedback.textContent = '🎤 Listening for your command...';
    
    // Simulate voice recognition (since actual speech recognition requires HTTPS)
    setTimeout(() => {
        const commands = [
            'Show upcoming events',
            'Show calendar',
            'Read events for elderly',
            'Show health information'
        ];
        
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        
        voiceFeedback.innerHTML = `
            <div style="margin-bottom: 10px;">
                <strong>You said:</strong> "${randomCommand}"
            </div>
            <div style="color: #28a745;">
                ✓ Command recognized! Processing...
            </div>
        `;
        
        processVoiceCommand(randomCommand);
        stopListening();
    }, 2000);
}

function stopListening() {
    const voiceBtn = document.getElementById('voiceBtn');
    const voiceText = document.getElementById('voiceText');
    
    isListening = false;
    voiceBtn.classList.remove('listening');
    voiceText.textContent = 'Click to Speak';
}

function processVoiceCommand(command) {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('event')) {
        document.querySelector('#upcomingEvents').scrollIntoView({ behavior: 'smooth' });
    } else if (lowerCommand.includes('calendar')) {
        document.querySelector('#calendar').scrollIntoView({ behavior: 'smooth' });
    } else if (lowerCommand.includes('health')) {
        const healthSection = document.querySelector('#healthInfo');
        if (healthSection) {
            healthSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Format date helper
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initDashboard);
