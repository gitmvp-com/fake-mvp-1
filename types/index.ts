export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
}

export interface DashboardStats {
  totalViews: number;
  totalClicks: number;
  conversionRate: number;
  revenue: number;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}
