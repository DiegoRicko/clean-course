
interface Bird{
    eat(): void;
}

interface FlyingBird{
    fly(): number;
}

interface RunningBird{
    run(): void;
}

interface SwimmerBird{
    swim(): void;
}

class Tucan implements Bird, FlyingBird{

    public fly(){return 500;}
    public eat(){}
    public run(){}
    public swim(){}
}


class hummingbird implements Bird, FlyingBird{

    public fly(){return 5000;}
    public eat(){}
    public run(){}
    public swim(){}
}


class Ostrich implements Bird, RunningBird{
    public eat(){}
    public run(){}
    public swim(){}
}


class Penguin implements Bird, SwimmerBird{
    public eat(){}
    public run(){}
    public swim(){}
}