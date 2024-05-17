(()=>{

    //No aplicando el principio de responsabilidad unica
    type Gender = 'M'|'F';

    interface PersonProps{
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class Person{

        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor({name, gender, birthDate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProps{
        name: string,
        gender: Gender,
        birthDate: Date,
        email: string,
        role: string,
    }

    class User extends Person{
        public email: string;
        public role: string;
        public lastAcces: Date
        constructor({
            email,
            role,
            name,
            gender,
            birthDate,}: UserProps
        ){
            super({name,gender,birthDate} )
            this.lastAcces = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }

    }

    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthDate: Date,
    }

    class UserSettings extends User{

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            {workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthDate,}: UserSettingsProps

        ){
            super({email, role, name, gender, birthDate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    //const newPerson = new Person('Diego','M',new Date('2000-03-02'))
    //console.log(newPerson);
    const userSettings = new UserSettings(
        {workingDirectory:'/user',
        lastOpenFolder:'clean',
        email:'hola@out',
        role:'Admin',
        name:'Diego',
        gender:'M',
        birthDate:new Date('2000-03-02')}
    );
    console.log({userSettings,areCredentialsValid: userSettings.checkCredentials()});
})();