# Smart Community Network - Prototype

## Project Overview
A mobile-responsive web application prototype for a Smart Community Network designed for university assignment purposes. The system provides different interfaces for three user types: Elderly (Seniors), Caretakers (Caregivers), and Event Organizers, with enhanced accessibility features for elderly users.

## Demo Accounts

| User Type | Username | Password | Special Features |
|-----------|----------|----------|------------------|
| Senior | elderly1 | elderly123 | Enhanced UI with larger fonts |
| Senior | elderly2 | elderly123 | Additional elderly user |
| Senior | elderly3 | elderly123 | Additional elderly user |
| Senior | elderly4 | elderly123 | Additional elderly user |
| Senior | elderly5 | elderly123 | Additional elderly user |
| Caregiver | caretaker1 | care123 | Assigned to elderly1 & elderly2 |
| Event Organizer | organizer1 | org123 | Can manage all events |

## Key Features

### 1. 🔐 Login & Registration
- Clean "SMART COMMUNITY NETWORK" interface
- Username and password authentication
- **Three-Button Registration Design**:
  - 🔵 **SENIOR** (Blue) - For elderly users
  - 🟢 **CAREGIVER** (Green) - For healthcare providers
  - 🟣 **ORGANIZER** (Purple) - For event coordinators
- Modal-based registration with user type icons
- Caregiver registration allows selecting multiple elderly to care for

### 2. 👴 Senior (Elderly) Dashboard

**Enhanced Accessibility:**
- 📏 **Larger fonts**: 18-28px (increased from standard 14-20px)
- 🎨 **High contrast**: Black text on white backgrounds
- 🔘 **Bigger buttons**: Enhanced touch targets with 20-22px fonts
- 🚨 **Prominent SOS button**: Larger emergency button always visible

**Core Features:**
- 🔔 **Reminders** - View and dismiss health/event reminders
- 📅 **Color-Coded Calendar**:
  - 🟢 Green = Senior-friendly events
  - 🔵 Blue = General events
  - 🔀 Split colors = Multiple event types
  - Visual legend included
- 🔍 **Browse & Search Events** - Filter by category
- 🎉 **Upcoming Events** - Next 3 events displayed
- ⭐ **Feedback & Rating** - 5-star system with written feedback
- 🎤 **Voice Commands** - Simulated voice navigation

### 3. 👨‍⚕️ Caretaker (Caregiver) Dashboard

**NEW: Elderly Information Selector (Moved to Top):**
- ❤️ **Dropdown selector** at the top of dashboard
- View health information for any assigned elderly
- Switch between multiple elderly profiles easily
- Shows age in dropdown for quick reference

**All Senior Features PLUS:**

**Profile Management:**
- 👥 **Tabbed Interface**:
  - My Profile - View/edit caregiver information
  - Elderly Profiles - Manage all assigned elderly
- View detailed health records
- Access emergency contacts

**Health Dashboard:**
- 📊 Blood pressure monitoring
- 💓 Heart rate tracking  
- 🩸 Blood glucose levels
- 💊 Complete medication list
- ⚠️ Allergy information
- 📞 Emergency contacts
- 📅 Last checkup dates

**Other Features:**
- 🔔 Reminders for multiple elderly
- 📅 Calendar for all events
- 🔍 Search events suitable for seniors
- ⭐ Submit feedback for events

### 4. 📋 Event Organizer Dashboard

**Event Management:**
- ➕ **Create Events**: Title, date, time, description, category
- 📋 **View All Events**: Complete event listing with ratings
- 🔍 **Search & Filter**: Find events by keyword and category
- ⭐ **Ratings Dashboard**: View all feedback and ratings
- ⭐ **Submit Feedback**: Organizers can also rate events

**Feedback Analytics:**
- Average ratings displayed per event
- Individual reviews with star ratings
- Written feedback from all users
- User names attached to feedback

## Database (Hardcoded Dummy Data)

### Elderly Users (5 Total)
1. **John Doe** (elderly1) - Age 72
   - BP: 130/85, HR: 75 bpm, Glucose: 110 mg/dL
   - Meds: Aspirin 81mg, Lisinopril 10mg
   - Allergy: Penicillin
   
2. **Mary Johnson** (elderly2) - Age 68
   - BP: 125/80, HR: 72 bpm, Glucose: 105 mg/dL
   - Meds: Metformin 500mg, Atorvastatin 20mg
   - Allergy: None
   
3. **Robert Smith** (elderly3) - Age 75
   - BP: 135/90, HR: 78 bpm, Glucose: 115 mg/dL
   - Meds: Amlodipine 5mg, Warfarin 2mg
   - Allergy: Sulfa drugs
   
4. **Patricia Brown** (elderly4) - Age 70
   - BP: 128/82, HR: 70 bpm, Glucose: 108 mg/dL
   - Meds: Levothyroxine 50mcg, Calcium 600mg
   - Allergy: Latex
   
5. **James Wilson** (elderly5) - Age 77
   - BP: 138/88, HR: 80 bpm, Glucose: 120 mg/dL
   - Meds: Ramipril 5mg, Metoprolol 50mg, Furosemide 40mg
   - Allergy: Iodine

### Sample Events (5 Total)
All events are senior-friendly:
1. Morning Yoga Session - Jan 22, 2026
2. Community Health Checkup - Jan 25, 2026
3. Social Tea Gathering - Jan 28, 2026
4. Art & Craft Workshop - Feb 1, 2026
5. Music Therapy Session - Feb 5, 2026

### Sample Reminders
- Morning Yoga Session tomorrow at 8:00 AM
- Take medication - Aspirin 81mg

## How to Use

### 1. Starting the Application
1. Open `index.html` in your web browser
2. Enter credentials from demo accounts table
3. Click "Login" to access your dashboard

### 2. Testing Senior (Elderly) Interface
**Login:** elderly1 / elderly123

**What to Test:**
- Notice the **larger fonts and high contrast** design
- Use the **prominent SOS button** (top right)
- Try **voice commands** (simulated)
- View **color-coded calendar** (green = senior events)
- **Search events** using filters
- **Submit feedback** with star ratings
- **Dismiss reminders**

### 3. Testing Caregiver Interface
**Login:** caretaker1 / care123

**What to Test:**
- **Select elderly** from dropdown at top (elderly1 or elderly2)
- View **complete health dashboard** for selected elderly
- Switch between elderly profiles using dropdown
- Navigate to **Profile Management** tabs
- View **all assigned elderly** in Elderly Profiles tab
- Click "View Details" for comprehensive health info
- **Submit feedback** for events
- **Search events** suitable for seniors

### 4. Testing Organizer Interface
**Login:** organizer1 / org123

**What to Test:**
- **Add new events** (fill all fields including category)
- **View all events** with ratings displayed
- Check **Event Ratings & Feedback** section
- **Submit your own feedback** as organizer
- **Search and filter** events by category
- Notice ratings update after feedback submission

### 5. Creating New Accounts
1. Click desired button: SENIOR, CAREGIVER, or ORGANIZER
2. Modal opens with registration form
3. **For Caregivers**: 
   - Select elderly to care for (Hold Ctrl/Cmd for multiple selections)
   - Can select 1-5 elderly from list
4. Fill in username, password, and full name
5. Click "Create Account"
6. Login with new credentials

### 6. Submitting Feedback & Ratings
**All User Types Can Rate Events:**

1. Scroll to "Feedback & Rating" section
2. Select event from dropdown
3. Click stars to rate (1-5 stars, hover to preview)
4. Optionally write detailed feedback
5. Click "Submit Feedback"
6. Rating appears on events immediately

**Viewing Ratings:**
- **Seniors & Caregivers**: See ratings on event cards
- **Organizers**: View detailed feedback in "Event Ratings & Feedback" section

### 7. Calendar Color System
- **🟢 Green box** = Event suitable for elderly
- **🔵 Blue box** = General event
- **🔀 Split diagonal** = Both event types that day
- **Bold border** = Today's date
- **Hover over dates** = See event titles

## Fixed Issues

### ✅ Calendar Display Fixed
**Problem:** Calendar days not displaying correctly in web browsers
**Solution:** 
- Added proper visibility handling for empty calendar cells
- Fixed calendar grid layout and alignment
- Improved date calculations for accuracy
- Added proper styling for day names

### ✅ Feedback System Enhanced
**New Features:**
- All three user types can now submit feedback
- Organizers have dedicated "Submit Feedback & Rating" section
- Real-time rating updates across all views
- Written feedback is optional but encouraged

### ✅ Caretaker Health Information Improved
**Enhancement:**
- Elderly selector moved to **top of dashboard** (priority position)
- Dropdown shows elderly name and age
- Instant health info update when switching elderly
- Supports viewing multiple assigned elderly

### ✅ Multiple Elderly Support
**Implementation:**
- 5 dummy elderly accounts created
- Each with unique health data
- Caretaker can be assigned to multiple elderly
- Dropdown selector for easy switching

## Mobile Responsiveness
Fully responsive on all devices:
- 📱 **Mobile phones** (320px+): Single column, stacked layout
- 📱 **Tablets** (768px+): Two column grid
- 💻 **Desktops** (1024px+): Full three column layout
- Touch-optimized buttons and inputs
- Adaptive font sizes
- Collapsible navigation on mobile

## Technical Implementation

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with flexbox/grid
- **Vanilla JavaScript** - No frameworks required
- **SessionStorage** - User session management
- **No Database** - Prototype with hardcoded data

### File Structure
```
mrbuffaloburger.github.io/
├── index.html          # Login and registration page
├── dashboard.html      # Main dashboard interface
├── styles.css          # All styling (responsive)
├── script.js           # Authentication logic
├── dashboard.js        # Dashboard functionality
└── README.md          # Documentation
```

### Key JavaScript Functions
- `checkAuth()` - Session validation
- `loadElderlyDashboard()` - Senior UI
- `loadCaretakerDashboard()` - Caregiver UI
- `loadOrganizerDashboard()` - Organizer UI
- `loadCalendar()` - Color-coded calendar
- `submitFeedback()` - Rating system
- `changeSelectedElderly()` - Switch elderly profiles
- `searchEvents()` - Event search
- `filterEvents()` - Category filtering

## Design Philosophy

### Elderly-First Approach
The system prioritizes elderly users with:
1. **Visual Clarity**: High contrast, large text
2. **Simple Navigation**: Minimal clicks required
3. **Safety Features**: Prominent SOS button
4. **Assistance**: Voice command support
5. **Accessibility**: Touch-friendly interface

### Color Psychology
- 🟢 **Green**: Health, safety, senior-friendly
- 🔵 **Blue**: Trust, stability, general events
- 🔴 **Red**: Emergency, urgent (SOS)
- 🟡 **Yellow**: Attention, ratings/feedback
- 🟣 **Purple**: Organization, management

### Typography
- **Senior Interface**: 18-28px (enhanced)
- **Standard Interface**: 14-20px (normal)
- **Font Family**: System fonts for familiarity
- **Line Height**: 1.5-1.8 for readability

## Browser Compatibility
Tested and working on:
- ✅ Google Chrome (Recommended)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Assignment Requirements Checklist

✅ **Login Page** - Username/password authentication  
✅ **Three Registration Types** - Visual button design  
✅ **Elderly Interface** - Enhanced accessibility  
✅ **Caregiver Interface** - Profile management + health dashboard  
✅ **Organizer Interface** - Event creation + management  
✅ **Voice Commands** - Simulated navigation  
✅ **Calendar** - Color-coded by event type  
✅ **Search & Filter** - All user types  
✅ **Reminders** - Dismissible notifications  
✅ **Feedback & Rating** - 5-star system for all users  
✅ **SOS Button** - Emergency alert (elderly + caregiver)  
✅ **Mobile Responsive** - All screen sizes  
✅ **Multiple Elderly** - 5 dummy accounts  
✅ **Health Tracking** - Detailed information  
✅ **Profile Management** - Caregiver dashboard  

## Future Enhancements (Not in Prototype)
- Real database integration (MySQL/PostgreSQL)
- Actual voice recognition API
- GPS-enabled SOS with real emergency dispatch
- Email/SMS notifications
- Photo uploads for profiles
- Video call integration for caregiver check-ins
- Medication reminder push notifications
- Health data visualization (charts/graphs)
- Multi-language support
- Dark mode option
- Export health reports (PDF)
- Integration with wearable devices

## Notes for University Assignment
- ✅ **Prototype Status**: No backend required
- ✅ **Dummy Data**: All hardcoded in JavaScript
- ✅ **Session Management**: Clears on browser close
- ✅ **Voice Commands**: Simulated (not real speech recognition)
- ✅ **SOS Button**: Alert popup (not real emergency call)
- ✅ **Ratings**: Stored in memory only
- ✅ **Professional Quality**: Production-ready UI/UX
- ✅ **Well Documented**: Comprehensive README
- ✅ **Accessible**: WCAG compliant design principles

## Installation & Running
1. Download all files to your computer
2. Navigate to: `C:\LIN\mrbuffaloburger.github.io\mrbuffaloburger.github.io\`
3. Open `index.html` in your web browser
4. No server or installation required!

## Project Statistics
- **Total Files**: 5 (HTML, CSS, JS, README)
- **Lines of Code**: ~2500+
- **User Types**: 3 (Senior, Caregiver, Organizer)
- **Features**: 15+ major features
- **Elderly Accounts**: 5 with full health data
- **Events**: 5 sample events
- **Responsive Breakpoints**: 3 (mobile, tablet, desktop)

## Support & Contact
For questions about this prototype:
- Review the README.md documentation
- Check demo accounts table above
- Test all three user type interfaces
- Verify mobile responsiveness

---
**Developed for University Assignment**  
**Smart Community Network - 2026**  
**Version 2.1 - Enhanced Elderly Care Edition**  
**Last Updated**: January 2026
