export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'technology', label: 'Technology' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'contact', label: 'Contact' },
];

export const INITIAL_DEMO_IDEAS = [
  {
    id: 101,
    title: 'Campus Surplus Meal Connector',
    domain: 'Sustainability',
    summary: 'Connects campus dining halls with student organizations to redistribute unserved daily meals.',
    status: 'Validated',
  },
  {
    id: 102,
    title: 'Neighborhood Clinic Queue Sync',
    domain: 'Healthcare Access',
    summary: 'Provides live walk-in wait visibility and digital check-in for local outpatient clinics.',
    status: 'Validated',
  },
  {
    id: 103,
    title: 'Modular Lab Equipment Share',
    domain: 'EdTech & Research',
    summary: 'Allows university departments to schedule and share underutilized lab instruments.',
    status: 'Pending Review',
  },
  {
    id: 104,
    title: 'Local Artisan Supply Ledger',
    domain: 'Commerce',
    summary: 'Helps small craft workshops coordinate raw-material group orders across regional suppliers.',
    status: 'Submitted',
  },
];

export const OVERVIEW_SPECS = [
  { label: 'Project Type', value: 'Full-Stack Web Application' },
  { label: 'Frontend', value: 'React' },
  { label: 'Backend', value: 'Spring Boot' },
  { label: 'Database', value: 'MySQL' },
  { label: 'API', value: 'REST' },
];

export const PROBLEM_POINTS = [
  'Ideas can become difficult to organize.',
  'Startup concepts need a structured submission process.',
  'Idea management should be centralized.',
  'Validation status should be easy to identify.',
  'Users need a clear way to access submitted ideas.',
];

export const SOLUTION_FLOW = [
  {
    step: '01',
    title: 'Submit Idea',
    detail: 'Capture structured concept details through the React submission form.',
  },
  {
    step: '02',
    title: 'Store Idea',
    detail: 'Persist records reliably into MySQL via the Spring Boot backend.',
  },
  {
    step: '03',
    title: 'Retrieve Ideas',
    detail: 'Fetch organized idea lists through dedicated REST API endpoints.',
  },
  {
    step: '04',
    title: 'Manage Ideas',
    detail: 'Review records, update states, or remove outdated entries by ID.',
  },
  {
    step: '05',
    title: 'View Validated Ideas',
    detail: 'Surface validated startup concepts through a focused endpoint and view.',
  },
];

export const FEATURES = [
  {
    id: 'submission',
    title: 'Idea Submission',
    description: 'Users can submit new startup ideas through the application using a structured input workflow.',
    tag: 'Frontend + POST',
  },
  {
    id: 'management',
    title: 'Idea Management',
    description: 'The application provides functionality for retrieving and managing submitted startup ideas.',
    tag: 'CRUD Lifecycle',
  },
  {
    id: 'listing',
    title: 'Idea Listing',
    description: 'Users can view available startup ideas through an organized, scannable frontend interface.',
    tag: 'Directory View',
  },
  {
    id: 'validated',
    title: 'Validated Ideas',
    description: 'The platform provides a dedicated endpoint and interface for accessing validated startup ideas.',
    tag: 'Filtered Endpoint',
  },
  {
    id: 'rest-api',
    title: 'REST API Architecture',
    description: 'The backend exposes clean REST APIs to connect the React frontend with core application functionality.',
    tag: 'Spring Boot Web',
  },
  {
    id: 'responsive',
    title: 'Responsive Interface',
    description: 'The frontend is designed to provide an organized user experience across desktop, tablet, and mobile devices.',
    tag: 'Adaptive Layout',
  },
  {
    id: 'integration',
    title: 'Full-Stack Integration',
    description: 'The React client communicates seamlessly with Spring Boot REST controllers backed by MySQL storage.',
    tag: 'End-to-End Flow',
  },
];

export const FRONTEND_CAPABILITIES = [
  'React-based interface',
  'Idea submission form',
  'Idea listing interface',
  'Responsive design',
  'API integration',
  'Validation status display',
  'Organized user experience',
];

export const BACKEND_COMPONENTS = [
  {
    title: 'Spring Boot Application',
    detail: 'Entry point and auto-configured application context powering the REST service.',
  },
  {
    title: 'REST Controllers',
    detail: 'Maps HTTP routes under /api/ideas to structured request handlers.',
  },
  {
    title: 'Service Layer',
    detail: 'Encapsulates business logic for idea submission, filtering, and lifecycle management.',
  },
  {
    title: 'Data Access Layer',
    detail: 'Repository interface abstracting persistence operations and queries.',
  },
  {
    title: 'Database Integration',
    detail: 'Connects cleanly to MySQL for structured storage and retrieval of startup ideas.',
  },
  {
    title: 'API Endpoints',
    detail: 'Exposes JSON endpoints consumed directly by the React frontend.',
  },
];

export const API_ENDPOINTS = [
  {
    id: 'create-idea',
    method: 'POST',
    path: '/api/ideas',
    title: 'Add Idea',
    purpose: 'Submit a new startup idea.',
    requestExample: `{
  "title": "Campus Surplus Meal Connector",
  "category": "Sustainability",
  "description": "Redistribute unserved campus dining meals to student groups.",
  "validated": false
}`,
    responseExample: `{
  "id": 101,
  "title": "Campus Surplus Meal Connector",
  "category": "Sustainability",
  "description": "Redistribute unserved campus dining meals to student groups.",
  "validated": false
}`,
  },
  {
    id: 'get-all-ideas',
    method: 'GET',
    path: '/api/ideas',
    title: 'Get All Ideas',
    purpose: 'Retrieve all submitted startup ideas.',
    requestExample: null,
    responseExample: `[
  {
    "id": 101,
    "title": "Campus Surplus Meal Connector",
    "validated": true
  },
  {
    "id": 103,
    "title": "Modular Lab Equipment Share",
    "validated": false
  }
]`,
  },
  {
    id: 'delete-idea',
    method: 'DELETE',
    path: '/api/ideas/{id}',
    title: 'Delete Idea',
    purpose: 'Delete an idea using its ID.',
    requestExample: null,
    responseExample: `{
  "status": "deleted",
  "id": 103
}`,
  },
  {
    id: 'get-validated',
    method: 'GET',
    path: '/api/ideas/validated',
    title: 'Get Validated Ideas',
    purpose: 'Retrieve startup ideas that have been validated.',
    requestExample: null,
    responseExample: `[
  {
    "id": 101,
    "title": "Campus Surplus Meal Connector",
    "validated": true
  },
  {
    "id": 102,
    "title": "Neighborhood Clinic Queue Sync",
    "validated": true
  }
]`,
  },
];

export const ARCHITECTURE_NODES = [
  {
    id: 'user',
    label: 'User',
    group: 'Client',
    summary: 'Interacts with the portal through a desktop or mobile browser to submit and review startup ideas.',
  },
  {
    id: 'react',
    label: 'React Frontend',
    group: 'Presentation',
    summary: 'Handles the user interface, idea submission, idea listing, and interactive state.',
  },
  {
    id: 'rest',
    label: 'REST API',
    group: 'Transport',
    summary: 'Provides structured JSON-over-HTTP communication between the React client and Spring Boot server.',
  },
  {
    id: 'springboot',
    label: 'Spring Boot Backend',
    group: 'Application Server',
    summary: 'Handles incoming API requests and coordinates application execution across layered components.',
  },
  {
    id: 'controller',
    label: 'Controller Layer',
    group: 'Web Tier',
    summary: 'Receives and processes HTTP requests (GET, POST, DELETE) and serializes JSON responses.',
  },
  {
    id: 'service',
    label: 'Service Layer',
    group: 'Business Tier',
    summary: 'Handles application logic, validation filtering, and coordination between controllers and data access.',
  },
  {
    id: 'repository',
    label: 'Repository / Data Layer',
    group: 'Persistence Tier',
    summary: 'Handles database communication, entity mapping, and query execution.',
  },
  {
    id: 'mysql',
    label: 'MySQL Database',
    group: 'Storage',
    summary: 'Stores startup idea data persistently in structured relational tables.',
  },
];

export const ARCHITECTURE_BREAKDOWN = [
  {
    title: 'Frontend',
    description: 'Handles the user interface, idea submission, idea listing, and interaction.',
  },
  {
    title: 'Backend',
    description: 'Handles incoming API requests and application logic.',
  },
  {
    title: 'Controller Layer',
    description: 'Receives and processes HTTP requests.',
  },
  {
    title: 'Service Layer',
    description: 'Handles application logic.',
  },
  {
    title: 'Repository/Data Layer',
    description: 'Handles database communication.',
  },
  {
    title: 'Database',
    description: 'Stores startup idea data.',
  },
];

export const TECH_STACK = [
  {
    name: 'React',
    role: 'Frontend Library',
    description: 'Used to build the interactive frontend interface.',
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    role: 'Client Language',
    description: 'Used for frontend functionality and interactions.',
    category: 'Frontend',
  },
  {
    name: 'Java',
    role: 'Backend Language',
    description: 'Used for backend development and core application structure.',
    category: 'Backend',
  },
  {
    name: 'Spring Boot',
    role: 'Application Framework',
    description: 'Used to develop the backend application and REST APIs.',
    category: 'Backend',
  },
  {
    name: 'MySQL',
    role: 'Relational Database',
    description: 'Used for persistent database storage of startup ideas.',
    category: 'Database',
  },
  {
    name: 'REST API',
    role: 'API Architecture',
    description: 'Used for communication between frontend and backend.',
    category: 'Integration',
  },
  {
    name: 'Maven',
    role: 'Build & Dependencies',
    description: 'Used for backend project management and dependencies.',
    category: 'Tooling',
  },
  {
    name: 'Git',
    role: 'Version Control',
    description: 'Used for source tracking and version control.',
    category: 'Tooling',
  },
];

export const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Submit a Startup Idea',
    actor: 'User + React Form',
    description: 'The user enters startup idea details through the React frontend.',
  },
  {
    number: '02',
    title: 'Frontend Request',
    actor: 'HTTP / JSON Request',
    description: 'The frontend sends a request to the backend API.',
  },
  {
    number: '03',
    title: 'Backend Processing',
    actor: 'Spring Boot Layers',
    description: 'Spring Boot receives the request and processes it through the application layers.',
  },
  {
    number: '04',
    title: 'Database Interaction',
    actor: 'Repository → MySQL',
    description: 'The application stores or retrieves idea information from MySQL.',
  },
  {
    number: '05',
    title: 'Response',
    actor: 'Controller → Client',
    description: 'The backend returns the response to the frontend.',
  },
  {
    number: '06',
    title: 'Display',
    actor: 'React UI Update',
    description: 'The frontend displays the requested information to the user.',
  },
];

export const DEVELOPMENT_HIGHLIGHTS = [
  'Full-stack application development',
  'Frontend and backend integration',
  'REST API development',
  'Database integration',
  'Layered backend architecture',
  'React component development',
  'CRUD operations',
  'Responsive UI development',
  'Software architecture understanding',
];

export const PROJECT_DETAILS = [
  { label: 'Project', value: 'Startup Idea Validation Portal' },
  { label: 'Type', value: 'Full-Stack Web Application' },
  { label: 'Frontend', value: 'React.js' },
  { label: 'Backend', value: 'Java + Spring Boot' },
  { label: 'Database', value: 'MySQL' },
  { label: 'Architecture', value: 'REST API + Layered Architecture' },
  { label: 'Project Status', value: 'Completed Academic Project' },
];

export const DEVELOPER_INFO = {
  name: 'Dharanidharan T',
  email: 'dharanithani12@gmail.com',
  linkedin: 'https://linkedin.com/in/dharanidharan-t-680a91324',
};
