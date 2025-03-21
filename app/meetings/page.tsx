import DashboardLayout from '@/components/layout/Dashboard';
import Link from 'next/link';
import { FiPlus, FiFilter, FiSearch, FiCalendar, FiClock, FiVideo, FiUsers, FiFileText } from 'react-icons/fi';
import { useState } from 'react';

// Define meeting status type
type MeetingStatus = 'Upcoming' | 'Live' | 'Completed' | 'Cancelled';

export default function Meetings() {
  // Sample data for meetings
  const meetings = [
    { 
      id: 1,
      title: 'Weekly Progress Review', 
      description: 'Review project progress and discuss next steps',
      date: 'March 22, 2025',
      time: '10:00 AM',
      duration: '60 min',
      status: 'Upcoming' as MeetingStatus,
      project: 'CRM Integration',
      attendees: ['Alex Thompson', 'Sarah Miller', 'You'],
      meetingLink: 'https://zoom.us/j/123456789',
      recordingLink: null,
      transcriptLink: null,
      hasAgenda: true,
      hasRecap: false
    },
    { 
      id: 2,
      title: 'Q2 Strategy Planning', 
      description: 'Plan and prioritize Q2 objectives and deliverables',
      date: 'March 25, 2025',
      time: '2:00 PM',
      duration: '90 min',
      status: 'Upcoming' as MeetingStatus,
      project: 'Data Visualization Dashboard',
      attendees: ['Alex Thompson', 'Jason Patel', 'You', 'Mark Williams'],
      meetingLink: 'https://zoom.us/j/987654321',
      recordingLink: null,
      transcriptLink: null,
      hasAgenda: true,
      hasRecap: false
    },
    { 
      id: 3,
      title: 'Kickoff Meeting', 
      description: 'Project kickoff to align on goals, timeline, and responsibilities',
      date: 'January 15, 2025',
      time: '1:00 PM',
      duration: '60 min',
      status: 'Completed' as MeetingStatus,
      project: 'CRM Integration',
      attendees: ['Alex Thompson', 'Sarah Miller', 'Jason Patel', 'You'],
      meetingLink: 'https://zoom.us/j/567891234',
      recordingLink: 'https://zoom.us/rec/123456',
      transcriptLink: 'https://zoom.us/transcript/123456',
      hasAgenda: true,
      hasRecap: true
    },
    { 
      id: 4,
      title: 'API Integration Planning', 
      description: 'Discuss API requirements and integration approaches',
      date: 'February 10, 2025',
      time: '11:00 AM',
      duration: '45 min',
      status: 'Completed' as MeetingStatus,
      project: 'CRM Integration',
      attendees: ['Jason Patel', 'You'],
      meetingLink: 'https://zoom.us/j/123789456',
      recordingLink: 'https://zoom.us/rec/234567',
      transcriptLink: 'https://zoom.us/transcript/234567',
      hasAgenda: true,
      hasRecap: true
    },
  ];

  // Status styling
  const statusStyles: Record<MeetingStatus, string> = {
    'Upcoming': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Live': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Completed': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    'Cancelled': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
  };

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Meetings</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            View and schedule meetings with Revelate
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
              placeholder="Search meetings..."
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
            Schedule Meeting
          </button>
        </div>
      </div>

      {/* Meeting tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            <a
              href="#"
              className="border-primary-500 text-primary-600 dark:text-primary-400 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
            >
              All Meetings
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
            >
              Upcoming
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
            >
              Past
            </a>
          </nav>
        </div>
      </div>

      {/* Meetings list */}
      <div className="space-y-6">
        {meetings.length > 0 ? (
          meetings.map((meeting) => (
            <div 
              key={meeting.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start">
                  {/* Meeting date column */}
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-3 w-24">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {meeting.date.split(' ')[1]}
                      </span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {meeting.date.split(' ')[0]}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {meeting.time}
                      </span>
                    </div>
                  </div>
                  
                  {/* Meeting details column */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <Link 
                          href={`/meetings/${meeting.id}`}
                          className="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {meeting.title}
                        </Link>
                        <div className="flex items-center mt-1">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[meeting.status]}`}>
                            {meeting.status}
                          </span>
                          <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                            {meeting.project}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 md:mt-0 flex items-center space-x-3">
                        {meeting.status === 'Upcoming' && (
                          <a
                            href={meeting.meetingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                          >
                            <FiVideo className="mr-1.5 h-4 w-4" />
                            Join
                          </a>
                        )}
                        <Link
                          href={`/meetings/${meeting.id}`}
                          className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                    
                    <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
                      {meeting.description}
                    </p>
                    
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-6">
                      <div className="flex items-center">
                        <FiClock className="mr-1.5 h-4 w-4" />
                        {meeting.duration}
                      </div>
                      <div className="flex items-center">
                        <FiUsers className="mr-1.5 h-4 w-4" />
                        {meeting.attendees.length} Attendees
                      </div>
                      {meeting.status === 'Completed' && (
                        <>
                          {meeting.recordingLink && (
                            <a 
                              href={meeting.recordingLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                            >
                              <FiVideo className="mr-1.5 h-4 w-4" />
                              Recording
                            </a>
                          )}
                          {meeting.hasRecap && (
                            <Link
                              href={`/meetings/${meeting.id}#recap`}
                              className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                            >
                              <FiFileText className="mr-1.5 h-4 w-4" />
                              Meeting Recap
                            </Link>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">No meetings found</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Get started by scheduling a new meeting.
            </p>
            <div className="mt-6">
              <button
                className="inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <FiPlus className="w-4 h-4 mr-2" />
                Schedule Meeting
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
