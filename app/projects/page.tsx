import DashboardLayout from '@/components/layout/Dashboard';
import Link from 'next/link';
import { FiPlus, FiFilter, FiSearch } from 'react-icons/fi';

export default function Projects() {
  // Sample data for projects
  const projects = [
    { 
      id: 1,
      name: 'CRM Integration', 
      description: 'Integration of Salesforce with existing systems',
      status: 'In Progress',
      startDate: 'Jan 15, 2025',
      endDate: 'Apr 30, 2025',
      completionPercentage: 45
    },
    { 
      id: 2,
      name: 'Data Visualization Dashboard', 
      description: 'Creating interactive dashboards for business analytics',
      status: 'Planning',
      startDate: 'Feb 10, 2025',
      endDate: 'May 15, 2025',
      completionPercentage: 15
    },
    { 
      id: 3,
      name: 'Email Marketing Automation', 
      description: 'Setting up automated email sequences and analytics',
      status: 'Completed',
      startDate: 'Oct 5, 2024',
      endDate: 'Jan 20, 2025',
      completionPercentage: 100
    },
  ];

  // Status badge colors
  const statusColors = {
    'Planning': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'In Progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'On Hold': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Cancelled': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  };

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            View and manage your ongoing projects
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
              placeholder="Search projects..."
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
            New Project
          </button>
        </div>
      </div>

      {/* Projects list */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {projects.length > 0 ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {projects.map((project) => (
              <div key={project.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {project.name}
                      </h2>
                      <span className={`ml-3 px-2.5 py-0.5 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="mt-3 flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <div>
                        <span className="font-medium">Start:</span> {project.startDate}
                      </div>
                      <div>
                        <span className="font-medium">Target End:</span> {project.endDate}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                    <div className="text-right text-sm font-medium text-gray-700 dark:text-gray-300">
                      {project.completionPercentage}% Complete
                    </div>
                    <div className="mt-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-primary-600 h-2.5 rounded-full"
                        style={{ width: `${project.completionPercentage}%` }}
                      ></div>
                    </div>
                    <Link 
                      href={`/projects/${project.id}`}
                      className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">No projects found</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Get started by creating a new project.
            </p>
            <div className="mt-6">
              <button
                className="inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <FiPlus className="w-4 h-4 mr-2" />
                New Project
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
