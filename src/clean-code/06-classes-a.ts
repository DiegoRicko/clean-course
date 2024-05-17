(()=>{

    //No aplicando el principio de responsabilidad unica
    type Gender = 'M'|'F';
    class PersonJS{
        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor(name: string, gender: Gender, birthDate: Date){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }


    class Person{
        
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthDate: Date){
        }
    }

    class User extends Person{
        public lastAcces: Date
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date,
        ){
            super(name, gender, birthDate)
            this.lastAcces = new Date();
        }

        checkCredentials(){
            return true;
        }

    }


    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthDate: Date,

        ){
            super(email, role, name, gender, birthDate)
        }
    }


    const newPerson = new Person('Diego','M',new Date('2000-03-02'))
    console.log(newPerson);
    const userSettings = new UserSettings(
        '/user',
        'clean',
        'hola@out',
        'Admin',
        'Diego',
        'M',
        new Date('2000-03-02')
    );
    console.log({userSettings,areCredentialsValid: userSettings.checkCredentials()});
})();