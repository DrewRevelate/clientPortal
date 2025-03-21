"use client";

import DashboardLayout from '@/components/layout/Dashboard';
import Link from 'next/link';
import { 
  FiArrowLeft, 
  FiClock, 
  FiCalendar, 
  FiTag, 
  FiFolder, 
  FiMessageSquare,
  FiPaperclip,
  FiSend
} from 'react-icons/fi';
import { TaskStatus, TaskPriority } from '@/lib/types';

interface TaskDetailsProps {
  params: {
    id: string;
  };
}

export default function TaskDetails({ params }: TaskDetailsProps) {
  // Sample task data (in a real app, this would be fetched based on the ID)
  const task = {
    id: params.id,
    name: 'Review analytics setup',
    description: 'Review the Google Analytics configuration and verify tracking is working properly. Check that all conversion goals are set up correctly and that the e-commerce tracking is capturing transaction data accurately.',
    status: 'In Progress',
    priority: 'High',
    dueDate: 'March 21, 2025',
    project: 'CRM Integration',
    assignedTo: 'Revelate Team',
    createdAt: 'March 15, 2025',
    updatedAt: 'March 16, 2025',
    attachments: [
      { name: 'analytics_requirements.pdf', size: '2.4 MB', date: 'March 15, 2025' },
      { name: 'tracking_checklist.xlsx', size: '1.1 MB', date: 'March 15, 2025' },
    ],
    comments: [
      { 
        id: 1, 
        author: 'Alex Thompson', 
        role: 'Analytics Specialist', 
        message: 'I\'ve started the review of your analytics setup. I noticed a few issues with the event tracking that we need to address.', 
        date: 'March 16, 2025',
        time: '9:32 AM'
      },
      { 
        id: 2, 
        author: 'You', 
        role: 'Client', 
        message: 'Thanks for the update. Is there anything specific I need to provide to help with this?', 
        date: 'March 16, 2025',
        time: '10:15 AM'
      },
      { 
        id: 3, 
        author: 'Alex Thompson', 
        role: 'Analytics Specialist', 
        message: 'It would be helpful if you could provide access to your Google Tag Manager account so I can check the configuration directly.', 
        date: 'March 16, 2025',
        time: '11:03 AM'
      },
    ]
  };

  // Status and priority styling
  const statusStyles: Record<string, string> = {
    'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'In Progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Blocked': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
  };

  const priorityStyles: Record<string, string> = {
    'High': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Low': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
  };

  return (
    <DashboardLayout>
      {/* Back button and task title */}
      <div className="mb-6">
        <Link
          href="/tasks"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-4"
        >
          <FiArrowLeft className="mr-2 h-4 w-4" />
          Back to Tasks
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{task.name}</h1>
      </div>

      {/* Task details grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Task details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Task description card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Description
            </h2>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {task.description}
            </p>
          </div>

          {/* Attachments card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Attachments
            </h2>
            {task.attachments.length > 0 ? (
              <div className="space-y-3">
                {task.attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 border border-gray-100 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750"
                  >
                    <div className="text-gray-400 mr-3">
                      <FiPaperclip className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {attachment.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {attachment.size} • {attachment.date}
                      </p>
                    </div>
                    <button className="px-3 py-1 text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No attachments</p>
            )}
            <div className="mt-4">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <FiPaperclip className="mr-2 h-4 w-4" />
                Add Attachment
              </button>
            </div>
          </div>

          {/* Comments section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Comments
            </h2>
            <div className="space-y-6">
              {task.comments.map((comment) => (
                <div
                  key={comment.id}
                  className={`flex ${comment.author === 'You' ? 'justify-end' : ''}`}
                >
                  <div className={`max-w-lg ${comment.author === 'You' ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-100 dark:border-primary-800/30' : 'bg-gray-50 dark:bg-gray-750 border-gray-100 dark:border-gray-700'} rounded-lg p-4 border`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">{comment.author}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{comment.role}</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {comment.date} at {comment.time}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {comment.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <div className="relative">
                <textarea
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                  placeholder="Type your comment here..."
                  rows={3}
                ></textarea>
                <button className="absolute right-3 bottom-3 inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  <FiSend className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Task metadata */}
        <div className="space-y-6">
          {/* Task status card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Task Details
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Status</h3>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[task.status]}`}>
                  {task.status}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Priority</h3>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityStyles[task.priority]}`}>
                  {task.priority}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Due Date</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FiCalendar className="mr-2 h-4 w-4 text-gray-400" />
                  {task.dueDate}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Project</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FiFolder className="mr-2 h-4 w-4 text-gray-400" />
                  <Link
                    href={`/projects/1`}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    {task.project}
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Assigned To</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  {task.assignedTo}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Created</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FiClock className="mr-2 h-4 w-4 text-gray-400" />
                  {task.createdAt}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Last Updated</h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FiClock className="mr-2 h-4 w-4 text-gray-400" />
                  {task.updatedAt}
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
              <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Update Status
              </button>
              <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                Request Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
