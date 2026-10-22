export interface CvExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  highlights: string[];
}

export interface CvEducation {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  details?: string;
}

export interface CvCertification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface CvPersonal {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website?: string;
  avatarUrl?: string;
}

export interface CvData {
  id: string;
  updatedAt: string;
  template: 'emerald' | 'navy' | 'minimal';
  personal: CvPersonal;
  summary: string;
  skills: string[];
  experience: CvExperience[];
  education: CvEducation[];
  certifications: CvCertification[];
  languages: string[];
}
