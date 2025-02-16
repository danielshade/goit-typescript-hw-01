// ! У вас є тип Form, який містить інформацію про форму, включаючи поле errors.
// ! Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const formData: Params = {
  email: "user@mail.com",
  firstName: "Ira",
  lastName: "Petrenko",
  phone: "123456789",
};

console.log(formData);
