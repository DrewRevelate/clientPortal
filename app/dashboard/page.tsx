import DashboardLayout from '@/components/layout/Dashboard';
import Link from 'next/link';
import { 
  FiFolder, 
  FiCheckSquare, 
  FiCalendar, 
  FiClock, 
  FiFileText,
  FiArrowRight,
  FiAlertCircle,
  FiBarChart2
} from 'react-icons/fi';

export default function Dashboard() {
  // Sample data for dashboard widgets
  const recentProjects = [
    { id: 1, name: 'CRM Integration', status: 'In Progress', lastUpdated: '2 days ago' },
    { id: 2, name: 'Data Visualization Dashboard', status: 'Planning', lastUpdated: '5 days ago' },
  ];
  
  const upcomingTasks = [
    { id: 1, name: 'Review analytics setup', dueDate: 'Tomorrow', priority: 'High' },
    { id: 2, name: 'Provide feedback on dashboard mockups', dueDate: '3 days', priority: 'Medium' },
    { id: 3, name: 'Approve content calendar', dueDate: 'Next week', priority: 'Low' },
  ];
  
  const upcomingMeetings = [
    { 
      id: 1, 
      title: 'Weekly Progress Review', 
      date: 'March 22, 2025', 
      time: '10:00 AM', 
      duration: '60 min',
      link: 'https://zoom.us/j/123456789'
    },
    { 
      id: 2, 
      title: 'Q2 Strategy Planning', 
      date: 'March 25, 2025', 
      time: '2:00 PM', 
      duration: '90 min',
      link: 'https://zoom.us/j/987654321'
    },
  ];
  
  const timeTrackingSummary = {
    purchased: 40,
    used: 28.5,
    remaining: 11.5,
    percentUsed: 71.25
  };
  
  return (
    <DashboardLayout>
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-md p-6 mb-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome to your Client Portal</h1>
        <p className="opacity-90">
          Track your projects, manage tasks, schedule meetings, and access important documents all in one place.
        </p>
      </div>
      
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Projects Widget */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold flex items-center">
              <FiFolder className="mr-2 text-primary-500" /> Recent Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
            >
              View All <FiArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="p-4">
            {recentProjects.length > 0 ? (
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="p-3 border border-gray-100 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Last updated: {project.lastUpdated}
                        </p>
                      </div>
                      <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {project.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                No active projects
              </div>
            )}
          </div>
        </div>
        
        {/* Tasks Widget */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold flex items-center">
              <FiCheckSquare className="mr-2 text-primary-500" /> Upcoming Tasks
            </h2>
            <Link
              href="/tasks"
              className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
            >
              View All <FiArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="p-4">
            {upcomingTasks.length > 0 ? (
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-3 border border-gray-100 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {task.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Due: {task.dueDate}
                        </p>
                      </div>
                      <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full 
                        ${task.priority === 'High' 
                          ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' 
                          : task.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                          : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                No upcoming tasks
              </div>
            )}
          </div>
        </div>
        
        {/* Meetings Widget */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold flex items-center">
              <FiCalendar className="mr-2 text-primary-500" /> Upcoming Meetings
            </h2>
            <Link
              href="/meetings"
              className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
            >
              View All <FiArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="p-4">
            {upcomingMeetings.length > 0 ? (
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="p-3 border border-gray-100 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {meeting.title}
                    </h3>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <span className="mr-3">{meeting.date}</span>
                        <span>{meeting.time} ({meeting.duration})</span>
                      </div>
                    </div>
                    <a
                      href={meeting.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      <FiCalendar className="mr-1" /> Join Meeting
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                No upcoming meetings
              </div>
            )}
          </div>
        </div>
        
        {/* Recent Documents */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold flex items-center">
              <FiFileText className="mr-2 text-primary-500" /> Recent Documents
            </h2>
            <Link
              href="/documents"
              className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
            >
              View All <FiArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="p-3 border border-gray-100 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                <div className="flex items-center">
                  <div className="mr-3 text-gray-400">
                    <FiFileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Service Agreement
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Uploaded: Feb 15, 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-gray-100 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                <div className="flex items-center">
                  <div className="mr-3 text-gray-400">
                    <FiFileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Project Proposal
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Uploaded: Mar 10, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Time Tracking */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold flex items-center">
              <FiClock className="mr-2 text-primary-500" /> Time Tracking
            </h2>
            <Link
              href="/time-tracking"
              className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
            >
              Details <FiArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Hours Purchased</span>
                <span className="font-medium text-gray-900 dark:text-white">{timeTrackingSummary.purchased} hrs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Hours Used</span>
                <span className="font-medium text-gray-900 dark:text-white">{timeTrackingSummary.used} hrs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Hours Remaining</span>
                <span className="font-medium text-green-600 dark:text-green-400">{timeTrackingSummary.remaining} hrs</span>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>Usage</span>
                  <span>{timeTrackingSummary.percentUsed}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full"
                    style={{ width: `${timeTrackingSummary.percentUsed}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold flex items-center">
              <FiAlertCircle className="mr-2 text-primary-500" /> Notifications
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Last 7 days
            </span>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="p-3 border-l-4 border-primary-500 bg-primary-50 dark:bg-primary-900/20 rounded-r-md">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  New task assigned
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  "Review analytics dashboard" due in 3 days
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  2 hours ago
                </p>
              </div>
              <div className="p-3 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 rounded-r-md">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Meeting scheduled
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Weekly progress review on March 22, 10:00 AM
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Yesterday
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
