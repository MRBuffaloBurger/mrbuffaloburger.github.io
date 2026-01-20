# Smart Community Network - Prototype

## Project Overview
A mobile-responsive web application prototype for a Smart Community Network designed for university assignment purposes. The system provides different interfaces for three user types: Elderly (Seniors), Caretakers (Caregivers), and Event Organizers, with enhanced accessibility features for elderly users.

## File Structure
```
mrbuffaloburger.github.io/
├── index.html          # Login and registration page
├── dashboard.html      # Main dashboard (loaded after login)
├── styles.css          # All CSS styles (mobile responsive)
├── script.js           # Login/signup functionality
├── dashboard.js        # Dashboard functionality and data
└── README.md          # This file
```

## Features

### 1. Login Page (`index.html`)
- Professional title: "SMART COMMUNITY NETWORK"
- Clean username and password fields
- **Three-Button Registration System** matching the provided design:
  - 🔵 **SENIOR** (Blue button with elderly icon)
  - 🟢 **CAREGIVER** (Green button with caring hands icon)
  - 🟣 **ORGANIZER** (Purple button with clipboard icon)
- Modal-based registration form for selected user type
- Mobile responsive design
- No demo accounts displayed (removed as requested)

### 2. User Types & Access

#### **👴 Senior (Elderly) Users**
**Enhanced UI/UX for Seniors:**
- **Larger fonts** throughout the interface (18px-28px)
- **High contrast colors** (black text on white background)
- **Bigger buttons** (18px-22px font size, increased padding)
- **Clear visual spacing** for easy readability

**Features:**
- 🎤 Voice Command Navigation (simulated)
- 🔔 **Reminders Component** - View and manage reminders
- 📅 **Color-Coded Event Calendar**:
  - 🟢 Green = Events suitable for elderly
  - 🔵 Blue = General events
  - Split colors = Multiple event types on same day
  - Visual legend for easy understanding
- 🔍 **Browse & Search Events** - Search and filter events by category
- 🎉 Upcoming Events
- ⭐ **Feedback & Rating** - Rate events and provide feedback
- 🚨 **SOS Emergency Button** (prominent, larger size for seniors)

#### **👨‍⚕️ Caretaker (Caregiver) Users**
All features from Elderly access, PLUS:

- 👥 **Profile Management Dashboard**:
  - **My Profile Tab** - View and edit caregiver profile
  - **Elderly Profiles Tab** - Manage assigned elderly members
  - View which elderly the caretaker can access
  - Update elderly information
  
- ❤️ **Elderly Health Information Dashboard**:
  - Blood pressure monitoring
  - Heart rate tracking
  - Blood glucose levels
  - Medication list
  - Allergy information
  - Emergency contact details
  - Last checkup date
  
- 🔔 **Reminders Component** - Health reminders and appointments
- 🔍 **Browse & Search Events** - Find suitable events for elderly
- ⭐ **Feedback & Rating** - Rate events on behalf of elderly

#### **📋 Event Organizer Users**
- ➕ **Add New Events Interface**:
  - Event title, date, and time
  - Event description
  - Category selection (Elderly-suitable or General)
  
- 🔍 **Browse & Search Events** - Search all events with filters
- 📋 **View All Events** - Complete event listing
- ⭐ **Event Ratings & Feedback Dashboard**:
  - View average ratings for events
  - Read user feedback
  - Monitor event performance

### 3. Demo Accounts
The system includes 3 pre-configured accounts:

| User Type | Username | Password | Special Access |
|-----------|----------|----------|----------------|
| Senior | elderly1 | elderly123 | Standard elderly features |
| Caregiver | caretaker1 | care123 | Assigned to elderly1 |
| Event Organizer | organizer1 | org123 | Event management |

### 4. New Features

#### 🔍 Browse & Search Events (All Users)
- Real-time search functionality
- Filter options:
  - All Events
  - Senior Events
  - General Events
  - Upcoming Events
- Display event ratings
- Color-coded event categories

#### 🔔 Reminder Component (Elderly & Caretaker)
- View active reminders
- Dismiss reminders
- Event notifications
- Health reminders for medications
- Appointment reminders

#### ⭐ Feedback & Rating System (All Users)
- Rate events with 5-star system
- Provide written feedback
- View average ratings
- Event organizers can see all feedback
- Interactive star rating interface

#### 👥 Profile Management (Caretaker)
- Tabbed interface:
  - My Profile - Personal information
  - Elderly Profiles - Assigned elderly details
- View elderly health information
- Access control - only assigned elderly
- Update profile functionality

## Dummy Data

### Sample Events
The system includes 5 pre-loaded events:
1. Morning Yoga Session (Jan 22, 2026) - Senior Friendly
2. Community Health Checkup (Jan 25, 2026) - Senior Friendly
3. Social Tea Gathering (Jan 28, 2026) - Senior Friendly
4. Art & Craft Workshop (Feb 1, 2026) - Senior Friendly
5. Music Therapy Session (Feb 5, 2026) - Senior Friendly

### Health Information
Sample health data for elderly user "John Doe":
- Age: 72 years
- Blood Pressure: 130/85 mmHg (Monitor status)
- Heart Rate: 75 bpm (Normal)
- Blood Glucose: 110 mg/dL (Normal)
- Medications: Aspirin 81mg, Lisinopril 10mg
- Allergies: Penicillin
- Emergency Contact: Jane Doe (Daughter) - +60123456789

### Sample Reminders
1. Morning Yoga Session tomorrow at 8:00 AM
2. Take medication - Aspirin 81mg

## How to Use

### Starting the Application
1. Open `index.html` in a web browser
2. Enter credentials or click on registration buttons
3. Click "Login" to access the dashboard

### Testing Different User Types

1. **Test Senior Interface:**
   - Login with: elderly1 / elderly123
   - Notice larger fonts and high contrast design
   - Try the voice command feature
   - Click the SOS button
   - Browse and search events
   - Submit feedback and ratings
   - View reminders

2. **Test Caregiver Interface:**
   - Login with: caretaker1 / care123
   - Access profile management
   - View assigned elderly profiles
   - Check health information
   - Manage reminders
   - Search events for elderly

3. **Test Organizer Interface:**
   - Login with: organizer1 / org123
   - Add a new event
   - View all events with ratings
   - Check feedback from users
   - Search and filter events

### Creating New Accounts
1. Click appropriate registration button (SENIOR, CAREGIVER, or ORGANIZER)
2. Modal appears with registration form
3. For caregivers: Select which elderly to care for
4. Fill in username, password, and full name
5. Click "Create Account"
6. Login with your new credentials

### Using Search & Filter
1. Type keywords in the search box
2. Click "Search" or press Enter
3. Use filter buttons to narrow results:
   - All Events
   - Senior Events
   - General Events (organizer only)
   - Upcoming

### Submitting Feedback
1. Navigate to "Feedback & Rating" section
2. Select an event from dropdown
3. Click stars to rate (1-5 stars)
4. Write optional feedback
5. Click "Submit Feedback"

### Managing Reminders
1. View active reminders in the Reminders section
2. Click "Dismiss" to remove a reminder
3. Reminders persist until dismissed

## Mobile Responsiveness
The application is fully responsive and works on:
- 📱 Mobile phones (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)

## Elderly-Friendly Design Features

### Enhanced Accessibility
- **Large fonts**: 18-28px for headings, 18px for body text
- **High contrast**: Black text on white backgrounds
- **Bigger buttons**: 20-22px font, increased padding
- **Clear spacing**: Generous margins and padding
- **Simple navigation**: Prominent, easy-to-tap buttons
- **Visual icons**: Large emoji icons for easy recognition
- **Color-coded elements**: Green for senior-friendly content

### Design Philosophy
The elderly interface prioritizes:
1. Readability - Large, clear text
2. Simplicity - Uncluttered layouts
3. Accessibility - High contrast colors
4. Safety - Prominent SOS button
5. Ease of use - Larger touch targets

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
- User-specific data access

### User Experience
- Clean, modern interface
- Smooth transitions and animations
- Color-coded elements for easy navigation
- Clear visual hierarchy
- Responsive feedback for all actions

### Data Management
- Event storage with ratings
- Reminder system with dismiss functionality
- Profile management for caretakers
- Health information tracking
- Feedback and rating aggregation

### Search & Filter
- Real-time event search
- Multiple filter options
- Category-based filtering
- Upcoming events filter

## Interface Changes from Original Design

### Login Page Improvements
✅ Removed demo account display section
✅ Implemented three-button registration design (Blue/Green/Purple)
✅ Matching icons: 👴 SENIOR, 🤲 CAREGIVER, 📋 ORGANIZER
✅ Clean, professional layout matching provided image

### New Components Added
✅ Browse & Search Events (all users)
✅ Reminder Component (elderly & caretaker)
✅ Feedback & Rating System (all users)
✅ Profile Management Dashboard (caretaker)
✅ Enhanced elderly UI with larger fonts and contrast

## Future Enhancements (Not in Prototype)
- Database integration
- Real voice recognition API
- Real-time SOS alerts with GPS
- Email notifications for reminders
- SMS notifications for caregivers
- User profile photo upload
- Advanced event filtering
- Export health reports to PDF
- Multi-language support
- Push notifications for mobile

## Notes for Assignment
- This is a **prototype** - no backend or database
- All data is **hardcoded** in JavaScript files
- User sessions clear when browser closes
- Voice command is **simulated** (not actual speech recognition)
- Suitable for demonstration and UI/UX evaluation
- **Elderly-friendly design** with enhanced accessibility
- Follows modern web design principles

## Browser Compatibility
Tested and working on:
- Google Chrome (Recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari

## Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Senior Events**: Green (#28a745)
- **General Events**: Blue (#17a2b8)
- **Warning/SOS**: Red (#dc3545)
- **Success**: Green (#4CAF50)
- **Ratings**: Gold (#ffc107)

## Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Regular Interface**: 14-16px body, 20-24px headings
- **Elderly Interface**: 18px body, 28px headings (enhanced readability)

## Support
For any issues or questions about this prototype, please contact the development team.

---
**Developed for University Assignment**  
**Smart Community Network - 2026**  
**Version 2.0 - Enhanced Accessibility Edition**
