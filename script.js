/** 
 * EduNexus - School Management System
 * Core Script Logic
 */

// ═══════════════════════════ GLOBAL CONSTANTS ═══════════════════════════
const MAX_MARKS = 100;

const DEFAULT_DATA = {
  subjects: ['Mathematics', 'Science', 'English', 'History', 'Computer Science', 'Physics', 'Chemistry', 'Biology', 'Geography'],
  students: [
    { id: '1', fname: 'Aarav', lname: 'Sharma', roll: '10A-01', class: '10', section: 'A', dob: '2008-05-15', gender: 'Male', contact: '9876543210', email: 'aarav@edu.com', parentEmail: 'parent@school.edu', address: 'Delhi, India', blood: 'B+' },
    { id: '2', fname: 'Ishani', lname: 'Verma', roll: '10A-02', class: '10', section: 'A', dob: '2008-09-22', gender: 'Female', contact: '9123456789', email: 'ishani@edu.com', parentEmail: 'parent1@school.edu', address: 'Mumbai, India', blood: 'O+' },
    { id: '3', fname: 'Kabir', lname: 'Singh', roll: '12B-05', class: '12', section: 'B', dob: '2006-11-04', gender: 'Male', contact: '8888877777', email: 'kabir@edu.com', parentEmail: 'parent2@school.edu', address: 'Bangalore, India', blood: 'A+' },
    { id: '4', fname: 'Myra', lname: 'Kapoor', roll: '11C-12', class: '11', section: 'C', dob: '2007-02-18', gender: 'Female', contact: '7776665555', email: 'myra@edu.com', parentEmail: 'parent3@school.edu', address: 'Pune, India', blood: 'AB+' },
    { id: '5', fname: 'Zayan', lname: 'Khan', roll: '9A-04', class: '9', section: 'A', dob: '2009-07-30', gender: 'Male', contact: '6665554444', email: 'zayan@edu.com', parentEmail: 'parent4@school.edu', address: 'Lucknow, India', blood: 'B-' },
    { id: '6', fname: 'Aanya', lname: 'Patel', roll: '10A-03', class: '10', section: 'A', dob: '2008-03-12', gender: 'Female', contact: '9871112233', email: 'aanya@edu.com', parentEmail: 'parent5@school.edu', address: 'Ahmedabad, India', blood: 'O-' },
    { id: '7', fname: 'Vivaan', lname: 'Gupta', roll: '10A-04', class: '10', section: 'A', dob: '2008-11-05', gender: 'Male', contact: '9872223344', email: 'vivaan@edu.com', parentEmail: 'parent6@school.edu', address: 'Delhi, India', blood: 'A-' },
    { id: '8', fname: 'Riya', lname: 'Desai', roll: '9B-01', class: '9', section: 'B', dob: '2009-01-20', gender: 'Female', contact: '9873334455', email: 'riya@edu.com', parentEmail: 'parent7@school.edu', address: 'Surat, India', blood: 'B+' },
    { id: '9', fname: 'Reyansh', lname: 'Kumar', roll: '9B-02', class: '9', section: 'B', dob: '2009-08-14', gender: 'Male', contact: '9874445566', email: 'reyansh@edu.com', parentEmail: 'parent8@school.edu', address: 'Patna, India', blood: 'AB-' },
    { id: '10', fname: 'Diya', lname: 'Reddy', roll: '11A-01', class: '11', section: 'A', dob: '2007-05-30', gender: 'Female', contact: '9875556677', email: 'diya@edu.com', parentEmail: 'parent9@school.edu', address: 'Hyderabad, India', blood: 'O+' },
    { id: '11', fname: 'Arjun', lname: 'Nair', roll: '11A-02', class: '11', section: 'A', dob: '2007-12-01', gender: 'Male', contact: '9876667788', email: 'arjun@edu.com', parentEmail: 'parent10@school.edu', address: 'Kochi, India', blood: 'A+' },
    { id: '12', fname: 'Saanvi', lname: 'Joshi', roll: '8A-01', class: '8', section: 'A', dob: '2010-04-18', gender: 'Female', contact: '9877778899', email: 'saanvi@edu.com', parentEmail: 'parent11@school.edu', address: 'Jaipur, India', blood: 'B-' },
    { id: '13', fname: 'Krisha', lname: 'Shah', roll: '8A-02', class: '8', section: 'A', dob: '2010-09-22', gender: 'Female', contact: '9878889900', email: 'krisha@edu.com', parentEmail: 'parent12@school.edu', address: 'Rajkot, India', blood: 'O-' },
    { id: '14', fname: 'Ayaan', lname: 'Mehta', roll: '12B-01', class: '12', section: 'B', dob: '2006-03-15', gender: 'Male', contact: '9879990011', email: 'ayaan@edu.com', parentEmail: 'parent13@school.edu', address: 'Chandigarh, India', blood: 'AB+' },
    { id: '15', fname: 'Zara', lname: 'Ali', roll: '12B-02', class: '12', section: 'B', dob: '2006-07-08', gender: 'Female', contact: '9870001122', email: 'zara@edu.com', parentEmail: 'parent14@school.edu', address: 'Bhopal, India', blood: 'A-' }
  ],
  teachers: [
    { id: 't1', fname: 'Dr. Rajesh', lname: 'Kumar', empid: 'TCH-001', subject: 'Mathematics', classes: '10, 11, 12', qual: 'Ph.D. Mathematics', email: 'rajesh@school.edu', phone: '9000000001', exp: 12, salary: 65000 },
    { id: 't2', fname: 'Sneha', lname: 'Patel', empid: 'TCH-002', subject: 'Physics', classes: '11, 12', qual: 'M.Sc. Physics, B.Ed.', email: 'sneha@school.edu', phone: '9000000002', exp: 8, salary: 55000 },
    { id: 't3', fname: 'David', lname: 'Miller', empid: 'TCH-003', subject: 'English', classes: '8, 9, 10', qual: 'M.A. English', email: 'david@school.edu', phone: '9000000003', exp: 5, salary: 45000 },
    { id: 't4', fname: 'Ritu', lname: 'Sharma', empid: 'TCH-004', subject: 'Chemistry', classes: '11, 12', qual: 'M.Sc. Chemistry', email: 'ritu@school.edu', phone: '9000000004', exp: 10, salary: 58000 },
    { id: 't5', fname: 'Anil', lname: 'Desai', empid: 'TCH-005', subject: 'Biology', classes: '9, 10, 11, 12', qual: 'M.Sc. Biology', email: 'anil@school.edu', phone: '9000000005', exp: 7, salary: 52000 },
    { id: 't6', fname: 'Priya', lname: 'Iyer', empid: 'TCH-006', subject: 'History', classes: '8, 9, 10', qual: 'M.A. History, B.Ed.', email: 'priya@school.edu', phone: '9000000006', exp: 15, salary: 70000 },
    { id: 't7', fname: 'Amit', lname: 'Bansal', empid: 'TCH-007', subject: 'Computer Science', classes: '9, 10, 11, 12', qual: 'M.Tech CS', email: 'amit@school.edu', phone: '9000000007', exp: 6, salary: 50000 },
    { id: 't8', fname: 'Sarah', lname: 'Johnson', empid: 'TCH-008', subject: 'Geography', classes: '8, 9', qual: 'M.A. Geography', email: 'sarah@school.edu', phone: '9000000008', exp: 4, salary: 42000 }
  ],
  attendance: {
    '2026-04-01': { '1': 'P', '2': 'P', '3': 'P', '4': 'A', '5': 'L', '6': 'P', '7': 'P', '8': 'P', '9': 'A', '10': 'P', '11': 'P', '12': 'P', '13': 'L', '14': 'P', '15': 'P' },
    '2026-03-31': { '1': 'P', '2': 'A', '3': 'P', '4': 'P', '5': 'P', '6': 'P', '7': 'L', '8': 'P', '9': 'P', '10': 'P', '11': 'A', '12': 'P', '13': 'P', '14': 'P', '15': 'P' }
  },
  marks: {}, 
  fees: {
    '1': { total: 45000, paid: 30000, status: 'partial', dueDate: '2026-04-10' },
    '2': { total: 45000, paid: 45000, status: 'paid', dueDate: '2026-04-10' },
    '3': { total: 55000, paid: 15000, status: 'pending', dueDate: '2026-05-15' },
    '4': { total: 50000, paid: 50000, status: 'paid', dueDate: '2026-04-20' },
    '5': { total: 40000, paid: 0, status: 'pending', dueDate: '2026-04-05' },
    '6': { total: 45000, paid: 45000, status: 'paid', dueDate: '2026-04-10' },
    '7': { total: 45000, paid: 20000, status: 'partial', dueDate: '2026-04-10' },
    '8': { total: 40000, paid: 40000, status: 'paid', dueDate: '2026-04-05' },
    '9': { total: 40000, paid: 0, status: 'pending', dueDate: '2026-04-05' },
    '10': { total: 50000, paid: 25000, status: 'partial', dueDate: '2026-04-20' },
    '11': { total: 50000, paid: 50000, status: 'paid', dueDate: '2026-04-20' },
    '12': { total: 35000, paid: 35000, status: 'paid', dueDate: '2026-03-15' },
    '13': { total: 35000, paid: 15000, status: 'partial', dueDate: '2026-03-15' },
    '14': { total: 55000, paid: 55000, status: 'paid', dueDate: '2026-05-15' },
    '15': { total: 55000, paid: 0, status: 'pending', dueDate: '2026-05-15' }
  },
  announcements: [
    { id: 1, title: 'Annual Sports Meet 2026', message: 'The annual sports meet is scheduled for April 15-18. Registration starts tomorrow.', category: 'Event', priority: 'high', date: '2026-03-28' },
    { id: 2, title: 'Spring Break Notice', message: 'School will remain closed from April 1st to April 7th for Spring Break.', category: 'Holiday', priority: 'normal', date: '2026-03-25' },
    { id: 3, title: 'Parent-Teacher Meeting', message: 'PTM for classes 8 to 12 will be held on April 20th from 9 AM to 1 PM.', category: 'Academic', priority: 'high', date: '2026-04-01' }
  ],
  notifs: [
    { id: 1, text: 'New assignment posted in Mathematics', read: false },
    { id: 2, text: 'Attendance for 10-A has been marked', read: false },
    { id: 3, text: 'Fee payment successful for Aarav Sharma', read: true },
    { id: 4, text: 'Library book "Sapiens" is overdue for return.', read: false },
    { id: 5, text: 'Dr. Rajesh Kumar scheduled an extra class for Physics.', read: false }
  ],
  school: {
    name: "EduNexus School",
    tagline: "Inspiring Excellence, Nurturing Future",
    address: "123 Academic Lane, Knowledge City, India",
    contact: "+91 98765 43210",
    email: "admin@edunexus.edu"
  },
  landing: {
    badge: "Est. 1998 — Excellence in Education",
    heroHeadline: "Shaping the Leaders of Tomorrow",
    heroSubtext: "At EduNexus, we combine a prestigious heritage with innovative teaching to nurture every student's unique potential.",
    ctaLabel: "Inquire Now",
    stat1Val: "2.5K+", stat1Lbl: "Students Enrolled",
    stat2Val: "150+",  stat2Lbl: "Expert Educators",
    stat3Val: "98%",   stat3Lbl: "College Placement",
    stat4Val: "25+",   stat4Lbl: "Years of Heritage",
    prog1Icon: "📚", prog1Title: "Primary Years",      prog1Desc: "Laying a strong foundation through inquiry-based learning and creative exploration.",
    prog2Icon: "🔬", prog2Title: "Middle School",      prog2Desc: "Encouraging independent research and analytical skills across diverse subject areas.",
    prog3Icon: "🎓", prog3Title: "Higher Secondary",   prog3Desc: "Preparing global citizens for the world's most prestigious universities through rigorous achievement.",
    facilBadge: "A Legacy of Quality",
    facilHeadline: "World-Class Campus & Facilities",
    facilDesc: "From advanced science laboratories and digital libraries to Olympic-sized pools and theater halls, we provide an environment where excellence thrives.",
    facil1: "Modern Digital Classrooms",
    facil2: "Advanced STEM Laboratories",
    facil3: "Comprehensive Sports Academy",
    facil4: "Collaborative Research Hubs"
  },
  timetables: {}, 
  books: [
    { id: 'b1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', isbn: '978-0743273565', total: 5, available: 5, color: '#6366f1' },
    { id: 'b2', title: 'Brave New World', author: 'Aldous Huxley', category: 'Science Fiction', isbn: '978-0060850524', total: 3, available: 2, color: '#8b5cf6' },
    { id: 'b3', title: 'The Selfish Gene', author: 'Richard Dawkins', category: 'Biology', isbn: '978-0199291151', total: 2, available: 2, color: '#3b82f6' },
    { id: 'b4', title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History', isbn: '978-0099590088', total: 8, available: 8, color: '#10b981' },
    { id: 'b5', title: 'Clean Code', author: 'Robert C. Martin', category: 'Computer Science', isbn: '978-0132350884', total: 4, available: 3, color: '#ec4899' },
    { id: 'b6', title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Literature', isbn: '978-0060935467', total: 6, available: 6, color: '#f59e0b' },
    { id: 'b7', title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Physics', isbn: '978-0553380163', total: 4, available: 1, color: '#0ea5e9' },
    { id: 'b8', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', category: 'Computer Science', isbn: '978-0262033848', total: 3, available: 3, color: '#64748b' }
  ],
  libTransactions: [],
  enquiries: [
    { id: 1711990000000, studentName: 'Rohan Gupta', parentName: 'Amit Gupta', phone: '9876543210', class: 'primary', date: '2026-04-01T10:00:00Z', status: 'pending' },
    { id: 1712000000000, studentName: 'Ananya Iyer', parentName: 'Suresh Iyer', phone: '9123456789', class: 'nursery', date: '2026-04-01T11:30:00Z', status: 'contacted' },
    { id: 1712010000000, studentName: 'Mohit Sharma', parentName: 'Ravi Sharma', phone: '9870002233', class: 'high', date: '2026-04-02T09:15:00Z', status: 'enrolled' },
    { id: 1712020000000, studentName: 'Sanya Mirza', parentName: 'Imran Mirza', phone: '9121113344', class: 'middle', date: '2026-04-02T14:45:00Z', status: 'pending' },
    { id: 1712030000000, studentName: 'Eshaan Verma', parentName: 'Vikram Verma', phone: '9002224455', class: 'primary', date: '2026-04-03T11:00:00Z', status: 'contacted' }
  ]
};

let db = JSON.parse(localStorage.getItem('eduNexusDB')) || DEFAULT_DATA;
if (db.students && db.students.length <= 5) { // Force load the massive demo dataset if they have the old one
  db = JSON.parse(JSON.stringify(DEFAULT_DATA));
  localStorage.setItem('eduNexusDB', JSON.stringify(db));
}

let currentUser = JSON.parse(localStorage.getItem('eduNexusUser')) || null;



function getGrade(score) {
  if (score >= 90) return { g: 'A+', c: '#00113a' };
  if (score >= 80) return { g: 'A', c: '#7b5800' };
  if (score >= 70) return { g: 'B', c: '#10b981' };
  if (score >= 60) return { g: 'C', c: '#f59e0b' };
  return { g: 'F', c: '#ef4444' };
}

function getOrGenMarks(studentId, exam) {
  if (!db.marks[exam]) db.marks[exam] = {};
  if (!db.marks[exam][studentId]) {
    const marks = {};
    db.subjects.forEach(sub => {
      // Generate realistic scholarly marks based on student ID to keep it consistent
      const seed = parseInt(studentId) || 5;
      marks[sub] = 65 + (Math.floor(Math.random() * 30)); 
    });
    db.marks[exam][studentId] = marks;
    saveDB();
  }
  return db.marks[exam][studentId];
}

function saveDB() {
  localStorage.setItem('eduNexusDB', JSON.stringify(db));
}

// ═══════════════════════════ AUTH SYSTEM ═══════════════════════════

const loginForm = document.getElementById('login-form');
const loginPage = document.getElementById('login-page');
const appShell = document.getElementById('app');

if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const role = document.getElementById('login-role').value;
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;
    const errorMsg = document.getElementById('login-error');
    const loginBtn = document.getElementById('login-btn');
    
    if (!role || !email || !pass) {
      errorMsg.textContent = 'Please fill all fields.';
      errorMsg.classList.remove('hidden');
      return;
    }

    // Check password against saved user passwords (db.users) or global demo
    if (!db.users) db.users = {};
    const savedPwd = db.users[email];
    const validPwd = savedPwd ? savedPwd : 'demo123';
    if (pass !== validPwd) {
      errorMsg.textContent = 'Incorrect password. Use "demo123" for demo accounts.';
      errorMsg.classList.remove('hidden');
      return;
    }

    // Loading state
    loginBtn.querySelector('.btn-text').classList.add('hidden');
    loginBtn.querySelector('.btn-spinner').classList.remove('hidden');

    setTimeout(() => {
      let studentIds = [];
      let userId = 'u-' + Math.random().toString(36).substr(2, 4); // Default
      let userName = role.charAt(0).toUpperCase() + role.slice(1) + ' User';

      if (role === 'parent') {
        studentIds = db.students
          .filter(s => (s.parentEmail || '').toLowerCase() === email.toLowerCase())
          .map(s => s.id);
        if (studentIds.length === 0 && email === 'parent@school.edu') studentIds = ['1', '2']; // Demo Fallback
        userId = 'p-' + btoa(email).substr(0, 8);
        userName = 'Parent View';
      } else if (role === 'student') {
        const student = db.students.find(s => (s.email || '').toLowerCase() === email.toLowerCase());
        if (student) {
          studentIds = [student.id];
          userId = student.id;
          userName = `${student.fname} ${student.lname}`;
        }
      } else if (role === 'teacher') {
        const teacher = db.teachers.find(t => (t.email || '').toLowerCase() === email.toLowerCase());
        if (teacher) {
          userId = teacher.id;
          userName = `${teacher.fname} ${teacher.lname}`;
        }
      } else if (role === 'admin') {
        userId = 'admin-0';
        userName = 'Administrator';
      } else if (role === 'librarian') {
        userId = 'lib-0';
        userName = 'Librarian';
      }
      
      currentUser = {
        role,
        email,
        name: userName,
        id: userId,
        studentIds: studentIds, 
        studentId: studentIds[0] || null 
      };
      localStorage.setItem('eduNexusUser', JSON.stringify(currentUser));
      initApp();
      loginBtn.querySelector('.btn-text').classList.remove('hidden');
      loginBtn.querySelector('.btn-spinner').classList.add('hidden');
    }, 800);
  });
}

function logout() {
  localStorage.removeItem('eduNexusUser');
  window.location.reload();
}

function fillDemo(role) {
  document.getElementById('login-role').value = role;
  document.getElementById('login-email').value = (role === 'librarian' ? 'librarian' : role) + '@school.edu';
  document.getElementById('login-password').value = 'demo123';
}

function togglePassword() {
  const pwd = document.getElementById('login-password');
  pwd.type = pwd.type === 'password' ? 'text' : 'password';
}

// ═══════════════════════════ APP INITIALIZATION ═══════════════════════════

function initApp() {
  if (!currentUser) {
    loginPage.classList.remove('hidden');
    appShell.classList.add('hidden');
    return;
  }

  loginPage.classList.add('hidden');
  appShell.classList.remove('hidden');

  // Update User Info
  document.querySelectorAll('#sidebar-name, #topbar-avatar').forEach(el => {
    if (el.id === 'topbar-avatar') el.textContent = currentUser.name.charAt(0);
    else el.textContent = currentUser.name;
  });
  document.getElementById('sidebar-role').textContent = currentUser.role;
  document.getElementById('sidebar-avatar').textContent = currentUser.name.charAt(0);
  document.getElementById('welcome-msg').textContent = `Welcome back, ${currentUser.name}!`;
  document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  // Update Linked Students for Parents
  const linkedContainer = document.getElementById('linked-students-summary');
  if (currentUser.role === 'parent' && currentUser.studentIds?.length > 0) {
    linkedContainer.classList.remove('hidden');
    const linkedStudents = db.students.filter(s => currentUser.studentIds.includes(s.id));
    linkedContainer.innerHTML = `
      <div style="font-size:0.65rem; color:rgba(255,255,255,0.5); text-transform:uppercase; font-weight:700; margin-bottom:0.25rem">My Children</div>
      ${linkedStudents.map(s => `
        <div class="linked-student-pill">
          <div class="dot"></div>
          <span>${s.fname} ${s.lname}</span>
        </div>
      `).join('')}
    `;
  } else {
    linkedContainer.classList.add('hidden');
  }

  // Update School Branding
  updateBranding();

  // Role Based UI Access
  document.querySelectorAll('.nav-item[data-roles]').forEach(item => {
    const allowed = item.getAttribute('data-roles').split(',');
    if (!allowed.includes(currentUser.role)) item.remove();
  });

  // Admin specifically
  if (currentUser.role !== 'admin') {
    const addBtns = ['btn-add-student', 'btn-add-teacher', 'btn-add-announcement'];
    addBtns.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.style.display = 'none';
    });
  }

  // Initial Content Load
  navigate('dashboard', document.querySelector('[data-section="dashboard"]'));
  renderNotifs();
  initCharts();
  checkNewEnquiries();
}

function updateBranding() {
  if (!db.school) db.school = DEFAULT_DATA.school;
  const s = db.school;
  
  // Update Sidebar
  const sidebarBrand = document.querySelector('.sidebar-brand');
  if (sidebarBrand) sidebarBrand.textContent = s.name;

  // Update Topbar
  const topbarBrand = document.getElementById('topbar-brand');
  if (topbarBrand) topbarBrand.textContent = s.name;

  // Update Login Page
  const loginBrandText = document.getElementById('login-brand-text');
  const loginTaglineText = document.getElementById('login-tagline-text');
  if (loginBrandText) loginBrandText.textContent = s.name;
  if (loginTaglineText) loginTaglineText.textContent = s.tagline;

  // Update Document Title
  document.title = s.name + ' — School Management System';
}

// ═══════════════════════════ NAVIGATION ═══════════════════════════

function navigate(sectionId, element) {
  // Update Nav Active State
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  if (element) element.classList.add('active');

  // Show/Hide Sections
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(`section-${sectionId}`);
  if (target) target.classList.add('active');

  // Update Breadcrumb/Title
  document.getElementById('page-title').textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);

  // Section Specific Loaders
  switch(sectionId) {
    case 'dashboard':    loadDashboard(); break;
    case 'students':     renderStudents(); break;
    case 'teachers':     renderTeachers(); break;
    case 'attendance':   renderAttendanceGrid(); break;
    case 'marks':        loadMarks(); break;
    case 'timetable':    renderTimetable(); break;
    case 'fees':         loadFees(); break;
    case 'notifications':renderAnnouncements(); break;
    case 'settings':     renderSchoolSettings(); break;
    case 'reportcards':  loadReportCardList(); break;
    case 'library':      renderLibrary(); break;
    case 'admissions':   renderEnquiries(); break;
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
  
  if (window.innerWidth <= 1024) {
    sidebar.classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('hidden');
  }
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.add('hidden');
}

// ═══════════════════════════ DASHBOARD LOGIC ═══════════════════════════

function loadDashboard() {
  const isParent = currentUser.role === 'parent';
  const isStudent = currentUser.role === 'student';
  const linkedIds = currentUser.studentIds || [];
  
  let stats = [];
  if (isParent || isStudent) {
    const myStudents = db.students.filter(s => linkedIds.includes(s.id));
    const totalFees = myStudents.reduce((acc, s) => acc + (db.fees[s.id]?.total || 0), 0);
    const paidFees = myStudents.reduce((acc, s) => acc + (db.fees[s.id]?.paid || 0), 0);
    const pendingFees = totalFees - paidFees;
    
    stats = [
      { label: isParent ? 'Your Children' : 'My Profile', value: myStudents.length, color: 'var(--primary)', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>' },
      { label: 'Avg Attendance', value: '96%', color: 'var(--success)', icon: '<polyline points="9 11 12 14 22 4"></polyline>' },
      { label: 'Pending Fees', value: '₹' + (pendingFees/1000).toFixed(1) + 'k', color: 'var(--accent)', icon: '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>' },
      { label: 'Classes Today', value: '6', color: 'var(--secondary)', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>' }
    ];
  } else {
    stats = [
      { label: 'Total Students', value: db.students.length, color: 'var(--primary)', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>' },
      { label: 'Total Teachers', value: db.teachers.length, color: 'var(--accent)', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>' },
      { label: 'Avg Attendance', value: '94%', color: 'var(--secondary)', icon: '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>' },
      { label: 'Monthly Revenue', value: '₹24.8k', color: '#10b981', icon: '<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>' }
    ];
  }

  const statsGrid = document.getElementById('stats-grid');
  statsGrid.innerHTML = stats.map(s => `
    <div class="stat-card glass-card">
      <div class="stat-icon" style="background: ${s.color}20; color: ${s.color}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">${s.icon}</svg>
      </div>
      <div class="stat-info">
        <h4>${s.label}</h4>
        <div class="value">${s.value}</div>
        <div class="stat-change up">+4% from last period</div>
      </div>
    </div>
  `).join('');

  // Activities (Filtered for Parent/Student)
  const activityList = document.getElementById('activity-list');
  const allActivities = [
    { text: 'Aarav Sharma paid April Fees', time: '2 hours ago', icon: '💰', studentId: '1' },
    { text: 'Ishani Verma marked Present', time: '4 hours ago', icon: '✅', studentId: '2' },
    { text: 'New Teacher Sneha Patel joined', time: '5 hours ago', icon: '👤', global: true },
    { text: 'Marks updated for Class 10 Mid-Term', time: '1 day ago', icon: '📝', studentId: '1' },
    { text: 'Spring Break starts tomorrow', time: '2 days ago', icon: '🌴', global: true }
  ];

  const filteredActivities = (isParent || isStudent) 
    ? allActivities.filter(a => a.global || linkedIds.includes(a.studentId))
    : allActivities;

  activityList.innerHTML = filteredActivities.map(a => `
    <li class="activity-item">
      <div class="act-icon">${a.icon}</div>
      <div class="act-info">
        <h5>${a.text}</h5>
        <p>${a.global ? 'Announcement' : 'Academic Update'}</p>
      </div>
      <div class="act-time">${a.time}</div>
    </li>
  `).join('');

  // Top Performers (Only show if Admin/Teacher)
  const topPerformersSection = document.getElementById('top-performers').closest('.glass-card');
  if (isParent || isStudent) {
    topPerformersSection.style.display = 'none';
  } else {
    topPerformersSection.style.display = 'block';
    const topList = document.getElementById('top-performers');
    topList.innerHTML = db.students.slice(0, 5).map((s, idx) => `
      <li class="top-item">
        <span class="top-rank">#${idx + 1}</span>
        <span class="top-name">${s.fname} ${s.lname}</span>
        <span class="top-score">${98 - idx * 2}%</span>
      </li>
    `).join('');
  }
}

let charts = {};
function initCharts() {
  if (charts.att) charts.att.destroy();
  if (charts.fees) charts.fees.destroy();
  if (charts.grades) charts.grades.destroy();

  const ctxAtt = document.getElementById('chart-attendance')?.getContext('2d');
  const ctxFees = document.getElementById('chart-fees')?.getContext('2d');
  const ctxGrades = document.getElementById('chart-grades')?.getContext('2d');

  const isParent = currentUser.role === 'parent';
  const isStudent = currentUser.role === 'student';
  const linkedIds = currentUser.studentIds || [];
  const targetStudents = (isParent || isStudent) ? db.students.filter(s => linkedIds.includes(s.id)) : db.students;

  // 1. ATTENDANCE CHART (Real Data Aggregation)
  if (ctxAtt) {
    const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
    const currentYear = new Date().getFullYear();
    const attData = months.map((m, i) => {
      // Dummy logic for last 6 months - in real app we iterate db.attendance keys
      return 90 + Math.floor(Math.random() * 8); 
    });

    charts.att = new Chart(ctxAtt, {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: 'Attendance %',
          data: attData,
          borderColor: '#00113a',
          backgroundColor: 'rgba(0, 17, 58, 0.1)',
          fill: true,
          tension: 0.3,
          pointBackgroundColor: '#7b5800'
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { min: 80, max: 100 } } }
    });
  }

  // 2. FEE CHART (Real Data Aggregation)
  if (ctxFees) {
    let expected = 0, collected = 0;
    targetStudents.forEach(s => {
      const f = db.fees[s.id] || { total: 0, paid: 0 };
      expected += f.total;
      collected += f.paid;
    });

    charts.fees = new Chart(ctxFees, {
      type: 'bar',
      data: {
        labels: ['Institutional Revenue'],
        datasets: [
          { label: 'Expected', data: [expected], backgroundColor: '#e2e8f0' },
          { label: 'Collected', data: [collected], backgroundColor: '#7b5800' }
        ]
      },
      options: { 
        responsive: true, 
        plugins: { legend: { position: 'bottom' } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // 3. GRADE CHART (Real Data Aggregation)
  if (ctxGrades) {
    let counts = { 'A+': 0, 'A': 0, 'B': 0, 'C': 0, 'F': 0 };
    targetStudents.forEach(s => {
      const marks = getOrGenMarks(s.id, 'Mid-Term');
      const scores = Object.values(marks);
      if (scores.length > 0) {
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
        counts[getGrade(avg).g]++;
      }
    });

    charts.grades = new Chart(ctxGrades, {
      type: 'doughnut',
      data: {
        labels: ['A+', 'A', 'B', 'C', 'F'],
        datasets: [{
          data: Object.values(counts),
          backgroundColor: ['#00113a', '#7b5800', '#10b981', '#f59e0b', '#ef4444']
        }]
      },
      options: { responsive: true, cutout: '70%', plugins: { legend: { position: 'bottom' } } }
    });
  }
}

// ═══════════════════════════ CRUD OPERATIONS ═══════════════════════════

function renderStudents() {
  const grid = document.getElementById('students-grid');
  const q = document.getElementById('student-search').value.toLowerCase();
  const c = document.getElementById('student-class-filter').value;
  const linkedIds = currentUser.studentIds || [];

  const filtered = db.students.filter(s => {
    // If parent, only show their children
    if (currentUser.role === 'parent' && !linkedIds.includes(s.id)) return false;
    // If student, only show themselves
    if (currentUser.role === 'student' && s.id !== currentUser.studentId) return false;

    const matchSearch = (s.fname + ' ' + s.lname).toLowerCase().includes(q) || s.roll.toLowerCase().includes(q);
    const matchClass = !c || s.class === c;
    return matchSearch && matchClass;
  });

  grid.innerHTML = filtered.map(s => `
    <div class="profile-card glass-card">
      <div class="pc-header">
        <div class="pc-avatar">${s.fname.charAt(0)}</div>
        <div class="pc-name">
          <h3>${s.fname} ${s.lname}</h3>
          <span class="pc-role">ID: ${s.roll}</span>
        </div>
      </div>
      <div class="pc-info">
        <div class="pc-item"><label>Class</label><span>${s.class}-${s.section}</span></div>
        <div class="pc-item"><label>Gender</label><span>${s.gender}</span></div>
        <div class="pc-item"><label>Blood</label><span>${s.blood}</span></div>
        <div class="pc-item"><label>Mobile</label><span>${s.contact}</span></div>
      </div>
      <div class="pc-actions">
        <button class="btn-icon btn-edit" onclick="editStudent('${s.id}')" title="Edit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>
        <button class="btn-icon btn-delete" onclick="deleteStudent('${s.id}')" title="Delete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
      </div>
    </div>
  `).join('');
}

function openStudentModal() {
  document.getElementById('modal-student-title').textContent = 'Add New Student';
  document.getElementById('form-student').reset();
  document.getElementById('s-id').value = '';
  document.getElementById('modal-student').classList.remove('hidden');
}

function editStudent(id) {
  const s = db.students.find(x => x.id === id);
  if (!s) return;
  document.getElementById('modal-student-title').textContent = 'Edit Student';
  document.getElementById('s-id').value          = s.id;
  document.getElementById('s-fname').value        = s.fname;
  document.getElementById('s-lname').value        = s.lname;
  document.getElementById('s-roll').value         = s.roll;
  document.getElementById('s-class').value        = s.class;
  document.getElementById('s-section').value      = s.section;
  document.getElementById('s-dob').value          = s.dob;
  document.getElementById('s-gender').value       = s.gender;
  document.getElementById('s-contact').value      = s.contact;
  document.getElementById('s-email').value        = s.email;
  document.getElementById('s-address').value      = s.address;
  document.getElementById('s-blood').value        = s.blood;
  document.getElementById('s-parent-email').value = s.parentEmail || '';
  document.getElementById('modal-student').classList.remove('hidden');
}

function saveStudent(e) {
  e.preventDefault();
  const id = document.getElementById('s-id').value;
  const data = {
    id: id || Date.now().toString(),
    fname: document.getElementById('s-fname').value,
    lname: document.getElementById('s-lname').value,
    roll: document.getElementById('s-roll').value,
    class: document.getElementById('s-class').value,
    section: document.getElementById('s-section').value,
    dob: document.getElementById('s-dob').value,
    gender: document.getElementById('s-gender').value,
    contact: document.getElementById('s-contact').value,
    email: document.getElementById('s-email').value,
    address: document.getElementById('s-address').value,
    blood: document.getElementById('s-blood').value,
    parentEmail: document.getElementById('s-parent-email').value
  };

  if (!data.fname || !data.roll || !data.class) return showToast('Please fill required fields', 'error');

  if (id) {
    const idx = db.students.findIndex(x => x.id === id);
    db.students[idx] = data;
  } else {
    db.students.push(data);
  }

  saveDB();
  closeModal('modal-student');
  renderStudents();
  showToast('Student saved successfully');
}

function deleteStudent(id) {
  if (!confirm('Are you sure you want to delete this student?')) return;
  db.students = db.students.filter(x => x.id !== id);
  saveDB();
  renderStudents();
  showToast('Student deleted');
}

// ═══════════════════════════ TEACHERS LOGIC ═══════════════════════════

function renderTeachers() {
  const grid = document.getElementById('teachers-grid');
  const q = document.getElementById('teacher-search').value.toLowerCase();

  const filtered = db.teachers.filter(t => (t.fname + ' ' + t.lname).toLowerCase().includes(q) || t.subject.toLowerCase().includes(q));

  grid.innerHTML = filtered.map(t => `
    <div class="profile-card glass-card">
      <div class="pc-header">
        <div class="pc-avatar" style="background: var(--secondary)">${t.fname.charAt(0)}</div>
        <div class="pc-name">
          <h3>${t.fname} ${t.lname}</h3>
          <span class="pc-role">${t.subject} Specialist</span>
        </div>
      </div>
      <div class="pc-info">
        <div class="pc-item"><label>EMP ID</label><span>${t.empid}</span></div>
        <div class="pc-item"><label>Experience</label><span>${t.exp} yrs</span></div>
        <div class="pc-item"><label>Classes</label><span>${t.classes}</span></div>
        <div class="pc-item"><label>Qualification</label><span>${t.qual}</span></div>
      </div>
      <div class="pc-actions">
        <button class="btn-icon btn-edit" onclick="editTeacher('${t.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>
        <button class="btn-icon btn-delete" onclick="deleteTeacher('${t.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
      </div>
    </div>
  `).join('');
}

function openTeacherModal() {
  document.getElementById('modal-teacher-title').textContent = 'Add New Teacher';
  document.getElementById('form-teacher').reset();
  document.getElementById('t-id').value = '';
  document.getElementById('t-classes').value = '';
  // Reset checkboxes
  document.querySelectorAll('#modal-teacher .class-pill input').forEach(cb => cb.checked = false);
  // Reset preview
  document.getElementById('t-preview-avatar').textContent = '👩‍🏫';
  document.getElementById('t-preview-empid').textContent = 'Employee ID will be assigned';
  document.getElementById('modal-teacher').classList.remove('hidden');
}

function editTeacher(id) {
  const t = db.teachers.find(x => x.id === id);
  if (!t) return;
  document.getElementById('modal-teacher-title').textContent = 'Edit Teacher';
  document.getElementById('t-id').value    = t.id;
  document.getElementById('t-fname').value = t.fname;
  document.getElementById('t-lname').value = t.lname;
  document.getElementById('t-empid').value = t.empid;
  document.getElementById('t-subject').value = t.subject;
  document.getElementById('t-qual').value  = t.qual;
  document.getElementById('t-email').value = t.email;
  document.getElementById('t-phone').value = t.phone;
  document.getElementById('t-exp').value   = t.exp;
  document.getElementById('t-salary').value = t.salary;
  // Restore class checkboxes
  const classes = (t.classes || '').split(',').map(c => c.trim());
  document.querySelectorAll('#modal-teacher .class-pill input').forEach(cb => {
    cb.checked = classes.includes(cb.value);
  });
  document.getElementById('t-classes').value = t.classes || '';
  // Update preview
  updateTeacherPreview();
  document.getElementById('t-preview-empid').textContent = 'EMP: ' + (t.empid || '—');
  document.getElementById('modal-teacher').classList.remove('hidden');
}

function deleteTeacher(id) {
  if (!confirm('Are you sure you want to delete this teacher?')) return;
  db.teachers = db.teachers.filter(x => x.id !== id);
  saveDB();
  renderTeachers();
  showToast('Teacher record deleted');
}

function saveTeacher(e) {
  e.preventDefault();
  const id = document.getElementById('t-id').value;
  const data = {
    id: id || 't' + Date.now(),
    fname: document.getElementById('t-fname').value,
    lname: document.getElementById('t-lname').value,
    empid: document.getElementById('t-empid').value,
    subject: document.getElementById('t-subject').value,
    classes: document.getElementById('t-classes').value,
    qual: document.getElementById('t-qual').value,
    email: document.getElementById('t-email').value,
    phone: document.getElementById('t-phone').value,
    exp: document.getElementById('t-exp').value,
    salary: document.getElementById('t-salary').value
  };

  if (id) {
    const idx = db.teachers.findIndex(x => x.id === id);
    db.teachers[idx] = data;
  } else {
    db.teachers.push(data);
  }

  saveDB();
  closeModal('modal-teacher');
  renderTeachers();
  showToast('Teacher record saved');
}

// ═══════════════════════════ ATTENDANCE LOGIC ═══════════════════════════

// 0-indexed month, so +1 for key
function renderAttendanceGrid() {
  const monthSelect = document.getElementById('attendance-month');
  const yearSelect = document.getElementById('attendance-year');
  const classSelect = document.getElementById('attendance-class');

  if (!monthSelect.value) {
    const d = new Date();
    monthSelect.value = d.getMonth();
    yearSelect.value = d.getFullYear();
  }

  const month = parseInt(monthSelect.value);
  const year = parseInt(yearSelect.value);
  const cls = classSelect.value;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const key = `${year}-${month + 1}`;
  const grid = document.getElementById('attendance-grid');
  const linkedIds = currentUser.studentIds || [];
  
  const students = db.students.filter(s => {
    // Role-based filtering
    if (currentUser.role === 'parent' && !linkedIds.includes(s.id)) return false;
    if (currentUser.role === 'student' && !linkedIds.includes(s.id)) return false;
    
    return s.class === cls;
  });

  // Statistics tracking
  let totalPresentCount = 0;
  let totalPottentialCells = 0;
  let lowAttendanceStudents = [];

  let html = `<thead><tr><th>Student Name</th>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(year, month, d);
    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
    const isWeekend = dateObj.getDay() === 0;
    html += `<th class="att-day-header ${isWeekend ? 'weekend' : ''}">${d}<br><small>${dayName.charAt(0)}</small></th>`;
  }
  html += `</tr></thead><tbody>`;

  students.forEach(s => {
    let studentPresent = 0;
    let studentDays = 0;

    const rowHtml = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(year, month, d);
      const isWeekend = dateObj.getDay() === 0;
      const status = (db.attendance[key] && db.attendance[key][s.id] && db.attendance[key][s.id][d]) || '';
      
      let cellClass = 'empty';
      let displayText = '';

      if (isWeekend) {
        cellClass = 'holiday';
        displayText = 'H';
      } else {
        studentDays++;
        totalPottentialCells++;
        if (status === 'P') {
          cellClass = 'present';
          displayText = 'P';
          studentPresent++;
          totalPresentCount++;
        } else if (status === 'A') {
          cellClass = 'absent';
          displayText = 'A';
        }
      }

      rowHtml.push(`<td>
        <div class="att-cell ${cellClass}" data-sid="${s.id}" data-day="${d}" onclick="toggleAttendanceCell(this)">
          ${displayText}
        </div>
      </td>`);
    }

    const attendancePct = studentDays > 0 ? (studentPresent / studentDays) * 100 : 100;
    const isLow = attendancePct < 75;
    if (isLow) lowAttendanceStudents.push(`${s.fname} (${Math.round(attendancePct)}%)`);

    html += `<tr>
      <td class="${isLow ? 'low-attendance' : ''}">
        <div style="font-weight:600">${s.fname} ${s.lname}</div>
        <small style="color:var(--text-muted)">Roll: ${s.roll} | ${Math.round(attendancePct)}%</small>
      </td>
      ${rowHtml.join('')}
    </tr>`;
  });

  html += `</tbody>`;
  grid.innerHTML = html;

  // Update Stats Cards
  document.getElementById('att-stat-total').textContent = students.length;
  const avg = totalPottentialCells > 0 ? Math.round((totalPresentCount / totalPottentialCells) * 100) : 0;
  document.getElementById('att-stat-avg').textContent = `${avg}%`;
  document.getElementById('att-stat-low').textContent = lowAttendanceStudents.length > 0 ? lowAttendanceStudents.slice(0, 2).join(', ') + (lowAttendanceStudents.length > 2 ? '...' : '') : 'None';
  document.getElementById('att-stat-low').title = lowAttendanceStudents.join('\n');
}

function toggleAttendanceCell(el) {
  if (el.classList.contains('holiday')) return;
  if (el.classList.contains('empty')) {
    el.classList.replace('empty', 'present');
    el.textContent = 'P';
  } else if (el.classList.contains('present')) {
    el.classList.replace('present', 'absent');
    el.textContent = 'A';
  } else {
    el.classList.replace('absent', 'empty');
    el.textContent = '';
  }
}

function markTodayPresent() {
  const today = new Date();
  const d = today.getDate();
  const cells = document.querySelectorAll(`.att-cell[data-day="${d}"]:not(.holiday)`);
  if (cells.length === 0) return showToast('Cannot mark today as present (Weekend/Invalid)', 'danger');
  
  cells.forEach(c => {
    c.classList.remove('empty', 'absent');
    c.classList.add('present');
    c.textContent = 'P';
  });
  showToast(`Marked all students present for today (${d})`);
}

function exportAttendanceCSV() {
  const month = document.getElementById('attendance-month').options[document.getElementById('attendance-month').selectedIndex].text;
  const yr = document.getElementById('attendance-year').value;
  const cls = document.getElementById('attendance-class').value;
  
  const table = document.getElementById('attendance-grid');
  let csv = [];
  const rows = table.querySelectorAll('tr');
  
  for (let i = 0; i < rows.length; i++) {
    const row = [], cols = rows[i].querySelectorAll('td, th');
    for (let j = 0; j < cols.length; j++) {
      let data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, " ").replace(/(\s\s)/gm, " ");
      data = data.replace(/"/g, '""');
      row.push('"' + data + '"');
    }
    csv.push(row.join(','));
  }

  const csvContent = "data:text/csv;charset=utf-8," + csv.join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Attendance_${cls}_${month}_${yr}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function saveAttendanceGrid() {
  const month = parseInt(document.getElementById('attendance-month').value);
  const year = parseInt(document.getElementById('attendance-year').value);
  const key = `${year}-${month + 1}`;

  if (!db.attendance[key]) db.attendance[key] = {};

  const cells = document.querySelectorAll('.att-cell:not(.holiday)');
  cells.forEach(cell => {
    const sid = cell.getAttribute('data-sid');
    const day = cell.getAttribute('data-day');
    if (!db.attendance[key][sid]) db.attendance[key][sid] = {};
    let status = '';
    if (cell.classList.contains('present')) status = 'P';
    else if (cell.classList.contains('absent')) status = 'A';
    db.attendance[key][sid][day] = status;
  });

  saveDB();
  showToast(`Attendance for ${document.getElementById('attendance-month').options[month].text} saved!`);
  renderAttendanceGrid(); // Re-render to update percentages
}

// ═══════════════════════════ MARKS MANAGEMENT ═══════════════════════════

function loadMarks() {
  const cls = document.getElementById('marks-class').value;
  const exam = document.getElementById('marks-exam').value;
  const thead = document.getElementById('marks-thead');
  const tbody = document.getElementById('marks-tbody');

  thead.innerHTML = `
    <tr>
      <th>Student</th>
      ${db.subjects.map(sub => `<th>${sub}</th>`).join('')}
      <th>Total</th>
      <th>Grade</th>
    </tr>
  `;

  const students = db.students.filter(s => s.class === cls);

  tbody.innerHTML = students.map(s => {
    const marksData = getOrGenMarks(s.id, exam);
    let total = 0;
    
    const scores = db.subjects.map(sub => {
      const score = marksData[sub] || 0;
      total += score;
      return `<td><input type="number" class="mark-input" value="${score}" data-sub="${sub}" oninput="calcMarks(this)"></td>`;
    });

    const avg = total / db.subjects.length;
    const { g, color } = getGrade(avg);

    return `
      <tr data-sid="${s.id}" data-exam="${exam}">
        <td style="font-weight:600">${s.fname} ${s.lname}</td>
        ${scores.join('')}
        <td class="total-cell" style="font-weight:700">${total}</td>
        <td class="grade-cell"><span class="badge" style="background:${color}44; color:${color}">${g}</span></td>
      </tr>
    `;
  }).join('');
}

function calcMarks(input) {
  const tr = input.closest('tr');
  const sid = tr.dataset.sid;
  const exam = tr.dataset.exam;
  const sub = input.dataset.sub;
  const score = parseInt(input.value || 0);

  // 1. Data Persistence
  if (!db.marks) db.marks = {};
  if (!db.marks[exam]) db.marks[exam] = {};
  if (!db.marks[exam][sid]) db.marks[exam][sid] = {};
  
  db.marks[exam][sid][sub] = Math.min(MAX_MARKS, score);
  saveDB();

  // 2. UI Updates (Live Calculation)
  const inputs = tr.querySelectorAll('.mark-input');
  let total = 0;
  inputs.forEach(i => total += parseInt(i.value || 0));
  
  const avg = total / db.subjects.length;
  const { g, color } = getGrade(avg);
  
  tr.querySelector('.total-cell').textContent = total;
  tr.querySelector('.grade-cell').innerHTML = `<span class="badge" style="background:${color}44; color:${color}">${g}</span>`;
}

// ═══════════════════════════ TIMETABLE ═══════════════════════════

let isTimetableEditing = false;

function renderTimetable() {
  const clsSelect = document.getElementById('timetable-class');
  const grid = document.getElementById('timetable-grid');
  const legend = document.getElementById('timetable-legend');
  const editBtn = document.getElementById('btn-edit-timetable');
  const saveBtn = document.getElementById('btn-save-timetable');
  const manageBtn = document.getElementById('btn-manage-subjects');
  
  if (!clsSelect || !grid || !legend || !currentUser) {
    console.warn("Timetable elements not ready or user not logged in.");
    return;
  }

  // Auto-select class for Students/Parents
  const linkedIds = currentUser.studentIds || [];
  if ((currentUser.role === 'student' || currentUser.role === 'parent') && linkedIds.length > 0) {
    const student = db.students.find(s => s.id === linkedIds[0]);
    if (student && clsSelect.value !== student.class) {
      clsSelect.value = student.class;
    }
    // If only one child, disable the select to prevent confusion
    if (linkedIds.length === 1) clsSelect.disabled = true;
    else clsSelect.disabled = false;
  } else {
    clsSelect.disabled = false;
  }

  const cls = clsSelect.value;
  
  // Role-based visibility: Only Admin can edit
  if (currentUser.role === 'admin') {
    editBtn?.classList.remove('hidden');
    manageBtn?.classList.remove('hidden');
  } else {
    editBtn?.classList.add('hidden');
    saveBtn?.classList.add('hidden');
    manageBtn?.classList.add('hidden');
    isTimetableEditing = false;
  }

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Default periods if no data exists for this class
  const defaultPeriods = [
    { time: '08:30 - 09:15', subs: ['Physics', 'Mathematics', 'English', 'Science', 'History', 'Mathematics'] },
    { time: '09:15 - 10:00', subs: ['Mathematics', 'Physics', 'History', 'English', 'Science', 'Computer Science'] },
    { time: '10:00 - 10:45', subs: ['English', 'Science', 'Mathematics', 'Physics', 'Science', 'English'] },
    { time: '11:15 - 12:00', subs: ['Science', 'History', 'Physics', 'Mathematics', 'Science', 'History'] },
    { time: '12:00 - 12:45', subs: ['History', 'English', 'Science', 'Mathematics', 'Mathematics', 'Computer Science'] }
  ];

  if (!db.timetables) db.timetables = {};
  let periods = db.timetables[cls];
  
  // Ensure periods is a valid array, otherwise fallback to default
  if (!Array.isArray(periods) || periods.length === 0) {
    periods = defaultPeriods;
  }

  const subjectIcons = {
    'Mathematics': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>`,
    'Physics': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
    'Science': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    'English': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    'History': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    'Computer Science': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    'P.E.': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    'Lib': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h9z"></path></svg>`,
    'Break': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>`
  };

  const colors = {
    'Mathematics': '#6366f1', 'Physics': '#8b5cf6', 'Science': '#3b82f6', 
    'English': '#f59e0b', 'History': '#10b981', 'Computer Science': '#ec4899', 
    'P.E.': '#06b6d4', 'Lib': '#64748b', 'Break': '#94a3b8'
  };

  // Render Legend (Subject Catalog)
  legend.innerHTML = db.subjects.concat(['P.E.', 'Lib']).map(key => `
    <div class="legend-item" style="color:${colors[key] || 'var(--text-muted)'}">
      <div class="legend-color" style="background:${colors[key] || '#e2e8f0'}"></div>
      <span>${key}</span>
    </div>
  `).join('');

  let html = `<thead><tr><th style="width:120px">Chronos</th>${days.map(d => `<th>${d}</th>`).join('')}</tr></thead><tbody>`;
  
  periods.forEach((p, pIdx) => {
    if (!p.subs) return;
    html += `<tr><td class="tt-time-column"><span class="tt-time-label">${p.time}</span></td>`;
    p.subs.forEach((s, dIdx) => {
      const color = colors[s] || '#e2e8f0';
      const icon = subjectIcons[s] || '';
      
      if (isTimetableEditing) {
        html += `
          <td class="editable-cell">
            <select class="timetable-select" onchange="updateLiveCell(this, ${pIdx}, ${dIdx})" 
                    style="border-left:4px solid ${color}; width:100%">
              ${db.subjects.concat(['P.E.', 'Lib', 'Break'])
                .map(opt => `<option value="${opt}" ${opt === s ? 'selected' : ''}>${opt}</option>`).join('')}
            </select>
          </td>
        `;
      } else {
        html += `
          <td>
            <div class="tt-session-card" style="border-left:4px solid ${color}">
              ${icon ? `<div class="tt-session-icon">${icon}</div>` : ''}
              <div class="tt-subject">${s}</div>
              <div class="tt-teacher">Lead Faculty</div>
            </div>
          </td>
        `;
      }
    });
    html += '</tr>';
  });
  
  html += '</tbody>';
  grid.innerHTML = html;
  
  if (isTimetableEditing) {
    grid.classList.add('is-editing');
    if (saveBtn) saveBtn.classList.remove('hidden');
    if (editBtn) editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg> Cancel Edit`;
  } else {
    grid.classList.remove('is-editing');
    if (saveBtn) saveBtn.classList.add('hidden');
    if (editBtn) editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Edit Schedule`;
  }
}

function toggleTimetableEdit() {
  if (currentUser.role !== 'admin') {
    showToast('Only administrators can edit the timetable.', 'danger');
    return;
  }
  
  isTimetableEditing = !isTimetableEditing;
  if (isTimetableEditing) {
    // Show editing overlay
    const overlay = document.createElement('div');
    overlay.id = 'editing-banner';
    overlay.className = 'editing-overlay';
    overlay.innerHTML = `<div class="editing-dot"></div> Editing Mode Enabled`;
    document.body.appendChild(overlay);
  } else {
    document.getElementById('editing-banner')?.remove();
  }
  renderTimetable();
}

function updateLiveCell(select, pIdx, dIdx) {
  const cls = document.getElementById('timetable-class').value;
  // We don't save yet, just keep track of temporary changes if we needed, 
  // but here we just read from DOM on Save.
}

function saveTimetable() {
  if (currentUser.role !== 'admin') {
    showToast('Unauthorized: Only admins can save changes.', 'danger');
    return;
  }
  const cls = document.getElementById('timetable-class').value;
  const grid = document.getElementById('timetable-grid');
  const rows = grid.querySelectorAll('tbody tr');
  
  const newPeriods = [];
  rows.forEach(row => {
    const time = row.cells[0].textContent;
    const selects = row.querySelectorAll('select');
    const subs = Array.from(selects).map(s => s.value);
    newPeriods.push({ time, subs });
  });

  db.timetables[cls] = newPeriods;
  saveDB();
  
  showToast(`Timetable for Class ${cls} saved successfully!`, 'success');
  isTimetableEditing = false;
  document.getElementById('editing-banner')?.remove();
  renderTimetable();
}

// ═══════════════════════════ FEE MANAGEMENT ═══════════════════════════

function loadFees() {
  const cls = document.getElementById('fees-class').value;
  const status = document.getElementById('fees-status').value;
  const tbody = document.getElementById('fees-tbody');
  
  const linkedIds = currentUser.studentIds || [];
  
  const filtered = db.students.filter(s => {
    // If parent, only show their children
    if (currentUser.role === 'parent' && !linkedIds.includes(s.id)) return false;
    
    const matchClass = !cls || s.class === cls;
    const fee = db.fees[s.id] || {};
    const matchStatus = !status || fee.status === status;
    return matchClass && matchStatus;
  });

  tbody.innerHTML = filtered.map(s => {
    const fee = db.fees[s.id] || { total: 40000, paid: 0, status: 'pending', dueDate: '2026-04-10' };
    const balance = fee.total - fee.paid;
    let badgeClass = 'badge-warning';
    if (fee.status === 'paid') badgeClass = 'badge-success';
    if (fee.status === 'pending') badgeClass = 'badge-danger';

    return `
      <tr>
        <td>
          <div style="display:flex; align-items:center; gap:10px">
            <div class="avatar" style="width:30px; height:30px; font-size:0.8rem">${s.fname.charAt(0)}</div>
            <span style="font-weight:600">${s.fname} ${s.lname}</span>
          </div>
        </td>
        <td>${s.class}-${s.section}</td>
        <td>₹${fee.total.toLocaleString()}</td>
        <td style="color:var(--success); font-weight:600">₹${fee.paid.toLocaleString()}</td>
        <td style="color:var(--danger); font-weight:600">₹${balance.toLocaleString()}</td>
        <td><span class="badge ${badgeClass}">${fee.status}</span></td>
        <td>${fee.dueDate}</td>
        <td style="display:flex; gap:0.5rem">
          <button class="btn-primary" style="padding:0.4rem 0.85rem; font-size:0.75rem" onclick="viewReceipt('${s.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px;height:14px"><path d="M5 17h14M5 13h14M5 9h14M21 21H3V3h18v18z"></path></svg>
            Receipt
          </button>
          ${currentUser.role === 'parent' && (fee.status === 'pending' || fee.status === 'partial') ? 
            `<button class="btn-primary" style="padding:0.4rem 0.85rem; font-size:0.75rem; background:var(--success)" onclick="payFee('${s.id}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px;height:14px"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              Pay Now
            </button>` : ''}
        </td>
      </tr>
    `;
  }).join('');

  // Update Summary Cards (Dynamic based on role)
  let totalExpected = 250000; // Demo school total
  let sub_students = db.students;
  
  if (currentUser.role === 'parent') {
    sub_students = db.students.filter(s => linkedIds.includes(s.id));
    totalExpected = sub_students.reduce((acc, s) => acc + (db.fees[s.id]?.total || 0), 0);
  }

  const totalPaid = sub_students.reduce((acc, s) => acc + (db.fees[s.id]?.paid || 0), 0);
  const totalPending = totalExpected - totalPaid;

  document.getElementById('fees-summary-row').innerHTML = `
    <div class="stat-card glass-card">
      <div class="stat-info"><h4>${currentUser.role === 'parent' ? 'Total Fees' : 'Total Revenue'}</h4><div class="value">₹${totalExpected.toLocaleString()}</div></div>
    </div>
    <div class="stat-card glass-card">
      <div class="stat-info"><h4>${currentUser.role === 'parent' ? 'Paid Amount' : 'Total Collected'}</h4><div class="value" style="color:var(--success)">₹${totalPaid.toLocaleString()}</div></div>
    </div>
    <div class="stat-card glass-card">
      <div class="stat-info"><h4>${currentUser.role === 'parent' ? 'Balance Due' : 'Total Outstanding'}</h4><div class="value" style="color:var(--danger)">₹${totalPending.toLocaleString()}</div></div>
    </div>
  `;
}

function payFee(sid) {
  const s = db.students.find(x => x.id === sid);
  if (!confirm(`Proceed to pay ₹${(db.fees[sid].total - db.fees[sid].paid).toLocaleString()} for ${s.fname} ${s.lname}?`)) return;

  // Simulate payment processing
  showToast('Processing payment...', 'info');
  
  setTimeout(() => {
    db.fees[sid].paid = db.fees[sid].total;
    db.fees[sid].status = 'paid';
    
    // Add activity
    db.notifs.unshift({ id: Date.now(), text: `Fee payment successful for ${s.fname} ${s.lname}`, read: false });
    
    saveDB();
    loadFees();
    showToast(`Payment successful! Receipt generated.`, 'success');
  }, 1500);
}

function viewReceipt(sid) {
  const s = db.students.find(x => x.id === sid);
  const f = db.fees[sid] || { total: 40000, paid: 0, status: 'pending', date: '2026-03-29' };
  const content = document.getElementById('receipt-content');
  
  content.innerHTML = `
    <div style="border:2px dashed #e2e8f0; padding:20px; border-radius:10px; line-height:1.6">
      <div style="text-align:center; margin-bottom:20px">
        <h2 style="color:var(--primary); font-family:var(--font-serif); font-size:1.5rem">${db.school.name}</h2>
        <p style="font-size:0.75rem; color:var(--text-muted)">${db.school.address}</p>
        <p style="font-size:0.75rem; color:var(--text-muted)">Contact: ${db.school.contact} | Email: ${db.school.email}</p>
      </div>
      <hr style="border:none; border-top:1px solid #eee; margin:15px 0">
      <div style="display:flex; justify-content:space-between; margin-bottom:10px">
        <span><strong>Student:</strong> ${s.fname} ${s.lname}</span>
        <span><strong>Date:</strong> ${new Date().toLocaleDateString()}</span>
      </div>
      <div style="margin-bottom:10px"><strong>Roll No:</strong> ${s.roll} | <strong>Class:</strong> ${s.class}-${s.section}</div>
      <hr style="border:none; border-top:1px solid #eee; margin:15px 0">
      <div style="display:flex; justify-content:space-between; font-weight:700; margin-bottom:10px">
        <span>Description</span>
        <span>Amount (₹)</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:5px">
        <span>Academic Tuition Fees</span>
        <span>${f.total}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:10px; color:var(--success)">
        <span>Paid Amount</span>
        <span>- ${f.paid}</span>
      </div>
      <hr style="border:none; border-top:1px solid #eee; margin:15px 0">
      <div style="display:flex; justify-content:space-between; font-size:1.2rem; font-weight:800; color:var(--primary)">
        <span>BALANCE DUE:</span>
        <span>₹${f.total - f.paid}</span>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:800; color:var(--success); margin-top:5px">
        <span>TOTAL PAID:</span>
        <span>₹${f.paid}</span>
      </div>
      <div style="text-align:center; margin-top:30px; font-size:0.7rem; color:var(--text-muted)">
        This is a computer generated receipt and does not require a physical signature.
      </div>
    </div>
  `;
  document.getElementById('modal-receipt').classList.remove('hidden');
}

function printReceipt() {
  window.print();
}

// ═══════════════════════════ NOTIFICATIONS ═══════════════════════════

function renderAnnouncements() {
  const panel = document.getElementById('notif-panel');
  panel.innerHTML = db.announcements.map(a => `
    <div class="ann-item" style="border-left:5px solid ${a.priority === 'high' ? 'var(--danger)' : 'var(--primary)'}; padding:1.5rem; background:#fff; margin-bottom:1rem; border-radius:10px; box-shadow:var(--shadow-sm)">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px">
        <span class="badge" style="background:#f1f5f9; color:var(--text-muted)">${a.category}</span>
        <span style="font-size:0.75rem; color:var(--text-muted)">${a.date}</span>
      </div>
      <h3 style="font-size:1rem; font-weight:700; margin-bottom:5px">${a.title}</h3>
      <p style="font-size:0.875rem; color:var(--text-main)">${a.message}</p>
    </div>
  `).join('');

  document.getElementById('notif-quick-stats').innerHTML = `
    <div style="padding:1rem; background:#f0f9ff; border-radius:10px; margin-top:1rem">
      <h4 style="font-size:0.8rem; color:#0369a1">Active Announcements</h4>
      <div style="font-size:1.5rem; font-weight:800; color:#0369a1">${db.announcements.length}</div>
    </div>
  `;
}

function renderNotifs() {
  const list = document.getElementById('notif-list');
  const count = db.notifs.filter(n => !n.read).length;
  document.getElementById('notif-count').textContent = count;
  document.getElementById('nav-notif-count').textContent = count;

  list.innerHTML = db.notifs.map(n => `
    <div class="notif-item ${n.read ? '' : 'unread'}" style="padding:12px; border-bottom:1px solid #f1f5f9; display:flex; gap:10px; cursor:pointer">
      <div style="width:8px; height:8px; border-radius:50%; background:${n.read ? '#cbd5e1' : 'var(--primary)'}; margin-top:6px"></div>
      <div style="font-size:0.8125rem; color:var(--text-main)">${n.text}</div>
    </div>
  `).join('');
}

function toggleNotifDropdown() {
  document.getElementById('notif-dropdown').classList.toggle('active');
}

function markAllRead() {
  db.notifs.forEach(n => n.read = true);
  saveDB();
  renderNotifs();
}

function openAnnouncementModal() {
  document.getElementById('form-announcement').reset();
  // Reset category pills
  document.querySelectorAll('.ann-cat-pill').forEach(p => p.classList.remove('active'));
  document.querySelector('.ann-cat-pill[data-cat="General"]').classList.add('active');
  document.getElementById('ann-category').value = 'General';
  // Reset priority pills
  document.querySelectorAll('.priority-pill').forEach(p => p.classList.remove('active-priority'));
  document.getElementById('ppill-normal').classList.add('active-priority');
  document.getElementById('ann-priority').value = 'normal';
  document.querySelectorAll('[name="priority-vis"]').forEach(r => r.checked = r.value === 'normal');
  // Reset char counter
  document.getElementById('ann-char-count').textContent = '0 / 500';
  document.getElementById('modal-announcement').classList.remove('hidden');
}

function saveAnnouncement(e) {
  e.preventDefault();
  const data = {
    id: Date.now(),
    title: document.getElementById('ann-title').value,
    message: document.getElementById('ann-message').value,
    category: document.getElementById('ann-category').value,
    priority: document.getElementById('ann-priority').value,
    date: new Date().toISOString().split('T')[0]
  };
  db.announcements.unshift(data);
  saveDB();
  closeModal('modal-announcement');
  renderAnnouncements();
  showToast('Announcement posted');
}

// ═══════════════════════════ UTILITIES ═══════════════════════════

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}

function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  toastMsg.textContent = msg;
  
  // Dynamic contrast styling for the premium feel
  const accentColor = type === 'success' ? '#10b981' : (type === 'danger' || type === 'error' ? '#ef4444' : 'var(--accent)');
  toast.style.borderLeft = `5px solid ${accentColor}`;
  toast.style.boxShadow = `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px ${accentColor}20`;
  
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3500);
}

function globalSearch(q) {
  if (q.length < 2) return;
  // Simple quick search implementation for demo
  console.log('Searching for:', q);
}

function filterStudents() { renderStudents(); }
function filterTeachers() { renderTeachers(); }

// ═══════════════════════════ SCHOOL SETTINGS ═══════════════════════════

function renderSchoolSettings() {
  if (!db.school) db.school = { name: "EduNexus Global Academy", academicYear: "2026-2027" };
  loadGeneralSettings();
}

function updateSettingsPreview() {
  // Deprecated alongside the old layout builder
}

function saveSchoolSettings() {
  db.school = {
    name:    document.getElementById('sch-name').value,
    tagline: document.getElementById('sch-tagline').value,
    contact: document.getElementById('sch-contact').value,
    email:   document.getElementById('sch-email').value,
    address: document.getElementById('sch-address').value
  };
  saveDB();
  updateBranding();
  showToast('School settings updated successfully');
}

// ─────────── LANDING PAGE EDITOR ───────────

function renderLandingEditor() {
  if (!db.landing) db.landing = DEFAULT_DATA.landing;
  const l = db.landing;
  const fields = [
    'lp-badge','lp-hero-headline','lp-hero-subtext','lp-cta-label',
    'lp-s1v','lp-s1l','lp-s2v','lp-s2l','lp-s3v','lp-s3l','lp-s4v','lp-s4l',
    'lp-p1i','lp-p1t','lp-p1d','lp-p2i','lp-p2t','lp-p2d','lp-p3i','lp-p3t','lp-p3d',
    'lp-fac-badge','lp-fac-headline','lp-fac-desc',
    'lp-f1','lp-f2','lp-f3','lp-f4'
  ];
  const keys = [
    'badge','heroHeadline','heroSubtext','ctaLabel',
    'stat1Val','stat1Lbl','stat2Val','stat2Lbl','stat3Val','stat3Lbl','stat4Val','stat4Lbl',
    'prog1Icon','prog1Title','prog1Desc','prog2Icon','prog2Title','prog2Desc','prog3Icon','prog3Title','prog3Desc',
    'facilBadge','facilHeadline','facilDesc',
    'facil1','facil2','facil3','facil4'
  ];
  fields.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.value = l[keys[i]] || '';
  });
  // Restore saved theme highlight
  selectLandingTheme(l.theme || 'academic', true);
}

function saveLandingSettings() {
  if (!db.landing) db.landing = {};
  const fieldMap = {
    badge:'lp-badge', heroHeadline:'lp-hero-headline', heroSubtext:'lp-hero-subtext', ctaLabel:'lp-cta-label',
    stat1Val:'lp-s1v', stat1Lbl:'lp-s1l', stat2Val:'lp-s2v', stat2Lbl:'lp-s2l',
    stat3Val:'lp-s3v', stat3Lbl:'lp-s3l', stat4Val:'lp-s4v', stat4Lbl:'lp-s4l',
    prog1Icon:'lp-p1i', prog1Title:'lp-p1t', prog1Desc:'lp-p1d',
    prog2Icon:'lp-p2i', prog2Title:'lp-p2t', prog2Desc:'lp-p2d',
    prog3Icon:'lp-p3i', prog3Title:'lp-p3t', prog3Desc:'lp-p3d',
    facilBadge:'lp-fac-badge', facilHeadline:'lp-fac-headline', facilDesc:'lp-fac-desc',
    facil1:'lp-f1', facil2:'lp-f2', facil3:'lp-f3', facil4:'lp-f4'
  };
  Object.entries(fieldMap).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el) db.landing[key] = el.value;
  });
  // Theme is already stored by selectLandingTheme
  saveDB();
  showToast('Landing page updated! Changes live at landing.html', 'success');
}

function selectLandingTheme(themeName, silent = false) {
  if (!db.landing) db.landing = {};
  db.landing.theme = themeName;
  
  // Update visual highlight on picker items
  document.querySelectorAll('#theme-picker .theme-item').forEach(item => {
    const isActive = item.dataset.theme === themeName;
    item.classList.toggle('active', isActive);
  });
  
  if (!silent) {
    showToast(`Theme: ${themeName}`, 'info');
    syncLandingPreview();
  }
}

// ── Live Preview Builder Logic ──
function syncLandingPreview() {
  const iframe = document.getElementById('landing-preview-iframe');
  if (!iframe) return;

  const settings = {
    badge: document.getElementById('lp-badge').value,
    heroHeadline: document.getElementById('lp-hero-headline').value,
    heroSubtext: document.getElementById('lp-hero-subtext').value,
    ctaLabel: document.getElementById('lp-cta-label').value,
    stat1Val: document.getElementById('lp-s1v').value,
    stat2Val: document.getElementById('lp-s2v').value,
    stat3Val: document.getElementById('lp-s3v').value,
    theme: db.landing?.theme || 'academic'
  };

  // Broadcast to Iframe
  iframe.contentWindow.postMessage({
    type: 'EDU_NEXUS_PREVIEW_SYNC',
    settings: settings
  }, '*');
}

function setPreviewSize(size) {
  const container = document.getElementById('preview-frame-container');
  const btns = document.querySelectorAll('.device-btn');
  
  // Update Buttons
  btns.forEach(btn => btn.classList.toggle('active', btn.id === 'dev-' + size));
  
  // Update Frame
  container.className = 'device-frame frame-' + size;
}

function switchSettingsTab(tab) {
  document.querySelectorAll('.settings-tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.settings-tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('stab-' + tab).classList.remove('hidden');
  document.querySelector('[data-stab="' + tab + '"]').classList.add('active');
}

// ═══════════════════════════ RUN ON LOAD ═══════════════════════════

document.addEventListener('DOMContentLoaded', initApp);

// ═══════════════════════════ MODAL UI HELPERS ═══════════════════════════

// ── Student Live Preview ──
const AVATAR_COLORS = {
  '9': '#6366f1', '10': '#0ea5e9', '11': '#10b981', '12': '#f59e0b', '': '#94a3b8'
};

function updateStudentPreview() {
  const fname = (document.getElementById('s-fname').value || '').trim();
  const lname = (document.getElementById('s-lname').value || '').trim();
  const roll  = document.getElementById('s-roll').value.trim();
  const cls   = document.getElementById('s-class').value;
  const sec   = document.getElementById('s-section').value;
  const gender= document.getElementById('s-gender').value;
  const blood = document.getElementById('s-blood').value;

  const initials = ((fname.charAt(0)) + (lname.charAt(0))).toUpperCase() || '?';
  const avColor  = AVATAR_COLORS[cls] || '#94a3b8';

  const av = document.getElementById('s-preview-avatar');
  av.textContent = initials;
  av.style.background = avColor;

  document.getElementById('s-preview-name').textContent  = (fname + ' ' + lname).trim() || 'New Student';
  document.getElementById('s-preview-roll').textContent  = roll ? 'Roll: ' + roll : 'Roll: —';
  document.getElementById('s-preview-class').textContent = cls  ? 'Class ' + cls + (sec ? '-' + sec : '') : 'Class —';
  document.getElementById('s-preview-class').style.background = avColor;
  document.getElementById('s-preview-gender').textContent = '👤 ' + (gender || '—');
  document.getElementById('s-preview-blood').textContent  = '🩸 ' + (blood  || '—');
}

// ── Teacher Banner Preview ──
function updateTeacherPreview() {
  const fname = (document.getElementById('t-fname').value || '').trim();
  const lname = (document.getElementById('t-lname').value || '').trim();
  const empid = document.getElementById('t-empid').value.trim();
  const initials = ((fname.charAt(0)) + (lname.charAt(0))).toUpperCase();

  const av = document.getElementById('t-preview-avatar');
  av.textContent = initials || '👩‍🏫';
  document.getElementById('t-preview-empid').textContent =
    empid ? 'EMP ID: ' + empid : 'Employee ID will be assigned';
}

// ── Teacher Class Checkboxes → hidden input ──
function updateTeacherClasses() {
  const checked = [...document.querySelectorAll('#modal-teacher .class-pill input:checked')]
    .map(cb => cb.value);
  document.getElementById('t-classes').value = checked.join(', ');
}

// ── Announcement Category Pill ──
function selectAnnCat(btn) {
  document.querySelectorAll('.ann-cat-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ann-category').value = btn.getAttribute('data-cat');
}

// ── Announcement Priority Pill ──
function selectAnnPriority(val) {
  document.querySelectorAll('.priority-pill').forEach(p => p.classList.remove('active-priority'));
  const el = document.getElementById('ppill-' + val);
  if (el) el.classList.add('active-priority');
  document.getElementById('ann-priority').value = val;
}

// ── Announcement Character Counter ──
function updateAnnCharCount(el) {
  const len = el.value.length;
  const counter = document.getElementById('ann-char-count');
  counter.textContent = len + ' / 500';
  counter.style.color = len > 450 ? '#ef4444' : len > 300 ? '#f59e0b' : 'var(--text-muted)';
  if (len > 500) el.value = el.value.slice(0, 500);
}

// ═══════════════════════════ CHANGE PASSWORD ═══════════════════════════

function openChangePassword() {
  document.getElementById('cp-current').value = '';
  document.getElementById('cp-new').value     = '';
  document.getElementById('cp-confirm').value = '';
  document.getElementById('cp-error').classList.add('hidden');
  document.getElementById('modal-change-password').classList.remove('hidden');
}

function savePassword() {
  if (!db.users) db.users = {};
  const current  = document.getElementById('cp-current').value;
  const newPwd   = document.getElementById('cp-new').value;
  const confirm  = document.getElementById('cp-confirm').value;
  const errEl    = document.getElementById('cp-error');
  const savedPwd = db.users[currentUser.email] || 'demo123';

  const showErr = (msg) => { errEl.textContent = msg; errEl.classList.remove('hidden'); };

  if (current !== savedPwd)    return showErr('Current password is incorrect.');
  if (newPwd.length < 6)      return showErr('New password must be at least 6 characters.');
  if (newPwd !== confirm)     return showErr('Passwords do not match.');

  db.users[currentUser.email] = newPwd;
  saveDB();
  closeModal('modal-change-password');
  showToast('Password updated successfully! 🔐');
}

// ═══════════════════════════ REPORT CARDS ═══════════════════════════

// Moved SUBJECTS to global scope at top of file

function getOrGenMarks(studentId, exam) {
  if (!db.marks) db.marks = {};
  if (!db.marks[exam]) db.marks[exam] = {};
  if (!db.marks[exam][studentId]) {
    // Generate stable marks seeded from studentId
    const seed = parseInt(studentId.replace(/\D/g, '')) || 1;
    db.marks[exam][studentId] = {};
    db.subjects.forEach((sub, i) => {
      // Logic for stable demo data
      db.marks[exam][studentId][sub] = Math.min(100, 55 + ((seed * (i + 3) * 17) % 45));
    });
    saveDB();
  }
  
  // Ensure all current subjects exist in the marks object (for newly added subjects)
  db.subjects.forEach(sub => {
    if (db.marks[exam][studentId][sub] === undefined) {
      db.marks[exam][studentId][sub] = 0;
    }
  });
  
  return db.marks[exam][studentId];
}

function getGrade(avg) {
  if (avg >= 90) return { g: 'A+', color: '#10b981' };
  if (avg >= 80) return { g: 'A',  color: '#3b82f6' };
  if (avg >= 70) return { g: 'B+', color: '#6366f1' };
  if (avg >= 60) return { g: 'B',  color: '#f59e0b' };
  if (avg >= 50) return { g: 'C',  color: '#f97316' };
  return         { g: 'F',  color: '#ef4444' };
}

function loadReportCardList() {
  const rcClass = document.getElementById('rc-class').value;
  const rcExam  = document.getElementById('rc-exam').value;
  const list    = document.getElementById('rc-list');

  // Scope: parent & student see only their own card
  let students = db.students.filter(s => s.class === rcClass);
  const linkedIds = currentUser.studentIds || [];
  if (currentUser.role === 'parent') {
    students = db.students.filter(s => linkedIds.includes(s.id));
  } else if (currentUser.role === 'student') {
    students = db.students.filter(s => s.id === currentUser.studentId);
  }

  if (students.length === 0) {
    list.innerHTML = `<div class="glass-card" style="padding:2rem;text-align:center;color:var(--text-muted);grid-column:1/-1">
      No students found for Class ${rcClass}.</div>`;
    return;
  }

  list.innerHTML = students.map(s => {
    const marks  = getOrGenMarks(s.id, rcExam);
    const total  = Object.values(marks).reduce((a, b) => a + b, 0);
    const subjectsCount = db.subjects.length;
    const avg    = total / subjectsCount;
    const { g, color } = getGrade(avg);
    const pct    = Math.round((total / (subjectsCount * MAX_MARKS)) * 100);

    return `
      <div class="glass-card" style="padding:0;overflow:hidden;transition:var(--transition)" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform=''">
        <div style="background:linear-gradient(135deg,var(--primary),var(--accent));padding:1.5rem;color:white;display:flex;align-items:center;justify-content:space-between">
          <div style="display:flex;align-items:center;gap:1rem">
            <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.25rem">${s.fname.charAt(0)}</div>
            <div>
              <div style="font-weight:700;font-size:1rem">${s.fname} ${s.lname}</div>
              <div style="opacity:0.8;font-size:0.8rem">Roll: ${s.roll} · Class ${s.class}-${s.section}</div>
            </div>
          </div>
          <div style="text-align:right">
            <div style="font-size:2rem;font-weight:800">${g}</div>
            <div style="opacity:0.8;font-size:0.75rem">${pct}%</div>
          </div>
        </div>
        <div style="padding:1.25rem">
          <div style="font-size:0.75rem;color:var(--text-muted);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:0.75rem">${rcExam} Examination</div>
          ${db.subjects.slice(0,3).map(sub => {
            const score = marks[sub];
            const pctBar = (score / MAX_MARKS) * 100;
            return `<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;font-size:0.8rem">
              <span style="width:90px;color:var(--text-muted);flex-shrink:0">${sub}</span>
              <div style="flex:1;height:6px;background:#f1f5f9;border-radius:3px"><div style="height:100%;width:${pctBar}%;background:var(--accent);border-radius:3px"></div></div>
              <span style="font-weight:700;min-width:28px;text-align:right">${score}</span>
            </div>`;
          }).join('')}
          <div style="text-align:right;margin-top:0.75rem;font-size:0.8rem;color:var(--text-muted)">+${db.subjects.length - 3} more subjects</div>
        </div>
        <div style="padding:0 1.25rem 1.25rem">
          <button class="btn-primary" style="width:100%;padding:0.65rem" onclick="viewReportCard('${s.id}', '${rcExam}')">
            View Full Report Card
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function viewReportCard(studentId, exam) {
  const s      = db.students.find(x => x.id === studentId);
  const school = db.school || DEFAULT_DATA.school;
  const marks  = getOrGenMarks(studentId, exam);
  const total  = Object.values(marks).reduce((a, b) => a + b, 0);
  const subjectsCount = db.subjects.length;
  const avg    = total / subjectsCount;
  const { g: grade, color: gColor } = getGrade(avg);
  const pct    = Math.round((total / (subjectsCount * MAX_MARKS)) * 100);

  // Get attendance %
  let present = 0, totalDays = 0;
  if (db.attendance) {
    Object.values(db.attendance).forEach(dayRec => {
      if (dayRec[studentId] !== undefined) { totalDays++; if (dayRec[studentId] === 'P') present++; }
    });
  }
  const attPct = totalDays > 0 ? Math.round((present / totalDays) * 100) : 95; // default for demo

  document.getElementById('report-card-body').innerHTML = `
    <div id="printable-rc" style="font-family:'Instrument Sans',sans-serif">
      <!-- Header -->
      <div style="text-align:center;padding-bottom:1.5rem;border-bottom:3px double var(--border-light);margin-bottom:1.5rem">
        <div style="font-size:1.75rem;font-weight:800;color:var(--primary);font-family:var(--font-serif)">${school.name}</div>
        <div style="color:var(--text-muted);font-size:0.875rem;margin-top:4px">${school.tagline}</div>
        <div style="margin-top:1rem;display:inline-block;padding:0.4rem 1.5rem;background:var(--primary);color:white;border-radius:30px;font-size:0.8rem;font-weight:700;letter-spacing:1px;text-transform:uppercase">
          ${exam} — Academic Report
        </div>
      </div>

      <!-- Student Info -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-bottom:1.5rem;background:#f8fafc;padding:1rem;border-radius:10px">
        <div><div style="font-size:0.7rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">Student Name</div><div style="font-weight:700;margin-top:3px">${s.fname} ${s.lname}</div></div>
        <div><div style="font-size:0.7rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">Roll Number</div><div style="font-weight:700;margin-top:3px">${s.roll}</div></div>
        <div><div style="font-size:0.7rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">Class & Section</div><div style="font-weight:700;margin-top:3px">${s.class} — ${s.section}</div></div>
        <div><div style="font-size:0.7rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">Date of Birth</div><div style="font-weight:700;margin-top:3px">${s.dob || '—'}</div></div>
        <div><div style="font-size:0.7rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">Academic Year</div><div style="font-weight:700;margin-top:3px">2025–2026</div></div>
        <div><div style="font-size:0.7rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">Attendance</div><div style="font-weight:700;margin-top:3px;color:${attPct >= 75 ? '#10b981' : '#ef4444'}">${attPct}%</div></div>
      </div>

      <!-- Marks Table -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:1.5rem">
        <thead>
          <tr style="background:var(--primary);color:white">
            <th style="padding:0.75rem 1rem;text-align:left;font-size:0.8rem">Subject</th>
            <th style="padding:0.75rem 1rem;text-align:center;font-size:0.8rem">Max Marks</th>
            <th style="padding:0.75rem 1rem;text-align:center;font-size:0.8rem">Marks Obtained</th>
            <th style="padding:0.75rem 1rem;text-align:center;font-size:0.8rem">Grade</th>
            <th style="padding:0.75rem 1rem;text-align:center;font-size:0.8rem">Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${db.subjects.map((sub, i) => {
            const sc   = marks[sub];
            const { g: subGrade, color: sc$ } = getGrade(sc);
            const remark = sc >= 80 ? 'Excellent' : sc >= 65 ? 'Good' : sc >= 50 ? 'Average' : 'Needs Improvement';
            return `<tr style="background:${i % 2 === 0 ? '#f8fafc' : 'white'};border-bottom:1px solid var(--border-light)">
              <td style="padding:0.75rem 1rem;font-weight:600">${sub}</td>
              <td style="padding:0.75rem 1rem;text-align:center;color:var(--text-muted)">${MAX_MARKS}</td>
              <td style="padding:0.75rem 1rem;text-align:center;font-weight:700;font-size:1.05rem">${sc}</td>
              <td style="padding:0.75rem 1rem;text-align:center"><span style="background:${sc$}22;color:${sc$};padding:3px 10px;border-radius:20px;font-weight:700;font-size:0.8rem">${subGrade}</span></td>
              <td style="padding:0.75rem 1rem;text-align:center;font-size:0.85rem;color:var(--text-muted)">${remark}</td>
            </tr>`;
          }).join('')}
          <tr style="background:var(--primary);color:white;font-weight:700">
            <td style="padding:0.85rem 1rem">TOTAL</td>
            <td style="padding:0.85rem 1rem;text-align:center">${db.subjects.length * MAX_MARKS}</td>
            <td style="padding:0.85rem 1rem;text-align:center;font-size:1.1rem">${total}</td>
            <td style="padding:0.85rem 1rem;text-align:center"><span style="background:rgba(255,255,255,0.2);padding:3px 10px;border-radius:20px">${grade}</span></td>
            <td style="padding:0.85rem 1rem;text-align:center">${pct}% Overall</td>
          </tr>
        </tbody>
      </table>

      <!-- Footer signatures -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--border-light)">
        <div style="text-align:center">
          <div style="height:40px;border-bottom:1px solid #cbd5e1;margin-bottom:8px"></div>
          <div style="font-size:0.75rem;color:var(--text-muted);font-weight:700">Class Teacher</div>
        </div>
        <div style="text-align:center">
          <div style="height:40px;border-bottom:1px solid #cbd5e1;margin-bottom:8px"></div>
          <div style="font-size:0.75rem;color:var(--text-muted);font-weight:700">Principal</div>
        </div>
        <div style="text-align:center">
          <div style="height:40px;border-bottom:1px solid #cbd5e1;margin-bottom:8px"></div>
          <div style="font-size:0.75rem;color:var(--text-muted);font-weight:700">Parent / Guardian</div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('modal-report-card').classList.remove('hidden');
}

function printReportCard() {
  const content = document.getElementById('printable-rc').innerHTML;
  const win = window.open('', '_blank');
  win.document.write(`
    <html><head><title>Report Card</title>
    <link rel="stylesheet" href="style.css">
    <style>
      body { font-family: 'Instrument Sans', sans-serif; padding: 2.5rem; color: #1e293b; }
      @media print { @page { margin: 1.5cm; } }
    </style></head>
    <body onload="window.print();window.close()">${content}</body></html>
  `);
  win.document.close();
}

// ═══════════════════════════ SUBJECT MANAGEMENT (ADMIN) ═══════════════════════════

function renderSubjectManager() {
  const container = document.getElementById('subject-manager-list');
  if (!container) return;

  container.innerHTML = db.subjects.map((sub, i) => `
    <div class="subject-tag">
      <span>${sub}</span>
      <div class="remove-subject-btn" onclick="removeSubject(${i})">&times;</div>
    </div>
  `).join('');
}

function addSubject() {
  const input = document.getElementById('new-subject-name');
  const name = input.value.trim();
  
  if (!name) return;
  if (db.subjects.includes(name)) {
    showToast('Subject already exists!', 'error');
    return;
  }

  db.subjects.push(name);
  saveDB();
  input.value = '';
  renderSubjectManager();
  showToast(`${name} added to curriculum! 📚`);
  
  // Refresh relevant views
  if (document.getElementById('section-timetable').classList.contains('active')) renderTimetable();
  if (document.getElementById('section-marks').classList.contains('active')) loadMarks();
}

function removeSubject(index) {
  const name = db.subjects[index];
  if (confirm(`Are you sure you want to remove "${name}"? This will not delete existing marks but will hide them from current views.`)) {
    db.subjects.splice(index, 1);
    saveDB();
    renderSubjectManager();
    showToast(`${name} removed from curriculum.`);
    
    // Refresh relevant views
    if (document.getElementById('section-timetable').classList.contains('active')) renderTimetable();
    if (document.getElementById('section-marks').classList.contains('active')) loadMarks();
  }
}

// ═══════════════════════════ LIBRARY LOGIC ═══════════════════════════

let libCurrentTab = 'all';

function renderLibrary() {
  const grid = document.getElementById('library-grid');
  const totalEl = document.getElementById('lib-stat-total');
  const issuedEl = document.getElementById('lib-stat-issued');
  const searchVal = (document.getElementById('library-search')?.value || '').toLowerCase();
  
  if (!grid) return;

  // Update Stats
  totalEl.textContent = db.books.reduce((acc, b) => acc + b.total, 0);
  issuedEl.textContent = db.libTransactions.filter(t => t.status === 'issued' || t.status === 'overdue').length;

  // Filter Data
  let filtered = db.books.filter(b => 
    b.title.toLowerCase().includes(searchVal) || 
    b.author.toLowerCase().includes(searchVal) || 
    b.isbn.toLowerCase().includes(searchVal)
  );

  if (libCurrentTab === 'my') {
    const myBookIds = db.libTransactions
      .filter(t => t.userId === currentUser.id && (t.status === 'issued' || t.status === 'overdue'))
      .map(t => t.bookId);
    filtered = filtered.filter(b => myBookIds.includes(b.id));
  } else if (libCurrentTab === 'issued') {
    const issuedBookIds = db.libTransactions
      .filter(t => t.status === 'issued' || t.status === 'overdue')
      .map(t => t.bookId);
    filtered = filtered.filter(b => issuedBookIds.includes(b.id));
  }

  // Render Grid or Table
  if (libCurrentTab === 'all') {
    grid.innerHTML = filtered.length > 0 
      ? filtered.map(b => renderBookCard(b)).join('') 
      : renderEmptyState('No books found in the catalog.');
  } else {
    // Render Transactions Table for 'issued' or 'my'
    let transactions = db.libTransactions;
    if (libCurrentTab === 'my') {
      transactions = transactions.filter(t => t.userId === currentUser.id);
    } else if (libCurrentTab === 'issued') {
      transactions = transactions.filter(t => t.status === 'issued' || t.status === 'overdue');
    }
    
    // Sort by date (newest first)
    transactions.sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate));

    grid.innerHTML = renderTransactionTable(transactions);
  }

  // Librarian visibility for "Add Book"
  const adminActions = document.getElementById('library-admin-actions');
  if (adminActions) adminActions.style.display = currentUser.role === 'librarian' ? 'block' : 'none';
  
  // Tab roles
  document.querySelectorAll('.tab-pill[data-roles]').forEach(tab => {
    const roles = tab.getAttribute('data-roles').split(',');
    tab.style.display = roles.includes(currentUser.role) ? 'block' : 'none';
  });
}

function renderEmptyState(msg) {
  return `<div style="grid-column:1/-1;text-align:center;padding:4rem 2rem;color:var(--text-muted)">
    <div style="font-size:3.5rem;margin-bottom:1rem;opacity:0.2">📚</div>
    <p style="font-weight:600">${msg}</p>
  </div>`;
}

function renderTransactionTable(transactions) {
  if (transactions.length === 0) return renderEmptyState('No transactions found in this category.');

  const isMyView = libCurrentTab === 'my';

  return `
    <div style="grid-column: 1/-1; background:white; border-radius:16px; border:1px solid var(--border-light); overflow:hidden">
      <table class="table" style="margin:0">
        <thead>
          <tr>
            <th>Book Title</th>
            ${!isMyView ? '<th>User</th>' : ''}
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${transactions.map(t => {
            const isOverdue = t.status !== 'returned' && new Date(t.dueDate) < new Date();
            const statusLabel = t.status === 'returned' ? 'Returned' : (isOverdue ? 'Overdue' : 'Issued');
            const statusClass = t.status === 'returned' ? 'success' : (isOverdue ? 'danger' : 'accent');
            
            return `
              <tr style="${isOverdue ? 'background:rgba(239,68,68,0.02)' : ''}">
                <td>
                  <div style="font-weight:700; color:var(--text-dark)">${t.bookTitle}</div>
                  <div style="font-size:0.7rem; color:var(--text-muted)">ID: ${t.bookId}</div>
                </td>
                ${!isMyView ? `<td>
                  <div style="font-weight:600">${t.userName}</div>
                  <div style="font-size:0.65rem; color:var(--text-muted); text-transform:uppercase">${t.role}</div>
                </td>` : ''}
                <td>${t.issueDate}</td>
                <td style="${isOverdue ? 'color:var(--danger); font-weight:700' : ''}">${t.dueDate}</td>
                <td><span class="badge badge-${statusClass}">${statusLabel}</span></td>
                <td>
                  ${(currentUser.role === 'librarian' && t.status !== 'returned') 
                    ? `<button class="btn-primary-outline" onclick="returnBook('${t.id}')" style="padding:0.4rem 1rem; font-size:0.75rem">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px;height:14px"><path d="M15 10l-5 5 5 5"></path><path d="M4 4v7a4 4 0 0 0 4 4h12"></path></svg>
                        Return
                       </button>` 
                    : (t.status === 'returned' ? `<span style="font-size:0.75rem; color:var(--success); font-weight:700">Done</span>` : `<button class="btn-secondary" disabled style="padding:0.4rem 1rem; font-size:0.75rem; opacity:0.6">Active</button>`)
                  }
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderBookCard(book) {
  const isAvailable = book.available > 0;
  const statusClass = book.available === 0 ? 'out' : (book.available < 2 ? 'low' : 'available');
  const statusLabel = book.available === 0 ? 'Out of Stock' : (book.available < 2 ? 'Low Stock' : 'Available');

  return `
    <div class="book-card">
      <div class="book-inner">
        <div class="book-cover-sim" style="background:linear-gradient(135deg, ${book.color || 'var(--primary)'}, var(--secondary))">
          <div class="book-cover-sim-icon">📖</div>
        </div>
        <div class="book-title-overlay">
          <h4>${book.title}</h4>
          <p class="book-author">by ${book.author}</p>
          <div class="book-meta">
            <span class="status-badge ${statusClass}">${statusLabel}</span>
            <span>${book.available}/${book.total} Copies</span>
          </div>
        </div>
        <div class="book-actions">
          ${currentUser.role === 'librarian' 
            ? `<button class="btn-primary-outline" onclick="openIssueModal('${book.id}')" style="padding:0.4rem; font-size:0.75rem">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px;height:14px"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Issue
               </button>`
            : (isAvailable ? `<button class="btn-primary-outline" onclick="showToast('Visit library to borrow this book','info')" style="padding:0.4rem; font-size:0.75rem">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px;height:14px"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                Inquire
               </button>` : `<button class="btn-secondary" disabled style="padding:0.4rem; font-size:0.75rem; opacity:0.6">Waitlist</button>`)
          }
          ${currentUser.role === 'librarian' ? `<button class="btn-secondary" onclick="editBook('${book.id}')" style="padding:0.4rem; font-size:0.75rem">Edit</button>` : ''}
        </div>
      </div>
    </div>
  `;
}

function filterLibrary() {
  renderLibrary();
}

function switchLibTab(tab) {
  libCurrentTab = tab;
  document.querySelectorAll('.tab-pill').forEach(btn => {
    // Check if the text matches the tab label or use data-tab if we added it
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${tab}'`));
  });
  renderLibrary();
}

function openAddBookModal(id = null) {
  const modal = document.getElementById('modal-book');
  const title = document.getElementById('modal-book-title');
  const form = document.getElementById('form-book');
  
  form.reset();
  document.getElementById('b-id').value = '';
  
  if (id) {
    const book = db.books.find(b => b.id === id);
    if (book) {
      title.textContent = 'Edit Book';
      document.getElementById('b-id').value = book.id;
      document.getElementById('b-title').value = book.title;
      document.getElementById('b-author').value = book.author;
      document.getElementById('b-category').value = book.category;
      document.getElementById('b-total').value = book.total;
      document.getElementById('b-isbn').value = book.isbn || '';
    }
  } else {
    title.textContent = 'Add New Book';
  }
  
  openModal('modal-book');
}

function saveBook(e) {
  e.preventDefault();
  const id = document.getElementById('b-id').value;
  const title = document.getElementById('b-title').value;
  const author = document.getElementById('b-author').value;
  const category = document.getElementById('b-category').value;
  const total = parseInt(document.getElementById('b-total').value);
  const isbn = document.getElementById('b-isbn').value;
  
  if (id) {
    const book = db.books.find(b => b.id === id);
    if (book) {
      const issued = book.total - book.available;
      if (total < issued) {
        showToast(`Cannot reduce total below issued count (${issued})`, 'danger');
        return;
      }
      book.title = title;
      book.author = author;
      book.category = category;
      book.available = total - issued;
      book.total = total;
      book.isbn = isbn;
    }
  } else {
    const newBook = {
      id: 'b' + Date.now(),
      title, author, category, total, available: total, isbn,
      color: '#' + Math.floor(Math.random()*16777215).toString(16)
    };
    db.books.push(newBook);
  }
  
  saveDB();
  closeModal('modal-book');
  renderLibrary();
  showToast('Library updated successfully');
}

function openIssueModal(id) {
  const book = db.books.find(b => b.id === id);
  if (!book || book.available <= 0) {
    showToast('Book not available for issuance', 'warning');
    return;
  }
  
  document.getElementById('issue-book-id').value = book.id;
  document.getElementById('issue-book-name').textContent = `Issuing: ${book.title}`;
  
  const userSelect = document.getElementById('issue-user-id');
  const users = [
    ...db.students.map(s => ({ id: s.id, name: `${s.fname} ${s.lname} (Student)`, role: 'student' })),
    ...db.teachers.map(t => ({ id: t.id, name: `${t.fname} ${t.lname} (Teacher)`, role: 'teacher' }))
  ];
  
  userSelect.innerHTML = users.map(u => `<option value="${u.id}" data-role="${u.role}" data-name="${u.name}">${u.name}</option>`).join('');
  
  // Default due date: 14 days from now
  const due = new Date();
  due.setDate(due.getDate() + 14);
  document.getElementById('issue-due-date').value = due.toISOString().split('T')[0];
  
  openModal('modal-issue-book');
}

function issueBook(e) {
  e.preventDefault();
  const bookId = document.getElementById('issue-book-id').value;
  const userId = document.getElementById('issue-user-id').value;
  const dueDate = document.getElementById('issue-due-date').value;
  
  const selectedOption = document.querySelector(`#issue-user-id option[value="${userId}"]`);
  const userName = selectedOption.getAttribute('data-name');
  const role = selectedOption.getAttribute('data-role');
  
  const book = db.books.find(b => b.id === bookId);
  if (book && book.available > 0) {
    const transaction = {
      id: 'tr' + Date.now(),
      bookId, bookTitle: book.title, userId, userName, role,
      issueDate: new Date().toISOString().split('T')[0],
      dueDate, status: 'issued', fine: 0
    };
    
    db.libTransactions.push(transaction);
    book.available--;
    saveDB();
    closeModal('modal-issue-book');
    renderLibrary();
    showToast(`Issued to ${userName}`);
  }
}

function returnBook(trId) {
  const tr = db.libTransactions.find(t => t.id === trId);
  if (tr && tr.status !== 'returned') {
    const book = db.books.find(b => b.id === tr.bookId);
    if (book) book.available++;
    
    tr.status = 'returned';
    tr.returnDate = new Date().toISOString().split('T')[0];
    saveDB();
    renderLibrary();
    showToast('Book returned successfully');
  }
}

function editBook(id) {
  openAddBookModal(id);
}

// Initialize App on Load
initApp();

// Global click handler for dropdowns
window.addEventListener('click', (e) => {
  if (!e.target.closest('#notif-bell')) {
    document.getElementById('notif-dropdown')?.classList.remove('active');
  }
});
function loadMarks() {
  const marksClass = document.getElementById('marks-class').value;
  const marksExam  = document.getElementById('marks-exam').value;
  const thead      = document.getElementById('marks-thead');
  const tbody      = document.getElementById('marks-tbody');
  const saveBtn    = document.getElementById('btn-save-marks');

  if (!thead || !tbody) return;

  // Permission check
  const isStaff = currentUser.role === 'admin' || currentUser.role === 'teacher';
  if (saveBtn) {
    if (isStaff) saveBtn.classList.remove('hidden');
    else saveBtn.classList.add('hidden');
  }

  // Role-based filtering
  const isParent = currentUser.role === 'parent';
  const isStudent = currentUser.role === 'student';
  const linkedIds = currentUser.studentIds || [];
  let students = db.students.filter(s => s.class === marksClass);
  
  if (isParent || isStudent) {
    students = students.filter(s => linkedIds.includes(s.id));
    // Auto-select class for parent/student primary child
    const firstChild = db.students.find(s => linkedIds.includes(s.id));
    if (firstChild && document.getElementById('marks-class').value !== firstChild.class) {
      document.getElementById('marks-class').value = firstChild.class;
      loadMarks();
      return;
    }
  }

  // Render Header
  thead.innerHTML = `
    <tr>
      <th style="width:250px">Student</th>
      ${db.subjects.map(s => `<th style="text-align:center">${s}</th>`).join('')}
      <th style="text-align:center">Average</th>
      <th style="text-align:center">Grade</th>
    </tr>
  `;

  // Render Body
  if (students.length === 0) {
    tbody.innerHTML = `<tr><td colspan="${db.subjects.length + 3}" style="text-align:center; padding:4rem; color:var(--on-surface-variant)">No matching institutional records found.</td></tr>`;
    return;
  }

  tbody.innerHTML = students.map(s => {
    const marksData = getOrGenMarks(s.id, marksExam);
    const scores = db.subjects.map(sub => marksData[sub] || 0);
    const total  = scores.reduce((a, b) => a + b, 0);
    const avg    = total / db.subjects.length;
    const grade  = getGrade(avg);

    return `
      <tr>
        <td style="font-weight:700">
          <div style="display:flex; align-items:center; gap:0.75rem">
            <div class="avatar" style="width:32px; height:32px; font-size:0.75rem">
              ${s.fname.charAt(0)}${s.lname.charAt(0)}
            </div>
            <div>
              <div style="color:var(--primary); font-size:0.9rem">${s.fname} ${s.lname}</div>
              <div style="font-size:0.65rem; color:var(--on-surface-variant); opacity:0.7">${s.roll}</div>
            </div>
          </div>
        </td>
        ${db.subjects.map(sub => `
          <td style="text-align:center">
            ${isStaff 
              ? `<input type="number" class="marks-input" 
                  data-sid="${s.id}" data-sub="${sub}" data-exam="${marksExam}" 
                  value="${marksData[sub] || 0}" min="0" max="${MAX_MARKS}">`
              : `<span style="font-weight:700; color:var(--primary)">${marksData[sub] || 0}</span>`
            }
          </td>
        `).join('')}
        <td style="text-align:center">
          <div style="font-weight:800; color:var(--primary); font-size:1rem">${Math.round(avg)}%</div>
          <div style="font-size:0.65rem; color:var(--on-surface-variant); opacity:0.6">${total}/${db.subjects.length * MAX_MARKS}</div>
        </td>
        <td style="text-align:center">
          <span class="grade-badge grade-${grade.g.charAt(0)}">
            ${grade.g}
          </span>
        </td>
      </tr>
    `;
  }).join('');
}

function saveMarksFromUI() {
  const inputs = document.querySelectorAll('.marks-input');
  if (inputs.length === 0) return;

  inputs.forEach(input => {
    const sid  = input.getAttribute('data-sid');
    const sub  = input.getAttribute('data-sub');
    const exam = input.getAttribute('data-exam');
    const val  = parseInt(input.value) || 0;

    if (!db.marks[exam]) db.marks[exam] = {};
    if (!db.marks[exam][sid]) db.marks[exam][sid] = {};
    
    db.marks[exam][sid][sub] = Math.min(MAX_MARKS, Math.max(0, val));
  });

  saveDB();
  showToast('Academic results successfully committed to record! 🎓');
  loadMarks(); // Refresh UI to update averages/grades
  initCharts(); // Update dashboard charts
}

// ═══════════════════════════ ADMISSIONS LOGIC ═══════════════════════════

function renderEnquiries() {
  const list = document.getElementById('enquiries-list');
  if (!list) return;

  const enquiries = db.enquiries || [];
  if (enquiries.length === 0) {
    list.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:3rem; opacity:0.6">No institutional leads found from the landing page.</td></tr>';
    return;
  }

  // Sort by date desc
  const sorted = [...enquiries].sort((a, b) => new Date(b.date) - new Date(a.date));

  list.innerHTML = sorted.map(e => {
    const score = parseInt(e.score) || 0;
    let scoreStyles = '';
    if (score >= 90) scoreStyles = 'color:#b45309; font-weight:800; background:#fef3c7; padding:4px 10px; border-radius:12px; border:1px solid #fcd34d; box-shadow:0 2px 4px rgba(180,83,9,0.1);';
    else if (score >= 80) scoreStyles = 'color:#15803d; font-weight:700; background:#dcfce7; padding:4px 10px; border-radius:12px; border:1px solid #86efac;';
    else scoreStyles = 'color:#64748b; font-weight:600; padding:4px 10px; background:var(--surface-variant); border-radius:12px;';

    return `
      <tr>
        <td style="font-size:0.8rem; opacity:0.7">${new Date(e.date).toLocaleDateString()}</td>
        <td>
          <div style="font-weight:700; color:var(--primary)">${e.studentName}</div>
          <div style="font-size:0.7rem; text-transform:capitalize; opacity:0.6">${e.gender || 'Not specified'} • Class ${e.class}</div>
        </td>
        <td>
          <div style="font-size:0.9rem; font-weight:500">${e.parentName}</div>
          <div style="font-size:0.8rem; color:var(--primary); opacity:0.8">${e.phone}</div>
        </td>
        <td style="text-align:center">
          <span style="display:inline-block; min-width:60px; ${scoreStyles}">${score}%</span>
        </td>
        <td>
          <div style="font-size:0.85rem; font-weight:600; color:var(--on-surface)">${e.prevSchool || 'N/A'}</div>
          <div style="font-size:0.75rem; color:var(--accent); font-style:italic; max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis" title="${e.talent || ''}">${e.talent || 'General Candidate'}</div>
        </td>
        <td><span class="status-badge status-${e.status}">${e.status}</span></td>
        <td>
        <div style="display:flex; gap:0.5rem">
          ${e.status === 'pending' ? `
            <button class="btn-icon" title="Mark as Contacted" onclick="updateEnquiryStatus(${e.id}, 'contacted')" style="background:var(--primary-container); color:var(--primary)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </button>
          ` : ''}
          ${e.status === 'contacted' ? `
            <button class="btn-icon" title="Mark as Enrolled" onclick="updateEnquiryStatus(${e.id}, 'enrolled')" style="background:var(--success-container); color:var(--success)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </button>
          ` : ''}
          <button class="btn-icon" title="Delete Lead" onclick="deleteEnquiry(${e.id})" style="background:var(--error-container); color:var(--error)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </button>
        </div>
      </td>
    </tr>
    `;
  }).join('');
}

function updateEnquiryStatus(id, status) {
  const idx = db.enquiries.findIndex(e => e.id === id);
  if (idx === -1) return;
  
  db.enquiries[idx].status = status;
  saveDB();
  renderEnquiries();
  showToast(`Enquiry updated to ${status}`, "success");
}

function deleteEnquiry(id) {
  if (!confirm("Are you sure you want to delete this institutional lead?")) return;
  db.enquiries = db.enquiries.filter(e => e.id !== id);
  saveDB();
  renderEnquiries();
  showToast("Lead deleted successfully", "info");
}

function checkNewEnquiries() {
  if (currentUser.role !== 'admin') return;
  
  const pending = (db.enquiries || []).filter(e => e.status === 'pending');
  if (pending.length > 0) {
    const text = `You have ${pending.length} pending admission enquiry lead${pending.length > 1 ? 's' : ''}.`;
    
    // Check if we already notified about this in this session
    const lastNotifiedCount = sessionStorage.getItem('lastEnquiryNotifCount');
    if (lastNotifiedCount != pending.length) {
      if (!db.notifs) db.notifs = [];
      db.notifs.unshift({
        id: Date.now(),
        text: text,
        read: false,
        type: 'admissions'
      });
      saveDB();
      renderNotifs();
      sessionStorage.setItem('lastEnquiryNotifCount', pending.length);
    }
  }
}

// ═══════════════════════════ SETTINGS & DATA MANAGEMENT ═══════════════════════════

function saveGeneralSettings() {
  if (!db.school) db.school = {};
  db.school.name = document.getElementById('setting-school-name').value;
  db.school.academicYear = document.getElementById('setting-academic-year').value;
  saveDB();
  showToast("School configuration saved successfully.", "success");
}

function loadGeneralSettings() {
  if (db.school) {
    if (db.school.name) document.getElementById('setting-school-name').value = db.school.name;
    if (db.school.academicYear) document.getElementById('setting-academic-year').value = db.school.academicYear;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(loadGeneralSettings, 200); // Load after DB init
});

function exportDatabase() {
  const dataStr = JSON.stringify(db, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  const dateStr = new Date().toISOString().split('T')[0];
  a.download = `EduNexus_Backup_${dateStr}.json`;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showToast("Database exported successfully.", "success");
}

let pendingImportData = null;

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  document.getElementById('import-file-name').innerText = file.name;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      pendingImportData = JSON.parse(e.target.result);
      if (!pendingImportData.students && !pendingImportData.teachers) {
          throw new Error("Invalid EduNexus format");
      }
      const btn = document.getElementById('btn-import-confirm');
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.style.cursor = 'pointer';
    } catch (err) {
      showToast("Invalid JSON backup file.", "error");
      document.getElementById('import-file-name').innerText = "Parse Error! Please select a valid backup.";
      pendingImportData = null;
    }
  };
  reader.readAsText(file);
}

function importDatabase() {
  if (!pendingImportData) {
    showToast("Please select a valid backup file first.", "error");
    return;
  }
  
  const mode = document.querySelector('input[name="restore-mode"]:checked').value;
  
  if (mode === 'overwrite') {
    if (!confirm("STRICT OVERWRITE: This will destroy your current database and replace it entirely with the backup file. Are you absolutely sure?")) {
      return;
    }
    db = pendingImportData;
  } else {
    // Mode MERGE
    if (!confirm("MERGE MODE: This will append missing records from the backup to your current database. Proceed?")) {
      return;
    }
    // Deep merge core arrays by ID to prevent duplicates
    const mergeArrays = (targetArr, sourceArr) => {
      sourceArr.forEach(sourceItem => {
        if (!sourceItem.id) return;
        const existsMsg = targetArr.findIndex(t => t.id === sourceItem.id);
        if (existsMsg === -1) {
          targetArr.push(sourceItem);
        } else {
          // Overwrite existing fields but keep object identical
          Object.assign(targetArr[existsMsg], sourceItem);
        }
      });
    };

    if (pendingImportData.students) mergeArrays(db.students, pendingImportData.students);
    if (pendingImportData.teachers) mergeArrays(db.teachers, pendingImportData.teachers);
    if (pendingImportData.classes) mergeArrays(db.classes, pendingImportData.classes);
    if (pendingImportData.subjects) mergeArrays(db.subjects, pendingImportData.subjects);
    if (pendingImportData.enquiries) mergeArrays(db.enquiries, pendingImportData.enquiries);
    if (pendingImportData.books) mergeArrays(db.books, pendingImportData.books);
    
    // Copy school settings if missing
    if (pendingImportData.school && !db.school) {
      db.school = pendingImportData.school;
    }
  }

  saveDB();
  alert("Database restoration successful! The system will now reload.");
  location.reload();
}

function factoryReset() {
  const check = prompt("WARNING: You are about to wipe all data permanently.\n\nType 'CONFIRM' below to process the factory reset.");
  if (check === "CONFIRM") {
    localStorage.removeItem("eduNexusDB");
    alert("System factory reset complete. Reloading...");
    location.reload();
  } else {
    showToast("Factory reset aborted.", "info");
  }
}
