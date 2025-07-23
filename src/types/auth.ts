export type UserType = 'participant' | 'advertiser' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  userType: UserType;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  referralCode?: string;
  referredBy?: string;
}

export interface LoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: UserType;
  referralCode?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

// Dados específicos do participante
export interface ParticipantProfile extends User {
  points: number;
  level: number;
  totalCampaignsCompleted: number;
  totalCashbackEarned: number;
  preferences: {
    categories: string[];
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
  };
}

// Dados específicos do anunciante
export interface AdvertiserProfile extends User {
  companyName?: string;
  companyDocument?: string;
  website?: string;
  totalCampaigns: number;
  activeBalance: number;
  totalSpent: number;
  verificationStatus: 'pending' | 'verified' | 'rejected';
}

export interface AuthError {
  code: string;
  message: string;
  field?: string;
} 