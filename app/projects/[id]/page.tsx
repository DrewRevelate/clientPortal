"use client";

import DashboardLayout from '@/components/layout/Dashboard';
import Link from 'next/link';
import { 
  FiArrowLeft, 
  FiCalendar, 
  FiClock, 
  FiUsers, 
  FiCheckSquare,
  FiFileText,
  FiMessageSquare,
  FiPlus
} from 'react-icons/fi';

interface ProjectDetailsProps {
  params: {
    id: string;
  };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  // Sample project data (in a real app, this would be fetched based on the ID)
  const project = {
    id: params.id,
    name: 'CRM Integration',
    description: 'Integration of Salesforce with existing systems to streamline customer data management and improve sales processes. This project involves API development, data migration, and user training.',
    status: 'In Progress',
    startDate: 'January 15, 2025',
    targetEndDate: 'April 30, 2025',
    completionPercentage: 45,
    owner: 'Alex Thompson',
    team: ['Alex Thompson', 'Sarah Miller', 'Jason Patel'],
    createdAt: 'January 10, 2025',
    updatedAt: 'March 16, 2025',
    tasks: [
      { id: 1, name: 'Review analytics setup', status: 'In Progress', dueDate: 'March 21, 2025', priority: 'High' },
      { id: 2, name: 'Provide access to sales database', status: 'Completed', dueDate: 'March 15, 2025', priority: 'Medium' },
      { id: 3, name: 'Configure API endpoints', status: 'Pending', dueDate: 'March 25, 2025', priority: 'Medium' },
      { id: 4, name: 'Approve integration plan', status: 'Completed', dueDate: 'February 5, 2025', priority: 'High' },
    ],
    documents: [
      { id: 1, name: 'Project Proposal', type: 'PDF', uploadedAt: 'January 10, 2025', size: '3.5 MB' },
      { id: 2, name: 'Requirements Specification', type: 'DOCX', uploadedAt: 'January 20, 2025', size: '2.1 MB' },
      { id: 3, name: 'API Documentation', type: 'PDF', uploadedAt: 'February 12, 2025', size: '4.2 MB' },
    ],
    updates: [
      { 
        id: 1,
        author: 'Sarah Miller',
        role: 'Project Manager',
        message: 'Completed the initial data migration from legacy systems to Salesforce. Currently working on API integration.',
        date: 'March 10, 2025',
        time: '2:35 PM'
      },
      { 
        id: 2,
        author: 'Jason Patel',
        role: 'Developer',
        message: 'Created authentication endpoints and initial API documentation. Awaiting feedback on the implementation approach.',
        date: 'February 28, 2025',
        time: '10:15 AM'
      },
    ],
    milestones: [
      { name: 'Project Kickoff', status: 'Completed', date: 'January 15, 2025' },
      { name: 'Requirements Gathering', status: 'Completed', date: 'January 30, 2025' },
      { name: 'System Design', status: 'Completed', date: 'February 20, 2025' },
      { name: 'API Development', status: 'In Progress', date: 'March 25, 2025' },
      { name: 'Data Migration', status: 'Not Started', date: 'April 15, 2025' },
      { name: 'Testing & QA', status: 'Not Started', date: 'April 25, 2025' },
      { name: 'Launch', status: 'Not Started', date: 'April 30, 2025' },
    ]
  };

  // Status colors
  const statusColors = {
    'Planning': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'In Progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'On Hold': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Cancelled': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    'Not Started': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  };

  // Task priority colors
  const priorityColors = {
    'High': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Low': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
  };

  return (
    <DashboardLayout>
      {/* Back button and project title */}
      <div className="mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-4"
        >
          <FiArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{project.name}</h1>
            <div className="mt-1 flex items-center">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                {project.status}
              </span>
              <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                {project.completionPercentage}% Complete
              </span>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <div className="w-full sm:w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-primary-600 h-2.5 rounded-full"
                style={{ width: `${project.completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Project details grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Project details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Description
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </div>

          {/* Milestones card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Milestones
            </h2>
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
              <div className="space-y-8">
                {project.milestones.map((milestone, index) => (
                  <div key={index} className="relative ml-6">
                    {/* Milestone dot */}
                    <div className={`absolute -left-9 top-0.5 h-4 w-4 rounded-full border-2 border-white dark:border-gray-800 ${
                      milestone.status === 'Completed' 
                        ? 'bg-green-500' 
                        : milestone.status === 'In Progress'
                        ? 'bg-blue-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}></div>
                    
                    {/* Milestone content */}
                    <div>
                      <h3 className="text-md font-medium text-gray-900 dark:text-white">
                        {milestone.name}
                      </h3>
                      <div className="mt-1 flex items-center">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[milestone.status]}`}>
                          {milestone.status}
                        </span>
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          <FiCalendar className="inline mr-1 h-3 w-3" />
                          {milestone.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tasks card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Tasks
              </h2>
              <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded text-primary-700 bg-primary-100 hover:bg-primary-200 dark:text-primary-100 dark:bg-primary-900/30 dark:hover:bg-primary-900/40">
                <FiPlus className="mr-1.5 h-3.5 w-3.5" />
                Add Task
              </button>
            </div>
            
            {project.tasks.length > 0 ? (
              <div className="space-y-3">
                {project.tasks.map((task) => (
                  <Link
                    key={task.id}
                    href={`/tasks/${task.id}`}
                    className="block p-3 border border-gray-100 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {task.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Due: {task.dueDate}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className={`mr-2 px-2.5 py-0.5 text-xs font-medium rounded-full ${priorityColors[task.priority]}`}>
                          {task.priority}
                        </span>
                        <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${statusColors[task.status]}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No tasks yet</p>
            )}
            
            {project.tasks.length > 0 && (
              <div className="mt-4 text-center">
                <Link
                  href="/tasks"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  View All Tasks
                </Link>
              </div>
            )}
          </div>

          {/* Documents card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Documents
              </h2>
              <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded text-primary-700 bg-primary-100 hover:bg-primary-200 dark:text-primary-100 dark:bg-primary-900/30 dark:hover:bg-primary-900/40">
                <FiPlus className="mr-1.5 h-3.5 w-3.5" />
                Upload
              </button>
            </div>
            
            {project.documents.length > 0 ? (
              <div className="space-y-3">
                {project.documents.map((document) => (
                  <div
                    key={document.id}
                    className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750"
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-400">
                        <FiFileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {document.name}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {document.size} • Uploaded {document.uploadedAt}
                        </p>
                      </div>
                    </div>
                    <button className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No documents yet</p>
            )}
            
            {project.documents.length > 0 && (
              <div className="mt-4 text-center">
                <Link
                  href="/documents"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  View All Documents
                </Link>
              </div>
            )}
          </div>

          {/* Updates card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Project Updates
            </h2>
            
            {project.updates.length > 0 ? (
              <div className="space-y-6">
                {project.updates.map((update) => (
                  <div key={update.id} className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-2">
                        <FiMessageSquare className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="ml-3">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900 dark:text-white">{update.author}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{update.role}</span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {update.date} at {update.time}
                        </div>
                      </div>
                    </div>
                    <div className="pl-10">
                      <p className="text-gray-700 dark:text-gray-300">
                        {update.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No updates yet</p>
            )}
          </div>
        </div>

        {/* Right column - Project metadata */}
        <div className="space-y-6">
          {/* Project details card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Project Details
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Status</h3>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Start Date</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FiCalendar className="mr-2 h-4 w-4 text-gray-400" />
                  {project.startDate}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Target End Date</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FiCalendar className="mr-2 h-4 w-4 text-gray-400" />
                  {project.targetEndDate}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Project Owner</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  {project.owner}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Project Team</h3>
                <div className="flex flex-col text-gray-700 dark:text-gray-300">
                  <div className="flex items-center mb-2">
                    <FiUsers className="mr-2 h-4 w-4 text-gray-400" />
                    {project.team.length} Members
                  </div>
                  <div className="space-y-2 pl-6">
                    {project.team.map((member, index) => (
                      <div key={index} className="text-sm">
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Created</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FiClock className="mr-2 h-4 w-4 text-gray-400" />
                  {project.createdAt}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Last Updated</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FiClock className="mr-2 h-4 w-4 text-gray-400" />
                  {project.updatedAt}
                </div>
              </div>
            </div>
          </div>

          {/* Actions card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Actions
            </h2>
            <div className="space-y-3">
              <Link 
                href={`/tasks`}
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <FiCheckSquare className="mr-2 h-4 w-4" />
                Create New Task
              </Link>
              <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <FiMessageSquare className="mr-2 h-4 w-4" />
                Request Update
              </button>
              <Link
                href="/meetings"
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <FiCalendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
