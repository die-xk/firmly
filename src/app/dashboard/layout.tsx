'use client';

import { useState } from 'react';
import { UserButton } from "@clerk/nextjs";
import { 
  ChartBarIcon, 
  UsersIcon, 
  CogIcon,
  BellIcon,
  ChevronLeftIcon,
  HomeIcon,
  DocumentChartBarIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  MapIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: HomeIcon },
  { 
    name: 'Analytics', 
    icon: ChartBarIcon,
    submenu: [
      { name: 'Heatmap', href: '/dashboard/analytics/heatmap', icon: MapIcon },
      // Add more analytics submenu items here
    ]
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UsersIcon },
  { name: 'Reports', href: '/dashboard/reports', icon: DocumentChartBarIcon },
  { name: 'Feedback', href: '/dashboard/feedback', icon: ChatBubbleLeftIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: CogIcon },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>('Analytics');

  const toggleSubmenu = (menuName: string) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300
                   ${collapsed ? 'w-16' : 'w-64'} overflow-y-auto`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          <span className={`font-bold text-[#1c1c1c] transition-opacity duration-300 
                          ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
            Firmly
          </span>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeftIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300
                                      ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        <nav className="p-2 space-y-1">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => !collapsed && toggleSubmenu(item.name)}
                    className="w-full flex items-center justify-between gap-3 px-3 py-2 text-gray-600 rounded-lg 
                             hover:bg-gray-50 hover:text-[#1c1c1c] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span className={`transition-opacity duration-300 ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
                        {item.name}
                      </span>
                    </div>
                    {!collapsed && (
                      <ChevronDownIcon 
                        className={`h-4 w-4 transition-transform duration-200 
                                  ${expandedMenu === item.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>
                  {!collapsed && expandedMenu === item.name && (
                    <div className="ml-9 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 rounded-lg 
                                   hover:bg-gray-50 hover:text-[#1c1c1c] transition-colors"
                        >
                          <subItem.icon className="h-4 w-4" />
                          <span>{subItem.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg 
                           hover:bg-gray-50 hover:text-[#1c1c1c] transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className={`transition-opacity duration-300 ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
                    {item.name}
                  </span>
                </a>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#1c1c1c]">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-[#1c1c1c] transition-colors">
              <BellIcon className="h-5 w-5" />
            </button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 