"use client";

import DashboardLayout from '@/components/layout/Dashboard';
import Link from 'next/link';
import { FiPlus, FiFilter, FiSearch, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

// Define status type to match the keys in statusStyles
type TaskStatus = 'Pending' | 'In Progress' | 'Completed' | 'Blocked';
type TaskPriority = 'High' | 'Medium' | 'Low';

export default function Tasks() {
  // Sample data for tasks
  const tasks = [
    { 
      id: 1,
      name: 'Review analytics setup', 
      description: 'Review the Google Analytics configuration and verify tracking is working properly',
      status: 'In Progress' as TaskStatus,
      priority: 'High' as TaskPriority,
      dueDate: 'March 21, 2025',
      project: 'CRM Integration',
      assignedTo: 'Revelate Team'
    },
    { 
      id: 2,
      name: 'Provide feedback on dashboard mockups', 
      description: 'Review the proposed dashboard designs and provide feedback',
      status: 'Pending' as TaskStatus,
      priority: 'Medium' as TaskPriority,
      dueDate: 'March 23, 2025',
      project: 'Data Visualization Dashboard',
      assignedTo: 'Assigned to you'
    },
    { 
      id: 3,
      name: 'Approve content calendar', 
      description: 'Review and approve the Q2 content marketing calendar',
      status: 'Pending' as TaskStatus,
      priority: 'Low' as TaskPriority,
      dueDate: 'March 28, 2025',
      project: 'Email Marketing Automation',
      assignedTo: 'Assigned to you'
    },
    { 
      id: 4,
      name: 'Provide access to sales database', 
      description: 'Share credentials to the sales database for integration',
      status: 'Completed' as TaskStatus,
      priority: 'Medium' as TaskPriority,
      dueDate: 'March 15, 2025',
      project: 'CRM Integration',
      assignedTo: 'Assigned to you'
    },
  ];

  // Status and priority styling
  const statusStyles: Record<TaskStatus, { badge: string, icon: JSX.Element }> = {
    'Pending': {
      badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      icon: <FiClock className="w-5 h-5" />
    },
    'In Progress': {
      badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      icon: <FiClock className="w-5 h-5" />
    },
    'Completed': {
      badge: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      icon: <FiCheckCircle className="w-5 h-5" />
    },
    'Blocked': {
      badge: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      icon: <FiAlertCircle className="w-5 h-5" />
    }
  };

  const priorityStyles: Record<TaskPriority, string> = {
    'High': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Low': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
  };

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            View and manage your tasks
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
              placeholder="Search tasks..."
            />
          </div>
          <button
            className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <FiFilter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button
            className="inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <FiPlus className="w-4 h-4 mr-2" />
            New Task
          </button>
        </div>
      </div>

      {/* Tasks list */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="grid grid-cols-12 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-850 border-b border-gray-200 dark:border-gray-700">
          <div className="col-span-6 px-6 py-3">Task</div>
          <div className="col-span-2 px-6 py-3">Status</div>
          <div className="col-span-2 px-6 py-3">Due Date</div>
          <div className="col-span-2 px-6 py-3">Priority</div>
        </div>
        
        {tasks.length > 0 ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {tasks.map((task) => (
              <div key={task.id} className="grid grid-cols-12 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                <div className="col-span-6 px-6 py-4">
                  <div className="flex flex-col">
                    <Link 
                      href={`/tasks/${task.id}`}
                      className="font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 truncate"
                    >
                      {task.name}
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                      {task.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Project: {task.project} • {task.assignedTo}
                    </p>
                  </div>
                </div>
                
                <div className="col-span-2 px-6 py-4">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[task.status].badge}`}>
                    {statusStyles[task.status].icon}
                    {task.status}
                  </span>
                </div>
                
                <div className="col-span-2 px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  {task.dueDate}
                </div>
                
                <div className="col-span-2 px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityStyles[task.priority]}`}>
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">No tasks found</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Get started by creating a new task.
            </p>
            <div className="mt-6">
              <button
                className="inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <FiPlus className="w-4 h-4 mr-2" />
                New Task
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
