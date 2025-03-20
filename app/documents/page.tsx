"use client";

import DashboardLayout from '@/components/layout/Dashboard';
import Link from 'next/link';
import { FiFilter, FiSearch, FiUpload, FiDownload, FiFolder, FiFile, FiFileText, FiFilePlus, FiGrid, FiList } from 'react-icons/fi';
import { useState } from 'react';

export default function Documents() {
  // State for view mode (grid or list)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Sample data for documents
  interface Document {
    id: number;
    name: string;
    type: DocumentType;
    category: string;
    project: string;
    uploadedAt: string;
    size: string;
    status: DocumentStatus;
    signatureRequired: boolean;
    signatureStatus: string | null;
    lastViewed: string;
  }

  const documents: Document[] = [
    { 
      id: 1,
      name: 'Service Agreement', 
      type: 'PDF',
      category: 'Agreement',
      project: 'All Projects',
      uploadedAt: 'February 15, 2025',
      size: '1.2 MB',
      status: 'Current',
      signatureRequired: true,
      signatureStatus: 'Signed',
      lastViewed: 'March 15, 2025'
    },
    { 
      id: 2,
      name: 'Project Proposal', 
      type: 'DOCX',
      category: 'Proposal',
      project: 'CRM Integration',
      uploadedAt: 'January 10, 2025',
      size: '3.5 MB',
      status: 'Current',
      signatureRequired: false,
      signatureStatus: null,
      lastViewed: 'March 10, 2025'
    },
    { 
      id: 3,
      name: 'Requirements Specification', 
      type: 'PDF',
      category: 'Documentation',
      project: 'CRM Integration',
      uploadedAt: 'January 20, 2025',
      size: '2.1 MB',
      status: 'Current',
      signatureRequired: false,
      signatureStatus: null,
      lastViewed: 'February 28, 2025'
    },
    { 
      id: 4,
      name: 'API Documentation', 
      type: 'PDF',
      category: 'Documentation',
      project: 'CRM Integration',
      uploadedAt: 'February 12, 2025',
      size: '4.2 MB',
      status: 'Current',
      signatureRequired: false,
      signatureStatus: null,
      lastViewed: 'March 5, 2025'
    },
    { 
      id: 5,
      name: 'Project Timeline', 
      type: 'XLSX',
      category: 'Planning',
      project: 'Data Visualization Dashboard',
      uploadedAt: 'February 18, 2025',
      size: '1.8 MB',
      status: 'Current',
      signatureRequired: false,
      signatureStatus: null,
      lastViewed: 'March 12, 2025'
    },
    { 
      id: 6,
      name: 'Invoice - January 2025', 
      type: 'PDF',
      category: 'Invoice',
      project: 'All Projects',
      uploadedAt: 'February 1, 2025',
      size: '750 KB',
      status: 'Paid',
      signatureRequired: false,
      signatureStatus: null,
      lastViewed: 'February 5, 2025'
    },
  ];

  // Document type icons and colors
  type DocumentType = 'PDF' | 'DOCX' | 'XLSX' | 'PPTX' | 'Folder';

  const documentTypeIcons: Record<DocumentType, JSX.Element> = {
    'PDF': <FiFileText className="h-6 w-6" />,
    'DOCX': <FiFile className="h-6 w-6" />,
    'XLSX': <FiFile className="h-6 w-6" />,
    'PPTX': <FiFile className="h-6 w-6" />,
    'Folder': <FiFolder className="h-6 w-6" />
  };

  const documentTypeColors: Record<DocumentType, string> = {
    'PDF': 'text-red-500 dark:text-red-400',
    'DOCX': 'text-blue-500 dark:text-blue-400',
    'XLSX': 'text-green-500 dark:text-green-400',
    'PPTX': 'text-orange-500 dark:text-orange-400',
    'Folder': 'text-yellow-500 dark:text-yellow-400'
  };

  // Status colors
  type DocumentStatus = 'Current' | 'Archived' | 'Pending' | 'Expired' | 'Paid';

  const statusColors: Record<DocumentStatus, string> = {
    'Current': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Archived': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Expired': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    'Paid': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
  };

  // Function to render grid view
  const renderGridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {documents.map((document) => (
        <div
          key={document.id}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-start mb-4">
              <div className={`mr-3 ${documentTypeColors[document.type]}`}>
                {documentTypeIcons[document.type]}
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/documents/${document.id}`}
                  className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 truncate"
                >
                  {document.name}
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {document.type} • {document.size}
                </p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Category</span>
                <span className="text-gray-700 dark:text-gray-300">{document.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Project</span>
                <span className="text-gray-700 dark:text-gray-300">{document.project}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Uploaded</span>
                <span className="text-gray-700 dark:text-gray-300">{document.uploadedAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Status</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[document.status]}`}>
                  {document.status}
                </span>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <FiDownload className="mr-1.5 h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Function to render list view
  const renderListView = () => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Project
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Uploaded
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {documents.map((document) => (
              <tr key={document.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 mr-3 ${documentTypeColors[document.type]}`}>
                      {documentTypeIcons[document.type]}
                    </div>
                    <div>
                      <Link
                        href={`/documents/${document.id}`}
                        className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {document.name}
                      </Link>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {document.type} • {document.size}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {document.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {document.project}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {document.uploadedAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[document.status]}`}>
                    {document.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                    <FiDownload className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Documents</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Access and manage your documents and agreements
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
              placeholder="Search documents..."
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
            <FiUpload className="w-4 h-4 mr-2" />
            Upload
          </button>
        </div>
      </div>

      {/* Document categories */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 text-center">
          <div className="text-primary-600 dark:text-primary-400 mb-2">
            <FiFilePlus className="h-6 w-6 mx-auto" />
          </div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">All Documents</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{documents.length} files</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 text-center">
          <div className="text-blue-600 dark:text-blue-400 mb-2">
            <FiFileText className="h-6 w-6 mx-auto" />
          </div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">Agreements</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">1 file</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 text-center">
          <div className="text-green-600 dark:text-green-400 mb-2">
            <FiFileText className="h-6 w-6 mx-auto" />
          </div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">Invoices</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">1 file</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 text-center">
          <div className="text-yellow-600 dark:text-yellow-400 mb-2">
            <FiFolder className="h-6 w-6 mx-auto" />
          </div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">Project Files</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">4 files</p>
        </div>
      </div>

      {/* View toggle and document list */}
      <div className="space-y-6">
        <div className="flex justify-end">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center px-3 py-1.5 border ${viewMode === 'grid' 
                ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800'
              } rounded-l-md text-sm font-medium focus:outline-none`}
            >
              <FiGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`inline-flex items-center px-3 py-1.5 border ${viewMode === 'list' 
                ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800'
              } rounded-r-md text-sm font-medium focus:outline-none`}
            >
              <FiList className="h-4 w-4" />
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? renderGridView() : renderListView()}
      </div>
    </DashboardLayout>
  );
}
