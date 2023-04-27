interface Adress {
  street: string,
  country?: string,
  city?: string,
  postal_code?: string
}

export class User {
  constructor(
    _id?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    phone?: string,
    address?: Adress,
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
  }

  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: Adress;
}