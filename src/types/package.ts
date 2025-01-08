export type Package = {
  industry: string;
  product: string;
  companyName: string;
  contactPersonName: string;
  designation: string;
  linkedinUrl: string;
  officialEmail: string;
  alternateEmail: string;
  contactNo: string;
  whatsappNumber: string;
  alternateContactNo: string;
  dateTime: string;
  status: 'Interested' | 'Not Interested' | 'Call Later' | 'Follow Up';
};