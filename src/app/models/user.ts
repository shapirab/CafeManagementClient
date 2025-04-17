export interface RegisterUserDto{
  FirstName?: string,
  LastName?: string,
  CompanyName: string,
  ContactNumber: string,
  Email: string,
  UserRole?: number;
  Username: string,
  Password: string
}
