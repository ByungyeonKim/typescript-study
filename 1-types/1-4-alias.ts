{
  /**
   * Type Aliases 🌷
   */
  type Text = string;
  const name: Text = 'Vintz';
  const address: Text = 'Korea 🇰🇷';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'Vintz',
    age: 27,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let vintzName: Name;
  vintzName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';
  type Boal = true;
}
