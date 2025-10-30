import type { DashboardStats } from '@/types';

export function getMockDashboardStats(): DashboardStats {
  return {
    totalViews: Math.floor(Math.random() * 10000) + 1000,
    totalClicks: Math.floor(Math.random() * 5000) + 200,
    conversionRate: (Math.random() * 10 + 2).toFixed(2) as unknown as number,
    revenue: Math.floor(Math.random() * 50000) + 5000,
  };
}

export function getMockRecentActivity() {
  const activities = [
    { id: 1, type: 'Page View', description: 'User viewed dashboard', timestamp: new Date(Date.now() - 5 * 60000) },
    { id: 2, type: 'Click', description: 'User clicked on CTA button', timestamp: new Date(Date.now() - 15 * 60000) },
    { id: 3, type: 'Signup', description: 'New user signed up', timestamp: new Date(Date.now() - 30 * 60000) },
    { id: 4, type: 'Purchase', description: 'User made a purchase', timestamp: new Date(Date.now() - 60 * 60000) },
    { id: 5, type: 'Login', description: 'User logged in', timestamp: new Date(Date.now() - 120 * 60000) },
  ];
  return activities;
}

export function getMockChartData() {
  return [
    { date: 'Jan 1', views: 1200, clicks: 400, revenue: 2400 },
    { date: 'Jan 2', views: 1900, clicks: 600, revenue: 2210 },
    { date: 'Jan 3', views: 1600, clicks: 500, revenue: 2290 },
    { date: 'Jan 4', views: 2200, clicks: 800, revenue: 2000 },
    { date: 'Jan 5', views: 2000, clicks: 700, revenue: 2181 },
    { date: 'Jan 6', views: 2500, clicks: 900, revenue: 2500 },
    { date: 'Jan 7', views: 2100, clicks: 750, revenue: 2100 },
  ];
}
