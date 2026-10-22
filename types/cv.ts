export interface CvExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description?: string;
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
  credentialId?: string;
}

export interface CvProject {
  id: string;
  name: string;
  role: string;
  year: string;
  description: string;
  url?: string;
}

export interface CvPersonal {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website?: string;
  github?: string;
  avatarUrl?: string;
  showPhoto?: boolean;
}

export type CvTemplate = 'ats-classic' | 'executive' | 'emerald';

export interface CvData {
  id: string;
  updatedAt: string;
  template: CvTemplate;
  personal: CvPersonal;
  summary: string;
  skills: string[];
  technicalSkills?: string[];
  softSkills?: string[];
  experience: CvExperience[];
  education: CvEducation[];
  certifications: CvCertification[];
  languages: string[];
  projects?: CvProject[];
  awards?: string[];
}

