# Smart Community System - Prototype

## Project Overview
A mobile-responsive web application prototype for a Smart Community System designed for university assignment purposes. The system provides different interfaces for three user types: Elderly, Caretakers, and Event Organizers.

## File Structure
```
mrbuffaloburger.github.io/
├── index.html          # Login and signup page
├── dashboard.html      # Main dashboard (loaded after login)
├── styles.css          # All CSS styles (mobile responsive)
├── script.js           # Login/signup functionality
├── dashboard.js        # Dashboard functionality and data
└── README.md          # This file
```

## Features

### 1. Login Page (`index.html`)
- Professional title: "SMART COMMUNITY SYSTEM"
- Username and password fields
- **Visual Sign Up Section** with large icons representing user types:
  - 👴 Elderly (with large icon for easy recognition)
  - 👨‍⚕️ Caretaker (healthcare professional icon)
  - 📋 Event Organizer (management icon)
- Modal-based registration form for selected user type
- Demo accounts section for quick access
- Mobile responsive design

### 2. User Types & Access

#### **Elderly Users**
- 🎤 Voice Command Navigation (simulated)
- 📅 **Color-Coded Event Calendar**:
  - 🟢 Green = Events suitable for elderly
  - 🔵 Blue = General events
  - Split colors = Multiple event types on same day
  - Visual legend for easy understanding
- 🎉 Upcoming Events
- 👴 Events Suitable for Elderly
- 🚨 SOS Emergency Button

#### **Caretaker Users**
- All features from Elderly access, PLUS:
- ❤️ Elderly Health Information dashboard
  - Blood pressure monitoring
  - Heart rate tracking
  - Blood glucose levels
  - Medication list
  - Allergy information
  - Emergency contact details

#### **Event Organizer Users**
- ➕ Add New Events interface
- 📋 View All Events
- Event management with:
  - Event title, date, and time
  - Event description
  - Category selection (Elderly-suitable or General)

### 3. Demo Accounts
The system includes 3 pre-configured accounts:

| User Type | Username | Password |
|-----------|----------|----------|
| Elderly | elderly1 | elderly123 |
| Caretaker | caretaker1 | care123 |
| Event Organizer | organizer1 | org123 |

## Dummy Data

### Sample Events
The system includes 5 pre-loaded events:
1. Morning Yoga Session (Jan 22, 2026)
2. Community Health Checkup (Jan 25, 2026)
3. Social Tea Gathering (Jan 28, 2026)
4. Art & Craft Workshop (Feb 1, 2026)
5. Music Therapy Session (Feb 5, 2026)

### Health Information
Sample health data for elderly user "John Doe":
- Age: 72 years
- Blood Pressure: 130/85 mmHg
- Heart Rate: 75 bpm
- Blood Glucose: 110 mg/dL
- Medications: Aspirin 81mg, Lisinopril 10mg
- Allergies: Penicillin

## How to Use

### Starting the Application
1. Open `index.html` in a web browser
2. Click on any demo account OR enter credentials manually
3. Click "Login" to access the dashboard

### Testing Different User Types
1. **Test Elderly Interface:**
   - Login with: elderly1 / elderly123
   - Try the voice command feature
   - Click the SOS button
   - View upcoming events

2. **Test Caretaker Interface:**
   - Login with: caretaker1 / care123
   - Check all elderly features
   - View health information section

3. **Test Organizer Interface:**
   - Login with: organizer1 / org123
   - Add a new event
   - View all events in the system

### Creating New Accounts
1. Click "Sign Up" on the login page
2. **Select your user type** by clicking on one of the large icon cards:
   - 👴 Elderly - Large, clear icon for easy identification
   - 👨‍⚕️ Caretaker - Healthcare professional representation
   - 📋 Event Organizer - Management and organization
3. A modal will appear with the registration form
4. Fill in username, password, and full name
5. Click "Create Account"
6. Login with your new credentials

## Mobile Responsiveness
The application is fully responsive and works on:
- 📱 Mobile phones (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)

## Technical Stack
- **HTML5** - Structure and content
- **CSS3** - Styling with flexbox and grid
- **Vanilla JavaScript** - Functionality and interactivity
- **SessionStorage** - Temporary user session management
- **No Database** - All data is hardcoded for prototype purposes

## Key Features Implemented

### Security
- Session-based authentication
- Automatic redirect to login if not authenticated
- Logout functionality

### User Experience
- Clean, modern interface
- Smooth transitions and animations
- Color-coded elements for easy navigation
- Clear visual hierarchy

### Accessibility
- Large, readable fonts
- High contrast colors
- Clear button labels
- Touch-friendly interface for mobile
- **Large visual icons** for elderly-friendly signup
- **Color-coded calendar** for quick event type recognition
- Visual legend for calendar understanding

## Future Enhancements (Not in Prototype)
- Database integration
- Real voice recognition API
- Real-time SOS alerts
- Email notifications
- User profile management
- Advanced event filtering
- Export health reports

## Notes for Assignment
- This is a **prototype** - no backend or database
- All data is **hardcoded** in JavaScript files
- User sessions clear when browser closes
- Voice command is **simulated** (not actual speech recognition)
- Suitable for demonstration and UI/UX evaluation

## Browser Compatibility
Tested and working on:
- Google Chrome (Recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari

## Support
For any issues or questions about this prototype, please contact the development team.

---
**Developed for University Assignment**
**Smart Community System - 2026**
