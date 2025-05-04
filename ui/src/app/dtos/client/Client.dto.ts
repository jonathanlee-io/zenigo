export interface ClientDto {
  id: string;
  displayName: string;
  description: string;
  userId: string;
  paymentPlanId: string;
  subdomains: { subdomain: string }[];
  projects: { name: string }[];
  createdBy: {
    supabaseUserId: string;
  };
  members: {
    email: string;
  }[];
  admins: {
    email: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
