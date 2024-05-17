(()=>{

    //Aplicando el principio de responsabilidad unica
    //Priorizar la composicion frente a la herencia
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
        email: string,
        role: string,
    }

    class User{
        public email: string;
        public role: string;
        public lastAcces: Date
        constructor({ 
            email,
            role,
        }: UserProps){
            this.lastAcces = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }

    }




    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class Settings{

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps ){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings{
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name,gender,birthDate,email,role,workingDirectory,lastOpenFolder
        }: UserSettingsProps){
            this.person = new Person({name, gender, birthDate});
            this.user = new User({email, role});
            this.settings = new Settings({workingDirectory,lastOpenFolder});
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
    console.log({userSettings});
    console.log(userSettings.user.checkCredentials());
})();