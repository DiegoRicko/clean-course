(() => {

    // función para obtener información de una película por Id
    function getMovieInfoById( movieId: string ) {
        let movieInfo: string = '';
        console.log({ movieInfo });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastInfo( movieId: string ) {
        let cast: string = ''
        console.log( cast );
    }

    // funcion para obtener el bio del actor por el id
    function getActorBio( actorId: string ) {
        let bio: string = ''
        console.log({ bio });
    }
    
    // Crear una película
    interface Movie{
        title:          string;
        description:    string;
        rating:         number;
        cast:           string[];
    }
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }



    function checkName(fullName: string){
        console.log('cheque el nombre');
        return true;
    }
    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( checkName(fullName) ) return false;

        console.log('Crear actor');
        return true;        

    }

    //Funcion fea
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {

        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;
        
        return (isRetired) ? 3000 :4000;
    }
    


})();
